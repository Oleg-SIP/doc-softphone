---
title: Webhook
sidebar_position: 1
description: "\"Far inviare al telefono una richiesta al suo CRM o a un altro sistema quando una chiamata inizia, cambia o finisce — con le richieste esatte di una chiamata in arrivo e di una in uscita.\""
---

Un webhook è una richiesta che il telefono invia a un indirizzo a sua scelta ogni volta che a una chiamata succede qualcosa. È così che un CRM può aprire la scheda del cliente prima del secondo squillo, registrare una chiamata quando finisce o accendere una spia su un pannello a parete. Un webhook non richiede regole del firewall in ingresso: è il telefono a chiamare lei. Poiché le richieste partono dalla postazione di lavoro, l'indirizzo deve solo essere raggiungibile da quel computer — un indirizzo interno `http://crm.local/calls` funziona come un indirizzo HTTPS pubblico.

I webhook sono **spenti** dopo l'installazione, finché non li attiva. Funzionano insieme all'[API REST locale](/integration/rest-api): un evento dice che qualcosa è cambiato, l'API dà i dettagli attuali.

## Attivarli {#turning-them-on}

Apra **Impostazioni → Integrazione**. **Webhook** è la prima sezione della scheda.

<Shot name="24_webhooks" alt="Impostazioni → Integrazione → Webhook, con https://crm.local/calls come indirizzo" />

1. Spunti **Raccontare a un altro sistema delle chiamate**. *Viene inviata una richiesta per ogni evento spuntato qui sotto.*
2. Inserisca l'**Indirizzo** che deve ricevere gli eventi, per esempio `https://crm.local/calls`.
3. Scelga il **Metodo**: **POST** (il predefinito) o **GET**.
4. In **Eventi** spunti che cosa inviare: **Una nuova chiamata**, **Una chiamata che finisce**, **Una chiamata che cambia stato**.
5. Facoltativamente, in **Autorizzazione**, imposti un'intestazione che il suo ricevitore può verificare: un **Nome dell'intestazione** (viene suggerito `Authorization`) e un **Valore dell'intestazione**. Il valore è conservato nel portachiavi del computer, mai in un file di impostazioni; una volta salvato, il campo mostra *Salvato — digiti per sostituirlo*.
6. Prema **Invia un evento di prova** per vedere che arrivi. Invia un evento di una chiamata mai avvenuta, con le stesse intestazioni di uno vero. Registri la richiesta grezza e costruisca il suo ricevitore su ciò che la sua versione invia davvero.

La parte del programma che invia le richieste è il modulo **Integrazione**; si può disattivare in [Moduli](/application/modules).

## Gli eventi {#the-events}

| Spuntato come | Evento | Inviato quando |
| --- | --- | --- |
| **Una nuova chiamata** | `call-started` | Una chiamata in arrivo inizia a squillare o parte una chiamata in uscita. |
| **Una chiamata che cambia stato** | `call-state-changed` | Cambia lo `state` della chiamata: riceve risposta, viene messa in attesa o ripresa da una delle due parti, oppure entra in una conferenza o ne esce. Silenziare non lo invia. |
| **Una chiamata che finisce** | `call-ended` | La chiamata è finita. |

Ogni evento si può spuntare da solo. Una scheda che si apre alla chiamata ha bisogno solo del primo; un registro chiamate solo dell'ultimo. `call-started` viene inviato per primo e va gestito in fretta.

## Com'è fatta la richiesta {#what-the-request-looks-like}

Con l'indirizzo `https://crm.local/calls` e il metodo **POST**, il telefono invia questo. Il corpo è JSON, e l'intestazione è quella impostata in **Autorizzazione**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

Lo `User-Agent` porta la versione del programma e il modo in cui è stato installato.

## Una chiamata in arrivo, evento per evento {#an-incoming-call-event-by-event}

Una chiamata dall'interno `1020` all'account `1002` squilla, riceve risposta, e chi ha risposto riaggancia quattro secondi dopo. Con tutti e tre gli eventi spuntati, il ricevitore riceve tre richieste, una dopo l'altra. Portano tutte lo stesso `id` e lo stesso `seance_id`.

### 1. Squilla: `call-started` {#1-it-rings-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021263333",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791021263333",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

È il momento di cercare chi chiama tramite `number` e mostrare la scheda del cliente. `state` è `ringing-in` e `duration_s` è `0`.

### 2. Riceve risposta: `call-state-changed` {#2-it-is-answered-call-state-changed}

Circa tre secondi dopo:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021266126",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791021266131",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` è ora `active`, e `callstate_ts` è passato al momento del cambiamento mentre `callstart_ts` resta dov'era.

### 3. Finisce: `call-ended` {#3-it-ends-call-ended}

Quattro secondi di conversazione dopo:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021270400",
  "dialed": "",
  "direction": "in",
  "duration_s": "4",
  "event": "call-ended",
  "event_ts": "1791021270406",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` è `ended`, `duration_s` è la durata della conversazione e `reason` dice chi l'ha chiusa: qui `local-hangup`, perché ha riagganciato la persona a questo telefono.

## Una chiamata in uscita, evento per evento {#an-outgoing-call-event-by-event}

Lo stesso interno viene chiamato dall'account `1002`: la persona compone `1020`, il telefono squilla, l'altra parte risponde, parla per sette secondi e riaggancia. Il ricevitore riceve quattro richieste, una in più rispetto a una chiamata in arrivo, perché una chiamata in uscita ha uno stato proprio mentre squilla dall'altra parte.

### 1. Viene composta: `call-started` {#1-it-is-dialled-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791023883072",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "dialing",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`direction` è `out`, `state` è `dialing` e `dialed` contiene il numero così come è stato composto. Il telefono non conosce ancora il nome dell'interlocutore, perciò `name` è vuoto.

### 2. Squilla dall'altra parte: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Mezzo secondo dopo:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883591",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023883591",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ringing-out",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`state` è `ringing-out`.

### 3. L'altra parte risponde: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Quattro secondi dopo:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023887072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023887076",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` è `active`. Il `name` ora è compilato, e l'`uri` è l'indirizzo dell'interlocutore come l'ha riportato la risposta. `duration_s` è ancora `0`: conta da questo momento.

### 4. Finisce: `call-ended` {#4-it-ends-call-ended}

Sette secondi dopo l'altra parte riaggancia:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023894781",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "7",
  "event": "call-ended",
  "event_ts": "1791023894789",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`duration_s` è `7`, e `reason` è `remote-hangup`, perché ha chiuso la chiamata l'altra parte. Quando riaggancia lei, è `local-hangup`, come nella chiamata in arrivo sopra.

### Gli stati, fianco a fianco {#the-states-side-by-side}

| | Chiamata in arrivo | Chiamata in uscita |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, poi `active` |
| `call-ended` | `ended` | `ended` |

## I campi {#the-fields}

**Ogni valore è una stringa**, numeri e marcature temporali compresi: `"duration_s": "42"`. Un momento non noto è una stringa vuota. I nomi seguono una convenzione: `_id` è un identificativo, `_ts` è tempo Unix in millisecondi (UTC), `_s` è una durata in secondi — come nell'API REST, dove i valori sono numeri JSON.

| Campo | Significato |
| --- | --- |
| `event` | `call-started`, `call-state-changed` o `call-ended`. |
| `id` | La chiamata: lo stesso UUID di `GET /calls` e `/calls/{id}/…`, e lo stesso in ogni evento della chiamata. |
| `seance_id` | La conversazione a cui appartiene la chiamata; veda [sotto](#one-conversation-across-transfers). |
| `direction` | `in` o `out`. |
| `state` | Gli stessi valori di `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (messa in attesa da questo telefono), `onhold` (messa in attesa dall'interlocutore), `conference` o `ended`. |
| `number` | Il numero dell'interlocutore. Faccia corrispondere i record del suo CRM su questo campo. |
| `name` | Il nome dell'interlocutore, dai Contatti; può essere vuoto, ed essere compilato più tardi nella chiamata, come nella chiamata in uscita sopra. |
| `uri` | L'indirizzo SIP dell'interlocutore. |
| `dialed` | Le cifre composte, per una chiamata in uscita; vuoto per una in arrivo. |
| `account`, `account_id` | La linea su cui passa la chiamata: `username@server`, e l'identificativo di `GET /accounts`. |
| `event_ts` | Quando è avvenuto l'evento. |
| `callstart_ts` | Quando il telefono ha saputo per la prima volta della chiamata. |
| `callstate_ts` | Quando la chiamata è entrata nel suo `state` attuale. |
| `duration_s` | Tempo di conversazione in secondi, dalla risposta al riaggancio. Impostato su `call-ended` per una chiamata con risposta; `0` altrimenti. |
| `reason` | Come è finita la chiamata: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; `none` fino ad allora. |
| `answered_by` | `no` se ha risposto una persona; altrimenti che cosa ha risposto. |

## Una conversazione attraverso i trasferimenti {#one-conversation-across-transfers}

`seance_id` raggruppa le chiamate che formano una conversazione. Una chiamata fatta o ricevuta da zero ne inizia una nuova. Una chiamata creata da un trasferimento, una chiamata che ne sostituisce un'altra, una consultazione su una chiamata e ogni chiamata unita in una conferenza mantengono il `seance_id` della chiamata da cui provengono.

Tra telefoni viaggia nell'intestazione SIP `X-Seance-Id`: quando una chiamata viene trasferita a un collega che usa anch'egli AI Softphone, e il centralino inoltra l'intestazione, entrambe le postazioni riportano lo stesso `seance_id`.

## GET invece di POST {#get-instead-of-post}

**GET** è per i ricevitori che non possono accettare un corpo della richiesta, come un CRM più vecchio o uno script ponte. Gli stessi campi vengono allora inviati come parametri della query.

Con **GET** l'indirizzo può essere un modello: ogni `[campo]` viene sostituito dal valore di quel campo, codificato con il percento. Per esempio:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

I segnaposto usano i nomi dei campi sopra. I modelli salvati con i nomi precedenti (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) continuano a funzionare.

## Come vengono consegnati gli eventi {#how-the-events-are-delivered}

| Comportamento | Che cosa significa per lei |
| --- | --- |
| Gli eventi vengono messi in coda, non inviati dalla chiamata stessa | Un ricevitore lento non ritarda mai squilli, chiamate o trasferimenti. |
| Una coda piena scarta eventi | Se il suo ricevitore smette di rispondere, si perdono eventi ma il telefono continua a funzionare. Tenga d'occhio `webhooks_dropped_total`. |
| Le consegne rifiutate e non riuscite vengono contate | `webhooks_failed_total` che sale mentre `webhooks_delivered_total` resta fermo indica il ricevitore. |
| Gli eventi arrivano in ordine | Chiamata iniziata, poi i cambi di stato, poi chiamata finita. Per ordinare gli eventi salvati usi `callstate_ts`, non l'ora in cui sono arrivati. |
| Almeno una volta | Lo stesso evento può arrivare due volte. `id`, `event` e `callstate_ts` insieme identificano un evento: faccia in modo che il suo gestore salti quello già visto. |

## Ricevere gli eventi {#receiving-the-events}

L'unica regola per un ricevitore: **rispondere `200` subito, e fare il lavoro dopo.** Un ricevitore lento non rallenta il telefono, ma riempie la coda, e una coda piena scarta eventi.

Per esempio, in Node.js con Express:

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // the Header value from Settings

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST sends a JSON body, GET sends query parameters
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // answer first

  setImmediate(() => {                          // then do the work
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // your code
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // your code
    }
  });
});

app.listen(8080);
```

Per registrare l'esito di una chiamata — con risposta, persa, rifiutata — prenda la voce con lo stesso `seance_id` e `number` da `GET /history?limit=20` dell'[API REST](/integration/rest-api#call-history-get-history). Quando il suo servizio riparte dopo una pausa, legga `GET /history?limit=200` e salvi ciò che ha perso: i webhook per il tempo reale, la cronologia per colmare i vuoti.

Per vedere le richieste prima che il CRM sia pronto, punti l'**Indirizzo** a un ispettore di richieste online e prema **Invia un evento di prova**.

## Quando non arriva nulla {#when-nothing-arrives}

| Sintomo | Che cosa controllare |
| --- | --- |
| Nessun webhook | Prema **Invia un evento di prova**. Se arriva, gli eventi che le servono non sono spuntati; se no, l'indirizzo è sbagliato o non raggiungibile dalla postazione. |
| `webhooks_failed_total` continua a salire | Il ricevitore rifiuta le richieste o non è raggiungibile. Controlli il suo registro, e se risponde a una richiesta semplice dalla postazione. |
| `webhooks_dropped_total` è maggiore di zero | Il ricevitore è stato troppo lento troppo a lungo e la coda si è riempita. Risponda prima `200`, poi elabori. |
| Lo stesso evento due volte | Previsto con la consegna almeno una volta. Tratti come uno solo gli eventi con lo stesso `id`, `event` e `callstate_ts`. |
