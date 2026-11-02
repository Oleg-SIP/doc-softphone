---
title: Personal Prompt Studio
sidebar_position: 3
description: Promptene som oppsummerer samtalene dine, reglene som kjører dem, og hvordan du gjør dem til dine egne.
---

**Personal Prompt Studio** er den delen av AI Softphone som oppsummerer samtalene dine på din måte. Sammendraget lages av prompter: programmet leveres med elleve, klare til bruk så snart transkripsjon og en språkmodell er koblet til, og du kan endre dem med vanlig språk, kopiere dem og legge til dine egne. De står under **Prompter** i [Innstillinger → Behandling](processing.md#prompts).

Din LLM, din nøkkel, din kontroll: koble til modellen du foretrekker med din egen nøkkel, gjennom en støttet tjeneste eller et kompatibelt API — eller en modell som kjører i din egen organisasjon. Med [transkripsjon](transcription.md#your-own-models) også på din egen maskinvare blir både lyden og utskriftene værende i ditt eget miljø.

<Shot name="12b_settings_processing_prompts" alt="Listen over prompter i Innstillinger → Behandling" />

## Promptene som følger med programmet {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 har elleve prompter for avsluttede samtaler og fire sanntidsassistenter. Her er de medfølgende tekstene på dette språket; språkversjoner kan variere.

| Prompt | `code` | Form | Hva den skriver |
| --- | --- | --- | --- |
| **Sammendrag** | `summary` | Løpende tekst | Hovedpunktene, beslutningene og de neste stegene i ett kort avsnitt. |
| **Sammendrag på én linje** | `super-summary` | Løpende tekst | En kort tittel for å kjenne igjen samtalen i en liste. |
| **Oppgaver** | `action-items` | Punkter | Hvem som lovet å gjøre hva, og når, med ordene de sa. |
| **Emner** | `topics` | Punkter | Temaene som ble tatt opp, med noen få ord. |
| **Navn og tall** | `entities` | JSON | Personer, firmaer, datoer, beløp og referanser. |
| **Kategori** | `categorise` | Etiketter | Sorterer samtalen under en av [kategoriene](dictionaries.md) dine. |
| **Etiketter** | `tags` | Etiketter | Setter [etikettene](dictionaries.md) dine på den, så den kan finnes senere. |
| **Signaler** | `red-flags` | Signaler | Problemer, med beviset og tidspunktet i samtalen. |
| **Et spørsmål om denne samtalen** | `qa` | Svar | Svarer på et spørsmål du stiller om én samtale, ut fra utskriften. |
| **Salgskvalitet** | `sales-quality` | Kriterier | Går gjennom samtalen etter salgskriterier du kan redigere. |
| **Kvalitet på brukerstøtten** | `support-quality` | Kriterier | Vurderer hvor godt problemet ble forstått og håndtert. |

Formene er faste maler for et svar, og det er det som gjør at programmet kan lagre det og søke i det senere: **Etiketter** er koder fra en av listene dine, **Signaler** er koder med en alvorlighetsgrad, **Kriterier** er en karakter med en begrunnelse og en karakter for hvert kriterium, **Svar** er et svar med ordene det bygger på. Instruksjonene som forteller en modell formen, lagres i [Ordlister](dictionaries.md#instructions).

Hjelperne til [suffløren](../interface/prompter.md) er også prompter, som kjøres på hvert svar mens en samtale pågår, i stedet for på en avsluttet samtale. De står i en egen liste, under [Hjelpere](prompter.md#assistants) i **Innstillinger → Sufflør**.

Samtaler ringt i AI Softphone, møter [fanget](/capture/) fra maskinen og importerte opptak går alle gjennom de samme promptene når de har en utskrift.

Oppgaver registrerer det som ble avtalt — de sender ikke meldinger, bestiller ikke besøk og oppretter ikke saker for deg.

## Gjør det til ditt eget {#making-it-yours}

- Endre hva en prompt ber om, med vanlig språk: hva den ser etter, svarformatet og språket den svarer på.
- Kopier en prompt for å prøve en variant.
- Velg modellen for hver prompt — på din egen maskin eller i skyen.
- Bestem rekkefølgen promptene kjører i, slå dem på og av, og gjør dem betingede — det gjøres med [reglene](processing.md#rules): for eksempel kjører en salgsvurdering bare på samtaler som er sortert som **Salg**.
- Hold dine egne kategorier, etiketter og signaler i [Ordlister](dictionaries.md).
- Sett tak på kostnadene med de [månedlige grensene](processing.md#spending).

De opprinnelige promptene og reglene kan gjenopprettes med **Gjenopprett standardverdier** under **Standardverdier** i [Innstillinger → Behandling](processing.md#defaults).

## Modellens rolle {#role-and-task}

`system` bestemmer modellens atferd; `body` beskriver oppgaven. Svarform og språk angis separat gjennom instruksjoner i listene.

En tom liste med oppgaver eller varsler kan være riktig. Manglende ansvarlige og datoer skal ikke diktes opp. Svar på spørsmål må bare bygge på transkripsjonen.

[Svarformater](dictionaries.md#response-formats)

## Plassholdere {#placeholders}

Et element i prompten som erstattes med samtaledata.

| Plassholder | Betydning |
| --- | --- |
| `{{transcript}}` | Transkripsjon, én ytring per linje, med tider i millisekunder |
| `{{duration}}` | Samtalens varighet |
| `{{direction}}` | Innkommende eller utgående anrop |
| `{{party}}` | Kontaktnavn eller nummer |
| `{{language}}` | Språk for svaret |
| `{{question}}` | Brukerens spørsmål |
| `{{categories}}` | Kategoriliste |
| `{{tags}}` | Etikettliste |
| `{{red_flags}}` | Liste over varsler |
| `{{artifact:summary}}` | Tidligere generert sammendrag |
| `{{conversation}}` | Kontekst samlet av suffløren |
| `{{reply}}` | Motpartens siste ytring; bare for suffløren |

Kjør `summary` før `super-summary`, som bruker `{{artifact:summary}}`. Kjør `categorise` før kvalitetsvurdering: `sales-quality` krever `sales`, og `support-quality` krever `support`.

[Medfølgende assistenter](prompter.md#assistant-templates)

## Standardtekster for prompter {#standard-templates}

AI Softphone 1.1.11 har elleve prompter for avsluttede samtaler og fire sanntidsassistenter. Her er de medfølgende tekstene på dette språket; språkversjoner kan variere.

### Sammendrag (`summary`) {#summary}

**Svarform:** `plain`.

**Rolle (`system`)**

```text
Du leser utskrifter av telefonsamtaler og skriver korte, saklige sammendrag av dem. Du gjetter aldri på noe som ikke ble sagt, og du legger aldri til råd.
```

**Oppgave (`body`)**

```text
Sammenfatt denne telefonsamtalen i ett kort avsnitt: hva den handlet om, hva som ble bestemt, og hva som skjer videre. Den varte {{duration}} og var {{direction}}, med {{party}}.

{{transcript}}
```

### Sammendrag på én linje (`super-summary`) {#super-summary}

**Svarform:** `plain`.

**Rolle (`system`)**

```text
Du leser utskrifter av telefonsamtaler og koker hver ned til én enkelt vending. Du gjetter aldri og legger aldri til råd.
```

**Oppgave (`body`)**

```text
Kok denne telefonsamtalen ned til én vending på høyst tolv ord — den slags linje som ville stått i en tabell ved siden av navnet på den som ringte. Ikke punktum, ikke anførselstegn.

{{artifact:summary}}

{{transcript}}
```

### Oppgaver (`action-items`) {#action-items}

**Svarform:** `list`.

**Rolle (`system`)**

```text
Du leser utskrifter av telefonsamtaler og regner opp hva noen har påtatt seg å gjøre. Du regner bare opp det som faktisk ble sagt; du finner aldri på en oppgave, en ansvarlig eller en dato.
```

**Oppgave (`body`)**

```text
Regn opp hva noen i denne samtalen har påtatt seg å gjøre. Nevn hvem som skal gjøre det der det ble sagt, og innen når der det ble sagt. Har ingen påtatt seg noe, svar med en tom liste.

{{transcript}}
```

### Emner (`topics`) {#topics}

**Svarform:** `list`.

**Rolle (`system`)**

```text
Du leser utskrifter av telefonsamtaler og navngir hva de handlet om.
```

**Oppgave (`body`)**

```text
Regn opp emnene denne samtalen faktisk berørte, høyst seks, hvert i noen få ord. La ansvarlig og dato stå tomme — de betyr ingenting her.

{{transcript}}
```

### Navn og tall (`entities`) {#entities}

**Svarform:** `json`.

**Rolle (`system`)**

```text
Du leser utskrifter av telefonsamtaler og plukker ut det som ble nevnt i dem. Du gjetter aldri på en skrivemåte og legger aldri til noe som ikke ble sagt.
```

**Oppgave (`body`)**

```text
Plukk ut det som ble nevnt i denne samtalen, som JSON nøyaktig av denne formen:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Hver er en liste med strenger, skrevet slik de ble sagt. La heller en liste stå tom enn å gjette.

{{transcript}}
```

### Kategori (`categorise`) {#categorise}

**Svarform:** `labels`.

**Rolle (`system`)**

```text
Du sorterer telefonsamtaler under en av kategoriene du får. Du velger fra listen og fra ingenting annet.
```

**Oppgave (`body`)**

```text
Sorter denne samtalen under nøyaktig en av disse kategoriene. Svar med koden dens.

{{categories}}
{{transcript}}
```

### Etiketter (`tags`) {#tags}

**Svarform:** `labels`.

**Rolle (`system`)**

```text
Du merker telefonsamtaler med etikettene du får. Du velger fra listen og fra ingenting annet, og du utelater heller en etikett enn å tøye den.
```

**Oppgave (`body`)**

```text
Hvilke av disse stemmer på denne samtalen? Svar med kodene deres, eller med en tom liste om ingen gjør det.

{{tags}}
{{transcript}}
```

### Signaler (`red-flags`) {#red-flags}

**Svarform:** `flags`.

**Rolle (`system`)**

```text
Du leser utskrifter av telefonsamtaler og reiser bare det du har fått i oppdrag å lete etter. Du siterer ordene du bygger hver enkelt på, og du reiser ingenting du ikke kan sitere.
```

**Oppgave (`body`)**

```text
Reis de av disse som denne samtalen viser. Siter for hver ordene den hviler på, og oppgi øyeblikket i millisekunder da de ble sagt. Reis heller ingenting enn å tøye en definisjon.

{{red_flags}}
{{transcript}}
```

### Et spørsmål om denne samtalen (`qa`) {#qa}

**Svarform:** `qa`.

**Rolle (`system`)**

```text
Du besvarer spørsmål om én telefonsamtale, ut fra utskriften og ingenting annet. Der samtalen ikke sier det, sier du det rett ut i stedet for å gjette.
```

**Oppgave (`body`)**

```text
{{question}}

{{transcript}}
```

### Salgskvalitet (`sales-quality`) {#sales-quality}

**Svarform:** `rubric`.

**Rolle (`system`)**

```text
Du vurderer hvordan en selger håndterte en telefonsamtale. Du dømmer bare det utskriften viser, du antar aldri hva som skjedde før eller etter, og du er like streng mot en samtale som gikk bra som mot en som ikke gjorde det.
```

**Oppgave (`body`)**

```text
Vurder vår side av denne samtalen — personen i telefonen — mot disse kriteriene og ingen andre:
- hilsen: presenterte vedkommende seg og selskapet?
- kartlegging: fant vedkommende ut hva kunden faktisk ville ha?
- innvendinger: besvarte vedkommende det kunden tok opp, i stedet for å snakke utenom?
- verdi: sa vedkommende hva kunden får, og ikke bare hva det koster?
- neste skritt: sluttet samtalen med noe bestemt avtalt?

{{transcript}}
```

### Kvalitet på brukerstøtten (`support-quality`) {#support-quality}

**Svarform:** `rubric`.

**Rolle (`system`)**

```text
Du vurderer hvordan en støttemedarbeider håndterte en telefonsamtale. Du dømmer bare det utskriften viser, og vektlegger tyngre om kundens problem faktisk ble tatt hånd om enn hvor hyggelig samtalen var.
```

**Oppgave (`body`)**

```text
Vurder vår side av denne samtalen — personen i telefonen — mot disse kriteriene og ingen andre:
- hilsen: presenterte vedkommende seg og bekreftet hvem det ble snakket med?
- forståelse: fastslo vedkommende hva som faktisk var galt før det ble svart?
- løsning: ble problemet løst, eller ble det gitt et bestemt neste skritt?
- tone: holdt vedkommende seg rolig og høflig, særlig der kunden ikke var det?
- avslutning: sjekket vedkommende at kunden var fornøyd før det ble avsluttet?

{{transcript}}
```
