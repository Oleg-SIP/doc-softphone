---
title: Tlačítka
sidebar_position: 4
description: "Tlačítka BLF: tlačítka jedním stiskem, která vytočí linku na IP ústředně a ukazují, zda je volná, zvoní, nebo je obsazená."
---

Tlačítka jsou klávesy **BLF** (Busy Lamp Field) softphonu — stejná funkce, jakou má stolní telefon na IP ústředně. Tlačítko vytočí linku jedním stiskem. Tlačítko, které svou linku sleduje, má navíc kontrolku: telefon se ústředny ptá na tuto linku a ukazuje, zda je volná, zvoní, nebo je obsazená, tak jako to dělá konzole recepce nebo programovatelné klávesy stolního telefonu.

BLF potřebuje podporu na straně ústředny: ústředna musí telefonu hlásit stav linky. Většina IP ústředen to umí. Pokud ta vaše ne, kontrolka zůstane šedá a tlačítko stále vytáčí.

Tlačítka stojí pod štítky účtů v [hlavním okně](/interface/main-window) a vytvářejí se v **Nastavení → Tlačítka**.

<Shot name="08_settings_buttons" alt="Nastavení → Tlačítka: dvě tlačítka" />

Každý řádek je tlačítko: kontrolka, popisek a vpravo jeho číslo a účet, ke kterému patří — například *212 · 201 Obchod*. **▲** a **▼** tlačítko posouvají nahoru nebo dolů; tlačítka v hlavním okně mají stejné pořadí. **Přidat** vytvoří nové.

## Kontrolka {#the-lamp}

Tlačítko, které sleduje svou linku, má kontrolku:

| Kontrolka | Linka je |
| --- | --- |
| Zelená | volná |
| Oranžová | zvoní |
| Červená | v hovoru |
| Šedá | neznámo: ústředna to neřekne |

## Přidání tlačítka {#adding-a-button}

<Shot name="08b_button_add" alt="Formulář nového tlačítka" />

Stiskněte **Přidat**; pod seznamem se otevře formulář.

| Pole | Co zadat |
| --- | --- |
| **Číslo** | Číslo, které se vytočí. |
| **Linka** | Účet, ze kterého se volá. Vyberte ho jako první: aby mohl ukázat kontrolku, telefon se na toto číslo ptá ústředny té linky, takže musí vědět které. |
| **Popisek** | Text na tlačítku, například jméno osoby. Na tlačítku je místo jen na krátký popisek; delší se zkrátí. |
| **Ukazovat, zda je tato linka obsazená** | Přepínač. Zapnutý — tlačítko má kontrolku. Vypnutý — jen vytáčí. |

**Uložit** zůstává šedé, dokud není formulář vyplněn. **Zrušit** formulář zavře.

Část programu, která tlačítka zobrazuje, lze vypnout v [Modulech](/application/modules).
