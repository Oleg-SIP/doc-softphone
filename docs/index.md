---
slug: /
title: AI Softphone documentation
sidebar_position: 1
description: What AI Softphone is, what it runs on and where each part of the program is described.
---

[AI Softphone](https://ai-softphone.com/) is a softphone for an IP PBX that also turns every conversation into text and a written summary. A conversation can reach it in three ways, and all three end up in the same library with the same recording, transcript and write-up:

- **a call** placed or taken in the program, through any IP PBX or SIP provider;
- **a meeting** in Zoom, Teams, Meet or any other application, recorded from the computer itself;
- **a recording you already have** — from a mobile phone, a dictaphone or another system — added to the library.

Recordings, transcripts and history are kept in a file you own. No account or subscription is needed, and the program is free software under GPL v2.

## From a conversation to a write-up

1. A conversation arrives: a call, a meeting or a file.
2. It is recorded on two channels, so what you said and what the other side said stay apart.
3. It is transcribed, speaker by speaker, in step with the audio.
4. The language model you chose writes it up: summary, tasks, category, tags and red flags.

## System requirements

| System | Requirements |
| --- | --- |
| macOS | macOS 14.4 or newer; Apple silicon only (Intel Macs are not supported); Metal graphics; 160 MB of disk space |
| Windows | Windows 10 (build 17763) or newer, including Windows 11; 64-bit Intel/AMD processor; Direct3D 11 or OpenGL 2.1; 250 MB of disk space |
| Linux | Ubuntu 22.04 LTS or newer, Debian 12+, Fedora 36+, openSUSE Leap 15.5+; 64-bit Intel/AMD processor; OpenGL 2.1 / ES 2.0; 200 MB of disk space |

The screenshots in this documentation are taken on macOS and shown small: click one to see it full size. The program looks and works the same on the other systems.

## First steps

1. [Add an account](sip-accounts/setup.md) for your PBX or SIP provider.
2. [Choose the microphone and the speakers](sip-accounts/devices.md) and make a test call.
3. Decide [which calls are recorded](recordings/call-recording.md).
4. Add a [recogniser](ai-processing/transcription.md) and a [language model](ai-processing/processing.md) if you want transcripts and write-ups.

**Settings → Overview** keeps this list for you: a green dot marks a step that is done, a red one a step still to go. See [Settings overview](interface/settings-overview.md).

## Where to read next

| If you want to… | Read |
| --- | --- |
| Find your way around the windows | [Interface](interface/main-window.md) |
| Connect the phone to your PBX | [Setting up a SIP account](sip-accounts/setup.md) |
| Choose a microphone, speakers and ringtone | [Devices](sip-accounts/devices.md) |
| Set the codecs, call waiting and the call log | [Calls settings](sip-accounts/calls.md) |
| Put colleagues on one-touch buttons | [Buttons](sip-accounts/buttons.md) |
| Decide which calls are recorded, and for how long | [Recording calls](recordings/call-recording.md) |
| Listen to, search and read your conversations | [Recordings window](recordings/recordings-window.md) |
| Decide which AI writes up your conversations and what it may cost | [Processing](ai-processing/processing.md) |
| Record a meeting held in another application | [Setting up external recording](external-recording/setup.md) |
| Change the layout, the theme, the start-up and the hotkeys | [Appearance](program/appearance.md), [Startup](program/startup.md) and [Shortcuts](program/shortcuts.md) |
| Connect a CRM or another program | [Local REST API](integration/rest-api.md) and [Webhooks](integration/webhooks.md) |
| See what the phone and the PBX are saying to each other | [Diagnostics](troubleshooting/diagnostics.md) |
| Check the version, updates and what the usage report contains | [About](program/about.md) |

## Privacy

- Everything stays on your computer by default: recordings, transcripts and history.
- Account passwords, the webhook header value and the API token are kept in the computer's keyring, never in a settings file.
- The program looks for updates once a day; it asks a server for one small file, and nothing is downloaded or installed without your say.
- The program sends a short usage report, and you choose how much goes in it: **Basic** or **Extended**. It never contains numbers, accounts, passwords, contacts, conversations, transcripts or recordings. The full list is in [About](program/about.md#telemetry).
