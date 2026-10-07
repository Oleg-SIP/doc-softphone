---
title: Hlavné okno
sidebar_position: 1
description: Telefón vľavo, knižnica a nastavenia vpravo — rozloženie hlavného okna AI Softphone.
---

Hlavné okno je samotný telefón. Pri predvolenom rozložení, **Jedno okno**, je telefón vľavo a všetko ostatné sa otvára vpravo. [Rozloženie sa dá zmeniť](../program/appearance.md).

<Shot name="03_contacts" full alt="Hlavné okno: telefón vľavo a karta Kontakty vpravo" />

## Telefón {#the-phone}

Zhora nadol obsahuje ľavá strana:

- pole **Číslo**;
- klávesnicu a tlačidlo volania;
- štítky účtov;
- tlačidlá, ktoré sledujú iné klapky;
- štyri miesta, kam ísť: **Nahrávky**, **Kontakty**, **História** a **Nastavenia**.

### Vytáčanie {#the-dialler}

- **Číslo** — napíšte alebo vložte číslo, na ktoré chcete volať. Ikona hodín na pravom konci poľa otvorí zoznam čísel, na ktoré ste nedávno volali alebo z ktorých vám volali.
- Okrúhle klávesy **1–9**, **\***, **0** a **#** dopĺňajú číslo a počas hovoru posielajú tóny (DTMF).
- Tlačidlo so slúchadlom uskutoční hovor. Zostáva sivé, kým nie je zadané číslo.

<Shot name="22_last_calls" full alt="Zoznam nedávnych hovorov pod poľom Číslo, vedľa karty História" />

Keď je zoznam nedávnych čísel otvorený, pole ukazuje šípku a tlačidlo volania sa presunie napravo od nej. Každá položka je meno, alebo číslo, ak volajúci nie je v [Kontaktoch](contacts-history.md), s dátumom. Červené slúchadlo označuje zmeškaný hovor; počet opakovaní v zátvorkách — napríklad *Technická podpora (4)* — znamená niekoľko hovorov s tou istou stranou po sebe.

### Štítky účtov {#the-account-chips}

Pod klávesnicou je jeden štítok pre každý [účet](../sip-accounts/setup.md). Zelená bodka znamená, že účet je zaregistrovaný na ústredni. Zvýraznený štítok (na obrázku **305 Podpora**) je účet, z ktorého pôjde ďalší hovor; stlačením iného štítka ho zmeníte. Okrúhle červené tlačidlo napravo od štítkov je režim Nerušiť.

### Tlačidlá {#the-buttons}

Pod štítkami sú [tlačidlá](../sip-accounts/buttons.md), ktoré ste vytvorili pre kolegov a linky, každé s kontrolkou — na obrázkoch **Horváth** a **Sklad**. Stlačením tlačidla vytočíte jeho číslo.

### Nahrávky, Kontakty, História, Nastavenia {#recordings-contacts-history-settings}

Tieto štyri položky dole otvárajú kartu vpravo, jednu vedľa druhej: [Nahrávky](../interface/recordings.md), [Kontakty a História](contacts-history.md) a [Nastavenia](settings-overview.md). Karty, ktoré ste otvorili, zostávajú v rade navrchu pravej strany.

## Prebiehajúci hovor {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Prebiehajúci hovor" />

Kým hovor prebieha, pole s číslom sa presunie navrch s ikonou klávesnice vnútri a hovor sa zobrazí na karte:

- stav a dĺžka hovoru (**V hovore · 0:21**), meno druhej strany, **Linka** a názov účtu, na ktorom hovor je, a číslo;
- dva zvislé ukazovatele úrovne po stranách karty, jeden pre každý kanál zvuku;
- rad tlačidiel: nahrávanie (krúžok), stlmenie (mikrofón), podržanie (pauza) a červené tlačidlo **Zavesiť**;
- druhý rad: prepojenie (slúchadlo so šípkou) a klávesnica.

Hovor sa dá prepojiť priamo, alebo až potom, čo ste sa s osobou najprv porozprávali.

Ak je číslo známe v **Kontaktoch**, namiesto čísla sa zobrazí meno. Rovnaké akcie majú [klávesové skratky](../program/shortcuts.md): prijatie, zavesenie, podržanie a stlmenie.

## Viac hovorov naraz {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Viac hovorov" />

Prichádzajúci hovor ohlási banner, nech pracujete kdekoľvek, aj keď je telefón skrytý. Nový prichádzajúci hovor sa objaví na vlastnej karte nad zoznamom, so zeleným, žltým a červeným tlačidlom a riadkom, ktorý hovorí, s kým práve hovoríte (**V hovore s …**). Zoznam nižšie ukazuje každý hovor s jeho stavom — **Podržané**, **V hovore**, **Prichádzajúci hovor** — a účtom, na ktorom je. Ikona pauzy označuje podržaný hovor a ikona reproduktora ten, v ktorom práve hovoríte.

Čo sa stane, keď niekto volá, kým už máte hovor, sa nastavuje v [Nastaveniach hovorov](../sip-accounts/calls.md#call-waiting).

## Konferencia {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konferencia" />

Spojené hovory sa zobrazia ako jedna karta **Konferencia** na linke účtu. Každý účastník je uvedený s časom v hovore a vlastným tlačidlom **Zavesiť**. Tlačidlá nižšie nahrávajú, stlmia a ukončia konferenciu pre všetkých; široké tlačidlo dole rozdelí konferenciu späť na samostatné hovory.

## Zachytávanie {#capture}

Keď je [zachytávanie iných aplikácií](../capture/capture.md) povolené v **Nastavenia → Zachytávanie**, medzi štítkami účtov a tlačidlami sa objaví pruh.

<Shot name="10_settings_capture" full alt="Pruh Zachytávanie pri päte telefónu: Zachytávanie · pripravené, Nahrať a dva ukazovatele úrovne" />

- **Zachytávanie · pripravené** hovorí, že program čaká na rozhovor v inej aplikácii.
- **Nahrať** spustí zachytávanie ručne.
- Dva tenké pruhy pod ním ukazujú úroveň zvuku: horný ste vy, dolný to, čo počítač prehráva. Ako sa kreslia, sa nastavuje v **Obraz v pruhu pri päte telefónu**.

Program môže žiť aj v oblasti oznámení (na paneli s ponukami v macOS) a dá sa privolať [klávesovou skratkou](../program/shortcuts.md).
