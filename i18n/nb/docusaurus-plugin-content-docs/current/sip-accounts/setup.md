---
title: Sette opp en SIP-konto
sidebar_position: 1
description: Koble AI Softphone til IP-sentralen eller SIP-leverandøren din under Innstillinger → Kontoer.
---

AI Softphone virker med alle IP-sentraler og SIP-leverandører. Du kan være logget inn på så mange kontoer (linjer) som du har, og hver konto har sine egne innstillinger.

Åpne **Innstillinger → Kontoer**.

<Shot name="05_settings_accounts" alt="Innstillinger → Kontoer: to kontoer, begge registrert" />

## Listen over kontoer {#the-list-of-accounts}

Hver konto er en rad med:

- en **avkrysningsboks** som slår kontoen på eller av;
- en **prikk** som er grønn når kontoen er registrert på sentralen;
- navnet, og under det `bruker@server`;
- en knapp **Koble fra** som logger kontoen ut av sentralen;
- knappene **▲** og **▼**, som flytter kontoen opp eller ned i listen. Kontobrikkene i [hovedvinduet](../interface/main-window.md) følger samme rekkefølge.

Knappen **Legg til** øverst til høyre legger til en konto. Klikk på en rad for å åpne skjemaet under den.

## Legge til en konto {#adding-an-account}

<Shot name="05d_account_add" alt="Skjemaet for en ny konto, tomt" />

Trykk på **Legg til**. Et tomt skjema åpnes under listen, med markøren i **Navn (valgfritt)**. Fyll ut feltene nedenfor, åpne **Serverinnstillinger** hvis sentralen trenger dem, og trykk på **Lagre**. En ny konto starter med de vanlige verdiene: UDP på port 5060, registrering fornyet hvert 300. sekund.

## Kontoskjemaet {#the-account-form}

<Shot name="05b_account_edit" alt="Skjemaet for en konto" />

| Felt | Hva du skriver |
| --- | --- |
| **Navn (valgfritt)** | Navnet som vises på kontoens brikke i hovedvinduet og på samtalene. Er det tomt, vises kontoen som `bruker@server`. |
| **Brukernavn** | Brukernavnet eller internnummeret du har fått fra sentralen eller leverandøren. |
| **Passord** | Passordet til det. Feltet er tomt når du kommer tilbake til skjemaet. Det lagres i maskinens nøkkelring, aldri i en innstillingsfil. |
| **Serveradresse** | Adressen til sentralen eller leverandørens SIP-server, for eksempel `pbx.example.com`. |
| **Serverinnstillinger** | Folder ut de mindre vanlige innstillingene for tilkoblingen; se nedenfor. |
| **Svar automatisk** | Under **Svar**: svarer på innkommende samtaler på denne kontoen uten at du trykker på noe. Av som standard. |

Trykk på **Lagre** for å beholde endringene. **Avbryt** forkaster dem, og **Slett** fjerner kontoen.

Når prikken ved kontoen er grønn, er kontoen registrert, og kontoens brikke i hovedvinduet viser det også. Forblir den grå eller rød, åpner du [Diagnostikk](../troubleshooting/diagnostics.md): fanen **SIP** viser forespørselen `REGISTER` og hva serveren svarte.

## Serverinnstillinger {#server-settings}

De fleste sentraler trenger ingenting her. Trykk på **Serverinnstillinger** for å vise dem; den samme knappen heter da **Skjul serverinnstillinger**.

<Shot name="05c_account_server_settings" alt="Serverinnstillingene for en konto, foldet ut" />

| Felt | Standard | Hva det er |
| --- | --- | --- |
| **Autentiseringsbruker** | tomt | Navnet sentralen sjekker passordet mot, når det ikke er det samme som **Brukernavn**. På bildet er internnummeret `201`, og sentralen autentiserer det som `kontor201`. |
| **Transport** | UDP | Protokollen for tilkoblingen til serveren. En nedtrekksliste. |
| **Port** | 5060 | Serverens port. |
| **Utgående mellomtjener** | tomt | En mellomtjener som hver forespørsel må gå gjennom, hvis leverandøren din oppgir en. |
| **Registrar** | tomt | Adressen det skal registreres på, hvis det ikke er **Serveradresse**. |
| **Registrer på nytt, sekunder** | 300 | Hvor ofte telefonen fornyer registreringen. |
| **Tastetoner** | Lydstrøm | Hvordan tonene fra tastaturet sendes til sentralen. En nedtrekksliste. Endre den bare hvis sentralen ikke hører tonene. |

Kodekene telefonen tilbyr, stilles ikke inn per konto; de finnes under [Samtaleinnstillinger](calls.md#audio-formats).
