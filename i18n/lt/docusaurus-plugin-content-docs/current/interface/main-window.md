---
title: Pagrindinis langas
sidebar_position: 1
description: Telefonas kairėje, biblioteka ir nustatymai dešinėje — AI Softphone pagrindinio lango išdėstymas.
---

Pagrindinis langas yra pats telefonas. Su numatytuoju išdėstymu **Vienas langas** telefonas yra kairėje, o visa kita atsidaro dešinėje. [Išdėstymą galima pakeisti](../program/appearance.md).

<Shot name="03_contacts" full alt="Pagrindinis langas: telefonas kairėje ir skirtukas Kontaktai dešinėje" />

## Telefonas {#the-phone}

Iš viršaus į apačią kairėje pusėje yra:

- laukas **Numeris**;
- klaviatūra ir skambinimo klavišas;
- paskyrų ženkliukai;
- mygtukai, stebintys kitus vidinius numerius;
- keturios vietos, kur eiti: **Įrašai**, **Kontaktai**, **Istorija** ir **Nustatymai**.

### Numerio rinkiklis {#the-dialler}

- **Numeris** — įveskite arba įklijuokite numerį, kuriuo skambinsite. Laikrodžio piktograma lauko gale atveria numerių, kuriais neseniai skambinote arba iš kurių jums skambino, sąrašą.
- Apvalūs klavišai **1–9**, **\***, **0** ir **#** įveda numerį, o skambučio metu siunčia tonus (DTMF).
- Ragelio klavišas atlieka skambutį. Jis lieka pilkas, kol nėra numerio.

<Shot name="22_last_calls" full alt="Paskutinių skambučių sąrašas po lauku Numeris, šalia skirtuko Istorija" />

Kai paskutinių numerių sąrašas atvertas, lauke matoma rodyklė, o skambinimo klavišas persikelia į dešinę nuo jo. Kiekvienas įrašas yra vardas arba numeris, jei skambinančiojo nėra [Kontaktuose](contacts-history.md), su data. Raudonas ragelis žymi praleistą skambutį; skaičius skliaustuose — pavyzdžiui, *Pagalbos tarnyba (4)* — reiškia kelis skambučius iš eilės tai pačiai pusei.

### Paskyrų ženkliukai {#the-account-chips}

Po klaviatūra yra po vieną ženkliuką kiekvienai [paskyrai](../sip-accounts/setup.md). Žalias taškas reiškia, kad paskyra užregistruota stotelėje. Paryškintas ženkliukas (paveikslėlyje **305 Pagalba**) yra paskyra, iš kurios bus atliktas kitas skambutis; paspauskite kitą ženkliuką, kad jį pakeistumėte. Apvalus raudonas mygtukas dešinėje nuo ženkliukų yra režimas „netrukdyti“.

### Mygtukai {#the-buttons}

Po ženkliukais yra [mygtukai](../sip-accounts/buttons.md), kuriuos sukūrėte kolegoms ir linijoms, kiekvienas su lempute — paveikslėliuose **Kazlauskas** ir **Sandėlis**. Paspauskite mygtuką, kad paskambintumėte jo numeriu.

### Įrašai, Kontaktai, Istorija, Nustatymai {#recordings-contacts-history-settings}

Šie keturi įrašai apačioje kiekvienas atveria skirtuką dešinėje, vieną šalia kito: [Įrašai](../interface/recordings.md), [Kontaktai ir istorija](contacts-history.md) ir [Nustatymai](settings-overview.md). Atverti skirtukai lieka eilutėje dešinės pusės viršuje.

## Vykstantis skambutis {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Vykstantis skambutis" />

Skambučio metu numerio laukas persikelia į viršų su klaviatūros piktograma viduje, o skambutis rodomas kortelėje:

- skambučio būsena ir trukmė (**Pokalbyje · 0:21**), kitos pusės vardas, **Linija** ir paskyros, kuria vyksta skambutis, pavadinimas, taip pat numeris;
- du vertikalūs lygio stulpeliai kortelės šonuose, po vieną kiekvienam garso kanalui;
- mygtukų eilė: įrašyti (apskritimas), nutildyti (mikrofonas), sulaikyti (pauzė) ir raudonas mygtukas **Padėti ragelį**;
- antra eilė: peradresuoti (ragelis su rodykle) ir klaviatūra.

Skambutį galima peradresuoti tiesiogiai arba prieš tai pakalbėjus su žmogumi.

Jei numeris žinomas **Kontaktuose**, vietoje numerio rodomas vardas. Tiems patiems veiksmams yra [spartieji klavišai](../program/shortcuts.md): atsiliepti, padėti ragelį, sulaikyti ir nutildyti.

## Keli skambučiai vienu metu {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Keli skambučiai" />

Apie įeinantį skambutį praneša reklaminė juosta, kad ir kur dirbtumėte, net kai telefonas paslėptas. Naujas įeinantis skambutis atsiranda savo kortelėje virš sąrašo su žaliu, geltonu ir raudonu mygtukais bei eilute, nurodančia, su kuo dabar kalbate (**Pokalbyje su …**). Apačioje esantis sąrašas rodo kiekvieną skambutį su jo būsena — **Sulaikyta**, **Pokalbyje**, **Įeinantis skambutis** — ir paskyra, kuria jis vyksta. Pauzės piktograma žymi sulaikytą skambutį, o garsiakalbio piktograma — tą, kuriame kalbate.

Kas nutinka, kai kas nors skambina, kol jau kalbate, nustatoma skiltyje [Skambučių nustatymai](../sip-accounts/calls.md#call-waiting).

## Konferencija {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konferencija" />

Sujungti skambučiai rodomi kaip viena kortelė **Konferencija** paskyros linijoje. Kiekvienas dalyvis nurodytas su laiku pokalbyje ir savo mygtuku **Padėti ragelį**. Apačioje esantys mygtukai įrašo, nutildo ir baigia konferenciją visiems; platus mygtukas apačioje vėl išskaido konferenciją į atskirus skambučius.

## Fiksavimas {#capture}

Kai [perėmimas iš kitų programų](../capture/capture.md) leidžiamas skiltyje **Nustatymai → Fiksavimas**, tarp paskyrų ženkliukų ir mygtukų atsiranda juosta.

<Shot name="10_settings_capture" full alt="Fiksavimo juosta telefono apačioje: Fiksavimas · pasiruošta, Įrašyti ir du lygio stulpeliai" />

- **Fiksavimas · pasiruošta** reiškia, kad programa klausosi, ar kitoje programoje vyksta pokalbis.
- **Įrašyti** pradeda fiksavimą rankomis.
- Du ploni stulpeliai po juo rodo garso lygį: viršutinis esate jūs, apatinis — tai, ką groja kompiuteris. Kaip jie piešiami, nustatoma skiltyje **Vaizdas juostoje telefono papėdėje**.

Programa taip pat gali būti dėkle (macOS — meniu juostoje) ir būti iškviesta [sparčiuoju klavišu](../program/shortcuts.md).
