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
| **Prodaja** | `sales` | Prodaja, ponuda, pregovaranje ili praćenje kupnje — uključujući kupca koji pita koliko nešto stoji. |
| **Podrška** | `support` | Pomoć nekome oko proizvoda ili usluge koju već ima: kvar, pitanje o korištenju, prigovor na to kako radi. |
| **Privatan** | `personal` | Uopće nije poslovan — privatan razgovor koji se slučajno vodio na ovoj liniji. |
| **Ostalo** | `other` | Poslovan, ali ni prodaja ni podrška: dobavljač, kolega, dostava, kriv broj. Odaberite ovo umjesto da nagađate između ostalih. |

Pritisnite **Dodaj** da dodate vlastitu kategoriju.

## Oznake {#tags}

Naljepnice koje *sve mogu vrijediti za isti razgovor*. Pritisnite **Dodaj** da dodate jednu. Popis počinje stavkama poput:

| Naziv | Kod | Koristi se za |
| --- | --- | --- |
| **Obećan povratni poziv** | `callback` | Netko je u ovom pozivu obećao nazvati natrag ili tražio da ga nazovu. |
| **Prigovor** | `complaint` | Druga je strana izrazila nezadovoljstvo, bez obzira na to je li riješeno. |
| **Proslijeđeno više** | `escalation` | Poziv je predan nekome drugom ili je druga strana to zatražila. |
| **VIP kupac** | `vip` | S drugom se stranom postupalo kao s važnim kupcem ili je sama rekla da to jest. |

## Upozoravajući signali {#red-flags}

Stvari koje traže pozornost, pronađene u razgovoru s dokazom i vremenom — primjerice *Ljutit kupac* ili *Opasnost od odlaska*. Upozoravajući signali nacrtani su crveno u [prozoru Snimke](../interface/recordings.md) i svaki nosi ozbiljnost: nisku, srednju ili visoku.

| Naziv | Kod | `severity` | Koristi se za |
| --- | --- | --- | --- |
| **Ljutit kupac** | `angry-customer` | `high` | Čulo se da je druga strana ljutita, da vrijeđa ili prijeti odlaskom. |
| **Opasnost od odlaska** | `churn-risk` | `high` | Spomenuto je otkazivanje, neproduljivanje ili prelazak nekom drugom, ma koliko smireno. |
| **Dano obećanje** | `promise-made` | `medium` | Naša se strana obvezala na nešto određeno — datum, cijenu, popravak, povrat novca. |
| **Osjetljivi podaci** | `sensitive-data` | `high` | Naglas je pročitan broj kartice, lozinka, broj dokumenta ili bilo što drugo čemu nije mjesto u snimci. |
| **Konkurent** | `competitor` | `low` | Druga je strana imenovala nekog drugog tko nudi isto ili nas s njim usporedila. |

## Upute {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Postavke → Rječnici: oblici odgovora i jezične upute" />

*Ono što se dodaje svakoj uputi o obliku odgovora i jeziku na kojem ga napisati.* Čuvaju se ovdje kako bi svaka uputa mogla koristiti isti tekst, a možete ih mijenjati kao bilo koju drugu stavku — ili napisati svoje, primjerice *odgovaraj kratko* ili *nikad ne spominji cijenu*, i označiti ih pod **Šalji i** na bilo kojoj uputi.

| Naziv | Kod | Što kaže modelu |
| --- | --- | --- |
| **Proza** | `shape-plain` | Odgovaraj običnom prozom, bez JSON-a, popisa i naslova. |
| **Stavke** | `shape-list` | Odgovaraj popisom stvari koje treba napraviti, uz svaku tko i kada. |
| **Oznake** | `shape-labels` | Odgovori u JSON-u s popisom kodova i koliko je siguran u svaki, koristeći samo kodove s popisa koji je dobio. |
| **Ocjena** | `shape-score` | Odgovori ocjenom, razlogom za nju i riječima na kojima se temelji. |
| **Mjerila** | `shape-rubric` | Odgovori ukupnom ocjenom i ocjenom za svako mjerilo. |
| **Signali** | `shape-flags` | Odgovori kodovima s popisa, svakim s ozbiljnošću. |
| **Odgovor** | `shape-qa` | Odgovori odgovorom ili jasno reci da razgovor to ne kaže, i riječima na koje se odgovor oslanja. |
| **JSON** | `shape-json` | Odgovori samo JSON-om, u obliku traženom gore. |
| **Kako se govorilo** | `language-as-spoken` | Piši na jeziku na kojem je razgovor vođen. |
| **Kako se govorilo, imenovano** | `language-as-spoken-named` | Isto, s imenovanjem jezika. |
| **Zadani jezik** | `language-named` | Piši na jeziku koji navedete. |

**Dodaj** na vrhu popisa dodaje stavku.

## Zadane vrijednosti {#defaults}

**Vrati zadano** vraća svaki rječnik kakav je došao s programom, na trenutnom jeziku sučelja. Ono pod što su vaši razgovori već svrstani ostaje netaknuto.

## Formati odgovora {#response-formats}

Blokovi prenose ugrađene upute. Opisuju formate odgovora; alternative su način zapisa, a ne izvršivi JSON primjeri.

### Proza (`shape-plain`) {#shape-plain}

```text
Odgovorite običnom prozom. Ne koristite JSON, popise ni naslove.
```

### Stavke (`shape-list`) {#shape-list}

```text
Odgovorite samo JSON-om, točno ovog oblika:
{"items": [{"text": "što treba učiniti", "owner": "tko, ili prazno", "due": "do kada, ili prazno"}]}
Kad nema što nabrojiti, upotrijebite prazno polje. Ne pišite ništa izvan JSON-a.
```

### Oznake (`shape-labels`) {#shape-labels}

```text
Odgovorite samo JSON-om, točno ovog oblika:
{"labels": [{"code": "šifra s popisa koji ste dobili", "confidence": 0.0}]}
Koristite samo šifre s popisa. Kad nijedna ne odgovara, upotrijebite prazno
polje. Ne izmišljajte šifru i ne pišite ništa izvan JSON-a.
```

### Ocjena (`shape-score`) {#shape-score}

```text
Odgovorite samo JSON-om, točno ovog oblika:
{"score": 3, "rationale": "zašto taj broj, a ne jedan viši",
 "evidence": [{"at_ms": 0, "quote": "riječi na kojima se to temelji"}]}
Ocjena je cijeli broj od 1 do 5. Ne pišite ništa izvan JSON-a.
```

### Mjerila (`shape-rubric`) {#shape-rubric}

```text
Odgovorite samo JSON-om, točno ovog oblika:
{"overall": 3, "rationale": "zašto taj broj, a ne jedan viši",
 "criteria": [{"name": "mjerilo onako kako vam je zadano",
               "verdict": "pass" ili "weak" ili "fail" ili "n/a",
               "note": "jedna rečenica"}]}
Prosudite svako zadano mjerilo i nijedno drugo. Ukupna je ocjena cijeli broj
od 1 do 5. Ne pišite ništa izvan JSON-a.
```

### Signali (`shape-flags`) {#shape-flags}

```text
Odgovorite samo JSON-om, točno ovog oblika:
{"flags": [{"code": "šifra s popisa koji ste dobili",
            "severity": "low" ili "medium" ili "high",
            "evidence": "riječi na kojima se to temelji",
            "at_ms": 0}]}
Koristite samo šifre s popisa i svaku podignite najviše jednom. Kad ništa ne
odgovara, upotrijebite prazno polje. Ne pišite ništa izvan JSON-a.
```

### Odgovor (`shape-qa`) {#shape-qa}

```text
Odgovorite samo JSON-om, točno ovog oblika:
{"answer": "vaš odgovor ili otvoreno to da razgovor ne kaže",
 "citations": [{"at_ms": 0, "quote": "riječi na kojima odgovor počiva"}]}
Ne odgovarajte ni iz čega osim iz razgovora. Ne pišite ništa izvan JSON-a.
```

### JSON (`shape-json`) {#shape-json}

```text
Odgovorite samo JSON-om, u obliku traženom gore. Ne pišite ništa izvan JSON-a.
```

### Kako se govorilo (`language-as-spoken`) {#language-as-spoken}

```text
Odgovor napišite na istom jeziku na kojem je bio razgovor.
```

### Kako se govorilo, imenovano (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Odgovor napišite na istom jeziku na kojem je bio razgovor, a to je {language}.
```

### Zadani jezik (`language-named`) {#language-named}

```text
Odgovor napišite na ovom jeziku: {language}.
```
