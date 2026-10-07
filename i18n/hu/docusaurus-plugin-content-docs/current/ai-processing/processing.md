---
title: Feldolgozás
sidebar_position: 2
description: A beszélgetések automatikus feldolgozása, a havi költségkorlátok, a nyelvi modellek, az utasítások és az őket futtató szabályok.
---

A **Beállítások → Feldolgozás** dönti el, mi történjen egy beszélgetéssel a rögzítése után, melyik modell végzi a munkát, és mennyibe kerülhet.

<Shot name="12_settings_processing" alt="Beállítások → Feldolgozás" />

## A beszélgetések automatikus feldolgozása {#process-conversations-automatically}

- **Ki:** semmi sem történik, amíg nem kéri a [Felvételek ablakban](../interface/recordings.md).
- **Be:** az alábbi [szabályok](#rules) maguktól lefutnak. Ez alakítja a beszélgetést összefoglalóvá, kategóriává és minden mássá anélkül, hogy bárki bármit megnyomna. A felhőben futó modell ezen lépések mindegyikéért díjat számol fel.

A jelölőnégyzet alatt a program megmutatja, mennyit költött ebben a hónapban és hány kérésre, például *Ebben a hónapban: 40 492 token, 84 kérésben, díjmentesen.*

## Korlátok {#limits}

| Mező | Jelentés |
| --- | --- |
| **Pénzkorlát, havonta** | Legfeljebb mennyibe kerülhetnek a modellek egy hónapban. |
| **Tokenkorlát, havonta** | Legfeljebb hány tokent használhatnak egy hónapban. |

Két korlát van, mert egy hónapot kétféle egységben lehet mérni. Mindkettő üres, amíg ki nem tölti. Ha bármelyiket eléri, az automatikus szabályok a hónap fordulójáig leállnak. **Amit Ön maga kér, az soha nem áll le.**

## Nyelvi modellek {#language-models}

Azok a modellek, amelyek elolvassák a leiratot, és írnak róla. Új modell felvételéhez nyomja meg a **Hozzáadás** gombot. Mindegyik a nevével szerepel, alatta pedig a modellazonosító és a szolgáltatás címe, például `qwen3-32b · http://llm.local:8000/v1`. Az **Alapértelmezett** jelölésű modellt használja a program alapértelmezés szerint. A modell űrlapján egy gomb ellenőrzi, hogy a szolgáltatás valóban válaszol-e, mielőtt rábízná magát.

- A **saját gépen futó** modell minden beszélgetést az épületen belül tart, és használata semmibe sem kerül.
- A felhőben futó modell — OpenAI, Claude, Mistral, DeepSeek, Groq és mások — használat alapján fizetős. A program minden hívás árát tokenben és pénzben is megmutatja.

## Utasítások {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Beállítások → Feldolgozás: az utasítások" />

*Az, amit a modellektől kérünk.* Minden utasítás a programmal érkezett, és mindegyik az Öné, hogy megváltoztassa — és hogy visszaállítsa. Mindegyik a nevével szerepel, alatta pedig az, hogy mit ír és milyen formában. A forma — **Válasz**, **Tételek**, **Címkék**, **JSON**, **Próza**, **Jelzések** vagy **Szempontok** — határozza meg, hogyan tárolódik és jelenik meg a válasz. Az utasítások leírása a [Personal Prompt Studio](prompt-studio.md) oldalon található. A **Hozzáadás** saját utasítást hoz létre.

## Szabályok {#rules}

<Shot name="12c_settings_processing_rules" alt="Beállítások → Feldolgozás: a szabályok" />

*Az, ami magától fut, ebben a sorrendben. Mindegyik legfeljebb egyszer sül el beszélgetésenként.* Egy szabály egy sor, benne egy jelölőnégyzet, amely be- vagy kikapcsolja, a szabály neve, alatta pedig az, hogy mit csinál. A **▲** és **▼** módosítja a sorrendet. A program nyolc szabállyal érkezik:

| Szabály | Mit csinál | Mikor |
| --- | --- | --- |
| **Minden beszélgetés leírása** | Leiratot készít róla. | mindig |
| **Összefoglalás** | Megkérdez egy modellt: **Összefoglaló**. | mindig |
| **Egy sorra szűkítés** | Megkérdez egy modellt: **Egysoros összefoglaló**. | mindig |
| **Besorolás kategóriába** | Megkérdez egy modellt: **Kategória**. | mindig |
| **Címkézés** | Megkérdez egy modellt: **Címkék**. | mindig |
| **Ami figyelmet érdemel, kiemelése** | Megkérdez egy modellt: **Figyelmeztető jelek**. | mindig |
| **Értékelés, ha értékesítés volt** | Megkérdez egy modellt: **Értékesítés minősége**. | csak ha a kategória **Értékesítés** |
| **Értékelés, ha támogatás volt** | Megkérdez egy modellt: **Támogatás minősége**. | csak ha a kategória **Támogatás** |

A sorrend számít: az utolsó két szabálynak szüksége van arra a kategóriára, amelyet az előttük lévő szabály állít be. A **Hozzáadás** saját szabályt hoz létre.

## Alapértékek {#defaults}

Az **Alapértékek visszaállítása** visszaállítja az utasításokat és a szabályokat a programmal érkezett állapotukra, a felület aktuális nyelvén. A nyelvi modelljeit érintetlenül hagyja.

A programmal érkezett utasítások és szabályok a felület nyelvének váltásakor azon a nyelven maradnak, amelyen addig voltak; az **Alapértékek visszaállítása** hozza át őket az új nyelvre. Ezután minden utasítás mellett jobbra a *módosítva* jelölés áll.
