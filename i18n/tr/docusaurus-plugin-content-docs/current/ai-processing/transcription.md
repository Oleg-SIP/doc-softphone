---
title: Yazıya döküm
sidebar_position: 1
description: "\"Sesi metne dönüştüren tanıyıcıyı seçin: adresi, modeli ve her hizmetin sunduğu modellerin tablosu.\""
---

**Ayarlar → Yazıya döküm**, sesin nasıl metne dönüşeceğini belirler: hangi dilde ve hangi tanıyıcıyla.

<Shot name="25_transcription" alt="Ayarlar → Yazıya döküm: dil ve dört tanıyıcı" />

Bir görüşme, [Kayıtlar penceresinde](/interface/recordings) istediğinizde ya da [İşleme](/ai-processing/processing) bölümünde **Görüşmeleri kendiliğinden işle** açıksa kendiliğinden yazıya dökülür. Kendi makinenizdeki bir tanıyıcıyı çalıştırmak hiçbir şeye mal olmaz; buluttaki bir tanıyıcı ses dakikası başına ücret alır.

## Dil {#language}

**Dil**, ISO 639-1'deki gibi iki harfli bir dil kodudur (`en`, `de`, `es`, `fr`, `sr`…). Boş bırakırsanız tanıyıcı karar verir — çağrılarınız tanıyıcının sürekli yanlış duyduğu bir dilde değilse doğrusu budur.

## Tanıyıcılar {#recognisers}

Tanıyıcı, telefonun ses gönderdiği bir konuşmadan metne hizmetidir. Bir tane eklemek için **Ekle** düğmesine basın; formdaki **Sına** düğmesi hizmetin gerçekten yanıt verdiğini denetler. Her biri adıyla, altında da modeli ve hizmetinin adresiyle listelenir. Resimde dört tane var:

| Ad | Model | Adres |
| --- | --- | --- |
| **X.ai** | *(boş: hizmetin öntanımlısı)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Satırının sağında **Öntanımlı** olarak işaretlenen (resimde **X.ai**), siz başka birini seçmediğinizde kullanılandır. Birkaç tane tutabilirsiniz. [Kayıtlar penceresinde](/interface/recordings#the-transcript-and-the-write-up) bir dökümün üstündeki açılır liste, her tanıyıcının oluşturduğu dökümleri listeler.

Model boş bırakılabilir. Bu durumda hizmet kendi öntanımlısını kullanır.

## Hangi modeli seçmeli {#which-model-to-choose}

Tablo, resimdeki dört hizmetin konuşmadan metne modellerini listeler. **Kalın** yazılan modeller resimde kurulu olanlardır. X.ai tanıyıcısında model boştur; bu yüzden hizmetin öntanımlısı olan **`grok-voice-transcribe-2.0`** kullanılır.

| Hizmet ve adres | Model | Ne için |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | OpenAI'ın kaydedilmiş konuşmayı özgün dilinde dökmek için önerdiği model. |
| | **`gpt-4o-transcribe`** | Genel amaçlı yazıya döküm. |
| | `gpt-4o-mini-transcribe` | Yukarıdakinin daha hafif, daha ucuz bir türevi. |
| | `gpt-4o-transcribe-diarize` | Kimin ne zaman konuştuğunu etiketler. Yalnızca buna ihtiyacınız varsa kullanın. |
| | `whisper-1` | Sözcük zaman damgaları ve altyazılar gibi özel kullanımlar için tutulan eski Whisper modeli. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | 90'dan fazla dilde, konuşmacı ayırmalı genel amaçlı yazıya döküm. |
| | `scribe_v2_medical` | Aynısı, klinik ses için ayarlanmış. |
| | `scribe_v1` | İlk kuşak; kullanımdan kalkmıştır, `scribe_v2` kullanın. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Deepgram'ın toplantılar, gürültülü ve çok dilli ses için en iyi genel amaçlı modeli. |
| | **`nova-2`** | Önceki kuşak; `nova-3`'ün henüz desteklemediği diller için tutun. |
| | `enhanced` | `base`'den daha düşük hata oranına sahip eski bir katman. |
| | `base` | Büyük hacimler için en eski katman. |
| | `whisper` | Deepgram tarafından çalıştırılan Whisper. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Öntanımlı; 25 dil. |
| | `grok-voice-transcribe-1.0` | Kullanımdan kalkmıştır: hizmet onu `2.0`'a yönlendirir. |

Seçmeden önce bilmeye değer şeyler:

- **Dosya boyutu.** OpenAI 25 MB'a kadar, X.ai 500 MB'a kadar dosya kabul eder. Uzun bir görüşme, bir bulut hizmetinin kabul ettiğinden büyük olabilir.
- **Fiyat.** Bulut hizmetleri ses dakikası başına ücret alır; ücretler modele göre değişir ve zamanla değişir; geçiş yapmadan önce bunları hizmetin kendi sayfasında okuyun.
- **Diller.** Her hizmetin kendi listesi vardır; sizinkini denetleyin ve tanıyıcı yanlış tahmin ediyorsa [Dil](#language) kodunu ayarlayın.
- `scribe_v2_realtime` ya da Deepgram'ın `flux` modeli gibi **gerçek zamanlı modeller** canlı akışlar için yapılmıştır ve tabloda yer almaz: telefon bitmiş kayıtları yazıya döker.

Bir hizmetin model listesi sık değişir. İstediğiniz bir model burada yoksa güncel liste hizmetin kendi belgelerindedir — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — **Model**, adın tam olarak hizmetin verdiği biçimidir.

## Kendi modelleriniz {#your-own-models}

Bir tanıyıcının bulut hizmeti olması gerekmez. Telefon, ister yerel olarak bilgisayarınızda ister kendi sunucunuzda çalışsın, **OpenAI uyumlu API üzerinden sunulan her modeli** — `POST /v1/audio/transcriptions` arayüzünü — kullanabilir. Ses binanızdan hiç çıkmaz, dakika başına hiçbir ücret alınmaz ve hacim sınırı yoktur.

Bir tane eklemek için **Ekle** düğmesine basın ve şunları girin:

- sunucunun `/v1` dahil olmak üzere **Adres** bilgisi, örneğin bilgisayarın kendisi için `http://localhost:8000/v1` ya da ağınızdaki bir sunucu için `http://asr.local:8080/v1`;
- sunucunun listelediği biçimiyle tam olarak **Model** adı, örneğin `openai/whisper-large-v3-turbo`.

### Neler kullanılabilir {#what-can-be-used}

Olağan seçim, OpenAI'ın açık konuşma tanıma modeli olan **Whisper**'dır. Kullanımı ücretsizdir, yaklaşık yüz dili anlar ve birkaç boyutta gelir: küçük bir model sıradan bir bilgisayarda çalışır, büyükler belirgin biçimde daha isabetlidir ve en iyisi bir ekran kartıyla çalıştırılmalarıdır.

| Model | Notlar |
| --- | --- |
| `whisper-large-v3` | En isabetli Whisper. GPU'lu bir sunucu için. |
| `openai/whisper-large-v3-turbo` | `large-v3`'ün biraz isabet kaybıyla daha hızlı bir sürümü. |
| `Systran/faster-whisper-large-v3` | faster-whisper motoru için dönüştürülmüş `large-v3`; daha hızlı ve bellek açısından daha hafif. |
| `medium`, `small`, `base` | Ekran kartı olmayan bir bilgisayar için daha küçük Whisper modelleri. |

Whisper, bu sunucuların etrafında kurulduğu modeldir. Bazıları NVIDIA Parakeet gibi başka konuşma tanıma modellerini de sunabilir.

### OpenAI uyumlu API sunan sunucular {#servers-that-offer-the-openai-compatible-api}

Model, OpenAI uyumlu `/v1/audio/transcriptions` uç noktasını sunan bir sunucu tarafından çalıştırılmalıdır. Şunlar sunar:

| Sunucu | Nedir |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Yüksek başarımlı bir model sunucusu. Başlatıldığında Whisper'ı `http://localhost:8000/v1` adresinde sunar. |
| [Speaches](https://github.com/speaches-ai/speaches) | faster-whisper üzerine kurulmuş, konuşma modelleri için bir sunucu, "konuşma için Ollama". Bir modeli ilk istendiğinde yükler. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Whisper'ı Apple silicon dahil bir CPU üzerinde verimli biçimde çalıştırır. `whisper-server` programı `--inference-path /v1/audio/transcriptions` ile başlatılır. |
| [LocalAI](https://localai.io/) | Modelleri yerel olarak çalıştıran, OpenAI'ın doğrudan yerine geçebilen bir seçenek. |

Aynı uç noktayı sunan başka her sunucu da aynı şekilde çalışır. Bir sunucu anahtar istiyorsa onu bir bulut hizmetindeki gibi girin.

Bir sunucuya güvenmeden önce bir deneme kaydı yapın ve dökümüne [Kayıtlar penceresinde](/interface/recordings) bakın: modelin iyi bilmediği bir dildeki görüşme bunu hemen belli eder.
