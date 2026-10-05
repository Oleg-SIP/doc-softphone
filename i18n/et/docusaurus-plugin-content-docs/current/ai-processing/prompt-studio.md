---
title: Personal Prompt Studio
sidebar_position: 3
description: Juhised, mis teevad teie vestlustest kokkuvõtteid, neid käivitavad reeglid ja kuidas need endale sobivaks teha.
---

**Personal Prompt Studio** on AI Softphone'i osa, mis teeb teie vestlustest kokkuvõtteid teie moodi. Kokkuvõtte teevad juhised: programmiga tuleb kaasa üksteist, mis on kasutusvalmis kohe, kui ülestähendus ja keelemudel on ühendatud, ning te saate neid tavakeeles muuta, dubleerida ja oma juhiseid lisada. Need on loetletud jaotises **Juhised** lehel [Seaded → Töötlemine](processing.md#prompts).

Teie LLM, teie võti, teie kontroll: ühendage eelistatud mudel oma võtmega toetatud teenuse või ühilduva API kaudu — või teie organisatsiooni sees paigaldatud mudel. Kui ka [ülestähendus](transcription.md#your-own-models) toimub teie enda riistvaral, jäävad nii heli kui ka ülestähendused teie keskkonda.

<Shot name="12b_settings_processing_prompts" alt="Juhiste loend jaotises Seaded → Töötlemine" />

## Programmiga kaasa tulevad juhised {#the-prompts-that-come-with-the-program}

Teine veerg on see, mida loend juhise nime all näitab: mida see kirjutab ja millisel kujul.

| Juhis | Kuju | Mida see kirjutab |
| --- | --- | --- |
| **Kokkuvõte** | Proosa | Põhipunktid, otsused ja järgmised sammud ühes lühikeses lõigus. |
| **Ühereakokkuvõte** | Proosa | Lühike pealkiri, mille järgi vestlust loendis ära tunda. |
| **Ülesanded** | Punktid | Kes lubas mida teha ja millal, koos öeldud sõnadega. |
| **Teemad** | Punktid | Käsitletud teemad paari sõnaga. |
| **Nimed ja numbrid** | JSON | Inimesed, ettevõtted, kuupäevad, summad ja viited. |
| **Kategooria** | Sildid | Liigitab vestluse ühte teie [kategooriatest](dictionaries.md). |
| **Sildid** | Sildid | Paneb sellele teie [sildid](dictionaries.md), et seda hiljem leida. |
| **Hoiatussignaalid** | Signaalid | Probleemid koos tõendi ja vestluse ajaga. |
| **Küsimus selle kõne kohta** | Vastus | Vastab küsimusele, mille te ühe vestluse kohta esitate, selle ülestähenduse põhjal. |
| **Müügi kvaliteet** | Kriteeriumid | Hindab vestlust müügikriteeriumide järgi, mida saate muuta. |
| **Toe kvaliteet** | Kriteeriumid | Hindab, kui hästi probleemi mõisteti ja lahendati. |

Kujud on vastuse fikseeritud struktuurid ja just see võimaldab programmil vastust hoida ning hiljem sellest otsida: **Sildid** on koodid teie loenditest, **Signaalid** on koodid tõsidusega, **Kriteeriumid** on hinne koos põhjendusega ja hinne iga kriteeriumi kohta, **Vastus** on vastus koos sõnadega, millele see tugineb. Juhised, mis ütlevad mudelile kuju, on talletatud jaotises [Sõnastikud](dictionaries.md#answer-shapes-and-language).

AI Softphone'is tehtud kõned, arvutist [hõivatud](/capture/) koosolekud ja imporditud salvestised läbivad kõik samad juhised, kui neil on ülestähendus.

Ülesanded talletavad kokkulepitu — need ei saada sõnumeid, ei broneeri külastusi ega loo teie eest pileteid.

## Tehke see enda omaks {#making-it-yours}

- Muutke tavakeeles seda, mida juhis palub: mida see otsib, vastuse vormingut ja keelt, milles see vastab.
- Dubleerige juhis, et proovida varianti.
- Valige iga juhise jaoks mudel — teie enda arvutis või pilves.
- Määrake juhiste käivitamise järjekord, lülitage neid sisse ja välja ning muutke need tingimuslikuks — seda tehakse [reeglitega](processing.md#rules): näiteks müügihinnang käivitub ainult kõnedel, mis on liigitatud kategooriasse **Müük**.
- Hoidke oma kategooriaid, silte ja hoiatussignaale jaotises [Sõnastikud](dictionaries.md).
- Piirake kulusid [igakuiste piiridega](processing.md#limits).

Algsed juhised ja reeglid saab taastada nupuga **Taasta vaikeväärtused** jaotises **Vaikeväärtused** lehel [Seaded → Töötlemine](processing.md#defaults).
