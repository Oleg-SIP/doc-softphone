---
title: Kişiler ve geçmiş
sidebar_position: 2
description: Telefonun yanında adres defteri ve çağrı geçmişi.
---

**Kişiler** ve **Geçmiş**, telefonun sağında iki sekme olarak açılır; böylece konuşurken bir numaraya bakabilirsiniz.

## Kişiler {#contacts}

<Shot name="03_contacts" alt="Kişiler sekmesi" />

- **Ara**, siz yazdıkça listeyi süzer.
- **Ekle** bir kişi oluşturur.
- Her kişi bir adla, onun altında da numarası ve kişinin arandığı hesapla listelenir; örneğin *231 · 201 Ofis*.

Bilinen bir numaradan gelen çağrı kişinin adını gösterir; son çağrılar listesi ve çağrı geçmişi de öyle — arayan kimliği eşleştirmesi bu şekilde çalışır.

### Bir kişiyi düzenleme {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Düzenleme için açılmış bir kişi" />

Bir kişiyi seçtiğinizde satırının sağında bir kalem ve bir ahize belirir. Ahize kişiyi arar; kalem satırın altında formu açar:

| Alan | Ne girilir |
| --- | --- |
| **Ad** | Kişinin nasıl gösterileceği. |
| **Numara** | Aranacak numara. |
| **Numara** altındaki açılır liste | Kişinin arandığı hesap. |

**Kaydet** değişiklikleri saklar, **Vazgeç** onları atar, **Sil** ise kişiyi kaldırır.

## Geçmiş {#history}

<Shot name="21_history" alt="Geçmiş sekmesi" />

Çağrı geçmişi, en yenisi en üstte. Üst kısımda:

- öntanımlı olarak **Tüm çağrılar** olan açılır liste, listeyi tek bir çağrı türüne daraltır;
- **Ara**, yazdığınıza göre süzer.

Her girdide çağrı türü için bir simge — giden bir ahize ya da cevapsız bir çağrı için saatli kırmızı bir ahize —, karşı tarafın adı (ya da numarası) ve altında tarih, çağrının sonucu, süresi, numara ve hesap bulunur. Yakın tarihli çağrılar *Dün, 22:33* biçiminde ya da haftanın günüyle, daha eskiler tarihle gösterilir.

| Çağrının sonucu | Gösterilme biçimi |
| --- | --- |
| Konuştunuz | **giden** ya da gelen ve süre, örneğin *48 sn* |
| Gelen bir çağrı yanıtlanmadı | **Cevapsız** |
| Yaptığınız bir çağrı bağlanmadı | **Geçmedi** |

Bir girdiyi seçtiğinizde sağında dört düğme belirir:

| Düğme | Ne yapar |
| --- | --- |
| Artılı kişi | Numarayı [Kişiler](#contacts) listesine ekler. |
| ▶ | Çağrı kaydedildiyse kaydını çalar. |
| Çöp kutusu | Girdiyi siler. |
| Ahize | Numarayı geri arar. |

### Geçmiş ne kadar süre saklanır {#how-long-the-log-is-kept}

Çağrı geçmişi bir kanıttır; bu yüzden siz söylemedikçe ondan hiçbir şey kaldırılmaz: öntanımlı olarak her çağrı saklanır. Saklama süresi ve **Çağrı geçmişini temizle** düğmesi [Çağrı ayarları](../sip-accounts/calls.md#history) bölümündedir.

Cevapsız ve reddedilen çağrılar [yerel REST API](../integration/rest-api.md) üzerinden de okunabilir (`/history?missed=true`, `/history?declined=true`).
