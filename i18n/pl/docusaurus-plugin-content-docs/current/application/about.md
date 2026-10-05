---
title: O programie
sidebar_position: 2
description: Wersja, aktualizacje, twój kraj, licencja, zawartość raportu użycia, formularz opinii i z czego zbudowany jest program.
---

**Ustawienia → O programie** zawiera wszystko o samym programie.

<Shot name="20_settings_about" alt="Ustawienia → O programie" />

## Wersja i kraj {#version-and-country}

U góry jest nazwa, **Wersja** (na obrazku 1.0.0) i odnośnik do strony [ai-softphone.com](https://ai-softphone.com/).

**Kraj** mówi programowi, gdzie jesteś. Pomaga wybrać najlepszy serwer aktualizacji i otwiera drogę do usług językowych i mowy hostowanych w twoim kraju. **Wykryj automatycznie** go wypełnia.

## Aktualizacje {#updates}

Zakładka mówi, czy masz najnowszą wersję i kiedy ostatnio to sprawdzano. **Sprawdź aktualizacje** sprawdza teraz.

**Sprawdzaj aktualizacje automatycznie**, domyślnie włączone, sprawdza raz dziennie i wkrótce po uruchomieniu telefonu. Prosi serwer o jeden mały plik, a nic nie jest pobierane ani instalowane bez twojej zgody.

## Licencja {#licence}

Program jest wolnym oprogramowaniem na licencji GPL-2.0-or-later. Jest dostarczany bez żadnej gwarancji, a ty możesz go rozpowszechniać na warunkach tej licencji; pełny tekst jest dołączony w pliku o nazwie `LICENSE`.

## Telemetria {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Ustawienia → O programie: co zawiera raport użycia" />

Program wysyła jeden mały raport użycia dziennie. Zanim wyśle pierwszy, pokazuje, co w nim jest, a zakładka to wymienia:

| | Co jest wysyłane |
| --- | --- |
| **Zawsze wysyłane** | Że aplikacja została uruchomiona, jej wersja i język interfejsu; wersja systemu operacyjnego, ustawienia regionalne, kraj i strefa czasowa. |
| **Wysyłane dodatkowo, w trybie Rozszerzonym** | Liczniki połączeń i przechwyconych rozmów; producent i wersja podłączonej centrali, nigdy jej adres; ile kroków [Przeglądu](/interface/settings-overview) zrobiono i wybrany układ. |
| **Nigdy nie wysyłane, w żadnym trybie** | Numery, pod które dzwoniłeś lub z których do ciebie dzwoniono; konta, hasła ani nic z pęku kluczy; kontakty, rozmowy, transkrypcje ani nagrania; nic, co wpisałeś, i żadne prywatne dane z komputera. |

Każda instalacja tworzy sobie jeden losowy identyfikator, aby raporty z tej samej kopii programu można było rozpoznać jako jedną. Nie wywodzi się on z niczego, co dotyczy ciebie lub twojego komputera, i nikogo nie wskazuje — ale ponieważ się utrzymuje, raporty, które go niosą, można ze sobą powiązać. Dlatego są one pseudonimowe, a nie anonimowe.

Podstawą raportu podstawowego jest prawnie uzasadniony interes: wiedza o tym, które wersje są w użyciu, pozwala, aby poprawka dotarła do tych, którzy jej potrzebują. Wszystko, co dodaje raport rozszerzony, jest w nim dlatego, że to wybrałeś, i możesz to tutaj zmienić w każdej chwili.

### Raportowanie {#reporting}

| Wybór | |
| --- | --- |
| **Rozszerzony** | Raport podstawowy i to, co wymienia *Wysyłane dodatkowo*. Wybrany na obrazku. |
| **Podstawowy** | Tylko to, co jest *Zawsze wysyłane*. |
| **Wyłączone** | Żadnego raportu. Dostępne tylko w wersji Enterprise; w innych ta opcja jest szara. |

## Opinia {#feedback}

<Shot name="20c_settings_about_bottom" alt="Ustawienia → O programie: formularz opinii i komponenty, z których zbudowany jest program" />

Formularz, który pisze do twórców bez wychodzenia z programu.

| Pole | |
| --- | --- |
| **Temat** i **Wiadomość** | To, co chcesz powiedzieć. |
| **Twoje imię** i **Adres do odpowiedzi** | Oba są opcjonalne. Bez adresu nie ma jak odpowiedzieć. |
| **Dołącz dziennik** | Dodaje końcówkę dziennika, około 512 kB. Zobacz [Diagnostyka](/troubleshooting/diagnostics). |

**Wyślij** pozostaje szary, dopóki nie ma czego wysłać.

## Zbudowano z {#built-with}

Komponenty, na których zbudowano program, każdy ze swoją licencją: Qt 6 (GPL-2.0 lub GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (domena publiczna), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) i klient PulseAudio (LGPL-2.1-or-later). Każdy jest używany na licencji podanej obok; gdy komponent oferuje kilka, wybrana jest ta wymieniona.
