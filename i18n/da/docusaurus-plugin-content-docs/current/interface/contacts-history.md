---
title: Kontakter og historik
sidebar_position: 2
description: Adressebogen og opkaldshistorikken ved siden af telefonen.
---

**Kontakter** og **Historik** åbner som to faner til højre for telefonen, så du kan slå et nummer op, mens du taler.

## Kontakter {#contacts}

<Shot name="03_contacts" alt="Fanen Kontakter" />

- **Søg** filtrerer listen, mens du skriver.
- **Tilføj** opretter en kontakt.
- Hver kontakt står med et navn og nedenunder nummeret og den konto, kontakten ringes op via, for eksempel *231 · 201 Kontor*.

Et indgående opkald fra et kendt nummer viser kontaktens navn, og det samme gør listerne over seneste opkald og opkaldshistorikken — sådan virker nummervisning.

### Redigere en kontakt {#editing-a-contact}

<Shot name="03b_contact_edit" alt="En kontakt åbnet til redigering" />

Markér en kontakt for at få en blyant og et rør frem til højre på dens række. Røret ringer til kontakten; blyanten åbner formularen under rækken:

| Felt | Hvad du skriver |
| --- | --- |
| **Navn** | Hvordan kontakten vises. |
| **Nummer** | Det nummer, der skal ringes til. |
| Rullelisten under **Nummer** | Den konto, kontakten ringes op via. |

**Gem** beholder ændringerne, **Annullér** kasserer dem, og **Slet** fjerner kontakten.

## Historik {#history}

<Shot name="21_history" alt="Fanen Historik" />

Opkaldshistorikken, nyeste først. Øverst:

- rullelisten, som standard **Alle opkald**, indsnævrer listen til én slags opkald;
- **Søg** filtrerer efter det, du skriver.

Hver post har et ikon for slags opkald — et udgående rør, eller et rødt rør med et ur for et ubesvaret opkald —, den anden parts navn (eller nummeret) og nedenunder datoen, hvad der blev af opkaldet, dets varighed, nummeret og kontoen. Nylige opkald vises som *I går, 22:33* eller med en ugedag, ældre med datoen.

| Hvad der blev af opkaldet | Vises som |
| --- | --- |
| I talte sammen | **udgående** eller indgående og varigheden, for eksempel *48 s* |
| Et indgående opkald blev ikke besvaret | **Ubesvaret** |
| Et opkald, du foretog, blev ikke forbundet | **Gik ikke igennem** |

Markér en post for at få fire knapper frem til højre:

| Knap | Gør |
| --- | --- |
| Person med et plus | Lægger nummeret i [Kontakter](#contacts). |
| ▶ | Afspiller optagelsen af opkaldet, hvis det blev optaget. |
| Skraldespand | Sletter posten. |
| Rør | Ringer nummeret op igen. |

### Hvor længe historikken gemmes {#how-long-the-log-is-kept}

En opkaldshistorik er dokumentation, så intet fjernes fra den, medmindre du siger det: som standard gemmes hvert opkald. Opbevaringstiden og knappen **Ryd opkaldshistorikken** findes under [Opkaldsindstillinger](../sip-accounts/calls.md#history).

Ubesvarede og afviste opkald kan også læses via det [lokale REST-API](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
