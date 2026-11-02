---
title: Szótárak
sidebar_position: 4
description: Saját kategóriái, címkéi és figyelmeztető jelei — azok a szavak, amelyek alá a beszélgetései besorolódnak.
---

A **Beállítások → Szótárak** azokat a szavakat tartalmazza, amelyek alá egy beszélgetés besorolható, amelyekkel címkézhető, vagy amelyek miatt megjelölhető. Ezeket a listákat látják a modellek, és ezekből kell választaniuk, így a válasz mindig olyasmi, amire később rákereshet.

<Shot name="13_settings_dictionaries" alt="Beállítások → Szótárak" />

A **Töröltek megjelenítése** megmutatja a törölt bejegyzéseket.

Minden bejegyzés egy név, egy apró betűs rövid kód és egy leírás, amely megmondja a modellnek, mikor válassza. A kód az, ami tárolódik, és amit a [REST API](../integration/rest-api.md#taxonomy-and-settings) visszaad, így átnevezéskor sem változik.

## Kategóriák {#categories}

Az, amiről a beszélgetés szólt; **beszélgetésenként egyet választ a modell**. A program négy kategóriával indul:

| Név | Kód | Mire való |
| --- | --- | --- |
| **Értékesítés** | `sales` | Eladás, árajánlat, tárgyalás vagy egy vásárlás utánkövetése — beleértve azt is, amikor az ügyfél az árra kérdez rá. |
| **Támogatás** | `support` | Segítség valakinek egy termékkel vagy szolgáltatással, ami már megvan neki: hiba, kérdés a használatról, panasz a működésre. |
| **Magán** | `personal` | Egyáltalán nem munka — magánbeszélgetés, ami történetesen ezen a vonalon zajlott. |
| **Egyéb** | `other` | Munka, de sem eladás, sem támogatás: beszállító, kolléga, szállítmány, téves hívás. Ezt válaszd, ahelyett hogy a többi között találgatnál. |

Saját kategória felvételéhez nyomja meg a **Hozzáadás** gombot.

## Címkék {#tags}

Jelölések, amelyek *mind igazak lehetnek ugyanarra a beszélgetésre*. Új címke felvételéhez nyomja meg a **Hozzáadás** gombot. A lista többek között ilyen bejegyzésekkel indul:

| Név | Kód | Mire való |
| --- | --- | --- |
| **Ígért visszahívás** | `callback` | Valaki ebben a hívásban visszahívást ígért, vagy azt kérte, hogy hívják vissza. |
| **Panasz** | `complaint` | A másik fél elégedetlenségét fejezte ki, akár megoldódott, akár nem. |
| **Továbbadva** | `escalation` | A hívás máshoz került, vagy a másik fél ezt kérte. |
| **VIP-ügyfél** | `vip` | A másik felet fontos ügyfélként kezelték, vagy ő maga mondta magáról. |

## Figyelmeztető jelek {#red-flags}

Figyelmet igénylő dolgok, amelyeket a beszélgetésben a bizonyítékkal és az időponttal együtt talál meg a modell — például *Dühös ügyfél* vagy *Lemorzsolódás veszélye*. A figyelmeztető jelek pirossal jelennek meg a [Felvételek ablakban](../interface/recordings.md), és mindegyiknek van súlyossága: alacsony, közepes vagy magas.

| Név | Kód | `severity` | Mire való |
| --- | --- | --- | --- |
| **Dühös ügyfél** | `angry-customer` | `high` | Hallhatóan dühös volt a másik fél, sértegetett, vagy távozással fenyegetett. |
| **Lemorzsolódás veszélye** | `churn-risk` | `high` | Szóba került a felmondás, a meg nem hosszabbítás vagy a máshoz átállás, bármilyen higgadtan is. |
| **Adott ígéret** | `promise-made` | `medium` | A mi oldalunk elkötelezte magát valami konkrét mellett — időpont, ár, javítás, visszatérítés. |
| **Érzékeny adat** | `sensitive-data` | `high` | Kártyaszám, jelszó, okmányszám vagy bármi más elhangzott, aminek nem volna szabad felvételen lennie. |
| **Versenytárs** | `competitor` | `low` | A másik fél megnevezett valaki mást, aki ugyanezt kínálja, vagy hozzá hasonlított minket. |

## Útmutatások {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Beállítások → Szótárak: a válaszok alakja és a nyelvi utasítások" />

*Az, ami minden utasításhoz hozzáadódik a válasz alakjáról és a nyelvről, amelyen meg kell írni.* Azért vannak itt, hogy minden utasítás ugyanazt a megfogalmazást használhassa, és bármely más bejegyzéshez hasonlóan módosíthatók — vagy írhat sajátot is, például *válaszolj röviden* vagy *soha ne mondj árat*, és bármely utasításnál bejelölheti a **Küldje ezt is** alatt.

| Név | Kód | Mit mond a modellnek |
| --- | --- | --- |
| **Próza** | `shape-plain` | Egyszerű prózában válaszolj, JSON, listák és címsorok nélkül. |
| **Tételek** | `shape-list` | A teendők listájával válaszolj, mindegyiknél azzal, hogy ki és mikor. |
| **Címkék** | `shape-labels` | Válaszoljon JSON-ban, a kódok listájával és azzal, hogy mennyire biztos mindegyikben, kizárólag a kapott lista kódjait használva. |
| **Pontszám** | `shape-score` | Válaszoljon egy pontszámmal, annak indoklásával és azokkal a szavakkal, amelyeken alapul. |
| **Szempontok** | `shape-rubric` | Válaszoljon egy összpontszámmal és szempontonkénti pontszámmal. |
| **Jelzések** | `shape-flags` | Válaszoljon a lista kódjaival, mindegyikhez súlyosságot rendelve. |
| **Válasz** | `shape-qa` | Válaszoljon a felelettel, vagy mondja ki egyértelműen, hogy a beszélgetésből ez nem derül ki, és adja meg a szavakat, amelyeken a felelet alapul. |
| **JSON** | `shape-json` | Válaszoljon kizárólag JSON-nal, a fent kért alakban. |
| **Ahogy elhangzott** | `language-as-spoken` | Azon a nyelven írjon, amelyen a beszélgetés zajlott. |
| **Ahogy elhangzott, megnevezve** | `language-as-spoken-named` | Ugyanez, a nyelv megnevezésével. |
| **Megadott nyelv** | `language-named` | Az Ön által megadott nyelven írjon. |

A lista elején lévő **Hozzáadás** új bejegyzést ad hozzá.

## Alapértékek {#defaults}

Az **Alapértékek visszaállítása** minden szótárt visszaállít a programmal érkezett állapotára, a felület aktuális nyelvén. Az, hogy a beszélgetései már mi alá vannak besorolva, érintetlen marad.

## Válaszformátumok {#response-formats}

A blokkok a beépített utasításokat adják vissza. Válaszformátumokat írnak le; az alternatívák jelölések, nem végrehajtható JSON-példák.

### Próza (`shape-plain`) {#shape-plain}

```text
Válaszolj egyszerű prózában. Ne használj JSON-t, listát vagy címsort.
```

### Tételek (`shape-list`) {#shape-list}

```text
Csak JSON-nal válaszolj, pontosan ilyen alakban:
{"items": [{"text": "mit kell elvégezni", "owner": "ki, vagy üres", "due": "mikorra, vagy üres"}]}
Ha nincs mit felsorolni, használj üres tömböt. A JSON-on kívül ne írj semmit.
```

### Címkék (`shape-labels`) {#shape-labels}

```text
Csak JSON-nal válaszolj, pontosan ilyen alakban:
{"labels": [{"code": "egy kód a kapott listáról", "confidence": 0.0}]}
Csak a listán szereplő kódokat használd. Ha egyik sem illik, használj üres
tömböt. Ne találj ki kódot, és a JSON-on kívül ne írj semmit.
```

### Pontszám (`shape-score`) {#shape-score}

```text
Csak JSON-nal válaszolj, pontosan ilyen alakban:
{"score": 3, "rationale": "miért ez a szám, és miért nem eggyel több",
 "evidence": [{"at_ms": 0, "quote": "a szavak, amikre alapoztad"}]}
A pontszám 1 és 5 közötti egész szám. A JSON-on kívül ne írj semmit.
```

### Szempontok (`shape-rubric`) {#shape-rubric}

```text
Csak JSON-nal válaszolj, pontosan ilyen alakban:
{"overall": 3, "rationale": "miért ez a szám, és miért nem eggyel több",
 "criteria": [{"name": "a szempont úgy, ahogy kaptad",
               "verdict": "pass" vagy "weak" vagy "fail" vagy "n/a",
               "note": "egy mondat"}]}
Minden kapott szempontot ítélj meg, és mást egyet sem. Az összpontszám 1 és 5
közötti egész szám. A JSON-on kívül ne írj semmit.
```

### Jelzések (`shape-flags`) {#shape-flags}

```text
Csak JSON-nal válaszolj, pontosan ilyen alakban:
{"flags": [{"code": "egy kód a kapott listáról",
            "severity": "low" vagy "medium" vagy "high",
            "evidence": "a szavak, amikre alapoztad",
            "at_ms": 0}]}
Csak a listán szereplő kódokat használd, és mindegyiket legfeljebb egyszer emeld
ki. Ha semmi sem illik, használj üres tömböt. A JSON-on kívül ne írj semmit.
```

### Válasz (`shape-qa`) {#shape-qa}

```text
Csak JSON-nal válaszolj, pontosan ilyen alakban:
{"answer": "a válaszod, vagy nyíltan az, hogy a beszélgetés nem mondja meg",
 "citations": [{"at_ms": 0, "quote": "a szavak, amikre a válasz épül"}]}
A beszélgetésen kívül semmiből ne válaszolj. A JSON-on kívül ne írj semmit.
```

### JSON (`shape-json`) {#shape-json}

```text
Csak JSON-nal válaszolj, a fent kért alakban. A JSON-on kívül ne írj semmit.
```

### Ahogy elhangzott (`language-as-spoken`) {#language-as-spoken}

```text
A választ azon a nyelven írd, amelyen a beszélgetés folyt.
```

### Ahogy elhangzott, megnevezve (`language-as-spoken-named`) {#language-as-spoken-named}

```text
A választ azon a nyelven írd, amelyen a beszélgetés folyt, ez pedig: {language}.
```

### Megadott nyelv (`language-named`) {#language-named}

```text
A választ ezen a nyelven írd: {language}.
```
