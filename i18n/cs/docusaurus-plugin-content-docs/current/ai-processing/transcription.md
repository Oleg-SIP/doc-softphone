---
title: Přepis
sidebar_position: 1
description: "Vyberte rozpoznávač, který mění zvuk v text: jeho adresu, model a tabulku modelů, které jednotlivé služby nabízejí."
---

**Nastavení → Přepis** určuje, jak se ze zvuku stane text: v jakém jazyce a kterým rozpoznávačem.

<Shot name="25_transcription" alt="Nastavení → Přepis: jazyk a čtyři rozpoznávače" />

Rozhovor se přepíše, když o to požádáte v [okně nahrávek](/interface/recordings), nebo sám, pokud je ve [Zpracování](/ai-processing/processing) zapnuto **Zpracovávat hovory automaticky**. Rozpoznávač na vlastním počítači nestojí nic; ten v cloudu účtuje za minutu zvuku.

## Jazyk {#language}

**Jazyk** je dvoupísmenný kód jazyka podle ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Nechte ho prázdný a rozhodne rozpoznávač — to je správně, pokud vaše hovory nejsou v jazyce, který rozpoznávač opakovaně slyší špatně.

## Rozpoznávače {#recognisers}

Rozpoznávač je služba převodu řeči na text, které telefon posílá zvuk. Nový přidáte tlačítkem **Přidat**; tlačítko **Vyzkoušet** ve formuláři ověří, že služba skutečně odpovídá. Každý je uveden názvem a pod ním modelem a adresou své služby. Na obrázku jsou čtyři:

| Název | Model | Adresa |
| --- | --- | --- |
| **X.ai** | *(prázdné: výchozí model služby)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Ten, který má vpravo v řádku označení **výchozí** (na obrázku **X.ai**), se použije, když nevyberete jiný. Můžete jich mít několik. Rozbalovací seznam nad přepisem v [okně nahrávek](/interface/recordings#the-transcript-and-the-write-up) uvádí přepisy od jednotlivých rozpoznávačů.

Model může zůstat prázdný. Služba pak použije svůj výchozí.

## Jaký model vybrat {#which-model-to-choose}

Tabulka uvádí modely převodu řeči na text čtyř služeb z obrázku. Modely **tučně** jsou ty, které jsou na obrázku nastaveny. U rozpoznávače X.ai je model prázdný, takže se použije výchozí model služby, **`grok-voice-transcribe-2.0`**.

| Služba a adresa | Model | K čemu je |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Model, který OpenAI doporučuje pro nahranou řeč v původním jazyce. |
| | **`gpt-4o-transcribe`** | Univerzální přepis. |
| | `gpt-4o-mini-transcribe` | Lehčí a levnější varianta předchozího. |
| | `gpt-4o-transcribe-diarize` | Označuje, kdo kdy mluví. Používejte, jen pokud to potřebujete. |
| | `whisper-1` | Starší model Whisper, ponechaný pro zvláštní účely, jako jsou časové značky slov a titulky. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Univerzální přepis ve více než 90 jazycích s rozlišením mluvčích. |
| | `scribe_v2_medical` | Totéž, vyladěné pro klinický zvuk. |
| | `scribe_v1` | První generace; zastaralá, použijte `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Nejlepší univerzální model Deepgramu pro schůzky, hlučný a vícejazyčný zvuk. |
| | **`nova-2`** | Předchozí generace; ponechte ji pro jazyky, které `nova-3` zatím nepodporuje. |
| | `enhanced` | Starší úroveň s nižší chybovostí než `base`. |
| | `base` | Nejstarší úroveň, pro velké objemy. |
| | `whisper` | Whisper provozovaný Deepgramem. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Výchozí; 25 jazyků. |
| | `grok-voice-transcribe-1.0` | Zastaralý: služba ho přesměruje na `2.0`. |

Co je dobré vědět před výběrem:

- **Velikost souboru.** OpenAI přijímá soubory do 25 MB, X.ai do 500 MB. Dlouhý rozhovor může být větší, než cloudová služba přijme.
- **Cena.** Cloudové služby účtují za minutu zvuku a sazby se liší podle modelu a mění se; před změnou si je přečtěte na stránce služby.
- **Jazyky.** Každá služba má vlastní seznam; ověřte si ten svůj a nastavte kód [Jazyka](#language), pokud rozpoznávač hádá špatně.
- **Modely v reálném čase**, jako `scribe_v2_realtime` nebo `flux` od Deepgramu, jsou určeny pro živé přenosy a v tabulce nejsou: telefon přepisuje hotové nahrávky.

Seznam modelů služby se často mění. Pokud zde model, který chcete, chybí, aktuální seznam je v dokumentaci služby — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — **Model** je název přesně tak, jak ho služba uvádí.

## Vlastní modely {#your-own-models}

Rozpoznávač nemusí být cloudová služba. Telefon může použít **jakýkoli model zpřístupněný přes API kompatibilní s OpenAI** — rozhraní `POST /v1/audio/transcriptions` — ať běží lokálně na vašem počítači, nebo na vlastním serveru. Zvuk nikdy neopustí vaše prostory, nic se neúčtuje za minutu a objem není omezen.

Při přidání stiskněte **Přidat** a zadejte:

- **adresu** serveru včetně `/v1`, například `http://localhost:8000/v1` pro tento počítač nebo `http://asr.local:8080/v1` pro server ve vaší síti;
- název **modelu** přesně tak, jak ho server uvádí, například `openai/whisper-large-v3-turbo`.

### Co lze použít {#what-can-be-used}

Obvyklou volbou je **Whisper**, otevřený model rozpoznávání řeči od OpenAI. Používá se zdarma, rozumí asi stovce jazyků a má několik velikostí: malý model běží na běžném počítači, velké jsou znatelně přesnější a nejlépe jim je dát grafickou kartu.

| Model | Poznámky |
| --- | --- |
| `whisper-large-v3` | Nejpřesnější Whisper. Pro server s GPU. |
| `openai/whisper-large-v3-turbo` | Rychlejší verze `large-v3` s malou ztrátou přesnosti. |
| `Systran/faster-whisper-large-v3` | `large-v3` převedený pro engine faster-whisper; rychlejší a šetrnější k paměti. |
| `medium`, `small`, `base` | Menší modely Whisper pro počítač bez grafické karty. |

Kolem Whisperu jsou tyto servery postavené. Některé z nich umí obsluhovat i jiné modely rozpoznávání řeči, například NVIDIA Parakeet.

### Servery s API kompatibilním s OpenAI {#servers-that-offer-the-openai-compatible-api}

Model musí provozovat server, který nabízí koncový bod `/v1/audio/transcriptions` kompatibilní s OpenAI. Tyto ho nabízejí:

| Server | Co to je |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Výkonný server modelů. Po spuštění obsluhuje Whisper na `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Server pro řečové modely, „Ollama pro řeč“, postavený na faster-whisper. Model načte, když je o něj poprvé požádán. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Efektivně provozuje Whisper na CPU, včetně Apple silicon. Jeho `whisper-server` se spouští s `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Náhrada OpenAI, která provozuje modely lokálně. |

Stejně funguje každý jiný server, který nabízí stejný koncový bod. Pokud server vyžaduje klíč, zadejte ho jako u cloudové služby.

Než se na server spolehnete, pořiďte zkušební nahrávku a podívejte se na přepis v [okně nahrávek](/interface/recordings): rozhovor v jazyce, který model zná špatně, to prozradí hned.
