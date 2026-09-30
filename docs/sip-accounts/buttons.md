---
title: Buttons
sidebar_position: 4
description: One-touch buttons that dial a number and show whether the line is free, ringing or busy.
---

A button dials its number with one press. A button that watches its line also shows a lamp. They stand under the account chips in the [main window](/interface/main-window), and **Settings → Buttons** is where you make them.

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
