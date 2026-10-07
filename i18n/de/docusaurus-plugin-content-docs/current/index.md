---
slug: /
title: Dokumentation zu AI Softphone
sidebar_position: 1
description: Was AI Softphone ist, worauf es läuft und wo jeder Teil des Programms beschrieben ist.
---

[AI Softphone](https://ai-softphone.com/?lang=de) ist ein Softphone für eine IP-Telefonanlage, das außerdem jedes Gespräch in Text und eine schriftliche Zusammenfassung verwandelt. Ein Gespräch kann auf drei Wegen hineinkommen, und alle drei landen in derselben Bibliothek mit derselben Aufnahme, demselben Transkript und derselben Auswertung:

- **ein Anruf**, im Programm getätigt oder angenommen, über jede IP-Telefonanlage oder jeden SIP-Anbieter;
- **eine Besprechung** in Zoom, Teams, Meet oder einer anderen Anwendung, direkt vom Computer aufgenommen;
- **eine Aufnahme, die Sie bereits haben** — vom Mobiltelefon, einem Diktiergerät oder einem anderen System — der Bibliothek hinzugefügt.

Aufnahmen, Transkripte und der Verlauf liegen in einer Datei, die Ihnen gehört. Es braucht weder ein Konto noch ein Abonnement, und das Programm ist freie Software unter der GPL v2.

## Vom Gespräch zur Auswertung {#from-a-conversation-to-a-write-up}

1. Ein Gespräch kommt herein: ein Anruf, eine Besprechung oder eine Datei.
2. Es wird auf zwei Kanälen aufgenommen, sodass das, was Sie gesagt haben, und das, was die Gegenseite gesagt hat, getrennt bleiben.
3. Es wird Sprecher für Sprecher transkribiert, im Gleichlauf mit dem Ton.
4. Das Sprachmodell Ihrer Wahl wertet es aus: Zusammenfassung, Aufgaben, Kategorie, Label und Auffälligkeiten — und Sie können dem Gespräch eine Frage stellen.

## Download und Systemvoraussetzungen {#download-and-system-requirements}

Das Programm ist kostenlos auf [ai-softphone.com](https://ai-softphone.com/?lang=de#download) erhältlich: ein Installer (`.exe`) für Windows, ein Disk-Image (`.dmg`) für macOS und ein AppImage oder ein `.deb` für Linux. Installer, Disk-Image und AppImage setzen keine vorherige Installation voraus — Qt, OpenSSL und die C++-Laufzeit sind darin enthalten. Die Ausnahme ist das `.deb`: Es nutzt die C++-Laufzeit des Systems, siehe unten. Sie benötigen ein SIP-Konto von Ihrem Anbieter oder von der Telefonanlage, die Sie selbst betreiben. Die Aufnahme funktioniert sofort nach der Installation; Transkript und Auswertung brauchen einen Dienst Ihrer Wahl oder ein Modell auf Ihrem eigenen Rechner.

| System | Voraussetzungen |
| --- | --- |
| macOS | macOS 14.4 oder neuer; nur Apple Silicon — ein Intel-Mac kann es nicht öffnen, auch nicht über Rosetta; Metal-Grafik; 160 MB Speicherplatz plus die Aufnahmen. Das System fragt einmal nach dem Mikrofon. |
| Windows | Windows 10 Version 1809 (Build 17763) oder neuer und Windows 11; 64-Bit-Prozessor von Intel oder AMD; Direct3D 11 oder OpenGL 2.1; 250 MB Speicherplatz plus die Aufnahmen. |
| Linux | Ubuntu 22.04 LTS oder neuer, Debian 12 oder neuer und alles in diesem Alter — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU-C-Bibliothek 2.35 oder neuer; 64-Bit-Prozessor von Intel oder AMD; OpenGL 2.1 oder OpenGL ES 2.0, unter X11 oder Wayland; PipeWire oder PulseAudio (ALSA, wo keins von beiden vorhanden ist); 200 MB Speicherplatz plus die Aufnahmen. Das Symbol im Infobereich braucht eine Arbeitsumgebung mit Statusbereich. |

Unter Linux läuft das AppImage auf jeder Distribution dieses Alters: ausführbar machen und starten. Das `.deb` braucht zusätzlich die systemeigene C++-Laufzeit aus GCC 13, die Ubuntu 24.04 und Debian 13 haben, Ubuntu 22.04 aber nicht; auf allem Älteren nehmen Sie das AppImage.

Die Oberfläche gibt es in dreißig Sprachen; sie wird unter [Erscheinungsbild](/program/appearance) gewählt und ohne Neustart gewechselt.

Die Bildschirmfotos in dieser Dokumentation stammen von macOS und werden verkleinert angezeigt: Klicken Sie eines an, um es in voller Größe zu sehen. Auf den anderen Systemen sieht das Programm genauso aus und funktioniert genauso.

## Erste Schritte {#first-steps}

1. [Fügen Sie ein Konto hinzu](sip-accounts/setup.md) für Ihre Telefonanlage oder Ihren SIP-Anbieter.
2. [Wählen Sie Mikrofon und Lautsprecher](sip-accounts/devices.md) und führen Sie einen Testanruf.
3. Legen Sie fest, [welche Anrufe aufgenommen werden](recordings.md).
4. Fügen Sie einen [Spracherkenner](ai-processing/transcription.md) und ein [Sprachmodell](ai-processing/processing.md) hinzu, wenn Sie Transkripte und Auswertungen möchten.

**Einstellungen → Übersicht** führt diese Liste für Sie: Ein grüner Punkt markiert einen erledigten Schritt, ein roter einen, der noch fehlt. Siehe [Übersicht der Einstellungen](interface/settings-overview.md).

## Wo Sie weiterlesen {#where-to-read-next}

| Wenn Sie… | Lesen Sie |
| --- | --- |
| sich in den Fenstern zurechtfinden möchten | [Oberfläche](interface/main-window.md) |
| das Telefon mit Ihrer Telefonanlage verbinden möchten | [Ein SIP-Konto einrichten](sip-accounts/setup.md) |
| Mikrofon, Lautsprecher und Klingelton wählen möchten | [Geräte](sip-accounts/devices.md) |
| Codecs, Anklopfen und Anrufliste einstellen möchten | [Anrufeinstellungen](sip-accounts/calls.md) |
| Kollegen auf Tasten legen möchten | [Tasten](sip-accounts/buttons.md) |
| festlegen möchten, welche Anrufe aufgenommen werden und wie lange | [Aufnahmen](recordings.md) |
| Ihre Gespräche anhören, durchsuchen und lesen möchten | [Aufnahmefenster](interface/recordings.md) |
| eine Besprechung in einer anderen Anwendung aufnehmen möchten | [Mitschnitt](capture/capture.md) |
| den Spracherkenner wählen möchten, der Sprache in Text verwandelt | [Transkription](ai-processing/transcription.md) |
| festlegen möchten, welche KI Ihre Gespräche auswertet und was das kosten darf | [Verarbeitung](ai-processing/processing.md) |
| Kategorien, Label und Auffälligkeiten ändern möchten | [Verzeichnisse](ai-processing/dictionaries.md) |
| Anordnung, Farbschema, Start und Tastenkürzel ändern möchten | [Erscheinungsbild](program/appearance.md), [Start](program/startup.md) und [Tastenkürzel](program/shortcuts.md) |
| ein CRM oder ein anderes Programm anbinden möchten | [Webhooks](integration/webhooks.md) und [Lokale REST-API](integration/rest-api.md) |
| sehen möchten, was Telefon und Telefonanlage miteinander besprechen | [Diagnose](troubleshooting/diagnostics.md) |
| die Ursache eines Problems finden möchten | [Häufige Probleme](troubleshooting/common-problems.md) |
| Teile des Programms abschalten möchten | [Module](application/modules.md) |
| Version, Updates und Inhalt des Nutzungsberichts prüfen möchten | [Über](application/about.md) |

Die Seiten folgen der Reihenfolge der Reiter in den **Einstellungen**.

## Datenschutz {#privacy}

- Standardmäßig bleibt alles auf Ihrem Rechner: Aufnahmen, Transkripte und Verlauf liegen in einer Datei, die Ihnen gehört. Nichts über ein Gespräch — keine Nummer, kein Name, kein Wort des Gesagten — geht irgendwohin, wohin Sie es nicht selbst geschickt haben.
- Kontopasswörter, der Kopfzeilenwert des Webhooks und das API-Token liegen im Schlüsselbund des Betriebssystems, nie in einer Einstellungsdatei.
- Eine neue Version meldet sich, sobald sie erscheint — nie während eines Gesprächs — und wird nur installiert, wenn Sie es sagen.
- Das Programm sendet einen kleinen Nutzungsbericht pro Tag. Bevor der erste hinausgeht, wird Ihnen gezeigt, was er enthält, und Sie wählen, wie viel er trägt: **Einfach** oder **Erweitert**. Er enthält nie Nummern, Kontakte, die Adresse Ihrer Telefonanlage oder etwas, das in einem Gespräch gesagt wurde. Die vollständige Liste steht unter [Über](/application/about#telemetry).
- Das Programm ist freie Software unter der GPL v2.
