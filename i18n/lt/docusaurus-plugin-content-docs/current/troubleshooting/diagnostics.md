---
title: Diagnostika
sidebar_position: 1
description: Langas, kuris rodo kiekvieną žodį, kurį telefonas ir stotelė sako vienas kitam, žurnalo failas ir vieta, kur programa laiko savo failus.
---

Langas **Diagnostika** rodo, ką telefonas ir stotelė sako vienas kitam, tą akimirką, kai jie tai sako. Tai pirmoji vieta, kur žiūrėti, kai paskyra neužsiregistruoja arba skambutis nesujungiamas, ir langas, kurį IT skyrius paprašys jūsų atsiųsti.

Jis atveriamas iš **Nustatymai → Diagnostika** mygtuku **Atverti diagnostiką**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Langas Diagnostika" />

Jis rodo kiekvieną SIP pranešimą, kurį telefonas siunčia ar gauna, tuo metu, kai tai vyksta, kartu su vykstančių skambučių garso statistika. Jis renka duomenis tik kol yra atvertas, ir užvėrus nieko nelaiko.

## SIP {#sip}

Skirtukas **SIP** yra signalizacijos žurnalas.

- Kiekvienas pranešimas yra eilutė su laiku (milisekundės tikslumu), kas tai yra ir kur jis nukeliavo: rodyklė į dešinę yra telefono išsiųsta, rodyklė į kairę — gauta iš serverio. Po ja: `to` arba `from` serverio adresas ir transportas (pavyzdžiui, *per UDP*).
- Pranešimą galima išskleisti, kad būtų matomos visos jo antraštės (trečias pranešimas paveikslėlyje).
- **Ieškoti** randa tekstą žurnale.
- **Išvalyti** jį išvalo.

Ekrano kopijoje esantis pavyzdys yra sveika registracija: telefonas siunčia `REGISTER`, serveris atsako `200 OK (REGISTER)`.

## Skambučiai {#calls}

Antrasis skirtukas, **Skambučiai**, rodo kiekvieno vykstančio skambučio kokybės rodiklius.

## Nustatymų skirtukas Diagnostika {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Nustatymai → Diagnostika" />

### Žurnalo išsamumas {#log-detail}

Išskleidžiamasis sąrašas pasirenka, kiek programa rašo į savo žurnalo failą; paveikslėlyje tai **Išsamu**. Tai įsigalioja iškart, taip pat jau vykstančiame skambutyje — būtent tame, kurio įrašo norite. Išsamiausias nustatymas užrašo kiekvieną SIP pranešimą. Tai užima daug vietos, bet slaptažodžiai pašalinami prieš ką nors įrašant, todėl failą saugu siųsti su pagalbos užklausa.

**Siųsti kopiją į sistemos žurnalą** rašo žurnalą ir į pačios sistemos žurnalą, jei kompiuterio žurnalai renkami centralizuotai. Toliau nurodytas failas rašomas bet kuriuo atveju, ir būtent jį reikia pridėti prie pagalbos užklausos.

### Failai {#files}

Skirtukas pateikia, kur programa laiko savo failus ir kokio dydžio kiekvienas.

| Failas | Turinys |
| --- | --- |
| Nustatymai | Nustatymai. Niekada slaptažodžiai ar prieigos raktai. |
| Duomenų bazė | Kontaktai, istorija, iššifruoti tekstai ir apibendrinimai. |
| Įrašai | Įrašų garsas. |
| Žurnalas | Žurnalas. |

**Windows**

| Failas | Kur |
| --- | --- |
| Nustatymai | `%APPDATA%\ai-softphone\settings.json` |
| Duomenų bazė | `%LOCALAPPDATA%\ai-softphone\ai-softphone.db` |
| Įrašai | `%LOCALAPPDATA%\ai-softphone\recordings` |
| Žurnalas | `%LOCALAPPDATA%\ai-softphone\logs\ai-softphone.log` |

**macOS**

| Failas | Kur |
| --- | --- |
| Nustatymai | `~/Library/Preferences/ai-softphone/settings.json` |
| Duomenų bazė | `~/Library/Application Support/ai-softphone/ai-softphone.db` |
| Įrašai | `~/Library/Application Support/ai-softphone/recordings` |
| Žurnalas | `~/Library/Logs/ai-softphone/ai-softphone.log` |

**Linux**

| Failas | Kur |
| --- | --- |
| Nustatymai | `~/.config/ai-softphone/settings.json` |
| Duomenų bazė | `~/.local/share/ai-softphone/ai-softphone.db` |
| Įrašai | `~/.local/share/ai-softphone/recordings` |
| Žurnalas | `~/.local/state/ai-softphone/ai-softphone.log` |

Po sąrašu **Atverti** parodo žurnalą, o **Išvalyti** jį išvalo. Išvalykite žurnalą prieš pat atkartodami problemą; išvalymo atšaukti negalima.

## Ką siųsti pagalbai {#what-to-send-to-support}

1. Nustatykite **Žurnalo išsamumas** į išsamiausią lygį.
2. Paspauskite **Išvalyti** ir tada atkartokite problemą.
3. Atsiųskite žurnalo failą arba atverkite **Nustatymai → Apie programą**, parašykite mums iš ten ir pažymėkite **Pridėti žurnalą** — žr. [Apie programą](../application/about.md#feedback).

Jei problema susijusi su registracija ar skambučiu, atsiųskite ir nepavykusio bandymo eilutes iš skirtuko **SIP**.

Programos dalį, kuri yra už viso to — SIP sekimą, medijos statistiką ir skaitiklius —, galima išjungti skiltyje [Moduliai](../application/modules.md) (**Diagnostika**).
