---
title: Om
sidebar_position: 2
description: Versjonen, oppdateringer, landet ditt, lisensen, hva bruksrapporten inneholder, skjemaet for tilbakemelding og hva programmet er bygget med.
---

**Innstillinger → Om** inneholder alt om selve programmet.

<Shot name="20_settings_about" alt="Innstillinger → Om" />

## Versjon og land {#version-and-country}

Øverst står navnet, **Versjon** (på bildet 1.0.1) og en lenke til nettstedet, [ai-softphone.com](https://ai-softphone.com/).

**Land** forteller programmet hvor du er. Det hjelper med å velge den beste oppdateringsserveren og åpner for språk- og taletjenester som driftes i landet ditt. **Finn det automatisk** fyller det ut.

## Oppdateringer {#updates}

Fanen forteller om du har den nyeste versjonen og når det sist ble sjekket. **Se etter oppdateringer** sjekker nå.

**Se etter oppdateringer automatisk**, på som standard, sjekker én gang om dagen og kort tid etter at telefonen har startet. Den ber en server om én liten fil, og ingenting lastes ned eller installeres uten at du sier ja.

## Lisens {#licence}

Programmet er fri programvare under GPL-2.0-or-later. Det leveres uten noen garanti, og du kan videreformidle det på vilkårene i den lisensen; hele teksten følger med i filen `LICENSE`.

## Telemetri {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Innstillinger → Om: hva bruksrapporten inneholder" />

Programmet sender én liten bruksrapport om dagen. Du får se hva den inneholder før den første sendes, og fanen viser det:

| | Hva som sendes |
| --- | --- |
| **Sendes alltid** | At programmet ble startet, versjonen og grensesnittspråket; operativsystemets versjon, språkinnstilling, land og tidssone. |
| **Sendes også, i modusen Utvidet** | Tellerne for samtaler og fangede samtaler; leverandør og versjon av den tilkoblede sentralen, aldri adressen; hvor mange trinn i [Oversikt](/interface/settings-overview) som er gjort, og det valgte oppsettet. |
| **Sendes aldri, i noen modus** | Numrene du har ringt eller blitt ringt fra; kontoer, passord eller noe fra nøkkelringen; kontakter, samtaler, utskrifter eller opptak; alt du har skrevet, og alle private data på maskinen. |

Hver installasjon lager én tilfeldig identifikator for seg selv, slik at rapporter fra samme kopi av programmet kan kjennes igjen som én. Den er ikke avledet av noe om deg eller maskinen din, og den navngir ingen — men fordi den varer, kan rapportene den følger med, knyttes til hverandre. Det gjør dem pseudonyme snarere enn anonyme.

Den enkle rapporten har berettiget interesse som grunnlag: å vite hvilke versjoner som er i bruk, er det som lar en rettelse nå fram til dem som trenger den. Alt den utvidede rapporten legger til, er der fordi du valgte det, og du kan endre det her når som helst.

### Rapportering {#reporting}

| Valg | |
| --- | --- |
| **Utvidet** | Den enkle rapporten og det *Sendes også* viser. Valgt på bildet. |
| **Enkel** | Bare det som *Sendes alltid*. |
| **Slått av** | Ingen rapport i det hele tatt. Bare tilgjengelig i Enterprise-utgaven; ellers er valget grått. |

## Tilbakemelding {#feedback}

<Shot name="20c_settings_about_bottom" alt="Innstillinger → Om: skjemaet for tilbakemelding og komponentene programmet er bygget med" />

Et skjema som skriver til utviklerne uten å forlate programmet.

| Felt | |
| --- | --- |
| **Emne** og **Melding** | Det du vil si. |
| **Navnet ditt** og **Adresse for et svar** | Begge er valgfrie. Uten en adresse er det ingen måte å svare på. |
| **Legg ved loggen** | Legger til slutten av loggen, omtrent 512 kB. Se [Diagnostikk](/troubleshooting/diagnostics). |

**Send** forblir grå til det er noe å sende.

## Bygget med {#built-with}

Komponentene programmet er bygget på, hver med sin lisens: Qt 6 (GPL-2.0 eller GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (fri bruk / public domain), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) og PulseAudio-klienten (LGPL-2.1-or-later). Hver brukes under lisensen ved siden av; der en komponent tilbyr flere, er det den nevnte som er valgt.
