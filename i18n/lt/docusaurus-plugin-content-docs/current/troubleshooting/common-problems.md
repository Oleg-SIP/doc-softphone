---
title: Dažnos problemos
sidebar_position: 2
description: "\"Ką patikrinti, kai paskyra neužsiregistruoja, nėra garso, skambutis ar susitikimas neįrašomas, nėra iššifruoto teksto arba nuoroda, spartusis klavišas ar API nieko nedaro.\""
---

Kiekvienas punktas nurodo nustatymą, kuris tai lemia. Jei atsakymo čia nėra, atverkite [Diagnostika](/troubleshooting/diagnostics): ji rodo, ką telefonas ir stotelė sako vienas kitam.

## Paskyra neužsiregistruoja {#the-account-will-not-register}

Taškas prie paskyros skiltyje **Nustatymai → Paskyros** lieka pilkas ar raudonas.

1. Patikrinkite **Naudotojo vardas**, **Slaptažodis** ir **Serverio adresas** [paskyros formoje](/sip-accounts/setup).
2. Jei jūsų stotelė tikrina slaptažodį pagal kitą vardą nei vidinis numeris, užpildykite **Tapatybės nustatymo naudotojas** skiltyje **Serverio nustatymai**.
3. Patikrinkite **Transportas** ir **Prievadas** pagal tai, ko tikisi stotelė.
4. Atverkite [diagnostikos lango](/troubleshooting/diagnostics) skirtuką **SIP** ir peržiūrėkite užklausą `REGISTER` bei serverio atsakymą.

## Aš negirdžiu arba manęs negirdi {#i-cannot-hear-or-i-cannot-be-heard}

Atverkite [Nustatymai → Įrenginiai](/sip-accounts/devices).

- Pasakykite ką nors: juosta po **Mikrofonas** turi judėti. Jei nejuda, pasirinkite kitą mikrofoną.
- Paspauskite **Patikrinti** po **Garsiakalbiai**, kad išgirstumėte garsą pasirinktame įrenginyje.
- Patikrinkite **Garsumas** slankiklius. **Nutildyti mikrofoną** skambučio kortelėje ir [spartusis klavišas](/program/shortcuts) **Nutildyti mikrofoną** išjungia mikrofoną skambučio metu.
- Skambėjimas gali būti nustatytas skambėti kitame įrenginyje nei tas, kuriuo kalbate — **Skambėjimas**, antrasis išskleidžiamasis sąrašas.

## Skambutis skamba prastai arba neprasideda {#the-call-sounds-bad-or-does-not-start}

Kodekai siūlomi skilties [Nustatymai → Skambučiai](/sip-accounts/calls#audio-formats) sąrašo tvarka. Palikite įjungtus kodekus, kuriuos naudoja jūsų stotelė, ir geriausią iš jų padėkite pirmą. Pakeitimas galioja nuo kito skambučio.

## Antras skambutis neskamba {#a-second-call-does-not-ring}

Kas nutinka, kai kas nors skambina, kol kalbate, nustatoma skiltyje [Skambučio laukimas](/sip-accounts/calls#call-waiting).

## Skambutis nebuvo įrašytas {#a-call-was-not-recorded}

- **Nustatymai → Įrašymas**, pirmasis išskleidžiamasis sąrašas, nusprendžia, kurie skambučiai įrašomi; numatytoji reikšmė **Rankomis** įrašo tik kai skambučio kortelėje paspaudžiate įrašymo mygtuką. Žr. [Skambučių įrašymas](/recordings/call-recording).
- Įrašymas prasideda, kai atsiliepiama į skambutį, todėl neatsilieptas skambutis failo neturi.
- Modulis **Įrašymas** turi būti įjungtas skiltyje [Moduliai](/application/modules).
- Įrašai šalinami pagal ribas skiltyje **Laikymas**; prisegtas įrašas niekada nešalinamas.

## Susitikimas kitoje programoje nebuvo perimtas {#a-meeting-in-another-application-was-not-captured}

Žr. [Fiksavimas](/capture/).

- **Leisti fiksuoti garsą** skiltyje **Nustatymai → Fiksavimas** turi būti įjungta.
- Kai **Automatinis paleidimas** nustatytas į **Paklausti manęs** (numatytoji reikšmė), atsakykite į klausimą, kai jis atsiras; su **Niekada** paspauskite **Įrašyti** patys.
- Naudokite **Patikrinti** tame pačiame skirtuke: viršutinis stulpelis turi judėti, kai kalbate, apatinis — kai kas nors groja.
- Modulis **Fiksavimas** turi būti įjungtas skiltyje [Moduliai](/application/modules).

## Įrašas yra, bet nėra iššifruoto teksto ar santraukos {#there-is-a-recording-but-no-transcript-or-summary}

- Pokalbis iššifruojamas ir apibendrinamas savaime tik tada, jei skiltyje [Nustatymai → Apdorojimas](/ai-processing/processing) įjungta **Apdoroti pokalbius automatiškai**. Kitaip paprašykite to [įrašų lange](/interface/recordings).
- Turi būti [atpažintuvas](/ai-processing/transcription) ir [kalbos modelis](/ai-processing/processing#language-models), ir kiekvienas turi atsakyti savo adresu.
- Pasiekus mėnesio **Pinigų riba** ar **Žetonų riba**, automatinės taisyklės sustoja iki mėnesio pabaigos. Tai, ko prašote patys, niekada nesustabdoma.
- Skilties [Nustatymai → Apžvalga](/interface/settings-overview) žingsniai rodo, ką dar reikia nustatyti.

## Telefonas dingo, kai užvėriau langą {#the-phone-disappeared-when-i-closed-the-window}

Kai **Leisti telefonui veikti toliau, kai langas užveriamas** įjungta, telefonas vis dar veikia, o skambučiai vis dar ateina. Piktograma pranešimų srityje (macOS — meniu juostoje) grąžina langą. Žr. [Paleidimas](/program/startup).

## Telefono numeris naršyklėje ar CRM neskambina {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Paspauskite **Atverti skambučių nuorodas šiuo telefonu** skiltyje [Nustatymai → Paleidimas](/program/startup#call-links). Spustelėtas numeris patenka į numerio rinkiklį ir ten laukia, nebent įjungta **Skambinti iškart, nespaudžiant Skambinti**.

## Mygtuko lemputė lieka pilka {#a-buttons-lamp-stays-grey}

Stotelė nepraneša, ar vidinis numeris laisvas. Mygtukas vis tiek skambina. Žr. [Mygtukai](/sip-accounts/buttons).

## REST API neatsako {#the-rest-api-does-not-answer}

- **Leisti kitoms šio kompiuterio programoms valdyti telefoną** turi būti įjungta skiltyje [Nustatymai → Integracija](/integration/rest-api), o modulis **Integracija** — skiltyje [Moduliai](/application/modules).
- Adresas yra `http://127.0.0.1:8377`, nebent pakeitėte **Prievadas**.
- Grupė, kurios neatvėrėte skiltyje **Prieiga**, į kiekvieną užklausą atsako `404`.
- Jei nustatėte **Prieigos raktą**, užklausos, kurios keičia išsaugotus duomenis, turi jį pateikti antraštėje `Authorization`.
- Daugiau simptomų yra skiltyje [Kai neveikia](/integration/rest-api#when-it-does-not-work).

## Žiniatinklio kabliai neateina {#webhooks-do-not-arrive}

Paspauskite **Siųsti bandomąjį įvykį** skiltyje [Nustatymai → Integracija](/integration/webhooks). REST API skaitikliai `webhooks_failed_total` ir `webhooks_dropped_total` rodo, kaip vyksta pristatymas; [Kai niekas neateina](/integration/webhooks#when-nothing-arrives) paaiškina, ką kiekvienas jų reiškia.

## Spartusis klavišas nieko nedaro {#a-hotkey-does-nothing}

Atverkite [Spartieji klavišai](/program/shortcuts). Spartusis klavišas veikia, kol telefonas yra jūsų naudojama programa; kad jį naudotumėte iš bet kurios programos, pažymėkite **Visur**. Spustelėkite spartųjį klavišą ir vėl paspauskite derinį, jei kita programa jį perėmė.
