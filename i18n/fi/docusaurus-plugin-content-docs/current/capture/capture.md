---
title: Kaappaus
sidebar_label: Kaappaus muista sovelluksista
sidebar_position: 1
description: "\"Kaappaus tallentaa toisessa sovelluksessa — Zoomissa, Teamsissa, Meetissä tai missä tahansa muussa — käydyn keskustelun suoraan tietokoneelta.\""
---

**Kaappaus** on tapa, jolla AI Softphone tallentaa toisessa ohjelmassa käytävän keskustelun, kuten kokouksen Zoomissa, Teamsissa tai Meetissä. Se tallentaa suoraan tietokoneelta pitäen toisen osapuolen ja sinut eri kanavilla, ja lopuksi odottavat sama litterointi ja yhteenveto kuin puhelussa.

Ohjelma etsii keskustelua, ei sovelluksen nimeä, joten se toimii kaiken kanssa, mikä sellaisen tuottaa.

Asetusten [Yleiskatsaus](../interface/settings-overview.md) luettelee tämän kohdassa **Kaappaus muista sovelluksista** ja jakaa sen kolmeen askeleeseen:

1. **Ota kaappaus käyttöön** — [salli äänen kaappaus](#turning-capture-on).
2. **Kaappaa keskustelu** — [aloita ja lopeta](#capturing-a-conversation) tallennus.
3. **Anna sille nimi** — [nimeä](#giving-it-a-name) tallenne uudelleen.

## Kaappauksen ottaminen käyttöön {#turning-capture-on}

Kaappaus on pois käytöstä, kunnes sallit sen. Avaa **Asetukset → Kaappaus**.

<Shot name="10_settings_capture" alt="Asetukset → Kaappaus" />

| Asetus | Oletus | Mitä se tekee |
| --- | --- | --- |
| **Salli äänen kaappaus** | pois | Antaa ohjelman tallentaa muiden sovellusten ääntä. Mitään ei kaapata, kun se on pois päältä. |
| **Muistuta minua kertomaan muille tallennuksesta** | päällä | Näyttää muistutuksen kaappauksen aikana. Valintaruutu on harmaa, kunnes kaappaus on sallittu. |

:::caution
Kaikki, mitä tietokone toistaa, tallennetaan, ei vain keskustelu. Tämä puhelin ei voi kuuluttaa tallennuksesta jonkun toisen kokouksessa, joten sen kertominen on sinun tehtäväsi.
:::

Tämän tekevä ohjelman osa on **Kaappaus**-moduuli, *Toisessa sovelluksessa käytävän keskustelun tallentaminen*. Sen voi poistaa käytöstä kohdassa [Moduulit](../application/modules.md).

## Kaappauksen aloittaminen {#starting-a-capture}

Kun kaappaus on sallittu, [pääikkunan](../interface/main-window.md#capture) alareuna näyttää sen tilan — **Kaappaus · valmis** — ja oikealla on **Tallenna**-painike. Paina **Tallenna** aloittaaksesi käsin.

### Automaattinen käynnistys {#automatic-start}

**Automaattinen käynnistys** päättää, mitä tapahtuu, kun ohjelma kuulee keskustelun toisessa sovelluksessa:

| Valinta | Mitä tapahtuu |
| --- | --- |
| **Ei koskaan** | Kaappaus alkaa vain, kun painat **Tallenna**. |
| **Kysy minulta** | Ohjelma kysyy, tallennetaanko se. Oletus. |
| **Aina** | Ohjelma alkaa tallentaa itsestään. |

Kohdassa **Sovellukset, joilla on oma vastaus** sovellukselle voi antaa oman vastauksen — esimerkiksi *Tallenna tämä sovellus aina* ohjelman esittämästä kysymyksestä.

*Kysyminen ei kustanna mitään: vastaustasi edeltävät sekunnit on jo tallennettu.*

### Ennen alkua {#before-the-start}

Liukusäädin **Ennen alkua** kertoo, kuinka monta sekuntia ääntä tallennuksen alkua edeltävältä ajalta säilytetään, oletuksena **15 sekuntia**. Se on olemassa, jotta mitään ei katoa sillä aikaa, kun keskustelu huomataan: tallenne, joka alkaa, kun painat **Tallenna** tai vastaat kysymykseen, alkaa silti sitä edeltäneillä sanoilla.

## Keskustelun kaappaaminen {#capturing-a-conversation}

Tallennuksen aikana pääikkunassa näkyy punainen piste, tallenteen nimi (esimerkiksi **Kokous kohteessa Zoom**), kulunut aika ja kaksi kanavaa aaltomuotoina.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Kokouksen tallentaminen" />

- **Lopeta tallennus** päättää sen.
- Ikkuna pysyy näkyvissä tallennuksen ajan ja muistuttaa sinua kertomaan osallistujille, että kokous tallennetaan.

### Mitä kuva näyttää {#what-the-picture-shows}

Kaksi muuta asetusta valitsee, miten äänen taso piirretään:

| Asetus | Oletus | Missä |
| --- | --- | --- |
| **Kuva pääikkunassa** | Aalto | Kaksi kanavaa kaappauksen aikana. |
| **Kuva puhelimen alalaidan palkissa** | Kaksi tasoa | Kaksi ohutta palkkia kohdan **Kaappaus · valmis** alla. |

### Kokeileminen {#testing-it}

Kohdassa **Kokeile** välilehdellä on kaksi palkkia: **Sinä** ja **Toinen puoli**. *Ylempi palkki liikkuu, kun puhut, alempi kun jotain soi.* Ennen tärkeää kokousta sano sana ja toista jokin ääni nähdäksesi, että ohjelma kuulee molemmat puolet.

## Nimen antaminen {#giving-it-a-name}

Tallenteen nimen vieressä olevalla kynällä voit nimetä sen uudelleen sen ollessa käynnissä. Tallenne, jota et ole nimennyt, näkyy luettelossa nimellä **Toinen sovellus**.

## Minne tallenne menee {#where-the-recording-goes}

Kaapattu keskustelu ilmestyy [Tallenteet-ikkunaan](../recordings/recordings-window.md) kuten mikä tahansa muu, omalla kuvakkeellaan — ikkuna luurin sijaan — ja antamallasi otsikolla tai nimellä **Toinen sovellus**.

<Shot name="01_recordings" alt="Kaapatut kokoukset Tallenteet-välilehdellä ikkunakuvakkeella merkittyinä" />

Se litteroidaan, tiivistetään, lajitellaan luokkaan ja merkitään tunnisteilla samoilla [säännöillä](../ai-processing/processing.md#rules) kuin puhelu. Kaapatun kokouksen litteroinnissa puhuja näkyy nimellä **Toinen sovellus** siinä, missä puhelussa näkyisi toisen osapuolen nimi; myös kirjaston **Etsi** löytää siinä sanotun.
