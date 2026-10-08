---
title: Transkripsjon
sidebar_position: 1
description: "\"Velg gjenkjenneren som gjør lyd om til tekst: adressen, modellen og en tabell over modellene hver tjeneste tilbyr.\""
---

**Innstillinger → Transkripsjon** bestemmer hvordan lyd blir tekst: på hvilket språk, og med hvilken gjenkjenner.

<Shot name="25_transcription" alt="Innstillinger → Transkripsjon: språket og fire gjenkjennere" />

En samtale skrives ut når du ber om det i [vinduet Opptak](/interface/recordings), eller av seg selv hvis **Behandle samtaler automatisk** er på under [Behandling](/ai-processing/processing). En gjenkjenner på din egen maskin koster ingenting å kjøre; en i skyen tar betalt per minutt lyd.

## Språk {#language}

**Språk** er en språkkode på to bokstaver etter ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). La den være tom, så bestemmer gjenkjenneren — det er riktig, med mindre samtalene dine er på et språk den stadig hører feil.

## Gjenkjennere {#recognisers}

En gjenkjenner er en tale-til-tekst-tjeneste som telefonen sender lyd til. Trykk på **Legg til** for å legge til en; skjemaets knapp **Prøv** sjekker at tjenesten faktisk svarer. Hver står oppført med navnet og under det modellen og adressen til tjenesten. På bildet er det fire:

| Navn | Modell | Adresse |
| --- | --- | --- |
| **X.ai** | *(tomt: tjenestens standard)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Den som er merket **standard** til høyre på raden (**X.ai** på bildet), brukes når du ikke velger en annen. Du kan beholde flere. Nedtrekkslisten over en utskrift i [vinduet Opptak](/interface/recordings#transcript-or-write-up-the-drop-down) viser utskriftene hver gjenkjenner har laget.

Modellen kan stå tom. Tjenesten bruker da sin egen standard.

## Hvilken modell du bør velge {#which-model-to-choose}

Tabellen viser tale-til-tekst-modellene til de fire tjenestene på bildet. Modellene i **fet** skrift er de som er satt opp på bildet. For gjenkjenneren X.ai er modellen tom, så tjenestens standard, **`grok-voice-transcribe-2.0`**, er den som brukes.

| Tjeneste og adresse | Modell | Hva den er til |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Modellen OpenAI anbefaler for innspilt tale på originalspråket. |
| | **`gpt-4o-transcribe`** | Transkripsjon til allmenn bruk. |
| | `gpt-4o-mini-transcribe` | En lettere og billigere variant av den over. |
| | `gpt-4o-transcribe-diarize` | Angir hvem som snakker når. Bruk den bare hvis du trenger det. |
| | `whisper-1` | Den eldre Whisper-modellen, beholdt for spesielle formål som tidsstempler per ord og undertekster. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transkripsjon til allmenn bruk på over 90 språk, med atskillelse av talere. |
| | `scribe_v2_medical` | Det samme, tilpasset klinisk lyd. |
| | `scribe_v1` | Første generasjon; utgått, bruk `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Deepgrams beste modell til allmenn bruk, for møter, støyende og flerspråklig lyd. |
| | **`nova-2`** | Forrige generasjon; behold den for språk som `nova-3` ikke støtter ennå. |
| | `enhanced` | Et eldre nivå med færre feil enn `base`. |
| | `base` | Det eldste nivået, for store mengder. |
| | `whisper` | Whisper, kjørt av Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Standarden; 25 språk. |
| | `grok-voice-transcribe-1.0` | Utgått: tjenesten sender den videre til `2.0`. |

Greit å vite før du velger:

- **Filstørrelse.** OpenAI tar filer på opptil 25 MB; X.ai opptil 500 MB. En lang samtale kan være større enn det en skytjeneste godtar.
- **Pris.** Skytjenester tar betalt per minutt lyd, og prisene varierer med modellen og endrer seg; les dem på tjenestens egen side før du bytter.
- **Språk.** Hver tjeneste har sin egen liste; sjekk din, og sett koden under [Språk](#language) hvis gjenkjenneren gjetter feil.
- **Sanntidsmodeller** som `scribe_v2_realtime` eller Deepgrams `flux` er laget for direktestrømmer og står ikke i tabellen: telefonen skriver ut ferdige opptak.

Listen over modellene til en tjeneste endrer seg ofte. Mangler en modell du vil ha her, har tjenestens egen dokumentasjon den gjeldende listen — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; **Modell** er navnet nøyaktig slik tjenesten oppgir det.

## Dine egne modeller {#your-own-models}

En gjenkjenner trenger ikke være en skytjeneste. Telefonen kan bruke **enhver modell som tilbys gjennom det OpenAI-kompatible API-et** — grensesnittet `POST /v1/audio/transcriptions` —, enten den kjører lokalt på maskinen din eller på en egen server. Lyden forlater aldri lokalene dine, ingenting faktureres per minutt, og det er ingen grense for mengden.

For å legge til en trykker du på **Legg til** og oppgir:

- serverens **adresse**, til og med `/v1`, for eksempel `http://localhost:8000/v1` for selve maskinen eller `http://asr.local:8080/v1` for en server i nettverket ditt;
- **modellens** navn nøyaktig slik serveren viser det, for eksempel `openai/whisper-large-v3-turbo`.

### Hva som kan brukes {#what-can-be-used}

Det vanlige valget er **Whisper**, OpenAIs åpne modell for talegjenkjenning. Den er gratis å bruke, forstår rundt hundre språk og finnes i flere størrelser: en liten modell kjører på en vanlig maskin, de store er merkbart mer nøyaktige og bør helst få et grafikkort.

| Modell | Merknader |
| --- | --- |
| `whisper-large-v3` | Den mest nøyaktige Whisper. For en server med GPU. |
| `openai/whisper-large-v3-turbo` | En raskere versjon av `large-v3` med et lite tap i nøyaktighet. |
| `Systran/faster-whisper-large-v3` | `large-v3` konvertert for motoren faster-whisper; raskere og lettere på minnet. |
| `medium`, `small`, `base` | Mindre Whisper-modeller, for en maskin uten grafikkort. |

Whisper er modellen disse serverne er bygget rundt. Noen av dem kan også tilby andre modeller for talegjenkjenning, som NVIDIA Parakeet.

### Servere som tilbyr det OpenAI-kompatible API-et {#servers-that-offer-the-openai-compatible-api}

Modellen må kjøres av en server som tilbyr det OpenAI-kompatible endepunktet `/v1/audio/transcriptions`. Disse gjør det:

| Server | Hva den er |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | En kraftig modellserver. Tilbyr Whisper på `http://localhost:8000/v1` når den er startet. |
| [Speaches](https://github.com/speaches-ai/speaches) | En server for talemodeller, «Ollama for tale», bygget på faster-whisper. Laster inn en modell første gang den blir bedt om. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Kjører Whisper effektivt på en CPU, også Apple silicon. Dens `whisper-server` startes med `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | En direkte erstatning for OpenAI som kjører modeller lokalt. |

Enhver annen server som tilbyr det samme endepunktet, virker på samme måte. Krever en server en nøkkel, skriver du den inn som for en skytjeneste.

Før du stoler på en server, lager du et testopptak og ser på utskriften i [vinduet Opptak](/interface/recordings): en samtale på et språk modellen kan dårlig, avslører det med én gang.
