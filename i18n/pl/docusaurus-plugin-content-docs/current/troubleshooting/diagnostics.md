---
title: Diagnostyka
sidebar_position: 1
description: Okno, które pokazuje każde słowo, jakie telefon i centrala mówią sobie nawzajem, plik dziennika i miejsce, w którym program trzyma swoje pliki.
---

Okno **Diagnostyka** pokazuje, co telefon i centrala mówią sobie nawzajem, w chwili, gdy to mówią. To pierwsze miejsce, do którego warto zajrzeć, gdy konto nie chce się zarejestrować albo połączenie nie dochodzi do skutku, i okno, o którego przesłanie poprosi cię dział IT.

Otwiera się je z **Ustawienia → Diagnostyka** przyciskiem **Otwórz diagnostykę**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Okno Diagnostyka" />

Pokazuje każdy komunikat SIP, który telefon wysyła lub odbiera, w trakcie, gdy to się dzieje, razem ze statystykami dźwięku trwających rozmów. Zbiera dane tylko wtedy, gdy jest otwarte, i po zamknięciu niczego nie zachowuje.

## SIP {#sip}

Zakładka **SIP** to dziennik sygnalizacji.

- Każdy komunikat to wiersz z czasem (z dokładnością do milisekundy), tym, czym jest, i tym, dokąd poszedł: strzałka w prawo to komunikat wysłany przez telefon, strzałka w lewo — odebrany z serwera. Pod nim: `to` lub `from` adres serwera i transport (na przykład *przez UDP*).
- Komunikat można rozwinąć, aby zobaczyć pełne nagłówki (trzeci komunikat na obrazku).
- **Szukaj** znajduje tekst w dzienniku.
- **Wyczyść** go opróżnia.

Przykład na zrzucie ekranu to prawidłowa rejestracja: telefon wysyła `REGISTER`, serwer odpowiada `200 OK (REGISTER)`.

## Połączenia {#calls}

Druga zakładka, **Połączenia**, pokazuje wskaźniki jakości każdej trwającej rozmowy.

## Zakładka Diagnostyka w ustawieniach {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Ustawienia → Diagnostyka" />

### Szczegółowość dziennika {#log-detail}

Lista rozwijana wybiera, ile program zapisuje w swoim pliku dziennika; na obrazku jest to **Szczegółowe**. Działa to od razu, także w rozmowie, która już trwa — a właśnie z niej chcesz mieć zapis. Najbardziej szczegółowe ustawienie zapisuje każdy komunikat SIP. To dużo, ale hasła są usuwane, zanim cokolwiek zostanie zapisane, więc plik można bezpiecznie wysłać ze zgłoszeniem do pomocy technicznej.

**Wyślij kopię do dziennika systemowego** zapisuje dziennik także w dzienniku samego systemu, na komputerze, którego dzienniki są zbierane centralnie. Poniższy plik jest zapisywany w każdym przypadku i to on powinien być dołączony do zgłoszenia.

### Pliki {#files}

Zakładka wymienia, gdzie program trzyma swoje pliki i jak duży jest każdy z nich. W macOS:

| Plik | Gdzie | Zawiera |
| --- | --- | --- |
| Ustawienia | `~/Library/Preferences/ai-softphone/settings.json` | Ustawienia. Nigdy hasła ani tokeny. |
| Baza danych | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontakty, historia, transkrypcje i opracowania. |
| Nagrania | `~/Library/Application Support/ai-softphone/recordings` | Dźwięk nagrań. |
| Dziennik | `~/Library/Logs/ai-softphone/ai-softphone.log` | Dziennik. |

Pod listą **Otwórz** pokazuje dziennik, a **Wyczyść** go opróżnia. Wyczyść dziennik tuż przed odtworzeniem problemu; wyczyszczenia nie można cofnąć.

## Co wysłać do pomocy technicznej {#what-to-send-to-support}

1. Ustaw **Szczegółowość dziennika** na najbardziej szczegółowy poziom.
2. Naciśnij **Wyczyść**, a potem odtwórz problem.
3. Wyślij plik dziennika albo otwórz **Ustawienia → O programie**, napisz do nas stamtąd i zaznacz **Dołącz dziennik** — zobacz [O programie](../application/about.md#feedback).

W przypadku problemu z rejestracją lub połączeniem wyślij też wiersze nieudanej próby z zakładki **SIP**.

Część programu, która za tym wszystkim stoi — śledzenie SIP, statystyki mediów i liczniki — można wyłączyć w [Modułach](../application/modules.md) (**Diagnostyka**).
