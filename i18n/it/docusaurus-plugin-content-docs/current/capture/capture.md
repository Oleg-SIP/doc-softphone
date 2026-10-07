---
title: Cattura
sidebar_label: Cattura da altre applicazioni
sidebar_position: 1
description: "\"La cattura registra una conversazione tenuta in un'altra applicazione — Zoom, Teams, Meet o qualsiasi altra — direttamente dal computer.\""
---

La **Cattura** è il modo in cui AI Softphone registra una conversazione che si svolge in un altro programma, come una riunione in Zoom, Teams o Meet. Registra dal computer stesso, tenendo l'altra parte e lei su canali separati, e alla fine la aspettano la stessa trascrizione e lo stesso resoconto di una chiamata.

Il programma cerca una conversazione, non il nome di un'applicazione, perciò funziona con qualsiasi cosa ne produca una.

La [Panoramica](../interface/settings-overview.md) delle impostazioni la elenca sotto **Cattura da altre applicazioni** e la divide in tre passi:

1. **Attiva la cattura** — [consentire la cattura del suono](#turning-capture-on).
2. **Cattura una conversazione** — [avviare e fermare](#capturing-a-conversation) una registrazione.
3. **Dai un nome a una cattura** — [rinominare](#giving-it-a-name) la registrazione.

## Attivare la cattura {#turning-capture-on}

La cattura è spenta finché non la consente. Apra **Impostazioni → Cattura**.

<Shot name="10_settings_capture" alt="Impostazioni → Cattura" />

| Impostazione | Predefinito | Che cosa fa |
| --- | --- | --- |
| **Consenti la cattura del suono** | spento | Permette al programma di registrare il suono di altre applicazioni. Finché è spento non si cattura nulla. |
| **Ricordami di informare gli altri della registrazione** | acceso | Mostra un promemoria mentre è in corso una cattura. La casella è grigia finché la cattura non è consentita. |

:::caution
Viene registrato tutto ciò che il computer riproduce, non solo la conversazione. Questo telefono non può annunciare una registrazione nella riunione di qualcun altro, perciò dirlo spetta a lei.
:::

La parte del programma che fa questo è il modulo **Cattura**, *Registrare una conversazione che avviene in un'altra applicazione*. Si può disattivare in [Moduli](../application/modules.md).

## Avviare una cattura {#starting-a-capture}

Una volta consentita la cattura, la parte bassa della [finestra principale](../interface/main-window.md#capture) ne mostra lo stato — **Cattura · pronta** — con un pulsante **Registra** a destra. Prema **Registra** per avviarla a mano.

### Avvio automatico {#automatic-start}

**Avvio automatico** decide che cosa succede quando il programma sente una conversazione in un'altra applicazione:

| Scelta | Che cosa succede |
| --- | --- |
| **Mai** | Una cattura parte solo quando preme **Registra**. |
| **Chiedimelo** | Il programma chiede se registrarla. Il valore predefinito. |
| **Sempre** | Il programma inizia a registrare da solo. |

In **Applicazioni con una risposta propria** si può dare a un'applicazione una risposta sua — per esempio *Registra sempre questa applicazione* dalla domanda che pone il programma.

*Chiedere non costa nulla: i secondi prima della sua risposta sono già conservati.*

### Prima dell'inizio {#before-the-start}

Il cursore **Prima dell'inizio** indica quanti secondi di suono vengono conservati da prima che inizi una registrazione, **15 secondi** per impostazione predefinita. Serve perché non si perda nulla mentre la conversazione viene notata: una registrazione che parte quando preme **Registra**, o quando risponde alla domanda, comincia comunque con le parole venute prima.

## Catturare una conversazione {#capturing-a-conversation}

Mentre registra, la finestra principale mostra un punto rosso, il nome della registrazione (per esempio **Riunione in Zoom**), il tempo trascorso e i due canali come forme d'onda.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="La registrazione di una riunione" />

- **Ferma la registrazione** la termina.
- La finestra resta visibile mentre registra, e le ricorda di dire ai partecipanti che la riunione viene registrata.

### Che cosa mostra l'immagine {#what-the-picture-shows}

Altre due impostazioni scelgono come viene disegnato il livello del suono:

| Impostazione | Predefinito | Dove |
| --- | --- | --- |
| **Immagine nella finestra principale** | Onda | I due canali mentre è in corso una cattura. |
| **Immagine nella barra ai piedi del telefono** | Due livelli | Le due barre sottili sotto **Cattura · pronta**. |

### Provarla {#testing-it}

In **Prova** la scheda ha due barre: **Lei** e **L'altro lato**. *La barra in alto si muove quando parla lei, quella in basso quando qualcosa viene riprodotto.* Prima di una riunione importante, dica una parola e riproduca un suono qualsiasi per vedere che il programma sente entrambi i lati.

## Darle un nome {#giving-it-a-name}

La matita accanto al nome della registrazione permette di rinominarla mentre è in corso. Una registrazione a cui non ha dato un nome è elencata come **Un'altra applicazione**.

## Dove va la registrazione {#where-the-recording-goes}

Una conversazione catturata compare nella [finestra delle registrazioni](../interface/recordings.md) come qualsiasi altra, con la sua icona, una finestra invece di una cornetta, e con il titolo che le ha dato o **Un'altra applicazione**.

<Shot name="01_recordings" alt="Riunioni catturate nella scheda Registrazioni, contrassegnate da un'icona a forma di finestra" />

Viene trascritta, riassunta, classificata in una categoria ed etichettata dalle stesse [regole](../ai-processing/processing.md#rules) di una chiamata. Nella trascrizione di una riunione catturata chi parla è mostrato come **Un'altra applicazione** dove una chiamata mostrerebbe il nome dell'interlocutore; anche la **Ricerca** della libreria trova ciò che vi è stato detto.
