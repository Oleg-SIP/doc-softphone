---
title: Apstrāde
sidebar_position: 2
description: Sarunu automātiska apstrāde, valodas modeļi, norādījumi, kārtulas, kas tos palaiž, un ikmēneša izdevumu robežas.
---

**Iestatījumi → Apstrāde** izlemj, kas notiek ar sarunu pēc ierakstīšanas, kurš modelis veic darbu un cik tas drīkst maksāt.

<Shot name="12_settings_processing" alt="Iestatījumi → Apstrāde" />

## Apstrādāt sarunas automātiski {#process-conversations-automatically}

- **Izslēgts:** nekas nenotiek, līdz to pieprasāt [ierakstu logā](../interface/recordings.md).
- **Ieslēgts:** zemāk esošās [kārtulas](#rules) darbojas pašas. Tas pārvērš sarunu kopsavilkumā, kategorijā un visā pārējā, nevienam neko nespiežot. Mākonī esošs modelis ņem maksu par katru no šiem soļiem.

## Valodas modeļi {#language-models}

Modeļi, kas lasa atšifrējumu un raksta par to. Nospiediet **Pievienot**, lai pievienotu. Katrs ir sarakstā ar nosaukumu un zem tā modeļa identifikatoru un pakalpojuma adresi, piemēram, `qwen3-32b · http://localhost:8000/v1`. Tas, kas atzīmēts kā **noklusējums** — attēlā **QWEN**, modelis šajā datorā —, tiek izmantots pēc noklusējuma: norādījumos un tajos [sufliera](prompter.md) palīgos, kas nenosauc savu modeli. **Pārbaudīt** modeļa veidlapā pārbauda, vai pakalpojums tiešām atbild, pirms uz to paļaujaties.

- Modelis **jūsu datorā** patur katru sarunu ēkas iekšienē un neko nemaksā.
- Mākonī esošs modelis — OpenAI, Claude, Mistral, DeepSeek, Groq un citi — maksā par lietošanu. Programma rāda katra izsaukuma cenu marķieros un naudā.

## Norādījumi {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Iestatījumi → Apstrāde: norādījumi" />

*Tas, ko no modeļiem prasa.* Katrs norādījums atnāca kopā ar programmu, un katrs ir jūsu, lai to mainītu — un liktu atpakaļ. Katrs ir sarakstā ar nosaukumu un zem tā — ko tas raksta un kādā formā; **▲** un **▼** maina saraksta secību. Forma — **Atbilde**, **Punkti**, **Birkas**, **JSON**, **Proza**, **Signāli** vai **Kritēriji** — nosaka, kā atbilde tiek glabāta un rādīta. Norādījumi aprakstīti lapā [Personal Prompt Studio](prompt-studio.md). **Pievienot** izveido jūsu norādījumu.

## Kārtulas {#rules}

<Shot name="12c_settings_processing_rules" alt="Iestatījumi → Apstrāde: kārtulas" />

*Tas, kas darbojas pats, šādā secībā. Katrs iedarbojas ne vairāk kā reizi sarunā.* Kārtula ir rinda ar izvēles rūtiņu, kas to ieslēdz vai izslēdz, tās nosaukumu un zem tā — ko tā dara. **▲** un **▼** maina secību. Programmai līdzi nāk astoņas:

| Kārtula | Ko dara | Kad |
| --- | --- | --- |
| **Atšifrēt katru sarunu** | Atšifrē to. | vienmēr |
| **Apkopot to** | Prasa modelim: **Kopsavilkums**. | vienmēr |
| **Sašaurināt to līdz vienai rindai** | Prasa modelim: **Kopsavilkums vienā rindā**. | vienmēr |
| **Iedalīt to kategorijā** | Prasa modelim: **Kategorija**. | vienmēr |
| **Apzīmēt to** | Prasa modelim: **Birkas**. | vienmēr |
| **Izcelt to, kas vērts ieskata** | Prasa modelim: **Brīdinājuma signāli**. | vienmēr |
| **Novērtēt to, ja bija pārdošana** | Prasa modelim: **Pārdošanas kvalitāte**. | tikai ja kategorija ir **Pārdošana** |
| **Novērtēt to, ja bija atbalsts** | Prasa modelim: **Atbalsta kvalitāte**. | tikai ja kategorija ir **Atbalsts** |

Secībai ir nozīme: abām pēdējām kārtulām vajadzīga kategorija, ko iestatījusi iepriekšējā kārtula. **Pievienot** izveido jūsu kārtulu.

## Tēriņi {#spending}

<Shot name="12d_settings_processing_spending" alt="Iestatījumi → Apstrāde: mēneša tēriņi un abas robežas" />

Sadaļā **Tēriņi** programma rāda, cik šomēnes iztērēts un cik pieprasījumos — attēlā *Šomēnes nekas nav apstrādāts*, un, piemēram, *Šomēnes: 40 492 marķieru, 84 pieprasījumos, bez maksas*, kad kaut kas ir apstrādāts.

| Lauks | Nozīme |
| --- | --- |
| **Naudas robeža, mēnesī** | Lielākā summa, ko modeļi drīkst izmaksāt mēnesī. |
| **Marķieru robeža, mēnesī** | Lielākais marķieru skaits, ko tie drīkst izmantot mēnesī. |

Robežas ir divas, jo mēnesi var mērīt divās vienībās. Abas ir tukšas, līdz jūs tās aizpildāt. Kad kāda no tām sasniegta, automātiskās kārtulas apstājas līdz mēneša maiņai. **Tas, ko pieprasāt paši, nekad netiek apturēts.** [Suflierim](prompter.md#spending) ir savi griesti, lai mēneša kopsavilkumi nevarētu to apklusināt sarunas vidū.

## Noklusējumi {#defaults}

**Atjaunot noklusējumus** atjauno norādījumus un kārtulas tādus, kādi tie nāca kopā ar programmu, pašreizējā saskarnes valodā. Jūsu valodas modeļi netiek skarti.

Kopā ar programmu nākušie norādījumi un kārtulas paliek valodā, kurā tie bija, kad maināt saskarnes valodu; **Atjaunot noklusējumus** tos pārnes jaunajā valodā. Tad katrs norādījums labajā pusē tiek atzīmēts kā *mainīts*.
