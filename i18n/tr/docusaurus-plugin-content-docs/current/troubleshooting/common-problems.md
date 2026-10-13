---
title: Sık karşılaşılan sorunlar
sidebar_position: 2
description: "Bir hesap kaydolmadığında, ses olmadığında, bir çağrı ya da toplantı kaydedilmediğinde, döküm olmadığında, suflör başlamadığında ya da bir bağlantı, bir kısayol veya API hiçbir şey yapmadığında neyi denetlemeli ve telefonun kendi iletilerinin ne anlama geldiği."
---

Her girdi, sorunu belirleyen ayarı gösterir. Yanıt burada yoksa [Tanılama](/troubleshooting/diagnostics) penceresini açın: telefonun ve santralin birbirine ne söylediğini gösterir.

## Hesap kaydolmuyor {#the-account-will-not-register}

**Ayarlar → Hesaplar** içinde hesabın yanındaki nokta gri ya da kırmızı kalıyor.

1. [Hesap formunda](/sip-accounts/setup) **Kullanıcı adı**, **Parola** ve **Sunucu adresi** alanlarını denetleyin.
2. Santraliniz parolayı dahiliden farklı bir ad altında denetliyorsa **Sunucu ayarları** altında **Kimlik doğrulama kullanıcısı** alanını doldurun.
3. **Taşıma** ve **Kapı** değerlerini santralin beklediğiyle karşılaştırın.
4. [Tanılama penceresinin](/troubleshooting/diagnostics) **SIP** sekmesini açın ve `REGISTER` isteğine ve sunucunun verdiği yanıta bakın.

## Duyamıyorum ya da beni duymuyorlar {#i-cannot-hear-or-i-cannot-be-heard}

[Ayarlar → Aygıtlar](/sip-accounts/devices) bölümünü açın.

- Bir şey söyleyin: **Mikrofon** altındaki çubuk oynamalıdır. Oynamıyorsa başka bir mikrofon seçin.
- Seçtiğiniz aygıtta bir ses duymak için **Hoparlörler** altındaki **Sına** düğmesine basın.
- **Ses düzeyi** kaydırıcılarını denetleyin. Çağrı kartındaki **Sesi kapat** ve **Mikrofonu kapat** [kısayolu](/program/shortcuts) bir çağrı sırasında mikrofonu kapatır.
- Zil sesi, konuştuğunuz aygıttan farklı bir aygıtta çalacak şekilde ayarlanabilir — **Zil sesi**, ikinci açılır liste.

## Çağrının sesi kötü ya da çağrı başlamıyor {#the-call-sounds-bad-or-does-not-start}

Kodekler, [Ayarlar → Çağrılar](/sip-accounts/calls#audio-formats) altındaki listenin sırasıyla sunulur. Santralinizin kullandığı kodekleri açık bırakın ve en iyisini başa koyun. Bir değişiklik bir sonraki çağrınızdan itibaren geçerli olur.

## İkinci bir çağrı çalmıyor {#a-second-call-does-not-ring}

Siz bir çağrıdayken biri aradığında ne olacağı [Çağrı bekletme](/sip-accounts/calls#call-waiting) altında belirlenir.

## Bir çağrı kaydedilmedi {#a-call-was-not-recorded}

- **Ayarlar → Kayıt** içindeki ilk açılır liste hangi çağrıların kaydedileceğine karar verir; öntanımlı değer olan **Elle**, yalnızca çağrı kartında kayıt düğmesine bastığınızda kaydeder. Bkz. [Kayıtlar](/recordings).
- Kayıt, çağrı yanıtlandığında başlar; bu yüzden yanıtlanmayan bir çağrının dosyası olmaz.
- [Modüller](/application/modules) içinde **Kayıt** modülü açık olmalıdır.
- Kayıtlar **Saklama** altındaki sınırlar nedeniyle kaldırılır; sabitlenmiş bir kayıt asla kaldırılmaz.

## Başka bir uygulamadaki bir toplantı yakalanmadı {#a-meeting-in-another-application-was-not-captured}

Bkz. [Yakalama](/capture/).

- **Ayarlar → Yakalama** içinde **Ses yakalamaya izin ver** açık olmalıdır.
- **Otomatik başlatma** **Bana sor** (öntanımlı) olarak ayarlıysa soru belirdiğinde yanıtlayın; **Asla** ise kayıt düğmesine kendiniz basın.
- Aynı sekmede **Sına** bölümünü kullanın: siz konuşurken üstteki çubuk, bir şey çalarken alttaki oynamalıdır.
- [Modüller](/application/modules) içinde **Yakalama** modülü açık olmalıdır.

## Bir kayıt var, ama döküm ya da özet yok {#there-is-a-recording-but-no-transcript-or-summary}

- Bir görüşme yalnızca [Ayarlar → İşleme](/ai-processing/processing) içinde **Görüşmeleri kendiliğinden işle** açıksa kendiliğinden yazıya dökülür ve işlenir. Aksi hâlde bunu [Kayıtlar penceresinde](/interface/recordings) isteyin.
- Bir [tanıyıcı](/ai-processing/transcription) ve bir [dil modeli](/ai-processing/processing#language-models) bulunmalı ve her biri kendi adresinde yanıt vermelidir.
- Aylık **Para sınırı** ya da **Belirteç sınırı** dolduğunda otomatik kurallar ay dönene kadar durur. Bir şeyi kendiniz istemeniz hiçbir zaman durdurulmaz.
- [Ayarlar → Genel bakış](/interface/settings-overview) adımları neyin hâlâ kurulması gerektiğini gösterir.

## Suflör görünmüyor ya da başlamıyor {#the-prompter-does-not-appear-or-does-not-start}

**Suflör**, telefonun altındaki listede yalnızca üç şey sağlandığında görünür: [Ayarlar → Yazıya döküm](/ai-processing/transcription#live-recognition-for-the-prompter) altında **Suflör için adres** girilmiş ve **Sına** denemesini geçmiş bir tanıyıcı, bir dil modeli ve [Ayarlar → Suflör](/ai-processing/prompter) altında **Suflörün kullanılmasına izin ver** işareti. **Suflör** modülü [Modüller](/application/modules) altında açık olmalıdır.

Pencere açılıyor ama suflör başlamıyorsa, düğmelerinin altındaki satır neyin eksik olduğunu söyler. [Başlamadığında](/interface/prompter#when-it-does-not-start) bölümü tüm iletileri ve ne yapılacağını listeler.

## Pencereyi kapattığımda telefon kayboldu {#the-phone-disappeared-when-i-closed-the-window}

**Pencere kapatıldığında telefon çalışmaya devam etsin** açıkken telefon hâlâ çalışır ve çağrılar yine gelir. Bildirim alanındaki (macOS'ta menü çubuğundaki) simge pencereyi geri getirir. Bildirim alanı olmayan bir masaüstünde telefon görev çubuğunda simge durumundadır. Bkz. [Başlangıç](/program/startup).

## Bir tarayıcıdaki ya da CRM'deki telefon numarası arama yapmıyor {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

[Ayarlar → Başlangıç](/program/startup#call-links) içinde **Arama bağlantılarını bu telefonla aç** düğmesine basın. **Ara düğmesine basmadan hemen ara** açık değilse, tıklanan bir numara çeviriciye gelir ve orada bekler.

## Bir düğmenin lambası gri kalıyor {#a-buttons-lamp-stays-grey}

Santral, dahilinin boş olup olmadığını bildirmiyor. Düğme yine de arama yapar. Bkz. [Düğmeler](/sip-accounts/buttons).

## REST API yanıt vermiyor {#the-rest-api-does-not-answer}

- [Ayarlar → Bütünleştirme](/integration/rest-api) içinde **Bu bilgisayardaki başka programlar telefonu yönetebilsin** açık olmalı, [Modüller](/application/modules) içinde de **Bütünleştirme** modülü açık olmalıdır.
- **Kapı** değerini değiştirmediyseniz adres `http://127.0.0.1:8377` olur.
- **Erişim** altında açmadığınız bir grup her isteğe `404` ile yanıt verir.
- Bir **Belirteç** belirlediyseniz saklanan verileri değiştiren istekler onu `Authorization` başlığında taşımalıdır.
- Daha fazla belirti [Çalışmadığında](/integration/rest-api#when-it-does-not-work) bölümündedir.

## Web kancaları gelmiyor {#webhooks-do-not-arrive}

[Ayarlar → Bütünleştirme](/integration/webhooks) içinde **Sınama olayı gönder** düğmesine basın. REST API'nin `webhooks_failed_total` ve `webhooks_dropped_total` sayaçları teslimatın nasıl gittiğini gösterir; [Hiçbir şey gelmediğinde](/integration/webhooks#when-nothing-arrives) bölümü her birinin ne anlama geldiğini listeler.

## Bir kısayol hiçbir şey yapmıyor {#a-hotkey-does-nothing}

[Kısayollar](/program/shortcuts) bölümünü açın. Bir kısayol, telefon kullandığınız program olduğu sürece çalışır; onu herhangi bir programdan kullanmak için **Her yerde** seçeneğini işaretleyin. Başka bir program onu almışsa kısayola tıklayın ve tuş birleşimine yeniden basın.

## Telefonun iletileri {#messages-the-phone-shows}

Bir şey olmadığında telefon nedenini ayrı bir satırda söyler. Bir listenin altındaki satır birkaç saniye sonra kendiliğinden kaybolur.

### Arama yapılamadığında {#when-a-call-is-not-placed}

| İleti | Ne yapmalı |
| --- | --- |
| *Kurulmuş hesap yok* | [Ayarlar → Hesaplar](/sip-accounts/setup) içinde bir hesap ekleyin. |
| *Açık bir hesap yok, bu yüzden arama yapılacak hat yok.* | **Ayarlar → Hesaplar** içinde bir hesabın onay kutusunu işaretleyin. |
| *Henüz kayıtlı bir hat yok.* | Hesap açık ama santrale henüz kayıtlı değil. Noktasının yeşile dönmesini bekleyin; dönmezse [Hesap kaydolmuyor](#the-account-will-not-register) bölümüne bakın. |
| *Bu telefonun taşıyabileceği kadar çağrı açık.* | Görüşmelerden birini kapatın, sonra yeniden arayın. |
| *Bunun arayacağı hesap artık yok.* | Satır, o zamandan beri silinmiş bir hesaba ait. Numarayı tuş takımında çevirin. |
| *Bu satırda geri aranacak numara yok.* | Arayan numarasını gizlemiş, bu yüzden geri aranacak bir numara yok. |

### Hesap bağlanmadığında {#when-an-account-does-not-connect}

| İleti | Ne yapmalı |
| --- | --- |
| *Bu sunucu adresi bulunamadı. Yazım yanlışlarına bakın.* | [Hesap formunda](/sip-accounts/setup) **Sunucu adresi** alanını denetleyin. |
| *Sunucuya ulaşılamadı. Adresi, kapıyı ve ağınızı denetleyin.* | **Sunucu adresi** alanını, ayrıca **Sunucu ayarları** altındaki **Taşıma** ve **Kapı** değerlerini denetleyin. SIP'i bir güvenlik duvarı da durduruyor olabilir. |
| *Sunucu bu kullanıcı adını ya da parolayı reddetti.* | **Kullanıcı adı** ve **Parola** alanlarını denetleyin. Santral parolayı başka bir ad altında denetliyorsa **Kimlik doğrulama kullanıcısı** alanını doldurun. |
| *Sunucunun sertifikası doğrulanamadı. Sertifikayı sunucunun yöneticisi kendisi oluşturduysa “Sunucu ayarları” içinde “Sertifikayı doğrula” seçeneğinin işaretini kaldırın.* | TLS bağlantısında görünür. Santral kendi yaptığı bir sertifika kullanıyorsa **Sunucu ayarları** altında **Sertifikayı doğrula** işaretini kaldırın. |
| *Bu hesabın parolası anahtarlıktan okunamadı. Anahtarlığın kilidini açıp yeniden bağlanın.* | Bilgisayarın anahtar zincirinin kilidini açın (macOS'te Anahtar Zinciri), sonra hesabın yanında **Bağlan** düğmesine basın. |

### Görüşme sırasında {#during-a-call}

| İleti | Ne yapmalı |
| --- | --- |
| *Ortak ses biçimi yok* | Santralin ve telefonun ortak bir kodeki yok. Santralin kullandığı bir kodeki [Ses biçimleri](/sip-accounts/calls#audio-formats) bölümünde açın. |
| *Mikrofon ya da hoparlör yok* | Aygıtları [Ayarlar → Aygıtlar](/sip-accounts/devices) içinde seçin. |
| *Kayıt yapılmıyor: diskte kalan yer sınıra indi. Biraz yer açın ya da Ayarlar'dan sınırı değiştirin.* | Diskteki boş alan **Disk alanı eşiği** değerine indi — bkz. [Kayıtlar](/recordings). Yer açın ya da eşiği düşürün. |

### Telefon başlarken {#when-the-phone-starts}

*Veritabanı okunamıyor*, veritabanının programın başka bir sürümü tarafından yapıldığı ve bu sürümün onu okuyamadığı anlamına gelir. Çoğu zaman daha eski bir sürüm, daha yeni bir sürümün verileriyle başlatılmıştır: daha yeni sürümü yeniden kurarsanız veritabanını olduğu gibi açar. **Baştan başla** ise boş bir veritabanı yapar — tüm kişiler ve geçmişteki tüm aramalar kaybolur, bu geri alınamaz. Basmadan önce veritabanı dosyasının bir kopyasını saklayabilirsiniz; yerini [Tanılama](/troubleshooting/diagnostics#files) söyler.
