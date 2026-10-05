---
title: Webhooki
sidebar_position: 1
description: "\"Naj telefon vašemu CRM ali drugemu sistemu pošlje zahtevo, ko se klic začne, spremeni ali konča — z natančnimi zahtevami dohodnega in odhodnega klica.\""
---

Webhook je zahteva, ki jo telefon pošlje na naslov po vaši izbiri vsakič, ko se s klicem kaj zgodi. Z njim lahko CRM odpre kartico stranke pred drugim zvonjenjem, zabeleži klic, ko se konča, ali prižge lučko na stenski plošči. Webhook ne potrebuje pravil požarnega zidu za dohodni promet: telefon se poveže z vami. Ker se zahteve pošiljajo z delovne postaje, mora biti naslov dosegljiv le s tega računalnika — notranji `http://crm.local/calls` deluje enako dobro kot javni naslov HTTPS.

Po namestitvi so webhooki **izklopljeni**, dokler jih ne vklopite. Delujejo skupaj s [krajevnim REST API-jem](/integration/rest-api): dogodek pove, da se je nekaj spremenilo, API pa da trenutne podrobnosti.

## Vklop {#turning-them-on}

Odprite **Nastavitve → Integracija**. **Webhooki** so prvi razdelek zavihka.

<Shot name="24_webhooks" alt="Nastavitve → Integracija → Webhooki, z naslovom https://crm.local/calls" />

1. Označite **Obveščanje drugega sistema o klicih**. *Za vsak spodaj označen dogodek se pošlje ena zahteva.*
2. Vpišite **Naslov**, ki naj prejema dogodke, na primer `https://crm.local/calls`.
3. Izberite **Metoda**: **POST** (privzeto) ali **GET**.
4. Pod **Dogodki** označite, kaj pošiljati: **Nov klic**, **Klic, ki se konča**, **Klic, ki spremeni stanje**.
5. Po želji pod **Pooblastitev** nastavite glavo, ki jo lahko vaš prejemnik preveri: **Ime glave** (predlagano je `Authorization`) in **Vrednost glave**. Vrednost se hrani v shrambi ključev računalnika, nikoli v datoteki z nastavitvami; ko je shranjena, polje pokaže *Shranjeno — pišite, da to zamenjate*.
6. Pritisnite **Pošlji preizkusni dogodek**, da vidite, ali pride. Pošlje en dogodek za klic, ki se ni nikoli zgodil, z enakimi glavami kot pravi. Zabeležite surovo zahtevo in prejemnika gradite po tem, kar vaša različica dejansko pošilja.

Del programa, ki pošilja zahteve, je modul **Integracija**; izklopiti ga je mogoče v [Modulih](/application/modules).

## Dogodki {#the-events}

| Označeno kot | Dogodek | Poslano, ko |
| --- | --- | --- |
| **Nov klic** | `call-started` | Dohodni klic začne zvoniti ali se opravi odhodni klic. |
| **Klic, ki spremeni stanje** | `call-state-changed` | Spremeni se `state` klica: je sprejet, zadržan ali nadaljevan s katere koli strani ali se pridruži konferenci ali jo zapusti. Utišanje ga ne pošlje. |
| **Klic, ki se konča** | `call-ended` | Klic se je končal. |

Vsak dogodek je mogoče označiti posebej. Pojavna kartica stranke potrebuje le prvega, dnevnik klicev le zadnjega. `call-started` se pošlje prvi in ga je treba obdelati hitro.

## Kako je videti zahteva {#what-the-request-looks-like}

Z naslovom `https://crm.local/calls` in metodo **POST** telefon pošlje to. Telo je JSON, glava pa tista, ki ste jo nastavili pod **Pooblastitev**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` nosi različico programa in način, kako je bil nameščen.

## Dohodni klic, dogodek za dogodkom {#an-incoming-call-event-by-event}

Klic z interne številke `1020` na račun `1002` zvoni, je sprejet, oseba, ki ga je sprejela, pa štiri sekunde pozneje odloži. Z vsemi tremi označenimi dogodki prejemnik dobi tri zahteve, eno za drugo. Vse nosijo isti `id` in `seance_id`.

### 1. Zvoni: `call-started` {#1-it-rings-call-started}

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

To je trenutek, da klicatelja poiščete po `number` in pokažete kartico stranke. `state` je `ringing-in`, `duration_s` pa `0`.

### 2. Je sprejet: `call-state-changed` {#2-it-is-answered-call-state-changed}

Približno tri sekunde pozneje:

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

`state` je zdaj `active`, `callstate_ts` pa se je premaknil na trenutek spremembe, medtem ko `callstart_ts` ostane, kjer je bil.

### 3. Konča se: `call-ended` {#3-it-ends-call-ended}

Po štirih sekundah pogovora:

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

`state` je `ended`, `duration_s` je trajanje pogovora, `reason` pa pove, kdo ga je končal: tukaj `local-hangup`, ker je odložila oseba pri tem telefonu.

## Odhodni klic, dogodek za dogodkom {#an-outgoing-call-event-by-event}

Ista interna številka se kliče z računa `1002`: oseba pokliče `1020`, telefon zvoni, druga stran sprejme, govori sedem sekund in odloži. Prejemnik dobi štiri zahteve, eno več kot pri dohodnem klicu, ker ima odhodni klic svoje stanje, medtem ko zvoni na drugi strani.

### 1. Pokliče se: `call-started` {#1-it-is-dialled-call-started}

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

`direction` je `out`, `state` je `dialing`, `dialed` pa vsebuje številko, kot je bila poklicana. Telefon še ne pozna imena druge strani, zato je `name` prazen.

### 2. Zvoni na drugi strani: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Pol sekunde pozneje:

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

`state` je `ringing-out`.

### 3. Druga stran sprejme: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Štiri sekunde zatem:

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

`state` je `active`. `name` je zdaj izpolnjen, `uri` pa je naslov druge strani, kot ga je sporočil odgovor. `duration_s` je še vedno `0`: šteje od tega trenutka.

### 4. Konča se: `call-ended` {#4-it-ends-call-ended}

Sedem sekund pozneje druga stran odloži:

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

`duration_s` je `7`, `reason` pa `remote-hangup`, ker je klic končala druga stran. Ko odložite sami, je to `local-hangup`, kot pri dohodnem klicu zgoraj.

### Stanja drugo ob drugem {#the-states-side-by-side}

| | Dohodni klic | Odhodni klic |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, nato `active` |
| `call-ended` | `ended` | `ended` |

## Polja {#the-fields}

**Vsaka vrednost je niz**, vključno s številkami in časovnimi žigi: `"duration_s": "42"`. Neznan trenutek je prazen niz. Imena sledijo enemu dogovoru: `_id` je identifikator, `_ts` je čas Unix v milisekundah (UTC), `_s` je trajanje v sekundah — enako kot v REST API-ju, kjer so vrednosti števila JSON.

| Polje | Pomen |
| --- | --- |
| `event` | `call-started`, `call-state-changed` ali `call-ended`. |
| `id` | Klic: isti UUID kot v `GET /calls` in `/calls/{id}/…`, enak v vsakem dogodku klica. |
| `seance_id` | Pogovor, ki mu klic pripada; glejte [spodaj](#one-conversation-across-transfers). |
| `direction` | `in` ali `out`. |
| `state` | Enake vrednosti kot v `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (zadržal ta telefon), `onhold` (zadržala druga stran), `conference` ali `ended`. |
| `number` | Številka druge strani. Zapise v CRM ujemajte po tem polju. |
| `name` | Ime druge strani iz Stikov; lahko je prazno in se lahko izpolni pozneje v klicu, kot pri odhodnem klicu zgoraj. |
| `uri` | Naslov SIP druge strani. |
| `dialed` | Poklicane števke, pri odhodnem klicu; pri dohodnem prazno. |
| `account`, `account_id` | Linija, na kateri je klic: `username@server` in identifikator iz `GET /accounts`. |
| `event_ts` | Kdaj se je dogodek zgodil. |
| `callstart_ts` | Kdaj je telefon prvič izvedel za klic. |
| `callstate_ts` | Kdaj je klic vstopil v trenutni `state`. |
| `duration_s` | Čas pogovora v sekundah, od sprejema do odložitve. Nastavljen v `call-ended` za sprejet klic; drugače `0`. |
| `reason` | Kako se je klic končal: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; do takrat `none`. |
| `answered_by` | `no`, če je klic sprejel človek; drugače to, kar ga je sprejelo. |

## En pogovor prek preusmeritev {#one-conversation-across-transfers}

`seance_id` združuje klice, ki sestavljajo en pogovor. Klic, opravljen ali sprejet na novo, začne novega. Klic, ustvarjen s preusmeritvijo, klic, ki nadomesti drugega, posvet o klicu in vsak klic, pridružen konferenci, obdržijo `seance_id` klica, iz katerega izhajajo.

Med telefoni ga prenaša glava SIP `X-Seance-Id`: ko se klic preusmeri sodelavcu, ki prav tako uporablja AI Softphone, in centrala glavo posreduje naprej, obe delovni postaji sporočita isti `seance_id`.

## GET namesto POST {#get-instead-of-post}

**GET** je za prejemnike, ki ne morejo sprejeti telesa zahteve, na primer starejši CRM ali skriptni most. Ista polja se tedaj pošljejo kot parametri poizvedbe.

Pri **GET** je naslov lahko predloga: vsak `[polje]` se nadomesti z vrednostjo tega polja, odstotno kodirano. Na primer:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Nadomestni znaki uporabljajo zgornja imena polj. Predloge, shranjene s prejšnjimi imeni (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`), še naprej delujejo.

## Kako se dogodki dostavljajo {#how-the-events-are-delivered}

| Vedenje | Kaj to pomeni za vas |
| --- | --- |
| Dogodki gredo v vrsto, ne pošiljajo se iz samega klica | Počasen prejemnik nikoli ne zakasni zvonjenja, klicev ali preusmeritev. |
| Polna vrsta zavrže dogodke | Če vaš prejemnik neha odgovarjati, se dogodki izgubijo, telefon pa deluje naprej. Spremljajte `webhooks_dropped_total`. |
| Zavrnjene in nedosegljive dostave se štejejo | Naraščajoč `webhooks_failed_total`, medtem ko `webhooks_delivered_total` stoji, kaže na prejemnika. |
| Dogodki pridejo po vrsti | Začetek klica, nato spremembe stanja, nato konec klica. Za razvrščanje shranjenih dogodkov uporabite `callstate_ts`, ne časa prihoda. |
| Vsaj enkrat | Isti dogodek lahko pride dvakrat. `id`, `event` in `callstate_ts` skupaj identificirajo dogodek: naj vaš obdelovalnik preskoči tistega, ki ga je že videl. |

## Sprejemanje dogodkov {#receiving-the-events}

Edino pravilo za prejemnika: **takoj odgovorite `200`, delo pa opravite pozneje.** Počasen prejemnik ne upočasni telefona, napolni pa vrsto, polna vrsta pa zavrže dogodke.

Na primer v Node.js z Expressom:

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

Za beleženje izida klica — sprejet, zgrešen, zavrnjen — vzemite vnos z istim `seance_id` in `number` iz `GET /history?limit=20` v [REST API-ju](/integration/rest-api#call-history-get-history). Ko se vaša storitev po premoru znova zažene, preberite `GET /history?limit=200` in shranite, kar ste zamudili: webhooki za realni čas, zgodovina za zapolnitev vrzeli.

Če želite videti zahteve, preden je CRM pripravljen, usmerite **Naslov** na spletni pregledovalnik zahtev in pritisnite **Pošlji preizkusni dogodek**.

## Ko nič ne pride {#when-nothing-arrives}

| Simptom | Kaj preveriti |
| --- | --- |
| Sploh nobenih webhookov | Pritisnite **Pošlji preizkusni dogodek**. Če pride, potrebni dogodki niso označeni; če ne, je naslov napačen ali nedosegljiv z delovne postaje. |
| `webhooks_failed_total` kar naprej narašča | Prejemnik zavrača zahteve ali je nedosegljiv. Preverite njegov dnevnik in ali odgovori na preprosto zahtevo z delovne postaje. |
| `webhooks_dropped_total` je večji od nič | Prejemnik je bil predolgo prepočasen in vrsta se je napolnila. Najprej odgovorite `200`, nato obdelujte. |
| Isti dogodek dvakrat | Pričakovano pri dostavi vsaj enkrat. Dogodke z istim `id`, `event` in `callstate_ts` obravnavajte kot enega. |
