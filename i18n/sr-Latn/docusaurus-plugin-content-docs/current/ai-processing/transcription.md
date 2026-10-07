---
title: Prepisivanje
sidebar_position: 1
description: "\"Izaberite prepoznavač koji zvuk pretvara u tekst: njegovu adresu, model i tabelu modela koje nudi svaka usluga.\""
---

**Podešavanja → Prepisivanje** određuje kako zvuk postaje tekst: na kom jeziku i kojim prepoznavačem.

<Shot name="25_transcription" alt="Podešavanja → Prepisivanje: jezik i četiri prepoznavača" />

Razgovor se prepisuje kada to zatražite u [prozoru Snimci](/interface/recordings), ili sam ako je u [Obradi](/ai-processing/processing) uključeno **Obrađuj razgovore samostalno**. Prepoznavač na sopstvenom računaru ne košta ništa; onaj u oblaku naplaćuje po minutu zvuka.

## Jezik {#language}

**Jezik** je dvoslovni kod jezika prema ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Ostavite ga praznim i odlučuje prepoznavač — to je ispravno, osim ako su vaši pozivi na jeziku koji stalno pogrešno čuje.

## Prepoznavači {#recognisers}

Prepoznavač je usluga pretvaranja govora u tekst kojoj telefon šalje zvuk. Pritisnite **Dodaj** da ga dodate; dugme **Isprobaj** u obrascu proverava da li usluga zaista odgovara. Svaki je naveden sa svojim nazivom, a ispod njega sa modelom i adresom svoje usluge. Na slici su četiri:

| Naziv | Model | Adresa |
| --- | --- | --- |
| **X.ai** | *(prazno: podrazumevani model usluge)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Onaj označen kao **Podrazumevano** desno u svom redu (na slici **X.ai**) koristi se kada ne izaberete drugi. Možete ih imati nekoliko. Padajući meni iznad prepisa u [prozoru Snimci](/interface/recordings#the-transcript-and-the-write-up) navodi prepise koje je napravio svaki prepoznavač.

Model može da ostane prazan. Usluga tada koristi svoj podrazumevani.

## Koji model izabrati {#which-model-to-choose}

Tabela navodi modele za pretvaranje govora u tekst četiri usluge sa slike. Modeli **podebljano** su oni podešeni na slici. Za prepoznavač X.ai model je prazan, pa se koristi podrazumevani model usluge, **`grok-voice-transcribe-2.0`**.

| Usluga i adresa | Model | Čemu služi |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Model koji OpenAI preporučuje za snimljeni govor na izvornom jeziku. |
| | **`gpt-4o-transcribe`** | Prepis opšte namene. |
| | `gpt-4o-mini-transcribe` | Lakša, jeftinija varijanta gornjeg. |
| | `gpt-4o-transcribe-diarize` | Označava ko kada govori. Koristite ga samo ako vam to treba. |
| | `whisper-1` | Stariji model Whisper, zadržan za posebne namene kao što su vremenske oznake reči i titlovi. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Prepis opšte namene na više od 90 jezika, sa razdvajanjem govornika. |
| | `scribe_v2_medical` | Isto, prilagođeno kliničkom zvuku. |
| | `scribe_v1` | Prva generacija; zastareo, koristite `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Najbolji Deepgramov model opšte namene, za sastanke, bučan i višejezičan zvuk. |
| | **`nova-2`** | Prethodna generacija; zadržite je za jezike koje `nova-3` još ne podržava. |
| | `enhanced` | Stariji nivo sa manje grešaka od `base`. |
| | `base` | Najstariji nivo, za velike količine. |
| | `whisper` | Whisper koji pokreće Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Podrazumevani; 25 jezika. |
| | `grok-voice-transcribe-1.0` | Zastareo: usluga ga preusmerava na `2.0`. |

Šta je korisno znati pre izbora:

- **Veličina datoteke.** OpenAI prima datoteke do 25 MB; X.ai do 500 MB. Dug razgovor može biti veći nego što usluga u oblaku prihvata.
- **Cena.** Usluge u oblaku naplaćuju po minutu zvuka, a cene se razlikuju po modelu i menjaju se; pročitajte ih na stranici usluge pre nego što pređete.
- **Jezici.** Svaka usluga ima sopstveni spisak; proverite svoj i podesite kod u polju [Jezik](#language) ako prepoznavač pogrešno pogađa.
- **Modeli u realnom vremenu**, kao što su `scribe_v2_realtime` ili Deepgramov `flux`, namenjeni su prenosima uživo i nisu u tabeli: telefon prepisuje gotove snimke.

Spisak modela usluge se često menja. Ako ovde nedostaje model koji želite, aktuelni spisak nalazi se u dokumentaciji same usluge — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — **Model** je naziv tačno onakav kakav ga daje usluga.

## Sopstveni modeli {#your-own-models}

Prepoznavač ne mora da bude usluga u oblaku. Telefon može da koristi **bilo koji model dostupan preko API-ja kompatibilnog sa OpenAI** — sučelja `POST /v1/audio/transcriptions` —, bilo da radi lokalno na vašem računaru ili na sopstvenom serveru. Zvuk nikada ne napušta vaše prostorije, ništa se ne naplaćuje po minutu i nema ograničenja količine.

Da biste ga dodali, pritisnite **Dodaj** i upišite:

- **adresu** servera, do i uključujući `/v1`, na primer `http://localhost:8000/v1` za sam računar ili `http://asr.local:8080/v1` za server u vašoj mreži;
- naziv **modela** tačno onakav kakav ga navodi server, na primer `openai/whisper-large-v3-turbo`.

### Šta može da se koristi {#what-can-be-used}

Uobičajen izbor je **Whisper**, OpenAI-jev otvoreni model za prepoznavanje govora. Besplatan je za korišćenje, razume stotinak jezika i dolazi u nekoliko veličina: mali model radi na običnom računaru, veliki su primetno tačniji i najbolje im je dati grafičku karticu.

| Model | Napomene |
| --- | --- |
| `whisper-large-v3` | Najtačniji Whisper. Za server sa GPU-om. |
| `openai/whisper-large-v3-turbo` | Brža verzija `large-v3` sa malim gubitkom tačnosti. |
| `Systran/faster-whisper-large-v3` | `large-v3` pretvoren za pogon faster-whisper; brži i štedljiviji sa memorijom. |
| `medium`, `small`, `base` | Manji modeli Whisper, za računar bez grafičke kartice. |

Whisper je model oko kog su ovi serveri izgrađeni. Neki od njih mogu da služe i druge modele za prepoznavanje govora, kao što je NVIDIA Parakeet.

### Serveri koji nude API kompatibilan sa OpenAI {#servers-that-offer-the-openai-compatible-api}

Model mora da pokreće server koji nudi krajnju tačku `/v1/audio/transcriptions` kompatibilnu sa OpenAI. Ovi to rade:

| Server | Šta je |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Server modela visokih performansi. Nakon pokretanja služi Whisper na `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Server za govorne modele, „Ollama za govor”, izgrađen na faster-whisperu. Model učitava kada se prvi put zatraži. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Efikasno pokreće Whisper na CPU-u, uključujući Apple silicon. Njegov `whisper-server` pokreće se sa `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Direktna zamena za OpenAI koja modele pokreće lokalno. |

Svaki drugi server koji nudi istu krajnju tačku radi na isti način. Ako server traži ključ, upišite ga kao za uslugu u oblaku.

Pre nego što se oslonite na server, napravite probni snimak i pogledajte prepis u [prozoru Snimci](/interface/recordings): razgovor na jeziku koji model slabo poznaje to odmah pokazuje.
