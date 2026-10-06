---
title: Over
sidebar_position: 2
description: De versie, updates, uw land, de licentie, wat het gebruiksrapport bevat, het formulier voor terugkoppeling en waarmee het programma is gebouwd.
---

**Instellingen → Over** bevat alles over het programma zelf.

<Shot name="20_settings_about" alt="Instellingen → Over" />

## Versie en land {#version-and-country}

Bovenaan staan de naam, de **Versie** (op de afbeelding 1.0.1) en een koppeling naar de website, [ai-softphone.com](https://ai-softphone.com/).

**Land** vertelt het programma waar u bent. Dat helpt bij het kiezen van de beste updateserver en opent de weg naar taal- en spraakdiensten die in uw land worden gehost. **Automatisch bepalen** vult het in.

## Updates {#updates}

Het tabblad zegt of u de nieuwste versie hebt en wanneer er voor het laatst is gecontroleerd. **Op updates controleren** controleert nu.

**Automatisch op updates controleren**, standaard aan, controleert eenmaal per dag en kort nadat de telefoon is gestart. Het vraagt een server om één klein bestand, en er wordt niets gedownload of geïnstalleerd zonder dat u dat zegt.

## Licentie {#licence}

Het programma is vrije software onder de GPL-2.0-or-later. Het wordt geleverd zonder enige garantie, en u mag het verspreiden onder de voorwaarden van die licentie; de volledige tekst zit in het bestand `LICENSE`.

## Telemetrie {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Instellingen → Over: wat het gebruiksrapport bevat" />

Het programma stuurt één klein gebruiksrapport per dag. U ziet wat erin staat voordat het eerste vertrekt, en het tabblad somt het op:

| | Wat er wordt verzonden |
| --- | --- |
| **Altijd verzonden** | Dat de toepassing is gestart, de versie en de interfacetaal; de versie van het besturingssysteem, de landinstelling, het land en de tijdzone. |
| **Daarnaast verzonden, in de modus Uitgebreid** | De tellers van gesprekken en van vastgelegde gesprekken; de fabrikant en de versie van de gekoppelde softswitch, nooit het adres; hoeveel stappen van het [Overzicht](/interface/settings-overview) zijn gedaan, en de gekozen indeling. |
| **Nooit verzonden, in geen enkele modus** | De nummers die u hebt gebeld of die u belden; accounts, wachtwoorden of iets uit de sleutelhanger; contacten, gesprekken, transcripten of opnames; alles wat u hebt getypt, en alle privégegevens op de computer. |

Elke installatie maakt voor zichzelf één willekeurige identificatie aan, zodat rapporten van dezelfde kopie van het programma als één kunnen worden herkend. Die is nergens van afgeleid wat u of uw computer betreft, en noemt niemand — maar omdat ze blijft bestaan, kunnen de rapporten die ze draagt aan elkaar worden gekoppeld. Daardoor zijn ze gepseudonimiseerd in plaats van anoniem.

Het eenvoudige rapport heeft een gerechtvaardigd belang als grondslag: weten welke versies in gebruik zijn, is wat een reparatie bij de mensen brengt die haar nodig hebben. Alles wat het uitgebreide rapport toevoegt, staat erin omdat u daarvoor koos, en u kunt dat hier op elk moment wijzigen.

### Rapportage {#reporting}

| Keuze | |
| --- | --- |
| **Uitgebreid** | Het eenvoudige rapport en wat *Daarnaast verzonden* opsomt. Gekozen op de afbeelding. |
| **Eenvoudig** | Alleen wat *Altijd verzonden* wordt. |
| **Uit** | Helemaal geen rapport. Alleen beschikbaar in de Enterprise-editie; anders is de optie grijs. |

## Terugkoppeling {#feedback}

<Shot name="20c_settings_about_bottom" alt="Instellingen → Over: het formulier voor terugkoppeling en de onderdelen waarmee het programma is gebouwd" />

Een formulier dat de ontwikkelaars schrijft zonder het programma te verlaten.

| Veld | |
| --- | --- |
| **Onderwerp** en **Bericht** | Wat u wilt zeggen. |
| **Uw naam** en **Adres voor een antwoord** | Allebei optioneel. Zonder adres is er geen manier om u te antwoorden. |
| **Het logboek bijvoegen** | Voegt het einde van het logboek toe, ongeveer 512 kB. Zie [Diagnose](/troubleshooting/diagnostics). |

**Verzenden** blijft grijs tot er iets te verzenden is.

## Gebouwd met {#built-with}

De onderdelen waarop het programma is gebouwd, elk met zijn licentie: Qt 6 (GPL-2.0 of GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (publiek domein), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) en de PulseAudio-client (LGPL-2.1-or-later). Elk wordt gebruikt onder de licentie ernaast; waar een onderdeel er meerdere biedt, is de genoemde gekozen.
