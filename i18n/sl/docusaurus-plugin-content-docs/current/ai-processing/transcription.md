---
title: Prepis
sidebar_position: 1
description: "Izbira razpoznavalnika, ki zvok spremeni v besedilo: njegov naslov, njegov model in tabela modelov vseh vrst storitev."
---

**Nastavitve → Prepis** navaja razpoznavalnike: storitve, ki zvok spreminjajo v besedilo, za končane pogovore in za [šepetalca](../interface/prompter.md) med pogovorom.

<Shot name="25_transcription" alt="Nastavitve → Prepis: pet razpoznavalnikov" />

Pogovor se prepiše, ko to zahtevate v [oknu Posnetki](/interface/recordings), ali sam, če je v razdelku [Obdelava](/ai-processing/processing) vklopljeno **Obdeluj pogovore samodejno**. Razpoznavalnik na vašem lastnem računalniku ne stane nič; tisti v oblaku zaračuna minuto zvoka.

## Razpoznavalniki {#recognisers}
Razpoznavalnik je storitev za razpoznavanje govora, ki ji telefon pošilja zvok. **Dodaj** doda novega; gumb **Preveri** na njegovi kartici preveri, ali storitev res odgovarja. Vsak je na seznamu s svojim imenom, pod njim pa sta model in naslov njegove storitve. Na sliki jih je pet:

| Ime | Model | Naslov |
| --- | --- | --- |
| **X.ai** | *(prazno: privzeti model storitve)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(brez)* | `ws://localhost:2700`, strežnik na tem računalniku |

Oznaki na desni strani vrstice povesta, za kaj je razpoznavalnik privzet. Ura sveti pri privzetem **za prepise** — na sliki **X.ai** —, ki se uporabi, ko ne izberete drugega. Strela sveti pri privzetem **za šepetalca** — na sliki **Vosk**. Razpoznavalnikov imate lahko več; spustni seznam nad prepisom v [oknu Posnetki](/interface/recordings#transcript-or-write-up-the-drop-down) prikaže prepise, ki jih je naredil vsak od njih.

## Kartica razpoznavalnika {#the-recognisers-card}
Klik na razpoznavalnik odpre njegovo kartico.

<Shot name="43_recogniser_card" alt="Kartica razpoznavalnika X.ai: vrsta, oba naslova, ključ, Preveri in privzete izbire" />

| Polje | Kaj je |
| --- | --- |
| **Ime** | Ime na seznamih. |
| **Vrsta** | Vrsta storitve, od katere je odvisno, kako se telefon z njo pogovarja: **Združljivo z OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** in tri, ki tečejo na vašem lastnem računalniku — **Vosk**, **WhisperLive** in **NVIDIA Riva**. **Yandex SpeechKit** je na voljo, kadar je v razdelku [O programu](../application/about.md) izbrana država Rusija ali ena od njenih sosed. |
| **Naslov za prepise** | Kam se pošiljajo končani pogovori. |
| **Naslov za šepetalca** | Kam gre zvok v živo med pogovorom. *Prazno se izpelje iz naslova poleg*, kot `wss://api.x.ai` na sliki. |
| **Ključ** | Ključ storitve. *Je v zbirki ključev tega računalnika, nikoli v datoteki z nastavitvami.* |
| **Preveri** | Vpraša storitev in pove, kaj je odgovorila, na primer *Odgovoril je in ponuja 3 modele*. |
| **Model za prepise** in **Model za šepetalca** | Model natanko tako, kot ga imenuje storitev. *Prazno ne pošlje imena modela*, in storitev uporabi svojega privzetega; kjer ga ponudnik objavlja, ga kartica navede. Pri vrsti brez izbire polje ni prikazano. |
| **Privzeto za prepise** | Iz tega naredi razpoznavalnik, ki se uporabi, ko ne izberete drugega. |
| **Privzeto za šepetalca** | Iz tega naredi razpoznavalnik, s katerim posluša nov pomočnik šepetalca. |
| **Vklopljeno** | Izklopljen razpoznavalnik ostane na seznamu, a se ne uporablja. |

**Napredne nastavitve** odprejo preostanek kartice. Vrednosti, ki štejejo največ:

<Shot name="43b_recogniser_advanced" alt="Napredne nastavitve razpoznavalnika: meje, kako se režejo odgovori, jezik" />

| Polje | Kaj naredi |
| --- | --- |
| **Regija** | Regija storitve, če jih ima več. |
| **Pošiljaj obe strani ločeno** | Klic se posname z obema osebama na dveh kanalih in prav po tem razpoznavalnik ve, kdo je kaj rekel. Izklopite pri strežniku, ki trdi, da to zna, pa ne zna. |
| **Vprašaj, kdo govori** | Loči osebe znotraj enega kanala, kadar na njem govori več ljudi. |
| **Števila zapiši s številkami** | Zneski, datumi in telefonske številke se vrnejo tako, kot se pišejo, ne izpisani z besedami. |
| **Meja nalaganja**, **Meja dolžine** | Največja datoteka v bajtih in najdaljši posnetek v sekundah, ki ju ta telefon pošlje. |
| **Zahtev hkrati** | Koliko zahtev je lahko v teku hkrati. |
| **Končaj odgovor po**, **Združi kratke odgovore v**, **Premor med repliki** | Za šepetalca: koliko časa brez novih besed konča odgovor, koliko kratek odgovor čaka na naslednjega, da se z njim združi, in koliko tišine konča repliko, kjer je razpoznavalnik ne označi sam. V milisekundah. |
| **Jezik** | Dvočrkovna koda jezika po ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Pustite prazno in razpoznavalnik se odloči sam — to je prav, razen če so vaši klici v jeziku, ki ga vedno znova napačno sliši. |
| **Dodatki** | En `name = value` na vrstico, posredovan storitvi nespremenjen. Pustite prazno, razen če strežnik kaj dokumentira. |
| **Čakanje, minute** | Kako dolgo čakati na prepis. Prazno to izračuna iz dolžine posnetka. |
| **Cena na minuto** | Koliko stane minuta zvoka v živo po ceniku storitve. Šepetalec pokaže, koliko je stala seja, in se ustavi pri svoji [mesečni omejitvi](prompter.md#spending). |

## Razpoznavanje v živo za šepetalca {#live-recognition-for-the-prompter}
[Šepetalec](../interface/prompter.md) potrebuje razpoznavalnik, ki posluša, medtem ko nekdo govori — s tokom, ne s končano datoteko. To zmorejo te vrste: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Združljivo z OpenAI** (s prepisovanjem OpenAI v realnem času), **AssemblyAI**, **Soniox** in **Speechmatics** v oblaku, **Yandex SpeechKit** tam, kjer je na voljo, ter **Vosk**, **WhisperLive** in **NVIDIA Riva** na vašem lastnem računalniku. Razpoznavalnik na vašem lastnem računalniku obdrži glas sogovornika v hiši in ne stane nič.

Kako ga uporabiti: odprite njegovo kartico, preverite **Naslov za šepetalca** (ali pustite, da se izpelje), izberite **Model za šepetalca**, kjer storitev ponuja več modelov — modeli v živo se pogosto razlikujejo od tistih za datoteke, na primer `scribe_v2_realtime` pri ElevenLabs — in pritisnite **Preveri**. Označite **Privzeto za šepetalca**, da bodo novi pomočniki poslušali z njim.

## Kateri model izbrati {#which-model-to-choose}
Tabela navaja modele za razpoznavanje govora vsake vrste s seznama **Vrsta**. **Krepko** so označeni modeli, nastavljeni na sliki; pri razpoznavalniku X.ai je model prazen, zato se uporabi privzeti model storitve, **`grok-voice-transcribe-2.0`**. **Za kaj** pove, za kaj je model narejen: za končane posnetke (*prepisi*), za govor v živo za [šepetalca](#live-recognition-for-the-prompter) (*šepetalec*) ali za *oboje*.

| Vrsta in naslov | Model | Za kaj | Čemu služi |
| --- | --- | --- | --- |
| **Združljivo z OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | prepisi | Model, ki ga OpenAI priporoča za posneti govor v izvirnem jeziku. |
| | **`gpt-4o-transcribe`** | oboje | Prepisovanje za splošno rabo. Dobi ga nov razpoznavalnik te vrste. |
| | `gpt-4o-mini-transcribe` | oboje | Lažja in cenejša različica prejšnjega. |
| | `gpt-4o-transcribe-diarize` | prepisi | Označi, kdo kdaj govori. Uporabite ga le, če to potrebujete. |
| | `whisper-1` | prepisi | Starejši model Whisper, ohranjen za posebne namene, kot so časovni žigi besed in podnapisi. |
| | `gpt-live-transcribe` | šepetalec | Model OpenAI v živo: besede prihajajo, ko so izgovorjene. Telefon ga ponuja za šepetalca. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | oboje | Najboljši Deepgramov model za splošno rabo, za sestanke, hrupen in večjezičen zvok. Dobi ga nov razpoznavalnik te vrste. |
| | **`nova-2`** | oboje | Prejšnja generacija; obdržite jo za jezike, ki jih `nova-3` še ne podpira. |
| | `nova-2-phonecall` | oboje | `nova-2`, prilagojen ozkemu zvoku telefonske linije. Angleščina. |
| | `flux-general-en` | šepetalec | Narejen za pogovor: sliši, kdaj je nekdo nehal govoriti. Angleščina. |
| | `flux-general-multi` | šepetalec | Enako v desetih jezikih, pogovor pa lahko prehaja med njimi. |
| | `enhanced`, `base` | prepisi | Starejše ravni; `base` je za velike količine. |
| | `whisper` | prepisi | Whisper, ki ga poganja Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | prepisi | Prepisovanje za splošno rabo v več kot 90 jezikih, z ločevanjem govorcev. |
| | `scribe_v2_realtime` | šepetalec | Različica `scribe_v2` v živo. Telefon jo ponuja za šepetalca. |
| | `scribe_v2_medical` | prepisi | `scribe_v2`, prilagojen kliničnemu zvoku. |
| | `scribe_v1` | prepisi | Prva generacija; zastarela, uporabite `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | oboje | Najnatančnejši, za pogovor v enem jeziku. Dobi ga nov razpoznavalnik te vrste. |
| | `standard` | oboje | Hitrejši in cenejši, nekoliko manj natančen. |
| | `melia-1` | prepisi | Pogovor v več jezikih, ki jezik zamenja sredi stavka, se vrne kot en prepis. Samo posnetki, v regijah EU in ZDA; zaenkrat brez lastnega slovarja in oznak govorcev. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | oboje | Privzeti; 25 jezikov. |
| | `grok-voice-transcribe-1.0` | prepisi | Zastarel: storitev ga preusmeri na `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | prepisi | Več kot 60 jezikov, z ločevanjem govorcev. |
| | `stt-rt-v5` | šepetalec | V živo, v istih 60+ jezikih, in sliši, kje se replika konča. Telefon ga ponuja za šepetalca. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | oboje | Najnatančnejši model za posnetke; 18 jezikov, pogovor pa lahko prehaja med njimi. |
| | `universal-2` | prepisi | 99 jezikov, cenejši; AssemblyAI poseže po njem za jezik, ki ga `universal-3-5-pro` ne pozna. |
| | `universal-3-6-pro` | šepetalec | Najnovejši model AssemblyAI v živo, 32 jezikov; storitev ga uporabi, ko je model prazen. |
| | `universal-streaming-multilingual` | šepetalec | Cenejše razpoznavanje v živo v angleščini, španščini, nemščini, francoščini, portugalščini in italijanščini. |
| | `universal-streaming-english` | šepetalec | Cenejše razpoznavanje v živo, samo v angleščini. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | oboje | Glavni model, močan v ruščini, tudi po telefonu. Na voljo, kadar je država Rusija ali ena od njenih sosed. |
| | `general:rc` | oboje | Naslednja različica modela pred izidom. |
| | `deferred-general` | prepisi | Odloženo razpoznavanje: prepis pride pozneje, za manj denarja. |
| **Vosk (na vašem lastnem računalniku)**<br />`ws://localhost:2700` | *(nastavi se na strežniku)* | oboje | Brezplačen in lahek; teče brez grafične kartice. Model je tisti, s katerim je bil strežnik zagnan, eden za vsak jezik, na primer `vosk-model-en-us-0.22` ali majhni `vosk-model-small-en-us-0.15`. |
| **WhisperLive (na vašem lastnem računalniku)**<br />`ws://localhost:9090` | `small` | oboje | Whisper v toku v živo. Velikost se izbere na kartici: `tiny`, `base`, `small` (to ponuja telefon), `medium`, `large-v3`; večji ko je, natančnejši je in bolj potrebuje grafično kartico. |
| **NVIDIA Riva (na vašem lastnem računalniku)**<br />`localhost:50051` | *(nastavi se na strežniku)* | oboje | Govorni strežnik NVIDIA za računalnik z grafično kartico NVIDIA. Ponuja modele, kot sta Parakeet in Canary. |

Kaj je dobro vedeti pred izbiro:

- **Prepisi ali šepetalec.** Model za govor v živo ne sprejme končane datoteke, večina modelov za datoteke pa ne zna poslušati v živo. Zato ima kartica dve polji, **Model za prepise** in **Model za šepetalca**.
- **Velikost datoteke.** OpenAI sprejema datoteke do 25 MB, X.ai do 500 MB. Dolg pogovor je lahko večji, kot ga sprejme storitev v oblaku.
- **Cena.** Storitve v oblaku zaračunavajo minuto zvoka, cene pa se razlikujejo po modelih in se spreminjajo; preberite jih na strani storitve, preden zamenjate. Razpoznavalnik na vašem lastnem računalniku ne stane nič.
- **Jeziki.** Vsaka storitev ima svoj seznam; preverite svojega in nastavite kodo v polju **Jezik** v naprednih nastavitvah razpoznavalnika, če ugiba napačno.

Seznam modelov storitve se pogosto spreminja. Če tu manjka model, ki ga želite, je trenutni seznam v dokumentaciji same storitve — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — **Model** pa je ime natanko tako, kot ga navaja storitev.

## Lastni modeli {#your-own-models}

Razpoznavalnik ni nujno storitev v oblaku. Telefon lahko uporabi **kateri koli model, ki je na voljo prek API-ja, združljivega z OpenAI** — vmesnika `POST /v1/audio/transcriptions` —, ne glede na to, ali teče krajevno na vašem računalniku ali na lastnem strežniku. Zvok nikoli ne zapusti vaših prostorov, nič se ne zaračunava po minuti in količina ni omejena.

Če ga želite dodati, pritisnite **Dodaj** in vpišite:

- **naslov** strežnika, vse do vključno `/v1`, na primer `http://localhost:8000/v1` za sam računalnik ali `http://asr.local:8080/v1` za strežnik v vašem omrežju;
- ime **modela** natanko tako, kot ga navaja strežnik, na primer `openai/whisper-large-v3-turbo`.

### Kaj je mogoče uporabiti {#what-can-be-used}

Običajna izbira je **Whisper**, odprti model za razpoznavanje govora podjetja OpenAI. Uporaba je brezplačna, razume okoli sto jezikov in obstaja v več velikostih: majhen model teče na običajnem računalniku, veliki so opazno natančnejši in jim je najbolje dati grafično kartico.

| Model | Opombe |
| --- | --- |
| `whisper-large-v3` | Najnatančnejši Whisper. Za strežnik z GPU. |
| `openai/whisper-large-v3-turbo` | Hitrejša različica `large-v3` z majhno izgubo natančnosti. |
| `Systran/faster-whisper-large-v3` | `large-v3`, pretvorjen za pogon faster-whisper; hitrejši in varčnejši s pomnilnikom. |
| `medium`, `small`, `base` | Manjši modeli Whisper, za računalnik brez grafične kartice. |

Whisper je model, okoli katerega so ti strežniki zgrajeni. Nekateri od njih lahko ponujajo tudi druge modele za razpoznavanje govora, na primer NVIDIA Parakeet.

### Strežniki, ki ponujajo API, združljiv z OpenAI {#servers-that-offer-the-openai-compatible-api}

Model mora poganjati strežnik, ki ponuja končno točko `/v1/audio/transcriptions`, združljivo z OpenAI. Ti jo:

| Strežnik | Kaj je |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Zmogljiv strežnik modelov. Ko se zažene, ponuja Whisper na `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Strežnik za govorne modele, »Ollama za govor«, zgrajen na faster-whisper. Model naloži, ko je prvič zahtevan. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Učinkovito poganja Whisper na CPU, tudi na Apple silicon. Njegov `whisper-server` se zažene z `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Neposredna zamenjava za OpenAI, ki modele poganja krajevno. |

Enako deluje kateri koli drug strežnik, ki ponuja isto končno točko. Če strežnik potrebuje ključ, ga vpišite kot pri storitvi v oblaku.

Preden se zanesete na strežnik, naredite preizkusni posnetek in poglejte prepis v [oknu Posnetki](/interface/recordings): pogovor v jeziku, ki ga model slabo pozna, to pokaže takoj.
