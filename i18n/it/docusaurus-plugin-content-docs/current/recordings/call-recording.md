---
title: Registrare le chiamate
sidebar_position: 1
description: "Quali chiamate vengono registrate, che cosa viene detto all'interlocutore, come si salvano le conferenze e per quanto tempo si conservano i file."
---

**Impostazioni → Registrazione** decide quali chiamate diventano registrazioni, e per quanto tempo restano i file. Una chiamata registrata compare nella [finestra delle registrazioni](/interface/recordings).

<Shot name="09_settings_recording" alt="Impostazioni → Registrazione" />

## Registrazione {#recording}

Il menu a discesa sceglie quali chiamate vengono registrate:

| Scelta | Registra |
| --- | --- |
| **A mano** | Solo quando preme registra sulla scheda della chiamata. Il valore predefinito. |
| **Chiedi a ogni chiamata** | Il telefono chiede a ogni chiamata se registrarla. |
| **Ogni chiamata** | Ogni chiamata con risposta, da sola. Scelta nell'immagine. |
| **Linee scelte** | Le chiamate sugli account che spunta nell'elenco che compare. |

La registrazione inizia quando si risponde alla chiamata e mai prima, perciò squilli e numeri composti non sono nel file. Una chiamata è un unico file stereo: lei su un canale e tutti gli altri sull'altro.

## Consenso {#consent}

Il menu a discesa sceglie come l'interlocutore viene informato della registrazione:

| Scelta | Che cosa sente l'interlocutore |
| --- | --- |
| **Un annuncio** | Un breve messaggio quando inizia la registrazione. Il valore predefinito. **Scegli…** sceglie un suo file audio; *se non si sceglie nulla, il telefono riproduce un breve segnale*. |
| **Un tono ogni pochi secondi** | Un bip a un intervallo che imposta con il cursore. |
| **Niente del tutto** | Nulla. Scelta nell'immagine. |

**Tieni l'avviso nella registrazione** — l'annuncio e il tono vengono riprodotti alle persone in chiamata; attivi questa opzione e saranno anche nel file.

:::caution
In molti luoghi — gran parte dell'Europa e diversi stati americani — registrare una conversazione senza avvisare l'interlocutore è contro la legge. La decisione spetta a lei, e il programma lo dice sotto il menu a discesa.
:::

## Conferenze {#conferences}

**Un file per persona**, attivo per impostazione predefinita. In una conferenza il secondo canale è un missaggio di tutti, perciò un file in più per persona è ciò che permette a una trascrizione di dire chi ha detto che cosa.

## Conservazione {#retention}

<Shot name="09b_settings_recording_scrolled" alt="Impostazioni → Registrazione: conservazione" />

| Impostazione | Predefinito | Che cosa limita |
| --- | --- | --- |
| **Periodo di conservazione** | Sempre | Per quanto tempo si conserva una registrazione. |
| **Limite di archiviazione** | Nessun limite | Quanto spazio possono occupare tutte le registrazioni insieme. |
| **File per persona** | Sempre | Per quanto tempo si conservano i file in più di una conferenza. |
| **Soglia di spazio su disco** | 500 MB | Un minimo di spazio libero sul disco. Le registrazioni che non ha fissato possono essere rimosse per restare sopra. |

Una registrazione fissata non viene mai eliminata da nessuna di queste impostazioni, e conta comunque per il limite. Un'ora di conversazione occupa circa 30 MB.

La parte del programma che registra le chiamate, e ne avvisa l'interlocutore, si può disattivare in [Moduli](/application/modules).

Per registrare una riunione tenuta in un'altra applicazione, veda [Cattura](/capture/).
