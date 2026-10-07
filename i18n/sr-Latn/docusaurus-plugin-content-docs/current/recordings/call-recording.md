---
title: Snimanje poziva
sidebar_position: 1
description: Koji se pozivi snimaju, šta se kaže drugoj strani, kako se čuvaju konferencije i koliko se dugo datoteke čuvaju.
---

**Podešavanja → Snimanje** odlučuje koji pozivi postaju snimci i koliko dugo datoteke ostaju. Snimljeni poziv pojavljuje se u [prozoru Snimci](/interface/recordings).

<Shot name="09_settings_recording" alt="Podešavanja → Snimanje" />

## Snimanje {#recording}

Padajući meni bira koji se pozivi snimaju:

| Izbor | Snima |
| --- | --- |
| **Ručno** | Samo kada pritisnete snimanje na kartici poziva. Podrazumevano. |
| **Pitaj pri svakom pozivu** | Telefon pri svakom pozivu pita da li da ga snimi. |
| **Svaki poziv** | Svaki poziv na koji se neko javio, sam od sebe. Izabrano na slici. |
| **Izabrane linije** | Pozive na nalozima koje označite na spisku koji se pojavi. |

Snimanje počinje kada se neko javi na poziv i nikada pre, pa zvonjenje i brojevi koje birate nisu u datoteci. Poziv je jedna stereo datoteka: vi na jednom kanalu, svi ostali na drugom.

## Pristanak {#consent}

Padajući meni bira kako se druga strana obaveštava o snimanju:

| Izbor | Šta druga strana čuje |
| --- | --- |
| **Obaveštenje** | Kratku poruku kada snimanje počne. Podrazumevano. **Izaberi…** bira sopstvenu zvučnu datoteku; *ako ništa nije izabrano, telefon pušta kratak zvučni znak*. |
| **Ton svakih nekoliko sekundi** | Zvučni signal u razmaku koji podesite klizačem. |
| **Baš ništa** | Ništa. Izabrano na slici. |

**Zadrži obaveštenje u snimku** — obaveštenje i ton puštaju se ljudima u pozivu; uključite ovo i biće i u datoteci.

:::caution
Na mnogim mestima — u većem delu Evrope i u nekoliko američkih saveznih država — snimanje razgovora bez obaveštavanja druge strane protivno je zakonu. To je vaša odluka, a program to i kaže ispod padajućeg menija.
:::

## Konferencije {#conferences}

**Datoteka za svaku osobu**, podrazumevano uključeno. U konferenciji je drugi kanal mešavina svih, pa upravo dodatna datoteka po osobi omogućava da prepis kaže ko je šta rekao.

## Čuvanje {#retention}

<Shot name="09b_settings_recording_scrolled" alt="Podešavanja → Snimanje: čuvanje" />

| Podešavanje | Podrazumevano | Šta ograničava |
| --- | --- | --- |
| **Razdoblje čuvanja** | Uvek | Koliko se dugo snimak čuva. |
| **Granica skladišta** | Bez granice | Koliko prostora smeju da zauzmu svi snimci zajedno. |
| **Datoteke po osobi** | Uvek | Koliko se dugo čuvaju dodatne datoteke konferencije. |
| **Prag prostora na disku** | 500 MB | Donja granica slobodnog prostora na disku. Snimci koje niste zakačili mogu da se uklone kako bi se ostalo iznad nje. |

Zakačen snimak nijedno od ovih podešavanja nikada ne briše, a i dalje se uračunava u granicu. Sat razgovora zauzima oko 30 MB.

Deo programa koji snima pozive i o tome obaveštava drugu stranu može da se isključi u [Modulima](/application/modules).

Za snimanje sastanka održanog u drugoj aplikaciji pogledajte [Hvatanje](/capture/).
