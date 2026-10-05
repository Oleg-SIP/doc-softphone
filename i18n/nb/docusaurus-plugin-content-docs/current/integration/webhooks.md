---
title: Webhooker
sidebar_position: 1
description: "\"La telefonen sende CRM-et ditt eller et annet system en forespørsel når en samtale starter, endrer seg eller slutter — med de nøyaktige forespørslene for en innkommende og en utgående samtale.\""
---

En webhook er en forespørsel telefonen sender til en adresse du velger, hver gang noe skjer med en samtale. Slik kan et CRM åpne kundekortet før andre ringesignal, logge en samtale når den slutter, eller tenne en lampe på en veggtavle. En webhook krever ingen innkommende brannmurregler: det er telefonen som ringer ut til deg. Fordi forespørslene sendes fra arbeidsstasjonen, må adressen bare kunne nås fra den maskinen — en intern `http://crm.local/calls` virker like godt som en offentlig HTTPS-adresse.

Webhooker er **av** etter installasjonen, til du slår dem på. De virker sammen med det [lokale REST-API-et](/integration/rest-api): en hendelse sier at noe har endret seg, API-et gir de aktuelle detaljene.

## Slå dem på {#turning-them-on}

Åpne **Innstillinger → Integrasjon**. **Webhooker** er den første delen av fanen.

<Shot name="24_webhooks" alt="Innstillinger → Integrasjon → Webhooker, med https://crm.local/calls som adresse" />

1. Kryss av for **Fortelle et annet system om samtaler**. *Det sendes én forespørsel for hver hendelse du krysser av nedenfor.*
2. Skriv inn **Adresse** som skal motta hendelsene, for eksempel `https://crm.local/calls`.
3. Velg **Metode**: **POST** (standard) eller **GET**.
4. Kryss under **Hendelser** av for det som skal sendes: **En ny samtale**, **En samtale som slutter**, **En samtale som skifter tilstand**.
5. Sett eventuelt under **Autorisasjon** et hode som mottakeren din kan sjekke: et **Hodets navn** (`Authorization` foreslås) og en **Hodets verdi**. Verdien lagres i maskinens nøkkelring, aldri i en innstillingsfil; når den er lagret, viser feltet *Lagret — skriv for å erstatte det*.
6. Trykk på **Send en testhendelse** for å se at den kommer fram. Den sender én hendelse for en samtale som aldri har funnet sted, med de samme hodene som en ekte. Logg den rå forespørselen, og bygg mottakeren din etter det versjonen din faktisk sender.

Den delen av programmet som sender forespørslene, er modulen **Integrasjon**; den kan slås av under [Moduler](/application/modules).

## Hendelsene {#the-events}

| Avkrysset som | Hendelse | Sendes når |
| --- | --- | --- |
| **En ny samtale** | `call-started` | En innkommende samtale begynner å ringe, eller en utgående samtale ringes. |
| **En samtale som skifter tilstand** | `call-state-changed` | Samtalens `state` endres: den besvares, settes på vent eller gjenopptas av en av sidene, eller den går inn i eller ut av en konferanse. Å slå av lyden sender den ikke. |
| **En samtale som slutter** | `call-ended` | Samtalen er slutt. |

Hver hendelse kan krysses av for seg. Et kundekort som spretter opp, trenger bare den første; en samtalelogg bare den siste. `call-started` sendes først og bør håndteres raskt.

## Slik ser forespørselen ut {#what-the-request-looks-like}

Med adressen `https://crm.local/calls` og metoden **POST** sender telefonen dette. Innholdet er JSON, og hodet er det du har satt under **Autorisasjon**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` har med programmets versjon og måten det ble installert på.

## En innkommende samtale, hendelse for hendelse {#an-incoming-call-event-by-event}

En samtale fra internnummer `1020` til kontoen `1002` ringer, besvares, og den som svarte, legger på fire sekunder senere. Med alle tre hendelsene avkrysset får mottakeren tre forespørsler, den ene etter den andre. Alle har samme `id` og `seance_id`.

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

Nå er tiden inne for å slå opp den som ringer via `number` og vise kundekortet. `state` er `ringing-in`, og `duration_s` er `0`.

### 2. Den besvares: `call-state-changed` {#2-it-is-answered-call-state-changed}

Omtrent tre sekunder senere:

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

`state` er nå `active`, og `callstate_ts` har flyttet seg til øyeblikket for endringen, mens `callstart_ts` blir der den var.

### 3. Den slutter: `call-ended` {#3-it-ends-call-ended}

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

`state` er `ended`, `duration_s` er lengden på samtalen, og `reason` sier hvem som avsluttet den: her `local-hangup`, fordi personen ved denne telefonen la på.

## En utgående samtale, hendelse for hendelse {#an-outgoing-call-event-by-event}

Det samme internnummeret ringes fra kontoen `1002`: personen slår `1020`, telefonen ringer, den andre siden svarer, snakker i sju sekunder og legger på. Mottakeren får fire forespørsler, én mer enn for en innkommende samtale, fordi en utgående samtale har en egen tilstand mens den ringer i den andre enden.

### 1. Nummeret slås: `call-started` {#1-it-is-dialled-call-started}

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

`direction` er `out`, `state` er `dialing`, og `dialed` inneholder nummeret slik det ble slått. Telefonen kjenner ennå ikke navnet på den andre parten, så `name` er tomt.

### 2. Det ringer i den andre enden: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

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

### 3. Den andre siden svarer: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Fire sekunder etter det:

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

`state` er `active`. `name` er nå fylt ut, og `uri` er partens adresse slik svaret oppga den. `duration_s` er fortsatt `0`: den teller fra dette øyeblikket.

### 4. Den slutter: `call-ended` {#4-it-ends-call-ended}

Sju sekunder senere legger den andre siden på:

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

`duration_s` er `7`, og `reason` er `remote-hangup`, fordi den andre siden avsluttet samtalen. Når du selv legger på, er det `local-hangup`, som i den innkommende samtalen over.

### Tilstandene side om side {#the-states-side-by-side}

| | Innkommende samtale | Utgående samtale |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, så `active` |
| `call-ended` | `ended` | `ended` |

## Feltene {#the-fields}

**Hver verdi er en streng**, også tall og tidsstempler: `"duration_s": "42"`. Et ukjent tidspunkt er en tom streng. Navnene følger én konvensjon: `_id` er en identifikator, `_ts` er Unix-tid i millisekunder (UTC), `_s` er en varighet i sekunder — som i REST-API-et, der verdiene er JSON-tall.

| Felt | Betydning |
| --- | --- |
| `event` | `call-started`, `call-state-changed` eller `call-ended`. |
| `id` | Samtalen: samme UUID som i `GET /calls` og `/calls/{id}/…`, og den samme i hver hendelse for samtalen. |
| `seance_id` | Samtalen den hører til i videre forstand; se [nedenfor](#one-conversation-across-transfers). |
| `direction` | `in` eller `out`. |
| `state` | De samme verdiene som i `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (satt på vent av denne telefonen), `onhold` (satt på vent av den andre parten), `conference` eller `ended`. |
| `number` | Nummeret til den andre parten. Match CRM-oppføringene dine på dette feltet. |
| `name` | Navnet på den andre parten, fra Kontakter; det kan være tomt og bli fylt ut senere i samtalen, som i den utgående samtalen over. |
| `uri` | SIP-adressen til den andre parten. |
| `dialed` | Sifrene som ble slått, for en utgående samtale; tomt for en innkommende samtale. |
| `account`, `account_id` | Linjen samtalen går over: `username@server`, og identifikatoren fra `GET /accounts`. |
| `event_ts` | Når hendelsen skjedde. |
| `callstart_ts` | Når telefonen først fikk vite om samtalen. |
| `callstate_ts` | Når samtalen gikk inn i sin nåværende `state`. |
| `duration_s` | Taletid i sekunder, fra svar til legg på. Satt ved `call-ended` for en besvart samtale; ellers `0`. |
| `reason` | Hvordan samtalen sluttet: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; `none` fram til da. |
| `answered_by` | `no` hvis en person svarte; ellers det som svarte. |

## Én samtale på tvers av overføringer {#one-conversation-across-transfers}

`seance_id` samler samtalene som utgjør én samtale. En samtale som ringes eller mottas fra bunnen av, starter en ny. En samtale som oppstår ved en overføring, en samtale som erstatter en annen, en konsultasjon om en samtale og hver samtale som slås sammen i en konferanse, beholder `seance_id` fra samtalen de kom fra.

Mellom telefoner reiser den i SIP-hodet `X-Seance-Id`: når en samtale settes over til en kollega som også bruker AI Softphone, og sentralen sender hodet videre, melder begge arbeidsstasjonene samme `seance_id`.

## GET i stedet for POST {#get-instead-of-post}

**GET** er for mottakere som ikke kan ta imot et innhold i forespørselen, som et eldre CRM eller et broskript. De samme feltene sendes da som spørreparametere.

Med **GET** kan adressen være en mal: hvert `[felt]` erstattes med verdien av feltet, prosentkodet. For eksempel:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Plassholderne bruker feltnavnene over. Maler som er lagret med de tidligere navnene (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`), virker fortsatt.

## Slik leveres hendelsene {#how-the-events-are-delivered}

| Oppførsel | Hva det betyr for deg |
| --- | --- |
| Hendelser legges i kø og sendes ikke fra selve samtalen | En treg mottaker forsinker aldri ringing, samtaler eller overføringer. |
| En full kø kaster hendelser | Slutter mottakeren din å svare, går hendelser tapt, men telefonen fortsetter å virke. Følg med på `webhooks_dropped_total`. |
| Avviste og uoppnåelige leveringer telles | Stiger `webhooks_failed_total` mens `webhooks_delivered_total` står stille, peker det på mottakeren. |
| Hendelser kommer i rekkefølge | Samtale startet, så tilstandsendringene, så samtale slutt. Bruk `callstate_ts`, ikke ankomsttiden, for å sortere lagrede hendelser. |
| Minst én gang | Den samme hendelsen kan komme to ganger. `id`, `event` og `callstate_ts` til sammen identifiserer en hendelse: la håndteringen din hoppe over en den allerede har sett. |

## Ta imot hendelsene {#receiving-the-events}

Den ene regelen for en mottaker: **svar `200` med én gang, og gjør jobben etterpå.** En treg mottaker gjør ikke telefonen treg, men den fyller køen, og en full kø kaster hendelser.

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

For å logge utfallet av en samtale — besvart, tapt, avvist — tar du oppføringen med samme `seance_id` og `number` fra `GET /history?limit=20` i [REST-API-et](/integration/rest-api#call-history-get-history). Når tjenesten din starter igjen etter en pause, leser du `GET /history?limit=200` og lagrer det du gikk glipp av: webhooker for sanntid, historikken for å fylle hullene.

For å se forespørslene før CRM-et er klart kan du peke **Adresse** mot en nettbasert forespørselsinspektør og trykke på **Send en testhendelse**.

## Når ingenting kommer fram {#when-nothing-arrives}

| Symptom | Hva du bør sjekke |
| --- | --- |
| Ingen webhooker i det hele tatt | Trykk på **Send en testhendelse**. Kommer den fram, er ikke hendelsene du trenger, krysset av; hvis ikke, er adressen feil eller ikke tilgjengelig fra arbeidsstasjonen. |
| `webhooks_failed_total` fortsetter å stige | Mottakeren avviser forespørslene eller kan ikke nås. Sjekk loggen dens, og om den svarer på en enkel forespørsel fra arbeidsstasjonen. |
| `webhooks_dropped_total` er over null | Mottakeren var for treg for lenge, og køen ble full. Svar `200` først, og behandle etterpå. |
| Den samme hendelsen to ganger | Forventet med levering minst én gang. Behandle hendelser med samme `id`, `event` og `callstate_ts` som én. |
