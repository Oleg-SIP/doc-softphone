---
title: Sufliera iestatījumi
sidebar_label: Suflieris
sidebar_position: 5
description: "Iestatījumi → Suflieris: kas vajadzīgs tiešraides suflierim, slēdzis, kas to atļauj, teksta lielums, palīgi un to kartītes un mēneša griesti tam, ko tas drīkst tērēt."
---

Sadaļā **Iestatījumi → Suflieris** tiešraides suflieri atļauj, iestata tā izmēru un piešķir tam palīgus. Pats suflieris — logs, kas pieraksta sarunu tās laikā un iesaka, ko atbildēt, kā arī mēģinājums ar ierakstu — aprakstīts lapā [Sufliera logs](/interface/prompter).

Iestatījumu [Pārskats](/interface/settings-overview) rāda suflieri sadaļā **Suflieris** divos soļos: **Atļaut suflieri** un **Palaist suflieri**.

## Kas tam vajadzīgs {#what-it-needs}
- **Atpazinējs, kas prot klausīties sarunas laikā.** To pievieno sadaļā [Iestatījumi → Pieraksts](/ai-processing/transcription#live-recognition-for-the-prompter) kā jebkuru citu atpazinēju, un tam vajadzīga **Adrese suflierim** un veiksmīga **Pārbaudīt**.
- **Valodas modelis** palīgiem, kas kaut ko iesaka. Tas ir palīgam iestatītais modelis vai noklusējuma modelis sadaļā [Iestatījumi → Apstrāde](/ai-processing/processing#language-models). Subtitriem modelis nav vajadzīgs vispār.
- **Atzīme Atļaut sufliera lietošanu** sadaļā **Iestatījumi → Suflieris**.

Kad visas trīs ir izpildītas, **Suflieris** parādās saraksta apakšā telefonā starp **Vēsture** un **Iestatījumi** un atver [sufliera logu](/interface/prompter). Programmas daļa, kas to dara, ir modulis **Suflieris**, *Klausās sarunu tās laikā un piedāvā*; to var izslēgt sadaļā [Moduļi](/application/modules).

## Iestatījumi → Suflieris {#settings--prompter}
<Shot name="41_settings_prompter" alt="Iestatījumi → Suflieris: slēdzis, kas atļauj suflieri, un teksta lielums" />

*Runas atpazīšana sarunas laikā un ieteikumi, rakstīti pēc jūsu pašu norādījumiem. Abi tiek rēķināti pa minūtēm.*

| Iestatījums | Noklusējums | Ko tas dara |
| --- | --- | --- |
| **Atļaut sufliera lietošanu** | izslēgts | Vienīgais slēdzis, kas vispār ļauj palaist suflieri. Nekas cits lapā nedarbojas, kamēr tas ir izslēgts. |
| **Atšifrējums un ieteikumi** | 13 pikseļi | Cik lielas tiek zīmētas abas loga kolonnas. |
| **Atkārtot jaunāko rindu virs kolonnām** | ieslēgts | Rāda jaunāko ieteikumu — vai jaunāko rindu palīgam, kas neko neiesaka — atsevišķā joslā virs kolonnām. |
| **Atkārtotā rinda** | 20 pikseļi | Cik liels ir joslas teksts. Redzams, kamēr josla ir ieslēgta. |

:::caution
Otras puses balss tiek sūtīta atpazinējam runāšanas laikā, un tas nav nekas mazāk kā ierakstīšana. Kur [Iestatījumi → Ierakstīšana](/recordings) prasa vispirms to paziņot, suflieris palaižas tikai pēc tam.
:::

Suflieri lasa runājot, bieži no lielāka attāluma nekā pārējo telefonu, tāpēc abus izmērus izvēlaties jūs: izvēlieties tādus, ko varat uztvert, nepieliecoties pie ekrāna. Velciet atdalītāju zem joslas [sufliera logā](/interface/prompter#the-window), lai padarītu to augstāku.

### Palīgi {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Iestatījumi → Suflieris: palīgi un mēneša griesti" />

Palīgs ir tas, par ko suflierim lūdz būt. *Katrs no tiem klausās notiekošu sarunu un raksta kaut ko sufliera logā: vārdus tā, kā tie tiek izrunāti, to tulkojumu vai ieteikumu, ko teikt tālāk.* Kuru palaist, jūs izvēlaties sufliera logā. Programmai līdzi nāk četri:

| Palīgs | Ko tas raksta | Jautā modelim |
| --- | --- | --- |
| **Subtitri** | Abu pušu vārdus, kad tie tiek teikti. | nē |
| **Tulkojums** | Otras puses vārdus, iztulkotus programmas valodā. | jā |
| **Iebildumi sarunā** | Tam, kas pārdod pa telefonu: kad klients izsaka iebildumu, iebildumu vienā rindā un vienu rindu, kas uz to atbild. | jā |
| **Palīdzība intervijā** | Tam, ar kuru notiek intervija: atbildi uz tikko uzdoto jautājumu dažās īsās rindās vai to, kas jāaptver nākamajā atbildē. | jā |

**▲** un **▼** maina secību, un tā ir secība [sufliera loga](/interface/prompter#the-window) nolaižamajā sarakstā. **Pievienot** izveido jūsu pašu palīgu. **Atjaunot noklusējumus** atjauno norādījumus un noteikumus tādus, kādi tie nāca ar programmu, gan šeit, gan sadaļā [Apstrāde](/ai-processing/processing#defaults); jūsu valodas modeļi paliek neskarti.

### Palīga kartīte {#an-assistants-card}
Nospiežot palīgu, atveras tā kartīte. Tā ir tā pati kartīte, kas [norādījumam](/ai-processing/prompt-studio) sadaļā Apstrāde, ar dažiem saviem vadīklām.

<Shot name="42_prompter_assistant" alt="Palīga Iebildumi sarunā kartīte: atpazinējs, kad atbilde ir beigusies, loma un norādījums" />

| Lauks | Ko tas dara |
| --- | --- |
| **Nosaukums** | Nosaukums sarakstā un sufliera logā. |
| **Atbildes forma** un **Sūtīt arī** | Kā katram norādījumam: atbildes forma un līdzi sūtītās instrukcijas. Komplektā iekļautie palīgi atbild formā **Proza**. |
| **Atpazinējs** | Kurš atpazinējs klausās. Tiek piedāvāti tikai tie, kas prot klausīties, kamēr kāds runā. |
| **Kad atbilde ir beigusies** | Kurš izlemj, ka atbilde ir galā un uz to var atbildēt: **Izlemj atpazinējs**, **Pēc pauzes** vai **Tikai tad, kad lūdzu** — tad atbilde beidzas, kad nospiežat **Ieteikums**. Seši no atpazinējiem paši pasaka, kur atbilde beidzas, četri ne; **Izlemj atpazinējs** izmanto pauzi tur, kur tam atbildes nav, un tāpēc to ir vērts atstāt. |
| **Atpazīt arī manu pusi** | Otra sesija tajā pašā atpazinējā par dubultu cenu, lai arī jūsu pašu vārdi parādītos atšifrējumā. Tie nonāk tajā, ko pasaka modelim, taču nekad nav tas, par ko modelim jautā. |
| **Loma — kas ir modelis** | Tiek nosūtīta modelim pirms norādījuma, piemēram, *Jūs palīdzat cilvēkam, kurš pārdod pa telefonu…* |
| **Norādījums** | Ko modelim jautā par katru atbildi. `{{reply}}` ir tikko beigusies atbilde, un `{{conversation}}` — viss iepriekš teiktais. *Atstājiet tukšu, un modelim nejautā neko: vārdi parādās, tiklīdz pienāk, un maksāt nākas tikai par atpazinēju.* Tieši tas ir **Subtitri**. |
| **Atbildēt valodā** | Ieteikuma valoda: **Lai kas arī tiktu runāts**, **Šīs programmas valoda** vai **Vienmēr viena valoda** ar tās kodu. |
| **Modelis** | **Noklusējums** vai kāds no jūsu [valodas modeļiem](/ai-processing/processing#language-models). |

### Tēriņi {#spending}
*Atsevišķi no tā, ko noteikumi drīkst tērēt pabeigtām sarunām. Mēnesis kopsavilkumu nedrīkst spēt apklusināt suflieri sarunas vidū.*

| Lauks | Kad tas ir sasniegts |
| --- | --- |
| **Atpazinēji, mēnesī** | Strādājošs suflieris apstājas tās atbildes beigās, pie kuras tas ir, — nekad vārda vidū. |
| **Modeļi, mēnesī** | Ieteikumi apstājas, un subtitri turpinās. |

Tukšs nozīmē, ka griestu nav. Tiešraides audio minūtes cena ir atpazinēja **Cena par minūti**, kas norādīta tā kartītē sadaļā [Pieraksts](/ai-processing/transcription#the-recognisers-card); bez tās suflieris pasaka, ka rādītā summa ir aplēse.
