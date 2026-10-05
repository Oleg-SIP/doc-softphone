---
title: Krajevni REST API
sidebar_position: 2
description: Dovolite drugim programom na tem računalniku upravljati telefon — opravljati in upravljati klice, brati stike, zgodovino in račune.
---

AI Softphone ima REST API za integracijo CTI: program na istem računalniku lahko opravlja in upravlja klice, bere stike, zgodovino klicev in račune SIP ter spremlja klice v teku. Brez SDK, brez posrednika v oblaku in brez poslušalca, izpostavljenega omrežju. Zahteve in odgovori so JSON, zato zadošča `curl` ali kateri koli odjemalec HTTP.

API je **po namestitvi izklopljen**; nič ne posluša, dokler ga ne vklopite. Nato posluša le na povratnem vmesniku — *majhnem spletnem vmesniku, ki odgovarja le temu računalniku* — in ni dosegljiv iz pisarniškega omrežja, VPN ali z drugega računalnika.

API uporabite, ko vaš program potrebuje podatke iz telefona ali mora upravljati klic. [Webhooke](/integration/webhooks) uporabite, ko se mora na klice odzivati sproti, brez poizvedovanja. Večina integracij uporablja oboje; neodvisni sta drug od drugega.

## Vklop {#turning-it-on}

Odprite **Nastavitve → Integracija** in pojdite na **Krajevno upravljanje**.

<Shot name="17b_settings_integration_scrolled" alt="Nastavitve → Integracija: krajevno upravljanje" />

1. Vklopite **Dovoli drugim programom na tem računalniku upravljati telefon**. Strežnik se zažene takoj.
2. Obdržite privzeta **Vrata**, `8377`, razen če jih že uporablja drug program.
3. Po želji nastavite **Žeton**. Ko je shranjen, polje pokaže *Shranjeno — pišite, da to zamenjate*.
4. Pod **Dostop** izberite skupine, ki jih želite odpreti: **Stiki**, **Zgodovina klicev**, **Klici in njihovo upravljanje**, **Računi**, **Nastavitve**, **Števci** (meritve). Izklopljena skupina se ne filtrira, temveč se sploh ne streže.
5. Preizkusite: `curl http://127.0.0.1:8377/accounts`. Če je odgovor JSON, API deluje.

Nobena ločena storitev se ne namesti in ponovni zagon ni potreben. Del programa, ki to počne, je mogoče izklopiti v [Modulih](/application/modules) (**Integracija**).

## Lastna stran API-ja {#the-apis-own-page}

**Odpri lastno stran API-ja** odpre `http://127.0.0.1:8377` v brskalniku. Naslov odgovori s seznamom vsega, kar streže, v angleščini; naslovi, ki kaj berejo, so povezave, ki jim lahko sledite.

<Shot name="23_api_page" alt="Lastna stran API-ja, http://127.0.0.1:8377/, odprta v brskalniku" />

## Dostop in žeton {#access-and-the-token}

Kaj program sme, je odvisno od tega, ali spreminja shranjene podatke, ne od tega, ali bere:

- **Brez žetona** lahko kateri koli program na računalniku bere vse v vklopljenih skupinah in upravlja klice: opravi, sprejme, odloži, zadrži, nadaljuje, preusmeri in pošlje DTMF.
- **Z žetonom** v glavi `Authorization` lahko uporablja tudi končne točke, ki spreminjajo, kar je shranjeno. Brez žetona se te končne točke ne strežejo in niso navedene na lastni strani API-ja.

Žeton se hrani v shrambi ključev računalnika, ne v datoteki z nastavitvami, in ga `/settings` nikoli ne vrne.

:::caution
Brez žetona lahko kateri koli program, ki teče na tem računalniku, upravlja telefon, vključno s sprejemanjem klicev. Na osebni delovni postaji je to običajno sprejemljivo. Na skupnem ali upravljanem računalniku nastavite žeton in z njim ravnajte kot s katerim koli drugim geslom.
:::

## Končne točke {#endpoints}

Osnovni naslov je `http://127.0.0.1:8377`. Spodnje končne točke ne potrebujejo žetona.

| Metoda | Pot | Kaj naredi |
| --- | --- | --- |
| GET | `/metrics` | Števci v formatu Prometheus. |
| GET | `/ui` | Seznam posnetkov kot stran HTML. |
| GET | `/ui/recordings/{id}` | Posnetek s prepisom kot stran HTML. |
| GET | `/ui/recordings/{id}/audio` | Zvok za zgornjo stran. |
| GET | `/contacts` | Stiki. |
| GET | `/contacts/{id}` | En stik. |
| GET | `/history` | Dnevnik klicev, od najnovejših. Sprejme `?limit=`, `?missed=true` in `?declined=true`. |
| GET | `/calls` | Klici v teku. |
| POST | `/calls` | Opravi klic: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Sprejme klic. |
| POST | `/calls/{id}/hangup` | Odloži klic. |
| POST | `/calls/{id}/hold` | Zadrži klic. |
| POST | `/calls/{id}/resume` | Ga nadaljuje. |
| POST | `/calls/{id}/dtmf` | Pošlje tone: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Preusmeri klic: `{"target": "..."}`. |
| GET | `/accounts` | Računi SIP in stanje njihove registracije. Nikoli geslo. |
| GET | `/settings` | Celotna konfiguracija, brez skrivnosti. |
| GET | `/taxonomy` | Kategorije, oznake in opozorilni znaki z njihovimi kodami. |

Vsak identifikator je UUID, ki ga dodeli telefon: `id` klica pride iz `/calls` ali iz odgovora na `POST /calls`, `id` računa iz `/accounts`.

Imena polj so v snake_case, končnica pa pove vrsto: `_id` je sklic na UUID, `_ts` je trenutek v milisekundah Unix (UTC), `_s` je trajanje v sekundah. Enako velja za webhooke; le `/settings` ima svoja imena. V REST API-ju so te vrednosti števila JSON, neznan trenutek pa je `null`.

## Primer: opravljanje klica {#example-placing-a-call}

`POST /calls` opravi odhodni klic. Telo je JSON s `number`, ki naj se pokliče, in po želji z `account_id` računa, s katerega naj se kliče:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Odgovor je identifikator novega klica:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` je obvezen. Brez njega je odgovor `400 {"error":"a call needs a number"}` in nič se ne pokliče.
- Številka se na izbranem računu dopolni tako, kot jo dopolni polje za klicanje: `1020` se pošlje kot `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` svoj `target` dopolni enako; cilj, ki že ima shemo ali `@`, se pošlje, kakršen je.
- `account_id` je neobvezen; vzemite ga iz `GET /accounts`. Brez njega gre klic z računa, izbranega v glavnem oknu.
- Uporabite `id` v `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` in `transfer`. [Webhooki](/integration/webhooks#an-outgoing-call-event-by-event) tega klica nosijo isti `id`.

### S spletne strani: klik za klic {#from-a-web-page-click-to-call}

Stran, ki kliče `127.0.0.1`, doseže računalnik, na katerem teče brskalnik — isti, na katerem teče telefon —, zato gumb »klik za klic« v CRM ne potrebuje lastnega strežnika:

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

## Kaj vsebujejo odgovori {#what-the-answers-contain}

### Klici v teku: `GET /calls` {#calls-in-progress-get-calls}

Vsak klic ima svoj `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` in `callstate_ts`.

- `state` je `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (zadržal ta telefon), `onhold` (zadržala druga stran), `conference` ali `ended`. Ko velja več kot eno, ima `conference` prednost pred `hold`, `hold` pa pred `onhold`.
- `muted` pove, ali je mikrofon v klicu utišan; utišanje ne spremeni `state`.
- `seance_id` je pogovor: klici, povezani s preusmeritvijo, posvetom ali konferenco, ga imajo skupnega.
- `event_ts` je trenutek, ko je bil odgovor narejen. Primerjajte ga s `callstate_ts`, da vidite, kako dolgo je klic v svojem stanju, ne da bi se zanašali na svojo uro.

### Računi: `GET /accounts` {#accounts-get-accounts}

Vsak račun ima svoj `id` (povsod drugje `account_id`), svoje nastavitve — `transport` (`udp`, `tcp` ali `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` in druge —, ali je `enabled`, in svoj `state` na centrali: `registered`, dokler je linija aktivna. Gesla niso nikoli vključena.

### Zgodovina klicev: `GET /history` {#call-history-get-history}

Od najnovejših, 100 vnosov, razen če `?limit=` pravi drugače. `?missed=true` vrne le zgrešene klice, `?declined=true` le klice, ki jih je ta telefon zavrnil.

| Polje | Pomen |
| --- | --- |
| `id` | Lastni identifikator vnosa zgodovine. To ni `id` klica iz `/calls` in webhookov; povezuje ju `seance_id`. |
| `outcome` | Glavna razvrstitev: `answered`, `missed`, `declined` ali `failed`. |
| `answered` | `true` ali `false`. |
| `duration_s` | `0` za klic, ki ni bil nikoli vzpostavljen. |
| `number`, `uri` | Druga stran, kot številka in kot naslov SIP. |
| `name` | Iz Stikov, če je številka znana, drugače prazno. Ujemajte po `number`, ne po tem. |
| `dialed` | Poklicane števke, pri odhodnem klicu; pri dohodnem prazno. |
| `account`, `account_id` | Linija, na kateri je bil klic. |
| `reason` | Kako se je končal: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, če ga je sprejel človek; drugače to, kar je sprejelo klic. |

### Stiki: `GET /contacts` {#contacts-get-contacts}

Vsak stik ima svoj `id`, `name`, `number` in linijo, ki ji pripada, `account_id` in `account`; prazen `account` pomeni, da stik ni vezan na linijo.

### Posnetki {#recordings}

Posnetki in prepisi se ne izdajajo kot JSON. API jih streže kot strani HTML, `/ui` in `/ui/recordings/{id}`: iz svojega CRM povezujte na te strani, namesto da premikate zvok. Povezava se odpre na računalniku, ki hrani posnetek, zvok pa ga nikoli ne zapusti.

## Taksonomija in nastavitve {#taxonomy-and-settings}

Vsak vnos `/taxonomy` ima stalno `code`, `title` in `description` v jeziku vmesnika, `kind` (`category`, `tag` ali `red_flag`) in pri opozorilnih znakih `severity`. **Ujemajte po `code`, nikoli po `title`**: naslovi pridejo v jeziku, na katerega je nastavljen telefon. Vnos z `retired: true` se ohrani, da se starejši klici še vedno razrešijo; novim klicem se ne dodeljuje več. Taksonomijo naložite enkrat ob zagonu, da besede telefona preslikate na svoja polja.

`/settings` vrne konfiguracijo razen skrivnosti: zvočne naprave in glasnosti, prednost kodekov, videz in jezik, zagon, bližnjice, raven diagnostike in stanje obeh integracij — uporabno za orodje podpore, ki mora preveriti delovno postajo brez deljenja zaslona. `api.disabled` navaja izklopljene skupine dostopa, `webhooks.silenced` pa izklopljene dogodke; prazni seznami pomenijo, da je vse vklopljeno. Nikoli ne vsebuje gesla SIP, žetona API-ja ali vrednosti glave webhooka.

## Napake {#errors}

Vsaka napaka je JSON z enim samim ključem `error`, namenjena ljudem, ne razčlenjevanju.

| Stanje | Telo | Pomen |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Pot ne obstaja ali je njena skupina dostopa izklopljena; oboje namerno da enak odgovor. |
| 404 | `{"error":"no contact with that id"}` | Pot je pravilna, identifikator ne. |
| 400 | `{"error":"no call with that id"}` | Klic se je končal ali ni nikoli obstajal. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` brez številke. Nič ni bilo poklicano. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` brez števk. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` brez cilja. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Račun klica je bil med klicem odstranjen, zato cilja ni mogoče dopolniti. Centrali ni bilo nič poslano. |

Zavrnjene zahteve se štejejo v `api_requests_refused_total`, zato je integracija, ki tiho odpove, vidna v meritvah, ne le v vaših lastnih dnevnikih.

## Meritve {#metrics}

`GET /metrics` vrne vsak števec telefona, vsakega z besedilom pomoči. Zbirajte jih s Prometheusom ali jih berite ročno.

| Števec | Šteje |
| --- | --- |
| `calls_incoming_total` | Prejete dohodne klice. |
| `calls_outgoing_total` | Opravljene odhodne klice. |
| `calls_answered_total` | Klice, ki so bili sprejeti. |
| `calls_missed_total` | Dohodne klice, ki niso bili sprejeti. |
| `calls_declined_total` | Klice, zavrnjene tukaj ali z druge strani. |
| `calls_failed_total` | Klice, ki jih ni bilo mogoče vzpostaviti. |
| `registrations_succeeded_total` | Uspešne registracije SIP. |
| `registrations_failed_total` | Registracije SIP, zavrnjene ali s potekom časa. |
| `webhooks_delivered_total` | Webhooke, ki jih je prejemnik sprejel. |
| `webhooks_failed_total` | Webhooke, zavrnjene ali nedostavljene. |
| `webhooks_dropped_total` | Webhooke, zavržene, ker je bila vrsta polna. |
| `api_requests_total` | Zahteve, ki jih je obdelal API. |
| `api_requests_refused_total` | Zavrnjene zahteve: napačen žeton, izklopljena skupina ali neznana pot. |

## Posodobitev starejše integracije {#updating-an-older-integration}

Prejšnje različice so uporabljale imena v camelCase in kratke identifikatorje. `accountId` je zdaj `account_id`, `startedAt` je `callstart_ts`, `durationSeconds` je `duration_s`, `answeredBy` je `answered_by`, polje webhooka `at` pa je `event_ts`. Klici in računi se identificirajo samo z UUID: `runtimeId` in identifikatorji, kot sta `call-3` ali `account-2`, se ne vračajo in ne sprejemajo več.

## Ko ne deluje {#when-it-does-not-work}

| Simptom | Kaj preveriti |
| --- | --- |
| Povezava zavrnjena na `127.0.0.1:8377` | Krajevno upravljanje je izklopljeno, telefon ne teče ali so bila vrata spremenjena. |
| `404 {"error":"no such endpoint"}` za pot s te strani | Njena skupina dostopa je izklopljena. |
| Branje deluje, pisanje je zavrnjeno | Končne točke, ki spreminjajo shranjene podatke, potrebujejo žeton v glavi `Authorization`. |
| Naslovi kategorij niso v angleščini | Naslovi sledijo jeziku vmesnika. Ujemajte po `code` iz `/taxonomy`. |
| Manjkajo `accountId`, `startedAt` ali `at` | Integracija je bila napisana za prejšnja imena; glejte zgoraj. |

Pri težavi z registracijo ali samim klicem odprite [Diagnostiko](/troubleshooting/diagnostics).
