---
title: Vinduet Optagelser
sidebar_position: 2
description: Biblioteket med samtaler — filtrér, afspil, læs udskriften og opsummeringen.
---

**Optagelser** er der, hvor hver samtale bor, uanset hvordan den kom ind: et opkald, et møde opfanget fra et andet program eller en importeret fil. Hver står i listen med sin opsummering allerede lavet.

<Shot name="01_recordings" alt="Fanen Optagelser: listen over samtaler" />

## Finde en samtale {#finding-a-conversation}

Bjælken øverst har fire filtre, et søgefelt og en menu:

| Kontrol | Indsnævrer listen efter |
| --- | --- |
| **Slags** | den måde, samtalen kom ind på |
| **Periode** | datoen |
| **Kategori** | den kategori, den er sorteret under — se [Ordlister](../ai-processing/dictionaries.md) |
| **Mærke** | de mærker, den har |
| **Søg** | det, der blev sagt i den — søgningen går gennem udskrifterne af alt, du har optaget |

Knappen **⋮** til højre i bjælken åbner flere handlinger for listen: **Importér fra fil(er)**, **Eksportér til CSV** og **Åbn i en browser**.

## Listen {#the-list}

Hver række viser:

- et ikon for slags samtale: et rør for et opkald, et vindue for et møde i et andet program;
- en titel — den anden parts navn, nummeret eller **Et andet program** for et opfanget møde — og nedenunder datoen og resuméet på én linje;
- til højre kategorien med dens score (et tal, for eksempel *Support · 2*), så etiketterne og til sidst varigheden.

Etiketter tegnet med rødt er **signaler** (på billedet *Vred kunde* og *Risiko for opsigelse*); de andre er almindelige etiketter (*Klage*, *Opkald lovet*). En samtale uden resumé og kategori er endnu ikke opsummeret — den første række på billedet.

## Afspilleren {#the-player}

Markér en række for at åbne afspilleren under listen.

<Shot name="02_recording_details" alt="En optagelse valgt: afspilleren og udskriften under listen" />

- De to bølgeformer er optagelsens to kanaler, én for hver side af samtalen. Bjælken nedenunder ruller gennem en lang optagelse.
- **▶** afspiller og sætter på pause; tiderne til venstre er positionen og den samlede længde.
- **1×** ændrer hastigheden; **Begge** vælger, hvilken kanal du hører.
- Diskknappen gemmer lyden, **×** lukker afspilleren.

## Udskriften og opsummeringen {#the-transcript-and-the-write-up}

Under afspilleren står udskriften med én linje per replik, tidspunktet den blev sagt, og talerens navn (**Dig**, den anden parts navn eller, for et opfanget møde, **Et andet program**). Klik på en linje for at høre det øjeblik; linjen under afspilningsmarkøren fremhæves, og det ord, der siges, markeres i den.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Udskriften ved siden af lyden" />

Rullelisten over udskriften vælger, hvad der vises — udskriften lavet af en af dine [genkendere](../ai-processing/transcription.md) (en stjerne markerer optagelsens hovedudskrift), eller en opsummering som **Handlinger**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Handlinger, samtalen efterlod" />

De fire ikoner til højre for rullelisten:

| Ikon | Gør |
| --- | --- |
| Gnister | Får modellen til at skrive det valgte element nu. |
| To ark | Kopierer det. |
| Disk | Gemmer det i en fil. |
| Skraldespand | Sletter det. |

Du kan eksportere en udskrift som ren tekst eller som undertekster.

Opsummeringen laves af de [prompter](/ai-processing/prompt-studio) og modeller, du har sat op under [Behandling](../ai-processing/processing.md), gennem [regler](../ai-processing/processing.md#rules), der kører af sig selv eller når du beder om det. Hvor længe optagelser gemmes, indstilles under [Optagelse af opkald](call-recording.md#retention).

## En optagelse, du allerede har {#a-recording-you-already-have}

En optagelse lavet et andet sted — på en mobiltelefon, en diktafon eller et andet system — kan lægges ind med **⋮ → Importér fra fil(er)**. Den arkiveres præcis som et opkald: skrevet ud, opsummeret og fundet af den samme søgning.

## Slette en optagelse {#deleting-a-recording}

Når en optagelse slettes, forsvinder alt, hvad der er lavet ud fra den, sammen med den: udskriften og opsummeringen.
