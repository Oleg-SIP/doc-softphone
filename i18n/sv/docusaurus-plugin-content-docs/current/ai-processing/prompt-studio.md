---
title: Personal Prompt Studio
sidebar_position: 3
description: Prompterna som sammanfattar dina samtal, reglerna som kör dem och hur du gör dem till dina egna.
---

**Personal Prompt Studio** är den del av AI Softphone som sammanfattar dina samtal på ditt sätt. Sammanfattningen görs av prompter: programmet levereras med elva, färdiga att använda så snart transkription och en språkmodell är anslutna, och du kan ändra dem med vanligt språk, duplicera dem och lägga till egna. De visas under **Prompter** i [Inställningar → Bearbetning](processing.md#prompts).

Din LLM, din nyckel, din kontroll: anslut den modell du föredrar med din egen nyckel, via en tjänst som stöds eller ett kompatibelt API — eller en modell som körs inom din organisation. Med [transkription](transcription.md#your-own-models) också på din egen maskinvara stannar både ljudet och utskrifterna inom din miljö.

<Shot name="12b_settings_processing_prompts" alt="Listan över prompter i Inställningar → Bearbetning" />

## Prompterna som följer med programmet {#the-prompts-that-come-with-the-program}

Den andra kolumnen är det listan visar under promptens namn: vad den skriver och i vilken form.

| Prompt | Form | Vad den skriver |
| --- | --- | --- |
| **Sammanfattning** | Löpande text | Huvudpunkterna, besluten och nästa steg i ett kort stycke. |
| **Sammanfattning på en rad** | Löpande text | En kort rubrik för att känna igen samtalet i en lista. |
| **Att göra** | Punkter | Vem som lovade att göra vad, och när, med orden de sa. |
| **Ämnen** | Punkter | Ämnena som togs upp, med några få ord. |
| **Namn och tal** | JSON | Personer, företag, datum, belopp och referenser. |
| **Kategori** | Etiketter | Sorterar samtalet under en av dina [kategorier](dictionaries.md). |
| **Etiketter** | Etiketter | Sätter dina [etiketter](dictionaries.md) på det, så att det kan hittas senare. |
| **Signaler** | Signaler | Problem, med beviset och tidpunkten i samtalet. |
| **En fråga om det här samtalet** | Svar | Svarar på en fråga du ställer om ett samtal, utifrån dess utskrift. |
| **Säljkvalitet** | Kriterier | Granskar samtalet efter säljkriterier som du kan redigera. |
| **Supportkvalitet** | Kriterier | Bedömer hur väl problemet förstods och hanterades. |

Formerna är fasta mallar för ett svar, och det är det som låter programmet spara det och söka i det senare: **Etiketter** är koder från en av dina listor, **Signaler** är koder med en allvarlighetsgrad, **Kriterier** är ett betyg med en motivering och ett betyg för varje kriterium, **Svar** är ett svar med orden det bygger på. Instruktionerna som talar om formen för en modell sparas i [Ordlistor](dictionaries.md#answer-shapes-and-language).

Samtal som rings i AI Softphone, möten [fångade](/capture/) från datorn och importerade inspelningar går alla genom samma prompter så snart de har en utskrift.

Att göra-posterna registrerar vad som avtalades — de skickar inga meddelanden, bokar inga besök och skapar inga ärenden åt dig.

## Gör det till ditt eget {#making-it-yours}

- Ändra vad en prompt ber om, med vanligt språk: vad den letar efter, svarets format och språket den svarar på.
- Duplicera en prompt för att prova en variant.
- Välj modell för varje prompt — på din egen dator eller i molnet.
- Bestäm ordningen prompterna körs i, slå på och stäng av dem och gör dem villkorade — det görs med [reglerna](processing.md#rules): till exempel körs en säljgranskning bara på samtal som sorterats som **Försäljning**.
- Håll dina egna kategorier, etiketter och signaler i [Ordlistor](dictionaries.md).
- Sätt tak för kostnaden med de [månatliga gränserna](processing.md#limits).

De ursprungliga prompterna och reglerna kan återställas med **Återställ standardvärden** under **Standardvärden** i [Inställningar → Bearbetning](processing.md#defaults).
