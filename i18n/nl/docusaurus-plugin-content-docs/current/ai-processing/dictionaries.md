---
title: Woordenlijsten
sidebar_position: 4
description: Uw eigen categorieën, labels en signalen — de woorden waaronder uw gesprekken worden geordend.
---

**Instellingen → Woordenlijsten** bevat de woorden waaronder een gesprek kan worden geordend, gelabeld of gesignaleerd. Deze lijsten zijn wat de modellen te zien krijgen en waaruit ze moeten kiezen, dus een antwoord is altijd iets waarop u later kunt zoeken.

<Shot name="13_settings_dictionaries" alt="Instellingen → Woordenlijsten" />

**Verwijderde tonen** toont de items die u hebt verwijderd.

Elk item is een naam, een korte code in kleine letters en een beschrijving die het model vertelt wanneer het moet worden gekozen. De code is wat er wordt opgeslagen en wat de [REST-API](../integration/rest-api.md#taxonomy-and-settings) teruggeeft, dus die blijft gelijk als u het item hernoemt.

## Categorieën {#categories}

Waar het gesprek over ging; **per gesprek wordt er één gekozen**. Het programma begint met vier:

| Naam | Code | Gebruikt voor |
| --- | --- | --- |
| **Verkoop** | `sales` | Verkopen, offreren, onderhandelen of nabellen over een aankoop — ook een klant die vraagt wat iets kost. |
| **Ondersteuning** | `support` | Iemand helpen met een product of dienst die hij al heeft: een storing, een vraag over het gebruik, een klacht over hoe het werkt. |
| **Privé** | `personal` | Helemaal niet zakelijk — een privégesprek dat toevallig over deze lijn ging. |
| **Overig** | `other` | Zakelijk, maar noch verkoop noch ondersteuning: een leverancier, een collega, een levering, een verkeerd nummer. Kies dit liever dan tussen de andere te gokken. |

Druk op **Toevoegen** om een eigen categorie toe te voegen.

## Labels {#tags}

Markeringen die *allemaal tegelijk op hetzelfde gesprek van toepassing kunnen zijn*. Druk op **Toevoegen** om er een toe te voegen. De lijst begint met items zoals:

| Naam | Code | Gebruikt voor |
| --- | --- | --- |
| **Terugbellen toegezegd** | `callback` | Iemand in dit gesprek heeft toegezegd terug te bellen, of gevraagd te worden teruggebeld. |
| **Klacht** | `complaint` | De tegenpartij uitte ontevredenheid, of die nu verholpen is of niet. |
| **Doorgezet** | `escalation` | Het gesprek is aan iemand anders overgedragen, of de tegenpartij vroeg daarom. |
| **Belangrijke klant** | `vip` | De tegenpartij werd als belangrijke klant behandeld, of zei dat te zijn. |

## Signalen {#red-flags}

Dingen die aandacht vragen, gevonden in het gesprek met het bewijs en het tijdstip — bijvoorbeeld *Boze klant* of *Opzegrisico*. Signalen worden rood getekend in het [venster Opnames](../interface/recordings.md), en elk heeft een ernst: laag, middel of hoog.

| Naam | Code | `severity` | Gebruikt voor |
| --- | --- | --- | --- |
| **Boze klant** | `angry-customer` | `high` | De tegenpartij was hoorbaar boos, beledigend, of dreigde weg te gaan. |
| **Opzegrisico** | `churn-risk` | `high` | Opzeggen, niet verlengen of overstappen naar iemand anders kwam ter sprake, hoe rustig ook. |
| **Toezegging gedaan** | `promise-made` | `medium` | Onze kant heeft zich aan iets concreets verbonden — een datum, een prijs, een oplossing, een terugbetaling. |
| **Gevoelige gegevens** | `sensitive-data` | `high` | Een kaartnummer, een wachtwoord, een documentnummer of iets anders dat niet in een opname hoort, is hardop voorgelezen. |
| **Concurrent** | `competitor` | `low` | De tegenpartij noemde iemand anders die hetzelfde aanbiedt, of vergeleek ons daarmee. |

## Aanwijzingen {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Instellingen → Woordenlijsten: antwoordvormen en taalinstructies" />

*Wat aan elke prompt wordt toegevoegd over de vorm van het antwoord en de taal om het in te schrijven.* Ze staan hier zodat elke prompt dezelfde formulering kan gebruiken, en u kunt ze wijzigen zoals elk ander item — of zelf iets schrijven, zoals *antwoord kort* of *noem nooit een prijs*, en dat bij elke prompt aanvinken onder **Ook verzenden**.

| Naam | Code | Wat het het model vertelt |
| --- | --- | --- |
| **Lopende tekst** | `shape-plain` | Antwoord in gewone lopende tekst, zonder JSON, lijsten of kopjes. |
| **Punten** | `shape-list` | Antwoord met een lijst van dingen om te doen, elk met wie en wanneer. |
| **Labels** | `shape-labels` | Antwoord in JSON met een lijst codes en hoe zeker het van elk is, en gebruik alleen codes uit de gegeven lijst. |
| **Cijfer** | `shape-score` | Antwoord met een cijfer, de reden ervoor en de woorden waarop het rust. |
| **Criteria** | `shape-rubric` | Antwoord met een totaalcijfer en een cijfer per criterium. |
| **Signalen** | `shape-flags` | Antwoord met codes uit de lijst, elk met een ernst. |
| **Antwoord** | `shape-qa` | Antwoord met het antwoord, of zeg ronduit dat het gesprek het niet zegt, en de woorden waarop het antwoord rust. |
| **JSON** | `shape-json` | Antwoord alleen met JSON, in de vorm die hierboven is gevraagd. |
| **Zoals gesproken** | `language-as-spoken` | Schrijf in de taal waarin het gesprek werd gevoerd. |
| **Zoals gesproken, benoemd** | `language-as-spoken-named` | Hetzelfde, met de naam van de taal erbij. |
| **Een benoemde taal** | `language-named` | Schrijf in de taal die u noemt. |

**Toevoegen** bovenaan de lijst voegt een item toe.

## Standaardwaarden {#defaults}

**Standaardwaarden herstellen** zet elke woordenlijst terug zoals die met het programma kwam, in de huidige taal van de interface. Waaronder uw gesprekken al zijn geordend, blijft ongemoeid.

## Antwoordformaten {#response-formats}

Deze blokken geven de meegeleverde instructies weer. Ze beschrijven antwoordformaten; alternatieven zijn notatie, geen uitvoerbare JSON-voorbeelden.

### Lopende tekst (`shape-plain`) {#shape-plain}

```text
Antwoord in lopende tekst. Gebruik geen JSON, lijsten of koppen.
```

### Punten (`shape-list`) {#shape-list}

```text
Antwoord alleen met JSON, precies in deze vorm:
{"items": [{"text": "wat er gedaan moet worden", "owner": "wie, of leeg", "due": "wanneer, of leeg"}]}
Geef een lege array terug wanneer er niets op te sommen valt. Schrijf niets buiten de JSON.
```

### Labels (`shape-labels`) {#shape-labels}

```text
Antwoord alleen met JSON, precies in deze vorm:
{"labels": [{"code": "een code uit de lijst die je hebt gekregen", "confidence": 0.0}]}
Gebruik alleen codes uit de lijst. Geef een lege array terug wanneer er geen past.
Verzin geen code en schrijf niets buiten de JSON.
```

### Cijfer (`shape-score`) {#shape-score}

```text
Antwoord alleen met JSON, precies in deze vorm:
{"score": 3, "rationale": "waarom dat getal en niet één hoger",
 "evidence": [{"at_ms": 0, "quote": "de woorden waarop je je baseert"}]}
Het cijfer is een geheel getal van 1 tot 5. Schrijf niets buiten de JSON.
```

### Criteria (`shape-rubric`) {#shape-rubric}

```text
Antwoord alleen met JSON, precies in deze vorm:
{"overall": 3, "rationale": "waarom dat getal en niet één hoger",
 "criteria": [{"name": "het criterium zoals het je is gegeven",
               "verdict": "pass" of "weak" of "fail" of "n/a",
               "note": "één zin"}]}
Beoordeel elk criterium dat je hebt gekregen en geen andere. Het eindcijfer is een geheel
getal van 1 tot 5. Schrijf niets buiten de JSON.
```

### Signalen (`shape-flags`) {#shape-flags}

```text
Antwoord alleen met JSON, precies in deze vorm:
{"flags": [{"code": "een code uit de lijst die je hebt gekregen",
            "severity": "low" of "medium" of "high",
            "evidence": "de woorden waarop je je baseert",
            "at_ms": 0}]}
Gebruik alleen codes uit de lijst, en noem elke hoogstens één keer. Geef een lege array
terug wanneer er niets van toepassing is. Schrijf niets buiten de JSON.
```

### Antwoord (`shape-qa`) {#shape-qa}

```text
Antwoord alleen met JSON, precies in deze vorm:
{"answer": "je antwoord, of zeg ronduit dat het gesprek het niet zegt",
 "citations": [{"at_ms": 0, "quote": "de woorden waarop je antwoord steunt"}]}
Antwoord uit niets anders dan het gesprek. Schrijf niets buiten
de JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Antwoord alleen met JSON, in de hierboven gevraagde vorm. Schrijf niets buiten de JSON.
```

### Zoals gesproken (`language-as-spoken`) {#language-as-spoken}

```text
Schrijf je antwoord in dezelfde taal als waarin het gesprek werd gevoerd.
```

### Zoals gesproken, benoemd (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Schrijf je antwoord in dezelfde taal als waarin het gesprek werd gevoerd, namelijk {language}.
```

### Een benoemde taal (`language-named`) {#language-named}

```text
Schrijf je antwoord in deze taal: {language}.
```
