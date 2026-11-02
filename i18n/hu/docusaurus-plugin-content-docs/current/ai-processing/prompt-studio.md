---
title: Personal Prompt Studio
sidebar_position: 3
description: A beszélgetéseit feldolgozó utasítások, az őket futtató szabályok, és hogyan szabhatja őket a saját igényeire.
---

A **Personal Prompt Studio** az AI Softphone azon része, amely az Ön elképzelése szerint dolgozza fel a beszélgetéseit. A feldolgozást utasítások végzik: a program tizeneggyel érkezik, amelyek azonnal használhatók, amint a leiratozás és egy nyelvi modell csatlakoztatva van, Ön pedig hétköznapi nyelven módosíthatja, lemásolhatja őket, és sajátokat is hozzáadhat. Az utasítások a [Beállítások → Feldolgozás](processing.md#prompts) lap **Utasítások** része alatt találhatók.

Az Ön LLM-je, az Ön kulcsa, az Ön irányítása: csatlakoztassa a kedvelt modelljét a saját kulcsával, egy támogatott szolgáltatáson vagy egy kompatibilis API-n keresztül — vagy egy, a szervezetén belül telepített modellt. Ha a [leiratozás](transcription.md#your-own-models) is a saját hardverén fut, a hang és a leiratok egyaránt az Ön környezetén belül maradnak.

<Shot name="12b_settings_processing_prompts" alt="Az utasítások listája a Beállítások → Feldolgozás lapon" />

## A programmal érkező utasítások {#the-prompts-that-come-with-the-program}

Az AI Softphone 1.1.11 tizenegy promptot tartalmaz lezárt beszélgetésekhez és négy élő asszisztenst. Az alábbiak e nyelv beépített szövegei; a nyelvi változatok eltérhetnek.

| Utasítás | `code` | Forma | Mit ír |
| --- | --- | --- | --- |
| **Összefoglaló** | `summary` | Próza | A fő pontokat, döntéseket és következő lépéseket egy rövid bekezdésben. |
| **Egysoros összefoglaló** | `super-summary` | Próza | Egy rövid címet, amelyről a beszélgetés felismerhető egy listában. |
| **Teendők** | `action-items` | Tételek | Ki mit vállalt és mikorra, az általuk mondott szavakkal. |
| **Témák** | `topics` | Tételek | A szóba került témákat néhány szóban. |
| **Nevek és számok** | `entities` | JSON | Személyeket, cégeket, dátumokat, összegeket és hivatkozásokat. |
| **Kategória** | `categorise` | Címkék | Besorolja a beszélgetést valamelyik [kategóriájába](dictionaries.md). |
| **Címkék** | `tags` | Címkék | Ráteszi a [címkéit](dictionaries.md), hogy később megtalálható legyen. |
| **Figyelmeztető jelek** | `red-flags` | Jelzések | A problémákat, a bizonyítékkal és a beszélgetésbeli időponttal. |
| **Kérdés erről a hívásról** | `qa` | Válasz | Megválaszol egy kérdést, amelyet egy beszélgetésről tesz fel, a leirata alapján. |
| **Értékesítés minősége** | `sales-quality` | Szempontok | Értékeli a beszélgetést szerkeszthető értékesítési szempontok szerint. |
| **Támogatás minősége** | `support-quality` | Szempontok | Megítéli, mennyire jól értették meg és kezelték a problémát. |

A formák a válasz rögzített alakjai, és ez teszi lehetővé, hogy a program megőrizze és később kereshesse őket: a **Címkék** az egyik listájából származó kódok, a **Jelzések** súlyossággal ellátott kódok, a **Szempontok** egy pontszám indoklással és szempontonkénti pontszámmal, a **Válasz** pedig egy felelet azokkal a szavakkal, amelyeken alapul. Az utasítások, amelyek közlik a modellel az alakot, a [Szótárak](dictionaries.md#instructions) között vannak.

A [súgó](../interface/prompter.md) segítői is utasítások, amelyek hívás közben minden megszólalásra lefutnak, nem egy befejezett beszélgetésre. Saját listában vannak, a **Beállítások → Súgó** [Segítők](prompter.md#assistants) részében.

Az AI Softphone-ban lebonyolított hívások, a számítógépről [rögzített](/capture/) megbeszélések és az importált felvételek mind ugyanazokon az utasításokon mennek át, amint van leiratuk.

A teendők azt rögzítik, amiben megállapodtak — nem küldenek üzeneteket, nem foglalnak időpontot és nem nyitnak jegyeket Ön helyett.

## A saját igényeire szabva {#making-it-yours}

- Hétköznapi nyelven módosítsa, mit kér egy utasítás: mit keressen, milyen formában válaszoljon, és milyen nyelven.
- Másoljon le egy utasítást, hogy kipróbáljon egy változatot.
- Válassza ki az egyes utasítások modelljét — a saját gépén vagy a felhőben.
- Állítsa be, milyen sorrendben fussanak az utasítások, kapcsolja be és ki őket, és tegye őket feltételhez kötötté — ez a [szabályokkal](processing.md#rules) történik: például az értékesítési értékelés csak az **Értékesítés** kategóriába sorolt hívásokon fut le.
- Tartsa saját kategóriáit, címkéit és figyelmeztető jeleit a [Szótárak](dictionaries.md) között.
- Korlátozza a költséget a [havi korlátokkal](processing.md#spending).

Az eredeti utasítások és szabályok az **Alapértékek visszaállítása** gombbal állíthatók vissza, a [Beállítások → Feldolgozás](processing.md#defaults) lap **Alapértékek** része alatt.

## A modell szerepe {#role-and-task}

A `system` a modell viselkedését határozza meg, a `body` a feladatot írja le. A válasz formáját és nyelvét külön szótári utasítások adják meg.

Az üres feladat- vagy figyelmeztetési lista helyes eredmény is lehet. Hiányzó felelősöket és határidőket nem szabad kitalálni. A kérdésekre adott válaszok csak az átiraton alapulhatnak.

[Válaszformátumok](dictionaries.md#response-formats)

## Helyőrzők {#placeholders}

A prompt olyan eleme, amelyet a beszélgetés adatai helyettesítenek.

| Helyőrző | Jelentés |
| --- | --- |
| `{{transcript}}` | Átirat, soronként egy megszólalás, időpontok ezredmásodpercben |
| `{{duration}}` | A beszélgetés időtartama |
| `{{direction}}` | Bejövő vagy kimenő hívás |
| `{{party}}` | A partner neve vagy száma |
| `{{language}}` | A válasz nyelve |
| `{{question}}` | A felhasználó kérdése |
| `{{categories}}` | Kategórialista |
| `{{tags}}` | Címkelista |
| `{{red_flags}}` | Figyelmeztető jelzések listája |
| `{{artifact:summary}}` | Korábban elkészült összefoglaló |
| `{{conversation}}` | Az élő súgó által összegyűjtött beszélgetési kontextus |
| `{{reply}}` | A másik fél legutóbbi megszólalása; csak az élő súgóhoz |

A `summary` fusson a `super-summary` előtt, amely a `{{artifact:summary}}` eredményét használja. A `categorise` előzze meg a minőségértékelést: a `sales-quality` feltétele `sales`, a `support-quality` feltétele `support`.

[Beépített asszisztensek](prompter.md#assistant-templates)

## Alapértelmezett promptszövegek {#standard-templates}

Az AI Softphone 1.1.11 tizenegy promptot tartalmaz lezárt beszélgetésekhez és négy élő asszisztenst. Az alábbiak e nyelv beépített szövegei; a nyelvi változatok eltérhetnek.

### Összefoglaló (`summary`) {#summary}

**A válasz formája:** `plain`.

**Szerep (`system`)**

```text
Telefonbeszélgetések leiratait olvasod, és rövid, tényszerű összefoglalót írsz róluk. Sosem találgatsz olyat, ami nem hangzott el, és sosem adsz tanácsot.
```

**Feladat (`body`)**

```text
Foglald össze ezt a telefonbeszélgetést egy rövid bekezdésben: miről szólt, mi dőlt el, és mi következik. {{duration}} hosszú volt, {{direction}}, a másik fél {{party}}.

{{transcript}}
```

### Egysoros összefoglaló (`super-summary`) {#super-summary}

**A válasz formája:** `plain`.

**Szerep (`system`)**

```text
Telefonbeszélgetések leiratait olvasod, és mindegyiket egyetlen fordulatra szűköd. Sosem találgatsz, és sosem adsz tanácsot.
```

**Feladat (`body`)**

```text
Szűkítsd ezt a telefonbeszélgetést egyetlen, legfeljebb tizenkét szavas fordulatra — olyanra, ami egy táblázatban állna a hívó neve mellett. Pont nélkül, idézőjel nélkül.

{{artifact:summary}}

{{transcript}}
```

### Teendők (`action-items`) {#action-items}

**A válasz formája:** `list`.

**Szerep (`system`)**

```text
Telefonbeszélgetések leiratait olvasod, és felsorolod, mire vállalkozott valaki. Csak azt sorolod fel, ami tényleg elhangzott; sosem találsz ki feladatot, felelőst vagy határidőt.
```

**Feladat (`body`)**

```text
Sorold fel, mire vállalkozott bárki ebben a hívásban. Nevezd meg, kinek kell elvégeznie, ahol ez elhangzott, és mikorra, ahol ez elhangzott. Ha senki nem vállalt semmit, válaszolj üres listával.

{{transcript}}
```

### Témák (`topics`) {#topics}

**A válasz formája:** `list`.

**Szerep (`system`)**

```text
Telefonbeszélgetések leiratait olvasod, és megnevezed, miről szóltak.
```

**Feladat (`body`)**

```text
Sorold fel, milyen tárgyakat érintett valóban ez a hívás, legfeljebb hatot, mindegyiket néhány szóban. A felelőst és a határidőt hagyd üresen — itt semmit nem jelentenek.

{{transcript}}
```

### Nevek és számok (`entities`) {#entities}

**A válasz formája:** `json`.

**Szerep (`system`)**

```text
Telefonbeszélgetések leiratait olvasod, és kiszeded belőlük, mit neveztek meg bennük. Sosem találgatod a helyesírást, és sosem teszel hozzá olyat, ami nem hangzott el.
```

**Feladat (`body`)**

```text
Szedd ki, mit neveztek meg ebben a hívásban, pontosan ilyen alakú JSON-ként:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Mindegyik szövegek listája, úgy leírva, ahogy elhangzottak. Inkább hagyj egy listát üresen, mint hogy találgass.

{{transcript}}
```

### Kategória (`categorise`) {#categorise}

**A válasz formája:** `labels`.

**Szerep (`system`)**

```text
Telefonhívásokat sorolsz be a kapott kategóriák egyikébe. A listáról választasz, és semmi másból.
```

**Feladat (`body`)**

```text
Sorold be ezt a hívást pontosan az egyik kategóriába. A kódjával válaszolj.

{{categories}}
{{transcript}}
```

### Címkék (`tags`) {#tags}

**A válasz formája:** `labels`.

**Szerep (`system`)**

```text
Telefonhívásokat címkézel a kapott címkékkel. A listáról választasz, és semmi másból, és inkább elhagysz egy címkét, mint hogy ráhúzd.
```

**Feladat (`body`)**

```text
Melyik igaz ezek közül erre a hívásra? A kódjaikkal válaszolj, vagy üres listával, ha egyik sem.

{{tags}}
{{transcript}}
```

### Figyelmeztető jelek (`red-flags`) {#red-flags}

**A válasz formája:** `flags`.

**Szerep (`system`)**

```text
Telefonbeszélgetések leiratait olvasod, és csak azt emeled ki, amit keresni kaptál. Idézed a szavakat, amikre mindegyiket alapoztad, és semmit nem emelsz ki, amit nem tudsz idézni.
```

**Feladat (`body`)**

```text
Emeld ki ezek közül azokat, amiket ez a hívás mutat. Mindegyiknél idézd a szavakat, amikre épül, és add meg a pillanatot ezredmásodpercben, amikor elhangzottak. Inkább ne emelj ki semmit, mint hogy egy meghatározást ráhúzz.

{{red_flags}}
{{transcript}}
```

### Kérdés erről a hívásról (`qa`) {#qa}

**A válasz formája:** `qa`.

**Szerep (`system`)**

```text
Egyetlen telefonhívásról válaszolsz kérdésekre, a leiratából és semmi másból. Ahol a beszélgetés nem mondja meg, ezt nyíltan kimondod, ahelyett hogy találgatnál.
```

**Feladat (`body`)**

```text
{{question}}

{{transcript}}
```

### Értékesítés minősége (`sales-quality`) {#sales-quality}

**A válasz formája:** `rubric`.

**Szerep (`system`)**

```text
Azt ítéled meg, hogyan kezelt egy értékesítő egy telefonhívást. Csak azt ítéled meg, amit a leirat mutat, sosem feltételezed, mi történt előtte vagy utána, és ugyanolyan szigorú vagy a jól sikerült hívással, mint a rosszul sikerülttel.
```

**Feladat (`body`)**

```text
Ítéld meg a mi oldalunkat ebben a hívásban — az operátort — ezek szerint a szempontok szerint, és semmi más szerint:
- köszönés: bemutatkozott, és megnevezte a céget?
- feltárás: kiderítette, mit akart valójában az ügyfél?
- ellenvetések: válaszolt arra, amit az ügyfél felvetett, ahelyett hogy elbeszélt volna mellette?
- érték: elmondta, mit kap az ügyfél, nem csak azt, mennyibe kerül?
- következő lépés: valami konkrétban állapodtak meg a hívás végén?

{{transcript}}
```

### Támogatás minősége (`support-quality`) {#support-quality}

**A válasz formája:** `rubric`.

**Szerep (`system`)**

```text
Azt ítéled meg, hogyan kezelt egy támogatási munkatárs egy telefonhívást. Csak azt ítéled meg, amit a leirat mutat, és többre tartod azt, hogy az ügyfél gondját valóban megoldották-e, mint azt, milyen kellemes volt a beszélgetés.
```

**Feladat (`body`)**

```text
Ítéld meg a mi oldalunkat ebben a hívásban — az operátort — ezek szerint a szempontok szerint, és semmi más szerint:
- köszönés: bemutatkozott, és megbizonyosodott róla, kivel beszél?
- megértés: tisztázta, mi a baj valójában, mielőtt válaszolt volna?
- megoldás: megoldódott a gond, vagy konkrét következő lépést kapott az ügyfél?
- hangnem: higgadt és udvarias maradt, különösen ott, ahol az ügyfél nem?
- lezárás: ellenőrizte, hogy az ügyfél elégedett-e, mielőtt befejezte?

{{transcript}}
```
