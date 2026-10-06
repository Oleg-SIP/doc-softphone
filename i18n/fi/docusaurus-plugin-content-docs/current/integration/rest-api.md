---
title: Paikallinen REST API
sidebar_position: 2
description: Anna tämän tietokoneen muiden ohjelmien ohjata puhelinta — soittaa ja hallita puheluita, lukea yhteystietoja, historiaa ja tilejä.
---

AI Softphonessa on REST API CTI-integraatiota varten: samalla tietokoneella oleva ohjelma voi soittaa ja hallita puheluita, lukea yhteystietoja, puheluhistoriaa ja SIP-tilejä sekä seurata käynnissä olevia puheluita. Ei SDK:ta, ei pilvessä olevaa välikättä eikä verkkoon näkyvää kuuntelijaa. Pyynnöt ja vastaukset ovat JSONia, joten `curl` tai mikä tahansa HTTP-asiakas riittää.

API on **pois käytöstä asennuksen jälkeen**; mikään ei kuuntele, ennen kuin otat sen käyttöön. Sen jälkeen se kuuntelee vain loopback-liitännässä — *pieni verkkokäyttöliittymä, joka vastaa vain tälle tietokoneelle* — eikä siihen pääse toimiston verkosta, VPN:stä tai toiselta koneelta.

Käytä API:a, kun ohjelmasi tarvitsee tietoja puhelimesta tai sen on hallittava puhelua. Käytä [webhookeja](/integration/webhooks), kun sen on reagoitava puheluihin niiden tapahtuessa ilman jatkuvaa kyselyä. Useimmat integraatiot käyttävät molempia; ne ovat toisistaan riippumattomia.

## Sen ottaminen käyttöön {#turning-it-on}

Avaa **Asetukset → Integraatio** ja siirry kohtaan **Paikallinen ohjaus**.

<Shot name="17b_settings_integration_scrolled" alt="Asetukset → Integraatio: paikallinen ohjaus" />

1. Ota käyttöön **Anna tämän tietokoneen muiden ohjelmien ohjata puhelinta**. Palvelin käynnistyy heti.
2. Pidä oletusarvoinen **Portti**, `8377`, ellei jokin toinen ohjelma jo käytä sitä.
3. Voit halutessasi asettaa **Tunnuksen**. Tallennuksen jälkeen kentässä näkyy *Tallennettu — kirjoita korvataksesi sen*.
4. Valitse kohdassa **Pääsy** avattavat ryhmät: **Yhteystiedot**, **Puheluhistoria**, **Puhelut ja niiden hallinta**, **Tilit**, **Asetukset**, **Laskurit** (mittarit). Pois käytöstä olevaa ryhmää ei suodateta, vaan sitä ei tarjota lainkaan.
5. Kokeile: `curl http://127.0.0.1:8377/accounts`. Jos vastaus on JSONia, API toimii.

Erillistä palvelua ei asenneta eikä uudelleenkäynnistystä tarvita. Tämän tekevän ohjelman osan voi poistaa käytöstä kohdassa [Moduulit](/application/modules) (**Integraatio**).

## API:n oma sivu {#the-apis-own-page}

**Avaa API:n oma sivu** avaa osoitteen `http://127.0.0.1:8377` selaimessa. Osoite vastaa luettelolla kaikesta, mitä se tarjoaa, englanniksi; jotain lukevat osoitteet ovat linkkejä, joita voit seurata.

<Shot name="23_api_page" alt="API:n oma sivu, http://127.0.0.1:8377/, avattuna selaimessa" />

## Pääsy ja tunnus {#access-and-the-token}

Se, mitä ohjelma saa tehdä, riippuu siitä, muuttaako se tallennettuja tietoja, ei siitä, lukeeko se:

- **Ilman tunnusta** mikä tahansa tietokoneen ohjelma voi lukea kaiken käytössä olevista ryhmistä ja hallita puheluita: soittaa, vastata, lopettaa, asettaa pitoon, jatkaa, siirtää ja lähettää DTMF:ää.
- **Tunnuksen kanssa** `Authorization`-otsakkeessa se voi käyttää myös päätepisteitä, jotka muuttavat tallennettua. Ilman tunnusta näitä päätepisteitä ei tarjota eikä luetella API:n omalla sivulla.

Tunnus säilytetään tietokoneen avainnipussa, ei asetustiedostossa, eikä `/settings` koskaan palauta sitä.

:::caution
Ilman tunnusta mikä tahansa tällä tietokoneella toimiva ohjelma voi hallita puhelinta, myös vastata puheluihin. Henkilökohtaisella työasemalla se on yleensä hyväksyttävää. Jaetulla tai hallitulla koneella aseta tunnus ja käsittele sitä kuten mitä tahansa muuta salasanaa. Tunnus suojaa vain pyynnöt, jotka muuttavat tallennettuja tietoja, ei puheluita: jos haluat pitää muut ohjelmat erossa puheluista, poista kohdassa **Pääsy** käytöstä **Puhelut ja niiden hallinta**.
:::

## Päätepisteet {#endpoints}

Perusosoite on `http://127.0.0.1:8377`. Alla olevat päätepisteet eivät tarvitse tunnusta.

| Menetelmä | Polku | Toiminto |
| --- | --- | --- |
| GET | `/metrics` | Laskurit Prometheus-muodossa. |
| GET | `/ui` | Tallenteiden luettelo HTML-sivuna. |
| GET | `/ui/recordings/{id}` | Tallenne litterointeineen HTML-sivuna. |
| GET | `/ui/recordings/{id}/audio` | Yllä olevan sivun ääni. |
| GET | `/contacts` | Yhteystiedot. |
| GET | `/contacts/{id}` | Yksittäinen yhteystieto. |
| GET | `/history` | Puheluhistoria, uusin ensin. Hyväksyy `?limit=`, `?missed=true` ja `?declined=true`. |
| GET | `/calls` | Käynnissä olevat puhelut. |
| POST | `/calls` | Soittaa puhelun: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Vastaa puheluun. |
| POST | `/calls/{id}/hangup` | Lopettaa puhelun. |
| POST | `/calls/{id}/hold` | Asettaa puhelun pitoon. |
| POST | `/calls/{id}/resume` | Ottaa sen pois pidosta. |
| POST | `/calls/{id}/dtmf` | Lähettää ääniä: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Siirtää puhelun: `{"target": "..."}`. |
| GET | `/accounts` | SIP-tilit ja niiden rekisteröintitila. Ei koskaan salasanaa. |
| GET | `/settings` | Koko kokoonpano ilman salaisuuksia. |
| GET | `/taxonomy` | Luokat, tunnisteet ja merkit koodeineen. |

Jokainen tunniste on puhelimen myöntämä UUID: puhelun `id` tulee kohdasta `/calls` tai vastauksesta `POST /calls`-pyyntöön, tilin `id` kohdasta `/accounts`.

Kenttien nimet ovat snake_case-muodossa, ja pääte kertoo tyypin: `_id` on viittaus UUID:hen, `_ts` on ajankohta Unix-millisekunteina (UTC), `_s` on kesto sekunteina. Sama pätee webhookeihin; vain `/settings` pitää omat niminsä. REST API:ssa nämä arvot ovat JSON-lukuja, ja tuntematon ajankohta on `null`.

## Esimerkki: puhelun soittaminen {#example-placing-a-call}

`POST /calls` soittaa lähtevän puhelun. Runko on JSONia, jossa on valittava `number` ja valinnaisesti sen tilin `account_id`, jolta soitetaan:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Vastaus on uuden puhelun tunniste:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` on pakollinen. Ilman sitä vastaus on `400 {"error":"a call needs a number"}`, eikä mitään valita.
- Numero täydennetään valitulla tilillä samalla tavalla kuin numeronvalitsin sen täydentää: `1020` lähetetään muodossa `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` täydentää `target`-kenttänsä samalla tavalla; kohde, jossa on jo skeema tai `@`, lähetetään sellaisenaan.
- `account_id` on valinnainen; ota se kohdasta `GET /accounts`. Ilman sitä puhelu lähtee pääikkunassa valitulta tililtä.
- Käytä `id`:tä kohdassa `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` ja `transfer`. Tämän puhelun [webhookeissa](/integration/webhooks#an-outgoing-call-event-by-event) on sama `id`.

### Verkkosivulta: soita napsauttamalla {#from-a-web-page-click-to-call}

Sivu, joka kutsuu osoitetta `127.0.0.1`, tavoittaa tietokoneen, jolla selain toimii — saman, jolla puhelin toimii —, joten CRM:n soita napsauttamalla -painike ei tarvitse omaa palvelinta:

```javascript
async function dial(number) {
  const r = await fetch("http://127.0.0.1:8377/calls", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number }),
  });
  if (!r.ok) console.warn("softphone:", (await r.json()).error);
}
```

## Mitä vastaukset sisältävät {#what-the-answers-contain}

### Käynnissä olevat puhelut: `GET /calls` {#calls-in-progress-get-calls}

Jokaisella puhelulla on `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` ja `callstate_ts`.

- `state` on `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (tämän puhelimen pitoon asettama), `onhold` (toisen osapuolen pitoon asettama), `conference` tai `ended`. Kun useampi pätee, `conference` voittaa `hold`-tilan ja `hold` `onhold`-tilan.
- `muted` kertoo, onko mikrofoni mykistetty puhelussa; mykistys ei muuta `state`-arvoa.
- `seance_id` on keskustelu: siirron, konsultaation tai neuvottelun yhdistämät puhelut jakavat sen.
- `event_ts` on vastauksen muodostamishetki. Vertaa sitä `callstate_ts`:ään nähdäksesi, kuinka kauan puhelu on ollut tilassaan, luottamatta omaan kelloosi.

### Tilit: `GET /accounts` {#accounts-get-accounts}

Jokaisella tilillä on `id` (kaikkialla muualla `account_id`), asetuksensa — `transport` (`udp`, `tcp` tai `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` ja muut —, tieto siitä, onko se `enabled`, ja sen `state` vaihteessa: `registered`, kun linja on ylhäällä. Salasanoja ei koskaan sisällytetä.

### Puheluhistoria: `GET /history` {#call-history-get-history}

Uusin ensin, 100 merkintää, ellei `?limit=` sano muuta. `?missed=true` palauttaa vain vastaamattomat puhelut, `?declined=true` vain tämän puhelimen hylkäämät puhelut.

| Kenttä | Merkitys |
| --- | --- |
| `id` | Historiamerkinnän oma tunniste. Se ei ole `/calls`-kohdan ja webhookien puhelun `id`; `seance_id` yhdistää ne. |
| `outcome` | Pääluokitus: `answered`, `missed`, `declined` tai `failed`. |
| `answered` | `true` tai `false`. |
| `duration_s` | `0` puhelulle, joka ei koskaan yhdistynyt. |
| `number`, `uri` | Toinen osapuoli numerona ja SIP-osoitteena. |
| `name` | Yhteystiedoista, jos numero on tunnettu, muuten tyhjä. Yhdistä `number`-kentän, älä tämän perusteella. |
| `dialed` | Valitut numerot lähtevässä puhelussa; tyhjä saapuvassa. |
| `account`, `account_id` | Linja, jolla puhelu oli. |
| `reason` | Miten se päättyi: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, jos vastasi ihminen; muuten se, mikä puheluun vastasi. |

### Yhteystiedot: `GET /contacts` {#contacts-get-contacts}

Jokaisella yhteystiedolla on `id`, `name`, `number` ja linja, johon se kuuluu, `account_id` ja `account`; tyhjä `account` tarkoittaa, ettei yhteystietoa ole sidottu linjaan.

### Tallenteet {#recordings}

Tallenteita ja litterointeja ei anneta JSONina. API tarjoaa ne HTML-sivuina, `/ui` ja `/ui/recordings/{id}`: linkitä näille sivuille CRM:stäsi äänen siirtelyn sijaan. Linkki avautuu tietokoneella, joka säilyttää tallenteen, eikä ääni koskaan poistu siltä.

## Taksonomia ja asetukset {#taxonomy-and-settings}

Jokaisella `/taxonomy`-merkinnällä on pysyvä `code`, käyttöliittymän kielinen `title` ja `description`, `kind` (`category`, `tag` tai `red_flag`) ja merkeillä lisäksi `severity`. **Yhdistä `code`-kentän, älä koskaan `title`-kentän perusteella**: otsikot tulevat sillä kielellä, joka puhelimeen on asetettu. Merkintä, jolla on `retired: true`, säilytetään, jotta vanhemmat puhelut löytyvät edelleen; sitä ei enää anneta uusille puheluille. Lataa taksonomia kerran käynnistyksessä yhdistääksesi puhelimen sanat omiin kenttiisi.

`/settings` palauttaa kokoonpanon salaisuuksia lukuun ottamatta: äänilaitteet ja äänenvoimakkuudet, koodekkien prioriteetin, ulkoasun ja kielen, käynnistyksen, pikanäppäimet, diagnostiikkatason ja molempien integraatioiden tilan — hyödyllinen tukityökalulle, jonka on tarkistettava työasema ilman näytön jakamista. `api.disabled` luettelee pois käytöstä olevat pääsyryhmät ja `webhooks.silenced` pois käytöstä olevat tapahtumat; tyhjät luettelot tarkoittavat, että kaikki on käytössä. Se ei koskaan sisällä SIP-salasanaa, API-tunnusta eikä webhookin otsakkeen arvoa.

## Virheet {#errors}

Jokainen virhe on JSONia, jossa on yksi `error`-avain, tarkoitettu ihmisille, ei jäsennettäväksi.

| Tila | Runko | Merkitys |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Polkua ei ole tai sen pääsyryhmä on pois käytöstä; molemmat antavat tarkoituksella saman vastauksen. |
| 404 | `{"error":"no contact with that id"}` | Polku on oikea, tunniste ei. |
| 400 | `{"error":"no call with that id"}` | Puhelu on päättynyt tai sitä ei koskaan ollut. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` ilman numeroa. Mitään ei valittu. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` ilman numeroita. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` ilman kohdetta. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Puhelun tili poistettiin puhelun aikana, joten kohdetta ei voi täydentää. Vaihteelle ei lähetetty mitään. |

Hylätyt pyynnöt lasketaan laskuriin `api_requests_refused_total`, joten hiljaa epäonnistuva integraatio näkyy mittareissa eikä vain omissa lokeissasi.

## Mittarit {#metrics}

`GET /metrics` palauttaa jokaisen puhelimen laskurin, kunkin ohjetekstin kera. Kerää ne Prometheusilla tai lue käsin.

| Laskuri | Laskee |
| --- | --- |
| `calls_incoming_total` | Vastaanotetut saapuvat puhelut. |
| `calls_outgoing_total` | Soitetut lähtevät puhelut. |
| `calls_answered_total` | Puhelut, joihin vastattiin. |
| `calls_missed_total` | Saapuvat puhelut, joihin ei vastattu. |
| `calls_declined_total` | Täällä tai toisessa päässä hylätyt puhelut. |
| `calls_failed_total` | Puhelut, joita ei voitu muodostaa. |
| `registrations_succeeded_total` | Onnistuneet SIP-rekisteröinnit. |
| `registrations_failed_total` | Hylätyt tai aikakatkaistut SIP-rekisteröinnit. |
| `webhooks_delivered_total` | Vastaanottajan hyväksymät webhookit. |
| `webhooks_failed_total` | Hylätyt tai toimittamatta jääneet webhookit. |
| `webhooks_dropped_total` | Webhookit, jotka hylättiin, koska jono oli täynnä. |
| `api_requests_total` | API:n käsittelemät pyynnöt. |
| `api_requests_refused_total` | Hylätyt pyynnöt: väärä tunnus, ryhmä pois käytöstä tai tuntematon polku. |

## Vanhemman integraation päivittäminen {#updating-an-older-integration}

Aiemmissa versioissa käytettiin camelCase-nimiä ja lyhyitä tunnisteita. `accountId` on nyt `account_id`, `startedAt` on `callstart_ts`, `durationSeconds` on `duration_s`, `answeredBy` on `answered_by`, ja webhookin kenttä `at` on `event_ts`. Puhelut ja tilit yksilöidään vain UUID:llä: `runtimeId`-arvoa ja tunnisteita kuten `call-3` tai `account-2` ei enää palauteta eikä hyväksytä.

## Kun se ei toimi {#when-it-does-not-work}

| Oire | Mitä tarkistaa |
| --- | --- |
| Yhteys estetty osoitteessa `127.0.0.1:8377` | Paikallinen ohjaus on pois käytöstä, puhelin ei ole käynnissä tai porttia on muutettu. |
| `404 {"error":"no such endpoint"}` tämän sivun polulle | Sen pääsyryhmä on pois käytöstä. |
| Lukeminen toimii, kirjoittaminen hylätään | Tallennettuja tietoja muuttavat päätepisteet tarvitsevat tunnuksen `Authorization`-otsakkeessa. |
| Luokkien otsikot eivät ole englanniksi | Otsikot seuraavat käyttöliittymän kieltä. Yhdistä `/taxonomy`-kohdan `code`-kentän perusteella. |
| `accountId`, `startedAt` tai `at` puuttuu | Integraatio on kirjoitettu aiemmille nimille; katso yltä. |

Jos ongelma liittyy rekisteröintiin tai itse puheluun, avaa [Diagnostiikka](/troubleshooting/diagnostics).
