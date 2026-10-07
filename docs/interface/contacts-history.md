---
title: Contacts and history
sidebar_position: 3
description: The address book and the call log, beside the phone.
---

**Contacts** and **History** open as two tabs on the right of the phone, so you can look a number up while you talk.

## Contacts

<Shot name="03_contacts" alt="The Contacts tab" />

- **Search** filters the list as you type.
- **Add** creates a contact.
- Each contact is listed with a name and, under it, the number and the account the contact is called through, for example *231 · 201 Office*.

An incoming call from a known number shows the contact's name, and so do the lists of recent calls and of the call log — that is how caller ID matching works.

### Editing a contact

<Shot name="03b_contact_edit" alt="A contact open for editing" />

Select a contact to show a pencil and a handset at the right of its row. The handset calls the contact; the pencil opens the form under the row:

| Field | What to enter |
| --- | --- |
| **Name** | How the contact is shown. |
| **Number** | The number to dial. |
| Drop-down under **Number** | The account the contact is called through. |

**Save** keeps the changes, **Cancel** drops them and **Delete** removes the contact.

## History

<Shot name="21_history" alt="The History tab" />

The call log, newest first. At the top:

- the drop-down, **All calls** by default, narrows the list to one kind of call;
- **Search** filters by what you type.

Each entry has an icon for the kind of call — an outgoing handset, or a red handset with a clock for a call you missed — the name of the other party (or the number), and under it the date, what became of the call, its length, the number and the account. Recent calls are shown as *Yesterday, 22:33* or a weekday, older ones with the date.

| What became of the call | Shown as |
| --- | --- |
| You spoke | **Outgoing** or incoming, and the length, for example *48 s* |
| An incoming call was not answered | **Missed** |
| A call you placed was not connected | **Did not go through** |

Select an entry to show four buttons at its right:

| Button | Does |
| --- | --- |
| Person with a plus | Adds the number to [Contacts](#contacts). |
| ▶ | Plays the recording of the call, if it was recorded. |
| Bin | Deletes the entry. |
| Handset | Calls the number back. |

### How long the log is kept

A call log is evidence, so nothing is removed from it unless you say so: the default is to keep every call. The storage period and the **Clear the call history** button are in [Calls settings](../sip-accounts/calls.md#history).

Missed and declined calls can also be read through the [local REST API](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
