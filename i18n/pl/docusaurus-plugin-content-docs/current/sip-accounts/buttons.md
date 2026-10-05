---
title: Przyciski
sidebar_position: 4
description: "\"Przyciski BLF: przyciski jednego dotknięcia, które wybierają numer wewnętrzny w centrali IP i pokazują, czy jest wolny, dzwoni, czy jest zajęty.\""
---

Przyciski to klawisze **BLF** (Busy Lamp Field) softphone'u — ta sama funkcja, którą ma telefon biurkowy w centrali IP. Przycisk wybiera numer wewnętrzny jednym naciśnięciem. Przycisk, który obserwuje swoją linię, pokazuje też lampkę: telefon pyta centralę o ten numer wewnętrzny i pokazuje, czy jest wolny, dzwoni, czy jest zajęty, tak jak robi to konsola recepcji albo programowalne klawisze telefonu biurkowego.

BLF wymaga obsługi po stronie centrali: centrala musi przekazywać telefonowi stan numeru wewnętrznego. Większość central IP to robi. Jeśli twoja nie, lampka pozostaje szara, a przycisk nadal wybiera numer.

Przyciski stoją pod plakietkami kont w [oknie głównym](/interface/main-window), a tworzy się je w **Ustawienia → Przyciski**.

<Shot name="08_settings_buttons" alt="Ustawienia → Przyciski: dwa przyciski" />

Każdy wiersz to przycisk: lampka, jego podpis, a po prawej jego numer i konto, do którego należy — na przykład *212 · 201 Biuro*. **▲** i **▼** przesuwają przycisk w górę lub w dół; przyciski w oknie głównym mają tę samą kolejność. **Dodaj** tworzy nowy.

## Lampka {#the-lamp}

Przycisk, który obserwuje swoją linię, pokazuje lampkę:

| Lampka | Linia jest |
| --- | --- |
| Zielona | wolna |
| Bursztynowa | dzwoni |
| Czerwona | w rozmowie |
| Szara | nieznana: centrala tego nie podaje |

## Dodawanie przycisku {#adding-a-button}

<Shot name="08b_button_add" alt="Formularz nowego przycisku" />

Naciśnij **Dodaj**; pod listą otwiera się formularz.

| Pole | Co wpisać |
| --- | --- |
| **Numer** | Numer do wybrania. |
| **Linia** | Konto, z którego wykonywane jest połączenie. Wybierz je najpierw: aby pokazać lampkę, telefon pyta centralę tej linii o ten numer, więc musi wiedzieć, którą. |
| **Podpis** | Tekst na przycisku, na przykład imię i nazwisko osoby. Na przycisku mieści się tylko krótki podpis; dłuższy zostanie obcięty. |
| **Pokazuj, czy ta linia jest zajęta** | Przełącznik. Włączony — przycisk ma lampkę. Wyłączony — tylko wybiera numer. |

**Zapisz** pozostaje szary, dopóki formularz nie jest wypełniony. **Anuluj** odrzuca formularz.

Część programu, która pokazuje przyciski, można wyłączyć w [Modułach](/application/modules).
