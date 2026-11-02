---
title: Personal Prompt Studio
sidebar_position: 3
description: De prompter, der opsummerer dine samtaler, de regler, der kører dem, og hvordan du gør dem til dine egne.
---

**Personal Prompt Studio** er den del af AI Softphone, der opsummerer dine samtaler på din måde. Opsummeringen laves af prompter: programmet leveres med elleve, klar til brug, så snart transskription og en sprogmodel er forbundet, og du kan ændre dem i almindeligt sprog, kopiere dem og tilføje dine egne. De står under **Prompter** i [Indstillinger → Behandling](processing.md#prompts).

Din LLM, din nøgle, din kontrol: forbind den model, du foretrækker, med din egen nøgle, gennem en understøttet tjeneste eller et kompatibelt API — eller en model, der kører i din organisation. Med [transskription](transcription.md#your-own-models) også på din egen hardware bliver både lyden og udskrifterne i dit miljø.

<Shot name="12b_settings_processing_prompts" alt="Listen over prompter i Indstillinger → Behandling" />

## De prompter, der følger med programmet {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 indeholder elleve prompts til afsluttede samtaler og fire liveassistenter. Her vises de medfølgende tekster på dette sprog; sprogversionerne kan være forskellige.

| Prompt | `code` | Form | Hvad den skriver |
| --- | --- | --- | --- |
| **Resumé** | `summary` | Løbende tekst | Hovedpunkterne, beslutningerne og de næste skridt i ét kort afsnit. |
| **Resumé på én linje** | `super-summary` | Løbende tekst | En kort titel, så samtalen kan genkendes i en liste. |
| **Opgaver** | `action-items` | Punkter | Hvem der lovede at gøre hvad, og hvornår, med de ord, der blev sagt. |
| **Emner** | `topics` | Punkter | De emner, der blev berørt, med få ord. |
| **Navne og tal** | `entities` | JSON | Personer, firmaer, datoer, beløb og referencer. |
| **Kategori** | `categorise` | Etiketter | Sorterer samtalen under en af dine [kategorier](dictionaries.md). |
| **Etiketter** | `tags` | Etiketter | Sætter dine [etiketter](dictionaries.md) på den, så den kan findes senere. |
| **Signaler** | `red-flags` | Signaler | Problemer, med beviset og tidspunktet i samtalen. |
| **Et spørgsmål om dette opkald** | `qa` | Svar | Besvarer et spørgsmål, du stiller om én samtale, ud fra dens udskrift. |
| **Salgskvalitet** | `sales-quality` | Kriterier | Gennemgår samtalen efter salgskriterier, som du kan redigere. |
| **Supportkvalitet** | `support-quality` | Kriterier | Vurderer, hvor godt problemet blev forstået og håndteret. |

Formerne er faste skabeloner for et svar, og det er det, der lader programmet gemme det og søge i det senere: **Etiketter** er koder fra en af dine lister, **Signaler** er koder med en alvorsgrad, **Kriterier** er en karakter med en begrundelse og en karakter for hvert kriterium, **Svar** er et svar med de ord, det bygger på. De instruktioner, der fortæller en model formen, gemmes i [Ordlister](dictionaries.md#instructions).

[Sufflørens](../interface/prompter.md) hjælpere er også prompter, der kører på hvert svar, mens et opkald står på, i stedet for på en afsluttet samtale. De står på deres egen liste, under [Hjælpere](prompter.md#assistants) i **Indstillinger → Sufflør**.

Opkald foretaget i AI Softphone, møder [opfanget](/capture/) fra computeren og importerede optagelser går alle gennem de samme prompter, når de har en udskrift.

Opgaver registrerer, hvad der blev aftalt — de sender ikke beskeder, booker ikke besøg og opretter ikke sager for dig.

## Gør det til dit eget {#making-it-yours}

- Ændr, hvad en prompt beder om, i almindeligt sprog: hvad den leder efter, svarets format og det sprog, den svarer på.
- Kopiér en prompt for at prøve en variant.
- Vælg modellen for hver prompt — på din egen maskine eller i skyen.
- Bestem rækkefølgen, prompterne kører i, slå dem til og fra, og gør dem betingede — det gøres med [reglerne](processing.md#rules): for eksempel kører en salgsgennemgang kun på opkald, der er sorteret som **Salg**.
- Hold dine egne kategorier, etiketter og signaler i [Ordlister](dictionaries.md).
- Sæt loft over omkostningerne med de [månedlige grænser](processing.md#spending).

De oprindelige prompter og regler kan gendannes med **Gendan standardværdier** under **Standardværdier** i [Indstillinger → Behandling](processing.md#defaults).

## Modellens rolle {#role-and-task}

`system` bestemmer modellens adfærd; `body` beskriver opgaven. Svarform og sprog angives separat gennem instruktioner i listerne.

En tom liste over opgaver eller flag kan være korrekt. Manglende ansvarlige og datoer må ikke opfindes. Svar på spørgsmål skal udelukkende bygge på transskriptionen.

[Svarformater](dictionaries.md#response-formats)

## Pladsholdere {#placeholders}

Et element i prompten, der erstattes med samtaledata.

| Pladsholder | Betydning |
| --- | --- |
| `{{transcript}}` | Transskription, én ytring pr. linje, med tider i millisekunder |
| `{{duration}}` | Samtalens varighed |
| `{{direction}}` | Indgående eller udgående opkald |
| `{{party}}` | Kontaktens navn eller nummer |
| `{{language}}` | Svarsprog |
| `{{question}}` | Brugerens spørgsmål |
| `{{categories}}` | Kategoriliste |
| `{{tags}}` | Mærkatliste |
| `{{red_flags}}` | Liste over advarselsflag |
| `{{artifact:summary}}` | Tidligere genereret resumé |
| `{{conversation}}` | Kontekst indsamlet af den aktive sufflør |
| `{{reply}}` | Modpartens seneste ytring; kun til suffløren |

Kør `summary` før `super-summary`, som bruger `{{artifact:summary}}`. Kør `categorise` før kvalitetsvurderingen: `sales-quality` kræver `sales`, og `support-quality` kræver `support`.

[Medfølgende assistenter](prompter.md#assistant-templates)

## Standardtekster til prompts {#standard-templates}

AI Softphone 1.1.11 indeholder elleve prompts til afsluttede samtaler og fire liveassistenter. Her vises de medfølgende tekster på dette sprog; sprogversionerne kan være forskellige.

### Resumé (`summary`) {#summary}

**Svarform:** `plain`.

**Rolle (`system`)**

```text
Du læser udskrifter af telefonsamtaler og skriver korte, saglige resuméer af dem. Du gætter aldrig på noget, der ikke blev sagt, og du føjer aldrig råd til.
```

**Opgave (`body`)**

```text
Resumér denne telefonsamtale i ét kort afsnit: hvad den handlede om, hvad der blev besluttet, og hvad der sker derefter. Den varede {{duration}} og var {{direction}}, med {{party}}.

{{transcript}}
```

### Resumé på én linje (`super-summary`) {#super-summary}

**Svarform:** `plain`.

**Rolle (`system`)**

```text
Du læser udskrifter af telefonsamtaler og koger hver ned til én enkelt vending. Du gætter aldrig og føjer aldrig råd til.
```

**Opgave (`body`)**

```text
Kog denne telefonsamtale ned til én vending på højst tolv ord — den slags linje, der ville stå i en tabel ved siden af navnet på den, der ringede. Intet punktum, ingen anførselstegn.

{{artifact:summary}}

{{transcript}}
```

### Opgaver (`action-items`) {#action-items}

**Svarform:** `list`.

**Rolle (`system`)**

```text
Du læser udskrifter af telefonsamtaler og opregner, hvad nogen har påtaget sig at gøre. Du opregner kun det, der faktisk blev sagt; du opfinder aldrig en opgave, en ansvarlig eller en dato.
```

**Opgave (`body`)**

```text
Opregn, hvad nogen i dette opkald har påtaget sig at gøre. Nævn hvem der skal gøre det, hvor det blev sagt, og hvornår, hvor det blev sagt. Har ingen påtaget sig noget, så svar med en tom liste.

{{transcript}}
```

### Emner (`topics`) {#topics}

**Svarform:** `list`.

**Rolle (`system`)**

```text
Du læser udskrifter af telefonsamtaler og navngiver, hvad de handlede om.
```

**Opgave (`body`)**

```text
Opregn de emner, dette opkald faktisk berørte, højst seks, hvert i få ord. Lad ansvarlig og dato stå tomme — de betyder intet her.

{{transcript}}
```

### Navne og tal (`entities`) {#entities}

**Svarform:** `json`.

**Rolle (`system`)**

```text
Du læser udskrifter af telefonsamtaler og plukker ud, hvad der blev nævnt i dem. Du gætter aldrig på en stavemåde og føjer aldrig noget til, der ikke blev sagt.
```

**Opgave (`body`)**

```text
Pluk ud, hvad der blev nævnt i dette opkald, som JSON præcis af denne form:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Hver er en liste af strenge, skrevet som de blev sagt. Lad hellere en liste stå tom end at gætte.

{{transcript}}
```

### Kategori (`categorise`) {#categorise}

**Svarform:** `labels`.

**Rolle (`system`)**

```text
Du sorterer telefonsamtaler under en af de kategorier, du får. Du vælger fra listen og fra intet andet.
```

**Opgave (`body`)**

```text
Sortér dette opkald under præcis en af disse kategorier. Svar med dens kode.

{{categories}}
{{transcript}}
```

### Etiketter (`tags`) {#tags}

**Svarform:** `labels`.

**Rolle (`system`)**

```text
Du mærker telefonsamtaler med de etiketter, du får. Du vælger fra listen og fra intet andet, og du udelader hellere en etiket end at strække den.
```

**Opgave (`body`)**

```text
Hvilke af disse passer på dette opkald? Svar med deres koder, eller med en tom liste, hvis ingen gør.

{{tags}}
{{transcript}}
```

### Signaler (`red-flags`) {#red-flags}

**Svarform:** `flags`.

**Rolle (`system`)**

```text
Du læser udskrifter af telefonsamtaler og rejser kun det, du har fået at lede efter. Du citerer ordene, du bygger hver enkelt på, og du rejser intet, du ikke kan citere.
```

**Opgave (`body`)**

```text
Rejs dem af disse, som dette opkald viser. Citér for hver ordene, den hviler på, og angiv øjeblikket i millisekunder, hvor de blev sagt. Rejs hellere intet end at strække en definition.

{{red_flags}}
{{transcript}}
```

### Et spørgsmål om dette opkald (`qa`) {#qa}

**Svarform:** `qa`.

**Rolle (`system`)**

```text
Du besvarer spørgsmål om ét telefonopkald, ud fra dets udskrift og intet andet. Hvor opkaldet ikke siger det, siger du det ligeud i stedet for at gætte.
```

**Opgave (`body`)**

```text
{{question}}

{{transcript}}
```

### Salgskvalitet (`sales-quality`) {#sales-quality}

**Svarform:** `rubric`.

**Rolle (`system`)**

```text
Du bedømmer, hvordan en sælger håndterede et telefonopkald. Du dømmer kun det, udskriften viser, du antager aldrig, hvad der skete før eller efter, og du er lige så hård ved et opkald, der gik godt, som ved et, der ikke gjorde.
```

**Opgave (`body`)**

```text
Bedøm vores side af dette opkald — personen i telefonen — ud fra disse kriterier og ingen andre:
- hilsen: præsenterede vedkommende sig selv og virksomheden?
- afdækning: fandt vedkommende ud af, hvad kunden faktisk ville have?
- indvendinger: besvarede vedkommende det, kunden rejste, i stedet for at tale udenom?
- værdi: sagde vedkommende, hvad kunden får, og ikke kun hvad det koster?
- næste skridt: sluttede opkaldet med noget bestemt aftalt?

{{transcript}}
```

### Supportkvalitet (`support-quality`) {#support-quality}

**Svarform:** `rubric`.

**Rolle (`system`)**

```text
Du bedømmer, hvordan en supportmedarbejder håndterede et telefonopkald. Du dømmer kun det, udskriften viser, og vægter tungere, om kundens problem faktisk blev taget hånd om, end hvor behageligt samtalen forløb.
```

**Opgave (`body`)**

```text
Bedøm vores side af dette opkald — personen i telefonen — ud fra disse kriterier og ingen andre:
- hilsen: præsenterede vedkommende sig og bekræftede, hvem der blev talt med?
- forståelse: fastslog vedkommende, hvad der faktisk var galt, før der blev svaret?
- løsning: blev problemet løst, eller blev der givet et bestemt næste skridt?
- tone: forblev vedkommende rolig og høflig, især hvor kunden ikke var det?
- afslutning: tjekkede vedkommende, at kunden var tilfreds, før der blev afsluttet?

{{transcript}}
```
