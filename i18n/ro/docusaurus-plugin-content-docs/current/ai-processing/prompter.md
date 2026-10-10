---
title: Setările sufleurului
sidebar_label: Sufleur
sidebar_position: 5
description: "Setări → Sufleur: de ce are nevoie sufleurul în direct, comutatorul care îl permite, dimensiunea textului, asistenții și cardurile lor și plafoanele lunare pentru ce poate cheltui."
---

În **Setări → Sufleur** sufleurul în direct este permis, dimensionat și primește asistenții. Sufleurul propriu-zis — fereastra care scrie un apel pe măsură ce este rostit și sugerează ce să răspundeți, precum și repetiția pe o înregistrare — este descris în [Fereastra sufleurului](/interface/prompter).

[Prezentarea generală](/interface/settings-overview) a setărilor arată sufleurul la **Sufleur** în doi pași: **Permite sufleurul** și **Pornește sufleurul**.

## De ce are nevoie {#what-it-needs}
- **Un recunoscător care știe să asculte în timpul unei conversații.** Se adaugă în [Setări → Transcriere](/ai-processing/transcription#live-recognition-for-the-prompter), ca orice alt recunoscător, și are nevoie de o **Adresă pentru sufleur** și de un **Verifică** reușit.
- **Un model de limbaj**, pentru asistenții care sugerează ceva. Este cel setat la asistent sau modelul implicit din [Setări → Prelucrare](/ai-processing/processing#language-models). Subtitrările nu au nevoie de niciun model.
- **Bifa Permite folosirea sufleurului**, în **Setări → Sufleur**.

Odată îndeplinite toate trei, **Sufleur** apare în lista din partea de jos a telefonului, între **Istoric** și **Setări**, și deschide [fereastra sufleurului](/interface/prompter). Partea programului care se ocupă de asta este modulul **Sufleur**, *Ascultă o conversație în desfășurare și sugerează*; poate fi dezactivat în [Module](/application/modules).

## Setări → Sufleur {#settings--prompter}
<Shot name="41_settings_prompter" alt="Setări → Sufleur: comutatorul care permite sufleurul și dimensiunea textului" />

*Recunoașterea vorbirii în timpul unei conversații și sugestii scrise după propriile dumneavoastră instrucțiuni. Ambele se taxează la minut.*

| Setare | Implicit | Ce face |
| --- | --- | --- |
| **Permite folosirea sufleurului** | oprit | Singurul comutator care permite pornirea unui sufleur. Nimic altceva de pe pagină nu are efect cât timp este oprit. |
| **Transcriere și sugestii** | 13 pixeli | Cât de mari sunt desenate cele două coloane ale ferestrei. |
| **Repetă cel mai nou rând deasupra coloanelor** | pornit | Arată cea mai nouă sugestie — sau cel mai nou rând, pentru un asistent care nu sugerează nimic — într-o bandă separată deasupra coloanelor. |
| **Linia repetată** | 20 pixeli | Cât de mare este textul benzii. Apare cât timp banda este pornită. |

:::caution
Vocea celeilalte părți este trimisă unui recunoscător pe măsură ce vorbește, ceea ce nu înseamnă mai puțin decât a o înregistra. Acolo unde [Setări → Înregistrare](/recordings) cere ca ea să fie anunțată întâi, un sufleur pornește abia după ce a fost anunțată.
:::

Sufleurul se citește în timp ce vorbiți, adesea de mai departe decât restul telefonului, așa că cele două dimensiuni le alegeți dumneavoastră: alegeți unele pe care le puteți cuprinde fără să vă aplecați spre ecran. Trageți separatorul de sub bandă, în [fereastra sufleurului](/interface/prompter#the-window), ca s-o măriți.

### Asistenți {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Setări → Sufleur: asistenții și plafoanele lunare" />

Un asistent este ceea ce i se cere unui sufleur să fie. *Fiecare ascultă o conversație în desfășurare și scrie ceva în fereastra sufleurului: cuvintele așa cum sunt spuse, o traducere a lor, sau o sugestie despre ce să spuneți mai departe.* Pe care să-l rulați alegeți în fereastra sufleurului. Programul vine cu patru:

| Asistent | Ce scrie | Întreabă un model |
| --- | --- | --- |
| **Subtitrări** | Cuvintele ambelor părți, pe măsură ce sunt spuse. | nu |
| **Traducere** | Cuvintele celeilalte părți, traduse în limba programului. | da |
| **Obiecții în apel** | Pentru cine vinde la telefon: când clientul ridică o obiecție, obiecția pe un rând și un rând care îi răspunde. | da |
| **Ajutor la interviu** | Pentru cine susține un interviu: răspunsul la întrebarea abia pusă, în câteva rânduri scurte, sau ce să atingeți în următorul răspuns. | da |

**▲** și **▼** schimbă ordinea, care este ordinea listei derulante din [fereastra sufleurului](/interface/prompter#the-window). **Adaugă** creează un asistent al dumneavoastră. **Restabilește valorile implicite** readuce instrucțiunile și regulile așa cum au venit cu programul, aici ca și în [Prelucrare](/ai-processing/processing#defaults); modelele dumneavoastră de limbaj rămân neatinse.

### Cardul unui asistent {#an-assistants-card}
Apăsarea pe un asistent îi deschide cardul. Este același card ca al unei [instrucțiuni](/ai-processing/prompt-studio) din Prelucrare, cu câteva comenzi proprii.

<Shot name="42_prompter_assistant" alt="Cardul asistentului Obiecții în apel: recunoscătorul, când o replică s-a încheiat, rolul și instrucțiunea" />

| Câmp | Ce face |
| --- | --- |
| **Nume** | Numele afișat în listă și în fereastra sufleurului. |
| **Forma răspunsului** și **Trimite și** | Ca la orice instrucțiune: forma răspunsului și indicațiile trimise odată cu el. Asistenții livrați răspund în **Proză**. |
| **Recunoscător** | Ce recunoscător ascultă. Sunt oferiți doar cei care știu să asculte în timp ce cineva vorbește. |
| **Când o replică s-a încheiat** | Cine decide că o replică s-a terminat și i se poate răspunde: **Decide recunoscătorul**, **După o pauză** sau **Numai când cer** — atunci o replică se încheie când apăsați **Sugestie**. Șase dintre recunoscători spun singuri unde se termină o replică, iar patru nu; **Decide recunoscătorul** recurge la o pauză acolo unde nu are răspuns, și de aceea este setarea de lăsat așa. |
| **Recunoaște și partea mea** | O a doua sesiune la același recunoscător, la preț dublu, ca să apară și propriile dumneavoastră cuvinte în transcriere. Intră în ce i se spune modelului și nu sunt niciodată lucrul despre care este întrebat. |
| **Rol — ce este modelul** | Trimis modelului înaintea instrucțiunii, de exemplu *Ajutați o persoană care vinde la telefon…* |
| **Instrucțiunea** | Ce este întrebat modelul la fiecare replică. `{{reply}}` este replica tocmai încheiată, iar `{{conversation}}` tot ce s-a spus înainte. *Lăsați gol și nu i se cere nimic unui model: cuvintele se arată cum sosesc, iar singurul lucru plătit este recunoscătorul.* Exact asta sunt **Subtitrări**. |
| **Răspunde în** | Limba sugestiei: **Orice s-a vorbit**, **Limba acestui program** sau **O singură limbă, întotdeauna**, cu codul ei. |
| **Model** | **Implicit** sau unul dintre [modelele dumneavoastră de limbaj](/ai-processing/processing#language-models). |

### Cheltuieli {#spending}
*Separat de ce pot cheltui regulile pe conversații încheiate. O lună de rezumate nu trebuie să poată amuți un sufleur în mijlocul unei conversații.*

| Câmp | Când este atins |
| --- | --- |
| **Recunoscători, pe lună** | Un sufleur care rulează se oprește la sfârșitul replicii la care se află — niciodată în mijlocul unui cuvânt. |
| **Modele, pe lună** | Sugestiile se opresc, iar subtitrările continuă. |

Gol înseamnă fără plafon. Cât costă un minut de audio în direct este **Preț pe minut** al recunoscătorului, introdus pe cardul lui în [Transcriere](/ai-processing/transcription#the-recognisers-card); fără el, sufleurul spune că suma afișată este o estimare.
