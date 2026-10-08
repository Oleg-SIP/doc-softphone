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
| **Salg** | `sales` | Salg, tilbud, forhandling eller oppfølging av et kjøp — også en kunde som spør hva noe koster. |
| **Brukerstøtte** | `support` | Hjelp til noen med et produkt eller en tjeneste de allerede har: en feil, et spørsmål om bruk, en klage på hvordan det virker. |
| **Privat** | `personal` | Ikke jobb i det hele tatt — en privat samtale som tilfeldigvis gikk på denne linjen. |
| **Annet** | `other` | Jobb, men verken salg eller brukerstøtte: en leverandør, en kollega, en levering, et feilnummer. Velg dette heller enn å gjette mellom de andre. |

Trykk på **Legg til** for å legge til en egen kategori.

## Etiketter {#tags}

Merker som *alle kan passe på den samme samtalen*. Trykk på **Legg til** for å legge til en. Listen starter med oppføringer som:

| Navn | Kode | Brukes til |
| --- | --- | --- |
| **Tilbakeringing lovet** | `callback` | Noen i denne samtalen lovet å ringe tilbake, eller ba om å bli ringt tilbake. |
| **Klage** | `complaint` | Den andre parten ga uttrykk for misnøye, enten det ble løst eller ikke. |
| **Sendt videre** | `escalation` | Samtalen ble gitt videre til noen andre, eller den andre parten ba om det. |
| **Viktig kunde** | `vip` | Den andre parten ble behandlet som, eller sa selv at de var, en viktig kunde. |

## Signaler {#red-flags}

Ting som krever oppmerksomhet, funnet i samtalen med beviset og tidspunktet — for eksempel *Sint kunde* eller *Fare for oppsigelse*. Signaler tegnes i rødt i [vinduet Opptak](../interface/recordings.md), og hvert har en alvorlighetsgrad: lav, middels eller høy.

## Svarformer og språk {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Innstillinger → Ordlister: svarformer og språkinstruksjoner" />

Lenger ned på fanen står instruksjonene promptene settes sammen av. De lagres her slik at hver prompt kan bruke samme ordlyd, og du kan endre dem som enhver annen oppføring.

| Navn | Kode | Hva den forteller modellen |
| --- | --- | --- |
| **Etiketter** | `shape-labels` | Svar i JSON med en liste over koder og hvor sikker den er på hver, bare med koder fra listen den har fått. |
| **Karakter** | `shape-score` | Svar med en karakter, begrunnelsen for den og ordene den bygger på. |
| **Kriterier** | `shape-rubric` | Svar med en samlet karakter og en karakter for hvert kriterium. |
| **Signaler** | `shape-flags` | Svar med koder fra listen, hver med en alvorlighetsgrad. |
| **Svar** | `shape-qa` | Svar med svaret, eller si rett ut at samtalen ikke sier det, og ordene svaret bygger på. |
| **JSON** | `shape-json` | Svar bare med JSON, i formen det er bedt om ovenfor. |
| **Som snakket** | `language-as-spoken` | Skriv på språket samtalen foregikk på. |
| **Som snakket, navngitt** | `language-as-spoken-named` | Det samme, med navnet på språket. |
| **Et navngitt språk** | `language-named` | Skriv på språket du oppgir. |

**Legg til** nederst i listen legger til en oppføring.

## Standardverdier {#defaults}

**Gjenopprett standardverdier** setter hver ordliste tilbake slik den kom med programmet, på grensesnittets nåværende språk. Det samtalene dine allerede er sortert under, blir ikke rørt.
