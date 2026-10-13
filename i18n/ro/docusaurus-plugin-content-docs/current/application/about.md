---
title: Despre
sidebar_position: 2
description: Versiunea, actualizările, țara dumneavoastră, licența, conținutul raportului de utilizare, formularul de reacții și componentele pe care este construit programul.
---

**Setări → Despre** conține tot ce ține de programul însuși.

<Shot name="20_settings_about" alt="Setări → Despre" />

## Versiune și țară {#version-and-country}

În partea de sus se află numele, **Versiunea** (în imagine 1.1.5), un link către site, [ai-softphone.com](https://ai-softphone.com/), și unul către această documentație.

**Țară** îi spune programului unde vă aflați. Ajută la alegerea celui mai bun server de actualizări și deschide calea către serviciile de limbă și de vorbire găzduite în țara dumneavoastră. **Detectează automat** o completează.

## Actualizări {#updates}

Fila spune dacă aveți cea mai nouă versiune și când s-a verificat ultima dată. **Caută actualizări** verifică acum.

**Caută actualizări automat**, pornit implicit, verifică o dată pe zi și la scurt timp după pornirea telefonului. Cere unui server un singur fișier mic și nu se descarcă și nu se instalează nimic fără acordul dumneavoastră.

Când există o versiune nouă, fila spune *Versiunea … este disponibilă. Nu se descarcă nimic până nu cereți.* **Ce s-a schimbat** arată ce aduce nou, iar **Descarcă** o descarcă.

După ce s-a descărcat, **Instalează și repornește** închide telefonul și îl pornește din nou în noua versiune. Telefonul nu face asta niciodată singur, ca să nu întrerupă nimic din ce este în curs: apăsați butonul când nu sunteți într-un apel. O notificare, *Este disponibilă o versiune nouă*, spune și ea asta, cu un buton **Actualizează acum**.

| Când fila spune | |
| --- | --- |
| *Versiunea … este disponibilă. Această copie a fost instalată dintr-un pachet, deci cea nouă se instalează la fel.* | Programul provine dintr-un pachet, de exemplu din distribuția dumneavoastră de Linux. Apăsați **Ia pachetul** și instalați versiunea nouă la fel cum ați instalat-o pe aceasta. |
| *Această versiune nu are adresă de actualizare, deci nu întreabă niciodată. Cele publicate pe site au.* | Programul a fost compilat din codul sursă în loc să fie descărcat de pe site și nu caută actualizări. |
| *Niciun server de actualizări nu a răspuns.* | Serverele nu au putut fi contactate. Dacă computerul este online, poate ajuta să alegeți **Țară** mai sus: poate există un server mai aproape de dumneavoastră. |

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
| **Atașează jurnalul** | Adaugă finalul jurnalului, cel mult aproximativ 512 kB; rândul de sub căsuță spune cât este acum (111 kB în imagine). Consultați [Diagnostic](/troubleshooting/diagnostics). |

**Trimite** rămâne gri până când există ceva de trimis.

## Construit cu {#built-with}

Componentele pe care este construit programul, fiecare cu licența sa: Qt 6 (GPL-2.0 sau GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), Opus (BSD-3-Clause), SQLite (domeniu public), nlohmann/json (MIT), cpp-httplib (MIT), IXWebSocket (BSD-3-Clause), nghttp2 (MIT), LAME (LGPL-2.0-or-later), minimp3 (CC0-1.0), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) și clientul PulseAudio (LGPL-2.1-or-later). Fiecare este folosită sub licența menționată alături; acolo unde o componentă oferă mai multe, cea numită este cea aleasă.
