---
title: Lokalt REST-API
sidebar_position: 2
description: Låt andra program på den här datorn styra telefonen — ring och styr samtal, läs kontakter, historik och konton.
---

AI Softphone har ett REST-API för CTI-integration: ett program på samma dator kan ringa och styra samtal, läsa kontakter, samtalshistorik och SIP-konton, och bevaka pågående samtal. Inget SDK, ingen mellanhand i molnet och ingen lyssnare som exponeras mot nätverket. Begäranden och svar är JSON, så `curl` eller vilken HTTP-klient som helst räcker.

API:et är **av efter installationen**; ingenting lyssnar förrän du slår på det. Därefter lyssnar det bara på loopback-gränssnittet — *ett litet webbgränssnitt som bara svarar den här datorn* — och kan inte nås från kontorsnätverket, ett VPN eller en annan dator.

Använd API:et när ditt program behöver data från telefonen eller måste styra ett samtal. Använd [webhookar](/integration/webhooks) när det måste reagera på samtal medan de pågår, utan att fråga om och om igen. De flesta integrationer använder båda; de är oberoende av varandra.

## Slå på det {#turning-it-on}

Öppna **Inställningar → Integration** och gå till **Lokal styrning**.

<Shot name="17b_settings_integration_scrolled" alt="Inställningar → Integration: lokal styrning" />

1. Slå på **Låt andra program på den här datorn styra telefonen**. Servern startar direkt.
2. Behåll standardvärdet för **Port**, `8377`, om inte ett annat program redan använder den.
3. Ange eventuellt en **Nyckel**. När den har sparats visar fältet *Sparat — skriv för att ersätta det*.
4. Välj under **Åtkomst** vilka grupper som ska öppnas: **Kontakter**, **Samtalshistorik**, **Samtal, och styrningen av dem**, **Konton**, **Inställningar**, **Räknare** (mätvärdena). En grupp som är av filtreras inte utan tillhandahålls inte alls.
5. Prova det: `curl http://127.0.0.1:8377/accounts`. Är svaret JSON fungerar API:et.

Ingen separat tjänst installeras och ingen omstart behövs. Den del av programmet som gör detta kan stängas av under [Moduler](/application/modules) (**Integration**).

## API:ets egen sida {#the-apis-own-page}

**Öppna API:ets egen sida** öppnar `http://127.0.0.1:8377` i en webbläsare. Adressen svarar med en lista över allt den tillhandahåller, på engelska; adresserna som läser något är länkar du kan följa.

<Shot name="23_api_page" alt="API:ets egen sida, http://127.0.0.1:8377/, öppnad i en webbläsare" />

## Åtkomst och nyckeln {#access-and-the-token}

Vad ett program får göra beror på om det ändrar sparade data, inte på om det läser:

- **Utan nyckel** får vilket program som helst på datorn läsa allt i de öppnade grupperna och styra samtal: ringa, svara, lägga på, parkera, återuppta, koppla vidare och skicka DTMF.
- **Med nyckeln** i huvudet `Authorization` får det också använda slutpunkterna som ändrar det som är sparat. Utan nyckeln varken tillhandahålls eller visas de slutpunkterna på API:ets egen sida.

Nyckeln sparas i datorns nyckelring, inte i inställningsfilen, och returneras aldrig av `/settings`.

:::caution
Utan nyckel kan vilket program som helst som körs på den här datorn styra telefonen, även svara på samtal. På en personlig arbetsstation är det oftast godtagbart. På en delad eller hanterad dator bör du ange en nyckel och behandla den som vilket annat lösenord som helst. Nyckeln skyddar bara de anrop som ändrar sparade data, inte samtalen: vill du hålla andra program borta från samtalen stänger du av **Samtal, och styrningen av dem** under **Åtkomst**.
:::

## Slutpunkter {#endpoints}

Basadressen är `http://127.0.0.1:8377`. Slutpunkterna nedan behöver ingen nyckel.

| Metod | Sökväg | Gör |
| --- | --- | --- |
| GET | `/metrics` | Räknarna, i Prometheus-format. |
| GET | `/ui` | Listan över inspelningar, som en HTML-sida. |
| GET | `/ui/recordings/{id}` | En inspelning med dess utskrift, som en HTML-sida. |
| GET | `/ui/recordings/{id}/audio` | Ljudet till sidan ovan. |
| GET | `/contacts` | Kontakterna. |
| GET | `/contacts/{id}` | En enskild kontakt. |
| GET | `/history` | Samtalshistoriken, nyast först. Accepterar `?limit=`, `?missed=true` och `?declined=true`. |
| GET | `/calls` | De pågående samtalen. |
| POST | `/calls` | Ringer ett samtal: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Svarar på ett samtal. |
| POST | `/calls/{id}/hangup` | Lägger på ett samtal. |
| POST | `/calls/{id}/hold` | Parkerar ett samtal. |
| POST | `/calls/{id}/resume` | Återupptar det. |
| POST | `/calls/{id}/dtmf` | Skickar toner: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Kopplar vidare samtalet: `{"target": "..."}`. |
| GET | `/accounts` | SIP-kontona och deras registreringstillstånd. Aldrig ett lösenord. |
| GET | `/settings` | Hela konfigurationen, utan hemligheterna. |
| GET | `/taxonomy` | Kategorier, etiketter och signaler, med sina koder. |

Varje identifierare är ett UUID som utfärdas av telefonen: ett samtals `id` kommer från `/calls` eller från svaret på `POST /calls`, ett kontos `id` från `/accounts`.

Fältnamnen är i snake_case och ändelsen anger typen: `_id` är en referens till ett UUID, `_ts` är en tidpunkt i Unix-millisekunder (UTC), `_s` är en längd i sekunder. Detsamma gäller för webhookar; bara `/settings` har egna namn. I REST-API:et är de här värdena JSON-tal, och en okänd tidpunkt är `null`.

## Exempel: ringa ett samtal {#example-placing-a-call}

`POST /calls` ringer ett utgående samtal. Innehållet är JSON med `number` som ska ringas och eventuellt `account_id` för kontot det ska ringas från:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Svaret är det nya samtalets identifierare:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` är obligatoriskt. Utan det är svaret `400 {"error":"a call needs a number"}` och ingenting rings.
- Numret kompletteras på det valda kontot på samma sätt som nummerfältet kompletterar det: `1020` skickas som `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` kompletterar sitt `target` på samma sätt; ett mål som redan har ett schema eller ett `@` skickas som det är.
- `account_id` är valfritt; hämta det från `GET /accounts`. Utan det går samtalet ut på kontot som är valt i huvudfönstret.
- Använd `id` i `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` och `transfer`. [Webhookarna](/integration/webhooks#an-outgoing-call-event-by-event) för det här samtalet har samma `id`.

### Från en webbsida: klicka för att ringa {#from-a-web-page-click-to-call}

En sida som anropar `127.0.0.1` når datorn som webbläsaren körs på — samma dator som telefonen körs på —, så en klicka-för-att-ringa-knapp i ett CRM behöver ingen egen server:

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

## Vad svaren innehåller {#what-the-answers-contain}

### Pågående samtal: `GET /calls` {#calls-in-progress-get-calls}

Varje samtal har sitt `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` och `callstate_ts`.

- `state` är `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (parkerat av den här telefonen), `onhold` (parkerat av den andra parten), `conference` eller `ended`. När flera gäller vinner `conference` över `hold`, och `hold` över `onhold`.
- `muted` anger om mikrofonen är avstängd i samtalet; att stänga av mikrofonen ändrar inte `state`.
- `seance_id` är samtalet i vidare mening: samtal som hänger ihop genom en vidarekoppling, en konsultation eller en konferens delar det.
- `event_ts` är när svaret skapades. Jämför det med `callstate_ts` för att se hur länge samtalet har varit i sitt tillstånd, utan att förlita dig på din egen klocka.

### Konton: `GET /accounts` {#accounts-get-accounts}

Varje konto har sitt `id` (`account_id` överallt annars), sina inställningar — `transport` (`udp`, `tcp` eller `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` och andra —, om det är `enabled`, och sitt `state` på växeln: `registered` medan linjen är uppe. Lösenord ingår aldrig.

### Samtalshistorik: `GET /history` {#call-history-get-history}

Nyast först, 100 poster om inte `?limit=` säger något annat. `?missed=true` returnerar bara missade samtal, `?declined=true` bara de samtal som den här telefonen avvisade.

| Fält | Betydelse |
| --- | --- |
| `id` | Historikpostens egen identifierare. Det är inte samtals-`id` från `/calls` och från webhookar; `seance_id` kopplar ihop de två. |
| `outcome` | Huvudklassificeringen: `answered`, `missed`, `declined` eller `failed`. |
| `answered` | `true` eller `false`. |
| `duration_s` | `0` för ett samtal som aldrig kopplades upp. |
| `number`, `uri` | Den andra parten, som nummer och som SIP-adress. |
| `name` | Från Kontakter om numret är känt, annars tomt. Matcha på `number`, inte på detta. |
| `dialed` | De slagna siffrorna, för ett utgående samtal; tomt för ett inkommande. |
| `account`, `account_id` | Linjen samtalet gick över. |
| `reason` | Hur det slutade: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` om en person svarade; annars det som svarade på samtalet. |

### Kontakter: `GET /contacts` {#contacts-get-contacts}

Varje kontakt har sitt `id`, `name`, `number` och linjen den hör till, `account_id` och `account`; ett tomt `account` betyder att kontakten inte är knuten till någon linje.

### Inspelningar {#recordings}

Inspelningar och utskrifter lämnas inte ut som JSON. API:et tillhandahåller dem som HTML-sidor, `/ui` och `/ui/recordings/{id}`: länka till de här sidorna från ditt CRM i stället för att flytta runt ljud. Länken öppnas på datorn som har inspelningen, och ljudet lämnar den aldrig.

## Taxonomi och inställningar {#taxonomy-and-settings}

Varje post i `/taxonomy` har en fast `code`, en `title` och en `description` på gränssnittets språk, en `kind` (`category`, `tag` eller `red_flag`) och, för signaler, en `severity`. **Matcha på `code`, aldrig på `title`**: titlarna kommer på det språk telefonen är inställd på. En post med `retired: true` behålls så att äldre samtal fortfarande kan slås upp; den ges inte längre till nya samtal. Läs in taxonomin en gång vid start för att koppla telefonens ord till dina egna fält.

`/settings` returnerar konfigurationen utom hemligheterna: ljudenheter och volymer, kodekprioritet, utseende och språk, uppstart, genvägar, diagnostiknivån och tillståndet för båda integrationerna — användbart för ett supportverktyg som måste kontrollera en arbetsstation utan skärmdelning. `api.disabled` visar åtkomstgrupperna som är av och `webhooks.silenced` händelserna som är av; tomma listor betyder att allt är på. Den innehåller aldrig SIP-lösenordet, API-nyckeln eller webhookens huvudvärde.

## Fel {#errors}

Varje fel är JSON med en enda nyckel `error`, avsedd för människor, inte för maskinell tolkning.

| Status | Innehåll | Betydelse |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Sökvägen finns inte, eller dess åtkomstgrupp är av; båda ger avsiktligt samma svar. |
| 404 | `{"error":"no contact with that id"}` | Sökvägen är rätt, identifieraren är det inte. |
| 400 | `{"error":"no call with that id"}` | Samtalet har slutat, eller har aldrig funnits. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` utan nummer. Ingenting ringdes. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` utan siffror. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` utan mål. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Samtalets konto togs bort under samtalet, så målet kan inte kompletteras. Ingenting skickades till växeln. |

Avvisade begäranden räknas i `api_requests_refused_total`, så en integration som misslyckas i det tysta syns i mätvärdena och inte bara i dina egna loggar.

## Mätvärden {#metrics}

`GET /metrics` returnerar varje räknare i telefonen, var och en med en hjälptext. Samla in dem med Prometheus eller läs dem för hand.

| Räknare | Räknar |
| --- | --- |
| `calls_incoming_total` | Mottagna inkommande samtal. |
| `calls_outgoing_total` | Ringda utgående samtal. |
| `calls_answered_total` | Samtal som besvarades. |
| `calls_missed_total` | Inkommande samtal som inte besvarades. |
| `calls_declined_total` | Samtal som avvisades här eller av andra sidan. |
| `calls_failed_total` | Samtal som inte kunde kopplas upp. |
| `registrations_succeeded_total` | Lyckade SIP-registreringar. |
| `registrations_failed_total` | SIP-registreringar som avvisades eller tog för lång tid. |
| `webhooks_delivered_total` | Webhookar som mottagaren accepterade. |
| `webhooks_failed_total` | Webhookar som avvisades eller inte levererades. |
| `webhooks_dropped_total` | Webhookar som kastades eftersom kön var full. |
| `api_requests_total` | Begäranden som hanterats av API:et. |
| `api_requests_refused_total` | Avvisade begäranden: fel nyckel, grupp av eller okänd sökväg. |

## Uppdatera en äldre integration {#updating-an-older-integration}

Tidigare versioner använde namn i camelCase och korta identifierare. `accountId` heter nu `account_id`, `startedAt` heter `callstart_ts`, `durationSeconds` heter `duration_s`, `answeredBy` heter `answered_by`, och webhookfältet `at` heter `event_ts`. Samtal och konton identifieras bara med UUID: `runtimeId` och identifierare som `call-3` eller `account-2` returneras eller accepteras inte längre.

## När det inte fungerar {#when-it-does-not-work}

| Symtom | Vad du ska kontrollera |
| --- | --- |
| Anslutning nekad på `127.0.0.1:8377` | Lokal styrning är av, telefonen körs inte, eller porten har ändrats. |
| `404 {"error":"no such endpoint"}` för en sökväg på den här sidan | Dess åtkomstgrupp är av. |
| Läsning fungerar, skrivning avvisas | Slutpunkterna som ändrar sparade data kräver nyckeln i huvudet `Authorization`. |
| Kategorititlarna är inte på engelska | Titlarna följer gränssnittets språk. Matcha på `code` från `/taxonomy`. |
| `accountId`, `startedAt` eller `at` saknas | Integrationen skrevs för de tidigare namnen; se ovan. |

Vid ett problem med registrering eller med själva samtalet öppnar du [Diagnostik](/troubleshooting/diagnostics).
