---
title: Behandling
sidebar_position: 2
description: Automatisk behandling av samtaler, de månedlige utgiftsgrensene, språkmodeller, prompter og reglene som kjører dem.
---

**Innstillinger → Behandling** bestemmer hva som skjer med en samtale etter at den er tatt opp, hvilken modell som gjør jobben, og hva det kan koste.

<Shot name="12_settings_processing" alt="Innstillinger → Behandling" />

## Behandle samtaler automatisk {#process-conversations-automatically}

- **Av:** ingenting skjer før du ber om det i [vinduet Opptak](../interface/recordings.md).
- **På:** [reglene](#rules) nedenfor kjører av seg selv. Det er dette som gjør en samtale om til et sammendrag, en kategori og alt det andre uten at noen trykker på noe. En modell i skyen tar betalt for hvert av disse trinnene.

Under avkrysningsboksen viser programmet hva som er brukt denne måneden og på hvor mange forespørsler, for eksempel *Denne måneden: 40.492 tokener, over 84 forespørsler, uten kostnad.*

## Grenser {#limits}

| Felt | Betydning |
| --- | --- |
| **Pengegrense, per måned** | Det meste modellene kan koste i løpet av en måned. |
| **Tokengrense, per måned** | Det høyeste antallet tokener de kan bruke i løpet av en måned. |

Det er to grenser fordi en måned kan telles i to ting. Begge er tomme til du fyller dem ut. Når en av dem er nådd, stopper de automatiske reglene til måneden skifter. **Det du selv ber om, stoppes aldri.**

## Språkmodeller {#language-models}

Modellene som leser en utskrift og skriver om den. Trykk på **Legg til** for å legge til en. Hver står oppført med navnet og under det modell-ID-en og adressen til tjenesten, for eksempel `qwen3-32b · http://llm.local:8000/v1`. Den som er merket **standard**, brukes som standard. En knapp i skjemaet for en modell sjekker at tjenesten faktisk svarer før du stoler på den.

- En modell **på din egen maskin** holder hver samtale innenfor veggene og koster ingenting å kjøre.
- En modell i skyen — OpenAI, Claude, Mistral, DeepSeek, Groq og andre — betales per bruk. Programmet viser prisen for hvert kall i tokener og i penger.

## Prompter {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Innstillinger → Behandling: promptene" />

*Det modellene blir bedt om.* Hver prompt kom med programmet, og hver er din å endre — og å legge tilbake. Hver står oppført med navnet og under det hva den skriver og i hvilken form. Formen — **Svar**, **Punkter**, **Etiketter**, **JSON**, **Løpende tekst**, **Signaler** eller **Kriterier** — bestemmer hvordan svaret lagres og vises. Promptene er beskrevet i [Personal Prompt Studio](prompt-studio.md). **Legg til** lager en egen prompt.

## Regler {#rules}

<Shot name="12c_settings_processing_rules" alt="Innstillinger → Behandling: reglene" />

*Det som kjører av seg selv, i denne rekkefølgen. Hver utløses høyst én gang per samtale.* En regel er en linje med en avkrysningsboks som slår den på eller av, navnet og under det hva den gjør. **▲** og **▼** endrer rekkefølgen. Programmet leveres med åtte:

| Regel | Gjør | Når |
| --- | --- | --- |
| **Transkriber hver samtale** | Skriver den ut. | alltid |
| **Sammenfatt den** | Ber en modell om: **Sammendrag**. | alltid |
| **Kok den ned til én linje** | Ber en modell om: **Sammendrag på én linje**. | alltid |
| **Sorter den under en kategori** | Ber en modell om: **Kategori**. | alltid |
| **Merk den** | Ber en modell om: **Etiketter**. | alltid |
| **Reis alt som er verdt et blikk** | Ber en modell om: **Signaler**. | alltid |
| **Vurder den, om det var salg** | Ber en modell om: **Salgskvalitet**. | bare hvis kategorien er **Salg** |
| **Vurder den, om det var brukerstøtte** | Ber en modell om: **Kvalitet på brukerstøtten**. | bare hvis kategorien er **Brukerstøtte** |

Rekkefølgen betyr noe: de to siste reglene trenger kategorien som regelen før dem har satt. **Legg til** lager en egen regel.

## Standardverdier {#defaults}

**Gjenopprett standardverdier** setter promptene og reglene tilbake slik de kom med programmet, på grensesnittets nåværende språk. Språkmodellene dine blir ikke rørt.

Promptene og reglene som kom med programmet, blir værende på språket de var på når du bytter grensesnittspråk; **Gjenopprett standardverdier** tar dem over til det nye. Hver prompt merkes da *endret* til høyre.
