---
title: Webhookit
sidebar_position: 1
description: "\"Anna puhelimen lähettää pyyntö CRM:llesi tai muulle järjestelmälle, kun puhelu alkaa, muuttuu tai päättyy — saapuvan ja lähtevän puhelun tarkkojen pyyntöjen kera.\""
---

Webhook on pyyntö, jonka puhelin lähettää valitsemaasi osoitteeseen aina, kun puhelulle tapahtuu jotain. Näin CRM voi avata asiakaskortin ennen toista soittoa, kirjata puhelun sen päättyessä tai sytyttää valon seinätaululla. Webhook ei tarvitse saapuvia palomuurisääntöjä: puhelin ottaa yhteyttä sinuun. Koska pyynnöt lähetetään työasemalta, osoitteen tarvitsee olla tavoitettavissa vain siltä tietokoneelta — sisäinen `http://crm.local/calls` toimii yhtä hyvin kuin julkinen HTTPS-osoite.

Webhookit ovat **pois käytöstä** asennuksen jälkeen, kunnes otat ne käyttöön. Ne toimivat [paikallisen REST API:n](/integration/rest-api) rinnalla: tapahtuma kertoo, että jokin on muuttunut, API antaa ajantasaiset tiedot.

## Niiden ottaminen käyttöön {#turning-them-on}

Avaa **Asetukset → Integraatio**. **Webhookit** on välilehden ensimmäinen osio.

<Shot name="24_webhooks" alt="Asetukset → Integraatio → Webhookit, osoitteena https://crm.local/calls" />

1. Rastita **Kerro toiselle järjestelmälle puheluista**. *Jokaisesta alla rastittamastasi tapahtumasta lähetetään yksi pyyntö.*
2. Syötä **Osoite**, johon tapahtumat lähetetään, esimerkiksi `https://crm.local/calls`.
3. Valitse **Menetelmä**: **POST** (oletus) tai **GET**.
4. Rastita kohdassa **Tapahtumat**, mitä lähetetään: **Uusi puhelu**, **Päättyvä puhelu**, **Tilaa vaihtava puhelu**.
5. Voit halutessasi asettaa kohdassa **Valtuutus** otsakkeen, jonka vastaanottajasi voi tarkistaa: **Otsakkeen nimi** (`Authorization` ehdotetaan) ja **Otsakkeen arvo**. Arvo säilytetään tietokoneen avainnipussa, ei koskaan asetustiedostossa; tallennuksen jälkeen kentässä näkyy *Tallennettu — kirjoita korvataksesi sen*.
6. Paina **Lähetä testitapahtuma** nähdäksesi, että se saapuu. Se lähettää yhden tapahtuman puhelusta, jota ei koskaan ollut, samoin otsakkein kuin oikea. Kirjaa raakapyyntö ja rakenna vastaanottajasi sen mukaan, mitä versiosi todella lähettää.

Pyynnöt lähettävä ohjelman osa on **Integraatio**-moduuli; sen voi poistaa käytöstä kohdassa [Moduulit](/application/modules).

## Tapahtumat {#the-events}

| Rastitettu nimellä | Tapahtuma | Lähetetään, kun |
| --- | --- | --- |
| **Uusi puhelu** | `call-started` | Saapuva puhelu alkaa soida tai lähtevä puhelu soitetaan. |
| **Tilaa vaihtava puhelu** | `call-state-changed` | Puhelun `state` muuttuu: siihen vastataan, jompikumpi osapuoli asettaa sen pitoon tai jatkaa sitä, tai se liittyy neuvotteluun tai poistuu siitä. Mykistys ei lähetä sitä. |
| **Päättyvä puhelu** | `call-ended` | Puhelu on päättynyt. |

Kunkin tapahtuman voi rastittaa erikseen. Soittajan kortti tarvitsee vain ensimmäisen; puheluloki vain viimeisen. `call-started` lähetetään ensin, ja se pitäisi käsitellä nopeasti.

## Miltä pyyntö näyttää {#what-the-request-looks-like}

Osoitteella `https://crm.local/calls` ja menetelmällä **POST** puhelin lähettää tämän. Runko on JSONia, ja otsake on se, jonka asetit kohdassa **Valtuutus**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` sisältää ohjelman version ja tavan, jolla se asennettiin.

## Saapuva puhelu tapahtuma tapahtumalta {#an-incoming-call-event-by-event}

Puhelu alanumerosta `1020` tilille `1002` soi, siihen vastataan, ja vastannut henkilö lopettaa sen neljä sekuntia myöhemmin. Kun kaikki kolme tapahtumaa on rastitettu, vastaanottaja saa kolme pyyntöä peräkkäin. Kaikissa on sama `id` ja `seance_id`.

### 1. Puhelu soi: `call-started` {#1-it-rings-call-started}

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

Nyt on hetki hakea soittaja `number`-kentän perusteella ja näyttää asiakaskortti. `state` on `ringing-in` ja `duration_s` on `0`.

### 2. Puheluun vastataan: `call-state-changed` {#2-it-is-answered-call-state-changed}

Noin kolme sekuntia myöhemmin:

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

`state` on nyt `active`, ja `callstate_ts` on siirtynyt muutoksen hetkeen, kun taas `callstart_ts` pysyy ennallaan.

### 3. Puhelu päättyy: `call-ended` {#3-it-ends-call-ended}

Neljän sekunnin keskustelun jälkeen:

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

`state` on `ended`, `duration_s` on keskustelun kesto ja `reason` kertoo, kuka sen lopetti: tässä `local-hangup`, koska tämän puhelimen käyttäjä lopetti puhelun.

## Lähtevä puhelu tapahtuma tapahtumalta {#an-outgoing-call-event-by-event}

Samaan alanumeroon soitetaan tililtä `1002`: henkilö valitsee `1020`, puhelin soi, toinen osapuoli vastaa, puhuu seitsemän sekuntia ja lopettaa. Vastaanottaja saa neljä pyyntöä, yhden enemmän kuin saapuvassa puhelussa, koska lähtevällä puhelulla on oma tilansa sen soidessa toisessa päässä.

### 1. Numero valitaan: `call-started` {#1-it-is-dialled-call-started}

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

`direction` on `out`, `state` on `dialing` ja `dialed` sisältää numeron sellaisena kuin se valittiin. Puhelin ei vielä tiedä toisen osapuolen nimeä, joten `name` on tyhjä.

### 2. Puhelu soi toisessa päässä: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Puoli sekuntia myöhemmin:

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

### 3. Toinen osapuoli vastaa: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Neljä sekuntia sen jälkeen:

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

`state` on `active`. `name` on nyt täytetty, ja `uri` on osapuolen osoite sellaisena kuin vastaus sen ilmoitti. `duration_s` on yhä `0`: se lasketaan tästä hetkestä alkaen.

### 4. Puhelu päättyy: `call-ended` {#4-it-ends-call-ended}

Seitsemän sekuntia myöhemmin toinen osapuoli lopettaa:

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

`duration_s` on `7` ja `reason` on `remote-hangup`, koska toinen osapuoli lopetti puhelun. Kun lopetat itse, se on `local-hangup`, kuten yllä olevassa saapuvassa puhelussa.

### Tilat rinnakkain {#the-states-side-by-side}

| | Saapuva puhelu | Lähtevä puhelu |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, sitten `active` |
| `call-ended` | `ended` | `ended` |

## Kentät {#the-fields}

**Jokainen arvo on merkkijono**, myös luvut ja aikaleimat: `"duration_s": "42"`. Tuntematon ajankohta on tyhjä merkkijono. Nimet noudattavat yhtä käytäntöä: `_id` on tunniste, `_ts` on Unix-aika millisekunteina (UTC), `_s` on kesto sekunteina — kuten REST API:ssa, jossa arvot ovat JSON-lukuja.

| Kenttä | Merkitys |
| --- | --- |
| `event` | `call-started`, `call-state-changed` tai `call-ended`. |
| `id` | Puhelu: sama UUID kuin kohdissa `GET /calls` ja `/calls/{id}/…`, ja sama puhelun jokaisessa tapahtumassa. |
| `seance_id` | Keskustelu, johon puhelu kuuluu; katso [alta](#one-conversation-across-transfers). |
| `direction` | `in` tai `out`. |
| `state` | Samat arvot kuin kohdassa `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (tämän puhelimen pitoon asettama), `onhold` (toisen osapuolen pitoon asettama), `conference` tai `ended`. |
| `number` | Toisen osapuolen numero. Yhdistä CRM-tietueesi tämän kentän perusteella. |
| `name` | Toisen osapuolen nimi Yhteystiedoista; se voi olla tyhjä ja täyttyä myöhemmin puhelun aikana, kuten yllä olevassa lähtevässä puhelussa. |
| `uri` | Toisen osapuolen SIP-osoite. |
| `dialed` | Valitut numerot lähtevässä puhelussa; tyhjä saapuvassa puhelussa. |
| `account`, `account_id` | Linja, jolla puhelu on: `username@server` ja tunniste kohdasta `GET /accounts`. |
| `event_ts` | Milloin tapahtuma tapahtui. |
| `callstart_ts` | Milloin puhelin ensimmäisen kerran sai tiedon puhelusta. |
| `callstate_ts` | Milloin puhelu siirtyi nykyiseen `state`-tilaansa. |
| `duration_s` | Puheaika sekunteina vastaamisesta lopettamiseen. Asetetaan `call-ended`-tapahtumassa vastatulle puhelulle; muuten `0`. |
| `reason` | Miten puhelu päättyi: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; siihen asti `none`. |
| `answered_by` | `no`, jos puheluun vastasi ihminen; muuten se, mikä vastasi. |

## Yksi keskustelu siirtojen yli {#one-conversation-across-transfers}

`seance_id` ryhmittää puhelut, jotka muodostavat yhden keskustelun. Tyhjästä soitettu tai vastaanotettu puhelu aloittaa uuden. Siirrolla luotu puhelu, toisen korvaava puhelu, puhelua koskeva konsultaatio ja jokainen neuvotteluun liitetty puhelu säilyttävät sen puhelun `seance_id`:n, josta ne ovat peräisin.

Puhelinten välillä se kulkee SIP-otsakkeessa `X-Seance-Id`: kun puhelu siirretään kollegalle, joka myös käyttää AI Softphonea, ja vaihde välittää otsakkeen, molemmat työasemat ilmoittavat saman `seance_id`:n.

## GET POSTin sijaan {#get-instead-of-post}

**GET** on vastaanottajille, jotka eivät voi ottaa vastaan pyynnön runkoa, kuten vanhemmalle CRM:lle tai siltakomentosarjalle. Samat kentät lähetetään silloin kyselyparametreina.

**GET**-menetelmällä osoite voi olla malli: jokainen `[kenttä]` korvataan kyseisen kentän prosenttikoodatulla arvolla. Esimerkiksi:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Paikkamerkit käyttävät yllä olevia kenttien nimiä. Aiemmilla nimillä (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) tallennetut mallit toimivat edelleen.

## Miten tapahtumat toimitetaan {#how-the-events-are-delivered}

| Toiminta | Mitä se merkitsee sinulle |
| --- | --- |
| Tapahtumat asetetaan jonoon, niitä ei lähetetä itse puhelusta | Hidas vastaanottaja ei koskaan viivästytä soittoa, puheluita tai siirtoja. |
| Täysi jono hylkää tapahtumia | Jos vastaanottajasi lakkaa vastaamasta, tapahtumia katoaa, mutta puhelin jatkaa toimintaansa. Seuraa laskuria `webhooks_dropped_total`. |
| Hylätyt ja tavoittamattomat toimitukset lasketaan | Jos `webhooks_failed_total` kasvaa, kun `webhooks_delivered_total` pysyy paikallaan, vika on vastaanottajassa. |
| Tapahtumat saapuvat järjestyksessä | Puhelu alkoi, sitten tilan muutokset, sitten puhelu päättyi. Järjestä tallennetut tapahtumat `callstate_ts`:n mukaan, älä saapumisajan. |
| Vähintään kerran | Sama tapahtuma voi tulla kahdesti. `id`, `event` ja `callstate_ts` yhdessä yksilöivät tapahtuman: anna käsittelijäsi ohittaa jo nähty. |

## Tapahtumien vastaanottaminen {#receiving-the-events}

Vastaanottajan ainoa sääntö: **vastaa `200` heti ja tee työ jälkikäteen.** Hidas vastaanottaja ei hidasta puhelinta, mutta se täyttää jonon, ja täysi jono hylkää tapahtumia.

Esimerkiksi Node.js:llä ja Expressillä:

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

Kirjataksesi puhelun lopputuloksen — vastattu, vastaamaton, hylätty — ota merkintä, jolla on sama `seance_id` ja `number`, [REST API:n](/integration/rest-api#call-history-get-history) kohdasta `GET /history?limit=20`. Kun palvelusi käynnistyy uudelleen tauon jälkeen, lue `GET /history?limit=200` ja tallenna, mitä jäi väliin: webhookit reaaliaikaan, historia aukkojen täyttämiseen.

Nähdäksesi pyynnöt ennen kuin CRM on valmis, osoita **Osoite** verkossa toimivaan pyyntöjen tarkastelutyökaluun ja paina **Lähetä testitapahtuma**.

## Kun mitään ei saavu {#when-nothing-arrives}

| Oire | Mitä tarkistaa |
| --- | --- |
| Webhookeja ei tule lainkaan | Paina **Lähetä testitapahtuma**. Jos se saapuu, tarvitsemiasi tapahtumia ei ole rastitettu; jos ei, osoite on väärä tai sitä ei tavoita työasemalta. |
| `webhooks_failed_total` kasvaa jatkuvasti | Vastaanottaja hylkää pyynnöt tai sitä ei tavoiteta. Tarkista sen loki ja se, vastaako se yksinkertaiseen pyyntöön työasemalta. |
| `webhooks_dropped_total` on yli nollan | Vastaanottaja oli liian hidas liian kauan, ja jono täyttyi. Vastaa ensin `200` ja käsittele sitten. |
| Sama tapahtuma kahdesti | Odotettavaa vähintään kerran -toimituksessa. Käsittele tapahtumat, joilla on sama `id`, `event` ja `callstate_ts`, yhtenä. |
