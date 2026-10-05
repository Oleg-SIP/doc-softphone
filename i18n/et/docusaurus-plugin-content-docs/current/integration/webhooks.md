---
title: Veebikonksud
sidebar_position: 1
description: "\"Laske telefonil saata teie CRM-ile või muule süsteemile päring, kui kõne algab, muutub või lõpeb — koos sissetuleva ja väljamineva kõne täpsete päringutega.\""
---

Veebikonks on päring, mille telefon saadab teie valitud aadressile iga kord, kui kõnega midagi juhtub. Nii saab CRM avada kliendikaardi enne teist helinat, logida kõne selle lõppedes või süüdata seinatahvlil tule. Veebikonks ei vaja sissetulevaid tulemüüri reegleid: telefon võtab teiega ise ühendust. Kuna päringud saadetakse tööjaamast, peab aadress olema kättesaadav ainult sellest arvutist — sisemine `http://crm.local/calls` töötab sama hästi kui avalik HTTPS-aadress.

Veebikonksud on pärast paigaldamist **väljas**, kuni te need sisse lülitate. Need töötavad koos [kohaliku REST API-ga](/integration/rest-api): sündmus ütleb, et midagi muutus, API annab hetkeandmed.

## Nende sisselülitamine {#turning-them-on}

Avage **Seaded → Sidumine**. **Veebikonksud** on vahekaardi esimene jaotis.

<Shot name="24_webhooks" alt="Seaded → Sidumine → Veebikonksud, aadressiks https://crm.local/calls" />

1. Märkige **Teisele süsteemile kõnedest teatamine**. *Iga allpool märgitud sündmuse kohta saadetakse üks päring.*
2. Sisestage **Aadress**, mis peab sündmused vastu võtma, näiteks `https://crm.local/calls`.
3. Valige **Meetod**: **POST** (vaikimisi) või **GET**.
4. Märkige jaotises **Sündmused**, mida saata: **Uus kõne**, **Lõppev kõne**, **Olekut muutev kõne**.
5. Soovi korral määrake jaotises **Volitamine** päis, mida teie vastuvõtja saab kontrollida: **Päise nimi** (soovitatakse `Authorization`) ja **Päise väärtus**. Väärtust hoitakse arvuti võtmehoidjas, mitte kunagi seadete failis; pärast salvestamist näitab väli teksti *Salvestatud — kirjutage, et see asendada*.
6. Vajutage **Saada proovisündmus**, et näha, kas see jõuab kohale. See saadab ühe sündmuse kõne kohta, mida kunagi ei toimunud, samade päistega nagu päris sündmus. Logige toorpäring ja ehitage vastuvõtja selle järgi, mida teie versioon tegelikult saadab.

Päringuid saatev programmi osa on moodul **Sidumine**; selle saab välja lülitada jaotises [Moodulid](/application/modules).

## Sündmused {#the-events}

| Märgitud kui | Sündmus | Saadetakse, kui |
| --- | --- | --- |
| **Uus kõne** | `call-started` | Sissetulev kõne hakkab helisema või tehakse väljaminev kõne. |
| **Olekut muutev kõne** | `call-state-changed` | Kõne `state` muutub: sellele vastatakse, kumbki pool paneb selle ootele või jätkab, või see liitub konverentsiga või lahkub sealt. Vaigistamine seda ei saada. |
| **Lõppev kõne** | `call-ended` | Kõne on lõppenud. |

Iga sündmust saab märkida eraldi. Hüpikkaardile piisab esimesest; kõnelogile ainult viimasest. `call-started` saadetakse esimesena ja seda tuleks töödelda kiiresti.

## Milline päring välja näeb {#what-the-request-looks-like}

Aadressi `https://crm.local/calls` ja meetodi **POST** korral saadab telefon selle. Sisu on JSON ja päis on see, mille määrasite jaotises **Volitamine**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` sisaldab programmi versiooni ja paigaldamise viisi.

## Sissetulev kõne sündmuse kaupa {#an-incoming-call-event-by-event}

Kõne sisenumbrilt `1020` kontole `1002` heliseb, sellele vastatakse ja vastaja lõpetab selle neli sekundit hiljem. Kui kõik kolm sündmust on märgitud, saab vastuvõtja üksteise järel kolm päringut. Neil kõigil on sama `id` ja `seance_id`.

### 1. Heliseb: `call-started` {#1-it-rings-call-started}

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

Nüüd on aeg otsida helistaja `number` järgi üles ja näidata kliendikaarti. `state` on `ringing-in` ja `duration_s` on `0`.

### 2. Vastatakse: `call-state-changed` {#2-it-is-answered-call-state-changed}

Umbes kolm sekundit hiljem:

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

`state` on nüüd `active` ja `callstate_ts` on liikunud muutuse hetkele, samal ajal kui `callstart_ts` jääb samaks.

### 3. Lõpeb: `call-ended` {#3-it-ends-call-ended}

Neljasekundilise vestluse järel:

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

`state` on `ended`, `duration_s` on vestluse kestus ja `reason` ütleb, kes selle lõpetas: siin `local-hangup`, sest kõne lõpetas selle telefoni juures olev inimene.

## Väljaminev kõne sündmuse kaupa {#an-outgoing-call-event-by-event}

Samale sisenumbrile helistatakse kontolt `1002`: inimene valib `1020`, telefon heliseb, teine pool vastab, räägib seitse sekundit ja lõpetab. Vastuvõtja saab neli päringut, ühe rohkem kui sissetuleva kõne puhul, sest väljamineval kõnel on oma olek ajal, mil see teises otsas heliseb.

### 1. Valitakse: `call-started` {#1-it-is-dialled-call-started}

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

`direction` on `out`, `state` on `dialing` ja `dialed` sisaldab numbrit nii, nagu see valiti. Telefon ei tea veel teise osapoole nime, nii et `name` on tühi.

### 2. Heliseb teises otsas: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Pool sekundit hiljem:

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

`state` on `ringing-out`.

### 3. Teine pool vastab: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Neli sekundit pärast seda:

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

`state` on `active`. `name` on nüüd täidetud ja `uri` on osapoole aadress nii, nagu vastus selle teatas. `duration_s` on endiselt `0`: seda loetakse sellest hetkest.

### 4. Lõpeb: `call-ended` {#4-it-ends-call-ended}

Seitse sekundit hiljem lõpetab teine pool kõne:

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

`duration_s` on `7` ja `reason` on `remote-hangup`, sest kõne lõpetas teine pool. Kui lõpetate ise, on see `local-hangup`, nagu ülaltoodud sissetuleva kõne puhul.

### Olekud kõrvuti {#the-states-side-by-side}

| | Sissetulev kõne | Väljaminev kõne |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, siis `active` |
| `call-ended` | `ended` | `ended` |

## Väljad {#the-fields}

**Iga väärtus on string**, ka numbrid ja ajatemplid: `"duration_s": "42"`. Teadmata hetk on tühi string. Nimed järgivad üht tava: `_id` on identifikaator, `_ts` on Unixi aeg millisekundites (UTC), `_s` on kestus sekundites — nagu REST API-s, kus väärtused on JSON-numbrid.

| Väli | Tähendus |
| --- | --- |
| `event` | `call-started`, `call-state-changed` või `call-ended`. |
| `id` | Kõne: sama UUID mis `GET /calls` ja `/calls/{id}/…` puhul ning sama kõne igas sündmuses. |
| `seance_id` | Vestlus, kuhu kõne kuulub; vaadake [allpool](#one-conversation-across-transfers). |
| `direction` | `in` või `out`. |
| `state` | Samad väärtused mis `GET /calls` puhul: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (selle telefoni poolt ootele pandud), `onhold` (teise osapoole poolt ootele pandud), `conference` või `ended`. |
| `number` | Teise osapoole number. Siduge oma CRM-i kirjed selle välja järgi. |
| `name` | Teise osapoole nimi Kontaktidest; see võib olla tühi ja täituda kõne käigus hiljem, nagu ülaltoodud väljamineva kõne puhul. |
| `uri` | Teise osapoole SIP-aadress. |
| `dialed` | Valitud numbrid väljamineva kõne puhul; sissetuleva kõne puhul tühi. |
| `account`, `account_id` | Liin, millel kõne on: `username@server` ja identifikaator `GET /accounts` kaudu. |
| `event_ts` | Millal sündmus toimus. |
| `callstart_ts` | Millal telefon kõnest esimest korda teada sai. |
| `callstate_ts` | Millal kõne jõudis oma praegusesse olekusse `state`. |
| `duration_s` | Kõneaeg sekundites vastamisest lõpetamiseni. Määratakse `call-ended` korral vastatud kõnele; muul juhul `0`. |
| `reason` | Kuidas kõne lõppes: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; seni `none`. |
| `answered_by` | `no`, kui kõnele vastas inimene; muul juhul see, mis vastas. |

## Üks vestlus ümbersuunamiste üle {#one-conversation-across-transfers}

`seance_id` rühmitab kõned, mis moodustavad ühe vestluse. Nullist tehtud või vastu võetud kõne alustab uut. Ümbersuunamisega loodud kõne, teist asendav kõne, kõne kohta peetav konsultatsioon ja iga konverentsi liidetud kõne säilitavad selle kõne `seance_id`, millest need pärinevad.

Telefonide vahel liigub see SIP-päises `X-Seance-Id`: kui kõne suunatakse kolleegile, kes samuti kasutab AI Softphone'i, ja keskjaam annab päise edasi, teatavad mõlemad tööjaamad sama `seance_id`.

## GET POST-i asemel {#get-instead-of-post}

**GET** on mõeldud vastuvõtjatele, kes ei saa päringu sisu vastu võtta, näiteks vanemale CRM-ile või sildskriptile. Samad väljad saadetakse siis päringuparameetritena.

**GET** korral võib aadress olla mall: iga `[väli]` asendatakse selle välja protsentkodeeritud väärtusega. Näiteks:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Kohatäited kasutavad ülaltoodud väljade nimesid. Varasemate nimedega (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) salvestatud mallid töötavad edasi.

## Kuidas sündmusi kohale toimetatakse {#how-the-events-are-delivered}

| Käitumine | Mida see teie jaoks tähendab |
| --- | --- |
| Sündmused pannakse järjekorda, mitte ei saadeta kõnest endast | Aeglane vastuvõtja ei viivita kunagi helisemist, kõnesid ega ümbersuunamisi. |
| Täis järjekord jätab sündmusi välja | Kui teie vastuvõtja lakkab vastamast, lähevad sündmused kaduma, kuid telefon töötab edasi. Jälgige loendurit `webhooks_dropped_total`. |
| Tagasi lükatud ja kättesaamatud saatmised loetakse kokku | Kui `webhooks_failed_total` kasvab ja `webhooks_delivered_total` seisab, on probleem vastuvõtjas. |
| Sündmused saabuvad järjekorras | Kõne algas, siis oleku muutused, siis kõne lõppes. Talletatud sündmuste järjestamiseks kasutage `callstate_ts`, mitte saabumise aega. |
| Vähemalt üks kord | Sama sündmus võib tulla kaks korda. `id`, `event` ja `callstate_ts` koos tuvastavad sündmuse: laske töötlejal juba nähtu vahele jätta. |

## Sündmuste vastuvõtmine {#receiving-the-events}

Vastuvõtja ainus reegel: **vastake kohe `200` ja tehke töö hiljem.** Aeglane vastuvõtja ei aeglusta telefoni, kuid täidab järjekorra ja täis järjekord jätab sündmusi välja.

Näiteks Node.js-is Expressiga:

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

Kõne tulemuse — vastatud, vastamata, tagasi lükatud — logimiseks võtke [REST API](/integration/rest-api#call-history-get-history) päringust `GET /history?limit=20` sama `seance_id` ja `number` väärtusega kirje. Kui teie teenus pärast pausi uuesti käivitub, lugege `GET /history?limit=200` ja talletage vahelejäänu: veebikonksud reaalajaks, ajalugu lünkade täitmiseks.

Et päringuid näha enne, kui CRM on valmis, suunake **Aadress** veebipõhisele päringute uurijale ja vajutage **Saada proovisündmus**.

## Kui midagi kohale ei jõua {#when-nothing-arrives}

| Sümptom | Mida kontrollida |
| --- | --- |
| Veebikonkse ei tule üldse | Vajutage **Saada proovisündmus**. Kui see jõuab kohale, pole vajalikke sündmusi märgitud; kui mitte, on aadress vale või tööjaamast kättesaamatu. |
| `webhooks_failed_total` kasvab pidevalt | Vastuvõtja lükkab päringud tagasi või pole kättesaadav. Kontrollige selle logi ja seda, kas see vastab tööjaamast tehtud lihtsale päringule. |
| `webhooks_dropped_total` on üle nulli | Vastuvõtja oli liiga kaua liiga aeglane ja järjekord sai täis. Vastake esmalt `200` ja töödelge hiljem. |
| Sama sündmus kaks korda | Vähemalt ühekordse kohaletoimetamise puhul oodatav. Käsitlege sama `id`, `event` ja `callstate_ts` väärtusega sündmusi ühena. |
