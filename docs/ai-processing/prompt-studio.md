---
title: Prompt Studio
sidebar_position: 3
description: The prompts that write up your conversations, and how to change them.
---

The write-up of a conversation is made by prompts. The program comes with eleven, and you can change them in plain language, duplicate them and add your own. They are listed under **Prompts** in [Settings → Processing](processing.md#prompts).

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

The forms are fixed shapes of an answer, which is what lets the program keep it and search it later: **Labels** are codes from one of your lists, **Flags** are codes with a severity, **Rubric** is a score with a reason and a score for each criterion, **Answer** is a reply with the words it rests on. The instructions that tell a model the shape are kept in [Dictionaries](dictionaries.md#answer-shapes-and-language).

## Making it yours

- Change what a prompt asks, in plain language.
- Duplicate a prompt to try a variant.
- Choose the model for each prompt — on your own machine or in the cloud.
- Set the order in which prompts run, switch them on and off, and make them conditional — that is done with the [rules](processing.md#rules): for example, a sales review runs only on calls filed as **Sales**.
- Keep your own categories, tags and red flags in [Dictionaries](dictionaries.md).
- Cap the cost with the [monthly limits](processing.md#limits).

The original prompts and rules can be restored with **Restore defaults** under **Defaults** in [Settings → Processing](processing.md#defaults).
