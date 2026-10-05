---
title: Spracovanie
sidebar_position: 2
description: Automatické spracovanie rozhovorov, mesačné hranice výdavkov, jazykové modely, pokyny a pravidlá, ktoré ich spúšťajú.
---

**Nastavenia → Spracovanie** rozhoduje, čo sa stane s rozhovorom, keď je nahraný, ktorý model robí prácu a koľko to smie stáť.

<Shot name="12_settings_processing" alt="Nastavenia → Spracovanie" />

## Spracovávať hovory automaticky {#process-conversations-automatically}

- **Vypnuté:** nič sa nestane, kým o to nepožiadate v [okne Nahrávky](../recordings/recordings-window.md).
- **Zapnuté:** [pravidlá](#rules) nižšie bežia samy. Práve to premení rozhovor na zhrnutie, kategóriu a všetko ostatné bez toho, aby ktokoľvek čokoľvek stlačil. Model v cloude účtuje za každý z týchto krokov.

Pod začiarkavacím políčkom program ukazuje, koľko sa tento mesiac minulo a na koľko požiadaviek, napríklad *Tento mesiac: 40 492 tokenov, v 84 požiadavkách, bez poplatku.*

## Hranice {#limits}

| Pole | Význam |
| --- | --- |
| **Hranica peňazí, mesačne** | Najviac, koľko smú modely stáť za mesiac. |
| **Hranica tokenov, mesačne** | Najviac tokenov, koľko smú za mesiac použiť. |

Hranice sú dve, lebo mesiac sa dá počítať v dvoch veciach. Obe sú prázdne, kým ich nevyplníte. Keď sa dosiahne ktorákoľvek z nich, automatické pravidlá sa zastavia do konca mesiaca. **To, o čo požiadate sami, sa nikdy nezastaví.**

## Jazykové modely {#language-models}

Modely, ktoré čítajú prepis a píšu o ňom. Stlačením **Pridať** model pridáte. Každý je uvedený so svojím názvom a pod ním s identifikátorom modelu a adresou svojej služby, napríklad `qwen3-32b · http://llm.local:8000/v1`. Ten označený ako **Predvolený** sa používa predvolene. Tlačidlo vo formulári modelu overí, že služba naozaj odpovedá, skôr než sa na ňu spoľahnete.

- Model **na vlastnom počítači** drží každý rozhovor v budove a nestojí nič.
- Model v cloude — OpenAI, Claude, Mistral, DeepSeek, Groq a ďalšie — sa účtuje za použitie. Program ukazuje cenu každého volania v tokenoch aj v peniazoch.

## Pokyny {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Nastavenia → Spracovanie: pokyny" />

*To, o čo sú modely žiadané.* Každý pokyn prišiel s programom a každý je váš na zmenu — aj na vrátenie. Každý je uvedený so svojím názvom a pod ním s tým, čo píše a v akej forme. Forma — **Odpoveď**, **Položky**, **Štítky**, **JSON**, **Próza**, **Signály** alebo **Kritériá** — rozhoduje, ako sa odpoveď uchová a zobrazí. Pokyny sú opísané v [Personal Prompt Studio](prompt-studio.md). **Pridať** vytvorí vlastný pokyn.

## Pravidlá {#rules}

<Shot name="12c_settings_processing_rules" alt="Nastavenia → Spracovanie: pravidlá" />

*To, čo beží samo, v tomto poradí. Každé sa spustí najviac raz na hovor.* Pravidlo je riadok so začiarkavacím políčkom, ktoré ho zapína alebo vypína, s jeho názvom a pod ním s tým, čo robí. **▲** a **▼** menia poradie. Program prichádza s ôsmimi:

| Pravidlo | Čo robí | Kedy |
| --- | --- | --- |
| **Prepísať každý hovor** | Prepíše ho. | vždy |
| **Zhrnúť ho** | Pýta sa modelu: **Zhrnutie**. | vždy |
| **Skrátiť ho na jeden riadok** | Pýta sa modelu: **Zhrnutie na jeden riadok**. | vždy |
| **Zaradiť ho do kategórie** | Pýta sa modelu: **Kategória**. | vždy |
| **Označiť ho** | Pýta sa modelu: **Štítky**. | vždy |
| **Zdvihnúť, čo stojí za pohľad** | Pýta sa modelu: **Varovné signály**. | vždy |
| **Posúdiť ho, ak šlo o predaj** | Pýta sa modelu: **Kvalita predaja**. | iba ak je kategória **Predaj** |
| **Posúdiť ho, ak šlo o podporu** | Pýta sa modelu: **Kvalita podpory**. | iba ak je kategória **Podpora** |

Na poradí záleží: posledné dve pravidlá potrebujú kategóriu, ktorú nastavilo pravidlo pred nimi. **Pridať** vytvorí vlastné pravidlo.

## Predvolené {#defaults}

**Obnoviť predvolené** vráti pokyny a pravidlá do stavu, v akom prišli s programom, v aktuálnom jazyku rozhrania. Vaše jazykové modely zostanú nedotknuté.

Pokyny a pravidlá, ktoré prišli s programom, zostanú pri zmene jazyka rozhrania v jazyku, v akom boli; **Obnoviť predvolené** ich prenesie do nového. Každý pokyn je potom vpravo označený ako *zmenené*.
