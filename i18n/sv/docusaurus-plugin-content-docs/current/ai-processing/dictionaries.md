---
title: Ordlistor
sidebar_position: 4
description: Dina egna kategorier, etiketter och signaler — orden dina samtal sorteras under.
---

**Inställningar → Ordlistor** innehåller orden som ett samtal kan sorteras under, märkas med eller flaggas för. De här listorna är det modellerna får se och måste välja bland, så ett svar är alltid något du kan söka efter senare.

<Shot name="13_settings_dictionaries" alt="Inställningar → Ordlistor" />

**Visa borttagna** visar posterna du har tagit bort.

Varje post är ett namn, en kort kod med små bokstäver och en beskrivning som talar om för modellen när den ska väljas. Koden är det som sparas och det som [REST-API:et](../integration/rest-api.md#taxonomy-and-settings) returnerar, så den förblir densamma när du byter namn på posten.

## Kategorier {#categories}

Vad samtalet handlade om; **en väljs per samtal**. Programmet börjar med fyra:

| Namn | Kod | Används för |
| --- | --- | --- |
| **Försäljning** | `sales` | Att sälja, offerera, förhandla eller följa upp ett köp — även en kund som frågar vad något kostar. |
| **Support** | `support` | Att hjälpa någon med en produkt eller tjänst de redan har: ett fel, en fråga om användningen, ett klagomål på hur det fungerar. |
| **Privat** | `personal` | Inte affärer alls — ett privat samtal som råkade föras på den här linjen. |
| **Övrigt** | `other` | Affärer, men varken försäljning eller support: en leverantör, en kollega, en leverans, ett felringt nummer. Välj detta hellre än att gissa mellan de andra. |

Tryck på **Lägg till** för att lägga till en egen kategori.

## Etiketter {#tags}

Märkningar som *alla kan stämma in på samma samtal*. Tryck på **Lägg till** för att lägga till en. Listan börjar med poster som:

| Namn | Kod | Används för |
| --- | --- | --- |
| **Återuppringning utlovad** | `callback` | Någon i det här samtalet lovade att ringa tillbaka, eller bad om att bli uppringd. |
| **Klagomål** | `complaint` | Den andra parten uttryckte missnöje, oavsett om det löstes eller inte. |
| **Eskalerat** | `escalation` | Samtalet lämnades över till någon annan, eller den andra parten bad om det. |
| **Viktig kund** | `vip` | Den andra parten behandlades som, eller sa sig vara, en viktig kund. |

## Signaler {#red-flags}

Saker som kräver uppmärksamhet, hittade i samtalet med beviset och tidpunkten — till exempel *Arg kund* eller *Avhopprisk*. Signaler ritas i rött i [fönstret Inspelningar](../interface/recordings.md), och var och en har en allvarlighetsgrad: låg, medel eller hög.

## Svarsformer och språk {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Inställningar → Ordlistor: svarsformer och språkinstruktioner" />

Längre ned på fliken finns instruktionerna som prompterna sätts ihop av. De sparas här så att varje prompt kan använda samma formulering, och du kan ändra dem som vilken annan post som helst.

| Namn | Kod | Vad den talar om för modellen |
| --- | --- | --- |
| **Etiketter** | `shape-labels` | Svara i JSON med en lista över koder och hur säker den är på var och en, bara med koder från listan den har fått. |
| **Betyg** | `shape-score` | Svara med ett betyg, motiveringen till det och orden det bygger på. |
| **Kriterier** | `shape-rubric` | Svara med ett sammanlagt betyg och ett betyg för varje kriterium. |
| **Signaler** | `shape-flags` | Svara med koder från listan, var och en med en allvarlighetsgrad. |
| **Svar** | `shape-qa` | Svara med svaret, eller säg rakt ut att samtalet inte säger det, och orden svaret bygger på. |
| **JSON** | `shape-json` | Svara bara med JSON, i den form som efterfrågas ovan. |
| **Som det talades** | `language-as-spoken` | Skriv på språket som samtalet fördes på. |
| **Som det talades, namngivet** | `language-as-spoken-named` | Samma sak, med språkets namn. |
| **Ett namngivet språk** | `language-named` | Skriv på det språk du anger. |

**Lägg till** längst ned i listan lägger till en post.

## Standardvärden {#defaults}

**Återställ standardvärden** ställer tillbaka varje ordlista som den kom med programmet, på gränssnittets nuvarande språk. Det dina samtal redan är sorterade under lämnas orört.
