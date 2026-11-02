---
title: Personal Prompt Studio
sidebar_position: 3
description: I prompt che scrivono i resoconti delle sue conversazioni, le regole che li eseguono e come farli suoi.
---

**Personal Prompt Studio** è la parte di AI Softphone che scrive i resoconti delle sue conversazioni a modo suo. Il resoconto è fatto dai prompt: il programma ne fornisce undici, pronti all'uso non appena sono collegati la trascrizione e un modello linguistico, e lei può cambiarli in linguaggio semplice, duplicarli e aggiungerne di suoi. Sono elencati sotto **Prompt** in [Impostazioni → Elaborazione](processing.md#prompts).

Il suo LLM, la sua chiave, il suo controllo: colleghi il modello che preferisce con la sua chiave, attraverso un servizio supportato o un'API compatibile — oppure un modello distribuito all'interno della sua organizzazione. Con la [trascrizione](transcription.md#your-own-models) anch'essa sul suo hardware, sia l'audio sia le trascrizioni restano nel suo ambiente.

<Shot name="12b_settings_processing_prompts" alt="L'elenco dei prompt in Impostazioni → Elaborazione" />

## I prompt forniti con il programma {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 include undici prompt per conversazioni concluse e quattro assistenti in tempo reale. Questi sono i testi forniti per questa lingua; le versioni linguistiche possono differire.

| Prompt | `code` | Forma | Che cosa scrive |
| --- | --- | --- | --- |
| **Riassunto** | `summary` | Prosa | I punti principali, le decisioni e i passi successivi in un breve paragrafo. |
| **Riassunto in una riga** | `super-summary` | Prosa | Un titolo breve per riconoscere la conversazione in un elenco. |
| **Cose da fare** | `action-items` | Punti | Chi si è impegnato a fare che cosa, e quando, con le parole che ha detto. |
| **Argomenti** | `topics` | Punti | I temi trattati, in poche parole. |
| **Nomi e numeri** | `entities` | JSON | Persone, aziende, date, importi e riferimenti. |
| **Categoria** | `categorise` | Etichette | Classifica la conversazione in una delle sue [categorie](dictionaries.md). |
| **Etichette** | `tags` | Etichette | Le applica le sue [etichette](dictionaries.md), così da ritrovarla in seguito. |
| **Segnali** | `red-flags` | Segnali | Problemi, con la prova e il momento nella conversazione. |
| **Una domanda su questa chiamata** | `qa` | Risposta | Risponde a una domanda che lei fa su una conversazione, in base alla sua trascrizione. |
| **Qualità commerciale** | `sales-quality` | Criteri | Esamina la conversazione secondo criteri di vendita che può modificare. |
| **Qualità dell'assistenza** | `support-quality` | Criteri | Giudica quanto bene il problema è stato capito e gestito. |

Le forme sono strutture fisse di risposta, ed è questo che permette al programma di conservarla e di cercarvi in seguito: le **Etichette** sono codici da uno dei suoi elenchi, i **Segnali** sono codici con una gravità, i **Criteri** sono un voto con una motivazione e un voto per ogni criterio, la **Risposta** è una replica con le parole su cui si basa. Le istruzioni che indicano a un modello la forma sono conservate in [Dizionari](dictionaries.md#instructions).

Anche gli assistenti del [suggeritore](../interface/prompter.md) sono prompt, eseguiti su ogni replica mentre una chiamata è in corso anziché su una conversazione finita. Sono conservati in un elenco a parte, sotto [Assistenti](prompter.md#assistants) in **Impostazioni → Suggeritore**.

Le chiamate fatte in AI Softphone, le riunioni [catturate](/capture/) dal computer e le registrazioni importate passano tutte per gli stessi prompt una volta che hanno una trascrizione.

Le cose da fare registrano ciò che è stato concordato — non inviano messaggi, non prenotano appuntamenti e non aprono ticket al posto suo.

## Farlo suo {#making-it-yours}

- Cambi ciò che chiede un prompt, in linguaggio semplice: che cosa cerca, il formato della risposta e la lingua in cui risponde.
- Duplichi un prompt per provarne una variante.
- Scelga il modello per ogni prompt — sulla sua macchina o nel cloud.
- Stabilisca l'ordine in cui girano i prompt, li attivi e li disattivi e li renda condizionali — lo si fa con le [regole](processing.md#rules): per esempio, una valutazione commerciale gira solo sulle chiamate classificate come **Vendite**.
- Tenga le sue categorie, etichette e segnali in [Dizionari](dictionaries.md).
- Metta un tetto ai costi con i [limiti mensili](processing.md#spending).

I prompt e le regole originali si possono ripristinare con **Ripristina i valori predefiniti** in **Valori predefiniti** di [Impostazioni → Elaborazione](processing.md#defaults).

## Ruolo del modello {#role-and-task}

`system` definisce il comportamento del modello; `body` descrive il compito. Forma e lingua della risposta sono specificate separatamente dalle istruzioni del dizionario.

Un elenco vuoto di attività o segnalazioni può essere corretto. Non vanno inventati responsabili o scadenze. Le risposte alle domande devono basarsi soltanto sulla trascrizione.

[Formati di risposta](dictionaries.md#response-formats)

## Segnaposto {#placeholders}

Un elemento del prompt sostituito dai dati della conversazione.

| Segnaposto | Significato |
| --- | --- |
| `{{transcript}}` | Trascrizione, una battuta per riga, con tempi in millisecondi |
| `{{duration}}` | Durata della conversazione |
| `{{direction}}` | Chiamata in entrata o in uscita |
| `{{party}}` | Nome del contatto o numero |
| `{{language}}` | Lingua della risposta |
| `{{question}}` | Domanda dell’utente |
| `{{categories}}` | Dizionario delle categorie |
| `{{tags}}` | Dizionario delle etichette |
| `{{red_flags}}` | Dizionario delle segnalazioni |
| `{{artifact:summary}}` | Riassunto già generato |
| `{{conversation}}` | Contesto accumulato dal suggeritore |
| `{{reply}}` | Ultima battuta dell’interlocutore; solo nel suggeritore |

Eseguire `summary` prima di `super-summary`, che usa `{{artifact:summary}}`. Eseguire `categorise` prima della valutazione: `sales-quality` richiede `sales`, mentre `support-quality` richiede `support`.

[Assistenti inclusi](prompter.md#assistant-templates)

## Testi dei prompt predefiniti {#standard-templates}

AI Softphone 1.1.11 include undici prompt per conversazioni concluse e quattro assistenti in tempo reale. Questi sono i testi forniti per questa lingua; le versioni linguistiche possono differire.

### Riassunto (`summary`) {#summary}

**Forma della risposta:** `plain`.

**Ruolo (`system`)**

```text
Lei legge trascrizioni di telefonate e ne scrive riassunti brevi e fattuali. Non indovina mai ciò che non è stato detto, e non aggiunge mai consigli.
```

**Compito (`body`)**

```text
Riassuma questa telefonata in un breve paragrafo: di che cosa parlava, che cosa è stato deciso e che cosa succede poi. È durata {{duration}} ed era {{direction}}, con {{party}}.

{{transcript}}
```

### Riassunto in una riga (`super-summary`) {#super-summary}

**Forma della risposta:** `plain`.

**Ruolo (`system`)**

```text
Lei legge trascrizioni di telefonate e riduce ciascuna a una sola espressione. Non indovina mai e non aggiunge mai consigli.
```

**Compito (`body`)**

```text
Riduca questa telefonata a un'espressione di al massimo dodici parole — il genere di riga che starebbe in una tabella accanto al nome di chi ha chiamato. Senza punto finale, senza virgolette.

{{artifact:summary}}

{{transcript}}
```

### Cose da fare (`action-items`) {#action-items}

**Forma della risposta:** `list`.

**Ruolo (`system`)**

```text
Lei legge trascrizioni di telefonate ed elenca ciò che qualcuno si è impegnato a fare. Elenca solo ciò che è stato detto davvero; non inventa mai un compito, un responsabile o una data.
```

**Compito (`body`)**

```text
Elenchi ciò che chiunque in questa chiamata si è impegnato a fare. Dica chi deve farlo dove è stato detto, ed entro quando dove è stato detto. Se nessuno si è impegnato a nulla, risponda con un elenco vuoto.

{{transcript}}
```

### Argomenti (`topics`) {#topics}

**Forma della risposta:** `list`.

**Ruolo (`system`)**

```text
Lei legge trascrizioni di telefonate e nomina di che cosa parlavano.
```

**Compito (`body`)**

```text
Elenchi gli argomenti che questa chiamata ha davvero toccato, al massimo sei, ciascuno in poche parole. Lasci vuoti il responsabile e la data — qui non significano nulla.

{{transcript}}
```

### Nomi e numeri (`entities`) {#entities}

**Forma della risposta:** `json`.

**Ruolo (`system`)**

```text
Lei legge trascrizioni di telefonate e ne estrae ciò che è stato nominato. Non indovina mai una grafia e non aggiunge mai ciò che non è stato detto.
```

**Compito (`body`)**

```text
Estragga ciò che è stato nominato in questa chiamata, come JSON esattamente di questa forma:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Ognuno è un elenco di stringhe, scritte come sono state dette. Lasci un elenco vuoto piuttosto che indovinare.

{{transcript}}
```

### Categoria (`categorise`) {#categorise}

**Forma della risposta:** `labels`.

**Ruolo (`system`)**

```text
Lei classifica le telefonate in una delle categorie che le vengono date. Sceglie dall'elenco e da nient'altro.
```

**Compito (`body`)**

```text
Classifichi questa chiamata in esattamente una di queste categorie. Risponda con il suo codice.

{{categories}}
{{transcript}}
```

### Etichette (`tags`) {#tags}

**Forma della risposta:** `labels`.

**Ruolo (`system`)**

```text
Lei etichetta le telefonate con le etichette che le vengono date. Sceglie dall'elenco e da nient'altro, e tralascia un'etichetta piuttosto che forzarla.
```

**Compito (`body`)**

```text
Quali di queste sono vere di questa chiamata? Risponda con i loro codici, o con un elenco vuoto se nessuna lo è.

{{tags}}
{{transcript}}
```

### Segnali (`red-flags`) {#red-flags}

**Forma della risposta:** `flags`.

**Ruolo (`system`)**

```text
Lei legge trascrizioni di telefonate e solleva solo ciò che le è stato dato da cercare. Cita le parole su cui si basa ciascuno, e non solleva nulla che non possa citare.
```

**Compito (`body`)**

```text
Sollevi quelli fra questi che questa chiamata mostra. Per ciascuno, citi le parole su cui poggia e dia il momento in millisecondi in cui sono state dette. Non sollevi nulla piuttosto che forzare una definizione.

{{red_flags}}
{{transcript}}
```

### Una domanda su questa chiamata (`qa`) {#qa}

**Forma della risposta:** `qa`.

**Ruolo (`system`)**

```text
Lei risponde a domande su una telefonata, a partire dalla sua trascrizione e da nient'altro. Dove la chiamata non lo dice, lo dice chiaramente invece di indovinare.
```

**Compito (`body`)**

```text
{{question}}

{{transcript}}
```

### Qualità commerciale (`sales-quality`) {#sales-quality}

**Forma della risposta:** `rubric`.

**Ruolo (`system`)**

```text
Lei valuta come un venditore ha condotto una telefonata. Giudica solo ciò che la trascrizione mostra, non presume mai che cosa sia successo prima o dopo, ed è severo con una chiamata andata bene quanto con una andata male.
```

**Compito (`body`)**

```text
Giudichi il nostro lato di questa chiamata — la persona al telefono — secondo questi criteri e nessun altro:
- saluto: si è presentata, lei e l'azienda?
- ascolto: ha capito che cosa il cliente voleva davvero?
- obiezioni: ha risposto a ciò che il cliente sollevava, invece di parlare d'altro?
- valore: ha detto che cosa ottiene il cliente, e non solo quanto costa?
- passo successivo: la chiamata si è chiusa con qualcosa di concreto?

{{transcript}}
```

### Qualità dell'assistenza (`support-quality`) {#support-quality}

**Forma della risposta:** `rubric`.

**Ruolo (`system`)**

```text
Lei valuta come un addetto all'assistenza ha condotto una telefonata. Giudica solo ciò che la trascrizione mostra, e pesa di più se il problema del cliente è stato davvero risolto che quanto è stata piacevole la conversazione.
```

**Compito (`body`)**

```text
Giudichi il nostro lato di questa chiamata — la persona al telefono — secondo questi criteri e nessun altro:
- saluto: si è presentata e ha confermato con chi stava parlando?
- comprensione: ha stabilito che cosa non andava davvero prima di rispondere?
- risoluzione: il problema è stato risolto, o è stato dato un passo successivo preciso?
- tono: è rimasta calma e cortese, soprattutto dove il cliente non lo era?
- chiusura: ha verificato che il cliente fosse soddisfatto prima di chiudere?

{{transcript}}
```
