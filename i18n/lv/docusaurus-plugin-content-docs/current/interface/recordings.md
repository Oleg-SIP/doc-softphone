---
title: Ierakstu logs
sidebar_position: 2
description: "\"Katras sarunas bibliotēka — zvans, importēts fails vai sapulce, notverta no Zoom, Teams vai Meet: filtri, atskaņotājs, atšifrējums, ko var atskaņot no jebkuras rindas, un apkopojumi.\""
---

**Ieraksti** ir vieta, kur atrodas katra saruna, lai kā tā būtu pienākusi: zvans, veikts vai saņemts tālrunī, importēts audio fails vai sapulce, notverta no Zoom, Teams, Meet vai jebkuras citas lietotnes. Visas tās ir vienā sarakstā, un katra atveras vienādi: atskaņotājs, atšifrējums un viss, ko valodas modelis par to uzrakstījis. Lai atvērtu **Ieraksti**, nospiediet to [galvenā loga](main-window.md) apakšējā kreisajā stūrī.

<Shot name="01_recordings" alt="Cilne Ieraksti: notverta Zoom sapulce, importēts fails un zvani vienā sarakstā" />

## Trīs ierakstu veidi {#three-kinds-of-recording}

Ikona rindas kreisajā pusē rāda, kā saruna pienākusi.

| Ikona | Saruna | Tās nosaukums sarakstā | Kā tā šeit nonāk |
| --- | --- | --- | --- |
| Klausule ar bultiņu | Zvans, veikts vai saņemts šajā tālrunī. Bultiņa vērsta uz iekšu ienākošam zvanam un uz āru izejošam. | Kontakta vārds vai numurs | Ieraksta, kā iestatīts sadaļā [Ieraksti](../recordings.md) |
| Bultiņa joslā | No citurienes importēts fails: no mobilā tālruņa, diktofona vai citas sistēmas | Faila nosaukums | **⋮ → Importēt no failiem**; skatiet [tālāk](#a-recording-you-already-have) |
| Logs | Citā lietotnē notikusi sapulce | Nosaukums, ko jūs devāt, vai **Cita lietotne** | [Tveršana](../capture/capture.md) |

Attēlā trīs augšējās rindas ir pa vienai no katra veida: Zoom sapulce, importēts bankas atbalsta zvana fails un zvans, saņemts uz līnijas **305 Atbalsts**. Lai kāds ir avots, tās visas tiek atšifrētas, apkopotas un meklētas vienādi.

## Sarunas atrašana {#finding-a-conversation}

Augšējā joslā ir pieci filtri, meklēšanas lauks un izvēlne:

| Vadīkla | Sašaurina sarakstu pēc |
| --- | --- |
| **Veids** | tā, kā saruna pienāca: ienākošie vai izejošie zvani, **Importētās**, **Notvertie** |
| **Periods** | datuma: **Šodien**, **Vakar**, **Pēdējās 7 dienas** vai **Izvēlēties datumus…** |
| **Kategorija** | kategorijas, kurā tā iedalīta — skatiet [Vārdnīcas](../ai-processing/dictionaries.md) |
| **Atzīme** | tai piešķirtajām birkām un brīdinājuma signāliem |
| **Atpazinējs** | [atpazinēja](../ai-processing/transcription.md), kas izveidoja tās atšifrējumu |
| **Meklēt** | tajā teiktā — meklēšana iet cauri visu jūsu ierakstu atšifrējumiem |

<Shot name="39_more_menu" alt="Saraksta izvēlne ⋮: Importēt no failiem, Eksportēt uz CSV, Atvērt pārlūkā" />

Poga **⋮** joslas labajā pusē atver papildu darbības sarakstam:

| Elements | Ko dara |
| --- | --- |
| **Importēt no failiem** | Pievieno ierakstus, kas jums jau ir. Skatiet [Ieraksts, kas jums jau ir](#a-recording-you-already-have). |
| **Eksportēt uz CSV** | Saglabā sarakstu kā izklājlapu: kad, puse un numurs, virziens, ilgums, kategorija, birkas, brīdinājuma signāli un katras sarunas kopsavilkums vienā rindā. |
| **Atvērt pārlūkā** | Atver sarakstu jūsu pārlūkā kā lapu, ko adresē `/ui` pasniedz [vietējais REST API](../integration/rest-api.md). |

## Saraksts {#the-list}

Katrā rindā redzams:

- ikona sarunas veidam;
- nosaukums — otra puse, numurs, fails vai sapulce — un zem tā datums un kopsavilkums vienā rindā;
- labajā pusē kategorija ar tās vērtējumu (skaitlis, piemēram, *Atbalsts · 4*), tad brīdinājuma signāli un birkas, bet beigās ilgums.

Brīdinājuma signāli ir zīmēti sarkanā krāsā (attēlā *Sensitīvi dati*, *Dots solījums*, *Dusmīgs klients*); birkas ir parastas (*Solīts atzvanīt*). Saruna bez kopsavilkuma un kategorijas vēl nav apkopota — rinda **Anna Vītola** attēlā.

<Shot name="40_row_actions" alt="Rinda, virs kuras atrodas rādītājs: piespraudes, zīmuļa un miskastes pogas" />

Norādiet uz rindu, lai tās labajā pusē parādītos trīs pogas:

| Poga | Ko dara |
| --- | --- |
| Piespraude | **Saglabāt šo**: saglabātu ierakstu nekad neizdzēš sadaļas [Ieraksti](../recordings.md#retention) robežas. Nospiediet vēlreiz, lai pārtrauktu saglabāšanu. |
| Zīmulis | **Pārdēvēt**: dod sarunai jūsu pašu nosaukumu. Zvans blakus paturē puses vārdu; sapulce vai fails citādi tiek nosaukts pēc lietotnes vai faila, no kura tas nācis. |
| Miskaste | **Dzēst šo ierakstu**, vispirms pajautājot. Skaņa pazūd līdzi, un to nevar atsaukt. |

## Atskaņotājs {#the-player}

Atlasiet rindu, lai zem saraksta atvērtu atskaņotāju.

- Divas viļņu formas ir ieraksta divi kanāli: augšējais ir jūs, apakšējais ir otra puse. Importētā failā parasti ir viens sajaukts celiņš, tāpēc abas līnijas rāda vienu un to pašu skaņu.
- **▶** atskaņo un aptur; laiki kreisajā pusē ir pozīcija un kopējais garums. Josla zem viļņu formām ritina garu ierakstu.
- **1×** maina ātrumu; **Abi** izvēlas, kuru balsi dzirdat: abas, tikai jūsu (**Es**) vai tikai otras puses (**Viņi**).
- Diskete saglabā ieraksta kopiju, **×** aizver sarunu.

Līniju starp sarakstu un atskaņotāju var vilkt uz augšu, lai atšifrējumam būtu vairāk vietas, kā zemāk redzamajos attēlos.

## Atšifrējums {#the-transcript}

Zem atskaņotāja ir atšifrējums: viena rinda katrai replikai, ar laiku, kad tā teikta, un to, kas to teicis.

<Shot name="26_recording_call" alt="Zvans uz līnijas 305 Atbalsts: atskaņotājs un atšifrējums, rinda pie 0:15 izcelta" />

| Ieraksta veids | Runātāji ir parādīti kā |
| --- | --- |
| Zvans | **Jūs** un otras puses vārds vai numurs |
| Notverta sapulce | **Jūs** un ieraksta nosaukums visiem pārējiem |
| Importēts fails | **Visi · speaker 1**, **Visi · speaker 2**… — balsis atšķir atpazinējs |

**Noklikšķiniet uz rindas, lai pārietu uz šo brīdi**: atskaņotājs pārvietojas turp, rinda tiek izcelta, un izrunātais vārds tajā tiek atzīmēts — attēlā rinda pie **0:15** ar vārdu *Jā*. Nospiediet **▶**, lai klausītos no šīs vietas. Atskaņošanas laikā izcēlums seko runai, tāpēc varat vienlaikus lasīt un klausīties un atgriezties pie jebkura teikuma.

Laiks katras rindas kreisajā pusē ir arī tas, uz ko norāda apkopojums: brīdinājuma signāls, atbilde vai citāts ir ar tā teiktā laiku, uz kā tie balstās.

## Atšifrējums vai apkopojums: nolaižamais saraksts {#transcript-or-write-up-the-drop-down}

Nolaižamais saraksts virs atšifrējuma izvēlas, ko šajā vietā rādīt: atšifrējumu vai kādu no apkopojumiem, ko uzrakstījis valodas modelis.

<Shot name="27_writeup_menu" alt="Atvērts nolaižamais saraksts: OpenAI atšifrējums un zvana apkopojumi" />

- Rindas ar **mikrofonu** ir atšifrējumi, pa vienam katram [atpazinējam](../ai-processing/transcription.md), kas ierakstu atšifrējis. Zvaigzne apzīmē galveno. Norādiet uz kādu, lai redzētu atpazinēju, tā modeli un valodu.
- Rindas ar **dzirkstelēm** ir apkopojumi, ko veido [norādījumi](/ai-processing/prompt-studio) sadaļā [Apstrāde](../ai-processing/processing.md).

Ierakstam var būt vairāku atpazinēju atšifrējumi, lai tos salīdzinātu: zemāk redzamā Zoom sapulce tika atšifrēta gan ar X.ai, gan ar Deepgram.

<Shot name="36_zoom_menu" alt="Notverta sapulce ar diviem atšifrējumiem, Deepgram un X.ai, un tās apkopojumiem" />

Apkopojumi ir uzskaitīti ar īsiem nosaukumiem:

| Nolaižamajā sarakstā | Veido norādījums | Ko rāda |
| --- | --- | --- |
| **Kopsavilkums** | Kopsavilkums | Galvenie punkti, lēmumi un nākamie soļi īsā rindkopā. |
| **Īsumā** | Kopsavilkums vienā rindā | Viens teikums; tā pati rinda ir redzama zem nosaukuma sarakstā. |
| **Darbības** | Uzdevumi | Kurš ko vienojās darīt un līdz kuram laikam. |
| **Temati** | Temati | Jautājumi, kas tika skarti. |
| **Pieminētie** | Vārdi un skaitļi | Cilvēki, uzņēmumi, datumi, summas un atsauces. |
| pats jautājums | Jautājums par šo zvanu | Atbilde uz jūsu uzdoto jautājumu ar vārdiem, uz kuriem tā balstās. |
| **Kvalitāte** | Pārdošanas kvalitāte, Atbalsta kvalitāte | Kopējais vērtējums un spriedums par katru kritēriju. |
| **Brīdinājuma signāli** | Brīdinājuma signāli | Kam vajag uzmanību, ar pierādījumu un laiku. |
| **Birkas**, **Kategorija** | Birkas, Kategorija | Iezīmes, ar kurām saruna iedalīta. |

## Apkopojumi pa vienam {#the-write-ups-one-by-one}

Zemāk redzamie attēli ir viena un tā paša zvana, uz līnijas **305 Atbalsts**, kurā klients jautā, kad tiek pagarinātas viņas polises.

**Kopsavilkums** — saruna dažos teikumos.

<Shot name="28_summary" alt="Zvana kopsavilkums" />

**Īsumā** — viena rinda, pietiekami īsa, lai sarakstā atpazītu sarunu.

<Shot name="29_nutshell" alt="Īsumā: zvana kopsavilkums vienā rindā" />

**Darbības** — katrs uzdevums ar to, kam tas jādara un kad, labajā pusē.

<Shot name="30_actions" alt="Darbības: divi uzdevumi Jums, viens no tiem jāizdara rīt no rīta" />

**Jautājums** — uzdodiet sarunai jebko: jautājums kļūst par elementa nosaukumu, un zem atbildes ir vārdi, uz kuriem tā balstās, ar to laiku ierakstā.

<Shot name="31_question" alt="Atbilde uz jautājumu par zvanu ar diviem citātiem pie 0:21 un 0:39" />

**Kvalitāte** — vērtējums no 1 līdz 5 ar tā pamatojumu un katrs kritērijs, atzīmēts kā **izpildīts**, **vāji** vai **neizpildīts**, ar piezīmi.

<Shot name="32_quality" alt="Kvalitāte: vērtējums 4, divi kritēriji izpildīti un divi vāji" />

**Brīdinājuma signāli** — katrs signāls ar vārdiem, uz kuriem tas radies, tā svarīgumu un laiku.

<Shot name="33_red_flags" alt="Brīdinājuma signāli: Dots solījums, zems, pie 0:39" />

**Temati** — sapulces temati, šeit Zoom sapulces.

<Shot name="38_topics" alt="Zoom sapulces temati" />

## Pogas blakus nolaižamajam sarakstam {#the-buttons-beside-the-drop-down}

| Poga | Ko dara |
| --- | --- |
| Dzirksteles | **Pierakstīt vai pajautāt modelim…**: atver izvēlni, skatiet zemāk. |
| Divas lapas | Nokopē parādīto. |
| Diskete | Saglabā to failā. Atšifrējumu var saglabāt kā vienkāršu tekstu vai kā subtitrus. |
| Miskaste | Dzēš parādīto. |

<Shot name="34_run_menu" alt="Dzirksteļu izvēlne: Pieraksts ar četriem atpazinējiem, Apstrāde ar norādījumiem" />

Dzirksteļu izvēlne veic darbu pēc pieprasījuma. Sadaļā **Pieraksts** izvēlieties atpazinēju, lai ierakstu atšifrētu vēlreiz ar to; sadaļā **Apstrāde** izvēlieties norādījumu, lai to palaistu tūlīt — **Jautājums par šo zvanu** vispirms prasa pašu jautājumu. Rezultāts parādās nolaižamajā sarakstā. Tā sarunu apkopo, kad sadaļā [Apstrāde](../ai-processing/processing.md) ir izslēgta iespēja **Apstrādāt sarunas automātiski**, un tā sarunai, kurai jau ir daži apkopojumi, pievieno vēl vienu.

## Trīs piemēri {#three-examples}

### Zvans, veikts tālrunī {#a-call-made-in-the-phone}

Iepriekš redzamais zvans: runātāji ir **Jūs** un **Ilze Jansone**, kontakta vārds, divos atsevišķos kanālos.

### Importēts fails {#a-file-you-imported}

<Shot name="35_recording_import" alt="Importēts bankas atbalsta zvana fails: viens sajaukts celiņš un runātāji 1 un 2" />

`riverside_bank_support_call` ir mp3, kas ienests ar **⋮ → Importēt no failiem**. Tā nosaukums ir faila nosaukums, ikona ir bultiņa joslā, un abus tā runātājus atšķīra atpazinējs. Apkopojumi atrada skaļi nosaukto kartes numuru un uzrādīja **Sensitīvi dati**.

### Sapulce, notverta no citas lietotnes {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="No datora notverta Zoom sapulce: X.ai atšifrējums ar Jūs un sapulces nosaukumu kā runātājiem" />

**Q4 izlaides plānošana (Zoom)** tika notverta, kamēr sapulce notika Zoom, un nosaukta ar zīmuli. Visi sapulces otrā pusē ir parādīti ar ieraksta nosaukumu; jūs esat **Jūs**. Skatiet [Tveršana](../capture/capture.md).

## Ieraksts, kas jums jau ir {#a-recording-you-already-have}

Citur — mobilajā tālrunī, diktofonā vai citā sistēmā — veiktu ierakstu var pievienot ar **⋮ → Importēt no failiem**. Izvēlieties vienu vai vairākus mp3 vai wav failus; tālrunis pasaka, cik ir importēti, un nosauc tos, ko nevarēja nolasīt kā ierakstu. Katrs tiek arhivēts tieši kā sastādīts zvans: atšifrēts, apkopots pēc tām pašām [kārtulām](../ai-processing/processing.md#rules) un atrodams ar to pašu meklēšanu.

## Ieraksta dzēšana {#deleting-a-recording}

Kad ieraksts tiek dzēsts, līdz ar to pazūd viss, kas no tā izveidots: atšifrējumi un apkopojumi. Cik ilgi ieraksti tiek glabāti paši, iestata sadaļā [Ieraksti](../recordings.md#retention).
