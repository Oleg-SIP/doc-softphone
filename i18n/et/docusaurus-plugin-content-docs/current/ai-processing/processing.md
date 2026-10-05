---
title: Töötlemine
sidebar_position: 2
description: Vestluste automaatne töötlemine, igakuised kulupiirid, keelemudelid, juhised ja neid käivitavad reeglid.
---

**Seaded → Töötlemine** otsustab, mis juhtub vestlusega pärast salvestamist, milline mudel töö ära teeb ja kui palju see võib maksta.

<Shot name="12_settings_processing" alt="Seaded → Töötlemine" />

## Töötle vestlusi automaatselt {#process-conversations-automatically}

- **Väljas:** midagi ei juhtu, kuni te seda [salvestiste aknas](../recordings/recordings-window.md) palute.
- **Sees:** allpool olevad [reeglid](#rules) töötavad iseenesest. See muudab vestluse kokkuvõtteks, kategooriaks ja kõigeks muuks, ilma et keegi midagi vajutaks. Pilves olev mudel võtab tasu iga sellise sammu eest.

Märkeruudu all näitab programm, kui palju on sel kuul kulutatud ja kui mitme päringuga, näiteks *Sel kuul: 40.492 märki, 84 päringus, tasuta.*

## Piirid {#limits}

| Väli | Tähendus |
| --- | --- |
| **Rahapiir, kuus** | Suurim summa, mida mudelid võivad kuus maksta. |
| **Märkide piir, kuus** | Suurim märkide arv, mida need võivad kuus kasutada. |

Piire on kaks, sest kuud saab mõõta kahes ühikus. Mõlemad on tühjad, kuni need täidate. Kui üks neist saavutatakse, peatuvad automaatsed reeglid kuni kuu vahetumiseni. **Seda, mida te ise palute, ei peatata kunagi.**

## Keelemudelid {#language-models}

Mudelid, mis loevad ülestähendust ja kirjutavad selle kohta. Vajutage **Lisa**, et lisada. Igaüks on loendis oma nimega ja selle all on mudeli tunnus ning teenuse aadress, näiteks `qwen3-32b · http://llm.local:8000/v1`. Mudelit, mis on tähistatud kui **vaikimisi**, kasutatakse vaikimisi. Mudeli vormis olev nupp kontrollib, kas teenus tõesti vastab, enne kui sellele toetute.

- Mudel **teie enda arvutis** hoiab iga vestluse maja sees ja selle käitamine ei maksa midagi.
- Pilves olev mudel — OpenAI, Claude, Mistral, DeepSeek, Groq ja teised — on tasuline kasutuse järgi. Programm näitab iga päringu hinda märkides ja rahas.

## Juhised {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Seaded → Töötlemine: juhised" />

*See, mida mudelitelt palutakse.* Iga juhis tuli programmiga ja igaüks on teie oma, et seda muuta — ja tagasi panna. Igaüks on loendis oma nimega ja selle all on, mida see kirjutab ja millisel kujul. Kuju — **Vastus**, **Punktid**, **Sildid**, **JSON**, **Proosa**, **Signaalid** või **Kriteeriumid** — otsustab, kuidas vastust hoitakse ja näidatakse. Juhiseid kirjeldatakse lehel [Personal Prompt Studio](prompt-studio.md). **Lisa** teeb teie oma juhise.

## Reeglid {#rules}

<Shot name="12c_settings_processing_rules" alt="Seaded → Töötlemine: reeglid" />

*See, mis töötab iseenesest, selles järjekorras. Igaüks käivitub kõige rohkem korra vestluse kohta.* Reegel on rida märkeruuduga, mis lülitab selle sisse või välja, selle nimega ja selle all kirjeldusega, mida see teeb. **▲** ja **▼** muudavad järjekorda. Programmiga tuleb kaasa kaheksa:

| Reegel | Mida teeb | Millal |
| --- | --- | --- |
| **Kirjuta iga vestlus üles** | Kirjutab selle üles. | alati |
| **Võta see kokku** | Palub mudelilt: **Kokkuvõte**. | alati |
| **Taanda see üheks reaks** | Palub mudelilt: **Ühereakokkuvõte**. | alati |
| **Liigita see kategooriasse** | Palub mudelilt: **Kategooria**. | alati |
| **Märgista see** | Palub mudelilt: **Sildid**. | alati |
| **Tõsta esile, mis väärib pilku** | Palub mudelilt: **Hoiatussignaalid**. | alati |
| **Hinda seda, kui oli müük** | Palub mudelilt: **Müügi kvaliteet**. | ainult kui kategooria on **Müük** |
| **Hinda seda, kui oli tugi** | Palub mudelilt: **Toe kvaliteet**. | ainult kui kategooria on **Tugi** |

Järjekord on oluline: kaks viimast reeglit vajavad kategooriat, mille neile eelnev reegel on määranud. **Lisa** teeb teie oma reegli.

## Vaikeväärtused {#defaults}

**Taasta vaikeväärtused** taastab juhised ja reeglid sellisena, nagu need programmiga kaasa tulid, kasutajaliidese praeguses keeles. Teie keelemudeleid see ei puuduta.

Programmiga kaasa tulnud juhised ja reeglid jäävad kasutajaliidese keele vahetamisel sellesse keelde, milles need olid; **Taasta vaikeväärtused** toob need uude keelde. Iga juhis märgitakse siis paremal kui *muudetud*.
