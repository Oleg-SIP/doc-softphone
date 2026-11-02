---
title: Personal Prompt Studio
sidebar_position: 3
description: Juhised, mis teevad teie vestlustest kokkuvõtteid, neid käivitavad reeglid ja kuidas need endale sobivaks teha.
---

**Personal Prompt Studio** on AI Softphone'i osa, mis teeb teie vestlustest kokkuvõtteid teie moodi. Kokkuvõtte teevad juhised: programmiga tuleb kaasa üksteist, mis on kasutusvalmis kohe, kui ülestähendus ja keelemudel on ühendatud, ning te saate neid tavakeeles muuta, dubleerida ja oma juhiseid lisada. Need on loetletud jaotises **Juhised** lehel [Seaded → Töötlemine](processing.md#prompts).

Teie LLM, teie võti, teie kontroll: ühendage eelistatud mudel oma võtmega toetatud teenuse või ühilduva API kaudu — või teie organisatsiooni sees paigaldatud mudel. Kui ka [ülestähendus](transcription.md#your-own-models) toimub teie enda riistvaral, jäävad nii heli kui ka ülestähendused teie keskkonda.

<Shot name="12b_settings_processing_prompts" alt="Juhiste loend jaotises Seaded → Töötlemine" />

## Programmiga kaasa tulevad juhised {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 sisaldab ühtteist viipa lõppenud vestlustele ja nelja reaalajaassistenti. Allpool on selle keele kaasasolevad tekstid; keeleversioonid võivad erineda.

| Juhis | `code` | Kuju | Mida see kirjutab |
| --- | --- | --- | --- |
| **Kokkuvõte** | `summary` | Proosa | Põhipunktid, otsused ja järgmised sammud ühes lühikeses lõigus. |
| **Ühereakokkuvõte** | `super-summary` | Proosa | Lühike pealkiri, mille järgi vestlust loendis ära tunda. |
| **Ülesanded** | `action-items` | Punktid | Kes lubas mida teha ja millal, koos öeldud sõnadega. |
| **Teemad** | `topics` | Punktid | Käsitletud teemad paari sõnaga. |
| **Nimed ja numbrid** | `entities` | JSON | Inimesed, ettevõtted, kuupäevad, summad ja viited. |
| **Kategooria** | `categorise` | Sildid | Liigitab vestluse ühte teie [kategooriatest](dictionaries.md). |
| **Sildid** | `tags` | Sildid | Paneb sellele teie [sildid](dictionaries.md), et seda hiljem leida. |
| **Hoiatussignaalid** | `red-flags` | Signaalid | Probleemid koos tõendi ja vestluse ajaga. |
| **Küsimus selle kõne kohta** | `qa` | Vastus | Vastab küsimusele, mille te ühe vestluse kohta esitate, selle ülestähenduse põhjal. |
| **Müügi kvaliteet** | `sales-quality` | Kriteeriumid | Hindab vestlust müügikriteeriumide järgi, mida saate muuta. |
| **Toe kvaliteet** | `support-quality` | Kriteeriumid | Hindab, kui hästi probleemi mõisteti ja lahendati. |

Kujud on vastuse fikseeritud struktuurid ja just see võimaldab programmil vastust hoida ning hiljem sellest otsida: **Sildid** on koodid teie loenditest, **Signaalid** on koodid tõsidusega, **Kriteeriumid** on hinne koos põhjendusega ja hinne iga kriteeriumi kohta, **Vastus** on vastus koos sõnadega, millele see tugineb. Juhised, mis ütlevad mudelile kuju, on talletatud jaotises [Sõnastikud](dictionaries.md#instructions).

Ka [etteütleja](../interface/prompter.md) abilised on juhised, mida käivitatakse iga repliigi peale kõne ajal, mitte lõpetatud vestluse peal. Neid hoitakse eraldi loendis, jaotises [Abilised](prompter.md#assistants) vaates **Seaded → Etteütleja**.

AI Softphone'is tehtud kõned, arvutist [hõivatud](/capture/) koosolekud ja imporditud salvestised läbivad kõik samad juhised, kui neil on ülestähendus.

Ülesanded talletavad kokkulepitu — need ei saada sõnumeid, ei broneeri külastusi ega loo teie eest pileteid.

## Tehke see enda omaks {#making-it-yours}

- Muutke tavakeeles seda, mida juhis palub: mida see otsib, vastuse vormingut ja keelt, milles see vastab.
- Dubleerige juhis, et proovida varianti.
- Valige iga juhise jaoks mudel — teie enda arvutis või pilves.
- Määrake juhiste käivitamise järjekord, lülitage neid sisse ja välja ning muutke need tingimuslikuks — seda tehakse [reeglitega](processing.md#rules): näiteks müügihinnang käivitub ainult kõnedel, mis on liigitatud kategooriasse **Müük**.
- Hoidke oma kategooriaid, silte ja hoiatussignaale jaotises [Sõnastikud](dictionaries.md).
- Piirake kulusid [igakuiste piiridega](processing.md#spending).

Algsed juhised ja reeglid saab taastada nupuga **Taasta vaikeväärtused** jaotises **Vaikeväärtused** lehel [Seaded → Töötlemine](processing.md#defaults).

## Mudeli roll {#role-and-task}

`system` määrab mudeli käitumise, `body` kirjeldab ülesannet. Vastuse kuju ja keel antakse eraldi loendite juhistega.

Tühi ülesannete või ohumärkide loend võib olla õige tulemus. Puuduvaid vastutajaid ja kuupäevi ei tohi välja mõelda. Küsimustele tuleb vastata ainult transkriptsiooni põhjal.

[Vastuse vormingud](dictionaries.md#response-formats)

## Kohatäitjad {#placeholders}

Viiba element, mis asendatakse vestluse andmetega.

| Kohatäitja | Tähendus |
| --- | --- |
| `{{transcript}}` | Transkriptsioon, üks repliik real, ajad millisekundites |
| `{{duration}}` | Vestluse kestus |
| `{{direction}}` | Sissetulev või väljaminev kõne |
| `{{party}}` | Kontakti nimi või number |
| `{{language}}` | Vastuse keel |
| `{{question}}` | Kasutaja küsimus |
| `{{categories}}` | Kategooriate loend |
| `{{tags}}` | Siltide loend |
| `{{red_flags}}` | Ohumärkide loend |
| `{{artifact:summary}}` | Varem loodud kokkuvõte |
| `{{conversation}}` | Suflööri kogutud vestluskontekst |
| `{{reply}}` | Vestluspartneri viimane repliik; ainult suflöörile |

Käivitage `summary` enne viipa `super-summary`, mis kasutab väärtust `{{artifact:summary}}`. Käivitage `categorise` enne kvaliteedihindamist: `sales-quality` vajab kategooriat `sales`, `support-quality` kategooriat `support`.

[Kaasasolevad assistendid](prompter.md#assistant-templates)

## Viipade standardtekstid {#standard-templates}

AI Softphone 1.1.11 sisaldab ühtteist viipa lõppenud vestlustele ja nelja reaalajaassistenti. Allpool on selle keele kaasasolevad tekstid; keeleversioonid võivad erineda.

### Kokkuvõte (`summary`) {#summary}

**Vastuse kuju:** `plain`.

**Roll (`system`)**

```text
Loete telefonikõnede üleskirjutusi ja kirjutate neist lühikesi, asjalikke kokkuvõtteid. Te ei oleta kunagi seda, mida ei öeldud, ega lisa kunagi nõuandeid.
```

**Ülesanne (`body`)**

```text
Võtke see telefonikõne kokku ühes lühikeses lõigus: millest see oli, mis otsustati ja mis edasi saab. See kestis {{duration}} ja oli {{direction}}, kellega {{party}}.

{{transcript}}
```

### Ühereakokkuvõte (`super-summary`) {#super-summary}

**Vastuse kuju:** `plain`.

**Roll (`system`)**

```text
Loete telefonikõnede üleskirjutusi ja taandate igaühe üheks väljendiks. Te ei oleta kunagi ega lisa kunagi nõuandeid.
```

**Ülesanne (`body`)**

```text
Taandage see telefonikõne üheks väljendiks, kõige rohkem kaheteistkümne sõnaga — selliseks, mis seisaks tabelis helistaja nime kõrval. Punktita, jutumärkideta.

{{artifact:summary}}

{{transcript}}
```

### Ülesanded (`action-items`) {#action-items}

**Vastuse kuju:** `list`.

**Roll (`system`)**

```text
Loete telefonikõnede üleskirjutusi ja loetlete, mida keegi lubas teha. Loetlete ainult seda, mida tõesti öeldi; te ei mõtle kunagi välja ülesannet, tegijat ega tähtaega.
```

**Ülesanne (`body`)**

```text
Loetlege, mida keegi selles kõnes lubas teha. Nimetage, kes seda tegema peab, kui see öeldi, ja mis ajaks, kui see öeldi. Kui keegi ei lubanud midagi, vastake tühja loendiga.

{{transcript}}
```

### Teemad (`topics`) {#topics}

**Vastuse kuju:** `list`.

**Roll (`system`)**

```text
Loete telefonikõnede üleskirjutusi ja nimetate, millest need olid.
```

**Ülesanne (`body`)**

```text
Loetlege, mida see kõne tegelikult puudutas, kõige rohkem kuus asja, igaüks paari sõnaga. Jätke tegija ja tähtaeg tühjaks — siin ei tähenda need midagi.

{{transcript}}
```

### Nimed ja numbrid (`entities`) {#entities}

**Vastuse kuju:** `json`.

**Roll (`system`)**

```text
Loete telefonikõnede üleskirjutusi ja noppite neist välja, mida neis nimetati. Te ei oleta kunagi kirjapilti ega lisa kunagi seda, mida ei öeldud.
```

**Ülesanne (`body`)**

```text
Noppige välja, mida selles kõnes nimetati, JSON-ina täpselt sellisel kujul:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Igaüks on sõnede loend, kirjutatud nii, nagu need öeldi. Jätke loend pigem tühjaks, kui hakkate oletama.

{{transcript}}
```

### Kategooria (`categorise`) {#categorise}

**Vastuse kuju:** `labels`.

**Roll (`system`)**

```text
Liigitate telefonikõnesid ühte antud kategooriatest. Valite loendist ja mitte millestki muust.
```

**Ülesanne (`body`)**

```text
Liigitage see kõne täpselt ühte neist kategooriatest. Vastake selle koodiga.

{{categories}}
{{transcript}}
```

### Sildid (`tags`) {#tags}

**Vastuse kuju:** `labels`.

**Roll (`system`)**

```text
Märgistate telefonikõnesid antud siltidega. Valite loendist ja mitte millestki muust ning jätate sildi pigem panemata, kui hakkate seda venitama.
```

**Ülesanne (`body`)**

```text
Millised neist käivad selle kõne kohta? Vastake nende koodidega või tühja loendiga, kui ükski ei käi.

{{tags}}
{{transcript}}
```

### Hoiatussignaalid (`red-flags`) {#red-flags}

**Vastuse kuju:** `flags`.

**Roll (`system`)**

```text
Loete telefonikõnede üleskirjutusi ja tõstate esile ainult seda, mida teil paluti otsida. Tsiteerite sõnu, millel igaüks põhineb, ega tõsta esile midagi, mida te tsiteerida ei oska.
```

**Ülesanne (`body`)**

```text
Tõstke esile need neist, mida see kõne näitab. Iga puhul tsiteerige sõnu, millel see seisab, ja andke hetk millisekundites, mil need öeldi. Pigem ärge tõstke esile midagi, kui hakkate määratlust venitama.

{{red_flags}}
{{transcript}}
```

### Küsimus selle kõne kohta (`qa`) {#qa}

**Vastuse kuju:** `qa`.

**Roll (`system`)**

```text
Vastate küsimustele ühe telefonikõne kohta, selle üleskirjutuse põhjal ja mitte millegi muu põhjal. Seal, kus vestlus seda ei ütle, ütlete seda otse, selle asemel et oletada.
```

**Ülesanne (`body`)**

```text
{{question}}

{{transcript}}
```

### Müügi kvaliteet (`sales-quality`) {#sales-quality}

**Vastuse kuju:** `rubric`.

**Roll (`system`)**

```text
Hindate, kuidas müüja telefonikõnet pidas. Otsustate ainult selle põhjal, mida üleskirjutus näitab, ei eelda kunagi, mis oli enne või pärast seda, ja olete hästi läinud kõne suhtes sama range kui halvasti läinu suhtes.
```

**Ülesanne (`body`)**

```text
Hinnake meie poolt selles kõnes — operaatorit — nende kriteeriumide järgi ja mitte ühegi muu järgi:
- tervitus: kas ta tutvustas ennast ja ettevõtet?
- väljaselgitamine: kas ta sai teada, mida klient tegelikult tahtis?
- vastuväited: kas ta vastas sellele, mille klient tõstatas, selle asemel et mööda rääkida?
- väärtus: kas ta ütles, mida klient saab, mitte ainult seda, mis see maksab?
- järgmine samm: kas kõne lõppes millegi kindla kokkuleppimisega?

{{transcript}}
```

### Toe kvaliteet (`support-quality`) {#support-quality}

**Vastuse kuju:** `rubric`.

**Roll (`system`)**

```text
Hindate, kuidas tugitöötaja telefonikõnet pidas. Otsustate ainult selle põhjal, mida üleskirjutus näitab, ja peate tähtsamaks seda, kas kliendi mure sai tõesti lahendatud, kui seda, kui meeldiv vestlus oli.
```

**Ülesanne (`body`)**

```text
Hinnake meie poolt selles kõnes — operaatorit — nende kriteeriumide järgi ja mitte ühegi muu järgi:
- tervitus: kas ta tutvustas ennast ja veendus, kellega ta räägib?
- arusaamine: kas ta selgitas välja, mis tegelikult viga on, enne kui vastas?
- lahendus: kas mure sai lahendatud või anti kindel järgmine samm?
- toon: kas ta jäi rahulikuks ja viisakaks, eriti seal, kus klient ei jäänud?
- lõpetus: kas ta kontrollis, et klient on rahul, enne kui lõpetas?

{{transcript}}
```
