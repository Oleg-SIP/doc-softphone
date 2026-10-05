---
title: Käsittely
sidebar_position: 2
description: Keskustelujen automaattinen käsittely, kuukausittaiset kulurajat, kielimallit, kehotteet ja niitä suorittavat säännöt.
---

**Asetukset → Käsittely** päättää, mitä keskustelulle tapahtuu sen tallentamisen jälkeen, mikä malli tekee työn ja mitä se saa maksaa.

<Shot name="12_settings_processing" alt="Asetukset → Käsittely" />

## Käsittele keskustelut automaattisesti {#process-conversations-automatically}

- **Pois:** mitään ei tapahdu, ennen kuin pyydät sitä [Tallenteet-ikkunassa](../recordings/recordings-window.md).
- **Päällä:** alla olevat [säännöt](#rules) suoritetaan itsestään. Tämä muuttaa keskustelun tiivistelmäksi, luokaksi ja kaikeksi muuksi ilman, että kenenkään tarvitsee painaa mitään. Pilvessä oleva malli laskuttaa jokaisesta näistä askelista.

Valintaruudun alla ohjelma näyttää, mitä tässä kuussa on käytetty ja kuinka monella pyynnöllä, esimerkiksi *Tässä kuussa: 40.492 tokenia, 84 pyynnöllä, maksutta.*

## Rajat {#limits}

| Kenttä | Merkitys |
| --- | --- |
| **Raharaja, kuukaudessa** | Enimmäismäärä, jonka mallit saavat maksaa kuukaudessa. |
| **Tokenraja, kuukaudessa** | Enimmäismäärä tokeneita, joita ne saavat käyttää kuukaudessa. |

Rajoja on kaksi, koska kuukauden voi laskea kahdella tavalla. Molemmat ovat tyhjiä, kunnes täytät ne. Kun jompikumpi saavutetaan, automaattiset säännöt pysähtyvät kuukauden vaihtumiseen asti. **Itse pyytämääsi ei koskaan pysäytetä.**

## Kielimallit {#language-models}

Mallit, jotka lukevat litteroinnin ja kirjoittavat siitä. Paina **Lisää** lisätäksesi sellaisen. Jokainen näkyy luettelossa nimellään, ja sen alla on mallin tunniste ja palvelun osoite, esimerkiksi `qwen3-32b · http://llm.local:8000/v1`. Merkinnällä **oletus** varustettua käytetään oletuksena. Mallin lomakkeessa oleva painike tarkistaa, että palvelu todella vastaa, ennen kuin luotat siihen.

- Malli **omalla koneellasi** pitää jokaisen keskustelun talon sisällä eikä maksa mitään.
- Pilvessä oleva malli — OpenAI, Claude, Mistral, DeepSeek, Groq ja muut — laskutetaan käytön mukaan. Ohjelma näyttää jokaisen kutsun hinnan tokeneina ja rahana.

## Kehotteet {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Asetukset → Käsittely: kehotteet" />

*Se, mitä malleilta pyydetään.* Jokainen kehote tuli ohjelman mukana, ja jokainen on sinun muutettavissasi — ja palautettavissasi. Jokainen näkyy luettelossa nimellään, ja sen alla kerrotaan, mitä se kirjoittaa ja missä muodossa. Muoto — **Vastaus**, **Kohdat**, **Tunnisteet**, **JSON**, **Proosa**, **Merkit** tai **Kriteerit** — päättää, miten vastaus säilytetään ja näytetään. Kehotteet on kuvattu sivulla [Personal Prompt Studio](prompt-studio.md). **Lisää** tekee oman kehotteen.

## Säännöt {#rules}

<Shot name="12c_settings_processing_rules" alt="Asetukset → Käsittely: säännöt" />

*Se, mikä suoritetaan itsestään, tässä järjestyksessä. Kukin laukeaa enintään kerran keskustelua kohti.* Sääntö on rivi, jossa on valintaruutu, joka ottaa sen käyttöön tai poistaa käytöstä, sen nimi ja sen alla, mitä se tekee. **▲** ja **▼** muuttavat järjestystä. Ohjelman mukana tulee kahdeksan:

| Sääntö | Toiminto | Milloin |
| --- | --- | --- |
| **Litteroi jokainen keskustelu** | Litteroi sen. | aina |
| **Tiivistä se** | Pyytää mallilta: **Tiivistelmä**. | aina |
| **Tiivistä se yhdeksi riviksi** | Pyytää mallilta: **Yhden rivin tiivistelmä**. | aina |
| **Lajittele se luokkaan** | Pyytää mallilta: **Luokka**. | aina |
| **Merkitse se** | Pyytää mallilta: **Tunnisteet**. | aina |
| **Nosta esiin kaikki, mikä ansaitsee katseen** | Pyytää mallilta: **Merkit**. | aina |
| **Arvioi se, jos kyse oli myynnistä** | Pyytää mallilta: **Myynnin laatu**. | vain jos luokka on **Myynti** |
| **Arvioi se, jos kyse oli tuesta** | Pyytää mallilta: **Tuen laatu**. | vain jos luokka on **Tuki** |

Järjestyksellä on väliä: kaksi viimeistä sääntöä tarvitsevat luokan, jonka niitä edeltävä sääntö on asettanut. **Lisää** tekee oman säännön.

## Oletusarvot {#defaults}

**Palauta oletusarvot** palauttaa kehotteet ja säännöt sellaisiksi kuin ne tulivat ohjelman mukana, käyttöliittymän nykyisellä kielellä. Kielimalleihisi ei kosketa.

Ohjelman mukana tulleet kehotteet ja säännöt pysyvät sillä kielellä, jolla ne olivat, kun vaihdat käyttöliittymän kieltä; **Palauta oletusarvot** tuo ne uudelle kielelle. Jokainen kehote merkitään silloin oikealla *muutettu*.
