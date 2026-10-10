---
title: Prijepis
sidebar_position: 1
description: "Odabir prepoznavača koji zvuk pretvara u tekst: njegova adresa, njegov model i tablica modela svih vrsta usluga."
---

**Postavke → Prijepis** navodi prepoznavače: usluge koje zvuk pretvaraju u tekst, za završene razgovore i, za [šaptača](../interface/prompter.md), dok razgovor traje.

<Shot name="25_transcription" alt="Postavke → Prijepis: pet prepoznavača" />

Razgovor se prepisuje kad to zatražite u [prozoru Snimke](/interface/recordings), ili sam od sebe ako je u odjeljku [Obrada](/ai-processing/processing) uključeno **Obrađuj razgovore automatski**. Prepoznavač na vašem vlastitom računalu ne stoji ništa; onaj u oblaku naplaćuje minutu zvuka.

## Prepoznavači {#recognisers}
Prepoznavač je usluga prepoznavanja govora kojoj telefon šalje zvuk. **Dodaj** dodaje novi; gumb **Provjeri** na njegovoj kartici provjerava odgovara li usluga zaista. Svaki je na popisu sa svojim nazivom, a ispod njega s modelom i adresom svoje usluge. Na slici ih je pet:

| Naziv | Model | Adresa |
| --- | --- | --- |
| **X.ai** | *(prazno: zadani model usluge)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(nema)* | `ws://localhost:2700`, poslužitelj na ovom računalu |

Dvije oznake desno u retku govore za što je prepoznavač zadan. Sat svijetli kod zadanog **za prijepise** — na slici **X.ai** —, koji se koristi kad ne odaberete drugi. Munja svijetli kod zadanog **za šaptača** — na slici **Vosk**. Možete imati više prepoznavača; padajući popis iznad prijepisa u [prozoru Snimke](/interface/recordings#transcript-or-write-up-the-drop-down) prikazuje prijepise koje je napravio svaki od njih.

## Kartica prepoznavača {#the-recognisers-card}
Pritisak na prepoznavač otvara njegovu karticu.

<Shot name="43_recogniser_card" alt="Kartica prepoznavača X.ai: vrsta, dvije adrese, ključ, Provjeri i zadane postavke" />

| Polje | Što je |
| --- | --- |
| **Naziv** | Naziv na popisima. |
| **Vrsta** | Vrsta usluge, o kojoj ovisi kako telefon s njom razgovara: **Kompatibilno s OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** i tri koje rade na vašem vlastitom računalu — **Vosk**, **WhisperLive** i **NVIDIA Riva**. **Yandex SpeechKit** nudi se kad je u odjeljku [O programu](../application/about.md) odabrana zemlja Rusija ili neka od njezinih susjeda. |
| **Adresa za prijepise** | Kamo se šalju završeni razgovori. |
| **Adresa za šaptača** | Kamo ide zvuk uživo dok razgovor traje. *Prazno se izvodi iz susjedne adrese*, kao `wss://api.x.ai` na slici. |
| **Ključ** | Ključ usluge. *Stoji u privjesku ovog računala, nikad u datoteci s postavkama.* |
| **Provjeri** | Pita uslugu i kaže što je odgovorila, na primjer *Odgovorio je i nudi 3 modela*. |
| **Model za prijepise** i **Model za šaptača** | Model točno onako kako ga usluga naziva. *Prazno ne šalje nikakvo ime modela*, a usluga koristi svoj zadani; gdje ga dobavljač objavljuje, kartica ga navodi. Za vrstu bez izbora polje se ne prikazuje. |
| **Zadano za prijepise** | Čini ovaj prepoznavač onim koji se koristi kad ne odaberete drugi. |
| **Zadano za šaptača** | Čini ovaj prepoznavač onim kojim sluša novi pomoćnik šaptača. |
| **Uključeno** | Isključen prepoznavač ostaje na popisu, ali se ne koristi. |

**Napredne postavke** otvaraju ostatak kartice. Vrijednosti koje su najvažnije:

<Shot name="43b_recogniser_advanced" alt="Napredne postavke prepoznavača: granice, kako se režu odgovori, jezik" />

| Polje | Što radi |
| --- | --- |
| **Regija** | Regija usluge, ako ih ima više. |
| **Šalji obje strane zasebno** | Poziv se snima s dvije osobe na dva kanala, i upravo po tome prepoznavač zna tko je što rekao. Isključite to za poslužitelj koji tvrdi da to zna, a ne zna. |
| **Pitaj tko govori** | Razlikuje osobe unutar jednog kanala kad na njemu govori više njih. |
| **Brojeve pisati znamenkama** | Iznosi, datumi i telefonski brojevi vraćaju se onako kako se pišu, a ne ispisani riječima. |
| **Granica slanja**, **Granica trajanja** | Najveća datoteka u bajtovima i najduža snimka u sekundama koje će ovaj telefon poslati. |
| **Zahtjeva odjednom** | Koliko zahtjeva smije biti u tijeku istodobno. |
| **Završi odgovor nakon**, **Spoji kratke odgovore unutar**, **Stanka između replika** | Za šaptača: koliko vremena bez novih riječi završava odgovor, koliko kratki odgovor čeka sljedeći da bi se s njim spojio, i koliko tišine završava repliku kad je prepoznavač sam ne označi. U milisekundama. |
| **Jezik** | Dvoslovni kod jezika prema ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Ostavite ga praznim i prepoznavač odlučuje sam — to je ispravno, osim ako su vaši pozivi na jeziku koji on uporno krivo čuje. |
| **Dodaci** | Jedan `name = value` po retku, prosljeđuje se usluzi nepromijenjen. Ostavite prazno, osim ako poslužitelj nešto dokumentira. |
| **Čekanje, minute** | Koliko čekati prijepis. Prazno to izračunava iz trajanja snimke. |
| **Cijena po minuti** | Koliko stoji minuta zvuka uživo prema cjeniku usluge. Šaptač pokazuje koliko je sesija stajala i zaustavlja se na svom [mjesečnom ograničenju](prompter.md#spending). |

## Prepoznavanje uživo za šaptača {#live-recognition-for-the-prompter}
[Šaptaču](../interface/prompter.md) treba prepoznavač koji sluša dok netko govori — tokom, a ne gotovom datotekom. To mogu ove vrste: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Kompatibilno s OpenAI** (s OpenAI-jevim prepisivanjem u stvarnom vremenu), **AssemblyAI**, **Soniox** i **Speechmatics** u oblaku, **Yandex SpeechKit** tamo gdje se nudi, te **Vosk**, **WhisperLive** i **NVIDIA Riva** na vašem vlastitom računalu. Prepoznavač na vašem vlastitom računalu zadržava glas sugovornika u kući i ne stoji ništa.

Kako ga koristiti: otvorite njegovu karticu, provjerite **Adresa za šaptača** (ili je pustite da se izvede), odaberite **Model za šaptača** gdje usluga nudi više njih — modeli uživo često se razlikuju od onih za datoteke, poput ElevenLabsova `scribe_v2_realtime` — i pritisnite **Provjeri**. Označite **Zadano za šaptača** da bi novi pomoćnici slušali njime.

## Koji model odabrati {#which-model-to-choose}
Tablica navodi modele prepoznavanja govora svake vrste s popisa **Vrsta**. **Podebljani** modeli postavljeni su na slici; kod prepoznavača X.ai model je prazan, pa se koristi zadani model usluge, **`grok-voice-transcribe-2.0`**. **Za što** kaže za što je model napravljen: za gotove snimke (*prijepisi*), za govor uživo za [šaptača](#live-recognition-for-the-prompter) (*šaptač*) ili za *oboje*.

| Vrsta i adresa | Model | Za što | Čemu služi |
| --- | --- | --- | --- |
| **Kompatibilno s OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | prijepisi | Model koji OpenAI preporučuje za snimljeni govor na izvornom jeziku. |
| | **`gpt-4o-transcribe`** | oboje | Prijepis opće namjene. Dobiva ga novi prepoznavač ove vrste. |
| | `gpt-4o-mini-transcribe` | oboje | Lakša i jeftinija inačica prethodnog. |
| | `gpt-4o-transcribe-diarize` | prijepisi | Označava tko kad govori. Koristite ga samo ako vam to treba. |
| | `whisper-1` | prijepisi | Stariji model Whisper, zadržan za posebne namjene poput vremenskih oznaka riječi i titlova. |
| | `gpt-live-transcribe` | šaptač | OpenAI-jev model uživo: riječi stižu kako se izgovaraju. Telefon ga nudi za šaptača. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | oboje | Najbolji Deepgramov model opće namjene, za sastanke, bučan i višejezičan zvuk. Dobiva ga novi prepoznavač ove vrste. |
| | **`nova-2`** | oboje | Prethodna generacija; zadržite je za jezike koje `nova-3` još ne podržava. |
| | `nova-2-phonecall` | oboje | `nova-2` prilagođen uskom zvuku telefonske linije. Engleski. |
| | `flux-general-en` | šaptač | Napravljen za razgovor: čuje kad je netko završio s govorom. Engleski. |
| | `flux-general-multi` | šaptač | Isto na deset jezika, a razgovor smije prelaziti s jednog na drugi. |
| | `enhanced`, `base` | prijepisi | Starije razine; `base` je za velike količine. |
| | `whisper` | prijepisi | Whisper koji pokreće Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | prijepisi | Prijepis opće namjene na više od 90 jezika, s razdvajanjem govornika. |
| | `scribe_v2_realtime` | šaptač | Inačica `scribe_v2` uživo. Telefon je nudi za šaptača. |
| | `scribe_v2_medical` | prijepisi | `scribe_v2` prilagođen kliničkom zvuku. |
| | `scribe_v1` | prijepisi | Prva generacija; zastarjela, koristite `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | oboje | Najtočniji, za razgovor na jednom jeziku. Dobiva ga novi prepoznavač ove vrste. |
| | `standard` | oboje | Brži i jeftiniji, nešto manje točan. |
| | `melia-1` | prijepisi | Razgovor na više jezika, koji mijenja jezik usred rečenice, vraća se kao jedan prijepis. Samo snimke, u regijama EU i SAD; zasad bez vlastitog rječnika i oznaka govornika. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | oboje | Zadani; 25 jezika. |
| | `grok-voice-transcribe-1.0` | prijepisi | Zastario: usluga ga preusmjerava na `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | prijepisi | Više od 60 jezika, s razdvajanjem govornika. |
| | `stt-rt-v5` | šaptač | Uživo, na istih 60+ jezika, i čuje gdje replika završava. Telefon ga nudi za šaptača. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | oboje | Najtočniji model za snimke; 18 jezika, a razgovor smije prelaziti s jednog na drugi. |
| | `universal-2` | prijepisi | 99 jezika, jeftiniji; AssemblyAI poseže za njim za jezik koji `universal-3-5-pro` ne poznaje. |
| | `universal-3-6-pro` | šaptač | Najnoviji AssemblyAI-jev model uživo, 32 jezika; usluga ga koristi kad je model prazan. |
| | `universal-streaming-multilingual` | šaptač | Jeftinije prepoznavanje uživo na engleskom, španjolskom, njemačkom, francuskom, portugalskom i talijanskom. |
| | `universal-streaming-english` | šaptač | Jeftinije prepoznavanje uživo, samo na engleskom. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | oboje | Glavni model, jak na ruskom, i telefonom. Nudi se kad je zemlja Rusija ili neka od njezinih susjeda. |
| | `general:rc` | oboje | Sljedeća inačica modela prije izdavanja. |
| | `deferred-general` | prijepisi | Odgođeno prepoznavanje: prijepis stiže kasnije, za manje novca. |
| **Vosk (na vašem vlastitom računalu)**<br />`ws://localhost:2700` | *(postavlja se na poslužitelju)* | oboje | Besplatan i lagan; radi bez grafičke kartice. Model je onaj s kojim je poslužitelj pokrenut, po jedan za svaki jezik, na primjer `vosk-model-en-us-0.22` ili mali `vosk-model-small-en-us-0.15`. |
| **WhisperLive (na vašem vlastitom računalu)**<br />`ws://localhost:9090` | `small` | oboje | Whisper u toku uživo. Veličina se bira na kartici: `tiny`, `base`, `small` (nju nudi telefon), `medium`, `large-v3`; što je veći, to je točniji i to više traži grafičku karticu. |
| **NVIDIA Riva (na vašem vlastitom računalu)**<br />`localhost:50051` | *(postavlja se na poslužitelju)* | oboje | NVIDIA-in govorni poslužitelj za računalo s NVIDIA grafičkom karticom. Nudi modele poput Parakeeta i Canaryja. |

Što je dobro znati prije odabira:

- **Prijepisi ili šaptač.** Model za govor uživo ne prima gotovu datoteku, a većina modela za datoteke ne zna slušati uživo. Zato kartica ima dva polja, **Model za prijepise** i **Model za šaptača**.
- **Veličina datoteke.** OpenAI prima datoteke do 25 MB, X.ai do 500 MB. Dug razgovor može biti veći nego što usluga u oblaku prima.
- **Cijena.** Usluge u oblaku naplaćuju minutu zvuka, a cijene se razlikuju po modelu i mijenjaju; pročitajte ih na stranici same usluge prije prelaska. Prepoznavač na vašem vlastitom računalu ne stoji ništa.
- **Jezici.** Svaka usluga ima svoj popis; provjerite svoj i postavite kod u polju **Jezik** u naprednim postavkama prepoznavača ako pogađa krivo.

Popis modela usluge često se mijenja. Ako ovdje nedostaje model koji želite, aktualni popis nalazi se u dokumentaciji same usluge — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — a **Model** je naziv točno onakav kakav ga daje usluga.

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

Prije nego što se oslonite na poslužitelj, napravite probnu snimku i pogledajte prijepis u [prozoru Snimke](/interface/recordings): razgovor na jeziku koji model slabo poznaje to odmah pokazuje.
