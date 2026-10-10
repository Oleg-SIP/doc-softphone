---
title: Sufliera logs
sidebar_position: 3
description: "Tiešraides sufliera logs: sarunas vārdi tajā brīdī, kad tos izrunā, un ieteikumi, ko teikt tālāk, loga pogas un kolonnas, mēģinājums ar ierakstu un cik tas maksā."
---

**Suflieris** klausās sarunu tās laikā. Savā logā tas pieraksta, ko saka katra puse, tieši tad, kad tas tiek teikts, un — ja izvēlētais palīgs jautā modelim — ieteikumu, ko teikt tālāk. To vērts turēt atvērtu pārdošanas sarunas, darba intervijas vai sarežģītas sarunas laikā, un ar citu palīgu tas pats logs rāda otras puses tekošu tulkojumu vai vienkārši subtitrus.

<Shot name="46_prompter_running" alt="Suflieris mēģina pārdošanas sarunu: atšifrējums pa kreisi, ieteikumi pa labi, jaunākais lielā rakstā atkārtots virs tiem" />

Attēlā palīgs **Iebildumi sarunā** klausās pārdošanas sarunu. Kreisā kolonna ir tas, kas tika teikts, katra rinda ar savu laiku un pusi; labā ir tas, ko modelis ieteica uz katru klienta atbildi; jaunākais ieteikums lielā rakstā atkārtots virs abām.

**Suflieris** parādās saraksta apakšā telefonā starp **Vēsture** un **Iestatījumi**, tiklīdz izpildītas trīs lietas: suflieris ir atļauts, ir atpazinējs, kas prot klausīties sarunas laikā, un — palīgiem, kas kaut ko iesaka — valodas modelis. To visu iestata sadaļā [Iestatījumi → Suflieris](/ai-processing/prompter), kur ir arī teksta lielums un paši palīgi.

## Logs {#the-window}
<Shot name="44_prompter_window" alt="Sufliera logs ar izvēlētu palīgu Iebildumi sarunā pirms palaišanas" />

Augšā ir nolaižamais saraksts **Palīgs** un pa labi no tā pogas:

| Poga | Ko tā dara |
| --- | --- |
| **Palaist** / **Apturēt** (trijstūris / kvadrāts) | *Sākt klausīties šo sarunu* — vai beigt: *Teiktais paliek ekrānā*. Palaišana, kas nospiesta pirms zvana atbildēšanas, gaida to, un poga to tad atceļ. |
| **Ieteikums** (dzirksteles) | *Beigt atbildi šeit un ieteikt, ko teikt*, negaidot pauzi. Palīgam, kas nejautā modelim, poga ir **Beigt atbildi**: tā tikai noslēdz atbildi, lai nākamā sāktos tīra. Tā ir pelēka, kamēr suflieris nedarbojas. |
| **Iztukšot** (miskaste) | Pēc apstiprinājuma aizmirst to, kas ir ekrānā. *Pazūd abas kolonnas un līdz ar tām saruna, no kuras tiktu veidots nākamais ieteikums.* Apturēšana un atkārtota palaišana neko neiztukšo: apturēta un atkal palaista saruna parasti ir tā pati saruna. |
| **Eksportēt…** (diskete) | Ieraksta abas kolonnas ar laikiem failā: kā tekstu (`.txt`) vai izklājlapu (`.csv`), ar nosaukumu, ko jūs piešķirat failam. |
| **Mēģinājums…** (bibliotēka) | [Izmēģina palīgu ar ierakstu](#rehearsing-on-a-recording), nevis ar zvanu. |

Nolaižamais saraksts rāda [palīgus](/ai-processing/prompter#assistants) secībā, kas iestatīta sadaļā **Iestatījumi → Suflieris**. Kamēr suflieris darbojas, to nevar mainīt, taču tas paliek redzams, lai jūs redzētu, kurš palīgs strādā. Klausīšanās laikā zvana kartītē rakstīts **Klausāmies**.

Zem pogām ir josla ar jaunāko rindu un zem tās divas kolonnas:

- **Atšifrējums** — katra rinda ar savu laiku un pusi;
- **Ieteikumi** — katrs ieteikums ar tās atbildes laiku, uz kuru tas attiecas. Palīgam, kas nejautā modelim, šīs kolonnas nav, un atšifrējums aizņem visu platumu.

Šaurā logā abas kolonnas ir viena zem otras. Kolonna seko ienākošajam, līdz jūs tajā ritināt atpakaļ, un atkal seko, kad atgriežaties apakšā. Nospiediet jebkuru rindu, lai paturētu to joslā; nospiediet jaunāko vai joslas spraudīti, lai atkal sekotu. Labā peles poga kopē rindu, ieteikumu, visu atšifrējumu vai visus ieteikumus. Velciet atdalītāju zem joslas, lai padarītu to augstāku; teksta lielumus iestata sadaļā [Iestatījumi → Suflieris](/ai-processing/prompter#settings--prompter).

## Mēģinājums ar ierakstu {#rehearsing-on-a-recording}
Palīgu var izmēģināt bez neviena pie telefona. **Mēģinājums…** parāda [bibliotēkas](/interface/recordings) sarunas, jaunākās vispirms, un **Fails šajā datorā…** `.mp3` vai `.wav` failam.

<Shot name="45_prompter_rehearse" alt="Mēģinājums…: bibliotēkas sarunas un fails šajā datorā" />

Izvēlētais ieraksts parādās atskaņotājā zem pogām: atskaņošana un pauze, abi kanāli kā viļņu forma, kurā var klikšķināt, un laiks. Nospiediet **Palaist**: ieraksts tiek atskaņots suflierī pa to pašu ceļu kā zvans, savā tempā — ātrāka atskaņošana apzināti netiek piedāvāta, jo suflieris, ko baro pusotras reizes ātrāk, pauzētu, atbildētu un rēķinātu par sarunu, kuru neviens nav vedis. Krustiņš pa labi ir **Beigt mēģinājumu**, atpakaļ pie zvanu klausīšanās.

Ieraksts ar vienu kanālu, piemēram, importēts fails, tiek dzirdēts kā viena telpa: *suflieris visu dzird kā sarunu partneri*.

## Cik tas maksā un kur nonāk vārdi {#what-it-costs-and-where-the-words-go}
- Atpazinējs tiek rēķināts par tiešraides audio minūtēm, un **Atpazīt arī manu pusi** to divkāršo. Modelis tiek rēķināts par katru ieteikumu. Abi tiek ieskaitīti sufliera [mēneša griestos](/ai-processing/prompter#spending), nevis Apstrādes ierobežojumos.
- Otras puses balss atstāj datoru runāšanas laikā un nonāk pie jūsu izvēlētā atpazinēja. Atpazinējs jūsu pašu datorā — **Vosk**, **WhisperLive** vai **NVIDIA Riva** — patur to mājās.
- Tas, ko rāda suflieris, nav ieraksts. Lai to saglabātu, nospiediet **Eksportēt…**; lai būtu pati saruna, [ierakstiet zvanu](/recordings) papildus.

## Ja tas nepalaižas {#when-it-does-not-start}
Logs rindā zem pogām pasaka, kas trūkst.

| Logs saka | Ko darīt |
| --- | --- |
| *Suflēšana ir izslēgta. Iestatījumi → Suflieris.* | Atzīmējiet **Atļaut sufliera lietošanu**. |
| *Neviens atpazinējs šeit neprot klausīties, kamēr kāds runā. Iestatījumi → Pieraksts.* | Pievienojiet atpazinēju ar **Adrese suflierim** un nospiediet **Pārbaudīt**. |
| *Nav ko palaist. Iestatījumi → Suflieris, un pievienojiet palīgu.* | Visi palīgi ir izdzēsti vai izslēgti: pievienojiet vienu vai nospiediet **Atjaunot noklusējumus**. |
| *Otrai pusei vispirms ir jāpasaka. Sāciet šo sarunu ierakstīt vai mainiet to, ko par piekrišanu saka Iestatījumi → Ierakstīšana.* | Sāciet ierakstīšanu, kas atskaņo paziņojumu, vai mainiet piekrišanas iestatījumu. |
| *Atpazinējs nesāka klausīties. Pārbaudiet tā tiešo adresi un modeli sadaļā Iestatījumi → Pieraksts.* | Adrese suflierim, modelis vai atslēga ir nepareiza. **Pārbaudīt** atpazinēja kartītē pasaka, kas tieši. |
| *Šā mēneša summa atpazinējiem ir iztērēta.* | Palieliniet **Atpazinēji, mēnesī** vai gaidiet, līdz mainās mēnesis. |
| *Šā mēneša summa modeļiem ir iztērēta. Vārdi turpinās; suflēšana ir apstājusies.* | Palieliniet **Modeļi, mēnesī**. |
