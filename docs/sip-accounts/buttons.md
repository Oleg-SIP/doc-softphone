---
title: Buttons
sidebar_position: 4
description: "BLF buttons: one-touch buttons that dial an extension on your IP PBX and show whether it is free, ringing or busy."
---

Buttons are the softphone's **BLF** (Busy Lamp Field) keys, the same function a desk phone on an IP PBX has. A button dials an extension with one press. A button that watches its line also shows a lamp: the phone asks the PBX about that extension and shows whether it is free, ringing or busy, as a receptionist's console or the programmable keys of a desk phone do.

BLF needs support on the PBX side: the PBX has to report the state of the extension to the phone. Most IP PBXs do. If yours does not, the lamp stays grey and the button still dials.

The buttons stand under the account chips in the [main window](/interface/main-window), and **Settings → Buttons** is where you make them.

<Shot name="08_settings_buttons" alt="Settings → Buttons: two buttons" />

Each row is a button: the lamp, its label, and at the right its number and the account it belongs to — for example *212 · 201 Office*. **▲** and **▼** move the button up or down; the buttons in the main window follow this order. **Add** makes a new one.

## The lamp

A button that watches its line shows a lamp:

| Lamp | The line is |
| --- | --- |
| Green | free |
| Amber | ringing |
| Red | on a call |
| Grey | unknown: the switch will not say |

## Adding a button

<Shot name="08b_button_add" alt="The form of a new button" />

Press **Add**; a form opens under the list.

| Field | What to enter |
| --- | --- |
| **Number** | The number to dial. |
| **Line** | The account the call is placed on. Choose it first: to show the lamp, the phone asks that line's switch about this number, so it has to know which one. |
| **Label** | The text on the button, for example the person's name. |
| **Show whether this line is busy** | A switch. On, the button has a lamp. Off, it only dials. |

**Save** stays grey until the form is filled in. **Cancel** drops the form.

The part of the program that shows the buttons can be switched off in [Modules](/program/modules).
