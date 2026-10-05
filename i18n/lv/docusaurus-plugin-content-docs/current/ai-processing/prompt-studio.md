---
title: Personal Prompt Studio
sidebar_position: 3
description: Norādījumi, kas apkopo jūsu sarunas, kārtulas, kas tos palaiž, un kā tos pielāgot sev.
---

**Personal Prompt Studio** ir AI Softphone daļa, kas apkopo jūsu sarunas jūsu veidā. Apkopojumu veido norādījumi: programmai līdzi nāk vienpadsmit, gatavi lietošanai, tiklīdz pievienots pieraksts un valodas modelis, un jūs varat tos mainīt vienkāršā valodā, dublēt un pievienot savus. Tie uzskaitīti sadaļā **Norādījumi** lapā [Iestatījumi → Apstrāde](processing.md#prompts).

Jūsu LLM, jūsu atslēga, jūsu kontrole: pievienojiet vēlamo modeli ar savu atslēgu caur atbalstītu pakalpojumu vai saderīgu API — vai modeli, kas izvietots jūsu organizācijā. Ja arī [pieraksts](transcription.md#your-own-models) notiek jūsu aparatūrā, gan skaņa, gan atšifrējumi paliek jūsu vidē.

<Shot name="12b_settings_processing_prompts" alt="Norādījumu saraksts sadaļā Iestatījumi → Apstrāde" />

## Norādījumi, kas nāk kopā ar programmu {#the-prompts-that-come-with-the-program}

Otrā kolonna ir tas, ko saraksts rāda zem norādījuma nosaukuma: ko tas raksta un kādā formā.

| Norādījums | Forma | Ko tas raksta |
| --- | --- | --- |
| **Kopsavilkums** | Proza | Galvenos punktus, lēmumus un nākamos soļus vienā īsā rindkopā. |
| **Kopsavilkums vienā rindā** | Proza | Īsu virsrakstu, lai sarunu atpazītu sarakstā. |
| **Uzdevumi** | Punkti | Kurš apsolīja ko darīt un kad, ar viņu teiktajiem vārdiem. |
| **Temati** | Punkti | Apspriestos tematus dažos vārdos. |
| **Vārdi un skaitļi** | JSON | Cilvēkus, uzņēmumus, datumus, summas un atsauces. |
| **Kategorija** | Birkas | Iedala sarunu vienā no jūsu [kategorijām](dictionaries.md). |
| **Birkas** | Birkas | Piešķir tai jūsu [birkas](dictionaries.md), lai to vēlāk varētu atrast. |
| **Brīdinājuma signāli** | Signāli | Problēmas ar pierādījumu un laiku sarunā. |
| **Jautājums par šo zvanu** | Atbilde | Atbild uz jautājumu, ko uzdodat par vienu sarunu, balstoties uz tās atšifrējumu. |
| **Pārdošanas kvalitāte** | Kritēriji | Izvērtē sarunu pēc pārdošanas kritērijiem, ko varat rediģēt. |
| **Atbalsta kvalitāte** | Kritēriji | Novērtē, cik labi problēma tika saprasta un atrisināta. |

Formas ir fiksētas atbildes struktūras, un tieši tas ļauj programmai atbildi glabāt un vēlāk tajā meklēt: **Birkas** ir kodi no kāda jūsu saraksta, **Signāli** ir kodi ar nopietnību, **Kritēriji** ir vērtējums ar pamatojumu un vērtējums katram kritērijam, **Atbilde** ir atbilde ar vārdiem, uz kuriem tā balstās. Instrukcijas, kas modelim nosaka formu, glabājas sadaļā [Vārdnīcas](dictionaries.md#answer-shapes-and-language).

AI Softphone veiktie zvani, no datora [notvertās](/capture/) sapulces un importētie ieraksti visi iziet cauri tiem pašiem norādījumiem, tiklīdz tiem ir atšifrējums.

Uzdevumi fiksē, par ko vienojās — tie nesūta ziņas, nerezervē apmeklējumus un neizveido pieteikumus jūsu vietā.

## Pielāgojiet to sev {#making-it-yours}

- Mainiet vienkāršā valodā to, ko norādījums prasa: ko tas meklē, atbildes formātu un valodu, kurā tas atbild.
- Dublējiet norādījumu, lai izmēģinātu variantu.
- Izvēlieties modeli katram norādījumam — jūsu datorā vai mākonī.
- Iestatiet secību, kādā norādījumi darbojas, ieslēdziet un izslēdziet tos un padariet tos nosacītus — to dara ar [kārtulām](processing.md#rules): piemēram, pārdošanas izvērtējums darbojas tikai zvaniem, kas iedalīti kategorijā **Pārdošana**.
- Uzturiet savas kategorijas, birkas un brīdinājuma signālus sadaļā [Vārdnīcas](dictionaries.md).
- Ierobežojiet izmaksas ar [ikmēneša robežām](processing.md#limits).

Sākotnējos norādījumus un kārtulas var atjaunot ar **Atjaunot noklusējumus** sadaļā **Noklusējumi** lapā [Iestatījumi → Apstrāde](processing.md#defaults).
