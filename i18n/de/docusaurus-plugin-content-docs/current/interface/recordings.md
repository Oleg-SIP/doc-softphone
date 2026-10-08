---
title: Aufnahmefenster
sidebar_position: 2
description: Die Bibliothek aller Gespräche — ein Anruf, eine importierte Datei oder eine aus Zoom, Teams oder Meet mitgeschnittene Besprechung — mit Filtern, Player, einem Transkript, in dem Sie von jeder Zeile aus abspielen können, und den Auswertungen.
---

**Aufnahmen** ist der Ort, an dem jedes Gespräch lebt, egal wie es hereinkam: ein Anruf, den Sie im Telefon geführt oder angenommen haben, eine Audiodatei, die Sie importiert haben, oder eine Besprechung, die aus Zoom, Teams, Meet oder einer anderen Anwendung mitgeschnitten wurde. Alle stehen in einer Liste, und jedes öffnet sich auf dieselbe Weise: der Player, das Transkript und alles, was das Sprachmodell darüber geschrieben hat. Drücken Sie links unten im [Hauptfenster](main-window.md) auf **Aufnahmen**, um es zu öffnen.

<Shot name="01_recordings" alt="Der Reiter Aufnahmen: eine mitgeschnittene Zoom-Besprechung, eine importierte Datei und Anrufe in einer Liste" />

## Drei Arten von Aufnahmen {#three-kinds-of-recording}

Das Symbol links in einer Zeile zeigt, wie das Gespräch hereinkam.

| Symbol | Gespräch | Sein Name in der Liste | Wie es hierher kommt |
| --- | --- | --- | --- |
| Hörer mit Pfeil | Ein Anruf, der in diesem Telefon geführt oder angenommen wurde. Der Pfeil zeigt bei einem eingehenden Anruf hinein, bei einem ausgehenden hinaus. | Der Name des Kontakts oder die Nummer | Aufgezeichnet, wie unter [Aufnahmen](../recordings.md) eingestellt |
| Pfeil in einen Balken | Eine von anderswo importierte Datei: von einem Mobiltelefon, einem Diktiergerät oder einem anderen System | Der Name der Datei | **⋮ → Aus Datei(en) importieren**; siehe [unten](#a-recording-you-already-have) |
| Fenster | Eine Besprechung in einer anderen Anwendung | Der Name, den Sie vergeben haben, oder **Eine andere Anwendung** | [Mitschnitt](../capture/capture.md) |

Im Bild sind die obersten drei Zeilen je eine von jeder Art: eine Zoom-Besprechung, eine importierte Datei mit dem Supportgespräch einer Bank und ein Anruf, der auf der Leitung **305 Service** angenommen wurde. Egal woher sie stammen, sie werden gleichermaßen transkribiert, ausgewertet und durchsucht.

## Ein Gespräch finden {#finding-a-conversation}

Die Leiste oben hat fünf Filter, ein Suchfeld und ein Menü:

| Element | Grenzt die Liste ein nach |
| --- | --- |
| **Art** | der Art, wie das Gespräch hereinkam: eingehende oder ausgehende Anrufe, **Importiert**, **Mitgeschnitten** |
| **Zeitraum** | dem Datum: **Heute**, **Gestern**, **Letzte 7 Tage** oder **Daten wählen…** |
| **Kategorie** | der Kategorie, unter der es abgelegt wurde — siehe [Verzeichnisse](../ai-processing/dictionaries.md) |
| **Markierung** | den Labeln und Auffälligkeiten, die es trägt |
| **Spracherkenner** | dem [Spracherkenner](../ai-processing/transcription.md), der sein Transkript erstellt hat |
| **Suchen** | dem, was darin gesagt wurde — die Suche geht durch die Transkripte von allem, was Sie aufgenommen haben |

<Shot name="39_more_menu" alt="Das Menü ⋮ der Liste: Aus Datei(en) importieren, Als CSV exportieren, Im Browser öffnen" />

Die Taste **⋮** rechts in der Leiste öffnet weitere Aktionen für die Liste:

| Eintrag | Bewirkt |
| --- | --- |
| **Aus Datei(en) importieren** | Holt Aufnahmen herein, die Sie bereits haben. Siehe [Eine Aufnahme, die Sie bereits haben](#a-recording-you-already-have). |
| **Als CSV exportieren** | Speichert die Liste als Tabelle: wann, die Gegenseite und Nummer, Richtung, Dauer, Kategorie, Label, Auffälligkeiten und die Zusammenfassung in einer Zeile jedes Gesprächs. |
| **Im Browser öffnen** | Öffnet die Liste in Ihrem Browser, als die Seite, die die [lokale REST-API](../integration/rest-api.md) unter `/ui` ausliefert. |

## Die Liste {#the-list}

Jede Zeile zeigt:

- das Symbol für die Art des Gesprächs;
- den Namen — die Gegenseite, die Nummer, die Datei oder die Besprechung — und darunter das Datum und die Zusammenfassung in einer Zeile;
- rechts die Kategorie mit ihrer Bewertung (eine Zahl, zum Beispiel *Support · 4*), dann die Auffälligkeiten und Label und am Ende die Dauer.

Auffälligkeiten sind rot gezeichnet (im Bild *Sensible Daten*, *Zusage gemacht*, *Verärgerter Kunde*); Label sind schlicht (*Rückruf zugesagt*). Ein Gespräch ohne Zusammenfassung und Kategorie ist noch nicht ausgewertet — im Bild die Zeile **Anna Schneider**.

<Shot name="40_row_actions" alt="Eine Zeile mit dem Mauszeiger darüber: die Tasten Stecknadel, Stift und Papierkorb" />

Zeigen Sie auf eine Zeile, dann erscheinen rechts davon drei Tasten:

| Taste | Bewirkt |
| --- | --- |
| Stecknadel | **Diese behalten**: Eine behaltene Aufnahme wird von den Grenzen unter [Aufbewahrung](../recordings.md#retention) nie gelöscht. Drücken Sie sie noch einmal, um sie nicht mehr zu behalten. |
| Stift | **Umbenennen**: Gibt dem Gespräch einen Namen Ihrer Wahl. Ein Anruf behält daneben den Namen der Gegenseite; eine Besprechung oder eine Datei heißt sonst nach der Anwendung oder der Datei, aus der sie stammt. |
| Papierkorb | **Diese Aufnahme löschen**, nach einer Rückfrage. Der Ton geht ebenfalls, und es lässt sich nicht rückgängig machen. |

## Der Player {#the-player}

Wählen Sie eine Zeile aus, um den Player unter der Liste zu öffnen.

- Die zwei Wellenformen sind die zwei Kanäle der Aufnahme: die obere sind Sie, die untere ist die Gegenseite. Eine importierte Datei enthält meist eine gemischte Spur, deshalb zeigen beide Linien denselben Ton.
- **▶** spielt ab und pausiert; die Zeiten links sind Position und Gesamtlänge. Der Balken unter den Wellenformen scrollt eine lange Aufnahme.
- **1×** ändert die Geschwindigkeit; **Beide** wählt, welche Stimme Sie hören: beide, nur Sie (**Ich**) oder nur die Gegenseite (**Gegenseite**).
- Die Diskettentaste speichert eine Kopie der Aufnahme, **×** schließt das Gespräch.

Die Linie zwischen der Liste und dem Player lässt sich nach oben ziehen, damit das Transkript mehr Platz bekommt, wie in den Bildern unten.

## Das Transkript {#the-transcript}

Unter dem Player steht das Transkript: eine Zeile pro Redebeitrag, mit der Zeit, zu der er gesagt wurde, und dem Namen des Sprechers.

<Shot name="26_recording_call" alt="Ein Anruf auf der Leitung 305 Service: der Player und das Transkript, die Zeile bei 0:13 ist hervorgehoben" />

| Art der Aufnahme | Die Sprecher werden angezeigt als |
| --- | --- |
| Ein Anruf | **Sie** und der Name der Gegenseite oder die Nummer |
| Eine mitgeschnittene Besprechung | **Sie** und der Name der Aufnahme für alle anderen |
| Eine importierte Datei | **Alle · speaker 1**, **Alle · speaker 2** … — der Spracherkenner unterscheidet die Stimmen |

**Klicken Sie auf eine Zeile, um zu diesem Moment zu springen**: Der Player geht dorthin, die Zeile wird hervorgehoben, und das gerade gesprochene Wort ist darin markiert — im Bild die Zeile bei **0:13** mit dem Wort *Ja*. Drücken Sie **▶**, um von dort an zuzuhören. Beim Abspielen folgt die Hervorhebung der Sprache, sodass Sie lesen und zugleich zuhören und zu jedem Satz zurückspringen können.

Die Zeit links in jeder Zeile ist auch das, worauf eine Auswertung zeigt: Eine Auffälligkeit, eine Antwort oder ein Zitat trägt die Zeit der Worte, auf denen es beruht.

## Transkript oder Auswertung: die Auswahlliste {#transcript-or-write-up-the-drop-down}

Die Auswahlliste über dem Transkript wählt, was an dieser Stelle angezeigt wird: ein Transkript oder eine der Auswertungen, die das Sprachmodell erstellt hat.

<Shot name="27_writeup_menu" alt="Die geöffnete Auswahlliste: das OpenAI-Transkript und die Auswertungen des Anrufs" />

- Zeilen mit einem **Mikrofon** sind Transkripte, eines für jeden [Spracherkenner](../ai-processing/transcription.md), der die Aufnahme transkribiert hat. Der Stern markiert das Haupttranskript. Zeigen Sie auf eines, um den Spracherkenner, sein Modell und die Sprache zu sehen.
- Zeilen mit **Funken** sind Auswertungen, erstellt durch die [Prompts](/ai-processing/prompt-studio) unter [Verarbeitung](../ai-processing/processing.md).

Eine Aufnahme kann Transkripte mehrerer Spracherkenner haben, zum Vergleich: Die Zoom-Besprechung unten wurde sowohl von X.ai als auch von Deepgram transkribiert.

<Shot name="36_zoom_menu" alt="Eine mitgeschnittene Besprechung mit zwei Transkripten, Deepgram und X.ai, und ihren Auswertungen" />

Die Auswertungen stehen unter kurzen Namen in der Liste:

| In der Auswahlliste | Erstellt vom Prompt | Was sie zeigt |
| --- | --- | --- |
| **Zusammenfassung** | Zusammenfassung | Die Hauptpunkte, Entscheidungen und nächsten Schritte in einem kurzen Absatz. |
| **Kurz gesagt** | Zusammenfassung in einer Zeile | Ein Satz; dieselbe Zeile steht in der Liste unter dem Namen. |
| **Aktionen** | Aufgaben | Wer was zu tun zugesagt hat und bis wann. |
| **Themen** | Themen | Die Gegenstände, die zur Sprache kamen. |
| **Erwähnt** | Namen und Zahlen | Personen, Firmen, Daten, Beträge und Verweise. |
| die Frage selbst | Eine Frage zu diesem Gespräch | Die Antwort auf eine Frage, die Sie gestellt haben, mit den Worten, auf denen sie beruht. |
| **Qualität** | Vertriebsqualität, Supportqualität | Eine Gesamtbewertung und ein Urteil zu jedem Kriterium. |
| **Auffälligkeiten** | Auffälligkeiten | Was Aufmerksamkeit braucht, mit dem Beleg und der Zeit. |
| **Label**, **Kategorie** | Label, Kategorie | Die Etiketten, unter denen das Gespräch abgelegt wurde. |

## Die Auswertungen, eine nach der anderen {#the-write-ups-one-by-one}

Die Bilder unten zeigen alle dasselbe Gespräch, auf der Leitung **305 Service**, in dem eine Kundin fragt, wann ihre Versicherungen verlängert werden.

**Zusammenfassung** — das Gespräch in wenigen Sätzen.

<Shot name="28_summary" alt="Die Zusammenfassung des Gesprächs" />

**Kurz gesagt** — eine Zeile, kurz genug, um das Gespräch in der Liste wiederzuerkennen.

<Shot name="29_nutshell" alt="Kurz gesagt: die Zusammenfassung des Gesprächs in einer Zeile" />

**Aktionen** — jede Aufgabe mit dem, der sie erledigen soll, und dem Termin, rechts davon.

<Shot name="30_actions" alt="Aktionen: zwei Aufgaben für Sie, eine davon morgen früh fällig" />

**Eine Frage** — fragen Sie das Gespräch, was Sie wollen: Die Frage wird zum Namen des Eintrags, und unter der Antwort stehen die Worte, auf denen sie beruht, mit ihrer Zeit in der Aufnahme.

<Shot name="31_question" alt="Die Antwort auf eine Frage zum Gespräch, mit zwei Zitaten bei 0:17 und 0:31" />

**Qualität** — die Bewertung von 1 bis 5 mit der Begründung und jedes Kriterium mit einer Notiz, markiert als **erfüllt**, **schwach** oder **nicht erfüllt**.

<Shot name="32_quality" alt="Qualität: Bewertung 4, zwei Kriterien erfüllt und zwei schwach" />

**Auffälligkeiten** — jede Auffälligkeit mit den Worten, bei denen sie ausgelöst wurde, ihrem Schweregrad und der Zeit.

<Shot name="33_red_flags" alt="Auffälligkeiten: Zusage gemacht, gering, bei 0:31" />

**Themen** — die Gegenstände einer Besprechung, hier der Zoom-Besprechung.

<Shot name="38_topics" alt="Themen der Zoom-Besprechung" />

## Die Tasten neben der Auswahlliste {#the-buttons-beside-the-drop-down}

| Taste | Bewirkt |
| --- | --- |
| Funken | **Transkribieren oder ein Modell fragen…**: Öffnet ein Menü, siehe unten. |
| Zwei Blätter | Kopiert, was angezeigt wird. |
| Diskette | Speichert es in eine Datei. Ein Transkript können Sie als reinen Text oder als Untertitel speichern. |
| Papierkorb | Löscht, was angezeigt wird. |

<Shot name="34_run_menu" alt="Das Funken-Menü: Transkription mit vier Spracherkennern, Verarbeitung mit den Prompts" />

Das Funken-Menü erledigt die Arbeit auf Anforderung. Unter **Transkription** wählen Sie einen Spracherkenner, um die Aufnahme noch einmal mit ihm zu transkribieren; unter **Verarbeitung** wählen Sie einen Prompt, um ihn jetzt auszuführen — **Eine Frage zu diesem Gespräch** fragt zuerst nach der Frage. Das Ergebnis erscheint in der Auswahlliste. So wird ein Gespräch ausgewertet, wenn **Gespräche automatisch verarbeiten** unter [Verarbeitung](../ai-processing/processing.md) ausgeschaltet ist, und so fügen Sie einem Gespräch, das schon Auswertungen hat, noch eine hinzu.

## Drei Beispiele {#three-examples}

### Ein Anruf im Telefon {#a-call-made-in-the-phone}

Der Anruf oben: Die Sprecher sind **Sie** und **Katrin Wolf**, der Name des Kontakts, auf zwei getrennten Kanälen.

### Eine importierte Datei {#a-file-you-imported}

<Shot name="35_recording_import" alt="Eine importierte Datei mit dem Supportgespräch einer Bank: eine gemischte Spur und die Sprecher 1 und 2" />

`riverside_bank_support_call` ist eine mp3-Datei, die mit **⋮ → Aus Datei(en) importieren** hereingeholt wurde. Ihr Name ist der Name der Datei, ihr Symbol ein Pfeil in einen Balken, und ihre zwei Sprecher hat der Spracherkenner unterschieden. Die Auswertungen fanden eine laut genannte Kartennummer und lösten **Sensible Daten** aus.

### Eine aus einer anderen Anwendung mitgeschnittene Besprechung {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Eine vom Computer mitgeschnittene Zoom-Besprechung: das X.ai-Transkript mit „Sie“ und dem Namen der Besprechung als Sprechern" />

**Planung Q4-Launch (Zoom)** wurde mitgeschnitten, während die Besprechung in Zoom lief, und mit dem Stift benannt. Alle auf der anderen Seite der Besprechung werden unter dem Namen der Aufnahme angezeigt; Sie sind **Sie**. Siehe [Mitschnitt](../capture/capture.md).

## Eine Aufnahme, die Sie bereits haben {#a-recording-you-already-have}

Eine anderswo gemachte Aufnahme — auf dem Mobiltelefon, einem Diktiergerät oder in einem anderen System — lässt sich über **⋮ → Aus Datei(en) importieren** hinzufügen. Wählen Sie eine oder mehrere mp3- oder wav-Dateien; das Telefon sagt, wie viele importiert wurden, und nennt alle, die es nicht als Aufnahme lesen konnte. Jede wird genau wie ein gewählter Anruf abgelegt: transkribiert, nach denselben [Regeln](../ai-processing/processing.md#rules) ausgewertet und von derselben Suche gefunden.

## Eine Aufnahme löschen {#deleting-a-recording}

Wird eine Aufnahme gelöscht, geht alles mit, was aus ihr entstanden ist: die Transkripte und die Auswertungen. Wie lange Aufnahmen von selbst aufbewahrt werden, wird unter [Aufnahmen](../recordings.md#retention) eingestellt.
