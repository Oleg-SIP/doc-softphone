---
slug: /
title: Dokumentacija za AI Softphone
sidebar_position: 1
description: Što je AI Softphone, na čemu radi i gdje je opisan svaki dio programa.
---

[AI Softphone](https://ai-softphone.com/) je softverski telefon za IP centralu koji usto svaki razgovor pretvara u tekst i pisani sažetak. Razgovor do njega može doći na tri načina i sva tri završavaju u istoj knjižnici, s istom snimkom, prijepisom i obradom:

- **poziv** upućen ili primljen u programu, preko bilo koje IP centrale ili SIP operatera;
- **sastanak** u Zoomu, Teamsu, Meetu ili bilo kojoj drugoj aplikaciji, snimljen izravno s računala;
- **snimka koju već imate** — s mobitela, diktafona ili iz drugog sustava — dodana u knjižnicu.

Snimke, prijepisi i povijest čuvaju se u datoteci koja je vaša. Ne trebate ni račun ni pretplatu, a program je slobodan softver pod licencom GPL v2.

## Od razgovora do obrade {#from-a-conversation-to-a-write-up}

1. Stigne razgovor: poziv, sastanak ili datoteka.
2. Snima se na dva kanala, pa ono što ste rekli vi i ono što je rekla druga strana ostaje odvojeno.
3. Prepisuje se, govornik po govornik, usklađeno sa zvukom.
4. Jezični model koji ste odabrali ga obrađuje: sažetak, zadaci, kategorija, oznake i upozoravajući signali — a razgovoru možete postaviti i pitanje.

## Preuzimanje i zahtjevi sustava {#download-and-system-requirements}

Program se besplatno preuzima s [ai-softphone.com](https://ai-softphone.com/#download): instalacijski program (`.exe`) za Windows, slika diska (`.dmg`) za macOS te AppImage ili `.deb` za Linux. Instalacijski program, slika diska i AppImage ne traže ništa prethodno instalirano — Qt, OpenSSL i C++ knjižnice nalaze se u njima. Iznimka je `.deb`: on koristi C++ knjižnice samog sustava, pogledajte niže. Trebat će vam SIP račun kod vašeg operatera ili na centrali koju sami vodite. Snimanje radi čim se program instalira; za prijepis i obradu potrebna je usluga koju odaberete ili model na vlastitom računalu.

| Sustav | Zahtjevi |
| --- | --- |
| macOS | macOS 14.4 ili noviji; samo Apple silicon — Mac s Intelovim procesorom ne može ga otvoriti, čak ni preko Rosette; grafika Metal; 160 MB prostora na disku, plus snimke. Sustav jednom pita za mikrofon. |
| Windows | Windows 10 inačice 1809 (build 17763) ili noviji te Windows 11; 64-bitni procesor Intel ili AMD; Direct3D 11 ili OpenGL 2.1; 250 MB prostora na disku, plus snimke. |
| Linux | Ubuntu 22.04 LTS ili noviji, Debian 12 ili noviji i sve iste starosti — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; GNU C knjižnica 2.35 ili novija; 64-bitni procesor Intel ili AMD; OpenGL 2.1 ili OpenGL ES 2.0, na X11 ili Waylandu; PipeWire ili PulseAudio (ALSA gdje nema ni jednog ni drugog); 200 MB prostora na disku, plus snimke. Ikona u traci treba radnu površinu s područjem za obavijesti o stanju. |

Na Linuxu AppImage radi na bilo kojoj distribuciji te starosti: označite ga kao izvršnog i pokrenite. `.deb` još treba sustavske C++ knjižnice iz GCC-a 13, koje imaju Ubuntu 24.04 i Debian 13, a Ubuntu 22.04 nema; na bilo čemu starijem uzmite AppImage.

Sučelje je dostupno na trideset jezika; odabire se u [Izgledu](/program/appearance) i mijenja bez ponovnog pokretanja.

Snimke zaslona u ovoj dokumentaciji napravljene su na macOS-u i prikazane umanjeno: kliknite snimku da je vidite u punoj veličini. Na drugim sustavima program izgleda i radi isto.

## Prvi koraci {#first-steps}

1. [Dodajte račun](sip-accounts/setup.md) za svoju centralu ili SIP operatera.
2. [Odaberite mikrofon i zvučnike](sip-accounts/devices.md) i obavite probni poziv.
3. Odlučite [koji se pozivi snimaju](recordings/call-recording.md).
4. Dodajte [prepoznavač](ai-processing/transcription.md) i [jezični model](ai-processing/processing.md) ako želite prijepise i obrade.

**Postavke → Pregled** vodi ovaj popis umjesto vas: zelena točka označava obavljen korak, crvena korak koji još preostaje. Pogledajte [Pregled postavki](interface/settings-overview.md).

## Što čitati dalje {#where-to-read-next}

| Ako želite… | Pročitajte |
| --- | --- |
| Snaći se među prozorima | [Sučelje](interface/main-window.md) |
| Povezati telefon s centralom | [Postavljanje SIP računa](sip-accounts/setup.md) |
| Odabrati mikrofon, zvučnike i zvonjavu | [Uređaji](sip-accounts/devices.md) |
| Postaviti kodeke, poziv na čekanju i zapisnik poziva | [Postavke poziva](sip-accounts/calls.md) |
| Staviti kolege na gumbe za jedan dodir | [Gumbi](sip-accounts/buttons.md) |
| Odlučiti koji se pozivi snimaju i koliko dugo | [Snimanje poziva](recordings/call-recording.md) |
| Slušati, pretraživati i čitati svoje razgovore | [Prozor snimki](interface/recordings.md) |
| Snimiti sastanak održan u drugoj aplikaciji | [Hvatanje](capture/capture.md) |
| Odabrati prepoznavač koji govor pretvara u tekst | [Prijepis](ai-processing/transcription.md) |
| Odlučiti koja umjetna inteligencija obrađuje vaše razgovore i koliko to smije stajati | [Obrada](ai-processing/processing.md) |
| Promijeniti kategorije, oznake i upozoravajuće signale | [Rječnici](ai-processing/dictionaries.md) |
| Promijeniti raspored, temu, pokretanje i prečace | [Izgled](program/appearance.md), [Pokretanje](program/startup.md) i [Prečaci](program/shortcuts.md) |
| Povezati CRM ili drugi program | [Webhookovi](integration/webhooks.md) i [Lokalni REST API](integration/rest-api.md) |
| Vidjeti što si telefon i centrala govore | [Dijagnostika](troubleshooting/diagnostics.md) |
| Pronaći uzrok problema | [Česti problemi](troubleshooting/common-problems.md) |
| Isključiti dijelove programa | [Moduli](application/modules.md) |
| Provjeriti inačicu, ažuriranja i sadržaj izvješća o korištenju | [O programu](application/about.md) |

Stranice prate redoslijed kartica u **Postavkama**.

## Privatnost {#privacy}

- Prema zadanim postavkama sve ostaje na vašem računalu: snimke, prijepisi i povijest nalaze se u datoteci koja je vaša. Ništa iz razgovora — ni broj, ni ime, ni riječ od onoga što je rečeno — ne ide nikamo kamo to sami niste poslali.
- Lozinke računa, vrijednost zaglavlja webhooka i token API-ja čuvaju se u spremniku ključeva operacijskog sustava, nikada u datoteci postavki.
- Nova inačica javlja se kad izađe — nikada tijekom poziva — i instalira se tek kad vi kažete.
- Program šalje jedno malo izvješće o korištenju dnevno. Prije prvoga vam pokazuje što sadrži, a vi birate koliko nosi: **Osnovno** ili **Prošireno**. Nikada ne sadrži brojeve, kontakte, adresu vaše centrale ni išta izrečeno u razgovoru. Cijeli popis nalazi se u [O programu](/application/about#telemetry).
- Program je slobodan softver pod licencom GPL v2.
