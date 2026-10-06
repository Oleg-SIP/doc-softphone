---
title: API REST local
sidebar_position: 2
description: Lăsați alte programe de pe acest calculator să conducă telefonul — să efectueze și să controleze apeluri, să citească contactele, istoricul și conturile.
---

AI Softphone are un API REST pentru integrare CTI: un program de pe același calculator poate efectua și controla apeluri, poate citi contactele, istoricul apelurilor și conturile SIP și poate urmări apelurile în curs. Fără SDK, fără intermediar în cloud și fără vreun serviciu expus în rețea. Cererile și răspunsurile sunt JSON, așa că `curl` sau orice client HTTP este suficient.

API-ul este **oprit după instalare**; nimic nu ascultă până când îl porniți. Apoi ascultă doar pe interfața de loopback — *o mică interfață web care răspunde doar acestui calculator* — și nu poate fi accesat din rețeaua biroului, printr-un VPN sau de pe alt calculator.

Folosiți API-ul când programul dumneavoastră are nevoie de date de la telefon sau trebuie să controleze un apel. Folosiți [webhookurile](/integration/webhooks) când trebuie să reacționeze la apeluri pe măsură ce au loc, fără interogări repetate. Majoritatea integrărilor le folosesc pe amândouă; sunt independente unul de celălalt.

## Pornirea lui {#turning-it-on}

Deschideți **Setări → Integrare** și mergeți la **Comandă locală**.

<Shot name="17b_settings_integration_scrolled" alt="Setări → Integrare: comandă locală" />

1. Porniți **Lasă alte programe de pe acest calculator să conducă telefonul**. Serverul pornește imediat.
2. Păstrați valoarea implicită pentru **Port**, `8377`, dacă nu cumva o folosește deja alt program.
3. Opțional, setați un **Token**. După salvare, câmpul afișează *Salvat — scrieți ca să îl înlocuiți*.
4. La **Acces**, alegeți grupurile de deschis: **Contacte**, **Istoricul apelurilor**, **Apelurile și comanda lor**, **Conturi**, **Setări**, **Contoare** (indicatorii). Un grup oprit nu este filtrat, ci nu este servit deloc.
5. Testați: `curl http://127.0.0.1:8377/accounts`. Dacă răspunsul este JSON, API-ul funcționează.

Nu se instalează niciun serviciu separat și nu este nevoie de repornire. Partea programului care face acest lucru poate fi oprită în [Module](/application/modules) (**Integrare**).

## Pagina proprie a API-ului {#the-apis-own-page}

**Deschide pagina proprie a API-ului** deschide `http://127.0.0.1:8377` într-un navigator. Adresa răspunde cu o listă a tot ce servește, în engleză; adresele care citesc ceva sunt linkuri pe care le puteți urma.

<Shot name="23_api_page" alt="Pagina proprie a API-ului, http://127.0.0.1:8377/, deschisă într-un navigator" />

## Accesul și tokenul {#access-and-the-token}

Ce poate face un program depinde de faptul că modifică sau nu datele stocate, nu de faptul că citește:

- **Fără token**, orice program de pe calculator poate citi tot din grupurile activate și poate controla apelurile: efectuare, răspuns, închidere, punere în așteptare, reluare, transfer și trimitere DTMF.
- **Cu tokenul** în antetul `Authorization`, poate folosi și punctele finale care modifică ce este stocat. Fără token, aceste puncte finale nu sunt nici servite, nici listate pe pagina proprie a API-ului.

Tokenul este păstrat în depozitul de chei al calculatorului, nu în fișierul de setări, și nu este returnat niciodată de `/settings`.

:::caution
Fără token, orice program care rulează pe acest calculator poate controla telefonul, inclusiv să răspundă la apeluri. Pe o stație de lucru personală, acest lucru este de obicei acceptabil. Pe un calculator partajat sau administrat, setați un token și tratați-l ca pe orice altă parolă. Tokenul protejează doar cererile care modifică datele salvate, nu și apelurile: ca să țineți alte programe departe de apeluri, opriți **Apelurile și comanda lor** la **Acces**.
:::

## Puncte finale {#endpoints}

Adresa de bază este `http://127.0.0.1:8377`. Punctele finale de mai jos nu au nevoie de token.

| Metodă | Cale | Ce face |
| --- | --- | --- |
| GET | `/metrics` | Contoarele, în format Prometheus. |
| GET | `/ui` | Lista înregistrărilor, ca pagină HTML. |
| GET | `/ui/recordings/{id}` | O înregistrare cu transcrierea ei, ca pagină HTML. |
| GET | `/ui/recordings/{id}/audio` | Sunetul pentru pagina de mai sus. |
| GET | `/contacts` | Contactele. |
| GET | `/contacts/{id}` | Un singur contact. |
| GET | `/history` | Istoricul apelurilor, cele mai noi primele. Acceptă `?limit=`, `?missed=true` și `?declined=true`. |
| GET | `/calls` | Apelurile în curs. |
| POST | `/calls` | Efectuează un apel: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Răspunde la un apel. |
| POST | `/calls/{id}/hangup` | Închide un apel. |
| POST | `/calls/{id}/hold` | Pune un apel în așteptare. |
| POST | `/calls/{id}/resume` | Îl scoate din așteptare. |
| POST | `/calls/{id}/dtmf` | Trimite tonuri: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Transferă apelul: `{"target": "..."}`. |
| GET | `/accounts` | Conturile SIP și starea înregistrării lor. Niciodată parola. |
| GET | `/settings` | Întreaga configurație, fără secrete. |
| GET | `/taxonomy` | Categorii, etichete și semnale de alarmă, cu codurile lor. |

Fiecare identificator este un UUID emis de telefon: `id` al unui apel vine din `/calls` sau din răspunsul la `POST /calls`, `id` al unui cont din `/accounts`.

Numele câmpurilor sunt în snake_case, iar terminația indică tipul: `_id` este o referință la un UUID, `_ts` este un moment în milisecunde Unix (UTC), `_s` este o durată în secunde. La fel este și pentru webhookuri; doar `/settings` își păstrează propriile nume. În API-ul REST, aceste valori sunt numere JSON, iar un moment necunoscut este `null`.

## Exemplu: efectuarea unui apel {#example-placing-a-call}

`POST /calls` efectuează un apel. Corpul este JSON, cu `number` de format și, opțional, `account_id` al contului de pe care se sună:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Răspunsul este identificatorul noului apel:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` este obligatoriu. Fără el, răspunsul este `400 {"error":"a call needs a number"}` și nu se formează nimic.
- Numărul este completat pe contul ales la fel cum îl completează tastatura de apelare: `1020` este trimis ca `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` își completează `target` în același fel; o țintă care are deja o schemă sau un `@` este trimisă așa cum este.
- `account_id` este opțional; luați-l din `GET /accounts`. Fără el, apelul pleacă de pe contul selectat în fereastra principală.
- Folosiți `id` în `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` și `transfer`. [Webhookurile](/integration/webhooks#an-outgoing-call-event-by-event) acestui apel poartă același `id`.

### Dintr-o pagină web: clic pentru apel {#from-a-web-page-click-to-call}

O pagină care apelează `127.0.0.1` ajunge la calculatorul pe care rulează navigatorul — același pe care rulează telefonul —, așa că un buton de tip clic pentru apel dintr-un CRM nu are nevoie de un server propriu:

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

## Ce conțin răspunsurile {#what-the-answers-contain}

### Apeluri în curs: `GET /calls` {#calls-in-progress-get-calls}

Fiecare apel are `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` și `callstate_ts`.

- `state` este `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (pus în așteptare de acest telefon), `onhold` (pus în așteptare de cealaltă parte), `conference` sau `ended`. Când se aplică mai multe, `conference` are prioritate față de `hold`, iar `hold` față de `onhold`.
- `muted` spune dacă microfonul este oprit în apel; oprirea microfonului nu schimbă `state`.
- `seance_id` este conversația: apelurile legate printr-un transfer, o consultare sau o conferință îl au în comun.
- `event_ts` este momentul în care a fost creat răspunsul. Comparați-l cu `callstate_ts` ca să vedeți de cât timp se află apelul în starea lui, fără să vă bazați pe propriul ceas.

### Conturi: `GET /accounts` {#accounts-get-accounts}

Fiecare cont are `id` (adică `account_id` din toate celelalte locuri), setările lui — `transport` (`udp`, `tcp` sau `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` și altele —, dacă este `enabled` și `state` la centrală: `registered` cât timp linia este activă. Parolele nu sunt incluse niciodată.

### Istoricul apelurilor: `GET /history` {#call-history-get-history}

Cele mai noi primele, 100 de intrări, dacă `?limit=` nu spune altfel. `?missed=true` returnează doar apelurile pierdute, `?declined=true` doar apelurile respinse de acest telefon.

| Câmp | Semnificație |
| --- | --- |
| `id` | Identificatorul propriu al intrării din istoric. Nu este `id` al apelului din `/calls` și din webhookuri; `seance_id` le leagă pe cele două. |
| `outcome` | Clasificarea principală: `answered`, `missed`, `declined` sau `failed`. |
| `answered` | `true` sau `false`. |
| `duration_s` | `0` pentru un apel care nu s-a conectat niciodată. |
| `number`, `uri` | Cealaltă parte, ca număr și ca adresă SIP. |
| `name` | Din Contacte, dacă numărul este cunoscut, altfel gol. Potriviți după `number`, nu după acest câmp. |
| `dialed` | Cifrele formate, pentru un apel efectuat; gol pentru unul primit. |
| `account`, `account_id` | Linia pe care a fost apelul. |
| `reason` | Cum s-a încheiat: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` dacă a răspuns o persoană; altfel, ce anume a răspuns la apel. |

### Contacte: `GET /contacts` {#contacts-get-contacts}

Fiecare contact are `id`, `name`, `number` și linia căreia îi aparține, `account_id` și `account`; un `account` gol înseamnă că acel contact nu este legat de o linie.

### Înregistrări {#recordings}

Înregistrările și transcrierile nu sunt oferite ca JSON. API-ul le servește ca pagini HTML, `/ui` și `/ui/recordings/{id}`: puneți din CRM linkuri către aceste pagini în loc să mutați sunetul dintr-un loc în altul. Linkul se deschide pe calculatorul care păstrează înregistrarea, iar sunetul nu îl părăsește niciodată.

## Taxonomie și setări {#taxonomy-and-settings}

Fiecare intrare din `/taxonomy` are un `code` constant, un `title` și o `description` în limba interfeței, un `kind` (`category`, `tag` sau `red_flag`) și, pentru semnalele de alarmă, o `severity`. **Potriviți după `code`, niciodată după `title`**: titlurile vin în limba setată în telefon. O intrare cu `retired: true` este păstrată pentru ca apelurile mai vechi să se rezolve în continuare; nu mai este dată apelurilor noi. Încărcați taxonomia o singură dată la pornire, ca să puneți în corespondență cuvintele telefonului cu propriile câmpuri.

`/settings` returnează configurația, cu excepția secretelor: dispozitivele audio și volumele, prioritatea codecurilor, aspectul și limba, pornirea, scurtăturile, nivelul de diagnostic și starea ambelor integrări — util pentru un instrument de asistență care trebuie să verifice o stație de lucru fără partajarea ecranului. `api.disabled` listează grupurile de acces oprite, iar `webhooks.silenced` evenimentele oprite; listele goale înseamnă că totul este pornit. Nu include niciodată parola SIP, tokenul API sau valoarea antetului webhookului.

## Erori {#errors}

Fiecare eroare este un JSON cu o singură cheie, `error`, destinată oamenilor, nu analizei automate.

| Stare | Corp | Semnificație |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Calea nu există sau grupul ei de acces este oprit; ambele dau intenționat același răspuns. |
| 404 | `{"error":"no contact with that id"}` | Calea este corectă, identificatorul nu. |
| 400 | `{"error":"no call with that id"}` | Apelul s-a încheiat sau nu a existat niciodată. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` fără număr. Nu s-a format nimic. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` fără cifre. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` fără țintă. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Contul apelului a fost eliminat în timpul apelului, așa că ținta nu poate fi completată. Nu s-a trimis nimic centralei. |

Cererile refuzate sunt numărate în `api_requests_refused_total`, așa că o integrare care eșuează în tăcere se vede în indicatori, nu doar în propriile jurnale.

## Indicatori {#metrics}

`GET /metrics` returnează fiecare contor al telefonului, fiecare cu un text de ajutor. Colectați-l cu Prometheus sau citiți-l manual.

| Contor | Numără |
| --- | --- |
| `calls_incoming_total` | Apelurile primite. |
| `calls_outgoing_total` | Apelurile efectuate. |
| `calls_answered_total` | Apelurile la care s-a răspuns. |
| `calls_missed_total` | Apelurile primite la care nu s-a răspuns. |
| `calls_declined_total` | Apelurile respinse aici sau de cealaltă parte. |
| `calls_failed_total` | Apelurile care nu au putut fi stabilite. |
| `registrations_succeeded_total` | Înregistrările SIP reușite. |
| `registrations_failed_total` | Înregistrările SIP refuzate sau expirate. |
| `webhooks_delivered_total` | Webhookurile acceptate de destinatar. |
| `webhooks_failed_total` | Webhookurile refuzate sau nelivrate. |
| `webhooks_dropped_total` | Webhookurile aruncate pentru că coada era plină. |
| `api_requests_total` | Cererile tratate de API. |
| `api_requests_refused_total` | Cererile refuzate: token greșit, grup oprit sau cale necunoscută. |

## Actualizarea unei integrări mai vechi {#updating-an-older-integration}

Versiunile anterioare foloseau nume în camelCase și identificatori scurți. `accountId` este acum `account_id`, `startedAt` este `callstart_ts`, `durationSeconds` este `duration_s`, `answeredBy` este `answered_by`, iar câmpul de webhook `at` este `event_ts`. Apelurile și conturile sunt identificate doar prin UUID: `runtimeId` și identificatori precum `call-3` sau `account-2` nu mai sunt returnați și nici acceptați.

## Când nu funcționează {#when-it-does-not-work}

| Simptom | Ce să verificați |
| --- | --- |
| Conexiune refuzată pe `127.0.0.1:8377` | Comanda locală este oprită, telefonul nu rulează sau portul a fost schimbat. |
| `404 {"error":"no such endpoint"}` pentru o cale de pe această pagină | Grupul ei de acces este oprit. |
| Citirea funcționează, scrierea este refuzată | Punctele finale care modifică datele stocate au nevoie de token în antetul `Authorization`. |
| Titlurile categoriilor nu sunt în engleză | Titlurile urmează limba interfeței. Potriviți după `code` din `/taxonomy`. |
| Lipsesc `accountId`, `startedAt` sau `at` | Integrarea a fost scrisă pentru numele anterioare; vedeți mai sus. |

Pentru o problemă cu înregistrarea la centrală sau cu un apel în sine, deschideți [Diagnostic](/troubleshooting/diagnostics).
