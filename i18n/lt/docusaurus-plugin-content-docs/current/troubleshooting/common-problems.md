---
title: Dažnos problemos
sidebar_position: 2
description: "Ką patikrinti, kai paskyra neužsiregistruoja, nėra garso, skambutis ar susitikimas neįrašomas, nėra iššifruoto teksto, suflerius nepasileidžia arba nuoroda, spartusis klavišas ar API nieko nedaro, taip pat ką reiškia paties telefono pranešimai."
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

- **Nustatymai → Įrašymas**, pirmasis išskleidžiamasis sąrašas, nusprendžia, kurie skambučiai įrašomi; numatytoji reikšmė **Rankomis** įrašo tik kai skambučio kortelėje paspaudžiate įrašymo mygtuką. Žr. [Įrašai](/recordings).
- Įrašymas prasideda, kai atsiliepiama į skambutį, todėl neatsilieptas skambutis failo neturi.
- Modulis **Įrašymas** turi būti įjungtas skiltyje [Moduliai](/application/modules).
- Įrašai šalinami pagal ribas skiltyje **Laikymas**; prisegtas įrašas niekada nešalinamas.

## Susitikimas kitoje programoje nebuvo perimtas {#a-meeting-in-another-application-was-not-captured}

Žr. [Fiksavimas](/capture/).

- **Leisti fiksuoti garsą** skiltyje **Nustatymai → Fiksavimas** turi būti įjungta.
- Kai **Automatinis paleidimas** nustatytas į **Paklausti manęs** (numatytoji reikšmė), atsakykite į klausimą, kai jis atsiras; su **Niekada** paspauskite įrašymo mygtuką patys.
- Naudokite **Patikrinti** tame pačiame skirtuke: viršutinis stulpelis turi judėti, kai kalbate, apatinis — kai kas nors groja.
- Modulis **Fiksavimas** turi būti įjungtas skiltyje [Moduliai](/application/modules).

## Įrašas yra, bet nėra iššifruoto teksto ar santraukos {#there-is-a-recording-but-no-transcript-or-summary}

- Pokalbis iššifruojamas ir apibendrinamas savaime tik tada, jei skiltyje [Nustatymai → Apdorojimas](/ai-processing/processing) įjungta **Apdoroti pokalbius automatiškai**. Kitaip paprašykite to [įrašų lange](/interface/recordings).
- Turi būti [atpažintuvas](/ai-processing/transcription) ir [kalbos modelis](/ai-processing/processing#language-models), ir kiekvienas turi atsakyti savo adresu.
- Pasiekus mėnesio **Pinigų riba** ar **Žetonų riba**, automatinės taisyklės sustoja iki mėnesio pabaigos. Tai, ko prašote patys, niekada nesustabdoma.
- Skilties [Nustatymai → Apžvalga](/interface/settings-overview) žingsniai rodo, ką dar reikia nustatyti.

## Suflerius neatsiranda arba nepasileidžia {#the-prompter-does-not-appear-or-does-not-start}

**Suflerius** telefono apačioje esančiame sąraše atsiranda tik tada, kai yra trys dalykai: atpažintuvas su **Adresas sufleriui**, sėkmingai išlaikęs **Patikrinti** skiltyje [Nustatymai → Užrašas](/ai-processing/transcription#live-recognition-for-the-prompter), kalbos modelis ir žymė **Leisti naudoti suflerių** skiltyje [Nustatymai → Suflerius](/ai-processing/prompter). Modulis **Suflerius** turi būti įjungtas skiltyje [Moduliai](/application/modules).

Jei langas atsidaro, bet suflerius nepasileidžia, eilutė po jo mygtukais pasako, ko trūksta. [Kai jis nepasileidžia](/interface/prompter#when-it-does-not-start) pateikia visus pranešimus ir ką daryti.

## Telefonas dingo, kai užvėriau langą {#the-phone-disappeared-when-i-closed-the-window}

Kai **Leisti telefonui veikti toliau, kai langas užveriamas** įjungta, telefonas vis dar veikia, o skambučiai vis dar ateina. Piktograma pranešimų srityje (macOS — meniu juostoje) grąžina langą. Darbalaukyje be pranešimų srities telefonas sumažintas užduočių juostoje. Žr. [Paleidimas](/program/startup).

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

## Telefono pranešimai {#messages-the-phone-shows}

Kai kas nors nepavyksta, telefonas atskiroje eilutėje parašo kodėl. Eilutė po sąrašu po kelių sekundžių pradingsta pati.

### Kai skambutis neprasideda {#when-a-call-is-not-placed}

| Pranešimas | Ką daryti |
| --- | --- |
| *Nenustatyta nė viena paskyra* | Pridėkite paskyrą skiltyje [Nustatymai → Paskyros](/sip-accounts/setup). |
| *Neįjungta nė viena paskyra, todėl nėra linijos, iš kurios skambinti.* | Pažymėkite paskyros žymimąjį langelį skiltyje **Nustatymai → Paskyros**. |
| *Dar neregistruota nė viena linija.* | Paskyra įjungta, bet stotelėje dar neužregistruota. Palaukite, kol jos taškas taps žalias; jei netampa, žr. [Paskyra neužsiregistruoja](#the-account-will-not-register). |
| *Jau vyksta tiek pokalbių, kiek šis telefonas neša.* | Užbaikite vieną iš pokalbių ir skambinkite dar kartą. |
| *Paskyros, iš kurios tai būtų buvę skambinta, nebėra.* | Eilutė priklauso paskyrai, kuri jau ištrinta. Surinkite numerį rinkiklyje. |
| *Ši eilutė neturi numerio, kuriuo būtų galima perskambinti.* | Skambintojas paslėpė numerį, todėl nėra kam perskambinti. |

### Kai paskyra neprisijungia {#when-an-account-does-not-connect}

| Pranešimas | Ką daryti |
| --- | --- |
| *To serverio adreso nepavyko rasti. Patikrinkite, ar jame nėra rašybos klaidos.* | Patikrinkite **Serverio adresas** [paskyros formoje](/sip-accounts/setup). |
| *Serverio nepavyko pasiekti. Patikrinkite adresą, prievadą ir savo tinklą.* | Patikrinkite **Serverio adresas**, taip pat **Transportas** ir **Prievadas** skiltyje **Serverio nustatymai**. SIP gali stabdyti ir užkarda. |
| *Serveris atmetė šį naudotojo vardą arba slaptažodį.* | Patikrinkite **Naudotojo vardas** ir **Slaptažodis**. Jei stotelė tikrina slaptažodį pagal kitą vardą, užpildykite **Tapatybės nustatymo naudotojas**. |
| *Nepavyko patikrinti serverio sertifikato. Jei serverio administratorius jį išdavė pats, skiltyje „Serverio nustatymai“ panaikinkite „Tikrinti sertifikatą“.* | Rodoma esant TLS ryšiui. Jei stotelė naudoja pačios sukurtą sertifikatą, nuimkite žymą **Tikrinti sertifikatą** skiltyje **Serverio nustatymai**. |
| *Šios paskyros slaptažodžio nepavyko perskaityti iš raktinės. Atrakinkite ją ir prisijunkite iš naujo.* | Atrakinkite kompiuterio slaptažodžių saugyklą (macOS — Keychain), tada prie paskyros paspauskite **Prijungti**. |

### Pokalbio metu {#during-a-call}

| Pranešimas | Ką daryti |
| --- | --- |
| *Nėra bendro garso formato* | Stotelė ir telefonas neturi bendro kodeko. Įjunkite kurį nors stotelės naudojamą skiltyje [Garso formatai](/sip-accounts/calls#audio-formats). |
| *Nei mikrofono, nei garsiakalbių* | Pasirinkite įrenginius skiltyje [Nustatymai → Įrenginiai](/sip-accounts/devices). |
| *Neįrašoma: diskas nusileido iki ribos. Atlaisvinkite vietos arba pakeiskite ribą nustatymuose.* | Laisva vieta diske pasiekė slenkstį (**Disko vietos slenkstis**) — žr. [Įrašai](/recordings). Atlaisvinkite vietos arba sumažinkite slenkstį. |

### Paleidžiant telefoną {#when-the-phone-starts}

*Duomenų bazės perskaityti negalima* reiškia, kad duomenų bazę sukūrė kita programos versija ir ši jos perskaityti negali. Paprastai senesnė versija buvo paleista su naujesnės duomenimis: iš naujo įdiegus naujesnę versiją, ji atvers duomenų bazę tokią, kokia buvo. **Pradėti iš naujo**, priešingai, sukuria tuščią duomenų bazę — visi kontaktai ir visi istorijos skambučiai dingsta, ir to atšaukti negalima. Prieš spausdami galite išsisaugoti duomenų bazės failo kopiją; kur jis yra, nurodo [Diagnostika](/troubleshooting/diagnostics#files).
