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
| **Salg** | `sales` | At sælge, give tilbud, forhandle eller følge op på et køb — også en kunde, der spørger, hvad noget koster. |
| **Support** | `support` | At hjælpe nogen med et produkt eller en ydelse, de allerede har: en fejl, et spørgsmål om brugen, en klage over, hvordan det virker. |
| **Privat** | `personal` | Slet ikke forretning — en privat samtale, der tilfældigvis gik over denne linje. |
| **Andet** | `other` | Forretning, men hverken salg eller support: en leverandør, en kollega, en levering, et forkert nummer. Vælg dette frem for at gætte mellem de andre. |

Tryk på **Tilføj** for at tilføje din egen kategori.

## Etiketter {#tags}

Mærker, der *alle kan passe på den samme samtale*. Tryk på **Tilføj** for at tilføje en. Listen starter med poster som:

| Navn | Kode | Bruges til |
| --- | --- | --- |
| **Opkald lovet** | `callback` | Nogen i dette opkald lovede at ringe tilbage, eller bad om at blive ringet op. |
| **Klage** | `complaint` | Modparten udtrykte utilfredshed, uanset om den blev løst eller ej. |
| **Sendt videre** | `escalation` | Opkaldet blev givet videre til en anden, eller modparten bad om det. |
| **Vigtig kunde** | `vip` | Modparten blev behandlet som en vigtig konto, eller sagde at være det. |

## Signaler {#red-flags}

Ting, der kræver opmærksomhed, fundet i samtalen med beviset og tidspunktet — for eksempel *Vred kunde* eller *Risiko for opsigelse*. Signaler tegnes med rødt i [vinduet Optagelser](../interface/recordings.md), og hvert har en alvorsgrad: lav, middel eller høj.

| Navn | Kode | `severity` | Bruges til |
| --- | --- | --- | --- |
| **Vred kunde** | `angry-customer` | `high` | Modparten var hørbart vred, fornærmende, eller truede med at gå. |
| **Risiko for opsigelse** | `churn-risk` | `high` | Opsigelse, manglende fornyelse eller skift til en anden blev nævnt, uanset hvor roligt. |
| **Løfte givet** | `promise-made` | `medium` | Vores side bandt sig til noget bestemt — en dato, en pris, en udbedring, en tilbagebetaling. |
| **Følsomme data** | `sensitive-data` | `high` | Et kortnummer, en adgangskode, et dokumentnummer eller noget andet, der ikke hører hjemme i en optagelse, blev læst højt. |
| **Konkurrent** | `competitor` | `low` | Modparten nævnte en anden, der tilbyder det samme, eller sammenlignede os med den. |

## Anvisninger {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Indstillinger → Ordlister: svarformer og sproginstruktioner" />

*Det, der føjes til hver prompt om svarets form og sproget at skrive det på.* De gemmes her, så hver prompt kan bruge samme ordlyd, og du kan ændre dem som enhver anden post — eller skrive dine egne, såsom *svar kort* eller *nævn aldrig en pris*, og sætte flueben ved dem under **Send også** på en hvilken som helst prompt.

| Navn | Kode | Hvad den fortæller modellen |
| --- | --- | --- |
| **Løbende tekst** | `shape-plain` | Svar i almindelig løbende tekst, uden JSON, lister eller overskrifter. |
| **Punkter** | `shape-list` | Svar med en liste over ting, der skal gøres, hver med hvem og hvornår. |
| **Etiketter** | `shape-labels` | Svar i JSON med en liste af koder og hvor sikker den er på hver, kun med koder fra den liste, den har fået. |
| **Karakter** | `shape-score` | Svar med en karakter, begrundelsen for den og de ord, den bygger på. |
| **Kriterier** | `shape-rubric` | Svar med en samlet karakter og en karakter for hvert kriterium. |
| **Signaler** | `shape-flags` | Svar med koder fra listen, hver med en alvorsgrad. |
| **Svar** | `shape-qa` | Svar med svaret, eller sig ligeud, at samtalen ikke siger det, og de ord, svaret bygger på. |
| **JSON** | `shape-json` | Svar kun med JSON, i den form, der er bedt om ovenfor. |
| **Som talt** | `language-as-spoken` | Skriv på det sprog, samtalen blev ført på. |
| **Som talt, navngivet** | `language-as-spoken-named` | Det samme, med sprogets navn. |
| **Et navngivet sprog** | `language-named` | Skriv på det sprog, du angiver. |

**Tilføj** øverst på listen tilføjer en post.

## Standardværdier {#defaults}

**Gendan standardværdier** sætter hver ordliste tilbage, som den kom med programmet, på brugerfladens nuværende sprog. Det, dine samtaler allerede er sorteret under, bliver ikke rørt.

## Svarformater {#response-formats}

Blokkene gengiver de medfølgende instruktioner. De beskriver svarformater; alternativer er notation, ikke eksekverbare JSON-eksempler.

### Løbende tekst (`shape-plain`) {#shape-plain}

```text
Svar i løbende tekst. Brug ikke JSON, lister eller overskrifter.
```

### Punkter (`shape-list`) {#shape-list}

```text
Svar kun med JSON, præcis af denne form:
{"items": [{"text": "hvad der skal gøres", "owner": "hvem, eller tomt", "due": "hvornår, eller tomt"}]}
Svar med et tomt array, når der ikke er noget at opregne. Skriv intet uden for JSON'en.
```

### Etiketter (`shape-labels`) {#shape-labels}

```text
Svar kun med JSON, præcis af denne form:
{"labels": [{"code": "en kode fra listen, du har fået", "confidence": 0.0}]}
Brug kun koder fra listen. Svar med et tomt array, når ingen passer.
Opfind ikke en kode, og skriv intet uden for JSON'en.
```

### Karakter (`shape-score`) {#shape-score}

```text
Svar kun med JSON, præcis af denne form:
{"score": 3, "rationale": "hvorfor det tal og ikke et højere",
 "evidence": [{"at_ms": 0, "quote": "ordene du bygger på"}]}
Karakteren er et helt tal fra 1 til 5. Skriv intet uden for JSON'en.
```

### Kriterier (`shape-rubric`) {#shape-rubric}

```text
Svar kun med JSON, præcis af denne form:
{"overall": 3, "rationale": "hvorfor det tal og ikke et højere",
 "criteria": [{"name": "kriteriet, som det blev givet dig",
               "verdict": "pass" eller "weak" eller "fail" eller "n/a",
               "note": "én sætning"}]}
Bedøm hvert kriterium, du har fået, og ingen andre. Samlet karakter er et helt
tal fra 1 til 5. Skriv intet uden for JSON'en.
```

### Signaler (`shape-flags`) {#shape-flags}

```text
Svar kun med JSON, præcis af denne form:
{"flags": [{"code": "en kode fra listen, du har fået",
            "severity": "low" eller "medium" eller "high",
            "evidence": "ordene du bygger på",
            "at_ms": 0}]}
Brug kun koder fra listen, og rejs hver højst én gang. Svar med et tomt
array, når intet passer. Skriv intet uden for JSON'en.
```

### Svar (`shape-qa`) {#shape-qa}

```text
Svar kun med JSON, præcis af denne form:
{"answer": "dit svar, eller sig ligeud at samtalen ikke siger det",
 "citations": [{"at_ms": 0, "quote": "ordene dit svar hviler på"}]}
Svar ikke ud fra andet end samtalen. Skriv intet uden for
JSON'en.
```

### JSON (`shape-json`) {#shape-json}

```text
Svar kun med JSON, i den form der er bedt om ovenfor. Skriv intet uden for JSON'en.
```

### Som talt (`language-as-spoken`) {#language-as-spoken}

```text
Skriv dit svar på det samme sprog, som samtalen blev ført på.
```

### Som talt, navngivet (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Skriv dit svar på det samme sprog, som samtalen blev ført på, nemlig {language}.
```

### Et navngivet sprog (`language-named`) {#language-named}

```text
Skriv dit svar på dette sprog: {language}.
```
