---
title: Diagnostica
sidebar_position: 1
description: La finestra che mostra ogni parola che si dicono il telefono e il centralino, il file di registro e dove il programma conserva i suoi file.
---

La finestra **Diagnostica** mostra che cosa si dicono il telefono e il centralino, nel momento in cui se lo dicono. È il primo posto dove guardare quando un account non si registra o una chiamata non si collega, e la finestra che un reparto IT le chiederà di inviare.

Si apre da **Impostazioni → Diagnostica**, con il pulsante **Apri la diagnostica**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="La finestra Diagnostica" />

Mostra ogni messaggio SIP che il telefono invia o riceve, mentre accade, insieme alle statistiche audio delle chiamate in corso. Raccoglie dati solo mentre è aperta e non conserva nulla dopo la chiusura.

## SIP {#sip}

La scheda **SIP** è il registro della segnalazione.

- Ogni messaggio è una riga con l'ora (al millisecondo), che cosa è e dove è andato: una freccia verso destra è inviata dal telefono, una freccia verso sinistra è ricevuta dal server. Sotto: `to` o `from` l'indirizzo del server e il trasporto (per esempio *tramite UDP*).
- Un messaggio si può espandere per vederne le intestazioni complete (il terzo messaggio nell'immagine).
- **Cerca** trova del testo nel registro.
- **Svuota** lo svuota.

L'esempio nella schermata è una registrazione sana: il telefono invia `REGISTER`, il server risponde `200 OK (REGISTER)`.

## Chiamate {#calls}

La seconda scheda, **Chiamate**, mostra le metriche di qualità di ogni chiamata in corso.

## La scheda Diagnostica delle impostazioni {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Impostazioni → Diagnostica" />

### Dettaglio del registro {#log-detail}

Il menu a discesa sceglie quanto scrive il programma nel suo file di registro; nell'immagine è **Dettagliato**. Ha effetto subito, anche su una chiamata già in corso — che è proprio quella di cui vuole la traccia. L'impostazione più dettagliata annota ogni messaggio SIP. È voluminosa, ma le password vengono tolte prima di scrivere qualsiasi cosa, quindi il file si può inviare in sicurezza con una richiesta di assistenza.

**Invia una copia al registro di sistema** scrive il registro anche nel registro del sistema, per una macchina i cui registri vengono raccolti centralmente. Il file qui sotto viene scritto in ogni caso, ed è quello da allegare a una richiesta di assistenza.

### File {#files}

La scheda elenca dove il programma conserva i suoi file e quanto è grande ciascuno. Su macOS:

| File | Dove | Contiene |
| --- | --- | --- |
| Impostazioni | `~/Library/Preferences/ai-softphone/settings.json` | Le impostazioni. Mai password né token. |
| Database | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Contatti, cronologia, trascrizioni e resoconti. |
| Registrazioni | `~/Library/Application Support/ai-softphone/recordings` | L'audio delle registrazioni. |
| Registro | `~/Library/Logs/ai-softphone/ai-softphone.log` | Il registro. |

Sotto l'elenco, **Apri** mostra il registro e **Svuota** lo svuota. Svuoti il registro subito prima di riprodurre un problema; svuotarlo non si può annullare.

## Che cosa inviare all'assistenza {#what-to-send-to-support}

1. Imposti **Dettaglio del registro** sul livello più dettagliato.
2. Prema **Svuota**, poi riproduca il problema.
3. Invii il file di registro, oppure apra **Impostazioni → Informazioni**, ci scriva da lì e spunti **Allega il registro** — veda [Informazioni](../application/about.md#feedback).

Per un problema di registrazione o di chiamata, invii anche le righe del tentativo fallito dalla scheda **SIP**.

La parte del programma dietro tutto questo — la traccia SIP, le statistiche dei media e i contatori — si può disattivare in [Moduli](../application/modules.md) (**Diagnostica**).
