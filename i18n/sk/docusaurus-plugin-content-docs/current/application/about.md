---
title: O programe
sidebar_position: 2
description: Verzia, aktualizácie, vaša krajina, licencia, obsah hlásenia o používaní, formulár spätnej väzby a z čoho je program postavený.
---

**Nastavenia → O programe** obsahuje všetko o samotnom programe.

<Shot name="20_settings_about" alt="Nastavenia → O programe" />

## Verzia a krajina {#version-and-country}

Navrchu je názov, **Verzia** (na obrázku 1.1.5), odkaz na webovú stránku [ai-softphone.com](https://ai-softphone.com/) a odkaz na túto dokumentáciu.

**Krajina** hovorí programu, kde ste. Pomáha vybrať najlepší server aktualizácií a otvára cestu k jazykovým a rečovým službám hosťovaným vo vašej krajine. **Zistiť automaticky** ju vyplní.

## Aktualizácie {#updates}

Karta hovorí, či máte najnovšiu verziu a kedy sa naposledy kontrolovalo. **Skontrolovať aktualizácie** skontroluje teraz.

**Kontrolovať aktualizácie automaticky**, predvolene zapnuté, kontroluje raz denne a krátko po spustení telefónu. Požiada server o jeden malý súbor a nič sa nesťahuje ani neinštaluje bez vášho súhlasu.

Keď vyjde nová verzia, karta napíše *Verzia … je dostupná. Nič sa nesťahuje, kým o to nepožiadate.* **Čo sa zmenilo** ukáže, čo je v nej nové, a **Stiahnuť** ju stiahne.

Keď je stiahnutá, **Nainštalovať a reštartovať** telefón zatvorí a spustí ho znova už v novej verzii. Telefón to nikdy neurobí sám, aby neprerušil nič, čo práve prebieha: stlačte tlačidlo, keď práve netelefonujete. Povie to aj upozornenie *Je dostupná nová verzia* s tlačidlom **Aktualizovať teraz**.

| Keď karta píše | |
| --- | --- |
| *Verzia … je dostupná. Táto kópia bola nainštalovaná z balíka, takže nová sa nainštaluje rovnako.* | Program bol nainštalovaný z balíka, napríklad z vašej linuxovej distribúcie. Stlačte **Získať balík** a novú verziu nainštalujte rovnako, ako ste nainštalovali túto. |
| *Toto zostavenie nemá aktualizačnú adresu, takže sa nikdy nepýta. Tie zverejnené na webe ju majú.* | Program bol zostavený zo zdrojového kódu, nie stiahnutý z webu, a aktualizácie nehľadá. |
| *Žiadny aktualizačný server neodpovedal.* | Servery neboli dosiahnuteľné. Ak je počítač online, môže pomôcť vyplniť **Krajina** vyššie: možno je nejaký server bližšie k vám. |

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
| **Priložiť záznam** | Pridá koniec záznamu, najviac asi 512 kB; riadok pod začiarkavacím políčkom hovorí, koľko to je teraz (na obrázku 111 kB). Pozrite [Diagnostika](/troubleshooting/diagnostics). |

**Odoslať** zostáva sivé, kým nie je čo odoslať.

## Postavené na {#built-with}

Komponenty, na ktorých je program postavený, každý so svojou licenciou: Qt 6 (GPL-2.0 alebo GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), Opus (BSD-3-Clause), SQLite (verejná doména), nlohmann/json (MIT), cpp-httplib (MIT), IXWebSocket (BSD-3-Clause), nghttp2 (MIT), LAME (LGPL-2.0-or-later), minimp3 (CC0-1.0), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) a klient PulseAudio (LGPL-2.1-or-later). Každý sa používa pod licenciou uvedenou vedľa neho; ak komponent ponúka viacero, použitá je tá uvedená.
