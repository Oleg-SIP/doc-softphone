---
title: Venster Opnames
sidebar_position: 2
description: "De bibliotheek met elk gesprek — een telefoongesprek, een geïmporteerd bestand of een vergadering vastgelegd uit Zoom, Teams of Meet: filters, de speler, het transcript waarin u vanaf elke regel kunt afspelen, en de uitwerkingen."
---

**Opnames** is waar elk gesprek staat, hoe het ook binnenkwam: een gesprek dat u in de telefoon hebt gevoerd of aangenomen, een audiobestand dat u hebt geïmporteerd, of een vergadering vastgelegd uit Zoom, Teams, Meet of een andere toepassing. Ze staan allemaal in één lijst, en elk opent op dezelfde manier: de speler, het transcript en alles wat het taalmodel erover heeft geschreven. Druk linksonder in het [hoofdvenster](main-window.md) op **Opnames** om het te openen.

<Shot name="01_recordings" alt="Het tabblad Opnames: een vastgelegde Zoom-vergadering, een geïmporteerd bestand en gesprekken in één lijst" />

## Drie soorten opnames {#three-kinds-of-recording}

Het pictogram links in een regel laat zien hoe het gesprek binnenkwam.

| Pictogram | Gesprek | Zijn naam in de lijst | Hoe het hier komt |
| --- | --- | --- | --- |
| Hoorn met een pijl | Een gesprek dat in deze telefoon is gevoerd of aangenomen. De pijl wijst naar binnen bij een inkomend gesprek en naar buiten bij een uitgaand gesprek. | De naam van het contact, of het nummer | Opgenomen zoals ingesteld bij [Opnames](../recordings.md) |
| Pijl in een balk | Een bestand dat van elders is geïmporteerd: van een mobiele telefoon, een dictafoon of een ander systeem | De naam van het bestand | **⋮ → Importeren uit bestanden**; zie [hieronder](#a-recording-you-already-have) |
| Venster | Een vergadering in een andere toepassing | De naam die u hebt gegeven, of **Een andere toepassing** | [Vastleggen](../capture/capture.md) |

Op de afbeelding zijn de bovenste drie regels er elk een van: een Zoom-vergadering, een geïmporteerd bestand met een supportgesprek van een bank en een gesprek aangenomen op de lijn **305 Service**. Waar ze ook vandaan komen, ze worden op dezelfde manier uitgeschreven, uitgewerkt en doorzocht.

## Een gesprek vinden {#finding-a-conversation}

De balk bovenaan heeft vijf filters, een zoekveld en een menu:

| Bediening | Beperkt de lijst op |
| --- | --- |
| **Soort** | de manier waarop het gesprek binnenkwam: inkomende of uitgaande gesprekken, **Geïmporteerd**, **Vastgelegd** |
| **Periode** | de datum: **Vandaag**, **Gisteren**, **Laatste 7 dagen** of **Data kiezen…** |
| **Categorie** | de categorie waaronder het is geordend — zie [Woordenlijsten](../ai-processing/dictionaries.md) |
| **Markering** | de labels en signalen die het draagt |
| **Herkenner** | de [herkenner](../ai-processing/transcription.md) die het transcript heeft gemaakt |
| **Zoeken** | wat erin gezegd is — het zoeken gaat door de transcripten van alles wat u hebt opgenomen |

<Shot name="39_more_menu" alt="Het menu ⋮ van de lijst: Importeren uit bestanden, Exporteren naar CSV, Openen in een browser" />

De knop **⋮** rechts in de balk opent meer acties voor de lijst:

| Onderdeel | Doet |
| --- | --- |
| **Importeren uit bestanden** | Haalt opnames binnen die u al hebt. Zie [Een opname die u al hebt](#a-recording-you-already-have). |
| **Exporteren naar CSV** | Slaat de lijst op als spreadsheet: wanneer, de partij en het nummer, richting, duur, categorie, labels, signalen en de samenvatting van één regel van elk gesprek. |
| **Openen in een browser** | Opent de lijst in uw browser, als de pagina die de [lokale REST-API](../integration/rest-api.md) op `/ui` aanbiedt. |

## De lijst {#the-list}

Elke regel toont:

- het pictogram van de soort gesprek;
- de naam — de andere partij, het nummer, het bestand of de vergadering — en daaronder de datum en de samenvatting van één regel;
- rechts de categorie met haar score (een getal, bijvoorbeeld *Ondersteuning · 4*), dan de signalen en labels, en aan het eind de duur.

Signalen zijn rood getekend (op de afbeelding *Gevoelige gegevens*, *Toezegging gedaan*, *Boze klant*); labels zijn gewoon (*Terugbellen toegezegd*). Een gesprek zonder samenvatting en categorie is nog niet uitgewerkt — op de afbeelding de regel **Anna Janssen**.

<Shot name="40_row_actions" alt="Een regel met de aanwijzer erboven: de knoppen punaise, potlood en prullenbak" />

Wijs een regel aan om rechts ervan drie knoppen te tonen:

| Knop | Doet |
| --- | --- |
| Punaise | **Deze bewaren**: een bewaarde opname wordt nooit verwijderd door de grenzen van de [bewaartermijn](../recordings.md#retention). Druk er nogmaals op om haar niet meer te bewaren. |
| Potlood | **Naam wijzigen**: geeft het gesprek een naam van uzelf. Een gesprek houdt daarnaast de naam van de partij; een vergadering of een bestand is anders genoemd naar de toepassing of het bestand waar het vandaan komt. |
| Prullenbak | **Deze opname verwijderen**, na een vraag. De audio gaat ook weg, en het kan niet ongedaan worden gemaakt. |

## De speler {#the-player}

Selecteer een regel om de speler onder de lijst te openen.

- De twee golfvormen zijn de twee kanalen van de opname: de bovenste bent u, de onderste is de andere kant. Een geïmporteerd bestand bevat meestal één gemengd spoor, dus beide lijnen tonen hetzelfde geluid.
- **▶** speelt af en pauzeert; de tijden links zijn de positie en de totale duur. De balk onder de golfvormen scrolt door een lange opname.
- **1×** wijzigt de snelheid; **Allebei** kiest welke stem u hoort: beide, alleen u (**Ik**) of alleen de andere kant (**Zij**).
- De diskknop slaat een kopie van de opname op, **×** sluit het gesprek.

De lijn tussen de lijst en de speler kunt u omhoog slepen om het transcript meer ruimte te geven, zoals op de afbeeldingen hieronder.

## Het transcript {#the-transcript}

Onder de speler staat het transcript: één regel per spreekbeurt, met het tijdstip waarop het gezegd werd en wie het zei.

<Shot name="26_recording_call" alt="Een gesprek op de lijn 305 Service: de speler en het transcript, met de regel bij 0:11 gemarkeerd" />

| Soort opname | De sprekers worden getoond als |
| --- | --- |
| Een gesprek | **U** en de naam van de andere partij, of het nummer |
| Een vastgelegde vergadering | **U** en de naam van de opname, voor alle anderen |
| Een geïmporteerd bestand | **Iedereen · speaker 1**, **Iedereen · speaker 2**… — de herkenner onderscheidt de stemmen |

**Klik op een regel om naar dat moment te gaan**: de speler gaat erheen, de regel wordt gemarkeerd en het woord dat wordt uitgesproken wordt erin aangeduid — op de afbeelding de regel bij **0:11**, met het woord *Ja*. Druk op **▶** om vanaf daar te luisteren. Tijdens het afspelen volgt de markering de spraak, zodat u kunt lezen en tegelijk luisteren en naar elke zin kunt terugspringen.

De tijd links van elke regel is ook waar een uitwerking naar verwijst: een signaal, een antwoord of een citaat draagt de tijd van de woorden waarop het berust.

## Transcript of uitwerking: de keuzelijst {#transcript-or-write-up-the-drop-down}

De keuzelijst boven het transcript kiest wat op die plaats wordt getoond: een transcript, of een van de uitwerkingen die het taalmodel heeft gemaakt.

<Shot name="27_writeup_menu" alt="De geopende keuzelijst: het OpenAI-transcript en de uitwerkingen van het gesprek" />

- Regels met een **microfoon** zijn transcripten, één voor elke [herkenner](../ai-processing/transcription.md) die de opname heeft uitgeschreven. De ster markeert het hoofdtranscript. Wijs er een aan om de herkenner, zijn model en de taal te zien.
- Regels met **sterretjes** zijn uitwerkingen, gemaakt door de [prompts](/ai-processing/prompt-studio) van [Verwerking](../ai-processing/processing.md).

Een opname kan transcripten van meerdere herkenners hebben, om ze te vergelijken: de Zoom-vergadering hieronder is zowel door X.ai als door Deepgram uitgeschreven.

<Shot name="36_zoom_menu" alt="Een vastgelegde vergadering met twee transcripten, Deepgram en X.ai, en haar uitwerkingen" />

De uitwerkingen staan onder korte namen in de lijst:

| In de keuzelijst | Gemaakt door de prompt | Wat het toont |
| --- | --- | --- |
| **Samenvatting** | Samenvatting | De hoofdpunten, besluiten en volgende stappen in een korte alinea. |
| **In het kort** | Samenvatting van één regel | Eén zin; dezelfde regel staat onder de naam in de lijst. |
| **Acties** | Actiepunten | Wie heeft toegezegd wat te doen, en tegen wanneer. |
| **Onderwerpen** | Onderwerpen | De onderwerpen die ter sprake kwamen. |
| **Genoemd** | Namen en getallen | Personen, bedrijven, data, bedragen en verwijzingen. |
| de vraag zelf | Een vraag over dit gesprek | Het antwoord op een vraag die u hebt gesteld, met de woorden waarop het berust. |
| **Kwaliteit** | Verkoopkwaliteit, Kwaliteit van de ondersteuning | Een algemene score en een oordeel over elk criterium. |
| **Signalen** | Signalen | Wat aandacht nodig heeft, met het bewijs en de tijd. |
| **Labels**, **Categorie** | Labels, Categorie | De etiketten waaronder het gesprek is geordend. |

## De uitwerkingen, een voor een {#the-write-ups-one-by-one}

De afbeeldingen hieronder zijn alle van hetzelfde gesprek, op de lijn **305 Service**, waarin een klant vraagt wanneer haar verzekeringen worden verlengd.

**Samenvatting** — het gesprek in een paar zinnen.

<Shot name="28_summary" alt="De samenvatting van het gesprek" />

**In het kort** — één regel, kort genoeg om het gesprek in de lijst te herkennen.

<Shot name="29_nutshell" alt="In het kort: de samenvatting van één regel van het gesprek" />

**Acties** — elke taak met wie haar moet doen en wanneer, rechts ervan.

<Shot name="30_actions" alt="Acties: twee taken voor U, een ervan morgenochtend" />

**Een vraag** — stel het gesprek wat u maar wilt: de vraag wordt de naam van het onderdeel, en onder het antwoord staan de woorden waarop het berust, met hun tijd in de opname.

<Shot name="31_question" alt="Het antwoord op een vraag over het gesprek, met twee citaten bij 0:15 en 0:26" />

**Kwaliteit** — de score van 1 tot 5 met de reden ervoor, en elk criterium gemarkeerd als **voldaan**, **zwak** of **niet voldaan** met een toelichting.

<Shot name="32_quality" alt="Kwaliteit: score 4, twee criteria voldaan en twee zwak" />

**Signalen** — elk signaal met de woorden waarop het is afgegeven, zijn ernst en de tijd.

<Shot name="33_red_flags" alt="Signalen: Toezegging gedaan, laag, bij 0:26" />

**Onderwerpen** — de onderwerpen van een vergadering, hier van de Zoom-vergadering.

<Shot name="38_topics" alt="Onderwerpen van de Zoom-vergadering" />

## De knoppen naast de keuzelijst {#the-buttons-beside-the-drop-down}

| Knop | Doet |
| --- | --- |
| Sterretjes | **Transcriberen of een model vragen…**: opent een menu, zie hieronder. |
| Twee vellen | Kopieert wat getoond wordt. |
| Disk | Slaat het op in een bestand. Een transcript kunt u opslaan als platte tekst of als ondertitels. |
| Prullenbak | Verwijdert wat getoond wordt. |

<Shot name="34_run_menu" alt="Het sterretjesmenu: Transcriptie met vier herkenners, Verwerking met de prompts" />

Het sterretjesmenu doet het werk op verzoek. Onder **Transcriptie** kiest u een herkenner om de opname er opnieuw mee uit te schrijven; onder **Verwerking** kiest u een prompt om die nu uit te voeren — **Een vraag over dit gesprek…** vraagt eerst om de vraag. Het resultaat verschijnt in de keuzelijst. Zo wordt een gesprek uitgewerkt als **Gesprekken automatisch verwerken** uit staat bij [Verwerking](../ai-processing/processing.md), en zo voegt u nog een uitwerking toe aan een gesprek dat er al heeft.

## Drie voorbeelden {#three-examples}

### Een gesprek in de telefoon {#a-call-made-in-the-phone}

Het gesprek hierboven: de sprekers zijn **U** en **Femke Mulder**, de naam van het contact, op twee afzonderlijke kanalen.

### Een bestand dat u hebt geïmporteerd {#a-file-you-imported}

<Shot name="35_recording_import" alt="Een geïmporteerd bestand met een supportgesprek van een bank: één gemengd spoor en de sprekers 1 en 2" />

`riverside_bank_support_call` is een mp3 die is binnengehaald met **⋮ → Importeren uit bestanden**. Zijn naam is de naam van het bestand, zijn pictogram een pijl in een balk, en zijn twee sprekers zijn door de herkenner onderscheiden. De uitwerkingen vonden een hardop genoemd kaartnummer en gaven **Gevoelige gegevens** af.

### Een vergadering vastgelegd uit een andere toepassing {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Een vanaf de computer vastgelegde Zoom-vergadering: het X.ai-transcript met U en de naam van de vergadering als sprekers" />

**Planning Q4-lancering (Zoom)** is vastgelegd terwijl de vergadering in Zoom liep en met het potlood een naam gegeven. Iedereen aan de andere kant van de vergadering wordt getoond onder de naam van de opname; u bent **U**. Zie [Vastleggen](../capture/capture.md).

## Een opname die u al hebt {#a-recording-you-already-have}

Een opname die ergens anders is gemaakt — op een mobiele telefoon, een dictafoon of een ander systeem — kan worden toegevoegd met **⋮ → Importeren uit bestanden**. Kies een of meer mp3- of wav-bestanden; de telefoon zegt hoeveel er zijn geïmporteerd en noemt de bestanden die hij niet als opname kon lezen. Elk wordt precies zo opgeborgen als een gebeld gesprek: uitgeschreven, uitgewerkt volgens dezelfde [regels](../ai-processing/processing.md#rules) en gevonden door dezelfde zoekfunctie.

## Een opname verwijderen {#deleting-a-recording}

Als een opname wordt verwijderd, gaat alles wat ervan gemaakt is mee: de transcripten en de uitwerkingen. Hoelang opnames vanzelf bewaard blijven stelt u in bij [Opnames](../recordings.md#retention).
