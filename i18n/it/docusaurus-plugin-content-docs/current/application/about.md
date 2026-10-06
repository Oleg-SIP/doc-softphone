---
title: Informazioni
sidebar_position: 2
description: "La versione, gli aggiornamenti, il suo paese, la licenza, che cosa contiene il rapporto d'uso, il modulo di riscontro e con che cosa è costruito il programma."
---

**Impostazioni → Informazioni** raccoglie tutto ciò che riguarda il programma stesso.

<Shot name="20_settings_about" alt="Impostazioni → Informazioni" />

## Versione e paese {#version-and-country}

In alto ci sono il nome, la **Versione** (nell'immagine 1.0.1) e un collegamento al sito web, [ai-softphone.com](https://ai-softphone.com/).

**Paese** dice al programma dove si trova lei. Aiuta a scegliere il server di aggiornamento migliore e apre la strada ai servizi linguistici e vocali ospitati nel suo paese. **Rileva automaticamente** lo compila.

## Aggiornamenti {#updates}

La scheda dice se ha la versione più recente e quando è stato fatto l'ultimo controllo. **Cerca aggiornamenti** controlla adesso.

**Cerca gli aggiornamenti automaticamente**, attivo per impostazione predefinita, controlla una volta al giorno e poco dopo l'avvio del telefono. Chiede a un server un piccolo file, e nulla viene scaricato o installato senza che lo dica lei.

## Licenza {#licence}

Il programma è software libero sotto GPL-2.0-or-later. Viene fornito senza alcuna garanzia, e può ridistribuirlo secondo i termini di quella licenza; il testo completo è nel file chiamato `LICENSE`.

## Telemetria {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Impostazioni → Informazioni: che cosa contiene il rapporto d'uso" />

Il programma invia un piccolo rapporto d'uso al giorno. Le viene mostrato che cosa contiene prima che parta il primo, e la scheda lo elenca:

| | Che cosa viene inviato |
| --- | --- |
| **Sempre inviato** | Che l'applicazione è stata avviata, la sua versione e la lingua dell'interfaccia; la versione del sistema operativo, le impostazioni locali, il paese e il fuso orario. |
| **Inviato in più, in modalità Estesa** | I contatori delle chiamate e delle conversazioni catturate; il produttore e la versione del centralino collegato, mai il suo indirizzo; quanti passi della [Panoramica](/interface/settings-overview) sono fatti, e la disposizione scelta. |
| **Mai inviato, in nessuna modalità** | I numeri che ha composto o da cui è stato chiamato; account, password o qualsiasi cosa del portachiavi; contatti, conversazioni, trascrizioni o registrazioni; qualsiasi cosa abbia digitato, e qualsiasi dato privato sul computer. |

Ogni installazione crea per sé un identificativo casuale, così i rapporti della stessa copia del programma possono essere riconosciuti come tali. Non deriva da nulla che riguardi lei o il suo computer, e non nomina nessuno — ma poiché dura nel tempo, i rapporti che porta possono essere collegati tra loro. Questo li rende pseudonimi piuttosto che anonimi.

Il rapporto base ha come fondamento un interesse legittimo: sapere quali versioni sono in uso è ciò che permette a una correzione di raggiungere chi ne ha bisogno. Tutto ciò che il rapporto esteso aggiunge c'è perché lo ha scelto lei, e può cambiarlo qui in qualsiasi momento.

### Rapporti {#reporting}

| Scelta | |
| --- | --- |
| **Estesa** | Il rapporto base e ciò che elenca *Inviato in più*. Selezionata nell'immagine. |
| **Base** | Solo ciò che è *Sempre inviato*. |
| **Disattivati** | Nessun rapporto. Disponibile solo nell'edizione Enterprise; altrimenti l'opzione è grigia. |

## Riscontro {#feedback}

<Shot name="20c_settings_about_bottom" alt="Impostazioni → Informazioni: il modulo di riscontro e i componenti con cui è costruito il programma" />

Un modulo che scrive agli sviluppatori senza lasciare il programma.

| Campo | |
| --- | --- |
| **Oggetto** e **Messaggio** | Ciò che vuole dire. |
| **Il suo nome** e **Indirizzo per una risposta** | Entrambi facoltativi. Senza un indirizzo non c'è modo di risponderle. |
| **Allega il registro** | Aggiunge la parte finale del registro, circa 512 kB. Veda [Diagnostica](/troubleshooting/diagnostics). |

**Invia** resta grigio finché non c'è qualcosa da inviare.

## Costruito con {#built-with}

I componenti su cui è costruito il programma, ciascuno con la sua licenza: Qt 6 (GPL-2.0 o GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (pubblico dominio), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) e il client PulseAudio (LGPL-2.1-or-later). Ciascuno è usato sotto la licenza indicata accanto; dove un componente ne offre più d'una, si adotta quella nominata.
