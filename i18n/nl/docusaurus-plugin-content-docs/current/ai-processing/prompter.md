---
title: Instellingen van de souffleur
sidebar_label: Souffleur
sidebar_position: 5
description: "Instellingen → Souffleur: wat de live souffleur nodig heeft, de schakelaar die hem toestaat, de tekstgrootte, de assistenten en hun kaarten, en de maandplafonds voor wat hij mag uitgeven."
---

Onder **Instellingen → Souffleur** wordt de live souffleur toegestaan, op maat gezet en van assistenten voorzien. De souffleur zelf — het venster dat een gesprek opschrijft terwijl het gezegd wordt en voorstelt wat u kunt antwoorden, en het repeteren met een opname — wordt beschreven in [Souffleurvenster](/interface/prompter).

Het [Overzicht](/interface/settings-overview) van de instellingen noemt de souffleur onder **Souffleur** in twee stappen: **De souffleur toestaan** en **De souffleur starten**.

## Wat hij nodig heeft {#what-it-needs}
- **Een herkenner die kan meeluisteren terwijl een gesprek loopt.** Die wordt toegevoegd onder [Instellingen → Transcriptie](/ai-processing/transcription#live-recognition-for-the-prompter), net als elke andere herkenner, en heeft een **Adres voor de souffleur** en een geslaagde **Testen** nodig.
- **Een taalmodel**, voor de assistenten die iets voorstellen. Dat is het model dat bij de assistent is ingesteld, of het standaardmodel van [Instellingen → Verwerking](/ai-processing/processing#language-models). Ondertitels hebben helemaal geen model nodig.
- **Het vinkje Gebruik van de souffleur toestaan**, onder **Instellingen → Souffleur**.

Zodra alle drie aanwezig zijn, verschijnt **Souffleur** in de lijst onderaan de telefoon, tussen **Geschiedenis** en **Instellingen**, en opent het [souffleurvenster](/interface/prompter). Het deel van het programma dat dit doet, is de module **Souffleur**, *Luistert mee tijdens een gesprek en stelt voor*; die kan worden uitgezet onder [Modules](/application/modules).

## Instellingen → Souffleur {#settings--prompter}
<Shot name="41_settings_prompter" alt="Instellingen → Souffleur: de schakelaar die de souffleur toestaat en de tekstgrootte" />

*Spraakherkenning tijdens een lopend gesprek, en suggesties geschreven naar uw eigen instructies. Beide worden per minuut afgerekend.*

| Instelling | Standaard | Wat ze doet |
| --- | --- | --- |
| **Gebruik van de souffleur toestaan** | uit | De enige schakelaar waarmee een souffleur überhaupt kan worden gestart. Niets anders op de pagina werkt zolang hij uit staat. |
| **Transcript en suggesties** | 13 pixels | Hoe groot de twee kolommen van het venster worden getekend. |
| **De nieuwste regel boven de kolommen herhalen** | aan | Toont de nieuwste suggestie — of de nieuwste regel, bij een assistent die niets voorstelt — in een eigen band boven de kolommen. |
| **De herhaalde regel** | 20 pixels | Hoe groot de tekst van de band is. Zichtbaar zolang de band aan staat. |

:::caution
De stem van de tegenpartij wordt naar een herkenner gestuurd terwijl die spreekt, en dat is niet minder dan een opname. Waar [Instellingen → Opname](/recordings) vraagt om de tegenpartij eerst op de hoogte te brengen, start een souffleur pas nadat dat gebeurd is.
:::

De souffleur leest u terwijl u praat, vaak van verder weg dan de rest van de telefoon, dus de twee groottes kiest u zelf: neem er een die u kunt opnemen zonder naar het scherm te buigen. Sleep de scheidingslijn onder de band, in het [souffleurvenster](/interface/prompter#the-window), om hem hoger te maken.

### Assistenten {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Instellingen → Souffleur: de assistenten en de maandplafonds" />

Een assistent is wat een souffleur moet zijn. *Elk ervan luistert naar een lopend gesprek en schrijft iets in het venster van de souffleur: de woorden zoals ze gezegd worden, een vertaling ervan, of een suggestie voor wat u hierna kunt zeggen.* Welke er draait, kiest u in het souffleurvenster. Het programma levert er vier mee:

| Assistent | Wat hij schrijft | Raadpleegt een model |
| --- | --- | --- |
| **Ondertitels** | De woorden van beide kanten, terwijl ze gezegd worden. | nee |
| **Vertaling** | De woorden van de andere kant, vertaald in de taal van het programma. | ja |
| **Bezwaren in het gesprek** | Voor wie telefonisch verkoopt: als de klant een bezwaar opwerpt, het bezwaar in één regel en één regel die erop antwoordt. | ja |
| **Hulp bij het gesprek** | Voor wie een sollicitatiegesprek heeft: het antwoord op de zojuist gestelde vraag, in een paar korte regels, of wat er in het volgende antwoord aan bod moet komen. | ja |

**▲** en **▼** wijzigen de volgorde, en dat is de volgorde van de keuzelijst in het [souffleurvenster](/interface/prompter#the-window). **Toevoegen** maakt een eigen assistent. **Standaardwaarden herstellen** zet de prompts en de regels terug zoals ze met het programma kwamen, hier en onder [Verwerking](/ai-processing/processing#defaults); uw taalmodellen blijven ongemoeid.

### De kaart van een assistent {#an-assistants-card}
Klikken op een assistent opent zijn kaart. Het is dezelfde kaart als die van een [prompt](/ai-processing/prompt-studio) onder Verwerking, met een paar eigen bedieningselementen.

<Shot name="42_prompter_assistant" alt="De kaart van de assistent Bezwaren in het gesprek: de herkenner, wanneer een antwoord afgelopen is, de rol en de prompt" />

| Veld | Wat het doet |
| --- | --- |
| **Naam** | De naam in de lijst en in het souffleurvenster. |
| **Antwoordvorm** en **Ook verzenden** | Zoals bij elke prompt: de vorm van het antwoord en de instructies die worden meegestuurd. De meegeleverde assistenten antwoorden in **Lopende tekst**. |
| **Herkenner** | Welke herkenner luistert. Alleen herkenners die kunnen meeluisteren terwijl iemand praat, worden aangeboden. |
| **Wanneer een antwoord afgelopen is** | Wie beslist dat een antwoord voorbij is en beantwoord kan worden: **De herkenner beslist**, **Na een pauze** of **Alleen als ik het vraag** — dan eindigt een antwoord wanneer u op **Suggestie** drukt. Zes van de herkenners geven zelf aan waar een antwoord eindigt en vier niet; **De herkenner beslist** valt terug op een pauze waar hij geen antwoord heeft, en daarom is het de instelling om te laten staan. |
| **Ook mijn kant herkennen** | Een tweede sessie bij dezelfde herkenner, tegen de dubbele prijs, zodat ook uw eigen woorden in het transcript verschijnen. Ze gaan mee in wat het model te horen krijgt, maar zijn nooit waarnaar het gevraagd wordt. |
| **Rol — wat het model is** | Wordt vóór de prompt naar het model gestuurd, bijvoorbeeld *U helpt iemand die telefonisch verkoopt…* |
| **De prompt** | Wat het model bij elk antwoord gevraagd wordt. `{{reply}}` is het antwoord dat net is afgelopen en `{{conversation}}` alles wat ervoor gezegd is. *Laat het leeg en er wordt een model niets gevraagd: de woorden worden getoond zoals ze binnenkomen, en het enige waarvoor betaald wordt is de herkenner.* Dat is precies **Ondertitels**. |
| **Antwoorden in** | De taal van de suggestie: **Wat er ook gesproken is**, **De taal van dit programma** of **Altijd één taal**, met de code ervan. |
| **Model** | **Standaard** of een van uw [taalmodellen](/ai-processing/processing#language-models). |

### Uitgaven {#spending}
*Los van wat de regels aan afgeronde gesprekken mogen besteden. Een maand samenvattingen mag een souffleur niet midden in een gesprek kunnen laten zwijgen.*

| Veld | Als het bereikt is |
| --- | --- |
| **Herkenners, per maand** | Een lopende souffleur stopt aan het eind van het antwoord waar hij mee bezig is — nooit midden in een woord. |
| **Modellen, per maand** | Het souffleren stopt en de ondertitels lopen door. |

Leeg betekent geen plafond. Wat een minuut live audio kost, is de **Prijs per minuut** van de herkenner, ingevuld op zijn kaart onder [Transcriptie](/ai-processing/transcription#the-recognisers-card); zonder die prijs meldt de souffleur dat het getoonde bedrag een schatting is.
