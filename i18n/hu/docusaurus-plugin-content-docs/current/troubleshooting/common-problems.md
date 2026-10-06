---
title: Gyakori problémák
sidebar_position: 2
description: "\"Mit ellenőrizzen, ha egy fiók nem regisztrál, nincs hang, egy hívásról vagy megbeszélésről nem készül felvétel, nincs leirat, vagy egy hivatkozás, egy gyorsbillentyű vagy az API nem csinál semmit.\""
---

Minden bejegyzés arra a beállításra mutat, amelyen az adott dolog múlik. Ha a válasz nincs itt, nyissa meg a [Diagnosztikát](/troubleshooting/diagnostics): megmutatja, mit mond egymásnak a telefon és az alközpont.

## A fiók nem regisztrál {#the-account-will-not-register}

A fiók melletti pont a **Beállítások → Fiókok** lapon szürke vagy piros marad.

1. Ellenőrizze a **Felhasználónév**, a **Jelszó** és a **Kiszolgáló címe** mezőt [a fiók űrlapján](/sip-accounts/setup).
2. Ha az alközpont nem a mellékszámmal, hanem más néven ellenőrzi a jelszót, töltse ki a **Hitelesítési felhasználó** mezőt a **Kiszolgálóbeállítások** alatt.
3. Ellenőrizze, hogy az **Átvitel** és a **Port** megfelel-e annak, amit az alközpont vár.
4. Nyissa meg a [diagnosztikai ablak](/troubleshooting/diagnostics) **SIP** lapját, és nézze meg a `REGISTER` kérést és azt, hogy mit válaszolt rá a kiszolgáló.

## Nem hallok, vagy engem nem hallanak {#i-cannot-hear-or-i-cannot-be-heard}

Nyissa meg a [Beállítások → Eszközök](/sip-accounts/devices) lapot.

- Mondjon valamit: a **Mikrofon** alatti sávnak mozdulnia kell. Ha nem mozdul, válasszon másik mikrofont.
- Nyomja meg a **Hangszórók** alatti **Próba** gombot, hogy hangot halljon a kiválasztott eszközön.
- Ellenőrizze a **Hangerő** csúszkákat. A hívás kártyáján lévő **Mikrofon némítása** gomb és az azonos nevű [gyorsbillentyű](/program/shortcuts) hívás közben kikapcsolja a mikrofont.
- A csengőhang beállítható úgy, hogy más eszközön szóljon, mint amelyen beszél — **Csengőhang**, a második legördülő lista.

## A hívás rossz minőségű, vagy nem indul el {#the-call-sounds-bad-or-does-not-start}

A kodekek a [Beállítások → Hívások](/sip-accounts/calls#audio-formats) alatti lista sorrendjében kerülnek felkínálásra. Hagyja bekapcsolva azokat a kodekeket, amelyeket az alközpontja használ, és a legjobbat tegye előre. A módosítás a következő hívástól érvényes.

## A második hívás nem csörög {#a-second-call-does-not-ring}

Hogy mi történjen, ha valaki akkor hívja, amikor Ön hívásban van, azt a [Hívásvárakoztatás](/sip-accounts/calls#call-waiting) alatt adhatja meg.

## Egy hívásról nem készült felvétel {#a-call-was-not-recorded}

- A **Beállítások → Felvétel** első legördülő listája dönti el, mely hívásokról készül felvétel; az alapérték, a **Kézzel**, csak akkor rögzít, ha megnyomja a felvétel gombot a hívás kártyáján. Lásd: [Hívások rögzítése](/recordings/call-recording).
- A felvétel a hívás fogadásakor kezdődik, így a nem fogadott hívásnak nincs fájlja.
- A **Felvétel** modulnak bekapcsolva kell lennie a [Modulok](/application/modules) között.
- A felvételeket a **Megőrzés** alatti korlátok törlik; a kitűzött felvétel soha nem törlődik.

## Egy másik alkalmazásban tartott megbeszélés nem lett rögzítve {#a-meeting-in-another-application-was-not-captured}

Lásd: [Rögzítés](/capture/).

- A **Beállítások → Rögzítés** lapon a **Hangrögzítés engedélyezése** legyen bekapcsolva.
- Ha az **Automatikus indítás** értéke **Kérdezzen rá** (az alapérték), válaszoljon a kérdésre, amikor megjelenik; ha **Soha**, nyomja meg Ön a **Felvétel** gombot.
- Használja ugyanezen a lapon a **Próba** részt: a felső sávnak mozdulnia kell, amikor beszél, az alsónak, amikor valami szól.
- A **Rögzítés** modulnak bekapcsolva kell lennie a [Modulok](/application/modules) között.

## Van felvétel, de nincs leirat vagy összefoglaló {#there-is-a-recording-but-no-transcript-or-summary}

- Egy beszélgetésről csak akkor készül magától leirat és feldolgozás, ha a [Beállítások → Feldolgozás](/ai-processing/processing) lapon be van kapcsolva **A beszélgetések automatikus feldolgozása**. Ellenkező esetben kérje a [Felvételek ablakban](/recordings/recordings-window).
- Szükség van egy [felismerőre](/ai-processing/transcription) és egy [nyelvi modellre](/ai-processing/processing#language-models), és mindkettőnek válaszolnia kell a címén.
- Ha eléri a havi **Pénzkorlát** vagy **Tokenkorlát** értékét, az automatikus szabályok a hónap fordulójáig leállnak. Amit Ön maga kér, az soha nem áll le.
- A [Beállítások → Áttekintés](/interface/settings-overview) lépései megmutatják, mit kell még beállítani.

## A telefon eltűnt, amikor bezártam az ablakot {#the-phone-disappeared-when-i-closed-the-window}

Ha **A telefon fusson tovább, ha az ablak bezárul** be van kapcsolva, a telefon továbbra is fut, és a hívások továbbra is beérkeznek. Az értesítési területen (macOS-en a menüsorban) lévő ikon visszahozza az ablakot. Lásd: [Indulás](/program/startup).

## Egy böngészőben vagy CRM-ben lévő telefonszám nem indít hívást {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Nyomja meg a **Hívási hivatkozások megnyitása ezzel a telefonnal** gombot a [Beállítások → Indulás](/program/startup#call-links) lapon. A rákattintott szám bekerül a tárcsázóba, és ott vár, hacsak a **Hívás azonnal, a Hívás gomb megnyomása nélkül** nincs bekapcsolva.

## Egy gomb lámpája szürke marad {#a-buttons-lamp-stays-grey}

Az alközpont nem árulja el, hogy a mellék szabad-e. A gomb ettől még tárcsáz. Lásd: [Gombok](/sip-accounts/buttons).

## A REST API nem válaszol {#the-rest-api-does-not-answer}

- A [Beállítások → Integráció](/integration/rest-api) lapon legyen bekapcsolva **A számítógép más programjai vezérelhessék a telefont**, a [Modulok](/application/modules) között pedig az **Integráció** modul.
- A cím `http://127.0.0.1:8377`, hacsak nem módosította a **Port** értékét.
- Az a csoport, amelyet nem nyitott meg a **Hozzáférés** alatt, minden kérésre `404` választ ad.
- Ha beállított egy **Token** értéket, a tárolt adatokat módosító kéréseknek az `Authorization` fejlécben kell vinniük.
- További tünetek a [Ha nem működik](/integration/rest-api#when-it-does-not-work) részben találhatók.

## Nem érkeznek meg a webhookok {#webhooks-do-not-arrive}

Nyomja meg a **Teszt esemény küldése** gombot a [Beállítások → Integráció](/integration/webhooks) lapon. A REST API `webhooks_failed_total` és `webhooks_dropped_total` számlálója mutatja, hogyan halad a kézbesítés; a [Ha semmi sem érkezik meg](/integration/webhooks#when-nothing-arrives) rész felsorolja, mit jelentenek.

## Egy gyorsbillentyű nem csinál semmit {#a-hotkey-does-nothing}

Nyissa meg a [Gyorsbillentyűk](/program/shortcuts) lapot. Egy billentyűparancs akkor működik, amikor éppen a telefont használja; ha bármely programból szeretné használni, jelölje be a **Mindenhol** lehetőséget. Kattintson a billentyűparancsra, és nyomja le újra a kombinációt, ha egy másik program elvette.
