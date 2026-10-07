---
title: Finestra delle registrazioni
sidebar_position: 2
description: La libreria delle conversazioni — filtrare, riprodurre, leggere la trascrizione e il resoconto.
---

**Registrazioni** è dove vive ogni conversazione, in qualunque modo sia arrivata: una chiamata, una riunione catturata da un'altra applicazione o un file importato. Ognuna è elencata con il suo resoconto già pronto.

<Shot name="01_recordings" alt="La scheda Registrazioni: l'elenco delle conversazioni" />

## Trovare una conversazione {#finding-a-conversation}

La barra in alto ha quattro filtri, un campo di ricerca e un menu:

| Controllo | Restringe l'elenco per |
| --- | --- |
| **Tipo** | il modo in cui è arrivata la conversazione |
| **Periodo** | la data |
| **Categoria** | la categoria in cui è stata classificata — veda [Dizionari](../ai-processing/dictionaries.md) |
| **Contrassegno** | i contrassegni che porta |
| **Cerca** | ciò che vi è stato detto — la ricerca scorre le trascrizioni di tutto ciò che ha registrato |

Il pulsante **⋮** a destra della barra apre altre azioni per l'elenco: **Importa da file**, **Esporta in CSV** e **Apri in un browser**.

## L'elenco {#the-list}

Ogni riga mostra:

- un'icona per il tipo di conversazione: una cornetta per una chiamata, una finestra per una riunione in un'altra applicazione;
- un titolo — il nome dell'interlocutore, o il numero, o **Un'altra applicazione** per una riunione catturata — e sotto la data e il riassunto in una riga;
- a destra, la categoria con il suo punteggio (un numero, per esempio *Assistenza · 2*), poi le etichette e infine la durata.

Le etichette disegnate in rosso sono **segnali** (nell'immagine *Cliente arrabbiato* e *Rischio di abbandono*); le altre sono etichette normali (*Reclamo*, *Richiamo promesso*). Una conversazione senza riassunto e senza categoria non ha ancora un resoconto — la prima riga nell'immagine.

## Il lettore {#the-player}

Selezioni una riga per aprire il lettore sotto l'elenco.

<Shot name="02_recording_details" alt="Una registrazione selezionata: il lettore e la trascrizione sotto l'elenco" />

- Le due forme d'onda sono i due canali della registrazione, uno per ciascun lato della conversazione. La barra sotto fa scorrere una registrazione lunga.
- **▶** riproduce e mette in pausa; i tempi a sinistra sono la posizione e la durata totale.
- **1×** cambia la velocità; **Entrambi** sceglie quale canale sente.
- Il pulsante del disco salva l'audio, **×** chiude il lettore.

## La trascrizione e il resoconto {#the-transcript-and-the-write-up}

Sotto il lettore c'è la trascrizione, con una riga per ogni battuta, il momento in cui è stata detta e il nome di chi parla (**Lei**, il nome dell'interlocutore o, per una riunione catturata, **Un'altra applicazione**). Faccia clic su una riga per sentire quel momento; la riga sotto la testina di riproduzione è evidenziata e la parola pronunciata è segnata al suo interno.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="La trascrizione accanto all'audio" />

Il menu a discesa sopra la trascrizione sceglie che cosa mostrare — la trascrizione fatta da uno dei suoi [riconoscitori](../ai-processing/transcription.md) (una stella indica la trascrizione principale della registrazione), o un resoconto come **Azioni**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Le azioni lasciate dalla conversazione" />

Le quattro icone a destra del menu a discesa:

| Icona | Che cosa fa |
| --- | --- |
| Scintille | Fa scrivere subito l'elemento selezionato al modello. |
| Due fogli | Lo copia. |
| Disco | Lo salva in un file. |
| Cestino | Lo elimina. |

Può esportare una trascrizione come testo semplice o come sottotitoli.

Il resoconto è scritto dai [prompt](/ai-processing/prompt-studio) e dai modelli che ha impostato in [Elaborazione](../ai-processing/processing.md), tramite [regole](../ai-processing/processing.md#rules) che girano da sé o quando lo chiede lei. Per quanto tempo si conservano le registrazioni si imposta in [Registrazioni](../recordings.md#retention).

## Una registrazione che ha già {#a-recording-you-already-have}

Una registrazione fatta altrove — su un cellulare, un dittafono o un altro sistema — si può aggiungere con **⋮ → Importa da file**. Viene archiviata esattamente come una chiamata composta: trascritta, riassunta e trovata dalla stessa ricerca.

## Eliminare una registrazione {#deleting-a-recording}

Quando si elimina una registrazione, se ne va con essa tutto ciò che ne è stato ricavato: la trascrizione e il resoconto.
