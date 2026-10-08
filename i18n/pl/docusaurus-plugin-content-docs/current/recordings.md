---
title: Nagrania
sidebar_position: 4
description: Które połączenia są nagrywane, co słyszy druga strona, jak zapisywane są konferencje i jak długo przechowywane są pliki.
---

**Ustawienia → Nagrywanie** decyduje, które połączenia stają się nagraniami i jak długo pliki są przechowywane. Nagrane połączenie pojawia się w [oknie nagrań](/interface/recordings).

<Shot name="09_settings_recording" alt="Ustawienia → Nagrywanie" />

## Nagrywanie {#recording}

Lista rozwijana wybiera, które połączenia są nagrywane:

| Wybór | Nagrywa |
| --- | --- |
| **Ręcznie** | Tylko gdy naciśniesz nagrywanie na karcie połączenia. Domyślnie. |
| **Pytaj przy każdym połączeniu** | Telefon przy każdym połączeniu pyta, czy je nagrać. |
| **Każde połączenie** | Każde odebrane połączenie, samoczynnie. Wybrane na obrazku. |
| **Wybrane linie** | Połączenia na kontach zaznaczonych na liście, która się pojawi. |

Nagrywanie zaczyna się, gdy połączenie zostanie odebrane, i nigdy wcześniej, więc dzwonienie i wybierane numery nie trafiają do pliku. Połączenie to jeden plik stereo: ty na jednym kanale, wszyscy inni na drugim.

## Zgoda {#consent}

Lista rozwijana wybiera, jak druga strona jest informowana o nagrywaniu:

| Wybór | Co słyszy druga strona |
| --- | --- |
| **Zapowiedź** | Krótki komunikat, gdy zaczyna się nagrywanie. Domyślnie. **Wybierz…** wybiera własny plik dźwiękowy; *gdy nic nie jest wybrane, telefon odtwarza krótki sygnał*. |
| **Dźwięk co kilka sekund** | Sygnał w odstępie ustawianym suwakiem. |
| **Zupełnie nic** | Nic. Wybrane na obrazku. |

**Zachowaj powiadomienie w nagraniu** — zapowiedź i dźwięk są odtwarzane uczestnikom rozmowy; włącz to, a znajdą się też w pliku.

:::caution
W wielu miejscach — w większości Europy i w kilku stanach USA — nagrywanie rozmowy bez poinformowania drugiej strony jest niezgodne z prawem. To twoja decyzja, a program mówi o tym pod listą rozwijaną.
:::

## Konferencje {#conferences}

**Plik na osobę**, domyślnie włączone. W konferencji drugi kanał jest mieszanką wszystkich, więc dodatkowy plik na osobę pozwala w transkrypcji wskazać, kto co powiedział.

## Przechowywanie {#retention}

<Shot name="09b_settings_recording_scrolled" alt="Ustawienia → Nagrywanie: przechowywanie" />

| Ustawienie | Domyślnie | Co ogranicza |
| --- | --- | --- |
| **Okres przechowywania** | Zawsze | Jak długo przechowywane jest nagranie. |
| **Granica magazynu** | Bez granicy | Ile miejsca mogą zajmować wszystkie nagrania razem. |
| **Pliki na osobę** | Zawsze | Jak długo przechowywane są dodatkowe pliki konferencji. |
| **Próg wolnego miejsca** | 500 MB | Dolna granica wolnego miejsca na dysku. Nagrania, których nie przypiąłeś, mogą zostać usunięte, aby utrzymać się powyżej niej. |

Przypiętego nagrania żadne z tych ustawień nigdy nie usuwa, a mimo to wlicza się ono do granicy. Godzina rozmowy zajmuje około 30 MB.

Część programu, która nagrywa połączenia i informuje o tym drugą stronę, można wyłączyć w [Modułach](/application/modules).

Aby nagrać spotkanie odbywające się w innej aplikacji, zobacz [Przechwytywanie](/capture/).
