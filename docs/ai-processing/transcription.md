---
title: Transcription
sidebar_position: 2
description: Choose the recogniser that turns audio into text, on your own machine or in the cloud.
---

**Settings → Transcription** sets how audio becomes text.

<Shot name="11_settings_transcription" alt="Settings → Transcription" />

A conversation is transcribed when you ask for it in the [Recordings window](../recordings/recordings-window.md), or by itself if you have turned automatic processing on under [Processing](processing.md). A recogniser on your own machine costs nothing to run; one in the cloud charges by the minute of audio.

## Language

**Language** is a two-letter language code as in ISO 639-1 (`en`, `de`, `ru`…). Leave it empty and the recogniser decides — that is right unless your calls are in a language it keeps mishearing.

## Recognisers

Press **Add** to add a recogniser. Each is listed with its name and, under it, the model and the address of its service, for example:

- **Local ASR** — `whisper-large-v3 · http://asr.local:8080/v1`, a server in your own network;
- **Xiaomi** — `mimo-v2.5-asr · https://api.xiaomimimo.com/v1`, a service in the cloud.

The recogniser marked **default** at the right of its row is the one used when you do not choose another. With a recogniser on your own machine the audio never leaves the building.

The first step of the [rules](processing.md#rules) is **Transcribe every conversation**; it is what uses the recogniser when processing is automatic.
