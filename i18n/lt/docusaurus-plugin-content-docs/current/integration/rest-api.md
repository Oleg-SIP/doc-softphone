---
title: Vietinis REST API
sidebar_position: 2
description: Leiskite kitoms šio kompiuterio programoms valdyti telefoną — atlikti ir valdyti skambučius, skaityti kontaktus, istoriją ir paskyras.
---

AI Softphone turi REST API CTI integracijai: tame pačiame kompiuteryje esanti programa gali atlikti ir valdyti skambučius, skaityti kontaktus, skambučių istoriją ir SIP paskyras bei stebėti vykstančius skambučius. Jokio SDK, jokio tarpininko debesyje ir jokio tinklui atverto klausytojo. Užklausos ir atsakymai yra JSON, todėl užtenka `curl` ar bet kurio HTTP kliento.

Įdiegus API yra **išjungtas**; niekas nesiklauso, kol jo neįjungiate. Tada jis klausosi tik grįžtamojo ryšio sąsajoje — *nedidelė žiniatinklio sąsaja, kuri atsako tik šiam kompiuteriui* — ir nėra pasiekiamas iš biuro tinklo, VPN ar kito kompiuterio.

Naudokite API, kai jūsų programai reikia duomenų iš telefono arba ji turi valdyti skambutį. Naudokite [žiniatinklio kablius](/integration/webhooks), kai ji turi reaguoti į skambučius jiems vykstant, nuolat neklausinėdama. Dauguma integracijų naudoja abu; jie nepriklauso vienas nuo kito.

## Jo įjungimas {#turning-it-on}

Atverkite **Nustatymai → Integracija** ir eikite į **Vietinis valdymas**.

<Shot name="17b_settings_integration_scrolled" alt="Nustatymai → Integracija: vietinis valdymas" />

1. Įjunkite **Leisti kitoms šio kompiuterio programoms valdyti telefoną**. Serveris paleidžiamas iškart.
2. Palikite numatytąjį **Prievadas**, `8377`, nebent jį jau naudoja kita programa.
3. Pasirinktinai nustatykite **Prieigos raktą**. Išsaugojus lauke rodoma *Įrašyta — rašykite, kad tai pakeistumėte*.
4. Skiltyje **Prieiga** pasirinkite atveriamas grupes: **Kontaktai**, **Skambučių istorija**, **Skambučiai ir jų valdymas**, **Paskyros**, **Nustatymai**, **Skaitikliai** (metrikos). Išjungta grupė nefiltruojama, bet visai neteikiama.
5. Patikrinkite: `curl http://127.0.0.1:8377/accounts`. Jei atsakymas yra JSON, API veikia.

Atskira paslauga neįdiegiama ir paleisti iš naujo nereikia. Programos dalį, kuri tai daro, galima išjungti skiltyje [Moduliai](/application/modules) (**Integracija**).

## Paties API puslapis {#the-apis-own-page}

**Atverti paties API puslapį** atveria `http://127.0.0.1:8377` naršyklėje. Adresas atsako sąrašu anglų kalba su viskuo, ką jis teikia; adresai, kurie ką nors nuskaito, yra nuorodos, kuriomis galima sekti.

<Shot name="23_api_page" alt="Paties API puslapis, http://127.0.0.1:8377/, atvertas naršyklėje" />

## Prieiga ir prieigos raktas {#access-and-the-token}

Ką programa gali daryti, priklauso nuo to, ar ji keičia išsaugotus duomenis, o ne nuo to, ar ji skaito:

- **Be prieigos rakto** bet kuri kompiuterio programa gali skaityti viską įjungtose grupėse ir valdyti skambučius: skambinti, atsiliepti, padėti ragelį, sulaikyti, tęsti, peradresuoti ir siųsti DTMF.
- **Su prieigos raktu** antraštėje `Authorization` ji taip pat gali naudoti galinius taškus, kurie keičia tai, kas išsaugota. Be prieigos rakto šie galiniai taškai nei teikiami, nei pateikiami paties API puslapyje.

Prieigos raktas laikomas kompiuterio raktų pakete, o ne nustatymų faile, ir `/settings` jo niekada negrąžina.

:::caution
Be prieigos rakto bet kuri šiame kompiuteryje veikianti programa gali valdyti telefoną, įskaitant atsiliepimą į skambučius. Asmeniniame darbo vietos kompiuteryje tai paprastai priimtina. Bendrai naudojamame ar administruojamame kompiuteryje nustatykite prieigos raktą ir elkitės su juo kaip su bet kuriuo kitu slaptažodžiu.
:::

## Galiniai taškai {#endpoints}

Bazinis adresas yra `http://127.0.0.1:8377`. Toliau nurodytiems galiniams taškams prieigos rakto nereikia.

| Metodas | Kelias | Ką daro |
| --- | --- | --- |
| GET | `/metrics` | Skaitikliai Prometheus formatu. |
| GET | `/ui` | Įrašų sąrašas kaip HTML puslapis. |
| GET | `/ui/recordings/{id}` | Įrašas su iššifruotu tekstu kaip HTML puslapis. |
| GET | `/ui/recordings/{id}/audio` | Aukščiau esančio puslapio garsas. |
| GET | `/contacts` | Kontaktai. |
| GET | `/contacts/{id}` | Vienas kontaktas. |
| GET | `/history` | Skambučių istorija, naujausi pirmi. Priima `?limit=`, `?missed=true` ir `?declined=true`. |
| GET | `/calls` | Vykstantys skambučiai. |
| POST | `/calls` | Atlieka skambutį: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Atsiliepia į skambutį. |
| POST | `/calls/{id}/hangup` | Baigia skambutį. |
| POST | `/calls/{id}/hold` | Sulaiko skambutį. |
| POST | `/calls/{id}/resume` | Atnaujina jį. |
| POST | `/calls/{id}/dtmf` | Siunčia tonus: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Peradresuoja skambutį: `{"target": "..."}`. |
| GET | `/accounts` | SIP paskyros ir jų registracijos būsena. Niekada slaptažodis. |
| GET | `/settings` | Visa konfigūracija be paslapčių. |
| GET | `/taxonomy` | Kategorijos, žymos ir įspėjamieji signalai su jų kodais. |

Kiekvienas identifikatorius yra telefono išduotas UUID: skambučio `id` gaunamas iš `/calls` arba iš atsakymo į `POST /calls`, paskyros `id` — iš `/accounts`.

Laukų pavadinimai yra snake_case formos, o galūnė nurodo tipą: `_id` yra nuoroda į UUID, `_ts` yra akimirka Unix milisekundėmis (UTC), `_s` yra trukmė sekundėmis. Tas pats galioja žiniatinklio kabliams; tik `/settings` naudoja savo pavadinimus. REST API šios reikšmės yra JSON skaičiai, o nežinoma akimirka yra `null`.

## Pavyzdys: skambučio atlikimas {#example-placing-a-call}

`POST /calls` atlieka išeinantį skambutį. Turinys yra JSON su renkamu `number` ir pasirinktinai paskyros, iš kurios skambinti, `account_id`:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Atsakymas yra naujo skambučio identifikatorius:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` yra privalomas. Be jo atsakymas yra `400 {"error":"a call needs a number"}`, ir niekas nerenkama.
- Numeris papildomas pasirinktoje paskyroje taip pat, kaip jį papildo numerio rinkiklis: `1020` siunčiamas kaip `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` papildo savo `target` taip pat; tikslas, kuris jau turi schemą ar `@`, siunčiamas toks, koks yra.
- `account_id` nebūtinas; paimkite jį iš `GET /accounts`. Be jo skambutis išeina per pagrindiniame lange pasirinktą paskyrą.
- Naudokite `id` keliuose `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` ir `transfer`. Šio skambučio [žiniatinklio kabliai](/integration/webhooks#an-outgoing-call-event-by-event) turi tą patį `id`.

### Iš tinklalapio: spustelėk ir skambink {#from-a-web-page-click-to-call}

Puslapis, kuris kreipiasi į `127.0.0.1`, pasiekia kompiuterį, kuriame veikia naršyklė — tą patį, kuriame veikia telefonas —, todėl CRM mygtukui „spustelėk ir skambink“ nereikia savo serverio:

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

## Ką apima atsakymai {#what-the-answers-contain}

### Vykstantys skambučiai: `GET /calls` {#calls-in-progress-get-calls}

Kiekvienas skambutis turi `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` ir `callstate_ts`.

- `state` yra `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (sulaikė šis telefonas), `onhold` (sulaikė kita pusė), `conference` arba `ended`. Kai tinka kelios, `conference` viršesnė už `hold`, o `hold` — už `onhold`.
- `muted` nurodo, ar skambutyje mikrofonas nutildytas; nutildymas nekeičia `state`.
- `seance_id` yra pokalbis: skambučiai, susieti peradresavimu, konsultacija ar konferencija, jį dalijasi.
- `event_ts` yra atsakymo parengimo akimirka. Palyginkite ją su `callstate_ts`, kad pamatytumėte, kiek laiko skambutis yra savo būsenoje, nesiremdami savo laikrodžiu.

### Paskyros: `GET /accounts` {#accounts-get-accounts}

Kiekviena paskyra turi savo `id` (visur kitur `account_id`), nustatymus — `transport` (`udp`, `tcp` arba `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` ir kitus —, ar ji `enabled`, ir savo `state` stotelėje: `registered`, kol linija veikia. Slaptažodžiai niekada neįtraukiami.

### Skambučių istorija: `GET /history` {#call-history-get-history}

Naujausi pirmi, 100 įrašų, nebent `?limit=` nurodo kitaip. `?missed=true` grąžina tik praleistus skambučius, `?declined=true` — tik šio telefono atmestus.

| Laukas | Reikšmė |
| --- | --- |
| `id` | Paties istorijos įrašo identifikatorius. Tai ne `/calls` ir žiniatinklio kablių skambučio `id`; `seance_id` juos susieja. |
| `outcome` | Pagrindinė klasifikacija: `answered`, `missed`, `declined` arba `failed`. |
| `answered` | `true` arba `false`. |
| `duration_s` | `0` skambučiui, kuris niekada nebuvo sujungtas. |
| `number`, `uri` | Kita pusė kaip numeris ir kaip SIP adresas. |
| `name` | Iš Kontaktų, jei numeris žinomas, kitaip tuščia. Siekite pagal `number`, ne pagal šį. |
| `dialed` | Surinkti skaitmenys išeinančiam skambučiui; įeinančiam — tuščia. |
| `account`, `account_id` | Linija, kuria vyko skambutis. |
| `reason` | Kaip jis baigėsi: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, jei atsiliepė žmogus; kitaip tai, kas atsiliepė į skambutį. |

### Kontaktai: `GET /contacts` {#contacts-get-contacts}

Kiekvienas kontaktas turi savo `id`, `name`, `number` ir liniją, kuriai priklauso, `account_id` ir `account`; tuščias `account` reiškia, kad kontaktas nesusietas su linija.

### Įrašai {#recordings}

Įrašai ir iššifruoti tekstai neišduodami kaip JSON. API juos teikia kaip HTML puslapius `/ui` ir `/ui/recordings/{id}`: iš savo CRM dėkite nuorodas į šiuos puslapius, užuot perkėlę garsą. Nuoroda atsiveria kompiuteryje, kuris laiko įrašą, ir garsas niekada jo nepalieka.

## Taksonomija ir nustatymai {#taxonomy-and-settings}

Kiekvienas `/taxonomy` įrašas turi pastovų `code`, `title` ir `description` sąsajos kalba, `kind` (`category`, `tag` arba `red_flag`) ir įspėjamiesiems signalams — `severity`. **Siekite pagal `code`, niekada pagal `title`**: pavadinimai pateikiami ta kalba, kuri nustatyta telefone. Įrašas su `retired: true` paliekamas, kad senesnius skambučius vis dar būtų galima susieti; naujiems skambučiams jis nebepriskiriamas. Įkelkite taksonomiją vieną kartą paleidimo metu, kad susietumėte telefono žodžius su savo laukais.

`/settings` grąžina konfigūraciją be paslapčių: garso įrenginius ir garsumus, kodekų prioritetą, išvaizdą ir kalbą, paleidimą, sparčiuosius klavišus, diagnostikos lygį ir abiejų integracijų būseną — naudinga pagalbos įrankiui, kuris turi patikrinti darbo vietos kompiuterį nebendrinant ekrano. `api.disabled` pateikia išjungtas prieigos grupes, o `webhooks.silenced` — išjungtus įvykius; tušti sąrašai reiškia, kad viskas įjungta. Jame niekada nėra SIP slaptažodžio, API prieigos rakto ar žiniatinklio kablio antraštės reikšmės.

## Klaidos {#errors}

Kiekviena klaida yra JSON su vienu raktu `error`, skirta žmonėms, o ne mašininiam nagrinėjimui.

| Būsena | Turinys | Reikšmė |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Kelio nėra arba jo prieigos grupė išjungta; abu atvejai tyčia duoda tą patį atsakymą. |
| 404 | `{"error":"no contact with that id"}` | Kelias teisingas, identifikatorius ne. |
| 400 | `{"error":"no call with that id"}` | Skambutis baigėsi arba niekada neegzistavo. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` be numerio. Niekas nebuvo surinkta. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` be skaitmenų. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` be tikslo. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Skambučio paskyra pašalinta skambučio metu, todėl tikslo papildyti negalima. Stotelei nieko neišsiųsta. |

Atmestos užklausos skaičiuojamos `api_requests_refused_total`, todėl tyliai nepavykstanti integracija matoma metrikose, o ne tik jūsų žurnaluose.

## Metrikos {#metrics}

`GET /metrics` grąžina kiekvieną telefono skaitiklį, kiekvieną su pagalbos tekstu. Rinkite juos su Prometheus arba skaitykite rankomis.

| Skaitiklis | Skaičiuoja |
| --- | --- |
| `calls_incoming_total` | Gautus įeinančius skambučius. |
| `calls_outgoing_total` | Atliktus išeinančius skambučius. |
| `calls_answered_total` | Skambučius, į kuriuos atsiliepta. |
| `calls_missed_total` | Įeinančius skambučius, į kuriuos neatsiliepta. |
| `calls_declined_total` | Skambučius, atmestus čia ar kitoje pusėje. |
| `calls_failed_total` | Skambučius, kurių nepavyko sudaryti. |
| `registrations_succeeded_total` | Sėkmingas SIP registracijas. |
| `registrations_failed_total` | Atmestas arba laiku nebaigtas SIP registracijas. |
| `webhooks_delivered_total` | Gavėjo priimtus žiniatinklio kablius. |
| `webhooks_failed_total` | Atmestus arba nepristatytus žiniatinklio kablius. |
| `webhooks_dropped_total` | Žiniatinklio kablius, atmestus dėl pilnos eilės. |
| `api_requests_total` | API apdorotas užklausas. |
| `api_requests_refused_total` | Atmestas užklausas: neteisingas prieigos raktas, išjungta grupė ar nežinomas kelias. |

## Senesnės integracijos atnaujinimas {#updating-an-older-integration}

Ankstesnės versijos naudojo camelCase pavadinimus ir trumpus identifikatorius. `accountId` dabar yra `account_id`, `startedAt` yra `callstart_ts`, `durationSeconds` yra `duration_s`, `answeredBy` yra `answered_by`, o žiniatinklio kablio laukas `at` yra `event_ts`. Skambučiai ir paskyros identifikuojami tik pagal UUID: `runtimeId` ir identifikatoriai, tokie kaip `call-3` ar `account-2`, nebegrąžinami ir nepriimami.

## Kai neveikia {#when-it-does-not-work}

| Simptomas | Ką patikrinti |
| --- | --- |
| Ryšys atmestas adresu `127.0.0.1:8377` | Vietinis valdymas išjungtas, telefonas neveikia arba prievadas pakeistas. |
| `404 {"error":"no such endpoint"}` šio puslapio keliui | Jo prieigos grupė išjungta. |
| Skaitymas veikia, rašymas atmetamas | Galiniams taškams, kurie keičia išsaugotus duomenis, reikia prieigos rakto antraštėje `Authorization`. |
| Kategorijų pavadinimai ne anglų kalba | Pavadinimai seka sąsajos kalbą. Siekite pagal `code` iš `/taxonomy`. |
| Trūksta `accountId`, `startedAt` arba `at` | Integracija parašyta ankstesniems pavadinimams; žr. aukščiau. |

Jei problema susijusi su registracija ar pačiu skambučiu, atverkite [Diagnostika](/troubleshooting/diagnostics).
