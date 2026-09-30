---
title: About
sidebar_position: 5
description: The version, updates, your country, the licence, what the usage report contains, the feedback form and what the program is built with.
---

**Settings → About** holds everything about the program itself.

<Shot name="20_settings_about" alt="Settings → About" />

## Version and country

At the top are the name, the **Version** (in the picture 1.0.0) and a link to the website, [ai-softphone.com](https://ai-softphone.com/).

**Country** tells the program where you are. It helps pick the best update server, and opens the way to language and speech services hosted in your country. **Detect automatically** fills it in.

## Updates

The tab says whether you have the newest version and when it was last checked. **Check for updates** checks now.

**Look for updates automatically**, on by default, checks once a day and shortly after the phone starts. It asks a server for one small file, and nothing is downloaded or installed without you saying so.

## Licence

The program is free software under the GPL-2.0-or-later. It comes with no warranty, and you may redistribute it under that licence's terms; the full text ships in the file named `LICENSE`.

## Telemetry

<Shot name="20b_settings_about_telemetry" alt="Settings → About: what the usage report contains" />

The tab lists what the usage report contains.

| | What is sent |
| --- | --- |
| **Always sent** | That the application was launched, its version and the interface language; the operating system version, locale, country and time zone. |
| **Sent as well, in Extended mode** | The counters of calls and of captured conversations; the vendor and the version of the connected softswitch, never its address; how many steps of the [Overview](../interface/settings-overview.md) are done, and the chosen layout. |
| **Never sent, in any mode** | The numbers you dialled or were called from; accounts, passwords, or anything from the keychain; contacts, conversations, transcripts or recordings; anything you typed, and any private data on the computer. |

Each installation makes one random identifier for itself, so that reports from the same copy of the program can be recognised as one. It is not derived from anything about you or your computer, and it names nobody — but because it lasts, the reports it carries can be linked to each other. That makes them pseudonymous rather than anonymous.

The basic report has a legitimate interest as its basis: knowing which versions are in use is what lets a fix reach the people who need it. Everything the extended report adds is there because you chose it, and you can change that here at any time.

### Reporting

| Choice | |
| --- | --- |
| **Extended** | The basic report and what *Sent as well* lists. Selected in the picture. |
| **Basic** | Only what is *Always sent*. |
| **Disabled** | No report at all. Available in the Enterprise edition only; the option is grey otherwise. |

## Feedback

<Shot name="20c_settings_about_bottom" alt="Settings → About: the feedback form and the components the program is built with" />

A form that writes to the developers without leaving the program.

| Field | |
| --- | --- |
| **Subject** and **Message** | What you want to say. |
| **Your name** and **Address for a reply** | Both are optional. Without an address there is no way to answer. |
| **Attach the log** | Adds the end of the log, about 512 kB. See [Diagnostics](../troubleshooting/diagnostics.md). |

**Send** stays grey until there is something to send.

## Built with

The components the program is built on, each with its licence: Qt 6 (GPL-2.0 or GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (public domain), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) and PulseAudio client (LGPL-2.1-or-later). Each is used under the licence beside it; where a component offers several, the one named is the one taken.
