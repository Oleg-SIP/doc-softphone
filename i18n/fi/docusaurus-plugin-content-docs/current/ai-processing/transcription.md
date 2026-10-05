---
title: Litterointi
sidebar_position: 1
description: "\"Valitse tunnistin, joka muuttaa äänen tekstiksi: sen osoite, sen malli ja taulukko kunkin palvelun tarjoamista malleista.\""
---

**Asetukset → Litterointi** määrittää, miten äänestä tulee tekstiä: millä kielellä ja millä tunnistimella.

<Shot name="25_transcription" alt="Asetukset → Litterointi: kieli ja neljä tunnistinta" />

Keskustelu litteroidaan, kun pyydät sitä [Tallenteet-ikkunassa](/recordings/recordings-window), tai itsestään, jos **Käsittele keskustelut automaattisesti** on käytössä kohdassa [Käsittely](/ai-processing/processing). Omalla koneellasi oleva tunnistin ei maksa mitään; pilvessä oleva laskuttaa äänen minuuttien mukaan.

## Kieli {#language}

**Kieli** on ISO 639-1:n mukainen kaksikirjaiminen kielikoodi (`en`, `de`, `es`, `fr`, `sr`…). Jätä se tyhjäksi, niin tunnistin päättää — se on oikein, elleivät puhelusi ole kielellä, jonka se kuulee jatkuvasti väärin.

## Tunnistimet {#recognisers}

Tunnistin on puheesta tekstiksi -palvelu, jolle puhelin lähettää äänen. Paina **Lisää** lisätäksesi sellaisen; lomakkeen **Kokeile**-painike tarkistaa, että palvelu todella vastaa. Jokainen näkyy luettelossa nimellään, ja sen alla on malli ja palvelun osoite. Kuvassa niitä on neljä:

| Nimi | Malli | Osoite |
| --- | --- | --- |
| **X.ai** | *(tyhjä: palvelun oletus)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Rivinsä oikealla puolella merkinnällä **oletus** varustettu (kuvassa **X.ai**) on se, jota käytetään, kun et valitse muuta. Voit pitää useita. [Tallenteet-ikkunassa](/recordings/recordings-window#the-transcript-and-the-write-up) litteroinnin yläpuolella oleva pudotusvalikko luettelee kunkin tunnistimen tekemät litteroinnit.

Mallin voi jättää tyhjäksi. Palvelu käyttää silloin omaa oletustaan.

## Minkä mallin valitset {#which-model-to-choose}

Taulukko luettelee kuvan neljän palvelun puheesta tekstiksi -mallit. **Lihavoidut** mallit ovat kuvassa määritetyt. X.ai-tunnistimen malli on tyhjä, joten käytetään palvelun oletusta, **`grok-voice-transcribe-2.0`**.

| Palvelu ja osoite | Malli | Mihin se on tarkoitettu |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Malli, jota OpenAI suosittelee alkuperäiskieliselle tallennetulle puheelle. |
| | **`gpt-4o-transcribe`** | Yleiskäyttöinen litterointi. |
| | `gpt-4o-mini-transcribe` | Edellisen kevyempi ja halvempi muunnelma. |
| | `gpt-4o-transcribe-diarize` | Merkitsee, kuka puhuu milloin. Käytä sitä vain, jos tarvitset sitä. |
| | `whisper-1` | Vanhempi Whisper-malli, säilytetty erityiskäyttöön, kuten sanakohtaisiin aikaleimoihin ja tekstityksiin. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Yleiskäyttöinen litterointi yli 90 kielellä puhujien erottelun kera. |
| | `scribe_v2_medical` | Sama, viritetty kliiniseen ääneen. |
| | `scribe_v1` | Ensimmäinen sukupolvi; vanhentunut, käytä `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Deepgramin paras yleiskäyttöinen malli kokouksiin, meluisaan ja monikieliseen ääneen. |
| | **`nova-2`** | Edellinen sukupolvi; pidä se kielille, joita `nova-3` ei vielä tue. |
| | `enhanced` | Vanhempi taso, jossa on vähemmän virheitä kuin `base`-tasossa. |
| | `base` | Vanhin taso, suurille määrille. |
| | `whisper` | Whisper Deepgramin ajamana. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Oletus; 25 kieltä. |
| | `grok-voice-transcribe-1.0` | Vanhentunut: palvelu ohjaa sen `2.0`:aan. |

Hyvä tietää ennen valintaa:

- **Tiedostokoko.** OpenAI ottaa vastaan enintään 25 Mt:n tiedostoja; X.ai enintään 500 Mt:n. Pitkä keskustelu voi olla suurempi kuin mitä pilvipalvelu hyväksyy.
- **Hinta.** Pilvipalvelut laskuttavat äänen minuuttien mukaan, ja hinnat vaihtelevat malleittain ja muuttuvat; lue ne palvelun omalta sivulta ennen vaihtamista.
- **Kielet.** Jokaisella palvelulla on oma luettelonsa; tarkista omasi ja aseta [Kieli](#language)-koodi, jos tunnistin arvaa väärin.
- **Reaaliaikaiset mallit**, kuten `scribe_v2_realtime` tai Deepgramin `flux`, on tehty suoriin lähetyksiin eivätkä ole taulukossa: puhelin litteroi valmiita tallenteita.

Palvelun malliluettelo muuttuu usein. Jos haluamasi malli puuttuu tästä, palvelun omassa dokumentaatiossa on ajantasainen luettelo — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; **Malli** on nimi täsmälleen siinä muodossa kuin palvelu sen antaa.

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

Ennen kuin luotat palvelimeen, tee testitallenne ja katso litterointia [Tallenteet-ikkunassa](/recordings/recordings-window): keskustelu kielellä, jota malli osaa huonosti, paljastaa sen heti.
