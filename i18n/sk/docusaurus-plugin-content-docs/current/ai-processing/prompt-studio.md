---
title: Personal Prompt Studio
sidebar_position: 3
description: Pokyny, ktoré spracúvajú vaše rozhovory, pravidlá, ktoré ich spúšťajú, a ako si ich prispôsobiť.
---

**Personal Prompt Studio** je časť AI Softphone, ktorá spracúva vaše rozhovory po vašom. Spracovanie robia pokyny: program prichádza s jedenástimi, pripravenými na použitie, hneď ako je pripojený prepis a jazykový model, a vy ich môžete meniť bežným jazykom, duplikovať a pridávať vlastné. Sú uvedené v časti **Pokyny** v [Nastavenia → Spracovanie](processing.md#prompts).

Váš LLM, váš kľúč, vaša kontrola: pripojte model, ktorý uprednostňujete, s vlastným kľúčom, cez podporovanú službu alebo kompatibilné API — alebo model nasadený vo vašej organizácii. Keď aj [prepis](transcription.md#your-own-models) beží na vlastnom hardvéri, zvuk aj prepisy zostanú vo vašom prostredí.

<Shot name="12b_settings_processing_prompts" alt="Zoznam pokynov v Nastavenia → Spracovanie" />

## Pokyny, ktoré prichádzajú s programom {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 obsahuje jedenásť promptov pre ukončené rozhovory a štyroch živých asistentov. Nižšie sú dodávané texty v tomto jazyku; jazykové verzie sa môžu líšiť.

| Pokyn | `code` | Forma | Čo píše |
| --- | --- | --- | --- |
| **Zhrnutie** | `summary` | Próza | Hlavné body, rozhodnutia a ďalšie kroky v jednom krátkom odseku. |
| **Zhrnutie na jeden riadok** | `super-summary` | Próza | Krátky názov, podľa ktorého rozhovor spoznáte v zozname. |
| **Úlohy** | `action-items` | Položky | Kto sa dohodol, že čo urobí a kedy, so slovami, ktoré povedal. |
| **Témy** | `topics` | Položky | Témy, ktoré sa preberali, niekoľkými slovami. |
| **Mená a čísla** | `entities` | JSON | Ľudia, firmy, dátumy, sumy a odkazy. |
| **Kategória** | `categorise` | Štítky | Zaradí rozhovor do jednej z vašich [kategórií](dictionaries.md). |
| **Štítky** | `tags` | Štítky | Pridá mu vaše [štítky](dictionaries.md), aby sa dal neskôr nájsť. |
| **Varovné signály** | `red-flags` | Signály | Problémy, s dôkazom a časom v rozhovore. |
| **Otázka k tomuto hovoru** | `qa` | Odpoveď | Odpovedá na otázku, ktorú položíte o jednom rozhovore, na základe jeho prepisu. |
| **Kvalita predaja** | `sales-quality` | Kritériá | Posúdi rozhovor podľa kritérií predaja, ktoré môžete upraviť. |
| **Kvalita podpory** | `support-quality` | Kritériá | Posúdi, ako dobre bol problém pochopený a vyriešený. |

Formy sú pevné tvary odpovede, a práve to umožňuje programu odpoveď uchovať a neskôr v nej hľadať: **Štítky** sú kódy z jedného z vašich zoznamov, **Signály** sú kódy so závažnosťou, **Kritériá** sú hodnotenie s dôvodom a hodnotením každého kritéria, **Odpoveď** je odpoveď so slovami, o ktoré sa opiera. Pokyny, ktoré modelu hovoria tvar, sa uchovávajú v [Slovníkoch](dictionaries.md#instructions).

Aj pomocníci [našepkávača](../interface/prompter.md) sú pokyny, spúšťané na každú repliku počas hovoru, nie na ukončený rozhovor. Uchovávajú sa vo vlastnom zozname, v časti [Pomocníci](prompter.md#assistants) v **Nastavenia → Našepkávač**.

Hovory uskutočnené v AI Softphone, stretnutia [zachytené](/capture/) z počítača a importované nahrávky prechádzajú rovnakými pokynmi, hneď ako majú prepis.

Úlohy zaznamenávajú, na čom sa dohodlo — neposielajú za vás správy, nerezervujú návštevy ani nevytvárajú tikety.

## Prispôsobenie {#making-it-yours}

- Zmeňte, o čo pokyn žiada, bežným jazykom: čo hľadá, formát odpovede a jazyk, v ktorom odpovedá.
- Duplikujte pokyn a vyskúšajte variant.
- Vyberte model pre každý pokyn — na vlastnom počítači alebo v cloude.
- Nastavte poradie, v akom pokyny bežia, zapínajte a vypínajte ich a robte ich podmienenými — to sa robí [pravidlami](processing.md#rules): napríklad posúdenie predaja beží iba pri hovoroch zaradených ako **Predaj**.
- Udržiavajte vlastné kategórie, štítky a varovné signály v [Slovníkoch](dictionaries.md).
- Obmedzte náklady [mesačnými hranicami](processing.md#spending).

Pôvodné pokyny a pravidlá sa dajú obnoviť tlačidlom **Obnoviť predvolené** v časti **Predvolené** v [Nastavenia → Spracovanie](processing.md#defaults).

## Rola modelu {#role-and-task}

`system` určuje správanie modelu; `body` opisuje úlohu. Tvar a jazyk odpovede sa zadávajú samostatne pokynmi zo zoznamov.

Prázdny zoznam úloh alebo príznakov môže byť správny výsledok. Chýbajúce zodpovedné osoby a termíny sa nesmú vymýšľať. Odpovede na otázky musia vychádzať iba z prepisu.

[Formáty odpovedí](dictionaries.md#response-formats)

## Zástupné symboly {#placeholders}

Prvok promptu, ktorý sa nahrádza údajmi rozhovoru.

| Zástupný symbol | Význam |
| --- | --- |
| `{{transcript}}` | Prepis, jedna replika na riadok, časy v milisekundách |
| `{{duration}}` | Dĺžka rozhovoru |
| `{{direction}}` | Prichádzajúci alebo odchádzajúci hovor |
| `{{party}}` | Meno kontaktu alebo číslo |
| `{{language}}` | Jazyk odpovede |
| `{{question}}` | Otázka používateľa |
| `{{categories}}` | Zoznam kategórií |
| `{{tags}}` | Zoznam štítkov |
| `{{red_flags}}` | Zoznam varovných príznakov |
| `{{artifact:summary}}` | Skôr vytvorené zhrnutie |
| `{{conversation}}` | Kontext zhromaždený živým pomocníkom |
| `{{reply}}` | Posledná replika druhej strany; len pre živého pomocníka |

Spustite `summary` pred `super-summary`, ktorý používa `{{artifact:summary}}`. Pred hodnotením kvality spustite `categorise`: `sales-quality` vyžaduje kategóriu `sales`, `support-quality` kategóriu `support`.

[Dodávaní asistenti](prompter.md#assistant-templates)

## Predvolené texty promptov {#standard-templates}

AI Softphone 1.1.11 obsahuje jedenásť promptov pre ukončené rozhovory a štyroch živých asistentov. Nižšie sú dodávané texty v tomto jazyku; jazykové verzie sa môžu líšiť.

### Zhrnutie (`summary`) {#summary}

**Tvar odpovede:** `plain`.

**Rola (`system`)**

```text
Čítate prepisy telefonických hovorov a píšete o nich krátke, vecné zhrnutia. Nikdy nehádate to, čo nezaznelo, a nikdy nepridávate rady.
```

**Úloha (`body`)**

```text
Zhrňte tento telefonický hovor do jedného krátkeho odseku: o čo išlo, čo sa rozhodlo a čo bude ďalej. Trval {{duration}} a bol {{direction}}, s {{party}}.

{{transcript}}
```

### Zhrnutie na jeden riadok (`super-summary`) {#super-summary}

**Tvar odpovede:** `plain`.

**Rola (`system`)**

```text
Čítate prepisy telefonických hovorov a každý skracujete na jediné slovné spojenie. Nikdy nehádate a nikdy nepridávate rady.
```

**Úloha (`body`)**

```text
Skráťte tento telefonický hovor na jedno slovné spojenie najviac o dvanástich slovách — také, aké by stálo v tabuľke vedľa mena volajúceho. Bez bodky, bez úvodzoviek.

{{artifact:summary}}

{{transcript}}
```

### Úlohy (`action-items`) {#action-items}

**Tvar odpovede:** `list`.

**Rola (`system`)**

```text
Čítate prepisy telefonických hovorov a vypisujete, k čomu sa kto zaviazal. Vypisujete len to, čo naozaj zaznelo; nikdy si nevymýšľate úlohu, zodpovedného ani termín.
```

**Úloha (`body`)**

```text
Vypíšte, k čomu sa ktokoľvek v tomto hovore zaviazal. Uveďte, kto to má urobiť, ak to zaznelo, a dokedy, ak to zaznelo. Ak sa nikto k ničomu nezaviazal, odpovedzte prázdnym zoznamom.

{{transcript}}
```

### Témy (`topics`) {#topics}

**Tvar odpovede:** `list`.

**Rola (`system`)**

```text
Čítate prepisy telefonických hovorov a pomenúvate, o čom boli.
```

**Úloha (`body`)**

```text
Vypíšte veci, ktoré tento hovor naozaj prebral, najviac šesť, každú v niekoľkých slovách. Zodpovedného a termín nechajte prázdne — tu nič neznamenajú.

{{transcript}}
```

### Mená a čísla (`entities`) {#entities}

**Tvar odpovede:** `json`.

**Rola (`system`)**

```text
Čítate prepisy telefonických hovorov a vyberáte z nich, čo v nich bolo menované. Nikdy nehádate pravopis a nikdy nepridávate to, čo nezaznelo.
```

**Úloha (`body`)**

```text
Vyberte, čo v tomto hovore zaznelo menom, ako JSON presne tohto tvaru:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Každé je zoznam reťazcov, zapísaných tak, ako zazneli. Radšej nechajte zoznam prázdny, než by ste hádali.

{{transcript}}
```

### Kategória (`categorise`) {#categorise}

**Tvar odpovede:** `labels`.

**Rola (`system`)**

```text
Zaraďujete telefonické hovory do jednej z kategórií, ktoré dostanete. Vyberáte zo zoznamu a z ničoho iného.
```

**Úloha (`body`)**

```text
Zaraďte tento hovor presne do jednej z týchto kategórií. Odpovedzte jej kódom.

{{categories}}
{{transcript}}
```

### Štítky (`tags`) {#tags}

**Tvar odpovede:** `labels`.

**Rola (`system`)**

```text
Označujete telefonické hovory štítkami, ktoré dostanete. Vyberáte zo zoznamu a z ničoho iného, a štítok radšej vynecháte, než by ste ho naťahovali.
```

**Úloha (`body`)**

```text
Ktoré z nich o tomto hovore platia? Odpovedzte ich kódmi, alebo prázdnym zoznamom, ak žiadny.

{{tags}}
{{transcript}}
```

### Varovné signály (`red-flags`) {#red-flags}

**Tvar odpovede:** `flags`.

**Rola (`system`)**

```text
Čítate prepisy telefonických hovorov a dvíhate len to, čo vám bolo zadané hľadať. Citujete slová, o ktoré sa každý opiera, a nedvíhate nič, čo neviete odcitovať.
```

**Úloha (`body`)**

```text
Zdvihnite tie z nich, ktoré tento hovor ukazuje. Pri každom odcitujte slová, o ktoré sa opiera, a uveďte okamih v milisekundách, keď zazneli. Radšej nedvíhajte nič, než by ste naťahovali definíciu.

{{red_flags}}
{{transcript}}
```

### Otázka k tomuto hovoru (`qa`) {#qa}

**Tvar odpovede:** `qa`.

**Rola (`system`)**

```text
Odpovedáte na otázky o jednom telefonickom hovore, z jeho prepisu a z ničoho iného. Tam, kde to hovor nehovorí, to poviete rovno, namiesto toho, aby ste hádali.
```

**Úloha (`body`)**

```text
{{question}}

{{transcript}}
```

### Kvalita predaja (`sales-quality`) {#sales-quality}

**Tvar odpovede:** `rubric`.

**Rola (`system`)**

```text
Posudzujete, ako obchodník viedol telefonický hovor. Posudzujete len to, čo ukazuje prepis, nikdy nepredpokladáte, čo bolo pred ním alebo po ňom, a ste rovnako prísni na hovor, ktorý dopadol dobre, ako na ten, ktorý nie.
```

**Úloha (`body`)**

```text
Posúďte našu stranu tohto hovoru — operátora — podľa týchto kritérií a žiadnych iných:
- pozdrav: predstavil sa a povedal firmu?
- zisťovanie: zistil, čo zákazník naozaj chcel?
- námietky: odpovedal na to, čo zákazník nadniesol, namiesto toho, aby hovoril mimo?
- hodnota: povedal, čo zákazník dostane, a nie len koľko to stojí?
- ďalší krok: skončil hovor niečím konkrétnym?

{{transcript}}
```

### Kvalita podpory (`support-quality`) {#support-quality}

**Tvar odpovede:** `rubric`.

**Rola (`system`)**

```text
Posudzujete, ako pracovník podpory viedol telefonický hovor. Posudzujete len to, čo ukazuje prepis, a viac než na príjemnosť hovoru hľadíte na to, či sa zákazníkov problém naozaj vyriešil.
```

**Úloha (`body`)**

```text
Posúďte našu stranu tohto hovoru — operátora — podľa týchto kritérií a žiadnych iných:
- pozdrav: predstavil sa a overil, s kým hovorí?
- porozumenie: zistil, čo je naozaj zle, než začal odpovedať?
- vyriešenie: vyriešil sa problém, alebo padol konkrétny ďalší krok?
- tón: zostal pokojný a zdvorilý, najmä tam, kde zákazník nie?
- záver: overil, že je zákazník spokojný, než hovor ukončil?

{{transcript}}
```
