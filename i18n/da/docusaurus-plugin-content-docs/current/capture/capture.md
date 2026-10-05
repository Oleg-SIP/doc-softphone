---
title: Opfangning
sidebar_label: Optagelse fra andre programmer
sidebar_position: 1
description: "\"Opfangning optager en samtale, der holdes i et andet program — Zoom, Teams, Meet eller et hvilket som helst andet — direkte fra computeren.\""
---

**Opfangning** er den måde, AI Softphone optager en samtale på, der foregår i et andet program, som et møde i Zoom, Teams eller Meet. Den optager fra selve computeren med den anden side og dig på separate kanaler, og den samme udskrift og opsummering venter til sidst, som ved et opkald.

Programmet leder efter en samtale, ikke efter navnet på et program, så det virker med alt, der frembringer en.

[Oversigten](../interface/settings-overview.md) i indstillingerne viser dette under **Optagelse fra andre programmer** og deler det op i tre trin:

1. **Slå optagelse fra programmer til** — [tillad, at lyd opfanges](#turning-capture-on).
2. **Optag en samtale fra et program** — [start og stop](#capturing-a-conversation) en optagelse.
3. **Giv en af dem et navn** — [omdøb](#giving-it-a-name) optagelsen.

## Slå opfangning til {#turning-capture-on}

Opfangning er slået fra, indtil du tillader den. Åbn **Indstillinger → Opfangning**.

<Shot name="10_settings_capture" alt="Indstillinger → Opfangning" />

| Indstilling | Standard | Hvad den gør |
| --- | --- | --- |
| **Tillad at lyd opfanges** | fra | Lader programmet optage lyden fra andre programmer. Intet opfanges, mens den er slået fra. |
| **Mind mig om at fortælle de andre om optagelsen** | til | Viser en påmindelse, mens en opfangning står på. Afkrydsningsfeltet er gråt, indtil opfangning er tilladt. |

:::caution
Alt, hvad computeren afspiller, optages, ikke kun samtalen. Denne telefon kan ikke annoncere en optagelse i en andens møde, så det er din opgave at sige det.
:::

Den del af programmet, der gør dette, er modulet **Opfangning**, *Optage en samtale, der foregår i et andet program*. Det kan slås fra under [Moduler](../application/modules.md).

## Starte en opfangning {#starting-a-capture}

Når opfangning er tilladt, viser bunden af [hovedvinduet](../interface/main-window.md#capture) dens tilstand — **Opfangning · klar** — med en knap **Optag** til højre. Tryk på **Optag** for at starte manuelt.

### Automatisk start {#automatic-start}

**Automatisk start** bestemmer, hvad der sker, når programmet hører en samtale i et andet program:

| Valg | Hvad der sker |
| --- | --- |
| **Aldrig** | En opfangning starter kun, når du trykker på **Optag**. |
| **Spørg mig** | Programmet spørger, om den skal optages. Standard. |
| **Altid** | Programmet begynder at optage af sig selv. |

Under **Programmer med eget svar** kan et program få sit eget svar — for eksempel *Optag altid dette program* fra det spørgsmål, programmet stiller.

*At spørge koster ingenting: sekunderne før dit svar er allerede gemt.*

### Før starten {#before-the-start}

Skyderen **Før starten** angiver, hvor mange sekunders lyd fra før en optagelse starter der gemmes, **15 sekunder** som standard. Den er der, så intet går tabt, mens samtalen bliver opdaget: en optagelse, der starter, når du trykker på **Optag**, eller når du svarer på spørgsmålet, begynder stadig med de ord, der kom før.

## Opfange en samtale {#capturing-a-conversation}

Mens der optages, viser hovedvinduet en rød prik, optagelsens navn (for eksempel **Møde i Zoom**), den forløbne tid og de to kanaler som bølgeformer.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Et møde optages" />

- **Stop optagelsen** afslutter den.
- Vinduet forbliver synligt, mens der optages, og minder dig om at fortælle deltagerne, at mødet optages.

### Hvad billedet viser {#what-the-picture-shows}

To andre indstillinger vælger, hvordan lydniveauet tegnes:

| Indstilling | Standard | Hvor |
| --- | --- | --- |
| **Billede i hovedvinduet** | Bølge | De to kanaler, mens en opfangning står på. |
| **Billede i linjen ved telefonens fod** | To niveauer | De to tynde bjælker under **Opfangning · klar**. |

### Prøve det {#testing-it}

Under **Prøv** har fanen to bjælker: **Dig** og **Den anden side**. *Den øverste bjælke bevæger sig, når du taler, den nederste når noget afspilles.* Før et vigtigt møde kan du sige et ord og afspille en lyd for at se, at programmet hører begge sider.

## Give den et navn {#giving-it-a-name}

Blyanten ved siden af optagelsens navn lader dig omdøbe den, mens den står på. En optagelse, du ikke har navngivet, står som **Et andet program**.

## Hvor optagelsen havner {#where-the-recording-goes}

En opfanget samtale dukker op i [vinduet Optagelser](../recordings/recordings-window.md) som enhver anden, med sit eget ikon — et vindue i stedet for et rør — og med den titel, du gav den, eller **Et andet program**.

<Shot name="01_recordings" alt="Opfangede møder på fanen Optagelser, markeret med et vinduesikon" />

Den skrives ud, opsummeres, sorteres under en kategori og forsynes med etiketter af de samme [regler](../ai-processing/processing.md#rules) som et opkald. I udskriften af et opfanget møde vises taleren som **Et andet program**, hvor et opkald ville vise den anden parts navn; bibliotekets **Søg** finder også det, der blev sagt i det.
