---
title: Pieraksts
sidebar_position: 1
description: "\"Izvēlieties atpazinēju, kas skaņu pārvērš tekstā: tā adresi, modeli un tabulu ar katra pakalpojuma piedāvātajiem modeļiem.\""
---

**Iestatījumi → Pieraksts** nosaka, kā skaņa kļūst par tekstu: kādā valodā un ar kādu atpazinēju.

<Shot name="25_transcription" alt="Iestatījumi → Pieraksts: valoda un četri atpazinēji" />

Saruna tiek atšifrēta, kad to pieprasāt [ierakstu logā](/recordings/recordings-window), vai pati, ja sadaļā [Apstrāde](/ai-processing/processing) ir ieslēgts **Apstrādāt sarunas automātiski**. Atpazinējs jūsu datorā neko nemaksā; mākonī esošs ņem maksu par skaņas minūtēm.

## Valoda {#language}

**Valoda** ir divu burtu valodas kods saskaņā ar ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Atstājiet to tukšu, un atpazinējs izlems pats — tas ir pareizi, ja vien jūsu zvani nav valodā, ko tas pastāvīgi sadzird nepareizi.

## Atpazinēji {#recognisers}

Atpazinējs ir runas pārvēršanas tekstā pakalpojums, kam tālrunis nosūta skaņu. Nospiediet **Pievienot**, lai to pievienotu; veidlapas poga **Pārbaudīt** pārbauda, vai pakalpojums tiešām atbild. Katrs ir sarakstā ar nosaukumu un zem tā modeli un pakalpojuma adresi. Attēlā ir četri:

| Nosaukums | Modelis | Adrese |
| --- | --- | --- |
| **X.ai** | *(tukšs: pakalpojuma noklusējums)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Tas, kas savas rindas labajā pusē atzīmēts kā **noklusējums** (attēlā **X.ai**), tiek izmantots, kad neizvēlaties citu. Jūs varat paturēt vairākus. Nolaižamais saraksts virs atšifrējuma [ierakstu logā](/recordings/recordings-window#the-transcript-and-the-write-up) uzskaita katra atpazinēja veiktos atšifrējumus.

Modeli var atstāt tukšu. Tad pakalpojums izmanto savu noklusējumu.

## Kuru modeli izvēlēties {#which-model-to-choose}

Tabulā uzskaitīti attēlā redzamo četru pakalpojumu runas pārvēršanas tekstā modeļi. **Treknrakstā** ir attēlā iestatītie modeļi. X.ai atpazinējam modelis ir tukšs, tāpēc tiek izmantots pakalpojuma noklusējums **`grok-voice-transcribe-2.0`**.

| Pakalpojums un adrese | Modelis | Kam tas paredzēts |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Modelis, ko OpenAI iesaka ierakstītai runai tās oriģinālvalodā. |
| | **`gpt-4o-transcribe`** | Vispārējas nozīmes atšifrēšana. |
| | `gpt-4o-mini-transcribe` | Iepriekšējā vieglāks un lētāks variants. |
| | `gpt-4o-transcribe-diarize` | Norāda, kurš runā kad. Izmantojiet to tikai tad, ja tas jums vajadzīgs. |
| | `whisper-1` | Vecākais Whisper modelis, saglabāts īpašiem nolūkiem, piemēram, vārdu laika zīmogiem un subtitriem. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Vispārējas nozīmes atšifrēšana vairāk nekā 90 valodās ar runātāju nošķiršanu. |
| | `scribe_v2_medical` | Tas pats, pielāgots klīniskajai skaņai. |
| | `scribe_v1` | Pirmā paaudze; novecojis, izmantojiet `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Deepgram labākais vispārējas nozīmes modelis sapulcēm, trokšņainai un daudzvalodu skaņai. |
| | **`nova-2`** | Iepriekšējā paaudze; paturiet to valodām, ko `nova-3` vēl neatbalsta. |
| | `enhanced` | Vecāks līmenis ar mazāku kļūdu skaitu nekā `base`. |
| | `base` | Vecākais līmenis lieliem apjomiem. |
| | `whisper` | Whisper, ko darbina Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Noklusējums; 25 valodas. |
| | `grok-voice-transcribe-1.0` | Novecojis: pakalpojums to novirza uz `2.0`. |

Ko vērts zināt pirms izvēles:

- **Faila lielums.** OpenAI pieņem failus līdz 25 MB, X.ai — līdz 500 MB. Gara saruna var būt lielāka, nekā mākoņpakalpojums pieņem.
- **Cena.** Mākoņpakalpojumi ņem maksu par skaņas minūtēm, un cenas atšķiras pa modeļiem un mainās; pirms maiņas izlasiet tās pakalpojuma lapā.
- **Valodas.** Katram pakalpojumam ir savs saraksts; pārbaudiet savējo un iestatiet [Valoda](#language) kodu, ja atpazinējs min nepareizi.
- **Reāllaika modeļi**, piemēram, `scribe_v2_realtime` vai Deepgram `flux`, ir paredzēti tiešraidēm un tabulā nav: tālrunis atšifrē pabeigtus ierakstus.

Pakalpojuma modeļu saraksts bieži mainās. Ja vajadzīgā modeļa šeit nav, pakalpojuma dokumentācijā ir aktuālais saraksts — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; **Modelis** ir nosaukums tieši tāds, kādu to dod pakalpojums.

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

Pirms paļaujaties uz serveri, veiciet pārbaudes ierakstu un apskatiet atšifrējumu [ierakstu logā](/recordings/recordings-window): saruna valodā, ko modelis pārzina vāji, to uzreiz parāda.
