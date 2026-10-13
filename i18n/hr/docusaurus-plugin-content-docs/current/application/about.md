---
title: O programu
sidebar_position: 2
description: Inačica, ažuriranja, vaša država, licenca, sadržaj izvješća o korištenju, obrazac za povratnu informaciju i od čega je program izgrađen.
---

**Postavke → O programu** sadrži sve o samom programu.

<Shot name="20_settings_about" alt="Postavke → O programu" />

## Inačica i država {#version-and-country}

Na vrhu su naziv, **Inačica** (na slici 1.1.5), poveznica na web-stranicu [ai-softphone.com](https://ai-softphone.com/) i poveznica na ovu dokumentaciju.

**Država** govori programu gdje ste. Pomaže odabrati najbolji poslužitelj za ažuriranja i otvara put jezičnim i govornim uslugama smještenima u vašoj državi. **Otkrij automatski** je ispunjava.

## Ažuriranja {#updates}

Kartica kaže imate li najnoviju inačicu i kada je zadnji put provjereno. **Provjeri ažuriranja** provjerava sada.

**Provjeravaj ažuriranja automatski**, prema zadanim postavkama uključeno, provjerava jednom dnevno i ubrzo nakon pokretanja telefona. Traži od poslužitelja jednu malu datoteku, a ništa se ne preuzima ni instalira bez vašeg pristanka.

Kad postoji nova inačica, kartica kaže *Verzija … je dostupna. Ništa se ne preuzima dok ne zatražite.* **Što se promijenilo** pokazuje što je u njoj novo, a **Preuzmi** je preuzima.

Kad je preuzeta, **Instaliraj i ponovno pokreni** zatvara telefon i ponovno ga pokreće već u novoj inačici. Telefon to nikad ne radi sam, da ne prekine ništa što je u tijeku: pritisnite gumb kad niste u pozivu. To kaže i obavijest *Dostupna je nova verzija*, s gumbom **Ažuriraj sada**.

| Kad kartica kaže | |
| --- | --- |
| *Verzija … je dostupna. Ova je kopija instalirana paketom, pa se nova instalira jednako.* | Program je instaliran iz paketa, primjerice iz vaše distribucije Linuxa. Pritisnite **Uzmi paket** i instalirajte novu inačicu na isti način na koji ste instalirali ovu. |
| *Ova izgradnja nema adresu za ažuriranja, pa nikad ne pita. One objavljene na webu je imaju.* | Program je izgrađen iz izvornog koda umjesto da je preuzet s web-mjesta i ne traži ažuriranja. |
| *Nijedan poslužitelj za ažuriranja nije odgovorio.* | Poslužitelji nisu bili dostupni. Ako je računalo na mreži, može pomoći odabir polja **Država** iznad: možda postoji poslužitelj bliže vama. |

## Licenca {#licence}

Program je slobodan softver pod licencom GPL-2.0-or-later. Dolazi bez ikakvog jamstva, a možete ga dalje distribuirati pod uvjetima te licence; cijeli tekst isporučuje se u datoteci nazvanoj `LICENSE`.

## Telemetrija {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Postavke → O programu: što sadrži izvješće o korištenju" />

Program šalje jedno malo izvješće o korištenju dnevno. Prije prvoga vam se pokazuje što sadrži, a kartica to navodi:

| | Što se šalje |
| --- | --- |
| **Uvijek se šalje** | Da je aplikacija pokrenuta, njezina inačica i jezik sučelja; inačica operacijskog sustava, regionalne postavke, država i vremenska zona. |
| **Šalje se dodatno, u načinu Prošireno** | Brojači poziva i uhvaćenih razgovora; proizvođač i inačica povezane centrale, nikada njezina adresa; koliko je koraka [Pregleda](/interface/settings-overview) obavljeno i odabrani raspored. |
| **Nikad se ne šalje, ni u jednom načinu** | Brojevi koje ste birali ili s kojih su vas zvali; računi, lozinke ili bilo što iz spremnika ključeva; kontakti, razgovori, prijepisi ili snimke; bilo što što ste upisali i bilo kakvi privatni podaci na računalu. |

Svaka instalacija stvara si jedan nasumični identifikator, kako bi se izvješća iz iste kopije programa mogla prepoznati kao jedna. Ne proizlazi ni iz čega što se tiče vas ili vašeg računala i nikoga ne imenuje — ali budući da traje, izvješća koja ga nose mogu se međusobno povezati. Zato su pseudonimna, a ne anonimna.

Osnova osnovnog izvješća je legitimni interes: znati koje su inačice u upotrebi omogućuje da ispravak stigne do onih kojima treba. Sve što dodaje prošireno izvješće tu je zato što ste to odabrali, a to ovdje možete promijeniti u bilo kojem trenutku.

### Izvještavanje {#reporting}

| Izbor | |
| --- | --- |
| **Prošireno** | Osnovno izvješće i ono što navodi *Šalje se dodatno*. Odabrano na slici. |
| **Osnovno** | Samo ono što se *Uvijek se šalje*. |
| **Isključeno** | Nikakvo izvješće. Dostupno samo u izdanju Enterprise; inače je ta mogućnost siva. |

## Povratna informacija {#feedback}

<Shot name="20c_settings_about_bottom" alt="Postavke → O programu: obrazac za povratnu informaciju i komponente od kojih je program izgrađen" />

Obrazac koji piše razvojnim programerima bez napuštanja programa.

| Polje | |
| --- | --- |
| **Predmet** i **Poruka** | Ono što želite reći. |
| **Vaše ime** i **Adresa za odgovor** | Oboje je neobavezno. Bez adrese nema načina da se odgovori. |
| **Priloži zapisnik** | Dodaje kraj zapisnika, najviše oko 512 kB; redak ispod kvačice kaže koliko je to sada (na slici 111 kB). Pogledajte [Dijagnostika](/troubleshooting/diagnostics). |

**Pošalji** ostaje siv dok nema što poslati.

## Izgrađeno s {#built-with}

Komponente na kojima je program izgrađen, svaka sa svojom licencom: Qt 6 (GPL-2.0 ili GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), Opus (BSD-3-Clause), SQLite (javna domena), nlohmann/json (MIT), cpp-httplib (MIT), IXWebSocket (BSD-3-Clause), nghttp2 (MIT), LAME (LGPL-2.0-or-later), minimp3 (CC0-1.0), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) i klijent PulseAudio (LGPL-2.1-or-later). Svaka se koristi pod licencom navedenom pokraj nje; gdje komponenta nudi više njih, uzeta je navedena.
