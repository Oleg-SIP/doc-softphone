---
title: Common problems
sidebar_position: 2
description: "What to check when an account will not register, there is no sound, a call or a meeting is not recorded, there is no transcript, the prompter does not start, or a link, a hotkey or the API does nothing, and what the phone's own messages mean."
---

Each entry points to the setting that decides it. If the answer is not here, open [Diagnostics](/troubleshooting/diagnostics): it shows what the phone and the PBX say to each other.

## The account will not register

The dot next to the account in **Settings → Accounts** stays grey or red.

1. Check **Username**, **Password** and **Server address** in [the account form](/sip-accounts/setup).
2. If your PBX checks the password under another name than the extension, fill in **Authentication user** under **Server settings**.
3. Check **Transport** and **Port** against what the PBX expects.
4. Open the **SIP** tab of the [diagnostics window](/troubleshooting/diagnostics) and look at the `REGISTER` request and what the server answered.

## I cannot hear, or I cannot be heard

Open [Settings → Devices](/sip-accounts/devices).

- Say something: the bar under **Microphone** must move. If it does not, choose another microphone.
- Press **Test** under **Speakers** to hear a sound on the device you chose.
- Check the **Volume** sliders. **Mute** in the call card and the **Mute the microphone** [hotkey](/program/shortcuts) switch the microphone off during a call.
- The ringtone can be set to ring on a different device from the one you talk on — **Ringtone**, the second drop-down.

## The call sounds bad, or does not start

The codecs are offered in the order of the list under [Settings → Calls](/sip-accounts/calls#audio-formats). Leave on the codecs your PBX uses, and put the best of them first. A change applies from your next call.

## A second call does not ring

What happens when somebody rings while you are on a call is set under [Call waiting](/sip-accounts/calls#call-waiting).

## A call was not recorded

- **Settings → Recording**, the first drop-down, decides which calls are recorded; the default, **Manually**, records only when you press record on the call card. See [Recordings](/recordings).
- Recording starts when the call is answered, so a call that was not answered has no file.
- The **Recording** module must be on in [Modules](/application/modules).
- Recordings are removed by the limits under **Retention**; a pinned recording is never removed.

## A meeting in another application was not captured

See [Capture](/capture/).

- **Allow sound capture** in **Settings → Capture** must be on.
- With **Automatic start** set to **Ask me** (the default), answer the question when it appears; with **Never**, press the record button yourself.
- Use **Test** on the same tab: the upper bar must move when you speak, the lower when something plays.
- The **Capture** module must be on in [Modules](/application/modules).

## There is a recording, but no transcript or summary

- A conversation is transcribed and written up by itself only if **Process conversations automatically** is on in [Settings → Processing](/ai-processing/processing). Otherwise ask for it in the [Recordings window](/interface/recordings).
- There has to be a [recogniser](/ai-processing/transcription) and a [language model](/ai-processing/processing#language-models), and each has to answer at its address.
- When the monthly **Money limit** or **Token limit** is reached, the automatic rules stop until the month turns. Asking for something yourself is never stopped.
- The steps of [Settings → Overview](/interface/settings-overview) show what is still to set up.

## The prompter does not appear, or does not start

**Prompter** appears in the list at the foot of the phone only when three things are there: a recogniser with an **Address for the prompter** that passed its **Test** in [Settings → Transcription](/ai-processing/transcription#live-recognition-for-the-prompter), a language model, and the tick **Allow the prompter to be used** in [Settings → Prompter](/ai-processing/prompter). The **Prompter** module must be on in [Modules](/application/modules).

If the window opens but the prompter does not start, the line under its buttons says what is missing. [When it does not start](/interface/prompter#when-it-does-not-start) lists every message and what to do.

## The phone disappeared when I closed the window

With **Keep the phone running when the window is closed** on, the phone is still running, and calls still arrive. The icon in the notification area (the menu bar on macOS) brings the window back; on a desktop without a notification area the phone is minimised in the task bar. See [Startup](/program/startup).

## A phone number in a browser or a CRM does not call

Press **Open call links with this phone** in [Settings → Startup](/program/startup#call-links). A clicked number arrives in the dialler and waits there unless **Call straight away, without pressing Call** is on.

## A button's lamp stays grey

The PBX does not say whether the extension is free. The button still dials. See [Buttons](/sip-accounts/buttons).

## The REST API does not answer

- **Let other programs on this computer drive the phone** must be on in [Settings → Integration](/integration/rest-api), and the **Integration** module in [Modules](/application/modules).
- The address is `http://127.0.0.1:8377` unless you changed the **Port**.
- A group you did not open under **Access** answers every request with `404`.
- If you set a **Token**, requests that change stored data must carry it in the `Authorization` header.
- More symptoms are in [When it does not work](/integration/rest-api#when-it-does-not-work).

## Webhooks do not arrive

Press **Send a test event** in [Settings → Integration](/integration/webhooks). The counters `webhooks_failed_total` and `webhooks_dropped_total` of the REST API show how delivery is going; [When nothing arrives](/integration/webhooks#when-nothing-arrives) lists what each of them means.

## A hotkey does nothing

Open [Shortcuts](/program/shortcuts). A shortcut works while the phone is the program you are using; to use it from any program, tick **Everywhere**. Click the shortcut and press the combination again if another program has taken it.

## Messages the phone shows

When something does not happen, the phone says why in a line of its own. A line under a list goes away by itself after a few seconds.

### When a call is not placed

| Message | What to do |
| --- | --- |
| *No account is set up* | Add an account in [Settings → Accounts](/sip-accounts/setup). |
| *No account is switched on, so there is no line to call from.* | Tick the checkbox of an account in **Settings → Accounts**. |
| *No line is registered yet.* | The account is on but not yet registered on the PBX. Wait for its dot to turn green; if it does not, see [The account will not register](#the-account-will-not-register). |
| *As many calls are up as this phone will carry.* | Hang up one of the calls, then call again. |
| *The account this would have called from is no longer there.* | The row belongs to an account that has since been deleted. Dial the number in the dialler. |
| *This row has no number to call back.* | The caller hid the number, so there is nothing to call back. |

### When an account does not connect

| Message | What to do |
| --- | --- |
| *Could not find that server address. Check it for typing mistakes.* | Check **Server address** in [the account form](/sip-accounts/setup). |
| *Could not reach the server. Check the address, the port, and your network.* | Check **Server address**, and **Transport** and **Port** under **Server settings**. A firewall may also be stopping SIP. |
| *The server rejected this username or password.* | Check **Username** and **Password**. If the PBX checks the password under another name, fill in **Authentication user**. |
| *The server's certificate could not be verified. If the server's administrator made it themselves, untick Verify the certificate in Server settings.* | Shown for a TLS connection. If the PBX uses a certificate it made itself, untick **Verify the certificate** under **Server settings**. |
| *The password for this account could not be read from the keychain. Unlock it and connect again.* | Unlock the computer's keyring (the keychain on macOS), then press **Connect** on the account. |

### During a call

| Message | What to do |
| --- | --- |
| *No audio format in common* | The PBX and the phone have no codec in common. Turn on one the PBX uses in [Audio formats](/sip-accounts/calls#audio-formats). |
| *No microphone or speakers* | Choose the devices in [Settings → Devices](/sip-accounts/devices). |
| *Not recording: the disk is down to the space. Free some, or change the limit in Settings.* | The disk has reached the **Disk space threshold** of [Recordings](/recordings). Free some space, or lower the threshold. |

### When the phone starts

*Database cannot be read* means the database was made by a different version of the program, and this one cannot read it. Usually an older version was started on the data of a newer one: installing the newer version again opens it as it was. **Start again** makes an empty database instead — every contact and every call in the history is lost, and that cannot be undone. Before you press it, you can keep a copy of the database file; [Diagnostics](/troubleshooting/diagnostics#files) says where it is.
