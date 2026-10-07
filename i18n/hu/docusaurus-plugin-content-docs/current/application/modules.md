---
title: Modulok
sidebar_position: 1
description: A részek, amelyekből a program áll, és hogyan kapcsolható ki mindegyik.
---

A **Beállítások → Modulok** felsorolja a program részeit. *Minden, amit ez a telefon csinál, ezek egyike.* Egy kikapcsolása azonnal érvényes, és amit már elmentett, a helyén hagyja.

<Shot name="19_settings_modules" alt="Beállítások → Modulok" />

Minden modulnak van egy jelölőnégyzete, egy neve, egy sora arról, mit csinál, jobbra pedig az állapota — a bekapcsolt modulnál **Fut**. Annak a két modulnak a jelölőnégyzete, amelyektől a többi függ, az **Alkalmazás** és a **Helyi adatbázis** modulé, szürke: ezek nem kapcsolhatók ki.

<Shot name="19b_settings_modules_scrolled" alt="Beállítások → Modulok: a lista többi része" />

| Modul | Mi ez |
| --- | --- |
| **Alkalmazás** | A főablak, a beállítások, az ikonok és így tovább. |
| **Helyi adatbázis** | A helyi tárolóként használt adatbázis. |
| **Böngészőfelület** | Néhány funkció egy helyi böngészőben: a [REST API](/integration/rest-api) oldalai. |
| **Gombok** | A tárcsázó melletti [gombok](/sip-accounts/buttons) és a rajtuk lévő lámpák. |
| **Rögzítés** | Másik alkalmazásban zajló [beszélgetés felvétele](/capture/). |
| **Diagnosztika** | A SIP-nyomkövetés, a médiastatisztikák és a számlálók: [Diagnosztika](/troubleshooting/diagnostics). |
| **Szótárak** | Kategóriák, címkék és figyelmeztető jelek — a kódok, amelyekre minden más hivatkozik: [Szótárak](/ai-processing/dictionaries). |
| **Címjegyzék** | A címjegyzék: [Névjegyek](/interface/contacts-history). |
| **Integráció** | A helyi API és a webhookok: [Integráció](/integration/rest-api). |
| **Médiatár** | A beszélgetések könyvtára és az, hogy meddig maradnak meg: [Felvételek](/interface/recordings). |
| **Feldolgozás** | Az utasítások és az őket elindító szabályok: [Feldolgozás](/ai-processing/processing). |
| **Felvétel** | A hívások rögzítése és a másik fél tájékoztatása erről: [Hívások rögzítése](/recordings/call-recording). |
| **Telefónia** | SIP, fiókok, hívások, a tárcsázó és a hívásnapló. |
| **Átirat** | A felismerők, az őket hajtó várólista és az általuk készített leiratok: [Átirat](/ai-processing/transcription). |

Ha kikapcsol egy modult, eltűnik: nincsenek hozzá beállítások, nincs menüpontja, semmi sem fut belőle. Kapcsolja ki azt a modult, amelyre nincs szüksége — például az **Integráció** modult egy olyan számítógépen, ahol semmi más nem kommunikál a telefonnal —, vagy tartson meg egy olyan telefont, amely csak telefon, ha egy asztalhoz csak ennyi kell. A csomag mindkét esetben ugyanaz: nincs mit megvenni és nincs mit feloldani.
