---
title: Kontakter och historik
sidebar_position: 3
description: Adressboken och samtalshistoriken, bredvid telefonen.
---

**Kontakter** och **Historik** öppnas som två flikar till höger om telefonen, så att du kan slå upp ett nummer medan du pratar.

## Kontakter {#contacts}

<Shot name="03_contacts" alt="Fliken Kontakter" />

- **Sök** filtrerar listan medan du skriver.
- **Lägg till** skapar en kontakt.
- Varje kontakt visas med ett namn och under det numret och kontot som kontakten rings via, till exempel *231 · 201 Kontor*.

Ett inkommande samtal från ett känt nummer visar kontaktens namn, och det gör även listorna över senaste samtal och samtalshistoriken — så fungerar nummerpresentation.

### Redigera en kontakt {#editing-a-contact}

<Shot name="03b_contact_edit" alt="En kontakt öppnad för redigering" />

Markera en kontakt för att visa en penna och en lur till höger på raden. Luren ringer kontakten; pennan öppnar formuläret under raden:

| Fält | Vad du skriver |
| --- | --- |
| **Namn** | Hur kontakten visas. |
| **Nummer** | Numret som ska ringas. |
| Listrutan under **Nummer** | Kontot som kontakten rings via. |

**Spara** behåller ändringarna, **Avbryt** kastar dem och **Ta bort** tar bort kontakten.

## Historik {#history}

<Shot name="21_history" alt="Fliken Historik" />

Samtalshistoriken, nyast först. Överst:

- listrutan, som standard **Alla samtal**, begränsar listan till en sorts samtal;
- **Sök** filtrerar på det du skriver.

Varje post har en ikon för sorts samtal — en utgående lur, eller en röd lur med en klocka för ett missat samtal —, den andra partens namn (eller numret) och under det datumet, hur samtalet slutade, dess längd, numret och kontot. Nyliga samtal visas som *I går, 22:33* eller med en veckodag, äldre med datumet.

| Hur samtalet slutade | Visas som |
| --- | --- |
| Ni pratade | **utgående** eller inkommande, och längden, till exempel *48 s* |
| Ett inkommande samtal besvarades inte | **Missat** |
| Ett samtal du ringde kopplades inte upp | **Gick inte fram** |

Markera en post för att visa fyra knappar till höger:

| Knapp | Gör |
| --- | --- |
| Person med ett plus | Lägger till numret i [Kontakter](#contacts). |
| ▶ | Spelar upp inspelningen av samtalet, om det spelades in. |
| Papperskorg | Tar bort posten. |
| Lur | Ringer tillbaka till numret. |

### Hur länge historiken sparas {#how-long-the-log-is-kept}

En samtalshistorik är bevis, så ingenting tas bort ur den om du inte säger till: som standard sparas varje samtal. Lagringstiden och knappen **Rensa samtalshistoriken** finns under [Samtalsinställningar](../sip-accounts/calls.md#history).

Missade och avvisade samtal kan också läsas via det [lokala REST-API:et](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
