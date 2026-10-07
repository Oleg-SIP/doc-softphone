---
title: Fiksavimas
sidebar_label: Perėmimas iš kitų programų
sidebar_position: 1
description: "\"Fiksavimas įrašo kitoje programoje — Zoom, Teams, Meet ar bet kurioje kitoje — vykstantį pokalbį tiesiai iš kompiuterio.\""
---

**Fiksavimas** — tai būdas, kuriuo AI Softphone įrašo kitoje programoje vykstantį pokalbį, pavyzdžiui, susitikimą Zoom, Teams ar Meet. Jis įrašo tiesiai iš kompiuterio, laikydamas kitą pusę ir jus atskiruose kanaluose, o pabaigoje laukia tas pats iššifruotas tekstas ir apibendrinimas kaip ir skambučio.

Programa ieško pokalbio, o ne programos pavadinimo, todėl ji veikia su viskuo, kas pokalbį sukuria.

Nustatymų [Apžvalga](../interface/settings-overview.md) tai pateikia skiltyje **Perėmimas iš kitų programų** ir suskirsto į tris žingsnius:

1. **Įjungti perėmimą** — [leisti fiksuoti garsą](#turning-capture-on).
2. **Perimti pokalbį** — [pradėti ir baigti](#capturing-a-conversation) įrašą.
3. **Suteikti jam vardą** — [pervadinti](#giving-it-a-name) įrašą.

## Fiksavimo įjungimas {#turning-capture-on}

Fiksavimas išjungtas, kol jo neleidžiate. Atverkite **Nustatymai → Fiksavimas**.

<Shot name="10_settings_capture" alt="Nustatymai → Fiksavimas" />

| Nustatymas | Numatytoji reikšmė | Ką jis daro |
| --- | --- | --- |
| **Leisti fiksuoti garsą** | išjungta | Leidžia programai įrašyti kitų programų garsą. Kol jis išjungtas, niekas nefiksuojama. |
| **Priminti man pasakyti kitiems apie įrašymą** | įjungta | Fiksavimo metu rodo priminimą. Žymimasis langelis pilkas, kol fiksavimas neleidžiamas. |

:::caution
Įrašoma viskas, ką groja kompiuteris, ne tik pokalbis. Šis telefonas negali pranešti apie įrašymą kieno nors kito susitikime, todėl tai pasakyti — jūsų reikalas.
:::

Programos dalis, kuri tai daro, yra modulis **Fiksavimas**, *Kitoje programoje vykstančio pokalbio įrašymas*. Jį galima išjungti skiltyje [Moduliai](../application/modules.md).

## Fiksavimo pradžia {#starting-a-capture}

Kai fiksavimas leidžiamas, [pagrindinio lango](../interface/main-window.md#capture) apačioje rodoma jo būsena — **Fiksavimas · pasiruošta** — su mygtuku **Įrašyti** dešinėje. Paspauskite **Įrašyti**, kad pradėtumėte rankomis.

### Automatinis paleidimas {#automatic-start}

**Automatinis paleidimas** nusprendžia, kas nutinka, kai programa išgirsta pokalbį kitoje programoje:

| Pasirinkimas | Kas nutinka |
| --- | --- |
| **Niekada** | Fiksavimas prasideda tik paspaudus **Įrašyti**. |
| **Paklausti manęs** | Programa klausia, ar jį įrašyti. Numatytoji reikšmė. |
| **Visada** | Programa pradeda įrašyti pati. |

Skiltyje **Programos su savo atsakymu** programai galima suteikti savo atsakymą — pavyzdžiui, *Visada įrašyti šią programą* iš klausimo, kurį užduoda programa.

*Paklausti nieko nekainuoja: sekundės iki jūsų atsakymo jau išsaugotos.*

### Prieš pradžią {#before-the-start}

Slankiklis **Prieš pradžią** nurodo, kiek sekundžių garso iki įrašo pradžios išsaugoma, pagal numatymą **15 sekundžių**. Jis skirtas tam, kad niekas nepradingtų, kol pokalbis pastebimas: įrašas, kuris prasideda paspaudus **Įrašyti** arba atsakius į klausimą, vis tiek prasideda nuo žodžių, kurie buvo prieš tai.

## Pokalbio perėmimas {#capturing-a-conversation}

Įrašymo metu pagrindiniame lange rodomas raudonas taškas, įrašo pavadinimas (pavyzdžiui, **Susitikimas programoje Zoom**), praėjęs laikas ir abu kanalai kaip bangų formos.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Susitikimo įrašymas" />

- **Sustabdyti įrašymą** jį baigia.
- Langas lieka matomas įrašymo metu ir primena pasakyti dalyviams, kad susitikimas įrašomas.

### Ką rodo vaizdas {#what-the-picture-shows}

Dar du nustatymai pasirenka, kaip piešiamas garso lygis:

| Nustatymas | Numatytoji reikšmė | Kur |
| --- | --- | --- |
| **Vaizdas pagrindiniame lange** | Banga | Abu kanalai fiksavimo metu. |
| **Vaizdas juostoje telefono papėdėje** | Du lygiai | Du ploni stulpeliai po **Fiksavimas · pasiruošta**. |

### Patikrinimas {#testing-it}

Skiltyje **Patikrinti** skirtuke yra du stulpeliai: **Jūs** ir **Kita pusė**. *Viršutinis stulpelis juda, kai kalbate, apatinis — kai kas nors groja.* Prieš svarbų susitikimą ištarkite žodį ir paleiskite kokį nors garsą, kad pamatytumėte, jog programa girdi abi puses.

## Vardo suteikimas {#giving-it-a-name}

Pieštukas šalia įrašo pavadinimo leidžia jį pervadinti įrašymo metu. Įrašas, kuriam nesuteikėte vardo, sąraše rodomas kaip **Kita programa**.

## Kur patenka įrašas {#where-the-recording-goes}

Perimtas pokalbis atsiranda [įrašų lange](../interface/recordings.md) kaip ir bet kuris kitas, su savo piktograma — langu vietoje ragelio — ir su jūsų suteiktu pavadinimu arba **Kita programa**.

<Shot name="01_recordings" alt="Perimti susitikimai skirtuke Įrašai, pažymėti lango piktograma" />

Jis iššifruojamas, apibendrinamas, priskiriamas kategorijai ir pažymimas žymomis pagal tas pačias [taisykles](../ai-processing/processing.md#rules) kaip skambutis. Perimto susitikimo iššifruotame tekste kalbėtojas rodomas kaip **Kita programa** ten, kur skambutyje būtų kitos pusės vardas; bibliotekos **Ieškoti** randa ir tai, kas jame pasakyta.
