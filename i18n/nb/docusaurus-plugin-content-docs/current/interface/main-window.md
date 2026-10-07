---
title: Hovedvindu
sidebar_position: 1
description: Telefonen til venstre, biblioteket og innstillingene til høyre — oppsettet i hovedvinduet til AI Softphone.
---

Hovedvinduet er selve telefonen. Med standardoppsettet, **Ett vindu**, står telefonen til venstre, og alt annet åpnes til høyre. [Oppsettet kan endres](../program/appearance.md).

<Shot name="03_contacts" full alt="Hovedvinduet: telefonen til venstre og fanen Kontakter til høyre" />

## Telefonen {#the-phone}

Fra topp til bunn inneholder venstre side:

- feltet **Nummer**;
- tastaturet og ringetasten;
- kontobrikkene;
- knappene som følger med på andre internnumre;
- de fire stedene å gå: **Opptak**, **Kontakter**, **Historikk** og **Innstillinger**.

### Nummerfeltet {#the-dialler}

- **Nummer** — skriv eller lim inn nummeret du vil ringe. Klokkeikonet ytterst i feltet åpner listen over numre du nylig har ringt eller blitt ringt fra.
- De runde tastene **1–9**, **\***, **0** og **#** fyller inn nummeret, og under en samtale sender de toner (DTMF).
- Røret ringer opp. Det er grått så lenge det ikke står noe nummer.

<Shot name="22_last_calls" full alt="Listen over nylige samtaler under feltet Nummer, ved siden av fanen Historikk" />

Når listen over nylige numre er åpen, viser feltet en pil, og ringetasten flytter seg til høyre for den. Hver oppføring er et navn, eller et nummer hvis den som ringer ikke står i [Kontakter](contacts-history.md), med datoen. Et rødt rør markerer et tapt anrop; et antall i parentes — for eksempel *Brukerstøtte (4)* — står for flere samtaler på rad til samme part.

### Kontobrikkene {#the-account-chips}

Under tastaturet er det én brikke for hver [konto](../sip-accounts/setup.md). En grønn prikk betyr at kontoen er registrert på sentralen. Den uthevede brikken (på bildet **305 Kundeservice**) er kontoen neste samtale ringes fra; trykk på en annen brikke for å bytte. Den runde røde knappen til høyre for brikkene er ikke forstyrr.

### Knappene {#the-buttons}

Under brikkene står [knappene](../sip-accounts/buttons.md) du har laget for kolleger og linjer, hver med en lampe — **Johansen** og **Lager** på bildene. Trykk på en for å ringe nummeret.

### Opptak, Kontakter, Historikk, Innstillinger {#recordings-contacts-history-settings}

Disse fire punktene nederst åpner hver sin fane til høyre, side om side: [Opptak](../interface/recordings.md), [Kontakter og historikk](contacts-history.md) og [Innstillinger](settings-overview.md). Faner du har åpnet, blir stående i raden øverst på høyre side.

## En pågående samtale {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="En pågående samtale" />

Mens en samtale pågår, flytter nummerfeltet seg til toppen med et tastaturikon inni, og samtalen vises på et kort:

- samtalens tilstand og lengde (**I samtale · 0:21**), navnet på den andre parten, **Linje** og navnet på kontoen samtalen går over, og nummeret;
- to loddrette nivåstolper på sidene av kortet, én for hver av lydens kanaler;
- en rad med knapper: ta opp (sirkel), slå av lyd (mikrofon), sett på vent (pause) og den røde knappen **Legg på**;
- en andre rad: sett over (rør med en pil) og tastaturet.

En samtale kan settes over direkte, eller etter at du først har snakket med personen.

Hvis nummeret er kjent i **Kontakter**, vises navnet i stedet for nummeret. De samme handlingene har [snarveier](../program/shortcuts.md): svar, legg på, sett på vent og slå av lyd.

## Flere samtaler samtidig {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Flere samtaler" />

En innkommende samtale varsles med et banner uansett hvor du jobber, også når telefonen er skjult. En ny innkommende samtale dukker opp på sitt eget kort over listen, med en grønn, en gul og en rød knapp og en linje som sier hvem du snakker med nå (**I samtale med …**). Listen under viser hver samtale med tilstanden — **På vent**, **I samtale**, **Innkommende samtale** — og kontoen den går over. Et pauseikon markerer en samtale på vent, og et høyttalerikon den du snakker i.

Hva som skjer når noen ringer mens du allerede er i en samtale, stilles inn under [Samtaleinnstillinger](../sip-accounts/calls.md#call-waiting).

## Konferanse {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="En konferanse" />

Samtaler som er slått sammen, vises som ett kort **Konferanse** på kontoens linje. Hver deltaker står oppført med tiden i samtalen og sin egen knapp **Legg på**. Knappene under tar opp, slår av lyden og avslutter konferansen for alle; den brede knappen nederst deler konferansen opp i separate samtaler igjen.

## Fanging {#capture}

Når [opptak fra andre programmer](../capture/capture.md) er tillatt under **Innstillinger → Fanging**, dukker det opp en stripe mellom kontobrikkene og knappene.

<Shot name="10_settings_capture" full alt="Fangingsstripen nederst på telefonen: Fanging · klar, Ta opp og to nivåstolper" />

- **Fanging · klar** sier at programmet lytter etter en samtale i et annet program.
- **Ta opp** starter en fanging for hånd.
- De to tynne stolpene under viser lydnivået: den øverste er deg, den nederste er det maskinen spiller av. Hvordan de tegnes, stilles inn under **Bilde i raden ved foten av telefonen**.

Programmet kan også ligge i systemstatusfeltet (menylinjen på macOS) og hentes fram med en [snarvei](../program/shortcuts.md).
