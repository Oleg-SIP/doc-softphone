---
title: Suflör penceresi
sidebar_position: 3
description: "Canlı suflörün penceresi: bir görüşmenin sözleri söylendiği anda ve sırada ne söyleneceğine dair öneriler, düğmeleri ve sütunları, bir kayıt üzerinde prova ve maliyeti."
---

**Suflör**, bir görüşmeyi sürerken dinler. Kendi penceresinde her tarafın söylediklerini söylendiği anda yazar ve — seçtiğiniz yardımcı bir modele soruyorsa — sırada ne söyleyeceğinize dair bir öneri ekler. Bir satış görüşmesinde, iş mülakatında ya da zor bir konuşmada açık tutmaya değer; başka bir yardımcıyla aynı pencere karşı tarafın anlık çevirisini ya da yalnızca altyazıları gösterir.

<Shot name="46_prompter_running" alt="Suflör bir satış görüşmesini prova ediyor: solda döküm, sağda öneriler, en yenisi üstte büyük harflerle yinelenmiş" />

Resimde **Görüşmedeki itirazlar** yardımcısı bir satış görüşmesini dinliyor. Sol sütun söylenenlerdir, her satır kendi saati ve tarafıyla; sağ sütun modelin müşterinin her yanıtına önerdikleridir; en yeni öneri ikisinin üzerinde büyük harflerle yinelenir.

**Suflör**, üç koşul sağlanır sağlanmaz telefonun altındaki listede **Geçmiş** ile **Ayarlar** arasında görünür: suflöre izin verilmiştir, görüşme sürerken dinleyebilen bir tanıyıcı vardır ve — bir şey öneren yardımcılar için — bir dil modeli vardır. Bunların hepsi [Ayarlar → Suflör](/ai-processing/prompter) altında ayarlanır; yazı boyutu ve yardımcıların kendisi de oradadır.

## Pencere {#the-window}
<Shot name="44_prompter_window" alt="Görüşmedeki itirazlar yardımcısı seçili suflör penceresi, başlatılmadan önce" />

Üstte **Yardımcı** açılır listesi ve sağında düğmeler bulunur:

| Düğme | Ne yapar |
| --- | --- |
| **Başlat** / **Durdur** (üçgen / kare) | *Bu çağrıyı dinlemeye başla* — ya da bırak: *Söylenenler ekranda kalır*. Çağrı yanıtlanmadan basılan bir başlatma onu bekler ve düğme bu durumda başlatmayı iptal eder. |
| **Öneri** (kıvılcımlar) | *Yanıtı burada bitir ve ne söyleneceğini öner*, bir duraklama beklemeden. Hiçbir modele sormayan bir yardımcıda düğmenin adı **Yanıtı bitir** olur: yalnızca yanıtı kapatır, böylece sonraki yanıt temiz başlar. Suflör çalışmadığı sürece soluktur. |
| **Temizle** (çöp kutusu) | Sorduktan sonra ekrandakileri unutur. *Her iki sütun da kaybolur, onlarla birlikte bir sonraki önerinin kurulacağı konuşma da.* Durdurup yeniden başlatmak hiçbir şeyi temizlemez: durdurulup yeniden başlatılan bir konuşma genellikle aynı konuşmadır. |
| **Dışa aktar…** (disket) | Her iki sütunu saatleriyle birlikte bir dosyaya yazar: metin (`.txt`) ya da tablo (`.csv`) olarak, dosyaya verdiğiniz adla. |
| **Prova…** (kitaplık) | [Bir yardımcıyı bir kayıt üzerinde dener](#rehearsing-on-a-recording), bir çağrı yerine. |

Açılır liste [yardımcıları](/ai-processing/prompter#assistants) **Ayarlar → Suflör** altında belirlenen sırayla gösterir. Suflör çalışırken değiştirilemez ama görünür kalır; böylece hangi yardımcının çalıştığını görürsünüz. Dinlerken çağrının kartında **Dinliyoruz** yazar.

Düğmelerin altında en yeni satırın gösterildiği şerit, onun altında da iki sütun vardır:

- **Döküm** — her satır kendi saati ve tarafıyla;
- **Öneriler** — her öneri, yanıt verdiği konuşmanın saatiyle. Hiçbir modele sormayan bir yardımcıda bu sütun yoktur ve döküm tüm genişliği kaplar.

Pencere darken iki sütun alt alta durur. Bir sütun, içinde geri kaydırana kadar gelenleri izler; en alta döndüğünüzde yeniden izler. Bir satırı şeritte tutmak için herhangi bir satıra tıklayın; yeniden izlemek için en yenisine ya da şeritteki raptiyeye tıklayın. Sağ tıklama bir satırı, bir öneriyi, dökümün tamamını ya da tüm önerileri kopyalar. Şeridi yükseltmek için altındaki ayırıcıyı sürükleyin; yazı boyutları [Ayarlar → Suflör](/ai-processing/prompter#settings--prompter) altında ayarlanır.

## Bir kayıt üzerinde prova {#rehearsing-on-a-recording}
Bir yardımcı, telefonda kimse yokken de denenebilir. **Prova…**, [kitaplıktaki](/interface/recordings) konuşmaları en yeniden başlayarak ve bir `.mp3` ya da `.wav` dosyası için **Bu bilgisayardaki bir dosya…** seçeneğini listeler.

<Shot name="45_prompter_rehearse" alt="Prova…: kitaplıktaki konuşmalar ve bu bilgisayardaki bir dosya" />

Seçtiğiniz kayıt düğmelerin altındaki bir oynatıcıda görünür: oynat ve duraklat, tıklanabilen bir dalga biçimi olarak çizilmiş iki kanal ve süre. **Başlat**'a basın: kayıt suflöre bir çağrıyla aynı yoldan, kendi hızında çalınır — daha hızlı oynatma bilerek sunulmaz, çünkü bir buçuk kat hızla beslenen bir suflör kimsenin yapmadığı bir konuşma için duraklar, yanıt verir ve ücret yazardı. Sağdaki çarpı **Provayı bitir**'dir; çağrıları dinlemeye geri döner.

İçe aktarılmış bir dosya gibi tek kanallı bir kayıt tek bir oda olarak duyulur: *suflör her şeyi görüşülen kişi olarak duyar*.

## Maliyeti ve sözlerin gittiği yer {#what-it-costs-and-where-the-words-go}
- Tanıyıcı, canlı sesin dakikası başına ücretlendirilir ve **Benim tarafımı da tanı** bunu iki katına çıkarır. Bir model her öneri için ücretlendirilir. İkisi de İşleme'nin sınırlarına değil, suflörün [aylık tavanlarına](/ai-processing/prompter#spending) sayılır.
- Karşı tarafın sesi konuştukça bilgisayardan çıkar ve seçtiğiniz tanıyıcıya gider. Kendi makinenizdeki bir tanıyıcı — **Vosk**, **WhisperLive** ya da **NVIDIA Riva** — onu içeride tutar.
- Suflörün gösterdiği şey bir kayıt değildir. Saklamak için **Dışa aktar…**'a basın; konuşmanın kendisini istiyorsanız ayrıca [çağrıyı kaydedin](/recordings).

## Başlamadığında {#when-it-does-not-start}
Pencere, düğmelerin altındaki bir satırda neyin eksik olduğunu söyler.

| Pencerede yazan | Ne yapmalı |
| --- | --- |
| *Sufle kapalı. Ayarlar → Suflör.* | **Suflörün kullanılmasına izin ver** kutusunu işaretleyin. |
| *Buradaki hiçbir tanıyıcı biri konuşurken dinlemeyi bilmiyor. Ayarlar → Yazıya döküm.* | **Suflör için adres** içeren bir tanıyıcı ekleyin ve **Sına**'ya basın. |
| *Çalıştırılacak bir şey yok. Ayarlar → Suflör, ve bir yardımcı ekleyin.* | Tüm yardımcılar silinmiş ya da kapatılmış: bir tane ekleyin ya da **Öntanımlılara dön**'e basın. |
| *Karşı tarafa önce söylenmesi gerekir. Bu konuşmayı kaydetmeye başlayın ya da Ayarlar → Kayıt'ın rıza konusunda söylediğini değiştirin.* | Duyuruyu çalan kaydı başlatın ya da rıza ayarını değiştirin. |
| *Tanıyıcı dinlemeye başlamadı. Canlı adresini ve modelini Ayarlar → Yazıya döküm altında denetleyin.* | Suflör için adres, model ya da anahtar yanlış. Tanıyıcının kartındaki **Sına** hangisi olduğunu söyler. |
| *Bu ayın tanıyıcılar için ayrılan tutarı tükendi.* | **Tanıyıcılar, ayda** değerini artırın ya da ayın dönmesini bekleyin. |
| *Bu ayın modeller için ayrılan tutarı tükendi. Sözler sürüyor; sufle durdu.* | **Modeller, ayda** değerini artırın. |
