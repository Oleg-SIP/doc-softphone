---
title: Verwerking
sidebar_position: 2
description: Automatische verwerking van gesprekken, de maandelijkse bestedingsgrenzen, taalmodellen, prompts en de regels die ze uitvoeren.
---

**Instellingen → Verwerking** bepaalt wat er met een gesprek gebeurt nadat het is opgenomen, welk model het werk doet, en wat het mag kosten.

<Shot name="12_settings_processing" alt="Instellingen → Verwerking" />

## Gesprekken automatisch verwerken {#process-conversations-automatically}

- **Uit:** er gebeurt niets tot u erom vraagt in het [venster Opnames](../interface/recordings.md).
- **Aan:** de [regels](#rules) hieronder lopen vanzelf. Dit is wat een gesprek omzet in een samenvatting, een categorie en al het andere zonder dat iemand ergens op drukt. Een model in de cloud rekent voor elk van die stappen.

Onder het vakje toont het programma wat er deze maand is uitgegeven en over hoeveel verzoeken, bijvoorbeeld *Deze maand: 40.492 tokens, over 84 verzoeken, kosteloos.*

## Grenzen {#limits}

| Veld | Betekenis |
| --- | --- |
| **Geldgrens, per maand** | Het meeste wat de modellen in een maand mogen kosten. |
| **Tokengrens, per maand** | Het meeste aantal tokens dat ze in een maand mogen gebruiken. |

Er zijn twee grenzen omdat een maand in twee dingen geteld kan worden. Beide zijn leeg tot u ze invult. Als een van beide is bereikt, stoppen de automatische regels tot de volgende maand. **Wat u zelf vraagt, wordt nooit gestopt.**

## Taalmodellen {#language-models}

De modellen die een transcript lezen en erover schrijven. Druk op **Toevoegen** om er een toe te voegen. Elk staat in de lijst met zijn naam en daaronder de modelaanduiding en het adres van de dienst, bijvoorbeeld `qwen3-32b · http://llm.local:8000/v1`. Het als **standaard** gemarkeerde model wordt standaard gebruikt. Met een knop in het formulier van een model controleert u of de dienst echt antwoordt voordat u erop vertrouwt.

- Een model **op uw eigen machine** houdt elk gesprek binnen het gebouw en kost niets.
- Een model in de cloud — OpenAI, Claude, Mistral, DeepSeek, Groq en andere — wordt per gebruik gerekend. Het programma toont de prijs van elke aanroep in tokens en in geld.

## Prompts {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Instellingen → Verwerking: de prompts" />

*Wat de modellen wordt gevraagd.* Elke prompt kwam met het programma en elke is van u om te wijzigen — en om terug te zetten. Elke staat in de lijst met zijn naam en daaronder wat hij schrijft en in welke vorm. De vorm — **Antwoord**, **Punten**, **Labels**, **JSON**, **Lopende tekst**, **Signalen** of **Criteria** — bepaalt hoe het antwoord wordt bewaard en getoond. De prompts worden beschreven in [Personal Prompt Studio](prompt-studio.md). **Toevoegen** maakt een eigen prompt.

## Regels {#rules}

<Shot name="12c_settings_processing_rules" alt="Instellingen → Verwerking: de regels" />

*Wat vanzelf loopt, in deze volgorde. Elke vuurt hoogstens één keer per gesprek.* Een regel is een regel met een vakje dat hem aan- of uitzet, zijn naam en daaronder wat hij doet. **▲** en **▼** wijzigen de volgorde. Het programma levert er acht:

| Regel | Doet | Wanneer |
| --- | --- | --- |
| **Elk gesprek transcriberen** | Schrijft het uit. | altijd |
| **Het samenvatten** | Vraagt een model: **Samenvatting**. | altijd |
| **Het tot één regel terugbrengen** | Vraagt een model: **Samenvatting van één regel**. | altijd |
| **Het onder een categorie ordenen** | Vraagt een model: **Categorie**. | altijd |
| **Het labelen** | Vraagt een model: **Labels**. | altijd |
| **Noemen wat een blik waard is** | Vraagt een model: **Signalen**. | altijd |
| **Het beoordelen, als het verkoop was** | Vraagt een model: **Verkoopkwaliteit**. | alleen als de categorie **Verkoop** is |
| **Het beoordelen, als het ondersteuning was** | Vraagt een model: **Kwaliteit van de ondersteuning**. | alleen als de categorie **Ondersteuning** is |

De volgorde doet ertoe: de laatste twee regels hebben de categorie nodig die de regel ervoor heeft gezet. **Toevoegen** maakt een eigen regel.

## Standaardwaarden {#defaults}

**Standaardwaarden herstellen** zet de prompts en de regels terug zoals ze met het programma kwamen, in de huidige taal van de interface. Uw taalmodellen blijven ongemoeid.

De prompts en regels die met het programma kwamen, blijven in hun taal als u de taal van de interface wijzigt; **Standaardwaarden herstellen** zet ze in de nieuwe. Elke prompt wordt dan rechts gemarkeerd als *gewijzigd*.
