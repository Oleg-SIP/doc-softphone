---
title: Ana pencere
sidebar_position: 1
description: Solda telefon, sağda kitaplık ve ayarlar — AI Softphone ana penceresinin yerleşimi.
---

Ana pencere telefonun kendisidir. Öntanımlı yerleşim olan **Tek pencere** ile telefon solda durur, geri kalan her şey sağda açılır. [Yerleşim değiştirilebilir](../program/appearance.md).

<Shot name="03_contacts" full alt="Ana pencere: solda telefon, sağda Kişiler sekmesi" />

## Telefon {#the-phone}

Yukarıdan aşağıya, sol tarafta şunlar bulunur:

- **Numara** alanı;
- tuş takımı ve arama tuşu;
- hesap rozetleri;
- diğer dahilileri izleyen düğmeler;
- gidilecek dört yer: **Kayıtlar**, **Kişiler**, **Geçmiş** ve **Ayarlar**.

### Çevirici {#the-dialler}

- **Numara** — aranacak numarayı yazın ya da yapıştırın. Alanın sağ ucundaki saat simgesi, son zamanlarda aradığınız ya da sizi arayan numaraların listesini açar.
- Yuvarlak **1–9**, **\***, **0** ve **#** tuşları numarayı doldurur, bir çağrı sırasında ise ton (DTMF) gönderir.
- Ahize tuşu aramayı başlatır. Bir numara girilene kadar gri kalır.

<Shot name="22_last_calls" full alt="Numara alanının altında, Geçmiş sekmesinin yanında son çağrılar listesi" />

Son numaralar listesi açıkken alanda bir ok işareti görünür ve arama tuşu onun sağına geçer. Her girdi, tarihiyle birlikte bir addır ya da arayan [Kişiler](contacts-history.md) içinde yoksa bir numaradır. Kırmızı ahize cevapsız bir çağrıyı gösterir; parantez içindeki bir tekrar sayısı — örneğin *Yardım Masası (4)* — aynı tarafla arka arkaya yapılmış birkaç çağrı anlamına gelir.

### Hesap rozetleri {#the-account-chips}

Tuş takımının altında her [hesap](../sip-accounts/setup.md) için bir rozet vardır. Yeşil nokta, hesabın santrale kayıtlı olduğu anlamına gelir. Vurgulanan rozet (resimde **305 Destek**) bir sonraki çağrının yapılacağı hesaptır; değiştirmek için başka bir rozete basın. Rozetlerin sağındaki yuvarlak kırmızı düğme "rahatsız etmeyin" kipidir.

### Düğmeler {#the-buttons}

Rozetlerin altında, iş arkadaşlarınız ve hatlar için oluşturduğunuz [düğmeler](../sip-accounts/buttons.md) bulunur; her birinin bir lambası vardır — resimlerde **Yılmaz** ve **Depo**. Numarasını aramak için birine basın.

### Kayıtlar, Kişiler, Geçmiş, Ayarlar {#recordings-contacts-history-settings}

Alttaki bu dört girdi sağda yan yana birer sekme açar: [Kayıtlar](../recordings/recordings-window.md), [Kişiler ve Geçmiş](contacts-history.md) ve [Ayarlar](settings-overview.md). Açtığınız sekmeler sağ tarafın üstündeki sırada kalır.

## Süren bir çağrı {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Süren bir çağrı" />

Bir çağrı sürerken numara alanı, içinde bir tuş takımı simgesiyle en üste taşınır ve çağrı bir kartta gösterilir:

- çağrının durumu ve süresi (**Çağrıda · 0:21**), karşı tarafın adı, **Hat** ve çağrının bulunduğu hesabın adı, ayrıca numara;
- kartın iki yanında, sesin her kanalı için birer tane olmak üzere iki dikey düzey çubuğu;
- bir sıra düğme: kayıt (daire), sesi kapatma (mikrofon), bekletme (duraklat) ve kırmızı **Çağrıyı kapat** düğmesi;
- ikinci bir sıra: aktarma (oklu ahize) ve tuş takımı.

Bir çağrı doğrudan ya da önce kişiyle konuştuktan sonra aktarılabilir.

Numara **Kişiler** içinde kayıtlıysa numara yerine adı gösterilir. Aynı eylemlerin [kısayolları](../program/shortcuts.md) vardır: yanıtlama, kapatma, bekletme ve sesi kapatma.

## Aynı anda birkaç çağrı {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Birkaç çağrı" />

Gelen bir çağrı, telefon gizli olsa bile, nerede çalışıyorsanız orada bir bildirim şeridiyle duyurulur. Yeni gelen bir çağrı listenin üstünde kendi kartında görünür; yeşil, sarı ve kırmızı birer düğmesi ve şu anda kiminle konuştuğunuzu söyleyen bir satırı vardır (**Maria Ellis ile çağrıda**). Alttaki liste her çağrıyı durumuyla — **Beklemede**, **Çağrıda**, **Gelen çağrı** — ve bulunduğu hesapla gösterir. Duraklat simgesi beklemedeki bir çağrıyı, hoparlör simgesi ise üzerinde konuştuğunuz çağrıyı gösterir.

Siz zaten bir çağrıdayken biri aradığında ne olacağı [Çağrı ayarları](../sip-accounts/calls.md#call-waiting) bölümünde belirlenir.

## Konferans {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Bir konferans" />

Birleştirilen çağrılar, hesabın hattında tek bir **Konferans** kartı olarak görünür. Her katılımcı çağrıdaki süresiyle ve kendi **Çağrıyı kapat** düğmesiyle listelenir. Alttaki düğmeler konferansı herkes için kaydeder, sesini kapatır ve sonlandırır; en alttaki geniş düğme konferansı yeniden ayrı çağrılara böler.

## Yakalama {#capture}

**Ayarlar → Yakalama** içinde [diğer uygulamalardan yakalamaya](../capture/capture.md) izin verildiğinde, hesap rozetleri ile düğmeler arasında bir şerit belirir.

<Shot name="10_settings_capture" full alt="Telefonun altındaki Yakalama şeridi: Yakalama · hazır, Kaydet ve iki düzey çubuğu" />

- **Yakalama · hazır**, programın başka bir uygulamadaki bir görüşmeyi dinlediğini söyler.
- **Kaydet** bir yakalamayı elle başlatır.
- Altındaki iki ince çubuk ses düzeyini gösterir: üstteki sizsiniz, alttaki bilgisayarın çaldığı şeydir. Nasıl çizildikleri **Telefonun altındaki şeritteki resim** altında belirlenir.

Program ayrıca sistem tepsisinde (macOS'ta menü çubuğunda) yaşayabilir ve bir [kısayolla](../program/shortcuts.md) öne getirilebilir.
