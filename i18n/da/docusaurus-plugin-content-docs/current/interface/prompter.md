---
title: Sufflørens vindue
sidebar_position: 3
description: "Vinduet til suffløren i realtid: ordene i et opkald, mens de bliver sagt, og forslag til, hvad du kan sige nu, knapperne og kolonnerne, prøve på en optagelse og hvad det koster."
---

**Suffløren** lytter med på en samtale, mens den finder sted. I sit eget vindue skriver den, hvad hver side siger, mens det bliver sagt, og — hvor den valgte hjælper spørger en model — et forslag til, hvad du kan sige nu. Den er værd at have åben under et salgsopkald, en jobsamtale eller en svær samtale, og med en anden hjælper viser det samme vindue en løbende oversættelse af den anden side eller blot undertekster.

<Shot name="46_prompter_running" alt="Suffløren øver på et salgsopkald: udskriften til venstre, forslagene til højre og det nyeste gentaget med stort ovenover" />

På billedet lytter hjælperen **Indvendinger i samtalen** med på et salgsopkald. Den venstre kolonne er det, der blev sagt, hver linje med tidspunkt og side; den højre er det, modellen foreslog til hvert af kundens svar; det nyeste forslag gentages med stor skrift over begge.

**Sufflør** dukker op i listen nederst i telefonen, mellem **Historik** og **Indstillinger**, så snart tre ting er på plads: suffløren er tilladt, der er en genkender, som kan lytte, mens en samtale er i gang, og — for de hjælpere, der foreslår noget — en sprogmodel. Det hele indstilles under [Indstillinger → Sufflør](/ai-processing/prompter), hvor også skriftstørrelsen og selve hjælperne findes.

## Vinduet {#the-window}
<Shot name="44_prompter_window" alt="Sufflørens vindue med hjælperen Indvendinger i samtalen valgt, før start" />

Øverst er rullelisten **Hjælper** og til højre for den knapperne:

| Knap | Hvad den gør |
| --- | --- |
| **Start** / **Stop** (trekant / firkant) | *Begynd at lytte til dette opkald* — eller hold op: *Det sagte bliver på skærmen*. En start, der trykkes, før opkaldet er besvaret, venter på det, og knappen aflyser den så igen. |
| **Forslag** (gnister) | *Afslut svaret her, og foreslå hvad der skal siges*, uden at vente på en pause. For en hjælper, der ikke spørger nogen model, hedder knappen **Afslut svaret**: den lukker kun svaret, så det næste begynder rent. Den er nedtonet, så længe suffløren ikke kører. |
| **Ryd** (skraldespand) | Glemmer efter en bekræftelse, hvad der står på skærmen. *Begge kolonner forsvinder, og med dem den samtale, som det næste forslag ville være bygget af.* At stoppe og starte igen rydder ikke noget: en samtale, der er stoppet og startet igen, er som regel den samme samtale. |
| **Eksportér…** (diskette) | Skriver begge kolonner med deres tidspunkter til en fil: tekst (`.txt`) eller regneark (`.csv`), under det navn, du giver filen. |
| **Prøve…** (bibliotek) | [Prøver en hjælper af på en optagelse](#rehearsing-on-a-recording) i stedet for et opkald. |

Rullelisten viser [hjælperne](/ai-processing/prompter#assistants) i den rækkefølge, der er valgt under **Indstillinger → Sufflør**. Den kan ikke ændres, mens en sufflør kører, men den bliver synlig, så du kan se, hvilken hjælper der arbejder. Mens den lytter, står der **Vi lytter** på opkaldets kort.

Under knapperne ligger båndet med den nyeste linje, og under det de to kolonner:

- **Udskrift** — hver linje med tidspunkt og side;
- **Forslag** — hvert forslag med tidspunktet for det svar, det besvarer. For en hjælper, der ikke spørger nogen model, findes kolonnen ikke, og udskriften fylder hele bredden.

Er vinduet smalt, står de to kolonner under hinanden. En kolonne følger med det, der kommer ind, indtil du ruller tilbage i den, og følger med igen, når du kommer tilbage til bunden. Tryk på en vilkårlig linje for at holde den fast i båndet; tryk på den nyeste eller på nålen i båndet for at følge med igen. Højre museknap kopierer en linje, et forslag, hele udskriften eller alle forslag. Træk skillelinjen under båndet for at gøre det højere; skriftstørrelserne indstilles under [Indstillinger → Sufflør](/ai-processing/prompter#settings--prompter).

## Prøve på en optagelse {#rehearsing-on-a-recording}
En hjælper kan prøves af, uden at nogen er i telefonen. **Prøve…** viser samtalerne i [biblioteket](/interface/recordings), de nyeste først, og **En fil på denne computer…** til en `.mp3`- eller `.wav`-fil.

<Shot name="45_prompter_rehearse" alt="Prøve…: samtalerne i biblioteket og en fil på denne computer" />

Den valgte optagelse vises i en afspiller under knapperne: afspil og pause, begge kanaler tegnet som en bølgeform, du kan klikke i, og tiden. Tryk **Start**: optagelsen spilles ind i suffløren ad samme vej som et opkald, i sit eget tempo — hurtigere afspilning tilbydes bevidst ikke, for en sufflør, der fodres med halvanden gang farten, ville holde pause, svare og afregne for en samtale, som ingen har ført. Krydset til højre er **Afslut prøven**, tilbage til at lytte til opkald.

En optagelse med kun én kanal, for eksempel en importeret fil, høres som ét rum: *suffløren hører det hele som modparten*.

## Hvad det koster, og hvor ordene går hen {#what-it-costs-and-where-the-words-go}
- Genkenderen afregnes pr. minut live-lyd, og **Genkend også min side** fordobler det. En model afregnes for hvert forslag. Begge tæller mod sufflørens [månedlige lofter](/ai-processing/prompter#spending), ikke mod grænserne i Behandling.
- Den anden sides stemme forlader computeren, mens den taler, til den genkender, du har valgt. En genkender på din egen maskine — **Vosk**, **WhisperLive** eller **NVIDIA Riva** — holder den inden for murene.
- Det, suffløren viser, er ikke en optagelse. Tryk **Eksportér…** for at gemme det; vil du have selve samtalen, så [optag opkaldet](/recordings) også.

## Når den ikke starter {#when-it-does-not-start}
Vinduet siger i en linje under knapperne, hvad der mangler.

| Vinduet siger | Hvad du gør |
| --- | --- |
| *Sufflering er slået fra. Indstillinger → Sufflør.* | Sæt flueben ved **Tillad brug af suffløren**. |
| *Ingen genkender her kan lytte, mens nogen taler. Indstillinger → Transskription.* | Tilføj en genkender med en **Adresse til suffløren**, og tryk **Prøv**. |
| *Der er intet at køre. Indstillinger → Sufflør, og tilføj en hjælper.* | Alle hjælpere er slettet eller slået fra: tilføj en, eller tryk **Gendan standardværdier**. |
| *Modparten skal have det at vide først. Begynd at optage denne samtale, eller ændr det, Indstillinger → Optagelse siger om samtykke.* | Start optagelsen, som afspiller meddelelsen, eller ændr indstillingen for samtykke. |
| *Genkenderen begyndte ikke at lytte. Kontrollér dens live-adresse og dens model under Indstillinger → Transskription.* | Adressen til suffløren, modellen eller nøglen er forkert. **Prøv** på genkenderens kort siger hvilken. |
| *Månedens beløb til genkendere er brugt op.* | Hæv **Genkendere, pr. måned**, eller vent, til måneden skifter. |
| *Månedens beløb til modeller er brugt op. Ordene fortsætter; sufflering er stoppet.* | Hæv **Modeller, pr. måned**. |
