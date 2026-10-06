---
title: Transcriere
sidebar_position: 1
description: Alegeți recunoscătorul care transformă sunetul în text — adresa lui, modelul lui și un tabel cu modelele oferite de fiecare serviciu.
---

**Setări → Transcriere** stabilește cum devine sunetul text: în ce limbă și prin ce recunoscător.

<Shot name="25_transcription" alt="Setări → Transcriere: limba și patru recunoscătoare" />

O conversație este transcrisă când cereți acest lucru în [fereastra Înregistrări](/recordings/recordings-window) sau de la sine, dacă **Prelucrează conversațiile automat** este pornit în [Prelucrare](/ai-processing/processing). Un recunoscător pe propriul calculator nu costă nimic; unul în cloud taxează la minut de sunet.

## Limbă {#language}

**Limbă** este un cod de limbă din două litere, conform ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lăsați câmpul gol și hotărăște recunoscătorul — este alegerea potrivită, cu excepția cazului în care apelurile sunt într-o limbă pe care o înțelege greșit în mod repetat.

## Recunoscătoare {#recognisers}

Un recunoscător este un serviciu de transformare a vorbirii în text, căruia telefonul îi trimite sunetul. Apăsați **Adaugă** ca să adăugați unul; butonul **Verifică** din formular verifică dacă serviciul răspunde cu adevărat. Fiecare apare în listă cu numele și, sub el, modelul și adresa serviciului. În imagine sunt patru:

| Nume | Model | Adresă |
| --- | --- | --- |
| **X.ai** | *(gol: modelul implicit al serviciului)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Cel marcat **Implicit** în dreapta rândului său (**X.ai** în imagine) este cel folosit când nu alegeți altul. Puteți păstra mai multe. Lista derulantă de deasupra unei transcrieri din [fereastra Înregistrări](/recordings/recordings-window#the-transcript-and-the-write-up) arată transcrierile făcute de fiecare recunoscător.

Modelul poate rămâne gol. În acest caz, serviciul folosește propriul model implicit.

## Ce model să alegeți {#which-model-to-choose}

Tabelul enumeră modelele de transformare a vorbirii în text ale celor patru servicii din imagine. Modelele cu **aldine** sunt cele configurate în imagine. Pentru recunoscătorul X.ai modelul este gol, așa că se folosește modelul implicit al serviciului, **`grok-voice-transcribe-2.0`**.

| Serviciu și adresă | Model | La ce folosește |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Modelul recomandat de OpenAI pentru vorbire înregistrată, în limba ei originală. |
| | **`gpt-4o-transcribe`** | Transcriere de uz general. |
| | `gpt-4o-mini-transcribe` | O variantă mai ușoară și mai ieftină a celui de mai sus. |
| | `gpt-4o-transcribe-diarize` | Marchează cine vorbește și când. Folosiți-l doar dacă aveți nevoie de asta. |
| | `whisper-1` | Modelul Whisper mai vechi, păstrat pentru utilizări speciale, cum ar fi marcajele de timp pe cuvinte și subtitrările. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transcriere de uz general în peste 90 de limbi, cu separarea vorbitorilor. |
| | `scribe_v2_medical` | Același, adaptat pentru sunet clinic. |
| | `scribe_v1` | Prima generație; învechit, folosiți `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Cel mai bun model de uz general al Deepgram, pentru ședințe, sunet zgomotos și multilingv. |
| | **`nova-2`** | Generația anterioară; păstrați-l pentru limbile pe care `nova-3` nu le suportă încă. |
| | `enhanced` | Un nivel mai vechi, cu rate de eroare mai mici decât `base`. |
| | `base` | Cel mai vechi nivel, pentru volume mari. |
| | `whisper` | Whisper, rulat de Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Modelul implicit; 25 de limbi. |
| | `grok-voice-transcribe-1.0` | Învechit: serviciul îl redirecționează la `2.0`. |

Lucruri bune de știut înainte să alegeți:

- **Dimensiunea fișierului.** OpenAI acceptă fișiere de până la 25 MB; X.ai de până la 500 MB. O conversație lungă poate fi mai mare decât acceptă un serviciu în cloud.
- **Preț.** Serviciile în cloud taxează la minut de sunet, iar tarifele diferă de la un model la altul și se schimbă; citiți-le pe pagina serviciului înainte să schimbați.
- **Limbi.** Fiecare serviciu are propria listă; verificați-o pe a dumneavoastră și setați codul din [Limbă](#language) dacă recunoscătorul ghicește greșit.
- **Modelele în timp real**, cum ar fi `scribe_v2_realtime` sau `flux` de la Deepgram, sunt făcute pentru fluxuri live și nu se află în tabel: telefonul transcrie înregistrări încheiate.

Lista modelelor unui serviciu se schimbă des. Dacă un model pe care îl doriți lipsește de aici, documentația serviciului are lista actuală — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — iar **Model** este numele scris exact cum îl dă serviciul.

## Propriile modele {#your-own-models}

Un recunoscător nu trebuie să fie neapărat un serviciu în cloud. Telefonul poate folosi **orice model servit prin API-ul compatibil cu OpenAI** — interfața `POST /v1/audio/transcriptions` —, fie că rulează local, pe calculatorul dumneavoastră, fie pe un server propriu. Sunetul nu părăsește niciodată organizația, nu se taxează nimic la minut și nu există nicio limită de volum.

Pentru a adăuga unul, apăsați **Adaugă** și introduceți:

- **adresa** serverului, până la `/v1` inclusiv, de exemplu `http://localhost:8000/v1` pentru calculatorul însuși sau `http://asr.local:8080/v1` pentru un server din rețeaua dumneavoastră;
- numele **modelului** exact așa cum îl listează serverul, de exemplu `openai/whisper-large-v3-turbo`.

### Ce se poate folosi {#what-can-be-used}

Alegerea obișnuită este **Whisper**, modelul deschis de recunoaștere a vorbirii al OpenAI. Este gratuit, înțelege aproximativ o sută de limbi și vine în mai multe dimensiuni: un model mic rulează pe un calculator obișnuit, cele mari sunt vizibil mai precise și merg cel mai bine cu o placă grafică.

| Model | Observații |
| --- | --- |
| `whisper-large-v3` | Cel mai precis Whisper. Pentru un server cu GPU. |
| `openai/whisper-large-v3-turbo` | O versiune mai rapidă a lui `large-v3`, cu o mică pierdere de precizie. |
| `Systran/faster-whisper-large-v3` | `large-v3` convertit pentru motorul faster-whisper; mai rapid și mai ușor pentru memorie. |
| `medium`, `small`, `base` | Modele Whisper mai mici, pentru un calculator fără placă grafică. |

Whisper este modelul în jurul căruia sunt construite aceste servere. Unele dintre ele pot servi și alte modele de recunoaștere a vorbirii, cum ar fi NVIDIA Parakeet.

### Servere care oferă API-ul compatibil cu OpenAI {#servers-that-offer-the-openai-compatible-api}

Modelul trebuie rulat de un server care oferă punctul final `/v1/audio/transcriptions` compatibil cu OpenAI. Acestea îl oferă:

| Server | Ce este |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Un server de modele de înaltă performanță. După pornire, servește Whisper la `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Un server pentru modele de vorbire, „Ollama pentru vorbire”, construit pe faster-whisper. Încarcă un model când este cerut prima dată. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Rulează Whisper eficient pe un CPU, inclusiv pe Apple silicon. Serverul său `whisper-server` se pornește cu `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Un înlocuitor direct pentru OpenAI, care rulează modelele local. |

Orice alt server care oferă același punct final funcționează la fel. Dacă un server cere o cheie, introduceți-o ca pentru un serviciu în cloud.

Înainte să vă bazați pe un server, faceți o înregistrare de probă și uitați-vă la transcriere în [fereastra Înregistrări](/recordings/recordings-window): o conversație într-o limbă pe care modelul o cunoaște slab se vede imediat.
