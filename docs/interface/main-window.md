---
title: Main window
sidebar_position: 1
description: The phone on the left, the library and the settings on the right — the layout of AI Softphone's main window.
---

The main window is the phone itself. With the default layout, **One window**, the phone stands on the left and everything else opens on the right. The [layout can be changed](../program/appearance.md).

<Shot name="03_contacts" full alt="The main window: the phone on the left and the Contacts tab on the right" />

## The phone

From top to bottom, the left side holds:

- the **Number** field;
- the keypad and the call key;
- the account chips;
- the buttons that watch other extensions;
- the four places to go: **Recordings**, **Contacts**, **History** and **Settings**.

### The dialler

- **Number** — type or paste the number to call. The clock icon at the right end of the field opens the list of numbers you called or were called from lately.
- The round keys **1–9**, **\***, **0** and **#** fill in the number, and during a call they send tones (DTMF).
- The handset key places the call. It stays grey until there is a number.

<Shot name="22_last_calls" full alt="The list of recent calls under the Number field, next to the History tab" />

When the list of recent numbers is open, the field shows a chevron and the call key moves to its right. Each entry is a name, or a number if the caller is not in [Contacts](contacts-history.md), with the date. A red handset marks a call you missed, a repeat count in brackets — for example *Helpdesk (4)* — stands for several calls to the same party in a row.

### The account chips

Under the keypad there is one chip for every [account](../sip-accounts/setup.md). A green dot means the account is registered on the PBX. The highlighted chip (in the picture, **305 Support**) is the account the next call is placed from; press another chip to change it. The round red button at the right of the chips is do not disturb.

### The buttons

Below the chips there are the [buttons](../sip-accounts/buttons.md) you made for colleagues and lines, each with a lamp — **E Clarke** and **Reception** in the pictures. Press one to dial its number.

### Recordings, Contacts, History, Settings

These four entries at the bottom open a tab on the right, next to each other: [Recordings](../recordings/recordings-window.md), [Contacts and History](contacts-history.md) and [Settings](settings-overview.md). Tabs you have opened stay in the row at the top of the right-hand side.

## A call in progress

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="A call in progress" />

While a call is going on, the number field moves to the top with a keypad icon inside it, and the call is shown on a card:

- the state and the length of the call (**On a call · 0:21**), the name of the other party, **Line** and the name of the account the call is on, and the number;
- two vertical level bars at the sides of the card, one for each channel of the sound;
- a row of buttons: record (circle), mute (microphone), hold (pause) and the red **hang up** button;
- a second row: transfer (handset with an arrow) and the keypad.

If the number is known in **Contacts**, its name is shown instead of the number. The same actions have [hotkeys](../program/shortcuts.md): answer, hang up, hold and mute.

## Several calls at once

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Several calls" />

A new incoming call appears on its own card above the list, with a green, a yellow and a red button and a line saying who you are talking to now (**On a call with Maria Ellis**). The list below shows every call with its state — **On hold**, **On a call**, **Incoming call** — and the account it is on. A pause icon marks a call on hold and a speaker icon marks the one you are talking on.

What happens when somebody rings while you are already on a call is set in [Calls settings](../sip-accounts/calls.md#call-waiting).

## Conference

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="A conference" />

Calls that have been joined show as one **Conference** card on the account's line. Each participant is listed with the time in the call and their own **Hang up** button. The buttons below record, mute and end the conference for everybody; the wide button at the bottom splits the conference back into separate calls.

## Capture

When [capture of other applications](../capture/capture.md) is allowed in **Settings → Capture**, a strip appears between the account chips and the buttons.

<Shot name="10_settings_capture" full alt="The Capture strip at the foot of the phone: Capture · ready, Record and two level bars" />

- **Capture · ready** says that the program is listening for a conversation in another application.
- **Record** starts a capture by hand.
- The two thin bars under it show the level of the sound: the upper one is you, the lower one is what the computer plays. How they are drawn is set under **Picture in the line at the foot of the phone**.

The program can also live in the tray (the menu bar on macOS) and be brought up with a [hotkey](../program/shortcuts.md).
