---
title: Hívásbeállítások
sidebar_position: 3
description: Az alközpontnak felkínált kodekek, mi történik, ha egy második hívás érkezik, az automatikus újrahívás, és meddig marad meg a hívásnapló.
---

A **Beállítások → Hívások** azokat a beállításokat tartalmazza, amelyek minden hívásra vonatkoznak, bármelyik fiókon zajlik is.

## Hangformátumok {#audio-formats}

<Shot name="07_settings_calls" alt="Beállítások → Hívások: a hangformátumok" />

A kodekek listája, amelyeket a telefon felkínál a túloldalnak. A kodekek *ebben a sorrendben kerülnek felkínálásra*, és a túloldal abból választ, amit Ön kínál: minél feljebb áll egy kodek, annál valószínűbb, hogy azt használják.

- A **jelölőnégyzet** be- vagy kikapcsolja a kodeket. A kikapcsolt kodeket a telefon nem kínálja fel.
- A **▲** és **▼** feljebb vagy lejjebb viszi a listában.
- A jobb oldali *széles sávú* jelzés olyan kodeket jelöl, amely szélesebb hangtartományt visz át, mint egy telefonvonal: a hang tisztább.

| Kodek | Mintavételi frekvencia | Alapértelmezés szerint bekapcsolva |
| --- | --- | --- |
| **opus** | 48 kHz, sztereó, széles sávú | igen |
| **G722** | 16 kHz, széles sávú | igen |
| **PCMU** | 8 kHz | igen |
| **PCMA** | 8 kHz | igen |
| **speex** | 16 kHz, széles sávú | nem |
| **speex** | 8 kHz | nem |
| **speex** | 32 kHz, széles sávú | nem |
| **iLBC** | 8 kHz | nem |
| **GSM** | 8 kHz | nem |
| **L16** | 44 kHz, sztereó, széles sávú | nem |
| **L16** | 44 kHz, széles sávú | nem |

A táblázat abban a sorrendben van, ahogyan a program érkezik.

A kodekekről a hívás kezdetén születik megállapodás, így a módosítás a következő hívástól érvényes. Ha egy hívás rossz minőségű, csak azokat a kodekeket hagyja bekapcsolva, amelyeket az alközpontja használ.

## Hívásvárakoztatás {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Beállítások → Hívások: hívásvárakoztatás, automatikus újrahívás és előzmények" />

*Mi történjen, ha valaki akkor hívja, amikor Ön már hívásban van.* Ezt a legördülő listában választhatja ki; az alapérték a **Csörögjön a második hívás**. A saját központjáról érkező intercom-hívás mindig átjut, bármit választ is — így jut el ehhez a telefonhoz egy CTI-panelről indított hívás.

## Automatikus újrahívás {#autodial}

Ha egy hívás nem jut át, a kártyája felajánlja, hogy addig tárcsáz, amíg sikerrel nem jár. Két csúszka állítja be, hogyan:

- **Várakozás a próbálkozások között** — alapértelmezés szerint 15 másodperc;
- **Feladás ennyi után** — alapértelmezés szerint 30 perc.

## Előzmények {#history}

A hívásnapló bizonyíték, ezért semmi sem törlődik belőle, hacsak itt nem kéri.

- A **Megőrzési idő** azt választja ki, meddig őrizzen meg [a hívásnapló](/interface/contacts-history#history) egy hívást. Az alapérték a **Mindig**.
- A **Hívásnapló kiürítése** egyszerre töröl minden hívást, függetlenül a megőrzési időtől. Nem vonható vissza.
