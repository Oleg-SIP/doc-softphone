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
4. The language model you chose writes it up: summary, tasks, category, tags and red flags — and you can ask the conversation a question.

## Download and system requirements

The program is free to download from [ai-softphone.com](https://ai-softphone.com/#download): an installer (`.exe`) for Windows, a disk image (`.dmg`) for macOS, and an AppImage or a `.deb` for Linux. The installer, the disk image and the AppImage need nothing installed first — Qt, OpenSSL and the C++ runtime travel inside them. The `.deb` is the exception: it uses the system's own C++ runtime, see below. You will need a SIP account, from your provider or from the PBX you run yourself. Recording works the moment the program is installed; the transcript and the write-up need a service you choose or a model on your own machine.

| System | Requirements |
| --- | --- |
| macOS | macOS 14.4 or newer; Apple silicon only — an Intel Mac cannot open it, not even through Rosetta; Metal graphics; 160 MB of disk space, plus the recordings. The system asks once for the microphone. |
| Windows | Windows 10 version 1809 (build 17763) or newer, and Windows 11; 64-bit Intel or AMD processor; Direct3D 11 or OpenGL 2.1; 250 MB of disk space, plus the recordings. |
| Linux | Ubuntu 22.04 LTS or newer, Debian 12 or newer, and anything of that age — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C library 2.35 or newer; 64-bit Intel or AMD processor; OpenGL 2.1 or OpenGL ES 2.0, on X11 or Wayland; PipeWire or PulseAudio (ALSA where there is neither); 200 MB of disk space, plus the recordings. The tray icon needs a desktop with a status-notifier area. |

On Linux the AppImage runs on any distribution of that age: make it executable and start it. The `.deb` also needs the system's own C++ runtime from GCC 13, which Ubuntu 24.04 and Debian 13 have and Ubuntu 22.04 has not; on anything older, take the AppImage.

The interface is available in thirty languages, chosen in [Appearance](/program/appearance) and changed without a restart.

The screenshots in this documentation are taken on macOS and shown small: click one to see it full size. The program looks and works the same on the other systems.

## First steps

1. [Add an account](sip-accounts/setup.md) for your PBX or SIP provider.
2. [Choose the microphone and the speakers](sip-accounts/devices.md) and make a test call.
3. Decide [which calls are recorded](recordings.md).
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
| Decide which calls are recorded, and for how long | [Recordings](recordings.md) |
| Listen to, search and read your conversations | [Recordings window](interface/recordings.md) |
| Record a meeting held in another application | [Capture](capture/capture.md) |
| Choose the recogniser that turns speech into text | [Transcription](ai-processing/transcription.md) |
| Decide which AI writes up your conversations and what it may cost | [Processing](ai-processing/processing.md) |
| Change the categories, tags and red flags | [Dictionaries](ai-processing/dictionaries.md) |
| Change the layout, the theme, the start-up and the hotkeys | [Appearance](program/appearance.md), [Startup](program/startup.md) and [Shortcuts](program/shortcuts.md) |
| Connect a CRM or another program | [Webhooks](integration/webhooks.md) and [Local REST API](integration/rest-api.md) |
| See what the phone and the PBX are saying to each other | [Diagnostics](troubleshooting/diagnostics.md) |
| Find the cause of a problem | [Common problems](troubleshooting/common-problems.md) |
| Switch parts of the program off | [Modules](application/modules.md) |
| Check the version, updates and what the usage report contains | [About](application/about.md) |

The pages follow the order of the tabs in **Settings**.

## Privacy

- Everything stays on your computer by default: recordings, transcripts and history live in a file you own. Nothing about a conversation — not a number, not a name, not a word of what was said — goes anywhere you did not send it yourself.
- Account passwords, the webhook header value and the API token are kept in the operating system's keyring, never in a settings file.
- A new version announces itself when it appears — never during a call — and installs only when you say so.
- The program sends one small usage report a day. You are shown what is in it before the first one goes, and you choose how much it carries: **Basic** or **Extended**. It never contains numbers, contacts, the address of your PBX or anything said in a conversation. The full list is in [About](/application/about#telemetry).
- The program is free software under GPL v2.
