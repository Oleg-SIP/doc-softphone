---
title: Transcription
sidebar_position: 2
description: Choose the recogniser that turns audio into text, on your own machine or in the cloud.
---

**Settings → Transcription** sets how audio becomes text.

![Settings → Transcription](https://ai-softphone.com/screenshots/macos/en/light/transcription.png)

A conversation is transcribed when you ask for it in the [Recordings window](../recordings/recordings-window.md), or by itself if you have turned automatic processing on under [Processing](processing.md). A recogniser on your own machine costs nothing to run; one in the cloud charges by the minute of audio.

## Language

**Language** is a two-letter language code as in ISO 639-1 (`en`, `de`, `ru`…). Leave it empty and the recogniser decides — that is right unless your calls are in a language it keeps mishearing.

## Recognisers

Press **Add** to add a recogniser. Each is listed with its name, the model and the address of its service, for example:

- **Deepgram** — `nova-3 · https://api.deepgram.com/v1` (in the cloud);
- **Whisper on our own server** — `Systran/faster-whisper-large-v3 · http://127.0.0.1:8000/v1` (on this machine).

The recogniser marked **default** is the one used when you do not choose another. With a recogniser on your own machine the audio never leaves the building.
