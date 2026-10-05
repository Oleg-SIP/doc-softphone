---
title: O programe
sidebar_position: 2
description: Verzia, aktualizácie, vaša krajina, licencia, obsah hlásenia o používaní, formulár spätnej väzby a z čoho je program postavený.
---

**Nastavenia → O programe** obsahuje všetko o samotnom programe.

<Shot name="20_settings_about" alt="Nastavenia → O programe" />

## Verzia a krajina {#version-and-country}

Navrchu je názov, **Verzia** (na obrázku 1.0.0) a odkaz na webovú stránku [ai-softphone.com](https://ai-softphone.com/).

**Krajina** hovorí programu, kde ste. Pomáha vybrať najlepší server aktualizácií a otvára cestu k jazykovým a rečovým službám hosťovaným vo vašej krajine. **Zistiť automaticky** ju vyplní.

## Aktualizácie {#updates}

Karta hovorí, či máte najnovšiu verziu a kedy sa naposledy kontrolovalo. **Skontrolovať aktualizácie** skontroluje teraz.

**Kontrolovať aktualizácie automaticky**, predvolene zapnuté, kontroluje raz denne a krátko po spustení telefónu. Požiada server o jeden malý súbor a nič sa nesťahuje ani neinštaluje bez vášho súhlasu.

## Licencia {#licence}

Program je slobodný softvér pod licenciou GPL-2.0-or-later. Dodáva sa bez akejkoľvek záruky a môžete ho šíriť za podmienok tejto licencie; úplný text je priložený v súbore s názvom `LICENSE`.

## Telemetria {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Nastavenia → O programe: čo obsahuje hlásenie o používaní" />

Program posiela jedno malé hlásenie o používaní denne. Pred odoslaním prvého vám ukáže, čo obsahuje, a karta to uvádza:

| | Čo sa odosiela |
| --- | --- |
| **Vždy odosielané** | Že aplikácia bola spustená, jej verzia a jazyk rozhrania; verzia operačného systému, miestne nastavenie, krajina a časové pásmo. |
| **Odosielané navyše, v režime Rozšírený** | Počítadlá hovorov a zachytených rozhovorov; výrobca a verzia pripojenej ústredne, nikdy jej adresa; koľko krokov [Prehľadu](/interface/settings-overview) je hotových a zvolené rozloženie. |
| **Nikdy neodosielané, v žiadnom režime** | Čísla, ktoré ste vytočili alebo z ktorých vám volali; účty, heslá ani nič z kľúčenky; kontakty, rozhovory, prepisy ani nahrávky; nič, čo ste napísali, a žiadne súkromné údaje v počítači. |

Každá inštalácia si vytvorí jeden náhodný identifikátor, aby sa hlásenia z tej istej kópie programu dali rozpoznať ako jedna. Neodvodzuje sa z ničoho, čo sa týka vás alebo vášho počítača, a nikoho neoznačuje — ale keďže pretrváva, hlásenia, ktoré ho nesú, sa dajú navzájom prepojiť. Preto sú pseudonymné, nie anonymné.

Základom základného hlásenia je oprávnený záujem: vedieť, ktoré verzie sa používajú, umožňuje, aby sa oprava dostala k tým, ktorí ju potrebujú. Všetko, čo pridáva rozšírené hlásenie, je v ňom preto, že ste si to vybrali, a tu to môžete kedykoľvek zmeniť.

### Hlásenie {#reporting}

| Voľba | |
| --- | --- |
| **Rozšírený** | Základné hlásenie a to, čo uvádza *Odosielané navyše*. Vybrané na obrázku. |
| **Základný** | Iba to, čo je *Vždy odosielané*. |
| **Vypnuté** | Žiadne hlásenie. Dostupné iba vo vydaní Enterprise; inak je táto možnosť sivá. |

## Spätná väzba {#feedback}

<Shot name="20c_settings_about_bottom" alt="Nastavenia → O programe: formulár spätnej väzby a komponenty, z ktorých je program postavený" />

Formulár, ktorý píše vývojárom bez opustenia programu.

| Pole | |
| --- | --- |
| **Predmet** a **Správa** | To, čo chcete povedať. |
| **Vaše meno** a **Adresa na odpoveď** | Obe sú nepovinné. Bez adresy nie je ako odpovedať. |
| **Priložiť záznam** | Pridá koniec záznamu, asi 512 kB. Pozrite [Diagnostika](/troubleshooting/diagnostics). |

**Odoslať** zostáva sivé, kým nie je čo odoslať.

## Postavené na {#built-with}

Komponenty, na ktorých je program postavený, každý so svojou licenciou: Qt 6 (GPL-2.0 alebo GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (verejná doména), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) a klient PulseAudio (LGPL-2.1-or-later). Každý sa používa pod licenciou uvedenou vedľa neho; ak komponent ponúka viacero, použitá je tá uvedená.
