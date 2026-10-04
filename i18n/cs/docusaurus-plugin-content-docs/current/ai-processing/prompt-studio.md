---
title: Personal Prompt Studio
sidebar_position: 3
description: Pokyny, které dělají zápisy z vašich rozhovorů, pravidla, která je spouštějí, a jak si je přizpůsobit.
---

**Personal Prompt Studio** je část AI Softphone, která dělá zápisy z vašich rozhovorů po vašem. Zápis vytvářejí pokyny (prompty): program jich přináší jedenáct, připravených k použití, jakmile je připojen přepis a jazykový model, a můžete je měnit běžnou řečí, duplikovat a přidávat vlastní. Jsou uvedeny pod **Pokyny** v [Nastavení → Zpracování](processing.md#prompts).

Vaše LLM, váš klíč, vaše kontrola: připojte model, který preferujete, s vlastním klíčem, přes podporovanou službu nebo kompatibilní API — nebo model nasazený uvnitř vaší organizace. S [přepisem](transcription.md#your-own-models) na vlastním hardwaru zůstane ve vašem prostředí zvuk i přepisy.

<Shot name="12b_settings_processing_prompts" alt="Seznam pokynů v Nastavení → Zpracování" />

## Pokyny, které přicházejí s programem {#the-prompts-that-come-with-the-program}

Druhý sloupec je to, co seznam ukazuje pod názvem pokynu: co píše a v jakém tvaru.

| Pokyn | Tvar | Co píše |
| --- | --- | --- |
| **Shrnutí** | Próza | Hlavní body, rozhodnutí a další kroky v jednom krátkém odstavci. |
| **Shrnutí na jeden řádek** | Próza | Krátký titulek, podle kterého rozhovor v seznamu poznáte. |
| **Úkoly** | Položky | Kdo se zavázal co udělat a dokdy, s jeho vlastními slovy. |
| **Témata** | Položky | Probíraná témata v několika slovech. |
| **Jména a čísla** | JSON | Lidé, firmy, data, částky a odkazy. |
| **Kategorie** | Štítky | Zařadí rozhovor do jedné z vašich [kategorií](dictionaries.md). |
| **Štítky** | Štítky | Dá mu vaše [štítky](dictionaries.md), aby se dal později najít. |
| **Varovné signály** | Signály | Problémy s důkazem a časem v rozhovoru. |
| **Otázka k tomuto hovoru** | Odpověď | Odpoví na otázku, kterou položíte k jednomu rozhovoru, z jeho přepisu. |
| **Kvalita prodeje** | Kritéria | Posoudí rozhovor podle prodejních kritérií, která můžete upravit. |
| **Kvalita podpory** | Kritéria | Posoudí, jak dobře byl problém pochopen a vyřešen. |

Tvary jsou pevné podoby odpovědi, díky kterým ji program může uložit a později prohledávat: **Štítky** jsou kódy z jednoho z vašich seznamů, **Signály** jsou kódy se závažností, **Kritéria** jsou skóre se zdůvodněním a skórem pro každé kritérium, **Odpověď** je odpověď se slovy, o která se opírá. Instrukce, které modelu tvar popisují, jsou uloženy ve [Slovnících](dictionaries.md#answer-shapes-and-language).

Hovory uskutečněné v AI Softphone, schůzky [zachycené](/capture/) z počítače i importované nahrávky procházejí stejnými pokyny, jakmile mají přepis.

Úkoly zaznamenávají, na čem se strany dohodly — neposílají za vás zprávy, nerezervují návštěvy ani nezakládají tikety.

## Přizpůsobení {#making-it-yours}

- Změňte, na co se pokyn ptá, běžnou řečí: co hledá, formát odpovědi a jazyk, ve kterém odpovídá.
- Zduplikujte pokyn a vyzkoušejte variantu.
- Vyberte model pro každý pokyn — na vlastním počítači nebo v cloudu.
- Nastavte pořadí, ve kterém pokyny běží, zapínejte je a vypínejte a podmiňujte — to se dělá [pravidly](processing.md#rules): například hodnocení prodeje běží jen u hovorů zařazených jako **Prodej**.
- Vlastní kategorie, štítky a varovné signály držte ve [Slovnících](dictionaries.md).
- Omezte náklady [měsíčními limity](processing.md#limits).

Původní pokyny a pravidla obnovíte tlačítkem **Obnovit výchozí** v části **Výchozí** v [Nastavení → Zpracování](processing.md#defaults).
