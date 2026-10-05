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
| **Myynti** | `sales` | Myyminen, tarjouksen tekeminen, neuvottelu tai oston seuranta — myös asiakas, joka kysyy, mitä jokin maksaa. |
| **Tuki** | `support` | Avun antaminen jo olemassa olevan tuotteen tai palvelun kanssa: vika, käyttöä koskeva kysymys, valitus toiminnasta. |
| **Yksityinen** | `personal` | Ei lainkaan liikeasiaa — yksityinen keskustelu, joka sattui käytäväksi tällä linjalla. |
| **Muu** | `other` | Liikeasia, mutta ei myyntiä eikä tukea: toimittaja, kollega, toimitus, väärä numero. Valitse tämä mieluummin kuin arvaat muiden välillä. |

Paina **Lisää** lisätäksesi oman luokan.

## Tunnisteet {#tags}

Merkinnät, jotka *voivat kaikki pitää paikkansa samassa keskustelussa*. Paina **Lisää** lisätäksesi sellaisen. Luettelo alkaa esimerkiksi näillä merkinnöillä:

| Nimi | Koodi | Käytetään |
| --- | --- | --- |
| **Takaisinsoitto luvattu** | `callback` | Joku tässä puhelussa lupasi soittaa takaisin tai pyysi, että hänelle soitetaan takaisin. |
| **Valitus** | `complaint` | Toinen osapuoli ilmaisi tyytymättömyytensä, ratkesipa asia tai ei. |
| **Siirretty eteenpäin** | `escalation` | Puhelu siirrettiin jollekulle toiselle, tai toinen osapuoli pyysi sitä. |
| **Tärkeä asiakas** | `vip` | Toista osapuolta kohdeltiin tärkeänä asiakkaana, tai hän sanoi olevansa sellainen. |

## Merkit {#red-flags}

Asiat, jotka vaativat huomiota, löydettyinä keskustelusta todisteen ja ajankohdan kera — esimerkiksi *Vihainen asiakas* tai *Lähtemisen riski*. Merkit piirretään punaisella [Tallenteet-ikkunassa](../recordings/recordings-window.md), ja jokaisella on vakavuus: matala, keskitaso tai korkea.

## Vastausmuodot ja kieli {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Asetukset → Sanastot: vastausmuodot ja kieliohjeet" />

Välilehdellä alempana ovat ohjeet, joista kehotteet kootaan. Ne säilytetään täällä, jotta jokainen kehote voi käyttää samaa muotoilua, ja voit muuttaa niitä kuten mitä tahansa muuta merkintää.

| Nimi | Koodi | Mitä se kertoo mallille |
| --- | --- | --- |
| **Tunnisteet** | `shape-labels` | Vastaa JSON-muodossa koodiluettelolla ja varmuudella kustakin, käyttäen vain saamasi luettelon koodeja. |
| **Arvosana** | `shape-score` | Vastaa arvosanalla, sen perustelulla ja sanoilla, joihin se perustuu. |
| **Kriteerit** | `shape-rubric` | Vastaa kokonaisarvosanalla ja arvosanalla kullekin kriteerille. |
| **Merkit** | `shape-flags` | Vastaa luettelon koodeilla, kukin vakavuuden kera. |
| **Vastaus** | `shape-qa` | Vastaa vastauksella tai sano suoraan, ettei keskustelu kerro sitä, sekä sanat, joihin vastaus perustuu. |
| **JSON** | `shape-json` | Vastaa pelkällä JSONilla, yllä pyydetyssä muodossa. |
| **Kuten puhuttiin** | `language-as-spoken` | Kirjoita sillä kielellä, jolla keskustelu käytiin. |
| **Kuten puhuttiin, nimettynä** | `language-as-spoken-named` | Sama, kieli nimeten. |
| **Nimetty kieli** | `language-named` | Kirjoita nimeämälläsi kielellä. |

Luettelon lopussa oleva **Lisää** lisää merkinnän.

## Oletusarvot {#defaults}

**Palauta oletusarvot** palauttaa jokaisen sanaston sellaiseksi kuin se tuli ohjelman mukana, käyttöliittymän nykyisellä kielellä. Siihen, minkä alle keskustelusi on jo lajiteltu, ei kosketa.
