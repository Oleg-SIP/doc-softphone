---
title: Ein SIP-Konto einrichten
sidebar_position: 1
description: AI Softphone unter Einstellungen → Konten mit Ihrer IP-Telefonanlage oder Ihrem SIP-Anbieter verbinden.
---

AI Softphone funktioniert mit jeder IP-Telefonanlage und jedem SIP-Anbieter. Sie können an so vielen Konten (Leitungen) angemeldet sein, wie Sie haben, und jedes Konto hat seine eigenen Einstellungen.

Öffnen Sie **Einstellungen → Konten**.

<Shot name="05_settings_accounts" alt="Einstellungen → Konten: zwei Konten, beide angemeldet" />

## Die Liste der Konten {#the-list-of-accounts}

Jedes Konto ist eine Zeile mit:

- einem **Kontrollkästchen**, das das Konto ein- oder ausschaltet;
- einem **Punkt**, der grün ist, wenn das Konto an der Telefonanlage angemeldet ist;
- dem Namen und darunter `benutzer@server`;
- einer Taste **Trennen**, die das Konto von der Telefonanlage abmeldet;
- den Tasten **▲** und **▼**, die das Konto in der Liste nach oben oder unten schieben. Die Kontochips im [Hauptfenster](../interface/main-window.md) folgen derselben Reihenfolge.

Die Taste **Hinzufügen** oben rechts fügt ein Konto hinzu. Klicken Sie auf eine Zeile, um das Formular darunter zu öffnen.

## Ein Konto hinzufügen {#adding-an-account}

<Shot name="05d_account_add" alt="Das leere Formular eines neuen Kontos" />

Drücken Sie **Hinzufügen**. Unter der Liste öffnet sich ein leeres Formular, mit dem Cursor in **Name (freiwillig)**. Füllen Sie die Felder unten aus, öffnen Sie **Servereinstellungen**, falls die Telefonanlage sie braucht, und drücken Sie **Speichern**. Ein neues Konto beginnt mit den üblichen Werten: UDP auf Port 5060, Anmeldung alle 300 Sekunden erneuert.

## Das Kontoformular {#the-account-form}

<Shot name="05b_account_edit" alt="Das Formular eines Kontos" />

| Feld | Was einzugeben ist |
| --- | --- |
| **Name (freiwillig)** | Der Name auf dem Chip des Kontos im Hauptfenster und bei seinen Anrufen. Ist er leer, wird das Konto als `benutzer@server` angezeigt. |
| **Benutzername** | Der Benutzername oder die Nebenstellennummer von Ihrer Telefonanlage oder Ihrem Anbieter. |
| **Passwort** | Das Passwort dazu. Das Feld bleibt leer, wenn Sie zum Formular zurückkehren. Es liegt im Schlüsselbund des Rechners, nie in einer Einstellungsdatei. |
| **Serveradresse** | Die Adresse der Telefonanlage oder des SIP-Servers des Anbieters, zum Beispiel `pbx.example.com`. |
| **Servereinstellungen** | Klappt die selteneren Einstellungen der Verbindung auf; siehe unten. |
| **Automatisch annehmen** | Unter **Annehmen**: nimmt eingehende Anrufe auf diesem Konto an, ohne dass Sie etwas drücken. Standardmäßig aus. |

Drücken Sie **Speichern**, um die Änderungen zu übernehmen. **Abbrechen** verwirft sie und **Löschen** entfernt das Konto.

Ist der Punkt neben dem Konto grün, ist das Konto angemeldet, und der Chip des Kontos im Hauptfenster zeigt es ebenfalls. Bleibt er grau oder rot, öffnen Sie die [Diagnose](../troubleshooting/diagnostics.md): Der Reiter **SIP** zeigt die Anfrage `REGISTER` und was der Server geantwortet hat.

## Servereinstellungen {#server-settings}

Die meisten Telefonanlagen brauchen hier nichts. Drücken Sie **Servereinstellungen**, um sie einzublenden; dieselbe Taste heißt dann **Servereinstellungen ausblenden**.

<Shot name="05c_account_server_settings" alt="Die aufgeklappten Servereinstellungen eines Kontos" />

| Feld | Standard | Was es ist |
| --- | --- | --- |
| **Authentifizierungsbenutzer** | leer | Der Name, unter dem die Telefonanlage das Passwort prüft, wenn er nicht dem **Benutzernamen** entspricht. Im Bild ist die Nebenstelle `201`, und die Telefonanlage authentifiziert sie als `buero201`. |
| **Transport** | UDP | Das Protokoll der Verbindung zum Server. Eine Auswahlliste. |
| **Port** | 5060 | Der Port des Servers. |
| **Ausgehender Proxy** | leer | Ein Proxy, über den jede Anfrage laufen muss, falls Ihr Anbieter einen vorgibt. |
| **Registrar** | leer | Die Adresse, an der sich das Telefon anmeldet, falls es nicht die **Serveradresse** ist. |
| **Neu anmelden, Sekunden** | 300 | Wie oft das Telefon seine Anmeldung erneuert. |
| **Wähltöne** | Tonstrom | Wie die Töne der Wähltasten an die Telefonanlage gesendet werden. Eine Auswahlliste. Ändern Sie sie nur, wenn die Telefonanlage die Töne nicht hört. |

Die Codecs, die das Telefon anbietet, werden nicht pro Konto eingestellt; sie stehen in den [Anrufeinstellungen](calls.md#audio-formats).
