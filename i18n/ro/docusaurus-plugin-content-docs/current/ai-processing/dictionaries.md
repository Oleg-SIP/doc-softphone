---
title: Dicționare
sidebar_position: 4
description: Propriile categorii, etichete și semnale de alarmă — cuvintele după care sunt încadrate conversațiile.
---

**Setări → Dicționare** conține cuvintele în care poate fi încadrată o conversație, cu care poate fi etichetată sau pentru care poate fi semnalată. Aceste liste sunt ceea ce li se arată modelelor și dintre care trebuie să aleagă, astfel încât un răspuns este întotdeauna ceva ce puteți căuta mai târziu.

<Shot name="13_settings_dictionaries" alt="Setări → Dicționare" />

**Arată șterse** afișează intrările pe care le-ați șters.

Fiecare intrare este un nume, un cod scurt cu litere mici și o descriere care îi spune modelului când să o aleagă. Codul este ceea ce se stochează și ceea ce returnează [API-ul REST](../integration/rest-api.md#taxonomy-and-settings), așa că rămâne același când redenumiți intrarea.

## Categorii {#categories}

Despre ce a fost conversația; **se alege una singură pe conversație**. Programul pornește cu patru:

| Nume | Cod | Se folosește pentru |
| --- | --- | --- |
| **Vânzări** | `sales` | Vânzare, ofertare, negociere sau urmărirea unei achiziții — inclusiv un client care întreabă cât costă ceva. |
| **Asistență** | `support` | Ajutor dat cuiva pentru un produs sau un serviciu pe care îl are deja: o defecțiune, o întrebare despre folosire, o plângere despre cum funcționează. |
| **Personal** | `personal` | Deloc de serviciu — o convorbire particulară purtată întâmplător pe această linie. |
| **Altele** | `other` | De serviciu, dar nici vânzare, nici asistență: un furnizor, un coleg, o livrare, un număr greșit. Alegeți asta în loc să ghiciți între celelalte. |

Apăsați **Adaugă** ca să adăugați o categorie proprie.

## Etichete {#tags}

Mărci care *pot fi toate valabile pentru aceeași conversație*. Apăsați **Adaugă** ca să adăugați una. Lista pornește cu intrări precum:

| Nume | Cod | Se folosește pentru |
| --- | --- | --- |
| **Revenire promisă** | `callback` | Cineva din această convorbire a promis că sună înapoi sau a cerut să fie sunat înapoi. |
| **Plângere** | `complaint` | Cealaltă parte și-a arătat nemulțumirea, indiferent dacă s-a rezolvat sau nu. |
| **Escaladat** | `escalation` | Apelul a fost dat altcuiva sau cealaltă parte a cerut asta. |
| **Client VIP** | `vip` | Cealaltă parte a fost tratată drept un client important sau a spus ea însăși că este. |

## Semnale de alarmă {#red-flags}

Lucruri care cer atenție, găsite în conversație împreună cu dovada și momentul — de exemplu *Client furios* sau *Risc de plecare*. Semnalele de alarmă sunt desenate cu roșu în [fereastra Înregistrări](../interface/recordings.md) și fiecare are o gravitate: scăzută, medie sau ridicată.

| Nume | Cod | `severity` | Se folosește pentru |
| --- | --- | --- | --- |
| **Client furios** | `angry-customer` | `high` | Se auzea că cealaltă parte este furioasă, jignește sau amenință că pleacă. |
| **Risc de plecare** | `churn-risk` | `high` | S-a vorbit despre anulare, neprelungire sau trecerea la altcineva, oricât de calm. |
| **Promisiune făcută** | `promise-made` | `medium` | Partea noastră s-a angajat la ceva anume — o dată, un preț, o reparație, o restituire. |
| **Date sensibile** | `sensitive-data` | `high` | S-a citit cu voce tare un număr de card, o parolă, un număr de act sau orice altceva care nu ar trebui să fie într-o înregistrare. |
| **Concurent** | `competitor` | `low` | Cealaltă parte a numit pe altcineva care oferă același lucru sau ne-a comparat cu el. |

## Îndrumări {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Setări → Dicționare: structurile răspunsurilor și instrucțiunile de limbă" />

*Ceea ce se adaugă la fiecare instrucțiune despre forma răspunsului și limba în care să fie scris.* Sunt păstrate aici pentru ca fiecare instrucțiune să poată folosi aceeași formulare, iar dumneavoastră le puteți schimba ca pe orice altă intrare — sau puteți scrie unele proprii, de exemplu *răspunde scurt* sau *nu pomeni niciodată un preț*, și le puteți bifa la **Trimite și** în orice instrucțiune.

| Nume | Cod | Ce îi spune modelului |
| --- | --- | --- |
| **Proză** | `shape-plain` | Răspunde în proză simplă, fără JSON, liste sau titluri. |
| **Elemente** | `shape-list` | Răspunde cu o listă de lucruri de făcut, fiecare cu cine și când. |
| **Etichete** | `shape-labels` | Să răspundă în JSON cu o listă de coduri și cât de sigur este de fiecare, folosind doar coduri din lista primită. |
| **Notă** | `shape-score` | Să răspundă cu o notă, justificarea ei și cuvintele pe care se bazează. |
| **Criterii** | `shape-rubric` | Să răspundă cu o notă generală și o notă pentru fiecare criteriu. |
| **Semnale** | `shape-flags` | Să răspundă cu coduri din listă, fiecare cu o gravitate. |
| **Răspuns** | `shape-qa` | Să răspundă cu răspunsul sau să spună deschis că din conversație nu reiese, plus cuvintele pe care se sprijină răspunsul. |
| **JSON** | `shape-json` | Să răspundă doar cu JSON, în structura cerută mai sus. |
| **Cum s-a vorbit** | `language-as-spoken` | Să scrie în limba în care a avut loc conversația. |
| **Cum s-a vorbit, numit** | `language-as-spoken-named` | La fel, numind limba. |
| **O limbă anume** | `language-named` | Să scrie în limba pe care o numiți. |

**Adaugă**, în partea de sus a listei, adaugă o intrare.

## Valori implicite {#defaults}

**Restabilește valorile implicite** readuce fiecare dicționar la forma cu care a venit odată cu programul, în limba actuală a interfeței. Încadrarea conversațiilor deja prelucrate rămâne neatinsă.

## Formate de răspuns {#response-formats}

Blocurile reproduc instrucțiunile incluse. Descriu formatele răspunsurilor; alternativele sunt o notație, nu exemple JSON executabile.

### Proză (`shape-plain`) {#shape-plain}

```text
Răspundeți în proză simplă. Nu folosiți JSON, liste sau titluri.
```

### Elemente (`shape-list`) {#shape-list}

```text
Răspundeți doar cu JSON, exact de această formă:
{"items": [{"text": "ce este de făcut", "owner": "cine, sau gol", "due": "când, sau gol"}]}
Folosiți o listă goală când nu este nimic de enumerat. Nu scrieți nimic în afara JSON-ului.
```

### Etichete (`shape-labels`) {#shape-labels}

```text
Răspundeți doar cu JSON, exact de această formă:
{"labels": [{"code": "un cod din lista primită", "confidence": 0.0}]}
Folosiți doar coduri din listă. Folosiți o listă goală când niciunul nu se
potrivește. Nu inventați un cod și nu scrieți nimic în afara JSON-ului.
```

### Notă (`shape-score`) {#shape-score}

```text
Răspundeți doar cu JSON, exact de această formă:
{"score": 3, "rationale": "de ce acest număr și nu unul mai mare",
 "evidence": [{"at_ms": 0, "quote": "cuvintele pe care v-ați bazat"}]}
Nota este un număr întreg de la 1 la 5. Nu scrieți nimic în afara JSON-ului.
```

### Criterii (`shape-rubric`) {#shape-rubric}

```text
Răspundeți doar cu JSON, exact de această formă:
{"overall": 3, "rationale": "de ce acest număr și nu unul mai mare",
 "criteria": [{"name": "criteriul așa cum v-a fost dat",
               "verdict": "pass" sau "weak" sau "fail" sau "n/a",
               "note": "o propoziție"}]}
Judecați fiecare criteriu primit și niciunul altul. Nota generală este un număr
întreg de la 1 la 5. Nu scrieți nimic în afara JSON-ului.
```

### Semnale (`shape-flags`) {#shape-flags}

```text
Răspundeți doar cu JSON, exact de această formă:
{"flags": [{"code": "un cod din lista primită",
            "severity": "low" sau "medium" sau "high",
            "evidence": "cuvintele pe care v-ați bazat",
            "at_ms": 0}]}
Folosiți doar coduri din listă și ridicați fiecare cel mult o dată. Folosiți o
listă goală când nimic nu se potrivește. Nu scrieți nimic în afara JSON-ului.
```

### Răspuns (`shape-qa`) {#shape-qa}

```text
Răspundeți doar cu JSON, exact de această formă:
{"answer": "răspunsul dumneavoastră sau, pe șleau, că discuția nu spune",
 "citations": [{"at_ms": 0, "quote": "cuvintele pe care se sprijină răspunsul"}]}
Nu răspundeți din nimic altceva decât din discuție. Nu scrieți nimic în afara JSON-ului.
```

### JSON (`shape-json`) {#shape-json}

```text
Răspundeți doar cu JSON, în forma cerută mai sus. Nu scrieți nimic în afara JSON-ului.
```

### Cum s-a vorbit (`language-as-spoken`) {#language-as-spoken}

```text
Scrieți răspunsul în aceeași limbă în care a fost discuția.
```

### Cum s-a vorbit, numit (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Scrieți răspunsul în aceeași limbă în care a fost discuția, adică {language}.
```

### O limbă anume (`language-named`) {#language-named}

```text
Scrieți răspunsul în această limbă: {language}.
```
