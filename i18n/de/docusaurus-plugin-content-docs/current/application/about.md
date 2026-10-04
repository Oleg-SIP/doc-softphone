---
title: Über
sidebar_position: 2
description: Die Version, Updates, Ihr Land, die Lizenz, was der Nutzungsbericht enthält, das Rückmeldeformular und woraus das Programm gebaut ist.
---

**Einstellungen → Über** enthält alles über das Programm selbst.

<Shot name="20_settings_about" alt="Einstellungen → Über" />

## Version und Land {#version-and-country}

Oben stehen der Name, die **Version** (im Bild 1.0.1) und ein Link zur Website [ai-softphone.com](https://ai-softphone.com/?lang=de).

**Land** sagt dem Programm, wo Sie sind. Es hilft, den besten Update-Server zu wählen, und öffnet den Weg zu Sprach- und Spracherkennungsdiensten in Ihrem Land. **Automatisch erkennen** füllt es aus. Im Bild ist **Deutschland** gewählt.

## Updates {#updates}

Der Reiter sagt, ob Sie die neueste Version haben und wann zuletzt geprüft wurde. **Nach Updates suchen** prüft sofort.

**Automatisch nach Updates suchen**, standardmäßig an, prüft einmal am Tag und kurz nach dem Start des Telefons. Es fragt einen Server nach einer kleinen Datei, und nichts wird heruntergeladen oder installiert, ohne dass Sie es sagen.

## Lizenz {#licence}

Das Programm ist freie Software unter der GPL-2.0-or-later. Es kommt ohne jede Gewährleistung, und Sie dürfen es unter den Bedingungen dieser Lizenz weitergeben; der vollständige Text liegt in der Datei `LICENSE`.

## Telemetrie {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Einstellungen → Über: was der Nutzungsbericht enthält" />

Das Programm sendet einen kleinen Nutzungsbericht pro Tag. Bevor der erste hinausgeht, wird Ihnen gezeigt, was er enthält, und der Reiter listet es auf:

| | Was gesendet wird |
| --- | --- |
| **Immer gesendet** | Dass die Anwendung gestartet wurde, ihre Version und die Oberflächensprache; die Version des Betriebssystems, Gebietsschema, Land und Zeitzone. |
| **Zusätzlich gesendet, im Modus Erweitert** | Die Zähler der Anrufe und der mitgeschnittenen Gespräche; Hersteller und Version der verbundenen Telefonanlage, nie ihre Adresse; wie viele Schritte der [Übersicht](/interface/settings-overview) erledigt sind und die gewählte Anordnung. |
| **Nie gesendet, in keinem Modus** | Die Nummern, die Sie gewählt haben oder von denen Sie angerufen wurden; Konten, Passwörter oder irgendetwas aus dem Schlüsselbund; Kontakte, Gespräche, Transkripte oder Aufnahmen; alles, was Sie getippt haben, und alle privaten Daten auf dem Rechner. |

Jede Installation erzeugt für sich eine zufällige Kennung, damit Berichte derselben Programmkopie als zusammengehörig erkannt werden. Sie ist aus nichts über Sie oder Ihren Rechner abgeleitet und nennt niemanden — aber weil sie bleibt, lassen sich die Berichte, die sie trägt, miteinander verknüpfen. Das macht sie pseudonym, nicht anonym.

Der einfache Bericht stützt sich auf ein berechtigtes Interesse: Zu wissen, welche Versionen im Einsatz sind, ist das, was eine Korrektur zu den Menschen bringt, die sie brauchen. Alles, was der erweiterte Bericht hinzufügt, ist da, weil Sie es gewählt haben, und Sie können das hier jederzeit ändern.

### Berichte {#reporting}

| Auswahl | |
| --- | --- |
| **Erweitert** | Der einfache Bericht und das, was *Zusätzlich gesendet* aufführt. Im Bild gewählt. |
| **Einfach** | Nur das, was *Immer gesendet* wird. |
| **Abgeschaltet** | Gar kein Bericht. Nur in der Enterprise-Edition verfügbar; sonst ist die Option grau. |

## Rückmeldung {#feedback}

<Shot name="20c_settings_about_bottom" alt="Einstellungen → Über: das Rückmeldeformular und die Komponenten, aus denen das Programm gebaut ist" />

Ein Formular, das an die Entwickler schreibt, ohne das Programm zu verlassen.

| Feld | |
| --- | --- |
| **Betreff** und **Nachricht** | Was Sie sagen möchten. |
| **Ihr Name** und **Adresse für eine Antwort** | Beides ist freiwillig. Ohne Adresse gibt es keine Möglichkeit zu antworten. |
| **Protokoll anhängen** | Fügt das Ende des Protokolls an, etwa 512 kB. Siehe [Diagnose](/troubleshooting/diagnostics). |

**Senden** bleibt grau, bis es etwas zu senden gibt.

## Gebaut mit {#built-with}

Die Komponenten, auf denen das Programm aufbaut, jede mit ihrer Lizenz: Qt 6 (GPL-2.0 oder GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (Public Domain), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) und PulseAudio client (LGPL-2.1-or-later). Jede wird unter der danebenstehenden Lizenz verwendet; wo eine Komponente mehrere anbietet, ist die genannte die gewählte.
