---
title: Ordlister
sidebar_position: 4
description: Dine egne kategorier, etiketter og signaler — de ord, dine samtaler sorteres under.
---

**Indstillinger → Ordlister** rummer de ord, en samtale kan sorteres under, mærkes med eller markeres for. Disse lister er det, modellerne får vist, og det, de skal vælge imellem, så et svar altid er noget, du kan søge efter senere.

<Shot name="13_settings_dictionaries" alt="Indstillinger → Ordlister" />

**Vis slettede** viser de poster, du har slettet.

Hver post er et navn, en kort kode med små bogstaver og en beskrivelse, der fortæller modellen, hvornår den skal vælges. Koden er det, der gemmes, og det, [REST-API'et](../integration/rest-api.md#taxonomy-and-settings) returnerer, så den forbliver den samme, når du omdøber posten.

## Kategorier {#categories}

Hvad samtalen handlede om; **der vælges én per samtale**. Programmet starter med fire:

| Navn | Kode | Bruges til |
| --- | --- | --- |
| **Salg** | `sales` | Salg, tilbud, forhandling eller opfølgning på et køb — også en kunde, der spørger, hvad noget koster. |
| **Support** | `support` | Hjælp til nogen med et produkt eller en tjeneste, de allerede har: en fejl, et spørgsmål om brugen, en klage over, hvordan det virker. |
| **Privat** | `personal` | Slet ikke forretning — en privat samtale, der tilfældigvis blev ført på denne linje. |
| **Andet** | `other` | Forretning, men hverken salg eller support: en leverandør, en kollega, en levering, et forkert nummer. Vælg dette frem for at gætte mellem de andre. |

Tryk på **Tilføj** for at tilføje din egen kategori.

## Etiketter {#tags}

Mærker, der *alle kan passe på den samme samtale*. Tryk på **Tilføj** for at tilføje en. Listen starter med poster som:

| Navn | Kode | Bruges til |
| --- | --- | --- |
| **Opkald lovet** | `callback` | Nogen i dette opkald lovede at ringe tilbage, eller bad om at blive ringet op. |
| **Klage** | `complaint` | Den anden part udtrykte utilfredshed, uanset om det blev løst eller ej. |
| **Sendt videre** | `escalation` | Opkaldet blev givet videre til en anden, eller den anden part bad om det. |
| **Vigtig kunde** | `vip` | Den anden part blev behandlet som, eller sagde selv at være, en vigtig kunde. |

## Signaler {#red-flags}

Ting, der kræver opmærksomhed, fundet i samtalen med beviset og tidspunktet — for eksempel *Vred kunde* eller *Risiko for opsigelse*. Signaler tegnes med rødt i [vinduet Optagelser](../recordings/recordings-window.md), og hvert har en alvorsgrad: lav, middel eller høj.

## Svarformer og sprog {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Indstillinger → Ordlister: svarformer og sproginstruktioner" />

Længere nede på fanen står de instruktioner, prompterne sættes sammen af. De gemmes her, så hver prompt kan bruge samme ordlyd, og du kan ændre dem som enhver anden post.

| Navn | Kode | Hvad den fortæller modellen |
| --- | --- | --- |
| **Etiketter** | `shape-labels` | Svar i JSON med en liste af koder og hvor sikker den er på hver, kun med koder fra den liste, den har fået. |
| **Karakter** | `shape-score` | Svar med en karakter, begrundelsen for den og de ord, den bygger på. |
| **Kriterier** | `shape-rubric` | Svar med en samlet karakter og en karakter for hvert kriterium. |
| **Signaler** | `shape-flags` | Svar med koder fra listen, hver med en alvorsgrad. |
| **Svar** | `shape-qa` | Svar med svaret, eller sig ligeud, at samtalen ikke siger det, og de ord, svaret bygger på. |
| **JSON** | `shape-json` | Svar kun med JSON, i den form, der er bedt om ovenfor. |
| **Som talt** | `language-as-spoken` | Skriv på det sprog, samtalen blev ført på. |
| **Som talt, navngivet** | `language-as-spoken-named` | Det samme, med sprogets navn. |
| **Et navngivet sprog** | `language-named` | Skriv på det sprog, du angiver. |

**Tilføj** for enden af listen tilføjer en post.

## Standardværdier {#defaults}

**Gendan standardværdier** sætter hver ordliste tilbage, som den kom med programmet, på brugerfladens nuværende sprog. Det, dine samtaler allerede er sorteret under, bliver ikke rørt.
