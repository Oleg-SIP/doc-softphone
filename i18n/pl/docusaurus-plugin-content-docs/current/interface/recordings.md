---
title: Okno nagrań
sidebar_position: 2
description: "\"Biblioteka każdej rozmowy — połączenia, zaimportowanego pliku lub spotkania przechwyconego z Zooma, Teams czy Meet: filtry, odtwarzacz, transkrypcja, którą odtworzysz od dowolnego wiersza, i opracowania.\""
---

**Nagrania** to miejsce, gdzie mieszka każda rozmowa, niezależnie od tego, jak trafiła: połączenie wykonane lub odebrane w telefonie, zaimportowany plik dźwiękowy albo spotkanie przechwycone z Zooma, Teams, Meet lub dowolnej innej aplikacji. Wszystkie są na jednej liście i każda otwiera się tak samo: odtwarzacz, transkrypcja i wszystko, co o niej napisał model językowy. Naciśnij **Nagrania** w lewym dolnym rogu [okna głównego](main-window.md), aby je otworzyć.

<Shot name="01_recordings" alt="Zakładka Nagrania: przechwycone spotkanie w Zoomie, zaimportowany plik i połączenia na jednej liście" />

## Trzy rodzaje nagrań {#three-kinds-of-recording}

Ikona po lewej stronie wiersza mówi, jak rozmowa trafiła na listę.

| Ikona | Rozmowa | Jej nazwa na liście | Jak trafia na listę |
| --- | --- | --- | --- |
| Słuchawka ze strzałką | Połączenie wykonane lub odebrane w tym telefonie. Strzałka w stronę słuchawki oznacza połączenie przychodzące, a od niej — wychodzące. | Nazwa kontaktu albo numer | Nagrywane według ustawień w [Nagraniach](../recordings.md) |
| Strzałka do paska | Plik zaimportowany skądinąd: z telefonu komórkowego, dyktafonu lub innego systemu | Nazwa pliku | **⋮ → Importuj z plików**; zobacz [niżej](#a-recording-you-already-have) |
| Okno | Spotkanie w innej aplikacji | Nazwa, którą nadasz, albo **Inna aplikacja** | [Przechwytywanie](../capture/capture.md) |

Na obrazku trzy górne wiersze to po jednym z każdego rodzaju: spotkanie w Zoomie, zaimportowany plik z rozmową z infolinią banku i połączenie odebrane na linii **305 Wsparcie**. Niezależnie od źródła wszystkie są spisywane, opracowywane i przeszukiwane tak samo.

## Szukanie rozmowy {#finding-a-conversation}

Pasek u góry ma pięć filtrów, pole wyszukiwania i menu:

| Element | Zawęża listę według |
| --- | --- |
| **Rodzaj** | sposobu, w jaki rozmowa trafiła: połączenia przychodzące lub wychodzące, **Zaimportowane**, **Przechwycone** |
| **Okres** | daty: **Dziś**, **Wczoraj**, **Ostatnie 7 dni** albo **Wybierz daty…** |
| **Kategoria** | kategorii, do której ją przypisano — zobacz [Słowniki](../ai-processing/dictionaries.md) |
| **Znak** | etykiet i sygnałów ostrzegawczych, które nosi |
| **Rozpoznawacz** | [rozpoznawacza](../ai-processing/transcription.md), który wykonał jej transkrypcję |
| **Szukaj** | tego, co w niej powiedziano — wyszukiwanie przechodzi przez transkrypcje wszystkiego, co nagrano |

<Shot name="39_more_menu" alt="Menu ⋮ listy: Importuj z plików, Eksportuj do CSV, Otwórz w przeglądarce" />

Przycisk **⋮** po prawej stronie paska otwiera dodatkowe działania dla listy:

| Pozycja | Co robi |
| --- | --- |
| **Importuj z plików** | Wprowadza nagrania, które już masz. Zobacz [Nagranie, które już masz](#a-recording-you-already-have). |
| **Eksportuj do CSV** | Zapisuje listę jako arkusz: kiedy, rozmówcę i numer, kierunek, czas trwania, kategorię, etykiety, sygnały ostrzegawcze i jednozdaniowe podsumowanie każdej rozmowy. |
| **Otwórz w przeglądarce** | Otwiera listę w przeglądarce, jako stronę, którą [lokalne REST API](../integration/rest-api.md) udostępnia pod adresem `/ui`. |

## Lista {#the-list}

Każdy wiersz pokazuje:

- ikonę rodzaju rozmowy;
- nazwę — drugą stronę, numer, plik lub spotkanie — a pod nią datę i podsumowanie w jednym zdaniu;
- po prawej kategorię z jej oceną (liczba, na przykład *Wsparcie · 4*), potem sygnały ostrzegawcze i etykiety, a na końcu czas trwania.

Sygnały ostrzegawcze są narysowane na czerwono (na obrazku *Dane wrażliwe*, *Złożona obietnica*, *Rozgniewany klient*); etykiety są zwykłe (*Obiecane oddzwonienie*). Rozmowa bez podsumowania i kategorii nie została jeszcze opracowana — na obrazku wiersz **Agnieszka Zielińska**.

<Shot name="40_row_actions" alt="Wiersz z kursorem nad nim: przyciski pinezki, ołówka i kosza" />

Wskaż wiersz, aby po jego prawej stronie pojawiły się trzy przyciski:

| Przycisk | Co robi |
| --- | --- |
| Pinezka | **Zachowaj to**: zachowane nagranie nigdy nie jest usuwane przez limity z [Przechowywania](../recordings.md#retention). Naciśnij ponownie, aby przestać je zachowywać. |
| Ołówek | **Zmień nazwę**: nadaje rozmowie twoją własną nazwę. Połączenie zachowuje obok niej nazwę rozmówcy; spotkanie lub plik są poza tym nazwane od aplikacji albo pliku, z którego pochodzą. |
| Kosz | **Usuń to nagranie**, po zapytaniu. Znika też dźwięk i nie można tego cofnąć. |

## Odtwarzacz {#the-player}

Zaznacz wiersz, aby otworzyć odtwarzacz pod listą.

- Dwa przebiegi to dwa kanały nagrania: górny to ty, dolny to druga strona. Zaimportowany plik ma zwykle jedną zmiksowaną ścieżkę, więc obie linie pokazują ten sam dźwięk.
- **▶** odtwarza i wstrzymuje; czasy po lewej to pozycja i całkowita długość. Pasek pod przebiegami przewija długie nagranie.
- **1×** zmienia prędkość; **Oboje** wybiera, którego głosu słuchasz: obu, tylko swojego (**Ja**) albo tylko drugiej strony (**Oni**).
- Przycisk dyskietki zapisuje kopię nagrania, **×** zamyka rozmowę.

Linię między listą a odtwarzaczem można przeciągnąć w górę, aby dać transkrypcji więcej miejsca, jak na obrazkach poniżej.

## Transkrypcja {#the-transcript}

Pod odtwarzaczem jest transkrypcja: jeden wiersz na wypowiedź, z momentem, w którym ją powiedziano, i osobą, która ją wypowiedziała.

<Shot name="26_recording_call" alt="Połączenie na linii 305 Wsparcie: odtwarzacz i transkrypcja z podświetlonym wierszem w 0:11" />

| Rodzaj nagrania | Mówcy są pokazani jako |
| --- | --- |
| Połączenie | **Ty** i nazwa drugiej strony albo numer |
| Przechwycone spotkanie | **Ty** i nazwa nagrania dla wszystkich pozostałych |
| Zaimportowany plik | **Wszyscy · speaker 1**, **Wszyscy · speaker 2**… — głosy rozróżnia rozpoznawacz |

**Kliknij wiersz, aby przejść do tego momentu**: odtwarzacz przesuwa się tam, wiersz jest podświetlony, a wypowiadane słowo jest w nim zaznaczone — na obrazku wiersz w **0:11** ze słowem *Tak*. Naciśnij **▶**, aby słuchać od tego miejsca. Podczas odtwarzania podświetlenie podąża za mową, więc możesz czytać i słuchać jednocześnie oraz wrócić do dowolnego zdania.

Czas po lewej stronie każdego wiersza jest też tym, na co wskazuje opracowanie: sygnał ostrzegawczy, odpowiedź lub cytat mają czas słów, na których się opierają.

## Transkrypcja czy opracowanie: lista rozwijana {#transcript-or-write-up-the-drop-down}

Lista rozwijana nad transkrypcją wybiera, co pokazać w tym miejscu: transkrypcję albo jedno z opracowań, które napisał model językowy.

<Shot name="27_writeup_menu" alt="Otwarta lista rozwijana: transkrypcja OpenAI i opracowania rozmowy" />

- Pozycje z **mikrofonem** to transkrypcje, po jednej dla każdego [rozpoznawacza](../ai-processing/transcription.md), który spisał nagranie. Gwiazdka oznacza główną. Wskaż jedną, aby zobaczyć rozpoznawacz, jego model i język.
- Pozycje z **iskierkami** to opracowania, tworzone przez [polecenia](/ai-processing/prompt-studio) z [Przetwarzania](../ai-processing/processing.md).

Nagranie może mieć transkrypcje od kilku rozpoznawaczy, aby je porównać: spotkanie w Zoomie poniżej spisały zarówno X.ai, jak i Deepgram.

<Shot name="36_zoom_menu" alt="Przechwycone spotkanie z dwiema transkrypcjami, Deepgram i X.ai, oraz jego opracowania" />

Opracowania są wymienione pod krótkimi nazwami:

| Na liście rozwijanej | Tworzy je polecenie | Co pokazuje |
| --- | --- | --- |
| **Podsumowanie** | Podsumowanie | Najważniejsze punkty, decyzje i kolejne kroki w krótkim akapicie. |
| **W skrócie** | Podsumowanie w jednym zdaniu | Jedno zdanie; ten sam wiersz widać pod nazwą na liście. |
| **Działania** | Zadania | Kto zgodził się co zrobić i do kiedy. |
| **Tematy** | Tematy | Poruszone zagadnienia. |
| **Wspomniane** | Nazwy i liczby | Osoby, firmy, daty, kwoty i odniesienia. |
| samo pytanie | Pytanie o tę rozmowę | Odpowiedź na zadane pytanie, wraz ze słowami, na których się opiera. |
| **Jakość** | Jakość sprzedaży, Jakość wsparcia | Ogólna ocena i werdykt dla każdego kryterium. |
| **Sygnały ostrzegawcze** | Sygnały ostrzegawcze | Co wymaga uwagi, wraz z dowodem i czasem. |
| **Etykiety**, **Kategoria** | Etykiety, Kategoria | Oznaczenia, pod którymi rozmowę zapisano. |

## Opracowania, jedno po drugim {#the-write-ups-one-by-one}

Wszystkie obrazki poniżej dotyczą tej samej rozmowy, na linii **305 Wsparcie**, w której klientka pyta, kiedy odnawiają się jej polisy.

**Podsumowanie** — rozmowa w kilku zdaniach.

<Shot name="28_summary" alt="Podsumowanie rozmowy" />

**W skrócie** — jeden wiersz, na tyle krótki, by rozpoznać po nim rozmowę na liście.

<Shot name="29_nutshell" alt="W skrócie: podsumowanie rozmowy w jednym zdaniu" />

**Działania** — każde zadanie z osobą, która ma je wykonać, i terminem, po prawej stronie.

<Shot name="30_actions" alt="Działania: dwa zadania dla Ciebie, jedno z terminem jutro rano" />

**Pytanie** — zapytaj rozmowę o cokolwiek: pytanie staje się nazwą pozycji, a pod odpowiedzią są słowa, na których się opiera, z ich czasem w nagraniu.

<Shot name="31_question" alt="Odpowiedź na pytanie o rozmowę, z dwoma cytatami w 0:14 i 0:27" />

**Jakość** — ocena od 1 do 5 z uzasadnieniem oraz każde kryterium oznaczone jako **spełnione**, **słabo** lub **niespełnione** wraz z notatką.

<Shot name="32_quality" alt="Jakość: ocena 4, dwa kryteria spełnione i dwa słabo" />

**Sygnały ostrzegawcze** — każdy sygnał ze słowami, na których go wystawiono, wagą i czasem.

<Shot name="33_red_flags" alt="Sygnały ostrzegawcze: Złożona obietnica, niska, w 0:27" />

**Tematy** — zagadnienia spotkania, tutaj spotkania w Zoomie.

<Shot name="38_topics" alt="Tematy spotkania w Zoomie" />

## Przyciski obok listy rozwijanej {#the-buttons-beside-the-drop-down}

| Przycisk | Co robi |
| --- | --- |
| Iskierki | **Przepisz albo zapytaj model…**: otwiera menu, zobacz niżej. |
| Dwie kartki | Kopiuje to, co jest pokazane. |
| Dyskietka | Zapisuje to do pliku. Transkrypcję możesz zapisać jako zwykły tekst albo jako napisy. |
| Kosz | Usuwa to, co jest pokazane. |

<Shot name="34_run_menu" alt="Menu iskierek: Transkrypcja z czterema rozpoznawaczami, Przetwarzanie z poleceniami" />

Menu iskierek wykonuje pracę na żądanie. W sekcji **Transkrypcja** wybierz rozpoznawacz, aby ponownie spisać nagranie jego pomocą; w sekcji **Przetwarzanie** wybierz polecenie, aby uruchomić je teraz — **Pytanie o tę rozmowę…** najpierw prosi o pytanie. Wynik pojawia się na liście rozwijanej. W ten sposób opracowuje się rozmowę, gdy w [Przetwarzaniu](../ai-processing/processing.md) wyłączone jest **Przetwarzaj rozmowy automatycznie**, i tak dodaje się jeszcze jedno opracowanie do rozmowy, która już jakieś ma.

## Trzy przykłady {#three-examples}

### Połączenie wykonane w telefonie {#a-call-made-in-the-phone}

Rozmowa powyżej: mówcami są **Ty** i **Katarzyna Szymańska**, nazwa kontaktu, na dwóch oddzielnych kanałach.

### Zaimportowany plik {#a-file-you-imported}

<Shot name="35_recording_import" alt="Zaimportowany plik z rozmową z infolinią banku: jedna zmiksowana ścieżka oraz mówcy 1 i 2" />

`riverside_bank_support_call` to plik mp3 wprowadzony przez **⋮ → Importuj z plików**. Jego nazwa to nazwa pliku, ikona to strzałka do paska, a dwóch mówców rozróżnił rozpoznawacz. Opracowania znalazły numer karty wypowiedziany na głos i wystawiły sygnał **Dane wrażliwe**.

### Spotkanie przechwycone z innej aplikacji {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Spotkanie w Zoomie przechwycone z komputera: transkrypcja X.ai z mówcami Ty i nazwą spotkania" />

**Planowanie premiery w IV kwartale (Zoom)** zostało przechwycone w trakcie spotkania w Zoomie i nazwane ołówkiem. Wszyscy po drugiej stronie spotkania są pokazani pod nazwą nagrania; ty jesteś **Ty**. Zobacz [Przechwytywanie](../capture/capture.md).

## Nagranie, które już masz {#a-recording-you-already-have}

Nagranie zrobione gdzie indziej — telefonem komórkowym, dyktafonem albo w innym systemie — można dodać przez **⋮ → Importuj z plików**. Wybierz jeden lub więcej plików mp3 albo wav; telefon poda, ile zaimportowano, i wymieni te, których nie udało się odczytać jako nagrania. Każde jest archiwizowane dokładnie tak jak wybrane połączenie: spisywane, opracowywane według tych samych [reguł](../ai-processing/processing.md#rules) i znajdowane tym samym wyszukiwaniem.

## Usuwanie nagrania {#deleting-a-recording}

Gdy nagranie zostaje usunięte, znika razem z nim wszystko, co z niego powstało: transkrypcje i opracowania. Jak długo nagrania są przechowywane samoczynnie, ustawia się w [Nagraniach](../recordings.md#retention).
