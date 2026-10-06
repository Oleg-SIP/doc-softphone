---
title: Par programmu
sidebar_position: 2
description: Versija, atjauninājumi, jūsu valsts, licence, lietošanas atskaites saturs, atsauksmes veidlapa un tas, ar ko programma veidota.
---

**Iestatījumi → Par programmu** satur visu par pašu programmu.

<Shot name="20_settings_about" alt="Iestatījumi → Par programmu" />

## Versija un valsts {#version-and-country}

Augšā ir nosaukums, **Versija** (attēlā 1.0.1) un saite uz tīmekļa vietni [ai-softphone.com](https://ai-softphone.com/).

**Valsts** pasaka programmai, kur jūs atrodaties. Tas palīdz izvēlēties labāko atjauninājumu serveri un paver ceļu valodas un runas pakalpojumiem, kas mitināti jūsu valstī. **Noteikt automātiski** to aizpilda.

## Atjauninājumi {#updates}

Cilne pasaka, vai jums ir jaunākā versija un kad pēdējo reizi pārbaudīts. **Meklēt atjauninājumus** pārbauda tūlīt.

**Meklēt atjauninājumus automātiski**, pēc noklusējuma ieslēgts, pārbauda reizi dienā un drīz pēc tālruņa startēšanas. Tas lūdz serverim vienu nelielu failu, un nekas netiek lejupielādēts vai instalēts bez jūsu atļaujas.

## Licence {#licence}

Programma ir brīvā programmatūra ar licenci GPL-2.0-or-later. Tā tiek piedāvāta bez jebkādas garantijas, un jūs varat to izplatīt tālāk saskaņā ar šīs licences noteikumiem; pilns teksts ir pievienots failā ar nosaukumu `LICENSE`.

## Telemetrija {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Iestatījumi → Par programmu: ko satur lietošanas atskaite" />

Programma nosūta vienu nelielu lietošanas atskaiti dienā. Pirms pirmās nosūtīšanas jums parāda, kas tajā ir, un cilne to uzskaita:

| | Kas tiek nosūtīts |
| --- | --- |
| **Vienmēr nosūta** | Ka lietotne tika palaista, tās versiju un saskarnes valodu; operētājsistēmas versiju, lokalizāciju, valsti un laika joslu. |
| **Nosūta papildus, režīmā Paplašināts** | Zvanu un notverto sarunu skaitītājus; pievienotās centrāles ražotāju un versiju, nekad tās adresi; cik [Pārskata](/interface/settings-overview) soļu ir izdarīts un izvēlēto izkārtojumu. |
| **Nekad nenosūta, nevienā režīmā** | Numurus, uz kuriem zvanījāt vai no kuriem jums zvanīja; kontus, paroles vai jebko no atslēgu saišķa; kontaktus, sarunas, atšifrējumus vai ierakstus; jebko, ko esat ierakstījuši, un jebkādus privātus datus datorā. |

Katra instalācija izveido sev vienu nejaušu identifikatoru, lai vienas programmas kopijas atskaites varētu atpazīt kā vienas. Tas nav atvasināts ne no kā, kas attiecas uz jums vai jūsu datoru, un neidentificē nevienu — taču, tā kā tas saglabājas, ar to nosūtītās atskaites var sasaistīt savā starpā. Tas padara tās drīzāk pseidonīmas nekā anonīmas.

Pamata atskaites pamatā ir leģitīmās intereses: zināt, kuras versijas tiek izmantotas, ir tas, kas ļauj labojumam nonākt pie tiem, kam tas vajadzīgs. Viss, ko pievieno paplašinātā atskaite, ir tur tāpēc, ka jūs to izvēlējāties, un jūs to varat šeit mainīt jebkurā laikā.

### Atskaites {#reporting}

| Izvēle | |
| --- | --- |
| **Paplašināts** | Pamata atskaite un tas, ko uzskaita *Nosūta papildus*. Izvēlēts attēlā. |
| **Pamata** | Tikai tas, ko *Vienmēr nosūta*. |
| **Izslēgts** | Nekādas atskaites. Pieejams tikai Enterprise izdevumā; citādi šī iespēja ir pelēka. |

## Atsauksme {#feedback}

<Shot name="20c_settings_about_bottom" alt="Iestatījumi → Par programmu: atsauksmes veidlapa un komponenti, ar ko programma veidota" />

Veidlapa, kas raksta izstrādātājiem, neatstājot programmu.

| Lauks | |
| --- | --- |
| **Temats** un **Ziņa** | Tas, ko vēlaties pateikt. |
| **Jūsu vārds** un **Adrese atbildei** | Abi nav obligāti. Bez adreses nav iespējams atbildēt. |
| **Pievienot žurnālu** | Pievieno žurnāla beigas, aptuveni 512 kB. Skatiet [Diagnostika](/troubleshooting/diagnostics). |

**Nosūtīt** paliek pelēks, līdz ir ko nosūtīt.

## Veidots ar {#built-with}

Komponenti, uz kuriem programma veidota, katrs ar savu licenci: Qt 6 (GPL-2.0 vai GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (publiskais domēns), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) un PulseAudio klients (LGPL-2.1-or-later). Katrs tiek izmantots ar blakus norādīto licenci; ja komponents piedāvā vairākas, izvēlēta ir nosauktā.
