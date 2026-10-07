---
title: Kayıtlar penceresi
sidebar_position: 2
description: Görüşmelerin kitaplığı — süzün, çalın, dökümü ve işleme sonucunu okuyun.
---

**Kayıtlar**, nereden gelmiş olursa olsun her görüşmenin yaşadığı yerdir: bir çağrı, başka bir uygulamadan yakalanan bir toplantı ya da içe aktarılan bir dosya. Her biri, işleme sonucu hazır olarak listelenir.

<Shot name="01_recordings" alt="Kayıtlar sekmesi: görüşmelerin listesi" />

## Bir görüşmeyi bulma {#finding-a-conversation}

Üstteki çubukta dört süzgeç, bir arama alanı ve bir menü bulunur:

| Denetim | Listeyi neye göre daraltır |
| --- | --- |
| **Tür** | görüşmenin geliş yolu |
| **Dönem** | tarih |
| **Kategori** | görüşmenin yerleştirildiği kategori — bkz. [Sözlükler](../ai-processing/dictionaries.md) |
| **İşaret** | taşıdığı işaretler |
| **Ara** | içinde söylenenler — arama, kaydettiğiniz her şeyin dökümlerinde yapılır |

Çubuğun sağındaki **⋮** düğmesi liste için başka eylemler açar: **Dosyalardan içe aktar**, **CSV olarak dışa aktar** ve **Tarayıcıda aç**.

## Liste {#the-list}

Her satır şunları gösterir:

- görüşmenin türü için bir simge: bir çağrı için ahize, başka bir uygulamadaki bir toplantı için pencere;
- bir başlık — karşı tarafın adı ya da numarası, yakalanan bir toplantı içinse **Başka bir uygulama** — ve altında tarih ile tek satırlık özet;
- sağda, puanıyla birlikte kategori (bir sayı, örneğin *Destek · 2*), ardından etiketler ve en sonda süre.

Kırmızıyla çizilen etiketler **uyarı işaretleridir** (resimde *Öfkeli müşteri* ve *Ayrılma tehlikesi*); diğerleri sıradan etiketlerdir (*Yakınma*, *Geri arama sözü*). Özeti ve kategorisi olmayan bir görüşme henüz işlenmemiştir — resimdeki ilk satır.

## Oynatıcı {#the-player}

Listenin altında oynatıcıyı açmak için bir satır seçin.

<Shot name="02_recording_details" alt="Seçili bir kayıt: listenin altında oynatıcı ve döküm" />

- İki dalga biçimi, kaydın iki kanalıdır; görüşmenin her tarafı için bir tane. Altlarındaki çubuk uzun bir kaydı kaydırır.
- **▶** çalar ve duraklatır; soldaki süreler konum ve toplam uzunluktur.
- **1×** hızı değiştirir; **Her ikisi** hangi kanalı duyacağınızı seçer.
- Disk düğmesi sesi kaydeder, **×** oynatıcıyı kapatır.

## Döküm ve işleme sonucu {#the-transcript-and-the-write-up}

Oynatıcının altında döküm bulunur: her konuşma sırası için bir satır, söylendiği zaman ve konuşmacının adı (**Siz**, karşı tarafın adı ya da yakalanan bir toplantı için **Başka bir uygulama**). O anı duymak için bir satıra tıklayın; çalma imlecinin altındaki satır vurgulanır ve o sırada söylenen sözcük satırın içinde işaretlenir.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Sesin yanında döküm" />

Dökümün üstündeki açılır liste neyin gösterileceğini seçer — [tanıyıcılarınızdan](../ai-processing/transcription.md) birinin oluşturduğu döküm (yıldız, kaydın ana dökümünü gösterir) ya da **Eylemler** gibi bir işleme sonucu.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Görüşmeden geriye kalan yapılacaklar" />

Açılır listenin sağındaki dört simge:

| Simge | Ne yapar |
| --- | --- |
| Pırıltılar | Seçili öğeyi modele şimdi yazdırır. |
| İki sayfa | Onu kopyalar. |
| Disk | Onu bir dosyaya kaydeder. |
| Çöp kutusu | Onu siler. |

Bir dökümü düz metin ya da altyazı olarak dışa aktarabilirsiniz.

İşleme sonucu, [İşleme](../ai-processing/processing.md) bölümünde kurduğunuz [yönergeler](/ai-processing/prompt-studio) ve modeller tarafından, kendi kendine ya da siz istediğinizde çalışan [kurallar](../ai-processing/processing.md#rules) aracılığıyla oluşturulur. Kayıtların ne kadar süre saklanacağı [Kayıtlar](../recordings.md#retention) bölümünde belirlenir.

## Elinizdeki bir kayıt {#a-recording-you-already-have}

Başka bir yerde — bir cep telefonunda, bir ses kayıt cihazında ya da başka bir sistemde — yapılmış bir kayıt **⋮ → Dosyalardan içe aktar** ile eklenebilir. Tıpkı yapılmış bir çağrı gibi yerleştirilir: yazıya dökülür, işlenir ve aynı aramayla bulunur.

## Bir kaydı silme {#deleting-a-recording}

Bir kayıt silindiğinde ondan üretilen her şey de onunla birlikte gider: döküm ve işleme sonucu.
