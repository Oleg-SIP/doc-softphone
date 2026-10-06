---
slug: /
title: Dokumentace AI Softphone
sidebar_position: 1
description: Co je AI Softphone, na čem běží a kde je popsána každá část programu.
---

[AI Softphone](https://ai-softphone.com/?lang=cs) je softphone pro IP ústřednu, který navíc z každého hovoru udělá text a písemné shrnutí. Rozhovor se do něj dostane třemi cestami a všechny tři končí ve stejné knihovně se stejnou nahrávkou, přepisem a zápisem:

- **hovor** uskutečněný nebo přijatý v programu, přes libovolnou IP ústřednu nebo SIP operátora;
- **schůzka** v Zoomu, Teams, Meetu nebo jiné aplikaci, nahraná přímo z počítače;
- **nahrávka, kterou už máte** — z mobilu, diktafonu nebo jiného systému — přidaná do knihovny.

Nahrávky, přepisy a historie se ukládají do souboru, který patří vám. Není potřeba žádný účet ani předplatné a program je svobodný software pod licencí GPL v2.

## Od rozhovoru k zápisu {#from-a-conversation-to-a-write-up}

1. Přijde rozhovor: hovor, schůzka nebo soubor.
2. Nahrává se do dvou kanálů, takže to, co jste řekli vy, a to, co řekla druhá strana, zůstává oddělené.
3. Přepíše se mluvčí po mluvčím a souběžně se zvukem.
4. Jazykový model, který jste si vybrali, z něj udělá zápis: shrnutí, úkoly, kategorii, štítky a varovné signály — a na rozhovor se můžete i zeptat.

## Stažení a systémové požadavky {#download-and-system-requirements}

Program je zdarma ke stažení na [ai-softphone.com](https://ai-softphone.com/?lang=cs#download): instalátor (`.exe`) pro Windows, obraz disku (`.dmg`) pro macOS a AppImage nebo `.deb` pro Linux. Instalátor, obraz disku ani AppImage nepotřebují předem nic instalovat — Qt, OpenSSL i běhové prostředí C++ jsou jejich součástí. Výjimkou je `.deb`: používá běhové prostředí C++ ze systému, viz níže. Budete potřebovat SIP účet od svého operátora nebo z ústředny, kterou sami provozujete. Nahrávání funguje hned po instalaci; přepis a zápis potřebují službu, kterou si vyberete, nebo model na vlastním počítači.

| Systém | Požadavky |
| --- | --- |
| macOS | macOS 14.4 nebo novější; pouze Apple silicon — Mac s procesorem Intel jej neotevře, ani přes Rosettu; grafika Metal; 160 MB místa na disku plus nahrávky. Systém se jednou zeptá na přístup k mikrofonu. |
| Windows | Windows 10 verze 1809 (sestavení 17763) nebo novější a Windows 11; 64bitový procesor Intel nebo AMD; Direct3D 11 nebo OpenGL 2.1; 250 MB místa na disku plus nahrávky. |
| Linux | Ubuntu 22.04 LTS nebo novější, Debian 12 nebo novější a cokoli stejně starého — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; knihovna GNU C 2.35 nebo novější; 64bitový procesor Intel nebo AMD; OpenGL 2.1 nebo OpenGL ES 2.0, na X11 nebo Waylandu; PipeWire nebo PulseAudio (ALSA, kde není ani jedno); 200 MB místa na disku plus nahrávky. Ikona v oznamovací oblasti potřebuje prostředí s oblastí pro stavové ikony. |

Na Linuxu běží AppImage na každé distribuci tohoto stáří: nastavte ji jako spustitelnou a spusťte. Balíček `.deb` navíc potřebuje systémové běhové prostředí C++ z GCC 13, které má Ubuntu 24.04 a Debian 13, ale nemá Ubuntu 22.04; na čemkoli starším použijte AppImage.

Rozhraní je k dispozici ve třiceti jazycích; vybírá se ve [Vzhledu](/program/appearance) a mění se bez restartu.

Snímky obrazovky v této dokumentaci jsou pořízeny na macOS a zobrazují se zmenšené: kliknutím je zobrazíte v plné velikosti. Na ostatních systémech program vypadá i funguje stejně.

## První kroky {#first-steps}

1. [Přidejte účet](sip-accounts/setup.md) pro svou ústřednu nebo SIP operátora.
2. [Vyberte mikrofon a reproduktory](sip-accounts/devices.md) a zkuste zkušební hovor.
3. Rozhodněte, [které hovory se nahrávají](recordings/call-recording.md).
4. Pokud chcete přepisy a zápisy, přidejte [rozpoznávač](ai-processing/transcription.md) a [jazykový model](ai-processing/processing.md).

**Nastavení → Přehled** tento seznam vede za vás: zelená tečka označuje hotový krok, červená krok, který zbývá. Viz [Přehled nastavení](interface/settings-overview.md).

## Kam dál {#where-to-read-next}

| Pokud chcete… | Čtěte |
| --- | --- |
| Vyznat se v oknech | [Rozhraní](interface/main-window.md) |
| Připojit telefon k ústředně | [Nastavení SIP účtu](sip-accounts/setup.md) |
| Vybrat mikrofon, reproduktory a vyzvánění | [Zařízení](sip-accounts/devices.md) |
| Nastavit kodeky, čekání hovoru a historii hovorů | [Nastavení hovorů](sip-accounts/calls.md) |
| Dát kolegy na tlačítka jedním stiskem | [Tlačítka](sip-accounts/buttons.md) |
| Rozhodnout, které hovory se nahrávají a jak dlouho | [Nahrávání hovorů](recordings/call-recording.md) |
| Poslouchat, prohledávat a číst své rozhovory | [Okno nahrávek](recordings/recordings-window.md) |
| Nahrát schůzku v jiné aplikaci | [Zachytávání](capture/capture.md) |
| Vybrat rozpoznávač, který mění řeč v text | [Přepis](ai-processing/transcription.md) |
| Rozhodnout, která AI dělá zápisy a kolik smí stát | [Zpracování](ai-processing/processing.md) |
| Změnit kategorie, štítky a varovné signály | [Slovníky](ai-processing/dictionaries.md) |
| Změnit rozvržení, motiv, spouštění a klávesové zkratky | [Vzhled](program/appearance.md), [Spuštění](program/startup.md) a [Zkratky](program/shortcuts.md) |
| Propojit CRM nebo jiný program | [Webhooky](integration/webhooks.md) a [Místní REST API](integration/rest-api.md) |
| Vidět, co si telefon a ústředna říkají | [Diagnostika](troubleshooting/diagnostics.md) |
| Najít příčinu problému | [Časté problémy](troubleshooting/common-problems.md) |
| Vypnout části programu | [Moduly](application/modules.md) |
| Zkontrolovat verzi, aktualizace a obsah hlášení o používání | [O programu](application/about.md) |

Stránky jdou ve stejném pořadí jako karty v **Nastavení**.

## Soukromí {#privacy}

- Ve výchozím stavu vše zůstává ve vašem počítači: nahrávky, přepisy a historie jsou v souboru, který patří vám. Nic o rozhovoru — ani číslo, ani jméno, ani slovo z toho, co zaznělo — nejde nikam, kam jste to sami neposlali.
- Hesla účtů, hodnota hlavičky webhooku a token API se ukládají do klíčenky operačního systému, nikdy do souboru s nastavením.
- Nová verze se ohlásí, jakmile vyjde — nikdy během hovoru — a nainstaluje se, jen když to řeknete.
- Program posílá jedno malé hlášení o používání denně. Než odejde první, ukáže vám, co obsahuje, a vy volíte, kolik ho nese: **Základní** nebo **Rozšířený**. Nikdy neobsahuje čísla, kontakty, adresu vaší ústředny ani nic z toho, co v rozhovoru zaznělo. Úplný seznam je v [O programu](/application/about#telemetry).
- Program je svobodný software pod licencí GPL v2.
