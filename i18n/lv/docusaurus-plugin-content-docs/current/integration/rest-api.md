---
title: Vietējais REST API
sidebar_position: 2
description: Ļaujiet citām šī datora programmām vadīt tālruni — veikt un vadīt zvanus, lasīt kontaktus, vēsturi un kontus.
---

AI Softphone ir REST API CTI integrācijai: programma tajā pašā datorā var veikt un vadīt zvanus, lasīt kontaktus, zvanu vēsturi un SIP kontus un uzraudzīt notiekošos zvanus. Nav SDK, nav starpnieka mākonī un nav tīklam atvērta klausītāja. Pieprasījumi un atbildes ir JSON, tāpēc pietiek ar `curl` vai jebkuru HTTP klientu.

Pēc instalēšanas API ir **izslēgts**; nekas neklausās, līdz jūs to ieslēdzat. Pēc tam tas klausās tikai atgriezeniskās cilpas saskarnē — *neliela tīmekļa saskarne, kas atbild tikai šim datoram* — un nav sasniedzams no biroja tīkla, VPN vai cita datora.

Izmantojiet API, kad jūsu programmai vajadzīgi dati no tālruņa vai tai jāvada zvans. Izmantojiet [tīmekļa āķus](/integration/webhooks), kad tai jāreaģē uz zvaniem to norises laikā, nepārtraukti nevaicājot. Lielākā daļa integrāciju izmanto abus; tie ir neatkarīgi viens no otra.

## Tā ieslēgšana {#turning-it-on}

Atveriet **Iestatījumi → Integrācija** un dodieties uz **Vietējā vadība**.

<Shot name="17b_settings_integration_scrolled" alt="Iestatījumi → Integrācija: vietējā vadība" />

1. Ieslēdziet **Ļaut citām šī datora programmām vadīt telefonu**. Serveris startē uzreiz.
2. Paturiet noklusējuma **Ports**, `8377`, ja vien cita programma to jau neizmanto.
3. Pēc izvēles iestatiet **Pilnvaru**. Pēc saglabāšanas laukā redzams *Saglabāts — rakstiet, lai to aizstātu*.
4. Sadaļā **Piekļuve** izvēlieties atveramās grupas: **Kontakti**, **Zvanu vēsture**, **Zvani un to vadība**, **Konti**, **Iestatījumi**, **Skaitītāji** (metrikas). Izslēgta grupa netiek filtrēta, bet netiek piedāvāta vispār.
5. Pārbaudiet: `curl http://127.0.0.1:8377/accounts`. Ja atbilde ir JSON, API darbojas.

Atsevišķs pakalpojums netiek instalēts, un restartēšana nav vajadzīga. Programmas daļu, kas to dara, var izslēgt sadaļā [Moduļi](/application/modules) (**Integrācija**).

## Paša API lapa {#the-apis-own-page}

**Atvērt paša API lapu** atver `http://127.0.0.1:8377` pārlūkā. Adrese atbild ar sarakstu angļu valodā ar visu, ko tā piedāvā; adreses, kas kaut ko nolasa, ir saites, kurām var sekot.

<Shot name="23_api_page" alt="Paša API lapa, http://127.0.0.1:8377/, atvērta pārlūkā" />

## Piekļuve un pilnvara {#access-and-the-token}

Tas, ko programma drīkst darīt, ir atkarīgs no tā, vai tā maina saglabātos datus, nevis no tā, vai tā lasa:

- **Bez pilnvaras** jebkura datora programma drīkst lasīt visu ieslēgtajās grupās un vadīt zvanus: veikt, atbildēt, nolikt klausuli, aizturēt, turpināt, pāradresēt un sūtīt DTMF.
- **Ar pilnvaru** galvenē `Authorization` tā drīkst izmantot arī galapunktus, kas maina saglabāto. Bez pilnvaras šie galapunkti netiek ne piedāvāti, ne uzskaitīti paša API lapā.

Pilnvara tiek glabāta datora atslēgu saišķī, nevis iestatījumu failā, un `/settings` to nekad neatgriež.

:::caution
Bez pilnvaras jebkura šajā datorā darbojoša programma var vadīt tālruni, ieskaitot atbildēšanu uz zvaniem. Personiskā darbstacijā tas parasti ir pieņemami. Koplietojamā vai pārvaldītā datorā iestatiet pilnvaru un apejieties ar to kā ar jebkuru citu paroli.
:::

## Galapunkti {#endpoints}

Bāzes adrese ir `http://127.0.0.1:8377`. Zemāk esošajiem galapunktiem pilnvara nav vajadzīga.

| Metode | Ceļš | Ko dara |
| --- | --- | --- |
| GET | `/metrics` | Skaitītāji Prometheus formātā. |
| GET | `/ui` | Ierakstu saraksts kā HTML lapa. |
| GET | `/ui/recordings/{id}` | Ieraksts ar atšifrējumu kā HTML lapa. |
| GET | `/ui/recordings/{id}/audio` | Iepriekšējās lapas skaņa. |
| GET | `/contacts` | Kontakti. |
| GET | `/contacts/{id}` | Viens kontakts. |
| GET | `/history` | Zvanu vēsture, jaunākie pirmie. Pieņem `?limit=`, `?missed=true` un `?declined=true`. |
| GET | `/calls` | Notiekošie zvani. |
| POST | `/calls` | Veic zvanu: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Atbild uz zvanu. |
| POST | `/calls/{id}/hangup` | Pārtrauc zvanu. |
| POST | `/calls/{id}/hold` | Aiztur zvanu. |
| POST | `/calls/{id}/resume` | Atsāk to. |
| POST | `/calls/{id}/dtmf` | Sūta toņus: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Pāradresē zvanu: `{"target": "..."}`. |
| GET | `/accounts` | SIP konti un to reģistrācijas stāvoklis. Nekad parole. |
| GET | `/settings` | Visa konfigurācija bez noslēpumiem. |
| GET | `/taxonomy` | Kategorijas, birkas un brīdinājuma signāli ar to kodiem. |

Katrs identifikators ir tālruņa izsniegts UUID: zvana `id` nāk no `/calls` vai no atbildes uz `POST /calls`, konta `id` — no `/accounts`.

Lauku nosaukumi ir snake_case formā, un galotne norāda tipu: `_id` ir atsauce uz UUID, `_ts` ir brīdis Unix milisekundēs (UTC), `_s` ir ilgums sekundēs. Tas pats attiecas uz tīmekļa āķiem; tikai `/settings` izmanto savus nosaukumus. REST API šīs vērtības ir JSON skaitļi, un nezināms brīdis ir `null`.

## Piemērs: zvana veikšana {#example-placing-a-call}

`POST /calls` veic izejošu zvanu. Saturs ir JSON ar sastādāmo `number` un pēc izvēles tā konta `account_id`, no kura zvanīt:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Atbilde ir jaunā zvana identifikators:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` ir obligāts. Bez tā atbilde ir `400 {"error":"a call needs a number"}`, un nekas netiek sastādīts.
- Numurs tiek papildināts izvēlētajā kontā tāpat, kā to papildina numura sastādītājs: `1020` tiek nosūtīts kā `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` papildina savu `target` tāpat; mērķis, kam jau ir shēma vai `@`, tiek nosūtīts nemainīts.
- `account_id` nav obligāts; ņemiet to no `GET /accounts`. Bez tā zvans iziet no galvenajā logā izvēlētā konta.
- Izmantojiet `id` ceļos `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` un `transfer`. Šī zvana [tīmekļa āķiem](/integration/webhooks#an-outgoing-call-event-by-event) ir tas pats `id`.

### No tīmekļa lapas: noklikšķini un zvani {#from-a-web-page-click-to-call}

Lapa, kas vēršas pie `127.0.0.1`, sasniedz datoru, kurā darbojas pārlūks — to pašu, kurā darbojas tālrunis —, tāpēc CRM pogai „noklikšķini un zvani” nav vajadzīgs savs serveris:

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

## Ko satur atbildes {#what-the-answers-contain}

### Notiekošie zvani: `GET /calls` {#calls-in-progress-get-calls}

Katram zvanam ir `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` un `callstate_ts`.

- `state` ir `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (aizturējis šis tālrunis), `onhold` (aizturējusi otra puse), `conference` vai `ended`. Ja attiecas vairāki, `conference` ir prioritārs pār `hold`, un `hold` — pār `onhold`.
- `muted` norāda, vai mikrofons zvanā ir apklusināts; apklusināšana nemaina `state`.
- `seance_id` ir saruna: zvani, kas saistīti ar pāradresāciju, konsultāciju vai konferenci, to koplieto.
- `event_ts` ir atbildes sagatavošanas brīdis. Salīdziniet to ar `callstate_ts`, lai redzētu, cik ilgi zvans ir savā stāvoklī, nepaļaujoties uz savu pulksteni.

### Konti: `GET /accounts` {#accounts-get-accounts}

Katram kontam ir `id` (visur citur `account_id`), tā iestatījumi — `transport` (`udp`, `tcp` vai `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` un citi —, vai tas ir `enabled`, un tā `state` centrālē: `registered`, kamēr līnija darbojas. Paroles nekad netiek iekļautas.

### Zvanu vēsture: `GET /history` {#call-history-get-history}

Jaunākie pirmie, 100 ieraksti, ja vien `?limit=` nenosaka citādi. `?missed=true` atgriež tikai neatbildētos zvanus, `?declined=true` — tikai šī tālruņa noraidītos.

| Lauks | Nozīme |
| --- | --- |
| `id` | Vēstures ieraksta paša identifikators. Tas nav `/calls` un tīmekļa āķu zvana `id`; `seance_id` saista abus. |
| `outcome` | Galvenā klasifikācija: `answered`, `missed`, `declined` vai `failed`. |
| `answered` | `true` vai `false`. |
| `duration_s` | `0` zvanam, kas nekad netika savienots. |
| `number`, `uri` | Otra puse kā numurs un kā SIP adrese. |
| `name` | No Kontaktiem, ja numurs ir zināms, citādi tukšs. Sasaistiet pēc `number`, nevis pēc šī. |
| `dialed` | Sastādītie cipari izejošam zvanam; ienākošam — tukšs. |
| `account`, `account_id` | Līnija, kurā notika zvans. |
| `reason` | Kā tas beidzās: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, ja atbildēja cilvēks; citādi tas, kas atbildēja uz zvanu. |

### Kontakti: `GET /contacts` {#contacts-get-contacts}

Katram kontaktam ir `id`, `name`, `number` un līnija, kam tas pieder, `account_id` un `account`; tukšs `account` nozīmē, ka kontakts nav piesaistīts līnijai.

### Ieraksti {#recordings}

Ieraksti un atšifrējumi netiek izsniegti kā JSON. API tos piedāvā kā HTML lapas `/ui` un `/ui/recordings/{id}`: no sava CRM saistiet uz šīm lapām, nevis pārvietojiet skaņu. Saite atveras datorā, kas glabā ierakstu, un skaņa to nekad neatstāj.

## Taksonomija un iestatījumi {#taxonomy-and-settings}

Katram `/taxonomy` ierakstam ir nemainīgs `code`, `title` un `description` saskarnes valodā, `kind` (`category`, `tag` vai `red_flag`) un brīdinājuma signāliem — `severity`. **Sasaistiet pēc `code`, nekad pēc `title`**: virsraksti nāk valodā, kas iestatīta tālrunī. Ieraksts ar `retired: true` tiek paturēts, lai vecākus zvanus joprojām varētu atrisināt; jauniem zvaniem tas vairs netiek piešķirts. Ielādējiet taksonomiju vienreiz startēšanas laikā, lai sasaistītu tālruņa vārdus ar saviem laukiem.

`/settings` atgriež konfigurāciju bez noslēpumiem: skaņas ierīces un skaļumus, kodeku prioritāti, izskatu un valodu, startēšanu, saīsnes, diagnostikas līmeni un abu integrāciju stāvokli — noderīgi atbalsta rīkam, kam jāpārbauda darbstacija bez ekrāna kopīgošanas. `api.disabled` uzskaita izslēgtās piekļuves grupas, un `webhooks.silenced` — izslēgtos notikumus; tukši saraksti nozīmē, ka viss ir ieslēgts. Tas nekad neietver SIP paroli, API pilnvaru vai tīmekļa āķa galvenes vērtību.

## Kļūdas {#errors}

Katra kļūda ir JSON ar vienu atslēgu `error`, paredzēta cilvēkiem, nevis mašīnparsēšanai.

| Statuss | Saturs | Nozīme |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Ceļš neeksistē, vai tā piekļuves grupa ir izslēgta; abi apzināti dod to pašu atbildi. |
| 404 | `{"error":"no contact with that id"}` | Ceļš ir pareizs, identifikators nav. |
| 400 | `{"error":"no call with that id"}` | Zvans ir beidzies vai nekad nav pastāvējis. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` bez numura. Nekas netika sastādīts. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` bez cipariem. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` bez mērķa. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Zvana konts tika noņemts zvana laikā, tāpēc mērķi nevar papildināt. Centrālei nekas netika nosūtīts. |

Noraidītie pieprasījumi tiek skaitīti `api_requests_refused_total`, tāpēc integrācija, kas klusi neizdodas, ir redzama metrikās, ne tikai jūsu žurnālos.

## Metrikas {#metrics}

`GET /metrics` atgriež katru tālruņa skaitītāju, katru ar palīdzības tekstu. Vāciet tos ar Prometheus vai lasiet manuāli.

| Skaitītājs | Skaita |
| --- | --- |
| `calls_incoming_total` | Saņemtos ienākošos zvanus. |
| `calls_outgoing_total` | Veiktos izejošos zvanus. |
| `calls_answered_total` | Zvanus, uz kuriem atbildēja. |
| `calls_missed_total` | Ienākošos zvanus, uz kuriem neatbildēja. |
| `calls_declined_total` | Zvanus, kas noraidīti šeit vai otrā pusē. |
| `calls_failed_total` | Zvanus, kurus neizdevās izveidot. |
| `registrations_succeeded_total` | Veiksmīgās SIP reģistrācijas. |
| `registrations_failed_total` | Noraidītās vai noilgušās SIP reģistrācijas. |
| `webhooks_delivered_total` | Tīmekļa āķus, ko saņēmējs pieņēma. |
| `webhooks_failed_total` | Noraidītos vai nepiegādātos tīmekļa āķus. |
| `webhooks_dropped_total` | Tīmekļa āķus, kas atmesti, jo rinda bija pilna. |
| `api_requests_total` | API apstrādātos pieprasījumus. |
| `api_requests_refused_total` | Noraidītos pieprasījumus: nepareiza pilnvara, izslēgta grupa vai nezināms ceļš. |

## Vecākas integrācijas atjaunināšana {#updating-an-older-integration}

Agrākās versijās izmantoja camelCase nosaukumus un īsus identifikatorus. `accountId` tagad ir `account_id`, `startedAt` ir `callstart_ts`, `durationSeconds` ir `duration_s`, `answeredBy` ir `answered_by`, un tīmekļa āķa lauks `at` ir `event_ts`. Zvanus un kontus identificē tikai ar UUID: `runtimeId` un identifikatori, piemēram, `call-3` vai `account-2`, vairs netiek atgriezti un pieņemti.

## Kad tas nedarbojas {#when-it-does-not-work}

| Simptoms | Ko pārbaudīt |
| --- | --- |
| Savienojums atteikts adresē `127.0.0.1:8377` | Vietējā vadība ir izslēgta, tālrunis nedarbojas, vai ports ir mainīts. |
| `404 {"error":"no such endpoint"}` šīs lapas ceļam | Tā piekļuves grupa ir izslēgta. |
| Lasīšana darbojas, rakstīšana tiek noraidīta | Galapunktiem, kas maina saglabātos datus, vajadzīga pilnvara galvenē `Authorization`. |
| Kategoriju virsraksti nav angļu valodā | Virsraksti seko saskarnes valodai. Sasaistiet pēc `code` no `/taxonomy`. |
| Trūkst `accountId`, `startedAt` vai `at` | Integrācija rakstīta agrākajiem nosaukumiem; skatiet augstāk. |

Ja problēma ir ar reģistrāciju vai pašu zvanu, atveriet [Diagnostika](/troubleshooting/diagnostics).
