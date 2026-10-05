---
title: Webhooky
sidebar_position: 1
description: "\"Nechajte telefón poslať vášmu CRM alebo inému systému požiadavku, keď sa hovor začne, zmení alebo skončí — s presnými požiadavkami prichádzajúceho a odchádzajúceho hovoru.\""
---

Webhook je požiadavka, ktorú telefón pošle na adresu podľa vášho výberu zakaždým, keď sa s hovorom niečo stane. Vďaka nemu môže CRM otvoriť kartu zákazníka pred druhým zazvonením, zapísať hovor, keď sa skončí, alebo rozsvietiť kontrolku na nástennej tabuli. Webhook nepotrebuje pravidlá brány firewall pre prichádzajúcu prevádzku: telefón sa pripája k vám. Keďže sa požiadavky odosielajú z pracovnej stanice, adresa musí byť dosiahnuteľná iba z tohto počítača — interná `http://crm.local/calls` funguje rovnako dobre ako verejná adresa HTTPS.

Po inštalácii sú webhooky **vypnuté**, kým ich nezapnete. Fungujú spolu s [miestnym REST API](/integration/rest-api): udalosť hovorí, že sa niečo zmenilo, API poskytne aktuálne podrobnosti.

## Zapnutie {#turning-them-on}

Otvorte **Nastavenia → Integrácia**. **Webhooky** sú prvá sekcia karty.

<Shot name="24_webhooks" alt="Nastavenia → Integrácia → Webhooky, s adresou https://crm.local/calls" />

1. Zaškrtnite **Oznamovanie inému systému o hovoroch**. *Za každú zaškrtnutú udalosť nižšie sa odošle jedna požiadavka.*
2. Zadajte **Adresa**, ktorá má udalosti prijímať, napríklad `https://crm.local/calls`.
3. Vyberte **Metóda**: **POST** (predvolene) alebo **GET**.
4. V časti **Udalosti** zaškrtnite, čo posielať: **Nový hovor**, **Končiaci sa hovor**, **Hovor meniaci stav**.
5. Voliteľne v časti **Autorizácia** nastavte hlavičku, ktorú môže váš prijímač skontrolovať: **Názov hlavičky** (navrhuje sa `Authorization`) a **Hodnota hlavičky**. Hodnota sa uchováva v kľúčenke počítača, nikdy v súbore nastavení; po uložení pole ukazuje *Uložené — píšte, nech to nahradíte*.
6. Stlačte **Poslať skúšobnú udalosť** a overte, že dorazí. Pošle jednu udalosť pre hovor, ktorý sa nikdy neuskutočnil, s rovnakými hlavičkami ako skutočná. Zaznamenajte si surovú požiadavku a prijímač stavajte podľa toho, čo vaša verzia naozaj posiela.

Časť programu, ktorá odosiela požiadavky, je modul **Integrácia**; dá sa vypnúť v [Moduloch](/application/modules).

## Udalosti {#the-events}

| Zaškrtnuté ako | Udalosť | Odosiela sa, keď |
| --- | --- | --- |
| **Nový hovor** | `call-started` | Prichádzajúci hovor začne zvoniť alebo sa uskutoční odchádzajúci hovor. |
| **Hovor meniaci stav** | `call-state-changed` | Zmení sa `state` hovoru: je prijatý, podržaný alebo obnovený ktoroukoľvek stranou, alebo sa pripojí ku konferencii či ju opustí. Stlmenie ju neodosiela. |
| **Končiaci sa hovor** | `call-ended` | Hovor sa skončil. |

Každú udalosť možno zaškrtnúť samostatne. Vyskakovacia karta zákazníka potrebuje iba prvú, záznam hovorov iba poslednú. `call-started` sa posiela prvá a mala by sa spracovať rýchlo.

## Ako vyzerá požiadavka {#what-the-request-looks-like}

S adresou `https://crm.local/calls` a metódou **POST** telefón pošle toto. Telo je JSON a hlavička je tá, ktorú ste nastavili v časti **Autorizácia**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` nesie verziu programu a spôsob, akým bol nainštalovaný.

## Prichádzajúci hovor, udalosť po udalosti {#an-incoming-call-event-by-event}

Hovor z klapky `1020` na účet `1002` zvoní, je prijatý a osoba, ktorá ho prijala, o štyri sekundy zavesí. So všetkými tromi zaškrtnutými udalosťami dostane prijímač tri požiadavky, jednu po druhej. Všetky nesú rovnaké `id` a `seance_id`.

### 1. Zvoní: `call-started` {#1-it-rings-call-started}

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

Toto je chvíľa, keď treba volajúceho vyhľadať podľa `number` a ukázať kartu zákazníka. `state` je `ringing-in` a `duration_s` je `0`.

### 2. Je prijatý: `call-state-changed` {#2-it-is-answered-call-state-changed}

Asi o tri sekundy neskôr:

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

`state` je teraz `active` a `callstate_ts` sa posunulo na chvíľu zmeny, zatiaľ čo `callstart_ts` zostáva tam, kde bolo.

### 3. Skončí sa: `call-ended` {#3-it-ends-call-ended}

Po štyroch sekundách rozhovoru:

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

`state` je `ended`, `duration_s` je dĺžka rozhovoru a `reason` hovorí, kto ho ukončil: tu `local-hangup`, lebo zavesila osoba pri tomto telefóne.

## Odchádzajúci hovor, udalosť po udalosti {#an-outgoing-call-event-by-event}

Tá istá klapka sa volá z účtu `1002`: osoba vytočí `1020`, telefón zvoní, druhá strana prijme, hovorí sedem sekúnd a zavesí. Prijímač dostane štyri požiadavky, o jednu viac než pri prichádzajúcom hovore, lebo odchádzajúci hovor má vlastný stav, kým zvoní na druhej strane.

### 1. Vytočí sa: `call-started` {#1-it-is-dialled-call-started}

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

`direction` je `out`, `state` je `dialing` a `dialed` obsahuje číslo tak, ako bolo vytočené. Telefón ešte nepozná meno druhej strany, takže `name` je prázdne.

### 2. Zvoní na druhej strane: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

O pol sekundy neskôr:

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

### 3. Druhá strana prijme: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

O štyri sekundy neskôr:

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

`state` je `active`. `name` je teraz vyplnené a `uri` je adresa druhej strany tak, ako ju oznámila odpoveď. `duration_s` je stále `0`: počíta sa od tejto chvíle.

### 4. Skončí sa: `call-ended` {#4-it-ends-call-ended}

O sedem sekúnd neskôr druhá strana zavesí:

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

`duration_s` je `7` a `reason` je `remote-hangup`, lebo hovor ukončila druhá strana. Keď zavesíte vy, je to `local-hangup`, ako pri prichádzajúcom hovore vyššie.

### Stavy vedľa seba {#the-states-side-by-side}

| | Prichádzajúci hovor | Odchádzajúci hovor |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, potom `active` |
| `call-ended` | `ended` | `ended` |

## Polia {#the-fields}

**Každá hodnota je reťazec**, vrátane čísel a časových značiek: `"duration_s": "42"`. Neznámy okamih je prázdny reťazec. Názvy sa riadia jednou konvenciou: `_id` je identifikátor, `_ts` je unixový čas v milisekundách (UTC), `_s` je dĺžka v sekundách — rovnako ako v REST API, kde sú hodnoty čísla JSON.

| Pole | Význam |
| --- | --- |
| `event` | `call-started`, `call-state-changed` alebo `call-ended`. |
| `id` | Hovor: rovnaké UUID ako v `GET /calls` a `/calls/{id}/…`, rovnaké v každej udalosti hovoru. |
| `seance_id` | Rozhovor, ku ktorému hovor patrí; pozrite [nižšie](#one-conversation-across-transfers). |
| `direction` | `in` alebo `out`. |
| `state` | Rovnaké hodnoty ako v `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (podržaný týmto telefónom), `onhold` (podržaný druhou stranou), `conference` alebo `ended`. |
| `number` | Číslo druhej strany. Záznamy v CRM párujte podľa tohto poľa. |
| `name` | Meno druhej strany z Kontaktov; môže byť prázdne a môže sa vyplniť neskôr počas hovoru, ako pri odchádzajúcom hovore vyššie. |
| `uri` | SIP adresa druhej strany. |
| `dialed` | Vytočené číslice, pri odchádzajúcom hovore; pri prichádzajúcom prázdne. |
| `account`, `account_id` | Linka, na ktorej hovor je: `username@server` a identifikátor z `GET /accounts`. |
| `event_ts` | Kedy udalosť nastala. |
| `callstart_ts` | Kedy sa telefón o hovore prvýkrát dozvedel. |
| `callstate_ts` | Kedy hovor vstúpil do aktuálneho `state`. |
| `duration_s` | Čas rozhovoru v sekundách, od prijatia po zavesenie. Nastavuje sa v `call-ended` pre prijatý hovor; inak `0`. |
| `reason` | Ako sa hovor skončil: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; dovtedy `none`. |
| `answered_by` | `no`, ak hovor prijal človek; inak to, čo ho prijalo. |

## Jeden rozhovor naprieč prepojeniami {#one-conversation-across-transfers}

`seance_id` zoskupuje hovory, ktoré tvoria jeden rozhovor. Hovor uskutočnený alebo prijatý od začiatku začína nový. Hovor vytvorený prepojením, hovor, ktorý nahrádza iný, konzultácia k hovoru a každý hovor pripojený ku konferencii si ponechávajú `seance_id` hovoru, z ktorého vznikli.

Medzi telefónmi ho prenáša SIP hlavička `X-Seance-Id`: keď sa hovor prepojí kolegovi, ktorý tiež používa AI Softphone, a ústredňa hlavičku odovzdá ďalej, obe pracovné stanice hlásia rovnaký `seance_id`.

## GET namiesto POST {#get-instead-of-post}

**GET** je pre prijímače, ktoré nevedia prijať telo požiadavky, napríklad starší CRM alebo skriptový most. Tie isté polia sa potom posielajú ako parametre dotazu.

Pri **GET** môže byť adresa šablónou: každé `[pole]` sa nahradí hodnotou tohto poľa, percentuálne zakódovanou. Napríklad:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Zástupné symboly používajú názvy polí uvedené vyššie. Šablóny uložené so staršími názvami (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) naďalej fungujú.

## Ako sa udalosti doručujú {#how-the-events-are-delivered}

| Správanie | Čo to pre vás znamená |
| --- | --- |
| Udalosti idú do frontu, neposielajú sa zo samotného hovoru | Pomalý prijímač nikdy neoneskorí zvonenie, hovory ani prepojenia. |
| Plný front zahadzuje udalosti | Ak váš prijímač prestane odpovedať, udalosti sa stratia, ale telefón funguje ďalej. Sledujte `webhooks_dropped_total`. |
| Odmietnuté a nedoručiteľné doručenia sa počítajú | Rastúce `webhooks_failed_total`, zatiaľ čo `webhooks_delivered_total` stojí, ukazuje na prijímač. |
| Udalosti prichádzajú v poradí | Začiatok hovoru, potom zmeny stavu, potom koniec hovoru. Na zoradenie uložených udalostí použite `callstate_ts`, nie čas ich príchodu. |
| Aspoň raz | Tá istá udalosť môže prísť dvakrát. `id`, `event` a `callstate_ts` spolu identifikujú udalosť: nech váš obslužný program preskočí tú, ktorú už videl. |

## Prijímanie udalostí {#receiving-the-events}

Jediné pravidlo pre prijímač: **odpovedzte `200` hneď a prácu urobte potom.** Pomalý prijímač nespomalí telefón, ale zapĺňa front a plný front zahadzuje udalosti.

Napríklad v Node.js s Express:

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

Ak chcete zaznamenať výsledok hovoru — prijatý, zmeškaný, odmietnutý —, vezmite záznam s rovnakým `seance_id` a `number` z `GET /history?limit=20` v [REST API](/integration/rest-api#call-history-get-history). Keď sa vaša služba po prestávke znova spustí, prečítajte `GET /history?limit=200` a uložte, čo ste zmeškali: webhooky pre reálny čas, história na doplnenie medzier.

Ak chcete vidieť požiadavky skôr, než bude CRM pripravený, nasmerujte **Adresa** na online inšpektor požiadaviek a stlačte **Poslať skúšobnú udalosť**.

## Keď nič neprichádza {#when-nothing-arrives}

| Príznak | Čo skontrolovať |
| --- | --- |
| Žiadne webhooky | Stlačte **Poslať skúšobnú udalosť**. Ak dorazí, potrebné udalosti nie sú zaškrtnuté; ak nie, adresa je nesprávna alebo nedosiahnuteľná z pracovnej stanice. |
| `webhooks_failed_total` stále rastie | Prijímač požiadavky odmieta alebo je nedosiahnuteľný. Skontrolujte jeho záznam a či odpovedá na jednoduchú požiadavku z pracovnej stanice. |
| `webhooks_dropped_total` je väčšie ako nula | Prijímač bol príliš dlho príliš pomalý a front sa zaplnil. Najprv odpovedzte `200`, potom spracúvajte. |
| Tá istá udalosť dvakrát | Očakávané pri doručení aspoň raz. Udalosti s rovnakým `id`, `event` a `callstate_ts` považujte za jednu. |
