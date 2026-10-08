---
title: Tallenteet-ikkuna
sidebar_position: 2
description: "\"Kirjasto kaikista keskusteluista — puhelusta, tuodusta tiedostosta tai Zoomista, Teamsista tai Meetistä kaapatusta kokouksesta: suodattimet, soitin, litterointi, jota voi toistaa mistä tahansa riviltä, ja yhteenvedot.\""
---

**Tallenteet** on paikka, jossa jokainen keskustelu on, tulipa se miten tahansa: puhelimella soitettu tai vastaanotettu puhelu, tuotu äänitiedosto tai Zoomista, Teamsista, Meetistä tai mistä tahansa muusta sovelluksesta kaapattu kokous. Ne kaikki ovat samassa luettelossa, ja jokainen avautuu samalla tavalla: soitin, litterointi ja kaikki, mitä kielimalli on siitä kirjoittanut. Avaa **Tallenteet** painamalla sitä [pääikkunan](main-window.md) vasemmassa alareunassa.

<Shot name="01_recordings" alt="Tallenteet-välilehti: kaapattu Zoom-kokous, tuotu tiedosto ja puhelut samassa luettelossa" />

## Kolme tallenteen lajia {#three-kinds-of-recording}

Rivin vasemmalla puolella oleva kuvake kertoo, miten keskustelu tuli.

| Kuvake | Keskustelu | Sen nimi luettelossa | Miten se tulee tänne |
| --- | --- | --- | --- |
| Luuri ja nuoli | Tällä puhelimella soitettu tai vastaanotettu puhelu. Nuoli osoittaa sisään saapuvassa ja ulos lähtevässä puhelussa. | Yhteystiedon nimi tai numero | Tallennetaan kohdan [Tallenteet](../recordings.md) asetusten mukaan |
| Nuoli palkkiin | Muualta tuotu tiedosto: matkapuhelimesta, sanelimesta tai toisesta järjestelmästä | Tiedoston nimi | **⋮ → Tuo tiedostoista**; katso [alla](#a-recording-you-already-have) |
| Ikkuna | Toisessa sovelluksessa pidetty kokous | Nimi, jonka olet antanut, tai **Toinen sovellus** | [Kaappaus](../capture/capture.md) |

Kuvassa kolme ylintä riviä ovat yksi kutakin: Zoom-kokous, tuotu tiedosto pankin asiakaspalvelupuhelusta ja **305 Tuki** -linjalla vastaanotettu puhelu. Lähteestä riippumatta ne litteroidaan, niistä tehdään yhteenveto ja ne löytyvät haulla samalla tavalla.

## Keskustelun löytäminen {#finding-a-conversation}

Yläreunan palkissa on viisi suodatinta, hakukenttä ja valikko:

| Säädin | Rajaa luetteloa |
| --- | --- |
| **Laji** | sen mukaan, miten keskustelu tuli: saapuvat tai lähtevät puhelut, **Tuodut**, **Kaapatut** |
| **Ajanjakso** | päivämäärän mukaan: **Tänään**, **Eilen**, **Viimeiset 7 päivää** tai **Valitse päivät…** |
| **Luokka** | sen luokan mukaan, johon se on lajiteltu — katso [Sanastot](../ai-processing/dictionaries.md) |
| **Merkintä** | sillä olevien tunnisteiden ja merkkien mukaan |
| **Tunnistin** | sen [tunnistimen](../ai-processing/transcription.md) mukaan, joka teki litteroinnin |
| **Etsi** | sen mukaan, mitä siinä sanottiin — haku käy läpi kaiken tallentamasi litteroinnit |

<Shot name="39_more_menu" alt="Luettelon ⋮-valikko: Tuo tiedostoista, Vie CSV-muotoon, Avaa selaimessa" />

Palkin oikeassa reunassa oleva **⋮**-painike avaa luettelolle lisää toimintoja:

| Kohta | Toiminto |
| --- | --- |
| **Tuo tiedostoista** | Tuo tallenteet, jotka sinulla jo on. Katso [Tallenne, joka sinulla jo on](#a-recording-you-already-have). |
| **Vie CSV-muotoon** | Tallentaa luettelon taulukkona: jokaisen keskustelun ajankohdan, osapuolen ja numeron, suunnan, keston, luokan, tunnisteet, merkit ja yhden rivin tiivistelmän. |
| **Avaa selaimessa** | Avaa luettelon selaimessasi sivuna, jota [paikallinen REST API](../integration/rest-api.md) tarjoaa osoitteessa `/ui`. |

## Luettelo {#the-list}

Jokaisella rivillä näkyy:

- keskustelun lajin kuvake;
- nimi — toinen osapuoli, numero, tiedosto tai kokous — ja sen alla päivämäärä ja yhden rivin tiivistelmä;
- oikealla luokka ja sen pistemäärä (luku, esimerkiksi *Tuki · 4*), sitten merkit ja tunnisteet ja lopuksi kesto.

Merkit on piirretty punaisella (kuvassa *Arkaluontoiset tiedot*, *Lupaus annettu*, *Vihainen asiakas*); tunnisteet ovat tavallisia (*Takaisinsoitto luvattu*). Keskustelusta, jolla ei ole tiivistelmää eikä luokkaa, ei ole vielä tehty yhteenvetoa — kuvassa **Anna Laine** -rivi.

<Shot name="40_row_actions" alt="Rivi, jonka päällä on osoitin: kiinnitys-, kynä- ja roskakoripainikkeet" />

Osoita riviä, niin sen oikealle puolelle ilmestyy kolme painiketta:

| Painike | Toiminto |
| --- | --- |
| Nasta | **Säilytä tämä**: säilytettyä tallennetta ei koskaan poisteta kohdan [Säilytys](../recordings.md#retention) rajoilla. Paina uudelleen lopettaaksesi säilytyksen. |
| Kynä | **Nimeä uudelleen**: antaa keskustelulle oman nimesi. Puhelu säilyttää osapuolen nimen vieressään; kokous tai tiedosto on muuten nimetty sovelluksen tai tiedoston mukaan, josta se tuli. |
| Roskakori | **Poista tämä tallenne**, kun on ensin kysytty. Myös ääni poistuu, eikä sitä voi palauttaa. |

## Soitin {#the-player}

Valitse rivi avataksesi soittimen luettelon alle.

- Kaksi aaltomuotoa ovat tallenteen kaksi kanavaa: ylempi on sinä, alempi toinen osapuoli. Tuodussa tiedostossa on yleensä yksi sekoitettu raita, joten molemmilla viivoilla näkyy sama ääni.
- **▶** toistaa ja keskeyttää; vasemmalla olevat ajat ovat sijainti ja kokonaiskesto. Aaltomuotojen alla oleva palkki vierittää pitkää tallennetta.
- **1×** muuttaa nopeutta; **Molemmat** valitsee, minkä äänen kuulet: molemmat, vain sinun (**Minä**) tai vain toisen osapuolen (**He**).
- Levykepainike tallentaa kopion tallenteesta, **×** sulkee keskustelun.

Luettelon ja soittimen välistä viivaa voi vetää ylöspäin, jotta litteroinnille jää enemmän tilaa, kuten alla olevissa kuvissa.

## Litterointi {#the-transcript}

Soittimen alla on litterointi: yksi rivi puheenvuoroa kohti, sen sanomisajankohta ja puhuja.

<Shot name="26_recording_call" alt="Puhelu 305 Tuki -linjalla: soitin ja litterointi, rivi kohdassa 0:12 korostettuna" />

| Tallenteen laji | Puhujat näytetään nimellä |
| --- | --- |
| Puhelu | **Sinä** ja toisen osapuolen nimi tai numero |
| Kaapattu kokous | **Sinä** ja tallenteen nimi kaikille muille |
| Tuotu tiedosto | **Kaikki · speaker 1**, **Kaikki · speaker 2**… — tunnistin erottaa äänet toisistaan |

**Napsauta riviä siirtyäksesi siihen hetkeen**: soitin siirtyy sinne, rivi korostetaan ja sanottava sana merkitään sen sisällä — kuvassa rivi kohdassa **0:12** ja sana *Kyllä*. Paina **▶** kuunnellaksesi siitä eteenpäin. Toiston aikana korostus seuraa puhetta, joten voit lukea ja kuunnella samalla ja palata mihin tahansa lauseeseen.

Jokaisen rivin vasemmalla puolella oleva aika on myös se, mihin yhteenveto viittaa: merkki, vastaus tai lainaus kantaa sen sanojen ajankohtaa, joihin se perustuu.

## Litterointi vai yhteenveto: pudotusvalikko {#transcript-or-write-up-the-drop-down}

Litteroinnin yläpuolella oleva pudotusvalikko valitsee, mitä siinä paikassa näytetään: litteroinnin tai jonkin yhteenvedoista, jotka kielimalli on tehnyt.

<Shot name="27_writeup_menu" alt="Avattu pudotusvalikko: OpenAI-litterointi ja puhelun yhteenvedot" />

- **Mikrofonilla** merkityt rivit ovat litterointeja, yksi kutakin [tunnistinta](../ai-processing/transcription.md) kohti, joka on tallenteen litteroinut. Tähti merkitsee päälitterointia. Osoita riviä nähdäksesi tunnistimen, sen mallin ja kielen.
- **Kipinöillä** merkityt rivit ovat yhteenvetoja, jotka [Käsittelyn](../ai-processing/processing.md) [kehotteet](/ai-processing/prompt-studio) ovat tehneet.

Tallenteella voi olla usean tunnistimen litterointeja vertailua varten: alla oleva Zoom-kokous litteroitiin sekä X.ai:llä että Deepgramilla.

<Shot name="36_zoom_menu" alt="Kaapattu kokous, jolla on kaksi litterointia, Deepgram ja X.ai, sekä sen yhteenvedot" />

Yhteenvedot on lueteltu lyhyillä nimillä:

| Pudotusvalikossa | Tekijä kehote | Mitä se näyttää |
| --- | --- | --- |
| **Tiivistelmä** | Tiivistelmä | Tärkeimmät asiat, päätökset ja seuraavat askeleet lyhyenä kappaleena. |
| **Lyhyesti** | Yhden rivin tiivistelmä | Yksi virke; sama rivi näkyy nimen alla luettelossa. |
| **Toiminnot** | Tehtävät | Kuka sitoutui tekemään mitä ja mihin mennessä. |
| **Aiheet** | Aiheet | Esille tulleet aiheet. |
| **Mainitut** | Nimet ja numerot | Ihmiset, yritykset, päivämäärät, summat ja viitteet. |
| itse kysymys | Kysymys tästä puhelusta | Vastaus esittämääsi kysymykseen sekä sanat, joihin se perustuu. |
| **Laatu** | Myynnin laatu, Tuen laatu | Kokonaispistemäärä ja arvio kustakin kriteeristä. |
| **Merkit** | Merkit | Se, mihin pitää kiinnittää huomiota, todisteineen ja ajankohtineen. |
| **Tunnisteet**, **Luokka** | Tunnisteet, Luokka | Nimilaput, joilla keskustelu on lajiteltu. |

## Yhteenvedot yksitellen {#the-write-ups-one-by-one}

Alla olevat kuvat ovat kaikki samasta puhelusta **305 Tuki** -linjalla, jossa asiakas kysyy, milloin hänen vakuutuksensa uusiutuvat.

**Tiivistelmä** — keskustelu muutamalla virkkeellä.

<Shot name="28_summary" alt="Puhelun tiivistelmä" />

**Lyhyesti** — yksi rivi, tarpeeksi lyhyt, jotta keskustelun tunnistaa luettelosta.

<Shot name="29_nutshell" alt="Lyhyesti: puhelun yhden rivin tiivistelmä" />

**Toiminnot** — jokainen tehtävä sekä se, kuka sen tekee ja milloin, oikealla.

<Shot name="30_actions" alt="Toiminnot: kaksi tehtävää Sinulle, toinen niistä määräaikana huomenaamuna" />

**Kysymys** — kysy keskustelusta mitä tahansa: kysymyksestä tulee kohteen nimi, ja vastauksen alla ovat sanat, joihin se perustuu, ajankohtineen tallenteessa.

<Shot name="31_question" alt="Vastaus puhelua koskevaan kysymykseen kahdella lainauksella kohdissa 0:16 ja 0:30" />

**Laatu** — pistemäärä 1–5 perusteluineen, ja jokainen kriteeri merkitty **täyttyi**, **heikko** tai **ei täyttynyt** huomautuksen kera.

<Shot name="32_quality" alt="Laatu: pistemäärä 4, kaksi kriteeriä täyttyi ja kaksi oli heikkoja" />

**Merkit** — jokainen merkki sanoineen, joiden perusteella se nostettiin, vakavuuksineen ja ajankohtineen.

<Shot name="33_red_flags" alt="Merkit: Lupaus annettu, vähäinen, kohdassa 0:30" />

**Aiheet** — kokouksen aiheet, tässä Zoom-kokouksen.

<Shot name="38_topics" alt="Zoom-kokouksen aiheet" />

## Painikkeet pudotusvalikon vieressä {#the-buttons-beside-the-drop-down}

| Painike | Toiminto |
| --- | --- |
| Kipinät | **Litteroi tai kysy mallilta…**: avaa valikon, katso alla. |
| Kaksi arkkia | Kopioi näytettävän. |
| Levyke | Tallentaa sen tiedostoon. Litteroinnin voi tallentaa pelkkänä tekstinä tai tekstityksenä. |
| Roskakori | Poistaa näytettävän. |

<Shot name="34_run_menu" alt="Kipinävalikko: Litterointi neljällä tunnistimella, Käsittely kehotteineen" />

Kipinävalikko tekee työn pyydettäessä. Kohdassa **Litterointi** valitse tunnistin litteroidaksesi tallenteen uudelleen sillä; kohdassa **Käsittely** valitse kehote ajaaksesi sen nyt — **Kysymys tästä puhelusta** kysyy ensin kysymyksen. Tulos ilmestyy pudotusvalikkoon. Näin keskustelusta tehdään yhteenveto, kun **Käsittele keskustelut automaattisesti** on pois päältä kohdassa [Käsittely](../ai-processing/processing.md), ja näin keskusteluun, jolla jo on yhteenvetoja, lisätään vielä yksi.

## Kolme esimerkkiä {#three-examples}

### Puhelimella soitettu puhelu {#a-call-made-in-the-phone}

Edellä oleva puhelu: puhujat ovat **Sinä** ja **Katja Hämäläinen**, yhteystiedon nimi, kahdella erillisellä kanavalla.

### Tuotu tiedosto {#a-file-you-imported}

<Shot name="35_recording_import" alt="Tuotu tiedosto pankin asiakaspalvelupuhelusta: yksi sekoitettu raita sekä puhujat 1 ja 2" />

`riverside_bank_support_call` on mp3, joka tuotiin valinnalla **⋮ → Tuo tiedostoista**. Sen nimi on tiedoston nimi, sen kuvake on nuoli palkkiin, ja sen kaksi puhujaa tunnistin erotti toisistaan. Yhteenvedot huomasivat ääneen sanotun kortin numeron ja nostivat esiin merkin **Arkaluontoiset tiedot**.

### Toisesta sovelluksesta kaapattu kokous {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Tietokoneelta kaapattu Zoom-kokous: X.ai-litterointi, puhujina Sinä ja kokouksen nimi" />

**Q4-julkistuksen suunnittelu (Zoom)** kaapattiin kokouksen ollessa käynnissä Zoomissa, ja se nimettiin kynällä. Kaikki kokouksen toisessa päässä näytetään tallenteen nimellä; sinä olet **Sinä**. Katso [Kaappaus](../capture/capture.md).

## Tallenne, joka sinulla jo on {#a-recording-you-already-have}

Muualla — matkapuhelimella, sanelimella tai toisessa järjestelmässä — tehdyn tallenteen voi lisätä valinnalla **⋮ → Tuo tiedostoista**. Valitse yksi tai useampi mp3- tai wav-tiedosto; puhelin kertoo, montako tuotiin, ja nimeää ne, joita se ei voinut lukea tallenteena. Jokainen arkistoidaan täsmälleen kuten soitettu puhelu: litteroidaan, siitä tehdään yhteenveto samoilla [säännöillä](../ai-processing/processing.md#rules) ja se löytyy samalla haulla.

## Tallenteen poistaminen {#deleting-a-recording}

Kun tallenne poistetaan, kaikki siitä tehty lähtee sen mukana: litteroinnit ja yhteenvedot. Kuinka kauan tallenteita säilytetään itsestään, asetetaan kohdassa [Tallenteet](../recordings.md#retention).
