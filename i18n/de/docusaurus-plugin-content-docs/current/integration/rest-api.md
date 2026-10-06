---
title: Lokale REST-API
sidebar_position: 2
description: Lassen Sie andere Programme auf diesem Rechner das Telefon steuern — Anrufe tätigen und steuern, Kontakte, Verlauf und Konten lesen.
---

AI Softphone hat eine REST-API für die CTI-Integration: Ein Programm auf demselben Rechner kann Anrufe tätigen und steuern, Kontakte, Anrufliste und SIP-Konten lesen und die laufenden Anrufe beobachten. Kein SDK, kein Vermittler in der Cloud und kein ins Netz geöffneter Listener. Anfragen und Antworten sind JSON, `curl` oder jeder HTTP-Client genügt also.

Die API ist **nach der Installation aus**; nichts lauscht, bis Sie sie einschalten. Dann lauscht sie nur an der Loopback-Schnittstelle — *eine kleine Weboberfläche, die nur diesem Rechner antwortet* — und ist aus dem Büronetz, einem VPN oder von einem anderen Rechner aus nicht erreichbar.

Verwenden Sie die API, wenn Ihr Programm Daten vom Telefon braucht oder einen Anruf steuern muss. Verwenden Sie [Webhooks](/integration/webhooks), wenn es auf Anrufe reagieren muss, während sie geschehen, ohne abzufragen. Die meisten Integrationen nutzen beides; sie sind voneinander unabhängig.

## Einschalten {#turning-it-on}

Öffnen Sie **Einstellungen → Integration** und gehen Sie zu **Lokale Steuerung**.

<Shot name="17b_settings_integration_scrolled" alt="Einstellungen → Integration: lokale Steuerung" />

1. Schalten Sie **Anderen Programmen auf diesem Rechner erlauben, das Telefon zu steuern** ein. Der Server startet sofort.
2. Behalten Sie den Standard-**Port** `8377`, sofern ihn nicht schon ein anderes Programm verwendet.
3. Setzen Sie bei Bedarf ein **Token**. Nach dem Speichern zeigt das Feld *Gespeichert — tippen Sie, um es zu ersetzen*.
4. Wählen Sie unter **Zugang** die Gruppen, die geöffnet werden: **Kontakte**, **Anrufliste**, **Anrufe und ihre Steuerung**, **Konten**, **Einstellungen**, **Zähler** (die Metriken). Eine ausgeschaltete Gruppe wird nicht gefiltert, sondern gar nicht bedient.
5. Testen Sie: `curl http://127.0.0.1:8377/accounts`. Ist die Antwort JSON, funktioniert die API.

Es wird kein eigener Dienst installiert, und es braucht keinen Neustart. Der Teil des Programms, der das tut, lässt sich unter [Module](/application/modules) abschalten (**Integration**).

## Die eigene Seite der Schnittstelle {#the-apis-own-page}

**Die eigene Seite der Schnittstelle öffnen** öffnet `http://127.0.0.1:8377` in einem Browser. Die Adresse antwortet mit einer Liste von allem, was sie bereitstellt, auf Englisch; die Adressen, die etwas lesen, sind Links, denen Sie folgen können.

<Shot name="23_api_page" alt="Die eigene Seite der Schnittstelle, http://127.0.0.1:8377/, in einem Browser geöffnet" />

## Zugang und das Token {#access-and-the-token}

Was ein Programm darf, hängt davon ab, ob es gespeicherte Daten ändert, nicht davon, ob es liest:

- **Ohne Token** darf jedes Programm auf dem Rechner alles in den freigegebenen Gruppen lesen und Anrufe steuern: tätigen, annehmen, auflegen, halten, fortsetzen, weiterleiten und DTMF senden.
- **Mit dem Token** in der Kopfzeile `Authorization` darf es zusätzlich die Endpunkte verwenden, die Gespeichertes ändern. Ohne Token werden diese Endpunkte weder bedient noch auf der eigenen Seite der Schnittstelle aufgeführt.

Das Token liegt im Schlüsselbund des Rechners, nicht in der Einstellungsdatei, und wird von `/settings` nie zurückgegeben.

:::caution
Ohne Token kann jedes Programm, das auf diesem Rechner läuft, das Telefon steuern, auch Anrufe annehmen. Auf einem persönlichen Arbeitsplatz ist das meist vertretbar. Auf einem geteilten oder verwalteten Rechner setzen Sie ein Token und behandeln es wie jedes andere Passwort. Ein Token schützt nur die Anfragen, die gespeicherte Daten ändern, nicht die Anrufe: Um andere Programme von den Anrufen fernzuhalten, schalten Sie unter **Zugang** die Gruppe **Anrufe und ihre Steuerung** aus.
:::

## Endpunkte {#endpoints}

Die Basisadresse ist `http://127.0.0.1:8377`. Die Endpunkte unten brauchen kein Token.

| Methode | Pfad | Bewirkt |
| --- | --- | --- |
| GET | `/metrics` | Die Zähler im Prometheus-Format. |
| GET | `/ui` | Die Liste der Aufnahmen als HTML-Seite. |
| GET | `/ui/recordings/{id}` | Eine Aufnahme mit ihrem Transkript als HTML-Seite. |
| GET | `/ui/recordings/{id}/audio` | Der Ton für die Seite darüber. |
| GET | `/contacts` | Die Kontakte. |
| GET | `/contacts/{id}` | Ein einzelner Kontakt. |
| GET | `/history` | Die Anrufliste, neueste zuerst. Nimmt `?limit=`, `?missed=true` und `?declined=true` an. |
| GET | `/calls` | Die laufenden Anrufe. |
| POST | `/calls` | Tätigt einen Anruf: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Nimmt einen Anruf an. |
| POST | `/calls/{id}/hangup` | Legt einen Anruf auf. |
| POST | `/calls/{id}/hold` | Hält einen Anruf. |
| POST | `/calls/{id}/resume` | Setzt ihn fort. |
| POST | `/calls/{id}/dtmf` | Sendet Töne: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Leitet den Anruf weiter: `{"target": "..."}`. |
| GET | `/accounts` | Die SIP-Konten und ihr Anmeldezustand. Nie ein Passwort. |
| GET | `/settings` | Die gesamte Konfiguration, ohne die Geheimnisse. |
| GET | `/taxonomy` | Kategorien, Label und Auffälligkeiten mit ihren Codes. |

Jede Kennung ist eine vom Telefon vergebene UUID: Eine Anruf-`id` kommt aus `/calls` oder aus der Antwort auf `POST /calls`, eine Konto-`id` aus `/accounts`.

Feldnamen sind in snake_case, und die Endung sagt den Typ: `_id` ist ein Verweis auf eine UUID, `_ts` ist ein Zeitpunkt in Unix-Millisekunden (UTC), `_s` ist eine Dauer in Sekunden. Dasselbe gilt für Webhooks; nur `/settings` behält eigene Namen. In der REST-API sind diese Werte JSON-Zahlen, und ein unbekannter Zeitpunkt ist `null`.

## Beispiel: einen Anruf tätigen {#example-placing-a-call}

`POST /calls` tätigt einen ausgehenden Anruf. Der Körper ist JSON mit der zu wählenden `number` und optional der `account_id` des Kontos, von dem aus angerufen wird:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Die Antwort ist die Kennung des neuen Anrufs:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` ist Pflicht. Ohne sie lautet die Antwort `400 {"error":"a call needs a number"}`, und es wird nichts gewählt.
- Die Nummer wird auf dem gewählten Konto so ergänzt, wie die Wählhilfe sie ergänzt: `1020` wird als `sip:1020@pbx.example.com` gesendet. `POST /calls/{id}/transfer` ergänzt sein `target` genauso; ein Ziel, das schon ein Schema oder ein `@` hat, wird unverändert gesendet.
- `account_id` ist optional; nehmen Sie sie aus `GET /accounts`. Ohne sie geht der Anruf über das im Hauptfenster gewählte Konto hinaus.
- Verwenden Sie die `id` in `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` und `transfer`. Die [Webhooks](/integration/webhooks#an-outgoing-call-event-by-event) dieses Anrufs tragen dieselbe `id`.

### Von einer Webseite: Klick zum Anrufen {#from-a-web-page-click-to-call}

Eine Seite, die `127.0.0.1` aufruft, erreicht den Rechner, auf dem der Browser läuft — denselben, auf dem das Telefon läuft —, eine Klick-zum-Anrufen-Taste in einem CRM braucht also keinen eigenen Server:

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

## Was die Antworten enthalten {#what-the-answers-contain}

### Laufende Anrufe: `GET /calls` {#calls-in-progress-get-calls}

Jeder Anruf hat seine `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` und `callstate_ts`.

- `state` ist `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (von diesem Telefon gehalten), `onhold` (von der Gegenseite gehalten), `conference` oder `ended`. Trifft mehr als einer zu, geht `conference` vor `hold` und `hold` vor `onhold`.
- `muted` sagt, ob das Mikrofon im Gespräch stummgeschaltet ist; Stummschalten ändert `state` nicht.
- `seance_id` ist das Gespräch: Durch Weiterleitung, Rückfrage oder Konferenz verbundene Anrufe teilen sie.
- `event_ts` ist der Zeitpunkt, zu dem die Antwort erstellt wurde. Vergleichen Sie ihn mit `callstate_ts`, um zu sehen, wie lange der Anruf schon in seinem Zustand ist, ohne sich auf Ihre eigene Uhr zu verlassen.

### Konten: `GET /accounts` {#accounts-get-accounts}

Jedes Konto hat seine `id` (überall sonst die `account_id`), seine Einstellungen — `transport` (`udp`, `tcp` oder `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` und weitere —, ob es `enabled` ist, und seinen `state` an der Telefonanlage: `registered`, solange die Leitung steht. Passwörter sind nie enthalten.

### Anrufliste: `GET /history` {#call-history-get-history}

Neueste zuerst, 100 Einträge, sofern `?limit=` nichts anderes sagt. `?missed=true` liefert nur verpasste Anrufe, `?declined=true` nur die von diesem Telefon abgelehnten.

| Feld | Bedeutung |
| --- | --- |
| `id` | Die eigene Kennung des Verlaufseintrags. Sie ist nicht die Anruf-`id` aus `/calls` und den Webhooks; `seance_id` verbindet beide. |
| `outcome` | Die Hauptklassifizierung: `answered`, `missed`, `declined` oder `failed`. |
| `answered` | `true` oder `false`. |
| `duration_s` | `0` für einen Anruf, der nie verbunden wurde. |
| `number`, `uri` | Die Gegenseite, als Nummer und als SIP-Adresse. |
| `name` | Aus den Kontakten, wenn die Nummer bekannt ist, sonst leer. Gleichen Sie über `number` ab, nicht hierüber. |
| `dialed` | Die gewählten Ziffern bei einem ausgehenden Anruf; leer bei einem eingehenden. |
| `account`, `account_id` | Die Leitung, auf der der Anruf lief. |
| `reason` | Wie er endete: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, wenn ein Mensch angenommen hat; sonst das, was den Anruf angenommen hat. |

### Kontakte: `GET /contacts` {#contacts-get-contacts}

Jeder Kontakt hat seine `id`, `name`, `number` und die Leitung, zu der er gehört, `account_id` und `account`; ein leeres `account` bedeutet, dass der Kontakt an keine Leitung gebunden ist.

### Aufnahmen {#recordings}

Aufnahmen und Transkripte werden nicht als JSON herausgegeben. Die API stellt sie als HTML-Seiten bereit, `/ui` und `/ui/recordings/{id}`: Verlinken Sie aus Ihrem CRM auf diese Seiten, statt Ton herumzuschieben. Der Link öffnet sich auf dem Rechner, der die Aufnahme aufbewahrt, und der Ton verlässt ihn nie.

## Taxonomie und Einstellungen {#taxonomy-and-settings}

Jeder Eintrag von `/taxonomy` hat einen festen `code`, einen `title` und eine `description` in der Oberflächensprache, eine `kind` (`category`, `tag` oder `red_flag`) und bei Auffälligkeiten eine `severity`. **Gleichen Sie über `code` ab, nie über `title`**: Titel kommen in der Sprache, auf die das Telefon eingestellt ist. Ein Eintrag mit `retired: true` wird aufbewahrt, damit ältere Anrufe noch aufgelöst werden; neuen Anrufen wird er nicht mehr gegeben. Laden Sie die Taxonomie einmal beim Start, um die Wörter des Telefons Ihren eigenen Feldern zuzuordnen.

`/settings` liefert die Konfiguration ohne die Geheimnisse: Audiogeräte und Lautstärken, Codec-Priorität, Erscheinungsbild und Sprache, Start, Tastenkürzel, Diagnosestufe und den Zustand beider Integrationen — nützlich für ein Support-Werkzeug, das einen Arbeitsplatz prüfen muss, ohne den Bildschirm zu teilen. `api.disabled` listet die ausgeschalteten Zugangsgruppen und `webhooks.silenced` die ausgeschalteten Ereignisse; leere Listen bedeuten, dass alles an ist. Es enthält nie das SIP-Passwort, das API-Token oder den Kopfzeilenwert des Webhooks.

## Fehler {#errors}

Jeder Fehler ist JSON mit einem einzigen Schlüssel `error`, für Menschen gedacht, nicht zum Auswerten.

| Status | Körper | Bedeutung |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Der Pfad existiert nicht, oder seine Zugangsgruppe ist aus; beides gibt mit Absicht dieselbe Antwort. |
| 404 | `{"error":"no contact with that id"}` | Der Pfad stimmt, die Kennung nicht. |
| 400 | `{"error":"no call with that id"}` | Der Anruf ist beendet oder hat nie existiert. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` ohne Nummer. Es wurde nichts gewählt. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` ohne Ziffern. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` ohne Ziel. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Das Konto des Anrufs wurde während des Gesprächs entfernt, das Ziel lässt sich also nicht ergänzen. An die Telefonanlage wurde nichts gesendet. |

Abgelehnte Anfragen werden in `api_requests_refused_total` gezählt, sodass eine Integration, die still scheitert, in den Metriken auffällt, nicht nur in Ihren eigenen Protokollen.

## Metriken {#metrics}

`GET /metrics` liefert jeden Zähler des Telefons, jeden mit einem Hilfetext. Lesen Sie sie mit Prometheus aus oder von Hand.

| Zähler | Zählt |
| --- | --- |
| `calls_incoming_total` | Empfangene eingehende Anrufe. |
| `calls_outgoing_total` | Getätigte ausgehende Anrufe. |
| `calls_answered_total` | Angenommene Anrufe. |
| `calls_missed_total` | Eingehende Anrufe, die nicht angenommen wurden. |
| `calls_declined_total` | Hier oder von der Gegenseite abgelehnte Anrufe. |
| `calls_failed_total` | Anrufe, die nicht aufgebaut werden konnten. |
| `registrations_succeeded_total` | Erfolgreiche SIP-Anmeldungen. |
| `registrations_failed_total` | Abgelehnte oder zeitlich abgelaufene SIP-Anmeldungen. |
| `webhooks_delivered_total` | Vom Empfänger angenommene Webhooks. |
| `webhooks_failed_total` | Abgelehnte oder nicht zugestellte Webhooks. |
| `webhooks_dropped_total` | Verworfene Webhooks, weil die Warteschlange voll war. |
| `api_requests_total` | Von der API bearbeitete Anfragen. |
| `api_requests_refused_total` | Abgelehnte Anfragen: falsches Token, Gruppe aus oder unbekannter Pfad. |

## Eine ältere Integration aktualisieren {#updating-an-older-integration}

Frühere Versionen verwendeten Namen in camelCase und kurze Kennungen. `accountId` heißt jetzt `account_id`, `startedAt` ist `callstart_ts`, `durationSeconds` ist `duration_s`, `answeredBy` ist `answered_by`, und das Webhook-Feld `at` ist `event_ts`. Anrufe und Konten werden nur noch über UUID gekennzeichnet: `runtimeId` und Kennungen wie `call-3` oder `account-2` werden weder zurückgegeben noch angenommen.

## Wenn es nicht funktioniert {#when-it-does-not-work}

| Symptom | Was zu prüfen ist |
| --- | --- |
| Verbindung zu `127.0.0.1:8377` abgelehnt | Die lokale Steuerung ist aus, das Telefon läuft nicht, oder der Port wurde geändert. |
| `404 {"error":"no such endpoint"}` für einen Pfad auf dieser Seite | Seine Zugangsgruppe ist aus. |
| Lesen geht, Schreiben wird abgelehnt | Die Endpunkte, die gespeicherte Daten ändern, brauchen das Token in der Kopfzeile `Authorization`. |
| Kategorietitel sind nicht englisch | Titel folgen der Oberflächensprache. Gleichen Sie über `code` aus `/taxonomy` ab. |
| `accountId`, `startedAt` oder `at` fehlen | Die Integration wurde für die früheren Namen geschrieben; siehe oben. |

Bei einem Problem mit der Anmeldung oder einem Anruf selbst öffnen Sie die [Diagnose](/troubleshooting/diagnostics).
