---
title: Okno główne
sidebar_position: 1
description: Telefon po lewej, biblioteka i ustawienia po prawej — układ okna głównego AI Softphone.
---

Okno główne to sam telefon. W domyślnym układzie, **Jedno okno**, telefon stoi po lewej, a wszystko inne otwiera się po prawej. [Układ można zmienić](../program/appearance.md).

<Shot name="03_contacts" full alt="Okno główne: telefon po lewej i zakładka Kontakty po prawej" />

## Telefon {#the-phone}

Od góry do dołu po lewej stronie znajdują się:

- pole **Numer**;
- klawiatura i klawisz połączenia;
- plakietki kont;
- przyciski obserwujące inne numery wewnętrzne;
- cztery miejsca, do których można przejść: **Nagrania**, **Kontakty**, **Historia** i **Ustawienia**.

### Wybieranie numeru {#the-dialler}

- **Numer** — wpisz lub wklej numer, pod który chcesz zadzwonić. Ikona zegara na końcu pola otwiera listę numerów, pod które ostatnio dzwoniłeś lub z których do ciebie dzwoniono.
- Okrągłe klawisze **1–9**, **\***, **0** i **#** wpisują numer, a podczas rozmowy wysyłają tony (DTMF).
- Klawisz ze słuchawką wykonuje połączenie. Pozostaje szary, dopóki nie ma numeru.

<Shot name="22_last_calls" full alt="Lista ostatnich połączeń pod polem Numer, obok zakładki Historia" />

Gdy lista ostatnich numerów jest otwarta, w polu widać strzałkę, a klawisz połączenia przesuwa się na jego prawą stronę. Każda pozycja to nazwa albo numer, jeśli dzwoniącego nie ma w [Kontaktach](contacts-history.md), wraz z datą. Czerwona słuchawka oznacza nieodebrane połączenie; liczba w nawiasie — na przykład *Pomoc techniczna (4)* — oznacza kilka połączeń z rzędu z tą samą osobą.

### Plakietki kont {#the-account-chips}

Pod klawiaturą jest po jednej plakietce dla każdego [konta](../sip-accounts/setup.md). Zielona kropka oznacza, że konto jest zarejestrowane w centrali. Wyróżniona plakietka (na obrazku **305 Wsparcie**) to konto, z którego zostanie wykonane następne połączenie; naciśnij inną plakietkę, aby je zmienić. Okrągły czerwony przycisk po prawej stronie plakietek to tryb „nie przeszkadzać”.

### Przyciski {#the-buttons}

Pod plakietkami są [przyciski](../sip-accounts/buttons.md), które utworzyłeś dla współpracowników i linii, każdy z lampką — na obrazkach **Nowak** i **Magazyn**. Naciśnij przycisk, aby wybrać jego numer.

### Nagrania, Kontakty, Historia, Ustawienia {#recordings-contacts-history-settings}

Te cztery pozycje na dole otwierają każda zakładkę po prawej, jedną obok drugiej: [Nagrania](../recordings/recordings-window.md), [Kontakty i historia](contacts-history.md) oraz [Ustawienia](settings-overview.md). Otwarte zakładki pozostają w rzędzie u góry prawej strony.

## Trwająca rozmowa {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Trwająca rozmowa" />

Podczas rozmowy pole numeru przesuwa się na górę z ikoną klawiatury w środku, a rozmowa jest pokazana na karcie:

- stan i czas trwania rozmowy (**W rozmowie · 0:21**), nazwa drugiej strony, **Linia** i nazwa konta, na którym toczy się rozmowa, oraz numer;
- dwa pionowe słupki poziomu po bokach karty, po jednym dla każdego kanału dźwięku;
- rząd przycisków: nagrywanie (kółko), wyciszenie (mikrofon), zawieszenie (pauza) i czerwony przycisk **Rozłącz**;
- drugi rząd: przekazanie (słuchawka ze strzałką) i klawiatura.

Połączenie można przekazać od razu albo po tym, jak najpierw porozmawiasz z osobą.

Jeśli numer jest znany w **Kontaktach**, zamiast numeru pokazuje się nazwa. Te same czynności mają [skróty klawiszowe](../program/shortcuts.md): odbieranie, rozłączanie, zawieszanie i wyciszanie.

## Kilka połączeń naraz {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Kilka połączeń" />

Połączenie przychodzące jest zapowiadane banerem, gdziekolwiek pracujesz, nawet gdy telefon jest ukryty. Nowe połączenie przychodzące pojawia się na własnej karcie nad listą, z zielonym, żółtym i czerwonym przyciskiem oraz wierszem mówiącym, z kim teraz rozmawiasz (**Rozmowa z …**). Lista poniżej pokazuje każde połączenie z jego stanem — **Zawieszone**, **W rozmowie**, **Połączenie przychodzące** — i kontem, na którym się toczy. Ikona pauzy oznacza połączenie zawieszone, a ikona głośnika — to, w którym rozmawiasz.

To, co się dzieje, gdy ktoś dzwoni, kiedy już rozmawiasz, ustawia się w [Ustawieniach połączeń](../sip-accounts/calls.md#call-waiting).

## Konferencja {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konferencja" />

Złączone połączenia pokazują się jako jedna karta **Konferencja** na linii konta. Każdy uczestnik jest wymieniony z czasem w rozmowie i własnym przyciskiem **Rozłącz**. Przyciski poniżej nagrywają, wyciszają i kończą konferencję dla wszystkich; szeroki przycisk na dole rozdziela konferencję z powrotem na osobne połączenia.

## Przechwytywanie {#capture}

Gdy [przechwytywanie z innych aplikacji](../capture/capture.md) jest dozwolone w **Ustawienia → Przechwytywanie**, między plakietkami kont a przyciskami pojawia się pasek.

<Shot name="10_settings_capture" full alt="Pasek przechwytywania u dołu telefonu: Przechwytywanie · gotowe, Nagraj i dwa słupki poziomu" />

- **Przechwytywanie · gotowe** oznacza, że program nasłuchuje, czy w innej aplikacji toczy się rozmowa.
- **Nagraj** ręcznie rozpoczyna przechwytywanie.
- Dwa cienkie słupki pod nim pokazują poziom dźwięku: górny to ty, dolny to to, co odtwarza komputer. Sposób ich rysowania ustawia się w **Obraz w pasku u dołu telefonu**.

Program może też mieszkać w zasobniku (na pasku menu w macOS) i być przywoływany [skrótem klawiszowym](../program/shortcuts.md).
