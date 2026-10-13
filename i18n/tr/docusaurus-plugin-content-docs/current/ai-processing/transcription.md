---
title: Yazıya döküm
sidebar_position: 1
description: "Sesi metne çeviren tanıyıcıyı seçmek: adresi, modeli ve her tür hizmetin modellerini gösteren bir tablo."
---

**Ayarlar → Yazıya döküm** tanıyıcıları listeler: sesi metne çeviren hizmetleri, biten görüşmeler için ve [suflör](../interface/prompter.md) için görüşme sürerken.

<Shot name="25_transcription" alt="Ayarlar → Yazıya döküm: beş tanıyıcı" />

Bir görüşme, [Kayıtlar penceresinde](/interface/recordings) istediğinizde ya da [İşleme](/ai-processing/processing) bölümünde **Görüşmeleri kendiliğinden işle** açıksa kendiliğinden yazıya dökülür. Kendi makinenizdeki bir tanıyıcının çalışması hiçbir şeye mal olmaz; buluttaki bir tanıyıcı ses dakikası başına ücret alır.

## Tanıyıcılar {#recognisers}
Tanıyıcı, telefonun sesi gönderdiği bir konuşma tanıma hizmetidir. **Ekle** yeni bir tane ekler; kartındaki **Sına** düğmesi hizmetin gerçekten yanıt verip vermediğini denetler. Her biri listede adıyla, altında da hizmetinin modeli ve adresiyle görünür. Tablo, telefonun desteklediği her hizmet türünü, karttaki **Tür** alanının sunduğu biçimde, o türden yeni bir tanıyıcının aldığı adres ve modellerle birlikte listeler; son sütun resimde ayarlı beş tanıyıcıyı gösterir:

| Tür | Yazıya dökümler için adres | Suflör için adres | Model | Resimde |
| --- | --- | --- | --- | --- |
| **OpenAI uyumlu (Whisper, OpenAI)** | `https://api.openai.com/v1` | `wss://api.openai.com` | `gpt-4o-transcribe`, canlı `gpt-live-transcribe` | **OpenAI** · `gpt-4o-transcribe` |
| **Deepgram** | `https://api.deepgram.com/v1` | `wss://api.deepgram.com` | `nova-3` | **Deepgram** · `nova-2` |
| **ElevenLabs (Scribe)** | `https://api.elevenlabs.io/v1` | `wss://api.elevenlabs.io` | `scribe_v1`, canlı `scribe_v2_realtime` | **ElevenLabs** · `scribe_v2` |
| **Speechmatics** | `https://asr.api.speechmatics.com/v2` | `wss://global.rt.speechmatics.com`; bir bölge için `global.` yerine `eu.`, `us.` veya `au.` | `enhanced` | — |
| **xAI (Grok)** | `https://api.x.ai/v1` | `wss://api.x.ai` | *(boş: hizmetin öntanımlı modeli)*, canlı `grok-voice-transcribe-2.0` | **X.ai** · canlı `grok-voice-transcribe-2.0` |
| **Soniox** | `https://api.soniox.com` | `wss://stt-rt.soniox.com` | *(boş: hizmetin öntanımlı modeli)*, canlı `stt-rt-v5` | — |
| **AssemblyAI** | `https://api.assemblyai.com` | `wss://streaming.assemblyai.com` | *(boş: hizmetin öntanımlı modeli)* | — |
| **Vosk (kendi makinenizde)** | kendi sunucunuz, örneğin `ws://localhost:2700` | *(aynı sunucu)* | *(sunucuda ayarlanır)* | **Vosk** · `ws://localhost:2700` |
| **WhisperLive (kendi makinenizde)** | kendi sunucunuz, örneğin `ws://localhost:9090` | *(aynı sunucu)* | canlı `small` | — |
| **NVIDIA Riva (kendi makinenizde)** | kendi sunucunuz, örneğin `localhost:50051` | *(aynı sunucu)* | *(sunucuda ayarlanır)* | — |

**Suflör için adres** genellikle bir WebSocket adresidir: buluttaki bir hizmet için `wss://`, kendi ağınızdaki bir sunucu için `ws://`; NVIDIA Riva `sunucu:bağlantı noktası` biçiminde girilir.

Satırın sağındaki iki işaret, tanıyıcının neyin öntanımlısı olduğunu söyler. Saat, **yazıya dökümler için** öntanımlı olanda yanar — resimde **X.ai** —; başka birini seçmediğinizde o kullanılır. Şimşek, **suflör için** öntanımlı olanda yanar — resimde **Vosk**. Birden çok tanıyıcı tutabilirsiniz; [Kayıtlar penceresinde](/interface/recordings#transcript-or-write-up-the-drop-down) bir yazıya dökümün üstündeki açılır liste her birinin yaptığı dökümleri gösterir.

## Tanıyıcının kartı {#the-recognisers-card}
Bir tanıyıcıya basmak kartını açar.

<Shot name="43_recogniser_card" alt="X.ai tanıyıcısının kartı: tür, iki adres, anahtar, Sına ve öntanımlılar" />

| Alan | Nedir |
| --- | --- |
| **Ad** | Listelerdeki ad. |
| **Tür** | Telefonun hizmetle nasıl konuşacağını belirleyen hizmet türü: **OpenAI uyumlu (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** ve kendi makinenizde çalışan üç tür — **Vosk**, **WhisperLive** ve **NVIDIA Riva**. |
| **Yazıya dökümler için adres** | Biten görüşmelerin gönderildiği yer. |
| **Suflör için adres** | Görüşme sürerken canlı sesin gittiği yer. Genellikle bir WebSocket adresidir: buluttaki bir hizmet için `wss://` (resimdeki `wss://api.x.ai` gibi), kendi ağınızdaki bir sunucu için `ws://`. *Boşsa yanındaki adresten çıkarılır*. |
| **Anahtar** | Hizmetin anahtarı. *Bu bilgisayarın anahtarlığında tutulur, hiçbir zaman bir ayar dosyasında değil.* |
| **Sına** | Hizmete sorar ve ne yanıt verdiğini söyler, örneğin *Yanıt verdi ve 3 model sunuyor*. |
| **Yazıya dökümler için model** ve **Suflör için model** | Model, tam olarak hizmetin adlandırdığı gibi. *Boş, model adı göndermez*, ve hizmet kendi öntanımlısını kullanır; sağlayıcı bir tane yayımlıyorsa kart onu belirtir. Seçeneği olmayan bir tür için alan gösterilmez. Resimde xAI'de **Yazıya dökümler için model** alanı yoktur; **Suflör için model** ise `grok-voice-transcribe-2.0` olarak ayarlıdır. |
| **Yazıya dökümler için öntanımlı** | Bunu, başka birini seçmediğinizde kullanılan tanıyıcı yapar. |
| **Suflör için öntanımlı** | Bunu, suflörün yeni bir yardımcısının dinlediği tanıyıcı yapar. |
| **Etkin** | Kapalıyken tanıyıcı listede kalır ama kullanılmaz. |

**Gelişmiş ayarlar** kartın geri kalanını açar. En önemli değerler:

<Shot name="43b_recogniser_advanced" alt="Bir tanıyıcının gelişmiş ayarları: sınırlar, yanıtların nasıl bölündüğü, dil" />

| Alan | Ne yapar |
| --- | --- |
| **Bölge** | Birden çok bölgesi olan bir hizmetin bölgesi. |
| **İki tarafı ayrı gönder** | Bir arama iki kişi iki kanalda olacak biçimde kaydedilir; tanıyıcıya kimin ne dediğini söyleyen de budur. Bunu yapabildiğini söyleyip yapamayan bir sunucu için kapatın. |
| **Kimin konuştuğunu iste** | Bir kanalda birden çok kişi konuşuyorsa o kanaldaki kişileri ayırır. |
| **Sayıları rakamla yaz** | Tutarlar, tarihler ve telefon numaraları yazıyla değil, yazıldıkları gibi döner. |
| **Yükleme sınırı**, **Süre sınırı** | Bu telefonun göndereceği en büyük dosya (bayt) ve en uzun kayıt (saniye). |
| **Aynı anda istek** | Aynı anda kaç isteğin sürebileceği. |
| **Yanıtı şu süre sonra bitir**, **Kısa yanıtları şu süre içinde birleştir**, **Sıra arası** | Suflör için: yeni sözcük gelmeden ne kadar süre geçerse bir yanıtın biteceği, kısa bir yanıtın kendisine eklenmek üzere sonrakini ne kadar bekleyeceği ve tanıyıcının işaretlemediği yerde ne kadar sessizliğin bir konuşma sırasını bitireceği. Milisaniye cinsinden. |
| **Dil** | ISO 639-1'e göre iki harfli dil kodu (`en`, `de`, `es`, `fr`, `sr`…). Boş bırakın, tanıyıcı karar versin — aramalarınız onun sürekli yanlış duyduğu bir dilde değilse doğrusu budur. |
| **Ek ayarlar** | Her satıra bir `name = value`, hizmete olduğu gibi iletilir. Sunucu bir şey belgelemiyorsa boş bırakın. |
| **Bekleme, dakika** | Bir yazıya dökümün ne kadar bekleneceği. Boşsa kaydın uzunluğundan hesaplanır. |
| **Dakika başına fiyat** | Canlı sesin bir dakikasının, hizmetin fiyat listesine göre maliyeti. Suflör bir oturumun neye mal olduğunu gösterir ve [aylık tavanında](prompter.md#spending) durur. |

## Suflör için canlı tanıma {#live-recognition-for-the-prompter}
[Suflörün](../interface/prompter.md), biri konuşurken dinleyen bir tanıyıcıya ihtiyacı vardır — bitmiş bir dosyayla değil, bir akışla. Bu türler bunu yapabilir: bulutta **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI uyumlu** (OpenAI'nin gerçek zamanlı yazıya dökümüyle), **AssemblyAI**, **Soniox** ve **Speechmatics**, kendi makinenizde de **Vosk**, **WhisperLive** ve **NVIDIA Riva**. Kendi makinenizdeki bir tanıyıcı karşı tarafın sesini binanın içinde tutar ve hiçbir ücret almaz.

Birini kullanmak için: kartını açın, **Suflör için adres** alanını kontrol edin — genellikle bir WebSocket adresidir, örneğin X.ai için `wss://api.x.ai`, Deepgram için `wss://api.deepgram.com` veya Vosk için `ws://localhost:2700`; boş bırakılırsa **Yazıya dökümler için adres** alanından çıkarılır. Ardından **Suflör için model** alanından modeli seçin: canlı modeller çoğu zaman dosya modellerinden farklıdır — resimdeki kartta olduğu gibi X.ai için `grok-voice-transcribe-2.0`, ElevenLabs için `scribe_v2_realtime`, OpenAI için `gpt-live-transcribe`, Soniox için `stt-rt-v5`. **Sına** düğmesine basın. Yeni yardımcıların onunla dinlemesi için **Suflör için öntanımlı** kutusunu işaretleyin.

## Hangi modeli seçmeli {#which-model-to-choose}
Tablo, **Tür** listesindeki her türün konuşma tanıma modellerini listeler. **Kalın** yazılan modeller resimde ayarlı olanlardır; X.ai tanıyıcısında model boş olduğundan hizmetin öntanımlısı, **`grok-voice-transcribe-2.0`**, kullanılır. Orada boş olan **Yazıya dökümler için model** alanıdır; **Suflör için model** aynı modele ayarlıdır. **Ne için** sütunu bir modelin ne için yapıldığını söyler: bitmiş kayıtlar için (*yazıya dökümler*), [suflör](#live-recognition-for-the-prompter) için canlı konuşma (*suflör*) ya da *her ikisi*.

| Tür ve adres | Model | Ne için | Ne işe yarar |
| --- | --- | --- | --- |
| **OpenAI uyumlu (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | yazıya dökümler | OpenAI'nin, özgün dilindeki kayıtlı konuşma için önerdiği model. |
| | **`gpt-4o-transcribe`** | her ikisi | Genel amaçlı yazıya döküm. Bu türden yeni bir tanıyıcı bunu alır. |
| | `gpt-4o-mini-transcribe` | her ikisi | Yukarıdakinin daha hafif ve ucuz bir çeşidi. |
| | `gpt-4o-transcribe-diarize` | yazıya dökümler | Kimin ne zaman konuştuğunu işaretler. Yalnızca gerekirse kullanın. |
| | `whisper-1` | yazıya dökümler | Sözcük düzeyinde zaman damgaları ve altyazı gibi özel kullanımlar için tutulan eski Whisper modeli. |
| | `gpt-live-transcribe` | suflör | OpenAI'nin canlı modeli: sözcükler söylendikçe gelir. Telefon bunu suflör için önerir. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | her ikisi | Deepgram'ın toplantılar, gürültülü ve çok dilli ses için en iyi genel amaçlı modeli. Bu türden yeni bir tanıyıcı bunu alır. |
| | **`nova-2`** | her ikisi | Önceki kuşak; `nova-3`'ün henüz desteklemediği diller için tutun. |
| | `nova-2-phonecall` | her ikisi | Telefon hattının dar sesine ayarlanmış `nova-2`. İngilizce. |
| | `flux-general-en` | suflör | Konuşma için yapılmış: birinin sözünü bitirdiğini duyar. İngilizce. |
| | `flux-general-multi` | suflör | Aynısı on dilde; görüşme diller arasında geçiş yapabilir. |
| | `enhanced`, `base` | yazıya dökümler | Daha eski düzeyler; `base` büyük hacimler içindir. |
| | `whisper` | yazıya dökümler | Deepgram'ın çalıştırdığı Whisper. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | yazıya dökümler | 90'dan fazla dilde, konuşmacı ayrımıyla genel amaçlı yazıya döküm. |
| | `scribe_v2_realtime` | suflör | `scribe_v2`'nin canlı sürümü. Telefon bunu suflör için önerir. |
| | `scribe_v2_medical` | yazıya dökümler | Klinik sese ayarlanmış `scribe_v2`. |
| | `scribe_v1` | yazıya dökümler | İlk kuşak; eskidi, `scribe_v2` kullanın. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | her ikisi | Tek dilde süren bir görüşme için en doğrusu. Bu türden yeni bir tanıyıcı bunu alır. |
| | `standard` | her ikisi | Daha hızlı ve ucuz, biraz daha az doğru. |
| | `melia-1` | yazıya dökümler | Cümle ortasında dil değiştiren çok dilli bir görüşme tek bir yazıya döküm olarak döner. Yalnızca kayıtlar için, AB ve ABD bölgelerinde; henüz özel sözlük ve konuşmacı etiketi yok. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | her ikisi | Güncel tek model ve öntanımlı olan: 38 dil, dili kendisi tanır. 500 MB'a kadar dosyalar; canlı konuşma `wss://api.x.ai` adresine gider. |
| | `grok-voice-transcribe-1.0` | yazıya dökümler | Eskidi: hizmet onu `2.0`'a yönlendirir. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | yazıya dökümler | 60'tan fazla dil, konuşmacı ayrımıyla. |
| | `stt-rt-v5` | suflör | Canlı, aynı 60'tan fazla dilde; bir konuşma sırasının nerede bittiğini duyar. Telefon bunu suflör için önerir. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | her ikisi | Kayıtlar için en doğru model; 18 dil, görüşme diller arasında geçiş yapabilir. |
| | `universal-2` | yazıya dökümler | 99 dil, daha ucuz; AssemblyAI, `universal-3-5-pro`'nun bilmediği bir dil için buna geçer. |
| | `universal-3-6-pro` | suflör | AssemblyAI'nin en yeni canlı modeli, 32 dil; model boşsa hizmet bunu kullanır. |
| | `universal-streaming-multilingual` | suflör | İngilizce, İspanyolca, Almanca, Fransızca, Portekizce ve İtalyanca için daha ucuz canlı tanıma. |
| | `universal-streaming-english` | suflör | Yalnızca İngilizce, daha ucuz canlı tanıma. |
| **Vosk (kendi makinenizde)**<br />`ws://localhost:2700` | *(sunucuda ayarlanır)* | her ikisi | Ücretsiz ve hafif; ekran kartı olmadan çalışır. Model, sunucunun başlatıldığı modeldir, her dil için bir tane; örneğin `vosk-model-small-tr-0.3` ya da `vosk-model-en-us-0.22`. |
| **WhisperLive (kendi makinenizde)**<br />`ws://localhost:9090` | `small` | her ikisi | Canlı akış üzerinden Whisper. Boyut kartta seçilir: `tiny`, `base`, `small` (telefonun önerdiği), `medium`, `large-v3`; büyüdükçe daha doğru olur ve ekran kartına daha çok ihtiyaç duyar. |
| **NVIDIA Riva (kendi makinenizde)**<br />`localhost:50051` | *(sunucuda ayarlanır)* | her ikisi | NVIDIA ekran kartlı bir bilgisayar için NVIDIA'nın konuşma sunucusu. Parakeet ve Canary gibi modeller sunar. |

Seçmeden önce bilmeye değer:

- **Yazıya dökümler mi, suflör mü.** Canlı konuşma için yapılmış bir model bitmiş bir dosya kabul etmez; dosyalar için olan modellerin çoğu da canlı dinleyemez. Bu yüzden kartta iki alan vardır: **Yazıya dökümler için model** ve **Suflör için model**.
- **Dosya boyutu.** OpenAI 25 MB'a, X.ai 500 MB'a kadar dosya kabul eder. Uzun bir görüşme bir bulut hizmetinin kabul ettiğinden büyük olabilir.
- **Fiyat.** Bulut hizmetleri ses dakikası başına ücret alır; ücretler modele göre değişir ve güncellenir, geçmeden önce hizmetin kendi sayfasında okuyun. Kendi makinenizdeki bir tanıyıcının çalışması hiçbir şeye mal olmaz.
- **Diller.** Her hizmetin kendi listesi vardır; sizinkini denetleyin, tanıyıcı yanlış tahmin ediyorsa gelişmiş ayarlarındaki **Dil** alanına kodu girin.

Bir hizmetin model listesi sık değişir. İstediğiniz model burada yoksa güncel liste hizmetin kendi belgelerindedir — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — ve **Model**, hizmetin verdiği adın tam kendisidir.

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
