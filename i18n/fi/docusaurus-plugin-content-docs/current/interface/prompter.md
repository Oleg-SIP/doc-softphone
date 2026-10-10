---
title: Kuiskaajan ikkuna
sidebar_position: 3
description: "Suoran kuiskaajan ikkuna: puhelun sanat sitä mukaa kuin ne sanotaan ja vihjeitä siitä, mitä sanoa seuraavaksi, ikkunan painikkeet ja sarakkeet, harjoitus nauhoituksella ja mitä se maksaa."
---

**Kuiskaaja** kuuntelee keskustelua sen aikana. Omassa ikkunassaan se kirjoittaa, mitä kumpikin puoli sanoo, sitä mukaa kuin se sanotaan, ja — kun valittu avustaja kysyy mallilta — vihjeen siitä, mitä sanoa seuraavaksi. Se kannattaa pitää auki myyntipuhelun, työhaastattelun tai vaikean keskustelun aikana, ja toisen avustajan kanssa sama ikkuna näyttää toisen puolen puheesta jatkuvan käännöksen tai pelkät tekstitykset.

<Shot name="46_prompter_running" alt="Kuiskaaja harjoittelee myyntipuhelua: litterointi vasemmalla, vihjeet oikealla ja uusin toistettuna isolla yläpuolella" />

Kuvassa avustaja **Vastaväitteet puhelussa** kuuntelee myyntipuhelua. Vasen sarake on se, mitä sanottiin, jokainen rivi aikoineen ja puolineen; oikea on se, mitä malli ehdotti asiakkaan kuhunkin vastaukseen; uusin vihje toistetaan isolla kummankin yläpuolella.

**Kuiskaaja** ilmestyy puhelimen alaosan luetteloon **Historia**- ja **Asetukset**-kohtien väliin heti, kun kolme asiaa on kunnossa: kuiskaaja on sallittu, on tunnistin, joka osaa kuunnella keskustelun aikana, ja — jotakin ehdottaville avustajille — kielimalli. Kaikki tämä asetetaan kohdassa [Asetukset → Kuiskaaja](/ai-processing/prompter), jossa ovat myös tekstin koko ja itse avustajat.

## Ikkuna {#the-window}
<Shot name="44_prompter_window" alt="Kuiskaajan ikkuna, jossa on valittuna avustaja Vastaväitteet puhelussa, ennen käynnistystä" />

Ylhäällä on **Avustaja**-pudotusvalikko ja sen oikealla puolella painikkeet:

| Painike | Mitä se tekee |
| --- | --- |
| **Käynnistä** / **Pysäytä** (kolmio / neliö) | *Aloita tämän puhelun kuuntelu* — tai lopeta: *Sanottu jää näytölle*. Ennen puheluun vastaamista painettu käynnistys odottaa sitä, ja painike peruu sen silloin. |
| **Vihje** (kipinät) | *Päätä vastaus tähän ja ehdota, mitä sanoa*, odottamatta taukoa. Avustajalla, joka ei kysy mallilta, painike on **Päätä vastaus**: se vain sulkee vastauksen, jotta seuraava alkaa puhtaalta pöydältä. Se on himmennetty, kun kuiskaaja ei ole käynnissä. |
| **Tyhjennä** (roskakori) | Unohtaa kysyttyään sen, mitä näytöllä on. *Molemmat sarakkeet katoavat, ja niiden mukana keskustelu, josta seuraava vihje olisi rakennettu.* Pysäyttäminen ja uudelleenkäynnistys ei tyhjennä mitään: pysäytetty ja uudelleen käynnistetty keskustelu on yleensä sama keskustelu. |
| **Vie…** (levyke) | Kirjoittaa molemmat sarakkeet aikoineen tiedostoon: tekstinä (`.txt`) tai taulukkona (`.csv`), sillä nimellä, jonka annat tiedostolle. |
| **Harjoitus…** (kirjasto) | [Kokeilee avustajaa nauhoituksella](#rehearsing-on-a-recording) puhelun sijaan. |

Pudotusvalikko näyttää [avustajat](/ai-processing/prompter#assistants) siinä järjestyksessä, joka on asetettu kohdassa **Asetukset → Kuiskaaja**. Sitä ei voi vaihtaa kuiskaajan ollessa käynnissä, mutta se pysyy näkyvissä, joten näet, mikä avustaja on työssä. Kuuntelun aikana puhelun kortissa lukee **Kuuntelemme**.

Painikkeiden alla on kaista, jossa näkyy uusin rivi, ja sen alla kaksi saraketta:

- **Litterointi** — jokainen rivi aikoineen ja puolineen;
- **Vihjeet** — jokainen vihje sen vastauksen ajalla, johon se vastaa. Avustajalla, joka ei kysy mallilta, tätä saraketta ei ole, ja litterointi vie koko leveyden.

Kun ikkuna on kapea, sarakkeet ovat päällekkäin. Sarake seuraa saapuvaa tekstiä, kunnes vierität siinä taaksepäin, ja seuraa taas, kun palaat loppuun. Paina mitä tahansa riviä pitääksesi sen kaistalla; paina uusinta riviä tai kaistan nastaa seurataksesi taas. Hiiren oikea painike kopioi rivin, vihjeen, koko litteroinnin tai kaikki vihjeet. Vedä kaistan alla olevaa erotinta tehdäksesi siitä korkeamman; tekstin koot asetetaan kohdassa [Asetukset → Kuiskaaja](/ai-processing/prompter#settings--prompter).

## Harjoitus nauhoituksella {#rehearsing-on-a-recording}
Avustajaa voi kokeilla ilman, että kukaan on puhelimessa. **Harjoitus…** luettelee [kirjaston](/interface/recordings) keskustelut uusimmat ensin sekä **Tiedosto tällä tietokoneella…** `.mp3`- tai `.wav`-tiedostolle.

<Shot name="45_prompter_rehearse" alt="Harjoitus…: kirjaston keskustelut ja tiedosto tällä tietokoneella" />

Valitsemasi nauhoitus ilmestyy painikkeiden alle soittimeen: toisto ja tauko, molemmat kanavat aaltomuotona, jota voi napsauttaa, sekä aika. Paina **Käynnistä**: nauhoitus soitetaan kuiskaajaan samaa reittiä kuin puhelu, omassa tahdissaan — nopeampaa toistoa ei tarjota tarkoituksella, koska puolitoistakertaisella nopeudella syötetty kuiskaaja pitäisi taukoja, vastaisi ja laskuttaisi keskustelusta, jota kukaan ei käynyt. Oikean reunan risti on **Lopeta harjoitus**, takaisin puheluiden kuunteluun.

Yksikanavainen nauhoitus, kuten tuotu tiedosto, kuullaan yhtenä huoneena: *kuiskaaja kuulee kaiken keskustelukumppanina*.

## Mitä se maksaa ja minne sanat menevät {#what-it-costs-and-where-the-words-go}
- Tunnistin laskutetaan suoran äänen minuuteista, ja **Tunnista myös oma puoleni** kaksinkertaistaa sen. Malli laskutetaan jokaisesta vihjeestä. Molemmat lasketaan kuiskaajan [kuukausikattoihin](/ai-processing/prompter#spending), eivät Käsittelyn rajoihin.
- Toisen puolen ääni lähtee tietokoneelta sitä mukaa kuin hän puhuu, valitsemallesi tunnistimelle. Omalla koneellasi toimiva tunnistin — **Vosk**, **WhisperLive** tai **NVIDIA Riva** — pitää sen talon sisällä.
- Se, mitä kuiskaaja näyttää, ei ole nauhoitus. Säilyttääksesi sen paina **Vie…**; saadaksesi itse keskustelun [tallenna puhelu](/recordings) lisäksi.

## Kun se ei käynnisty {#when-it-does-not-start}
Ikkuna kertoo painikkeiden alla olevalla rivillä, mitä puuttuu.

| Ikkuna sanoo | Mitä tehdä |
| --- | --- |
| *Kuiskaaminen on pois päältä. Asetukset → Kuiskaaja.* | Valitse **Salli kuiskaajan käyttö**. |
| *Yksikään tunnistin täällä ei osaa kuunnella jonkun puhuessa. Asetukset → Litterointi.* | Lisää tunnistin, jolla on **Osoite kuiskaajaa varten**, ja paina **Kokeile**. |
| *Ei ole mitään ajettavaa. Asetukset → Kuiskaaja, ja lisää avustaja.* | Kaikki avustajat on poistettu tai poistettu käytöstä: lisää yksi tai paina **Palauta oletusarvot**. |
| *Vastapuolelle on kerrottava ensin. Aloita tämän keskustelun tallennus tai muuta sitä, mitä Asetukset → Tallennus sanoo suostumuksesta.* | Aloita tallennus, joka toistaa ilmoituksen, tai muuta suostumuksen asetusta. |
| *Tunnistin ei alkanut kuunnella. Tarkista sen suora osoite ja malli kohdassa Asetukset → Litterointi.* | Osoite kuiskaajaa varten, malli tai avain on väärin. Tunnistimen kortin **Kokeile** kertoo, mikä. |
| *Tämän kuun summa tunnistimille on käytetty.* | Nosta kohtaa **Tunnistimet, kuukaudessa** tai odota kuukauden vaihtumista. |
| *Tämän kuun summa malleille on käytetty. Sanat jatkuvat; kuiskaaminen on pysähtynyt.* | Nosta kohtaa **Mallit, kuukaudessa**. |
