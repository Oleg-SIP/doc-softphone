---
title: Pääikkuna
sidebar_position: 1
description: Puhelin vasemmalla, kirjasto ja asetukset oikealla — AI Softphonen pääikkunan asettelu.
---

Pääikkuna on itse puhelin. Oletusasettelussa, **Yksi ikkuna**, puhelin on vasemmalla ja kaikki muu avautuu oikealle. [Asettelua voi muuttaa](../program/appearance.md).

<Shot name="03_contacts" full alt="Pääikkuna: puhelin vasemmalla ja Yhteystiedot-välilehti oikealla" />

## Puhelin {#the-phone}

Ylhäältä alas vasemmalla puolella on:

- **Numero**-kenttä;
- näppäimistö ja soittonäppäin;
- tilien merkit;
- painikkeet, jotka seuraavat muita alanumeroita;
- neljä paikkaa, joihin mennä: **Tallenteet**, **Yhteystiedot**, **Historia** ja **Asetukset**.

### Numeronvalitsin {#the-dialler}

- **Numero** — kirjoita tai liitä numero, johon soitetaan. Kentän päässä oleva kellokuvake avaa luettelon numeroista, joihin olet äskettäin soittanut tai joista sinulle on soitettu.
- Pyöreät näppäimet **1–9**, **\***, **0** ja **#** täyttävät numeron, ja puhelun aikana ne lähettävät ääniä (DTMF).
- Luurinäppäin soittaa puhelun. Se pysyy harmaana niin kauan kuin numeroa ei ole.

<Shot name="22_last_calls" full alt="Viimeisimpien puheluiden luettelo Numero-kentän alla, Historia-välilehden vieressä" />

Kun viimeisimpien numeroiden luettelo on auki, kentässä näkyy nuoli ja soittonäppäin siirtyy sen oikealle puolelle. Jokainen merkintä on nimi, tai numero, jos soittaja ei ole [Yhteystiedoissa](contacts-history.md), päivämäärän kera. Punainen luuri merkitsee vastaamatonta puhelua; sulkeissa oleva määrä — esimerkiksi *Tukipalvelu (4)* — tarkoittaa useaa peräkkäistä puhelua samalle osapuolelle.

### Tilien merkit {#the-account-chips}

Näppäimistön alla on yksi merkki jokaista [tiliä](../sip-accounts/setup.md) kohti. Vihreä piste tarkoittaa, että tili on rekisteröity vaihteeseen. Korostettu merkki (kuvassa **305 Tuki**) on tili, josta seuraava puhelu soitetaan; vaihda se painamalla toista merkkiä. Merkkien oikealla puolella oleva pyöreä punainen painike on älä häiritse -tila.

### Painikkeet {#the-buttons}

Merkkien alla ovat [painikkeet](../sip-accounts/buttons.md), jotka olet tehnyt kollegoita ja linjoja varten, kukin merkkivalon kera — kuvissa **Virtanen** ja **Varasto**. Paina yhtä soittaaksesi sen numeroon.

### Tallenteet, Yhteystiedot, Historia, Asetukset {#recordings-contacts-history-settings}

Nämä neljä alareunan kohtaa avaavat kukin välilehden oikealle, rinnakkain: [Tallenteet](../interface/recordings.md), [Yhteystiedot ja historia](contacts-history.md) ja [Asetukset](settings-overview.md). Avaamasi välilehdet pysyvät oikean puolen yläreunan rivissä.

## Käynnissä oleva puhelu {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Käynnissä oleva puhelu" />

Puhelun aikana numerokenttä siirtyy ylös, ja sen sisällä on näppäimistökuvake, ja puhelu näytetään kortilla:

- puhelun tila ja kesto (**Puhelussa · 0:21**), toisen osapuolen nimi, **Linja** ja sen tilin nimi, jolla puhelu on, sekä numero;
- kaksi pystysuoraa tasopalkkia kortin reunoilla, yksi kummallekin äänikanavalle;
- painikerivi: tallenna (ympyrä), mykistä (mikrofoni), pito (tauko) ja punainen **Lopeta**-painike;
- toinen rivi: siirto (luuri ja nuoli) ja näppäimistö.

Puhelun voi siirtää suoraan tai sen jälkeen, kun olet ensin puhunut henkilön kanssa.

Jos numero on tunnettu **Yhteystiedoissa**, numeron sijaan näytetään nimi. Samoilla toiminnoilla on [pikanäppäimet](../program/shortcuts.md): vastaa, lopeta, aseta pitoon ja mykistä.

## Useita puheluita samanaikaisesti {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Useita puheluita" />

Saapuvasta puhelusta ilmoitetaan bannerilla, missä tahansa työskenteletkin, myös kun puhelin on piilotettu. Uusi saapuva puhelu ilmestyy omalle kortilleen luettelon yläpuolelle, ja siinä on vihreä, keltainen ja punainen painike sekä rivi, joka kertoo, kenen kanssa puhut nyt (**Puhelussa henkilön … kanssa**). Alla oleva luettelo näyttää jokaisen puhelun tilan — **Pidossa**, **Puhelussa**, **Saapuva puhelu** — ja tilin, jolla se on. Taukokuvake merkitsee pidossa olevaa puhelua ja kaiutinkuvake sitä, jossa puhut.

Se, mitä tapahtuu, kun joku soittaa, kun olet jo puhelussa, asetetaan kohdassa [Puheluasetukset](../sip-accounts/calls.md#call-waiting).

## Neuvottelu {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Neuvottelu" />

Yhdistetyt puhelut näkyvät yhtenä **Neuvottelu**-korttina tilin linjalla. Jokainen osallistuja on luettelossa puheluajan ja oman **Lopeta**-painikkeensa kera. Alla olevat painikkeet tallentavat, mykistävät ja lopettavat neuvottelun kaikilta; alareunan leveä painike jakaa neuvottelun takaisin erillisiksi puheluiksi.

## Kaappaus {#capture}

Kun [kaappaus muista sovelluksista](../capture/capture.md) on sallittu kohdassa **Asetukset → Kaappaus**, tilien merkkien ja painikkeiden väliin ilmestyy kaistale.

<Shot name="10_settings_capture" full alt="Kaappauskaistale puhelimen alalaidassa: Kaappaus · valmis, Tallenna ja kaksi tasopalkkia" />

- **Kaappaus · valmis** kertoo, että ohjelma kuuntelee, onko toisessa sovelluksessa keskustelua.
- **Tallenna** aloittaa kaappauksen käsin.
- Sen alla olevat kaksi ohutta palkkia näyttävät äänen tason: ylempi olet sinä, alempi on se, mitä tietokone toistaa. Niiden piirtotapa asetetaan kohdassa **Kuva puhelimen alalaidan palkissa**.

Ohjelma voi myös olla ilmaisinalueella (macOS:ssä valikkorivillä) ja tulla esiin [pikanäppäimellä](../program/shortcuts.md).
