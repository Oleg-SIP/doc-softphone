---
title: Obrada
sidebar_position: 2
description: Automatska obrada razgovora, mesečne granice potrošnje, jezički modeli, uputstva i pravila koja ih pokreću.
---

**Podešavanja → Obrada** odlučuje šta se dešava sa razgovorom nakon što je snimljen, koji model obavlja posao i koliko to sme da košta.

<Shot name="12_settings_processing" alt="Podešavanja → Obrada" />

## Obrađuj razgovore samostalno {#process-conversations-automatically}

- **Isključen:** ništa se ne dešava dok to ne zatražite u [prozoru Snimci](../interface/recordings.md).
- **Uključen:** [pravila](#rules) u nastavku izvode se sama. Upravo to pretvara razgovor u sažetak, kategoriju i sve ostalo a da niko ništa ne pritisne. Model u oblaku naplaćuje svaki od tih koraka.

Ispod polja za potvrdu program prikazuje koliko je potrošeno ovog meseca i na koliko zahteva, na primer *Ovog meseca: 40.492 žetona, kroz 84 zahteva, bez naplate.*

## Granice {#limits}

| Polje | Značenje |
| --- | --- |
| **Novčana granica, mesečno** | Najviše koliko modeli smeju da koštaju u mesecu. |
| **Granica žetona, mesečno** | Najviše žetona koje smeju da potroše u mesecu. |

Granice su dve jer mesec može da se broji u dve stvari. Obe su prazne dok ih ne popunite. Kada se dostigne bilo koja, automatska pravila staju do kraja meseca. **Ono što zatražite sami nikada se ne zaustavlja.**

## Jezički modeli {#language-models}

Modeli koji čitaju prepis i pišu o njemu. Pritisnite **Dodaj** da dodate jedan. Svaki je naveden sa svojim nazivom, a ispod njega sa identifikatorom modela i adresom svoje usluge, na primer `qwen3-32b · http://llm.local:8000/v1`. Onaj označen kao **Podrazumevano** koristi se podrazumevano. Dugme u obrascu modela proverava da li usluga zaista odgovara pre nego što se na nju oslonite.

- Model **na sopstvenom računaru** drži svaki razgovor u zgradi i ne košta ništa.
- Model u oblaku — OpenAI, Claude, Mistral, DeepSeek, Groq i drugi — naplaćuje se po korišćenju. Program prikazuje cenu svakog poziva u žetonima i u novcu.

## Uputstva {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Podešavanja → Obrada: uputstva" />

*Ono što se traži od modela.* Svako uputstvo došlo je sa programom i svako je vaše da ga izmenite — i da ga vratite. Svako je navedeno sa svojim nazivom, a ispod njega sa onim što piše i u kom obliku. Oblik — **Odgovor**, **Stavke**, **Oznake**, **JSON**, **Proza**, **Znaci** ili **Merila** — odlučuje kako se odgovor čuva i prikazuje. Uputstva su opisana u [Personal Prompt Studio](prompt-studio.md). **Dodaj** pravi sopstveno uputstvo.

## Pravila {#rules}

<Shot name="12c_settings_processing_rules" alt="Podešavanja → Obrada: pravila" />

*Ono što radi samo, ovim redom. Svako se okida najviše jednom po razgovoru.* Pravilo je red sa poljem za potvrdu koje ga uključuje ili isključuje, njegovim nazivom, a ispod njega sa onim što radi. **▲** i **▼** menjaju redosled. Program dolazi sa osam:

| Pravilo | Šta radi | Kada |
| --- | --- | --- |
| **Prepiši svaki razgovor** | Prepisuje ga. | uvek |
| **Sažmi ga** | Pita model: **Sažetak**. | uvek |
| **Svedi ga na jedan red** | Pita model: **Sažetak u jednom redu**. | uvek |
| **Svrstaj ga u kategoriju** | Pita model: **Kategorija**. | uvek |
| **Označi ga** | Pita model: **Oznake**. | uvek |
| **Podigni ono što vredi pogledati** | Pita model: **Upozorenja**. | uvek |
| **Oceni ga, ako je bila prodaja** | Pita model: **Kvalitet prodaje**. | samo ako je kategorija **Prodaja** |
| **Oceni ga, ako je bila podrška** | Pita model: **Kvalitet podrške**. | samo ako je kategorija **Podrška** |

Redosled je važan: poslednja dva pravila trebaju kategoriju koju je postavilo pravilo pre njih. **Dodaj** pravi sopstveno pravilo.

## Podrazumevane vrednosti {#defaults}

**Vrati podrazumevano** vraća uputstva i pravila kakva su došla sa programom, na trenutnom jeziku sučelja. Vaši jezički modeli ostaju netaknuti.

Uputstva i pravila koja su došla sa programom ostaju na jeziku na kom su bila kada promenite jezik sučelja; **Vrati podrazumevano** ih prenosi na novi. Svako uputstvo je tada desno označeno kao *izmenjeno*.
