---
title: Zpracování
sidebar_position: 2
description: Automatické zpracování rozhovorů, jazykové modely, pokyny, pravidla, která je spouštějí, a měsíční limity výdajů.
---

**Nastavení → Zpracování** rozhoduje, co se s rozhovorem stane, jakmile je nahrán, který model odvede práci a kolik to smí stát.

<Shot name="12_settings_processing" alt="Nastavení → Zpracování" />

## Zpracovávat hovory automaticky {#process-conversations-automatically}

- **Vypnuto:** nic se neděje, dokud o to nepožádáte v [okně nahrávek](../interface/recordings.md).
- **Zapnuto:** [pravidla](#rules) níže běží sama. To je to, co z rozhovoru udělá shrnutí, kategorii a vše ostatní, aniž by kdokoli cokoli stiskl. Model v cloudu si za každý z těchto kroků účtuje.

## Jazykové modely {#language-models}

Modely, které čtou přepis a píšou o něm. Stiskem **Přidat** model přidáte. Každý je uveden názvem a pod ním identifikátorem modelu a adresou jeho služby, například `qwen3-32b · http://localhost:8000/v1`. Ten označený jako **výchozí** — na obrázku **QWEN**, model na tomto počítači — se používá ve výchozím stavu: v pokynech a u těch pomocníků [našeptávače](prompter.md), kteří neuvádějí vlastní model. **Vyzkoušet** ve formuláři modelu ověří, že služba opravdu odpovídá, dřív než se na ni spolehnete.

- Model **na vlastním počítači** drží každý rozhovor ve firmě a jeho provoz nic nestojí.
- Model v cloudu — OpenAI, Claude, Mistral, DeepSeek, Groq a další — se platí za použití. Program ukazuje cenu každého volání v tokenech i v penězích.

## Pokyny {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Nastavení → Zpracování: pokyny" />

*To, oč jsou modely žádány.* Každý pokyn přišel s programem a každý je váš ke změně — i k vrácení. Každý je uveden názvem a pod ním tím, co píše a v jakém tvaru; **▲** a **▼** mění pořadí seznamu. Tvar — **Odpověď**, **Položky**, **Štítky**, **JSON**, **Próza**, **Signály** nebo **Kritéria** — rozhoduje, jak se odpověď uloží a zobrazí. Pokyny popisuje [Personal Prompt Studio](prompt-studio.md). **Přidat** vytvoří vlastní pokyn.

Po přepnutí jazyka rozhraní a stisku **Obnovit výchozí** jsou pokyny v novém jazyce a u každého je vpravo uvedeno *změněno*.

## Pravidla {#rules}

<Shot name="12c_settings_processing_rules" alt="Nastavení → Zpracování: pravidla" />

*To, co běží samo, v tomto pořadí. Každé se spustí nejvýše jednou na hovor.* Pravidlo je řádek se zaškrtávacím políčkem, které ho zapíná a vypíná, jeho názvem a pod ním tím, co dělá. **▲** a **▼** mění pořadí. Program přichází s osmi:

| Pravidlo | Dělá | Kdy |
| --- | --- | --- |
| **Přepsat každý hovor** | Přepíše ho. | vždy |
| **Shrnout ho** | Zeptá se modelu: **Shrnutí**. | vždy |
| **Zkrátit ho na jeden řádek** | Zeptá se modelu: **Shrnutí na jeden řádek**. | vždy |
| **Zařadit ho do kategorie** | Zeptá se modelu: **Kategorie**. | vždy |
| **Označit ho** | Zeptá se modelu: **Štítky**. | vždy |
| **Zvednout, co stojí za pohled** | Zeptá se modelu: **Varovné signály**. | vždy |
| **Posoudit ho, pokud šlo o prodej** | Zeptá se modelu: **Kvalita prodeje**. | jen pokud je kategorie **Prodej** |
| **Posoudit ho, pokud šlo o podporu** | Zeptá se modelu: **Kvalita podpory**. | jen pokud je kategorie **Podpora** |

Na pořadí záleží: poslední dvě pravidla potřebují kategorii, kterou nastavilo pravidlo před nimi. **Přidat** vytvoří vlastní pravidlo.

## Výdaje {#spending}

<Shot name="12d_settings_processing_spending" alt="Nastavení → Zpracování: výdaje za měsíc a dva limity" />

V části **Výdaje** program ukazuje, kolik se tento měsíc utratilo a za kolik požadavků — na obrázku *Tento měsíc se nic nezpracovalo*, a například *Tento měsíc: 40 492 tokenů, v 84 požadavcích, bez poplatku*, jakmile se už něco zpracovalo.

| Pole | Význam |
| --- | --- |
| **Mez peněz, měsíčně** | Nejvíc, kolik smějí modely za měsíc stát. |
| **Mez tokenů, měsíčně** | Nejvíc tokenů, kolik smějí za měsíc použít. |

Limity jsou dva, protože měsíc se dá počítat ve dvou jednotkách. Oba jsou prázdné, dokud je nevyplníte. Když se kterýkoli z nich dosáhne, automatická pravidla se zastaví do konce měsíce. **To, oč požádáte sami, se nikdy nezastaví.** [Našeptávač](prompter.md#spending) má vlastní stropy, aby ho měsíc shrnutí nemohl umlčet uprostřed rozhovoru.

## Výchozí {#defaults}

**Obnovit výchozí** vrátí pokyny a pravidla tak, jak přišly s programem, v aktuálním jazyce rozhraní. Vaše jazykové modely zůstanou nedotčené.
