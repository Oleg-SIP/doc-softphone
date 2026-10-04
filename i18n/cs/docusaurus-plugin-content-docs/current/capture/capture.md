---
title: Zachytávání
sidebar_position: 1
description: "Zachytávání nahraje rozhovor vedený v jiné aplikaci — Zoomu, Teams, Meetu nebo jakékoli jiné — přímo z počítače."
---

**Zachytávání** je způsob, jak AI Softphone nahraje rozhovor, který probíhá v jiném programu, například schůzku v Zoomu, Teams nebo Meetu. Nahrává přímo z počítače, vzdálenou stranu a vás drží v samostatných kanálech a na konci čeká stejný přepis a zápis jako u hovoru.

Program hledá rozhovor, ne název aplikace, takže funguje s čímkoli, co rozhovor vytváří.

[Přehled](../interface/settings-overview.md) nastavení to uvádí pod **Zachytávání z jiných aplikací** a rozkládá do tří kroků:

1. **Zapnout zachytávání** — [povolit zachytávání zvuku](#turning-capture-on).
2. **Zachytit rozhovor** — [spustit a zastavit](#capturing-a-conversation) nahrávání.
3. **Dát nahrávce jméno** — [přejmenovat](#giving-it-a-name) nahrávku.

## Zapnutí zachytávání {#turning-capture-on}

Zachytávání je vypnuté, dokud ho nepovolíte. Otevřete **Nastavení → Zachytávání**.

<Shot name="10_settings_capture" alt="Nastavení → Zachytávání" />

| Nastavení | Výchozí | Co dělá |
| --- | --- | --- |
| **Povolit zachytávání zvuku** | vypnuto | Dovolí programu nahrávat zvuk jiných aplikací. Dokud je vypnuto, nic se nezachytává. |
| **Připomínat mi, ať ostatním řeknu o nahrávání** | zapnuto | Během zachytávání ukazuje připomínku. Políčko je šedé, dokud zachytávání není povoleno. |

:::caution
Nahrává se vše, co počítač přehrává, nejen rozhovor. Tento telefon nemůže ohlásit nahrávání do cizí schůzky, takže říct to ostatním je na vás.
:::

Část programu, která to dělá, je modul **Zachytávání**, *nahrávání hovoru probíhajícího v jiné aplikaci*. Lze ho vypnout v [Modulech](../application/modules.md).

## Spuštění zachytávání {#starting-a-capture}

Jakmile je zachytávání povoleno, dolní část [hlavního okna](../interface/main-window.md#capture) ukazuje jeho stav — **Zachytávání · čekám na hovor** — s tlačítkem **Nahrát** vpravo. Stiskem **Nahrát** spustíte nahrávání ručně.

### Automatické spuštění {#automatic-start}

**Automatické spuštění** rozhoduje, co se stane, když program zaslechne rozhovor v jiné aplikaci:

| Volba | Co se stane |
| --- | --- |
| **Nikdy** | Zachytávání začne, jen když stisknete **Nahrát**. |
| **Zeptat se mě** | Program se zeptá, zda rozhovor nahrát. Výchozí. |
| **Vždy** | Program začne nahrávat sám. |

V části **Aplikace s vlastní odpovědí** lze jednotlivé aplikaci dát vlastní odpověď — například *Vždy nahrávat tuto aplikaci* z otázky, kterou program položí.

*Ptát se nic nestojí: sekundy před vaší odpovědí už jsou uchované.*

### Před začátkem {#before-the-start}

Posuvník **Před začátkem** určuje, kolik sekund zvuku se uchová z doby před začátkem nahrávání, ve výchozím stavu **15 sekund**. Je tu proto, aby se nic neztratilo, zatímco se rozhovor rozpoznává: nahrávka, která začne stiskem **Nahrát** nebo vaší odpovědí na otázku, stejně začíná slovy, která zazněla předtím.

## Zachycení rozhovoru {#capturing-a-conversation}

Během nahrávání hlavní okno ukazuje červenou tečku, název nahrávky (například **Schůzka v Zoom**), uplynulý čas a oba kanály jako vlny.

<Shot src="https://ai-softphone.com/screenshots/macos/cs/light/capture.png" alt="Nahrávání schůzky" />

- **Zastavit nahrávání** ho ukončí.
- Okno zůstává během nahrávání viditelné a připomíná vám, abyste účastníkům řekli, že se schůzka nahrává.

### Co obrázek ukazuje {#what-the-picture-shows}

Dvě další nastavení vybírají, jak se kreslí úroveň zvuku:

| Nastavení | Výchozí | Kde |
| --- | --- | --- |
| **Obraz v hlavním okně** | Vlna | Oba kanály během zachytávání. |
| **Obraz v pruhu u paty telefonu** | Dvě úrovně | Dva tenké pruhy pod stavem zachytávání. |

### Vyzkoušení {#testing-it}

V části **Kontrola** má karta dva pruhy: **Vy** a **Druhá strana**. *Horní sloupec se hýbe, když mluvíte, dolní, když něco hraje.* Před důležitou schůzkou řekněte slovo a pusťte libovolný zvuk, abyste viděli, že program slyší obě strany.

## Pojmenování {#giving-it-a-name}

Tužka vedle názvu nahrávky ji umožní přejmenovat, ještě než skončí. Nahrávka, kterou jste nepojmenovali, je uvedena jako **Jiná aplikace**.

## Kam nahrávka jde {#where-the-recording-goes}

Zachycený rozhovor se objeví v [okně nahrávek](../recordings/recordings-window.md) jako každý jiný, s vlastní ikonou — oknem místo sluchátka — a s názvem, který jste mu dali, nebo **Jiná aplikace**.

<Shot name="01_recordings" alt="Zachycené schůzky na kartě Nahrávky, označené ikonou okna" />

Přepíše se, shrne, zařadí do kategorie a oštítkuje podle stejných [pravidel](../ai-processing/processing.md#rules) jako hovor. V přepisu zachycené schůzky je mluvčí uveden jako **Jiná aplikace** tam, kde by hovor ukázal jméno druhé strany; **Hledat** v knihovně najde i to, co v ní zaznělo.
