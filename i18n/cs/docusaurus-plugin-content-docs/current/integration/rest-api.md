---
title: Místní REST API
sidebar_position: 2
description: Nechte jiné programy v tomto počítači ovládat telefon — uskutečňovat a řídit hovory, číst kontakty, historii a účty.
---

AI Softphone má REST API pro integraci CTI: program na stejném počítači může uskutečňovat a řídit hovory, číst kontakty, historii hovorů a SIP účty a sledovat probíhající hovory. Žádné SDK, žádný cloudový prostředník a žádný posluchač otevřený do sítě. Požadavky i odpovědi jsou JSON, takže stačí `curl` nebo jakýkoli HTTP klient.

API je **po instalaci vypnuté**; nic neposlouchá, dokud ho nezapnete. Pak poslouchá jen na rozhraní loopback — *malé webové rozhraní, které odpovídá jen tomuto počítači* — a z kancelářské sítě, VPN ani jiného stroje není dostupné.

API použijte, když váš program potřebuje data z telefonu nebo musí řídit hovor. [Webhooky](/integration/webhooks) použijte, když musí na hovory reagovat v okamžiku, kdy se dějí, bez dotazování. Většina integrací používá obojí; jsou na sobě nezávislé.

## Zapnutí {#turning-it-on}

Otevřete **Nastavení → Integrace** a přejděte na **Místní ovládání**.

<Shot name="17b_settings_integration_scrolled" alt="Nastavení → Integrace: místní ovládání" />

1. Zapněte **Nechat jiné programy v tomto počítači ovládat telefon**. Server se spustí hned.
2. Ponechte výchozí **Port** `8377`, pokud ho už nepoužívá jiný program.
3. Volitelně nastavte **Token**. Po uložení pole ukazuje *Uloženo — pište, ať to nahradíte*.
4. V části **Přístup** vyberte skupiny, které otevřít: **Kontakty**, **Historie hovorů**, **Hovory a jejich ovládání**, **Účty**, **Nastavení**, **Čítače** (metriky). Vypnutá skupina se nefiltruje, ale vůbec se neobsluhuje.
5. Vyzkoušejte: `curl http://127.0.0.1:8377/accounts`. Pokud je odpovědí JSON, API funguje.

Neinstaluje se žádná samostatná služba a není potřeba restart. Část programu, která to dělá, lze vypnout v [Modulech](/application/modules) (**Integrace**).

## Vlastní stránka API {#the-apis-own-page}

**Otevřít vlastní stránku API** otevře `http://127.0.0.1:8377` v prohlížeči. Adresa odpoví seznamem všeho, co obsluhuje, anglicky; adresy, které něco čtou, jsou odkazy, na které lze kliknout.

<Shot name="23_api_page" alt="Vlastní stránka API, http://127.0.0.1:8377/, otevřená v prohlížeči" />

## Přístup a token {#access-and-the-token}

Co program smí, závisí na tom, zda mění uložená data, ne na tom, zda čte:

- **Bez tokenu** smí jakýkoli program v počítači číst vše v povolených skupinách a řídit hovory: uskutečnit, přijmout, zavěsit, přidržet, obnovit, přepojit a poslat DTMF.
- **S tokenem** v hlavičce `Authorization` smí používat i koncové body, které mění, co je uloženo. Bez tokenu se tyto koncové body neobsluhují ani nejsou uvedeny na vlastní stránce API.

Token se ukládá do klíčenky počítače, ne do souboru s nastavením, a `/settings` ho nikdy nevrací.

:::caution
Bez tokenu může telefon ovládat jakýkoli program běžící v tomto počítači, včetně přijímání hovorů. Na osobní pracovní stanici je to obvykle přijatelné. Na sdíleném nebo spravovaném počítači token nastavte a zacházejte s ním jako s každým jiným heslem. Token chrání jen požadavky, které mění uložená data, nikoli hovory: chcete-li ostatní programy k hovorům nepustit, vypněte **Hovory a jejich ovládání** v části **Přístup**.
:::

## Koncové body {#endpoints}

Základní adresa je `http://127.0.0.1:8377`. Koncové body níže token nepotřebují.

| Metoda | Cesta | Dělá |
| --- | --- | --- |
| GET | `/metrics` | Čítače ve formátu Prometheus. |
| GET | `/ui` | Seznam nahrávek jako stránka HTML. |
| GET | `/ui/recordings/{id}` | Nahrávka s přepisem jako stránka HTML. |
| GET | `/ui/recordings/{id}/audio` | Zvuk pro stránku výše. |
| GET | `/contacts` | Kontakty. |
| GET | `/contacts/{id}` | Jeden kontakt. |
| GET | `/history` | Historie hovorů, nejnovější první. Přijímá `?limit=`, `?missed=true` a `?declined=true`. |
| GET | `/calls` | Probíhající hovory. |
| POST | `/calls` | Uskuteční hovor: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Přijme hovor. |
| POST | `/calls/{id}/hangup` | Zavěsí hovor. |
| POST | `/calls/{id}/hold` | Přidrží hovor. |
| POST | `/calls/{id}/resume` | Obnoví přidržený hovor. |
| POST | `/calls/{id}/dtmf` | Pošle tóny: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Přepojí hovor: `{"target": "..."}`. |
| GET | `/accounts` | SIP účty a stav jejich registrace. Nikdy heslo. |
| GET | `/settings` | Celá konfigurace bez tajných údajů. |
| GET | `/taxonomy` | Kategorie, štítky a varovné signály s jejich kódy. |

Každý identifikátor je UUID vydané telefonem: `id` hovoru pochází z `/calls` nebo z odpovědi na `POST /calls`, `id` účtu z `/accounts`.

Názvy polí jsou v snake_case a koncovka říká typ: `_id` je odkaz na UUID, `_ts` je okamžik v unixových milisekundách (UTC), `_s` je délka v sekundách. Totéž platí pro webhooky; vlastní názvy si ponechává jen `/settings`. V REST API jsou tyto hodnoty čísla JSON a okamžik, který není znám, je `null`.

## Příklad: uskutečnění hovoru {#example-placing-a-call}

`POST /calls` uskuteční odchozí hovor. Tělo je JSON s číslem `number`, které se vytočí, a volitelně `account_id` účtu, ze kterého se volá:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Odpovědí je identifikátor nového hovoru:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` je povinné. Bez něj je odpovědí `400 {"error":"a call needs a number"}` a nic se nevytočí.
- Číslo se na zvoleném účtu doplní stejně, jako ho doplňuje vytáčení: `1020` se pošle jako `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` doplňuje svůj `target` stejně; cíl, který už má schéma nebo `@`, se pošle tak, jak je.
- `account_id` je nepovinné; vezměte ho z `GET /accounts`. Bez něj hovor odejde z účtu vybraného v hlavním okně.
- `id` použijte v `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` a `transfer`. [Webhooky](/integration/webhooks#an-outgoing-call-event-by-event) tohoto hovoru nesou stejné `id`.

### Z webové stránky: volání kliknutím {#from-a-web-page-click-to-call}

Stránka, která volá `127.0.0.1`, se dostane k počítači, na kterém běží prohlížeč — tomu samému, na kterém běží telefon — takže tlačítko pro volání kliknutím v CRM nepotřebuje vlastní server:

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

## Co odpovědi obsahují {#what-the-answers-contain}

### Probíhající hovory: `GET /calls` {#calls-in-progress-get-calls}

Každý hovor má `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` a `callstate_ts`.

- `state` je `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (přidržel tento telefon), `onhold` (přidržela druhá strana), `conference` nebo `ended`. Když platí víc z nich, `conference` má přednost před `hold` a `hold` před `onhold`.
- `muted` říká, zda je v hovoru ztlumený mikrofon; ztlumení `state` nemění.
- `seance_id` je rozhovor: hovory spojené přepojením, konzultací nebo konferencí ho sdílejí.
- `event_ts` je okamžik, kdy byla odpověď vytvořena. Porovnejte ho s `callstate_ts` a uvidíte, jak dlouho je hovor ve svém stavu, aniž byste se spoléhali na vlastní hodiny.

### Účty: `GET /accounts` {#accounts-get-accounts}

Každý účet má své `id` (všude jinde `account_id`), nastavení — `transport` (`udp`, `tcp` nebo `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` a další — zda je `enabled` a svůj `state` na ústředně: `registered`, dokud je linka v provozu. Hesla nejsou nikdy součástí.

### Historie hovorů: `GET /history` {#call-history-get-history}

Nejnovější první, 100 položek, pokud `?limit=` neřekne jinak. `?missed=true` vrátí jen zmeškané hovory, `?declined=true` jen hovory, které tento telefon odmítl.

| Pole | Význam |
| --- | --- |
| `id` | Vlastní identifikátor položky historie. Není to `id` hovoru z `/calls` a webhooků; spojuje je `seance_id`. |
| `outcome` | Hlavní zařazení: `answered`, `missed`, `declined` nebo `failed`. |
| `answered` | `true` nebo `false`. |
| `duration_s` | `0` pro hovor, který nebyl nikdy spojen. |
| `number`, `uri` | Druhá strana jako číslo a jako SIP adresa. |
| `name` | Z Kontaktů, pokud je číslo známé, jinak prázdné. Párujte podle `number`, ne podle tohoto. |
| `dialed` | Vytočené číslice u odchozího hovoru; u příchozího prázdné. |
| `account`, `account_id` | Linka, na které hovor byl. |
| `reason` | Jak skončil: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no`, pokud ho přijal člověk; jinak to, co hovor přijalo. |

### Kontakty: `GET /contacts` {#contacts-get-contacts}

Každý kontakt má `id`, `name`, `number` a linku, ke které patří, `account_id` a `account`; prázdné `account` znamená, že kontakt není vázán na linku.

### Nahrávky {#recordings}

Nahrávky a přepisy se nevydávají jako JSON. API je obsluhuje jako stránky HTML, `/ui` a `/ui/recordings/{id}`: odkazujte na tyto stránky z CRM, místo abyste přesouvali zvuk. Odkaz se otevře na počítači, který nahrávku uchovává, a zvuk ho nikdy neopustí.

## Taxonomie a nastavení {#taxonomy-and-settings}

Každá položka `/taxonomy` má neměnný `code`, `title` a `description` v jazyce rozhraní, `kind` (`category`, `tag` nebo `red_flag`) a u varovných signálů `severity`. **Párujte podle `code`, nikdy podle `title`**: názvy přicházejí v jazyce, na který je telefon nastaven. Položka s `retired: true` se uchovává, aby starší hovory stále šlo přiřadit; novým hovorům se už nedává. Taxonomii načtěte jednou při startu a namapujte slova telefonu na svá vlastní pole.

`/settings` vrací konfiguraci kromě tajných údajů: zvuková zařízení a hlasitosti, prioritu kodeků, vzhled a jazyk, spouštění, klávesové zkratky, úroveň diagnostiky a stav obou integrací — užitečné pro nástroj podpory, který musí pracovní stanici zkontrolovat bez sdílení obrazovky. `api.disabled` uvádí vypnuté přístupové skupiny a `webhooks.silenced` vypnuté události; prázdné seznamy znamenají, že je vše zapnuto. Nikdy neobsahuje heslo SIP, token API ani hodnotu hlavičky webhooku.

## Chyby {#errors}

Každá chyba je JSON s jediným klíčem `error`, určená lidem, ne pro strojové zpracování.

| Stav | Tělo | Význam |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Cesta neexistuje, nebo je její přístupová skupina vypnutá; obojí záměrně dává stejnou odpověď. |
| 404 | `{"error":"no contact with that id"}` | Cesta je správná, identifikátor ne. |
| 400 | `{"error":"no call with that id"}` | Hovor skončil, nebo nikdy neexistoval. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` bez čísla. Nic nebylo vytočeno. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` bez číslic. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` bez cíle. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Účet hovoru byl během hovoru odebrán, takže cíl nelze doplnit. Ústředně se nic neposlalo. |

Odmítnuté požadavky se počítají v `api_requests_refused_total`, takže integrace, která tiše selhává, se ukáže v metrikách, nejen ve vašich protokolech.

## Metriky {#metrics}

`GET /metrics` vrací každý čítač telefonu s textem nápovědy. Sbírejte je Prometheem nebo je čtěte ručně.

| Čítač | Počítá |
| --- | --- |
| `calls_incoming_total` | Přijaté příchozí hovory. |
| `calls_outgoing_total` | Uskutečněné odchozí hovory. |
| `calls_answered_total` | Hovory, které byly přijaty. |
| `calls_missed_total` | Příchozí hovory, které nebyly přijaty. |
| `calls_declined_total` | Hovory odmítnuté zde nebo druhou stranou. |
| `calls_failed_total` | Hovory, které nebylo možné sestavit. |
| `registrations_succeeded_total` | Úspěšné registrace SIP. |
| `registrations_failed_total` | Registrace SIP odmítnuté nebo s vypršením času. |
| `webhooks_delivered_total` | Webhooky, které příjemce přijal. |
| `webhooks_failed_total` | Webhooky odmítnuté nebo nedoručené. |
| `webhooks_dropped_total` | Webhooky zahozené, protože byla fronta plná. |
| `api_requests_total` | Požadavky obsloužené API. |
| `api_requests_refused_total` | Odmítnuté požadavky: špatný token, vypnutá skupina nebo neznámá cesta. |

## Aktualizace starší integrace {#updating-an-older-integration}

Dřívější verze používaly názvy v camelCase a krátké identifikátory. `accountId` je teď `account_id`, `startedAt` je `callstart_ts`, `durationSeconds` je `duration_s`, `answeredBy` je `answered_by` a pole webhooku `at` je `event_ts`. Hovory a účty se identifikují jen pomocí UUID: `runtimeId` a identifikátory jako `call-3` nebo `account-2` se už nevracejí ani nepřijímají.

## Když to nefunguje {#when-it-does-not-work}

| Příznak | Co zkontrolovat |
| --- | --- |
| Spojení na `127.0.0.1:8377` je odmítnuto | Místní ovládání je vypnuté, telefon neběží, nebo byl změněn port. |
| `404 {"error":"no such endpoint"}` pro cestu z této stránky | Její přístupová skupina je vypnutá. |
| Čtení funguje, zápis je odmítnut | Koncové body, které mění uložená data, potřebují token v hlavičce `Authorization`. |
| Názvy kategorií nejsou anglicky | Názvy se řídí jazykem rozhraní. Párujte podle `code` z `/taxonomy`. |
| Chybí `accountId`, `startedAt` nebo `at` | Integrace byla napsána pro dřívější názvy; viz výše. |

Při problému s registrací nebo samotným hovorem otevřete [Diagnostiku](/troubleshooting/diagnostics).
