---
title: Configurare un account SIP
sidebar_position: 1
description: Collegare AI Softphone al suo centralino IP o provider SIP in Impostazioni → Account.
---

AI Softphone funziona con qualsiasi centralino IP o provider SIP. Può essere collegato a tutti gli account (linee) che ha, e ogni account ha le sue impostazioni.

Apra **Impostazioni → Account**.

<Shot name="05_settings_accounts" alt="Impostazioni → Account: due account, entrambi registrati" />

## L'elenco degli account {#the-list-of-accounts}

Ogni account è una riga con:

- una **casella** che attiva o disattiva l'account;
- un **punto** che è verde quando l'account è registrato sul centralino;
- il nome, e sotto `utente@server`;
- un pulsante **Disconnetti** che scollega l'account dal centralino;
- i pulsanti **▲** e **▼** che spostano l'account in su o in giù nell'elenco. I bollini degli account nella [finestra principale](../interface/main-window.md) seguono lo stesso ordine.

Il pulsante **Aggiungi** in alto a destra aggiunge un account. Faccia clic su una riga per aprirne il modulo sotto.

## Aggiungere un account {#adding-an-account}

<Shot name="05d_account_add" alt="Il modulo di un nuovo account, vuoto" />

Prema **Aggiungi**. Sotto l'elenco si apre un modulo vuoto, con il cursore in **Nome (facoltativo)**. Compili i campi qui sotto, apra **Impostazioni del server** se il centralino ne ha bisogno e prema **Salva**. Un nuovo account parte con i valori consueti: UDP sulla porta 5060, registrazione rinnovata ogni 300 secondi.

## Il modulo dell'account {#the-account-form}

<Shot name="05b_account_edit" alt="Il modulo di un account" />

| Campo | Cosa inserire |
| --- | --- |
| **Nome (facoltativo)** | Il nome mostrato sul bollino dell'account nella finestra principale e sulle sue chiamate. Se è vuoto, l'account è mostrato come `utente@server`. |
| **Nome utente** | Il nome utente o il numero di interno fornito dal suo centralino o provider. |
| **Password** | La relativa password. Il campo resta vuoto quando torna al modulo. È conservata nel portachiavi del computer, mai in un file di impostazioni. |
| **Indirizzo del server** | L'indirizzo del centralino o del server SIP del provider, per esempio `pbx.example.com`. |
| **Impostazioni del server** | Espande le impostazioni meno comuni della connessione; veda sotto. |
| **Rispondi automaticamente** | In **Risposta**: risponde alle chiamate in arrivo su questo account senza che lei prema nulla. Spento per impostazione predefinita. |

Prema **Salva** per conservare le modifiche. **Annulla** le scarta ed **Elimina** cancella l'account.

Quando il punto accanto all'account è verde, l'account è registrato e lo mostra anche il suo bollino nella finestra principale. Se resta grigio o rosso, apra la [Diagnostica](../troubleshooting/diagnostics.md): la scheda **SIP** mostra la richiesta `REGISTER` e che cosa ha risposto il server.

## Impostazioni del server {#server-settings}

La maggior parte dei centralini non ha bisogno di nulla qui. Prema **Impostazioni del server** per mostrarle; lo stesso pulsante diventa **Nascondi le impostazioni del server**.

<Shot name="05c_account_server_settings" alt="Le impostazioni del server di un account, espanse" />

| Campo | Predefinito | Che cos'è |
| --- | --- | --- |
| **Utente di autenticazione** | vuoto | Il nome con cui il centralino verifica la password, quando non coincide con il **Nome utente**. Nell'immagine l'interno è `201` e il centralino lo autentica come `ufficio201`. |
| **Trasporto** | UDP | Il protocollo della connessione al server. Un menu a discesa. |
| **Porta** | 5060 | La porta del server. |
| **Proxy in uscita** | vuoto | Un proxy attraverso cui deve passare ogni richiesta, se il suo provider ne fornisce uno. |
| **Registrar** | vuoto | L'indirizzo presso cui registrarsi, se non è l'**Indirizzo del server**. |
| **Nuova registrazione, secondi** | 300 | Ogni quanto il telefono rinnova la registrazione. |
| **Toni del tastierino** | Flusso audio | Come vengono inviati al centralino i toni del tastierino. Un menu a discesa. Lo cambi solo se il centralino non sente i toni. |

I codec offerti dal telefono non si impostano per account; sono in [Impostazioni delle chiamate](calls.md#audio-formats).
