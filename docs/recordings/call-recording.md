---
title: Recording calls
sidebar_position: 2
description: Which calls are recorded, what the other party is told, how conferences are saved and how long the files are kept.
---

**Settings → Recording** decides which calls become recordings, and for how long the files stay. A recorded call appears in the [Recordings window](recordings-window.md).

<Shot name="09_settings_recording" alt="Settings → Recording" />

## Recording

The drop-down chooses which calls are recorded; the default is **Every call**.

Recording starts when the call is answered and never before, so ringing and the numbers you dial are not in the file. A call is one stereo file: you on one channel and everybody else on the other.

## Consent

The drop-down chooses what the other party is told about the recording. The default is **Nothing at all**.

:::caution
In many places — most of Europe, and several American states — recording a conversation without telling the other party is against the law. This is your decision to make, and the program says so under the drop-down.
:::

## Conferences

**A file for each person**, on by default. In a conference the second channel is a mix of everybody, so an extra file per person is what lets a transcript say who said what.

## Retention

<Shot name="09b_settings_recording_scrolled" alt="Settings → Recording: retention" />

| Setting | Default | What it limits |
| --- | --- | --- |
| **Storage period** | Always | How long a recording is kept. |
| **Storage limit** | No limit | How much room all recordings may take together. |
| **Per-person files** | Always | How long the extra files of a conference are kept. |
| **Disk space threshold** | 500 MB | A floor for the free space on the disk. Recordings you have not pinned can be removed to stay above it. |

A recording you have pinned is never deleted by any of these, and it still counts towards the limit. An hour of conversation takes about 30 MB.

The part of the program that records calls, and tells the other party about it, can be switched off in [Modules](../program/modules.md).

To record a meeting held in another application, see [Setting up external recording](../external-recording/setup.md).
