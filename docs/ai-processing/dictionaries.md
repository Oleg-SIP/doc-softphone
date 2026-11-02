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

| Name | Code | `severity` | Used for |
| --- | --- | --- | --- |
| **Angry customer** | `angry-customer` | `high` | The other party was audibly angry, insulting, or threatened to leave. |
| **Churn risk** | `churn-risk` | `high` | Cancelling, not renewing or moving to somebody else was raised, however calmly. |
| **Promise made** | `promise-made` | `medium` | Our side committed to something specific — a date, a price, a fix, a refund. |
| **Sensitive data** | `sensitive-data` | `high` | A card number, a password, a document number or anything else that should not be in a recording was read out. |
| **Competitor** | `competitor` | `low` | The other party named or compared us with somebody else offering the same thing. |

## Instructions

<Shot name="13b_settings_dictionaries_scrolled" alt="Settings → Dictionaries: answer shapes and language instructions" />

*What is added to every prompt about the shape of the answer and the language to write it in.* They are kept here so that every prompt can use the same wording, and you can change them like any other entry — or write your own, such as *answer briefly* or *never quote a price*, and tick it under **Also send** on any prompt.

| Name | Code | What it tells the model |
| --- | --- | --- |
| **Prose** | `shape-plain` | Answer in plain prose, without JSON, lists or headings. |
| **Items** | `shape-list` | Answer with a list of things to do, each with who and when. |
| **Labels** | `shape-labels` | Answer in JSON with a list of codes and how sure it is of each, using only codes from the list it was given. |
| **Score** | `shape-score` | Answer with a score, the reason for it and the words it is based on. |
| **Rubric** | `shape-rubric` | Answer with an overall score and a score for each criterion. |
| **Flags** | `shape-flags` | Answer with codes from the list, each with a severity. |
| **Answer** | `shape-qa` | Answer with the reply, or say plainly that the conversation does not say, and the words the reply rests on. |
| **JSON** | `shape-json` | Answer with JSON only, in the shape asked for above. |
| **As spoken** | `language-as-spoken` | Write in the language the conversation was in. |
| **As spoken, named** | `language-as-spoken-named` | The same, naming the language. |
| **A named language** | `language-named` | Write in the language you name. |

**Add** at the top of the list adds an entry.

## Defaults

**Restore defaults** puts every dictionary back as it came with the program, in the current interface language. What your conversations are already filed under is left alone.

## Response formats {#response-formats}

These blocks reproduce the shipped instructions. They describe answer formats; alternatives such as “or” are notation, not executable JSON examples.

### Prose (`shape-plain`) {#shape-plain}

```text
Answer in plain prose. Do not use JSON, lists or headings.
```

### Items (`shape-list`) {#shape-list}

```text
Answer with JSON only, of exactly this shape:
{"items": [{"text": "what is to be done", "owner": "who, or empty", "due": "when, or empty"}]}
Use an empty array when there is nothing to list. Do not write anything outside the JSON.
```

### Labels (`shape-labels`) {#shape-labels}

```text
Answer with JSON only, of exactly this shape:
{"labels": [{"code": "a code from the list you were given", "confidence": 0.0}]}
Use only codes from the list. Use an empty array when none of them fits. Do not
invent a code, and do not write anything outside the JSON.
```

### Score (`shape-score`) {#shape-score}

```text
Answer with JSON only, of exactly this shape:
{"score": 3, "rationale": "why that number and not one higher",
 "evidence": [{"at_ms": 0, "quote": "the words you based it on"}]}
The score is a whole number from 1 to 5. Do not write anything outside the JSON.
```

### Rubric (`shape-rubric`) {#shape-rubric}

```text
Answer with JSON only, of exactly this shape:
{"overall": 3, "rationale": "why that number and not one higher",
 "criteria": [{"name": "the criterion as it was given to you",
               "verdict": "pass" or "weak" or "fail" or "n/a",
               "note": "one sentence"}]}
Judge every criterion you were given and no others. The overall score is a whole
number from 1 to 5. Do not write anything outside the JSON.
```

### Flags (`shape-flags`) {#shape-flags}

```text
Answer with JSON only, of exactly this shape:
{"flags": [{"code": "a code from the list you were given",
            "severity": "low" or "medium" or "high",
            "evidence": "the words you based it on",
            "at_ms": 0}]}
Use only codes from the list, and raise each one at most once. Use an empty
array when nothing applies. Do not write anything outside the JSON.
```

### Answer (`shape-qa`) {#shape-qa}

```text
Answer with JSON only, of exactly this shape:
{"answer": "your answer, or say plainly that the conversation does not say",
 "citations": [{"at_ms": 0, "quote": "the words your answer rests on"}]}
Do not answer from anything but the conversation. Do not write anything outside
the JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Answer with JSON only, in the shape asked for above. Do not write anything outside the JSON.
```

### As spoken (`language-as-spoken`) {#language-as-spoken}

```text
Write your answer in the same language the conversation was in.
```

### As spoken, named (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Write your answer in the same language the conversation was in, which is {language}.
```

### A named language (`language-named`) {#language-named}

```text
Write your answer in this language: {language}.
```
