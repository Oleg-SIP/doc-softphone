---
title: Ierakstu logs
sidebar_position: 2
description: Sarunu bibliotēka — filtrējiet, atskaņojiet, lasiet atšifrējumu un apkopojumu.
---

**Ieraksti** ir vieta, kur atrodas katra saruna, lai kā tā būtu pienākusi: zvans, no citas lietotnes notverta sapulce vai importēts fails. Katra ir sarakstā ar jau gatavu apkopojumu.

<Shot name="01_recordings" alt="Cilne Ieraksti: sarunu saraksts" />

## Sarunas atrašana {#finding-a-conversation}

Augšējā joslā ir četri filtri, meklēšanas lauks un izvēlne:

| Vadīkla | Sašaurina sarakstu pēc |
| --- | --- |
| **Veids** | tā, kā saruna pienāca |
| **Periods** | datuma |
| **Kategorija** | kategorijas, kurā tā iedalīta — skatiet [Vārdnīcas](../ai-processing/dictionaries.md) |
| **Atzīme** | tai piešķirtajām atzīmēm |
| **Meklēt** | tajā teiktā — meklēšana iet cauri visu jūsu ierakstu atšifrējumiem |

Poga **⋮** joslas labajā pusē atver papildu darbības sarakstam: **Importēt no failiem**, **Eksportēt uz CSV** un **Atvērt pārlūkā**.

## Saraksts {#the-list}

Katrā rindā redzams:

- ikona sarunas veidam: klausule zvanam, logs citā lietotnē notikušai sapulcei;
- virsraksts — otras puses vārds, numurs vai notvertai sapulcei **Cita lietotne** — un zem tā datums un kopsavilkums vienā rindā;
- labajā pusē kategorija ar tās vērtējumu (skaitlis, piemēram, *Atbalsts · 2*), tad birkas un beigās ilgums.

Sarkanā krāsā zīmētās birkas ir **brīdinājuma signāli** (attēlā *Dusmīgs klients* un *Aiziešanas risks*); pārējās ir parastas birkas (*Sūdzība*, *Solīts atzvanīt*). Saruna bez kopsavilkuma un kategorijas vēl nav apkopota — pirmā rinda attēlā.

## Atskaņotājs {#the-player}

Atlasiet rindu, lai zem saraksta atvērtu atskaņotāju.

<Shot name="02_recording_details" alt="Atlasīts ieraksts: atskaņotājs un atšifrējums zem saraksta" />

- Divas viļņu formas ir ieraksta divi kanāli, pa vienam katrai sarunas pusei. Josla zem tām ritina garu ierakstu.
- **▶** atskaņo un aptur; laiki kreisajā pusē ir pozīcija un kopējais garums.
- **1×** maina ātrumu; **Abi** izvēlas, kuru kanālu dzirdat.
- Disketes poga saglabā skaņu, **×** aizver atskaņotāju.

## Atšifrējums un apkopojums {#the-transcript-and-the-write-up}

Zem atskaņotāja ir atšifrējums: viena rinda katrai replikai, laiks, kad tā teikta, un runātāja vārds (**Jūs**, otras puses vārds vai notvertai sapulcei **Cita lietotne**). Noklikšķiniet uz rindas, lai dzirdētu šo brīdi; rinda zem atskaņošanas galviņas tiek izcelta, un izrunātais vārds tajā tiek atzīmēts.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Atšifrējums blakus skaņai" />

Nolaižamais saraksts virs atšifrējuma izvēlas, ko rādīt — kāda jūsu [atpazinēja](../ai-processing/transcription.md) veiktu atšifrējumu (zvaigzne apzīmē ieraksta galveno atšifrējumu) vai apkopojumu, piemēram, **Darbības**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Darbības, kas palika pēc sarunas" />

Četras ikonas pa labi no nolaižamā saraksta:

| Ikona | Ko dara |
| --- | --- |
| Dzirksteles | Liek modelim tūlīt uzrakstīt atlasīto elementu. |
| Divas lapas | Nokopē to. |
| Diskete | Saglabā to failā. |
| Miskaste | Dzēš to. |

Atšifrējumu var eksportēt kā vienkāršu tekstu vai kā subtitrus.

Apkopojumu veido [norādījumi](/ai-processing/prompt-studio) un modeļi, ko esat iestatījuši sadaļā [Apstrāde](../ai-processing/processing.md), ar [kārtulām](../ai-processing/processing.md#rules), kas darbojas pašas vai pēc jūsu pieprasījuma. Cik ilgi glabā ierakstus, iestata sadaļā [Ieraksti](../recordings.md#retention).

## Ieraksts, kas jums jau ir {#a-recording-you-already-have}

Citur — mobilajā tālrunī, diktofonā vai citā sistēmā — veiktu ierakstu var pievienot ar **⋮ → Importēt no failiem**. Tas tiek arhivēts tieši tāpat kā zvans: atšifrēts, apkopots un atrodams ar to pašu meklēšanu.

## Ieraksta dzēšana {#deleting-a-recording}

Kad ieraksts tiek dzēsts, līdz ar to pazūd viss, kas no tā izveidots: atšifrējums un apkopojums.
