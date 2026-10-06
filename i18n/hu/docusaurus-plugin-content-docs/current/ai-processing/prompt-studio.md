---
title: Personal Prompt Studio
sidebar_position: 3
description: A beszélgetéseit feldolgozó utasítások, az őket futtató szabályok, és hogyan szabhatja őket a saját igényeire.
---

A **Personal Prompt Studio** az AI Softphone azon része, amely az Ön elképzelése szerint dolgozza fel a beszélgetéseit. A feldolgozást utasítások végzik: a program tizeneggyel érkezik, amelyek azonnal használhatók, amint a leiratozás és egy nyelvi modell csatlakoztatva van, Ön pedig hétköznapi nyelven módosíthatja, lemásolhatja őket, és sajátokat is hozzáadhat. Az utasítások a [Beállítások → Feldolgozás](processing.md#prompts) lap **Utasítások** része alatt találhatók.

Az Ön LLM-je, az Ön kulcsa, az Ön irányítása: csatlakoztassa a kedvelt modelljét a saját kulcsával, egy támogatott szolgáltatáson vagy egy kompatibilis API-n keresztül — vagy egy, a szervezetén belül telepített modellt. Ha a [leiratozás](transcription.md#your-own-models) is a saját hardverén fut, a hang és a leiratok egyaránt az Ön környezetén belül maradnak.

<Shot name="12b_settings_processing_prompts" alt="Az utasítások listája a Beállítások → Feldolgozás lapon" />

## A programmal érkező utasítások {#the-prompts-that-come-with-the-program}

A második oszlop azt mutatja, ami a listában az utasítás neve alatt áll: mit ír, és milyen formában.

| Utasítás | Forma | Mit ír |
| --- | --- | --- |
| **Összefoglaló** | Próza | A fő pontokat, döntéseket és következő lépéseket egy rövid bekezdésben. |
| **Egysoros összefoglaló** | Próza | Egy rövid címet, amelyről a beszélgetés felismerhető egy listában. |
| **Teendők** | Tételek | Ki mit vállalt és mikorra, az általuk mondott szavakkal. |
| **Témák** | Tételek | A szóba került témákat néhány szóban. |
| **Nevek és számok** | JSON | Személyeket, cégeket, dátumokat, összegeket és hivatkozásokat. |
| **Kategória** | Címkék | Besorolja a beszélgetést valamelyik [kategóriájába](dictionaries.md). |
| **Címkék** | Címkék | Ráteszi a [címkéit](dictionaries.md), hogy később megtalálható legyen. |
| **Figyelmeztető jelek** | Jelzések | A problémákat, a bizonyítékkal és a beszélgetésbeli időponttal. |
| **Kérdés erről a hívásról** | Válasz | Megválaszol egy kérdést, amelyet egy beszélgetésről tesz fel, a leirata alapján. |
| **Értékesítés minősége** | Szempontok | Értékeli a beszélgetést szerkeszthető értékesítési szempontok szerint. |
| **Támogatás minősége** | Szempontok | Megítéli, mennyire jól értették meg és kezelték a problémát. |

A formák a válasz rögzített alakjai, és ez teszi lehetővé, hogy a program megőrizze és később kereshesse őket: a **Címkék** az egyik listájából származó kódok, a **Jelzések** súlyossággal ellátott kódok, a **Szempontok** egy pontszám indoklással és szempontonkénti pontszámmal, a **Válasz** pedig egy felelet azokkal a szavakkal, amelyeken alapul. Az utasítások, amelyek közlik a modellel az alakot, a [Szótárak](dictionaries.md#answer-shapes-and-language) között vannak.

Az AI Softphone-ban lebonyolított hívások, a számítógépről [rögzített](/capture/) megbeszélések és az importált felvételek mind ugyanazokon az utasításokon mennek át, amint van leiratuk.

A teendők azt rögzítik, amiben megállapodtak — nem küldenek üzeneteket, nem foglalnak időpontot és nem nyitnak jegyeket Ön helyett.

## A saját igényeire szabva {#making-it-yours}

- Hétköznapi nyelven módosítsa, mit kér egy utasítás: mit keressen, milyen formában válaszoljon, és milyen nyelven.
- Másoljon le egy utasítást, hogy kipróbáljon egy változatot.
- Válassza ki az egyes utasítások modelljét — a saját gépén vagy a felhőben.
- Állítsa be, milyen sorrendben fussanak az utasítások, kapcsolja be és ki őket, és tegye őket feltételhez kötötté — ez a [szabályokkal](processing.md#rules) történik: például az értékesítési értékelés csak az **Értékesítés** kategóriába sorolt hívásokon fut le.
- Tartsa saját kategóriáit, címkéit és figyelmeztető jeleit a [Szótárak](dictionaries.md) között.
- Korlátozza a költséget a [havi korlátokkal](processing.md#limits).

Az eredeti utasítások és szabályok az **Alapértékek visszaállítása** gombbal állíthatók vissza, a [Beállítások → Feldolgozás](processing.md#defaults) lap **Alapértékek** része alatt.
