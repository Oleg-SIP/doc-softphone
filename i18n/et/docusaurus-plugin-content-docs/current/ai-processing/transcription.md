---
title: Ülestähendus
sidebar_position: 1
description: "\"Valige tuvastaja, mis muudab heli tekstiks: selle aadress, mudel ja tabel mudelitest, mida iga teenus pakub.\""
---

**Seaded → Ülestähendus** määrab, kuidas helist saab tekst: millises keeles ja millise tuvastajaga.

<Shot name="25_transcription" alt="Seaded → Ülestähendus: keel ja neli tuvastajat" />

Vestlus kirjutatakse üles, kui te seda [salvestiste aknas](/recordings/recordings-window) palute, või iseenesest, kui jaotises [Töötlemine](/ai-processing/processing) on sisse lülitatud **Töötle vestlusi automaatselt**. Teie enda arvutis olev tuvastaja ei maksa midagi; pilves olev võtab tasu heliminutite eest.

## Keel {#language}

**Keel** on ISO 639-1 järgi kahetäheline keelekood (`en`, `de`, `es`, `fr`, `sr`…). Jätke see tühjaks ja tuvastaja otsustab ise — see on õige, välja arvatud juhul, kui teie kõned on keeles, mida see pidevalt valesti kuuleb.

## Tuvastajad {#recognisers}

Tuvastaja on kõnest tekstiks teenus, millele telefon heli saadab. Vajutage **Lisa**, et lisada; vormi nupp **Kontrolli** kontrollib, kas teenus tõesti vastab. Igaüks on loendis oma nimega ja selle all on mudel ning teenuse aadress. Pildil on neid neli:

| Nimi | Mudel | Aadress |
| --- | --- | --- |
| **X.ai** | *(tühi: teenuse vaikeväärtus)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Tuvastaja, mis on oma rea paremas servas tähistatud kui **vaikimisi** (pildil **X.ai**), on see, mida kasutatakse, kui te ei vali teist. Võite hoida mitut. [Salvestiste aknas](/recordings/recordings-window#the-transcript-and-the-write-up) ülestähenduse kohal olev ripploend loetleb iga tuvastaja tehtud ülestähendused.

Mudeli võib jätta tühjaks. Siis kasutab teenus oma vaikeväärtust.

## Millise mudeli valida {#which-model-to-choose}

Tabel loetleb pildil oleva nelja teenuse kõnest tekstiks mudelid. **Paksus kirjas** mudelid on pildil seadistatud. X.ai tuvastaja mudel on tühi, nii et kasutatakse teenuse vaikemudelit **`grok-voice-transcribe-2.0`**.

| Teenus ja aadress | Mudel | Milleks see on |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Mudel, mida OpenAI soovitab salvestatud kõne jaoks selle algkeeles. |
| | **`gpt-4o-transcribe`** | Üldotstarbeline ülestähendus. |
| | `gpt-4o-mini-transcribe` | Eelmise kergem ja odavam variant. |
| | `gpt-4o-transcribe-diarize` | Märgib, kes millal räägib. Kasutage seda ainult siis, kui seda vajate. |
| | `whisper-1` | Vanem Whisperi mudel, mida hoitakse eriotstarbeks, näiteks sõnade ajatemplite ja subtiitrite jaoks. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Üldotstarbeline ülestähendus enam kui 90 keeles, kõnelejate eristamisega. |
| | `scribe_v2_medical` | Sama, kohandatud kliinilisele helile. |
| | `scribe_v1` | Esimene põlvkond; aegunud, kasutage `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Deepgrami parim üldotstarbeline mudel koosolekute, mürarikka ja mitmekeelse heli jaoks. |
| | **`nova-2`** | Eelmine põlvkond; hoidke seda keelte jaoks, mida `nova-3` veel ei toeta. |
| | `enhanced` | Vanem tase, mille veamäär on madalam kui `base` tasemel. |
| | `base` | Vanim tase suurte mahtude jaoks. |
| | `whisper` | Whisper Deepgrami käitatuna. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Vaikimisi; 25 keelt. |
| | `grok-voice-transcribe-1.0` | Aegunud: teenus suunab selle versioonile `2.0`. |

Enne valimist tasub teada:

- **Faili suurus.** OpenAI võtab vastu kuni 25 MB faile, X.ai kuni 500 MB. Pikk vestlus võib olla suurem, kui pilveteenus vastu võtab.
- **Hind.** Pilveteenused võtavad tasu heliminutite eest ja hinnad erinevad mudeliti ning muutuvad; lugege neid enne vahetamist teenuse enda lehelt.
- **Keeled.** Igal teenusel on oma loend; kontrollige enda oma ja määrake [Keel](#language), kui tuvastaja arvab valesti.
- **Reaalajamudelid**, näiteks `scribe_v2_realtime` või Deepgrami `flux`, on mõeldud otseülekannete jaoks ja neid tabelis pole: telefon kirjutab üles valmis salvestisi.

Teenuse mudelite loend muutub sageli. Kui soovitud mudel siit puudub, on teenuse enda dokumentatsioonis ajakohane loend — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; **Mudel** on nimi täpselt sellisel kujul, nagu teenus selle annab.

## Teie enda mudelid {#your-own-models}

Tuvastaja ei pea olema pilveteenus. Telefon saab kasutada **mis tahes mudelit, mida pakutakse OpenAI-ga ühilduva API kaudu** — liides `POST /v1/audio/transcriptions` —, olgu see teie arvutis kohapeal või teie enda serveris. Heli ei lahku kunagi teie ruumidest, minutite eest tasu ei võeta ja mahupiirangut pole.

Lisamiseks vajutage **Lisa** ja andke:

- serveri **aadress** kuni `/v1`-ni kaasa arvatud, näiteks `http://localhost:8000/v1` arvuti enda jaoks või `http://asr.local:8080/v1` teie võrgus oleva serveri jaoks;
- **mudeli** nimi täpselt nii, nagu server selle loetleb, näiteks `openai/whisper-large-v3-turbo`.

### Mida saab kasutada {#what-can-be-used}

Tavaline valik on **Whisper**, OpenAI avatud kõnetuvastusmudel. Selle kasutamine on tasuta, see mõistab umbes sadat keelt ja seda on mitmes suuruses: väike mudel töötab tavalisel arvutil, suured on märgatavalt täpsemad ja neile sobib kõige paremini graafikakaart.

| Mudel | Märkused |
| --- | --- |
| `whisper-large-v3` | Kõige täpsem Whisper. GPU-ga serverile. |
| `openai/whisper-large-v3-turbo` | `large-v3` kiirem versioon väikese täpsuse kaoga. |
| `Systran/faster-whisper-large-v3` | `large-v3` teisendatuna faster-whisperi mootorile; kiirem ja mälule säästlikum. |
| `medium`, `small`, `base` | Väiksemad Whisperi mudelid graafikakaardita arvutile. |

Whisper on mudel, mille ümber need serverid on ehitatud. Mõned neist saavad pakkuda ka teisi kõnetuvastusmudeleid, näiteks NVIDIA Parakeeti.

### Serverid, mis pakuvad OpenAI-ga ühilduvat API-t {#servers-that-offer-the-openai-compatible-api}

Mudelit peab käitama server, mis pakub OpenAI-ga ühilduvat lõpp-punkti `/v1/audio/transcriptions`. Need teevad seda:

| Server | Mis see on |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Suure jõudlusega mudeliserver. Pakub pärast käivitamist Whisperit aadressil `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Kõnemudelite server, „kõne Ollama”, ehitatud faster-whisperile. Laadib mudeli, kui seda esimest korda küsitakse. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Käitab Whisperit tõhusalt protsessoril, ka Apple siliconil. Selle `whisper-server` käivitatakse võtmega `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | OpenAI otsene asendaja, mis käitab mudeleid kohapeal. |

Iga teine server, mis pakub sama lõpp-punkti, töötab samamoodi. Kui server vajab võtit, sisestage see nagu pilveteenuse puhul.

Enne serverile toetumist tehke proovisalvestis ja vaadake ülestähendust [salvestiste aknas](/recordings/recordings-window): vestlus keeles, mida mudel halvasti tunneb, näitab seda kohe.
