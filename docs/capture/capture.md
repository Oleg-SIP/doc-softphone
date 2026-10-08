---
title: Capture
sidebar_label: Capturing other applications
sidebar_position: 1
description: "Capture records a conversation held in another application — Zoom, Teams, Meet or any other — straight from the computer."
---

**Capture** is how AI Softphone records a conversation that takes place in another program, such as a meeting in Zoom, Teams or Meet. It records from the computer itself, keeping the far side and you on separate channels, and the same transcript and write-up wait at the end of it, as for a call.

The program looks for a conversation, not for the name of an application, so it works with anything that makes one.

The [Overview](../interface/settings-overview.md) of the settings lists this under **Capturing other applications** and breaks it into three steps:

1. **Turn capturing on** — [allow sound capture](#turning-capture-on).
2. **Capture a conversation** — [start and stop](#capturing-a-conversation) a recording.
3. **Give one a name** — [rename](#giving-it-a-name) the recording.

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

The part of the program that does this is the **Capture** module, *recording a conversation happening in another application*. It can be switched off in [Modules](../application/modules.md).

## Starting a capture

Once capture is allowed, the bottom of the [main window](../interface/main-window.md#capture) shows its state — **Capture · ready** — with a **Record** button at the right. Press **Record** to start by hand.

### Automatic start

**Automatic start** decides what happens when the program hears a conversation in another application:

| Choice | What happens |
| --- | --- |
| **Never** | A capture starts only when you press **Record**. |
| **Ask me** | The program asks whether to record it. The default. |
| **Always** | The program starts recording on its own. |

Under **Applications that answer differently** an application can be given an answer of its own — for example *Always record this application* from the question the program asks.

*Asking loses nothing: the seconds before you answer are already kept.*

### Before the start

The slider **Before the start** is how many seconds of sound are kept from before a recording starts, **15 seconds** by default. It is there so that nothing is lost while the conversation is being noticed: a recording that starts when you press **Record**, or when you answer the question, still begins with the words that came before.

## Capturing a conversation

While it records, the main window shows a red dot, the name of the recording (for example **Meeting in Zoom**), the time that has passed and the two channels as waveforms.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Recording a meeting" />

- **Stop recording** ends it.
- The window stays visible while it records, and reminds you to tell the participants that the meeting is being recorded.

### What the picture shows

Two more settings choose how the level of the sound is drawn:

| Setting | Default | Where |
| --- | --- | --- |
| **Picture in the main window** | Wave | The two channels while a capture is going on. |
| **Picture in the line at the foot of the phone** | Two levels | The two thin bars under **Capture · ready**. |

### Testing it

Under **Test** the tab has two bars: **You** and **The other side**. *The upper bar moves when you speak, the lower when something plays.* Before an important meeting, say a word and play any sound to see that the program hears both sides.

## Giving it a name

The pencil next to the name of the recording lets you rename it while it is going on. A recording you did not name is listed as **Other application**.

## Where the recording goes

A captured conversation appears in the [Recordings window](../interface/recordings.md) like any other, with its own icon, a window instead of a handset, and with the title you gave it or **Other application**.

<Shot name="01_recordings" alt="Captured meetings in the Recordings tab, marked with a window icon" />

It is transcribed, summed up, filed under a category and tagged by the same [rules](../ai-processing/processing.md#rules) as a call. In the transcript of a captured meeting the speaker is shown as **Other application** where a call would show the other party's name; the **Search** of the library finds what was said in it too.
