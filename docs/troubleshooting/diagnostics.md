---
title: Diagnostics
sidebar_position: 1
description: The window that shows every word the phone and the PBX say to each other, the log file and where the program keeps its files.
---

The **Diagnostics** window shows what the phone and the switch say to each other, as they say it. It is the first place to look when an account will not register or a call will not connect, and the window an IT department will ask you to send.

It opens from **Settings → Diagnostics**, with the button **Open the diagnostics**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="The Diagnostics window" />

It shows every SIP message the phone sends or receives, while it is happening, together with the audio statistics of the calls that are up. It collects only while it is open and keeps nothing after it closes.

## SIP

The **SIP** tab is the log of the signalling.

- Each message is a line with the time (to the millisecond), what it is, and where it went: an arrow pointing right is sent by the phone, an arrow pointing left is received from the server. Under it: `to` or `from` the server's address and the transport (for example *over UDP*).
- A message can be expanded to show its headers in full (the third message in the picture).
- **Search** finds text in the log.
- **Clear** empties it.

The example in the screenshot is a healthy registration: the phone sends `REGISTER`, the server answers `200 OK (REGISTER)`.

## Calls

The second tab, **Calls**, shows quality metrics for each call that is up.

## The Diagnostics tab of the settings

<Shot name="18_settings_diagnostics" alt="Settings → Diagnostics" />

### Log detail

The drop-down chooses how much the program writes to its log file; in the picture it is **Detailed**. It takes effect straight away, including on a call that is already up — which is the one you want the record of. The most detailed setting writes down every SIP message. It is large, but passwords are removed from it before anything is written, so the file is safe to send with a support request.

**Send a copy to the system log** also writes the log to the system's own log, for a machine whose logs are collected centrally. The file below is written either way, and it is the one to attach to a support request.

### Files

The tab lists where the program keeps its files and how big each is. On macOS:

| File | Where | Holds |
| --- | --- | --- |
| Settings | `~/Library/Preferences/ai-softphone/settings.json` | The settings. Never passwords or tokens. |
| Database | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Contacts, history, transcripts and write-ups. |
| Recordings | `~/Library/Application Support/ai-softphone/recordings` | The audio of the recordings. |
| Log | `~/Library/Logs/ai-softphone/ai-softphone.log` | The log. |

Under the list, **Open** shows the log and **Clear** empties it. Clear the log just before you reproduce a problem; clearing cannot be undone.

## What to send to support

1. Set **Log detail** to the most detailed level.
2. Press **Clear**, then reproduce the problem.
3. Send the log file, or open **Settings → About**, write to us there and tick **Attach the log** — see [About](../program/about.md#feedback).

For a problem with registration or a call, also send the lines of the failed attempt from the **SIP** tab.

The part of the program behind all this — the SIP trace, the media statistics and the counters — can be switched off in [Modules](../program/modules.md) (**Diagnostics**).
