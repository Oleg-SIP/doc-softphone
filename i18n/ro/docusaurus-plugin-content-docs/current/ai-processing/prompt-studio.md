---
title: Personal Prompt Studio
sidebar_position: 3
description: Instrucțiunile care vă prelucrează conversațiile, regulile care le rulează și cum le faceți ale dumneavoastră.
---

**Personal Prompt Studio** este partea din AI Softphone care vă prelucrează conversațiile în felul dumneavoastră. Prelucrarea este făcută de instrucțiuni: programul vine cu unsprezece, gata de folosit de îndată ce sunt conectate transcrierea și un model de limbă, iar dumneavoastră le puteți schimba în limbaj obișnuit, le puteți duplica și puteți adăuga altele proprii. Ele apar în lista **Instrucțiuni** din [Setări → Prelucrare](processing.md#prompts).

LLM-ul dumneavoastră, cheia dumneavoastră, controlul dumneavoastră: conectați modelul preferat cu propria cheie, printr-un serviciu suportat sau un API compatibil — sau un model instalat în cadrul organizației dumneavoastră. Cu [transcrierea](transcription.md#your-own-models) tot pe propriul hardware, atât sunetul, cât și transcrierile rămân în mediul dumneavoastră.

<Shot name="12b_settings_processing_prompts" alt="Lista instrucțiunilor în Setări → Prelucrare" />

## Instrucțiunile care vin cu programul {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 include unsprezece prompturi pentru conversații încheiate și patru asistenți în timp real. Mai jos sunt textele incluse pentru această limbă; versiunile lingvistice pot diferi.

| Instrucțiune | `code` | Formă | Ce scrie |
| --- | --- | --- | --- |
| **Rezumat** | `summary` | Proză | Ideile principale, deciziile și pașii următori, într-un paragraf scurt. |
| **Rezumat într-un rând** | `super-summary` | Proză | Un titlu scurt după care să recunoașteți conversația într-o listă. |
| **Sarcini** | `action-items` | Elemente | Cine a convenit să facă ce și până când, cu cuvintele pe care le-a spus. |
| **Subiecte** | `topics` | Elemente | Temele abordate, în câteva cuvinte. |
| **Nume și numere** | `entities` | JSON | Persoane, companii, date, sume și referințe. |
| **Categorie** | `categorise` | Etichete | Încadrează conversația într-una dintre [categoriile](dictionaries.md) dumneavoastră. |
| **Etichete** | `tags` | Etichete | Îi pune [etichetele](dictionaries.md) dumneavoastră, ca să poată fi găsită mai târziu. |
| **Semnale de alarmă** | `red-flags` | Semnale | Probleme, cu dovada și momentul din conversație. |
| **O întrebare despre această convorbire** | `qa` | Răspuns | Răspunde la o întrebare pe care o puneți despre o conversație, pe baza transcrierii ei. |
| **Calitatea vânzării** | `sales-quality` | Criterii | Evaluează conversația după criterii de vânzare pe care le puteți edita. |
| **Calitatea asistenței** | `support-quality` | Criterii | Apreciază cât de bine a fost înțeleasă și rezolvată problema. |

Formele sunt structuri fixe ale unui răspuns, ceea ce îi permite programului să-l păstreze și să-l caute mai târziu: **Etichete** sunt coduri dintr-una dintre listele dumneavoastră, **Semnale** sunt coduri cu o gravitate, **Criterii** este o notă cu o justificare și o notă pentru fiecare criteriu, **Răspuns** este un răspuns cu cuvintele pe care se sprijină. Instrucțiunile care îi spun unui model structura sunt păstrate în [Dicționare](dictionaries.md#instructions).

Și asistenții [sufleurului](../interface/prompter.md) sunt instrucțiuni, rulate pe fiecare replică în timpul unui apel, nu pe o conversație încheiată. Sunt păstrați într-o listă separată, la [Asistenți](prompter.md#assistants) în **Setări → Sufleur**.

Apelurile efectuate în AI Softphone, ședințele [captate](/capture/) de pe calculator și înregistrările importate trec toate prin aceleași instrucțiuni după ce au o transcriere.

Sarcinile consemnează ce s-a convenit — nu trimit mesaje, nu programează vizite și nu creează tichete în locul dumneavoastră.

## Să le faceți ale dumneavoastră {#making-it-yours}

- Schimbați ce cere o instrucțiune, în limbaj obișnuit: ce caută, formatul răspunsului și limba în care răspunde.
- Duplicați o instrucțiune ca să încercați o variantă.
- Alegeți modelul pentru fiecare instrucțiune — pe propriul calculator sau în cloud.
- Stabiliți ordinea în care rulează instrucțiunile, porniți-le și opriți-le și faceți-le condiționate — acest lucru se face cu [regulile](processing.md#rules): de exemplu, o evaluare a vânzării rulează doar pe apelurile încadrate ca **Vânzări**.
- Păstrați propriile categorii, etichete și semnale de alarmă în [Dicționare](dictionaries.md).
- Plafonați costul cu [limitele lunare](processing.md#spending).

Instrucțiunile și regulile originale pot fi restabilite cu **Restabilește valorile implicite**, în secțiunea **Valori implicite** din [Setări → Prelucrare](processing.md#defaults).

## Rolul modelului {#role-and-task}

`system` stabilește comportamentul modelului; `body` descrie sarcina. Forma și limba răspunsului sunt furnizate separat prin instrucțiunile dicționarului.

O listă goală de sarcini sau alerte poate fi corectă. Responsabilii și termenele care lipsesc nu trebuie inventate. Răspunsurile la întrebări trebuie să se bazeze numai pe transcriere.

[Formate de răspuns](dictionaries.md#response-formats)

## Substituenți {#placeholders}

Un element al promptului înlocuit cu datele conversației.

| Substituent | Semnificație |
| --- | --- |
| `{{transcript}}` | Transcriere, o replică pe rând, cu timpi în milisecunde |
| `{{duration}}` | Durata conversației |
| `{{direction}}` | Apel primit sau efectuat |
| `{{party}}` | Numele contactului sau numărul |
| `{{language}}` | Limba răspunsului |
| `{{question}}` | Întrebarea utilizatorului |
| `{{categories}}` | Dicționarul categoriilor |
| `{{tags}}` | Dicționarul etichetelor |
| `{{red_flags}}` | Dicționarul semnalelor de alarmă |
| `{{artifact:summary}}` | Rezumatul generat anterior |
| `{{conversation}}` | Contextul acumulat de asistentul în timp real |
| `{{reply}}` | Ultima replică a interlocutorului; doar pentru asistentul în timp real |

Executați `summary` înainte de `super-summary`, care folosește `{{artifact:summary}}`. Executați `categorise` înainte de evaluarea calității: `sales-quality` necesită `sales`, iar `support-quality` necesită `support`.

[Asistenți incluși](prompter.md#assistant-templates)

## Textele implicite ale prompturilor {#standard-templates}

AI Softphone 1.1.11 include unsprezece prompturi pentru conversații încheiate și patru asistenți în timp real. Mai jos sunt textele incluse pentru această limbă; versiunile lingvistice pot diferi.

### Rezumat (`summary`) {#summary}

**Forma răspunsului:** `plain`.

**Rol (`system`)**

```text
Citiți transcrieri de convorbiri telefonice și scrieți despre ele rezumate scurte și la obiect. Nu ghiciți niciodată ce nu s-a spus și nu adăugați niciodată sfaturi.
```

**Sarcină (`body`)**

```text
Rezumați această convorbire telefonică într-un paragraf scurt: despre ce a fost, ce s-a hotărât și ce urmează. A durat {{duration}} și a fost {{direction}}, cu {{party}}.

{{transcript}}
```

### Rezumat într-un rând (`super-summary`) {#super-summary}

**Forma răspunsului:** `plain`.

**Rol (`system`)**

```text
Citiți transcrieri de convorbiri telefonice și reduceți fiecare la o singură expresie. Nu ghiciți niciodată și nu adăugați niciodată sfaturi.
```

**Sarcină (`body`)**

```text
Reduceți această convorbire telefonică la o expresie de cel mult douăsprezece cuvinte — de felul celei care ar sta într-un tabel lângă numele apelantului. Fără punct, fără ghilimele.

{{artifact:summary}}

{{transcript}}
```

### Sarcini (`action-items`) {#action-items}

**Forma răspunsului:** `list`.

**Rol (`system`)**

```text
Citiți transcrieri de convorbiri telefonice și enumerați la ce s-a angajat cineva. Enumerați doar ce s-a spus cu adevărat; nu inventați niciodată o sarcină, un responsabil sau un termen.
```

**Sarcină (`body`)**

```text
Enumerați la ce s-a angajat oricine din această convorbire. Numiți cine trebuie să facă lucrul, acolo unde s-a spus, și până când, acolo unde s-a spus. Dacă nimeni nu s-a angajat la nimic, răspundeți cu o listă goală.

{{transcript}}
```

### Subiecte (`topics`) {#topics}

**Forma răspunsului:** `list`.

**Rol (`system`)**

```text
Citiți transcrieri de convorbiri telefonice și numiți despre ce au fost.
```

**Sarcină (`body`)**

```text
Enumerați lucrurile pe care le-a atins într-adevăr această convorbire, cel mult șase, fiecare în câteva cuvinte. Lăsați responsabilul și termenul goale — aici nu înseamnă nimic.

{{transcript}}
```

### Nume și numere (`entities`) {#entities}

**Forma răspunsului:** `json`.

**Rol (`system`)**

```text
Citiți transcrieri de convorbiri telefonice și scoateți din ele ce a fost numit. Nu ghiciți niciodată o ortografie și nu adăugați niciodată ce nu s-a spus.
```

**Sarcină (`body`)**

```text
Scoateți ce a fost numit în această convorbire, ca JSON exact de această formă:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Fiecare este o listă de șiruri, scrise așa cum au fost rostite. Mai bine lăsați o listă goală decât să ghiciți.

{{transcript}}
```

### Categorie (`categorise`) {#categorise}

**Forma răspunsului:** `labels`.

**Rol (`system`)**

```text
Încadrați convorbirile telefonice într-una dintre categoriile primite. Alegeți din listă și din nimic altceva.
```

**Sarcină (`body`)**

```text
Încadrați această convorbire în exact una dintre aceste categorii. Răspundeți cu codul ei.

{{categories}}
{{transcript}}
```

### Etichete (`tags`) {#tags}

**Forma răspunsului:** `labels`.

**Rol (`system`)**

```text
Etichetați convorbirile telefonice cu etichetele primite. Alegeți din listă și din nimic altceva și mai bine lăsați o etichetă deoparte decât să o forțați.
```

**Sarcină (`body`)**

```text
Care dintre acestea sunt adevărate despre această convorbire? Răspundeți cu codurile lor sau cu o listă goală, dacă niciuna.

{{tags}}
{{transcript}}
```

### Semnale de alarmă (`red-flags`) {#red-flags}

**Forma răspunsului:** `flags`.

**Rol (`system`)**

```text
Citiți transcrieri de convorbiri telefonice și ridicați doar ce vi s-a dat să căutați. Citați cuvintele pe care v-ați bazat de fiecare dată și nu ridicați nimic ce nu puteți cita.
```

**Sarcină (`body`)**

```text
Ridicați-le pe acelea dintre acestea pe care le arată convorbirea. Pentru fiecare, citați cuvintele pe care se sprijină și dați momentul în milisecunde când au fost rostite. Mai bine nu ridicați nimic decât să forțați o definiție.

{{red_flags}}
{{transcript}}
```

### O întrebare despre această convorbire (`qa`) {#qa}

**Forma răspunsului:** `qa`.

**Rol (`system`)**

```text
Răspundeți la întrebări despre o singură convorbire telefonică, din transcrierea ei și din nimic altceva. Acolo unde convorbirea nu spune, spuneți asta pe șleau în loc să ghiciți.
```

**Sarcină (`body`)**

```text
{{question}}

{{transcript}}
```

### Calitatea vânzării (`sales-quality`) {#sales-quality}

**Forma răspunsului:** `rubric`.

**Rol (`system`)**

```text
Apreciați cum a purtat un agent de vânzări o convorbire telefonică. Judecați doar ce arată transcrierea, nu presupuneți niciodată ce a fost înainte sau după ea și sunteți la fel de exigent cu o convorbire care a mers bine ca și cu una care nu a mers.
```

**Sarcină (`body`)**

```text
Judecați partea noastră din această convorbire — operatorul — după aceste criterii și după niciunul altul:
- salut: s-a prezentat pe sine și firma?
- descoperire: a aflat ce voia de fapt clientul?
- obiecții: a răspuns la ce a ridicat clientul, în loc să vorbească pe lângă?
- valoare: a spus ce primește clientul, nu doar cât costă?
- pasul următor: s-a încheiat convorbirea cu ceva anume convenit?

{{transcript}}
```

### Calitatea asistenței (`support-quality`) {#support-quality}

**Forma răspunsului:** `rubric`.

**Rol (`system`)**

```text
Apreciați cum a purtat un agent de asistență o convorbire telefonică. Judecați doar ce arată transcrierea și cântăriți mai mult dacă problema clientului a fost într-adevăr rezolvată decât cât de plăcută a fost discuția.
```

**Sarcină (`body`)**

```text
Judecați partea noastră din această convorbire — operatorul — după aceste criterii și după niciunul altul:
- salut: s-a prezentat și a lămurit cu cine vorbește?
- înțelegere: a stabilit ce era de fapt în neregulă înainte să răspundă?
- rezolvare: s-a rezolvat problema sau s-a dat un pas următor anume?
- ton: a rămas calm și civilizat, mai ales acolo unde clientul nu a rămas?
- încheiere: a verificat că e mulțumit clientul înainte să încheie?

{{transcript}}
```
