---
title: Sanastot
sidebar_position: 4
description: Omat luokkasi, tunnisteesi ja merkkisi — sanat, joiden alle keskustelusi lajitellaan.
---

**Asetukset → Sanastot** sisältää sanat, joiden alle keskustelu voidaan lajitella, joilla se voidaan merkitä tai joiden perusteella se voidaan nostaa esiin. Nämä luettelot ovat se, mitä malleille näytetään ja mistä niiden on valittava, joten vastaus on aina jotain, mitä voit hakea myöhemmin.

<Shot name="13_settings_dictionaries" alt="Asetukset → Sanastot" />

**Näytä poistetut** näyttää poistamasi merkinnät.

Jokainen merkintä on nimi, lyhyt pienellä kirjoitettu koodi ja kuvaus, joka kertoo mallille, milloin se valitaan. Koodi on se, mikä tallennetaan ja minkä [REST API](../integration/rest-api.md#taxonomy-and-settings) palauttaa, joten se pysyy samana, kun nimeät merkinnän uudelleen.

## Luokat {#categories}

Mistä keskustelussa oli kyse; **keskustelua kohti valitaan yksi**. Ohjelma aloittaa neljällä:

| Nimi | Koodi | Käytetään |
| --- | --- | --- |
| **Myynti** | `sales` | Myyminen, tarjoaminen, neuvotteleminen tai ostoon palaaminen — myös asiakkaan kysymys siitä, paljonko jokin maksaa. |
| **Tuki** | `support` | Jonkun auttaminen tuotteen tai palvelun kanssa, joka hänellä jo on: vika, käyttöä koskeva kysymys, valitus siitä miten se toimii. |
| **Yksityinen** | `personal` | Ei lainkaan työasia — yksityinen keskustelu, joka sattui kulkemaan tätä linjaa. |
| **Muu** | `other` | Työasia, mutta ei myyntiä eikä tukea: toimittaja, kollega, toimitus, väärä numero. Valitse tämä sen sijaan että arvaisit muiden väliltä. |

Paina **Lisää** lisätäksesi oman luokan.

## Tunnisteet {#tags}

Merkinnät, jotka *voivat kaikki pitää paikkansa samassa keskustelussa*. Paina **Lisää** lisätäksesi sellaisen. Luettelo alkaa esimerkiksi näillä merkinnöillä:

| Nimi | Koodi | Käytetään |
| --- | --- | --- |
| **Takaisinsoitto luvattu** | `callback` | Joku tässä puhelussa lupasi soittaa takaisin tai pyysi, että hänelle soitetaan. |
| **Valitus** | `complaint` | Vastapuoli ilmaisi tyytymättömyyttä, ratkesipa se tai ei. |
| **Siirretty eteenpäin** | `escalation` | Puhelu annettiin jollekulle toiselle, tai vastapuoli pyysi sitä. |
| **Tärkeä asiakas** | `vip` | Vastapuolta kohdeltiin tärkeänä asiakkaana, tai hän sanoi olevansa sellainen. |

## Merkit {#red-flags}

Asiat, jotka vaativat huomiota, löydettyinä keskustelusta todisteen ja ajankohdan kera — esimerkiksi *Vihainen asiakas* tai *Lähtemisen riski*. Merkit piirretään punaisella [Tallenteet-ikkunassa](../interface/recordings.md), ja jokaisella on vakavuus: matala, keskitaso tai korkea.

| Nimi | Koodi | `severity` | Käytetään |
| --- | --- | --- | --- |
| **Vihainen asiakas** | `angry-customer` | `high` | Vastapuoli oli kuultavasti vihainen, loukkaava tai uhkasi lähteä. |
| **Lähtemisen riski** | `churn-risk` | `high` | Irtisanominen, uusimatta jättäminen tai toiselle siirtyminen tuli puheeksi, kuinka rauhallisesti tahansa. |
| **Lupaus annettu** | `promise-made` | `medium` | Meidän puolemme sitoutui johonkin täsmälliseen — päivään, hintaan, korjaukseen, hyvitykseen. |
| **Arkaluontoiset tiedot** | `sensitive-data` | `high` | Korttinumero, salasana, asiakirjan numero tai mikä tahansa muu, joka ei kuulu tallenteeseen, luettiin ääneen. |
| **Kilpailija** | `competitor` | `low` | Vastapuoli nimesi jonkun muun, joka tarjoaa samaa, tai vertasi meitä siihen. |

## Ohjeet {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Asetukset → Sanastot: vastausmuodot ja kieliohjeet" />

*Se, mitä jokaiseen kehotteeseen lisätään vastauksen muodosta ja kielestä, jolla se kirjoitetaan.* Ne säilytetään täällä, jotta jokainen kehote voi käyttää samaa muotoilua, ja voit muuttaa niitä kuten mitä tahansa muuta merkintää — tai kirjoittaa omia, kuten *vastaa lyhyesti* tai *älä koskaan mainitse hintaa*, ja rastittaa ne kohdassa **Lähetä myös** missä tahansa kehotteessa.

| Nimi | Koodi | Mitä se kertoo mallille |
| --- | --- | --- |
| **Proosa** | `shape-plain` | Vastaa tavallisena proosana, ilman JSONia, luetteloita tai otsikoita. |
| **Kohdat** | `shape-list` | Vastaa luettelolla tehtävistä asioista, kukin kenen ja milloin. |
| **Tunnisteet** | `shape-labels` | Vastaa JSON-muodossa koodiluettelolla ja varmuudella kustakin, käyttäen vain saamasi luettelon koodeja. |
| **Arvosana** | `shape-score` | Vastaa arvosanalla, sen perustelulla ja sanoilla, joihin se perustuu. |
| **Kriteerit** | `shape-rubric` | Vastaa kokonaisarvosanalla ja arvosanalla kullekin kriteerille. |
| **Merkit** | `shape-flags` | Vastaa luettelon koodeilla, kukin vakavuuden kera. |
| **Vastaus** | `shape-qa` | Vastaa vastauksella tai sano suoraan, ettei keskustelu kerro sitä, sekä sanat, joihin vastaus perustuu. |
| **JSON** | `shape-json` | Vastaa pelkällä JSONilla, yllä pyydetyssä muodossa. |
| **Kuten puhuttiin** | `language-as-spoken` | Kirjoita sillä kielellä, jolla keskustelu käytiin. |
| **Kuten puhuttiin, nimettynä** | `language-as-spoken-named` | Sama, kieli nimeten. |
| **Nimetty kieli** | `language-named` | Kirjoita nimeämälläsi kielellä. |

Luettelon alussa oleva **Lisää** lisää merkinnän.

## Oletusarvot {#defaults}

**Palauta oletusarvot** palauttaa jokaisen sanaston sellaiseksi kuin se tuli ohjelman mukana, käyttöliittymän nykyisellä kielellä. Siihen, minkä alle keskustelusi on jo lajiteltu, ei kosketa.

## Vastausmuodot {#response-formats}

Lohkot toistavat mukana toimitetut ohjeet. Ne kuvaavat vastausmuotoja; vaihtoehtomerkinnät eivät ole suoritettavia JSON-esimerkkejä.

### Proosa (`shape-plain`) {#shape-plain}

```text
Vastaa proosana. Älä käytä JSONia, listoja tai otsikoita.
```

### Kohdat (`shape-list`) {#shape-list}

```text
Vastaa vain JSONilla, tarkalleen tässä muodossa:
{"items": [{"text": "mitä on tehtävä", "owner": "kuka, tai tyhjä", "due": "milloin, tai tyhjä"}]}
Palauta tyhjä taulukko, kun luetteloitavaa ei ole. Älä kirjoita mitään JSONin ulkopuolelle.
```

### Tunnisteet (`shape-labels`) {#shape-labels}

```text
Vastaa vain JSONilla, tarkalleen tässä muodossa:
{"labels": [{"code": "koodi saamastasi listasta", "confidence": 0.0}]}
Käytä vain listan koodeja. Palauta tyhjä taulukko, kun mikään ei sovi.
Älä keksi koodia äläkä kirjoita mitään JSONin ulkopuolelle.
```

### Arvosana (`shape-score`) {#shape-score}

```text
Vastaa vain JSONilla, tarkalleen tässä muodossa:
{"score": 3, "rationale": "miksi tuo luku eikä yhtä korkeampi",
 "evidence": [{"at_ms": 0, "quote": "sanat joihin nojaat"}]}
Arvosana on kokonaisluku 1–5. Älä kirjoita mitään JSONin ulkopuolelle.
```

### Kriteerit (`shape-rubric`) {#shape-rubric}

```text
Vastaa vain JSONilla, tarkalleen tässä muodossa:
{"overall": 3, "rationale": "miksi tuo luku eikä yhtä korkeampi",
 "criteria": [{"name": "kriteeri sellaisena kuin se sinulle annettiin",
               "verdict": "pass" tai "weak" tai "fail" tai "n/a",
               "note": "yksi lause"}]}
Arvioi jokainen saamasi kriteeri eikä muita. Kokonaisarvosana on kokonaisluku
1–5. Älä kirjoita mitään JSONin ulkopuolelle.
```

### Merkit (`shape-flags`) {#shape-flags}

```text
Vastaa vain JSONilla, tarkalleen tässä muodossa:
{"flags": [{"code": "koodi saamastasi listasta",
            "severity": "low" tai "medium" tai "high",
            "evidence": "sanat joihin nojaat",
            "at_ms": 0}]}
Käytä vain listan koodeja, ja nosta kukin enintään kerran. Palauta tyhjä
taulukko, kun mikään ei päde. Älä kirjoita mitään JSONin ulkopuolelle.
```

### Vastaus (`shape-qa`) {#shape-qa}

```text
Vastaa vain JSONilla, tarkalleen tässä muodossa:
{"answer": "vastauksesi, tai sano suoraan ettei keskustelu kerro sitä",
 "citations": [{"at_ms": 0, "quote": "sanat joihin vastauksesi nojaa"}]}
Älä vastaa mistään muusta kuin keskustelusta. Älä kirjoita mitään
JSONin ulkopuolelle.
```

### JSON (`shape-json`) {#shape-json}

```text
Vastaa vain JSONilla, yllä pyydetyssä muodossa. Älä kirjoita mitään JSONin ulkopuolelle.
```

### Kuten puhuttiin (`language-as-spoken`) {#language-as-spoken}

```text
Kirjoita vastauksesi samalla kielellä, jolla keskustelu käytiin.
```

### Kuten puhuttiin, nimettynä (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Kirjoita vastauksesi samalla kielellä, jolla keskustelu käytiin, eli kielellä {language}.
```

### Nimetty kieli (`language-named`) {#language-named}

```text
Kirjoita vastauksesi tällä kielellä: {language}.
```
