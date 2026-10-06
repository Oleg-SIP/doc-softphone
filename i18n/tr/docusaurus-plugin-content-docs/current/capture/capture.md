---
title: Yakalama
sidebar_label: Diğer uygulamalardan yakalama
sidebar_position: 1
description: "\"Yakalama, başka bir uygulamada — Zoom, Teams, Meet ya da başka herhangi birinde — yapılan bir görüşmeyi doğrudan bilgisayardan kaydeder.\""
---

**Yakalama**, AI Softphone'un başka bir programda geçen bir görüşmeyi, örneğin Zoom, Teams ya da Meet'teki bir toplantıyı kaydetme yoludur. Doğrudan bilgisayardan kaydeder, karşı tarafı ve sizi ayrı kanallarda tutar; sonunda da bir çağrıda olduğu gibi aynı döküm ve işleme sonucu sizi bekler.

Program bir uygulamanın adını değil, bir görüşmeyi arar; bu yüzden görüşme yapılabilen her şeyle çalışır.

Ayarların [Genel bakış](../interface/settings-overview.md) bölümü bunu **Diğer uygulamalardan yakalama** altında listeler ve üç adıma ayırır:

1. **Yakalamayı aç** — [ses yakalamaya izin verin](#turning-capture-on).
2. **Bir görüşmeyi yakala** — bir kaydı [başlatın ve durdurun](#capturing-a-conversation).
3. **Birine ad ver** — kaydı [yeniden adlandırın](#giving-it-a-name).

## Yakalamayı açma {#turning-capture-on}

Siz izin verene kadar yakalama kapalıdır. **Ayarlar → Yakalama** bölümünü açın.

<Shot name="10_settings_capture" alt="Ayarlar → Yakalama" />

| Ayar | Öntanımlı | Ne yapar |
| --- | --- | --- |
| **Ses yakalamaya izin ver** | kapalı | Programın diğer uygulamaların sesini kaydetmesine izin verir. Kapalıyken hiçbir şey yakalanmaz. |
| **Kayıt konusunda diğerlerini bilgilendirmemi anımsat** | açık | Bir yakalama sürerken bir anımsatıcı gösterir. Yakalamaya izin verilene kadar onay kutusu gri kalır. |

:::caution
Yalnızca görüşme değil, bilgisayarın çaldığı her şey kaydedilir. Bu telefon başka birinin toplantısına kayıt duyurusu yapamaz; bunu söylemek size düşer.
:::

Programın bunu yapan bölümü **Yakalama** modülüdür: *Başka bir uygulamada geçen bir görüşmeyi kaydetme*. [Modüller](../application/modules.md) içinde kapatılabilir.

## Bir yakalamayı başlatma {#starting-a-capture}

Yakalamaya izin verildiğinde [ana pencerenin](../interface/main-window.md#capture) alt kısmı onun durumunu — **Yakalama · hazır** — ve sağda bir **Kaydet** düğmesi gösterir. Elle başlatmak için **Kaydet** düğmesine basın.

### Otomatik başlatma {#automatic-start}

**Otomatik başlatma**, program başka bir uygulamada bir görüşme duyduğunda ne olacağına karar verir:

| Seçenek | Ne olur |
| --- | --- |
| **Asla** | Yakalama yalnızca **Kaydet** düğmesine bastığınızda başlar. |
| **Bana sor** | Program kaydedip kaydetmeyeceğini sorar. Öntanımlı. |
| **Her zaman** | Program kaydı kendiliğinden başlatır. |

**Kendi yanıtı olan uygulamalar** altında bir uygulamaya kendine özgü bir yanıt verilebilir — örneğin programın sorduğu sorudan *Bu uygulamayı her zaman kaydet*.

*Sormak hiçbir şeye mal olmaz: yanıtınızdan önceki saniyeler zaten saklanıyor.*

### Başlangıçtan önce {#before-the-start}

**Başlangıçtan önce** kaydırıcısı, bir kayıt başlamadan önceki sesten kaç saniyenin saklanacağını belirler; öntanımlı olarak **15 saniye**. Görüşme fark edilene kadar hiçbir şeyin kaybolmaması için vardır: **Kaydet** düğmesine bastığınızda ya da soruyu yanıtladığınızda başlayan bir kayıt, yine de daha önce söylenen sözlerle başlar.

## Bir görüşmeyi yakalama {#capturing-a-conversation}

Kayıt sürerken ana pencere kırmızı bir nokta, kaydın adını (örneğin **Zoom içinde toplantı**), geçen süreyi ve iki kanalı dalga biçimleri olarak gösterir.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Bir toplantıyı kaydetme" />

- **Kaydı durdur** kaydı bitirir.
- Kayıt sürerken pencere görünür kalır ve katılımcılara toplantının kaydedildiğini söylemenizi anımsatır.

### Resim neyi gösterir {#what-the-picture-shows}

İki ayar daha ses düzeyinin nasıl çizileceğini seçer:

| Ayar | Öntanımlı | Nerede |
| --- | --- | --- |
| **Ana penceredeki resim** | Dalga | Bir yakalama sürerken iki kanal. |
| **Telefonun altındaki şeritteki resim** | İki düzey | **Yakalama · hazır** altındaki iki ince çubuk. |

### Sınama {#testing-it}

**Sına** altında sekmede iki çubuk vardır: **Siz** ve **Karşı taraf**. *Siz konuşurken üstteki çubuk, bir şey çalarken alttaki oynar.* Önemli bir toplantıdan önce bir sözcük söyleyin ve herhangi bir ses çalın; programın iki tarafı da duyduğunu görün.

## Ad verme {#giving-it-a-name}

Kaydın adının yanındaki kalem, kayıt sürerken onu yeniden adlandırmanızı sağlar. Ad vermediğiniz bir kayıt **Başka bir uygulama** olarak listelenir.

## Kayıt nereye gider {#where-the-recording-goes}

Yakalanan bir görüşme, [Kayıtlar penceresinde](../recordings/recordings-window.md) diğerleri gibi görünür; ahize yerine pencere olan kendi simgesiyle ve verdiğiniz başlıkla ya da **Başka bir uygulama** başlığıyla.

<Shot name="01_recordings" alt="Kayıtlar sekmesinde pencere simgesiyle işaretlenmiş yakalanan toplantılar" />

Bir çağrıyla aynı [kurallar](../ai-processing/processing.md#rules) tarafından yazıya dökülür, özetlenir, bir kategoriye yerleştirilir ve etiketlenir. Yakalanan bir toplantının dökümünde, bir çağrının karşı tarafın adını göstereceği yerde konuşmacı **Başka bir uygulama** olarak gösterilir; kitaplığın **Ara** alanı içinde söylenenleri de bulur.
