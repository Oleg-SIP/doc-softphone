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
| **Sprzedaż** | `sales` | Sprzedawanie, wycenianie, negocjowanie albo dopilnowanie zakupu — w tym pytanie klienta o cenę. |
| **Wsparcie** | `support` | Pomoc komuś z produktem lub usługą, którą już ma: usterka, pytanie o obsługę, skarga na działanie. |
| **Prywatna** | `personal` | Wcale nie służbowa — prywatna rozmowa, która akurat odbyła się na tej linii. |
| **Inne** | `other` | Służbowa, ale ani sprzedaż, ani wsparcie: dostawca, współpracownik, dostawa, pomyłka. Wybierz to zamiast zgadywać między pozostałymi. |

Naciśnij **Dodaj**, aby dodać własną kategorię.

## Etykiety {#tags}

Oznaczenia, które *wszystkie mogą pasować do tej samej rozmowy*. Naciśnij **Dodaj**, aby dodać etykietę. Lista zaczyna się od pozycji takich jak:

| Nazwa | Kod | Do czego |
| --- | --- | --- |
| **Obiecane oddzwonienie** | `callback` | Ktoś w tej rozmowie obiecał oddzwonić albo poprosił, żeby do niego oddzwonić. |
| **Skarga** | `complaint` | Druga strona wyraziła niezadowolenie, niezależnie od tego, czy sprawę załatwiono. |
| **Przekazana wyżej** | `escalation` | Rozmowę przekazano komuś innemu albo druga strona o to poprosiła. |
| **Klient VIP** | `vip` | Drugą stronę potraktowano jako ważnego klienta albo sama tak o sobie powiedziała. |

## Sygnały ostrzegawcze {#red-flags}

Rzeczy wymagające uwagi, znalezione w rozmowie wraz z dowodem i momentem — na przykład *Rozgniewany klient* albo *Ryzyko odejścia*. Sygnały ostrzegawcze są rysowane na czerwono w [oknie nagrań](../interface/recordings.md), a każdy ma wagę: niską, średnią lub wysoką.

| Nazwa | Kod | `severity` | Do czego |
| --- | --- | --- | --- |
| **Rozgniewany klient** | `angry-customer` | `high` | Słychać było, że druga strona jest zła, obraża albo grozi odejściem. |
| **Ryzyko odejścia** | `churn-risk` | `high` | Padło rezygnowanie, nieprzedłużanie albo przejście do kogoś innego, choćby spokojnie. |
| **Złożona obietnica** | `promise-made` | `medium` | Nasza strona zobowiązała się do czegoś konkretnego — terminu, ceny, naprawy, zwrotu. |
| **Dane wrażliwe** | `sensitive-data` | `high` | Odczytano numer karty, hasło, numer dokumentu albo cokolwiek innego, czego w nagraniu być nie powinno. |
| **Konkurent** | `competitor` | `low` | Druga strona wymieniła kogoś innego oferującego to samo albo nas z nim porównała. |

## Wskazówki {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Ustawienia → Słowniki: kształty odpowiedzi i instrukcje językowe" />

*To, co dodaje się do każdego polecenia o kształcie odpowiedzi i języku, w którym ją napisać.* Są przechowywane tutaj, aby każde polecenie mogło używać tego samego sformułowania, a ty możesz je zmieniać jak każdą inną pozycję — albo napisać własne, na przykład *odpowiadaj krótko* lub *nigdy nie podawaj ceny*, i zaznaczyć je w **Wyślij także** przy dowolnym poleceniu.

| Nazwa | Kod | Co mówi modelowi |
| --- | --- | --- |
| **Proza** | `shape-plain` | Odpowiadaj zwykłą prozą, bez JSON, list i nagłówków. |
| **Pozycje** | `shape-list` | Odpowiadaj listą rzeczy do zrobienia, każda z tym, kto i kiedy. |
| **Etykiety** | `shape-labels` | Odpowiedz w JSON listą kodów i pewnością co do każdego, używając tylko kodów z otrzymanej listy. |
| **Ocena** | `shape-score` | Odpowiedz oceną, jej uzasadnieniem i słowami, na których się opiera. |
| **Kryteria** | `shape-rubric` | Odpowiedz oceną ogólną i oceną każdego kryterium. |
| **Sygnały** | `shape-flags` | Odpowiedz kodami z listy, każdym z wagą. |
| **Odpowiedź** | `shape-qa` | Odpowiedz odpowiedzią albo powiedz wprost, że rozmowa tego nie mówi, oraz podaj słowa, na których opiera się odpowiedź. |
| **JSON** | `shape-json` | Odpowiedz tylko JSON-em, w kształcie, o który poproszono wyżej. |
| **Jak mówiono** | `language-as-spoken` | Pisz w języku, w którym toczyła się rozmowa. |
| **Jak mówiono, z nazwy** | `language-as-spoken-named` | To samo, z podaniem nazwy języka. |
| **Wskazany język** | `language-named` | Pisz we wskazanym przez ciebie języku. |

**Dodaj** na początku listy dodaje pozycję.

## Domyślne {#defaults}

**Przywróć domyślne** przywraca każdy słownik do postaci, w jakiej przyszedł z programem, w bieżącym języku interfejsu. To, pod czym twoje rozmowy są już przypisane, pozostaje nietknięte.

## Formaty odpowiedzi {#response-formats}

Bloki odtwarzają dołączone instrukcje. Opisują formaty odpowiedzi; alternatywy są zapisem możliwości, a nie wykonywalnymi przykładami JSON.

### Proza (`shape-plain`) {#shape-plain}

```text
Odpowiedz zwykłą prozą. Nie używaj JSON-a, list ani nagłówków.
```

### Pozycje (`shape-list`) {#shape-list}

```text
Odpowiedz wyłącznie JSON-em, dokładnie takiej postaci:
{"items": [{"text": "co ma zostać zrobione", "owner": "kto, albo pusto", "due": "kiedy, albo pusto"}]}
Gdy nie ma czego wymienić, użyj pustej tablicy. Nie pisz nic poza JSON-em.
```

### Etykiety (`shape-labels`) {#shape-labels}

```text
Odpowiedz wyłącznie JSON-em, dokładnie takiej postaci:
{"labels": [{"code": "kod z podanej listy", "confidence": 0.0}]}
Używaj tylko kodów z listy. Gdy żaden nie pasuje, użyj pustej tablicy. Nie
wymyślaj kodu i nie pisz nic poza JSON-em.
```

### Ocena (`shape-score`) {#shape-score}

```text
Odpowiedz wyłącznie JSON-em, dokładnie takiej postaci:
{"score": 3, "rationale": "dlaczego ta liczba, a nie o jedną wyższa",
 "evidence": [{"at_ms": 0, "quote": "słowa, na których to oparto"}]}
Ocena jest liczbą całkowitą od 1 do 5. Nie pisz nic poza JSON-em.
```

### Kryteria (`shape-rubric`) {#shape-rubric}

```text
Odpowiedz wyłącznie JSON-em, dokładnie takiej postaci:
{"overall": 3, "rationale": "dlaczego ta liczba, a nie o jedną wyższa",
 "criteria": [{"name": "kryterium tak, jak je podano",
               "verdict": "pass" albo "weak" albo "fail" albo "n/a",
               "note": "jedno zdanie"}]}
Oceń każde podane kryterium i żadne inne. Ocena łączna jest liczbą całkowitą
od 1 do 5. Nie pisz nic poza JSON-em.
```

### Sygnały (`shape-flags`) {#shape-flags}

```text
Odpowiedz wyłącznie JSON-em, dokładnie takiej postaci:
{"flags": [{"code": "kod z podanej listy",
            "severity": "low" albo "medium" albo "high",
            "evidence": "słowa, na których to oparto",
            "at_ms": 0}]}
Używaj tylko kodów z listy i podnoś każdy najwyżej raz. Gdy nic nie pasuje,
użyj pustej tablicy. Nie pisz nic poza JSON-em.
```

### Odpowiedź (`shape-qa`) {#shape-qa}

```text
Odpowiedz wyłącznie JSON-em, dokładnie takiej postaci:
{"answer": "twoja odpowiedź albo wprost, że rozmowa tego nie mówi",
 "citations": [{"at_ms": 0, "quote": "słowa, na których opiera się odpowiedź"}]}
Nie odpowiadaj z niczego poza rozmową. Nie pisz nic poza JSON-em.
```

### JSON (`shape-json`) {#shape-json}

```text
Odpowiedz wyłącznie JSON-em, w postaci opisanej wyżej. Nie pisz nic poza JSON-em.
```

### Jak mówiono (`language-as-spoken`) {#language-as-spoken}

```text
Napisz odpowiedź w tym samym języku, w którym była rozmowa.
```

### Jak mówiono, z nazwy (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Napisz odpowiedź w tym samym języku, w którym była rozmowa, czyli po: {language}.
```

### Wskazany język (`language-named`) {#language-named}

```text
Napisz odpowiedź w tym języku: {language}.
```
