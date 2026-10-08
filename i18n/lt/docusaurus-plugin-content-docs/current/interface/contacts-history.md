---
title: Kontaktai ir istorija
sidebar_position: 3
description: Adresų knyga ir skambučių istorija šalia telefono.
---

**Kontaktai** ir **Istorija** atsiveria kaip du skirtukai dešinėje nuo telefono, kad galėtumėte susirasti numerį kalbėdami.

## Kontaktai {#contacts}

<Shot name="03_contacts" alt="Skirtukas Kontaktai" />

- **Ieškoti** filtruoja sąrašą, kol rašote.
- **Pridėti** sukuria kontaktą.
- Kiekvienas kontaktas pateikiamas su vardu, o po juo — numeris ir paskyra, per kurią kontaktui skambinama, pavyzdžiui, *231 · 201 Biuras*.

Įeinantis skambutis iš žinomo numerio rodo kontakto vardą, taip pat ir paskutinių skambučių sąrašas bei skambučių istorija — taip veikia skambinančiojo atpažinimas.

### Kontakto redagavimas {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Redaguoti atvertas kontaktas" />

Pažymėkite kontaktą, kad jo eilutės dešinėje atsirastų pieštukas ir ragelis. Ragelis skambina kontaktui; pieštukas atveria formą po eilute:

| Laukas | Ką įvesti |
| --- | --- |
| **Pavadinimas** | Kaip kontaktas rodomas. |
| **Numeris** | Numeris, kuriuo skambinti. |
| Išskleidžiamasis sąrašas po lauku **Numeris** | Paskyra, per kurią kontaktui skambinama. |

**Įrašyti** išsaugo pakeitimus, **Atsisakyti** juos atmeta, o **Ištrinti** pašalina kontaktą.

## Istorija {#history}

<Shot name="21_history" alt="Skirtukas Istorija" />

Skambučių istorija, naujausi pirmi. Viršuje:

- išskleidžiamasis sąrašas, pagal numatymą **Visi skambučiai**, susiaurina sąrašą iki vienos skambučių rūšies;
- **Ieškoti** filtruoja pagal tai, ką įvedate.

Kiekvienas įrašas turi piktogramą skambučio rūšiai — išeinantį ragelį arba raudoną ragelį su laikrodžiu praleistam skambučiui —, kitos pusės vardą (arba numerį), o po juo datą, skambučio baigtį, trukmę, numerį ir paskyrą. Neseni skambučiai rodomi kaip *Vakar, 22:33* arba savaitės diena, senesni — su data.

| Skambučio baigtis | Rodoma kaip |
| --- | --- |
| Jūs kalbėjotės | **išeinantis** arba įeinantis ir trukmė, pavyzdžiui, *48 s* |
| Į įeinantį skambutį neatsiliepta | **Praleistas** |
| Jūsų atliktas skambutis nebuvo sujungtas | **Nepraėjo** |

Pažymėkite įrašą, kad jo dešinėje atsirastų keturi mygtukai:

| Mygtukas | Ką daro |
| --- | --- |
| Žmogus su pliusu | Prideda numerį prie [Kontaktų](#contacts). |
| ▶ | Groja skambučio įrašą, jei jis buvo įrašytas. |
| Šiukšlinė | Ištrina įrašą. |
| Ragelis | Perskambina numeriu. |

### Kiek laiko laikoma istorija {#how-long-the-log-is-kept}

Skambučių istorija yra įrodymas, todėl iš jos niekas nepašalinama, nebent jūs taip nurodote: pagal numatymą saugomas kiekvienas skambutis. Laikymo laikotarpis ir mygtukas **Išvalyti skambučių istoriją** yra skiltyje [Skambučių nustatymai](../sip-accounts/calls.md#history).

Praleistus ir atmestus skambučius taip pat galima nuskaityti per [vietinį REST API](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
