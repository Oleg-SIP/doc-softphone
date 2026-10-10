---
title: Contacten en geschiedenis
sidebar_position: 4
description: Het adresboek en de gesprekgeschiedenis, naast de telefoon.
---

**Contacten** en **Geschiedenis** openen als twee tabbladen rechts van de telefoon, zodat u een nummer kunt opzoeken terwijl u praat.

## Contacten {#contacts}

<Shot name="03_contacts" alt="Het tabblad Contacten" />

- **Zoeken** filtert de lijst terwijl u typt.
- **Toevoegen** maakt een contact aan.
- Elk contact staat in de lijst met een naam en daaronder het nummer en het account waarmee het contact wordt gebeld, bijvoorbeeld *231 · 201 Kantoor*.

Een inkomend gesprek van een bekend nummer toont de naam van het contact, net als de lijsten met recente gesprekken en de gesprekgeschiedenis — zo werkt nummerherkenning.

### Een contact bewerken {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Een contact geopend om te bewerken" />

Selecteer een contact om rechts op de regel een potlood en een hoorn te tonen. De hoorn belt het contact; het potlood opent het formulier onder de regel:

| Veld | Wat u invult |
| --- | --- |
| **Naam** | Hoe het contact wordt getoond. |
| **Nummer** | Het nummer dat gebeld wordt. |
| Keuzelijst onder **Nummer** | Het account waarmee het contact wordt gebeld. |

**Opslaan** bewaart de wijzigingen, **Annuleren** laat ze vallen en **Verwijderen** verwijdert het contact.

## Geschiedenis {#history}

<Shot name="21_history" alt="Het tabblad Geschiedenis" />

De gesprekgeschiedenis, nieuwste eerst. Bovenaan:

- de keuzelijst, standaard **Alle gesprekken**, beperkt de lijst tot één soort gesprek;
- **Zoeken** filtert op wat u typt.

Elke regel heeft een pictogram voor de soort gesprek — een uitgaande hoorn, of een rode hoorn met een klok voor een gemist gesprek —, de naam van de andere partij (of het nummer), en daaronder de datum, de afloop van het gesprek, de duur, het nummer en het account. Recente gesprekken worden getoond als *Gisteren, 22:33* of met een weekdag, oudere met de datum.

| Afloop van het gesprek | Getoond als |
| --- | --- |
| U hebt gesproken | **uitgaand** of inkomend, en de duur, bijvoorbeeld *48 s* |
| Een inkomend gesprek werd niet aangenomen | **Gemist** |
| Een gesprek dat u voerde kwam niet tot stand | **Ging niet door** |

Selecteer een regel om rechts vier knoppen te tonen:

| Knop | Doet |
| --- | --- |
| Persoon met een plus | Voegt het nummer toe aan [Contacten](#contacts). |
| ▶ | Speelt de opname van het gesprek af, als het is opgenomen. |
| Prullenbak | Verwijdert de regel. |
| Hoorn | Belt het nummer terug. |

### Hoelang de geschiedenis bewaard blijft {#how-long-the-log-is-kept}

Een gesprekgeschiedenis is bewijs, dus er wordt niets uit verwijderd tenzij u dat zegt: standaard wordt elk gesprek bewaard. De bewaartermijn en de knop **Gesprekgeschiedenis legen** staan bij [Gespreksinstellingen](../sip-accounts/calls.md#history).

Gemiste en geweigerde gesprekken zijn ook uit te lezen via de [lokale REST-API](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
