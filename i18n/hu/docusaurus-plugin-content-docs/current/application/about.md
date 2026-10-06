---
title: Névjegy
sidebar_position: 2
description: A verzió, a frissítések, az Ön országa, a licenc, a használati jelentés tartalma, a visszajelzési űrlap és az, hogy mire épül a program.
---

A **Beállítások → Névjegy** mindent tartalmaz, ami magáról a programról szól.

<Shot name="20_settings_about" alt="Beállítások → Névjegy" />

## Verzió és ország {#version-and-country}

Felül a név, a **Verzió** (a képen 1.0.0) és egy hivatkozás a weboldalra, az [ai-softphone.com](https://ai-softphone.com/) címre található.

Az **Ország** megmondja a programnak, hol tartózkodik. Segít kiválasztani a legjobb frissítési kiszolgálót, és utat nyit az országában üzemeltetett nyelvi és beszédszolgáltatások felé. Az **Automatikus felismerés** kitölti.

## Frissítések {#updates}

A lap megmutatja, hogy a legújabb verzió van-e telepítve, és mikor történt az utolsó ellenőrzés. A **Frissítések keresése** azonnal ellenőriz.

A **Frissítések automatikus keresése**, amely alapértelmezés szerint be van kapcsolva, naponta egyszer és röviddel a telefon indulása után ellenőriz. Egy kiszolgálótól egyetlen kis fájlt kér le, és semmi sem töltődik le vagy települ az Ön jóváhagyása nélkül.

## Licenc {#licence}

A program GPL-2.0-or-later licencű szabad szoftver. Semmilyen garanciát nem vállalunk rá, és a licenc feltételei szerint továbbterjesztheti; a teljes szöveg a `LICENSE` nevű fájlban található.

## Telemetria {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Beállítások → Névjegy: a használati jelentés tartalma" />

A program naponta egy kis használati jelentést küld. Mielőtt az első elmenne, megmutatja, mi van benne, és a lap fel is sorolja:

| | Mit küld el |
| --- | --- |
| **Mindig elküldve** | Azt, hogy az alkalmazás elindult, a verzióját és a felület nyelvét; az operációs rendszer verzióját, a területi beállítást, az országot és az időzónát. |
| **Ezen felül elküldve, Bővített módban** | A hívások és a rögzített beszélgetések számlálóit; a csatlakoztatott softswitch gyártóját és verzióját, a címét soha; azt, hogy az [Áttekintés](/interface/settings-overview) lépései közül hány van kész, és a kiválasztott elrendezést. |
| **Soha nem elküldve, egyik módban sem** | A tárcsázott számokat és azokat, amelyekről hívták; fiókokat, jelszavakat vagy bármit a kulcstartóból; névjegyeket, beszélgetéseket, leiratokat vagy felvételeket; bármit, amit begépelt, és a számítógépen lévő bármilyen személyes adatot. |

Minden telepítés létrehoz magának egy véletlenszerű azonosítót, hogy a program ugyanazon példányától érkező jelentések egyként legyenek felismerhetők. Ez semmiből sem származik, ami Önre vagy a számítógépére vonatkozik, és senkit sem nevez meg — de mivel tartós, az általa hordozott jelentések összekapcsolhatók egymással. Ezért ezek álnevesek, nem pedig névtelenek.

Az alapjelentés jogalapja a jogos érdek: annak ismerete, hogy mely verziók vannak használatban, teszi lehetővé, hogy egy javítás eljusson azokhoz, akiknek szükségük van rá. Mindaz, amit a bővített jelentés hozzátesz, azért van benne, mert Ön így döntött, és ezt itt bármikor megváltoztathatja.

### Jelentésküldés {#reporting}

| Választás | |
| --- | --- |
| **Bővített** | Az alapjelentés és mindaz, amit az *Ezen felül elküldve* felsorol. A képen ez van kiválasztva. |
| **Alap** | Csak az, ami *Mindig elküldve*. |
| **Kikapcsolva** | Semmilyen jelentés. Csak az Enterprise kiadásban érhető el; egyébként a lehetőség szürke. |

## Visszajelzés {#feedback}

<Shot name="20c_settings_about_bottom" alt="Beállítások → Névjegy: a visszajelzési űrlap és az összetevők, amelyekre a program épül" />

Űrlap, amellyel a program elhagyása nélkül írhat a fejlesztőknek.

| Mező | |
| --- | --- |
| **Tárgy** és **Üzenet** | Amit mondani szeretne. |
| **Az Ön neve** és **Válaszcím** | Mindkettő nem kötelező. Cím nélkül nem tudunk válaszolni. |
| **Napló csatolása** | Hozzáfűzi a napló végét, körülbelül 512 kB-ot. Lásd: [Diagnosztika](/troubleshooting/diagnostics). |

A **Küldés** szürke marad, amíg nincs mit elküldeni.

## Mire épül {#built-with}

Az összetevők, amelyekre a program épül, mindegyik a saját licencével: Qt 6 (GPL-2.0 vagy GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (közkincs), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) és PulseAudio kliens (LGPL-2.1-or-later). Mindegyiket a mellette feltüntetett licenc alapján használjuk; ahol egy összetevő többet is kínál, a megnevezett az, amelyet választottunk.
