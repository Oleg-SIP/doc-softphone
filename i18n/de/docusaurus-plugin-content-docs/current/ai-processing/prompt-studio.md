---
title: Personal Prompt Studio
sidebar_position: 3
description: Die Prompts, die Ihre Gespräche auswerten, die Regeln, die sie ausführen, und wie Sie sie sich zu eigen machen.
---

**Personal Prompt Studio** ist der Teil von AI Softphone, der Ihre Gespräche auf Ihre Weise auswertet. Die Auswertung entsteht durch Prompts: Das Programm bringt elf mit, einsatzbereit, sobald Transkription und ein Sprachmodell verbunden sind, und Sie können sie in normaler Sprache ändern, duplizieren und eigene hinzufügen. Sie stehen unter **Prompts** in [Einstellungen → Verarbeitung](processing.md#prompts).

Ihr LLM, Ihr Schlüssel, Ihre Kontrolle: Verbinden Sie das Modell Ihrer Wahl mit Ihrem eigenen Schlüssel, über einen unterstützten Dienst oder eine kompatible API — oder ein Modell, das in Ihrer Organisation betrieben wird. Mit der [Transkription](transcription.md#your-own-models) auf eigener Hardware bleiben Ton und Transkripte in Ihrer Umgebung.

<Shot name="12b_settings_processing_prompts" alt="Die Liste der Prompts unter Einstellungen → Verarbeitung" />

## Die mitgelieferten Prompts {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 enthält elf Prompts für abgeschlossene Gespräche und vier Live-Helfer. Unten stehen die mitgelieferten Texte dieser Sprache; Sprachversionen können abweichen.

| Prompt | `code` | Form | Was er schreibt |
| --- | --- | --- | --- |
| **Zusammenfassung** | `summary` | Fließtext | Die wichtigsten Punkte, Entscheidungen und nächsten Schritte in einem kurzen Absatz. |
| **Zusammenfassung in einer Zeile** | `super-summary` | Fließtext | Einen kurzen Titel, an dem man das Gespräch in einer Liste erkennt. |
| **Aufgaben** | `action-items` | Punkte | Wer sich verpflichtet hat, was bis wann zu tun, mit den eigenen Worten. |
| **Themen** | `topics` | Punkte | Die behandelten Themen in wenigen Worten. |
| **Namen und Zahlen** | `entities` | JSON | Personen, Firmen, Daten, Beträge und Bezüge. |
| **Kategorie** | `categorise` | Label | Ordnet das Gespräch einer Ihrer [Kategorien](dictionaries.md) zu. |
| **Label** | `tags` | Label | Versieht es mit Ihren [Labeln](dictionaries.md), damit es sich später finden lässt. |
| **Auffälligkeiten** | `red-flags` | Auffälligkeiten | Probleme, mit Beleg und Zeitpunkt im Gespräch. |
| **Eine Frage zu diesem Gespräch** | `qa` | Antwort | Beantwortet eine Frage, die Sie zu einem Gespräch stellen, aus seinem Transkript. |
| **Vertriebsqualität** | `sales-quality` | Kriterien | Bewertet das Gespräch nach Vertriebskriterien, die Sie bearbeiten können. |
| **Supportqualität** | `support-quality` | Kriterien | Beurteilt, wie gut das Problem verstanden und behandelt wurde. |

Die Formen sind feste Gestalten einer Antwort, die es dem Programm erlauben, sie zu speichern und später zu durchsuchen: **Label** sind Codes aus einer Ihrer Listen, **Auffälligkeiten** sind Codes mit einem Schweregrad, **Kriterien** sind eine Bewertung mit Begründung und einer Bewertung je Kriterium, **Antwort** ist eine Antwort mit den Worten, auf die sie sich stützt. Die Anweisungen, die einem Modell die Form beschreiben, liegen in den [Verzeichnissen](dictionaries.md#instructions).

Auch die Helfer des [Souffleurs](../interface/prompter.md) sind Prompts, die während eines Anrufs auf jede Äußerung angewendet werden statt auf ein fertiges Gespräch. Sie stehen in einer eigenen Liste, unter [Helfer](prompter.md#assistants) in **Einstellungen → Souffleur**.

In AI Softphone geführte Anrufe, vom Computer [mitgeschnittene](/capture/) Besprechungen und importierte Aufnahmen laufen durch dieselben Prompts, sobald sie ein Transkript haben.

Aufgaben halten fest, was vereinbart wurde — sie senden keine Nachrichten, buchen keine Termine und legen keine Tickets für Sie an.

## Machen Sie es zu Ihrem {#making-it-yours}

- Ändern Sie in normaler Sprache, was ein Prompt fragt: wonach er sucht, das Antwortformat und die Sprache, in der er antwortet.
- Duplizieren Sie einen Prompt, um eine Variante auszuprobieren.
- Wählen Sie das Modell für jeden Prompt — auf Ihrem eigenen Rechner oder in der Cloud.
- Legen Sie die Reihenfolge fest, in der Prompts laufen, schalten Sie sie ein und aus und knüpfen Sie sie an Bedingungen — das geschieht mit den [Regeln](processing.md#rules): Eine Vertriebsbewertung läuft zum Beispiel nur bei Gesprächen der Kategorie **Vertrieb**.
- Pflegen Sie Ihre eigenen Kategorien, Label und Auffälligkeiten in den [Verzeichnissen](dictionaries.md).
- Begrenzen Sie die Kosten mit den [monatlichen Grenzen](processing.md#spending).

Die ursprünglichen Prompts und Regeln stellen Sie mit **Voreinstellungen wiederherstellen** unter **Voreinstellungen** in [Einstellungen → Verarbeitung](processing.md#defaults) wieder her.

## Modellrolle {#role-and-task}

`system` legt das Verhalten des Modells fest; `body` beschreibt die Aufgabe. Antwortform und Sprache werden separat durch Verzeichnisanweisungen vorgegeben.

Eine leere Aufgaben- oder Auffälligkeitsliste kann korrekt sein. Fehlende Zuständige und Termine dürfen nicht erfunden werden. Antworten auf Fragen müssen allein auf dem Transkript beruhen.

[Antwortformate](dictionaries.md#response-formats)

## Platzhalter {#placeholders}

Ein Platz im Prompt, der durch Gesprächsdaten ersetzt wird.

| Platzhalter | Bedeutung |
| --- | --- |
| `{{transcript}}` | Transkript, eine Äußerung je Zeile, mit Zeiten in Millisekunden |
| `{{duration}}` | Gesprächsdauer |
| `{{direction}}` | Eingehender oder ausgehender Anruf |
| `{{party}}` | Kontaktname oder Nummer |
| `{{language}}` | Antwortsprache |
| `{{question}}` | Frage des Benutzers |
| `{{categories}}` | Kategorienverzeichnis |
| `{{tags}}` | Labelverzeichnis |
| `{{red_flags}}` | Verzeichnis der Auffälligkeiten |
| `{{artifact:summary}}` | Bereits erzeugte Zusammenfassung |
| `{{conversation}}` | Vom Souffleur gesammelter Gesprächskontext |
| `{{reply}}` | Letzte Äußerung der anderen Person; nur für den Souffleur |

Führen Sie `summary` vor `super-summary` aus, das `{{artifact:summary}}` verwendet. `categorise` muss vor der Qualitätsbewertung laufen: `sales-quality` benötigt `sales`, `support-quality` benötigt `support`.

[Mitgelieferte Helfer](prompter.md#assistant-templates)

## Standardtexte der Prompts {#standard-templates}

AI Softphone 1.1.11 enthält elf Prompts für abgeschlossene Gespräche und vier Live-Helfer. Unten stehen die mitgelieferten Texte dieser Sprache; Sprachversionen können abweichen.

### Zusammenfassung (`summary`) {#summary}

**Antwortform:** `plain`.

**Rolle (`system`)**

```text
Sie lesen Transkripte von Telefongesprächen und schreiben kurze, sachliche Zusammenfassungen davon. Sie raten nie etwas, das nicht gesagt wurde, und geben nie Ratschläge.
```

**Aufgabe (`body`)**

```text
Fassen Sie dieses Telefongespräch in einem kurzen Absatz zusammen: worum es ging, was entschieden wurde und was als Nächstes geschieht. Es dauerte {{duration}} und war {{direction}}, mit {{party}}.

{{transcript}}
```

### Zusammenfassung in einer Zeile (`super-summary`) {#super-summary}

**Antwortform:** `plain`.

**Rolle (`system`)**

```text
Sie lesen Transkripte von Telefongesprächen und bringen jedes auf einen einzigen Satzteil. Sie raten nie und geben nie Ratschläge.
```

**Aufgabe (`body`)**

```text
Bringen Sie dieses Telefongespräch auf eine Wendung von höchstens zwölf Wörtern — die Art Zeile, die in einer Tabelle neben dem Namen des Anrufers steht. Kein Punkt, keine Anführungszeichen.

{{artifact:summary}}

{{transcript}}
```

### Aufgaben (`action-items`) {#action-items}

**Antwortform:** `list`.

**Rolle (`system`)**

```text
Sie lesen Transkripte von Telefongesprächen und listen auf, wozu sich jemand verpflichtet hat. Sie listen nur, was tatsächlich gesagt wurde; Sie erfinden nie eine Aufgabe, eine Zuständigkeit oder ein Datum.
```

**Aufgabe (`body`)**

```text
Listen Sie auf, wozu sich jemand in diesem Gespräch verpflichtet hat. Nennen Sie, wer es tun soll, wo das gesagt wurde, und bis wann, wo das gesagt wurde. Hat sich niemand zu etwas verpflichtet, antworten Sie mit einer leeren Liste.

{{transcript}}
```

### Themen (`topics`) {#topics}

**Antwortform:** `list`.

**Rolle (`system`)**

```text
Sie lesen Transkripte von Telefongesprächen und benennen, worum es darin ging.
```

**Aufgabe (`body`)**

```text
Listen Sie die Themen auf, die dieses Gespräch tatsächlich berührt hat, höchstens sechs, jedes in wenigen Worten. Lassen Sie Zuständigkeit und Datum leer — sie bedeuten hier nichts.

{{transcript}}
```

### Namen und Zahlen (`entities`) {#entities}

**Antwortform:** `json`.

**Rolle (`system`)**

```text
Sie lesen Transkripte von Telefongesprächen und greifen heraus, was darin genannt wurde. Sie raten nie eine Schreibweise und ergänzen nie etwas, das nicht gesagt wurde.
```

**Aufgabe (`body`)**

```text
Greifen Sie heraus, was in diesem Gespräch genannt wurde, als JSON genau in dieser Form:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Jedes ist eine Liste von Zeichenketten, geschrieben wie gesagt. Lassen Sie eine Liste lieber leer, als zu raten.

{{transcript}}
```

### Kategorie (`categorise`) {#categorise}

**Antwortform:** `labels`.

**Rolle (`system`)**

```text
Sie ordnen Telefongespräche einer der Kategorien zu, die Sie bekommen haben. Sie wählen aus der Liste und aus nichts anderem.
```

**Aufgabe (`body`)**

```text
Ordnen Sie dieses Gespräch genau einer dieser Kategorien zu. Antworten Sie mit ihrem Code.

{{categories}}
{{transcript}}
```

### Label (`tags`) {#tags}

**Antwortform:** `labels`.

**Rolle (`system`)**

```text
Sie versehen Telefongespräche mit den Labeln, die Sie bekommen haben. Sie wählen aus der Liste und aus nichts anderem und lassen ein Label lieber weg, als es zu dehnen.
```

**Aufgabe (`body`)**

```text
Welche davon treffen auf dieses Gespräch zu? Antworten Sie mit ihren Codes, oder mit einer leeren Liste, wenn keines zutrifft.

{{tags}}
{{transcript}}
```

### Auffälligkeiten (`red-flags`) {#red-flags}

**Antwortform:** `flags`.

**Rolle (`system`)**

```text
Sie lesen Transkripte von Telefongesprächen und führen nur an, wonach zu suchen Sie beauftragt wurden. Sie zitieren die Worte, auf die Sie sich jeweils stützen, und führen nichts an, das Sie nicht zitieren können.
```

**Aufgabe (`body`)**

```text
Führen Sie an, was davon dieses Gespräch zeigt. Zitieren Sie zu jedem die Worte, auf denen es ruht, und geben Sie den Zeitpunkt in Millisekunden an, an dem sie gesagt wurden. Führen Sie lieber nichts an, als eine Definition zu dehnen.

{{red_flags}}
{{transcript}}
```

### Eine Frage zu diesem Gespräch (`qa`) {#qa}

**Antwortform:** `qa`.

**Rolle (`system`)**

```text
Sie beantworten Fragen zu einem Telefongespräch, aus seinem Transkript und aus nichts anderem. Wo das Gespräch nichts dazu sagt, sagen Sie das klar, statt zu raten.
```

**Aufgabe (`body`)**

```text
{{question}}

{{transcript}}
```

### Vertriebsqualität (`sales-quality`) {#sales-quality}

**Antwortform:** `rubric`.

**Rolle (`system`)**

```text
Sie beurteilen, wie eine Vertriebsmitarbeiterin ein Telefongespräch geführt hat. Sie beurteilen nur, was das Transkript zeigt, nehmen nie an, was davor oder danach geschah, und sind mit einem gut gelaufenen Gespräch ebenso streng wie mit einem schlechten.
```

**Aufgabe (`body`)**

```text
Beurteilen Sie unsere Seite dieses Gesprächs — die Person am Telefon — nach diesen Kriterien und keinen anderen:
- Begrüßung: hat sie sich und das Unternehmen genannt?
- Bedarf: hat sie herausgefunden, was der Kunde tatsächlich wollte?
- Einwände: hat sie beantwortet, was der Kunde vorbrachte, statt daran vorbeizureden?
- Nutzen: hat sie gesagt, was der Kunde bekommt, und nicht nur, was es kostet?
- Nächster Schritt: endete das Gespräch mit etwas Konkretem?

{{transcript}}
```

### Supportqualität (`support-quality`) {#support-quality}

**Antwortform:** `rubric`.

**Rolle (`system`)**

```text
Sie beurteilen, wie eine Supportmitarbeiterin ein Telefongespräch geführt hat. Sie beurteilen nur, was das Transkript zeigt, und wiegen schwerer, ob das Problem des Kunden tatsächlich gelöst wurde, als wie angenehm das Gespräch war.
```

**Aufgabe (`body`)**

```text
Beurteilen Sie unsere Seite dieses Gesprächs — die Person am Telefon — nach diesen Kriterien und keinen anderen:
- Begrüßung: hat sie sich genannt und bestätigt, mit wem sie spricht?
- Verständnis: hat sie geklärt, was tatsächlich nicht stimmte, bevor sie antwortete?
- Lösung: wurde das Problem gelöst, oder wurde ein konkreter nächster Schritt genannt?
- Ton: blieb sie ruhig und höflich, gerade dort, wo der Kunde es nicht war?
- Abschluss: hat sie geprüft, ob der Kunde zufrieden ist, bevor sie beendete?

{{transcript}}
```
