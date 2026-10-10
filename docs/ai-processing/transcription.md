---
title: Transcription
sidebar_position: 1
description: "Choose the recogniser that turns audio into text: its address, its model, and a table of the models of every kind of service."
---

**Settings → Transcription** lists the recognisers: the services that turn audio into text, for finished conversations and, for the [Prompter](../interface/prompter.md), while a conversation is happening.

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

The [Prompter](../interface/prompter.md) needs a recogniser that listens while somebody is talking, over a stream rather than with a finished file. These kinds can: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-compatible** (with OpenAI's realtime transcription), **AssemblyAI**, **Soniox** and **Speechmatics** in the cloud, **Yandex SpeechKit** where it is offered, and **Vosk**, **WhisperLive** and **NVIDIA Riva** on your own machine. A recogniser on your own machine keeps the other party's voice in the building and charges nothing.

To use one: open its card, check the **Address for the prompter** (or let it be worked out), choose the **Model for the prompter** where the service offers several — the live models are often different from the ones for files, such as ElevenLabs' `scribe_v2_realtime` — and press **Test**. Tick **Default for the prompter** to make it the one new assistants listen with.

## Which model to choose

The table lists the speech-to-text models of every kind in the **Kind** list. The models in **bold** are the ones set up in the picture; for the X.ai recogniser the model is empty, so the service default, **`grok-voice-transcribe-2.0`**, is the one used. **For** says what a model is made for: finished recordings (*transcripts*), live speech for the [prompter](#live-recognition-for-the-prompter) (*prompter*), or *both*.

| Kind and address | Model | For | What it is for |
| --- | --- | --- | --- |
| **OpenAI-compatible (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transcripts | The model OpenAI recommends for recorded speech in its original language. |
| | **`gpt-4o-transcribe`** | both | General-purpose transcription. A new recogniser of this kind is given it. |
| | `gpt-4o-mini-transcribe` | both | A lighter, cheaper variant of the above. |
| | `gpt-4o-transcribe-diarize` | transcripts | Labels who speaks when. Use it only if you need that. |
| | `whisper-1` | transcripts | The older Whisper model, kept for special uses such as word timestamps and subtitles. |
| | `gpt-live-transcribe` | prompter | OpenAI's live model: the words come as they are spoken. The phone offers it for the prompter. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | both | Deepgram's best general-purpose model, for meetings, noisy and multilingual audio. A new recogniser of this kind is given it. |
| | **`nova-2`** | both | The previous generation; keep it for languages `nova-3` does not support yet. |
| | `nova-2-phonecall` | both | `nova-2` tuned for the narrow sound of a phone line. English. |
| | `flux-general-en` | prompter | Made for conversation: it hears when somebody has finished speaking. English. |
| | `flux-general-multi` | prompter | The same in ten languages, and a conversation may switch between them. |
| | `enhanced`, `base` | transcripts | Older tiers; `base` is for large volumes. |
| | `whisper` | transcripts | Whisper, run by Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transcripts | General-purpose transcription in 90+ languages, with speaker separation. |
| | `scribe_v2_realtime` | prompter | The live version of `scribe_v2`. The phone offers it for the prompter. |
| | `scribe_v2_medical` | transcripts | `scribe_v2` tuned for clinical audio. |
| | `scribe_v1` | transcripts | The first generation; deprecated, use `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | both | The most accurate, for a conversation in one language. A new recogniser of this kind is given it. |
| | `standard` | both | Faster and cheaper, a little less accurate. |
| | `melia-1` | transcripts | A conversation in several languages, switching mid-sentence, comes back as one transcript. Recordings only, in the EU and US regions; no custom dictionary or speaker labels yet. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | both | The default; 25 languages. |
| | `grok-voice-transcribe-1.0` | transcripts | Deprecated: the service sends it to `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transcripts | 60+ languages, with speaker separation. |
| | `stt-rt-v5` | prompter | Live, in the same 60+ languages, and hears where a turn ends. The phone offers it for the prompter. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | both | The most accurate model for recordings; 18 languages, and a conversation may switch between them. |
| | `universal-2` | transcripts | 99 languages, cheaper; AssemblyAI falls back to it for a language `universal-3-5-pro` does not know. |
| | `universal-3-6-pro` | prompter | AssemblyAI's newest live model, 32 languages; the service uses it when the model is empty. |
| | `universal-streaming-multilingual` | prompter | Cheaper live recognition in English, Spanish, German, French, Portuguese and Italian. |
| | `universal-streaming-english` | prompter | Cheaper live recognition in English only. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | both | The main model, strong on Russian speech, phone calls included. Offered where the country is Russia or one of its neighbours. |
| | `general:rc` | both | The next version of the model before its release. |
| | `deferred-general` | transcripts | Deferred recognition: the transcript comes later, for less money. |
| **Vosk (on your own machine)**<br />`ws://localhost:2700` | *(set on the server)* | both | Free and light; runs without a graphics card. The model is the one the server was started with, one per language, for example `vosk-model-en-us-0.22` or the small `vosk-model-small-en-us-0.15`. |
| **WhisperLive (on your own machine)**<br />`ws://localhost:9090` | `small` | both | Whisper over a live stream. The size is chosen on the card: `tiny`, `base`, `small` (what the phone offers), `medium`, `large-v3`; the larger, the more accurate, and the more it wants a graphics card. |
| **NVIDIA Riva (on your own machine)**<br />`localhost:50051` | *(set on the server)* | both | NVIDIA's speech server, for a computer with an NVIDIA graphics card. It serves models such as Parakeet and Canary. |

Things worth knowing before you choose:

- **Transcripts or prompter.** A model made for live speech does not take a finished file, and most models for files cannot listen live. That is why a card has two fields, **Model for transcripts** and **Model for the prompter**.
- **File size.** OpenAI takes files up to 25 MB; X.ai up to 500 MB. A long conversation can be larger than a cloud service accepts.
- **Price.** Cloud services charge by the minute of audio, and the rates differ by model and change; read them on the service's own page before you switch. A recogniser on your own machine costs nothing to run.
- **Languages.** Every service has its own list; check yours, and set the **Language** code under the recogniser's advanced settings if it guesses wrongly.

The list of a service's models changes often. If a model you want is missing here, the service's own documentation has the current list — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — the **Model** is the name exactly as the service gives it.

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
