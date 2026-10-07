---
title: Fångst
sidebar_label: Inspelning från andra program
sidebar_position: 1
description: "\"Fångst spelar in ett samtal som hålls i ett annat program — Zoom, Teams, Meet eller vilket annat som helst — direkt från datorn.\""
---

**Fångst** är sättet AI Softphone spelar in ett samtal som pågår i ett annat program, som ett möte i Zoom, Teams eller Meet. Den spelar in från själva datorn, med den andra sidan och dig på separata kanaler, och samma utskrift och sammanfattning väntar i slutet, precis som för ett telefonsamtal.

Programmet letar efter ett samtal, inte efter namnet på ett program, så det fungerar med allt som skapar ett.

[Översikten](../interface/settings-overview.md) i inställningarna visar detta under **Inspelning från andra program** och delar upp det i tre steg:

1. **Slå på inspelning från program** — [tillåt att ljud fångas](#turning-capture-on).
2. **Spela in ett samtal från ett program** — [starta och stoppa](#capturing-a-conversation) en inspelning.
3. **Ge en av dem ett namn** — [byt namn](#giving-it-a-name) på inspelningen.

## Slå på fångst {#turning-capture-on}

Fångst är avstängd tills du tillåter den. Öppna **Inställningar → Fångst**.

<Shot name="10_settings_capture" alt="Inställningar → Fångst" />

| Inställning | Standard | Vad den gör |
| --- | --- | --- |
| **Tillåt att ljud fångas** | av | Låter programmet spela in ljudet från andra program. Ingenting fångas medan den är av. |
| **Påminn mig om att berätta för de andra om inspelningen** | på | Visar en påminnelse medan en fångst pågår. Kryssrutan är grå tills fångst är tillåten. |

:::caution
Allt datorn spelar upp spelas in, inte bara samtalet. Den här telefonen kan inte meddela en inspelning i någon annans möte, så det är ditt ansvar att säga det.
:::

Den del av programmet som gör detta är modulen **Fångst**, *Spela in ett samtal som pågår i ett annat program*. Den kan stängas av under [Moduler](../application/modules.md).

## Starta en fångst {#starting-a-capture}

När fångst är tillåten visar nederkanten av [huvudfönstret](../interface/main-window.md#capture) dess tillstånd — **Fångst · klar** — med en knapp **Spela in** till höger. Tryck på **Spela in** för att starta för hand.

### Automatisk start {#automatic-start}

**Automatisk start** bestämmer vad som händer när programmet hör ett samtal i ett annat program:

| Val | Vad som händer |
| --- | --- |
| **Aldrig** | En fångst startar bara när du trycker på **Spela in**. |
| **Fråga mig** | Programmet frågar om det ska spelas in. Standard. |
| **Alltid** | Programmet börjar spela in av sig självt. |

Under **Program med eget svar** kan ett program få ett eget svar — till exempel *Spela alltid in detta program* från frågan som programmet ställer.

*Att fråga kostar ingenting: sekunderna före ditt svar är redan sparade.*

### Före starten {#before-the-start}

Reglaget **Före starten** anger hur många sekunders ljud från före en inspelnings start som sparas, **15 sekunder** som standard. Det finns för att ingenting ska gå förlorat medan samtalet upptäcks: en inspelning som startar när du trycker på **Spela in**, eller när du svarar på frågan, börjar ändå med orden som kom före.

## Fånga ett samtal {#capturing-a-conversation}

Medan den spelar in visar huvudfönstret en röd prick, inspelningens namn (till exempel **Möte i Zoom**), den tid som har gått och de två kanalerna som vågformer.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Ett möte spelas in" />

- **Sluta spela in** avslutar den.
- Fönstret förblir synligt medan det spelar in och påminner dig om att tala om för deltagarna att mötet spelas in.

### Vad bilden visar {#what-the-picture-shows}

Två andra inställningar väljer hur ljudnivån ritas:

| Inställning | Standard | Var |
| --- | --- | --- |
| **Bild i huvudfönstret** | Våg | De två kanalerna medan en fångst pågår. |
| **Bild i raden vid telefonens fot** | Två nivåer | De två tunna staplarna under **Fångst · klar**. |

### Prova det {#testing-it}

Under **Prova** har fliken två staplar: **Du** och **Andra sidan**. *Den övre stapeln rör sig när du talar, den nedre när något spelas.* Före ett viktigt möte kan du säga ett ord och spela upp ett ljud för att se att programmet hör båda sidor.

## Ge den ett namn {#giving-it-a-name}

Pennan bredvid inspelningens namn låter dig byta namn på den medan den pågår. En inspelning du inte har namngett visas som **Ett annat program**.

## Var inspelningen hamnar {#where-the-recording-goes}

Ett fångat samtal visas i [fönstret Inspelningar](../interface/recordings.md) som vilket annat som helst, med en egen ikon — ett fönster i stället för en lur — och med titeln du gav det eller **Ett annat program**.

<Shot name="01_recordings" alt="Fångade möten på fliken Inspelningar, markerade med en fönsterikon" />

Det skrivs ut, sammanfattas, sorteras under en kategori och får etiketter av samma [regler](../ai-processing/processing.md#rules) som ett telefonsamtal. I utskriften av ett fångat möte visas talaren som **Ett annat program** där ett telefonsamtal skulle visa den andra partens namn; bibliotekets **Sök** hittar också det som sades i det.
