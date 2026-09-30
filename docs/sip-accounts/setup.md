---
title: Setting up a SIP account
sidebar_position: 1
description: Connect AI Softphone to your IP PBX or SIP provider in Settings → Accounts.
---

AI Softphone works with any IP PBX or SIP provider. You can be signed in on as many accounts (lines) as you have, and each account has its own settings.

Open **Settings → Accounts**.

![Settings → Accounts](https://ai-softphone.com/screenshots/macos/en/light/accounts.png)

## The list of accounts

Every account is a row with:

- a **checkbox** that switches the account on or off;
- a **dot** that is green when the account is registered on the PBX;
- the name, and under it `username@server`;
- a **Disconnect** button that signs the account out of the PBX;
- the **▲** and **▼** buttons that move the account up or down the list.

Click a row to open its form under it.

## The account form

| Field | What to enter |
| --- | --- |
| **Name (optional)** | The name shown on the account's chip in the main window and on its calls. If it is empty, the account is shown as `username@server`. |
| **Username** | The username or extension number given by your PBX or provider. |
| **Password** | The password for it. It is kept in your system keychain, never in a file. |
| **Server address** | The address of the PBX or the provider's SIP server, for example `pbx.example.com`. |
| **Server settings** | Expands the less common settings of the connection. |
| **Answer automatically** | Under **Answering**: answers incoming calls on this account without you pressing anything. Off by default. |

Press **Save** to keep the changes. **Cancel** drops them and **Delete** removes the account.

When the dot next to the account is green, the account is registered and the account's chip in the main window shows it too. If it stays grey or red, open [Diagnostics](../troubleshooting/diagnostics.md): the **SIP** tab shows the `REGISTER` request and what the server answered.

:::note
The fields inside **Server settings** are not described in this documentation yet.
:::
