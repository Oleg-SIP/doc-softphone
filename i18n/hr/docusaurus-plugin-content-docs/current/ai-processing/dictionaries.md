---
title: Rječnici
sidebar_position: 4
description: Vaše vlastite kategorije, oznake i upozoravajući signali — riječi pod koje se svrstavaju vaši razgovori.
---

**Postavke → Rječnici** sadrži riječi pod koje se razgovor može svrstati, kojima se može označiti ili zbog kojih se na njega može upozoriti. Ovi popisi su ono što se pokazuje modelima i između čega moraju birati, pa je odgovor uvijek nešto što kasnije možete potražiti.

<Shot name="13_settings_dictionaries" alt="Postavke → Rječnici" />

**Prikaži izbrisane** prikazuje stavke koje ste izbrisali.

Svaka stavka je naziv, kratak kod sitnim slovima i opis koji modelu kaže kada je odabrati. Kod je ono što se sprema i što vraća [REST API](../integration/rest-api.md#taxonomy-and-settings), pa ostaje isti kad stavku preimenujete.

## Kategorije {#categories}

O čemu je bio razgovor; **za svaki razgovor bira se jedna**. Program počinje s četiri:

| Naziv | Kod | Koristi se za |
| --- | --- | --- |
| **Prodaja** | `sales` | Prodaju, ponude, pregovore ili nastavak kupnje — uključujući kupca koji pita koliko nešto košta. |
| **Podrška** | `support` | Pomoć nekome s proizvodom ili uslugom koju već ima: kvar, pitanje o korištenju, prigovor na to kako radi. |
| **Privatan** | `personal` | Uopće nije posao — privatni razgovor koji se slučajno vodio na ovoj liniji. |
| **Ostalo** | `other` | Posao, ali ni prodaja ni podrška: dobavljač, kolega, dostava, pogrešan broj. Odaberite ovo umjesto nagađanja između ostalih. |

Pritisnite **Dodaj** da dodate vlastitu kategoriju.

## Oznake {#tags}

Naljepnice koje *sve mogu vrijediti za isti razgovor*. Pritisnite **Dodaj** da dodate jednu. Popis počinje stavkama poput:

| Naziv | Kod | Koristi se za |
| --- | --- | --- |
| **Obećan povratni poziv** | `callback` | Netko u ovom pozivu obećao je da će nazvati natrag ili zamolio da ga se nazove. |
| **Prigovor** | `complaint` | Druga strana izrazila je nezadovoljstvo, bez obzira je li riješeno. |
| **Proslijeđeno više** | `escalation` | Poziv je predan nekome drugome ili je druga strana to zatražila. |
| **VIP kupac** | `vip` | S drugom stranom postupalo se kao s važnim klijentom ili je sama rekla da to jest. |

## Upozoravajući signali {#red-flags}

Stvari koje traže pozornost, pronađene u razgovoru s dokazom i vremenom — primjerice *Ljutit kupac* ili *Opasnost od odlaska*. Upozoravajući signali nacrtani su crveno u [prozoru Snimke](../interface/recordings.md) i svaki nosi ozbiljnost: nisku, srednju ili visoku.

## Oblici odgovora i jezik {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Postavke → Rječnici: oblici odgovora i jezične upute" />

Niže na kartici nalaze se upute od kojih se slažu upute za modele. Čuvaju se ovdje kako bi svaka uputa mogla koristiti isti tekst, a možete ih mijenjati kao bilo koju drugu stavku.

| Naziv | Kod | Što kaže modelu |
| --- | --- | --- |
| **Oznake** | `shape-labels` | Odgovori u JSON-u s popisom kodova i koliko je siguran u svaki, koristeći samo kodove s popisa koji je dobio. |
| **Ocjena** | `shape-score` | Odgovori ocjenom, razlogom za nju i riječima na kojima se temelji. |
| **Mjerila** | `shape-rubric` | Odgovori ukupnom ocjenom i ocjenom za svako mjerilo. |
| **Signali** | `shape-flags` | Odgovori kodovima s popisa, svakim s ozbiljnošću. |
| **Odgovor** | `shape-qa` | Odgovori odgovorom ili jasno reci da razgovor to ne kaže, i riječima na koje se odgovor oslanja. |
| **JSON** | `shape-json` | Odgovori samo JSON-om, u obliku traženom gore. |
| **Kako se govorilo** | `language-as-spoken` | Piši na jeziku na kojem je razgovor vođen. |
| **Kako se govorilo, imenovano** | `language-as-spoken-named` | Isto, s imenovanjem jezika. |
| **Zadani jezik** | `language-named` | Piši na jeziku koji navedete. |

**Dodaj** na kraju popisa dodaje stavku.

## Zadane vrijednosti {#defaults}

**Vrati zadano** vraća svaki rječnik kakav je došao s programom, na trenutnom jeziku sučelja. Ono pod što su vaši razgovori već svrstani ostaje netaknuto.
