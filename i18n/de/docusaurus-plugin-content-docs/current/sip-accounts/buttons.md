---
title: Tasten
sidebar_position: 4
description: "BLF-Tasten: Tasten, die mit einem Druck eine Nebenstelle an Ihrer IP-Telefonanlage wählen und zeigen, ob sie frei ist, klingelt oder besetzt ist."
---

Tasten sind die **BLF**-Tasten (Busy Lamp Field) des Softphones, dieselbe Funktion, die ein Tischtelefon an einer IP-Telefonanlage hat. Eine Taste wählt eine Nebenstelle mit einem Druck. Eine Taste, die ihre Leitung beobachtet, zeigt zusätzlich eine Lampe: Das Telefon fragt die Telefonanlage nach dieser Nebenstelle und zeigt, ob sie frei ist, klingelt oder besetzt ist, so wie es eine Vermittlungskonsole oder die programmierbaren Tasten eines Tischtelefons tun.

BLF braucht Unterstützung auf Seiten der Telefonanlage: Sie muss dem Telefon den Zustand der Nebenstelle melden. Die meisten IP-Telefonanlagen tun das. Tut Ihre es nicht, bleibt die Lampe grau, und die Taste wählt trotzdem.

Die Tasten stehen unter den Kontochips im [Hauptfenster](/interface/main-window), und unter **Einstellungen → Tasten** legen Sie sie an.

<Shot name="08_settings_buttons" alt="Einstellungen → Tasten: zwei Tasten" />

Jede Zeile ist eine Taste: die Lampe, ihre Beschriftung und rechts ihre Nummer und das Konto, zu dem sie gehört — zum Beispiel *212 · 201 Büro*. **▲** und **▼** schieben die Taste nach oben oder unten; die Tasten im Hauptfenster folgen dieser Reihenfolge. **Hinzufügen** legt eine neue an.

## Die Lampe {#the-lamp}

Eine Taste, die ihre Leitung beobachtet, zeigt eine Lampe:

| Lampe | Die Leitung ist |
| --- | --- |
| Grün | frei |
| Gelb | am Klingeln |
| Rot | im Gespräch |
| Grau | unbekannt: Die Telefonanlage sagt es nicht |

## Eine Taste hinzufügen {#adding-a-button}

<Shot name="08b_button_add" alt="Das Formular einer neuen Taste" />

Drücken Sie **Hinzufügen**; unter der Liste öffnet sich ein Formular.

| Feld | Was einzugeben ist |
| --- | --- |
| **Nummer** | Die zu wählende Nummer. |
| **Leitung** | Das Konto, über das der Anruf läuft. Wählen Sie es zuerst: Um die Lampe zu zeigen, fragt das Telefon die Telefonanlage dieser Leitung nach der Nummer, es muss also wissen, welche. |
| **Beschriftung** | Der Text auf der Taste, zum Beispiel der Name der Person. Auf der Taste ist nur Platz für eine kurze Beschriftung; eine längere wird abgeschnitten. |
| **Zeigen, ob diese Leitung besetzt ist** | Ein Schalter. Ein — die Taste hat eine Lampe. Aus — sie wählt nur. |

**Speichern** bleibt grau, bis das Formular ausgefüllt ist. **Abbrechen** verwirft das Formular.

Der Teil des Programms, der die Tasten zeigt, lässt sich unter [Module](/application/modules) abschalten.
