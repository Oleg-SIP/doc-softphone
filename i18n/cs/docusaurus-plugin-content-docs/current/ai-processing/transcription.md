---
title: Přepis
sidebar_position: 1
description: "Výběr rozpoznávače, který mění zvuk v text: jeho adresa, jeho model a tabulka modelů všech druhů služeb."
---

**Nastavení → Přepis** uvádí rozpoznávače: služby, které mění zvuk v text, pro skončené hovory a pro [našeptávače](../interface/prompter.md) i během hovoru.

<Shot name="25_transcription" alt="Nastavení → Přepis: pět rozpoznávačů" />

Hovor se přepíše, když o to požádáte v [okně nahrávek](/interface/recordings), nebo sám, pokud je v části [Zpracování](/ai-processing/processing) zapnuto **Zpracovávat hovory automaticky**. Rozpoznávač na vašem vlastním stroji nestojí nic; ten v cloudu si účtuje za minutu zvuku.

## Rozpoznávače {#recognisers}
Rozpoznávač je služba pro rozpoznávání řeči, které telefon posílá zvuk. **Přidat** přidá nový; tlačítko **Vyzkoušet** na jeho kartě ověří, že služba opravdu odpovídá. Každý je v seznamu se svým názvem a pod ním s modelem a adresou své služby. Na obrázku je jich pět:

| Název | Model | Adresa |
| --- | --- | --- |
| **X.ai** | *(prázdné: výchozí model služby)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(žádný)* | `ws://localhost:2700`, server na tomto počítači |

Dvě značky vpravo v řádku říkají, pro co je rozpoznávač výchozí. Hodiny svítí u výchozího **pro přepisy** — na obrázku **X.ai** —, který se použije, když nezvolíte jiný. Blesk svítí u výchozího **pro našeptávače** — na obrázku **Vosk**. Rozpoznávačů můžete mít několik; rozbalovací seznam nad přepisem v [okně nahrávek](/interface/recordings#transcript-or-write-up-the-drop-down) ukazuje přepisy, které udělal každý z nich.

## Karta rozpoznávače {#the-recognisers-card}
Klepnutí na rozpoznávač otevře jeho kartu.

<Shot name="43_recogniser_card" alt="Karta rozpoznávače X.ai: druh, obě adresy, klíč, Vyzkoušet a výchozí volby" />

| Pole | Co to je |
| --- | --- |
| **Název** | Název v seznamech. |
| **Druh** | Druh služby, podle kterého telefon ví, jak s ní mluvit: **Kompatibilní s OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** a tři, které běží na vašem vlastním stroji — **Vosk**, **WhisperLive** a **NVIDIA Riva**. **Yandex SpeechKit** se nabízí, když je v části [O programu](../application/about.md) zvolena země Rusko nebo některý z jeho sousedů. |
| **Adresa pro přepisy** | Kam se posílají skončené hovory. |
| **Adresa pro našeptávače** | Kam jde živý zvuk během hovoru. *Prázdné se odvodí z adresy vedle*, jako `wss://api.x.ai` na obrázku. |
| **Klíč** | Klíč služby. *Leží v klíčence tohoto počítače, nikdy v souboru nastavení.* |
| **Vyzkoušet** | Zeptá se služby a řekne, co odpověděla, například *Odpověděl a nabízí 3 modely*. |
| **Model pro přepisy** a **Model pro našeptávače** | Model přesně tak, jak ho služba nazývá. *Prázdné neposílá žádné jméno modelu*, a služba použije svůj výchozí; kde ho dodavatel zveřejňuje, karta ho uvádí. U druhu bez výběru se pole nezobrazuje. |
| **Výchozí pro přepisy** | Udělá z tohoto rozpoznávač, který se použije, když nezvolíte jiný. |
| **Výchozí pro našeptávače** | Udělá z tohoto rozpoznávač, kterým poslouchá nový pomocník našeptávače. |
| **Zapnuto** | Vypnutý rozpoznávač zůstává v seznamu, ale nepoužívá se. |

**Pokročilé nastavení** otevře zbytek karty. Hodnoty, na kterých záleží nejvíc:

<Shot name="43b_recogniser_advanced" alt="Pokročilé nastavení rozpoznávače: meze, jak se dělí repliky, jazyk" />

| Pole | Co dělá |
| --- | --- |
| **Region** | Region služby, pokud jich má několik. |
| **Posílat obě strany zvlášť** | Hovor se nahrává se dvěma lidmi na dvou kanálech, a právě podle toho rozpoznávač pozná, kdo co řekl. Vypněte to u serveru, který tvrdí, že to umí, a neumí. |
| **Ptát se, kdo mluví** | Rozliší lidi uvnitř jednoho kanálu, když na něm mluví několik osob. |
| **Psát čísla číslicemi** | Částky, data a telefonní čísla se vracejí tak, jak se píšou, ne vypsané slovy. |
| **Mez odesílání**, **Mez délky** | Největší soubor v bajtech a nejdelší nahrávka v sekundách, které tento telefon odešle. |
| **Požadavků najednou** | Kolik požadavků smí běžet současně. |
| **Ukončit repliku po**, **Spojovat krátké repliky do**, **Pauza mezi replikami** | Pro našeptávače: jak dlouho bez nových slov ukončí repliku, jak dlouho krátká replika čeká na další, aby se s ní spojila, a jak dlouhé ticho ukončí slovo jednoho mluvčího, kde ho rozpoznávač sám neoznačí. V milisekundách. |
| **Jazyk** | Dvoupísmenný kód jazyka podle ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Nechte ho prázdný a rozhodne rozpoznávač — to je správně, pokud vaše hovory nejsou v jazyce, který stále špatně slyší. |
| **Doplňky** | Jedno `name = value` na řádek, předané službě beze změny. Nechte prázdné, pokud server něco nedokumentuje. |
| **Čekání, minuty** | Jak dlouho čekat na přepis. Prázdné to spočítá z délky nahrávky. |
| **Cena za minutu** | Kolik stojí minuta živého zvuku podle ceníku služby. Našeptávač ukazuje, kolik sezení stálo, a zastaví se na svém [měsíčním stropu](prompter.md#spending). |

## Živé rozpoznávání pro našeptávače {#live-recognition-for-the-prompter}
[Našeptávač](../interface/prompter.md) potřebuje rozpoznávač, který poslouchá, zatímco někdo mluví — proudem, ne hotovým souborem. Umějí to tyto druhy: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Kompatibilní s OpenAI** (s přepisem OpenAI v reálném čase), **AssemblyAI**, **Soniox** a **Speechmatics** v cloudu, **Yandex SpeechKit** tam, kde se nabízí, a **Vosk**, **WhisperLive** a **NVIDIA Riva** na vašem vlastním stroji. Rozpoznávač na vašem vlastním stroji drží hlas protistrany v domě a nic nestojí.

Jak ho použít: otevřete jeho kartu, zkontrolujte **Adresa pro našeptávače** (nebo ji nechte odvodit), zvolte **Model pro našeptávače**, pokud služba nabízí několik — živé modely se často liší od modelů pro soubory, například `scribe_v2_realtime` u ElevenLabs — a stiskněte **Vyzkoušet**. Zaškrtněte **Výchozí pro našeptávače**, aby noví pomocníci poslouchali právě jím.

## Jaký model vybrat {#which-model-to-choose}
Tabulka uvádí modely rozpoznávání řeči každého druhu ze seznamu **Druh**. **Tučně** jsou modely nastavené na obrázku; u rozpoznávače X.ai je model prázdný, takže se použije výchozí model služby, **`grok-voice-transcribe-2.0`**. **Pro co** říká, k čemu je model určen: pro hotové nahrávky (*přepisy*), pro živou řeč [našeptávače](#live-recognition-for-the-prompter) (*našeptávač*), nebo pro *obojí*.

| Druh a adresa | Model | Pro co | K čemu slouží |
| --- | --- | --- | --- |
| **Kompatibilní s OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | přepisy | Model, který OpenAI doporučuje pro nahranou řeč v jejím původním jazyce. |
| | **`gpt-4o-transcribe`** | obojí | Přepis pro obecné použití. Dostane ho nový rozpoznávač tohoto druhu. |
| | `gpt-4o-mini-transcribe` | obojí | Lehčí a levnější varianta předchozího. |
| | `gpt-4o-transcribe-diarize` | přepisy | Označí, kdo kdy mluví. Použijte ho, jen pokud to potřebujete. |
| | `whisper-1` | přepisy | Starší model Whisper, ponechaný pro zvláštní účely, jako jsou časové značky slov a titulky. |
| | `gpt-live-transcribe` | našeptávač | Živý model OpenAI: slova přicházejí, jak jsou vyslovena. Telefon ho nabízí pro našeptávače. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | obojí | Nejlepší model Deepgramu pro obecné použití, pro schůzky, hlučný a vícejazyčný zvuk. Dostane ho nový rozpoznávač tohoto druhu. |
| | **`nova-2`** | obojí | Předchozí generace; ponechte ji pro jazyky, které `nova-3` zatím nepodporuje. |
| | `nova-2-phonecall` | obojí | `nova-2` vyladěná na úzký zvuk telefonní linky. Angličtina. |
| | `flux-general-en` | našeptávač | Udělaný pro rozhovor: slyší, kdy někdo domluvil. Angličtina. |
| | `flux-general-multi` | našeptávač | Totéž v deseti jazycích, a rozhovor mezi nimi smí přecházet. |
| | `enhanced`, `base` | přepisy | Starší úrovně; `base` je pro velké objemy. |
| | `whisper` | přepisy | Whisper provozovaný Deepgramem. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | přepisy | Přepis pro obecné použití ve více než 90 jazycích, s rozlišením mluvčích. |
| | `scribe_v2_realtime` | našeptávač | Živá verze `scribe_v2`. Telefon ji nabízí pro našeptávače. |
| | `scribe_v2_medical` | přepisy | `scribe_v2` vyladěný na klinický zvuk. |
| | `scribe_v1` | přepisy | První generace; zastaralá, použijte `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | obojí | Nejpřesnější, pro hovor v jednom jazyce. Dostane ho nový rozpoznávač tohoto druhu. |
| | `standard` | obojí | Rychlejší a levnější, o něco méně přesný. |
| | `melia-1` | přepisy | Hovor ve více jazycích, který jazyk mění uprostřed věty, se vrátí jako jeden přepis. Jen nahrávky, v regionech EU a USA; zatím bez vlastního slovníku a označení mluvčích. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | obojí | Výchozí; 25 jazyků. |
| | `grok-voice-transcribe-1.0` | přepisy | Zastaralý: služba ho přesměruje na `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | přepisy | Přes 60 jazyků, s rozlišením mluvčích. |
| | `stt-rt-v5` | našeptávač | Živě, ve stejných 60+ jazycích, a slyší, kde končí slovo mluvčího. Telefon ho nabízí pro našeptávače. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | obojí | Nejpřesnější model pro nahrávky; 18 jazyků, a hovor mezi nimi smí přecházet. |
| | `universal-2` | přepisy | 99 jazyků, levnější; AssemblyAI na něj sáhne u jazyka, který `universal-3-5-pro` nezná. |
| | `universal-3-6-pro` | našeptávač | Nejnovější živý model AssemblyAI, 32 jazyků; služba ho použije, když je model prázdný. |
| | `universal-streaming-multilingual` | našeptávač | Levnější živé rozpoznávání v angličtině, španělštině, němčině, francouzštině, portugalštině a italštině. |
| | `universal-streaming-english` | našeptávač | Levnější živé rozpoznávání, jen v angličtině. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | obojí | Hlavní model, silný v ruštině, i po telefonu. Nabízí se, když je zemí Rusko nebo některý z jeho sousedů. |
| | `general:rc` | obojí | Příští verze modelu před vydáním. |
| | `deferred-general` | přepisy | Odložené rozpoznávání: přepis přijde později, za méně peněz. |
| **Vosk (na vašem vlastním stroji)**<br />`ws://localhost:2700` | *(nastavuje se na serveru)* | obojí | Zdarma a nenáročný; běží bez grafické karty. Model je ten, se kterým byl server spuštěn, jeden pro každý jazyk, například `vosk-model-small-cs-0.4-rhasspy` nebo `vosk-model-en-us-0.22`. |
| **WhisperLive (na vašem vlastním stroji)**<br />`ws://localhost:9090` | `small` | obojí | Whisper v živém proudu. Velikost se volí na kartě: `tiny`, `base`, `small` (tu nabízí telefon), `medium`, `large-v3`; čím větší, tím přesnější a tím víc chce grafickou kartu. |
| **NVIDIA Riva (na vašem vlastním stroji)**<br />`localhost:50051` | *(nastavuje se na serveru)* | obojí | Řečový server NVIDIA pro počítač s grafickou kartou NVIDIA. Poskytuje modely jako Parakeet a Canary. |

Co je dobré vědět před výběrem:

- **Přepisy, nebo našeptávač.** Model pro živou řeč nepřijme hotový soubor a většina modelů pro soubory neumí poslouchat živě. Proto má karta dvě pole, **Model pro přepisy** a **Model pro našeptávače**.
- **Velikost souboru.** OpenAI přijímá soubory do 25 MB, X.ai do 500 MB. Dlouhý hovor může být větší, než cloudová služba přijme.
- **Cena.** Cloudové služby účtují za minutu zvuku a sazby se liší podle modelu a mění se; přečtěte si je na stránce služby, než přejdete. Rozpoznávač na vašem vlastním stroji nestojí nic.
- **Jazyky.** Každá služba má svůj seznam; ověřte si ten svůj a nastavte kód v poli **Jazyk** v pokročilém nastavení rozpoznávače, pokud hádá špatně.

Seznam modelů služby se často mění. Pokud tu model, který chcete, chybí, aktuální seznam je v dokumentaci samotné služby — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — a **Model** je název přesně tak, jak ho služba uvádí.

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
