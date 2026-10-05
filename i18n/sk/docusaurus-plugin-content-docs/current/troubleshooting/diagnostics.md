---
title: Diagnostika
sidebar_position: 1
description: Okno, ktoré ukazuje každé slovo, ktoré si telefón a ústredňa hovoria, súbor záznamu a kde program uchováva svoje súbory.
---

Okno **Diagnostika** ukazuje, čo si telefón a ústredňa hovoria, práve keď to hovoria. Je to prvé miesto, kam sa pozrieť, keď sa účet nechce zaregistrovať alebo sa hovor nespojí, a okno, ktoré vás IT oddelenie požiada poslať.

Otvára sa z **Nastavenia → Diagnostika** tlačidlom **Otvoriť diagnostiku**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Okno Diagnostika" />

Ukazuje každú SIP správu, ktorú telefón odošle alebo prijme, práve keď sa to deje, spolu so zvukovými štatistikami prebiehajúcich hovorov. Údaje zbiera iba vtedy, keď je otvorené, a po zatvorení si nič neponechá.

## SIP {#sip}

Karta **SIP** je záznam signalizácie.

- Každá správa je riadok s časom (na milisekundy), tým, čo je, a tým, kam išla: šípka doprava je odoslaná telefónom, šípka doľava prijatá zo servera. Pod ním: `to` alebo `from` adresa servera a prenos (napríklad *cez UDP*).
- Správu možno rozbaliť a zobraziť jej úplné hlavičky (tretia správa na obrázku).
- **Hľadať** nájde text v zázname.
- **Vymazať** ho vyprázdni.

Príklad na snímke obrazovky je správna registrácia: telefón pošle `REGISTER`, server odpovie `200 OK (REGISTER)`.

## Hovory {#calls}

Druhá karta, **Hovory**, ukazuje ukazovatele kvality každého prebiehajúceho hovoru.

## Karta Diagnostika v nastaveniach {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Nastavenia → Diagnostika" />

### Podrobnosť záznamu {#log-detail}

Rozbaľovací zoznam vyberá, koľko program zapisuje do svojho súboru záznamu; na obrázku je to **Podrobné**. Platí to okamžite, aj pre hovor, ktorý už prebieha — a práve z neho chcete mať záznam. Najpodrobnejšie nastavenie zapisuje každú SIP správu. Je to veľa, ale heslá sa odstránia skôr, než sa čokoľvek zapíše, takže súbor sa dá bezpečne poslať so žiadosťou o podporu.

**Poslať kópiu do systémového záznamu** zapisuje záznam aj do vlastného záznamu systému, pre počítač, ktorého záznamy sa zbierajú centrálne. Súbor nižšie sa zapisuje v každom prípade a práve ten treba priložiť k žiadosti o podporu.

### Súbory {#files}

Karta uvádza, kde program uchováva svoje súbory a aké veľké sú. V macOS:

| Súbor | Kde | Obsahuje |
| --- | --- | --- |
| Nastavenia | `~/Library/Preferences/ai-softphone/settings.json` | Nastavenia. Nikdy heslá ani tokeny. |
| Databáza | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontakty, históriu, prepisy a spracovania. |
| Nahrávky | `~/Library/Application Support/ai-softphone/recordings` | Zvuk nahrávok. |
| Záznam | `~/Library/Logs/ai-softphone/ai-softphone.log` | Záznam. |

Pod zoznamom **Otvoriť** zobrazí záznam a **Vymazať** ho vyprázdni. Záznam vymažte tesne predtým, než problém zopakujete; vymazanie sa nedá vrátiť.

## Čo poslať podpore {#what-to-send-to-support}

1. Nastavte **Podrobnosť záznamu** na najpodrobnejšiu úroveň.
2. Stlačte **Vymazať** a potom problém zopakujte.
3. Pošlite súbor záznamu, alebo otvorte **Nastavenia → O programe**, napíšte nám odtiaľ a zaškrtnite **Priložiť záznam** — pozrite [O programe](../application/about.md#feedback).

Pri probléme s registráciou alebo hovorom pošlite aj riadky neúspešného pokusu z karty **SIP**.

Časť programu, ktorá za tým všetkým stojí — sledovanie SIP, štatistiky médií a počítadlá —, sa dá vypnúť v [Moduloch](../application/modules.md) (**Diagnostika**).
