---
title: Samtalsinställningar
sidebar_position: 3
description: Kodekarna som erbjuds växeln, vad som händer när ett andra samtal kommer in, automatisk återuppringning och hur länge samtalshistoriken sparas.
---

**Inställningar → Samtal** innehåller inställningarna som gäller för varje samtal, oavsett vilket konto det går över.

## Ljudformat {#audio-formats}

<Shot name="07_settings_calls" alt="Inställningar → Samtal: ljudformaten" />

Listan över kodekar som telefonen erbjuder andra sidan. Kodekarna *erbjuds i den här ordningen*, och andra sidan väljer bland det du erbjuder: ju högre en kodek står, desto troligare är det att den används.

- **Kryssrutan** slår på eller stänger av en kodek. En kodek som är avstängd erbjuds inte.
- **▲** och **▼** flyttar den upp eller ned i listan.
- *bredband* till höger markerar en kodek med bredare ljudomfång än en telefonlinje: rösten blir tydligare.

| Kodek | Samplingsfrekvens | På som standard |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, bredband | ja |
| **G722** | 16 kHz, bredband | ja |
| **PCMU** | 8 kHz | ja |
| **PCMA** | 8 kHz | ja |
| **speex** | 16 kHz, bredband | nej |
| **speex** | 8 kHz | nej |
| **speex** | 32 kHz, bredband | nej |
| **iLBC** | 8 kHz | nej |
| **GSM** | 8 kHz | nej |
| **L16** | 44 kHz, stereo, bredband | nej |
| **L16** | 44 kHz, bredband | nej |

Tabellen står i den ordning programmet levereras med.

Kodekarna kommer man överens om när ett samtal börjar, så en ändring gäller från ditt nästa samtal. Om ett samtal låter dåligt låter du bara de kodekar som din växel använder vara påslagna.

## Samtal väntar {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Inställningar → Samtal: samtal väntar, automatisk återuppringning och historik" />

*Vad som händer när någon ringer medan du redan är i ett samtal.* Listrutan väljer det; standard är **Låt det andra samtalet ringa**. Ett snabbtelefonanrop från din egen växel kommer alltid fram, vad du än väljer — det är så ett samtal som rings från en CTI-panel når den här telefonen.

## Automatisk återuppringning {#autodial}

När ett samtal inte går fram erbjuder dess kort att fortsätta ringa tills det gör det. Två reglage ställer in hur:

- **Vänta mellan försök** — 15 sekunder som standard;
- **Ge upp efter** — 30 minuter som standard.

## Historik {#history}

En samtalshistorik är bevis, så ingenting tas bort ur den om du inte säger till här.

- **Lagringstid** väljer hur länge [samtalshistoriken](/interface/contacts-history#history) behåller ett samtal. Standard är **Alltid**.
- **Rensa samtalshistoriken** tar bort alla samtal på en gång, oavsett vad lagringstiden säger. Det kan inte ångras.
