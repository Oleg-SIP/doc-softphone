---
title: Personal Prompt Studio
sidebar_position: 3
description: I prompt che scrivono i resoconti delle sue conversazioni, le regole che li eseguono e come farli suoi.
---

**Personal Prompt Studio** è la parte di AI Softphone che scrive i resoconti delle sue conversazioni a modo suo. Il resoconto è fatto dai prompt: il programma ne fornisce undici, pronti all'uso non appena sono collegati la trascrizione e un modello linguistico, e lei può cambiarli in linguaggio semplice, duplicarli e aggiungerne di suoi. Sono elencati sotto **Prompt** in [Impostazioni → Elaborazione](processing.md#prompts).

Il suo LLM, la sua chiave, il suo controllo: colleghi il modello che preferisce con la sua chiave, attraverso un servizio supportato o un'API compatibile — oppure un modello distribuito all'interno della sua organizzazione. Con la [trascrizione](transcription.md#your-own-models) anch'essa sul suo hardware, sia l'audio sia le trascrizioni restano nel suo ambiente.

<Shot name="12b_settings_processing_prompts" alt="L'elenco dei prompt in Impostazioni → Elaborazione" />

## I prompt forniti con il programma {#the-prompts-that-come-with-the-program}

La seconda colonna è ciò che l'elenco mostra sotto il nome del prompt: che cosa scrive, e in quale forma.

| Prompt | Forma | Che cosa scrive |
| --- | --- | --- |
| **Riassunto** | Prosa | I punti principali, le decisioni e i passi successivi in un breve paragrafo. |
| **Riassunto in una riga** | Prosa | Un titolo breve per riconoscere la conversazione in un elenco. |
| **Cose da fare** | Punti | Chi si è impegnato a fare che cosa, e quando, con le parole che ha detto. |
| **Argomenti** | Punti | I temi trattati, in poche parole. |
| **Nomi e numeri** | JSON | Persone, aziende, date, importi e riferimenti. |
| **Categoria** | Etichette | Classifica la conversazione in una delle sue [categorie](dictionaries.md). |
| **Etichette** | Etichette | Le applica le sue [etichette](dictionaries.md), così da ritrovarla in seguito. |
| **Segnali** | Segnali | Problemi, con la prova e il momento nella conversazione. |
| **Una domanda su questa chiamata** | Risposta | Risponde a una domanda che lei fa su una conversazione, in base alla sua trascrizione. |
| **Qualità commerciale** | Criteri | Esamina la conversazione secondo criteri di vendita che può modificare. |
| **Qualità dell'assistenza** | Criteri | Giudica quanto bene il problema è stato capito e gestito. |

Le forme sono strutture fisse di risposta, ed è questo che permette al programma di conservarla e di cercarvi in seguito: le **Etichette** sono codici da uno dei suoi elenchi, i **Segnali** sono codici con una gravità, i **Criteri** sono un voto con una motivazione e un voto per ogni criterio, la **Risposta** è una replica con le parole su cui si basa. Le istruzioni che indicano a un modello la forma sono conservate in [Dizionari](dictionaries.md#answer-shapes-and-language).

Le chiamate fatte in AI Softphone, le riunioni [catturate](/capture/) dal computer e le registrazioni importate passano tutte per gli stessi prompt una volta che hanno una trascrizione.

Le cose da fare registrano ciò che è stato concordato — non inviano messaggi, non prenotano appuntamenti e non aprono ticket al posto suo.

## Farlo suo {#making-it-yours}

- Cambi ciò che chiede un prompt, in linguaggio semplice: che cosa cerca, il formato della risposta e la lingua in cui risponde.
- Duplichi un prompt per provarne una variante.
- Scelga il modello per ogni prompt — sulla sua macchina o nel cloud.
- Stabilisca l'ordine in cui girano i prompt, li attivi e li disattivi e li renda condizionali — lo si fa con le [regole](processing.md#rules): per esempio, una valutazione commerciale gira solo sulle chiamate classificate come **Vendite**.
- Tenga le sue categorie, etichette e segnali in [Dizionari](dictionaries.md).
- Metta un tetto ai costi con i [limiti mensili](processing.md#limits).

I prompt e le regole originali si possono ripristinare con **Ripristina i valori predefiniti** in **Valori predefiniti** di [Impostazioni → Elaborazione](processing.md#defaults).
