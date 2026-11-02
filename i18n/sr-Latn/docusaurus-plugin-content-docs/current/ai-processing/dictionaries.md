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
| **Prodaja** | `sales` | Prodaja, ponuda, pregovaranje ili dovršavanje kupovine — uključujući i kupca koji pita koliko nešto košta. |
| **Podrška** | `support` | Pomoć nekome oko proizvoda ili usluge koju već ima: kvar, pitanje o upotrebi, pritužba na to kako radi. |
| **Privatan** | `personal` | Nimalo poslovni — privatan razgovor koji se slučajno vodio na ovoj liniji. |
| **Drugo** | `other` | Poslovni, ali ni prodaja ni podrška: dobavljač, kolega, isporuka, pogrešan broj. Izaberite ovo umesto da nagađate između ostalih. |

Pritisnite **Dodaj** da dodate sopstvenu kategoriju.

## Oznake {#tags}

Etikete koje *sve mogu da važe za isti razgovor*. Pritisnite **Dodaj** da dodate jednu. Spisak počinje stavkama kao što su:

| Naziv | Kod | Koristi se za |
| --- | --- | --- |
| **Obećan povratni poziv** | `callback` | Neko u ovom pozivu obećao je da će uzvratiti poziv ili je tražio da ga pozovu. |
| **Pritužba** | `complaint` | Druga strana je iskazala nezadovoljstvo, bilo da je rešeno ili nije. |
| **Prosleđeno više** | `escalation` | Poziv je predat nekom drugom, ili je druga strana to tražila. |
| **Kupac VIP** | `vip` | Prema drugoj strani se postupalo kao prema važnom kupcu, ili je ona sama tako rekla za sebe. |

## Upozorenja {#red-flags}

Stvari koje traže pažnju, pronađene u razgovoru sa dokazom i vremenom — na primer *Ljutit kupac* ili *Opasnost od odlaska*. Upozorenja su nacrtana crveno u [prozoru Snimci](../interface/recordings.md) i svako nosi ozbiljnost: nisku, srednju ili visoku.

| Naziv | Kod | `severity` | Koristi se za |
| --- | --- | --- | --- |
| **Ljutit kupac** | `angry-customer` | `high` | Čulo se da je druga strana ljuta, da vređa ili da preti odlaskom. |
| **Opasnost od odlaska** | `churn-risk` | `high` | Pominjali su se raskid, neobnavljanje ili prelazak kod nekog drugog, ma koliko smireno. |
| **Dato obećanje** | `promise-made` | `medium` | Naša strana se obavezala na nešto određeno — datum, cenu, popravku, povraćaj novca. |
| **Osetljivi podaci** | `sensitive-data` | `high` | Naglas je pročitan broj kartice, lozinka, broj dokumenta ili bilo šta drugo čemu u snimku nije mesto. |
| **Konkurent** | `competitor` | `low` | Druga strana je imenovala nekog drugog ko nudi isto, ili nas s njim uporedila. |

## Uputstva {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Podešavanja → Rečnici: oblici odgovora i jezička uputstva" />

*Ono što se dodaje svakom uputstvu o obliku odgovora i jeziku na kome ga pisati.* Čuvaju se ovde kako bi svako uputstvo moglo da koristi isti tekst, a možete da ih menjate kao bilo koju drugu stavku — ili da napišete svoja, na primer *odgovaraj kratko* ili *nikada ne pominji cenu*, i označite ih pod **Pošalji i** na bilo kom uputstvu.

| Naziv | Kod | Šta kaže modelu |
| --- | --- | --- |
| **Proza** | `shape-plain` | Odgovaraj običnom prozom, bez JSON-a, spiskova i naslova. |
| **Stavke** | `shape-list` | Odgovaraj spiskom stvari koje treba uraditi, uz svaku ko i kada. |
| **Oznake** | `shape-labels` | Odgovori u JSON-u sa spiskom kodova i koliko je siguran u svaki, koristeći samo kodove sa spiska koji je dobio. |
| **Ocena** | `shape-score` | Odgovori ocenom, razlogom za nju i rečima na kojima se zasniva. |
| **Merila** | `shape-rubric` | Odgovori ukupnom ocenom i ocenom za svako merilo. |
| **Znaci** | `shape-flags` | Odgovori kodovima sa spiska, svakim sa ozbiljnošću. |
| **Odgovor** | `shape-qa` | Odgovori odgovorom ili jasno reci da razgovor to ne kaže, i rečima na koje se odgovor oslanja. |
| **JSON** | `shape-json` | Odgovori samo JSON-om, u obliku traženom gore. |
| **Kako se govorilo** | `language-as-spoken` | Piši na jeziku na kom je razgovor vođen. |
| **Kako se govorilo, imenovano** | `language-as-spoken-named` | Isto, sa imenovanjem jezika. |
| **Određen jezik** | `language-named` | Piši na jeziku koji navedete. |

**Dodaj** na vrhu spiska dodaje stavku.

## Podrazumevane vrednosti {#defaults}

**Vrati podrazumevano** vraća svaki rečnik kakav je došao sa programom, na trenutnom jeziku sučelja. Ono pod šta su vaši razgovori već svrstani ostaje netaknuto.

## Formati odgovora {#response-formats}

Blokovi prenose ugrađena uputstva. Opisuju formate odgovora; alternative su način zapisa, a ne izvršivi JSON primeri.

### Proza (`shape-plain`) {#shape-plain}

```text
Odgovorite običnom prozom. Ne koristite JSON, spiskove ni naslove.
```

### Stavke (`shape-list`) {#shape-list}

```text
Odgovorite samo JSON-om, tačno ovog oblika:
{"items": [{"text": "šta treba uraditi", "owner": "ko, ili prazno", "due": "do kada, ili prazno"}]}
Kada nema šta da se nabroji, upotrebite prazan niz. Ne pišite ništa izvan JSON-a.
```

### Oznake (`shape-labels`) {#shape-labels}

```text
Odgovorite samo JSON-om, tačno ovog oblika:
{"labels": [{"code": "kod sa spiska koji ste dobili", "confidence": 0.0}]}
Koristite samo kodove sa spiska. Kada nijedan ne odgovara, upotrebite prazan
niz. Ne izmišljajte kod i ne pišite ništa izvan JSON-a.
```

### Ocena (`shape-score`) {#shape-score}

```text
Odgovorite samo JSON-om, tačno ovog oblika:
{"score": 3, "rationale": "zašto taj broj, a ne za jedan veći",
 "evidence": [{"at_ms": 0, "quote": "reči na kojima to počiva"}]}
Ocena je ceo broj od 1 do 5. Ne pišite ništa izvan JSON-a.
```

### Merila (`shape-rubric`) {#shape-rubric}

```text
Odgovorite samo JSON-om, tačno ovog oblika:
{"overall": 3, "rationale": "zašto taj broj, a ne za jedan veći",
 "criteria": [{"name": "merilo onako kako vam je dato",
               "verdict": "pass" ili "weak" ili "fail" ili "n/a",
               "note": "jedna rečenica"}]}
Ocenite svako dato merilo i nijedno drugo. Ukupna ocena je ceo broj
od 1 do 5. Ne pišite ništa izvan JSON-a.
```

### Znaci (`shape-flags`) {#shape-flags}

```text
Odgovorite samo JSON-om, tačno ovog oblika:
{"flags": [{"code": "kod sa spiska koji ste dobili",
            "severity": "low" ili "medium" ili "high",
            "evidence": "reči na kojima to počiva",
            "at_ms": 0}]}
Koristite samo kodove sa spiska i svaki podignite najviše jednom. Kada ništa ne
odgovara, upotrebite prazan niz. Ne pišite ništa izvan JSON-a.
```

### Odgovor (`shape-qa`) {#shape-qa}

```text
Odgovorite samo JSON-om, tačno ovog oblika:
{"answer": "vaš odgovor, ili otvoreno to da razgovor ne kaže",
 "citations": [{"at_ms": 0, "quote": "reči na kojima odgovor počiva"}]}
Ne odgovarajte ni iz čega osim iz razgovora. Ne pišite ništa izvan JSON-a.
```

### JSON (`shape-json`) {#shape-json}

```text
Odgovorite samo JSON-om, u obliku traženom iznad. Ne pišite ništa izvan JSON-a.
```

### Kako se govorilo (`language-as-spoken`) {#language-as-spoken}

```text
Napišite svoj odgovor na istom jeziku na kome je bio razgovor.
```

### Kako se govorilo, imenovano (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Napišite svoj odgovor na istom jeziku na kome je bio razgovor, a to je {language}.
```

### Određen jezik (`language-named`) {#language-named}

```text
Napišite svoj odgovor na ovom jeziku: {language}.
```
