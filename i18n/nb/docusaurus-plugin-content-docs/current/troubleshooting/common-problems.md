---
title: Vanlige problemer
sidebar_position: 2
description: "\"Hva du bør sjekke når en konto ikke vil registrere seg, det ikke er lyd, en samtale eller et møde ikke tas opp, det ikke er noen utskrift, eller en lenke, en snarvei eller API-et ikke gjør noe.\""
---

Hvert punkt viser til innstillingen som avgjør det. Står ikke svaret her, åpner du [Diagnostikk](/troubleshooting/diagnostics): det viser hva telefonen og sentralen sier til hverandre.

## Kontoen vil ikke registrere seg {#the-account-will-not-register}

Prikken ved kontoen i **Innstillinger → Kontoer** forblir grå eller rød.

1. Sjekk **Brukernavn**, **Passord** og **Serveradresse** i [kontoskjemaet](/sip-accounts/setup).
2. Hvis sentralen din sjekker passordet under et annet navn enn internnummeret, fyller du ut **Autentiseringsbruker** under **Serverinnstillinger**.
3. Sjekk **Transport** og **Port** mot det sentralen forventer.
4. Åpne fanen **SIP** i [diagnosevinduet](/troubleshooting/diagnostics), og se på forespørselen `REGISTER` og hva serveren svarte.

## Jeg hører ikke, eller jeg blir ikke hørt {#i-cannot-hear-or-i-cannot-be-heard}

Åpne [Innstillinger → Enheter](/sip-accounts/devices).

- Si noe: stolpen under **Mikrofon** må bevege seg. Gjør den ikke det, velger du en annen mikrofon.
- Trykk på **Prøv** under **Høyttalere** for å høre en lyd på enheten du har valgt.
- Sjekk glidebryterne for **Lydstyrke**. **Slå av mikrofonen** på samtalekortet og [snarveien](/program/shortcuts) **Slå av mikrofonen** slår av mikrofonen under en samtale.
- Ringetonen kan være satt til å ringe på en annen enhet enn den du snakker i — **Ringetone**, den andre nedtrekkslisten.

## Samtalen låter dårlig eller starter ikke {#the-call-sounds-bad-or-does-not-start}

Kodekene tilbys i rekkefølgen fra listen under [Innstillinger → Samtaler](/sip-accounts/calls#audio-formats). La kodekene sentralen din bruker, være slått på, og sett den beste av dem først. En endring gjelder fra neste samtale.

## En ny samtale ringer ikke {#a-second-call-does-not-ring}

Hva som skjer når noen ringer mens du er i en samtale, stilles inn under [Samtale venter](/sip-accounts/calls#call-waiting).

## En samtale ble ikke tatt opp {#a-call-was-not-recorded}

- **Innstillinger → Opptak**, den første nedtrekkslisten, bestemmer hvilke samtaler som tas opp; standarden, **For hånd**, tar bare opp når du trykker på ta opp på samtalekortet. Se [Ta opp samtaler](/recordings/call-recording).
- Opptaket starter når samtalen besvares, så en samtale som ikke ble besvart, har ingen fil.
- Modulen **Opptak** må være på under [Moduler](/application/modules).
- Opptak fjernes av grensene under **Oppbevaring**; et festet opptak fjernes aldri.

## Et møde i et annet program ble ikke fanget {#a-meeting-in-another-application-was-not-captured}

Se [Fanging](/capture/).

- **Tillat at lyd fanges** i **Innstillinger → Fanging** må være på.
- Med **Automatisk start** satt til **Spør meg** (standard) svarer du på spørsmålet når det dukker opp; med **Aldri** trykker du selv på **Ta opp**.
- Bruk **Prøv** på samme fane: den øverste stolpen må bevege seg når du snakker, den nederste når noe spilles.
- Modulen **Fanging** må være på under [Moduler](/application/modules).

## Det finnes et opptak, men ingen utskrift eller sammendrag {#there-is-a-recording-but-no-transcript-or-summary}

- En samtale skrives bare ut og oppsummeres av seg selv hvis **Behandle samtaler automatisk** er på under [Innstillinger → Behandling](/ai-processing/processing). Ellers ber du om det i [vinduet Opptak](/interface/recordings).
- Det må finnes en [gjenkjenner](/ai-processing/transcription) og en [språkmodell](/ai-processing/processing#language-models), og hver må svare på sin adresse.
- Når den månedlige **Pengegrense** eller **Tokengrense** er nådd, stopper de automatiske reglene til måneden skifter. Det du selv ber om, stoppes aldri.
- Trinnene i [Innstillinger → Oversikt](/interface/settings-overview) viser hva som fortsatt gjenstår å sette opp.

## Telefonen forsvant da jeg lukket vinduet {#the-phone-disappeared-when-i-closed-the-window}

Med **La telefonen gå videre når vinduet lukkes** på går telefonen fortsatt, og samtaler kommer fortsatt inn. Ikonet i varslingsområdet (menylinjen på macOS) henter vinduet fram igjen. Se [Oppstart](/program/startup).

## Et telefonnummer i en nettleser eller et CRM ringer ikke {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Trykk på **Åpne ringelenker med denne telefonen** under [Innstillinger → Oppstart](/program/startup#call-links). Et nummer du klikker på, havner i nummerfeltet og venter der, med mindre **Ring med en gang, uten å trykke Ring** er på.

## Lampen på en knapp forblir grå {#a-buttons-lamp-stays-grey}

Sentralen sier ikke om internnummeret er ledig. Knappen ringer likevel. Se [Knapper](/sip-accounts/buttons).

## REST-API-et svarer ikke {#the-rest-api-does-not-answer}

- **La andre programmer på denne maskinen styre telefonen** må være på under [Innstillinger → Integrasjon](/integration/rest-api), og modulen **Integrasjon** under [Moduler](/application/modules).
- Adressen er `http://127.0.0.1:8377`, med mindre du har endret **Port**.
- En gruppe du ikke har åpnet under **Tilgang**, svarer på hver forespørsel med `404`.
- Har du satt en **Nøkkel**, må forespørsler som endrer lagrede data, ha den med i hodet `Authorization`.
- Flere symptomer står under [Når det ikke virker](/integration/rest-api#when-it-does-not-work).

## Webhooker kommer ikke fram {#webhooks-do-not-arrive}

Trykk på **Send en testhendelse** under [Innstillinger → Integrasjon](/integration/webhooks). Tellerne `webhooks_failed_total` og `webhooks_dropped_total` i REST-API-et viser hvordan leveringen går; [Når ingenting kommer fram](/integration/webhooks#when-nothing-arrives) forklarer hva hver av dem betyr.

## En snarvei gjør ingenting {#a-hotkey-does-nothing}

Åpne [Snarveier](/program/shortcuts). En snarvei virker mens telefonen er programmet du bruker; for å bruke den fra alle programmer krysser du av for **Overalt**. Klikk på snarveien, og trykk kombinasjonen på nytt hvis et annet program har tatt den.
