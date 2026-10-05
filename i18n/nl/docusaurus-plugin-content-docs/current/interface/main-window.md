---
title: Hoofdvenster
sidebar_position: 1
description: De telefoon links, de bibliotheek en de instellingen rechts — de indeling van het hoofdvenster van AI Softphone.
---

Het hoofdvenster is de telefoon zelf. Met de standaardindeling, **Één venster**, staat de telefoon links en opent al het andere rechts. De [indeling is te wijzigen](../program/appearance.md).

<Shot name="03_contacts" full alt="Het hoofdvenster: de telefoon links en het tabblad Contacten rechts" />

## De telefoon {#the-phone}

Van boven naar beneden bevat de linkerkant:

- het veld **Nummer**;
- het toetsenblok en de beltoets;
- de accountchips;
- de knoppen die andere toestellen volgen;
- de vier bestemmingen: **Opnames**, **Contacten**, **Geschiedenis** en **Instellingen**.

### De kiezer {#the-dialler}

- **Nummer** — typ of plak het nummer dat u wilt bellen. Het klokpictogram aan het einde van het veld opent de lijst met nummers die u onlangs hebt gebeld of die u belden.
- De ronde toetsen **1–9**, **\***, **0** en **#** vullen het nummer in, en sturen tijdens een gesprek tonen (DTMF).
- De horentoets start het gesprek. Hij blijft grijs zolang er geen nummer is.

<Shot name="22_last_calls" full alt="De lijst met recente gesprekken onder het veld Nummer, naast het tabblad Geschiedenis" />

Als de lijst met recente nummers open is, toont het veld een pijltje en schuift de beltoets naar rechts. Elke regel is een naam, of een nummer als de beller niet in [Contacten](contacts-history.md) staat, met de datum. Een rode hoorn markeert een gemist gesprek; een aantal tussen haakjes — bijvoorbeeld *Helpdesk (4)* — staat voor meerdere gesprekken achter elkaar met dezelfde partij.

### De accountchips {#the-account-chips}

Onder het toetsenblok staat een chip voor elk [account](../sip-accounts/setup.md). Een groene stip betekent dat het account op de centrale geregistreerd is. De gemarkeerde chip (op de afbeelding **305 Service**) is het account waarmee het volgende gesprek wordt gevoerd; druk op een andere chip om dat te wijzigen. De ronde rode knop rechts van de chips is niet storen.

### De knoppen {#the-buttons}

Onder de chips staan de [knoppen](../sip-accounts/buttons.md) die u voor collega's en lijnen hebt gemaakt, elk met een lampje — **De Vries** en **Magazijn** op de afbeeldingen. Druk op een knop om het nummer te bellen.

### Opnames, Contacten, Geschiedenis, Instellingen {#recordings-contacts-history-settings}

Deze vier items onderaan openen elk een tabblad rechts, naast elkaar: [Opnames](../recordings/recordings-window.md), [Contacten en geschiedenis](contacts-history.md) en [Instellingen](settings-overview.md). Tabbladen die u hebt geopend blijven in de rij bovenaan de rechterkant staan.

## Een lopend gesprek {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Een lopend gesprek" />

Tijdens een gesprek schuift het nummerveld naar boven met een toetsenbloksymbool erin, en wordt het gesprek op een kaart getoond:

- de toestand en de duur van het gesprek (**In gesprek · 0:21**), de naam van de andere partij, **Lijn** en de naam van het account waarop het gesprek loopt, en het nummer;
- twee verticale niveaubalken aan de zijkanten van de kaart, één voor elk kanaal van het geluid;
- een rij knoppen: opnemen (cirkel), dempen (microfoon), in de wacht (pauze) en de rode knop **Ophangen**;
- een tweede rij: doorverbinden (hoorn met een pijl) en het toetsenblok.

Een gesprek kan direct worden doorverbonden, of nadat u eerst met de persoon hebt gesproken.

Als het nummer bekend is in **Contacten**, wordt de naam getoond in plaats van het nummer. Dezelfde handelingen hebben [sneltoetsen](../program/shortcuts.md): opnemen, ophangen, in de wacht zetten en dempen.

## Meerdere gesprekken tegelijk {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Meerdere gesprekken" />

Een inkomend gesprek wordt aangekondigd met een banner, waar u ook werkt, zelfs als de telefoon verborgen is. Een nieuw inkomend gesprek verschijnt op een eigen kaart boven de lijst, met een groene, een gele en een rode knop en een regel die zegt met wie u nu spreekt (**In gesprek met …**). De lijst eronder toont elk gesprek met zijn toestand — **In de wacht**, **In gesprek**, **Inkomend gesprek** — en het account waarop het loopt. Een pauzesymbool markeert een gesprek in de wacht en een luidsprekersymbool het gesprek waarin u spreekt.

Wat er gebeurt als iemand belt terwijl u al in gesprek bent, stelt u in bij [Gespreksinstellingen](../sip-accounts/calls.md#call-waiting).

## Vergadering {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Een vergadering" />

Samengevoegde gesprekken verschijnen als één kaart **Vergadering** op de lijn van het account. Elke deelnemer staat erop met de tijd in het gesprek en een eigen knop **Ophangen**. De knoppen eronder nemen op, dempen en beëindigen de vergadering voor iedereen; de brede knop onderaan splitst de vergadering weer in afzonderlijke gesprekken.

## Vastleggen {#capture}

Als het [opnemen uit andere toepassingen](../capture/capture.md) is toegestaan bij **Instellingen → Vastleggen**, verschijnt er een strook tussen de accountchips en de knoppen.

<Shot name="10_settings_capture" full alt="De strook Vastleggen onderaan de telefoon: Vastleggen · klaar, Opnemen en twee niveaubalken" />

- **Vastleggen · klaar** zegt dat het programma luistert of er in een andere toepassing een gesprek is.
- **Opnemen** start het vastleggen met de hand.
- De twee dunne balken eronder tonen het geluidsniveau: de bovenste bent u, de onderste is wat de computer afspeelt. Hoe ze worden getekend stelt u in bij **Beeld in de balk aan de voet van de telefoon**.

Het programma kan ook in het systeemvak wonen (de menubalk op macOS) en met een [sneltoets](../program/shortcuts.md) tevoorschijn worden gehaald.
