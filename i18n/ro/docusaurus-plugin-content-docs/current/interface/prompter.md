---
title: Fereastra sufleurului
sidebar_position: 3
description: "Fereastra sufleurului în direct: cuvintele unui apel în clipa în care sunt rostite și sugestii despre ce să spuneți mai departe, butoanele și coloanele ei, repetiția pe o înregistrare și cât costă."
---

**Sufleurul** ascultă o conversație în timp ce are loc. Într-o fereastră proprie scrie ce spune fiecare parte, în clipa în care se spune, și — atunci când asistentul ales întreabă un model — o sugestie despre ce să spuneți mai departe. Merită ținut deschis în timpul unui apel de vânzare, al unui interviu sau al unei conversații dificile, iar cu alt asistent aceeași fereastră arată o traducere continuă a celeilalte părți sau pur și simplu subtitrări.

<Shot name="46_prompter_running" alt="Sufleurul repetând un apel de vânzare: transcrierea în stânga, sugestiile în dreapta, cea mai nouă repetată mare deasupra lor" />

În imagine, asistentul **Obiecții în apel** ascultă un apel de vânzare. Coloana din stânga este ce s-a spus, fiecare rând cu ora și partea sa; cea din dreapta este ce a sugerat modelul la fiecare replică a clientului; cea mai nouă sugestie este repetată cu litere mari deasupra ambelor.

**Sufleur** apare în lista din partea de jos a telefonului, între **Istoric** și **Setări**, de îndată ce sunt îndeplinite trei lucruri: sufleurul este permis, există un recunoscător care știe să asculte în timpul unei conversații și — pentru asistenții care sugerează ceva — un model de limbaj. Toate acestea se stabilesc în [Setări → Sufleur](/ai-processing/prompter), unde se află și dimensiunea textului și asistenții înșiși.

## Fereastra {#the-window}
<Shot name="44_prompter_window" alt="Fereastra sufleurului cu asistentul Obiecții în apel ales, înainte de pornire" />

Sus se află lista derulantă **Asistent** și, în dreapta ei, butoanele:

| Buton | Ce face |
| --- | --- |
| **Pornește** / **Oprește** (triunghi / pătrat) | *Începe să asculți acest apel* — sau oprește-te: *Ce s-a spus rămâne pe ecran*. O pornire apăsată înainte ca apelul să fie preluat îl așteaptă, iar butonul o anulează atunci. |
| **Sugestie** (scântei) | *Încheie replica aici și sugerează ce să spui*, fără a aștepta o pauză. Pentru un asistent care nu întreabă niciun model, butonul se numește **Încheie replica**: doar închide replica, pentru ca următoarea să înceapă curat. Este estompat cât timp sufleurul nu rulează. |
| **Golește** (coș) | După o întrebare, uită ce este pe ecran. *Dispar ambele coloane și, odată cu ele, conversația din care ar fi fost construită următoarea sugestie.* Oprirea și repornirea nu golesc nimic: o conversație oprită și repornită este de obicei aceeași conversație. |
| **Exportați…** (dischetă) | Scrie ambele coloane, cu orele lor, într-un fișier: text (`.txt`) sau foaie de calcul (`.csv`), cu numele pe care îl dați fișierului. |
| **Repetiție…** (bibliotecă) | [Încearcă un asistent pe o înregistrare](#rehearsing-on-a-recording) în loc de un apel. |

Lista derulantă arată [asistenții](/ai-processing/prompter#assistants) în ordinea stabilită în **Setări → Sufleur**. Nu poate fi schimbată cât timp un sufleur rulează, dar rămâne vizibilă, ca să vedeți ce asistent lucrează. Cât timp ascultă, pe cardul apelului scrie **Ascultăm**.

Sub butoane se află banda cu cel mai nou rând, iar sub ea cele două coloane:

- **Transcriere** — fiecare rând cu ora și partea sa;
- **Sugestii** — fiecare sugestie cu ora replicii la care răspunde. Pentru un asistent care nu întreabă niciun model această coloană lipsește, iar transcrierea ocupă toată lățimea.

Când fereastra este îngustă, cele două coloane stau una sub alta. O coloană urmărește ce sosește până când derulați înapoi în ea și urmărește din nou când reveniți la capăt. Apăsați orice rând ca să-l păstrați în bandă; apăsați pe cel mai nou sau pe pioneza din bandă ca să urmăriți din nou. Butonul din dreapta al mouse-ului copiază un rând, o sugestie, toată transcrierea sau toate sugestiile. Trageți separatorul de sub bandă ca s-o măriți; dimensiunile textului se setează în [Setări → Sufleur](/ai-processing/prompter#settings--prompter).

## Repetiție pe o înregistrare {#rehearsing-on-a-recording}
Un asistent poate fi încercat fără nimeni la telefon. **Repetiție…** listează conversațiile din [bibliotecă](/interface/recordings), cele mai noi primele, și **Un fișier din acest calculator…** pentru un fișier `.mp3` sau `.wav`.

<Shot name="45_prompter_rehearse" alt="Repetiție…: conversațiile din bibliotecă și un fișier din acest calculator" />

Înregistrarea aleasă apare într-un player sub butoane: redare și pauză, ambele canale desenate ca formă de undă pe care se poate face clic, și timpul. Apăsați **Pornește**: înregistrarea este redată în sufleur pe același drum ca un apel, în ritmul ei — redarea mai rapidă nu este oferită intenționat, pentru că un sufleur hrănit de o dată și jumătate mai repede ar face pauze, ar răspunde și ar taxa o conversație pe care n-a purtat-o nimeni. Crucea din dreapta este **Încheie repetiția**, înapoi la ascultarea apelurilor.

O înregistrare pe un singur canal, cum ar fi un fișier importat, se aude ca o singură cameră: *sufleurul aude totul ca interlocutorul*.

## Cât costă și unde ajung cuvintele {#what-it-costs-and-where-the-words-go}
- Recunoscătorul se taxează pe minutul de audio în direct, iar **Recunoaște și partea mea** îl dublează. Un model se taxează pentru fiecare sugestie. Ambele se socotesc în [plafoanele lunare](/ai-processing/prompter#spending) ale sufleurului, nu în limitele Prelucrării.
- Vocea celeilalte părți părăsește calculatorul pe măsură ce vorbește, spre recunoscătorul pe care l-ați ales. Un recunoscător pe propria dumneavoastră mașină — **Vosk**, **WhisperLive** sau **NVIDIA Riva** — o păstrează în casă.
- Ce arată sufleurul nu este o înregistrare. Ca s-o păstrați, apăsați **Exportați…**; ca să aveți conversația însăși, [înregistrați apelul](/recordings) în plus.

## Când nu pornește {#when-it-does-not-start}
Fereastra spune ce lipsește pe un rând sub butoane.

| Fereastra spune | Ce faceți |
| --- | --- |
| *Sufleurul este oprit. Setări → Sufleur.* | Bifați **Permite folosirea sufleurului**. |
| *Niciun recunoscător de aici nu știe să asculte în timp ce cineva vorbește. Setări → Transcriere.* | Adăugați un recunoscător cu o **Adresă pentru sufleur** și apăsați **Verifică**. |
| *Nu este nimic de pornit. Setări → Sufleur, și adăugați un asistent.* | Toți asistenții au fost șterși sau dezactivați: adăugați unul sau apăsați **Restabilește valorile implicite**. |
| *Cealaltă parte trebuie anunțată întâi. Începeți să înregistrați această conversație sau schimbați ce spune Setări → Înregistrare despre consimțământ.* | Porniți înregistrarea, care redă anunțul, sau schimbați setarea de consimțământ. |
| *Recunoscătorul nu a început să asculte. Verificați-i adresa în direct și modelul în Setări → Transcriere.* | Adresa pentru sufleur, modelul sau cheia sunt greșite. **Verifică** pe cardul recunoscătorului spune care. |
| *Suma lunară pentru recunoscători s-a epuizat.* | Măriți **Recunoscători, pe lună** sau așteptați luna următoare. |
| *Suma lunară pentru modele s-a epuizat. Cuvintele continuă; sufleurul s-a oprit.* | Măriți **Modele, pe lună**. |
