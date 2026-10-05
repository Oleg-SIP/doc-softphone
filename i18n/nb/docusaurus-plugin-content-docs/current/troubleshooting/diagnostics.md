---
title: Diagnostikk
sidebar_position: 1
description: Vinduet som viser hvert ord telefonen og sentralen sier til hverandre, loggfilen og hvor programmet lagrer filene sine.
---

Vinduet **Diagnostikk** viser hva telefonen og sentralen sier til hverandre, mens de sier det. Det er det første stedet å se når en konto ikke vil registrere seg eller en samtale ikke kobles opp, og vinduet en IT-avdeling vil be deg sende.

Det åpnes fra **Innstillinger → Diagnostikk**, med knappen **Åpne diagnostikk**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Vinduet Diagnostikk" />

Det viser hver SIP-melding telefonen sender eller mottar, mens det skjer, sammen med lydstatistikken for samtalene som pågår. Det samler bare inn mens det er åpent, og beholder ingenting etter at det er lukket.

## SIP {#sip}

Fanen **SIP** er loggen over signaleringen.

- Hver melding er en linje med tidspunktet (til millisekundet), hva den er, og hvor den gikk: en pil mot høyre er sendt av telefonen, en pil mot venstre er mottatt fra serveren. Under det: `to` eller `from` serverens adresse og transporten (for eksempel *over UDP*).
- En melding kan foldes ut for å vise hodene i sin helhet (den tredje meldingen på bildet).
- **Søk** finner tekst i loggen.
- **Tøm** tømmer den.

Eksempelet på skjermbildet er en sunn registrering: telefonen sender `REGISTER`, serveren svarer `200 OK (REGISTER)`.

## Samtaler {#calls}

Den andre fanen, **Samtaler**, viser kvalitetsmål for hver samtale som pågår.

## Fanen Diagnostikk i innstillingene {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Innstillinger → Diagnostikk" />

### Loggens detaljnivå {#log-detail}

Nedtrekkslisten velger hvor mye programmet skriver i loggfilen; på bildet er det **Detaljert**. Det gjelder med én gang, også i en samtale som allerede pågår — som er nettopp den du vil ha registrert. Den mest detaljerte innstillingen skriver ned hver SIP-melding. Det blir mye, men passord fjernes før noe skrives, så filen er trygg å sende med en henvendelse til brukerstøtte.

**Send en kopi til systemloggen** skriver også loggen til systemets egen logg, for en maskin der logger samles inn sentralt. Filen nedenfor skrives uansett, og det er den som skal legges ved en henvendelse til brukerstøtte.

### Filer {#files}

Fanen viser hvor programmet lagrer filene sine og hvor store de er. På macOS:

| Fil | Hvor | Inneholder |
| --- | --- | --- |
| Innstillinger | `~/Library/Preferences/ai-softphone/settings.json` | Innstillingene. Aldri passord eller nøkler. |
| Database | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontakter, historikk, utskrifter og sammendrag. |
| Opptak | `~/Library/Application Support/ai-softphone/recordings` | Lyden fra opptakene. |
| Logg | `~/Library/Logs/ai-softphone/ai-softphone.log` | Loggen. |

Under listen viser **Åpne** loggen, og **Tøm** tømmer den. Tøm loggen rett før du gjenskaper et problem; tømming kan ikke angres.

## Hva du skal sende til brukerstøtte {#what-to-send-to-support}

1. Sett **Loggens detaljnivå** til det mest detaljerte nivået.
2. Trykk på **Tøm**, og gjenskap problemet.
3. Send loggfilen, eller åpne **Innstillinger → Om**, skriv til oss derfra, og kryss av for **Legg ved loggen** — se [Om](../application/about.md#feedback).

Ved et problem med registrering eller en samtale sender du også linjene fra det mislykkede forsøket fra fanen **SIP**.

Den delen av programmet som står bak alt dette — SIP-sporet, mediestatistikken og tellerne — kan slås av under [Moduler](../application/modules.md) (**Diagnostikk**).
