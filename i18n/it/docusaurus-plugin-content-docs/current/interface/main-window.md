---
title: Finestra principale
sidebar_position: 1
description: Il telefono a sinistra, la libreria e le impostazioni a destra — la disposizione della finestra principale di AI Softphone.
---

La finestra principale è il telefono stesso. Con la disposizione predefinita, **Una finestra**, il telefono sta a sinistra e tutto il resto si apre a destra. La [disposizione si può cambiare](../program/appearance.md).

<Shot name="03_contacts" full alt="La finestra principale: il telefono a sinistra e la scheda Contatti a destra" />

## Il telefono {#the-phone}

Dall'alto in basso, la parte sinistra contiene:

- il campo **Numero**;
- il tastierino e il tasto di chiamata;
- i bollini degli account;
- i pulsanti che seguono altri interni;
- le quattro destinazioni: **Registrazioni**, **Contatti**, **Cronologia** e **Impostazioni**.

### Il compositore {#the-dialler}

- **Numero** — digiti o incolli il numero da chiamare. L'icona dell'orologio in fondo al campo apre l'elenco dei numeri che ha chiamato o da cui è stato chiamato di recente.
- I tasti rotondi **1–9**, **\***, **0** e **#** compongono il numero, e durante una chiamata inviano toni (DTMF).
- Il tasto della cornetta avvia la chiamata. Resta grigio finché non c'è un numero.

<Shot name="22_last_calls" full alt="L'elenco delle chiamate recenti sotto il campo Numero, accanto alla scheda Cronologia" />

Quando l'elenco dei numeri recenti è aperto, il campo mostra una freccia e il tasto di chiamata si sposta alla sua destra. Ogni voce è un nome, o un numero se chi chiama non è nei [Contatti](contacts-history.md), con la data. Una cornetta rossa indica una chiamata persa; un conteggio tra parentesi — per esempio *Helpdesk (4)* — indica più chiamate di fila allo stesso interlocutore.

### I bollini degli account {#the-account-chips}

Sotto il tastierino c'è un bollino per ogni [account](../sip-accounts/setup.md). Un punto verde significa che l'account è registrato sul centralino. Il bollino evidenziato (nell'immagine, **305 Assistenza**) è l'account da cui partirà la prossima chiamata; prema un altro bollino per cambiarlo. Il pulsante rotondo rosso a destra dei bollini è il non disturbare.

### I pulsanti {#the-buttons}

Sotto i bollini ci sono i [pulsanti](../sip-accounts/buttons.md) che ha creato per colleghi e linee, ciascuno con una spia — **Ferrari** e **Magazzino** nelle immagini. Ne prema uno per chiamarne il numero.

### Registrazioni, Contatti, Cronologia, Impostazioni {#recordings-contacts-history-settings}

Queste quattro voci in basso aprono una scheda a destra, una accanto all'altra: [Registrazioni](../interface/recordings.md), [Contatti e cronologia](contacts-history.md) e [Impostazioni](settings-overview.md). Le schede aperte restano nella fila in alto della parte destra.

## Una chiamata in corso {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Una chiamata in corso" />

Durante una chiamata il campo del numero si sposta in alto con un'icona del tastierino all'interno, e la chiamata è mostrata su una scheda:

- lo stato e la durata della chiamata (**In conversazione · 0:21**), il nome dell'interlocutore, **Linea** e il nome dell'account su cui passa la chiamata, e il numero;
- due barre di livello verticali ai lati della scheda, una per ogni canale del suono;
- una fila di pulsanti: registra (cerchio), silenzia (microfono), attesa (pausa) e il pulsante rosso **Riaggancia**;
- una seconda fila: trasferisci (cornetta con una freccia) e il tastierino.

Una chiamata si può trasferire direttamente, o dopo aver prima parlato con la persona.

Se il numero è noto nei **Contatti**, al posto del numero viene mostrato il nome. Le stesse azioni hanno delle [scorciatoie](../program/shortcuts.md): rispondere, riagganciare, mettere in attesa e silenziare.

## Più chiamate insieme {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Più chiamate" />

Una chiamata in arrivo è annunciata da un banner ovunque lei stia lavorando, anche quando il telefono è nascosto. Una nuova chiamata in arrivo compare su una scheda propria sopra l'elenco, con un pulsante verde, uno giallo e uno rosso e una riga che dice con chi sta parlando ora (**In conversazione con …**). L'elenco sotto mostra ogni chiamata con il suo stato — **In attesa**, **In conversazione**, **Chiamata in arrivo** — e l'account su cui passa. Un'icona di pausa indica una chiamata in attesa e un'icona dell'altoparlante quella su cui sta parlando.

Che cosa succede quando qualcuno chiama mentre lei è già in conversazione si imposta in [Impostazioni delle chiamate](../sip-accounts/calls.md#call-waiting).

## Conferenza {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Una conferenza" />

Le chiamate unite appaiono come un'unica scheda **Conferenza** sulla linea dell'account. Ogni partecipante è elencato con il suo tempo in chiamata e il proprio pulsante **Riaggancia**. I pulsanti sotto registrano, silenziano e chiudono la conferenza per tutti; il pulsante largo in fondo divide di nuovo la conferenza in chiamate separate.

## Cattura {#capture}

Quando la [cattura da altre applicazioni](../capture/capture.md) è consentita in **Impostazioni → Cattura**, compare una striscia tra i bollini degli account e i pulsanti.

<Shot name="10_settings_capture" full alt="La striscia della cattura ai piedi del telefono: Cattura · pronta, Registra e due barre di livello" />

- **Cattura · pronta** dice che il programma sta ascoltando se c'è una conversazione in un'altra applicazione.
- **Registra** avvia una cattura a mano.
- Le due barre sottili sotto mostrano il livello del suono: quella in alto è lei, quella in basso ciò che il computer riproduce. Come vengono disegnate si imposta in **Immagine nella barra ai piedi del telefono**.

Il programma può anche vivere nell'area di notifica (la barra dei menu su macOS) ed essere richiamato con una [scorciatoia](../program/shortcuts.md).
