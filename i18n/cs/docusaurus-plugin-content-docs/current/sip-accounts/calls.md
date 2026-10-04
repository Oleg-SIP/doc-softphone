---
title: Nastavení hovorů
sidebar_position: 3
description: Kodeky nabízené ústředně, co se stane, když přijde druhý hovor, automatické opakování a jak dlouho se uchovává historie hovorů.
---

**Nastavení → Hovory** obsahuje nastavení, která patří ke každému hovoru, ať je na kterémkoli účtu.

## Zvukové formáty {#audio-formats}

<Shot name="07_settings_calls" alt="Nastavení → Hovory: zvukové formáty" />

Seznam kodeků, které telefon nabízí druhé straně. Kodeky jsou *nabízeny v tomto pořadí* a druhý konec vybírá z toho, co nabídnete: čím výš kodek stojí, tím spíš se použije.

- **Zaškrtávací políčko** kodek zapíná a vypíná. Vypnutý kodek se nenabízí.
- **▲** a **▼** ho posouvají v seznamu nahoru nebo dolů.
- *širokopásmový* vpravo označuje kodek se širším rozsahem zvuku, než má telefonní linka: hlas je zřetelnější.

| Kodek | Vzorkovací frekvence | Ve výchozím stavu zapnut |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, širokopásmový | ano |
| **G722** | 16 kHz, širokopásmový | ano |
| **PCMU** | 8 kHz | ano |
| **PCMA** | 8 kHz | ano |
| **speex** | 16 kHz, širokopásmový | ne |
| **speex** | 8 kHz | ne |
| **speex** | 32 kHz, širokopásmový | ne |
| **iLBC** | 8 kHz | ne |
| **GSM** | 8 kHz | ne |
| **L16** | 44 kHz, stereo, širokopásmový | ne |
| **L16** | 44 kHz, širokopásmový | ne |

Tabulka je v pořadí, se kterým program přichází.

Kodeky se dohodnou na začátku hovoru, takže změna platí od příštího hovoru. Pokud hovor zní špatně, nechte zapnuté jen kodeky, které vaše ústředna používá.

## Čekání hovoru {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Nastavení → Hovory: čekání hovoru, automatické opakování a historie" />

*Co se stane, když vám někdo volá, zatímco už telefonujete.* Vybírá to rozbalovací seznam; výchozí je **Nechat druhý hovor zvonit**. Interkom z vaší vlastní ústředny projde vždy, ať zvolíte cokoli — právě tak se k tomuto telefonu dostane hovor zadaný z panelu CTI.

## Automatické opakování {#autodial}

Když se hovor nedovolá, jeho karta nabídne vytáčet dál, dokud se to nepovede. Dva posuvníky nastavují jak:

- **Čekání mezi pokusy** — ve výchozím stavu 15 sekund;
- **Vzdát to po** — ve výchozím stavu 30 minut.

## Historie {#history}

Záznam hovorů je doklad, takže se z něj nic neodstraňuje, dokud to tady neřeknete.

- **Doba uchovávání** vybírá, jak dlouho [historie hovorů](/interface/contacts-history#history) hovor uchovává. Výchozí je **Vždy**.
- **Vymazat historii hovorů** smaže všechny hovory najednou, bez ohledu na dobu uchovávání. Nelze to vrátit.
