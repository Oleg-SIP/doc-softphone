---
title: Mygtukai
sidebar_position: 4
description: "\"BLF mygtukai: vieno paspaudimo mygtukai, kurie skambina jūsų IP stotelės vidiniu numeriu ir rodo, ar jis laisvas, skamba ar užimtas.\""
---

Mygtukai yra programinio telefono **BLF** (Busy Lamp Field) klavišai — ta pati funkcija, kurią turi stalinis telefonas IP stotelėje. Mygtukas skambina vidiniu numeriu vienu paspaudimu. Mygtukas, stebintis savo liniją, taip pat rodo lemputę: telefonas klausia stotelės apie tą vidinį numerį ir rodo, ar jis laisvas, skamba ar užimtas, kaip tai daro sekretorės pultas ar stalinio telefono programuojami klavišai.

BLF reikia stotelės palaikymo: stotelė turi pranešti telefonui vidinio numerio būseną. Dauguma IP stotelių tai daro. Jei jūsiškė nedaro, lemputė lieka pilka, o mygtukas vis tiek skambina.

Mygtukai yra po paskyrų ženkliukais [pagrindiniame lange](/interface/main-window), o kuriami skiltyje **Nustatymai → Mygtukai**.

<Shot name="08_settings_buttons" alt="Nustatymai → Mygtukai: du mygtukai" />

Kiekviena eilutė yra mygtukas: lemputė, jo užrašas, o dešinėje — jo numeris ir paskyra, kuriai jis priklauso, pavyzdžiui, *212 · 201 Biuras*. **▲** ir **▼** perkelia mygtuką aukštyn arba žemyn; pagrindinio lango mygtukai laikosi šios tvarkos. **Pridėti** sukuria naują.

## Lemputė {#the-lamp}

Mygtukas, stebintis savo liniją, rodo lemputę:

| Lemputė | Linija yra |
| --- | --- |
| Žalia | laisva |
| Gintarinė | skamba |
| Raudona | pokalbyje |
| Pilka | nežinoma: stotelė nepraneša |

## Mygtuko pridėjimas {#adding-a-button}

<Shot name="08b_button_add" alt="Naujo mygtuko forma" />

Paspauskite **Pridėti**; po sąrašu atsiveria forma.

| Laukas | Ką įvesti |
| --- | --- |
| **Numeris** | Numeris, kuriuo skambinti. |
| **Linija** | Paskyra, iš kurios skambinama. Pasirinkite ją pirmiausia: kad parodytų lemputę, telefonas klausia tos linijos stotelės apie šį numerį, todėl turi žinoti, kurios. |
| **Užrašas** | Tekstas ant mygtuko, pavyzdžiui, žmogaus vardas. Ant mygtuko telpa tik trumpas užrašas; ilgesnis nukerpamas. |
| **Rodyti, ar ši linija užimta** | Jungiklis. Įjungtas — mygtukas turi lemputę. Išjungtas — jis tik skambina. |

**Įrašyti** lieka pilkas, kol forma neužpildyta. **Atsisakyti** atmeta formą.

Programos dalį, kuri rodo mygtukus, galima išjungti skiltyje [Moduliai](/application/modules).
