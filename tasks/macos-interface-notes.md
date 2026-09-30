# Task: check the documentation against AI Softphone on macOS

For a Claude Code session running **on the Mac where AI Softphone is installed**,
in a clone of this repository.

The pages under `docs/` (English) and `i18n/ru/…/current/` (Russian) were written
from the screenshots published on https://ai-softphone.com/ and from the site's
text, because the program itself could not be seen. Two things are needed from
the running program: the tabs that are not described yet, and a check of what
was inferred.

## Before you start

- Screen capture needs **System Settings → Privacy & Security → Screen & System
  Audio Recording** for the app you run in; driving the program's interface
  needs **Accessibility** in the same place. If either is missing, stop and tell
  the person which one to switch on.
- **No real data in the pictures.** Add a test account with made-up details —
  name `Marlow Software`, username `204`, server `pbx.marlow.example` for
  English; `Ромашка Софт`, `204`, `pbx.romashka.example` for Russian — and switch
  the real accounts off or scroll them out of view. No real server addresses,
  numbers, names or passwords may appear. Look at every picture before committing
  it. Put the person's settings back when done.

## Notes to write: the tabs not described yet

For each of **Settings → Calls**, **Buttons**, **Recording**, **Capture**,
**Appearance**, **Startup**, **Shortcuts**, **Modules**, and for **Accounts →
Server settings** (expanded), write `notes/ui-<tab>.md` in **English and Russian
side by side**. For every control, from top to bottom:

- its label exactly as shown, and its tooltip or hint text if it has one;
- the kind of control (field, checkbox, drop-down, slider, button);
- for a drop-down: **every** option, in order;
- its default value on a fresh installation, if you can tell;
- for a button: what happens when it is pressed.

Be complete for **Server settings** and the codec list under **Calls** — they
become reference tables. Record the program's version (**Settings → About** or
wherever it is) at the top of each file.

## Things to confirm in the running program

Answer each in `notes/checks.md`, one line per item, in English and Russian:

1. The main window's buttons are icons only. What do their tooltips say — the
   circle, microphone, pause, transfer and keypad buttons of a call; the green,
   yellow and red buttons of a second incoming call; the round button on the
   conference card?
2. The icons beside the transcript drop-down in **Recordings** (sparkle,
   circular arrows, copy, disk, bin): tooltips and what each does.
3. What do **Type**, **Mark** and the **⋮** menu in **Recordings** offer, option
   by option?
4. Where does the **Diagnostics** window open from (**Settings → Diagnostics**
   tab, a menu, a key)? What is on the **Calls** tab of it?
5. How is a new account added — the label and place of the button?
6. What does **Disconnect** turn into after it is pressed?
7. Is **Capture** started automatically, by hand, or both, and where is that
   chosen? Which macOS permissions does the program ask for?
8. Are red tags in **Recordings** exactly the red flags?
9. How are a contact added and edited (**Add** in **Contacts**), and what does
   **History** show?

## Pictures (only for the tabs above)

Save into `static/screenshots/macos/<language>/<theme>/`, where `<language>` is
`en` and `ru` and `<theme>` is `light` and `dark`. Take the program's window only:

```sh
python3 - <<'PY'
import Quartz
for w in Quartz.CGWindowListCopyWindowInfo(Quartz.kCGWindowListOptionOnScreenOnly, Quartz.kCGNullWindowID):
    if 'Softphone' in (w.get('kCGWindowOwnerName') or ''):
        print(w['kCGWindowNumber'], w.get('kCGWindowName'), w['kCGWindowBounds'])
PY
screencapture -o -x -l <window-id> <file>.png
```

Keep the Settings window at its default size; where a tab is longer than the
window, take one picture per screenful: `settings-calls.png`, `settings-calls-2.png`, …
The program's language and theme change in **Settings → Appearance** without a
restart.

## When done

```sh
git add static/screenshots notes
git commit -m "Interface notes and screenshots from macOS, <version>"
git push
```

Then say it is pushed, and list anything you could not take.
