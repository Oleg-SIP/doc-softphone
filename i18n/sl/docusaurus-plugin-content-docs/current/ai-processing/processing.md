---
title: Obdelava
sidebar_position: 2
description: Samodejna obdelava pogovorov, mesečne meje porabe, jezikovni modeli, navodila in pravila, ki jih poganjajo.
---

**Nastavitve → Obdelava** odloča, kaj se zgodi s pogovorom, ko je posnet, kateri model opravi delo in koliko sme to stati.

<Shot name="12_settings_processing" alt="Nastavitve → Obdelava" />

## Obdeluj pogovore samodejno {#process-conversations-automatically}

- **Izklopljeno:** nič se ne zgodi, dokler tega ne zahtevate v [oknu Posnetki](../recordings/recordings-window.md).
- **Vklopljeno:** spodnja [pravila](#rules) tečejo sama. Prav to pogovor spremeni v povzetek, kategorijo in vse drugo, ne da bi kdor koli kar koli pritisnil. Model v oblaku zaračuna vsakega od teh korakov.

Pod potrditvenim poljem program pokaže, koliko je bilo porabljeno ta mesec in na koliko zahtevah, na primer *Ta mesec: 40.492 žetonov, v 84 zahtevah, brez stroškov.*

## Meje {#limits}

| Polje | Pomen |
| --- | --- |
| **Denarna meja, mesečno** | Največ, koliko smejo modeli stati v mesecu. |
| **Meja žetonov, mesečno** | Največ žetonov, kolikor jih smejo porabiti v mesecu. |

Meji sta dve, ker se mesec lahko šteje v dveh stvareh. Obe sta prazni, dokler ju ne izpolnite. Ko je dosežena katera koli, se samodejna pravila ustavijo do konca meseca. **Kar zahtevate sami, se nikoli ne ustavi.**

## Jezikovni modeli {#language-models}

Modeli, ki preberejo prepis in pišejo o njem. Pritisnite **Dodaj**, da dodate enega. Vsak je naveden s svojim imenom, pod njim pa z identifikatorjem modela in naslovom svoje storitve, na primer `qwen3-32b · http://llm.local:8000/v1`. Tisti, ki je označen kot **Privzeto**, se uporablja privzeto. Gumb v obrazcu modela preveri, ali storitev res odgovarja, preden se nanjo zanesete.

- Model **na lastnem računalniku** drži vsak pogovor v stavbi in ne stane nič.
- Model v oblaku — OpenAI, Claude, Mistral, DeepSeek, Groq in drugi — se zaračuna po uporabi. Program pokaže ceno vsakega klica v žetonih in v denarju.

## Navodila {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Nastavitve → Obdelava: navodila" />

*To, kar se od modelov zahteva.* Vsako navodilo je prišlo s programom in vsako je vaše, da ga spremenite — in da ga vrnete. Vsako je navedeno s svojim imenom, pod njim pa s tem, kaj piše in v kateri obliki. Oblika — **Odgovor**, **Postavke**, **Oznake**, **JSON**, **Proza**, **Signali** ali **Merila** — odloča, kako se odgovor shrani in prikaže. Navodila so opisana v [Personal Prompt Studio](prompt-studio.md). **Dodaj** naredi lastno navodilo.

## Pravila {#rules}

<Shot name="12c_settings_processing_rules" alt="Nastavitve → Obdelava: pravila" />

*To, kar teče samo, v tem vrstnem redu. Vsako se sproži največ enkrat na pogovor.* Pravilo je vrstica s potrditvenim poljem, ki ga vklopi ali izklopi, njegovim imenom, pod njim pa s tem, kaj naredi. **▲** in **▼** spremenita vrstni red. Program pride z osmimi:

| Pravilo | Kaj naredi | Kdaj |
| --- | --- | --- |
| **Prepiši vsak pogovor** | Ga prepiše. | vedno |
| **Povzemi ga** | Vpraša model: **Povzetek**. | vedno |
| **Skrči ga na eno vrstico** | Vpraša model: **Povzetek v eni vrstici**. | vedno |
| **Uvrsti ga v kategorijo** | Vpraša model: **Kategorija**. | vedno |
| **Označi ga** | Vpraša model: **Oznake**. | vedno |
| **Sproži, kar je vredno pogleda** | Vpraša model: **Opozorilni znaki**. | vedno |
| **Presodi ga, če je šlo za prodajo** | Vpraša model: **Kakovost prodaje**. | le če je kategorija **Prodaja** |
| **Presodi ga, če je šlo za podporo** | Vpraša model: **Kakovost podpore**. | le če je kategorija **Podpora** |

Vrstni red je pomemben: zadnji dve pravili potrebujeta kategorijo, ki jo je nastavilo pravilo pred njima. **Dodaj** naredi lastno pravilo.

## Privzete vrednosti {#defaults}

**Obnovi privzeto** vrne navodila in pravila, kot so prišla s programom, v trenutnem jeziku vmesnika. Vaši jezikovni modeli ostanejo nedotaknjeni.

Navodila in pravila, ki so prišla s programom, ob zamenjavi jezika vmesnika ostanejo v jeziku, v katerem so bila; **Obnovi privzeto** jih prenese v novega. Vsako navodilo je nato na desni označeno kot *spremenjeno*.
