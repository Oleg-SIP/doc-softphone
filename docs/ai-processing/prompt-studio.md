---
title: Personal Prompt Studio
sidebar_position: 3
description: The prompts that write up your conversations, the rules that run them, and how to make them yours.
---

**Personal Prompt Studio** is the part of AI Softphone that writes up your conversations your way. The write-up is made by prompts: the program comes with eleven, ready to use once transcription and a language model are connected, and you can change them in plain language, duplicate them and add your own. They are listed under **Prompts** in [Settings → Processing](processing.md#prompts).

Your LLM, your key, your control: connect the model you prefer with your own key, through a supported service or a compatible API — or a model deployed inside your organisation. With [transcription](transcription.md#your-own-models) on your own hardware too, both the audio and the transcripts stay inside your environment.

<Shot name="12b_settings_processing_prompts" alt="The list of prompts in Settings → Processing" />

## The prompts that come with the program

AI Softphone 1.1.11 includes 11 prompts for completed conversations and four live assistants. Below are the shipped texts for this language; language versions may differ.

| Prompt | `code` | Form | What it writes |
| --- | --- | --- | --- |
| **Summary** | `summary` | Prose | The main points, decisions and next steps in one short paragraph. |
| **One-line summary** | `super-summary` | Prose | A short title to recognise the conversation in a list. |
| **Action items** | `action-items` | Items | Who agreed to do what, and when, with the words they said. |
| **Topics** | `topics` | Items | The subjects that were covered, in a few words. |
| **Names and numbers** | `entities` | JSON | People, companies, dates, amounts and references. |
| **Category** | `categorise` | Labels | Files the conversation under one of your [categories](dictionaries.md). |
| **Tags** | `tags` | Labels | Puts your [tags](dictionaries.md) on it, so it can be found later. |
| **Red flags** | `red-flags` | Flags | Problems, with the evidence and the time in the conversation. |
| **A question about this call** | `qa` | Answer | Answers a question you ask about one conversation, from its transcript. |
| **Sales quality** | `sales-quality` | Rubric | Reviews the conversation against sales criteria you can edit. |
| **Support quality** | `support-quality` | Rubric | Judges how well the problem was understood and handled. |

The forms are fixed shapes of an answer, which is what lets the program keep it and search it later: **Labels** are codes from one of your lists, **Flags** are codes with a severity, **Rubric** is a score with a reason and a score for each criterion, **Answer** is a reply with the words it rests on. The instructions that tell a model the shape are kept in [Dictionaries](dictionaries.md#instructions).

The [prompter](../interface/prompter.md)'s assistants are prompts too, run on each reply while a call is happening rather than on a finished conversation. They are kept in a list of their own, under [Assistants](prompter.md#assistants) in **Settings → Prompter**.

Calls made in AI Softphone, meetings [captured](/capture/) from the computer and imported recordings all go through the same prompts once they have a transcript.

Action items record what was agreed — they do not send messages, book visits or create tickets for you.

## Making it yours

- Change what a prompt asks, in plain language: what it looks for, the answer format and the language it answers in.
- Duplicate a prompt to try a variant.
- Choose the model for each prompt — on your own machine or in the cloud.
- Set the order in which prompts run, switch them on and off, and make them conditional — that is done with the [rules](processing.md#rules): for example, a sales review runs only on calls filed as **Sales**.
- Keep your own categories, tags and red flags in [Dictionaries](dictionaries.md).
- Cap the cost with the [monthly limits](processing.md#spending).

The original prompts and rules can be restored with **Restore defaults** under **Defaults** in [Settings → Processing](processing.md#defaults).

## Model role {#role-and-task}

`system` sets the model’s behaviour; `body` describes the task. The answer shape and reply language are supplied separately through dictionary instructions.

An empty list of tasks or flags can be a valid result. Missing owners and dates must not be invented. Answers to questions must be based only on the transcript.

[Response formats](dictionaries.md#response-formats)

## Placeholders {#placeholders}

A token in the prompt that is replaced with conversation data.

| Placeholder | Meaning |
| --- | --- |
| `{{transcript}}` | Transcript, one utterance per line, with times in milliseconds |
| `{{duration}}` | Conversation duration |
| `{{direction}}` | Incoming or outgoing call |
| `{{party}}` | Contact name or number |
| `{{language}}` | Reply language |
| `{{question}}` | User’s question |
| `{{categories}}` | Category dictionary |
| `{{tags}}` | Tag dictionary |
| `{{red_flags}}` | Red-flag dictionary |
| `{{artifact:summary}}` | Previously generated summary |
| `{{conversation}}` | Context accumulated by the live prompter |
| `{{reply}}` | Other person’s latest utterance; live prompter only |

Run `summary` before `super-summary`, which uses `{{artifact:summary}}`. Run `categorise` before quality assessment: `sales-quality` needs category `sales`, and `support-quality` needs `support`.

[Standard assistants](prompter.md#assistant-templates)

## Standard prompt texts {#standard-templates}

AI Softphone 1.1.11 includes 11 prompts for completed conversations and four live assistants. Below are the shipped texts for this language; language versions may differ.

### Summary (`summary`) {#summary}

**Answer shape:** `plain`.

**Role (`system`)**

```text
You read transcripts of telephone calls and write short, factual summaries of them. You never guess at anything that was not said, and you never add advice.
```

**Task (`body`)**

```text
Summarise this telephone call in one short paragraph: what it was about, what was decided, and what happens next. It lasted {{duration}} and was {{direction}}, with {{party}}.

{{transcript}}
```

### One-line summary (`super-summary`) {#super-summary}

**Answer shape:** `plain`.

**Role (`system`)**

```text
You read transcripts of telephone calls and reduce each to a single phrase. You never guess and you never add advice.
```

**Task (`body`)**

```text
Reduce this telephone call to one phrase of at most twelve words — the sort of line that would go in a table beside the caller's name. No full stop, no quotation marks.

{{artifact:summary}}

{{transcript}}
```

### Action items (`action-items`) {#action-items}

**Answer shape:** `list`.

**Role (`system`)**

```text
You read transcripts of telephone calls and list what somebody undertook to do. You list only what was actually said; you never invent a task, an owner or a date.
```

**Task (`body`)**

```text
List what anybody on this call undertook to do. Name who is to do it where it was said, and by when where it was said. If nobody undertook anything, answer with an empty list.

{{transcript}}
```

### Topics (`topics`) {#topics}

**Answer shape:** `list`.

**Role (`system`)**

```text
You read transcripts of telephone calls and name what they were about.
```

**Task (`body`)**

```text
List the subjects this call actually covered, at most six, each in a few words. Leave the owner and the date empty — they mean nothing here.

{{transcript}}
```

### Names and numbers (`entities`) {#entities}

**Answer shape:** `json`.

**Role (`system`)**

```text
You read transcripts of telephone calls and pick out what was named in them. You never guess at a spelling and you never add anything that was not said.
```

**Task (`body`)**

```text
Pick out what was named in this call, as JSON of exactly this shape:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Each is a list of strings, written as they were said. Leave a list empty rather than guessing.

{{transcript}}
```

### Category (`categorise`) {#categorise}

**Answer shape:** `labels`.

**Role (`system`)**

```text
You file telephone calls under one of the categories you are given. You choose from the list and nothing else.
```

**Task (`body`)**

```text
File this call under exactly one of these categories. Answer with its code.

{{categories}}
{{transcript}}
```

### Tags (`tags`) {#tags}

**Answer shape:** `labels`.

**Role (`system`)**

```text
You label telephone calls with the tags you are given. You choose from the list and nothing else, and you leave a tag off rather than stretching it.
```

**Task (`body`)**

```text
Which of these are true of this call? Answer with their codes, or with an empty list if none of them is.

{{tags}}
{{transcript}}
```

### Red flags (`red-flags`) {#red-flags}

**Answer shape:** `flags`.

**Role (`system`)**

```text
You read transcripts of telephone calls and raise only what you were given to look for. You quote the words you based each one on, and you raise nothing you cannot quote.
```

**Task (`body`)**

```text
Raise any of these that this call shows. For each one, quote the words it rests on and give the moment in milliseconds where they were said. Raise nothing rather than stretching a definition.

{{red_flags}}
{{transcript}}
```

### A question about this call (`qa`) {#qa}

**Answer shape:** `qa`.

**Role (`system`)**

```text
You answer questions about one telephone call, from its transcript and from nothing else. Where the call does not say, you say so plainly rather than guessing.
```

**Task (`body`)**

```text
{{question}}

{{transcript}}
```

### Sales quality (`sales-quality`) {#sales-quality}

**Answer shape:** `rubric`.

**Role (`system`)**

```text
You assess how a salesperson handled a telephone call. You judge only what the transcript shows, you never assume what happened before or after it, and you are as hard on a call that went well as on one that did not.
```

**Task (`body`)**

```text
Judge our side of this call — the operator — against these criteria and no others:
- greeting: did they identify themselves and the company?
- discovery: did they find out what the customer actually wanted?
- objections: did they answer what the customer raised, rather than talking past it?
- value: did they say what the customer gets, not only what it costs?
- next-step: did the call end with something specific agreed?

{{transcript}}
```

### Support quality (`support-quality`) {#support-quality}

**Answer shape:** `rubric`.

**Role (`system`)**

```text
You assess how a support agent handled a telephone call. You judge only what the transcript shows, and you weigh whether the customer's problem was actually dealt with above how pleasant the conversation was.
```

**Task (`body`)**

```text
Judge our side of this call — the operator — against these criteria and no others:
- greeting: did they identify themselves and confirm who they were speaking to?
- understanding: did they establish what was actually wrong before answering?
- resolution: was the problem solved, or was a specific next step given?
- tone: did they stay calm and civil, especially where the customer did not?
- close: did they check the customer was satisfied before ending it?

{{transcript}}
```
