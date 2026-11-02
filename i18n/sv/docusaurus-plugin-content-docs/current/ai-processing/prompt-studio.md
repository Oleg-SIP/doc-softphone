---
title: Personal Prompt Studio
sidebar_position: 3
description: Prompterna som sammanfattar dina samtal, reglerna som kör dem och hur du gör dem till dina egna.
---

**Personal Prompt Studio** är den del av AI Softphone som sammanfattar dina samtal på ditt sätt. Sammanfattningen görs av prompter: programmet levereras med elva, färdiga att använda så snart transkription och en språkmodell är anslutna, och du kan ändra dem med vanligt språk, duplicera dem och lägga till egna. De visas under **Prompter** i [Inställningar → Bearbetning](processing.md#prompts).

Din LLM, din nyckel, din kontroll: anslut den modell du föredrar med din egen nyckel, via en tjänst som stöds eller ett kompatibelt API — eller en modell som körs inom din organisation. Med [transkription](transcription.md#your-own-models) också på din egen maskinvara stannar både ljudet och utskrifterna inom din miljö.

<Shot name="12b_settings_processing_prompts" alt="Listan över prompter i Inställningar → Bearbetning" />

## Prompterna som följer med programmet {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 innehåller elva promptar för avslutade samtal och fyra assistenter i realtid. Här visas de medföljande texterna på detta språk; språkversionerna kan skilja sig åt.

| Prompt | `code` | Form | Vad den skriver |
| --- | --- | --- | --- |
| **Sammanfattning** | `summary` | Löpande text | Huvudpunkterna, besluten och nästa steg i ett kort stycke. |
| **Sammanfattning på en rad** | `super-summary` | Löpande text | En kort rubrik för att känna igen samtalet i en lista. |
| **Att göra** | `action-items` | Punkter | Vem som lovade att göra vad, och när, med orden de sa. |
| **Ämnen** | `topics` | Punkter | Ämnena som togs upp, med några få ord. |
| **Namn och tal** | `entities` | JSON | Personer, företag, datum, belopp och referenser. |
| **Kategori** | `categorise` | Etiketter | Sorterar samtalet under en av dina [kategorier](dictionaries.md). |
| **Etiketter** | `tags` | Etiketter | Sätter dina [etiketter](dictionaries.md) på det, så att det kan hittas senare. |
| **Signaler** | `red-flags` | Signaler | Problem, med beviset och tidpunkten i samtalet. |
| **En fråga om det här samtalet** | `qa` | Svar | Svarar på en fråga du ställer om ett samtal, utifrån dess utskrift. |
| **Säljkvalitet** | `sales-quality` | Kriterier | Granskar samtalet efter säljkriterier som du kan redigera. |
| **Supportkvalitet** | `support-quality` | Kriterier | Bedömer hur väl problemet förstods och hanterades. |

Formerna är fasta mallar för ett svar, och det är det som låter programmet spara det och söka i det senare: **Etiketter** är koder från en av dina listor, **Signaler** är koder med en allvarlighetsgrad, **Kriterier** är ett betyg med en motivering och ett betyg för varje kriterium, **Svar** är ett svar med orden det bygger på. Instruktionerna som talar om formen för en modell sparas i [Ordlistor](dictionaries.md#instructions).

[Sufflörens](../interface/prompter.md) hjälpare är också prompter, som körs på varje replik medan ett samtal pågår i stället för på ett avslutat samtal. De finns i en egen lista, under [Hjälpare](prompter.md#assistants) i **Inställningar → Sufflör**.

Samtal som rings i AI Softphone, möten [fångade](/capture/) från datorn och importerade inspelningar går alla genom samma prompter så snart de har en utskrift.

Att göra-posterna registrerar vad som avtalades — de skickar inga meddelanden, bokar inga besök och skapar inga ärenden åt dig.

## Gör det till ditt eget {#making-it-yours}

- Ändra vad en prompt ber om, med vanligt språk: vad den letar efter, svarets format och språket den svarar på.
- Duplicera en prompt för att prova en variant.
- Välj modell för varje prompt — på din egen dator eller i molnet.
- Bestäm ordningen prompterna körs i, slå på och stäng av dem och gör dem villkorade — det görs med [reglerna](processing.md#rules): till exempel körs en säljgranskning bara på samtal som sorterats som **Försäljning**.
- Håll dina egna kategorier, etiketter och signaler i [Ordlistor](dictionaries.md).
- Sätt tak för kostnaden med de [månatliga gränserna](processing.md#spending).

De ursprungliga prompterna och reglerna kan återställas med **Återställ standardvärden** under **Standardvärden** i [Inställningar → Bearbetning](processing.md#defaults).

## Modellens roll {#role-and-task}

`system` styr modellens beteende; `body` beskriver uppgiften. Svarsform och språk anges separat genom instruktioner i listorna.

En tom lista med uppgifter eller flaggor kan vara korrekt. Saknade ansvariga och datum får inte hittas på. Svar på frågor måste enbart bygga på transkriptionen.

[Svarsformat](dictionaries.md#response-formats)

## Platshållare {#placeholders}

Ett element i prompten som ersätts med samtalsdata.

| Platshållare | Betydelse |
| --- | --- |
| `{{transcript}}` | Transkription, ett yttrande per rad, med tider i millisekunder |
| `{{duration}}` | Samtalets längd |
| `{{direction}}` | Inkommande eller utgående samtal |
| `{{party}}` | Kontaktens namn eller nummer |
| `{{language}}` | Svarsspråk |
| `{{question}}` | Användarens fråga |
| `{{categories}}` | Kategorilista |
| `{{tags}}` | Etikettlista |
| `{{red_flags}}` | Lista över varningsflaggor |
| `{{artifact:summary}}` | Tidigare skapad sammanfattning |
| `{{conversation}}` | Kontext som samlats av sufflören |
| `{{reply}}` | Motpartens senaste yttrande; endast för sufflören |

Kör `summary` före `super-summary`, som använder `{{artifact:summary}}`. Kör `categorise` före kvalitetsbedömningen: `sales-quality` kräver `sales`, och `support-quality` kräver `support`.

[Medföljande assistenter](prompter.md#assistant-templates)

## Standardtexter för promptar {#standard-templates}

AI Softphone 1.1.11 innehåller elva promptar för avslutade samtal och fyra assistenter i realtid. Här visas de medföljande texterna på detta språk; språkversionerna kan skilja sig åt.

### Sammanfattning (`summary`) {#summary}

**Svarsform:** `plain`.

**Roll (`system`)**

```text
Du läser utskrifter av telefonsamtal och skriver korta, sakliga sammanfattningar av dem. Du gissar aldrig om något som inte sagts, och du lägger aldrig till råd.
```

**Uppgift (`body`)**

```text
Sammanfatta det här telefonsamtalet i ett kort stycke: vad det handlade om, vad som bestämdes, och vad som händer härnäst. Det varade {{duration}} och var {{direction}}, med {{party}}.

{{transcript}}
```

### Sammanfattning på en rad (`super-summary`) {#super-summary}

**Svarsform:** `plain`.

**Roll (`system`)**

```text
Du läser utskrifter av telefonsamtal och kokar ner varje till en enda fras. Du gissar aldrig och lägger aldrig till råd.
```

**Uppgift (`body`)**

```text
Koka ner det här telefonsamtalet till en fras på högst tolv ord — den sortens rad som skulle stå i en tabell bredvid namnet på den som ringde. Ingen punkt, inga citattecken.

{{artifact:summary}}

{{transcript}}
```

### Att göra (`action-items`) {#action-items}

**Svarsform:** `list`.

**Roll (`system`)**

```text
Du läser utskrifter av telefonsamtal och räknar upp vad någon åtagit sig att göra. Du räknar bara upp det som verkligen sagts; du hittar aldrig på en uppgift, en ansvarig eller ett datum.
```

**Uppgift (`body`)**

```text
Räkna upp vad någon i det här samtalet åtagit sig att göra. Ange vem som ska göra det där det sagts, och till när där det sagts. Har ingen åtagit sig något, svara med en tom lista.

{{transcript}}
```

### Ämnen (`topics`) {#topics}

**Svarsform:** `list`.

**Roll (`system`)**

```text
Du läser utskrifter av telefonsamtal och namnger vad de handlade om.
```

**Uppgift (`body`)**

```text
Räkna upp de ämnen det här samtalet verkligen tog upp, högst sex, vart och ett i några ord. Lämna ansvarig och datum tomma — de betyder ingenting här.

{{transcript}}
```

### Namn och tal (`entities`) {#entities}

**Svarsform:** `json`.

**Roll (`system`)**

```text
Du läser utskrifter av telefonsamtal och plockar ut det som nämnts i dem. Du gissar aldrig om en stavning och lägger aldrig till något som inte sagts.
```

**Uppgift (`body`)**

```text
Plocka ut det som nämnts i det här samtalet, som JSON exakt av den här formen:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Var och en är en lista med strängar, skrivna som de sades. Lämna hellre en lista tom än att gissa.

{{transcript}}
```

### Kategori (`categorise`) {#categorise}

**Svarsform:** `labels`.

**Roll (`system`)**

```text
Du sorterar telefonsamtal under en av de kategorier du får. Du väljer ur listan och ur ingenting annat.
```

**Uppgift (`body`)**

```text
Sortera det här samtalet under exakt en av de här kategorierna. Svara med dess kod.

{{categories}}
{{transcript}}
```

### Etiketter (`tags`) {#tags}

**Svarsform:** `labels`.

**Roll (`system`)**

```text
Du etiketterar telefonsamtal med de etiketter du får. Du väljer ur listan och ur ingenting annat, och du utelämnar hellre en etikett än att tänja på den.
```

**Uppgift (`body`)**

```text
Vilka av dessa stämmer på det här samtalet? Svara med deras koder, eller med en tom lista om ingen gör det.

{{tags}}
{{transcript}}
```

### Signaler (`red-flags`) {#red-flags}

**Svarsform:** `flags`.

**Roll (`system`)**

```text
Du läser utskrifter av telefonsamtal och tar bara upp det du fått i uppdrag att leta efter. Du citerar orden du bygger var och en på, och du tar inte upp något du inte kan citera.
```

**Uppgift (`body`)**

```text
Ta upp de av dessa som det här samtalet visar. Citera för var och en orden det vilar på och ange ögonblicket i millisekunder då de sades. Ta hellre inte upp något än att tänja på en definition.

{{red_flags}}
{{transcript}}
```

### En fråga om det här samtalet (`qa`) {#qa}

**Svarsform:** `qa`.

**Roll (`system`)**

```text
Du besvarar frågor om ett telefonsamtal, utifrån dess utskrift och ingenting annat. Där samtalet inte säger det, säger du det rakt ut i stället för att gissa.
```

**Uppgift (`body`)**

```text
{{question}}

{{transcript}}
```

### Säljkvalitet (`sales-quality`) {#sales-quality}

**Svarsform:** `rubric`.

**Roll (`system`)**

```text
Du bedömer hur en säljare skötte ett telefonsamtal. Du dömer bara det utskriften visar, du antar aldrig vad som hände före eller efter, och du är lika hård mot ett samtal som gick bra som mot ett som inte gjorde det.
```

**Uppgift (`body`)**

```text
Bedöm vår sida av det här samtalet — personen i telefon — mot dessa kriterier och inga andra:
- hälsning: presenterade hen sig och företaget?
- behovsbild: tog hen reda på vad kunden faktiskt ville ha?
- invändningar: besvarade hen det kunden tog upp, i stället för att tala förbi?
- värde: sa hen vad kunden får, och inte bara vad det kostar?
- nästa steg: slutade samtalet med något bestämt?

{{transcript}}
```

### Supportkvalitet (`support-quality`) {#support-quality}

**Svarsform:** `rubric`.

**Roll (`system`)**

```text
Du bedömer hur en supportmedarbetare skötte ett telefonsamtal. Du dömer bara det utskriften visar, och väger tyngre om kundens problem faktiskt togs om hand än hur trevligt samtalet var.
```

**Uppgift (`body`)**

```text
Bedöm vår sida av det här samtalet — personen i telefon — mot dessa kriterier och inga andra:
- hälsning: presenterade hen sig och bekräftade vem hen talade med?
- förståelse: fastställde hen vad som faktiskt var fel innan hen svarade?
- lösning: löstes problemet, eller gavs ett bestämt nästa steg?
- ton: höll hen sig lugn och hövlig, särskilt där kunden inte var det?
- avslut: kontrollerade hen att kunden var nöjd innan hen avslutade?

{{transcript}}
```
