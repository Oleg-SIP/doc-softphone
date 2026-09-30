---
title: Recordings window
sidebar_position: 1
description: The library of conversations — filter, play, read the transcript and the write-up.
---

**Recordings** is where every conversation lives, whichever way it arrived: a call, a meeting captured from another application, or an imported file. Each is listed with its write-up already made.

![The Recordings window](https://ai-softphone.com/screenshots/macos/en/light/recordings.png)

## Finding a conversation

The bar at the top has four filters and a search field:

| Control | Narrows the list by |
| --- | --- |
| **Type** | the way the conversation arrived |
| **Period** | the date |
| **Category** | the category it was filed under — see [Dictionaries](../ai-processing/dictionaries.md) |
| **Mark** | the marks it carries |
| **Search** | what was said in it — the search goes through the transcripts of everything you have recorded |

The **⋮** button at the right of the bar opens more actions for the list.

## The list

Each row shows:

- an icon for the kind of conversation: incoming call, outgoing call, a meeting in another application, an imported file;
- a title made up of the name, the company and the one-line summary, and under it the date and the start of the summary;
- at the right, the category, its score (a number), the tags, and the length.

Tags drawn in red are **red flags** (for example *Competitor* or *Angry customer*).

## The player

Select a row to open the player under the list.

- The two waveforms are the two channels of the recording, one per side of the conversation.
- **▶** plays and pauses; the times at the left are the position and the total length.
- **1×** changes the speed; **Both** chooses which channel you hear.
- The disk button saves the audio, **×** closes the player.

## The transcript and the write-up

Under the player is the transcript, with one line per turn of speech and the speaker's name (**You** or the name of the other party). Click a line to hear that moment; the line under the playhead is highlighted and the word being spoken is marked inside it.

![The transcript beside the audio](https://ai-softphone.com/screenshots/macos/en/light/transcript.png)

The drop-down above the transcript chooses what to show — the transcript made by one of your [recognisers](../ai-processing/transcription.md) (the starred one is the default), or a write-up such as **Actions**.

![Actions the conversation left behind](https://ai-softphone.com/screenshots/macos/en/light/digest.png)

The icons next to the drop-down let you have the model write the selected item, run it again, copy it, save it to a file and delete it. You can export a transcript as plain text or as subtitles.

The write-up is made by the [prompts](../ai-processing/prompt-studio.md) and models you set up in [Processing](../ai-processing/processing.md).
