---
title: Słowniki
sidebar_position: 4
description: Twoje własne kategorie, etykiety i sygnały ostrzegawcze — słowa, pod którymi przypisywane są twoje rozmowy.
---

**Ustawienia → Słowniki** zawiera słowa, pod którymi rozmowę można przypisać, oznaczyć lub zgłosić. Te listy to to, co pokazuje się modelom i spośród czego muszą wybierać, więc odpowiedź zawsze jest czymś, czego możesz później wyszukać.

<Shot name="13_settings_dictionaries" alt="Ustawienia → Słowniki" />

**Pokaż usunięte** pokazuje pozycje, które usunąłeś.

Każda pozycja to nazwa, krótki kod drobnym pismem i opis, który mówi modelowi, kiedy ją wybrać. Kod jest tym, co się przechowuje i co zwraca [REST API](../integration/rest-api.md#taxonomy-and-settings), więc nie zmienia się, gdy zmieniasz nazwę pozycji.

## Kategorie {#categories}

O czym była rozmowa; **na rozmowę wybiera się jedną**. Program zaczyna od czterech:

| Nazwa | Kod | Do czego |
| --- | --- | --- |
| **Sprzedaż** | `sales` | Sprzedaż, wycena, negocjacje lub kontynuacja zakupu — także klient, który pyta, ile coś kosztuje. |
| **Wsparcie** | `support` | Pomoc komuś z produktem lub usługą, które już ma: usterka, pytanie o użytkowanie, skarga na działanie. |
| **Prywatna** | `personal` | Zupełnie nie służbowa — prywatna rozmowa, która akurat odbyła się na tej linii. |
| **Inne** | `other` | Służbowa, ale ani sprzedaż, ani wsparcie: dostawca, współpracownik, dostawa, pomyłka. Wybierz to raczej niż zgadywać między pozostałymi. |

Naciśnij **Dodaj**, aby dodać własną kategorię.

## Etykiety {#tags}

Oznaczenia, które *wszystkie mogą pasować do tej samej rozmowy*. Naciśnij **Dodaj**, aby dodać etykietę. Lista zaczyna się od pozycji takich jak:

| Nazwa | Kod | Do czego |
| --- | --- | --- |
| **Obiecane oddzwonienie** | `callback` | Ktoś w tej rozmowie obiecał oddzwonić albo poprosił o oddzwonienie. |
| **Skarga** | `complaint` | Druga strona wyraziła niezadowolenie, niezależnie od tego, czy sprawę rozwiązano. |
| **Przekazana wyżej** | `escalation` | Rozmowę przekazano komuś innemu albo druga strona o to poprosiła. |
| **Klient VIP** | `vip` | Drugą stronę potraktowano jako ważnego klienta albo sama tak się przedstawiła. |

## Sygnały ostrzegawcze {#red-flags}

Rzeczy wymagające uwagi, znalezione w rozmowie wraz z dowodem i momentem — na przykład *Rozgniewany klient* albo *Ryzyko odejścia*. Sygnały ostrzegawcze są rysowane na czerwono w [oknie nagrań](../recordings/recordings-window.md), a każdy ma wagę: niską, średnią lub wysoką.

## Kształty odpowiedzi i język {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Ustawienia → Słowniki: kształty odpowiedzi i instrukcje językowe" />

Niżej w zakładce są instrukcje, z których składane są polecenia. Są przechowywane tutaj, aby każde polecenie mogło używać tego samego sformułowania, a ty możesz je zmieniać jak każdą inną pozycję.

| Nazwa | Kod | Co mówi modelowi |
| --- | --- | --- |
| **Etykiety** | `shape-labels` | Odpowiedz w JSON listą kodów i pewnością co do każdego, używając tylko kodów z otrzymanej listy. |
| **Ocena** | `shape-score` | Odpowiedz oceną, jej uzasadnieniem i słowami, na których się opiera. |
| **Kryteria** | `shape-rubric` | Odpowiedz oceną ogólną i oceną każdego kryterium. |
| **Sygnały** | `shape-flags` | Odpowiedz kodami z listy, każdym z wagą. |
| **Odpowiedź** | `shape-qa` | Odpowiedz odpowiedzią albo powiedz wprost, że rozmowa tego nie mówi, oraz podaj słowa, na których opiera się odpowiedź. |
| **JSON** | `shape-json` | Odpowiedz tylko JSON-em, w kształcie, o który poproszono wyżej. |
| **Jak mówiono** | `language-as-spoken` | Pisz w języku, w którym toczyła się rozmowa. |
| **Jak mówiono, z nazwy** | `language-as-spoken-named` | To samo, z podaniem nazwy języka. |
| **Wskazany język** | `language-named` | Pisz we wskazanym przez ciebie języku. |

**Dodaj** na końcu listy dodaje pozycję.

## Domyślne {#defaults}

**Przywróć domyślne** przywraca każdy słownik do postaci, w jakiej przyszedł z programem, w bieżącym języku interfejsu. To, pod czym twoje rozmowy są już przypisane, pozostaje nietknięte.
