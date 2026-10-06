---
title: Névjegyek és előzmények
sidebar_position: 2
description: A címjegyzék és a hívásnapló a telefon mellett.
---

A **Névjegyek** és az **Előzmények** két lapként nyílik meg a telefontól jobbra, így beszélgetés közben is kikereshet egy számot.

## Névjegyek {#contacts}

<Shot name="03_contacts" alt="A Névjegyek lap" />

- A **Keresés** gépelés közben szűri a listát.
- A **Hozzáadás** új névjegyet hoz létre.
- Minden névjegy a nevével szerepel, alatta pedig a szám és az a fiók, amelyen keresztül a névjegyet hívja, például *231 · 201 Iroda*.

Ismert számról érkező bejövő hívásnál a névjegy neve jelenik meg, és ugyanígy a legutóbbi hívások listájában és a hívásnaplóban is — így működik a hívóazonosítás.

### Névjegy szerkesztése {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Szerkesztésre megnyitott névjegy" />

Jelöljön ki egy névjegyet, és a sora jobb szélén megjelenik egy ceruza és egy kagyló. A kagyló felhívja a névjegyet; a ceruza megnyitja a sor alatti űrlapot:

| Mező | Mit írjon be |
| --- | --- |
| **Név** | Ahogyan a névjegy megjelenik. |
| **Szám** | A tárcsázandó szám. |
| Legördülő lista a **Szám** alatt | Az a fiók, amelyen keresztül a névjegyet hívja. |

A **Mentés** megtartja a módosításokat, a **Mégse** elveti őket, a **Törlés** pedig eltávolítja a névjegyet.

## Előzmények {#history}

<Shot name="21_history" alt="Az Előzmények lap" />

A hívásnapló, a legújabbal kezdve. Felül:

- a legördülő lista, alapértelmezés szerint **Minden hívás**, egyféle hívásra szűkíti a listát;
- a **Keresés** a beírt szöveg szerint szűr.

Minden bejegyzésnek van egy ikonja a hívás fajtájára — kimenő kagyló, illetve nem fogadott hívásnál piros kagyló órával —, ott van a másik fél neve (vagy a száma), alatta pedig a dátum, a hívás kimenetele, a hossza, a szám és a fiók. A legutóbbi hívások *Tegnap, 22:33* formában vagy a hét napjával jelennek meg, a régebbiek dátummal.

| A hívás kimenetele | Megjelenítés |
| --- | --- |
| Beszéltek | **kimenő** vagy bejövő, és a hossz, például *48 mp* |
| Egy bejövő hívást nem fogadtak | **Nem fogadott** |
| Egy Ön által indított hívás nem jött létre | **Nem ment át** |

Jelöljön ki egy bejegyzést, és tőle jobbra négy gomb jelenik meg:

| Gomb | Mit csinál |
| --- | --- |
| Személy pluszjellel | Hozzáadja a számot a [Névjegyekhez](#contacts). |
| ▶ | Lejátssza a hívás felvételét, ha készült. |
| Kuka | Törli a bejegyzést. |
| Kagyló | Visszahívja a számot. |

### Meddig marad meg a napló {#how-long-the-log-is-kept}

A hívásnapló bizonyíték, ezért semmi sem törlődik belőle, amíg Ön nem kéri: alapértelmezés szerint minden hívás megmarad. A megőrzési idő és a **Hívásnapló kiürítése** gomb a [Hívásbeállítások](../sip-accounts/calls.md#history) között található.

A nem fogadott és az elutasított hívások a [helyi REST API-n](../integration/rest-api.md) keresztül is lekérdezhetők (`/history?missed=true`, `/history?declined=true`).
