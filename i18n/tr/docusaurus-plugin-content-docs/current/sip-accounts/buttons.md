---
title: Düğmeler
sidebar_position: 4
description: "\"BLF düğmeleri: IP santralinizdeki bir dahiliyi tek dokunuşla arayan ve onun boş mu, çalıyor mu, meşgul mü olduğunu gösteren düğmeler.\""
---

Düğmeler, yazılım telefonunun **BLF** (Busy Lamp Field) tuşlarıdır; bir IP santraline bağlı masa telefonundaki işlevin aynısı. Bir düğme tek basışla bir dahiliyi arar. Hattını izleyen bir düğme ayrıca bir lamba da gösterir: telefon santrale o dahiliyi sorar ve tıpkı bir resepsiyon konsolu ya da bir masa telefonunun programlanabilir tuşları gibi onun boş mu, çalıyor mu, meşgul mü olduğunu gösterir.

BLF, santral tarafında destek gerektirir: santral dahilinin durumunu telefona bildirmelidir. Çoğu IP santrali bunu yapar. Sizinki yapmıyorsa lamba gri kalır, düğme yine de arama yapar.

Düğmeler [ana pencerede](/interface/main-window) hesap rozetlerinin altında durur; onları **Ayarlar → Düğmeler** bölümünde oluşturursunuz.

<Shot name="08_settings_buttons" alt="Ayarlar → Düğmeler: iki düğme" />

Her satır bir düğmedir: lamba, düğmenin etiketi ve sağda numarası ile ait olduğu hesap — örneğin *212 · 201 Ofis*. **▲** ve **▼** düğmeyi yukarı ya da aşağı taşır; ana penceredeki düğmeler bu sırayı izler. **Ekle** yeni bir düğme oluşturur.

## Lamba {#the-lamp}

Hattını izleyen bir düğme bir lamba gösterir:

| Lamba | Hat |
| --- | --- |
| Yeşil | boş |
| Turuncu | çalıyor |
| Kırmızı | çağrıda |
| Gri | bilinmiyor: santral bildirmiyor |

## Düğme ekleme {#adding-a-button}

<Shot name="08b_button_add" alt="Yeni bir düğmenin formu" />

**Ekle** düğmesine basın; listenin altında bir form açılır.

| Alan | Ne girilir |
| --- | --- |
| **Numara** | Aranacak numara. |
| **Hat** | Çağrının yapılacağı hesap. Önce bunu seçin: lambayı göstermek için telefon bu numarayı o hattın santraline sorar, dolayısıyla hangisi olduğunu bilmesi gerekir. |
| **Etiket** | Düğmenin üzerindeki metin, örneğin kişinin adı. Düğmede yalnızca kısa bir etikete yer vardır; daha uzunu kesilir. |
| **Bu hattın meşgul olup olmadığını göster** | Bir anahtar. Açıkken düğmenin bir lambası olur. Kapalıyken yalnızca arama yapar. |

**Kaydet**, form doldurulana kadar gri kalır. **Vazgeç** formu atar.

Programın düğmeleri gösteren bölümü [Modüller](/application/modules) içinde kapatılabilir.
