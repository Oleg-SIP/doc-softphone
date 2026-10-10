---
title: Transcriptie
sidebar_position: 1
description: "De herkenner kiezen die geluid in tekst omzet: zijn adres, zijn model en een tabel van de modellen van elke soort dienst."
---

**Instellingen → Transcriptie** toont de herkenners: de diensten die geluid in tekst omzetten, voor afgelopen gesprekken en, voor de [souffleur](../interface/prompter.md), terwijl een gesprek bezig is.

<Shot name="25_transcription" alt="Instellingen → Transcriptie: vijf herkenners" />

Een gesprek wordt getranscribeerd als u daarom vraagt in het [venster Opnames](/interface/recordings), of vanzelf als **Gesprekken automatisch verwerken** aan staat onder [Verwerking](/ai-processing/processing). Een herkenner op uw eigen machine kost niets om te draaien; een in de cloud rekent per minuut geluid.

## Herkenners {#recognisers}
Een herkenner is een spraakherkenningsdienst waar de telefoon het geluid naartoe stuurt. Met **Toevoegen** voegt u er een toe; de knop **Testen** op zijn kaart controleert of de dienst echt antwoordt. Elke herkenner staat in de lijst met zijn naam en daaronder het model en het adres van zijn dienst. Op de afbeelding zijn het er vijf:

| Naam | Model | Adres |
| --- | --- | --- |
| **X.ai** | *(leeg: de standaard van de dienst)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(geen)* | `ws://localhost:2700`, een server op deze computer |

De twee tekens rechts in een rij zeggen waarvoor de herkenner de standaard is. De klok brandt bij de standaard **voor transcripties** — **X.ai** op de afbeelding —, die gebruikt wordt als u geen andere kiest. De bliksem brandt bij de standaard **voor de souffleur** — **Vosk** op de afbeelding. U kunt meerdere herkenners houden; de keuzelijst boven een transcriptie in het [venster Opnames](/interface/recordings#transcript-or-write-up-the-drop-down) toont de transcripties die elk ervan gemaakt heeft.

## De kaart van een herkenner {#the-recognisers-card}
Een klik op een herkenner opent zijn kaart.

<Shot name="43_recogniser_card" alt="De kaart van de herkenner X.ai: soort, de twee adressen, sleutel, Testen en de standaarden" />

| Veld | Wat het is |
| --- | --- |
| **Naam** | De naam in de lijsten. |
| **Soort** | De soort dienst, die bepaalt hoe de telefoon ermee praat: **OpenAI-compatibel (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics**, en drie die op uw eigen machine draaien — **Vosk**, **WhisperLive** en **NVIDIA Riva**. **Yandex SpeechKit** wordt aangeboden waar het land onder [Over](../application/about.md) Rusland of een van zijn buurlanden is. |
| **Adres voor transcripties** | Waar afgelopen gesprekken naartoe gaan. |
| **Adres voor de souffleur** | Waar het live geluid naartoe gaat terwijl een gesprek bezig is. *Leeg wordt afgeleid uit het adres ernaast*, zoals `wss://api.x.ai` op de afbeelding. |
| **Sleutel** | De sleutel van de dienst. *Het staat in de sleutelbos van deze computer, nooit in een instellingenbestand.* |
| **Testen** | Vraagt de dienst iets en zegt wat die antwoordde, bijvoorbeeld *Heeft geantwoord, en biedt 3 modellen aan*. |
| **Model voor transcripties** en **Model voor de souffleur** | Het model, precies zoals de dienst het noemt. *Leeg stuurt geen modelnaam mee*, en de dienst gebruikt zijn eigen standaard; waar de leverancier er een publiceert, noemt de kaart die. Voor een soort zonder keuze wordt het veld niet getoond. |
| **Standaard voor transcripties** | Maakt dit de herkenner die gebruikt wordt als u geen andere kiest. |
| **Standaard voor de souffleur** | Maakt dit de herkenner waarmee een nieuwe assistent van de souffleur luistert. |
| **Aan** | Uit blijft de herkenner in de lijst staan en wordt hij niet gebruikt. |

**Geavanceerde instellingen** opent de rest van de kaart. De waarden die het meest uitmaken:

<Shot name="43b_recogniser_advanced" alt="De geavanceerde instellingen van een herkenner: grenzen, hoe antwoorden worden geknipt, de taal" />

| Veld | Wat het doet |
| --- | --- |
| **Regio** | De regio van de dienst, voor een dienst die er meerdere heeft. |
| **De twee kanten apart verzenden** | Een gesprek wordt opgenomen met de twee mensen op twee kanalen, en daaraan weet de herkenner wie wat zei. Zet het uit voor een server die zegt dat hij dit kan en het niet kan. |
| **Vragen wie er spreekt** | Onderscheidt de mensen binnen één kanaal, als er meerdere op spreken. |
| **Getallen in cijfers schrijven** | Bedragen, datums en telefoonnummers komen terug zoals ze geschreven worden in plaats van uitgeschreven. |
| **Uploadgrens**, **Lengtegrens** | Het grootste bestand, in bytes, en de langste opname, in seconden, die deze telefoon verstuurt. |
| **Verzoeken tegelijk** | Hoeveel verzoeken tegelijkertijd onderweg mogen zijn. |
| **Een antwoord beëindigen na**, **Korte antwoorden samenvoegen binnen**, **Pauze tussen beurten** | Voor de souffleur: hoe lang zonder nieuwe woorden een antwoord beëindigt, hoe lang een kort antwoord op het volgende wacht om ermee samengevoegd te worden, en hoe lang een stilte een beurt beëindigt waar de herkenner er geen markeert. In milliseconden. |
| **Taal** | Een taalcode van twee letters volgens ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Laat het leeg en de herkenner beslist — dat is juist, tenzij uw gesprekken in een taal zijn die hij steeds verkeerd verstaat. |
| **Extra's** | Eén `name = value` per regel, ongewijzigd aan de dienst doorgegeven. Laat het leeg, tenzij de server iets documenteert. |
| **Wachten, minuten** | Hoe lang op een transcriptie gewacht wordt. Leeg berekent het uit de lengte van de opname. |
| **Prijs per minuut** | Wat een minuut live geluid kost, volgens de prijslijst van de dienst. De souffleur toont wat een sessie heeft gekost en stopt bij zijn [maandplafond](prompter.md#spending). |

## Live herkenning voor de souffleur {#live-recognition-for-the-prompter}
De [souffleur](../interface/prompter.md) heeft een herkenner nodig die luistert terwijl iemand praat, via een stroom in plaats van met een afgerond bestand. Deze soorten kunnen dat: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-compatibel** (met de realtime transcriptie van OpenAI), **AssemblyAI**, **Soniox** en **Speechmatics** in de cloud, **Yandex SpeechKit** waar het wordt aangeboden, en **Vosk**, **WhisperLive** en **NVIDIA Riva** op uw eigen machine. Een herkenner op uw eigen machine houdt de stem van de andere partij binnen de deur en rekent niets.

Zo gebruikt u er een: open zijn kaart, controleer het **Adres voor de souffleur** (of laat het afleiden), kies het **Model voor de souffleur** waar de dienst er meerdere aanbiedt — de live modellen zijn vaak andere dan die voor bestanden, zoals `scribe_v2_realtime` van ElevenLabs — en druk op **Testen**. Vink **Standaard voor de souffleur** aan om nieuwe assistenten ermee te laten luisteren.

## Welk model u kiest {#which-model-to-choose}
De tabel toont de spraakherkenningsmodellen van elke soort in de lijst **Soort**. De **vetgedrukte** modellen zijn die op de afbeelding zijn ingesteld; bij de herkenner X.ai is het model leeg, dus wordt de standaard van de dienst, **`grok-voice-transcribe-2.0`**, gebruikt. **Voor** zegt waarvoor een model gemaakt is: afgeronde opnames (*transcripties*), live spraak voor de [souffleur](#live-recognition-for-the-prompter) (*souffleur*), of *allebei*.

| Soort en adres | Model | Voor | Waarvoor het dient |
| --- | --- | --- | --- |
| **OpenAI-compatibel (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transcripties | Het model dat OpenAI aanraadt voor opgenomen spraak in de oorspronkelijke taal. |
| | **`gpt-4o-transcribe`** | allebei | Transcriptie voor algemeen gebruik. Een nieuwe herkenner van deze soort krijgt het. |
| | `gpt-4o-mini-transcribe` | allebei | Een lichtere, goedkopere variant van het vorige. |
| | `gpt-4o-transcribe-diarize` | transcripties | Geeft aan wie wanneer spreekt. Gebruik het alleen als u dat nodig hebt. |
| | `whisper-1` | transcripties | Het oudere Whisper-model, bewaard voor bijzonder gebruik zoals tijdstempels per woord en ondertitels. |
| | `gpt-live-transcribe` | souffleur | Het live model van OpenAI: de woorden komen terwijl ze worden uitgesproken. De telefoon biedt het aan voor de souffleur. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | allebei | Het beste algemene model van Deepgram, voor vergaderingen, rumoerig en meertalig geluid. Een nieuwe herkenner van deze soort krijgt het. |
| | **`nova-2`** | allebei | De vorige generatie; houd die voor talen die `nova-3` nog niet ondersteunt. |
| | `nova-2-phonecall` | allebei | `nova-2` afgestemd op het smalle geluid van een telefoonlijn. Engels. |
| | `flux-general-en` | souffleur | Gemaakt voor gesprekken: het hoort wanneer iemand uitgesproken is. Engels. |
| | `flux-general-multi` | souffleur | Hetzelfde in tien talen, en een gesprek mag tussen die talen wisselen. |
| | `enhanced`, `base` | transcripties | Oudere niveaus; `base` is voor grote volumes. |
| | `whisper` | transcripties | Whisper, gedraaid door Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transcripties | Algemene transcriptie in meer dan 90 talen, met scheiding van sprekers. |
| | `scribe_v2_realtime` | souffleur | De live versie van `scribe_v2`. De telefoon biedt die aan voor de souffleur. |
| | `scribe_v2_medical` | transcripties | `scribe_v2` afgestemd op klinisch geluid. |
| | `scribe_v1` | transcripties | De eerste generatie; verouderd, gebruik `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | allebei | Het nauwkeurigst, voor een gesprek in één taal. Een nieuwe herkenner van deze soort krijgt het. |
| | `standard` | allebei | Sneller en goedkoper, iets minder nauwkeurig. |
| | `melia-1` | transcripties | Een gesprek in meerdere talen, dat midden in een zin wisselt, komt terug als één transcriptie. Alleen opnames, in de regio's EU en VS; nog zonder eigen woordenboek en sprekerlabels. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | allebei | De standaard; 25 talen. |
| | `grok-voice-transcribe-1.0` | transcripties | Verouderd: de dienst stuurt het door naar `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transcripties | Meer dan 60 talen, met scheiding van sprekers. |
| | `stt-rt-v5` | souffleur | Live, in dezelfde 60+ talen, en hoort waar een beurt eindigt. De telefoon biedt het aan voor de souffleur. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | allebei | Het nauwkeurigste model voor opnames; 18 talen, en een gesprek mag tussen die talen wisselen. |
| | `universal-2` | transcripties | 99 talen, goedkoper; AssemblyAI valt erop terug voor een taal die `universal-3-5-pro` niet kent. |
| | `universal-3-6-pro` | souffleur | Het nieuwste live model van AssemblyAI, 32 talen; de dienst neemt het als het model leeg is. |
| | `universal-streaming-multilingual` | souffleur | Goedkopere live herkenning in het Engels, Spaans, Duits, Frans, Portugees en Italiaans. |
| | `universal-streaming-english` | souffleur | Goedkopere live herkenning, alleen Engels. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | allebei | Het hoofdmodel, sterk in Russisch, ook aan de telefoon. Wordt aangeboden waar het land Rusland of een van zijn buurlanden is. |
| | `general:rc` | allebei | De volgende versie van het model vóór de release. |
| | `deferred-general` | transcripties | Uitgestelde herkenning: de transcriptie komt later, voor minder geld. |
| **Vosk (op uw eigen machine)**<br />`ws://localhost:2700` | *(op de server ingesteld)* | allebei | Gratis en licht; draait zonder grafische kaart. Het model is dat waarmee de server gestart is, één per taal, bijvoorbeeld `vosk-model-nl-spraakherkenning-0.6` of het kleine `vosk-model-small-nl-0.22`. |
| **WhisperLive (op uw eigen machine)**<br />`ws://localhost:9090` | `small` | allebei | Whisper via een live stroom. De grootte kiest u op de kaart: `tiny`, `base`, `small` (wat de telefoon aanbiedt), `medium`, `large-v3`; hoe groter, hoe nauwkeuriger, en hoe meer het een grafische kaart wil. |
| **NVIDIA Riva (op uw eigen machine)**<br />`localhost:50051` | *(op de server ingesteld)* | allebei | De spraakserver van NVIDIA, voor een computer met een grafische kaart van NVIDIA. Hij levert modellen zoals Parakeet en Canary. |

Goed om te weten voordat u kiest:

- **Transcripties of souffleur.** Een model voor live spraak neemt geen afgerond bestand aan, en de meeste modellen voor bestanden kunnen niet live luisteren. Daarom heeft een kaart twee velden, **Model voor transcripties** en **Model voor de souffleur**.
- **Bestandsgrootte.** OpenAI neemt bestanden tot 25 MB aan; X.ai tot 500 MB. Een lang gesprek kan groter zijn dan een clouddienst aanneemt.
- **Prijs.** Clouddiensten rekenen per minuut geluid, en de tarieven verschillen per model en veranderen; lees ze op de pagina van de dienst zelf voordat u overstapt. Een herkenner op uw eigen machine kost niets om te draaien.
- **Talen.** Elke dienst heeft zijn eigen lijst; controleer de uwe en vul de code in bij **Taal** in de geavanceerde instellingen van de herkenner als hij verkeerd gokt.

De lijst met modellen van een dienst verandert vaak. Ontbreekt hier een model dat u wilt, dan staat de actuele lijst in de documentatie van de dienst zelf — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — en het **Model** is de naam precies zoals de dienst die geeft.

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
