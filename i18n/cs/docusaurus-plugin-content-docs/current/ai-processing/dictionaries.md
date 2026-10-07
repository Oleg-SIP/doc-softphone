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
| **Zákazník VIP** | `vip` | S druhou stranou se jednalo jako s důležitým zákazníkem, nebo se tak sama označila. |

## Varovné signály {#red-flags}

Věci, které vyžadují pozornost, nalezené v rozhovoru s důkazem a časem — například *Rozzlobený zákazník* nebo *Riziko odchodu*. Varovné signály jsou v [okně nahrávek](../interface/recordings.md) červeně a každý má závažnost: nízkou, střední nebo vysokou.

## Tvary odpovědí a jazyk {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Nastavení → Slovníky: tvary odpovědí a jazykové instrukce" />

Níže na kartě jsou instrukce, ze kterých se pokyny skládají. Jsou tady, aby každý pokyn mohl použít stejné znění, a můžete je měnit jako každou jinou položku.

| Název | Kód | Co modelu říká |
| --- | --- | --- |
| **Štítky** | `shape-labels` | Odpovědět JSONem se seznamem kódů a jistotou u každého, jen s kódy ze seznamu, který dostal. |
| **Hodnocení** | `shape-score` | Odpovědět skóre, jeho zdůvodněním a slovy, o která se opírá. |
| **Kritéria** | `shape-rubric` | Odpovědět celkovým skóre a skóre pro každé kritérium. |
| **Signály** | `shape-flags` | Odpovědět kódy ze seznamu, každým se závažností. |
| **Odpověď** | `shape-qa` | Odpovědět, nebo rovnou říct, že to rozhovor neříká, a uvést slova, o která se odpověď opírá. |
| **JSON** | `shape-json` | Odpovědět jen JSONem ve tvaru požadovaném výše. |
| **Jak se mluvilo** | `language-as-spoken` | Psát v jazyce, ve kterém byl rozhovor. |
| **Jak se mluvilo, jmenovitě** | `language-as-spoken-named` | Totéž, s uvedením jazyka. |
| **Určený jazyk** | `language-named` | Psát v jazyce, který určíte. |

**Přidat** na konci seznamu přidá položku.

## Výchozí {#defaults}

**Obnovit výchozí** vrátí každý slovník tak, jak přišel s programem, v aktuálním jazyce rozhraní. To, pod čím jsou vaše hovory už zařazeny, zůstane nedotčeno.
