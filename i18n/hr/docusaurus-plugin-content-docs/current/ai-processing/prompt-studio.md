---
title: Personal Prompt Studio
sidebar_position: 3
description: Upute koje obrađuju vaše razgovore, pravila koja ih pokreću i kako ih prilagoditi sebi.
---

**Personal Prompt Studio** je dio AI Softphonea koji obrađuje vaše razgovore na vaš način. Obradu rade upute: program dolazi s jedanaest, spremnih za korištenje čim su povezani prijepis i jezični model, a vi ih možete mijenjati običnim jezikom, udvostručiti i dodati vlastite. Navedene su pod **Upute** u [Postavke → Obrada](processing.md#prompts).

Vaš LLM, vaš ključ, vaša kontrola: povežite model koji vam je draži s vlastitim ključem, preko podržane usluge ili kompatibilnog API-ja — ili model postavljen unutar vaše organizacije. Kad i [prijepis](transcription.md#your-own-models) radi na vlastitom hardveru, i zvuk i prijepisi ostaju u vašem okruženju.

<Shot name="12b_settings_processing_prompts" alt="Popis uputa u Postavke → Obrada" />

## Upute koje dolaze s programom {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 uključuje jedanaest upita za završene razgovore i četiri pomoćnika uživo. U nastavku su ugrađeni tekstovi za ovaj jezik; jezične inačice mogu se razlikovati.

| Uputa | `code` | Oblik | Što piše |
| --- | --- | --- | --- |
| **Sažetak** | `summary` | Proza | Glavne točke, odluke i sljedeće korake u jednom kratkom odlomku. |
| **Sažetak u jednom retku** | `super-summary` | Proza | Kratak naslov po kojem ćete razgovor prepoznati na popisu. |
| **Zadaci** | `action-items` | Stavke | Tko je pristao što učiniti i kada, s riječima koje je izgovorio. |
| **Teme** | `topics` | Stavke | Teme koje su obrađene, u nekoliko riječi. |
| **Imena i brojevi** | `entities` | JSON | Ljudi, tvrtke, datumi, iznosi i reference. |
| **Kategorija** | `categorise` | Oznake | Svrstava razgovor u jednu od vaših [kategorija](dictionaries.md). |
| **Oznake** | `tags` | Oznake | Stavlja na njega vaše [oznake](dictionaries.md) kako bi se kasnije mogao pronaći. |
| **Upozoravajući signali** | `red-flags` | Signali | Problemi, s dokazom i vremenom u razgovoru. |
| **Pitanje o ovom pozivu** | `qa` | Odgovor | Odgovara na pitanje koje postavite o jednom razgovoru, na temelju njegova prijepisa. |
| **Kvaliteta prodaje** | `sales-quality` | Mjerila | Pregledava razgovor prema prodajnim mjerilima koja možete uređivati. |
| **Kvaliteta podrške** | `support-quality` | Mjerila | Prosuđuje koliko je dobro problem shvaćen i riješen. |

Oblici su stalni oblici odgovora, i upravo to programu omogućuje da ga sačuva i kasnije u njemu pretražuje: **Oznake** su kodovi s jednog od vaših popisa, **Signali** su kodovi s ozbiljnošću, **Mjerila** su ocjena s razlogom i ocjenom za svako mjerilo, **Odgovor** je odgovor s riječima na koje se oslanja. Upute koje modelu govore oblik čuvaju se u [Rječnicima](dictionaries.md#instructions).

I pomoćnici [šaptača](../interface/prompter.md) su upute, koje se izvode na svakoj replici dok poziv traje, a ne na završenom razgovoru. Čuvaju se na vlastitom popisu, pod [Pomoćnici](prompter.md#assistants) u **Postavke → Šaptač**.

Pozivi upućeni u AI Softphoneu, sastanci [uhvaćeni](/capture/) s računala i uvezene snimke prolaze kroz iste upute čim imaju prijepis.

Zadaci bilježe što je dogovoreno — ne šalju poruke, ne rezerviraju posjete i ne otvaraju zahtjeve umjesto vas.

## Prilagodba {#making-it-yours}

- Promijenite što uputa traži, običnim jezikom: što traži, oblik odgovora i jezik na kojem odgovara.
- Udvostručite uputu da isprobate inačicu.
- Odaberite model za svaku uputu — na vlastitom računalu ili u oblaku.
- Postavite redoslijed kojim se upute izvode, uključujte ih i isključujte te ih učinite uvjetnima — to se radi [pravilima](processing.md#rules): primjerice, pregled prodaje izvodi se samo na pozivima svrstanima kao **Prodaja**.
- Vodite vlastite kategorije, oznake i upozoravajuće signale u [Rječnicima](dictionaries.md).
- Ograničite trošak [mjesečnim granicama](processing.md#spending).

Izvorne upute i pravila mogu se vratiti s **Vrati zadano** pod **Zadane vrijednosti** u [Postavke → Obrada](processing.md#defaults).

## Uloga modela {#role-and-task}

`system` određuje ponašanje modela, a `body` opisuje zadatak. Oblik i jezik odgovora daju se zasebno putem uputa iz popisa.

Prazan popis zadataka ili upozorenja može biti ispravan rezultat. Ne smiju se izmišljati nedostajući izvršitelji i rokovi. Odgovori na pitanja moraju se temeljiti samo na transkriptu.

[Formati odgovora](dictionaries.md#response-formats)

## Zamjenske oznake {#placeholders}

Element upita koji se zamjenjuje podacima razgovora.

| Zamjenska oznaka | Značenje |
| --- | --- |
| `{{transcript}}` | Transkript, jedna replika po retku, vrijeme u milisekundama |
| `{{duration}}` | Trajanje razgovora |
| `{{direction}}` | Dolazni ili odlazni poziv |
| `{{party}}` | Ime kontakta ili broj |
| `{{language}}` | Jezik odgovora |
| `{{question}}` | Korisnikovo pitanje |
| `{{categories}}` | Popis kategorija |
| `{{tags}}` | Popis oznaka |
| `{{red_flags}}` | Popis upozorenja |
| `{{artifact:summary}}` | Prethodno izrađen sažetak |
| `{{conversation}}` | Kontekst koji je prikupio pomoćnik uživo |
| `{{reply}}` | Posljednja replika sugovornika; samo za pomoćnika uživo |

Pokrenite `summary` prije `super-summary`, koji koristi `{{artifact:summary}}`. Pokrenite `categorise` prije procjene kvalitete: `sales-quality` zahtijeva kategoriju `sales`, a `support-quality` kategoriju `support`.

[Ugrađeni pomoćnici](prompter.md#assistant-templates)

## Standardni tekstovi upita {#standard-templates}

AI Softphone 1.1.11 uključuje jedanaest upita za završene razgovore i četiri pomoćnika uživo. U nastavku su ugrađeni tekstovi za ovaj jezik; jezične inačice mogu se razlikovati.

### Sažetak (`summary`) {#summary}

**Oblik odgovora:** `plain`.

**Uloga (`system`)**

```text
Čitate prijepise telefonskih razgovora i pišete o njima kratke, činjenične sažetke. Nikada ne nagađate ono što nije rečeno i nikada ne dodajete savjete.
```

**Zadatak (`body`)**

```text
Sažmite ovaj telefonski razgovor u jedan kratak odlomak: o čemu se radilo, što je odlučeno i što slijedi. Trajao je {{duration}} i bio je {{direction}}, s {{party}}.

{{transcript}}
```

### Sažetak u jednom retku (`super-summary`) {#super-summary}

**Oblik odgovora:** `plain`.

**Uloga (`system`)**

```text
Čitate prijepise telefonskih razgovora i svaki svodite na jedan jedini izraz. Nikada ne nagađate i nikada ne dodajete savjete.
```

**Zadatak (`body`)**

```text
Svedite ovaj telefonski razgovor na jedan izraz od najviše dvanaest riječi — takav kakav bi stajao u tablici uz ime pozivatelja. Bez točke, bez navodnika.

{{artifact:summary}}

{{transcript}}
```

### Zadaci (`action-items`) {#action-items}

**Oblik odgovora:** `list`.

**Uloga (`system`)**

```text
Čitate prijepise telefonskih razgovora i nabrajate na što se tko obvezao. Nabrajate samo ono što je doista rečeno; nikada ne izmišljate zadatak, nositelja ni rok.
```

**Zadatak (`body`)**

```text
Nabrojite na što se tko god u ovom pozivu obvezao. Navedite tko to treba učiniti ondje gdje je rečeno i do kada ondje gdje je rečeno. Ako se nitko ni na što nije obvezao, odgovorite praznim popisom.

{{transcript}}
```

### Teme (`topics`) {#topics}

**Oblik odgovora:** `list`.

**Uloga (`system`)**

```text
Čitate prijepise telefonskih razgovora i imenujete o čemu su bili.
```

**Zadatak (`body`)**

```text
Nabrojite ono što je ovaj poziv doista obuhvatio, najviše šest stvari, svaku u nekoliko riječi. Nositelja i rok ostavite prazne — ovdje ne znače ništa.

{{transcript}}
```

### Imena i brojevi (`entities`) {#entities}

**Oblik odgovora:** `json`.

**Uloga (`system`)**

```text
Čitate prijepise telefonskih razgovora i izdvajate ono što je u njima imenovano. Nikada ne nagađate pisanje i nikada ne dodajete ono što nije rečeno.
```

**Zadatak (`body`)**

```text
Izdvojite ono što je u ovom pozivu imenovano, kao JSON točno ovog oblika:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Svako je popis nizova, zapisanih onako kako su izgovoreni. Radije ostavite popis prazan nego da nagađate.

{{transcript}}
```

### Kategorija (`categorise`) {#categorise}

**Oblik odgovora:** `labels`.

**Uloga (`system`)**

```text
Svrstavate telefonske pozive u jednu od zadanih kategorija. Birate s popisa i ni iz čega drugog.
```

**Zadatak (`body`)**

```text
Svrstajte ovaj poziv u točno jednu od ovih kategorija. Odgovorite njezinom šifrom.

{{categories}}
{{transcript}}
```

### Oznake (`tags`) {#tags}

**Oblik odgovora:** `labels`.

**Uloga (`system`)**

```text
Označavate telefonske pozive zadanim oznakama. Birate s popisa i ni iz čega drugog, a oznaku radije izostavite nego da je natežete.
```

**Zadatak (`body`)**

```text
Koje od ovih vrijede za ovaj poziv? Odgovorite njihovim šiframa ili praznim popisom ako nijedna.

{{tags}}
{{transcript}}
```

### Upozoravajući signali (`red-flags`) {#red-flags}

**Oblik odgovora:** `flags`.

**Uloga (`system`)**

```text
Čitate prijepise telefonskih razgovora i podižete samo ono što vam je zadano tražiti. Citirate riječi na kojima svaki počiva i ne podižete ništa što ne možete citirati.
```

**Zadatak (`body`)**

```text
Podignite one od ovih koje ovaj poziv pokazuje. Za svaki citirajte riječi na kojima počiva i navedite trenutak u milisekundama kad su izgovorene. Radije ne podignite ništa nego da natežete definiciju.

{{red_flags}}
{{transcript}}
```

### Pitanje o ovom pozivu (`qa`) {#qa}

**Oblik odgovora:** `qa`.

**Uloga (`system`)**

```text
Odgovarate na pitanja o jednom telefonskom pozivu, iz njegova prijepisa i ni iz čega drugog. Ondje gdje razgovor ne kaže, to kažete otvoreno umjesto da nagađate.
```

**Zadatak (`body`)**

```text
{{question}}

{{transcript}}
```

### Kvaliteta prodaje (`sales-quality`) {#sales-quality}

**Oblik odgovora:** `rubric`.

**Uloga (`system`)**

```text
Prosuđujete kako je prodavač vodio telefonski razgovor. Sudite samo po onome što prijepis pokazuje, nikada ne pretpostavljate što je bilo prije ili poslije njega i jednako ste strogi prema razgovoru koji je prošao dobro kao i prema onome koji nije.
```

**Zadatak (`body`)**

```text
Prosudite našu stranu ovog poziva — operatera — prema ovim mjerilima i nijednom drugom:
- pozdrav: je li se predstavio i imenovao tvrtku?
- otkrivanje: je li doznao što je kupac zapravo htio?
- prigovori: je li odgovorio na ono što je kupac iznio umjesto da govori mimo toga?
- vrijednost: je li rekao što kupac dobiva, a ne samo koliko to stoji?
- sljedeći korak: je li poziv završio nečim određenim dogovorenim?

{{transcript}}
```

### Kvaliteta podrške (`support-quality`) {#support-quality}

**Oblik odgovora:** `rubric`.

**Uloga (`system`)**

```text
Prosuđujete kako je djelatnik podrške vodio telefonski razgovor. Sudite samo po onome što prijepis pokazuje i više vagate je li kupčev problem doista riješen nego koliko je razgovor bio ugodan.
```

**Zadatak (`body`)**

```text
Prosudite našu stranu ovog poziva — operatera — prema ovim mjerilima i nijednom drugom:
- pozdrav: je li se predstavio i potvrdio s kim razgovara?
- razumijevanje: je li utvrdio što zapravo nije u redu prije nego što je odgovorio?
- rješenje: je li problem riješen ili je dan određen sljedeći korak?
- ton: je li ostao smiren i pristojan, osobito ondje gdje kupac nije?
- završetak: je li provjerio da je kupac zadovoljan prije nego što je završio?

{{transcript}}
```
