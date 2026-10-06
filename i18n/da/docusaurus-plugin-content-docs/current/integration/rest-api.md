---
title: Lokalt REST-API
sidebar_position: 2
description: Lad andre programmer på denne computer styre telefonen — foretag og styr opkald, læs kontakter, historik og konti.
---

AI Softphone har et REST-API til CTI-integration: et program på samme computer kan foretage og styre opkald, læse kontakter, opkaldshistorik og SIP-konti og følge de igangværende opkald. Intet SDK, ingen mellemmand i skyen og ingen lytter, der er eksponeret mod netværket. Forespørgsler og svar er JSON, så `curl` eller en hvilken som helst HTTP-klient er nok.

API'et er **slået fra efter installationen**; intet lytter, før du slår det til. Derefter lytter det kun på loopback-grænsefladen — *en lille webgrænseflade, der kun svarer denne computer* — og kan ikke nås fra kontornetværket, et VPN eller en anden maskine.

Brug API'et, når dit program har brug for data fra telefonen eller skal styre et opkald. Brug [webhooks](/integration/webhooks), når det skal reagere på opkald, mens de sker, uden at spørge igen og igen. De fleste integrationer bruger begge; de er uafhængige af hinanden.

## Slå det til {#turning-it-on}

Åbn **Indstillinger → Integration**, og gå til **Lokal styring**.

<Shot name="17b_settings_integration_scrolled" alt="Indstillinger → Integration: lokal styring" />

1. Slå **Lad andre programmer på denne computer styre telefonen** til. Serveren starter med det samme.
2. Behold standard-**Port**, `8377`, medmindre et andet program allerede bruger den.
3. Sæt eventuelt en **Nøgle**. Når den er gemt, viser feltet *Gemt — skriv for at erstatte det*.
4. Vælg under **Adgang** de grupper, der skal åbnes: **Kontakter**, **Opkaldshistorik**, **Opkald, og styringen af dem**, **Konti**, **Indstillinger**, **Tællere** (målingerne). En gruppe, der er slået fra, filtreres ikke, men stilles slet ikke til rådighed.
5. Prøv det: `curl http://127.0.0.1:8377/accounts`. Er svaret JSON, virker API'et.

Der installeres ingen separat tjeneste, og der kræves ingen genstart. Den del af programmet, der gør dette, kan slås fra under [Moduler](/application/modules) (**Integration**).

## API'ets egen side {#the-apis-own-page}

**Åbn API'ets egen side** åbner `http://127.0.0.1:8377` i en browser. Adressen svarer med en liste over alt, hvad den stiller til rådighed, på engelsk; de adresser, der læser noget, er links, du kan følge.

<Shot name="23_api_page" alt="API'ets egen side, http://127.0.0.1:8377/, åbnet i en browser" />

## Adgang og nøglen {#access-and-the-token}

Hvad et program må, afhænger af, om det ændrer gemte data, ikke af, om det læser:

- **Uden en nøgle** må ethvert program på computeren læse alt i de åbnede grupper og styre opkald: foretage, besvare, lægge på, parkere, genoptage, viderestille og sende DTMF.
- **Med nøglen** i hovedet `Authorization` må det også bruge de endepunkter, der ændrer det gemte. Uden nøglen bliver disse endepunkter hverken stillet til rådighed eller vist på API'ets egen side.

Nøglen gemmes i computerens nøglering, ikke i indstillingsfilen, og returneres aldrig af `/settings`.

:::caution
Uden en nøgle kan ethvert program, der kører på denne computer, styre telefonen, også besvare opkald. På en personlig arbejdsstation er det som regel acceptabelt. På en delt eller administreret maskine bør du sætte en nøgle og behandle den som enhver anden adgangskode. Nøglen beskytter kun de forespørgsler, der ændrer gemte data, ikke opkaldene: vil du holde andre programmer væk fra opkaldene, så slå **Opkald, og styringen af dem** fra under **Adgang**.
:::

## Endepunkter {#endpoints}

Grundadressen er `http://127.0.0.1:8377`. Endepunkterne nedenfor kræver ingen nøgle.

| Metode | Sti | Gør |
| --- | --- | --- |
| GET | `/metrics` | Tællerne i Prometheus-format. |
| GET | `/ui` | Listen over optagelser som en HTML-side. |
| GET | `/ui/recordings/{id}` | En optagelse med dens udskrift som en HTML-side. |
| GET | `/ui/recordings/{id}/audio` | Lyden til siden ovenfor. |
| GET | `/contacts` | Kontakterne. |
| GET | `/contacts/{id}` | En enkelt kontakt. |
| GET | `/history` | Opkaldshistorikken, nyeste først. Accepterer `?limit=`, `?missed=true` og `?declined=true`. |
| GET | `/calls` | De igangværende opkald. |
| POST | `/calls` | Foretager et opkald: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Besvarer et opkald. |
| POST | `/calls/{id}/hangup` | Lægger et opkald på. |
| POST | `/calls/{id}/hold` | Parkerer et opkald. |
| POST | `/calls/{id}/resume` | Tager det ud af parkering. |
| POST | `/calls/{id}/dtmf` | Sender toner: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Viderestiller opkaldet: `{"target": "..."}`. |
| GET | `/accounts` | SIP-kontiene og deres registreringstilstand. Aldrig en adgangskode. |
| GET | `/settings` | Hele konfigurationen uden hemmelighederne. |
| GET | `/taxonomy` | Kategorier, etiketter og signaler med deres koder. |

Hver identifikator er en UUID udstedt af telefonen: et opkalds `id` kommer fra `/calls` eller fra svaret på `POST /calls`, en kontos `id` fra `/accounts`.

Feltnavne er i snake_case, og endelsen fortæller typen: `_id` er en reference til en UUID, `_ts` er et tidspunkt i Unix-millisekunder (UTC), `_s` er en varighed i sekunder. Det samme gælder for webhooks; kun `/settings` har sine egne navne. I REST-API'et er disse værdier JSON-tal, og et ukendt tidspunkt er `null`.

## Eksempel: foretage et opkald {#example-placing-a-call}

`POST /calls` foretager et udgående opkald. Indholdet er JSON med det `number`, der skal ringes til, og eventuelt `account_id` for den konto, der skal ringes fra:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Svaret er det nye opkalds identifikator:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` er påkrævet. Uden det er svaret `400 {"error":"a call needs a number"}`, og der ringes ikke op.
- Nummeret fuldendes på den valgte konto, som opkaldsfeltet fuldender det: `1020` sendes som `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` fuldender sit `target` på samme måde; et mål, der allerede har et skema eller et `@`, sendes, som det er.
- `account_id` er valgfrit; tag det fra `GET /accounts`. Uden det går opkaldet ud på den konto, der er valgt i hovedvinduet.
- Brug `id` i `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` og `transfer`. [Webhooks](/integration/webhooks#an-outgoing-call-event-by-event) for dette opkald bærer samme `id`.

### Fra en webside: klik for at ringe {#from-a-web-page-click-to-call}

En side, der kalder `127.0.0.1`, når den computer, browseren kører på — den samme, telefonen kører på —, så en klik-for-at-ringe-knap i et CRM behøver ingen egen server:

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

## Hvad svarene indeholder {#what-the-answers-contain}

### Igangværende opkald: `GET /calls` {#calls-in-progress-get-calls}

Hvert opkald har sit `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` og `callstate_ts`.

- `state` er `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (parkeret af denne telefon), `onhold` (parkeret af den anden part), `conference` eller `ended`. Når flere gælder, vinder `conference` over `hold`, og `hold` over `onhold`.
- `muted` siger, om mikrofonen er slået fra i opkaldet; at slå lyden fra ændrer ikke `state`.
- `seance_id` er samtalen: opkald, der er forbundet ved en viderestilling, en konsultation eller en konference, deler den.
- `event_ts` er, hvornår svaret blev lavet. Sammenlign det med `callstate_ts` for at se, hvor længe opkaldet har været i sin tilstand, uden at stole på dit eget ur.

### Konti: `GET /accounts` {#accounts-get-accounts}

Hver konto har sit `id` (`account_id` alle andre steder), sine indstillinger — `transport` (`udp`, `tcp` eller `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` og andre —, om den er `enabled`, og sin `state` på omstillingsanlægget: `registered`, mens linjen er oppe. Adgangskoder er aldrig med.

### Opkaldshistorik: `GET /history` {#call-history-get-history}

Nyeste først, 100 poster, medmindre `?limit=` siger andet. `?missed=true` returnerer kun ubesvarede opkald, `?declined=true` kun de opkald, denne telefon afviste.

| Felt | Betydning |
| --- | --- |
| `id` | Historikpostens egen identifikator. Det er ikke opkalds-`id` fra `/calls` og fra webhooks; `seance_id` forbinder de to. |
| `outcome` | Hovedklassificeringen: `answered`, `missed`, `declined` eller `failed`. |
| `answered` | `true` eller `false`. |
| `duration_s` | `0` for et opkald, der aldrig blev forbundet. |
| `number`, `uri` | Den anden part som nummer og som SIP-adresse. |
| `name` | Fra Kontakter, hvis nummeret er kendt, ellers tomt. Match på `number`, ikke på dette. |
| `dialed` | De tastede cifre ved et udgående opkald; tomt ved et indgående. |
| `account`, `account_id` | Den linje, opkaldet gik over. |
| `reason` | Hvordan det sluttede: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, hvis en person besvarede det; ellers det, der besvarede opkaldet. |

### Kontakter: `GET /contacts` {#contacts-get-contacts}

Hver kontakt har sit `id`, `name`, `number` og den linje, den hører til, `account_id` og `account`; en tom `account` betyder, at kontakten ikke er knyttet til en linje.

### Optagelser {#recordings}

Optagelser og udskrifter udleveres ikke som JSON. API'et stiller dem til rådighed som HTML-sider, `/ui` og `/ui/recordings/{id}`: link til disse sider fra dit CRM i stedet for at flytte lyd rundt. Linket åbner på den computer, der gemmer optagelsen, og lyden forlader den aldrig.

## Taksonomi og indstillinger {#taxonomy-and-settings}

Hver post i `/taxonomy` har en fast `code`, en `title` og en `description` på brugerfladens sprog, en `kind` (`category`, `tag` eller `red_flag`) og, for signaler, en `severity`. **Match på `code`, aldrig på `title`**: titler kommer på det sprog, telefonen er sat til. En post med `retired: true` beholdes, så ældre opkald stadig kan slås op; den gives ikke længere til nye opkald. Indlæs taksonomien én gang ved opstart for at koble telefonens ord til dine egne felter.

`/settings` returnerer konfigurationen undtagen hemmelighederne: lydenheder og lydstyrker, codec-prioritet, udseende og sprog, opstart, genveje, diagnoseniveauet og tilstanden for begge integrationer — nyttigt for et supportværktøj, der skal tjekke en arbejdsstation uden skærmdeling. `api.disabled` viser de adgangsgrupper, der er slået fra, og `webhooks.silenced` de hændelser, der er slået fra; tomme lister betyder, at alt er slået til. Den indeholder aldrig SIP-adgangskoden, API-nøglen eller webhookens hovedværdi.

## Fejl {#errors}

Hver fejl er JSON med en enkelt nøgle `error`, beregnet til mennesker, ikke til maskinel fortolkning.

| Status | Indhold | Betydning |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Stien findes ikke, eller dens adgangsgruppe er slået fra; begge giver med vilje samme svar. |
| 404 | `{"error":"no contact with that id"}` | Stien er rigtig, identifikatoren er ikke. |
| 400 | `{"error":"no call with that id"}` | Opkaldet er slut eller har aldrig eksisteret. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` uden et nummer. Der blev ikke ringet op. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` uden cifre. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` uden et mål. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Opkaldets konto blev fjernet under opkaldet, så målet kan ikke fuldendes. Intet blev sendt til omstillingsanlægget. |

Afviste forespørgsler tælles i `api_requests_refused_total`, så en integration, der fejler i stilhed, viser sig i målingerne og ikke kun i dine egne logge.

## Målinger {#metrics}

`GET /metrics` returnerer hver af telefonens tællere, hver med en hjælpetekst. Indsaml dem med Prometheus, eller læs dem manuelt.

| Tæller | Tæller |
| --- | --- |
| `calls_incoming_total` | Modtagne indgående opkald. |
| `calls_outgoing_total` | Foretagne udgående opkald. |
| `calls_answered_total` | Opkald, der blev besvaret. |
| `calls_missed_total` | Indgående opkald, der ikke blev besvaret. |
| `calls_declined_total` | Opkald afvist her eller af den anden side. |
| `calls_failed_total` | Opkald, der ikke kunne oprettes. |
| `registrations_succeeded_total` | Vellykkede SIP-registreringer. |
| `registrations_failed_total` | SIP-registreringer, der blev afvist eller udløb. |
| `webhooks_delivered_total` | Webhooks, modtageren accepterede. |
| `webhooks_failed_total` | Webhooks, der blev afvist eller ikke leveret. |
| `webhooks_dropped_total` | Webhooks smidt væk, fordi køen var fuld. |
| `api_requests_total` | Forespørgsler håndteret af API'et. |
| `api_requests_refused_total` | Afviste forespørgsler: forkert nøgle, gruppe slået fra eller ukendt sti. |

## Opdatere en ældre integration {#updating-an-older-integration}

Tidligere versioner brugte navne i camelCase og korte identifikatorer. `accountId` hedder nu `account_id`, `startedAt` hedder `callstart_ts`, `durationSeconds` hedder `duration_s`, `answeredBy` hedder `answered_by`, og webhookfeltet `at` hedder `event_ts`. Opkald og konti identificeres kun ved UUID: `runtimeId` og identifikatorer som `call-3` eller `account-2` returneres eller accepteres ikke længere.

## Når det ikke virker {#when-it-does-not-work}

| Symptom | Hvad du skal tjekke |
| --- | --- |
| Forbindelse afvist på `127.0.0.1:8377` | Lokal styring er slået fra, telefonen kører ikke, eller porten er ændret. |
| `404 {"error":"no such endpoint"}` for en sti på denne side | Dens adgangsgruppe er slået fra. |
| Læsning virker, skrivning afvises | De endepunkter, der ændrer gemte data, kræver nøglen i hovedet `Authorization`. |
| Kategorititler er ikke på engelsk | Titler følger brugerfladens sprog. Match på `code` fra `/taxonomy`. |
| `accountId`, `startedAt` eller `at` mangler | Integrationen blev skrevet til de tidligere navne; se ovenfor. |

Ved et problem med registrering eller selve opkaldet skal du åbne [Diagnostik](/troubleshooting/diagnostics).
