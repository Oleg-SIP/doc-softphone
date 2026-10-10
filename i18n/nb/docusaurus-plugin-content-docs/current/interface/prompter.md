---
title: Sufflørens vindu
sidebar_position: 3
description: "Vinduet til suffløren i sanntid: ordene i en samtale mens de blir sagt, og forslag til hva du kan si videre, knappene og kolonnene, prøve på et opptak og hva det koster."
---

**Suffløren** lytter til en samtale mens den pågår. I sitt eget vindu skriver den hva hver side sier, mens det blir sagt, og — der den valgte hjelperen spør en modell — et forslag til hva du kan si videre. Den er verdt å ha åpen under en salgssamtale, et jobbintervju eller en vanskelig samtale, og med en annen hjelper viser det samme vinduet en løpende oversettelse av den andre siden, eller bare undertekster.

<Shot name="46_prompter_running" alt="Suffløren øver på en salgssamtale: utskriften til venstre, forslagene til høyre og det nyeste gjentatt i stor skrift over" />

På bildet lytter hjelperen **Innvendinger i samtalen** til en salgssamtale. Den venstre kolonnen er det som ble sagt, hver linje med tidspunkt og side; den høyre er det modellen foreslo til hvert svar fra kunden; det nyeste forslaget gjentas i stor skrift over begge.

**Sufflør** dukker opp i listen nederst i telefonen, mellom **Historikk** og **Innstillinger**, så snart tre ting er på plass: suffløren er tillatt, det finnes en gjenkjenner som kan lytte mens en samtale pågår, og — for hjelperne som foreslår noe — en språkmodell. Alt dette stilles inn under [Innstillinger → Sufflør](/ai-processing/prompter), der også skriftstørrelsen og selve hjelperne ligger.

## Vinduet {#the-window}
<Shot name="44_prompter_window" alt="Sufflørens vindu med hjelperen Innvendinger i samtalen valgt, før start" />

Øverst er nedtrekkslisten **Hjelper** og til høyre for den knappene:

| Knapp | Hva den gjør |
| --- | --- |
| **Start** / **Stopp** (trekant / firkant) | *Begynn å lytte til denne samtalen* — eller slutt: *Det sagte blir stående på skjermen*. En start som trykkes før samtalen er besvart, venter på den, og knappen avlyser den da igjen. |
| **Forslag** (gnister) | *Avslutt svaret her, og foreslå hva du skal si*, uten å vente på en pause. For en hjelper som ikke spør noen modell, heter knappen **Avslutt svaret**: den lukker bare svaret, så det neste begynner rent. Den er nedtonet så lenge suffløren ikke kjører. |
| **Tøm** (søppelkasse) | Glemmer det som står på skjermen, etter å ha spurt. *Begge kolonnene forsvinner, og med dem samtalen som det neste forslaget ville vært bygd av.* Å stoppe og starte igjen tømmer ingenting: en samtale som er stoppet og startet igjen, er som regel den samme samtalen. |
| **Eksporter…** (diskett) | Skriver begge kolonnene med tidspunkter til en fil: tekst (`.txt`) eller regneark (`.csv`), under navnet du gir filen. |
| **Prøve…** (bibliotek) | [Prøver en hjelper på et opptak](#rehearsing-on-a-recording) i stedet for en samtale. |

Nedtrekkslisten viser [hjelperne](/ai-processing/prompter#assistants) i rekkefølgen som er valgt under **Innstillinger → Sufflør**. Den kan ikke endres mens en sufflør kjører, men den blir stående synlig, så du ser hvilken hjelper som er i arbeid. Mens den lytter, står det **Vi lytter** på samtalens kort.

Under knappene ligger båndet med den nyeste linjen, og under det de to kolonnene:

- **Utskrift** — hver linje med tidspunkt og side;
- **Forslag** — hvert forslag med tidspunktet for svaret det svarer på. For en hjelper som ikke spør noen modell, finnes ikke denne kolonnen, og utskriften fyller hele bredden.

Når vinduet er smalt, står de to kolonnene under hverandre. En kolonne følger det som kommer inn, til du ruller tilbake i den, og følger igjen når du kommer tilbake til bunnen. Trykk på en hvilken som helst linje for å holde den fast i båndet; trykk på den nyeste, eller på nålen i båndet, for å følge igjen. Høyre museknapp kopierer en linje, et forslag, hele utskriften eller alle forslagene. Dra skillelinjen under båndet for å gjøre det høyere; skriftstørrelsene stilles inn under [Innstillinger → Sufflør](/ai-processing/prompter#settings--prompter).

## Prøve på et opptak {#rehearsing-on-a-recording}
En hjelper kan prøves uten at noen er i telefonen. **Prøve…** viser samtalene i [biblioteket](/interface/recordings), de nyeste først, og **En fil på denne datamaskinen…** for en `.mp3`- eller `.wav`-fil.

<Shot name="45_prompter_rehearse" alt="Prøve…: samtalene i biblioteket og en fil på denne datamaskinen" />

Opptaket du velger, vises i en spiller under knappene: spill av og pause, begge kanalene tegnet som en bølgeform du kan klikke i, og tiden. Trykk **Start**: opptaket spilles inn i suffløren samme vei som en samtale, i sitt eget tempo — raskere avspilling tilbys med vilje ikke, for en sufflør som mates med halvannen gangs fart, ville tatt pauser, svart og fakturert for en samtale ingen har hatt. Krysset til høyre er **Avslutt prøven**, tilbake til å lytte til samtaler.

Et opptak med én kanal, for eksempel en importert fil, høres som ett rom: *suffløren hører alt som motparten*.

## Hva det koster, og hvor ordene går {#what-it-costs-and-where-the-words-go}
- Gjenkjenneren faktureres per minutt sanntidslyd, og **Gjenkjenn min side også** dobler det. En modell faktureres for hvert forslag. Begge teller mot sufflørens [månedlige tak](/ai-processing/prompter#spending), ikke mot grensene i Behandling.
- Den andre sidens stemme forlater datamaskinen mens den snakker, til gjenkjenneren du har valgt. En gjenkjenner på din egen maskin — **Vosk**, **WhisperLive** eller **NVIDIA Riva** — holder den innenfor veggene.
- Det suffløren viser, er ikke et opptak. Trykk **Eksporter…** for å ta vare på det; vil du ha selve samtalen, [tar du opp samtalen](/recordings) i tillegg.

## Når den ikke starter {#when-it-does-not-start}
Vinduet sier i en linje under knappene hva som mangler.

| Vinduet sier | Hva du gjør |
| --- | --- |
| *Sufflering er slått av. Innstillinger → Sufflør.* | Kryss av for **Tillat bruk av suffløren**. |
| *Ingen gjenkjenner her kan lytte mens noen snakker. Innstillinger → Transkripsjon.* | Legg til en gjenkjenner med en **Adresse for suffløren**, og trykk **Prøv**. |
| *Det er ingenting å kjøre. Innstillinger → Sufflør, og legg til en hjelper.* | Alle hjelperne er slettet eller slått av: legg til en, eller trykk **Gjenopprett standardverdier**. |
| *Motparten må få vite det først. Begynn å ta opp denne samtalen, eller endre det Innstillinger → Opptak sier om samtykke.* | Start opptaket, som spiller av kunngjøringen, eller endre innstillingen for samtykke. |
| *Gjenkjenneren begynte ikke å lytte. Kontroller live-adressen og modellen under Innstillinger → Transkripsjon.* | Adressen for suffløren, modellen eller nøkkelen er feil. **Prøv** på gjenkjennerens kort sier hvilken. |
| *Månedens beløp til gjenkjennere er brukt opp.* | Øk **Gjenkjennere, per måned**, eller vent til måneden skifter. |
| *Månedens beløp til modeller er brukt opp. Ordene fortsetter; sufflering har stanset.* | Øk **Modeller, per måned**. |
