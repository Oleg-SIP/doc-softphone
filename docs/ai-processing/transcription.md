---
title: Transcription
sidebar_position: 1
description: "Choose the recogniser that turns audio into text: its address, its model, and a table of the models each service offers."
---

**Settings → Transcription** sets how audio becomes text: in which language, and by which recogniser.

<Shot name="25_transcription" alt="Settings → Transcription: the language and four recognisers" />

A conversation is transcribed when you ask for it in the [Recordings window](/interface/recordings), or by itself if **Process conversations automatically** is on in [Processing](/ai-processing/processing). A recogniser on your own machine costs nothing to run; one in the cloud charges by the minute of audio.

## Language

**Language** is a two-letter language code as in ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Leave it empty and the recogniser decides — that is right unless your calls are in a language it keeps mishearing.

## Recognisers

A recogniser is a speech-to-text service the phone sends audio to. Press **Add** to add one; the **Test** button of the form checks that the service really answers. Each is listed with its name and, under it, the model and the address of its service. In the picture there are four:

| Name | Model | Address |
| --- | --- | --- |
| **X.ai** | *(empty: the service default)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

The one marked **default** at the right of its row (**X.ai** in the picture) is the one used when you do not choose another. You can keep several. The drop-down above a transcript in the [Recordings window](/interface/recordings#transcript-or-write-up-the-drop-down) lists the transcripts made by each recogniser.

The model may be left empty. The service then uses its own default.

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
- **Languages.** Every service has its own list; check yours, and set the [Language](#language) code if the recogniser guesses wrongly.
- **Real-time models** such as `scribe_v2_realtime` or Deepgram's `flux` are made for live streams and are not in the table: the phone transcribes finished recordings.

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
