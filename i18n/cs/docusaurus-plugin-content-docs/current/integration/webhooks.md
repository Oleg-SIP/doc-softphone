---
title: Webhooky
sidebar_position: 1
description: "Nechte telefon poslat vašemu CRM nebo jinému systému požadavek, když hovor začne, změní se nebo skončí — s přesnými požadavky příchozího a odchozího hovoru."
---

Webhook je požadavek, který telefon pošle na zvolenou adresu pokaždé, když se s hovorem něco stane. Díky němu může CRM otevřít kartu zákazníka ještě před druhým zazvoněním, zaznamenat hovor po jeho skončení nebo rozsvítit kontrolku na nástěnné obrazovce. Webhook nepotřebuje žádná pravidla firewallu pro příchozí spojení: telefon volá ven k vám. Protože požadavky odcházejí z pracovní stanice, adresa musí být dostupná jen z tohoto počítače — interní `http://crm.local/calls` funguje stejně dobře jako veřejná adresa HTTPS.

Webhooky jsou po instalaci **vypnuté**, dokud je nezapnete. Fungují vedle [místního REST API](/integration/rest-api): událost říká, že se něco změnilo, API dává aktuální podrobnosti.

## Zapnutí {#turning-them-on}

Otevřete **Nastavení → Integrace**. **Webhooky** jsou první částí karty.

<Shot name="24_webhooks" alt="Nastavení → Integrace → Webhooky s adresou https://crm.local/calls" />

1. Zaškrtněte **Sdělovat jinému systému o hovorech**. *Za každou zaškrtnutou událost níže se odešle jeden požadavek.*
2. Zadejte **Adresu**, která má události přijímat, například `https://crm.local/calls`.
3. Vyberte **Metodu**: **POST** (výchozí) nebo **GET**.
4. V části **Události** zaškrtněte, co posílat: **Nový hovor**, **Končící hovor**, **Hovor měnící stav**.
5. Volitelně v části **Autorizace** nastavte hlavičku, kterou si váš příjemce může ověřit: **Název hlavičky** (navrhuje se `Authorization`) a **Hodnotu hlavičky**. Hodnota se ukládá do klíčenky počítače, nikdy do souboru s nastavením; po uložení pole ukazuje *Uloženo — pište, ať to nahradíte*.
6. Stiskem **Poslat zkušební událost** ověřte, že dorazí. Odešle jednu událost pro hovor, který se nikdy nekonal, se stejnými hlavičkami jako skutečná. Zaznamenejte si surový požadavek a příjemce stavějte podle toho, co vaše verze skutečně posílá.

Část programu, která požadavky odesílá, je modul **Integrace**; lze ho vypnout v [Modulech](/application/modules).

## Události {#the-events}

| Zaškrtnuto jako | Událost | Odesílá se, když |
| --- | --- | --- |
| **Nový hovor** | `call-started` | Příchozí hovor začne zvonit nebo se uskuteční odchozí hovor. |
| **Hovor měnící stav** | `call-state-changed` | Změní se `state` hovoru: je přijat, kteroukoli stranou přidržen nebo obnoven, nebo vstoupí do konference či z ní odejde. Ztlumení ji neposílá. |
| **Končící hovor** | `call-ended` | Hovor skončil. |

Každou událost lze zaškrtnout samostatně. Vyskakovací karta potřebuje jen první; záznam hovorů jen poslední. `call-started` se posílá první a měla by se vyřídit rychle.

## Jak požadavek vypadá {#what-the-request-looks-like}

S adresou `https://crm.local/calls` a metodou **POST** telefon pošle tohle. Tělo je JSON a hlavička je ta, kterou jste nastavili v **Autorizaci**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` nese verzi programu a způsob, jakým byl nainstalován.

## Příchozí hovor, událost po události {#an-incoming-call-event-by-event}

Hovor z linky `1020` na účet `1002` zazvoní, je přijat a po čtyřech sekundách ho zavěsí ten, kdo ho přijal. Se všemi třemi zaškrtnutými událostmi dostane příjemce tři požadavky jeden po druhém. Všechny nesou stejné `id` a `seance_id`.

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
  "name": "Jan Novák",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

To je chvíle, kdy volajícího najít podle `number` a ukázat kartu zákazníka. `state` je `ringing-in` a `duration_s` je `0`.

### 2. Je přijat: `call-state-changed` {#2-it-is-answered-call-state-changed}

Asi o tři sekundy později:

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
  "name": "Jan Novák",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` je teď `active` a `callstate_ts` se posunulo na okamžik změny, zatímco `callstart_ts` zůstává, kde bylo.

### 3. Končí: `call-ended` {#3-it-ends-call-ended}

Po čtyřech sekundách rozhovoru:

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
  "name": "Jan Novák",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` je `ended`, `duration_s` je délka rozhovoru a `reason` říká, kdo ho ukončil: tady `local-hangup`, protože zavěsil člověk u tohoto telefonu.

## Odchozí hovor, událost po události {#an-outgoing-call-event-by-event}

Stejná linka se volá z účtu `1002`: uživatel vytočí `1020`, telefon zvoní, druhá strana přijme, mluví sedm sekund a zavěsí. Příjemce dostane čtyři požadavky, o jeden víc než u příchozího hovoru, protože odchozí hovor má vlastní stav, zatímco zvoní na druhém konci.

### 1. Vytáčí se: `call-started` {#1-it-is-dialled-call-started}

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

`direction` je `out`, `state` je `dialing` a `dialed` obsahuje číslo tak, jak bylo vytočeno. Telefon zatím nezná jméno druhé strany, takže `name` je prázdné.

### 2. Zvoní na druhém konci: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

O půl sekundy později:

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

### 3. Druhá strana přijme: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

O čtyři sekundy později:

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
  "name": "Jan Novák",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` je `active`. `name` je teď vyplněné a `uri` je adresa strany tak, jak ji ohlásila odpověď. `duration_s` je stále `0`: počítá se od této chvíle.

### 4. Končí: `call-ended` {#4-it-ends-call-ended}

O sedm sekund později druhá strana zavěsí:

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
  "name": "Jan Novák",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`duration_s` je `7` a `reason` je `remote-hangup`, protože hovor ukončila druhá strana. Když zavěsíte vy, je to `local-hangup`, jako u příchozího hovoru výše.

### Stavy vedle sebe {#the-states-side-by-side}

| | Příchozí hovor | Odchozí hovor |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, pak `active` |
| `call-ended` | `ended` | `ended` |

## Pole {#the-fields}

**Každá hodnota je řetězec**, včetně čísel a časových značek: `"duration_s": "42"`. Okamžik, který není znám, je prázdný řetězec. Názvy se řídí jednou konvencí: `_id` je identifikátor, `_ts` je unixový čas v milisekundách (UTC), `_s` je délka v sekundách — stejně jako v REST API, kde jsou hodnoty čísla JSON.

| Pole | Význam |
| --- | --- |
| `event` | `call-started`, `call-state-changed` nebo `call-ended`. |
| `id` | Hovor: stejné UUID jako v `GET /calls` a `/calls/{id}/…`, stejné v každé události hovoru. |
| `seance_id` | Rozhovor, ke kterému hovor patří; viz [níže](#one-conversation-across-transfers). |
| `direction` | `in` nebo `out`. |
| `state` | Stejné hodnoty jako v `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (přidržel tento telefon), `onhold` (přidržela druhá strana), `conference` nebo `ended`. |
| `number` | Číslo druhé strany. Podle tohoto pole párujte záznamy v CRM. |
| `name` | Jméno druhé strany z Kontaktů; může být prázdné a doplnit se později v hovoru, jako u odchozího hovoru výše. |
| `uri` | SIP adresa druhé strany. |
| `dialed` | Vytočené číslice u odchozího hovoru; u příchozího prázdné. |
| `account`, `account_id` | Linka, na které hovor je: `uživatel@server` a identifikátor z `GET /accounts`. |
| `event_ts` | Kdy se událost stala. |
| `callstart_ts` | Kdy se telefon o hovoru poprvé dozvěděl. |
| `callstate_ts` | Kdy hovor vstoupil do aktuálního `state`. |
| `duration_s` | Doba rozhovoru v sekundách, od přijetí po zavěšení. Nastavuje se u `call-ended` pro přijatý hovor; jinak `0`. |
| `reason` | Jak hovor skončil: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; do té doby `none`. |
| `answered_by` | `no`, pokud hovor přijal člověk; jinak to, co ho přijalo. |

## Jeden rozhovor napříč přepojeními {#one-conversation-across-transfers}

`seance_id` seskupuje hovory, které tvoří jeden rozhovor. Hovor uskutečněný nebo přijatý od začátku zahajuje nový. Hovor vzniklý přepojením, hovor, který jiný nahrazuje, konzultace k hovoru a každý hovor připojený do konference si ponechávají `seance_id` hovoru, ze kterého vzešly.

Mezi telefony putuje v SIP hlavičce `X-Seance-Id`: když se hovor přepojí kolegovi, který také používá AI Softphone, a ústředna hlavičku předá, obě pracovní stanice hlásí stejné `seance_id`.

## GET místo POST {#get-instead-of-post}

**GET** je pro příjemce, kteří neumějí přijmout tělo požadavku, například starší CRM nebo skriptový můstek. Stejná pole se pak posílají jako parametry dotazu.

S **GET** může být adresa šablonou: každé `[pole]` se nahradí hodnotou toho pole, procentně zakódovanou. Například:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Zástupné symboly používají názvy polí výše. Šablony uložené se staršími názvy (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) fungují dál.

## Jak se události doručují {#how-the-events-are-delivered}

| Chování | Co to pro vás znamená |
| --- | --- |
| Události se řadí do fronty, neposílají se ze samotného hovoru | Pomalý příjemce nikdy nezdrží zvonění, hovory ani přepojení. |
| Plná fronta události zahazuje | Pokud váš příjemce přestane odpovídat, události se ztratí, ale telefon funguje dál. Sledujte `webhooks_dropped_total`. |
| Odmítnutá a nedoručitelná doručení se počítají | Rostoucí `webhooks_failed_total`, zatímco `webhooks_delivered_total` stojí, ukazuje na příjemce. |
| Události přicházejí v pořadí | Hovor začal, pak změny stavu, pak hovor skončil. K řazení uložených událostí použijte `callstate_ts`, ne čas, kdy přišly. |
| Alespoň jednou | Stejná událost může přijít dvakrát. `id`, `event` a `callstate_ts` dohromady událost identifikují: ať ji váš obslužný kód přeskočí, pokud ji už viděl. |

## Příjem událostí {#receiving-the-events}

Jediné pravidlo pro příjemce: **odpovězte `200` hned a práci udělejte až potom.** Pomalý příjemce telefon nezpomalí, ale plní frontu a plná fronta události zahazuje.

Například v Node.js s Express:

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // hodnota hlavičky z Nastavení

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST posílá tělo JSON, GET parametry dotazu
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // nejdřív odpovědět

  setImmediate(() => {                          // pak udělat práci
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // váš kód
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // váš kód
    }
  });
});

app.listen(8080);
```

Chcete-li zaznamenat výsledek hovoru — přijat, zmeškán, odmítnut — vezměte položku se stejným `seance_id` a `number` z `GET /history?limit=20` v [REST API](/integration/rest-api#call-history-get-history). Když se vaše služba po přestávce znovu spustí, přečtěte `GET /history?limit=200` a uložte, co jste zmeškali: webhooky pro reálný čas, historie k doplnění mezer.

Chcete-li požadavky vidět dřív, než je CRM připravené, nasměrujte **Adresu** na online inspektor požadavků a stiskněte **Poslat zkušební událost**.

## Když nic nepřichází {#when-nothing-arrives}

| Příznak | Co zkontrolovat |
| --- | --- |
| Nepřicházejí vůbec žádné webhooky | Stiskněte **Poslat zkušební událost**. Pokud dorazí, nejsou zaškrtnuté události, které potřebujete; pokud ne, adresa je špatně nebo není z pracovní stanice dostupná. |
| `webhooks_failed_total` stále roste | Příjemce požadavky odmítá nebo není dostupný. Zkontrolujte jeho protokol a zda odpoví na jednoduchý požadavek z pracovní stanice. |
| `webhooks_dropped_total` je větší než nula | Příjemce byl příliš dlouho příliš pomalý a fronta se zaplnila. Nejdřív odpovězte `200`, pak zpracujte. |
| Stejná událost dvakrát | Očekávané u doručení alespoň jednou. Události se stejným `id`, `event` a `callstate_ts` berte jako jednu. |
