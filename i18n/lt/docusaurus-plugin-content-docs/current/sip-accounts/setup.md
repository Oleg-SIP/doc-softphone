---
title: SIP paskyros nustatymas
sidebar_position: 1
description: Prijunkite AI Softphone prie savo IP stotelės ar SIP paslaugų teikėjo skiltyje Nustatymai → Paskyros.
---

AI Softphone veikia su bet kuria IP stotele ar SIP paslaugų teikėju. Galite būti prisijungę prie tiek paskyrų (linijų), kiek turite, ir kiekviena paskyra turi savo nustatymus.

Atverkite **Nustatymai → Paskyros**.

<Shot name="05_settings_accounts" alt="Nustatymai → Paskyros: dvi paskyros, abi užregistruotos" />

## Paskyrų sąrašas {#the-list-of-accounts}

Kiekviena paskyra yra eilutė su:

- **žymimuoju langeliu**, kuris įjungia arba išjungia paskyrą;
- **tašku**, kuris yra žalias, kai paskyra užregistruota stotelėje;
- pavadinimu, o po juo — `naudotojas@serveris`;
- mygtuku **Atjungti**, kuris atjungia paskyrą nuo stotelės;
- mygtukais **▲** ir **▼**, kurie perkelia paskyrą sąraše aukštyn arba žemyn. Paskyrų ženkliukai [pagrindiniame lange](../interface/main-window.md) laikosi tos pačios tvarkos.

Mygtukas **Pridėti** viršutiniame dešiniajame kampe prideda paskyrą. Spustelėkite eilutę, kad po ja atvertumėte formą.

## Paskyros pridėjimas {#adding-an-account}

<Shot name="05d_account_add" alt="Naujos paskyros tuščia forma" />

Paspauskite **Pridėti**. Po sąrašu atsiveria tuščia forma, žymeklis yra lauke **Pavadinimas (nebūtinas)**. Užpildykite toliau nurodytus laukus, atverkite **Serverio nustatymai**, jei stotelei jų reikia, ir paspauskite **Įrašyti**. Nauja paskyra pradeda nuo įprastų reikšmių: UDP per 5060 prievadą, registracija atnaujinama kas 300 sekundžių.

## Paskyros forma {#the-account-form}

<Shot name="05b_account_edit" alt="Paskyros forma" />

| Laukas | Ką įvesti |
| --- | --- |
| **Pavadinimas (nebūtinas)** | Pavadinimas, rodomas paskyros ženkliuke pagrindiniame lange ir jos skambučiuose. Jei jis tuščias, paskyra rodoma kaip `naudotojas@serveris`. |
| **Naudotojo vardas** | Naudotojo vardas arba vidinis numeris, kurį suteikė jūsų stotelė ar paslaugų teikėjas. |
| **Slaptažodis** | Jo slaptažodis. Grįžus į formą laukas būna tuščias. Jis laikomas kompiuterio raktų pakete, niekada nustatymų faile. |
| **Serverio adresas** | Stotelės ar paslaugų teikėjo SIP serverio adresas, pavyzdžiui, `pbx.example.com`. |
| **Serverio nustatymai** | Išskleidžia rečiau reikalingus ryšio nustatymus; žr. toliau. |
| **Atsiliepti automatiškai** | Skiltyje **Atsiliepimas**: atsiliepia į šios paskyros įeinančius skambučius jums nieko nespaudžiant. Pagal numatymą išjungta. |

Paspauskite **Įrašyti**, kad išsaugotumėte pakeitimus. **Atsisakyti** juos atmeta, o **Ištrinti** pašalina paskyrą.

Kai taškas prie paskyros žalias, paskyra užregistruota, ir tai rodo ir jos ženkliukas pagrindiniame lange. Jei jis lieka pilkas ar raudonas, atverkite [Diagnostika](../troubleshooting/diagnostics.md): skirtukas **SIP** rodo užklausą `REGISTER` ir serverio atsakymą.

## Serverio nustatymai {#server-settings}

Daugumai stotelių čia nieko nereikia. Paspauskite **Serverio nustatymai**, kad juos parodytumėte; tas pats mygtukas tada vadinasi **Slėpti serverio nustatymus**.

<Shot name="05c_account_server_settings" alt="Paskyros serverio nustatymai, išskleisti" />

| Laukas | Numatytoji reikšmė | Kas tai |
| --- | --- | --- |
| **Tapatybės nustatymo naudotojas** | tuščia | Vardas, pagal kurį stotelė tikrina slaptažodį, kai jis nesutampa su **Naudotojo vardas**. Paveikslėlyje vidinis numeris yra `201`, o stotelė jį tapatina kaip `biuras201`. |
| **Transportas** | UDP | Ryšio su serveriu protokolas. Išskleidžiamasis sąrašas. |
| **Prievadas** | 5060 | Serverio prievadas. |
| **Išeinantis tarpinis serveris** | tuščia | Tarpinis serveris, per kurį turi eiti kiekviena užklausa, jei jūsų paslaugų teikėjas tokį nurodo. |
| **Registrar** | tuščia | Adresas, kuriame registruotis, jei tai ne **Serverio adresas**. |
| **Registruotis iš naujo, sekundėmis** | 300 | Kaip dažnai telefonas atnaujina registraciją. |
| **Klavišų tonai** | Garso srautas | Kaip klaviatūros tonai siunčiami stotelei. Išskleidžiamasis sąrašas. Keiskite tik tada, jei stotelė tonų negirdi. |

Telefono siūlomi kodekai nenustatomi kiekvienai paskyrai atskirai; jie yra skiltyje [Skambučių nustatymai](calls.md#audio-formats).
