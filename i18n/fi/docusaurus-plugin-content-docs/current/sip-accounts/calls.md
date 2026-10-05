---
title: Puheluasetukset
sidebar_position: 3
description: Vaihteelle tarjotut koodekit, mitä tapahtuu toisen puhelun saapuessa, automaattinen uudelleenvalinta ja kuinka kauan puheluhistoriaa säilytetään.
---

**Asetukset → Puhelut** sisältää asetukset, jotka koskevat jokaista puhelua riippumatta siitä, millä tilillä se on.

## Ääniformaatit {#audio-formats}

<Shot name="07_settings_calls" alt="Asetukset → Puhelut: ääniformaatit" />

Luettelo koodekeista, joita puhelin tarjoaa toiselle päälle. Koodekit *tarjotaan tässä järjestyksessä*, ja toinen pää valitsee tarjoamistasi: mitä ylempänä koodekki on, sitä todennäköisemmin sitä käytetään.

- **Valintaruutu** ottaa koodekin käyttöön tai poistaa sen käytöstä. Käytöstä poistettua koodekkia ei tarjota.
- **▲** ja **▼** siirtävät sitä luettelossa ylös tai alas.
- Oikealla oleva *laajakaista* merkitsee koodekkia, jonka äänialue on puhelinlinjaa laajempi: ääni on selkeämpi.

| Koodekki | Näytteenottotaajuus | Oletuksena käytössä |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, laajakaista | kyllä |
| **G722** | 16 kHz, laajakaista | kyllä |
| **PCMU** | 8 kHz | kyllä |
| **PCMA** | 8 kHz | kyllä |
| **speex** | 16 kHz, laajakaista | ei |
| **speex** | 8 kHz | ei |
| **speex** | 32 kHz, laajakaista | ei |
| **iLBC** | 8 kHz | ei |
| **GSM** | 8 kHz | ei |
| **L16** | 44 kHz, stereo, laajakaista | ei |
| **L16** | 44 kHz, laajakaista | ei |

Taulukko on siinä järjestyksessä, jossa ohjelma toimitetaan.

Koodekeista sovitaan puhelun alkaessa, joten muutos koskee seuraavasta puhelustasi alkaen. Jos puhelu kuulostaa huonolta, jätä käyttöön vain ne koodekit, joita vaihteesi käyttää.

## Koputus {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Asetukset → Puhelut: koputus, automaattinen uudelleenvalinta ja historia" />

*Mitä tapahtuu, kun joku soittaa, kun olet jo puhelussa.* Pudotusvalikko valitsee sen; oletus on **Anna toisen puhelun soida**. Oman vaihteesi sisäpuhelukuulutus tulee aina läpi valinnastasi riippumatta — näin CTI-paneelista soitettu puhelu tavoittaa tämän puhelimen.

## Automaattinen uudelleenvalinta {#autodial}

Kun puhelu ei mene läpi, sen kortti tarjoutuu jatkamaan valintaa, kunnes se onnistuu. Kaksi liukusäädintä asettaa, miten:

- **Odotus yritysten välillä** — oletuksena 15 sekuntia;
- **Luovuta … minuutin jälkeen** — oletuksena 30 minuuttia.

## Historia {#history}

Puheluhistoria on todiste, joten siitä ei poisteta mitään, ellet sano niin tässä.

- **Säilytysaika** valitsee, kuinka kauan [puheluhistoria](/interface/contacts-history#history) säilyttää puhelun. Oletus on **Aina**.
- **Tyhjennä puheluhistoria** poistaa kaikki puhelut kerralla säilytysajasta riippumatta. Sitä ei voi perua.
