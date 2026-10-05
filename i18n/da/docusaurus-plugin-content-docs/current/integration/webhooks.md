---
title: Webhooks
sidebar_position: 1
description: "\"Lad telefonen sende dit CRM eller et andet system en forespørgsel, når et opkald starter, ændrer sig eller slutter — med de præcise forespørgsler for et indgående og et udgående opkald.\""
---

En webhook er en forespørgsel, som telefonen sender til en adresse efter dit valg, hver gang der sker noget med et opkald. Sådan kan et CRM åbne kundekortet før andet ring, registrere et opkald, når det slutter, eller tænde en lampe på en vægtavle. En webhook kræver ingen indgående firewallregler: det er telefonen, der kalder ud til dig. Fordi forespørgslerne sendes fra arbejdsstationen, skal adressen kun kunne nås fra den computer — en intern `http://crm.local/calls` virker lige så godt som en offentlig HTTPS-adresse.

Webhooks er **slået fra** efter installationen, indtil du slår dem til. De virker sammen med det [lokale REST-API](/integration/rest-api): en hændelse siger, at noget har ændret sig, API'et giver de aktuelle detaljer.

## Slå dem til {#turning-them-on}

Åbn **Indstillinger → Integration**. **Webhooks** er fanens første afsnit.

<Shot name="24_webhooks" alt="Indstillinger → Integration → Webhooks med https://crm.local/calls som adresse" />

1. Sæt flueben ved **Fortælle et andet system om opkald**. *Der sendes én forespørgsel for hver hændelse, du sætter flueben ved nedenfor.*
2. Skriv den **Adresse**, der skal modtage hændelserne, for eksempel `https://crm.local/calls`.
3. Vælg **Metode**: **POST** (standard) eller **GET**.
4. Sæt under **Hændelser** flueben ved det, der skal sendes: **Et nyt opkald**, **Et opkald, der slutter**, **Et opkald, der skifter tilstand**.
5. Sæt eventuelt under **Godkendelse** et hoved, som din modtager kan tjekke: et **Hovedets navn** (`Authorization` foreslås) og en **Hovedets værdi**. Værdien gemmes i computerens nøglering, aldrig i en indstillingsfil; når den er gemt, viser feltet *Gemt — skriv for at erstatte det*.
6. Tryk på **Send en testhændelse** for at se, at den kommer frem. Den sender én hændelse for et opkald, der aldrig har fundet sted, med de samme hoveder som en rigtig. Log den rå forespørgsel, og byg din modtager efter det, din version faktisk sender.

Den del af programmet, der sender forespørgslerne, er modulet **Integration**; det kan slås fra under [Moduler](/application/modules).

## Hændelserne {#the-events}

| Afkrydset som | Hændelse | Sendes, når |
| --- | --- | --- |
| **Et nyt opkald** | `call-started` | Et indgående opkald begynder at ringe, eller et udgående opkald foretages. |
| **Et opkald, der skifter tilstand** | `call-state-changed` | Opkaldets `state` ændrer sig: det besvares, parkeres eller genoptages af en af siderne, eller det går ind i eller ud af en konference. At slå lyden fra sender den ikke. |
| **Et opkald, der slutter** | `call-ended` | Opkaldet er slut. |

Hver hændelse kan afkrydses for sig. Et kundekort, der dukker op, behøver kun den første; en opkaldslog kun den sidste. `call-started` sendes først og bør håndteres hurtigt.

## Sådan ser forespørgslen ud {#what-the-request-looks-like}

Med adressen `https://crm.local/calls` og metoden **POST** sender telefonen dette. Indholdet er JSON, og hovedet er det, du har sat under **Godkendelse**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` bærer programmets version og den måde, det blev installeret på.

## Et indgående opkald, hændelse for hændelse {#an-incoming-call-event-by-event}

Et opkald fra lokalnummer `1020` til kontoen `1002` ringer, besvares, og den, der svarede, lægger på fire sekunder senere. Med alle tre hændelser afkrydset får modtageren tre forespørgsler, den ene efter den anden. De bærer alle samme `id` og `seance_id`.

### 1. Det ringer: `call-started` {#1-it-rings-call-started}

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

Det er nu, du slår den, der ringer, op via `number` og viser kundekortet. `state` er `ringing-in`, og `duration_s` er `0`.

### 2. Det besvares: `call-state-changed` {#2-it-is-answered-call-state-changed}

Cirka tre sekunder senere:

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

`state` er nu `active`, og `callstate_ts` er rykket frem til ændringens øjeblik, mens `callstart_ts` bliver, hvor den var.

### 3. Det slutter: `call-ended` {#3-it-ends-call-ended}

Fire sekunders samtale senere:

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

`state` er `ended`, `duration_s` er samtalens længde, og `reason` siger, hvem der afsluttede den: her `local-hangup`, fordi personen ved denne telefon lagde på.

## Et udgående opkald, hændelse for hændelse {#an-outgoing-call-event-by-event}

Det samme lokalnummer ringes op fra kontoen `1002`: personen taster `1020`, telefonen ringer, den anden side svarer, taler i syv sekunder og lægger på. Modtageren får fire forespørgsler, én mere end ved et indgående opkald, fordi et udgående opkald har sin egen tilstand, mens det ringer i den anden ende.

### 1. Det tastes: `call-started` {#1-it-is-dialled-call-started}

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

`direction` er `out`, `state` er `dialing`, og `dialed` indeholder nummeret, som det blev tastet. Telefonen kender endnu ikke den anden parts navn, så `name` er tom.

### 2. Det ringer i den anden ende: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Et halvt sekund senere:

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

`state` er `ringing-out`.

### 3. Den anden side svarer: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Fire sekunder efter det:

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

`state` er `active`. `name` er nu udfyldt, og `uri` er partens adresse, som svaret angav den. `duration_s` er stadig `0`: den tæller fra dette øjeblik.

### 4. Det slutter: `call-ended` {#4-it-ends-call-ended}

Syv sekunder senere lægger den anden side på:

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

`duration_s` er `7`, og `reason` er `remote-hangup`, fordi den anden side afsluttede opkaldet. Når du selv lægger på, er det `local-hangup`, som i det indgående opkald ovenfor.

### Tilstandene side om side {#the-states-side-by-side}

| | Indgående opkald | Udgående opkald |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, derefter `active` |
| `call-ended` | `ended` | `ended` |

## Felterne {#the-fields}

**Hver værdi er en streng**, også tal og tidsstempler: `"duration_s": "42"`. Et ukendt tidspunkt er en tom streng. Navnene følger én konvention: `_id` er en identifikator, `_ts` er Unix-tid i millisekunder (UTC), `_s` er en varighed i sekunder — som i REST-API'et, hvor værdierne er JSON-tal.

| Felt | Betydning |
| --- | --- |
| `event` | `call-started`, `call-state-changed` eller `call-ended`. |
| `id` | Opkaldet: samme UUID som i `GET /calls` og `/calls/{id}/…`, og det samme i hver hændelse for opkaldet. |
| `seance_id` | Den samtale, opkaldet hører til; se [nedenfor](#one-conversation-across-transfers). |
| `direction` | `in` eller `out`. |
| `state` | De samme værdier som i `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (parkeret af denne telefon), `onhold` (parkeret af den anden part), `conference` eller `ended`. |
| `number` | Den anden parts nummer. Match dine CRM-poster på dette felt. |
| `name` | Den anden parts navn fra Kontakter; det kan være tomt og blive udfyldt senere i opkaldet, som i det udgående opkald ovenfor. |
| `uri` | Den anden parts SIP-adresse. |
| `dialed` | De tastede cifre ved et udgående opkald; tomt ved et indgående opkald. |
| `account`, `account_id` | Den linje, opkaldet går over: `username@server` og identifikatoren fra `GET /accounts`. |
| `event_ts` | Hvornår hændelsen fandt sted. |
| `callstart_ts` | Hvornår telefonen først fik kendskab til opkaldet. |
| `callstate_ts` | Hvornår opkaldet gik ind i sin nuværende `state`. |
| `duration_s` | Taletid i sekunder fra besvarelse til læg på. Sat ved `call-ended` for et besvaret opkald; ellers `0`. |
| `reason` | Hvordan opkaldet sluttede: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; indtil da `none`. |
| `answered_by` | `no`, hvis en person besvarede opkaldet; ellers det, der besvarede det. |

## Én samtale på tværs af viderestillinger {#one-conversation-across-transfers}

`seance_id` samler de opkald, der udgør én samtale. Et opkald, der foretages eller modtages fra bunden, starter en ny. Et opkald, der opstår ved en viderestilling, et opkald, der erstatter et andet, en konsultation om et opkald og hvert opkald, der slås sammen i en konference, beholder `seance_id` fra det opkald, de kom fra.

Mellem telefoner rejser den i SIP-hovedet `X-Seance-Id`: når et opkald viderestilles til en kollega, der også bruger AI Softphone, og omstillingsanlægget sender hovedet videre, melder begge arbejdsstationer samme `seance_id`.

## GET i stedet for POST {#get-instead-of-post}

**GET** er til modtagere, der ikke kan tage imod et indhold i forespørgslen, som et ældre CRM eller et broscript. De samme felter sendes så som forespørgselsparametre.

Med **GET** kan adressen være en skabelon: hvert `[felt]` erstattes af feltets værdi, procentkodet. For eksempel:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Pladsholderne bruger feltnavnene ovenfor. Skabeloner, der er gemt med de tidligere navne (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`), virker fortsat.

## Sådan leveres hændelserne {#how-the-events-are-delivered}

| Adfærd | Hvad det betyder for dig |
| --- | --- |
| Hændelser sættes i kø og sendes ikke fra selve opkaldet | En langsom modtager forsinker aldrig ringning, opkald eller viderestillinger. |
| En fuld kø smider hændelser væk | Holder din modtager op med at svare, går hændelser tabt, men telefonen bliver ved med at virke. Hold øje med `webhooks_dropped_total`. |
| Afviste og uopnåelige leveringer tælles | Stiger `webhooks_failed_total`, mens `webhooks_delivered_total` står stille, peger det på modtageren. |
| Hændelser ankommer i rækkefølge | Opkald startet, så tilstandsskiftene, så opkald slut. Brug `callstate_ts`, ikke ankomsttidspunktet, til at sortere gemte hændelser. |
| Mindst én gang | Den samme hændelse kan komme to gange. `id`, `event` og `callstate_ts` tilsammen identificerer en hændelse: lad din håndtering springe en over, den allerede har set. |

## Modtage hændelserne {#receiving-the-events}

Den ene regel for en modtager: **svar `200` med det samme, og gør arbejdet bagefter.** En langsom modtager gør ikke telefonen langsom, men den fylder køen, og en fuld kø smider hændelser væk.

For eksempel i Node.js med Express:

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

For at registrere udfaldet af et opkald — besvaret, ubesvaret, afvist — skal du tage posten med samme `seance_id` og `number` fra `GET /history?limit=20` i [REST-API'et](/integration/rest-api#call-history-get-history). Når din tjeneste starter igen efter en pause, så læs `GET /history?limit=200`, og gem det, du gik glip af: webhooks til realtid, historikken til at fylde hullerne.

For at se forespørgslerne, før CRM'et er klar, kan du pege **Adresse** mod en online forespørgselsinspektør og trykke på **Send en testhændelse**.

## Når intet kommer frem {#when-nothing-arrives}

| Symptom | Hvad du skal tjekke |
| --- | --- |
| Ingen webhooks overhovedet | Tryk på **Send en testhændelse**. Kommer den frem, er de hændelser, du har brug for, ikke afkrydset; hvis ikke, er adressen forkert eller ikke tilgængelig fra arbejdsstationen. |
| `webhooks_failed_total` bliver ved med at stige | Modtageren afviser forespørgslerne eller kan ikke nås. Tjek dens log, og om den svarer på en simpel forespørgsel fra arbejdsstationen. |
| `webhooks_dropped_total` er over nul | Modtageren var for langsom for længe, og køen blev fyldt. Svar `200` først, og behandl bagefter. |
| Den samme hændelse to gange | Forventeligt med levering mindst én gang. Behandl hændelser med samme `id`, `event` og `callstate_ts` som én. |
