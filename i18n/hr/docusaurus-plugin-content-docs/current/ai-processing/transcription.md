---
title: Prijepis
sidebar_position: 1
description: "\"Odaberite prepoznavač koji zvuk pretvara u tekst: njegovu adresu, model i tablicu modela koje nudi svaka usluga.\""
---

**Postavke → Prijepis** određuje kako zvuk postaje tekst: na kojem jeziku i kojim prepoznavačem.

<Shot name="25_transcription" alt="Postavke → Prijepis: jezik i četiri prepoznavača" />

Razgovor se prepisuje kad to zatražite u [prozoru Snimke](/recordings/recordings-window), ili sam ako je u [Obradi](/ai-processing/processing) uključeno **Obrađuj razgovore automatski**. Prepoznavač na vlastitom računalu ne košta ništa; onaj u oblaku naplaćuje po minuti zvuka.

## Jezik {#language}

**Jezik** je dvoslovni kod jezika prema ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Ostavite ga praznim i odlučuje prepoznavač — to je ispravno, osim ako su vaši pozivi na jeziku koji stalno krivo čuje.

## Prepoznavači {#recognisers}

Prepoznavač je usluga pretvaranja govora u tekst kojoj telefon šalje zvuk. Pritisnite **Dodaj** da ga dodate; gumb **Provjeri** u obrascu provjerava odgovara li usluga zaista. Svaki je naveden sa svojim nazivom, a ispod njega s modelom i adresom svoje usluge. Na slici su četiri:

| Naziv | Model | Adresa |
| --- | --- | --- |
| **X.ai** | *(prazno: zadani model usluge)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Onaj označen kao **Zadano** desno u svom retku (na slici **X.ai**) koristi se kad ne odaberete drugi. Možete ih imati nekoliko. Padajući izbornik iznad prijepisa u [prozoru Snimke](/recordings/recordings-window#the-transcript-and-the-write-up) navodi prijepise koje je napravio svaki prepoznavač.

Model može ostati prazan. Usluga tada koristi svoj zadani.

## Koji model odabrati {#which-model-to-choose}

Tablica navodi modele za pretvaranje govora u tekst četiriju usluga sa slike. Modeli **podebljano** su oni postavljeni na slici. Za prepoznavač X.ai model je prazan, pa se koristi zadani model usluge, **`grok-voice-transcribe-2.0`**.

| Usluga i adresa | Model | Čemu služi |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Model koji OpenAI preporučuje za snimljeni govor na izvornom jeziku. |
| | **`gpt-4o-transcribe`** | Prijepis opće namjene. |
| | `gpt-4o-mini-transcribe` | Lakša, jeftinija inačica gornjeg. |
| | `gpt-4o-transcribe-diarize` | Označava tko kada govori. Koristite ga samo ako vam to treba. |
| | `whisper-1` | Stariji model Whisper, zadržan za posebne namjene poput vremenskih oznaka riječi i titlova. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Prijepis opće namjene na više od 90 jezika, s razdvajanjem govornika. |
| | `scribe_v2_medical` | Isto, prilagođeno kliničkom zvuku. |
| | `scribe_v1` | Prva generacija; zastario, koristite `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Najbolji Deepgramov model opće namjene, za sastanke, bučan i višejezičan zvuk. |
| | **`nova-2`** | Prethodna generacija; zadržite je za jezike koje `nova-3` još ne podržava. |
| | `enhanced` | Starija razina s manje pogrešaka od `base`. |
| | `base` | Najstarija razina, za velike količine. |
| | `whisper` | Whisper koji pokreće Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Zadani; 25 jezika. |
| | `grok-voice-transcribe-1.0` | Zastario: usluga ga preusmjerava na `2.0`. |

Što je korisno znati prije odabira:

- **Veličina datoteke.** OpenAI prima datoteke do 25 MB; X.ai do 500 MB. Dug razgovor može biti veći nego što usluga u oblaku prihvaća.
- **Cijena.** Usluge u oblaku naplaćuju po minuti zvuka, a cijene se razlikuju po modelu i mijenjaju se; pročitajte ih na stranici usluge prije nego što prijeđete.
- **Jezici.** Svaka usluga ima vlastiti popis; provjerite svoj i postavite kod u polju [Jezik](#language) ako prepoznavač krivo pogađa.
- **Modeli u stvarnom vremenu**, poput `scribe_v2_realtime` ili Deepgramova `flux`, namijenjeni su prijenosima uživo i nisu u tablici: telefon prepisuje gotove snimke.

Popis modela usluge često se mijenja. Ako ovdje nedostaje model koji želite, aktualni popis nalazi se u dokumentaciji same usluge — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — **Model** je naziv točno onakav kakav ga daje usluga.

## Vlastiti modeli {#your-own-models}

Prepoznavač ne mora biti usluga u oblaku. Telefon može koristiti **bilo koji model dostupan preko API-ja kompatibilnog s OpenAI** — sučelja `POST /v1/audio/transcriptions` —, bilo da radi lokalno na vašem računalu ili na vlastitom poslužitelju. Zvuk nikada ne napušta vaše prostore, ništa se ne naplaćuje po minuti i nema ograničenja količine.

Da biste ga dodali, pritisnite **Dodaj** i upišite:

- **adresu** poslužitelja, do i uključujući `/v1`, primjerice `http://localhost:8000/v1` za samo računalo ili `http://asr.local:8080/v1` za poslužitelj u vašoj mreži;
- naziv **modela** točno onakav kakav ga navodi poslužitelj, primjerice `openai/whisper-large-v3-turbo`.

### Što se može koristiti {#what-can-be-used}

Uobičajen izbor je **Whisper**, OpenAI-jev otvoreni model za prepoznavanje govora. Besplatan je za korištenje, razumije stotinjak jezika i dolazi u nekoliko veličina: mali model radi na običnom računalu, veliki su primjetno točniji i najbolje im je dati grafičku karticu.

| Model | Napomene |
| --- | --- |
| `whisper-large-v3` | Najtočniji Whisper. Za poslužitelj s GPU-om. |
| `openai/whisper-large-v3-turbo` | Brža inačica `large-v3` s malim gubitkom točnosti. |
| `Systran/faster-whisper-large-v3` | `large-v3` pretvoren za pogon faster-whisper; brži i štedljiviji s memorijom. |
| `medium`, `small`, `base` | Manji modeli Whisper, za računalo bez grafičke kartice. |

Whisper je model oko kojeg su ovi poslužitelji izgrađeni. Neki od njih mogu posluživati i druge modele za prepoznavanje govora, poput NVIDIA Parakeet.

### Poslužitelji koji nude API kompatibilan s OpenAI {#servers-that-offer-the-openai-compatible-api}

Model mora pokretati poslužitelj koji nudi krajnju točku `/v1/audio/transcriptions` kompatibilnu s OpenAI. Ovi to rade:

| Poslužitelj | Što je |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Poslužitelj modela visokih performansi. Nakon pokretanja poslužuje Whisper na `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Poslužitelj za govorne modele, „Ollama za govor”, izgrađen na faster-whisperu. Model učitava kad se prvi put zatraži. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Učinkovito pokreće Whisper na CPU-u, uključujući Apple silicon. Njegov `whisper-server` pokreće se s `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Izravna zamjena za OpenAI koja modele pokreće lokalno. |

Svaki drugi poslužitelj koji nudi istu krajnju točku radi na isti način. Ako poslužitelj traži ključ, upišite ga kao za uslugu u oblaku.

Prije nego što se oslonite na poslužitelj, napravite probnu snimku i pogledajte prijepis u [prozoru Snimke](/recordings/recordings-window): razgovor na jeziku koji model slabo poznaje to odmah pokazuje.
