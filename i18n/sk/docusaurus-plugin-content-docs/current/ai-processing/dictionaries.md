---
title: Slovníky
sidebar_position: 4
description: Vaše vlastné kategórie, štítky a varovné signály — slová, pod ktoré sa vaše rozhovory zaraďujú.
---

**Nastavenia → Slovníky** obsahuje slová, pod ktoré sa rozhovor môže zaradiť, ktorými sa môže označiť alebo pre ktoré sa môže vyznačiť. Tieto zoznamy sú to, čo sa modelom ukazuje a z čoho musia vyberať, takže odpoveď je vždy niečo, čo môžete neskôr vyhľadať.

<Shot name="13_settings_dictionaries" alt="Nastavenia → Slovníky" />

**Zobraziť zmazané** ukáže položky, ktoré ste zmazali.

Každá položka je názov, krátky kód malým písmom a opis, ktorý modelu hovorí, kedy ju vybrať. Kód je to, čo sa ukladá a čo vracia [REST API](../integration/rest-api.md#taxonomy-and-settings), takže zostáva rovnaký, aj keď položku premenujete.

## Kategórie {#categories}

O čom bol rozhovor; **pre každý rozhovor sa vyberá jedna**. Program začína so štyrmi:

| Názov | Kód | Používa sa pre |
| --- | --- | --- |
| **Predaj** | `sales` | Predaj, cenové ponuky, vyjednávanie alebo nadväzovanie na nákup — vrátane zákazníka, ktorý sa pýta, koľko niečo stojí. |
| **Podpora** | `support` | Pomoc niekomu s produktom alebo službou, ktorú už má: porucha, otázka o používaní, sťažnosť na to, ako funguje. |
| **Súkromný** | `personal` | Vôbec nie biznis — súkromný rozhovor, ktorý sa náhodou uskutočnil na tejto linke. |
| **Iné** | `other` | Biznis, ale ani predaj, ani podpora: dodávateľ, kolega, doručenie, omyl v čísle. Vyberte toto radšej než hádať medzi ostatnými. |

Stlačením **Pridať** pridáte vlastnú kategóriu.

## Štítky {#tags}

Označenia, ktoré *môžu na ten istý rozhovor platiť všetky naraz*. Stlačením **Pridať** jedno pridáte. Zoznam začína položkami ako:

| Názov | Kód | Používa sa pre |
| --- | --- | --- |
| **Sľúbené zavolať späť** | `callback` | Niekto v tomto hovore sľúbil zavolať späť alebo požiadal o spätné zavolanie. |
| **Sťažnosť** | `complaint` | Druhá strana vyjadrila nespokojnosť, či už bola vyriešená, alebo nie. |
| **Posunuté vyššie** | `escalation` | Hovor bol odovzdaný niekomu inému alebo o to druhá strana požiadala. |
| **Zákazník VIP** | `vip` | S druhou stranou sa zaobchádzalo ako s dôležitým klientom, alebo sama povedala, že ním je. |

## Varovné signály {#red-flags}

Veci, ktoré si vyžadujú pozornosť, nájdené v rozhovore s dôkazom a časom — napríklad *Nahnevaný zákazník* alebo *Riziko odchodu*. Varovné signály sú v [okne Nahrávky](../interface/recordings.md) nakreslené červenou a každý nesie závažnosť: nízku, strednú alebo vysokú.

## Tvary odpovedí a jazyk {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Nastavenia → Slovníky: tvary odpovedí a pokyny k jazyku" />

Nižšie na karte sú pokyny, z ktorých sa skladajú pokyny pre modely. Uchovávajú sa tu, aby každý pokyn mohol použiť rovnaké znenie, a môžete ich meniť ako ktorúkoľvek inú položku.

| Názov | Kód | Čo hovorí modelu |
| --- | --- | --- |
| **Štítky** | `shape-labels` | Odpovedz v JSON so zoznamom kódov a s tým, ako si je istý každým z nich, s použitím iba kódov zo zoznamu, ktorý dostal. |
| **Hodnotenie** | `shape-score` | Odpovedz hodnotením, jeho dôvodom a slovami, na ktorých je založené. |
| **Kritériá** | `shape-rubric` | Odpovedz celkovým hodnotením a hodnotením každého kritéria. |
| **Signály** | `shape-flags` | Odpovedz kódmi zo zoznamu, každým so závažnosťou. |
| **Odpoveď** | `shape-qa` | Odpovedz odpoveďou, alebo jasne povedz, že rozhovor to neuvádza, a slovami, o ktoré sa odpoveď opiera. |
| **JSON** | `shape-json` | Odpovedz iba v JSON, v tvare požadovanom vyššie. |
| **Ako sa hovorilo** | `language-as-spoken` | Píš v jazyku, v ktorom prebiehal rozhovor. |
| **Ako sa hovorilo, menovite** | `language-as-spoken-named` | To isté, s pomenovaním jazyka. |
| **Určený jazyk** | `language-named` | Píš v jazyku, ktorý určíte. |

**Pridať** na konci zoznamu pridá položku.

## Predvolené {#defaults}

**Obnoviť predvolené** vráti každý slovník do stavu, v akom prišiel s programom, v aktuálnom jazyku rozhrania. To, kam sú vaše rozhovory už zaradené, zostane nedotknuté.
