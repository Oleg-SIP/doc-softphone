---
slug: /
title: Dokumentácia AI Softphone
sidebar_position: 1
description: Čo je AI Softphone, na čom beží a kde je opísaná každá časť programu.
---

[AI Softphone](https://ai-softphone.com/) je softvérový telefón pre IP ústredňu, ktorý navyše premení každý rozhovor na text a písomné zhrnutie. Rozhovor sa k nemu môže dostať tromi spôsobmi a všetky tri skončia v tej istej knižnici, s rovnakou nahrávkou, prepisom aj spracovaním:

- **hovor** uskutočnený alebo prijatý v programe, cez akúkoľvek IP ústredňu alebo SIP operátora;
- **stretnutie** v Zoome, Teams, Meet alebo v akejkoľvek inej aplikácii, nahrané priamo z počítača;
- **nahrávka, ktorú už máte** — z mobilného telefónu, diktafónu alebo iného systému — pridaná do knižnice.

Nahrávky, prepisy a história sa uchovávajú v súbore, ktorý patrí vám. Nepotrebujete žiadny účet ani predplatné a program je slobodný softvér pod licenciou GPL v2.

## Od rozhovoru k spracovaniu {#from-a-conversation-to-a-write-up}

1. Príde rozhovor: hovor, stretnutie alebo súbor.
2. Nahrá sa na dva kanály, takže to, čo ste povedali vy, a to, čo povedala druhá strana, zostane oddelené.
3. Prepíše sa, hovoriaci po hovoriacom, synchronizovane so zvukom.
4. Jazykový model, ktorý ste si vybrali, ho spracuje: zhrnutie, úlohy, kategória, štítky a varovné signály — a rozhovoru môžete položiť otázku.

## Stiahnutie a systémové požiadavky {#download-and-system-requirements}

Program si môžete zadarmo stiahnuť z [ai-softphone.com](https://ai-softphone.com/#download): inštalátor (`.exe`) pre Windows, obraz disku (`.dmg`) pre macOS a AppImage alebo `.deb` pre Linux. Nič ďalšie netreba vopred inštalovať — Qt, OpenSSL a knižnice C++ sú súčasťou balíka. Budete potrebovať SIP účet od svojho operátora alebo z ústredne, ktorú prevádzkujete sami. Nahrávanie funguje hneď po inštalácii programu; prepis a spracovanie potrebujú službu, ktorú si vyberiete, alebo model na vlastnom počítači.

| Systém | Požiadavky |
| --- | --- |
| macOS | macOS 14.4 alebo novší; iba Apple silicon — Mac s procesorom Intel ho neotvorí, ani cez Rosettu; grafika Metal; 160 MB miesta na disku plus nahrávky. Systém sa raz spýta na mikrofón. |
| Windows | Windows 10 verzie 1809 (zostava 17763) alebo novší a Windows 11; 64-bitový procesor Intel alebo AMD; Direct3D 11 alebo OpenGL 2.1; 250 MB miesta na disku plus nahrávky. |
| Linux | Ubuntu 22.04 LTS alebo novšie, Debian 12 alebo novší a čokoľvek rovnako staré — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; knižnica GNU C 2.35 alebo novšia; 64-bitový procesor Intel alebo AMD; OpenGL 2.1 alebo OpenGL ES 2.0, na X11 alebo Waylande; PipeWire alebo PulseAudio (ALSA tam, kde nie je ani jedno); 200 MB miesta na disku plus nahrávky. Ikona v oblasti oznámení potrebuje pracovné prostredie s oblasťou stavových oznámení. |

V Linuxe AppImage beží na akejkoľvek distribúcii tohto veku: nastavte ho ako spustiteľný a spustite ho. `.deb` navyše potrebuje systémové knižnice C++ z GCC 13, ktoré majú Ubuntu 24.04 a Debian 13, ale Ubuntu 22.04 nie; na čomkoľvek staršom použite AppImage.

Rozhranie je dostupné v tridsiatich jazykoch; vyberá sa vo [Vzhľade](/program/appearance) a mení sa bez reštartu.

Snímky obrazovky v tejto dokumentácii sú urobené v macOS a zobrazené zmenšené: kliknite na snímku, aby ste ju videli v plnej veľkosti. Na ostatných systémoch program vyzerá a funguje rovnako.

## Prvé kroky {#first-steps}

1. [Pridajte účet](sip-accounts/setup.md) pre svoju ústredňu alebo SIP operátora.
2. [Vyberte mikrofón a reproduktory](sip-accounts/devices.md) a uskutočnite skúšobný hovor.
3. Rozhodnite, [ktoré hovory sa nahrávajú](recordings/call-recording.md).
4. Pridajte [rozpoznávač](ai-processing/transcription.md) a [jazykový model](ai-processing/processing.md), ak chcete prepisy a spracovania.

**Nastavenia → Prehľad** vedie tento zoznam za vás: zelená bodka označuje hotový krok, červená krok, ktorý ešte zostáva. Pozrite [Prehľad nastavení](interface/settings-overview.md).

## Kde čítať ďalej {#where-to-read-next}

| Ak chcete… | Čítajte |
| --- | --- |
| Zorientovať sa v oknách | [Rozhranie](interface/main-window.md) |
| Pripojiť telefón k ústredni | [Nastavenie SIP účtu](sip-accounts/setup.md) |
| Vybrať mikrofón, reproduktory a zvonenie | [Zariadenia](sip-accounts/devices.md) |
| Nastaviť kodeky, čakajúci hovor a záznam hovorov | [Nastavenia hovorov](sip-accounts/calls.md) |
| Dať kolegov na tlačidlá jedným dotykom | [Tlačidlá](sip-accounts/buttons.md) |
| Rozhodnúť, ktoré hovory sa nahrávajú a ako dlho | [Nahrávanie hovorov](recordings/call-recording.md) |
| Počúvať, prehľadávať a čítať svoje rozhovory | [Okno nahrávok](recordings/recordings-window.md) |
| Nahrať stretnutie vedené v inej aplikácii | [Zachytávanie](capture/capture.md) |
| Vybrať rozpoznávač, ktorý premieňa reč na text | [Prepis](ai-processing/transcription.md) |
| Rozhodnúť, ktorá AI spracúva vaše rozhovory a koľko to smie stáť | [Spracovanie](ai-processing/processing.md) |
| Zmeniť kategórie, štítky a varovné signály | [Slovníky](ai-processing/dictionaries.md) |
| Zmeniť rozloženie, motív, spúšťanie a klávesové skratky | [Vzhľad](program/appearance.md), [Spustenie](program/startup.md) a [Skratky](program/shortcuts.md) |
| Pripojiť CRM alebo iný program | [Webhooky](integration/webhooks.md) a [Miestne REST API](integration/rest-api.md) |
| Vidieť, čo si telefón a ústredňa hovoria | [Diagnostika](troubleshooting/diagnostics.md) |
| Nájsť príčinu problému | [Bežné problémy](troubleshooting/common-problems.md) |
| Vypnúť časti programu | [Moduly](application/modules.md) |
| Skontrolovať verziu, aktualizácie a obsah hlásenia o používaní | [O programe](application/about.md) |

Stránky idú v poradí kariet v **Nastaveniach**.

## Súkromie {#privacy}

- Predvolene všetko zostáva vo vašom počítači: nahrávky, prepisy a história sú v súbore, ktorý patrí vám. Nič z rozhovoru — ani číslo, ani meno, ani slovo z toho, čo sa povedalo — nejde nikam, kam ste to sami neposlali.
- Heslá účtov, hodnota hlavičky webhooku a token API sa uchovávajú v kľúčenke operačného systému, nikdy v súbore nastavení.
- Nová verzia sa ohlási, keď vyjde — nikdy počas hovoru — a nainštaluje sa, až keď to poviete.
- Program posiela jedno malé hlásenie o používaní denne. Pred odoslaním prvého vám ukáže, čo obsahuje, a vy si vyberiete, koľko toho nesie: **Základný** alebo **Rozšírený**. Nikdy neobsahuje čísla, kontakty, adresu vašej ústredne ani nič, čo zaznelo v rozhovore. Úplný zoznam je v [O programe](/application/about#telemetry).
- Program je slobodný softvér pod licenciou GPL v2.
