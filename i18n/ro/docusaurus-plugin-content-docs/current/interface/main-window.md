---
title: Fereastra principală
sidebar_position: 1
description: Telefonul în stânga, biblioteca și setările în dreapta — dispunerea ferestrei principale a AI Softphone.
---

Fereastra principală este telefonul însuși. Cu dispunerea implicită, **O fereastră**, telefonul stă în stânga, iar tot restul se deschide în dreapta. [Dispunerea poate fi schimbată](../program/appearance.md).

<Shot name="03_contacts" full alt="Fereastra principală: telefonul în stânga și fila Contacte în dreapta" />

## Telefonul {#the-phone}

De sus în jos, partea stângă cuprinde:

- câmpul **Număr**;
- tastatura și tasta de apel;
- insignele conturilor;
- butoanele care urmăresc alte interioare;
- cele patru locuri în care puteți merge: **Înregistrări**, **Contacte**, **Istoric** și **Setări**.

### Tastatura de apelare {#the-dialler}

- **Număr** — scrieți sau lipiți numărul pe care vreți să-l sunați. Pictograma de ceas din capătul din dreapta al câmpului deschide lista numerelor pe care le-ați sunat sau de la care ați fost sunat în ultima vreme.
- Tastele rotunde **1–9**, **\***, **0** și **#** completează numărul, iar în timpul unui apel trimit tonuri (DTMF).
- Tasta cu receptor efectuează apelul. Rămâne gri până când există un număr.

<Shot name="22_last_calls" full alt="Lista apelurilor recente sub câmpul Număr, lângă fila Istoric" />

Când lista numerelor recente este deschisă, câmpul afișează o săgeată, iar tasta de apel se mută în dreapta ei. Fiecare intrare este un nume, sau un număr dacă apelantul nu se află în [Contacte](contacts-history.md), cu data. Un receptor roșu marchează un apel pierdut, iar un număr de repetări între paranteze — de exemplu *Suport tehnic (4)* — înseamnă mai multe apeluri la rând cu aceeași persoană.

### Insignele conturilor {#the-account-chips}

Sub tastatură există câte o insignă pentru fiecare [cont](../sip-accounts/setup.md). Un punct verde înseamnă că acel cont este înregistrat la centrală. Insigna evidențiată (în imagine, **305 Asistență**) este contul de pe care va fi efectuat următorul apel; apăsați pe altă insignă ca să-l schimbați. Butonul rotund roșu din dreapta insignelor este modul Nu deranjați.

### Butoanele {#the-buttons}

Sub insigne se află [butoanele](../sip-accounts/buttons.md) pe care le-ați creat pentru colegi și linii, fiecare cu un indicator luminos — **Popescu** și **Depozit** în imagini. Apăsați pe unul ca să-i formați numărul.

### Înregistrări, Contacte, Istoric, Setări {#recordings-contacts-history-settings}

Aceste patru intrări din partea de jos deschid câte o filă în dreapta, una lângă alta: [Înregistrări](../interface/recordings.md), [Contacte și Istoric](contacts-history.md) și [Setări](settings-overview.md). Filele pe care le-ați deschis rămân în rândul din partea de sus a laturii din dreapta.

## Un apel în curs {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Un apel în curs" />

Cât timp un apel este în desfășurare, câmpul numărului se mută sus, cu o pictogramă de tastatură în interior, iar apelul este afișat pe un card:

- starea și durata apelului (**În convorbire · 0:21**), numele celeilalte părți, **Linie** și numele contului pe care se desfășoară apelul, precum și numărul;
- două bare de nivel verticale pe laturile cardului, câte una pentru fiecare canal de sunet;
- un rând de butoane: înregistrare (cerc), oprirea microfonului (microfon), punere în așteptare (pauză) și butonul roșu **Închide apelul**;
- un al doilea rând: transfer (receptor cu săgeată) și tastatura.

Un apel poate fi transferat direct sau după ce ați vorbit mai întâi cu persoana respectivă.

Dacă numărul este cunoscut în **Contacte**, în locul numărului se afișează numele. Aceleași acțiuni au [scurtături](../program/shortcuts.md): răspuns, închidere, punere în așteptare și oprirea microfonului.

## Mai multe apeluri deodată {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Mai multe apeluri" />

Un apel primit este anunțat printr-o notificare oriunde ați lucra, chiar și când telefonul este ascuns. Un apel nou primit apare pe un card propriu deasupra listei, cu un buton verde, unul galben și unul roșu și cu un rând care spune cu cine vorbiți acum (**În convorbire cu Maria Ellis**). Lista de dedesubt arată fiecare apel cu starea lui — **În așteptare**, **În convorbire**, **Apel primit** — și contul pe care se află. O pictogramă de pauză marchează un apel pus în așteptare, iar o pictogramă de difuzor pe cel în care vorbiți.

Ce se întâmplă când vă sună cineva în timp ce sunteți deja într-o convorbire se configurează în [Setările apelurilor](../sip-accounts/calls.md#call-waiting).

## Conferință {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="O conferință" />

Apelurile care au fost unite apar ca un singur card **Conferință** pe linia contului. Fiecare participant este afișat cu timpul petrecut în apel și cu propriul buton **Închide apelul**. Butoanele de dedesubt înregistrează, opresc microfonul și încheie conferința pentru toată lumea; butonul lat din partea de jos împarte conferința înapoi în apeluri separate.

## Captare {#capture}

Când [captarea altor aplicații](../capture/capture.md) este permisă în **Setări → Captare**, între insignele conturilor și butoane apare o bandă.

<Shot name="10_settings_capture" full alt="Banda Captare la piciorul telefonului: Captare · gata, Înregistrează și două bare de nivel" />

- **Captare · gata** arată că programul ascultă dacă are loc o conversație în altă aplicație.
- **Înregistrează** pornește manual o captare.
- Cele două bare subțiri de sub el arată nivelul sunetului: cea de sus sunteți dumneavoastră, cea de jos este ceea ce redă calculatorul. Felul în care sunt desenate se configurează la **Imagine în bara de la piciorul telefonului**.

Programul poate sta și în bara de sistem (bara de meniu pe macOS) și poate fi adus în față cu o [scurtătură](../program/shortcuts.md).
