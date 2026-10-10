---
title: Prompter
sidebar_position: 5
description: "The live prompter: the words of a call as they are said and suggestions for what to say next, the assistants that write them, rehearsing on a recording, and what it costs."
---

The **Prompter** listens to a conversation while it is happening. In a window of its own it writes down what each side says, as it is said, and — where the assistant you chose asks a model — a suggestion for what to say next. It is worth having open during a sales call, an interview or a difficult conversation, and with another assistant the same window shows a running translation of the other side, or plain subtitles.

<Shot name="46_prompter_running" alt="The Prompter rehearsing a sales call: the transcript on the left, the suggestions on the right, the newest one repeated large above them" />

In the picture the **Objections on a call** assistant is listening to a sales call. The left column is what was said, each line with its time and its side; the right one is what the model suggested about each reply of the customer; the newest suggestion is repeated in large type above the two.

The [Overview](../interface/settings-overview.md) of the settings lists the prompter under **Prompter** in two steps: **Allow prompting** and **Start prompting**.

## What it needs

- **A recogniser that can listen while a conversation happens.** It is added in [Settings → Transcription](transcription.md#live-recognition-for-the-prompter), like any other recogniser, and needs an **Address for the prompter** and a successful **Test**.
- **A language model**, for the assistants that suggest something. It is the one set on the assistant, or the default model of [Settings → Processing](processing.md#language-models). Subtitles need no model at all.
- **The tick Allow the prompter to be used**, in **Settings → Prompter**.

Once all three are there, **Prompter** appears in the list at the foot of the phone, between **History** and **Settings**, and opens the [prompter window](#the-prompter-window). The part of the program that does this is the **Prompter** module, *listening to a conversation in progress, and suggesting*; it can be switched off in [Modules](../application/modules.md).

## Settings → Prompter

<Shot name="41_settings_prompter" alt="Settings → Prompter: the switch that allows the prompter and the text size" />

*Speech recognition while a conversation is happening, and suggestions written to your own instructions. Both are charged by the minute.*

| Setting | Default | What it does |
| --- | --- | --- |
| **Allow the prompter to be used** | off | The one switch that lets a prompter be started at all. Nothing else on the page has any effect until it is on. |
| **Transcript and suggestions** | 13 pixels | How large the two columns of the window are drawn. |
| **Repeat the newest line above the columns** | on | Shows the newest suggestion — or the newest line, for an assistant that suggests nothing — in a band of its own above the columns. |
| **The repeated line** | 20 pixels | How large the band's text is. Shown while the band is on. |

:::caution
The other party's voice is sent to a recogniser as it is spoken, which is no less than recording them. Where [Settings → Recording](../recordings.md) asks for them to be told first, a prompter starts only after they have been.
:::

The prompter is read while you are talking, often from further away than the rest of the phone, so the two sizes are yours to choose: pick ones you can take in without leaning towards the screen. Drag the divider under the band to make it taller.

### Assistants

<Shot name="41b_settings_prompter_scrolled" alt="Settings → Prompter: the assistants and the monthly ceilings" />

An assistant is what a prompter is asked to be. *Each one listens to a conversation as it happens and writes something into the prompter's window: the words as they are said, a translation of them, or a suggestion for what to say next.* You choose which one to run in the prompter window. The program comes with four:

| Assistant | What it writes | Asks a model |
| --- | --- | --- |
| **Subtitles** | The words of both sides, as they are said. | no |
| **Translation** | The other side's words, translated into the language of the program. | yes |
| **Objections on a call** | For someone selling on the telephone: when the customer raises an objection, the objection in one line and one line that answers it. | yes |
| **Interview help** | For someone being interviewed: the answer to the question just asked, in a few short lines, or what to cover in the next reply. | yes |

**▲** and **▼** change the order, which is the order of the drop-down in the prompter window. **Add** makes an assistant of your own. **Restore defaults** puts the prompts and the rules back as they came with the program, here and under [Processing](processing.md#defaults) alike; your language models are left alone.

### An assistant's card

Pressing an assistant opens its card. It is the same card as a [prompt](prompt-studio.md) under Processing, with a few controls of its own.

<Shot name="42_prompter_assistant" alt="The card of the Objections on a call assistant: the recogniser, when a reply has ended, the role and the prompt" />

| Field | What it does |
| --- | --- |
| **Name** | The name shown in the list and in the prompter window. |
| **Answer shape** and **Also send** | As on any prompt: the shape of the answer and the instructions sent with it. The shipped assistants answer in **Prose**. |
| **Recogniser** | Which recogniser listens. Only those that can listen while somebody is talking are offered. |
| **When a reply has ended** | Who decides that a reply is over and can be answered: **The recogniser decides**, **After a pause**, or **Only when I ask** — then a reply ends when you press **Prompt me**. Six of the recognisers say where a reply ends and four do not; **The recogniser decides** falls back to a pause where it has no answer, which is why it is the one to leave on. |
| **Recognise my side too** | A second session on the same recogniser, at twice the price, so that your own words appear in the transcript too. They go into what the model is told, and are never what it is asked about. |
| **Role — what the model is** | Sent to the model before the prompt, for example *You help somebody selling on the telephone…* |
| **The prompt** | What the model is asked about each reply. `{{reply}}` is the reply that has just ended and `{{conversation}}` is everything said before it. *Leave it empty and nothing is asked of a model — the words are shown as they arrive, and the only thing being paid for is the recogniser*: that is what **Subtitles** is. |
| **Answer in** | The language of the suggestion: **Whatever was spoken**, **The language of this program**, or **One language, always**, with its code. |
| **Model** | **Default** or one of your [language models](processing.md#language-models). |

### Spending

*Separate from what the rules may spend on finished conversations. A month of summaries must not be able to silence a prompter in the middle of a conversation.*

| Field | When it is reached |
| --- | --- |
| **Recognisers, a month** | A running prompter stops at the end of the reply it is on — never mid-word. |
| **Models, a month** | The prompting stops and the subtitles carry on. |

Empty is no ceiling. What a minute of live audio costs is the recogniser's **Price a minute**, set on its card in [Transcription](transcription.md#the-recognisers-card); without it the prompter says that the figure it shows is an estimate.

## The prompter window

<Shot name="44_prompter_window" alt="The prompter window with the Objections on a call assistant chosen, before it starts" />

At the top is the **Assistant** drop-down and, to its right, the buttons:

| Button | What it does |
| --- | --- |
| **Start** / **Stop** (triangle / square) | *Start listening to this call* — or stop: *what was said stays on the screen*. A start pressed before the call is answered waits for it, and the button then calls it off. |
| **Prompt me** (sparkles) | *End the reply here and suggest what to say*, without waiting for a pause. For an assistant that asks no model the button is **End the reply**: it only closes the reply, so the next one starts clean. It is dark while the prompter is not running. |
| **Clear** (bin) | Forgets what is on the screen, after asking. *Both columns go, and so does the conversation the next suggestion would have been built from.* Stopping and starting again does not clear anything: a conversation stopped and started again is usually the same conversation. |
| **Export…** (diskette) | Writes both columns to a file, with their times: text (`.txt`) or a spreadsheet (`.csv`), by the name you give the file. |
| **Rehearse…** (library) | [Tries an assistant out on a recording](#rehearsing-on-a-recording) instead of a call. |

The drop-down cannot be changed while a prompter is running, but it stays in sight, so you can see which assistant is at work. While it listens, the card of the call says **Listening**.

Under the buttons is the band with the newest line, and under that the two columns:

- **Transcript** — every line with its time and its side;
- **Suggestions** — every suggestion with the time of the reply it answers. For an assistant that asks no model this column is not there, and the transcript takes the whole width.

Where the window is narrow the two columns stand one above the other. A column follows what is arriving until you scroll back in it, and follows again when you come back to the bottom. Press any line to keep it in the band; press the newest one, or the pin in the band, to follow again. The right button copies a line, a suggestion, the whole transcript or every suggestion.

## Rehearsing on a recording

An assistant can be tried out without anybody on the telephone. **Rehearse…** lists the conversations in the [library](../interface/recordings.md), newest first, and **A file on this computer…** for an `.mp3` or `.wav` file.

<Shot name="45_prompter_rehearse" alt="Rehearse…: the conversations of the library and a file on this computer" />

The recording you choose appears in a player under the buttons: play and pause, both channels drawn as a waveform you can click into, and the time. Press **Start**: the recording is played into the prompter through the same path a call takes, at its own speed — faster playback is deliberately not offered, because a prompter fed at one and a half times would pause, reply and bill about a conversation nobody had. The cross at the right is **Stop rehearsing**, back to listening to calls.

A recording on one channel, such as an imported file, is heard as one room: *the prompter hears all of it as the other party*.

## What it costs, and where the words go

- The recogniser is charged by the minute of live audio, and **Recognise my side too** doubles that. A model is charged for each suggestion. Both are counted against the [monthly ceilings](#spending), not against the limits of Processing.
- The other party's voice leaves the computer as it is spoken, to the recogniser you chose. A recogniser on your own machine — **Vosk**, **WhisperLive** or **NVIDIA Riva** — keeps it in the building.
- What the prompter shows is not a recording. To keep it, press **Export…**; to have the conversation itself, [record the call](../recordings.md) as well.

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
