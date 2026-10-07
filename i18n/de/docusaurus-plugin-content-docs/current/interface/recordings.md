---
title: Aufnahmefenster
sidebar_position: 2
description: Die Bibliothek der Gespräche — filtern, abspielen, Transkript und Auswertung lesen.
---

**Aufnahmen** ist der Ort, an dem jedes Gespräch lebt, egal wie es hereinkam: ein Anruf, eine aus einer anderen Anwendung mitgeschnittene Besprechung oder eine importierte Datei. Bei jedem ist die Auswertung bereits fertig.

<Shot name="01_recordings" alt="Der Reiter Aufnahmen: die Liste der Gespräche" />

## Ein Gespräch finden {#finding-a-conversation}

Die Leiste oben hat vier Filter, ein Suchfeld und ein Menü:

| Element | Grenzt die Liste ein nach |
| --- | --- |
| **Art** | der Art, wie das Gespräch hereinkam |
| **Zeitraum** | dem Datum |
| **Kategorie** | der Kategorie, unter der es abgelegt wurde — siehe [Verzeichnisse](../ai-processing/dictionaries.md) |
| **Markierung** | den Markierungen, die es trägt |
| **Suchen** | dem, was darin gesagt wurde — die Suche geht durch die Transkripte von allem, was Sie aufgenommen haben |

Die Taste **⋮** rechts in der Leiste öffnet weitere Aktionen für die Liste: **Aus Datei(en) importieren**, **Als CSV exportieren** und **Im Browser öffnen**.

## Die Liste {#the-list}

Jede Zeile zeigt:

- ein Symbol für die Art des Gesprächs: einen Hörer für einen Anruf, ein Fenster für eine Besprechung in einer anderen Anwendung;
- einen Titel — den Namen der Gegenseite, die Nummer oder **Eine andere Anwendung** für eine mitgeschnittene Besprechung — und darunter das Datum und die Zusammenfassung in einer Zeile;
- rechts die Kategorie mit ihrer Bewertung (eine Zahl, zum Beispiel *Support · 2*), dann die Label und am Ende die Dauer.

Rot gezeichnete Label sind **Auffälligkeiten** (im Bild *Verärgerter Kunde* und *Abwanderungsgefahr*); die anderen sind gewöhnliche Label (*Beschwerde*, *Rückruf zugesagt*). Ein Gespräch ohne Zusammenfassung und Kategorie ist noch nicht ausgewertet — im Bild die erste Zeile.

## Der Player {#the-player}

Wählen Sie eine Zeile aus, um den Player unter der Liste zu öffnen.

<Shot name="02_recording_details" alt="Eine ausgewählte Aufnahme: Player und Transkript unter der Liste" />

- Die zwei Wellenformen sind die zwei Kanäle der Aufnahme, einer für jede Seite des Gesprächs. Der Balken darunter scrollt eine lange Aufnahme.
- **▶** spielt ab und pausiert; die Zeiten links sind Position und Gesamtlänge.
- **1×** ändert die Geschwindigkeit; **Beide** wählt, welchen Kanal Sie hören.
- Die Diskettentaste speichert den Ton, **×** schließt den Player.

## Transkript und Auswertung {#the-transcript-and-the-write-up}

Unter dem Player steht das Transkript, eine Zeile pro Redebeitrag, mit der Zeit, zu der er gesagt wurde, und dem Namen des Sprechers (**Sie**, der Name der Gegenseite oder bei einer mitgeschnittenen Besprechung **Eine andere Anwendung**). Klicken Sie auf eine Zeile, um diesen Moment zu hören; die Zeile unter dem Abspielkopf ist hervorgehoben, und das gerade gesprochene Wort ist darin markiert.

<Shot src="https://ai-softphone.com/screenshots/macos/de/light/transcript.png" alt="Das Transkript neben dem Ton" />

Die Auswahlliste über dem Transkript wählt, was angezeigt wird — das Transkript eines Ihrer [Spracherkenner](../ai-processing/transcription.md) (ein Stern markiert das Haupttranskript der Aufnahme) oder eine Auswertung wie **Aufgaben**.

<Shot src="https://ai-softphone.com/screenshots/macos/de/light/digest.png" alt="Aufgaben, die das Gespräch hinterlassen hat" />

Die vier Symbole rechts neben der Auswahlliste:

| Symbol | Bewirkt |
| --- | --- |
| Funken | Lässt das Modell den gewählten Eintrag jetzt schreiben. |
| Zwei Blätter | Kopiert ihn. |
| Diskette | Speichert ihn in eine Datei. |
| Papierkorb | Löscht ihn. |

Ein Transkript lässt sich als reiner Text oder als Untertitel exportieren.

Die Auswertung entsteht durch die [Prompts](/ai-processing/prompt-studio) und Modelle, die Sie unter [Verarbeitung](../ai-processing/processing.md) einrichten, nach [Regeln](../ai-processing/processing.md#rules), die von selbst oder auf Anfrage laufen. Wie lange Aufnahmen aufbewahrt werden, wird unter [Anrufe aufnehmen](../recordings/call-recording.md#retention) eingestellt.

## Eine Aufnahme, die Sie bereits haben {#a-recording-you-already-have}

Eine anderswo gemachte Aufnahme — auf dem Mobiltelefon, einem Diktiergerät oder in einem anderen System — lässt sich über **⋮ → Aus Datei(en) importieren** hinzufügen. Sie wird genau wie ein gewählter Anruf abgelegt: transkribiert, ausgewertet und von derselben Suche gefunden.

## Eine Aufnahme löschen {#deleting-a-recording}

Wird eine Aufnahme gelöscht, geht alles mit, was aus ihr entstanden ist: das Transkript und die Auswertung.
