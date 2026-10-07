---
title: Kontakty i historia
sidebar_position: 3
description: Książka adresowa i historia połączeń obok telefonu.
---

**Kontakty** i **Historia** otwierają się jako dwie zakładki po prawej stronie telefonu, więc możesz wyszukać numer w trakcie rozmowy.

## Kontakty {#contacts}

<Shot name="03_contacts" alt="Zakładka Kontakty" />

- **Szukaj** filtruje listę w miarę pisania.
- **Dodaj** tworzy kontakt.
- Każdy kontakt jest wymieniony z nazwą, a pod nią z numerem i kontem, przez które się do niego dzwoni, na przykład *231 · 201 Biuro*.

Połączenie przychodzące ze znanego numeru pokazuje nazwę kontaktu, podobnie jak listy ostatnich połączeń i historii — tak działa identyfikacja dzwoniącego.

### Edytowanie kontaktu {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Kontakt otwarty do edycji" />

Zaznacz kontakt, aby po prawej stronie jego wiersza pojawiły się ołówek i słuchawka. Słuchawka dzwoni do kontaktu; ołówek otwiera formularz pod wierszem:

| Pole | Co wpisać |
| --- | --- |
| **Nazwa** | Jak kontakt jest pokazywany. |
| **Numer** | Numer do wybrania. |
| Lista rozwijana pod **Numer** | Konto, przez które dzwoni się do kontaktu. |

**Zapisz** zachowuje zmiany, **Anuluj** je odrzuca, a **Usuń** usuwa kontakt.

## Historia {#history}

<Shot name="21_history" alt="Zakładka Historia" />

Historia połączeń, od najnowszych. U góry:

- lista rozwijana, domyślnie **Wszystkie połączenia**, zawęża listę do jednego rodzaju połączeń;
- **Szukaj** filtruje według tego, co wpiszesz.

Każda pozycja ma ikonę rodzaju połączenia — słuchawkę wychodzącą albo czerwoną słuchawkę z zegarem dla połączenia nieodebranego —, nazwę drugiej strony (lub numer), a pod nią datę, wynik połączenia, czas trwania, numer i konto. Niedawne połączenia pokazują się jako *Wczoraj, 22:33* lub z dniem tygodnia, starsze z datą.

| Wynik połączenia | Pokazywany jako |
| --- | --- |
| Rozmawialiście | **wychodzące** lub przychodzące oraz czas trwania, na przykład *48 s* |
| Połączenie przychodzące nie zostało odebrane | **Nieodebrane** |
| Wykonane przez ciebie połączenie nie zostało zestawione | **Nie doszło do skutku** |

Zaznacz pozycję, aby po jej prawej stronie pojawiły się cztery przyciski:

| Przycisk | Co robi |
| --- | --- |
| Postać z plusem | Dodaje numer do [Kontaktów](#contacts). |
| ▶ | Odtwarza nagranie połączenia, jeśli zostało nagrane. |
| Kosz | Usuwa pozycję. |
| Słuchawka | Oddzwania pod numer. |

### Jak długo przechowywana jest historia {#how-long-the-log-is-kept}

Historia połączeń jest dowodem, więc nic z niej nie znika, dopóki tego nie powiesz: domyślnie przechowywane jest każde połączenie. Okres przechowywania i przycisk **Wyczyść historię połączeń** znajdują się w [Ustawieniach połączeń](../sip-accounts/calls.md#history).

Połączenia nieodebrane i odrzucone można też odczytać przez [lokalne REST API](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
