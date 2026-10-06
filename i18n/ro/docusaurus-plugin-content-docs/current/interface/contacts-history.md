---
title: Contacte și istoric
sidebar_position: 2
description: Agenda și istoricul apelurilor, alături de telefon.
---

**Contacte** și **Istoric** se deschid ca două file în dreapta telefonului, astfel încât puteți căuta un număr în timp ce vorbiți.

## Contacte {#contacts}

<Shot name="03_contacts" alt="Fila Contacte" />

- **Caută** filtrează lista pe măsură ce scrieți.
- **Adaugă** creează un contact.
- Fiecare contact este afișat cu un nume, iar sub el cu numărul și contul prin care este sunat, de exemplu *231 · 201 Birou*.

Un apel primit de la un număr cunoscut afișează numele contactului, la fel ca listele apelurilor recente și istoricul apelurilor — așa funcționează identificarea apelantului.

### Editarea unui contact {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Un contact deschis pentru editare" />

Selectați un contact pentru a afișa un creion și un receptor în dreapta rândului său. Receptorul sună contactul; creionul deschide formularul de sub rând:

| Câmp | Ce introduceți |
| --- | --- |
| **Nume** | Cum este afișat contactul. |
| **Număr** | Numărul care se formează. |
| Lista derulantă de sub **Număr** | Contul prin care este sunat contactul. |

**Salvează** păstrează modificările, **Anulează** renunță la ele, iar **Șterge** elimină contactul.

## Istoric {#history}

<Shot name="21_history" alt="Fila Istoric" />

Istoricul apelurilor, cele mai noi primele. În partea de sus:

- lista derulantă, implicit **Toate apelurile**, restrânge lista la un singur fel de apel;
- **Caută** filtrează după ce scrieți.

Fiecare intrare are o pictogramă pentru felul apelului — un receptor de apel efectuat sau un receptor roșu cu ceas pentru un apel pierdut —, numele celeilalte părți (sau numărul), iar dedesubt data, ce s-a întâmplat cu apelul, durata lui, numărul și contul. Apelurile recente apar ca *Ieri, 22:33* sau cu ziua săptămânii, cele mai vechi cu data.

| Ce s-a întâmplat cu apelul | Afișat ca |
| --- | --- |
| Ați vorbit | **efectuat** sau primit, și durata, de exemplu *48 s* |
| Un apel primit nu a fost preluat | **Pierdut** |
| Un apel efectuat de dumneavoastră nu s-a conectat | **Nu a reușit** |

Selectați o intrare pentru a afișa patru butoane în dreapta ei:

| Buton | Ce face |
| --- | --- |
| Persoană cu plus | Adaugă numărul în [Contacte](#contacts). |
| ▶ | Redă înregistrarea apelului, dacă a fost înregistrat. |
| Coș | Șterge intrarea. |
| Receptor | Sună înapoi la număr. |

### Cât timp se păstrează istoricul {#how-long-the-log-is-kept}

Istoricul apelurilor este o dovadă, așa că nu se șterge nimic din el decât dacă spuneți dumneavoastră: implicit, se păstrează fiecare apel. Perioada de păstrare și butonul **Golește istoricul apelurilor** se află în [Setările apelurilor](../sip-accounts/calls.md#history).

Apelurile pierdute și cele respinse pot fi citite și prin [API-ul REST local](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
