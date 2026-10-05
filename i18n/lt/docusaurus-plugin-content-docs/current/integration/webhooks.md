---
title: Žiniatinklio kabliai
sidebar_position: 1
description: "\"Leiskite telefonui siųsti užklausą jūsų CRM ar kitai sistemai, kai skambutis prasideda, pasikeičia ar baigiasi — su tiksliomis įeinančio ir išeinančio skambučio užklausomis.\""
---

Žiniatinklio kablys — tai užklausa, kurią telefonas siunčia jūsų pasirinktu adresu kaskart, kai kas nors nutinka skambučiui. Taip CRM gali atverti kliento kortelę prieš antrą skambėjimą, užregistruoti skambutį jam pasibaigus ar uždegti lemputę sieniniame skydelyje. Žiniatinklio kabliui nereikia įeinančių ugniasienės taisyklių: telefonas pats kreipiasi į jus. Kadangi užklausos siunčiamos iš darbo vietos kompiuterio, adresas turi būti pasiekiamas tik iš to kompiuterio — vidinis `http://crm.local/calls` veikia taip pat gerai kaip viešas HTTPS adresas.

Įdiegus žiniatinklio kabliai yra **išjungti**, kol jų neįjungiate. Jie veikia kartu su [vietiniu REST API](/integration/rest-api): įvykis praneša, kad kažkas pasikeitė, o API pateikia dabartines detales.

## Jų įjungimas {#turning-them-on}

Atverkite **Nustatymai → Integracija**. **Žiniatinklio kabliai** yra pirmoji skirtuko dalis.

<Shot name="24_webhooks" alt="Nustatymai → Integracija → Žiniatinklio kabliai su adresu https://crm.local/calls" />

1. Pažymėkite **Pranešimas kitai sistemai apie skambučius**. *Kiekvienam žemiau pažymėtam įvykiui siunčiama viena užklausa.*
2. Įveskite **Adresas**, kuris turi gauti įvykius, pavyzdžiui, `https://crm.local/calls`.
3. Pasirinkite **Metodas**: **POST** (numatytasis) arba **GET**.
4. Skiltyje **Įvykiai** pažymėkite, ką siųsti: **Naujas skambutis**, **Besibaigiantis skambutis**, **Būseną keičiantis skambutis**.
5. Pasirinktinai skiltyje **Įgaliojimas** nustatykite antraštę, kurią jūsų gavėjas galėtų patikrinti: **Antraštės pavadinimas** (siūloma `Authorization`) ir **Antraštės reikšmė**. Reikšmė laikoma kompiuterio raktų pakete, niekada nustatymų faile; išsaugojus lauke rodoma *Įrašyta — rašykite, kad tai pakeistumėte*.
6. Paspauskite **Siųsti bandomąjį įvykį**, kad pamatytumėte, ar jis ateina. Jis siunčia vieną įvykį apie skambutį, kurio niekada nebuvo, su tomis pačiomis antraštėmis kaip tikrasis. Užregistruokite neapdorotą užklausą ir kurkite gavėją pagal tai, ką jūsų versija iš tikrųjų siunčia.

Programos dalis, kuri siunčia užklausas, yra modulis **Integracija**; jį galima išjungti skiltyje [Moduliai](/application/modules).

## Įvykiai {#the-events}

| Pažymėta kaip | Įvykis | Siunčiama, kai |
| --- | --- | --- |
| **Naujas skambutis** | `call-started` | Įeinantis skambutis pradeda skambėti arba atliekamas išeinantis skambutis. |
| **Būseną keičiantis skambutis** | `call-state-changed` | Pasikeičia skambučio `state`: į jį atsiliepiama, bet kuri pusė jį sulaiko ar tęsia, arba jis prisijungia prie konferencijos ar ją palieka. Nutildymas jo nesiunčia. |
| **Besibaigiantis skambutis** | `call-ended` | Skambutis baigėsi. |

Kiekvieną įvykį galima pažymėti atskirai. Iššokančiai kliento kortelei reikia tik pirmojo; skambučių žurnalui — tik paskutiniojo. `call-started` siunčiamas pirmas ir turėtų būti apdorotas greitai.

## Kaip atrodo užklausa {#what-the-request-looks-like}

Su adresu `https://crm.local/calls` ir metodu **POST** telefonas siunčia štai ką. Turinys yra JSON, o antraštė — ta, kurią nustatėte skiltyje **Įgaliojimas**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` nurodo programos versiją ir įdiegimo būdą.

## Įeinantis skambutis įvykis po įvykio {#an-incoming-call-event-by-event}

Skambutis iš vidinio numerio `1020` į paskyrą `1002` skamba, į jį atsiliepiama, o atsiliepęs žmogus po keturių sekundžių padeda ragelį. Kai pažymėti visi trys įvykiai, gavėjas gauna tris užklausas vieną po kitos. Visos turi tą patį `id` ir `seance_id`.

### 1. Skamba: `call-started` {#1-it-rings-call-started}

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

Dabar laikas surasti skambinantįjį pagal `number` ir parodyti kliento kortelę. `state` yra `ringing-in`, o `duration_s` yra `0`.

### 2. Atsiliepiama: `call-state-changed` {#2-it-is-answered-call-state-changed}

Maždaug po trijų sekundžių:

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

`state` dabar yra `active`, o `callstate_ts` pasislinko į pasikeitimo akimirką, kol `callstart_ts` lieka, kur buvo.

### 3. Baigiasi: `call-ended` {#3-it-ends-call-ended}

Po keturių pokalbio sekundžių:

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

`state` yra `ended`, `duration_s` yra pokalbio trukmė, o `reason` nurodo, kas jį baigė: čia `local-hangup`, nes ragelį padėjo šio telefono žmogus.

## Išeinantis skambutis įvykis po įvykio {#an-outgoing-call-event-by-event}

Tuo pačiu vidiniu numeriu skambinama iš paskyros `1002`: žmogus surenka `1020`, telefonas skamba, kita pusė atsiliepia, kalba septynias sekundes ir padeda ragelį. Gavėjas gauna keturias užklausas, viena daugiau nei įeinančio skambučio atveju, nes išeinantis skambutis turi savo būseną, kol skamba kitame gale.

### 1. Renkama: `call-started` {#1-it-is-dialled-call-started}

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

`direction` yra `out`, `state` yra `dialing`, o `dialed` turi numerį tokį, koks surinktas. Telefonas dar nežino kitos pusės vardo, todėl `name` tuščias.

### 2. Skamba kitame gale: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Po pusės sekundės:

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

`state` yra `ringing-out`.

### 3. Kita pusė atsiliepia: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Dar po keturių sekundžių:

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

`state` yra `active`. `name` dabar užpildytas, o `uri` yra kitos pusės adresas, kaip jį nurodė atsakymas. `duration_s` vis dar `0`: ji skaičiuojama nuo šios akimirkos.

### 4. Baigiasi: `call-ended` {#4-it-ends-call-ended}

Po septynių sekundžių kita pusė padeda ragelį:

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

`duration_s` yra `7`, o `reason` yra `remote-hangup`, nes skambutį baigė kita pusė. Kai ragelį padedate jūs, tai `local-hangup`, kaip aukščiau aprašytame įeinančiame skambutyje.

### Būsenos greta {#the-states-side-by-side}

| | Įeinantis skambutis | Išeinantis skambutis |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, tada `active` |
| `call-ended` | `ended` | `ended` |

## Laukai {#the-fields}

**Kiekviena reikšmė yra eilutė**, įskaitant skaičius ir laiko žymas: `"duration_s": "42"`. Nežinoma akimirka yra tuščia eilutė. Pavadinimai laikosi vienos taisyklės: `_id` yra identifikatorius, `_ts` yra Unix laikas milisekundėmis (UTC), `_s` yra trukmė sekundėmis — kaip ir REST API, kur reikšmės yra JSON skaičiai.

| Laukas | Reikšmė |
| --- | --- |
| `event` | `call-started`, `call-state-changed` arba `call-ended`. |
| `id` | Skambutis: tas pats UUID kaip `GET /calls` ir `/calls/{id}/…`, ir tas pats kiekviename skambučio įvykyje. |
| `seance_id` | Pokalbis, kuriam priklauso skambutis; žr. [toliau](#one-conversation-across-transfers). |
| `direction` | `in` arba `out`. |
| `state` | Tos pačios reikšmės kaip `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (sulaikė šis telefonas), `onhold` (sulaikė kita pusė), `conference` arba `ended`. |
| `number` | Kitos pusės numeris. Susiekite savo CRM įrašus pagal šį lauką. |
| `name` | Kitos pusės vardas iš Kontaktų; jis gali būti tuščias ir užsipildyti vėliau skambučio metu, kaip aukščiau aprašytame išeinančiame skambutyje. |
| `uri` | Kitos pusės SIP adresas. |
| `dialed` | Surinkti skaitmenys išeinančiam skambučiui; įeinančiam — tuščia. |
| `account`, `account_id` | Linija, kuria vyksta skambutis: `username@server` ir identifikatorius iš `GET /accounts`. |
| `event_ts` | Kada įvykis įvyko. |
| `callstart_ts` | Kada telefonas pirmą kartą sužinojo apie skambutį. |
| `callstate_ts` | Kada skambutis perėjo į dabartinę `state` būseną. |
| `duration_s` | Pokalbio laikas sekundėmis nuo atsiliepimo iki ragelio padėjimo. Nustatomas `call-ended` atsilieptam skambučiui; kitaip `0`. |
| `reason` | Kaip skambutis baigėsi: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; iki tol `none`. |
| `answered_by` | `no`, jei atsiliepė žmogus; kitaip tai, kas atsiliepė. |

## Vienas pokalbis per peradresavimus {#one-conversation-across-transfers}

`seance_id` sugrupuoja skambučius, kurie sudaro vieną pokalbį. Skambutis, atliktas ar priimtas nuo nulio, pradeda naują. Skambutis, sukurtas peradresavimu, skambutis, kuris pakeičia kitą, konsultacija dėl skambučio ir kiekvienas į konferenciją prijungtas skambutis išlaiko skambučio, iš kurio jie kilo, `seance_id`.

Tarp telefonų jis keliauja SIP antraštėje `X-Seance-Id`: kai skambutis peradresuojamas kolegai, kuris taip pat naudoja AI Softphone, o stotelė perduoda antraštę, abu darbo vietos kompiuteriai praneša tą patį `seance_id`.

## GET vietoj POST {#get-instead-of-post}

**GET** skirtas gavėjams, kurie negali priimti užklausos turinio, pavyzdžiui, senesnei CRM ar tarpiniam scenarijui. Tie patys laukai tada siunčiami kaip užklausos parametrai.

Su **GET** adresas gali būti šablonas: kiekvienas `[laukas]` pakeičiamas to lauko procentiniu būdu užkoduota reikšme. Pavyzdžiui:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Vietos rezervavimo ženklai naudoja aukščiau nurodytus laukų pavadinimus. Šablonai, išsaugoti su ankstesniais pavadinimais (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`), toliau veikia.

## Kaip pristatomi įvykiai {#how-the-events-are-delivered}

| Elgsena | Ką tai reiškia jums |
| --- | --- |
| Įvykiai dedami į eilę, o ne siunčiami iš paties skambučio | Lėtas gavėjas niekada neuždelsia skambėjimo, skambučių ar peradresavimų. |
| Pilna eilė atmeta įvykius | Jei jūsų gavėjas nustoja atsakyti, įvykiai prarandami, bet telefonas toliau veikia. Stebėkite `webhooks_dropped_total`. |
| Atmesti ir nepasiekiami pristatymai skaičiuojami | Jei `webhooks_failed_total` auga, o `webhooks_delivered_total` stovi vietoje, problema yra gavėjuje. |
| Įvykiai ateina eilės tvarka | Skambutis prasidėjo, tada būsenos pasikeitimai, tada skambutis baigėsi. Išsaugotiems įvykiams rikiuoti naudokite `callstate_ts`, o ne gavimo laiką. |
| Bent kartą | Tas pats įvykis gali ateiti du kartus. `id`, `event` ir `callstate_ts` kartu identifikuoja įvykį: tegu jūsų apdorojimas praleidžia jau matytą. |

## Įvykių gavimas {#receiving-the-events}

Vienintelė taisyklė gavėjui: **iškart atsakykite `200`, o darbą atlikite vėliau.** Lėtas gavėjas nesulėtina telefono, bet užpildo eilę, o pilna eilė atmeta įvykius.

Pavyzdžiui, Node.js su Express:

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

Norėdami užregistruoti skambučio baigtį — atsilieptas, praleistas, atmestas —, paimkite įrašą su tuo pačiu `seance_id` ir `number` iš [REST API](/integration/rest-api#call-history-get-history) užklausos `GET /history?limit=20`. Kai jūsų paslauga po pertraukos vėl paleidžiama, perskaitykite `GET /history?limit=200` ir išsaugokite, ką praleidote: žiniatinklio kabliai realiam laikui, istorija spragoms užpildyti.

Norėdami matyti užklausas, kol CRM dar neparuošta, nukreipkite **Adresas** į internetinį užklausų tikrintuvą ir paspauskite **Siųsti bandomąjį įvykį**.

## Kai niekas neateina {#when-nothing-arrives}

| Simptomas | Ką patikrinti |
| --- | --- |
| Neateina jokie žiniatinklio kabliai | Paspauskite **Siųsti bandomąjį įvykį**. Jei jis ateina, reikalingi įvykiai nepažymėti; jei ne, adresas neteisingas arba nepasiekiamas iš darbo vietos kompiuterio. |
| `webhooks_failed_total` vis auga | Gavėjas atmeta užklausas arba yra nepasiekiamas. Patikrinkite jo žurnalą ir ar jis atsako į paprastą užklausą iš darbo vietos kompiuterio. |
| `webhooks_dropped_total` didesnis už nulį | Gavėjas per ilgai buvo per lėtas, ir eilė prisipildė. Pirmiausia atsakykite `200`, tada apdorokite. |
| Tas pats įvykis du kartus | Tikėtina pristatant „bent kartą“. Įvykius su tuo pačiu `id`, `event` ir `callstate_ts` laikykite vienu. |
