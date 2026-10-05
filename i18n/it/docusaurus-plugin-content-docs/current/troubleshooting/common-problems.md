---
title: Problemi comuni
sidebar_position: 2
description: "\"Che cosa controllare quando un account non si registra, non c'è audio, una chiamata o una riunione non viene registrata, non c'è trascrizione, o un collegamento, una scorciatoia o l'API non fanno nulla.\""
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

- **Impostazioni → Registrazione**, il primo menu a discesa, decide quali chiamate vengono registrate; il valore predefinito, **A mano**, registra solo quando preme registra sulla scheda della chiamata. Veda [Registrare le chiamate](/recordings/call-recording).
- La registrazione inizia quando si risponde alla chiamata, perciò una chiamata senza risposta non ha un file.
- Il modulo **Registrazione** deve essere attivo in [Moduli](/application/modules).
- Le registrazioni vengono rimosse dai limiti in **Conservazione**; una registrazione fissata non viene mai rimossa.

## Una riunione in un'altra applicazione non è stata catturata {#a-meeting-in-another-application-was-not-captured}

Veda [Cattura](/capture/).

- **Consenti la cattura del suono** in **Impostazioni → Cattura** deve essere attivo.
- Con **Avvio automatico** su **Chiedimelo** (il valore predefinito), risponda alla domanda quando compare; con **Mai**, prema lei **Registra**.
- Usi **Prova** nella stessa scheda: la barra in alto deve muoversi quando parla, quella in basso quando qualcosa viene riprodotto.
- Il modulo **Cattura** deve essere attivo in [Moduli](/application/modules).

## C'è una registrazione, ma nessuna trascrizione o riassunto {#there-is-a-recording-but-no-transcript-or-summary}

- Una conversazione viene trascritta e riassunta da sola solo se **Elabora le conversazioni automaticamente** è attivo in [Impostazioni → Elaborazione](/ai-processing/processing). Altrimenti lo chieda nella [finestra delle registrazioni](/recordings/recordings-window).
- Ci devono essere un [riconoscitore](/ai-processing/transcription) e un [modello linguistico](/ai-processing/processing#language-models), e ciascuno deve rispondere al suo indirizzo.
- Quando viene raggiunto il **Limite di spesa** o il **Limite di token** mensile, le regole automatiche si fermano fino al mese successivo. Ciò che chiede lei stesso non viene mai fermato.
- I passi di [Impostazioni → Panoramica](/interface/settings-overview) mostrano che cosa resta da configurare.

## Il telefono è sparito quando ho chiuso la finestra {#the-phone-disappeared-when-i-closed-the-window}

Con **Lascia il telefono in funzione quando la finestra è chiusa** attivo, il telefono è ancora in funzione e le chiamate arrivano ancora. L'icona nell'area di notifica (la barra dei menu su macOS) riporta la finestra. Veda [Avvio](/program/startup).

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
