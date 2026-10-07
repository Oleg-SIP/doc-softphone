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
| **Értékesítés** | `sales` | Eladás, árajánlat, tárgyalás vagy egy vásárlás nyomon követése — ideértve azt is, amikor egy ügyfél megkérdezi, mennyibe kerül valami. |
| **Támogatás** | `support` | Segítség valakinek egy már meglévő termékkel vagy szolgáltatással kapcsolatban: hiba, használati kérdés, panasz a működésére. |
| **Magán** | `personal` | Egyáltalán nem üzleti — magánbeszélgetés, amely történetesen ezen a vonalon zajlott. |
| **Egyéb** | `other` | Üzleti, de sem nem eladás, sem nem támogatás: beszállító, kolléga, szállítás, téves hívás. Ezt válassza ahelyett, hogy a többi között találgatna. |

Saját kategória felvételéhez nyomja meg a **Hozzáadás** gombot.

## Címkék {#tags}

Jelölések, amelyek *mind igazak lehetnek ugyanarra a beszélgetésre*. Új címke felvételéhez nyomja meg a **Hozzáadás** gombot. A lista többek között ilyen bejegyzésekkel indul:

| Név | Kód | Mire való |
| --- | --- | --- |
| **Ígért visszahívás** | `callback` | A hívásban valaki megígérte, hogy visszahív, vagy visszahívást kért. |
| **Panasz** | `complaint` | A másik fél elégedetlenségét fejezte ki, akár megoldódott, akár nem. |
| **Továbbadva** | `escalation` | A hívást átadták valaki másnak, vagy a másik fél ezt kérte. |
| **VIP-ügyfél** | `vip` | A másik felet fontos ügyfélként kezelték, vagy ő maga mondta magáról, hogy az. |

## Figyelmeztető jelek {#red-flags}

Figyelmet igénylő dolgok, amelyeket a beszélgetésben a bizonyítékkal és az időponttal együtt talál meg a modell — például *Dühös ügyfél* vagy *Lemorzsolódás veszélye*. A figyelmeztető jelek pirossal jelennek meg a [Felvételek ablakban](../interface/recordings.md), és mindegyiknek van súlyossága: alacsony, közepes vagy magas.

## A válaszok alakja és nyelve {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Beállítások → Szótárak: a válaszok alakja és a nyelvi utasítások" />

A lapon lejjebb azok az utasításrészek találhatók, amelyekből az utasítások összeállnak. Azért vannak itt, hogy minden utasítás ugyanazt a megfogalmazást használhassa, és bármely más bejegyzéshez hasonlóan módosíthatók.

| Név | Kód | Mit mond a modellnek |
| --- | --- | --- |
| **Címkék** | `shape-labels` | Válaszoljon JSON-ban, a kódok listájával és azzal, hogy mennyire biztos mindegyikben, kizárólag a kapott lista kódjait használva. |
| **Pontszám** | `shape-score` | Válaszoljon egy pontszámmal, annak indoklásával és azokkal a szavakkal, amelyeken alapul. |
| **Szempontok** | `shape-rubric` | Válaszoljon egy összpontszámmal és szempontonkénti pontszámmal. |
| **Jelzések** | `shape-flags` | Válaszoljon a lista kódjaival, mindegyikhez súlyosságot rendelve. |
| **Válasz** | `shape-qa` | Válaszoljon a felelettel, vagy mondja ki egyértelműen, hogy a beszélgetésből ez nem derül ki, és adja meg a szavakat, amelyeken a felelet alapul. |
| **JSON** | `shape-json` | Válaszoljon kizárólag JSON-nal, a fent kért alakban. |
| **Ahogy elhangzott** | `language-as-spoken` | Azon a nyelven írjon, amelyen a beszélgetés zajlott. |
| **Ahogy elhangzott, megnevezve** | `language-as-spoken-named` | Ugyanez, a nyelv megnevezésével. |
| **Megadott nyelv** | `language-named` | Az Ön által megadott nyelven írjon. |

A lista végén lévő **Hozzáadás** új bejegyzést ad hozzá.

## Alapértékek {#defaults}

Az **Alapértékek visszaállítása** minden szótárt visszaállít a programmal érkezett állapotára, a felület aktuális nyelvén. Az, hogy a beszélgetései már mi alá vannak besorolva, érintetlen marad.
