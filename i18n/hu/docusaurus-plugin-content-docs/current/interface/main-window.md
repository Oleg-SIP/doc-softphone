---
title: A főablak
sidebar_position: 1
description: Balra a telefon, jobbra a könyvtár és a beállítások — az AI Softphone főablakának elrendezése.
---

A főablak maga a telefon. Az alapértelmezett **Egy ablak** elrendezésben a telefon balra áll, minden más pedig jobbra nyílik meg. Az [elrendezés megváltoztatható](../program/appearance.md).

<Shot name="03_contacts" full alt="A főablak: balra a telefon, jobbra a Névjegyek lap" />

## A telefon {#the-phone}

Fentről lefelé a bal oldalon a következők találhatók:

- a **Szám** mező;
- a billentyűzet és a hívógomb;
- a fiókjelvények;
- a más melléket figyelő gombok;
- a négy úti cél: **Felvételek**, **Névjegyek**, **Előzmények** és **Beállítások**.

### A tárcsázó {#the-dialler}

- **Szám** — írja be vagy illessze be a hívandó számot. A mező jobb végén lévő óra ikon megnyitja azoknak a számoknak a listáját, amelyeket mostanában hívott, vagy amelyekről mostanában hívták.
- Az **1–9**, **\***, **0** és **#** kerek gombok beírják a számot, hívás közben pedig hangokat (DTMF) küldenek.
- A kagyló gomb indítja a hívást. Amíg nincs szám, szürke marad.

<Shot name="22_last_calls" full alt="A legutóbbi hívások listája a Szám mező alatt, az Előzmények lap mellett" />

Amikor a legutóbbi számok listája nyitva van, a mezőben egy nyíl jelenik meg, a hívógomb pedig tőle jobbra kerül. Minden bejegyzés egy név — vagy egy szám, ha a hívó nem szerepel a [Névjegyek](contacts-history.md) között — a dátummal. A piros kagyló nem fogadott hívást jelöl; a zárójeles ismétlésszám — például *Helpdesk (4)* — ugyanazzal a féllel folytatott több egymás utáni hívást jelent.

### A fiókjelvények {#the-account-chips}

A billentyűzet alatt minden [fióknak](../sip-accounts/setup.md) van egy jelvénye. A zöld pont azt jelenti, hogy a fiók regisztrálva van az alközponton. A kiemelt jelvény (a képen **305 Ügyfélszolgálat**) az a fiók, amelyről a következő hívás indul; egy másik jelvényre nyomva módosíthatja. A jelvényektől jobbra lévő kerek piros gomb a „Ne zavarjanak” mód.

### A gombok {#the-buttons}

A jelvények alatt azok a [gombok](../sip-accounts/buttons.md) vannak, amelyeket a kollégáinak és a vonalaknak hozott létre, mindegyik egy lámpával — a képeken **Kovács** és **Raktár**. Nyomjon meg egyet, hogy felhívja a számát.

### Felvételek, Névjegyek, Előzmények, Beállítások {#recordings-contacts-history-settings}

Ez a négy alsó elem egy-egy lapot nyit jobbra, egymás mellett: [Felvételek](../interface/recordings.md), [Névjegyek és Előzmények](contacts-history.md), valamint [Beállítások](settings-overview.md). A megnyitott lapok a jobb oldal tetején lévő sorban maradnak.

## Folyamatban lévő hívás {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Folyamatban lévő hívás" />

Amíg a hívás tart, a számmező a tetejére kerül, benne egy billentyűzet ikonnal, a hívás pedig egy kártyán jelenik meg:

- a hívás állapota és hossza (**Hívásban · 0:21**), a másik fél neve, a **Vonal** és annak a fióknak a neve, amelyen a hívás zajlik, valamint a szám;
- két függőleges szintjelző a kártya két oldalán, a hang mindkét csatornájához egy-egy;
- egy gombsor: felvétel (kör), némítás (mikrofon), tartás (szünet) és a piros **Bontás** gomb;
- egy második sor: átadás (kagyló nyíllal) és a billentyűzet.

A hívás átadható közvetlenül, vagy azután, hogy Ön előbb beszélt az illetővel.

Ha a szám szerepel a **Névjegyek** között, a szám helyett a név jelenik meg. Ugyanezekhez a műveletekhez [gyorsbillentyűk](../program/shortcuts.md) is tartoznak: fogadás, bontás, tartás és némítás.

## Több hívás egyszerre {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Több hívás" />

A bejövő hívást egy értesítősáv jelzi, bárhol dolgozik is éppen, még akkor is, ha a telefon el van rejtve. Az új bejövő hívás saját kártyán jelenik meg a lista fölött, egy zöld, egy sárga és egy piros gombbal, valamint egy sorral, amely megmondja, kivel beszél éppen (**Hívásban vele: …**). Az alatta lévő lista minden hívást mutat az állapotával — **Tartásban**, **Hívásban**, **Bejövő hívás** — és azzal a fiókkal, amelyen zajlik. A szünet ikon a tartásban lévő hívást jelöli, a hangszóró ikon pedig azt, amelyben éppen beszél.

Hogy mi történjen, ha valaki akkor hívja, amikor Ön már hívásban van, azt a [Hívásbeállítások](../sip-accounts/calls.md#call-waiting) között adhatja meg.

## Konferencia {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konferencia" />

Az összekapcsolt hívások egyetlen **Konferencia** kártyaként jelennek meg a fiók vonalán. Minden résztvevő szerepel a hívásban töltött idővel és a saját **Bontás** gombjával. Az alatta lévő gombok mindenki számára rögzítik, némítják és befejezik a konferenciát; az alsó széles gomb a konferenciát újra különálló hívásokra bontja.

## Rögzítés {#capture}

Amikor a [más alkalmazásokból történő rögzítés](../capture/capture.md) engedélyezve van a **Beállítások → Rögzítés** lapon, a fiókjelvények és a gombok között megjelenik egy sáv.

<Shot name="10_settings_capture" full alt="A Rögzítés sáv a telefon alján: Rögzítés · kész, Felvétel és két szintjelző" />

- A **Rögzítés · kész** azt jelzi, hogy a program figyeli, zajlik-e beszélgetés egy másik alkalmazásban.
- A **Felvétel** kézzel indítja el a rögzítést.
- Az alatta lévő két vékony sáv a hangszintet mutatja: a felső Ön, az alsó az, amit a számítógép lejátszik. Megjelenésüket a **Kép a telefon alján lévő sávban** beállításnál adhatja meg.

A program a tálcán (macOS-en a menüsorban) is elfér, és egy [gyorsbillentyűvel](../program/shortcuts.md) hívható elő.
