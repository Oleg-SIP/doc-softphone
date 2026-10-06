---
title: SIP-fiók beállítása
sidebar_position: 1
description: Az AI Softphone összekötése az IP alközpontjával vagy SIP-szolgáltatójával a Beállítások → Fiókok lapon.
---

Az AI Softphone bármilyen IP alközponttal vagy SIP-szolgáltatóval működik. Annyi fiókba (vonalba) lehet bejelentkezve, ahány van Önnek, és minden fióknak saját beállításai vannak.

Nyissa meg a **Beállítások → Fiókok** lapot.

<Shot name="05_settings_accounts" alt="Beállítások → Fiókok: két fiók, mindkettő regisztrálva" />

## A fiókok listája {#the-list-of-accounts}

Minden fiók egy sor, amelyben a következők vannak:

- egy **jelölőnégyzet**, amely be- vagy kikapcsolja a fiókot;
- egy **pont**, amely zöld, ha a fiók regisztrálva van az alközponton;
- a név, alatta pedig `username@server`;
- egy **Bontás** gomb, amely kijelentkezteti a fiókot az alközpontból;
- a **▲** és **▼** gombok, amelyek feljebb vagy lejjebb viszik a fiókot a listában. A [főablak](../interface/main-window.md) fiókjelvényei ugyanezt a sorrendet követik.

A jobb felső **Hozzáadás** gomb új fiókot ad hozzá. Kattintson egy sorra, hogy alatta megnyíljon az űrlapja.

## Fiók hozzáadása {#adding-an-account}

<Shot name="05d_account_add" alt="Egy új fiók üres űrlapja" />

Nyomja meg a **Hozzáadás** gombot. A lista alatt megnyílik egy üres űrlap, a kurzor a **Név (nem kötelező)** mezőben áll. Töltse ki az alábbi mezőket, nyissa meg a **Kiszolgálóbeállítások** részt, ha az alközpontnak szüksége van rájuk, és nyomja meg a **Mentés** gombot. Az új fiók a szokásos értékekkel indul: UDP az 5060-as porton, a regisztráció 300 másodpercenként megújul.

## A fiók űrlapja {#the-account-form}

<Shot name="05b_account_edit" alt="Egy fiók űrlapja" />

| Mező | Mit írjon be |
| --- | --- |
| **Név (nem kötelező)** | A fiók jelvényén a főablakban és a hívásainál megjelenő név. Ha üres, a fiók `username@server` alakban jelenik meg. |
| **Felhasználónév** | Az alközponttól vagy a szolgáltatótól kapott felhasználónév vagy mellékszám. |
| **Jelszó** | A hozzá tartozó jelszó. A mező üres marad, amikor visszatér az űrlaphoz. A számítógép kulcstartója őrzi, soha nem egy beállításfájl. |
| **Kiszolgáló címe** | Az alközpont vagy a szolgáltató SIP-kiszolgálójának címe, például `pbx.example.com`. |
| **Kiszolgálóbeállítások** | Kibontja a kapcsolat ritkábban használt beállításait; lásd alább. |
| **Automatikus fogadás** | A **Fogadás** alatt: fogadja az erre a fiókra érkező hívásokat anélkül, hogy bármit megnyomna. Alapértelmezés szerint ki van kapcsolva. |

A módosítások megtartásához nyomja meg a **Mentés** gombot. A **Mégse** elveti őket, a **Törlés** pedig eltávolítja a fiókot.

Ha a fiók melletti pont zöld, a fiók regisztrálva van, és ezt a fiók jelvénye is mutatja a főablakban. Ha szürke vagy piros marad, nyissa meg a [Diagnosztikát](../troubleshooting/diagnostics.md): a **SIP** lap mutatja a `REGISTER` kérést és azt, hogy mit válaszolt rá a kiszolgáló.

## Kiszolgálóbeállítások {#server-settings}

A legtöbb alközpontnak itt semmire sincs szüksége. Nyomja meg a **Kiszolgálóbeállítások** gombot a megjelenítésükhöz; ugyanezen a gombon ekkor a **Kiszolgálóbeállítások elrejtése** felirat olvasható.

<Shot name="05c_account_server_settings" alt="Egy fiók kibontott kiszolgálóbeállításai" />

| Mező | Alapérték | Mi ez |
| --- | --- | --- |
| **Hitelesítési felhasználó** | üres | Az a név, amelyhez az alközpont a jelszót ellenőrzi, ha az nem azonos a **Felhasználónév** értékével. A képen a mellék `201`, és az alközpont `iroda201` néven hitelesíti. |
| **Átvitel** | UDP | A kiszolgálóval való kapcsolat protokollja. Legördülő lista. |
| **Port** | 5060 | A kiszolgáló portja. |
| **Kimenő proxy** | üres | Egy proxy, amelyen minden kérésnek át kell mennie, ha a szolgáltató megad ilyet. |
| **Registrar** | üres | A regisztráció címe, ha nem azonos a **Kiszolgáló címe** értékével. |
| **Újraregisztrálás, másodperc** | 300 | Milyen gyakran újítja meg a telefon a regisztrációját. |
| **Billentyűhangok** | Hangfolyam | Hogyan jutnak el a billentyűzet hangjai az alközponthoz. Legördülő lista. Csak akkor módosítsa, ha az alközpont nem hallja a hangokat. |

A telefon által felkínált kodekek nem fiókonként állíthatók; ezek a [Hívásbeállítások](calls.md#audio-formats) között vannak.
