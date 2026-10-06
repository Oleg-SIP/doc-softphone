---
title: Gombok
sidebar_position: 4
description: "\"BLF-gombok: egyérintéses gombok, amelyek felhívnak egy melléket az IP alközponton, és megmutatják, hogy szabad, csörög vagy foglalt.\""
---

A gombok a szoftveres telefon **BLF** (Busy Lamp Field) billentyűi, ugyanaz a funkció, amely egy IP alközponthoz kötött asztali telefonon is megvan. Egy gomb egyetlen nyomással felhív egy melléket. Az a gomb, amely figyeli a vonalát, egy lámpát is mutat: a telefon megkérdezi az alközponttól az adott mellék állapotát, és megmutatja, hogy szabad, csörög vagy foglalt, ahogyan egy recepciós konzol vagy egy asztali telefon programozható billentyűi teszik.

A BLF-hez az alközpont támogatása szükséges: az alközpontnak jelentenie kell a telefonnak a mellék állapotát. A legtöbb IP alközpont ezt meg is teszi. Ha az Öné nem, a lámpa szürke marad, a gomb viszont továbbra is tárcsáz.

A gombok a [főablakban](/interface/main-window) a fiókjelvények alatt vannak, létrehozni pedig a **Beállítások → Gombok** lapon lehet őket.

<Shot name="08_settings_buttons" alt="Beállítások → Gombok: két gomb" />

Minden sor egy gomb: a lámpa, a felirata, jobbra pedig a száma és a fiók, amelyhez tartozik — például *212 · 201 Iroda*. A **▲** és **▼** feljebb vagy lejjebb viszi a gombot; a főablak gombjai ezt a sorrendet követik. A **Hozzáadás** újat hoz létre.

## A lámpa {#the-lamp}

Az a gomb, amely figyeli a vonalát, egy lámpát mutat:

| Lámpa | A vonal |
| --- | --- |
| Zöld | szabad |
| Borostyánsárga | csörög |
| Piros | hívásban van |
| Szürke | ismeretlen: a központ nem árulja el |

## Gomb hozzáadása {#adding-a-button}

<Shot name="08b_button_add" alt="Egy új gomb űrlapja" />

Nyomja meg a **Hozzáadás** gombot; a lista alatt megnyílik egy űrlap.

| Mező | Mit írjon be |
| --- | --- |
| **Szám** | A tárcsázandó szám. |
| **Vonal** | Az a fiók, amelyen a hívás indul. Ezt válassza ki először: a lámpa megjelenítéséhez a telefon ennek a vonalnak a központjától kérdezi meg a szám állapotát, ezért tudnia kell, melyiktől. |
| **Felirat** | A gombon megjelenő szöveg, például a személy neve. A gombon csak rövid felirat fér el; a hosszabbat levágja. |
| **Mutassa, foglalt-e ez a vonal** | Kapcsoló. Bekapcsolva a gombnak van lámpája. Kikapcsolva csak tárcsáz. |

A **Mentés** szürke marad, amíg az űrlap nincs kitöltve. A **Mégse** elveti az űrlapot.

A program gombokat megjelenítő része a [Modulok](/application/modules) között kikapcsolható.
