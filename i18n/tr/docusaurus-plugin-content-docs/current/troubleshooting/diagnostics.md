---
title: Tanılama
sidebar_position: 1
description: Telefonun ve santralin birbirine söylediği her sözcüğü gösteren pencere, günlük dosyası ve programın dosyalarını nerede tuttuğu.
---

**Tanılama** penceresi, telefonun ve santralin birbirine ne söylediğini, söyledikleri anda gösterir. Bir hesap kaydolmadığında ya da bir çağrı bağlanmadığında ilk bakılacak yer ve bir BT bölümünün size göndermenizi isteyeceği penceredir.

**Ayarlar → Tanılama** içinden, **Tanılamayı aç** düğmesiyle açılır.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Tanılama penceresi" />

Telefonun gönderdiği ya da aldığı her SIP iletisini, olduğu anda, süren çağrıların ses istatistikleriyle birlikte gösterir. Yalnızca açıkken toplar ve kapandıktan sonra hiçbir şey saklamaz.

## SIP {#sip}

**SIP** sekmesi sinyalleşmenin günlüğüdür.

- Her ileti; zamanı (milisaniyesine kadar), ne olduğu ve nereye gittiği bulunan bir satırdır: sağı gösteren ok telefonun gönderdiğini, solu gösteren ok sunucudan alınanı belirtir. Altında: sunucunun adresi `to` ya da `from` ve taşıma (örneğin *UDP üzerinden*).
- Bir ileti, başlıklarını tam olarak göstermek için genişletilebilir (resimdeki üçüncü ileti).
- **Ara** günlükte metin bulur.
- **Temizle** onu boşaltır.

Ekran görüntüsündeki örnek sağlıklı bir kayıttır: telefon `REGISTER` gönderir, sunucu `200 OK (REGISTER)` yanıtını verir.

## Çağrılar {#calls}

İkinci sekme, **Çağrılar**, süren her çağrı için nitelik ölçümlerini gösterir.

## Ayarlardaki Tanılama sekmesi {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Ayarlar → Tanılama" />

### Günlük ayrıntısı {#log-detail}

Açılır liste, programın günlük dosyasına ne kadar yazacağını seçer; resimde **Ayrıntılı** seçilidir. Hemen etkili olur, zaten süren bir çağrıda da — kaydını istediğiniz çağrı tam da odur. En ayrıntılı ayar her SIP iletisini yazar. Büyüktür, ama herhangi bir şey yazılmadan önce parolalar ondan çıkarılır; bu yüzden dosya bir destek isteğiyle güvenle gönderilebilir.

**Sistem günlüğüne bir kopya gönder**, günlükleri merkezi olarak toplanan bir makine için günlüğü sistemin kendi günlüğüne de yazar. Aşağıdaki dosya her iki durumda da yazılır ve bir destek isteğine eklenecek olan odur.

### Dosyalar {#files}

Sekme, programın dosyalarını nerede tuttuğunu ve her birinin ne kadar büyük olduğunu listeler. macOS'ta:

| Dosya | Nerede | Ne içerir |
| --- | --- | --- |
| Ayarlar | `~/Library/Preferences/ai-softphone/settings.json` | Ayarlar. Asla parolalar ya da belirteçler değil. |
| Veritabanı | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kişiler, geçmiş, dökümler ve işleme sonuçları. |
| Kayıtlar | `~/Library/Application Support/ai-softphone/recordings` | Kayıtların sesi. |
| Günlük | `~/Library/Logs/ai-softphone/ai-softphone.log` | Günlük. |

Listenin altında **Aç** günlüğü gösterir, **Temizle** onu boşaltır. Bir sorunu yeniden oluşturmadan hemen önce günlüğü temizleyin; temizleme geri alınamaz.

## Desteğe ne gönderilmeli {#what-to-send-to-support}

1. **Günlük ayrıntısı** ayarını en ayrıntılı düzeye getirin.
2. **Temizle** düğmesine basın, ardından sorunu yeniden oluşturun.
3. Günlük dosyasını gönderin ya da **Ayarlar → Hakkında** bölümünü açıp oradan bize yazın ve **Günlüğü ekle** seçeneğini işaretleyin — bkz. [Hakkında](../application/about.md#feedback).

Kayıt ya da bir çağrıyla ilgili bir sorun için **SIP** sekmesinden başarısız denemenin satırlarını da gönderin.

Programın tüm bunların arkasındaki bölümü — SIP izi, ortam istatistikleri ve sayaçlar — [Modüller](../application/modules.md) (**Tanılama**) içinde kapatılabilir.
