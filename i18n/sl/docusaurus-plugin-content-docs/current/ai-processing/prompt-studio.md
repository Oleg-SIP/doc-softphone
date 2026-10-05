---
title: Personal Prompt Studio
sidebar_position: 3
description: Navodila, ki obdelujejo vaše pogovore, pravila, ki jih poganjajo, in kako jih prilagodite sebi.
---

**Personal Prompt Studio** je del AI Softphone, ki obdeluje vaše pogovore po vaše. Obdelavo naredijo navodila: program pride z enajstimi, pripravljenimi za uporabo, takoj ko sta povezana prepis in jezikovni model, vi pa jih lahko spreminjate z navadnim jezikom, podvajate in dodajate svoja. Navedena so pod **Navodila** v [Nastavitve → Obdelava](processing.md#prompts).

Vaš LLM, vaš ključ, vaš nadzor: povežite model, ki vam je ljubši, z lastnim ključem, prek podprte storitve ali združljivega API-ja — ali model, nameščen v vaši organizaciji. Ko tudi [prepis](transcription.md#your-own-models) teče na lastni strojni opremi, ostanejo zvok in prepisi v vašem okolju.

<Shot name="12b_settings_processing_prompts" alt="Seznam navodil v Nastavitve → Obdelava" />

## Navodila, ki pridejo s programom {#the-prompts-that-come-with-the-program}

Drugi stolpec je to, kar seznam pokaže pod imenom navodila: kaj piše in v kateri obliki.

| Navodilo | Oblika | Kaj piše |
| --- | --- | --- |
| **Povzetek** | Proza | Glavne točke, odločitve in naslednje korake v enem kratkem odstavku. |
| **Povzetek v eni vrstici** | Proza | Kratek naslov, po katerem pogovor prepoznate na seznamu. |
| **Naloge** | Postavke | Kdo se je zavezal, da bo kaj naredil in kdaj, z besedami, ki jih je rekel. |
| **Teme** | Postavke | Teme, ki so bile obravnavane, v nekaj besedah. |
| **Imena in številke** | JSON | Ljudje, podjetja, datumi, zneski in sklici. |
| **Kategorija** | Oznake | Uvrsti pogovor v eno od vaših [kategorij](dictionaries.md). |
| **Oznake** | Oznake | Nanj postavi vaše [oznake](dictionaries.md), da ga je mogoče pozneje najti. |
| **Opozorilni znaki** | Signali | Težave, z dokazom in časom v pogovoru. |
| **Vprašanje o tem klicu** | Odgovor | Odgovori na vprašanje, ki ga zastavite o enem pogovoru, na podlagi njegovega prepisa. |
| **Kakovost prodaje** | Merila | Pregleda pogovor po prodajnih merilih, ki jih lahko urejate. |
| **Kakovost podpore** | Merila | Presodi, kako dobro je bila težava razumljena in rešena. |

Oblike so stalne podobe odgovora, in prav to programu omogoča, da ga shrani in pozneje po njem išče: **Oznake** so kode z enega od vaših seznamov, **Signali** so kode z resnostjo, **Merila** so ocena z razlogom in oceno za vsako merilo, **Odgovor** je odgovor z besedami, na katere se opira. Navodila, ki modelu povedo obliko, se hranijo v [Slovarjih](dictionaries.md#answer-shapes-and-language).

Klici, opravljeni v AI Softphone, sestanki, [zajeti](/capture/) z računalnika, in uvoženi posnetki gredo skozi ista navodila, takoj ko imajo prepis.

Naloge beležijo, kaj je bilo dogovorjeno — namesto vas ne pošiljajo sporočil, ne rezervirajo obiskov in ne ustvarjajo zahtevkov.

## Prilagoditev {#making-it-yours}

- Spremenite, kaj navodilo zahteva, z navadnim jezikom: kaj išče, obliko odgovora in jezik, v katerem odgovarja.
- Podvojite navodilo, da preizkusite različico.
- Izberite model za vsako navodilo — na lastnem računalniku ali v oblaku.
- Nastavite vrstni red, v katerem navodila tečejo, jih vklapljajte in izklapljajte ter jih naredite pogojna — to se naredi s [pravili](processing.md#rules): na primer pregled prodaje teče le pri klicih, uvrščenih kot **Prodaja**.
- Vodite svoje kategorije, oznake in opozorilne znake v [Slovarjih](dictionaries.md).
- Omejite stroške z [mesečnimi mejami](processing.md#limits).

Izvirna navodila in pravila je mogoče obnoviti z **Obnovi privzeto** pod **Privzete vrednosti** v [Nastavitve → Obdelava](processing.md#defaults).
