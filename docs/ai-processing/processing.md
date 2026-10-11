---
title: Processing
sidebar_position: 2
description: Automatic processing of conversations, language models, prompts, the rules that run them and the monthly spending limits.
---

**Settings → Processing** decides what happens to a conversation once it has been recorded, which model does the work, and how much it may cost.

<Shot name="12_settings_processing" alt="Settings → Processing" />

## Process conversations automatically

- **Off:** nothing happens until you ask for it in the [Recordings window](../interface/recordings.md).
- **On:** the [rules](#rules) below run by themselves. This is what turns a conversation into a summary, a category and everything else without anybody pressing anything. A model in the cloud charges for each of those steps.

## Language models

The models that read a transcript and write about it. Press **Add** to add one. Each is listed with its name and, under it, the model identifier and the address of its service, for example `qwen3-32b · http://localhost:8000/v1`. The one marked **default** — **QWEN**, a model on this computer, in the picture — is the one used by default, by the prompts and by the [prompter](prompter.md)'s assistants that do not name a model of their own. **Test** in the form of a model checks that the service really answers before you rely on it.

- A model **on your own machine** keeps every conversation in the building and costs nothing to run.
- A model in the cloud — OpenAI, Claude, Mistral, DeepSeek, Groq and others — is charged per use. The program shows the price of each call in tokens and in money.

## Prompts

<Shot name="12b_settings_processing_prompts" alt="Settings → Processing: the prompts" />

*What the models are asked.* Every prompt came with the program and every one is yours to change — and to put back. Each is listed with its name and, under it, what it writes and in which form; **▲** and **▼** change the order of the list. The form — **Answer**, **Items**, **Labels**, **JSON**, **Prose**, **Flags** or **Rubric** — decides how the answer is kept and shown. The prompts are described in [Personal Prompt Studio](prompt-studio.md). **Add** makes a prompt of your own.

## Rules

<Shot name="12c_settings_processing_rules" alt="Settings → Processing: the rules" />

*What runs by itself, in this order. Each one fires at most once per conversation.* A rule is a line with a check box that switches it on or off, its name, and under it what it does. **▲** and **▼** change the order. The program comes with eight:

| Rule | Does | When |
| --- | --- | --- |
| **Transcribe every conversation** | Transcribes it. | always |
| **Summarise it** | Asks a model: **Summary**. | always |
| **Reduce it to one line** | Asks a model: **One-line summary**. | always |
| **File it under a category** | Asks a model: **Category**. | always |
| **Label it** | Asks a model: **Tags**. | always |
| **Raise anything worth a look** | Asks a model: **Red flags**. | always |
| **Assess it, if it was a sale** | Asks a model: **Sales quality**. | only if the category is **Sales** |
| **Assess it, if it was support** | Asks a model: **Support quality**. | only if the category is **Support** |

The order matters: the last two rules need the category that the rule before them has set. **Add** makes a rule of your own.

## Spending

<Shot name="12d_settings_processing_spending" alt="Settings → Processing: the spending of the month and the two limits" />

Under **Spending** the program shows what has been spent this month and on how many requests — *Nothing has been processed this month* in the picture, and for example *This month: 40.492 tokens, over 84 request(s), at no charge* once something has.

| Field | Meaning |
| --- | --- |
| **Money limit, monthly** | The most the models may cost in a month. |
| **Token limit, monthly** | The most tokens they may use in a month. |

There are two limits because a month can be counted in two things. Both are empty until you fill them in. When either is reached, the automatic rules stop until the month turns. **Asking for something yourself is never stopped.** The [prompter](prompter.md#spending) has ceilings of its own, so that a month of summaries cannot silence it in the middle of a conversation.

## Defaults

**Restore defaults** puts the prompts and the rules back as they came with the program, in the current interface language. Your language models are left alone.

The prompts and rules that came with the program stay in the language they were in when you switch the interface language; **Restore defaults** brings them into the new one. Each prompt is then marked *changed* at the right.
