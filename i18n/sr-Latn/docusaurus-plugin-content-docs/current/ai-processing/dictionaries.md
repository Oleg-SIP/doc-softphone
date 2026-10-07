---
title: Rečnici
sidebar_position: 4
description: Vaše sopstvene kategorije, oznake i upozorenja — reči pod koje se svrstavaju vaši razgovori.
---

**Podešavanja → Rečnici** sadrži reči pod koje razgovor može da se svrsta, kojima može da se označi ili zbog kojih može da se upozori na njega. Ovi spiskovi su ono što se pokazuje modelima i između čega moraju da biraju, pa je odgovor uvek nešto što kasnije možete da potražite.

<Shot name="13_settings_dictionaries" alt="Podešavanja → Rečnici" />

**Prikaži obrisane** prikazuje stavke koje ste obrisali.

Svaka stavka je naziv, kratak kod sitnim slovima i opis koji modelu kaže kada da je izabere. Kod je ono što se čuva i što vraća [REST API](../integration/rest-api.md#taxonomy-and-settings), pa ostaje isti kada stavku preimenujete.

## Kategorije {#categories}

O čemu je bio razgovor; **za svaki razgovor bira se jedna**. Program počinje sa četiri:

| Naziv | Kod | Koristi se za |
| --- | --- | --- |
| **Prodaja** | `sales` | Prodaju, ponude, pregovore ili nastavak kupovine — uključujući kupca koji pita koliko nešto košta. |
| **Podrška** | `support` | Pomoć nekome sa proizvodom ili uslugom koju već ima: kvar, pitanje o korišćenju, pritužba na to kako radi. |
| **Privatan** | `personal` | Uopšte nije posao — privatan razgovor koji se slučajno vodio na ovoj liniji. |
| **Drugo** | `other` | Posao, ali ni prodaja ni podrška: dobavljač, kolega, dostava, pogrešan broj. Izaberite ovo umesto nagađanja između ostalih. |

Pritisnite **Dodaj** da dodate sopstvenu kategoriju.

## Oznake {#tags}

Etikete koje *sve mogu da važe za isti razgovor*. Pritisnite **Dodaj** da dodate jednu. Spisak počinje stavkama kao što su:

| Naziv | Kod | Koristi se za |
| --- | --- | --- |
| **Obećan povratni poziv** | `callback` | Neko u ovom pozivu obećao je da će pozvati nazad ili zamolio da ga pozovu. |
| **Pritužba** | `complaint` | Druga strana je izrazila nezadovoljstvo, bez obzira na to da li je rešeno. |
| **Prosleđeno više** | `escalation` | Poziv je predat nekom drugom ili je druga strana to zatražila. |
| **Kupac VIP** | `vip` | Sa drugom stranom se postupalo kao sa važnim klijentom ili je sama rekla da to jeste. |

## Upozorenja {#red-flags}

Stvari koje traže pažnju, pronađene u razgovoru sa dokazom i vremenom — na primer *Ljutit kupac* ili *Opasnost od odlaska*. Upozorenja su nacrtana crveno u [prozoru Snimci](../interface/recordings.md) i svako nosi ozbiljnost: nisku, srednju ili visoku.

## Oblici odgovora i jezik {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Podešavanja → Rečnici: oblici odgovora i jezička uputstva" />

Niže na kartici nalaze se uputstva od kojih se sklapaju uputstva za modele. Čuvaju se ovde kako bi svako uputstvo moglo da koristi isti tekst, a možete da ih menjate kao bilo koju drugu stavku.

| Naziv | Kod | Šta kaže modelu |
| --- | --- | --- |
| **Oznake** | `shape-labels` | Odgovori u JSON-u sa spiskom kodova i koliko je siguran u svaki, koristeći samo kodove sa spiska koji je dobio. |
| **Ocena** | `shape-score` | Odgovori ocenom, razlogom za nju i rečima na kojima se zasniva. |
| **Merila** | `shape-rubric` | Odgovori ukupnom ocenom i ocenom za svako merilo. |
| **Znaci** | `shape-flags` | Odgovori kodovima sa spiska, svakim sa ozbiljnošću. |
| **Odgovor** | `shape-qa` | Odgovori odgovorom ili jasno reci da razgovor to ne kaže, i rečima na koje se odgovor oslanja. |
| **JSON** | `shape-json` | Odgovori samo JSON-om, u obliku traženom gore. |
| **Kako se govorilo** | `language-as-spoken` | Piši na jeziku na kom je razgovor vođen. |
| **Kako se govorilo, imenovano** | `language-as-spoken-named` | Isto, sa imenovanjem jezika. |
| **Određen jezik** | `language-named` | Piši na jeziku koji navedete. |

**Dodaj** na kraju spiska dodaje stavku.

## Podrazumevane vrednosti {#defaults}

**Vrati podrazumevano** vraća svaki rečnik kakav je došao sa programom, na trenutnom jeziku sučelja. Ono pod šta su vaši razgovori već svrstani ostaje netaknuto.
