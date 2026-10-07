---
title: Vārdnīcas
sidebar_position: 4
description: Jūsu kategorijas, birkas un brīdinājuma signāli — vārdi, zem kuriem tiek iedalītas jūsu sarunas.
---

**Iestatījumi → Vārdnīcas** satur vārdus, zem kuriem sarunu var iedalīt, ar kuriem to var apzīmēt vai pēc kuriem to var izcelt. Šie saraksti ir tas, ko rāda modeļiem un no kā tiem jāizvēlas, tāpēc atbilde vienmēr ir kaut kas, ko varat vēlāk meklēt.

<Shot name="13_settings_dictionaries" alt="Iestatījumi → Vārdnīcas" />

**Rādīt dzēstos** rāda ierakstus, ko esat dzēsuši.

Katrs ieraksts ir nosaukums, īss kods ar maziem burtiem un apraksts, kas modelim pasaka, kad to izvēlēties. Kods ir tas, kas tiek glabāts un ko atgriež [REST API](../integration/rest-api.md#taxonomy-and-settings), tāpēc tas paliek nemainīgs, kad pārdēvējat ierakstu.

## Kategorijas {#categories}

Par ko bija saruna; **katrai sarunai izvēlas vienu**. Programma sāk ar četrām:

| Nosaukums | Kods | Izmanto |
| --- | --- | --- |
| **Pārdošana** | `sales` | Pārdošanai, piedāvājuma sagatavošanai, sarunām vai pirkuma pēcapstrādei — arī, ja klients jautā, cik kaut kas maksā. |
| **Atbalsts** | `support` | Palīdzībai kādam ar produktu vai pakalpojumu, kas viņam jau ir: kļūme, jautājums par lietošanu, sūdzība par darbību. |
| **Personisks** | `personal` | Nekas ar darbu nesaistīts — privāta saruna, kas nejauši notika šajā līnijā. |
| **Cits** | `other` | Darbs, bet ne pārdošana un ne atbalsts: piegādātājs, kolēģis, piegāde, nepareizs numurs. Izvēlieties šo, nevis minējiet starp pārējām. |

Nospiediet **Pievienot**, lai pievienotu savu kategoriju.

## Birkas {#tags}

Atzīmes, kas *visas var attiekties uz vienu un to pašu sarunu*. Nospiediet **Pievienot**, lai pievienotu. Saraksts sākas ar tādiem ierakstiem kā:

| Nosaukums | Kods | Izmanto |
| --- | --- | --- |
| **Solīts atzvanīt** | `callback` | Kāds šajā zvanā apsolīja atzvanīt vai lūdza, lai viņam atzvana. |
| **Sūdzība** | `complaint` | Otra puse pauda neapmierinātību neatkarīgi no tā, vai tā tika atrisināta. |
| **Nodots tālāk** | `escalation` | Zvans tika nodots kādam citam, vai otra puse to lūdza. |
| **VIP klients** | `vip` | Pret otru pusi izturējās kā pret svarīgu klientu, vai tā teica, ka tāda ir. |

## Brīdinājuma signāli {#red-flags}

Lietas, kam vajadzīga uzmanība, atrastas sarunā ar pierādījumu un laiku — piemēram, *Dusmīgs klients* vai *Aiziešanas risks*. Brīdinājuma signāli [ierakstu logā](../interface/recordings.md) tiek zīmēti sarkanā krāsā, un katram ir nopietnība: zema, vidēja vai augsta.

## Atbilžu formas un valoda {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Iestatījumi → Vārdnīcas: atbilžu formas un valodas instrukcijas" />

Zemāk cilnē ir instrukcijas, no kurām tiek salikti norādījumi. Tās glabājas šeit, lai katrs norādījums varētu izmantot vienu un to pašu formulējumu, un jūs varat tās mainīt kā jebkuru citu ierakstu.

| Nosaukums | Kods | Ko tas pasaka modelim |
| --- | --- | --- |
| **Birkas** | `shape-labels` | Atbildēt JSON formātā ar kodu sarakstu un pārliecību par katru, izmantojot tikai kodus no saņemtā saraksta. |
| **Vērtējums** | `shape-score` | Atbildēt ar vērtējumu, tā pamatojumu un vārdiem, uz kuriem tas balstās. |
| **Kritēriji** | `shape-rubric` | Atbildēt ar kopējo vērtējumu un vērtējumu katram kritērijam. |
| **Signāli** | `shape-flags` | Atbildēt ar kodiem no saraksta, katru ar nopietnību. |
| **Atbilde** | `shape-qa` | Atbildēt ar atbildi vai skaidri pateikt, ka saruna to nesaka, kā arī vārdus, uz kuriem atbilde balstās. |
| **JSON** | `shape-json` | Atbildēt tikai ar JSON, augstāk prasītajā formā. |
| **Kā runāts** | `language-as-spoken` | Rakstīt valodā, kurā notika saruna. |
| **Kā runāts, nosaukta** | `language-as-spoken-named` | Tas pats, nosaucot valodu. |
| **Nosaukta valoda** | `language-named` | Rakstīt valodā, ko jūs nosaucat. |

**Pievienot** saraksta beigās pievieno ierakstu.

## Noklusējumi {#defaults}

**Atjaunot noklusējumus** atjauno katru vārdnīcu tādu, kāda tā nāca kopā ar programmu, pašreizējā saskarnes valodā. To, zem kā jūsu sarunas jau ir iedalītas, tas neskar.
