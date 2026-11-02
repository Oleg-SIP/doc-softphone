---
title: Impostazioni del suggeritore
sidebar_label: Suggeritore
sidebar_position: 5
description: "Impostazioni → Suggeritore: che cosa serve al suggeritore dal vivo, l'interruttore che lo consente, la dimensione del testo, gli assistenti e le loro schede, e i tetti mensili di quanto può spendere."
---

In **Impostazioni → Suggeritore** il suggeritore dal vivo viene consentito, dimensionato e dotato dei suoi assistenti. Il suggeritore in sé — la finestra che scrive una chiamata mentre viene detta e suggerisce cosa rispondere, e la prova su una registrazione — è descritto in [Finestra del suggeritore](/interface/prompter).

La [Panoramica](/interface/settings-overview) delle impostazioni elenca il suggeritore sotto **Suggeritore** in due passi: **Consentire il suggeritore** e **Avviare il suggeritore**.

## Che cosa gli serve {#what-it-needs}
- **Un riconoscitore capace di ascoltare mentre una conversazione è in corso.** Si aggiunge in [Impostazioni → Trascrizione](/ai-processing/transcription#live-recognition-for-the-prompter), come qualsiasi altro riconoscitore, e gli servono un **Indirizzo per il suggeritore** e una **Prova** riuscita.
- **Un modello linguistico**, per gli assistenti che suggeriscono qualcosa. È quello impostato sull'assistente, oppure il modello predefinito di [Impostazioni → Elaborazione](/ai-processing/processing#language-models). I sottotitoli non hanno bisogno di alcun modello.
- **La spunta Consentire l'uso del suggeritore**, in **Impostazioni → Suggeritore**.

Quando ci sono tutte e tre, **Suggeritore** compare nell'elenco in fondo al telefono, tra **Cronologia** e **Impostazioni**, e apre la [finestra del suggeritore](/interface/prompter). La parte del programma che se ne occupa è il modulo **Suggeritore**, *Ascolta una conversazione in corso e suggerisce*; si può disattivare in [Moduli](/application/modules).

## Impostazioni → Suggeritore {#settings--prompter}
<Shot name="41_settings_prompter" alt="Impostazioni → Suggeritore: l'interruttore che consente il suggeritore e la dimensione del testo" />

*Riconoscimento vocale durante una conversazione in corso, e suggerimenti scritti secondo le sue istruzioni. Entrambi si pagano a minuto.*

| Impostazione | Predefinito | Che cosa fa |
| --- | --- | --- |
| **Consentire l'uso del suggeritore** | disattivato | L'unico interruttore che permette di avviare un suggeritore. Nient'altro nella pagina ha effetto finché non è attivo. |
| **Trascrizione e suggerimenti** | 13 pixel | Quanto grandi vengono disegnate le due colonne della finestra. |
| **Ripeti la riga più recente sopra le colonne** | attivo | Mostra il suggerimento più recente — o la riga più recente, per un assistente che non suggerisce nulla — in una fascia a sé sopra le colonne. |
| **La riga ripetuta** | 20 pixel | Quanto è grande il testo della fascia. Compare finché la fascia è attiva. |

:::caution
La voce dell'altra parte viene inviata a un riconoscitore mentre parla, il che non è meno che registrarla. Dove [Impostazioni → Registrazione](/recordings) chiede di avvisarla prima, un suggeritore parte solo dopo che è stata avvisata.
:::

Il suggeritore si legge mentre si parla, spesso da più lontano del resto del telefono, quindi le due dimensioni le sceglie lei: ne scelga che riesca a cogliere senza avvicinarsi allo schermo. Trascini il separatore sotto la fascia, nella [finestra del suggeritore](/interface/prompter#the-window), per renderla più alta.

### Assistenti {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Impostazioni → Suggeritore: gli assistenti e i tetti mensili" />

Un assistente è ciò che si chiede a un suggeritore di essere. *Ciascuno ascolta una conversazione in corso e scrive qualcosa nella finestra del suggeritore: le parole così come vengono dette, una loro traduzione, o un suggerimento su cosa dire poi.* Quale eseguire lo sceglie nella finestra del suggeritore. Il programma ne porta quattro:

| Assistente | `code` | Che cosa scrive | Interroga un modello |
| --- | --- | --- | --- |
| **Sottotitoli** | `rt-subtitles` | Le parole di entrambe le parti, mentre vengono dette. | no |
| **Traduzione** | `rt-translate` | Le parole dell'altra parte, tradotte nella lingua del programma. | sì |
| **Vendite** | `rt-objections` | Per chi vende al telefono: quando il cliente solleva un'obiezione, l'obiezione in una riga e una riga che le risponde. | sì |
| **Aiuto al colloquio** | `rt-interview` | Per chi sostiene un colloquio: la risposta alla domanda appena fatta, in poche righe brevi, oppure che cosa toccare nella risposta successiva. | sì |

Questi sono i nomi degli assistenti inclusi; le schermate possono mostrare nomi precedenti. «—» da `rt-objections` significa che non c’è un suggerimento utile. Le istruzioni trattano anche domande aperte e segnali di disponibilità all’acquisto.

**▲** e **▼** cambiano l'ordine, che è quello del menu a tendina della [finestra del suggeritore](/interface/prompter#the-window). **Aggiungi** crea un assistente tutto suo. **Ripristina i valori predefiniti** riporta i prompt e le regole a come sono arrivati con il programma, qui come in [Elaborazione](/ai-processing/processing#defaults); i suoi modelli linguistici restano intatti.

### La scheda di un assistente {#an-assistants-card}
Premendo un assistente si apre la sua scheda. È la stessa scheda di un [prompt](/ai-processing/prompt-studio) in Elaborazione, con alcuni controlli in più.

<Shot name="42_prompter_assistant" alt="La scheda dell'assistente Obiezioni nella chiamata: il riconoscitore, quando una risposta è finita, il ruolo e il prompt" />

| Campo | Che cosa fa |
| --- | --- |
| **Nome** | Il nome mostrato nell'elenco e nella finestra del suggeritore. |
| **Forma della risposta** e **Invia anche** | Come per ogni prompt: la forma della risposta e le istruzioni inviate insieme. Gli assistenti forniti rispondono in **Prosa**. |
| **Riconoscitore** | Quale riconoscitore ascolta. Sono offerti solo quelli capaci di ascoltare mentre qualcuno parla. |
| **Quando una risposta è finita** | Chi decide che una risposta è conclusa e le si può rispondere: **Decide il riconoscitore**, **Dopo una pausa** oppure **Solo quando lo chiedo** — in tal caso una risposta finisce quando lei preme **Suggerimento**. Sei dei riconoscitori dicono dove finisce una risposta e quattro no; **Decide il riconoscitore** ripiega su una pausa dove non ha una risposta, ed è per questo che è l'impostazione da lasciare. |
| **Riconosci anche il mio lato** | Una seconda sessione sullo stesso riconoscitore, a prezzo doppio, perché anche le sue parole compaiano nella trascrizione. Entrano in ciò che viene detto al modello e non sono mai ciò su cui viene interrogato. |
| **Ruolo — che cosa è il modello** | Inviato al modello prima del prompt, per esempio *Aiuti una persona che vende al telefono…* |
| **Il prompt** | Ciò che si chiede al modello a ogni risposta. `{{reply}}` è la risposta appena finita e `{{conversation}}` tutto ciò che è stato detto prima. *Lascialo vuoto e a un modello non si chiede niente: le parole si mostrano mentre arrivano, e l'unica cosa che si paga è il riconoscitore* — ed è proprio **Sottotitoli**. |
| **Rispondi in** | La lingua del suggerimento: **Qualunque cosa sia stata parlata**, **La lingua di questo programma** oppure **Una sola lingua, sempre**, con il suo codice. |
| **Modello** | **Predefinito** o uno dei suoi [modelli linguistici](/ai-processing/processing#language-models). |

### Spesa {#spending}
*Separata da quello che le regole possono spendere sulle conversazioni concluse. Un mese di riassunti non deve poter far tacere un suggeritore in mezzo a una conversazione.*

| Campo | Quando viene raggiunto |
| --- | --- |
| **Riconoscitori, al mese** | Un suggeritore in funzione si ferma alla fine della risposta in cui si trova — mai a metà parola. |
| **Modelli, al mese** | I suggerimenti si fermano e i sottotitoli continuano. |

Vuoto significa nessun tetto. Quanto costa un minuto di audio dal vivo è il **Prezzo al minuto** del riconoscitore, indicato sulla sua scheda in [Trascrizione](/ai-processing/transcription#the-recognisers-card); senza di esso il suggeritore avvisa che la cifra mostrata è una stima.

## Assistenti inclusi {#assistant-templates}

`system` definisce il comportamento del modello; `body` descrive il compito. Forma e lingua della risposta sono specificate separatamente dalle istruzioni del dizionario.

[Segnaposto](prompt-studio.md#placeholders)

### Sottotitoli (`rt-subtitles`) {#rt-subtitles}

**Forma della risposta:** `plain`.

Ruolo e compito vuoti: nessuna chiamata al modello linguistico.

### Traduzione (`rt-translate`) {#rt-translate}

**Forma della risposta:** `plain`.

**Ruolo (`system`)**

```text
Traduci il parlato mentre avviene. Rispondi solo con la traduzione — nessun preambolo, nessuna virgoletta, nessuna spiegazione — e lasci nomi, numeri e prezzi esattamente come sono stati detti.
```

**Compito (`body`)**

```text
Traduci in {{language}}:

{{reply}}
```

### Vendite (`rt-objections`) {#rt-objections}

**Forma della risposta:** `plain`.

**Ruolo (`system`)**

```text
Aiuti una persona che vende al telefono. Rispondi in poche righe brevi che possa leggere mentre ascolta, mai in paragrafi, e non prometti mai nulla a suo nome.
```

**Compito (`body`)**

```text
L'altra persona ha appena detto:

{{reply}}

Prima in questa conversazione:

{{conversation}}

Di' in una riga che cosa sta succedendo — un'obiezione, una domanda rimasta senza risposta, un segno che sono pronti — e in una riga che cosa dire adesso. Se non c'è nulla da dire, scrivi solo «—».
```

### Aiuto al colloquio (`rt-interview`) {#rt-interview}

**Forma della risposta:** `plain`.

**Ruolo (`system`)**

```text
Aiuti una persona che sta sostenendo un colloquio. Rispondi in poche righe brevi che possa leggere mentre ascolta, mai in paragrafi, e non inventi mai fatti sul suo conto.
```

**Compito (`body`)**

```text
L'altra persona ha appena detto:

{{reply}}

Prima in questa conversazione:

{{conversation}}

In tre righe brevi, di' che cosa sta chiedendo davvero e che cosa dovrebbe coprire una buona risposta.
```
