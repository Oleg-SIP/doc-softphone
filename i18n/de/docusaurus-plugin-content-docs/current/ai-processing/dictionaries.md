---
title: Verzeichnisse
sidebar_position: 4
description: Ihre eigenen Kategorien, Label und Auffälligkeiten — die Wörter, unter denen Ihre Gespräche abgelegt werden.
---

**Einstellungen → Verzeichnisse** enthält die Wörter, unter denen ein Gespräch abgelegt, mit denen es gekennzeichnet oder markiert werden kann. Diese Listen sind das, was den Modellen gezeigt wird und woraus sie wählen müssen, sodass eine Antwort immer etwas ist, wonach Sie später suchen können.

<Shot name="13_settings_dictionaries" alt="Einstellungen → Verzeichnisse" />

**Gelöschte zeigen** zeigt die Einträge, die Sie gelöscht haben.

Jeder Eintrag hat einen Namen, einen kurzen Code in kleiner Schrift und eine Beschreibung, die dem Modell sagt, wann es ihn wählen soll. Gespeichert wird der Code, und den gibt auch die [REST-API](../integration/rest-api.md#taxonomy-and-settings) zurück, er bleibt also gleich, wenn Sie den Eintrag umbenennen.

Mitgelieferte Namen und Beschreibungen stehen in der Oberflächensprache. Nach einem Sprachwechsel bringen Sie sie mit **Voreinstellungen wiederherstellen** unten im Reiter in die neue Sprache.

## Kategorien {#categories}

Worum es im Gespräch ging; *je Gespräch wird eine gewählt*. Das Programm beginnt mit vier:

| Name | Code | Verwendet für |
| --- | --- | --- |
| **Vertrieb** | `sales` | Verkaufen, Angebote, Verhandlungen oder das Nachfassen zu einem Kauf — auch die Frage eines Kunden, was etwas kostet. |
| **Support** | `support` | Hilfe zu einem Produkt oder einer Leistung, die jemand bereits hat: eine Störung, eine Frage zur Bedienung, eine Beschwerde darüber, wie es funktioniert. |
| **Privat** | `personal` | Überhaupt nicht geschäftlich — ein privates Gespräch, das zufällig über diese Leitung lief. |
| **Sonstiges** | `other` | Geschäftlich, aber weder Vertrieb noch Support: ein Lieferant, eine Kollegin, eine Lieferung, eine falsche Nummer. Wählen Sie das, statt zwischen den anderen zu raten. |

Mit **Hinzufügen** legen Sie eine eigene Kategorie an.

## Label {#tags}

Kennzeichen, *die alle zugleich auf dasselbe Gespräch zutreffen dürfen*. Mit **Hinzufügen** legen Sie eines an. Die Liste beginnt mit Einträgen wie:

| Name | Code | Verwendet für |
| --- | --- | --- |
| **Rückruf zugesagt** | `callback` | Jemand in diesem Gespräch hat einen Rückruf zugesagt oder um einen gebeten. |
| **Beschwerde** | `complaint` | Die Gegenseite hat Unzufriedenheit geäußert, ob sie ausgeräumt wurde oder nicht. |
| **Eskaliert** | `escalation` | Das Gespräch wurde an jemand anderen übergeben, oder die Gegenseite hat darum gebeten. |
| **VIP-Kunde** | `vip` | Die Gegenseite wurde als wichtiger Kunde behandelt oder hat sich als solcher bezeichnet. |

## Auffälligkeiten {#red-flags}

Dinge, die Aufmerksamkeit brauchen, im Gespräch gefunden, mit Beleg und Zeitpunkt — zum Beispiel *Verärgerter Kunde* oder *Abwanderungsgefahr*. Auffälligkeiten sind im [Aufnahmefenster](../interface/recordings.md) rot gezeichnet, und jede trägt einen Schweregrad: niedrig, mittel oder hoch.

| Name | Code | `severity` | Verwendet für |
| --- | --- | --- | --- |
| **Verärgerter Kunde** | `angry-customer` | `high` | Die Gegenseite war hörbar verärgert, wurde beleidigend oder drohte mit Abwanderung. |
| **Abwanderungsgefahr** | `churn-risk` | `high` | Kündigung, Nichtverlängerung oder ein Wechsel zu jemand anderem kam zur Sprache, wie ruhig auch immer. |
| **Zusage gemacht** | `promise-made` | `medium` | Unsere Seite hat sich zu etwas Konkretem verpflichtet — einem Termin, einem Preis, einer Behebung, einer Erstattung. |
| **Sensible Daten** | `sensitive-data` | `high` | Eine Kartennummer, ein Passwort, eine Ausweisnummer oder etwas anderes, das nicht in einer Aufnahme stehen sollte, wurde vorgelesen. |
| **Wettbewerber** | `competitor` | `low` | Die Gegenseite hat jemand anderen mit demselben Angebot genannt oder uns damit verglichen. |

## Anweisungen {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Einstellungen → Verzeichnisse: Antwortformen und Sprachanweisungen" />

*Was jedem Prompt über die Form der Antwort und die Sprache, in der sie zu schreiben ist, hinzugefügt wird.* Sie liegen hier, damit jeder Prompt denselben Wortlaut verwenden kann, und Sie können sie wie jeden anderen Eintrag ändern — oder eigene schreiben, etwa *antworte kurz* oder *nenne nie einen Preis*, und sie bei jedem Prompt unter **Ebenfalls senden** ankreuzen.

| Name | Code | Was sie dem Modell sagt |
| --- | --- | --- |
| **Fließtext** | `shape-plain` | In schlichtem Fließtext antworten, ohne JSON, Listen oder Überschriften. |
| **Punkte** | `shape-list` | Mit einer Liste der zu erledigenden Dinge antworten, jeweils mit wer und wann. |
| **Label** | `shape-labels` | In JSON antworten, mit einer Liste von Codes und wie sicher es sich bei jedem ist, nur mit Codes aus der Liste, die es bekommen hat. |
| **Bewertung** | `shape-score` | Mit einer Bewertung, ihrer Begründung und den Worten antworten, auf die sie sich stützt. |
| **Kriterien** | `shape-rubric` | Mit einer Gesamtbewertung und einer Bewertung je Kriterium antworten. |
| **Auffälligkeiten** | `shape-flags` | Mit Codes aus der Liste antworten, jeder mit einem Schweregrad. |
| **Antwort** | `shape-qa` | Mit der Antwort antworten oder klar sagen, dass das Gespräch dazu nichts sagt, und mit den Worten, auf die sich die Antwort stützt. |
| **JSON** | `shape-json` | Nur mit JSON antworten, in der oben verlangten Form. |
| **Wie gesprochen** | `language-as-spoken` | In der Sprache schreiben, in der das Gespräch geführt wurde. |
| **Wie gesprochen, benannt** | `language-as-spoken-named` | Dasselbe, mit Nennung der Sprache. |
| **Eine benannte Sprache** | `language-named` | In der Sprache schreiben, die Sie nennen. |

**Hinzufügen** am Anfang der Liste fügt einen Eintrag hinzu.

## Voreinstellungen {#defaults}

**Voreinstellungen wiederherstellen** setzt jedes Verzeichnis auf den Auslieferungsstand zurück, in der aktuellen Oberflächensprache. Worunter Ihre Gespräche bereits abgelegt sind, bleibt unberührt.

## Antwortformate {#response-formats}

Diese Blöcke geben die mitgelieferten Anweisungen wieder. Sie beschreiben Antwortformate; Alternativen sind eine Schreibweise, keine ausführbaren JSON-Beispiele.

### Fließtext (`shape-plain`) {#shape-plain}

```text
Antworten Sie in Fließtext. Verwenden Sie kein JSON, keine Listen und keine Überschriften.
```

### Punkte (`shape-list`) {#shape-list}

```text
Antworten Sie nur mit JSON, genau in dieser Form:
{"items": [{"text": "was zu tun ist", "owner": "wer, oder leer", "due": "wann, oder leer"}]}
Geben Sie ein leeres Array zurück, wenn es nichts aufzuzählen gibt. Schreiben Sie nichts außerhalb des JSON.
```

### Label (`shape-labels`) {#shape-labels}

```text
Antworten Sie nur mit JSON, genau in dieser Form:
{"labels": [{"code": "ein Code aus der Liste, die Sie bekommen haben", "confidence": 0.0}]}
Verwenden Sie nur Codes aus der Liste. Geben Sie ein leeres Array zurück, wenn keiner passt.
Erfinden Sie keinen Code und schreiben Sie nichts außerhalb des JSON.
```

### Bewertung (`shape-score`) {#shape-score}

```text
Antworten Sie nur mit JSON, genau in dieser Form:
{"score": 3, "rationale": "warum diese Zahl und nicht eine höhere",
 "evidence": [{"at_ms": 0, "quote": "die Worte, auf die Sie sich stützen"}]}
Die Bewertung ist eine ganze Zahl von 1 bis 5. Schreiben Sie nichts außerhalb des JSON.
```

### Kriterien (`shape-rubric`) {#shape-rubric}

```text
Antworten Sie nur mit JSON, genau in dieser Form:
{"overall": 3, "rationale": "warum diese Zahl und nicht eine höhere",
 "criteria": [{"name": "das Kriterium, wie es Ihnen gegeben wurde",
               "verdict": "pass" oder "weak" oder "fail" oder "n/a",
               "note": "ein Satz"}]}
Beurteilen Sie jedes Kriterium, das Sie bekommen haben, und keine anderen. Die Gesamtnote ist eine
ganze Zahl von 1 bis 5. Schreiben Sie nichts außerhalb des JSON.
```

### Auffälligkeiten (`shape-flags`) {#shape-flags}

```text
Antworten Sie nur mit JSON, genau in dieser Form:
{"flags": [{"code": "ein Code aus der Liste, die Sie bekommen haben",
            "severity": "low" oder "medium" oder "high",
            "evidence": "die Worte, auf die Sie sich stützen",
            "at_ms": 0}]}
Verwenden Sie nur Codes aus der Liste und führen Sie jeden höchstens einmal an. Geben Sie ein leeres
Array zurück, wenn nichts zutrifft. Schreiben Sie nichts außerhalb des JSON.
```

### Antwort (`shape-qa`) {#shape-qa}

```text
Antworten Sie nur mit JSON, genau in dieser Form:
{"answer": "Ihre Antwort, oder sagen Sie klar, dass das Gespräch dazu nichts sagt",
 "citations": [{"at_ms": 0, "quote": "die Worte, auf denen Ihre Antwort ruht"}]}
Antworten Sie aus nichts anderem als dem Gespräch. Schreiben Sie nichts außerhalb
des JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Antworten Sie nur mit JSON, in der oben verlangten Form. Schreiben Sie nichts außerhalb des JSON.
```

### Wie gesprochen (`language-as-spoken`) {#language-as-spoken}

```text
Schreiben Sie Ihre Antwort in derselben Sprache, in der das Gespräch geführt wurde.
```

### Wie gesprochen, benannt (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Schreiben Sie Ihre Antwort in derselben Sprache, in der das Gespräch geführt wurde, nämlich {language}.
```

### Eine benannte Sprache (`language-named`) {#language-named}

```text
Schreiben Sie Ihre Antwort in dieser Sprache: {language}.
```
