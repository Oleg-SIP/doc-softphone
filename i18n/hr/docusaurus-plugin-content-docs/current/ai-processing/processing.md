---
title: Obrada
sidebar_position: 2
description: Automatska obrada razgovora, mjesečne granice potrošnje, jezični modeli, upute i pravila koja ih pokreću.
---

**Postavke → Obrada** odlučuje što se događa s razgovorom nakon što je snimljen, koji model obavlja posao i koliko to smije stajati.

<Shot name="12_settings_processing" alt="Postavke → Obrada" />

## Obrađuj razgovore automatski {#process-conversations-automatically}

- **Isključeno:** ništa se ne događa dok to ne zatražite u [prozoru Snimke](../recordings/recordings-window.md).
- **Uključeno:** [pravila](#rules) u nastavku izvode se sama. Upravo to pretvara razgovor u sažetak, kategoriju i sve ostalo bez da itko išta pritisne. Model u oblaku naplaćuje svaki od tih koraka.

Ispod potvrdnog okvira program prikazuje koliko je potrošeno ovaj mjesec i na koliko zahtjeva, primjerice *Ovaj mjesec: 40.492 tokena, u 84 zahtjeva, bez naplate.*

## Granice {#limits}

| Polje | Značenje |
| --- | --- |
| **Novčana granica, mjesečno** | Najviše koliko modeli smiju stajati u mjesecu. |
| **Granica tokena, mjesečno** | Najviše tokena koje smiju potrošiti u mjesecu. |

Granice su dvije jer se mjesec može brojati u dvije stvari. Obje su prazne dok ih ne ispunite. Kad se dosegne bilo koja, automatska pravila staju do kraja mjeseca. **Ono što zatražite sami nikada se ne zaustavlja.**

## Jezični modeli {#language-models}

Modeli koji čitaju prijepis i pišu o njemu. Pritisnite **Dodaj** da dodate jedan. Svaki je naveden sa svojim nazivom, a ispod njega s identifikatorom modela i adresom svoje usluge, primjerice `qwen3-32b · http://llm.local:8000/v1`. Onaj označen kao **Zadano** koristi se prema zadanim postavkama. Gumb u obrascu modela provjerava odgovara li usluga zaista prije nego što se na nju oslonite.

- Model **na vlastitom računalu** drži svaki razgovor u zgradi i ne košta ništa.
- Model u oblaku — OpenAI, Claude, Mistral, DeepSeek, Groq i drugi — naplaćuje se po korištenju. Program prikazuje cijenu svakog poziva u tokenima i u novcu.

## Upute {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Postavke → Obrada: upute" />

*Ono što se od modela traži.* Svaka je uputa došla s programom i svaka je vaša da je promijenite — i da je vratite. Svaka je navedena sa svojim nazivom, a ispod njega s onim što piše i u kojem obliku. Oblik — **Odgovor**, **Stavke**, **Oznake**, **JSON**, **Proza**, **Signali** ili **Mjerila** — odlučuje kako se odgovor čuva i prikazuje. Upute su opisane u [Personal Prompt Studio](prompt-studio.md). **Dodaj** stvara vlastitu uputu.

## Pravila {#rules}

<Shot name="12c_settings_processing_rules" alt="Postavke → Obrada: pravila" />

*Ono što radi samo, ovim redom. Svako se okida najviše jednom po razgovoru.* Pravilo je redak s potvrdnim okvirom koji ga uključuje ili isključuje, njegovim nazivom, a ispod njega s onim što radi. **▲** i **▼** mijenjaju redoslijed. Program dolazi s osam:

| Pravilo | Što radi | Kada |
| --- | --- | --- |
| **Prepiši svaki razgovor** | Prepisuje ga. | uvijek |
| **Sažmi ga** | Pita model: **Sažetak**. | uvijek |
| **Svedi ga na jedan redak** | Pita model: **Sažetak u jednom retku**. | uvijek |
| **Svrstaj ga u kategoriju** | Pita model: **Kategorija**. | uvijek |
| **Označi ga** | Pita model: **Oznake**. | uvijek |
| **Podigni ono što zaslužuje pogled** | Pita model: **Upozoravajući signali**. | uvijek |
| **Prosudi ga, ako je bila prodaja** | Pita model: **Kvaliteta prodaje**. | samo ako je kategorija **Prodaja** |
| **Prosudi ga, ako je bila podrška** | Pita model: **Kvaliteta podrške**. | samo ako je kategorija **Podrška** |

Redoslijed je važan: zadnja dva pravila trebaju kategoriju koju je postavilo pravilo prije njih. **Dodaj** stvara vlastito pravilo.

## Zadane vrijednosti {#defaults}

**Vrati zadano** vraća upute i pravila kakvi su došli s programom, na trenutnom jeziku sučelja. Vaši jezični modeli ostaju netaknuti.

Upute i pravila koji su došli s programom ostaju na jeziku na kojem su bili kad promijenite jezik sučelja; **Vrati zadano** prenosi ih na novi. Svaka je uputa tada desno označena kao *promijenjeno*.
