---
title: Prepis
sidebar_position: 1
description: "\"Izberite razpoznavalnik, ki zvok spremeni v besedilo: njegov naslov, model in tabelo modelov, ki jih ponuja vsaka storitev.\""
---

**Nastavitve → Prepis** določa, kako zvok postane besedilo: v katerem jeziku in s katerim razpoznavalnikom.

<Shot name="25_transcription" alt="Nastavitve → Prepis: jezik in štirje razpoznavalniki" />

Pogovor se prepiše, ko to zahtevate v [oknu Posnetki](/recordings/recordings-window), ali sam, če je v [Obdelavi](/ai-processing/processing) vklopljeno **Obdeluj pogovore samodejno**. Razpoznavalnik na lastnem računalniku ne stane nič; tisti v oblaku zaračuna po minuti zvoka.

## Jezik {#language}

**Jezik** je dvočrkovna koda jezika po ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Pustite jo prazno in odloči razpoznavalnik — to je prav, razen če so vaši klici v jeziku, ki ga stalno narobe sliši.

## Razpoznavalniki {#recognisers}

Razpoznavalnik je storitev za pretvorbo govora v besedilo, ki ji telefon pošilja zvok. Pritisnite **Dodaj**, da ga dodate; gumb **Preveri** v obrazcu preveri, ali storitev res odgovarja. Vsak je naveden s svojim imenom, pod njim pa z modelom in naslovom svoje storitve. Na sliki so štirje:

| Ime | Model | Naslov |
| --- | --- | --- |
| **X.ai** | *(prazno: privzeti model storitve)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Tisti, ki je desno v svoji vrstici označen kot **Privzeto** (na sliki **X.ai**), se uporabi, ko ne izberete drugega. Imate jih lahko več. Spustni seznam nad prepisom v [oknu Posnetki](/recordings/recordings-window#the-transcript-and-the-write-up) navaja prepise, ki jih je naredil vsak razpoznavalnik.

Model lahko ostane prazen. Storitev nato uporabi svojega privzetega.

## Kateri model izbrati {#which-model-to-choose}

Tabela navaja modele za pretvorbo govora v besedilo štirih storitev s slike. Modeli v **krepkem** tisku so tisti, ki so nastavljeni na sliki. Pri razpoznavalniku X.ai je model prazen, zato se uporabi privzeti model storitve, **`grok-voice-transcribe-2.0`**.

| Storitev in naslov | Model | Za kaj je |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Model, ki ga OpenAI priporoča za posnet govor v izvirnem jeziku. |
| | **`gpt-4o-transcribe`** | Splošni prepis. |
| | `gpt-4o-mini-transcribe` | Lažja, cenejša različica zgornjega. |
| | `gpt-4o-transcribe-diarize` | Označi, kdo kdaj govori. Uporabite ga le, če to potrebujete. |
| | `whisper-1` | Starejši model Whisper, ohranjen za posebne namene, kot so časovne oznake besed in podnapisi. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Splošni prepis v več kot 90 jezikih, z ločevanjem govorcev. |
| | `scribe_v2_medical` | Enako, prilagojeno za klinični zvok. |
| | `scribe_v1` | Prva generacija; opuščen, uporabite `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Najboljši splošni model Deepgrama, za sestanke, hrupen in večjezičen zvok. |
| | **`nova-2`** | Prejšnja generacija; obdržite jo za jezike, ki jih `nova-3` še ne podpira. |
| | `enhanced` | Starejša stopnja z manj napakami kot `base`. |
| | `base` | Najstarejša stopnja, za velike količine. |
| | `whisper` | Whisper, ki ga poganja Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Privzeti; 25 jezikov. |
| | `grok-voice-transcribe-1.0` | Opuščen: storitev ga preusmeri na `2.0`. |

Kaj je dobro vedeti pred izbiro:

- **Velikost datoteke.** OpenAI sprejme datoteke do 25 MB; X.ai do 500 MB. Dolg pogovor je lahko večji, kot ga storitev v oblaku sprejme.
- **Cena.** Storitve v oblaku zaračunavajo po minuti zvoka, cene pa se razlikujejo po modelu in se spreminjajo; preberite jih na strani storitve, preden zamenjate.
- **Jeziki.** Vsaka storitev ima svoj seznam; preverite svojega in nastavite kodo v polju [Jezik](#language), če razpoznavalnik ugiba narobe.
- **Modeli v realnem času**, kot sta `scribe_v2_realtime` ali Deepgramov `flux`, so narejeni za žive tokove in jih ni v tabeli: telefon prepisuje dokončane posnetke.

Seznam modelov storitve se pogosto spreminja. Če model, ki ga želite, tukaj manjka, je trenutni seznam v dokumentaciji same storitve — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — **Model** je ime natanko tako, kot ga navaja storitev.

## Lastni modeli {#your-own-models}

Razpoznavalnik ni nujno storitev v oblaku. Telefon lahko uporabi **kateri koli model, ki je na voljo prek API-ja, združljivega z OpenAI** — vmesnika `POST /v1/audio/transcriptions` —, ne glede na to, ali teče krajevno na vašem računalniku ali na lastnem strežniku. Zvok nikoli ne zapusti vaših prostorov, nič se ne zaračunava po minuti in količina ni omejena.

Če ga želite dodati, pritisnite **Dodaj** in vpišite:

- **naslov** strežnika, vse do vključno `/v1`, na primer `http://localhost:8000/v1` za sam računalnik ali `http://asr.local:8080/v1` za strežnik v vašem omrežju;
- ime **modela** natanko tako, kot ga navaja strežnik, na primer `openai/whisper-large-v3-turbo`.

### Kaj je mogoče uporabiti {#what-can-be-used}

Običajna izbira je **Whisper**, odprti model za razpoznavanje govora podjetja OpenAI. Uporaba je brezplačna, razume okoli sto jezikov in obstaja v več velikostih: majhen model teče na običajnem računalniku, veliki so opazno natančnejši in jim je najbolje dati grafično kartico.

| Model | Opombe |
| --- | --- |
| `whisper-large-v3` | Najnatančnejši Whisper. Za strežnik z GPU. |
| `openai/whisper-large-v3-turbo` | Hitrejša različica `large-v3` z majhno izgubo natančnosti. |
| `Systran/faster-whisper-large-v3` | `large-v3`, pretvorjen za pogon faster-whisper; hitrejši in varčnejši s pomnilnikom. |
| `medium`, `small`, `base` | Manjši modeli Whisper, za računalnik brez grafične kartice. |

Whisper je model, okoli katerega so ti strežniki zgrajeni. Nekateri od njih lahko ponujajo tudi druge modele za razpoznavanje govora, na primer NVIDIA Parakeet.

### Strežniki, ki ponujajo API, združljiv z OpenAI {#servers-that-offer-the-openai-compatible-api}

Model mora poganjati strežnik, ki ponuja končno točko `/v1/audio/transcriptions`, združljivo z OpenAI. Ti jo:

| Strežnik | Kaj je |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Zmogljiv strežnik modelov. Ko se zažene, ponuja Whisper na `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Strežnik za govorne modele, »Ollama za govor«, zgrajen na faster-whisper. Model naloži, ko je prvič zahtevan. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Učinkovito poganja Whisper na CPU, tudi na Apple silicon. Njegov `whisper-server` se zažene z `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Neposredna zamenjava za OpenAI, ki modele poganja krajevno. |

Enako deluje kateri koli drug strežnik, ki ponuja isto končno točko. Če strežnik potrebuje ključ, ga vpišite kot pri storitvi v oblaku.

Preden se zanesete na strežnik, naredite preizkusni posnetek in poglejte prepis v [oknu Posnetki](/recordings/recordings-window): pogovor v jeziku, ki ga model slabo pozna, to pokaže takoj.
