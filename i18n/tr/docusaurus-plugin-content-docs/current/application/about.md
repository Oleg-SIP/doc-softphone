---
title: Hakkında
sidebar_position: 2
description: Sürüm, güncellemeler, ülkeniz, lisans, kullanım raporunun içeriği, geri bildirim formu ve programın neyle oluşturulduğu.
---

**Ayarlar → Hakkında**, programın kendisiyle ilgili her şeyi içerir.

<Shot name="20_settings_about" alt="Ayarlar → Hakkında" />

## Sürüm ve ülke {#version-and-country}

En üstte ad, **Sürüm** (resimde 1.0.1) ve web sitesine bir bağlantı, [ai-softphone.com](https://ai-softphone.com/), bulunur.

**Ülke**, programa nerede olduğunuzu söyler. En iyi güncelleme sunucusunun seçilmesine yardım eder ve ülkenizde barındırılan dil ve konuşma hizmetlerinin yolunu açar. **Kendiliğinden bul** onu doldurur.

## Güncellemeler {#updates}

Sekme, en yeni sürüme sahip olup olmadığınızı ve en son ne zaman denetlendiğini söyler. **Güncellemelere bak** şimdi denetler.

**Güncellemelere kendiliğinden bak**, öntanımlı olarak açık, günde bir kez ve telefon başladıktan kısa süre sonra denetler. Bir sunucudan küçük bir dosya ister; siz söylemedikçe hiçbir şey indirilmez ya da kurulmaz.

## Lisans {#licence}

Program GPL-2.0-or-later altında özgür yazılımdır. Hiçbir garanti olmadan gelir ve onu bu lisansın koşulları altında yeniden dağıtabilirsiniz; tam metin `LICENSE` adlı dosyada gelir.

## Telemetri {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Ayarlar → Hakkında: kullanım raporunun içeriği" />

Program günde bir küçük kullanım raporu gönderir. İlki gitmeden önce içinde ne olduğu size gösterilir ve sekme bunu listeler:

| | Ne gönderilir |
| --- | --- |
| **Her zaman gönderilir** | Uygulamanın başlatıldığı, sürümü ve arayüz dili; işletim sistemi sürümü, yerel ayar, ülke ve saat dilimi. |
| **Genişletilmiş kipte ayrıca gönderilir** | Çağrıların ve yakalanan görüşmelerin sayaçları; bağlı softswitch'in üreticisi ve sürümü, asla adresi değil; [Genel bakış](/interface/settings-overview) adımlarından kaçının tamamlandığı ve seçilen yerleşim. |
| **Hiçbir kipte gönderilmez** | Aradığınız ya da sizi arayan numaralar; hesaplar, parolalar ya da anahtarlıktan herhangi bir şey; kişiler, görüşmeler, dökümler ya da kayıtlar; yazdığınız herhangi bir şey ve bilgisayardaki herhangi bir özel veri. |

Her kurulum kendisi için rastgele bir tanımlayıcı oluşturur; böylece programın aynı kopyasından gelen raporlar tek bir kopyaya ait olarak tanınabilir. Bu tanımlayıcı sizinle ya da bilgisayarınızla ilgili hiçbir şeyden türetilmez ve kimseyi adlandırmaz — ama kalıcı olduğu için taşıdığı raporlar birbirine bağlanabilir. Bu da raporları anonim değil, takma adlı yapar.

Temel raporun dayanağı meşru bir çıkardır: hangi sürümlerin kullanıldığını bilmek, bir düzeltmenin ona ihtiyaç duyan kişilere ulaşmasını sağlar. Genişletilmiş raporun eklediği her şey, siz seçtiğiniz için oradadır ve bunu burada istediğiniz zaman değiştirebilirsiniz.

### Raporlama {#reporting}

| Seçenek | |
| --- | --- |
| **Genişletilmiş** | Temel rapor ve *ayrıca gönderilir* altında listelenenler. Resimde seçili olan. |
| **Temel** | Yalnızca *her zaman gönderilenler*. |
| **Kapalı** | Hiç rapor yok. Yalnızca Enterprise sürümünde kullanılabilir; aksi hâlde seçenek gridir. |

## Geri bildirim {#feedback}

<Shot name="20c_settings_about_bottom" alt="Ayarlar → Hakkında: geri bildirim formu ve programın oluşturulduğu bileşenler" />

Programdan çıkmadan geliştiricilere yazmanızı sağlayan bir form.

| Alan | |
| --- | --- |
| **Konu** ve **İleti** | Söylemek istediğiniz şey. |
| **Adınız** ve **Yanıt için adres** | İkisi de isteğe bağlıdır. Adres olmadan size yanıt verilemez. |
| **Günlüğü ekle** | Günlüğün sonunu, yaklaşık 512 kB, ekler. Bkz. [Tanılama](/troubleshooting/diagnostics). |

**Gönder**, gönderilecek bir şey olana kadar gri kalır.

## Neyle oluşturuldu {#built-with}

Programın üzerine kurulduğu bileşenler, her biri lisansıyla: Qt 6 (GPL-2.0 ya da GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (kamu malı), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) ve PulseAudio istemcisi (LGPL-2.1-or-later). Her biri yanındaki lisans altında kullanılır; bir bileşen birkaç lisans sunduğunda, adı geçen lisans seçilmiş olandır.
