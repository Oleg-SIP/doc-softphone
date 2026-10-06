---
title: SIP hesabı kurma
sidebar_position: 1
description: "AI Softphone'u Ayarlar → Hesaplar bölümünde IP santralinize ya da SIP sağlayıcınıza bağlayın."
---

AI Softphone her IP santraliyle ve her SIP sağlayıcısıyla çalışır. Sahip olduğunuz tüm hesaplarda (hatlarda) aynı anda oturum açabilirsiniz ve her hesabın kendi ayarları vardır.

**Ayarlar → Hesaplar** bölümünü açın.

<Shot name="05_settings_accounts" alt="Ayarlar → Hesaplar: ikisi de kayıtlı iki hesap" />

## Hesap listesi {#the-list-of-accounts}

Her hesap şunları içeren bir satırdır:

- hesabı açıp kapatan bir **onay kutusu**;
- hesap santrale kayıtlıyken yeşil olan bir **nokta**;
- ad ve onun altında `username@server`;
- hesabın santraldeki oturumunu kapatan bir **Bağlantıyı kes** düğmesi;
- hesabı listede yukarı ya da aşağı taşıyan **▲** ve **▼** düğmeleri. [Ana penceredeki](../interface/main-window.md) hesap rozetleri de aynı sırayı izler.

Sağ üstteki **Ekle** düğmesi bir hesap ekler. Bir satıra tıkladığınızda formu onun altında açılır.

## Hesap ekleme {#adding-an-account}

<Shot name="05d_account_add" alt="Yeni bir hesabın boş formu" />

**Ekle** düğmesine basın. Listenin altında boş bir form açılır ve imleç **Ad (isteğe bağlı)** alanında durur. Aşağıdaki alanları doldurun, santral gerektiriyorsa **Sunucu ayarları** bölümünü açın ve **Kaydet** düğmesine basın. Yeni bir hesap olağan değerlerle başlar: 5060 numaralı kapıda UDP, kaydın her 300 saniyede bir yenilenmesi.

## Hesap formu {#the-account-form}

<Shot name="05b_account_edit" alt="Bir hesabın formu" />

| Alan | Ne girilir |
| --- | --- |
| **Ad (isteğe bağlı)** | Ana pencerede hesabın rozetinde ve çağrılarında gösterilen ad. Boşsa hesap `username@server` olarak gösterilir. |
| **Kullanıcı adı** | Santralinizin ya da sağlayıcınızın verdiği kullanıcı adı ya da dahili numara. |
| **Parola** | Bunun parolası. Forma geri döndüğünüzde alan boş kalır. Parola hiçbir zaman bir ayar dosyasında değil, bilgisayarın anahtarlığında saklanır. |
| **Sunucu adresi** | Santralin ya da sağlayıcının SIP sunucusunun adresi, örneğin `pbx.example.com`. |
| **Sunucu ayarları** | Bağlantının daha az kullanılan ayarlarını açar; aşağıya bakın. |
| **Kendiliğinden yanıtla** | **Yanıtlama** altında: bu hesaba gelen çağrıları siz hiçbir şeye basmadan yanıtlar. Öntanımlı olarak kapalıdır. |

Değişiklikleri saklamak için **Kaydet** düğmesine basın. **Vazgeç** onları atar, **Sil** ise hesabı kaldırır.

Hesabın yanındaki nokta yeşil olduğunda hesap kayıtlıdır ve ana penceredeki rozeti de bunu gösterir. Nokta gri ya da kırmızı kalırsa [Tanılama](../troubleshooting/diagnostics.md) penceresini açın: **SIP** sekmesi `REGISTER` isteğini ve sunucunun verdiği yanıtı gösterir.

## Sunucu ayarları {#server-settings}

Çoğu santral burada hiçbir şey gerektirmez. Bunları göstermek için **Sunucu ayarları** düğmesine basın; aynı düğme artık **Sunucu ayarlarını gizle** olarak görünür.

<Shot name="05c_account_server_settings" alt="Bir hesabın açılmış sunucu ayarları" />

| Alan | Öntanımlı | Nedir |
| --- | --- | --- |
| **Kimlik doğrulama kullanıcısı** | boş | **Kullanıcı adı** ile aynı değilse, santralin parolayı karşılaştırdığı ad. Resimde dahili `201`'dir ve santral onu `ofis201` olarak doğrular. |
| **Taşıma** | UDP | Sunucuya bağlantının protokolü. Bir açılır liste. |
| **Kapı** | 5060 | Sunucunun kapısı (port). |
| **Giden vekil** | boş | Sağlayıcınız veriyorsa, her isteğin içinden geçmesi gereken bir vekil sunucu. |
| **Kayıt sunucusu** | boş | **Sunucu adresi** değilse, kaydın yapılacağı adres. |
| **Yeniden kayıt, saniye** | 300 | Telefonun kaydını ne sıklıkta yenilediği. |
| **Tuş sesleri** | Ses akışı | Tuş takımı tonlarının santrale nasıl gönderildiği. Bir açılır liste. Yalnızca santral tonları duymuyorsa değiştirin. |

Telefonun sunduğu kodekler hesap başına ayarlanmaz; bunlar [Çağrı ayarları](calls.md#audio-formats) bölümündedir.
