---
title: Personal Prompt Studio
sidebar_position: 3
description: Polecenia, które opracowują twoje rozmowy, reguły, które je uruchamiają, i jak dopasować je do siebie.
---

**Personal Prompt Studio** to część AI Softphone, która opracowuje twoje rozmowy po twojemu. Opracowanie tworzą polecenia: program ma ich jedenaście, gotowych do użycia, gdy tylko podłączysz transkrypcję i model językowy, a ty możesz je zmieniać zwykłym językiem, powielać i dodawać własne. Są wymienione w sekcji **Polecenia** w [Ustawienia → Przetwarzanie](processing.md#prompts).

Twój LLM, twój klucz, twoja kontrola: podłącz wybrany model z własnym kluczem, przez obsługiwaną usługę albo zgodne API — albo model wdrożony w twojej organizacji. Gdy także [transkrypcja](transcription.md#your-own-models) działa na twoim sprzęcie, zarówno dźwięk, jak i transkrypcje zostają w twoim środowisku.

<Shot name="12b_settings_processing_prompts" alt="Lista poleceń w Ustawienia → Przetwarzanie" />

## Polecenia dostarczone z programem {#the-prompts-that-come-with-the-program}

Druga kolumna to to, co lista pokazuje pod nazwą polecenia: co pisze i w jakiej formie.

| Polecenie | Forma | Co pisze |
| --- | --- | --- |
| **Podsumowanie** | Proza | Najważniejsze punkty, decyzje i dalsze kroki w jednym krótkim akapicie. |
| **Podsumowanie w jednym zdaniu** | Proza | Krótki tytuł, by rozpoznać rozmowę na liście. |
| **Zadania** | Pozycje | Kto zobowiązał się co zrobić i kiedy, z wypowiedzianymi słowami. |
| **Tematy** | Pozycje | Poruszone tematy w kilku słowach. |
| **Nazwy i liczby** | JSON | Osoby, firmy, daty, kwoty i odniesienia. |
| **Kategoria** | Etykiety | Przypisuje rozmowę do jednej z twoich [kategorii](dictionaries.md). |
| **Etykiety** | Etykiety | Nakłada na nią twoje [etykiety](dictionaries.md), by można ją było później znaleźć. |
| **Sygnały ostrzegawcze** | Sygnały | Problemy, z dowodem i momentem w rozmowie. |
| **Pytanie o tę rozmowę** | Odpowiedź | Odpowiada na pytanie, które zadajesz o jedną rozmowę, na podstawie jej transkrypcji. |
| **Jakość sprzedaży** | Kryteria | Ocenia rozmowę według kryteriów sprzedaży, które możesz edytować. |
| **Jakość wsparcia** | Kryteria | Ocenia, jak dobrze problem został zrozumiany i rozwiązany. |

Formy to stałe kształty odpowiedzi i właśnie dzięki temu program może ją przechowywać i później w niej wyszukiwać: **Etykiety** to kody z jednej z twoich list, **Sygnały** to kody z wagą, **Kryteria** to ocena z uzasadnieniem i oceną każdego kryterium, **Odpowiedź** to odpowiedź ze słowami, na których się opiera. Instrukcje, które podają modelowi kształt, są przechowywane w [Słownikach](dictionaries.md#answer-shapes-and-language).

Połączenia wykonane w AI Softphone, spotkania [przechwycone](/capture/) z komputera i zaimportowane nagrania przechodzą przez te same polecenia, gdy tylko mają transkrypcję.

Zadania zapisują to, co uzgodniono — nie wysyłają wiadomości, nie umawiają wizyt ani nie tworzą zgłoszeń za ciebie.

## Dopasuj do siebie {#making-it-yours}

- Zmieniaj zwykłym językiem to, o co prosi polecenie: czego szuka, format odpowiedzi i język, w którym odpowiada.
- Powiel polecenie, aby wypróbować wariant.
- Wybierz model dla każdego polecenia — na twoim komputerze lub w chmurze.
- Ustal kolejność, w jakiej działają polecenia, włączaj je i wyłączaj, a także uzależniaj od warunków — służą do tego [reguły](processing.md#rules): na przykład ocena sprzedaży działa tylko dla połączeń przypisanych do kategorii **Sprzedaż**.
- Trzymaj własne kategorie, etykiety i sygnały ostrzegawcze w [Słownikach](dictionaries.md).
- Ogranicz koszty [miesięcznymi granicami](processing.md#limits).

Oryginalne polecenia i reguły można przywrócić przyciskiem **Przywróć domyślne** w sekcji **Domyślne** w [Ustawienia → Przetwarzanie](processing.md#defaults).
