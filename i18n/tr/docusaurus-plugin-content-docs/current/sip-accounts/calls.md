---
title: Çağrı ayarları
sidebar_position: 3
description: Santrale sunulan kodekler, ikinci bir çağrı geldiğinde ne olacağı, otomatik arama ve çağrı geçmişinin ne kadar süre saklanacağı.
---

**Ayarlar → Çağrılar**, hangi hesapta olursa olsun her çağrıya ait ayarları içerir.

## Ses biçimleri {#audio-formats}

<Shot name="07_settings_calls" alt="Ayarlar → Çağrılar: ses biçimleri" />

Telefonun karşı tarafa sunduğu kodeklerin listesi. Kodekler *bu düzende sunulur* ve karşı taraf sizin sunduklarınızdan seçer: bir kodek ne kadar yukarıdaysa kullanılma olasılığı o kadar yüksektir.

- **Onay kutusu** bir kodeği açar ya da kapatır. Kapalı bir kodek sunulmaz.
- **▲** ve **▼** onu listede yukarı ya da aşağı taşır.
- Sağdaki *geniş bant*, bir telefon hattınınkinden daha geniş bir ses aralığına sahip kodeği gösterir: ses daha nettir.

| Kodek | Örnekleme hızı | Öntanımlı olarak açık |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, geniş bant | evet |
| **G722** | 16 kHz, geniş bant | evet |
| **PCMU** | 8 kHz | evet |
| **PCMA** | 8 kHz | evet |
| **speex** | 16 kHz, geniş bant | hayır |
| **speex** | 8 kHz | hayır |
| **speex** | 32 kHz, geniş bant | hayır |
| **iLBC** | 8 kHz | hayır |
| **GSM** | 8 kHz | hayır |
| **L16** | 44 kHz, stereo, geniş bant | hayır |
| **L16** | 44 kHz, geniş bant | hayır |

Tablo, programın kurulduğu andaki sırayı gösterir.

Kodekler bir çağrı başlarken üzerinde anlaşılır; bu yüzden bir değişiklik bir sonraki çağrınızdan itibaren geçerli olur. Bir çağrının sesi kötüyse yalnızca santralinizin kullandığı kodekleri açık bırakın.

## Çağrı bekletme {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Ayarlar → Çağrılar: çağrı bekletme, otomatik arama ve geçmiş" />

*Siz zaten bir çağrıdayken biri aradığında ne olacağı.* Bunu açılır liste seçer; öntanımlı değer **İkinci çağrıyı çaldır** seçeneğidir. Kendi santralinizden gelen bir interkom anonsu, ne seçerseniz seçin her zaman geçer — bir CTI panelinden yapılan bir çağrı bu telefona böyle ulaşır.

## Otomatik arama {#autodial}

Bir çağrı bağlanamadığında kartı, bağlanana kadar aramayı sürdürmeyi önerir. Bunun nasıl olacağını iki kaydırıcı belirler:

- **Denemeler arası bekleme** — öntanımlı olarak 15 saniye;
- **Şu süreden sonra vazgeç** — öntanımlı olarak 30 dakika.

## Geçmiş {#history}

Çağrı geçmişi bir kanıttır; bu yüzden burada siz söylemedikçe ondan hiçbir şey kaldırılmaz.

- **Saklama süresi**, [çağrı geçmişinin](/interface/contacts-history#history) bir çağrıyı ne kadar süre tutacağını seçer. Öntanımlı değer **Her zaman** seçeneğidir.
- **Çağrı geçmişini temizle**, süre ne derse desin tüm çağrıları bir kerede siler. Geri alınamaz.
