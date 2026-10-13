---
title: Biežākās problēmas
sidebar_position: 2
description: "Ko pārbaudīt, ja konts nereģistrējas, nav skaņas, zvans vai sapulce netiek ierakstīta, nav atšifrējuma, suflieris nepalaižas vai saite, saīsne vai API neko nedara, kā arī ko nozīmē paša tālruņa ziņojumi."
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

- **Iestatījumi → Ierakstīšana**, pirmais nolaižamais saraksts, izlemj, kurus zvanus ierakstīt; noklusējums **Ar roku** ieraksta tikai tad, kad nospiežat ierakstīšanas pogu zvana kartītē. Skatiet [Ieraksti](/recordings).
- Ierakstīšana sākas, kad uz zvanu atbild, tāpēc neatbildētam zvanam faila nav.
- Modulim **Ierakstīšana** jābūt ieslēgtam sadaļā [Moduļi](/application/modules).
- Ierakstus noņem atbilstoši robežām sadaļā **Glabāšana**; piesprausts ieraksts nekad netiek noņemts.

## Sapulce citā lietotnē netika notverta {#a-meeting-in-another-application-was-not-captured}

Skatiet [Tveršana](/capture/).

- **Atļaut skaņas tveršanu** sadaļā **Iestatījumi → Tveršana** jābūt ieslēgtam.
- Ja **Automātiska sākšana** ir iestatīta uz **Vaicāt man** (noklusējums), atbildiet uz jautājumu, kad tas parādās; ar **Nekad** nospiediet ierakstīšanas pogu paši.
- Izmantojiet **Pārbaudīt** tajā pašā cilnē: augšējai joslai jākustas, kad runājat, apakšējai — kad kaut kas skan.
- Modulim **Tveršana** jābūt ieslēgtam sadaļā [Moduļi](/application/modules).

## Ieraksts ir, bet nav atšifrējuma vai kopsavilkuma {#there-is-a-recording-but-no-transcript-or-summary}

- Saruna tiek atšifrēta un apkopota pati tikai tad, ja sadaļā [Iestatījumi → Apstrāde](/ai-processing/processing) ir ieslēgts **Apstrādāt sarunas automātiski**. Citādi pieprasiet to [ierakstu logā](/interface/recordings).
- Jābūt [atpazinējam](/ai-processing/transcription) un [valodas modelim](/ai-processing/processing#language-models), un katram jāatbild savā adresē.
- Kad ikmēneša **Naudas robeža** vai **Marķieru robeža** ir sasniegta, automātiskās kārtulas apstājas līdz mēneša maiņai. Tas, ko pieprasāt paši, nekad netiek apturēts.
- Sadaļas [Iestatījumi → Pārskats](/interface/settings-overview) soļi rāda, kas vēl jāiestata.

## Suflieris neparādās vai nepalaižas {#the-prompter-does-not-appear-or-does-not-start}

**Suflieris** parādās saraksta apakšā telefonā tikai tad, ja ir trīs lietas: atpazinējs ar **Adrese suflierim**, kas izturējis savu **Pārbaudīt** sadaļā [Iestatījumi → Pieraksts](/ai-processing/transcription#live-recognition-for-the-prompter), valodas modelis un atzīme **Atļaut sufliera lietošanu** sadaļā [Iestatījumi → Suflieris](/ai-processing/prompter). Modulim **Suflieris** jābūt ieslēgtam sadaļā [Moduļi](/application/modules).

Ja logs atveras, bet suflieris nepalaižas, rinda zem tā pogām pasaka, kā trūkst. [Ja tas nepalaižas](/interface/prompter#when-it-does-not-start) uzskaita visus ziņojumus un to, ko darīt.

## Tālrunis pazuda, kad aizvēru logu {#the-phone-disappeared-when-i-closed-the-window}

Ja **Ļaut telefonam darboties tālāk, kad logs aizveras** ir ieslēgts, tālrunis joprojām darbojas un zvani joprojām pienāk. Ikona paziņojumu apgabalā (macOS — izvēļņu joslā) atgriež logu. Darbvirsmā bez paziņojumu apgabala tālrunis ir minimizēts uzdevumjoslā. Skatiet [Startēšana](/program/startup).

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

## Tālruņa ziņojumi {#messages-the-phone-shows}

Kad kaut kas nenotiek, tālrunis atsevišķā rindā pasaka, kāpēc. Rinda zem saraksta pēc dažām sekundēm pazūd pati.

### Kad zvans netiek veikts {#when-a-call-is-not-placed}

| Ziņojums | Ko darīt |
| --- | --- |
| *Nav iestatīts neviens konts* | Pievienojiet kontu sadaļā [Iestatījumi → Konti](/sip-accounts/setup). |
| *Nav ieslēgts neviens konts, tāpēc nav līnijas, no kuras zvanīt.* | Atzīmējiet konta izvēles rūtiņu sadaļā **Iestatījumi → Konti**. |
| *Vēl nav reģistrēta neviena līnija.* | Konts ir ieslēgts, bet centrālē vēl nav reģistrēts. Pagaidiet, līdz tā punkts kļūst zaļš; ja nekļūst, skatiet [Konts nereģistrējas](#the-account-will-not-register). |
| *Jau notiek tik daudz sarunu, cik šis telefons nes.* | Nolieciet klausuli vienā no zvaniem un zvaniet vēlreiz. |
| *Konta, no kura tas būtu zvanīts, vairs nav.* | Rinda pieder kontam, kas pa to laiku izdzēsts. Sastādiet numuru numuru sastādītājā. |
| *Šai rindai nav numura, uz kuru atzvanīt.* | Zvanītājs paslēpa numuru, tāpēc nav kam atzvanīt. |

### Kad konts nepieslēdzas {#when-an-account-does-not-connect}

| Ziņojums | Ko darīt |
| --- | --- |
| *Šo servera adresi neizdevās atrast. Pārbaudiet, vai tajā nav drukas kļūdas.* | Pārbaudiet **Servera adrese** [konta veidlapā](/sip-accounts/setup). |
| *Serveri neizdevās sasniegt. Pārbaudiet adresi, portu un savu tīklu.* | Pārbaudiet **Servera adrese**, kā arī **Transports** un **Ports** sadaļā **Servera iestatījumi**. SIP var apturēt arī ugunsmūris. |
| *Serveris noraidīja šo lietotājvārdu vai paroli.* | Pārbaudiet **Lietotājvārds** un **Parole**. Ja centrāle pārbauda paroli ar citu vārdu, aizpildiet **Autentifikācijas lietotājs**. |
| *Servera sertifikātu neizdevās pārbaudīt. Ja servera administrators to izdevis pats, sadaļā „Servera iestatījumi” noņemiet atzīmi „Pārbaudīt sertifikātu”.* | Parādās TLS savienojumā. Ja centrāle izmanto pašas izveidotu sertifikātu, noņemiet atzīmi **Pārbaudīt sertifikātu** sadaļā **Servera iestatījumi**. |
| *Šī konta paroli neizdevās nolasīt no atslēgu saišķa. Atslēdziet to un savienojieties vēlreiz.* | Atbloķējiet datora atslēgu glabātuvi (macOS — Keychain), tad pie konta nospiediet **Savienot**. |

### Zvana laikā {#during-a-call}

| Ziņojums | Ko darīt |
| --- | --- |
| *Nav kopēja skaņas formāta* | Centrālei un tālrunim nav kopīga kodeka. Ieslēdziet kādu, ko izmanto centrāle, sadaļā [Audio formāti](/sip-accounts/calls#audio-formats). |
| *Nav ne mikrofona, ne skaļruņu* | Izvēlieties ierīces sadaļā [Iestatījumi → Ierīces](/sip-accounts/devices). |
| *Neieraksta: disks ir nokrities līdz robežai. Atbrīvojiet vietu vai mainiet robežu iestatījumos.* | Brīvā vieta diskā ir sasniegusi **Diska vietas slieksnis** — skatiet [Ieraksti](/recordings). Atbrīvojiet vietu vai samaziniet slieksni. |

### Palaižot tālruni {#when-the-phone-starts}

*Datubāzi nevar nolasīt* nozīmē, ka datubāzi izveidoja cita programmas versija un šī to nespēj nolasīt. Parasti vecāka versija palaista uz jaunākas versijas datiem: ja atkal instalēsiet jaunāko versiju, tā datubāzi atvērs tādu, kāda tā bija. **Sākt no jauna** turpretī izveido tukšu datubāzi — visi kontakti un visi vēstures zvani tiek zaudēti, un to nevar atsaukt. Pirms nospiežat, varat saglabāt datubāzes faila kopiju; kur tas atrodas, pasaka [Diagnostika](/troubleshooting/diagnostics#files).
