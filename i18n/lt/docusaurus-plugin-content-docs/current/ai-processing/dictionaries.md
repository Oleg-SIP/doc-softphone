---
title: Žodynai
sidebar_position: 4
description: Jūsų kategorijos, žymos ir įspėjamieji signalai — žodžiai, pagal kuriuos skirstomi jūsų pokalbiai.
---

**Nustatymai → Žodynai** apima žodžius, pagal kuriuos pokalbį galima priskirti, pažymėti ar išskirti. Šie sąrašai yra tai, ką mato modeliai ir iš ko jie turi rinktis, todėl atsakymas visada yra tai, ko vėliau galite ieškoti.

<Shot name="13_settings_dictionaries" alt="Nustatymai → Žodynai" />

**Rodyti ištrintus** rodo įrašus, kuriuos ištrynėte.

Kiekvienas įrašas yra pavadinimas, trumpas mažosiomis raidėmis parašytas kodas ir aprašas, kuris nurodo modeliui, kada jį pasirinkti. Kodas yra tai, kas išsaugoma ir ką grąžina [REST API](../integration/rest-api.md#taxonomy-and-settings), todėl jis nesikeičia, kai pervadinate įrašą.

## Kategorijos {#categories}

Apie ką buvo pokalbis; **kiekvienam pokalbiui pasirenkama viena**. Programa pradeda nuo keturių:

| Pavadinimas | Kodas | Naudojama |
| --- | --- | --- |
| **Pardavimai** | `sales` | Pardavimui, pasiūlymui, deryboms ar pirkimo tęsiniui — taip pat kai klientas klausia, kiek kas kainuoja. |
| **Pagalba** | `support` | Pagalbai kam nors dėl produkto ar paslaugos, kurią jau turi: gedimas, klausimas dėl naudojimo, skundas dėl veikimo. |
| **Asmeninis** | `personal` | Visai ne darbo reikalai — privatus pokalbis, kuris atsitiktinai vyko šia linija. |
| **Kita** | `other` | Darbo reikalai, bet ne pardavimas ir ne pagalba: tiekėjas, kolega, pristatymas, klaidingas numeris. Rinkitės tai, užuot spėlioję tarp kitų. |

Paspauskite **Pridėti**, kad pridėtumėte savo kategoriją.

## Žymos {#tags}

Pažymėjimai, kurie *visi gali tikti tam pačiam pokalbiui*. Paspauskite **Pridėti**, kad pridėtumėte. Sąrašas prasideda tokiais įrašais:

| Pavadinimas | Kodas | Naudojama |
| --- | --- | --- |
| **Žadėta perskambinti** | `callback` | Kažkas šiame skambutyje pažadėjo perskambinti arba paprašė, kad jam perskambintų. |
| **Skundas** | `complaint` | Kita pusė išreiškė nepasitenkinimą, nesvarbu, ar jis buvo išspręstas. |
| **Perduota aukščiau** | `escalation` | Skambutis buvo perduotas kam nors kitam, arba kita pusė to paprašė. |
| **VIP klientas** | `vip` | Su kita puse elgtasi kaip su svarbiu klientu, arba ji pati tokia prisistatė. |

## Įspėjamieji signalai {#red-flags}

Dalykai, kuriems reikia dėmesio, rasti pokalbyje su įrodymu ir laiku — pavyzdžiui, *Supykęs klientas* ar *Pasitraukimo rizika*. Įspėjamieji signalai [įrašų lange](../recordings/recordings-window.md) piešiami raudonai, ir kiekvienas turi rimtumą: žemą, vidutinį ar aukštą.

## Atsakymų formos ir kalba {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Nustatymai → Žodynai: atsakymų formos ir kalbos instrukcijos" />

Toliau skirtuke yra instrukcijos, iš kurių sudaromi nurodymai. Jos laikomos čia, kad kiekvienas nurodymas galėtų naudoti tą pačią formuluotę, ir galite jas keisti kaip bet kurį kitą įrašą.

| Pavadinimas | Kodas | Ką tai sako modeliui |
| --- | --- | --- |
| **Žymos** | `shape-labels` | Atsakyti JSON formatu su kodų sąrašu ir tikrumu dėl kiekvieno, naudojant tik kodus iš gauto sąrašo. |
| **Įvertinimas** | `shape-score` | Atsakyti įvertinimu, jo pagrindimu ir žodžiais, kuriais jis remiasi. |
| **Kriterijai** | `shape-rubric` | Atsakyti bendru įvertinimu ir įvertinimu kiekvienam kriterijui. |
| **Signalai** | `shape-flags` | Atsakyti kodais iš sąrašo, kiekvienu su rimtumu. |
| **Atsakymas** | `shape-qa` | Atsakyti atsakymu arba aiškiai pasakyti, kad pokalbyje to nėra, ir pateikti žodžius, kuriais atsakymas remiasi. |
| **JSON** | `shape-json` | Atsakyti tik JSON, aukščiau prašoma forma. |
| **Kaip kalbėta** | `language-as-spoken` | Rašyti ta kalba, kuria vyko pokalbis. |
| **Kaip kalbėta, įvardyta** | `language-as-spoken-named` | Tas pats, įvardijant kalbą. |
| **Nurodyta kalba** | `language-named` | Rašyti jūsų nurodyta kalba. |

**Pridėti** sąrašo gale prideda įrašą.

## Numatytosios reikšmės {#defaults}

**Atkurti numatytuosius** grąžina kiekvieną žodyną tokį, koks atėjo su programa, dabartine sąsajos kalba. Tai, kam jūsų pokalbiai jau priskirti, nepaliečiama.
