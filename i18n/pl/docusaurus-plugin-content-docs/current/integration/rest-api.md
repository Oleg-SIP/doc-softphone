---
title: Lokalne REST API
sidebar_position: 2
description: Pozwól innym programom na tym komputerze sterować telefonem — wykonywać połączenia i nimi zarządzać, odczytywać kontakty, historię i konta.
---

AI Softphone ma REST API do integracji CTI: program na tym samym komputerze może wykonywać połączenia i nimi sterować, odczytywać kontakty, historię połączeń i konta SIP oraz obserwować trwające połączenia. Bez SDK, bez pośrednika w chmurze i bez nasłuchu wystawionego do sieci. Żądania i odpowiedzi to JSON, więc wystarczy `curl` albo dowolny klient HTTP.

API jest **wyłączone po instalacji**; nic nie nasłuchuje, dopóki go nie włączysz. Wtedy nasłuchuje tylko na interfejsie pętli zwrotnej — *mały interfejs WWW, który odpowiada tylko temu komputerowi* — i nie jest osiągalne z sieci biurowej, VPN ani z innej maszyny.

Używaj API, gdy twój program potrzebuje danych z telefonu albo musi sterować połączeniem. Używaj [webhooków](/integration/webhooks), gdy musi reagować na połączenia na bieżąco, bez odpytywania. Większość integracji używa obu; są od siebie niezależne.

## Włączanie {#turning-it-on}

Otwórz **Ustawienia → Integracja** i przejdź do **Sterowanie lokalne**.

<Shot name="17b_settings_integration_scrolled" alt="Ustawienia → Integracja: sterowanie lokalne" />

1. Włącz **Pozwól innym programom na tym komputerze sterować telefonem**. Serwer startuje od razu.
2. Zostaw domyślny **Port**, `8377`, chyba że używa go już inny program.
3. Opcjonalnie ustaw **Token**. Po zapisaniu pole pokazuje *Zapisane — wpisz, by zastąpić*.
4. W sekcji **Dostęp** wybierz grupy do otwarcia: **Kontakty**, **Historia połączeń**, **Połączenia i ich obsługa**, **Konta**, **Ustawienia**, **Liczniki** (metryki). Wyłączona grupa nie jest filtrowana, tylko w ogóle nie jest obsługiwana.
5. Sprawdź: `curl http://127.0.0.1:8377/accounts`. Jeśli odpowiedzią jest JSON, API działa.

Nie instaluje się żadnej osobnej usługi i nie trzeba niczego uruchamiać ponownie. Część programu, która za to odpowiada, można wyłączyć w [Modułach](/application/modules) (**Integracja**).

## Własna strona API {#the-apis-own-page}

**Otwórz własną stronę API** otwiera `http://127.0.0.1:8377` w przeglądarce. Adres odpowiada listą wszystkiego, co obsługuje, po angielsku; adresy, które coś odczytują, są odnośnikami, w które można kliknąć.

<Shot name="23_api_page" alt="Własna strona API, http://127.0.0.1:8377/, otwarta w przeglądarce" />

## Dostęp i token {#access-and-the-token}

To, co program może robić, zależy od tego, czy zmienia zapisane dane, a nie od tego, czy odczytuje:

- **Bez tokenu** każdy program na komputerze może odczytywać wszystko we włączonych grupach i sterować połączeniami: wykonywać, odbierać, rozłączać, zawieszać, wznawiać, przekazywać i wysyłać DTMF.
- **Z tokenem** w nagłówku `Authorization` może też używać punktów końcowych, które zmieniają to, co zapisane. Bez tokenu te punkty końcowe nie są ani obsługiwane, ani wymieniane na własnej stronie API.

Token jest przechowywany w pęku kluczy komputera, nie w pliku ustawień, i nigdy nie jest zwracany przez `/settings`.

:::caution
Bez tokenu każdy program działający na tym komputerze może sterować telefonem, łącznie z odbieraniem połączeń. Na osobistym stanowisku zwykle jest to do przyjęcia. Na współdzielonej lub zarządzanej maszynie ustaw token i traktuj go jak każde inne hasło. Token chroni tylko żądania, które zmieniają zapisane dane, a nie połączenia: aby inne programy nie miały dostępu do połączeń, wyłącz **Połączenia i ich obsługa** w sekcji **Dostęp**.
:::

## Punkty końcowe {#endpoints}

Adres bazowy to `http://127.0.0.1:8377`. Poniższe punkty końcowe nie wymagają tokenu.

| Metoda | Ścieżka | Co robi |
| --- | --- | --- |
| GET | `/metrics` | Liczniki w formacie Prometheus. |
| GET | `/ui` | Lista nagrań jako strona HTML. |
| GET | `/ui/recordings/{id}` | Nagranie z transkrypcją jako strona HTML. |
| GET | `/ui/recordings/{id}/audio` | Dźwięk do powyższej strony. |
| GET | `/contacts` | Kontakty. |
| GET | `/contacts/{id}` | Pojedynczy kontakt. |
| GET | `/history` | Dziennik połączeń, od najnowszych. Przyjmuje `?limit=`, `?missed=true` i `?declined=true`. |
| GET | `/calls` | Trwające połączenia. |
| POST | `/calls` | Wykonuje połączenie: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Odbiera połączenie. |
| POST | `/calls/{id}/hangup` | Rozłącza połączenie. |
| POST | `/calls/{id}/hold` | Zawiesza połączenie. |
| POST | `/calls/{id}/resume` | Wznawia je. |
| POST | `/calls/{id}/dtmf` | Wysyła tony: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Przekazuje połączenie: `{"target": "..."}`. |
| GET | `/accounts` | Konta SIP i stan ich rejestracji. Nigdy hasło. |
| GET | `/settings` | Cała konfiguracja, bez sekretów. |
| GET | `/taxonomy` | Kategorie, etykiety i sygnały ostrzegawcze, z ich kodami. |

Każdy identyfikator to UUID nadany przez telefon: `id` połączenia pochodzi z `/calls` albo z odpowiedzi na `POST /calls`, `id` konta z `/accounts`.

Nazwy pól są w snake_case, a końcówka mówi o typie: `_id` to odwołanie do UUID, `_ts` to moment w milisekundach uniksowych (UTC), `_s` to długość w sekundach. To samo dotyczy webhooków; tylko `/settings` ma własne nazwy. W REST API te wartości są liczbami JSON, a nieznany moment to `null`.

## Przykład: wykonanie połączenia {#example-placing-a-call}

`POST /calls` wykonuje połączenie wychodzące. Treść to JSON z `number` do wybrania i, opcjonalnie, `account_id` konta, z którego dzwonić:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Odpowiedzią jest identyfikator nowego połączenia:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` jest wymagany. Bez niego odpowiedź to `400 {"error":"a call needs a number"}` i nic nie jest wybierane.
- Numer jest uzupełniany na wybranym koncie tak, jak uzupełnia go pole wybierania: `1020` jest wysyłany jako `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` uzupełnia swój `target` w ten sam sposób; cel, który ma już schemat lub `@`, jest wysyłany bez zmian.
- `account_id` jest opcjonalne; weź je z `GET /accounts`. Bez niego połączenie idzie z konta wybranego w oknie głównym.
- Używaj `id` w `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` i `transfer`. [Webhooki](/integration/webhooks#an-outgoing-call-event-by-event) tego połączenia mają to samo `id`.

### Ze strony WWW: kliknij, aby zadzwonić {#from-a-web-page-click-to-call}

Strona, która wywołuje `127.0.0.1`, trafia do komputera, na którym działa przeglądarka — tego samego, na którym działa telefon — więc przycisk „kliknij, aby zadzwonić” w CRM nie potrzebuje własnego serwera:

```javascript
async function dial(number) {
  const r = await fetch("http://127.0.0.1:8377/calls", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number }),
  });
  if (!r.ok) console.warn("softphone:", (await r.json()).error);
}
```

## Co zawierają odpowiedzi {#what-the-answers-contain}

### Trwające połączenia: `GET /calls` {#calls-in-progress-get-calls}

Każde połączenie ma swoje `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` i `callstate_ts`.

- `state` to `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (zawieszone przez ten telefon), `onhold` (zawieszone przez drugą stronę), `conference` lub `ended`. Gdy pasuje więcej niż jeden, `conference` ma pierwszeństwo przed `hold`, a `hold` przed `onhold`.
- `muted` mówi, czy mikrofon w połączeniu jest wyciszony; wyciszenie nie zmienia `state`.
- `seance_id` to rozmowa: połączenia powiązane przekazaniem, konsultacją lub konferencją mają go wspólnego.
- `event_ts` to chwila, w której udzielono odpowiedzi. Porównaj go z `callstate_ts`, aby zobaczyć, jak długo połączenie jest w swoim stanie, bez polegania na własnym zegarze.

### Konta: `GET /accounts` {#accounts-get-accounts}

Każde konto ma swoje `id` (`account_id` wszędzie indziej), swoje ustawienia — `transport` (`udp`, `tcp` lub `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` i inne — czy jest `enabled` oraz swój `state` w centrali: `registered`, gdy linia działa. Hasła nigdy nie są dołączane.

### Historia połączeń: `GET /history` {#call-history-get-history}

Od najnowszych, 100 wpisów, chyba że `?limit=` mówi inaczej. `?missed=true` zwraca tylko nieodebrane połączenia, `?declined=true` tylko połączenia odrzucone przez ten telefon.

| Pole | Znaczenie |
| --- | --- |
| `id` | Własny identyfikator wpisu historii. To nie jest `id` połączenia z `/calls` i webhooków; łączy je `seance_id`. |
| `outcome` | Główna klasyfikacja: `answered`, `missed`, `declined` lub `failed`. |
| `answered` | `true` lub `false`. |
| `duration_s` | `0` dla połączenia, które nigdy nie zostało zestawione. |
| `number`, `uri` | Druga strona, jako numer i jako adres SIP. |
| `name` | Z Kontaktów, jeśli numer jest znany, w przeciwnym razie puste. Dopasowuj po `number`, nie po tym. |
| `dialed` | Wybrane cyfry, dla połączenia wychodzącego; puste dla przychodzącego. |
| `account`, `account_id` | Linia, na której było połączenie. |
| `reason` | Jak się zakończyło: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, jeśli odebrał człowiek; w przeciwnym razie to, co odebrało połączenie. |

### Kontakty: `GET /contacts` {#contacts-get-contacts}

Każdy kontakt ma swoje `id`, `name`, `number` i linię, do której należy, `account_id` i `account`; puste `account` oznacza, że kontakt nie jest przypisany do linii.

### Nagrania {#recordings}

Nagrania i transkrypcje nie są wydawane jako JSON. API udostępnia je jako strony HTML, `/ui` i `/ui/recordings/{id}`: linkuj do tych stron z CRM zamiast przenosić dźwięk. Odnośnik otwiera się na komputerze, który przechowuje nagranie, a dźwięk nigdy go nie opuszcza.

## Taksonomia i ustawienia {#taxonomy-and-settings}

Każdy wpis `/taxonomy` ma stały `code`, `title` i `description` w języku interfejsu, `kind` (`category`, `tag` lub `red_flag`) oraz, dla sygnałów ostrzegawczych, `severity`. **Dopasowuj po `code`, nigdy po `title`**: tytuły są w języku, na który ustawiony jest telefon. Wpis z `retired: true` jest zachowany, aby starsze połączenia nadal się rozwiązywały; nie jest już nadawany nowym połączeniom. Wczytaj taksonomię raz przy starcie, aby odwzorować słowa telefonu na własne pola.

`/settings` zwraca konfigurację oprócz sekretów: urządzenia dźwiękowe i głośności, priorytet kodeków, wygląd i język, uruchamianie, skróty klawiszowe, poziom diagnostyki i stan obu integracji — przydatne dla narzędzia wsparcia, które ma sprawdzić stanowisko bez udostępniania ekranu. `api.disabled` wymienia wyłączone grupy dostępu, a `webhooks.silenced` wyłączone zdarzenia; puste listy oznaczają, że wszystko jest włączone. Nigdy nie zawiera hasła SIP, tokenu API ani wartości nagłówka webhooka.

## Błędy {#errors}

Każdy błąd to JSON z jednym kluczem `error`, przeznaczony dla ludzi, nie do parsowania.

| Status | Treść | Znaczenie |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Ścieżka nie istnieje albo jej grupa dostępu jest wyłączona; oba przypadki celowo dają tę samą odpowiedź. |
| 404 | `{"error":"no contact with that id"}` | Ścieżka jest prawidłowa, identyfikator nie. |
| 400 | `{"error":"no call with that id"}` | Połączenie się zakończyło albo nigdy nie istniało. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` bez numeru. Nic nie zostało wybrane. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` bez cyfr. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` bez celu. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Konto połączenia zostało usunięte w trakcie połączenia, więc celu nie da się uzupełnić. Nic nie zostało wysłane do centrali. |

Odrzucone żądania są liczone w `api_requests_refused_total`, więc integracja, która po cichu zawodzi, jest widoczna w metrykach, a nie tylko w twoich własnych dziennikach.

## Metryki {#metrics}

`GET /metrics` zwraca każdy licznik telefonu, każdy z tekstem pomocy. Zbieraj je Prometheusem albo czytaj ręcznie.

| Licznik | Liczy |
| --- | --- |
| `calls_incoming_total` | Odebrane połączenia przychodzące. |
| `calls_outgoing_total` | Wykonane połączenia wychodzące. |
| `calls_answered_total` | Połączenia, które zostały odebrane. |
| `calls_missed_total` | Połączenia przychodzące, które nie zostały odebrane. |
| `calls_declined_total` | Połączenia odrzucone tutaj lub przez drugą stronę. |
| `calls_failed_total` | Połączenia, których nie udało się zestawić. |
| `registrations_succeeded_total` | Udane rejestracje SIP. |
| `registrations_failed_total` | Rejestracje SIP odrzucone lub przerwane po przekroczeniu czasu. |
| `webhooks_delivered_total` | Webhooki przyjęte przez odbiorcę. |
| `webhooks_failed_total` | Webhooki odrzucone lub niedostarczone. |
| `webhooks_dropped_total` | Webhooki porzucone, bo kolejka była pełna. |
| `api_requests_total` | Żądania obsłużone przez API. |
| `api_requests_refused_total` | Odrzucone żądania: zły token, wyłączona grupa lub nieznana ścieżka. |

## Aktualizacja starszej integracji {#updating-an-older-integration}

Wcześniejsze wersje używały nazw w camelCase i krótkich identyfikatorów. `accountId` to teraz `account_id`, `startedAt` to `callstart_ts`, `durationSeconds` to `duration_s`, `answeredBy` to `answered_by`, a pole webhooka `at` to `event_ts`. Połączenia i konta są identyfikowane wyłącznie przez UUID: `runtimeId` i identyfikatory takie jak `call-3` czy `account-2` nie są już zwracane ani przyjmowane.

## Gdy to nie działa {#when-it-does-not-work}

| Objaw | Co sprawdzić |
| --- | --- |
| Odmowa połączenia na `127.0.0.1:8377` | Sterowanie lokalne jest wyłączone, telefon nie działa albo zmieniono port. |
| `404 {"error":"no such endpoint"}` dla ścieżki z tej strony | Jej grupa dostępu jest wyłączona. |
| Odczyt działa, zapis jest odrzucany | Punkty końcowe zmieniające zapisane dane wymagają tokenu w nagłówku `Authorization`. |
| Tytuły kategorii nie są po angielsku | Tytuły idą za językiem interfejsu. Dopasowuj po `code` z `/taxonomy`. |
| Brakuje `accountId`, `startedAt` lub `at` | Integracja została napisana dla wcześniejszych nazw; zobacz wyżej. |

W przypadku problemu z rejestracją lub samym połączeniem otwórz [Diagnostykę](/troubleshooting/diagnostics).
