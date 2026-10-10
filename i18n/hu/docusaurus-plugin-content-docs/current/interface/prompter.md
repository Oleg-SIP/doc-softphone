---
title: A súgó ablaka
sidebar_position: 3
description: "Az élő súgó ablaka: a hívás szavai abban a pillanatban, amikor elhangzanak, és javaslatok arra, mit mondjon ezután, az ablak gombjai és oszlopai, próba egy felvételen és hogy mibe kerül."
---

A **Súgó** beszélgetés közben hallgatja a beszélgetést. Saját ablakában leírja, mit mond az egyes oldal, abban a pillanatban, amikor elhangzik, és — ha a kiválasztott segítő egy modellt kérdez — javaslatot arra, mit mondjon ezután. Érdemes nyitva tartani egy értékesítési hívás, egy állásinterjú vagy egy nehéz beszélgetés alatt, más segítővel pedig ugyanez az ablak a másik fél folyamatos fordítását vagy egyszerűen feliratokat mutat.

<Shot name="46_prompter_running" alt="A súgó egy értékesítési hívást próbál: balra az átirat, jobbra a javaslatok, a legújabb nagy betűkkel megismételve fölöttük" />

A képen az **Ellenvetések a hívásban** segítő egy értékesítési hívást hallgat. A bal oszlop az, ami elhangzott, minden sor a saját idejével és oldalával; a jobb az, amit a modell az ügyfél egyes válaszaira javasolt; a legújabb javaslat nagy betűkkel megismétlődik mindkettő fölött.

A **Súgó** a telefon alján lévő listában, az **Előzmények** és a **Beállítások** között jelenik meg, amint három dolog teljesül: a súgó engedélyezve van, van olyan felismerő, amely beszélgetés közben is tud hallgatni, és — a valamit javasló segítőkhöz — egy nyelvi modell. Mindezt a [Beállítások → Súgó](/ai-processing/prompter) alatt lehet beállítani, ahol a betűméret és maguk a segítők is megtalálhatók.

## Az ablak {#the-window}
<Shot name="44_prompter_window" alt="A súgó ablaka az Ellenvetések a hívásban segítővel kiválasztva, indítás előtt" />

Fent a **Segítő** legördülő lista van, tőle jobbra a gombok:

| Gomb | Mit csinál |
| --- | --- |
| **Indítás** / **Leállítás** (háromszög / négyzet) | *Hallgatás elkezdése ezen a híváson* — vagy abbahagyása: *Az elhangzottak a képernyőn maradnak*. A hívás fogadása előtt megnyomott indítás megvárja azt, és a gomb ekkor visszavonja. |
| **Javaslat** (szikrák) | *Zárja le itt a választ, és javasoljon, mit mondjon*, szünetre várás nélkül. Olyan segítőnél, amely nem kérdez modellt, a gomb neve **Válasz lezárása**: csak lezárja a választ, hogy a következő tisztán induljon. Szürke, amíg a súgó nem fut. |
| **Kiürítés** (kuka) | Rákérdezés után elfelejti, ami a képernyőn van. *Mindkét oszlop eltűnik, és velük a beszélgetés is, amelyből a következő javaslat épült volna.* A leállítás és újraindítás semmit sem töröl: egy leállított és újraindított beszélgetés általában ugyanaz a beszélgetés. |
| **Exportálás…** (floppy) | Mindkét oszlopot az időpontokkal együtt fájlba írja: szövegként (`.txt`) vagy táblázatként (`.csv`), azon a néven, amelyet a fájlnak ad. |
| **Próba…** (könyvtár) | [Kipróbál egy segítőt egy felvételen](#rehearsing-on-a-recording) hívás helyett. |

A legördülő lista a [segítőket](/ai-processing/prompter#assistants) a **Beállítások → Súgó** alatt megadott sorrendben mutatja. Amíg a súgó fut, nem módosítható, de látható marad, így látja, melyik segítő dolgozik. Hallgatás közben a hívás kártyáján **Hallgatjuk** áll.

A gombok alatt van a sáv a legújabb sorral, alatta pedig a két oszlop:

- **Átirat** — minden sor a saját idejével és oldalával;
- **Javaslatok** — minden javaslat annak a válasznak az idejével, amelyre felel. Olyan segítőnél, amely nem kérdez modellt, ez az oszlop nincs meg, és az átirat a teljes szélességet elfoglalja.

Keskeny ablakban a két oszlop egymás alatt áll. Egy oszlop követi az érkezőket, amíg vissza nem görget benne, és újra követ, amikor visszatér az aljára. Kattintson bármelyik sorra, hogy a sávban tartsa; kattintson a legújabbra vagy a sávban lévő gombostűre, hogy újra kövesse. A jobb egérgomb lemásol egy sort, egy javaslatot, a teljes átiratot vagy az összes javaslatot. Húzza el a sáv alatti elválasztót, hogy magasabb legyen; a betűméretek a [Beállítások → Súgó](/ai-processing/prompter#settings--prompter) alatt állíthatók.

## Próba egy felvételen {#rehearsing-on-a-recording}
Egy segítőt úgy is ki lehet próbálni, hogy senki sincs a telefonnál. A **Próba…** a [könyvtár](/interface/recordings) beszélgetéseit mutatja, a legújabbal kezdve, valamint a **Fájl ezen a számítógépen…** pontot egy `.mp3` vagy `.wav` fájlhoz.

<Shot name="45_prompter_rehearse" alt="Próba…: a könyvtár beszélgetései és egy fájl ezen a számítógépen" />

A kiválasztott felvétel egy lejátszóban jelenik meg a gombok alatt: lejátszás és szünet, mindkét csatorna hullámformaként kirajzolva, amelybe kattintani lehet, és az idő. Nyomja meg az **Indítás** gombot: a felvétel ugyanazon az úton jut a súgóba, mint egy hívás, a saját tempójában — gyorsabb lejátszást szándékosan nem kínál, mert a másfélszeres sebességgel táplált súgó olyan beszélgetés miatt tartana szünetet, válaszolna és számlázna, amelyet senki sem folytatott. A jobb oldali kereszt a **A próba befejezése**, vissza a hívások hallgatásához.

Az egycsatornás felvételt, például egy importált fájlt, egyetlen teremként hallja: *a súgó az egészet a beszélgetőpartnerként hallja*.

## Mibe kerül, és hová kerülnek a szavak {#what-it-costs-and-where-the-words-go}
- A felismerőt az élő hang perceiért számlázzák, és az **Az én oldalamat is ismerd fel** ezt megduplázza. A modellt minden javaslatért számlázzák. Mindkettő a súgó [havi plafonjaiba](/ai-processing/prompter#spending) számít, nem a Feldolgozás korlátaiba.
- A másik fél hangja beszéd közben elhagyja a számítógépet, és az Ön által választott felismerőhöz kerül. A saját gépén futó felismerő — **Vosk**, **WhisperLive** vagy **NVIDIA Riva** — házon belül tartja.
- Amit a súgó mutat, az nem felvétel. Megőrzéséhez nyomja meg az **Exportálás…** gombot; ha magára a beszélgetésre is szüksége van, [vegye fel a hívást](/recordings) is.

## Ha nem indul el {#when-it-does-not-start}
Az ablak a gombok alatti sorban megmondja, mi hiányzik.

| Az ablak ezt mondja | Mit tegyen |
| --- | --- |
| *A súgás ki van kapcsolva. Beállítások → Súgó.* | Jelölje be **A súgó használatának engedélyezése** lehetőséget. |
| *Itt egyetlen felismerő sem tud hallgatni, miközben valaki beszél. Beállítások → Átirat.* | Adjon hozzá egy felismerőt **Cím a súgóhoz** megadásával, és nyomja meg a **Próba** gombot. |
| *Nincs mit elindítani. Beállítások → Súgó, és adjon hozzá egy segítőt.* | Minden segítőt töröltek vagy kikapcsoltak: adjon hozzá egyet, vagy nyomja meg az **Alapértékek visszaállítása** gombot. |
| *A másik felet előbb értesíteni kell. Kezdje el felvenni ezt a beszélgetést, vagy változtassa meg, amit a Beállítások → Felvétel mond a hozzájárulásról.* | Indítsa el a felvételt, amely lejátssza a bejelentést, vagy módosítsa a hozzájárulás beállítását. |
| *A felismerő nem kezdett hallgatni. Ellenőrizze az élő címét és a modelljét a Beállítások → Átirat alatt.* | A súgó címe, a modell vagy a kulcs hibás. A felismerő kártyáján a **Próba** megmondja, melyik. |
| *A hónap felismerőkre szánt összege elfogyott.* | Emelje meg a **Felismerők, havonta** értékét, vagy várja meg a hónap fordulóját. |
| *A hónap modellekre szánt összege elfogyott. A szavak folytatódnak; a súgás megállt.* | Emelje meg a **Modellek, havonta** értékét. |
