---
title: Huvudfönster
sidebar_position: 1
description: Telefonen till vänster, biblioteket och inställningarna till höger — layouten i AI Softphones huvudfönster.
---

Huvudfönstret är själva telefonen. Med standardlayouten, **Ett fönster**, står telefonen till vänster och allt annat öppnas till höger. [Layouten kan ändras](../program/appearance.md).

<Shot name="03_contacts" full alt="Huvudfönstret: telefonen till vänster och fliken Kontakter till höger" />

## Telefonen {#the-phone}

Uppifrån och ned innehåller vänster sida:

- fältet **Nummer**;
- knappsatsen och ringknappen;
- kontobrickorna;
- knapparna som bevakar andra anknytningar;
- de fyra ställena att gå till: **Inspelningar**, **Kontakter**, **Historik** och **Inställningar**.

### Nummerfältet {#the-dialler}

- **Nummer** — skriv eller klistra in numret du vill ringa. Klockikonen längst ut i fältet öppnar listan över nummer du nyligen har ringt eller blivit uppringd från.
- De runda knapparna **1–9**, **\***, **0** och **#** fyller i numret, och under ett samtal skickar de toner (DTMF).
- Lurknappen ringer upp. Den är grå så länge det inte finns något nummer.

<Shot name="22_last_calls" full alt="Listan över senaste samtal under fältet Nummer, bredvid fliken Historik" />

När listan över senaste nummer är öppen visar fältet en pil och ringknappen flyttar till höger om den. Varje post är ett namn, eller ett nummer om den som ringer inte finns i [Kontakter](contacts-history.md), med datumet. En röd lur markerar ett missat samtal; ett antal inom parentes — till exempel *Helpdesk (4)* — står för flera samtal i rad till samma part.

### Kontobrickorna {#the-account-chips}

Under knappsatsen finns en bricka för varje [konto](../sip-accounts/setup.md). En grön prick betyder att kontot är registrerat på växeln. Den markerade brickan (på bilden **305 Support**) är kontot som nästa samtal rings från; tryck på en annan bricka för att byta. Den runda röda knappen till höger om brickorna är stör ej.

### Knapparna {#the-buttons}

Under brickorna står [knapparna](../sip-accounts/buttons.md) du har skapat för kolleger och linjer, var och en med en lampa — **Lindberg** och **Lager** på bilderna. Tryck på en för att ringa numret.

### Inspelningar, Kontakter, Historik, Inställningar {#recordings-contacts-history-settings}

De här fyra posterna längst ned öppnar var sin flik till höger, bredvid varandra: [Inspelningar](../recordings/recordings-window.md), [Kontakter och historik](contacts-history.md) och [Inställningar](settings-overview.md). Flikar du har öppnat ligger kvar i raden överst på höger sida.

## Ett pågående samtal {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Ett pågående samtal" />

Medan ett samtal pågår flyttar nummerfältet upp överst med en knappsatsikon i, och samtalet visas på ett kort:

- samtalets tillstånd och längd (**I samtal · 0:21**), den andra partens namn, **Linje** och namnet på kontot samtalet går över, samt numret;
- två lodräta nivåstaplar på kortets sidor, en för vardera av ljudets kanaler;
- en rad knappar: spela in (cirkel), stäng av mikrofonen (mikrofon), parkera (paus) och den röda knappen **Lägg på**;
- en andra rad: koppla vidare (lur med en pil) och knappsatsen.

Ett samtal kan kopplas vidare direkt, eller efter att du först har pratat med personen.

Om numret finns i **Kontakter** visas namnet i stället för numret. Samma åtgärder har [genvägar](../program/shortcuts.md): svara, lägga på, parkera och stänga av mikrofonen.

## Flera samtal samtidigt {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Flera samtal" />

Ett inkommande samtal aviseras med en banderoll var du än arbetar, även när telefonen är dold. Ett nytt inkommande samtal visas på ett eget kort ovanför listan, med en grön, en gul och en röd knapp och en rad som säger vem du pratar med just nu (**I samtal med …**). Listan nedanför visar varje samtal med dess tillstånd — **Parkerat**, **I samtal**, **Inkommande samtal** — och kontot det går över. En pausikon markerar ett parkerat samtal och en högtalarikon det du pratar i.

Vad som händer när någon ringer medan du redan är i ett samtal ställs in under [Samtalsinställningar](../sip-accounts/calls.md#call-waiting).

## Konferens {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="En konferens" />

Samtal som har kopplats samman visas som ett enda kort **Konferens** på kontots linje. Varje deltagare står med sin tid i samtalet och sin egen knapp **Lägg på**. Knapparna nedanför spelar in, stänger av mikrofonen och avslutar konferensen för alla; den breda knappen längst ned delar upp konferensen i separata samtal igen.

## Fångst {#capture}

När [inspelning från andra program](../capture/capture.md) är tillåten under **Inställningar → Fångst** visas en remsa mellan kontobrickorna och knapparna.

<Shot name="10_settings_capture" full alt="Fångstremsan längst ned på telefonen: Fångst · klar, Spela in och två nivåstaplar" />

- **Fångst · klar** säger att programmet lyssnar efter ett samtal i ett annat program.
- **Spela in** startar en fångst för hand.
- De två tunna staplarna nedanför visar ljudnivån: den övre är du, den nedre är det datorn spelar upp. Hur de ritas ställs in under **Bild i raden vid telefonens fot**.

Programmet kan också ligga i statusfältet (menyraden på macOS) och tas fram med en [genväg](../program/shortcuts.md).
