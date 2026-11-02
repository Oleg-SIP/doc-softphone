---
title: Ordlister
sidebar_position: 4
description: Dine egne kategorier, etiketter og signaler — ordene samtalene dine sorteres under.
---

**Innstillinger → Ordlister** inneholder ordene en samtale kan sorteres under, merkes med eller flagges for. Disse listene er det modellene får se og må velge blant, så et svar er alltid noe du kan søke etter senere.

<Shot name="13_settings_dictionaries" alt="Innstillinger → Ordlister" />

**Vis slettede** viser oppføringene du har slettet.

Hver oppføring er et navn, en kort kode med små bokstaver og en beskrivelse som forteller modellen når den skal velges. Koden er det som lagres og det [REST-API-et](../integration/rest-api.md#taxonomy-and-settings) returnerer, så den forblir den samme når du gir oppføringen nytt navn.

## Kategorier {#categories}

Hva samtalen handlet om; **det velges én per samtale**. Programmet starter med fire:

| Navn | Kode | Brukes til |
| --- | --- | --- |
| **Salg** | `sales` | Å selge, gi tilbud, forhandle eller følge opp et kjøp — også en kunde som spør hva noe koster. |
| **Brukerstøtte** | `support` | Å hjelpe noen med et produkt eller en tjeneste de allerede har: en feil, et spørsmål om bruken, en klage på hvordan det virker. |
| **Privat** | `personal` | Ikke forretning i det hele tatt — en privat samtale som tilfeldigvis gikk over denne linjen. |
| **Annet** | `other` | Forretning, men verken salg eller brukerstøtte: en leverandør, en kollega, en levering, et feil nummer. Velg dette framfor å gjette mellom de andre. |

Trykk på **Legg til** for å legge til en egen kategori.

## Etiketter {#tags}

Merker som *alle kan passe på den samme samtalen*. Trykk på **Legg til** for å legge til en. Listen starter med oppføringer som:

| Navn | Kode | Brukes til |
| --- | --- | --- |
| **Tilbakeringing lovet** | `callback` | Noen i denne samtalen lovet å ringe tilbake, eller ba om å bli oppringt. |
| **Klage** | `complaint` | Motparten uttrykte misnøye, enten den ble løst eller ikke. |
| **Sendt videre** | `escalation` | Samtalen ble gitt videre til noen andre, eller motparten ba om det. |
| **Viktig kunde** | `vip` | Motparten ble behandlet som en viktig konto, eller sa seg å være det. |

## Signaler {#red-flags}

Ting som krever oppmerksomhet, funnet i samtalen med beviset og tidspunktet — for eksempel *Sint kunde* eller *Fare for oppsigelse*. Signaler tegnes i rødt i [vinduet Opptak](../interface/recordings.md), og hvert har en alvorlighetsgrad: lav, middels eller høy.

| Navn | Kode | `severity` | Brukes til |
| --- | --- | --- | --- |
| **Sint kunde** | `angry-customer` | `high` | Motparten var hørbart sint, fornærmende, eller truet med å gå. |
| **Fare for oppsigelse** | `churn-risk` | `high` | Oppsigelse, manglende fornyelse eller bytte til noen andre ble nevnt, uansett hvor rolig. |
| **Løfte gitt** | `promise-made` | `medium` | Vår side bandt seg til noe bestemt — en dato, en pris, en utbedring, en refusjon. |
| **Sensitive data** | `sensitive-data` | `high` | Et kortnummer, et passord, et dokumentnummer eller noe annet som ikke hører hjemme i et opptak, ble lest høyt. |
| **Konkurrent** | `competitor` | `low` | Motparten nevnte noen andre som tilbyr det samme, eller sammenlignet oss med dem. |

## Anvisninger {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Innstillinger → Ordlister: svarformer og språkinstruksjoner" />

*Det som legges til hver prompt om svarets form og språket å skrive det på.* De lagres her slik at hver prompt kan bruke samme ordlyd, og du kan endre dem som enhver annen oppføring — eller skrive dine egne, for eksempel *svar kort* eller *nevn aldri en pris*, og krysse dem av under **Send også** på hvilken som helst prompt.

| Navn | Kode | Hva den forteller modellen |
| --- | --- | --- |
| **Løpende tekst** | `shape-plain` | Svar i vanlig løpende tekst, uten JSON, lister eller overskrifter. |
| **Punkter** | `shape-list` | Svar med en liste over ting som skal gjøres, hver med hvem og når. |
| **Etiketter** | `shape-labels` | Svar i JSON med en liste over koder og hvor sikker den er på hver, bare med koder fra listen den har fått. |
| **Karakter** | `shape-score` | Svar med en karakter, begrunnelsen for den og ordene den bygger på. |
| **Kriterier** | `shape-rubric` | Svar med en samlet karakter og en karakter for hvert kriterium. |
| **Signaler** | `shape-flags` | Svar med koder fra listen, hver med en alvorlighetsgrad. |
| **Svar** | `shape-qa` | Svar med svaret, eller si rett ut at samtalen ikke sier det, og ordene svaret bygger på. |
| **JSON** | `shape-json` | Svar bare med JSON, i formen det er bedt om ovenfor. |
| **Som snakket** | `language-as-spoken` | Skriv på språket samtalen foregikk på. |
| **Som snakket, navngitt** | `language-as-spoken-named` | Det samme, med navnet på språket. |
| **Et navngitt språk** | `language-named` | Skriv på språket du oppgir. |

**Legg til** øverst i listen legger til en oppføring.

## Standardverdier {#defaults}

**Gjenopprett standardverdier** setter hver ordliste tilbake slik den kom med programmet, på grensesnittets nåværende språk. Det samtalene dine allerede er sortert under, blir ikke rørt.

## Svarformater {#response-formats}

Blokkene gjengir de medfølgende instruksjonene. De beskriver svarformater; alternativer er notasjon, ikke kjørbare JSON-eksempler.

### Løpende tekst (`shape-plain`) {#shape-plain}

```text
Svar i løpende tekst. Ikke bruk JSON, lister eller overskrifter.
```

### Punkter (`shape-list`) {#shape-list}

```text
Svar bare med JSON, nøyaktig av denne formen:
{"items": [{"text": "hva som skal gjøres", "owner": "hvem, eller tomt", "due": "når, eller tomt"}]}
Svar med en tom array når det ikke er noe å regne opp. Skriv ingenting utenfor JSON-en.
```

### Etiketter (`shape-labels`) {#shape-labels}

```text
Svar bare med JSON, nøyaktig av denne formen:
{"labels": [{"code": "en kode fra listen du har fått", "confidence": 0.0}]}
Bruk bare koder fra listen. Svar med en tom array når ingen passer.
Ikke finn på en kode, og skriv ingenting utenfor JSON-en.
```

### Karakter (`shape-score`) {#shape-score}

```text
Svar bare med JSON, nøyaktig av denne formen:
{"score": 3, "rationale": "hvorfor det tallet og ikke ett høyere",
 "evidence": [{"at_ms": 0, "quote": "ordene du bygger på"}]}
Karakteren er et helt tall fra 1 til 5. Skriv ingenting utenfor JSON-en.
```

### Kriterier (`shape-rubric`) {#shape-rubric}

```text
Svar bare med JSON, nøyaktig av denne formen:
{"overall": 3, "rationale": "hvorfor det tallet og ikke ett høyere",
 "criteria": [{"name": "kriteriet slik det ble gitt deg",
               "verdict": "pass" eller "weak" eller "fail" eller "n/a",
               "note": "én setning"}]}
Bedøm hvert kriterium du har fått og ingen andre. Samlet karakter er et helt
tall fra 1 til 5. Skriv ingenting utenfor JSON-en.
```

### Signaler (`shape-flags`) {#shape-flags}

```text
Svar bare med JSON, nøyaktig av denne formen:
{"flags": [{"code": "en kode fra listen du har fått",
            "severity": "low" eller "medium" eller "high",
            "evidence": "ordene du bygger på",
            "at_ms": 0}]}
Bruk bare koder fra listen, og reis hver høyst én gang. Svar med en tom
array når ingenting passer. Skriv ingenting utenfor JSON-en.
```

### Svar (`shape-qa`) {#shape-qa}

```text
Svar bare med JSON, nøyaktig av denne formen:
{"answer": "svaret ditt, eller si rett ut at samtalen ikke sier det",
 "citations": [{"at_ms": 0, "quote": "ordene svaret ditt hviler på"}]}
Ikke svar ut fra noe annet enn samtalen. Skriv ingenting utenfor
JSON-en.
```

### JSON (`shape-json`) {#shape-json}

```text
Svar bare med JSON, i den formen det er bedt om ovenfor. Skriv ingenting utenfor JSON-en.
```

### Som snakket (`language-as-spoken`) {#language-as-spoken}

```text
Skriv svaret ditt på det samme språket som samtalen ble ført på.
```

### Som snakket, navngitt (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Skriv svaret ditt på det samme språket som samtalen ble ført på, altså {language}.
```

### Et navngitt språk (`language-named`) {#language-named}

```text
Skriv svaret ditt på dette språket: {language}.
```
