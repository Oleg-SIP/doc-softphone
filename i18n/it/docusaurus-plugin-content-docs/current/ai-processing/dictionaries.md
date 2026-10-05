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
| **Vendite** | `sales` | Vendere, fare un preventivo, trattare o seguire un acquisto — compreso un cliente che chiede quanto costa qualcosa. |
| **Assistenza** | `support` | Aiutare qualcuno con un prodotto o un servizio che ha già: un guasto, una domanda sull'uso, un reclamo sul funzionamento. |
| **Personale** | `personal` | Niente di lavoro — una conversazione privata che si è trovata a passare su questa linea. |
| **Altro** | `other` | Di lavoro, ma né vendita né assistenza: un fornitore, un collega, una consegna, un numero sbagliato. La scelga piuttosto che tirare a indovinare tra le altre. |

Prema **Aggiungi** per aggiungere una sua categoria.

## Etichette {#tags}

Contrassegni che *possono valere tutti per la stessa conversazione*. Prema **Aggiungi** per aggiungerne uno. L'elenco parte con voci come:

| Nome | Codice | Usata per |
| --- | --- | --- |
| **Richiamo promesso** | `callback` | Qualcuno in questa chiamata ha promesso di richiamare, o ha chiesto di essere richiamato. |
| **Reclamo** | `complaint` | L'interlocutore ha espresso insoddisfazione, che sia stata risolta o no. |
| **Passata avanti** | `escalation` | La chiamata è stata passata a qualcun altro, o l'interlocutore ha chiesto che lo fosse. |
| **Cliente importante** | `vip` | L'interlocutore è stato trattato come un cliente importante, o ha detto di esserlo. |

## Segnali {#red-flags}

Cose che richiedono attenzione, trovate nella conversazione con la prova e il momento — per esempio *Cliente arrabbiato* o *Rischio di abbandono*. I segnali sono disegnati in rosso nella [finestra delle registrazioni](../recordings/recordings-window.md), e ognuno ha una gravità: bassa, media o alta.

## Forme di risposta e lingua {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Impostazioni → Dizionari: forme di risposta e istruzioni sulla lingua" />

Più in basso nella scheda ci sono le istruzioni con cui vengono composti i prompt. Sono conservate qui perché ogni prompt possa usare la stessa formulazione, e può cambiarle come qualsiasi altra voce.

| Nome | Codice | Che cosa dice al modello |
| --- | --- | --- |
| **Etichette** | `shape-labels` | Rispondere in JSON con un elenco di codici e quanto è sicuro di ciascuno, usando solo codici dell'elenco ricevuto. |
| **Voto** | `shape-score` | Rispondere con un voto, la sua motivazione e le parole su cui si basa. |
| **Criteri** | `shape-rubric` | Rispondere con un voto complessivo e un voto per ogni criterio. |
| **Segnali** | `shape-flags` | Rispondere con codici dell'elenco, ciascuno con una gravità. |
| **Risposta** | `shape-qa` | Rispondere con la replica, o dire chiaramente che la conversazione non lo dice, e le parole su cui si basa la replica. |
| **JSON** | `shape-json` | Rispondere solo con JSON, nella forma richiesta sopra. |
| **Come parlato** | `language-as-spoken` | Scrivere nella lingua in cui si è svolta la conversazione. |
| **Come parlato, nominata** | `language-as-spoken-named` | Lo stesso, nominando la lingua. |
| **Una lingua nominata** | `language-named` | Scrivere nella lingua che lei indica. |

**Aggiungi** in fondo all'elenco aggiunge una voce.

## Valori predefiniti {#defaults}

**Ripristina i valori predefiniti** rimette ogni dizionario com'era fornito con il programma, nella lingua attuale dell'interfaccia. Ciò con cui le sue conversazioni sono già classificate non viene toccato.
