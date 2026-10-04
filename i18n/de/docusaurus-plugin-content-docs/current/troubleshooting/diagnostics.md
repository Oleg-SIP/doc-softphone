---
title: Diagnose
sidebar_position: 1
description: Das Fenster, das jedes Wort zeigt, das Telefon und Telefonanlage miteinander wechseln, die Protokolldatei und wo das Programm seine Dateien ablegt.
---

Das Fenster **Diagnose** zeigt, was Telefon und Telefonanlage einander sagen, während sie es sagen. Es ist die erste Anlaufstelle, wenn sich ein Konto nicht anmeldet oder ein Anruf nicht zustande kommt, und das Fenster, um das Sie eine IT-Abteilung bitten wird.

Es öffnet sich unter **Einstellungen → Diagnose** mit der Taste **Diagnose öffnen**.

<Shot src="https://ai-softphone.com/screenshots/macos/de/light/diagnostics.png" alt="Das Fenster Diagnose" />

Es zeigt jede SIP-Nachricht, die das Telefon sendet oder empfängt, während es geschieht, zusammen mit der Tonstatistik der laufenden Gespräche. Es sammelt nur, solange es geöffnet ist, und behält nach dem Schließen nichts.

## SIP {#sip}

Der Reiter **SIP** ist das Protokoll der Signalisierung.

- Jede Nachricht ist eine Zeile mit der Uhrzeit (auf die Millisekunde), was sie ist und wohin sie ging: Ein Pfeil nach rechts ist vom Telefon gesendet, ein Pfeil nach links vom Server empfangen. Darunter: `to` oder `from` die Adresse des Servers und der Transport (zum Beispiel *over UDP*).
- Eine Nachricht lässt sich aufklappen, um ihre Kopfzeilen vollständig zu zeigen (die dritte Nachricht im Bild).
- **Suchen** findet Text im Protokoll.
- **Leeren** leert es.

Das Beispiel im Bildschirmfoto ist eine gesunde Anmeldung: Das Telefon sendet `REGISTER`, der Server antwortet `200 OK (REGISTER)`.

## Anrufe {#calls}

Der zweite Reiter, **Anrufe**, zeigt Qualitätsmetriken für jedes laufende Gespräch.

## Der Reiter Diagnose in den Einstellungen {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Einstellungen → Diagnose" />

### Protokolltiefe {#log-detail}

Die Auswahlliste wählt, wie viel das Programm in seine Protokolldatei schreibt; im Bild ist es **Ausführlich**. Sie wirkt sofort, auch bei einem bereits laufenden Gespräch — also bei dem, von dem Sie die Aufzeichnung wollen. Die ausführlichste Stufe schreibt jede SIP-Nachricht auf. Das ist umfangreich, aber Passwörter werden entfernt, bevor etwas geschrieben wird, die Datei lässt sich also gefahrlos mit einer Supportanfrage senden.

**Eine Kopie an das Systemprotokoll senden** schreibt das Protokoll zusätzlich in das systemeigene Protokoll, für einen Rechner, dessen Protokolle zentral gesammelt werden. Die Datei unten wird so oder so geschrieben, und sie ist die, die Sie einer Supportanfrage anhängen.

### Dateien {#files}

Der Reiter listet, wo das Programm seine Dateien ablegt und wie groß jede ist. Unter macOS:

| Datei | Ort | Enthält |
| --- | --- | --- |
| Einstellungen | `~/Library/Preferences/ai-softphone/settings.json` | Die Einstellungen. Nie Passwörter oder Tokens. |
| Datenbank | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontakte, Verlauf, Transkripte und Auswertungen. |
| Aufnahmen | `~/Library/Application Support/ai-softphone/recordings` | Der Ton der Aufnahmen. |
| Protokoll | `~/Library/Logs/ai-softphone/ai-softphone.log` | Das Protokoll. |

Unter der Liste zeigt **Öffnen** das Protokoll und **Leeren** leert es. Leeren Sie das Protokoll unmittelbar, bevor Sie ein Problem nachstellen; Leeren lässt sich nicht rückgängig machen.

## Was Sie dem Support senden {#what-to-send-to-support}

1. Stellen Sie die **Protokolltiefe** auf die ausführlichste Stufe.
2. Drücken Sie **Leeren** und stellen Sie dann das Problem nach.
3. Senden Sie die Protokolldatei, oder öffnen Sie **Einstellungen → Über**, schreiben Sie uns dort und kreuzen Sie **Protokoll anhängen** an — siehe [Über](../application/about.md#feedback).

Bei einem Problem mit der Anmeldung oder einem Anruf senden Sie auch die Zeilen des fehlgeschlagenen Versuchs aus dem Reiter **SIP**.

Der Teil des Programms hinter all dem — SIP-Trace, Medienstatistik und Zähler — lässt sich unter [Module](../application/modules.md) abschalten (**Diagnose**).
