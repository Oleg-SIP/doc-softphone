---
title: Behandling
sidebar_position: 2
description: Automatisk behandling af samtaler, de månedlige udgiftsgrænser, sprogmodeller, prompter og de regler, der kører dem.
---

**Indstillinger → Behandling** bestemmer, hvad der sker med en samtale, når den er optaget, hvilken model der gør arbejdet, og hvad det må koste.

<Shot name="12_settings_processing" alt="Indstillinger → Behandling" />

## Behandl samtaler automatisk {#process-conversations-automatically}

- **Fra:** intet sker, før du beder om det i [vinduet Optagelser](../interface/recordings.md).
- **Til:** [reglerne](#rules) nedenfor kører af sig selv. Det er det, der gør en samtale til et resumé, en kategori og alt det andet, uden at nogen trykker på noget. En model i skyen tager betaling for hvert af disse trin.

Under afkrydsningsfeltet viser programmet, hvad der er brugt i denne måned og på hvor mange forespørgsler, for eksempel *Denne måned: 40.492 tokens, over 84 forespørgsler, uden beregning.*

## Grænser {#limits}

| Felt | Betydning |
| --- | --- |
| **Pengegrænse, om måneden** | Det meste, modellerne må koste på en måned. |
| **Tokengrænse, om måneden** | Det største antal tokens, de må bruge på en måned. |

Der er to grænser, fordi en måned kan tælles i to ting. Begge er tomme, indtil du udfylder dem. Når en af dem er nået, stopper de automatiske regler, indtil måneden skifter. **Det, du selv beder om, stoppes aldrig.**

## Sprogmodeller {#language-models}

De modeller, der læser en udskrift og skriver om den. Tryk på **Tilføj** for at tilføje en. Hver står med sit navn og nedenunder modellens id og adressen på dens tjeneste, for eksempel `qwen3-32b · http://llm.local:8000/v1`. Den, der er markeret **standard**, bruges som standard. En knap i en models formular tjekker, at tjenesten faktisk svarer, før du stoler på den.

- En model **på din egen maskine** holder hver samtale inden for murene og koster intet at køre.
- En model i skyen — OpenAI, Claude, Mistral, DeepSeek, Groq og andre — betales efter forbrug. Programmet viser prisen for hvert kald i tokens og i penge.

## Prompter {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Indstillinger → Behandling: prompterne" />

*Det, modellerne bliver bedt om.* Hver prompt kom med programmet, og hver er din at ændre — og at lægge tilbage. Hver står med sit navn og nedenunder, hvad den skriver, og i hvilken form. Formen — **Svar**, **Punkter**, **Etiketter**, **JSON**, **Løbende tekst**, **Signaler** eller **Kriterier** — bestemmer, hvordan svaret gemmes og vises. Prompterne er beskrevet i [Personal Prompt Studio](prompt-studio.md). **Tilføj** laver din egen prompt.

## Regler {#rules}

<Shot name="12c_settings_processing_rules" alt="Indstillinger → Behandling: reglerne" />

*Det, der kører af sig selv, i denne rækkefølge. Hver udløses højst én gang per samtale.* En regel er en linje med et afkrydsningsfelt, der slår den til eller fra, dens navn og nedenunder, hvad den gør. **▲** og **▼** ændrer rækkefølgen. Programmet leveres med otte:

| Regel | Gør | Hvornår |
| --- | --- | --- |
| **Transskribér hver samtale** | Skriver den ud. | altid |
| **Resumér den** | Beder en model om: **Resumé**. | altid |
| **Kog den ned til én linje** | Beder en model om: **Resumé på én linje**. | altid |
| **Sortér den under en kategori** | Beder en model om: **Kategori**. | altid |
| **Mærk den** | Beder en model om: **Etiketter**. | altid |
| **Rejs alt, der er et blik værd** | Beder en model om: **Signaler**. | altid |
| **Bedøm den, hvis det var salg** | Beder en model om: **Salgskvalitet**. | kun hvis kategorien er **Salg** |
| **Bedøm den, hvis det var support** | Beder en model om: **Supportkvalitet**. | kun hvis kategorien er **Support** |

Rækkefølgen betyder noget: de to sidste regler har brug for den kategori, som reglen før dem har sat. **Tilføj** laver din egen regel.

## Standardværdier {#defaults}

**Gendan standardværdier** sætter prompterne og reglerne tilbage, som de kom med programmet, på brugerfladens nuværende sprog. Dine sprogmodeller bliver ikke rørt.

De prompter og regler, der kom med programmet, forbliver på det sprog, de var på, når du skifter brugerfladens sprog; **Gendan standardværdier** bringer dem over på det nye. Hver prompt markeres så *ændret* til højre.
