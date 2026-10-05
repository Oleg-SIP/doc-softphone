---
title: Tlačidlá
sidebar_position: 4
description: "\"Tlačidlá BLF: tlačidlá jedným dotykom, ktoré vytočia klapku na vašej IP ústredni a ukazujú, či je voľná, zvoní alebo je obsadená.\""
---

Tlačidlá sú klávesy **BLF** (Busy Lamp Field) softvérového telefónu, rovnaká funkcia, akú má stolový telefón na IP ústredni. Tlačidlo vytočí klapku jedným stlačením. Tlačidlo, ktoré sleduje svoju linku, ukazuje aj kontrolku: telefón sa pýta ústredne na tú klapku a ukazuje, či je voľná, zvoní alebo je obsadená, ako to robí konzola recepcie alebo programovateľné klávesy stolového telefónu.

BLF potrebuje podporu na strane ústredne: ústredňa musí telefónu hlásiť stav klapky. Väčšina IP ústrední to robí. Ak tá vaša nie, kontrolka zostane sivá a tlačidlo aj tak vytáča.

Tlačidlá sú pod štítkami účtov v [hlavnom okne](/interface/main-window) a **Nastavenia → Tlačidlá** je miesto, kde ich vytvárate.

<Shot name="08_settings_buttons" alt="Nastavenia → Tlačidlá: dve tlačidlá" />

Každý riadok je tlačidlo: kontrolka, jeho popis a vpravo jeho číslo a účet, ku ktorému patrí — napríklad *212 · 201 Kancelária*. **▲** a **▼** posúvajú tlačidlo nahor alebo nadol; tlačidlá v hlavnom okne idú v tomto poradí. **Pridať** vytvorí nové.

## Kontrolka {#the-lamp}

Tlačidlo, ktoré sleduje svoju linku, ukazuje kontrolku:

| Kontrolka | Linka je |
| --- | --- |
| Zelená | voľná |
| Oranžová | zvoní |
| Červená | v hovore |
| Sivá | neznámy stav: ústredňa ho neoznámi |

## Pridanie tlačidla {#adding-a-button}

<Shot name="08b_button_add" alt="Formulár nového tlačidla" />

Stlačte **Pridať**; pod zoznamom sa otvorí formulár.

| Pole | Čo zadať |
| --- | --- |
| **Číslo** | Číslo, ktoré sa vytočí. |
| **Linka** | Účet, na ktorom sa hovor uskutoční. Vyberte ho ako prvý: na zobrazenie kontrolky sa telefón pýta ústredne tejto linky na toto číslo, takže musí vedieť, ktorej. |
| **Popis** | Text na tlačidle, napríklad meno osoby. Na tlačidle je miesto iba pre krátky popis; dlhší sa oreže. |
| **Ukazovať, či je táto linka obsadená** | Prepínač. Zapnutý — tlačidlo má kontrolku. Vypnutý — iba vytáča. |

**Uložiť** zostáva sivé, kým nie je formulár vyplnený. **Zrušiť** formulár zahodí.

Časť programu, ktorá zobrazuje tlačidlá, sa dá vypnúť v [Moduloch](/application/modules).
