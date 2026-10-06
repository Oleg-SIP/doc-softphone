---
title: API REST locale
sidebar_position: 2
description: Lasciare che altri programmi di questo computer guidino il telefono — fare e controllare chiamate, leggere contatti, cronologia e account.
---

AI Softphone ha un'API REST per l'integrazione CTI: un programma sullo stesso computer può fare e controllare chiamate, leggere i contatti, il registro chiamate e gli account SIP, e seguire le chiamate in corso. Niente SDK, nessun intermediario nel cloud e nessun servizio in ascolto esposto alla rete. Richieste e risposte sono JSON, perciò basta `curl` o qualsiasi client HTTP.

L'API è **spenta dopo l'installazione**; nulla è in ascolto finché non la attiva. Da quel momento ascolta solo sull'interfaccia di loopback — *una piccola interfaccia web che risponde solo a questo computer* — e non si può raggiungere dalla rete dell'ufficio, da una VPN o da un'altra macchina.

Usi l'API quando il suo programma ha bisogno di dati dal telefono o deve controllare una chiamata. Usi i [webhook](/integration/webhooks) quando deve reagire alle chiamate mentre accadono, senza interrogare di continuo. La maggior parte delle integrazioni usa entrambi; sono indipendenti l'uno dall'altro.

## Attivarla {#turning-it-on}

Apra **Impostazioni → Integrazione** e vada a **Controllo locale**.

<Shot name="17b_settings_integration_scrolled" alt="Impostazioni → Integrazione: controllo locale" />

1. Attivi **Lascia che altri programmi di questo computer guidino il telefono**. Il server parte subito.
2. Tenga la **Porta** predefinita, `8377`, a meno che un altro programma non la usi già.
3. Facoltativamente, imposti un **Token**. Una volta salvato, il campo mostra *Salvato — digiti per sostituirlo*.
4. In **Accesso** scelga i gruppi da aprire: **Contatti**, **Registro chiamate**, **Le chiamate e il loro controllo**, **Account**, **Impostazioni**, **Contatori** (le metriche). Un gruppo spento non viene filtrato: semplicemente non viene servito.
5. La provi: `curl http://127.0.0.1:8377/accounts`. Se la risposta è JSON, l'API funziona.

Non viene installato nessun servizio separato e non serve riavviare. La parte del programma che fa questo si può disattivare in [Moduli](/application/modules) (**Integrazione**).

## La pagina dell'API {#the-apis-own-page}

**Apri la pagina dell'API** apre `http://127.0.0.1:8377` in un browser. L'indirizzo risponde con un elenco di tutto ciò che serve, in inglese; gli indirizzi che leggono qualcosa sono collegamenti che può seguire.

<Shot name="23_api_page" alt="La pagina dell'API, http://127.0.0.1:8377/, aperta in un browser" />

## L'accesso e il token {#access-and-the-token}

Che cosa può fare un programma dipende da se cambia dati salvati, non da se legge:

- **Senza token**, qualsiasi programma sul computer può leggere tutto nei gruppi attivi e controllare le chiamate: fare, rispondere, riagganciare, mettere in attesa, riprendere, trasferire e inviare DTMF.
- **Con il token** nell'intestazione `Authorization`, può anche usare gli endpoint che cambiano ciò che è salvato. Senza il token, quegli endpoint non vengono né serviti né elencati nella pagina dell'API.

Il token è conservato nel portachiavi del computer, non nel file di impostazioni, e non viene mai restituito da `/settings`.

:::caution
Senza token, qualsiasi programma in esecuzione su questo computer può controllare il telefono, compreso rispondere alle chiamate. Su una postazione personale di solito è accettabile. Su una macchina condivisa o gestita, imposti un token e lo tratti come qualsiasi altra password. Il token protegge solo le richieste che modificano i dati salvati, non le chiamate: per tenere gli altri programmi lontani dalle chiamate, spenga **Le chiamate e il loro controllo** in **Accesso**.
:::

## Endpoint {#endpoints}

L'indirizzo di base è `http://127.0.0.1:8377`. Gli endpoint qui sotto non richiedono token.

| Metodo | Percorso | Che cosa fa |
| --- | --- | --- |
| GET | `/metrics` | I contatori, in formato Prometheus. |
| GET | `/ui` | L'elenco delle registrazioni, come pagina HTML. |
| GET | `/ui/recordings/{id}` | Una registrazione con la sua trascrizione, come pagina HTML. |
| GET | `/ui/recordings/{id}/audio` | L'audio per la pagina sopra. |
| GET | `/contacts` | I contatti. |
| GET | `/contacts/{id}` | Un singolo contatto. |
| GET | `/history` | Il registro chiamate, dalla più recente. Accetta `?limit=`, `?missed=true` e `?declined=true`. |
| GET | `/calls` | Le chiamate in corso. |
| POST | `/calls` | Fa una chiamata: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Risponde a una chiamata. |
| POST | `/calls/{id}/hangup` | Chiude una chiamata. |
| POST | `/calls/{id}/hold` | Mette una chiamata in attesa. |
| POST | `/calls/{id}/resume` | La toglie dall'attesa. |
| POST | `/calls/{id}/dtmf` | Invia toni: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Trasferisce la chiamata: `{"target": "..."}`. |
| GET | `/accounts` | Gli account SIP e il loro stato di registrazione. Mai una password. |
| GET | `/settings` | L'intera configurazione, senza i segreti. |
| GET | `/taxonomy` | Categorie, etichette e segnali, con i loro codici. |

Ogni identificativo è un UUID emesso dal telefono: l'`id` di una chiamata viene da `/calls` o dalla risposta a `POST /calls`, l'`id` di un account da `/accounts`.

I nomi dei campi sono in snake_case e la desinenza indica il tipo: `_id` è un riferimento a un UUID, `_ts` è un momento in millisecondi Unix (UTC), `_s` è una durata in secondi. Lo stesso vale per i webhook; solo `/settings` mantiene nomi propri. Nell'API REST questi valori sono numeri JSON, e un momento non noto è `null`.

## Esempio: fare una chiamata {#example-placing-a-call}

`POST /calls` fa una chiamata in uscita. Il corpo è JSON con il `number` da comporre e, facoltativamente, l'`account_id` dell'account da cui chiamare:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

La risposta è l'identificativo della nuova chiamata:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` è obbligatorio. Senza, la risposta è `400 {"error":"a call needs a number"}` e non viene composto nulla.
- Il numero viene completato sull'account scelto come lo completa il compositore: `1020` viene inviato come `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` completa il suo `target` allo stesso modo; una destinazione che ha già uno schema o una `@` viene inviata così com'è.
- `account_id` è facoltativo; lo prenda da `GET /accounts`. Senza, la chiamata parte sull'account selezionato nella finestra principale.
- Usi l'`id` in `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` e `transfer`. I [webhook](/integration/webhooks#an-outgoing-call-event-by-event) di questa chiamata portano lo stesso `id`.

### Da una pagina web: clic per chiamare {#from-a-web-page-click-to-call}

Una pagina che chiama `127.0.0.1` raggiunge il computer su cui gira il browser — lo stesso su cui gira il telefono —, perciò un pulsante clic-per-chiamare in un CRM non ha bisogno di un suo server:

```javascript
async function dial(number) {
  const r = await fetch("http://127.0.0.1:8377/calls", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number }),
  });
  if (!r.ok) console.warn("softphone:", (await r.json()).error);
}
```

## Che cosa contengono le risposte {#what-the-answers-contain}

### Chiamate in corso: `GET /calls` {#calls-in-progress-get-calls}

Ogni chiamata ha il suo `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` e `callstate_ts`.

- `state` è `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (messa in attesa da questo telefono), `onhold` (messa in attesa dall'interlocutore), `conference` o `ended`. Quando ne vale più d'uno, `conference` prevale su `hold`, e `hold` su `onhold`.
- `muted` dice se il microfono è silenziato nella chiamata; silenziare non cambia `state`.
- `seance_id` è la conversazione: le chiamate collegate da un trasferimento, una consultazione o una conferenza lo condividono.
- `event_ts` è quando è stata prodotta la risposta. Lo confronti con `callstate_ts` per vedere da quanto la chiamata è nel suo stato, senza dipendere dal suo orologio.

### Account: `GET /accounts` {#accounts-get-accounts}

Ogni account ha il suo `id` (l'`account_id` ovunque altrove), le sue impostazioni — `transport` (`udp`, `tcp` o `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` e altre —, se è `enabled`, e il suo `state` sul centralino: `registered` mentre la linea è attiva. Le password non sono mai incluse.

### Registro chiamate: `GET /history` {#call-history-get-history}

Dalla più recente, 100 voci a meno che `?limit=` non dica altrimenti. `?missed=true` restituisce solo le chiamate perse, `?declined=true` solo le chiamate che questo telefono ha rifiutato.

| Campo | Significato |
| --- | --- |
| `id` | L'identificativo proprio della voce della cronologia. Non è l'`id` di chiamata di `/calls` e dei webhook; `seance_id` collega i due. |
| `outcome` | La classificazione principale: `answered`, `missed`, `declined` o `failed`. |
| `answered` | `true` o `false`. |
| `duration_s` | `0` per una chiamata mai collegata. |
| `number`, `uri` | L'interlocutore, come numero e come indirizzo SIP. |
| `name` | Dai Contatti se il numero è noto, altrimenti vuoto. Faccia corrispondere su `number`, non su questo. |
| `dialed` | Le cifre composte, per una chiamata in uscita; vuoto per una in arrivo. |
| `account`, `account_id` | La linea su cui è passata la chiamata. |
| `reason` | Come è finita: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` se ha risposto una persona; altrimenti che cosa ha risposto alla chiamata. |

### Contatti: `GET /contacts` {#contacts-get-contacts}

Ogni contatto ha il suo `id`, `name`, `number` e la linea a cui appartiene, `account_id` e `account`; un `account` vuoto significa che il contatto non è legato a una linea.

### Registrazioni {#recordings}

Registrazioni e trascrizioni non vengono fornite come JSON. L'API le serve come pagine HTML, `/ui` e `/ui/recordings/{id}`: dal suo CRM metta collegamenti a queste pagine invece di spostare audio. Il collegamento si apre sul computer che conserva la registrazione, e l'audio non lo lascia mai.

## Tassonomia e impostazioni {#taxonomy-and-settings}

Ogni voce di `/taxonomy` ha un `code` costante, un `title` e una `description` nella lingua dell'interfaccia, un `kind` (`category`, `tag` o `red_flag`) e, per i segnali, una `severity`. **Faccia corrispondere su `code`, mai su `title`**: i titoli arrivano nella lingua impostata sul telefono. Una voce con `retired: true` viene conservata perché le chiamate più vecchie si risolvano ancora; non viene più assegnata alle nuove chiamate. Carichi la tassonomia una volta all'avvio per far corrispondere le parole del telefono ai suoi campi.

`/settings` restituisce la configurazione tranne i segreti: dispositivi audio e volumi, priorità dei codec, aspetto e lingua, avvio, scorciatoie, il livello di diagnostica e lo stato di entrambe le integrazioni — utile per uno strumento di assistenza che deve controllare una postazione senza condividere lo schermo. `api.disabled` elenca i gruppi di accesso spenti e `webhooks.silenced` gli eventi spenti; elenchi vuoti significano che è tutto attivo. Non include mai la password SIP, il token dell'API né il valore dell'intestazione del webhook.

## Errori {#errors}

Ogni errore è JSON con una sola chiave `error`, pensata per le persone, non per l'analisi automatica.

| Stato | Corpo | Significato |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Il percorso non esiste, o il suo gruppo di accesso è spento; entrambi danno di proposito la stessa risposta. |
| 404 | `{"error":"no contact with that id"}` | Il percorso è giusto, l'identificativo no. |
| 400 | `{"error":"no call with that id"}` | La chiamata è finita, o non è mai esistita. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` senza numero. Non è stato composto nulla. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` senza cifre. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` senza destinazione. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | L'account della chiamata è stato rimosso durante la chiamata, perciò la destinazione non si può completare. Non è stato inviato nulla al centralino. |

Le richieste rifiutate vengono contate in `api_requests_refused_total`, così un'integrazione che fallisce in silenzio si vede nelle metriche, non solo nei suoi registri.

## Metriche {#metrics}

`GET /metrics` restituisce ogni contatore del telefono, ciascuno con un testo di aiuto. Lo raccolga con Prometheus o lo legga a mano.

| Contatore | Conta |
| --- | --- |
| `calls_incoming_total` | Chiamate in arrivo ricevute. |
| `calls_outgoing_total` | Chiamate in uscita fatte. |
| `calls_answered_total` | Chiamate che hanno ricevuto risposta. |
| `calls_missed_total` | Chiamate in arrivo senza risposta. |
| `calls_declined_total` | Chiamate rifiutate qui o dall'altra parte. |
| `calls_failed_total` | Chiamate che non si sono potute stabilire. |
| `registrations_succeeded_total` | Registrazioni SIP riuscite. |
| `registrations_failed_total` | Registrazioni SIP rifiutate o scadute. |
| `webhooks_delivered_total` | Webhook accettati dal ricevitore. |
| `webhooks_failed_total` | Webhook rifiutati o non consegnati. |
| `webhooks_dropped_total` | Webhook scartati perché la coda era piena. |
| `api_requests_total` | Richieste gestite dall'API. |
| `api_requests_refused_total` | Richieste rifiutate: token sbagliato, gruppo spento o percorso sconosciuto. |

## Aggiornare un'integrazione più vecchia {#updating-an-older-integration}

Le versioni precedenti usavano nomi in camelCase e identificativi brevi. `accountId` è ora `account_id`, `startedAt` è `callstart_ts`, `durationSeconds` è `duration_s`, `answeredBy` è `answered_by`, e il campo del webhook `at` è `event_ts`. Chiamate e account sono identificati solo tramite UUID: `runtimeId` e identificativi come `call-3` o `account-2` non vengono più restituiti né accettati.

## Quando non funziona {#when-it-does-not-work}

| Sintomo | Che cosa controllare |
| --- | --- |
| Connessione rifiutata su `127.0.0.1:8377` | Il controllo locale è spento, il telefono non è in esecuzione o la porta è stata cambiata. |
| `404 {"error":"no such endpoint"}` per un percorso di questa pagina | Il suo gruppo di accesso è spento. |
| La lettura funziona, la scrittura viene rifiutata | Gli endpoint che cambiano dati salvati richiedono il token nell'intestazione `Authorization`. |
| I titoli delle categorie non sono in inglese | I titoli seguono la lingua dell'interfaccia. Faccia corrispondere su `code` da `/taxonomy`. |
| Mancano `accountId`, `startedAt` o `at` | L'integrazione è stata scritta per i nomi precedenti; veda sopra. |

Per un problema di registrazione o di una chiamata in sé, apra la [Diagnostica](/troubleshooting/diagnostics).
