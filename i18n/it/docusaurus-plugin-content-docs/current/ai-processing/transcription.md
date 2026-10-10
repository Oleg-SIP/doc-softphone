---
title: Trascrizione
sidebar_position: 1
description: "Scegliere il riconoscitore che trasforma il suono in testo: il suo indirizzo, il suo modello e una tabella dei modelli di ogni tipo di servizio."
---

**Impostazioni → Trascrizione** elenca i riconoscitori: i servizi che trasformano il suono in testo, per le conversazioni concluse e, per il [suggeritore](../interface/prompter.md), mentre una conversazione è in corso.

<Shot name="25_transcription" alt="Impostazioni → Trascrizione: cinque riconoscitori" />

Una conversazione viene trascritta quando lo chiede nella [finestra delle registrazioni](/interface/recordings), oppure da sola se **Elabora le conversazioni automaticamente** è attivo in [Elaborazione](/ai-processing/processing). Un riconoscitore sulla sua macchina non costa nulla; uno nel cloud si fa pagare al minuto di audio.

## Riconoscitori {#recognisers}
Un riconoscitore è un servizio di riconoscimento vocale a cui il telefono invia il suono. **Aggiungi** ne aggiunge uno; il pulsante **Prova** della sua scheda verifica che il servizio risponda davvero. Ognuno compare nell'elenco con il suo nome e, sotto, il modello e l'indirizzo del suo servizio. Nell'immagine sono cinque:

| Nome | Modello | Indirizzo |
| --- | --- | --- |
| **X.ai** | *(vuoto: il modello predefinito del servizio)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(nessuno)* | `ws://localhost:2700`, un server su questo computer |

I due segni a destra di una riga dicono per che cosa il riconoscitore è il predefinito. L'orologio è acceso sul predefinito **per le trascrizioni** — **X.ai** nell'immagine —, usato quando non ne sceglie un altro. Il fulmine è acceso sul predefinito **per il suggeritore** — **Vosk** nell'immagine. Può tenere più riconoscitori; il menu a tendina sopra una trascrizione nella [finestra delle registrazioni](/interface/recordings#transcript-or-write-up-the-drop-down) elenca le trascrizioni fatte da ciascuno.

## La scheda del riconoscitore {#the-recognisers-card}
Premendo un riconoscitore si apre la sua scheda.

<Shot name="43_recogniser_card" alt="La scheda del riconoscitore X.ai: tipo, i due indirizzi, chiave, Prova e i predefiniti" />

| Campo | Che cos'è |
| --- | --- |
| **Nome** | Il nome negli elenchi. |
| **Tipo** | Il tipo di servizio, che decide come il telefono gli parla: **Compatibile OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics**, e tre che girano sulla sua macchina — **Vosk**, **WhisperLive** e **NVIDIA Riva**. **Yandex SpeechKit** è offerto quando il paese scelto in [Informazioni](../application/about.md) è la Russia o uno dei suoi vicini. |
| **Indirizzo per le trascrizioni** | Dove vengono inviate le conversazioni concluse. |
| **Indirizzo per il suggeritore** | Dove va l'audio dal vivo mentre una conversazione è in corso. *Vuoto si ricava dall'indirizzo accanto*, come `wss://api.x.ai` nell'immagine. |
| **Chiave** | La chiave del servizio. *È tenuto nel portachiavi di questo computer, mai in un file di impostazioni.* |
| **Prova** | Interroga il servizio e dice che cosa ha risposto, per esempio *Ha risposto, e offre 3 modelli*. |
| **Modello per le trascrizioni** e **Modello per il suggeritore** | Il modello, esattamente come lo chiama il servizio. *Vuoto non invia alcun nome di modello*, e il servizio usa il proprio predefinito; dove il fornitore ne pubblica uno, la scheda lo nomina. Il campo non è mostrato per un tipo che non offre scelta. |
| **Predefinito per le trascrizioni** | Ne fa il riconoscitore usato quando non ne sceglie un altro. |
| **Predefinito per il suggeritore** | Ne fa il riconoscitore con cui ascolta un nuovo assistente del suggeritore. |
| **Attivo** | Spento, il riconoscitore resta nell'elenco e non viene usato. |

**Impostazioni avanzate** apre il resto della scheda. I valori che contano di più:

<Shot name="43b_recogniser_advanced" alt="Le impostazioni avanzate di un riconoscitore: limiti, come vengono tagliate le risposte, la lingua" />

| Campo | Che cosa fa |
| --- | --- |
| **Regione** | La regione del servizio, per uno che ne ha diverse. |
| **Invia i due lati separatamente** | Una chiamata viene registrata con le due persone su due canali, ed è questo che dice al riconoscitore chi ha detto che cosa. Lo spenga per un server che dice di saperlo fare e non sa. |
| **Chiedi chi parla** | Distingue le persone all'interno di un canale, quando vi parlano in più d'una. |
| **Scrivi i numeri in cifre** | Importi, date e numeri di telefono tornano come si scrivono, invece che in lettere. |
| **Limite di caricamento**, **Limite di durata** | Il file più grande, in byte, e la registrazione più lunga, in secondi, che questo telefono invierà. |
| **Richieste in parallelo** | Quante richieste possono essere in corso contemporaneamente. |
| **Terminare una risposta dopo**, **Unire le risposte brevi entro**, **Pausa tra i turni** | Per il suggeritore: quanto tempo senza parole nuove chiude una risposta, quanto una risposta breve aspetta la successiva per esserle unita, e quanto silenzio chiude un turno dove il riconoscitore non ne segna. In millisecondi. |
| **Lingua** | Un codice di lingua di due lettere secondo la ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lo lasci vuoto e decide il riconoscitore — è la scelta giusta, a meno che le sue chiamate non siano in una lingua che fraintende di continuo. |
| **Extra** | Un `name = value` per riga, passato al servizio così com'è. Lo lasci vuoto a meno che il server non documenti qualcosa. |
| **Attesa, minuti** | Quanto aspettare una trascrizione. Vuoto lo calcola dalla durata della registrazione. |
| **Prezzo al minuto** | Quanto costa un minuto di audio dal vivo, dal listino del servizio. Il suggeritore mostra quanto è costata una sessione e si ferma al suo [tetto mensile](prompter.md#spending). |

## Riconoscimento dal vivo per il suggeritore {#live-recognition-for-the-prompter}
Il [suggeritore](../interface/prompter.md) ha bisogno di un riconoscitore che ascolti mentre qualcuno parla, attraverso un flusso invece che con un file concluso. Questi tipi possono farlo: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Compatibile OpenAI** (con la trascrizione in tempo reale di OpenAI), **AssemblyAI**, **Soniox** e **Speechmatics** nel cloud, **Yandex SpeechKit** dove è offerto, e **Vosk**, **WhisperLive** e **NVIDIA Riva** sulla sua macchina. Un riconoscitore sulla sua macchina tiene la voce dell'interlocutore entro le sue mura e non costa nulla.

Per usarne uno: apra la sua scheda, controlli l'**Indirizzo per il suggeritore** (o lo lasci ricavare), scelga il **Modello per il suggeritore** dove il servizio ne offre diversi — i modelli dal vivo sono spesso diversi da quelli per i file, come `scribe_v2_realtime` di ElevenLabs — e prema **Prova**. Spunti **Predefinito per il suggeritore** perché i nuovi assistenti ascoltino con quello.

## Quale modello scegliere {#which-model-to-choose}
La tabella elenca i modelli di riconoscimento vocale di ogni tipo dell'elenco **Tipo**. I modelli in **grassetto** sono quelli configurati nell'immagine; per il riconoscitore X.ai il modello è vuoto, quindi si usa il predefinito del servizio, **`grok-voice-transcribe-2.0`**. **Per** dice a che cosa serve un modello: alle registrazioni concluse (*trascrizioni*), al parlato dal vivo per il [suggeritore](#live-recognition-for-the-prompter) (*suggeritore*), o a *entrambi*.

| Tipo e indirizzo | Modello | Per | A che cosa serve |
| --- | --- | --- | --- |
| **Compatibile OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | trascrizioni | Il modello che OpenAI consiglia per il parlato registrato nella sua lingua originale. |
| | **`gpt-4o-transcribe`** | entrambi | Trascrizione di uso generale. Un nuovo riconoscitore di questo tipo lo riceve. |
| | `gpt-4o-mini-transcribe` | entrambi | Una variante più leggera ed economica del precedente. |
| | `gpt-4o-transcribe-diarize` | trascrizioni | Indica chi parla e quando. Lo usi solo se le serve. |
| | `whisper-1` | trascrizioni | Il vecchio modello Whisper, tenuto per usi particolari come le marche temporali per parola e i sottotitoli. |
| | `gpt-live-transcribe` | suggeritore | Il modello dal vivo di OpenAI: le parole arrivano mentre vengono pronunciate. Il telefono lo offre per il suggeritore. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | entrambi | Il miglior modello di uso generale di Deepgram, per riunioni, audio rumoroso e multilingue. Un nuovo riconoscitore di questo tipo lo riceve. |
| | **`nova-2`** | entrambi | La generazione precedente; la tenga per le lingue che `nova-3` non supporta ancora. |
| | `nova-2-phonecall` | entrambi | `nova-2` tarato sul suono stretto di una linea telefonica. Inglese. |
| | `flux-general-en` | suggeritore | Fatto per la conversazione: sente quando qualcuno ha finito di parlare. Inglese. |
| | `flux-general-multi` | suggeritore | Lo stesso in dieci lingue, e una conversazione può passare dall'una all'altra. |
| | `enhanced`, `base` | trascrizioni | Livelli più vecchi; `base` è per grandi volumi. |
| | `whisper` | trascrizioni | Whisper, eseguito da Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | trascrizioni | Trascrizione di uso generale in oltre 90 lingue, con separazione dei parlanti. |
| | `scribe_v2_realtime` | suggeritore | La versione dal vivo di `scribe_v2`. Il telefono la offre per il suggeritore. |
| | `scribe_v2_medical` | trascrizioni | `scribe_v2` tarato sull'audio clinico. |
| | `scribe_v1` | trascrizioni | La prima generazione; deprecata, usi `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | entrambi | Il più preciso, per una conversazione in una sola lingua. Un nuovo riconoscitore di questo tipo lo riceve. |
| | `standard` | entrambi | Più veloce ed economico, un po' meno preciso. |
| | `melia-1` | trascrizioni | Una conversazione in più lingue, che cambia a metà frase, torna come un'unica trascrizione. Solo registrazioni, nelle regioni UE e USA; ancora senza dizionario personalizzato né etichette dei parlanti. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | entrambi | Il predefinito; 25 lingue. |
| | `grok-voice-transcribe-1.0` | trascrizioni | Deprecato: il servizio lo reindirizza a `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | trascrizioni | Oltre 60 lingue, con separazione dei parlanti. |
| | `stt-rt-v5` | suggeritore | Dal vivo, nelle stesse oltre 60 lingue, e sente dove finisce un turno. Il telefono lo offre per il suggeritore. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | entrambi | Il modello più preciso per le registrazioni; 18 lingue, e una conversazione può passare dall'una all'altra. |
| | `universal-2` | trascrizioni | 99 lingue, più economico; AssemblyAI ripiega su di esso per una lingua che `universal-3-5-pro` non conosce. |
| | `universal-3-6-pro` | suggeritore | Il modello dal vivo più recente di AssemblyAI, 32 lingue; il servizio lo usa quando il modello è vuoto. |
| | `universal-streaming-multilingual` | suggeritore | Riconoscimento dal vivo più economico in inglese, spagnolo, tedesco, francese, portoghese e italiano. |
| | `universal-streaming-english` | suggeritore | Riconoscimento dal vivo più economico, solo in inglese. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | entrambi | Il modello principale, forte sul russo, anche al telefono. Offerto quando il paese è la Russia o uno dei suoi vicini. |
| | `general:rc` | entrambi | La prossima versione del modello prima del rilascio. |
| | `deferred-general` | trascrizioni | Riconoscimento differito: la trascrizione arriva più tardi, per meno soldi. |
| **Vosk (sulla tua macchina)**<br />`ws://localhost:2700` | *(impostato sul server)* | entrambi | Gratuito e leggero; gira senza scheda grafica. Il modello è quello con cui è stato avviato il server, uno per lingua, per esempio `vosk-model-it-0.22` o il piccolo `vosk-model-small-it-0.22`. |
| **WhisperLive (sulla tua macchina)**<br />`ws://localhost:9090` | `small` | entrambi | Whisper su un flusso dal vivo. La dimensione si sceglie nella scheda: `tiny`, `base`, `small` (quella che offre il telefono), `medium`, `large-v3`; più è grande, più è preciso, e più vuole una scheda grafica. |
| **NVIDIA Riva (sulla tua macchina)**<br />`localhost:50051` | *(impostato sul server)* | entrambi | Il server vocale di NVIDIA, per un computer con scheda grafica NVIDIA. Serve modelli come Parakeet e Canary. |

Che cosa conviene sapere prima di scegliere:

- **Trascrizioni o suggeritore.** Un modello fatto per il parlato dal vivo non accetta un file concluso, e la maggior parte dei modelli per file non sa ascoltare dal vivo. Per questo una scheda ha due campi, **Modello per le trascrizioni** e **Modello per il suggeritore**.
- **Dimensione del file.** OpenAI accetta file fino a 25 MB; X.ai fino a 500 MB. Una conversazione lunga può superare ciò che un servizio cloud accetta.
- **Prezzo.** I servizi cloud si fanno pagare al minuto di audio, e le tariffe variano per modello e cambiano; le legga sulla pagina del servizio prima di passare a un altro. Un riconoscitore sulla sua macchina non costa nulla.
- **Lingue.** Ogni servizio ha il suo elenco; controlli il suo e imposti il codice in **Lingua**, nelle impostazioni avanzate del riconoscitore, se indovina male.

L'elenco dei modelli di un servizio cambia spesso. Se qui manca un modello che desidera, la documentazione del servizio ha l'elenco aggiornato — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — e il **Modello** è il nome esattamente come lo dà il servizio.

## I suoi modelli {#your-own-models}

Un riconoscitore non deve per forza essere un servizio cloud. Il telefono può usare **qualsiasi modello servito tramite l'API compatibile con OpenAI** — l'interfaccia `POST /v1/audio/transcriptions` —, che giri in locale sul suo computer o su un suo server. L'audio non lascia mai la sua sede, non si paga nulla al minuto e non c'è limite di volume.

Per aggiungerne uno, prema **Aggiungi** e indichi:

- l'**indirizzo** del server, fino a `/v1` compreso, per esempio `http://localhost:8000/v1` per il computer stesso o `http://asr.local:8080/v1` per un server della sua rete;
- il nome del **modello** esattamente come lo elenca il server, per esempio `openai/whisper-large-v3-turbo`.

### Che cosa si può usare {#what-can-be-used}

La scelta abituale è **Whisper**, il modello aperto di riconoscimento vocale di OpenAI. È gratuito, capisce circa un centinaio di lingue ed esiste in diverse dimensioni: un modello piccolo gira su un computer normale, quelli grandi sono decisamente più precisi ed è meglio dar loro una scheda grafica.

| Modello | Note |
| --- | --- |
| `whisper-large-v3` | Il Whisper più preciso. Per un server con GPU. |
| `openai/whisper-large-v3-turbo` | Una versione più veloce di `large-v3`, con una piccola perdita di precisione. |
| `Systran/faster-whisper-large-v3` | `large-v3` convertito per il motore faster-whisper; più rapido e più leggero sulla memoria. |
| `medium`, `small`, `base` | Modelli Whisper più piccoli, per un computer senza scheda grafica. |

Whisper è il modello attorno a cui sono costruiti questi server. Alcuni possono servire anche altri modelli di riconoscimento vocale, come NVIDIA Parakeet.

### Server che offrono l'API compatibile con OpenAI {#servers-that-offer-the-openai-compatible-api}

Il modello deve essere eseguito da un server che offra l'endpoint `/v1/audio/transcriptions` compatibile con OpenAI. Questi lo fanno:

| Server | Che cos'è |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Un server di modelli ad alte prestazioni. Una volta avviato, serve Whisper su `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Un server per modelli vocali, «l'Ollama della voce», basato su faster-whisper. Carica un modello la prima volta che viene richiesto. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Esegue Whisper in modo efficiente su una CPU, Apple silicon compreso. Il suo `whisper-server` si avvia con `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Un sostituto diretto di OpenAI che esegue i modelli in locale. |

Qualsiasi altro server che offra lo stesso endpoint funziona allo stesso modo. Se un server richiede una chiave, la inserisca come per un servizio cloud.

Prima di affidarsi a un server, faccia una registrazione di prova e guardi la trascrizione nella [finestra delle registrazioni](/interface/recordings): una conversazione in una lingua che il modello conosce poco lo mostra subito.
