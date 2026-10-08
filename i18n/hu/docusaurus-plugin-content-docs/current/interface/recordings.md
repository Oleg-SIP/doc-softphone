---
title: A Felvételek ablak
sidebar_position: 2
description: "Minden beszélgetés könyvtára — hívás, importált fájl vagy Zoomból, Teamsből, Meetből rögzített megbeszélés —: szűrők, a lejátszó, a leirat, amelyet bármelyik sorától lejátszhat, és a feldolgozások."
---

A **Felvételek** az a hely, ahol minden beszélgetés megtalálható, bárhogyan érkezett is: a telefonban indított vagy fogadott hívás, egy importált hangfájl, vagy a Zoomból, Teamsből, Meetből vagy bármely más alkalmazásból rögzített megbeszélés. Mind egyetlen listában áll, és mindegyik ugyanúgy nyílik meg: a lejátszó, a leirat és minden, amit a nyelvi modell írt róla. A megnyitásához nyomja meg a **Felvételek** gombot a [főablak](main-window.md) bal alsó részén.

<Shot name="01_recordings" alt="A Felvételek lap: egy rögzített Zoom-megbeszélés, egy importált fájl és hívások egyetlen listában" />

## A felvételek háromféle fajtája {#three-kinds-of-recording}

A sor bal szélén lévő ikon mutatja, hogyan érkezett a beszélgetés.

| Ikon | Beszélgetés | A neve a listában | Hogyan kerül ide |
| --- | --- | --- | --- |
| Kagyló nyíllal | Ebben a telefonban indított vagy fogadott hívás. A nyíl bejövő hívásnál befelé, kimenőnél kifelé mutat. | A névjegy neve, vagy a szám | A [Felvételek](../recordings.md) beállítása szerint rögzítve |
| Nyíl egy sávba | Máshonnan importált fájl: mobiltelefonról, diktafonról vagy egy másik rendszerből | A fájl neve | **⋮ → Importálás fájlokból**; lásd [lent](#a-recording-you-already-have) |
| Ablak | Egy másik alkalmazásban zajlott megbeszélés | Az Ön által adott név, vagy **Másik alkalmazás** | [Rögzítés](../capture/capture.md) |

A képen a felső három sor mindegyik fajtából egy-egy: egy Zoom-megbeszélés, egy bank ügyfélszolgálati hívásának importált fájlja és egy hívás, amelyet a **305 Ügyfélszolgálat** vonalán fogadtak. Bármi is a forrásuk, ugyanúgy kapnak leiratot és feldolgozást, és ugyanúgy kereshetők.

## Beszélgetés keresése {#finding-a-conversation}

A felső sávon öt szűrő, egy keresőmező és egy menü található:

| Vezérlő | Mi szerint szűkíti a listát |
| --- | --- |
| **Fajta** | ahogyan a beszélgetés érkezett: bejövő vagy kimenő hívások, **Importált**, **Rögzített** |
| **Időszak** | a dátum: **Ma**, **Tegnap**, **Utolsó 7 nap**, vagy **Dátumok választása…** |
| **Kategória** | a kategória, amelybe besorolták — lásd: [Szótárak](../ai-processing/dictionaries.md) |
| **Jelölés** | a rajta lévő címkék és figyelmeztető jelek |
| **Felismerő** | a [felismerő](../ai-processing/transcription.md), amely a leiratát készítette |
| **Keresés** | ami elhangzott benne — a keresés mindannak a leiratán végigmegy, amit valaha rögzített |

<Shot name="39_more_menu" alt="A lista ⋮ menüje: Importálás fájlokból, Exportálás CSV-be, Megnyitás böngészőben" />

A sáv jobb szélén lévő **⋮** gomb további műveleteket nyit meg a listához:

| Elem | Mit csinál |
| --- | --- |
| **Importálás fájlokból** | Behozza a már meglévő felvételeket. Lásd: [Meglévő felvétel](#a-recording-you-already-have). |
| **Exportálás CSV-be** | Táblázatként menti a listát: mikor, a másik fél és a szám, az irány, a hossz, a kategória, a címkék, a figyelmeztető jelek és minden beszélgetés egysoros összefoglalója. |
| **Megnyitás böngészőben** | Megnyitja a listát a böngészőben, azon az oldalon, amelyet a [helyi REST API](../integration/rest-api.md) a `/ui` címen szolgál ki. |

## A lista {#the-list}

Minden sor a következőket mutatja:

- a beszélgetés fajtájának ikonját;
- a nevet — a másik felet, a számot, a fájlt vagy a megbeszélést —, alatta pedig a dátumot és az egysoros összefoglalót;
- jobbra a kategóriát a pontszámával (egy szám, például *Támogatás · 4*), aztán a figyelmeztető jeleket és a címkéket, a végén pedig a hosszt.

A figyelmeztető jelek pirossal vannak rajzolva (a képen *Érzékeny adat*, *Adott ígéret*, *Dühös ügyfél*); a címkék egyszerű, szín nélküli feliratok (*Ígért visszahívás*). Az összefoglaló és kategória nélküli beszélgetés még nincs feldolgozva — ez a képen a **Varga Anna** sor.

<Shot name="40_row_actions" alt="Egy sor az egérmutatóval: a gombostű, a ceruza és a kuka gomb" />

Mutasson egy sorra, hogy a jobb szélén megjelenjen három gomb:

| Gomb | Mit csinál |
| --- | --- |
| Gombostű | **Ennek megőrzése**: a megőrzött felvételt a [Megőrzés](../recordings.md#retention) korlátai soha nem törlik. Még egyszer megnyomva megszűnik a megőrzés. |
| Ceruza | **Átnevezés**: a beszélgetésnek saját nevet ad. A hívás mellett megmarad a másik fél neve; a megbeszélést vagy a fájlt egyébként arról az alkalmazásról vagy fájlról nevezik el, amelyből származik. |
| Kuka | **Ennek a felvételnek a törlése**, megerősítés után. A hang is elmegy vele, és ez nem vonható vissza. |

## A lejátszó {#the-player}

Jelöljön ki egy sort, és a lista alatt megnyílik a lejátszó.

- A két hullámforma a felvétel két csatornája: a felső Ön, az alsó a másik fél. Az importált fájl általában egyetlen kevert sávot tartalmaz, ezért mindkét vonal ugyanazt a hangot mutatja.
- A **▶** lejátssza és szünetelteti a felvételt; a bal oldali időértékek az aktuális pozíció és a teljes hossz. A hullámformák alatti sáv görgeti a hosszú felvételt.
- Az **1×** a sebességet módosítja; a **Mindkettő** azt választja ki, melyik hangot hallja: mindkettőt, csak az Önét (**Én**) vagy csak a másik felét (**Ők**).
- A lemez gomb elmenti a felvétel egy másolatát, a **×** bezárja a beszélgetést.

A lista és a lejátszó közötti vonal felfelé húzható, hogy a leiratnak több helye legyen, ahogyan az alábbi képeken.

## A leirat {#the-transcript}

A lejátszó alatt van a leirat: megszólalásonként egy sor, az elhangzás idejével és a beszélő nevével.

<Shot name="26_recording_call" alt="Hívás a 305 Ügyfélszolgálat vonalán: a lejátszó és a leirat, a 0:14-nél lévő sor kiemelve" />

| A felvétel fajtája | A beszélők megjelenítése |
| --- | --- |
| Hívás | **Ön** és a másik fél neve, vagy a szám |
| Rögzített megbeszélés | **Ön** és a felvétel neve mindenki másnál |
| Importált fájl | **Mindenki · speaker 1**, **Mindenki · speaker 2**… — a hangokat a felismerő különíti el |

**Kattintson egy sorra, hogy az adott pillanatra ugorjon**: a lejátszó odalép, a sor ki van emelve, benne pedig meg van jelölve az éppen elhangzó szó — a képen a **0:14**-nél lévő sor, az *Igen* szóval. Nyomja meg a **▶** gombot, hogy onnan hallgassa. Lejátszás közben a kiemelés követi a beszédet, így egyszerre olvashat és hallgathat, és bármelyik mondatra visszaugorhat.

A minden sor bal oldalán lévő idő az is, amire a feldolgozás hivatkozik: a figyelmeztető jel, a válasz vagy az idézet annak a szövegnek az idejét viseli, amelyre épül.

## Leirat vagy feldolgozás: a legördülő lista {#transcript-or-write-up-the-drop-down}

A leirat fölötti legördülő lista azt választja ki, mi jelenjen meg azon a helyen: egy leirat, vagy a nyelvi modell által készített feldolgozások egyike.

<Shot name="27_writeup_menu" alt="A megnyitott legördülő lista: az OpenAI leirata és a hívás feldolgozásai" />

- A **mikrofonnal** jelölt sorok a leiratok, egy-egy minden olyan [felismerőtől](../ai-processing/transcription.md), amely leiratot készített a felvételről. A csillag a fő leiratot jelöli. Mutasson egyre, hogy lássa a felismerőt, a modelljét és a nyelvet.
- A **csillogással** jelölt sorok a feldolgozások, amelyeket a [Feldolgozás](../ai-processing/processing.md) [utasításai](/ai-processing/prompt-studio) készítenek.

Egy felvételről több felismerőtől is lehet leirat, hogy összehasonlíthassa őket: az alábbi Zoom-megbeszélést az X.ai és a Deepgram is leiratozta.

<Shot name="36_zoom_menu" alt="Egy rögzített megbeszélés két leirattal, a Deepgram és az X.ai leiratával, és a feldolgozásaival" />

A feldolgozások rövid neveken szerepelnek:

| A legördülő listában | Az utasítás, amely készíti | Mit mutat |
| --- | --- | --- |
| **Összefoglaló** | Összefoglaló | A fő pontok, a döntések és a következő lépések egy rövid bekezdésben. |
| **Dióhéjban** | Egysoros összefoglaló | Egyetlen mondat; ugyanez a sor áll a listában a név alatt. |
| **Műveletek** | Teendők | Ki mit vállalt, és mikorra. |
| **Témák** | Témák | A felmerült tárgykörök. |
| **Említettek** | Nevek és számok | Személyek, cégek, dátumok, összegek és hivatkozások. |
| maga a kérdés | Kérdés erről a hívásról | Az Ön által feltett kérdésre adott válasz, azzal a szöveggel együtt, amelyre épül. |
| **Minőség** | Értékesítés minősége, Támogatás minősége | Összpontszám és minden szempontra egy értékelés. |
| **Figyelmeztető jelek** | Figyelmeztető jelek | Ami figyelmet érdemel, a bizonyítékkal és az időponttal. |
| **Címkék**, **Kategória** | Címkék, Kategória | A címkék, amelyekkel a beszélgetést ellátták. |

## A feldolgozások egyenként {#the-write-ups-one-by-one}

Az alábbi képek mind ugyanarról a hívásról készültek, a **305 Ügyfélszolgálat** vonalán, amelyben egy ügyfél azt kérdezi, mikor újulnak meg a biztosításai.

**Összefoglaló** — a beszélgetés néhány mondatban.

<Shot name="28_summary" alt="A hívás összefoglalója" />

**Dióhéjban** — egyetlen sor, elég rövid ahhoz, hogy a listában felismerje a beszélgetést.

<Shot name="29_nutshell" alt="Dióhéjban: a hívás egysoros összefoglalója" />

**Műveletek** — minden feladat azzal, hogy ki végzi el, és mikorra, jobbra.

<Shot name="30_actions" alt="Műveletek: két feladat az Ön számára, az egyik holnap reggelre" />

**Kérdés** — kérdezzen a beszélgetésről bármit: a kérdés lesz az elem neve, a válasz alatt pedig ott van a szöveg, amelyre épül, a felvételbeli idejével.

<Shot name="31_question" alt="Egy hívásról feltett kérdés válasza, két idézettel a 0:17-nél és a 0:32-nél" />

**Minőség** — az 1-től 5-ig terjedő pontszám az indokával, és minden szempont **teljesült**, **gyenge** vagy **nem teljesült** jelöléssel és megjegyzéssel.

<Shot name="32_quality" alt="Minőség: 4-es pontszám, két szempont teljesült és kettő gyenge" />

**Figyelmeztető jelek** — minden jel azzal a szöveggel, amelynek alapján felvetődött, a súlyosságával és az időponttal.

<Shot name="33_red_flags" alt="Figyelmeztető jelek: Adott ígéret, alacsony, 0:32-nél" />

**Témák** — egy megbeszélés tárgykörei, itt a Zoom-megbeszélésé.

<Shot name="38_topics" alt="A Zoom-megbeszélés témái" />

## A legördülő lista melletti gombok {#the-buttons-beside-the-drop-down}

| Gomb | Mit csinál |
| --- | --- |
| Csillogás | **Leírás vagy kérdés egy modellhez…**: megnyit egy menüt, lásd lent. |
| Két lap | Kimásolja, ami látszik. |
| Lemez | Fájlba menti. A leiratot egyszerű szövegként vagy feliratként mentheti. |
| Kuka | Törli, ami látszik. |

<Shot name="34_run_menu" alt="A csillogás menü: Átirat négy felismerővel, Feldolgozás az utasításokkal" />

A csillogás menü igény szerint végzi el a munkát. Az **Átirat** alatt válasszon egy felismerőt, hogy vele újra leiratozza a felvételt; a **Feldolgozás** alatt válasszon egy utasítást, hogy most lefuttassa — a **Kérdés erről a hívásról…** először a kérdést kéri. Az eredmény a legördülő listában jelenik meg. Így készül el egy beszélgetés feldolgozása, ha a [Feldolgozás](../ai-processing/processing.md) lapon ki van kapcsolva **A beszélgetések automatikus feldolgozása**, és így adhat még egy feldolgozást egy olyan beszélgetéshez, amelynek már van néhány.

## Három példa {#three-examples}

### A telefonban folytatott hívás {#a-call-made-in-the-phone}

A fenti hívás: a beszélők **Ön** és **Molnár Katalin**, a névjegy neve, két külön csatornán.

### Importált fájl {#a-file-you-imported}

<Shot name="35_recording_import" alt="Egy bank ügyfélszolgálati hívásának importált fájlja: egy kevert sáv, az 1. és a 2. beszélő" />

A `riverside_bank_support_call` egy mp3, amelyet a **⋮ → Importálás fájlokból** paranccsal hozott be. A neve a fájl neve, az ikonja egy sávba mutató nyíl, a két beszélőt pedig a felismerő különítette el. A feldolgozások hangosan kimondott kártyaszámot találtak, és felvetették az **Érzékeny adat** jelet.

### Másik alkalmazásból rögzített megbeszélés {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="A számítógépről rögzített Zoom-megbeszélés: az X.ai leirata, a beszélők Ön és a megbeszélés neve" />

A **Q4-es indulás tervezése (Zoom)** akkor lett rögzítve, amikor a megbeszélés a Zoomban zajlott, és a ceruzával kapta a nevét. A megbeszélés túloldalán lévő mindenki a felvétel neve alatt látható; Ön az **Ön**. Lásd: [Rögzítés](../capture/capture.md).

## Meglévő felvétel {#a-recording-you-already-have}

Egy máshol — mobiltelefonon, diktafonon vagy egy másik rendszerben — készült felvétel a **⋮ → Importálás fájlokból** paranccsal adható hozzá. Válasszon egy vagy több mp3- vagy wav-fájlt; a telefon megmondja, hányat importált, és megnevezi azokat, amelyeket nem tudott felvételként beolvasni. Mindegyik pontosan úgy kerül nyilvántartásba, mint egy tárcsázott hívás: leirat készül róla, ugyanazok a [szabályok](../ai-processing/processing.md#rules) dolgozzák fel, és ugyanazzal a kereséssel megtalálható.

## Felvétel törlése {#deleting-a-recording}

Amikor egy felvételt töröl, minden, ami belőle készült, vele együtt törlődik: a leiratok és a feldolgozások. Hogy meddig maradnak meg maguktól a felvételek, azt a [Felvételek](../recordings.md#retention) oldal állítja be.
