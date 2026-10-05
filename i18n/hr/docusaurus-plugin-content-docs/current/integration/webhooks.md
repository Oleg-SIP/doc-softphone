---
title: Webhookovi
sidebar_position: 1
description: "\"Neka telefon vašem CRM-u ili drugom sustavu pošalje zahtjev kad poziv počne, promijeni se ili završi — s točnim zahtjevima dolaznog i odlaznog poziva.\""
---

Webhook je zahtjev koji telefon šalje na adresu po vašem izboru svaki put kad se s pozivom nešto dogodi. Zahvaljujući njemu CRM može otvoriti karticu kupca prije drugog zvona, zabilježiti poziv kad završi ili upaliti lampicu na zidnoj ploči. Webhook ne treba pravila vatrozida za dolazni promet: telefon se spaja s vama. Budući da se zahtjevi šalju s radne stanice, adresa mora biti dostupna samo s tog računala — interna `http://crm.local/calls` radi jednako dobro kao javna HTTPS adresa.

Nakon instalacije webhookovi su **isključeni** dok ih ne uključite. Rade uz [lokalni REST API](/integration/rest-api): događaj kaže da se nešto promijenilo, a API daje trenutne pojedinosti.

## Uključivanje {#turning-them-on}

Otvorite **Postavke → Integracija**. **Webhookovi** su prvi odjeljak kartice.

<Shot name="24_webhooks" alt="Postavke → Integracija → Webhookovi, s adresom https://crm.local/calls" />

1. Označite **Obavještavanje drugog sustava o pozivima**. *Za svaki dolje označeni događaj šalje se jedan zahtjev.*
2. Upišite **Adresa** koja treba primati događaje, primjerice `https://crm.local/calls`.
3. Odaberite **Metoda**: **POST** (zadano) ili **GET**.
4. Pod **Događaji** označite što slati: **Novi poziv**, **Poziv koji završava**, **Poziv koji mijenja stanje**.
5. Po želji pod **Autorizacija** postavite zaglavlje koje vaš primatelj može provjeriti: **Naziv zaglavlja** (predlaže se `Authorization`) i **Vrijednost zaglavlja**. Vrijednost se čuva u spremniku ključeva računala, nikada u datoteci postavki; nakon spremanja polje prikazuje *Spremljeno — pišite da to zamijenite*.
6. Pritisnite **Pošalji probni događaj** da vidite stiže li. Šalje jedan događaj za poziv koji se nikada nije dogodio, s istim zaglavljima kao pravi. Zabilježite sirovi zahtjev i gradite primatelja prema onome što vaša inačica stvarno šalje.

Dio programa koji šalje zahtjeve je modul **Integracija**; može se isključiti u [Modulima](/application/modules).

## Događaji {#the-events}

| Označeno kao | Događaj | Šalje se kad |
| --- | --- | --- |
| **Novi poziv** | `call-started` | Dolazni poziv počne zvoniti ili se uputi odlazni poziv. |
| **Poziv koji mijenja stanje** | `call-state-changed` | Promijeni se `state` poziva: netko se javi, poziv se stavi na čekanje ili nastavi s bilo koje strane, ili se pridruži konferenciji ili je napusti. Utišavanje ga ne šalje. |
| **Poziv koji završava** | `call-ended` | Poziv je završio. |

Svaki se događaj može označiti zasebno. Skočna kartica kupca treba samo prvi, zapisnik poziva samo zadnji. `call-started` se šalje prvi i treba ga brzo obraditi.

## Kako izgleda zahtjev {#what-the-request-looks-like}

S adresom `https://crm.local/calls` i metodom **POST** telefon šalje ovo. Tijelo je JSON, a zaglavlje je ono koje ste postavili pod **Autorizacija**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` nosi inačicu programa i način na koji je instaliran.

## Dolazni poziv, događaj po događaj {#an-incoming-call-event-by-event}

Poziv s internog broja `1020` na račun `1002` zvoni, netko se javi, a osoba koja se javila spušta slušalicu četiri sekunde kasnije. Uz sva tri označena događaja primatelj dobiva tri zahtjeva, jedan za drugim. Svi nose isti `id` i `seance_id`.

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

Ovo je trenutak da pozivatelja potražite po `number` i prikažete karticu kupca. `state` je `ringing-in`, a `duration_s` je `0`.

### 2. Netko se javi: `call-state-changed` {#2-it-is-answered-call-state-changed}

Otprilike tri sekunde kasnije:

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

`state` je sada `active`, a `callstate_ts` se pomaknuo na trenutak promjene, dok `callstart_ts` ostaje gdje je bio.

### 3. Završava: `call-ended` {#3-it-ends-call-ended}

Nakon četiri sekunde razgovora:

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

`state` je `ended`, `duration_s` je trajanje razgovora, a `reason` kaže tko ga je završio: ovdje `local-hangup`, jer je slušalicu spustila osoba na ovom telefonu.

## Odlazni poziv, događaj po događaj {#an-outgoing-call-event-by-event}

Isti interni broj zove se s računa `1002`: osoba bira `1020`, telefon zvoni, druga strana se javlja, razgovara sedam sekundi i spušta slušalicu. Primatelj dobiva četiri zahtjeva, jedan više nego za dolazni poziv, jer odlazni poziv ima vlastito stanje dok zvoni na drugoj strani.

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

Četiri sekunde nakon toga:

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

`state` je `active`. `name` je sada ispunjen, a `uri` je adresa druge strane kako ju je javio odgovor. `duration_s` je i dalje `0`: broji od ovog trenutka.

### 4. Završava: `call-ended` {#4-it-ends-call-ended}

Sedam sekundi kasnije druga strana spušta slušalicu:

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

`duration_s` je `7`, a `reason` je `remote-hangup`, jer je poziv završila druga strana. Kad spustite slušalicu sami, to je `local-hangup`, kao kod dolaznog poziva gore.

### Stanja jedno uz drugo {#the-states-side-by-side}

| | Dolazni poziv | Odlazni poziv |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, zatim `active` |
| `call-ended` | `ended` | `ended` |

## Polja {#the-fields}

**Svaka vrijednost je niz znakova**, uključujući brojeve i vremenske oznake: `"duration_s": "42"`. Nepoznat trenutak je prazan niz. Nazivi slijede jednu konvenciju: `_id` je identifikator, `_ts` je Unix vrijeme u milisekundama (UTC), `_s` je trajanje u sekundama — isto kao u REST API-ju, gdje su vrijednosti JSON brojevi.

| Polje | Značenje |
| --- | --- |
| `event` | `call-started`, `call-state-changed` ili `call-ended`. |
| `id` | Poziv: isti UUID kao u `GET /calls` i `/calls/{id}/…`, isti u svakom događaju poziva. |
| `seance_id` | Razgovor kojem poziv pripada; pogledajte [u nastavku](#one-conversation-across-transfers). |
| `direction` | `in` ili `out`. |
| `state` | Iste vrijednosti kao u `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (na čekanje stavio ovaj telefon), `onhold` (na čekanje stavila druga strana), `conference` ili `ended`. |
| `number` | Broj druge strane. Zapise u CRM-u uparujte po ovom polju. |
| `name` | Ime druge strane iz Kontakata; može biti prazno i može se ispuniti kasnije u pozivu, kao kod odlaznog poziva gore. |
| `uri` | SIP adresa druge strane. |
| `dialed` | Birane znamenke, za odlazni poziv; prazno za dolazni. |
| `account`, `account_id` | Linija na kojoj je poziv: `username@server` i identifikator iz `GET /accounts`. |
| `event_ts` | Kada se događaj dogodio. |
| `callstart_ts` | Kada je telefon prvi put saznao za poziv. |
| `callstate_ts` | Kada je poziv ušao u trenutni `state`. |
| `duration_s` | Vrijeme razgovora u sekundama, od javljanja do spuštanja. Postavlja se u `call-ended` za prihvaćeni poziv; inače `0`. |
| `reason` | Kako je poziv završio: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; do tada `none`. |
| `answered_by` | `no` ako se na poziv javio čovjek; inače ono što se javilo. |

## Jedan razgovor kroz prosljeđivanja {#one-conversation-across-transfers}

`seance_id` grupira pozive koji čine jedan razgovor. Poziv upućen ili primljen iznova započinje novi. Poziv nastao prosljeđivanjem, poziv koji zamjenjuje drugi, konzultacija o pozivu i svaki poziv pridružen konferenciji zadržavaju `seance_id` poziva iz kojeg su nastali.

Između telefona prenosi ga SIP zaglavlje `X-Seance-Id`: kad se poziv proslijedi kolegi koji također koristi AI Softphone, a centrala zaglavlje prenese dalje, obje radne stanice javljaju isti `seance_id`.

## GET umjesto POST {#get-instead-of-post}

**GET** je za primatelje koji ne mogu primiti tijelo zahtjeva, poput starijeg CRM-a ili skriptnog mosta. Ista se polja tada šalju kao parametri upita.

Uz **GET** adresa može biti predložak: svako `[polje]` zamjenjuje se vrijednošću tog polja, postotno kodiranom. Primjerice:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Rezervirana mjesta koriste gornje nazive polja. Predlošci spremljeni s ranijim nazivima (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) i dalje rade.

## Kako se događaji isporučuju {#how-the-events-are-delivered}

| Ponašanje | Što to znači za vas |
| --- | --- |
| Događaji idu u red, ne šalju se iz samog poziva | Spor primatelj nikada ne odgađa zvonjenje, pozive ni prosljeđivanja. |
| Pun red odbacuje događaje | Ako vaš primatelj prestane odgovarati, događaji se gube, ali telefon nastavlja raditi. Pratite `webhooks_dropped_total`. |
| Odbijene i nedostupne isporuke se broje | Rast `webhooks_failed_total` dok `webhooks_delivered_total` stoji upućuje na primatelja. |
| Događaji stižu redom | Početak poziva, zatim promjene stanja, zatim kraj poziva. Za redanje spremljenih događaja koristite `callstate_ts`, a ne vrijeme dolaska. |
| Barem jednom | Isti događaj može stići dvaput. `id`, `event` i `callstate_ts` zajedno identificiraju događaj: neka vaš rukovatelj preskoči onaj koji je već vidio. |

## Primanje događaja {#receiving-the-events}

Jedino pravilo za primatelja: **odmah odgovorite `200`, a posao obavite poslije.** Spor primatelj ne usporava telefon, ali puni red, a pun red odbacuje događaje.

Primjerice, u Node.js s Expressom:

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

Da zabilježite ishod poziva — prihvaćen, propušten, odbijen — uzmite stavku s istim `seance_id` i `number` iz `GET /history?limit=20` u [REST API-ju](/integration/rest-api#call-history-get-history). Kad se vaša usluga nakon stanke ponovno pokrene, pročitajte `GET /history?limit=200` i spremite ono što ste propustili: webhookovi za stvarno vrijeme, povijest za popunjavanje praznina.

Da vidite zahtjeve prije nego što CRM bude spreman, usmjerite **Adresa** na mrežni preglednik zahtjeva i pritisnite **Pošalji probni događaj**.

## Kad ništa ne stiže {#when-nothing-arrives}

| Simptom | Što provjeriti |
| --- | --- |
| Nema nijednog webhooka | Pritisnite **Pošalji probni događaj**. Ako stigne, potrebni događaji nisu označeni; ako ne, adresa je pogrešna ili nedostupna s radne stanice. |
| `webhooks_failed_total` stalno raste | Primatelj odbija zahtjeve ili je nedostupan. Provjerite njegov zapisnik i odgovara li na jednostavan zahtjev s radne stanice. |
| `webhooks_dropped_total` je veći od nule | Primatelj je predugo bio prespor i red se napunio. Najprije odgovorite `200`, zatim obrađujte. |
| Isti događaj dvaput | Očekivano kod isporuke barem jednom. Događaje s istim `id`, `event` i `callstate_ts` smatrajte jednim. |
