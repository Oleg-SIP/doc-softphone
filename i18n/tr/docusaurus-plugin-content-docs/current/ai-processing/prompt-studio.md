---
title: Personal Prompt Studio
sidebar_position: 3
description: Görüşmelerinizi işleyen yönergeler, onları çalıştıran kurallar ve onları nasıl kendinize göre uyarlayacağınız.
---

**Personal Prompt Studio**, AI Softphone'un görüşmelerinizi sizin istediğiniz gibi işleyen bölümüdür. İşleme sonucu yönergelerle oluşturulur: program, yazıya döküm ve bir dil modeli bağlanır bağlanmaz kullanıma hazır on bir yönergeyle gelir; bunları sade bir dille değiştirebilir, çoğaltabilir ve kendi yönergelerinizi ekleyebilirsiniz. [Ayarlar → İşleme](processing.md#prompts) içinde **Yönergeler** altında listelenirler.

Sizin LLM'iniz, sizin anahtarınız, sizin denetiminiz: tercih ettiğiniz modeli kendi anahtarınızla, desteklenen bir hizmet ya da uyumlu bir API üzerinden — ya da kuruluşunuzun içinde kurulu bir modeli — bağlayın. [Yazıya döküm](transcription.md#your-own-models) de kendi donanımınızda yapıldığında hem ses hem de dökümler ortamınızın içinde kalır.

<Shot name="12b_settings_processing_prompts" alt="Ayarlar → İşleme içindeki yönergeler listesi" />

## Programla gelen yönergeler {#the-prompts-that-come-with-the-program}

İkinci sütun, listenin yönergenin adının altında gösterdiği şeydir: ne yazdığı ve hangi biçimde.

| Yönerge | Biçim | Ne yazar |
| --- | --- | --- |
| **Özet** | Düzyazı | Ana noktaları, kararları ve sonraki adımları kısa bir paragrafta. |
| **Tek satırlık özet** | Düzyazı | Görüşmeyi bir listede tanımak için kısa bir başlık. |
| **Yapılacaklar** | Maddeler | Kimin neyi ne zaman yapmayı kabul ettiği, söylediği sözlerle birlikte. |
| **Konular** | Maddeler | Ele alınan konular, birkaç sözcükle. |
| **Adlar ve sayılar** | JSON | Kişiler, şirketler, tarihler, tutarlar ve başvuru numaraları. |
| **Kategori** | Etiketler | Görüşmeyi [kategorilerinizden](dictionaries.md) birine yerleştirir. |
| **Etiketler** | Etiketler | Daha sonra bulunabilsin diye görüşmeye [etiketlerinizi](dictionaries.md) koyar. |
| **Uyarı işaretleri** | İşaretler | Sorunlar, kanıtı ve görüşmedeki zamanıyla birlikte. |
| **Bu çağrı hakkında bir soru** | Yanıt | Tek bir görüşme hakkında sorduğunuz bir soruyu, dökümüne dayanarak yanıtlar. |
| **Satış niteliği** | Ölçütler | Görüşmeyi, düzenleyebileceğiniz satış ölçütlerine göre değerlendirir. |
| **Destek niteliği** | Ölçütler | Sorunun ne kadar iyi anlaşıldığını ve ele alındığını değerlendirir. |

Biçimler, bir yanıtın sabit kalıplarıdır; programın yanıtı saklamasını ve daha sonra aramasını sağlayan da budur: **Etiketler** listelerinizden birindeki kodlardır, **İşaretler** önem derecesi olan kodlardır, **Ölçütler** gerekçeli bir puan ve her ölçüt için bir puandır, **Yanıt** dayandığı sözlerle birlikte bir cevaptır. Bir modele kalıbı söyleyen talimatlar [Sözlükler](dictionaries.md#answer-shapes-and-language) içinde tutulur.

AI Softphone'da yapılan çağrılar, bilgisayardan [yakalanan](/capture/) toplantılar ve içe aktarılan kayıtlar, dökümleri olduktan sonra aynı yönergelerden geçer.

Yapılacaklar, üzerinde anlaşılanı kaydeder — sizin yerinize ileti göndermez, ziyaret ayarlamaz ya da talep kaydı açmaz.

## Kendinize göre uyarlama {#making-it-yours}

- Bir yönergenin ne istediğini sade bir dille değiştirin: neyi aradığını, yanıt biçimini ve hangi dilde yanıt verdiğini.
- Bir türevini denemek için bir yönergeyi çoğaltın.
- Her yönerge için modeli seçin — kendi makinenizde ya da bulutta.
- Yönergelerin çalışma sırasını belirleyin, onları açıp kapatın ve koşula bağlayın — bu [kurallarla](processing.md#rules) yapılır: örneğin bir satış değerlendirmesi yalnızca **Satış** olarak yerleştirilen çağrılarda çalışır.
- Kendi kategorilerinizi, etiketlerinizi ve uyarı işaretlerinizi [Sözlükler](dictionaries.md) içinde tutun.
- Maliyeti [aylık sınırlarla](processing.md#limits) sınırlayın.

Özgün yönergeler ve kurallar, [Ayarlar → İşleme](processing.md#defaults) içinde **Öntanımlılar** altındaki **Öntanımlılara dön** ile geri getirilebilir.
