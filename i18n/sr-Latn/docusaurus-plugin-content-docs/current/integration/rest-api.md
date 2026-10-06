---
title: Lokalni REST API
sidebar_position: 2
description: Dozvolite drugim programima na ovom računaru da upravljaju telefonom — upućuju pozive i upravljaju njima, čitaju kontakte, istoriju i naloge.
---

AI Softphone ima REST API za CTI integraciju: program na istom računaru može da upućuje pozive i upravlja njima, čita kontakte, istoriju poziva i SIP naloge i prati pozive u toku. Bez SDK-a, bez posrednika u oblaku i bez slušaoca izloženog mreži. Zahtevi i odgovori su JSON, pa je dovoljan `curl` ili bilo koji HTTP klijent.

API je **nakon instalacije isključen**; ništa ne sluša dok ga ne uključite. Tada sluša samo na loopback sučelju — *malom veb-sučelju koje odgovara samo ovom računaru* — i nije dostupan iz kancelarijske mreže, VPN-a niti sa drugog računara.

Koristite API kada vaš program treba podatke iz telefona ili mora da upravlja pozivom. Koristite [veb-kuke](/integration/webhooks) kada mora da reaguje na pozive dok se dešavaju, bez prozivanja. Većina integracija koristi oboje; međusobno su nezavisni.

## Uključivanje {#turning-it-on}

Otvorite **Podešavanja → Povezivanje** i idite na **Lokalno upravljanje**.

<Shot name="17b_settings_integration_scrolled" alt="Podešavanja → Povezivanje: lokalno upravljanje" />

1. Uključite **Dozvoli drugim programima na ovom računaru da upravljaju telefonom**. Server se odmah pokreće.
2. Zadržite podrazumevani **Port**, `8377`, osim ako ga već koristi drugi program.
3. Po želji podesite **Žeton**. Nakon čuvanja polje prikazuje *Sačuvano — kucajte da zamenite*.
4. Pod **Pristup** izaberite grupe koje želite da otvorite: **Kontakti**, **Istorija poziva**, **Pozivi i upravljanje njima**, **Nalozi**, **Podešavanja**, **Brojači** (metrike). Isključena grupa se ne filtrira, nego se uopšte ne služi.
5. Isprobajte: `curl http://127.0.0.1:8377/accounts`. Ako je odgovor JSON, API radi.

Ne instalira se zasebna usluga i nije potrebno ponovno pokretanje. Deo programa koji to radi može da se isključi u [Modulima](/application/modules) (**Povezivanje**).

## Sopstvena stranica API-ja {#the-apis-own-page}

**Otvori sopstvenu stranicu API-ja** otvara `http://127.0.0.1:8377` u pregledaču. Adresa odgovara spiskom svega što služi, na engleskom; adrese koje nešto čitaju su veze koje možete da pratite.

<Shot name="23_api_page" alt="Sopstvena stranica API-ja, http://127.0.0.1:8377/, otvorena u pregledaču" />

## Pristup i žeton {#access-and-the-token}

Šta program sme da radi zavisi od toga da li menja sačuvane podatke, a ne od toga da li čita:

- **Bez žetona** bilo koji program na računaru sme da čita sve u uključenim grupama i da upravlja pozivima: da uputi, javi se, prekine, stavi na čekanje, nastavi, prosledi i šalje DTMF.
- **Sa žetonom** u zaglavlju `Authorization` sme da koristi i krajnje tačke koje menjaju ono što je sačuvano. Bez žetona te krajnje tačke se niti služe niti navode na sopstvenoj stranici API-ja.

Žeton se čuva u skladištu ključeva računara, ne u datoteci podešavanja, i `/settings` ga nikada ne vraća.

:::caution
Bez žetona bilo koji program koji radi na ovom računaru može da upravlja telefonom, uključujući javljanje na pozive. Na ličnoj radnoj stanici to je obično prihvatljivo. Na zajedničkom ili upravljanom računaru podesite žeton i postupajte sa njim kao sa bilo kojom drugom lozinkom. Žeton štiti samo zahteve koji menjaju sačuvane podatke, a ne pozive: ako želite da druge programe držite dalje od poziva, isključite **Pozivi i upravljanje njima** pod **Pristup**.
:::

## Krajnje tačke {#endpoints}

Osnovna adresa je `http://127.0.0.1:8377`. Krajnje tačke u nastavku ne zahtevaju žeton.

| Metod | Putanja | Šta radi |
| --- | --- | --- |
| GET | `/metrics` | Brojači, u formatu Prometheus. |
| GET | `/ui` | Spisak snimaka, kao HTML stranica. |
| GET | `/ui/recordings/{id}` | Snimak sa prepisom, kao HTML stranica. |
| GET | `/ui/recordings/{id}/audio` | Zvuk za gornju stranicu. |
| GET | `/contacts` | Kontakti. |
| GET | `/contacts/{id}` | Jedan kontakt. |
| GET | `/history` | Dnevnik poziva, od najnovijih. Prihvata `?limit=`, `?missed=true` i `?declined=true`. |
| GET | `/calls` | Pozivi u toku. |
| POST | `/calls` | Upućuje poziv: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Javlja se na poziv. |
| POST | `/calls/{id}/hangup` | Prekida poziv. |
| POST | `/calls/{id}/hold` | Stavlja poziv na čekanje. |
| POST | `/calls/{id}/resume` | Vraća ga sa čekanja. |
| POST | `/calls/{id}/dtmf` | Šalje tonove: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Prosleđuje poziv: `{"target": "..."}`. |
| GET | `/accounts` | SIP nalozi i stanje njihove registracije. Nikada lozinka. |
| GET | `/settings` | Cela konfiguracija, bez tajni. |
| GET | `/taxonomy` | Kategorije, oznake i upozorenja, sa njihovim kodovima. |

Svaki identifikator je UUID koji dodeljuje telefon: `id` poziva dolazi iz `/calls` ili iz odgovora na `POST /calls`, `id` naloga iz `/accounts`.

Nazivi polja su u snake_caseu, a završetak govori o vrsti: `_id` je referenca na UUID, `_ts` je trenutak u Unix milisekundama (UTC), `_s` je trajanje u sekundama. Isto važi za veb-kuke; samo `/settings` ima sopstvene nazive. U REST API-ju te vrednosti su JSON brojevi, a nepoznat trenutak je `null`.

## Primer: upućivanje poziva {#example-placing-a-call}

`POST /calls` upućuje odlazni poziv. Telo je JSON sa `number` koji treba pozvati i, po želji, `account_id` naloga sa kog treba zvati:

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
- Broj se na izabranom nalogu dopunjuje kao što ga dopunjuje polje za biranje: `1020` se šalje kao `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` dopunjuje svoj `target` na isti način; cilj koji već ima šemu ili `@` šalje se takav kakav jeste.
- `account_id` je neobavezan; uzmite ga iz `GET /accounts`. Bez njega poziv ide sa naloga izabranog u glavnom prozoru.
- Koristite `id` u `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` i `transfer`. [Veb-kuke](/integration/webhooks#an-outgoing-call-event-by-event) ovog poziva nose isti `id`.

### Sa veb-stranice: klik za poziv {#from-a-web-page-click-to-call}

Stranica koja zove `127.0.0.1` dolazi do računara na kom radi pregledač — istog na kom radi telefon —, pa dugme „klik za poziv” u CRM-u ne treba sopstveni server:

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

## Šta sadrže odgovori {#what-the-answers-contain}

### Pozivi u toku: `GET /calls` {#calls-in-progress-get-calls}

Svaki poziv ima svoj `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` i `callstate_ts`.

- `state` je `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (na čekanje stavio ovaj telefon), `onhold` (na čekanje stavila druga strana), `conference` ili `ended`. Kada važi više od jednog, `conference` ima prednost nad `hold`, a `hold` nad `onhold`.
- `muted` kaže da li je mikrofon u pozivu isključen; isključivanje mikrofona ne menja `state`.
- `seance_id` je razgovor: pozivi povezani prosleđivanjem, konsultacijom ili konferencijom dele ga.
- `event_ts` je trenutak kada je odgovor nastao. Uporedite ga sa `callstate_ts` da vidite koliko je dugo poziv u svom stanju, bez oslanjanja na sopstveni sat.

### Nalozi: `GET /accounts` {#accounts-get-accounts}

Svaki nalog ima svoj `id` (svuda drugde `account_id`), svoja podešavanja — `transport` (`udp`, `tcp` ili `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` i druga —, da li je `enabled`, i svoj `state` na centrali: `registered` dok je linija aktivna. Lozinke nikada nisu uključene.

### Istorija poziva: `GET /history` {#call-history-get-history}

Od najnovijih, 100 stavki osim ako `?limit=` kaže drugačije. `?missed=true` vraća samo propuštene pozive, `?declined=true` samo pozive koje je ovaj telefon odbio.

| Polje | Značenje |
| --- | --- |
| `id` | Sopstveni identifikator stavke istorije. To nije `id` poziva iz `/calls` i veb-kuka; povezuje ih `seance_id`. |
| `outcome` | Glavna klasifikacija: `answered`, `missed`, `declined` ili `failed`. |
| `answered` | `true` ili `false`. |
| `duration_s` | `0` za poziv koji nikada nije uspostavljen. |
| `number`, `uri` | Druga strana, kao broj i kao SIP adresa. |
| `name` | Iz Kontakata ako je broj poznat, inače prazno. Uparujte po `number`, ne po ovome. |
| `dialed` | Birane cifre, za odlazni poziv; prazno za dolazni. |
| `account`, `account_id` | Linija na kojoj je poziv bio. |
| `reason` | Kako se završio: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` ako se javio čovek; inače ono što se javilo na poziv. |

### Kontakti: `GET /contacts` {#contacts-get-contacts}

Svaki kontakt ima svoj `id`, `name`, `number` i liniju kojoj pripada, `account_id` i `account`; prazan `account` znači da kontakt nije vezan za liniju.

### Snimci {#recordings}

Snimci i prepisi se ne izdaju kao JSON. API ih služi kao HTML stranice, `/ui` i `/ui/recordings/{id}`: povezujte na te stranice iz svog CRM-a umesto premeštanja zvuka. Veza se otvara na računaru koji čuva snimak, a zvuk ga nikada ne napušta.

## Taksonomija i podešavanja {#taxonomy-and-settings}

Svaka stavka `/taxonomy` ima stalan `code`, `title` i `description` na jeziku sučelja, `kind` (`category`, `tag` ili `red_flag`) i, za upozorenja, `severity`. **Uparujte po `code`, nikada po `title`**: naslovi dolaze na jeziku na koji je telefon podešen. Stavka sa `retired: true` zadržava se kako bi se stariji pozivi i dalje razrešavali; novim pozivima se više ne dodeljuje. Učitajte taksonomiju jednom pri pokretanju da reči telefona preslikate na sopstvena polja.

`/settings` vraća konfiguraciju osim tajni: zvučne uređaje i jačine, prioritet kodeka, izgled i jezik, pokretanje, prečice, nivo dijagnostike i stanje obe integracije — korisno za alat podrške koji mora da proveri radnu stanicu bez deljenja ekrana. `api.disabled` navodi isključene grupe pristupa, a `webhooks.silenced` isključene događaje; prazni spiskovi znače da je sve uključeno. Nikada ne uključuje SIP lozinku, žeton API-ja ni vrednost zaglavlja veb-kuke.

## Greške {#errors}

Svaka greška je JSON sa jednim ključem `error`, namenjena ljudima, a ne raščlanjivanju.

| Status | Telo | Značenje |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Putanja ne postoji ili je njena grupa pristupa isključena; oboje namerno daje isti odgovor. |
| 404 | `{"error":"no contact with that id"}` | Putanja je ispravna, identifikator nije. |
| 400 | `{"error":"no call with that id"}` | Poziv se završio ili nikada nije postojao. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` bez broja. Ništa nije birano. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` bez cifara. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` bez cilja. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Nalog poziva je uklonjen tokom poziva, pa cilj ne može da se dopuni. Centrali ništa nije poslato. |

Odbijeni zahtevi broje se u `api_requests_refused_total`, pa se integracija koja tiho ne uspeva vidi u metrikama, a ne samo u vašim sopstvenim dnevnicima.

## Metrike {#metrics}

`GET /metrics` vraća svaki brojač telefona, svaki sa tekstom pomoći. Prikupljajte ih Prometheusom ili ih čitajte ručno.

| Brojač | Broji |
| --- | --- |
| `calls_incoming_total` | Primljene dolazne pozive. |
| `calls_outgoing_total` | Upućene odlazne pozive. |
| `calls_answered_total` | Pozive na koje se neko javio. |
| `calls_missed_total` | Dolazne pozive na koje se niko nije javio. |
| `calls_declined_total` | Pozive odbijene ovde ili na drugoj strani. |
| `calls_failed_total` | Pozive koji nisu mogli da se uspostave. |
| `registrations_succeeded_total` | Uspešne SIP registracije. |
| `registrations_failed_total` | SIP registracije odbijene ili istekle. |
| `webhooks_delivered_total` | Veb-kuke koje je primalac prihvatio. |
| `webhooks_failed_total` | Veb-kuke odbijene ili neisporučene. |
| `webhooks_dropped_total` | Veb-kuke odbačene jer je red bio pun. |
| `api_requests_total` | Zahteve koje je API obradio. |
| `api_requests_refused_total` | Odbijene zahteve: pogrešan žeton, isključena grupa ili nepoznata putanja. |

## Ažuriranje starije integracije {#updating-an-older-integration}

Ranije verzije su koristile nazive u camelCaseu i kratke identifikatore. `accountId` je sada `account_id`, `startedAt` je `callstart_ts`, `durationSeconds` je `duration_s`, `answeredBy` je `answered_by`, a polje veb-kuke `at` je `event_ts`. Pozivi i nalozi se identifikuju samo UUID-om: `runtimeId` i identifikatori kao što su `call-3` ili `account-2` više se ne vraćaju niti prihvataju.

## Kada ne radi {#when-it-does-not-work}

| Simptom | Šta proveriti |
| --- | --- |
| Veza odbijena na `127.0.0.1:8377` | Lokalno upravljanje je isključeno, telefon ne radi ili je port promenjen. |
| `404 {"error":"no such endpoint"}` za putanju sa ove stranice | Njena grupa pristupa je isključena. |
| Čitanje radi, pisanje je odbijeno | Krajnje tačke koje menjaju sačuvane podatke zahtevaju žeton u zaglavlju `Authorization`. |
| Naslovi kategorija nisu na engleskom | Naslovi prate jezik sučelja. Uparujte po `code` iz `/taxonomy`. |
| Nedostaju `accountId`, `startedAt` ili `at` | Integracija je pisana za ranije nazive; pogledajte gore. |

Za problem sa registracijom ili samim pozivom otvorite [Dijagnostiku](/troubleshooting/diagnostics).
