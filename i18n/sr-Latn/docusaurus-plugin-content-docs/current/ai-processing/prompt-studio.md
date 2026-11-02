---
title: Personal Prompt Studio
sidebar_position: 3
description: Uputstva koja obrađuju vaše razgovore, pravila koja ih pokreću i kako da ih prilagodite sebi.
---

**Personal Prompt Studio** je deo AI Softphonea koji obrađuje vaše razgovore na vaš način. Obradu rade uputstva: program dolazi sa jedanaest, spremnih za korišćenje čim su povezani prepis i jezički model, a vi možete da ih menjate običnim jezikom, udvostručite i dodate sopstvena. Navedena su pod **Uputstva** u [Podešavanja → Obrada](processing.md#prompts).

Vaš LLM, vaš ključ, vaša kontrola: povežite model koji vam je draži sa sopstvenim ključem, preko podržane usluge ili kompatibilnog API-ja — ili model postavljen unutar vaše organizacije. Kada i [prepisivanje](transcription.md#your-own-models) radi na sopstvenom hardveru, i zvuk i prepisi ostaju u vašem okruženju.

<Shot name="12b_settings_processing_prompts" alt="Spisak uputstava u Podešavanja → Obrada" />

## Uputstva koja dolaze sa programom {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 sadrži jedanaest upita za završene razgovore i četiri pomoćnika uživo. Ispod su ugrađeni tekstovi za ovaj jezik; jezičke verzije mogu da se razlikuju.

| Uputstvo | `code` | Oblik | Šta piše |
| --- | --- | --- | --- |
| **Sažetak** | `summary` | Proza | Glavne tačke, odluke i sledeće korake u jednom kratkom pasusu. |
| **Sažetak u jednom redu** | `super-summary` | Proza | Kratak naslov po kom ćete razgovor prepoznati na spisku. |
| **Zadaci** | `action-items` | Stavke | Ko je pristao da uradi šta i kada, sa rečima koje je izgovorio. |
| **Teme** | `topics` | Stavke | Teme koje su obrađene, u nekoliko reči. |
| **Imena i brojevi** | `entities` | JSON | Ljudi, firme, datumi, iznosi i reference. |
| **Kategorija** | `categorise` | Oznake | Svrstava razgovor u jednu od vaših [kategorija](dictionaries.md). |
| **Oznake** | `tags` | Oznake | Stavlja na njega vaše [oznake](dictionaries.md) kako bi kasnije mogao da se pronađe. |
| **Upozorenja** | `red-flags` | Znaci | Problemi, sa dokazom i vremenom u razgovoru. |
| **Pitanje o ovom pozivu** | `qa` | Odgovor | Odgovara na pitanje koje postavite o jednom razgovoru, na osnovu njegovog prepisa. |
| **Kvalitet prodaje** | `sales-quality` | Merila | Pregleda razgovor prema prodajnim merilima koja možete da uređujete. |
| **Kvalitet podrške** | `support-quality` | Merila | Ocenjuje koliko je dobro problem shvaćen i rešen. |

Oblici su stalni oblici odgovora, i upravo to programu omogućava da ga sačuva i kasnije u njemu pretražuje: **Oznake** su kodovi sa jednog od vaših spiskova, **Znaci** su kodovi sa ozbiljnošću, **Merila** su ocena sa razlogom i ocenom za svako merilo, **Odgovor** je odgovor sa rečima na koje se oslanja. Uputstva koja modelu govore oblik čuvaju se u [Rečnicima](dictionaries.md#instructions).

I pomoćnici [šaptača](../interface/prompter.md) su uputstva, koja se izvršavaju na svakoj replici dok poziv traje, a ne na završenom razgovoru. Čuvaju se na sopstvenom spisku, pod [Pomoćnici](prompter.md#assistants) u **Podešavanja → Šaptač**.

Pozivi upućeni u AI Softphoneu, sastanci [uhvaćeni](/capture/) sa računara i uvezeni snimci prolaze kroz ista uputstva čim imaju prepis.

Zadaci beleže šta je dogovoreno — ne šalju poruke, ne zakazuju posete i ne otvaraju zahteve umesto vas.

## Prilagođavanje {#making-it-yours}

- Promenite šta uputstvo traži, običnim jezikom: šta traži, oblik odgovora i jezik na kom odgovara.
- Udvostručite uputstvo da isprobate varijantu.
- Izaberite model za svako uputstvo — na sopstvenom računaru ili u oblaku.
- Podesite redosled kojim se uputstva izvode, uključujte ih i isključujte i učinite ih uslovnim — to se radi [pravilima](processing.md#rules): na primer, pregled prodaje izvodi se samo na pozivima svrstanim kao **Prodaja**.
- Vodite sopstvene kategorije, oznake i upozorenja u [Rečnicima](dictionaries.md).
- Ograničite trošak [mesečnim granicama](processing.md#spending).

Izvorna uputstva i pravila mogu da se vrate sa **Vrati podrazumevano** pod **Podrazumevano** u [Podešavanja → Obrada](processing.md#defaults).

## Uloga modela {#role-and-task}

`system` određuje ponašanje modela, a `body` opisuje zadatak. Oblik i jezik odgovora daju se odvojeno kroz uputstva iz spiskova.

Prazan spisak zadataka ili upozorenja može biti ispravan rezultat. Ne smeju se izmišljati izvršioci i rokovi koji nedostaju. Odgovori na pitanja moraju se zasnivati samo na transkriptu.

[Formati odgovora](dictionaries.md#response-formats)

## Zamenske oznake {#placeholders}

Element upita koji se zamenjuje podacima razgovora.

| Zamenska oznaka | Značenje |
| --- | --- |
| `{{transcript}}` | Transkript, jedna replika po redu, vreme u milisekundama |
| `{{duration}}` | Trajanje razgovora |
| `{{direction}}` | Dolazni ili odlazni poziv |
| `{{party}}` | Ime kontakta ili broj |
| `{{language}}` | Jezik odgovora |
| `{{question}}` | Pitanje korisnika |
| `{{categories}}` | Spisak kategorija |
| `{{tags}}` | Spisak oznaka |
| `{{red_flags}}` | Spisak upozorenja |
| `{{artifact:summary}}` | Prethodno napravljen sažetak |
| `{{conversation}}` | Kontekst koji je prikupio pomoćnik uživo |
| `{{reply}}` | Poslednja replika sagovornika; samo za pomoćnika uživo |

Pokrenite `summary` pre `super-summary`, koji koristi `{{artifact:summary}}`. Pokrenite `categorise` pre ocene kvaliteta: `sales-quality` zahteva kategoriju `sales`, a `support-quality` kategoriju `support`.

[Ugrađeni pomoćnici](prompter.md#assistant-templates)

## Standardni tekstovi upita {#standard-templates}

AI Softphone 1.1.11 sadrži jedanaest upita za završene razgovore i četiri pomoćnika uživo. Ispod su ugrađeni tekstovi za ovaj jezik; jezičke verzije mogu da se razlikuju.

### Sažetak (`summary`) {#summary}

**Oblik odgovora:** `plain`.

**Uloga (`system`)**

```text
Čitate prepise telefonskih razgovora i pišete o njima kratke, činjenične sažetke. Nikada ne nagađate ono što nije rečeno i nikada ne dodajete savete.
```

**Zadatak (`body`)**

```text
Sažmite ovaj telefonski razgovor u jedan kratak pasus: o čemu je bio, šta je odlučeno i šta sledi. Trajao je {{duration}} i bio je {{direction}}, sa {{party}}.

{{transcript}}
```

### Sažetak u jednom redu (`super-summary`) {#super-summary}

**Oblik odgovora:** `plain`.

**Uloga (`system`)**

```text
Čitate prepise telefonskih razgovora i svaki svodite na jedan jedini izraz. Nikada ne nagađate i nikada ne dodajete savete.
```

**Zadatak (`body`)**

```text
Svedite ovaj telefonski razgovor na jedan izraz od najviše dvanaest reči — takav kakav bi stajao u tabeli pored imena pozivaoca. Bez tačke, bez navodnika.

{{artifact:summary}}

{{transcript}}
```

### Zadaci (`action-items`) {#action-items}

**Oblik odgovora:** `list`.

**Uloga (`system`)**

```text
Čitate prepise telefonskih razgovora i nabrajate na šta se ko obavezao. Nabrajate samo ono što je zaista rečeno; nikada ne izmišljate zadatak, nosioca ni rok.
```

**Zadatak (`body`)**

```text
Nabrojte na šta se bilo ko u ovom pozivu obavezao. Navedite ko to treba da uradi tamo gde je rečeno, i do kada tamo gde je rečeno. Ako se niko ni na šta nije obavezao, odgovorite praznim spiskom.

{{transcript}}
```

### Teme (`topics`) {#topics}

**Oblik odgovora:** `list`.

**Uloga (`system`)**

```text
Čitate prepise telefonskih razgovora i imenujete o čemu su bili.
```

**Zadatak (`body`)**

```text
Nabrojte ono što je ovaj poziv zaista obuhvatio, najviše šest stvari, svaka u nekoliko reči. Nosioca i rok ostavite prazne — ovde ne znače ništa.

{{transcript}}
```

### Imena i brojevi (`entities`) {#entities}

**Oblik odgovora:** `json`.

**Uloga (`system`)**

```text
Čitate prepise telefonskih razgovora i izdvajate ono što je u njima imenovano. Nikada ne nagađate pisanje i nikada ne dodajete ono što nije rečeno.
```

**Zadatak (`body`)**

```text
Izdvojte ono što je u ovom pozivu imenovano, kao JSON tačno ovog oblika:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Svako je spisak niski, zapisanih onako kako su izgovorene. Radije ostavite spisak prazan nego da nagađate.

{{transcript}}
```

### Kategorija (`categorise`) {#categorise}

**Oblik odgovora:** `labels`.

**Uloga (`system`)**

```text
Svrstavate telefonske pozive u jednu od zadatih kategorija. Birate sa spiska i ni iz čega drugog.
```

**Zadatak (`body`)**

```text
Svrstajte ovaj poziv u tačno jednu od ovih kategorija. Odgovorite njenim kodom.

{{categories}}
{{transcript}}
```

### Oznake (`tags`) {#tags}

**Oblik odgovora:** `labels`.

**Uloga (`system`)**

```text
Označavate telefonske pozive zadatim oznakama. Birate sa spiska i ni iz čega drugog, a oznaku radije izostavljate nego što je natežete.
```

**Zadatak (`body`)**

```text
Koje od ovih važe za ovaj poziv? Odgovorite njihovim kodovima, ili praznim spiskom ako nijedna.

{{tags}}
{{transcript}}
```

### Upozorenja (`red-flags`) {#red-flags}

**Oblik odgovora:** `flags`.

**Uloga (`system`)**

```text
Čitate prepise telefonskih razgovora i podižete samo ono što vam je zadato da tražite. Navodite reči na kojima svako počiva i ne podižete ništa što ne možete da navedete.
```

**Zadatak (`body`)**

```text
Podignite ona od ovih koja ovaj poziv pokazuje. Za svako navedite reči na kojima počiva i trenutak u milisekundama kada su izgovorene. Radije ne podignite ništa nego da natežete odrednicu.

{{red_flags}}
{{transcript}}
```

### Pitanje o ovom pozivu (`qa`) {#qa}

**Oblik odgovora:** `qa`.

**Uloga (`system`)**

```text
Odgovarate na pitanja o jednom telefonskom pozivu, iz njegovog prepisa i ni iz čega drugog. Tamo gde razgovor ne kaže, to kažete otvoreno umesto da nagađate.
```

**Zadatak (`body`)**

```text
{{question}}

{{transcript}}
```

### Kvalitet prodaje (`sales-quality`) {#sales-quality}

**Oblik odgovora:** `rubric`.

**Uloga (`system`)**

```text
Ocenjujete kako je prodavac vodio telefonski razgovor. Sudite samo po onome što prepis pokazuje, nikada ne pretpostavljate šta je bilo pre ili posle njega, i podjednako ste strogi prema razgovoru koji je prošao dobro kao i prema onom koji nije.
```

**Zadatak (`body`)**

```text
Ocenite našu stranu u ovom pozivu — operatera — po ovim merilima i ni po jednom drugom:
- pozdrav: da li se predstavio i imenovao firmu?
- ispitivanje: da li je saznao šta je kupac zapravo hteo?
- prigovori: da li je odgovorio na ono što je kupac izneo, umesto da priča mimo toga?
- vrednost: da li je rekao šta kupac dobija, a ne samo koliko košta?
- sledeći korak: da li se poziv završio nečim određenim dogovorenim?

{{transcript}}
```

### Kvalitet podrške (`support-quality`) {#support-quality}

**Oblik odgovora:** `rubric`.

**Uloga (`system`)**

```text
Ocenjujete kako je radnik podrške vodio telefonski razgovor. Sudite samo po onome što prepis pokazuje, i više vagate da li je kupčev problem zaista rešen nego koliko je razgovor bio prijatan.
```

**Zadatak (`body`)**

```text
Ocenite našu stranu u ovom pozivu — operatera — po ovim merilima i ni po jednom drugom:
- pozdrav: da li se predstavio i potvrdio s kim razgovara?
- razumevanje: da li je utvrdio šta zapravo nije u redu pre nego što je odgovorio?
- rešenje: da li je problem rešen ili je dat određen sledeći korak?
- ton: da li je ostao smiren i učtiv, naročito tamo gde kupac nije?
- završetak: da li je proverio da je kupac zadovoljan pre nego što je završio?

{{transcript}}
```
