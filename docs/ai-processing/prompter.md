---
title: Prompter settings
sidebar_label: Prompter
sidebar_position: 5
description: "Settings → Prompter: what the live prompter needs, the switch that allows it, the text size, the assistants and their cards, and the monthly ceilings on what it may spend."
---

**Settings → Prompter** is where the live prompter is allowed, sized and given its assistants. The prompter itself — the window that writes down a call as it is said and suggests what to answer, and rehearsing it on a recording — is described in [Prompter window](/interface/prompter).

The [Overview](/interface/settings-overview) of the settings lists the prompter under **Prompter** in two steps: **Allow prompting** and **Start prompting**.

## What it needs

- **A recogniser that can listen while a conversation happens.** It is added in [Settings → Transcription](/ai-processing/transcription#live-recognition-for-the-prompter), like any other recogniser, and needs an **Address for the prompter** and a successful **Test**.
- **A language model**, for the assistants that suggest something. It is the one set on the assistant, or the default model of [Settings → Processing](/ai-processing/processing#language-models). Subtitles need no model at all.
- **The tick Allow the prompter to be used**, in **Settings → Prompter**.

Once all three are there, **Prompter** appears in the list at the foot of the phone, between **History** and **Settings**, and opens the [prompter window](/interface/prompter). The part of the program that does this is the **Prompter** module, *listening to a conversation in progress, and suggesting*; it can be switched off in [Modules](/application/modules).

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
The other party's voice is sent to a recogniser as it is spoken, which is no less than recording them. Where [Settings → Recording](/recordings) asks for them to be told first, a prompter starts only after they have been.
:::

The prompter is read while you are talking, often from further away than the rest of the phone, so the two sizes are yours to choose: pick ones you can take in without leaning towards the screen. Drag the divider under the band, in the [prompter window](/interface/prompter#the-window), to make it taller.

### Assistants

<Shot name="41b_settings_prompter_scrolled" alt="Settings → Prompter: the assistants and the monthly ceilings" />

An assistant is what a prompter is asked to be. *Each one listens to a conversation as it happens and writes something into the prompter's window: the words as they are said, a translation of them, or a suggestion for what to say next.* You choose which one to run in the prompter window. The program comes with four:

| Assistant | What it writes | Asks a model |
| --- | --- | --- |
| **Subtitles** | The words of both sides, as they are said. | no |
| **Translation** | The other side's words, translated into the language of the program. | yes |
| **Objections on a call** | For someone selling on the telephone: when the customer raises an objection, the objection in one line and one line that answers it. | yes |
| **Interview help** | For someone being interviewed: the answer to the question just asked, in a few short lines, or what to cover in the next reply. | yes |

**▲** and **▼** change the order, which is the order of the drop-down in the [prompter window](/interface/prompter#the-window). **Add** makes an assistant of your own. **Restore defaults** puts the prompts and the rules back as they came with the program, here and under [Processing](/ai-processing/processing#defaults) alike; your language models are left alone.

### An assistant's card

Pressing an assistant opens its card. It is the same card as a [prompt](/ai-processing/prompt-studio) under Processing, with a few controls of its own.

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
| **Model** | **Default** or one of your [language models](/ai-processing/processing#language-models). |

### Spending

*Separate from what the rules may spend on finished conversations. A month of summaries must not be able to silence a prompter in the middle of a conversation.*

| Field | When it is reached |
| --- | --- |
| **Recognisers, a month** | A running prompter stops at the end of the reply it is on — never mid-word. |
| **Models, a month** | The prompting stops and the subtitles carry on. |

Empty is no ceiling. What a minute of live audio costs is the recogniser's **Price a minute**, set on its card in [Transcription](/ai-processing/transcription#the-recognisers-card); without it the prompter says that the figure it shows is an estimate.
