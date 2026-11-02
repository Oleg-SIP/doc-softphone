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
| **Pardavimai** | `sales` | Pardavimas, pasiūlymas, derybos ar pirkimo užbaigimas — įskaitant klientą, klausiantį, kiek kas kainuoja. |
| **Pagalba** | `support` | Pagalba kam nors dėl gaminio ar paslaugos, kurią jis jau turi: gedimas, klausimas apie naudojimą, skundas dėl to, kaip veikia. |
| **Asmeninis** | `personal` | Visai ne darbo — privatus pokalbis, kuris atsitiktinai vyko šia linija. |
| **Kita** | `other` | Darbo, bet nei pardavimas, nei pagalba: tiekėjas, kolega, pristatymas, ne tas numeris. Rinkitės tai, užuot spėlioję tarp kitų. |

Paspauskite **Pridėti**, kad pridėtumėte savo kategoriją.

## Žymos {#tags}

Pažymėjimai, kurie *visi gali tikti tam pačiam pokalbiui*. Paspauskite **Pridėti**, kad pridėtumėte. Sąrašas prasideda tokiais įrašais:

| Pavadinimas | Kodas | Naudojama |
| --- | --- | --- |
| **Žadėta perskambinti** | `callback` | Kažkas šiame skambutyje pažadėjo perskambinti arba paprašė jam perskambinti. |
| **Skundas** | `complaint` | Kita pusė išreiškė nepasitenkinimą, nesvarbu, ar tai buvo išspręsta. |
| **Perduota aukščiau** | `escalation` | Skambutis buvo perduotas kitam arba kita pusė to paprašė. |
| **VIP klientas** | `vip` | Su kita puse elgtasi kaip su svarbiu klientu arba ji pati taip apie save pasakė. |

## Įspėjamieji signalai {#red-flags}

Dalykai, kuriems reikia dėmesio, rasti pokalbyje su įrodymu ir laiku — pavyzdžiui, *Supykęs klientas* ar *Pasitraukimo rizika*. Įspėjamieji signalai [įrašų lange](../interface/recordings.md) piešiami raudonai, ir kiekvienas turi rimtumą: žemą, vidutinį ar aukštą.

| Pavadinimas | Kodas | `severity` | Naudojama |
| --- | --- | --- | --- |
| **Supykęs klientas** | `angry-customer` | `high` | Girdėjosi, kad kita pusė pyksta, įžeidinėja arba grasina išeiti. |
| **Pasitraukimo rizika** | `churn-risk` | `high` | Buvo užsiminta apie nutraukimą, nepratęsimą ar perėjimą pas kitą, kad ir kaip ramiai. |
| **Duotas pažadas** | `promise-made` | `medium` | Mūsų pusė įsipareigojo dėl kažko konkretaus — datos, kainos, pataisymo, pinigų grąžinimo. |
| **Jautrūs duomenys** | `sensitive-data` | `high` | Balsu buvo perskaitytas kortelės numeris, slaptažodis, dokumento numeris ar kas kita, ko įraše neturėtų būti. |
| **Konkurentas** | `competitor` | `low` | Kita pusė paminėjo kitą, siūlantį tą patį, arba palygino mus su juo. |

## Nurodymai {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Nustatymai → Žodynai: atsakymų formos ir kalbos instrukcijos" />

*Tai, kas pridedama prie kiekvieno nurodymo apie atsakymo formą ir kalbą, kuria jį rašyti.* Jos laikomos čia, kad kiekvienas nurodymas galėtų naudoti tą pačią formuluotę, ir galite jas keisti kaip bet kurį kitą įrašą — arba parašyti savo, pavyzdžiui, *atsakyk trumpai* ar *niekada nenurodyk kainos*, ir pažymėti jas bet kurio nurodymo skiltyje **Siųsti taip pat**.

| Pavadinimas | Kodas | Ką tai sako modeliui |
| --- | --- | --- |
| **Proza** | `shape-plain` | Atsakyti paprasta proza, be JSON, sąrašų ar antraščių. |
| **Punktai** | `shape-list` | Atsakyti darbų sąrašu, prie kiekvieno nurodant kas ir kada. |
| **Žymos** | `shape-labels` | Atsakyti JSON formatu su kodų sąrašu ir tikrumu dėl kiekvieno, naudojant tik kodus iš gauto sąrašo. |
| **Įvertinimas** | `shape-score` | Atsakyti įvertinimu, jo pagrindimu ir žodžiais, kuriais jis remiasi. |
| **Kriterijai** | `shape-rubric` | Atsakyti bendru įvertinimu ir įvertinimu kiekvienam kriterijui. |
| **Signalai** | `shape-flags` | Atsakyti kodais iš sąrašo, kiekvienu su rimtumu. |
| **Atsakymas** | `shape-qa` | Atsakyti atsakymu arba aiškiai pasakyti, kad pokalbyje to nėra, ir pateikti žodžius, kuriais atsakymas remiasi. |
| **JSON** | `shape-json` | Atsakyti tik JSON, aukščiau prašoma forma. |
| **Kaip kalbėta** | `language-as-spoken` | Rašyti ta kalba, kuria vyko pokalbis. |
| **Kaip kalbėta, įvardyta** | `language-as-spoken-named` | Tas pats, įvardijant kalbą. |
| **Nurodyta kalba** | `language-named` | Rašyti jūsų nurodyta kalba. |

**Pridėti** sąrašo viršuje prideda įrašą.

## Numatytosios reikšmės {#defaults}

**Atkurti numatytuosius** grąžina kiekvieną žodyną tokį, koks atėjo su programa, dabartine sąsajos kalba. Tai, kam jūsų pokalbiai jau priskirti, nepaliečiama.

## Atsakymų formatai {#response-formats}

Blokuose tiksliai pateiktos įtrauktos instrukcijos. Jos aprašo atsakymų formatus; alternatyvos yra žymėjimas, o ne vykdomi JSON pavyzdžiai.

### Proza (`shape-plain`) {#shape-plain}

```text
Atsakykite paprasta proza. Nenaudokite JSON, sąrašų ar antraščių.
```

### Punktai (`shape-list`) {#shape-list}

```text
Atsakykite tik JSON, būtent tokio pavidalo:
{"items": [{"text": "kas turi būti padaryta", "owner": "kas, arba tuščia", "due": "kada, arba tuščia"}]}
Kai nėra ko išvardyti, naudokite tuščią masyvą. Nerašykite nieko už JSON ribų.
```

### Žymos (`shape-labels`) {#shape-labels}

```text
Atsakykite tik JSON, būtent tokio pavidalo:
{"labels": [{"code": "kodas iš duoto sąrašo", "confidence": 0.0}]}
Naudokite tik kodus iš sąrašo. Kai nė vienas netinka, naudokite tuščią masyvą.
Negalvokite kodo ir nerašykite nieko už JSON ribų.
```

### Įvertinimas (`shape-score`) {#shape-score}

```text
Atsakykite tik JSON, būtent tokio pavidalo:
{"score": 3, "rationale": "kodėl šis skaičius, o ne vienetu didesnis",
 "evidence": [{"at_ms": 0, "quote": "žodžiai, kuriais remiatės"}]}
Įvertinimas yra sveikasis skaičius nuo 1 iki 5. Nerašykite nieko už JSON ribų.
```

### Kriterijai (`shape-rubric`) {#shape-rubric}

```text
Atsakykite tik JSON, būtent tokio pavidalo:
{"overall": 3, "rationale": "kodėl šis skaičius, o ne vienetu didesnis",
 "criteria": [{"name": "kriterijus toks, koks jums buvo duotas",
               "verdict": "pass" arba "weak" arba "fail" arba "n/a",
               "note": "vienas sakinys"}]}
Įvertinkite kiekvieną duotą kriterijų ir jokio kito. Bendras įvertinimas yra
sveikasis skaičius nuo 1 iki 5. Nerašykite nieko už JSON ribų.
```

### Signalai (`shape-flags`) {#shape-flags}

```text
Atsakykite tik JSON, būtent tokio pavidalo:
{"flags": [{"code": "kodas iš duoto sąrašo",
            "severity": "low" arba "medium" arba "high",
            "evidence": "žodžiai, kuriais remiatės",
            "at_ms": 0}]}
Naudokite tik kodus iš sąrašo ir kiekvieną iškelkite daugiausia kartą. Kai
niekas netinka, naudokite tuščią masyvą. Nerašykite nieko už JSON ribų.
```

### Atsakymas (`shape-qa`) {#shape-qa}

```text
Atsakykite tik JSON, būtent tokio pavidalo:
{"answer": "jūsų atsakymas arba tiesiai tai, kad pokalbis to nesako",
 "citations": [{"at_ms": 0, "quote": "žodžiai, kuriais atsakymas remiasi"}]}
Neatsakykite iš nieko kito, tik iš pokalbio. Nerašykite nieko už JSON ribų.
```

### JSON (`shape-json`) {#shape-json}

```text
Atsakykite tik JSON, aukščiau prašomo pavidalo. Nerašykite nieko už JSON ribų.
```

### Kaip kalbėta (`language-as-spoken`) {#language-as-spoken}

```text
Rašykite atsakymą ta pačia kalba, kuria vyko pokalbis.
```

### Kaip kalbėta, įvardyta (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Rašykite atsakymą ta pačia kalba, kuria vyko pokalbis, o ji yra {language}.
```

### Nurodyta kalba (`language-named`) {#language-named}

```text
Rašykite atsakymą šia kalba: {language}.
```
