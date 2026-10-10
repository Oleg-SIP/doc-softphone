---
title: Souffleur-Einstellungen
sidebar_label: Souffleur
sidebar_position: 5
description: "Einstellungen → Souffleur: was der Live-Souffleur braucht, der Schalter, der ihn erlaubt, die Schriftgröße, die Helfer und ihre Karten und die Monatsgrenzen für das, was er ausgeben darf."
---

Unter **Einstellungen → Souffleur** wird der Live-Souffleur erlaubt, in der Größe eingestellt und mit Helfern ausgestattet. Der Souffleur selbst — das Fenster, das ein Gespräch aufschreibt, während es gesagt wird, und vorschlägt, was Sie antworten könnten, sowie die Probe an einer Aufnahme — ist unter [Souffleur-Fenster](/interface/prompter) beschrieben.

Die [Übersicht](/interface/settings-overview) der Einstellungen führt den Souffleur unter **Souffleur** in zwei Schritten: **Souffleur erlauben** und **Souffleur starten**.

## Was er braucht {#what-it-needs}
- **Einen Spracherkenner, der zuhören kann, während ein Gespräch läuft.** Er wird unter [Einstellungen → Transkription](/ai-processing/transcription#live-recognition-for-the-prompter) hinzugefügt wie jeder andere Spracherkenner und braucht eine **Adresse für den Souffleur** und ein erfolgreiches **Prüfen**.
- **Ein Sprachmodell** für die Helfer, die etwas vorschlagen. Es ist das am Helfer eingestellte oder das Standardmodell unter [Einstellungen → Verarbeitung](/ai-processing/processing#language-models). Untertitel brauchen überhaupt kein Modell.
- **Das Häkchen Souffleur erlauben** unter **Einstellungen → Souffleur**.

Sobald alle drei vorhanden sind, erscheint **Souffleur** in der Liste unten im Telefon, zwischen **Verlauf** und **Einstellungen**, und öffnet das [Souffleur-Fenster](/interface/prompter). Der Teil des Programms, der das erledigt, ist das Modul **Souffleur**, *Hört ein laufendes Gespräch mit und schlägt vor*; es lässt sich unter [Module](/application/modules) abschalten.

## Einstellungen → Souffleur {#settings--prompter}
<Shot name="41_settings_prompter" alt="Einstellungen → Souffleur: der Schalter, der den Souffleur erlaubt, und die Schriftgröße" />

*Spracherkennung während eines laufenden Gesprächs und Vorschläge nach Ihren eigenen Anweisungen. Beides wird nach Minuten abgerechnet.*

| Einstellung | Voreinstellung | Was sie tut |
| --- | --- | --- |
| **Souffleur erlauben** | aus | Der einzige Schalter, der überhaupt einen Souffleur starten lässt. Nichts anderes auf der Seite wirkt, solange er aus ist. |
| **Transkript und Vorschläge** | 13 Pixel | Wie groß die beiden Spalten des Fensters gezeichnet werden. |
| **Die neueste Zeile über den Spalten wiederholen** | an | Zeigt den neuesten Vorschlag — oder bei einem Helfer, der nichts vorschlägt, die neueste Zeile — in einem eigenen Band über den Spalten. |
| **Die wiederholte Zeile** | 20 Pixel | Wie groß der Text des Bandes ist. Wird angezeigt, solange das Band an ist. |

:::caution
Die Stimme der Gegenseite wird während des Sprechens an einen Spracherkenner gesendet, und das ist nicht weniger als eine Aufnahme. Wo [Einstellungen → Aufnahme](/recordings) verlangt, die Gegenseite zuerst zu informieren, startet ein Souffleur erst, nachdem das geschehen ist.
:::

Den Souffleur liest man während des Sprechens, oft aus größerer Entfernung als den Rest des Telefons, deshalb wählen Sie die beiden Größen selbst: so, dass Sie sie erfassen, ohne sich zum Bildschirm zu beugen. Ziehen Sie die Trennlinie unter dem Band im [Souffleur-Fenster](/interface/prompter#the-window), um es höher zu machen.

### Helfer {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Einstellungen → Souffleur: die Helfer und die Monatsgrenzen" />

Ein Helfer ist das, was ein Souffleur sein soll. *Jeder hört einem laufenden Gespräch zu und schreibt etwas in das Fenster des Souffleurs: die Wörter, wie sie gesprochen werden, eine Übersetzung davon oder einen Vorschlag, was als Nächstes zu sagen ist.* Welchen Sie laufen lassen, wählen Sie im Souffleur-Fenster. Das Programm bringt vier mit:

| Helfer | Was er schreibt | Fragt ein Modell |
| --- | --- | --- |
| **Untertitel** | Die Worte beider Seiten, während sie gesagt werden. | nein |
| **Übersetzung** | Die Worte der Gegenseite, übersetzt in die Sprache des Programms. | ja |
| **Einwände im Gespräch** | Für jemanden, der am Telefon verkauft: Wenn der Kunde einen Einwand bringt, den Einwand in einer Zeile und eine Zeile, die ihn beantwortet. | ja |
| **Hilfe im Vorstellungsgespräch** | Für jemanden, der ein Vorstellungsgespräch führt: die Antwort auf die gerade gestellte Frage in wenigen kurzen Zeilen oder das, was in der nächsten Antwort vorkommen sollte. | ja |

**▲** und **▼** ändern die Reihenfolge, und das ist die Reihenfolge im Auswahlfeld des [Souffleur-Fensters](/interface/prompter#the-window). **Hinzufügen** legt einen eigenen Helfer an. **Voreinstellungen wiederherstellen** setzt die Prompts und die Regeln so zurück, wie sie mit dem Programm kamen, hier wie unter [Verarbeitung](/ai-processing/processing#defaults); Ihre Sprachmodelle bleiben unberührt.

### Die Karte eines Helfers {#an-assistants-card}
Ein Druck auf einen Helfer öffnet seine Karte. Es ist dieselbe Karte wie die eines [Prompts](/ai-processing/prompt-studio) unter Verarbeitung, mit einigen eigenen Bedienelementen.

<Shot name="42_prompter_assistant" alt="Die Karte des Helfers Einwände im Gespräch: der Spracherkenner, wann eine Antwort zu Ende ist, die Rolle und der Prompt" />

| Feld | Was es tut |
| --- | --- |
| **Name** | Der Name in der Liste und im Souffleur-Fenster. |
| **Antwortform** und **Ebenfalls senden** | Wie bei jedem Prompt: die Form der Antwort und die Anweisungen, die mitgeschickt werden. Die mitgelieferten Helfer antworten als **Fließtext**. |
| **Spracherkenner** | Welcher Spracherkenner zuhört. Angeboten werden nur die, die zuhören können, während jemand spricht. |
| **Wann eine Antwort zu Ende ist** | Wer entscheidet, dass eine Antwort vorbei ist und beantwortet werden kann: **Der Spracherkenner entscheidet**, **Nach einer Pause** oder **Nur wenn ich frage** — dann endet eine Antwort, wenn Sie **Vorschlag** drücken. Sechs der Spracherkenner sagen selbst, wo eine Antwort endet, vier nicht; **Der Spracherkenner entscheidet** greift dort, wo er keine Antwort hat, auf eine Pause zurück, und deshalb ist es die Einstellung, die man stehen lässt. |
| **Auch meine Seite erkennen** | Eine zweite Sitzung beim selben Spracherkenner, zum doppelten Preis, damit auch Ihre eigenen Worte im Transkript erscheinen. Sie gehen in das ein, was dem Modell gesagt wird, sind aber nie das, wonach es gefragt wird. |
| **Rolle — was das Modell ist** | Wird dem Modell vor dem Prompt geschickt, zum Beispiel *Sie helfen jemandem, der am Telefon verkauft…* |
| **Der Prompt** | Wonach das Modell zu jeder Antwort gefragt wird. `{{reply}}` ist die Antwort, die gerade zu Ende ist, und `{{conversation}}` alles, was vorher gesagt wurde. *Lassen Sie es leer, und ein Modell wird nach nichts gefragt: die Worte werden gezeigt, wie sie eintreffen, und bezahlt wird allein der Spracherkenner.* Genau das ist **Untertitel**. |
| **Antworten auf** | Die Sprache des Vorschlags: **Was gesprochen wurde**, **Die Sprache dieses Programms** oder **Immer eine Sprache**, mit ihrem Code. |
| **Modell** | **Vorgabe** oder eines Ihrer [Sprachmodelle](/ai-processing/processing#language-models). |

### Ausgaben {#spending}
*Getrennt von dem, was die Regeln für abgeschlossene Gespräche ausgeben dürfen. Ein Monat voller Zusammenfassungen darf einen Souffleur nicht mitten im Gespräch verstummen lassen.*

| Feld | Wenn es erreicht ist |
| --- | --- |
| **Spracherkenner, pro Monat** | Ein laufender Souffleur hält am Ende der Antwort an, bei der er gerade ist — nie mitten im Wort. |
| **Modelle, pro Monat** | Das Soufflieren hört auf, die Untertitel laufen weiter. |

Leer heißt keine Obergrenze. Was eine Minute Live-Audio kostet, ist der **Preis je Minute** des Spracherkenners, eingetragen auf seiner Karte unter [Transkription](/ai-processing/transcription#the-recognisers-card); ohne ihn sagt der Souffleur, dass der angezeigte Betrag eine Schätzung ist.
