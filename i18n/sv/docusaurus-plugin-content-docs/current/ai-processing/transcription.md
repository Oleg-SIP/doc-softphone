---
title: Transkription
sidebar_position: 1
description: "Välj den igenkännare som gör ljud till text: dess adress, dess modell och en tabell över modellerna för varje sorts tjänst."
---

**Inställningar → Transkription** listar igenkännarna: tjänsterna som gör ljud till text, för avslutade samtal och, för [sufflören](../interface/prompter.md), medan ett samtal pågår.

<Shot name="25_transcription" alt="Inställningar → Transkription: fem igenkännare" />

Ett samtal transkriberas när du ber om det i [fönstret Inspelningar](/interface/recordings), eller av sig självt om **Bearbeta samtal automatiskt** är påslaget under [Bearbetning](/ai-processing/processing). En igenkännare på din egen maskin kostar ingenting att köra; en i molnet tar betalt per minut ljud.

## Igenkännare {#recognisers}
En igenkännare är en taligenkänningstjänst som telefonen skickar ljudet till. **Lägg till** lägger till en; knappen **Prova** på dess kort kontrollerar att tjänsten verkligen svarar. Var och en står i listan med sitt namn och under det modellen och adressen till sin tjänst. På bilden finns fem:

| Namn | Modell | Adress |
| --- | --- | --- |
| **X.ai** | *(tomt: tjänstens standard)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(ingen)* | `ws://localhost:2700`, en server på den här datorn |

De två märkena till höger i en rad säger vad igenkännaren är standard för. Klockan lyser vid standarden **för transkriptioner** — **X.ai** på bilden —, som används när du inte väljer någon annan. Blixten lyser vid standarden **för sufflören** — **Vosk** på bilden. Du kan behålla flera igenkännare; rullgardinslistan ovanför en transkription i [fönstret Inspelningar](/interface/recordings#transcript-or-write-up-the-drop-down) visar de transkriptioner som var och en har gjort.

## Igenkännarens kort {#the-recognisers-card}
Ett klick på en igenkännare öppnar dess kort.

<Shot name="43_recogniser_card" alt="Kortet för igenkännaren X.ai: sort, de två adresserna, nyckel, Prova och standarderna" />

| Fält | Vad det är |
| --- | --- |
| **Namn** | Namnet i listorna. |
| **Sort** | Tjänstens sort, som avgör hur telefonen pratar med den: **OpenAI-kompatibel (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** och tre som körs på din egen maskin — **Vosk**, **WhisperLive** och **NVIDIA Riva**. **Yandex SpeechKit** erbjuds där landet under [Om](../application/about.md) är Ryssland eller ett av dess grannländer. |
| **Adress för transkriptioner** | Dit avslutade samtal skickas. |
| **Adress för sufflören** | Dit det levande ljudet går medan ett samtal pågår. *Tomt härleds från adressen bredvid*, som `wss://api.x.ai` på bilden. |
| **Nyckel** | Tjänstens nyckel. *Det ligger i den här datorns nyckelring, aldrig i en inställningsfil.* |
| **Prova** | Frågar tjänsten och säger vad den svarade, till exempel *Svarade, och erbjuder 3 modeller*. |
| **Modell för transkriptioner** och **Modell för sufflören** | Modellen, exakt som tjänsten kallar den. *Tomt skickar inget modellnamn*, och tjänsten använder sin egen standard; där leverantören publicerar en nämner kortet den. Fältet visas inte för en sort utan val. |
| **Standard för transkriptioner** | Gör den här till igenkännaren som används när du inte väljer någon annan. |
| **Standard för sufflören** | Gör den här till igenkännaren som en ny hjälpare i sufflören lyssnar med. |
| **På** | Avslagen stannar igenkännaren i listan och används inte. |

**Avancerade inställningar** öppnar resten av kortet. De värden som betyder mest:

<Shot name="43b_recogniser_advanced" alt="En igenkännares avancerade inställningar: gränser, hur svar klipps, språket" />

| Fält | Vad det gör |
| --- | --- |
| **Region** | Tjänstens region, för en tjänst som har flera. |
| **Skicka de två sidorna var för sig** | Ett samtal spelas in med de två personerna på två kanaler, och det är det som talar om för igenkännaren vem som sa vad. Slå av det för en server som säger att den klarar det och inte gör det. |
| **Fråga vem som talar** | Skiljer på personerna inom en kanal, där flera talar på den. |
| **Skriv tal med siffror** | Belopp, datum och telefonnummer kommer tillbaka som de skrivs i stället för utskrivna med bokstäver. |
| **Uppladdningsgräns**, **Längdgräns** | Den största filen, i byte, och den längsta inspelningen, i sekunder, som den här telefonen skickar. |
| **Begäranden samtidigt** | Hur många begäranden som får vara på gång samtidigt. |
| **Avsluta ett svar efter**, **Slå ihop korta svar inom**, **Paus mellan turer** | För sufflören: hur länge utan nya ord som avslutar ett svar, hur länge ett kort svar väntar på nästa för att slås ihop med det, och hur lång tystnad som avslutar en tur där igenkännaren inte markerar någon. I millisekunder. |
| **Språk** | En språkkod på två bokstäver enligt ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lämna den tom så bestämmer igenkännaren — det är rätt, om inte dina samtal är på ett språk som den hela tiden hör fel. |
| **Extra** | En `name = value` per rad, som skickas oförändrad till tjänsten. Lämna det tomt om inte servern dokumenterar något. |
| **Väntan, minuter** | Hur länge man väntar på en transkription. Tomt räknar ut det från inspelningens längd. |
| **Pris per minut** | Vad en minut levande ljud kostar, enligt tjänstens prislista. Sufflören visar vad en session har kostat och stannar vid sitt [månadstak](prompter.md#spending). |

## Levande igenkänning för sufflören {#live-recognition-for-the-prompter}
[Sufflören](../interface/prompter.md) behöver en igenkännare som lyssnar medan någon talar, via en ström i stället för med en färdig fil. Dessa sorter kan det: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-kompatibel** (med OpenAI:s realtidstranskription), **AssemblyAI**, **Soniox** och **Speechmatics** i molnet, **Yandex SpeechKit** där den erbjuds, och **Vosk**, **WhisperLive** och **NVIDIA Riva** på din egen maskin. En igenkännare på din egen maskin håller den andra partens röst inom huset och kostar ingenting.

Så använder du en: öppna dess kort, kontrollera **Adress för sufflören** (eller låt den härledas), välj **Modell för sufflören** där tjänsten erbjuder flera — de levande modellerna är ofta andra än de för filer, som ElevenLabs `scribe_v2_realtime` — och tryck på **Prova**. Bocka för **Standard för sufflören** så att nya hjälpare lyssnar med den.

## Vilken modell du ska välja {#which-model-to-choose}
Tabellen listar taligenkänningsmodellerna för varje sort i listan **Sort**. Modellerna i **fetstil** är de som är inställda på bilden; för igenkännaren X.ai är modellen tom, så tjänstens standard, **`grok-voice-transcribe-2.0`**, är den som används. **För** säger vad en modell är gjord för: färdiga inspelningar (*transkriptioner*), levande tal för [sufflören](#live-recognition-for-the-prompter) (*sufflör*) eller *båda*.

| Sort och adress | Modell | För | Vad den är till för |
| --- | --- | --- | --- |
| **OpenAI-kompatibel (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transkriptioner | Modellen som OpenAI rekommenderar för inspelat tal på originalspråket. |
| | **`gpt-4o-transcribe`** | båda | Transkription för allmänt bruk. En ny igenkännare av den här sorten får den. |
| | `gpt-4o-mini-transcribe` | båda | En lättare och billigare variant av den förra. |
| | `gpt-4o-transcribe-diarize` | transkriptioner | Markerar vem som talar när. Använd den bara om du behöver det. |
| | `whisper-1` | transkriptioner | Den äldre Whisper-modellen, sparad för särskilda behov som tidsstämplar per ord och undertexter. |
| | `gpt-live-transcribe` | sufflör | OpenAI:s levande modell: orden kommer medan de sägs. Telefonen erbjuder den för sufflören. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | båda | Deepgrams bästa modell för allmänt bruk, för möten, bullrigt och flerspråkigt ljud. En ny igenkännare av den här sorten får den. |
| | **`nova-2`** | båda | Den förra generationen; behåll den för språk som `nova-3` ännu inte stöder. |
| | `nova-2-phonecall` | båda | `nova-2` anpassad till det smala ljudet i en telefonlinje. Engelska. |
| | `flux-general-en` | sufflör | Gjord för samtal: den hör när någon har pratat färdigt. Engelska. |
| | `flux-general-multi` | sufflör | Samma sak på tio språk, och ett samtal får växla mellan dem. |
| | `enhanced`, `base` | transkriptioner | Äldre nivåer; `base` är för stora volymer. |
| | `whisper` | transkriptioner | Whisper, körd av Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transkriptioner | Transkription för allmänt bruk på över 90 språk, med åtskillnad av talare. |
| | `scribe_v2_realtime` | sufflör | Den levande versionen av `scribe_v2`. Telefonen erbjuder den för sufflören. |
| | `scribe_v2_medical` | transkriptioner | `scribe_v2` anpassad till kliniskt ljud. |
| | `scribe_v1` | transkriptioner | Första generationen; föråldrad, använd `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | båda | Den mest exakta, för ett samtal på ett språk. En ny igenkännare av den här sorten får den. |
| | `standard` | båda | Snabbare och billigare, lite mindre exakt. |
| | `melia-1` | transkriptioner | Ett samtal på flera språk, som byter mitt i en mening, kommer tillbaka som en enda transkription. Bara inspelningar, i regionerna EU och USA; ännu utan egen ordlista och talaretiketter. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | båda | Standarden; 25 språk. |
| | `grok-voice-transcribe-1.0` | transkriptioner | Föråldrad: tjänsten skickar den vidare till `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transkriptioner | Över 60 språk, med åtskillnad av talare. |
| | `stt-rt-v5` | sufflör | Levande, på samma 60+ språk, och hör var en tur slutar. Telefonen erbjuder den för sufflören. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | båda | Den mest exakta modellen för inspelningar; 18 språk, och ett samtal får växla mellan dem. |
| | `universal-2` | transkriptioner | 99 språk, billigare; AssemblyAI faller tillbaka på den för ett språk som `universal-3-5-pro` inte kan. |
| | `universal-3-6-pro` | sufflör | AssemblyAI:s nyaste levande modell, 32 språk; tjänsten använder den när modellen är tom. |
| | `universal-streaming-multilingual` | sufflör | Billigare levande igenkänning på engelska, spanska, tyska, franska, portugisiska och italienska. |
| | `universal-streaming-english` | sufflör | Billigare levande igenkänning, bara engelska. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | båda | Huvudmodellen, stark på ryska, även i telefon. Erbjuds där landet är Ryssland eller ett av dess grannländer. |
| | `general:rc` | båda | Nästa version av modellen före utgivningen. |
| | `deferred-general` | transkriptioner | Fördröjd igenkänning: transkriptionen kommer senare, för mindre pengar. |
| **Vosk (på din egen maskin)**<br />`ws://localhost:2700` | *(ställs in på servern)* | båda | Gratis och lätt; körs utan grafikkort. Modellen är den som servern startades med, en per språk, till exempel `vosk-model-small-sv-rhasspy-0.15` eller `vosk-model-en-us-0.22`. |
| **WhisperLive (på din egen maskin)**<br />`ws://localhost:9090` | `small` | båda | Whisper över en levande ström. Storleken väljs på kortet: `tiny`, `base`, `small` (det som telefonen erbjuder), `medium`, `large-v3`; ju större, desto mer exakt, och desto mer vill den ha ett grafikkort. |
| **NVIDIA Riva (på din egen maskin)**<br />`localhost:50051` | *(ställs in på servern)* | båda | NVIDIA:s talserver, för en dator med ett NVIDIA-grafikkort. Den levererar modeller som Parakeet och Canary. |

Bra att veta innan du väljer:

- **Transkriptioner eller sufflör.** En modell för levande tal tar inte emot en färdig fil, och de flesta modeller för filer kan inte lyssna levande. Därför har ett kort två fält, **Modell för transkriptioner** och **Modell för sufflören**.
- **Filstorlek.** OpenAI tar emot filer upp till 25 MB; X.ai upp till 500 MB. Ett långt samtal kan vara större än en molntjänst tar emot.
- **Pris.** Molntjänster tar betalt per minut ljud, och priserna skiljer sig mellan modeller och ändras; läs dem på tjänstens egen sida innan du byter. En igenkännare på din egen maskin kostar ingenting att köra.
- **Språk.** Varje tjänst har sin egen lista; kontrollera din och ange koden under **Språk** i igenkännarens avancerade inställningar om den gissar fel.

En tjänsts lista över modeller ändras ofta. Saknas en modell du vill ha här finns den aktuella listan i tjänstens egen dokumentation — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — och **Modell** är namnet exakt som tjänsten anger det.

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

Innan du förlitar dig på en server gör du en testinspelning och tittar på utskriften i [fönstret Inspelningar](/interface/recordings): ett samtal på ett språk som modellen kan dåligt avslöjar det direkt.
