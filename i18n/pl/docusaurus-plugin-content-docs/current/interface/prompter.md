---
title: Okno suflera
sidebar_position: 3
description: "Okno suflera na żywo: słowa rozmowy w chwili, gdy padają, i podpowiedzi, co powiedzieć dalej, jego przyciski i kolumny, próba na nagraniu i ile to kosztuje."
---

**Sufler** słucha rozmowy w jej trakcie. We własnym oknie zapisuje, co mówi każda ze stron, w chwili gdy to pada, a — jeśli wybrany pomocnik pyta model — także podpowiedź, co powiedzieć dalej. Warto mieć go otwartego podczas rozmowy sprzedażowej, rozmowy kwalifikacyjnej czy trudnej rozmowy, a z innym pomocnikiem to samo okno pokazuje bieżące tłumaczenie drugiej strony albo po prostu napisy.

<Shot name="46_prompter_running" alt="Sufler podczas próby na rozmowie sprzedażowej: transkrypcja po lewej, podpowiedzi po prawej, najnowsza powtórzona dużą czcionką nad nimi" />

Na obrazku pomocnik **Zastrzeżenia w rozmowie** słucha rozmowy sprzedażowej. Lewa kolumna to to, co powiedziano, każdy wiersz ze swoim czasem i stroną; prawa to to, co model podpowiedział przy każdej wypowiedzi klienta; najnowsza podpowiedź jest powtórzona dużą czcionką nad obiema.

**Sufler** pojawia się na liście u dołu telefonu, między **Historia** a **Ustawienia**, gdy tylko spełnione są trzy warunki: sufler jest dozwolony, jest rozpoznawacz, który umie słuchać w trakcie rozmowy, oraz — dla pomocników, którzy coś podpowiadają — model językowy. Wszystko to ustawia się w [Ustawienia → Sufler](/ai-processing/prompter), gdzie są też rozmiar tekstu i sami pomocnicy.

## Okno {#the-window}
<Shot name="44_prompter_window" alt="Okno suflera z wybranym pomocnikiem Zastrzeżenia w rozmowie, przed uruchomieniem" />

Na górze jest lista rozwijana **Pomocnik**, a po jej prawej stronie przyciski:

| Przycisk | Co robi |
| --- | --- |
| **Uruchom** / **Zatrzymaj** (trójkąt / kwadrat) | *Zacznij słuchać tej rozmowy* — albo przestań: *To, co powiedziano, zostaje na ekranie*. Uruchomienie naciśnięte przed odebraniem połączenia czeka na nie, a przycisk wtedy je odwołuje. |
| **Podpowiedź** (iskry) | *Zakończ tu wypowiedź i podpowiedz, co powiedzieć*, bez czekania na pauzę. Dla pomocnika, który nie pyta żadnego modelu, przycisk to **Zakończ wypowiedź**: tylko zamyka wypowiedź, żeby następna zaczęła się od czysta. Jest wyszarzony, dopóki sufler nie działa. |
| **Wyczyść** (kosz) | Po zapytaniu zapomina to, co jest na ekranie. *Znikają obie kolumny, a wraz z nimi rozmowa, z której powstałaby następna podpowiedź.* Zatrzymanie i ponowne uruchomienie niczego nie czyści: rozmowa zatrzymana i wznowiona to zwykle ta sama rozmowa. |
| **Wyeksportuj…** (dyskietka) | Zapisuje obie kolumny z czasami do pliku: jako tekst (`.txt`) lub arkusz (`.csv`), pod nazwą, jaką nadasz plikowi. |
| **Próba…** (biblioteka) | [Wypróbowuje pomocnika na nagraniu](#rehearsing-on-a-recording) zamiast na rozmowie. |

Lista rozwijana pokazuje [pomocników](/ai-processing/prompter#assistants) w kolejności ustawionej w **Ustawienia → Sufler**. Nie da się jej zmienić, gdy sufler działa, ale pozostaje widoczna, więc widać, który pomocnik pracuje. Gdy sufler słucha, na karcie rozmowy widnieje **Słuchamy**.

Pod przyciskami jest pasek z najnowszym wierszem, a pod nim dwie kolumny:

- **Transkrypcja** — każdy wiersz ze swoim czasem i stroną;
- **Podpowiedzi** — każda podpowiedź z czasem wypowiedzi, na którą odpowiada. Dla pomocnika, który nie pyta żadnego modelu, tej kolumny nie ma, a transkrypcja zajmuje całą szerokość.

W wąskim oknie obie kolumny stoją jedna nad drugą. Kolumna podąża za tym, co przychodzi, dopóki nie przewiniesz jej wstecz, i podąża znowu, gdy wrócisz na dół. Kliknij dowolny wiersz, aby zatrzymać go na pasku; kliknij najnowszy albo pinezkę na pasku, aby znowu podążać. Prawy przycisk myszy kopiuje wiersz, podpowiedź, całą transkrypcję albo wszystkie podpowiedzi. Przeciągnij separator pod paskiem, aby go powiększyć; rozmiary tekstu ustawia się w [Ustawienia → Sufler](/ai-processing/prompter#settings--prompter).

## Próba na nagraniu {#rehearsing-on-a-recording}
Pomocnika można wypróbować bez nikogo przy telefonie. **Próba…** wyświetla rozmowy z [biblioteki](/interface/recordings), najnowsze na początku, oraz **Plik na tym komputerze…** dla pliku `.mp3` lub `.wav`.

<Shot name="45_prompter_rehearse" alt="Próba…: rozmowy z biblioteki i plik na tym komputerze" />

Wybrane nagranie pojawia się w odtwarzaczu pod przyciskami: odtwarzanie i pauza, oba kanały narysowane jako przebieg, w który można kliknąć, oraz czas. Naciśnij **Uruchom**: nagranie jest odtwarzane do suflera tą samą drogą co rozmowa, we własnym tempie — szybsze odtwarzanie celowo nie jest dostępne, bo sufler karmiony półtora razy szybciej robiłby pauzy, odpowiadał i naliczał opłaty za rozmowę, której nikt nie prowadził. Krzyżyk po prawej to **Zakończ próbę** — powrót do słuchania rozmów.

Nagranie jednokanałowe, takie jak zaimportowany plik, jest słyszane jako jedno pomieszczenie: *sufler słyszy całość jako rozmówcę*.

## Ile to kosztuje i dokąd trafiają słowa {#what-it-costs-and-where-the-words-go}
- Rozpoznawacz jest płatny za minutę dźwięku na żywo, a **Rozpoznawaj też moją stronę** podwaja tę kwotę. Model jest płatny za każdą podpowiedź. Oba wliczają się do [miesięcznych limitów](/ai-processing/prompter#spending) suflera, a nie do limitów Przetwarzania.
- Głos drugiej strony opuszcza komputer w trakcie mówienia i trafia do wybranego przez ciebie rozpoznawacza. Rozpoznawacz na twoim własnym komputerze — **Vosk**, **WhisperLive** albo **NVIDIA Riva** — zatrzymuje go w domu.
- To, co pokazuje sufler, nie jest nagraniem. Aby to zachować, naciśnij **Wyeksportuj…**; aby mieć samą rozmowę, [nagraj połączenie](/recordings) dodatkowo.

## Gdy się nie uruchamia {#when-it-does-not-start}
Okno mówi w wierszu pod przyciskami, czego brakuje.

| Okno mówi | Co zrobić |
| --- | --- |
| *Suflowanie jest wyłączone. Ustawienia → Sufler.* | Zaznacz **Zezwalaj na używanie suflera**. |
| *Żaden rozpoznawacz tutaj nie umie słuchać, kiedy ktoś mówi. Ustawienia → Transkrypcja.* | Dodaj rozpoznawacz z **Adres dla suflera** i naciśnij **Sprawdź**. |
| *Nie ma czego uruchomić. Ustawienia → Sufler, i dodaj pomocnika.* | Wszyscy pomocnicy zostali usunięci lub wyłączeni: dodaj jednego albo naciśnij **Przywróć domyślne**. |
| *Druga strona musi być najpierw uprzedzona. Zacznij nagrywać tę rozmowę albo zmień to, co o zgodzie mówi Ustawienia → Nagrywanie.* | Rozpocznij nagrywanie, które odtwarza komunikat, albo zmień ustawienie zgody. |
| *Rozpoznawacz nie zaczął słuchać. Sprawdź jego adres na żywo i model w Ustawienia → Transkrypcja.* | Adres dla suflera, model albo klucz jest błędny. **Sprawdź** na karcie rozpoznawacza powie, co dokładnie. |
| *Miesięczny budżet na rozpoznawacze jest wyczerpany.* | Zwiększ **Rozpoznawacze, miesięcznie** albo poczekaj na nowy miesiąc. |
| *Miesięczny budżet na modele jest wyczerpany. Słowa idą dalej; suflowanie się zatrzymało.* | Zwiększ **Modele, miesięcznie**. |
