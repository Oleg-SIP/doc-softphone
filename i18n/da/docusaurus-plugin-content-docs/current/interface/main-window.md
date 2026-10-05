---
title: Hovedvindue
sidebar_position: 1
description: Telefonen til venstre, biblioteket og indstillingerne til højre — layoutet i AI Softphones hovedvindue.
---

Hovedvinduet er selve telefonen. Med standardlayoutet, **Ét vindue**, står telefonen til venstre, og alt andet åbner til højre. [Layoutet kan ændres](../program/appearance.md).

<Shot name="03_contacts" full alt="Hovedvinduet: telefonen til venstre og fanen Kontakter til højre" />

## Telefonen {#the-phone}

Fra top til bund rummer venstre side:

- feltet **Nummer**;
- tastaturet og opkaldstasten;
- kontochipsene;
- knapperne, der overvåger andre lokalnumre;
- de fire steder at gå hen: **Optagelser**, **Kontakter**, **Historik** og **Indstillinger**.

### Opkaldsfeltet {#the-dialler}

- **Nummer** — skriv eller indsæt det nummer, der skal ringes til. Urikonet for enden af feltet åbner listen over numre, du for nylig har ringet til eller er blevet ringet op fra.
- De runde taster **1–9**, **\***, **0** og **#** udfylder nummeret, og under et opkald sender de toner (DTMF).
- Rørtasten foretager opkaldet. Den er grå, så længe der ikke er noget nummer.

<Shot name="22_last_calls" full alt="Listen over seneste opkald under feltet Nummer, ved siden af fanen Historik" />

Når listen over seneste numre er åben, viser feltet en pil, og opkaldstasten rykker til højre for det. Hver post er et navn, eller et nummer hvis den, der ringer, ikke findes i [Kontakter](contacts-history.md), med datoen. Et rødt rør markerer et ubesvaret opkald; et antal i parentes — for eksempel *Helpdesk (4)* — står for flere opkald i træk til samme part.

### Kontochipsene {#the-account-chips}

Under tastaturet er der én chip for hver [konto](../sip-accounts/setup.md). En grøn prik betyder, at kontoen er registreret på omstillingsanlægget. Den fremhævede chip (på billedet **305 Support**) er den konto, næste opkald foretages fra; tryk på en anden chip for at skifte. Den runde røde knap til højre for chipsene er forstyr ikke.

### Knapperne {#the-buttons}

Under chipsene står de [knapper](../sip-accounts/buttons.md), du har lavet til kolleger og linjer, hver med en lampe — **Nielsen** og **Lager** på billederne. Tryk på en for at ringe til dens nummer.

### Optagelser, Kontakter, Historik, Indstillinger {#recordings-contacts-history-settings}

Disse fire punkter nederst åbner hver en fane til højre, side om side: [Optagelser](../recordings/recordings-window.md), [Kontakter og historik](contacts-history.md) og [Indstillinger](settings-overview.md). Faner, du har åbnet, bliver stående i rækken øverst i højre side.

## Et igangværende opkald {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Et igangværende opkald" />

Mens et opkald står på, flytter nummerfeltet op øverst med et tastaturikon i, og opkaldet vises på et kort:

- opkaldets tilstand og varighed (**I samtale · 0:21**), den anden parts navn, **Linje** og navnet på den konto, opkaldet går over, samt nummeret;
- to lodrette niveaubjælker i kortets sider, én for hver af lydens kanaler;
- en række knapper: optag (cirkel), slå lyd fra (mikrofon), parkér (pause) og den røde knap **Læg på**;
- en anden række: viderestil (rør med en pil) og tastaturet.

Et opkald kan viderestilles direkte eller efter, at du først har talt med personen.

Hvis nummeret findes i **Kontakter**, vises navnet i stedet for nummeret. De samme handlinger har [genveje](../program/shortcuts.md): besvar, læg på, parkér og slå lyd fra.

## Flere opkald på én gang {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Flere opkald" />

Et indgående opkald meldes med et banner, uanset hvor du arbejder, også når telefonen er skjult. Et nyt indgående opkald dukker op på sit eget kort over listen, med en grøn, en gul og en rød knap og en linje, der siger, hvem du taler med nu (**I samtale med …**). Listen nedenunder viser hvert opkald med dets tilstand — **Parkeret**, **I samtale**, **Indgående opkald** — og den konto, det går over. Et pauseikon markerer et parkeret opkald, og et højttalerikon det, du taler i.

Hvad der sker, når nogen ringer, mens du allerede er i et opkald, indstilles under [Opkaldsindstillinger](../sip-accounts/calls.md#call-waiting).

## Konference {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="En konference" />

Opkald, der er slået sammen, vises som ét kort **Konference** på kontoens linje. Hver deltager står med sin tid i opkaldet og sin egen knap **Læg på**. Knapperne nedenunder optager, slår lyden fra og afslutter konferencen for alle; den brede knap nederst deler konferencen op i separate opkald igen.

## Opfangning {#capture}

Når [optagelse fra andre programmer](../capture/capture.md) er tilladt under **Indstillinger → Opfangning**, vises en stribe mellem kontochipsene og knapperne.

<Shot name="10_settings_capture" full alt="Opfangningsstriben ved telefonens fod: Opfangning · klar, Optag og to niveaubjælker" />

- **Opfangning · klar** siger, at programmet lytter efter en samtale i et andet program.
- **Optag** starter en opfangning manuelt.
- De to tynde bjælker nedenunder viser lydniveauet: den øverste er dig, den nederste er det, computeren afspiller. Hvordan de tegnes, indstilles under **Billede i linjen ved telefonens fod**.

Programmet kan også ligge i proceslinjen (menulinjen på macOS) og hentes frem med en [genvej](../program/shortcuts.md).
