---
title: Kontakti un vēsture
sidebar_position: 2
description: Adrešu grāmata un zvanu vēsture blakus tālrunim.
---

**Kontakti** un **Vēsture** atveras kā divas cilnes pa labi no tālruņa, lai jūs varētu sameklēt numuru sarunas laikā.

## Kontakti {#contacts}

<Shot name="03_contacts" alt="Cilne Kontakti" />

- **Meklēt** filtrē sarakstu, kamēr rakstāt.
- **Pievienot** izveido kontaktu.
- Katrs kontakts ir sarakstā ar vārdu un zem tā numuru un kontu, caur kuru kontaktam zvana, piemēram, *231 · 201 Birojs*.

Ienākošs zvans no zināma numura rāda kontakta vārdu, tāpat kā pēdējo zvanu saraksts un zvanu vēsture — tā darbojas zvanītāja identificēšana.

### Kontakta rediģēšana {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Rediģēšanai atvērts kontakts" />

Atlasiet kontaktu, lai tā rindas labajā pusē parādītos zīmulis un klausule. Klausule zvana kontaktam; zīmulis atver veidlapu zem rindas:

| Lauks | Ko ievadīt |
| --- | --- |
| **Nosaukums** | Kā kontakts tiek rādīts. |
| **Numurs** | Numurs, uz kuru zvanīt. |
| Nolaižamais saraksts zem lauka **Numurs** | Konts, caur kuru kontaktam zvana. |

**Saglabāt** patur izmaiņas, **Atcelt** tās atmet, un **Dzēst** noņem kontaktu.

## Vēsture {#history}

<Shot name="21_history" alt="Cilne Vēsture" />

Zvanu vēsture, jaunākie pirmie. Augšā:

- nolaižamais saraksts, pēc noklusējuma **Visi zvani**, sašaurina sarakstu līdz vienam zvanu veidam;
- **Meklēt** filtrē pēc tā, ko ierakstāt.

Katram ierakstam ir ikona zvana veidam — izejoša klausule vai sarkana klausule ar pulksteni neatbildētam zvanam —, otras puses vārds (vai numurs) un zem tā datums, zvana iznākums, ilgums, numurs un konts. Nesenie zvani tiek rādīti kā *Vakar, 22:33* vai ar nedēļas dienu, vecāki — ar datumu.

| Zvana iznākums | Tiek rādīts kā |
| --- | --- |
| Jūs runājāt | **izejošs** vai ienākošs un ilgums, piemēram, *48 s* |
| Uz ienākošu zvanu neatbildēja | **Neatbildēts** |
| Jūsu veiktais zvans netika savienots | **Neizgāja cauri** |

Atlasiet ierakstu, lai tā labajā pusē parādītos četras pogas:

| Poga | Ko dara |
| --- | --- |
| Cilvēks ar plusu | Pievieno numuru [Kontaktiem](#contacts). |
| ▶ | Atskaņo zvana ierakstu, ja tas tika ierakstīts. |
| Miskaste | Dzēš ierakstu. |
| Klausule | Atzvana uz numuru. |

### Cik ilgi glabā vēsturi {#how-long-the-log-is-kept}

Zvanu vēsture ir pierādījums, tāpēc no tās nekas netiek noņemts, ja vien jūs to nepasakāt: pēc noklusējuma tiek glabāts katrs zvans. Glabāšanas periods un poga **Iztukšot zvanu vēsturi** atrodas sadaļā [Zvanu iestatījumi](../sip-accounts/calls.md#history).

Neatbildētos un noraidītos zvanus var nolasīt arī caur [vietējo REST API](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
