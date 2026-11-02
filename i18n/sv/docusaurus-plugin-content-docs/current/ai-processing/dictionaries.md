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
| **Försäljning** | `sales` | Sälja, offerera, förhandla eller följa upp ett köp — även en kund som frågar vad något kostar. |
| **Support** | `support` | Hjälpa någon med en produkt eller tjänst hen redan har: ett fel, en fråga om användningen, ett klagomål på hur det fungerar. |
| **Privat** | `personal` | Inte affärer alls — ett privat samtal som råkade gå över den här linjen. |
| **Övrigt** | `other` | Affärer, men varken försäljning eller support: en leverantör, en kollega, en leverans, ett feluppringt nummer. Välj det här hellre än att gissa mellan de andra. |

Tryck på **Lägg till** för att lägga till en egen kategori.

## Etiketter {#tags}

Märkningar som *alla kan stämma in på samma samtal*. Tryck på **Lägg till** för att lägga till en. Listan börjar med poster som:

| Namn | Kod | Används för |
| --- | --- | --- |
| **Återuppringning utlovad** | `callback` | Någon i det här samtalet lovade att ringa upp, eller bad att bli uppringd. |
| **Klagomål** | `complaint` | Motparten uttryckte missnöje, oavsett om det löstes eller inte. |
| **Eskalerat** | `escalation` | Samtalet lämnades över till någon annan, eller motparten bad om det. |
| **Viktig kund** | `vip` | Motparten behandlades som ett viktigt konto, eller sa sig vara det. |

## Signaler {#red-flags}

Saker som kräver uppmärksamhet, hittade i samtalet med beviset och tidpunkten — till exempel *Arg kund* eller *Avhopprisk*. Signaler ritas i rött i [fönstret Inspelningar](../interface/recordings.md), och var och en har en allvarlighetsgrad: låg, medel eller hög.

| Namn | Kod | `severity` | Används för |
| --- | --- | --- | --- |
| **Arg kund** | `angry-customer` | `high` | Motparten var hörbart arg, förolämpande, eller hotade att lämna. |
| **Avhopprisk** | `churn-risk` | `high` | Uppsägning, utebliven förnyelse eller byte till någon annan togs upp, hur lugnt det än var. |
| **Löfte givet** | `promise-made` | `medium` | Vår sida band sig vid något bestämt — ett datum, ett pris, en åtgärd, en återbetalning. |
| **Känsliga uppgifter** | `sensitive-data` | `high` | Ett kortnummer, ett lösenord, ett dokumentnummer eller något annat som inte hör hemma i en inspelning lästes upp. |
| **Konkurrent** | `competitor` | `low` | Motparten nämnde någon annan som erbjuder samma sak, eller jämförde oss med den. |

## Anvisningar {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Inställningar → Ordlistor: svarsformer och språkinstruktioner" />

*Det som läggs till varje prompt om svarets form och språket att skriva det på.* De sparas här så att varje prompt kan använda samma formulering, och du kan ändra dem som vilken annan post som helst — eller skriva egna, till exempel *svara kort* eller *nämn aldrig ett pris*, och kryssa i dem under **Skicka även** på vilken prompt som helst.

| Namn | Kod | Vad den talar om för modellen |
| --- | --- | --- |
| **Löpande text** | `shape-plain` | Svara med vanlig löpande text, utan JSON, listor eller rubriker. |
| **Punkter** | `shape-list` | Svara med en lista över saker att göra, var och en med vem och när. |
| **Etiketter** | `shape-labels` | Svara i JSON med en lista över koder och hur säker den är på var och en, bara med koder från listan den har fått. |
| **Betyg** | `shape-score` | Svara med ett betyg, motiveringen till det och orden det bygger på. |
| **Kriterier** | `shape-rubric` | Svara med ett sammanlagt betyg och ett betyg för varje kriterium. |
| **Signaler** | `shape-flags` | Svara med koder från listan, var och en med en allvarlighetsgrad. |
| **Svar** | `shape-qa` | Svara med svaret, eller säg rakt ut att samtalet inte säger det, och orden svaret bygger på. |
| **JSON** | `shape-json` | Svara bara med JSON, i den form som efterfrågas ovan. |
| **Som det talades** | `language-as-spoken` | Skriv på språket som samtalet fördes på. |
| **Som det talades, namngivet** | `language-as-spoken-named` | Samma sak, med språkets namn. |
| **Ett namngivet språk** | `language-named` | Skriv på det språk du anger. |

**Lägg till** överst i listan lägger till en post.

## Standardvärden {#defaults}

**Återställ standardvärden** ställer tillbaka varje ordlista som den kom med programmet, på gränssnittets nuvarande språk. Det dina samtal redan är sorterade under lämnas orört.

## Svarsformat {#response-formats}

Blocken återger de medföljande instruktionerna. De beskriver svarsformat; alternativ är notation, inte körbara JSON-exempel.

### Löpande text (`shape-plain`) {#shape-plain}

```text
Svara i löpande text. Använd inte JSON, listor eller rubriker.
```

### Punkter (`shape-list`) {#shape-list}

```text
Svara bara med JSON, exakt av den här formen:
{"items": [{"text": "vad som ska göras", "owner": "vem, eller tomt", "due": "när, eller tomt"}]}
Svara med en tom array när det inte finns något att räkna upp. Skriv ingenting utanför JSON:en.
```

### Etiketter (`shape-labels`) {#shape-labels}

```text
Svara bara med JSON, exakt av den här formen:
{"labels": [{"code": "en kod ur listan du fått", "confidence": 0.0}]}
Använd bara koder ur listan. Svara med en tom array när ingen passar.
Hitta inte på en kod, och skriv ingenting utanför JSON:en.
```

### Betyg (`shape-score`) {#shape-score}

```text
Svara bara med JSON, exakt av den här formen:
{"score": 3, "rationale": "varför den siffran och inte en högre",
 "evidence": [{"at_ms": 0, "quote": "orden du bygger på"}]}
Betyget är ett heltal från 1 till 5. Skriv ingenting utanför JSON:en.
```

### Kriterier (`shape-rubric`) {#shape-rubric}

```text
Svara bara med JSON, exakt av den här formen:
{"overall": 3, "rationale": "varför den siffran och inte en högre",
 "criteria": [{"name": "kriteriet som det gavs till dig",
               "verdict": "pass" eller "weak" eller "fail" eller "n/a",
               "note": "en mening"}]}
Bedöm varje kriterium du fått och inga andra. Helhetsbetyget är ett heltal
från 1 till 5. Skriv ingenting utanför JSON:en.
```

### Signaler (`shape-flags`) {#shape-flags}

```text
Svara bara med JSON, exakt av den här formen:
{"flags": [{"code": "en kod ur listan du fått",
            "severity": "low" eller "medium" eller "high",
            "evidence": "orden du bygger på",
            "at_ms": 0}]}
Använd bara koder ur listan, och ta upp var och en högst en gång. Svara med en tom
array när ingenting stämmer. Skriv ingenting utanför JSON:en.
```

### Svar (`shape-qa`) {#shape-qa}

```text
Svara bara med JSON, exakt av den här formen:
{"answer": "ditt svar, eller säg rakt ut att samtalet inte säger det",
 "citations": [{"at_ms": 0, "quote": "orden ditt svar vilar på"}]}
Svara inte utifrån något annat än samtalet. Skriv ingenting utanför
JSON:en.
```

### JSON (`shape-json`) {#shape-json}

```text
Svara bara med JSON, i den form som begärts ovan. Skriv ingenting utanför JSON:en.
```

### Som det talades (`language-as-spoken`) {#language-as-spoken}

```text
Skriv ditt svar på samma språk som samtalet fördes på.
```

### Som det talades, namngivet (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Skriv ditt svar på samma språk som samtalet fördes på, alltså {language}.
```

### Ett namngivet språk (`language-named`) {#language-named}

```text
Skriv ditt svar på det här språket: {language}.
```
