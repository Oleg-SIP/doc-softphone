---
title: Sözlükler
sidebar_position: 4
description: Kendi kategorileriniz, etiketleriniz ve uyarı işaretleriniz — görüşmelerinizin altında yerleştirildiği sözcükler.
---

**Ayarlar → Sözlükler**, bir görüşmenin altında yerleştirilebileceği, onunla etiketlenebileceği ya da onun için işaretlenebileceği sözcükleri içerir. Bu listeler modellere gösterilen ve modellerin aralarından seçmek zorunda olduğu şeylerdir; böylece bir yanıt her zaman daha sonra arayabileceğiniz bir şey olur.

<Shot name="13_settings_dictionaries" alt="Ayarlar → Sözlükler" />

**Silinmişleri göster**, sildiğiniz girdileri gösterir.

Her girdi bir ad, küçük harflerle yazılmış kısa bir kod ve modele onu ne zaman seçeceğini söyleyen bir açıklamadır. Saklanan ve [REST API](../integration/rest-api.md#taxonomy-and-settings) tarafından döndürülen koddur; bu yüzden girdiyi yeniden adlandırdığınızda kod aynı kalır.

## Kategoriler {#categories}

Görüşmenin ne hakkında olduğu; **görüşme başına bir tane seçilir**. Program dört kategoriyle başlar:

| Ad | Kod | Ne için kullanılır |
| --- | --- | --- |
| **Satış** | `sales` | Satma, fiyat verme, pazarlık ya da bir alışverişin ardını izleme — müşterinin bir şeyin kaça olduğunu sorması da buna girer. |
| **Destek** | `support` | Birine, zaten sahip olduğu bir ürün ya da hizmet konusunda yardım: bir arıza, kullanımla ilgili bir soru, işleyişinden bir yakınma. |
| **Özel** | `personal` | Hiç iş değil — rastgele bu hatta yapılmış özel bir konuşma. |
| **Diğer** | `other` | İş, ama ne satış ne destek: bir tedarikçi, bir çalışma arkadaşı, bir teslimat, yanlış numara. Ötekiler arasında tahmin yürütmek yerine bunu seçin. |

Kendi kategorinizi eklemek için **Ekle** düğmesine basın.

## Etiketler {#tags}

*Hepsi aynı görüşme için geçerli olabilecek* işaretler. Bir tane eklemek için **Ekle** düğmesine basın. Liste şu tür girdilerle başlar:

| Ad | Kod | Ne için kullanılır |
| --- | --- | --- |
| **Geri arama sözü** | `callback` | Bu çağrıda biri geri arayacağına söz verdi ya da kendisinin aranmasını istedi. |
| **Yakınma** | `complaint` | Karşı taraf hoşnutsuzluğunu dile getirdi, çözülmüş olsun ya da olmasın. |
| **Üste taşındı** | `escalation` | Çağrı başka birine verildi ya da karşı taraf bunu istedi. |
| **VIP müşteri** | `vip` | Karşı tarafa önemli bir müşteri gibi davranıldı ya da kendisi öyle olduğunu söyledi. |

## Uyarı işaretleri {#red-flags}

Görüşmede kanıtı ve zamanıyla bulunan, dikkat gerektiren şeyler — örneğin *Öfkeli müşteri* ya da *Ayrılma tehlikesi*. Uyarı işaretleri [Kayıtlar penceresinde](../interface/recordings.md) kırmızıyla çizilir ve her birinin bir önem derecesi vardır: düşük, orta ya da yüksek.

| Ad | Kod | `severity` | Ne için kullanılır |
| --- | --- | --- | --- |
| **Öfkeli müşteri** | `angry-customer` | `high` | Karşı tarafın öfkeli olduğu, hakaret ettiği ya da ayrılmakla korkuttuğu duyuluyordu. |
| **Ayrılma tehlikesi** | `churn-risk` | `high` | İptal, yenilememe ya da başkasına geçme, ne kadar sakin söylenmiş olursa olsun, dile getirildi. |
| **Verilen söz** | `promise-made` | `medium` | Bizim taraf belirli bir şeye bağlandı — bir tarih, bir fiyat, bir onarım, bir geri ödeme. |
| **Duyarlı veri** | `sensitive-data` | `high` | Bir kart numarası, parola, belge numarası ya da bir kayıtta bulunmaması gereken başka bir şey sesli okundu. |
| **Rakip** | `competitor` | `low` | Karşı taraf aynı şeyi sunan başka birini adlandırdı ya da bizi onunla karşılaştırdı. |

## Yönergeler {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Ayarlar → Sözlükler: yanıt kalıpları ve dil talimatları" />

*Her yönergeye, yanıtın biçimi ve yazılacağı dil hakkında eklenenler.* Her yönerge aynı ifadeyi kullanabilsin diye burada tutulurlar ve onları diğer girdiler gibi değiştirebilirsiniz — ya da *kısaca yanıtla* veya *asla fiyat söyleme* gibi kendinizinkileri yazıp herhangi bir yönergede **Ayrıca gönder** altında işaretleyebilirsiniz.

| Ad | Kod | Modele ne söyler |
| --- | --- | --- |
| **Düzyazı** | `shape-plain` | JSON, liste ya da başlık olmadan düz metinle yanıtla. |
| **Maddeler** | `shape-list` | Yapılacak işlerin listesiyle yanıtla, her birinde kim ve ne zaman. |
| **Etiketler** | `shape-labels` | Yalnızca kendisine verilen listedeki kodları kullanarak, bir kod listesi ve her birinden ne kadar emin olduğuyla JSON olarak yanıt ver. |
| **Puan** | `shape-score` | Bir puan, gerekçesi ve dayandığı sözlerle yanıt ver. |
| **Ölçütler** | `shape-rubric` | Genel bir puan ve her ölçüt için bir puanla yanıt ver. |
| **İşaretler** | `shape-flags` | Listedeki kodlarla, her biri bir önem derecesiyle yanıt ver. |
| **Yanıt** | `shape-qa` | Cevapla ya da görüşmenin bunu söylemediğini açıkça belirt ve cevabın dayandığı sözleri ver. |
| **JSON** | `shape-json` | Yalnızca JSON ile, yukarıda istenen kalıpta yanıt ver. |
| **Konuşulduğu gibi** | `language-as-spoken` | Görüşmenin yapıldığı dilde yaz. |
| **Konuşulduğu gibi, adıyla** | `language-as-spoken-named` | Aynısı, dilin adını belirterek. |
| **Belirtilen dil** | `language-named` | Belirttiğiniz dilde yaz. |

Listenin başındaki **Ekle** bir girdi ekler.

## Öntanımlılar {#defaults}

**Öntanımlılara dön**, her sözlüğü programla geldiği hâline, geçerli arayüz dilinde geri getirir. Görüşmelerinizin zaten yerleştirildiği yerlere dokunulmaz.

## Yanıt biçimleri {#response-formats}

Bu bloklar yerleşik talimatları aynen aktarır. Yanıt biçimlerini açıklarlar; alternatifler bir gösterim biçimidir, çalıştırılabilir JSON örnekleri değildir.

### Düzyazı (`shape-plain`) {#shape-plain}

```text
Yalın düzyazıyla yanıtlayın. JSON, liste ya da başlık kullanmayın.
```

### Maddeler (`shape-list`) {#shape-list}

```text
Yalnızca JSON ile, tam olarak şu biçimde yanıtlayın:
{"items": [{"text": "yapılacak olan", "owner": "kim, ya da boş", "due": "ne zaman, ya da boş"}]}
Sıralanacak bir şey yoksa boş dizi kullanın. JSON dışında hiçbir şey yazmayın.
```

### Etiketler (`shape-labels`) {#shape-labels}

```text
Yalnızca JSON ile, tam olarak şu biçimde yanıtlayın:
{"labels": [{"code": "verilen listeden bir kod", "confidence": 0.0}]}
Yalnızca listedeki kodları kullanın. Hiçbiri uymuyorsa boş dizi kullanın. Kod
uydurmayın ve JSON dışında hiçbir şey yazmayın.
```

### Puan (`shape-score`) {#shape-score}

```text
Yalnızca JSON ile, tam olarak şu biçimde yanıtlayın:
{"score": 3, "rationale": "neden bu sayı da bir üstü değil",
 "evidence": [{"at_ms": 0, "quote": "dayandığınız sözler"}]}
Puan 1 ile 5 arası bir tam sayıdır. JSON dışında hiçbir şey yazmayın.
```

### Ölçütler (`shape-rubric`) {#shape-rubric}

```text
Yalnızca JSON ile, tam olarak şu biçimde yanıtlayın:
{"overall": 3, "rationale": "neden bu sayı da bir üstü değil",
 "criteria": [{"name": "ölçüt, size verildiği gibi",
               "verdict": "pass" ya da "weak" ya da "fail" ya da "n/a",
               "note": "tek cümle"}]}
Verilen her ölçütü değerlendirin, başkasını değil. Genel puan 1 ile 5 arası bir
tam sayıdır. JSON dışında hiçbir şey yazmayın.
```

### İşaretler (`shape-flags`) {#shape-flags}

```text
Yalnızca JSON ile, tam olarak şu biçimde yanıtlayın:
{"flags": [{"code": "verilen listeden bir kod",
            "severity": "low" ya da "medium" ya da "high",
            "evidence": "dayandığınız sözler",
            "at_ms": 0}]}
Yalnızca listedeki kodları kullanın ve her birini en çok bir kez kaldırın. Hiçbir
şey uymuyorsa boş dizi kullanın. JSON dışında hiçbir şey yazmayın.
```

### Yanıt (`shape-qa`) {#shape-qa}

```text
Yalnızca JSON ile, tam olarak şu biçimde yanıtlayın:
{"answer": "yanıtınız ya da açıkça görüşmenin bunu söylemediği",
 "citations": [{"at_ms": 0, "quote": "yanıtınızın dayandığı sözler"}]}
Görüşmeden başka hiçbir şeyden yanıtlamayın. JSON dışında hiçbir şey yazmayın.
```

### JSON (`shape-json`) {#shape-json}

```text
Yalnızca JSON ile, yukarıda istenen biçimde yanıtlayın. JSON dışında hiçbir şey yazmayın.
```

### Konuşulduğu gibi (`language-as-spoken`) {#language-as-spoken}

```text
Yanıtınızı, görüşmenin yapıldığı dilde yazın.
```

### Konuşulduğu gibi, adıyla (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Yanıtınızı, görüşmenin yapıldığı dilde yazın; o da şudur: {language}.
```

### Belirtilen dil (`language-named`) {#language-named}

```text
Yanıtınızı şu dilde yazın: {language}.
```
