---
title: Webhookar
sidebar_position: 1
description: "\"Låt telefonen skicka en begäran till ditt CRM eller ett annat system när ett samtal börjar, ändras eller slutar — med de exakta begärandena för ett inkommande och ett utgående samtal.\""
---

En webhook är en begäran som telefonen skickar till en adress du väljer, varje gång något händer med ett samtal. Så kan ett CRM öppna kundkortet före andra signalen, logga ett samtal när det slutar eller tända en lampa på en väggtavla. En webhook kräver inga inkommande brandväggsregler: det är telefonen som ringer ut till dig. Eftersom begärandena skickas från arbetsstationen behöver adressen bara kunna nås från den datorn — en intern `http://crm.local/calls` fungerar lika bra som en offentlig HTTPS-adress.

Webhookar är **av** efter installationen, tills du slår på dem. De fungerar tillsammans med det [lokala REST-API:et](/integration/rest-api): en händelse säger att något har ändrats, API:et ger de aktuella detaljerna.

## Slå på dem {#turning-them-on}

Öppna **Inställningar → Integration**. **Webhookar** är flikens första avsnitt.

<Shot name="24_webhooks" alt="Inställningar → Integration → Webhookar, med https://crm.local/calls som adress" />

1. Kryssa i **Berätta för ett annat system om samtal**. *En begäran skickas för varje händelse du kryssar i nedan.*
2. Ange den **Adress** som ska ta emot händelserna, till exempel `https://crm.local/calls`.
3. Välj **Metod**: **POST** (standard) eller **GET**.
4. Kryssa under **Händelser** i vad som ska skickas: **Ett nytt samtal**, **Ett samtal som slutar**, **Ett samtal som byter tillstånd**.
5. Ange eventuellt under **Auktorisering** ett huvud som din mottagare kan kontrollera: ett **Huvudets namn** (`Authorization` föreslås) och ett **Huvudets värde**. Värdet sparas i datorns nyckelring, aldrig i en inställningsfil; när det har sparats visar fältet *Sparat — skriv för att ersätta det*.
6. Tryck på **Skicka en testhändelse** för att se att den kommer fram. Den skickar en händelse för ett samtal som aldrig har ägt rum, med samma huvuden som en riktig. Logga den råa begäran och bygg din mottagare efter vad din version faktiskt skickar.

Den del av programmet som skickar begärandena är modulen **Integration**; den kan stängas av under [Moduler](/application/modules).

## Händelserna {#the-events}

| Ikryssad som | Händelse | Skickas när |
| --- | --- | --- |
| **Ett nytt samtal** | `call-started` | Ett inkommande samtal börjar ringa eller ett utgående samtal rings. |
| **Ett samtal som byter tillstånd** | `call-state-changed` | Samtalets `state` ändras: det besvaras, parkeras eller återupptas av någon av sidorna, eller går in i eller ut ur en konferens. Att stänga av mikrofonen skickar den inte. |
| **Ett samtal som slutar** | `call-ended` | Samtalet har slutat. |

Varje händelse kan kryssas i för sig. Ett kundkort som dyker upp behöver bara den första; en samtalslogg bara den sista. `call-started` skickas först och bör hanteras snabbt.

## Hur begäran ser ut {#what-the-request-looks-like}

Med adressen `https://crm.local/calls` och metoden **POST** skickar telefonen detta. Innehållet är JSON, och huvudet är det du har angett under **Auktorisering**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` innehåller programmets version och sättet det installerades på.

## Ett inkommande samtal, händelse för händelse {#an-incoming-call-event-by-event}

Ett samtal från anknytning `1020` till kontot `1002` ringer, besvaras, och den som svarade lägger på fyra sekunder senare. Med alla tre händelser ikryssade får mottagaren tre begäranden, en efter en. Alla har samma `id` och `seance_id`.

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

Det är nu du slår upp den som ringer via `number` och visar kundkortet. `state` är `ringing-in` och `duration_s` är `0`.

### 2. Det besvaras: `call-state-changed` {#2-it-is-answered-call-state-changed}

Ungefär tre sekunder senare:

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

`state` är nu `active`, och `callstate_ts` har flyttats fram till ögonblicket för ändringen medan `callstart_ts` står kvar där den var.

### 3. Det slutar: `call-ended` {#3-it-ends-call-ended}

Fyra sekunders samtal senare:

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

`state` är `ended`, `duration_s` är samtalets längd och `reason` säger vem som avslutade det: här `local-hangup`, eftersom personen vid den här telefonen lade på.

## Ett utgående samtal, händelse för händelse {#an-outgoing-call-event-by-event}

Samma anknytning rings från kontot `1002`: personen slår `1020`, telefonen ringer, andra sidan svarar, pratar i sju sekunder och lägger på. Mottagaren får fyra begäranden, en mer än för ett inkommande samtal, eftersom ett utgående samtal har ett eget tillstånd medan det ringer i andra änden.

### 1. Numret slås: `call-started` {#1-it-is-dialled-call-started}

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

`direction` är `out`, `state` är `dialing` och `dialed` innehåller numret som det slogs. Telefonen vet ännu inte den andra partens namn, så `name` är tomt.

### 2. Det ringer i andra änden: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

En halv sekund senare:

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

`state` är `ringing-out`.

### 3. Andra sidan svarar: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Fyra sekunder efter det:

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

`state` är `active`. `name` är nu ifyllt, och `uri` är partens adress som svaret angav den. `duration_s` är fortfarande `0`: den räknas från det här ögonblicket.

### 4. Det slutar: `call-ended` {#4-it-ends-call-ended}

Sju sekunder senare lägger andra sidan på:

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

`duration_s` är `7` och `reason` är `remote-hangup`, eftersom andra sidan avslutade samtalet. När du själv lägger på är det `local-hangup`, som i det inkommande samtalet ovan.

### Tillstånden sida vid sida {#the-states-side-by-side}

| | Inkommande samtal | Utgående samtal |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, sedan `active` |
| `call-ended` | `ended` | `ended` |

## Fälten {#the-fields}

**Varje värde är en sträng**, även tal och tidsstämplar: `"duration_s": "42"`. En okänd tidpunkt är en tom sträng. Namnen följer en konvention: `_id` är en identifierare, `_ts` är Unix-tid i millisekunder (UTC), `_s` är en längd i sekunder — som i REST-API:et, där värdena är JSON-tal.

| Fält | Betydelse |
| --- | --- |
| `event` | `call-started`, `call-state-changed` eller `call-ended`. |
| `id` | Samtalet: samma UUID som i `GET /calls` och `/calls/{id}/…`, och detsamma i varje händelse för samtalet. |
| `seance_id` | Samtalet i vidare mening som det hör till; se [nedan](#one-conversation-across-transfers). |
| `direction` | `in` eller `out`. |
| `state` | Samma värden som i `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (parkerat av den här telefonen), `onhold` (parkerat av den andra parten), `conference` eller `ended`. |
| `number` | Den andra partens nummer. Matcha dina CRM-poster mot det här fältet. |
| `name` | Den andra partens namn, från Kontakter; det kan vara tomt och fyllas i senare under samtalet, som i det utgående samtalet ovan. |
| `uri` | Den andra partens SIP-adress. |
| `dialed` | De slagna siffrorna, för ett utgående samtal; tomt för ett inkommande samtal. |
| `account`, `account_id` | Linjen samtalet går över: `username@server` och identifieraren från `GET /accounts`. |
| `event_ts` | När händelsen inträffade. |
| `callstart_ts` | När telefonen först fick veta om samtalet. |
| `callstate_ts` | När samtalet gick in i sitt nuvarande `state`. |
| `duration_s` | Samtalstid i sekunder, från svar till pålägg. Satt vid `call-ended` för ett besvarat samtal; annars `0`. |
| `reason` | Hur samtalet slutade: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; `none` fram till dess. |
| `answered_by` | `no` om en person svarade; annars det som svarade. |

## Ett samtal över vidarekopplingar {#one-conversation-across-transfers}

`seance_id` samlar samtalen som utgör ett samtal. Ett samtal som rings eller tas emot från grunden startar ett nytt. Ett samtal som uppstår genom en vidarekoppling, ett samtal som ersätter ett annat, en konsultation om ett samtal och varje samtal som kopplas in i en konferens behåller `seance_id` från samtalet de kom från.

Mellan telefoner följer det med i SIP-huvudet `X-Seance-Id`: när ett samtal kopplas vidare till en kollega som också använder AI Softphone, och växeln skickar huvudet vidare, rapporterar båda arbetsstationerna samma `seance_id`.

## GET i stället för POST {#get-instead-of-post}

**GET** är för mottagare som inte kan ta emot ett innehåll i begäran, som ett äldre CRM eller ett bryggskript. Samma fält skickas då som frågeparametrar.

Med **GET** kan adressen vara en mall: varje `[fält]` ersätts med fältets värde, procentkodat. Till exempel:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Platshållarna använder fältnamnen ovan. Mallar som har sparats med de tidigare namnen (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) fungerar fortfarande.

## Hur händelserna levereras {#how-the-events-are-delivered}

| Beteende | Vad det betyder för dig |
| --- | --- |
| Händelser köas och skickas inte från själva samtalet | En långsam mottagare fördröjer aldrig signaler, samtal eller vidarekopplingar. |
| En full kö kastar händelser | Slutar din mottagare svara går händelser förlorade, men telefonen fortsätter att fungera. Håll ett öga på `webhooks_dropped_total`. |
| Avvisade och onåbara leveranser räknas | Om `webhooks_failed_total` stiger medan `webhooks_delivered_total` står still pekar det på mottagaren. |
| Händelser kommer i ordning | Samtal startat, sedan tillståndsändringarna, sedan samtal slut. Använd `callstate_ts`, inte ankomsttiden, för att sortera sparade händelser. |
| Minst en gång | Samma händelse kan komma två gånger. `id`, `event` och `callstate_ts` tillsammans identifierar en händelse: låt din hantering hoppa över en som den redan har sett. |

## Ta emot händelserna {#receiving-the-events}

Den enda regeln för en mottagare: **svara `200` direkt och gör jobbet efteråt.** En långsam mottagare gör inte telefonen långsam, men den fyller kön, och en full kö kastar händelser.

Till exempel i Node.js med Express:

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

För att logga utfallet av ett samtal — besvarat, missat, avvisat — tar du posten med samma `seance_id` och `number` från `GET /history?limit=20` i [REST-API:et](/integration/rest-api#call-history-get-history). När din tjänst startar igen efter ett avbrott läser du `GET /history?limit=200` och sparar det du missade: webhookar för realtid, historiken för att fylla luckorna.

För att se begärandena innan CRM:et är klart kan du rikta **Adress** mot en webbaserad begäranstittare och trycka på **Skicka en testhändelse**.

## När ingenting kommer fram {#when-nothing-arrives}

| Symtom | Vad du ska kontrollera |
| --- | --- |
| Inga webhookar alls | Tryck på **Skicka en testhändelse**. Kommer den fram är händelserna du behöver inte ikryssade; annars är adressen fel eller inte nåbar från arbetsstationen. |
| `webhooks_failed_total` fortsätter att stiga | Mottagaren avvisar begärandena eller kan inte nås. Kontrollera dess logg, och om den svarar på en enkel begäran från arbetsstationen. |
| `webhooks_dropped_total` är över noll | Mottagaren var för långsam för länge och kön blev full. Svara `200` först och bearbeta sedan. |
| Samma händelse två gånger | Förväntat med leverans minst en gång. Behandla händelser med samma `id`, `event` och `callstate_ts` som en. |
