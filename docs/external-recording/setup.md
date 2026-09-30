---
title: Setting up external recording
sidebar_position: 1
description: Record meetings held in Zoom, Teams, Meet or any other application straight from the computer.
---

AI Softphone can record a conversation that takes place in another program, such as a meeting in Zoom, Teams or Meet. It records from the computer itself, keeping the far side and you on separate channels, and the same transcript and write-up wait at the end of it.

The program looks for a conversation, not for the name of an application, so it works with anything that makes one.

## Turning capture on

Capture is off until you allow it. Open **Settings → Capture**.

<Shot name="10_settings_capture" alt="Settings → Capture" />

| Setting | Default | What it does |
| --- | --- | --- |
| **Allow sound capture** | off | Lets the program record the sound of other applications. Nothing is captured while it is off. |
| **Remind me to inform the others about recording** | on | Shows a reminder while a capture is going on. The check box is grey until capture is allowed. |

:::caution
Everything the computer plays is recorded, not only the conversation. This phone cannot announce a recording into somebody else's meeting, so saying so is yours to do.
:::

The whole part of the program that does this can be switched off in [Modules](../program/modules.md) (**Capture**).

## Starting and stopping

Once capture is allowed, the main window shows its state at the bottom, for example **Capture · ready**, with a **Record** button at the right.

- Recording can start **automatically** when a conversation is detected, or by hand with **Record**.
- While it records, the main window shows a red dot, the name of the recording (for example **Meeting in Zoom**), the time that has passed and the two channels as waveforms.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Recording a meeting" />

- The pencil next to the name lets you rename the recording.
- **Stop recording** ends it. The recording appears in the [Recordings window](../recordings/recordings-window.md) like any other conversation, with the title **Other application** if you did not give it a name.

The window stays visible while it records, and reminds you to tell the participants that the meeting is being recorded.
