---
title: Nastavení našeptávače
sidebar_label: Našeptávač
sidebar_position: 5
description: "Nastavení → Našeptávač: co potřebuje živý našeptávač, přepínač, který ho povoluje, velikost textu, pomocníci a jejich karty a měsíční stropy toho, co smí utratit."
---

V **Nastavení → Našeptávač** se živý našeptávač povoluje, nastavuje se jeho velikost a dostává své pomocníky. Samotný našeptávač — okno, které zapisuje hovor ve chvíli, kdy zaznívá, a radí, co odpovědět, a zkouška na nahrávce — je popsán na stránce [Okno našeptávače](/interface/prompter).

[Přehled](/interface/settings-overview) nastavení uvádí našeptávač v části **Našeptávač** ve dvou krocích: **Povolit našeptávání** a **Spustit našeptávání**.

## Co potřebuje {#what-it-needs}
- **Rozpoznávač, který umí poslouchat během rozhovoru.** Přidává se v [Nastavení → Přepis](/ai-processing/transcription#live-recognition-for-the-prompter) jako kterýkoli jiný rozpoznávač a potřebuje **Adresa pro našeptávače** a úspěšné **Vyzkoušet**.
- **Jazykový model** pro pomocníky, kteří něco navrhují. Je to model nastavený u pomocníka nebo výchozí model v [Nastavení → Zpracování](/ai-processing/processing#language-models). Titulky žádný model nepotřebují.
- **Zaškrtnutí Povolit používání našeptávače** v **Nastavení → Našeptávač**.

Jakmile jsou splněny všechny tři, objeví se **Našeptávač** v seznamu ve spodní části telefonu mezi **Historie** a **Nastavení** a otevře [okno našeptávače](/interface/prompter). Částí programu, která to zajišťuje, je modul **Našeptávač**, *Poslouchá rozhovor v jeho průběhu a napovídá*; lze ho vypnout v [Moduly](/application/modules).

## Nastavení → Našeptávač {#settings--prompter}
<Shot name="41_settings_prompter" alt="Nastavení → Našeptávač: přepínač, který povoluje našeptávač, a velikost textu" />

*Rozpoznávání řeči v průběhu hovoru a nápovědy psané podle vašich vlastních pokynů. Obojí se účtuje po minutách.*

| Nastavení | Výchozí | Co dělá |
| --- | --- | --- |
| **Povolit používání našeptávače** | vypnuto | Jediný přepínač, který vůbec dovolí spustit našeptávač. Nic jiného na stránce nemá účinek, dokud je vypnutý. |
| **Přepis a nápovědy** | 13 pixelů | Jak velké se vykreslují oba sloupce okna. |
| **Opakovat nejnovější řádek nad sloupci** | zapnuto | Ukazuje nejnovější nápovědu — nebo nejnovější řádek u pomocníka, který nic nenavrhuje — ve vlastním pruhu nad sloupci. |
| **Opakovaný řádek** | 20 pixelů | Jak velký je text pruhu. Zobrazuje se, dokud je pruh zapnutý. |

:::caution
Hlas druhé strany se posílá rozpoznávači během mluvení, což není nic menšího než nahrávání. Kde [Nastavení → Nahrávání](/recordings) žádá nejdřív ji uvědomit, našeptávač se spustí až potom.
:::

Našeptávač se čte během mluvení, často z větší vzdálenosti než zbytek telefonu, proto si obě velikosti volíte sami: zvolte takové, které zachytíte, aniž byste se nakláněli k obrazovce. Přetáhněte oddělovač pod pruhem v [okně našeptávače](/interface/prompter#the-window), aby byl vyšší.

### Pomocníci {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Nastavení → Našeptávač: pomocníci a měsíční stropy" />

Pomocník je to, čím má našeptávač být. *Každý z nich poslouchá probíhající hovor a píše něco do okna našeptávače: slova tak, jak padají, jejich překlad, nebo nápovědu, co říct dál.* Který spustit, vybíráte v okně našeptávače. Program přináší čtyři:

| Pomocník | Co píše | Ptá se modelu |
| --- | --- | --- |
| **Titulky** | Slova obou stran, jak zaznívají. | ne |
| **Překlad** | Slova druhé strany přeložená do jazyka programu. | ano |
| **Námitky v hovoru** | Pro toho, kdo prodává po telefonu: když zákazník vznese námitku, námitku na jednom řádku a jeden řádek, který na ni odpovídá. | ano |
| **Pomoc při pohovoru** | Pro toho, s kým se vede pohovor: odpověď na právě položenou otázku na několika krátkých řádcích nebo to, co zahrnout do další odpovědi. | ano |

**▲** a **▼** mění pořadí a to je pořadí rozbalovacího seznamu v [okně našeptávače](/interface/prompter#the-window). **Přidat** vytvoří vlastního pomocníka. **Obnovit výchozí** vrátí pokyny a pravidla do stavu, v jakém přišly s programem, tady i ve [Zpracování](/ai-processing/processing#defaults); vaše jazykové modely zůstanou nedotčeny.

### Karta pomocníka {#an-assistants-card}
Klepnutím na pomocníka se otevře jeho karta. Je to stejná karta jako u [pokynu](/ai-processing/prompt-studio) ve Zpracování, s několika vlastními ovládacími prvky.

<Shot name="42_prompter_assistant" alt="Karta pomocníka Námitky v hovoru: rozpoznávač, kdy replika skončila, role a pokyn" />

| Pole | Co dělá |
| --- | --- |
| **Název** | Název v seznamu a v okně našeptávače. |
| **Tvar odpovědi** a **Poslat také** | Jako u každého pokynu: tvar odpovědi a instrukce posílané spolu s ní. Dodávaní pomocníci odpovídají ve formě **Próza**. |
| **Rozpoznávač** | Který rozpoznávač poslouchá. Nabízejí se jen ty, které umějí poslouchat, zatímco někdo mluví. |
| **Kdy replika skončila** | Kdo rozhodne, že replika je u konce a dá se na ni odpovědět: **Rozhodne rozpoznávač**, **Po pauze** nebo **Jen když si řeknu** — pak replika skončí, když stisknete **Nápověda**. Šest rozpoznávačů samo řekne, kde replika končí, čtyři ne; **Rozhodne rozpoznávač** se tam, kde odpověď nemá, spolehne na pauzu, a proto je to nastavení, které je dobré nechat. |
| **Rozpoznávat i mou stranu** | Druhá relace u téhož rozpoznávače, za dvojnásobnou cenu, aby se v přepisu objevila i vaše vlastní slova. Vstupují do toho, co se řekne modelu, ale nikdy nejsou tím, na co se ho ptá. |
| **Role — čím model je** | Posílá se modelu před pokynem, například *Pomáháte člověku, který prodává po telefonu…* |
| **Pokyn** | Na co se model ptá u každé repliky. `{{reply}}` je replika, která právě skončila, a `{{conversation}}` vše, co zaznělo předtím. *Nechte prázdné a modelu se na nic neptá: slova se zobrazují, jak přicházejí, a platí se jen rozpoznávač.* Přesně to jsou **Titulky**. |
| **Odpovídat v** | Jazyk nápovědy: **Cokoli, co bylo řečeno**, **Jazyk tohoto programu** nebo **Vždy jeden jazyk** s jeho kódem. |
| **Model** | **Výchozí** nebo jeden z vašich [jazykových modelů](/ai-processing/processing#language-models). |

### Výdaje {#spending}
*Odděleně od toho, co smějí pravidla utratit za dokončené rozhovory. Měsíc shrnutí nesmí umět uprostřed rozhovoru umlčet našeptávače.*

| Pole | Když je dosaženo |
| --- | --- |
| **Rozpoznávače, za měsíc** | Běžící našeptávač se zastaví na konci repliky, u které právě je — nikdy uprostřed slova. |
| **Modely, za měsíc** | Nápovědy se zastaví a titulky pokračují. |

Prázdné znamená bez stropu. Cena minuty živého zvuku je **Cena za minutu** rozpoznávače, zadaná na jeho kartě v [Přepis](/ai-processing/transcription#the-recognisers-card); bez ní našeptávač upozorní, že zobrazená částka je odhad.
