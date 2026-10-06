---
title: Lokalt REST-API
sidebar_position: 2
description: La andre programmer på denne maskinen styre telefonen — ring og styr samtaler, les kontakter, historikk og kontoer.
---

AI Softphone har et REST-API for CTI-integrasjon: et program på samme maskin kan ringe og styre samtaler, lese kontakter, samtalehistorikk og SIP-kontoer, og følge med på samtalene som pågår. Ingen SDK, ingen mellomledd i skyen og ingen lytter som er eksponert mot nettverket. Forespørsler og svar er JSON, så `curl` eller en hvilken som helst HTTP-klient er nok.

API-et er **av etter installasjonen**; ingenting lytter før du slår det på. Etter det lytter det bare på loopback-grensesnittet — *et lite nettgrensesnitt som bare svarer denne maskinen* — og kan ikke nås fra kontornettverket, et VPN eller en annen maskin.

Bruk API-et når programmet ditt trenger data fra telefonen eller må styre en samtale. Bruk [webhooker](/integration/webhooks) når det må reagere på samtaler mens de skjer, uten å spørre om og om igjen. De fleste integrasjoner bruker begge; de er uavhengige av hverandre.

## Slå det på {#turning-it-on}

Åpne **Innstillinger → Integrasjon**, og gå til **Lokal styring**.

<Shot name="17b_settings_integration_scrolled" alt="Innstillinger → Integrasjon: lokal styring" />

1. Slå på **La andre programmer på denne maskinen styre telefonen**. Serveren starter med én gang.
2. Behold standard **Port**, `8377`, med mindre et annet program allerede bruker den.
3. Sett eventuelt en **Nøkkel**. Når den er lagret, viser feltet *Lagret — skriv for å erstatte det*.
4. Velg under **Tilgang** gruppene som skal åpnes: **Kontakter**, **Samtalehistorikk**, **Samtaler, og styringen av dem**, **Kontoer**, **Innstillinger**, **Tellere** (målingene). En gruppe som er av, filtreres ikke, men tilbys ikke i det hele tatt.
5. Prøv det: `curl http://127.0.0.1:8377/accounts`. Er svaret JSON, virker API-et.

Ingen egen tjeneste installeres, og det trengs ingen omstart. Den delen av programmet som gjør dette, kan slås av under [Moduler](/application/modules) (**Integrasjon**).

## API-ets egen side {#the-apis-own-page}

**Åpne API-ets egen side** åpner `http://127.0.0.1:8377` i en nettleser. Adressen svarer med en liste over alt den tilbyr, på engelsk; adressene som leser noe, er lenker du kan følge.

<Shot name="23_api_page" alt="API-ets egen side, http://127.0.0.1:8377/, åpnet i en nettleser" />

## Tilgang og nøkkelen {#access-and-the-token}

Hva et program får gjøre, avhenger av om det endrer lagrede data, ikke av om det leser:

- **Uten nøkkel** kan ethvert program på maskinen lese alt i gruppene som er åpnet, og styre samtaler: ringe, svare, legge på, sette på vent, gjenoppta, sette over og sende DTMF.
- **Med nøkkelen** i hodet `Authorization` kan det også bruke endepunktene som endrer det som er lagret. Uten nøkkelen verken tilbys eller vises disse endepunktene på API-ets egen side.

Nøkkelen lagres i maskinens nøkkelring, ikke i innstillingsfilen, og returneres aldri av `/settings`.

:::caution
Uten nøkkel kan ethvert program som kjører på denne maskinen, styre telefonen, også svare på samtaler. På en personlig arbeidsstasjon er det som regel greit. På en delt eller administrert maskin bør du sette en nøkkel og behandle den som et hvilket som helst annet passord. Nøkkelen beskytter bare forespørslene som endrer lagrede data, ikke samtalene: vil du holde andre programmer unna samtalene, slår du av **Samtaler, og styringen av dem** under **Tilgang**.
:::

## Endepunkter {#endpoints}

Grunnadressen er `http://127.0.0.1:8377`. Endepunktene nedenfor trenger ingen nøkkel.

| Metode | Sti | Gjør |
| --- | --- | --- |
| GET | `/metrics` | Tellerne, i Prometheus-format. |
| GET | `/ui` | Listen over opptak, som en HTML-side. |
| GET | `/ui/recordings/{id}` | Et opptak med utskriften, som en HTML-side. |
| GET | `/ui/recordings/{id}/audio` | Lyden til siden over. |
| GET | `/contacts` | Kontaktene. |
| GET | `/contacts/{id}` | Én enkelt kontakt. |
| GET | `/history` | Samtalehistorikken, nyeste først. Godtar `?limit=`, `?missed=true` og `?declined=true`. |
| GET | `/calls` | Samtalene som pågår. |
| POST | `/calls` | Ringer en samtale: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Svarer på en samtale. |
| POST | `/calls/{id}/hangup` | Legger på en samtale. |
| POST | `/calls/{id}/hold` | Setter en samtale på vent. |
| POST | `/calls/{id}/resume` | Tar den av vent. |
| POST | `/calls/{id}/dtmf` | Sender toner: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Setter over samtalen: `{"target": "..."}`. |
| GET | `/accounts` | SIP-kontoene og registreringstilstanden deres. Aldri et passord. |
| GET | `/settings` | Hele konfigurasjonen, uten hemmelighetene. |
| GET | `/taxonomy` | Kategorier, etiketter og signaler, med kodene deres. |

Hver identifikator er en UUID utstedt av telefonen: en samtales `id` kommer fra `/calls` eller fra svaret på `POST /calls`, en kontos `id` fra `/accounts`.

Feltnavn er i snake_case, og endelsen forteller typen: `_id` er en referanse til en UUID, `_ts` er et tidspunkt i Unix-millisekunder (UTC), `_s` er en varighet i sekunder. Det samme gjelder for webhooker; bare `/settings` har egne navn. I REST-API-et er disse verdiene JSON-tall, og et ukjent tidspunkt er `null`.

## Eksempel: ringe en samtale {#example-placing-a-call}

`POST /calls` ringer en utgående samtale. Innholdet er JSON med `number` som skal ringes, og eventuelt `account_id` for kontoen det skal ringes fra:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Svaret er identifikatoren for den nye samtalen:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` er påkrevd. Uten det er svaret `400 {"error":"a call needs a number"}`, og ingenting ringes.
- Nummeret fullføres på den valgte kontoen slik nummerfeltet fullfører det: `1020` sendes som `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` fullfører sitt `target` på samme måte; et mål som allerede har et skjema eller en `@`, sendes som det er.
- `account_id` er valgfritt; ta det fra `GET /accounts`. Uten det går samtalen ut på kontoen som er valgt i hovedvinduet.
- Bruk `id` i `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` og `transfer`. [Webhookene](/integration/webhooks#an-outgoing-call-event-by-event) for denne samtalen har samme `id`.

### Fra en nettside: klikk for å ringe {#from-a-web-page-click-to-call}

En side som kaller `127.0.0.1`, når maskinen nettleseren kjører på — den samme telefonen kjører på —, så en klikk-for-å-ringe-knapp i et CRM trenger ingen egen server:

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

## Hva svarene inneholder {#what-the-answers-contain}

### Samtaler som pågår: `GET /calls` {#calls-in-progress-get-calls}

Hver samtale har sin `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` og `callstate_ts`.

- `state` er `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (satt på vent av denne telefonen), `onhold` (satt på vent av den andre parten), `conference` eller `ended`. Når flere gjelder, vinner `conference` over `hold`, og `hold` over `onhold`.
- `muted` sier om mikrofonen er slått av i samtalen; å slå av lyden endrer ikke `state`.
- `seance_id` er samtalen i videre forstand: samtaler som er knyttet sammen ved en overføring, en konsultasjon eller en konferanse, deler den.
- `event_ts` er når svaret ble laget. Sammenlign den med `callstate_ts` for å se hvor lenge samtalen har vært i tilstanden, uten å stole på din egen klokke.

### Kontoer: `GET /accounts` {#accounts-get-accounts}

Hver konto har sin `id` (`account_id` alle andre steder), innstillingene — `transport` (`udp`, `tcp` eller `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` og andre —, om den er `enabled`, og sin `state` på sentralen: `registered` mens linjen er oppe. Passord er aldri med.

### Samtalehistorikk: `GET /history` {#call-history-get-history}

Nyeste først, 100 oppføringer med mindre `?limit=` sier noe annet. `?missed=true` returnerer bare tapte samtaler, `?declined=true` bare samtalene denne telefonen avviste.

| Felt | Betydning |
| --- | --- |
| `id` | Historikkoppføringens egen identifikator. Det er ikke samtale-`id` fra `/calls` og fra webhooker; `seance_id` knytter de to sammen. |
| `outcome` | Hovedklassifiseringen: `answered`, `missed`, `declined` eller `failed`. |
| `answered` | `true` eller `false`. |
| `duration_s` | `0` for en samtale som aldri ble koblet opp. |
| `number`, `uri` | Den andre parten, som nummer og som SIP-adresse. |
| `name` | Fra Kontakter hvis nummeret er kjent, ellers tomt. Match på `number`, ikke på dette. |
| `dialed` | Sifrene som ble slått, for en utgående samtale; tomt for en innkommende. |
| `account`, `account_id` | Linjen samtalen gikk over. |
| `reason` | Hvordan den sluttet: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` hvis en person svarte; ellers det som svarte på samtalen. |

### Kontakter: `GET /contacts` {#contacts-get-contacts}

Hver kontakt har sin `id`, `name`, `number` og linjen den hører til, `account_id` og `account`; en tom `account` betyr at kontakten ikke er knyttet til en linje.

### Opptak {#recordings}

Opptak og utskrifter deles ikke ut som JSON. API-et tilbyr dem som HTML-sider, `/ui` og `/ui/recordings/{id}`: lenk til disse sidene fra CRM-et ditt i stedet for å flytte lyd rundt. Lenken åpnes på maskinen som har opptaket, og lyden forlater den aldri.

## Taksonomi og innstillinger {#taxonomy-and-settings}

Hver oppføring i `/taxonomy` har en fast `code`, en `title` og en `description` på grensesnittspråket, en `kind` (`category`, `tag` eller `red_flag`) og, for signaler, en `severity`. **Match på `code`, aldri på `title`**: titlene kommer på språket telefonen er satt til. En oppføring med `retired: true` beholdes slik at eldre samtaler fortsatt kan slås opp; den gis ikke lenger til nye samtaler. Last inn taksonomien én gang ved oppstart for å koble telefonens ord til dine egne felter.

`/settings` returnerer konfigurasjonen unntatt hemmelighetene: lydenheter og lydstyrker, kodekprioritet, utseende og språk, oppstart, snarveier, diagnosenivået og tilstanden til begge integrasjonene — nyttig for et støtteverktøy som må sjekke en arbeidsstasjon uten skjermdeling. `api.disabled` viser tilgangsgruppene som er av, og `webhooks.silenced` hendelsene som er av; tomme lister betyr at alt er på. Den inneholder aldri SIP-passordet, API-nøkkelen eller webhookens hodeverdi.

## Feil {#errors}

Hver feil er JSON med én enkelt nøkkel `error`, ment for mennesker, ikke for maskinell tolking.

| Status | Innhold | Betydning |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Stien finnes ikke, eller tilgangsgruppen er av; begge gir med vilje det samme svaret. |
| 404 | `{"error":"no contact with that id"}` | Stien er riktig, identifikatoren er det ikke. |
| 400 | `{"error":"no call with that id"}` | Samtalen er slutt, eller har aldri eksistert. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` uten et nummer. Ingenting ble ringt. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` uten sifre. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` uten et mål. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Kontoen for samtalen ble fjernet under samtalen, så målet kan ikke fullføres. Ingenting ble sendt til sentralen. |

Avviste forespørsler telles i `api_requests_refused_total`, så en integrasjon som feiler i det stille, viser seg i målingene og ikke bare i dine egne logger.

## Målinger {#metrics}

`GET /metrics` returnerer hver av telefonens tellere, hver med en hjelpetekst. Samle dem inn med Prometheus, eller les dem for hånd.

| Teller | Teller |
| --- | --- |
| `calls_incoming_total` | Mottatte innkommende samtaler. |
| `calls_outgoing_total` | Ringte utgående samtaler. |
| `calls_answered_total` | Samtaler som ble besvart. |
| `calls_missed_total` | Innkommende samtaler som ikke ble besvart. |
| `calls_declined_total` | Samtaler avvist her eller av den andre siden. |
| `calls_failed_total` | Samtaler som ikke kunne kobles opp. |
| `registrations_succeeded_total` | Vellykkede SIP-registreringer. |
| `registrations_failed_total` | SIP-registreringer som ble avvist eller tidsavbrutt. |
| `webhooks_delivered_total` | Webhooker mottakeren godtok. |
| `webhooks_failed_total` | Webhooker som ble avvist eller ikke levert. |
| `webhooks_dropped_total` | Webhooker som ble kastet fordi køen var full. |
| `api_requests_total` | Forespørsler håndtert av API-et. |
| `api_requests_refused_total` | Avviste forespørsler: feil nøkkel, gruppe av eller ukjent sti. |

## Oppdatere en eldre integrasjon {#updating-an-older-integration}

Tidligere versjoner brukte navn i camelCase og korte identifikatorer. `accountId` heter nå `account_id`, `startedAt` heter `callstart_ts`, `durationSeconds` heter `duration_s`, `answeredBy` heter `answered_by`, og webhookfeltet `at` heter `event_ts`. Samtaler og kontoer identifiseres bare med UUID: `runtimeId` og identifikatorer som `call-3` eller `account-2` returneres eller godtas ikke lenger.

## Når det ikke virker {#when-it-does-not-work}

| Symptom | Hva du bør sjekke |
| --- | --- |
| Tilkobling avvist på `127.0.0.1:8377` | Lokal styring er av, telefonen kjører ikke, eller porten er endret. |
| `404 {"error":"no such endpoint"}` for en sti på denne siden | Tilgangsgruppen er av. |
| Lesing virker, skriving avvises | Endepunktene som endrer lagrede data, krever nøkkelen i hodet `Authorization`. |
| Kategorititlene er ikke på engelsk | Titlene følger grensesnittspråket. Match på `code` fra `/taxonomy`. |
| `accountId`, `startedAt` eller `at` mangler | Integrasjonen ble skrevet for de tidligere navnene; se over. |

Ved et problem med registrering eller selve samtalen åpner du [Diagnostikk](/troubleshooting/diagnostics).
