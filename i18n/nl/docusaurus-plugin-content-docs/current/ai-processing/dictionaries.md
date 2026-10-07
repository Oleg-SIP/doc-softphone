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
| **Verkoop** | `sales` | Verkopen, offreren, onderhandelen of een aankoop opvolgen — ook een klant die vraagt wat iets kost. |
| **Ondersteuning** | `support` | Iemand helpen met een product of dienst die hij al heeft: een storing, een vraag over het gebruik, een klacht over hoe het werkt. |
| **Privé** | `personal` | Helemaal niet zakelijk — een privégesprek dat toevallig op deze lijn werd gevoerd. |
| **Overig** | `other` | Zakelijk, maar verkoop noch ondersteuning: een leverancier, een collega, een levering, een verkeerd nummer. Kies dit liever dan te gokken tussen de andere. |

Druk op **Toevoegen** om een eigen categorie toe te voegen.

## Labels {#tags}

Markeringen die *allemaal tegelijk op hetzelfde gesprek van toepassing kunnen zijn*. Druk op **Toevoegen** om er een toe te voegen. De lijst begint met items zoals:

| Naam | Code | Gebruikt voor |
| --- | --- | --- |
| **Terugbellen toegezegd** | `callback` | Iemand in dit gesprek beloofde terug te bellen, of vroeg om teruggebeld te worden. |
| **Klacht** | `complaint` | De andere partij uitte ontevredenheid, of het nu werd opgelost of niet. |
| **Doorgezet** | `escalation` | Het gesprek werd aan iemand anders overgedragen, of de andere partij vroeg daarom. |
| **Belangrijke klant** | `vip` | De andere partij werd behandeld als belangrijke klant, of zei er een te zijn. |

## Signalen {#red-flags}

Dingen die aandacht vragen, gevonden in het gesprek met het bewijs en het tijdstip — bijvoorbeeld *Boze klant* of *Opzegrisico*. Signalen worden rood getekend in het [venster Opnames](../interface/recordings.md), en elk heeft een ernst: laag, middel of hoog.

## Antwoordvormen en taal {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Instellingen → Woordenlijsten: antwoordvormen en taalinstructies" />

Verderop in het tabblad staan de instructies waaruit de prompts worden samengesteld. Ze staan hier zodat elke prompt dezelfde formulering kan gebruiken, en u kunt ze wijzigen zoals elk ander item.

| Naam | Code | Wat het het model vertelt |
| --- | --- | --- |
| **Labels** | `shape-labels` | Antwoord in JSON met een lijst codes en hoe zeker het van elk is, en gebruik alleen codes uit de gegeven lijst. |
| **Cijfer** | `shape-score` | Antwoord met een cijfer, de reden ervoor en de woorden waarop het rust. |
| **Criteria** | `shape-rubric` | Antwoord met een totaalcijfer en een cijfer per criterium. |
| **Signalen** | `shape-flags` | Antwoord met codes uit de lijst, elk met een ernst. |
| **Antwoord** | `shape-qa` | Antwoord met het antwoord, of zeg ronduit dat het gesprek het niet zegt, en de woorden waarop het antwoord rust. |
| **JSON** | `shape-json` | Antwoord alleen met JSON, in de vorm die hierboven is gevraagd. |
| **Zoals gesproken** | `language-as-spoken` | Schrijf in de taal waarin het gesprek werd gevoerd. |
| **Zoals gesproken, benoemd** | `language-as-spoken-named` | Hetzelfde, met de naam van de taal erbij. |
| **Een benoemde taal** | `language-named` | Schrijf in de taal die u noemt. |

**Toevoegen** aan het eind van de lijst voegt een item toe.

## Standaardwaarden {#defaults}

**Standaardwaarden herstellen** zet elke woordenlijst terug zoals die met het programma kwam, in de huidige taal van de interface. Waaronder uw gesprekken al zijn geordend, blijft ongemoeid.
