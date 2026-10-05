---
title: Tietoja
sidebar_position: 2
description: Versio, päivitykset, maasi, lisenssi, käyttöraportin sisältö, palautelomake ja se, millä ohjelma on rakennettu.
---

**Asetukset → Tietoja** sisältää kaiken itse ohjelmasta.

<Shot name="20_settings_about" alt="Asetukset → Tietoja" />

## Versio ja maa {#version-and-country}

Yläreunassa ovat nimi, **Versio** (kuvassa 1.0.0) ja linkki verkkosivustolle, [ai-softphone.com](https://ai-softphone.com/).

**Maa** kertoo ohjelmalle, missä olet. Se auttaa valitsemaan parhaan päivityspalvelimen ja avaa tien maassasi isännöityihin kieli- ja puhepalveluihin. **Tunnista automaattisesti** täyttää sen.

## Päivitykset {#updates}

Välilehti kertoo, onko sinulla uusin versio ja milloin asia viimeksi tarkistettiin. **Etsi päivityksiä** tarkistaa nyt.

**Etsi päivityksiä automaattisesti**, oletuksena käytössä, tarkistaa kerran päivässä ja pian puhelimen käynnistymisen jälkeen. Se pyytää palvelimelta yhden pienen tiedoston, eikä mitään ladata tai asenneta ilman lupaasi.

## Lisenssi {#licence}

Ohjelma on vapaa ohjelmisto GPL-2.0-or-later-lisenssillä. Sillä ei ole takuuta, ja voit levittää sitä edelleen kyseisen lisenssin ehdoin; koko teksti toimitetaan tiedostossa nimeltä `LICENSE`.

## Telemetria {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Asetukset → Tietoja: mitä käyttöraportti sisältää" />

Ohjelma lähettää yhden pienen käyttöraportin päivässä. Näet sen sisällön ennen kuin ensimmäinen lähtee, ja välilehti luettelee sen:

| | Mitä lähetetään |
| --- | --- |
| **Lähetetään aina** | Että sovellus käynnistettiin, sen versio ja käyttöliittymän kieli; käyttöjärjestelmän versio, alueasetus, maa ja aikavyöhyke. |
| **Lähetetään lisäksi, Laajassa tilassa** | Puheluiden ja kaapattujen keskustelujen laskurit; yhdistetyn vaihteen valmistaja ja versio, ei koskaan sen osoitetta; kuinka monta [Yleiskatsauksen](/interface/settings-overview) askelta on tehty, ja valittu asettelu. |
| **Ei lähetetä koskaan, missään tilassa** | Numerot, joihin olet soittanut tai joista sinulle on soitettu; tilit, salasanat tai mikään avainnipusta; yhteystiedot, keskustelut, litteroinnit tai tallenteet; mikään kirjoittamasi, eikä mikään tietokoneen yksityinen tieto. |

Jokainen asennus luo itselleen yhden satunnaisen tunnisteen, jotta saman ohjelmakopion raportit voidaan tunnistaa yhdeksi. Sitä ei ole johdettu mistään sinua tai tietokonettasi koskevasta, eikä se nimeä ketään — mutta koska se säilyy, sen mukana kulkevat raportit voidaan yhdistää toisiinsa. Siksi ne ovat pikemminkin pseudonyymejä kuin anonyymejä.

Perusraportin perusteena on oikeutettu etu: tieto käytössä olevista versioista on se, minkä ansiosta korjaus tavoittaa sitä tarvitsevat. Kaikki, mitä laajennettu raportti lisää, on siinä, koska valitsit sen, ja voit muuttaa sen täällä milloin tahansa.

### Raportointi {#reporting}

| Valinta | |
| --- | --- |
| **Laaja** | Perusraportti ja se, mitä *Lähetetään lisäksi* luettelee. Valittuna kuvassa. |
| **Perus** | Vain se, mikä *Lähetetään aina*. |
| **Pois käytöstä** | Ei raporttia lainkaan. Saatavilla vain Enterprise-versiossa; muuten vaihtoehto on harmaa. |

## Palaute {#feedback}

<Shot name="20c_settings_about_bottom" alt="Asetukset → Tietoja: palautelomake ja komponentit, joilla ohjelma on rakennettu" />

Lomake, joka kirjoittaa kehittäjille poistumatta ohjelmasta.

| Kenttä | |
| --- | --- |
| **Aihe** ja **Viesti** | Mitä haluat sanoa. |
| **Nimesi** ja **Osoite vastausta varten** | Molemmat ovat valinnaisia. Ilman osoitetta sinulle ei voi vastata. |
| **Liitä loki** | Lisää lokin lopun, noin 512 kt. Katso [Diagnostiikka](/troubleshooting/diagnostics). |

**Lähetä** pysyy harmaana, kunnes on jotain lähetettävää.

## Rakennettu käyttäen {#built-with}

Komponentit, joiden varaan ohjelma on rakennettu, kukin lisensseineen: Qt 6 (GPL-2.0 tai GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (public domain), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) ja PulseAudio-asiakas (LGPL-2.1-or-later). Kutakin käytetään vieressä mainitulla lisenssillä; jos komponentti tarjoaa useita, valittu on se, joka on mainittu.
