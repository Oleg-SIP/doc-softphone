---
title: Užrašas
sidebar_position: 1
description: "Pasirinkite atpažintuvą, kuris garsą paverčia tekstu: jo adresą, jo modelį ir visų rūšių paslaugų modelių lentelę."
---

**Nustatymai → Užrašas** išvardija atpažintuvus: paslaugas, kurios garsą paverčia tekstu, baigtiems pokalbiams ir [sufleriui](../interface/prompter.md) pokalbio metu.

<Shot name="25_transcription" alt="Nustatymai → Užrašas: penki atpažintuvai" />

Pokalbis užrašomas, kai to paprašote [įrašų lange](/interface/recordings), arba savaime, jei skiltyje [Apdorojimas](/ai-processing/processing) įjungta **Apdoroti pokalbius automatiškai**. Atpažintuvas jūsų pačių kompiuteryje nieko nekainuoja; debesyje veikiantis ima mokestį už garso minutę.

## Atpažintuvai {#recognisers}
Atpažintuvas — tai kalbos atpažinimo paslauga, kuriai telefonas siunčia garsą. **Pridėti** prideda naują; jo kortelės mygtukas **Patikrinti** patikrina, ar paslauga tikrai atsako. Kiekvienas sąraše rodomas su pavadinimu, o po juo — jo paslaugos modelis ir adresas. Paveikslėlyje jų yra penki:

| Pavadinimas | Modelis | Adresas |
| --- | --- | --- |
| **X.ai** | *(tuščia: paslaugos numatytasis)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(nėra)* | `ws://localhost:2700`, serveris šiame kompiuteryje |

Du ženklai eilutės dešinėje rodo, kam atpažintuvas yra numatytasis. Laikrodis šviečia prie numatytojo **užrašams** — paveikslėlyje **X.ai** —, kuris naudojamas, kai nepasirenkate kito. Žaibas šviečia prie numatytojo **sufleriui** — paveikslėlyje **Vosk**. Galite laikyti kelis atpažintuvus; išskleidžiamasis sąrašas virš užrašo [įrašų lange](/interface/recordings#transcript-or-write-up-the-drop-down) rodo kiekvieno iš jų padarytus užrašus.

## Atpažintuvo kortelė {#the-recognisers-card}
Paspaudus atpažintuvą atsiveria jo kortelė.

<Shot name="43_recogniser_card" alt="Atpažintuvo X.ai kortelė: rūšis, du adresai, raktas, Patikrinti ir numatytieji" />

| Laukas | Kas tai |
| --- | --- |
| **Pavadinimas** | Pavadinimas sąrašuose. |
| **Rūšis** | Paslaugos rūšis, nuo kurios priklauso, kaip telefonas su ja kalbasi: **Suderinama su OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** ir trys, veikiančios jūsų pačių kompiuteryje, — **Vosk**, **WhisperLive** ir **NVIDIA Riva**. **Yandex SpeechKit** siūloma, kai skiltyje [Apie programą](../application/about.md) pasirinkta šalis yra Rusija arba viena iš jos kaimynių. |
| **Adresas užrašams** | Kur siunčiami baigti pokalbiai. |
| **Adresas sufleriui** | Kur keliauja gyvas garsas pokalbio metu. *Tuščia nustatoma pagal šalia esantį adresą*, kaip `wss://api.x.ai` paveikslėlyje. |
| **Raktas** | Paslaugos raktas. *Tai laikoma šio kompiuterio raktinėje, niekada nustatymų faile.* |
| **Patikrinti** | Paklausia paslaugos ir pasako, ką ji atsakė, pavyzdžiui, *Atsakė ir siūlo 3 modelius*. |
| **Modelis užrašams** ir **Modelis sufleriui** | Modelis tiksliai taip, kaip jį vadina paslauga. *Tuščia nesiunčia modelio pavadinimo*, ir paslauga naudoja savo numatytąjį; jei tiekėjas jį skelbia, kortelė jį nurodo. Rūšiai, kuri neturi pasirinkimo, laukas nerodomas. |
| **Numatytasis užrašams** | Padaro šį atpažintuvą tuo, kuris naudojamas, kai nepasirenkate kito. |
| **Numatytasis sufleriui** | Padaro šį atpažintuvą tuo, kuriuo klauso naujas suflerio pagalbininkas. |
| **Įjungta** | Išjungtas atpažintuvas lieka sąraše, bet nenaudojamas. |

**Išplėstiniai nustatymai** atveria likusią kortelės dalį. Svarbiausios reikšmės:

<Shot name="43b_recogniser_advanced" alt="Atpažintuvo išplėstiniai nustatymai: ribos, kaip karpomi atsakymai, kalba" />

| Laukas | Ką jis daro |
| --- | --- |
| **Regionas** | Paslaugos regionas, jei jų yra keli. |
| **Siųsti abi puses atskirai** | Skambutis įrašomas taip, kad du žmonės būtų dviejuose kanaluose, — būtent iš to atpažintuvas žino, kas ką pasakė. Išjunkite serveriui, kuris teigia tai mokąs, bet nemoka. |
| **Klausti, kas kalba** | Atskiria žmones viename kanale, kai jame kalba keli. |
| **Skaičius rašyti skaitmenimis** | Sumos, datos ir telefono numeriai grįžta taip, kaip rašomi, o ne žodžiais. |
| **Įkėlimo riba**, **Trukmės riba** | Didžiausias failas baitais ir ilgiausias įrašas sekundėmis, kuriuos šis telefonas išsiųs. |
| **Užklausų vienu metu** | Kiek užklausų gali būti vykdoma tuo pačiu metu. |
| **Užbaigti atsakymą po**, **Jungti trumpus atsakymus per**, **Pauzė tarp replikų** | Sufleriui: kiek laiko be naujų žodžių užbaigia atsakymą, kiek trumpas atsakymas laukia kito, kad būtų su juo sujungtas, ir kiek tylos užbaigia repliką, kai atpažintuvas jos nepažymi. Milisekundėmis. |
| **Kalba** | Dviejų raidžių kalbos kodas pagal ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Palikite tuščią, ir atpažintuvas nuspręs pats — tai teisinga, nebent jūsų pokalbiai vyksta kalba, kurią jis vis klaidingai girdi. |
| **Priedai** | Po vieną `name = value` eilutėje, perduodama paslaugai tokia, kokia yra. Palikite tuščią, nebent serveris ką nors dokumentuoja. |
| **Laukimas, minutės** | Kiek laukti užrašo. Tuščia apskaičiuoja pagal įrašo trukmę. |
| **Kaina už minutę** | Kiek kainuoja gyvo garso minutė pagal paslaugos kainoraštį. Suflerius rodo, kiek kainavo seansas, ir sustoja ties savo [mėnesio lubomis](prompter.md#spending). |

## Gyvas atpažinimas sufleriui {#live-recognition-for-the-prompter}
[Sufleriui](../interface/prompter.md) reikia atpažintuvo, kuris klausosi, kol kas nors kalba, srautu, o ne baigtu failu. Tai gali šios rūšys: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Suderinama su OpenAI** (su OpenAI realiojo laiko užrašymu), **AssemblyAI**, **Soniox** ir **Speechmatics** debesyje, **Yandex SpeechKit** ten, kur ji siūloma, ir **Vosk**, **WhisperLive** bei **NVIDIA Riva** jūsų pačių kompiuteryje. Atpažintuvas jūsų pačių kompiuteryje išlaiko pašnekovo balsą jūsų patalpose ir nieko nekainuoja.

Kaip jį naudoti: atverkite jo kortelę, patikrinkite **Adresas sufleriui** (arba leiskite jį nustatyti), pasirinkite **Modelis sufleriui**, jei paslauga siūlo kelis, — gyvi modeliai dažnai skiriasi nuo failų modelių, pavyzdžiui, ElevenLabs `scribe_v2_realtime`, — ir paspauskite **Patikrinti**. Pažymėkite **Numatytasis sufleriui**, kad nauji pagalbininkai klausytųsi juo.

## Kurį modelį pasirinkti {#which-model-to-choose}
Lentelėje išvardyti kiekvienos sąrašo **Rūšis** rūšies kalbos atpažinimo modeliai. **Paryškinti** modeliai yra nustatyti paveikslėlyje; atpažintuvo X.ai modelis tuščias, todėl naudojamas paslaugos numatytasis **`grok-voice-transcribe-2.0`**. **Kam** nurodo, kam modelis skirtas: baigtiems įrašams (*užrašai*), gyvai kalbai [sufleriui](#live-recognition-for-the-prompter) (*suflerius*) ar *abiem*.

| Rūšis ir adresas | Modelis | Kam | Kam jis tinka |
| --- | --- | --- | --- |
| **Suderinama su OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | užrašai | Modelis, kurį OpenAI rekomenduoja įrašytai kalbai jos originalo kalba. |
| | **`gpt-4o-transcribe`** | abiem | Bendrosios paskirties užrašymas. Jį gauna naujas šios rūšies atpažintuvas. |
| | `gpt-4o-mini-transcribe` | abiem | Lengvesnis ir pigesnis ankstesniojo variantas. |
| | `gpt-4o-transcribe-diarize` | užrašai | Pažymi, kas kada kalba. Naudokite tik tada, kai to reikia. |
| | `whisper-1` | užrašai | Senesnis Whisper modelis, paliktas ypatingiems poreikiams, pavyzdžiui, žodžių laiko žymoms ir subtitrams. |
| | `gpt-live-transcribe` | suflerius | OpenAI gyvas modelis: žodžiai ateina tuo metu, kai ištariami. Telefonas jį siūlo sufleriui. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | abiem | Geriausias Deepgram bendrosios paskirties modelis susitikimams, triukšmingam ir daugiakalbiam garsui. Jį gauna naujas šios rūšies atpažintuvas. |
| | **`nova-2`** | abiem | Ankstesnė karta; palikite ją kalboms, kurių `nova-3` dar nepalaiko. |
| | `nova-2-phonecall` | abiem | `nova-2`, pritaikytas siauram telefono linijos garsui. Anglų kalba. |
| | `flux-general-en` | suflerius | Sukurtas pokalbiui: girdi, kada žmogus baigė kalbėti. Anglų kalba. |
| | `flux-general-multi` | suflerius | Tas pats dešimčia kalbų, ir pokalbis gali pereiti iš vienos į kitą. |
| | `enhanced`, `base` | užrašai | Senesni lygiai; `base` skirtas dideliems kiekiams. |
| | `whisper` | užrašai | Whisper, paleistas Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | užrašai | Bendrosios paskirties užrašymas daugiau nei 90 kalbų, su kalbėtojų atskyrimu. |
| | `scribe_v2_realtime` | suflerius | Gyva `scribe_v2` versija. Telefonas ją siūlo sufleriui. |
| | `scribe_v2_medical` | užrašai | `scribe_v2`, pritaikytas klinikiniam garsui. |
| | `scribe_v1` | užrašai | Pirmoji karta; pasenusi, naudokite `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | abiem | Tiksliausias, pokalbiui viena kalba. Jį gauna naujas šios rūšies atpažintuvas. |
| | `standard` | abiem | Greitesnis ir pigesnis, šiek tiek mažiau tikslus. |
| | `melia-1` | užrašai | Pokalbis keliomis kalbomis, keičiantis kalbą sakinio viduryje, grįžta vienu užrašu. Tik įrašams, ES ir JAV regionuose; savo žodyno ir kalbėtojų žymų kol kas nėra. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | abiem | Numatytasis; 25 kalbos. |
| | `grok-voice-transcribe-1.0` | užrašai | Pasenęs: paslauga jį nukreipia į `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | užrašai | Daugiau nei 60 kalbų, su kalbėtojų atskyrimu. |
| | `stt-rt-v5` | suflerius | Gyvai, tomis pačiomis 60+ kalbų, ir girdi, kur baigiasi replika. Telefonas jį siūlo sufleriui. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | abiem | Tiksliausias modelis įrašams; 18 kalbų, ir pokalbis gali pereiti iš vienos į kitą. |
| | `universal-2` | užrašai | 99 kalbos, pigesnis; AssemblyAI jį naudoja kalbai, kurios `universal-3-5-pro` nemoka. |
| | `universal-3-6-pro` | suflerius | Naujausias AssemblyAI gyvas modelis, 32 kalbos; paslauga jį naudoja, kai modelis tuščias. |
| | `universal-streaming-multilingual` | suflerius | Pigesnis gyvas atpažinimas anglų, ispanų, vokiečių, prancūzų, portugalų ir italų kalbomis. |
| | `universal-streaming-english` | suflerius | Pigesnis gyvas atpažinimas, tik anglų kalba. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | abiem | Pagrindinis modelis, stiprus rusų kalba, taip pat telefonu. Siūlomas, kai šalis yra Rusija arba viena iš jos kaimynių. |
| | `general:rc` | abiem | Kita modelio versija prieš išleidimą. |
| | `deferred-general` | užrašai | Atidėtas atpažinimas: užrašas ateina vėliau, už mažesnę kainą. |
| **Vosk (jūsų pačių kompiuteryje)**<br />`ws://localhost:2700` | *(nustatomas serveryje)* | abiem | Nemokamas ir lengvas; veikia be vaizdo plokštės. Modelis yra tas, su kuriuo paleistas serveris, po vieną kiekvienai kalbai, pavyzdžiui, `vosk-model-en-us-0.22` arba mažasis `vosk-model-small-en-us-0.15`. |
| **WhisperLive (jūsų pačių kompiuteryje)**<br />`ws://localhost:9090` | `small` | abiem | Whisper gyvu srautu. Dydis pasirenkamas kortelėje: `tiny`, `base`, `small` (jį siūlo telefonas), `medium`, `large-v3`; kuo didesnis, tuo tikslesnis ir tuo labiau jam reikia vaizdo plokštės. |
| **NVIDIA Riva (jūsų pačių kompiuteryje)**<br />`localhost:50051` | *(nustatomas serveryje)* | abiem | NVIDIA kalbos serveris kompiuteriui su NVIDIA vaizdo plokšte. Jis teikia tokius modelius kaip Parakeet ir Canary. |

Ką verta žinoti prieš renkantis:

- **Užrašai ar suflerius.** Gyvai kalbai skirtas modelis nepriima baigto failo, o dauguma failų modelių nemoka klausytis gyvai. Todėl kortelėje yra du laukai — **Modelis užrašams** ir **Modelis sufleriui**.
- **Failo dydis.** OpenAI priima failus iki 25 MB, X.ai — iki 500 MB. Ilgas pokalbis gali būti didesnis, nei priima debesijos paslauga.
- **Kaina.** Debesijos paslaugos ima mokestį už garso minutę, o tarifai priklauso nuo modelio ir keičiasi; prieš keisdami pasižiūrėkite juos pačios paslaugos puslapyje. Atpažintuvas jūsų pačių kompiuteryje nieko nekainuoja.
- **Kalbos.** Kiekviena paslauga turi savo sąrašą; patikrinkite savąjį ir nustatykite kodą lauke **Kalba** atpažintuvo išplėstiniuose nustatymuose, jei jis spėja neteisingai.

Paslaugos modelių sąrašas dažnai keičiasi. Jei norimo modelio čia nėra, dabartinis sąrašas yra pačios paslaugos dokumentacijoje — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html), — o **Modelis** yra pavadinimas tiksliai toks, kokį pateikia paslauga.

## Jūsų pačių modeliai {#your-own-models}

Atpažintuvas neprivalo būti debesijos paslauga. Telefonas gali naudoti **bet kurį modelį, teikiamą per su OpenAI suderinamą API** — sąsają `POST /v1/audio/transcriptions` —, nesvarbu, ar jis veikia jūsų kompiuteryje, ar jūsų serveryje. Garsas niekada nepalieka jūsų patalpų, už minutes neimamas mokestis, o kiekis neribojamas.

Norėdami jį pridėti, paspauskite **Pridėti** ir nurodykite:

- serverio **adresą** iki `/v1` imtinai, pavyzdžiui, `http://localhost:8000/v1` pačiam kompiuteriui arba `http://asr.local:8080/v1` serveriui jūsų tinkle;
- **modelio** pavadinimą tiksliai tokį, kokį pateikia serveris, pavyzdžiui, `openai/whisper-large-v3-turbo`.

### Ką galima naudoti {#what-can-be-used}

Įprastas pasirinkimas yra **Whisper**, atviras OpenAI kalbos atpažinimo modelis. Jis nemokamas, supranta apie šimtą kalbų ir yra kelių dydžių: mažas modelis veikia įprastame kompiuteryje, dideli yra pastebimai tikslesni ir jiems geriausia turėti vaizdo plokštę.

| Modelis | Pastabos |
| --- | --- |
| `whisper-large-v3` | Tiksliausias Whisper. Serveriui su GPU. |
| `openai/whisper-large-v3-turbo` | Greitesnė `large-v3` versija su nedideliu tikslumo praradimu. |
| `Systran/faster-whisper-large-v3` | `large-v3`, konvertuotas faster-whisper varikliui; greitesnis ir taupesnis atminčiai. |
| `medium`, `small`, `base` | Mažesni Whisper modeliai kompiuteriui be vaizdo plokštės. |

Whisper yra modelis, aplink kurį sukurti šie serveriai. Kai kurie iš jų gali teikti ir kitus kalbos atpažinimo modelius, pavyzdžiui, NVIDIA Parakeet.

### Serveriai, teikiantys su OpenAI suderinamą API {#servers-that-offer-the-openai-compatible-api}

Modelį turi vykdyti serveris, teikiantis su OpenAI suderinamą galinį tašką `/v1/audio/transcriptions`. Šie tai daro:

| Serveris | Kas tai |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Didelio našumo modelių serveris. Paleistas teikia Whisper adresu `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Kalbos modelių serveris, „kalbos Ollama“, sukurtas ant faster-whisper. Įkelia modelį, kai jo paprašoma pirmą kartą. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Efektyviai vykdo Whisper procesoriumi, taip pat Apple silicon. Jo `whisper-server` paleidžiamas su `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Tiesioginis OpenAI pakaitalas, vykdantis modelius vietoje. |

Bet kuris kitas serveris, teikiantis tą patį galinį tašką, veikia taip pat. Jei serveriui reikia rakto, įveskite jį kaip debesijos paslaugai.

Prieš pasikliaudami serveriu, padarykite bandomąjį įrašą ir peržiūrėkite iššifruotą tekstą [įrašų lange](/interface/recordings): pokalbis kalba, kurią modelis menkai išmano, tai iškart parodo.
