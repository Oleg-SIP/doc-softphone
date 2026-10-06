---
title: Miestne REST API
sidebar_position: 2
description: Nechajte iné programy v tomto počítači ovládať telefón — uskutočňovať a ovládať hovory, čítať kontakty, históriu a účty.
---

AI Softphone má REST API na integráciu CTI: program na tom istom počítači môže uskutočňovať a ovládať hovory, čítať kontakty, históriu hovorov a SIP účty a sledovať prebiehajúce hovory. Bez SDK, bez cloudového sprostredkovateľa a bez načúvania vystaveného do siete. Požiadavky a odpovede sú JSON, takže stačí `curl` alebo akýkoľvek HTTP klient.

API je **po inštalácii vypnuté**; nič nenačúva, kým ho nezapnete. Potom načúva iba na rozhraní loopback — *malé webové rozhranie, ktoré odpovedá iba tomuto počítaču* — a nedá sa dosiahnuť z kancelárskej siete, VPN ani z iného počítača.

API použite, keď váš program potrebuje údaje z telefónu alebo musí ovládať hovor. [Webhooky](/integration/webhooks) použite, keď musí reagovať na hovory priebežne, bez dopytovania. Väčšina integrácií používa oboje; sú od seba nezávislé.

## Zapnutie {#turning-it-on}

Otvorte **Nastavenia → Integrácia** a prejdite na **Miestne ovládanie**.

<Shot name="17b_settings_integration_scrolled" alt="Nastavenia → Integrácia: miestne ovládanie" />

1. Zapnite **Nechať iné programy v tomto počítači ovládať telefón**. Server sa spustí okamžite.
2. Ponechajte predvolený **Port**, `8377`, ak ho už nepoužíva iný program.
3. Voliteľne nastavte **Token**. Po uložení pole ukazuje *Uložené — píšte, nech to nahradíte*.
4. V časti **Prístup** vyberte skupiny, ktoré chcete otvoriť: **Kontakty**, **História hovorov**, **Hovory a ich ovládanie**, **Účty**, **Nastavenia**, **Počítadlá** (metriky). Vypnutá skupina sa nefiltruje, ale vôbec sa neobsluhuje.
5. Vyskúšajte to: `curl http://127.0.0.1:8377/accounts`. Ak je odpoveďou JSON, API funguje.

Neinštaluje sa žiadna samostatná služba a nie je potrebný reštart. Časť programu, ktorá to robí, sa dá vypnúť v [Moduloch](/application/modules) (**Integrácia**).

## Vlastná stránka API {#the-apis-own-page}

**Otvoriť vlastnú stránku API** otvorí `http://127.0.0.1:8377` v prehliadači. Adresa odpovie zoznamom všetkého, čo obsluhuje, v angličtine; adresy, ktoré niečo čítajú, sú odkazy, na ktoré sa dá kliknúť.

<Shot name="23_api_page" alt="Vlastná stránka API, http://127.0.0.1:8377/, otvorená v prehliadači" />

## Prístup a token {#access-and-the-token}

Čo program smie robiť, závisí od toho, či mení uložené údaje, nie od toho, či číta:

- **Bez tokenu** môže ktorýkoľvek program v počítači čítať všetko v zapnutých skupinách a ovládať hovory: uskutočniť, prijať, zavesiť, podržať, obnoviť, prepojiť a poslať DTMF.
- **S tokenom** v hlavičke `Authorization` môže používať aj koncové body, ktoré menia to, čo je uložené. Bez tokenu sa tieto koncové body ani neobsluhujú, ani neuvádzajú na vlastnej stránke API.

Token sa uchováva v kľúčenke počítača, nie v súbore nastavení, a `/settings` ho nikdy nevracia.

:::caution
Bez tokenu môže ktorýkoľvek program bežiaci v tomto počítači ovládať telefón, vrátane prijímania hovorov. Na osobnej pracovnej stanici je to zvyčajne prijateľné. Na zdieľanom alebo spravovanom počítači nastavte token a zaobchádzajte s ním ako s akýmkoľvek iným heslom. Token chráni iba požiadavky, ktoré menia uložené údaje, nie hovory: ak chcete ostatné programy k hovorom nepustiť, vypnite **Hovory a ich ovládanie** v časti **Prístup**.
:::

## Koncové body {#endpoints}

Základná adresa je `http://127.0.0.1:8377`. Koncové body nižšie nepotrebujú token.

| Metóda | Cesta | Čo robí |
| --- | --- | --- |
| GET | `/metrics` | Počítadlá vo formáte Prometheus. |
| GET | `/ui` | Zoznam nahrávok ako stránka HTML. |
| GET | `/ui/recordings/{id}` | Nahrávka s prepisom ako stránka HTML. |
| GET | `/ui/recordings/{id}/audio` | Zvuk pre stránku vyššie. |
| GET | `/contacts` | Kontakty. |
| GET | `/contacts/{id}` | Jeden kontakt. |
| GET | `/history` | Záznam hovorov, od najnovších. Prijíma `?limit=`, `?missed=true` a `?declined=true`. |
| GET | `/calls` | Prebiehajúce hovory. |
| POST | `/calls` | Uskutoční hovor: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Prijme hovor. |
| POST | `/calls/{id}/hangup` | Zavesí hovor. |
| POST | `/calls/{id}/hold` | Podrží hovor. |
| POST | `/calls/{id}/resume` | Obnoví ho. |
| POST | `/calls/{id}/dtmf` | Pošle tóny: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Prepojí hovor: `{"target": "..."}`. |
| GET | `/accounts` | SIP účty a stav ich registrácie. Nikdy heslo. |
| GET | `/settings` | Celá konfigurácia, bez tajomstiev. |
| GET | `/taxonomy` | Kategórie, štítky a varovné signály s ich kódmi. |

Každý identifikátor je UUID pridelené telefónom: `id` hovoru pochádza z `/calls` alebo z odpovede na `POST /calls`, `id` účtu z `/accounts`.

Názvy polí sú v snake_case a koncovka hovorí o type: `_id` je odkaz na UUID, `_ts` je okamih v unixových milisekundách (UTC), `_s` je dĺžka v sekundách. To isté platí pre webhooky; iba `/settings` má vlastné názvy. V REST API sú tieto hodnoty čísla JSON a neznámy okamih je `null`.

## Príklad: uskutočnenie hovoru {#example-placing-a-call}

`POST /calls` uskutoční odchádzajúci hovor. Telo je JSON s číslom `number` na vytočenie a voliteľne s `account_id` účtu, z ktorého volať:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Odpoveďou je identifikátor nového hovoru:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` je povinné. Bez neho je odpoveď `400 {"error":"a call needs a number"}` a nič sa nevytočí.
- Číslo sa na vybranom účte doplní tak, ako ho dopĺňa pole na vytáčanie: `1020` sa pošle ako `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` dopĺňa svoj `target` rovnako; cieľ, ktorý už má schému alebo `@`, sa pošle tak, ako je.
- `account_id` je voliteľné; vezmite ho z `GET /accounts`. Bez neho hovor ide z účtu vybraného v hlavnom okne.
- Použite `id` v `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` a `transfer`. [Webhooky](/integration/webhooks#an-outgoing-call-event-by-event) tohto hovoru nesú rovnaké `id`.

### Z webovej stránky: kliknutím zavolať {#from-a-web-page-click-to-call}

Stránka, ktorá volá `127.0.0.1`, sa dostane k počítaču, na ktorom beží prehliadač — tomu istému, na ktorom beží telefón —, takže tlačidlo „kliknutím zavolať“ v CRM nepotrebuje vlastný server:

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

## Čo obsahujú odpovede {#what-the-answers-contain}

### Prebiehajúce hovory: `GET /calls` {#calls-in-progress-get-calls}

Každý hovor má svoje `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` a `callstate_ts`.

- `state` je `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (podržaný týmto telefónom), `onhold` (podržaný druhou stranou), `conference` alebo `ended`. Keď platí viac ako jeden, `conference` má prednosť pred `hold` a `hold` pred `onhold`.
- `muted` hovorí, či je mikrofón v hovore stlmený; stlmenie nemení `state`.
- `seance_id` je rozhovor: hovory prepojené prepojením, konzultáciou alebo konferenciou ho majú spoločný.
- `event_ts` je chvíľa, keď bola odpoveď vytvorená. Porovnajte ho s `callstate_ts`, aby ste videli, ako dlho je hovor vo svojom stave, bez spoliehania sa na vlastné hodiny.

### Účty: `GET /accounts` {#accounts-get-accounts}

Každý účet má svoje `id` (všade inde `account_id`), svoje nastavenia — `transport` (`udp`, `tcp` alebo `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` a ďalšie —, či je `enabled`, a svoj `state` na ústredni: `registered`, kým je linka aktívna. Heslá sa nikdy neuvádzajú.

### História hovorov: `GET /history` {#call-history-get-history}

Od najnovších, 100 záznamov, ak `?limit=` neurčuje inak. `?missed=true` vráti iba zmeškané hovory, `?declined=true` iba hovory, ktoré tento telefón odmietol.

| Pole | Význam |
| --- | --- |
| `id` | Vlastný identifikátor záznamu histórie. Nie je to `id` hovoru z `/calls` a webhookov; prepája ich `seance_id`. |
| `outcome` | Hlavná klasifikácia: `answered`, `missed`, `declined` alebo `failed`. |
| `answered` | `true` alebo `false`. |
| `duration_s` | `0` pre hovor, ktorý sa nikdy nespojil. |
| `number`, `uri` | Druhá strana, ako číslo a ako SIP adresa. |
| `name` | Z Kontaktov, ak je číslo známe, inak prázdne. Párujte podľa `number`, nie podľa tohto. |
| `dialed` | Vytočené číslice, pri odchádzajúcom hovore; pri prichádzajúcom prázdne. |
| `account`, `account_id` | Linka, na ktorej hovor bol. |
| `reason` | Ako sa skončil: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, ak ho prijal človek; inak to, čo hovor prijalo. |

### Kontakty: `GET /contacts` {#contacts-get-contacts}

Každý kontakt má svoje `id`, `name`, `number` a linku, ku ktorej patrí, `account_id` a `account`; prázdne `account` znamená, že kontakt nie je viazaný na linku.

### Nahrávky {#recordings}

Nahrávky a prepisy sa nevydávajú ako JSON. API ich obsluhuje ako stránky HTML, `/ui` a `/ui/recordings/{id}`: odkazujte na tieto stránky zo svojho CRM namiesto presúvania zvuku. Odkaz sa otvorí na počítači, ktorý nahrávku uchováva, a zvuk ho nikdy neopustí.

## Taxonómia a nastavenia {#taxonomy-and-settings}

Každá položka `/taxonomy` má stály `code`, `title` a `description` v jazyku rozhrania, `kind` (`category`, `tag` alebo `red_flag`) a pri varovných signáloch `severity`. **Párujte podľa `code`, nikdy podľa `title`**: názvy prichádzajú v jazyku, na ktorý je telefón nastavený. Položka s `retired: true` sa uchováva, aby sa staršie hovory stále dali vyhodnotiť; novým hovorom sa už nepriraďuje. Taxonómiu načítajte raz pri spustení, aby ste slová telefónu namapovali na vlastné polia.

`/settings` vracia konfiguráciu okrem tajomstiev: zvukové zariadenia a hlasitosti, prioritu kodekov, vzhľad a jazyk, spúšťanie, klávesové skratky, úroveň diagnostiky a stav oboch integrácií — užitočné pre nástroj podpory, ktorý musí skontrolovať pracovnú stanicu bez zdieľania obrazovky. `api.disabled` uvádza vypnuté skupiny prístupu a `webhooks.silenced` vypnuté udalosti; prázdne zoznamy znamenajú, že je všetko zapnuté. Nikdy neobsahuje heslo SIP, token API ani hodnotu hlavičky webhooku.

## Chyby {#errors}

Každá chyba je JSON s jediným kľúčom `error`, určeným pre ľudí, nie na parsovanie.

| Stav | Telo | Význam |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Cesta neexistuje alebo je jej skupina prístupu vypnutá; obe situácie dávajú zámerne rovnakú odpoveď. |
| 404 | `{"error":"no contact with that id"}` | Cesta je správna, identifikátor nie. |
| 400 | `{"error":"no call with that id"}` | Hovor sa skončil alebo nikdy neexistoval. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` bez čísla. Nič sa nevytočilo. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` bez číslic. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` bez cieľa. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Účet hovoru bol počas hovoru odstránený, takže cieľ sa nedá doplniť. Ústredni sa nič neposlalo. |

Odmietnuté požiadavky sa počítajú v `api_requests_refused_total`, takže integrácia, ktorá potichu zlyháva, je viditeľná v metrikách, nielen vo vašich vlastných záznamoch.

## Metriky {#metrics}

`GET /metrics` vracia každé počítadlo telefónu, každé s textom pomocníka. Zbierajte ich Prometheusom alebo ich čítajte ručne.

| Počítadlo | Počíta |
| --- | --- |
| `calls_incoming_total` | Prijaté prichádzajúce hovory. |
| `calls_outgoing_total` | Uskutočnené odchádzajúce hovory. |
| `calls_answered_total` | Hovory, ktoré boli prijaté. |
| `calls_missed_total` | Prichádzajúce hovory, ktoré neboli prijaté. |
| `calls_declined_total` | Hovory odmietnuté tu alebo druhou stranou. |
| `calls_failed_total` | Hovory, ktoré sa nepodarilo zostaviť. |
| `registrations_succeeded_total` | Úspešné SIP registrácie. |
| `registrations_failed_total` | SIP registrácie odmietnuté alebo s vypršaným časom. |
| `webhooks_delivered_total` | Webhooky, ktoré prijímač prijal. |
| `webhooks_failed_total` | Webhooky odmietnuté alebo nedoručené. |
| `webhooks_dropped_total` | Webhooky zahodené, lebo front bol plný. |
| `api_requests_total` | Požiadavky spracované API. |
| `api_requests_refused_total` | Odmietnuté požiadavky: nesprávny token, vypnutá skupina alebo neznáma cesta. |

## Aktualizácia staršej integrácie {#updating-an-older-integration}

Staršie verzie používali názvy v camelCase a krátke identifikátory. `accountId` je teraz `account_id`, `startedAt` je `callstart_ts`, `durationSeconds` je `duration_s`, `answeredBy` je `answered_by` a pole webhooku `at` je `event_ts`. Hovory a účty sa identifikujú iba podľa UUID: `runtimeId` a identifikátory ako `call-3` či `account-2` sa už nevracajú ani neprijímajú.

## Keď to nefunguje {#when-it-does-not-work}

| Príznak | Čo skontrolovať |
| --- | --- |
| Odmietnuté spojenie na `127.0.0.1:8377` | Miestne ovládanie je vypnuté, telefón nebeží alebo sa zmenil port. |
| `404 {"error":"no such endpoint"}` pre cestu z tejto stránky | Jej skupina prístupu je vypnutá. |
| Čítanie funguje, zápis je odmietnutý | Koncové body, ktoré menia uložené údaje, potrebujú token v hlavičke `Authorization`. |
| Názvy kategórií nie sú po anglicky | Názvy sa riadia jazykom rozhrania. Párujte podľa `code` z `/taxonomy`. |
| Chýbajú `accountId`, `startedAt` alebo `at` | Integrácia bola napísaná pre staršie názvy; pozrite vyššie. |

Pri probléme s registráciou alebo so samotným hovorom otvorte [Diagnostiku](/troubleshooting/diagnostics).
