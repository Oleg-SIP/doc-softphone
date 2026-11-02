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
| **Pārdošana** | `sales` | Pārdošana, piedāvājums, sarunas vai pirkuma noslēgšana — arī klients, kas jautā, cik kaut kas maksā. |
| **Atbalsts** | `support` | Palīdzība kādam ar preci vai pakalpojumu, kas viņam jau ir: bojājums, jautājums par lietošanu, sūdzība par to, kā tas strādā. |
| **Personisks** | `personal` | Nemaz nav darba — privāta saruna, kas gadījās notikt uz šīs līnijas. |
| **Cits** | `other` | Darbs, bet ne pārdošana, ne atbalsts: piegādātājs, kolēģis, piegāde, nepareizs numurs. Izvēlieties šo, nevis minot starp pārējiem. |

Nospiediet **Pievienot**, lai pievienotu savu kategoriju.

## Birkas {#tags}

Atzīmes, kas *visas var attiekties uz vienu un to pašu sarunu*. Nospiediet **Pievienot**, lai pievienotu. Saraksts sākas ar tādiem ierakstiem kā:

| Nosaukums | Kods | Izmanto |
| --- | --- | --- |
| **Solīts atzvanīt** | `callback` | Kāds šajā sarunā solīja atzvanīt vai lūdza, lai viņam atzvana. |
| **Sūdzība** | `complaint` | Otra puse pauda neapmierinātību neatkarīgi no tā, vai tas tika atrisināts. |
| **Nodots tālāk** | `escalation` | Zvans tika nodots kādam citam vai otra puse to lūdza. |
| **VIP klients** | `vip` | Pret otru pusi izturējās kā pret svarīgu klientu vai viņa pati to par sevi teica. |

## Brīdinājuma signāli {#red-flags}

Lietas, kam vajadzīga uzmanība, atrastas sarunā ar pierādījumu un laiku — piemēram, *Dusmīgs klients* vai *Aiziešanas risks*. Brīdinājuma signāli [ierakstu logā](../interface/recordings.md) tiek zīmēti sarkanā krāsā, un katram ir nopietnība: zema, vidēja vai augsta.

| Nosaukums | Kods | `severity` | Izmanto |
| --- | --- | --- | --- |
| **Dusmīgs klients** | `angry-customer` | `high` | Bija dzirdams, ka otra puse ir dusmīga, apvaino vai draud aiziet. |
| **Aiziešanas risks** | `churn-risk` | `high` | Tika pieminēta atteikšanās, nepagarināšana vai pāreja pie kāda cita, lai cik mierīgi. |
| **Dots solījums** | `promise-made` | `medium` | Mūsu puse apņēmās kaut ko noteiktu — datumu, cenu, labojumu, naudas atmaksu. |
| **Sensitīvi dati** | `sensitive-data` | `high` | Skaļi tika nolasīts kartes numurs, parole, dokumenta numurs vai kas cits, kam ierakstā nebūtu jābūt. |
| **Konkurents** | `competitor` | `low` | Otra puse nosauca kādu citu, kas piedāvā to pašu, vai salīdzināja mūs ar viņu. |

## Norādījumi {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Iestatījumi → Vārdnīcas: atbilžu formas un valodas instrukcijas" />

*Tas, ko pievieno katram norādījumam par atbildes formu un valodu, kādā to rakstīt.* Tās glabājas šeit, lai katrs norādījums varētu izmantot vienu un to pašu formulējumu, un jūs varat tās mainīt kā jebkuru citu ierakstu — vai uzrakstīt savas, piemēram, *atbildi īsi* vai *nekad nenosauc cenu*, un atzīmēt tās jebkurā norādījumā sadaļā **Sūtīt arī**.

| Nosaukums | Kods | Ko tas pasaka modelim |
| --- | --- | --- |
| **Proza** | `shape-plain` | Atbildēt vienkāršā prozā, bez JSON, sarakstiem un virsrakstiem. |
| **Punkti** | `shape-list` | Atbildēt ar darāmo lietu sarakstu, katrai norādot, kas un kad. |
| **Birkas** | `shape-labels` | Atbildēt JSON formātā ar kodu sarakstu un pārliecību par katru, izmantojot tikai kodus no saņemtā saraksta. |
| **Vērtējums** | `shape-score` | Atbildēt ar vērtējumu, tā pamatojumu un vārdiem, uz kuriem tas balstās. |
| **Kritēriji** | `shape-rubric` | Atbildēt ar kopējo vērtējumu un vērtējumu katram kritērijam. |
| **Signāli** | `shape-flags` | Atbildēt ar kodiem no saraksta, katru ar nopietnību. |
| **Atbilde** | `shape-qa` | Atbildēt ar atbildi vai skaidri pateikt, ka saruna to nesaka, kā arī vārdus, uz kuriem atbilde balstās. |
| **JSON** | `shape-json` | Atbildēt tikai ar JSON, augstāk prasītajā formā. |
| **Kā runāts** | `language-as-spoken` | Rakstīt valodā, kurā notika saruna. |
| **Kā runāts, nosaukta** | `language-as-spoken-named` | Tas pats, nosaucot valodu. |
| **Nosaukta valoda** | `language-named` | Rakstīt valodā, ko jūs nosaucat. |

**Pievienot** saraksta augšā pievieno ierakstu.

## Noklusējumi {#defaults}

**Atjaunot noklusējumus** atjauno katru vārdnīcu tādu, kāda tā nāca kopā ar programmu, pašreizējā saskarnes valodā. To, zem kā jūsu sarunas jau ir iedalītas, tas neskar.

## Atbilžu formāti {#response-formats}

Blokos ir iekļauto instrukciju precīzs teksts. Tie apraksta atbilžu formātus; alternatīvas ir pieraksts, nevis izpildāmi JSON piemēri.

### Proza (`shape-plain`) {#shape-plain}

```text
Atbildiet vienkāršā prozā. Nelietojiet JSON, sarakstus vai virsrakstus.
```

### Punkti (`shape-list`) {#shape-list}

```text
Atbildiet tikai ar JSON, tieši šādā veidolā:
{"items": [{"text": "kas ir jāizdara", "owner": "kurš, vai tukšs", "due": "kad, vai tukšs"}]}
Ja nav ko uzskaitīt, lietojiet tukšu masīvu. Neko nerakstiet ārpus JSON.
```

### Birkas (`shape-labels`) {#shape-labels}

```text
Atbildiet tikai ar JSON, tieši šādā veidolā:
{"labels": [{"code": "kods no dotā saraksta", "confidence": 0.0}]}
Lietojiet tikai sarakstā esošos kodus. Ja neviens neder, lietojiet tukšu masīvu.
Neizdomājiet kodu un neko nerakstiet ārpus JSON.
```

### Vērtējums (`shape-score`) {#shape-score}

```text
Atbildiet tikai ar JSON, tieši šādā veidolā:
{"score": 3, "rationale": "kāpēc šis skaitlis, nevis par vienu lielāks",
 "evidence": [{"at_ms": 0, "quote": "vārdi, uz kuriem tas balstās"}]}
Vērtējums ir vesels skaitlis no 1 līdz 5. Neko nerakstiet ārpus JSON.
```

### Kritēriji (`shape-rubric`) {#shape-rubric}

```text
Atbildiet tikai ar JSON, tieši šādā veidolā:
{"overall": 3, "rationale": "kāpēc šis skaitlis, nevis par vienu lielāks",
 "criteria": [{"name": "kritērijs tāds, kāds jums tika dots",
               "verdict": "pass" vai "weak" vai "fail" vai "n/a",
               "note": "viens teikums"}]}
Novērtējiet katru doto kritēriju un nevienu citu. Kopvērtējums ir vesels
skaitlis no 1 līdz 5. Neko nerakstiet ārpus JSON.
```

### Signāli (`shape-flags`) {#shape-flags}

```text
Atbildiet tikai ar JSON, tieši šādā veidolā:
{"flags": [{"code": "kods no dotā saraksta",
            "severity": "low" vai "medium" vai "high",
            "evidence": "vārdi, uz kuriem tas balstās",
            "at_ms": 0}]}
Lietojiet tikai sarakstā esošos kodus un katru izceliet ne vairāk kā vienreiz.
Ja nekas neder, lietojiet tukšu masīvu. Neko nerakstiet ārpus JSON.
```

### Atbilde (`shape-qa`) {#shape-qa}

```text
Atbildiet tikai ar JSON, tieši šādā veidolā:
{"answer": "jūsu atbilde vai tieši tas, ka saruna to nepasaka",
 "citations": [{"at_ms": 0, "quote": "vārdi, uz kuriem atbilde balstās"}]}
Neatbildiet ne no kā cita kā no sarunas. Neko nerakstiet ārpus JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Atbildiet tikai ar JSON, augstāk prasītajā veidolā. Neko nerakstiet ārpus JSON.
```

### Kā runāts (`language-as-spoken`) {#language-as-spoken}

```text
Rakstiet atbildi tajā pašā valodā, kādā bija saruna.
```

### Kā runāts, nosaukta (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Rakstiet atbildi tajā pašā valodā, kādā bija saruna, un tā ir {language}.
```

### Nosaukta valoda (`language-named`) {#language-named}

```text
Rakstiet atbildi šajā valodā: {language}.
```
