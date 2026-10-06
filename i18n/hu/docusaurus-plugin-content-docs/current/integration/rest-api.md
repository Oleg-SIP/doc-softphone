---
title: Helyi REST API
sidebar_position: 2
description: A számítógép más programjai vezérelhetik a telefont — hívásokat indíthatnak és kezelhetnek, lekérdezhetik a névjegyeket, az előzményeket és a fiókokat.
---

Az AI Softphone CTI-integrációhoz REST API-val rendelkezik: egy ugyanazon a számítógépen futó program hívásokat indíthat és kezelhet, lekérdezheti a névjegyeket, a hívásnaplót és a SIP-fiókokat, és figyelheti a folyamatban lévő hívásokat. Nincs SDK, nincs felhőbeli közvetítő, és nincs a hálózat felé nyitott figyelő. A kérések és a válaszok JSON formátumúak, így a `curl` vagy bármely HTTP-kliens elegendő.

Az API **a telepítés után ki van kapcsolva**; semmi sem figyel, amíg be nem kapcsolja. Ezután is csak a loopback felületen figyel — *egy kis webes felület, amely csak ennek a számítógépnek válaszol* —, és nem érhető el az irodai hálózatról, VPN-ről vagy egy másik gépről.

Az API-t akkor használja, ha a programjának adatokra van szüksége a telefonból, vagy egy hívást kell vezérelnie. A [webhookokat](/integration/webhooks) akkor használja, ha a hívásokra azok történése közben kell reagálnia, lekérdezgetés nélkül. A legtöbb integráció mindkettőt használja; egymástól függetlenek.

## Bekapcsolás {#turning-it-on}

Nyissa meg a **Beállítások → Integráció** lapot, és lépjen a **Helyi vezérlés** részhez.

<Shot name="17b_settings_integration_scrolled" alt="Beállítások → Integráció: helyi vezérlés" />

1. Kapcsolja be **A számítógép más programjai vezérelhessék a telefont** lehetőséget. A kiszolgáló azonnal elindul.
2. Tartsa meg az alapértelmezett **Port** értéket, a `8377`-et, hacsak egy másik program már nem használja.
3. Ha szeretné, állítson be egy **Token** értéket. Mentés után a mezőben az *Elmentve — írjon, hogy lecserélje* felirat látható.
4. A **Hozzáférés** alatt válassza ki a megnyitandó csoportokat: **Névjegyek**, **Hívásnapló**, **Hívások és azok kezelése**, **Fiókok**, **Beállítások**, **Számlálók** (a mérőszámok). A kikapcsolt csoport nem szűrve van, hanem egyáltalán nem szolgálja ki a program.
5. Próbálja ki: `curl http://127.0.0.1:8377/accounts`. Ha a válasz JSON, az API működik.

Nem kell külön szolgáltatást telepíteni, és újraindításra sincs szükség. A program ezt végző része a [Modulok](/application/modules) között kikapcsolható (**Integráció**).

## Az API saját oldala {#the-apis-own-page}

**Az API saját oldalának megnyitása** böngészőben megnyitja a `http://127.0.0.1:8377` címet. A cím angol nyelvű listával válaszol mindarról, amit kiszolgál; az olvasó címek követhető hivatkozások.

<Shot name="23_api_page" alt="Az API saját oldala, http://127.0.0.1:8377/, böngészőben megnyitva" />

## Hozzáférés és a token {#access-and-the-token}

Hogy egy program mit tehet, az attól függ, hogy módosít-e tárolt adatokat, nem attól, hogy olvas-e:

- **Token nélkül** a számítógép bármely programja mindent olvashat az engedélyezett csoportokban, és vezérelheti a hívásokat: indíthat, fogadhat, bonthat, tartásba tehet, folytathat, átadhat és DTMF-et küldhet.
- **A tokennel** az `Authorization` fejlécben azokat a végpontokat is használhatja, amelyek a tárolt adatokat módosítják. Token nélkül ezeket a végpontokat a program sem ki nem szolgálja, sem fel nem sorolja az API saját oldalán.

A tokent a számítógép kulcstartója őrzi, nem a beállításfájl, és a `/settings` soha nem adja vissza.

:::caution
Token nélkül a számítógépen futó bármely program vezérelheti a telefont, a hívások fogadását is beleértve. Egy személyes munkaállomáson ez általában elfogadható. Egy közös vagy központilag felügyelt gépen állítson be tokent, és kezelje úgy, mint bármely más jelszót.
:::

## Végpontok {#endpoints}

Az alapcím `http://127.0.0.1:8377`. Az alábbi végpontokhoz nem kell token.

| Módszer | Útvonal | Mit csinál |
| --- | --- | --- |
| GET | `/metrics` | A számlálók Prometheus formátumban. |
| GET | `/ui` | A felvételek listája HTML-oldalként. |
| GET | `/ui/recordings/{id}` | Egy felvétel a leiratával, HTML-oldalként. |
| GET | `/ui/recordings/{id}/audio` | A fenti oldal hanganyaga. |
| GET | `/contacts` | A névjegyek. |
| GET | `/contacts/{id}` | Egyetlen névjegy. |
| GET | `/history` | A hívásnapló, a legújabbal kezdve. Elfogadja a `?limit=`, `?missed=true` és `?declined=true` paramétert. |
| GET | `/calls` | A folyamatban lévő hívások. |
| POST | `/calls` | Hívást indít: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Fogad egy hívást. |
| POST | `/calls/{id}/hangup` | Bont egy hívást. |
| POST | `/calls/{id}/hold` | Tartásba tesz egy hívást. |
| POST | `/calls/{id}/resume` | Visszaveszi a tartásból. |
| POST | `/calls/{id}/dtmf` | Hangokat küld: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Átadja a hívást: `{"target": "..."}`. |
| GET | `/accounts` | A SIP-fiókok és regisztrációs állapotuk. Jelszót soha. |
| GET | `/settings` | A teljes konfiguráció, a titkos adatok nélkül. |
| GET | `/taxonomy` | Kategóriák, címkék és figyelmeztető jelek, a kódjaikkal. |

Minden azonosító a telefon által kiadott UUID: a hívás `id` értéke a `/calls` végpontból vagy a `POST /calls` válaszából származik, a fiók `id` értéke a `/accounts` végpontból.

A mezőnevek snake_case formájúak, a végződésük pedig a típust jelzi: az `_id` egy UUID-ra mutató hivatkozás, a `_ts` egy időpont Unix-ezredmásodpercben (UTC), az `_s` másodpercben megadott hossz. Ugyanez érvényes a webhookokra is; csak a `/settings` használ saját neveket. A REST API-ban ezek az értékek JSON-számok, az ismeretlen időpont pedig `null`.

## Példa: hívás indítása {#example-placing-a-call}

A `POST /calls` kimenő hívást indít. A törzs JSON, amely a tárcsázandó `number` értéket és — nem kötelezően — annak a fióknak az `account_id` azonosítóját tartalmazza, amelyről a hívás indul:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

A válasz az új hívás azonosítója:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- A `number` kötelező. Nélküle a válasz `400 {"error":"a call needs a number"}`, és semmi sem kerül tárcsázásra.
- A számot a program a kiválasztott fiókon ugyanúgy egészíti ki, ahogyan a tárcsázó: az `1020` `sip:1020@pbx.example.com` formában megy ki. A `POST /calls/{id}/transfer` ugyanígy egészíti ki a `target` értékét; az a cél, amelyben már van séma vagy `@`, változatlanul megy ki.
- Az `account_id` nem kötelező; a `GET /accounts` válaszából veheti. Nélküle a hívás a főablakban kiválasztott fiókon megy ki.
- Az `id` értéket a `/calls/{id}/…` végpontokban használja: `hangup`, `hold`, `resume`, `dtmf` és `transfer`. A hívás [webhookjai](/integration/webhooks#an-outgoing-call-event-by-event) ugyanezt az `id` értéket hordozzák.

### Weboldalról: kattintásos hívás {#from-a-web-page-click-to-call}

Az a weboldal, amely a `127.0.0.1` címet hívja, azt a számítógépet éri el, amelyen a böngésző fut — ugyanazt, amelyen a telefon is —, így egy CRM-ben lévő kattintásos hívás gombhoz nem kell saját kiszolgáló:

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

## Mit tartalmaznak a válaszok {#what-the-answers-contain}

### Folyamatban lévő hívások: `GET /calls` {#calls-in-progress-get-calls}

Minden hívásnak van `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` és `callstate_ts` mezője.

- A `state` értéke `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (ez a telefon tette tartásba), `onhold` (a másik fél tette tartásba), `conference` vagy `ended`. Ha több is érvényes, a `conference` elsőbbséget élvez a `hold` előtt, a `hold` pedig az `onhold` előtt.
- A `muted` megmondja, hogy a mikrofon némítva van-e a hívásban; a némítás nem változtatja meg a `state` értékét.
- A `seance_id` a beszélgetés: az átadással, konzultációval vagy konferenciával összekapcsolt hívások osztoznak rajta.
- Az `event_ts` a válasz elkészítésének időpontja. Vesse össze a `callstate_ts` értékkel, hogy lássa, mióta van a hívás az adott állapotban, anélkül hogy a saját órájára hagyatkozna.

### Fiókok: `GET /accounts` {#accounts-get-accounts}

Minden fióknak megvan az `id` azonosítója (máshol `account_id`), a beállításai — `transport` (`udp`, `tcp` vagy `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` és mások —, az, hogy `enabled`-e, valamint a `state` állapota az alközponton: `registered`, amíg a vonal él. Jelszavakat soha nem tartalmaz.

### Hívásnapló: `GET /history` {#call-history-get-history}

A legújabbal kezdve, 100 bejegyzés, hacsak a `?limit=` mást nem mond. A `?missed=true` csak a nem fogadott hívásokat adja vissza, a `?declined=true` csak azokat, amelyeket ez a telefon elutasított.

| Mező | Jelentés |
| --- | --- |
| `id` | A naplóbejegyzés saját azonosítója. Nem azonos a `/calls` és a webhookok hívás-`id` értékével; a kettőt a `seance_id` kapcsolja össze. |
| `outcome` | A fő besorolás: `answered`, `missed`, `declined` vagy `failed`. |
| `answered` | `true` vagy `false`. |
| `duration_s` | `0` olyan hívásnál, amely nem jött létre. |
| `number`, `uri` | A másik fél számként és SIP-címként. |
| `name` | A Névjegyekből, ha a szám ismert, egyébként üres. Az illesztést a `number` alapján végezze, ne ez alapján. |
| `dialed` | A tárcsázott számjegyek kimenő hívásnál; bejövő hívásnál üres. |
| `account`, `account_id` | A vonal, amelyen a hívás zajlott. |
| `reason` | Hogyan ért véget: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, ha egy személy fogadta; egyébként az, ami a hívást fogadta. |

### Névjegyek: `GET /contacts` {#contacts-get-contacts}

Minden névjegynek van `id`, `name` és `number` mezője, valamint a vonal, amelyhez tartozik: `account_id` és `account`; az üres `account` azt jelenti, hogy a névjegy nincs vonalhoz kötve.

### Felvételek {#recordings}

A felvételeket és a leiratokat a program nem adja ki JSON-ként. Az API HTML-oldalakként szolgálja ki őket, `/ui` és `/ui/recordings/{id}`: a CRM-ből ezekre az oldalakra hivatkozzon ahelyett, hogy hanganyagot mozgatna. A hivatkozás azon a számítógépen nyílik meg, amely a felvételt őrzi, és a hang soha nem hagyja el.

## Taxonómia és beállítások {#taxonomy-and-settings}

A `/taxonomy` minden bejegyzésének van egy állandó `code` értéke, egy `title` és egy `description` értéke a felület nyelvén, egy `kind` értéke (`category`, `tag` vagy `red_flag`), a figyelmeztető jeleknek pedig `severity` értéke is. **Az illesztést a `code` alapján végezze, soha ne a `title` alapján**: a címek azon a nyelven érkeznek, amelyre a telefon be van állítva. A `retired: true` jelölésű bejegyzés azért marad meg, hogy a régebbi hívások továbbra is feloldhatók legyenek; új hívásokhoz már nem kerül hozzárendelésre. Indításkor egyszer töltse be a taxonómiát, hogy a telefon szavait a saját mezőihez rendelje.

A `/settings` a titkos adatok kivételével visszaadja a konfigurációt: hangeszközök és hangerők, kodekprioritás, megjelenés és nyelv, indulás, gyorsbillentyűk, a diagnosztikai szint és mindkét integráció állapota — hasznos egy olyan támogatási eszköznek, amelynek képernyőmegosztás nélkül kell ellenőriznie egy munkaállomást. Az `api.disabled` a kikapcsolt hozzáférési csoportokat, a `webhooks.silenced` a kikapcsolt eseményeket sorolja fel; az üres lista azt jelenti, hogy minden be van kapcsolva. Soha nem tartalmazza a SIP-jelszót, az API tokenjét vagy a webhook fejlécértékét.

## Hibák {#errors}

Minden hiba JSON egyetlen `error` kulccsal, amely embereknek szól, nem gépi feldolgozásra.

| Állapotkód | Törzs | Jelentés |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Az útvonal nem létezik, vagy a hozzáférési csoportja ki van kapcsolva; szándékosan mindkettő ugyanazt a választ adja. |
| 404 | `{"error":"no contact with that id"}` | Az útvonal helyes, az azonosító nem. |
| 400 | `{"error":"no call with that id"}` | A hívás véget ért, vagy sosem létezett. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` szám nélkül. Semmi sem került tárcsázásra. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` számjegyek nélkül. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` cél nélkül. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | A hívás fiókját a hívás közben eltávolították, így a cél nem egészíthető ki. Semmi sem ment ki az alközpontnak. |

Az elutasított kéréseket az `api_requests_refused_total` számolja, így a csendben hibázó integráció a mérőszámokban is látszik, nem csak a saját naplóiban.

## Mérőszámok {#metrics}

A `GET /metrics` a telefon összes számlálóját visszaadja, mindegyiket egy súgószöveggel. Gyűjtse be Prometheusszal, vagy olvassa el kézzel.

| Számláló | Mit számol |
| --- | --- |
| `calls_incoming_total` | A beérkezett bejövő hívásokat. |
| `calls_outgoing_total` | Az indított kimenő hívásokat. |
| `calls_answered_total` | A fogadott hívásokat. |
| `calls_missed_total` | A nem fogadott bejövő hívásokat. |
| `calls_declined_total` | Az itt vagy a túloldalon elutasított hívásokat. |
| `calls_failed_total` | A fel nem építhető hívásokat. |
| `registrations_succeeded_total` | A sikeres SIP-regisztrációkat. |
| `registrations_failed_total` | Az elutasított vagy időtúllépéssel végződött SIP-regisztrációkat. |
| `webhooks_delivered_total` | A fogadó által elfogadott webhookokat. |
| `webhooks_failed_total` | Az elutasított vagy nem kézbesített webhookokat. |
| `webhooks_dropped_total` | A megtelt várólista miatt eldobott webhookokat. |
| `api_requests_total` | Az API által kezelt kéréseket. |
| `api_requests_refused_total` | Az elutasított kéréseket: hibás token, kikapcsolt csoport vagy ismeretlen útvonal. |

## Régebbi integráció frissítése {#updating-an-older-integration}

A korábbi verziók camelCase neveket és rövid azonosítókat használtak. Az `accountId` helyett most `account_id`, a `startedAt` helyett `callstart_ts`, a `durationSeconds` helyett `duration_s`, az `answeredBy` helyett `answered_by` áll, a webhook `at` mezője pedig `event_ts` lett. A hívásokat és a fiókokat csak UUID azonosítja: a `runtimeId` és az olyan azonosítók, mint a `call-3` vagy az `account-2`, már nem kerülnek visszaadásra, és nem is fogadja el őket a program.

## Ha nem működik {#when-it-does-not-work}

| Tünet | Mit ellenőrizzen |
| --- | --- |
| Elutasított kapcsolat a `127.0.0.1:8377` címen | A helyi vezérlés ki van kapcsolva, a telefon nem fut, vagy a portot módosították. |
| `404 {"error":"no such endpoint"}` egy ezen az oldalon szereplő útvonalra | A hozzáférési csoportja ki van kapcsolva. |
| Az olvasás működik, az írást elutasítja | A tárolt adatokat módosító végpontokhoz token kell az `Authorization` fejlécben. |
| A kategóriák címei nem angolul vannak | A címek a felület nyelvét követik. Az illesztést a `/taxonomy` `code` értéke alapján végezze. |
| Hiányzik az `accountId`, a `startedAt` vagy az `at` | Az integrációt a korábbi nevekre írták; lásd fent. |

Ha magával a regisztrációval vagy egy hívással van probléma, nyissa meg a [Diagnosztikát](/troubleshooting/diagnostics).
