---
title: İşleme
sidebar_position: 2
description: Görüşmelerin otomatik işlenmesi, aylık harcama sınırları, dil modelleri, yönergeler ve onları çalıştıran kurallar.
---

**Ayarlar → İşleme**, bir görüşme kaydedildikten sonra ona ne olacağına, işi hangi modelin yapacağına ve bunun ne kadara mal olabileceğine karar verir.

<Shot name="12_settings_processing" alt="Ayarlar → İşleme" />

## Görüşmeleri kendiliğinden işle {#process-conversations-automatically}

- **Kapalı:** [Kayıtlar penceresinde](../recordings/recordings-window.md) siz isteyene kadar hiçbir şey olmaz.
- **Açık:** aşağıdaki [kurallar](#rules) kendi kendine çalışır. Bir görüşmeyi, kimse bir şeye basmadan bir özete, bir kategoriye ve geri kalan her şeye dönüştüren budur. Buluttaki bir model bu adımların her biri için ücret alır.

Onay kutusunun altında program bu ay ne kadar harcandığını ve kaç istek üzerinden harcandığını gösterir, örneğin *Bu ay: 40.492 belirteç, 84 istek üzerinden, ücretsiz.*

## Sınırlar {#limits}

| Alan | Anlamı |
| --- | --- |
| **Para sınırı, aylık** | Modellerin bir ayda en çok ne kadara mal olabileceği. |
| **Belirteç sınırı, aylık** | Bir ayda en çok kaç belirteç kullanabilecekleri. |

İki sınır vardır, çünkü bir ay iki şeyle sayılabilir. İkisi de siz doldurana kadar boştur. Herhangi birine ulaşıldığında otomatik kurallar ay dönene kadar durur. **Bir şeyi kendiniz istemeniz hiçbir zaman durdurulmaz.**

## Dil modelleri {#language-models}

Bir dökümü okuyup onun hakkında yazan modeller. Bir tane eklemek için **Ekle** düğmesine basın. Her biri adıyla, altında da model tanımlayıcısı ve hizmetinin adresiyle listelenir, örneğin `qwen3-32b · http://llm.local:8000/v1`. **Öntanımlı** olarak işaretlenen, öntanımlı olarak kullanılandır. Bir modelin formundaki bir düğme, ona güvenmeden önce hizmetin gerçekten yanıt verdiğini denetler.

- **Kendi makinenizdeki** bir model her görüşmeyi binanın içinde tutar ve çalıştırılması hiçbir şeye mal olmaz.
- Buluttaki bir model — OpenAI, Claude, Mistral, DeepSeek, Groq ve diğerleri — kullanım başına ücretlendirilir. Program her çağrının fiyatını belirteç ve para olarak gösterir.

## Yönergeler {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Ayarlar → İşleme: yönergeler" />

*Modellerden istenenler.* Her yönerge programla birlikte geldi ve her birini değiştirmek — ve geri koymak — size kalmış. Her biri adıyla, altında da ne yazdığı ve hangi biçimde yazdığıyla listelenir. Biçim — **Yanıt**, **Maddeler**, **Etiketler**, **JSON**, **Düzyazı**, **İşaretler** ya da **Ölçütler** — yanıtın nasıl saklanacağına ve gösterileceğine karar verir. Yönergeler [Personal Prompt Studio](prompt-studio.md) sayfasında anlatılır. **Ekle** kendi yönergenizi oluşturur.

## Kurallar {#rules}

<Shot name="12c_settings_processing_rules" alt="Ayarlar → İşleme: kurallar" />

*Kendi kendine bu düzende çalışanlar. Her biri görüşme başına en çok bir kez ateşlenir.* Bir kural; onu açıp kapatan bir onay kutusu, adı ve altında ne yaptığı bulunan bir satırdır. **▲** ve **▼** sırayı değiştirir. Program sekiz kuralla gelir:

| Kural | Ne yapar | Ne zaman |
| --- | --- | --- |
| **Her görüşmeyi yazıya dök** | Görüşmeyi yazıya döker. | her zaman |
| **Özetle** | Bir modele sorar: **Özet**. | her zaman |
| **Tek satıra indir** | Bir modele sorar: **Tek satırlık özet**. | her zaman |
| **Bir kategoriye yerleştir** | Bir modele sorar: **Kategori**. | her zaman |
| **Etiketle** | Bir modele sorar: **Etiketler**. | her zaman |
| **Bakılmaya değeni öne çıkar** | Bir modele sorar: **Uyarı işaretleri**. | her zaman |
| **Satışsa değerlendir** | Bir modele sorar: **Satış niteliği**. | yalnızca kategori **Satış** ise |
| **Destekse değerlendir** | Bir modele sorar: **Destek niteliği**. | yalnızca kategori **Destek** ise |

Sıra önemlidir: son iki kural, kendilerinden önceki kuralın belirlediği kategoriye ihtiyaç duyar. **Ekle** kendi kuralınızı oluşturur.

## Öntanımlılar {#defaults}

**Öntanımlılara dön**, yönergeleri ve kuralları programla geldikleri hâline, geçerli arayüz dilinde geri getirir. Dil modellerinize dokunulmaz.

Arayüz dilini değiştirdiğinizde programla gelen yönergeler ve kurallar oldukları dilde kalır; **Öntanımlılara dön** onları yeni dile getirir. Ardından her yönerge sağda *değiştirildi* olarak işaretlenir.
