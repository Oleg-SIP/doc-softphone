---
title: Okno nagrań
sidebar_position: 2
description: Biblioteka rozmów — filtrowanie, odtwarzanie, czytanie transkrypcji i opracowania.
---

**Nagrania** to miejsce, gdzie mieszka każda rozmowa, niezależnie od tego, jak trafiła: połączenie, spotkanie przechwycone z innej aplikacji albo zaimportowany plik. Każda jest na liście z gotowym już opracowaniem.

<Shot name="01_recordings" alt="Zakładka Nagrania: lista rozmów" />

## Szukanie rozmowy {#finding-a-conversation}

Pasek u góry ma cztery filtry, pole wyszukiwania i menu:

| Element | Zawęża listę według |
| --- | --- |
| **Rodzaj** | sposobu, w jaki rozmowa trafiła |
| **Okres** | daty |
| **Kategoria** | kategorii, do której ją przypisano — zobacz [Słowniki](../ai-processing/dictionaries.md) |
| **Znak** | znaków, które nosi |
| **Szukaj** | tego, co w niej powiedziano — wyszukiwanie przechodzi przez transkrypcje wszystkiego, co nagrałeś |

Przycisk **⋮** po prawej stronie paska otwiera dodatkowe działania dla listy: **Importuj z plików**, **Eksportuj do CSV** i **Otwórz w przeglądarce**.

## Lista {#the-list}

Każdy wiersz pokazuje:

- ikonę rodzaju rozmowy: słuchawkę dla połączenia, okno dla spotkania w innej aplikacji;
- tytuł — nazwę drugiej strony, numer albo **Inna aplikacja** dla przechwyconego spotkania — a pod nim datę i podsumowanie w jednym zdaniu;
- po prawej kategorię z jej oceną (liczba, na przykład *Wsparcie · 2*), potem etykiety, a na końcu czas trwania.

Etykiety narysowane na czerwono to **sygnały ostrzegawcze** (na obrazku *Rozgniewany klient* i *Ryzyko odejścia*); pozostałe to zwykłe etykiety (*Skarga*, *Obiecane oddzwonienie*). Rozmowa bez podsumowania i kategorii nie została jeszcze opracowana — pierwszy wiersz na obrazku.

## Odtwarzacz {#the-player}

Zaznacz wiersz, aby otworzyć odtwarzacz pod listą.

<Shot name="02_recording_details" alt="Zaznaczone nagranie: odtwarzacz i transkrypcja pod listą" />

- Dwa przebiegi to dwa kanały nagrania, po jednym na każdą stronę rozmowy. Pasek pod nimi przewija długie nagranie.
- **▶** odtwarza i wstrzymuje; czasy po lewej to pozycja i całkowita długość.
- **1×** zmienia prędkość; **Oboje** wybiera, który kanał słyszysz.
- Przycisk dyskietki zapisuje dźwięk, **×** zamyka odtwarzacz.

## Transkrypcja i opracowanie {#the-transcript-and-the-write-up}

Pod odtwarzaczem jest transkrypcja: jeden wiersz na wypowiedź, moment, w którym ją powiedziano, i nazwa mówcy (**Ty**, nazwa drugiej strony lub, w przypadku przechwyconego spotkania, **Inna aplikacja**). Kliknij wiersz, aby usłyszeć ten moment; wiersz pod znacznikiem odtwarzania jest podświetlony, a wypowiadane słowo jest w nim zaznaczone.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Transkrypcja obok dźwięku" />

Lista rozwijana nad transkrypcją wybiera, co pokazać — transkrypcję wykonaną przez jeden z twoich [rozpoznawaczy](../ai-processing/transcription.md) (gwiazdka oznacza główną transkrypcję nagrania) albo opracowanie, na przykład **Działania**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Działania, które zostawiła rozmowa" />

Cztery ikony po prawej stronie listy rozwijanej:

| Ikona | Co robi |
| --- | --- |
| Iskierki | Każe modelowi napisać zaznaczony element teraz. |
| Dwie kartki | Kopiuje go. |
| Dyskietka | Zapisuje go do pliku. |
| Kosz | Usuwa go. |

Transkrypcję możesz wyeksportować jako zwykły tekst albo jako napisy.

Opracowanie tworzą [polecenia](/ai-processing/prompt-studio) i modele skonfigurowane w [Przetwarzaniu](../ai-processing/processing.md), za pomocą [reguł](../ai-processing/processing.md#rules), które działają same albo na twoje żądanie. Jak długo przechowywane są nagrania, ustawia się w [Nagrywaniu połączeń](call-recording.md#retention).

## Nagranie, które już masz {#a-recording-you-already-have}

Nagranie zrobione gdzie indziej — telefonem komórkowym, dyktafonem albo w innym systemie — można dodać przez **⋮ → Importuj z plików**. Jest archiwizowane dokładnie tak jak połączenie: spisywane, opracowywane i znajdowane tym samym wyszukiwaniem.

## Usuwanie nagrania {#deleting-a-recording}

Gdy nagranie zostaje usunięte, znika razem z nim wszystko, co z niego powstało: transkrypcja i opracowanie.
