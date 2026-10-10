---
title: Souffleur-Fenster
sidebar_position: 3
description: "Das Fenster des Live-Souffleurs: die Worte eines Gesprächs, während sie gesagt werden, und Vorschläge, was Sie als Nächstes sagen könnten, seine Schaltflächen und Spalten, die Probe an einer Aufnahme und was es kostet."
---

Der **Souffleur** hört ein Gespräch mit, während es stattfindet. In einem eigenen Fenster schreibt er auf, was jede Seite sagt, während es gesagt wird, und — wo der gewählte Helfer ein Modell fragt — einen Vorschlag, was Sie als Nächstes sagen könnten. Er lohnt sich bei einem Verkaufsgespräch, einem Vorstellungsgespräch oder einem schwierigen Telefonat, und mit einem anderen Helfer zeigt dasselbe Fenster eine laufende Übersetzung der Gegenseite oder einfach Untertitel.

<Shot name="46_prompter_running" alt="Der Souffleur probt ein Verkaufsgespräch: links das Transkript, rechts die Vorschläge, der neueste groß darüber wiederholt" />

Im Bild hört der Helfer **Einwände im Gespräch** ein Verkaufsgespräch mit. Die linke Spalte ist das Gesagte, jede Zeile mit ihrer Zeit und ihrer Seite; die rechte ist das, was das Modell zu jeder Antwort des Kunden vorgeschlagen hat; der neueste Vorschlag steht in großer Schrift noch einmal über beiden.

**Souffleur** erscheint in der Liste unten im Telefon, zwischen **Verlauf** und **Einstellungen**, sobald drei Dinge erfüllt sind: der Souffleur ist erlaubt, es gibt einen Spracherkenner, der zuhören kann, während ein Gespräch läuft, und — für die Helfer, die etwas vorschlagen — ein Sprachmodell. All das wird unter [Einstellungen → Souffleur](/ai-processing/prompter) eingerichtet, wo auch die Schriftgröße und die Helfer selbst stehen.

## Das Fenster {#the-window}
<Shot name="44_prompter_window" alt="Das Souffleur-Fenster mit dem Helfer Einwände im Gespräch, vor dem Start" />

Oben steht das Auswahlfeld **Helfer** und rechts daneben die Schaltflächen:

| Schaltfläche | Was sie tut |
| --- | --- |
| **Start** / **Anhalten** (Dreieck / Quadrat) | *Dieses Gespräch mithören* — oder aufhören: *Das Gesagte bleibt auf dem Bildschirm*. Ein Start, der gedrückt wird, bevor der Anruf angenommen ist, wartet darauf, und die Schaltfläche sagt ihn dann wieder ab. |
| **Vorschlag** (Funken) | *Antwort hier beenden und vorschlagen, was zu sagen ist*, ohne auf eine Pause zu warten. Bei einem Helfer, der kein Modell fragt, heißt die Schaltfläche **Antwort beenden**: Sie schließt nur die Antwort, damit die nächste sauber beginnt. Solange der Souffleur nicht läuft, ist sie ausgegraut. |
| **Leeren** (Papierkorb) | Vergisst nach einer Rückfrage, was auf dem Bildschirm steht. *Beide Spalten verschwinden, und mit ihnen das Gespräch, aus dem der nächste Vorschlag entstanden wäre.* Anhalten und neu starten leert nichts: Ein angehaltenes und neu gestartetes Gespräch ist meist dasselbe Gespräch. |
| **Exportieren…** (Diskette) | Schreibt beide Spalten mit ihren Zeiten in eine Datei: als Text (`.txt`) oder als Tabelle (`.csv`), unter dem Namen, den Sie der Datei geben. |
| **Probe…** (Bibliothek) | [Probiert einen Helfer an einer Aufnahme aus](#rehearsing-on-a-recording) statt an einem Anruf. |

Das Auswahlfeld zeigt die [Helfer](/ai-processing/prompter#assistants) in der Reihenfolge, die unter **Einstellungen → Souffleur** festgelegt ist. Während ein Souffleur läuft, lässt es sich nicht ändern, bleibt aber sichtbar, sodass Sie sehen, welcher Helfer gerade arbeitet. Solange er zuhört, steht auf der Karte des Anrufs **Wir hören zu**.

Unter den Schaltflächen liegt das Band mit der neuesten Zeile und darunter die beiden Spalten:

- **Transkript** — jede Zeile mit ihrer Zeit und ihrer Seite;
- **Vorschläge** — jeder Vorschlag mit der Zeit der Antwort, auf die er sich bezieht. Bei einem Helfer, der kein Modell fragt, fehlt diese Spalte, und das Transkript nimmt die ganze Breite ein.

Ist das Fenster schmal, stehen die beiden Spalten untereinander. Eine Spalte folgt dem, was hereinkommt, bis Sie in ihr zurückscrollen, und folgt wieder, wenn Sie ans Ende zurückkehren. Drücken Sie auf eine beliebige Zeile, um sie im Band festzuhalten; drücken Sie auf die neueste oder auf die Nadel im Band, um wieder zu folgen. Mit der rechten Maustaste kopieren Sie eine Zeile, einen Vorschlag, das ganze Transkript oder alle Vorschläge. Ziehen Sie die Trennlinie unter dem Band, um es höher zu machen; die Schriftgrößen werden unter [Einstellungen → Souffleur](/ai-processing/prompter#settings--prompter) eingestellt.

## Probe an einer Aufnahme {#rehearsing-on-a-recording}
Ein Helfer lässt sich ausprobieren, ohne dass jemand am Telefon ist. **Probe…** listet die Gespräche der [Bibliothek](/interface/recordings), die neuesten zuerst, und **Eine Datei auf diesem Computer…** für eine `.mp3`- oder `.wav`-Datei.

<Shot name="45_prompter_rehearse" alt="Probe…: die Gespräche der Bibliothek und eine Datei auf diesem Computer" />

Die gewählte Aufnahme erscheint in einem Player unter den Schaltflächen: Wiedergabe und Pause, beide Kanäle als Wellenform, in die Sie klicken können, und die Zeit. Drücken Sie **Start**: Die Aufnahme wird auf demselben Weg wie ein Anruf in den Souffleur gespielt, in ihrem eigenen Tempo — schnellere Wiedergabe gibt es bewusst nicht, denn ein Souffleur, der mit anderthalbfacher Geschwindigkeit gefüttert wird, würde zu einem Gespräch pausieren, antworten und abrechnen, das niemand geführt hat. Das Kreuz rechts ist **Probe beenden**, zurück zum Mithören von Anrufen.

Eine Aufnahme mit nur einem Kanal, etwa eine importierte Datei, wird als ein Raum gehört: *Der Souffleur hört alles als Gesprächspartner.*

## Was es kostet und wohin die Worte gehen {#what-it-costs-and-where-the-words-go}
- Der Spracherkenner wird nach Minuten Live-Audio abgerechnet, und **Auch meine Seite erkennen** verdoppelt das. Ein Modell wird pro Vorschlag abgerechnet. Beides zählt gegen die [Monatsgrenzen](/ai-processing/prompter#spending) des Souffleurs, nicht gegen die Limits der Verarbeitung.
- Die Stimme der Gegenseite verlässt den Computer, während sie spricht, zu dem Spracherkenner, den Sie gewählt haben. Ein Spracherkenner auf Ihrer eigenen Maschine — **Vosk**, **WhisperLive** oder **NVIDIA Riva** — behält sie im Haus.
- Was der Souffleur zeigt, ist keine Aufnahme. Um es zu behalten, drücken Sie **Exportieren…**; um das Gespräch selbst zu haben, [nehmen Sie den Anruf](/recordings) zusätzlich auf.

## Wenn er nicht startet {#when-it-does-not-start}
Das Fenster sagt in einer Zeile unter den Schaltflächen, was fehlt.

| Das Fenster sagt | Was zu tun ist |
| --- | --- |
| *Souffleur ist ausgeschaltet. Einstellungen → Souffleur.* | Setzen Sie das Häkchen **Souffleur erlauben**. |
| *Kein Spracherkenner hier kann zuhören, während jemand spricht. Einstellungen → Transkription.* | Fügen Sie einen Spracherkenner mit einer **Adresse für den Souffleur** hinzu und drücken Sie **Prüfen**. |
| *Es gibt nichts zu starten. Einstellungen → Souffleur, und fügen Sie einen Helfer hinzu.* | Alle Helfer wurden gelöscht oder ausgeschaltet: Fügen Sie einen hinzu oder drücken Sie **Voreinstellungen wiederherstellen**. |
| *Die Gegenseite muss zuerst informiert werden. Nehmen Sie dieses Gespräch auf oder ändern Sie, was Einstellungen → Aufnahme über die Zustimmung sagt.* | Starten Sie die Aufnahme, die die Ansage abspielt, oder ändern Sie die Einstellung zur Zustimmung. |
| *Der Spracherkenner hat nicht zu hören begonnen. Prüfen Sie seine Live-Adresse und sein Modell unter Einstellungen → Transkription.* | Die Adresse für den Souffleur, das Modell oder der Schlüssel ist falsch. **Prüfen** auf der Karte des Spracherkenners sagt, was davon. |
| *Das Monatsbudget für Spracherkenner ist aufgebraucht.* | Erhöhen Sie **Spracherkenner, pro Monat** oder warten Sie, bis der Monat wechselt. |
| *Das Monatsbudget für Modelle ist aufgebraucht. Die Worte laufen weiter, das Soufflieren ist beendet.* | Erhöhen Sie **Modelle, pro Monat**. |
