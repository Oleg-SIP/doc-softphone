# Task: screenshots and interface notes from AI Softphone on macOS

For a Claude Code session running **on the Mac where AI Softphone is installed**,
in a clone of this repository, on branch `claude/gracious-thompson-x2sylq`.

The documentation needs windows of the program that the product site does not
show, and the exact wording of every field in them. You take the pictures and
write the notes; the articles are written elsewhere from what you push.

## Before you start

- `git pull` on `claude/gracious-thompson-x2sylq`.
- Screen capture needs **System Settings → Privacy & Security → Screen & System
  Audio Recording** for the app you run in (Terminal, iTerm or Claude). Driving
  the program's interface needs **Accessibility** in the same place. If either
  is missing, stop and tell the person which one to switch on.
- **No real data in the pictures.** Before shooting, add a test account with
  made-up details — name `Marlow Software`, username `204`, server
  `pbx.marlow.example` for English; `Ромашка Софт`, `204`,
  `pbx.romashka.example` for Russian — and switch the real accounts off
  (checkbox) or make sure they are scrolled out of view. No real server
  addresses, numbers, names or passwords may appear. Look at every picture
  before committing it. Put the person's settings back when done.

## How to take a picture

Take the program's window only, without its shadow:

```sh
# the window id of AI Softphone's frontmost window
osascript -e 'tell application "System Events" to get id of window 1 of (first process whose name contains "Softphone")' 2>/dev/null
# if that gives no usable id, use Python/Quartz:
python3 - <<'PY'
import Quartz
for w in Quartz.CGWindowListCopyWindowInfo(Quartz.kCGWindowListOptionOnScreenOnly, Quartz.kCGNullWindowID):
    if 'Softphone' in (w.get('kCGWindowOwnerName') or ''):
        print(w['kCGWindowNumber'], w.get('kCGWindowName'), w['kCGWindowBounds'])
PY
screencapture -o -x -l <window-id> <file>.png
```

If driving the interface from a script does not work, ask the person to open the
right tab, then take the picture yourself.

Keep the Settings window at its default size. Where a tab is longer than the
window, take one picture per screenful and number them: `settings-calls.png`,
`settings-calls-2.png`, …

## What to take

Save into `public/screenshots/macos/<language>/<theme>/`, where `<language>` is
`en` and `ru` and `<theme>` is `light` and `dark` — four copies of each picture.
The program's language and theme are under **Settings → Appearance** and change
without a restart.

| File | What it shows |
| --- | --- |
| `settings-accounts-new.png` | **Settings → Accounts** at the moment a new account is being added: the button that adds it, and the empty form. |
| `settings-accounts-server.png` | **Settings → Accounts**, the test account open, **Server settings** expanded — every field of it visible (more than one picture if needed). |
| `settings-devices.png` | **Settings → Devices**, the whole tab. |
| `settings-calls.png` | **Settings → Calls**, the whole tab, including the codec list. |
| `settings-buttons.png` | **Settings → Buttons**, the whole tab (BLF, if it is there). |
| `settings-recording.png` | **Settings → Recording**, the whole tab. |
| `settings-capture.png` | **Settings → Capture**, the whole tab. |
| `settings-diagnostics.png` | **Settings → Diagnostics**, the tab itself (not the Diagnostics window). |

If BLF lives somewhere other than **Buttons**, take that place instead and say
so in the notes.

## The notes

For each tab above, write `notes/ui-<tab>.md` in **English and Russian side by
side** (the program is in both). For every control, in order from top to bottom:

- its label exactly as shown, and its tooltip or hint text if it has one;
- what kind of control it is (field, checkbox, drop-down, slider, button);
- for a drop-down: **every** option in it, in order;
- its default value on a fresh account or installation, if you can tell;
- for a button: what happens when it is pressed (a dialog, a list that opens…).

For **Server settings** and **Calls → codecs** be complete: these become
reference tables. Also note how a new account is added (the button's label and
where it is), what **Disconnect** turns into after it is pressed, and where the
Diagnostics window with the SIP log is opened from.

Record the program's version (**Settings → About**) at the top of each notes file.

## When done

```sh
git add public/screenshots notes
git commit -m "Screenshots and interface notes from macOS, <version>"
git push origin claude/gracious-thompson-x2sylq
```

Then tell the person it is pushed, and list anything you could not take.
