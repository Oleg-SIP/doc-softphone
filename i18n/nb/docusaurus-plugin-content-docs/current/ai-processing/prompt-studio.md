---
title: Personal Prompt Studio
sidebar_position: 3
description: Promptene som oppsummerer samtalene dine, reglene som kjører dem, og hvordan du gjør dem til dine egne.
---

**Personal Prompt Studio** er den delen av AI Softphone som oppsummerer samtalene dine på din måte. Sammendraget lages av prompter: programmet leveres med elleve, klare til bruk så snart transkripsjon og en språkmodell er koblet til, og du kan endre dem med vanlig språk, kopiere dem og legge til dine egne. De står under **Prompter** i [Innstillinger → Behandling](processing.md#prompts).

Din LLM, din nøkkel, din kontroll: koble til modellen du foretrekker med din egen nøkkel, gjennom en støttet tjeneste eller et kompatibelt API — eller en modell som kjører i din egen organisasjon. Med [transkripsjon](transcription.md#your-own-models) også på din egen maskinvare blir både lyden og utskriftene værende i ditt eget miljø.

<Shot name="12b_settings_processing_prompts" alt="Listen over prompter i Innstillinger → Behandling" />

## Promptene som følger med programmet {#the-prompts-that-come-with-the-program}

Den andre kolonnen er det listen viser under navnet på prompten: hva den skriver, og i hvilken form.

| Prompt | Form | Hva den skriver |
| --- | --- | --- |
| **Sammendrag** | Løpende tekst | Hovedpunktene, beslutningene og de neste stegene i ett kort avsnitt. |
| **Sammendrag på én linje** | Løpende tekst | En kort tittel for å kjenne igjen samtalen i en liste. |
| **Oppgaver** | Punkter | Hvem som lovet å gjøre hva, og når, med ordene de sa. |
| **Emner** | Punkter | Temaene som ble tatt opp, med noen få ord. |
| **Navn og tall** | JSON | Personer, firmaer, datoer, beløp og referanser. |
| **Kategori** | Etiketter | Sorterer samtalen under en av [kategoriene](dictionaries.md) dine. |
| **Etiketter** | Etiketter | Setter [etikettene](dictionaries.md) dine på den, så den kan finnes senere. |
| **Signaler** | Signaler | Problemer, med beviset og tidspunktet i samtalen. |
| **Et spørsmål om denne samtalen** | Svar | Svarer på et spørsmål du stiller om én samtale, ut fra utskriften. |
| **Salgskvalitet** | Kriterier | Går gjennom samtalen etter salgskriterier du kan redigere. |
| **Kvalitet på brukerstøtten** | Kriterier | Vurderer hvor godt problemet ble forstått og håndtert. |

Formene er faste maler for et svar, og det er det som gjør at programmet kan lagre det og søke i det senere: **Etiketter** er koder fra en av listene dine, **Signaler** er koder med en alvorlighetsgrad, **Kriterier** er en karakter med en begrunnelse og en karakter for hvert kriterium, **Svar** er et svar med ordene det bygger på. Instruksjonene som forteller en modell formen, lagres i [Ordlister](dictionaries.md#answer-shapes-and-language).

Samtaler ringt i AI Softphone, møter [fanget](/capture/) fra maskinen og importerte opptak går alle gjennom de samme promptene når de har en utskrift.

Oppgaver registrerer det som ble avtalt — de sender ikke meldinger, bestiller ikke besøk og oppretter ikke saker for deg.

## Gjør det til ditt eget {#making-it-yours}

- Endre hva en prompt ber om, med vanlig språk: hva den ser etter, svarformatet og språket den svarer på.
- Kopier en prompt for å prøve en variant.
- Velg modellen for hver prompt — på din egen maskin eller i skyen.
- Bestem rekkefølgen promptene kjører i, slå dem på og av, og gjør dem betingede — det gjøres med [reglene](processing.md#rules): for eksempel kjører en salgsvurdering bare på samtaler som er sortert som **Salg**.
- Hold dine egne kategorier, etiketter og signaler i [Ordlister](dictionaries.md).
- Sett tak på kostnadene med de [månedlige grensene](processing.md#limits).

De opprinnelige promptene og reglene kan gjenopprettes med **Gjenopprett standardverdier** under **Standardverdier** i [Innstillinger → Behandling](processing.md#defaults).
