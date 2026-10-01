---
title: Local REST API
sidebar_position: 2
description: Let other programs on this computer drive the phone — place calls, read history and contacts.
---

AI Softphone has a REST API for CTI integration: a program on the same computer can control the phone, read contacts and call history, manage accounts and watch active calls. No cloud intermediary and no SDK are needed.

The API listens on the loopback interface only, so it cannot be reached from the network: *a small web interface that answers only to this computer*.

## Turning it on

Open **Settings → Integration** and go to **Local control**.

<Shot name="17b_settings_integration_scrolled" alt="Settings → Integration: local control" />

1. Turn on **Let other programs on this computer drive the phone**.
2. Keep the default **Port**, `8377`, unless it is already in use.
3. Optionally set a **Token**.
4. Under **Access**, choose the groups to open: **Contacts**, **Call history**, **Calls, and control of them**, **Accounts**, **Settings**, **Counters**. All six are ticked by default.

No separate service is installed and no restart is needed. The part of the program that does this can be switched off in [Modules](../application/modules.md) (**Integration**).

The base address is `http://127.0.0.1:8377`. **Open the API's own page** opens the address in a browser: it answers with a list of everything it serves, in English, with links you can follow. A group that is not enabled answers every request to it with `404 {"error":"no such endpoint"}`.

## Authentication

- The token is kept in the computer's keyring, not in the settings file.
- Write requests must carry it in the `Authorization` header.
- Without a token, any program on the computer may read the enabled groups and control calls: anything that can run a program there can pick up your telephone (answer, hang up, hold, transfer, DTMF). With a token, a program can also change what is stored. Set a token to keep other programs from doing it.

## Endpoints

| Method | Path | Does |
| --- | --- | --- |
| GET | `/accounts` | SIP accounts and their registration status. Passwords are never returned. |
| GET | `/calls` | Active calls and their state. |
| POST | `/calls` | Starts a call: `{"number": "...", "account_id": "..."}` (`account_id` is optional). |
| POST | `/calls/{id}/answer` | Answers an incoming call. |
| POST | `/calls/{id}/hangup` | Ends a call. |
| POST | `/calls/{id}/hold` | Puts a call on hold. |
| POST | `/calls/{id}/resume` | Resumes a held call. |
| POST | `/calls/{id}/dtmf` | Sends tones: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Transfers the call: `{"target": "..."}`. |
| GET | `/contacts` | The contacts. |
| GET | `/contacts/{id}` | A single contact. |
| GET | `/history` | The call log, newest first. Accepts `?limit=`, `?missed=true` and `?declined=true`. |
| GET | `/settings` | The whole configuration, without secrets. |
| GET | `/metrics` | Counters in Prometheus format (the **Counters** group). |
| GET | `/taxonomy` | Categories, tags and red flags with their codes. |
| GET | `/ui` | The list of recordings as an HTML page. |
| GET | `/ui/recordings/{id}` | A recording with its transcript as an HTML page. |
| GET | `/ui/recordings/{id}/audio` | The audio for the page above. |

Every identifier is a UUID issued by the phone: a call `id` comes from `/calls` or from the answer to `POST /calls`, an account `id` from `/accounts`.

Field names are in snake_case and the ending tells the type: `_id` is a reference to a UUID, `_ts` is a moment in Unix milliseconds (UTC), `_s` is a length in seconds.

Recordings are served as HTML pages rather than JSON: link to these pages from your CRM instead of moving audio around.

## Errors

Every error is JSON with a single `error` key — `{"error": "what went wrong"}` — meant for people, not for parsing. The status is `400` for a bad request and `404` for a path that does not exist or whose access group is off (both give the same answer on purpose), a contact or a call that does not exist (for a call: it may already have ended). Refused requests are counted in `api_requests_refused_total`.

## Taxonomy and settings

Each entry of `/taxonomy` has a constant `code`, a `title` and a `description` in the interface language, a `kind` and, for red flags, a `severity`. **Match on `code`, never on `title`**: titles are returned in the language the phone is set to. An entry with `retired: true` is kept so that older calls still resolve; it is no longer given to new calls.

`/settings` returns the configuration except secrets: audio devices and volume, codec priority, appearance and language, startup, hotkeys, the diagnostics level and the state of both integrations. `api.disabled` lists the access groups that are off and `webhooks.silenced` the events that are off; empty lists mean everything is on. It never includes the SIP password, the API token or the webhook header value.

## Metrics

`calls_incoming_total`, `calls_outgoing_total`, `calls_answered_total`, `calls_missed_total`, `calls_declined_total`, `webhooks_delivered_total`, `webhooks_failed_total`, `webhooks_dropped_total`, `api_requests_total`, `api_requests_refused_total`.

## Example: click to call

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
