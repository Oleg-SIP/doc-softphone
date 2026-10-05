---
title: Personal Prompt Studio
sidebar_position: 3
description: Kehotteet, jotka kirjoittavat keskustelujesi yhteenvedot, niitä suorittavat säännöt ja miten teet niistä omiasi.
---

**Personal Prompt Studio** on AI Softphonen osa, joka kirjoittaa keskustelujesi yhteenvedot haluamallasi tavalla. Yhteenvedon tekevät kehotteet: ohjelman mukana tulee yksitoista, jotka ovat käyttövalmiita heti, kun litterointi ja kielimalli on yhdistetty, ja voit muuttaa niitä tavallisella kielellä, monistaa niitä ja lisätä omiasi. Ne luetellaan kohdassa **Kehotteet** sivulla [Asetukset → Käsittely](processing.md#prompts).

Sinun LLM:si, sinun avaimesi, sinun hallintasi: yhdistä haluamasi malli omalla avaimellasi tuetun palvelun tai yhteensopivan API:n kautta — tai organisaatiosi sisälle asennettu malli. Kun myös [litterointi](transcription.md#your-own-models) tapahtuu omalla laitteistollasi, sekä ääni että litteroinnit pysyvät ympäristösi sisällä.

<Shot name="12b_settings_processing_prompts" alt="Kehotteiden luettelo kohdassa Asetukset → Käsittely" />

## Ohjelman mukana tulevat kehotteet {#the-prompts-that-come-with-the-program}

Toinen sarake on se, mitä luettelo näyttää kehotteen nimen alla: mitä se kirjoittaa ja missä muodossa.

| Kehote | Muoto | Mitä se kirjoittaa |
| --- | --- | --- |
| **Tiivistelmä** | Proosa | Pääkohdat, päätökset ja seuraavat askeleet yhdessä lyhyessä kappaleessa. |
| **Yhden rivin tiivistelmä** | Proosa | Lyhyen otsikon, josta keskustelun tunnistaa luettelossa. |
| **Tehtävät** | Kohdat | Kuka lupasi tehdä mitä ja milloin, heidän sanojensa kera. |
| **Aiheet** | Kohdat | Käsitellyt aiheet muutamalla sanalla. |
| **Nimet ja numerot** | JSON | Henkilöt, yritykset, päivämäärät, summat ja viitteet. |
| **Luokka** | Tunnisteet | Lajittelee keskustelun johonkin [luokistasi](dictionaries.md). |
| **Tunnisteet** | Tunnisteet | Lisää siihen [tunnisteitasi](dictionaries.md), jotta sen löytää myöhemmin. |
| **Merkit** | Merkit | Ongelmat todisteen ja keskustelun ajankohdan kera. |
| **Kysymys tästä puhelusta** | Vastaus | Vastaa yhdestä keskustelusta esittämääsi kysymykseen sen litteroinnin perusteella. |
| **Myynnin laatu** | Kriteerit | Arvioi keskustelun muokattavien myyntikriteerien mukaan. |
| **Tuen laatu** | Kriteerit | Arvioi, kuinka hyvin ongelma ymmärrettiin ja hoidettiin. |

Muodot ovat vastauksen kiinteitä rakenteita, minkä ansiosta ohjelma voi säilyttää sen ja hakea siitä myöhemmin: **Tunnisteet** ovat koodeja jostakin luettelostasi, **Merkit** ovat koodeja vakavuuden kera, **Kriteerit** ovat arvosana perusteluineen ja arvosana kullekin kriteerille, **Vastaus** on vastaus niiden sanojen kera, joihin se perustuu. Ohjeet, jotka kertovat mallille muodon, säilytetään kohdassa [Sanastot](dictionaries.md#answer-shapes-and-language).

AI Softphonessa soitetut puhelut, tietokoneelta [kaapatut](/capture/) kokoukset ja tuodut tallenteet kulkevat kaikki samojen kehotteiden kautta, kun niillä on litterointi.

Tehtävät kirjaavat, mistä sovittiin — ne eivät lähetä viestejä, varaa käyntejä eivätkä luo tikettejä puolestasi.

## Tee siitä omasi {#making-it-yours}

- Muuta sitä, mitä kehote pyytää, tavallisella kielellä: mitä se etsii, vastauksen muotoa ja kieltä, jolla se vastaa.
- Monista kehote kokeillaksesi muunnelmaa.
- Valitse malli kullekin kehotteelle — omalla koneellasi tai pilvessä.
- Aseta järjestys, jossa kehotteet suoritetaan, ota niitä käyttöön ja pois käytöstä ja tee niistä ehdollisia — se tehdään [säännöillä](processing.md#rules): esimerkiksi myyntiarvio suoritetaan vain puheluille, jotka on lajiteltu luokkaan **Myynti**.
- Pidä omat luokkasi, tunnisteesi ja merkkisi kohdassa [Sanastot](dictionaries.md).
- Aseta kuluille katto [kuukausirajoilla](processing.md#limits).

Alkuperäiset kehotteet ja säännöt voi palauttaa painikkeella **Palauta oletusarvot** kohdassa **Oletusarvot** sivulla [Asetukset → Käsittely](processing.md#defaults).
