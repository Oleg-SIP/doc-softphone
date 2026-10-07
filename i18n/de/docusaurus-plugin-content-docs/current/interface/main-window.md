---
title: Hauptfenster
sidebar_position: 1
description: Das Telefon links, Bibliothek und Einstellungen rechts — der Aufbau des Hauptfensters von AI Softphone.
---

Das Hauptfenster ist das Telefon selbst. In der Standardanordnung **Ein Fenster** steht das Telefon links, und alles andere öffnet sich rechts. [Die Anordnung lässt sich ändern](../program/appearance.md).

<Shot name="03_contacts" full alt="Das Hauptfenster: das Telefon links und der Reiter Kontakte rechts" />

## Das Telefon {#the-phone}

Von oben nach unten enthält die linke Seite:

- das Feld **Nummer**;
- die Wähltasten und die Anruftaste;
- die Kontochips;
- die Tasten, die andere Nebenstellen beobachten;
- die vier Ziele: **Aufnahmen**, **Kontakte**, **Verlauf** und **Einstellungen**.

### Die Wählhilfe {#the-dialler}

- **Nummer** — tippen oder fügen Sie die Nummer ein, die Sie anrufen möchten. Das Uhrsymbol am rechten Ende des Felds öffnet die Liste der Nummern, die Sie zuletzt angerufen haben oder von denen Sie angerufen wurden.
- Die runden Tasten **1–9**, **\***, **0** und **#** füllen die Nummer aus und senden während eines Gesprächs Töne (DTMF).
- Die Hörertaste tätigt den Anruf. Sie bleibt grau, bis eine Nummer da ist.

<Shot name="22_last_calls" full alt="Die Liste der letzten Anrufe unter dem Feld Nummer, neben dem Reiter Verlauf" />

Ist die Liste der letzten Nummern geöffnet, zeigt das Feld einen Pfeil, und die Anruftaste rückt rechts daneben. Jeder Eintrag ist ein Name, oder eine Nummer, wenn der Anrufer nicht in den [Kontakten](contacts-history.md) steht, mit dem Datum. Ein roter Hörer markiert einen verpassten Anruf, eine Zahl in Klammern — zum Beispiel *Jonas Wagner (2)* — steht für mehrere Anrufe mit derselben Gegenseite hintereinander.

### Die Kontochips {#the-account-chips}

Unter den Wähltasten gibt es einen Chip für jedes [Konto](../sip-accounts/setup.md). Ein grüner Punkt bedeutet, dass das Konto an der Telefonanlage angemeldet ist. Der hervorgehobene Chip (im Bild **305 Service**) ist das Konto, von dem der nächste Anruf ausgeht; drücken Sie einen anderen Chip, um es zu wechseln. Die runde rote Taste rechts neben den Chips ist Nicht stören.

### Die Tasten {#the-buttons}

Unter den Chips stehen die [Tasten](../sip-accounts/buttons.md), die Sie für Kollegen und Leitungen angelegt haben, jede mit einer Lampe — in den Bildern **Weber** und **Lager**. Drücken Sie eine, um ihre Nummer zu wählen.

### Aufnahmen, Kontakte, Verlauf, Einstellungen {#recordings-contacts-history-settings}

Diese vier Einträge unten öffnen rechts einen Reiter, nebeneinander: [Aufnahmen](../interface/recordings.md), [Kontakte und Verlauf](contacts-history.md) und [Einstellungen](settings-overview.md). Geöffnete Reiter bleiben in der Reihe oben auf der rechten Seite.

## Ein laufendes Gespräch {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/de/light/call.png" alt="Ein laufendes Gespräch" />

Während eines Gesprächs rückt das Nummernfeld nach oben, mit einem Tastatursymbol darin, und das Gespräch erscheint auf einer Karte:

- Zustand und Dauer des Gesprächs (**Im Gespräch · 0:21**), der Name der Gegenseite, **Leitung** und der Name des Kontos, auf dem das Gespräch läuft, und die Nummer;
- zwei senkrechte Pegelanzeigen an den Seiten der Karte, eine für jeden Kanal des Tons;
- eine Reihe von Tasten: Aufnahme (Kreis), Stummschalten (Mikrofon), Halten (Pause) und die rote Taste **Auflegen**;
- eine zweite Reihe: Weiterleiten (Hörer mit Pfeil) und die Wähltasten.

Ein Gespräch kann direkt weitergeleitet werden oder nachdem Sie zuerst selbst mit der Person gesprochen haben.

Steht die Nummer in den **Kontakten**, wird statt der Nummer der Name angezeigt. Dieselben Aktionen haben [Tastenkürzel](../program/shortcuts.md): annehmen, auflegen, halten und stummschalten.

## Mehrere Anrufe gleichzeitig {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/de/light/calls.png" alt="Mehrere Anrufe" />

Ein eingehender Anruf wird durch ein Banner angekündigt, wo auch immer Sie gerade arbeiten, selbst wenn das Telefon ausgeblendet ist. Ein neuer eingehender Anruf erscheint auf einer eigenen Karte über der Liste, mit einer grünen, einer gelben und einer roten Taste und einer Zeile, mit wem Sie gerade sprechen. Die Liste darunter zeigt jedes Gespräch mit seinem Zustand — **Gehalten**, **Im Gespräch**, **Eingehender Anruf** — und dem Konto, auf dem es läuft. Ein Pausensymbol markiert ein gehaltenes Gespräch und ein Lautsprechersymbol das, in dem Sie sprechen.

Was passiert, wenn jemand anruft, während Sie schon telefonieren, wird in den [Anrufeinstellungen](../sip-accounts/calls.md#call-waiting) festgelegt.

## Konferenz {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/de/light/conference.png" alt="Eine Konferenz" />

Zusammengeführte Gespräche erscheinen als eine Karte **Konferenz** auf der Leitung des Kontos. Jeder Teilnehmer steht mit seiner Gesprächszeit und einer eigenen Taste **Auflegen** darin. Die Tasten darunter nehmen auf, schalten stumm und beenden die Konferenz für alle; die breite Taste unten teilt die Konferenz wieder in einzelne Gespräche.

## Mitschnitt {#capture}

Ist unter **Einstellungen → Mitschnitt** der [Mitschnitt anderer Anwendungen](../capture/capture.md) erlaubt, erscheint zwischen den Kontochips und den Tasten eine Leiste.

<Shot name="10_settings_capture" full alt="Die Mitschnittleiste am Fuß des Telefons: Mitschnitt · warte auf ein Gespräch, Aufnehmen und zwei Pegelbalken" />

- **Mitschnitt · warte auf ein Gespräch** sagt, dass das Programm auf ein Gespräch in einer anderen Anwendung wartet.
- **Aufnehmen** startet einen Mitschnitt von Hand.
- Die zwei dünnen Balken darunter zeigen den Pegel des Tons: Der obere sind Sie, der untere ist das, was der Computer abspielt. Wie sie gezeichnet werden, wird unter **Bild in der Leiste am Fuß des Telefons** eingestellt.

Das Programm kann auch im Infobereich leben (auf macOS in der Menüleiste) und mit einem [Tastenkürzel](../program/shortcuts.md) hervorgeholt werden.
