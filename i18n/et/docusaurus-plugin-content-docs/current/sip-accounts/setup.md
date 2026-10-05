---
title: SIP-konto seadistamine
sidebar_position: 1
description: Ühendage AI Softphone oma IP-keskjaama või SIP-teenusepakkujaga jaotises Seaded → Kontod.
---

AI Softphone töötab mis tahes IP-keskjaama või SIP-teenusepakkujaga. Võite olla sisse logitud nii paljudesse kontodesse (liinidesse), kui teil on, ja igal kontol on oma seaded.

Avage **Seaded → Kontod**.

<Shot name="05_settings_accounts" alt="Seaded → Kontod: kaks kontot, mõlemad registreeritud" />

## Kontode loend {#the-list-of-accounts}

Iga konto on rida, kus on:

- **märkeruut**, mis lülitab konto sisse või välja;
- **täpp**, mis on roheline, kui konto on keskjaamas registreeritud;
- nimi ja selle all `kasutaja@server`;
- nupp **Katkesta**, mis logib konto keskjaamast välja;
- nupud **▲** ja **▼**, mis liigutavad kontot loendis üles või alla. [Peaakna](../interface/main-window.md) kontode märgid järgivad sama järjekorda.

Paremas ülanurgas olev nupp **Lisa** lisab konto. Klõpsake real, et avada selle all vorm.

## Konto lisamine {#adding-an-account}

<Shot name="05d_account_add" alt="Uue konto tühi vorm" />

Vajutage **Lisa**. Loendi alla avaneb tühi vorm ja kursor on väljal **Nimi (valikuline)**. Täitke allolevad väljad, avage **Serveri seaded**, kui keskjaam neid vajab, ja vajutage **Salvesta**. Uus konto alustab tavaliste väärtustega: UDP pordil 5060, registreeringut uuendatakse iga 300 sekundi järel.

## Konto vorm {#the-account-form}

<Shot name="05b_account_edit" alt="Konto vorm" />

| Väli | Mida sisestada |
| --- | --- |
| **Nimi (valikuline)** | Nimi, mida näidatakse konto märgil peaaknas ja selle kõnedel. Kui see on tühi, näidatakse kontot kujul `kasutaja@server`. |
| **Kasutajanimi** | Kasutajanimi või sisenumber, mille andis teie keskjaam või teenusepakkuja. |
| **Parool** | Selle parool. Väli on vormi juurde naastes tühi. Seda hoitakse arvuti võtmehoidjas, mitte kunagi seadete failis. |
| **Serveri aadress** | Keskjaama või teenusepakkuja SIP-serveri aadress, näiteks `pbx.example.com`. |
| **Serveri seaded** | Laiendab ühenduse harvemini vajalikud seaded; vaadake allpool. |
| **Vasta automaatselt** | Jaotises **Vastamine**: vastab selle konto sissetulevatele kõnedele, ilma et peaksite midagi vajutama. Vaikimisi väljas. |

Vajutage **Salvesta**, et muudatused alles jätta. **Loobu** tühistab need ja **Kustuta** eemaldab konto.

Kui konto kõrval olev täpp on roheline, on konto registreeritud ja seda näitab ka konto märk peaaknas. Kui see jääb halliks või punaseks, avage [Diagnostika](../troubleshooting/diagnostics.md): vahekaart **SIP** näitab päringut `REGISTER` ja serveri vastust.

## Serveri seaded {#server-settings}

Enamik keskjaamu ei vaja siin midagi. Vajutage **Serveri seaded**, et neid näidata; sama nupp muutub siis nupuks **Peida serveri seaded**.

<Shot name="05c_account_server_settings" alt="Konto serveri seaded laiendatuna" />

| Väli | Vaikimisi | Mis see on |
| --- | --- | --- |
| **Autentimise kasutaja** | tühi | Nimi, mille järgi keskjaam parooli kontrollib, kui see ei ole sama mis **Kasutajanimi**. Pildil on sisenumber `201` ja keskjaam autendib selle nimega `kontor201`. |
| **Transport** | UDP | Serveriühenduse protokoll. Ripploend. |
| **Port** | 5060 | Serveri port. |
| **Väljuv puhverserver** | tühi | Puhverserver, mille kaudu peab iga päring liikuma, kui teie teenusepakkuja selle annab. |
| **Registrar** | tühi | Aadress, kuhu registreeruda, kui see ei ole **Serveri aadress**. |
| **Registreeri uuesti, sekundit** | 300 | Kui sageli telefon oma registreeringut uuendab. |
| **Klahvitoonid** | Helivoog | Kuidas klahvistiku toone keskjaamale saadetakse. Ripploend. Muutke seda ainult siis, kui keskjaam toone ei kuule. |

Telefoni pakutavaid koodekeid ei seadistata konto kaupa; need on jaotises [Kõnede seaded](calls.md#audio-formats).
