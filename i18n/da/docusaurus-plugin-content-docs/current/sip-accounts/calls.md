---
title: Opkaldsindstillinger
sidebar_position: 3
description: De codecs, der tilbydes omstillingsanlægget, hvad der sker, når et andet opkald kommer ind, automatisk genopkald og hvor længe opkaldshistorikken gemmes.
---

**Indstillinger → Opkald** rummer de indstillinger, der gælder for hvert opkald, uanset hvilken konto det går over.

## Lydformater {#audio-formats}

<Shot name="07_settings_calls" alt="Indstillinger → Opkald: lydformaterne" />

Listen over codecs, telefonen tilbyder den anden ende. Codecs *tilbydes i denne rækkefølge*, og den anden ende vælger blandt det, du tilbyder: jo højere et codec står, jo større chance er der for, at det bruges.

- **Afkrydsningsfeltet** slår et codec til eller fra. Et codec, der er slået fra, tilbydes ikke.
- **▲** og **▼** flytter det op eller ned i listen.
- *bredbånd* til højre markerer et codec med et bredere lydområde end en telefonlinje: stemmen bliver tydeligere.

| Codec | Samplingfrekvens | Slået til som standard |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, bredbånd | ja |
| **G722** | 16 kHz, bredbånd | ja |
| **PCMU** | 8 kHz | ja |
| **PCMA** | 8 kHz | ja |
| **speex** | 16 kHz, bredbånd | nej |
| **speex** | 8 kHz | nej |
| **speex** | 32 kHz, bredbånd | nej |
| **iLBC** | 8 kHz | nej |
| **GSM** | 8 kHz | nej |
| **L16** | 44 kHz, stereo, bredbånd | nej |
| **L16** | 44 kHz, bredbånd | nej |

Tabellen står i den rækkefølge, programmet leveres med.

Codecs aftales, når et opkald starter, så en ændring gælder fra dit næste opkald. Lyder et opkald dårligt, så lad kun de codecs være slået til, som dit omstillingsanlæg bruger.

## Banke på {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Indstillinger → Opkald: banke på, automatisk genopkald og historik" />

*Hvad der sker, når nogen ringer, mens du allerede er i et opkald.* Rullelisten vælger det; standard er **Lad det andet opkald ringe**. Et samtaleanlægsopkald fra dit eget omstillingsanlæg kommer altid igennem, uanset hvad du vælger — sådan når et opkald, der startes fra et CTI-panel, frem til denne telefon.

## Automatisk genopkald {#autodial}

Når et opkald ikke kan komme igennem, tilbyder dets kort at blive ved med at ringe, indtil det lykkes. To skydere indstiller hvordan:

- **Vent mellem forsøg** — 15 sekunder som standard;
- **Giv op efter** — 30 minutter som standard.

## Historik {#history}

En opkaldshistorik er dokumentation, så intet fjernes fra den, medmindre du siger det her.

- **Opbevaringstid** vælger, hvor længe [opkaldshistorikken](/interface/contacts-history#history) gemmer et opkald. Standard er **Altid**.
- **Ryd opkaldshistorikken** sletter alle opkald på én gang, uanset hvad opbevaringstiden siger. Det kan ikke fortrydes.
