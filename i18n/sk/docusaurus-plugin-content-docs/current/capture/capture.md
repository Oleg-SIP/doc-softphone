---
title: Zachytávanie
sidebar_label: Zachytávanie z iných aplikácií
sidebar_position: 1
description: "\"Zachytávanie nahrá rozhovor vedený v inej aplikácii — v Zoome, Teams, Meet alebo v akejkoľvek inej — priamo z počítača.\""
---

**Zachytávanie** je spôsob, akým AI Softphone nahrá rozhovor, ktorý prebieha v inom programe, napríklad stretnutie v Zoome, Teams alebo Meet. Nahráva priamo z počítača, pričom druhú stranu a vás drží na oddelených kanáloch, a na konci čaká rovnaký prepis a spracovanie ako pri hovore.

Program hľadá rozhovor, nie názov aplikácie, takže funguje so všetkým, čo nejaký rozhovor vedie.

[Prehľad](../interface/settings-overview.md) nastavení to uvádza v skupine **Zachytávanie z iných aplikácií** a rozdeľuje na tri kroky:

1. **Zapnúť zachytávanie** — [povoliť zachytávanie zvuku](#turning-capture-on).
2. **Zachytiť rozhovor** — [spustiť a zastaviť](#capturing-a-conversation) nahrávanie.
3. **Dať nahrávke meno** — [premenovať](#giving-it-a-name) nahrávku.

## Zapnutie zachytávania {#turning-capture-on}

Zachytávanie je vypnuté, kým ho nepovolíte. Otvorte **Nastavenia → Zachytávanie**.

<Shot name="10_settings_capture" alt="Nastavenia → Zachytávanie" />

| Nastavenie | Predvolene | Čo robí |
| --- | --- | --- |
| **Povoliť zachytávanie zvuku** | vypnuté | Umožní programu nahrávať zvuk iných aplikácií. Kým je vypnuté, nič sa nezachytáva. |
| **Pripomínať mi, nech ostatným poviem o nahrávaní** | zapnuté | Počas zachytávania zobrazuje pripomienku. Začiarkavacie políčko je sivé, kým nie je zachytávanie povolené. |

:::caution
Nahráva sa všetko, čo počítač prehráva, nielen rozhovor. Tento telefón nemôže ohlásiť nahrávanie do cudzieho stretnutia, takže povedať to je na vás.
:::

Časť programu, ktorá to robí, je modul **Zachytávanie**, *nahrávanie hovoru prebiehajúceho v inej aplikácii*. Dá sa vypnúť v [Moduloch](../application/modules.md).

## Spustenie zachytávania {#starting-a-capture}

Keď je zachytávanie povolené, spodok [hlavného okna](../interface/main-window.md#capture) ukazuje jeho stav — **Zachytávanie · pripravené** — s tlačidlom **Nahrať** vpravo. Stlačením **Nahrať** ho spustíte ručne.

### Automatické spustenie {#automatic-start}

**Automatické spustenie** rozhoduje, čo sa stane, keď program začuje rozhovor v inej aplikácii:

| Voľba | Čo sa stane |
| --- | --- |
| **Nikdy** | Zachytávanie sa spustí, iba keď stlačíte **Nahrať**. |
| **Spýtať sa ma** | Program sa spýta, či ho nahrať. Predvolené. |
| **Vždy** | Program začne nahrávať sám. |

V časti **Aplikácie s vlastnou odpoveďou** môže aplikácia dostať vlastnú odpoveď — napríklad *Vždy nahrávať túto aplikáciu* z otázky, ktorú program kladie.

*Otázka nič nestojí: sekundy pred vašou odpoveďou sú už uchované.*

### Pred začiatkom {#before-the-start}

Posuvník **Pred začiatkom** určuje, koľko sekúnd zvuku sa uchová spred začiatku nahrávania, predvolene **15 sekúnd**. Je tam na to, aby sa nič nestratilo, kým sa rozhovor zbadá: nahrávka, ktorá sa začne, keď stlačíte **Nahrať** alebo keď odpoviete na otázku, aj tak začína slovami, ktoré zazneli predtým.

## Zachytenie rozhovoru {#capturing-a-conversation}

Počas nahrávania hlavné okno ukazuje červenú bodku, názov nahrávky (napríklad **Stretnutie v Zoom**), uplynulý čas a dva kanály ako vlnové krivky.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Nahrávanie stretnutia" />

- **Zastaviť nahrávanie** ho ukončí.
- Okno zostáva počas nahrávania viditeľné a pripomína vám, aby ste účastníkom povedali, že sa stretnutie nahráva.

### Čo ukazuje obraz {#what-the-picture-shows}

Ďalšie dve nastavenia vyberajú, ako sa kreslí úroveň zvuku:

| Nastavenie | Predvolene | Kde |
| --- | --- | --- |
| **Obraz v hlavnom okne** | Vlna | Dva kanály počas zachytávania. |
| **Obraz v pruhu pri päte telefónu** | Dve úrovne | Dva tenké pruhy pod **Zachytávanie · pripravené**. |

### Vyskúšanie {#testing-it}

V časti **Vyskúšať** má karta dva stĺpce: **Vy** a **Druhá strana**. *Horný stĺpec sa hýbe, keď hovoríte, dolný, keď niečo hrá.* Pred dôležitým stretnutím povedzte slovo a prehrajte akýkoľvek zvuk, aby ste videli, že program počuje obe strany.

## Pomenovanie nahrávky {#giving-it-a-name}

Ceruzka vedľa názvu nahrávky umožňuje premenovať ju, kým prebieha. Nahrávka, ktorú ste nepomenovali, je uvedená ako **Iná aplikácia**.

## Kam ide nahrávka {#where-the-recording-goes}

Zachytený rozhovor sa objaví v [okne Nahrávky](../interface/recordings.md) ako každý iný, s vlastnou ikonou, oknom namiesto slúchadla, a s názvom, ktorý ste mu dali, alebo **Iná aplikácia**.

<Shot name="01_recordings" alt="Zachytené stretnutia na karte Nahrávky, označené ikonou okna" />

Prepíše sa, zhrnie, zaradí do kategórie a označí štítkami podľa rovnakých [pravidiel](../ai-processing/processing.md#rules) ako hovor. V prepise zachyteného stretnutia je hovoriaci uvedený ako **Iná aplikácia** tam, kde by hovor ukázal meno druhej strany; **Hľadať** v knižnici nájde aj to, čo v ňom zaznelo.
