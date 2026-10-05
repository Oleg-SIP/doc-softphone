---
title: Diagnose
sidebar_position: 1
description: Het venster dat elk woord toont dat de telefoon en de centrale tegen elkaar zeggen, het logbestand en waar het programma zijn bestanden bewaart.
---

Het venster **Diagnose** toont wat de telefoon en de centrale tegen elkaar zeggen, op het moment dat ze het zeggen. Het is de eerste plek om te kijken als een account niet registreert of een gesprek niet tot stand komt, en het venster dat een IT-afdeling u zal vragen te sturen.

Het opent vanuit **Instellingen → Diagnose**, met de knop **Diagnostiek openen**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Het venster Diagnose" />

Het toont elk SIP-bericht dat de telefoon verstuurt of ontvangt, terwijl het gebeurt, samen met de audiostatistieken van de lopende gesprekken. Het verzamelt alleen zolang het open is en bewaart niets nadat het is gesloten.

## SIP {#sip}

Het tabblad **SIP** is het logboek van de signalering.

- Elk bericht is een regel met de tijd (tot op de milliseconde), wat het is en waar het heen ging: een pijl naar rechts is verstuurd door de telefoon, een pijl naar links is ontvangen van de server. Daaronder: `to` of `from` het adres van de server en het transport (bijvoorbeeld *via UDP*).
- Een bericht kan worden uitgeklapt om de kopteksten volledig te tonen (het derde bericht op de afbeelding).
- **Zoeken** vindt tekst in het logboek.
- **Legen** maakt het leeg.

Het voorbeeld op de schermafbeelding is een gezonde registratie: de telefoon stuurt `REGISTER`, de server antwoordt `200 OK (REGISTER)`.

## Gesprekken {#calls}

Het tweede tabblad, **Gesprekken**, toont kwaliteitsgegevens voor elk lopend gesprek.

## Het tabblad Diagnose van de instellingen {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Instellingen → Diagnose" />

### Logdetail {#log-detail}

De keuzelijst kiest hoeveel het programma in zijn logbestand schrijft; op de afbeelding is dat **Uitgebreid**. Het geldt meteen, ook voor een gesprek dat al loopt — juist het gesprek waarvan u het verslag wilt. De meest uitgebreide instelling schrijft elk SIP-bericht op. Dat is veel, maar wachtwoorden worden eruit gehaald voordat er iets wordt geschreven, dus het bestand kan veilig met een supportverzoek worden meegestuurd.

**Een kopie naar het systeemlogboek sturen** schrijft het logboek ook naar het eigen logboek van het systeem, voor een machine waarvan de logboeken centraal worden verzameld. Het bestand hieronder wordt hoe dan ook geschreven, en dat is het bestand om bij een supportverzoek te voegen.

### Bestanden {#files}

Het tabblad toont waar het programma zijn bestanden bewaart en hoe groot elk is. Op macOS:

| Bestand | Waar | Bevat |
| --- | --- | --- |
| Instellingen | `~/Library/Preferences/ai-softphone/settings.json` | De instellingen. Nooit wachtwoorden of tokens. |
| Database | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Contacten, geschiedenis, transcripten en uitwerkingen. |
| Opnames | `~/Library/Application Support/ai-softphone/recordings` | De audio van de opnames. |
| Logboek | `~/Library/Logs/ai-softphone/ai-softphone.log` | Het logboek. |

Onder de lijst toont **Openen** het logboek en maakt **Legen** het leeg. Leeg het logboek vlak voordat u een probleem nabootst; legen kan niet ongedaan worden gemaakt.

## Wat u naar support stuurt {#what-to-send-to-support}

1. Zet **Logdetail** op het meest uitgebreide niveau.
2. Druk op **Legen** en boots het probleem na.
3. Stuur het logbestand, of open **Instellingen → Over**, schrijf ons daar en vink **Het logboek bijvoegen** aan — zie [Over](../application/about.md#feedback).

Stuur bij een probleem met registratie of een gesprek ook de regels van de mislukte poging uit het tabblad **SIP** mee.

Het deel van het programma achter dit alles — het SIP-spoor, de mediastatistieken en de tellers — kan worden uitgezet bij [Modules](../application/modules.md) (**Diagnose**).
