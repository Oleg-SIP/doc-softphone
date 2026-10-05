---
title: Webhooki
sidebar_position: 1
description: "\"Niech telefon wysyła do twojego CRM lub innego systemu żądanie, gdy połączenie się zaczyna, zmienia lub kończy — z dokładnymi żądaniami połączenia przychodzącego i wychodzącego.\""
---

Webhook to żądanie, które telefon wysyła pod wybrany przez ciebie adres za każdym razem, gdy coś dzieje się z połączeniem. Dzięki niemu CRM może otworzyć kartę klienta przed drugim dzwonkiem, zapisać połączenie, gdy się skończy, albo zapalić lampkę na tablicy. Webhook nie wymaga reguł zapory dla ruchu przychodzącego: to telefon łączy się z tobą. Ponieważ żądania są wysyłane ze stanowiska, adres musi być osiągalny tylko z tego komputera — wewnętrzny `http://crm.local/calls` działa tak samo dobrze jak publiczny adres HTTPS.

Po instalacji webhooki są **wyłączone**, dopóki ich nie włączysz. Działają razem z [lokalnym REST API](/integration/rest-api): zdarzenie mówi, że coś się zmieniło, API podaje aktualne szczegóły.

## Włączanie {#turning-them-on}

Otwórz **Ustawienia → Integracja**. **Webhooki** to pierwsza sekcja zakładki.

<Shot name="24_webhooks" alt="Ustawienia → Integracja → Webhooki, z adresem https://crm.local/calls" />

1. Zaznacz **Powiadamianie innego systemu o połączeniach**. *Żądanie jest wysyłane dla każdego zdarzenia, które zaznaczysz poniżej.*
2. Wpisz **Adres**, który ma odbierać zdarzenia, na przykład `https://crm.local/calls`.
3. Wybierz **Metoda**: **POST** (domyślnie) lub **GET**.
4. W sekcji **Zdarzenia** zaznacz, co wysyłać: **Nowe połączenie**, **Kończące się połączenie**, **Połączenie zmieniające stan**.
5. Opcjonalnie w sekcji **Autoryzacja** ustaw nagłówek, który twój odbiorca może sprawdzić: **Nazwa nagłówka** (proponowany jest `Authorization`) i **Wartość nagłówka**. Wartość jest przechowywana w pęku kluczy komputera, nigdy w pliku ustawień; po zapisaniu pole pokazuje *Zapisane — wpisz, by zastąpić*.
6. Naciśnij **Wyślij zdarzenie testowe**, aby sprawdzić, czy dociera. Wysyła ono jedno zdarzenie dla połączenia, które nigdy się nie odbyło, z tymi samymi nagłówkami co prawdziwe. Zapisz surowe żądanie i buduj odbiorcę na podstawie tego, co twoja wersja faktycznie wysyła.

Część programu, która wysyła żądania, to moduł **Integracja**; można go wyłączyć w [Modułach](/application/modules).

## Zdarzenia {#the-events}

| Zaznaczone jako | Zdarzenie | Wysyłane, gdy |
| --- | --- | --- |
| **Nowe połączenie** | `call-started` | Połączenie przychodzące zaczyna dzwonić albo wykonywane jest połączenie wychodzące. |
| **Połączenie zmieniające stan** | `call-state-changed` | Zmienia się `state` połączenia: zostaje odebrane, zawieszone lub wznowione przez którąkolwiek stronę albo dołącza do konferencji lub ją opuszcza. Wyciszenie go nie wysyła. |
| **Kończące się połączenie** | `call-ended` | Połączenie się zakończyło. |

Każde zdarzenie można zaznaczyć osobno. Wyskakująca karta klienta potrzebuje tylko pierwszego, dziennik połączeń tylko ostatniego. `call-started` jest wysyłane jako pierwsze i powinno być obsłużone szybko.

## Jak wygląda żądanie {#what-the-request-looks-like}

Przy adresie `https://crm.local/calls` i metodzie **POST** telefon wysyła to. Treść to JSON, a nagłówek to ten, który ustawiłeś w sekcji **Autoryzacja**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` zawiera wersję programu i sposób, w jaki został zainstalowany.

## Połączenie przychodzące, zdarzenie po zdarzeniu {#an-incoming-call-event-by-event}

Połączenie z numeru wewnętrznego `1020` na konto `1002` dzwoni, zostaje odebrane, a osoba, która je odebrała, rozłącza się cztery sekundy później. Przy zaznaczonych wszystkich trzech zdarzeniach odbiorca dostaje trzy żądania, jedno po drugim. Wszystkie mają to samo `id` i `seance_id`.

### 1. Dzwoni: `call-started` {#1-it-rings-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021263333",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791021263333",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

To moment, by wyszukać dzwoniącego po `number` i pokazać kartę klienta. `state` to `ringing-in`, a `duration_s` to `0`.

### 2. Zostaje odebrane: `call-state-changed` {#2-it-is-answered-call-state-changed}

Około trzech sekund później:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021266126",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791021266131",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` to teraz `active`, a `callstate_ts` przesunęło się na moment zmiany, podczas gdy `callstart_ts` zostaje tam, gdzie było.

### 3. Kończy się: `call-ended` {#3-it-ends-call-ended}

Po czterech sekundach rozmowy:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021270400",
  "dialed": "",
  "direction": "in",
  "duration_s": "4",
  "event": "call-ended",
  "event_ts": "1791021270406",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` to `ended`, `duration_s` to długość rozmowy, a `reason` mówi, kto ją zakończył: tutaj `local-hangup`, bo rozłączyła się osoba przy tym telefonie.

## Połączenie wychodzące, zdarzenie po zdarzeniu {#an-outgoing-call-event-by-event}

Ten sam numer wewnętrzny jest wywoływany z konta `1002`: osoba wybiera `1020`, telefon dzwoni, druga strona odbiera, rozmawia siedem sekund i się rozłącza. Odbiorca dostaje cztery żądania, o jedno więcej niż przy połączeniu przychodzącym, bo połączenie wychodzące ma własny stan, gdy dzwoni po drugiej stronie.

### 1. Zostaje wybrane: `call-started` {#1-it-is-dialled-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791023883072",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "dialing",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`direction` to `out`, `state` to `dialing`, a `dialed` zawiera numer w postaci, w jakiej go wybrano. Telefon nie zna jeszcze nazwy drugiej strony, więc `name` jest puste.

### 2. Dzwoni po drugiej stronie: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Pół sekundy później:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883591",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023883591",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ringing-out",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`state` to `ringing-out`.

### 3. Druga strona odbiera: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Cztery sekundy później:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023887072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023887076",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` to `active`. `name` jest teraz wypełnione, a `uri` to adres drugiej strony w postaci podanej przez odpowiedź. `duration_s` to nadal `0`: liczy się od tej chwili.

### 4. Kończy się: `call-ended` {#4-it-ends-call-ended}

Siedem sekund później druga strona się rozłącza:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023894781",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "7",
  "event": "call-ended",
  "event_ts": "1791023894789",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`duration_s` to `7`, a `reason` to `remote-hangup`, bo połączenie zakończyła druga strona. Gdy rozłączasz się sam, jest to `local-hangup`, jak w połączeniu przychodzącym powyżej.

### Stany obok siebie {#the-states-side-by-side}

| | Połączenie przychodzące | Połączenie wychodzące |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, potem `active` |
| `call-ended` | `ended` | `ended` |

## Pola {#the-fields}

**Każda wartość jest ciągiem znaków**, łącznie z liczbami i znacznikami czasu: `"duration_s": "42"`. Nieznany moment to pusty ciąg. Nazwy podlegają jednej konwencji: `_id` to identyfikator, `_ts` to czas uniksowy w milisekundach (UTC), `_s` to długość w sekundach — tak samo jak w REST API, gdzie wartości są liczbami JSON.

| Pole | Znaczenie |
| --- | --- |
| `event` | `call-started`, `call-state-changed` lub `call-ended`. |
| `id` | Połączenie: ten sam UUID co w `GET /calls` i `/calls/{id}/…`, taki sam w każdym zdarzeniu połączenia. |
| `seance_id` | Rozmowa, do której należy połączenie; zobacz [poniżej](#one-conversation-across-transfers). |
| `direction` | `in` lub `out`. |
| `state` | Te same wartości co w `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (zawieszone przez ten telefon), `onhold` (zawieszone przez drugą stronę), `conference` lub `ended`. |
| `number` | Numer drugiej strony. Dopasowuj rekordy w CRM po tym polu. |
| `name` | Nazwa drugiej strony z Kontaktów; może być pusta i może zostać uzupełniona później w trakcie połączenia, jak w połączeniu wychodzącym powyżej. |
| `uri` | Adres SIP drugiej strony. |
| `dialed` | Wybrane cyfry, dla połączenia wychodzącego; puste dla przychodzącego. |
| `account`, `account_id` | Linia, na której jest połączenie: `username@server` i identyfikator z `GET /accounts`. |
| `event_ts` | Kiedy zdarzenie nastąpiło. |
| `callstart_ts` | Kiedy telefon po raz pierwszy dowiedział się o połączeniu. |
| `callstate_ts` | Kiedy połączenie weszło w bieżący `state`. |
| `duration_s` | Czas rozmowy w sekundach, od odebrania do rozłączenia. Ustawiany w `call-ended` dla odebranego połączenia; w pozostałych przypadkach `0`. |
| `reason` | Jak połączenie się zakończyło: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; do tego czasu `none`. |
| `answered_by` | `no`, jeśli połączenie odebrał człowiek; w przeciwnym razie to, co je odebrało. |

## Jedna rozmowa mimo przekazań {#one-conversation-across-transfers}

`seance_id` grupuje połączenia składające się na jedną rozmowę. Połączenie wykonane lub odebrane od zera zaczyna nową. Połączenie utworzone przez przekazanie, połączenie zastępujące inne, konsultacja w sprawie połączenia i każde połączenie dołączone do konferencji zachowują `seance_id` połączenia, z którego pochodzą.

Między telefonami przenosi go nagłówek SIP `X-Seance-Id`: gdy połączenie zostaje przekazane współpracownikowi, który też używa AI Softphone, a centrala przekazuje nagłówek dalej, oba stanowiska zgłaszają ten sam `seance_id`.

## GET zamiast POST {#get-instead-of-post}

**GET** jest dla odbiorców, którzy nie przyjmują treści żądania, jak starszy CRM albo skrypt pośredniczący. Te same pola są wtedy wysyłane jako parametry zapytania.

Przy **GET** adres może być szablonem: każde `[pole]` jest zastępowane wartością tego pola, zakodowaną procentowo. Na przykład:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Symbole zastępcze używają powyższych nazw pól. Szablony zapisane z wcześniejszymi nazwami (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) nadal działają.

## Jak dostarczane są zdarzenia {#how-the-events-are-delivered}

| Zachowanie | Co to dla ciebie oznacza |
| --- | --- |
| Zdarzenia trafiają do kolejki, nie są wysyłane z samego połączenia | Powolny odbiorca nigdy nie opóźnia dzwonienia, połączeń ani przekazań. |
| Pełna kolejka odrzuca zdarzenia | Jeśli twój odbiorca przestaje odpowiadać, zdarzenia giną, ale telefon działa dalej. Obserwuj `webhooks_dropped_total`. |
| Odmowy i nieosiągalne dostarczenia są liczone | Rosnące `webhooks_failed_total` przy stojącym `webhooks_delivered_total` wskazuje na odbiorcę. |
| Zdarzenia przychodzą po kolei | Początek połączenia, potem zmiany stanu, potem koniec połączenia. Aby uporządkować zapisane zdarzenia, używaj `callstate_ts`, a nie czasu ich nadejścia. |
| Co najmniej raz | To samo zdarzenie może przyjść dwa razy. `id`, `event` i `callstate_ts` razem identyfikują zdarzenie: niech twój program obsługi pomija te, które już widział. |

## Odbieranie zdarzeń {#receiving-the-events}

Jedna zasada dla odbiorcy: **odpowiedz `200` od razu, a pracę wykonaj potem.** Powolny odbiorca nie spowalnia telefonu, ale zapełnia kolejkę, a pełna kolejka odrzuca zdarzenia.

Na przykład w Node.js z Express:

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // the Header value from Settings

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST sends a JSON body, GET sends query parameters
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // answer first

  setImmediate(() => {                          // then do the work
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // your code
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // your code
    }
  });
});

app.listen(8080);
```

Aby zapisać wynik połączenia — odebrane, nieodebrane, odrzucone — weź wpis z tym samym `seance_id` i `number` z `GET /history?limit=20` w [REST API](/integration/rest-api#call-history-get-history). Gdy twoja usługa wznowi pracę po przerwie, odczytaj `GET /history?limit=200` i zapisz to, co przegapiłeś: webhooki na bieżąco, historia do uzupełniania luk.

Aby zobaczyć żądania, zanim CRM będzie gotowy, skieruj **Adres** na internetowy inspektor żądań i naciśnij **Wyślij zdarzenie testowe**.

## Gdy nic nie dociera {#when-nothing-arrives}

| Objaw | Co sprawdzić |
| --- | --- |
| Żadnych webhooków | Naciśnij **Wyślij zdarzenie testowe**. Jeśli dociera, potrzebne zdarzenia nie są zaznaczone; jeśli nie, adres jest błędny albo nieosiągalny ze stanowiska. |
| `webhooks_failed_total` stale rośnie | Odbiorca odrzuca żądania albo jest nieosiągalny. Sprawdź jego dziennik i to, czy odpowiada na proste żądanie ze stanowiska. |
| `webhooks_dropped_total` jest większe od zera | Odbiorca był zbyt wolny zbyt długo i kolejka się zapełniła. Najpierw odpowiedz `200`, potem przetwarzaj. |
| To samo zdarzenie dwa razy | Oczekiwane przy dostarczaniu co najmniej raz. Traktuj zdarzenia z tym samym `id`, `event` i `callstate_ts` jako jedno. |
