---
title: Litterointi
sidebar_position: 1
description: "Valitse tunnistin, joka muuttaa äänen tekstiksi: sen osoite, sen malli ja taulukko kaikenlajisten palvelujen malleista."
---

**Asetukset → Litterointi** luettelee tunnistimet: palvelut, jotka muuttavat äänen tekstiksi, päättyneille keskusteluille ja [kuiskaajalle](../interface/prompter.md) keskustelun aikana.

<Shot name="25_transcription" alt="Asetukset → Litterointi: viisi tunnistinta" />

Keskustelu litteroidaan, kun pyydät sitä [Tallenteet-ikkunassa](/interface/recordings), tai itsestään, jos **Käsittele keskustelut automaattisesti** on päällä kohdassa [Käsittely](/ai-processing/processing). Omalla koneellasi toimiva tunnistin ei maksa mitään; pilvessä toimiva laskuttaa äänen minuuteista.

## Tunnistimet {#recognisers}
Tunnistin on puheentunnistuspalvelu, jolle puhelin lähettää äänen. **Lisää** lisää uuden; sen kortin **Kokeile**-painike tarkistaa, että palvelu todella vastaa. Jokainen näkyy luettelossa nimellään ja sen alla palvelunsa malli ja osoite. Kuvassa niitä on viisi:

| Nimi | Malli | Osoite |
| --- | --- | --- |
| **X.ai** | *(tyhjä: palvelun oletus)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(ei mitään)* | `ws://localhost:2700`, palvelin tällä tietokoneella |

Rivin oikean reunan kaksi merkkiä kertovat, minkä oletus tunnistin on. Kello palaa oletuksella **litterointeja varten** — kuvassa **X.ai** —, jota käytetään, kun et valitse muuta. Salama palaa oletuksella **kuiskaajaa varten** — kuvassa **Vosk**. Voit pitää useita tunnistimia; litteroinnin yläpuolella oleva pudotusvalikko [Tallenteet-ikkunassa](/interface/recordings#transcript-or-write-up-the-drop-down) luettelee kunkin niistä tekemät litteroinnit.

## Tunnistimen kortti {#the-recognisers-card}
Tunnistimen painaminen avaa sen kortin.

<Shot name="43_recogniser_card" alt="Tunnistimen X.ai kortti: laji, kaksi osoitetta, avain, Kokeile ja oletukset" />

| Kenttä | Mikä se on |
| --- | --- |
| **Nimi** | Nimi luetteloissa. |
| **Laji** | Palvelun laji, joka ratkaisee, miten puhelin keskustelee sen kanssa: **OpenAI-yhteensopiva (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** ja kolme omalla koneellasi toimivaa — **Vosk**, **WhisperLive** ja **NVIDIA Riva**. **Yandex SpeechKit** on tarjolla, kun [Tietoja](../application/about.md)-kohdan maa on Venäjä tai jokin sen naapurimaista. |
| **Osoite litterointeja varten** | Minne päättyneet keskustelut lähetetään. |
| **Osoite kuiskaajaa varten** | Minne suora ääni menee keskustelun aikana. *Tyhjä päätellään viereisestä osoitteesta*, kuten `wss://api.x.ai` kuvassa. |
| **Avain** | Palvelun avain. *Se säilytetään tämän tietokoneen avainnipussa, ei koskaan asetustiedostossa.* |
| **Kokeile** | Kysyy palvelulta ja kertoo, mitä se vastasi, esimerkiksi *Vastasi ja tarjoaa 3 mallia*. |
| **Malli litterointeja varten** ja **Malli kuiskaajaa varten** | Malli täsmälleen niin kuin palvelu sen nimeää. *Tyhjä ei lähetä mallin nimeä*, ja palvelu käyttää omaa oletustaan; jos toimittaja julkaisee sellaisen, kortti mainitsee sen. Kenttää ei näytetä lajille, jossa ei ole valinnanvaraa. |
| **Oletus litterointeja varten** | Tekee tästä tunnistimen, jota käytetään, kun et valitse muuta. |
| **Oletus kuiskaajaa varten** | Tekee tästä tunnistimen, jolla kuiskaajan uusi avustaja kuuntelee. |
| **Päällä** | Pois päältä tunnistin pysyy luettelossa, mutta sitä ei käytetä. |

**Lisäasetukset** avaa kortin loppuosan. Tärkeimmät arvot:

<Shot name="43b_recogniser_advanced" alt="Tunnistimen lisäasetukset: rajat, miten vastaukset katkaistaan, kieli" />

| Kenttä | Mitä se tekee |
| --- | --- |
| **Alue** | Palvelun alue, jos alueita on useita. |
| **Lähetä molemmat puolet erikseen** | Puhelu tallennetaan niin, että kaksi ihmistä ovat kahdella kanavalla, ja juuri siitä tunnistin tietää, kuka sanoi mitä. Kytke se pois palvelimelta, joka väittää osaavansa tämän mutta ei osaa. |
| **Kysy, kuka puhuu** | Erottaa ihmiset saman kanavan sisällä, kun siinä puhuu useampi. |
| **Kirjoita luvut numeroina** | Summat, päivämäärät ja puhelinnumerot palaavat niin kuin ne kirjoitetaan, eivät kirjaimin. |
| **Lähetysraja**, **Pituusraja** | Suurin tiedosto tavuina ja pisin tallenne sekunteina, jonka tämä puhelin lähettää. |
| **Pyyntöjä kerralla** | Montako pyyntöä saa olla käynnissä samanaikaisesti. |
| **Päätä vastaus, kun on kulunut**, **Yhdistä lyhyet vastaukset, jos väli on alle**, **Tauko puheenvuorojen välillä** | Kuiskaajalle: kuinka pitkä aika ilman uusia sanoja päättää vastauksen, kuinka kauan lyhyt vastaus odottaa seuraavaa yhdistyäkseen siihen, ja kuinka pitkä hiljaisuus päättää puheenvuoron, jos tunnistin ei merkitse sitä. Millisekunteina. |
| **Kieli** | ISO 639-1:n mukainen kaksikirjaiminen kielikoodi (`en`, `de`, `es`, `fr`, `sr`…). Jätä se tyhjäksi, niin tunnistin päättää — se on oikein, elleivät puhelusi ole kielellä, jonka se kuulee yhä uudelleen väärin. |
| **Lisät** | Yksi `name = value` riviä kohden, välitetään palvelulle sellaisenaan. Jätä tyhjäksi, ellei palvelin dokumentoi jotain. |
| **Odotus, minuuttia** | Kuinka kauan litterointia odotetaan. Tyhjä laskee sen tallenteen pituudesta. |
| **Hinta minuutilta** | Mitä minuutti suoraa ääntä maksaa palvelun hinnaston mukaan. Kuiskaaja näyttää, mitä istunto on maksanut, ja pysähtyy [kuukausikattoonsa](prompter.md#spending). |

## Suora tunnistus kuiskaajalle {#live-recognition-for-the-prompter}
[Kuiskaaja](../interface/prompter.md) tarvitsee tunnistimen, joka kuuntelee jonkun puhuessa, virtana eikä valmiina tiedostona. Nämä lajit osaavat sen: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-yhteensopiva** (OpenAI:n reaaliaikaisella litteroinnilla), **AssemblyAI**, **Soniox** ja **Speechmatics** pilvessä, **Yandex SpeechKit** siellä, missä se on tarjolla, sekä **Vosk**, **WhisperLive** ja **NVIDIA Riva** omalla koneellasi. Omalla koneella toimiva tunnistin pitää toisen osapuolen äänen talon sisällä eikä maksa mitään.

Näin otat sellaisen käyttöön: avaa sen kortti, tarkista **Osoite kuiskaajaa varten** (tai anna sen päätellä itsensä), valitse **Malli kuiskaajaa varten**, jos palvelu tarjoaa useita — suorat mallit ovat usein eri kuin tiedostojen mallit, kuten ElevenLabsin `scribe_v2_realtime` — ja paina **Kokeile**. Rastita **Oletus kuiskaajaa varten**, niin uudet avustajat kuuntelevat sillä.

## Minkä mallin valitset {#which-model-to-choose}
Taulukko luettelee **Laji**-luettelon jokaisen lajin puheentunnistusmallit. **Lihavoidut** mallit ovat kuvassa asetettuja; tunnistimen X.ai malli on tyhjä, joten käytetään palvelun oletusta, **`grok-voice-transcribe-2.0`**. **Käyttö** kertoo, mihin malli on tehty: valmiisiin tallenteisiin (*litteroinnit*), suoraan puheeseen [kuiskaajaa](#live-recognition-for-the-prompter) varten (*kuiskaaja*) vai *molempiin*.

| Laji ja osoite | Malli | Käyttö | Mihin se sopii |
| --- | --- | --- | --- |
| **OpenAI-yhteensopiva (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | litteroinnit | Malli, jota OpenAI suosittelee tallennetulle puheelle sen alkuperäisellä kielellä. |
| | **`gpt-4o-transcribe`** | molemmat | Yleiskäyttöinen litterointi. Tämän lajin uusi tunnistin saa sen. |
| | `gpt-4o-mini-transcribe` | molemmat | Edellisen kevyempi ja halvempi muunnelma. |
| | `gpt-4o-transcribe-diarize` | litteroinnit | Merkitsee, kuka puhuu milloinkin. Käytä vain, jos tarvitset sitä. |
| | `whisper-1` | litteroinnit | Vanhempi Whisper-malli, säilytetty erikoiskäyttöön kuten sanakohtaisiin aikaleimoihin ja tekstityksiin. |
| | `gpt-live-transcribe` | kuiskaaja | OpenAI:n suora malli: sanat tulevat sitä mukaa kuin ne sanotaan. Puhelin tarjoaa sitä kuiskaajalle. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | molemmat | Deepgramin paras yleismalli kokouksiin sekä meluisaan ja monikieliseen ääneen. Tämän lajin uusi tunnistin saa sen. |
| | **`nova-2`** | molemmat | Edellinen sukupolvi; pidä se kielille, joita `nova-3` ei vielä tue. |
| | `nova-2-phonecall` | molemmat | `nova-2` viritettynä puhelinlinjan kapeaan ääneen. Englanti. |
| | `flux-general-en` | kuiskaaja | Tehty keskusteluun: se kuulee, kun joku on puhunut loppuun. Englanti. |
| | `flux-general-multi` | kuiskaaja | Sama kymmenellä kielellä, ja keskustelu saa vaihtaa niiden välillä. |
| | `enhanced`, `base` | litteroinnit | Vanhempia tasoja; `base` on suurille määrille. |
| | `whisper` | litteroinnit | Whisper Deepgramin ajamana. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | litteroinnit | Yleiskäyttöinen litterointi yli 90 kielellä, puhujat erotellen. |
| | `scribe_v2_realtime` | kuiskaaja | `scribe_v2`:n suora versio. Puhelin tarjoaa sitä kuiskaajalle. |
| | `scribe_v2_medical` | litteroinnit | `scribe_v2` viritettynä kliiniseen ääneen. |
| | `scribe_v1` | litteroinnit | Ensimmäinen sukupolvi; vanhentunut, käytä `scribe_v2`:ta. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | molemmat | Tarkin, yhdellä kielellä käytävään keskusteluun. Tämän lajin uusi tunnistin saa sen. |
| | `standard` | molemmat | Nopeampi ja halvempi, hieman epätarkempi. |
| | `melia-1` | litteroinnit | Monikielinen keskustelu, joka vaihtaa kieltä kesken lauseen, palaa yhtenä litterointina. Vain tallenteille, EU- ja USA-alueilla; omaa sanastoa ja puhujamerkintöjä ei vielä ole. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | molemmat | Oletus; 25 kieltä. |
| | `grok-voice-transcribe-1.0` | litteroinnit | Vanhentunut: palvelu ohjaa sen `2.0`:aan. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | litteroinnit | Yli 60 kieltä, puhujat erotellen. |
| | `stt-rt-v5` | kuiskaaja | Suora, samoilla yli 60 kielellä, ja kuulee, missä puheenvuoro päättyy. Puhelin tarjoaa sitä kuiskaajalle. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | molemmat | Tarkin malli tallenteille; 18 kieltä, ja keskustelu saa vaihtaa niiden välillä. |
| | `universal-2` | litteroinnit | 99 kieltä, halvempi; AssemblyAI turvautuu siihen kielelle, jota `universal-3-5-pro` ei osaa. |
| | `universal-3-6-pro` | kuiskaaja | AssemblyAI:n uusin suora malli, 32 kieltä; palvelu käyttää sitä, kun malli on tyhjä. |
| | `universal-streaming-multilingual` | kuiskaaja | Halvempi suora tunnistus englanniksi, espanjaksi, saksaksi, ranskaksi, portugaliksi ja italiaksi. |
| | `universal-streaming-english` | kuiskaaja | Halvempi suora tunnistus, vain englanniksi. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | molemmat | Päämalli, vahva venäjässä, myös puhelimessa. Tarjolla, kun maa on Venäjä tai jokin sen naapurimaista. |
| | `general:rc` | molemmat | Mallin seuraava versio ennen julkaisua. |
| | `deferred-general` | litteroinnit | Viivästetty tunnistus: litterointi tulee myöhemmin, halvemmalla. |
| **Vosk (omalla koneellasi)**<br />`ws://localhost:2700` | *(asetetaan palvelimella)* | molemmat | Ilmainen ja kevyt; toimii ilman näytönohjainta. Malli on se, jolla palvelin käynnistettiin, yksi kieltä kohden, esimerkiksi `vosk-model-en-us-0.22` tai pieni `vosk-model-small-en-us-0.15`. |
| **WhisperLive (omalla koneellasi)**<br />`ws://localhost:9090` | `small` | molemmat | Whisper suorana virtana. Koko valitaan kortilla: `tiny`, `base`, `small` (jota puhelin tarjoaa), `medium`, `large-v3`; mitä suurempi, sitä tarkempi ja sitä enemmän se kaipaa näytönohjainta. |
| **NVIDIA Riva (omalla koneellasi)**<br />`localhost:50051` | *(asetetaan palvelimella)* | molemmat | NVIDIAn puhepalvelin tietokoneelle, jossa on NVIDIAn näytönohjain. Se tarjoaa malleja kuten Parakeet ja Canary. |

Hyvä tietää ennen valintaa:

- **Litteroinnit vai kuiskaaja.** Suoraan puheeseen tehty malli ei ota vastaan valmista tiedostoa, eivätkä useimmat tiedostomallit osaa kuunnella suoraan. Siksi kortissa on kaksi kenttää, **Malli litterointeja varten** ja **Malli kuiskaajaa varten**.
- **Tiedoston koko.** OpenAI ottaa vastaan enintään 25 Mt:n tiedostoja, X.ai enintään 500 Mt:n. Pitkä keskustelu voi olla suurempi kuin pilvipalvelu hyväksyy.
- **Hinta.** Pilvipalvelut laskuttavat äänen minuuteista, ja hinnat vaihtelevat mallin mukaan ja muuttuvat; lue ne palvelun omalta sivulta ennen vaihtamista. Omalla koneellasi toimiva tunnistin ei maksa mitään.
- **Kielet.** Jokaisella palvelulla on oma luettelonsa; tarkista omasi ja aseta koodi kohtaan **Kieli** tunnistimen lisäasetuksissa, jos se arvaa väärin.

Palvelun malliluettelo muuttuu usein. Jos haluamasi malli puuttuu tästä, palvelun oma dokumentaatio sisältää ajantasaisen luettelon — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — ja **Malli** on nimi täsmälleen niin kuin palvelu sen antaa.

## Omat mallisi {#your-own-models}

Tunnistimen ei tarvitse olla pilvipalvelu. Puhelin voi käyttää **mitä tahansa mallia, jota tarjotaan OpenAI-yhteensopivan API:n kautta** — rajapinta `POST /v1/audio/transcriptions` —, toimipa se paikallisesti tietokoneellasi tai omalla palvelimellasi. Ääni ei koskaan poistu tiloistasi, minuuteista ei laskuteta eikä määrällä ole rajaa.

Lisätäksesi sellaisen paina **Lisää** ja anna:

- palvelimen **osoite** `/v1`:een asti, esimerkiksi `http://localhost:8000/v1` itse tietokoneelle tai `http://asr.local:8080/v1` verkkosi palvelimelle;
- **mallin** nimi täsmälleen siinä muodossa kuin palvelin sen luettelee, esimerkiksi `openai/whisper-large-v3-turbo`.

### Mitä voi käyttää {#what-can-be-used}

Tavallinen valinta on **Whisper**, OpenAI:n avoin puheentunnistusmalli. Se on ilmainen, ymmärtää noin sataa kieltä ja on saatavilla useassa koossa: pieni malli toimii tavallisella tietokoneella, suuret ovat selvästi tarkempia ja kaipaavat mieluiten näytönohjaimen.

| Malli | Huomioita |
| --- | --- |
| `whisper-large-v3` | Tarkin Whisper. Palvelimelle, jossa on GPU. |
| `openai/whisper-large-v3-turbo` | `large-v3`:n nopeampi versio, jossa tarkkuus heikkenee hieman. |
| `Systran/faster-whisper-large-v3` | `large-v3` muunnettuna faster-whisper-moottorille; nopeampi ja kevyempi muistille. |
| `medium`, `small`, `base` | Pienempiä Whisper-malleja tietokoneelle, jossa ei ole näytönohjainta. |

Whisper on malli, jonka ympärille nämä palvelimet on rakennettu. Jotkin niistä voivat tarjota myös muita puheentunnistusmalleja, kuten NVIDIA Parakeetia.

### OpenAI-yhteensopivaa API:a tarjoavat palvelimet {#servers-that-offer-the-openai-compatible-api}

Mallia on ajettava palvelimella, joka tarjoaa OpenAI-yhteensopivan `/v1/audio/transcriptions`-päätepisteen. Nämä tarjoavat:

| Palvelin | Mikä se on |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Suorituskykyinen mallipalvelin. Tarjoaa Whisperin osoitteessa `http://localhost:8000/v1` käynnistyttyään. |
| [Speaches](https://github.com/speaches-ai/speaches) | Puhemallien palvelin, ”puheen Ollama”, rakennettu faster-whisperin päälle. Lataa mallin, kun sitä pyydetään ensimmäisen kerran. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Ajaa Whisperiä tehokkaasti suorittimella, myös Apple siliconilla. Sen `whisper-server` käynnistetään valitsimella `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | OpenAI:n suora korvike, joka ajaa malleja paikallisesti. |

Mikä tahansa muu saman päätepisteen tarjoava palvelin toimii samalla tavalla. Jos palvelin vaatii avaimen, syötä se kuten pilvipalvelulle.

Ennen kuin luotat palvelimeen, tee testitallenne ja katso litterointia [Tallenteet-ikkunassa](/interface/recordings): keskustelu kielellä, jota malli osaa huonosti, paljastaa sen heti.
