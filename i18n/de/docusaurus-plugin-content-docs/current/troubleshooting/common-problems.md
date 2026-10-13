---
title: Häufige Probleme
sidebar_position: 2
description: "Was zu prüfen ist, wenn sich ein Konto nicht anmeldet, kein Ton da ist, ein Anruf oder eine Besprechung nicht aufgenommen wird, kein Transkript entsteht, der Souffleur nicht startet oder ein Link, ein Tastenkürzel oder die API nichts tut, und was die eigenen Meldungen des Telefons bedeuten."
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

- **Einstellungen → Aufnahme**, die erste Auswahlliste, legt fest, welche Anrufe aufgenommen werden; der Standard **Von Hand** nimmt nur auf, wenn Sie auf der Gesprächskarte die Aufnahme drücken. Siehe [Aufnahmen](/recordings).
- Die Aufnahme beginnt, wenn der Anruf angenommen wird, ein nicht angenommener Anruf hat also keine Datei.
- Das Modul **Aufnahme** muss unter [Module](/application/modules) eingeschaltet sein.
- Aufnahmen werden durch die Grenzen unter **Aufbewahrung** entfernt; eine angeheftete Aufnahme wird nie entfernt.

## Eine Besprechung in einer anderen Anwendung wurde nicht mitgeschnitten {#a-meeting-in-another-application-was-not-captured}

Siehe [Mitschnitt](/capture/).

- **Tonmitschnitt erlauben** unter **Einstellungen → Mitschnitt** muss eingeschaltet sein.
- Steht **Automatischer Start** auf **Nachfragen** (Standard), beantworten Sie die Frage, wenn sie erscheint; bei **Nie** drücken Sie die Aufnahmetaste selbst.
- Verwenden Sie **Prüfung** im selben Reiter: Der obere Balken muss sich bewegen, wenn Sie sprechen, der untere, wenn etwas abgespielt wird.
- Das Modul **Mitschnitt** muss unter [Module](/application/modules) eingeschaltet sein.

## Es gibt eine Aufnahme, aber kein Transkript und keine Zusammenfassung {#there-is-a-recording-but-no-transcript-or-summary}

- Ein Gespräch wird nur dann von selbst transkribiert und ausgewertet, wenn unter [Einstellungen → Verarbeitung](/ai-processing/processing) **Gespräche automatisch verarbeiten** eingeschaltet ist. Sonst fordern Sie es im [Aufnahmefenster](/interface/recordings) an.
- Es muss einen [Spracherkenner](/ai-processing/transcription) und ein [Sprachmodell](/ai-processing/processing#language-models) geben, und jedes muss unter seiner Adresse antworten.
- Ist die monatliche **Geldgrenze** oder **Token-Grenze** erreicht, halten die automatischen Regeln bis zum Monatswechsel an. Selbst anzufordern wird nie angehalten.
- Die Schritte unter [Einstellungen → Übersicht](/interface/settings-overview) zeigen, was noch einzurichten ist.

## Der Souffleur erscheint nicht oder startet nicht {#the-prompter-does-not-appear-or-does-not-start}

**Souffleur** erscheint in der Liste unten im Telefon nur, wenn drei Dinge vorhanden sind: ein Spracherkenner mit einer **Adresse für den Souffleur**, der sein **Prüfen** unter [Einstellungen → Transkription](/ai-processing/transcription#live-recognition-for-the-prompter) bestanden hat, ein Sprachmodell und das Häkchen **Souffleur erlauben** unter [Einstellungen → Souffleur](/ai-processing/prompter). Das Modul **Souffleur** muss unter [Module](/application/modules) eingeschaltet sein.

Öffnet sich das Fenster, aber der Souffleur startet nicht, sagt die Zeile unter seinen Schaltflächen, was fehlt. [Wenn er nicht startet](/interface/prompter#when-it-does-not-start) listet alle Meldungen auf und was zu tun ist.

## Das Telefon ist verschwunden, als ich das Fenster geschlossen habe {#the-phone-disappeared-when-i-closed-the-window}

Mit **Das Telefon weiterlaufen lassen, wenn das Fenster geschlossen wird** läuft das Telefon weiter, und Anrufe kommen weiter an. Das Symbol im Infobereich (auf macOS in der Menüleiste) holt das Fenster zurück. Auf einem Desktop ohne Infobereich liegt das Telefon minimiert in der Taskleiste. Siehe [Start](/program/startup).

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

## Meldungen des Telefons {#messages-the-phone-shows}

Wenn etwas nicht klappt, sagt das Telefon in einer eigenen Zeile, warum. Eine Zeile unter einer Liste verschwindet nach ein paar Sekunden von selbst.

### Wenn ein Anruf nicht zustande kommt {#when-a-call-is-not-placed}

| Meldung | Was zu tun ist |
| --- | --- |
| *Es ist kein Konto eingerichtet* | Legen Sie ein Konto unter [Einstellungen → Konten](/sip-accounts/setup) an. |
| *Es ist kein Konto eingeschaltet, also gibt es keine Leitung, von der aus gewählt werden könnte.* | Setzen Sie unter **Einstellungen → Konten** das Häkchen bei einem Konto. |
| *Es ist noch keine Leitung angemeldet.* | Das Konto ist eingeschaltet, aber noch nicht an der Telefonanlage angemeldet. Warten Sie, bis sein Punkt grün wird; wenn nicht, siehe [Das Konto meldet sich nicht an](#the-account-will-not-register). |
| *Es laufen bereits so viele Gespräche, wie dieses Telefon trägt.* | Legen Sie bei einem der Anrufe auf und rufen Sie dann erneut an. |
| *Das Konto, von dem aus das gewählt worden wäre, gibt es nicht mehr.* | Die Zeile gehört zu einem Konto, das inzwischen gelöscht wurde. Wählen Sie die Nummer im Wählfeld. |
| *Diese Zeile hat keine Nummer zum Zurückrufen.* | Der Anrufer hat seine Nummer unterdrückt, es gibt also nichts zurückzurufen. |

### Wenn ein Konto sich nicht verbindet {#when-an-account-does-not-connect}

| Meldung | Was zu tun ist |
| --- | --- |
| *Diese Serveradresse war nicht auffindbar. Prüfen Sie sie auf Tippfehler.* | Prüfen Sie **Serveradresse** im [Kontoformular](/sip-accounts/setup). |
| *Der Server war nicht erreichbar. Prüfen Sie Adresse, Port und Netzwerk.* | Prüfen Sie **Serveradresse** sowie **Transport** und **Port** unter **Servereinstellungen**. Auch eine Firewall kann SIP aufhalten. |
| *Der Server hat diesen Benutzernamen oder das Passwort abgelehnt.* | Prüfen Sie **Benutzername** und **Passwort**. Prüft die Telefonanlage das Passwort unter einem anderen Namen, füllen Sie **Authentifizierungsbenutzer** aus. |
| *Das Zertifikat des Servers konnte nicht überprüft werden. Wenn der Administrator des Servers es selbst ausgestellt hat, deaktivieren Sie „Zertifikat prüfen“ in „Servereinstellungen“.* | Erscheint bei einer TLS-Verbindung. Verwendet die Telefonanlage ein selbst ausgestelltes Zertifikat, entfernen Sie das Häkchen bei **Zertifikat prüfen** unter **Servereinstellungen**. |
| *Das Passwort für dieses Konto ließ sich nicht aus dem Schlüsselbund lesen. Entsperren Sie ihn und verbinden Sie erneut.* | Entsperren Sie den Schlüsselbund des Computers (unter macOS die Schlüsselbundverwaltung) und drücken Sie dann **Verbinden** beim Konto. |

### Während eines Gesprächs {#during-a-call}

| Meldung | Was zu tun ist |
| --- | --- |
| *Kein gemeinsames Tonformat* | Telefonanlage und Telefon haben keinen Codec gemeinsam. Schalten Sie unter [Tonformate](/sip-accounts/calls#audio-formats) einen ein, den die Telefonanlage verwendet. |
| *Kein Mikrofon und keine Lautsprecher* | Wählen Sie die Geräte unter [Einstellungen → Geräte](/sip-accounts/devices). |
| *Keine Aufnahme: der Speicherplatz reicht nur noch bis zur Grenze. Geben Sie Platz frei oder ändern Sie die Grenze in den Einstellungen.* | Der freie Platz auf dem Datenträger hat die **Schwelle für freien Speicher** erreicht — siehe [Aufnahmen](/recordings). Schaffen Sie Platz oder senken Sie die Schwelle. |

### Beim Start des Telefons {#when-the-phone-starts}

*Datenbank nicht lesbar* heißt, dass die Datenbank von einer anderen Version des Programms angelegt wurde und diese sie nicht lesen kann. Meist wurde eine ältere Version auf den Daten einer neueren gestartet: Installieren Sie die neuere Version wieder, öffnet sie die Datenbank so, wie sie war. **Neu anfangen** legt dagegen eine leere Datenbank an — jeder Kontakt und jeder Anruf im Verlauf geht verloren, und das lässt sich nicht rückgängig machen. Bevor Sie es drücken, können Sie eine Kopie der Datenbankdatei aufheben; wo sie liegt, steht unter [Diagnose](/troubleshooting/diagnostics#files).
