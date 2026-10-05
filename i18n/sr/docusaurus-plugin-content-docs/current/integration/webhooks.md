---
title: Веб-куке
sidebar_position: 1
description: "\"Нека телефон вашем CRM-у или другом систему пошаље захтев када позив почне, промени се или заврши — са тачним захтевима долазног и одлазног позива.\""
---

Веб-кука је захтев који телефон шаље на адресу по вашем избору сваки пут када се са позивом нешто деси. Захваљујући њој CRM може да отвори картицу купца пре другог звона, забележи позив када се заврши или упали лампицу на зидној табли. Веб-кука не захтева правила заштитног зида за долазни саобраћај: телефон се повезује са вама. Пошто се захтеви шаљу са радне станице, адреса мора бити доступна само са тог рачунара — интерна `http://crm.local/calls` ради једнако добро као јавна HTTPS адреса.

Након инсталације веб-куке су **искључене** док их не укључите. Раде уз [локални REST API](/integration/rest-api): догађај каже да се нешто променило, а API даје тренутне појединости.

## Укључивање {#turning-them-on}

Отворите **Подешавања → Повезивање**. **Веб-куке** су први одељак картице.

<Shot name="24_webhooks" alt="Подешавања → Повезивање → Веб-куке, са адресом https://crm.local/calls" />

1. Означите **Јави другом систему о позивима**. *За сваки догађај који означите испод шаље се један захтев.*
2. Упишите **Адреса** која треба да прима догађаје, на пример `https://crm.local/calls`.
3. Изаберите **Метод**: **POST** (подразумевано) или **GET**.
4. Под **Догађаји** означите шта да се шаље: **Нови позив**, **Крај позива**, **Промена стања позива**.
5. По жељи под **Пријава** подесите заглавље које ваш прималац може да провери: **Назив заглавља** (предлаже се `Authorization`) и **Вредност заглавља**. Вредност се чува у складишту кључева рачунара, никада у датотеци подешавања; након чувања поље приказује *Сачувано — куцајте да замените*.
6. Притисните **Пошаљи пробни догађај** да видите да ли стиже. Шаље један догађај за позив који се никада није десио, са истим заглављима као прави. Забележите сирови захтев и правите примаоца према ономе што ваша верзија стварно шаље.

Део програма који шаље захтеве је модул **Повезивање**; може да се искључи у [Модулима](/application/modules).

## Догађаји {#the-events}

| Означено као | Догађај | Шаље се када |
| --- | --- | --- |
| **Нови позив** | `call-started` | Долазни позив почне да звони или се упути одлазни позив. |
| **Промена стања позива** | `call-state-changed` | Промени се `state` позива: неко се јави, позив се стави на чекање или настави са било које стране, или се придружи конференцији или је напусти. Искључивање микрофона га не шаље. |
| **Крај позива** | `call-ended` | Позив се завршио. |

Сваки догађај може да се означи засебно. Искачућа картица купца треба само први, дневник позива само последњи. `call-started` се шаље први и треба га брзо обрадити.

## Како изгледа захтев {#what-the-request-looks-like}

Са адресом `https://crm.local/calls` и методом **POST** телефон шаље ово. Тело је JSON, а заглавље је оно које сте подесили под **Пријава**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` носи верзију програма и начин на који је инсталиран.

## Долазни позив, догађај по догађај {#an-incoming-call-event-by-event}

Позив са интерног броја `1020` на налог `1002` звони, неко се јави, а особа која се јавила прекида позив четири секунде касније. Уз сва три означена догађаја прималац добија три захтева, један за другим. Сви носе исти `id` и `seance_id`.

### 1. Звони: `call-started` {#1-it-rings-call-started}

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
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

Ово је тренутак да позиваоца потражите по `number` и прикажете картицу купца. `state` је `ringing-in`, а `duration_s` је `0`.

### 2. Неко се јави: `call-state-changed` {#2-it-is-answered-call-state-changed}

Око три секунде касније:

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
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` је сада `active`, а `callstate_ts` се померио на тренутак промене, док `callstart_ts` остаје где је био.

### 3. Завршава се: `call-ended` {#3-it-ends-call-ended}

После четири секунде разговора:

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
  "name": "Jack Russel",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` је `ended`, `duration_s` је трајање разговора, а `reason` каже ко га је завршио: овде `local-hangup`, јер је позив прекинула особа на овом телефону.

## Одлазни позив, догађај по догађај {#an-outgoing-call-event-by-event}

Исти интерни број се зове са налога `1002`: особа бира `1020`, телефон звони, друга страна се јавља, разговара седам секунди и прекида. Прималац добија четири захтева, један више него за долазни позив, јер одлазни позив има сопствено стање док звони на другој страни.

### 1. Бира се: `call-started` {#1-it-is-dialled-call-started}

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

`direction` је `out`, `state` је `dialing`, а `dialed` садржи број како је биран. Телефон још не зна име друге стране, па је `name` празан.

### 2. Звони на другој страни: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Пола секунде касније:

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

`state` је `ringing-out`.

### 3. Друга страна се јавља: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Четири секунде после тога:

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
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` је `active`. `name` је сада попуњен, а `uri` је адреса друге стране како ју је јавио одговор. `duration_s` је и даље `0`: броји од овог тренутка.

### 4. Завршава се: `call-ended` {#4-it-ends-call-ended}

Седам секунди касније друга страна прекида позив:

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
  "name": "Jack Russel",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`duration_s` је `7`, а `reason` је `remote-hangup`, јер је позив завршила друга страна. Када прекинете сами, то је `local-hangup`, као код долазног позива горе.

### Стања једно поред другог {#the-states-side-by-side}

| | Долазни позив | Одлазни позив |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, затим `active` |
| `call-ended` | `ended` | `ended` |

## Поља {#the-fields}

**Свака вредност је ниска**, укључујући бројеве и временске ознаке: `"duration_s": "42"`. Непознат тренутак је празна ниска. Називи прате једну конвенцију: `_id` је идентификатор, `_ts` је Unix време у милисекундама (UTC), `_s` је трајање у секундама — исто као у REST API-ју, где су вредности JSON бројеви.

| Поље | Значење |
| --- | --- |
| `event` | `call-started`, `call-state-changed` или `call-ended`. |
| `id` | Позив: исти UUID као у `GET /calls` и `/calls/{id}/…`, исти у сваком догађају позива. |
| `seance_id` | Разговор ком позив припада; погледајте [у наставку](#one-conversation-across-transfers). |
| `direction` | `in` или `out`. |
| `state` | Исте вредности као у `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (на чекање ставио овај телефон), `onhold` (на чекање ставила друга страна), `conference` или `ended`. |
| `number` | Број друге стране. Записе у CRM-у упарујте по овом пољу. |
| `name` | Име друге стране из Контаката; може бити празно и може да се попуни касније у позиву, као код одлазног позива горе. |
| `uri` | SIP адреса друге стране. |
| `dialed` | Биране цифре, за одлазни позив; празно за долазни. |
| `account`, `account_id` | Линија на којој је позив: `username@server` и идентификатор из `GET /accounts`. |
| `event_ts` | Када се догађај десио. |
| `callstart_ts` | Када је телефон први пут сазнао за позив. |
| `callstate_ts` | Када је позив ушао у тренутни `state`. |
| `duration_s` | Време разговора у секундама, од јављања до прекида. Поставља се у `call-ended` за позив на који се неко јавио; иначе `0`. |
| `reason` | Како се позив завршио: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; до тада `none`. |
| `answered_by` | `no` ако се на позив јавио човек; иначе оно што се јавило. |

## Један разговор кроз прослеђивања {#one-conversation-across-transfers}

`seance_id` групише позиве који чине један разговор. Позив упућен или примљен изнова започиње нови. Позив настао прослеђивањем, позив који замењује други, консултација о позиву и сваки позив придружен конференцији задржавају `seance_id` позива из ког су настали.

Између телефона преноси га SIP заглавље `X-Seance-Id`: када се позив проследи колеги који такође користи AI Softphone, а централа заглавље пренесе даље, обе радне станице јављају исти `seance_id`.

## GET уместо POST {#get-instead-of-post}

**GET** је за примаоце који не могу да приме тело захтева, као што су старији CRM или скриптни мост. Иста поља се тада шаљу као параметри упита.

Уз **GET** адреса може бити шаблон: свако `[polje]` замењује се вредношћу тог поља, процентно кодираном. На пример:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Чувари места користе горње називе поља. Шаблони сачувани са ранијим називима (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) и даље раде.

## Како се догађаји испоручују {#how-the-events-are-delivered}

| Понашање | Шта то значи за вас |
| --- | --- |
| Догађаји иду у ред, не шаљу се из самог позива | Спор прималац никада не одлаже звоњење, позиве ни прослеђивања. |
| Пун ред одбацује догађаје | Ако ваш прималац престане да одговара, догађаји се губе, али телефон наставља да ради. Пратите `webhooks_dropped_total`. |
| Одбијене и недоступне испоруке се броје | Раст `webhooks_failed_total` док `webhooks_delivered_total` стоји упућује на примаоца. |
| Догађаји стижу редом | Почетак позива, затим промене стања, затим крај позива. За ређање сачуваних догађаја користите `callstate_ts`, а не време доласка. |
| Најмање једном | Исти догађај може да стигне двапут. `id`, `event` и `callstate_ts` заједно идентификују догађај: нека ваш руковалац прескочи онај који је већ видео. |

## Примање догађаја {#receiving-the-events}

Једино правило за примаоца: **одмах одговорите `200`, а посао обавите после.** Спор прималац не успорава телефон, али пуни ред, а пун ред одбацује догађаје.

На пример, у Node.js са Express-ом:

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // the Header value from Settings

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST sends a JSON body, GET sends query parameters
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // answer first

  setImmediate(() => {                          // then do the work
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // your code
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // your code
    }
  });
});

app.listen(8080);
```

Да забележите исход позива — прихваћен, пропуштен, одбијен — узмите ставку са истим `seance_id` и `number` из `GET /history?limit=20` у [REST API-ју](/integration/rest-api#call-history-get-history). Када се ваша услуга после паузе поново покрене, прочитајте `GET /history?limit=200` и сачувајте оно што сте пропустили: веб-куке за реално време, историја за попуњавање празнина.

Да видите захтеве пре него што CRM буде спреман, усмерите **Адреса** на мрежни прегледач захтева и притисните **Пошаљи пробни догађај**.

## Када ништа не стиже {#when-nothing-arrives}

| Симптом | Шта проверити |
| --- | --- |
| Нема ниједне веб-куке | Притисните **Пошаљи пробни догађај**. Ако стигне, потребни догађаји нису означени; ако не, адреса је погрешна или недоступна са радне станице. |
| `webhooks_failed_total` стално расте | Прималац одбија захтеве или је недоступан. Проверите његов дневник и да ли одговара на једноставан захтев са радне станице. |
| `webhooks_dropped_total` је већи од нуле | Прималац је предуго био преспор и ред се напунио. Прво одговорите `200`, затим обрађујте. |
| Исти догађај двапут | Очекивано код испоруке најмање једном. Догађаје са истим `id`, `event` и `callstate_ts` сматрајте једним. |
