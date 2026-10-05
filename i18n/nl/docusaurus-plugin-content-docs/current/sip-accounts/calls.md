---
title: Gespreksinstellingen
sidebar_position: 3
description: De codecs die aan de centrale worden aangeboden, wat er gebeurt als er een tweede gesprek binnenkomt, automatisch herhalen en hoelang de gesprekgeschiedenis bewaard blijft.
---

**Instellingen → Gesprekken** bevat de instellingen die voor elk gesprek gelden, op welk account het ook loopt.

## Audioformaten {#audio-formats}

<Shot name="07_settings_calls" alt="Instellingen → Gesprekken: de audioformaten" />

De lijst met codecs die de telefoon aan de andere kant aanbiedt. De codecs worden *in deze volgorde aangeboden*, en de andere kant kiest uit wat u aanbiedt: hoe hoger een codec staat, hoe groter de kans dat hij wordt gebruikt.

- Het **selectievakje** zet een codec aan of uit. Een codec die uit staat, wordt niet aangeboden.
- **▲** en **▼** schuiven hem omhoog of omlaag in de lijst.
- *breedband* rechts markeert een codec met een breder geluidsbereik dan een telefoonlijn: de stem klinkt duidelijker.

| Codec | Bemonsteringsfrequentie | Standaard aan |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, breedband | ja |
| **G722** | 16 kHz, breedband | ja |
| **PCMU** | 8 kHz | ja |
| **PCMA** | 8 kHz | ja |
| **speex** | 16 kHz, breedband | nee |
| **speex** | 8 kHz | nee |
| **speex** | 32 kHz, breedband | nee |
| **iLBC** | 8 kHz | nee |
| **GSM** | 8 kHz | nee |
| **L16** | 44 kHz, stereo, breedband | nee |
| **L16** | 44 kHz, breedband | nee |

De tabel staat in de volgorde waarmee het programma wordt geleverd.

De codecs worden afgesproken als een gesprek begint, dus een wijziging geldt vanaf uw volgende gesprek. Als een gesprek slecht klinkt, laat dan alleen de codecs aan die uw centrale gebruikt.

## Wisselgesprek {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Instellingen → Gesprekken: wisselgesprek, automatisch herhalen en geschiedenis" />

*Wat er gebeurt als iemand belt terwijl u al in gesprek bent.* De keuzelijst bepaalt het; standaard is **Het tweede gesprek laten overgaan**. Een intercomoproep van uw eigen centrale komt altijd door, wat u ook kiest — zo bereikt een gesprek dat vanuit een CTI-paneel wordt gestart deze telefoon.

## Automatisch herhalen {#autodial}

Als een gesprek niet tot stand komt, biedt de kaart aan om te blijven bellen tot het lukt. Twee schuifregelaars bepalen hoe:

- **Wachten tussen pogingen** — standaard 15 seconden;
- **Opgeven na** — standaard 30 minuten.

## Geschiedenis {#history}

Een gesprekgeschiedenis is bewijs, dus er wordt niets uit verwijderd tenzij u dat hier zegt.

- **Bewaartermijn** kiest hoelang [de gesprekgeschiedenis](/interface/contacts-history#history) een gesprek bewaart. Standaard is **Altijd**.
- **Gesprekgeschiedenis legen** verwijdert alle gesprekken in één keer, wat de termijn ook zegt. Dit kan niet ongedaan worden gemaakt.
