---
title: Kayıtlar penceresi
sidebar_position: 2
description: "\"Her görüşmenin kitaplığı — bir çağrı, içe aktarılan bir dosya ya da Zoom, Teams veya Meet'ten yakalanan bir toplantı: süzgeçler, oynatıcı, herhangi bir satırdan çalabileceğiniz döküm ve işleme sonuçları.\""
---

**Kayıtlar**, nereden gelmiş olursa olsun her görüşmenin yaşadığı yerdir: telefonda yapılan ya da yanıtlanan bir çağrı, içe aktardığınız bir ses dosyası ya da Zoom, Teams, Meet veya başka bir uygulamadan yakalanan bir toplantı. Hepsi tek bir listede durur ve her biri aynı şekilde açılır: oynatıcı, döküm ve dil modelinin onun hakkında yazdığı her şey. Açmak için [ana pencerenin](main-window.md) sol altındaki **Kayıtlar**'a basın.

<Shot name="01_recordings" alt="Kayıtlar sekmesi: yakalanan bir Zoom toplantısı, içe aktarılan bir dosya ve çağrılar tek listede" />

## Üç tür kayıt {#three-kinds-of-recording}

Bir satırın solundaki simge, görüşmenin nasıl geldiğini söyler.

| Simge | Görüşme | Listedeki adı | Buraya nasıl gelir |
| --- | --- | --- | --- |
| Oklu ahize | Bu telefonda yapılan ya da yanıtlanan bir çağrı. Ok, gelen çağrıda içeri, giden çağrıda dışarı bakar. | Kişinin adı ya da numara | [Kayıtlar](../recordings.md) bölümünde ayarlandığı gibi kaydedilir |
| Çubuğa giren ok | Başka bir yerden içe aktarılan bir dosya: bir cep telefonu, bir ses kayıt cihazı ya da başka bir sistem | Dosyanın adı | **⋮ → Dosyalardan içe aktar**; bkz. [aşağıda](#a-recording-you-already-have) |
| Pencere | Başka bir uygulamada yapılan bir toplantı | Verdiğiniz ad ya da **Başka bir uygulama** | [Yakalama](../capture/capture.md) |

Resimde üstteki üç satır birer örnektir: bir Zoom toplantısı, bir bankanın destek çağrısının içe aktarılan dosyası ve **305 Destek** hattında yanıtlanan bir çağrı. Kaynakları ne olursa olsun, hepsi aynı şekilde yazıya dökülür, işlenir ve aranır.

## Bir görüşmeyi bulma {#finding-a-conversation}

Üstteki çubukta beş süzgeç, bir arama alanı ve bir menü bulunur:

| Denetim | Listeyi neye göre daraltır |
| --- | --- |
| **Tür** | görüşmenin geliş yolu: gelen ya da giden çağrılar, **İçe aktarılanlar**, **Yakalanan** |
| **Dönem** | tarih: **Bugün**, **Dün**, **Son 7 gün** ya da **Tarih seçin…** |
| **Kategori** | görüşmenin yerleştirildiği kategori — bkz. [Sözlükler](../ai-processing/dictionaries.md) |
| **İşaret** | taşıdığı etiketler ve uyarı işaretleri |
| **Tanıyıcı** | dökümünü oluşturan [tanıyıcı](../ai-processing/transcription.md) |
| **Ara** | içinde söylenenler — arama, kaydettiğiniz her şeyin dökümlerinde yapılır |

<Shot name="39_more_menu" alt="Listenin ⋮ menüsü: Dosyalardan içe aktar, CSV olarak dışa aktar, Tarayıcıda aç" />

Çubuğun sağındaki **⋮** düğmesi liste için başka eylemler açar:

| Öğe | Ne yapar |
| --- | --- |
| **Dosyalardan içe aktar** | Elinizde olan kayıtları getirir. Bkz. [Elinizdeki bir kayıt](#a-recording-you-already-have). |
| **CSV olarak dışa aktar** | Listeyi bir hesap tablosu olarak kaydeder: her görüşmenin zamanı, karşı tarafı ve numarası, yönü, süresi, kategorisi, etiketleri, uyarı işaretleri ve tek satırlık özeti. |
| **Tarayıcıda aç** | Listeyi tarayıcınızda, [yerel REST API](../integration/rest-api.md)'nin `/ui` adresinde sunduğu sayfa olarak açar. |

## Liste {#the-list}

Her satır şunları gösterir:

- görüşmenin türünün simgesi;
- ad — karşı taraf, numara, dosya ya da toplantı — ve altında tarih ile tek satırlık özet;
- sağda, puanıyla birlikte kategori (bir sayı, örneğin *Destek · 4*), ardından uyarı işaretleri ve etiketler, en sonda da süre.

Uyarı işaretleri kırmızıyla çizilir (resimde *Duyarlı veri*, *Verilen söz*, *Öfkeli müşteri*); etiketler sadedir (*Geri arama sözü*). Özeti ve kategorisi olmayan bir görüşme henüz işlenmemiştir — resimdeki **Ayşe Yıldız** satırı.

<Shot name="40_row_actions" alt="İmlecin üzerinde durduğu bir satır: iğne, kalem ve çöp kutusu düğmeleri" />

Bir satırın üzerine gelince sağında üç düğme görünür:

| Düğme | Ne yapar |
| --- | --- |
| İğne | **Bunu sakla**: saklanan bir kayıt, [Saklama](../recordings.md#retention) sınırlarıyla asla silinmez. Saklamayı bırakmak için yeniden basın. |
| Kalem | **Yeniden adlandır**: görüşmeye kendi vereceğiniz bir ad verir. Bir çağrı, kişinin adını yanında tutar; bir toplantı ya da dosya ise aksi halde geldiği uygulamanın ya da dosyanın adını taşır. |
| Çöp kutusu | Sorulduktan sonra **Bu kaydı sil**. Ses de gider ve geri alınamaz. |

## Oynatıcı {#the-player}

Listenin altında oynatıcıyı açmak için bir satır seçin.

- İki dalga biçimi, kaydın iki kanalıdır: üstteki sizsiniz, alttaki karşı taraf. İçe aktarılan bir dosya genellikle tek bir karışık iz taşır; bu yüzden iki çizgi de aynı sesi gösterir.
- **▶** çalar ve duraklatır; soldaki süreler konum ve toplam uzunluktur. Dalga biçimlerinin altındaki çubuk uzun bir kaydı kaydırır.
- **1×** hızı değiştirir; **Her ikisi** hangi sesi duyacağınızı seçer: ikisini, yalnızca sizi (**Ben**) ya da yalnızca karşı tarafı (**Onlar**).
- Disk düğmesi kaydın bir kopyasını kaydeder, **×** görüşmeyi kapatır.

Liste ile oynatıcı arasındaki çizgi, dökümün daha çok yer bulması için yukarı sürüklenebilir; aşağıdaki resimlerde de böyledir.

## Döküm {#the-transcript}

Oynatıcının altında döküm bulunur: her konuşma sırası için bir satır, söylendiği zaman ve söyleyen kişi.

<Shot name="26_recording_call" alt="305 Destek hattında bir çağrı: oynatıcı ve döküm, 0:11'deki satır vurgulanmış" />

| Kaydın türü | Konuşmacılar şöyle gösterilir |
| --- | --- |
| Bir çağrı | **Siz** ve karşı tarafın adı ya da numarası |
| Yakalanan bir toplantı | **Siz** ve diğer herkes için kaydın adı |
| İçe aktarılan bir dosya | **Herkes · speaker 1**, **Herkes · speaker 2**… — sesleri tanıyıcı ayırt eder |

**O ana gitmek için bir satıra tıklayın**: oynatıcı oraya geçer, satır vurgulanır ve o sırada söylenen sözcük satırın içinde işaretlenir — resimde **0:11**'deki satır ve *Evet* sözcüğü. Oradan dinlemek için **▶**'ya basın. Çalarken vurgu konuşmayı izler; böylece hem okuyabilir hem dinleyebilir, istediğiniz cümleye geri dönebilirsiniz.

Her satırın solundaki süre, bir işleme sonucunun işaret ettiği zamandır da: bir uyarı işareti, bir yanıt ya da bir alıntı, dayandığı sözlerin zamanını taşır.

## Döküm mü işleme sonucu mu: açılır liste {#transcript-or-write-up-the-drop-down}

Dökümün üstündeki açılır liste, o yerde ne gösterileceğini seçer: bir döküm ya da dil modelinin yazdığı işleme sonuçlarından biri.

<Shot name="27_writeup_menu" alt="Açık açılır liste: OpenAI dökümü ve çağrının işleme sonuçları" />

- **Mikrofon** simgeli satırlar dökümlerdir; kaydı yazıya döken her [tanıyıcı](../ai-processing/transcription.md) için bir tane. Yıldız ana olanı işaretler. Tanıyıcıyı, modelini ve dili görmek için birinin üzerine gelin.
- **Pırıltı** simgeli satırlar, [İşleme](../ai-processing/processing.md) bölümündeki [yönergelerin](/ai-processing/prompt-studio) oluşturduğu işleme sonuçlarıdır.

Bir kaydın, karşılaştırmak için, birkaç tanıyıcıdan dökümü olabilir: aşağıdaki Zoom toplantısı hem X.ai hem Deepgram tarafından yazıya dökülmüştür.

<Shot name="36_zoom_menu" alt="İki dökümü, Deepgram ve X.ai, ile işleme sonuçları olan yakalanmış bir toplantı" />

İşleme sonuçları kısa adlarla listelenir:

| Açılır listede | Yönergenin adı | Ne gösterir |
| --- | --- | --- |
| **Özet** | Özet | Ana noktalar, kararlar ve sonraki adımlar, kısa bir paragrafta. |
| **Kısaca** | Tek satırlık özet | Tek bir cümle; aynı satır listede adın altında da görünür. |
| **Eylemler** | Yapılacaklar | Kimin neyi, ne zamana kadar yapmayı kabul ettiği. |
| **Konular** | Konular | Gündeme gelen konular. |
| **Anılanlar** | Adlar ve sayılar | Kişiler, şirketler, tarihler, tutarlar ve başvurular. |
| sorunun kendisi | Bu çağrı hakkında bir soru | Sorduğunuz bir sorunun yanıtı ve dayandığı sözler. |
| **Kalite** | Satış niteliği, Destek niteliği | Genel bir puan ve her ölçüt için bir değerlendirme. |
| **Uyarı işaretleri** | Uyarı işaretleri | Dikkat gerektirenler, kanıtı ve zamanıyla. |
| **Etiketler**, **Kategori** | Etiketler, Kategori | Görüşmenin yerleştirildiği etiketler. |

## İşleme sonuçları tek tek {#the-write-ups-one-by-one}

Aşağıdaki resimlerin hepsi aynı çağrıya ait: **305 Destek** hattında bir müşteri, poliçelerinin ne zaman yenilendiğini soruyor.

**Özet** — görüşme birkaç cümlede.

<Shot name="28_summary" alt="Çağrının özeti" />

**Kısaca** — listede görüşmeyi tanımaya yetecek kadar kısa tek bir satır.

<Shot name="29_nutshell" alt="Kısaca: çağrının tek satırlık özeti" />

**Eylemler** — her görev, kimin yapacağı ve ne zaman olduğuyla; sağda.

<Shot name="30_actions" alt="Eylemler: Siz için iki görev, biri yarın sabaha kadar" />

**Çağrı hakkında bir soru** — görüşmeye her şeyi sorabilirsiniz: soru öğenin adı olur, yanıtın altında da dayandığı sözler ve kayıttaki zamanları durur.

<Shot name="31_question" alt="Çağrı hakkındaki bir sorunun yanıtı, 0:14 ve 0:27'de iki alıntıyla" />

**Kalite** — 1'den 5'e bir puan ve gerekçesi; her ölçüt de bir notla **karşılandı**, **zayıf** ya da **karşılanmadı** olarak işaretlenir.

<Shot name="32_quality" alt="Kalite: puan 4, iki ölçüt karşılandı, iki ölçüt zayıf" />

**Uyarı işaretleri** — her işaret, dayandığı sözler, önemi ve zamanıyla.

<Shot name="33_red_flags" alt="Uyarı işaretleri: Verilen söz, düşük, 0:27'de" />

**Konular** — bir toplantının, burada Zoom toplantısının konuları.

<Shot name="38_topics" alt="Zoom toplantısının konuları" />

## Açılır listenin yanındaki düğmeler {#the-buttons-beside-the-drop-down}

| Düğme | Ne yapar |
| --- | --- |
| Pırıltılar | **Yazıya dök ya da bir modele sor…**: bir menü açar, aşağıya bakın. |
| İki sayfa | Gösterileni kopyalar. |
| Disk | Gösterileni bir dosyaya kaydeder. Bir dökümü düz metin ya da altyazı olarak kaydedebilirsiniz. |
| Çöp kutusu | Gösterileni siler. |

<Shot name="34_run_menu" alt="Pırıltılar menüsü: dört tanıyıcılı Yazıya döküm, yönergelerle İşleme" />

Pırıltılar menüsü işi isteğe göre yapar. **Yazıya döküm** altında bir tanıyıcı seçerek kaydı onunla yeniden yazıya dökün; **İşleme** altında bir yönerge seçerek onu hemen çalıştırın — **Bu çağrı hakkında bir soru…** önce soruyu ister. Sonuç açılır listede görünür. Bir görüşme, [İşleme](../ai-processing/processing.md) bölümünde **Görüşmeleri kendiliğinden işle** kapalıyken böyle işlenir; birkaç işleme sonucu olan bir görüşmeye bir tane daha da böyle eklenir.

## Üç örnek {#three-examples}

### Telefonda yapılan bir çağrı {#a-call-made-in-the-phone}

Yukarıdaki çağrı: konuşmacılar **Siz** ve kişinin adı olan **Zeynep Arslan**, iki ayrı kanalda.

### İçe aktardığınız bir dosya {#a-file-you-imported}

<Shot name="35_recording_import" alt="Bir bankanın destek çağrısının içe aktarılan dosyası: tek karışık iz ve 1. ile 2. konuşmacılar" />

`riverside_bank_support_call`, **⋮ → Dosyalardan içe aktar** ile getirilmiş bir mp3'tür. Adı dosyanın adıdır, simgesi çubuğa giren bir oktur, iki konuşmacısını da tanıyıcı ayırt etmiştir. İşleme sonuçları yüksek sesle söylenen bir kart numarası buldu ve **Duyarlı veri** işaretini koydu.

### Başka bir uygulamadan yakalanan bir toplantı {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Bilgisayardan yakalanan bir Zoom toplantısı: X.ai dökümü, konuşmacılar olarak Siz ve toplantının adı" />

**4. çeyrek lansman planlaması (Zoom)**, toplantı Zoom'da sürerken yakalandı ve kalemle adlandırıldı. Toplantının karşı tarafındaki herkes kaydın adıyla gösterilir; siz **Siz**'siniz. Bkz. [Yakalama](../capture/capture.md).

## Elinizdeki bir kayıt {#a-recording-you-already-have}

Başka bir yerde — bir cep telefonunda, bir ses kayıt cihazında ya da başka bir sistemde — yapılmış bir kayıt **⋮ → Dosyalardan içe aktar** ile eklenebilir. Bir ya da birkaç mp3 veya wav dosyası seçin; telefon kaç tanesinin içe aktarıldığını söyler ve kayıt olarak okuyamadıklarını adıyla belirtir. Her biri tıpkı aranmış bir çağrı gibi yerleştirilir: yazıya dökülür, aynı [kurallarla](../ai-processing/processing.md#rules) işlenir ve aynı aramayla bulunur.

## Bir kaydı silme {#deleting-a-recording}

Bir kayıt silindiğinde ondan üretilen her şey de onunla birlikte gider: dökümler ve işleme sonuçları. Kayıtların kendiliğinden ne kadar süre saklanacağı [Kayıtlar](../recordings.md#retention) bölümünde belirlenir.
