---
title: Opsætning af en SIP-konto
sidebar_position: 1
description: Forbind AI Softphone med dit IP-omstillingsanlæg eller din SIP-udbyder under Indstillinger → Konti.
---

AI Softphone virker med ethvert IP-omstillingsanlæg og enhver SIP-udbyder. Du kan være logget ind på så mange konti (linjer), som du har, og hver konto har sine egne indstillinger.

Åbn **Indstillinger → Konti**.

<Shot name="05_settings_accounts" alt="Indstillinger → Konti: to konti, begge registreret" />

## Listen over konti {#the-list-of-accounts}

Hver konto er en række med:

- et **afkrydsningsfelt**, der slår kontoen til eller fra;
- en **prik**, der er grøn, når kontoen er registreret på omstillingsanlægget;
- navnet og nedenunder `bruger@server`;
- en knap **Afbryd**, der logger kontoen ud af omstillingsanlægget;
- knapperne **▲** og **▼**, der flytter kontoen op eller ned i listen. Kontochipsene i [hovedvinduet](../interface/main-window.md) følger samme rækkefølge.

Knappen **Tilføj** øverst til højre tilføjer en konto. Klik på en række for at åbne dens formular nedenunder.

## Tilføje en konto {#adding-an-account}

<Shot name="05d_account_add" alt="Formularen til en ny konto, tom" />

Tryk på **Tilføj**. En tom formular åbner under listen med markøren i **Navn (valgfrit)**. Udfyld felterne nedenfor, åbn **Serverindstillinger**, hvis omstillingsanlægget kræver dem, og tryk på **Gem**. En ny konto starter med de sædvanlige værdier: UDP på port 5060 og registrering fornyet hvert 300. sekund.

## Kontoformularen {#the-account-form}

<Shot name="05b_account_edit" alt="Formularen til en konto" />

| Felt | Hvad du skriver |
| --- | --- |
| **Navn (valgfrit)** | Navnet, der vises på kontoens chip i hovedvinduet og på dens opkald. Er det tomt, vises kontoen som `bruger@server`. |
| **Brugernavn** | Det brugernavn eller lokalnummer, du har fået af dit omstillingsanlæg eller din udbyder. |
| **Adgangskode** | Adgangskoden til det. Feltet er tomt, når du vender tilbage til formularen. Den gemmes i computerens nøglering, aldrig i en indstillingsfil. |
| **Serveradresse** | Adressen på omstillingsanlægget eller udbyderens SIP-server, for eksempel `pbx.example.com`. |
| **Serverindstillinger** | Folder forbindelsens mindre almindelige indstillinger ud; se nedenfor. |
| **Besvar automatisk** | Under **Besvarelse**: besvarer indgående opkald på denne konto, uden at du trykker på noget. Slået fra som standard. |

Tryk på **Gem** for at beholde ændringerne. **Annullér** kasserer dem, og **Slet** fjerner kontoen.

Når prikken ved kontoen er grøn, er kontoen registreret, og kontoens chip i hovedvinduet viser det også. Forbliver den grå eller rød, så åbn [Diagnostik](../troubleshooting/diagnostics.md): fanen **SIP** viser forespørgslen `REGISTER` og hvad serveren svarede.

## Serverindstillinger {#server-settings}

De fleste omstillingsanlæg har ikke brug for noget her. Tryk på **Serverindstillinger** for at vise dem; samme knap hedder så **Skjul serverindstillinger**.

<Shot name="05c_account_server_settings" alt="En kontos serverindstillinger, foldet ud" />

| Felt | Standard | Hvad det er |
| --- | --- | --- |
| **Godkendelsesbruger** | tom | Det navn, omstillingsanlægget tjekker adgangskoden imod, når det ikke er det samme som **Brugernavn**. På billedet er lokalnummeret `201`, og omstillingsanlægget godkender det som `kontor201`. |
| **Transport** | UDP | Protokollen for forbindelsen til serveren. En rulleliste. |
| **Port** | 5060 | Serverens port. |
| **Udgående proxy** | tom | En proxy, som hver forespørgsel skal igennem, hvis din udbyder angiver en. |
| **Registrar** | tom | Den adresse, der skal registreres på, hvis det ikke er **Serveradresse**. |
| **Genregistrér, sekunder** | 300 | Hvor ofte telefonen fornyer sin registrering. |
| **Tastetoner** | Lydstrøm | Hvordan tastaturets toner sendes til omstillingsanlægget. En rulleliste. Skift den kun, hvis omstillingsanlægget ikke hører tonerne. |

De codecs, telefonen tilbyder, indstilles ikke per konto; de findes under [Opkaldsindstillinger](calls.md#audio-formats).
