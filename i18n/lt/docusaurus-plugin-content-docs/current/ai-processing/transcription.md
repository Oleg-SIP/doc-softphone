---
title: Užrašas
sidebar_position: 1
description: "\"Pasirinkite atpažintuvą, kuris garsą paverčia tekstu: jo adresą, modelį ir lentelę su kiekvienos paslaugos siūlomais modeliais.\""
---

**Nustatymai → Užrašas** nustato, kaip garsas tampa tekstu: kokia kalba ir kokiu atpažintuvu.

<Shot name="25_transcription" alt="Nustatymai → Užrašas: kalba ir keturi atpažintuvai" />

Pokalbis iššifruojamas, kai to paprašote [įrašų lange](/recordings/recordings-window), arba savaime, jei skiltyje [Apdorojimas](/ai-processing/processing) įjungta **Apdoroti pokalbius automatiškai**. Atpažintuvas jūsų kompiuteryje nieko nekainuoja; debesyje esantis ima mokestį už garso minutes.

## Kalba {#language}

**Kalba** yra dviejų raidžių kalbos kodas pagal ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Palikite jį tuščią, ir atpažintuvas nuspręs pats — tai teisinga, nebent jūsų skambučiai vyksta kalba, kurią jis nuolat girdi neteisingai.

## Atpažintuvai {#recognisers}

Atpažintuvas — tai kalbos pavertimo tekstu paslauga, kuriai telefonas siunčia garsą. Paspauskite **Pridėti**, kad jį pridėtumėte; formos mygtukas **Patikrinti** patikrina, ar paslauga tikrai atsako. Kiekvienas pateiktas su pavadinimu, o po juo — modelis ir paslaugos adresas. Paveikslėlyje jų yra keturi:

| Pavadinimas | Modelis | Adresas |
| --- | --- | --- |
| **X.ai** | *(tuščia: paslaugos numatytasis)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Tas, kuris savo eilutės dešinėje pažymėtas kaip **numatytasis** (paveikslėlyje **X.ai**), naudojamas, kai nepasirenkate kito. Galite turėti kelis. Išskleidžiamasis sąrašas virš iššifruoto teksto [įrašų lange](/recordings/recordings-window#the-transcript-and-the-write-up) pateikia kiekvieno atpažintuvo iššifruotus tekstus.

Modelį galima palikti tuščią. Tada paslauga naudoja savo numatytąjį.

## Kurį modelį pasirinkti {#which-model-to-choose}

Lentelėje pateikti keturių paveikslėlyje matomų paslaugų kalbos pavertimo tekstu modeliai. **Paryškinti** modeliai yra nustatyti paveikslėlyje. X.ai atpažintuvo modelis tuščias, todėl naudojamas paslaugos numatytasis **`grok-voice-transcribe-2.0`**.

| Paslauga ir adresas | Modelis | Kam jis skirtas |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Modelis, kurį OpenAI rekomenduoja įrašytai kalbai jos originalo kalba. |
| | **`gpt-4o-transcribe`** | Bendrosios paskirties iššifravimas. |
| | `gpt-4o-mini-transcribe` | Lengvesnis ir pigesnis ankstesniojo variantas. |
| | `gpt-4o-transcribe-diarize` | Nurodo, kas kada kalba. Naudokite tik jei jums to reikia. |
| | `whisper-1` | Senesnis Whisper modelis, paliktas specialioms reikmėms, pvz., žodžių laiko žymoms ir subtitrams. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Bendrosios paskirties iššifravimas daugiau nei 90 kalbų su kalbėtojų atskyrimu. |
| | `scribe_v2_medical` | Tas pats, pritaikytas klinikiniam garsui. |
| | `scribe_v1` | Pirmoji karta; pasenęs, naudokite `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Geriausias Deepgram bendrosios paskirties modelis susitikimams, triukšmingam ir daugiakalbiam garsui. |
| | **`nova-2`** | Ankstesnė karta; palikite ją kalboms, kurių `nova-3` dar nepalaiko. |
| | `enhanced` | Senesnis lygis su mažiau klaidų nei `base`. |
| | `base` | Seniausias lygis dideliems kiekiams. |
| | `whisper` | Whisper, vykdomas Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Numatytasis; 25 kalbos. |
| | `grok-voice-transcribe-1.0` | Pasenęs: paslauga jį nukreipia į `2.0`. |

Ką verta žinoti prieš renkantis:

- **Failo dydis.** OpenAI priima failus iki 25 MB, X.ai — iki 500 MB. Ilgas pokalbis gali būti didesnis, nei priima debesijos paslauga.
- **Kaina.** Debesijos paslaugos ima mokestį už garso minutes, o kainos skiriasi pagal modelį ir keičiasi; prieš keisdami perskaitykite jas paslaugos puslapyje.
- **Kalbos.** Kiekviena paslauga turi savo sąrašą; patikrinkite savąjį ir nustatykite [Kalba](#language) kodą, jei atpažintuvas spėja neteisingai.
- **Realaus laiko modeliai**, pvz., `scribe_v2_realtime` ar Deepgram `flux`, skirti tiesioginėms transliacijoms ir lentelėje jų nėra: telefonas iššifruoja baigtus įrašus.

Paslaugos modelių sąrašas dažnai keičiasi. Jei norimo modelio čia nėra, paslaugos dokumentacijoje yra dabartinis sąrašas — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; **Modelis** yra pavadinimas tiksliai toks, kokį jį pateikia paslauga.

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

Prieš pasikliaudami serveriu, padarykite bandomąjį įrašą ir peržiūrėkite iššifruotą tekstą [įrašų lange](/recordings/recordings-window): pokalbis kalba, kurią modelis menkai išmano, tai iškart parodo.
