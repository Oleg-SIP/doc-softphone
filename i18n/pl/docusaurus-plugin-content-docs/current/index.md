---
slug: /
title: Dokumentacja AI Softphone
sidebar_position: 1
description: Czym jest AI Softphone, na czym działa i gdzie opisano każdą część programu.
---

[AI Softphone](https://ai-softphone.com/) to softphone dla centrali IP, który dodatkowo zamienia każdą rozmowę w tekst i pisemne podsumowanie. Rozmowa może do niego trafić na trzy sposoby i wszystkie trzy lądują w tej samej bibliotece, z tym samym nagraniem, transkrypcją i opracowaniem:

- **połączenie** wykonane lub odebrane w programie, przez dowolną centralę IP lub operatora SIP;
- **spotkanie** w Zoomie, Teams, Meet czy dowolnej innej aplikacji, nagrane z samego komputera;
- **nagranie, które już masz** — z telefonu komórkowego, dyktafonu lub innego systemu — dodane do biblioteki.

Nagrania, transkrypcje i historia są przechowywane w pliku, który należy do ciebie. Nie potrzeba konta ani subskrypcji, a program jest wolnym oprogramowaniem na licencji GPL v2.

## Od rozmowy do opracowania {#from-a-conversation-to-a-write-up}

1. Przychodzi rozmowa: połączenie, spotkanie albo plik.
2. Jest nagrywana na dwóch kanałach, więc to, co powiedziałeś ty, i to, co powiedziała druga strona, pozostaje rozdzielone.
3. Jest spisywana, mówca po mówcy, zsynchronizowana z dźwiękiem.
4. Wybrany przez ciebie model językowy ją opracowuje: podsumowanie, zadania, kategoria, etykiety i sygnały ostrzegawcze — a rozmowie możesz zadać pytanie.

## Pobieranie i wymagania systemowe {#download-and-system-requirements}

Program można pobrać bezpłatnie z [ai-softphone.com](https://ai-softphone.com/#download): instalator (`.exe`) dla Windows, obraz dysku (`.dmg`) dla macOS oraz AppImage lub `.deb` dla Linuksa. Instalator, obraz dysku i AppImage nie wymagają wcześniejszej instalacji niczego innego — Qt, OpenSSL i środowisko uruchomieniowe C++ są w nich zawarte. Wyjątkiem jest `.deb`: korzysta ze środowiska uruchomieniowego C++ samego systemu, zob. niżej. Potrzebujesz konta SIP od swojego operatora albo z centrali, którą prowadzisz sam. Nagrywanie działa od razu po instalacji programu; transkrypcja i opracowanie wymagają wybranej przez ciebie usługi albo modelu na twoim komputerze.

| System | Wymagania |
| --- | --- |
| macOS | macOS 14.4 lub nowszy; tylko Apple silicon — Mac z procesorem Intel nie może go otworzyć, nawet przez Rosettę; grafika Metal; 160 MB miejsca na dysku plus nagrania. System raz prosi o dostęp do mikrofonu. |
| Windows | Windows 10 w wersji 1809 (kompilacja 17763) lub nowszej oraz Windows 11; 64-bitowy procesor Intel lub AMD; Direct3D 11 lub OpenGL 2.1; 250 MB miejsca na dysku plus nagrania. |
| Linux | Ubuntu 22.04 LTS lub nowsze, Debian 12 lub nowszy i wszystko z tego okresu — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; biblioteka GNU C 2.35 lub nowsza; 64-bitowy procesor Intel lub AMD; OpenGL 2.1 lub OpenGL ES 2.0, na X11 lub Waylandzie; PipeWire lub PulseAudio (ALSA, gdy nie ma żadnego z nich); 200 MB miejsca na dysku plus nagrania. Ikona w zasobniku wymaga pulpitu z obszarem powiadomień o stanie. |

Na Linuksie AppImage działa w każdej dystrybucji z tego okresu: nadaj jej prawo wykonywania i uruchom. Pakiet `.deb` wymaga dodatkowo systemowego środowiska uruchomieniowego C++ z GCC 13, które mają Ubuntu 24.04 i Debian 13, a nie ma Ubuntu 22.04; na czymkolwiek starszym użyj AppImage.

Interfejs jest dostępny w trzydziestu językach; język wybiera się w zakładce [Wygląd](/program/appearance) i zmienia bez ponownego uruchamiania.

Zrzuty ekranu w tej dokumentacji wykonano w macOS i pokazano w małym rozmiarze: kliknij zrzut, aby zobaczyć go w pełnym rozmiarze. W innych systemach program wygląda i działa tak samo.

## Pierwsze kroki {#first-steps}

1. [Dodaj konto](sip-accounts/setup.md) dla swojej centrali lub operatora SIP.
2. [Wybierz mikrofon i głośniki](sip-accounts/devices.md) i wykonaj połączenie testowe.
3. Zdecyduj, [które połączenia są nagrywane](recordings/call-recording.md).
4. Dodaj [rozpoznawacz](ai-processing/transcription.md) i [model językowy](ai-processing/processing.md), jeśli chcesz mieć transkrypcje i opracowania.

**Ustawienia → Przegląd** prowadzi tę listę za ciebie: zielona kropka oznacza krok zrobiony, czerwona — krok, który został. Zobacz [Przegląd ustawień](interface/settings-overview.md).

## Co czytać dalej {#where-to-read-next}

| Jeśli chcesz… | Przeczytaj |
| --- | --- |
| Odnaleźć się w oknach | [Interfejs](interface/main-window.md) |
| Połączyć telefon z centralą | [Konfigurowanie konta SIP](sip-accounts/setup.md) |
| Wybrać mikrofon, głośniki i dzwonek | [Urządzenia](sip-accounts/devices.md) |
| Ustawić kodeki, połączenie oczekujące i historię połączeń | [Ustawienia połączeń](sip-accounts/calls.md) |
| Umieścić współpracowników na przyciskach jednego dotknięcia | [Przyciski](sip-accounts/buttons.md) |
| Zdecydować, które połączenia są nagrywane i jak długo | [Nagrywanie połączeń](recordings/call-recording.md) |
| Słuchać, przeszukiwać i czytać swoje rozmowy | [Okno nagrań](recordings/recordings-window.md) |
| Nagrać spotkanie odbywające się w innej aplikacji | [Przechwytywanie](capture/capture.md) |
| Wybrać rozpoznawacz, który zamienia mowę w tekst | [Transkrypcja](ai-processing/transcription.md) |
| Zdecydować, która SI opracowuje twoje rozmowy i ile to może kosztować | [Przetwarzanie](ai-processing/processing.md) |
| Zmienić kategorie, etykiety i sygnały ostrzegawcze | [Słowniki](ai-processing/dictionaries.md) |
| Zmienić układ, motyw, uruchamianie i skróty | [Wygląd](program/appearance.md), [Uruchamianie](program/startup.md) i [Skróty](program/shortcuts.md) |
| Podłączyć CRM lub inny program | [Webhooki](integration/webhooks.md) i [Lokalne REST API](integration/rest-api.md) |
| Zobaczyć, co telefon i centrala mówią sobie nawzajem | [Diagnostyka](troubleshooting/diagnostics.md) |
| Znaleźć przyczynę problemu | [Typowe problemy](troubleshooting/common-problems.md) |
| Wyłączyć części programu | [Moduły](application/modules.md) |
| Sprawdzić wersję, aktualizacje i zawartość raportu użycia | [O programie](application/about.md) |

Strony są ułożone w kolejności zakładek w **Ustawieniach**.

## Prywatność {#privacy}

- Domyślnie wszystko zostaje na twoim komputerze: nagrania, transkrypcje i historia znajdują się w pliku, który należy do ciebie. Nic z rozmowy — ani numer, ani nazwisko, ani słowo z tego, co powiedziano — nie trafia nigdzie, dokąd sam tego nie wysłałeś.
- Hasła do kont, wartość nagłówka webhooka i token API są przechowywane w pęku kluczy systemu operacyjnego, nigdy w pliku ustawień.
- Nowa wersja zgłasza się, gdy się pojawi — nigdy podczas rozmowy — i instaluje się dopiero wtedy, gdy na to pozwolisz.
- Program wysyła jeden mały raport użycia dziennie. Zanim wyśle pierwszy, pokazuje, co w nim jest, a ty wybierasz, ile ma zawierać: **Podstawowy** albo **Rozszerzony**. Nigdy nie zawiera numerów, kontaktów, adresu twojej centrali ani niczego, co powiedziano w rozmowie. Pełna lista jest w zakładce [O programie](/application/about#telemetry).
- Program jest wolnym oprogramowaniem na licencji GPL v2.
