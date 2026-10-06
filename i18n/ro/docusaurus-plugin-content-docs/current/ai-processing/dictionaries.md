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
| **Asistență** | `support` | Ajutorarea cuiva cu un produs sau un serviciu pe care îl are deja: o defecțiune, o întrebare despre utilizare, o plângere despre cum funcționează. |
| **Personal** | `personal` | Deloc despre afaceri — o conversație privată care s-a întâmplat să aibă loc pe această linie. |
| **Altele** | `other` | Despre afaceri, dar nici vânzare, nici asistență: un furnizor, un coleg, o livrare, un număr greșit. Alegeți această categorie în loc să ghiciți între celelalte. |

Apăsați **Adaugă** ca să adăugați o categorie proprie.

## Etichete {#tags}

Mărci care *pot fi toate valabile pentru aceeași conversație*. Apăsați **Adaugă** ca să adăugați una. Lista pornește cu intrări precum:

| Nume | Cod | Se folosește pentru |
| --- | --- | --- |
| **Revenire promisă** | `callback` | Cineva din acest apel a promis să sune înapoi sau a cerut să fie sunat înapoi. |
| **Plângere** | `complaint` | Cealaltă parte și-a exprimat nemulțumirea, indiferent dacă problema a fost rezolvată sau nu. |
| **Escaladat** | `escalation` | Apelul a fost predat altcuiva sau cealaltă parte a cerut acest lucru. |
| **Client VIP** | `vip` | Cealaltă parte a fost tratată ca un client important sau a spus că este unul. |

## Semnale de alarmă {#red-flags}

Lucruri care cer atenție, găsite în conversație împreună cu dovada și momentul — de exemplu *Client furios* sau *Risc de plecare*. Semnalele de alarmă sunt desenate cu roșu în [fereastra Înregistrări](../recordings/recordings-window.md) și fiecare are o gravitate: scăzută, medie sau ridicată.

## Structurile răspunsurilor și limba {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Setări → Dicționare: structurile răspunsurilor și instrucțiunile de limbă" />

Mai jos în filă se află instrucțiunile din care sunt alcătuite instrucțiunile modelelor. Sunt păstrate aici pentru ca fiecare instrucțiune să poată folosi aceeași formulare, iar dumneavoastră le puteți schimba ca pe orice altă intrare.

| Nume | Cod | Ce îi spune modelului |
| --- | --- | --- |
| **Etichete** | `shape-labels` | Să răspundă în JSON cu o listă de coduri și cât de sigur este de fiecare, folosind doar coduri din lista primită. |
| **Notă** | `shape-score` | Să răspundă cu o notă, justificarea ei și cuvintele pe care se bazează. |
| **Criterii** | `shape-rubric` | Să răspundă cu o notă generală și o notă pentru fiecare criteriu. |
| **Semnale** | `shape-flags` | Să răspundă cu coduri din listă, fiecare cu o gravitate. |
| **Răspuns** | `shape-qa` | Să răspundă cu răspunsul sau să spună deschis că din conversație nu reiese, plus cuvintele pe care se sprijină răspunsul. |
| **JSON** | `shape-json` | Să răspundă doar cu JSON, în structura cerută mai sus. |
| **Cum s-a vorbit** | `language-as-spoken` | Să scrie în limba în care a avut loc conversația. |
| **Cum s-a vorbit, numit** | `language-as-spoken-named` | La fel, numind limba. |
| **O limbă anume** | `language-named` | Să scrie în limba pe care o numiți. |

**Adaugă**, la finalul listei, adaugă o intrare.

## Valori implicite {#defaults}

**Restabilește valorile implicite** readuce fiecare dicționar la forma cu care a venit odată cu programul, în limba actuală a interfeței. Încadrarea conversațiilor deja prelucrate rămâne neatinsă.
