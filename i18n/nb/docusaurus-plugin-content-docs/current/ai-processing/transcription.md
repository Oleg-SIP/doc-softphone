---
title: Transkripsjon
sidebar_position: 1
description: "Velg gjenkjenneren som gjør lyd om til tekst: adressen, modellen og en tabell over modellene for hver slags tjeneste."
---

**Innstillinger → Transkripsjon** viser gjenkjennerne: tjenestene som gjør lyd om til tekst, for avsluttede samtaler og, for [suffløren](../interface/prompter.md), mens en samtale pågår.

<Shot name="25_transcription" alt="Innstillinger → Transkripsjon: fem gjenkjennere" />

En samtale blir transkribert når du ber om det i [vinduet Opptak](/interface/recordings), eller av seg selv hvis **Behandle samtaler automatisk** er slått på under [Behandling](/ai-processing/processing). En gjenkjenner på din egen maskin koster ingenting å kjøre; en i skyen tar betalt per minutt lyd.

## Gjenkjennere {#recognisers}
En gjenkjenner er en talegjenkjenningstjeneste som telefonen sender lyden til. **Legg til** legger til en; knappen **Prøv** på kortet dens sjekker at tjenesten virkelig svarer. Hver står i listen med navnet sitt og under det modellen og adressen til tjenesten. På bildet er det fem:

| Navn | Modell | Adresse |
| --- | --- | --- |
| **X.ai** | *(tomt: tjenestens standard)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(ingen)* | `ws://localhost:2700`, en server på denne datamaskinen |

De to merkene til høyre i en rad sier hva gjenkjenneren er standard for. Klokken lyser ved standarden **for transkripsjoner** — **X.ai** på bildet —, som brukes når du ikke velger en annen. Lynet lyser ved standarden **for suffløren** — **Vosk** på bildet. Du kan beholde flere gjenkjennere; nedtrekkslisten over en transkripsjon i [vinduet Opptak](/interface/recordings#transcript-or-write-up-the-drop-down) viser transkripsjonene hver av dem har laget.

## Gjenkjennerens kort {#the-recognisers-card}
Et klikk på en gjenkjenner åpner kortet dens.

<Shot name="43_recogniser_card" alt="Kortet til gjenkjenneren X.ai: slag, de to adressene, nøkkel, Prøv og standardene" />

| Felt | Hva det er |
| --- | --- |
| **Navn** | Navnet i listene. |
| **Slag** | Tjenestens slag, som avgjør hvordan telefonen snakker med den: **OpenAI-kompatibel (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** og tre som kjører på din egen maskin — **Vosk**, **WhisperLive** og **NVIDIA Riva**. **Yandex SpeechKit** tilbys der landet under [Om](../application/about.md) er Russland eller et av nabolandene. |
| **Adresse for transkripsjoner** | Hvor avsluttede samtaler sendes. |
| **Adresse for suffløren** | Hvor den levende lyden går mens en samtale pågår. *Tomt utledes fra adressen ved siden av*, som `wss://api.x.ai` på bildet. |
| **Nøkkel** | Tjenestens nøkkel. *Det ligger i nøkkelringen til denne maskinen, aldri i en innstillingsfil.* |
| **Prøv** | Spør tjenesten og forteller hva den svarte, for eksempel *Svarte, og tilbyr 3 modeller*. |
| **Modell for transkripsjoner** og **Modell for suffløren** | Modellen, nøyaktig slik tjenesten kaller den. *Tomt sender ikke noe modellnavn*, og tjenesten bruker sin egen standard; der leverandøren publiserer en, nevner kortet den. Feltet vises ikke for et slag uten valg. |
| **Standard for transkripsjoner** | Gjør denne til gjenkjenneren som brukes når du ikke velger en annen. |
| **Standard for suffløren** | Gjør denne til gjenkjenneren en ny hjelper i suffløren lytter med. |
| **På** | Slått av blir gjenkjenneren stående i listen og brukes ikke. |

**Avanserte innstillinger** åpner resten av kortet. Verdiene som betyr mest:

<Shot name="43b_recogniser_advanced" alt="De avanserte innstillingene til en gjenkjenner: grenser, hvordan svar klippes, språket" />

| Felt | Hva det gjør |
| --- | --- |
| **Region** | Tjenestens region, for en tjeneste som har flere. |
| **Send de to sidene hver for seg** | En samtale tas opp med de to personene på to kanaler, og det er det som forteller gjenkjenneren hvem som sa hva. Slå det av for en server som sier at den kan det, og ikke kan. |
| **Spør hvem som snakker** | Skiller mellom personene i én kanal, der flere snakker på den. |
| **Skriv tall med sifre** | Beløp, datoer og telefonnumre kommer tilbake slik de skrives i stedet for skrevet ut med bokstaver. |
| **Opplastingsgrense**, **Lengdegrense** | Den største filen, i byte, og det lengste opptaket, i sekunder, som denne telefonen sender. |
| **Forespørsler om gangen** | Hvor mange forespørsler som kan være i gang samtidig. |
| **Avslutt et svar etter**, **Slå sammen korte svar innen**, **Pause mellom turer** | For suffløren: hvor lenge uten nye ord som avslutter et svar, hvor lenge et kort svar venter på det neste for å slås sammen med det, og hvor lang stillhet som avslutter en tur der gjenkjenneren ikke markerer noen. I millisekunder. |
| **Språk** | En språkkode på to bokstaver etter ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). La den være tom, så bestemmer gjenkjenneren — det er riktig, med mindre samtalene dine er på et språk den stadig hører feil. |
| **Ekstra** | Én `name = value` per linje, sendt uendret til tjenesten. La det være tomt med mindre serveren dokumenterer noe. |
| **Venting, minutter** | Hvor lenge det ventes på en transkripsjon. Tomt regner det ut fra lengden på opptaket. |
| **Pris per minutt** | Hva ett minutt levende lyd koster, etter tjenestens prisliste. Suffløren viser hva en økt har kostet, og stopper ved sitt [månedlige tak](prompter.md#spending). |

## Levende gjenkjenning for suffløren {#live-recognition-for-the-prompter}
[Suffløren](../interface/prompter.md) trenger en gjenkjenner som lytter mens noen snakker, over en strøm i stedet for med en ferdig fil. Disse slagene kan det: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-kompatibel** (med OpenAIs sanntidstranskripsjon), **AssemblyAI**, **Soniox** og **Speechmatics** i skyen, **Yandex SpeechKit** der den tilbys, og **Vosk**, **WhisperLive** og **NVIDIA Riva** på din egen maskin. En gjenkjenner på din egen maskin holder stemmen til den andre parten innenfor veggene og koster ingenting.

Slik bruker du en: åpne kortet dens, sjekk **Adresse for suffløren** (eller la den utledes), velg **Modell for suffløren** der tjenesten tilbyr flere — de levende modellene er ofte andre enn dem for filer, som ElevenLabs' `scribe_v2_realtime` — og trykk **Prøv**. Kryss av for **Standard for suffløren** for at nye hjelpere skal lytte med den.

## Hvilken modell du bør velge {#which-model-to-choose}
Tabellen viser talegjenkjenningsmodellene for hvert slag i listen **Slag**. Modellene i **fet** skrift er de som er satt opp på bildet; for gjenkjenneren X.ai er modellen tom, så tjenestens standard, **`grok-voice-transcribe-2.0`**, er den som brukes. **For** sier hva en modell er laget for: ferdige opptak (*transkripsjoner*), levende tale for [suffløren](#live-recognition-for-the-prompter) (*sufflør*) eller *begge*.

| Slag og adresse | Modell | For | Hva den er til |
| --- | --- | --- | --- |
| **OpenAI-kompatibel (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transkripsjoner | Modellen OpenAI anbefaler for innspilt tale på originalspråket. |
| | **`gpt-4o-transcribe`** | begge | Transkripsjon til allmenn bruk. En ny gjenkjenner av dette slaget får den. |
| | `gpt-4o-mini-transcribe` | begge | En lettere og billigere variant av den forrige. |
| | `gpt-4o-transcribe-diarize` | transkripsjoner | Merker hvem som snakker når. Bruk den bare hvis du trenger det. |
| | `whisper-1` | transkripsjoner | Den eldre Whisper-modellen, beholdt for spesielle behov som tidsstempler per ord og undertekster. |
| | `gpt-live-transcribe` | sufflør | OpenAIs levende modell: ordene kommer mens de blir sagt. Telefonen tilbyr den for suffløren. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | begge | Deepgrams beste modell til allmenn bruk, for møter, støyende og flerspråklig lyd. En ny gjenkjenner av dette slaget får den. |
| | **`nova-2`** | begge | Forrige generasjon; behold den for språk som `nova-3` ennå ikke støtter. |
| | `nova-2-phonecall` | begge | `nova-2` tilpasset den smale lyden i en telefonlinje. Engelsk. |
| | `flux-general-en` | sufflør | Laget for samtale: den hører når noen har snakket ferdig. Engelsk. |
| | `flux-general-multi` | sufflør | Det samme på ti språk, og en samtale kan veksle mellom dem. |
| | `enhanced`, `base` | transkripsjoner | Eldre nivåer; `base` er for store volumer. |
| | `whisper` | transkripsjoner | Whisper, kjørt av Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transkripsjoner | Transkripsjon til allmenn bruk på over 90 språk, med atskillelse av talere. |
| | `scribe_v2_realtime` | sufflør | Den levende versjonen av `scribe_v2`. Telefonen tilbyr den for suffløren. |
| | `scribe_v2_medical` | transkripsjoner | `scribe_v2` tilpasset klinisk lyd. |
| | `scribe_v1` | transkripsjoner | Første generasjon; foreldet, bruk `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | begge | Den mest nøyaktige, for en samtale på ett språk. En ny gjenkjenner av dette slaget får den. |
| | `standard` | begge | Raskere og billigere, litt mindre nøyaktig. |
| | `melia-1` | transkripsjoner | En samtale på flere språk, som bytter midt i en setning, kommer tilbake som én transkripsjon. Bare opptak, i regionene EU og USA; ennå uten egen ordliste og talermerker. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | begge | Standarden; 25 språk. |
| | `grok-voice-transcribe-1.0` | transkripsjoner | Foreldet: tjenesten sender den videre til `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transkripsjoner | Over 60 språk, med atskillelse av talere. |
| | `stt-rt-v5` | sufflør | Levende, på de samme 60+ språkene, og hører hvor en tur slutter. Telefonen tilbyr den for suffløren. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | begge | Den mest nøyaktige modellen for opptak; 18 språk, og en samtale kan veksle mellom dem. |
| | `universal-2` | transkripsjoner | 99 språk, billigere; AssemblyAI faller tilbake på den for et språk `universal-3-5-pro` ikke kan. |
| | `universal-3-6-pro` | sufflør | AssemblyAIs nyeste levende modell, 32 språk; tjenesten bruker den når modellen er tom. |
| | `universal-streaming-multilingual` | sufflør | Billigere levende gjenkjenning på engelsk, spansk, tysk, fransk, portugisisk og italiensk. |
| | `universal-streaming-english` | sufflør | Billigere levende gjenkjenning, bare engelsk. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | begge | Hovedmodellen, sterk på russisk, også i telefon. Tilbys der landet er Russland eller et av nabolandene. |
| | `general:rc` | begge | Neste versjon av modellen før utgivelsen. |
| | `deferred-general` | transkripsjoner | Utsatt gjenkjenning: transkripsjonen kommer senere, for mindre penger. |
| **Vosk (på din egen maskin)**<br />`ws://localhost:2700` | *(stilles inn på serveren)* | begge | Gratis og lett; kjører uten grafikkort. Modellen er den serveren ble startet med, én per språk, for eksempel `vosk-model-en-us-0.22` eller den lille `vosk-model-small-en-us-0.15`. |
| **WhisperLive (på din egen maskin)**<br />`ws://localhost:9090` | `small` | begge | Whisper over en levende strøm. Størrelsen velges på kortet: `tiny`, `base`, `small` (det telefonen tilbyr), `medium`, `large-v3`; jo større, desto mer nøyaktig, og desto mer vil den ha et grafikkort. |
| **NVIDIA Riva (på din egen maskin)**<br />`localhost:50051` | *(stilles inn på serveren)* | begge | NVIDIAs taleserver, for en datamaskin med et NVIDIA-grafikkort. Den leverer modeller som Parakeet og Canary. |

Greit å vite før du velger:

- **Transkripsjoner eller sufflør.** En modell for levende tale tar ikke imot en ferdig fil, og de fleste modeller for filer kan ikke lytte levende. Derfor har et kort to felt, **Modell for transkripsjoner** og **Modell for suffløren**.
- **Filstørrelse.** OpenAI tar imot filer opptil 25 MB; X.ai opptil 500 MB. En lang samtale kan være større enn en skytjeneste tar imot.
- **Pris.** Skytjenester tar betalt per minutt lyd, og prisene varierer med modellen og endrer seg; les dem på tjenestens egen side før du bytter. En gjenkjenner på din egen maskin koster ingenting å kjøre.
- **Språk.** Hver tjeneste har sin egen liste; sjekk din, og sett koden under **Språk** i gjenkjennerens avanserte innstillinger hvis den gjetter feil.

En tjenestes liste over modeller endrer seg ofte. Mangler en modell du vil ha her, har tjenestens egen dokumentasjon den gjeldende listen — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — og **Modell** er navnet nøyaktig slik tjenesten oppgir det.

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
