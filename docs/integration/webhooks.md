---
title: Webhooks
sidebar_position: 2
description: Have the phone notify your CRM or another system when a call starts, changes or ends.
---

Webhooks tell another system about calls as they happen — for example, so that a CRM can open the customer's record before the second ring. They need no inbound firewall rules, and they are **off by default**.

## Turning them on

In **Settings → Integration**, under **Webhooks**:

1. Enter the **endpoint URL** that should receive the events.
2. Choose the method, **POST** or **GET**.
3. Choose which events to send.
4. Optionally set a custom header — a name and a value — that your receiver can check. The value is kept in the operating system's keychain.
5. Press **Send a test event** to see that it arrives.

## Events

| Event | Sent when |
| --- | --- |
| `call-started` | An incoming call starts ringing or an outgoing call is placed. |
| `call-state-changed` | The call's `state` changes: it is answered, put on hold or resumed. |
| `call-ended` | The call has ended. |

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
