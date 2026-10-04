---
title: Anrufeinstellungen
sidebar_position: 3
description: Die der Telefonanlage angebotenen Codecs, was passiert, wenn ein zweiter Anruf kommt, Wahlwiederholung und wie lange die Anrufliste aufbewahrt wird.
---

**Einstellungen → Anrufe** enthält die Einstellungen, die zu jedem Anruf gehören, egal auf welchem Konto.

## Tonformate {#audio-formats}

<Shot name="07_settings_calls" alt="Einstellungen → Anrufe: die Tonformate" />

Die Liste der Codecs, die das Telefon der Gegenseite anbietet. Die Codecs werden *in dieser Reihenfolge angeboten*, und die Gegenseite wählt aus dem, was Sie anbieten: Je höher ein Codec steht, desto wahrscheinlicher wird er verwendet.

- Das **Kontrollkästchen** schaltet einen Codec ein oder aus. Ein ausgeschalteter Codec wird nicht angeboten.
- **▲** und **▼** schieben ihn in der Liste nach oben oder unten.
- *Breitband* rechts markiert einen Codec mit einem größeren Tonumfang als eine Telefonleitung: Die Stimme ist klarer.

| Codec | Abtastrate | Standardmäßig an |
| --- | --- | --- |
| **opus** | 48 kHz, Stereo, Breitband | ja |
| **G722** | 16 kHz, Breitband | ja |
| **PCMU** | 8 kHz | ja |
| **PCMA** | 8 kHz | ja |
| **speex** | 16 kHz, Breitband | nein |
| **speex** | 8 kHz | nein |
| **speex** | 32 kHz, Breitband | nein |
| **iLBC** | 8 kHz | nein |
| **GSM** | 8 kHz | nein |
| **L16** | 44 kHz, Stereo, Breitband | nein |
| **L16** | 44 kHz, Breitband | nein |

Die Tabelle steht in der Reihenfolge, mit der das Programm ausgeliefert wird.

Die Codecs werden zu Beginn eines Gesprächs ausgehandelt, eine Änderung gilt also ab Ihrem nächsten Anruf. Klingt ein Gespräch schlecht, lassen Sie nur die Codecs an, die Ihre Telefonanlage verwendet.

## Anklopfen {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Einstellungen → Anrufe: Anklopfen, Wahlwiederholung und Verlauf" />

*Was passiert, wenn jemand anruft, während Sie schon telefonieren.* Die Auswahlliste legt es fest; Standard ist **Zweiten Anruf klingeln lassen**. Eine Durchsage (Intercom) der eigenen Telefonanlage kommt immer durch, was auch immer Sie wählen — so erreicht ein in einem CTI-Panel getätigter Anruf dieses Telefon.

## Wahlwiederholung {#autodial}

Kommt ein Anruf nicht durch, bietet seine Karte an, weiter zu wählen, bis es klappt. Zwei Schieberegler legen fest, wie:

- **Warten zwischen Versuchen** — standardmäßig 15 Sekunden;
- **Aufgeben nach** — standardmäßig 30 Minuten.

## Verlauf {#history}

Eine Anrufliste ist ein Beleg, deshalb wird nichts daraus entfernt, solange Sie es hier nicht sagen.

- **Aufbewahrungsdauer** wählt, wie lange [die Anrufliste](/interface/contacts-history#history) einen Anruf behält. Standard ist **Immer**.
- **Anrufliste leeren** löscht alle Anrufe auf einmal, unabhängig von der Aufbewahrungsdauer. Das lässt sich nicht rückgängig machen.
