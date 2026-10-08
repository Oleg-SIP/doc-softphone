---
title: Fereastra Înregistrări
sidebar_position: 2
description: "\"Biblioteca tuturor conversațiilor — un apel, un fișier importat sau o ședință captată din Zoom, Teams ori Meet: filtre, playerul, transcrierea pe care o puteți reda de la orice rând și prelucrările.\""
---

**Înregistrări** este locul în care se află fiecare conversație, indiferent cum a sosit: un apel făcut sau primit în telefon, un fișier audio importat de dumneavoastră sau o ședință captată din Zoom, Teams, Meet ori din orice altă aplicație. Toate stau într-o singură listă, iar fiecare se deschide la fel: playerul, transcrierea și tot ce a scris modelul de limbă despre ea. Apăsați **Înregistrări** în stânga jos în [fereastra principală](main-window.md) ca să o deschideți.

<Shot name="01_recordings" alt="Fila Înregistrări: o ședință Zoom captată, un fișier importat și apeluri, într-o singură listă" />

## Trei feluri de înregistrări {#three-kinds-of-recording}

Pictograma din stânga rândului arată cum a ajuns conversația aici.

| Pictogramă | Conversația | Numele ei în listă | Cum ajunge aici |
| --- | --- | --- | --- |
| Receptor cu o săgeată | Un apel făcut sau primit în acest telefon. Săgeata arată spre interior pentru un apel primit și spre exterior pentru unul efectuat. | Numele contactului sau numărul | Înregistrată conform setărilor din [Înregistrări](../recordings.md) |
| Săgeată într-o bară | Un fișier importat din altă parte: de pe un telefon mobil, un reportofon sau alt sistem | Numele fișierului | **⋮ → Importă din fișiere**; vedeți [mai jos](#a-recording-you-already-have) |
| Fereastră | O ședință ținută într-o altă aplicație | Numele pe care l-ați dat sau **Altă aplicație** | [Captare](../capture/capture.md) |

În imagine, primele trei rânduri sunt câte unul din fiecare fel: o ședință Zoom, un fișier importat cu un apel la o bancă și un apel primit pe linia **305 Asistență**. Indiferent de sursă, sunt transcrise, prelucrate și căutate la fel.

## Găsirea unei conversații {#finding-a-conversation}

Bara din partea de sus are cinci filtre, un câmp de căutare și un meniu:

| Control | Restrânge lista după |
| --- | --- |
| **Fel** | modul în care a sosit conversația: apeluri primite sau efectuate, **Importate**, **Captate** |
| **Perioadă** | dată: **Astăzi**, **Ieri**, **Ultimele 7 zile** sau **Alege datele…** |
| **Categorie** | categoria în care a fost încadrată — consultați [Dicționare](../ai-processing/dictionaries.md) |
| **Marcaj** | etichetele și semnalele de alarmă pe care le poartă |
| **Recunoscător** | [recunoscătorul](../ai-processing/transcription.md) care a făcut transcrierea |
| **Caută** | ce s-a spus în ea — căutarea parcurge transcrierile a tot ce ați înregistrat |

<Shot name="39_more_menu" alt="Meniul ⋮ al listei: Importă din fișiere, Exportă în CSV, Deschide într-un navigator" />

Butonul **⋮** din dreapta barei deschide mai multe acțiuni pentru listă:

| Element | Ce face |
| --- | --- |
| **Importă din fișiere** | Aduce înregistrările pe care le aveți deja. Vedeți [O înregistrare pe care o aveți deja](#a-recording-you-already-have). |
| **Exportă în CSV** | Salvează lista ca foaie de calcul: când, partea și numărul, direcția, durata, categoria, etichetele, semnalele de alarmă și rezumatul într-un rând al fiecărei conversații. |
| **Deschide într-un navigator** | Deschide lista în navigator, ca pagina pe care [API-ul REST local](../integration/rest-api.md) o servește la `/ui`. |

## Lista {#the-list}

Fiecare rând arată:

- pictograma felului de conversație;
- numele — cealaltă parte, numărul, fișierul sau ședința — iar sub el data și rezumatul într-un rând;
- în dreapta, categoria cu nota ei (un număr, de exemplu *Asistență · 4*), apoi semnalele de alarmă și etichetele și, la final, durata.

Semnalele de alarmă sunt desenate cu roșu (în imagine *Date sensibile*, *Promisiune făcută*, *Client furios*); etichetele sunt obișnuite (*Revenire promisă*). O conversație fără rezumat și fără categorie nu a fost încă prelucrată — rândul **Ana Popa** din imagine.

<Shot name="40_row_actions" alt="Un rând cu cursorul deasupra: butoanele cu pioneză, creion și coș" />

Dacă puneți cursorul pe un rând, apar trei butoane în dreapta lui:

| Buton | Ce face |
| --- | --- |
| Pioneză | **Păstreaz-o pe aceasta**: o înregistrare păstrată nu este ștearsă niciodată de limitele din [Înregistrări](../recordings.md#retention). Apăsați din nou ca să nu o mai păstrați. |
| Creion | **Redenumește**: dă conversației un nume al dumneavoastră. Un apel păstrează alături numele celeilalte părți; o ședință sau un fișier poartă altfel numele aplicației sau al fișierului din care provine. |
| Coș | **Șterge această înregistrare**, după ce întreabă. Sunetul dispare și el, iar acțiunea nu poate fi anulată. |

## Playerul {#the-player}

Selectați un rând pentru a deschide playerul sub listă.

- Cele două forme de undă sunt cele două canale ale înregistrării: cea de sus sunteți dumneavoastră, cea de jos este cealaltă parte. Un fișier importat are de obicei o singură pistă amestecată, așa că ambele linii arată același sunet.
- **▶** redă și pune pauză; timpii din stânga sunt poziția și durata totală. Bara de sub formele de undă derulează o înregistrare lungă.
- **1×** schimbă viteza; **Amândoi** alege ce voce auziți: ambele, doar pe a dumneavoastră (**Eu**) sau doar pe a celeilalte părți (**Ei**).
- Butonul cu disc salvează o copie a înregistrării, **×** închide conversația.

Linia dintre listă și player poate fi trasă în sus, ca transcrierea să aibă mai mult loc, ca în imaginile de mai jos.

## Transcrierea {#the-transcript}

Sub player se află transcrierea: câte un rând pentru fiecare replică, cu momentul în care a fost spusă și cine a spus-o.

<Shot name="26_recording_call" alt="Un apel pe linia 305 Asistență: playerul și transcrierea, cu rândul de la 0:12 evidențiat" />

| Felul înregistrării | Vorbitorii sunt afișați ca |
| --- | --- |
| Un apel | **Dumneavoastră** și numele celeilalte părți sau numărul |
| O ședință captată | **Dumneavoastră** și numele înregistrării, pentru toți ceilalți |
| Un fișier importat | **Toată lumea · speaker 1**, **Toată lumea · speaker 2**… — recunoscătorul deosebește vocile |

**Faceți clic pe un rând ca să ajungeți la acel moment**: playerul se mută acolo, rândul este evidențiat, iar cuvântul rostit este marcat în interiorul lui — în imagine rândul de la **0:12**, cu cuvântul *Da*. Apăsați **▶** ca să ascultați de acolo. Cât timp se redă, evidențierea urmează vorbirea, așa că puteți citi și asculta în același timp și vă puteți întoarce la orice frază.

Timpul din stânga fiecărui rând este și ceea ce indică o prelucrare: un semnal de alarmă, un răspuns sau o citare poartă momentul cuvintelor pe care se sprijină.

## Transcriere sau prelucrare: lista derulantă {#transcript-or-write-up-the-drop-down}

Lista derulantă de deasupra transcrierii alege ce se afișează în locul acela: o transcriere sau una dintre prelucrările făcute de modelul de limbă.

<Shot name="27_writeup_menu" alt="Lista derulantă deschisă: transcrierea OpenAI și prelucrările apelului" />

- Rândurile cu un **microfon** sunt transcrieri, câte una pentru fiecare [recunoscător](../ai-processing/transcription.md) care a transcris înregistrarea. Steaua o marchează pe cea principală. Țineți cursorul peste una ca să vedeți recunoscătorul, modelul și limba.
- Rândurile cu **scântei** sunt prelucrări, făcute de [instrucțiunile](/ai-processing/prompt-studio) din [Prelucrare](../ai-processing/processing.md).

O înregistrare poate avea transcrieri de la mai mulți recunoscători, pentru comparație: ședința Zoom de mai jos a fost transcrisă și de X.ai, și de Deepgram.

<Shot name="36_zoom_menu" alt="O ședință captată cu două transcrieri, Deepgram și X.ai, și prelucrările ei" />

Prelucrările apar sub nume scurte:

| În lista derulantă | Făcută de instrucțiunea | Ce arată |
| --- | --- | --- |
| **Rezumat** | Rezumat | Punctele principale, deciziile și pașii următori într-un paragraf scurt. |
| **Pe scurt** | Rezumat într-un rând | O propoziție; aceeași linie apare sub nume în listă. |
| **Acțiuni** | Sarcini | Cine a convenit să facă ce și până când. |
| **Subiecte** | Subiecte | Subiectele care au apărut. |
| **Menționate** | Nume și numere | Persoane, companii, date, sume și trimiteri. |
| chiar întrebarea | O întrebare despre această convorbire | Răspunsul la o întrebare pusă de dumneavoastră, cu cuvintele pe care se sprijină. |
| **Calitate** | Calitatea vânzării, Calitatea asistenței | O notă generală și un verdict pentru fiecare criteriu. |
| **Semnale de alarmă** | Semnale de alarmă | Ce cere atenție, cu dovada și momentul. |
| **Etichete**, **Categorie** | Etichete, Categorie | Marcajele sub care a fost încadrată conversația. |

## Prelucrările, pe rând {#the-write-ups-one-by-one}

Imaginile de mai jos sunt toate ale aceluiași apel, pe linia **305 Asistență**, în care o clientă întreabă când i se reînnoiesc polițele.

**Rezumat** — conversația în câteva propoziții.

<Shot name="28_summary" alt="Rezumatul apelului" />

**Pe scurt** — un singur rând, suficient de scurt ca să recunoașteți conversația în listă.

<Shot name="29_nutshell" alt="Pe scurt: rezumatul apelului într-un rând" />

**Acțiuni** — fiecare sarcină, cu cine trebuie să o facă și când, în dreapta.

<Shot name="30_actions" alt="Acțiuni: două sarcini pentru Dumneavoastră, una dintre ele pentru mâine dimineață" />

**O întrebare** — puteți întreba conversația orice: întrebarea devine numele elementului, iar sub răspuns se află cuvintele pe care se sprijină, cu momentul lor din înregistrare.

<Shot name="31_question" alt="Răspunsul la o întrebare despre apel, cu două citări la 0:15 și 0:28" />

**Calitate** — nota de la 1 la 5 cu motivul ei, iar fiecare criteriu este marcat **îndeplinit**, **slab** sau **neîndeplinit**, cu o notă.

<Shot name="32_quality" alt="Calitate: nota 4, două criterii îndeplinite și două slabe" />

**Semnale de alarmă** — fiecare semnal, cu cuvintele pe baza cărora a apărut, gravitatea și momentul.

<Shot name="33_red_flags" alt="Semnale de alarmă: Promisiune făcută, scăzută, la 0:28" />

**Subiecte** — subiectele unei ședințe, aici ale ședinței Zoom.

<Shot name="38_topics" alt="Subiectele ședinței Zoom" />

## Butoanele de lângă lista derulantă {#the-buttons-beside-the-drop-down}

| Buton | Ce face |
| --- | --- |
| Scântei | **Transcrie sau întreabă un model…**: deschide un meniu, vedeți mai jos. |
| Două foi | Copiază ce este afișat. |
| Disc | Salvează într-un fișier. O transcriere poate fi salvată ca text simplu sau ca subtitrări. |
| Coș | Șterge ce este afișat. |

<Shot name="34_run_menu" alt="Meniul cu scântei: Transcriere cu patru recunoscători, Prelucrare cu instrucțiunile" />

Meniul cu scântei face lucrul la cerere. La **Transcriere** alegeți un recunoscător ca să transcrieți din nou înregistrarea cu el; la **Prelucrare** alegeți o instrucțiune ca să o rulați acum — **O întrebare despre această convorbire…** cere mai întâi întrebarea. Rezultatul apare în lista derulantă. Așa se prelucrează o conversație atunci când **Prelucrează conversațiile automat** este oprit în [Prelucrare](../ai-processing/processing.md) și așa adăugați încă o prelucrare unei conversații care are deja câteva.

## Trei exemple {#three-examples}

### Un apel făcut în telefon {#a-call-made-in-the-phone}

Apelul de mai sus: vorbitorii sunt **Dumneavoastră** și **Elena Munteanu**, numele contactului, pe două canale separate.

### Un fișier importat {#a-file-you-imported}

<Shot name="35_recording_import" alt="Un fișier importat cu un apel la o bancă: o pistă amestecată și vorbitorii 1 și 2" />

`riverside_bank_support_call` este un mp3 adus cu **⋮ → Importă din fișiere**. Numele lui este numele fișierului, pictograma lui este o săgeată într-o bară, iar cei doi vorbitori au fost deosebiți de recunoscător. Prelucrările au găsit cifrele unui card rostite cu voce tare și au ridicat semnalul **Date sensibile**.

### O ședință captată dintr-o altă aplicație {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="O ședință Zoom captată de pe calculator: transcrierea X.ai cu Dumneavoastră și numele ședinței ca vorbitori" />

**Planificarea lansării din trimestrul IV (Zoom)** a fost captată în timp ce ședința se ținea în Zoom și a primit nume cu creionul. Toți cei din partea îndepărtată a ședinței apar sub numele înregistrării; dumneavoastră sunteți **Dumneavoastră**. Vedeți [Captare](../capture/capture.md).

## O înregistrare pe care o aveți deja {#a-recording-you-already-have}

O înregistrare făcută în altă parte — pe un telefon mobil, un reportofon sau în alt sistem — poate fi adăugată cu **⋮ → Importă din fișiere**. Alegeți unul sau mai multe fișiere mp3 sau wav; telefonul spune câte au fost importate și numește pe cele pe care nu le-a putut citi ca înregistrare. Fiecare este tratat exact ca un apel efectuat: transcris, prelucrat după aceleași [reguli](../ai-processing/processing.md#rules) și găsit prin aceeași căutare.

## Ștergerea unei înregistrări {#deleting-a-recording}

Când o înregistrare este ștearsă, tot ce s-a făcut pe baza ei dispare odată cu ea: transcrierile și prelucrările. Cât timp se păstrează înregistrările de la sine se stabilește în [Înregistrări](../recordings.md#retention).
