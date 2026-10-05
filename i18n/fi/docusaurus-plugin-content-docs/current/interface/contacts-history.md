---
title: Yhteystiedot ja historia
sidebar_position: 2
description: Osoitekirja ja puheluhistoria puhelimen vieressä.
---

**Yhteystiedot** ja **Historia** avautuvat kahtena välilehtenä puhelimen oikealle puolelle, joten voit hakea numeron puhuessasi.

## Yhteystiedot {#contacts}

<Shot name="03_contacts" alt="Yhteystiedot-välilehti" />

- **Etsi** suodattaa luetteloa kirjoittaessasi.
- **Lisää** luo yhteystiedon.
- Jokainen yhteystieto näkyy nimen kera, ja sen alla on numero ja tili, jonka kautta yhteystiedolle soitetaan, esimerkiksi *231 · 201 Toimisto*.

Tunnetusta numerosta saapuva puhelu näyttää yhteystiedon nimen, samoin viimeisimpien puheluiden luettelo ja puheluhistoria — näin soittajan tunnistus toimii.

### Yhteystiedon muokkaaminen {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Yhteystieto avattuna muokattavaksi" />

Valitse yhteystieto, niin sen rivin oikealle puolelle tulee kynä ja luuri. Luuri soittaa yhteystiedolle; kynä avaa lomakkeen rivin alle:

| Kenttä | Mitä kirjoitetaan |
| --- | --- |
| **Nimi** | Miten yhteystieto näytetään. |
| **Numero** | Numero, johon soitetaan. |
| **Numero**-kentän alla oleva pudotusvalikko | Tili, jonka kautta yhteystiedolle soitetaan. |

**Tallenna** säilyttää muutokset, **Peruuta** hylkää ne ja **Poista** poistaa yhteystiedon.

## Historia {#history}

<Shot name="21_history" alt="Historia-välilehti" />

Puheluhistoria, uusin ensin. Yläreunassa:

- pudotusvalikko, oletuksena **Kaikki puhelut**, rajaa luettelon yhteen puhelulajiin;
- **Etsi** suodattaa kirjoittamasi perusteella.

Jokaisessa merkinnässä on kuvake puhelun lajista — lähtevä luuri tai punainen luuri ja kello vastaamattomalle puhelulle —, toisen osapuolen nimi (tai numero) ja sen alla päivämäärä, puhelun lopputulos, kesto, numero ja tili. Tuoreet puhelut näytetään muodossa *Eilen, 22:33* tai viikonpäivänä, vanhemmat päivämäärällä.

| Puhelun lopputulos | Näytetään |
| --- | --- |
| Puhuitte | **lähtevä** tai saapuva sekä kesto, esimerkiksi *48 s* |
| Saapuvaan puheluun ei vastattu | **Vastaamaton** |
| Soittamasi puhelu ei yhdistynyt | **Ei mennyt läpi** |

Valitse merkintä, niin sen oikealle puolelle tulee neljä painiketta:

| Painike | Toiminto |
| --- | --- |
| Henkilö ja plus | Lisää numeron [Yhteystietoihin](#contacts). |
| ▶ | Toistaa puhelun tallenteen, jos se tallennettiin. |
| Roskakori | Poistaa merkinnän. |
| Luuri | Soittaa numeroon takaisin. |

### Kuinka kauan historiaa säilytetään {#how-long-the-log-is-kept}

Puheluhistoria on todiste, joten siitä ei poisteta mitään, ellet itse sano niin: oletuksena jokainen puhelu säilytetään. Säilytysaika ja **Tyhjennä puheluhistoria** -painike ovat kohdassa [Puheluasetukset](../sip-accounts/calls.md#history).

Vastaamattomat ja hylätyt puhelut voi lukea myös [paikallisen REST API:n](../integration/rest-api.md) kautta (`/history?missed=true`, `/history?declined=true`).
