---
title: Problemi comuni
sidebar_position: 2
description: "Che cosa controllare quando un account non si registra, non c'è audio, una chiamata o una riunione non viene registrata, non c'è trascrizione, il suggeritore non si avvia, o un collegamento, una scorciatoia o l'API non fanno nulla, e che cosa significano i messaggi del telefono stesso."
---

Ogni voce rimanda all'impostazione che ne decide. Se la risposta non è qui, apra la [Diagnostica](/troubleshooting/diagnostics): mostra che cosa si dicono il telefono e il centralino.

## L'account non si registra {#the-account-will-not-register}

Il punto accanto all'account in **Impostazioni → Account** resta grigio o rosso.

1. Controlli **Nome utente**, **Password** e **Indirizzo del server** nel [modulo dell'account](/sip-accounts/setup).
2. Se il suo centralino verifica la password con un nome diverso dall'interno, compili **Utente di autenticazione** in **Impostazioni del server**.
3. Controlli **Trasporto** e **Porta** rispetto a ciò che si aspetta il centralino.
4. Apra la scheda **SIP** della [finestra di diagnostica](/troubleshooting/diagnostics) e guardi la richiesta `REGISTER` e che cosa ha risposto il server.

## Non sento, o non mi sentono {#i-cannot-hear-or-i-cannot-be-heard}

Apra [Impostazioni → Dispositivi](/sip-accounts/devices).

- Dica qualcosa: la barra sotto **Microfono** deve muoversi. Se non si muove, scelga un altro microfono.
- Prema **Prova** sotto **Altoparlanti** per sentire un suono sul dispositivo scelto.
- Controlli i cursori del **Volume**. **Silenzia il microfono** sulla scheda della chiamata e la [scorciatoia](/program/shortcuts) **Silenzia il microfono** spengono il microfono durante una chiamata.
- La suoneria può essere impostata per suonare su un dispositivo diverso da quello con cui parla — **Suoneria**, il secondo menu a discesa.

## La chiamata si sente male, o non parte {#the-call-sounds-bad-or-does-not-start}

I codec sono offerti nell'ordine dell'elenco in [Impostazioni → Chiamate](/sip-accounts/calls#audio-formats). Lasci attivi i codec che usa il suo centralino, e metta il migliore per primo. Una modifica vale dalla chiamata successiva.

## Una seconda chiamata non squilla {#a-second-call-does-not-ring}

Che cosa succede quando qualcuno chiama mentre lei è in conversazione si imposta in [Avviso di chiamata](/sip-accounts/calls#call-waiting).

## Una chiamata non è stata registrata {#a-call-was-not-recorded}

- **Impostazioni → Registrazione**, il primo menu a discesa, decide quali chiamate vengono registrate; il valore predefinito, **A mano**, registra solo quando preme registra sulla scheda della chiamata. Veda [Registrazioni](/recordings).
- La registrazione inizia quando si risponde alla chiamata, perciò una chiamata senza risposta non ha un file.
- Il modulo **Registrazione** deve essere attivo in [Moduli](/application/modules).
- Le registrazioni vengono rimosse dai limiti in **Conservazione**; una registrazione fissata non viene mai rimossa.

## Una riunione in un'altra applicazione non è stata catturata {#a-meeting-in-another-application-was-not-captured}

Veda [Cattura](/capture/).

- **Consenti la cattura del suono** in **Impostazioni → Cattura** deve essere attivo.
- Con **Avvio automatico** su **Chiedimelo** (il valore predefinito), risponda alla domanda quando compare; con **Mai**, prema lei il pulsante di registrazione.
- Usi **Prova** nella stessa scheda: la barra in alto deve muoversi quando parla, quella in basso quando qualcosa viene riprodotto.
- Il modulo **Cattura** deve essere attivo in [Moduli](/application/modules).

## C'è una registrazione, ma nessuna trascrizione o riassunto {#there-is-a-recording-but-no-transcript-or-summary}

- Una conversazione viene trascritta e riassunta da sola solo se **Elabora le conversazioni automaticamente** è attivo in [Impostazioni → Elaborazione](/ai-processing/processing). Altrimenti lo chieda nella [finestra delle registrazioni](/interface/recordings).
- Ci devono essere un [riconoscitore](/ai-processing/transcription) e un [modello linguistico](/ai-processing/processing#language-models), e ciascuno deve rispondere al suo indirizzo.
- Quando viene raggiunto il **Limite di spesa** o il **Limite di token** mensile, le regole automatiche si fermano fino al mese successivo. Ciò che chiede lei stesso non viene mai fermato.
- I passi di [Impostazioni → Panoramica](/interface/settings-overview) mostrano che cosa resta da configurare.

## Il suggeritore non compare o non si avvia {#the-prompter-does-not-appear-or-does-not-start}

**Suggeritore** compare nell'elenco in fondo al telefono solo quando ci sono tre cose: un riconoscitore con un **Indirizzo per il suggeritore** che ha superato la sua **Prova** in [Impostazioni → Trascrizione](/ai-processing/transcription#live-recognition-for-the-prompter), un modello linguistico e la spunta **Consentire l'uso del suggeritore** in [Impostazioni → Suggeritore](/ai-processing/prompter). Il modulo **Suggeritore** deve essere attivo in [Moduli](/application/modules).

Se la finestra si apre ma il suggeritore non si avvia, la riga sotto i suoi pulsanti dice che cosa manca. [Quando non si avvia](/interface/prompter#when-it-does-not-start) elenca ogni messaggio e che cosa fare.

## Il telefono è sparito quando ho chiuso la finestra {#the-phone-disappeared-when-i-closed-the-window}

Con **Lascia il telefono in funzione quando la finestra è chiusa** attivo, il telefono è ancora in funzione e le chiamate arrivano ancora. L'icona nell'area di notifica (la barra dei menu su macOS) riporta la finestra. Su un desktop senza area di notifica, il telefono è ridotto a icona nella barra delle applicazioni. Veda [Avvio](/program/startup).

## Un numero di telefono in un browser o in un CRM non chiama {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Prema **Apri i collegamenti di chiamata con questo telefono** in [Impostazioni → Avvio](/program/startup#call-links). Un numero cliccato arriva nel compositore e lì aspetta, a meno che **Chiama subito, senza premere Chiama** non sia attivo.

## La spia di un pulsante resta grigia {#a-buttons-lamp-stays-grey}

Il centralino non dice se l'interno è libero. Il pulsante chiama comunque. Veda [Pulsanti](/sip-accounts/buttons).

## L'API REST non risponde {#the-rest-api-does-not-answer}

- **Lascia che altri programmi di questo computer guidino il telefono** deve essere attivo in [Impostazioni → Integrazione](/integration/rest-api), e il modulo **Integrazione** in [Moduli](/application/modules).
- L'indirizzo è `http://127.0.0.1:8377`, a meno che non abbia cambiato la **Porta**.
- Un gruppo che non ha aperto in **Accesso** risponde a ogni richiesta con `404`.
- Se ha impostato un **Token**, le richieste che cambiano dati salvati devono portarlo nell'intestazione `Authorization`.
- Altri sintomi sono in [Quando non funziona](/integration/rest-api#when-it-does-not-work).

## I webhook non arrivano {#webhooks-do-not-arrive}

Prema **Invia un evento di prova** in [Impostazioni → Integrazione](/integration/webhooks). I contatori `webhooks_failed_total` e `webhooks_dropped_total` dell'API REST mostrano come va la consegna; [Quando non arriva nulla](/integration/webhooks#when-nothing-arrives) spiega che cosa significa ciascuno.

## Una scorciatoia non fa nulla {#a-hotkey-does-nothing}

Apra [Scorciatoie](/program/shortcuts). Una scorciatoia funziona mentre il telefono è il programma che sta usando; per usarla da qualsiasi programma, spunti **Ovunque**. Faccia clic sulla scorciatoia e prema di nuovo la combinazione se un altro programma se l'è presa.

## I messaggi del telefono {#messages-the-phone-shows}

Quando qualcosa non avviene, il telefono dice perché su una riga a parte. Una riga sotto un elenco sparisce da sola dopo qualche secondo.

### Quando una chiamata non parte {#when-a-call-is-not-placed}

| Messaggio | Che cosa fare |
| --- | --- |
| *Non è configurato alcun account* | Aggiunga un account in [Impostazioni → Account](/sip-accounts/setup). |
| *Non è attivo alcun account, quindi non c'è una linea da cui chiamare.* | Spunti la casella di un account in **Impostazioni → Account**. |
| *Non è ancora registrata alcuna linea.* | L'account è attivo ma non ancora registrato sul centralino. Attenda che il suo punto diventi verde; se non succede, veda [L'account non si registra](#the-account-will-not-register). |
| *Ci sono già tante chiamate quante questo telefono ne regge.* | Chiuda una delle chiamate, poi richiami. |
| *L'account da cui questa sarebbe partita non c'è più.* | La riga appartiene a un account che nel frattempo è stato eliminato. Componga il numero nel tastierino. |
| *Questa riga non ha un numero da richiamare.* | Chi ha chiamato ha nascosto il numero, quindi non c'è nessuno da richiamare. |

### Quando un account non si connette {#when-an-account-does-not-connect}

| Messaggio | Che cosa fare |
| --- | --- |
| *Questo indirizzo di server non si trova. Controlli che non ci siano errori di battitura.* | Controlli **Indirizzo del server** nel [modulo dell'account](/sip-accounts/setup). |
| *Non è stato possibile raggiungere il server. Controlli indirizzo, porta e rete.* | Controlli **Indirizzo del server**, e **Trasporto** e **Porta** in **Impostazioni del server**. Anche un firewall può bloccare il SIP. |
| *Il server ha rifiutato questo nome utente o questa password.* | Controlli **Nome utente** e **Password**. Se il centralino verifica la password con un altro nome, compili **Utente di autenticazione**. |
| *Non è stato possibile verificare il certificato del server. Se l’amministratore del server lo ha emesso da sé, deseleziona «Verifica il certificato» in «Impostazioni del server».* | Compare con una connessione TLS. Se il centralino usa un certificato fatto da sé, tolga la spunta a **Verifica il certificato** in **Impostazioni del server**. |
| *La password di questo account non si è potuta leggere dal portachiavi. Lo sblocchi e si connetta di nuovo.* | Sblocchi il portachiavi del computer (Accesso Portachiavi su macOS), poi prema **Connetti** accanto all'account. |

### Durante una chiamata {#during-a-call}

| Messaggio | Che cosa fare |
| --- | --- |
| *Nessun formato audio in comune* | Il centralino e il telefono non hanno codec in comune. Attivi uno di quelli usati dal centralino in [Formati audio](/sip-accounts/calls#audio-formats). |
| *Né microfono né altoparlanti* | Scelga i dispositivi in [Impostazioni → Dispositivi](/sip-accounts/devices). |
| *Nessuna registrazione: il disco è sceso al limite. Liberi spazio, o cambi il limite nelle impostazioni.* | Lo spazio libero sul disco ha raggiunto la **Soglia di spazio su disco** — veda [Registrazioni](/recordings). Liberi spazio o abbassi la soglia. |

### All'avvio del telefono {#when-the-phone-starts}

*Database illeggibile* significa che il database è stato creato da un'altra versione del programma e questa non sa leggerlo. Di solito una versione più vecchia è stata avviata sui dati di una più nuova: reinstallando la versione più nuova, il database si riapre com'era. **Ricominciare** invece crea un database vuoto — ogni contatto e ogni chiamata della cronologia vanno persi, e non si può annullare. Prima di premerlo, può tenere una copia del file del database; [Diagnostica](/troubleshooting/diagnostics#files) dice dove si trova.
