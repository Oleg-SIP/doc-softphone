---
title: Prepis
sidebar_position: 1
description: "\"Vyberte rozpoznávač, ktorý premieňa zvuk na text: jeho adresu, model a tabuľku modelov, ktoré každá služba ponúka.\""
---

**Nastavenia → Prepis** určuje, ako sa zvuk stane textom: v akom jazyku a ktorým rozpoznávačom.

<Shot name="25_transcription" alt="Nastavenia → Prepis: jazyk a štyri rozpoznávače" />

Rozhovor sa prepíše, keď o to požiadate v [okne Nahrávky](/interface/recordings), alebo sám, ak je v [Spracovaní](/ai-processing/processing) zapnuté **Spracovávať hovory automaticky**. Rozpoznávač na vlastnom počítači nestojí nič; ten v cloude účtuje za minútu zvuku.

## Jazyk {#language}

**Jazyk** je dvojpísmenový kód jazyka podľa ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Nechajte ho prázdny a rozhodne rozpoznávač — to je správne, pokiaľ vaše hovory nie sú v jazyku, ktorý stále zle počuje.

## Rozpoznávače {#recognisers}

Rozpoznávač je služba prevodu reči na text, ktorej telefón posiela zvuk. Stlačením **Pridať** ho pridáte; tlačidlo **Vyskúšať** vo formulári overí, že služba naozaj odpovedá. Každý je uvedený so svojím názvom a pod ním s modelom a adresou svojej služby. Na obrázku sú štyri:

| Názov | Model | Adresa |
| --- | --- | --- |
| **X.ai** | *(prázdne: predvolený model služby)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Ten, ktorý je vpravo vo svojom riadku označený ako **Predvolený** (na obrázku **X.ai**), sa použije, keď nevyberiete iný. Môžete ich mať niekoľko. Rozbaľovací zoznam nad prepisom v [okne Nahrávky](/interface/recordings#the-transcript-and-the-write-up) uvádza prepisy vytvorené každým rozpoznávačom.

Model môže zostať prázdny. Služba potom použije svoj predvolený.

## Ktorý model vybrať {#which-model-to-choose}

Tabuľka uvádza modely prevodu reči na text štyroch služieb z obrázka. Modely **tučným písmom** sú tie, ktoré sú nastavené na obrázku. Pri rozpoznávači X.ai je model prázdny, takže sa použije predvolený model služby, **`grok-voice-transcribe-2.0`**.

| Služba a adresa | Model | Na čo je |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Model, ktorý OpenAI odporúča pre nahranú reč v pôvodnom jazyku. |
| | **`gpt-4o-transcribe`** | Univerzálny prepis. |
| | `gpt-4o-mini-transcribe` | Ľahší, lacnejší variant predchádzajúceho. |
| | `gpt-4o-transcribe-diarize` | Označuje, kto kedy hovorí. Použite ho, iba ak to potrebujete. |
| | `whisper-1` | Starší model Whisper, ponechaný na špeciálne použitie, napríklad časové značky slov a titulky. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Univerzálny prepis vo viac ako 90 jazykoch, s rozlíšením hovoriacich. |
| | `scribe_v2_medical` | To isté, vyladené pre klinický zvuk. |
| | `scribe_v1` | Prvá generácia; zastaraný, použite `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Najlepší univerzálny model Deepgramu, pre stretnutia, hlučný a viacjazyčný zvuk. |
| | **`nova-2`** | Predchádzajúca generácia; ponechajte ju pre jazyky, ktoré `nova-3` zatiaľ nepodporuje. |
| | `enhanced` | Staršia úroveň s nižšou chybovosťou než `base`. |
| | `base` | Najstaršia úroveň, pre veľké objemy. |
| | `whisper` | Whisper prevádzkovaný Deepgramom. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Predvolený; 25 jazykov. |
| | `grok-voice-transcribe-1.0` | Zastaraný: služba ho presmeruje na `2.0`. |

Čo je dobré vedieť pred výberom:

- **Veľkosť súboru.** OpenAI prijíma súbory do 25 MB; X.ai do 500 MB. Dlhý rozhovor môže byť väčší, než cloudová služba prijme.
- **Cena.** Cloudové služby účtujú za minútu zvuku a sadzby sa líšia podľa modelu a menia sa; pred prechodom si ich prečítajte na stránke služby.
- **Jazyky.** Každá služba má vlastný zoznam; skontrolujte ten svoj a nastavte kód v poli [Jazyk](#language), ak rozpoznávač háda nesprávne.
- **Modely v reálnom čase**, napríklad `scribe_v2_realtime` alebo `flux` od Deepgramu, sú určené na živé streamy a v tabuľke nie sú: telefón prepisuje hotové nahrávky.

Zoznam modelov služby sa často mení. Ak tu model, ktorý chcete, chýba, aktuálny zoznam je v dokumentácii samotnej služby — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — **Model** je názov presne tak, ako ho uvádza služba.

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
