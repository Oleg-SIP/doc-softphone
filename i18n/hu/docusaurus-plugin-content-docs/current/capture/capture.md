---
title: Rögzítés
sidebar_label: Rögzítés más alkalmazásokból
sidebar_position: 1
description: "\"A Rögzítés egy másik alkalmazásban — Zoomban, Teamsben, Meetben vagy bármi másban — zajló beszélgetést vesz fel, közvetlenül a számítógépről.\""
---

A **Rögzítés** az, ahogyan az AI Softphone felvesz egy másik programban zajló beszélgetést, például egy Zoom-, Teams- vagy Meet-megbeszélést. Magáról a számítógépről rögzít, külön csatornán tartva a túloldalt és Önt, a végén pedig ugyanaz a leirat és feldolgozás várja, mint egy hívás esetén.

A program beszélgetést keres, nem egy alkalmazás nevét, így bármivel működik, amiben beszélgetés zajlik.

A beállítások [Áttekintés](../interface/settings-overview.md) lapja ezt a **Rögzítés más alkalmazásokból** csoportban sorolja fel, három lépésre bontva:

1. **Rögzítés bekapcsolása** — [a hangrögzítés engedélyezése](#turning-capture-on).
2. **Beszélgetés rögzítése alkalmazásból** — egy felvétel [elindítása és leállítása](#capturing-a-conversation).
3. **Adjon neki nevet** — a felvétel [átnevezése](#giving-it-a-name).

## A rögzítés bekapcsolása {#turning-capture-on}

A rögzítés ki van kapcsolva, amíg nem engedélyezi. Nyissa meg a **Beállítások → Rögzítés** lapot.

<Shot name="10_settings_capture" alt="Beállítások → Rögzítés" />

| Beállítás | Alapérték | Mit csinál |
| --- | --- | --- |
| **Hangrögzítés engedélyezése** | ki | Lehetővé teszi, hogy a program felvegye más alkalmazások hangját. Amíg ki van kapcsolva, semmi sem kerül rögzítésre. |
| **Emlékeztessen, hogy szóljak a többieknek a felvételről** | be | Emlékeztetőt jelenít meg, amíg a rögzítés tart. A jelölőnégyzet szürke, amíg a rögzítés nincs engedélyezve. |

:::caution
Minden rögzítésre kerül, amit a számítógép lejátszik, nem csak a beszélgetés. Ez a telefon nem tud bemondani egy felvételt valaki más megbeszélésébe, így ennek közlése az Ön feladata.
:::

A program ezt végző része a **Rögzítés** modul (*Másik alkalmazásban zajló beszélgetés felvétele*). A [Modulok](../application/modules.md) között kikapcsolható.

## A rögzítés indítása {#starting-a-capture}

Ha a rögzítés engedélyezve van, a [főablak](../interface/main-window.md#capture) alján megjelenik az állapota — **Rögzítés · kész** —, jobbra pedig egy **Felvétel** gomb. A kézi indításhoz nyomja meg a **Felvétel** gombot.

### Automatikus indítás {#automatic-start}

Az **Automatikus indítás** azt dönti el, mi történjen, ha a program beszélgetést hall egy másik alkalmazásban:

| Választás | Mi történik |
| --- | --- |
| **Soha** | A rögzítés csak akkor indul, ha megnyomja a **Felvétel** gombot. |
| **Kérdezzen rá** | A program megkérdezi, rögzítse-e. Ez az alapérték. |
| **Mindig** | A program magától elkezdi a felvételt. |

A **Saját válasszal rendelkező alkalmazások** alatt egy alkalmazásnak saját válasz adható — például az *Ezt az alkalmazást mindig rögzítse* a program által feltett kérdésből.

*A kérdés semmibe nem kerül: a válasza előtti másodperceket már megőriztük.*

### A kezdés előtt {#before-the-start}

**A kezdés előtt** csúszka azt adja meg, hány másodpercnyi hang maradjon meg a felvétel kezdete előttről, alapértelmezés szerint **15 másodperc**. Arra szolgál, hogy semmi se vesszen el, amíg a program észreveszi a beszélgetést: az a felvétel, amely a **Felvétel** megnyomásakor vagy a kérdésre adott válaszkor indul, így is az azt megelőző szavakkal kezdődik.

## Beszélgetés rögzítése {#capturing-a-conversation}

Felvétel közben a főablak egy piros pontot, a felvétel nevét (például **Megbeszélés itt: Zoom**), az eltelt időt és a két csatornát hullámformaként mutatja.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Megbeszélés rögzítése" />

- A **Felvétel leállítása** befejezi.
- Az ablak a felvétel alatt látható marad, és emlékezteti, hogy szóljon a résztvevőknek a megbeszélés rögzítéséről.

### Mit mutat a kép {#what-the-picture-shows}

Két további beállítás választja ki, hogyan jelenjen meg a hangszint:

| Beállítás | Alapérték | Hol |
| --- | --- | --- |
| **Kép a főablakban** | Hullám | A két csatorna a rögzítés ideje alatt. |
| **Kép a telefon alján lévő sávban** | Két szint | A két vékony sáv a **Rögzítés · kész** alatt. |

### Kipróbálás {#testing-it}

A **Próba** alatt a lapon két sáv van: **Ön** és **A másik oldal**. *A felső sáv mozdul, amikor Ön beszél, az alsó, amikor valami szól.* Egy fontos megbeszélés előtt mondjon egy szót, és játsszon le valamilyen hangot, hogy lássa, a program mindkét oldalt hallja.

## Elnevezés {#giving-it-a-name}

A felvétel neve melletti ceruzával a felvételt menet közben átnevezheti. Az el nem nevezett felvétel **Másik alkalmazás** néven szerepel a listában.

## Hová kerül a felvétel {#where-the-recording-goes}

A rögzített beszélgetés ugyanúgy megjelenik a [Felvételek ablakban](../interface/recordings.md), mint bármely más, saját ikonnal — kagyló helyett ablakkal —, és az Ön által adott címmel vagy a **Másik alkalmazás** felirattal.

<Shot name="01_recordings" alt="Rögzített megbeszélések a Felvételek lapon, ablak ikonnal jelölve" />

Ugyanazok a [szabályok](../ai-processing/processing.md#rules) készítenek róla leiratot, foglalják össze, sorolják kategóriába és címkézik, mint egy hívást. Egy rögzített megbeszélés leiratában a beszélő **Másik alkalmazás** néven jelenik meg ott, ahol egy hívásnál a másik fél neve állna; a könyvtár **Keresés** funkciója az ebben elhangzottakat is megtalálja.
