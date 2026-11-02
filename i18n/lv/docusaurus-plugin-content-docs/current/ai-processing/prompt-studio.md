---
title: Personal Prompt Studio
sidebar_position: 3
description: Norādījumi, kas apkopo jūsu sarunas, kārtulas, kas tos palaiž, un kā tos pielāgot sev.
---

**Personal Prompt Studio** ir AI Softphone daļa, kas apkopo jūsu sarunas jūsu veidā. Apkopojumu veido norādījumi: programmai līdzi nāk vienpadsmit, gatavi lietošanai, tiklīdz pievienots pieraksts un valodas modelis, un jūs varat tos mainīt vienkāršā valodā, dublēt un pievienot savus. Tie uzskaitīti sadaļā **Norādījumi** lapā [Iestatījumi → Apstrāde](processing.md#prompts).

Jūsu LLM, jūsu atslēga, jūsu kontrole: pievienojiet vēlamo modeli ar savu atslēgu caur atbalstītu pakalpojumu vai saderīgu API — vai modeli, kas izvietots jūsu organizācijā. Ja arī [pieraksts](transcription.md#your-own-models) notiek jūsu aparatūrā, gan skaņa, gan atšifrējumi paliek jūsu vidē.

<Shot name="12b_settings_processing_prompts" alt="Norādījumu saraksts sadaļā Iestatījumi → Apstrāde" />

## Norādījumi, kas nāk kopā ar programmu {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 ietver vienpadsmit uzvednes pabeigtām sarunām un četrus tiešraides asistentus. Tālāk sniegti šajā valodā iekļautie teksti; valodu versijas var atšķirties.

| Norādījums | `code` | Forma | Ko tas raksta |
| --- | --- | --- | --- |
| **Kopsavilkums** | `summary` | Proza | Galvenos punktus, lēmumus un nākamos soļus vienā īsā rindkopā. |
| **Kopsavilkums vienā rindā** | `super-summary` | Proza | Īsu virsrakstu, lai sarunu atpazītu sarakstā. |
| **Uzdevumi** | `action-items` | Punkti | Kurš apsolīja ko darīt un kad, ar viņu teiktajiem vārdiem. |
| **Temati** | `topics` | Punkti | Apspriestos tematus dažos vārdos. |
| **Vārdi un skaitļi** | `entities` | JSON | Cilvēkus, uzņēmumus, datumus, summas un atsauces. |
| **Kategorija** | `categorise` | Birkas | Iedala sarunu vienā no jūsu [kategorijām](dictionaries.md). |
| **Birkas** | `tags` | Birkas | Piešķir tai jūsu [birkas](dictionaries.md), lai to vēlāk varētu atrast. |
| **Brīdinājuma signāli** | `red-flags` | Signāli | Problēmas ar pierādījumu un laiku sarunā. |
| **Jautājums par šo zvanu** | `qa` | Atbilde | Atbild uz jautājumu, ko uzdodat par vienu sarunu, balstoties uz tās atšifrējumu. |
| **Pārdošanas kvalitāte** | `sales-quality` | Kritēriji | Izvērtē sarunu pēc pārdošanas kritērijiem, ko varat rediģēt. |
| **Atbalsta kvalitāte** | `support-quality` | Kritēriji | Novērtē, cik labi problēma tika saprasta un atrisināta. |

Formas ir fiksētas atbildes struktūras, un tieši tas ļauj programmai atbildi glabāt un vēlāk tajā meklēt: **Birkas** ir kodi no kāda jūsu saraksta, **Signāli** ir kodi ar nopietnību, **Kritēriji** ir vērtējums ar pamatojumu un vērtējums katram kritērijam, **Atbilde** ir atbilde ar vārdiem, uz kuriem tā balstās. Instrukcijas, kas modelim nosaka formu, glabājas sadaļā [Vārdnīcas](dictionaries.md#instructions).

Arī [sufliera](../interface/prompter.md) palīgi ir norādījumi, ko palaiž katrai replikai zvana laikā, nevis pabeigtai sarunai. Tie glabājas atsevišķā sarakstā, sadaļā [Palīgi](prompter.md#assistants) lapā **Iestatījumi → Suflieris**.

AI Softphone veiktie zvani, no datora [notvertās](/capture/) sapulces un importētie ieraksti visi iziet cauri tiem pašiem norādījumiem, tiklīdz tiem ir atšifrējums.

Uzdevumi fiksē, par ko vienojās — tie nesūta ziņas, nerezervē apmeklējumus un neizveido pieteikumus jūsu vietā.

## Pielāgojiet to sev {#making-it-yours}

- Mainiet vienkāršā valodā to, ko norādījums prasa: ko tas meklē, atbildes formātu un valodu, kurā tas atbild.
- Dublējiet norādījumu, lai izmēģinātu variantu.
- Izvēlieties modeli katram norādījumam — jūsu datorā vai mākonī.
- Iestatiet secību, kādā norādījumi darbojas, ieslēdziet un izslēdziet tos un padariet tos nosacītus — to dara ar [kārtulām](processing.md#rules): piemēram, pārdošanas izvērtējums darbojas tikai zvaniem, kas iedalīti kategorijā **Pārdošana**.
- Uzturiet savas kategorijas, birkas un brīdinājuma signālus sadaļā [Vārdnīcas](dictionaries.md).
- Ierobežojiet izmaksas ar [ikmēneša robežām](processing.md#spending).

Sākotnējos norādījumus un kārtulas var atjaunot ar **Atjaunot noklusējumus** sadaļā **Noklusējumi** lapā [Iestatījumi → Apstrāde](processing.md#defaults).

## Modeļa loma {#role-and-task}

`system` nosaka modeļa uzvedību; `body` apraksta uzdevumu. Atbildes forma un valoda tiek norādīta atsevišķi ar sarakstu instrukcijām.

Tukšs uzdevumu vai brīdinājumu saraksts var būt pareizs rezultāts. Trūkstošos atbildīgos un datumus nedrīkst izdomāt. Atbildēm uz jautājumiem jābalstās tikai transkriptā.

[Atbilžu formāti](dictionaries.md#response-formats)

## Vietturi {#placeholders}

Uzvednes elements, kas tiek aizstāts ar sarunas datiem.

| Vietturis | Nozīme |
| --- | --- |
| `{{transcript}}` | Transkripts, viens izteikums rindā, laiks milisekundēs |
| `{{duration}}` | Sarunas ilgums |
| `{{direction}}` | Ienākošs vai izejošs zvans |
| `{{party}}` | Kontaktpersonas vārds vai numurs |
| `{{language}}` | Atbildes valoda |
| `{{question}}` | Lietotāja jautājums |
| `{{categories}}` | Kategoriju saraksts |
| `{{tags}}` | Atzīmju saraksts |
| `{{red_flags}}` | Brīdinājumu saraksts |
| `{{artifact:summary}}` | Iepriekš izveidots kopsavilkums |
| `{{conversation}}` | Tiešraides asistenta uzkrātais konteksts |
| `{{reply}}` | Sarunas partnera pēdējais izteikums; tikai tiešraides asistentam |

Izpildiet `summary` pirms `super-summary`, kas izmanto `{{artifact:summary}}`. Izpildiet `categorise` pirms kvalitātes vērtēšanas: `sales-quality` vajag kategoriju `sales`, bet `support-quality` — `support`.

[Iekļautie asistenti](prompter.md#assistant-templates)

## Noklusējuma uzvedņu teksti {#standard-templates}

AI Softphone 1.1.11 ietver vienpadsmit uzvednes pabeigtām sarunām un četrus tiešraides asistentus. Tālāk sniegti šajā valodā iekļautie teksti; valodu versijas var atšķirties.

### Kopsavilkums (`summary`) {#summary}

**Atbildes forma:** `plain`.

**Loma (`system`)**

```text
Jūs lasāt telefona sarunu atšifrējumus un rakstāt par tiem īsus, lietišķus kopsavilkumus. Jūs nekad neminat to, kas netika pateikts, un nekad nepievienojat padomus.
```

**Uzdevums (`body`)**

```text
Apkopojiet šo telefona sarunu vienā īsā rindkopā: par ko tā bija, kas tika izlemts un kas notiek tālāk. Tā ilga {{duration}} un bija {{direction}}, ar {{party}}.

{{transcript}}
```

### Kopsavilkums vienā rindā (`super-summary`) {#super-summary}

**Atbildes forma:** `plain`.

**Loma (`system`)**

```text
Jūs lasāt telefona sarunu atšifrējumus un katru sašaurināt līdz vienam izteicienam. Jūs nekad neminat un nekad nepievienojat padomus.
```

**Uzdevums (`body`)**

```text
Sašauriniet šo telefona sarunu līdz vienam izteicienam, ne vairāk kā divpadsmit vārdos — tādam, kāds stāvētu tabulā blakus zvanītāja vārdam. Bez punkta, bez pēdiņām.

{{artifact:summary}}

{{transcript}}
```

### Uzdevumi (`action-items`) {#action-items}

**Atbildes forma:** `list`.

**Loma (`system`)**

```text
Jūs lasāt telefona sarunu atšifrējumus un uzskaitāt, ko kāds apņēmās izdarīt. Jūs uzskaitāt tikai to, kas tiešām tika pateikts; jūs nekad neizdomājat uzdevumu, atbildīgo vai termiņu.
```

**Uzdevums (`body`)**

```text
Uzskaitiet, ko jebkurš šajā sarunā apņēmās izdarīt. Nosauciet, kam tas jādara, ja tas tika pateikts, un līdz kuram laikam, ja tas tika pateikts. Ja neviens neko neapņēmās, atbildiet ar tukšu sarakstu.

{{transcript}}
```

### Temati (`topics`) {#topics}

**Atbildes forma:** `list`.

**Loma (`system`)**

```text
Jūs lasāt telefona sarunu atšifrējumus un nosaucat, par ko tie bija.
```

**Uzdevums (`body`)**

```text
Uzskaitiet, ko šī saruna tiešām skāra, ne vairāk kā sešas lietas, katru dažos vārdos. Atbildīgo un termiņu atstājiet tukšus — šeit tie neko nenozīmē.

{{transcript}}
```

### Vārdi un skaitļi (`entities`) {#entities}

**Atbildes forma:** `json`.

**Loma (`system`)**

```text
Jūs lasāt telefona sarunu atšifrējumus un izceļat no tiem to, kas tajos tika nosaukts. Jūs nekad neminat rakstību un nekad nepievienojat to, kas netika pateikts.
```

**Uzdevums (`body`)**

```text
Izceliet, kas šajā sarunā tika nosaukts, kā JSON tieši šādā veidolā:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Katrs ir virkņu saraksts, pierakstīts tā, kā tas tika izrunāts. Labāk atstājiet sarakstu tukšu, nekā minat.

{{transcript}}
```

### Kategorija (`categorise`) {#categorise}

**Atbildes forma:** `labels`.

**Loma (`system`)**

```text
Jūs iedalāt telefona zvanus vienā no dotajām kategorijām. Jūs izvēlaties no saraksta un ne no kā cita.
```

**Uzdevums (`body`)**

```text
Iedaliet šo zvanu tieši vienā no šīm kategorijām. Atbildiet ar tās kodu.

{{categories}}
{{transcript}}
```

### Birkas (`tags`) {#tags}

**Atbildes forma:** `labels`.

**Loma (`system`)**

```text
Jūs apzīmējat telefona zvanus ar dotajām birkām. Jūs izvēlaties no saraksta un ne no kā cita, un birku labāk izlaižat, nekā izstiepjat.
```

**Uzdevums (`body`)**

```text
Kuras no tām ir patiesas par šo zvanu? Atbildiet ar to kodiem vai ar tukšu sarakstu, ja neviena.

{{tags}}
{{transcript}}
```

### Brīdinājuma signāli (`red-flags`) {#red-flags}

**Atbildes forma:** `flags`.

**Loma (`system`)**

```text
Jūs lasāt telefona sarunu atšifrējumus un izceļat tikai to, ko jums uzdeva meklēt. Jūs citējat vārdus, uz kuriem katrs balstās, un neizceļat neko, ko nevarat nocitēt.
```

**Uzdevums (`body`)**

```text
Izceliet tos no tiem, ko šī saruna rāda. Katram nocitējiet vārdus, uz kuriem tas balstās, un norādiet brīdi milisekundēs, kad tie tika izrunāti. Labāk neizceliet neko, nekā izstiepjat definīciju.

{{red_flags}}
{{transcript}}
```

### Jautājums par šo zvanu (`qa`) {#qa}

**Atbildes forma:** `qa`.

**Loma (`system`)**

```text
Jūs atbildat uz jautājumiem par vienu telefona zvanu, no tā atšifrējuma un ne no kā cita. Tur, kur saruna to nepasaka, jūs to sakāt tieši, nevis minat.
```

**Uzdevums (`body`)**

```text
{{question}}

{{transcript}}
```

### Pārdošanas kvalitāte (`sales-quality`) {#sales-quality}

**Atbildes forma:** `rubric`.

**Loma (`system`)**

```text
Jūs vērtējat, kā pārdevējs vadīja telefona sarunu. Jūs spriežat tikai pēc tā, ko rāda atšifrējums, nekad nepieņemat, kas bija pirms vai pēc tās, un esat vienlīdz prasīgs pret sarunu, kas izdevās, un pret to, kas neizdevās.
```

**Uzdevums (`body`)**

```text
Novērtējiet mūsu pusi šajā sarunā — operatoru — pēc šiem kritērijiem un ne pēc kādiem citiem:
- sveiciens: vai viņš nosauca sevi un uzņēmumu?
- noskaidrošana: vai viņš uzzināja, ko klients patiesībā gribēja?
- iebildumi: vai viņš atbildēja uz to, ko klients izvirzīja, nevis runāja garām?
- vērtība: vai viņš pateica, ko klients iegūst, ne tikai to, cik tas maksā?
- nākamais solis: vai saruna beidzās ar kaut ko noteiktu norunātu?

{{transcript}}
```

### Atbalsta kvalitāte (`support-quality`) {#support-quality}

**Atbildes forma:** `rubric`.

**Loma (`system`)**

```text
Jūs vērtējat, kā atbalsta darbinieks vadīja telefona sarunu. Jūs spriežat tikai pēc tā, ko rāda atšifrējums, un vairāk sverat to, vai klienta problēma tiešām tika atrisināta, nekā to, cik patīkama bija saruna.
```

**Uzdevums (`body`)**

```text
Novērtējiet mūsu pusi šajā sarunā — operatoru — pēc šiem kritērijiem un ne pēc kādiem citiem:
- sveiciens: vai viņš nosauca sevi un pārliecinājās, ar ko runā?
- izpratne: vai viņš noskaidroja, kas patiesībā nav kārtībā, pirms atbildēja?
- risinājums: vai problēma tika atrisināta vai tika dots noteikts nākamais solis?
- tonis: vai viņš palika mierīgs un pieklājīgs, jo īpaši tur, kur klients nepalika?
- noslēgums: vai viņš pārliecinājās, ka klients ir apmierināts, pirms beidza?

{{transcript}}
```
