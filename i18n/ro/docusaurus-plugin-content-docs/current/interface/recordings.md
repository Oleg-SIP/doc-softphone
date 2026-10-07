---
title: Fereastra Înregistrări
sidebar_position: 2
description: Biblioteca de conversații — filtrați, redați, citiți transcrierea și prelucrarea.
---

**Înregistrări** este locul în care se află fiecare conversație, indiferent cum a sosit: un apel, o ședință captată din altă aplicație sau un fișier importat. Fiecare apare în listă cu prelucrarea deja făcută.

<Shot name="01_recordings" alt="Fila Înregistrări: lista conversațiilor" />

## Găsirea unei conversații {#finding-a-conversation}

Bara din partea de sus are patru filtre, un câmp de căutare și un meniu:

| Control | Restrânge lista după |
| --- | --- |
| **Fel** | modul în care a sosit conversația |
| **Perioadă** | dată |
| **Categorie** | categoria în care a fost încadrată — consultați [Dicționare](../ai-processing/dictionaries.md) |
| **Marcaj** | marcajele pe care le poartă |
| **Caută** | ce s-a spus în ea — căutarea parcurge transcrierile a tot ce ați înregistrat |

Butonul **⋮** din dreapta barei deschide mai multe acțiuni pentru listă: **Importă din fișiere**, **Exportă în CSV** și **Deschide într-un navigator**.

## Lista {#the-list}

Fiecare rând arată:

- o pictogramă pentru felul conversației: un receptor pentru un apel, o fereastră pentru o ședință din altă aplicație;
- un titlu — numele celeilalte părți, numărul sau **Altă aplicație** pentru o ședință captată — iar sub el data și rezumatul într-un rând;
- în dreapta, categoria cu nota ei (un număr, de exemplu *Asistență · 2*), apoi etichetele și, la final, durata.

Etichetele desenate cu roșu sunt **semnale de alarmă** (în imagine *Client furios* și *Risc de plecare*); celelalte sunt etichete obișnuite (*Plângere*, *Revenire promisă*). O conversație fără rezumat și fără categorie nu a fost încă prelucrată — primul rând din imagine.

## Playerul {#the-player}

Selectați un rând pentru a deschide playerul sub listă.

<Shot name="02_recording_details" alt="O înregistrare selectată: playerul și transcrierea sub listă" />

- Cele două forme de undă sunt cele două canale ale înregistrării, câte unul pentru fiecare parte a conversației. Bara de sub ele derulează o înregistrare lungă.
- **▶** redă și pune pauză; timpii din stânga sunt poziția și durata totală.
- **1×** schimbă viteza; **Amândoi** alege ce canal auziți.
- Butonul cu disc salvează sunetul, **×** închide playerul.

## Transcrierea și prelucrarea {#the-transcript-and-the-write-up}

Sub player se află transcrierea, cu câte un rând pentru fiecare replică, momentul în care a fost spusă și numele vorbitorului (**Dumneavoastră**, numele celeilalte părți sau, pentru o ședință captată, **Altă aplicație**). Faceți clic pe un rând ca să auziți acel moment; rândul aflat sub cursorul de redare este evidențiat, iar cuvântul rostit este marcat în interiorul lui.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Transcrierea alături de sunet" />

Lista derulantă de deasupra transcrierii alege ce se afișează — transcrierea făcută de unul dintre [recunoscătoarele](../ai-processing/transcription.md) dumneavoastră (o stea marchează transcrierea principală a înregistrării) sau o prelucrare, cum ar fi **Acțiuni**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Acțiunile rămase în urma conversației" />

Cele patru pictograme din dreapta listei derulante:

| Pictogramă | Ce face |
| --- | --- |
| Scântei | Cere modelului să scrie acum elementul selectat. |
| Două foi | Îl copiază. |
| Disc | Îl salvează într-un fișier. |
| Coș | Îl șterge. |

Puteți exporta o transcriere ca text simplu sau ca subtitrări.

Prelucrarea este făcută de [instrucțiunile](/ai-processing/prompt-studio) și modelele pe care le configurați în [Prelucrare](../ai-processing/processing.md), prin [reguli](../ai-processing/processing.md#rules) care rulează de la sine sau atunci când cereți. Cât timp se păstrează înregistrările se stabilește în [Înregistrări](../recordings.md#retention).

## O înregistrare pe care o aveți deja {#a-recording-you-already-have}

O înregistrare făcută în altă parte — pe un telefon mobil, un reportofon sau în alt sistem — poate fi adăugată cu **⋮ → Importă din fișiere**. Este tratată exact ca un apel: transcrisă, prelucrată și găsită prin aceeași căutare.

## Ștergerea unei înregistrări {#deleting-a-recording}

Când o înregistrare este ștearsă, tot ce s-a făcut pe baza ei dispare odată cu ea: transcrierea și prelucrarea.
