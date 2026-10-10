---
title: Transcription
sidebar_position: 1
description: "Choose the recogniser that turns audio into text: its address, its model, and a table of the models each service offers."
---

**Settings → Transcription** lists the recognisers: the services that turn audio into text, for finished conversations and, for the [Prompter](prompter.md), while a conversation is happening.

<Shot name="25_transcription" alt="Settings → Transcription: five recognisers" />

A conversation is transcribed when you ask for it in the [Recordings window](/interface/recordings), or by itself if **Process conversations automatically** is on in [Processing](/ai-processing/processing). A recogniser on your own machine costs nothing to run; one in the cloud charges by the minute of audio.

## Recognisers

A recogniser is a speech-to-text service the phone sends audio to. Press **Add** to add one; the **Test** button of its card checks that the service really answers. Each is listed with its name and, under it, the model and the address of its service. In the picture there are five:

| Name | Model | Address |
| --- | --- | --- |
| **X.ai** | *(empty: the service default)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(none)* | `ws://localhost:2700`, a server on this computer |

The two marks at the right of a row say what the recogniser is the default for. The clock is lit on the default **for transcripts** — **X.ai** in the picture — which is used when you do not choose another. The lightning is lit on the default **for the prompter** — **Vosk** in the picture. You can keep several recognisers; the drop-down above a transcript in the [Recordings window](/interface/recordings#transcript-or-write-up-the-drop-down) lists the transcripts made by each one.

## The recogniser's card

Pressing a recogniser opens its card.

<Shot name="43_recogniser_card" alt="The card of the X.ai recogniser: kind, the two addresses, key, Test and the defaults" />

| Field | What it is |
| --- | --- |
| **Name** | The name in the lists. |
| **Kind** | The kind of service, which decides how the phone talks to it: **OpenAI-compatible (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics**, and three that run on your own machine — **Vosk**, **WhisperLive** and **NVIDIA Riva**. **Yandex SpeechKit** is offered where the country in [About](../application/about.md) is Russia or one of its neighbours. |
| **Address for transcripts** | Where finished conversations are sent. |
| **Address for the prompter** | Where live audio is sent while a conversation is happening. *Empty is worked out from the address beside it*, as `wss://api.x.ai` in the picture. |
| **Key** | The service's key. *It is kept in this computer's keyring, never in a settings file.* |
| **Test** | Asks the service and says what it answered, for example *Answered, and offers 3 model(s)*. |
| **Model for transcripts** and **Model for the prompter** | The model, exactly as the service names it. *Empty sends no model name*, and the service uses its own default; where the vendor publishes one, the card names it. A field is not shown for a kind that has no choice. |
| **Default for transcripts** | Makes this the recogniser used when you do not choose another. |
| **Default for the prompter** | Makes this the recogniser a new assistant of the prompter listens with. |
| **Enabled** | Off, the recogniser stays in the list and is not used. |

**Advanced settings** opens the rest of the card. The values that matter most:

<Shot name="43b_recogniser_advanced" alt="The advanced settings of a recogniser: limits, how replies are cut, the language" />

| Field | What it does |
| --- | --- |
| **Region** | The region of the service, for one that has several. |
| **Send the two sides separately** | A call is recorded with the two people on two channels, which is what tells the recogniser who said what. Turn it off for a server that says it can do this and cannot. |
| **Ask who is speaking** | Names the people inside one channel, where several speak on it. |
| **Write numbers as figures** | Sums, dates and phone numbers come back as they are written rather than spelt out. |
| **Upload limit**, **Length limit** | The largest file, in bytes, and the longest recording, in seconds, this phone will send. |
| **Requests at once** | How many requests may be in flight at the same time. |
| **End a reply after**, **Join short replies within**, **Turn gap** | For the prompter: how long without new words ends a reply, how long a short reply waits for the next one to be joined to it, and how long a silence ends a turn where the recogniser marks none. In milliseconds. |
| **Language** | A two-letter language code as in ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Leave it empty and the recogniser decides — that is right unless your calls are in a language it keeps mishearing. |
| **Extras** | One `name = value` a line, passed to the service as it is. Leave it empty unless the server documents something. |
| **Wait, minutes** | How long to wait for a transcript. Empty works it out from the length of the recording. |
| **Price a minute** | What a minute of live audio costs, from the service's price list. The prompter shows what a session has cost and stops at its [monthly ceiling](prompter.md#spending). |

## Live recognition for the prompter

The [Prompter](prompter.md) needs a recogniser that listens while somebody is talking, over a stream rather than with a finished file. These kinds can: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-compatible** (with OpenAI's realtime transcription), **AssemblyAI**, **Soniox** and **Speechmatics** in the cloud, and **Vosk**, **WhisperLive** and **NVIDIA Riva** on your own machine. A recogniser on your own machine keeps the other party's voice in the building and charges nothing.

To use one: open its card, check the **Address for the prompter** (or let it be worked out), choose the **Model for the prompter** where the service offers several — the live models are often different from the ones for files, such as ElevenLabs' `scribe_v2_realtime` — and press **Test**. Tick **Default for the prompter** to make it the one new assistants listen with.

## Which model to choose

The table lists the speech-to-text models of the four services in the picture. The models in **bold** are the ones set up in the picture. For the X.ai recogniser the model is empty, so the service default, **`grok-voice-transcribe-2.0`**, is the one used.

| Service and address | Model | What it is for |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | The model OpenAI recommends for recorded speech in its original language. |
| | **`gpt-4o-transcribe`** | General-purpose transcription. |
| | `gpt-4o-mini-transcribe` | A lighter, cheaper variant of the above. |
| | `gpt-4o-transcribe-diarize` | Labels who speaks when. Use it only if you need that. |
| | `whisper-1` | The older Whisper model, kept for special uses such as word timestamps and subtitles. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | General-purpose transcription in 90+ languages, with speaker separation. |
| | `scribe_v2_medical` | The same, tuned for clinical audio. |
| | `scribe_v1` | The first generation; deprecated, use `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Deepgram's best general-purpose model, for meetings, noisy and multilingual audio. |
| | **`nova-2`** | The previous generation; keep it for languages `nova-3` does not support yet. |
| | `enhanced` | An older tier with lower error rates than `base`. |
| | `base` | The oldest tier, for large volumes. |
| | `whisper` | Whisper, run by Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | The default; 25 languages. |
| | `grok-voice-transcribe-1.0` | Deprecated: the service sends it to `2.0`. |

Things worth knowing before you choose:

- **File size.** OpenAI takes files up to 25 MB; X.ai up to 500 MB. A long conversation can be larger than a cloud service accepts.
- **Price.** Cloud services charge by the minute of audio, and the rates differ by model and change; read them on the service's own page before you switch.
- **Languages.** Every service has its own list; check yours, and set the **Language** code under the recogniser's advanced settings if it guesses wrongly.
- **Real-time models** such as `scribe_v2_realtime` or Deepgram's `flux` are made for live streams. They are not in the table, which is about finished recordings; they are what the [prompter](#live-recognition-for-the-prompter) uses.

The list of a service's models changes often. If a model you want is missing here, the service's own documentation has the current list — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — the **Model** is the name exactly as the service gives it.

## Your own models

A recogniser does not have to be a cloud service. The phone can use **any model that is served through the OpenAI-compatible API** — the `POST /v1/audio/transcriptions` interface — whether it runs locally on your computer or on a server of your own. The audio never leaves your premises, nothing is charged by the minute, and there is no limit on volume.

To add one, press **Add** and give:

- the **address** of the server, up to and including `/v1`, for example `http://localhost:8000/v1` for the computer itself or `http://asr.local:8080/v1` for a server in your network;
- the **model** name exactly as the server lists it, for example `openai/whisper-large-v3-turbo`.

### What can be used

The usual choice is **Whisper**, OpenAI's open speech recognition model. It is free to use, understands about a hundred languages, and comes in several sizes: a small model runs on an ordinary computer, the large ones are noticeably more accurate and are best given a graphics card.

| Model | Notes |
| --- | --- |
| `whisper-large-v3` | The most accurate Whisper. For a server with a GPU. |
| `openai/whisper-large-v3-turbo` | A faster version of `large-v3` with a small loss of accuracy. |
| `Systran/faster-whisper-large-v3` | `large-v3` converted for the faster-whisper engine; quicker, and lighter on memory. |
| `medium`, `small`, `base` | Smaller Whisper models, for a computer without a graphics card. |

Whisper is the model that these servers are built around. Some of them can also serve other speech recognition models, such as NVIDIA Parakeet.

### Servers that offer the OpenAI-compatible API

The model has to be run by a server that offers the OpenAI-compatible `/v1/audio/transcriptions` endpoint. These do:

| Server | What it is |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | A high-performance model server. Serves Whisper at `http://localhost:8000/v1` once started. |
| [Speaches](https://github.com/speaches-ai/speaches) | A server for speech models, "Ollama for speech", built on faster-whisper. Loads a model when it is first asked for. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Runs Whisper efficiently on a CPU, including Apple silicon. Its `whisper-server` is started with `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | A drop-in OpenAI replacement that runs models locally. |

Any other server that offers the same endpoint works in the same way. If a server needs a key, enter it as for a cloud service.

Before you rely on a server, make a test recording and look at the transcript in the [Recordings window](/interface/recordings): a conversation in a language the model knows poorly shows it at once.
