---
title: Personal Prompt Studio
sidebar_position: 3
description: Instrucțiunile care vă prelucrează conversațiile, regulile care le rulează și cum le faceți ale dumneavoastră.
---

**Personal Prompt Studio** este partea din AI Softphone care vă prelucrează conversațiile în felul dumneavoastră. Prelucrarea este făcută de instrucțiuni: programul vine cu unsprezece, gata de folosit de îndată ce sunt conectate transcrierea și un model de limbă, iar dumneavoastră le puteți schimba în limbaj obișnuit, le puteți duplica și puteți adăuga altele proprii. Ele apar în lista **Instrucțiuni** din [Setări → Prelucrare](processing.md#prompts).

LLM-ul dumneavoastră, cheia dumneavoastră, controlul dumneavoastră: conectați modelul preferat cu propria cheie, printr-un serviciu suportat sau un API compatibil — sau un model instalat în cadrul organizației dumneavoastră. Cu [transcrierea](transcription.md#your-own-models) tot pe propriul hardware, atât sunetul, cât și transcrierile rămân în mediul dumneavoastră.

<Shot name="12b_settings_processing_prompts" alt="Lista instrucțiunilor în Setări → Prelucrare" />

## Instrucțiunile care vin cu programul {#the-prompts-that-come-with-the-program}

A doua coloană este ceea ce arată lista sub numele instrucțiunii: ce scrie și în ce formă.

| Instrucțiune | Formă | Ce scrie |
| --- | --- | --- |
| **Rezumat** | Proză | Ideile principale, deciziile și pașii următori, într-un paragraf scurt. |
| **Rezumat într-un rând** | Proză | Un titlu scurt după care să recunoașteți conversația într-o listă. |
| **Sarcini** | Elemente | Cine a convenit să facă ce și până când, cu cuvintele pe care le-a spus. |
| **Subiecte** | Elemente | Temele abordate, în câteva cuvinte. |
| **Nume și numere** | JSON | Persoane, companii, date, sume și referințe. |
| **Categorie** | Etichete | Încadrează conversația într-una dintre [categoriile](dictionaries.md) dumneavoastră. |
| **Etichete** | Etichete | Îi pune [etichetele](dictionaries.md) dumneavoastră, ca să poată fi găsită mai târziu. |
| **Semnale de alarmă** | Semnale | Probleme, cu dovada și momentul din conversație. |
| **O întrebare despre această convorbire** | Răspuns | Răspunde la o întrebare pe care o puneți despre o conversație, pe baza transcrierii ei. |
| **Calitatea vânzării** | Criterii | Evaluează conversația după criterii de vânzare pe care le puteți edita. |
| **Calitatea asistenței** | Criterii | Apreciază cât de bine a fost înțeleasă și rezolvată problema. |

Formele sunt structuri fixe ale unui răspuns, ceea ce îi permite programului să-l păstreze și să-l caute mai târziu: **Etichete** sunt coduri dintr-una dintre listele dumneavoastră, **Semnale** sunt coduri cu o gravitate, **Criterii** este o notă cu o justificare și o notă pentru fiecare criteriu, **Răspuns** este un răspuns cu cuvintele pe care se sprijină. Instrucțiunile care îi spun unui model structura sunt păstrate în [Dicționare](dictionaries.md#answer-shapes-and-language).

Apelurile efectuate în AI Softphone, ședințele [captate](/capture/) de pe calculator și înregistrările importate trec toate prin aceleași instrucțiuni după ce au o transcriere.

Sarcinile consemnează ce s-a convenit — nu trimit mesaje, nu programează vizite și nu creează tichete în locul dumneavoastră.

## Să le faceți ale dumneavoastră {#making-it-yours}

- Schimbați ce cere o instrucțiune, în limbaj obișnuit: ce caută, formatul răspunsului și limba în care răspunde.
- Duplicați o instrucțiune ca să încercați o variantă.
- Alegeți modelul pentru fiecare instrucțiune — pe propriul calculator sau în cloud.
- Stabiliți ordinea în care rulează instrucțiunile, porniți-le și opriți-le și faceți-le condiționate — acest lucru se face cu [regulile](processing.md#rules): de exemplu, o evaluare a vânzării rulează doar pe apelurile încadrate ca **Vânzări**.
- Păstrați propriile categorii, etichete și semnale de alarmă în [Dicționare](dictionaries.md).
- Plafonați costul cu [limitele lunare](processing.md#limits).

Instrucțiunile și regulile originale pot fi restabilite cu **Restabilește valorile implicite**, în secțiunea **Valori implicite** din [Setări → Prelucrare](processing.md#defaults).
