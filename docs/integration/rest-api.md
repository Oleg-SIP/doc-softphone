---
title: Local REST API
sidebar_position: 2
description: Let other programs on this computer drive the phone — place and control calls, read contacts, history and accounts.
---

AI Softphone has a REST API for CTI integration: a program on the same computer can place and control calls, read contacts, call history and SIP accounts, and watch the calls in progress. No SDK, no cloud intermediary and no listener exposed to the network. Requests and answers are JSON, so `curl` or any HTTP client is enough.

The API is **off after installation**; nothing listens until you turn it on. It then listens on the loopback interface only — *a small web interface that answers only to this computer* — and cannot be reached from the office network, a VPN or another machine.

Use the API when your program needs data from the phone or has to control a call. Use [webhooks](/integration/webhooks) when it has to react to calls as they happen, without polling. Most integrations use both; they are independent of each other.

## Turning it on

Open **Settings → Integration** and go to **Local control**.

<Shot name="17b_settings_integration_scrolled" alt="Settings → Integration: local control" />

1. Turn on **Let other programs on this computer drive the phone**. The server starts at once.
2. Keep the default **Port**, `8377`, unless another program already uses it.
3. Optionally set a **Token**. Once saved, the field shows *Saved — type to replace it*.
4. Under **Access**, choose the groups to open: **Contacts**, **Call history**, **Calls, and control of them**, **Accounts**, **Settings**, **Counters** (the metrics). A group that is off is not filtered but not served at all.
5. Test it: `curl http://127.0.0.1:8377/accounts`. If the answer is JSON, the API works.

No separate service is installed and no restart is needed. The part of the program that does this can be switched off in [Modules](/application/modules) (**Integration**).

## The API's own page

**Open the API's own page** opens `http://127.0.0.1:8377` in a browser. The address answers with a list of everything it serves, in English; the addresses that read something are links you can follow.

<Shot name="23_api_page" alt="The API's own page, http://127.0.0.1:8377/, open in a browser" />

## Access and the token

What a program may do depends on whether it changes stored data, not on whether it reads:

- **Without a token**, any program on the computer may read everything in the enabled groups and control calls: place, answer, hang up, hold, resume, transfer and send DTMF.
- **With the token** in the `Authorization` header, it may also use the endpoints that change what is stored. Without the token those endpoints are neither served nor listed on the API's own page.

The token is kept in the computer's keyring, not in the settings file, and is never returned by `/settings`.

:::caution
Without a token, any program running on this computer can control the phone, answering calls included. On a personal workstation that is usually acceptable. On a shared or managed machine, set a token and handle it like any other password. A token protects only the requests that change stored data, not the calls: to keep other programs away from calls, turn off **Calls, and control of them** under **Access**.
:::

## Endpoints

The base address is `http://127.0.0.1:8377`. The endpoints below need no token.

| Method | Path | Does |
| --- | --- | --- |
| GET | `/metrics` | The counters, in Prometheus format. |
| GET | `/ui` | The list of recordings, as an HTML page. |
| GET | `/ui/recordings/{id}` | A recording with its transcript, as an HTML page. |
| GET | `/ui/recordings/{id}/audio` | The audio for the page above. |
| GET | `/contacts` | The contacts. |
| GET | `/contacts/{id}` | A single contact. |
| GET | `/history` | The call log, newest first. Accepts `?limit=`, `?missed=true` and `?declined=true`. |
| GET | `/calls` | The calls in progress. |
| POST | `/calls` | Places a call: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Answers a call. |
| POST | `/calls/{id}/hangup` | Hangs a call up. |
| POST | `/calls/{id}/hold` | Puts a call on hold. |
| POST | `/calls/{id}/resume` | Takes it off hold. |
| POST | `/calls/{id}/dtmf` | Sends tones: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Transfers the call: `{"target": "..."}`. |
| GET | `/accounts` | The SIP accounts and their registration state. Never a password. |
| GET | `/settings` | The whole configuration, without the secrets. |
| GET | `/taxonomy` | Categories, tags and red flags, with their codes. |

Every identifier is a UUID issued by the phone: a call `id` comes from `/calls` or from the answer to `POST /calls`, an account `id` from `/accounts`.

Field names are in snake_case and the ending tells the type: `_id` is a reference to a UUID, `_ts` is a moment in Unix milliseconds (UTC), `_s` is a length in seconds. The same holds for webhooks; only `/settings` keeps names of its own. In the REST API these values are JSON numbers, and a moment that is not known is `null`.

## Example: placing a call

`POST /calls` places an outgoing call. The body is JSON with the `number` to dial and, optionally, the `account_id` of the account to call from:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

The answer is the identifier of the new call:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` is required. Without it the answer is `400 {"error":"a call needs a number"}` and nothing is dialled.
- The number is completed on the chosen account the way the dialler completes it: `1020` is sent as `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` completes its `target` the same way; a target that already has a scheme or an `@` is sent as it is.
- `account_id` is optional; take it from `GET /accounts`. Without it the call goes out on the account selected in the main window.
- Use the `id` in `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` and `transfer`. [Webhooks](/integration/webhooks#an-outgoing-call-event-by-event) of this call carry the same `id`.

### From a web page: click to call

A page that calls `127.0.0.1` reaches the computer the browser runs on — the same one the phone runs on — so a click-to-call button in a CRM needs no server of its own:

```javascript
async function dial(number) {
  const r = await fetch("http://127.0.0.1:8377/calls", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number }),
  });
  if (!r.ok) console.warn("softphone:", (await r.json()).error);
}
```

## What the answers contain

### Calls in progress: `GET /calls`

Each call has its `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` and `callstate_ts`.

- `state` is `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (held by this phone), `onhold` (held by the other party), `conference` or `ended`. When more than one applies, `conference` wins over `hold`, and `hold` over `onhold`.
- `muted` says whether the microphone is muted on the call; muting does not change `state`.
- `seance_id` is the conversation: calls linked by a transfer, a consultation or a conference share it.
- `event_ts` is when the answer was made. Compare it with `callstate_ts` to see how long the call has been in its state, without relying on your own clock.

### Accounts: `GET /accounts`

Each account has its `id` (the `account_id` everywhere else), its settings — `transport` (`udp`, `tcp` or `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` and others — whether it is `enabled`, and its `state` on the PBX: `registered` while the line is up. Passwords are never included.

### Call history: `GET /history`

Newest first, 100 entries unless `?limit=` says otherwise. `?missed=true` returns missed calls only, `?declined=true` only the calls this phone declined.

| Field | Meaning |
| --- | --- |
| `id` | The history entry's own identifier. It is not the call `id` of `/calls` and of webhooks; `seance_id` links the two. |
| `outcome` | The main classification: `answered`, `missed`, `declined` or `failed`. |
| `answered` | `true` or `false`. |
| `duration_s` | `0` for a call that was never connected. |
| `number`, `uri` | The other party, as a number and as the SIP address. |
| `name` | From Contacts if the number is known, otherwise empty. Match on `number`, not on this. |
| `dialed` | The digits dialled, for an outgoing call; empty for an incoming one. |
| `account`, `account_id` | The line the call was on. |
| `reason` | How it ended: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` if a person answered it; otherwise what answered the call. |

### Contacts: `GET /contacts`

Each contact has its `id`, `name`, `number` and the line it belongs to, `account_id` and `account`; an empty `account` means the contact is not tied to a line.

### Recordings

Recordings and transcripts are not given out as JSON. The API serves them as HTML pages, `/ui` and `/ui/recordings/{id}`: link to these pages from your CRM instead of moving audio around. The link opens on the computer that keeps the recording, and the audio never leaves it.

## Taxonomy and settings

Each entry of `/taxonomy` has a constant `code`, a `title` and a `description` in the interface language, a `kind` (`category`, `tag` or `red_flag`) and, for red flags, a `severity`. **Match on `code`, never on `title`**: titles come in the language the phone is set to. An entry with `retired: true` is kept so that older calls still resolve; it is no longer given to new calls. Load the taxonomy once at start-up to map the phone's words to your own fields.

`/settings` returns the configuration except the secrets: audio devices and volumes, codec priority, appearance and language, startup, hotkeys, the diagnostics level and the state of both integrations — useful for a support tool that has to check a workstation without sharing the screen. `api.disabled` lists the access groups that are off and `webhooks.silenced` the events that are off; empty lists mean everything is on. It never includes the SIP password, the API token or the webhook header value.

## Errors

Every error is JSON with a single `error` key, meant for people, not for parsing.

| Status | Body | Meaning |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | The path does not exist, or its access group is off; both give the same answer on purpose. |
| 404 | `{"error":"no contact with that id"}` | The path is right, the identifier is not. |
| 400 | `{"error":"no call with that id"}` | The call has ended, or never existed. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` without a number. Nothing was dialled. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` without digits. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` without a target. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | The call's account was removed during the call, so the target cannot be completed. Nothing was sent to the PBX. |

Refused requests are counted in `api_requests_refused_total`, so an integration that fails quietly shows in the metrics, not only in your own logs.

## Metrics

`GET /metrics` returns every counter of the phone, each with a help text. Scrape it with Prometheus or read it by hand.

| Counter | Counts |
| --- | --- |
| `calls_incoming_total` | Incoming calls received. |
| `calls_outgoing_total` | Outgoing calls placed. |
| `calls_answered_total` | Calls that were answered. |
| `calls_missed_total` | Incoming calls that were not answered. |
| `calls_declined_total` | Calls rejected here or by the other side. |
| `calls_failed_total` | Calls that could not be set up. |
| `registrations_succeeded_total` | Successful SIP registrations. |
| `registrations_failed_total` | SIP registrations refused or timed out. |
| `webhooks_delivered_total` | Webhooks the receiver accepted. |
| `webhooks_failed_total` | Webhooks refused or not delivered. |
| `webhooks_dropped_total` | Webhooks thrown away because the queue was full. |
| `api_requests_total` | Requests handled by the API. |
| `api_requests_refused_total` | Refused requests: wrong token, group off or unknown path. |

## Updating an older integration

Earlier versions used camelCase names and short identifiers. `accountId` is now `account_id`, `startedAt` is `callstart_ts`, `durationSeconds` is `duration_s`, `answeredBy` is `answered_by`, and the webhook field `at` is `event_ts`. Calls and accounts are identified by UUID only: `runtimeId` and identifiers such as `call-3` or `account-2` are no longer returned or accepted.

## When it does not work

| Symptom | What to check |
| --- | --- |
| Connection refused on `127.0.0.1:8377` | Local control is off, the phone is not running, or the port was changed. |
| `404 {"error":"no such endpoint"}` for a path on this page | Its access group is off. |
| Reading works, writing is refused | The endpoints that change stored data need the token in the `Authorization` header. |
| Category titles are not in English | Titles follow the interface language. Match on `code` from `/taxonomy`. |
| `accountId`, `startedAt` or `at` are missing | The integration was written for the earlier names; see above. |

For a problem with registration or a call itself, open [Diagnostics](/troubleshooting/diagnostics).
