---
title: Personal Prompt Studio
sidebar_position: 3
description: Die Prompts, die Ihre Gespräche auswerten, die Regeln, die sie ausführen, und wie Sie sie sich zu eigen machen.
---

**Personal Prompt Studio** ist der Teil von AI Softphone, der Ihre Gespräche auf Ihre Weise auswertet. Die Auswertung entsteht durch Prompts: Das Programm bringt elf mit, einsatzbereit, sobald Transkription und ein Sprachmodell verbunden sind, und Sie können sie in normaler Sprache ändern, duplizieren und eigene hinzufügen. Sie stehen unter **Prompts** in [Einstellungen → Verarbeitung](processing.md#prompts).

Ihr LLM, Ihr Schlüssel, Ihre Kontrolle: Verbinden Sie das Modell Ihrer Wahl mit Ihrem eigenen Schlüssel, über einen unterstützten Dienst oder eine kompatible API — oder ein Modell, das in Ihrer Organisation betrieben wird. Mit der [Transkription](transcription.md#your-own-models) auf eigener Hardware bleiben Ton und Transkripte in Ihrer Umgebung.

<Shot name="12b_settings_processing_prompts" alt="Die Liste der Prompts unter Einstellungen → Verarbeitung" />

## Die mitgelieferten Prompts {#the-prompts-that-come-with-the-program}

Die zweite Spalte ist das, was die Liste unter dem Namen des Prompts zeigt: was er schreibt und in welcher Form.

| Prompt | Form | Was er schreibt |
| --- | --- | --- |
| **Zusammenfassung** | Fließtext | Die wichtigsten Punkte, Entscheidungen und nächsten Schritte in einem kurzen Absatz. |
| **Zusammenfassung in einer Zeile** | Fließtext | Einen kurzen Titel, an dem man das Gespräch in einer Liste erkennt. |
| **Aufgaben** | Punkte | Wer sich verpflichtet hat, was bis wann zu tun, mit den eigenen Worten. |
| **Themen** | Punkte | Die behandelten Themen in wenigen Worten. |
| **Namen und Zahlen** | JSON | Personen, Firmen, Daten, Beträge und Bezüge. |
| **Kategorie** | Label | Ordnet das Gespräch einer Ihrer [Kategorien](dictionaries.md) zu. |
| **Label** | Label | Versieht es mit Ihren [Labeln](dictionaries.md), damit es sich später finden lässt. |
| **Auffälligkeiten** | Auffälligkeiten | Probleme, mit Beleg und Zeitpunkt im Gespräch. |
| **Eine Frage zu diesem Gespräch** | Antwort | Beantwortet eine Frage, die Sie zu einem Gespräch stellen, aus seinem Transkript. |
| **Vertriebsqualität** | Kriterien | Bewertet das Gespräch nach Vertriebskriterien, die Sie bearbeiten können. |
| **Supportqualität** | Kriterien | Beurteilt, wie gut das Problem verstanden und behandelt wurde. |

Die Formen sind feste Gestalten einer Antwort, die es dem Programm erlauben, sie zu speichern und später zu durchsuchen: **Label** sind Codes aus einer Ihrer Listen, **Auffälligkeiten** sind Codes mit einem Schweregrad, **Kriterien** sind eine Bewertung mit Begründung und einer Bewertung je Kriterium, **Antwort** ist eine Antwort mit den Worten, auf die sie sich stützt. Die Anweisungen, die einem Modell die Form beschreiben, liegen in den [Verzeichnissen](dictionaries.md#answer-shapes-and-language).

In AI Softphone geführte Anrufe, vom Computer [mitgeschnittene](/capture/) Besprechungen und importierte Aufnahmen laufen durch dieselben Prompts, sobald sie ein Transkript haben.

Aufgaben halten fest, was vereinbart wurde — sie senden keine Nachrichten, buchen keine Termine und legen keine Tickets für Sie an.

## Machen Sie es zu Ihrem {#making-it-yours}

- Ändern Sie in normaler Sprache, was ein Prompt fragt: wonach er sucht, das Antwortformat und die Sprache, in der er antwortet.
- Duplizieren Sie einen Prompt, um eine Variante auszuprobieren.
- Wählen Sie das Modell für jeden Prompt — auf Ihrem eigenen Rechner oder in der Cloud.
- Legen Sie die Reihenfolge fest, in der Prompts laufen, schalten Sie sie ein und aus und knüpfen Sie sie an Bedingungen — das geschieht mit den [Regeln](processing.md#rules): Eine Vertriebsbewertung läuft zum Beispiel nur bei Gesprächen der Kategorie **Vertrieb**.
- Pflegen Sie Ihre eigenen Kategorien, Label und Auffälligkeiten in den [Verzeichnissen](dictionaries.md).
- Begrenzen Sie die Kosten mit den [monatlichen Grenzen](processing.md#limits).

Die ursprünglichen Prompts und Regeln stellen Sie mit **Voreinstellungen wiederherstellen** unter **Voreinstellungen** in [Einstellungen → Verarbeitung](processing.md#defaults) wieder her.
