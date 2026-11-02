---
title: Slovníky
sidebar_position: 4
description: Vaše vlastné kategórie, štítky a varovné signály — slová, pod ktoré sa vaše rozhovory zaraďujú.
---

**Nastavenia → Slovníky** obsahuje slová, pod ktoré sa rozhovor môže zaradiť, ktorými sa môže označiť alebo pre ktoré sa môže vyznačiť. Tieto zoznamy sú to, čo sa modelom ukazuje a z čoho musia vyberať, takže odpoveď je vždy niečo, čo môžete neskôr vyhľadať.

<Shot name="13_settings_dictionaries" alt="Nastavenia → Slovníky" />

**Zobraziť zmazané** ukáže položky, ktoré ste zmazali.

Každá položka je názov, krátky kód malým písmom a opis, ktorý modelu hovorí, kedy ju vybrať. Kód je to, čo sa ukladá a čo vracia [REST API](../integration/rest-api.md#taxonomy-and-settings), takže zostáva rovnaký, aj keď položku premenujete.

## Kategórie {#categories}

O čom bol rozhovor; **pre každý rozhovor sa vyberá jedna**. Program začína so štyrmi:

| Názov | Kód | Používa sa pre |
| --- | --- | --- |
| **Predaj** | `sales` | Predaj, ponuka, vyjednávanie alebo dotiahnutie nákupu — vrátane zákazníka, ktorý sa pýta, čo niečo stojí. |
| **Podpora** | `support` | Pomoc niekomu s výrobkom alebo službou, ktorú už má: porucha, otázka k používaniu, sťažnosť na to, ako to funguje. |
| **Súkromný** | `personal` | Vôbec nie pracovný — súkromný hovor, ktorý sa náhodou viedol na tejto linke. |
| **Iné** | `other` | Pracovný, ale ani predaj, ani podpora: dodávateľ, kolega, dodávka, omyl. Zvoľte toto, namiesto toho, aby ste hádali medzi ostatnými. |

Stlačením **Pridať** pridáte vlastnú kategóriu.

## Štítky {#tags}

Označenia, ktoré *môžu na ten istý rozhovor platiť všetky naraz*. Stlačením **Pridať** jedno pridáte. Zoznam začína položkami ako:

| Názov | Kód | Používa sa pre |
| --- | --- | --- |
| **Sľúbené zavolať späť** | `callback` | Niekto v tomto hovore sľúbil zavolať späť alebo o spätné zavolanie požiadal. |
| **Sťažnosť** | `complaint` | Druhá strana vyjadrila nespokojnosť, či sa to vyriešilo, alebo nie. |
| **Posunuté vyššie** | `escalation` | Hovor bol odovzdaný niekomu inému, alebo o to druhá strana požiadala. |
| **Zákazník VIP** | `vip` | S druhou stranou sa jednalo ako s dôležitým zákazníkom, alebo to o sebe sama povedala. |

## Varovné signály {#red-flags}

Veci, ktoré si vyžadujú pozornosť, nájdené v rozhovore s dôkazom a časom — napríklad *Nahnevaný zákazník* alebo *Riziko odchodu*. Varovné signály sú v [okne Nahrávky](../interface/recordings.md) nakreslené červenou a každý nesie závažnosť: nízku, strednú alebo vysokú.

| Názov | Kód | `severity` | Používa sa pre |
| --- | --- | --- | --- |
| **Nahnevaný zákazník** | `angry-customer` | `high` | Bolo počuť, že je druhá strana nahnevaná, uráža alebo hrozí odchodom. |
| **Riziko odchodu** | `churn-risk` | `high` | Padlo zrušenie, nepredĺženie alebo prechod k niekomu inému, hoci akokoľvek pokojne. |
| **Daný sľub** | `promise-made` | `medium` | Naša strana sa zaviazala k niečomu konkrétnemu — termínu, cene, oprave, vráteniu peňazí. |
| **Citlivé údaje** | `sensitive-data` | `high` | Nahlas zaznelo číslo karty, heslo, číslo dokladu alebo čokoľvek iné, čo v nahrávke byť nemá. |
| **Konkurent** | `competitor` | `low` | Druhá strana menovala niekoho iného, kto ponúka to isté, alebo nás s ním porovnala. |

## Pokyny {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Nastavenia → Slovníky: tvary odpovedí a pokyny k jazyku" />

*To, čo sa pridáva ku každému pokynu o tvare odpovede a jazyku, v ktorom ju písať.* Uchovávajú sa tu, aby každý pokyn mohol použiť rovnaké znenie, a môžete ich meniť ako ktorúkoľvek inú položku — alebo napísať vlastné, napríklad *odpovedaj stručne* či *nikdy neuvádzaj cenu*, a zaškrtnúť ich v **Poslať aj** pri ktoromkoľvek pokyne.

| Názov | Kód | Čo hovorí modelu |
| --- | --- | --- |
| **Próza** | `shape-plain` | Odpovedať obyčajnou prózou, bez JSON, zoznamov a nadpisov. |
| **Položky** | `shape-list` | Odpovedať zoznamom vecí na urobenie, pri každej kto a kedy. |
| **Štítky** | `shape-labels` | Odpovedz v JSON so zoznamom kódov a s tým, ako si je istý každým z nich, s použitím iba kódov zo zoznamu, ktorý dostal. |
| **Hodnotenie** | `shape-score` | Odpovedz hodnotením, jeho dôvodom a slovami, na ktorých je založené. |
| **Kritériá** | `shape-rubric` | Odpovedz celkovým hodnotením a hodnotením každého kritéria. |
| **Signály** | `shape-flags` | Odpovedz kódmi zo zoznamu, každým so závažnosťou. |
| **Odpoveď** | `shape-qa` | Odpovedz odpoveďou, alebo jasne povedz, že rozhovor to neuvádza, a slovami, o ktoré sa odpoveď opiera. |
| **JSON** | `shape-json` | Odpovedz iba v JSON, v tvare požadovanom vyššie. |
| **Ako sa hovorilo** | `language-as-spoken` | Píš v jazyku, v ktorom prebiehal rozhovor. |
| **Ako sa hovorilo, menovite** | `language-as-spoken-named` | To isté, s pomenovaním jazyka. |
| **Určený jazyk** | `language-named` | Píš v jazyku, ktorý určíte. |

**Pridať** na začiatku zoznamu pridá položku.

## Predvolené {#defaults}

**Obnoviť predvolené** vráti každý slovník do stavu, v akom prišiel s programom, v aktuálnom jazyku rozhrania. To, kam sú vaše rozhovory už zaradené, zostane nedotknuté.

## Formáty odpovedí {#response-formats}

Bloky uvádzajú dodávané pokyny. Opisujú formáty odpovedí; alternatívy sú zápisom možností, nie spustiteľnými príkladmi JSON.

### Próza (`shape-plain`) {#shape-plain}

```text
Odpovedzte prostou prózou. Nepoužívajte JSON, zoznamy ani nadpisy.
```

### Položky (`shape-list`) {#shape-list}

```text
Odpovedzte iba JSONom, presne tohto tvaru:
{"items": [{"text": "čo sa má urobiť", "owner": "kto, alebo prázdne", "due": "kedy, alebo prázdne"}]}
Keď nie je čo vypísať, použite prázdne pole. Nepíšte nič mimo JSON.
```

### Štítky (`shape-labels`) {#shape-labels}

```text
Odpovedzte iba JSONom, presne tohto tvaru:
{"labels": [{"code": "kód zo zoznamu, ktorý ste dostali", "confidence": 0.0}]}
Používajte len kódy zo zoznamu. Keď nesedí žiadny, použite prázdne pole. Kód si
nevymýšľajte a nepíšte nič mimo JSON.
```

### Hodnotenie (`shape-score`) {#shape-score}

```text
Odpovedzte iba JSONom, presne tohto tvaru:
{"score": 3, "rationale": "prečo toto číslo a nie o jedno vyššie",
 "evidence": [{"at_ms": 0, "quote": "slová, o ktoré sa to opiera"}]}
Hodnotenie je celé číslo od 1 do 5. Nepíšte nič mimo JSON.
```

### Kritériá (`shape-rubric`) {#shape-rubric}

```text
Odpovedzte iba JSONom, presne tohto tvaru:
{"overall": 3, "rationale": "prečo toto číslo a nie o jedno vyššie",
 "criteria": [{"name": "kritérium tak, ako vám bolo zadané",
               "verdict": "pass" alebo "weak" alebo "fail" alebo "n/a",
               "note": "jedna veta"}]}
Posúďte každé zadané kritérium a žiadne iné. Celkové hodnotenie je celé číslo
od 1 do 5. Nepíšte nič mimo JSON.
```

### Signály (`shape-flags`) {#shape-flags}

```text
Odpovedzte iba JSONom, presne tohto tvaru:
{"flags": [{"code": "kód zo zoznamu, ktorý ste dostali",
            "severity": "low" alebo "medium" alebo "high",
            "evidence": "slová, o ktoré sa to opiera",
            "at_ms": 0}]}
Používajte len kódy zo zoznamu a každý zdvihnite najviac raz. Keď nesedí nič,
použite prázdne pole. Nepíšte nič mimo JSON.
```

### Odpoveď (`shape-qa`) {#shape-qa}

```text
Odpovedzte iba JSONom, presne tohto tvaru:
{"answer": "vaša odpoveď, alebo rovno to, že to hovor nehovorí",
 "citations": [{"at_ms": 0, "quote": "slová, o ktoré sa odpoveď opiera"}]}
Neodpovedajte z ničoho iného než z hovoru. Nepíšte nič mimo JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Odpovedzte iba JSONom, v tvare opísanom vyššie. Nepíšte nič mimo JSON.
```

### Ako sa hovorilo (`language-as-spoken`) {#language-as-spoken}

```text
Odpoveď napíšte v tom istom jazyku, v akom bol hovor.
```

### Ako sa hovorilo, menovite (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Odpoveď napíšte v tom istom jazyku, v akom bol hovor, teda: {language}.
```

### Určený jazyk (`language-named`) {#language-named}

```text
Odpoveď napíšte v tomto jazyku: {language}.
```
