---
title: Suflör ayarları
sidebar_label: Suflör
sidebar_position: 5
description: "Ayarlar → Suflör: canlı suflörün neye ihtiyaç duyduğu, ona izin veren anahtar, yazı boyutu, yardımcılar ve kartları ve harcayabileceği tutarın aylık tavanları."
---

**Ayarlar → Suflör** altında canlı suflöre izin verilir, boyutu ayarlanır ve yardımcıları verilir. Suflörün kendisi — bir görüşmeyi söylendikçe yazan ve ne yanıt vereceğinizi öneren pencere ile bir kayıt üzerinde prova — [Suflör penceresi](/interface/prompter) sayfasında anlatılır.

Ayarların [Genel bakış](/interface/settings-overview) bölümü suflörü **Suflör** altında iki adımda listeler: **Suflöre izin ver** ve **Suflörü başlat**.

## Neye ihtiyaç duyar {#what-it-needs}
- **Görüşme sürerken dinleyebilen bir tanıyıcı.** Diğer tanıyıcılar gibi [Ayarlar → Yazıya döküm](/ai-processing/transcription#live-recognition-for-the-prompter) altında eklenir ve bir **Suflör için adres** ile başarılı bir **Sına** gerektirir.
- **Bir dil modeli**, bir şey öneren yardımcılar için. Yardımcıda ayarlanan model ya da [Ayarlar → İşleme](/ai-processing/processing#language-models) altındaki öntanımlı modeldir. Altyazılar hiç model gerektirmez.
- **Suflörün kullanılmasına izin ver işareti**, **Ayarlar → Suflör** altında.

Üçü de sağlandığında **Suflör**, telefonun altındaki listede **Geçmiş** ile **Ayarlar** arasında görünür ve [suflör penceresini](/interface/prompter) açar. Programın bunu yapan bölümü **Suflör** modülüdür, *Görüşme sürerken dinler ve öneri verir*; [Modüller](/application/modules) altında kapatılabilir.

## Ayarlar → Suflör {#settings--prompter}
<Shot name="41_settings_prompter" alt="Ayarlar → Suflör: suflöre izin veren anahtar ve yazı boyutu" />

*Konuşma sürerken konuşma tanıma ve kendi yönergelerinize göre yazılmış öneriler. İkisi de dakika başına ücretlendirilir.*

| Ayar | Öntanımlı | Ne yapar |
| --- | --- | --- |
| **Suflörün kullanılmasına izin ver** | kapalı | Bir suflörün başlatılmasına izin veren tek anahtar. Kapalıyken sayfadaki başka hiçbir şeyin etkisi yoktur. |
| **Döküm ve öneriler** | 13 piksel | Pencerenin iki sütununun ne büyüklükte çizileceği. |
| **En yeni satırı sütunların üzerinde yinele** | açık | En yeni öneriyi — ya da hiçbir şey önermeyen bir yardımcıda en yeni satırı — sütunların üzerinde ayrı bir şeritte gösterir. |
| **Yinelenen satır** | 20 piksel | Şerit metninin büyüklüğü. Şerit açıkken görünür. |

:::caution
Karşı tarafın sesi konuştukça bir tanıyıcıya gönderilir; bu, kaydetmekten hiç de az değildir. [Ayarlar → Kayıt](/recordings) karşı tarafa önce haber verilmesini istiyorsa, suflör ancak bu yapıldıktan sonra başlar.
:::

Suflör konuşurken, çoğu zaman telefonun geri kalanından daha uzaktan okunur; bu yüzden iki boyutu siz seçersiniz: ekrana eğilmeden okuyabileceğiniz boyutları seçin. Şeridi yükseltmek için [suflör penceresinde](/interface/prompter#the-window) şeridin altındaki ayırıcıyı sürükleyin.

### Yardımcılar {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Ayarlar → Suflör: yardımcılar ve aylık tavanlar" />

Yardımcı, bir suflörden olması istenen şeydir. *Her biri süren bir konuşmayı dinler ve suflörün penceresine bir şey yazar: sözcükleri söylendiği gibi, çevirilerini ya da sonra ne söyleneceğine dair bir öneri.* Hangisinin çalışacağını suflör penceresinde seçersiniz. Program dört tane ile gelir:

| Yardımcı | Ne yazar | Modele sorar |
| --- | --- | --- |
| **Altyazılar** | İki tarafın sözlerini söylendikleri anda. | hayır |
| **Çeviri** | Karşı tarafın sözlerini programın diline çevrilmiş olarak. | evet |
| **Görüşmedeki itirazlar** | Telefonda satış yapan biri için: müşteri bir itiraz dile getirdiğinde, itirazı tek satırda ve ona yanıt veren tek bir satır. | evet |
| **Mülakat yardımı** | Mülakata giren biri için: az önce sorulan sorunun yanıtı birkaç kısa satırda ya da bir sonraki yanıtta neye değinileceği. | evet |

**▲** ve **▼** sırayı değiştirir; bu, [suflör penceresindeki](/interface/prompter#the-window) açılır listenin sırasıdır. **Ekle** kendi yardımcınızı oluşturur. **Öntanımlılara dön**, yönergeleri ve kuralları programla geldikleri hâline döndürür; burada da [İşleme](/ai-processing/processing#defaults) altında da; dil modellerinize dokunulmaz.

### Bir yardımcının kartı {#an-assistants-card}
Bir yardımcıya tıklamak kartını açar. İşleme altındaki bir [yönergenin](/ai-processing/prompt-studio) kartıyla aynıdır, birkaç ek denetimle.

<Shot name="42_prompter_assistant" alt="Görüşmedeki itirazlar yardımcısının kartı: tanıyıcı, bir yanıtın ne zaman bittiği, rol ve yönerge" />

| Alan | Ne yapar |
| --- | --- |
| **Ad** | Listede ve suflör penceresinde görünen ad. |
| **Yanıt biçimi** ve **Ayrıca gönder** | Her yönergede olduğu gibi: yanıtın biçimi ve onunla birlikte gönderilen talimatlar. Programla gelen yardımcılar **Düzyazı** olarak yanıt verir. |
| **Tanıyıcı** | Hangi tanıyıcının dinlediği. Yalnızca biri konuşurken dinleyebilenler sunulur. |
| **Bir yanıtın ne zaman bittiği** | Bir yanıtın bittiğine ve yanıtlanabileceğine kimin karar verdiği: **Tanıyıcı karar verir**, **Bir duraklamadan sonra** ya da **Yalnızca ben istediğimde** — bu durumda yanıt, **Öneri**'ye bastığınızda biter. Tanıyıcıların altısı bir yanıtın nerede bittiğini kendisi söyler, dördü söylemez; **Tanıyıcı karar verir**, yanıtı olmadığı yerde duraklamaya başvurur ve bu yüzden olduğu gibi bırakılması gereken ayardır. |
| **Benim tarafımı da tanı** | Aynı tanıyıcıda, iki kat fiyatla ikinci bir oturum; böylece kendi sözleriniz de dökümde görünür. Modele anlatılanlara dahil olurlar ama hiçbir zaman modele sorulan şey değildirler. |
| **Rol — modelin ne olduğu** | Yönergeden önce modele gönderilir, örneğin *Telefonda satış yapan birine yardım ediyorsunuz…* |
| **Yönerge** | Her yanıtta modele sorulan. `{{reply}}` az önce biten yanıt, `{{conversation}}` ise ondan önce söylenen her şeydir. *Boş bırakın, modele hiçbir şey sorulmaz: sözler geldikçe gösterilir ve ödenen tek şey tanıyıcı olur.* **Altyazılar** tam olarak budur. |
| **Şu dilde yanıtla** | Önerinin dili: **Ne konuşulduysa**, **Bu programın dili** ya da kodu ile birlikte **Her zaman tek bir dil**. |
| **Model** | **Öntanımlı** ya da [dil modellerinizden](/ai-processing/processing#language-models) biri. |

### Harcama {#spending}
*Kuralların bitmiş konuşmalara harcayabileceğinden ayrı. Bir aylık özet, bir konuşmanın ortasında bir suflörü susturabilmemeli.*

| Alan | Ulaşıldığında |
| --- | --- |
| **Tanıyıcılar, ayda** | Çalışan bir suflör, bulunduğu yanıtın sonunda durur — asla bir sözcüğün ortasında değil. |
| **Modeller, ayda** | Öneriler durur, altyazılar sürer. |

Boş, tavan yok demektir. Canlı sesin bir dakikasının maliyeti, tanıyıcının [Yazıya döküm](/ai-processing/transcription#the-recognisers-card) altındaki kartına girilen **Dakika başına fiyat** değeridir; o olmadan suflör, gösterdiği tutarın bir tahmin olduğunu söyler.
