---
title: Snimke
sidebar_position: 4
description: Koji se pozivi snimaju, što se kaže drugoj strani, kako se spremaju konferencije i koliko se dugo datoteke čuvaju.
---

**Postavke → Snimanje** odlučuje koji pozivi postaju snimke i koliko dugo datoteke ostaju. Snimljeni poziv pojavljuje se u [prozoru Snimke](/interface/recordings).

<Shot name="09_settings_recording" alt="Postavke → Snimanje" />

## Snimanje {#recording}

Padajući izbornik odabire koji se pozivi snimaju:

| Izbor | Snima |
| --- | --- |
| **Ručno** | Samo kad pritisnete snimanje na kartici poziva. Zadano. |
| **Pitaj pri svakom pozivu** | Telefon pri svakom pozivu pita treba li ga snimiti. |
| **Svaki poziv** | Svaki prihvaćeni poziv, sam od sebe. Odabrano na slici. |
| **Odabrane linije** | Pozive na računima koje označite na popisu koji se pojavi. |

Snimanje počinje kad se netko javi na poziv i nikad prije, pa zvonjenje i brojevi koje birate nisu u datoteci. Poziv je jedna stereo datoteka: vi na jednom kanalu, svi ostali na drugom.

## Pristanak {#consent}

Padajući izbornik odabire kako se druga strana obavještava o snimanju:

| Izbor | Što druga strana čuje |
| --- | --- |
| **Najava** | Kratku poruku kad snimanje počne. Zadano. **Odaberi…** odabire vlastitu zvučnu datoteku; *ako ništa nije odabrano, telefon svira kratak zvučni znak*. |
| **Ton svakih nekoliko sekundi** | Zvučni signal u razmaku koji postavite klizačem. |
| **Baš ništa** | Ništa. Odabrano na slici. |

**Zadrži obavijest u snimci** — najava i ton reproduciraju se ljudima u pozivu; uključite ovo i bit će i u datoteci.

:::caution
Na mnogim mjestima — u većem dijelu Europe i u nekoliko američkih saveznih država — snimanje razgovora bez obavještavanja druge strane protivno je zakonu. To je vaša odluka, a program to i kaže ispod padajućeg izbornika.
:::

## Konferencije {#conferences}

**Datoteka po osobi**, prema zadanim postavkama uključeno. U konferenciji je drugi kanal mješavina svih, pa upravo dodatna datoteka po osobi omogućuje da prijepis kaže tko je što rekao.

## Čuvanje {#retention}

<Shot name="09b_settings_recording_scrolled" alt="Postavke → Snimanje: čuvanje" />

| Postavka | Zadano | Što ograničava |
| --- | --- | --- |
| **Razdoblje čuvanja** | Uvijek | Koliko se dugo snimka čuva. |
| **Granica pohrane** | Bez granice | Koliko prostora smiju zauzeti sve snimke zajedno. |
| **Datoteke po osobi** | Uvijek | Koliko se dugo čuvaju dodatne datoteke konferencije. |
| **Prag prostora na disku** | 500 MB | Donja granica slobodnog prostora na disku. Snimke koje niste prikvačili mogu se ukloniti kako bi se ostalo iznad nje. |

Prikvačenu snimku nijedna od ovih postavki nikada ne briše, a i dalje se ubraja u granicu. Sat razgovora zauzima oko 30 MB.

Dio programa koji snima pozive i o tome obavještava drugu stranu može se isključiti u [Modulima](/application/modules).

Za snimanje sastanka održanog u drugoj aplikaciji pogledajte [Hvatanje](/capture/).
