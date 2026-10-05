---
title: Slovarji
sidebar_position: 4
description: Vaše lastne kategorije, oznake in opozorilni znaki — besede, pod katere se uvrščajo vaši pogovori.
---

**Nastavitve → Slovarji** vsebuje besede, pod katere se pogovor lahko uvrsti, s katerimi se lahko označi ali zaradi katerih se lahko opozori nanj. Ti seznami so to, kar se pokaže modelom in med čimer morajo izbirati, zato je odgovor vedno nekaj, kar lahko pozneje poiščete.

<Shot name="13_settings_dictionaries" alt="Nastavitve → Slovarji" />

**Pokaži izbrisane** pokaže vnose, ki ste jih izbrisali.

Vsak vnos je ime, kratka koda z drobnim tiskom in opis, ki modelu pove, kdaj ga izbrati. Koda je to, kar se shrani in kar vrne [REST API](../integration/rest-api.md#taxonomy-and-settings), zato ostane enaka, ko vnos preimenujete.

## Kategorije {#categories}

O čem je bil pogovor; **za vsak pogovor se izbere ena**. Program začne s štirimi:

| Ime | Koda | Uporablja se za |
| --- | --- | --- |
| **Prodaja** | `sales` | Prodajo, ponudbe, pogajanja ali nadaljevanje nakupa — vključno s stranko, ki vpraša, koliko kaj stane. |
| **Podpora** | `support` | Pomoč nekomu z izdelkom ali storitvijo, ki jo že ima: okvara, vprašanje o uporabi, pritožba nad delovanjem. |
| **Zasebno** | `personal` | Sploh ne posel — zaseben pogovor, ki je slučajno potekal na tej liniji. |
| **Drugo** | `other` | Posel, a ne prodaja ne podpora: dobavitelj, sodelavec, dostava, napačna številka. Izberite to, namesto da ugibate med drugimi. |

Pritisnite **Dodaj**, da dodate lastno kategorijo.

## Oznake {#tags}

Nalepke, ki *lahko vse hkrati veljajo za isti pogovor*. Pritisnite **Dodaj**, da dodate eno. Seznam se začne z vnosi, kot so:

| Ime | Koda | Uporablja se za |
| --- | --- | --- |
| **Obljubljen povratni klic** | `callback` | Nekdo v tem klicu je obljubil, da bo poklical nazaj, ali prosil, naj ga pokličejo nazaj. |
| **Pritožba** | `complaint` | Druga stran je izrazila nezadovoljstvo, ne glede na to, ali je bilo rešeno. |
| **Predano naprej** | `escalation` | Klic je bil predan nekomu drugemu ali je druga stran to zahtevala. |
| **Stranka VIP** | `vip` | Z drugo stranjo so ravnali kot s pomembno stranko ali je sama rekla, da je to. |

## Opozorilni znaki {#red-flags}

Stvari, ki zahtevajo pozornost, najdene v pogovoru z dokazom in časom — na primer *Jezna stranka* ali *Tveganje odhoda*. Opozorilni znaki so v [oknu Posnetki](../recordings/recordings-window.md) narisani rdeče in vsak nosi resnost: nizko, srednjo ali visoko.

## Oblike odgovorov in jezik {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Nastavitve → Slovarji: oblike odgovorov in jezikovna navodila" />

Nižje na zavihku so navodila, iz katerih se sestavijo navodila za modele. Hranijo se tukaj, da lahko vsako navodilo uporabi enako besedilo, spreminjate pa jih lahko kot kateri koli drug vnos.

| Ime | Koda | Kaj pove modelu |
| --- | --- | --- |
| **Oznake** | `shape-labels` | Odgovori v JSON s seznamom kod in kako prepričan je o vsaki, z uporabo le kod s seznama, ki ga je dobil. |
| **Ocena** | `shape-score` | Odgovori z oceno, razlogom zanjo in besedami, na katerih temelji. |
| **Merila** | `shape-rubric` | Odgovori s skupno oceno in oceno za vsako merilo. |
| **Signali** | `shape-flags` | Odgovori s kodami s seznama, vsako z resnostjo. |
| **Odgovor** | `shape-qa` | Odgovori z odgovorom ali jasno povej, da pogovor tega ne pove, in z besedami, na katere se odgovor opira. |
| **JSON** | `shape-json` | Odgovori le z JSON, v obliki, zahtevani zgoraj. |
| **Kot se je govorilo** | `language-as-spoken` | Piši v jeziku, v katerem je potekal pogovor. |
| **Kot se je govorilo, imenovano** | `language-as-spoken-named` | Enako, z imenovanjem jezika. |
| **Določen jezik** | `language-named` | Piši v jeziku, ki ga določite. |

**Dodaj** na koncu seznama doda vnos.

## Privzete vrednosti {#defaults}

**Obnovi privzeto** vrne vsak slovar, kot je prišel s programom, v trenutnem jeziku vmesnika. Kam so vaši pogovori že uvrščeni, ostane nedotaknjeno.
