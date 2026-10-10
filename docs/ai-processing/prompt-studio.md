---
title: Personal Prompt Studio
sidebar_position: 3
description: The prompts that write up your conversations, the rules that run them, and how to make them yours.
---

**Personal Prompt Studio** is the part of AI Softphone that writes up your conversations your way. The write-up is made by prompts: the program comes with eleven, ready to use once transcription and a language model are connected, and you can change them in plain language, duplicate them and add your own. They are listed under **Prompts** in [Settings → Processing](processing.md#prompts).

Your LLM, your key, your control: connect the model you prefer with your own key, through a supported service or a compatible API — or a model deployed inside your organisation. With [transcription](transcription.md#your-own-models) on your own hardware too, both the audio and the transcripts stay inside your environment.

<Shot name="12b_settings_processing_prompts" alt="The list of prompts in Settings → Processing" />

## The prompts that come with the program

The second column is what the list shows under the name of the prompt: what it writes, and in which form.

| Prompt | Form | What it writes |
| --- | --- | --- |
| **Summary** | Prose | The main points, decisions and next steps in one short paragraph. |
| **One-line summary** | Prose | A short title to recognise the conversation in a list. |
| **Action items** | Items | Who agreed to do what, and when, with the words they said. |
| **Topics** | Items | The subjects that were covered, in a few words. |
| **Names and numbers** | JSON | People, companies, dates, amounts and references. |
| **Category** | Labels | Files the conversation under one of your [categories](dictionaries.md). |
| **Tags** | Labels | Puts your [tags](dictionaries.md) on it, so it can be found later. |
| **Red flags** | Flags | Problems, with the evidence and the time in the conversation. |
| **A question about this call** | Answer | Answers a question you ask about one conversation, from its transcript. |
| **Sales quality** | Rubric | Reviews the conversation against sales criteria you can edit. |
| **Support quality** | Rubric | Judges how well the problem was understood and handled. |

The forms are fixed shapes of an answer, which is what lets the program keep it and search it later: **Labels** are codes from one of your lists, **Flags** are codes with a severity, **Rubric** is a score with a reason and a score for each criterion, **Answer** is a reply with the words it rests on. The instructions that tell a model the shape are kept in [Dictionaries](dictionaries.md#instructions).

The [prompter](prompter.md)'s assistants are prompts too, run on each reply while a call is happening rather than on a finished conversation. They are kept in a list of their own, under **Assistants** in **Settings → Prompter**.

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
