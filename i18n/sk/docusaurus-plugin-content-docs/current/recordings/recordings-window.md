---
title: Okno nahrávok
sidebar_position: 2
description: Knižnica rozhovorov — filtrovanie, prehrávanie, čítanie prepisu a spracovania.
---

**Nahrávky** sú miesto, kde žije každý rozhovor, nech prišiel akokoľvek: hovor, stretnutie zachytené z inej aplikácie alebo importovaný súbor. Každý je uvedený s už hotovým spracovaním.

<Shot name="01_recordings" alt="Karta Nahrávky: zoznam rozhovorov" />

## Hľadanie rozhovoru {#finding-a-conversation}

Pruh navrchu má štyri filtre, vyhľadávacie pole a ponuku:

| Ovládací prvok | Zúži zoznam podľa |
| --- | --- |
| **Druh** | spôsobu, akým rozhovor prišiel |
| **Obdobie** | dátumu |
| **Kategória** | kategórie, do ktorej bol zaradený — pozrite [Slovníky](../ai-processing/dictionaries.md) |
| **Značka** | značiek, ktoré nesie |
| **Hľadať** | toho, čo v ňom zaznelo — hľadanie prechádza prepismi všetkého, čo ste nahrali |

Tlačidlo **⋮** vpravo na pruhu otvorí ďalšie akcie pre zoznam: **Importovať zo súborov**, **Exportovať do CSV** a **Otvoriť v prehliadači**.

## Zoznam {#the-list}

Každý riadok ukazuje:

- ikonu druhu rozhovoru: slúchadlo pre hovor, okno pre stretnutie v inej aplikácii;
- názov — meno druhej strany, číslo alebo **Iná aplikácia** pre zachytené stretnutie — a pod ním dátum a zhrnutie na jeden riadok;
- vpravo kategóriu s jej hodnotením (číslo, napríklad *Podpora · 2*), potom štítky a na konci dĺžku.

Štítky nakreslené červenou sú **varovné signály** (na obrázku *Nahnevaný zákazník* a *Riziko odchodu*); ostatné sú obyčajné štítky (*Sťažnosť*, *Sľúbené zavolať späť*). Rozhovor bez zhrnutia a kategórie ešte nebol spracovaný — prvý riadok na obrázku.

## Prehrávač {#the-player}

Vyberte riadok a pod zoznamom sa otvorí prehrávač.

<Shot name="02_recording_details" alt="Vybraná nahrávka: prehrávač a prepis pod zoznamom" />

- Dve vlnové krivky sú dva kanály nahrávky, jeden pre každú stranu rozhovoru. Pruh pod nimi posúva dlhú nahrávku.
- **▶** prehráva a pozastavuje; časy vľavo sú pozícia a celková dĺžka.
- **1×** mení rýchlosť; **Obaja** vyberá, ktorý kanál počujete.
- Tlačidlo disku uloží zvuk, **×** zatvorí prehrávač.

## Prepis a spracovanie {#the-transcript-and-the-write-up}

Pod prehrávačom je prepis, s jedným riadkom na každú repliku, časom, kedy zaznela, a menom hovoriaceho (**Vy**, meno druhej strany alebo pri zachytenom stretnutí **Iná aplikácia**). Kliknutím na riadok si vypočujete ten okamih; riadok pod prehrávacou hlavou je zvýraznený a vyslovované slovo je v ňom označené.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Prepis vedľa zvuku" />

Rozbaľovací zoznam nad prepisom vyberá, čo zobraziť — prepis vytvorený jedným z vašich [rozpoznávačov](../ai-processing/transcription.md) (hviezdička označuje hlavný prepis nahrávky) alebo spracovanie, napríklad **Akcie**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Úlohy, ktoré po rozhovore zostali" />

Štyri ikony vpravo od rozbaľovacieho zoznamu:

| Ikona | Čo robí |
| --- | --- |
| Iskry | Nechá model napísať vybranú položku hneď teraz. |
| Dva listy | Skopíruje ju. |
| Disk | Uloží ju do súboru. |
| Kôš | Zmaže ju. |

Prepis môžete exportovať ako obyčajný text alebo ako titulky.

Spracovanie robia [pokyny](/ai-processing/prompt-studio) a modely, ktoré nastavíte v [Spracovaní](../ai-processing/processing.md), cez [pravidlá](../ai-processing/processing.md#rules), ktoré bežia samy alebo keď o to požiadate. Ako dlho sa nahrávky uchovávajú, sa nastavuje v [Nahrávaní hovorov](call-recording.md#retention).

## Nahrávka, ktorú už máte {#a-recording-you-already-have}

Nahrávku urobenú inde — na mobilnom telefóne, diktafóne alebo v inom systéme — môžete pridať cez **⋮ → Importovať zo súborov**. Zaradí sa presne ako vytočený hovor: prepíše sa, spracuje a nájde rovnakým hľadaním.

## Zmazanie nahrávky {#deleting-a-recording}

Keď sa nahrávka zmaže, odíde s ňou všetko, čo z nej vzniklo: prepis aj spracovanie.
