---
title: Souffleurvenster
sidebar_position: 3
description: "Het venster van de live souffleur: de woorden van een gesprek terwijl ze gezegd worden en suggesties voor wat u hierna kunt zeggen, de knoppen en kolommen, repeteren met een opname en wat het kost."
---

De **Souffleur** luistert mee met een gesprek terwijl het plaatsvindt. In een eigen venster schrijft hij op wat elke kant zegt, terwijl het gezegd wordt, en — als de gekozen assistent een model raadpleegt — een suggestie voor wat u hierna kunt zeggen. Het loont om hem open te hebben tijdens een verkoopgesprek, een sollicitatiegesprek of een lastig gesprek, en met een andere assistent toont hetzelfde venster een doorlopende vertaling van de andere kant, of gewoon ondertitels.

<Shot name="46_prompter_running" alt="De souffleur repeteert een verkoopgesprek: links het transcript, rechts de suggesties, de nieuwste groot erboven herhaald" />

Op de afbeelding luistert de assistent **Bezwaren in het gesprek** mee met een verkoopgesprek. De linkerkolom is wat er gezegd is, elke regel met zijn tijd en zijn kant; de rechterkolom is wat het model bij elk antwoord van de klant voorstelde; de nieuwste suggestie staat in grote letters nog eens boven beide.

**Souffleur** verschijnt in de lijst onderaan de telefoon, tussen **Geschiedenis** en **Instellingen**, zodra drie dingen geregeld zijn: de souffleur is toegestaan, er is een herkenner die kan meeluisteren terwijl een gesprek loopt, en — voor de assistenten die iets voorstellen — een taalmodel. Dat alles wordt ingesteld in [Instellingen → Souffleur](/ai-processing/prompter), waar ook de tekstgrootte en de assistenten zelf staan.

## Het venster {#the-window}
<Shot name="44_prompter_window" alt="Het souffleurvenster met de assistent Bezwaren in het gesprek gekozen, vóór de start" />

Bovenaan staat de keuzelijst **Assistent** en rechts daarvan de knoppen:

| Knop | Wat hij doet |
| --- | --- |
| **Starten** / **Stoppen** (driehoek / vierkant) | *Begin met luisteren naar dit gesprek* — of stop: *Het gezegde blijft op het scherm*. Een start die wordt ingedrukt voordat het gesprek is aangenomen, wacht daarop, en de knop zegt hem dan weer af. |
| **Suggestie** (sterretjes) | *Het antwoord hier beëindigen en voorstellen wat te zeggen*, zonder op een pauze te wachten. Bij een assistent die geen model raadpleegt heet de knop **Het antwoord beëindigen**: hij sluit alleen het antwoord af, zodat het volgende schoon begint. Hij is grijs zolang de souffleur niet draait. |
| **Legen** (prullenbak) | Vergeet na een vraag wat er op het scherm staat. *Beide kolommen verdwijnen, en daarmee het gesprek waaruit de volgende suggestie was opgebouwd.* Stoppen en opnieuw starten leegt niets: een gesprek dat gestopt en opnieuw gestart is, is meestal hetzelfde gesprek. |
| **Exporteren…** (diskette) | Schrijft beide kolommen met hun tijden naar een bestand: tekst (`.txt`) of een spreadsheet (`.csv`), onder de naam die u het bestand geeft. |
| **Repetitie…** (bibliotheek) | [Probeert een assistent uit op een opname](#rehearsing-on-a-recording) in plaats van op een gesprek. |

De keuzelijst toont de [assistenten](/ai-processing/prompter#assistants) in de volgorde die onder **Instellingen → Souffleur** is ingesteld. Zolang een souffleur draait, kan hij niet worden gewijzigd, maar hij blijft zichtbaar, zodat u ziet welke assistent aan het werk is. Terwijl hij luistert, staat op de kaart van het gesprek **We luisteren**.

Onder de knoppen ligt de band met de nieuwste regel en daaronder de twee kolommen:

- **Transcript** — elke regel met zijn tijd en zijn kant;
- **Suggesties** — elke suggestie met de tijd van het antwoord waarop ze reageert. Bij een assistent die geen model raadpleegt ontbreekt deze kolom en neemt het transcript de hele breedte in.

Is het venster smal, dan staan de twee kolommen onder elkaar. Een kolom volgt wat er binnenkomt totdat u erin terugscrolt, en volgt weer zodra u terug bent onderaan. Klik op een willekeurige regel om hem in de band vast te houden; klik op de nieuwste, of op de punaise in de band, om weer te volgen. Met de rechtermuisknop kopieert u een regel, een suggestie, het hele transcript of alle suggesties. Sleep de scheidingslijn onder de band om hem hoger te maken; de tekstgroottes stelt u in onder [Instellingen → Souffleur](/ai-processing/prompter#settings--prompter).

## Repeteren met een opname {#rehearsing-on-a-recording}
Een assistent kan worden uitgeprobeerd zonder dat er iemand aan de telefoon is. **Repetitie…** toont de gesprekken in de [bibliotheek](/interface/recordings), de nieuwste eerst, en **Een bestand op deze computer…** voor een `.mp3`- of `.wav`-bestand.

<Shot name="45_prompter_rehearse" alt="Repetitie…: de gesprekken in de bibliotheek en een bestand op deze computer" />

De gekozen opname verschijnt in een speler onder de knoppen: afspelen en pauzeren, beide kanalen als golfvorm waarin u kunt klikken, en de tijd. Druk op **Starten**: de opname wordt langs dezelfde weg als een gesprek in de souffleur afgespeeld, op haar eigen snelheid — sneller afspelen wordt bewust niet aangeboden, want een souffleur die op anderhalve snelheid gevoed wordt, zou pauzeren, antwoorden en afrekenen voor een gesprek dat niemand heeft gevoerd. Het kruisje rechts is **Repetitie beëindigen**, terug naar meeluisteren met gesprekken.

Een opname met één kanaal, zoals een geïmporteerd bestand, wordt als één ruimte gehoord: *de souffleur hoort het allemaal als de gesprekspartner*.

## Wat het kost en waar de woorden heen gaan {#what-it-costs-and-where-the-words-go}
- De herkenner wordt afgerekend per minuut live audio, en **Ook mijn kant herkennen** verdubbelt dat. Een model wordt per suggestie afgerekend. Beide tellen mee voor de [maandplafonds](/ai-processing/prompter#spending) van de souffleur, niet voor de limieten van Verwerking.
- De stem van de andere kant verlaat de computer terwijl die spreekt, naar de herkenner die u hebt gekozen. Een herkenner op uw eigen machine — **Vosk**, **WhisperLive** of **NVIDIA Riva** — houdt hem binnenshuis.
- Wat de souffleur toont, is geen opname. Druk op **Exporteren…** om het te bewaren; om het gesprek zelf te hebben, [neemt u het gesprek](/recordings) ook op.

## Als hij niet start {#when-it-does-not-start}
Het venster zegt in een regel onder de knoppen wat er ontbreekt.

| Het venster zegt | Wat te doen |
| --- | --- |
| *Souffleren staat uit. Instellingen → Souffleur.* | Vink **Gebruik van de souffleur toestaan** aan. |
| *Geen herkenner hier kan meeluisteren terwijl iemand praat. Instellingen → Transcriptie.* | Voeg een herkenner toe met een **Adres voor de souffleur** en druk op **Testen**. |
| *Er is niets om te starten. Instellingen → Souffleur, en voeg een assistent toe.* | Alle assistenten zijn verwijderd of uitgezet: voeg er een toe, of druk op **Standaardwaarden herstellen**. |
| *De tegenpartij moet eerst op de hoogte worden gebracht. Neem dit gesprek op, of verander wat Instellingen → Opname over toestemming zegt.* | Start de opname, die de mededeling afspeelt, of wijzig de instelling voor toestemming. |
| *De herkenner is niet gaan meeluisteren. Controleer zijn live adres en zijn model onder Instellingen → Transcriptie.* | Het adres voor de souffleur, het model of de sleutel klopt niet. **Testen** op de kaart van de herkenner zegt welke. |
| *Het maandbudget voor herkenners is op.* | Verhoog **Herkenners, per maand**, of wacht tot de maand om is. |
| *Het maandbudget voor modellen is op. De woorden gaan door; het souffleren is gestopt.* | Verhoog **Modellen, per maand**. |
