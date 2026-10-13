---
title: Typowe problemy
sidebar_position: 2
description: "Co sprawdzić, gdy konto nie chce się zarejestrować, nie ma dźwięku, połączenie lub spotkanie nie zostaje nagrane, nie ma transkrypcji, sufler się nie uruchamia albo odnośnik, skrót lub API nic nie robi, a także co znaczą komunikaty samego telefonu."
---

Każdy punkt wskazuje ustawienie, które o tym decyduje. Jeśli odpowiedzi tu nie ma, otwórz [Diagnostykę](/troubleshooting/diagnostics): pokazuje, co telefon i centrala mówią sobie nawzajem.

## Konto nie chce się zarejestrować {#the-account-will-not-register}

Kropka przy koncie w **Ustawienia → Konta** pozostaje szara lub czerwona.

1. Sprawdź **Nazwa użytkownika**, **Hasło** i **Adres serwera** w [formularzu konta](/sip-accounts/setup).
2. Jeśli twoja centrala sprawdza hasło pod inną nazwą niż numer wewnętrzny, wypełnij **Użytkownik uwierzytelniania** w **Ustawienia serwera**.
3. Sprawdź **Transport** i **Port** względem tego, czego oczekuje centrala.
4. Otwórz zakładkę **SIP** w [oknie diagnostyki](/troubleshooting/diagnostics) i przyjrzyj się żądaniu `REGISTER` i odpowiedzi serwera.

## Nie słyszę albo mnie nie słychać {#i-cannot-hear-or-i-cannot-be-heard}

Otwórz [Ustawienia → Urządzenia](/sip-accounts/devices).

- Powiedz coś: pasek pod **Mikrofon** musi się ruszać. Jeśli się nie rusza, wybierz inny mikrofon.
- Naciśnij **Sprawdź** pod **Głośniki**, aby usłyszeć dźwięk na wybranym urządzeniu.
- Sprawdź suwaki **Głośność**. **Wycisz mikrofon** na karcie połączenia i [skrót klawiszowy](/program/shortcuts) **Wycisz mikrofon** wyłączają mikrofon podczas rozmowy.
- Dzwonek może być ustawiony na inne urządzenie niż to, przez które rozmawiasz — **Dzwonek**, druga lista rozwijana.

## Rozmowa brzmi źle albo się nie zaczyna {#the-call-sounds-bad-or-does-not-start}

Kodeki są oferowane w kolejności listy w [Ustawienia → Połączenia](/sip-accounts/calls#audio-formats). Pozostaw włączone kodeki, których używa twoja centrala, i ustaw najlepszy z nich jako pierwszy. Zmiana obowiązuje od następnego połączenia.

## Drugie połączenie nie dzwoni {#a-second-call-does-not-ring}

To, co się dzieje, gdy ktoś dzwoni, kiedy rozmawiasz, ustawia się w [Połączenie oczekujące](/sip-accounts/calls#call-waiting).

## Połączenie nie zostało nagrane {#a-call-was-not-recorded}

- **Ustawienia → Nagrywanie**, pierwsza lista rozwijana, decyduje, które połączenia są nagrywane; domyślne **Ręcznie** nagrywa tylko wtedy, gdy naciśniesz nagrywanie na karcie połączenia. Zobacz [Nagrania](/recordings).
- Nagrywanie zaczyna się, gdy połączenie zostanie odebrane, więc nieodebrane połączenie nie ma pliku.
- Moduł **Nagrywanie** musi być włączony w [Modułach](/application/modules).
- Nagrania są usuwane według granic w sekcji **Przechowywanie**; przypięte nagranie nigdy nie jest usuwane.

## Spotkanie w innej aplikacji nie zostało przechwycone {#a-meeting-in-another-application-was-not-captured}

Zobacz [Przechwytywanie](/capture/).

- **Zezwól na przechwytywanie dźwięku** w **Ustawienia → Przechwytywanie** musi być włączone.
- Gdy **Automatyczne uruchamianie** jest ustawione na **Pytaj mnie** (domyślnie), odpowiedz na pytanie, gdy się pojawi; przy **Nigdy** naciśnij przycisk nagrywania sam.
- Użyj **Sprawdź** w tej samej zakładce: górny słupek musi się ruszać, gdy mówisz, dolny — gdy coś gra.
- Moduł **Przechwytywanie** musi być włączony w [Modułach](/application/modules).

## Jest nagranie, ale nie ma transkrypcji ani podsumowania {#there-is-a-recording-but-no-transcript-or-summary}

- Rozmowa jest spisywana i opracowywana sama tylko wtedy, gdy w [Ustawienia → Przetwarzanie](/ai-processing/processing) włączone jest **Przetwarzaj rozmowy automatycznie**. W przeciwnym razie poproś o to w [oknie nagrań](/interface/recordings).
- Musi być [rozpoznawacz](/ai-processing/transcription) i [model językowy](/ai-processing/processing#language-models), a każdy musi odpowiadać pod swoim adresem.
- Gdy miesięczna **Granica pieniędzy** lub **Granica tokenów** zostanie osiągnięta, reguły automatyczne zatrzymują się do końca miesiąca. To, o co prosisz sam, nigdy nie jest zatrzymywane.
- Kroki w [Ustawienia → Przegląd](/interface/settings-overview) pokazują, co jeszcze trzeba skonfigurować.

## Sufler się nie pojawia albo się nie uruchamia {#the-prompter-does-not-appear-or-does-not-start}

**Sufler** pojawia się na liście u dołu telefonu tylko wtedy, gdy są spełnione trzy warunki: jest rozpoznawacz z polem **Adres dla suflera**, który przeszedł **Sprawdź** w [Ustawienia → Transkrypcja](/ai-processing/transcription#live-recognition-for-the-prompter), jest model językowy i zaznaczono **Zezwalaj na używanie suflera** w [Ustawienia → Sufler](/ai-processing/prompter). Moduł **Sufler** musi być włączony w [Moduły](/application/modules).

Jeśli okno się otwiera, ale sufler się nie uruchamia, wiersz pod jego przyciskami mówi, czego brakuje. [Gdy się nie uruchamia](/interface/prompter#when-it-does-not-start) wymienia wszystkie komunikaty i co zrobić.

## Telefon zniknął, gdy zamknąłem okno {#the-phone-disappeared-when-i-closed-the-window}

Gdy **Pozostaw telefon działający po zamknięciu okna** jest włączone, telefon nadal działa, a połączenia nadal przychodzą. Ikona w obszarze powiadomień (na pasku menu w macOS) przywraca okno. Na pulpicie bez obszaru powiadomień telefon jest zminimalizowany na pasku zadań. Zobacz [Uruchamianie](/program/startup).

## Numer telefonu w przeglądarce lub CRM nie dzwoni {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Naciśnij **Otwieraj odnośniki do połączeń tym telefonem** w [Ustawienia → Uruchamianie](/program/startup#call-links). Kliknięty numer trafia do pola wybierania i tam czeka, chyba że włączone jest **Dzwoń od razu, bez naciskania Zadzwoń**.

## Lampka przycisku pozostaje szara {#a-buttons-lamp-stays-grey}

Centrala nie podaje, czy numer wewnętrzny jest wolny. Przycisk nadal wybiera numer. Zobacz [Przyciski](/sip-accounts/buttons).

## REST API nie odpowiada {#the-rest-api-does-not-answer}

- **Pozwól innym programom na tym komputerze sterować telefonem** musi być włączone w [Ustawienia → Integracja](/integration/rest-api), a moduł **Integracja** w [Modułach](/application/modules).
- Adres to `http://127.0.0.1:8377`, chyba że zmieniłeś **Port**.
- Grupa, której nie otworzyłeś w sekcji **Dostęp**, odpowiada na każde żądanie kodem `404`.
- Jeśli ustawiłeś **Token**, żądania, które zmieniają zapisane dane, muszą go przesyłać w nagłówku `Authorization`.
- Więcej objawów jest w sekcji [Gdy to nie działa](/integration/rest-api#when-it-does-not-work).

## Webhooki nie docierają {#webhooks-do-not-arrive}

Naciśnij **Wyślij zdarzenie testowe** w [Ustawienia → Integracja](/integration/webhooks). Liczniki `webhooks_failed_total` i `webhooks_dropped_total` w REST API pokazują, jak idzie dostarczanie; [Gdy nic nie dociera](/integration/webhooks#when-nothing-arrives) wyjaśnia, co oznacza każdy z nich.

## Skrót nic nie robi {#a-hotkey-does-nothing}

Otwórz [Skróty](/program/shortcuts). Skrót działa, gdy telefon jest programem, którego używasz; aby używać go z każdego programu, zaznacz **Wszędzie**. Kliknij skrót i naciśnij kombinację ponownie, jeśli przejął ją inny program.

## Komunikaty telefonu {#messages-the-phone-shows}

Gdy coś się nie udaje, telefon pisze dlaczego w osobnym wierszu. Wiersz pod listą sam znika po kilku sekundach.

### Połączenie się nie wybiera {#when-a-call-is-not-placed}

| Komunikat | Co zrobić |
| --- | --- |
| *Nie skonfigurowano żadnego konta* | Dodaj konto w [Ustawienia → Konta](/sip-accounts/setup). |
| *Żadne konto nie jest włączone, więc nie ma linii, z której dzwonić.* | Zaznacz pole wyboru konta w **Ustawienia → Konta**. |
| *Żadna linia nie jest jeszcze zarejestrowana.* | Konto jest włączone, ale jeszcze nie zarejestrowane w centrali. Poczekaj, aż jego kropka zrobi się zielona; jeśli nie, zobacz [Konto nie chce się zarejestrować](#the-account-will-not-register). |
| *Trwa już tyle rozmów, ile ten telefon udźwignie.* | Rozłącz jedną z rozmów i zadzwoń ponownie. |
| *Konto, z którego by to zadzwoniono, już nie istnieje.* | Wiersz należy do konta, które zostało w międzyczasie usunięte. Wybierz numer na klawiaturze. |
| *Ten wiersz nie ma numeru do oddzwonienia.* | Dzwoniący ukrył numer, więc nie ma gdzie oddzwonić. |

### Konto się nie łączy {#when-an-account-does-not-connect}

| Komunikat | Co zrobić |
| --- | --- |
| *Nie znaleziono tego adresu serwera. Sprawdź, czy nie ma literówki.* | Sprawdź **Adres serwera** w [formularzu konta](/sip-accounts/setup). |
| *Nie udało się dotrzeć do serwera. Sprawdź adres, port i swoją sieć.* | Sprawdź **Adres serwera**, a także **Transport** i **Port** w **Ustawienia serwera**. SIP może też blokować zapora sieciowa. |
| *Serwer odrzucił tę nazwę użytkownika lub to hasło.* | Sprawdź **Nazwa użytkownika** i **Hasło**. Jeśli centrala sprawdza hasło pod inną nazwą, wypełnij **Użytkownik uwierzytelniania**. |
| *Nie udało się zweryfikować certyfikatu serwera. Jeśli administrator serwera wystawił go sam, odznacz „Weryfikuj certyfikat” w sekcji „Ustawienia serwera”.* | Pojawia się przy połączeniu TLS. Jeśli centrala używa certyfikatu, który sama wystawiła, odznacz **Weryfikuj certyfikat** w **Ustawienia serwera**. |
| *Nie udało się odczytać hasła do tego konta z pęku kluczy. Odblokuj go i połącz się ponownie.* | Odblokuj magazyn haseł komputera (w macOS pęk kluczy), a potem naciśnij **Połącz** przy koncie. |

### W trakcie rozmowy {#during-a-call}

| Komunikat | Co zrobić |
| --- | --- |
| *Brak wspólnego formatu dźwięku* | Centrala i telefon nie mają wspólnego kodeka. Włącz któryś z używanych przez centralę w [Formaty dźwięku](/sip-accounts/calls#audio-formats). |
| *Brak mikrofonu i głośników* | Wybierz urządzenia w [Ustawienia → Urządzenia](/sip-accounts/devices). |
| *Bez nagrywania: na dysku zostało tylko tyle, ile wynosi granica. Zwolnij miejsce albo zmień granicę w ustawieniach.* | Wolne miejsce na dysku spadło do **Próg wolnego miejsca** — zobacz [Nagrania](/recordings). Zwolnij miejsce albo obniż próg. |

### Przy uruchamianiu telefonu {#when-the-phone-starts}

*Nie można odczytać bazy danych* oznacza, że bazę danych utworzyła inna wersja programu i ta nie umie jej odczytać. Zwykle starszą wersję uruchomiono na danych nowszej: ponowne zainstalowanie nowszej wersji otworzy bazę taką, jaka była. **Zacznij od nowa** zamiast tego tworzy pustą bazę — wszystkie kontakty i wszystkie rozmowy w historii przepadają i nie da się tego cofnąć. Zanim go naciśniesz, możesz zachować kopię pliku bazy; [Diagnostyka](/troubleshooting/diagnostics#files) mówi, gdzie on jest.
