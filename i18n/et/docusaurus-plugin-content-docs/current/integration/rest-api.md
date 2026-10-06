---
title: Kohalik REST API
sidebar_position: 2
description: Laske teistel selle arvuti programmidel telefoni juhtida — teha ja juhtida kõnesid, lugeda kontakte, ajalugu ja kontosid.
---

AI Softphone'il on CTI-sidumiseks REST API: samas arvutis olev programm saab teha ja juhtida kõnesid, lugeda kontakte, kõnede ajalugu ja SIP-kontosid ning jälgida pooleliolevaid kõnesid. Pole SDK-d, pilves vahendajat ega võrku avatud kuulajat. Päringud ja vastused on JSON, nii et piisab `curl`-ist või mis tahes HTTP-kliendist.

API on **pärast paigaldamist väljas**; miski ei kuula, kuni te selle sisse lülitate. Seejärel kuulab see ainult tagasisilmuse liidesel — *väike veebiliides, mis vastab ainult sellele arvutile* — ning sellele ei pääse ligi kontorivõrgust, VPN-ist ega teisest masinast.

Kasutage API-t, kui teie programm vajab telefonilt andmeid või peab kõnet juhtima. Kasutage [veebikonkse](/integration/webhooks), kui see peab reageerima kõnedele nende toimumise ajal ilma pideva küsitlemiseta. Enamik sidumisi kasutab mõlemat; need on teineteisest sõltumatud.

## Selle sisselülitamine {#turning-it-on}

Avage **Seaded → Sidumine** ja minge jaotisse **Kohalik juhtimine**.

<Shot name="17b_settings_integration_scrolled" alt="Seaded → Sidumine: kohalik juhtimine" />

1. Lülitage sisse **Luba teistel selle arvuti programmidel telefoni juhtida**. Server käivitub kohe.
2. Jätke vaikimisi **Port**, `8377`, kui mõni teine programm seda juba ei kasuta.
3. Soovi korral määrake **Märgis**. Pärast salvestamist näitab väli teksti *Salvestatud — kirjutage, et see asendada*.
4. Valige jaotises **Juurdepääs** avatavad rühmad: **Kontaktid**, **Kõnede ajalugu**, **Kõned ja nende juhtimine**, **Kontod**, **Seaded**, **Loendurid** (mõõdikud). Väljalülitatud rühma ei filtreerita, vaid seda ei pakuta üldse.
5. Proovige: `curl http://127.0.0.1:8377/accounts`. Kui vastus on JSON, API töötab.

Eraldi teenust ei paigaldata ja taaskäivitust pole vaja. Seda tegeva programmi osa saab välja lülitada jaotises [Moodulid](/application/modules) (**Sidumine**).

## API enda leht {#the-apis-own-page}

**Ava API enda leht** avab brauseris aadressi `http://127.0.0.1:8377`. Aadress vastab ingliskeelse loendiga kõigest, mida see pakub; midagi lugevad aadressid on lingid, mida saab avada.

<Shot name="23_api_page" alt="API enda leht, http://127.0.0.1:8377/, brauseris avatuna" />

## Juurdepääs ja märgis {#access-and-the-token}

See, mida programm teha tohib, sõltub sellest, kas see muudab talletatud andmeid, mitte sellest, kas see loeb:

- **Ilma märgiseta** võib iga arvutis olev programm lugeda kõike sisselülitatud rühmades ja juhtida kõnesid: helistada, vastata, lõpetada, ootele panna, jätkata, ümber suunata ja saata DTMF-i.
- **Märgisega** päises `Authorization` võib see kasutada ka lõpp-punkte, mis muudavad talletatut. Ilma märgiseta neid lõpp-punkte ei pakuta ega loetleta API enda lehel.

Märgist hoitakse arvuti võtmehoidjas, mitte seadete failis, ja `/settings` ei tagasta seda kunagi.

:::caution
Ilma märgiseta saab iga selles arvutis töötav programm telefoni juhtida, sealhulgas kõnedele vastata. Isiklikus tööjaamas on see tavaliselt vastuvõetav. Jagatud või hallatud masinas määrake märgis ja käsitlege seda nagu iga teist parooli. Märgis kaitseb ainult päringuid, mis muudavad salvestatud andmeid, mitte kõnesid: kui soovite teisi programme kõnedest eemal hoida, lülitage jaotises **Juurdepääs** välja **Kõned ja nende juhtimine**.
:::

## Lõpp-punktid {#endpoints}

Baasaadress on `http://127.0.0.1:8377`. Allolevad lõpp-punktid ei vaja märgist.

| Meetod | Tee | Mida teeb |
| --- | --- | --- |
| GET | `/metrics` | Loendurid Prometheuse vormingus. |
| GET | `/ui` | Salvestiste loend HTML-lehena. |
| GET | `/ui/recordings/{id}` | Salvestis koos ülestähendusega HTML-lehena. |
| GET | `/ui/recordings/{id}/audio` | Ülaltoodud lehe heli. |
| GET | `/contacts` | Kontaktid. |
| GET | `/contacts/{id}` | Üks kontakt. |
| GET | `/history` | Kõnede ajalugu, uusim eespool. Aktsepteerib `?limit=`, `?missed=true` ja `?declined=true`. |
| GET | `/calls` | Pooleliolevad kõned. |
| POST | `/calls` | Teeb kõne: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Vastab kõnele. |
| POST | `/calls/{id}/hangup` | Lõpetab kõne. |
| POST | `/calls/{id}/hold` | Paneb kõne ootele. |
| POST | `/calls/{id}/resume` | Võtab selle ootelt maha. |
| POST | `/calls/{id}/dtmf` | Saadab toone: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Suunab kõne ümber: `{"target": "..."}`. |
| GET | `/accounts` | SIP-kontod ja nende registreerimisolek. Mitte kunagi parooli. |
| GET | `/settings` | Kogu konfiguratsioon ilma saladusteta. |
| GET | `/taxonomy` | Kategooriad, sildid ja hoiatussignaalid koos koodidega. |

Iga identifikaator on telefoni väljastatud UUID: kõne `id` tuleb `/calls` kaudu või vastusest päringule `POST /calls`, konto `id` `/accounts` kaudu.

Väljanimed on snake_case-kujul ja lõpp näitab tüüpi: `_id` on viide UUID-le, `_ts` on hetk Unixi millisekundites (UTC), `_s` on kestus sekundites. Sama kehtib veebikonksude kohta; ainult `/settings` kasutab oma nimesid. REST API-s on need väärtused JSON-numbrid ja teadmata hetk on `null`.

## Näide: kõne tegemine {#example-placing-a-call}

`POST /calls` teeb väljamineva kõne. Sisu on JSON, milles on valitav `number` ja soovi korral selle konto `account_id`, millelt helistada:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Vastus on uue kõne identifikaator:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` on kohustuslik. Ilma selleta on vastus `400 {"error":"a call needs a number"}` ja midagi ei valita.
- Number täiendatakse valitud kontol samamoodi, nagu valija seda teeb: `1020` saadetakse kujul `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` täiendab oma `target` samamoodi; siht, millel on juba skeem või `@`, saadetakse muutmata.
- `account_id` on valikuline; võtke see `GET /accounts` kaudu. Ilma selleta läheb kõne välja peaaknas valitud kontolt.
- Kasutage `id` teedes `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` ja `transfer`. Selle kõne [veebikonksudel](/integration/webhooks#an-outgoing-call-event-by-event) on sama `id`.

### Veebilehelt: klõpsa ja helista {#from-a-web-page-click-to-call}

Leht, mis pöördub aadressi `127.0.0.1` poole, jõuab arvutini, kus brauser töötab — sama, kus töötab telefon —, nii et CRM-i klõpsa-ja-helista nupp ei vaja oma serverit:

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

## Mida vastused sisaldavad {#what-the-answers-contain}

### Pooleliolevad kõned: `GET /calls` {#calls-in-progress-get-calls}

Igal kõnel on `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` ja `callstate_ts`.

- `state` on `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (selle telefoni poolt ootele pandud), `onhold` (teise osapoole poolt ootele pandud), `conference` või `ended`. Kui kehtib mitu, on `conference` tähtsam kui `hold` ja `hold` tähtsam kui `onhold`.
- `muted` ütleb, kas mikrofon on kõnes vaigistatud; vaigistamine `state` väärtust ei muuda.
- `seance_id` on vestlus: ümbersuunamise, konsultatsiooni või konverentsiga seotud kõned jagavad seda.
- `event_ts` on vastuse koostamise hetk. Võrrelge seda `callstate_ts` väärtusega, et näha, kui kaua kõne on oma olekus olnud, ilma oma kellale toetumata.

### Kontod: `GET /accounts` {#accounts-get-accounts}

Igal kontol on `id` (mujal `account_id`), selle seaded — `transport` (`udp`, `tcp` või `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` ja teised —, kas see on `enabled`, ning selle `state` keskjaamas: `registered`, kui liin töötab. Paroole ei kaasata kunagi.

### Kõnede ajalugu: `GET /history` {#call-history-get-history}

Uusim eespool, 100 kirjet, kui `?limit=` ei ütle teisiti. `?missed=true` tagastab ainult vastamata kõned, `?declined=true` ainult selle telefoni poolt tagasi lükatud kõned.

| Väli | Tähendus |
| --- | --- |
| `id` | Ajaloo kirje enda identifikaator. See ei ole `/calls` ja veebikonksude kõne `id`; `seance_id` seob need kaks. |
| `outcome` | Põhiliigitus: `answered`, `missed`, `declined` või `failed`. |
| `answered` | `true` või `false`. |
| `duration_s` | `0` kõne puhul, mis ei saanud kunagi ühendust. |
| `number`, `uri` | Teine osapool numbri ja SIP-aadressina. |
| `name` | Kontaktidest, kui number on teada, muidu tühi. Siduge `number` järgi, mitte selle järgi. |
| `dialed` | Valitud numbrid väljamineva kõne puhul; sissetuleva puhul tühi. |
| `account`, `account_id` | Liin, millel kõne oli. |
| `reason` | Kuidas see lõppes: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, kui vastas inimene; muul juhul see, mis kõnele vastas. |

### Kontaktid: `GET /contacts` {#contacts-get-contacts}

Igal kontaktil on `id`, `name`, `number` ja liin, kuhu see kuulub, `account_id` ja `account`; tühi `account` tähendab, et kontakt ei ole liiniga seotud.

### Salvestised {#recordings}

Salvestisi ja ülestähendusi JSON-ina ei väljastata. API pakub neid HTML-lehtedena `/ui` ja `/ui/recordings/{id}`: linkige oma CRM-ist nendele lehtedele, selle asemel et heli liigutada. Link avaneb arvutis, kus salvestist hoitakse, ja heli ei lahku sealt kunagi.

## Taksonoomia ja seaded {#taxonomy-and-settings}

Igal `/taxonomy` kirjel on püsiv `code`, kasutajaliidese keeles `title` ja `description`, `kind` (`category`, `tag` või `red_flag`) ning hoiatussignaalidel `severity`. **Siduge `code` järgi, mitte kunagi `title` järgi**: pealkirjad tulevad keeles, mis telefonis on määratud. Kirjet, millel on `retired: true`, hoitakse alles, et vanemaid kõnesid saaks endiselt lahendada; uutele kõnedele seda enam ei anta. Laadige taksonoomia käivitamisel üks kord, et siduda telefoni sõnad oma väljadega.

`/settings` tagastab konfiguratsiooni ilma saladusteta: heliseadmed ja helitugevused, koodekite prioriteet, välimus ja keel, käivitumine, otseteed, diagnostikatase ja mõlema sidumise olek — kasulik tugitööriistale, mis peab tööjaama kontrollima ilma ekraani jagamata. `api.disabled` loetleb väljalülitatud juurdepääsurühmad ja `webhooks.silenced` väljalülitatud sündmused; tühjad loendid tähendavad, et kõik on sees. See ei sisalda kunagi SIP-parooli, API märgist ega veebikonksu päise väärtust.

## Vead {#errors}

Iga viga on JSON ühe võtmega `error`, mõeldud inimestele, mitte masinaga parsimiseks.

| Olek | Sisu | Tähendus |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Teed ei ole või selle juurdepääsurühm on väljas; mõlemad annavad meelega sama vastuse. |
| 404 | `{"error":"no contact with that id"}` | Tee on õige, identifikaator mitte. |
| 400 | `{"error":"no call with that id"}` | Kõne on lõppenud või seda pole kunagi olnud. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` ilma numbrita. Midagi ei valitud. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` ilma numbriteta. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` ilma sihita. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Kõne konto eemaldati kõne ajal, nii et sihti ei saa täiendada. Keskjaamale ei saadetud midagi. |

Tagasi lükatud päringud loetakse loendurisse `api_requests_refused_total`, nii et vaikselt ebaõnnestuv sidumine paistab mõõdikutes, mitte ainult teie enda logides.

## Mõõdikud {#metrics}

`GET /metrics` tagastab iga telefoni loenduri koos abitekstiga. Koguge neid Prometheusega või lugege käsitsi.

| Loendur | Loendab |
| --- | --- |
| `calls_incoming_total` | Vastu võetud sissetulevad kõned. |
| `calls_outgoing_total` | Tehtud väljaminevad kõned. |
| `calls_answered_total` | Kõned, millele vastati. |
| `calls_missed_total` | Sissetulevad kõned, millele ei vastatud. |
| `calls_declined_total` | Siin või teise poole poolt tagasi lükatud kõned. |
| `calls_failed_total` | Kõned, mida ei õnnestunud luua. |
| `registrations_succeeded_total` | Õnnestunud SIP-registreerimised. |
| `registrations_failed_total` | Tagasi lükatud või aegunud SIP-registreerimised. |
| `webhooks_delivered_total` | Vastuvõtja poolt aktsepteeritud veebikonksud. |
| `webhooks_failed_total` | Tagasi lükatud või kohale toimetamata veebikonksud. |
| `webhooks_dropped_total` | Veebikonksud, mis jäeti välja, sest järjekord oli täis. |
| `api_requests_total` | API poolt töödeldud päringud. |
| `api_requests_refused_total` | Tagasi lükatud päringud: vale märgis, rühm väljas või tundmatu tee. |

## Vanema sidumise uuendamine {#updating-an-older-integration}

Varasemad versioonid kasutasid camelCase-nimesid ja lühikesi identifikaatoreid. `accountId` on nüüd `account_id`, `startedAt` on `callstart_ts`, `durationSeconds` on `duration_s`, `answeredBy` on `answered_by` ja veebikonksu väli `at` on `event_ts`. Kõnesid ja kontosid tuvastatakse ainult UUID järgi: `runtimeId` ja identifikaatoreid nagu `call-3` või `account-2` enam ei tagastata ega aktsepteerita.

## Kui see ei tööta {#when-it-does-not-work}

| Sümptom | Mida kontrollida |
| --- | --- |
| Ühendusest keelduti aadressil `127.0.0.1:8377` | Kohalik juhtimine on väljas, telefon ei tööta või porti on muudetud. |
| `404 {"error":"no such endpoint"}` selle lehe teele | Selle juurdepääsurühm on väljas. |
| Lugemine töötab, kirjutamine lükatakse tagasi | Talletatud andmeid muutvad lõpp-punktid vajavad märgist päises `Authorization`. |
| Kategooriate pealkirjad ei ole inglise keeles | Pealkirjad järgivad kasutajaliidese keelt. Siduge `/taxonomy` välja `code` järgi. |
| `accountId`, `startedAt` või `at` puuduvad | Sidumine kirjutati varasemate nimede jaoks; vaadake ülalt. |

Registreerimise või kõne enda probleemi korral avage [Diagnostika](/troubleshooting/diagnostics).
