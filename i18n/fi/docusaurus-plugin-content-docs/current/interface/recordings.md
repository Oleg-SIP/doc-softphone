---
title: Tallenteet-ikkuna
sidebar_position: 2
description: Keskustelujen kirjasto — suodata, toista, lue litterointi ja yhteenveto.
---

**Tallenteet** on paikka, jossa jokainen keskustelu on, tulipa se miten tahansa: puhelu, toisesta sovelluksesta kaapattu kokous tai tuotu tiedosto. Jokainen on luettelossa valmiin yhteenvedon kera.

<Shot name="01_recordings" alt="Tallenteet-välilehti: keskustelujen luettelo" />

## Keskustelun löytäminen {#finding-a-conversation}

Yläreunan palkissa on neljä suodatinta, hakukenttä ja valikko:

| Säädin | Rajaa luetteloa |
| --- | --- |
| **Laji** | sen mukaan, miten keskustelu tuli |
| **Ajanjakso** | päivämäärän mukaan |
| **Luokka** | sen luokan mukaan, johon se on lajiteltu — katso [Sanastot](../ai-processing/dictionaries.md) |
| **Merkintä** | sillä olevien merkintöjen mukaan |
| **Etsi** | sen mukaan, mitä siinä sanottiin — haku käy läpi kaiken tallentamasi litteroinnit |

Palkin oikeassa reunassa oleva **⋮**-painike avaa luettelolle lisää toimintoja: **Tuo tiedostoista**, **Vie CSV-muotoon** ja **Avaa selaimessa**.

## Luettelo {#the-list}

Jokaisella rivillä näkyy:

- kuvake keskustelun lajista: luuri puhelulle, ikkuna toisen sovelluksen kokoukselle;
- otsikko — toisen osapuolen nimi, numero tai kaapatulle kokoukselle **Toinen sovellus** — ja sen alla päivämäärä ja yhden rivin tiivistelmä;
- oikealla luokka ja sen pistemäärä (luku, esimerkiksi *Tuki · 2*), sitten tunnisteet ja lopuksi kesto.

Punaisella piirretyt tunnisteet ovat **merkkejä** (kuvassa *Vihainen asiakas* ja *Lähtemisen riski*); muut ovat tavallisia tunnisteita (*Valitus*, *Takaisinsoitto luvattu*). Keskustelusta, jolla ei ole tiivistelmää eikä luokkaa, ei ole vielä tehty yhteenvetoa — kuvan ensimmäinen rivi.

## Soitin {#the-player}

Valitse rivi avataksesi soittimen luettelon alle.

<Shot name="02_recording_details" alt="Valittu tallenne: soitin ja litterointi luettelon alla" />

- Kaksi aaltomuotoa ovat tallenteen kaksi kanavaa, yksi kummallekin keskustelun osapuolelle. Niiden alla oleva palkki vierittää pitkää tallennetta.
- **▶** toistaa ja keskeyttää; vasemmalla olevat ajat ovat sijainti ja kokonaiskesto.
- **1×** muuttaa nopeutta; **Molemmat** valitsee, kumman kanavan kuulet.
- Levykepainike tallentaa äänen, **×** sulkee soittimen.

## Litterointi ja yhteenveto {#the-transcript-and-the-write-up}

Soittimen alla on litterointi: yksi rivi puheenvuoroa kohti, sen sanomisajankohta ja puhujan nimi (**Sinä**, toisen osapuolen nimi tai kaapatussa kokouksessa **Toinen sovellus**). Napsauta riviä kuullaksesi sen hetken; toistokohdan alla oleva rivi korostetaan ja sanottava sana merkitään sen sisällä.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Litterointi äänen vieressä" />

Litteroinnin yläpuolella oleva pudotusvalikko valitsee, mitä näytetään — jonkin [tunnistimesi](../ai-processing/transcription.md) tekemä litterointi (tähti merkitsee tallenteen päälitterointia) tai yhteenveto kuten **Toiminnot**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Keskustelun jälkeen jääneet toiminnot" />

Pudotusvalikon oikealla puolella olevat neljä kuvaketta:

| Kuvake | Toiminto |
| --- | --- |
| Kipinät | Antaa mallin kirjoittaa valitun kohteen nyt. |
| Kaksi arkkia | Kopioi sen. |
| Levyke | Tallentaa sen tiedostoon. |
| Roskakori | Poistaa sen. |

Voit viedä litteroinnin pelkkänä tekstinä tai tekstityksenä.

Yhteenvedon tekevät [kehotteet](/ai-processing/prompt-studio) ja mallit, jotka olet määrittänyt kohdassa [Käsittely](../ai-processing/processing.md), [säännöillä](../ai-processing/processing.md#rules), jotka suoritetaan itsestään tai pyynnöstäsi. Tallenteiden säilytysaika asetetaan kohdassa [Puheluiden tallentaminen](../recordings/call-recording.md#retention).

## Tallenne, joka sinulla jo on {#a-recording-you-already-have}

Muualla — matkapuhelimella, sanelimella tai toisessa järjestelmässä — tehdyn tallenteen voi lisätä valinnalla **⋮ → Tuo tiedostoista**. Se arkistoidaan täsmälleen kuten soitettu puhelu: litteroidaan, siitä tehdään yhteenveto ja se löytyy samalla haulla.

## Tallenteen poistaminen {#deleting-a-recording}

Kun tallenne poistetaan, kaikki siitä tehty lähtee sen mukana: litterointi ja yhteenveto.
