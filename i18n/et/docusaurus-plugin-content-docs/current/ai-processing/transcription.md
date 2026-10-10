---
title: Ülestähendus
sidebar_position: 1
description: "Valige tuvastaja, mis muudab heli tekstiks: selle aadress, selle mudel ja tabel igat liiki teenuste mudelitest."
---

**Seaded → Ülestähendus** loetleb tuvastajad: teenused, mis muudavad heli tekstiks, lõppenud vestluste jaoks ja [etteütleja](../interface/prompter.md) jaoks vestluse ajal.

<Shot name="25_transcription" alt="Seaded → Ülestähendus: viis tuvastajat" />

Vestlus tähendatakse üles, kui te seda [Salvestiste aknas](/interface/recordings) palute, või iseenesest, kui jaotises [Töötlemine](/ai-processing/processing) on sisse lülitatud **Töötle vestlusi automaatselt**. Teie enda masinas töötav tuvastaja ei maksa midagi; pilves töötav võtab tasu heliminuti eest.

## Tuvastajad {#recognisers}
Tuvastaja on kõnetuvastusteenus, millele telefon heli saadab. **Lisa** lisab uue; selle kaardi nupp **Kontrolli** kontrollib, kas teenus tõesti vastab. Igaüks on loendis oma nimega ja selle all on teenuse mudel ja aadress. Pildil on neid viis:

| Nimi | Mudel | Aadress |
| --- | --- | --- |
| **X.ai** | *(tühi: teenuse vaikemudel)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(puudub)* | `ws://localhost:2700`, server selles arvutis |

Kaks märki rea paremas servas näitavad, mille jaoks tuvastaja on vaikimisi valitud. Kell põleb vaikimisi tuvastajal **ülestähenduste jaoks** — pildil **X.ai** —, mida kasutatakse, kui te muud ei vali. Välk põleb vaikimisi tuvastajal **etteütleja jaoks** — pildil **Vosk**. Tuvastajaid võib olla mitu; ülestähenduse kohal olev ripploend [Salvestiste aknas](/interface/recordings#transcript-or-write-up-the-drop-down) näitab igaühe tehtud ülestähendusi.

## Tuvastaja kaart {#the-recognisers-card}
Tuvastajale vajutamine avab selle kaardi.

<Shot name="43_recogniser_card" alt="Tuvastaja X.ai kaart: liik, kaks aadressi, võti, Kontrolli ja vaikevalikud" />

| Väli | Mis see on |
| --- | --- |
| **Nimi** | Nimi loendites. |
| **Liik** | Teenuse liik, mis otsustab, kuidas telefon sellega räägib: **OpenAI-ga ühilduv (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** ja kolm, mis töötavad teie enda masinas — **Vosk**, **WhisperLive** ja **NVIDIA Riva**. **Yandex SpeechKit** pakutakse siis, kui jaotises [Teave](../application/about.md) on riigiks Venemaa või mõni selle naaberriik. |
| **Aadress ülestähenduste jaoks** | Kuhu lõppenud vestlused saadetakse. |
| **Aadress etteütleja jaoks** | Kuhu otseheli vestluse ajal läheb. *Tühi tuletatakse kõrvalolevast aadressist*, nagu pildil `wss://api.x.ai`. |
| **Võti** | Teenuse võti. *See on selle arvuti võtmehoidjas, mitte kunagi seadistusfailis.* |
| **Kontrolli** | Küsib teenuselt ja ütleb, mida see vastas, näiteks *Vastas ja pakub 3 mudelit*. |
| **Mudel ülestähenduste jaoks** ja **Mudel etteütleja jaoks** | Mudel täpselt nii, nagu teenus seda nimetab. *Tühjana ei saadeta mudeli nime*, ja teenus kasutab oma vaikemudelit; kui pakkuja selle avaldab, nimetab kaart selle. Liigi puhul, millel valikut pole, välja ei näidata. |
| **Vaikimisi ülestähenduste jaoks** | Teeb sellest tuvastaja, mida kasutatakse, kui te muud ei vali. |
| **Vaikimisi etteütleja jaoks** | Teeb sellest tuvastaja, millega etteütleja uus abiline kuulab. |
| **Sees** | Väljalülitatuna jääb tuvastaja loendisse, kuid seda ei kasutata. |

**Täpsemad seaded** avab ülejäänud kaardi. Kõige olulisemad väärtused:

<Shot name="43b_recogniser_advanced" alt="Tuvastaja täpsemad seaded: piirid, kuidas vastused tükeldatakse, keel" />

| Väli | Mida see teeb |
| --- | --- |
| **Piirkond** | Teenuse piirkond, kui neid on mitu. |
| **Saada mõlemad pooled eraldi** | Kõne salvestatakse nii, et kaks inimest on kahel kanalil, ja just sellest teab tuvastaja, kes mida ütles. Lülitage see välja serveril, mis väidab, et oskab seda, kuid ei oska. |
| **Küsi, kes räägib** | Eristab inimesi ühe kanali sees, kui seal räägib mitu inimest. |
| **Kirjuta arvud numbritega** | Summad, kuupäevad ja telefoninumbrid tulevad tagasi nii, nagu neid kirjutatakse, mitte sõnadega välja kirjutatuna. |
| **Üleslaadimise piir**, **Pikkuse piir** | Suurim fail baitides ja pikim salvestis sekundites, mille see telefon saadab. |
| **Päringuid korraga** | Mitu päringut võib korraga pooleli olla. |
| **Lõpeta vastus pärast**, **Liida lühikesed vastused vahega kuni**, **Paus repliikide vahel** | Etteütleja jaoks: kui kaua ilma uute sõnadeta lõpetab vastuse, kui kaua lühike vastus ootab järgmist, et sellega liituda, ja kui pikk vaikus lõpetab repliigi, kui tuvastaja seda ise ei märgi. Millisekundites. |
| **Keel** | Kahetäheline keelekood ISO 639-1 järgi (`en`, `de`, `es`, `fr`, `sr`…). Jätke see tühjaks ja tuvastaja otsustab ise — see on õige, kui teie kõned pole keeles, mida see pidevalt valesti kuuleb. |
| **Lisad** | Üks `name = value` rea kohta, edastatakse teenusele muutmata kujul. Jätke tühjaks, kui server midagi ei dokumenteeri. |
| **Ootamine, minutid** | Kui kaua ülestähendust oodata. Tühi arvutab selle salvestise pikkuse järgi. |
| **Hind minuti eest** | Mida maksab minut otseheli teenuse hinnakirja järgi. Etteütleja näitab, mida seanss on maksnud, ja peatub oma [kuulimiidi](prompter.md#spending) juures. |

## Otsetuvastus etteütleja jaoks {#live-recognition-for-the-prompter}
[Etteütleja](../interface/prompter.md) vajab tuvastajat, mis kuulab, kui keegi räägib, voona, mitte valmis failina. Seda oskavad need liigid: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-ga ühilduv** (OpenAI reaalajas ülestähendusega), **AssemblyAI**, **Soniox** ja **Speechmatics** pilves, **Yandex SpeechKit** seal, kus seda pakutakse, ning **Vosk**, **WhisperLive** ja **NVIDIA Riva** teie enda masinas. Teie enda masinas töötav tuvastaja hoiab teise poole hääle majas ega maksa midagi.

Nii kasutate üht: avage selle kaart, kontrollige välja **Aadress etteütleja jaoks** (või laske see tuletada), valige **Mudel etteütleja jaoks**, kui teenus pakub mitut — otsemudelid erinevad sageli failide omadest, näiteks ElevenLabsi `scribe_v2_realtime` —, ja vajutage **Kontrolli**. Märkige **Vaikimisi etteütleja jaoks**, et uued abilised kuulaksid sellega.

## Millise mudeli valida {#which-model-to-choose}
Tabel loetleb loendi **Liik** iga liigi kõnetuvastusmudelid. **Paksus** kirjas mudelid on pildil seadistatud; tuvastaja X.ai mudel on tühi, seega kasutatakse teenuse vaikemudelit **`grok-voice-transcribe-2.0`**. **Milleks** ütleb, milleks mudel on tehtud: valmis salvestiste jaoks (*ülestähendused*), [etteütleja](#live-recognition-for-the-prompter) otsekõne jaoks (*etteütleja*) või *mõlemaks*.

| Liik ja aadress | Mudel | Milleks | Mille jaoks see on |
| --- | --- | --- | --- |
| **OpenAI-ga ühilduv (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | ülestähendused | Mudel, mida OpenAI soovitab salvestatud kõne jaoks selle algkeeles. |
| | **`gpt-4o-transcribe`** | mõlemaks | Üldotstarbeline ülestähendus. Selle liigi uus tuvastaja saab selle. |
| | `gpt-4o-mini-transcribe` | mõlemaks | Eelmise kergem ja odavam variant. |
| | `gpt-4o-transcribe-diarize` | ülestähendused | Märgib, kes millal räägib. Kasutage seda ainult siis, kui seda vajate. |
| | `whisper-1` | ülestähendused | Vanem Whisperi mudel, mis on alles erijuhtudeks nagu sõnapõhised ajatemplid ja subtiitrid. |
| | `gpt-live-transcribe` | etteütleja | OpenAI otsemudel: sõnad tulevad, kui neid öeldakse. Telefon pakub seda etteütlejale. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | mõlemaks | Deepgrami parim üldotstarbeline mudel koosolekute, mürarikka ja mitmekeelse heli jaoks. Selle liigi uus tuvastaja saab selle. |
| | **`nova-2`** | mõlemaks | Eelmine põlvkond; hoidke see keelte jaoks, mida `nova-3` veel ei toeta. |
| | `nova-2-phonecall` | mõlemaks | `nova-2`, häälestatud telefoniliini kitsale helile. Inglise keel. |
| | `flux-general-en` | etteütleja | Tehtud vestluseks: kuuleb, kui keegi on rääkimise lõpetanud. Inglise keel. |
| | `flux-general-multi` | etteütleja | Sama kümnes keeles, ja vestlus võib nende vahel vahetuda. |
| | `enhanced`, `base` | ülestähendused | Vanemad tasemed; `base` on suurte mahtude jaoks. |
| | `whisper` | ülestähendused | Whisper Deepgrami käitatuna. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | ülestähendused | Üldotstarbeline ülestähendus enam kui 90 keeles, kõnelejate eristamisega. |
| | `scribe_v2_realtime` | etteütleja | `scribe_v2` otseversioon. Telefon pakub seda etteütlejale. |
| | `scribe_v2_medical` | ülestähendused | `scribe_v2`, häälestatud kliinilisele helile. |
| | `scribe_v1` | ülestähendused | Esimene põlvkond; aegunud, kasutage `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | mõlemaks | Kõige täpsem, ühes keeles peetud vestluse jaoks. Selle liigi uus tuvastaja saab selle. |
| | `standard` | mõlemaks | Kiirem ja odavam, veidi vähem täpne. |
| | `melia-1` | ülestähendused | Mitmekeelne vestlus, mis vahetab keelt keset lauset, tuleb tagasi ühe ülestähendusena. Ainult salvestised, EL-i ja USA piirkonnas; oma sõnastikku ja kõnelejate märgiseid veel pole. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | mõlemaks | Vaikemudel; 25 keelt. |
| | `grok-voice-transcribe-1.0` | ülestähendused | Aegunud: teenus suunab selle ümber `2.0` peale. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | ülestähendused | Üle 60 keele, kõnelejate eristamisega. |
| | `stt-rt-v5` | etteütleja | Otse, samas enam kui 60 keeles, ja kuuleb, kus repliik lõpeb. Telefon pakub seda etteütlejale. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | mõlemaks | Kõige täpsem mudel salvestiste jaoks; 18 keelt, ja vestlus võib nende vahel vahetuda. |
| | `universal-2` | ülestähendused | 99 keelt, odavam; AssemblyAI kasutab seda keele puhul, mida `universal-3-5-pro` ei oska. |
| | `universal-3-6-pro` | etteütleja | AssemblyAI uusim otsemudel, 32 keelt; teenus kasutab seda, kui mudel on tühi. |
| | `universal-streaming-multilingual` | etteütleja | Odavam otsetuvastus inglise, hispaania, saksa, prantsuse, portugali ja itaalia keeles. |
| | `universal-streaming-english` | etteütleja | Odavam otsetuvastus, ainult inglise keeles. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | mõlemaks | Põhimudel, tugev vene keeles, ka telefonis. Pakutakse, kui riik on Venemaa või mõni selle naaberriik. |
| | `general:rc` | mõlemaks | Mudeli järgmine versioon enne väljaandmist. |
| | `deferred-general` | ülestähendused | Edasilükatud tuvastus: ülestähendus tuleb hiljem, väiksema raha eest. |
| **Vosk (teie enda masinas)**<br />`ws://localhost:2700` | *(seatakse serveris)* | mõlemaks | Tasuta ja kerge; töötab ilma graafikakaardita. Mudel on see, millega server käivitati, üks keele kohta, näiteks `vosk-model-en-us-0.22` või väike `vosk-model-small-en-us-0.15`. |
| **WhisperLive (teie enda masinas)**<br />`ws://localhost:9090` | `small` | mõlemaks | Whisper otsevoona. Suurus valitakse kaardil: `tiny`, `base`, `small` (mida telefon pakub), `medium`, `large-v3`; mida suurem, seda täpsem ja seda rohkem vajab see graafikakaarti. |
| **NVIDIA Riva (teie enda masinas)**<br />`localhost:50051` | *(seatakse serveris)* | mõlemaks | NVIDIA kõneserver arvutile, millel on NVIDIA graafikakaart. See pakub mudeleid nagu Parakeet ja Canary. |

Mida enne valimist teada:

- **Ülestähendused või etteütleja.** Otsekõne jaoks tehtud mudel ei võta vastu valmis faili ja enamik failimudeleid ei oska otse kuulata. Seepärast on kaardil kaks välja: **Mudel ülestähenduste jaoks** ja **Mudel etteütleja jaoks**.
- **Faili suurus.** OpenAI võtab vastu kuni 25 MB faile, X.ai kuni 500 MB. Pikk vestlus võib olla suurem, kui pilveteenus vastu võtab.
- **Hind.** Pilveteenused võtavad tasu heliminuti eest ja hinnad sõltuvad mudelist ning muutuvad; lugege neid enne vahetamist teenuse enda lehelt. Teie enda masinas töötav tuvastaja ei maksa midagi.
- **Keeled.** Igal teenusel on oma loend; kontrollige enda oma ja seadke kood väljale **Keel** tuvastaja täpsemates seadetes, kui see arvab valesti.

Teenuse mudelite loend muutub sageli. Kui soovitud mudel siit puudub, on ajakohane loend teenuse enda dokumentatsioonis — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — ja **Mudel** on nimi täpselt nii, nagu teenus selle annab.

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

Enne serverile toetumist tehke proovisalvestis ja vaadake ülestähendust [salvestiste aknas](/interface/recordings): vestlus keeles, mida mudel halvasti tunneb, näitab seda kohe.
