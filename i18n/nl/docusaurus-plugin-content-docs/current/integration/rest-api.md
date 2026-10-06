---
title: Lokale REST-API
sidebar_position: 2
description: "Andere programma's op deze computer de telefoon laten bedienen — gesprekken voeren en besturen, contacten, geschiedenis en accounts lezen."
---

AI Softphone heeft een REST-API voor CTI-integratie: een programma op dezelfde computer kan gesprekken voeren en besturen, contacten, de gesprekgeschiedenis en SIP-accounts lezen, en de lopende gesprekken volgen. Geen SDK, geen tussenpersoon in de cloud en geen luisterpoort die aan het netwerk is blootgesteld. Verzoeken en antwoorden zijn JSON, dus `curl` of elke HTTP-client volstaat.

De API staat **uit na de installatie**; er luistert niets tot u hem aanzet. Daarna luistert hij alleen op de loopback-interface — *een kleine webinterface die alleen deze computer antwoordt* — en is hij niet bereikbaar vanaf het kantoornetwerk, een VPN of een andere machine.

Gebruik de API als uw programma gegevens van de telefoon nodig heeft of een gesprek moet besturen. Gebruik [webhooks](/integration/webhooks) als het op gesprekken moet reageren terwijl ze gebeuren, zonder steeds te vragen. De meeste koppelingen gebruiken beide; ze zijn onafhankelijk van elkaar.

## Hem aanzetten {#turning-it-on}

Open **Instellingen → Integratie** en ga naar **Lokale bediening**.

<Shot name="17b_settings_integration_scrolled" alt="Instellingen → Integratie: lokale bediening" />

1. Zet **Andere programma's op deze computer de telefoon laten bedienen** aan. De server start meteen.
2. Houd de standaard **Poort**, `8377`, tenzij een ander programma die al gebruikt.
3. Stel eventueel een **Token** in. Na het opslaan toont het veld *Opgeslagen — typ om hem te vervangen*.
4. Kies onder **Toegang** welke groepen u openzet: **Contacten**, **Gesprekgeschiedenis**, **Gesprekken en de bediening ervan**, **Accounts**, **Instellingen**, **Tellers** (de metrics). Een groep die uit staat, wordt niet gefilterd maar helemaal niet aangeboden.
5. Test hem: `curl http://127.0.0.1:8377/accounts`. Is het antwoord JSON, dan werkt de API.

Er wordt geen aparte dienst geïnstalleerd en er is geen herstart nodig. Het deel van het programma dat dit doet, kan worden uitgezet bij [Modules](/application/modules) (**Integratie**).

## De eigen pagina van de API {#the-apis-own-page}

**De eigen pagina van de API openen** opent `http://127.0.0.1:8377` in een browser. Het adres antwoordt met een lijst van alles wat het aanbiedt, in het Engels; de adressen die iets lezen zijn koppelingen die u kunt volgen.

<Shot name="23_api_page" alt="De eigen pagina van de API, http://127.0.0.1:8377/, open in een browser" />

## Toegang en het token {#access-and-the-token}

Wat een programma mag, hangt ervan af of het opgeslagen gegevens wijzigt, niet of het leest:

- **Zonder token** mag elk programma op de computer alles in de opengezette groepen lezen en gesprekken besturen: bellen, opnemen, ophangen, in de wacht zetten, hervatten, doorverbinden en DTMF sturen.
- **Met het token** in de koptekst `Authorization` mag het ook de eindpunten gebruiken die opgeslagen gegevens wijzigen. Zonder het token worden die eindpunten niet aangeboden en niet vermeld op de eigen pagina van de API.

Het token wordt bewaard in de sleutelhanger van de computer, niet in het instellingenbestand, en wordt nooit teruggegeven door `/settings`.

:::caution
Zonder token kan elk programma dat op deze computer draait de telefoon besturen, inclusief gesprekken aannemen. Op een persoonlijke werkplek is dat meestal aanvaardbaar. Stel op een gedeelde of beheerde machine een token in en behandel het als elk ander wachtwoord. Een token beschermt alleen de verzoeken die opgeslagen gegevens wijzigen, niet de gesprekken: wilt u andere programma's van de gesprekken weghouden, zet dan **Gesprekken en de bediening ervan** uit onder **Toegang**.
:::

## Eindpunten {#endpoints}

Het basisadres is `http://127.0.0.1:8377`. De eindpunten hieronder hebben geen token nodig.

| Methode | Pad | Doet |
| --- | --- | --- |
| GET | `/metrics` | De tellers, in Prometheus-formaat. |
| GET | `/ui` | De lijst met opnames, als HTML-pagina. |
| GET | `/ui/recordings/{id}` | Een opname met haar transcript, als HTML-pagina. |
| GET | `/ui/recordings/{id}/audio` | De audio voor de pagina hierboven. |
| GET | `/contacts` | De contacten. |
| GET | `/contacts/{id}` | Eén contact. |
| GET | `/history` | De gesprekgeschiedenis, nieuwste eerst. Accepteert `?limit=`, `?missed=true` en `?declined=true`. |
| GET | `/calls` | De lopende gesprekken. |
| POST | `/calls` | Start een gesprek: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Neemt een gesprek aan. |
| POST | `/calls/{id}/hangup` | Hangt een gesprek op. |
| POST | `/calls/{id}/hold` | Zet een gesprek in de wacht. |
| POST | `/calls/{id}/resume` | Haalt het uit de wacht. |
| POST | `/calls/{id}/dtmf` | Stuurt tonen: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Verbindt het gesprek door: `{"target": "..."}`. |
| GET | `/accounts` | De SIP-accounts en hun registratietoestand. Nooit een wachtwoord. |
| GET | `/settings` | De hele configuratie, zonder de geheimen. |
| GET | `/taxonomy` | Categorieën, labels en signalen, met hun codes. |

Elke identificatie is een UUID die de telefoon uitgeeft: een gespreks-`id` komt uit `/calls` of uit het antwoord op `POST /calls`, een account-`id` uit `/accounts`.

Veldnamen zijn in snake_case en het einde geeft het type aan: `_id` verwijst naar een UUID, `_ts` is een moment in Unix-milliseconden (UTC), `_s` is een duur in seconden. Hetzelfde geldt voor webhooks; alleen `/settings` houdt eigen namen. In de REST-API zijn deze waarden JSON-getallen, en een onbekend moment is `null`.

## Voorbeeld: een gesprek starten {#example-placing-a-call}

`POST /calls` start een uitgaand gesprek. De body is JSON met het te bellen `number` en, optioneel, de `account_id` van het account om mee te bellen:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Het antwoord is de identificatie van het nieuwe gesprek:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` is verplicht. Zonder dat is het antwoord `400 {"error":"a call needs a number"}` en wordt er niets gebeld.
- Het nummer wordt op het gekozen account aangevuld zoals de kiezer het aanvult: `1020` wordt verstuurd als `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` vult zijn `target` op dezelfde manier aan; een doel dat al een schema of een `@` heeft, wordt ongewijzigd verstuurd.
- `account_id` is optioneel; haal het uit `GET /accounts`. Zonder gaat het gesprek uit via het account dat in het hoofdvenster is geselecteerd.
- Gebruik de `id` in `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` en `transfer`. [Webhooks](/integration/webhooks#an-outgoing-call-event-by-event) van dit gesprek dragen dezelfde `id`.

### Vanaf een webpagina: klikken om te bellen {#from-a-web-page-click-to-call}

Een pagina die `127.0.0.1` aanroept, bereikt de computer waarop de browser draait — dezelfde als waarop de telefoon draait —, dus een klik-om-te-bellenknop in een CRM heeft geen eigen server nodig:

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

## Wat de antwoorden bevatten {#what-the-answers-contain}

### Lopende gesprekken: `GET /calls` {#calls-in-progress-get-calls}

Elk gesprek heeft zijn `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` en `callstate_ts`.

- `state` is `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (in de wacht gezet door deze telefoon), `onhold` (in de wacht gezet door de andere partij), `conference` of `ended`. Als er meer dan één van toepassing is, gaat `conference` voor `hold`, en `hold` voor `onhold`.
- `muted` zegt of de microfoon in het gesprek gedempt is; dempen verandert `state` niet.
- `seance_id` is het overkoepelende gesprek: gesprekken die door doorverbinden, ruggespraak of een vergadering verbonden zijn, delen het.
- `event_ts` is wanneer het antwoord werd gemaakt. Vergelijk het met `callstate_ts` om te zien hoelang het gesprek al in zijn toestand is, zonder op uw eigen klok te vertrouwen.

### Accounts: `GET /accounts` {#accounts-get-accounts}

Elk account heeft zijn `id` (overal elders de `account_id`), zijn instellingen — `transport` (`udp`, `tcp` of `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` en andere —, of het `enabled` is, en zijn `state` op de centrale: `registered` zolang de lijn actief is. Wachtwoorden worden nooit meegegeven.

### Gesprekgeschiedenis: `GET /history` {#call-history-get-history}

Nieuwste eerst, 100 items tenzij `?limit=` iets anders zegt. `?missed=true` geeft alleen gemiste gesprekken, `?declined=true` alleen de gesprekken die deze telefoon heeft geweigerd.

| Veld | Betekenis |
| --- | --- |
| `id` | De eigen identificatie van het geschiedenisitem. Het is niet de gespreks-`id` van `/calls` en van webhooks; `seance_id` verbindt de twee. |
| `outcome` | De hoofdindeling: `answered`, `missed`, `declined` of `failed`. |
| `answered` | `true` of `false`. |
| `duration_s` | `0` voor een gesprek dat nooit tot stand kwam. |
| `number`, `uri` | De andere partij, als nummer en als SIP-adres. |
| `name` | Uit Contacten als het nummer bekend is, anders leeg. Koppel op `number`, niet hierop. |
| `dialed` | De gekozen cijfers, bij een uitgaand gesprek; leeg bij een inkomend. |
| `account`, `account_id` | De lijn waarop het gesprek liep. |
| `reason` | Hoe het eindigde: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` als een persoon opnam; anders wat het gesprek aannam. |

### Contacten: `GET /contacts` {#contacts-get-contacts}

Elk contact heeft zijn `id`, `name`, `number` en de lijn waartoe het behoort, `account_id` en `account`; een lege `account` betekent dat het contact niet aan een lijn gebonden is.

### Opnames {#recordings}

Opnames en transcripten worden niet als JSON uitgegeven. De API biedt ze aan als HTML-pagina's, `/ui` en `/ui/recordings/{id}`: link vanuit uw CRM naar deze pagina's in plaats van audio te verplaatsen. De koppeling opent op de computer die de opname bewaart, en de audio verlaat die nooit.

## Taxonomie en instellingen {#taxonomy-and-settings}

Elk item van `/taxonomy` heeft een vaste `code`, een `title` en een `description` in de interfacetaal, een `kind` (`category`, `tag` of `red_flag`) en, bij signalen, een `severity`. **Koppel op `code`, nooit op `title`**: titels komen in de taal waarop de telefoon is ingesteld. Een item met `retired: true` blijft bewaard zodat oudere gesprekken nog kloppen; het wordt niet meer aan nieuwe gesprekken gegeven. Laad de taxonomie één keer bij het opstarten om de woorden van de telefoon aan uw eigen velden te koppelen.

`/settings` geeft de configuratie behalve de geheimen: audioapparaten en volumes, codecvolgorde, uiterlijk en taal, opstarten, sneltoetsen, het diagnoseniveau en de toestand van beide integraties — handig voor een supporttool die een werkplek moet controleren zonder het scherm te delen. `api.disabled` toont de toegangsgroepen die uit staan en `webhooks.silenced` de gebeurtenissen die uit staan; lege lijsten betekenen dat alles aan staat. Het bevat nooit het SIP-wachtwoord, het API-token of de koptekstwaarde van de webhook.

## Fouten {#errors}

Elke fout is JSON met één sleutel `error`, bedoeld voor mensen, niet om te parsen.

| Status | Body | Betekenis |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Het pad bestaat niet, of de toegangsgroep staat uit; beide geven met opzet hetzelfde antwoord. |
| 404 | `{"error":"no contact with that id"}` | Het pad klopt, de identificatie niet. |
| 400 | `{"error":"no call with that id"}` | Het gesprek is beëindigd, of heeft nooit bestaan. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` zonder nummer. Er werd niets gebeld. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` zonder cijfers. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` zonder doel. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Het account van het gesprek is tijdens het gesprek verwijderd, dus het doel kan niet worden aangevuld. Er is niets naar de centrale gestuurd. |

Geweigerde verzoeken worden geteld in `api_requests_refused_total`, zodat een koppeling die stil faalt zichtbaar wordt in de metrics, niet alleen in uw eigen logboeken.

## Metrics {#metrics}

`GET /metrics` geeft elke teller van de telefoon, elk met een helptekst. Verzamel ze met Prometheus of lees ze met de hand.

| Teller | Telt |
| --- | --- |
| `calls_incoming_total` | Ontvangen inkomende gesprekken. |
| `calls_outgoing_total` | Gevoerde uitgaande gesprekken. |
| `calls_answered_total` | Gesprekken die werden aangenomen. |
| `calls_missed_total` | Inkomende gesprekken die niet werden aangenomen. |
| `calls_declined_total` | Gesprekken die hier of door de andere kant werden geweigerd. |
| `calls_failed_total` | Gesprekken die niet tot stand konden komen. |
| `registrations_succeeded_total` | Geslaagde SIP-registraties. |
| `registrations_failed_total` | Geweigerde of verlopen SIP-registraties. |
| `webhooks_delivered_total` | Webhooks die de ontvanger accepteerde. |
| `webhooks_failed_total` | Geweigerde of niet bezorgde webhooks. |
| `webhooks_dropped_total` | Webhooks die werden weggegooid omdat de wachtrij vol was. |
| `api_requests_total` | Door de API afgehandelde verzoeken. |
| `api_requests_refused_total` | Geweigerde verzoeken: verkeerd token, groep uit of onbekend pad. |

## Een oudere koppeling bijwerken {#updating-an-older-integration}

Eerdere versies gebruikten namen in camelCase en korte identificaties. `accountId` is nu `account_id`, `startedAt` is `callstart_ts`, `durationSeconds` is `duration_s`, `answeredBy` is `answered_by`, en het webhookveld `at` is `event_ts`. Gesprekken en accounts worden alleen nog met een UUID aangeduid: `runtimeId` en identificaties als `call-3` of `account-2` worden niet meer teruggegeven of geaccepteerd.

## Als het niet werkt {#when-it-does-not-work}

| Symptoom | Wat u controleert |
| --- | --- |
| Verbinding geweigerd op `127.0.0.1:8377` | Lokale bediening staat uit, de telefoon draait niet, of de poort is gewijzigd. |
| `404 {"error":"no such endpoint"}` voor een pad op deze pagina | De toegangsgroep staat uit. |
| Lezen werkt, schrijven wordt geweigerd | De eindpunten die opgeslagen gegevens wijzigen, hebben het token in de koptekst `Authorization` nodig. |
| Categorietitels zijn niet in het Engels | Titels volgen de interfacetaal. Koppel op `code` uit `/taxonomy`. |
| `accountId`, `startedAt` of `at` ontbreken | De koppeling is geschreven voor de eerdere namen; zie hierboven. |

Open bij een probleem met de registratie of met een gesprek zelf [Diagnose](/troubleshooting/diagnostics).
