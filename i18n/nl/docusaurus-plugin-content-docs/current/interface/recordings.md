---
title: Venster Opnames
sidebar_position: 2
description: De bibliotheek met gesprekken — filteren, afspelen, het transcript en de uitwerking lezen.
---

**Opnames** is waar elk gesprek staat, hoe het ook binnenkwam: een telefoongesprek, een vergadering vastgelegd uit een andere toepassing of een geïmporteerd bestand. Elk staat in de lijst met zijn uitwerking al klaar.

<Shot name="01_recordings" alt="Het tabblad Opnames: de lijst met gesprekken" />

## Een gesprek vinden {#finding-a-conversation}

De balk bovenaan heeft vier filters, een zoekveld en een menu:

| Bediening | Beperkt de lijst op |
| --- | --- |
| **Soort** | de manier waarop het gesprek binnenkwam |
| **Periode** | de datum |
| **Categorie** | de categorie waaronder het is geordend — zie [Woordenlijsten](../ai-processing/dictionaries.md) |
| **Markering** | de markeringen die het draagt |
| **Zoeken** | wat erin gezegd is — het zoeken gaat door de transcripten van alles wat u hebt opgenomen |

De knop **⋮** rechts in de balk opent meer acties voor de lijst: **Importeren uit bestanden**, **Exporteren naar CSV** en **Openen in een browser**.

## De lijst {#the-list}

Elke regel toont:

- een pictogram voor de soort gesprek: een hoorn voor een telefoongesprek, een venster voor een vergadering in een andere toepassing;
- een titel — de naam van de andere partij, of het nummer, of **Een andere toepassing** voor een vastgelegde vergadering — en daaronder de datum en de samenvatting van één regel;
- rechts de categorie met haar score (een getal, bijvoorbeeld *Ondersteuning · 2*), dan de labels, en aan het eind de duur.

Rood getekende labels zijn **signalen** (op de afbeelding *Boze klant* en *Opzegrisico*); de andere zijn gewone labels (*Klacht*, *Terugbellen toegezegd*). Een gesprek zonder samenvatting en categorie is nog niet uitgewerkt — de eerste regel op de afbeelding.

## De speler {#the-player}

Selecteer een regel om de speler onder de lijst te openen.

<Shot name="02_recording_details" alt="Een geselecteerde opname: de speler en het transcript onder de lijst" />

- De twee golfvormen zijn de twee kanalen van de opname, één per kant van het gesprek. De balk eronder scrolt door een lange opname.
- **▶** speelt af en pauzeert; de tijden links zijn de positie en de totale duur.
- **1×** wijzigt de snelheid; **Allebei** kiest welk kanaal u hoort.
- De diskknop slaat de audio op, **×** sluit de speler.

## Het transcript en de uitwerking {#the-transcript-and-the-write-up}

Onder de speler staat het transcript, met één regel per spreekbeurt, het tijdstip waarop het gezegd werd en de naam van de spreker (**U**, de naam van de andere partij of, bij een vastgelegde vergadering, **Een andere toepassing**). Klik op een regel om dat moment te horen; de regel onder de afspeelkop wordt gemarkeerd en het woord dat wordt uitgesproken wordt erin aangeduid.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Het transcript naast de audio" />

De keuzelijst boven het transcript kiest wat er getoond wordt — het transcript van een van uw [herkenners](../ai-processing/transcription.md) (een ster markeert het hoofdtranscript van de opname), of een uitwerking zoals **Acties**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Acties die het gesprek heeft opgeleverd" />

De vier pictogrammen rechts van de keuzelijst:

| Pictogram | Doet |
| --- | --- |
| Sterretjes | Laat het model het geselecteerde onderdeel nu schrijven. |
| Twee vellen | Kopieert het. |
| Disk | Slaat het op in een bestand. |
| Prullenbak | Verwijdert het. |

U kunt een transcript exporteren als platte tekst of als ondertitels.

De uitwerking wordt gemaakt door de [prompts](/ai-processing/prompt-studio) en modellen die u bij [Verwerking](../ai-processing/processing.md) hebt ingesteld, via [regels](../ai-processing/processing.md#rules) die vanzelf lopen of wanneer u erom vraagt. Hoelang opnames bewaard blijven stelt u in bij [Gesprekken opnemen](../recordings/call-recording.md#retention).

## Een opname die u al hebt {#a-recording-you-already-have}

Een opname die ergens anders is gemaakt — op een mobiele telefoon, een dictafoon of een ander systeem — kan worden toegevoegd met **⋮ → Importeren uit bestanden**. Ze wordt precies zo opgeborgen als een gebeld gesprek: uitgeschreven, uitgewerkt en gevonden door dezelfde zoekfunctie.

## Een opname verwijderen {#deleting-a-recording}

Als een opname wordt verwijderd, gaat alles wat ervan gemaakt is mee: het transcript en de uitwerking.
