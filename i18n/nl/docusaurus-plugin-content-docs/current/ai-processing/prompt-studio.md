---
title: Personal Prompt Studio
sidebar_position: 3
description: De prompts die uw gesprekken uitwerken, de regels die ze uitvoeren, en hoe u ze naar uw hand zet.
---

**Personal Prompt Studio** is het deel van AI Softphone dat uw gesprekken op uw manier uitwerkt. De uitwerking wordt gemaakt door prompts: het programma levert er elf, klaar voor gebruik zodra transcriptie en een taalmodel gekoppeld zijn, en u kunt ze in gewone taal wijzigen, dupliceren en eigen prompts toevoegen. Ze staan onder **Prompts** bij [Instellingen → Verwerking](processing.md#prompts).

Uw LLM, uw sleutel, uw controle: koppel het model dat u wilt met uw eigen sleutel, via een ondersteunde dienst of een compatibele API — of een model dat binnen uw organisatie draait. Met [transcriptie](transcription.md#your-own-models) ook op uw eigen hardware blijven zowel de audio als de transcripten binnen uw omgeving.

<Shot name="12b_settings_processing_prompts" alt="De lijst met prompts bij Instellingen → Verwerking" />

## De prompts die met het programma komen {#the-prompts-that-come-with-the-program}

De tweede kolom is wat de lijst onder de naam van de prompt toont: wat hij schrijft, en in welke vorm.

| Prompt | Vorm | Wat hij schrijft |
| --- | --- | --- |
| **Samenvatting** | Lopende tekst | De hoofdpunten, beslissingen en volgende stappen in één korte alinea. |
| **Samenvatting van één regel** | Lopende tekst | Een korte titel om het gesprek in een lijst te herkennen. |
| **Actiepunten** | Punten | Wie heeft toegezegd wat te doen, en wanneer, met de woorden die werden gezegd. |
| **Onderwerpen** | Punten | De besproken onderwerpen, in een paar woorden. |
| **Namen en getallen** | JSON | Personen, bedrijven, datums, bedragen en kenmerken. |
| **Categorie** | Labels | Ordent het gesprek onder een van uw [categorieën](dictionaries.md). |
| **Labels** | Labels | Zet uw [labels](dictionaries.md) erop, zodat het later te vinden is. |
| **Signalen** | Signalen | Problemen, met het bewijs en het tijdstip in het gesprek. |
| **Een vraag over dit gesprek** | Antwoord | Beantwoordt een vraag die u over één gesprek stelt, op basis van het transcript. |
| **Verkoopkwaliteit** | Criteria | Beoordeelt het gesprek aan de hand van verkoopcriteria die u kunt aanpassen. |
| **Kwaliteit van de ondersteuning** | Criteria | Beoordeelt hoe goed het probleem werd begrepen en afgehandeld. |

De vormen zijn vaste opbouwen van een antwoord, en daardoor kan het programma het bewaren en er later in zoeken: **Labels** zijn codes uit een van uw lijsten, **Signalen** zijn codes met een ernst, **Criteria** is een cijfer met een reden en een cijfer per criterium, **Antwoord** is een antwoord met de woorden waarop het rust. De instructies die een model de vorm vertellen, staan bij [Woordenlijsten](dictionaries.md#answer-shapes-and-language).

Gesprekken gevoerd in AI Softphone, vergaderingen die vanaf de computer zijn [vastgelegd](/capture/) en geïmporteerde opnames gaan allemaal door dezelfde prompts zodra ze een transcript hebben.

Actiepunten leggen vast wat er is afgesproken — ze sturen geen berichten, plannen geen bezoeken en maken geen tickets voor u aan.

## Het naar uw hand zetten {#making-it-yours}

- Wijzig wat een prompt vraagt, in gewone taal: waar hij naar zoekt, de vorm van het antwoord en de taal waarin hij antwoordt.
- Dupliceer een prompt om een variant te proberen.
- Kies het model voor elke prompt — op uw eigen machine of in de cloud.
- Stel de volgorde in waarin prompts lopen, zet ze aan en uit en maak ze voorwaardelijk — dat doet u met de [regels](processing.md#rules): een verkoopbeoordeling loopt bijvoorbeeld alleen bij gesprekken die als **Verkoop** zijn geordend.
- Houd uw eigen categorieën, labels en signalen bij in [Woordenlijsten](dictionaries.md).
- Begrens de kosten met de [maandgrenzen](processing.md#limits).

De oorspronkelijke prompts en regels zijn te herstellen met **Standaardwaarden herstellen** onder **Standaardwaarden** bij [Instellingen → Verwerking](processing.md#defaults).
