---
title: Mitschnitt
sidebar_label: Mitschnitt aus anderen Anwendungen
sidebar_position: 1
description: "Der Mitschnitt nimmt ein Gespräch in einer anderen Anwendung auf — Zoom, Teams, Meet oder jeder anderen — direkt vom Computer."
---

Der **Mitschnitt** ist der Weg, auf dem AI Softphone ein Gespräch aufnimmt, das in einem anderen Programm stattfindet, etwa eine Besprechung in Zoom, Teams oder Meet. Er nimmt direkt vom Computer auf, hält die Gegenseite und Sie auf getrennten Kanälen, und am Ende warten dasselbe Transkript und dieselbe Auswertung wie bei einem Anruf.

Das Programm sucht nach einem Gespräch, nicht nach dem Namen einer Anwendung, und funktioniert daher mit allem, was ein Gespräch führt.

Die [Übersicht](../interface/settings-overview.md) der Einstellungen führt das unter **Mitschnitt aus anderen Anwendungen** und teilt es in drei Schritte:

1. **Mitschnitt einschalten** — [den Tonmitschnitt erlauben](#turning-capture-on).
2. **Ein Gespräch mitschneiden** — eine Aufnahme [starten und beenden](#capturing-a-conversation).
3. **Einem Mitschnitt einen Namen geben** — die Aufnahme [umbenennen](#giving-it-a-name).

## Den Mitschnitt einschalten {#turning-capture-on}

Der Mitschnitt ist aus, bis Sie ihn erlauben. Öffnen Sie **Einstellungen → Mitschnitt**.

<Shot name="10_settings_capture" alt="Einstellungen → Mitschnitt" />

| Einstellung | Standard | Was sie bewirkt |
| --- | --- | --- |
| **Tonmitschnitt erlauben** | aus | Erlaubt dem Programm, den Ton anderer Anwendungen aufzunehmen. Solange sie aus ist, wird nichts mitgeschnitten. |
| **Mich erinnern, die anderen über die Aufnahme zu informieren** | an | Zeigt während eines Mitschnitts eine Erinnerung. Das Kästchen ist grau, bis der Mitschnitt erlaubt ist. |

:::caution
Aufgenommen wird alles, was der Computer abspielt, nicht nur das Gespräch. Dieses Telefon kann eine Aufnahme nicht in die Besprechung eines anderen ansagen, das zu sagen ist also Ihre Sache.
:::

Der Teil des Programms, der das tut, ist das Modul **Mitschnitt**, *ein Gespräch aufnehmen, das in einer anderen Anwendung stattfindet*. Es lässt sich unter [Module](../application/modules.md) abschalten.

## Einen Mitschnitt starten {#starting-a-capture}

Sobald der Mitschnitt erlaubt ist, zeigt der untere Teil des [Hauptfensters](../interface/main-window.md#capture) seinen Zustand — **Mitschnitt · warte auf ein Gespräch** — mit einer Taste **Aufnehmen** rechts. Drücken Sie **Aufnehmen**, um von Hand zu starten.

### Automatischer Start {#automatic-start}

**Automatischer Start** legt fest, was passiert, wenn das Programm ein Gespräch in einer anderen Anwendung hört:

| Auswahl | Was passiert |
| --- | --- |
| **Nie** | Ein Mitschnitt beginnt nur, wenn Sie **Aufnehmen** drücken. |
| **Nachfragen** | Das Programm fragt, ob es aufnehmen soll. Der Standard. |
| **Immer** | Das Programm beginnt die Aufnahme von selbst. |

Unter **Anwendungen mit eigener Antwort** kann eine Anwendung eine eigene Antwort bekommen — zum Beispiel *Diese Anwendung immer aufzeichnen* aus der Frage, die das Programm stellt.

*Nachfragen kostet nichts: Die Sekunden vor Ihrer Antwort sind schon aufbewahrt.*

### Vor dem Beginn {#before-the-start}

Der Schieberegler **Vor dem Beginn** gibt an, wie viele Sekunden Ton aus der Zeit vor dem Start einer Aufnahme aufbewahrt werden, standardmäßig **15 Sekunden**. Er sorgt dafür, dass nichts verloren geht, während das Gespräch erkannt wird: Eine Aufnahme, die beginnt, wenn Sie **Aufnehmen** drücken oder die Frage beantworten, beginnt trotzdem mit den Worten, die davor fielen.

## Ein Gespräch mitschneiden {#capturing-a-conversation}

Während der Aufnahme zeigt das Hauptfenster einen roten Punkt, den Namen der Aufnahme (zum Beispiel **Besprechung in Zoom**), die verstrichene Zeit und die zwei Kanäle als Wellenformen.

<Shot src="https://ai-softphone.com/screenshots/macos/de/light/capture.png" alt="Eine Besprechung wird aufgenommen" />

- **Aufnahme beenden** beendet sie.
- Das Fenster bleibt während der Aufnahme sichtbar und erinnert Sie daran, den Teilnehmern zu sagen, dass die Besprechung aufgenommen wird.

### Was das Bild zeigt {#what-the-picture-shows}

Zwei weitere Einstellungen wählen, wie der Pegel des Tons gezeichnet wird:

| Einstellung | Standard | Wo |
| --- | --- | --- |
| **Bild im Hauptfenster** | Welle | Die zwei Kanäle während eines Mitschnitts. |
| **Bild in der Leiste am Fuß des Telefons** | Zwei Pegel | Die zwei dünnen Balken unter dem Zustand des Mitschnitts. |

### Ausprobieren {#testing-it}

Unter **Prüfung** hat der Reiter zwei Balken: **Sie** und **Die Gegenseite**. *Der obere Balken bewegt sich, wenn Sie sprechen, der untere, wenn etwas abgespielt wird.* Sagen Sie vor einer wichtigen Besprechung ein Wort und spielen Sie einen beliebigen Ton ab, um zu sehen, dass das Programm beide Seiten hört.

## Einen Namen geben {#giving-it-a-name}

Mit dem Stift neben dem Namen der Aufnahme benennen Sie sie um, während sie noch läuft. Eine Aufnahme, die Sie nicht benannt haben, steht als **Eine andere Anwendung** in der Liste.

## Wohin die Aufnahme geht {#where-the-recording-goes}

Ein mitgeschnittenes Gespräch erscheint im [Aufnahmefenster](../recordings/recordings-window.md) wie jedes andere, mit eigenem Symbol — einem Fenster statt eines Hörers — und mit dem Titel, den Sie ihm gegeben haben, oder **Eine andere Anwendung**.

<Shot name="01_recordings" alt="Mitgeschnittene Besprechungen im Reiter Aufnahmen, mit einem Fenstersymbol markiert" />

Es wird nach denselben [Regeln](../ai-processing/processing.md#rules) wie ein Anruf transkribiert, zusammengefasst, einer Kategorie zugeordnet und mit Labeln versehen. Im Transkript einer mitgeschnittenen Besprechung steht als Sprecher **Eine andere Anwendung**, wo ein Anruf den Namen der Gegenseite zeigen würde; **Suchen** in der Bibliothek findet auch, was darin gesagt wurde.
