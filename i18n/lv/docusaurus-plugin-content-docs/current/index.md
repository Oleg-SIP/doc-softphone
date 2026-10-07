---
slug: /
title: AI Softphone dokumentācija
sidebar_position: 1
description: Kas ir AI Softphone, uz kā tas darbojas un kur aprakstīta katra programmas daļa.
---

[AI Softphone](https://ai-softphone.com/) ir programmatūras tālrunis IP centrālei, kas turklāt katru sarunu pārvērš tekstā un rakstiskā kopsavilkumā. Saruna var nonākt tajā trīs veidos, un visi trīs nonāk vienā bibliotēkā ar to pašu ierakstu, atšifrējumu un apkopojumu:

- **zvans**, kas veikts vai saņemts programmā caur jebkuru IP centrāli vai SIP pakalpojumu sniedzēju;
- **sapulce** Zoom, Teams, Meet vai jebkurā citā lietotnē, ierakstīta tieši no datora;
- **ieraksts, kas jums jau ir** — no mobilā tālruņa, diktofona vai citas sistēmas —, pievienots bibliotēkai.

Ieraksti, atšifrējumi un vēsture tiek glabāti failā, kas pieder jums. Nav vajadzīgs ne konts, ne abonements, un programma ir brīvā programmatūra ar GPL v2 licenci.

## No sarunas līdz apkopojumam {#from-a-conversation-to-a-write-up}

1. Pienāk saruna: zvans, sapulce vai fails.
2. Tā tiek ierakstīta divos kanālos, lai tas, ko teicāt jūs, un tas, ko teica otra puse, paliktu atsevišķi.
3. Tā tiek atšifrēta pa runātājiem, sinhroni ar skaņu.
4. Jūsu izvēlētais valodas modelis to apkopo: kopsavilkums, uzdevumi, kategorija, birkas un brīdinājuma signāli — un jūs varat uzdot sarunai jautājumu.

## Lejupielāde un sistēmas prasības {#download-and-system-requirements}

Programmu var bez maksas lejupielādēt no [ai-softphone.com](https://ai-softphone.com/#download): instalētājs (`.exe`) Windows, diska attēls (`.dmg`) macOS un AppImage vai `.deb` Linux. Instalētājam, diska attēlam un AppImage nekas cits iepriekš nav jāinstalē — Qt, OpenSSL un C++ izpildlaika vide ir to iekšpusē. Izņēmums ir `.deb`: tas izmanto pašas sistēmas C++ izpildlaika vidi, skatiet tālāk. Jums būs vajadzīgs SIP konts no jūsu pakalpojumu sniedzēja vai no centrāles, ko pārvaldāt pats. Ierakstīšana darbojas, tiklīdz programma ir instalēta; atšifrējumam un apkopojumam vajadzīgs jūsu izvēlēts pakalpojums vai modelis jūsu datorā.

| Sistēma | Prasības |
| --- | --- |
| macOS | macOS 14.4 vai jaunāka; tikai Apple silicon — Intel Mac to nevar atvērt pat ar Rosetta; Metal grafika; 160 MB diska vietas, plus ieraksti. Sistēma vienreiz prasa atļauju izmantot mikrofonu. |
| Windows | Windows 10 versija 1809 (būvējums 17763) vai jaunāka un Windows 11; 64 bitu Intel vai AMD procesors; Direct3D 11 vai OpenGL 2.1; 250 MB diska vietas, plus ieraksti. |
| Linux | Ubuntu 22.04 LTS vai jaunāka, Debian 12 vai jaunāka un viss tāda paša vecuma — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C bibliotēka 2.35 vai jaunāka; 64 bitu Intel vai AMD procesors; OpenGL 2.1 vai OpenGL ES 2.0 uz X11 vai Wayland; PipeWire vai PulseAudio (ALSA, ja nav neviena no tiem); 200 MB diska vietas, plus ieraksti. Paziņojumu apgabala ikonai vajadzīga darbvirsma ar statusa paziņojumu apgabalu. |

Linux vidē AppImage darbojas jebkurā tāda paša vecuma distribūcijā: padariet to izpildāmu un palaidiet. `.deb` turklāt vajadzīga sistēmas paša C++ izpildlaika vide no GCC 13, kas ir Ubuntu 24.04 un Debian 13, bet nav Ubuntu 22.04; jebkurā vecākā sistēmā izmantojiet AppImage.

Saskarne pieejama trīsdesmit valodās; valodu izvēlas sadaļā [Izskats](/program/appearance) un maina bez restartēšanas.

Šīs dokumentācijas ekrānuzņēmumi uzņemti macOS un parādīti mazā izmērā: noklikšķiniet uz attēla, lai to redzētu pilnā izmērā. Citās sistēmās programma izskatās un darbojas tāpat.

## Pirmie soļi {#first-steps}

1. [Pievienojiet kontu](sip-accounts/setup.md) savai centrālei vai SIP pakalpojumu sniedzējam.
2. [Izvēlieties mikrofonu un skaļruņus](sip-accounts/devices.md) un veiciet pārbaudes zvanu.
3. Izlemiet, [kurus zvanus ierakstīt](recordings.md).
4. Pievienojiet [atpazinēju](ai-processing/transcription.md) un [valodas modeli](ai-processing/processing.md), ja vēlaties atšifrējumus un apkopojumus.

**Iestatījumi → Pārskats** uztur šo sarakstu jūsu vietā: zaļš punkts apzīmē paveiktu soli, sarkans — vēl atlikušu. Skatiet [Iestatījumu pārskats](interface/settings-overview.md).

## Ko lasīt tālāk {#where-to-read-next}

| Ja vēlaties… | Lasiet |
| --- | --- |
| Orientēties logos | [Saskarne](interface/main-window.md) |
| Savienot tālruni ar savu centrāli | [SIP konta iestatīšana](sip-accounts/setup.md) |
| Izvēlēties mikrofonu, skaļruņus un zvana signālu | [Ierīces](sip-accounts/devices.md) |
| Iestatīt kodekus, zvana gaidīšanu un zvanu vēsturi | [Zvanu iestatījumi](sip-accounts/calls.md) |
| Novietot kolēģus uz vienas pieskāriena pogām | [Pogas](sip-accounts/buttons.md) |
| Izlemt, kurus zvanus ierakstīt un cik ilgi tos glabāt | [Ieraksti](recordings.md) |
| Klausīties, meklēt un lasīt savas sarunas | [Ierakstu logs](interface/recordings.md) |
| Ierakstīt citā lietotnē notiekošu sapulci | [Tveršana](capture/capture.md) |
| Izvēlēties atpazinēju, kas runu pārvērš tekstā | [Pieraksts](ai-processing/transcription.md) |
| Izlemt, kurš mākslīgais intelekts apkopo jūsu sarunas un cik tas drīkst maksāt | [Apstrāde](ai-processing/processing.md) |
| Mainīt kategorijas, birkas un brīdinājuma signālus | [Vārdnīcas](ai-processing/dictionaries.md) |
| Mainīt izkārtojumu, motīvu, startēšanu un saīsnes | [Izskats](program/appearance.md), [Startēšana](program/startup.md) un [Saīsnes](program/shortcuts.md) |
| Savienot CRM vai citu programmu | [Tīmekļa āķi](integration/webhooks.md) un [Vietējais REST API](integration/rest-api.md) |
| Redzēt, ko tālrunis un centrāle saka viens otram | [Diagnostika](troubleshooting/diagnostics.md) |
| Atrast problēmas cēloni | [Biežākās problēmas](troubleshooting/common-problems.md) |
| Izslēgt programmas daļas | [Moduļi](application/modules.md) |
| Pārbaudīt versiju, atjauninājumus un lietošanas atskaites saturu | [Par programmu](application/about.md) |

Lapas seko cilņu secībai sadaļā **Iestatījumi**.

## Privātums {#privacy}

- Pēc noklusējuma viss paliek jūsu datorā: ieraksti, atšifrējumi un vēsture atrodas failā, kas pieder jums. Nekas no sarunas — ne numurs, ne vārds, ne vārds no teiktā — nenonāk nekur, kur jūs to paši neesat nosūtījuši.
- Kontu paroles, tīmekļa āķa galvenes vērtība un API pilnvara tiek glabātas operētājsistēmas atslēgu saišķī, nekad iestatījumu failā.
- Jauna versija paziņo par sevi, kad tā parādās — nekad zvana laikā — un tiek instalēta tikai tad, kad jūs to atļaujat.
- Programma nosūta vienu nelielu lietošanas atskaiti dienā. Pirms pirmās nosūtīšanas jums parāda, kas tajā ir, un jūs izvēlaties, cik daudz tā satur: **Pamata** vai **Paplašināts**. Tajā nekad nav numuru, kontaktu, jūsu centrāles adreses vai jebkā sarunā teiktā. Pilns saraksts ir sadaļā [Par programmu](/application/about#telemetry).
- Programma ir brīvā programmatūra ar GPL v2 licenci.
