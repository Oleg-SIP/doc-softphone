---
title: A súgó beállításai
sidebar_label: Súgó
sidebar_position: 5
description: "Beállítások → Súgó: mire van szüksége az élő súgónak, a kapcsoló, amely engedélyezi, a betűméret, a segítők és kártyáik, valamint a havi plafonok arra, mennyit költhet."
---

A **Beállítások → Súgó** alatt engedélyezhető az élő súgó, itt állítható be a mérete, és itt kapja meg a segítőit. Magát a súgót — az ablakot, amely leírja a hívást, ahogy elhangzik, és javasolja, mit válaszoljon, valamint a próbát egy felvételen — [A súgó ablaka](/interface/prompter) oldal írja le.

A beállítások [Áttekintés](/interface/settings-overview) része a súgót a **Súgó** alatt két lépésben mutatja: **A súgó engedélyezése** és **A súgó indítása**.

## Mire van szüksége {#what-it-needs}
- **Egy felismerőre, amely beszélgetés közben is tud hallgatni.** A [Beállítások → Átirat](/ai-processing/transcription#live-recognition-for-the-prompter) alatt adható hozzá, mint bármely más felismerő, és kell hozzá egy **Cím a súgóhoz**, valamint egy sikeres **Próba**.
- **Egy nyelvi modellre** a valamit javasló segítőkhöz. Ez a segítőnél beállított modell, vagy a [Beállítások → Feldolgozás](/ai-processing/processing#language-models) alapértelmezett modellje. A feliratokhoz egyáltalán nem kell modell.
- **A súgó használatának engedélyezése jelölőnégyzetre** a **Beállítások → Súgó** alatt.

Ha mindhárom megvan, a **Súgó** megjelenik a telefon alján lévő listában, az **Előzmények** és a **Beállítások** között, és megnyitja [a súgó ablakát](/interface/prompter). A program ezt végző része a **Súgó** modul, *Beszélgetés közben hallgat és javasol*; a [Modulok](/application/modules) alatt kikapcsolható.

## Beállítások → Súgó {#settings--prompter}
<Shot name="41_settings_prompter" alt="Beállítások → Súgó: a súgót engedélyező kapcsoló és a betűméret" />

*Beszédfelismerés a beszélgetés közben, és a saját utasításai szerint írt javaslatok. Mindkettő percalapon díjköteles.*

| Beállítás | Alapértelmezett | Mit csinál |
| --- | --- | --- |
| **A súgó használatának engedélyezése** | ki | Az egyetlen kapcsoló, amely egyáltalán lehetővé teszi a súgó indítását. Amíg ki van kapcsolva, semmi más nem hat az oldalon. |
| **Átirat és javaslatok** | 13 képpont | Mekkorára rajzolódik az ablak két oszlopa. |
| **A legújabb sor megismétlése a hasábok fölött** | be | A legújabb javaslatot — vagy a legújabb sort olyan segítőnél, amely nem javasol semmit — külön sávban mutatja az oszlopok fölött. |
| **Az ismételt sor** | 20 képpont | Mekkora a sáv szövege. Akkor látható, ha a sáv be van kapcsolva. |

:::caution
A másik fél hangja beszéd közben egy felismerőhöz kerül, ami semmivel sem kevesebb, mint a felvétel. Ahol a [Beállítások → Felvétel](/recordings) előzetes értesítést kér, a súgó csak az értesítés után indul el.
:::

A súgót beszéd közben olvassák, gyakran messzebbről, mint a telefon többi részét, ezért a két méretet Ön választja: olyat válasszon, amelyet a képernyő felé hajolás nélkül is el tud olvasni. Húzza el a sáv alatti elválasztót [a súgó ablakában](/interface/prompter#the-window), hogy magasabb legyen.

### Segítők {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Beállítások → Súgó: a segítők és a havi plafonok" />

A segítő az, aminek a súgónak lennie kell. *Mindegyik egy folyó beszélgetést hallgat, és ír valamit a súgó ablakába: a szavakat úgy, ahogy elhangzanak, azok fordítását, vagy javaslatot arra, mit mondjon ezután.* Hogy melyik fusson, a súgó ablakában választja ki. A program négyet hoz magával:

| Segítő | Mit ír | Modellt kérdez |
| --- | --- | --- |
| **Feliratok** | Mindkét fél szavait, ahogy elhangzanak. | nem |
| **Fordítás** | A másik fél szavait a program nyelvére fordítva. | igen |
| **Ellenvetések a hívásban** | Telefonon értékesítőknek: ha az ügyfél ellenvetést tesz, az ellenvetést egy sorban és egy sort, amely válaszol rá. | igen |
| **Segítség az interjún** | Annak, akivel interjút folytatnak: a választ az imént feltett kérdésre néhány rövid sorban, vagy azt, amit a következő válaszban érdemes érinteni. | igen |

A **▲** és a **▼** a sorrendet módosítja, és ez a sorrend a legördülő listában is [a súgó ablakában](/interface/prompter#the-window). A **Hozzáadás** saját segítőt hoz létre. Az **Alapértékek visszaállítása** visszaállítja az utasításokat és a szabályokat úgy, ahogy a programmal érkeztek, itt és a [Feldolgozás](/ai-processing/processing#defaults) alatt egyaránt; a nyelvi modelljei érintetlenek maradnak.

### Egy segítő kártyája {#an-assistants-card}
Egy segítőre kattintva megnyílik a kártyája. Ugyanaz a kártya, mint egy [utasításé](/ai-processing/prompt-studio) a Feldolgozás alatt, néhány saját vezérlővel.

<Shot name="42_prompter_assistant" alt="Az Ellenvetések a hívásban segítő kártyája: a felismerő, mikor fejeződött be egy válasz, a szerep és az utasítás" />

| Mező | Mit csinál |
| --- | --- |
| **Név** | A név a listában és a súgó ablakában. |
| **A válasz alakja** és **Küldje ezt is** | Mint minden utasításnál: a válasz alakja és a vele küldött utasítások. A mellékelt segítők **Próza** alakban válaszolnak. |
| **Felismerő** | Melyik felismerő hallgat. Csak azok jelennek meg, amelyek tudnak hallgatni, miközben valaki beszél. |
| **Mikor fejeződött be egy válasz** | Ki dönti el, hogy egy válasznak vége, és felelni lehet rá: **A felismerő dönt**, **Egy szünet után** vagy **Csak amikor kérem** — ekkor a válasz akkor ér véget, amikor megnyomja a **Javaslat** gombot. Hat felismerő maga jelzi, hol ér véget egy válasz, négy nem; **A felismerő dönt** ott, ahol nincs válasza, szünetre hagyatkozik, ezért ezt érdemes meghagyni. |
| **Az én oldalamat is ismerd fel** | Egy második munkamenet ugyanannál a felismerőnél, dupla áron, hogy az Ön saját szavai is megjelenjenek az átiratban. Bekerülnek abba, amit a modellnek elmondanak, de soha nem azok, amire rákérdeznek. |
| **Szerep — mi a modell** | Az utasítás előtt küldik el a modellnek, például *Olyan embernek segít, aki telefonon ad el…* |
| **Az utasítás** | Amit minden válasznál megkérdeznek a modelltől. A `{{reply}}` az éppen befejeződött válasz, a `{{conversation}}` pedig minden, ami előtte elhangzott. *Hagyja üresen, és a modellt semmiről nem kérdezik: a szavak úgy látszanak, ahogy megérkeznek, és csak a felismerőért kell fizetni.* Pontosan ez a **Feliratok**. |
| **Válasz nyelve** | A javaslat nyelve: **Bármi, amit beszéltek**, **Ennek a programnak a nyelve** vagy **Mindig egy nyelv** a kódjával. |
| **Modell** | **Alapértelmezett** vagy az egyik [nyelvi modellje](/ai-processing/processing#language-models). |

### Kiadás {#spending}
*Elkülönítve attól, amit a szabályok befejezett beszélgetésekre költhetnek. Egy hónap összefoglaló nem lehet képes elhallgattatni egy súgót egy beszélgetés közepén.*

| Mező | Amikor eléri |
| --- | --- |
| **Felismerők, havonta** | A futó súgó annak a válasznak a végén áll meg, amelynél éppen tart — soha nem egy szó közepén. |
| **Modellek, havonta** | A javaslatok leállnak, a feliratok folytatódnak. |

Az üres mező plafon nélkülit jelent. Egy perc élő hang ára a felismerő **Ár percenként** értéke, amelyet a kártyáján, az [Átirat](/ai-processing/transcription#the-recognisers-card) alatt adhat meg; enélkül a súgó jelzi, hogy a mutatott összeg becslés.
