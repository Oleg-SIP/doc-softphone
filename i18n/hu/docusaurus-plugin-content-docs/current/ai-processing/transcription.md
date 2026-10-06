---
title: Átirat
sidebar_position: 1
description: "\"A hangot szöveggé alakító felismerő kiválasztása: a címe, a modellje, és egy táblázat az egyes szolgáltatások modelljeiről.\""
---

A **Beállítások → Átirat** határozza meg, hogyan lesz a hangból szöveg: milyen nyelven és melyik felismerővel.

<Shot name="25_transcription" alt="Beállítások → Átirat: a nyelv és négy felismerő" />

Egy beszélgetésről akkor készül leirat, amikor kéri a [Felvételek ablakban](/recordings/recordings-window), vagy magától, ha a [Feldolgozás](/ai-processing/processing) lapon be van kapcsolva **A beszélgetések automatikus feldolgozása**. A saját gépen futó felismerő használata semmibe sem kerül; a felhőben futó a hang perce szerint számol fel díjat.

## Nyelv {#language}

A **Nyelv** egy kétbetűs nyelvkód az ISO 639-1 szerint (`en`, `de`, `es`, `fr`, `sr`…). Ha üresen hagyja, a felismerő dönt — ez így jó, hacsak a hívásai nem olyan nyelven zajlanak, amelyet a felismerő rendre félrehall.

## Felismerők {#recognisers}

A felismerő egy beszéd–szöveg szolgáltatás, amelynek a telefon elküldi a hangot. Új felismerő felvételéhez nyomja meg a **Hozzáadás** gombot; az űrlap **Próba** gombja ellenőrzi, hogy a szolgáltatás valóban válaszol-e. Mindegyik a nevével szerepel, alatta pedig a modell és a szolgáltatás címe. A képen négy van:

| Név | Modell | Cím |
| --- | --- | --- |
| **X.ai** | *(üres: a szolgáltatás alapértelmezése)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

A sora jobb szélén **Alapértelmezett** jelöléssel ellátott felismerő (a képen az **X.ai**) az, amelyet a program akkor használ, ha nem választ másikat. Többet is megtarthat. A [Felvételek ablakban](/recordings/recordings-window#the-transcript-and-the-write-up) a leirat fölötti legördülő lista felsorolja az egyes felismerők által készített leiratokat.

A modell üresen is hagyható. Ilyenkor a szolgáltatás a saját alapértelmezését használja.

## Melyik modellt válassza {#which-model-to-choose}

A táblázat a képen látható négy szolgáltatás beszéd–szöveg modelljeit sorolja fel. A **félkövér** modellek azok, amelyek a képen be vannak állítva. Az X.ai felismerőnél a modell üres, így a szolgáltatás alapértelmezése, a **`grok-voice-transcribe-2.0`** van használatban.

| Szolgáltatás és cím | Modell | Mire való |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Az OpenAI által ajánlott modell rögzített beszédhez, az eredeti nyelven. |
| | **`gpt-4o-transcribe`** | Általános célú leiratozás. |
| | `gpt-4o-mini-transcribe` | Az előző könnyebb, olcsóbb változata. |
| | `gpt-4o-transcribe-diarize` | Megjelöli, ki mikor beszél. Csak akkor használja, ha erre szüksége van. |
| | `whisper-1` | A régebbi Whisper modell, különleges célokra megtartva, például szóidőbélyegekhez és feliratokhoz. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Általános célú leiratozás több mint 90 nyelven, beszélők szétválasztásával. |
| | `scribe_v2_medical` | Ugyanez, klinikai hanganyagra hangolva. |
| | `scribe_v1` | Az első generáció; elavult, használja helyette a `scribe_v2` modellt. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | A Deepgram legjobb általános célú modellje megbeszélésekhez, zajos és többnyelvű hanganyaghoz. |
| | **`nova-2`** | Az előző generáció; azokhoz a nyelvekhez tartsa meg, amelyeket a `nova-3` még nem támogat. |
| | `enhanced` | Régebbi szint, a `base`-nél kisebb hibaaránnyal. |
| | `base` | A legrégebbi szint, nagy mennyiségekhez. |
| | `whisper` | Whisper, a Deepgram futtatásában. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Az alapértelmezett; 25 nyelv. |
| | `grok-voice-transcribe-1.0` | Elavult: a szolgáltatás a `2.0`-ra irányítja. |

Amit érdemes tudni, mielőtt választ:

- **Fájlméret.** Az OpenAI legfeljebb 25 MB-os fájlokat fogad el, az X.ai legfeljebb 500 MB-osakat. Egy hosszú beszélgetés nagyobb lehet annál, amit egy felhőszolgáltatás elfogad.
- **Ár.** A felhőszolgáltatások a hang perce szerint számolnak, a díjak modellenként eltérnek és változnak; váltás előtt nézze meg őket a szolgáltatás saját oldalán.
- **Nyelvek.** Minden szolgáltatásnak saját listája van; ellenőrizze a sajátját, és állítsa be a [Nyelv](#language) kódját, ha a felismerő rosszul találgat.
- **A valós idejű modellek**, például a `scribe_v2_realtime` vagy a Deepgram `flux` modellje, élő adatfolyamokhoz készültek, és nem szerepelnek a táblázatban: a telefon a kész felvételekről készít leiratot.

Egy szolgáltatás modelljeinek listája gyakran változik. Ha egy kívánt modell itt hiányzik, a szolgáltatás saját dokumentációjában megtalálja az aktuális listát — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; a **Modell** mezőbe a nevet pontosan úgy írja be, ahogyan a szolgáltatás megadja.

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

Mielőtt egy kiszolgálóra hagyatkozna, készítsen próbafelvételt, és nézze meg a leiratot a [Felvételek ablakban](/recordings/recordings-window): egy olyan nyelvű beszélgetés, amelyet a modell gyengén ismer, ezt azonnal megmutatja.
