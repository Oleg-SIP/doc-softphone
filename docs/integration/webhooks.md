---
title: Webhooks
sidebar_position: 1
description: "Have the phone send your CRM or another system a request when a call starts, changes or ends — with the exact requests of an incoming and an outgoing call."
---

A webhook is a request the phone sends to an address of your choice every time something happens to a call. It is how a CRM can open the customer's card before the second ring, log a call when it ends, or light a lamp on a wallboard. A webhook needs no inbound firewall rules: the phone calls out to you. Because the requests are sent from the workstation, the address only has to be reachable from that computer — an internal `http://crm.local/calls` works as well as a public HTTPS address.

Webhooks are **off** after installation, until you turn them on. They work alongside the [local REST API](/integration/rest-api): an event says that something changed, the API gives the current details.

## Turning them on

Open **Settings → Integration**. **Webhooks** is the first section of the tab.

<Shot name="24_webhooks" alt="Settings → Integration → Webhooks, with https://crm.local/calls as the address" />

1. Tick **Tell another system about calls**. *A request is sent for each event you tick below.*
2. Enter the **Address** that should receive the events, for example `https://crm.local/calls`.
3. Choose the **Method**: **POST** (the default) or **GET**.
4. Under **Events** tick what to send: **A new call**, **A call ending**, **A call changing state**.
5. Optionally, under **Authorization**, set a header that your receiver can check: a **Header name** (`Authorization` is suggested) and a **Header value**. The value is kept in the computer's keyring, never in a settings file; once saved, the field shows *Saved — type to replace it*.
6. Press **Send a test event** to see that it arrives. It sends one event for a call that never happened, with the same headers as a real one. Log the raw request and build your receiver against what your version actually sends.

The part of the program that sends the requests is the **Integration** module; it can be switched off in [Modules](/application/modules).

## The events

| Ticked as | Event | Sent when |
| --- | --- | --- |
| **A new call** | `call-started` | An incoming call starts ringing or an outgoing call is placed. |
| **A call changing state** | `call-state-changed` | The call's `state` changes: it is answered, put on hold or resumed by either side, or joins or leaves a conference. Muting does not send it. |
| **A call ending** | `call-ended` | The call has ended. |

Each event can be ticked on its own. A screen pop needs only the first; a call log only the last. `call-started` is sent first and should be handled quickly.

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

**Every value is a string**, numbers and timestamps included: `"duration_s": "42"`. A moment that is not known is an empty string. The names follow one convention: `_id` is an identifier, `_ts` is Unix time in milliseconds (UTC), `_s` is a length in seconds — the same as in the REST API, where the values are JSON numbers.

| Field | Meaning |
| --- | --- |
| `event` | `call-started`, `call-state-changed` or `call-ended`. |
| `id` | The call: the same UUID as in `GET /calls` and `/calls/{id}/…`, and the same in every event of the call. |
| `seance_id` | The conversation the call belongs to; see [below](#one-conversation-across-transfers). |
| `direction` | `in` or `out`. |
| `state` | The same values as in `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (held by this phone), `onhold` (held by the other party), `conference` or `ended`. |
| `number` | The other party's number. Match your CRM records on this field. |
| `name` | The other party's name, from Contacts; it may be empty, and may be filled in later in the call, as in the outgoing call above. |
| `uri` | The other party's SIP address. |
| `dialed` | The digits dialled, for an outgoing call; empty for an incoming call. |
| `account`, `account_id` | The line the call is on: `username@server`, and the identifier from `GET /accounts`. |
| `event_ts` | When the event happened. |
| `callstart_ts` | When the phone first learned of the call. |
| `callstate_ts` | When the call entered its current `state`. |
| `duration_s` | Talk time in seconds, from answer to hang-up. Set on `call-ended` for an answered call; `0` otherwise. |
| `reason` | How the call ended: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; `none` until then. |
| `answered_by` | `no` if a person answered the call; otherwise what answered it. |

## One conversation across transfers

`seance_id` groups the calls that make up one conversation. A call placed or received from scratch starts a new one. A call created by a transfer, a call that replaces another, a consultation about a call and every call joined into a conference keep the `seance_id` of the call they came from.

Between phones it travels in the SIP header `X-Seance-Id`: when a call is transferred to a colleague who also uses AI Softphone, and the PBX passes the header on, both workstations report the same `seance_id`.

## GET instead of POST

**GET** is for receivers that cannot take a request body, such as an older CRM or a script bridge. The same fields are then sent as query parameters.

With **GET** the address can be a template: each `[field]` is replaced by the value of that field, percent-encoded. For example:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

The placeholders use the field names above. Templates saved with the earlier names (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) keep working.

## How the events are delivered

| Behaviour | What it means for you |
| --- | --- |
| Events are queued, not sent from the call itself | A slow receiver never delays ringing, calls or transfers. |
| A full queue drops events | If your receiver stops answering, events are lost but the telephone keeps working. Watch `webhooks_dropped_total`. |
| Refused and unreachable deliveries are counted | `webhooks_failed_total` rising while `webhooks_delivered_total` stands still points at the receiver. |
| Events arrive in order | Call started, then the state changes, then call ended. To order events you have stored, use `callstate_ts`, not the time they arrived. |
| At least once | The same event can come twice. `id`, `event` and `callstate_ts` together identify an event: make your handler skip one it has seen. |

## Receiving the events

The one rule for a receiver: **answer `200` at once, and do the work afterwards.** A slow receiver does not slow the phone down, but it fills the queue, and a full queue drops events.

For example, in Node.js with Express:

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // the Header value from Settings

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST sends a JSON body, GET sends query parameters
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // answer first

  setImmediate(() => {                          // then do the work
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // your code
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // your code
    }
  });
});

app.listen(8080);
```

To log the outcome of a call — answered, missed, declined — take the entry with the same `seance_id` and `number` from `GET /history?limit=20` of the [REST API](/integration/rest-api#call-history-get-history). When your service starts again after a pause, read `GET /history?limit=200` and store what you missed: webhooks for real time, the history to fill the gaps.

To see the requests before the CRM is ready, point **Address** at an online request inspector and press **Send a test event**.

## When nothing arrives

| Symptom | What to check |
| --- | --- |
| No webhooks at all | Press **Send a test event**. If it arrives, the events you need are not ticked; if not, the address is wrong or not reachable from the workstation. |
| `webhooks_failed_total` keeps rising | The receiver refuses the requests or cannot be reached. Check its log, and whether it answers a simple request from the workstation. |
| `webhooks_dropped_total` is above zero | The receiver was too slow for too long and the queue filled up. Answer `200` first, then process. |
| The same event twice | Expected with at-least-once delivery. Treat events with the same `id`, `event` and `callstate_ts` as one. |
