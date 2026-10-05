---
title: Glavni prozor
sidebar_position: 1
description: Telefon lijevo, knjižnica i postavke desno — raspored glavnog prozora AI Softphonea.
---

Glavni prozor je sam telefon. Uz zadani raspored, **Jedan prozor**, telefon je lijevo, a sve ostalo otvara se desno. [Raspored se može promijeniti](../program/appearance.md).

<Shot name="03_contacts" full alt="Glavni prozor: telefon lijevo i kartica Kontakti desno" />

## Telefon {#the-phone}

Odozgo prema dolje, lijeva strana sadrži:

- polje **Broj**;
- tipkovnicu i tipku za poziv;
- značke računa;
- gumbe koji prate druge interne brojeve;
- četiri mjesta na koja idete: **Snimke**, **Kontakti**, **Povijest** i **Postavke**.

### Biranje {#the-dialler}

- **Broj** — upišite ili zalijepite broj koji želite nazvati. Ikona sata na desnom kraju polja otvara popis brojeva koje ste nedavno zvali ili s kojih su vas zvali.
- Okrugle tipke **1–9**, **\***, **0** i **#** upisuju broj, a tijekom poziva šalju tonove (DTMF).
- Tipka sa slušalicom upućuje poziv. Ostaje siva dok nema broja.

<Shot name="22_last_calls" full alt="Popis nedavnih poziva ispod polja Broj, pokraj kartice Povijest" />

Kad je popis nedavnih brojeva otvoren, polje prikazuje strelicu, a tipka za poziv pomiče se desno od nje. Svaka stavka je ime, ili broj ako pozivatelj nije u [Kontaktima](contacts-history.md), s datumom. Crvena slušalica označava propušteni poziv; broj ponavljanja u zagradi — primjerice *Tehnička podrška (4)* — znači nekoliko uzastopnih poziva s istom stranom.

### Značke računa {#the-account-chips}

Ispod tipkovnice nalazi se po jedna značka za svaki [račun](../sip-accounts/setup.md). Zelena točka znači da je račun registriran na centrali. Istaknuta značka (na slici **305 Podrška**) je račun s kojeg će se uputiti sljedeći poziv; pritisnite drugu značku da ga promijenite. Okrugli crveni gumb desno od znački je način Ne ometaj.

### Gumbi {#the-buttons}

Ispod znački su [gumbi](../sip-accounts/buttons.md) koje ste napravili za kolege i linije, svaki s lampicom — na slikama **Horvat** i **Skladište**. Pritisnite gumb da nazovete njegov broj.

### Snimke, Kontakti, Povijest, Postavke {#recordings-contacts-history-settings}

Ove četiri stavke na dnu otvaraju karticu desno, jednu pokraj druge: [Snimke](../recordings/recordings-window.md), [Kontakti i Povijest](contacts-history.md) te [Postavke](settings-overview.md). Kartice koje ste otvorili ostaju u retku na vrhu desne strane.

## Poziv u tijeku {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Poziv u tijeku" />

Dok poziv traje, polje broja pomiče se na vrh s ikonom tipkovnice u sebi, a poziv se prikazuje na kartici:

- stanje i trajanje poziva (**U razgovoru · 0:21**), ime druge strane, **Linija** i naziv računa na kojem je poziv, te broj;
- dva okomita mjerača razine sa strana kartice, po jedan za svaki kanal zvuka;
- red gumba: snimanje (krug), utišavanje (mikrofon), čekanje (pauza) i crveni gumb **Spusti**;
- drugi red: prosljeđivanje (slušalica sa strelicom) i tipkovnica.

Poziv se može proslijediti izravno ili nakon što ste najprije razgovarali s osobom.

Ako je broj poznat u **Kontaktima**, umjesto broja prikazuje se ime. Iste radnje imaju [prečace](../program/shortcuts.md): javljanje, spuštanje, čekanje i utišavanje.

## Više poziva odjednom {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Više poziva" />

Dolazni poziv najavljuje se obavijesnom trakom gdje god radili, čak i kad je telefon skriven. Novi dolazni poziv pojavljuje se na vlastitoj kartici iznad popisa, sa zelenim, žutim i crvenim gumbom te retkom koji kaže s kim sada razgovarate (**U razgovoru s …**). Popis ispod prikazuje svaki poziv s njegovim stanjem — **Na čekanju**, **U razgovoru**, **Dolazni poziv** — i računom na kojem je. Ikona pauze označava poziv na čekanju, a ikona zvučnika onaj u kojem razgovarate.

Što se događa kad vas netko nazove dok ste već u razgovoru postavlja se u [Postavkama poziva](../sip-accounts/calls.md#call-waiting).

## Konferencija {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konferencija" />

Spojeni pozivi prikazuju se kao jedna kartica **Konferencija** na liniji računa. Svaki sudionik naveden je s vremenom u pozivu i vlastitim gumbom **Spusti**. Gumbi ispod snimaju, utišavaju i završavaju konferenciju za sve; široki gumb na dnu ponovno dijeli konferenciju na zasebne pozive.

## Hvatanje {#capture}

Kad je [hvatanje drugih aplikacija](../capture/capture.md) dopušteno u **Postavke → Hvatanje**, između znački računa i gumba pojavljuje se traka.

<Shot name="10_settings_capture" full alt="Traka Hvatanje pri dnu telefona: Hvatanje · spremno, Snimaj i dva mjerača razine" />

- **Hvatanje · spremno** kaže da program osluškuje razgovor u drugoj aplikaciji.
- **Snimaj** ručno pokreće hvatanje.
- Dvije tanke trake ispod njega pokazuju razinu zvuka: gornja ste vi, donja ono što računalo reproducira. Kako se crtaju, postavlja se pod **Slika u traci pri dnu telefona**.

Program može živjeti i u traci (traci izbornika na macOS-u) i prizvati se [prečacem](../program/shortcuts.md).
