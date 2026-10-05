---
title: Om
sidebar_position: 2
description: Versionen, uppdateringar, ditt land, licensen, vad användningsrapporten innehåller, formuläret för återkoppling och vad programmet är byggt med.
---

**Inställningar → Om** innehåller allt om själva programmet.

<Shot name="20_settings_about" alt="Inställningar → Om" />

## Version och land {#version-and-country}

Överst finns namnet, **Version** (på bilden 1.0.0) och en länk till webbplatsen, [ai-softphone.com](https://ai-softphone.com/).

**Land** talar om för programmet var du är. Det hjälper till att välja den bästa uppdateringsservern och öppnar för språk- och taltjänster som drivs i ditt land. **Ta reda på det automatiskt** fyller i det.

## Uppdateringar {#updates}

Fliken talar om ifall du har den senaste versionen och när det senast kontrollerades. **Leta efter uppdateringar** kontrollerar nu.

**Leta efter uppdateringar automatiskt**, på som standard, kontrollerar en gång om dagen och strax efter att telefonen har startat. Den ber en server om en liten fil, och ingenting laddas ner eller installeras utan att du säger till.

## Licens {#licence}

Programmet är fri programvara under GPL-2.0-or-later. Det levereras utan någon garanti, och du får vidaredistribuera det enligt licensens villkor; hela texten följer med i filen `LICENSE`.

## Telemetri {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Inställningar → Om: vad användningsrapporten innehåller" />

Programmet skickar en liten användningsrapport om dagen. Du får se vad den innehåller innan den första skickas, och fliken visar det:

| | Vad som skickas |
| --- | --- |
| **Skickas alltid** | Att programmet startades, dess version och gränssnittets språk; operativsystemets version, språkinställning, land och tidszon. |
| **Skickas också, i läget Utökat** | Räknarna för samtal och för fångade samtal; tillverkare och version av den anslutna växeln, aldrig dess adress; hur många steg i [Översikt](/interface/settings-overview) som är klara, och den valda layouten. |
| **Skickas aldrig, i något läge** | Numren du har ringt eller blivit uppringd från; konton, lösenord eller något från nyckelringen; kontakter, samtal, utskrifter eller inspelningar; allt du har skrivit, och alla privata uppgifter på datorn. |

Varje installation skapar en slumpmässig identifierare åt sig själv, så att rapporter från samma kopia av programmet kan kännas igen som en. Den är inte härledd ur något om dig eller din dator, och den namnger ingen — men eftersom den består kan rapporterna den följer med kopplas till varandra. Det gör dem pseudonyma snarare än anonyma.

Den enkla rapporten har berättigat intresse som rättslig grund: att veta vilka versioner som används är det som låter en rättelse nå dem som behöver den. Allt den utökade rapporten lägger till finns där för att du valde det, och du kan ändra det här när som helst.

### Rapportering {#reporting}

| Val | |
| --- | --- |
| **Utökat** | Den enkla rapporten och det som *Skickas också* visar. Valt på bilden. |
| **Enkelt** | Bara det som *Skickas alltid*. |
| **Avstängt** | Ingen rapport alls. Bara tillgängligt i Enterprise-utgåvan; annars är alternativet grått. |

## Återkoppling {#feedback}

<Shot name="20c_settings_about_bottom" alt="Inställningar → Om: formuläret för återkoppling och komponenterna som programmet är byggt med" />

Ett formulär som skriver till utvecklarna utan att lämna programmet.

| Fält | |
| --- | --- |
| **Ämne** och **Meddelande** | Det du vill säga. |
| **Ditt namn** och **Adress för ett svar** | Båda är frivilliga. Utan en adress finns det inget sätt att svara. |
| **Bifoga loggen** | Lägger till slutet av loggen, ungefär 512 kB. Se [Diagnostik](/troubleshooting/diagnostics). |

**Skicka** förblir grå tills det finns något att skicka.

## Byggt med {#built-with}

Komponenterna som programmet är byggt på, var och en med sin licens: Qt 6 (GPL-2.0 eller GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (public domain), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) och PulseAudio-klienten (LGPL-2.1-or-later). Var och en används under licensen bredvid; där en komponent erbjuder flera är det den nämnda som har valts.
