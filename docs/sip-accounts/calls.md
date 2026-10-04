---
title: Calls settings
sidebar_position: 3
description: The codecs offered to the PBX, what happens when a second call arrives, autodial and how long the call log is kept.
---

**Settings → Calls** holds the settings that belong to every call, whichever account it is on.

## Audio formats

<Shot name="07_settings_calls" alt="Settings → Calls: the audio formats" />

The list of codecs the phone offers to the other end. The codecs are *offered in this order*, and the other end picks from what you offer: the higher a codec stands, the more likely it is used.

- The **checkbox** switches a codec on or off. A codec that is off is not offered.
- **▲** and **▼** move it up or down the list.
- *wideband* at the right marks a codec with a wider range of sound than a phone line has: the voice is clearer.

| Codec | Sampling rate | On by default |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, wideband | yes |
| **G722** | 16 kHz, wideband | yes |
| **PCMU** | 8 kHz | yes |
| **PCMA** | 8 kHz | yes |
| **speex** | 16 kHz, wideband | no |
| **speex** | 8 kHz | no |
| **speex** | 32 kHz, wideband | no |
| **iLBC** | 8 kHz | no |
| **GSM** | 8 kHz | no |
| **L16** | 44 kHz, stereo, wideband | no |
| **L16** | 44 kHz, wideband | no |

The table is in the order the program comes with.

The codecs are agreed when a call starts, so a change applies from your next call. If a call sounds poor, leave on only the codecs your PBX uses.

## Call waiting

<Shot name="07b_settings_calls_scrolled" alt="Settings → Calls: call waiting, autodial and history" />

*What happens when somebody rings while you are already on a call.* The drop-down chooses it; the default is **Ring the second call**. An intercom page from your own switch always comes through, whatever you choose — that is how a call placed from a CTI panel reaches this phone.

## Autodial

When a call cannot get through, its card offers to keep dialling until it does. Two sliders set how:

- **Wait between attempts** — 15 seconds by default;
- **Give up after** — 30 minutes by default.

## History

A call log is evidence, so nothing is removed from it unless you say so here.

- **Storage period** chooses how long [the call log](/interface/contacts-history#history) keeps a call. The default is **Always**.
- **Clear the call history** deletes every call at once, whatever the period says. It cannot be undone.
