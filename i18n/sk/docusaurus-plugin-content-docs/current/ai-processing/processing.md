---
title: Spracovanie
sidebar_position: 2
description: Automatické spracovanie rozhovorov, jazykové modely, pokyny, pravidlá, ktoré ich spúšťajú, a mesačné hranice výdavkov.
---

**Nastavenia → Spracovanie** rozhoduje, čo sa stane s rozhovorom, keď je nahraný, ktorý model robí prácu a koľko to smie stáť.

<Shot name="12_settings_processing" alt="Nastavenia → Spracovanie" />

## Spracovávať hovory automaticky {#process-conversations-automatically}

- **Vypnuté:** nič sa nestane, kým o to nepožiadate v [okne Nahrávky](../interface/recordings.md).
- **Zapnuté:** [pravidlá](#rules) nižšie bežia samy. Práve to premení rozhovor na zhrnutie, kategóriu a všetko ostatné bez toho, aby ktokoľvek čokoľvek stlačil. Model v cloude účtuje za každý z týchto krokov.

## Jazykové modely {#language-models}

Modely, ktoré čítajú prepis a píšu o ňom. Stlačením **Pridať** model pridáte. Každý je uvedený so svojím názvom a pod ním s identifikátorom modelu a adresou svojej služby, napríklad `qwen3-32b · http://localhost:8000/v1`. Ten označený ako **predvolený** — na obrázku **QWEN**, model na tomto počítači — sa používa predvolene: v pokynoch a v tých pomocníkoch [našepkávača](prompter.md), ktorí neuvádzajú vlastný model. **Vyskúšať** vo formulári modelu overí, že služba naozaj odpovedá, skôr než sa na ňu spoľahnete.

- Model **na vlastnom počítači** drží každý rozhovor v budove a nestojí nič.
- Model v cloude — OpenAI, Claude, Mistral, DeepSeek, Groq a ďalšie — sa účtuje za použitie. Program ukazuje cenu každého volania v tokenoch aj v peniazoch.

## Pokyny {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Nastavenia → Spracovanie: pokyny" />

*To, o čo sú modely žiadané.* Každý pokyn prišiel s programom a každý je váš na zmenu — aj na vrátenie. Každý je uvedený so svojím názvom a pod ním s tým, čo píše a v akej forme; **▲** a **▼** menia poradie zoznamu. Forma — **Odpoveď**, **Položky**, **Štítky**, **JSON**, **Próza**, **Signály** alebo **Kritériá** — rozhoduje, ako sa odpoveď uchová a zobrazí. Pokyny sú opísané v [Personal Prompt Studio](prompt-studio.md). **Pridať** vytvorí vlastný pokyn.

## Pravidlá {#rules}

<Shot name="12c_settings_processing_rules" alt="Nastavenia → Spracovanie: pravidlá" />

*To, čo beží samo, v tomto poradí. Každé sa spustí najviac raz na hovor.* Pravidlo je riadok so začiarkavacím políčkom, ktoré ho zapína alebo vypína, s jeho názvom a pod ním s tým, čo robí. **▲** a **▼** menia poradie. Program prichádza s ôsmimi:

| Pravidlo | `code` | Čo robí | `prompt` | Kedy |
| --- | --- | --- | --- | --- |
| **Prepísať každý hovor** | `transcribe` | Prepíše ho. | — | vždy |
| **Zhrnúť ho** | `summary` | Pýta sa modelu: **Zhrnutie**. | `summary` | vždy |
| **Skrátiť ho na jeden riadok** | `super-summary` | Pýta sa modelu: **Zhrnutie na jeden riadok**. | `super-summary` | vždy |
| **Zaradiť ho do kategórie** | `categorise` | Pýta sa modelu: **Kategória**. | `categorise` | vždy |
| **Označiť ho** | `tags` | Pýta sa modelu: **Štítky**. | `tags` | vždy |
| **Zdvihnúť, čo stojí za pohľad** | `red-flags` | Pýta sa modelu: **Varovné signály**. | `red-flags` | vždy |
| **Posúdiť ho, ak šlo o predaj** | `sales-quality` | Pýta sa modelu: **Kvalita predaja**. | `sales-quality` | iba ak je kategória **Predaj** |
| **Posúdiť ho, ak šlo o podporu** | `support-quality` | Pýta sa modelu: **Kvalita podpory**. | `support-quality` | iba ak je kategória **Podpora** |

Na poradí záleží: posledné dve pravidlá potrebujú kategóriu, ktorú nastavilo pravidlo pred nimi. **Pridať** vytvorí vlastné pravidlo.

## Výdavky {#spending}

<Shot name="12d_settings_processing_spending" alt="Nastavenia → Spracovanie: výdavky za mesiac a dve hranice" />

V časti **Výdavky** program ukazuje, koľko sa tento mesiac minulo a na koľko požiadaviek — na obrázku *Tento mesiac sa nič nespracovalo* a napríklad *Tento mesiac: 40 492 tokenov, v 84 požiadavkách, bez poplatku*, keď sa už niečo spracovalo.

| Pole | Význam |
| --- | --- |
| **Hranica peňazí, mesačne** | Najviac, koľko smú modely stáť za mesiac. |
| **Hranica tokenov, mesačne** | Najviac tokenov, koľko smú za mesiac použiť. |

Hranice sú dve, lebo mesiac sa dá počítať v dvoch veciach. Obe sú prázdne, kým ich nevyplníte. Keď sa dosiahne ktorákoľvek z nich, automatické pravidlá sa zastavia do konca mesiaca. **To, o čo požiadate sami, sa nikdy nezastaví.** [Našepkávač](prompter.md#spending) má vlastné stropy, aby ho mesiac zhrnutí nemohol umlčať uprostred rozhovoru.

## Predvolené {#defaults}

**Obnoviť predvolené** vráti pokyny a pravidlá do stavu, v akom prišli s programom, v aktuálnom jazyku rozhrania. Vaše jazykové modely zostanú nedotknuté.

Pokyny a pravidlá, ktoré prišli s programom, zostanú pri zmene jazyka rozhrania v jazyku, v akom boli; **Obnoviť predvolené** ich prenesie do nového. Každý pokyn je potom vpravo označený ako *zmenené*.

## Predvolené spúšťanie {#default-execution}

Spustite `summary` pred `super-summary`, ktorý používa `{{artifact:summary}}`. Pred hodnotením kvality spustite `categorise`: `sales-quality` vyžaduje kategóriu `sales`, `support-quality` kategóriu `support`.

Pre `action-items`, `topics`, `entities` ani `qa` nie sú predvolené automatické pravidlá. Spustite prompt ručne alebo pridajte vhodné pravidlo; pri spustení `qa` zadajte otázku.

Predvolená sada sa uloží pri prvom použití. Úprava exportu Markdown nemení aplikáciu: upravte kartu promptu alebo obnovte predvolené nastavenia.

[Predvolené texty promptov](prompt-studio.md#standard-templates)
