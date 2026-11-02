---
title: Personal Prompt Studio
sidebar_position: 3
description: Nurodymai, kurie apibendrina jūsų pokalbius, juos vykdančios taisyklės ir kaip juos pritaikyti sau.
---

**Personal Prompt Studio** — tai AI Softphone dalis, kuri apibendrina jūsų pokalbius jūsų būdu. Apibendrinimą kuria nurodymai: programa pateikiama su vienuolika, paruoštais naudoti, kai tik prijungiamas iššifravimas ir kalbos modelis, o jūs galite juos keisti paprasta kalba, dubliuoti ir pridėti savo. Jie pateikti skiltyje **Nurodymai** puslapyje [Nustatymai → Apdorojimas](processing.md#prompts).

Jūsų LLM, jūsų raktas, jūsų kontrolė: prijunkite norimą modelį su savo raktu per palaikomą paslaugą ar suderinamą API — arba modelį, įdiegtą jūsų organizacijoje. Jei ir [iššifravimas](transcription.md#your-own-models) vyksta jūsų įrangoje, ir garsas, ir iššifruoti tekstai lieka jūsų aplinkoje.

<Shot name="12b_settings_processing_prompts" alt="Nurodymų sąrašas skiltyje Nustatymai → Apdorojimas" />

## Su programa pateikiami nurodymai {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 turi vienuolika užklausų užbaigtiems pokalbiams ir keturis tiesioginius asistentus. Toliau pateikti šios kalbos įtraukti tekstai; kalbų versijos gali skirtis.

| Nurodymas | `code` | Forma | Ką jis rašo |
| --- | --- | --- | --- |
| **Santrauka** | `summary` | Proza | Pagrindinius punktus, sprendimus ir tolesnius žingsnius vienoje trumpoje pastraipoje. |
| **Santrauka viena eilute** | `super-summary` | Proza | Trumpą pavadinimą, kad pokalbį atpažintumėte sąraše. |
| **Užduotys** | `action-items` | Punktai | Kas pažadėjo ką padaryti ir kada, su jų pasakytais žodžiais. |
| **Temos** | `topics` | Punktai | Aptartas temas keliais žodžiais. |
| **Vardai ir skaičiai** | `entities` | JSON | Žmones, įmones, datas, sumas ir nuorodas. |
| **Kategorija** | `categorise` | Žymos | Priskiria pokalbį vienai iš jūsų [kategorijų](dictionaries.md). |
| **Žymos** | `tags` | Žymos | Uždeda jūsų [žymas](dictionaries.md), kad vėliau būtų galima rasti. |
| **Įspėjamieji signalai** | `red-flags` | Signalai | Problemas su įrodymu ir laiku pokalbyje. |
| **Klausimas apie šį skambutį** | `qa` | Atsakymas | Atsako į klausimą, kurį užduodate apie vieną pokalbį, remdamasis jo iššifruotu tekstu. |
| **Pardavimo kokybė** | `sales-quality` | Kriterijai | Įvertina pokalbį pagal pardavimo kriterijus, kuriuos galite redaguoti. |
| **Pagalbos kokybė** | `support-quality` | Kriterijai | Įvertina, kaip gerai problema buvo suprasta ir išspręsta. |

Formos yra fiksuotos atsakymo struktūros, ir būtent tai leidžia programai atsakymą laikyti ir vėliau jame ieškoti: **Žymos** yra kodai iš vieno jūsų sąrašų, **Signalai** — kodai su rimtumu, **Kriterijai** — įvertinimas su pagrindimu ir įvertinimas kiekvienam kriterijui, **Atsakymas** — atsakymas su žodžiais, kuriais jis remiasi. Instrukcijos, nurodančios modeliui formą, laikomos skiltyje [Žodynai](dictionaries.md#instructions).

[Suflerio](../interface/prompter.md) pagalbininkai taip pat yra nurodymai, vykdomi kiekvienai replikai skambučio metu, o ne baigtam pokalbiui. Jie laikomi atskirame sąraše, skiltyje [Pagalbininkai](prompter.md#assistants) puslapyje **Nustatymai → Suflerius**.

AI Softphone atlikti skambučiai, iš kompiuterio [perimti](/capture/) susitikimai ir importuoti įrašai visi eina per tuos pačius nurodymus, kai tik turi iššifruotą tekstą.

Užduotys užfiksuoja, dėl ko susitarta — jos nesiunčia žinučių, nerezervuoja vizitų ir nesukuria užklausų už jus.

## Pritaikykite sau {#making-it-yours}

- Keiskite paprasta kalba, ko prašo nurodymas: ko jis ieško, atsakymo formatą ir kalbą, kuria jis atsako.
- Dubliuokite nurodymą, kad išbandytumėte variantą.
- Pasirinkite modelį kiekvienam nurodymui — savo kompiuteryje ar debesyje.
- Nustatykite tvarką, kuria vykdomi nurodymai, įjunkite ir išjunkite juos ir padarykite sąlyginius — tai daroma su [taisyklėmis](processing.md#rules): pavyzdžiui, pardavimo įvertinimas vykdomas tik skambučiams, priskirtiems kategorijai **Pardavimai**.
- Laikykite savo kategorijas, žymas ir įspėjamuosius signalus skiltyje [Žodynai](dictionaries.md).
- Apribokite išlaidas [mėnesio ribomis](processing.md#spending).

Pradinius nurodymus ir taisykles galima atkurti su **Atkurti numatytuosius** skiltyje **Numatytosios reikšmės** puslapyje [Nustatymai → Apdorojimas](processing.md#defaults).

## Modelio vaidmuo {#role-and-task}

`system` nustato modelio elgseną, o `body` aprašo užduotį. Atsakymo forma ir kalba atskirai nurodomos sąrašų instrukcijose.

Tuščias užduočių ar įspėjimų sąrašas gali būti teisingas rezultatas. Negalima išgalvoti trūkstamų atsakingų asmenų ir datų. Atsakymai į klausimus turi remtis tik transkriptu.

[Atsakymų formatai](dictionaries.md#response-formats)

## Vietos žymos {#placeholders}

Užklausos elementas, pakeičiamas pokalbio duomenimis.

| Vietos žyma | Reikšmė |
| --- | --- |
| `{{transcript}}` | Transkriptas, viena replika eilutėje, laikas milisekundėmis |
| `{{duration}}` | Pokalbio trukmė |
| `{{direction}}` | Gaunamas arba siunčiamas skambutis |
| `{{party}}` | Kontakto vardas arba numeris |
| `{{language}}` | Atsakymo kalba |
| `{{question}}` | Naudotojo klausimas |
| `{{categories}}` | Kategorijų sąrašas |
| `{{tags}}` | Žymų sąrašas |
| `{{red_flags}}` | Įspėjamųjų ženklų sąrašas |
| `{{artifact:summary}}` | Anksčiau sukurta santrauka |
| `{{conversation}}` | Tiesioginio asistento sukauptas kontekstas |
| `{{reply}}` | Paskutinė pašnekovo replika; tik tiesioginiam asistentui |

Vykdykite `summary` prieš `super-summary`, kuri naudoja `{{artifact:summary}}`. Prieš kokybės vertinimą vykdykite `categorise`: `sales-quality` reikia kategorijos `sales`, o `support-quality` — `support`.

[Įtraukti asistentai](prompter.md#assistant-templates)

## Numatytieji užklausų tekstai {#standard-templates}

AI Softphone 1.1.11 turi vienuolika užklausų užbaigtiems pokalbiams ir keturis tiesioginius asistentus. Toliau pateikti šios kalbos įtraukti tekstai; kalbų versijos gali skirtis.

### Santrauka (`summary`) {#summary}

**Atsakymo forma:** `plain`.

**Vaidmuo (`system`)**

```text
Skaitote telefoninių pokalbių užrašus ir rašote apie juos trumpas, dalykiškas santraukas. Niekada nespėliojate to, kas nebuvo pasakyta, ir niekada nepridedate patarimų.
```

**Užduotis (`body`)**

```text
Apibendrinkite šį telefoninį pokalbį vienoje trumpoje pastraipoje: apie ką jis buvo, kas nuspręsta ir kas toliau. Jis truko {{duration}} ir buvo {{direction}}, su {{party}}.

{{transcript}}
```

### Santrauka viena eilute (`super-summary`) {#super-summary}

**Atsakymo forma:** `plain`.

**Vaidmuo (`system`)**

```text
Skaitote telefoninių pokalbių užrašus ir kiekvieną sutraukiate į vieną posakį. Niekada nespėliojate ir niekada nepridedate patarimų.
```

**Užduotis (`body`)**

```text
Sutraukite šį telefoninį pokalbį į vieną posakį, daugiausia iš dvylikos žodžių — tokį, koks stovėtų lentelėje šalia skambinusiojo vardo. Be taško, be kabučių.

{{artifact:summary}}

{{transcript}}
```

### Užduotys (`action-items`) {#action-items}

**Atsakymo forma:** `list`.

**Vaidmuo (`system`)**

```text
Skaitote telefoninių pokalbių užrašus ir išvardijate, ką kas nors įsipareigojo padaryti. Išvardijate tik tai, kas iš tikrųjų buvo pasakyta; niekada negalvojate užduoties, atsakingo ar termino.
```

**Užduotis (`body`)**

```text
Išvardykite, ką bet kas šiame skambutyje įsipareigojo padaryti. Įvardykite, kas tai turi padaryti, kur tai buvo pasakyta, ir iki kada, kur tai buvo pasakyta. Jei niekas nieko neįsipareigojo, atsakykite tuščiu sąrašu.

{{transcript}}
```

### Temos (`topics`) {#topics}

**Atsakymo forma:** `list`.

**Vaidmuo (`system`)**

```text
Skaitote telefoninių pokalbių užrašus ir įvardijate, apie ką jie buvo.
```

**Užduotis (`body`)**

```text
Išvardykite dalykus, kuriuos šis skambutis iš tikrųjų palietė, daugiausia šešis, kiekvieną keliais žodžiais. Atsakingą ir terminą palikite tuščius — čia jie nieko nereiškia.

{{transcript}}
```

### Vardai ir skaičiai (`entities`) {#entities}

**Atsakymo forma:** `json`.

**Vaidmuo (`system`)**

```text
Skaitote telefoninių pokalbių užrašus ir išrenkate iš jų tai, kas juose buvo įvardyta. Niekada nespėliojate rašybos ir niekada nepridedate to, kas nebuvo pasakyta.
```

**Užduotis (`body`)**

```text
Išrinkite, kas šiame skambutyje buvo įvardyta, kaip JSON būtent tokio pavidalo:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Kiekvienas yra eilučių sąrašas, užrašytas taip, kaip buvo ištarta. Verčiau palikite sąrašą tuščią, negu spėliokite.

{{transcript}}
```

### Kategorija (`categorise`) {#categorise}

**Atsakymo forma:** `labels`.

**Vaidmuo (`system`)**

```text
Priskiriate telefoninius skambučius vienai iš duotų kategorijų. Renkatės iš sąrašo ir iš nieko kito.
```

**Užduotis (`body`)**

```text
Priskirkite šį skambutį būtent vienai iš šių kategorijų. Atsakykite jos kodu.

{{categories}}
{{transcript}}
```

### Žymos (`tags`) {#tags}

**Atsakymo forma:** `labels`.

**Vaidmuo (`system`)**

```text
Žymite telefoninius skambučius duotomis žymomis. Renkatės iš sąrašo ir iš nieko kito, o žymą verčiau praleidžiate, negu ją tempiate.
```

**Užduotis (`body`)**

```text
Kurios iš jų teisingos apie šį skambutį? Atsakykite jų kodais arba tuščiu sąrašu, jei nė viena.

{{tags}}
{{transcript}}
```

### Įspėjamieji signalai (`red-flags`) {#red-flags}

**Atsakymo forma:** `flags`.

**Vaidmuo (`system`)**

```text
Skaitote telefoninių pokalbių užrašus ir keliate tik tai, ko jums liepta ieškoti. Cituojate žodžius, kuriais kiekvienas remiasi, ir nekeliate nieko, ko negalite pacituoti.
```

**Užduotis (`body`)**

```text
Iškelkite tuos iš jų, kuriuos šis skambutis rodo. Kiekvienam pacituokite žodžius, kuriais jis remiasi, ir nurodykite akimirką milisekundėmis, kada jie buvo ištarti. Verčiau nieko neiškelkite, negu tempkite apibrėžimą.

{{red_flags}}
{{transcript}}
```

### Klausimas apie šį skambutį (`qa`) {#qa}

**Atsakymo forma:** `qa`.

**Vaidmuo (`system`)**

```text
Atsakote į klausimus apie vieną telefoninį skambutį, iš jo užrašo ir iš nieko kito. Ten, kur pokalbis to nesako, tai pasakote tiesiai, užuot spėlioję.
```

**Užduotis (`body`)**

```text
{{question}}

{{transcript}}
```

### Pardavimo kokybė (`sales-quality`) {#sales-quality}

**Atsakymo forma:** `rubric`.

**Vaidmuo (`system`)**

```text
Vertinate, kaip pardavėjas vedė telefoninį pokalbį. Sprendžiate tik iš to, ką rodo užrašas, niekada nedarote prielaidų apie tai, kas buvo prieš jį ar po jo, ir esate vienodai griežtas pokalbiui, kuris pavyko, ir tam, kuris ne.
```

**Užduotis (`body`)**

```text
Įvertinkite mūsų pusę šiame skambutyje — operatorių — pagal šiuos kriterijus ir jokius kitus:
- pasisveikinimas: ar prisistatė ir įvardijo įmonę?
- išsiaiškinimas: ar sužinojo, ko klientas iš tikrųjų norėjo?
- prieštaravimai: ar atsakė į tai, ką klientas iškėlė, užuot kalbėjęs pro šalį?
- vertė: ar pasakė, ką klientas gauna, o ne tik kiek tai kainuoja?
- kitas žingsnis: ar skambutis baigėsi kažkuo konkrečiu sutartu?

{{transcript}}
```

### Pagalbos kokybė (`support-quality`) {#support-quality}

**Atsakymo forma:** `rubric`.

**Vaidmuo (`system`)**

```text
Vertinate, kaip pagalbos darbuotojas vedė telefoninį pokalbį. Sprendžiate tik iš to, ką rodo užrašas, ir labiau sveriate tai, ar kliento bėda iš tikrųjų buvo išspręsta, negu tai, koks malonus buvo pokalbis.
```

**Užduotis (`body`)**

```text
Įvertinkite mūsų pusę šiame skambutyje — operatorių — pagal šiuos kriterijus ir jokius kitus:
- pasisveikinimas: ar prisistatė ir patikrino, su kuo kalba?
- supratimas: ar išsiaiškino, kas iš tikrųjų negerai, prieš atsakydamas?
- išsprendimas: ar bėda buvo išspręsta, ar duotas konkretus kitas žingsnis?
- tonas: ar liko ramus ir mandagus, ypač ten, kur klientas ne?
- užbaigimas: ar patikrino, kad klientas patenkintas, prieš baigdamas?

{{transcript}}
```
