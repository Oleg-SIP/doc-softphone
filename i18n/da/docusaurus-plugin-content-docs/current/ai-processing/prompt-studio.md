---
title: Personal Prompt Studio
sidebar_position: 3
description: De prompter, der opsummerer dine samtaler, de regler, der kører dem, og hvordan du gør dem til dine egne.
---

**Personal Prompt Studio** er den del af AI Softphone, der opsummerer dine samtaler på din måde. Opsummeringen laves af prompter: programmet leveres med elleve, klar til brug, så snart transskription og en sprogmodel er forbundet, og du kan ændre dem i almindeligt sprog, kopiere dem og tilføje dine egne. De står under **Prompter** i [Indstillinger → Behandling](processing.md#prompts).

Din LLM, din nøgle, din kontrol: forbind den model, du foretrækker, med din egen nøgle, gennem en understøttet tjeneste eller et kompatibelt API — eller en model, der kører i din organisation. Med [transskription](transcription.md#your-own-models) også på din egen hardware bliver både lyden og udskrifterne i dit miljø.

<Shot name="12b_settings_processing_prompts" alt="Listen over prompter i Indstillinger → Behandling" />

## De prompter, der følger med programmet {#the-prompts-that-come-with-the-program}

Den anden kolonne er det, listen viser under promptens navn: hvad den skriver, og i hvilken form.

| Prompt | Form | Hvad den skriver |
| --- | --- | --- |
| **Resumé** | Løbende tekst | Hovedpunkterne, beslutningerne og de næste skridt i ét kort afsnit. |
| **Resumé på én linje** | Løbende tekst | En kort titel, så samtalen kan genkendes i en liste. |
| **Opgaver** | Punkter | Hvem der lovede at gøre hvad, og hvornår, med de ord, der blev sagt. |
| **Emner** | Punkter | De emner, der blev berørt, med få ord. |
| **Navne og tal** | JSON | Personer, firmaer, datoer, beløb og referencer. |
| **Kategori** | Etiketter | Sorterer samtalen under en af dine [kategorier](dictionaries.md). |
| **Etiketter** | Etiketter | Sætter dine [etiketter](dictionaries.md) på den, så den kan findes senere. |
| **Signaler** | Signaler | Problemer, med beviset og tidspunktet i samtalen. |
| **Et spørgsmål om dette opkald** | Svar | Besvarer et spørgsmål, du stiller om én samtale, ud fra dens udskrift. |
| **Salgskvalitet** | Kriterier | Gennemgår samtalen efter salgskriterier, som du kan redigere. |
| **Supportkvalitet** | Kriterier | Vurderer, hvor godt problemet blev forstået og håndteret. |

Formerne er faste skabeloner for et svar, og det er det, der lader programmet gemme det og søge i det senere: **Etiketter** er koder fra en af dine lister, **Signaler** er koder med en alvorsgrad, **Kriterier** er en karakter med en begrundelse og en karakter for hvert kriterium, **Svar** er et svar med de ord, det bygger på. De instruktioner, der fortæller en model formen, gemmes i [Ordlister](dictionaries.md#answer-shapes-and-language).

Opkald foretaget i AI Softphone, møder [opfanget](/capture/) fra computeren og importerede optagelser går alle gennem de samme prompter, når de har en udskrift.

Opgaver registrerer, hvad der blev aftalt — de sender ikke beskeder, booker ikke besøg og opretter ikke sager for dig.

## Gør det til dit eget {#making-it-yours}

- Ændr, hvad en prompt beder om, i almindeligt sprog: hvad den leder efter, svarets format og det sprog, den svarer på.
- Kopiér en prompt for at prøve en variant.
- Vælg modellen for hver prompt — på din egen maskine eller i skyen.
- Bestem rækkefølgen, prompterne kører i, slå dem til og fra, og gør dem betingede — det gøres med [reglerne](processing.md#rules): for eksempel kører en salgsgennemgang kun på opkald, der er sorteret som **Salg**.
- Hold dine egne kategorier, etiketter og signaler i [Ordlister](dictionaries.md).
- Sæt loft over omkostningerne med de [månedlige grænser](processing.md#limits).

De oprindelige prompter og regler kan gendannes med **Gendan standardværdier** under **Standardværdier** i [Indstillinger → Behandling](processing.md#defaults).
