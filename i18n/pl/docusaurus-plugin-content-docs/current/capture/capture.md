---
title: Przechwytywanie
sidebar_label: Przechwytywanie z innych aplikacji
sidebar_position: 1
description: "\"Przechwytywanie nagrywa rozmowę prowadzoną w innej aplikacji — Zoomie, Teams, Meet czy dowolnej innej — prosto z komputera.\""
---

**Przechwytywanie** to sposób, w jaki AI Softphone nagrywa rozmowę toczącą się w innym programie, na przykład spotkanie w Zoomie, Teams lub Meet. Nagrywa z samego komputera, trzymając drugą stronę i ciebie na osobnych kanałach, a na końcu czekają ta sama transkrypcja i to samo opracowanie co przy połączeniu.

Program szuka rozmowy, a nie nazwy aplikacji, więc działa ze wszystkim, co ją tworzy.

[Przegląd](../interface/settings-overview.md) ustawień wymienia to w grupie **Przechwytywanie z innych aplikacji** i dzieli na trzy kroki:

1. **Włącz przechwytywanie** — [zezwól na przechwytywanie dźwięku](#turning-capture-on).
2. **Przechwyć rozmowę** — [rozpocznij i zakończ](#capturing-a-conversation) nagrywanie.
3. **Nadaj jej nazwę** — [zmień nazwę](#giving-it-a-name) nagrania.

## Włączanie przechwytywania {#turning-capture-on}

Przechwytywanie jest wyłączone, dopóki na nie nie zezwolisz. Otwórz **Ustawienia → Przechwytywanie**.

<Shot name="10_settings_capture" alt="Ustawienia → Przechwytywanie" />

| Ustawienie | Domyślnie | Co robi |
| --- | --- | --- |
| **Zezwól na przechwytywanie dźwięku** | wyłączone | Pozwala programowi nagrywać dźwięk innych aplikacji. Gdy jest wyłączone, nic nie jest przechwytywane. |
| **Przypominaj mi o poinformowaniu innych o nagrywaniu** | włączone | Pokazuje przypomnienie podczas przechwytywania. Pole wyboru jest szare, dopóki przechwytywanie nie jest dozwolone. |

:::caution
Nagrywane jest wszystko, co odtwarza komputer, nie tylko rozmowa. Ten telefon nie może zapowiedzieć nagrywania na cudzym spotkaniu, więc powiedzenie o tym należy do ciebie.
:::

Część programu, która to robi, to moduł **Przechwytywanie**, *Nagrywanie rozmowy toczącej się w innej aplikacji*. Można go wyłączyć w [Modułach](../application/modules.md).

## Rozpoczynanie przechwytywania {#starting-a-capture}

Gdy przechwytywanie jest dozwolone, na dole [okna głównego](../interface/main-window.md#capture) widać jego stan — **Przechwytywanie · gotowe** — z przyciskiem **Nagraj** po prawej. Naciśnij **Nagraj**, aby rozpocząć ręcznie.

### Automatyczne uruchamianie {#automatic-start}

**Automatyczne uruchamianie** decyduje, co się dzieje, gdy program usłyszy rozmowę w innej aplikacji:

| Wybór | Co się dzieje |
| --- | --- |
| **Nigdy** | Przechwytywanie zaczyna się tylko po naciśnięciu **Nagraj**. |
| **Pytaj mnie** | Program pyta, czy nagrać. Domyślnie. |
| **Zawsze** | Program zaczyna nagrywać sam. |

W sekcji **Aplikacje z własną odpowiedzią** aplikacji można nadać własną odpowiedź — na przykład *Zawsze nagrywaj tę aplikację* z pytania, które zadaje program.

*Pytanie nic nie kosztuje: sekundy przed twoją odpowiedzią są już zachowane.*

### Przed początkiem {#before-the-start}

Suwak **Przed początkiem** określa, ile sekund dźwięku sprzed rozpoczęcia nagrania jest zachowywane, domyślnie **15 sekund**. Jest po to, żeby nic nie przepadło, zanim rozmowa zostanie zauważona: nagranie, które zaczyna się po naciśnięciu **Nagraj** albo po odpowiedzi na pytanie, i tak zaczyna się od słów, które padły wcześniej.

## Przechwytywanie rozmowy {#capturing-a-conversation}

Podczas nagrywania okno główne pokazuje czerwoną kropkę, nazwę nagrania (na przykład **Spotkanie w Zoom**), czas, który upłynął, i oba kanały jako przebiegi.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Nagrywanie spotkania" />

- **Zatrzymaj nagrywanie** je kończy.
- Okno pozostaje widoczne podczas nagrywania i przypomina, aby powiedzieć uczestnikom, że spotkanie jest nagrywane.

### Co pokazuje obraz {#what-the-picture-shows}

Dwa kolejne ustawienia wybierają, jak rysowany jest poziom dźwięku:

| Ustawienie | Domyślnie | Gdzie |
| --- | --- | --- |
| **Obraz w oknie głównym** | Fala | Oba kanały podczas przechwytywania. |
| **Obraz w pasku u dołu telefonu** | Dwa poziomy | Dwa cienkie słupki pod **Przechwytywanie · gotowe**. |

### Sprawdzanie {#testing-it}

W sekcji **Sprawdź** zakładka ma dwa słupki: **Ty** i **Druga strona**. *Górny słupek rusza się, gdy mówisz, dolny — gdy coś gra.* Przed ważnym spotkaniem powiedz słowo i odtwórz dowolny dźwięk, aby zobaczyć, że program słyszy obie strony.

## Nadawanie nazwy {#giving-it-a-name}

Ołówek obok nazwy nagrania pozwala zmienić ją w trakcie nagrywania. Nagranie, któremu nie nadałeś nazwy, jest na liście jako **Inna aplikacja**.

## Gdzie trafia nagranie {#where-the-recording-goes}

Przechwycona rozmowa pojawia się w [oknie nagrań](../interface/recordings.md) jak każda inna, z własną ikoną — oknem zamiast słuchawki — i z tytułem, który nadałeś, albo **Inna aplikacja**.

<Shot name="01_recordings" alt="Przechwycone spotkania w zakładce Nagrania, oznaczone ikoną okna" />

Jest spisywana, podsumowywana, przypisywana do kategorii i oznaczana etykietami przez te same [reguły](../ai-processing/processing.md#rules) co połączenie. W transkrypcji przechwyconego spotkania mówca jest pokazany jako **Inna aplikacja** tam, gdzie przy połączeniu byłaby nazwa drugiej strony; **Szukaj** w bibliotece znajduje także to, co w nim powiedziano.
