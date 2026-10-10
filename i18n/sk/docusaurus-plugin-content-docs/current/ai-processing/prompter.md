---
title: Nastavenia našepkávača
sidebar_label: Našepkávač
sidebar_position: 5
description: "Nastavenia → Našepkávač: čo potrebuje živý našepkávač, prepínač, ktorý ho povoľuje, veľkosť textu, pomocníci a ich karty a mesačné stropy toho, čo smie minúť."
---

V **Nastavenia → Našepkávač** sa živý našepkávač povoľuje, nastavuje sa jeho veľkosť a dostáva svojich pomocníkov. Samotný našepkávač — okno, ktoré zapisuje hovor vo chvíli, keď zaznieva, a radí, čo odpovedať, a skúška na nahrávke — je opísaný na stránke [Okno našepkávača](/interface/prompter).

[Prehľad](/interface/settings-overview) nastavení uvádza našepkávač v časti **Našepkávač** v dvoch krokoch: **Povoliť našepkávanie** a **Spustiť našepkávanie**.

## Čo potrebuje {#what-it-needs}
- **Rozpoznávač, ktorý vie počúvať počas rozhovoru.** Pridáva sa v [Nastavenia → Prepis](/ai-processing/transcription#live-recognition-for-the-prompter) ako ktorýkoľvek iný rozpoznávač a potrebuje **Adresa pre našepkávača** a úspešné **Vyskúšať**.
- **Jazykový model** pre pomocníkov, ktorí niečo navrhujú. Je to model nastavený pri pomocníkovi alebo predvolený model v [Nastavenia → Spracovanie](/ai-processing/processing#language-models). Titulky nepotrebujú žiadny model.
- **Zaškrtnutie Povoliť používanie našepkávača** v **Nastavenia → Našepkávač**.

Keď sú splnené všetky tri, **Našepkávač** sa objaví v zozname v spodnej časti telefónu medzi **História** a **Nastavenia** a otvorí [okno našepkávača](/interface/prompter). Časť programu, ktorá to zabezpečuje, je modul **Našepkávač**, *Počúva rozhovor počas jeho priebehu a napovedá*; dá sa vypnúť v [Moduly](/application/modules).

## Nastavenia → Našepkávač {#settings--prompter}
<Shot name="41_settings_prompter" alt="Nastavenia → Našepkávač: prepínač, ktorý povoľuje našepkávač, a veľkosť textu" />

*Rozpoznávanie reči počas hovoru a nápovedy písané podľa vašich vlastných pokynov. Oboje sa účtuje po minútach.*

| Nastavenie | Predvolené | Čo robí |
| --- | --- | --- |
| **Povoliť používanie našepkávača** | vypnuté | Jediný prepínač, ktorý vôbec dovolí spustiť našepkávač. Nič iné na stránke nemá účinok, kým je vypnutý. |
| **Prepis a nápovedy** | 13 pixelov | Ako veľké sa vykresľujú oba stĺpce okna. |
| **Opakovať najnovší riadok nad stĺpcami** | zapnuté | Ukazuje najnovšiu nápovedu — alebo najnovší riadok pri pomocníkovi, ktorý nič nenavrhuje — vo vlastnom páse nad stĺpcami. |
| **Opakovaný riadok** | 20 pixelov | Ako veľký je text pásu. Zobrazuje sa, kým je pás zapnutý. |

:::caution
Hlas druhej strany sa posiela rozpoznávaču počas toho, ako hovorí, čo nie je nič menej ako nahrávanie. Kde [Nastavenia → Nahrávanie](/recordings) žiada najprv ju upovedomiť, našepkávač sa spustí až potom.
:::

Našepkávač sa číta počas hovorenia, často z väčšej vzdialenosti než zvyšok telefónu, preto si obe veľkosti volíte sami: zvoľte také, ktoré zachytíte bez nakláňania sa k obrazovke. Potiahnite oddeľovač pod pásom v [okne našepkávača](/interface/prompter#the-window), aby bol vyšší.

### Pomocníci {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Nastavenia → Našepkávač: pomocníci a mesačné stropy" />

Pomocník je to, čím má našepkávač byť. *Každý z nich počúva prebiehajúci hovor a píše niečo do okna našepkávača: slová tak, ako padajú, ich preklad, alebo nápovedu, čo povedať ďalej.* Ktorý spustiť, vyberáte v okne našepkávača. Program prináša štyroch:

| Pomocník | Čo píše | Pýta sa modelu |
| --- | --- | --- |
| **Titulky** | Slová oboch strán, keď zaznievajú. | nie |
| **Preklad** | Slová druhej strany preložené do jazyka programu. | áno |
| **Námietky v hovore** | Pre toho, kto predáva po telefóne: keď zákazník vznesie námietku, námietku v jednom riadku a jeden riadok, ktorý na ňu odpovedá. | áno |
| **Pomoc pri pohovore** | Pre toho, s kým sa vedie pohovor: odpoveď na práve položenú otázku v niekoľkých krátkych riadkoch alebo to, čo zahrnúť do ďalšej odpovede. | áno |

**▲** a **▼** menia poradie a to je poradie rozbaľovacieho zoznamu v [okne našepkávača](/interface/prompter#the-window). **Pridať** vytvorí vlastného pomocníka. **Obnoviť predvolené** vráti pokyny a pravidlá do stavu, v akom prišli s programom, tu aj v [Spracovanie](/ai-processing/processing#defaults); vaše jazykové modely zostanú nedotknuté.

### Karta pomocníka {#an-assistants-card}
Kliknutím na pomocníka sa otvorí jeho karta. Je to tá istá karta ako pri [pokyne](/ai-processing/prompt-studio) v Spracovaní, s niekoľkými vlastnými ovládacími prvkami.

<Shot name="42_prompter_assistant" alt="Karta pomocníka Námietky v hovore: rozpoznávač, kedy replika skončila, rola a pokyn" />

| Pole | Čo robí |
| --- | --- |
| **Názov** | Názov v zozname a v okne našepkávača. |
| **Tvar odpovede** a **Poslať aj** | Ako pri každom pokyne: tvar odpovede a inštrukcie posielané spolu s ňou. Dodávaní pomocníci odpovedajú vo forme **Próza**. |
| **Rozpoznávač** | Ktorý rozpoznávač počúva. Ponúkajú sa iba tie, ktoré vedia počúvať, kým niekto hovorí. |
| **Kedy replika skončila** | Kto rozhodne, že replika je na konci a dá sa na ňu odpovedať: **Rozhodne rozpoznávač**, **Po pauze** alebo **Len keď si poviem** — vtedy replika skončí, keď stlačíte **Nápoveda**. Šesť rozpoznávačov samo povie, kde replika končí, štyri nie; **Rozhodne rozpoznávač** sa tam, kde odpoveď nemá, spolieha na pauzu, a preto sa oplatí nechať ho tak. |
| **Rozpoznávať aj moju stranu** | Druhá relácia v tom istom rozpoznávači, za dvojnásobnú cenu, aby sa v prepise objavili aj vaše vlastné slová. Vstupujú do toho, čo sa povie modelu, ale nikdy nie sú tým, na čo sa ho pýta. |
| **Rola — čím model je** | Posiela sa modelu pred pokynom, napríklad *Pomáhate človeku, ktorý predáva po telefóne…* |
| **Pokyn** | Na čo sa model pýta pri každej replike. `{{reply}}` je replika, ktorá práve skončila, a `{{conversation}}` všetko, čo zaznelo predtým. *Nechajte prázdne a modelu sa na nič nepýta: slová sa zobrazujú, ako prichádzajú, a platí sa len rozpoznávač.* Presne to sú **Titulky**. |
| **Odpovedať v** | Jazyk nápovedy: **Čokoľvek, čo bolo povedané**, **Jazyk tohto programu** alebo **Vždy jeden jazyk** s jeho kódom. |
| **Model** | **Predvolený** alebo jeden z vašich [jazykových modelov](/ai-processing/processing#language-models). |

### Výdavky {#spending}
*Oddelene od toho, čo smú pravidlá utratiť za dokončené rozhovory. Mesiac zhrnutí nesmie vedieť uprostred rozhovoru umlčať našepkávača.*

| Pole | Keď sa dosiahne |
| --- | --- |
| **Rozpoznávače, za mesiac** | Bežiaci našepkávač sa zastaví na konci repliky, pri ktorej práve je — nikdy uprostred slova. |
| **Modely, za mesiac** | Nápovedy sa zastavia a titulky pokračujú. |

Prázdne znamená bez stropu. Cena minúty živého zvuku je **Cena za minútu** rozpoznávača, zadaná na jeho karte v [Prepis](/ai-processing/transcription#the-recognisers-card); bez nej našepkávač upozorní, že zobrazená suma je odhad.
