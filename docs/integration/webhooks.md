---
title: Webhooks
sidebar_position: 2
description: Have the phone notify your CRM or another system when a call starts, changes or ends.
---

Webhooks tell another system about calls as they happen — for example, so that a CRM can open the customer's record before the second ring. They need no inbound firewall rules, and they are **off by default**.

## Turning them on

In **Settings → Integration**, under **Webhooks**:

<Shot name="17_settings_integration" alt="Settings → Integration: webhooks" />

1. Turn on **Tell another system about calls**. A request is sent for each event you tick below.
2. Enter the **Address** that should receive the events, for example `http://crm.local/calls`.
3. Choose the **Method**, **POST** (the default) or **GET**.
4. Under **Events** tick what to send: **A new call**, **A call ending**, **A call changing state**.
5. Optionally, under **Authorization**, set a header — a **Header name** (`Authorization` is suggested) and a **Header value** — that your receiver can check. The value is kept in the computer's keyring, never in a settings file.
6. Press **Send a test event** to see that it arrives. It sends one event for a call that never happened.

## Events

| Event | Ticked as | Sent when |
| --- | --- | --- |
| `call-started` | **A new call** | An incoming call starts ringing or an outgoing call is placed. |
| `call-state-changed` | **A call changing state** | The call's `state` changes: it is answered, put on hold or resumed. |
| `call-ended` | **A call ending** | The call has ended. |

## What is sent

```json
{
  "event": "call-started",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "direction": "in",
  "state": "ringing-in",
  "number": "+15551234567",
  "name": "Jane Miller",
  "uri": "sip:+15551234567@pbx.example.com",
  "account": "1001@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "event_ts": "1788788890412",
  "callstart_ts": "1788788890398",
  "callstate_ts": "1788788890398",
  "duration_s": "0",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f"
}
```

**Every value is a string**, numbers and timestamps included.

| Field | Meaning |
| --- | --- |
| `event` | `call-started`, `call-state-changed` or `call-ended`. |
| `id` | The call. |
| `direction` | `in` or `out`. |
| `state` | `dialing`, `ringing-out`, `ringing-in`, `active`, `hold`, `onhold`, `conference` or `ended`. |
| `number`, `name`, `uri` | The other party. |
| `account`, `account_id` | The account the call is on. |
| `event_ts`, `callstart_ts`, `callstate_ts` | Unix time in milliseconds (UTC). |
| `duration_s` | Length of the call in seconds. |
| `reason` | Why the call ended: `local-hangup`, `remote-hangup`, `busy`, `no-answer` or `cancelled`. |
| `answered_by` | `no` if the call was not answered, otherwise who answered it. |
| `seance_id` | An identifier of the conversation. |

Names follow one convention: `_id` is an identifier, `_ts` is Unix time in milliseconds, `_s` is a length in seconds.

The counters `webhooks_delivered_total`, `webhooks_failed_total` and `webhooks_dropped_total` of the [REST API](rest-api.md) show how delivery is going.
