---
title: Personal Prompt Studio
sidebar_position: 3
description: Görüşmelerinizi işleyen yönergeler, onları çalıştıran kurallar ve onları nasıl kendinize göre uyarlayacağınız.
---

**Personal Prompt Studio**, AI Softphone'un görüşmelerinizi sizin istediğiniz gibi işleyen bölümüdür. İşleme sonucu yönergelerle oluşturulur: program, yazıya döküm ve bir dil modeli bağlanır bağlanmaz kullanıma hazır on bir yönergeyle gelir; bunları sade bir dille değiştirebilir, çoğaltabilir ve kendi yönergelerinizi ekleyebilirsiniz. [Ayarlar → İşleme](processing.md#prompts) içinde **Yönergeler** altında listelenirler.

Sizin LLM'iniz, sizin anahtarınız, sizin denetiminiz: tercih ettiğiniz modeli kendi anahtarınızla, desteklenen bir hizmet ya da uyumlu bir API üzerinden — ya da kuruluşunuzun içinde kurulu bir modeli — bağlayın. [Yazıya döküm](transcription.md#your-own-models) de kendi donanımınızda yapıldığında hem ses hem de dökümler ortamınızın içinde kalır.

<Shot name="12b_settings_processing_prompts" alt="Ayarlar → İşleme içindeki yönergeler listesi" />

## Programla gelen yönergeler {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11, tamamlanan görüşmeler için on bir istem ve dört canlı asistan içerir. Aşağıda bu dilin yerleşik metinleri verilmiştir; dil sürümleri farklılık gösterebilir.

| Yönerge | `code` | Biçim | Ne yazar |
| --- | --- | --- | --- |
| **Özet** | `summary` | Düzyazı | Ana noktaları, kararları ve sonraki adımları kısa bir paragrafta. |
| **Tek satırlık özet** | `super-summary` | Düzyazı | Görüşmeyi bir listede tanımak için kısa bir başlık. |
| **Yapılacaklar** | `action-items` | Maddeler | Kimin neyi ne zaman yapmayı kabul ettiği, söylediği sözlerle birlikte. |
| **Konular** | `topics` | Maddeler | Ele alınan konular, birkaç sözcükle. |
| **Adlar ve sayılar** | `entities` | JSON | Kişiler, şirketler, tarihler, tutarlar ve başvuru numaraları. |
| **Kategori** | `categorise` | Etiketler | Görüşmeyi [kategorilerinizden](dictionaries.md) birine yerleştirir. |
| **Etiketler** | `tags` | Etiketler | Daha sonra bulunabilsin diye görüşmeye [etiketlerinizi](dictionaries.md) koyar. |
| **Uyarı işaretleri** | `red-flags` | İşaretler | Sorunlar, kanıtı ve görüşmedeki zamanıyla birlikte. |
| **Bu çağrı hakkında bir soru** | `qa` | Yanıt | Tek bir görüşme hakkında sorduğunuz bir soruyu, dökümüne dayanarak yanıtlar. |
| **Satış niteliği** | `sales-quality` | Ölçütler | Görüşmeyi, düzenleyebileceğiniz satış ölçütlerine göre değerlendirir. |
| **Destek niteliği** | `support-quality` | Ölçütler | Sorunun ne kadar iyi anlaşıldığını ve ele alındığını değerlendirir. |

Biçimler, bir yanıtın sabit kalıplarıdır; programın yanıtı saklamasını ve daha sonra aramasını sağlayan da budur: **Etiketler** listelerinizden birindeki kodlardır, **İşaretler** önem derecesi olan kodlardır, **Ölçütler** gerekçeli bir puan ve her ölçüt için bir puandır, **Yanıt** dayandığı sözlerle birlikte bir cevaptır. Bir modele kalıbı söyleyen talimatlar [Sözlükler](dictionaries.md#instructions) içinde tutulur.

[Suflörün](../interface/prompter.md) yardımcıları da yönergedir; bitmiş bir görüşme yerine çağrı sürerken her konuşmaya uygulanır. Ayrı bir listede, **Ayarlar → Suflör** içindeki [Yardımcılar](prompter.md#assistants) altında tutulurlar.

AI Softphone'da yapılan çağrılar, bilgisayardan [yakalanan](/capture/) toplantılar ve içe aktarılan kayıtlar, dökümleri olduktan sonra aynı yönergelerden geçer.

Yapılacaklar, üzerinde anlaşılanı kaydeder — sizin yerinize ileti göndermez, ziyaret ayarlamaz ya da talep kaydı açmaz.

## Kendinize göre uyarlama {#making-it-yours}

- Bir yönergenin ne istediğini sade bir dille değiştirin: neyi aradığını, yanıt biçimini ve hangi dilde yanıt verdiğini.
- Bir türevini denemek için bir yönergeyi çoğaltın.
- Her yönerge için modeli seçin — kendi makinenizde ya da bulutta.
- Yönergelerin çalışma sırasını belirleyin, onları açıp kapatın ve koşula bağlayın — bu [kurallarla](processing.md#rules) yapılır: örneğin bir satış değerlendirmesi yalnızca **Satış** olarak yerleştirilen çağrılarda çalışır.
- Kendi kategorilerinizi, etiketlerinizi ve uyarı işaretlerinizi [Sözlükler](dictionaries.md) içinde tutun.
- Maliyeti [aylık sınırlarla](processing.md#spending) sınırlayın.

Özgün yönergeler ve kurallar, [Ayarlar → İşleme](processing.md#defaults) içinde **Öntanımlılar** altındaki **Öntanımlılara dön** ile geri getirilebilir.

## Modelin rolü {#role-and-task}

`system` modelin davranışını belirler, `body` görevi açıklar. Yanıt yapısı ve dili, sözlük talimatlarıyla ayrıca verilir.

Boş görev veya uyarı listesi doğru bir sonuç olabilir. Eksik sorumlular ve tarihler uydurulmamalıdır. Sorulara verilen yanıtlar yalnızca döküme dayanmalıdır.

[Yanıt biçimleri](dictionaries.md#response-formats)

## Yer tutucular {#placeholders}

İstemde görüşme verileriyle değiştirilen bir öğe.

| Yer tutucu | Anlamı |
| --- | --- |
| `{{transcript}}` | Her satırda bir konuşma sırası ve milisaniye cinsinden zaman içeren döküm |
| `{{duration}}` | Görüşme süresi |
| `{{direction}}` | Gelen veya giden arama |
| `{{party}}` | Kişi adı veya numarası |
| `{{language}}` | Yanıt dili |
| `{{question}}` | Kullanıcının sorusu |
| `{{categories}}` | Kategori sözlüğü |
| `{{tags}}` | Etiket sözlüğü |
| `{{red_flags}}` | Uyarı sözlüğü |
| `{{artifact:summary}}` | Önceden oluşturulmuş özet |
| `{{conversation}}` | Canlı suflörün biriktirdiği bağlam |
| `{{reply}}` | Karşı tarafın son sözü; yalnızca canlı suflör için |

`{{artifact:summary}}` kullanan `super-summary` öncesinde `summary` çalıştırılmalıdır. Kalite değerlendirmesinden önce `categorise` çalıştırılmalıdır: `sales-quality`, `sales` kategorisini; `support-quality` ise `support` kategorisini gerektirir.

[Yerleşik asistanlar](prompter.md#assistant-templates)

## Varsayılan istem metinleri {#standard-templates}

AI Softphone 1.1.11, tamamlanan görüşmeler için on bir istem ve dört canlı asistan içerir. Aşağıda bu dilin yerleşik metinleri verilmiştir; dil sürümleri farklılık gösterebilir.

### Özet (`summary`) {#summary}

**Yanıt yapısı:** `plain`.

**Rol (`system`)**

```text
Telefon görüşmelerinin dökümlerini okur ve onlar hakkında kısa, olgusal özetler yazarsınız. Söylenmemiş hiçbir şeyi tahmin etmez ve hiçbir zaman öğüt eklemezsiniz.
```

**Görev (`body`)**

```text
Bu telefon görüşmesini kısa bir paragrafta özetleyin: neyle ilgiliydi, ne kararlaştırıldı ve bundan sonra ne oluyor. {{duration}} sürdü, {{direction}} bir çağrıydı, karşı taraf {{party}}.

{{transcript}}
```

### Tek satırlık özet (`super-summary`) {#super-summary}

**Yanıt yapısı:** `plain`.

**Rol (`system`)**

```text
Telefon görüşmelerinin dökümlerini okur ve her birini tek bir söz öbeğine indirirsiniz. Hiçbir zaman tahmin yürütmez ve öğüt eklemezsiniz.
```

**Görev (`body`)**

```text
Bu telefon görüşmesini en çok on iki sözcüklük tek bir söz öbeğine indirin — bir çizelgede arayanın adının yanında duracak türden. Nokta yok, tırnak yok.

{{artifact:summary}}

{{transcript}}
```

### Yapılacaklar (`action-items`) {#action-items}

**Yanıt yapısı:** `list`.

**Rol (`system`)**

```text
Telefon görüşmelerinin dökümlerini okur ve birinin yapmayı üstlendiği şeyleri sıralarsınız. Yalnızca gerçekten söylenenleri sıralarsınız; hiçbir zaman görev, sorumlu ya da tarih uydurmazsınız.
```

**Görev (`body`)**

```text
Bu çağrıda herhangi birinin yapmayı üstlendiği şeyleri sıralayın. Söylendiği yerde kimin yapacağını, söylendiği yerde de ne zamana kadar olduğunu belirtin. Kimse bir şey üstlenmediyse boş listeyle yanıtlayın.

{{transcript}}
```

### Konular (`topics`) {#topics}

**Yanıt yapısı:** `list`.

**Rol (`system`)**

```text
Telefon görüşmelerinin dökümlerini okur ve neyle ilgili olduklarını adlandırırsınız.
```

**Görev (`body`)**

```text
Bu çağrının gerçekten değindiği konuları sıralayın, en çok altı tane, her birini birkaç sözcükle. Sorumlu ve tarihi boş bırakın — burada bir anlamları yok.

{{transcript}}
```

### Adlar ve sayılar (`entities`) {#entities}

**Yanıt yapısı:** `json`.

**Rol (`system`)**

```text
Telefon görüşmelerinin dökümlerini okur ve içlerinde adı geçenleri ayıklarsınız. Hiçbir zaman yazılış tahmin etmez ve söylenmemiş bir şey eklemezsiniz.
```

**Görev (`body`)**

```text
Bu çağrıda adı geçenleri, tam olarak şu biçimde JSON olarak ayıklayın:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Her biri, söylendikleri gibi yazılmış dizgelerden oluşan bir listedir. Tahmin yürütmektense listeyi boş bırakın.

{{transcript}}
```

### Kategori (`categorise`) {#categorise}

**Yanıt yapısı:** `labels`.

**Rol (`system`)**

```text
Telefon çağrılarını, size verilen kategorilerden birine yerleştirirsiniz. Listeden seçersiniz, başka hiçbir şeyden değil.
```

**Görev (`body`)**

```text
Bu çağrıyı bu kategorilerden tam olarak birine yerleştirin. Kodunu yanıt olarak verin.

{{categories}}
{{transcript}}
```

### Etiketler (`tags`) {#tags}

**Yanıt yapısı:** `labels`.

**Rol (`system`)**

```text
Telefon çağrılarını, size verilen etiketlerle işaretlersiniz. Listeden seçersiniz, başka hiçbir şeyden değil; bir etiketi zorlamaktansa dışarıda bırakırsınız.
```

**Görev (`body`)**

```text
Bunlardan hangileri bu çağrı için doğru? Kodlarıyla yanıtlayın, hiçbiri değilse boş listeyle.

{{tags}}
{{transcript}}
```

### Uyarı işaretleri (`red-flags`) {#red-flags}

**Yanıt yapısı:** `flags`.

**Rol (`system`)**

```text
Telefon görüşmelerinin dökümlerini okur ve yalnızca aramanız istenenleri öne çıkarırsınız. Her birinin dayandığı sözleri alıntılar ve alıntılayamadığınız hiçbir şeyi öne çıkarmazsınız.
```

**Görev (`body`)**

```text
Bu çağrının gösterdiklerini öne çıkarın. Her biri için dayandığı sözleri alıntılayın ve söylendikleri anı milisaniye olarak verin. Bir tanımı zorlamaktansa hiçbir şey öne çıkarmayın.

{{red_flags}}
{{transcript}}
```

### Bu çağrı hakkında bir soru (`qa`) {#qa}

**Yanıt yapısı:** `qa`.

**Rol (`system`)**

```text
Tek bir telefon çağrısı hakkındaki soruları, onun dökümünden ve başka hiçbir şeyden yanıtlarsınız. Görüşmenin söylemediği yerde, tahmin yürütmek yerine bunu açıkça söylersiniz.
```

**Görev (`body`)**

```text
{{question}}

{{transcript}}
```

### Satış niteliği (`sales-quality`) {#sales-quality}

**Yanıt yapısı:** `rubric`.

**Rol (`system`)**

```text
Bir satışçının telefon görüşmesini nasıl yürüttüğünü değerlendirirsiniz. Yalnızca dökümün gösterdiğine bakarsınız, ondan önce ya da sonra ne olduğunu asla varsaymazsınız ve iyi giden bir görüşmeye de gitmeyene de aynı ölçüde katısınız.
```

**Görev (`body`)**

```text
Bu çağrıdaki bizim tarafı — operatörü — şu ölçütlere göre değerlendirin, başka hiçbirine göre değil:
- selamlama: kendini ve şirketi tanıttı mı?
- anlama: müşterinin aslında ne istediğini öğrendi mi?
- itirazlar: müşterinin ortaya attığına yanıt verdi mi, yoksa yanından mı konuştu?
- değer: müşterinin ne elde ettiğini söyledi mi, yalnızca kaça olduğunu değil?
- sonraki adım: görüşme belirli bir şeyde anlaşılarak mı bitti?

{{transcript}}
```

### Destek niteliği (`support-quality`) {#support-quality}

**Yanıt yapısı:** `rubric`.

**Rol (`system`)**

```text
Bir destek çalışanının telefon görüşmesini nasıl yürüttüğünü değerlendirirsiniz. Yalnızca dökümün gösterdiğine bakar ve müşterinin sorununun gerçekten çözülüp çözülmediğini, görüşmenin ne kadar hoş geçtiğinden daha ağır tartarsınız.
```

**Görev (`body`)**

```text
Bu çağrıdaki bizim tarafı — operatörü — şu ölçütlere göre değerlendirin, başka hiçbirine göre değil:
- selamlama: kendini tanıttı ve kiminle konuştuğunu doğruladı mı?
- anlama: yanıtlamadan önce gerçekte neyin yanlış olduğunu saptadı mı?
- çözüm: sorun çözüldü mü, yoksa belirli bir sonraki adım mı verildi?
- ton: özellikle müşterinin kalmadığı yerde sakin ve nazik kaldı mı?
- kapanış: bitirmeden önce müşterinin hoşnut olduğunu denetledi mi?

{{transcript}}
```
