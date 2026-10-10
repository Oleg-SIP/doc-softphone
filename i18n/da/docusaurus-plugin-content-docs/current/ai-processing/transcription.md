---
title: Transskription
sidebar_position: 1
description: "Vælg den genkender, der gør lyd til tekst: dens adresse, dens model og en tabel over modellerne for hver slags tjeneste."
---

**Indstillinger → Transskription** viser genkenderne: de tjenester, der gør lyd til tekst, for afsluttede samtaler og, for [suffløren](../interface/prompter.md), mens en samtale foregår.

<Shot name="25_transcription" alt="Indstillinger → Transskription: fem genkendere" />

En samtale bliver transskriberet, når du beder om det i [vinduet Optagelser](/interface/recordings), eller af sig selv, hvis **Behandl samtaler automatisk** er slået til under [Behandling](/ai-processing/processing). En genkender på din egen maskine koster intet at køre; en i skyen tager betaling pr. minut lyd.

## Genkendere {#recognisers}
En genkender er en talegenkendelsestjeneste, som telefonen sender lyden til. **Tilføj** tilføjer en; knappen **Prøv** på dens kort tjekker, at tjenesten virkelig svarer. Hver står i listen med sit navn og under det modellen og adressen på sin tjeneste. På billedet er der fem:

| Navn | Model | Adresse |
| --- | --- | --- |
| **X.ai** | *(tom: tjenestens standard)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(ingen)* | `ws://localhost:2700`, en server på denne computer |

De to mærker til højre i en række fortæller, hvad genkenderen er standard for. Uret lyser ved standarden **for udskrifter** — **X.ai** på billedet —, som bruges, når du ikke vælger en anden. Lynet lyser ved standarden **for suffløren** — **Vosk** på billedet. Du kan beholde flere genkendere; rullelisten over en udskrift i [vinduet Optagelser](/interface/recordings#transcript-or-write-up-the-drop-down) viser de udskrifter, hver af dem har lavet.

## Genkenderens kort {#the-recognisers-card}
Et klik på en genkender åbner dens kort.

<Shot name="43_recogniser_card" alt="Kortet for genkenderen X.ai: slags, de to adresser, nøgle, Prøv og standarderne" />

| Felt | Hvad det er |
| --- | --- |
| **Navn** | Navnet i listerne. |
| **Slags** | Tjenestens slags, som afgør, hvordan telefonen taler med den: **OpenAI-kompatibel (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** og tre, der kører på din egen maskine — **Vosk**, **WhisperLive** og **NVIDIA Riva**. **Yandex SpeechKit** tilbydes, hvor landet under [Om](../application/about.md) er Rusland eller et af dets nabolande. |
| **Adresse til udskrifter** | Hvor afsluttede samtaler sendes hen. |
| **Adresse til suffløren** | Hvor den levende lyd går hen, mens en samtale foregår. *Tomt udledes af adressen ved siden af*, som `wss://api.x.ai` på billedet. |
| **Nøgle** | Tjenestens nøgle. *Det ligger i denne computers nøglering, aldrig i en indstillingsfil.* |
| **Prøv** | Spørger tjenesten og fortæller, hvad den svarede, for eksempel *Svarede, og tilbyder 3 modeller*. |
| **Model til udskrifter** og **Model til suffløren** | Modellen, præcis som tjenesten kalder den. *Tomt sender intet modelnavn*, og tjenesten bruger sin egen standard; hvor udbyderen offentliggør en, nævner kortet den. Feltet vises ikke for en slags uden valg. |
| **Standard for transskriptioner** | Gør denne til den genkender, der bruges, når du ikke vælger en anden. |
| **Standard for suffløren** | Gør denne til den genkender, en ny hjælper i suffløren lytter med. |
| **Til** | Slået fra bliver genkenderen stående i listen og bruges ikke. |

**Avancerede indstillinger** åbner resten af kortet. De værdier, der betyder mest:

<Shot name="43b_recogniser_advanced" alt="En genkenders avancerede indstillinger: grænser, hvordan svar klippes, sproget" />

| Felt | Hvad det gør |
| --- | --- |
| **Region** | Tjenestens region, for en tjeneste, der har flere. |
| **Send de to sider hver for sig** | Et opkald optages med de to personer på to kanaler, og det er det, der fortæller genkenderen, hvem der sagde hvad. Slå det fra for en server, der påstår, at den kan det, og ikke kan. |
| **Spørg, hvem der taler** | Skelner mellem personerne inden for én kanal, hvor flere taler på den. |
| **Skriv tal med cifre** | Beløb, datoer og telefonnumre kommer tilbage, som de skrives, i stedet for udskrevet med bogstaver. |
| **Uploadgrænse**, **Længdegrænse** | Den største fil i byte og den længste optagelse i sekunder, som denne telefon sender. |
| **Forespørgsler ad gangen** | Hvor mange forespørgsler der må være i gang på samme tid. |
| **Afslut et svar efter**, **Saml korte svar inden for**, **Pause mellem ture** | For suffløren: hvor længe uden nye ord der afslutter et svar, hvor længe et kort svar venter på det næste for at blive sat sammen med det, og hvor lang en stilhed der afslutter en tur, hvor genkenderen ikke markerer nogen. I millisekunder. |
| **Sprog** | En sprogkode på to bogstaver efter ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lad den være tom, så bestemmer genkenderen — det er det rigtige, medmindre dine opkald er på et sprog, den bliver ved med at høre forkert. |
| **Ekstra** | Én `name = value` pr. linje, sendt uændret til tjenesten. Lad det være tomt, medmindre serveren dokumenterer noget. |
| **Ventetid, minutter** | Hvor længe der ventes på en udskrift. Tomt beregner det ud fra optagelsens længde. |
| **Pris per minut** | Hvad et minut levende lyd koster, efter tjenestens prisliste. Suffløren viser, hvad en session har kostet, og stopper ved sit [månedlige loft](prompter.md#spending). |

## Levende genkendelse til suffløren {#live-recognition-for-the-prompter}
[Suffløren](../interface/prompter.md) har brug for en genkender, der lytter, mens nogen taler, via en strøm i stedet for med en færdig fil. Disse slags kan: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-kompatibel** (med OpenAI's realtidstransskription), **AssemblyAI**, **Soniox** og **Speechmatics** i skyen, **Yandex SpeechKit**, hvor den tilbydes, og **Vosk**, **WhisperLive** og **NVIDIA Riva** på din egen maskine. En genkender på din egen maskine holder den anden parts stemme inden for murene og koster intet.

Sådan bruger du en: åbn dens kort, tjek **Adresse til suffløren** (eller lad den blive udledt), vælg **Model til suffløren**, hvor tjenesten tilbyder flere — de levende modeller er ofte andre end dem til filer, som ElevenLabs' `scribe_v2_realtime` — og tryk på **Prøv**. Sæt flueben ved **Standard for suffløren** for at nye hjælpere lytter med den.

## Hvilken model du skal vælge {#which-model-to-choose}
Tabellen viser talegenkendelsesmodellerne for hver slags i listen **Slags**. Modellerne med **fed** er dem, der er sat op på billedet; for genkenderen X.ai er modellen tom, så tjenestens standard, **`grok-voice-transcribe-2.0`**, er den, der bruges. **Til** fortæller, hvad en model er lavet til: færdige optagelser (*udskrifter*), levende tale til [suffløren](#live-recognition-for-the-prompter) (*sufflør*) eller *begge*.

| Slags og adresse | Model | Til | Hvad den er til |
| --- | --- | --- | --- |
| **OpenAI-kompatibel (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | udskrifter | Den model, OpenAI anbefaler til optaget tale på originalsproget. |
| | **`gpt-4o-transcribe`** | begge | Transskription til almindeligt brug. En ny genkender af denne slags får den. |
| | `gpt-4o-mini-transcribe` | begge | En lettere og billigere variant af den forrige. |
| | `gpt-4o-transcribe-diarize` | udskrifter | Markerer, hvem der taler hvornår. Brug den kun, hvis du har brug for det. |
| | `whisper-1` | udskrifter | Den ældre Whisper-model, bevaret til særlige formål som tidsstempler pr. ord og undertekster. |
| | `gpt-live-transcribe` | sufflør | OpenAI's levende model: ordene kommer, mens de bliver sagt. Telefonen tilbyder den til suffløren. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | begge | Deepgrams bedste model til almindeligt brug, til møder, støjende og flersproget lyd. En ny genkender af denne slags får den. |
| | **`nova-2`** | begge | Den forrige generation; behold den til sprog, som `nova-3` endnu ikke understøtter. |
| | `nova-2-phonecall` | begge | `nova-2` tilpasset den smalle lyd fra en telefonlinje. Engelsk. |
| | `flux-general-en` | sufflør | Lavet til samtale: den hører, når nogen er færdig med at tale. Engelsk. |
| | `flux-general-multi` | sufflør | Det samme på ti sprog, og en samtale må skifte mellem dem. |
| | `enhanced`, `base` | udskrifter | Ældre niveauer; `base` er til store mængder. |
| | `whisper` | udskrifter | Whisper, kørt af Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | udskrifter | Transskription til almindeligt brug på over 90 sprog, med adskillelse af talere. |
| | `scribe_v2_realtime` | sufflør | Den levende udgave af `scribe_v2`. Telefonen tilbyder den til suffløren. |
| | `scribe_v2_medical` | udskrifter | `scribe_v2` tilpasset klinisk lyd. |
| | `scribe_v1` | udskrifter | Første generation; forældet, brug `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | begge | Den mest præcise, til en samtale på ét sprog. En ny genkender af denne slags får den. |
| | `standard` | begge | Hurtigere og billigere, lidt mindre præcis. |
| | `melia-1` | udskrifter | En samtale på flere sprog, der skifter midt i en sætning, kommer tilbage som én udskrift. Kun optagelser, i regionerne EU og USA; endnu uden egen ordbog og talermærker. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | begge | Standarden; 25 sprog. |
| | `grok-voice-transcribe-1.0` | udskrifter | Forældet: tjenesten sender den videre til `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | udskrifter | Over 60 sprog, med adskillelse af talere. |
| | `stt-rt-v5` | sufflør | Levende, på de samme 60+ sprog, og hører, hvor en tur slutter. Telefonen tilbyder den til suffløren. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | begge | Den mest præcise model til optagelser; 18 sprog, og en samtale må skifte mellem dem. |
| | `universal-2` | udskrifter | 99 sprog, billigere; AssemblyAI falder tilbage på den for et sprog, `universal-3-5-pro` ikke kender. |
| | `universal-3-6-pro` | sufflør | AssemblyAI's nyeste levende model, 32 sprog; tjenesten bruger den, når modellen er tom. |
| | `universal-streaming-multilingual` | sufflør | Billigere levende genkendelse på engelsk, spansk, tysk, fransk, portugisisk og italiensk. |
| | `universal-streaming-english` | sufflør | Billigere levende genkendelse, kun engelsk. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | begge | Hovedmodellen, stærk på russisk, også i telefonen. Tilbydes, hvor landet er Rusland eller et af dets nabolande. |
| | `general:rc` | begge | Den næste version af modellen før udgivelsen. |
| | `deferred-general` | udskrifter | Udskudt genkendelse: udskriften kommer senere, for færre penge. |
| **Vosk (på din egen maskine)**<br />`ws://localhost:2700` | *(sat på serveren)* | begge | Gratis og let; kører uden grafikkort. Modellen er den, serveren blev startet med, én pr. sprog, for eksempel `vosk-model-en-us-0.22` eller den lille `vosk-model-small-en-us-0.15`. |
| **WhisperLive (på din egen maskine)**<br />`ws://localhost:9090` | `small` | begge | Whisper over en levende strøm. Størrelsen vælges på kortet: `tiny`, `base`, `small` (det, telefonen tilbyder), `medium`, `large-v3`; jo større, jo mere præcis, og jo mere vil den have et grafikkort. |
| **NVIDIA Riva (på din egen maskine)**<br />`localhost:50051` | *(sat på serveren)* | begge | NVIDIA's taleserver, til en computer med et NVIDIA-grafikkort. Den leverer modeller som Parakeet og Canary. |

Godt at vide, før du vælger:

- **Udskrifter eller sufflør.** En model til levende tale tager ikke imod en færdig fil, og de fleste modeller til filer kan ikke lytte levende. Derfor har et kort to felter, **Model til udskrifter** og **Model til suffløren**.
- **Filstørrelse.** OpenAI tager filer op til 25 MB; X.ai op til 500 MB. En lang samtale kan være større, end en skytjeneste tager imod.
- **Pris.** Skytjenester tager betaling pr. minut lyd, og taksterne afhænger af modellen og ændrer sig; læs dem på tjenestens egen side, før du skifter. En genkender på din egen maskine koster intet at køre.
- **Sprog.** Hver tjeneste har sin egen liste; tjek din, og sæt koden under **Sprog** i genkenderens avancerede indstillinger, hvis den gætter forkert.

En tjenestes liste over modeller ændrer sig ofte. Mangler en model, du ønsker, her, har tjenestens egen dokumentation den aktuelle liste — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — og **Model** er navnet præcis, som tjenesten angiver det.

## Dine egne modeller {#your-own-models}

En genkender behøver ikke være en skytjeneste. Telefonen kan bruge **enhver model, der stilles til rådighed via det OpenAI-kompatible API** — grænsefladen `POST /v1/audio/transcriptions` —, uanset om den kører lokalt på din computer eller på din egen server. Lyden forlader aldrig dine lokaler, der betales intet per minut, og der er ingen grænse for mængden.

For at tilføje en skal du trykke på **Tilføj** og angive:

- serverens **adresse** til og med `/v1`, for eksempel `http://localhost:8000/v1` for selve computeren eller `http://asr.local:8080/v1` for en server i dit netværk;
- **modellens** navn præcis, som serveren viser det, for eksempel `openai/whisper-large-v3-turbo`.

### Hvad der kan bruges {#what-can-be-used}

Det sædvanlige valg er **Whisper**, OpenAIs åbne model til talegenkendelse. Den er gratis at bruge, forstår omkring hundrede sprog og findes i flere størrelser: en lille model kører på en almindelig computer, de store er mærkbart mere præcise og har bedst af et grafikkort.

| Model | Bemærkninger |
| --- | --- |
| `whisper-large-v3` | Den mest præcise Whisper. Til en server med GPU. |
| `openai/whisper-large-v3-turbo` | En hurtigere udgave af `large-v3` med et lille tab af præcision. |
| `Systran/faster-whisper-large-v3` | `large-v3` konverteret til motoren faster-whisper; hurtigere og lettere for hukommelsen. |
| `medium`, `small`, `base` | Mindre Whisper-modeller, til en computer uden grafikkort. |

Whisper er den model, disse servere er bygget op omkring. Nogle af dem kan også stille andre talegenkendelsesmodeller til rådighed, som NVIDIA Parakeet.

### Servere, der tilbyder det OpenAI-kompatible API {#servers-that-offer-the-openai-compatible-api}

Modellen skal køres af en server, der tilbyder det OpenAI-kompatible endepunkt `/v1/audio/transcriptions`. Disse gør:

| Server | Hvad den er |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | En højtydende modelserver. Stiller Whisper til rådighed på `http://localhost:8000/v1`, når den er startet. |
| [Speaches](https://github.com/speaches-ai/speaches) | En server til talemodeller, „Ollama til tale”, bygget på faster-whisper. Indlæser en model, første gang den efterspørges. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Kører Whisper effektivt på en CPU, også Apple silicon. Dens `whisper-server` startes med `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | En direkte erstatning for OpenAI, der kører modeller lokalt. |

Enhver anden server, der tilbyder det samme endepunkt, virker på samme måde. Kræver en server en nøgle, så indtast den som for en skytjeneste.

Før du stoler på en server, så lav en testoptagelse og se på udskriften i [vinduet Optagelser](/interface/recordings): en samtale på et sprog, modellen kender dårligt, afslører det med det samme.
