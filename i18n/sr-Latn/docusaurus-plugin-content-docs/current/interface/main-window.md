---
title: Glavni prozor
sidebar_position: 1
description: Telefon levo, biblioteka i podešavanja desno — raspored glavnog prozora AI Softphonea.
---

Glavni prozor je sam telefon. Uz podrazumevani raspored, **Jedan prozor**, telefon je levo, a sve ostalo se otvara desno. [Raspored može da se promeni](../program/appearance.md).

<Shot name="03_contacts" full alt="Glavni prozor: telefon levo i kartica Kontakti desno" />

## Telefon {#the-phone}

Odozgo nadole, leva strana sadrži:

- polje **Broj**;
- tastaturu i taster za poziv;
- značke naloga;
- dugmad koja prate druge interne brojeve;
- četiri mesta na koja idete: **Snimci**, **Kontakti**, **Istorija** i **Podešavanja**.

### Biranje {#the-dialler}

- **Broj** — otkucajte ili nalepite broj koji želite da pozovete. Ikona sata na desnom kraju polja otvara spisak brojeva koje ste nedavno zvali ili sa kojih su vas zvali.
- Okrugli tasteri **1–9**, **\***, **0** i **#** unose broj, a tokom poziva šalju tonove (DTMF).
- Taster sa slušalicom upućuje poziv. Ostaje siv dok nema broja.

<Shot name="22_last_calls" full alt="Spisak nedavnih poziva ispod polja Broj, pored kartice Istorija" />

Kada je spisak nedavnih brojeva otvoren, polje prikazuje strelicu, a taster za poziv se pomera desno od nje. Svaka stavka je ime, ili broj ako pozivalac nije u [Kontaktima](contacts-history.md), sa datumom. Crvena slušalica označava propušten poziv; broj ponavljanja u zagradi — na primer *Tehnička podrška (4)* — znači nekoliko uzastopnih poziva sa istom stranom.

### Značke naloga {#the-account-chips}

Ispod tastature nalazi se po jedna značka za svaki [nalog](../sip-accounts/setup.md). Zelena tačka znači da je nalog registrovan na centrali. Istaknuta značka (na slici **305 Podrška**) je nalog sa kog će se uputiti sledeći poziv; pritisnite drugu značku da ga promenite. Okruglo crveno dugme desno od znački je režim Ne uznemiravaj.

### Dugmad {#the-buttons}

Ispod znački su [dugmad](../sip-accounts/buttons.md) koju ste napravili za kolege i linije, svako sa lampicom — na slikama **Petrović** i **Magacin**. Pritisnite dugme da pozovete njegov broj.

### Snimci, Kontakti, Istorija, Podešavanja {#recordings-contacts-history-settings}

Ove četiri stavke na dnu otvaraju karticu desno, jednu pored druge: [Snimci](../interface/recordings.md), [Kontakti i Istorija](contacts-history.md) i [Podešavanja](settings-overview.md). Kartice koje ste otvorili ostaju u redu na vrhu desne strane.

## Poziv u toku {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Poziv u toku" />

Dok poziv traje, polje broja se pomera na vrh sa ikonom tastature u sebi, a poziv se prikazuje na kartici:

- stanje i trajanje poziva (**U pozivu · 0:21**), ime druge strane, **Linija** i naziv naloga na kom je poziv, i broj;
- dva uspravna merača nivoa sa strana kartice, po jedan za svaki kanal zvuka;
- red dugmadi: snimanje (krug), isključivanje mikrofona (mikrofon), čekanje (pauza) i crveno dugme **Prekini poziv**;
- drugi red: prosleđivanje (slušalica sa strelicom) i tastatura.

Poziv može da se prosledi direktno ili nakon što ste prvo razgovarali sa osobom.

Ako je broj poznat u **Kontaktima**, umesto broja prikazuje se ime. Iste radnje imaju [prečice](../program/shortcuts.md): javljanje, prekid, čekanje i isključivanje mikrofona.

## Više poziva odjednom {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Više poziva" />

Dolazni poziv najavljuje se obaveštenjem gde god da radite, čak i kada je telefon sakriven. Novi dolazni poziv pojavljuje se na sopstvenoj kartici iznad spiska, sa zelenim, žutim i crvenim dugmetom i redom koji kaže sa kim sada razgovarate (**U pozivu sa …**). Spisak ispod prikazuje svaki poziv sa njegovim stanjem — **Na čekanju**, **U pozivu**, **Dolazni poziv** — i nalogom na kom je. Ikona pauze označava poziv na čekanju, a ikona zvučnika onaj u kom razgovarate.

Šta se dešava kada vas neko pozove dok ste već u razgovoru podešava se u [Podešavanjima poziva](../sip-accounts/calls.md#call-waiting).

## Konferencija {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konferencija" />

Spojeni pozivi prikazuju se kao jedna kartica **Konferencija** na liniji naloga. Svaki učesnik je naveden sa vremenom u pozivu i sopstvenim dugmetom **Prekini poziv**. Dugmad ispod snimaju, isključuju mikrofon i završavaju konferenciju za sve; široko dugme na dnu ponovo deli konferenciju na zasebne pozive.

## Hvatanje {#capture}

Kada je [hvatanje drugih aplikacija](../capture/capture.md) dozvoljeno u **Podešavanja → Hvatanje**, između znački naloga i dugmadi pojavljuje se traka.

<Shot name="10_settings_capture" full alt="Traka Hvatanje pri dnu telefona: Hvatanje · spremno, Snimi i dva merača nivoa" />

- **Hvatanje · spremno** kaže da program osluškuje razgovor u drugoj aplikaciji.
- **Snimi** ručno pokreće hvatanje.
- Dve tanke trake ispod njega pokazuju nivo zvuka: gornja ste vi, donja ono što računar reprodukuje. Kako se crtaju, podešava se pod **Slika u traci pri dnu telefona**.

Program može da živi i u traci (traci menija na macOS-u) i da se prizove [prečicom](../program/shortcuts.md).
