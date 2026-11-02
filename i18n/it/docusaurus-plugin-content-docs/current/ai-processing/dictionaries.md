---
title: Dizionari
sidebar_position: 4
description: Le sue categorie, etichette e segnali — le parole con cui vengono classificate le sue conversazioni.
---

**Impostazioni → Dizionari** contiene le parole con cui una conversazione può essere classificata, etichettata o segnalata. Questi elenchi sono ciò che viene mostrato ai modelli e ciò tra cui devono scegliere, perciò una risposta è sempre qualcosa che potrà cercare in seguito.

<Shot name="13_settings_dictionaries" alt="Impostazioni → Dizionari" />

**Mostra le eliminate** mostra le voci che ha eliminato.

Ogni voce è un nome, un codice breve in caratteri piccoli e una descrizione che dice al modello quando sceglierla. Il codice è ciò che viene salvato e ciò che restituisce l'[API REST](../integration/rest-api.md#taxonomy-and-settings), perciò resta lo stesso quando rinomina la voce.

## Categorie {#categories}

Di che cosa trattava la conversazione; **se ne sceglie una per conversazione**. Il programma parte con quattro:

| Nome | Codice | Usata per |
| --- | --- | --- |
| **Vendite** | `sales` | Vendere, preventivare, trattare o dare seguito a un acquisto — compresa la domanda di un cliente su quanto costa qualcosa. |
| **Assistenza** | `support` | Aiutare qualcuno con un prodotto o un servizio che ha già: un guasto, una domanda sull'uso, un reclamo su come funziona. |
| **Personale** | `personal` | Per nulla di lavoro — una conversazione privata capitata su questa linea. |
| **Altro** | `other` | Di lavoro, ma né vendita né assistenza: un fornitore, un collega, una consegna, un numero sbagliato. Scelga questo invece di tirare a indovinare fra gli altri. |

Prema **Aggiungi** per aggiungere una sua categoria.

## Etichette {#tags}

Contrassegni che *possono valere tutti per la stessa conversazione*. Prema **Aggiungi** per aggiungerne uno. L'elenco parte con voci come:

| Nome | Codice | Usata per |
| --- | --- | --- |
| **Richiamo promesso** | `callback` | Qualcuno in questa chiamata ha promesso di richiamare, o ha chiesto di essere richiamato. |
| **Reclamo** | `complaint` | L'altra parte ha espresso insoddisfazione, che sia stata risolta o no. |
| **Passata avanti** | `escalation` | La chiamata è stata passata a qualcun altro, o l'altra parte ha chiesto che lo fosse. |
| **Cliente importante** | `vip` | L'altra parte è stata trattata come un cliente importante, o ha detto di esserlo. |

## Segnali {#red-flags}

Cose che richiedono attenzione, trovate nella conversazione con la prova e il momento — per esempio *Cliente arrabbiato* o *Rischio di abbandono*. I segnali sono disegnati in rosso nella [finestra delle registrazioni](../interface/recordings.md), e ognuno ha una gravità: bassa, media o alta.

| Nome | Codice | `severity` | Usata per |
| --- | --- | --- | --- |
| **Cliente arrabbiato** | `angry-customer` | `high` | L'altra parte era udibilmente arrabbiata, offensiva, o ha minacciato di andarsene. |
| **Rischio di abbandono** | `churn-risk` | `high` | Si è parlato di disdire, non rinnovare o passare a qualcun altro, per quanto con calma. |
| **Impegno preso** | `promise-made` | `medium` | La nostra parte si è impegnata su qualcosa di preciso — una data, un prezzo, una correzione, un rimborso. |
| **Dati sensibili** | `sensitive-data` | `high` | È stato letto ad alta voce un numero di carta, una password, un numero di documento o qualsiasi altra cosa che non dovrebbe stare in una registrazione. |
| **Concorrente** | `competitor` | `low` | L'altra parte ha nominato qualcun altro che offre la stessa cosa, o ci ha paragonati a lui. |

## Istruzioni {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Impostazioni → Dizionari: forme di risposta e istruzioni sulla lingua" />

*Ciò che viene aggiunto a ogni prompt sulla forma della risposta e sulla lingua in cui scriverla.* Sono conservate qui perché ogni prompt possa usare la stessa formulazione, e può cambiarle come qualsiasi altra voce — o scriverne di sue, come *rispondi in breve* o *non citare mai un prezzo*, e spuntarle sotto **Invia anche** in qualsiasi prompt.

| Nome | Codice | Che cosa dice al modello |
| --- | --- | --- |
| **Prosa** | `shape-plain` | Rispondere in prosa semplice, senza JSON, elenchi o titoli. |
| **Punti** | `shape-list` | Rispondere con un elenco di cose da fare, ognuna con chi e quando. |
| **Etichette** | `shape-labels` | Rispondere in JSON con un elenco di codici e quanto è sicuro di ciascuno, usando solo codici dell'elenco ricevuto. |
| **Voto** | `shape-score` | Rispondere con un voto, la sua motivazione e le parole su cui si basa. |
| **Criteri** | `shape-rubric` | Rispondere con un voto complessivo e un voto per ogni criterio. |
| **Segnali** | `shape-flags` | Rispondere con codici dell'elenco, ciascuno con una gravità. |
| **Risposta** | `shape-qa` | Rispondere con la replica, o dire chiaramente che la conversazione non lo dice, e le parole su cui si basa la replica. |
| **JSON** | `shape-json` | Rispondere solo con JSON, nella forma richiesta sopra. |
| **Come parlato** | `language-as-spoken` | Scrivere nella lingua in cui si è svolta la conversazione. |
| **Come parlato, nominata** | `language-as-spoken-named` | Lo stesso, nominando la lingua. |
| **Una lingua nominata** | `language-named` | Scrivere nella lingua che lei indica. |

**Aggiungi** in cima all'elenco aggiunge una voce.

## Valori predefiniti {#defaults}

**Ripristina i valori predefiniti** rimette ogni dizionario com'era fornito con il programma, nella lingua attuale dell'interfaccia. Ciò con cui le sue conversazioni sono già classificate non viene toccato.

## Formati di risposta {#response-formats}

Questi blocchi riproducono le istruzioni incluse. Descrivono i formati delle risposte; le alternative sono una notazione, non esempi JSON eseguibili.

### Prosa (`shape-plain`) {#shape-plain}

```text
Risponda in prosa. Non usi JSON, elenchi o titoli.
```

### Punti (`shape-list`) {#shape-list}

```text
Risponda solo con JSON, esattamente di questa forma:
{"items": [{"text": "che cosa va fatto", "owner": "chi, o vuoto", "due": "quando, o vuoto"}]}
Restituisca un array vuoto quando non c'è nulla da elencare. Non scriva nulla fuori dal JSON.
```

### Etichette (`shape-labels`) {#shape-labels}

```text
Risponda solo con JSON, esattamente di questa forma:
{"labels": [{"code": "un codice dall'elenco che le è stato dato", "confidence": 0.0}]}
Usi solo i codici dell'elenco. Restituisca un array vuoto quando nessuno va bene.
Non inventi un codice e non scriva nulla fuori dal JSON.
```

### Voto (`shape-score`) {#shape-score}

```text
Risponda solo con JSON, esattamente di questa forma:
{"score": 3, "rationale": "perché questo numero e non uno più alto",
 "evidence": [{"at_ms": 0, "quote": "le parole su cui si basa"}]}
Il voto è un numero intero da 1 a 5. Non scriva nulla fuori dal JSON.
```

### Criteri (`shape-rubric`) {#shape-rubric}

```text
Risponda solo con JSON, esattamente di questa forma:
{"overall": 3, "rationale": "perché questo numero e non uno più alto",
 "criteria": [{"name": "il criterio come le è stato dato",
               "verdict": "pass" o "weak" o "fail" o "n/a",
               "note": "una frase"}]}
Giudichi ogni criterio che le è stato dato e nessun altro. Il voto complessivo è un numero
intero da 1 a 5. Non scriva nulla fuori dal JSON.
```

### Segnali (`shape-flags`) {#shape-flags}

```text
Risponda solo con JSON, esattamente di questa forma:
{"flags": [{"code": "un codice dall'elenco che le è stato dato",
            "severity": "low" o "medium" o "high",
            "evidence": "le parole su cui si basa",
            "at_ms": 0}]}
Usi solo i codici dell'elenco, e sollevi ciascuno al più una volta. Restituisca un array
vuoto quando non si applica nulla. Non scriva nulla fuori dal JSON.
```

### Risposta (`shape-qa`) {#shape-qa}

```text
Risponda solo con JSON, esattamente di questa forma:
{"answer": "la sua risposta, o dica chiaramente che la conversazione non lo dice",
 "citations": [{"at_ms": 0, "quote": "le parole su cui poggia la sua risposta"}]}
Non risponda da nient'altro che dalla conversazione. Non scriva nulla fuori
dal JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Risponda solo con JSON, nella forma richiesta sopra. Non scriva nulla fuori dal JSON.
```

### Come parlato (`language-as-spoken`) {#language-as-spoken}

```text
Scriva la sua risposta nella stessa lingua in cui si è svolta la conversazione.
```

### Come parlato, nominata (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Scriva la sua risposta nella stessa lingua in cui si è svolta la conversazione, cioè {language}.
```

### Una lingua nominata (`language-named`) {#language-named}

```text
Scriva la sua risposta in questa lingua: {language}.
```
