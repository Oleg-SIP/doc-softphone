---
title: Fönstret Inspelningar
sidebar_position: 2
description: Biblioteket med samtal — filtrera, spela upp, läs utskriften och sammanfattningen.
---

**Inspelningar** är där varje samtal bor, hur det än kom in: ett telefonsamtal, ett möte fångat från ett annat program eller en importerad fil. Varje samtal visas med sin sammanfattning redan gjord.

<Shot name="01_recordings" alt="Fliken Inspelningar: listan över samtal" />

## Hitta ett samtal {#finding-a-conversation}

Raden överst har fyra filter, ett sökfält och en meny:

| Kontroll | Begränsar listan efter |
| --- | --- |
| **Sort** | sättet samtalet kom in på |
| **Period** | datumet |
| **Kategori** | kategorin det sorterats under — se [Ordlistor](../ai-processing/dictionaries.md) |
| **Märke** | märkena det har |
| **Sök** | det som sades i det — sökningen går igenom utskrifterna av allt du har spelat in |

Knappen **⋮** till höger på raden öppnar fler åtgärder för listan: **Importera från filer**, **Exportera till CSV** och **Öppna i en webbläsare**.

## Listan {#the-list}

Varje rad visar:

- en ikon för sorts samtal: en lur för ett telefonsamtal, ett fönster för ett möte i ett annat program;
- en titel — den andra partens namn, numret eller **Ett annat program** för ett fångat möte — och under den datumet och sammanfattningen på en rad;
- till höger kategorin med dess poäng (ett tal, till exempel *Support · 2*), sedan etiketterna och sist längden.

Etiketter som ritas i rött är **signaler** (på bilden *Arg kund* och *Avhopprisk*); de andra är vanliga etiketter (*Klagomål*, *Återuppringning utlovad*). Ett samtal utan sammanfattning och kategori har inte sammanfattats än — den första raden på bilden.

## Spelaren {#the-player}

Markera en rad för att öppna spelaren under listan.

<Shot name="02_recording_details" alt="En vald inspelning: spelaren och utskriften under listan" />

- De två vågformerna är inspelningens två kanaler, en för vardera sidan av samtalet. Stapeln under rullar genom en lång inspelning.
- **▶** spelar upp och pausar; tiderna till vänster är positionen och den totala längden.
- **1×** ändrar hastigheten; **Båda** väljer vilken kanal du hör.
- Diskettknappen sparar ljudet, **×** stänger spelaren.

## Utskriften och sammanfattningen {#the-transcript-and-the-write-up}

Under spelaren finns utskriften, med en rad per replik, tidpunkten då den sades och talarens namn (**Du**, den andra partens namn eller, för ett fångat möte, **Ett annat program**). Klicka på en rad för att höra det ögonblicket; raden under uppspelningsmarkören markeras och ordet som sägs markeras i den.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Utskriften bredvid ljudet" />

Listrutan ovanför utskriften väljer vad som visas — utskriften som gjorts av en av dina [igenkännare](../ai-processing/transcription.md) (en stjärna markerar inspelningens huvudutskrift), eller en sammanfattning som **Åtgärder**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Åtgärder som samtalet lämnade efter sig" />

De fyra ikonerna till höger om listrutan:

| Ikon | Gör |
| --- | --- |
| Gnistor | Låter modellen skriva det valda objektet nu. |
| Två ark | Kopierar det. |
| Diskett | Sparar det i en fil. |
| Papperskorg | Tar bort det. |

Du kan exportera en utskrift som vanlig text eller som undertexter.

Sammanfattningen görs av de [prompter](/ai-processing/prompt-studio) och modeller du har konfigurerat under [Bearbetning](../ai-processing/processing.md), genom [regler](../ai-processing/processing.md#rules) som körs av sig själva eller när du ber om det. Hur länge inspelningar sparas ställs in under [Inspelningar](../recordings.md#retention).

## En inspelning du redan har {#a-recording-you-already-have}

En inspelning som gjorts någon annanstans — på en mobiltelefon, en diktafon eller ett annat system — kan läggas till med **⋮ → Importera från filer**. Den arkiveras precis som ett ringt samtal: utskriven, sammanfattad och hittad av samma sökning.

## Ta bort en inspelning {#deleting-a-recording}

När en inspelning tas bort försvinner allt som gjorts av den tillsammans med den: utskriften och sammanfattningen.
