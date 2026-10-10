---
title: Pieraksts
sidebar_position: 1
description: "Izvēlieties atpazinēju, kas pārvērš skaņu tekstā: tā adresi, tā modeli un visu veidu pakalpojumu modeļu tabulu."
---

**Iestatījumi → Pieraksts** uzskaita atpazinējus: pakalpojumus, kas pārvērš skaņu tekstā, pabeigtām sarunām un [suflierim](../interface/prompter.md) sarunas laikā.

<Shot name="25_transcription" alt="Iestatījumi → Pieraksts: pieci atpazinēji" />

Saruna tiek pierakstīta, kad to palūdzat [ierakstu logā](/interface/recordings), vai pati no sevis, ja sadaļā [Apstrāde](/ai-processing/processing) ir ieslēgts **Apstrādāt sarunas automātiski**. Atpazinējs jūsu pašu datorā neko nemaksā; mākonī esošais ņem maksu par skaņas minūti.

## Atpazinēji {#recognisers}
Atpazinējs ir runas atpazīšanas pakalpojums, kam tālrunis sūta skaņu. **Pievienot** pievieno jaunu; tā kartītes poga **Pārbaudīt** pārbauda, vai pakalpojums tiešām atbild. Katrs sarakstā redzams ar savu nosaukumu, un zem tā — sava pakalpojuma modelis un adrese. Attēlā tie ir pieci:

| Nosaukums | Modelis | Adrese |
| --- | --- | --- |
| **X.ai** | *(tukšs: pakalpojuma noklusējums)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(nav)* | `ws://localhost:2700`, serveris šajā datorā |

Divas zīmes rindas labajā pusē rāda, kam atpazinējs ir noklusējums. Pulkstenis deg pie noklusējuma **pierakstiem** — attēlā **X.ai** —, ko izmanto, ja neizvēlaties citu. Zibens deg pie noklusējuma **suflierim** — attēlā **Vosk**. Varat turēt vairākus atpazinējus; nolaižamais saraksts virs pieraksta [ierakstu logā](/interface/recordings#transcript-or-write-up-the-drop-down) rāda katra no tiem izveidotos pierakstus.

## Atpazinēja kartīte {#the-recognisers-card}
Nospiežot atpazinēju, atveras tā kartīte.

<Shot name="43_recogniser_card" alt="Atpazinēja X.ai kartīte: veids, abas adreses, atslēga, Pārbaudīt un noklusējumi" />

| Lauks | Kas tas ir |
| --- | --- |
| **Nosaukums** | Nosaukums sarakstos. |
| **Veids** | Pakalpojuma veids, no kura atkarīgs, kā tālrunis ar to runā: **Saderīgs ar OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** un trīs, kas darbojas jūsu pašu datorā, — **Vosk**, **WhisperLive** un **NVIDIA Riva**. **Yandex SpeechKit** tiek piedāvāts, ja sadaļā [Par programmu](../application/about.md) izvēlētā valsts ir Krievija vai kāda no tās kaimiņvalstīm. |
| **Adrese pierakstiem** | Kur tiek sūtītas pabeigtās sarunas. |
| **Adrese suflierim** | Kur sarunas laikā plūst tiešā skaņa. *Tukšs tiek iegūts no blakus esošās adreses*, kā `wss://api.x.ai` attēlā. |
| **Atslēga** | Pakalpojuma atslēga. *Tas glabājas šī datora atslēgu saišķī, nekad iestatījumu failā.* |
| **Pārbaudīt** | Pajautā pakalpojumam un pasaka, ko tas atbildēja, piemēram, *Atbildēja un piedāvā 3 modeļus*. |
| **Modelis pierakstiem** un **Modelis suflierim** | Modelis tieši tā, kā to sauc pakalpojums. *Tukšs nesūta modeļa nosaukumu*, un pakalpojums izmanto savu noklusējumu; ja piegādātājs to publicē, kartīte to nosauc. Veidam bez izvēles lauks netiek rādīts. |
| **Noklusējums pierakstiem** | Padara šo par atpazinēju, ko izmanto, ja neizvēlaties citu. |
| **Noklusējums suflierim** | Padara šo par atpazinēju, ar kuru klausās jauns sufliera palīgs. |
| **Ieslēgts** | Izslēgts atpazinējs paliek sarakstā, bet netiek izmantots. |

**Paplašinātie iestatījumi** atver pārējo kartītes daļu. Svarīgākās vērtības:

<Shot name="43b_recogniser_advanced" alt="Atpazinēja paplašinātie iestatījumi: robežas, kā tiek dalītas atbildes, valoda" />

| Lauks | Ko tas dara |
| --- | --- |
| **Reģions** | Pakalpojuma reģions, ja tādu ir vairāki. |
| **Sūtīt abas puses atsevišķi** | Zvans tiek ierakstīts tā, ka abi cilvēki ir divos kanālos, — tieši no tā atpazinējs zina, kurš ko teica. Izslēdziet to serverim, kas apgalvo, ka to prot, bet neprot. |
| **Jautāt, kas runā** | Atšķir cilvēkus viena kanāla iekšienē, ja tajā runā vairāki. |
| **Rakstīt skaitļus ar cipariem** | Summas, datumi un tālruņa numuri atgriežas tā, kā tos raksta, nevis izrakstīti vārdiem. |
| **Augšupielādes robeža**, **Garuma robeža** | Lielākais fails baitos un garākais ieraksts sekundēs, ko šis tālrunis nosūtīs. |
| **Pieprasījumi vienlaikus** | Cik pieprasījumu drīkst būt procesā vienlaikus. |
| **Beigt atbildi pēc**, **Apvienot īsas atbildes**, **Pauze starp repliku** | Suflierim: cik ilgs laiks bez jauniem vārdiem beidz atbildi, cik ilgi īsa atbilde gaida nākamo, lai ar to apvienotos, un cik ilgs klusums beidz repliku, ja atpazinējs to neatzīmē. Milisekundēs. |
| **Valoda** | Divu burtu valodas kods pēc ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Atstājiet tukšu, un atpazinējs izlems pats — tas ir pareizi, ja vien jūsu sarunas nenotiek valodā, ko tas pastāvīgi pārprot. |
| **Papildinājumi** | Pa vienam `name = value` rindā, nodod pakalpojumam tādu, kāds tas ir. Atstājiet tukšu, ja vien serveris kaut ko nedokumentē. |
| **Gaidīšana, minūtes** | Cik ilgi gaidīt pierakstu. Tukšs to aprēķina pēc ieraksta garuma. |
| **Cena par minūti** | Cik maksā tiešās skaņas minūte pēc pakalpojuma cenrāža. Suflieris rāda, cik izmaksāja sesija, un apstājas pie saviem [mēneša griestiem](prompter.md#spending). |

## Tiešā atpazīšana suflierim {#live-recognition-for-the-prompter}
[Suflierim](../interface/prompter.md) vajag atpazinēju, kas klausās, kamēr kāds runā, — straumē, nevis ar pabeigtu failu. To prot šie veidi: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Saderīgs ar OpenAI** (ar OpenAI reāllaika pierakstīšanu), **AssemblyAI**, **Soniox** un **Speechmatics** mākonī, **Yandex SpeechKit** tur, kur tas tiek piedāvāts, un **Vosk**, **WhisperLive** un **NVIDIA Riva** jūsu pašu datorā. Atpazinējs jūsu pašu datorā patur sarunbiedra balsi jūsu telpās un neko nemaksā.

Kā to izmantot: atveriet tā kartīti, pārbaudiet **Adrese suflierim** (vai ļaujiet to iegūt), izvēlieties **Modelis suflierim**, ja pakalpojums piedāvā vairākus, — tiešie modeļi bieži atšķiras no failu modeļiem, piemēram, ElevenLabs `scribe_v2_realtime`, — un nospiediet **Pārbaudīt**. Atzīmējiet **Noklusējums suflierim**, lai jaunie palīgi klausītos ar to.

## Kuru modeli izvēlēties {#which-model-to-choose}
Tabulā uzskaitīti katra saraksta **Veids** veida runas atpazīšanas modeļi. **Treknrakstā** ir modeļi, kas iestatīti attēlā; atpazinējam X.ai modelis ir tukšs, tāpēc tiek izmantots pakalpojuma noklusējums **`grok-voice-transcribe-2.0`**. **Kam** norāda, kam modelis paredzēts: pabeigtiem ierakstiem (*pieraksti*), tiešai runai [suflierim](#live-recognition-for-the-prompter) (*suflieris*) vai *abiem*.

| Veids un adrese | Modelis | Kam | Kam tas der |
| --- | --- | --- | --- |
| **Saderīgs ar OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | pieraksti | Modelis, ko OpenAI iesaka ierakstītai runai tās oriģinālvalodā. |
| | **`gpt-4o-transcribe`** | abiem | Vispārēja pielietojuma pierakstīšana. To saņem jauns šī veida atpazinējs. |
| | `gpt-4o-mini-transcribe` | abiem | Vieglāks un lētāks iepriekšējā variants. |
| | `gpt-4o-transcribe-diarize` | pieraksti | Atzīmē, kurš kad runā. Izmantojiet tikai tad, ja tas vajadzīgs. |
| | `whisper-1` | pieraksti | Vecākais Whisper modelis, saglabāts īpašām vajadzībām, piemēram, vārdu laika zīmogiem un subtitriem. |
| | `gpt-live-transcribe` | suflieris | OpenAI tiešais modelis: vārdi nāk, tiklīdz tie izrunāti. Tālrunis to piedāvā suflierim. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | abiem | Labākais Deepgram vispārējā pielietojuma modelis sanāksmēm, trokšņainai un daudzvalodu skaņai. To saņem jauns šī veida atpazinējs. |
| | **`nova-2`** | abiem | Iepriekšējā paaudze; paturiet to valodām, ko `nova-3` vēl neatbalsta. |
| | `nova-2-phonecall` | abiem | `nova-2`, pielāgots tālruņa līnijas šaurajai skaņai. Angļu valoda. |
| | `flux-general-en` | suflieris | Radīts sarunai: dzird, kad cilvēks ir beidzis runāt. Angļu valoda. |
| | `flux-general-multi` | suflieris | Tas pats desmit valodās, un saruna var pāriet no vienas uz otru. |
| | `enhanced`, `base` | pieraksti | Vecāki līmeņi; `base` paredzēts lieliem apjomiem. |
| | `whisper` | pieraksti | Whisper, ko darbina Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | pieraksti | Vispārēja pielietojuma pierakstīšana vairāk nekā 90 valodās, ar runātāju atdalīšanu. |
| | `scribe_v2_realtime` | suflieris | `scribe_v2` tiešā versija. Tālrunis to piedāvā suflierim. |
| | `scribe_v2_medical` | pieraksti | `scribe_v2`, pielāgots klīniskai skaņai. |
| | `scribe_v1` | pieraksti | Pirmā paaudze; novecojusi, izmantojiet `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | abiem | Precīzākais, sarunai vienā valodā. To saņem jauns šī veida atpazinējs. |
| | `standard` | abiem | Ātrāks un lētāks, nedaudz mazāk precīzs. |
| | `melia-1` | pieraksti | Saruna vairākās valodās, kas mainās teikuma vidū, atgriežas kā viens pieraksts. Tikai ierakstiem, ES un ASV reģionos; savas vārdnīcas un runātāju atzīmju vēl nav. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | abiem | Noklusējums; 25 valodas. |
| | `grok-voice-transcribe-1.0` | pieraksti | Novecojis: pakalpojums to novirza uz `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | pieraksti | Vairāk nekā 60 valodas, ar runātāju atdalīšanu. |
| | `stt-rt-v5` | suflieris | Tieši, tajās pašās 60+ valodās, un dzird, kur beidzas replika. Tālrunis to piedāvā suflierim. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | abiem | Precīzākais modelis ierakstiem; 18 valodas, un saruna var pāriet no vienas uz otru. |
| | `universal-2` | pieraksti | 99 valodas, lētāks; AssemblyAI izmanto to valodai, ko `universal-3-5-pro` nepazīst. |
| | `universal-3-6-pro` | suflieris | Jaunākais AssemblyAI tiešais modelis, 32 valodas; pakalpojums to izmanto, ja modelis ir tukšs. |
| | `universal-streaming-multilingual` | suflieris | Lētāka tiešā atpazīšana angļu, spāņu, vācu, franču, portugāļu un itāļu valodā. |
| | `universal-streaming-english` | suflieris | Lētāka tiešā atpazīšana, tikai angļu valodā. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | abiem | Galvenais modelis, spēcīgs krievu valodā, arī pa tālruni. Tiek piedāvāts, ja valsts ir Krievija vai kāda no tās kaimiņvalstīm. |
| | `general:rc` | abiem | Nākamā modeļa versija pirms izlaišanas. |
| | `deferred-general` | pieraksti | Atlikta atpazīšana: pieraksts nāk vēlāk, par mazāku maksu. |
| **Vosk (jūsu pašu datorā)**<br />`ws://localhost:2700` | *(iestata serverī)* | abiem | Bezmaksas un viegls; darbojas bez videokartes. Modelis ir tas, ar kuru palaists serveris, pa vienam katrai valodai, piemēram, `vosk-model-en-us-0.22` vai mazais `vosk-model-small-en-us-0.15`. |
| **WhisperLive (jūsu pašu datorā)**<br />`ws://localhost:9090` | `small` | abiem | Whisper tiešā straumē. Izmēru izvēlas kartītē: `tiny`, `base`, `small` (to piedāvā tālrunis), `medium`, `large-v3`; jo lielāks, jo precīzāks un jo vairāk tam vajag videokarti. |
| **NVIDIA Riva (jūsu pašu datorā)**<br />`localhost:50051` | *(iestata serverī)* | abiem | NVIDIA runas serveris datoram ar NVIDIA videokarti. Tas nodrošina tādus modeļus kā Parakeet un Canary. |

Kas jāzina pirms izvēles:

- **Pieraksti vai suflieris.** Tiešai runai paredzēts modelis nepieņem pabeigtu failu, un lielākā daļa failu modeļu nemāk klausīties tieši. Tāpēc kartītē ir divi lauki — **Modelis pierakstiem** un **Modelis suflierim**.
- **Faila izmērs.** OpenAI pieņem failus līdz 25 MB, X.ai — līdz 500 MB. Gara saruna var būt lielāka, nekā mākoņpakalpojums pieņem.
- **Cena.** Mākoņpakalpojumi ņem maksu par skaņas minūti, un tarifi atšķiras pēc modeļa un mainās; pirms maiņas apskatiet tos paša pakalpojuma lapā. Atpazinējs jūsu pašu datorā neko nemaksā.
- **Valodas.** Katram pakalpojumam ir savs saraksts; pārbaudiet savējo un iestatiet kodu laukā **Valoda** atpazinēja paplašinātajos iestatījumos, ja tas min nepareizi.

Pakalpojuma modeļu saraksts bieži mainās. Ja vēlamā modeļa šeit nav, aktuālais saraksts ir paša pakalpojuma dokumentācijā — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html), — un **Modelis** ir nosaukums tieši tāds, kādu to dod pakalpojums.

## Jūsu pašu modeļi {#your-own-models}

Atpazinējam nav jābūt mākoņpakalpojumam. Tālrunis var izmantot **jebkuru modeli, kas tiek piedāvāts caur ar OpenAI saderīgu API** — saskarni `POST /v1/audio/transcriptions` —, neatkarīgi no tā, vai tas darbojas lokāli jūsu datorā vai jūsu serverī. Skaņa nekad neatstāj jūsu telpas, par minūtēm netiek ņemta maksa, un apjoms nav ierobežots.

Lai to pievienotu, nospiediet **Pievienot** un norādiet:

- servera **adresi** līdz `/v1` ieskaitot, piemēram, `http://localhost:8000/v1` pašam datoram vai `http://asr.local:8080/v1` serverim jūsu tīklā;
- **modeļa** nosaukumu tieši tādu, kādu to uzskaita serveris, piemēram, `openai/whisper-large-v3-turbo`.

### Ko var izmantot {#what-can-be-used}

Parastā izvēle ir **Whisper**, OpenAI atvērtais runas atpazīšanas modelis. Tas ir bezmaksas, saprot apmēram simt valodu un ir pieejams vairākos izmēros: mazs modelis darbojas parastā datorā, lielie ir ievērojami precīzāki, un tiem labāk piemērota grafikas karte.

| Modelis | Piezīmes |
| --- | --- |
| `whisper-large-v3` | Precīzākais Whisper. Serverim ar GPU. |
| `openai/whisper-large-v3-turbo` | Ātrāka `large-v3` versija ar nelielu precizitātes zudumu. |
| `Systran/faster-whisper-large-v3` | `large-v3`, pārveidots faster-whisper dzinējam; ātrāks un taupīgāks atmiņai. |
| `medium`, `small`, `base` | Mazāki Whisper modeļi datoram bez grafikas kartes. |

Whisper ir modelis, ap kuru šie serveri ir veidoti. Daži no tiem var piedāvāt arī citus runas atpazīšanas modeļus, piemēram, NVIDIA Parakeet.

### Serveri, kas piedāvā ar OpenAI saderīgu API {#servers-that-offer-the-openai-compatible-api}

Modeli jādarbina serverim, kas piedāvā ar OpenAI saderīgu galapunktu `/v1/audio/transcriptions`. Šie to dara:

| Serveris | Kas tas ir |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Augstas veiktspējas modeļu serveris. Pēc palaišanas piedāvā Whisper adresē `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Runas modeļu serveris, „runas Ollama”, veidots uz faster-whisper. Ielādē modeli, kad to pirmo reizi pieprasa. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Efektīvi darbina Whisper uz procesora, arī Apple silicon. Tā `whisper-server` tiek palaists ar `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Tieša OpenAI aizstājēja, kas darbina modeļus lokāli. |

Jebkurš cits serveris, kas piedāvā to pašu galapunktu, darbojas tāpat. Ja serverim vajadzīga atslēga, ievadiet to tāpat kā mākoņpakalpojumam.

Pirms paļaujaties uz serveri, veiciet pārbaudes ierakstu un apskatiet atšifrējumu [ierakstu logā](/interface/recordings): saruna valodā, ko modelis pārzina vāji, to uzreiz parāda.
