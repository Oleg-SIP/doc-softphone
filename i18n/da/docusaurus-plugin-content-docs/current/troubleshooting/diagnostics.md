---
title: Diagnostik
sidebar_position: 1
description: Vinduet, der viser hvert ord, telefonen og omstillingsanlægget siger til hinanden, logfilen og hvor programmet gemmer sine filer.
---

Vinduet **Diagnostik** viser, hvad telefonen og omstillingen siger til hinanden, mens de siger det. Det er det første sted at kigge, når en konto ikke vil registrere sig, eller et opkald ikke vil gå igennem, og det vindue, en it-afdeling vil bede dig sende.

Det åbnes fra **Indstillinger → Diagnostik** med knappen **Åbn diagnostik**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Vinduet Diagnostik" />

Det viser hver SIP-besked, telefonen sender eller modtager, mens det sker, sammen med lydstatistikken for de igangværende opkald. Det indsamler kun, mens det er åbent, og gemmer intet, efter at det er lukket.

## SIP {#sip}

Fanen **SIP** er loggen over signaleringen.

- Hver besked er en linje med tidspunktet (til millisekundet), hvad den er, og hvor den gik hen: en pil mod højre er sendt af telefonen, en pil mod venstre er modtaget fra serveren. Nedenunder: `to` eller `from` serverens adresse og transporten (for eksempel *over UDP*).
- En besked kan foldes ud, så dens hoveder vises i fuld længde (den tredje besked på billedet).
- **Søg** finder tekst i loggen.
- **Ryd** tømmer den.

Eksemplet på skærmbilledet er en sund registrering: telefonen sender `REGISTER`, serveren svarer `200 OK (REGISTER)`.

## Opkald {#calls}

Den anden fane, **Opkald**, viser kvalitetsmål for hvert igangværende opkald.

## Fanen Diagnostik i indstillingerne {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Indstillinger → Diagnostik" />

### Loggens detaljegrad {#log-detail}

Rullelisten vælger, hvor meget programmet skriver i sin logfil; på billedet er det **Detaljeret**. Det træder i kraft med det samme, også i et opkald, der allerede står på — som netop er det, du vil have registreret. Den mest detaljerede indstilling skriver hver SIP-besked ned. Det fylder meget, men adgangskoder fjernes, før noget skrives, så filen er sikker at sende med en supporthenvendelse.

**Send en kopi til systemloggen** skriver også loggen til systemets egen log, til en maskine, hvis logge indsamles centralt. Filen nedenfor skrives under alle omstændigheder, og det er den, der skal vedhæftes en supporthenvendelse.

### Filer {#files}

Fanen viser, hvor programmet gemmer sine filer, og hvor store de hver er. På macOS:

| Fil | Hvor | Indeholder |
| --- | --- | --- |
| Indstillinger | `~/Library/Preferences/ai-softphone/settings.json` | Indstillingerne. Aldrig adgangskoder eller nøgler. |
| Database | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontakter, historik, udskrifter og opsummeringer. |
| Optagelser | `~/Library/Application Support/ai-softphone/recordings` | Lyden fra optagelserne. |
| Log | `~/Library/Logs/ai-softphone/ai-softphone.log` | Loggen. |

Under listen viser **Åbn** loggen, og **Ryd** tømmer den. Ryd loggen lige før du genskaber et problem; rydning kan ikke fortrydes.

## Hvad du skal sende til support {#what-to-send-to-support}

1. Sæt **Loggens detaljegrad** til det mest detaljerede niveau.
2. Tryk på **Ryd**, og genskab derefter problemet.
3. Send logfilen, eller åbn **Indstillinger → Om**, skriv til os derfra, og sæt flueben ved **Vedhæft loggen** — se [Om](../application/about.md#feedback).

Ved et problem med registrering eller et opkald skal du også sende linjerne fra det mislykkede forsøg fra fanen **SIP**.

Den del af programmet, der står bag alt dette — SIP-sporet, mediestatistikken og tællerne — kan slås fra under [Moduler](../application/modules.md) (**Diagnostik**).
