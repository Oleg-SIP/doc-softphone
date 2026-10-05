---
title: O programu
sidebar_position: 2
description: Verzija, ažuriranja, vaša država, licenca, sadržaj izveštaja o korišćenju, obrazac za povratnu informaciju i od čega je program izgrađen.
---

**Podešavanja → O programu** sadrži sve o samom programu.

<Shot name="20_settings_about" alt="Podešavanja → O programu" />

## Verzija i država {#version-and-country}

Na vrhu su naziv, **Verzija** (na slici 1.0.0) i veza ka veb-sajtu [ai-softphone.com](https://ai-softphone.com/).

**Država** govori programu gde ste. Pomaže da se izabere najbolji server za ažuriranja i otvara put ka jezičkim i govornim uslugama smeštenim u vašoj državi. **Otkrij samostalno** je popunjava.

## Ažuriranja {#updates}

Kartica kaže da li imate najnoviju verziju i kada je poslednji put provereno. **Proveri ažuriranja** proverava sada.

**Traži ažuriranja samostalno**, podrazumevano uključeno, proverava jednom dnevno i ubrzo nakon pokretanja telefona. Traži od servera jednu malu datoteku, a ništa se ne preuzima niti instalira bez vašeg pristanka.

## Licenca {#licence}

Program je slobodan softver pod licencom GPL-2.0-or-later. Dolazi bez ikakve garancije, a možete da ga dalje distribuirate pod uslovima te licence; ceo tekst isporučuje se u datoteci nazvanoj `LICENSE`.

## Telemetrija {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Podešavanja → O programu: šta sadrži izveštaj o korišćenju" />

Program šalje jedan mali izveštaj o korišćenju dnevno. Pre prvog vam se pokazuje šta sadrži, a kartica to navodi:

| | Šta se šalje |
| --- | --- |
| **Uvek se šalje** | Da je aplikacija pokrenuta, njena verzija i jezik sučelja; verzija operativnog sistema, regionalna podešavanja, država i vremenska zona. |
| **Šalje se i u Proširenom režimu** | Brojači poziva i uhvaćenih razgovora; proizvođač i verzija povezane centrale, nikada njena adresa; koliko je koraka [Pregleda](/interface/settings-overview) obavljeno i izabrani raspored. |
| **Ne šalje se nikada, ni u jednom režimu** | Brojevi koje ste birali ili sa kojih su vas zvali; nalozi, lozinke ili bilo šta iz skladišta ključeva; kontakti, razgovori, prepisi ili snimci; bilo šta što ste otkucali i bilo kakvi privatni podaci na računaru. |

Svaka instalacija pravi sebi jedan nasumični identifikator, kako bi se izveštaji iz iste kopije programa mogli prepoznati kao jedan. Ne proizlazi ni iz čega što se tiče vas ili vašeg računara i nikoga ne imenuje — ali pošto traje, izveštaji koji ga nose mogu da se povežu međusobno. Zato su pseudonimni, a ne anonimni.

Osnov osnovnog izveštaja je legitimni interes: znati koje su verzije u upotrebi omogućava da ispravka stigne do onih kojima treba. Sve što dodaje prošireni izveštaj tu je zato što ste to izabrali, a to ovde možete da promenite u bilo kom trenutku.

### Izveštavanje {#reporting}

| Izbor | |
| --- | --- |
| **Prošireno** | Osnovni izveštaj i ono što navodi *Šalje se i u Proširenom režimu*. Izabrano na slici. |
| **Osnovno** | Samo ono što se *Uvek se šalje*. |
| **Isključeno** | Nikakav izveštaj. Dostupno samo u izdanju Enterprise; inače je ta opcija siva. |

## Povratna informacija {#feedback}

<Shot name="20c_settings_about_bottom" alt="Podešavanja → O programu: obrazac za povratnu informaciju i komponente od kojih je program izgrađen" />

Obrazac koji piše programerima bez napuštanja programa.

| Polje | |
| --- | --- |
| **Tema** i **Poruka** | Ono što želite da kažete. |
| **Vaše ime** i **Adresa za odgovor** | Oboje je neobavezno. Bez adrese nema načina da se odgovori. |
| **Priloži dnevnik** | Dodaje kraj dnevnika, oko 512 kB. Pogledajte [Dijagnostika](/troubleshooting/diagnostics). |

**Pošalji** ostaje sivo dok nema šta da se pošalje.

## Izgrađeno sa {#built-with}

Komponente na kojima je program izgrađen, svaka sa svojom licencom: Qt 6 (GPL-2.0 ili GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (javno vlasništvo), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) i klijent PulseAudio (LGPL-2.1-or-later). Svaka se koristi pod licencom navedenom pored nje; gde komponenta nudi više njih, uzeta je navedena.
