---
title: Vinduet Opptak
sidebar_position: 2
description: Biblioteket med samtaler — filtrer, spill av, les utskriften og sammendraget.
---

**Opptak** er der hver samtale bor, uansett hvordan den kom inn: en telefonsamtale, et møde fanget fra et annet program eller en importert fil. Hver står i listen med sammendraget allerede laget.

<Shot name="01_recordings" alt="Fanen Opptak: listen over samtaler" />

## Finne en samtale {#finding-a-conversation}

Linjen øverst har fire filtre, et søkefelt og en meny:

| Kontroll | Snevrer listen inn etter |
| --- | --- |
| **Slag** | måten samtalen kom inn på |
| **Periode** | datoen |
| **Kategori** | kategorien den er sortert under — se [Ordlister](../ai-processing/dictionaries.md) |
| **Merke** | merkene den har |
| **Søk** | det som ble sagt i den — søket går gjennom utskriftene av alt du har tatt opp |

Knappen **⋮** til høyre på linjen åpner flere handlinger for listen: **Importer fra filer**, **Eksporter til CSV** og **Åpne i en nettleser**.

## Listen {#the-list}

Hver rad viser:

- et ikon for slags samtale: et rør for en telefonsamtale, et vindu for et møde i et annet program;
- en tittel — navnet på den andre parten, nummeret eller **Et annet program** for et fanget møde — og under det datoen og sammendraget på én linje;
- til høyre kategorien med poengsummen (et tall, for eksempel *Brukerstøtte · 2*), så etikettene og til slutt lengden.

Etiketter tegnet i rødt er **signaler** (på bildet *Sint kunde* og *Fare for oppsigelse*); de andre er vanlige etiketter (*Klage*, *Tilbakeringing lovet*). En samtale uten sammendrag og kategori er ennå ikke oppsummert — den første raden på bildet.

## Avspilleren {#the-player}

Merk en rad for å åpne avspilleren under listen.

<Shot name="02_recording_details" alt="Et opptak valgt: avspilleren og utskriften under listen" />

- De to bølgeformene er opptakets to kanaler, én for hver side av samtalen. Linjen under ruller gjennom et langt opptak.
- **▶** spiller av og setter på pause; tidene til venstre er posisjonen og den totale lengden.
- **1×** endrer hastigheten; **Begge** velger hvilken kanal du hører.
- Diskknappen lagrer lyden, **×** lukker avspilleren.

## Utskriften og sammendraget {#the-transcript-and-the-write-up}

Under avspilleren står utskriften, med én linje per replikk, tidspunktet den ble sagt og navnet på den som snakker (**Du**, navnet på den andre parten eller, for et fanget møde, **Et annet program**). Klikk på en linje for å høre det øyeblikket; linjen under avspillingsmarkøren utheves, og ordet som blir sagt, markeres i den.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Utskriften ved siden av lyden" />

Nedtrekkslisten over utskriften velger hva som vises — utskriften laget av en av [gjenkjennerne](../ai-processing/transcription.md) dine (en stjerne markerer opptakets hovedutskrift), eller et sammendrag som **Handlinger**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Handlinger samtalen etterlot seg" />

De fire ikonene til høyre for nedtrekkslisten:

| Ikon | Gjør |
| --- | --- |
| Gnister | Får modellen til å skrive det valgte elementet nå. |
| To ark | Kopierer det. |
| Disk | Lagrer det i en fil. |
| Søppelbøtte | Sletter det. |

Du kan eksportere en utskrift som ren tekst eller som undertekster.

Sammendraget lages av [promptene](/ai-processing/prompt-studio) og modellene du har satt opp under [Behandling](../ai-processing/processing.md), gjennom [regler](../ai-processing/processing.md#rules) som kjører av seg selv eller når du ber om det. Hvor lenge opptak beholdes, stilles inn under [Opptak](../recordings.md#retention).

## Et opptak du allerede har {#a-recording-you-already-have}

Et opptak laget et annet sted — på en mobiltelefon, en diktafon eller et annet system — kan legges inn med **⋮ → Importer fra filer**. Det arkiveres akkurat som en ringt samtale: skrevet ut, oppsummert og funnet av det samme søket.

## Slette et opptak {#deleting-a-recording}

Når et opptak slettes, forsvinner alt som er laget av det, sammen med det: utskriften og sammendraget.
