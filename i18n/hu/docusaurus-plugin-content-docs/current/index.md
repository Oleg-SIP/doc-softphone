---
slug: /
title: Az AI Softphone dokumentációja
sidebar_position: 1
description: Mi az AI Softphone, milyen rendszeren fut, és hol található a program egyes részeinek leírása.
---

Az [AI Softphone](https://ai-softphone.com/) egy IP alközponthoz való szoftveres telefon, amely ráadásul minden beszélgetést szöveggé és írásos összefoglalóvá alakít. Egy beszélgetés háromféleképpen juthat el hozzá, és mindhárom ugyanabba a könyvtárba kerül, ugyanazzal a felvétellel, leirattal és feldolgozással:

- **hívás**, amelyet a programban indít vagy fogad, bármilyen IP alközponton vagy SIP-szolgáltatón keresztül;
- **megbeszélés** a Zoomban, a Teamsben, a Meetben vagy bármely más alkalmazásban, amelyet közvetlenül a számítógépről rögzít;
- **meglévő felvétel** — mobiltelefonról, diktafonról vagy egy másik rendszerből —, amelyet hozzáad a könyvtárhoz.

A felvételek, a leiratok és az előzmények egy olyan fájlban vannak, amely az Öné. Nincs szükség sem fiókra, sem előfizetésre, a program pedig GPL v2 licencű szabad szoftver.

## A beszélgetéstől a feldolgozásig {#from-a-conversation-to-a-write-up}

1. Beérkezik egy beszélgetés: hívás, megbeszélés vagy fájl.
2. A program két csatornán rögzíti, így az, amit Ön mondott, és az, amit a másik oldal mondott, külön marad.
3. Leiratot készít róla, beszélőnként, a hanggal összehangolva.
4. Az Ön által választott nyelvi modell feldolgozza: összefoglaló, feladatok, kategória, címkék és figyelmeztető jelek — és a beszélgetésnek kérdést is feltehet.

## Letöltés és rendszerkövetelmények {#download-and-system-requirements}

A program ingyenesen letölthető az [ai-softphone.com](https://ai-softphone.com/#download) oldalról: telepítő (`.exe`) Windowsra, lemezkép (`.dmg`) macOS-re, valamint AppImage vagy `.deb` Linuxra. A telepítő, a lemezkép és az AppImage mellé előtte semmi mást nem kell telepíteni — a Qt, az OpenSSL és a C++ futtatókörnyezet bennük van. Kivétel a `.deb`: ez a rendszer saját C++ futtatókörnyezetét használja, lásd lent. Szüksége lesz egy SIP-fiókra a szolgáltatójától vagy a saját maga által üzemeltetett alközponttól. A felvétel a telepítés pillanatától működik; a leirathoz és a feldolgozáshoz egy Ön által választott szolgáltatás vagy egy saját gépen futó modell kell.

| Rendszer | Követelmények |
| --- | --- |
| macOS | macOS 14.4 vagy újabb; csak Apple silicon — Intel-alapú Mac nem tudja megnyitni, még Rosettán keresztül sem; Metal grafika; 160 MB lemezterület, plusz a felvételek. A rendszer egyszer engedélyt kér a mikrofonhoz. |
| Windows | Windows 10 1809-es verzió (17763-as build) vagy újabb, valamint Windows 11; 64 bites Intel vagy AMD processzor; Direct3D 11 vagy OpenGL 2.1; 250 MB lemezterület, plusz a felvételek. |
| Linux | Ubuntu 22.04 LTS vagy újabb, Debian 12 vagy újabb, és bármi, ami ugyanilyen korú — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C könyvtár 2.35 vagy újabb; 64 bites Intel vagy AMD processzor; OpenGL 2.1 vagy OpenGL ES 2.0, X11-en vagy Waylanden; PipeWire vagy PulseAudio (ahol egyik sincs, ott ALSA); 200 MB lemezterület, plusz a felvételek. A tálcaikonhoz olyan asztali környezet kell, amelyben van állapotértesítési terület. |

Linuxon az AppImage bármely ilyen korú disztribúción fut: tegye futtathatóvá, és indítsa el. A `.deb` csomagnak ezenfelül szüksége van a rendszer saját, GCC 13-ból származó C++ futtatókörnyezetére, amely az Ubuntu 24.04-ben és a Debian 13-ban megvan, az Ubuntu 22.04-ben viszont nincs; bármi régebbin használja az AppImage-et.

A felület harminc nyelven érhető el; a nyelvet a [Megjelenés](/program/appearance) lapon lehet kiválasztani, és újraindítás nélkül vált.

A dokumentáció képernyőképei macOS-en készültek, és kicsinyítve jelennek meg: kattintson egy képre, hogy teljes méretben lássa. A program a többi rendszeren is ugyanígy néz ki és működik.

## Első lépések {#first-steps}

1. [Adjon hozzá egy fiókot](sip-accounts/setup.md) az alközpontjához vagy a SIP-szolgáltatójához.
2. [Válassza ki a mikrofont és a hangszórókat](sip-accounts/devices.md), és indítson egy próbahívást.
3. Döntse el, [mely hívásokról készüljön felvétel](recordings/call-recording.md).
4. Adjon hozzá egy [felismerőt](ai-processing/transcription.md) és egy [nyelvi modellt](ai-processing/processing.md), ha leiratokat és feldolgozásokat szeretne.

A **Beállítások → Áttekintés** vezeti Ön helyett ezt a listát: a zöld pont a már elvégzett lépést jelöli, a piros a még hátralévőt. Lásd: [A beállítások áttekintése](interface/settings-overview.md).

## Mit érdemes még elolvasni {#where-to-read-next}

| Ha szeretné… | Olvassa el |
| --- | --- |
| Kiigazodni az ablakok között | [Felület](interface/main-window.md) |
| Összekötni a telefont az alközpontjával | [SIP-fiók beállítása](sip-accounts/setup.md) |
| Kiválasztani a mikrofont, a hangszórókat és a csengőhangot | [Eszközök](sip-accounts/devices.md) |
| Beállítani a kodekeket, a hívásvárakoztatást és a hívásnaplót | [Hívásbeállítások](sip-accounts/calls.md) |
| Egyérintéses gombokra tenni a kollégákat | [Gombok](sip-accounts/buttons.md) |
| Eldönteni, mely hívásokról és mennyi ideig maradjon felvétel | [Hívások rögzítése](recordings/call-recording.md) |
| Meghallgatni, keresni és elolvasni a beszélgetéseit | [A Felvételek ablak](recordings/recordings-window.md) |
| Rögzíteni egy másik alkalmazásban tartott megbeszélést | [Rögzítés](capture/capture.md) |
| Kiválasztani a beszédet szöveggé alakító felismerőt | [Átirat](ai-processing/transcription.md) |
| Eldönteni, melyik MI dolgozza fel a beszélgetéseit, és mennyibe kerülhet | [Feldolgozás](ai-processing/processing.md) |
| Módosítani a kategóriákat, a címkéket és a figyelmeztető jeleket | [Szótárak](ai-processing/dictionaries.md) |
| Módosítani az elrendezést, a témát, az indulást és a gyorsbillentyűket | [Megjelenés](program/appearance.md), [Indulás](program/startup.md) és [Gyorsbillentyűk](program/shortcuts.md) |
| Összekötni egy CRM-et vagy más programot | [Webhookok](integration/webhooks.md) és [Helyi REST API](integration/rest-api.md) |
| Látni, mit mond egymásnak a telefon és az alközpont | [Diagnosztika](troubleshooting/diagnostics.md) |
| Megtalálni egy probléma okát | [Gyakori problémák](troubleshooting/common-problems.md) |
| Kikapcsolni a program egyes részeit | [Modulok](application/modules.md) |
| Ellenőrizni a verziót, a frissítéseket és a használati jelentés tartalmát | [Névjegy](application/about.md) |

Az oldalak a **Beállítások** lapjainak sorrendjét követik.

## Adatvédelem {#privacy}

- Alapértelmezés szerint minden az Ön számítógépén marad: a felvételek, a leiratok és az előzmények egy olyan fájlban vannak, amely az Öné. Egy beszélgetésből semmi — sem szám, sem név, sem egyetlen szó abból, ami elhangzott — nem kerül olyan helyre, ahová Ön maga nem küldte.
- A fiókok jelszavait, a webhook fejlécértékét és az API tokenjét az operációs rendszer kulcstartója őrzi, soha nem egy beállításfájl.
- Az új verzió megjelenésekor jelentkezik — hívás közben soha —, és csak akkor települ, amikor Ön jóváhagyja.
- A program naponta egy kis használati jelentést küld. Mielőtt az első elmenne, megmutatja, mi van benne, és Ön választja ki, mennyi adatot tartalmazzon: **Alap** vagy **Bővített**. Soha nem tartalmaz telefonszámokat, névjegyeket, az alközpontja címét, sem semmit, ami egy beszélgetésben elhangzott. A teljes lista a [Névjegy](/application/about#telemetry) oldalon található.
- A program GPL v2 licencű szabad szoftver.
