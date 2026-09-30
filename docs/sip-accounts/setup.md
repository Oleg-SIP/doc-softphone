---
title: Setting up a SIP account
sidebar_position: 1
description: Connect AI Softphone to your IP PBX or SIP provider in Settings → Accounts.
---

AI Softphone works with any IP PBX or SIP provider. You can be signed in on as many accounts (lines) as you have, and each account has its own settings.

Open **Settings → Accounts**.

<Shot name="05_settings_accounts" alt="Settings → Accounts: two accounts, both registered" />

## The list of accounts

Every account is a row with:

- a **checkbox** that switches the account on or off;
- a **dot** that is green when the account is registered on the PBX;
- the name, and under it `username@server`;
- a **Disconnect** button that signs the account out of the PBX;
- the **▲** and **▼** buttons that move the account up or down the list. The account chips in the [main window](../interface/main-window.md) follow the same order.

The **Add** button at the top right adds an account. Click a row to open its form under it.

## Adding an account

<Shot name="05d_account_add" alt="The form of a new account, empty" />

Press **Add**. An empty form opens under the list, with the cursor in **Name (optional)**. Fill in the fields below, open **Server settings** if the PBX needs them, and press **Save**. A new account starts with the usual values: UDP on port 5060, registration renewed every 300 seconds.

## The account form

<Shot name="05b_account_edit" alt="The form of an account" />

| Field | What to enter |
| --- | --- |
| **Name (optional)** | The name shown on the account's chip in the main window and on its calls. If it is empty, the account is shown as `username@server`. |
| **Username** | The username or extension number given by your PBX or provider. |
| **Password** | The password for it. The field stays empty when you come back to the form. It is kept in the computer's keyring, never in a settings file. |
| **Server address** | The address of the PBX or the provider's SIP server, for example `pbx.example.com`. |
| **Server settings** | Expands the less common settings of the connection; see below. |
| **Answer automatically** | Under **Answering**: answers incoming calls on this account without you pressing anything. Off by default. |

Press **Save** to keep the changes. **Cancel** drops them and **Delete** removes the account.

When the dot next to the account is green, the account is registered and the account's chip in the main window shows it too. If it stays grey or red, open [Diagnostics](../troubleshooting/diagnostics.md): the **SIP** tab shows the `REGISTER` request and what the server answered.

## Server settings

Most PBXs need nothing here. Press **Server settings** to show them; the same button now reads **Hide server settings**.

<Shot name="05c_account_server_settings" alt="The server settings of an account, expanded" />

| Field | Default | What it is |
| --- | --- | --- |
| **Authentication user** | empty | The name the PBX checks the password against, when it is not the same as the **Username**. In the picture the extension is `201` and the PBX authenticates it as `office201`. |
| **Transport** | UDP | The protocol of the connection to the server. A drop-down. |
| **Port** | 5060 | The port of the server. |
| **Outbound proxy** | empty | A proxy every request has to go through, if your provider gives one. |
| **Registrar** | empty | The address to register on, if it is not the **Server address**. |
| **Re-register, seconds** | 300 | How often the phone renews its registration. |
| **Keypad tones** | Audio stream | How the tones of the keypad are sent to the PBX. A drop-down. Change it only if the PBX does not hear the tones. |

The codecs the phone offers are not set per account; they are in [Calls settings](calls.md#audio-formats).
