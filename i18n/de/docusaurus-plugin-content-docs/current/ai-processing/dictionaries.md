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

Dinge, die Aufmerksamkeit brauchen, im Gespräch gefunden, mit Beleg und Zeitpunkt — zum Beispiel *Verärgerter Kunde* oder *Abwanderungsgefahr*. Auffälligkeiten sind im [Aufnahmefenster](../recordings/recordings-window.md) rot gezeichnet, und jede trägt einen Schweregrad: niedrig, mittel oder hoch.

## Antwortformen und Sprache {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Einstellungen → Verzeichnisse: Antwortformen und Sprachanweisungen" />

Weiter unten im Reiter stehen die Anweisungen, aus denen die Prompts zusammengesetzt werden. Sie liegen hier, damit jeder Prompt denselben Wortlaut verwenden kann, und Sie können sie wie jeden anderen Eintrag ändern.

| Name | Code | Was sie dem Modell sagt |
| --- | --- | --- |
| **Label** | `shape-labels` | In JSON antworten, mit einer Liste von Codes und wie sicher es sich bei jedem ist, nur mit Codes aus der Liste, die es bekommen hat. |
| **Bewertung** | `shape-score` | Mit einer Bewertung, ihrer Begründung und den Worten antworten, auf die sie sich stützt. |
| **Kriterien** | `shape-rubric` | Mit einer Gesamtbewertung und einer Bewertung je Kriterium antworten. |
| **Auffälligkeiten** | `shape-flags` | Mit Codes aus der Liste antworten, jeder mit einem Schweregrad. |
| **Antwort** | `shape-qa` | Mit der Antwort antworten oder klar sagen, dass das Gespräch dazu nichts sagt, und mit den Worten, auf die sich die Antwort stützt. |
| **JSON** | `shape-json` | Nur mit JSON antworten, in der oben verlangten Form. |
| **Wie gesprochen** | `language-as-spoken` | In der Sprache schreiben, in der das Gespräch geführt wurde. |
| **Wie gesprochen, benannt** | `language-as-spoken-named` | Dasselbe, mit Nennung der Sprache. |
| **Eine benannte Sprache** | `language-named` | In der Sprache schreiben, die Sie nennen. |

**Hinzufügen** am Ende der Liste fügt einen Eintrag hinzu.

## Voreinstellungen {#defaults}

**Voreinstellungen wiederherstellen** setzt jedes Verzeichnis auf den Auslieferungsstand zurück, in der aktuellen Oberflächensprache. Worunter Ihre Gespräche bereits abgelegt sind, bleibt unberührt.
