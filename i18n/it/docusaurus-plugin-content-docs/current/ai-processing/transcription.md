---
title: Trascrizione
sidebar_position: 1
description: "\"Scegliere il riconoscitore che trasforma l'audio in testo: il suo indirizzo, il suo modello e una tabella dei modelli offerti da ogni servizio.\""
---

**Impostazioni → Trascrizione** stabilisce come l'audio diventa testo: in quale lingua e con quale riconoscitore.

<Shot name="25_transcription" alt="Impostazioni → Trascrizione: la lingua e quattro riconoscitori" />

Una conversazione viene trascritta quando lo chiede nella [finestra delle registrazioni](/interface/recordings), o da sola se **Elabora le conversazioni automaticamente** è attivo in [Elaborazione](/ai-processing/processing). Un riconoscitore sulla sua macchina non costa nulla; uno nel cloud fa pagare al minuto di audio.

## Lingua {#language}

**Lingua** è un codice di lingua di due lettere secondo la ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lo lasci vuoto e decide il riconoscitore — è la scelta giusta, a meno che le sue chiamate non siano in una lingua che fraintende di continuo.

## Riconoscitori {#recognisers}

Un riconoscitore è un servizio di riconoscimento vocale a cui il telefono invia l'audio. Prema **Aggiungi** per aggiungerne uno; il pulsante **Prova** del modulo verifica che il servizio risponda davvero. Ognuno è elencato con il suo nome e, sotto, il modello e l'indirizzo del suo servizio. Nell'immagine ce ne sono quattro:

| Nome | Modello | Indirizzo |
| --- | --- | --- |
| **X.ai** | *(vuoto: il modello predefinito del servizio)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Quello indicato come **predefinito** a destra della sua riga (**X.ai** nell'immagine) è quello usato quando non ne sceglie un altro. Può tenerne diversi. Il menu a discesa sopra una trascrizione nella [finestra delle registrazioni](/interface/recordings#the-transcript-and-the-write-up) elenca le trascrizioni fatte da ciascun riconoscitore.

Il modello si può lasciare vuoto. Il servizio usa allora il proprio modello predefinito.

## Quale modello scegliere {#which-model-to-choose}

La tabella elenca i modelli di trascrizione dei quattro servizi dell'immagine. I modelli in **grassetto** sono quelli impostati nell'immagine. Per il riconoscitore X.ai il modello è vuoto, quindi viene usato il modello predefinito del servizio, **`grok-voice-transcribe-2.0`**.

| Servizio e indirizzo | Modello | A che cosa serve |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Il modello che OpenAI consiglia per il parlato registrato nella sua lingua originale. |
| | **`gpt-4o-transcribe`** | Trascrizione di uso generale. |
| | `gpt-4o-mini-transcribe` | Una variante più leggera ed economica del precedente. |
| | `gpt-4o-transcribe-diarize` | Indica chi parla e quando. Lo usi solo se le serve. |
| | `whisper-1` | Il vecchio modello Whisper, mantenuto per usi particolari come le marcature temporali delle parole e i sottotitoli. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Trascrizione di uso generale in oltre 90 lingue, con separazione degli interlocutori. |
| | `scribe_v2_medical` | Lo stesso, tarato per l'audio clinico. |
| | `scribe_v1` | La prima generazione; deprecato, usi `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Il miglior modello di uso generale di Deepgram, per riunioni, audio rumoroso e multilingue. |
| | **`nova-2`** | La generazione precedente; la tenga per le lingue che `nova-3` non supporta ancora. |
| | `enhanced` | Un livello più vecchio con un tasso di errore inferiore a `base`. |
| | `base` | Il livello più vecchio, per grandi volumi. |
| | `whisper` | Whisper, eseguito da Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Il predefinito; 25 lingue. |
| | `grok-voice-transcribe-1.0` | Deprecato: il servizio lo indirizza a `2.0`. |

Cose da sapere prima di scegliere:

- **Dimensione dei file.** OpenAI accetta file fino a 25 MB; X.ai fino a 500 MB. Una conversazione lunga può superare ciò che un servizio cloud accetta.
- **Prezzo.** I servizi cloud fanno pagare al minuto di audio, e le tariffe variano per modello e cambiano; le legga sulla pagina del servizio prima di cambiare.
- **Lingue.** Ogni servizio ha il suo elenco; controlli il suo e imposti il codice della [Lingua](#language) se il riconoscitore sbaglia.
- **I modelli in tempo reale** come `scribe_v2_realtime` o `flux` di Deepgram sono fatti per i flussi dal vivo e non sono nella tabella: il telefono trascrive registrazioni concluse.

L'elenco dei modelli di un servizio cambia spesso. Se qui manca un modello che vuole, la documentazione del servizio ha l'elenco aggiornato — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; il **Modello** è il nome esattamente come lo dà il servizio.

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
