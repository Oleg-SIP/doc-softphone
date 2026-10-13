---
title: Veelvoorkomende problemen
sidebar_position: 2
description: "Wat u controleert als een account niet registreert, er geen geluid is, een gesprek of vergadering niet wordt opgenomen, er geen transcript is, de souffleur niet start, of een koppeling, een sneltoets of de API niets doet, en wat de eigen meldingen van de telefoon betekenen."
---

Elk punt verwijst naar de instelling die erover beslist. Staat het antwoord hier niet, open dan [Diagnose](/troubleshooting/diagnostics): het toont wat de telefoon en de centrale tegen elkaar zeggen.

## Het account registreert niet {#the-account-will-not-register}

De stip naast het account bij **Instellingen → Accounts** blijft grijs of rood.

1. Controleer **Gebruikersnaam**, **Wachtwoord** en **Serveradres** in [het accountformulier](/sip-accounts/setup).
2. Als uw centrale het wachtwoord controleert onder een andere naam dan het toestel, vul dan **Authenticatiegebruiker** in onder **Serverinstellingen**.
3. Controleer **Transport** en **Poort** tegen wat de centrale verwacht.
4. Open het tabblad **SIP** van het [diagnosevenster](/troubleshooting/diagnostics) en bekijk het verzoek `REGISTER` en wat de server antwoordde.

## Ik hoor niets, of ik word niet gehoord {#i-cannot-hear-or-i-cannot-be-heard}

Open [Instellingen → Apparaten](/sip-accounts/devices).

- Zeg iets: de balk onder **Microfoon** moet bewegen. Doet hij dat niet, kies dan een andere microfoon.
- Druk op **Testen** onder **Luidsprekers** om een geluid te horen op het gekozen apparaat.
- Controleer de schuifregelaars **Volume**. **Microfoon dempen** op de gesprekskaart en de [sneltoets](/program/shortcuts) **De microfoon dempen** zetten de microfoon tijdens een gesprek uit.
- De beltoon kan zijn ingesteld om te klinken op een ander apparaat dan waarop u praat — **Beltoon**, de tweede keuzelijst.

## Het gesprek klinkt slecht, of komt niet tot stand {#the-call-sounds-bad-or-does-not-start}

De codecs worden aangeboden in de volgorde van de lijst bij [Instellingen → Gesprekken](/sip-accounts/calls#audio-formats). Laat de codecs aan die uw centrale gebruikt en zet de beste bovenaan. Een wijziging geldt vanaf uw volgende gesprek.

## Een tweede gesprek gaat niet over {#a-second-call-does-not-ring}

Wat er gebeurt als iemand belt terwijl u in gesprek bent, stelt u in bij [Wisselgesprek](/sip-accounts/calls#call-waiting).

## Een gesprek is niet opgenomen {#a-call-was-not-recorded}

- **Instellingen → Opname**, de eerste keuzelijst, bepaalt welke gesprekken worden opgenomen; de standaard, **Met de hand**, neemt alleen op als u op de gesprekskaart op opnemen drukt. Zie [Opnames](/recordings).
- De opname begint als het gesprek wordt aangenomen, dus een gesprek dat niet werd aangenomen heeft geen bestand.
- De module **Opname** moet aan staan bij [Modules](/application/modules).
- Opnames worden verwijderd door de grenzen onder **Bewaren**; een vastgezette opname wordt nooit verwijderd.

## Een vergadering in een andere toepassing is niet vastgelegd {#a-meeting-in-another-application-was-not-captured}

Zie [Vastleggen](/capture/).

- **Geluid vastleggen toestaan** bij **Instellingen → Vastleggen** moet aan staan.
- Met **Automatisch starten** op **Het mij vragen** (de standaard) beantwoordt u de vraag als die verschijnt; met **Nooit** drukt u zelf op de opnameknop.
- Gebruik **Testen** op hetzelfde tabblad: de bovenste balk moet bewegen als u spreekt, de onderste als er iets speelt.
- De module **Vastleggen** moet aan staan bij [Modules](/application/modules).

## Er is een opname, maar geen transcript of samenvatting {#there-is-a-recording-but-no-transcript-or-summary}

- Een gesprek wordt alleen vanzelf uitgeschreven en uitgewerkt als **Gesprekken automatisch verwerken** aan staat bij [Instellingen → Verwerking](/ai-processing/processing). Vraag er anders om in het [venster Opnames](/interface/recordings).
- Er moeten een [herkenner](/ai-processing/transcription) en een [taalmodel](/ai-processing/processing#language-models) zijn, en elk moet op zijn adres antwoorden.
- Als de maandelijkse **Geldgrens** of **Tokengrens** is bereikt, stoppen de automatische regels tot de volgende maand. Wat u zelf vraagt, wordt nooit gestopt.
- De stappen van [Instellingen → Overzicht](/interface/settings-overview) laten zien wat er nog moet worden ingesteld.

## De souffleur verschijnt niet of start niet {#the-prompter-does-not-appear-or-does-not-start}

**Souffleur** verschijnt alleen in de lijst onderaan de telefoon als er drie dingen zijn: een herkenner met een **Adres voor de souffleur** die zijn **Testen** heeft doorstaan onder [Instellingen → Transcriptie](/ai-processing/transcription#live-recognition-for-the-prompter), een taalmodel, en het vinkje **Gebruik van de souffleur toestaan** onder [Instellingen → Souffleur](/ai-processing/prompter). De module **Souffleur** moet aanstaan onder [Modules](/application/modules).

Als het venster opengaat maar de souffleur niet start, zegt de regel onder de knoppen wat er ontbreekt. [Als hij niet start](/interface/prompter#when-it-does-not-start) noemt elke melding en wat u dan doet.

## De telefoon verdween toen ik het venster sloot {#the-phone-disappeared-when-i-closed-the-window}

Met **De telefoon laten doordraaien wanneer het venster wordt gesloten** aan draait de telefoon nog en komen gesprekken nog binnen. Het pictogram in het meldingsgebied (de menubalk op macOS) haalt het venster terug. Op een bureaublad zonder meldingsgebied staat de telefoon geminimaliseerd in de taakbalk. Zie [Opstarten](/program/startup).

## Een telefoonnummer in een browser of CRM belt niet {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Druk op **Belkoppelingen met deze telefoon openen** bij [Instellingen → Opstarten](/program/startup#call-links). Een aangeklikt nummer komt in de kiezer en wacht daar, tenzij **Meteen bellen, zonder op Bellen te drukken** aan staat.

## Het lampje van een knop blijft grijs {#a-buttons-lamp-stays-grey}

De centrale zegt niet of het toestel vrij is. De knop belt nog gewoon. Zie [Knoppen](/sip-accounts/buttons).

## De REST-API antwoordt niet {#the-rest-api-does-not-answer}

- **Andere programma's op deze computer de telefoon laten bedienen** moet aan staan bij [Instellingen → Integratie](/integration/rest-api), en de module **Integratie** bij [Modules](/application/modules).
- Het adres is `http://127.0.0.1:8377`, tenzij u de **Poort** hebt gewijzigd.
- Een groep die u niet hebt opengezet onder **Toegang** beantwoordt elk verzoek met `404`.
- Als u een **Token** hebt ingesteld, moeten verzoeken die opgeslagen gegevens wijzigen het in de koptekst `Authorization` meesturen.
- Meer symptomen staan bij [Als het niet werkt](/integration/rest-api#when-it-does-not-work).

## Webhooks komen niet aan {#webhooks-do-not-arrive}

Druk op **Een testgebeurtenis verzenden** bij [Instellingen → Integratie](/integration/webhooks). De tellers `webhooks_failed_total` en `webhooks_dropped_total` van de REST-API tonen hoe de bezorging verloopt; [Als er niets aankomt](/integration/webhooks#when-nothing-arrives) legt uit wat elk ervan betekent.

## Een sneltoets doet niets {#a-hotkey-does-nothing}

Open [Sneltoetsen](/program/shortcuts). Een sneltoets werkt zolang de telefoon het programma is dat u gebruikt; om hem vanuit elk programma te gebruiken, vinkt u **Overal** aan. Klik op de sneltoets en druk de combinatie opnieuw in als een ander programma haar heeft overgenomen.

## Meldingen van de telefoon {#messages-the-phone-shows}

Als iets niet lukt, zegt de telefoon waarom op een eigen regel. Een regel onder een lijst verdwijnt na een paar seconden vanzelf.

### Als een gesprek niet wordt opgezet {#when-a-call-is-not-placed}

| Melding | Wat te doen |
| --- | --- |
| *Er is geen account ingesteld* | Voeg een account toe bij [Instellingen → Accounts](/sip-accounts/setup). |
| *Er staat geen account aan, dus er is geen lijn om vanaf te bellen.* | Vink een account aan bij **Instellingen → Accounts**. |
| *Er is nog geen lijn geregistreerd.* | Het account staat aan, maar is nog niet op de centrale geregistreerd. Wacht tot de stip groen wordt; gebeurt dat niet, zie [Het account registreert niet](#the-account-will-not-register). |
| *Er lopen al zoveel gesprekken als deze telefoon aankan.* | Hang een van de gesprekken op en bel dan opnieuw. |
| *Het account waarvandaan dit gebeld zou zijn bestaat niet meer.* | De regel hoort bij een account dat intussen is verwijderd. Kies het nummer in het kiesvenster. |
| *Deze regel heeft geen nummer om terug te bellen.* | De beller heeft het nummer afgeschermd, dus er valt niets terug te bellen. |

### Als een account geen verbinding maakt {#when-an-account-does-not-connect}

| Melding | Wat te doen |
| --- | --- |
| *Dat serveradres is niet gevonden. Controleer het op tikfouten.* | Controleer **Serveradres** in [het accountformulier](/sip-accounts/setup). |
| *De server was niet te bereiken. Controleer het adres, de poort en uw netwerk.* | Controleer **Serveradres**, en **Transport** en **Poort** onder **Serverinstellingen**. Ook een firewall kan SIP tegenhouden. |
| *De server heeft deze gebruikersnaam of dit wachtwoord geweigerd.* | Controleer **Gebruikersnaam** en **Wachtwoord**. Als de centrale het wachtwoord onder een andere naam controleert, vul dan **Authenticatiegebruiker** in. |
| *Het certificaat van de server kon niet worden gecontroleerd. Als de beheerder van de server het zelf heeft uitgegeven, zet dan ‘Certificaat controleren’ uit onder ‘Serverinstellingen’.* | Verschijnt bij een TLS-verbinding. Als de centrale een certificaat gebruikt dat ze zelf heeft gemaakt, vink dan **Certificaat controleren** uit onder **Serverinstellingen**. |
| *Het wachtwoord van dit account kon niet uit de sleutelbos worden gelezen. Ontgrendel die en verbind opnieuw.* | Ontgrendel de sleutelbos van de computer (op macOS de sleutelhanger) en druk dan bij het account op **Verbinden**. |

### Tijdens een gesprek {#during-a-call}

| Melding | Wat te doen |
| --- | --- |
| *Geen gemeenschappelijk audioformaat* | De centrale en de telefoon hebben geen codec gemeen. Zet bij [Audioformaten](/sip-accounts/calls#audio-formats) een codec aan die de centrale gebruikt. |
| *Geen microfoon of luidsprekers* | Kies de apparaten bij [Instellingen → Apparaten](/sip-accounts/devices). |
| *Niet opgenomen: de schijf is tot de grens gedaald. Maak ruimte vrij, of wijzig de grens in de instellingen.* | De vrije ruimte op de schijf heeft de **Drempel voor schijfruimte** bereikt — zie [Opnames](/recordings). Maak ruimte vrij of verlaag de drempel. |

### Bij het starten van de telefoon {#when-the-phone-starts}

*Database onleesbaar* betekent dat de database door een andere versie van het programma is gemaakt en dat deze haar niet kan lezen. Meestal is een oudere versie gestart op de gegevens van een nieuwere: als u de nieuwere versie opnieuw installeert, opent die haar zoals ze was. **Opnieuw beginnen** maakt in plaats daarvan een lege database — elk contact en elk gesprek in de geschiedenis gaat verloren, en dat kan niet ongedaan worden gemaakt. Voordat u erop drukt, kunt u een kopie van het databasebestand bewaren; [Diagnose](/troubleshooting/diagnostics#files) zegt waar het staat.
