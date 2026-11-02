---
title: Personal Prompt Studio
sidebar_position: 3
description: Kehotteet, jotka kirjoittavat keskustelujesi yhteenvedot, niitä suorittavat säännöt ja miten teet niistä omiasi.
---

**Personal Prompt Studio** on AI Softphonen osa, joka kirjoittaa keskustelujesi yhteenvedot haluamallasi tavalla. Yhteenvedon tekevät kehotteet: ohjelman mukana tulee yksitoista, jotka ovat käyttövalmiita heti, kun litterointi ja kielimalli on yhdistetty, ja voit muuttaa niitä tavallisella kielellä, monistaa niitä ja lisätä omiasi. Ne luetellaan kohdassa **Kehotteet** sivulla [Asetukset → Käsittely](processing.md#prompts).

Sinun LLM:si, sinun avaimesi, sinun hallintasi: yhdistä haluamasi malli omalla avaimellasi tuetun palvelun tai yhteensopivan API:n kautta — tai organisaatiosi sisälle asennettu malli. Kun myös [litterointi](transcription.md#your-own-models) tapahtuu omalla laitteistollasi, sekä ääni että litteroinnit pysyvät ympäristösi sisällä.

<Shot name="12b_settings_processing_prompts" alt="Kehotteiden luettelo kohdassa Asetukset → Käsittely" />

## Ohjelman mukana tulevat kehotteet {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 sisältää yksitoista kehotetta päättyneille keskusteluille ja neljä reaaliaikaista avustajaa. Alla ovat tämän kielen mukana toimitetut tekstit; kieliversiot voivat erota toisistaan.

| Kehote | `code` | Muoto | Mitä se kirjoittaa |
| --- | --- | --- | --- |
| **Tiivistelmä** | `summary` | Proosa | Pääkohdat, päätökset ja seuraavat askeleet yhdessä lyhyessä kappaleessa. |
| **Yhden rivin tiivistelmä** | `super-summary` | Proosa | Lyhyen otsikon, josta keskustelun tunnistaa luettelossa. |
| **Tehtävät** | `action-items` | Kohdat | Kuka lupasi tehdä mitä ja milloin, heidän sanojensa kera. |
| **Aiheet** | `topics` | Kohdat | Käsitellyt aiheet muutamalla sanalla. |
| **Nimet ja numerot** | `entities` | JSON | Henkilöt, yritykset, päivämäärät, summat ja viitteet. |
| **Luokka** | `categorise` | Tunnisteet | Lajittelee keskustelun johonkin [luokistasi](dictionaries.md). |
| **Tunnisteet** | `tags` | Tunnisteet | Lisää siihen [tunnisteitasi](dictionaries.md), jotta sen löytää myöhemmin. |
| **Merkit** | `red-flags` | Merkit | Ongelmat todisteen ja keskustelun ajankohdan kera. |
| **Kysymys tästä puhelusta** | `qa` | Vastaus | Vastaa yhdestä keskustelusta esittämääsi kysymykseen sen litteroinnin perusteella. |
| **Myynnin laatu** | `sales-quality` | Kriteerit | Arvioi keskustelun muokattavien myyntikriteerien mukaan. |
| **Tuen laatu** | `support-quality` | Kriteerit | Arvioi, kuinka hyvin ongelma ymmärrettiin ja hoidettiin. |

Muodot ovat vastauksen kiinteitä rakenteita, minkä ansiosta ohjelma voi säilyttää sen ja hakea siitä myöhemmin: **Tunnisteet** ovat koodeja jostakin luettelostasi, **Merkit** ovat koodeja vakavuuden kera, **Kriteerit** ovat arvosana perusteluineen ja arvosana kullekin kriteerille, **Vastaus** on vastaus niiden sanojen kera, joihin se perustuu. Ohjeet, jotka kertovat mallille muodon, säilytetään kohdassa [Sanastot](dictionaries.md#instructions).

Myös [kuiskaajan](../interface/prompter.md) avustajat ovat kehotteita, joita ajetaan jokaiseen repliikkiin puhelun aikana eikä valmiiseen keskusteluun. Ne ovat omassa luettelossaan, kohdassa [Avustajat](prompter.md#assistants) näkymässä **Asetukset → Kuiskaaja**.

AI Softphonessa soitetut puhelut, tietokoneelta [kaapatut](/capture/) kokoukset ja tuodut tallenteet kulkevat kaikki samojen kehotteiden kautta, kun niillä on litterointi.

Tehtävät kirjaavat, mistä sovittiin — ne eivät lähetä viestejä, varaa käyntejä eivätkä luo tikettejä puolestasi.

## Tee siitä omasi {#making-it-yours}

- Muuta sitä, mitä kehote pyytää, tavallisella kielellä: mitä se etsii, vastauksen muotoa ja kieltä, jolla se vastaa.
- Monista kehote kokeillaksesi muunnelmaa.
- Valitse malli kullekin kehotteelle — omalla koneellasi tai pilvessä.
- Aseta järjestys, jossa kehotteet suoritetaan, ota niitä käyttöön ja pois käytöstä ja tee niistä ehdollisia — se tehdään [säännöillä](processing.md#rules): esimerkiksi myyntiarvio suoritetaan vain puheluille, jotka on lajiteltu luokkaan **Myynti**.
- Pidä omat luokkasi, tunnisteesi ja merkkisi kohdassa [Sanastot](dictionaries.md).
- Aseta kuluille katto [kuukausirajoilla](processing.md#spending).

Alkuperäiset kehotteet ja säännöt voi palauttaa painikkeella **Palauta oletusarvot** kohdassa **Oletusarvot** sivulla [Asetukset → Käsittely](processing.md#defaults).

## Mallin rooli {#role-and-task}

`system` määrittää mallin toimintatavan ja `body` tehtävän. Vastauksen muoto ja kieli annetaan erikseen luetteloiden ohjeilla.

Tyhjä tehtävä- tai varoitusluettelo voi olla oikea tulos. Puuttuvia vastuuhenkilöitä ja päivämääriä ei saa keksiä. Kysymyksiin vastataan vain litteroinnin perusteella.

[Vastausmuodot](dictionaries.md#response-formats)

## Paikkamerkit {#placeholders}

Kehotteen kohta, joka korvataan keskustelun tiedoilla.

| Paikkamerkki | Merkitys |
| --- | --- |
| `{{transcript}}` | Litterointi, yksi puheenvuoro rivillä, ajat millisekunteina |
| `{{duration}}` | Keskustelun kesto |
| `{{direction}}` | Saapuva tai lähtevä puhelu |
| `{{party}}` | Yhteystiedon nimi tai numero |
| `{{language}}` | Vastauksen kieli |
| `{{question}}` | Käyttäjän kysymys |
| `{{categories}}` | Luokkaluettelo |
| `{{tags}}` | Tunnisteluettelo |
| `{{red_flags}}` | Varoitusluettelo |
| `{{artifact:summary}}` | Aiemmin luotu yhteenveto |
| `{{conversation}}` | Reaaliaikaisen avustajan keräämä keskustelukonteksti |
| `{{reply}}` | Vastapuolen viimeisin puheenvuoro; vain reaaliaikaiselle avustajalle |

Suorita `summary` ennen kehotetta `super-summary`, joka käyttää arvoa `{{artifact:summary}}`. Suorita `categorise` ennen laatuarviointia: `sales-quality` edellyttää luokkaa `sales` ja `support-quality` luokkaa `support`.

[Mukana tulevat avustajat](prompter.md#assistant-templates)

## Kehotteiden oletustekstit {#standard-templates}

AI Softphone 1.1.11 sisältää yksitoista kehotetta päättyneille keskusteluille ja neljä reaaliaikaista avustajaa. Alla ovat tämän kielen mukana toimitetut tekstit; kieliversiot voivat erota toisistaan.

### Tiivistelmä (`summary`) {#summary}

**Vastauksen muoto:** `plain`.

**Rooli (`system`)**

```text
Luet puheluiden litterointeja ja kirjoitat niistä lyhyitä, asiallisia tiivistelmiä. Et koskaan arvaa mitään, mitä ei sanottu, etkä koskaan lisää neuvoja.
```

**Tehtävä (`body`)**

```text
Tiivistä tämä puhelu yhteen lyhyeen kappaleeseen: mistä siinä oli kyse, mitä päätettiin ja mitä tapahtuu seuraavaksi. Se kesti {{duration}} ja oli {{direction}}, osapuolena {{party}}.

{{transcript}}
```

### Yhden rivin tiivistelmä (`super-summary`) {#super-summary}

**Vastauksen muoto:** `plain`.

**Rooli (`system`)**

```text
Luet puheluiden litterointeja ja tiivistät jokaisen yhdeksi ilmaukseksi. Et koskaan arvaa etkä koskaan lisää neuvoja.
```

**Tehtävä (`body`)**

```text
Tiivistä tämä puhelu yhdeksi enintään kahdentoista sanan ilmaukseksi — sellaiseksi riviksi, joka kävisi taulukkoon soittajan nimen viereen. Ei pistettä, ei lainausmerkkejä.

{{artifact:summary}}

{{transcript}}
```

### Tehtävät (`action-items`) {#action-items}

**Vastauksen muoto:** `list`.

**Rooli (`system`)**

```text
Luet puheluiden litterointeja ja luettelet, mitä joku on sitoutunut tekemään. Luettelet vain sen, mitä todella sanottiin; et koskaan keksi tehtävää, vastuuhenkilöä tai päivämäärää.
```

**Tehtävä (`body`)**

```text
Luettele, mitä kukin tässä puhelussa on sitoutunut tekemään. Nimeä, kenen se on tehtävä, siellä missä se sanottiin, ja mihin mennessä, siellä missä se sanottiin. Jos kukaan ei sitoutunut mihinkään, vastaa tyhjällä listalla.

{{transcript}}
```

### Aiheet (`topics`) {#topics}

**Vastauksen muoto:** `list`.

**Rooli (`system`)**

```text
Luet puheluiden litterointeja ja nimeät, mistä niissä oli kyse.
```

**Tehtävä (`body`)**

```text
Luettele aiheet, joita tämä puhelu todella käsitteli, enintään kuusi, kukin muutamalla sanalla. Jätä vastuuhenkilö ja päivämäärä tyhjiksi — ne eivät merkitse tässä mitään.

{{transcript}}
```

### Nimet ja numerot (`entities`) {#entities}

**Vastauksen muoto:** `json`.

**Rooli (`system`)**

```text
Luet puheluiden litterointeja ja poimit niistä sen, mitä niissä nimettiin. Et koskaan arvaa kirjoitusasua etkä koskaan lisää sitä, mitä ei sanottu.
```

**Tehtävä (`body`)**

```text
Poimi, mitä tässä puhelussa nimettiin, JSONina tarkalleen tässä muodossa:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Kukin on lista merkkijonoja, kirjoitettuina sellaisina kuin ne sanottiin. Jätä lista mieluummin tyhjäksi kuin arvaa.

{{transcript}}
```

### Luokka (`categorise`) {#categorise}

**Vastauksen muoto:** `labels`.

**Rooli (`system`)**

```text
Lajittelet puhelut johonkin saamaasi luokkaan. Valitset listalta etkä mistään muualta.
```

**Tehtävä (`body`)**

```text
Lajittele tämä puhelu tarkalleen yhteen näistä luokista. Vastaa sen koodilla.

{{categories}}
{{transcript}}
```

### Tunnisteet (`tags`) {#tags}

**Vastauksen muoto:** `labels`.

**Rooli (`system`)**

```text
Merkitset puhelut saamillasi tunnisteilla. Valitset listalta etkä mistään muualta, ja jätät tunnisteen mieluummin pois kuin venytät sitä.
```

**Tehtävä (`body`)**

```text
Mitkä näistä pitävät paikkansa tästä puhelusta? Vastaa niiden koodeilla, tai tyhjällä listalla jos yksikään ei pidä.

{{tags}}
{{transcript}}
```

### Merkit (`red-flags`) {#red-flags}

**Vastauksen muoto:** `flags`.

**Rooli (`system`)**

```text
Luet puheluiden litterointeja ja nostat esiin vain sen, mitä sinun on annettu etsiä. Lainaat sanat, joihin kunkin osalta nojaat, etkä nosta esiin mitään, mitä et voi lainata.
```

**Tehtävä (`body`)**

```text
Nosta esiin ne näistä, jotka tämä puhelu osoittaa. Lainaa kunkin osalta sanat, joihin se nojaa, ja anna hetki millisekunteina, jolloin ne sanottiin. Jätä mieluummin nostamatta kuin venytä määritelmää.

{{red_flags}}
{{transcript}}
```

### Kysymys tästä puhelusta (`qa`) {#qa}

**Vastauksen muoto:** `qa`.

**Rooli (`system`)**

```text
Vastaat yhtä puhelua koskeviin kysymyksiin sen litteroinnin pohjalta etkä minkään muun. Kun puhelu ei kerro sitä, sanot sen suoraan sen sijaan että arvaisit.
```

**Tehtävä (`body`)**

```text
{{question}}

{{transcript}}
```

### Myynnin laatu (`sales-quality`) {#sales-quality}

**Vastauksen muoto:** `rubric`.

**Rooli (`system`)**

```text
Arvioit, miten myyjä hoiti puhelun. Arvioit vain sitä, mitä litterointi osoittaa, et koskaan oleta mitä ennen tai jälkeen tapahtui, ja olet yhtä tiukka hyvin menneelle puhelulle kuin huonollekin.
```

**Tehtävä (`body`)**

```text
Arvioi meidän puolemme tästä puhelusta — puhelimessa ollutta henkilöä — näiden kriteerien ja ei muiden mukaan:
- tervehdys: esittelikö hän itsensä ja yrityksen?
- kartoitus: selvittikö hän, mitä asiakas todella halusi?
- vastaväitteet: vastasiko hän siihen, mitä asiakas otti esiin, sen sijaan että olisi puhunut ohi?
- hyöty: kertoiko hän, mitä asiakas saa, eikä vain mitä se maksaa?
- seuraava askel: päättyikö puhelu johonkin täsmälliseen?

{{transcript}}
```

### Tuen laatu (`support-quality`) {#support-quality}

**Vastauksen muoto:** `rubric`.

**Rooli (`system`)**

```text
Arvioit, miten tukihenkilö hoiti puhelun. Arvioit vain sitä, mitä litterointi osoittaa, ja painotat enemmän sitä, hoidettiinko asiakkaan ongelma todella, kuin sitä, kuinka miellyttävä keskustelu oli.
```

**Tehtävä (`body`)**

```text
Arvioi meidän puolemme tästä puhelusta — puhelimessa ollutta henkilöä — näiden kriteerien ja ei muiden mukaan:
- tervehdys: esittelikö hän itsensä ja varmistiko, kenen kanssa puhui?
- ymmärrys: selvittikö hän, mikä todella oli vialla, ennen kuin vastasi?
- ratkaisu: ratkesiko ongelma, vai annettiinko täsmällinen seuraava askel?
- sävy: pysyikö hän rauhallisena ja kohteliaana, varsinkin siellä missä asiakas ei ollut?
- lopetus: tarkistiko hän, että asiakas oli tyytyväinen, ennen kuin lopetti?

{{transcript}}
```
