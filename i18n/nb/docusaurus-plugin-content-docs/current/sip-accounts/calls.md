---
title: Samtaleinnstillinger
sidebar_position: 3
description: Kodekene som tilbys sentralen, hva som skjer når en ny samtale kommer inn, automatisk ny oppringing og hvor lenge samtalehistorikken lagres.
---

**Innstillinger → Samtaler** inneholder innstillingene som gjelder for alle samtaler, uansett hvilken konto de går over.

## Lydformater {#audio-formats}

<Shot name="07_settings_calls" alt="Innstillinger → Samtaler: lydformatene" />

Listen over kodeker telefonen tilbyr den andre enden. Kodekene *tilbys i denne rekkefølgen*, og den andre enden velger blant det du tilbyr: jo høyere en kodek står, jo mer sannsynlig er det at den brukes.

- **Avkrysningsboksen** slår en kodek på eller av. En kodek som er slått av, tilbys ikke.
- **▲** og **▼** flytter den opp eller ned i listen.
- *bredbånd* til høyre markerer en kodek med et bredere lydområde enn en telefonlinje: stemmen blir tydeligere.

| Kodek | Samplingsfrekvens | På som standard |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, bredbånd | ja |
| **G722** | 16 kHz, bredbånd | ja |
| **PCMU** | 8 kHz | ja |
| **PCMA** | 8 kHz | ja |
| **speex** | 16 kHz, bredbånd | nei |
| **speex** | 8 kHz | nei |
| **speex** | 32 kHz, bredbånd | nei |
| **iLBC** | 8 kHz | nei |
| **GSM** | 8 kHz | nei |
| **L16** | 44 kHz, stereo, bredbånd | nei |
| **L16** | 44 kHz, bredbånd | nei |

Tabellen står i den rekkefølgen programmet leveres med.

Kodekene avtales når en samtale starter, så en endring gjelder fra neste samtale. Hvis en samtale låter dårlig, lar du bare kodekene sentralen din bruker, være slått på.

## Samtale venter {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Innstillinger → Samtaler: samtale venter, automatisk ny oppringing og historikk" />

*Hva som skjer når noen ringer mens du allerede er i en samtale.* Nedtrekkslisten velger det; standard er **La den andre samtalen ringe**. Et internanrop fra din egen sentral kommer alltid gjennom, uansett hva du velger — det er slik en samtale ringt fra et CTI-panel når fram til denne telefonen.

## Automatisk ny oppringing {#autodial}

Når en samtale ikke kommer gjennom, tilbyr kortet å fortsette å ringe til den gjør det. To glidebrytere stiller inn hvordan:

- **Vent mellom forsøk** — 15 sekunder som standard;
- **Gi opp etter** — 30 minutter som standard.

## Historikk {#history}

En samtalehistorikk er dokumentasjon, så ingenting fjernes fra den med mindre du sier det her.

- **Oppbevaringstid** velger hvor lenge [samtalehistorikken](/interface/contacts-history#history) beholder en samtale. Standard er **Alltid**.
- **Tøm samtalehistorikken** sletter alle samtaler på én gang, uansett hva oppbevaringstiden sier. Det kan ikke angres.
