---
title: Hlavní okno
sidebar_position: 1
description: Telefon vlevo, knihovna a nastavení vpravo — rozložení hlavního okna AI Softphone.
---

Hlavní okno je samotný telefon. Ve výchozím rozvržení **Jedno okno** stojí telefon vlevo a vše ostatní se otevírá vpravo. [Rozvržení lze změnit](../program/appearance.md).

<Shot name="03_contacts" full alt="Hlavní okno: telefon vlevo a karta Kontakty vpravo" />

## Telefon {#the-phone}

Levá strana obsahuje shora dolů:

- pole **Číslo**;
- klávesnici a tlačítko volání;
- štítky účtů;
- tlačítka, která sledují jiné linky;
- čtyři místa, kam jít: **Nahrávky**, **Kontakty**, **Historie** a **Nastavení**.

### Vytáčení {#the-dialler}

- **Číslo** — napište nebo vložte číslo, které chcete volat. Ikona hodin na pravém konci pole otevře seznam čísel, která jste nedávno volali nebo ze kterých vám někdo volal.
- Kulaté klávesy **1–9**, **\***, **0** a **#** doplňují číslo a během hovoru posílají tóny (DTMF).
- Tlačítko se sluchátkem hovor uskuteční. Zůstává šedé, dokud není zadáno číslo.

<Shot name="22_last_calls" full alt="Seznam posledních hovorů pod polem Číslo vedle karty Historie" />

Když je seznam posledních čísel otevřený, pole ukazuje šipku a tlačítko volání se přesune vpravo od něj. Každá položka je jméno, případně číslo, pokud volající není v [Kontaktech](contacts-history.md), a datum. Červené sluchátko označuje zmeškaný hovor, počet v závorce — například *Petr Svoboda (2)* — znamená několik hovorů se stejnou stranou za sebou.

### Štítky účtů {#the-account-chips}

Pod klávesnicí je jeden štítek pro každý [účet](../sip-accounts/setup.md). Zelená tečka znamená, že účet je registrován na ústředně. Zvýrazněný štítek (na obrázku **305 Podpora**) je účet, ze kterého půjde další hovor; jiný vyberete stisknutím jeho štítku. Kulaté červené tlačítko vpravo od štítků je Nerušit.

### Tlačítka {#the-buttons}

Pod štítky jsou [tlačítka](../sip-accounts/buttons.md), která jste vytvořili pro kolegy a linky, každé s kontrolkou — na obrázcích **Novák** a **Sklad**. Stisknutím tlačítka vytočíte jeho číslo.

### Nahrávky, Kontakty, Historie, Nastavení {#recordings-contacts-history-settings}

Tyto čtyři položky dole otevírají kartu vpravo, jednu vedle druhé: [Nahrávky](../interface/recordings.md), [Kontakty a Historie](contacts-history.md) a [Nastavení](settings-overview.md). Otevřené karty zůstávají v řadě nahoře na pravé straně.

## Probíhající hovor {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/cs/light/call.png" alt="Probíhající hovor" />

Během hovoru se pole s číslem přesune nahoru s ikonou klávesnice uvnitř a hovor se zobrazí na kartě:

- stav a délka hovoru (**V hovoru · 0:21**), jméno druhé strany, **Linka** a název účtu, na kterém hovor je, a číslo;
- dva svislé ukazatele úrovně po stranách karty, jeden pro každý kanál zvuku;
- řada tlačítek: nahrávání (kroužek), ztlumení (mikrofon), přidržení (pauza) a červené tlačítko **Zavěsit**;
- druhá řada: přepojení (sluchátko se šipkou) a klávesnice.

Hovor lze přepojit rovnou, nebo až poté, co jste s dotyčným nejdřív promluvili.

Pokud je číslo v **Kontaktech**, místo čísla se zobrazí jméno. Stejné akce mají [klávesové zkratky](../program/shortcuts.md): přijmout, zavěsit, přidržet a ztlumit.

## Několik hovorů najednou {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/cs/light/calls.png" alt="Několik hovorů" />

Příchozí hovor ohlásí banner, ať pracujete kdekoli, i když je telefon skrytý. Nový příchozí hovor se objeví na vlastní kartě nad seznamem se zeleným, žlutým a červeným tlačítkem a řádkem, se kým právě mluvíte. Seznam pod ní ukazuje každý hovor s jeho stavem — **Přidrženo**, **V hovoru**, **Příchozí hovor** — a účtem, na kterém je. Ikona pauzy označuje přidržený hovor a ikona reproduktoru ten, ve kterém mluvíte.

Co se stane, když vám někdo volá, zatímco už telefonujete, se nastavuje v [Nastavení hovorů](../sip-accounts/calls.md#call-waiting).

## Konference {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/cs/light/conference.png" alt="Konference" />

Spojené hovory se zobrazí jako jedna karta **Konference** na lince účtu. Každý účastník je uveden s dobou v hovoru a vlastním tlačítkem **Zavěsit**. Tlačítka pod nimi nahrávají, ztlumí a ukončí konferenci pro všechny; široké tlačítko dole konferenci znovu rozdělí na samostatné hovory.

## Zachytávání {#capture}

Když je v **Nastavení → Zachytávání** povoleno [zachytávání jiných aplikací](../capture/capture.md), objeví se mezi štítky účtů a tlačítky pruh.

<Shot name="10_settings_capture" full alt="Pruh zachytávání u paty telefonu: Zachytávání · čekám na hovor, Nahrát a dva ukazatele úrovně" />

- **Zachytávání · čekám na hovor** říká, že program čeká na rozhovor v jiné aplikaci.
- **Nahrát** spustí zachytávání ručně.
- Dva tenké pruhy pod ním ukazují úroveň zvuku: horní jste vy, dolní to, co počítač přehrává. Jak se kreslí, nastavíte v **Obraz v pruhu u paty telefonu**.

Program může žít i v oznamovací oblasti (na macOS v řádku nabídek) a vyvolat se [klávesovou zkratkou](../program/shortcuts.md).
