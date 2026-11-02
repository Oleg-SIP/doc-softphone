---
title: Slovarji
sidebar_position: 4
description: Vaše lastne kategorije, oznake in opozorilni znaki — besede, pod katere se uvrščajo vaši pogovori.
---

**Nastavitve → Slovarji** vsebuje besede, pod katere se pogovor lahko uvrsti, s katerimi se lahko označi ali zaradi katerih se lahko opozori nanj. Ti seznami so to, kar se pokaže modelom in med čimer morajo izbirati, zato je odgovor vedno nekaj, kar lahko pozneje poiščete.

<Shot name="13_settings_dictionaries" alt="Nastavitve → Slovarji" />

**Pokaži izbrisane** pokaže vnose, ki ste jih izbrisali.

Vsak vnos je ime, kratka koda z drobnim tiskom in opis, ki modelu pove, kdaj ga izbrati. Koda je to, kar se shrani in kar vrne [REST API](../integration/rest-api.md#taxonomy-and-settings), zato ostane enaka, ko vnos preimenujete.

## Kategorije {#categories}

O čem je bil pogovor; **za vsak pogovor se izbere ena**. Program začne s štirimi:

| Ime | Koda | Uporablja se za |
| --- | --- | --- |
| **Prodaja** | `sales` | Prodaja, ponudba, pogajanje ali dokončanje nakupa — vključno s stranko, ki vpraša, koliko nekaj stane. |
| **Podpora** | `support` | Pomoč nekomu z izdelkom ali storitvijo, ki jo že ima: okvara, vprašanje o uporabi, pritožba nad delovanjem. |
| **Zasebno** | `personal` | Sploh ne službeno — zasebni pogovor, ki je slučajno potekal po tej liniji. |
| **Drugo** | `other` | Službeno, a niti prodaja niti podpora: dobavitelj, sodelavec, dostava, napačna številka. Izberite to, namesto da ugibate med ostalimi. |

Pritisnite **Dodaj**, da dodate lastno kategorijo.

## Oznake {#tags}

Nalepke, ki *lahko vse hkrati veljajo za isti pogovor*. Pritisnite **Dodaj**, da dodate eno. Seznam se začne z vnosi, kot so:

| Ime | Koda | Uporablja se za |
| --- | --- | --- |
| **Obljubljen povratni klic** | `callback` | Nekdo v tem klicu je obljubil, da pokliče nazaj, ali prosil, naj ga pokličejo. |
| **Pritožba** | `complaint` | Druga stran je izrazila nezadovoljstvo, ne glede na to, ali se je rešilo. |
| **Predano naprej** | `escalation` | Klic je bil predan nekomu drugemu ali pa je druga stran to zahtevala. |
| **Stranka VIP** | `vip` | Z drugo stranjo so ravnali kot s pomembno stranko ali pa je sama rekla, da to je. |

## Opozorilni znaki {#red-flags}

Stvari, ki zahtevajo pozornost, najdene v pogovoru z dokazom in časom — na primer *Jezna stranka* ali *Tveganje odhoda*. Opozorilni znaki so v [oknu Posnetki](../interface/recordings.md) narisani rdeče in vsak nosi resnost: nizko, srednjo ali visoko.

| Ime | Koda | `severity` | Uporablja se za |
| --- | --- | --- | --- |
| **Jezna stranka** | `angry-customer` | `high` | Slišalo se je, da je druga stran jezna, da žali ali grozi z odhodom. |
| **Tveganje odhoda** | `churn-risk` | `high` | Omenjena je bila odpoved, nepodaljšanje ali prehod k nekomu drugemu, pa naj bo še tako mirno. |
| **Dana obljuba** | `promise-made` | `medium` | Naša stran se je zavezala k nečemu določenemu — datumu, ceni, popravilu, vračilu. |
| **Občutljivi podatki** | `sensitive-data` | `high` | Na glas so bili prebrani številka kartice, geslo, številka dokumenta ali karkoli drugega, kar v posnetku ne bi smelo biti. |
| **Konkurent** | `competitor` | `low` | Druga stran je imenovala nekoga drugega, ki ponuja isto, ali nas z njim primerjala. |

## Navodila {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Nastavitve → Slovarji: oblike odgovorov in jezikovna navodila" />

*To, kar se doda vsakemu navodilu o obliki odgovora in jeziku, v katerem naj bo napisan.* Hranijo se tukaj, da lahko vsako navodilo uporabi enako besedilo, spreminjate pa jih lahko kot kateri koli drug vnos — ali napišete svoja, na primer *odgovarjaj kratko* ali *nikoli ne omenjaj cene*, in jih pri katerem koli navodilu označite pod **Pošlji tudi**.

| Ime | Koda | Kaj pove modelu |
| --- | --- | --- |
| **Proza** | `shape-plain` | Odgovori v navadni prozi, brez JSON, seznamov in naslovov. |
| **Postavke** | `shape-list` | Odgovori s seznamom stvari, ki jih je treba narediti, pri vsaki kdo in kdaj. |
| **Oznake** | `shape-labels` | Odgovori v JSON s seznamom kod in kako prepričan je o vsaki, z uporabo le kod s seznama, ki ga je dobil. |
| **Ocena** | `shape-score` | Odgovori z oceno, razlogom zanjo in besedami, na katerih temelji. |
| **Merila** | `shape-rubric` | Odgovori s skupno oceno in oceno za vsako merilo. |
| **Signali** | `shape-flags` | Odgovori s kodami s seznama, vsako z resnostjo. |
| **Odgovor** | `shape-qa` | Odgovori z odgovorom ali jasno povej, da pogovor tega ne pove, in z besedami, na katere se odgovor opira. |
| **JSON** | `shape-json` | Odgovori le z JSON, v obliki, zahtevani zgoraj. |
| **Kot se je govorilo** | `language-as-spoken` | Piši v jeziku, v katerem je potekal pogovor. |
| **Kot se je govorilo, imenovano** | `language-as-spoken-named` | Enako, z imenovanjem jezika. |
| **Določen jezik** | `language-named` | Piši v jeziku, ki ga določite. |

**Dodaj** na vrhu seznama doda vnos.

## Privzete vrednosti {#defaults}

**Obnovi privzeto** vrne vsak slovar, kot je prišel s programom, v trenutnem jeziku vmesnika. Kam so vaši pogovori že uvrščeni, ostane nedotaknjeno.

## Oblike odgovorov {#response-formats}

Bloki navajajo priložena navodila. Opisujejo oblike odgovorov; alternative so način zapisa, ne izvedljivi primeri JSON.

### Proza (`shape-plain`) {#shape-plain}

```text
Odgovorite v navadni prozi. Ne uporabljajte JSON-a, seznamov ali naslovov.
```

### Postavke (`shape-list`) {#shape-list}

```text
Odgovorite samo z JSON-om, natanko te oblike:
{"items": [{"text": "kaj je treba narediti", "owner": "kdo, ali prazno", "due": "do kdaj, ali prazno"}]}
Ko ni česa našteti, uporabite prazno polje. Zunaj JSON-a ne pišite ničesar.
```

### Oznake (`shape-labels`) {#shape-labels}

```text
Odgovorite samo z JSON-om, natanko te oblike:
{"labels": [{"code": "koda s seznama, ki ste ga dobili", "confidence": 0.0}]}
Uporabljajte samo kode s seznama. Ko nobena ne ustreza, uporabite prazno polje.
Kode si ne izmišljajte in zunaj JSON-a ne pišite ničesar.
```

### Ocena (`shape-score`) {#shape-score}

```text
Odgovorite samo z JSON-om, natanko te oblike:
{"score": 3, "rationale": "zakaj to število in ne eno višje",
 "evidence": [{"at_ms": 0, "quote": "besede, na katerih to stoji"}]}
Ocena je celo število od 1 do 5. Zunaj JSON-a ne pišite ničesar.
```

### Merila (`shape-rubric`) {#shape-rubric}

```text
Odgovorite samo z JSON-om, natanko te oblike:
{"overall": 3, "rationale": "zakaj to število in ne eno višje",
 "criteria": [{"name": "merilo tako, kot vam je bilo dano",
               "verdict": "pass" ali "weak" ali "fail" ali "n/a",
               "note": "en stavek"}]}
Presodite vsako dano merilo in nobenega drugega. Skupna ocena je celo število
od 1 do 5. Zunaj JSON-a ne pišite ničesar.
```

### Signali (`shape-flags`) {#shape-flags}

```text
Odgovorite samo z JSON-om, natanko te oblike:
{"flags": [{"code": "koda s seznama, ki ste ga dobili",
            "severity": "low" ali "medium" ali "high",
            "evidence": "besede, na katerih to stoji",
            "at_ms": 0}]}
Uporabljajte samo kode s seznama in vsako sprožite največ enkrat. Ko ne ustreza
nič, uporabite prazno polje. Zunaj JSON-a ne pišite ničesar.
```

### Odgovor (`shape-qa`) {#shape-qa}

```text
Odgovorite samo z JSON-om, natanko te oblike:
{"answer": "vaš odgovor ali naravnost to, da pogovor tega ne pove",
 "citations": [{"at_ms": 0, "quote": "besede, na katerih odgovor stoji"}]}
Ne odgovarjajte iz ničesar razen iz pogovora. Zunaj JSON-a ne pišite ničesar.
```

### JSON (`shape-json`) {#shape-json}

```text
Odgovorite samo z JSON-om, v obliki, zahtevani zgoraj. Zunaj JSON-a ne pišite ničesar.
```

### Kot se je govorilo (`language-as-spoken`) {#language-as-spoken}

```text
Odgovor napišite v istem jeziku, v katerem je bil pogovor.
```

### Kot se je govorilo, imenovano (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Odgovor napišite v istem jeziku, v katerem je bil pogovor, to pa je {language}.
```

### Določen jezik (`language-named`) {#language-named}

```text
Odgovor napišite v tem jeziku: {language}.
```
