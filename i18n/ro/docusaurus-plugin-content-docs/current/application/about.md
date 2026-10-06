---
title: Despre
sidebar_position: 2
description: Versiunea, actualizările, țara dumneavoastră, licența, conținutul raportului de utilizare, formularul de reacții și componentele pe care este construit programul.
---

**Setări → Despre** conține tot ce ține de programul însuși.

<Shot name="20_settings_about" alt="Setări → Despre" />

## Versiune și țară {#version-and-country}

În partea de sus se află numele, **Versiunea** (în imagine 1.0.0) și un link către site, [ai-softphone.com](https://ai-softphone.com/).

**Țară** îi spune programului unde vă aflați. Ajută la alegerea celui mai bun server de actualizări și deschide calea către serviciile de limbă și de vorbire găzduite în țara dumneavoastră. **Detectează automat** o completează.

## Actualizări {#updates}

Fila spune dacă aveți cea mai nouă versiune și când s-a verificat ultima dată. **Caută actualizări** verifică acum.

**Caută actualizări automat**, pornit implicit, verifică o dată pe zi și la scurt timp după pornirea telefonului. Cere unui server un singur fișier mic și nu se descarcă și nu se instalează nimic fără acordul dumneavoastră.

## Licență {#licence}

Programul este software liber, sub licența GPL-2.0-or-later. Vine fără nicio garanție și îl puteți redistribui în condițiile acestei licențe; textul complet este livrat în fișierul numit `LICENSE`.

## Telemetrie {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Setări → Despre: ce conține raportul de utilizare" />

Programul trimite un mic raport de utilizare pe zi. Înainte de primul vi se arată ce conține, iar fila îl enumeră:

| | Ce se trimite |
| --- | --- |
| **Trimis întotdeauna** | Faptul că aplicația a fost pornită, versiunea ei și limba interfeței; versiunea sistemului de operare, setările regionale, țara și fusul orar. |
| **Trimis în plus, în modul Extins** | Contoarele apelurilor și ale conversațiilor captate; producătorul și versiunea softswitch-ului conectat, niciodată adresa lui; câți pași din [Prezentarea generală](/interface/settings-overview) sunt făcuți și dispunerea aleasă. |
| **Nu se trimite niciodată, în niciun mod** | Numerele pe care le-ați format sau de la care ați fost sunat; conturile, parolele sau orice din depozitul de chei; contactele, conversațiile, transcrierile sau înregistrările; orice ați scris și orice date private de pe calculator. |

Fiecare instalare își creează un identificator aleatoriu, pentru ca rapoartele aceleiași copii a programului să poată fi recunoscute ca provenind de la aceeași sursă. Nu este derivat din nimic legat de dumneavoastră sau de calculatorul dumneavoastră și nu identifică pe nimeni — dar, fiindcă este permanent, rapoartele care îl poartă pot fi legate între ele. De aceea, ele sunt pseudonime, nu anonime.

Raportul de bază are ca temei interesul legitim: a ști ce versiuni sunt în uz este ceea ce permite unei remedieri să ajungă la cei care au nevoie de ea. Tot ce adaugă raportul extins există pentru că l-ați ales, iar alegerea o puteți schimba aici oricând.

### Raportare {#reporting}

| Opțiune | |
| --- | --- |
| **Extins** | Raportul de bază plus ce enumeră *Trimis în plus*. Selectat în imagine. |
| **De bază** | Doar ce este *Trimis întotdeauna*. |
| **Oprit** | Niciun raport. Disponibil doar în ediția Enterprise; în rest, opțiunea este gri. |

## Reacții {#feedback}

<Shot name="20c_settings_about_bottom" alt="Setări → Despre: formularul de reacții și componentele pe care este construit programul" />

Un formular prin care le scrieți dezvoltatorilor fără să părăsiți programul.

| Câmp | |
| --- | --- |
| **Subiect** și **Mesaj** | Ce doriți să spuneți. |
| **Numele dumneavoastră** și **Adresă pentru răspuns** | Ambele sunt opționale. Fără o adresă nu există nicio cale de a vă răspunde. |
| **Atașează jurnalul** | Adaugă finalul jurnalului, aproximativ 512 kB. Consultați [Diagnostic](/troubleshooting/diagnostics). |

**Trimite** rămâne gri până când există ceva de trimis.

## Construit cu {#built-with}

Componentele pe care este construit programul, fiecare cu licența sa: Qt 6 (GPL-2.0 sau GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (domeniu public), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) și clientul PulseAudio (LGPL-2.1-or-later). Fiecare este folosită sub licența menționată alături; acolo unde o componentă oferă mai multe, cea numită este cea aleasă.
