---
title: Diagnosztika
sidebar_position: 1
description: Az ablak, amely megmutatja a telefon és az alközpont között elhangzó minden szót, a naplófájl, és hol tárolja a program a fájljait.
---

A **Diagnosztika** ablak megmutatja, mit mond egymásnak a telefon és a központ, abban a pillanatban, amikor elhangzik. Ez az első hely, ahol érdemes körülnézni, ha egy fiók nem regisztrál, vagy egy hívás nem jön létre, és ez az az ablak, amelynek elküldését az informatikai részleg kérni fogja.

A **Beállítások → Diagnosztika** lapról nyitható meg, a **Diagnosztika megnyitása** gombbal.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="A Diagnosztika ablak" />

Valós időben mutat minden SIP-üzenetet, amelyet a telefon küld vagy fogad, a folyamatban lévő hívások hangstatisztikáival együtt. Csak addig gyűjt adatokat, amíg nyitva van, és a bezárása után semmit sem őriz meg.

## SIP {#sip}

A **SIP** lap a jelzésforgalom naplója.

- Minden üzenet egy sor az időponttal (ezredmásodpercre pontosan), azzal, hogy mi az, és hová ment: a jobbra mutató nyíl a telefon által küldött, a balra mutató a kiszolgálótól fogadott üzenetet jelöli. Alatta: `to` vagy `from` a kiszolgáló címe és az átvitel (például *over UDP*).
- Egy üzenet kibontható, hogy a fejlécei teljes egészében látszódjanak (a képen a harmadik üzenet).
- A **Keresés** szöveget keres a naplóban.
- A **Kiürítés** kiüríti.

A képernyőképen látható példa egy hibátlan regisztráció: a telefon `REGISTER` kérést küld, a kiszolgáló `200 OK (REGISTER)` választ ad.

## Hívások {#calls}

A második lap, a **Hívások**, minden folyamatban lévő hívás minőségi mutatóit megjeleníti.

## A beállítások Diagnosztika lapja {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Beállítások → Diagnosztika" />

### A napló részletessége {#log-detail}

A legördülő lista választja ki, mennyit írjon a program a naplófájljába; a képen **Részletes**. Azonnal életbe lép, a már folyamatban lévő hívásra is — amelyről éppen feljegyzést szeretne. A legrészletesebb beállítás minden SIP-üzenetet leír. Ez nagy, de a jelszavak még az írás előtt eltávolításra kerülnek belőle, így a fájl nyugodtan elküldhető egy támogatási kéréssel.

A **Küldjön másolatot a rendszernaplóba** a naplót a rendszer saját naplójába is beírja, olyan gépek számára, amelyek naplóit központilag gyűjtik. Az alábbi fájl mindenképpen elkészül, és ezt kell csatolni egy támogatási kéréshez.

### Fájlok {#files}

A lap felsorolja, hol tárolja a program a fájljait, és mekkora mindegyik. macOS-en:

| Fájl | Hol | Mit tartalmaz |
| --- | --- | --- |
| Beállítások | `~/Library/Preferences/ai-softphone/settings.json` | A beállításokat. Soha nem jelszavakat vagy tokeneket. |
| Adatbázis | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Névjegyeket, előzményeket, leiratokat és feldolgozásokat. |
| Felvételek | `~/Library/Application Support/ai-softphone/recordings` | A felvételek hanganyagát. |
| Napló | `~/Library/Logs/ai-softphone/ai-softphone.log` | A naplót. |

A lista alatt a **Megnyitás** megmutatja a naplót, a **Kiürítés** pedig kiüríti. Közvetlenül azelőtt ürítse ki a naplót, hogy reprodukálna egy problémát; a kiürítés nem vonható vissza.

## Mit küldjön az ügyfélszolgálatnak {#what-to-send-to-support}

1. Állítsa **A napló részletessége** beállítást a legrészletesebb szintre.
2. Nyomja meg a **Kiürítés** gombot, majd reprodukálja a problémát.
3. Küldje el a naplófájlt, vagy nyissa meg a **Beállítások → Névjegy** lapot, írjon nekünk onnan, és jelölje be a **Napló csatolása** lehetőséget — lásd: [Névjegy](../application/about.md#feedback).

Regisztrációs vagy hívási probléma esetén küldje el a sikertelen próbálkozás sorait is a **SIP** lapról.

A program mindezek mögött álló része — a SIP-nyomkövetés, a médiastatisztikák és a számlálók — a [Modulok](../application/modules.md) között kikapcsolható (**Diagnosztika**).
