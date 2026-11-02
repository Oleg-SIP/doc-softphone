---
title: Prelucrare
sidebar_position: 2
description: Prelucrarea automată a conversațiilor, modelele de limbă, instrucțiunile, regulile care le rulează și limitele lunare de cheltuieli.
---

**Setări → Prelucrare** hotărăște ce se întâmplă cu o conversație după ce a fost înregistrată, ce model face treaba și cât poate costa.

<Shot name="12_settings_processing" alt="Setări → Prelucrare" />

## Prelucrează conversațiile automat {#process-conversations-automatically}

- **Oprit:** nu se întâmplă nimic până nu cereți în [fereastra Înregistrări](../interface/recordings.md).
- **Pornit:** [regulile](#rules) de mai jos rulează de la sine. Acesta este lucrul care transformă o conversație într-un rezumat, o categorie și tot restul fără ca cineva să apese ceva. Un model în cloud taxează fiecare dintre acești pași.

## Modele de limbă {#language-models}

Modelele care citesc o transcriere și scriu despre ea. Apăsați **Adaugă** ca să adăugați unul. Fiecare apare în listă cu numele și, sub el, identificatorul modelului și adresa serviciului, de exemplu `qwen3-32b · http://localhost:8000/v1`. Cel marcat **implicit** — în imagine **QWEN**, un model de pe acest calculator — este cel folosit implicit, de instrucțiuni și de acei asistenți ai [sufleurului](prompter.md) care nu numesc un model propriu. **Verifică** din formularul modelului verifică dacă serviciul răspunde cu adevărat înainte să vă bazați pe el.

- Un model **pe propriul calculator** păstrează fiecare conversație în clădire și nu costă nimic.
- Un model în cloud — OpenAI, Claude, Mistral, DeepSeek, Groq și altele — se plătește per utilizare. Programul arată prețul fiecărei cereri în tokenuri și în bani.

## Instrucțiuni {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Setări → Prelucrare: instrucțiunile" />

*Ceea ce li se cere modelelor.* Fiecare instrucțiune a venit cu programul și fiecare este a dumneavoastră ca să o schimbați — și ca să o puneți la loc. Fiecare apare în listă cu numele și, sub el, ce scrie și în ce formă; **▲** și **▼** schimbă ordinea listei. Forma — **Răspuns**, **Elemente**, **Etichete**, **JSON**, **Proză**, **Semnale** sau **Criterii** — hotărăște cum este păstrat și afișat răspunsul. Instrucțiunile sunt descrise în [Personal Prompt Studio](prompt-studio.md). **Adaugă** creează o instrucțiune proprie.

## Reguli {#rules}

<Shot name="12c_settings_processing_rules" alt="Setări → Prelucrare: regulile" />

*Ceea ce rulează de la sine, în această ordine. Fiecare se declanșează cel mult o dată pe conversație.* O regulă este un rând cu o casetă de bifat care o pornește sau o oprește, numele ei și, dedesubt, ce face. **▲** și **▼** schimbă ordinea. Programul vine cu opt:

| Regulă | `code` | Ce face | `prompt` | Când |
| --- | --- | --- | --- | --- |
| **Transcrie fiecare convorbire** | `transcribe` | O transcrie. | — | întotdeauna |
| **Rezumă-o** | `summary` | Întreabă un model: **Rezumat**. | `summary` | întotdeauna |
| **Redu-o la un rând** | `super-summary` | Întreabă un model: **Rezumat într-un rând**. | `super-summary` | întotdeauna |
| **Încadreaz-o într-o categorie** | `categorise` | Întreabă un model: **Categorie**. | `categorise` | întotdeauna |
| **Etichetează-o** | `tags` | Întreabă un model: **Etichete**. | `tags` | întotdeauna |
| **Ridică ce merită o privire** | `red-flags` | Întreabă un model: **Semnale de alarmă**. | `red-flags` | întotdeauna |
| **Apreciaz-o, dacă a fost o vânzare** | `sales-quality` | Întreabă un model: **Calitatea vânzării**. | `sales-quality` | doar dacă categoria este **Vânzări** |
| **Apreciaz-o, dacă a fost asistență** | `support-quality` | Întreabă un model: **Calitatea asistenței**. | `support-quality` | doar dacă categoria este **Asistență** |

Ordinea contează: ultimele două reguli au nevoie de categoria stabilită de regula dinaintea lor. **Adaugă** creează o regulă proprie.

## Cheltuieli {#spending}

<Shot name="12d_settings_processing_spending" alt="Setări → Prelucrare: cheltuielile lunii și cele două limite" />

La **Cheltuieli** programul arată cât s-a cheltuit luna aceasta și pentru câte cereri — în imagine *Luna aceasta nu s-a prelucrat nimic*, iar de exemplu *Luna aceasta: 40.492 tokenuri, în 84 de cereri, fără costuri* după ce s-a prelucrat ceva.

| Câmp | Semnificație |
| --- | --- |
| **Limită de bani, lunar** | Cel mult cât pot costa modelele într-o lună. |
| **Limită de tokenuri, lunar** | Cel mult câte tokenuri pot folosi într-o lună. |

Există două limite pentru că o lună poate fi socotită în două feluri. Ambele sunt goale până le completați. Când oricare dintre ele este atinsă, regulile automate se opresc până la începutul lunii următoare. **Ceea ce cereți chiar dumneavoastră nu este oprit niciodată.** [Sufleurul](prompter.md#spending) are plafoanele lui, ca o lună de rezumate să nu-l poată reduce la tăcere în mijlocul unei conversații.

## Valori implicite {#defaults}

**Restabilește valorile implicite** readuce instrucțiunile și regulile la forma cu care au venit odată cu programul, în limba actuală a interfeței. Modelele de limbă rămân neatinse.

Instrucțiunile și regulile venite cu programul rămân în limba în care erau atunci când schimbați limba interfeței; **Restabilește valorile implicite** le aduce în limba nouă. Fiecare instrucțiune este apoi marcată *schimbată* în dreapta.

## Executare implicită {#default-execution}

Executați `summary` înainte de `super-summary`, care folosește `{{artifact:summary}}`. Executați `categorise` înainte de evaluarea calității: `sales-quality` necesită `sales`, iar `support-quality` necesită `support`.

Nu există reguli automate implicite pentru `action-items`, `topics`, `entities` sau `qa`. Executați promptul manual sau adăugați o regulă potrivită; introduceți întrebarea la executarea `qa`.

Setul implicit este salvat la prima utilizare. Editarea unui export Markdown nu modifică aplicația: editați fișa promptului sau restabiliți valorile implicite.

[Textele implicite ale prompturilor](prompt-studio.md#standard-templates)
