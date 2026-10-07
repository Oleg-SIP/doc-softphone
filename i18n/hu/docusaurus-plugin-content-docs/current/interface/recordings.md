---
title: A Felvételek ablak
sidebar_position: 2
description: A beszélgetések könyvtára — szűrés, lejátszás, a leirat és a feldolgozás elolvasása.
---

A **Felvételek** az a hely, ahol minden beszélgetés megtalálható, bárhogyan érkezett is: hívás, egy másik alkalmazásból rögzített megbeszélés vagy importált fájl. Mindegyik már elkészült feldolgozással szerepel a listában.

<Shot name="01_recordings" alt="A Felvételek lap: a beszélgetések listája" />

## Beszélgetés keresése {#finding-a-conversation}

A felső sávon négy szűrő, egy keresőmező és egy menü található:

| Vezérlő | Mi szerint szűkíti a listát |
| --- | --- |
| **Fajta** | ahogyan a beszélgetés érkezett |
| **Időszak** | a dátum |
| **Kategória** | a kategória, amelybe besorolták — lásd: [Szótárak](../ai-processing/dictionaries.md) |
| **Jelölés** | a rajta lévő jelölések |
| **Keresés** | ami elhangzott benne — a keresés mindannak a leiratán végigmegy, amit valaha rögzített |

A sáv jobb szélén lévő **⋮** gomb további műveleteket nyit meg a listához: **Importálás fájlokból**, **Exportálás CSV-be** és **Megnyitás böngészőben**.

## A lista {#the-list}

Minden sor a következőket mutatja:

- egy ikont a beszélgetés fajtájára: kagylót hívásnál, ablakot egy másik alkalmazásban zajló megbeszélésnél;
- egy címet — a másik fél nevét, a számot, vagy rögzített megbeszélésnél a **Másik alkalmazás** feliratot —, alatta pedig a dátumot és az egysoros összefoglalót;
- jobbra a kategóriát a pontszámával (egy szám, például *Támogatás · 2*), aztán a címkéket, a végén pedig a hosszt.

A pirossal rajzolt címkék a **figyelmeztető jelek** (a képen *Dühös ügyfél* és *Lemorzsolódás veszélye*); a többi szokásos címke (*Panasz*, *Ígért visszahívás*). Az összefoglaló és kategória nélküli beszélgetés még nincs feldolgozva — ez a képen az első sor.

## A lejátszó {#the-player}

Jelöljön ki egy sort, és a lista alatt megnyílik a lejátszó.

<Shot name="02_recording_details" alt="Kijelölt felvétel: a lejátszó és a leirat a lista alatt" />

- A két hullámforma a felvétel két csatornája, a beszélgetés mindkét oldalához egy-egy. Az alattuk lévő sáv görgeti a hosszú felvételt.
- A **▶** lejátssza és szünetelteti a felvételt; a bal oldali időértékek az aktuális pozíció és a teljes hossz.
- Az **1×** a sebességet módosítja; a **Mindkettő** azt választja ki, melyik csatornát hallja.
- A lemez gomb elmenti a hangot, a **×** bezárja a lejátszót.

## A leirat és a feldolgozás {#the-transcript-and-the-write-up}

A lejátszó alatt van a leirat, megszólalásonként egy sorral, az elhangzás idejével és a beszélő nevével (**Ön**, a másik fél neve, vagy rögzített megbeszélésnél **Másik alkalmazás**). Kattintson egy sorra, hogy meghallgassa azt a pillanatot; a lejátszófej alatti sor ki van emelve, benne pedig meg van jelölve az éppen elhangzó szó.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="A leirat a hang mellett" />

A leirat fölötti legördülő lista választja ki, mi jelenjen meg — valamelyik [felismerője](../ai-processing/transcription.md) által készített leirat (a csillag a felvétel fő leiratát jelöli), vagy egy feldolgozás, például a **Műveletek**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="A beszélgetésből adódó teendők" />

A legördülő lista jobb oldalán lévő négy ikon:

| Ikon | Mit csinál |
| --- | --- |
| Csillogás | A modell most azonnal elkészíti a kijelölt elemet. |
| Két lap | Kimásolja. |
| Lemez | Fájlba menti. |
| Kuka | Törli. |

A leiratot exportálhatja egyszerű szövegként vagy feliratként.

A feldolgozást azok az [utasítások](/ai-processing/prompt-studio) és modellek készítik, amelyeket a [Feldolgozás](../ai-processing/processing.md) lapon beállított, olyan [szabályok](../ai-processing/processing.md#rules) szerint, amelyek maguktól vagy az Ön kérésére futnak le. Hogy meddig maradnak meg a felvételek, azt a [Felvételek](../recordings.md#retention) oldalon leírtak szerint lehet beállítani.

## Meglévő felvétel {#a-recording-you-already-have}

Egy máshol — mobiltelefonon, diktafonon vagy egy másik rendszerben — készült felvétel a **⋮ → Importálás fájlokból** paranccsal adható hozzá. Pontosan úgy kerül nyilvántartásba, mint egy tárcsázott hívás: leirat készül róla, feldolgozásra kerül, és ugyanazzal a kereséssel megtalálható.

## Felvétel törlése {#deleting-a-recording}

Amikor egy felvételt töröl, minden, ami belőle készült, vele együtt törlődik: a leirat és a feldolgozás is.
