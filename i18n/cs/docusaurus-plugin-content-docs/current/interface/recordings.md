---
title: Okno nahrávek
sidebar_position: 2
description: Knihovna rozhovorů — filtrování, přehrávání, přepis a zápis.
---

**Nahrávky** jsou místo, kde žije každý rozhovor, ať přišel jakkoli: hovor, schůzka zachycená z jiné aplikace nebo importovaný soubor. U každého je zápis už hotový.

<Shot name="01_recordings" alt="Karta Nahrávky: seznam rozhovorů" />

## Hledání rozhovoru {#finding-a-conversation}

Lišta nahoře má čtyři filtry, pole hledání a nabídku:

| Ovládací prvek | Zužuje seznam podle |
| --- | --- |
| **Druh** | způsobu, jakým rozhovor přišel |
| **Období** | data |
| **Kategorie** | kategorie, do které byl zařazen — viz [Slovníky](../ai-processing/dictionaries.md) |
| **Značka** | značek, které nese |
| **Hledat** | toho, co v něm zaznělo — hledá se v přepisech všeho, co jste nahráli |

Tlačítko **⋮** vpravo na liště otevře další akce se seznamem: **Import ze souborů**, **Export do CSV** a **Otevřít v prohlížeči**.

## Seznam {#the-list}

Každý řádek ukazuje:

- ikonu druhu rozhovoru: sluchátko pro hovor, okno pro schůzku v jiné aplikaci;
- titulek — jméno druhé strany, číslo, nebo **Jiná aplikace** pro zachycenou schůzku — a pod ním datum a shrnutí na jeden řádek;
- vpravo kategorii se skóre (číslo, například *Podpora · 2*), pak štítky a nakonec délku.

Štítky červeně jsou **varovné signály** (na obrázku *Rozzlobený zákazník* a *Riziko odchodu*); ostatní jsou běžné štítky (*Stížnost*, *Slíbeno zavolat zpět*). Rozhovor bez shrnutí a kategorie ještě nebyl zpracován — na obrázku první řádek.

## Přehrávač {#the-player}

Výběrem řádku otevřete přehrávač pod seznamem.

<Shot name="02_recording_details" alt="Vybraná nahrávka: přehrávač a přepis pod seznamem" />

- Dvě vlny jsou dva kanály nahrávky, jeden pro každou stranu rozhovoru. Pruh pod nimi posouvá dlouhou nahrávku.
- **▶** přehrává a pozastavuje; časy vlevo jsou pozice a celková délka.
- **1×** mění rychlost; **Oba** vybírá, který kanál slyšíte.
- Tlačítko s disketou uloží zvuk, **×** přehrávač zavře.

## Přepis a zápis {#the-transcript-and-the-write-up}

Pod přehrávačem je přepis, jeden řádek na každou repliku, s časem, kdy zazněla, a jménem mluvčího (**Vy**, jméno druhé strany nebo u zachycené schůzky **Jiná aplikace**). Kliknutím na řádek si poslechnete daný okamžik; řádek pod přehrávací hlavou je zvýrazněn a právě vyslovované slovo je v něm označeno.

<Shot src="https://ai-softphone.com/screenshots/macos/cs/light/transcript.png" alt="Přepis vedle zvuku" />

Rozbalovací seznam nad přepisem vybírá, co se zobrazí — přepis od některého z vašich [rozpoznávačů](../ai-processing/transcription.md) (hvězdička označuje hlavní přepis nahrávky) nebo zápis, například **Úkoly**.

<Shot src="https://ai-softphone.com/screenshots/macos/cs/light/digest.png" alt="Úkoly, které po rozhovoru zůstaly" />

Čtyři ikony vpravo od rozbalovacího seznamu:

| Ikona | Dělá |
| --- | --- |
| Jiskry | Nechá model vybranou položku napsat hned teď. |
| Dva listy | Zkopíruje ji. |
| Disketa | Uloží ji do souboru. |
| Koš | Smaže ji. |

Přepis lze vyexportovat jako prostý text nebo jako titulky.

Zápis vytvářejí [pokyny](/ai-processing/prompt-studio) a modely, které nastavíte ve [Zpracování](../ai-processing/processing.md), podle [pravidel](../ai-processing/processing.md#rules), která běží sama nebo na požádání. Jak dlouho se nahrávky uchovávají, se nastavuje v [Nahrávání hovorů](../recordings/call-recording.md#retention).

## Nahrávka, kterou už máte {#a-recording-you-already-have}

Nahrávku pořízenou jinde — na mobilu, diktafonu nebo v jiném systému — lze do programu přidat přes **⋮ → Import ze souborů**. Zařadí se stejně jako vytočený hovor: přepíše se, zpracuje a najde ji stejné hledání.

## Smazání nahrávky {#deleting-a-recording}

Když se nahrávka smaže, odejde s ní vše, co z ní vzniklo: přepis i zápis.
