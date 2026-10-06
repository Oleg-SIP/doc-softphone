---
title: Indulás
sidebar_position: 2
description: "\"A telefon indítása a számítógéppel, futva tartása az ablak bezárása után, valamint a tel:, callto: és sip: hivatkozások megnyitása.\""
---

A **Beállítások → Indulás** dönti el, hogyan indul a program, mit tesz az ablaka bezárása, és mi történik, ha egy másik programban egy telefonszámra kattint.

<Shot name="15_settings_startup" alt="Beállítások → Indulás" />

## Automatikus indítás {#autostart}

| Beállítás | Alapérték | Mit csinál |
| --- | --- | --- |
| **A telefon induljon el bejelentkezéskor** | ki | A programot a munkamenetével együtt indítja, így attól a pillanattól fogad hívásokat, hogy leül a géphez. |
| **Kicsinyítve induljon, ablak nélkül** | ki | Ablak megjelenítése nélkül indítja. Csak a fenti beállítással együtt érhető el. |

## Bezárás {#close}

**A telefon fusson tovább, ha az ablak bezárul**, alapértelmezés szerint bekapcsolva. A bezárt ablak nem jelent letett telefont: a hívások továbbra is beérkeznek, és az értesítési területen (macOS-en a menüsorban) lévő ikon visszahozza az ablakot. Ha ezt kikapcsolja, az ablak bezárásával a program kilép.

## Hívási hivatkozások {#call-links}

A `tel:`, `callto:` vagy `sip:` kezdetű hivatkozásokat — egy weboldalon, e-mailben vagy CRM-ben szereplő telefonszámot — ez a program is meg tudja nyitni.

- A **Hívási hivatkozások megnyitása ezzel a telefonnal** ezt a programot teszi meg a megnyitásukra szolgáló alkalmazásnak. A gomb szürke, ha már az.
- **Hívás azonnal, a Hívás gomb megnyomása nélkül** — alapértelmezés szerint kikapcsolva. A rákattintott szám bekerül a tárcsázóba, és ott vár; kapcsolja be ezt, hogy a program azonnal hívja, amint megérkezik.
