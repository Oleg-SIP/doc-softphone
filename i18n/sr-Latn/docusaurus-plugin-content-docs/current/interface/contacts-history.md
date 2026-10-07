---
title: Kontakti i istorija
sidebar_position: 3
description: Imenik i dnevnik poziva, pored telefona.
---

**Kontakti** i **Istorija** otvaraju se kao dve kartice desno od telefona, pa broj možete da potražite dok razgovarate.

## Kontakti {#contacts}

<Shot name="03_contacts" alt="Kartica Kontakti" />

- **Pretraga** filtrira spisak dok kucate.
- **Dodaj** pravi kontakt.
- Svaki kontakt je naveden sa imenom, a ispod njega sa brojem i nalogom preko kog se kontakt zove, na primer *231 · 201 Kancelarija*.

Dolazni poziv sa poznatog broja prikazuje ime kontakta, kao i spiskovi nedavnih poziva i dnevnik poziva — tako radi prepoznavanje pozivaoca.

### Uređivanje kontakta {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Kontakt otvoren za uređivanje" />

Izaberite kontakt i desno u njegovom redu pojaviće se olovka i slušalica. Slušalica zove kontakt; olovka otvara obrazac ispod reda:

| Polje | Šta upisati |
| --- | --- |
| **Naziv** | Kako se kontakt prikazuje. |
| **Broj** | Broj koji se bira. |
| Padajući meni ispod **Broj** | Nalog preko kog se kontakt zove. |

**Sačuvaj** zadržava izmene, **Odustani** ih odbacuje, a **Obriši** uklanja kontakt.

## Istorija {#history}

<Shot name="21_history" alt="Kartica Istorija" />

Dnevnik poziva, od najnovijih. Na vrhu:

- padajući meni, podrazumevano **Svi pozivi**, sužava spisak na jednu vrstu poziva;
- **Pretraga** filtrira prema onome što otkucate.

Svaka stavka ima ikonu vrste poziva — odlaznu slušalicu ili crvenu slušalicu sa satom za propušten poziv —, ime druge strane (ili broj), a ispod toga datum, ishod poziva, trajanje, broj i nalog. Nedavni pozivi prikazuju se kao *Juče, 22:33* ili sa danom u nedelji, stariji sa datumom.

| Ishod poziva | Prikazano kao |
| --- | --- |
| Razgovarali ste | **odlazni** ili dolazni i trajanje, na primer *48 s* |
| Na dolazni poziv niko se nije javio | **Propušten** |
| Poziv koji ste uputili nije uspostavljen | **Nije prošao** |

Izaberite stavku i desno će se pojaviti četiri dugmeta:

| Dugme | Šta radi |
| --- | --- |
| Osoba sa plusom | Dodaje broj u [Kontakte](#contacts). |
| ▶ | Pušta snimak poziva, ako je snimljen. |
| Kanta | Briše stavku. |
| Slušalica | Uzvraća poziv na broj. |

### Koliko se dugo dnevnik čuva {#how-long-the-log-is-kept}

Dnevnik poziva je dokaz, pa se iz njega ništa ne uklanja dok vi to ne kažete: podrazumevano se čuva svaki poziv. Razdoblje čuvanja i dugme **Isprazni istoriju poziva** nalaze se u [Podešavanjima poziva](../sip-accounts/calls.md#history).

Propušteni i odbijeni pozivi mogu da se pročitaju i preko [lokalnog REST API-ja](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
