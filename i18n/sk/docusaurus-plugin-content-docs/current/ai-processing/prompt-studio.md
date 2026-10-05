---
title: Personal Prompt Studio
sidebar_position: 3
description: Pokyny, ktoré spracúvajú vaše rozhovory, pravidlá, ktoré ich spúšťajú, a ako si ich prispôsobiť.
---

**Personal Prompt Studio** je časť AI Softphone, ktorá spracúva vaše rozhovory po vašom. Spracovanie robia pokyny: program prichádza s jedenástimi, pripravenými na použitie, hneď ako je pripojený prepis a jazykový model, a vy ich môžete meniť bežným jazykom, duplikovať a pridávať vlastné. Sú uvedené v časti **Pokyny** v [Nastavenia → Spracovanie](processing.md#prompts).

Váš LLM, váš kľúč, vaša kontrola: pripojte model, ktorý uprednostňujete, s vlastným kľúčom, cez podporovanú službu alebo kompatibilné API — alebo model nasadený vo vašej organizácii. Keď aj [prepis](transcription.md#your-own-models) beží na vlastnom hardvéri, zvuk aj prepisy zostanú vo vašom prostredí.

<Shot name="12b_settings_processing_prompts" alt="Zoznam pokynov v Nastavenia → Spracovanie" />

## Pokyny, ktoré prichádzajú s programom {#the-prompts-that-come-with-the-program}

Druhý stĺpec je to, čo zoznam ukazuje pod názvom pokynu: čo píše a v akej forme.

| Pokyn | Forma | Čo píše |
| --- | --- | --- |
| **Zhrnutie** | Próza | Hlavné body, rozhodnutia a ďalšie kroky v jednom krátkom odseku. |
| **Zhrnutie na jeden riadok** | Próza | Krátky názov, podľa ktorého rozhovor spoznáte v zozname. |
| **Úlohy** | Položky | Kto sa dohodol, že čo urobí a kedy, so slovami, ktoré povedal. |
| **Témy** | Položky | Témy, ktoré sa preberali, niekoľkými slovami. |
| **Mená a čísla** | JSON | Ľudia, firmy, dátumy, sumy a odkazy. |
| **Kategória** | Štítky | Zaradí rozhovor do jednej z vašich [kategórií](dictionaries.md). |
| **Štítky** | Štítky | Pridá mu vaše [štítky](dictionaries.md), aby sa dal neskôr nájsť. |
| **Varovné signály** | Signály | Problémy, s dôkazom a časom v rozhovore. |
| **Otázka k tomuto hovoru** | Odpoveď | Odpovedá na otázku, ktorú položíte o jednom rozhovore, na základe jeho prepisu. |
| **Kvalita predaja** | Kritériá | Posúdi rozhovor podľa kritérií predaja, ktoré môžete upraviť. |
| **Kvalita podpory** | Kritériá | Posúdi, ako dobre bol problém pochopený a vyriešený. |

Formy sú pevné tvary odpovede, a práve to umožňuje programu odpoveď uchovať a neskôr v nej hľadať: **Štítky** sú kódy z jedného z vašich zoznamov, **Signály** sú kódy so závažnosťou, **Kritériá** sú hodnotenie s dôvodom a hodnotením každého kritéria, **Odpoveď** je odpoveď so slovami, o ktoré sa opiera. Pokyny, ktoré modelu hovoria tvar, sa uchovávajú v [Slovníkoch](dictionaries.md#answer-shapes-and-language).

Hovory uskutočnené v AI Softphone, stretnutia [zachytené](/capture/) z počítača a importované nahrávky prechádzajú rovnakými pokynmi, hneď ako majú prepis.

Úlohy zaznamenávajú, na čom sa dohodlo — neposielajú za vás správy, nerezervujú návštevy ani nevytvárajú tikety.

## Prispôsobenie {#making-it-yours}

- Zmeňte, o čo pokyn žiada, bežným jazykom: čo hľadá, formát odpovede a jazyk, v ktorom odpovedá.
- Duplikujte pokyn a vyskúšajte variant.
- Vyberte model pre každý pokyn — na vlastnom počítači alebo v cloude.
- Nastavte poradie, v akom pokyny bežia, zapínajte a vypínajte ich a robte ich podmienenými — to sa robí [pravidlami](processing.md#rules): napríklad posúdenie predaja beží iba pri hovoroch zaradených ako **Predaj**.
- Udržiavajte vlastné kategórie, štítky a varovné signály v [Slovníkoch](dictionaries.md).
- Obmedzte náklady [mesačnými hranicami](processing.md#limits).

Pôvodné pokyny a pravidlá sa dajú obnoviť tlačidlom **Obnoviť predvolené** v časti **Predvolené** v [Nastavenia → Spracovanie](processing.md#defaults).
