---
title: Veb-kuke
sidebar_position: 1
description: "\"Neka telefon vašem CRM-u ili drugom sistemu pošalje zahtev kada poziv počne, promeni se ili završi — sa tačnim zahtevima dolaznog i odlaznog poziva.\""
---

Veb-kuka je zahtev koji telefon šalje na adresu po vašem izboru svaki put kada se sa pozivom nešto desi. Zahvaljujući njoj CRM može da otvori karticu kupca pre drugog zvona, zabeleži poziv kada se završi ili upali lampicu na zidnoj tabli. Veb-kuka ne zahteva pravila zaštitnog zida za dolazni saobraćaj: telefon se povezuje sa vama. Pošto se zahtevi šalju sa radne stanice, adresa mora biti dostupna samo sa tog računara — interna `http://crm.local/calls` radi jednako dobro kao javna HTTPS adresa.

Nakon instalacije veb-kuke su **isključene** dok ih ne uključite. Rade uz [lokalni REST API](/integration/rest-api): događaj kaže da se nešto promenilo, a API daje trenutne pojedinosti.

## Uključivanje {#turning-them-on}

Otvorite **Podešavanja → Povezivanje**. **Veb-kuke** su prvi odeljak kartice.

<Shot name="24_webhooks" alt="Podešavanja → Povezivanje → Veb-kuke, sa adresom https://crm.local/calls" />

1. Označite **Javi drugom sistemu o pozivima**. *Za svaki događaj koji označite ispod šalje se jedan zahtev.*
2. Upišite **Adresa** koja treba da prima događaje, na primer `https://crm.local/calls`.
3. Izaberite **Metod**: **POST** (podrazumevano) ili **GET**.
4. Pod **Događaji** označite šta da se šalje: **Novi poziv**, **Kraj poziva**, **Promena stanja poziva**.
5. Po želji pod **Prijava** podesite zaglavlje koje vaš primalac može da proveri: **Naziv zaglavlja** (predlaže se `Authorization`) i **Vrednost zaglavlja**. Vrednost se čuva u skladištu ključeva računara, nikada u datoteci podešavanja; nakon čuvanja polje prikazuje *Sačuvano — kucajte da zamenite*.
6. Pritisnite **Pošalji probni događaj** da vidite da li stiže. Šalje jedan događaj za poziv koji se nikada nije desio, sa istim zaglavljima kao pravi. Zabeležite sirovi zahtev i pravite primaoca prema onome što vaša verzija stvarno šalje.

Deo programa koji šalje zahteve je modul **Povezivanje**; može da se isključi u [Modulima](/application/modules).

## Događaji {#the-events}

| Označeno kao | Događaj | Šalje se kada |
| --- | --- | --- |
| **Novi poziv** | `call-started` | Dolazni poziv počne da zvoni ili se uputi odlazni poziv. |
| **Promena stanja poziva** | `call-state-changed` | Promeni se `state` poziva: neko se javi, poziv se stavi na čekanje ili nastavi sa bilo koje strane, ili se pridruži konferenciji ili je napusti. Isključivanje mikrofona ga ne šalje. |
| **Kraj poziva** | `call-ended` | Poziv se završio. |

Svaki događaj može da se označi zasebno. Iskačuća kartica kupca treba samo prvi, dnevnik poziva samo poslednji. `call-started` se šalje prvi i treba ga brzo obraditi.

## Kako izgleda zahtev {#what-the-request-looks-like}

Sa adresom `https://crm.local/calls` i metodom **POST** telefon šalje ovo. Telo je JSON, a zaglavlje je ono koje ste podesili pod **Prijava**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` nosi verziju programa i način na koji je instaliran.

## Dolazni poziv, događaj po događaj {#an-incoming-call-event-by-event}

Poziv sa internog broja `1020` na nalog `1002` zvoni, neko se javi, a osoba koja se javila prekida poziv četiri sekunde kasnije. Uz sva tri označena događaja primalac dobija tri zahteva, jedan za drugim. Svi nose isti `id` i `seance_id`.

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

Ovo je trenutak da pozivaoca potražite po `number` i prikažete karticu kupca. `state` je `ringing-in`, a `duration_s` je `0`.

### 2. Neko se javi: `call-state-changed` {#2-it-is-answered-call-state-changed}

Oko tri sekunde kasnije:

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

`state` je sada `active`, a `callstate_ts` se pomerio na trenutak promene, dok `callstart_ts` ostaje gde je bio.

### 3. Završava se: `call-ended` {#3-it-ends-call-ended}

Posle četiri sekunde razgovora:

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

`state` je `ended`, `duration_s` je trajanje razgovora, a `reason` kaže ko ga je završio: ovde `local-hangup`, jer je poziv prekinula osoba na ovom telefonu.

## Odlazni poziv, događaj po događaj {#an-outgoing-call-event-by-event}

Isti interni broj se zove sa naloga `1002`: osoba bira `1020`, telefon zvoni, druga strana se javlja, razgovara sedam sekundi i prekida. Primalac dobija četiri zahteva, jedan više nego za dolazni poziv, jer odlazni poziv ima sopstveno stanje dok zvoni na drugoj strani.

### 1. Bira se: `call-started` {#1-it-is-dialled-call-started}

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

`direction` je `out`, `state` je `dialing`, a `dialed` sadrži broj kako je biran. Telefon još ne zna ime druge strane, pa je `name` prazan.

### 2. Zvoni na drugoj strani: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Pola sekunde kasnije:

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

### 3. Druga strana se javlja: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Četiri sekunde posle toga:

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

`state` je `active`. `name` je sada popunjen, a `uri` je adresa druge strane kako ju je javio odgovor. `duration_s` je i dalje `0`: broji od ovog trenutka.

### 4. Završava se: `call-ended` {#4-it-ends-call-ended}

Sedam sekundi kasnije druga strana prekida poziv:

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

`duration_s` je `7`, a `reason` je `remote-hangup`, jer je poziv završila druga strana. Kada prekinete sami, to je `local-hangup`, kao kod dolaznog poziva gore.

### Stanja jedno pored drugog {#the-states-side-by-side}

| | Dolazni poziv | Odlazni poziv |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, zatim `active` |
| `call-ended` | `ended` | `ended` |

## Polja {#the-fields}

**Svaka vrednost je niska**, uključujući brojeve i vremenske oznake: `"duration_s": "42"`. Nepoznat trenutak je prazna niska. Nazivi prate jednu konvenciju: `_id` je identifikator, `_ts` je Unix vreme u milisekundama (UTC), `_s` je trajanje u sekundama — isto kao u REST API-ju, gde su vrednosti JSON brojevi.

| Polje | Značenje |
| --- | --- |
| `event` | `call-started`, `call-state-changed` ili `call-ended`. |
| `id` | Poziv: isti UUID kao u `GET /calls` i `/calls/{id}/…`, isti u svakom događaju poziva. |
| `seance_id` | Razgovor kom poziv pripada; pogledajte [u nastavku](#one-conversation-across-transfers). |
| `direction` | `in` ili `out`. |
| `state` | Iste vrednosti kao u `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (na čekanje stavio ovaj telefon), `onhold` (na čekanje stavila druga strana), `conference` ili `ended`. |
| `number` | Broj druge strane. Zapise u CRM-u uparujte po ovom polju. |
| `name` | Ime druge strane iz Kontakata; može biti prazno i može da se popuni kasnije u pozivu, kao kod odlaznog poziva gore. |
| `uri` | SIP adresa druge strane. |
| `dialed` | Birane cifre, za odlazni poziv; prazno za dolazni. |
| `account`, `account_id` | Linija na kojoj je poziv: `username@server` i identifikator iz `GET /accounts`. |
| `event_ts` | Kada se događaj desio. |
| `callstart_ts` | Kada je telefon prvi put saznao za poziv. |
| `callstate_ts` | Kada je poziv ušao u trenutni `state`. |
| `duration_s` | Vreme razgovora u sekundama, od javljanja do prekida. Postavlja se u `call-ended` za poziv na koji se neko javio; inače `0`. |
| `reason` | Kako se poziv završio: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; do tada `none`. |
| `answered_by` | `no` ako se na poziv javio čovek; inače ono što se javilo. |

## Jedan razgovor kroz prosleđivanja {#one-conversation-across-transfers}

`seance_id` grupiše pozive koji čine jedan razgovor. Poziv upućen ili primljen iznova započinje novi. Poziv nastao prosleđivanjem, poziv koji zamenjuje drugi, konsultacija o pozivu i svaki poziv pridružen konferenciji zadržavaju `seance_id` poziva iz kog su nastali.

Između telefona prenosi ga SIP zaglavlje `X-Seance-Id`: kada se poziv prosledi kolegi koji takođe koristi AI Softphone, a centrala zaglavlje prenese dalje, obe radne stanice javljaju isti `seance_id`.

## GET umesto POST {#get-instead-of-post}

**GET** je za primaoce koji ne mogu da prime telo zahteva, kao što su stariji CRM ili skriptni most. Ista polja se tada šalju kao parametri upita.

Uz **GET** adresa može biti šablon: svako `[polje]` zamenjuje se vrednošću tog polja, procentno kodiranom. Na primer:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Čuvari mesta koriste gornje nazive polja. Šabloni sačuvani sa ranijim nazivima (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) i dalje rade.

## Kako se događaji isporučuju {#how-the-events-are-delivered}

| Ponašanje | Šta to znači za vas |
| --- | --- |
| Događaji idu u red, ne šalju se iz samog poziva | Spor primalac nikada ne odlaže zvonjenje, pozive ni prosleđivanja. |
| Pun red odbacuje događaje | Ako vaš primalac prestane da odgovara, događaji se gube, ali telefon nastavlja da radi. Pratite `webhooks_dropped_total`. |
| Odbijene i nedostupne isporuke se broje | Rast `webhooks_failed_total` dok `webhooks_delivered_total` stoji upućuje na primaoca. |
| Događaji stižu redom | Početak poziva, zatim promene stanja, zatim kraj poziva. Za ređanje sačuvanih događaja koristite `callstate_ts`, a ne vreme dolaska. |
| Najmanje jednom | Isti događaj može da stigne dvaput. `id`, `event` i `callstate_ts` zajedno identifikuju događaj: neka vaš rukovalac preskoči onaj koji je već video. |

## Primanje događaja {#receiving-the-events}

Jedino pravilo za primaoca: **odmah odgovorite `200`, a posao obavite posle.** Spor primalac ne usporava telefon, ali puni red, a pun red odbacuje događaje.

Na primer, u Node.js sa Expressom:

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

Da zabeležite ishod poziva — prihvaćen, propušten, odbijen — uzmite stavku sa istim `seance_id` i `number` iz `GET /history?limit=20` u [REST API-ju](/integration/rest-api#call-history-get-history). Kada se vaša usluga posle pauze ponovo pokrene, pročitajte `GET /history?limit=200` i sačuvajte ono što ste propustili: veb-kuke za realno vreme, istorija za popunjavanje praznina.

Da vidite zahteve pre nego što CRM bude spreman, usmerite **Adresa** na mrežni pregledač zahteva i pritisnite **Pošalji probni događaj**.

## Kada ništa ne stiže {#when-nothing-arrives}

| Simptom | Šta proveriti |
| --- | --- |
| Nema nijedne veb-kuke | Pritisnite **Pošalji probni događaj**. Ako stigne, potrebni događaji nisu označeni; ako ne, adresa je pogrešna ili nedostupna sa radne stanice. |
| `webhooks_failed_total` stalno raste | Primalac odbija zahteve ili je nedostupan. Proverite njegov dnevnik i da li odgovara na jednostavan zahtev sa radne stanice. |
| `webhooks_dropped_total` je veći od nule | Primalac je predugo bio prespor i red se napunio. Prvo odgovorite `200`, zatim obrađujte. |
| Isti događaj dvaput | Očekivano kod isporuke najmanje jednom. Događaje sa istim `id`, `event` i `callstate_ts` smatrajte jednim. |
