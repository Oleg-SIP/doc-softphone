---
title: Webhookok
sidebar_position: 1
description: "\"A telefon kérést küld a CRM-nek vagy egy másik rendszernek, amikor egy hívás elindul, megváltozik vagy véget ér — egy bejövő és egy kimenő hívás pontos kéréseivel.\""
---

A webhook egy kérés, amelyet a telefon egy Ön által választott címre küld minden alkalommal, amikor egy hívással történik valami. Ennek segítségével tudja egy CRM megnyitni az ügyfél adatlapját még a második csengés előtt, naplózni egy hívást, amikor véget ér, vagy felkapcsolni egy lámpát egy faliújságon. A webhookhoz nem kellenek bejövő tűzfalszabályok: a telefon kapcsolódik Önhöz. Mivel a kérések a munkaállomásról mennek ki, a címnek csak arról a számítógépről kell elérhetőnek lennie — egy belső `http://crm.local/calls` cím ugyanolyan jól működik, mint egy nyilvános HTTPS-cím.

A webhookok a telepítés után **ki vannak kapcsolva**, amíg be nem kapcsolja őket. A [helyi REST API](/integration/rest-api) mellett működnek: egy esemény jelzi, hogy valami megváltozott, az API pedig megadja az aktuális részleteket.

## Bekapcsolás {#turning-them-on}

Nyissa meg a **Beállítások → Integráció** lapot. A **Webhookok** a lap első része.

<Shot name="24_webhooks" alt="Beállítások → Integráció → Webhookok, a https://crm.local/calls címmel" />

1. Jelölje be az **Egy másik rendszer értesítése a hívásokról** lehetőséget. *Minden alább bejelölt eseményre egy kérés megy ki.*
2. Adja meg a **Cím** mezőben azt a címet, amelyre az eseményeknek érkezniük kell, például `https://crm.local/calls`.
3. Válassza ki a **Módszer** értékét: **POST** (az alapérték) vagy **GET**.
4. Az **Események** alatt jelölje be, mit küldjön: **Új hívás**, **Véget érő hívás**, **Állapotot váltó hívás**.
5. Ha szeretné, az **Engedélyezés** alatt állítson be egy fejlécet, amelyet a fogadó ellenőrizhet: egy **Fejléc neve** (javasolt: `Authorization`) és egy **Fejléc értéke** mezőt. Az értéket a számítógép kulcstartója őrzi, soha nem egy beállításfájl; mentés után a mezőben az *Elmentve — írjon, hogy lecserélje* felirat látható.
6. Nyomja meg a **Teszt esemény küldése** gombot, hogy lássa, megérkezik-e. Ez egy eseményt küld egy soha meg nem történt hívásról, ugyanazokkal a fejlécekkel, mint egy valódi. Naplózza a nyers kérést, és a fogadót aszerint építse fel, amit az Ön verziója ténylegesen küld.

A program kéréseket küldő része az **Integráció** modul; a [Modulok](/application/modules) között kikapcsolható.

## Az események {#the-events}

| Bejelölve mint | Esemény | Mikor küldi |
| --- | --- | --- |
| **Új hívás** | `call-started` | Egy bejövő hívás csörögni kezd, vagy egy kimenő hívás elindul. |
| **Állapotot váltó hívás** | `call-state-changed` | Megváltozik a hívás `state` értéke: fogadják, bármelyik fél tartásba teszi vagy folytatja, illetve csatlakozik egy konferenciához vagy kilép belőle. A némítás nem küldi el. |
| **Véget érő hívás** | `call-ended` | A hívás véget ért. |

Minden esemény külön is bejelölhető. Egy felugró ügyféladatlaphoz csak az első kell, egy hívásnaplóhoz csak az utolsó. A `call-started` megy ki elsőként, és gyorsan kell feldolgozni.

## Hogyan néz ki a kérés {#what-the-request-looks-like}

A `https://crm.local/calls` címmel és a **POST** módszerrel a telefon ezt küldi. A törzs JSON, a fejléc pedig az, amelyet az **Engedélyezés** alatt beállított:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

A `User-Agent` a program verzióját és a telepítés módját tartalmazza.

## Bejövő hívás, eseményről eseményre {#an-incoming-call-event-by-event}

Egy hívás az `1020`-as mellékről az `1002`-es fiókra csörög, fogadják, és aki fogadta, négy másodperccel később bontja. Mindhárom esemény bejelölésével a fogadó három kérést kap, egymás után. Mindegyikben ugyanaz az `id` és a `seance_id`.

### 1. Csörög: `call-started` {#1-it-rings-call-started}

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

Ez az a pillanat, amikor érdemes a hívót a `number` alapján kikeresni, és megjeleníteni az ügyfél adatlapját. A `state` értéke `ringing-in`, a `duration_s` értéke `0`.

### 2. Fogadják: `call-state-changed` {#2-it-is-answered-call-state-changed}

Körülbelül három másodperccel később:

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

A `state` most `active`, a `callstate_ts` pedig a változás pillanatára lépett előre, míg a `callstart_ts` ott maradt, ahol volt.

### 3. Véget ér: `call-ended` {#3-it-ends-call-ended}

Négy másodperc beszélgetés után:

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

A `state` értéke `ended`, a `duration_s` a beszélgetés hossza, a `reason` pedig megmondja, ki fejezte be: itt `local-hangup`, mert a telefonnál ülő személy bontott.

## Kimenő hívás, eseményről eseményre {#an-outgoing-call-event-by-event}

Ugyanezt a melléket hívják az `1002`-es fiókról: a felhasználó tárcsázza az `1020`-at, a telefon csörög, a túloldal fogadja, hét másodpercig beszél, majd bont. A fogadó négy kérést kap, eggyel többet, mint egy bejövő hívásnál, mert a kimenő hívásnak saját állapota van, amíg a túloldalon csörög.

### 1. Tárcsázás: `call-started` {#1-it-is-dialled-call-started}

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

A `direction` értéke `out`, a `state` értéke `dialing`, a `dialed` pedig a számot tartalmazza úgy, ahogyan tárcsázták. A telefon még nem ismeri a másik fél nevét, ezért a `name` üres.

### 2. Csörög a túloldalon: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Fél másodperccel később:

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

A `state` értéke `ringing-out`.

### 3. A túloldal fogadja: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Négy másodperccel ezután:

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

A `state` értéke `active`. A `name` most már ki van töltve, az `uri` pedig a fél címe úgy, ahogyan a válasz jelezte. A `duration_s` még mindig `0`: ettől a pillanattól számol.

### 4. Véget ér: `call-ended` {#4-it-ends-call-ended}

Hét másodperccel később a túloldal bont:

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

A `duration_s` értéke `7`, a `reason` értéke `remote-hangup`, mert a túloldal fejezte be a hívást. Ha Ön bont, az érték `local-hangup`, mint a fenti bejövő hívásnál.

### Az állapotok egymás mellett {#the-states-side-by-side}

| | Bejövő hívás | Kimenő hívás |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, majd `active` |
| `call-ended` | `ended` | `ended` |

## A mezők {#the-fields}

**Minden érték karakterlánc**, a számokat és az időbélyegeket is beleértve: `"duration_s": "42"`. Az ismeretlen időpont üres karakterlánc. A nevek egyetlen konvenciót követnek: az `_id` azonosító, a `_ts` Unix-idő ezredmásodpercben (UTC), az `_s` másodpercben megadott hossz — ugyanúgy, mint a REST API-ban, ahol az értékek JSON-számok.

| Mező | Jelentés |
| --- | --- |
| `event` | `call-started`, `call-state-changed` vagy `call-ended`. |
| `id` | A hívás: ugyanaz az UUID, mint a `GET /calls` és a `/calls/{id}/…` esetében, és a hívás minden eseményében ugyanaz. |
| `seance_id` | A beszélgetés, amelyhez a hívás tartozik; lásd [alább](#one-conversation-across-transfers). |
| `direction` | `in` vagy `out`. |
| `state` | Ugyanazok az értékek, mint a `GET /calls` esetében: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (ez a telefon tette tartásba), `onhold` (a másik fél tette tartásba), `conference` vagy `ended`. |
| `number` | A másik fél száma. A CRM rekordjait ehhez a mezőhöz illessze. |
| `name` | A másik fél neve a Névjegyekből; lehet üres, és a hívás során később is kitöltődhet, mint a fenti kimenő hívásnál. |
| `uri` | A másik fél SIP-címe. |
| `dialed` | A tárcsázott számjegyek kimenő hívásnál; bejövő hívásnál üres. |
| `account`, `account_id` | A vonal, amelyen a hívás zajlik: `username@server`, valamint az azonosító a `GET /accounts` válaszból. |
| `event_ts` | Mikor történt az esemény. |
| `callstart_ts` | Mikor szerzett először tudomást a telefon a hívásról. |
| `callstate_ts` | Mikor került a hívás az aktuális `state` állapotába. |
| `duration_s` | A beszélgetési idő másodpercben, a fogadástól a bontásig. Fogadott hívásnál a `call-ended` eseményben van kitöltve; egyébként `0`. |
| `reason` | Hogyan ért véget a hívás: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; addig `none`. |
| `answered_by` | `no`, ha egy személy fogadta a hívást; egyébként az, ami fogadta. |

## Egy beszélgetés átadásokon keresztül {#one-conversation-across-transfers}

A `seance_id` csoportosítja azokat a hívásokat, amelyek egy beszélgetést alkotnak. Egy elölről indított vagy fogadott hívás újat kezd. Az átadással létrejött hívás, egy másikat felváltó hívás, egy hívással kapcsolatos konzultáció és minden konferenciába kapcsolt hívás megtartja annak a hívásnak a `seance_id` értékét, amelyből származik.

A telefonok között az `X-Seance-Id` SIP-fejlécben utazik: ha egy hívást olyan kollégának adnak át, aki szintén AI Softphone-t használ, és az alközpont továbbítja a fejlécet, mindkét munkaállomás ugyanazt a `seance_id` értéket jelenti.

## GET a POST helyett {#get-instead-of-post}

A **GET** azoknak a fogadóknak való, amelyek nem tudnak kéréstörzset fogadni, például egy régebbi CRM-nek vagy egy szkriptes átjárónak. Ilyenkor ugyanazok a mezők lekérdezési paraméterekként mennek ki.

**GET** esetén a cím sablon is lehet: minden `[field]` helyére az adott mező értéke kerül, százalékos kódolással. Például:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

A helyőrzők a fenti mezőneveket használják. A korábbi nevekkel (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) mentett sablonok továbbra is működnek.

## Hogyan kézbesülnek az események {#how-the-events-are-delivered}

| Viselkedés | Mit jelent ez Önnek |
| --- | --- |
| Az események várólistára kerülnek, nem magából a hívásból mennek ki | Egy lassú fogadó soha nem késlelteti a csengést, a hívásokat vagy az átadásokat. |
| A megtelt várólista eldobja az eseményeket | Ha a fogadó nem válaszol többé, események vesznek el, de a telefon tovább működik. Figyelje a `webhooks_dropped_total` értékét. |
| Az elutasított és az elérhetetlen kézbesítéseket a program számolja | Ha a `webhooks_failed_total` nő, miközben a `webhooks_delivered_total` áll, a hiba a fogadónál van. |
| Az események sorrendben érkeznek | Hívás indulása, aztán az állapotváltozások, aztán a hívás vége. A tárolt események sorba rendezéséhez a `callstate_ts` értéket használja, ne az érkezésük idejét. |
| Legalább egyszer | Ugyanaz az esemény kétszer is megérkezhet. Az `id`, az `event` és a `callstate_ts` együtt azonosít egy eseményt: a kezelője hagyja ki azt, amelyet már látott. |

## Az események fogadása {#receiving-the-events}

A fogadó egyetlen szabálya: **azonnal válaszoljon `200`-zal, és utána végezze el a munkát.** Egy lassú fogadó nem lassítja a telefont, de megtölti a várólistát, a megtelt várólista pedig eldobja az eseményeket.

Például Node.js-ben, Expresszel:

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

Egy hívás kimenetelének — fogadott, nem fogadott, elutasított — naplózásához vegye ki az azonos `seance_id` és `number` értékű bejegyzést a [REST API](/integration/rest-api#call-history-get-history) `GET /history?limit=20` válaszából. Amikor a szolgáltatása egy szünet után újraindul, olvassa be a `GET /history?limit=200` választ, és tárolja el, amiről lemaradt: a webhookok a valós időhöz, az előzmények a hézagok kitöltéséhez.

Ha a CRM elkészülte előtt szeretné látni a kéréseket, irányítsa a **Cím** mezőt egy online kérésvizsgálóra, és nyomja meg a **Teszt esemény küldése** gombot.

## Ha semmi sem érkezik meg {#when-nothing-arrives}

| Tünet | Mit ellenőrizzen |
| --- | --- |
| Egyáltalán nem érkeznek webhookok | Nyomja meg a **Teszt esemény küldése** gombot. Ha megérkezik, a szükséges események nincsenek bejelölve; ha nem, a cím hibás, vagy nem érhető el a munkaállomásról. |
| A `webhooks_failed_total` folyamatosan nő | A fogadó elutasítja a kéréseket, vagy nem érhető el. Ellenőrizze a naplóját, és azt, hogy válaszol-e egy egyszerű kérésre a munkaállomásról. |
| A `webhooks_dropped_total` nagyobb nullánál | A fogadó túl sokáig volt túl lassú, és a várólista megtelt. Először válaszoljon `200`-zal, aztán dolgozza fel. |
| Ugyanaz az esemény kétszer | A legalább egyszeri kézbesítésnél ez várható. Az azonos `id`, `event` és `callstate_ts` értékű eseményeket kezelje egyként. |
