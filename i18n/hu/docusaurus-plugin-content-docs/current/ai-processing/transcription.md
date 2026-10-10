---
title: Átirat
sidebar_position: 1
description: "A felismerő kiválasztása, amely a hangot szöveggé alakítja: a címe, a modellje és egy táblázat minden fajta szolgáltatás modelljeiről."
---

A **Beállítások → Átirat** a felismerőket sorolja fel: azokat a szolgáltatásokat, amelyek a hangot szöveggé alakítják, a befejezett beszélgetésekhez, és — a [súgó](../interface/prompter.md) számára — beszélgetés közben is.

<Shot name="25_transcription" alt="Beállítások → Átirat: öt felismerő" />

Egy beszélgetés akkor kerül átiratba, amikor kéri a [Felvételek ablakban](/interface/recordings), vagy magától, ha a [Feldolgozás](/ai-processing/processing) részben be van kapcsolva **A beszélgetések automatikus feldolgozása**. A saját gépén futó felismerő semmibe sem kerül; a felhőben futó a hang perceiért számláz.

## Felismerők {#recognisers}
A felismerő olyan beszédfelismerő szolgáltatás, amelynek a telefon a hangot küldi. A **Hozzáadás** újat ad hozzá; a kártyáján lévő **Próba** gomb ellenőrzi, hogy a szolgáltatás tényleg válaszol-e. Mindegyik a nevével szerepel a listában, alatta a szolgáltatása modelljével és címével. A képen öt van:

| Név | Modell | Cím |
| --- | --- | --- |
| **X.ai** | *(üres: a szolgáltatás alapértelmezése)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(nincs)* | `ws://localhost:2700`, szerver ezen a számítógépen |

A sor jobb szélén lévő két jel azt mutatja, mire alapértelmezett a felismerő. Az óra az alapértelmezettnél világít **az átiratokhoz** — a képen **X.ai** —, ezt használja a telefon, ha nem választ mást. A villám az alapértelmezettnél világít **a súgóhoz** — a képen **Vosk**. Több felismerőt is tarthat; az átirat feletti legördülő lista a [Felvételek ablakban](/interface/recordings#transcript-or-write-up-the-drop-down) az egyes felismerők által készített átiratokat mutatja.

## A felismerő kártyája {#the-recognisers-card}
Egy felismerőre kattintva megnyílik a kártyája.

<Shot name="43_recogniser_card" alt="Az X.ai felismerő kártyája: fajta, a két cím, kulcs, Próba és az alapértelmezések" />

| Mező | Mi ez |
| --- | --- |
| **Név** | A név a listákban. |
| **Fajta** | A szolgáltatás fajtája, amely eldönti, hogyan beszél vele a telefon: **OpenAI-kompatibilis (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics**, valamint három, amely a saját gépén fut — **Vosk**, **WhisperLive** és **NVIDIA Riva**. A **Yandex SpeechKit** akkor jelenik meg, ha a [Névjegy](../application/about.md) részben választott ország Oroszország vagy valamelyik szomszédja. |
| **Cím az átiratokhoz** | Ahová a befejezett beszélgetések mennek. |
| **Cím a súgóhoz** | Ahová az élő hang megy beszélgetés közben. *Üresen a melletti címből adódik*, mint a képen a `wss://api.x.ai`. |
| **Kulcs** | A szolgáltatás kulcsa. *Ennek a gépnek a kulcstartójában van, soha nem beállításfájlban.* |
| **Próba** | Megkérdezi a szolgáltatást, és elmondja, mit válaszolt, például *Válaszolt, és 3 modellt kínál*. |
| **Modell az átiratokhoz** és **Modell a súgóhoz** | A modell pontosan úgy, ahogy a szolgáltatás nevezi. *Üresen nem küld modellnevet*, és a szolgáltatás a saját alapértelmezését használja; ha a szállító közzétesz ilyet, a kártya megnevezi. Olyan fajtánál, ahol nincs választás, a mező nem látszik. |
| **Alapértelmezett az átiratokhoz** | Ezt teszi azzá a felismerővé, amelyet akkor használ a telefon, ha nem választ mást. |
| **Alapértelmezett a súgóhoz** | Ezt teszi azzá a felismerővé, amellyel a súgó új segítője hallgat. |
| **Bekapcsolva** | Kikapcsolva a felismerő a listában marad, de nem használja a telefon. |

A **Speciális beállítások** megnyitja a kártya többi részét. A legfontosabb értékek:

<Shot name="43b_recogniser_advanced" alt="Egy felismerő speciális beállításai: korlátok, a válaszok darabolása, a nyelv" />

| Mező | Mit csinál |
| --- | --- |
| **Régió** | A szolgáltatás régiója, ha több van. |
| **A két oldal külön küldése** | A hívás úgy készül, hogy a két ember két csatornán van, és a felismerő éppen ebből tudja, ki mit mondott. Kapcsolja ki olyan szervernél, amely állítja, hogy tudja ezt, de nem tudja. |
| **Kérdezze meg, ki beszél** | Megkülönbözteti az embereket egy csatornán belül, ha többen beszélnek rajta. |
| **Számok számjegyekkel** | Összegek, dátumok és telefonszámok úgy jönnek vissza, ahogy leírják őket, nem betűvel kiírva. |
| **Feltöltési korlát**, **Hosszkorlát** | A legnagyobb fájl bájtban és a leghosszabb felvétel másodpercben, amelyet ez a telefon elküld. |
| **Egyidejű kérések** | Hány kérés lehet folyamatban egyszerre. |
| **Válasz lezárása ennyi után**, **Rövid válaszok összevonása ezen belül**, **Szünet a megszólalások között** | A súgóhoz: mennyi idő új szavak nélkül zár le egy választ, mennyit vár egy rövid válasz a következőre, hogy összevonják vele, és mennyi csend zár le egy megszólalást, ahol a felismerő nem jelöl ilyet. Ezredmásodpercben. |
| **Nyelv** | Kétbetűs nyelvkód az ISO 639-1 szerint (`en`, `de`, `es`, `fr`, `sr`…). Hagyja üresen, és a felismerő dönt — ez a helyes, hacsak a hívásai nem olyan nyelven folynak, amelyet újra és újra félrehall. |
| **Kiegészítők** | Soronként egy `name = value`, változatlanul továbbítva a szolgáltatásnak. Hagyja üresen, hacsak a szerver nem dokumentál valamit. |
| **Várakozás, perc** | Mennyi ideig várjon egy átiratra. Üresen a felvétel hosszából számolja. |
| **Ár percenként** | Mennyibe kerül egy perc élő hang a szolgáltatás árlistája szerint. A súgó mutatja, mennyibe került egy munkamenet, és megáll a [havi plafonjánál](prompter.md#spending). |

## Élő felismerés a súgóhoz {#live-recognition-for-the-prompter}
A [súgónak](../interface/prompter.md) olyan felismerő kell, amely hallgat, miközben valaki beszél — folyamként, nem kész fájllal. Ezek a fajták képesek erre: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-kompatibilis** (az OpenAI valós idejű átiratával), **AssemblyAI**, **Soniox** és **Speechmatics** a felhőben, **Yandex SpeechKit** ott, ahol elérhető, valamint **Vosk**, **WhisperLive** és **NVIDIA Riva** a saját gépén. A saját gépén futó felismerő a házon belül tartja a másik fél hangját, és semmibe sem kerül.

Így használja: nyissa meg a kártyáját, ellenőrizze a **Cím a súgóhoz** mezőt (vagy hagyja, hogy adódjon), válassza ki a **Modell a súgóhoz** mezőt, ha a szolgáltatás többet kínál — az élő modellek gyakran mások, mint a fájlokhoz valók, például az ElevenLabs `scribe_v2_realtime` modellje —, és nyomja meg a **Próba** gombot. Jelölje be az **Alapértelmezett a súgóhoz** mezőt, hogy az új segítők ezzel hallgassanak.

## Melyik modellt válassza {#which-model-to-choose}
A táblázat a **Fajta** lista minden fajtájának beszédfelismerő modelljeit sorolja fel. A **félkövér** modellek vannak beállítva a képen; az X.ai felismerőnél a modell üres, ezért a szolgáltatás alapértelmezését, a **`grok-voice-transcribe-2.0`** modellt használja. A **Mire** oszlop megmondja, mire készült egy modell: kész felvételekhez (*átiratok*), élő beszédhez a [súgó](#live-recognition-for-the-prompter) számára (*súgó*), vagy *mindkettőre*.

| Fajta és cím | Modell | Mire | Mire jó |
| --- | --- | --- | --- |
| **OpenAI-kompatibilis (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | átiratok | Az a modell, amelyet az OpenAI felvett beszédhez ajánl az eredeti nyelvén. |
| | **`gpt-4o-transcribe`** | mindkettő | Általános célú átirat. Az ilyen fajtájú új felismerő ezt kapja. |
| | `gpt-4o-mini-transcribe` | mindkettő | Az előző könnyebb, olcsóbb változata. |
| | `gpt-4o-transcribe-diarize` | átiratok | Jelöli, ki mikor beszél. Csak akkor használja, ha erre szüksége van. |
| | `whisper-1` | átiratok | A régebbi Whisper-modell, különleges célokra megtartva, mint a szavankénti időbélyegek és a feliratok. |
| | `gpt-live-transcribe` | súgó | Az OpenAI élő modellje: a szavak elhangzásuk közben érkeznek. A telefon ezt kínálja a súgóhoz. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | mindkettő | A Deepgram legjobb általános célú modellje értekezletekhez, zajos és többnyelvű hanghoz. Az ilyen fajtájú új felismerő ezt kapja. |
| | **`nova-2`** | mindkettő | Az előző generáció; tartsa meg azokhoz a nyelvekhez, amelyeket a `nova-3` még nem támogat. |
| | `nova-2-phonecall` | mindkettő | A `nova-2` a telefonvonal keskeny hangjára hangolva. Angol. |
| | `flux-general-en` | súgó | Beszélgetéshez készült: hallja, amikor valaki befejezte a mondandóját. Angol. |
| | `flux-general-multi` | súgó | Ugyanez tíz nyelven, és a beszélgetés válthat közöttük. |
| | `enhanced`, `base` | átiratok | Régebbi szintek; a `base` nagy mennyiségekhez való. |
| | `whisper` | átiratok | Whisper a Deepgram futtatásában. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | átiratok | Általános célú átirat több mint 90 nyelven, a beszélők szétválasztásával. |
| | `scribe_v2_realtime` | súgó | A `scribe_v2` élő változata. A telefon ezt kínálja a súgóhoz. |
| | `scribe_v2_medical` | átiratok | A `scribe_v2` klinikai hangra hangolva. |
| | `scribe_v1` | átiratok | Az első generáció; elavult, használja a `scribe_v2` modellt. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | mindkettő | A legpontosabb, egy nyelven folyó beszélgetéshez. Az ilyen fajtájú új felismerő ezt kapja. |
| | `standard` | mindkettő | Gyorsabb és olcsóbb, kicsit kevésbé pontos. |
| | `melia-1` | átiratok | Több nyelven folyó, mondat közben nyelvet váltó beszélgetés egyetlen átiratként jön vissza. Csak felvételekhez, az EU és az USA régióban; saját szótár és beszélőjelölés egyelőre nincs. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | mindkettő | Az alapértelmezett; 25 nyelv. |
| | `grok-voice-transcribe-1.0` | átiratok | Elavult: a szolgáltatás a `2.0` modellre irányítja. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | átiratok | Több mint 60 nyelv, a beszélők szétválasztásával. |
| | `stt-rt-v5` | súgó | Élőben, ugyanazon a több mint 60 nyelven, és hallja, hol ér véget egy megszólalás. A telefon ezt kínálja a súgóhoz. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | mindkettő | A legpontosabb modell felvételekhez; 18 nyelv, és a beszélgetés válthat közöttük. |
| | `universal-2` | átiratok | 99 nyelv, olcsóbb; az AssemblyAI erre vált olyan nyelvnél, amelyet a `universal-3-5-pro` nem ismer. |
| | `universal-3-6-pro` | súgó | Az AssemblyAI legújabb élő modellje, 32 nyelv; a szolgáltatás ezt használja, ha a modell üres. |
| | `universal-streaming-multilingual` | súgó | Olcsóbb élő felismerés angolul, spanyolul, németül, franciául, portugálul és olaszul. |
| | `universal-streaming-english` | súgó | Olcsóbb élő felismerés, csak angolul. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | mindkettő | A fő modell, erős orosz nyelven, telefonon is. Akkor érhető el, ha az ország Oroszország vagy valamelyik szomszédja. |
| | `general:rc` | mindkettő | A modell következő változata a kiadás előtt. |
| | `deferred-general` | átiratok | Halasztott felismerés: az átirat később érkezik, kevesebb pénzért. |
| **Vosk (a saját gépén)**<br />`ws://localhost:2700` | *(a szerveren állítható be)* | mindkettő | Ingyenes és könnyű; videokártya nélkül is fut. A modell az, amellyel a szervert elindították, nyelvenként egy, például `vosk-model-en-us-0.22` vagy a kicsi `vosk-model-small-en-us-0.15`. |
| **WhisperLive (a saját gépén)**<br />`ws://localhost:9090` | `small` | mindkettő | Whisper élő folyamon. A méretet a kártyán választja: `tiny`, `base`, `small` (ezt kínálja a telefon), `medium`, `large-v3`; minél nagyobb, annál pontosabb, és annál inkább kell hozzá videokártya. |
| **NVIDIA Riva (a saját gépén)**<br />`localhost:50051` | *(a szerveren állítható be)* | mindkettő | Az NVIDIA beszédszervere NVIDIA videokártyás számítógéphez. Olyan modelleket szolgál ki, mint a Parakeet és a Canary. |

Amit érdemes tudni a választás előtt:

- **Átiratok vagy súgó.** Az élő beszédhez készült modell nem fogad kész fájlt, és a fájlokhoz való modellek többsége nem tud élőben hallgatni. Ezért van a kártyán két mező: **Modell az átiratokhoz** és **Modell a súgóhoz**.
- **Fájlméret.** Az OpenAI legfeljebb 25 MB-os fájlokat fogad, az X.ai legfeljebb 500 MB-osakat. Egy hosszú beszélgetés nagyobb lehet annál, amit egy felhőszolgáltatás elfogad.
- **Ár.** A felhőszolgáltatások a hang perceiért számláznak, a díjak modellenként eltérnek és változnak; váltás előtt nézze meg őket a szolgáltatás saját oldalán. A saját gépén futó felismerő semmibe sem kerül.
- **Nyelvek.** Minden szolgáltatásnak saját listája van; ellenőrizze a magáét, és adja meg a kódot a **Nyelv** mezőben a felismerő speciális beállításai között, ha rosszul találgat.

Egy szolgáltatás modelllistája gyakran változik. Ha egy kívánt modell hiányzik innen, az aktuális lista a szolgáltatás saját dokumentációjában van — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) —, a **Modell** pedig a név pontosan úgy, ahogy a szolgáltatás megadja.

## Saját modellek {#your-own-models}

A felismerőnek nem kell felhőszolgáltatásnak lennie. A telefon **bármilyen modellt használhat, amelyet OpenAI-kompatibilis API-n keresztül szolgálnak ki** — a `POST /v1/audio/transcriptions` felületen —, akár helyben, az Ön számítógépén fut, akár egy saját kiszolgálón. A hang soha nem hagyja el az Ön telephelyét, percalapú díj nincs, és a mennyiségnek sincs korlátja.

Hozzáadásához nyomja meg a **Hozzáadás** gombot, és adja meg:

- a kiszolgáló **címét** a `/v1` részig bezárólag, például `http://localhost:8000/v1` magán a számítógépen, vagy `http://asr.local:8080/v1` a hálózatában lévő kiszolgálón;
- a **modell** nevét pontosan úgy, ahogyan a kiszolgáló felsorolja, például `openai/whisper-large-v3-turbo`.

### Mi használható {#what-can-be-used}

A szokásos választás a **Whisper**, az OpenAI nyílt beszédfelismerő modellje. Ingyenesen használható, körülbelül száz nyelvet ért, és több méretben érhető el: egy kis modell egy átlagos számítógépen is fut, a nagyok érezhetően pontosabbak, és legjobb grafikus kártyával futtatni őket.

| Modell | Megjegyzés |
| --- | --- |
| `whisper-large-v3` | A legpontosabb Whisper. GPU-val felszerelt kiszolgálóra. |
| `openai/whisper-large-v3-turbo` | A `large-v3` gyorsabb változata, kis pontosságvesztéssel. |
| `Systran/faster-whisper-large-v3` | A `large-v3` a faster-whisper motorhoz átalakítva; gyorsabb, és kevesebb memóriát igényel. |
| `medium`, `small`, `base` | Kisebb Whisper modellek grafikus kártya nélküli számítógéphez. |

Ezek a kiszolgálók a Whisper köré épültek. Némelyikük más beszédfelismerő modelleket is ki tud szolgálni, például az NVIDIA Parakeetet.

### OpenAI-kompatibilis API-t kínáló kiszolgálók {#servers-that-offer-the-openai-compatible-api}

A modellt olyan kiszolgálónak kell futtatnia, amely OpenAI-kompatibilis `/v1/audio/transcriptions` végpontot kínál. Ezek ilyenek:

| Kiszolgáló | Mi ez |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Nagy teljesítményű modellkiszolgáló. Elindítás után a Whispert a `http://localhost:8000/v1` címen szolgálja ki. |
| [Speaches](https://github.com/speaches-ai/speaches) | Beszédmodellekhez készült kiszolgáló, „Ollama a beszédhez”, a faster-whisperre építve. Egy modellt akkor tölt be, amikor először kérik. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Hatékonyan futtatja a Whispert CPU-n, az Apple siliconon is. A `whisper-server` a `--inference-path /v1/audio/transcriptions` kapcsolóval indítandó. |
| [LocalAI](https://localai.io/) | Az OpenAI közvetlen helyettesítője, amely helyben futtatja a modelleket. |

Bármely más kiszolgáló, amely ugyanezt a végpontot kínálja, ugyanígy működik. Ha egy kiszolgáló kulcsot kér, adja meg ugyanúgy, mint egy felhőszolgáltatásnál.

Mielőtt egy kiszolgálóra hagyatkozna, készítsen próbafelvételt, és nézze meg a leiratot a [Felvételek ablakban](/interface/recordings): egy olyan nyelvű beszélgetés, amelyet a modell gyengén ismer, ezt azonnal megmutatja.
