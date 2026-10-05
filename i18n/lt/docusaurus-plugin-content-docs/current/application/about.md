---
title: Apie programą
sidebar_position: 2
description: Versija, atnaujinimai, jūsų šalis, licencija, ką apima naudojimo ataskaita, atsiliepimo forma ir su kuo programa sukurta.
---

**Nustatymai → Apie programą** apima viską apie pačią programą.

<Shot name="20_settings_about" alt="Nustatymai → Apie programą" />

## Versija ir šalis {#version-and-country}

Viršuje yra pavadinimas, **Versija** (paveikslėlyje 1.0.0) ir nuoroda į svetainę [ai-softphone.com](https://ai-softphone.com/).

**Šalis** nurodo programai, kur esate. Tai padeda pasirinkti geriausią atnaujinimų serverį ir atveria kelią kalbos ir šnekos paslaugoms, talpinamoms jūsų šalyje. **Nustatyti automatiškai** ją užpildo.

## Atnaujinimai {#updates}

Skirtukas nurodo, ar turite naujausią versiją ir kada paskutinį kartą tikrinta. **Ieškoti atnaujinimų** patikrina dabar.

**Ieškoti atnaujinimų automatiškai**, pagal numatymą įjungta, tikrina kartą per dieną ir netrukus po telefono paleidimo. Ji paprašo serverio vieno nedidelio failo, ir niekas neatsisiunčiama ir neįdiegiama be jūsų leidimo.

## Licencija {#licence}

Programa yra laisvoji programinė įranga pagal GPL-2.0-or-later. Ji pateikiama be jokios garantijos, ir galite ją platinti toliau pagal tos licencijos sąlygas; visas tekstas pateikiamas faile pavadinimu `LICENSE`.

## Telemetrija {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Nustatymai → Apie programą: ką apima naudojimo ataskaita" />

Programa siunčia vieną nedidelę naudojimo ataskaitą per dieną. Prieš išsiunčiant pirmąją jums parodoma, kas joje yra, ir skirtukas tai pateikia:

| | Kas siunčiama |
| --- | --- |
| **Visada siunčiama** | Kad programa buvo paleista, jos versija ir sąsajos kalba; operacinės sistemos versija, lokalė, šalis ir laiko juosta. |
| **Siunčiama papildomai, veiksena Išplėsta** | Skambučių ir perimtų pokalbių skaitikliai; prijungtos stotelės gamintojas ir versija, niekada jos adresas; kiek [Apžvalgos](/interface/settings-overview) žingsnių atlikta ir pasirinktas išdėstymas. |
| **Niekada nesiunčiama, jokioje veiksenoje** | Numeriai, kuriais skambinote arba iš kurių jums skambino; paskyros, slaptažodžiai ar kas nors iš raktų paketo; kontaktai, pokalbiai, iššifruoti tekstai ar įrašai; viskas, ką įvedėte, ir bet kokie privatūs kompiuterio duomenys. |

Kiekvienas įdiegimas sukuria sau vieną atsitiktinį identifikatorių, kad tos pačios programos kopijos ataskaitas būtų galima atpažinti kaip vienas. Jis nėra išvestas iš nieko, kas susiję su jumis ar jūsų kompiuteriu, ir nieko neįvardija — tačiau kadangi jis išlieka, juo pažymėtas ataskaitas galima susieti tarpusavyje. Dėl to jos yra pseudoniminės, o ne anoniminės.

Pagrindinės ataskaitos pagrindas yra teisėtas interesas: žinoti, kurios versijos naudojamos, yra tai, kas leidžia pataisymui pasiekti tuos, kuriems jo reikia. Viskas, ką prideda išplėstinė ataskaita, yra joje todėl, kad tai pasirinkote, ir tai galite čia pakeisti bet kada.

### Ataskaitų teikimas {#reporting}

| Pasirinkimas | |
| --- | --- |
| **Išplėsta** | Pagrindinė ataskaita ir tai, ką pateikia *Siunčiama papildomai*. Pasirinkta paveikslėlyje. |
| **Pagrindinė** | Tik tai, kas *Visada siunčiama*. |
| **Išjungta** | Jokios ataskaitos. Pasiekiama tik Enterprise leidime; kitaip ši parinktis pilka. |

## Atsiliepimas {#feedback}

<Shot name="20c_settings_about_bottom" alt="Nustatymai → Apie programą: atsiliepimo forma ir komponentai, su kuriais sukurta programa" />

Forma, kuri rašo kūrėjams neišeinant iš programos.

| Laukas | |
| --- | --- |
| **Tema** ir **Žinutė** | Tai, ką norite pasakyti. |
| **Jūsų vardas** ir **Adresas atsakymui** | Abu nebūtini. Be adreso atsakyti nėra kaip. |
| **Pridėti žurnalą** | Prideda žurnalo pabaigą, apie 512 kB. Žr. [Diagnostika](/troubleshooting/diagnostics). |

**Siųsti** lieka pilkas, kol yra ką siųsti.

## Sukurta su {#built-with}

Komponentai, ant kurių sukurta programa, kiekvienas su savo licencija: Qt 6 (GPL-2.0 arba GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (viešasis domenas), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) ir PulseAudio klientas (LGPL-2.1-or-later). Kiekvienas naudojamas pagal šalia nurodytą licenciją; jei komponentas siūlo kelias, pasirinkta nurodytoji.
