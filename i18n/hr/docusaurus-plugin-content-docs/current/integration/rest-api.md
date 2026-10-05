---
title: Lokalni REST API
sidebar_position: 2
description: Dopustite drugim programima na ovom računalu da upravljaju telefonom — upućuju pozive i upravljaju njima, čitaju kontakte, povijest i račune.
---

AI Softphone ima REST API za CTI integraciju: program na istom računalu može upućivati pozive i upravljati njima, čitati kontakte, povijest poziva i SIP račune te pratiti pozive u tijeku. Bez SDK-a, bez posrednika u oblaku i bez slušatelja izloženog mreži. Zahtjevi i odgovori su JSON, pa je dovoljan `curl` ili bilo koji HTTP klijent.

API je **nakon instalacije isključen**; ništa ne sluša dok ga ne uključite. Tada sluša samo na loopback sučelju — *malom web-sučelju koje odgovara samo ovom računalu* — i nije dostupan iz uredske mreže, VPN-a ni s drugog računala.

Koristite API kad vaš program treba podatke iz telefona ili mora upravljati pozivom. Koristite [webhookove](/integration/webhooks) kad mora reagirati na pozive dok se događaju, bez prozivanja. Većina integracija koristi oboje; međusobno su neovisni.

## Uključivanje {#turning-it-on}

Otvorite **Postavke → Integracija** i idite na **Lokalno upravljanje**.

<Shot name="17b_settings_integration_scrolled" alt="Postavke → Integracija: lokalno upravljanje" />

1. Uključite **Dopusti drugim programima na ovom računalu da upravljaju telefonom**. Poslužitelj se odmah pokreće.
2. Zadržite zadani **Port**, `8377`, osim ako ga već koristi drugi program.
3. Po želji postavite **Token**. Nakon spremanja polje prikazuje *Spremljeno — pišite da to zamijenite*.
4. Pod **Pristup** odaberite skupine koje želite otvoriti: **Kontakti**, **Povijest poziva**, **Pozivi i upravljanje njima**, **Računi**, **Postavke**, **Brojači** (metrike). Isključena skupina ne filtrira se, nego se uopće ne poslužuje.
5. Provjerite: `curl http://127.0.0.1:8377/accounts`. Ako je odgovor JSON, API radi.

Ne instalira se zasebna usluga i nije potrebno ponovno pokretanje. Dio programa koji to radi može se isključiti u [Modulima](/application/modules) (**Integracija**).

## Vlastita stranica API-ja {#the-apis-own-page}

**Otvori vlastitu stranicu API-ja** otvara `http://127.0.0.1:8377` u pregledniku. Adresa odgovara popisom svega što poslužuje, na engleskom; adrese koje nešto čitaju poveznice su koje možete slijediti.

<Shot name="23_api_page" alt="Vlastita stranica API-ja, http://127.0.0.1:8377/, otvorena u pregledniku" />

## Pristup i token {#access-and-the-token}

Što program smije raditi ovisi o tome mijenja li spremljene podatke, a ne o tome čita li:

- **Bez tokena** bilo koji program na računalu smije čitati sve u uključenim skupinama i upravljati pozivima: uputiti, javiti se, spustiti, staviti na čekanje, nastaviti, proslijediti i slati DTMF.
- **S tokenom** u zaglavlju `Authorization` smije koristiti i krajnje točke koje mijenjaju ono što je spremljeno. Bez tokena te se krajnje točke niti poslužuju niti navode na vlastitoj stranici API-ja.

Token se čuva u spremniku ključeva računala, ne u datoteci postavki, i `/settings` ga nikada ne vraća.

:::caution
Bez tokena bilo koji program koji radi na ovom računalu može upravljati telefonom, uključujući javljanje na pozive. Na osobnoj radnoj stanici to je obično prihvatljivo. Na zajedničkom ili upravljanom računalu postavite token i postupajte s njim kao s bilo kojom drugom lozinkom.
:::

## Krajnje točke {#endpoints}

Osnovna adresa je `http://127.0.0.1:8377`. Krajnje točke u nastavku ne trebaju token.

| Metoda | Putanja | Što radi |
| --- | --- | --- |
| GET | `/metrics` | Brojači, u formatu Prometheus. |
| GET | `/ui` | Popis snimki, kao HTML stranica. |
| GET | `/ui/recordings/{id}` | Snimka s prijepisom, kao HTML stranica. |
| GET | `/ui/recordings/{id}/audio` | Zvuk za gornju stranicu. |
| GET | `/contacts` | Kontakti. |
| GET | `/contacts/{id}` | Jedan kontakt. |
| GET | `/history` | Zapisnik poziva, od najnovijih. Prihvaća `?limit=`, `?missed=true` i `?declined=true`. |
| GET | `/calls` | Pozivi u tijeku. |
| POST | `/calls` | Upućuje poziv: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Javlja se na poziv. |
| POST | `/calls/{id}/hangup` | Spušta poziv. |
| POST | `/calls/{id}/hold` | Stavlja poziv na čekanje. |
| POST | `/calls/{id}/resume` | Vraća ga s čekanja. |
| POST | `/calls/{id}/dtmf` | Šalje tonove: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Prosljeđuje poziv: `{"target": "..."}`. |
| GET | `/accounts` | SIP računi i stanje njihove registracije. Nikada lozinka. |
| GET | `/settings` | Cijela konfiguracija, bez tajni. |
| GET | `/taxonomy` | Kategorije, oznake i upozoravajući signali, s njihovim kodovima. |

Svaki identifikator je UUID koji dodjeljuje telefon: `id` poziva dolazi iz `/calls` ili iz odgovora na `POST /calls`, `id` računa iz `/accounts`.

Nazivi polja su u snake_caseu, a završetak govori o vrsti: `_id` je referenca na UUID, `_ts` je trenutak u Unix milisekundama (UTC), `_s` je trajanje u sekundama. Isto vrijedi za webhookove; samo `/settings` ima vlastite nazive. U REST API-ju te su vrijednosti JSON brojevi, a nepoznat trenutak je `null`.

## Primjer: upućivanje poziva {#example-placing-a-call}

`POST /calls` upućuje odlazni poziv. Tijelo je JSON s `number` koji treba nazvati i, po želji, `account_id` računa s kojeg treba zvati:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Odgovor je identifikator novog poziva:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` je obavezan. Bez njega odgovor je `400 {"error":"a call needs a number"}` i ništa se ne bira.
- Broj se na odabranom računu dopunjuje kao što ga dopunjuje polje za biranje: `1020` se šalje kao `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` dopunjuje svoj `target` na isti način; cilj koji već ima shemu ili `@` šalje se takav kakav jest.
- `account_id` je neobavezan; uzmite ga iz `GET /accounts`. Bez njega poziv ide s računa odabranog u glavnom prozoru.
- Koristite `id` u `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` i `transfer`. [Webhookovi](/integration/webhooks#an-outgoing-call-event-by-event) ovog poziva nose isti `id`.

### S web-stranice: klik za poziv {#from-a-web-page-click-to-call}

Stranica koja zove `127.0.0.1` dolazi do računala na kojem radi preglednik — istog na kojem radi telefon —, pa gumb „klik za poziv” u CRM-u ne treba vlastiti poslužitelj:

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

## Što sadrže odgovori {#what-the-answers-contain}

### Pozivi u tijeku: `GET /calls` {#calls-in-progress-get-calls}

Svaki poziv ima svoj `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` i `callstate_ts`.

- `state` je `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (na čekanje stavio ovaj telefon), `onhold` (na čekanje stavila druga strana), `conference` ili `ended`. Kad vrijedi više od jednog, `conference` ima prednost pred `hold`, a `hold` pred `onhold`.
- `muted` kaže je li mikrofon u pozivu utišan; utišavanje ne mijenja `state`.
- `seance_id` je razgovor: pozivi povezani prosljeđivanjem, konzultacijom ili konferencijom dijele ga.
- `event_ts` je trenutak kad je odgovor nastao. Usporedite ga s `callstate_ts` da vidite koliko je dugo poziv u svom stanju, bez oslanjanja na vlastiti sat.

### Računi: `GET /accounts` {#accounts-get-accounts}

Svaki račun ima svoj `id` (svugdje drugdje `account_id`), svoje postavke — `transport` (`udp`, `tcp` ili `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` i druge —, je li `enabled`, i svoj `state` na centrali: `registered` dok je linija aktivna. Lozinke nikada nisu uključene.

### Povijest poziva: `GET /history` {#call-history-get-history}

Od najnovijih, 100 stavki osim ako `?limit=` kaže drukčije. `?missed=true` vraća samo propuštene pozive, `?declined=true` samo pozive koje je ovaj telefon odbio.

| Polje | Značenje |
| --- | --- |
| `id` | Vlastiti identifikator stavke povijesti. To nije `id` poziva iz `/calls` i webhookova; povezuje ih `seance_id`. |
| `outcome` | Glavna klasifikacija: `answered`, `missed`, `declined` ili `failed`. |
| `answered` | `true` ili `false`. |
| `duration_s` | `0` za poziv koji nikada nije uspostavljen. |
| `number`, `uri` | Druga strana, kao broj i kao SIP adresa. |
| `name` | Iz Kontakata ako je broj poznat, inače prazno. Uparujte po `number`, ne po ovome. |
| `dialed` | Birane znamenke, za odlazni poziv; prazno za dolazni. |
| `account`, `account_id` | Linija na kojoj je poziv bio. |
| `reason` | Kako je završio: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` ako se javio čovjek; inače ono što se javilo na poziv. |

### Kontakti: `GET /contacts` {#contacts-get-contacts}

Svaki kontakt ima svoj `id`, `name`, `number` i liniju kojoj pripada, `account_id` i `account`; prazan `account` znači da kontakt nije vezan uz liniju.

### Snimke {#recordings}

Snimke i prijepisi ne izdaju se kao JSON. API ih poslužuje kao HTML stranice, `/ui` i `/ui/recordings/{id}`: povezujte na te stranice iz svog CRM-a umjesto premještanja zvuka. Poveznica se otvara na računalu koje čuva snimku, a zvuk ga nikada ne napušta.

## Taksonomija i postavke {#taxonomy-and-settings}

Svaka stavka `/taxonomy` ima stalan `code`, `title` i `description` na jeziku sučelja, `kind` (`category`, `tag` ili `red_flag`) i, za upozoravajuće signale, `severity`. **Uparujte po `code`, nikada po `title`**: naslovi dolaze na jeziku na koji je telefon postavljen. Stavka s `retired: true` zadržava se kako bi se stariji pozivi i dalje razrješavali; novim pozivima više se ne dodjeljuje. Učitajte taksonomiju jednom pri pokretanju da riječi telefona preslikate na vlastita polja.

`/settings` vraća konfiguraciju osim tajni: zvučne uređaje i glasnoće, prioritet kodeka, izgled i jezik, pokretanje, prečace, razinu dijagnostike i stanje obje integracije — korisno za alat podrške koji mora provjeriti radnu stanicu bez dijeljenja zaslona. `api.disabled` navodi isključene skupine pristupa, a `webhooks.silenced` isključene događaje; prazni popisi znače da je sve uključeno. Nikada ne uključuje SIP lozinku, token API-ja ni vrijednost zaglavlja webhooka.

## Pogreške {#errors}

Svaka pogreška je JSON s jednim ključem `error`, namijenjena ljudima, a ne raščlanjivanju.

| Status | Tijelo | Značenje |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Putanja ne postoji ili je njezina skupina pristupa isključena; oboje namjerno daje isti odgovor. |
| 404 | `{"error":"no contact with that id"}` | Putanja je ispravna, identifikator nije. |
| 400 | `{"error":"no call with that id"}` | Poziv je završio ili nikada nije postojao. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` bez broja. Ništa nije birano. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` bez znamenki. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` bez cilja. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Račun poziva uklonjen je tijekom poziva, pa se cilj ne može dopuniti. Centrali ništa nije poslano. |

Odbijeni zahtjevi broje se u `api_requests_refused_total`, pa se integracija koja tiho ne uspijeva vidi u metrikama, a ne samo u vašim vlastitim zapisnicima.

## Metrike {#metrics}

`GET /metrics` vraća svaki brojač telefona, svaki s tekstom pomoći. Prikupljajte ih Prometheusom ili ih čitajte ručno.

| Brojač | Broji |
| --- | --- |
| `calls_incoming_total` | Primljene dolazne pozive. |
| `calls_outgoing_total` | Upućene odlazne pozive. |
| `calls_answered_total` | Pozive na koje se netko javio. |
| `calls_missed_total` | Dolazne pozive na koje se nitko nije javio. |
| `calls_declined_total` | Pozive odbijene ovdje ili na drugoj strani. |
| `calls_failed_total` | Pozive koji se nisu mogli uspostaviti. |
| `registrations_succeeded_total` | Uspješne SIP registracije. |
| `registrations_failed_total` | SIP registracije odbijene ili istekle. |
| `webhooks_delivered_total` | Webhookove koje je primatelj prihvatio. |
| `webhooks_failed_total` | Webhookove odbijene ili neisporučene. |
| `webhooks_dropped_total` | Webhookove odbačene jer je red bio pun. |
| `api_requests_total` | Zahtjeve koje je API obradio. |
| `api_requests_refused_total` | Odbijene zahtjeve: pogrešan token, isključena skupina ili nepoznata putanja. |

## Ažuriranje starije integracije {#updating-an-older-integration}

Ranije inačice koristile su nazive u camelCaseu i kratke identifikatore. `accountId` je sada `account_id`, `startedAt` je `callstart_ts`, `durationSeconds` je `duration_s`, `answeredBy` je `answered_by`, a polje webhooka `at` je `event_ts`. Pozivi i računi identificiraju se samo UUID-om: `runtimeId` i identifikatori poput `call-3` ili `account-2` više se ne vraćaju niti prihvaćaju.

## Kad ne radi {#when-it-does-not-work}

| Simptom | Što provjeriti |
| --- | --- |
| Veza odbijena na `127.0.0.1:8377` | Lokalno upravljanje je isključeno, telefon ne radi ili je port promijenjen. |
| `404 {"error":"no such endpoint"}` za putanju s ove stranice | Njezina skupina pristupa je isključena. |
| Čitanje radi, pisanje je odbijeno | Krajnje točke koje mijenjaju spremljene podatke trebaju token u zaglavlju `Authorization`. |
| Naslovi kategorija nisu na engleskom | Naslovi prate jezik sučelja. Uparujte po `code` iz `/taxonomy`. |
| Nedostaju `accountId`, `startedAt` ili `at` | Integracija je pisana za ranije nazive; pogledajte gore. |

Za problem s registracijom ili samim pozivom otvorite [Dijagnostiku](/troubleshooting/diagnostics).
