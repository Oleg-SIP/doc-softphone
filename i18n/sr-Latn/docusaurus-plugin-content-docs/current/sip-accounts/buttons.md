---
title: Dugmad
sidebar_position: 4
description: "\"BLF dugmad: dugmad za jedan dodir koja biraju interni broj na vašoj IP centrali i pokazuju da li je slobodan, zvoni ili je zauzet.\""
---

Dugmad su **BLF** (Busy Lamp Field) tasteri softverskog telefona, ista funkcija kakvu ima stoni telefon na IP centrali. Dugme bira interni broj jednim pritiskom. Dugme koje prati svoju liniju prikazuje i lampicu: telefon pita centralu o tom internom broju i pokazuje da li je slobodan, zvoni ili je zauzet, kao što to rade konzola recepcije ili programabilni tasteri stonog telefona.

BLF zahteva podršku na strani centrale: centrala mora telefonu da javlja stanje internog broja. Većina IP centrala to radi. Ako vaša ne radi, lampica ostaje siva, a dugme i dalje bira.

Dugmad stoje ispod znački naloga u [glavnom prozoru](/interface/main-window), a **Podešavanja → Dugmad** je mesto gde ih pravite.

<Shot name="08_settings_buttons" alt="Podešavanja → Dugmad: dva dugmeta" />

Svaki red je dugme: lampica, njegov natpis, a desno njegov broj i nalog kom pripada — na primer *212 · 201 Kancelarija*. **▲** i **▼** pomeraju dugme gore ili dole; dugmad u glavnom prozoru prate ovaj redosled. **Dodaj** pravi novo.

## Lampica {#the-lamp}

Dugme koje prati svoju liniju prikazuje lampicu:

| Lampica | Linija je |
| --- | --- |
| Zelena | slobodna |
| Narandžasta | zvoni |
| Crvena | u pozivu |
| Siva | nepoznato: centrala to ne kaže |

## Dodavanje dugmeta {#adding-a-button}

<Shot name="08b_button_add" alt="Obrazac novog dugmeta" />

Pritisnite **Dodaj**; ispod spiska otvara se obrazac.

| Polje | Šta upisati |
| --- | --- |
| **Broj** | Broj koji se bira. |
| **Linija** | Nalog na kom se upućuje poziv. Izaberite ga prvo: za prikaz lampice telefon pita centralu te linije o ovom broju, pa mora da zna koju. |
| **Natpis** | Tekst na dugmetu, na primer ime osobe. Na dugmetu ima mesta samo za kratak natpis; duži se odseca. |
| **Prikazuj da li je ova linija zauzeta** | Prekidač. Uključen — dugme ima lampicu. Isključen — samo bira. |

**Sačuvaj** ostaje sivo dok obrazac nije popunjen. **Odustani** odbacuje obrazac.

Deo programa koji prikazuje dugmad može da se isključi u [Modulima](/application/modules).
