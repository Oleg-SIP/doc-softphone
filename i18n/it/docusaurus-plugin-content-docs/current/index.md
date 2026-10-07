---
slug: /
title: Documentazione di AI Softphone
sidebar_position: 1
description: "Che cos'è AI Softphone, su che cosa funziona e dove è descritta ogni parte del programma."
---

[AI Softphone](https://ai-softphone.com/) è un softphone per centralini IP che trasforma anche ogni conversazione in testo e in un resoconto scritto. Una conversazione può arrivargli in tre modi, e tutti e tre finiscono nella stessa libreria con la stessa registrazione, la stessa trascrizione e lo stesso resoconto:

- **una chiamata** fatta o ricevuta nel programma, attraverso qualsiasi centralino IP o provider SIP;
- **una riunione** in Zoom, Teams, Meet o qualsiasi altra applicazione, registrata dal computer stesso;
- **una registrazione che ha già** — da un cellulare, da un dittafono o da un altro sistema — aggiunta alla libreria.

Registrazioni, trascrizioni e cronologia sono conservate in un file che le appartiene. Non servono account né abbonamenti, e il programma è software libero sotto GPL v2.

## Da una conversazione a un resoconto {#from-a-conversation-to-a-write-up}

1. Arriva una conversazione: una chiamata, una riunione o un file.
2. Viene registrata su due canali, così ciò che ha detto lei e ciò che ha detto l'altra parte restano separati.
3. Viene trascritta, interlocutore per interlocutore, in sincronia con l'audio.
4. Il modello linguistico che ha scelto ne scrive il resoconto: riassunto, compiti, categoria, etichette e segnali — e può fare una domanda alla conversazione.

## Download e requisiti di sistema {#download-and-system-requirements}

Il programma si scarica gratuitamente da [ai-softphone.com](https://ai-softphone.com/#download): un programma di installazione (`.exe`) per Windows, un'immagine disco (`.dmg`) per macOS, e un'AppImage o un `.deb` per Linux. Il programma di installazione, l'immagine disco e l'AppImage non richiedono nient'altro installato prima — Qt, OpenSSL e il runtime C++ viaggiano al loro interno. Fa eccezione il `.deb`: usa il runtime C++ del sistema, vedere più sotto. Le servirà un account SIP, dal suo provider o dal centralino che gestisce lei stesso. La registrazione funziona appena il programma è installato; la trascrizione e il resoconto richiedono un servizio a sua scelta o un modello sulla sua macchina.

| Sistema | Requisiti |
| --- | --- |
| macOS | macOS 14.4 o successivo; solo Apple silicon — un Mac Intel non può aprirlo, nemmeno tramite Rosetta; grafica Metal; 160 MB di spazio su disco, più le registrazioni. Il sistema chiede una volta l'accesso al microfono. |
| Windows | Windows 10 versione 1809 (build 17763) o successiva, e Windows 11; processore Intel o AMD a 64 bit; Direct3D 11 o OpenGL 2.1; 250 MB di spazio su disco, più le registrazioni. |
| Linux | Ubuntu 22.04 LTS o successivo, Debian 12 o successivo, e qualsiasi sistema di quell'epoca — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; libreria C GNU 2.35 o successiva; processore Intel o AMD a 64 bit; OpenGL 2.1 o OpenGL ES 2.0, su X11 o Wayland; PipeWire o PulseAudio (ALSA dove non c'è nessuno dei due); 200 MB di spazio su disco, più le registrazioni. L'icona nell'area di notifica richiede un desktop con un'area di notifica di stato. |

Su Linux l'AppImage funziona su qualsiasi distribuzione di quell'epoca: la renda eseguibile e la avvii. Il `.deb` richiede inoltre il runtime C++ del sistema proveniente da GCC 13, che Ubuntu 24.04 e Debian 13 hanno e Ubuntu 22.04 no; su qualsiasi sistema più vecchio, usi l'AppImage.

L'interfaccia è disponibile in trenta lingue, si sceglie in [Aspetto](/program/appearance) e si cambia senza riavviare.

Le schermate di questa documentazione sono fatte su macOS e mostrate in piccolo: faccia clic su una per vederla a grandezza piena. Il programma ha lo stesso aspetto e funziona allo stesso modo sugli altri sistemi.

## Primi passi {#first-steps}

1. [Aggiunga un account](sip-accounts/setup.md) per il suo centralino o provider SIP.
2. [Scelga il microfono e gli altoparlanti](sip-accounts/devices.md) e faccia una chiamata di prova.
3. Decida [quali chiamate vengono registrate](recordings/call-recording.md).
4. Aggiunga un [riconoscitore](ai-processing/transcription.md) e un [modello linguistico](ai-processing/processing.md) se vuole trascrizioni e resoconti.

**Impostazioni → Panoramica** tiene questa lista per lei: un punto verde indica un passo fatto, uno rosso un passo che manca. Veda [Panoramica delle impostazioni](interface/settings-overview.md).

## Cosa leggere dopo {#where-to-read-next}

| Se vuole… | Legga |
| --- | --- |
| Orientarsi tra le finestre | [Interfaccia](interface/main-window.md) |
| Collegare il telefono al suo centralino | [Configurare un account SIP](sip-accounts/setup.md) |
| Scegliere microfono, altoparlanti e suoneria | [Dispositivi](sip-accounts/devices.md) |
| Impostare i codec, l'avviso di chiamata e il registro chiamate | [Impostazioni delle chiamate](sip-accounts/calls.md) |
| Mettere i colleghi su pulsanti a un tocco | [Pulsanti](sip-accounts/buttons.md) |
| Decidere quali chiamate vengono registrate, e per quanto tempo | [Registrare le chiamate](recordings/call-recording.md) |
| Ascoltare, cercare e leggere le sue conversazioni | [Finestra delle registrazioni](interface/recordings.md) |
| Registrare una riunione tenuta in un'altra applicazione | [Cattura](capture/capture.md) |
| Scegliere il riconoscitore che trasforma la voce in testo | [Trascrizione](ai-processing/transcription.md) |
| Decidere quale IA scrive i resoconti delle sue conversazioni e quanto può costare | [Elaborazione](ai-processing/processing.md) |
| Cambiare le categorie, le etichette e i segnali | [Dizionari](ai-processing/dictionaries.md) |
| Cambiare la disposizione, il tema, l'avvio e le scorciatoie | [Aspetto](program/appearance.md), [Avvio](program/startup.md) e [Scorciatoie](program/shortcuts.md) |
| Collegare un CRM o un altro programma | [Webhook](integration/webhooks.md) e [API REST locale](integration/rest-api.md) |
| Vedere che cosa si dicono il telefono e il centralino | [Diagnostica](troubleshooting/diagnostics.md) |
| Trovare la causa di un problema | [Problemi comuni](troubleshooting/common-problems.md) |
| Disattivare parti del programma | [Moduli](application/modules.md) |
| Controllare la versione, gli aggiornamenti e che cosa contiene il rapporto d'uso | [Informazioni](application/about.md) |

Le pagine seguono l'ordine delle schede di **Impostazioni**.

## Privacy {#privacy}

- Per impostazione predefinita tutto resta sul suo computer: registrazioni, trascrizioni e cronologia vivono in un file che le appartiene. Niente di una conversazione — né un numero, né un nome, né una parola di ciò che è stato detto — va da nessuna parte dove non l'abbia mandato lei.
- Le password degli account, il valore dell'intestazione del webhook e il token dell'API sono conservati nel portachiavi del sistema operativo, mai in un file di impostazioni.
- Una nuova versione si annuncia quando esce — mai durante una chiamata — e si installa solo quando lo dice lei.
- Il programma invia un piccolo rapporto d'uso al giorno. Le viene mostrato che cosa contiene prima che parta il primo, e lei sceglie quanto porta: **Base** o **Estesa**. Non contiene mai numeri, contatti, l'indirizzo del suo centralino né nulla di ciò che è stato detto in una conversazione. L'elenco completo è in [Informazioni](/application/about#telemetry).
- Il programma è software libero sotto GPL v2.
