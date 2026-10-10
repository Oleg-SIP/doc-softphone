---
title: Prepis
sidebar_position: 1
description: "Výber rozpoznávača, ktorý mení zvuk na text: jeho adresa, jeho model a tabuľka modelov všetkých druhov služieb."
---

**Nastavenia → Prepis** uvádza rozpoznávače: služby, ktoré menia zvuk na text, pre skončené hovory a pre [našepkávača](../interface/prompter.md) aj počas hovoru.

<Shot name="25_transcription" alt="Nastavenia → Prepis: päť rozpoznávačov" />

Hovor sa prepíše, keď o to požiadate v [okne nahrávok](/interface/recordings), alebo sám, ak je v časti [Spracovanie](/ai-processing/processing) zapnuté **Spracovávať hovory automaticky**. Rozpoznávač na vašom vlastnom stroji nestojí nič; ten v cloude si účtuje za minútu zvuku.

## Rozpoznávače {#recognisers}
Rozpoznávač je služba na rozpoznávanie reči, ktorej telefón posiela zvuk. **Pridať** pridá nový; tlačidlo **Vyskúšať** na jeho karte overí, že služba naozaj odpovedá. Každý je v zozname so svojím názvom a pod ním s modelom a adresou svojej služby. Na obrázku je ich päť:

| Názov | Model | Adresa |
| --- | --- | --- |
| **X.ai** | *(prázdne: predvolený model služby)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(žiadny)* | `ws://localhost:2700`, server na tomto počítači |

Dve značky vpravo v riadku hovoria, na čo je rozpoznávač predvolený. Hodiny svietia pri predvolenom **pre prepisy** — na obrázku **X.ai** —, ktorý sa použije, keď nezvolíte iný. Blesk svieti pri predvolenom **pre našepkávača** — na obrázku **Vosk**. Rozpoznávačov môžete mať niekoľko; rozbaľovací zoznam nad prepisom v [okne nahrávok](/interface/recordings#transcript-or-write-up-the-drop-down) ukazuje prepisy, ktoré urobil každý z nich.

## Karta rozpoznávača {#the-recognisers-card}
Kliknutie na rozpoznávač otvorí jeho kartu.

<Shot name="43_recogniser_card" alt="Karta rozpoznávača X.ai: druh, obe adresy, kľúč, Vyskúšať a predvolené voľby" />

| Pole | Čo to je |
| --- | --- |
| **Názov** | Názov v zoznamoch. |
| **Druh** | Druh služby, podľa ktorého telefón vie, ako s ňou hovoriť: **Kompatibilný s OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** a tri, ktoré bežia na vašom vlastnom stroji — **Vosk**, **WhisperLive** a **NVIDIA Riva**. **Yandex SpeechKit** sa ponúka, keď je v časti [O programe](../application/about.md) zvolená krajina Rusko alebo niektorý z jeho susedov. |
| **Adresa pre prepisy** | Kam sa posielajú skončené hovory. |
| **Adresa pre našepkávača** | Kam ide živý zvuk počas hovoru. *Prázdne sa odvodí z adresy vedľa*, ako `wss://api.x.ai` na obrázku. |
| **Kľúč** | Kľúč služby. *Leží v kľúčenke tohto počítača, nikdy v súbore nastavení.* |
| **Vyskúšať** | Opýta sa služby a povie, čo odpovedala, napríklad *Odpovedal a ponúka 3 modely*. |
| **Model pre prepisy** a **Model pre našepkávača** | Model presne tak, ako ho služba nazýva. *Prázdne neposiela žiadne meno modelu*, a služba použije svoj predvolený; kde ho dodávateľ zverejňuje, karta ho uvádza. Pri druhu bez výberu sa pole nezobrazuje. |
| **Predvolený pre prepisy** | Urobí z tohto rozpoznávač, ktorý sa použije, keď nezvolíte iný. |
| **Predvolený pre našepkávača** | Urobí z tohto rozpoznávač, ktorým počúva nový pomocník našepkávača. |
| **Zapnuté** | Vypnutý rozpoznávač zostáva v zozname, ale nepoužíva sa. |

**Pokročilé nastavenia** otvoria zvyšok karty. Hodnoty, na ktorých záleží najviac:

<Shot name="43b_recogniser_advanced" alt="Pokročilé nastavenia rozpoznávača: hranice, ako sa delia repliky, jazyk" />

| Pole | Čo robí |
| --- | --- |
| **Región** | Región služby, ak ich má niekoľko. |
| **Posielať obe strany osobitne** | Hovor sa nahráva s dvoma ľuďmi na dvoch kanáloch, a práve podľa toho rozpoznávač spozná, kto čo povedal. Vypnite to pri serveri, ktorý tvrdí, že to vie, a nevie. |
| **Pýtať sa, kto hovorí** | Rozlíši ľudí vnútri jedného kanála, keď na ňom hovorí viac osôb. |
| **Písať čísla číslicami** | Sumy, dátumy a telefónne čísla sa vracajú tak, ako sa píšu, nie vypísané slovami. |
| **Hranica odosielania**, **Hranica dĺžky** | Najväčší súbor v bajtoch a najdlhšia nahrávka v sekundách, ktoré tento telefón odošle. |
| **Požiadaviek naraz** | Koľko požiadaviek smie bežať súčasne. |
| **Ukončiť repliku po**, **Spájať krátke repliky do**, **Pauza medzi replikami** | Pre našepkávača: ako dlho bez nových slov ukončí repliku, ako dlho krátka replika čaká na ďalšiu, aby sa s ňou spojila, a aké dlhé ticho ukončí slovo jedného hovoriaceho, kde ho rozpoznávač sám neoznačí. V milisekundách. |
| **Jazyk** | Dvojpísmenový kód jazyka podľa ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Nechajte ho prázdny a rozhodne rozpoznávač — to je správne, pokiaľ vaše hovory nie sú v jazyku, ktorý stále zle počuje. |
| **Doplnky** | Jedno `name = value` na riadok, odovzdané službe bez zmeny. Nechajte prázdne, ak server niečo nedokumentuje. |
| **Čakanie, minúty** | Ako dlho čakať na prepis. Prázdne to vypočíta z dĺžky nahrávky. |
| **Cena za minútu** | Koľko stojí minúta živého zvuku podľa cenníka služby. Našepkávač ukazuje, koľko stálo sedenie, a zastaví sa na svojom [mesačnom strope](prompter.md#spending). |

## Živé rozpoznávanie pre našepkávača {#live-recognition-for-the-prompter}
[Našepkávač](../interface/prompter.md) potrebuje rozpoznávač, ktorý počúva, kým niekto hovorí — prúdom, nie hotovým súborom. Vedia to tieto druhy: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Kompatibilný s OpenAI** (s prepisom OpenAI v reálnom čase), **AssemblyAI**, **Soniox** a **Speechmatics** v cloude, **Yandex SpeechKit** tam, kde sa ponúka, a **Vosk**, **WhisperLive** a **NVIDIA Riva** na vašom vlastnom stroji. Rozpoznávač na vašom vlastnom stroji drží hlas druhej strany v dome a nič nestojí.

Ako ho použiť: otvorte jeho kartu, skontrolujte **Adresa pre našepkávača** (alebo ju nechajte odvodiť), zvoľte **Model pre našepkávača**, ak služba ponúka niekoľko — živé modely sa často líšia od modelov pre súbory, napríklad `scribe_v2_realtime` pri ElevenLabs — a stlačte **Vyskúšať**. Zaškrtnite **Predvolený pre našepkávača**, aby noví pomocníci počúvali práve ním.

## Ktorý model vybrať {#which-model-to-choose}
Tabuľka uvádza modely rozpoznávania reči každého druhu zo zoznamu **Druh**. **Tučne** sú modely nastavené na obrázku; pri rozpoznávači X.ai je model prázdny, takže sa použije predvolený model služby, **`grok-voice-transcribe-2.0`**. **Na čo** hovorí, na čo je model určený: na hotové nahrávky (*prepisy*), na živú reč [našepkávača](#live-recognition-for-the-prompter) (*našepkávač*), alebo na *oboje*.

| Druh a adresa | Model | Na čo | Na čo slúži |
| --- | --- | --- | --- |
| **Kompatibilný s OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | prepisy | Model, ktorý OpenAI odporúča pre nahranú reč v jej pôvodnom jazyku. |
| | **`gpt-4o-transcribe`** | oboje | Prepis na všeobecné použitie. Dostane ho nový rozpoznávač tohto druhu. |
| | `gpt-4o-mini-transcribe` | oboje | Ľahšia a lacnejšia varianta predchádzajúceho. |
| | `gpt-4o-transcribe-diarize` | prepisy | Označí, kto kedy hovorí. Použite ho, len ak to potrebujete. |
| | `whisper-1` | prepisy | Starší model Whisper, ponechaný na zvláštne účely, ako sú časové značky slov a titulky. |
| | `gpt-live-transcribe` | našepkávač | Živý model OpenAI: slová prichádzajú, ako sú vyslovené. Telefón ho ponúka pre našepkávača. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | oboje | Najlepší model Deepgramu na všeobecné použitie, pre stretnutia, hlučný a viacjazyčný zvuk. Dostane ho nový rozpoznávač tohto druhu. |
| | **`nova-2`** | oboje | Predchádzajúca generácia; ponechajte ju pre jazyky, ktoré `nova-3` zatiaľ nepodporuje. |
| | `nova-2-phonecall` | oboje | `nova-2` vyladená na úzky zvuk telefónnej linky. Angličtina. |
| | `flux-general-en` | našepkávač | Urobený na rozhovor: počuje, kedy niekto dohovoril. Angličtina. |
| | `flux-general-multi` | našepkávač | To isté v desiatich jazykoch, a rozhovor medzi nimi smie prechádzať. |
| | `enhanced`, `base` | prepisy | Staršie úrovne; `base` je pre veľké objemy. |
| | `whisper` | prepisy | Whisper prevádzkovaný Deepgramom. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | prepisy | Prepis na všeobecné použitie vo viac ako 90 jazykoch, s rozlíšením hovoriacich. |
| | `scribe_v2_realtime` | našepkávač | Živá verzia `scribe_v2`. Telefón ju ponúka pre našepkávača. |
| | `scribe_v2_medical` | prepisy | `scribe_v2` vyladený na klinický zvuk. |
| | `scribe_v1` | prepisy | Prvá generácia; zastaraná, použite `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | oboje | Najpresnejší, pre hovor v jednom jazyku. Dostane ho nový rozpoznávač tohto druhu. |
| | `standard` | oboje | Rýchlejší a lacnejší, o niečo menej presný. |
| | `melia-1` | prepisy | Hovor vo viacerých jazykoch, ktorý mení jazyk uprostred vety, sa vráti ako jeden prepis. Len nahrávky, v regiónoch EÚ a USA; zatiaľ bez vlastného slovníka a označenia hovoriacich. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | oboje | Predvolený; 25 jazykov. |
| | `grok-voice-transcribe-1.0` | prepisy | Zastaraný: služba ho presmeruje na `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | prepisy | Viac ako 60 jazykov, s rozlíšením hovoriacich. |
| | `stt-rt-v5` | našepkávač | Naživo, v tých istých 60+ jazykoch, a počuje, kde končí slovo hovoriaceho. Telefón ho ponúka pre našepkávača. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | oboje | Najpresnejší model pre nahrávky; 18 jazykov, a hovor medzi nimi smie prechádzať. |
| | `universal-2` | prepisy | 99 jazykov, lacnejší; AssemblyAI po ňom siahne pri jazyku, ktorý `universal-3-5-pro` nepozná. |
| | `universal-3-6-pro` | našepkávač | Najnovší živý model AssemblyAI, 32 jazykov; služba ho použije, keď je model prázdny. |
| | `universal-streaming-multilingual` | našepkávač | Lacnejšie živé rozpoznávanie v angličtine, španielčine, nemčine, francúzštine, portugalčine a taliančine. |
| | `universal-streaming-english` | našepkávač | Lacnejšie živé rozpoznávanie, len v angličtine. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | oboje | Hlavný model, silný v ruštine, aj po telefóne. Ponúka sa, keď je krajinou Rusko alebo niektorý z jeho susedov. |
| | `general:rc` | oboje | Ďalšia verzia modelu pred vydaním. |
| | `deferred-general` | prepisy | Odložené rozpoznávanie: prepis príde neskôr, za menej peňazí. |
| **Vosk (na vašom vlastnom stroji)**<br />`ws://localhost:2700` | *(nastavuje sa na serveri)* | oboje | Zadarmo a nenáročný; beží bez grafickej karty. Model je ten, s ktorým bol server spustený, jeden pre každý jazyk, napríklad `vosk-model-en-us-0.22` alebo malý `vosk-model-small-en-us-0.15`. |
| **WhisperLive (na vašom vlastnom stroji)**<br />`ws://localhost:9090` | `small` | oboje | Whisper v živom prúde. Veľkosť sa volí na karte: `tiny`, `base`, `small` (tú ponúka telefón), `medium`, `large-v3`; čím väčší, tým presnejší a tým viac chce grafickú kartu. |
| **NVIDIA Riva (na vašom vlastnom stroji)**<br />`localhost:50051` | *(nastavuje sa na serveri)* | oboje | Rečový server NVIDIA pre počítač s grafickou kartou NVIDIA. Poskytuje modely ako Parakeet a Canary. |

Čo je dobré vedieť pred výberom:

- **Prepisy, alebo našepkávač.** Model pre živú reč neprijme hotový súbor a väčšina modelov pre súbory nevie počúvať naživo. Preto má karta dve polia, **Model pre prepisy** a **Model pre našepkávača**.
- **Veľkosť súboru.** OpenAI prijíma súbory do 25 MB, X.ai do 500 MB. Dlhý hovor môže byť väčší, než cloudová služba prijme.
- **Cena.** Cloudové služby účtujú za minútu zvuku a sadzby sa líšia podľa modelu a menia sa; prečítajte si ich na stránke služby, než prejdete. Rozpoznávač na vašom vlastnom stroji nestojí nič.
- **Jazyky.** Každá služba má svoj zoznam; overte si ten svoj a nastavte kód v poli **Jazyk** v pokročilých nastaveniach rozpoznávača, ak háda zle.

Zoznam modelov služby sa často mení. Ak tu model, ktorý chcete, chýba, aktuálny zoznam je v dokumentácii samotnej služby — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — a **Model** je názov presne tak, ako ho služba uvádza.

## Vlastné modely {#your-own-models}

Rozpoznávač nemusí byť cloudová služba. Telefón môže použiť **akýkoľvek model sprístupnený cez API kompatibilné s OpenAI** — rozhranie `POST /v1/audio/transcriptions` —, či už beží lokálne na vašom počítači, alebo na vlastnom serveri. Zvuk nikdy neopustí vaše priestory, nič sa neúčtuje za minútu a objem nie je obmedzený.

Ak ho chcete pridať, stlačte **Pridať** a zadajte:

- **adresu** servera, až po `/v1` vrátane, napríklad `http://localhost:8000/v1` pre samotný počítač alebo `http://asr.local:8080/v1` pre server vo vašej sieti;
- názov **modelu** presne tak, ako ho server uvádza, napríklad `openai/whisper-large-v3-turbo`.

### Čo sa dá použiť {#what-can-be-used}

Obvyklou voľbou je **Whisper**, otvorený model rozpoznávania reči od OpenAI. Jeho používanie je bezplatné, rozumie asi sto jazykom a existuje v niekoľkých veľkostiach: malý model beží na bežnom počítači, veľké sú citeľne presnejšie a najlepšie je dať im grafickú kartu.

| Model | Poznámky |
| --- | --- |
| `whisper-large-v3` | Najpresnejší Whisper. Pre server s GPU. |
| `openai/whisper-large-v3-turbo` | Rýchlejšia verzia `large-v3` s malou stratou presnosti. |
| `Systran/faster-whisper-large-v3` | `large-v3` prevedený pre engine faster-whisper; rýchlejší a šetrnejší k pamäti. |
| `medium`, `small`, `base` | Menšie modely Whisper, pre počítač bez grafickej karty. |

Whisper je model, okolo ktorého sú tieto servery postavené. Niektoré z nich vedia sprístupniť aj iné modely rozpoznávania reči, napríklad NVIDIA Parakeet.

### Servery, ktoré ponúkajú API kompatibilné s OpenAI {#servers-that-offer-the-openai-compatible-api}

Model musí prevádzkovať server, ktorý ponúka koncový bod `/v1/audio/transcriptions` kompatibilný s OpenAI. Tieto to robia:

| Server | Čo to je |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Výkonný server modelov. Po spustení sprístupní Whisper na `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Server pre rečové modely, „Ollama pre reč“, postavený na faster-whisper. Model načíta, keď je o neho prvýkrát požiadaný. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Efektívne spúšťa Whisper na CPU, vrátane Apple silicon. Jeho `whisper-server` sa spúšťa s `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Priama náhrada OpenAI, ktorá spúšťa modely lokálne. |

Rovnako funguje akýkoľvek iný server, ktorý ponúka ten istý koncový bod. Ak server potrebuje kľúč, zadajte ho ako pri cloudovej službe.

Skôr než sa na server spoľahnete, urobte skúšobnú nahrávku a pozrite si prepis v [okne Nahrávky](/interface/recordings): rozhovor v jazyku, ktorý model pozná slabo, to ukáže okamžite.
