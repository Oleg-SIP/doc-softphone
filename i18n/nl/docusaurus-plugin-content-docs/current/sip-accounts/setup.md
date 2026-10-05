---
title: Een SIP-account instellen
sidebar_position: 1
description: AI Softphone verbinden met uw IP-centrale of SIP-provider bij Instellingen → Accounts.
---

AI Softphone werkt met elke IP-centrale of SIP-provider. U kunt op zoveel accounts (lijnen) aangemeld zijn als u hebt, en elk account heeft zijn eigen instellingen.

Open **Instellingen → Accounts**.

<Shot name="05_settings_accounts" alt="Instellingen → Accounts: twee accounts, beide geregistreerd" />

## De lijst met accounts {#the-list-of-accounts}

Elk account is een regel met:

- een **selectievakje** dat het account aan- of uitzet;
- een **stip** die groen is als het account op de centrale geregistreerd is;
- de naam, en daaronder `gebruiker@server`;
- een knop **Verbinding verbreken** die het account afmeldt bij de centrale;
- de knoppen **▲** en **▼**, die het account omhoog of omlaag in de lijst schuiven. De accountchips in het [hoofdvenster](../interface/main-window.md) volgen dezelfde volgorde.

De knop **Toevoegen** rechtsboven voegt een account toe. Klik op een regel om het formulier eronder te openen.

## Een account toevoegen {#adding-an-account}

<Shot name="05d_account_add" alt="Het formulier van een nieuw account, leeg" />

Druk op **Toevoegen**. Onder de lijst opent een leeg formulier, met de cursor in **Naam (optioneel)**. Vul de velden hieronder in, open **Serverinstellingen** als de centrale die nodig heeft, en druk op **Opslaan**. Een nieuw account begint met de gebruikelijke waarden: UDP op poort 5060, registratie elke 300 seconden vernieuwd.

## Het accountformulier {#the-account-form}

<Shot name="05b_account_edit" alt="Het formulier van een account" />

| Veld | Wat u invult |
| --- | --- |
| **Naam (optioneel)** | De naam op de chip van het account in het hoofdvenster en bij zijn gesprekken. Als het leeg is, wordt het account getoond als `gebruiker@server`. |
| **Gebruikersnaam** | De gebruikersnaam of het toestelnummer dat uw centrale of provider u gaf. |
| **Wachtwoord** | Het bijbehorende wachtwoord. Het veld blijft leeg als u terugkomt in het formulier. Het wordt bewaard in de sleutelhanger van de computer, nooit in een instellingenbestand. |
| **Serveradres** | Het adres van de centrale of van de SIP-server van de provider, bijvoorbeeld `pbx.example.com`. |
| **Serverinstellingen** | Klapt de minder gebruikelijke instellingen van de verbinding uit; zie hieronder. |
| **Automatisch opnemen** | Onder **Opnemen**: neemt inkomende gesprekken op dit account op zonder dat u iets indrukt. Standaard uit. |

Druk op **Opslaan** om de wijzigingen te bewaren. **Annuleren** laat ze vallen en **Verwijderen** verwijdert het account.

Als de stip naast het account groen is, is het account geregistreerd en toont ook de chip in het hoofdvenster dat. Blijft hij grijs of rood, open dan [Diagnose](../troubleshooting/diagnostics.md): het tabblad **SIP** toont het verzoek `REGISTER` en wat de server antwoordde.

## Serverinstellingen {#server-settings}

De meeste centrales hebben hier niets nodig. Druk op **Serverinstellingen** om ze te tonen; dezelfde knop heet dan **Serverinstellingen verbergen**.

<Shot name="05c_account_server_settings" alt="De serverinstellingen van een account, uitgeklapt" />

| Veld | Standaard | Wat het is |
| --- | --- | --- |
| **Authenticatiegebruiker** | leeg | De naam waaronder de centrale het wachtwoord controleert, als die niet gelijk is aan de **Gebruikersnaam**. Op de afbeelding is het toestel `201` en authenticeert de centrale het als `kantoor201`. |
| **Transport** | UDP | Het protocol van de verbinding met de server. Een keuzelijst. |
| **Poort** | 5060 | De poort van de server. |
| **Uitgaande proxy** | leeg | Een proxy waar elk verzoek doorheen moet, als uw provider er een opgeeft. |
| **Registrar** | leeg | Het adres om bij te registreren, als dat niet het **Serveradres** is. |
| **Opnieuw registreren, seconden** | 300 | Hoe vaak de telefoon zijn registratie vernieuwt. |
| **Toetstonen** | Audiostroom | Hoe de tonen van het toetsenblok naar de centrale worden gestuurd. Een keuzelijst. Wijzig dit alleen als de centrale de tonen niet hoort. |

De codecs die de telefoon aanbiedt worden niet per account ingesteld; ze staan bij [Gespreksinstellingen](calls.md#audio-formats).
