---
title: Slovníky
sidebar_position: 4
description: Vaše vlastní kategorie, štítky a varovné signály — slova, pod která se vaše rozhovory zařazují.
---

**Nastavení → Slovníky** obsahuje slova, pod která lze rozhovor zařadit, kterými ho lze oštítkovat nebo označit. Tyto seznamy jsou to, co se modelům ukazuje a z čeho musí vybírat, takže odpověď je vždy něco, co lze později vyhledat.

<Shot name="13_settings_dictionaries" alt="Nastavení → Slovníky" />

**Zobrazit smazané** ukáže položky, které jste smazali.

Každá položka má název, krátký kód drobným písmem a popis, který modelu říká, kdy ji vybrat. Ukládá se kód a ten vrací i [REST API](../integration/rest-api.md#taxonomy-and-settings), takže zůstává stejný, i když položku přejmenujete.

Názvy a popisy, které přicházejí s programem, jsou v jazyce rozhraní. Po přepnutí jazyka je převedete tlačítkem **Obnovit výchozí** dole na kartě.

## Kategorie {#categories}

O čem rozhovor byl; *na hovor se vybírá jedna*. Program začíná se čtyřmi:

| Název | Kód | Použití |
| --- | --- | --- |
| **Prodej** | `sales` | Prodej, nabídka, vyjednávání nebo dotažení nákupu — včetně zákazníka, který se ptá, co něco stojí. |
| **Podpora** | `support` | Pomoc někomu s výrobkem nebo službou, kterou už má: závada, dotaz k používání, stížnost na to, jak to funguje. |
| **Soukromý** | `personal` | Vůbec ne pracovní — soukromý hovor, který se náhodou vedl na této lince. |
| **Jiné** | `other` | Pracovní, ale ani prodej, ani podpora: dodavatel, kolega, dodávka, omyl. Zvolte tohle, místo abyste hádali mezi ostatními. |

Vlastní kategorii přidáte tlačítkem **Přidat**.

## Štítky {#tags}

Značky, *které mohou o tomtéž hovoru platit všechny*. Nový přidáte tlačítkem **Přidat**. Seznam začíná položkami jako:

| Název | Kód | Použití |
| --- | --- | --- |
| **Slíbeno zavolat zpět** | `callback` | Někdo v tomto hovoru slíbil zavolat zpět nebo o zpětné zavolání požádal. |
| **Stížnost** | `complaint` | Druhá strana vyjádřila nespokojenost, ať už se to vyřešilo, nebo ne. |
| **Předáno výš** | `escalation` | Hovor byl předán někomu jinému, nebo o to druhá strana požádala. |
| **Zákazník VIP** | `vip` | S druhou stranou se jednalo jako s důležitým zákazníkem, nebo to o sobě sama řekla. |

## Varovné signály {#red-flags}

Věci, které vyžadují pozornost, nalezené v rozhovoru s důkazem a časem — například *Rozzlobený zákazník* nebo *Riziko odchodu*. Varovné signály jsou v [okně nahrávek](../interface/recordings.md) červeně a každý má závažnost: nízkou, střední nebo vysokou.

| Název | Kód | `severity` | Použití |
| --- | --- | --- | --- |
| **Rozzlobený zákazník** | `angry-customer` | `high` | Bylo slyšet, že je druhá strana rozzlobená, uráží nebo hrozí odchodem. |
| **Riziko odchodu** | `churn-risk` | `high` | Padlo zrušení, neprodloužení nebo přechod k někomu jinému, byť sebeklidněji. |
| **Daný slib** | `promise-made` | `medium` | Naše strana se zavázala k něčemu konkrétnímu — termínu, ceně, opravě, vrácení peněz. |
| **Citlivé údaje** | `sensitive-data` | `high` | Nahlas zaznělo číslo karty, heslo, číslo dokladu nebo cokoli jiného, co v nahrávce být nemá. |
| **Konkurent** | `competitor` | `low` | Druhá strana jmenovala někoho jiného, kdo nabízí totéž, nebo nás s ním srovnala. |

## Pokyny {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Nastavení → Slovníky: tvary odpovědí a jazykové instrukce" />

*To, co se přidává ke každému pokynu o tvaru odpovědi a jazyce, ve kterém ji psát.* Jsou tady, aby každý pokyn mohl použít stejné znění, a můžete je měnit jako každou jinou položku — nebo napsat vlastní, například *odpovídej stručně* či *nikdy neuváděj cenu*, a zaškrtnout je v **Poslat také** u kteréhokoli pokynu.

| Název | Kód | Co modelu říká |
| --- | --- | --- |
| **Próza** | `shape-plain` | Odpovědět prostou prózou, bez JSONu, seznamů a nadpisů. |
| **Položky** | `shape-list` | Odpovědět seznamem věcí k udělání, u každé kdo a kdy. |
| **Štítky** | `shape-labels` | Odpovědět JSONem se seznamem kódů a jistotou u každého, jen s kódy ze seznamu, který dostal. |
| **Hodnocení** | `shape-score` | Odpovědět skóre, jeho zdůvodněním a slovy, o která se opírá. |
| **Kritéria** | `shape-rubric` | Odpovědět celkovým skóre a skóre pro každé kritérium. |
| **Signály** | `shape-flags` | Odpovědět kódy ze seznamu, každým se závažností. |
| **Odpověď** | `shape-qa` | Odpovědět, nebo rovnou říct, že to rozhovor neříká, a uvést slova, o která se odpověď opírá. |
| **JSON** | `shape-json` | Odpovědět jen JSONem ve tvaru požadovaném výše. |
| **Jak se mluvilo** | `language-as-spoken` | Psát v jazyce, ve kterém byl rozhovor. |
| **Jak se mluvilo, jmenovitě** | `language-as-spoken-named` | Totéž, s uvedením jazyka. |
| **Určený jazyk** | `language-named` | Psát v jazyce, který určíte. |

**Přidat** na začátku seznamu přidá položku.

## Výchozí {#defaults}

**Obnovit výchozí** vrátí každý slovník tak, jak přišel s programem, v aktuálním jazyce rozhraní. To, pod čím jsou vaše hovory už zařazeny, zůstane nedotčeno.

## Formáty odpovědí {#response-formats}

Bloky uvádějí dodávané instrukce. Popisují formáty odpovědí; alternativy jsou zápisem možností, nikoli spustitelnými příklady JSON.

### Próza (`shape-plain`) {#shape-plain}

```text
Odpovězte prostou prózou. Nepoužívejte JSON, seznamy ani nadpisy.
```

### Položky (`shape-list`) {#shape-list}

```text
Odpovězte pouze JSONem, přesně tohoto tvaru:
{"items": [{"text": "co se má udělat", "owner": "kdo, nebo prázdné", "due": "kdy, nebo prázdné"}]}
Když není co vypsat, použijte prázdné pole. Nepište nic mimo JSON.
```

### Štítky (`shape-labels`) {#shape-labels}

```text
Odpovězte pouze JSONem, přesně tohoto tvaru:
{"labels": [{"code": "kód ze seznamu, který jste dostali", "confidence": 0.0}]}
Používejte jen kódy ze seznamu. Když nesedí žádný, použijte prázdné pole. Kód
si nevymýšlejte a nepište nic mimo JSON.
```

### Hodnocení (`shape-score`) {#shape-score}

```text
Odpovězte pouze JSONem, přesně tohoto tvaru:
{"score": 3, "rationale": "proč tohle číslo a ne o jedno vyšší",
 "evidence": [{"at_ms": 0, "quote": "slova, o která se to opírá"}]}
Hodnocení je celé číslo od 1 do 5. Nepište nic mimo JSON.
```

### Kritéria (`shape-rubric`) {#shape-rubric}

```text
Odpovězte pouze JSONem, přesně tohoto tvaru:
{"overall": 3, "rationale": "proč tohle číslo a ne o jedno vyšší",
 "criteria": [{"name": "kritérium tak, jak vám bylo zadáno",
               "verdict": "pass" nebo "weak" nebo "fail" nebo "n/a",
               "note": "jedna věta"}]}
Posuďte každé zadané kritérium a žádné jiné. Celkové hodnocení je celé číslo
od 1 do 5. Nepište nic mimo JSON.
```

### Signály (`shape-flags`) {#shape-flags}

```text
Odpovězte pouze JSONem, přesně tohoto tvaru:
{"flags": [{"code": "kód ze seznamu, který jste dostali",
            "severity": "low" nebo "medium" nebo "high",
            "evidence": "slova, o která se to opírá",
            "at_ms": 0}]}
Používejte jen kódy ze seznamu a každý zvedněte nejvýš jednou. Když nesedí nic,
použijte prázdné pole. Nepište nic mimo JSON.
```

### Odpověď (`shape-qa`) {#shape-qa}

```text
Odpovězte pouze JSONem, přesně tohoto tvaru:
{"answer": "vaše odpověď, nebo rovnou to, že to hovor neříká",
 "citations": [{"at_ms": 0, "quote": "slova, o která se odpověď opírá"}]}
Neodpovídejte z ničeho jiného než z hovoru. Nepište nic mimo JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Odpovězte pouze JSONem, ve tvaru popsaném výše. Nepište nic mimo JSON.
```

### Jak se mluvilo (`language-as-spoken`) {#language-as-spoken}

```text
Odpověď napište ve stejném jazyce, v jakém byl hovor.
```

### Jak se mluvilo, jmenovitě (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Odpověď napište ve stejném jazyce, v jakém byl hovor, tedy: {language}.
```

### Určený jazyk (`language-named`) {#language-named}

```text
Odpověď napište v tomto jazyce: {language}.
```
