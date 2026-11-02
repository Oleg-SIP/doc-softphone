---
title: Personal Prompt Studio
sidebar_position: 3
description: De prompts die uw gesprekken uitwerken, de regels die ze uitvoeren, en hoe u ze naar uw hand zet.
---

**Personal Prompt Studio** is het deel van AI Softphone dat uw gesprekken op uw manier uitwerkt. De uitwerking wordt gemaakt door prompts: het programma levert er elf, klaar voor gebruik zodra transcriptie en een taalmodel gekoppeld zijn, en u kunt ze in gewone taal wijzigen, dupliceren en eigen prompts toevoegen. Ze staan onder **Prompts** bij [Instellingen → Verwerking](processing.md#prompts).

Uw LLM, uw sleutel, uw controle: koppel het model dat u wilt met uw eigen sleutel, via een ondersteunde dienst of een compatibele API — of een model dat binnen uw organisatie draait. Met [transcriptie](transcription.md#your-own-models) ook op uw eigen hardware blijven zowel de audio als de transcripten binnen uw omgeving.

<Shot name="12b_settings_processing_prompts" alt="De lijst met prompts bij Instellingen → Verwerking" />

## De prompts die met het programma komen {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 bevat elf prompts voor afgeronde gesprekken en vier live-assistenten. Hieronder staan de meegeleverde teksten voor deze taal; taalversies kunnen verschillen.

| Prompt | `code` | Vorm | Wat hij schrijft |
| --- | --- | --- | --- |
| **Samenvatting** | `summary` | Lopende tekst | De hoofdpunten, beslissingen en volgende stappen in één korte alinea. |
| **Samenvatting van één regel** | `super-summary` | Lopende tekst | Een korte titel om het gesprek in een lijst te herkennen. |
| **Actiepunten** | `action-items` | Punten | Wie heeft toegezegd wat te doen, en wanneer, met de woorden die werden gezegd. |
| **Onderwerpen** | `topics` | Punten | De besproken onderwerpen, in een paar woorden. |
| **Namen en getallen** | `entities` | JSON | Personen, bedrijven, datums, bedragen en kenmerken. |
| **Categorie** | `categorise` | Labels | Ordent het gesprek onder een van uw [categorieën](dictionaries.md). |
| **Labels** | `tags` | Labels | Zet uw [labels](dictionaries.md) erop, zodat het later te vinden is. |
| **Signalen** | `red-flags` | Signalen | Problemen, met het bewijs en het tijdstip in het gesprek. |
| **Een vraag over dit gesprek** | `qa` | Antwoord | Beantwoordt een vraag die u over één gesprek stelt, op basis van het transcript. |
| **Verkoopkwaliteit** | `sales-quality` | Criteria | Beoordeelt het gesprek aan de hand van verkoopcriteria die u kunt aanpassen. |
| **Kwaliteit van de ondersteuning** | `support-quality` | Criteria | Beoordeelt hoe goed het probleem werd begrepen en afgehandeld. |

De vormen zijn vaste opbouwen van een antwoord, en daardoor kan het programma het bewaren en er later in zoeken: **Labels** zijn codes uit een van uw lijsten, **Signalen** zijn codes met een ernst, **Criteria** is een cijfer met een reden en een cijfer per criterium, **Antwoord** is een antwoord met de woorden waarop het rust. De instructies die een model de vorm vertellen, staan bij [Woordenlijsten](dictionaries.md#instructions).

Ook de assistenten van de [souffleur](../interface/prompter.md) zijn prompts, die op elk antwoord draaien terwijl een gesprek loopt in plaats van op een afgerond gesprek. Ze staan in een eigen lijst, onder [Assistenten](prompter.md#assistants) in **Instellingen → Souffleur**.

Gesprekken gevoerd in AI Softphone, vergaderingen die vanaf de computer zijn [vastgelegd](/capture/) en geïmporteerde opnames gaan allemaal door dezelfde prompts zodra ze een transcript hebben.

Actiepunten leggen vast wat er is afgesproken — ze sturen geen berichten, plannen geen bezoeken en maken geen tickets voor u aan.

## Het naar uw hand zetten {#making-it-yours}

- Wijzig wat een prompt vraagt, in gewone taal: waar hij naar zoekt, de vorm van het antwoord en de taal waarin hij antwoordt.
- Dupliceer een prompt om een variant te proberen.
- Kies het model voor elke prompt — op uw eigen machine of in de cloud.
- Stel de volgorde in waarin prompts lopen, zet ze aan en uit en maak ze voorwaardelijk — dat doet u met de [regels](processing.md#rules): een verkoopbeoordeling loopt bijvoorbeeld alleen bij gesprekken die als **Verkoop** zijn geordend.
- Houd uw eigen categorieën, labels en signalen bij in [Woordenlijsten](dictionaries.md).
- Begrens de kosten met de [maandgrenzen](processing.md#spending).

De oorspronkelijke prompts en regels zijn te herstellen met **Standaardwaarden herstellen** onder **Standaardwaarden** bij [Instellingen → Verwerking](processing.md#defaults).

## Modelrol {#role-and-task}

`system` bepaalt het gedrag van het model; `body` beschrijft de opdracht. De antwoordvorm en taal worden afzonderlijk via lijstinstructies opgegeven.

Een lege lijst met taken of waarschuwingen kan correct zijn. Ontbrekende verantwoordelijken en datums mogen niet worden verzonnen. Antwoorden op vragen moeten uitsluitend op het transcript berusten.

[Antwoordformaten](dictionaries.md#response-formats)

## Plaatsaanduidingen {#placeholders}

Een element in de prompt dat wordt vervangen door gespreksgegevens.

| Plaatsaanduiding | Betekenis |
| --- | --- |
| `{{transcript}}` | Transcript, één uiting per regel, met tijden in milliseconden |
| `{{duration}}` | Gespreksduur |
| `{{direction}}` | Inkomend of uitgaand gesprek |
| `{{party}}` | Contactnaam of nummer |
| `{{language}}` | Antwoordtaal |
| `{{question}}` | Vraag van de gebruiker |
| `{{categories}}` | Categorielijst |
| `{{tags}}` | Taglijst |
| `{{red_flags}}` | Lijst met waarschuwingssignalen |
| `{{artifact:summary}}` | Eerder gemaakte samenvatting |
| `{{conversation}}` | Gesprekscontext verzameld door de live-assistent |
| `{{reply}}` | Laatste uiting van de gesprekspartner; alleen voor de live-assistent |

Voer `summary` uit vóór `super-summary`, dat `{{artifact:summary}}` gebruikt. Voer `categorise` uit vóór de kwaliteitsbeoordeling: `sales-quality` vereist `sales`, en `support-quality` vereist `support`.

[Meegeleverde assistenten](prompter.md#assistant-templates)

## Standaardteksten van prompts {#standard-templates}

AI Softphone 1.1.11 bevat elf prompts voor afgeronde gesprekken en vier live-assistenten. Hieronder staan de meegeleverde teksten voor deze taal; taalversies kunnen verschillen.

### Samenvatting (`summary`) {#summary}

**Antwoordvorm:** `plain`.

**Rol (`system`)**

```text
Je leest transcripties van telefoongesprekken en schrijft er korte, feitelijke samenvattingen van. Je gokt nooit naar wat niet is gezegd, en je voegt nooit advies toe.
```

**Opdracht (`body`)**

```text
Vat dit telefoongesprek samen in één korte alinea: waar het over ging, wat er is besloten, en wat er hierna gebeurt. Het duurde {{duration}} en was {{direction}}, met {{party}}.

{{transcript}}
```

### Samenvatting van één regel (`super-summary`) {#super-summary}

**Antwoordvorm:** `plain`.

**Rol (`system`)**

```text
Je leest transcripties van telefoongesprekken en brengt elk terug tot één zinsnede. Je gokt nooit en je voegt nooit advies toe.
```

**Opdracht (`body`)**

```text
Breng dit telefoongesprek terug tot één zinsnede van hoogstens twaalf woorden — het soort regel dat in een tabel naast de naam van de beller zou staan. Geen punt, geen aanhalingstekens.

{{artifact:summary}}

{{transcript}}
```

### Actiepunten (`action-items`) {#action-items}

**Antwoordvorm:** `list`.

**Rol (`system`)**

```text
Je leest transcripties van telefoongesprekken en somt op wat iemand op zich heeft genomen. Je somt alleen op wat echt is gezegd; je verzint nooit een taak, een verantwoordelijke of een datum.
```

**Opdracht (`body`)**

```text
Som op wat wie dan ook in dit gesprek op zich heeft genomen. Noem wie het moet doen waar dat is gezegd, en tegen wanneer waar dat is gezegd. Heeft niemand iets op zich genomen, antwoord dan met een lege lijst.

{{transcript}}
```

### Onderwerpen (`topics`) {#topics}

**Antwoordvorm:** `list`.

**Rol (`system`)**

```text
Je leest transcripties van telefoongesprekken en benoemt waar ze over gingen.
```

**Opdracht (`body`)**

```text
Som de onderwerpen op die dit gesprek werkelijk heeft behandeld, hoogstens zes, elk in een paar woorden. Laat de verantwoordelijke en de datum leeg — die betekenen hier niets.

{{transcript}}
```

### Namen en getallen (`entities`) {#entities}

**Antwoordvorm:** `json`.

**Rol (`system`)**

```text
Je leest transcripties van telefoongesprekken en haalt eruit wat erin is genoemd. Je gokt nooit naar een spelling en voegt nooit toe wat niet is gezegd.
```

**Opdracht (`body`)**

```text
Haal eruit wat in dit gesprek is genoemd, als JSON precies in deze vorm:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Elk is een lijst van tekenreeksen, geschreven zoals ze zijn gezegd. Laat een lijst liever leeg dan te gokken.

{{transcript}}
```

### Categorie (`categorise`) {#categorise}

**Antwoordvorm:** `labels`.

**Rol (`system`)**

```text
Je ordent telefoongesprekken onder een van de categorieën die je krijgt. Je kiest uit de lijst en uit niets anders.
```

**Opdracht (`body`)**

```text
Orden dit gesprek onder precies een van deze categorieën. Antwoord met de code ervan.

{{categories}}
{{transcript}}
```

### Labels (`tags`) {#tags}

**Antwoordvorm:** `labels`.

**Rol (`system`)**

```text
Je labelt telefoongesprekken met de labels die je krijgt. Je kiest uit de lijst en uit niets anders, en je laat een label liever weg dan het op te rekken.
```

**Opdracht (`body`)**

```text
Welke hiervan gelden voor dit gesprek? Antwoord met hun codes, of met een lege lijst als er geen geldt.

{{tags}}
{{transcript}}
```

### Signalen (`red-flags`) {#red-flags}

**Antwoordvorm:** `flags`.

**Rol (`system`)**

```text
Je leest transcripties van telefoongesprekken en noemt alleen waar je naar hebt moeten zoeken. Je citeert de woorden waarop je je bij elk baseert, en je noemt niets dat je niet kunt citeren.
```

**Opdracht (`body`)**

```text
Noem welke hiervan dit gesprek laat zien. Citeer bij elk de woorden waarop het steunt en geef het moment in milliseconden waarop ze zijn gezegd. Noem liever niets dan een definitie op te rekken.

{{red_flags}}
{{transcript}}
```

### Een vraag over dit gesprek (`qa`) {#qa}

**Antwoordvorm:** `qa`.

**Rol (`system`)**

```text
Je beantwoordt vragen over één telefoongesprek, uit de transcriptie ervan en uit niets anders. Waar het gesprek het niet zegt, zeg je dat ronduit in plaats van te gokken.
```

**Opdracht (`body`)**

```text
{{question}}

{{transcript}}
```

### Verkoopkwaliteit (`sales-quality`) {#sales-quality}

**Antwoordvorm:** `rubric`.

**Rol (`system`)**

```text
Je beoordeelt hoe een verkoper een telefoongesprek heeft gevoerd. Je oordeelt alleen over wat de transcriptie laat zien, je neemt nooit aan wat ervoor of erna gebeurde, en je bent net zo streng voor een gesprek dat goed ging als voor een dat dat niet deed.
```

**Opdracht (`body`)**

```text
Beoordeel onze kant van dit gesprek — de persoon aan de telefoon — op deze criteria en geen andere:
- begroeting: stelde die zich en het bedrijf voor?
- inventarisatie: kwam die erachter wat de klant werkelijk wilde?
- bezwaren: beantwoordde die wat de klant opwierp, in plaats van eromheen te praten?
- waarde: zei die wat de klant krijgt, en niet alleen wat het kost?
- vervolgstap: eindigde het gesprek met iets concreets?

{{transcript}}
```

### Kwaliteit van de ondersteuning (`support-quality`) {#support-quality}

**Antwoordvorm:** `rubric`.

**Rol (`system`)**

```text
Je beoordeelt hoe een medewerker van de ondersteuning een telefoongesprek heeft gevoerd. Je oordeelt alleen over wat de transcriptie laat zien, en weegt zwaarder of het probleem van de klant werkelijk is aangepakt dan hoe prettig het gesprek was.
```

**Opdracht (`body`)**

```text
Beoordeel onze kant van dit gesprek — de persoon aan de telefoon — op deze criteria en geen andere:
- begroeting: stelde die zich voor en bevestigde die met wie die sprak?
- begrip: stelde die vast wat er werkelijk mis was voordat die antwoordde?
- oplossing: is het probleem opgelost, of is er een concrete vervolgstap gegeven?
- toon: bleef die rustig en beleefd, vooral waar de klant dat niet was?
- afsluiting: ging die na of de klant tevreden was voordat die afsloot?

{{transcript}}
```
