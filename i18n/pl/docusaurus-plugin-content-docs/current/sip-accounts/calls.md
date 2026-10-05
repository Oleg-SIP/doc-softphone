---
title: Ustawienia połączeń
sidebar_position: 3
description: Kodeki oferowane centrali, co się dzieje, gdy przychodzi drugie połączenie, automatyczne ponawianie i jak długo przechowywana jest historia połączeń.
---

**Ustawienia → Połączenia** zawiera ustawienia dotyczące każdego połączenia, niezależnie od konta, na którym się toczy.

## Formaty dźwięku {#audio-formats}

<Shot name="07_settings_calls" alt="Ustawienia → Połączenia: formaty dźwięku" />

Lista kodeków, które telefon oferuje drugiej stronie. Kodeki są *oferowane w tej kolejności*, a druga strona wybiera z tego, co oferujesz: im wyżej stoi kodek, tym większa szansa, że zostanie użyty.

- **Pole wyboru** włącza lub wyłącza kodek. Wyłączony kodek nie jest oferowany.
- **▲** i **▼** przesuwają go w górę lub w dół listy.
- *szerokopasmowy* po prawej oznacza kodek o szerszym zakresie dźwięku niż linia telefoniczna: głos jest wyraźniejszy.

| Kodek | Częstotliwość próbkowania | Domyślnie włączony |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, szerokopasmowy | tak |
| **G722** | 16 kHz, szerokopasmowy | tak |
| **PCMU** | 8 kHz | tak |
| **PCMA** | 8 kHz | tak |
| **speex** | 16 kHz, szerokopasmowy | nie |
| **speex** | 8 kHz | nie |
| **speex** | 32 kHz, szerokopasmowy | nie |
| **iLBC** | 8 kHz | nie |
| **GSM** | 8 kHz | nie |
| **L16** | 44 kHz, stereo, szerokopasmowy | nie |
| **L16** | 44 kHz, szerokopasmowy | nie |

Tabela jest w kolejności, w jakiej program jest dostarczany.

Kodeki uzgadnia się na początku połączenia, więc zmiana obowiązuje od następnego połączenia. Jeśli rozmowa brzmi źle, pozostaw włączone tylko kodeki, których używa twoja centrala.

## Połączenie oczekujące {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Ustawienia → Połączenia: połączenie oczekujące, automatyczne ponawianie i historia" />

*Co się dzieje, gdy ktoś dzwoni, kiedy już rozmawiasz.* Wybiera to lista rozwijana; domyślnie jest to **Niech drugie połączenie dzwoni**. Wywołanie interkomowe z twojej własnej centrali zawsze przechodzi, niezależnie od wyboru — w ten sposób połączenie wykonane z panelu CTI dociera do tego telefonu.

## Automatyczne ponawianie {#autodial}

Gdy połączenie nie może dojść do skutku, jego karta proponuje dalsze wybieranie, aż się uda. Dwa suwaki ustawiają, jak:

- **Odstęp między próbami** — domyślnie 15 sekund;
- **Poddaj się po** — domyślnie 30 minutach.

## Historia {#history}

Historia połączeń jest dowodem, więc nic z niej nie znika, dopóki tego tutaj nie powiesz.

- **Okres przechowywania** wybiera, jak długo [historia połączeń](/interface/contacts-history#history) przechowuje połączenie. Domyślnie **Zawsze**.
- **Wyczyść historię połączeń** usuwa wszystkie połączenia naraz, niezależnie od okresu. Nie można tego cofnąć.
