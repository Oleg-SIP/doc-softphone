---
title: Personal Prompt Studio
sidebar_position: 3
description: Polecenia, które opracowują twoje rozmowy, reguły, które je uruchamiają, i jak dopasować je do siebie.
---

**Personal Prompt Studio** to część AI Softphone, która opracowuje twoje rozmowy po twojemu. Opracowanie tworzą polecenia: program ma ich jedenaście, gotowych do użycia, gdy tylko podłączysz transkrypcję i model językowy, a ty możesz je zmieniać zwykłym językiem, powielać i dodawać własne. Są wymienione w sekcji **Polecenia** w [Ustawienia → Przetwarzanie](processing.md#prompts).

Twój LLM, twój klucz, twoja kontrola: podłącz wybrany model z własnym kluczem, przez obsługiwaną usługę albo zgodne API — albo model wdrożony w twojej organizacji. Gdy także [transkrypcja](transcription.md#your-own-models) działa na twoim sprzęcie, zarówno dźwięk, jak i transkrypcje zostają w twoim środowisku.

<Shot name="12b_settings_processing_prompts" alt="Lista poleceń w Ustawienia → Przetwarzanie" />

## Polecenia dostarczone z programem {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 zawiera jedenaście promptów do zakończonych rozmów i czterech asystentów na żywo. Poniżej znajdują się dołączone teksty w tym języku; wersje językowe mogą się różnić.

| Polecenie | `code` | Forma | Co pisze |
| --- | --- | --- | --- |
| **Podsumowanie** | `summary` | Proza | Najważniejsze punkty, decyzje i dalsze kroki w jednym krótkim akapicie. |
| **Podsumowanie w jednym zdaniu** | `super-summary` | Proza | Krótki tytuł, by rozpoznać rozmowę na liście. |
| **Zadania** | `action-items` | Pozycje | Kto zobowiązał się co zrobić i kiedy, z wypowiedzianymi słowami. |
| **Tematy** | `topics` | Pozycje | Poruszone tematy w kilku słowach. |
| **Nazwy i liczby** | `entities` | JSON | Osoby, firmy, daty, kwoty i odniesienia. |
| **Kategoria** | `categorise` | Etykiety | Przypisuje rozmowę do jednej z twoich [kategorii](dictionaries.md). |
| **Etykiety** | `tags` | Etykiety | Nakłada na nią twoje [etykiety](dictionaries.md), by można ją było później znaleźć. |
| **Sygnały ostrzegawcze** | `red-flags` | Sygnały | Problemy, z dowodem i momentem w rozmowie. |
| **Pytanie o tę rozmowę** | `qa` | Odpowiedź | Odpowiada na pytanie, które zadajesz o jedną rozmowę, na podstawie jej transkrypcji. |
| **Jakość sprzedaży** | `sales-quality` | Kryteria | Ocenia rozmowę według kryteriów sprzedaży, które możesz edytować. |
| **Jakość wsparcia** | `support-quality` | Kryteria | Ocenia, jak dobrze problem został zrozumiany i rozwiązany. |

Formy to stałe kształty odpowiedzi i właśnie dzięki temu program może ją przechowywać i później w niej wyszukiwać: **Etykiety** to kody z jednej z twoich list, **Sygnały** to kody z wagą, **Kryteria** to ocena z uzasadnieniem i oceną każdego kryterium, **Odpowiedź** to odpowiedź ze słowami, na których się opiera. Instrukcje, które podają modelowi kształt, są przechowywane w [Słownikach](dictionaries.md#instructions).

Pomocnicy [suflera](../interface/prompter.md) to także polecenia, uruchamiane na każdej wypowiedzi w trakcie połączenia, a nie na zakończonej rozmowie. Są przechowywani na osobnej liście, w sekcji [Pomocnicy](prompter.md#assistants) w **Ustawienia → Sufler**.

Połączenia wykonane w AI Softphone, spotkania [przechwycone](/capture/) z komputera i zaimportowane nagrania przechodzą przez te same polecenia, gdy tylko mają transkrypcję.

Zadania zapisują to, co uzgodniono — nie wysyłają wiadomości, nie umawiają wizyt ani nie tworzą zgłoszeń za ciebie.

## Dopasuj do siebie {#making-it-yours}

- Zmieniaj zwykłym językiem to, o co prosi polecenie: czego szuka, format odpowiedzi i język, w którym odpowiada.
- Powiel polecenie, aby wypróbować wariant.
- Wybierz model dla każdego polecenia — na twoim komputerze lub w chmurze.
- Ustal kolejność, w jakiej działają polecenia, włączaj je i wyłączaj, a także uzależniaj od warunków — służą do tego [reguły](processing.md#rules): na przykład ocena sprzedaży działa tylko dla połączeń przypisanych do kategorii **Sprzedaż**.
- Trzymaj własne kategorie, etykiety i sygnały ostrzegawcze w [Słownikach](dictionaries.md).
- Ogranicz koszty [miesięcznymi granicami](processing.md#spending).

Oryginalne polecenia i reguły można przywrócić przyciskiem **Przywróć domyślne** w sekcji **Domyślne** w [Ustawienia → Przetwarzanie](processing.md#defaults).

## Rola modelu {#role-and-task}

`system` określa zachowanie modelu, a `body` opisuje zadanie. Postać i język odpowiedzi są przekazywane osobno przez instrukcje słownika.

Pusta lista zadań lub ostrzeżeń może być prawidłowym wynikiem. Nie wolno wymyślać brakujących osób odpowiedzialnych ani terminów. Odpowiedzi na pytania muszą opierać się wyłącznie na transkrypcji.

[Formaty odpowiedzi](dictionaries.md#response-formats)

## Symbole zastępcze {#placeholders}

Element promptu zastępowany danymi rozmowy.

| Symbol zastępczy | Znaczenie |
| --- | --- |
| `{{transcript}}` | Transkrypcja, jedna wypowiedź w wierszu, czas w milisekundach |
| `{{duration}}` | Czas trwania rozmowy |
| `{{direction}}` | Połączenie przychodzące lub wychodzące |
| `{{party}}` | Nazwa kontaktu lub numer |
| `{{language}}` | Język odpowiedzi |
| `{{question}}` | Pytanie użytkownika |
| `{{categories}}` | Słownik kategorii |
| `{{tags}}` | Słownik etykiet |
| `{{red_flags}}` | Słownik sygnałów ostrzegawczych |
| `{{artifact:summary}}` | Wcześniej utworzone podsumowanie |
| `{{conversation}}` | Kontekst zebrany przez asystenta na żywo |
| `{{reply}}` | Ostatnia wypowiedź rozmówcy; tylko dla asystenta na żywo |

Uruchom `summary` przed `super-summary`, który korzysta z `{{artifact:summary}}`. Uruchom `categorise` przed oceną jakości: `sales-quality` wymaga kategorii `sales`, a `support-quality` kategorii `support`.

[Dołączeni asystenci](prompter.md#assistant-templates)

## Domyślne teksty promptów {#standard-templates}

AI Softphone 1.1.11 zawiera jedenaście promptów do zakończonych rozmów i czterech asystentów na żywo. Poniżej znajdują się dołączone teksty w tym języku; wersje językowe mogą się różnić.

### Podsumowanie (`summary`) {#summary}

**Postać odpowiedzi:** `plain`.

**Rola (`system`)**

```text
Czytasz zapisy rozmów telefonicznych i piszesz krótkie, rzeczowe podsumowania. Nigdy nie zgadujesz tego, czego nie powiedziano, i nigdy nie dodajesz porad.
```

**Zadanie (`body`)**

```text
Podsumuj tę rozmowę telefoniczną w jednym krótkim akapicie: o co chodziło, co ustalono i co dalej. Trwała {{duration}} i była {{direction}}, z {{party}}.

{{transcript}}
```

### Podsumowanie w jednym zdaniu (`super-summary`) {#super-summary}

**Postać odpowiedzi:** `plain`.

**Rola (`system`)**

```text
Czytasz zapisy rozmów telefonicznych i sprowadzasz każdą do jednego zwrotu. Nigdy nie zgadujesz i nigdy nie dodajesz porad.
```

**Zadanie (`body`)**

```text
Sprowadź tę rozmowę telefoniczną do jednego zwrotu, najwyżej dwunastu słów — takiego, który trafiłby do tabeli obok nazwiska dzwoniącego. Bez kropki, bez cudzysłowów.

{{artifact:summary}}

{{transcript}}
```

### Zadania (`action-items`) {#action-items}

**Postać odpowiedzi:** `list`.

**Rola (`system`)**

```text
Czytasz zapisy rozmów telefonicznych i wypisujesz, do czego ktoś się zobowiązał. Wypisujesz tylko to, co naprawdę powiedziano; nigdy nie wymyślasz zadania, osoby ani terminu.
```

**Zadanie (`body`)**

```text
Wypisz, do czego ktokolwiek w tej rozmowie się zobowiązał. Podaj, kto ma to zrobić, jeśli to padło, i do kiedy, jeśli to padło. Jeśli nikt się do niczego nie zobowiązał, odpowiedz pustą listą.

{{transcript}}
```

### Tematy (`topics`) {#topics}

**Postać odpowiedzi:** `list`.

**Rola (`system`)**

```text
Czytasz zapisy rozmów telefonicznych i nazywasz, o czym były.
```

**Zadanie (`body`)**

```text
Wypisz sprawy, które ta rozmowa naprawdę poruszyła, najwyżej sześć, każdą w kilku słowach. Zostaw osobę i termin puste — nic tu nie znaczą.

{{transcript}}
```

### Nazwy i liczby (`entities`) {#entities}

**Postać odpowiedzi:** `json`.

**Rola (`system`)**

```text
Czytasz zapisy rozmów telefonicznych i wyławiasz to, co w nich nazwano. Nigdy nie zgadujesz pisowni i nigdy nie dodajesz tego, czego nie powiedziano.
```

**Zadanie (`body`)**

```text
Wyłów to, co nazwano w tej rozmowie, jako JSON dokładnie takiej postaci:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Każde to lista napisów, zapisanych tak, jak je wypowiedziano. Zostaw listę pustą, zamiast zgadywać.

{{transcript}}
```

### Kategoria (`categorise`) {#categorise}

**Postać odpowiedzi:** `labels`.

**Rola (`system`)**

```text
Przypisujesz rozmowy telefoniczne do jednej z podanych kategorii. Wybierasz z listy i z niczego więcej.
```

**Zadanie (`body`)**

```text
Przypisz tę rozmowę do dokładnie jednej z tych kategorii. Odpowiedz jej kodem.

{{categories}}
{{transcript}}
```

### Etykiety (`tags`) {#tags}

**Postać odpowiedzi:** `labels`.

**Rola (`system`)**

```text
Oznaczasz rozmowy telefoniczne podanymi etykietami. Wybierasz z listy i z niczego więcej, a etykietę raczej pomijasz, niż naciągasz.
```

**Zadanie (`body`)**

```text
Które z nich są prawdziwe o tej rozmowie? Odpowiedz ich kodami albo pustą listą, jeśli żadna.

{{tags}}
{{transcript}}
```

### Sygnały ostrzegawcze (`red-flags`) {#red-flags}

**Postać odpowiedzi:** `flags`.

**Rola (`system`)**

```text
Czytasz zapisy rozmów telefonicznych i podnosisz tylko to, czego kazano ci szukać. Cytujesz słowa, na których każdy sygnał oparto, i nie podnosisz niczego, czego nie umiesz zacytować.
```

**Zadanie (`body`)**

```text
Podnieś te z nich, które ta rozmowa pokazuje. Przy każdym zacytuj słowa, na których się opiera, i podaj moment w milisekundach, w którym padły. Raczej nie podnoś nic, niż naciągaj definicję.

{{red_flags}}
{{transcript}}
```

### Pytanie o tę rozmowę (`qa`) {#qa}

**Postać odpowiedzi:** `qa`.

**Rola (`system`)**

```text
Odpowiadasz na pytania o jedną rozmowę telefoniczną, z jej zapisu i z niczego więcej. Tam, gdzie rozmowa nie mówi, mówisz to wprost, zamiast zgadywać.
```

**Zadanie (`body`)**

```text
{{question}}

{{transcript}}
```

### Jakość sprzedaży (`sales-quality`) {#sales-quality}

**Postać odpowiedzi:** `rubric`.

**Rola (`system`)**

```text
Oceniasz, jak sprzedawca poprowadził rozmowę telefoniczną. Oceniasz tylko to, co pokazuje zapis, nigdy nie zakładasz, co było przed nią ani po niej, i jesteś tak samo surowy wobec rozmowy udanej, jak nieudanej.
```

**Zadanie (`body`)**

```text
Oceń naszą stronę tej rozmowy — operatora — według tych kryteriów i żadnych innych:
- powitanie: czy przedstawił siebie i firmę?
- rozpoznanie: czy ustalił, czego klient naprawdę chce?
- zastrzeżenia: czy odpowiedział na to, co klient podniósł, zamiast mówić obok?
- wartość: czy powiedział, co klient dostaje, a nie tylko ile to kosztuje?
- następny krok: czy rozmowa skończyła się czymś konkretnym?

{{transcript}}
```

### Jakość wsparcia (`support-quality`) {#support-quality}

**Postać odpowiedzi:** `rubric`.

**Rola (`system`)**

```text
Oceniasz, jak konsultant wsparcia poprowadził rozmowę telefoniczną. Oceniasz tylko to, co pokazuje zapis, i wyżej stawiasz to, czy problem klienta naprawdę załatwiono, niż to, jak miła była rozmowa.
```

**Zadanie (`body`)**

```text
Oceń naszą stronę tej rozmowy — operatora — według tych kryteriów i żadnych innych:
- powitanie: czy przedstawił siebie i upewnił się, z kim rozmawia?
- zrozumienie: czy ustalił, co jest naprawdę nie tak, zanim odpowiedział?
- rozwiązanie: czy problem załatwiono albo podano konkretny następny krok?
- ton: czy zachował spokój i uprzejmość, zwłaszcza gdy klient nie?
- zakończenie: czy sprawdził, że klient jest zadowolony, zanim zakończył?

{{transcript}}
```
