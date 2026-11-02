---
title: Sõnastikud
sidebar_position: 4
description: Teie oma kategooriad, sildid ja hoiatussignaalid — sõnad, mille alla teie vestlused liigitatakse.
---

**Seaded → Sõnastikud** sisaldab sõnu, mille alla vestlust saab liigitada, millega seda märgistada või mille põhjal sellele tähelepanu juhtida. Neid loendeid näidatakse mudelitele ja nende hulgast peavad mudelid valima, nii et vastus on alati midagi, mida saate hiljem otsida.

<Shot name="13_settings_dictionaries" alt="Seaded → Sõnastikud" />

**Näita kustutatuid** näitab kirjeid, mille olete kustutanud.

Iga kirje on nimi, lühike väikeses kirjas kood ja kirjeldus, mis ütleb mudelile, millal seda valida. Kood on see, mida talletatakse ja mida [REST API](../integration/rest-api.md#taxonomy-and-settings) tagastab, nii et see jääb samaks, kui kirje ümber nimetate.

## Kategooriad {#categories}

Millest vestlus oli; **vestluse kohta valitakse üks**. Programm alustab neljaga:

| Nimi | Kood | Kasutatakse |
| --- | --- | --- |
| **Müük** | `sales` | Müümine, pakkumine, läbirääkimine või ostu järelkõne — sealhulgas klient, kes küsib, mis miski maksab. |
| **Tugi** | `support` | Abi kellelegi toote või teenusega, mis tal juba on: rike, küsimus kasutamise kohta, kaebus selle töö üle. |
| **Isiklik** | `personal` | Üldse mitte tööasi — eravestlus, mis juhtus toimuma sellel liinil. |
| **Muu** | `other` | Tööasi, kuid ei müük ega tugi: tarnija, kolleeg, tarne, vale number. Valige see, selle asemel et teiste vahel oletada. |

Vajutage **Lisa**, et lisada oma kategooria.

## Sildid {#tags}

Märgistused, mis *võivad kõik samale vestlusele sobida*. Vajutage **Lisa**, et lisada. Loend algab näiteks järgmiste kirjetega:

| Nimi | Kood | Kasutatakse |
| --- | --- | --- |
| **Lubatud tagasihelistamine** | `callback` | Keegi selles kõnes lubas tagasi helistada või palus, et talle tagasi helistataks. |
| **Kaebus** | `complaint` | Teine pool väljendas rahulolematust, olenemata sellest, kas see lahenes. |
| **Antud edasi** | `escalation` | Kõne anti kellelegi teisele või teine pool palus seda. |
| **VIP-klient** | `vip` | Teist poolt koheldi tähtsa kliendina või ta ise ütles, et on selline. |

## Hoiatussignaalid {#red-flags}

Asjad, mis vajavad tähelepanu, leitud vestlusest koos tõendi ja ajaga — näiteks *Vihane klient* või *Lahkumise oht*. Hoiatussignaalid joonistatakse [salvestiste aknas](../interface/recordings.md) punasega ja igaühel on tõsidus: madal, keskmine või kõrge.

| Nimi | Kood | `severity` | Kasutatakse |
| --- | --- | --- | --- |
| **Vihane klient** | `angry-customer` | `high` | Oli kuulda, et teine pool on vihane, solvab või ähvardab lahkuda. |
| **Lahkumise oht** | `churn-risk` | `high` | Jutuks tuli lõpetamine, pikendamata jätmine või kellegi teise juurde minek, olgu kui rahulikult tahes. |
| **Antud lubadus** | `promise-made` | `medium` | Meie pool võttis kohustuse millegi kindla suhtes — kuupäev, hind, parandus, raha tagastamine. |
| **Tundlikud andmed** | `sensitive-data` | `high` | Valjusti loeti ette kaardinumber, parool, dokumendi number või miski muu, mida salvestises olla ei tohiks. |
| **Konkurent** | `competitor` | `low` | Teine pool nimetas kedagi teist, kes pakub sedasama, või võrdles meid temaga. |

## Juhised {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Seaded → Sõnastikud: vastuse kujud ja keelejuhised" />

*See, mis lisatakse igale juhisele vastuse kuju ja keele kohta, milles see kirjutada.* Neid hoitakse siin, et iga juhis saaks kasutada sama sõnastust, ja te saate neid muuta nagu iga teist kirjet — või kirjutada oma, näiteks *vasta lühidalt* või *ära kunagi nimeta hinda*, ja märkida need igas juhises jaotises **Saada ka**.

| Nimi | Kood | Mida see mudelile ütleb |
| --- | --- | --- |
| **Proosa** | `shape-plain` | Vasta lihtsa proosana, ilma JSONi, loendite ja pealkirjadeta. |
| **Punktid** | `shape-list` | Vasta tehtavate asjade loendiga, igaühel juures kes ja millal. |
| **Sildid** | `shape-labels` | Vasta JSON-is koodide loendiga ja kindlusega iga koodi kohta, kasutades ainult antud loendi koode. |
| **Hinne** | `shape-score` | Vasta hindega, selle põhjendusega ja sõnadega, millele see tugineb. |
| **Kriteeriumid** | `shape-rubric` | Vasta koondhindega ja hindega iga kriteeriumi kohta. |
| **Signaalid** | `shape-flags` | Vasta loendi koodidega, igaüks koos tõsidusega. |
| **Vastus** | `shape-qa` | Vasta vastusega või ütle otse, et vestlus seda ei ütle, ning sõnad, millele vastus tugineb. |
| **JSON** | `shape-json` | Vasta ainult JSON-iga, ülal palutud kujul. |
| **Nagu räägiti** | `language-as-spoken` | Kirjuta keeles, milles vestlus toimus. |
| **Nagu räägiti, nimetatult** | `language-as-spoken-named` | Sama, keelt nimetades. |
| **Nimetatud keel** | `language-named` | Kirjuta keeles, mille te nimetate. |

Loendi alguses olev **Lisa** lisab kirje.

## Vaikeväärtused {#defaults}

**Taasta vaikeväärtused** taastab iga sõnastiku sellisena, nagu see programmiga kaasa tuli, kasutajaliidese praeguses keeles. Seda, mille alla teie vestlused on juba liigitatud, see ei puuduta.

## Vastuse vormingud {#response-formats}

Plokid esitavad kaasasolevad juhised. Need kirjeldavad vastuse vorminguid; alternatiivid on tähistus, mitte käivitatavad JSON-näited.

### Proosa (`shape-plain`) {#shape-plain}

```text
Vastake lihtsas proosas. Ärge kasutage JSON-i, loendeid ega pealkirju.
```

### Punktid (`shape-list`) {#shape-list}

```text
Vastake ainult JSON-iga, täpselt sellisel kujul:
{"items": [{"text": "mis on teha", "owner": "kes, või tühi", "due": "millal, või tühi"}]}
Kui loetleda pole midagi, kasutage tühja massiivi. Ärge kirjutage midagi väljapoole JSON-i.
```

### Sildid (`shape-labels`) {#shape-labels}

```text
Vastake ainult JSON-iga, täpselt sellisel kujul:
{"labels": [{"code": "kood antud loendist", "confidence": 0.0}]}
Kasutage ainult loendis olevaid koode. Kui ükski ei sobi, kasutage tühja
massiivi. Ärge koodi välja mõelge ja ärge kirjutage midagi väljapoole JSON-i.
```

### Hinne (`shape-score`) {#shape-score}

```text
Vastake ainult JSON-iga, täpselt sellisel kujul:
{"score": 3, "rationale": "miks see arv ja mitte ühe võrra kõrgem",
 "evidence": [{"at_ms": 0, "quote": "sõnad, millel see põhineb"}]}
Hinne on täisarv 1-st 5-ni. Ärge kirjutage midagi väljapoole JSON-i.
```

### Kriteeriumid (`shape-rubric`) {#shape-rubric}

```text
Vastake ainult JSON-iga, täpselt sellisel kujul:
{"overall": 3, "rationale": "miks see arv ja mitte ühe võrra kõrgem",
 "criteria": [{"name": "kriteerium nii, nagu see teile anti",
               "verdict": "pass" või "weak" või "fail" või "n/a",
               "note": "üks lause"}]}
Hinnake iga antud kriteeriumi ja mitte ühtki muud. Üldhinne on täisarv
1-st 5-ni. Ärge kirjutage midagi väljapoole JSON-i.
```

### Signaalid (`shape-flags`) {#shape-flags}

```text
Vastake ainult JSON-iga, täpselt sellisel kujul:
{"flags": [{"code": "kood antud loendist",
            "severity": "low" või "medium" või "high",
            "evidence": "sõnad, millel see põhineb",
            "at_ms": 0}]}
Kasutage ainult loendis olevaid koode ja tõstke igaüht kõige rohkem üks kord.
Kui miski ei sobi, kasutage tühja massiivi. Ärge kirjutage midagi väljapoole JSON-i.
```

### Vastus (`shape-qa`) {#shape-qa}

```text
Vastake ainult JSON-iga, täpselt sellisel kujul:
{"answer": "teie vastus või otse see, et vestlus seda ei ütle",
 "citations": [{"at_ms": 0, "quote": "sõnad, millel vastus seisab"}]}
Ärge vastake millestki muust kui vestlusest. Ärge kirjutage midagi väljapoole JSON-i.
```

### JSON (`shape-json`) {#shape-json}

```text
Vastake ainult JSON-iga, ülal palutud kujul. Ärge kirjutage midagi väljapoole JSON-i.
```

### Nagu räägiti (`language-as-spoken`) {#language-as-spoken}

```text
Kirjutage vastus samas keeles, milles vestlus oli.
```

### Nagu räägiti, nimetatult (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Kirjutage vastus samas keeles, milles vestlus oli, ja see on {language}.
```

### Nimetatud keel (`language-named`) {#language-named}

```text
Kirjutage vastus selles keeles: {language}.
```
