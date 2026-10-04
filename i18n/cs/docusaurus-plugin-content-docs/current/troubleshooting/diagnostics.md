---
title: Diagnostika
sidebar_position: 1
description: Okno, které ukazuje každé slovo, které si telefon a ústředna řeknou, soubor protokolu a kde program uchovává své soubory.
---

Okno **Diagnostika** ukazuje, co si telefon a ústředna říkají, v okamžiku, kdy to říkají. Je to první místo, kam se podívat, když se účet nezaregistruje nebo se hovor nespojí, a okno, které po vás bude chtít IT oddělení.

Otevírá se z **Nastavení → Diagnostika** tlačítkem **Otevřít diagnostiku**.

<Shot src="https://ai-softphone.com/screenshots/macos/cs/light/diagnostics.png" alt="Okno Diagnostika" />

Ukazuje každou SIP zprávu, kterou telefon pošle nebo přijme, v okamžiku, kdy k tomu dochází, spolu se statistikami zvuku probíhajících hovorů. Sbírá jen tehdy, když je otevřené, a po zavření nic neuchovává.

## SIP {#sip}

Karta **SIP** je protokol signalizace.

- Každá zpráva je řádek s časem (na milisekundy), tím, co to je, a kam šla: šipka doprava je odeslaná telefonem, šipka doleva přijatá ze serveru. Pod ním: `to` nebo `from` adresa serveru a přenos (například *over UDP*).
- Zprávu lze rozbalit a zobrazit její hlavičky celé (třetí zpráva na obrázku).
- **Hledat** najde text v protokolu.
- **Vymazat** ho vyprázdní.

Příklad na snímku je zdravá registrace: telefon pošle `REGISTER`, server odpoví `200 OK (REGISTER)`.

## Hovory {#calls}

Druhá karta, **Hovory**, ukazuje metriky kvality pro každý probíhající hovor.

## Karta Diagnostika v nastavení {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Nastavení → Diagnostika" />

### Podrobnost protokolu {#log-detail}

Rozbalovací seznam vybírá, kolik toho program zapisuje do souboru protokolu; na obrázku je to **Podrobné**. Platí okamžitě, i u hovoru, který už probíhá — což je ten, jehož záznam chcete. Nejpodrobnější úroveň zapíše každou SIP zprávu. Je velká, ale hesla se z ní odstraní dřív, než se cokoli zapíše, takže soubor lze bezpečně poslat s žádostí o podporu.

**Poslat kopii do systémového protokolu** zapisuje protokol i do vlastního protokolu systému, pro počítač, jehož protokoly se sbírají centrálně. Soubor níže se zapisuje tak jako tak a je to ten, který přiložíte k žádosti o podporu.

### Soubory {#files}

Karta uvádí, kde program uchovává své soubory a jak jsou velké. Na macOS:

| Soubor | Kde | Obsahuje |
| --- | --- | --- |
| Nastavení | `~/Library/Preferences/ai-softphone/settings.json` | Nastavení. Nikdy hesla ani tokeny. |
| Databáze | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontakty, historii, přepisy a zápisy. |
| Nahrávky | `~/Library/Application Support/ai-softphone/recordings` | Zvuk nahrávek. |
| Protokol | `~/Library/Logs/ai-softphone/ai-softphone.log` | Protokol. |

Pod seznamem **Otevřít** ukáže protokol a **Vymazat** ho vyprázdní. Protokol vymažte těsně předtím, než problém zopakujete; vymazání nelze vrátit.

## Co poslat podpoře {#what-to-send-to-support}

1. Nastavte **Podrobnost protokolu** na nejpodrobnější úroveň.
2. Stiskněte **Vymazat** a problém zopakujte.
3. Pošlete soubor protokolu, nebo otevřete **Nastavení → O programu**, napište nám tam a zaškrtněte **Přiložit protokol** — viz [O programu](../application/about.md#feedback).

U problému s registrací nebo hovorem pošlete i řádky neúspěšného pokusu z karty **SIP**.

Část programu, která za tím vším stojí — SIP trasa, statistiky médií a čítače — lze vypnout v [Modulech](../application/modules.md) (**Diagnostika**).
