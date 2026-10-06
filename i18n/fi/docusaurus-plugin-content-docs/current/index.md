---
slug: /
title: AI Softphonen dokumentaatio
sidebar_position: 1
description: Mikä AI Softphone on, missä se toimii ja missä kukin ohjelman osa on kuvattu.
---

[AI Softphone](https://ai-softphone.com/) on IP-vaihteen ohjelmistopuhelin, joka muuttaa jokaisen keskustelun myös tekstiksi ja kirjalliseksi tiivistelmäksi. Keskustelu voi tulla siihen kolmella tavalla, ja kaikki kolme päätyvät samaan kirjastoon samalla tallenteella, litteroinnilla ja yhteenvedolla:

- **puhelu**, joka soitetaan tai vastaanotetaan ohjelmassa minkä tahansa IP-vaihteen tai SIP-palveluntarjoajan kautta;
- **kokous** Zoomissa, Teamsissa, Meetissä tai missä tahansa muussa sovelluksessa, tallennettuna suoraan tietokoneelta;
- **tallenne, joka sinulla jo on** — matkapuhelimesta, sanelimesta tai toisesta järjestelmästä — lisättynä kirjastoon.

Tallenteet, litteroinnit ja historia säilytetään tiedostossa, jonka omistat. Tiliä tai tilausta ei tarvita, ja ohjelma on vapaa ohjelmisto GPL v2 -lisenssillä.

## Keskustelusta yhteenvedoksi {#from-a-conversation-to-a-write-up}

1. Keskustelu saapuu: puhelu, kokous tai tiedosto.
2. Se tallennetaan kahdelle kanavalle, joten se, mitä sinä sanoit, ja se, mitä toinen osapuoli sanoi, pysyvät erillään.
3. Se litteroidaan puhuja kerrallaan, tahdissa äänen kanssa.
4. Valitsemasi kielimalli kirjoittaa siitä yhteenvedon: tiivistelmän, tehtävät, luokan, tunnisteet ja merkit — ja voit esittää keskustelulle kysymyksen.

## Lataus ja järjestelmävaatimukset {#download-and-system-requirements}

Ohjelman voi ladata maksutta osoitteesta [ai-softphone.com](https://ai-softphone.com/#download): asennusohjelma (`.exe`) Windowsille, levykuva (`.dmg`) macOS:lle sekä AppImage tai `.deb` Linuxille. Asennusohjelma, levykuva ja AppImage eivät vaadi mitään muuta asennettavaksi ensin — Qt, OpenSSL ja C++-ajonaikainen ympäristö kulkevat niiden mukana. Poikkeus on `.deb`: se käyttää järjestelmän omaa C++-ajonaikaista ympäristöä, katso alempaa. Tarvitset SIP-tilin palveluntarjoajaltasi tai itse ylläpitämästäsi vaihteesta. Tallennus toimii heti, kun ohjelma on asennettu; litterointi ja yhteenveto vaativat valitsemasi palvelun tai mallin omalla koneellasi.

| Järjestelmä | Vaatimukset |
| --- | --- |
| macOS | macOS 14.4 tai uudempi; vain Apple silicon — Intel-Mac ei voi avata sitä edes Rosettan kautta; Metal-grafiikka; 160 Mt levytilaa sekä tallenteet. Järjestelmä kysyy kerran luvan mikrofoniin. |
| Windows | Windows 10 -versio 1809 (koontiversio 17763) tai uudempi sekä Windows 11; 64-bittinen Intel- tai AMD-suoritin; Direct3D 11 tai OpenGL 2.1; 250 Mt levytilaa sekä tallenteet. |
| Linux | Ubuntu 22.04 LTS tai uudempi, Debian 12 tai uudempi sekä kaikki samanikäiset — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C -kirjasto 2.35 tai uudempi; 64-bittinen Intel- tai AMD-suoritin; OpenGL 2.1 tai OpenGL ES 2.0, X11:ssä tai Waylandissa; PipeWire tai PulseAudio (ALSA, jos kumpaakaan ei ole); 200 Mt levytilaa sekä tallenteet. Ilmaisinalueen kuvake vaatii työpöydän, jossa on tilailmoitusalue. |

Linuxissa AppImage toimii missä tahansa samanikäisessä jakelussa: tee tiedostosta suoritettava ja käynnistä se. `.deb` vaatii lisäksi järjestelmän oman C++-ajonaikaisen ympäristön GCC 13:sta, joka on Ubuntu 24.04:ssä ja Debian 13:ssa mutta ei Ubuntu 22.04:ssä; käytä vanhemmissa AppImagea.

Käyttöliittymä on saatavilla kolmellakymmenellä kielellä, ja kieli valitaan kohdassa [Ulkoasu](/program/appearance) ja vaihdetaan ilman uudelleenkäynnistystä.

Tämän dokumentaation kuvakaappaukset on otettu macOS:ssä ja näytetään pieninä: napsauta kuvaa nähdäksesi sen täysikokoisena. Ohjelma näyttää ja toimii samalla tavalla muissakin järjestelmissä.

## Ensimmäiset askeleet {#first-steps}

1. [Lisää tili](sip-accounts/setup.md) vaihdettasi tai SIP-palveluntarjoajaasi varten.
2. [Valitse mikrofoni ja kaiuttimet](sip-accounts/devices.md) ja soita testipuhelu.
3. Päätä, [mitkä puhelut tallennetaan](recordings/call-recording.md).
4. Lisää [tunnistin](ai-processing/transcription.md) ja [kielimalli](ai-processing/processing.md), jos haluat litterointeja ja yhteenvetoja.

**Asetukset → Yleiskatsaus** pitää tätä luetteloa puolestasi: vihreä piste merkitsee tehtyä askelta, punainen vielä jäljellä olevaa. Katso [Asetusten yleiskatsaus](interface/settings-overview.md).

## Mitä lukea seuraavaksi {#where-to-read-next}

| Jos haluat… | Lue |
| --- | --- |
| Löytää tiesi ikkunoissa | [Käyttöliittymä](interface/main-window.md) |
| Yhdistää puhelimen vaihteeseesi | [SIP-tilin määrittäminen](sip-accounts/setup.md) |
| Valita mikrofonin, kaiuttimet ja soittoäänen | [Laitteet](sip-accounts/devices.md) |
| Asettaa koodekit, koputuksen ja puheluhistorian | [Puheluasetukset](sip-accounts/calls.md) |
| Laittaa kollegat yhden painalluksen painikkeisiin | [Painikkeet](sip-accounts/buttons.md) |
| Päättää, mitkä puhelut tallennetaan ja kuinka pitkäksi aikaa | [Puheluiden tallentaminen](recordings/call-recording.md) |
| Kuunnella, hakea ja lukea keskustelujasi | [Tallenteet-ikkuna](recordings/recordings-window.md) |
| Tallentaa toisessa sovelluksessa pidetyn kokouksen | [Kaappaus](capture/capture.md) |
| Valita tunnistimen, joka muuttaa puheen tekstiksi | [Litterointi](ai-processing/transcription.md) |
| Päättää, mikä tekoäly kirjoittaa keskustelujesi yhteenvedot ja mitä se saa maksaa | [Käsittely](ai-processing/processing.md) |
| Muuttaa luokkia, tunnisteita ja merkkejä | [Sanastot](ai-processing/dictionaries.md) |
| Muuttaa asettelua, teemaa, käynnistystä ja pikanäppäimiä | [Ulkoasu](program/appearance.md), [Käynnistys](program/startup.md) ja [Pikanäppäimet](program/shortcuts.md) |
| Yhdistää CRM:n tai muun ohjelman | [Webhookit](integration/webhooks.md) ja [Paikallinen REST API](integration/rest-api.md) |
| Nähdä, mitä puhelin ja vaihde sanovat toisilleen | [Diagnostiikka](troubleshooting/diagnostics.md) |
| Löytää ongelman syyn | [Yleiset ongelmat](troubleshooting/common-problems.md) |
| Kytkeä ohjelman osia pois | [Moduulit](application/modules.md) |
| Tarkistaa version, päivitykset ja käyttöraportin sisällön | [Tietoja](application/about.md) |

Sivut noudattavat **Asetusten** välilehtien järjestystä.

## Yksityisyys {#privacy}

- Oletuksena kaikki pysyy tietokoneellasi: tallenteet, litteroinnit ja historia ovat tiedostossa, jonka omistat. Mikään keskustelusta — ei numero, ei nimi eikä sana siitä, mitä sanottiin — ei mene minnekään, minne et itse ole sitä lähettänyt.
- Tilien salasanat, webhookin otsakkeen arvo ja API-tunnus säilytetään käyttöjärjestelmän avainnipussa, ei koskaan asetustiedostossa.
- Uusi versio ilmoittaa itsestään, kun se ilmestyy — ei koskaan puhelun aikana — ja asentuu vasta, kun annat luvan.
- Ohjelma lähettää yhden pienen käyttöraportin päivässä. Näet sen sisällön ennen kuin ensimmäinen lähtee, ja valitset, kuinka paljon se sisältää: **Perus** tai **Laaja**. Se ei koskaan sisällä numeroita, yhteystietoja, vaihteesi osoitetta eikä mitään keskustelussa sanottua. Koko luettelo on kohdassa [Tietoja](/application/about#telemetry).
- Ohjelma on vapaa ohjelmisto GPL v2 -lisenssillä.
