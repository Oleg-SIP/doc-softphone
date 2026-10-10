---
title: Ustawienia suflera
sidebar_label: Sufler
sidebar_position: 5
description: "Ustawienia → Sufler: czego potrzebuje sufler na żywo, przełącznik, który na niego zezwala, rozmiar tekstu, pomocnicy i ich karty oraz miesięczne limity tego, ile może wydać."
---

W **Ustawienia → Sufler** sufler na żywo zostaje dopuszczony, dostaje swój rozmiar i swoich pomocników. Sam sufler — okno, które zapisuje rozmowę w chwili, gdy padają słowa, i podpowiada, co odpowiedzieć, oraz próba na nagraniu — jest opisany na stronie [Okno suflera](/interface/prompter).

[Przegląd](/interface/settings-overview) ustawień pokazuje suflera w sekcji **Sufler** w dwóch krokach: **Zezwól na suflera** i **Uruchom suflera**.

## Czego potrzebuje {#what-it-needs}
- **Rozpoznawacza, który umie słuchać w trakcie rozmowy.** Dodaje się go w [Ustawienia → Transkrypcja](/ai-processing/transcription#live-recognition-for-the-prompter), jak każdy inny rozpoznawacz, i potrzebuje on **Adres dla suflera** oraz udanego **Sprawdź**.
- **Modelu językowego** dla pomocników, którzy coś podpowiadają. Jest to model ustawiony u pomocnika albo model domyślny z [Ustawienia → Przetwarzanie](/ai-processing/processing#language-models). Napisy w ogóle nie potrzebują modelu.
- **Zaznaczenia Zezwalaj na używanie suflera** w **Ustawienia → Sufler**.

Gdy wszystkie trzy są spełnione, **Sufler** pojawia się na liście u dołu telefonu, między **Historia** a **Ustawienia**, i otwiera [okno suflera](/interface/prompter). Częścią programu, która to robi, jest moduł **Sufler**, *Słucha rozmowy w jej trakcie i podpowiada*; można go wyłączyć w [Moduły](/application/modules).

## Ustawienia → Sufler {#settings--prompter}
<Shot name="41_settings_prompter" alt="Ustawienia → Sufler: przełącznik zezwalający na suflera i rozmiar tekstu" />

*Rozpoznawanie mowy w trakcie rozmowy i podpowiedzi pisane według twoich własnych instrukcji. Jedno i drugie jest płatne za minutę.*

| Ustawienie | Domyślnie | Co robi |
| --- | --- | --- |
| **Zezwalaj na używanie suflera** | wyłączone | Jedyny przełącznik, który w ogóle pozwala uruchomić suflera. Nic innego na stronie nie działa, dopóki jest wyłączony. |
| **Transkrypcja i podpowiedzi** | 13 pikseli | Jak duże są rysowane obie kolumny okna. |
| **Powtarzaj najnowszy wiersz nad kolumnami** | włączone | Pokazuje najnowszą podpowiedź — albo najnowszy wiersz, dla pomocnika, który nic nie podpowiada — na osobnym pasku nad kolumnami. |
| **Powtarzana linia** | 20 pikseli | Jak duży jest tekst paska. Widoczne, dopóki pasek jest włączony. |

:::caution
Głos drugiej strony jest wysyłany do rozpoznawacza w trakcie mówienia, co nie jest niczym mniej niż nagrywanie. Tam, gdzie [Ustawienia → Nagrywanie](/recordings) wymaga najpierw uprzedzenia drugiej strony, sufler uruchamia się dopiero po tym.
:::

Sufler czyta się w trakcie mówienia, często z większej odległości niż resztę telefonu, więc oba rozmiary wybierasz sam: wybierz takie, które ogarniesz wzrokiem bez pochylania się nad ekranem. Przeciągnij separator pod paskiem w [oknie suflera](/interface/prompter#the-window), aby go powiększyć.

### Pomocnicy {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Ustawienia → Sufler: pomocnicy i miesięczne limity" />

Pomocnik to to, czym sufler ma być. *Każdy z nich słucha trwającej rozmowy i pisze coś w oknie suflera: słowa tak, jak padają, ich tłumaczenie albo podpowiedź, co powiedzieć dalej.* Którego uruchomić, wybierasz w oknie suflera. Program ma czterech:

| Pomocnik | Co pisze | Pyta model |
| --- | --- | --- |
| **Napisy** | Słowa obu stron, w chwili gdy padają. | nie |
| **Tłumaczenie** | Słowa drugiej strony, przetłumaczone na język programu. | tak |
| **Zastrzeżenia w rozmowie** | Dla sprzedającego przez telefon: gdy klient zgłasza zastrzeżenie, zastrzeżenie w jednym wierszu i jeden wiersz, który na nie odpowiada. | tak |
| **Pomoc na rozmowie** | Dla osoby na rozmowie kwalifikacyjnej: odpowiedź na właśnie zadane pytanie w kilku krótkich wierszach albo to, co poruszyć w następnej odpowiedzi. | tak |

**▲** i **▼** zmieniają kolejność, i jest to kolejność listy rozwijanej w [oknie suflera](/interface/prompter#the-window). **Dodaj** tworzy własnego pomocnika. **Przywróć domyślne** przywraca polecenia i reguły do stanu, w jakim przyszły z programem, tutaj i w [Przetwarzanie](/ai-processing/processing#defaults); twoje modele językowe pozostają nietknięte.

### Karta pomocnika {#an-assistants-card}
Kliknięcie pomocnika otwiera jego kartę. To ta sama karta co dla [polecenia](/ai-processing/prompt-studio) w Przetwarzaniu, z kilkoma własnymi elementami.

<Shot name="42_prompter_assistant" alt="Karta pomocnika Zastrzeżenia w rozmowie: rozpoznawacz, kiedy wypowiedź się skończyła, rola i polecenie" />

| Pole | Co robi |
| --- | --- |
| **Nazwa** | Nazwa na liście i w oknie suflera. |
| **Kształt odpowiedzi** i **Wyślij także** | Jak w każdym poleceniu: kształt odpowiedzi i instrukcje wysyłane razem z nią. Dostarczeni pomocnicy odpowiadają w formie **Proza**. |
| **Rozpoznawacz** | Który rozpoznawacz słucha. Proponowane są tylko te, które umieją słuchać, kiedy ktoś mówi. |
| **Kiedy wypowiedź się skończyła** | Kto decyduje, że wypowiedź się skończyła i można na nią odpowiedzieć: **Decyduje rozpoznawacz**, **Po pauzie** albo **Tylko kiedy poproszę** — wtedy wypowiedź kończy się, gdy naciśniesz **Podpowiedź**. Sześć rozpoznawaczy samo mówi, gdzie kończy się wypowiedź, a cztery nie; **Decyduje rozpoznawacz** sięga po pauzę tam, gdzie nie ma odpowiedzi, i dlatego to ustawienie warto zostawić. |
| **Rozpoznawaj też moją stronę** | Druga sesja w tym samym rozpoznawaczu, za podwójną cenę, aby w transkrypcji pojawiały się też twoje własne słowa. Wchodzą do tego, co mówi się modelowi, ale nigdy nie są tym, o co się go pyta. |
| **Rola — czym jest model** | Wysyłana do modelu przed poleceniem, na przykład *Pomagasz osobie, która sprzedaje przez telefon…* |
| **Polecenie** | O co pyta się model przy każdej wypowiedzi. `{{reply}}` to wypowiedź, która właśnie się skończyła, a `{{conversation}}` — wszystko, co powiedziano wcześniej. *Zostaw puste i modelu nie pyta się o nic: słowa pokazują się, gdy przychodzą, a płaci się tylko za rozpoznawacz.* Tym właśnie są **Napisy**. |
| **Odpowiadaj w** | Język podpowiedzi: **Cokolwiek zostało powiedziane**, **Język tego programu** albo **Zawsze jeden język** z jego kodem. |
| **Model** | **Domyślny** albo jeden z twoich [modeli językowych](/ai-processing/processing#language-models). |

### Wydatki {#spending}
*Oddzielnie od tego, co reguły mogą wydać na zakończone rozmowy. Miesiąc podsumowań nie może móc uciszyć suflera w środku rozmowy.*

| Pole | Gdy zostanie osiągnięte |
| --- | --- |
| **Rozpoznawacze, miesięcznie** | Działający sufler zatrzymuje się na końcu wypowiedzi, przy której jest — nigdy w środku słowa. |
| **Modele, miesięcznie** | Podpowiedzi ustają, a napisy trwają dalej. |

Puste oznacza brak limitu. Koszt minuty dźwięku na żywo to **Cena za minutę** rozpoznawacza, podana na jego karcie w [Transkrypcja](/ai-processing/transcription#the-recognisers-card); bez niej sufler informuje, że pokazana kwota jest szacunkiem.
