---
title: Prompter window
sidebar_position: 3
description: "The live prompter window: the words of a call as they are said and suggestions for what to say next, its buttons and columns, rehearsing on a recording, and what it costs."
---

The **Prompter** listens to a conversation while it is happening. In a window of its own it writes down what each side says, as it is said, and — where the assistant you chose asks a model — a suggestion for what to say next. It is worth having open during a sales call, an interview or a difficult conversation, and with another assistant the same window shows a running translation of the other side, or plain subtitles.

<Shot name="46_prompter_running" alt="The Prompter rehearsing a sales call: the transcript on the left, the suggestions on the right, the newest one repeated large above them" />

In the picture the **Objections on a call** assistant is listening to a sales call. The left column is what was said, each line with its time and its side; the right one is what the model suggested about each reply of the customer; the newest suggestion is repeated in large type above the two.

**Prompter** appears in the list at the foot of the phone, between **History** and **Settings**, once three things are in place: the prompter is allowed, there is a recogniser that can listen while a conversation happens, and — for the assistants that suggest something — a language model. All of them are set up in [Settings → Prompter](/ai-processing/prompter), which also holds the text size and the assistants themselves.

## The window

<Shot name="44_prompter_window" alt="The prompter window with the Objections on a call assistant chosen, before it starts" />

At the top is the **Assistant** drop-down and, to its right, the buttons:

| Button | What it does |
| --- | --- |
| **Start** / **Stop** (triangle / square) | *Start listening to this call* — or stop: *what was said stays on the screen*. A start pressed before the call is answered waits for it, and the button then calls it off. |
| **Prompt me** (sparkles) | *End the reply here and suggest what to say*, without waiting for a pause. For an assistant that asks no model the button is **End the reply**: it only closes the reply, so the next one starts clean. It is dark while the prompter is not running. |
| **Clear** (bin) | Forgets what is on the screen, after asking. *Both columns go, and so does the conversation the next suggestion would have been built from.* Stopping and starting again does not clear anything: a conversation stopped and started again is usually the same conversation. |
| **Export…** (diskette) | Writes both columns to a file, with their times: text (`.txt`) or a spreadsheet (`.csv`), by the name you give the file. |
| **Rehearse…** (library) | [Tries an assistant out on a recording](#rehearsing-on-a-recording) instead of a call. |

The drop-down lists the [assistants](/ai-processing/prompter#assistants) in the order set under **Settings → Prompter**. It cannot be changed while a prompter is running, but it stays in sight, so you can see which assistant is at work. While it listens, the card of the call says **Listening**.

Under the buttons is the band with the newest line, and under that the two columns:

- **Transcript** — every line with its time and its side;
- **Suggestions** — every suggestion with the time of the reply it answers. For an assistant that asks no model this column is not there, and the transcript takes the whole width.

Where the window is narrow the two columns stand one above the other. A column follows what is arriving until you scroll back in it, and follows again when you come back to the bottom. Press any line to keep it in the band; press the newest one, or the pin in the band, to follow again. The right button copies a line, a suggestion, the whole transcript or every suggestion. Drag the divider under the band to make it taller; the sizes of the text are set in [Settings → Prompter](/ai-processing/prompter#settings--prompter).

## Rehearsing on a recording

An assistant can be tried out without anybody on the telephone. **Rehearse…** lists the conversations in the [library](/interface/recordings), newest first, and **A file on this computer…** for an `.mp3` or `.wav` file.

<Shot name="45_prompter_rehearse" alt="Rehearse…: the conversations of the library and a file on this computer" />

The recording you choose appears in a player under the buttons: play and pause, both channels drawn as a waveform you can click into, and the time. Press **Start**: the recording is played into the prompter through the same path a call takes, at its own speed — faster playback is deliberately not offered, because a prompter fed at one and a half times would pause, reply and bill about a conversation nobody had. The cross at the right is **Stop rehearsing**, back to listening to calls.

A recording on one channel, such as an imported file, is heard as one room: *the prompter hears all of it as the other party*.

## What it costs, and where the words go

- The recogniser is charged by the minute of live audio, and **Recognise my side too** doubles that. A model is charged for each suggestion. Both are counted against the prompter's [monthly ceilings](/ai-processing/prompter#spending), not against the limits of Processing.
- The other party's voice leaves the computer as it is spoken, to the recogniser you chose. A recogniser on your own machine — **Vosk**, **WhisperLive** or **NVIDIA Riva** — keeps it in the building.
- What the prompter shows is not a recording. To keep it, press **Export…**; to have the conversation itself, [record the call](/recordings) as well.

## When it does not start

The window says what is missing in a line under the buttons.

| The window says | What to do |
| --- | --- |
| *Prompting is switched off. Settings → Prompter.* | Tick **Allow the prompter to be used**. |
| *No recogniser here can listen while somebody is talking. Settings → Transcription.* | Add a recogniser with an **Address for the prompter** and press **Test**. |
| *There is nothing to run. Settings → Prompter, and add an assistant.* | Every assistant was deleted or switched off: add one, or press **Restore defaults**. |
| *The other party has to be told first. Start recording this conversation, or change what Settings → Recording says about consent.* | Start the recording, which plays the announcement, or change the consent setting. |
| *The recogniser did not start listening. Check its live address and its model under Settings → Transcription.* | The address for the prompter, the model or the key is wrong. **Test** on the recogniser's card says which. |
| *This month's allowance for recognisers is used up.* | Raise **Recognisers, a month**, or wait for the month to turn. |
| *This month's allowance for models is used up. The words carry on; the prompting has stopped.* | Raise **Models, a month**. |
