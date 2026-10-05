---
title: Webhooks
sidebar_position: 1
description: "\"Laat de telefoon uw CRM of een ander systeem een verzoek sturen wanneer een gesprek begint, verandert of eindigt — met de precieze verzoeken van een inkomend en een uitgaand gesprek.\""
---

Een webhook is een verzoek dat de telefoon naar een adres naar keuze stuurt, telkens wanneer er iets met een gesprek gebeurt. Zo kan een CRM de klantkaart openen vóór de tweede beltoon, een gesprek vastleggen als het eindigt, of een lampje op een wandbord laten branden. Een webhook vraagt geen inkomende firewallregels: de telefoon belt u. Omdat de verzoeken vanaf de werkplek worden verstuurd, hoeft het adres alleen vanaf die computer bereikbaar te zijn — een intern `http://crm.local/calls` werkt net zo goed als een openbaar HTTPS-adres.

Webhooks staan na de installatie **uit**, tot u ze aanzet. Ze werken naast de [lokale REST-API](/integration/rest-api): een gebeurtenis zegt dat er iets veranderd is, de API geeft de actuele gegevens.

## Ze aanzetten {#turning-them-on}

Open **Instellingen → Integratie**. **Webhooks** is het eerste onderdeel van het tabblad.

<Shot name="24_webhooks" alt="Instellingen → Integratie → Webhooks, met https://crm.local/calls als adres" />

1. Vink **Een ander systeem over gesprekken vertellen** aan. *Er wordt één verzoek verzonden voor elke gebeurtenis die u hieronder aanvinkt.*
2. Vul het **Adres** in dat de gebeurtenissen moet ontvangen, bijvoorbeeld `https://crm.local/calls`.
3. Kies de **Methode**: **POST** (de standaard) of **GET**.
4. Vink onder **Gebeurtenissen** aan wat er verstuurd moet worden: **Een nieuw gesprek**, **Een gesprek dat eindigt**, **Een gesprek dat van toestand verandert**.
5. Stel eventueel onder **Autorisatie** een koptekst in die uw ontvanger kan controleren: een **Koptekstnaam** (`Authorization` wordt voorgesteld) en een **Koptekstwaarde**. De waarde wordt bewaard in de sleutelhanger van de computer, nooit in een instellingenbestand; na het opslaan toont het veld *Opgeslagen — typ om hem te vervangen*.
6. Druk op **Een testgebeurtenis verzenden** om te zien of ze aankomt. Er wordt één gebeurtenis verstuurd voor een gesprek dat nooit heeft plaatsgevonden, met dezelfde kopteksten als een echte. Leg het ruwe verzoek vast en bouw uw ontvanger op wat uw versie werkelijk verstuurt.

Het deel van het programma dat de verzoeken verstuurt, is de module **Integratie**; die kan worden uitgezet bij [Modules](/application/modules).

## De gebeurtenissen {#the-events}

| Aangevinkt als | Gebeurtenis | Verstuurd wanneer |
| --- | --- | --- |
| **Een nieuw gesprek** | `call-started` | Een inkomend gesprek begint over te gaan of er wordt een uitgaand gesprek gestart. |
| **Een gesprek dat van toestand verandert** | `call-state-changed` | De `state` van het gesprek verandert: het wordt aangenomen, door een van beide kanten in de wacht gezet of hervat, of het gaat een vergadering in of uit. Dempen verstuurt haar niet. |
| **Een gesprek dat eindigt** | `call-ended` | Het gesprek is beëindigd. |

Elke gebeurtenis kan los worden aangevinkt. Een pop-up met de klantkaart heeft alleen de eerste nodig; een gespreksregistratie alleen de laatste. `call-started` wordt als eerste verstuurd en moet snel worden afgehandeld.

## Hoe het verzoek eruitziet {#what-the-request-looks-like}

Met het adres `https://crm.local/calls` en de methode **POST** stuurt de telefoon dit. De body is JSON, en de koptekst is degene die u onder **Autorisatie** hebt ingesteld:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

De `User-Agent` bevat de versie van het programma en de manier waarop het is geïnstalleerd.

## Een inkomend gesprek, gebeurtenis voor gebeurtenis {#an-incoming-call-event-by-event}

Een gesprek van toestel `1020` naar account `1002` gaat over, wordt aangenomen, en wie het aannam hangt vier seconden later op. Met alle drie de gebeurtenissen aangevinkt krijgt de ontvanger drie verzoeken, na elkaar. Ze dragen allemaal dezelfde `id` en `seance_id`.

### 1. Het gaat over: `call-started` {#1-it-rings-call-started}

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

Dit is het moment om de beller op te zoeken via `number` en de klantkaart te tonen. `state` is `ringing-in` en `duration_s` is `0`.

### 2. Het wordt aangenomen: `call-state-changed` {#2-it-is-answered-call-state-changed}

Ongeveer drie seconden later:

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

`state` is nu `active`, en `callstate_ts` is opgeschoven naar het moment van de verandering, terwijl `callstart_ts` blijft waar het was.

### 3. Het eindigt: `call-ended` {#3-it-ends-call-ended}

Vier seconden gesprek later:

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

`state` is `ended`, `duration_s` is de duur van het gesprek, en `reason` zegt wie het beëindigde: hier `local-hangup`, omdat de persoon aan deze telefoon ophing.

## Een uitgaand gesprek, gebeurtenis voor gebeurtenis {#an-outgoing-call-event-by-event}

Hetzelfde toestel wordt gebeld vanaf account `1002`: de persoon kiest `1020`, de telefoon gaat over, de andere kant neemt op, praat zeven seconden en hangt op. De ontvanger krijgt vier verzoeken, één meer dan bij een inkomend gesprek, omdat een uitgaand gesprek een eigen toestand heeft terwijl het aan de andere kant overgaat.

### 1. Het wordt gekozen: `call-started` {#1-it-is-dialled-call-started}

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

`direction` is `out`, `state` is `dialing`, en `dialed` bevat het nummer zoals het werd gekozen. De telefoon kent de naam van de andere partij nog niet, dus `name` is leeg.

### 2. Het gaat over aan de andere kant: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Een halve seconde later:

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

`state` is `ringing-out`.

### 3. De andere kant neemt op: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Vier seconden daarna:

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

`state` is `active`. De `name` is nu ingevuld, en de `uri` is het adres van de partij zoals het antwoord het meldde. `duration_s` is nog `0`: dat telt vanaf dit moment.

### 4. Het eindigt: `call-ended` {#4-it-ends-call-ended}

Zeven seconden later hangt de andere kant op:

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

`duration_s` is `7`, en `reason` is `remote-hangup`, omdat de andere kant het gesprek beëindigde. Als u zelf ophangt, is het `local-hangup`, zoals bij het inkomende gesprek hierboven.

### De toestanden naast elkaar {#the-states-side-by-side}

| | Inkomend gesprek | Uitgaand gesprek |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, dan `active` |
| `call-ended` | `ended` | `ended` |

## De velden {#the-fields}

**Elke waarde is een string**, ook getallen en tijdstempels: `"duration_s": "42"`. Een onbekend moment is een lege string. De namen volgen één conventie: `_id` is een identificatie, `_ts` is Unix-tijd in milliseconden (UTC), `_s` is een duur in seconden — net als in de REST-API, waar de waarden JSON-getallen zijn.

| Veld | Betekenis |
| --- | --- |
| `event` | `call-started`, `call-state-changed` of `call-ended`. |
| `id` | Het gesprek: dezelfde UUID als in `GET /calls` en `/calls/{id}/…`, en dezelfde in elke gebeurtenis van het gesprek. |
| `seance_id` | Het gesprek in bredere zin waartoe dit gesprek behoort; zie [hieronder](#one-conversation-across-transfers). |
| `direction` | `in` of `out`. |
| `state` | Dezelfde waarden als in `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (in de wacht gezet door deze telefoon), `onhold` (in de wacht gezet door de andere partij), `conference` of `ended`. |
| `number` | Het nummer van de andere partij. Koppel uw CRM-gegevens op dit veld. |
| `name` | De naam van de andere partij, uit Contacten; kan leeg zijn, en later in het gesprek worden ingevuld, zoals bij het uitgaande gesprek hierboven. |
| `uri` | Het SIP-adres van de andere partij. |
| `dialed` | De gekozen cijfers, bij een uitgaand gesprek; leeg bij een inkomend gesprek. |
| `account`, `account_id` | De lijn waarop het gesprek loopt: `username@server`, en de identificatie uit `GET /accounts`. |
| `event_ts` | Wanneer de gebeurtenis plaatsvond. |
| `callstart_ts` | Wanneer de telefoon voor het eerst van het gesprek wist. |
| `callstate_ts` | Wanneer het gesprek zijn huidige `state` binnenging. |
| `duration_s` | Gesprekstijd in seconden, van opnemen tot ophangen. Ingevuld bij `call-ended` voor een aangenomen gesprek; anders `0`. |
| `reason` | Hoe het gesprek eindigde: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; tot dan `none`. |
| `answered_by` | `no` als een persoon opnam; anders wat het gesprek aannam. |

## Eén gesprek over doorverbindingen heen {#one-conversation-across-transfers}

`seance_id` groepeert de gesprekken die samen één gesprek vormen. Een gesprek dat vanaf nul wordt gevoerd of ontvangen, begint een nieuwe. Een gesprek dat door doorverbinden ontstaat, een gesprek dat een ander vervangt, een ruggespraak over een gesprek en elk gesprek dat in een vergadering wordt samengevoegd, houden de `seance_id` van het gesprek waaruit ze voortkwamen.

Tussen telefoons reist het mee in de SIP-koptekst `X-Seance-Id`: als een gesprek wordt doorverbonden naar een collega die ook AI Softphone gebruikt, en de centrale de koptekst doorgeeft, melden beide werkplekken dezelfde `seance_id`.

## GET in plaats van POST {#get-instead-of-post}

**GET** is voor ontvangers die geen body kunnen aannemen, zoals een ouder CRM of een scriptbrug. Dezelfde velden worden dan als queryparameters verstuurd.

Met **GET** kan het adres een sjabloon zijn: elk `[veld]` wordt vervangen door de waarde van dat veld, procentgecodeerd. Bijvoorbeeld:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

De plaatshouders gebruiken de veldnamen hierboven. Sjablonen die met de eerdere namen zijn opgeslagen (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) blijven werken.

## Hoe de gebeurtenissen worden bezorgd {#how-the-events-are-delivered}

| Gedrag | Wat het voor u betekent |
| --- | --- |
| Gebeurtenissen gaan in een wachtrij en worden niet vanuit het gesprek zelf verstuurd | Een trage ontvanger vertraagt nooit het overgaan, gesprekken of doorverbindingen. |
| Een volle wachtrij laat gebeurtenissen vallen | Als uw ontvanger niet meer antwoordt, gaan gebeurtenissen verloren maar blijft de telefoon werken. Houd `webhooks_dropped_total` in de gaten. |
| Geweigerde en onbereikbare bezorgingen worden geteld | Een stijgende `webhooks_failed_total` terwijl `webhooks_delivered_total` stilstaat, wijst naar de ontvanger. |
| Gebeurtenissen komen op volgorde aan | Gesprek begonnen, dan de toestandswijzigingen, dan gesprek beëindigd. Gebruik `callstate_ts` om opgeslagen gebeurtenissen te ordenen, niet het tijdstip waarop ze binnenkwamen. |
| Minstens één keer | Dezelfde gebeurtenis kan twee keer komen. `id`, `event` en `callstate_ts` samen identificeren een gebeurtenis: laat uw verwerking er een overslaan die ze al heeft gezien. |

## De gebeurtenissen ontvangen {#receiving-the-events}

De enige regel voor een ontvanger: **antwoord meteen `200`, en doe het werk daarna.** Een trage ontvanger vertraagt de telefoon niet, maar vult de wachtrij, en een volle wachtrij laat gebeurtenissen vallen.

Bijvoorbeeld in Node.js met Express:

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

Om de afloop van een gesprek vast te leggen — aangenomen, gemist, geweigerd — neemt u het item met dezelfde `seance_id` en `number` uit `GET /history?limit=20` van de [REST-API](/integration/rest-api#call-history-get-history). Als uw dienst na een pauze weer start, leest u `GET /history?limit=200` en slaat u op wat u hebt gemist: webhooks voor de realtime, de geschiedenis om de gaten te vullen.

Om de verzoeken te zien voordat het CRM klaar is, richt u het **Adres** op een online verzoekinspecteur en drukt u op **Een testgebeurtenis verzenden**.

## Als er niets aankomt {#when-nothing-arrives}

| Symptoom | Wat u controleert |
| --- | --- |
| Helemaal geen webhooks | Druk op **Een testgebeurtenis verzenden**. Komt die aan, dan zijn de gebeurtenissen die u nodig hebt niet aangevinkt; zo niet, dan is het adres fout of vanaf de werkplek niet bereikbaar. |
| `webhooks_failed_total` blijft stijgen | De ontvanger weigert de verzoeken of is onbereikbaar. Bekijk zijn logboek, en of hij antwoordt op een eenvoudig verzoek vanaf de werkplek. |
| `webhooks_dropped_total` is groter dan nul | De ontvanger was te lang te traag en de wachtrij liep vol. Antwoord eerst `200` en verwerk daarna. |
| Dezelfde gebeurtenis twee keer | Te verwachten bij bezorging van minstens één keer. Behandel gebeurtenissen met dezelfde `id`, `event` en `callstate_ts` als één. |
