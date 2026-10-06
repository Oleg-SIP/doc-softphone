---
title: Sözlükler
sidebar_position: 4
description: Kendi kategorileriniz, etiketleriniz ve uyarı işaretleriniz — görüşmelerinizin altında yerleştirildiği sözcükler.
---

**Ayarlar → Sözlükler**, bir görüşmenin altında yerleştirilebileceği, onunla etiketlenebileceği ya da onun için işaretlenebileceği sözcükleri içerir. Bu listeler modellere gösterilen ve modellerin aralarından seçmek zorunda olduğu şeylerdir; böylece bir yanıt her zaman daha sonra arayabileceğiniz bir şey olur.

<Shot name="13_settings_dictionaries" alt="Ayarlar → Sözlükler" />

**Silinmişleri göster**, sildiğiniz girdileri gösterir.

Her girdi bir ad, küçük harflerle yazılmış kısa bir kod ve modele onu ne zaman seçeceğini söyleyen bir açıklamadır. Saklanan ve [REST API](../integration/rest-api.md#taxonomy-and-settings) tarafından döndürülen koddur; bu yüzden girdiyi yeniden adlandırdığınızda kod aynı kalır.

## Kategoriler {#categories}

Görüşmenin ne hakkında olduğu; **görüşme başına bir tane seçilir**. Program dört kategoriyle başlar:

| Ad | Kod | Ne için kullanılır |
| --- | --- | --- |
| **Satış** | `sales` | Satış yapma, fiyat verme, pazarlık etme ya da bir satın almanın ardından takip — bir müşterinin bir şeyin ne kadar tuttuğunu sorması dahil. |
| **Destek** | `support` | Birine zaten sahip olduğu bir ürün ya da hizmetle ilgili yardım: bir arıza, kullanımıyla ilgili bir soru, nasıl çalıştığına dair bir yakınma. |
| **Özel** | `personal` | Hiç iş değil — bu hattan yapılmış olan özel bir görüşme. |
| **Diğer** | `other` | İş, ama ne satış ne destek: bir tedarikçi, bir iş arkadaşı, bir teslimat, yanlış bir numara. Diğerleri arasında tahmin yürütmek yerine bunu seçin. |

Kendi kategorinizi eklemek için **Ekle** düğmesine basın.

## Etiketler {#tags}

*Hepsi aynı görüşme için geçerli olabilecek* işaretler. Bir tane eklemek için **Ekle** düğmesine basın. Liste şu tür girdilerle başlar:

| Ad | Kod | Ne için kullanılır |
| --- | --- | --- |
| **Geri arama sözü** | `callback` | Bu çağrıdaki biri geri arama sözü verdi ya da geri aranmayı istedi. |
| **Yakınma** | `complaint` | Karşı taraf, çözülmüş olsun ya da olmasın, memnuniyetsizliğini dile getirdi. |
| **Üste taşındı** | `escalation` | Çağrı başka birine devredildi ya da karşı taraf devredilmesini istedi. |
| **VIP müşteri** | `vip` | Karşı tarafa önemli bir müşteri olarak davranıldı ya da kendisi öyle olduğunu söyledi. |

## Uyarı işaretleri {#red-flags}

Görüşmede kanıtı ve zamanıyla bulunan, dikkat gerektiren şeyler — örneğin *Öfkeli müşteri* ya da *Ayrılma tehlikesi*. Uyarı işaretleri [Kayıtlar penceresinde](../recordings/recordings-window.md) kırmızıyla çizilir ve her birinin bir önem derecesi vardır: düşük, orta ya da yüksek.

## Yanıt kalıpları ve dil {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Ayarlar → Sözlükler: yanıt kalıpları ve dil talimatları" />

Sekmenin daha aşağısında, yönergelerin bir araya getirildiği talimatlar bulunur. Her yönerge aynı ifadeyi kullanabilsin diye burada tutulurlar ve onları diğer girdiler gibi değiştirebilirsiniz.

| Ad | Kod | Modele ne söyler |
| --- | --- | --- |
| **Etiketler** | `shape-labels` | Yalnızca kendisine verilen listedeki kodları kullanarak, bir kod listesi ve her birinden ne kadar emin olduğuyla JSON olarak yanıt ver. |
| **Puan** | `shape-score` | Bir puan, gerekçesi ve dayandığı sözlerle yanıt ver. |
| **Ölçütler** | `shape-rubric` | Genel bir puan ve her ölçüt için bir puanla yanıt ver. |
| **İşaretler** | `shape-flags` | Listedeki kodlarla, her biri bir önem derecesiyle yanıt ver. |
| **Yanıt** | `shape-qa` | Cevapla ya da görüşmenin bunu söylemediğini açıkça belirt ve cevabın dayandığı sözleri ver. |
| **JSON** | `shape-json` | Yalnızca JSON ile, yukarıda istenen kalıpta yanıt ver. |
| **Konuşulduğu gibi** | `language-as-spoken` | Görüşmenin yapıldığı dilde yaz. |
| **Konuşulduğu gibi, adıyla** | `language-as-spoken-named` | Aynısı, dilin adını belirterek. |
| **Belirtilen dil** | `language-named` | Belirttiğiniz dilde yaz. |

Listenin sonundaki **Ekle** bir girdi ekler.

## Öntanımlılar {#defaults}

**Öntanımlılara dön**, her sözlüğü programla geldiği hâline, geçerli arayüz dilinde geri getirir. Görüşmelerinizin zaten yerleştirildiği yerlere dokunulmaz.
