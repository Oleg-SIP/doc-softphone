---
title: Verarbeitung
sidebar_position: 2
description: Automatische Verarbeitung von Gesprächen, Sprachmodelle, Prompts, die Regeln, die sie ausführen, und die monatlichen Ausgabengrenzen.
---

**Einstellungen → Verarbeitung** legt fest, was mit einem Gespräch geschieht, sobald es aufgenommen ist, welches Modell die Arbeit macht und was sie kosten darf.

<Shot name="12_settings_processing" alt="Einstellungen → Verarbeitung" />

## Gespräche automatisch verarbeiten {#process-conversations-automatically}

- **Aus:** Nichts geschieht, bis Sie es im [Aufnahmefenster](../interface/recordings.md) verlangen.
- **An:** Die [Regeln](#rules) unten laufen von selbst. Das ist es, was aus einem Gespräch eine Zusammenfassung, eine Kategorie und alles Weitere macht, ohne dass jemand etwas drückt. Ein Modell in der Cloud berechnet jeden dieser Schritte.

## Sprachmodelle {#language-models}

Die Modelle, die ein Transkript lesen und darüber schreiben. Mit **Hinzufügen** legen Sie eines an. Jedes steht mit seinem Namen in der Liste, darunter die Modellkennung und die Adresse seines Dienstes, zum Beispiel `qwen3-32b · http://localhost:8000/v1`. Das als **Vorgabe** markierte — im Bild **QWEN**, ein Modell auf diesem Computer — wird standardmäßig verwendet: von den Prompts und von den Helfern des [Souffleurs](prompter.md), die kein eigenes Modell nennen. **Prüfen** im Formular eines Modells stellt fest, ob der Dienst wirklich antwortet, bevor Sie sich darauf verlassen.

- Ein Modell **auf Ihrem eigenen Rechner** behält jedes Gespräch im Haus und kostet im Betrieb nichts.
- Ein Modell in der Cloud — OpenAI, Claude, Mistral, DeepSeek, Groq und andere — wird pro Nutzung bezahlt. Das Programm zeigt den Preis jedes Aufrufs in Token und in Geld.

## Prompts {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Einstellungen → Verarbeitung: die Prompts" />

*Was die Modelle gefragt werden.* Jeder Prompt kam mit dem Programm, und jeder ist Ihrer, um ihn zu ändern — und zurückzusetzen. Jeder steht mit seinem Namen und darunter dem, was er schreibt und in welcher Form, in der Liste; **▲** und **▼** ändern die Reihenfolge der Liste. Die Form — **Antwort**, **Punkte**, **Label**, **JSON**, **Fließtext**, **Auffälligkeiten** oder **Kriterien** — entscheidet, wie die Antwort gespeichert und angezeigt wird. Die Prompts beschreibt [Personal Prompt Studio](prompt-studio.md). **Hinzufügen** legt einen eigenen Prompt an.

Nach einem Wechsel der Oberflächensprache und **Voreinstellungen wiederherstellen** stehen die Prompts in der neuen Sprache, und bei jedem steht rechts *geändert*.

## Regeln {#rules}

<Shot name="12c_settings_processing_rules" alt="Einstellungen → Verarbeitung: die Regeln" />

*Was von selbst läuft, in dieser Reihenfolge. Jede greift höchstens einmal je Gespräch.* Eine Regel ist eine Zeile mit einem Kontrollkästchen, das sie ein- oder ausschaltet, ihrem Namen und darunter dem, was sie tut. **▲** und **▼** ändern die Reihenfolge. Das Programm bringt acht mit:

| Regel | Tut | Wann |
| --- | --- | --- |
| **Jedes Gespräch transkribieren** | Transkribiert es. | immer |
| **Zusammenfassen** | Fragt ein Modell: **Zusammenfassung**. | immer |
| **Auf eine Zeile bringen** | Fragt ein Modell: **Zusammenfassung in einer Zeile**. | immer |
| **Einer Kategorie zuordnen** | Fragt ein Modell: **Kategorie**. | immer |
| **Mit Labeln versehen** | Fragt ein Modell: **Label**. | immer |
| **Alles anführen, was einen Blick wert ist** | Fragt ein Modell: **Auffälligkeiten**. | immer |
| **Beurteilen, wenn es Vertrieb war** | Fragt ein Modell: **Vertriebsqualität**. | nur wenn die Kategorie **Vertrieb** ist |
| **Beurteilen, wenn es Support war** | Fragt ein Modell: **Supportqualität**. | nur wenn die Kategorie **Support** ist |

Die Reihenfolge zählt: Die letzten beiden Regeln brauchen die Kategorie, die die Regel davor gesetzt hat. **Hinzufügen** legt eine eigene Regel an.

## Ausgaben {#spending}

<Shot name="12d_settings_processing_spending" alt="Einstellungen → Verarbeitung: die Ausgaben des Monats und die zwei Grenzen" />

Unter **Ausgaben** zeigt das Programm, was in diesem Monat ausgegeben wurde und für wie viele Anfragen — im Bild *In diesem Monat wurde nichts verarbeitet*, und zum Beispiel *Diesen Monat: 40.492 Token, über 84 Anfragen, kostenlos*, sobald etwas verarbeitet wurde.

| Feld | Bedeutung |
| --- | --- |
| **Geldgrenze, monatlich** | Das Höchste, was die Modelle in einem Monat kosten dürfen. |
| **Token-Grenze, monatlich** | Die meisten Token, die sie in einem Monat verbrauchen dürfen. |

Es gibt zwei Grenzen, weil sich ein Monat in zwei Dingen zählen lässt. Beide sind leer, bis Sie sie ausfüllen. Ist eine davon erreicht, halten die automatischen Regeln bis zum Monatswechsel an. **Was Sie selbst anfordern, wird nie angehalten.** Der [Souffleur](prompter.md#spending) hat eigene Obergrenzen, damit ein Monat voller Zusammenfassungen ihn nicht mitten im Gespräch verstummen lassen kann.

## Voreinstellungen {#defaults}

**Voreinstellungen wiederherstellen** setzt Prompts und Regeln auf den Auslieferungsstand zurück, in der aktuellen Oberflächensprache. Ihre Sprachmodelle bleiben unberührt.
