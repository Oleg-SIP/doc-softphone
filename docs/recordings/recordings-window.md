---
title: Recordings window
sidebar_position: 2
description: The library of conversations — filter, play, read the transcript and the write-up.
---

**Recordings** is where every conversation lives, whichever way it arrived: a call, a meeting captured from another application, or an imported file. Each is listed with its write-up already made.

<Shot name="01_recordings" alt="The Recordings tab: the list of conversations" />

## Finding a conversation

The bar at the top has four filters, a search field and a menu:

| Control | Narrows the list by |
| --- | --- |
| **Type** | the way the conversation arrived |
| **Period** | the date |
| **Category** | the category it was filed under — see [Dictionaries](../ai-processing/dictionaries.md) |
| **Mark** | the marks it carries |
| **Search** | what was said in it — the search goes through the transcripts of everything you have recorded |

The **⋮** button at the right of the bar opens more actions for the list: **Import from file(s)**, **Export to CSV** and **Open in a browser**.

## The list

Each row shows:

- an icon for the kind of conversation: a handset for a call, a window for a meeting in another application;
- a title — the name of the other party, or the number, or **Other application** for a captured meeting — and under it the date and the one-line summary;
- at the right, the category with its score (a number, for example *Support · 2*), then the tags, and at the end the length.

Tags drawn in red are **red flags** (in the picture *Angry customer* and *Churn risk*); the others are ordinary tags (*Complaint*, *Callback promised*). A conversation without a summary and a category has not been written up yet — the first row in the picture.

## The player

Select a row to open the player under the list.

<Shot name="02_recording_details" alt="A recording selected: the player and the transcript under the list" />

- The two waveforms are the two channels of the recording, one per side of the conversation. The bar under them scrolls a long recording.
- **▶** plays and pauses; the times at the left are the position and the total length.
- **1×** changes the speed; **Both** chooses which channel you hear.
- The disk button saves the audio, **×** closes the player.

## The transcript and the write-up

Under the player is the transcript, with one line per turn of speech, the time it was said at, and the speaker's name (**You**, the name of the other party or, for a captured meeting, **Other application**). Click a line to hear that moment; the line under the playhead is highlighted and the word being spoken is marked inside it.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="The transcript beside the audio" />

The drop-down above the transcript chooses what to show — the transcript made by one of your [recognisers](../ai-processing/transcription.md) (a star marks the recording's main transcript), or a write-up such as **Actions**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Actions the conversation left behind" />

The four icons at the right of the drop-down:

| Icon | Does |
| --- | --- |
| Sparkles | Has the model write the selected item now. |
| Two sheets | Copies it. |
| Disk | Saves it to a file. |
| Bin | Deletes it. |

You can export a transcript as plain text or as subtitles.

The write-up is made by the [prompts](/ai-processing/prompt-studio) and models you set up in [Processing](../ai-processing/processing.md), by [rules](../ai-processing/processing.md#rules) that run by themselves or when you ask. How long recordings are kept is set in [Recording calls](call-recording.md#retention).

## A recording you already have

A recording made somewhere else — on a mobile phone, a dictaphone or another system — can be added with **⋮ → Import from file(s)**. It is filed exactly like a dialled call: transcribed, written up and found by the same search.

## Deleting a recording

When a recording is deleted, everything made from it goes with it: the transcript and the write-up.
