---
title: Teave
sidebar_position: 2
description: Versioon, uuendused, teie riik, litsents, kasutusaruande sisu, tagasisidevorm ja see, millega programm on ehitatud.
---

**Seaded → Teave** sisaldab kõike programmi enda kohta.

<Shot name="20_settings_about" alt="Seaded → Teave" />

## Versioon ja riik {#version-and-country}

Ülal on nimi, **Versioon** (pildil 1.0.0) ja link veebisaidile [ai-softphone.com](https://ai-softphone.com/).

**Riik** ütleb programmile, kus te olete. See aitab valida parima uuendusserveri ja avab tee teie riigis majutatud keele- ja kõneteenustele. **Tuvasta automaatselt** täidab selle.

## Uuendused {#updates}

Vahekaart ütleb, kas teil on uusim versioon ja millal viimati kontrolliti. **Otsi uuendusi** kontrollib kohe.

**Otsi uuendusi automaatselt**, vaikimisi sees, kontrollib kord päevas ja varsti pärast telefoni käivitamist. See küsib serverilt ühe väikese faili ning midagi ei laadita alla ega paigaldata ilma teie loata.

## Litsents {#licence}

Programm on vaba tarkvara litsentsi GPL-2.0-or-later all. Sellel puudub igasugune garantii ja te võite seda selle litsentsi tingimustel edasi levitada; täistekst on kaasas failis nimega `LICENSE`.

## Telemeetria {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Seaded → Teave: mida kasutusaruanne sisaldab" />

Programm saadab ühe väikese kasutusaruande päevas. Teile näidatakse selle sisu enne esimese saatmist ja vahekaart loetleb selle:

| | Mida saadetakse |
| --- | --- |
| **Alati saadetakse** | Et rakendus käivitati, selle versioon ja kasutajaliidese keel; operatsioonisüsteemi versioon, lokaat, riik ja ajavöönd. |
| **Saadetakse lisaks, režiimis Laiendatud** | Kõnede ja hõivatud vestluste loendurid; ühendatud keskjaama tootja ja versioon, mitte kunagi selle aadress; kui mitu [Ülevaate](/interface/settings-overview) sammu on tehtud ja valitud paigutus. |
| **Ei saadeta kunagi, üheski režiimis** | Numbrid, kuhu olete helistanud või kust teile helistati; kontod, paroolid ega midagi võtmehoidjast; kontaktid, vestlused, ülestähendused ega salvestised; midagi, mida olete tippinud, ega mingeid privaatseid andmeid arvutis. |

Iga paigaldus loob endale ühe juhusliku identifikaatori, et sama programmikoopia aruandeid saaks ühena ära tunda. See ei ole tuletatud millestki, mis puudutab teid või teie arvutit, ega nimeta kedagi — kuid kuna see püsib, saab selle kantud aruandeid omavahel siduda. See teeb need pigem pseudonüümseks kui anonüümseks.

Põhiaruande alus on õigustatud huvi: teadmine, milliseid versioone kasutatakse, on see, mis võimaldab parandusel jõuda nendeni, kes seda vajavad. Kõik, mida laiendatud aruanne lisab, on seal, sest te selle valisite, ja te saate seda siin igal ajal muuta.

### Aruandlus {#reporting}

| Valik | |
| --- | --- |
| **Laiendatud** | Põhiaruanne ja see, mida loetleb *Saadetakse lisaks*. Pildil valitud. |
| **Põhiline** | Ainult see, mis *Alati saadetakse*. |
| **Välja lülitatud** | Aruannet üldse ei saadeta. Saadaval ainult Enterprise-versioonis; muidu on valik hall. |

## Tagasiside {#feedback}

<Shot name="20c_settings_about_bottom" alt="Seaded → Teave: tagasisidevorm ja komponendid, millega programm on ehitatud" />

Vorm, mis kirjutab arendajatele programmist lahkumata.

| Väli | |
| --- | --- |
| **Teema** ja **Sõnum** | See, mida tahate öelda. |
| **Teie nimi** ja **Aadress vastuse jaoks** | Mõlemad on valikulised. Ilma aadressita ei ole võimalik vastata. |
| **Lisa logi** | Lisab logi lõpu, umbes 512 kB. Vaadake [Diagnostika](/troubleshooting/diagnostics). |

**Saada** jääb halliks, kuni on midagi saata.

## Ehitatud kasutades {#built-with}

Komponendid, millele programm on ehitatud, igaüks oma litsentsiga: Qt 6 (GPL-2.0 või GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (avalik omand), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) ja PulseAudio klient (LGPL-2.1-or-later). Igaüht kasutatakse kõrval nimetatud litsentsi alusel; kui komponent pakub mitut, on valitud nimetatu.
