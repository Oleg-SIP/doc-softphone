---
title: Häufige Probleme
sidebar_position: 2
description: "Was zu prüfen ist, wenn sich ein Konto nicht anmeldet, kein Ton da ist, ein Anruf oder eine Besprechung nicht aufgenommen wird, kein Transkript entsteht oder ein Link, ein Tastenkürzel oder die API nichts tut."
---

Jeder Eintrag verweist auf die Einstellung, die darüber entscheidet. Steht die Antwort nicht hier, öffnen Sie die [Diagnose](/troubleshooting/diagnostics): Sie zeigt, was Telefon und Telefonanlage einander sagen.

## Das Konto meldet sich nicht an {#the-account-will-not-register}

Der Punkt neben dem Konto unter **Einstellungen → Konten** bleibt grau oder rot.

1. Prüfen Sie **Benutzername**, **Passwort** und **Serveradresse** im [Kontoformular](/sip-accounts/setup).
2. Prüft Ihre Telefonanlage das Passwort unter einem anderen Namen als der Nebenstelle, füllen Sie **Authentifizierungsbenutzer** unter **Servereinstellungen** aus.
3. Prüfen Sie **Transport** und **Port** gegen das, was die Telefonanlage erwartet.
4. Öffnen Sie den Reiter **SIP** des [Diagnosefensters](/troubleshooting/diagnostics) und sehen Sie sich die Anfrage `REGISTER` und die Antwort des Servers an.

## Ich höre nichts, oder man hört mich nicht {#i-cannot-hear-or-i-cannot-be-heard}

Öffnen Sie [Einstellungen → Geräte](/sip-accounts/devices).

- Sagen Sie etwas: Der Balken unter **Mikrofon** muss sich bewegen. Tut er es nicht, wählen Sie ein anderes Mikrofon.
- Drücken Sie **Prüfen** unter **Lautsprecher**, um auf dem gewählten Gerät einen Klang zu hören.
- Prüfen Sie die Schieberegler **Lautstärke**. Stummschalten auf der Gesprächskarte und das [Tastenkürzel](/program/shortcuts) **Das Mikrofon stummschalten** schalten das Mikrofon während eines Gesprächs aus.
- Der Klingelton kann auf einem anderen Gerät klingeln als dem, auf dem Sie sprechen — **Klingelton**, die zweite Auswahlliste.

## Das Gespräch klingt schlecht oder kommt nicht zustande {#the-call-sounds-bad-or-does-not-start}

Die Codecs werden in der Reihenfolge der Liste unter [Einstellungen → Anrufe](/sip-accounts/calls#audio-formats) angeboten. Lassen Sie die Codecs an, die Ihre Telefonanlage verwendet, und setzen Sie den besten davon an die Spitze. Eine Änderung gilt ab dem nächsten Anruf.

## Ein zweiter Anruf klingelt nicht {#a-second-call-does-not-ring}

Was passiert, wenn jemand anruft, während Sie telefonieren, wird unter [Anklopfen](/sip-accounts/calls#call-waiting) festgelegt.

## Ein Anruf wurde nicht aufgenommen {#a-call-was-not-recorded}

- **Einstellungen → Aufnahme**, die erste Auswahlliste, legt fest, welche Anrufe aufgenommen werden; der Standard **Von Hand** nimmt nur auf, wenn Sie auf der Gesprächskarte die Aufnahme drücken. Siehe [Anrufe aufnehmen](/recordings/call-recording).
- Die Aufnahme beginnt, wenn der Anruf angenommen wird, ein nicht angenommener Anruf hat also keine Datei.
- Das Modul **Aufnahme** muss unter [Module](/application/modules) eingeschaltet sein.
- Aufnahmen werden durch die Grenzen unter **Aufbewahrung** entfernt; eine angeheftete Aufnahme wird nie entfernt.

## Eine Besprechung in einer anderen Anwendung wurde nicht mitgeschnitten {#a-meeting-in-another-application-was-not-captured}

Siehe [Mitschnitt](/capture/).

- **Tonmitschnitt erlauben** unter **Einstellungen → Mitschnitt** muss eingeschaltet sein.
- Steht **Automatischer Start** auf **Nachfragen** (Standard), beantworten Sie die Frage, wenn sie erscheint; bei **Nie** drücken Sie **Aufnehmen** selbst.
- Verwenden Sie **Prüfung** im selben Reiter: Der obere Balken muss sich bewegen, wenn Sie sprechen, der untere, wenn etwas abgespielt wird.
- Das Modul **Mitschnitt** muss unter [Module](/application/modules) eingeschaltet sein.

## Es gibt eine Aufnahme, aber kein Transkript und keine Zusammenfassung {#there-is-a-recording-but-no-transcript-or-summary}

- Ein Gespräch wird nur dann von selbst transkribiert und ausgewertet, wenn unter [Einstellungen → Verarbeitung](/ai-processing/processing) **Gespräche automatisch verarbeiten** eingeschaltet ist. Sonst fordern Sie es im [Aufnahmefenster](/recordings/recordings-window) an.
- Es muss einen [Spracherkenner](/ai-processing/transcription) und ein [Sprachmodell](/ai-processing/processing#language-models) geben, und jedes muss unter seiner Adresse antworten.
- Ist die monatliche **Geldgrenze** oder **Token-Grenze** erreicht, halten die automatischen Regeln bis zum Monatswechsel an. Selbst anzufordern wird nie angehalten.
- Die Schritte unter [Einstellungen → Übersicht](/interface/settings-overview) zeigen, was noch einzurichten ist.

## Das Telefon ist verschwunden, als ich das Fenster geschlossen habe {#the-phone-disappeared-when-i-closed-the-window}

Mit **Das Telefon weiterlaufen lassen, wenn das Fenster geschlossen wird** läuft das Telefon weiter, und Anrufe kommen weiter an. Das Symbol im Infobereich (auf macOS in der Menüleiste) holt das Fenster zurück. Siehe [Start](/program/startup).

## Eine Telefonnummer im Browser oder im CRM ruft nicht an {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Drücken Sie **Anruf-Links mit diesem Telefon öffnen** unter [Einstellungen → Start](/program/startup#call-links). Eine angeklickte Nummer landet in der Wählhilfe und wartet dort, sofern **Sofort anrufen, ohne Anrufen zu drücken** nicht eingeschaltet ist.

## Die Lampe einer Taste bleibt grau {#a-buttons-lamp-stays-grey}

Die Telefonanlage sagt nicht, ob die Nebenstelle frei ist. Die Taste wählt trotzdem. Siehe [Tasten](/sip-accounts/buttons).

## Die REST-API antwortet nicht {#the-rest-api-does-not-answer}

- **Anderen Programmen auf diesem Rechner erlauben, das Telefon zu steuern** muss unter [Einstellungen → Integration](/integration/rest-api) eingeschaltet sein, und das Modul **Integration** unter [Module](/application/modules).
- Die Adresse ist `http://127.0.0.1:8377`, sofern Sie den **Port** nicht geändert haben.
- Eine Gruppe, die Sie unter **Zugang** nicht geöffnet haben, beantwortet jede Anfrage mit `404`.
- Haben Sie ein **Token** gesetzt, müssen Anfragen, die gespeicherte Daten ändern, es in der Kopfzeile `Authorization` tragen.
- Weitere Symptome stehen unter [Wenn es nicht funktioniert](/integration/rest-api#when-it-does-not-work).

## Webhooks kommen nicht an {#webhooks-do-not-arrive}

Drücken Sie **Ein Testereignis senden** unter [Einstellungen → Integration](/integration/webhooks). Die Zähler `webhooks_failed_total` und `webhooks_dropped_total` der REST-API zeigen, wie die Zustellung läuft; [Wenn nichts ankommt](/integration/webhooks#when-nothing-arrives) erklärt, was jeder bedeutet.

## Ein Tastenkürzel tut nichts {#a-hotkey-does-nothing}

Öffnen Sie [Tastenkürzel](/program/shortcuts). Ein Kürzel funktioniert, wenn das Telefon das Programm ist, das Sie gerade verwenden; um es aus jedem Programm zu nutzen, kreuzen Sie **Überall** an. Hat ein anderes Programm die Kombination belegt, klicken Sie auf das Kürzel und drücken Sie die Kombination erneut.
