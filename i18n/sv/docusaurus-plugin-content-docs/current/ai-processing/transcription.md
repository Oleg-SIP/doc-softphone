---
title: Transkription
sidebar_position: 1
description: "\"Välj igenkännaren som gör ljud till text: dess adress, dess modell och en tabell över de modeller varje tjänst erbjuder.\""
---

**Inställningar → Transkription** bestämmer hur ljud blir text: på vilket språk och med vilken igenkännare.

<Shot name="25_transcription" alt="Inställningar → Transkription: språket och fyra igenkännare" />

Ett samtal skrivs ut när du ber om det i [fönstret Inspelningar](/recordings/recordings-window), eller av sig självt om **Bearbeta samtal automatiskt** är på under [Bearbetning](/ai-processing/processing). En igenkännare på din egen dator kostar ingenting att köra; en i molnet tar betalt per ljudminut.

## Språk {#language}

**Språk** är en språkkod på två bokstäver enligt ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lämna den tom så bestämmer igenkännaren — det är rätt, om inte dina samtal är på ett språk som den hela tiden hör fel.

## Igenkännare {#recognisers}

En igenkännare är en tal-till-text-tjänst som telefonen skickar ljud till. Tryck på **Lägg till** för att lägga till en; formulärets knapp **Prova** kontrollerar att tjänsten verkligen svarar. Var och en visas med sitt namn och under det modellen och adressen till tjänsten. På bilden finns fyra:

| Namn | Modell | Adress |
| --- | --- | --- |
| **X.ai** | *(tomt: tjänstens standard)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Den som är markerad **standard** till höger på sin rad (**X.ai** på bilden) är den som används när du inte väljer en annan. Du kan behålla flera. Listrutan ovanför en utskrift i [fönstret Inspelningar](/recordings/recordings-window#the-transcript-and-the-write-up) visar utskrifterna som varje igenkännare har gjort.

Modellen får vara tom. Tjänsten använder då sin egen standard.

## Vilken modell du ska välja {#which-model-to-choose}

Tabellen visar tal-till-text-modellerna hos de fyra tjänsterna på bilden. Modellerna i **fetstil** är de som är konfigurerade på bilden. För igenkännaren X.ai är modellen tom, så tjänstens standard, **`grok-voice-transcribe-2.0`**, är den som används.

| Tjänst och adress | Modell | Vad den är till för |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Modellen som OpenAI rekommenderar för inspelat tal på originalspråket. |
| | **`gpt-4o-transcribe`** | Transkription för allmänt bruk. |
| | `gpt-4o-mini-transcribe` | En lättare och billigare variant av ovanstående. |
| | `gpt-4o-transcribe-diarize` | Anger vem som talar när. Använd den bara om du behöver det. |
| | `whisper-1` | Den äldre Whisper-modellen, kvar för speciella ändamål som tidsstämplar per ord och undertexter. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transkription för allmänt bruk på över 90 språk, med talaruppdelning. |
| | `scribe_v2_medical` | Samma sak, anpassad för kliniskt ljud. |
| | `scribe_v1` | Första generationen; utfasad, använd `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Deepgrams bästa modell för allmänt bruk, för möten, brusigt och flerspråkigt ljud. |
| | **`nova-2`** | Den föregående generationen; behåll den för språk som `nova-3` ännu inte stöder. |
| | `enhanced` | En äldre nivå med färre fel än `base`. |
| | `base` | Den äldsta nivån, för stora volymer. |
| | `whisper` | Whisper, kört av Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Standarden; 25 språk. |
| | `grok-voice-transcribe-1.0` | Utfasad: tjänsten skickar den vidare till `2.0`. |

Bra att veta innan du väljer:

- **Filstorlek.** OpenAI tar filer upp till 25 MB; X.ai upp till 500 MB. Ett långt samtal kan vara större än vad en molntjänst accepterar.
- **Pris.** Molntjänster tar betalt per ljudminut, och priserna skiljer sig mellan modeller och ändras; läs dem på tjänstens egen sida innan du byter.
- **Språk.** Varje tjänst har sin egen lista; kontrollera din, och ange koden under [Språk](#language) om igenkännaren gissar fel.
- **Realtidsmodeller** som `scribe_v2_realtime` eller Deepgrams `flux` är gjorda för direktsändningar och finns inte i tabellen: telefonen skriver ut färdiga inspelningar.

En tjänsts modellista ändras ofta. Saknas en modell du vill ha här, har tjänstens egen dokumentation den aktuella listan — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; **Modell** är namnet exakt som tjänsten anger det.

## Dina egna modeller {#your-own-models}

En igenkännare behöver inte vara en molntjänst. Telefonen kan använda **vilken modell som helst som tillhandahålls via det OpenAI-kompatibla API:et** — gränssnittet `POST /v1/audio/transcriptions` —, oavsett om den körs lokalt på din dator eller på en egen server. Ljudet lämnar aldrig dina lokaler, ingenting debiteras per minut och det finns ingen gräns för volymen.

För att lägga till en trycker du på **Lägg till** och anger:

- serverns **adress**, till och med `/v1`, till exempel `http://localhost:8000/v1` för själva datorn eller `http://asr.local:8080/v1` för en server i ditt nätverk;
- **modellens** namn exakt som servern visar det, till exempel `openai/whisper-large-v3-turbo`.

### Vad som kan användas {#what-can-be-used}

Det vanliga valet är **Whisper**, OpenAIs öppna modell för taligenkänning. Den är gratis att använda, förstår ungefär hundra språk och finns i flera storlekar: en liten modell körs på en vanlig dator, de stora är märkbart noggrannare och mår bäst av ett grafikkort.

| Modell | Anmärkningar |
| --- | --- |
| `whisper-large-v3` | Den noggrannaste Whisper. För en server med GPU. |
| `openai/whisper-large-v3-turbo` | En snabbare version av `large-v3` med en liten förlust i noggrannhet. |
| `Systran/faster-whisper-large-v3` | `large-v3` konverterad för motorn faster-whisper; snabbare och snålare med minnet. |
| `medium`, `small`, `base` | Mindre Whisper-modeller, för en dator utan grafikkort. |

Whisper är modellen som de här servrarna är byggda kring. Vissa av dem kan också tillhandahålla andra modeller för taligenkänning, som NVIDIA Parakeet.

### Servrar som erbjuder det OpenAI-kompatibla API:et {#servers-that-offer-the-openai-compatible-api}

Modellen måste köras av en server som erbjuder den OpenAI-kompatibla slutpunkten `/v1/audio/transcriptions`. De här gör det:

| Server | Vad den är |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | En högpresterande modellserver. Tillhandahåller Whisper på `http://localhost:8000/v1` när den har startat. |
| [Speaches](https://github.com/speaches-ai/speaches) | En server för talmodeller, ”Ollama för tal”, byggd på faster-whisper. Läser in en modell första gången den efterfrågas. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Kör Whisper effektivt på en CPU, även Apple silicon. Dess `whisper-server` startas med `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | En direkt ersättning för OpenAI som kör modeller lokalt. |

Varje annan server som erbjuder samma slutpunkt fungerar på samma sätt. Om en server kräver en nyckel anger du den som för en molntjänst.

Innan du förlitar dig på en server gör du en testinspelning och tittar på utskriften i [fönstret Inspelningar](/recordings/recordings-window): ett samtal på ett språk som modellen kan dåligt avslöjar det direkt.
