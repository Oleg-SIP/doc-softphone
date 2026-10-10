---
title: Prepisivanje
sidebar_position: 1
description: "Izbor prepoznavača koji pretvara zvuk u tekst: njegova adresa, njegov model i tabela modela svih vrsta usluga."
---

**Podešavanja → Prepisivanje** navodi prepoznavače: usluge koje pretvaraju zvuk u tekst, za završene razgovore i, za [šaptača](../interface/prompter.md), dok razgovor traje.

<Shot name="25_transcription" alt="Podešavanja → Prepisivanje: pet prepoznavača" />

Razgovor se prepisuje kada to zatražite u [prozoru Snimci](/interface/recordings), ili sam od sebe ako je u odeljku [Obrada](/ai-processing/processing) uključeno **Obrađuj razgovore samostalno**. Prepoznavač na vašoj sopstvenoj mašini ne košta ništa; onaj u oblaku naplaćuje minut zvuka.

## Prepoznavači {#recognisers}
Prepoznavač je usluga za prepoznavanje govora kojoj telefon šalje zvuk. **Dodaj** dodaje novi; dugme **Isprobaj** na njegovoj kartici proverava da li usluga zaista odgovara. Svaki je na spisku sa svojim nazivom, a ispod njega sa modelom i adresom svoje usluge. Na slici ih je pet:

| Naziv | Model | Adresa |
| --- | --- | --- |
| **X.ai** | *(prazno: podrazumevani model usluge)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(nema)* | `ws://localhost:2700`, server na ovom računaru |

Dve oznake desno u redu govore za šta je prepoznavač podrazumevan. Sat svetli kod podrazumevanog **za prepise** — na slici **X.ai** —, koji se koristi kada ne izaberete drugi. Munja svetli kod podrazumevanog **za šaptača** — na slici **Vosk**. Možete imati više prepoznavača; padajući spisak iznad prepisa u [prozoru Snimci](/interface/recordings#transcript-or-write-up-the-drop-down) prikazuje prepise koje je napravio svaki od njih.

## Kartica prepoznavača {#the-recognisers-card}
Pritisak na prepoznavač otvara njegovu karticu.

<Shot name="43_recogniser_card" alt="Kartica prepoznavača X.ai: vrsta, dve adrese, ključ, Isprobaj i podrazumevane vrednosti" />

| Polje | Šta je |
| --- | --- |
| **Naziv** | Naziv na spiskovima. |
| **Vrsta** | Vrsta usluge, od koje zavisi kako telefon razgovara s njom: **Saglasno sa OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** i tri koje rade na vašoj sopstvenoj mašini — **Vosk**, **WhisperLive** i **NVIDIA Riva**. **Yandex SpeechKit** se nudi kada je u odeljku [O programu](../application/about.md) izabrana zemlja Rusija ili neka od njenih suseda. |
| **Adresa za prepise** | Kuda se šalju završeni razgovori. |
| **Adresa za šaptača** | Kuda ide zvuk uživo dok razgovor traje. *Prazno se izvodi iz susedne adrese*, kao `wss://api.x.ai` na slici. |
| **Ključ** | Ključ usluge. *Čuva se u privesku ovog računara, nikada u datoteci s podešavanjima.* |
| **Isprobaj** | Pita uslugu i kaže šta je odgovorila, na primer *Odgovorio je i nudi 3 modela*. |
| **Model za prepise** i **Model za šaptača** | Model tačno onako kako ga usluga naziva. *Prazno ne šalje ime modela*, a usluga koristi svoj podrazumevani; gde ga dobavljač objavljuje, kartica ga navodi. Za vrstu bez izbora polje se ne prikazuje. |
| **Podrazumevano za prepise** | Čini ovaj prepoznavač onim koji se koristi kada ne izaberete drugi. |
| **Podrazumevano za šaptača** | Čini ovaj prepoznavač onim kojim sluša novi pomoćnik šaptača. |
| **Uključeno** | Isključen prepoznavač ostaje na spisku, ali se ne koristi. |

**Napredna podešavanja** otvaraju ostatak kartice. Vrednosti koje su najvažnije:

<Shot name="43b_recogniser_advanced" alt="Napredna podešavanja prepoznavača: granice, kako se seku odgovori, jezik" />

| Polje | Šta radi |
| --- | --- |
| **Oblast** | Oblast usluge, ako ih ima više. |
| **Šalji dve strane odvojeno** | Poziv se snima sa dve osobe na dva kanala, i upravo po tome prepoznavač zna ko je šta rekao. Isključite to za server koji tvrdi da to ume, a ne ume. |
| **Traži ko govori** | Razlikuje osobe unutar jednog kanala kada na njemu govori više njih. |
| **Brojeve pisati ciframa** | Iznosi, datumi i brojevi telefona vraćaju se onako kako se pišu, a ne ispisani rečima. |
| **Granica slanja**, **Granica trajanja** | Najveća datoteka u bajtovima i najduži snimak u sekundama koje će ovaj telefon poslati. |
| **Zahteva odjednom** | Koliko zahteva sme da bude u toku istovremeno. |
| **Završi odgovor nakon**, **Spoji kratke odgovore u roku od**, **Razmak među replikama** | Za šaptača: koliko vremena bez novih reči završava odgovor, koliko kratak odgovor čeka sledeći da bi se spojio s njim, i koliko tišine završava repliku kada je prepoznavač sam ne označi. U milisekundama. |
| **Jezik** | Dvoslovni kod jezika prema ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Ostavite ga praznim i prepoznavač odlučuje sam — to je ispravno, osim ako su vaši pozivi na jeziku koji on uporno pogrešno čuje. |
| **Dodatno** | Jedan `name = value` po redu, prosleđuje se usluzi nepromenjen. Ostavite prazno, osim ako server nešto dokumentuje. |
| **Čekanje, minuti** | Koliko čekati prepis. Prazno to izračunava iz trajanja snimka. |
| **Cena po minutu** | Koliko košta minut zvuka uživo prema cenovniku usluge. Šaptač pokazuje koliko je sesija koštala i zaustavlja se na svom [mesečnom ograničenju](prompter.md#spending). |

## Prepoznavanje uživo za šaptača {#live-recognition-for-the-prompter}
[Šaptaču](../interface/prompter.md) treba prepoznavač koji sluša dok neko govori — tokom, a ne gotovom datotekom. To mogu ove vrste: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Saglasno sa OpenAI** (sa prepisivanjem OpenAI u realnom vremenu), **AssemblyAI**, **Soniox** i **Speechmatics** u oblaku, **Yandex SpeechKit** tamo gde se nudi, i **Vosk**, **WhisperLive** i **NVIDIA Riva** na vašoj sopstvenoj mašini. Prepoznavač na vašoj sopstvenoj mašini zadržava glas sagovornika u kući i ne košta ništa.

Kako da ga koristite: otvorite njegovu karticu, proverite **Adresa za šaptača** (ili je pustite da se izvede), izaberite **Model za šaptača** gde usluga nudi više njih — modeli uživo se često razlikuju od onih za datoteke, poput ElevenLabs `scribe_v2_realtime` — i pritisnite **Isprobaj**. Označite **Podrazumevano za šaptača** da bi novi pomoćnici slušali njime.

## Koji model izabrati {#which-model-to-choose}
Tabela navodi modele za prepoznavanje govora svake vrste sa spiska **Vrsta**. **Podebljani** modeli su podešeni na slici; kod prepoznavača X.ai model je prazan, pa se koristi podrazumevani model usluge, **`grok-voice-transcribe-2.0`**. **Za šta** kaže za šta je model napravljen: za gotove snimke (*prepisi*), za govor uživo za [šaptača](#live-recognition-for-the-prompter) (*šaptač*) ili za *oboje*.

| Vrsta i adresa | Model | Za šta | Čemu služi |
| --- | --- | --- | --- |
| **Saglasno sa OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | prepisi | Model koji OpenAI preporučuje za snimljeni govor na izvornom jeziku. |
| | **`gpt-4o-transcribe`** | oboje | Prepis opšte namene. Dobija ga novi prepoznavač ove vrste. |
| | `gpt-4o-mini-transcribe` | oboje | Lakša i jeftinija varijanta prethodnog. |
| | `gpt-4o-transcribe-diarize` | prepisi | Označava ko kada govori. Koristite ga samo ako vam to treba. |
| | `whisper-1` | prepisi | Stariji model Whisper, zadržan za posebne namene poput vremenskih oznaka reči i titlova. |
| | `gpt-live-transcribe` | šaptač | Model OpenAI uživo: reči stižu kako se izgovaraju. Telefon ga nudi za šaptača. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | oboje | Najbolji Deepgram model opšte namene, za sastanke, bučan i višejezičan zvuk. Dobija ga novi prepoznavač ove vrste. |
| | **`nova-2`** | oboje | Prethodna generacija; zadržite je za jezike koje `nova-3` još ne podržava. |
| | `nova-2-phonecall` | oboje | `nova-2` prilagođen uskom zvuku telefonske linije. Engleski. |
| | `flux-general-en` | šaptač | Napravljen za razgovor: čuje kada je neko završio sa govorom. Engleski. |
| | `flux-general-multi` | šaptač | Isto na deset jezika, a razgovor sme da prelazi s jednog na drugi. |
| | `enhanced`, `base` | prepisi | Stariji nivoi; `base` je za velike količine. |
| | `whisper` | prepisi | Whisper koji pokreće Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | prepisi | Prepis opšte namene na više od 90 jezika, sa razdvajanjem govornika. |
| | `scribe_v2_realtime` | šaptač | Verzija `scribe_v2` uživo. Telefon je nudi za šaptača. |
| | `scribe_v2_medical` | prepisi | `scribe_v2` prilagođen kliničkom zvuku. |
| | `scribe_v1` | prepisi | Prva generacija; zastarela, koristite `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | oboje | Najtačniji, za razgovor na jednom jeziku. Dobija ga novi prepoznavač ove vrste. |
| | `standard` | oboje | Brži i jeftiniji, nešto manje tačan. |
| | `melia-1` | prepisi | Razgovor na više jezika, koji menja jezik usred rečenice, vraća se kao jedan prepis. Samo snimci, u oblastima EU i SAD; zasad bez sopstvenog rečnika i oznaka govornika. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | oboje | Podrazumevani; 25 jezika. |
| | `grok-voice-transcribe-1.0` | prepisi | Zastareo: usluga ga preusmerava na `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | prepisi | Više od 60 jezika, sa razdvajanjem govornika. |
| | `stt-rt-v5` | šaptač | Uživo, na istih 60+ jezika, i čuje gde se replika završava. Telefon ga nudi za šaptača. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | oboje | Najtačniji model za snimke; 18 jezika, a razgovor sme da prelazi s jednog na drugi. |
| | `universal-2` | prepisi | 99 jezika, jeftiniji; AssemblyAI poseže za njim za jezik koji `universal-3-5-pro` ne poznaje. |
| | `universal-3-6-pro` | šaptač | Najnoviji AssemblyAI model uživo, 32 jezika; usluga ga koristi kada je model prazan. |
| | `universal-streaming-multilingual` | šaptač | Jeftinije prepoznavanje uživo na engleskom, španskom, nemačkom, francuskom, portugalskom i italijanskom. |
| | `universal-streaming-english` | šaptač | Jeftinije prepoznavanje uživo, samo na engleskom. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | oboje | Glavni model, jak na ruskom, i telefonom. Nudi se kada je zemlja Rusija ili neka od njenih suseda. |
| | `general:rc` | oboje | Sledeća verzija modela pre izdavanja. |
| | `deferred-general` | prepisi | Odloženo prepoznavanje: prepis stiže kasnije, za manje novca. |
| **Vosk (na vašoj sopstvenoj mašini)**<br />`ws://localhost:2700` | *(podešava se na serveru)* | oboje | Besplatan i lagan; radi bez grafičke kartice. Model je onaj sa kojim je server pokrenut, po jedan za svaki jezik, na primer `vosk-model-en-us-0.22` ili mali `vosk-model-small-en-us-0.15`. |
| **WhisperLive (na vašoj sopstvenoj mašini)**<br />`ws://localhost:9090` | `small` | oboje | Whisper u toku uživo. Veličina se bira na kartici: `tiny`, `base`, `small` (nju nudi telefon), `medium`, `large-v3`; što je veći, to je tačniji i to više traži grafičku karticu. |
| **NVIDIA Riva (na vašoj sopstvenoj mašini)**<br />`localhost:50051` | *(podešava se na serveru)* | oboje | Govorni server NVIDIA za računar sa NVIDIA grafičkom karticom. Nudi modele poput Parakeet i Canary. |

Šta je dobro znati pre izbora:

- **Prepisi ili šaptač.** Model za govor uživo ne prima gotovu datoteku, a većina modela za datoteke ne ume da sluša uživo. Zato kartica ima dva polja, **Model za prepise** i **Model za šaptača**.
- **Veličina datoteke.** OpenAI prima datoteke do 25 MB, X.ai do 500 MB. Dug razgovor može biti veći nego što usluga u oblaku prima.
- **Cena.** Usluge u oblaku naplaćuju minut zvuka, a cene se razlikuju po modelu i menjaju; pročitajte ih na stranici same usluge pre prelaska. Prepoznavač na vašoj sopstvenoj mašini ne košta ništa.
- **Jezici.** Svaka usluga ima svoj spisak; proverite svoj i podesite kod u polju **Jezik** u naprednim podešavanjima prepoznavača ako pogađa pogrešno.

Spisak modela usluge se često menja. Ako ovde nedostaje model koji želite, aktuelni spisak je u dokumentaciji same usluge — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — a **Model** je naziv tačno onakav kakav ga daje usluga.

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
