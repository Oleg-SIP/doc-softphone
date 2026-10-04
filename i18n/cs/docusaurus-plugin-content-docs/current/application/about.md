---
title: O programu
sidebar_position: 2
description: Verze, aktualizace, vaše země, licence, obsah hlášení o používání, formulář zpětné vazby a z čeho je program postaven.
---

**Nastavení → O programu** obsahuje vše o samotném programu.

<Shot name="20_settings_about" alt="Nastavení → O programu" />

## Verze a země {#version-and-country}

Nahoře je název, **Verze** (na obrázku 1.0.1) a odkaz na web [ai-softphone.com](https://ai-softphone.com/?lang=cs).

**Země** říká programu, kde jste. Pomáhá vybrat nejlepší aktualizační server a otevírá cestu k jazykovým a rozpoznávacím službám ve vaší zemi. **Zjistit automaticky** ji vyplní. Na obrázku je vybráno **Česko**.

## Aktualizace {#updates}

Karta říká, zda máte nejnovější verzi a kdy se naposledy kontrolovalo. **Zkontrolovat aktualizace** zkontroluje hned.

**Kontrolovat aktualizace automaticky**, ve výchozím stavu zapnuto, kontroluje jednou denně a krátce po spuštění telefonu. Požádá server o jeden malý soubor a nic se nestáhne ani nenainstaluje, dokud to neřeknete.

## Licence {#licence}

Program je svobodný software pod licencí GPL-2.0-or-later. Dodává se bez jakékoli záruky a smíte ho šířit dál za podmínek této licence; celý text je v souboru `LICENSE`.

## Telemetrie {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Nastavení → O programu: co obsahuje hlášení o používání" />

Program posílá jedno malé hlášení o používání denně. Než odejde první, ukáže vám, co obsahuje, a karta ho uvádí:

| | Co se posílá |
| --- | --- |
| **Vždy odesíláno** | Že byla aplikace spuštěna, její verze a jazyk rozhraní; verze operačního systému, místní nastavení, země a časové pásmo. |
| **Odesíláno navíc, v režimu Rozšířený** | Čítače hovorů a zachycených rozhovorů; výrobce a verze připojené ústředny, nikdy její adresa; kolik kroků [Přehledu](/interface/settings-overview) je hotovo a zvolené rozvržení. |
| **Nikdy neodesíláno, v žádném režimu** | Čísla, která jste volali nebo ze kterých vám volali; účty, hesla ani nic z klíčenky; kontakty, rozhovory, přepisy ani nahrávky; nic, co jste napsali, a žádná soukromá data v počítači. |

Každá instalace si vytvoří jeden náhodný identifikátor, aby šlo hlášení ze stejné kopie programu poznat jako jedno. Není odvozen od ničeho o vás ani o vašem počítači a nikoho nejmenuje — ale protože trvá, hlášení, která nese, lze propojit mezi sebou. To je činí pseudonymními, ne anonymními.

Základní hlášení má jako právní základ oprávněný zájem: vědět, které verze se používají, je to, co umožní, aby se oprava dostala k lidem, kteří ji potřebují. Vše, co přidává rozšířené hlášení, je tam proto, že jste to zvolili, a můžete to tu kdykoli změnit.

### Hlášení {#reporting}

| Volba | |
| --- | --- |
| **Rozšířený** | Základní hlášení a to, co uvádí *Odesíláno navíc*. Vybráno na obrázku. |
| **Základní** | Jen to, co je *Vždy odesíláno*. |
| **Vypnuto** | Žádné hlášení. Dostupné jen v edici Enterprise; jinak je volba šedá. |

## Zpětná vazba {#feedback}

<Shot name="20c_settings_about_bottom" alt="Nastavení → O programu: formulář zpětné vazby a komponenty, ze kterých je program postaven" />

Formulář, kterým napíšete vývojářům, aniž byste opustili program.

| Pole | |
| --- | --- |
| **Předmět** a **Zpráva** | Co chcete říct. |
| **Vaše jméno** a **Adresa pro odpověď** | Obojí je nepovinné. Bez adresy není jak odpovědět. |
| **Přiložit protokol** | Přidá konec protokolu, asi 512 kB. Viz [Diagnostika](/troubleshooting/diagnostics). |

**Odeslat** zůstává šedé, dokud není co poslat.

## Postaveno s {#built-with}

Komponenty, na kterých je program postaven, každá se svou licencí: Qt 6 (GPL-2.0 nebo GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (public domain), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) a PulseAudio client (LGPL-2.1-or-later). Každá se používá pod licencí uvedenou vedle ní; kde komponenta nabízí několik, je uvedena ta zvolená.
