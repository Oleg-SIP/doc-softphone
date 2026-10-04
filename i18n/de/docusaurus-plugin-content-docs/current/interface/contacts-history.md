---
title: Kontakte und Verlauf
sidebar_position: 2
description: Das Adressbuch und die Anrufliste, neben dem Telefon.
---

**Kontakte** und **Verlauf** öffnen sich als zwei Reiter rechts vom Telefon, sodass Sie während eines Gesprächs eine Nummer nachschlagen können.

## Kontakte {#contacts}

<Shot name="03_contacts" alt="Der Reiter Kontakte" />

- **Suchen** filtert die Liste beim Tippen.
- **Hinzufügen** legt einen Kontakt an.
- Jeder Kontakt steht mit einem Namen und darunter der Nummer und dem Konto, über das er angerufen wird, zum Beispiel *231 · 201 Büro*.

Ein eingehender Anruf von einer bekannten Nummer zeigt den Namen des Kontakts, ebenso die Listen der letzten Anrufe und der Anrufliste — so funktioniert die Anruferkennung.

### Einen Kontakt bearbeiten {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Ein Kontakt in Bearbeitung" />

Wählen Sie einen Kontakt aus, damit rechts in seiner Zeile ein Stift und ein Hörer erscheinen. Der Hörer ruft den Kontakt an; der Stift öffnet das Formular unter der Zeile:

| Feld | Was einzugeben ist |
| --- | --- |
| **Name** | Wie der Kontakt angezeigt wird. |
| **Nummer** | Die zu wählende Nummer. |
| Auswahlliste unter **Nummer** | Das Konto, über das der Kontakt angerufen wird. |

**Speichern** übernimmt die Änderungen, **Abbrechen** verwirft sie und **Löschen** entfernt den Kontakt.

## Verlauf {#history}

<Shot name="21_history" alt="Der Reiter Verlauf" />

Die Anrufliste, neueste zuerst. Oben stehen:

- die Auswahlliste, standardmäßig **Alle Anrufe**, die die Liste auf eine Art von Anrufen eingrenzt;
- **Suchen**, das nach dem filtert, was Sie eintippen.

Jeder Eintrag hat ein Symbol für die Art des Anrufs — einen ausgehenden Hörer oder einen roten Hörer mit Uhr für einen verpassten Anruf —, den Namen der Gegenseite (oder die Nummer) und darunter das Datum, was aus dem Anruf wurde, seine Dauer, die Nummer und das Konto. Jüngere Anrufe stehen als *Gestern, 22:33* oder mit dem Wochentag, ältere mit dem Datum.

| Was aus dem Anruf wurde | Angezeigt als |
| --- | --- |
| Sie haben gesprochen | **Ausgehend** oder eingehend, und die Dauer, zum Beispiel *48 s* |
| Ein eingehender Anruf wurde nicht angenommen | **Verpasst** |
| Ein von Ihnen gewählter Anruf kam nicht zustande | **Besetzt oder abgelehnt** |

Wählen Sie einen Eintrag aus, um rechts bis zu vier Tasten anzuzeigen:

| Taste | Bewirkt |
| --- | --- |
| Person mit Plus | Fügt die Nummer zu den [Kontakten](#contacts) hinzu. |
| ▶ | Spielt die Aufnahme des Anrufs ab, falls er aufgenommen wurde. |
| Papierkorb | Löscht den Eintrag. |
| Hörer | Ruft die Nummer zurück. |

### Wie lange die Liste aufbewahrt wird {#how-long-the-log-is-kept}

Eine Anrufliste ist ein Beleg, deshalb wird nichts daraus entfernt, solange Sie es nicht sagen: Standardmäßig wird jeder Anruf aufbewahrt. Die Aufbewahrungsdauer und die Taste **Anrufliste leeren** finden Sie in den [Anrufeinstellungen](../sip-accounts/calls.md#history).

Verpasste und abgelehnte Anrufe lassen sich auch über die [lokale REST-API](../integration/rest-api.md) lesen (`/history?missed=true`, `/history?declined=true`).
