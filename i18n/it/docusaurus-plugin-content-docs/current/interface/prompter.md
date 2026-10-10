---
title: Finestra del suggeritore
sidebar_position: 3
description: "La finestra del suggeritore dal vivo: le parole di una chiamata mentre vengono dette e suggerimenti su cosa dire poi, i suoi pulsanti e le sue colonne, la prova su una registrazione e quanto costa."
---

Il **Suggeritore** ascolta una conversazione mentre avviene. In una finestra tutta sua scrive ciò che dice ciascuna parte, mentre viene detto, e — quando l'assistente scelto interroga un modello — un suggerimento su cosa dire poi. Vale la pena tenerlo aperto durante una chiamata di vendita, un colloquio o una conversazione difficile, e con un altro assistente la stessa finestra mostra una traduzione continua dell'altra parte, o semplici sottotitoli.

<Shot name="46_prompter_running" alt="Il suggeritore in prova su una chiamata di vendita: la trascrizione a sinistra, i suggerimenti a destra, il più recente ripetuto in grande sopra" />

Nell'immagine l'assistente **Obiezioni nella chiamata** ascolta una chiamata di vendita. La colonna di sinistra è ciò che è stato detto, ogni riga con la sua ora e la sua parte; quella di destra è ciò che il modello ha suggerito a ogni risposta del cliente; il suggerimento più recente è ripetuto a caratteri grandi sopra le due.

**Suggeritore** compare nell'elenco in fondo al telefono, tra **Cronologia** e **Impostazioni**, non appena ci sono tre cose: il suggeritore è consentito, c'è un riconoscitore capace di ascoltare mentre una conversazione è in corso e — per gli assistenti che suggeriscono qualcosa — un modello linguistico. Tutto questo si imposta in [Impostazioni → Suggeritore](/ai-processing/prompter), dove si trovano anche la dimensione del testo e gli assistenti stessi.

## La finestra {#the-window}
<Shot name="44_prompter_window" alt="La finestra del suggeritore con l'assistente Obiezioni nella chiamata scelto, prima dell'avvio" />

In alto c'è il menu a tendina **Assistente** e, alla sua destra, i pulsanti:

| Pulsante | Che cosa fa |
| --- | --- |
| **Avvia** / **Ferma** (triangolo / quadrato) | *Inizia ad ascoltare questa chiamata* — oppure smetti: *Quanto detto resta sullo schermo*. Un avvio premuto prima che la chiamata abbia risposta la attende, e il pulsante allora lo annulla. |
| **Suggerimento** (scintille) | *Chiudere qui la risposta e suggerire cosa dire*, senza aspettare una pausa. Per un assistente che non interroga alcun modello il pulsante è **Chiudere la risposta**: chiude soltanto la risposta, così la successiva inizia pulita. È spento finché il suggeritore non è in funzione. |
| **Svuota** (cestino) | Dimentica ciò che è sullo schermo, dopo aver chiesto conferma. *Spariscono entrambe le colonne, e con esse la conversazione da cui sarebbe stato costruito il prossimo suggerimento.* Fermare e riavviare non svuota nulla: una conversazione fermata e ripresa di solito è la stessa conversazione. |
| **Esporta…** (dischetto) | Scrive entrambe le colonne in un file, con le loro ore: testo (`.txt`) o foglio di calcolo (`.csv`), con il nome che lei dà al file. |
| **Prova…** (libreria) | [Prova un assistente su una registrazione](#rehearsing-on-a-recording) anziché su una chiamata. |

Il menu a tendina elenca gli [assistenti](/ai-processing/prompter#assistants) nell'ordine stabilito in **Impostazioni → Suggeritore**. Non si può cambiare mentre un suggeritore è in funzione, ma resta in vista, così si vede quale assistente sta lavorando. Mentre ascolta, la scheda della chiamata dice **In ascolto**.

Sotto i pulsanti c'è la fascia con la riga più recente e, sotto ancora, le due colonne:

- **Trascrizione** — ogni riga con la sua ora e la sua parte;
- **Suggerimenti** — ogni suggerimento con l'ora della risposta a cui si riferisce. Per un assistente che non interroga alcun modello questa colonna non c'è e la trascrizione occupa tutta la larghezza.

Quando la finestra è stretta, le due colonne stanno una sopra l'altra. Una colonna segue ciò che arriva finché lei non torna indietro scorrendo, e riprende a seguire quando torna in fondo. Prema una riga qualsiasi per tenerla nella fascia; prema la più recente, o la puntina nella fascia, per tornare a seguire. Il tasto destro copia una riga, un suggerimento, l'intera trascrizione o tutti i suggerimenti. Trascini il separatore sotto la fascia per renderla più alta; le dimensioni del testo si impostano in [Impostazioni → Suggeritore](/ai-processing/prompter#settings--prompter).

## Prova su una registrazione {#rehearsing-on-a-recording}
Un assistente si può provare senza nessuno al telefono. **Prova…** elenca le conversazioni della [libreria](/interface/recordings), dalle più recenti, e **Un file su questo computer…** per un file `.mp3` o `.wav`.

<Shot name="45_prompter_rehearse" alt="Prova…: le conversazioni della libreria e un file su questo computer" />

La registrazione scelta compare in un lettore sotto i pulsanti: riproduzione e pausa, entrambi i canali disegnati come forma d'onda su cui si può cliccare, e il tempo. Prema **Avvia**: la registrazione viene riprodotta nel suggeritore per la stessa via di una chiamata, alla sua velocità — la riproduzione accelerata di proposito non c'è, perché un suggeritore alimentato a una volta e mezza farebbe pause, risponderebbe e addebiterebbe una conversazione che nessuno ha avuto. La croce a destra è **Termina la prova**, per tornare ad ascoltare le chiamate.

Una registrazione su un solo canale, come un file importato, si sente come un'unica stanza: *il suggeritore sente tutto come l'interlocutore*.

## Quanto costa e dove vanno le parole {#what-it-costs-and-where-the-words-go}
- Il riconoscitore si paga a minuto di audio dal vivo, e **Riconosci anche il mio lato** lo raddoppia. Un modello si paga per ogni suggerimento. Entrambi contano sui [tetti mensili](/ai-processing/prompter#spending) del suggeritore, non sui limiti dell'Elaborazione.
- La voce dell'altra parte lascia il computer mentre parla, diretta al riconoscitore che lei ha scelto. Un riconoscitore sulla sua macchina — **Vosk**, **WhisperLive** o **NVIDIA Riva** — la tiene in casa.
- Ciò che il suggeritore mostra non è una registrazione. Per conservarlo prema **Esporta…**; per avere la conversazione stessa, [registri la chiamata](/recordings) anche.

## Quando non si avvia {#when-it-does-not-start}
La finestra dice cosa manca in una riga sotto i pulsanti.

| La finestra dice | Che cosa fare |
| --- | --- |
| *Il suggeritore è disattivato. Impostazioni → Suggeritore.* | Spunti **Consentire l'uso del suggeritore**. |
| *Nessun riconoscitore qui sa ascoltare mentre qualcuno parla. Impostazioni → Trascrizione.* | Aggiunga un riconoscitore con un **Indirizzo per il suggeritore** e prema **Prova**. |
| *Non c'è nulla da avviare. Impostazioni → Suggeritore, e aggiunga un assistente.* | Tutti gli assistenti sono stati eliminati o disattivati: ne aggiunga uno, o prema **Ripristina i valori predefiniti**. |
| *La controparte va avvisata prima. Registra questa conversazione, oppure cambia ciò che Impostazioni → Registrazione dice sul consenso.* | Avvii la registrazione, che riproduce l'annuncio, o cambi l'impostazione sul consenso. |
| *Il riconoscitore non ha iniziato ad ascoltare. Controlla il suo indirizzo dal vivo e il suo modello in Impostazioni → Trascrizione.* | L'indirizzo per il suggeritore, il modello o la chiave è sbagliato. **Prova** sulla scheda del riconoscitore dice quale. |
| *Il budget mensile per i riconoscitori è esaurito.* | Alzi **Riconoscitori, al mese** o attenda che cambi il mese. |
| *Il budget mensile per i modelli è esaurito. Le parole continuano; il suggerimento si è fermato.* | Alzi **Modelli, al mese**. |
