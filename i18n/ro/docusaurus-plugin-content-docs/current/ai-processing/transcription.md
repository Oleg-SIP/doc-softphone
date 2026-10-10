---
title: Transcriere
sidebar_position: 1
description: "Alegerea recunoscătorului care transformă sunetul în text: adresa lui, modelul lui și un tabel cu modelele fiecărui fel de serviciu."
---

**Setări → Transcriere** enumeră recunoscătoarele: serviciile care transformă sunetul în text, pentru conversațiile încheiate și, pentru [sufleur](../interface/prompter.md), în timpul unei conversații.

<Shot name="25_transcription" alt="Setări → Transcriere: cinci recunoscătoare" />

O conversație este transcrisă când cereți acest lucru în [fereastra Înregistrări](/interface/recordings), sau de la sine, dacă în [Prelucrare](/ai-processing/processing) este pornit **Prelucrează conversațiile automat**. Un recunoscător pe propria dumneavoastră mașină nu costă nimic; unul în cloud taxează minutul de sunet.

## Recunoscătoare {#recognisers}
Un recunoscător este un serviciu de recunoaștere a vorbirii căruia telefonul îi trimite sunetul. **Adaugă** adaugă unul nou; butonul **Verifică** de pe fișa lui verifică dacă serviciul chiar răspunde. Fiecare apare în listă cu numele său și, dedesubt, cu modelul și adresa serviciului său. În imagine sunt cinci:

| Nume | Model | Adresă |
| --- | --- | --- |
| **X.ai** | *(gol: modelul implicit al serviciului)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(niciunul)* | `ws://localhost:2700`, un server pe acest calculator |

Cele două semne din dreapta unui rând spun pentru ce este recunoscătorul implicit. Ceasul se aprinde la cel implicit **pentru transcrieri** — **X.ai** în imagine —, folosit când nu alegeți altul. Fulgerul se aprinde la cel implicit **pentru sufleur** — **Vosk** în imagine. Puteți păstra mai multe recunoscătoare; lista derulantă de deasupra unei transcrieri din [fereastra Înregistrări](/interface/recordings#transcript-or-write-up-the-drop-down) arată transcrierile făcute de fiecare dintre ele.

## Fișa recunoscătorului {#the-recognisers-card}
Un clic pe un recunoscător îi deschide fișa.

<Shot name="43_recogniser_card" alt="Fișa recunoscătorului X.ai: fel, cele două adrese, cheie, Verifică și valorile implicite" />

| Câmp | Ce este |
| --- | --- |
| **Nume** | Numele din liste. |
| **Fel** | Felul serviciului, care hotărăște cum vorbește telefonul cu el: **Compatibil OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** și trei care rulează pe propria dumneavoastră mașină — **Vosk**, **WhisperLive** și **NVIDIA Riva**. **Yandex SpeechKit** este oferit când țara aleasă în [Despre](../application/about.md) este Rusia sau una dintre vecinele ei. |
| **Adresă pentru transcrieri** | Unde sunt trimise conversațiile încheiate. |
| **Adresă pentru sufleur** | Unde merge sunetul în direct în timpul unei conversații. *Gol se deduce din adresa alăturată*, ca `wss://api.x.ai` în imagine. |
| **Cheie** | Cheia serviciului. *Stă în portcheiul acestui calculator, niciodată într-un fișier de setări.* |
| **Verifică** | Întreabă serviciul și spune ce a răspuns, de exemplu *A răspuns și oferă 3 modele*. |
| **Model pentru transcrieri** și **Model pentru sufleur** | Modelul, exact cum îl numește serviciul. *Gol nu trimite niciun nume de model*, iar serviciul folosește modelul său implicit; acolo unde furnizorul publică unul, fișa îl numește. Câmpul nu apare la un fel care nu oferă alegere. |
| **Implicit pentru transcrieri** | Îl face recunoscătorul folosit când nu alegeți altul. |
| **Implicit pentru sufleur** | Îl face recunoscătorul cu care ascultă un asistent nou al sufleurului. |
| **Pornit** | Oprit, recunoscătorul rămâne în listă și nu este folosit. |

**Setări avansate** deschide restul fișei. Valorile care contează cel mai mult:

<Shot name="43b_recogniser_advanced" alt="Setările avansate ale unui recunoscător: limite, cum se taie replicile, limba" />

| Câmp | Ce face |
| --- | --- |
| **Regiune** | Regiunea serviciului, pentru unul care are mai multe. |
| **Trimite cele două părți separat** | Un apel este înregistrat cu cele două persoane pe două canale, iar din asta știe recunoscătorul cine ce a spus. Opriți-l pentru un server care spune că poate face asta și nu poate. |
| **Întreabă cine vorbește** | Deosebește persoanele din același canal, când vorbesc mai multe pe el. |
| **Scrie numerele cu cifre** | Sumele, datele și numerele de telefon vin înapoi așa cum se scriu, nu în litere. |
| **Limita de încărcare**, **Limita de durată** | Cel mai mare fișier, în octeți, și cea mai lungă înregistrare, în secunde, pe care le trimite acest telefon. |
| **Cereri deodată** | Câte cereri pot fi în desfășurare în același timp. |
| **Încheie o replică după**, **Unește replicile scurte în**, **Pauza dintre replici** | Pentru sufleur: cât timp fără cuvinte noi încheie o replică, cât așteaptă o replică scurtă pe următoarea ca să fie unită cu ea și câtă tăcere încheie o intervenție acolo unde recunoscătorul nu o marchează. În milisecunde. |
| **Limbă** | Un cod de limbă din două litere conform ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lăsați-l gol și decide recunoscătorul — este bine așa, în afară de cazul în care apelurile dumneavoastră sunt într-o limbă pe care o aude mereu greșit. |
| **Suplimente** | Câte un `name = value` pe rând, transmis serviciului ca atare. Lăsați gol, dacă serverul nu documentează ceva. |
| **Așteptare, minute** | Cât să se aștepte o transcriere. Gol o calculează din durata înregistrării. |
| **Preț pe minut** | Cât costă un minut de sunet în direct, după lista de prețuri a serviciului. Sufleurul arată cât a costat o sesiune și se oprește la [plafonul lunar](prompter.md#spending). |

## Recunoaștere în direct pentru sufleur {#live-recognition-for-the-prompter}
[Sufleurul](../interface/prompter.md) are nevoie de un recunoscător care ascultă în timp ce cineva vorbește, printr-un flux, nu cu un fișier încheiat. Aceste feluri pot: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Compatibil OpenAI** (cu transcrierea în timp real a OpenAI), **AssemblyAI**, **Soniox** și **Speechmatics** în cloud, **Yandex SpeechKit** acolo unde este oferit, și **Vosk**, **WhisperLive** și **NVIDIA Riva** pe propria dumneavoastră mașină. Un recunoscător pe propria mașină păstrează vocea interlocutorului în casă și nu costă nimic.

Ca să folosiți unul: deschideți-i fișa, verificați **Adresă pentru sufleur** (sau lăsați-o să se deducă), alegeți **Model pentru sufleur** acolo unde serviciul oferă mai multe — modelele în direct diferă adesea de cele pentru fișiere, cum e `scribe_v2_realtime` la ElevenLabs — și apăsați **Verifică**. Bifați **Implicit pentru sufleur** ca asistenții noi să asculte cu el.

## Ce model să alegeți {#which-model-to-choose}
Tabelul enumeră modelele de recunoaștere a vorbirii ale fiecărui fel din lista **Fel**. Modelele cu **aldine** sunt cele configurate în imagine; la recunoscătorul X.ai modelul este gol, așa că se folosește modelul implicit al serviciului, **`grok-voice-transcribe-2.0`**. **Pentru** spune pentru ce este făcut un model: pentru înregistrări încheiate (*transcrieri*), pentru vorbirea în direct a [sufleurului](#live-recognition-for-the-prompter) (*sufleur*) sau pentru *amândouă*.

| Fel și adresă | Model | Pentru | La ce folosește |
| --- | --- | --- | --- |
| **Compatibil OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transcrieri | Modelul pe care OpenAI îl recomandă pentru vorbirea înregistrată în limba ei originală. |
| | **`gpt-4o-transcribe`** | amândouă | Transcriere de uz general. Un recunoscător nou de acest fel îl primește. |
| | `gpt-4o-mini-transcribe` | amândouă | O variantă mai ușoară și mai ieftină a celui de mai sus. |
| | `gpt-4o-transcribe-diarize` | transcrieri | Marchează cine vorbește și când. Folosiți-l doar dacă aveți nevoie. |
| | `whisper-1` | transcrieri | Vechiul model Whisper, păstrat pentru utilizări speciale, ca marcajele de timp pe cuvânt și subtitrările. |
| | `gpt-live-transcribe` | sufleur | Modelul în direct al OpenAI: cuvintele vin pe măsură ce sunt rostite. Telefonul îl oferă pentru sufleur. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | amândouă | Cel mai bun model de uz general al Deepgram, pentru ședințe, sunet zgomotos și multilingv. Un recunoscător nou de acest fel îl primește. |
| | **`nova-2`** | amândouă | Generația anterioară; păstrați-o pentru limbile pe care `nova-3` nu le suportă încă. |
| | `nova-2-phonecall` | amândouă | `nova-2` reglat pentru sunetul îngust al unei linii telefonice. Engleză. |
| | `flux-general-en` | sufleur | Făcut pentru conversație: aude când cineva a terminat de vorbit. Engleză. |
| | `flux-general-multi` | sufleur | Același lucru în zece limbi, iar conversația poate trece de la una la alta. |
| | `enhanced`, `base` | transcrieri | Niveluri mai vechi; `base` este pentru volume mari. |
| | `whisper` | transcrieri | Whisper, rulat de Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transcrieri | Transcriere de uz general în peste 90 de limbi, cu separarea vorbitorilor. |
| | `scribe_v2_realtime` | sufleur | Versiunea în direct a `scribe_v2`. Telefonul o oferă pentru sufleur. |
| | `scribe_v2_medical` | transcrieri | `scribe_v2` reglat pentru sunet clinic. |
| | `scribe_v1` | transcrieri | Prima generație; învechită, folosiți `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | amândouă | Cel mai precis, pentru o conversație într-o singură limbă. Un recunoscător nou de acest fel îl primește. |
| | `standard` | amândouă | Mai rapid și mai ieftin, puțin mai puțin precis. |
| | `melia-1` | transcrieri | O conversație în mai multe limbi, care schimbă limba în mijlocul frazei, vine înapoi ca o singură transcriere. Doar înregistrări, în regiunile UE și SUA; deocamdată fără dicționar propriu și etichete de vorbitori. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | amândouă | Modelul implicit; 25 de limbi. |
| | `grok-voice-transcribe-1.0` | transcrieri | Învechit: serviciul îl redirecționează spre `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transcrieri | Peste 60 de limbi, cu separarea vorbitorilor. |
| | `stt-rt-v5` | sufleur | În direct, în aceleași peste 60 de limbi, și aude unde se termină o intervenție. Telefonul îl oferă pentru sufleur. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | amândouă | Cel mai precis model pentru înregistrări; 18 limbi, iar conversația poate trece de la una la alta. |
| | `universal-2` | transcrieri | 99 de limbi, mai ieftin; AssemblyAI trece la el pentru o limbă pe care `universal-3-5-pro` nu o cunoaște. |
| | `universal-3-6-pro` | sufleur | Cel mai nou model în direct al AssemblyAI, 32 de limbi; serviciul îl folosește când modelul este gol. |
| | `universal-streaming-multilingual` | sufleur | Recunoaștere în direct mai ieftină în engleză, spaniolă, germană, franceză, portugheză și italiană. |
| | `universal-streaming-english` | sufleur | Recunoaștere în direct mai ieftină, doar în engleză. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | amândouă | Modelul principal, puternic în rusă, inclusiv la telefon. Oferit când țara este Rusia sau una dintre vecinele ei. |
| | `general:rc` | amândouă | Următoarea versiune a modelului înainte de lansare. |
| | `deferred-general` | transcrieri | Recunoaștere amânată: transcrierea vine mai târziu, pe bani mai puțini. |
| **Vosk (pe propria dumneavoastră mașină)**<br />`ws://localhost:2700` | *(se setează pe server)* | amândouă | Gratuit și ușor; rulează fără placă video. Modelul este cel cu care a fost pornit serverul, câte unul pe limbă, de exemplu `vosk-model-en-us-0.22` sau micul `vosk-model-small-en-us-0.15`. |
| **WhisperLive (pe propria dumneavoastră mașină)**<br />`ws://localhost:9090` | `small` | amândouă | Whisper pe un flux în direct. Mărimea se alege pe fișă: `tiny`, `base`, `small` (cea oferită de telefon), `medium`, `large-v3`; cu cât e mai mare, cu atât e mai precis și cu atât îi trebuie mai mult o placă video. |
| **NVIDIA Riva (pe propria dumneavoastră mașină)**<br />`localhost:50051` | *(se setează pe server)* | amândouă | Serverul de vorbire NVIDIA, pentru un calculator cu placă video NVIDIA. Servește modele ca Parakeet și Canary. |

Ce e bine de știut înainte de a alege:

- **Transcrieri sau sufleur.** Un model făcut pentru vorbirea în direct nu primește un fișier încheiat, iar majoritatea modelelor pentru fișiere nu pot asculta în direct. De aceea fișa are două câmpuri, **Model pentru transcrieri** și **Model pentru sufleur**.
- **Mărimea fișierului.** OpenAI acceptă fișiere de până la 25 MB; X.ai de până la 500 MB. O conversație lungă poate fi mai mare decât acceptă un serviciu în cloud.
- **Preț.** Serviciile în cloud taxează minutul de sunet, iar tarifele diferă după model și se schimbă; citiți-le pe pagina serviciului înainte să treceți la altul. Un recunoscător pe propria mașină nu costă nimic.
- **Limbi.** Fiecare serviciu are propria listă; verificați-o pe a dumneavoastră și setați codul în **Limbă**, în setările avansate ale recunoscătorului, dacă ghicește greșit.

Lista de modele a unui serviciu se schimbă des. Dacă lipsește aici un model pe care îl doriți, documentația serviciului are lista la zi — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — iar **Model** este numele exact cum îl dă serviciul.

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

Înainte să vă bazați pe un server, faceți o înregistrare de probă și uitați-vă la transcriere în [fereastra Înregistrări](/interface/recordings): o conversație într-o limbă pe care modelul o cunoaște slab se vede imediat.
