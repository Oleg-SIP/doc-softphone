---
title: Finestra delle registrazioni
sidebar_position: 2
description: "\"La libreria di ogni conversazione — una chiamata, un file importato o una riunione catturata da Zoom, Teams o Meet: filtri, lettore, trascrizione da cui riprodurre da qualsiasi riga e resoconti.\""
---

**Registrazioni** è dove vive ogni conversazione, in qualunque modo sia arrivata: una chiamata fatta o ricevuta nel telefono, un file audio importato o una riunione catturata da Zoom, Teams, Meet o da qualsiasi altra applicazione. Stanno tutte in un unico elenco e ognuna si apre allo stesso modo: il lettore, la trascrizione e tutto ciò che il modello linguistico ne ha scritto. Prema **Registrazioni** in basso a sinistra nella [finestra principale](main-window.md) per aprirla.

<Shot name="01_recordings" alt="La scheda Registrazioni: una riunione Zoom catturata, un file importato e alcune chiamate in un unico elenco" />

## Tre tipi di registrazione {#three-kinds-of-recording}

L'icona a sinistra di una riga dice come è arrivata la conversazione.

| Icona | Conversazione | Il suo nome nell'elenco | Come arriva qui |
| --- | --- | --- | --- |
| Cornetta con una freccia | Una chiamata fatta o ricevuta in questo telefono. La freccia punta verso l'interno per una chiamata in arrivo e verso l'esterno per una in uscita. | Il nome del contatto, o il numero | Registrata come impostato in [Registrazioni](../recordings.md) |
| Freccia dentro una barra | Un file importato da altrove: un cellulare, un dittafono o un altro sistema | Il nome del file | **⋮ → Importa da file**; veda [più sotto](#a-recording-you-already-have) |
| Finestra | Una riunione tenuta in un'altra applicazione | Il nome che le ha dato, oppure **Un'altra applicazione** | [Cattura](../capture/capture.md) |

Nell'immagine le prime tre righe sono una per tipo: una riunione Zoom, un file importato di una chiamata all'assistenza di una banca e una chiamata ricevuta sulla linea **305 Assistenza**. Qualunque sia la loro origine, vengono trascritte, riassunte e cercate allo stesso modo.

## Trovare una conversazione {#finding-a-conversation}

La barra in alto ha cinque filtri, un campo di ricerca e un menu:

| Controllo | Restringe l'elenco per |
| --- | --- |
| **Tipo** | il modo in cui è arrivata la conversazione: chiamate in arrivo o in uscita, **Importate**, **Catturate** |
| **Periodo** | la data: **Oggi**, **Ieri**, **Ultimi 7 giorni** oppure **Scegli le date…** |
| **Categoria** | la categoria in cui è stata classificata — veda [Dizionari](../ai-processing/dictionaries.md) |
| **Contrassegno** | le etichette e i segnali che porta |
| **Riconoscitore** | il [riconoscitore](../ai-processing/transcription.md) che ne ha fatto la trascrizione |
| **Cerca** | ciò che vi è stato detto — la ricerca scorre le trascrizioni di tutto ciò che ha registrato |

<Shot name="39_more_menu" alt="Il menu ⋮ dell'elenco: Importa da file, Esporta in CSV, Apri in un browser" />

Il pulsante **⋮** a destra della barra apre altre azioni per l'elenco:

| Voce | Che cosa fa |
| --- | --- |
| **Importa da file** | Porta dentro le registrazioni che ha già. Veda [Una registrazione che ha già](#a-recording-you-already-have). |
| **Esporta in CSV** | Salva l'elenco come foglio di calcolo: quando, l'interlocutore e il numero, la direzione, la durata, la categoria, le etichette, i segnali e il riassunto in una riga di ogni conversazione. |
| **Apri in un browser** | Apre l'elenco nel browser, come la pagina che l'[API REST locale](../integration/rest-api.md) serve su `/ui`. |

## L'elenco {#the-list}

Ogni riga mostra:

- l'icona del tipo di conversazione;
- il nome — l'altro interlocutore, il numero, il file o la riunione — e sotto la data e il riassunto in una riga;
- a destra, la categoria con il suo punteggio (un numero, per esempio *Assistenza · 4*), poi i segnali e le etichette e infine la durata.

I segnali sono disegnati in rosso (nell'immagine *Dati sensibili*, *Impegno preso*, *Cliente arrabbiato*); le etichette sono normali (*Richiamo promesso*). Una conversazione senza riassunto e senza categoria non ha ancora un resoconto — la riga **Anna Romano** nell'immagine.

<Shot name="40_row_actions" alt="Una riga con il puntatore sopra: i pulsanti della puntina, della matita e del cestino" />

Punti una riga per mostrare tre pulsanti alla sua destra:

| Pulsante | Che cosa fa |
| --- | --- |
| Puntina | **Conserva questa**: una registrazione conservata non viene mai eliminata dai limiti di [Registrazioni](../recordings.md#retention). La prema di nuovo per smettere di conservarla. |
| Matita | **Rinomina**: dà alla conversazione un nome suo. Una chiamata mantiene accanto il nome dell'interlocutore; una riunione o un file prendono altrimenti il nome dell'applicazione o del file da cui provengono. |
| Cestino | **Elimina questa registrazione**, dopo aver chiesto conferma. Se ne va anche l'audio e non si può annullare. |

## Il lettore {#the-player}

Selezioni una riga per aprire il lettore sotto l'elenco.

- Le due forme d'onda sono i due canali della registrazione: quella in alto è lei, quella in basso è l'altro lato. Un file importato di solito contiene una sola traccia mista, quindi le due linee mostrano lo stesso suono.
- **▶** riproduce e mette in pausa; i tempi a sinistra sono la posizione e la durata totale. La barra sotto le forme d'onda fa scorrere una registrazione lunga.
- **1×** cambia la velocità; **Entrambi** sceglie quale voce sente: entrambe, solo la sua (**Io**) o solo quella dell'altro lato (**Loro**).
- Il pulsante del disco salva una copia della registrazione, **×** chiude la conversazione.

La linea tra l'elenco e il lettore si può trascinare verso l'alto per dare più spazio alla trascrizione, come nelle immagini qui sotto.

## La trascrizione {#the-transcript}

Sotto il lettore c'è la trascrizione: una riga per ogni battuta, con il momento in cui è stata detta e chi l'ha detta.

<Shot name="26_recording_call" alt="Una chiamata sulla linea 305 Assistenza: il lettore e la trascrizione, con la riga a 0:13 evidenziata" />

| Tipo di registrazione | Chi parla è indicato come |
| --- | --- |
| Una chiamata | **Lei** e il nome dell'interlocutore, o il numero |
| Una riunione catturata | **Lei** e il nome della registrazione, per tutti gli altri |
| Un file importato | **Tutti · speaker 1**, **Tutti · speaker 2**… — il riconoscitore distingue le voci |

**Faccia clic su una riga per andare a quel momento**: il lettore si sposta lì, la riga è evidenziata e la parola pronunciata è segnata al suo interno — nell'immagine la riga a **0:13**, con la parola *Sì*. Prema **▶** per ascoltare da quel punto. Mentre si riproduce, l'evidenziazione segue il parlato, così può leggere e ascoltare insieme e tornare a qualsiasi frase.

Il tempo a sinistra di ogni riga è anche ciò a cui rimanda un resoconto: un segnale, una risposta o una citazione riportano il momento delle parole su cui si basano.

## Trascrizione o resoconto: il menu a discesa {#transcript-or-write-up-the-drop-down}

Il menu a discesa sopra la trascrizione sceglie che cosa mostrare in quel punto: una trascrizione o uno dei resoconti scritti dal modello linguistico.

<Shot name="27_writeup_menu" alt="Il menu a discesa aperto: la trascrizione di OpenAI e i resoconti della chiamata" />

- Le righe con un **microfono** sono trascrizioni, una per ogni [riconoscitore](../ai-processing/transcription.md) che ha trascritto la registrazione. La stella indica la principale. Punti una riga per vedere il riconoscitore, il suo modello e la lingua.
- Le righe con le **scintille** sono resoconti, scritti dai [prompt](/ai-processing/prompt-studio) di [Elaborazione](../ai-processing/processing.md).

Una registrazione può avere trascrizioni di più riconoscitori, per confrontarle: la riunione Zoom qui sotto è stata trascritta sia da X.ai sia da Deepgram.

<Shot name="36_zoom_menu" alt="Una riunione catturata con due trascrizioni, Deepgram e X.ai, e i suoi resoconti" />

I resoconti sono elencati con nomi brevi:

| Nel menu a discesa | Scritto dal prompt | Che cosa mostra |
| --- | --- | --- |
| **Riassunto** | Riassunto | I punti principali, le decisioni e i passi successivi in un breve paragrafo. |
| **In breve** | Riassunto in una riga | Una frase; la stessa riga è mostrata sotto il nome nell'elenco. |
| **Azioni** | Cose da fare | Chi si è impegnato a fare che cosa, e per quando. |
| **Argomenti** | Argomenti | I temi emersi. |
| **Menzionati** | Nomi e numeri | Persone, aziende, date, importi e riferimenti. |
| la domanda stessa | Una domanda su questa chiamata | La risposta a una domanda che ha posto, con le parole su cui si basa. |
| **Qualità** | Qualità commerciale, Qualità dell'assistenza | Un punteggio complessivo e un giudizio su ogni criterio. |
| **Segnali** | Segnali | Ciò che richiede attenzione, con la prova e il momento. |
| **Etichette**, **Categoria** | Etichette, Categoria | Le etichette con cui la conversazione è stata classificata. |

## I resoconti, uno per uno {#the-write-ups-one-by-one}

Le immagini qui sotto riguardano tutte la stessa chiamata, sulla linea **305 Assistenza**, in cui una cliente chiede quando si rinnovano le sue polizze.

**Riassunto** — la conversazione in poche frasi.

<Shot name="28_summary" alt="Il Riassunto della chiamata" />

**In breve** — una riga, abbastanza corta da riconoscere la conversazione nell'elenco.

<Shot name="29_nutshell" alt="In breve: il riassunto in una riga della chiamata" />

**Azioni** — ogni compito con chi deve farlo e quando, a destra.

<Shot name="30_actions" alt="Azioni: due compiti per Lei, uno da fare domani mattina" />

**Una domanda** — chieda alla conversazione qualsiasi cosa: la domanda diventa il nome della voce e sotto la risposta ci sono le parole su cui si basa, con il loro momento nella registrazione.

<Shot name="31_question" alt="La risposta a una domanda sulla chiamata, con due citazioni a 0:16 e 0:27" />

**Qualità** — il punteggio da 1 a 5 con il suo motivo, e ogni criterio contrassegnato **superato**, **debole** o **non superato** con una nota.

<Shot name="32_quality" alt="Qualità: punteggio 4, due criteri superati e due deboli" />

**Segnali** — ogni segnale con le parole su cui è scattato, la sua gravità e il momento.

<Shot name="33_red_flags" alt="Segnali: Impegno preso, bassa, a 0:27" />

**Argomenti** — i temi di una riunione, qui della riunione Zoom.

<Shot name="38_topics" alt="Gli argomenti della riunione Zoom" />

## I pulsanti accanto al menu a discesa {#the-buttons-beside-the-drop-down}

| Pulsante | Che cosa fa |
| --- | --- |
| Scintille | **Trascrivi o chiedi a un modello…**: apre un menu, veda sotto. |
| Due fogli | Copia ciò che è mostrato. |
| Disco | Lo salva in un file. Può salvare una trascrizione come testo semplice o come sottotitoli. |
| Cestino | Elimina ciò che è mostrato. |

<Shot name="34_run_menu" alt="Il menu delle scintille: Trascrizione con quattro riconoscitori, Elaborazione con i prompt" />

Il menu delle scintille fa il lavoro su richiesta. Sotto **Trascrizione** scelga un riconoscitore per trascrivere di nuovo la registrazione con esso; sotto **Elaborazione** scelga un prompt per eseguirlo subito — **Una domanda su questa chiamata…** chiede prima la domanda. Il risultato compare nel menu a discesa. È così che si scrive il resoconto di una conversazione quando **Elabora le conversazioni automaticamente** è disattivato in [Elaborazione](../ai-processing/processing.md), ed è così che aggiunge un altro resoconto a una conversazione che ne ha già.

## Tre esempi {#three-examples}

### Una chiamata fatta nel telefono {#a-call-made-in-the-phone}

La chiamata qui sopra: chi parla è **Lei** e **Chiara Conti**, il nome del contatto, su due canali separati.

### Un file importato {#a-file-you-imported}

<Shot name="35_recording_import" alt="Un file importato di una chiamata all'assistenza di una banca: una traccia mista e i parlanti 1 e 2" />

`riverside_bank_support_call` è un mp3 portato dentro con **⋮ → Importa da file**. Il suo nome è il nome del file, la sua icona è una freccia dentro una barra e i suoi due parlanti sono stati distinti dal riconoscitore. I resoconti hanno trovato un numero di carta detto a voce e hanno fatto scattare **Dati sensibili**.

### Una riunione catturata da un'altra applicazione {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Una riunione Zoom catturata dal computer: la trascrizione di X.ai con Lei e il nome della riunione come parlanti" />

**Pianificazione lancio Q4 (Zoom)** è stata catturata mentre la riunione si svolgeva in Zoom e chiamata così con la matita. Tutti gli altri partecipanti alla riunione sono mostrati con il nome della registrazione; lei è **Lei**. Veda [Cattura](../capture/capture.md).

## Una registrazione che ha già {#a-recording-you-already-have}

Una registrazione fatta altrove — su un cellulare, un dittafono o un altro sistema — si può aggiungere con **⋮ → Importa da file**. Scelga uno o più file mp3 o wav; il telefono dice quanti ne sono stati importati e nomina quelli che non ha potuto leggere come registrazione. Ognuno viene archiviato esattamente come una chiamata composta: trascritto, riassunto con le stesse [regole](../ai-processing/processing.md#rules) e trovato dalla stessa ricerca.

## Eliminare una registrazione {#deleting-a-recording}

Quando si elimina una registrazione, se ne va con essa tutto ciò che ne è stato ricavato: le trascrizioni e i resoconti. Per quanto tempo le registrazioni si conservano da sole si imposta in [Registrazioni](../recordings.md#retention).
