---
slug: /
title: Documentatie van AI Softphone
sidebar_position: 1
description: Wat AI Softphone is, waarop het draait en waar elk deel van het programma beschreven staat.
---

[AI Softphone](https://ai-softphone.com/) is een softphone voor een IP-telefooncentrale die bovendien elk gesprek omzet in tekst en een schriftelijke samenvatting. Een gesprek kan er op drie manieren binnenkomen, en alle drie komen terecht in dezelfde bibliotheek, met dezelfde opname, hetzelfde transcript en dezelfde uitwerking:

- **een gesprek** gevoerd of aangenomen in het programma, via elke IP-centrale of SIP-provider;
- **een vergadering** in Zoom, Teams, Meet of een andere toepassing, opgenomen vanaf de computer zelf;
- **een opname die u al hebt** — van een mobiele telefoon, een dictafoon of een ander systeem — toegevoegd aan de bibliotheek.

Opnames, transcripten en geschiedenis worden bewaard in een bestand dat van u is. Er is geen account of abonnement nodig, en het programma is vrije software onder GPL v2.

## Van een gesprek naar een uitwerking {#from-a-conversation-to-a-write-up}

1. Er komt een gesprek binnen: een telefoongesprek, een vergadering of een bestand.
2. Het wordt op twee kanalen opgenomen, zodat wat u zei en wat de andere kant zei gescheiden blijven.
3. Het wordt uitgeschreven, spreker voor spreker, gelijk met de audio.
4. Het taalmodel dat u kiest werkt het uit: samenvatting, taken, categorie, labels en signalen — en u kunt het gesprek een vraag stellen.

## Downloaden en systeemvereisten {#download-and-system-requirements}

Het programma is gratis te downloaden van [ai-softphone.com](https://ai-softphone.com/#download): een installatieprogramma (`.exe`) voor Windows, een schijfkopie (`.dmg`) voor macOS, en een AppImage of een `.deb` voor Linux. Het installatieprogramma, de schijfkopie en de AppImage hebben vooraf niets anders nodig — Qt, OpenSSL en de C++-runtime zitten erin. De uitzondering is het `.deb`-pakket: dat gebruikt de C++-runtime van het systeem zelf, zie hieronder. U hebt een SIP-account nodig, van uw provider of van de centrale die u zelf beheert. Opnemen werkt zodra het programma geïnstalleerd is; het transcript en de uitwerking vragen een dienst die u kiest of een model op uw eigen machine.

| Systeem | Vereisten |
| --- | --- |
| macOS | macOS 14.4 of nieuwer; alleen Apple silicon — een Intel-Mac kan het niet openen, ook niet via Rosetta; Metal-graphics; 160 MB schijfruimte, plus de opnames. Het systeem vraagt één keer om de microfoon. |
| Windows | Windows 10 versie 1809 (build 17763) of nieuwer, en Windows 11; 64-bits Intel- of AMD-processor; Direct3D 11 of OpenGL 2.1; 250 MB schijfruimte, plus de opnames. |
| Linux | Ubuntu 22.04 LTS of nieuwer, Debian 12 of nieuwer, en alles van die leeftijd — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C-bibliotheek 2.35 of nieuwer; 64-bits Intel- of AMD-processor; OpenGL 2.1 of OpenGL ES 2.0, op X11 of Wayland; PipeWire of PulseAudio (ALSA waar geen van beide is); 200 MB schijfruimte, plus de opnames. Het pictogram in het systeemvak vraagt een bureaublad met een statusmeldingsgebied. |

Op Linux draait de AppImage op elke distributie van die leeftijd: maak het bestand uitvoerbaar en start het. Het `.deb` vraagt daarnaast de eigen C++-runtime van het systeem uit GCC 13, die Ubuntu 24.04 en Debian 13 hebben en Ubuntu 22.04 niet; neem op alles wat ouder is de AppImage.

De interface is beschikbaar in dertig talen, te kiezen bij [Uiterlijk](/program/appearance) en te wijzigen zonder herstart.

De schermafbeeldingen in deze documentatie zijn op macOS gemaakt en klein weergegeven: klik op een afbeelding om haar op ware grootte te zien. Op de andere systemen ziet het programma er hetzelfde uit en werkt het hetzelfde.

## Eerste stappen {#first-steps}

1. [Voeg een account toe](sip-accounts/setup.md) voor uw centrale of SIP-provider.
2. [Kies de microfoon en de luidsprekers](sip-accounts/devices.md) en voer een testgesprek.
3. Bepaal [welke gesprekken worden opgenomen](recordings/call-recording.md).
4. Voeg een [herkenner](ai-processing/transcription.md) en een [taalmodel](ai-processing/processing.md) toe als u transcripten en uitwerkingen wilt.

**Instellingen → Overzicht** houdt deze lijst voor u bij: een groene stip markeert een gedane stap, een rode een stap die nog moet. Zie [Overzicht van de instellingen](interface/settings-overview.md).

## Wat u hierna kunt lezen {#where-to-read-next}

| Als u wilt… | Lees |
| --- | --- |
| Uw weg vinden in de vensters | [Interface](interface/main-window.md) |
| De telefoon met uw centrale verbinden | [Een SIP-account instellen](sip-accounts/setup.md) |
| Een microfoon, luidsprekers en beltoon kiezen | [Apparaten](sip-accounts/devices.md) |
| De codecs, het wisselgesprek en de gesprekgeschiedenis instellen | [Gespreksinstellingen](sip-accounts/calls.md) |
| Collega's op knoppen met één druk zetten | [Knoppen](sip-accounts/buttons.md) |
| Bepalen welke gesprekken worden opgenomen, en hoelang | [Gesprekken opnemen](recordings/call-recording.md) |
| Uw gesprekken beluisteren, doorzoeken en lezen | [Venster Opnames](interface/recordings.md) |
| Een vergadering in een andere toepassing opnemen | [Vastleggen](capture/capture.md) |
| De herkenner kiezen die spraak in tekst omzet | [Transcriptie](ai-processing/transcription.md) |
| Bepalen welke AI uw gesprekken uitwerkt en wat dat mag kosten | [Verwerking](ai-processing/processing.md) |
| De categorieën, labels en signalen wijzigen | [Woordenlijsten](ai-processing/dictionaries.md) |
| De indeling, het thema, het opstarten en de sneltoetsen wijzigen | [Uiterlijk](program/appearance.md), [Opstarten](program/startup.md) en [Sneltoetsen](program/shortcuts.md) |
| Een CRM of een ander programma koppelen | [Webhooks](integration/webhooks.md) en [Lokale REST-API](integration/rest-api.md) |
| Zien wat de telefoon en de centrale tegen elkaar zeggen | [Diagnose](troubleshooting/diagnostics.md) |
| De oorzaak van een probleem vinden | [Veelvoorkomende problemen](troubleshooting/common-problems.md) |
| Delen van het programma uitzetten | [Modules](application/modules.md) |
| De versie, de updates en de inhoud van het gebruiksrapport bekijken | [Over](application/about.md) |

De pagina's volgen de volgorde van de tabbladen in **Instellingen**.

## Privacy {#privacy}

- Standaard blijft alles op uw computer: opnames, transcripten en geschiedenis staan in een bestand dat van u is. Niets van een gesprek — geen nummer, geen naam, geen woord van wat er gezegd is — gaat ergens heen waar u het niet zelf naartoe stuurde.
- Wachtwoorden van accounts, de koptekstwaarde van de webhook en het API-token worden bewaard in de sleutelhanger van het besturingssysteem, nooit in een instellingenbestand.
- Een nieuwe versie meldt zich wanneer die verschijnt — nooit tijdens een gesprek — en wordt pas geïnstalleerd als u dat zegt.
- Het programma stuurt één klein gebruiksrapport per dag. U ziet wat erin staat voordat het eerste vertrekt, en u kiest hoeveel het bevat: **Eenvoudig** of **Uitgebreid**. Het bevat nooit nummers, contacten, het adres van uw centrale of iets wat in een gesprek gezegd is. De volledige lijst staat bij [Over](/application/about#telemetry).
- Het programma is vrije software onder GPL v2.
