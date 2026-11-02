---
title: Personal Prompt Studio
sidebar_position: 3
description: Pokyny, které dělají zápisy z vašich rozhovorů, pravidla, která je spouštějí, a jak si je přizpůsobit.
---

**Personal Prompt Studio** je část AI Softphone, která dělá zápisy z vašich rozhovorů po vašem. Zápis vytvářejí pokyny (prompty): program jich přináší jedenáct, připravených k použití, jakmile je připojen přepis a jazykový model, a můžete je měnit běžnou řečí, duplikovat a přidávat vlastní. Jsou uvedeny pod **Pokyny** v [Nastavení → Zpracování](processing.md#prompts).

Vaše LLM, váš klíč, vaše kontrola: připojte model, který preferujete, s vlastním klíčem, přes podporovanou službu nebo kompatibilní API — nebo model nasazený uvnitř vaší organizace. S [přepisem](transcription.md#your-own-models) na vlastním hardwaru zůstane ve vašem prostředí zvuk i přepisy.

<Shot name="12b_settings_processing_prompts" alt="Seznam pokynů v Nastavení → Zpracování" />

## Pokyny, které přicházejí s programem {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 obsahuje jedenáct promptů pro ukončené rozhovory a čtyři živé asistenty. Níže jsou dodávané texty v tomto jazyce; jazykové verze se mohou lišit.

| Pokyn | `code` | Tvar | Co píše |
| --- | --- | --- | --- |
| **Shrnutí** | `summary` | Próza | Hlavní body, rozhodnutí a další kroky v jednom krátkém odstavci. |
| **Shrnutí na jeden řádek** | `super-summary` | Próza | Krátký titulek, podle kterého rozhovor v seznamu poznáte. |
| **Úkoly** | `action-items` | Položky | Kdo se zavázal co udělat a dokdy, s jeho vlastními slovy. |
| **Témata** | `topics` | Položky | Probíraná témata v několika slovech. |
| **Jména a čísla** | `entities` | JSON | Lidé, firmy, data, částky a odkazy. |
| **Kategorie** | `categorise` | Štítky | Zařadí rozhovor do jedné z vašich [kategorií](dictionaries.md). |
| **Štítky** | `tags` | Štítky | Dá mu vaše [štítky](dictionaries.md), aby se dal později najít. |
| **Varovné signály** | `red-flags` | Signály | Problémy s důkazem a časem v rozhovoru. |
| **Otázka k tomuto hovoru** | `qa` | Odpověď | Odpoví na otázku, kterou položíte k jednomu rozhovoru, z jeho přepisu. |
| **Kvalita prodeje** | `sales-quality` | Kritéria | Posoudí rozhovor podle prodejních kritérií, která můžete upravit. |
| **Kvalita podpory** | `support-quality` | Kritéria | Posoudí, jak dobře byl problém pochopen a vyřešen. |

Tvary jsou pevné podoby odpovědi, díky kterým ji program může uložit a později prohledávat: **Štítky** jsou kódy z jednoho z vašich seznamů, **Signály** jsou kódy se závažností, **Kritéria** jsou skóre se zdůvodněním a skórem pro každé kritérium, **Odpověď** je odpověď se slovy, o která se opírá. Instrukce, které modelu tvar popisují, jsou uloženy ve [Slovnících](dictionaries.md#instructions).

I pomocníci [našeptávače](../interface/prompter.md) jsou pokyny, spouštěné na každou repliku během hovoru, ne na skončený rozhovor. Jsou ve vlastním seznamu, v části [Pomocníci](prompter.md#assistants) v **Nastavení → Našeptávač**.

Hovory uskutečněné v AI Softphone, schůzky [zachycené](/capture/) z počítače i importované nahrávky procházejí stejnými pokyny, jakmile mají přepis.

Úkoly zaznamenávají, na čem se strany dohodly — neposílají za vás zprávy, nerezervují návštěvy ani nezakládají tikety.

## Přizpůsobení {#making-it-yours}

- Změňte, na co se pokyn ptá, běžnou řečí: co hledá, formát odpovědi a jazyk, ve kterém odpovídá.
- Zduplikujte pokyn a vyzkoušejte variantu.
- Vyberte model pro každý pokyn — na vlastním počítači nebo v cloudu.
- Nastavte pořadí, ve kterém pokyny běží, zapínejte je a vypínejte a podmiňujte — to se dělá [pravidly](processing.md#rules): například hodnocení prodeje běží jen u hovorů zařazených jako **Prodej**.
- Vlastní kategorie, štítky a varovné signály držte ve [Slovnících](dictionaries.md).
- Omezte náklady [měsíčními limity](processing.md#spending).

Původní pokyny a pravidla obnovíte tlačítkem **Obnovit výchozí** v části **Výchozí** v [Nastavení → Zpracování](processing.md#defaults).

## Role modelu {#role-and-task}

`system` určuje chování modelu; `body` popisuje úkol. Tvar a jazyk odpovědi se předávají samostatně instrukcemi ze seznamů.

Prázdný seznam úkolů nebo příznaků může být správný výsledek. Chybějící odpovědné osoby ani termíny se nesmějí vymýšlet. Odpovědi na otázky musí vycházet pouze z přepisu.

[Formáty odpovědí](dictionaries.md#response-formats)

## Zástupné symboly {#placeholders}

Prvek promptu, který se nahrazuje údaji rozhovoru.

| Zástupný symbol | Význam |
| --- | --- |
| `{{transcript}}` | Přepis, jedna promluva na řádek, časy v milisekundách |
| `{{duration}}` | Délka rozhovoru |
| `{{direction}}` | Příchozí nebo odchozí hovor |
| `{{party}}` | Jméno kontaktu nebo číslo |
| `{{language}}` | Jazyk odpovědi |
| `{{question}}` | Otázka uživatele |
| `{{categories}}` | Seznam kategorií |
| `{{tags}}` | Seznam štítků |
| `{{red_flags}}` | Seznam varovných příznaků |
| `{{artifact:summary}}` | Dříve vytvořené shrnutí |
| `{{conversation}}` | Kontext shromážděný živým nápovědníkem |
| `{{reply}}` | Poslední promluva druhé strany; pouze pro živou nápovědu |

Spusťte `summary` před `super-summary`, který používá `{{artifact:summary}}`. Před hodnocením kvality spusťte `categorise`: `sales-quality` vyžaduje kategorii `sales`, `support-quality` kategorii `support`.

[Dodávaní asistenti](prompter.md#assistant-templates)

## Výchozí texty promptů {#standard-templates}

AI Softphone 1.1.11 obsahuje jedenáct promptů pro ukončené rozhovory a čtyři živé asistenty. Níže jsou dodávané texty v tomto jazyce; jazykové verze se mohou lišit.

### Shrnutí (`summary`) {#summary}

**Tvar odpovědi:** `plain`.

**Role (`system`)**

```text
Čtete přepisy telefonních hovorů a píšete o nich krátká, věcná shrnutí. Nikdy nehádáte to, co nezaznělo, a nikdy nepřidáváte rady.
```

**Úkol (`body`)**

```text
Shrňte tento telefonní hovor do jednoho krátkého odstavce: o co šlo, co se rozhodlo a co bude dál. Trval {{duration}} a byl {{direction}}, s {{party}}.

{{transcript}}
```

### Shrnutí na jeden řádek (`super-summary`) {#super-summary}

**Tvar odpovědi:** `plain`.

**Role (`system`)**

```text
Čtete přepisy telefonních hovorů a každý zkracujete na jediné sousloví. Nikdy nehádáte a nikdy nepřidáváte rady.
```

**Úkol (`body`)**

```text
Zkraťte tento telefonní hovor na jedno sousloví nejvýše o dvanácti slovech — takové, jaké by stálo v tabulce vedle jména volajícího. Bez tečky, bez uvozovek.

{{artifact:summary}}

{{transcript}}
```

### Úkoly (`action-items`) {#action-items}

**Tvar odpovědi:** `list`.

**Role (`system`)**

```text
Čtete přepisy telefonních hovorů a vypisujete, k čemu se kdo zavázal. Vypisujete jen to, co skutečně zaznělo; nikdy si nevymýšlíte úkol, odpovědného ani termín.
```

**Úkol (`body`)**

```text
Vypište, k čemu se kdokoli v tomto hovoru zavázal. Uveďte, kdo to má udělat, pokud to zaznělo, a do kdy, pokud to zaznělo. Pokud se nikdo k ničemu nezavázal, odpovězte prázdným seznamem.

{{transcript}}
```

### Témata (`topics`) {#topics}

**Tvar odpovědi:** `list`.

**Role (`system`)**

```text
Čtete přepisy telefonních hovorů a pojmenováváte, o čem byly.
```

**Úkol (`body`)**

```text
Vypište věci, které tento hovor skutečně probral, nejvýše šest, každou v několika slovech. Odpovědného a termín nechte prázdné — tady nic neznamenají.

{{transcript}}
```

### Jména a čísla (`entities`) {#entities}

**Tvar odpovědi:** `json`.

**Role (`system`)**

```text
Čtete přepisy telefonních hovorů a vybíráte z nich, co v nich bylo jmenováno. Nikdy nehádáte pravopis a nikdy nepřidáváte to, co nezaznělo.
```

**Úkol (`body`)**

```text
Vyberte, co v tomto hovoru zaznělo jménem, jako JSON přesně tohoto tvaru:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Každé je seznam řetězců, zapsaných tak, jak zazněly. Raději nechte seznam prázdný, než abyste hádali.

{{transcript}}
```

### Kategorie (`categorise`) {#categorise}

**Tvar odpovědi:** `labels`.

**Role (`system`)**

```text
Zařazujete telefonní hovory do jedné z kategorií, které dostanete. Vybíráte ze seznamu a z ničeho jiného.
```

**Úkol (`body`)**

```text
Zařaďte tento hovor přesně do jedné z těchto kategorií. Odpovězte jejím kódem.

{{categories}}
{{transcript}}
```

### Štítky (`tags`) {#tags}

**Tvar odpovědi:** `labels`.

**Role (`system`)**

```text
Označujete telefonní hovory štítky, které dostanete. Vybíráte ze seznamu a z ničeho jiného, a štítek raději vynecháte, než abyste ho natahovali.
```

**Úkol (`body`)**

```text
Které z nich o tomto hovoru platí? Odpovězte jejich kódy, nebo prázdným seznamem, pokud žádný.

{{tags}}
{{transcript}}
```

### Varovné signály (`red-flags`) {#red-flags}

**Tvar odpovědi:** `flags`.

**Role (`system`)**

```text
Čtete přepisy telefonních hovorů a zvedáte jen to, co vám bylo zadáno hledat. Citujete slova, o která se každý opírá, a nezvedáte nic, co neumíte odcitovat.
```

**Úkol (`body`)**

```text
Zvedněte ty z nich, které tento hovor ukazuje. U každého odcitujte slova, o která se opírá, a uveďte okamžik v milisekundách, kdy zazněla. Raději nezvedejte nic, než abyste natahovali definici.

{{red_flags}}
{{transcript}}
```

### Otázka k tomuto hovoru (`qa`) {#qa}

**Tvar odpovědi:** `qa`.

**Role (`system`)**

```text
Odpovídáte na otázky o jednom telefonním hovoru, z jeho přepisu a z ničeho jiného. Tam, kde to hovor neříká, to rovnou řeknete, místo abyste hádali.
```

**Úkol (`body`)**

```text
{{question}}

{{transcript}}
```

### Kvalita prodeje (`sales-quality`) {#sales-quality}

**Tvar odpovědi:** `rubric`.

**Role (`system`)**

```text
Posuzujete, jak obchodník vedl telefonní hovor. Posuzujete jen to, co ukazuje přepis, nikdy nepředpokládáte, co bylo před ním nebo po něm, a jste stejně přísní na hovor, který dopadl dobře, jako na ten, který ne.
```

**Úkol (`body`)**

```text
Posuďte naši stranu tohoto hovoru — operátora — podle těchto kritérií a žádných jiných:
- pozdrav: představil se a řekl firmu?
- zjišťování: zjistil, co zákazník doopravdy chtěl?
- námitky: odpověděl na to, co zákazník nadnesl, místo aby mluvil mimo?
- hodnota: řekl, co zákazník dostane, a ne jen kolik to stojí?
- další krok: skončil hovor něčím konkrétním?

{{transcript}}
```

### Kvalita podpory (`support-quality`) {#support-quality}

**Tvar odpovědi:** `rubric`.

**Role (`system`)**

```text
Posuzujete, jak pracovník podpory vedl telefonní hovor. Posuzujete jen to, co ukazuje přepis, a víc než na příjemnost hovoru hledíte na to, zda se zákazníkův problém opravdu vyřešil.
```

**Úkol (`body`)**

```text
Posuďte naši stranu tohoto hovoru — operátora — podle těchto kritérií a žádných jiných:
- pozdrav: představil se a ověřil, s kým mluví?
- porozumění: zjistil, co je doopravdy špatně, než začal odpovídat?
- vyřešení: vyřešil se problém, nebo padl konkrétní další krok?
- tón: zůstal klidný a zdvořilý, zvlášť tam, kde zákazník ne?
- závěr: ověřil, že je zákazník spokojený, než hovor ukončil?

{{transcript}}
```
