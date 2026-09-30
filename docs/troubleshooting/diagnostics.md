---
title: Diagnostics
sidebar_position: 1
description: The window that shows every word the phone and the PBX say to each other — the one your IT department asks for.
---

The **Diagnostics** window shows what the phone and the switch say to each other, as they say it. It is the first place to look when an account will not register or a call will not connect, and the window an IT department will ask you to send. The **Diagnostics** tab of the settings also sets the diagnostics level.

![The Diagnostics window](https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png)

## SIP

The **SIP** tab is the log of the signalling.

- Each message is a line with the time (to the millisecond), what it is, and where it went: an arrow pointing right is sent by the phone, an arrow pointing left is received from the server. Under it: `to` or `from` the server's address and the transport (for example *over UDP*).
- A message can be expanded to show its headers in full (the third message in the picture).
- **Search** finds text in the log.
- **Clear** empties it.

The example in the screenshot is a healthy registration: the phone sends `REGISTER`, the server answers `200 OK (REGISTER)`.

## Calls

The second tab, **Calls**, shows quality metrics for each call.

## What to send to support

Reproduce the problem, open **SIP**, and send the lines from the failed attempt.
