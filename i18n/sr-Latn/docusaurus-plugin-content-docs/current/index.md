---
slug: /
title: Dokumentacija za AI Softphone
sidebar_position: 1
description: Šta je AI Softphone, na čemu radi i gde je opisan svaki deo programa.
---

[AI Softphone](https://ai-softphone.com/) je softverski telefon za IP centralu koji uz to svaki razgovor pretvara u tekst i pisani sažetak. Razgovor do njega može stići na tri načina i sva tri završavaju u istoj biblioteci, sa istim snimkom, prepisom i obradom:

- **poziv** upućen ili primljen u programu, preko bilo koje IP centrale ili SIP operatera;
- **sastanak** u Zoomu, Teamsu, Meetu ili bilo kojoj drugoj aplikaciji, snimljen direktno sa računara;
- **snimak koji već imate** — sa mobilnog telefona, diktafona ili iz drugog sistema — dodat u biblioteku.

Snimci, prepisi i istorija čuvaju se u datoteci koja je vaša. Ne trebaju vam ni nalog ni pretplata, a program je slobodan softver pod licencom GPL v2.

## Od razgovora do obrade {#from-a-conversation-to-a-write-up}

1. Stigne razgovor: poziv, sastanak ili datoteka.
2. Snima se na dva kanala, pa ono što ste rekli vi i ono što je rekla druga strana ostaje odvojeno.
3. Prepisuje se, govornik po govornik, usklađeno sa zvukom.
4. Jezički model koji ste izabrali ga obrađuje: sažetak, zadaci, kategorija, oznake i upozorenja — a razgovoru možete postaviti i pitanje.

## Preuzimanje i sistemski zahtevi {#download-and-system-requirements}

Program se besplatno preuzima sa [ai-softphone.com](https://ai-softphone.com/#download): instalacioni program (`.exe`) za Windows, slika diska (`.dmg`) za macOS i AppImage ili `.deb` za Linux. Instalacioni program, slika diska i AppImage ne traže ništa prethodno instalirano — Qt, OpenSSL i C++ biblioteke nalaze se u njima. Izuzetak je `.deb`: on koristi C++ biblioteke samog sistema, pogledajte niže. Trebaće vam SIP nalog kod vašeg operatera ili na centrali koju sami vodite. Snimanje radi čim se program instalira; za prepis i obradu potrebna je usluga koju izaberete ili model na sopstvenom računaru.

| Sistem | Zahtevi |
| --- | --- |
| macOS | macOS 14.4 ili noviji; samo Apple silicon — Mac sa Intelovim procesorom ne može da ga otvori, čak ni preko Rosette; grafika Metal; 160 MB prostora na disku, plus snimci. Sistem jednom pita za mikrofon. |
| Windows | Windows 10 verzije 1809 (build 17763) ili noviji i Windows 11; 64-bitni procesor Intel ili AMD; Direct3D 11 ili OpenGL 2.1; 250 MB prostora na disku, plus snimci. |
| Linux | Ubuntu 22.04 LTS ili noviji, Debian 12 ili noviji i sve iste starosti — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C biblioteka 2.35 ili novija; 64-bitni procesor Intel ili AMD; OpenGL 2.1 ili OpenGL ES 2.0, na X11 ili Waylandu; PipeWire ili PulseAudio (ALSA gde nema ni jednog ni drugog); 200 MB prostora na disku, plus snimci. Ikoni u traci potrebna je radna površina sa oblašću za obaveštenja o stanju. |

Na Linuxu AppImage radi na bilo kojoj distribuciji te starosti: označite ga kao izvršni i pokrenite. `.deb` još zahteva sistemske C++ biblioteke iz GCC-a 13, koje imaju Ubuntu 24.04 i Debian 13, a Ubuntu 22.04 nema; na bilo čemu starijem uzmite AppImage.

Sučelje je dostupno na trideset jezika; bira se u [Izgledu](/program/appearance) i menja bez ponovnog pokretanja.

Snimci ekrana u ovoj dokumentaciji napravljeni su na macOS-u i prikazani umanjeno: kliknite snimak da ga vidite u punoj veličini. Na drugim sistemima program izgleda i radi isto.

## Prvi koraci {#first-steps}

1. [Dodajte nalog](sip-accounts/setup.md) za svoju centralu ili SIP operatera.
2. [Izaberite mikrofon i zvučnike](sip-accounts/devices.md) i obavite probni poziv.
3. Odlučite [koji se pozivi snimaju](recordings/call-recording.md).
4. Dodajte [prepoznavač](ai-processing/transcription.md) i [jezički model](ai-processing/processing.md) ako želite prepise i obrade.

**Podešavanja → Pregled** vodi ovaj spisak umesto vas: zelena tačka označava obavljen korak, crvena korak koji još preostaje. Pogledajte [Pregled podešavanja](interface/settings-overview.md).

## Šta čitati dalje {#where-to-read-next}

| Ako želite da… | Pročitajte |
| --- | --- |
| Se snađete među prozorima | [Sučelje](interface/main-window.md) |
| Povežete telefon sa centralom | [Podešavanje SIP naloga](sip-accounts/setup.md) |
| Izaberete mikrofon, zvučnike i zvono | [Uređaji](sip-accounts/devices.md) |
| Podesite kodeke, poziv na čekanju i dnevnik poziva | [Podešavanja poziva](sip-accounts/calls.md) |
| Stavite kolege na dugmad za jedan dodir | [Dugmad](sip-accounts/buttons.md) |
| Odlučite koji se pozivi snimaju i koliko dugo | [Snimanje poziva](recordings/call-recording.md) |
| Slušate, pretražujete i čitate svoje razgovore | [Prozor snimaka](interface/recordings.md) |
| Snimite sastanak održan u drugoj aplikaciji | [Hvatanje](capture/capture.md) |
| Izaberete prepoznavač koji govor pretvara u tekst | [Prepisivanje](ai-processing/transcription.md) |
| Odlučite koja veštačka inteligencija obrađuje vaše razgovore i koliko to sme da košta | [Obrada](ai-processing/processing.md) |
| Promenite kategorije, oznake i upozorenja | [Rečnici](ai-processing/dictionaries.md) |
| Promenite raspored, temu, pokretanje i prečice | [Izgled](program/appearance.md), [Pokretanje](program/startup.md) i [Prečice](program/shortcuts.md) |
| Povežete CRM ili drugi program | [Veb-kuke](integration/webhooks.md) i [Lokalni REST API](integration/rest-api.md) |
| Vidite šta jedno drugom govore telefon i centrala | [Dijagnostika](troubleshooting/diagnostics.md) |
| Pronađete uzrok problema | [Česti problemi](troubleshooting/common-problems.md) |
| Isključite delove programa | [Moduli](application/modules.md) |
| Proverite verziju, ažuriranja i sadržaj izveštaja o korišćenju | [O programu](application/about.md) |

Stranice prate redosled kartica u **Podešavanjima**.

## Privatnost {#privacy}

- Podrazumevano sve ostaje na vašem računaru: snimci, prepisi i istorija nalaze se u datoteci koja je vaša. Ništa iz razgovora — ni broj, ni ime, ni reč od onoga što je rečeno — ne ide nigde kuda to sami niste poslali.
- Lozinke naloga, vrednost zaglavlja veb-kuke i žeton API-ja čuvaju se u skladištu ključeva operativnog sistema, nikada u datoteci podešavanja.
- Nova verzija se javlja kada izađe — nikada tokom poziva — i instalira se tek kada vi kažete.
- Program šalje jedan mali izveštaj o korišćenju dnevno. Pre prvog vam pokazuje šta sadrži, a vi birate koliko nosi: **Osnovno** ili **Prošireno**. Nikada ne sadrži brojeve, kontakte, adresu vaše centrale niti išta izgovoreno u razgovoru. Ceo spisak nalazi se u [O programu](/application/about#telemetry).
- Program je slobodan softver pod licencom GPL v2.
