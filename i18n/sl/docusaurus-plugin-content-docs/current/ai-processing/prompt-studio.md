---
title: Personal Prompt Studio
sidebar_position: 3
description: Navodila, ki obdelujejo vaše pogovore, pravila, ki jih poganjajo, in kako jih prilagodite sebi.
---

**Personal Prompt Studio** je del AI Softphone, ki obdeluje vaše pogovore po vaše. Obdelavo naredijo navodila: program pride z enajstimi, pripravljenimi za uporabo, takoj ko sta povezana prepis in jezikovni model, vi pa jih lahko spreminjate z navadnim jezikom, podvajate in dodajate svoja. Navedena so pod **Navodila** v [Nastavitve → Obdelava](processing.md#prompts).

Vaš LLM, vaš ključ, vaš nadzor: povežite model, ki vam je ljubši, z lastnim ključem, prek podprte storitve ali združljivega API-ja — ali model, nameščen v vaši organizaciji. Ko tudi [prepis](transcription.md#your-own-models) teče na lastni strojni opremi, ostanejo zvok in prepisi v vašem okolju.

<Shot name="12b_settings_processing_prompts" alt="Seznam navodil v Nastavitve → Obdelava" />

## Navodila, ki pridejo s programom {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 vključuje enajst pozivov za končane pogovore in štiri pomočnike v živo. Spodaj so priložena besedila za ta jezik; jezikovne različice se lahko razlikujejo.

| Navodilo | `code` | Oblika | Kaj piše |
| --- | --- | --- | --- |
| **Povzetek** | `summary` | Proza | Glavne točke, odločitve in naslednje korake v enem kratkem odstavku. |
| **Povzetek v eni vrstici** | `super-summary` | Proza | Kratek naslov, po katerem pogovor prepoznate na seznamu. |
| **Naloge** | `action-items` | Postavke | Kdo se je zavezal, da bo kaj naredil in kdaj, z besedami, ki jih je rekel. |
| **Teme** | `topics` | Postavke | Teme, ki so bile obravnavane, v nekaj besedah. |
| **Imena in številke** | `entities` | JSON | Ljudje, podjetja, datumi, zneski in sklici. |
| **Kategorija** | `categorise` | Oznake | Uvrsti pogovor v eno od vaših [kategorij](dictionaries.md). |
| **Oznake** | `tags` | Oznake | Nanj postavi vaše [oznake](dictionaries.md), da ga je mogoče pozneje najti. |
| **Opozorilni znaki** | `red-flags` | Signali | Težave, z dokazom in časom v pogovoru. |
| **Vprašanje o tem klicu** | `qa` | Odgovor | Odgovori na vprašanje, ki ga zastavite o enem pogovoru, na podlagi njegovega prepisa. |
| **Kakovost prodaje** | `sales-quality` | Merila | Pregleda pogovor po prodajnih merilih, ki jih lahko urejate. |
| **Kakovost podpore** | `support-quality` | Merila | Presodi, kako dobro je bila težava razumljena in rešena. |

Oblike so stalne podobe odgovora, in prav to programu omogoča, da ga shrani in pozneje po njem išče: **Oznake** so kode z enega od vaših seznamov, **Signali** so kode z resnostjo, **Merila** so ocena z razlogom in oceno za vsako merilo, **Odgovor** je odgovor z besedami, na katere se opira. Navodila, ki modelu povedo obliko, se hranijo v [Slovarjih](dictionaries.md#instructions).

Tudi pomočniki [šepetalca](../interface/prompter.md) so navodila, ki se izvajajo na vsaki repliki med klicem namesto na končanem pogovoru. Hranijo se na lastnem seznamu, pod [Pomočniki](prompter.md#assistants) v **Nastavitve → Šepetalec**.

Klici, opravljeni v AI Softphone, sestanki, [zajeti](/capture/) z računalnika, in uvoženi posnetki gredo skozi ista navodila, takoj ko imajo prepis.

Naloge beležijo, kaj je bilo dogovorjeno — namesto vas ne pošiljajo sporočil, ne rezervirajo obiskov in ne ustvarjajo zahtevkov.

## Prilagoditev {#making-it-yours}

- Spremenite, kaj navodilo zahteva, z navadnim jezikom: kaj išče, obliko odgovora in jezik, v katerem odgovarja.
- Podvojite navodilo, da preizkusite različico.
- Izberite model za vsako navodilo — na lastnem računalniku ali v oblaku.
- Nastavite vrstni red, v katerem navodila tečejo, jih vklapljajte in izklapljajte ter jih naredite pogojna — to se naredi s [pravili](processing.md#rules): na primer pregled prodaje teče le pri klicih, uvrščenih kot **Prodaja**.
- Vodite svoje kategorije, oznake in opozorilne znake v [Slovarjih](dictionaries.md).
- Omejite stroške z [mesečnimi mejami](processing.md#spending).

Izvirna navodila in pravila je mogoče obnoviti z **Obnovi privzeto** pod **Privzete vrednosti** v [Nastavitve → Obdelava](processing.md#defaults).

## Vloga modela {#role-and-task}

`system` določa vedenje modela, `body` pa opisuje nalogo. Oblika in jezik odgovora se podata ločeno z navodili iz seznamov.

Prazen seznam nalog ali opozoril je lahko pravilen rezultat. Manjkajočih odgovornih oseb in rokov ni dovoljeno izmišljati. Odgovori na vprašanja morajo temeljiti samo na prepisu.

[Oblike odgovorov](dictionaries.md#response-formats)

## Nadomestne oznake {#placeholders}

Element poziva, ki se nadomesti s podatki pogovora.

| Nadomestna oznaka | Pomen |
| --- | --- |
| `{{transcript}}` | Prepis, ena izjava v vrstici, čas v milisekundah |
| `{{duration}}` | Trajanje pogovora |
| `{{direction}}` | Dohodni ali odhodni klic |
| `{{party}}` | Ime stika ali številka |
| `{{language}}` | Jezik odgovora |
| `{{question}}` | Uporabnikovo vprašanje |
| `{{categories}}` | Seznam kategorij |
| `{{tags}}` | Seznam oznak |
| `{{red_flags}}` | Seznam opozoril |
| `{{artifact:summary}}` | Prej ustvarjen povzetek |
| `{{conversation}}` | Kontekst, ki ga je zbral pomočnik v živo |
| `{{reply}}` | Zadnja izjava sogovornika; samo za pomočnika v živo |

Zaženite `summary` pred `super-summary`, ki uporablja `{{artifact:summary}}`. Pred oceno kakovosti zaženite `categorise`: `sales-quality` potrebuje kategorijo `sales`, `support-quality` pa `support`.

[Priloženi pomočniki](prompter.md#assistant-templates)

## Privzeta besedila pozivov {#standard-templates}

AI Softphone 1.1.11 vključuje enajst pozivov za končane pogovore in štiri pomočnike v živo. Spodaj so priložena besedila za ta jezik; jezikovne različice se lahko razlikujejo.

### Povzetek (`summary`) {#summary}

**Oblika odgovora:** `plain`.

**Vloga (`system`)**

```text
Berete prepise telefonskih pogovorov in o njih pišete kratke, dejstvene povzetke. Nikoli ne ugibate tistega, kar ni bilo rečeno, in nikoli ne dodajate nasvetov.
```

**Naloga (`body`)**

```text
Povzemite ta telefonski pogovor v enem kratkem odstavku: za kaj je šlo, kaj je bilo odločeno in kaj sledi. Trajal je {{duration}} in bil je {{direction}}, z {{party}}.

{{transcript}}
```

### Povzetek v eni vrstici (`super-summary`) {#super-summary}

**Oblika odgovora:** `plain`.

**Vloga (`system`)**

```text
Berete prepise telefonskih pogovorov in vsakega skrčite na en sam izraz. Nikoli ne ugibate in nikoli ne dodajate nasvetov.
```

**Naloga (`body`)**

```text
Skrčite ta telefonski pogovor na en izraz z največ dvanajstimi besedami — takšen, kakršen bi stal v razpredelnici ob imenu klicatelja. Brez pike, brez narekovajev.

{{artifact:summary}}

{{transcript}}
```

### Naloge (`action-items`) {#action-items}

**Oblika odgovora:** `list`.

**Vloga (`system`)**

```text
Berete prepise telefonskih pogovorov in naštevate, k čemu se je kdo zavezal. Naštevate samo tisto, kar je bilo res rečeno; nikoli si ne izmišljate naloge, nosilca ali roka.
```

**Naloga (`body`)**

```text
Naštejte, k čemu se je kdorkoli v tem klicu zavezal. Navedite, kdo naj to stori, kjer je bilo to rečeno, in do kdaj, kjer je bilo to rečeno. Če se nihče ni zavezal k ničemur, odgovorite s praznim seznamom.

{{transcript}}
```

### Teme (`topics`) {#topics}

**Oblika odgovora:** `list`.

**Vloga (`system`)**

```text
Berete prepise telefonskih pogovorov in imenujete, o čem so bili.
```

**Naloga (`body`)**

```text
Naštejte, česa se je ta klic res dotaknil, največ šest stvari, vsako v nekaj besedah. Nosilca in rok pustite prazna — tu ne pomenita nič.

{{transcript}}
```

### Imena in številke (`entities`) {#entities}

**Oblika odgovora:** `json`.

**Vloga (`system`)**

```text
Berete prepise telefonskih pogovorov in iz njih izluščite, kaj je bilo v njih imenovano. Nikoli ne ugibate zapisa in nikoli ne dodajate tistega, kar ni bilo rečeno.
```

**Naloga (`body`)**

```text
Izluščite, kaj je bilo v tem klicu imenovano, kot JSON natanko te oblike:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Vsako je seznam nizov, zapisanih tako, kot so bili izgovorjeni. Raje pustite seznam prazen, kot da ugibate.

{{transcript}}
```

### Kategorija (`categorise`) {#categorise}

**Oblika odgovora:** `labels`.

**Vloga (`system`)**

```text
Telefonske klice uvrščate v eno od danih kategorij. Izbirate s seznama in iz ničesar drugega.
```

**Naloga (`body`)**

```text
Uvrstite ta klic v natanko eno od teh kategorij. Odgovorite z njeno kodo.

{{categories}}
{{transcript}}
```

### Oznake (`tags`) {#tags}

**Oblika odgovora:** `labels`.

**Vloga (`system`)**

```text
Telefonske klice označujete z danimi oznakami. Izbirate s seznama in iz ničesar drugega, oznako pa raje izpustite, kot da jo raztegujete.
```

**Naloga (`body`)**

```text
Katere od teh držijo za ta klic? Odgovorite z njihovimi kodami ali s praznim seznamom, če nobena.

{{tags}}
{{transcript}}
```

### Opozorilni znaki (`red-flags`) {#red-flags}

**Oblika odgovora:** `flags`.

**Vloga (`system`)**

```text
Berete prepise telefonskih pogovorov in sprožite samo tisto, kar vam je bilo dano iskati. Navedete besede, na katerih vsak stoji, in ne sprožite ničesar, česar ne morete navesti.
```

**Naloga (`body`)**

```text
Sprožite tiste od teh, ki jih ta klic pokaže. Pri vsakem navedite besede, na katerih stoji, in trenutek v milisekundah, ko so bile izgovorjene. Raje ne sprožite ničesar, kot da raztegujete opredelitev.

{{red_flags}}
{{transcript}}
```

### Vprašanje o tem klicu (`qa`) {#qa}

**Oblika odgovora:** `qa`.

**Vloga (`system`)**

```text
Odgovarjate na vprašanja o enem telefonskem klicu, iz njegovega prepisa in iz ničesar drugega. Kjer pogovor tega ne pove, to poveste naravnost, namesto da ugibate.
```

**Naloga (`body`)**

```text
{{question}}

{{transcript}}
```

### Kakovost prodaje (`sales-quality`) {#sales-quality}

**Oblika odgovora:** `rubric`.

**Vloga (`system`)**

```text
Presojate, kako je prodajalec vodil telefonski pogovor. Sodite samo po tem, kar kaže prepis, nikoli ne domnevate, kaj je bilo pred njim ali za njim, in ste enako strogi do pogovora, ki je šel dobro, kot do tistega, ki ni.
```

**Naloga (`body`)**

```text
Presodite našo stran tega klica — operaterja — po teh merilih in po nobenem drugem:
- pozdrav: se je predstavil in imenoval podjetje?
- ugotavljanje: je izvedel, kaj je stranka zares hotela?
- ugovori: je odgovoril na to, kar je stranka izpostavila, namesto da bi govoril mimo?
- vrednost: je povedal, kaj stranka dobi, in ne samo, koliko to stane?
- naslednji korak: se je klic končal z nečim določenim dogovorjenim?

{{transcript}}
```

### Kakovost podpore (`support-quality`) {#support-quality}

**Oblika odgovora:** `rubric`.

**Vloga (`system`)**

```text
Presojate, kako je sodelavec podpore vodil telefonski pogovor. Sodite samo po tem, kar kaže prepis, in bolj tehtate, ali je bila stranki težava zares odpravljena, kot to, kako prijeten je bil pogovor.
```

**Naloga (`body`)**

```text
Presodite našo stran tega klica — operaterja — po teh merilih in po nobenem drugem:
- pozdrav: se je predstavil in potrdil, s kom govori?
- razumevanje: je ugotovil, kaj je zares narobe, preden je odgovoril?
- rešitev: je bila težava odpravljena ali je bil dan določen naslednji korak?
- ton: je ostal miren in vljuden, zlasti tam, kjer stranka ni?
- zaključek: je preveril, da je stranka zadovoljna, preden je končal?

{{transcript}}
```
