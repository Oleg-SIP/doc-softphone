---
title: Recordings window
sidebar_position: 2
description: "The library of every conversation — a call, an imported file or a meeting captured from Zoom, Teams or Meet: filters, the player, the transcript you can play from any line, and the write-ups."
---

**Recordings** is where every conversation lives, whichever way it arrived: a call made or taken in the phone, an audio file you imported, or a meeting captured from Zoom, Teams, Meet or any other application. They all sit in one list, and each one opens the same way: the player, the transcript, and everything the language model wrote about it. Press **Recordings** at the bottom left of the [main window](main-window.md) to open it.

<Shot name="01_recordings" alt="The Recordings tab: a captured Zoom meeting, an imported file and calls in one list" />

## Three kinds of recording

The icon at the left of a row says how the conversation arrived.

| Icon | Conversation | Its name in the list | How it gets here |
| --- | --- | --- | --- |
| Handset with an arrow | A call made or taken in this phone. The arrow points in for an incoming call and out for an outgoing one. | The contact's name, or the number | Recorded as set in [Recordings](../recordings.md) |
| Arrow into a bar | A file imported from elsewhere: a mobile phone, a dictaphone or another system | The name of the file | **⋮ → Import from file(s)**; see [below](#a-recording-you-already-have) |
| Window | A meeting held in another application | The name you gave it, or **Other application** | [Capture](../capture/capture.md) |

In the picture the top three rows are one of each: a Zoom meeting, an imported file of a bank's support call and a call taken on the **305 Support** line. Whatever their source, they are transcribed, written up and searched alike.

## Finding a conversation

The bar at the top has five filters, a search field and a menu:

| Control | Narrows the list by |
| --- | --- |
| **Type** | the way the conversation arrived: incoming or outgoing calls, **Imported**, **Captured** |
| **Period** | the date: **Today**, **Yesterday**, **Last 7 days**, or **Choose dates…** |
| **Category** | the category it was filed under — see [Dictionaries](../ai-processing/dictionaries.md) |
| **Mark** | the tags and red flags it carries |
| **Recogniser** | the [recogniser](../ai-processing/transcription.md) that made its transcript |
| **Search** | what was said in it — the search goes through the transcripts of everything you have recorded |

<Shot name="39_more_menu" alt="The ⋮ menu of the list: Import from file(s), Export to CSV, Open in a browser" />

The **⋮** button at the right of the bar opens more actions for the list:

| Item | Does |
| --- | --- |
| **Import from file(s)** | Brings in recordings you already have. See [A recording you already have](#a-recording-you-already-have). |
| **Export to CSV** | Saves the list as a spreadsheet: when, the party and number, direction, length, category, tags, flags and the one-line summary of every conversation. |
| **Open in a browser** | Opens the list in your browser, as the page the [local REST API](../integration/rest-api.md) serves at `/ui`. |

## The list

Each row shows:

- the icon of the kind of conversation;
- the name — the other party, the number, the file or the meeting — and under it the date and the one-line summary;
- at the right, the category with its score (a number, for example *Support · 4*), then the red flags and tags, and at the end the length.

Red flags are drawn in red (in the picture *Sensitive data*, *Promise made*, *Angry customer*); tags are plain (*Callback promised*). A conversation without a summary and a category has not been written up yet — the **Anna Price** row in the picture.

<Shot name="40_row_actions" alt="A row with the pointer over it: the pin, pencil and bin buttons" />

Point at a row to show three buttons at its right:

| Button | Does |
| --- | --- |
| Pin | **Keep this one**: a kept recording is never deleted by the limits of [Retention](../recordings.md#retention). Press it again to stop keeping it. |
| Pencil | **Rename**: gives the conversation a name of your own. A call keeps the party's name beside it; a meeting or a file is otherwise named after the application or the file it came from. |
| Bin | **Delete this recording**, after asking. The audio goes as well, and it cannot be undone. |

## The player

Select a row to open the player under the list.

- The two waveforms are the two channels of the recording: the upper one is you, the lower one is the other side. An imported file usually holds one mixed track, so both lines show the same sound.
- **▶** plays and pauses; the times at the left are the position and the total length. The bar under the waveforms scrolls a long recording.
- **1×** changes the speed; **Both** chooses which voice you hear: both, only you (**Me**) or only the other side (**Them**).
- The disk button saves a copy of the recording, **×** closes the conversation.

The line between the list and the player can be dragged up to give the transcript more room, as in the pictures below.

## The transcript

Under the player is the transcript: one line per turn of speech, with the time it was said at and who said it.

<Shot name="26_recording_call" alt="A call on the 305 Support line: the player and the transcript, with the line at 0:12 highlighted" />

| Kind of recording | The speakers are shown as |
| --- | --- |
| A call | **You** and the other party's name, or the number |
| A captured meeting | **You** and the name of the recording, for everybody else |
| An imported file | **Everybody · speaker 1**, **Everybody · speaker 2**… — the recogniser tells the voices apart |

**Click a line to go to that moment**: the player moves there, the line is highlighted, and the word being spoken is marked inside it — in the picture the line at **0:12**, with the word *Yes*. Press **▶** to listen from there. While it plays, the highlight follows the speech, so you can read and listen at the same time and jump back to any sentence.

The time at the left of every line is also what a write-up points to: a red flag, an answer or a quotation carries the time of the words it rests on.

## Transcript or write-up: the drop-down

The drop-down above the transcript chooses what to show in that place: a transcript, or one of the write-ups the language model made.

<Shot name="27_writeup_menu" alt="The open drop-down: the OpenAI transcript and the write-ups of the call" />

- Lines with a **microphone** are transcripts, one for each [recogniser](../ai-processing/transcription.md) that transcribed the recording. The star marks the main one. Point at one to see the recogniser, its model and the language.
- Lines with **sparkles** are write-ups, made by the [prompts](/ai-processing/prompt-studio) of [Processing](../ai-processing/processing.md).

A recording can have transcripts from several recognisers, to compare them: the Zoom meeting below was transcribed by both X.ai and Deepgram.

<Shot name="36_zoom_menu" alt="A captured meeting with two transcripts, Deepgram and X.ai, and its write-ups" />

The write-ups are listed under short names:

| In the drop-down | Made by the prompt | What it shows |
| --- | --- | --- |
| **Summary** | Summary | The main points, decisions and next steps in a short paragraph. |
| **In a nutshell** | One-line summary | One sentence; the same line is shown under the name in the list. |
| **Actions** | Action items | Who agreed to do what, and by when. |
| **Topics** | Topics | The subjects that came up. |
| **Mentioned** | Names and numbers | People, companies, dates, amounts and references. |
| the question itself | A question about this call | The answer to a question you asked, with the words it rests on. |
| **Quality** | Sales quality, Support quality | An overall score and a verdict on each criterion. |
| **Red flags** | Red flags | What needs attention, with the evidence and the time. |
| **Tags**, **Category** | Tags, Category | The labels the conversation was filed under. |

## The write-ups, one by one

The pictures below are all of the same call, on the **305 Support** line, in which a customer asks when her policies renew.

**Summary** — the conversation in a few sentences.

<Shot name="28_summary" alt="The Summary of the call" />

**In a nutshell** — one line, short enough to recognise the conversation in the list.

<Shot name="29_nutshell" alt="In a nutshell: the one-line summary of the call" />

**Actions** — every task with who is to do it and when, at the right.

<Shot name="30_actions" alt="Actions: two tasks for You, one of them due tomorrow morning" />

**A question** — ask the conversation anything: the question becomes the name of the item, and under the answer are the words it rests on, with their time in the recording.

<Shot name="31_question" alt="The answer to a question about the call, with two quotations at 0:15 and 0:28" />

**Quality** — the score from 1 to 5 with the reason for it, and each criterion marked **pass**, **weak** or **fail** with a note.

<Shot name="32_quality" alt="Quality: score 4, two criteria passed and two weak" />

**Red flags** — each flag with the words it was raised on, its severity and the time.

<Shot name="33_red_flags" alt="Red flags: Promise made, low, at 0:28" />

**Topics** — the subjects of a meeting, here of the Zoom meeting.

<Shot name="38_topics" alt="Topics of the Zoom meeting" />

## The buttons beside the drop-down

| Button | Does |
| --- | --- |
| Sparkles | **Transcribe or ask a model…**: opens a menu, see below. |
| Two sheets | Copies what is shown. |
| Disk | Saves it to a file. You can save a transcript as plain text or as subtitles. |
| Bin | Deletes what is shown. |

<Shot name="34_run_menu" alt="The sparkles menu: Transcription with four recognisers, Processing with the prompts" />

The sparkles menu does the work on demand. Under **Transcription** pick a recogniser to transcribe the recording again with it; under **Processing** pick a prompt to run it now — **A question about this call…** asks for the question first. The result appears in the drop-down. This is how a conversation is written up when **Process conversations automatically** is off in [Processing](../ai-processing/processing.md), and how you add one more write-up to a conversation that already has some.

## Three examples

### A call made in the phone

The call above: the speakers are **You** and **Helen Carter**, the name of the contact, on two separate channels.

### A file you imported

<Shot name="35_recording_import" alt="An imported file of a bank's support call: one mixed track and speakers 1 and 2" />

`riverside_bank_support_call` is an mp3 brought in with **⋮ → Import from file(s)**. Its name is the name of the file, its icon an arrow into a bar, and its two speakers were told apart by the recogniser. The write-ups found a card number said aloud and raised **Sensitive data**.

### A meeting captured from another application

<Shot name="37_recording_zoom" alt="A Zoom meeting captured from the computer: the X.ai transcript with You and the meeting's name as speakers" />

**Q4 launch planning (Zoom)** was captured while the meeting ran in Zoom and named with the pencil. Everybody on the far side of the meeting is shown under the name of the recording; you are **You**. See [Capture](../capture/capture.md).

## A recording you already have

A recording made somewhere else — on a mobile phone, a dictaphone or another system — can be added with **⋮ → Import from file(s)**. Choose one or more mp3 or wav files; the phone says how many were imported, and names any it could not read as a recording. Each one is filed exactly like a dialled call: transcribed, written up by the same [rules](../ai-processing/processing.md#rules) and found by the same search.

## Deleting a recording

When a recording is deleted, everything made from it goes with it: the transcripts and the write-ups. How long recordings are kept by themselves is set in [Recordings](../recordings.md#retention).
