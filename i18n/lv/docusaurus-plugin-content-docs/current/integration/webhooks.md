---
title: Tīmekļa āķi
sidebar_position: 1
description: "\"Ļaujiet tālrunim nosūtīt pieprasījumu jūsu CRM vai citai sistēmai, kad zvans sākas, mainās vai beidzas — ar precīziem ienākoša un izejoša zvana pieprasījumiem.\""
---

Tīmekļa āķis ir pieprasījums, ko tālrunis nosūta uz jūsu izvēlētu adresi ikreiz, kad ar zvanu kaut kas notiek. Tā CRM var atvērt klienta kartīti pirms otrā zvana signāla, reģistrēt zvanu, kad tas beidzas, vai iedegt lampiņu sienas panelī. Tīmekļa āķim nav vajadzīgas ienākošās ugunsmūra kārtulas: tālrunis pats sazinās ar jums. Tā kā pieprasījumi tiek sūtīti no darbstacijas, adresei jābūt sasniedzamai tikai no šī datora — iekšēja `http://crm.local/calls` darbojas tikpat labi kā publiska HTTPS adrese.

Pēc instalēšanas tīmekļa āķi ir **izslēgti**, līdz jūs tos ieslēdzat. Tie darbojas kopā ar [vietējo REST API](/integration/rest-api): notikums paziņo, ka kaut kas mainījies, API sniedz aktuālās detaļas.

## To ieslēgšana {#turning-them-on}

Atveriet **Iestatījumi → Integrācija**. **Tīmekļa āķi** ir cilnes pirmā sadaļa.

<Shot name="24_webhooks" alt="Iestatījumi → Integrācija → Tīmekļa āķi ar adresi https://crm.local/calls" />

1. Atzīmējiet **Paziņošana citai sistēmai par zvaniem**. *Par katru zemāk atzīmēto notikumu tiek nosūtīts viens pieprasījums.*
2. Ievadiet **Adrese**, kurai jāsaņem notikumi, piemēram, `https://crm.local/calls`.
3. Izvēlieties **Metode**: **POST** (noklusējums) vai **GET**.
4. Sadaļā **Notikumi** atzīmējiet, ko sūtīt: **Jauns zvans**, **Zvans, kas beidzas**, **Zvans, kas maina stāvokli**.
5. Pēc izvēles sadaļā **Autorizācija** iestatiet galveni, ko jūsu saņēmējs var pārbaudīt: **Galvenes nosaukums** (tiek ieteikts `Authorization`) un **Galvenes vērtība**. Vērtība tiek glabāta datora atslēgu saišķī, nekad iestatījumu failā; pēc saglabāšanas laukā redzams *Saglabāts — rakstiet, lai to aizstātu*.
6. Nospiediet **Nosūtīt pārbaudes notikumu**, lai redzētu, vai tas pienāk. Tas nosūta vienu notikumu par zvanu, kas nekad nav noticis, ar tām pašām galvenēm kā īstam. Reģistrējiet neapstrādāto pieprasījumu un veidojiet saņēmēju atbilstoši tam, ko jūsu versija patiešām sūta.

Programmas daļa, kas sūta pieprasījumus, ir modulis **Integrācija**; to var izslēgt sadaļā [Moduļi](/application/modules).

## Notikumi {#the-events}

| Atzīmēts kā | Notikums | Tiek nosūtīts, kad |
| --- | --- | --- |
| **Jauns zvans** | `call-started` | Ienākošs zvans sāk zvanīt vai tiek veikts izejošs zvans. |
| **Zvans, kas maina stāvokli** | `call-state-changed` | Mainās zvana `state`: uz to atbild, kāda puse to aiztur vai turpina, vai tas pievienojas konferencei vai to atstāj. Apklusināšana to nesūta. |
| **Zvans, kas beidzas** | `call-ended` | Zvans ir beidzies. |

Katru notikumu var atzīmēt atsevišķi. Uznirstošai klienta kartītei vajag tikai pirmo; zvanu žurnālam — tikai pēdējo. `call-started` tiek nosūtīts pirmais, un tas jāapstrādā ātri.

## Kā izskatās pieprasījums {#what-the-request-looks-like}

Ar adresi `https://crm.local/calls` un metodi **POST** tālrunis nosūta šo. Saturs ir JSON, un galvene ir tā, ko iestatījāt sadaļā **Autorizācija**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` satur programmas versiju un instalēšanas veidu.

## Ienākošs zvans pa notikumiem {#an-incoming-call-event-by-event}

Zvans no iekšējā numura `1020` uz kontu `1002` zvana, uz to atbild, un atbildētājs četras sekundes vēlāk noliek klausuli. Ja atzīmēti visi trīs notikumi, saņēmējs saņem trīs pieprasījumus vienu pēc otra. Visiem ir viens un tas pats `id` un `seance_id`.

### 1. Zvana: `call-started` {#1-it-rings-call-started}

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

Tagad ir laiks sameklēt zvanītāju pēc `number` un parādīt klienta kartīti. `state` ir `ringing-in`, un `duration_s` ir `0`.

### 2. Uz to atbild: `call-state-changed` {#2-it-is-answered-call-state-changed}

Apmēram trīs sekundes vēlāk:

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

`state` tagad ir `active`, un `callstate_ts` ir pārvietojies uz izmaiņas brīdi, kamēr `callstart_ts` paliek, kur bija.

### 3. Beidzas: `call-ended` {#3-it-ends-call-ended}

Pēc četrām sarunas sekundēm:

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

`state` ir `ended`, `duration_s` ir sarunas ilgums, un `reason` norāda, kurš to beidza: šeit `local-hangup`, jo klausuli nolika cilvēks pie šī tālruņa.

## Izejošs zvans pa notikumiem {#an-outgoing-call-event-by-event}

Uz to pašu iekšējo numuru zvana no konta `1002`: cilvēks sastāda `1020`, tālrunis zvana, otra puse atbild, runā septiņas sekundes un noliek klausuli. Saņēmējs saņem četrus pieprasījumus, vienu vairāk nekā ienākošam zvanam, jo izejošam zvanam ir savs stāvoklis, kamēr tas zvana otrā galā.

### 1. Numurs tiek sastādīts: `call-started` {#1-it-is-dialled-call-started}

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

`direction` ir `out`, `state` ir `dialing`, un `dialed` satur numuru tādu, kāds tas sastādīts. Tālrunis vēl nezina otras puses vārdu, tāpēc `name` ir tukšs.

### 2. Zvana otrā galā: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Pussekundi vēlāk:

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

`state` ir `ringing-out`.

### 3. Otra puse atbild: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Četras sekundes pēc tam:

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

`state` ir `active`. `name` tagad ir aizpildīts, un `uri` ir puses adrese, kā to paziņoja atbilde. `duration_s` joprojām ir `0`: to skaita no šī brīža.

### 4. Beidzas: `call-ended` {#4-it-ends-call-ended}

Septiņas sekundes vēlāk otra puse noliek klausuli:

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

`duration_s` ir `7`, un `reason` ir `remote-hangup`, jo zvanu beidza otra puse. Kad klausuli noliekat jūs, tas ir `local-hangup`, kā iepriekšējā ienākošajā zvanā.

### Stāvokļi blakus {#the-states-side-by-side}

| | Ienākošs zvans | Izejošs zvans |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, tad `active` |
| `call-ended` | `ended` | `ended` |

## Lauki {#the-fields}

**Katra vērtība ir virkne**, ieskaitot skaitļus un laika zīmogus: `"duration_s": "42"`. Nezināms brīdis ir tukša virkne. Nosaukumi seko vienam principam: `_id` ir identifikators, `_ts` ir Unix laiks milisekundēs (UTC), `_s` ir ilgums sekundēs — tāpat kā REST API, kur vērtības ir JSON skaitļi.

| Lauks | Nozīme |
| --- | --- |
| `event` | `call-started`, `call-state-changed` vai `call-ended`. |
| `id` | Zvans: tas pats UUID, kas `GET /calls` un `/calls/{id}/…`, un tas pats katrā zvana notikumā. |
| `seance_id` | Saruna, kurai zvans pieder; skatiet [zemāk](#one-conversation-across-transfers). |
| `direction` | `in` vai `out`. |
| `state` | Tās pašas vērtības, kas `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (aizturējis šis tālrunis), `onhold` (aizturējusi otra puse), `conference` vai `ended`. |
| `number` | Otras puses numurs. Sasaistiet savus CRM ierakstus pēc šī lauka. |
| `name` | Otras puses vārds no Kontaktiem; tas var būt tukšs un aizpildīties vēlāk zvana laikā, kā iepriekšējā izejošajā zvanā. |
| `uri` | Otras puses SIP adrese. |
| `dialed` | Sastādītie cipari izejošam zvanam; ienākošam zvanam tukšs. |
| `account`, `account_id` | Līnija, kurā notiek zvans: `username@server` un identifikators no `GET /accounts`. |
| `event_ts` | Kad notikums notika. |
| `callstart_ts` | Kad tālrunis pirmo reizi uzzināja par zvanu. |
| `callstate_ts` | Kad zvans nonāca pašreizējā `state` stāvoklī. |
| `duration_s` | Sarunas laiks sekundēs no atbildes līdz klausules nolikšanai. Iestatīts `call-ended` atbildētam zvanam; citādi `0`. |
| `reason` | Kā zvans beidzās: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; līdz tam `none`. |
| `answered_by` | `no`, ja uz zvanu atbildēja cilvēks; citādi tas, kas atbildēja. |

## Viena saruna pāradresāciju laikā {#one-conversation-across-transfers}

`seance_id` grupē zvanus, kas veido vienu sarunu. Zvans, kas veikts vai saņemts no nulles, sāk jaunu. Zvans, kas radies pāradresācijas rezultātā, zvans, kas aizstāj citu, konsultācija par zvanu un katrs konferencei pievienotais zvans patur tā zvana `seance_id`, no kura tie radušies.

Starp tālruņiem tas ceļo SIP galvenē `X-Seance-Id`: kad zvans tiek pāradresēts kolēģim, kurš arī izmanto AI Softphone, un centrāle nodod galveni tālāk, abas darbstacijas ziņo vienu un to pašu `seance_id`.

## GET POST vietā {#get-instead-of-post}

**GET** ir paredzēts saņēmējiem, kas nevar pieņemt pieprasījuma saturu, piemēram, vecākam CRM vai starpniekskriptam. Tad tie paši lauki tiek nosūtīti kā vaicājuma parametri.

Ar **GET** adrese var būt veidne: katrs `[lauks]` tiek aizstāts ar šī lauka procentkodētu vērtību. Piemēram:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Vietturi izmanto iepriekš minētos lauku nosaukumus. Veidnes, kas saglabātas ar agrākajiem nosaukumiem (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`), turpina darboties.

## Kā notikumi tiek piegādāti {#how-the-events-are-delivered}

| Uzvedība | Ko tas jums nozīmē |
| --- | --- |
| Notikumi tiek ievietoti rindā, nevis sūtīti no paša zvana | Lēns saņēmējs nekad neaizkavē zvanīšanu, zvanus vai pāradresācijas. |
| Pilna rinda atmet notikumus | Ja jūsu saņēmējs pārstāj atbildēt, notikumi pazūd, bet tālrunis turpina darboties. Sekojiet līdzi `webhooks_dropped_total`. |
| Noraidītās un nesasniedzamās piegādes tiek skaitītas | Ja `webhooks_failed_total` aug, kamēr `webhooks_delivered_total` stāv uz vietas, vaina ir saņēmējā. |
| Notikumi pienāk secībā | Zvans sākās, tad stāvokļa izmaiņas, tad zvans beidzās. Saglabātu notikumu kārtošanai izmantojiet `callstate_ts`, nevis pienākšanas laiku. |
| Vismaz vienreiz | Tas pats notikums var pienākt divreiz. `id`, `event` un `callstate_ts` kopā identificē notikumu: lai jūsu apstrādātājs izlaiž jau redzēto. |

## Notikumu saņemšana {#receiving-the-events}

Vienīgais noteikums saņēmējam: **uzreiz atbildiet `200` un darbu veiciet pēc tam.** Lēns saņēmējs nepalēnina tālruni, bet piepilda rindu, un pilna rinda atmet notikumus.

Piemēram, Node.js ar Express:

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

Lai reģistrētu zvana iznākumu — atbildēts, neatbildēts, noraidīts —, ņemiet ierakstu ar to pašu `seance_id` un `number` no [REST API](/integration/rest-api#call-history-get-history) pieprasījuma `GET /history?limit=20`. Kad jūsu pakalpojums pēc pārtraukuma atkal startē, nolasiet `GET /history?limit=200` un saglabājiet nokavēto: tīmekļa āķi reāllaikam, vēsture robu aizpildīšanai.

Lai redzētu pieprasījumus, pirms CRM ir gatavs, novirziet **Adrese** uz tiešsaistes pieprasījumu pārbaudītāju un nospiediet **Nosūtīt pārbaudes notikumu**.

## Kad nekas nepienāk {#when-nothing-arrives}

| Simptoms | Ko pārbaudīt |
| --- | --- |
| Tīmekļa āķi nepienāk vispār | Nospiediet **Nosūtīt pārbaudes notikumu**. Ja tas pienāk, vajadzīgie notikumi nav atzīmēti; ja nē, adrese ir nepareiza vai nav sasniedzama no darbstacijas. |
| `webhooks_failed_total` turpina augt | Saņēmējs noraida pieprasījumus vai nav sasniedzams. Pārbaudiet tā žurnālu un to, vai tas atbild uz vienkāršu pieprasījumu no darbstacijas. |
| `webhooks_dropped_total` ir lielāks par nulli | Saņēmējs pārāk ilgi bija pārāk lēns, un rinda piepildījās. Vispirms atbildiet `200`, tad apstrādājiet. |
| Tas pats notikums divreiz | Sagaidāms piegādē „vismaz vienreiz”. Notikumus ar vienādu `id`, `event` un `callstate_ts` uzskatiet par vienu. |
