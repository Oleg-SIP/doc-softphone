---
title: Transskription
sidebar_position: 1
description: "\"Vælg den genkender, der gør lyd til tekst: dens adresse, dens model og en tabel over de modeller, hver tjeneste tilbyder.\""
---

**Indstillinger → Transskription** bestemmer, hvordan lyd bliver til tekst: på hvilket sprog og med hvilken genkender.

<Shot name="25_transcription" alt="Indstillinger → Transskription: sproget og fire genkendere" />

En samtale skrives ud, når du beder om det i [vinduet Optagelser](/recordings/recordings-window), eller af sig selv, hvis **Behandl samtaler automatisk** er slået til under [Behandling](/ai-processing/processing). En genkender på din egen maskine koster intet at køre; en i skyen tager betaling per minut lyd.

## Sprog {#language}

**Sprog** er en sprogkode på to bogstaver efter ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lad den være tom, så bestemmer genkenderen — det er det rigtige, medmindre dine opkald er på et sprog, den bliver ved med at høre forkert.

## Genkendere {#recognisers}

En genkender er en tale-til-tekst-tjeneste, som telefonen sender lyd til. Tryk på **Tilføj** for at tilføje en; formularens knap **Prøv** tjekker, at tjenesten faktisk svarer. Hver står med sit navn og nedenunder modellen og adressen på dens tjeneste. På billedet er der fire:

| Navn | Model | Adresse |
| --- | --- | --- |
| **X.ai** | *(tom: tjenestens standard)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Den, der er markeret **standard** til højre på sin række (**X.ai** på billedet), bruges, når du ikke vælger en anden. Du kan beholde flere. Rullelisten over en udskrift i [vinduet Optagelser](/recordings/recordings-window#the-transcript-and-the-write-up) viser de udskrifter, hver genkender har lavet.

Modellen må gerne være tom. Tjenesten bruger så sin egen standard.

## Hvilken model du skal vælge {#which-model-to-choose}

Tabellen viser tale-til-tekst-modellerne fra de fire tjenester på billedet. Modellerne med **fed** er dem, der er sat op på billedet. For genkenderen X.ai er modellen tom, så tjenestens standard, **`grok-voice-transcribe-2.0`**, er den, der bruges.

| Tjeneste og adresse | Model | Hvad den er til |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Den model, OpenAI anbefaler til optaget tale på det oprindelige sprog. |
| | **`gpt-4o-transcribe`** | Transskription til almindelig brug. |
| | `gpt-4o-mini-transcribe` | En lettere og billigere variant af ovenstående. |
| | `gpt-4o-transcribe-diarize` | Angiver, hvem der taler hvornår. Brug den kun, hvis du har brug for det. |
| | `whisper-1` | Den ældre Whisper-model, beholdt til særlige formål som tidsstempler per ord og undertekster. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transskription til almindelig brug på over 90 sprog, med adskillelse af talere. |
| | `scribe_v2_medical` | Det samme, tilpasset klinisk lyd. |
| | `scribe_v1` | Første generation; forældet, brug `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Deepgrams bedste model til almindelig brug, til møder, støjfyldt og flersproget lyd. |
| | **`nova-2`** | Den forrige generation; behold den til sprog, som `nova-3` endnu ikke understøtter. |
| | `enhanced` | Et ældre niveau med færre fejl end `base`. |
| | `base` | Det ældste niveau, til store mængder. |
| | `whisper` | Whisper, kørt af Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Standarden; 25 sprog. |
| | `grok-voice-transcribe-1.0` | Forældet: tjenesten sender den videre til `2.0`. |

Godt at vide, før du vælger:

- **Filstørrelse.** OpenAI tager filer op til 25 MB; X.ai op til 500 MB. En lang samtale kan være større, end en skytjeneste accepterer.
- **Pris.** Skytjenester tager betaling per minut lyd, og priserne afhænger af modellen og ændrer sig; læs dem på tjenestens egen side, før du skifter.
- **Sprog.** Hver tjeneste har sin egen liste; tjek din, og sæt koden under [Sprog](#language), hvis genkenderen gætter forkert.
- **Realtidsmodeller** som `scribe_v2_realtime` eller Deepgrams `flux` er lavet til livestreams og står ikke i tabellen: telefonen skriver færdige optagelser ud.

En tjenestes modelliste ændrer sig ofte. Mangler en model, du gerne vil have, her, har tjenestens egen dokumentation den aktuelle liste — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; **Model** er navnet præcis, som tjenesten angiver det.

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

Før du stoler på en server, så lav en testoptagelse og se på udskriften i [vinduet Optagelser](/recordings/recordings-window): en samtale på et sprog, modellen kender dårligt, afslører det med det samme.
