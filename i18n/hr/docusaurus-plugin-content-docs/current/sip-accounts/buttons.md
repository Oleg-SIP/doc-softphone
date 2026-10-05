---
title: Gumbi
sidebar_position: 4
description: "\"BLF gumbi: gumbi za jedan dodir koji biraju interni broj na vašoj IP centrali i pokazuju je li slobodan, zvoni ili je zauzet.\""
---

Gumbi su **BLF** (Busy Lamp Field) tipke softverskog telefona, ista funkcija kakvu ima stolni telefon na IP centrali. Gumb bira interni broj jednim pritiskom. Gumb koji prati svoju liniju prikazuje i lampicu: telefon pita centralu o tom internom broju i pokazuje je li slobodan, zvoni ili je zauzet, kao što to rade konzola recepcije ili programabilne tipke stolnog telefona.

BLF treba podršku na strani centrale: centrala mora telefonu javljati stanje internog broja. Većina IP centrala to radi. Ako vaša ne radi, lampica ostaje siva, a gumb i dalje bira.

Gumbi stoje ispod znački računa u [glavnom prozoru](/interface/main-window), a **Postavke → Gumbi** mjesto je gdje ih izrađujete.

<Shot name="08_settings_buttons" alt="Postavke → Gumbi: dva gumba" />

Svaki redak je gumb: lampica, njegov natpis, a desno njegov broj i račun kojem pripada — primjerice *212 · 201 Ured*. **▲** i **▼** pomiču gumb gore ili dolje; gumbi u glavnom prozoru prate ovaj redoslijed. **Dodaj** stvara novi.

## Lampica {#the-lamp}

Gumb koji prati svoju liniju prikazuje lampicu:

| Lampica | Linija je |
| --- | --- |
| Zelena | slobodna |
| Narančasta | zvoni |
| Crvena | u razgovoru |
| Siva | nepoznato: centrala to ne kaže |

## Dodavanje gumba {#adding-a-button}

<Shot name="08b_button_add" alt="Obrazac novog gumba" />

Pritisnite **Dodaj**; ispod popisa otvara se obrazac.

| Polje | Što upisati |
| --- | --- |
| **Broj** | Broj koji se bira. |
| **Linija** | Račun na kojem se upućuje poziv. Odaberite ga prvi: za prikaz lampice telefon pita centralu te linije o ovom broju, pa mora znati koju. |
| **Natpis** | Tekst na gumbu, primjerice ime osobe. Na gumbu ima mjesta samo za kratak natpis; duži se odreže. |
| **Prikazuj je li ova linija zauzeta** | Prekidač. Uključen — gumb ima lampicu. Isključen — samo bira. |

**Spremi** ostaje siv dok obrazac nije ispunjen. **Odustani** odbacuje obrazac.

Dio programa koji prikazuje gumbe može se isključiti u [Modulima](/application/modules).
