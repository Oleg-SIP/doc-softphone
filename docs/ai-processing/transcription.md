---
title: Transcription
sidebar_position: 1
description: "Choose the recogniser that turns audio into text: its address, its model, and a table of the models each service offers."
---

**Settings → Transcription** sets how audio becomes text: in which language, and by which recogniser.

<Shot name="25_transcription" alt="Settings → Transcription: the language and four recognisers" />

A conversation is transcribed when you ask for it in the [Recordings window](/recordings/recordings-window), or by itself if **Process conversations automatically** is on in [Processing](/ai-processing/processing). A recogniser on your own machine costs nothing to run; one in the cloud charges by the minute of audio.

## Language

**Language** is a two-letter language code as in ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Leave it empty and the recogniser decides — that is right unless your calls are in a language it keeps mishearing.

## Recognisers

A recogniser is a speech-to-text service the phone sends audio to. Press **Add** to add one. Each is listed with its name and, under it, the model and the address of its service. In the picture there are four:

| Name | Model | Address |
| --- | --- | --- |
| **X.ai** | *(empty: the service default)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

The one marked **default** at the right of its row (**X.ai** in the picture) is the one used when you do not choose another. You can keep several. The drop-down above a transcript in the [Recordings window](/recordings/recordings-window#the-transcript-and-the-write-up) lists the transcripts made by each recogniser.

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

## On your own machine

A recogniser on your own machine keeps the audio inside the building and costs nothing to run. A Whisper server in your network that offers an OpenAI-compatible `/v1` interface will do; give its address, such as `http://asr.local:8080/v1`, and its model, such as `whisper-large-v3`.

## Rules

The first step of the [rules](/ai-processing/processing#rules) is **Transcribe every conversation**; it is what uses the recogniser when processing is automatic.
