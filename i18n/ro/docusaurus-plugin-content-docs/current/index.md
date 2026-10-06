---
slug: /
title: Documentația AI Softphone
sidebar_position: 1
description: Ce este AI Softphone, pe ce sisteme rulează și unde este descrisă fiecare parte a programului.
---

[AI Softphone](https://ai-softphone.com/) este un telefon software pentru o centrală IP care, în plus, transformă fiecare conversație în text și într-un rezumat scris. O conversație poate ajunge la el în trei moduri, iar toate trei ajung în aceeași bibliotecă, cu aceeași înregistrare, transcriere și prelucrare:

- **un apel** efectuat sau primit în program, prin orice centrală IP sau furnizor SIP;
- **o ședință** în Zoom, Teams, Meet sau orice altă aplicație, înregistrată direct de pe calculator;
- **o înregistrare pe care o aveți deja** — de pe un telefon mobil, un reportofon sau din alt sistem — adăugată în bibliotecă.

Înregistrările, transcrierile și istoricul sunt păstrate într-un fișier care vă aparține. Nu aveți nevoie de cont sau abonament, iar programul este software liber, sub licența GPL v2.

## De la conversație la prelucrare {#from-a-conversation-to-a-write-up}

1. Sosește o conversație: un apel, o ședință sau un fișier.
2. Este înregistrată pe două canale, astfel încât ce ați spus dumneavoastră și ce a spus cealaltă parte rămân separate.
3. Este transcrisă, vorbitor cu vorbitor, sincronizat cu sunetul.
4. Modelul de limbă ales de dumneavoastră o prelucrează: rezumat, sarcini, categorie, etichete și semnale de alarmă — iar conversației îi puteți pune și o întrebare.

## Descărcare și cerințe de sistem {#download-and-system-requirements}

Programul se descarcă gratuit de pe [ai-softphone.com](https://ai-softphone.com/#download): un program de instalare (`.exe`) pentru Windows, o imagine de disc (`.dmg`) pentru macOS și un AppImage sau un `.deb` pentru Linux. Nu trebuie instalat nimic altceva înainte — Qt, OpenSSL și bibliotecile C++ sunt incluse în pachet. Veți avea nevoie de un cont SIP, de la furnizorul dumneavoastră sau de pe centrala pe care o administrați chiar dumneavoastră. Înregistrarea funcționează imediat după instalarea programului; pentru transcriere și prelucrare este nevoie de un serviciu ales de dumneavoastră sau de un model pe propriul calculator.

| Sistem | Cerințe |
| --- | --- |
| macOS | macOS 14.4 sau mai nou; numai Apple silicon — un Mac cu procesor Intel nu îl poate deschide, nici măcar prin Rosetta; grafică Metal; 160 MB spațiu pe disc, plus înregistrările. Sistemul cere o singură dată acces la microfon. |
| Windows | Windows 10 versiunea 1809 (build 17763) sau mai nou și Windows 11; procesor Intel sau AMD pe 64 de biți; Direct3D 11 sau OpenGL 2.1; 250 MB spațiu pe disc, plus înregistrările. |
| Linux | Ubuntu 22.04 LTS sau mai nou, Debian 12 sau mai nou și orice sistem de aceeași vârstă — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; biblioteca GNU C 2.35 sau mai nouă; procesor Intel sau AMD pe 64 de biți; OpenGL 2.1 sau OpenGL ES 2.0, pe X11 sau Wayland; PipeWire sau PulseAudio (ALSA acolo unde nu există niciunul); 200 MB spațiu pe disc, plus înregistrările. Pictograma din bara de sistem are nevoie de un mediu desktop cu zonă de notificări de stare. |

Pe Linux, AppImage rulează pe orice distribuție de această vârstă: marcați-l ca executabil și porniți-l. Pachetul `.deb` mai are nevoie de bibliotecile C++ ale sistemului din GCC 13, pe care Ubuntu 24.04 și Debian 13 le au, iar Ubuntu 22.04 nu; pe orice sistem mai vechi, folosiți AppImage.

Interfața este disponibilă în treizeci de limbi; limba se alege în [Aspect](/program/appearance) și se schimbă fără repornire.

Capturile de ecran din această documentație sunt făcute pe macOS și afișate micșorat: faceți clic pe una ca să o vedeți la dimensiune completă. Pe celelalte sisteme, programul arată și funcționează la fel.

## Primii pași {#first-steps}

1. [Adăugați un cont](sip-accounts/setup.md) pentru centrala sau furnizorul SIP.
2. [Alegeți microfonul și difuzoarele](sip-accounts/devices.md) și dați un apel de probă.
3. Hotărâți [ce apeluri se înregistrează](recordings/call-recording.md).
4. Adăugați un [recunoscător](ai-processing/transcription.md) și un [model de limbă](ai-processing/processing.md) dacă doriți transcrieri și prelucrări.

**Setări → Prezentare generală** ține această listă în locul dumneavoastră: un punct verde marchează un pas făcut, unul roșu un pas care a rămas. Consultați [Prezentarea setărilor](interface/settings-overview.md).

## Ce să citiți în continuare {#where-to-read-next}

| Dacă doriți să… | Citiți |
| --- | --- |
| Vă orientați printre ferestre | [Interfața](interface/main-window.md) |
| Conectați telefonul la centrală | [Configurarea unui cont SIP](sip-accounts/setup.md) |
| Alegeți microfonul, difuzoarele și soneria | [Dispozitive](sip-accounts/devices.md) |
| Configurați codecurile, apelul în așteptare și istoricul apelurilor | [Setările apelurilor](sip-accounts/calls.md) |
| Puneți colegii pe butoane de apel dintr-o singură apăsare | [Butoane](sip-accounts/buttons.md) |
| Hotărâți ce apeluri se înregistrează și cât timp se păstrează | [Înregistrarea apelurilor](recordings/call-recording.md) |
| Ascultați, căutați și citiți conversațiile | [Fereastra Înregistrări](recordings/recordings-window.md) |
| Înregistrați o ședință ținută în altă aplicație | [Captare](capture/capture.md) |
| Alegeți recunoscătorul care transformă vorbirea în text | [Transcriere](ai-processing/transcription.md) |
| Hotărâți ce inteligență artificială vă prelucrează conversațiile și cât poate costa | [Prelucrare](ai-processing/processing.md) |
| Schimbați categoriile, etichetele și semnalele de alarmă | [Dicționare](ai-processing/dictionaries.md) |
| Schimbați dispunerea, tema, pornirea și scurtăturile | [Aspect](program/appearance.md), [Pornire](program/startup.md) și [Scurtături](program/shortcuts.md) |
| Conectați un CRM sau alt program | [Webhookuri](integration/webhooks.md) și [API REST local](integration/rest-api.md) |
| Vedeți ce își spun telefonul și centrala | [Diagnostic](troubleshooting/diagnostics.md) |
| Găsiți cauza unei probleme | [Probleme frecvente](troubleshooting/common-problems.md) |
| Opriți anumite părți ale programului | [Module](application/modules.md) |
| Verificați versiunea, actualizările și conținutul raportului de utilizare | [Despre](application/about.md) |

Paginile urmează ordinea filelor din **Setări**.

## Confidențialitate {#privacy}

- Implicit, totul rămâne pe calculatorul dumneavoastră: înregistrările, transcrierile și istoricul se află într-un fișier care vă aparține. Nimic din conversație — nici un număr, nici un nume, nici un cuvânt din ce s-a spus — nu pleacă nicăieri unde nu l-ați trimis chiar dumneavoastră.
- Parolele conturilor, valoarea antetului webhookului și tokenul API sunt păstrate în depozitul de chei al sistemului de operare, niciodată într-un fișier de setări.
- O versiune nouă se anunță atunci când apare — niciodată în timpul unui apel — și se instalează numai când spuneți dumneavoastră.
- Programul trimite un mic raport de utilizare pe zi. Înainte de primul vi se arată ce conține și alegeți cât de mult cuprinde: **De bază** sau **Extins**. Nu conține niciodată numere, contacte, adresa centralei sau ceva spus într-o conversație. Lista completă se află în [Despre](/application/about#telemetry).
- Programul este software liber, sub licența GPL v2.
