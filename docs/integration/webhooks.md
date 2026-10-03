---
title: Webhooks
sidebar_position: 1
description: "Have the phone send your CRM or another system a request when a call starts, changes or ends, with the exact requests of an incoming call."
---

A webhook is a request the phone sends to an address of your choice every time something happens to a call. It is how a CRM can open the customer's card before the second ring, log a call when it ends, or light a lamp on a wallboard. A webhook needs no inbound firewall rules: the phone calls out to you.

Webhooks are **off** until you turn them on.

## Turning them on

Open **Settings → Integration**. **Webhooks** is the first section of the tab.

<Shot name="24_webhooks" alt="Settings → Integration → Webhooks, with https://crm.local/calls as the address" />

1. Tick **Tell another system about calls**. *A request is sent for each event you tick below.*
2. Enter the **Address** that should receive the events, for example `https://crm.local/calls`.
3. Choose the **Method**: **POST** (the default) or **GET**.
4. Under **Events** tick what to send: **A new call**, **A call ending**, **A call changing state**.
5. Optionally, under **Authorization**, set a header that your receiver can check: a **Header name** (`Authorization` is suggested) and a **Header value**. The value is kept in the computer's keyring, never in a settings file; once saved, the field shows *Saved — type to replace it*.
6. Press **Send a test event** to see that it arrives. It sends one event for a call that never happened.

The part of the program that sends the requests is the **Integration** module; it can be switched off in [Modules](/application/modules).

## The events

| Ticked as | Event | Sent when |
| --- | --- | --- |
| **A new call** | `call-started` | An incoming call starts ringing or an outgoing call is placed. |
| **A call changing state** | `call-state-changed` | The call's `state` changes: it is answered, put on hold or resumed. |
| **A call ending** | `call-ended` | The call has ended. |

## What the request looks like

With the address `https://crm.local/calls` and the method **POST**, the phone sends this. The body is JSON, and the header is the one you set under **Authorization**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

The `User-Agent` carries the version of the program and the way it was installed.

## An incoming call, event by event

A call from extension `1020` to the account `1002` rings, is answered, and is hung up by the person who answered it four seconds later. With all three events ticked, the receiver gets three requests, one after another. They all carry the same `id` and `seance_id`.

### 1. It rings: `call-started`

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021263333",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791021263333",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

This is the moment to look the caller up by `number` and show the customer's card. `state` is `ringing-in` and `duration_s` is `0`.

### 2. It is answered: `call-state-changed`

About three seconds later:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021266126",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791021266131",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` is now `active`, and `callstate_ts` has moved on to the moment of the change while `callstart_ts` stays where it was.

### 3. It ends: `call-ended`

Four seconds of conversation later:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021270400",
  "dialed": "",
  "direction": "in",
  "duration_s": "4",
  "event": "call-ended",
  "event_ts": "1791021270406",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` is `ended`, `duration_s` is the length of the conversation, and `reason` says who ended it: `local-hangup` here, because the person at this phone hung up.

## An outgoing call, event by event

The same extension is called from the account `1002`: the person dials `1020`, the phone rings, the other side answers, talks for seven seconds and hangs up. The receiver gets four requests, one more than for an incoming call, because an outgoing call has a state of its own while it is ringing at the other end.

### 1. It is dialled: `call-started`

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791023883072",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "dialing",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`direction` is `out`, `state` is `dialing`, and `dialed` holds the number as it was dialled. The phone does not know the name of the other party yet, so `name` is empty.

### 2. It rings at the other end: `call-state-changed`

Half a second later:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883591",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023883591",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ringing-out",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`state` is `ringing-out`.

### 3. The other side answers: `call-state-changed`

Four seconds after that:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023887072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023887076",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` is `active`. The `name` is now filled in, and the `uri` is the address of the party as the answer reported it. `duration_s` is still `0`: it counts from this moment.

### 4. It ends: `call-ended`

Seven seconds later the other side hangs up:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023894781",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "7",
  "event": "call-ended",
  "event_ts": "1791023894789",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`duration_s` is `7`, and `reason` is `remote-hangup`, because the other side ended the call. When you hang up yourself, it is `local-hangup`, as in the incoming call above.

### The states, side by side

| | Incoming call | Outgoing call |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, then `active` |
| `call-ended` | `ended` | `ended` |

## The fields

**Every value is a string**, numbers and timestamps included. The names follow one convention: `_id` is an identifier, `_ts` is Unix time in milliseconds (UTC), `_s` is a length in seconds.

| Field | Meaning |
| --- | --- |
| `event` | `call-started`, `call-state-changed` or `call-ended`. |
| `id` | The call. The same in every event of the call. |
| `seance_id` | The conversation the call belongs to. |
| `direction` | `in` or `out`. |
| `state` | `dialing`, `ringing-out`, `ringing-in`, `active`, `hold`, `onhold`, `conference` or `ended`. |
| `number`, `name`, `uri` | The other party: the number, the name and the SIP address. The `name` can be empty at first and be filled in later in the call, as in the outgoing call above. |
| `dialed` | The number as it was dialled, for an outgoing call; empty for an incoming call. |
| `account`, `account_id` | The account the call is on: `username@server`, and the identifier of the account. |
| `event_ts` | When this event was sent. |
| `callstart_ts` | When the call started. |
| `callstate_ts` | When the call last changed its `state`. |
| `duration_s` | The length of the conversation, counted from the moment the call is answered; `0` until then. |
| `reason` | `none` while the call goes on; when it ends, why: `local-hangup`, `remote-hangup`, `busy`, `no-answer` or `cancelled`. |
| `answered_by` | `no` when nobody answered the call for you. The calls on this page were answered by hand. |

## Receiving the events

A receiver reads the JSON body and acts on `event`. For example, in Node.js with Express:

```javascript
app.post('/calls', express.json(), (req, res) => {
  const call = req.body;               // every value is a string
  if (call.event === 'call-started' && call.direction === 'in') {
    openCustomerCard(call.number, call.name);
  }
  if (call.event === 'call-ended') {
    logCall(call.id, Number(call.duration_s), call.reason);
  }
  res.sendStatus(200);
});
```

Check the header you set under **Authorization** before you trust a request.

To see the requests before the CRM is ready, point **Address** at an online request inspector and press **Send a test event**.

The counters `webhooks_delivered_total`, `webhooks_failed_total` and `webhooks_dropped_total` of the [REST API](/integration/rest-api#metrics) show how delivery is going.
