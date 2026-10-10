---
title: Kontakti i povijest
sidebar_position: 4
description: Imenik i zapisnik poziva, pokraj telefona.
---

**Kontakti** i **Povijest** otvaraju se kao dvije kartice desno od telefona, pa broj možete potražiti dok razgovarate.

## Kontakti {#contacts}

<Shot name="03_contacts" alt="Kartica Kontakti" />

- **Traži** filtrira popis dok tipkate.
- **Dodaj** stvara kontakt.
- Svaki kontakt naveden je s imenom, a ispod njega s brojem i računom preko kojeg se kontakt zove, primjerice *231 · 201 Ured*.

Dolazni poziv s poznatog broja prikazuje ime kontakta, kao i popisi nedavnih poziva i zapisnik poziva — tako radi prepoznavanje pozivatelja.

### Uređivanje kontakta {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Kontakt otvoren za uređivanje" />

Odaberite kontakt i desno u njegovu retku pojavit će se olovka i slušalica. Slušalica zove kontakt; olovka otvara obrazac ispod retka:

| Polje | Što upisati |
| --- | --- |
| **Naziv** | Kako se kontakt prikazuje. |
| **Broj** | Broj koji se bira. |
| Padajući izbornik ispod **Broj** | Račun preko kojeg se kontakt zove. |

**Spremi** zadržava promjene, **Odustani** ih odbacuje, a **Izbriši** uklanja kontakt.

## Povijest {#history}

<Shot name="21_history" alt="Kartica Povijest" />

Zapisnik poziva, od najnovijih. Na vrhu:

- padajući izbornik, prema zadanim postavkama **Svi pozivi**, sužava popis na jednu vrstu poziva;
- **Traži** filtrira prema onome što upišete.

Svaka stavka ima ikonu vrste poziva — odlaznu slušalicu ili crvenu slušalicu sa satom za propušteni poziv —, ime druge strane (ili broj), a ispod toga datum, ishod poziva, trajanje, broj i račun. Nedavni pozivi prikazuju se kao *Jučer, 22:33* ili s danom u tjednu, stariji s datumom.

| Ishod poziva | Prikazano kao |
| --- | --- |
| Razgovarali ste | **odlazni** ili dolazni i trajanje, primjerice *48 s* |
| Dolazni poziv nije prihvaćen | **Propušten** |
| Poziv koji ste uputili nije uspostavljen | **Nije prošlo** |

Odaberite stavku i desno će se pojaviti četiri gumba:

| Gumb | Što radi |
| --- | --- |
| Osoba s plusom | Dodaje broj u [Kontakte](#contacts). |
| ▶ | Reproducira snimku poziva, ako je snimljen. |
| Kanta | Briše stavku. |
| Slušalica | Uzvraća poziv na broj. |

### Koliko se dugo zapisnik čuva {#how-long-the-log-is-kept}

Zapisnik poziva je dokaz, pa se iz njega ništa ne uklanja dok vi to ne kažete: prema zadanim postavkama čuva se svaki poziv. Razdoblje čuvanja i gumb **Isprazni povijest poziva** nalaze se u [Postavkama poziva](../sip-accounts/calls.md#history).

Propušteni i odbijeni pozivi mogu se pročitati i preko [lokalnog REST API-ja](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
