---
slug: /
title: "AI Softphone'i dokumentatsioon"
sidebar_position: 1
description: Mis on AI Softphone, millel see töötab ja kus on kirjeldatud programmi iga osa.
---

[AI Softphone](https://ai-softphone.com/) on IP-telefonikeskjaama tarkvaratelefon, mis muudab iga vestluse ka tekstiks ja kirjalikuks kokkuvõtteks. Vestlus võib sinna jõuda kolmel viisil ja kõik kolm jõuavad samasse teeki sama salvestise, ülestähenduse ja kokkuvõttega:

- **kõne**, mis tehakse või võetakse vastu programmis mis tahes IP-keskjaama või SIP-teenusepakkuja kaudu;
- **koosolek** Zoomis, Teamsis, Meetis või mõnes muus rakenduses, salvestatuna arvutist endast;
- **salvestis, mis teil juba on** — mobiiltelefonist, diktofonist või muust süsteemist — lisatuna teeki.

Salvestisi, ülestähendusi ja ajalugu hoitakse failis, mis kuulub teile. Kontot ega tellimust pole vaja ja programm on vaba tarkvara GPL v2 litsentsi all.

## Vestlusest kokkuvõtteni {#from-a-conversation-to-a-write-up}

1. Saabub vestlus: kõne, koosolek või fail.
2. See salvestatakse kahele kanalile, nii et see, mida teie ütlesite, ja see, mida ütles teine pool, jäävad lahku.
3. See kirjutatakse üles kõneleja kaupa, heliga sünkroonis.
4. Teie valitud keelemudel teeb sellest kokkuvõtte: kokkuvõte, ülesanded, kategooria, sildid ja hoiatussignaalid — ning te saate vestluselt küsimuse küsida.

## Allalaadimine ja süsteeminõuded {#download-and-system-requirements}

Programmi saab tasuta alla laadida aadressilt [ai-softphone.com](https://ai-softphone.com/#download): paigaldaja (`.exe`) Windowsile, kettatõmmis (`.dmg`) macOS-ile ning AppImage või `.deb` Linuxile. Midagi muud ei ole vaja enne paigaldada — Qt, OpenSSL ja C++ käituskeskkond on paketis kaasas. Teil on vaja SIP-kontot oma teenusepakkujalt või ise hallatavast keskjaamast. Salvestamine töötab kohe pärast programmi paigaldamist; ülestähendus ja kokkuvõte vajavad teie valitud teenust või mudelit teie enda arvutis.

| Süsteem | Nõuded |
| --- | --- |
| macOS | macOS 14.4 või uuem; ainult Apple silicon — Inteli Mac ei saa seda avada, isegi mitte Rosetta kaudu; Metal-graafika; 160 MB kettaruumi, lisaks salvestised. Süsteem küsib korra luba mikrofoni kasutamiseks. |
| Windows | Windows 10 versioon 1809 (järk 17763) või uuem ning Windows 11; 64-bitine Inteli või AMD protsessor; Direct3D 11 või OpenGL 2.1; 250 MB kettaruumi, lisaks salvestised. |
| Linux | Ubuntu 22.04 LTS või uuem, Debian 12 või uuem ja kõik sama vanad — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C teek 2.35 või uuem; 64-bitine Inteli või AMD protsessor; OpenGL 2.1 või OpenGL ES 2.0, X11-s või Waylandis; PipeWire või PulseAudio (ALSA, kui kumbagi pole); 200 MB kettaruumi, lisaks salvestised. Salve ikoon vajab töölauda, millel on olekuteavituste ala. |

Linuxis töötab AppImage igas sama vanas distributsioonis: muutke see käivitatavaks ja käivitage. `.deb` vajab lisaks süsteemi enda GCC 13 C++ käituskeskkonda, mis on olemas Ubuntu 24.04-s ja Debian 13-s, kuid mitte Ubuntu 22.04-s; vanemates kasutage AppImage'it.

Kasutajaliides on saadaval kolmekümnes keeles; keel valitakse jaotises [Välimus](/program/appearance) ja seda saab vahetada ilma taaskäivituseta.

Selle dokumentatsiooni ekraanipildid on tehtud macOS-is ja näidatud väikestena: klõpsake pildil, et näha seda täissuuruses. Programm näeb välja ja töötab teistes süsteemides samamoodi.

## Esimesed sammud {#first-steps}

1. [Lisage konto](sip-accounts/setup.md) oma keskjaama või SIP-teenusepakkuja jaoks.
2. [Valige mikrofon ja kõlarid](sip-accounts/devices.md) ning tehke proovikõne.
3. Otsustage, [milliseid kõnesid salvestatakse](recordings/call-recording.md).
4. Lisage [tuvastaja](ai-processing/transcription.md) ja [keelemudel](ai-processing/processing.md), kui soovite ülestähendusi ja kokkuvõtteid.

**Seaded → Ülevaade** hoiab seda nimekirja teie eest: roheline täpp tähistab tehtud sammu, punane veel tegemata sammu. Vaadake [Seadete ülevaade](interface/settings-overview.md).

## Mida edasi lugeda {#where-to-read-next}

| Kui soovite… | Lugege |
| --- | --- |
| Akendes orienteeruda | [Kasutajaliides](interface/main-window.md) |
| Ühendada telefoni oma keskjaamaga | [SIP-konto seadistamine](sip-accounts/setup.md) |
| Valida mikrofoni, kõlarid ja helina | [Seadmed](sip-accounts/devices.md) |
| Seadistada koodekid, kõne ootel ja kõnede ajaloo | [Kõnede seaded](sip-accounts/calls.md) |
| Panna kolleegid ühe vajutusega nuppudele | [Nupud](sip-accounts/buttons.md) |
| Otsustada, milliseid kõnesid ja kui kaua salvestatakse | [Kõnede salvestamine](recordings/call-recording.md) |
| Kuulata, otsida ja lugeda oma vestlusi | [Salvestiste aken](recordings/recordings-window.md) |
| Salvestada teises rakenduses peetud koosolekut | [Hõivamine](capture/capture.md) |
| Valida tuvastaja, mis muudab kõne tekstiks | [Ülestähendus](ai-processing/transcription.md) |
| Otsustada, milline tehisintellekt teeb teie vestlustest kokkuvõtteid ja kui palju see võib maksta | [Töötlemine](ai-processing/processing.md) |
| Muuta kategooriaid, silte ja hoiatussignaale | [Sõnastikud](ai-processing/dictionaries.md) |
| Muuta paigutust, teemat, käivitumist ja otseteid | [Välimus](program/appearance.md), [Käivitumine](program/startup.md) ja [Otseteed](program/shortcuts.md) |
| Ühendada CRM või mõni muu programm | [Veebikonksud](integration/webhooks.md) ja [Kohalik REST API](integration/rest-api.md) |
| Näha, mida telefon ja keskjaam teineteisele ütlevad | [Diagnostika](troubleshooting/diagnostics.md) |
| Leida probleemi põhjus | [Levinud probleemid](troubleshooting/common-problems.md) |
| Lülitada programmi osi välja | [Moodulid](application/modules.md) |
| Kontrollida versiooni, uuendusi ja kasutusaruande sisu | [Teave](application/about.md) |

Lehed järgivad **Seadete** vahekaartide järjekorda.

## Privaatsus {#privacy}

- Vaikimisi jääb kõik teie arvutisse: salvestised, ülestähendused ja ajalugu on failis, mis kuulub teile. Mitte midagi vestlusest — ei numbrit, nime ega sõna öeldust — ei lähe kuhugi, kuhu te seda ise ei saatnud.
- Kontode paroole, veebikonksu päise väärtust ja API märgist hoitakse operatsioonisüsteemi võtmehoidjas, mitte kunagi seadete failis.
- Uus versioon annab endast teada, kui see ilmub — mitte kunagi kõne ajal — ja paigaldatakse alles siis, kui te selleks loa annate.
- Programm saadab ühe väikese kasutusaruande päevas. Teile näidatakse selle sisu enne esimese saatmist ja te valite, kui palju see sisaldab: **Põhiline** või **Laiendatud**. See ei sisalda kunagi numbreid, kontakte, teie keskjaama aadressi ega midagi vestluses öeldut. Täielik loetelu on jaotises [Teave](/application/about#telemetry).
- Programm on vaba tarkvara GPL v2 litsentsi all.
