---
title: Yerel REST API
sidebar_position: 2
description: Bu bilgisayardaki başka programların telefonu yönetmesine izin verin — çağrı yapma ve yönetme, kişileri, geçmişi ve hesapları okuma.
---

AI Softphone'un CTI bütünleştirmesi için bir REST API'si vardır: aynı bilgisayardaki bir program çağrı yapabilir ve çağrıları yönetebilir, kişileri, çağrı geçmişini ve SIP hesaplarını okuyabilir ve süren çağrıları izleyebilir. SDK yok, bulutta aracı yok, ağa açık bir dinleyici yok. İstekler ve yanıtlar JSON'dur; bu yüzden `curl` ya da herhangi bir HTTP istemcisi yeterlidir.

API **kurulumdan sonra kapalıdır**; siz açana kadar hiçbir şey dinlemez. Açıldığında yalnızca geri döngü arayüzünde dinler — *yalnızca bu bilgisayara yanıt veren küçük bir web arayüzü* — ve ofis ağından, bir VPN'den ya da başka bir makineden erişilemez.

Programınızın telefondan veriye ihtiyacı olduğunda ya da bir çağrıyı yönetmesi gerektiğinde API'yi kullanın. Çağrılara, sorgulama yapmadan, gerçekleştikleri anda tepki vermesi gerektiğinde [web kancalarını](/integration/webhooks) kullanın. Çoğu bütünleştirme ikisini de kullanır; birbirlerinden bağımsızdırlar.

## Açma {#turning-it-on}

**Ayarlar → Bütünleştirme** bölümünü açın ve **Yerel denetim** kısmına gidin.

<Shot name="17b_settings_integration_scrolled" alt="Ayarlar → Bütünleştirme: yerel denetim" />

1. **Bu bilgisayardaki başka programlar telefonu yönetebilsin** seçeneğini açın. Sunucu hemen başlar.
2. Başka bir program zaten kullanmıyorsa öntanımlı **Kapı** değerini, `8377`, koruyun.
3. İsteğe bağlı olarak bir **Belirteç** belirleyin. Kaydedildikten sonra alan *Kaydedildi — değiştirmek için yazın* gösterir.
4. **Erişim** altında açılacak grupları seçin: **Kişiler**, **Çağrı geçmişi**, **Çağrılar ve onların yönetimi**, **Hesaplar**, **Ayarlar**, **Sayaçlar** (ölçümler). Kapalı bir grup süzülmez, hiç sunulmaz.
5. Sınayın: `curl http://127.0.0.1:8377/accounts`. Yanıt JSON ise API çalışıyordur.

Ayrı bir hizmet kurulmaz ve yeniden başlatma gerekmez. Programın bunu yapan bölümü [Modüller](/application/modules) (**Bütünleştirme**) içinde kapatılabilir.

## API'nin kendi sayfası {#the-apis-own-page}

**API'nin kendi sayfasını aç**, `http://127.0.0.1:8377` adresini bir tarayıcıda açar. Adres, sunduğu her şeyin bir listesiyle İngilizce olarak yanıt verir; bir şey okuyan adresler izleyebileceğiniz bağlantılardır.

<Shot name="23_api_page" alt="Bir tarayıcıda açılmış API'nin kendi sayfası, http://127.0.0.1:8377/" />

## Erişim ve belirteç {#access-and-the-token}

Bir programın neler yapabileceği, okuyup okumamasına değil, saklanan verileri değiştirip değiştirmediğine bağlıdır:

- **Belirteç olmadan**, bilgisayardaki herhangi bir program etkin gruplardaki her şeyi okuyabilir ve çağrıları yönetebilir: arama yapma, yanıtlama, kapatma, bekletme, sürdürme, aktarma ve DTMF gönderme.
- `Authorization` başlığında **belirteçle**, saklananları değiştiren uç noktaları da kullanabilir. Belirteç olmadan bu uç noktalar ne sunulur ne de API'nin kendi sayfasında listelenir.

Belirteç ayar dosyasında değil, bilgisayarın anahtarlığında saklanır ve `/settings` tarafından asla döndürülmez.

:::caution
Belirteç olmadan, bu bilgisayarda çalışan herhangi bir program telefonu yönetebilir, çağrıları yanıtlamak dahil. Kişisel bir iş istasyonunda bu genellikle kabul edilebilir. Paylaşılan ya da yönetilen bir makinede bir belirteç belirleyin ve ona diğer parolalar gibi davranın. Belirteç yalnızca kayıtlı verileri değiştiren istekleri korur, çağrıları değil: diğer programları çağrılardan uzak tutmak için **Erişim** altında **Çağrılar ve onların yönetimi** grubunu kapatın.
:::

## Uç noktalar {#endpoints}

Temel adres `http://127.0.0.1:8377`'dir. Aşağıdaki uç noktalar belirteç gerektirmez.

| Yöntem | Yol | Ne yapar |
| --- | --- | --- |
| GET | `/metrics` | Sayaçlar, Prometheus biçiminde. |
| GET | `/ui` | Kayıtların listesi, bir HTML sayfası olarak. |
| GET | `/ui/recordings/{id}` | Dökümüyle birlikte bir kayıt, bir HTML sayfası olarak. |
| GET | `/ui/recordings/{id}/audio` | Yukarıdaki sayfanın sesi. |
| GET | `/contacts` | Kişiler. |
| GET | `/contacts/{id}` | Tek bir kişi. |
| GET | `/history` | Çağrı geçmişi, en yenisi önce. `?limit=`, `?missed=true` ve `?declined=true` kabul eder. |
| GET | `/calls` | Süren çağrılar. |
| POST | `/calls` | Bir çağrı yapar: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Bir çağrıyı yanıtlar. |
| POST | `/calls/{id}/hangup` | Bir çağrıyı kapatır. |
| POST | `/calls/{id}/hold` | Bir çağrıyı beklemeye alır. |
| POST | `/calls/{id}/resume` | Onu beklemeden çıkarır. |
| POST | `/calls/{id}/dtmf` | Ton gönderir: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Çağrıyı aktarır: `{"target": "..."}`. |
| GET | `/accounts` | SIP hesapları ve kayıt durumları. Asla parola değil. |
| GET | `/settings` | Gizli bilgiler olmadan tüm yapılandırma. |
| GET | `/taxonomy` | Kodlarıyla birlikte kategoriler, etiketler ve uyarı işaretleri. |

Her tanımlayıcı telefonun verdiği bir UUID'dir: bir çağrının `id` değeri `/calls` ya da `POST /calls` yanıtından, bir hesabın `id` değeri `/accounts`'tan gelir.

Alan adları snake_case biçimindedir ve sonek türü belirtir: `_id` bir UUID'ye başvurudur, `_ts` Unix milisaniyesi cinsinden bir andır (UTC), `_s` saniye cinsinden bir süredir. Aynısı web kancaları için de geçerlidir; yalnızca `/settings` kendi adlarını korur. REST API'de bu değerler JSON sayılarıdır ve bilinmeyen bir an `null` olur.

## Örnek: çağrı yapma {#example-placing-a-call}

`POST /calls` giden bir çağrı yapar. Gövde, aranacak `number` değerini ve isteğe bağlı olarak aramanın yapılacağı hesabın `account_id` değerini içeren JSON'dur:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Yanıt, yeni çağrının tanımlayıcısıdır:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` zorunludur. O olmadan yanıt `400 {"error":"a call needs a number"}` olur ve hiçbir şey aranmaz.
- Numara, seçilen hesapta çeviricinin tamamladığı gibi tamamlanır: `1020`, `sip:1020@pbx.example.com` olarak gönderilir. `POST /calls/{id}/transfer` da `target` değerini aynı şekilde tamamlar; zaten bir şeması ya da `@` işareti olan bir hedef olduğu gibi gönderilir.
- `account_id` isteğe bağlıdır; onu `GET /accounts`'tan alın. O olmadan çağrı ana pencerede seçili hesaptan yapılır.
- `id` değerini `/calls/{id}/…` içinde kullanın: `hangup`, `hold`, `resume`, `dtmf` ve `transfer`. Bu çağrının [web kancaları](/integration/webhooks#an-outgoing-call-event-by-event) aynı `id` değerini taşır.

### Bir web sayfasından: tıkla ve ara {#from-a-web-page-click-to-call}

`127.0.0.1` adresini çağıran bir sayfa, tarayıcının çalıştığı bilgisayara — telefonun çalıştığı bilgisayarın ta kendisine — ulaşır; bu yüzden bir CRM'deki "tıkla ve ara" düğmesinin kendi sunucusuna ihtiyacı yoktur:

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

## Yanıtlar ne içerir {#what-the-answers-contain}

### Süren çağrılar: `GET /calls` {#calls-in-progress-get-calls}

Her çağrının kendi `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` ve `callstate_ts` değerleri vardır.

- `state` değeri `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (bu telefon tarafından bekletilen), `onhold` (karşı taraf tarafından bekletilen), `conference` ya da `ended` olur. Birden fazlası geçerli olduğunda `conference`, `hold`'a; `hold` da `onhold`'a üstün gelir.
- `muted`, çağrıda mikrofonun sesinin kapalı olup olmadığını söyler; sesi kapatmak `state` değerini değiştirmez.
- `seance_id` görüşmedir: bir aktarma, bir danışma ya da bir konferansla bağlanan çağrılar onu paylaşır.
- `event_ts`, yanıtın oluşturulduğu andır. Kendi saatinize güvenmeden, çağrının ne kadar süredir o durumda olduğunu görmek için onu `callstate_ts` ile karşılaştırın.

### Hesaplar: `GET /accounts` {#accounts-get-accounts}

Her hesabın kendi `id` değeri (başka her yerde `account_id`), ayarları — `transport` (`udp`, `tcp` ya da `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` ve diğerleri —, `enabled` olup olmadığı ve santraldeki `state` değeri vardır: hat çalışırken `registered`. Parolalar asla dahil edilmez.

### Çağrı geçmişi: `GET /history` {#call-history-get-history}

En yenisi önce, `?limit=` başka bir şey söylemedikçe 100 girdi. `?missed=true` yalnızca cevapsız çağrıları, `?declined=true` yalnızca bu telefonun reddettiği çağrıları döndürür.

| Alan | Anlamı |
| --- | --- |
| `id` | Geçmiş girdisinin kendi tanımlayıcısı. `/calls` ve web kancalarındaki çağrı `id` değeri değildir; ikisini `seance_id` bağlar. |
| `outcome` | Ana sınıflandırma: `answered`, `missed`, `declined` ya da `failed`. |
| `answered` | `true` ya da `false`. |
| `duration_s` | Hiç bağlanmamış bir çağrı için `0`. |
| `number`, `uri` | Karşı taraf, numara olarak ve SIP adresi olarak. |
| `name` | Numara biliniyorsa Kişiler'den, aksi hâlde boş. Buna göre değil, `number` alanına göre eşleştirin. |
| `dialed` | Giden bir çağrı için tuşlanan rakamlar; gelen bir çağrı için boş. |
| `account`, `account_id` | Çağrının bulunduğu hat. |
| `reason` | Nasıl bittiği: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | Bir insan yanıtladıysa `no`; aksi hâlde çağrıyı yanıtlayan şey. |

### Kişiler: `GET /contacts` {#contacts-get-contacts}

Her kişinin kendi `id`, `name`, `number` değerleri ve ait olduğu hat, `account_id` ve `account` vardır; boş bir `account`, kişinin bir hatta bağlı olmadığı anlamına gelir.

### Kayıtlar {#recordings}

Kayıtlar ve dökümler JSON olarak verilmez. API onları `/ui` ve `/ui/recordings/{id}` HTML sayfaları olarak sunar: sesi bir yerden bir yere taşımak yerine CRM'inizden bu sayfalara bağlantı verin. Bağlantı, kaydı tutan bilgisayarda açılır ve ses o bilgisayardan asla çıkmaz.

## Sınıflandırma ve ayarlar {#taxonomy-and-settings}

`/taxonomy` içindeki her girdinin sabit bir `code` değeri, arayüz dilinde bir `title` ve bir `description` değeri, bir `kind` değeri (`category`, `tag` ya da `red_flag`) ve uyarı işaretleri için bir `severity` değeri vardır. **Asla `title` ile değil, `code` ile eşleştirin**: başlıklar telefonun ayarlandığı dilde gelir. `retired: true` olan bir girdi, eski çağrılar yine çözümlenebilsin diye tutulur; artık yeni çağrılara verilmez. Telefonun sözcüklerini kendi alanlarınıza eşlemek için sınıflandırmayı başlangıçta bir kez yükleyin.

`/settings`, gizli bilgiler dışında yapılandırmayı döndürür: ses aygıtları ve ses düzeyleri, kodek önceliği, görünüm ve dil, başlangıç, kısayollar, tanılama düzeyi ve iki bütünleştirmenin durumu — bir iş istasyonunu ekran paylaşmadan denetlemesi gereken bir destek aracı için yararlıdır. `api.disabled` kapalı erişim gruplarını, `webhooks.silenced` ise kapalı olayları listeler; boş listeler her şeyin açık olduğu anlamına gelir. SIP parolasını, API belirtecini ya da web kancası başlık değerini asla içermez.

## Hatalar {#errors}

Her hata, tek bir `error` anahtarı olan bir JSON'dur; ayrıştırma için değil, insanlar için tasarlanmıştır.

| Durum | Gövde | Anlamı |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Yol yok ya da erişim grubu kapalı; ikisi de bilerek aynı yanıtı verir. |
| 404 | `{"error":"no contact with that id"}` | Yol doğru, tanımlayıcı yanlış. |
| 400 | `{"error":"no call with that id"}` | Çağrı bitti ya da hiç var olmadı. |
| 400 | `{"error":"a call needs a number"}` | Numarasız `POST /calls`. Hiçbir şey aranmadı. |
| 400 | `{"error":"no digits to send"}` | Rakamsız `POST /calls/{id}/dtmf`. |
| 400 | `{"error":"a transfer needs a target"}` | Hedefsiz `POST /calls/{id}/transfer`. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Çağrının hesabı çağrı sırasında kaldırıldı; bu yüzden hedef tamamlanamıyor. Santrale hiçbir şey gönderilmedi. |

Reddedilen istekler `api_requests_refused_total` içinde sayılır; böylece sessizce başarısız olan bir bütünleştirme yalnızca kendi günlüklerinizde değil, ölçümlerde de görünür.

## Ölçümler {#metrics}

`GET /metrics`, telefonun her sayacını, her birini bir yardım metniyle birlikte döndürür. Onları Prometheus ile toplayın ya da elle okuyun.

| Sayaç | Neyi sayar |
| --- | --- |
| `calls_incoming_total` | Alınan gelen çağrılar. |
| `calls_outgoing_total` | Yapılan giden çağrılar. |
| `calls_answered_total` | Yanıtlanan çağrılar. |
| `calls_missed_total` | Yanıtlanmayan gelen çağrılar. |
| `calls_declined_total` | Burada ya da karşı tarafta reddedilen çağrılar. |
| `calls_failed_total` | Kurulamayan çağrılar. |
| `registrations_succeeded_total` | Başarılı SIP kayıtları. |
| `registrations_failed_total` | Reddedilen ya da zaman aşımına uğrayan SIP kayıtları. |
| `webhooks_delivered_total` | Alıcının kabul ettiği web kancaları. |
| `webhooks_failed_total` | Reddedilen ya da teslim edilemeyen web kancaları. |
| `webhooks_dropped_total` | Kuyruk dolu olduğu için atılan web kancaları. |
| `api_requests_total` | API'nin işlediği istekler. |
| `api_requests_refused_total` | Reddedilen istekler: yanlış belirteç, kapalı grup ya da bilinmeyen yol. |

## Eski bir bütünleştirmeyi güncelleme {#updating-an-older-integration}

Önceki sürümler camelCase adlar ve kısa tanımlayıcılar kullanıyordu. `accountId` artık `account_id`, `startedAt` artık `callstart_ts`, `durationSeconds` artık `duration_s`, `answeredBy` artık `answered_by`, web kancası alanı `at` ise artık `event_ts`'dir. Çağrılar ve hesaplar yalnızca UUID ile tanımlanır: `runtimeId` ve `call-3` ya da `account-2` gibi tanımlayıcılar artık ne döndürülür ne de kabul edilir.

## Çalışmadığında {#when-it-does-not-work}

| Belirti | Neyi denetlemeli |
| --- | --- |
| `127.0.0.1:8377` üzerinde bağlantı reddedildi | Yerel denetim kapalı, telefon çalışmıyor ya da kapı değiştirildi. |
| Bu sayfadaki bir yol için `404 {"error":"no such endpoint"}` | Yolun erişim grubu kapalı. |
| Okuma çalışıyor, yazma reddediliyor | Saklanan verileri değiştiren uç noktalar `Authorization` başlığında belirteç gerektirir. |
| Kategori başlıkları İngilizce değil | Başlıklar arayüz dilini izler. `/taxonomy` içindeki `code` ile eşleştirin. |
| `accountId`, `startedAt` ya da `at` eksik | Bütünleştirme önceki adlara göre yazılmış; yukarıya bakın. |

Kayıtla ya da bir çağrının kendisiyle ilgili bir sorun için [Tanılama](/troubleshooting/diagnostics) penceresini açın.
