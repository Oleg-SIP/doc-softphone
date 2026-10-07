---
title: Snemanje klicev
sidebar_position: 1
description: Kateri klici se snemajo, kaj se pove drugi strani, kako se shranijo konference in kako dolgo se datoteke hranijo.
---

**Nastavitve → Snemanje** odloča, kateri klici postanejo posnetki in kako dolgo datoteke ostanejo. Posnet klic se pojavi v [oknu Posnetki](/interface/recordings).

<Shot name="09_settings_recording" alt="Nastavitve → Snemanje" />

## Snemanje {#recording}

Spustni seznam izbere, kateri klici se snemajo:

| Izbira | Snema |
| --- | --- |
| **Ročno** | Samo ko pritisnete snemanje na kartici klica. Privzeto. |
| **Vprašaj pri vsakem klicu** | Telefon pri vsakem klicu vpraša, ali naj ga posname. |
| **Vsak klic** | Vsak sprejet klic, sam od sebe. Izbrano na sliki. |
| **Izbrane linije** | Klice na računih, ki jih označite na seznamu, ki se pojavi. |

Snemanje se začne, ko je klic sprejet, in nikoli prej, zato zvonjenja in številk, ki jih kličete, ni v datoteki. Klic je ena stereo datoteka: vi na enem kanalu, vsi drugi na drugem.

## Privolitev {#consent}

Spustni seznam izbere, kako je druga stran obveščena o snemanju:

| Izbira | Kaj sliši druga stran |
| --- | --- |
| **Napoved** | Kratko sporočilo, ko se snemanje začne. Privzeto. **Izberi…** izbere lastno zvočno datoteko; *če ni nič izbrano, telefon predvaja kratek zvočni znak*. |
| **Ton vsakih nekaj sekund** | Pisk v razmiku, ki ga nastavite z drsnikom. |
| **Prav nič** | Nič. Izbrano na sliki. |

**Obdrži obvestilo v posnetku** — napoved in ton se predvajata ljudem v klicu; vklopite to in bosta tudi v datoteki.

:::caution
Marsikje — v večini Evrope in v več ameriških zveznih državah — je snemanje pogovora brez obvestila drugi strani protizakonito. To je vaša odločitev, in program to tudi pove pod spustnim seznamom.
:::

## Konference {#conferences}

**Datoteka na osebo**, privzeto vklopljeno. V konferenci je drugi kanal mešanica vseh, zato prav dodatna datoteka za vsako osebo omogoča, da prepis pove, kdo je kaj rekel.

## Hramba {#retention}

<Shot name="09b_settings_recording_scrolled" alt="Nastavitve → Snemanje: hramba" />

| Nastavitev | Privzeto | Kaj omejuje |
| --- | --- | --- |
| **Doba hrambe** | Vedno | Kako dolgo se posnetek hrani. |
| **Meja shrambe** | Brez meje | Koliko prostora smejo vsi posnetki skupaj zasesti. |
| **Datoteke na osebo** | Vedno | Kako dolgo se hranijo dodatne datoteke konference. |
| **Prag prostora na disku** | 500 MB | Spodnja meja prostega prostora na disku. Posnetki, ki jih niste pripeli, se lahko odstranijo, da ostane nad njo. |

Pripetega posnetka nobena od teh nastavitev nikoli ne izbriše, še vedno pa se šteje v mejo. Ura pogovora zasede približno 30 MB.

Del programa, ki snema klice in o tem obvešča drugo stran, je mogoče izklopiti v [Modulih](/application/modules).

Za snemanje sestanka v drugem programu glejte [Zajemanje](/capture/).
