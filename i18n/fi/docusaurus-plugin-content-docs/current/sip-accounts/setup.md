---
title: SIP-tilin määrittäminen
sidebar_position: 1
description: Yhdistä AI Softphone IP-vaihteeseesi tai SIP-palveluntarjoajaasi kohdassa Asetukset → Tilit.
---

AI Softphone toimii minkä tahansa IP-vaihteen tai SIP-palveluntarjoajan kanssa. Voit olla kirjautuneena niin moneen tiliin (linjaan) kuin sinulla on, ja jokaisella tilillä on omat asetuksensa.

Avaa **Asetukset → Tilit**.

<Shot name="05_settings_accounts" alt="Asetukset → Tilit: kaksi tiliä, molemmat rekisteröity" />

## Tililuettelo {#the-list-of-accounts}

Jokainen tili on rivi, jossa on:

- **valintaruutu**, joka ottaa tilin käyttöön tai poistaa sen käytöstä;
- **piste**, joka on vihreä, kun tili on rekisteröity vaihteeseen;
- nimi ja sen alla `käyttäjä@palvelin`;
- **Katkaise yhteys** -painike, joka kirjaa tilin ulos vaihteesta;
- **▲**- ja **▼**-painikkeet, jotka siirtävät tiliä luettelossa ylös tai alas. Tilien merkit [pääikkunassa](../interface/main-window.md) noudattavat samaa järjestystä.

Oikeassa yläkulmassa oleva **Lisää**-painike lisää tilin. Napsauta riviä avataksesi sen lomakkeen alle.

## Tilin lisääminen {#adding-an-account}

<Shot name="05d_account_add" alt="Uuden tilin tyhjä lomake" />

Paina **Lisää**. Luettelon alle avautuu tyhjä lomake, ja kohdistin on kentässä **Nimi (valinnainen)**. Täytä alla olevat kentät, avaa **Palvelinasetukset**, jos vaihde tarvitsee niitä, ja paina **Tallenna**. Uusi tili alkaa tavallisilla arvoilla: UDP portissa 5060, rekisteröinti uusitaan 300 sekunnin välein.

## Tilin lomake {#the-account-form}

<Shot name="05b_account_edit" alt="Tilin lomake" />

| Kenttä | Mitä kirjoitetaan |
| --- | --- |
| **Nimi (valinnainen)** | Nimi, joka näkyy tilin merkissä pääikkunassa ja sen puheluissa. Jos se on tyhjä, tili näytetään muodossa `käyttäjä@palvelin`. |
| **Käyttäjätunnus** | Vaihteesi tai palveluntarjoajasi antama käyttäjätunnus tai alanumero. |
| **Salasana** | Sen salasana. Kenttä on tyhjä, kun palaat lomakkeeseen. Se säilytetään tietokoneen avainnipussa, ei koskaan asetustiedostossa. |
| **Palvelimen osoite** | Vaihteen tai palveluntarjoajan SIP-palvelimen osoite, esimerkiksi `pbx.example.com`. |
| **Palvelinasetukset** | Laajentaa yhteyden harvinaisemmat asetukset; katso alta. |
| **Vastaa automaattisesti** | Kohdassa **Vastaaminen**: vastaa tämän tilin saapuviin puheluihin ilman, että painat mitään. Oletuksena pois. |

Paina **Tallenna** säilyttääksesi muutokset. **Peruuta** hylkää ne ja **Poista** poistaa tilin.

Kun tilin vieressä oleva piste on vihreä, tili on rekisteröity, ja myös sen merkki pääikkunassa näyttää sen. Jos se pysyy harmaana tai punaisena, avaa [Diagnostiikka](../troubleshooting/diagnostics.md): **SIP**-välilehti näyttää `REGISTER`-pyynnön ja palvelimen vastauksen.

## Palvelinasetukset {#server-settings}

Useimmat vaihteet eivät tarvitse täällä mitään. Paina **Palvelinasetukset** näyttääksesi ne; sama painike muuttuu muotoon **Piilota palvelinasetukset**.

<Shot name="05c_account_server_settings" alt="Tilin palvelinasetukset laajennettuina" />

| Kenttä | Oletus | Mikä se on |
| --- | --- | --- |
| **Todennuskäyttäjä** | tyhjä | Nimi, jolla vaihde tarkistaa salasanan, jos se ei ole sama kuin **Käyttäjätunnus**. Kuvassa alanumero on `201` ja vaihde todentaa sen nimellä `toimisto201`. |
| **Siirtotapa** | UDP | Palvelinyhteyden protokolla. Pudotusvalikko. |
| **Portti** | 5060 | Palvelimen portti. |
| **Lähtevä välityspalvelin** | tyhjä | Välityspalvelin, jonka kautta jokaisen pyynnön on kuljettava, jos palveluntarjoajasi antaa sellaisen. |
| **Rekisteröijä** | tyhjä | Osoite, johon rekisteröidytään, jos se ei ole **Palvelimen osoite**. |
| **Rekisteröi uudelleen, sekuntia** | 300 | Kuinka usein puhelin uusii rekisteröintinsä. |
| **Näppäinäänet** | Äänivirta | Miten näppäimistön äänet lähetetään vaihteelle. Pudotusvalikko. Muuta sitä vain, jos vaihde ei kuule ääniä. |

Puhelimen tarjoamia koodekkeja ei aseteta tilikohtaisesti; ne ovat kohdassa [Puheluasetukset](calls.md#audio-formats).
