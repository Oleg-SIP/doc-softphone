---
title: Biežākās problēmas
sidebar_position: 2
description: "\"Ko pārbaudīt, ja konts nereģistrējas, nav skaņas, zvans vai sapulce netiek ierakstīta, nav atšifrējuma vai saite, saīsne vai API neko nedara.\""
---

Katrs punkts norāda uz iestatījumu, kas par to lemj. Ja atbildes šeit nav, atveriet [Diagnostika](/troubleshooting/diagnostics): tā rāda, ko tālrunis un centrāle saka viens otram.

## Konts nereģistrējas {#the-account-will-not-register}

Punkts pie konta sadaļā **Iestatījumi → Konti** paliek pelēks vai sarkans.

1. Pārbaudiet **Lietotājvārds**, **Parole** un **Servera adrese** [konta veidlapā](/sip-accounts/setup).
2. Ja jūsu centrāle pārbauda paroli ar citu vārdu, nevis iekšējo numuru, aizpildiet **Autentifikācijas lietotājs** sadaļā **Servera iestatījumi**.
3. Pārbaudiet **Transports** un **Ports** atbilstoši tam, ko gaida centrāle.
4. Atveriet [diagnostikas loga](/troubleshooting/diagnostics) cilni **SIP** un apskatiet pieprasījumu `REGISTER` un servera atbildi.

## Es nedzirdu, vai mani nedzird {#i-cannot-hear-or-i-cannot-be-heard}

Atveriet [Iestatījumi → Ierīces](/sip-accounts/devices).

- Pasakiet kaut ko: joslai zem **Mikrofons** jākustas. Ja tā nekustas, izvēlieties citu mikrofonu.
- Nospiediet **Pārbaudīt** zem **Skaļruņi**, lai dzirdētu skaņu izvēlētajā ierīcē.
- Pārbaudiet **Skaļums** slīdņus. **Apklusināt mikrofonu** zvana kartītē un [saīsne](/program/shortcuts) **Apklusināt mikrofonu** izslēdz mikrofonu zvana laikā.
- Zvana signāls var būt iestatīts skanēt citā ierīcē nekā tā, kurā runājat — **Zvana signāls**, otrais nolaižamais saraksts.

## Zvans skan slikti vai nesākas {#the-call-sounds-bad-or-does-not-start}

Kodeki tiek piedāvāti sadaļas [Iestatījumi → Zvani](/sip-accounts/calls#audio-formats) saraksta secībā. Atstājiet ieslēgtus kodekus, ko izmanto jūsu centrāle, un labāko no tiem novietojiet pirmo. Izmaiņa stājas spēkā no nākamā zvana.

## Otrs zvans nezvana {#a-second-call-does-not-ring}

Tas, kas notiek, kad kāds zvana, kamēr jūs runājat, tiek iestatīts sadaļā [Zvana gaidīšana](/sip-accounts/calls#call-waiting).

## Zvans netika ierakstīts {#a-call-was-not-recorded}

- **Iestatījumi → Ierakstīšana**, pirmais nolaižamais saraksts, izlemj, kurus zvanus ierakstīt; noklusējums **Ar roku** ieraksta tikai tad, kad nospiežat ierakstīšanas pogu zvana kartītē. Skatiet [Zvanu ierakstīšana](/recordings/call-recording).
- Ierakstīšana sākas, kad uz zvanu atbild, tāpēc neatbildētam zvanam faila nav.
- Modulim **Ierakstīšana** jābūt ieslēgtam sadaļā [Moduļi](/application/modules).
- Ierakstus noņem atbilstoši robežām sadaļā **Glabāšana**; piesprausts ieraksts nekad netiek noņemts.

## Sapulce citā lietotnē netika notverta {#a-meeting-in-another-application-was-not-captured}

Skatiet [Tveršana](/capture/).

- **Atļaut skaņas tveršanu** sadaļā **Iestatījumi → Tveršana** jābūt ieslēgtam.
- Ja **Automātiska sākšana** ir iestatīta uz **Vaicāt man** (noklusējums), atbildiet uz jautājumu, kad tas parādās; ar **Nekad** nospiediet **Ierakstīt** paši.
- Izmantojiet **Pārbaudīt** tajā pašā cilnē: augšējai joslai jākustas, kad runājat, apakšējai — kad kaut kas skan.
- Modulim **Tveršana** jābūt ieslēgtam sadaļā [Moduļi](/application/modules).

## Ieraksts ir, bet nav atšifrējuma vai kopsavilkuma {#there-is-a-recording-but-no-transcript-or-summary}

- Saruna tiek atšifrēta un apkopota pati tikai tad, ja sadaļā [Iestatījumi → Apstrāde](/ai-processing/processing) ir ieslēgts **Apstrādāt sarunas automātiski**. Citādi pieprasiet to [ierakstu logā](/interface/recordings).
- Jābūt [atpazinējam](/ai-processing/transcription) un [valodas modelim](/ai-processing/processing#language-models), un katram jāatbild savā adresē.
- Kad ikmēneša **Naudas robeža** vai **Marķieru robeža** ir sasniegta, automātiskās kārtulas apstājas līdz mēneša maiņai. Tas, ko pieprasāt paši, nekad netiek apturēts.
- Sadaļas [Iestatījumi → Pārskats](/interface/settings-overview) soļi rāda, kas vēl jāiestata.

## Tālrunis pazuda, kad aizvēru logu {#the-phone-disappeared-when-i-closed-the-window}

Ja **Ļaut telefonam darboties tālāk, kad logs aizveras** ir ieslēgts, tālrunis joprojām darbojas un zvani joprojām pienāk. Ikona paziņojumu apgabalā (macOS — izvēļņu joslā) atgriež logu. Skatiet [Startēšana](/program/startup).

## Tālruņa numurs pārlūkā vai CRM nezvana {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Nospiediet **Atvērt zvanu saites ar šo tālruni** sadaļā [Iestatījumi → Startēšana](/program/startup#call-links). Noklikšķināts numurs nonāk numura sastādītājā un tur gaida, ja vien nav ieslēgts **Zvanīt uzreiz, nespiežot Zvanīt**.

## Pogas lampiņa paliek pelēka {#a-buttons-lamp-stays-grey}

Centrāle neziņo, vai iekšējais numurs ir brīvs. Poga joprojām zvana. Skatiet [Pogas](/sip-accounts/buttons).

## REST API neatbild {#the-rest-api-does-not-answer}

- **Ļaut citām šī datora programmām vadīt telefonu** jābūt ieslēgtam sadaļā [Iestatījumi → Integrācija](/integration/rest-api), un modulim **Integrācija** — sadaļā [Moduļi](/application/modules).
- Adrese ir `http://127.0.0.1:8377`, ja vien neesat mainījuši **Ports**.
- Grupa, ko neesat atvēruši sadaļā **Piekļuve**, uz katru pieprasījumu atbild ar `404`.
- Ja esat iestatījuši **Pilnvaru**, pieprasījumiem, kas maina saglabātos datus, tā jānes galvenē `Authorization`.
- Vairāk simptomu ir sadaļā [Kad tas nedarbojas](/integration/rest-api#when-it-does-not-work).

## Tīmekļa āķi nepienāk {#webhooks-do-not-arrive}

Nospiediet **Nosūtīt pārbaudes notikumu** sadaļā [Iestatījumi → Integrācija](/integration/webhooks). REST API skaitītāji `webhooks_failed_total` un `webhooks_dropped_total` rāda, kā notiek piegāde; [Kad nekas nepienāk](/integration/webhooks#when-nothing-arrives) skaidro, ko katrs no tiem nozīmē.

## Saīsne neko nedara {#a-hotkey-does-nothing}

Atveriet [Saīsnes](/program/shortcuts). Saīsne darbojas, kamēr tālrunis ir programma, ko izmantojat; lai to izmantotu no jebkuras programmas, atzīmējiet **Visur**. Noklikšķiniet uz saīsnes un nospiediet kombināciju vēlreiz, ja cita programma to ir aizņēmusi.
