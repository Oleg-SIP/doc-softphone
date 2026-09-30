---
title: Processing
sidebar_position: 1
description: Automatic processing of conversations, the monthly spending limits, language models and prompts.
---

**Settings → Processing** decides what happens to a conversation once it has been recorded, which model does the work, and how much it may cost.

![Settings → Processing](https://ai-softphone.com/screenshots/macos/en/light/processing.png)

## Process conversations automatically

- **Off:** nothing happens until you ask for it in the [Recordings window](../recordings/recordings-window.md).
- **On:** the rules below run by themselves. This is what turns a conversation into a summary, a category and everything else without anybody pressing anything. A model in the cloud charges for each of those steps.

Under the check box the program shows what has been spent this month and on how many requests, for example *This month: 43,28, over 18 request(s).*

## Limits

| Field | Meaning |
| --- | --- |
| **Money limit, monthly** | The most the models may cost in a month. |
| **Token limit, monthly** | The most tokens they may use in a month. |

There are two limits because a month can be counted in two things. When either is reached, the automatic rules stop until the month turns. **Asking for something yourself is never stopped.**

## Language models

The models that read a transcript and write about it. Press **Add** to add one. Each is listed with its name, the model identifier and the address of its service, for example `qwen2.5:7b-instruct · http://127.0.0.1:11434/v1`. The one marked **default** is the one used by default.

- A model **on your own machine** keeps every conversation in the building and costs nothing to run.
- A model in the cloud — OpenAI, Claude, Mistral, DeepSeek, Groq and others — is charged per use. The program shows the price of each call in tokens and in money.

## Prompts

The list of **Prompts** below the models is the [Prompt Studio](prompt-studio.md): what is asked of the model, in what order, and for which kind of conversation.
