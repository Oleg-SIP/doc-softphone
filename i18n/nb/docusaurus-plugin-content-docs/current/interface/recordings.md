---
title: Vinduet Opptak
sidebar_position: 2
description: "\"Biblioteket med alle samtaler — en telefonsamtale, en importert fil eller et møte fanget fra Zoom, Teams eller Meet: filtre, avspilleren, utskriften du kan spille av fra hvilken som helst linje, og sammendragene.\""
---

**Opptak** er der hver samtale bor, uansett hvordan den kom inn: en samtale ringt eller mottatt i telefonen, en lydfil du har importert, eller et møte fanget fra Zoom, Teams, Meet eller et annet program. Alle står i én liste, og hver åpnes på samme måte: avspilleren, utskriften og alt språkmodellen har skrevet om den. Trykk på **Opptak** nederst til venstre i [hovedvinduet](main-window.md) for å åpne det.

<Shot name="01_recordings" alt="Fanen Opptak: et fanget Zoom-møte, en importert fil og samtaler i én liste" />

## Tre slags opptak {#three-kinds-of-recording}

Ikonet til venstre på en rad viser hvordan samtalen kom inn.

| Ikon | Samtale | Navnet i listen | Hvordan den kommer hit |
| --- | --- | --- | --- |
| Rør med en pil | En samtale ringt eller mottatt i denne telefonen. Pilen peker inn for en innkommende samtale og ut for en utgående. | Navnet på kontakten, eller nummeret | Tas opp slik det er stilt inn under [Opptak](../recordings.md) |
| Pil inn i en strek | En fil importert fra et annet sted: en mobiltelefon, en diktafon eller et annet system | Navnet på filen | **⋮ → Importer fra filer**; se [nedenfor](#a-recording-you-already-have) |
| Vindu | Et møte holdt i et annet program | Navnet du ga det, eller **Et annet program** | [Fanging](../capture/capture.md) |

På bildet er de tre øverste radene én av hver: et Zoom-møte, en importert fil med en banks kundesamtale og en samtale mottatt på linjen **305 Kundeservice**. Uansett kilde blir de skrevet ut, oppsummert og søkt i på samme måte.

## Finne en samtale {#finding-a-conversation}

Linjen øverst har fem filtre, et søkefelt og en meny:

| Kontroll | Snevrer listen inn etter |
| --- | --- |
| **Slag** | måten samtalen kom inn på: innkommende eller utgående samtaler, **Importerte**, **Fanget** |
| **Periode** | datoen: **I dag**, **I går**, **Siste 7 dager** eller **Velg datoer…** |
| **Kategori** | kategorien den er sortert under — se [Ordlister](../ai-processing/dictionaries.md) |
| **Merke** | etikettene og signalene den har |
| **Gjenkjenner** | [gjenkjenneren](../ai-processing/transcription.md) som laget utskriften |
| **Søk** | det som ble sagt i den — søket går gjennom utskriftene av alt du har tatt opp |

<Shot name="39_more_menu" alt="Menyen ⋮ i listen: Importer fra filer, Eksporter til CSV, Åpne i en nettleser" />

Knappen **⋮** til høyre på linjen åpner flere handlinger for listen:

| Valg | Gjør |
| --- | --- |
| **Importer fra filer** | Henter inn opptak du allerede har. Se [Et opptak du allerede har](#a-recording-you-already-have). |
| **Eksporter til CSV** | Lagrer listen som et regneark: når, parten og nummeret, retning, lengde, kategori, etiketter, signaler og sammendraget på én linje for hver samtale. |
| **Åpne i en nettleser** | Åpner listen i nettleseren din, som siden det [lokale REST-APIet](../integration/rest-api.md) viser på `/ui`. |

## Listen {#the-list}

Hver rad viser:

- ikonet for slags samtale;
- navnet — den andre parten, nummeret, filen eller møtet — og under det datoen og sammendraget på én linje;
- til høyre kategorien med poengsummen (et tall, for eksempel *Brukerstøtte · 4*), så signalene og etikettene og til slutt lengden.

Signaler tegnes i rødt (på bildet *Sensitive data*, *Løfte gitt*, *Sint kunde*); etiketter er vanlige (*Tilbakeringing lovet*). En samtale uten sammendrag og kategori er ennå ikke oppsummert — raden **Anna Nilsen** på bildet.

<Shot name="40_row_actions" alt="En rad med pekeren over: knappene med nål, blyant og søppelbøtte" />

Pek på en rad for å vise tre knapper til høyre:

| Knapp | Gjør |
| --- | --- |
| Nål | **Behold denne**: et opptak som er beholdt, slettes aldri av grensene under [Opptak](../recordings.md#retention). Trykk igjen for å slutte å beholde det. |
| Blyant | **Gi nytt navn**: gir samtalen et navn du velger selv. En samtale beholder partens navn ved siden av; et møte eller en fil er ellers oppkalt etter programmet eller filen det kom fra. |
| Søppelbøtte | **Slett dette opptaket**, etter at den har spurt. Lyden forsvinner også, og det kan ikke angres. |

## Avspilleren {#the-player}

Merk en rad for å åpne avspilleren under listen.

- De to bølgeformene er opptakets to kanaler: den øverste er deg, den nederste er den andre siden. En importert fil har vanligvis ett blandet spor, så begge linjene viser den samme lyden.
- **▶** spiller av og setter på pause; tidene til venstre er posisjonen og den totale lengden. Linjen under bølgeformene ruller gjennom et langt opptak.
- **1×** endrer hastigheten; **Begge** velger hvilken stemme du hører: begge, bare deg (**Jeg**) eller bare den andre siden (**De**).
- Diskknappen lagrer en kopi av opptaket, **×** lukker samtalen.

Linjen mellom listen og avspilleren kan dras oppover for å gi utskriften mer plass, som på bildene nedenfor.

## Utskriften {#the-transcript}

Under avspilleren står utskriften: én linje per replikk, med tidspunktet den ble sagt og hvem som sa den.

<Shot name="26_recording_call" alt="En samtale på linjen 305 Kundeservice: avspilleren og utskriften, med linjen ved 0:12 uthevet" />

| Slags opptak | Den som snakker vises som |
| --- | --- |
| En samtale | **Du** og navnet på den andre parten, eller nummeret |
| Et fanget møte | **Du** og navnet på opptaket, for alle andre |
| En importert fil | **Alle · speaker 1**, **Alle · speaker 2** … — gjenkjenneren skiller stemmene |

**Klikk på en linje for å gå til det øyeblikket**: avspilleren flytter seg dit, linjen utheves, og ordet som blir sagt, markeres inni den — på bildet linjen ved **0:12**, med ordet *Ja*. Trykk på **▶** for å høre derfra. Mens det spilles, følger uthevingen talen, så du kan lese og lytte samtidig og hoppe tilbake til hvilken som helst setning.

Tidspunktet til venstre på hver linje er også det et sammendrag peker på: et signal, et svar eller et sitat har tidspunktet for ordene det bygger på.

## Utskrift eller sammendrag: nedtrekkslisten {#transcript-or-write-up-the-drop-down}

Nedtrekkslisten over utskriften velger hva som vises på det stedet: en utskrift, eller et av sammendragene språkmodellen har laget.

<Shot name="27_writeup_menu" alt="Den åpne nedtrekkslisten: OpenAI-utskriften og sammendragene av samtalen" />

- Linjer med en **mikrofon** er utskrifter, én for hver [gjenkjenner](../ai-processing/transcription.md) som skrev ut opptaket. Stjernen markerer hovedutskriften. Pek på en for å se gjenkjenneren, modellen og språket.
- Linjer med **gnister** er sammendrag, laget av [promptene](/ai-processing/prompt-studio) under [Behandling](../ai-processing/processing.md).

Et opptak kan ha utskrifter fra flere gjenkjennere, så de kan sammenlignes: Zoom-møtet nedenfor ble skrevet ut av både X.ai og Deepgram.

<Shot name="36_zoom_menu" alt="Et fanget møte med to utskrifter, Deepgram og X.ai, og sammendragene av det" />

Sammendragene står under korte navn:

| I nedtrekkslisten | Laget av prompten | Hva den viser |
| --- | --- | --- |
| **Sammendrag** | Sammendrag | Hovedpunktene, avgjørelsene og de neste stegene i et kort avsnitt. |
| **Kort fortalt** | Sammendrag på én linje | Én setning; den samme linjen vises under navnet i listen. |
| **Handlinger** | Oppgaver | Hvem som ble enige om å gjøre hva, og innen når. |
| **Emner** | Emner | Temaene som kom opp. |
| **Nevnte** | Navn og tall | Personer, firmaer, datoer, beløp og henvisninger. |
| selve spørsmålet | Et spørsmål om denne samtalen | Svaret på et spørsmål du stilte, med ordene det bygger på. |
| **Kvalitet** | Salgskvalitet, Kvalitet på brukerstøtten | En samlet poengsum og en vurdering av hvert kriterium. |
| **Signaler** | Signaler | Det som trenger oppmerksomhet, med bevis og tidspunkt. |
| **Etiketter**, **Kategori** | Etiketter, Kategori | Merkelappene samtalen ble sortert under. |

## Sammendragene, ett for ett {#the-write-ups-one-by-one}

Bildene nedenfor viser alle den samme samtalen, på linjen **305 Kundeservice**, der en kunde spør når forsikringene hennes fornyes.

**Sammendrag** — samtalen i noen få setninger.

<Shot name="28_summary" alt="Sammendraget av samtalen" />

**Kort fortalt** — én linje, kort nok til å kjenne igjen samtalen i listen.

<Shot name="29_nutshell" alt="Kort fortalt: sammendraget av samtalen på én linje" />

**Handlinger** — hver oppgave med hvem som skal gjøre den og når, til høyre.

<Shot name="30_actions" alt="Handlinger: to oppgaver for Du, en av dem med frist i morgen tidlig" />

**Et spørsmål** — spør samtalen om hva som helst: spørsmålet blir navnet på elementet, og under svaret står ordene det bygger på, med tidspunktet i opptaket.

<Shot name="31_question" alt="Svaret på et spørsmål om samtalen, med to sitater ved 0:15 og 0:27" />

**Kvalitet** — poengsummen fra 1 til 5 med begrunnelsen, og hvert kriterium markert **oppfylt**, **svakt** eller **ikke oppfylt** med en merknad.

<Shot name="32_quality" alt="Kvalitet: poengsum 4, to kriterier oppfylt og to svake" />

**Signaler** — hvert signal med ordene det ble utløst av, alvorlighetsgraden og tidspunktet.

<Shot name="33_red_flags" alt="Signaler: Løfte gitt, lav, ved 0:27" />

**Emner** — temaene i et møte, her i Zoom-møtet.

<Shot name="38_topics" alt="Emnene i Zoom-møtet" />

## Knappene ved siden av nedtrekkslisten {#the-buttons-beside-the-drop-down}

| Knapp | Gjør |
| --- | --- |
| Gnister | **Transkriber eller spør en modell…**: åpner en meny, se nedenfor. |
| To ark | Kopierer det som vises. |
| Disk | Lagrer det i en fil. Du kan lagre en utskrift som ren tekst eller som undertekster. |
| Søppelbøtte | Sletter det som vises. |

<Shot name="34_run_menu" alt="Gnistmenyen: Transkripsjon med fire gjenkjennere, Behandling med promptene" />

Gnistmenyen gjør jobben på forespørsel. Under **Transkripsjon** velger du en gjenkjenner for å skrive ut opptaket på nytt med den; under **Behandling** velger du en prompt for å kjøre den nå — **Et spørsmål om denne samtalen…** spør først etter spørsmålet. Resultatet vises i nedtrekkslisten. Slik blir en samtale oppsummert når **Behandle samtaler automatisk** er slått av under [Behandling](../ai-processing/processing.md), og slik legger du til enda et sammendrag på en samtale som allerede har noen.

## Tre eksempler {#three-examples}

### En samtale ringt i telefonen {#a-call-made-in-the-phone}

Samtalen ovenfor: de som snakker, er **Du** og **Kari Bakken**, navnet på kontakten, på to adskilte kanaler.

### En fil du importerte {#a-file-you-imported}

<Shot name="35_recording_import" alt="En importert fil med en banks kundesamtale: ett blandet spor og taler 1 og 2" />

`riverside_bank_support_call` er en mp3 hentet inn med **⋮ → Importer fra filer**. Navnet er navnet på filen, ikonet er en pil inn i en strek, og de to som snakker, ble skilt av gjenkjenneren. Sammendragene fant et kortnummer sagt høyt og utløste **Sensitive data**.

### Et møte fanget fra et annet program {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Et Zoom-møte fanget fra datamaskinen: X.ai-utskriften med Du og navnet på møtet som de som snakker" />

**Planlegging av Q4-lansering (Zoom)** ble fanget mens møtet pågikk i Zoom, og gitt navn med blyanten. Alle på den andre siden av møtet vises under navnet på opptaket; du er **Du**. Se [Fanging](../capture/capture.md).

## Et opptak du allerede har {#a-recording-you-already-have}

Et opptak laget et annet sted — på en mobiltelefon, en diktafon eller et annet system — kan legges inn med **⋮ → Importer fra filer**. Velg én eller flere mp3- eller wav-filer; telefonen sier hvor mange som ble importert, og nevner de den ikke kunne lese som et opptak. Hver av dem arkiveres akkurat som en ringt samtale: skrevet ut, oppsummert etter de samme [reglene](../ai-processing/processing.md#rules) og funnet av det samme søket.

## Slette et opptak {#deleting-a-recording}

Når et opptak slettes, forsvinner alt som er laget av det, sammen med det: utskriftene og sammendragene. Hvor lenge opptak beholdes av seg selv, stilles inn under [Opptak](../recordings.md#retention).
