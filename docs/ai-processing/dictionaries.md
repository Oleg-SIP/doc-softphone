---
title: Dictionaries
sidebar_position: 4
description: Your own categories, tags and red flags — the words your conversations are filed under.
---

**Settings → Dictionaries** holds the words a conversation may be filed under, labelled with, or flagged for. These lists are what the models are shown and what they must choose from, so an answer is always something you can search for later.

<Shot name="13_settings_dictionaries" alt="Settings → Dictionaries" />

**Show deleted** shows the entries you have deleted.

Each entry is a name, a short code in small type and a description that tells the model when to choose it. The code is what is stored and what the [REST API](../integration/rest-api.md#taxonomy-and-settings) returns, so it stays the same when you rename the entry.

## Categories

What the conversation was about; **one is chosen per conversation**. The program starts with four:

| Name | Code | Used for |
| --- | --- | --- |
| **Sales** | `sales` | Selling, quoting, negotiating or following up on a purchase — including a customer asking what something costs. |
| **Support** | `support` | Helping somebody with a product or a service they already have: a fault, a question about using it, a complaint about how it works. |
| **Personal** | `personal` | Not business at all — a private conversation that happened to be made on this line. |
| **Other** | `other` | Business, but neither selling nor supporting: a supplier, a colleague, a delivery, a wrong number. Choose this rather than guessing between the others. |

Press **Add** to add a category of your own.

## Tags

Labels that *may all be true of the same conversation*. Press **Add** to add one. The list starts with entries such as:

| Name | Code | Used for |
| --- | --- | --- |
| **Callback promised** | `callback` | Somebody on this call promised to ring back, or asked to be rung back. |
| **Complaint** | `complaint` | The other party expressed dissatisfaction, whether or not it was resolved. |
| **Escalated** | `escalation` | The call was handed to somebody else, or the other party asked for it to be. |
| **VIP customer** | `vip` | The other party was treated as, or said they were, an important account. |

## Red flags

Things that need attention, found in the conversation with the evidence and the time — for example *Angry customer* or *Churn risk*. Red flags are drawn in red in the [Recordings window](../interface/recordings.md), and each carries a severity: low, medium or high.

## Answer shapes and language

<Shot name="13b_settings_dictionaries_scrolled" alt="Settings → Dictionaries: answer shapes and language instructions" />

Further down the tab are the instructions the prompts are assembled from. They are kept here so that every prompt can use the same wording, and you can change them like any other entry.

| Name | Code | What it tells the model |
| --- | --- | --- |
| **Labels** | `shape-labels` | Answer in JSON with a list of codes and how sure it is of each, using only codes from the list it was given. |
| **Score** | `shape-score` | Answer with a score, the reason for it and the words it is based on. |
| **Rubric** | `shape-rubric` | Answer with an overall score and a score for each criterion. |
| **Flags** | `shape-flags` | Answer with codes from the list, each with a severity. |
| **Answer** | `shape-qa` | Answer with the reply, or say plainly that the conversation does not say, and the words the reply rests on. |
| **JSON** | `shape-json` | Answer with JSON only, in the shape asked for above. |
| **As spoken** | `language-as-spoken` | Write in the language the conversation was in. |
| **As spoken, named** | `language-as-spoken-named` | The same, naming the language. |
| **A named language** | `language-named` | Write in the language you name. |

**Add** at the end of the list adds an entry.

## Defaults

**Restore defaults** puts every dictionary back as it came with the program, in the current interface language. What your conversations are already filed under is left alone.
