---
title: Web kancaları
sidebar_position: 1
description: "\"Bir çağrı başladığında, değiştiğinde ya da bittiğinde telefonun CRM'inize veya başka bir sisteme bir istek göndermesini sağlayın — gelen ve giden bir çağrının tam istekleriyle.\""
---

Web kancası, bir çağrıda her bir şey olduğunda telefonun seçtiğiniz bir adrese gönderdiği bir istektir. Bir CRM, müşterinin kartını ikinci zilden önce bu sayede açabilir, bir çağrı bittiğinde onu kaydedebilir ya da bir duvar panosunda bir lamba yakabilir. Web kancası gelen trafik için güvenlik duvarı kuralı gerektirmez: telefon size bağlanır. İstekler iş istasyonundan gönderildiği için adresin yalnızca o bilgisayardan erişilebilir olması yeterlidir — `http://crm.local/calls` gibi bir iç adres de herkese açık bir HTTPS adresi kadar iyi çalışır.

Web kancaları kurulumdan sonra siz açana kadar **kapalıdır**. [Yerel REST API](/integration/rest-api) ile birlikte çalışırlar: bir olay bir şeyin değiştiğini söyler, API güncel ayrıntıları verir.

## Açma {#turning-them-on}

**Ayarlar → Bütünleştirme** bölümünü açın. **Web kancaları** sekmenin ilk bölümüdür.

<Shot name="24_webhooks" alt="Ayarlar → Bütünleştirme → Web kancaları, adres olarak https://crm.local/calls" />

1. **Çağrılar hakkında başka bir sisteme haber ver** seçeneğini işaretleyin. *Aşağıda işaretlediğiniz her olay için bir istek gönderilir.*
2. Olayları alması gereken **Adres** bilgisini girin, örneğin `https://crm.local/calls`.
3. **Yöntem** seçin: **POST** (öntanımlı) ya da **GET**.
4. **Olaylar** altında neyin gönderileceğini işaretleyin: **Yeni bir çağrı**, **Biten bir çağrı**, **Durum değiştiren bir çağrı**.
5. İsteğe bağlı olarak **Yetkilendirme** altında alıcınızın denetleyebileceği bir başlık belirleyin: bir **Başlık adı** (`Authorization` önerilir) ve bir **Başlık değeri**. Değer hiçbir zaman bir ayar dosyasında değil, bilgisayarın anahtarlığında saklanır; kaydedildikten sonra alan *Kaydedildi — değiştirmek için yazın* gösterir.
6. Ulaşıp ulaşmadığını görmek için **Sınama olayı gönder** düğmesine basın. Hiç gerçekleşmemiş bir çağrı için, gerçek bir olayla aynı başlıklarla bir olay gönderir. Ham isteği kaydedin ve alıcınızı sürümünüzün gerçekte gönderdiğine göre oluşturun.

Programın istekleri gönderen bölümü **Bütünleştirme** modülüdür; [Modüller](/application/modules) içinde kapatılabilir.

## Olaylar {#the-events}

| İşaretlendiği ad | Olay | Ne zaman gönderilir |
| --- | --- | --- |
| **Yeni bir çağrı** | `call-started` | Gelen bir çağrı çalmaya başladığında ya da giden bir çağrı yapıldığında. |
| **Durum değiştiren bir çağrı** | `call-state-changed` | Çağrının `state` değeri değiştiğinde: çağrı yanıtlandığında, taraflardan biri tarafından beklemeye alındığında ya da sürdürüldüğünde, bir konferansa katıldığında ya da ondan ayrıldığında. Sesi kapatmak bu olayı göndermez. |
| **Biten bir çağrı** | `call-ended` | Çağrı sona erdiğinde. |

Her olay ayrı ayrı işaretlenebilir. Ekrana müşteri kartı açmak için yalnızca ilki, bir çağrı günlüğü için yalnızca sonuncusu gerekir. `call-started` ilk gönderilendir ve hızlı işlenmelidir.

## İstek neye benzer {#what-the-request-looks-like}

`https://crm.local/calls` adresi ve **POST** yöntemiyle telefon şunu gönderir. Gövde JSON'dur, başlık ise **Yetkilendirme** altında belirlediğiniz başlıktır:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent`, programın sürümünü ve nasıl kurulduğunu taşır.

## Gelen bir çağrı, olay olay {#an-incoming-call-event-by-event}

`1020` dahilisinden `1002` hesabına gelen bir çağrı çalar, yanıtlanır ve yanıtlayan kişi tarafından dört saniye sonra kapatılır. Üç olay da işaretliyken alıcı art arda üç istek alır. Hepsi aynı `id` ve `seance_id` değerini taşır.

### 1. Çalıyor: `call-started` {#1-it-rings-call-started}

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

Arayanı `number` ile arayıp müşterinin kartını göstermenin zamanı budur. `state` değeri `ringing-in`, `duration_s` ise `0`'dır.

### 2. Yanıtlandı: `call-state-changed` {#2-it-is-answered-call-state-changed}

Yaklaşık üç saniye sonra:

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

`state` artık `active`'dir ve `callstate_ts` değişiklik anına ilerlemiştir, `callstart_ts` ise olduğu yerde kalır.

### 3. Bitiyor: `call-ended` {#3-it-ends-call-ended}

Dört saniyelik konuşmadan sonra:

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

`state` değeri `ended`, `duration_s` konuşmanın süresidir ve `reason` onu kimin bitirdiğini söyler: burada `local-hangup`, çünkü bu telefondaki kişi kapattı.

## Giden bir çağrı, olay olay {#an-outgoing-call-event-by-event}

Aynı dahili `1002` hesabından aranır: kişi `1020` numarasını tuşlar, telefon çalar, karşı taraf yanıtlar, yedi saniye konuşur ve kapatır. Alıcı dört istek alır; gelen bir çağrıdakinden bir fazla, çünkü giden bir çağrının karşı uçta çalarken kendine ait bir durumu vardır.

### 1. Tuşlanıyor: `call-started` {#1-it-is-dialled-call-started}

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

`direction` değeri `out`, `state` değeri `dialing`'dir ve `dialed` numarayı tuşlandığı biçimiyle içerir. Telefon karşı tarafın adını henüz bilmediği için `name` boştur.

### 2. Karşı uçta çalıyor: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Yarım saniye sonra:

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

`state` değeri `ringing-out`'tur.

### 3. Karşı taraf yanıtlıyor: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Bundan dört saniye sonra:

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

`state` değeri `active`'dir. `name` artık doldurulmuştur ve `uri`, yanıtın bildirdiği biçimiyle karşı tarafın adresidir. `duration_s` hâlâ `0`'dır: bu andan itibaren sayar.

### 4. Bitiyor: `call-ended` {#4-it-ends-call-ended}

Yedi saniye sonra karşı taraf kapatır:

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

`duration_s` değeri `7`, `reason` ise `remote-hangup`'tır, çünkü çağrıyı karşı taraf bitirdi. Siz kendiniz kapattığınızda, yukarıdaki gelen çağrıda olduğu gibi `local-hangup` olur.

### Durumlar yan yana {#the-states-side-by-side}

| | Gelen çağrı | Giden çağrı |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, ardından `active` |
| `call-ended` | `ended` | `ended` |

## Alanlar {#the-fields}

Sayılar ve zaman damgaları dahil, **her değer bir dizedir**: `"duration_s": "42"`. Bilinmeyen bir an boş bir dizedir. Adlar tek bir kurala uyar: `_id` bir tanımlayıcıdır, `_ts` milisaniye cinsinden Unix zamanıdır (UTC), `_s` saniye cinsinden bir süredir — değerlerin JSON sayıları olduğu REST API'dekiyle aynı.

| Alan | Anlamı |
| --- | --- |
| `event` | `call-started`, `call-state-changed` ya da `call-ended`. |
| `id` | Çağrı: `GET /calls` ve `/calls/{id}/…` içindekiyle aynı UUID; çağrının her olayında da aynı. |
| `seance_id` | Çağrının ait olduğu görüşme; bkz. [aşağısı](#one-conversation-across-transfers). |
| `direction` | `in` ya da `out`. |
| `state` | `GET /calls` içindekiyle aynı değerler: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (bu telefon tarafından bekletilen), `onhold` (karşı taraf tarafından bekletilen), `conference` ya da `ended`. |
| `number` | Karşı tarafın numarası. CRM kayıtlarınızı bu alana göre eşleştirin. |
| `name` | Kişiler'den alınan karşı tarafın adı; boş olabilir ve yukarıdaki giden çağrıda olduğu gibi çağrının ilerleyen bir anında doldurulabilir. |
| `uri` | Karşı tarafın SIP adresi. |
| `dialed` | Giden bir çağrı için tuşlanan rakamlar; gelen bir çağrı için boş. |
| `account`, `account_id` | Çağrının bulunduğu hat: `username@server` ve `GET /accounts` içindeki tanımlayıcı. |
| `event_ts` | Olayın gerçekleştiği an. |
| `callstart_ts` | Telefonun çağrıyı ilk öğrendiği an. |
| `callstate_ts` | Çağrının geçerli `state` durumuna girdiği an. |
| `duration_s` | Yanıttan kapatmaya kadar saniye cinsinden konuşma süresi. Yanıtlanan bir çağrı için `call-ended` olayında belirlenir; aksi hâlde `0`. |
| `reason` | Çağrının nasıl bittiği: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; o zamana kadar `none`. |
| `answered_by` | Çağrıyı bir insan yanıtladıysa `no`; aksi hâlde onu yanıtlayan şey. |

## Aktarmalar boyunca tek bir görüşme {#one-conversation-across-transfers}

`seance_id`, tek bir görüşmeyi oluşturan çağrıları gruplar. Sıfırdan yapılan ya da alınan bir çağrı yeni bir görüşme başlatır. Bir aktarmayla oluşturulan çağrı, başka bir çağrının yerini alan çağrı, bir çağrı hakkında yapılan danışma ve bir konferansa katılan her çağrı, geldikleri çağrının `seance_id` değerini korur.

Telefonlar arasında `X-Seance-Id` SIP başlığında taşınır: bir çağrı AI Softphone kullanan bir iş arkadaşına aktarıldığında ve santral başlığı iletirse, iki iş istasyonu da aynı `seance_id` değerini bildirir.

## POST yerine GET {#get-instead-of-post}

**GET**, eski bir CRM ya da bir betik köprüsü gibi istek gövdesi alamayan alıcılar içindir. Bu durumda aynı alanlar sorgu parametreleri olarak gönderilir.

**GET** ile adres bir şablon olabilir: her `[alan]`, o alanın yüzde kodlanmış değeriyle değiştirilir. Örneğin:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Yer tutucular yukarıdaki alan adlarını kullanır. Önceki adlarla (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) kaydedilmiş şablonlar çalışmaya devam eder.

## Olaylar nasıl teslim edilir {#how-the-events-are-delivered}

| Davranış | Sizin için anlamı |
| --- | --- |
| Olaylar çağrının kendisinden gönderilmez, kuyruğa alınır | Yavaş bir alıcı çalmayı, çağrıları ya da aktarmaları asla geciktirmez. |
| Dolu bir kuyruk olayları atar | Alıcınız yanıt vermeyi keserse olaylar kaybolur, ama telefon çalışmaya devam eder. `webhooks_dropped_total` değerini izleyin. |
| Reddedilen ve ulaşılamayan teslimatlar sayılır | `webhooks_delivered_total` yerinde sayarken `webhooks_failed_total` değerinin artması alıcıyı işaret eder. |
| Olaylar sırayla gelir | Çağrı başladı, ardından durum değişiklikleri, ardından çağrı bitti. Sakladığınız olayları sıralamak için geliş zamanlarını değil, `callstate_ts` değerini kullanın. |
| En az bir kez | Aynı olay iki kez gelebilir. `id`, `event` ve `callstate_ts` birlikte bir olayı tanımlar: işleyicinizin daha önce gördüğü bir olayı atlamasını sağlayın. |

## Olayları alma {#receiving-the-events}

Bir alıcı için tek kural: **hemen `200` ile yanıt verin, işi sonra yapın.** Yavaş bir alıcı telefonu yavaşlatmaz, ama kuyruğu doldurur ve dolu bir kuyruk olayları atar.

Örneğin Node.js'te Express ile:

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

Bir çağrının sonucunu — yanıtlandı, cevapsız, reddedildi — kaydetmek için [REST API](/integration/rest-api#call-history-get-history) içindeki `GET /history?limit=20` yanıtından aynı `seance_id` ve `number` değerlerine sahip girdiyi alın. Hizmetiniz bir aradan sonra yeniden başladığında `GET /history?limit=200` okuyun ve kaçırdıklarınızı saklayın: gerçek zaman için web kancaları, boşlukları doldurmak için geçmiş.

CRM hazır olmadan istekleri görmek için **Adres** alanını çevrimiçi bir istek denetleyicisine yöneltin ve **Sınama olayı gönder** düğmesine basın.

## Hiçbir şey gelmediğinde {#when-nothing-arrives}

| Belirti | Neyi denetlemeli |
| --- | --- |
| Hiç web kancası yok | **Sınama olayı gönder** düğmesine basın. Gelirse, ihtiyacınız olan olaylar işaretli değildir; gelmezse adres yanlıştır ya da iş istasyonundan erişilemez. |
| `webhooks_failed_total` artmaya devam ediyor | Alıcı istekleri reddediyor ya da ona ulaşılamıyor. Günlüğünü ve iş istasyonundan gelen basit bir isteğe yanıt verip vermediğini denetleyin. |
| `webhooks_dropped_total` sıfırın üstünde | Alıcı çok uzun süre çok yavaş kaldı ve kuyruk doldu. Önce `200` ile yanıt verin, sonra işleyin. |
| Aynı olay iki kez | En az bir kez teslimatta beklenen bir durum. Aynı `id`, `event` ve `callstate_ts` değerlerine sahip olayları tek bir olay sayın. |
