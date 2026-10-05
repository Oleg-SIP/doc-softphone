---
title: Bearbetning
sidebar_position: 2
description: Automatisk bearbetning av samtal, de månatliga kostnadsgränserna, språkmodeller, prompter och reglerna som kör dem.
---

**Inställningar → Bearbetning** bestämmer vad som händer med ett samtal när det har spelats in, vilken modell som gör jobbet och vad det får kosta.

<Shot name="12_settings_processing" alt="Inställningar → Bearbetning" />

## Bearbeta samtal automatiskt {#process-conversations-automatically}

- **Av:** ingenting händer förrän du ber om det i [fönstret Inspelningar](../recordings/recordings-window.md).
- **På:** [reglerna](#rules) nedan körs av sig själva. Det är detta som gör ett samtal till en sammanfattning, en kategori och allt annat utan att någon trycker på något. En modell i molnet tar betalt för vart och ett av de här stegen.

Under kryssrutan visar programmet vad som har förbrukats den här månaden och på hur många begäranden, till exempel *Den här månaden: 40.492 token, över 84 begäranden, utan kostnad.*

## Gränser {#limits}

| Fält | Betydelse |
| --- | --- |
| **Pengagräns, per månad** | Det mesta modellerna får kosta under en månad. |
| **Tokengräns, per månad** | Det största antalet token de får använda under en månad. |

Det finns två gränser eftersom en månad kan räknas i två saker. Båda är tomma tills du fyller i dem. När någon av dem nås stannar de automatiska reglerna tills månaden byts. **Det du själv ber om stoppas aldrig.**

## Språkmodeller {#language-models}

Modellerna som läser en utskrift och skriver om den. Tryck på **Lägg till** för att lägga till en. Var och en visas med sitt namn och under det modellens id och adressen till tjänsten, till exempel `qwen3-32b · http://llm.local:8000/v1`. Den som är markerad **standard** används som standard. En knapp i en modells formulär kontrollerar att tjänsten verkligen svarar innan du förlitar dig på den.

- En modell **på din egen dator** håller varje samtal inom huset och kostar ingenting att köra.
- En modell i molnet — OpenAI, Claude, Mistral, DeepSeek, Groq och andra — debiteras per användning. Programmet visar priset för varje anrop i token och i pengar.

## Prompter {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Inställningar → Bearbetning: prompterna" />

*Det modellerna ombeds om.* Varje prompt kom med programmet och var och en är din att ändra — och att lägga tillbaka. Var och en visas med sitt namn och under det vad den skriver och i vilken form. Formen — **Svar**, **Punkter**, **Etiketter**, **JSON**, **Löpande text**, **Signaler** eller **Kriterier** — bestämmer hur svaret sparas och visas. Prompterna beskrivs i [Personal Prompt Studio](prompt-studio.md). **Lägg till** skapar en egen prompt.

## Regler {#rules}

<Shot name="12c_settings_processing_rules" alt="Inställningar → Bearbetning: reglerna" />

*Det som körs av sig självt, i den här ordningen. Var och en avfyras högst en gång per samtal.* En regel är en rad med en kryssruta som slår på eller stänger av den, dess namn och under det vad den gör. **▲** och **▼** ändrar ordningen. Programmet levereras med åtta:

| Regel | Gör | När |
| --- | --- | --- |
| **Transkribera varje samtal** | Skriver ut det. | alltid |
| **Sammanfatta det** | Ber en modell om: **Sammanfattning**. | alltid |
| **Koka ner det till en rad** | Ber en modell om: **Sammanfattning på en rad**. | alltid |
| **Sortera det under en kategori** | Ber en modell om: **Kategori**. | alltid |
| **Etikettera det** | Ber en modell om: **Etiketter**. | alltid |
| **Ta upp allt som är värt en blick** | Ber en modell om: **Signaler**. | alltid |
| **Bedöm det, om det var försäljning** | Ber en modell om: **Säljkvalitet**. | bara om kategorin är **Försäljning** |
| **Bedöm det, om det var support** | Ber en modell om: **Supportkvalitet**. | bara om kategorin är **Support** |

Ordningen spelar roll: de två sista reglerna behöver kategorin som regeln före dem har satt. **Lägg till** skapar en egen regel.

## Standardvärden {#defaults}

**Återställ standardvärden** ställer tillbaka prompterna och reglerna som de kom med programmet, på gränssnittets nuvarande språk. Dina språkmodeller lämnas orörda.

Prompterna och reglerna som kom med programmet stannar på det språk de var på när du byter gränssnittsspråk; **Återställ standardvärden** för över dem till det nya. Varje prompt markeras då *ändrad* till höger.
