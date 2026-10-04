---
title: Webhooks
sidebar_position: 1
description: "Lassen Sie das Telefon Ihrem CRM oder einem anderen System eine Anfrage senden, wenn ein Anruf beginnt, sich ändert oder endet — mit den genauen Anfragen eines eingehenden und eines ausgehenden Anrufs."
---

Ein Webhook ist eine Anfrage, die das Telefon an eine Adresse Ihrer Wahl sendet, sobald mit einem Anruf etwas geschieht. So kann ein CRM die Kundenkarte vor dem zweiten Klingeln öffnen, einen Anruf protokollieren, wenn er endet, oder auf einem Wandbildschirm eine Lampe leuchten lassen. Ein Webhook braucht keine Firewallregeln für eingehende Verbindungen: Das Telefon ruft Sie an. Weil die Anfragen vom Arbeitsplatz gesendet werden, muss die Adresse nur von diesem Rechner aus erreichbar sein — ein internes `http://crm.local/calls` funktioniert genauso gut wie eine öffentliche HTTPS-Adresse.

Webhooks sind nach der Installation **aus**, bis Sie sie einschalten. Sie arbeiten neben der [lokalen REST-API](/integration/rest-api): Ein Ereignis sagt, dass sich etwas geändert hat, die API liefert die aktuellen Einzelheiten.

## Einschalten {#turning-them-on}

Öffnen Sie **Einstellungen → Integration**. **Webhooks** ist der erste Abschnitt des Reiters.

<Shot name="24_webhooks" alt="Einstellungen → Integration → Webhooks, mit https://crm.local/calls als Adresse" />

1. Kreuzen Sie **Einem anderen System von Anrufen erzählen** an. *Für jedes unten angekreuzte Ereignis wird eine Anfrage gesendet.*
2. Geben Sie die **Adresse** ein, die die Ereignisse empfangen soll, zum Beispiel `https://crm.local/calls`.
3. Wählen Sie die **Methode**: **POST** (Standard) oder **GET**.
4. Kreuzen Sie unter **Ereignisse** an, was gesendet werden soll: **Ein neuer Anruf**, **Ein Anruf endet**, **Ein Anruf wechselt den Zustand**.
5. Setzen Sie bei Bedarf unter **Autorisierung** eine Kopfzeile, die Ihr Empfänger prüfen kann: einen **Kopfzeilenname** (vorgeschlagen wird `Authorization`) und einen **Kopfzeilenwert**. Der Wert liegt im Schlüsselbund des Rechners, nie in einer Einstellungsdatei; nach dem Speichern zeigt das Feld *Gespeichert — tippen Sie, um es zu ersetzen*.
6. Drücken Sie **Ein Testereignis senden**, um zu sehen, dass es ankommt. Es sendet ein Ereignis für einen Anruf, der nie stattfand, mit denselben Kopfzeilen wie ein echtes. Protokollieren Sie die rohe Anfrage und bauen Sie Ihren Empfänger nach dem, was Ihre Version tatsächlich sendet.

Der Teil des Programms, der die Anfragen sendet, ist das Modul **Integration**; es lässt sich unter [Module](/application/modules) abschalten.

## Die Ereignisse {#the-events}

| Angekreuzt als | Ereignis | Gesendet, wenn |
| --- | --- | --- |
| **Ein neuer Anruf** | `call-started` | Ein eingehender Anruf zu klingeln beginnt oder ein ausgehender Anruf getätigt wird. |
| **Ein Anruf wechselt den Zustand** | `call-state-changed` | Sich der `state` des Anrufs ändert: Er wird angenommen, von einer Seite gehalten oder fortgesetzt, oder er tritt einer Konferenz bei oder verlässt sie. Stummschalten sendet es nicht. |
| **Ein Anruf endet** | `call-ended` | Der Anruf beendet ist. |

Jedes Ereignis lässt sich einzeln ankreuzen. Eine Kundenkarte braucht nur das erste, ein Anrufprotokoll nur das letzte. `call-started` wird zuerst gesendet und sollte schnell verarbeitet werden.

## Wie die Anfrage aussieht {#what-the-request-looks-like}

Mit der Adresse `https://crm.local/calls` und der Methode **POST** sendet das Telefon Folgendes. Der Körper ist JSON, und die Kopfzeile ist die unter **Autorisierung** gesetzte:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

Der `User-Agent` trägt die Version des Programms und die Art, wie es installiert wurde.

## Ein eingehender Anruf, Ereignis für Ereignis {#an-incoming-call-event-by-event}

Ein Anruf von der Nebenstelle `1020` an das Konto `1002` klingelt, wird angenommen und vier Sekunden später von der Person aufgelegt, die ihn angenommen hat. Mit allen drei angekreuzten Ereignissen bekommt der Empfänger drei Anfragen nacheinander. Alle tragen dieselbe `id` und `seance_id`.

### 1. Es klingelt: `call-started` {#1-it-rings-call-started}

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
  "name": "Lukas Becker",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

Das ist der Moment, den Anrufer anhand von `number` nachzuschlagen und die Kundenkarte zu zeigen. `state` ist `ringing-in` und `duration_s` ist `0`.

### 2. Er wird angenommen: `call-state-changed` {#2-it-is-answered-call-state-changed}

Etwa drei Sekunden später:

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
  "name": "Lukas Becker",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` ist jetzt `active`, und `callstate_ts` ist auf den Moment der Änderung weitergerückt, während `callstart_ts` bleibt, wo es war.

### 3. Er endet: `call-ended` {#3-it-ends-call-ended}

Nach vier Sekunden Gespräch:

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
  "name": "Lukas Becker",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` ist `ended`, `duration_s` ist die Dauer des Gesprächs, und `reason` sagt, wer es beendet hat: hier `local-hangup`, weil die Person an diesem Telefon aufgelegt hat.

## Ein ausgehender Anruf, Ereignis für Ereignis {#an-outgoing-call-event-by-event}

Dieselbe Nebenstelle wird vom Konto `1002` angerufen: Die Person wählt `1020`, es klingelt, die Gegenseite nimmt an, spricht sieben Sekunden und legt auf. Der Empfänger bekommt vier Anfragen, eine mehr als bei einem eingehenden Anruf, weil ein ausgehender Anruf einen eigenen Zustand hat, während es auf der anderen Seite klingelt.

### 1. Es wird gewählt: `call-started` {#1-it-is-dialled-call-started}

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

`direction` ist `out`, `state` ist `dialing`, und `dialed` enthält die Nummer, wie sie gewählt wurde. Das Telefon kennt den Namen der Gegenseite noch nicht, deshalb ist `name` leer.

### 2. Es klingelt auf der anderen Seite: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Eine halbe Sekunde später:

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

`state` ist `ringing-out`.

### 3. Die Gegenseite nimmt an: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Vier Sekunden danach:

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
  "name": "Lukas Becker",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` ist `active`. Der `name` ist jetzt ausgefüllt, und die `uri` ist die Adresse der Gegenseite, wie die Antwort sie gemeldet hat. `duration_s` ist noch `0`: Sie zählt ab diesem Moment.

### 4. Er endet: `call-ended` {#4-it-ends-call-ended}

Sieben Sekunden später legt die Gegenseite auf:

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
  "name": "Lukas Becker",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`duration_s` ist `7`, und `reason` ist `remote-hangup`, weil die Gegenseite das Gespräch beendet hat. Legen Sie selbst auf, ist es `local-hangup`, wie beim eingehenden Anruf oben.

### Die Zustände nebeneinander {#the-states-side-by-side}

| | Eingehender Anruf | Ausgehender Anruf |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, dann `active` |
| `call-ended` | `ended` | `ended` |

## Die Felder {#the-fields}

**Jeder Wert ist eine Zeichenkette**, auch Zahlen und Zeitstempel: `"duration_s": "42"`. Ein unbekannter Zeitpunkt ist eine leere Zeichenkette. Die Namen folgen einer Konvention: `_id` ist eine Kennung, `_ts` ist Unix-Zeit in Millisekunden (UTC), `_s` ist eine Dauer in Sekunden — wie in der REST-API, wo die Werte JSON-Zahlen sind.

| Feld | Bedeutung |
| --- | --- |
| `event` | `call-started`, `call-state-changed` oder `call-ended`. |
| `id` | Der Anruf: dieselbe UUID wie in `GET /calls` und `/calls/{id}/…`, und dieselbe in jedem Ereignis des Anrufs. |
| `seance_id` | Das Gespräch, zu dem der Anruf gehört; siehe [unten](#one-conversation-across-transfers). |
| `direction` | `in` oder `out`. |
| `state` | Dieselben Werte wie in `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (von diesem Telefon gehalten), `onhold` (von der Gegenseite gehalten), `conference` oder `ended`. |
| `number` | Die Nummer der Gegenseite. Gleichen Sie Ihre CRM-Datensätze über dieses Feld ab. |
| `name` | Der Name der Gegenseite aus den Kontakten; er kann leer sein und später im Gespräch ausgefüllt werden, wie beim ausgehenden Anruf oben. |
| `uri` | Die SIP-Adresse der Gegenseite. |
| `dialed` | Die gewählten Ziffern bei einem ausgehenden Anruf; leer bei einem eingehenden. |
| `account`, `account_id` | Die Leitung, auf der der Anruf läuft: `benutzer@server` und die Kennung aus `GET /accounts`. |
| `event_ts` | Wann das Ereignis eintrat. |
| `callstart_ts` | Wann das Telefon zuerst von dem Anruf erfuhr. |
| `callstate_ts` | Wann der Anruf seinen aktuellen `state` erreicht hat. |
| `duration_s` | Gesprächszeit in Sekunden, vom Annehmen bis zum Auflegen. Gesetzt bei `call-ended` für einen angenommenen Anruf; sonst `0`. |
| `reason` | Wie der Anruf endete: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; bis dahin `none`. |
| `answered_by` | `no`, wenn ein Mensch den Anruf angenommen hat; sonst das, was ihn angenommen hat. |

## Ein Gespräch über Weiterleitungen hinweg {#one-conversation-across-transfers}

`seance_id` fasst die Anrufe zusammen, die ein Gespräch bilden. Ein von Grund auf getätigter oder angenommener Anruf beginnt ein neues. Ein durch Weiterleitung entstandener Anruf, ein Anruf, der einen anderen ersetzt, eine Rückfrage zu einem Anruf und jeder einer Konferenz hinzugefügte Anruf behalten die `seance_id` des Anrufs, aus dem sie hervorgingen.

Zwischen Telefonen reist sie in der SIP-Kopfzeile `X-Seance-Id`: Wird ein Anruf an einen Kollegen weitergeleitet, der ebenfalls AI Softphone verwendet, und gibt die Telefonanlage die Kopfzeile weiter, melden beide Arbeitsplätze dieselbe `seance_id`.

## GET statt POST {#get-instead-of-post}

**GET** ist für Empfänger, die keinen Anfragekörper annehmen können, etwa ein älteres CRM oder eine Skriptbrücke. Dieselben Felder werden dann als Abfrageparameter gesendet.

Mit **GET** kann die Adresse eine Vorlage sein: Jedes `[feld]` wird durch den Wert dieses Felds ersetzt, prozentkodiert. Zum Beispiel:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Die Platzhalter verwenden die Feldnamen oben. Mit den früheren Namen gespeicherte Vorlagen (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) funktionieren weiter.

## Wie die Ereignisse zugestellt werden {#how-the-events-are-delivered}

| Verhalten | Was es für Sie bedeutet |
| --- | --- |
| Ereignisse werden in eine Warteschlange gestellt, nicht aus dem Anruf selbst gesendet | Ein langsamer Empfänger verzögert nie Klingeln, Anrufe oder Weiterleitungen. |
| Eine volle Warteschlange verwirft Ereignisse | Antwortet Ihr Empfänger nicht mehr, gehen Ereignisse verloren, aber das Telefon arbeitet weiter. Beobachten Sie `webhooks_dropped_total`. |
| Abgelehnte und nicht erreichbare Zustellungen werden gezählt | Steigt `webhooks_failed_total`, während `webhooks_delivered_total` stillsteht, liegt es am Empfänger. |
| Ereignisse kommen in Reihenfolge an | Anruf begonnen, dann die Zustandsänderungen, dann Anruf beendet. Um gespeicherte Ereignisse zu ordnen, verwenden Sie `callstate_ts`, nicht die Ankunftszeit. |
| Mindestens einmal | Dasselbe Ereignis kann zweimal kommen. `id`, `event` und `callstate_ts` zusammen kennzeichnen ein Ereignis: Lassen Sie Ihren Empfänger ein bereits gesehenes überspringen. |

## Die Ereignisse empfangen {#receiving-the-events}

Die eine Regel für einen Empfänger: **sofort mit `200` antworten und die Arbeit danach erledigen.** Ein langsamer Empfänger bremst das Telefon nicht, aber er füllt die Warteschlange, und eine volle Warteschlange verwirft Ereignisse.

Zum Beispiel in Node.js mit Express:

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // der Kopfzeilenwert aus den Einstellungen

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST sendet einen JSON-Körper, GET Abfrageparameter
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // zuerst antworten

  setImmediate(() => {                          // dann die Arbeit
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // Ihr Code
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // Ihr Code
    }
  });
});

app.listen(8080);
```

Um das Ergebnis eines Anrufs zu protokollieren — angenommen, verpasst, abgelehnt —, nehmen Sie den Eintrag mit derselben `seance_id` und `number` aus `GET /history?limit=20` der [REST-API](/integration/rest-api#call-history-get-history). Wenn Ihr Dienst nach einer Pause wieder startet, lesen Sie `GET /history?limit=200` und speichern Sie, was Sie verpasst haben: Webhooks für Echtzeit, der Verlauf zum Schließen der Lücken.

Um die Anfragen zu sehen, bevor das CRM bereit ist, richten Sie die **Adresse** auf einen Online-Request-Inspector und drücken Sie **Ein Testereignis senden**.

## Wenn nichts ankommt {#when-nothing-arrives}

| Symptom | Was zu prüfen ist |
| --- | --- |
| Überhaupt keine Webhooks | Drücken Sie **Ein Testereignis senden**. Kommt es an, sind die Ereignisse, die Sie brauchen, nicht angekreuzt; wenn nicht, ist die Adresse falsch oder vom Arbeitsplatz aus nicht erreichbar. |
| `webhooks_failed_total` steigt weiter | Der Empfänger lehnt die Anfragen ab oder ist nicht erreichbar. Prüfen Sie sein Protokoll und ob er auf eine einfache Anfrage vom Arbeitsplatz antwortet. |
| `webhooks_dropped_total` ist größer als null | Der Empfänger war zu lange zu langsam, und die Warteschlange lief voll. Zuerst `200` antworten, dann verarbeiten. |
| Dasselbe Ereignis zweimal | Bei Zustellung mindestens einmal zu erwarten. Behandeln Sie Ereignisse mit derselben `id`, `event` und `callstate_ts` als eines. |
