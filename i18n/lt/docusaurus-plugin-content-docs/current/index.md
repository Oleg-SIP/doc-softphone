---
slug: /
title: AI Softphone dokumentacija
sidebar_position: 1
description: Kas yra AI Softphone, kuo jis veikia ir kur aprašyta kiekviena programos dalis.
---

[AI Softphone](https://ai-softphone.com/) — tai programinis telefonas IP stotelei, kuris kiekvieną pokalbį dar ir paverčia tekstu bei rašytine santrauka. Pokalbis gali į jį patekti trimis būdais, ir visi trys atsiduria toje pačioje bibliotekoje su tuo pačiu įrašu, iššifruotu tekstu ir apibendrinimu:

- **skambutis**, atliktas ar priimtas programoje per bet kurią IP stotelę ar SIP paslaugų teikėją;
- **susitikimas** Zoom, Teams, Meet ar bet kurioje kitoje programoje, įrašytas tiesiai iš kompiuterio;
- **įrašas, kurį jau turite** — iš mobiliojo telefono, diktofono ar kitos sistemos —, pridėtas į biblioteką.

Įrašai, iššifruoti tekstai ir istorija laikomi faile, kuris priklauso jums. Nereikia nei paskyros, nei prenumeratos, o programa yra laisvoji programinė įranga pagal GPL v2.

## Nuo pokalbio iki apibendrinimo {#from-a-conversation-to-a-write-up}

1. Ateina pokalbis: skambutis, susitikimas ar failas.
2. Jis įrašomas dviem kanalais, kad tai, ką pasakėte jūs, ir tai, ką pasakė kita pusė, liktų atskirai.
3. Jis iššifruojamas pagal kalbėtojus, sinchroniškai su garsu.
4. Jūsų pasirinktas kalbos modelis jį apibendrina: santrauka, užduotys, kategorija, žymos ir įspėjamieji signalai — ir galite pokalbio paklausti.

## Atsisiuntimas ir sistemos reikalavimai {#download-and-system-requirements}

Programą nemokamai galima atsisiųsti iš [ai-softphone.com](https://ai-softphone.com/#download): diegimo programa (`.exe`) Windows, disko atvaizdas (`.dmg`) macOS ir AppImage arba `.deb` Linux. Diegimo programai, disko atvaizdui ir AppImage iš anksto nieko kito diegti nereikia — Qt, OpenSSL ir C++ vykdymo aplinka keliauja juose. Išimtis yra `.deb`: jis naudoja pačios sistemos C++ vykdymo aplinką, žr. toliau. Jums reikės SIP paskyros iš savo paslaugų teikėjo arba iš paties valdomos stotelės. Įrašymas veikia iškart, kai programa įdiegta; iššifravimui ir apibendrinimui reikia jūsų pasirinktos paslaugos ar modelio jūsų kompiuteryje.

| Sistema | Reikalavimai |
| --- | --- |
| macOS | macOS 14.4 ar naujesnė; tik Apple silicon — Intel Mac jos atverti negali, net per Rosetta; Metal grafika; 160 MB disko vietos ir įrašai. Sistema vieną kartą paprašo leidimo naudoti mikrofoną. |
| Windows | Windows 10 versija 1809 (versija 17763) ar naujesnė ir Windows 11; 64 bitų Intel arba AMD procesorius; Direct3D 11 arba OpenGL 2.1; 250 MB disko vietos ir įrašai. |
| Linux | Ubuntu 22.04 LTS ar naujesnė, Debian 12 ar naujesnė ir viskas, kas tokio pat amžiaus — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C biblioteka 2.35 ar naujesnė; 64 bitų Intel arba AMD procesorius; OpenGL 2.1 arba OpenGL ES 2.0, X11 arba Wayland aplinkoje; PipeWire arba PulseAudio (ALSA, jei nėra nė vieno); 200 MB disko vietos ir įrašai. Dėklo piktogramai reikia darbalaukio su būsenos pranešimų sritimi. |

Linux sistemoje AppImage veikia bet kuriame tokio pat amžiaus platinime: padarykite failą vykdomąjį ir paleiskite. `.deb` papildomai reikia pačios sistemos C++ vykdymo aplinkos iš GCC 13, kurią turi Ubuntu 24.04 ir Debian 13, bet neturi Ubuntu 22.04; bet kurioje senesnėje sistemoje naudokite AppImage.

Sąsaja pasiekiama trisdešimčia kalbų; kalba pasirenkama skiltyje [Išvaizda](/program/appearance) ir keičiama be paleidimo iš naujo.

Šios dokumentacijos ekrano kopijos padarytos macOS ir rodomos mažos: spustelėkite paveikslėlį, kad pamatytumėte jį visu dydžiu. Kitose sistemose programa atrodo ir veikia taip pat.

## Pirmieji žingsniai {#first-steps}

1. [Pridėkite paskyrą](sip-accounts/setup.md) savo stotelei ar SIP paslaugų teikėjui.
2. [Pasirinkite mikrofoną ir garsiakalbius](sip-accounts/devices.md) ir atlikite bandomąjį skambutį.
3. Nuspręskite, [kurie skambučiai įrašomi](recordings/call-recording.md).
4. Pridėkite [atpažintuvą](ai-processing/transcription.md) ir [kalbos modelį](ai-processing/processing.md), jei norite iššifruotų tekstų ir apibendrinimų.

**Nustatymai → Apžvalga** tvarko šį sąrašą už jus: žalias taškas žymi atliktą žingsnį, raudonas — dar likusį. Žr. [Nustatymų apžvalga](interface/settings-overview.md).

## Ką skaityti toliau {#where-to-read-next}

| Jei norite… | Skaitykite |
| --- | --- |
| Susigaudyti languose | [Sąsaja](interface/main-window.md) |
| Prijungti telefoną prie savo stotelės | [SIP paskyros nustatymas](sip-accounts/setup.md) |
| Pasirinkti mikrofoną, garsiakalbius ir skambėjimą | [Įrenginiai](sip-accounts/devices.md) |
| Nustatyti kodekus, skambučio laukimą ir skambučių istoriją | [Skambučių nustatymai](sip-accounts/calls.md) |
| Priskirti kolegas vieno paspaudimo mygtukams | [Mygtukai](sip-accounts/buttons.md) |
| Nuspręsti, kurie skambučiai įrašomi ir kiek laiko laikomi | [Skambučių įrašymas](recordings/call-recording.md) |
| Klausytis, ieškoti ir skaityti savo pokalbius | [Įrašų langas](recordings/recordings-window.md) |
| Įrašyti kitoje programoje vykstantį susitikimą | [Fiksavimas](capture/capture.md) |
| Pasirinkti atpažintuvą, kuris kalbą paverčia tekstu | [Užrašas](ai-processing/transcription.md) |
| Nuspręsti, kuris dirbtinis intelektas apibendrina jūsų pokalbius ir kiek tai gali kainuoti | [Apdorojimas](ai-processing/processing.md) |
| Keisti kategorijas, žymas ir įspėjamuosius signalus | [Žodynai](ai-processing/dictionaries.md) |
| Keisti išdėstymą, temą, paleidimą ir sparčiuosius klavišus | [Išvaizda](program/appearance.md), [Paleidimas](program/startup.md) ir [Spartieji klavišai](program/shortcuts.md) |
| Prijungti CRM ar kitą programą | [Žiniatinklio kabliai](integration/webhooks.md) ir [Vietinis REST API](integration/rest-api.md) |
| Matyti, ką telefonas ir stotelė sako vienas kitam | [Diagnostika](troubleshooting/diagnostics.md) |
| Rasti problemos priežastį | [Dažnos problemos](troubleshooting/common-problems.md) |
| Išjungti programos dalis | [Moduliai](application/modules.md) |
| Patikrinti versiją, atnaujinimus ir ką apima naudojimo ataskaita | [Apie programą](application/about.md) |

Puslapiai seka skirtukų tvarką skiltyje **Nustatymai**.

## Privatumas {#privacy}

- Pagal numatymą viskas lieka jūsų kompiuteryje: įrašai, iššifruoti tekstai ir istorija yra faile, kuris priklauso jums. Niekas iš pokalbio — nei numeris, nei vardas, nei žodis iš to, kas pasakyta — nekeliauja niekur, kur jūs patys to nenusiuntėte.
- Paskyrų slaptažodžiai, žiniatinklio kablio antraštės reikšmė ir API prieigos raktas laikomi operacinės sistemos raktų pakete, niekada nustatymų faile.
- Nauja versija apie save praneša, kai pasirodo — niekada skambučio metu — ir įdiegiama tik tada, kai jūs tai leidžiate.
- Programa siunčia vieną nedidelę naudojimo ataskaitą per dieną. Prieš išsiunčiant pirmąją jums parodoma, kas joje yra, ir jūs pasirenkate, kiek ji apima: **Pagrindinė** ar **Išplėsta**. Joje niekada nėra numerių, kontaktų, jūsų stotelės adreso ar ko nors, kas pasakyta pokalbyje. Visas sąrašas yra skiltyje [Apie programą](/application/about#telemetry).
- Programa yra laisvoji programinė įranga pagal GPL v2.
