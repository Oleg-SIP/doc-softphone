---
slug: /
title: AI Softphone belgeleri
sidebar_position: 1
description: AI Softphone nedir, hangi sistemlerde çalışır ve programın her bölümü nerede anlatılır.
---

[AI Softphone](https://ai-softphone.com/), bir IP santrali için yazılım telefonudur; üstelik her görüşmeyi metne ve yazılı bir özete dönüştürür. Bir görüşme ona üç yoldan ulaşabilir ve üçü de aynı kitaplıkta, aynı kayıt, döküm ve işleme sonucuyla son bulur:

- herhangi bir IP santrali ya da SIP sağlayıcısı üzerinden programda yapılan veya yanıtlanan **bir çağrı**;
- Zoom, Teams, Meet ya da başka herhangi bir uygulamada yapılan ve doğrudan bilgisayardan kaydedilen **bir toplantı**;
- cep telefonundan, ses kayıt cihazından ya da başka bir sistemden gelen ve kitaplığa eklenen **elinizdeki bir kayıt**.

Kayıtlar, dökümler ve geçmiş, size ait bir dosyada saklanır. Hesap ya da abonelik gerekmez; program GPL v2 lisansı altında özgür yazılımdır.

## Görüşmeden işleme sonucuna {#from-a-conversation-to-a-write-up}

1. Bir görüşme gelir: bir çağrı, bir toplantı ya da bir dosya.
2. İki kanal üzerinde kaydedilir; böylece sizin söyledikleriniz ile karşı tarafın söyledikleri ayrı kalır.
3. Konuşmacı konuşmacı, sesle eşzamanlı olarak yazıya dökülür.
4. Seçtiğiniz dil modeli onu işler: özet, görevler, kategori, etiketler ve uyarı işaretleri — ayrıca görüşmeye bir soru da sorabilirsiniz.

## İndirme ve sistem gereksinimleri {#download-and-system-requirements}

Program [ai-softphone.com](https://ai-softphone.com/#download) adresinden ücretsiz indirilir: Windows için bir kurulum programı (`.exe`), macOS için bir disk görüntüsü (`.dmg`), Linux için bir AppImage ya da bir `.deb`. Önceden başka hiçbir şey kurmanız gerekmez — Qt, OpenSSL ve C++ çalışma zamanı paketin içinde gelir. Sağlayıcınızdan ya da kendi yönettiğiniz santralden bir SIP hesabına ihtiyacınız olacak. Kayıt, program kurulduğu anda çalışır; döküm ve işleme için seçtiğiniz bir hizmet ya da kendi makinenizde bir model gerekir.

| Sistem | Gereksinimler |
| --- | --- |
| macOS | macOS 14.4 ya da daha yenisi; yalnızca Apple silicon — Intel işlemcili bir Mac onu açamaz, Rosetta ile bile; Metal grafik; 160 MB disk alanı, artı kayıtlar. Sistem mikrofon için bir kez izin ister. |
| Windows | Windows 10 sürüm 1809 (derleme 17763) ya da daha yenisi ve Windows 11; 64 bit Intel ya da AMD işlemci; Direct3D 11 ya da OpenGL 2.1; 250 MB disk alanı, artı kayıtlar. |
| Linux | Ubuntu 22.04 LTS ya da daha yenisi, Debian 12 ya da daha yenisi ve aynı yaştaki her şey — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C kitaplığı 2.35 ya da daha yenisi; 64 bit Intel ya da AMD işlemci; X11 ya da Wayland üzerinde OpenGL 2.1 ya da OpenGL ES 2.0; PipeWire ya da PulseAudio (ikisi de yoksa ALSA); 200 MB disk alanı, artı kayıtlar. Tepsi simgesi için durum bildirim alanı olan bir masaüstü gerekir. |

Linux'ta AppImage o yaştaki her dağıtımda çalışır: çalıştırılabilir yapın ve başlatın. `.deb` ayrıca sistemin kendi GCC 13 C++ çalışma zamanına ihtiyaç duyar; bu Ubuntu 24.04 ve Debian 13'te vardır, Ubuntu 22.04'te yoktur; daha eski bir sistemde AppImage'ı kullanın.

Arayüz otuz dilde sunulur; dil [Görünüm](/program/appearance) bölümünde seçilir ve yeniden başlatmadan değişir.

Bu belgelerdeki ekran görüntüleri macOS'ta alınmıştır ve küçük gösterilir: tam boyutta görmek için birine tıklayın. Program diğer sistemlerde de aynı görünür ve aynı çalışır.

## İlk adımlar {#first-steps}

1. Santraliniz ya da SIP sağlayıcınız için [bir hesap ekleyin](sip-accounts/setup.md).
2. [Mikrofonu ve hoparlörleri seçin](sip-accounts/devices.md) ve bir deneme araması yapın.
3. [Hangi çağrıların kaydedileceğine](recordings/call-recording.md) karar verin.
4. Döküm ve işleme istiyorsanız bir [tanıyıcı](ai-processing/transcription.md) ve bir [dil modeli](ai-processing/processing.md) ekleyin.

**Ayarlar → Genel bakış** bu listeyi sizin için tutar: yeşil nokta tamamlanmış bir adımı, kırmızı nokta hâlâ kalan bir adımı gösterir. Bkz. [Ayarlara genel bakış](interface/settings-overview.md).

## Bundan sonra ne okumalı {#where-to-read-next}

| Şunu istiyorsanız… | Okuyun |
| --- | --- |
| Pencereler arasında yolunuzu bulmak | [Arayüz](interface/main-window.md) |
| Telefonu santralinize bağlamak | [SIP hesabı kurma](sip-accounts/setup.md) |
| Mikrofon, hoparlör ve zil sesi seçmek | [Aygıtlar](sip-accounts/devices.md) |
| Kodekleri, çağrı bekletmeyi ve çağrı geçmişini ayarlamak | [Çağrı ayarları](sip-accounts/calls.md) |
| İş arkadaşlarını tek dokunuşlu düğmelere koymak | [Düğmeler](sip-accounts/buttons.md) |
| Hangi çağrıların ne kadar süreyle kaydedileceğine karar vermek | [Çağrıları kaydetme](recordings/call-recording.md) |
| Görüşmelerinizi dinlemek, aramak ve okumak | [Kayıtlar penceresi](recordings/recordings-window.md) |
| Başka bir uygulamada yapılan bir toplantıyı kaydetmek | [Yakalama](capture/capture.md) |
| Konuşmayı metne çeviren tanıyıcıyı seçmek | [Yazıya döküm](ai-processing/transcription.md) |
| Görüşmelerinizi hangi yapay zekânın işleyeceğine ve bunun neye mal olabileceğine karar vermek | [İşleme](ai-processing/processing.md) |
| Kategorileri, etiketleri ve uyarı işaretlerini değiştirmek | [Sözlükler](ai-processing/dictionaries.md) |
| Yerleşimi, temayı, başlangıcı ve kısayolları değiştirmek | [Görünüm](program/appearance.md), [Başlangıç](program/startup.md) ve [Kısayollar](program/shortcuts.md) |
| Bir CRM'i ya da başka bir programı bağlamak | [Web kancaları](integration/webhooks.md) ve [Yerel REST API](integration/rest-api.md) |
| Telefonun ve santralin birbirine ne söylediğini görmek | [Tanılama](troubleshooting/diagnostics.md) |
| Bir sorunun nedenini bulmak | [Sık karşılaşılan sorunlar](troubleshooting/common-problems.md) |
| Programın bölümlerini kapatmak | [Modüller](application/modules.md) |
| Sürümü, güncellemeleri ve kullanım raporunun içeriğini denetlemek | [Hakkında](application/about.md) |

Sayfalar, **Ayarlar** içindeki sekmelerin sırasını izler.

## Gizlilik {#privacy}

- Öntanımlı olarak her şey bilgisayarınızda kalır: kayıtlar, dökümler ve geçmiş size ait bir dosyada durur. Bir görüşmeye dair hiçbir şey — ne bir numara, ne bir ad, ne de söylenenlerden tek bir sözcük — sizin göndermediğiniz bir yere gitmez.
- Hesap parolaları, web kancası başlık değeri ve API belirteci hiçbir zaman bir ayar dosyasında değil, işletim sisteminin anahtarlığında saklanır.
- Yeni bir sürüm çıktığında kendini duyurur — asla bir çağrı sırasında değil — ve ancak siz söylediğinizde kurulur.
- Program günde bir küçük kullanım raporu gönderir. İlki gitmeden önce içinde ne olduğu size gösterilir ve ne kadarını taşıyacağını siz seçersiniz: **Temel** ya da **Genişletilmiş**. Rapor hiçbir zaman numaralar, kişiler, santralinizin adresi ya da bir görüşmede söylenen herhangi bir şey içermez. Tam liste [Hakkında](/application/about#telemetry) sayfasındadır.
- Program GPL v2 lisansı altında özgür yazılımdır.
