---
title: Transcriptie
sidebar_position: 1
description: "\"De herkenner kiezen die audio in tekst omzet: zijn adres, zijn model, en een tabel van de modellen die elke dienst biedt.\""
---

**Instellingen → Transcriptie** bepaalt hoe audio tekst wordt: in welke taal en door welke herkenner.

<Shot name="25_transcription" alt="Instellingen → Transcriptie: de taal en vier herkenners" />

Een gesprek wordt uitgeschreven als u erom vraagt in het [venster Opnames](/interface/recordings), of vanzelf als **Gesprekken automatisch verwerken** aan staat bij [Verwerking](/ai-processing/processing). Een herkenner op uw eigen machine kost niets; een in de cloud rekent per minuut audio.

## Taal {#language}

**Taal** is een taalcode van twee letters volgens ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Laat het leeg en de herkenner beslist — dat is juist, tenzij uw gesprekken in een taal zijn die hij steeds verkeerd verstaat.

## Herkenners {#recognisers}

Een herkenner is een spraak-naar-tekstdienst waarnaar de telefoon audio stuurt. Druk op **Toevoegen** om er een toe te voegen; de knop **Testen** in het formulier controleert of de dienst echt antwoordt. Elk staat in de lijst met zijn naam en daaronder het model en het adres van de dienst. Op de afbeelding zijn het er vier:

| Naam | Model | Adres |
| --- | --- | --- |
| **X.ai** | *(leeg: het standaardmodel van de dienst)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

De herkenner die rechts op zijn regel als **standaard** is gemarkeerd (**X.ai** op de afbeelding) wordt gebruikt als u geen andere kiest. U kunt er meerdere houden. De keuzelijst boven een transcript in het [venster Opnames](/interface/recordings#transcript-or-write-up-the-drop-down) toont de transcripten van elke herkenner.

Het model mag leeg blijven. De dienst gebruikt dan zijn eigen standaard.

## Welk model u kiest {#which-model-to-choose}

De tabel toont de spraak-naar-tekstmodellen van de vier diensten op de afbeelding. De modellen in **vet** zijn de op de afbeelding ingestelde. Voor de herkenner X.ai is het model leeg, dus wordt het standaardmodel van de dienst gebruikt, **`grok-voice-transcribe-2.0`**.

| Dienst en adres | Model | Waarvoor |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Het model dat OpenAI aanbeveelt voor opgenomen spraak in de oorspronkelijke taal. |
| | **`gpt-4o-transcribe`** | Algemene transcriptie. |
| | `gpt-4o-mini-transcribe` | Een lichtere, goedkopere variant van het vorige. |
| | `gpt-4o-transcribe-diarize` | Geeft aan wie wanneer spreekt. Gebruik het alleen als u dat nodig hebt. |
| | `whisper-1` | Het oudere Whisper-model, behouden voor speciale toepassingen zoals tijdstempels per woord en ondertitels. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Algemene transcriptie in meer dan 90 talen, met sprekerscheiding. |
| | `scribe_v2_medical` | Hetzelfde, afgestemd op klinische audio. |
| | `scribe_v1` | De eerste generatie; verouderd, gebruik `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Het beste algemene model van Deepgram, voor vergaderingen, rumoerige en meertalige audio. |
| | **`nova-2`** | De vorige generatie; houd die voor talen die `nova-3` nog niet ondersteunt. |
| | `enhanced` | Een ouder niveau met minder fouten dan `base`. |
| | `base` | Het oudste niveau, voor grote hoeveelheden. |
| | `whisper` | Whisper, gedraaid door Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | De standaard; 25 talen. |
| | `grok-voice-transcribe-1.0` | Verouderd: de dienst stuurt het door naar `2.0`. |

Goed om te weten voordat u kiest:

- **Bestandsgrootte.** OpenAI neemt bestanden tot 25 MB aan; X.ai tot 500 MB. Een lang gesprek kan groter zijn dan een clouddienst accepteert.
- **Prijs.** Clouddiensten rekenen per minuut audio, en de tarieven verschillen per model en veranderen; lees ze op de eigen pagina van de dienst voordat u overstapt.
- **Talen.** Elke dienst heeft zijn eigen lijst; controleer de uwe, en stel de code bij [Taal](#language) in als de herkenner verkeerd gokt.
- **Realtimemodellen** zoals `scribe_v2_realtime` of `flux` van Deepgram zijn gemaakt voor livestreams en staan niet in de tabel: de telefoon schrijft afgeronde opnames uit.

De lijst met modellen van een dienst verandert vaak. Als een model dat u wilt hier ontbreekt, heeft de eigen documentatie van de dienst de actuele lijst — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; het **Model** is de naam precies zoals de dienst hem geeft.

## Uw eigen modellen {#your-own-models}

Een herkenner hoeft geen clouddienst te zijn. De telefoon kan **elk model gebruiken dat via de OpenAI-compatibele API wordt aangeboden** — de interface `POST /v1/audio/transcriptions` —, of het nu lokaal op uw computer draait of op een eigen server. De audio verlaat uw pand nooit, er wordt niets per minuut gerekend en er is geen limiet op de hoeveelheid.

Om er een toe te voegen, drukt u op **Toevoegen** en geeft u op:

- het **adres** van de server, tot en met `/v1`, bijvoorbeeld `http://localhost:8000/v1` voor de computer zelf of `http://asr.local:8080/v1` voor een server in uw netwerk;
- de naam van het **model** precies zoals de server die vermeldt, bijvoorbeeld `openai/whisper-large-v3-turbo`.

### Wat er gebruikt kan worden {#what-can-be-used}

De gebruikelijke keuze is **Whisper**, het open spraakherkenningsmodel van OpenAI. Het is gratis te gebruiken, verstaat ongeveer honderd talen en bestaat in verschillende formaten: een klein model draait op een gewone computer, de grote zijn merkbaar nauwkeuriger en krijgen het best een grafische kaart.

| Model | Opmerkingen |
| --- | --- |
| `whisper-large-v3` | De nauwkeurigste Whisper. Voor een server met een GPU. |
| `openai/whisper-large-v3-turbo` | Een snellere versie van `large-v3` met een klein verlies aan nauwkeurigheid. |
| `Systran/faster-whisper-large-v3` | `large-v3` omgezet voor de engine faster-whisper; sneller en zuiniger met geheugen. |
| `medium`, `small`, `base` | Kleinere Whisper-modellen, voor een computer zonder grafische kaart. |

Whisper is het model waaromheen deze servers zijn gebouwd. Sommige kunnen ook andere spraakherkenningsmodellen aanbieden, zoals NVIDIA Parakeet.

### Servers met de OpenAI-compatibele API {#servers-that-offer-the-openai-compatible-api}

Het model moet worden gedraaid door een server die het OpenAI-compatibele eindpunt `/v1/audio/transcriptions` aanbiedt. Deze doen dat:

| Server | Wat het is |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Een krachtige modelserver. Biedt na het starten Whisper aan op `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Een server voor spraakmodellen, „Ollama voor spraak”, gebouwd op faster-whisper. Laadt een model zodra het voor het eerst wordt gevraagd. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Draait Whisper efficiënt op een CPU, ook op Apple silicon. De `whisper-server` wordt gestart met `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Een rechtstreekse vervanger van OpenAI die modellen lokaal draait. |

Elke andere server die hetzelfde eindpunt aanbiedt, werkt op dezelfde manier. Als een server een sleutel vraagt, voer die dan in zoals bij een clouddienst.

Maak voordat u op een server vertrouwt een testopname en bekijk het transcript in het [venster Opnames](/interface/recordings): een gesprek in een taal die het model slecht kent, verraadt dat meteen.
