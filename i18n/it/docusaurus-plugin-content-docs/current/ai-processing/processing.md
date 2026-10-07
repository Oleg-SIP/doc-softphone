---
title: Elaborazione
sidebar_position: 2
description: "L'elaborazione automatica delle conversazioni, i limiti di spesa mensili, i modelli linguistici, i prompt e le regole che li eseguono."
---

**Impostazioni → Elaborazione** decide che cosa succede a una conversazione una volta registrata, quale modello fa il lavoro e quanto può costare.

<Shot name="12_settings_processing" alt="Impostazioni → Elaborazione" />

## Elabora le conversazioni automaticamente {#process-conversations-automatically}

- **Spento:** non succede nulla finché non lo chiede nella [finestra delle registrazioni](../interface/recordings.md).
- **Acceso:** le [regole](#rules) qui sotto girano da sole. È questo che trasforma una conversazione in un riassunto, una categoria e tutto il resto senza che nessuno prema nulla. Un modello nel cloud fa pagare ciascuno di questi passi.

Sotto la casella il programma mostra quanto è stato speso questo mese e su quante richieste, per esempio *Questo mese: 40.492 token, su 84 richieste, senza costi.*

## Limiti {#limits}

| Campo | Significato |
| --- | --- |
| **Limite di spesa, mensile** | Il massimo che i modelli possono costare in un mese. |
| **Limite di token, mensile** | Il massimo di token che possono usare in un mese. |

I limiti sono due perché un mese si può contare in due cose. Entrambi sono vuoti finché non li compila. Quando uno dei due viene raggiunto, le regole automatiche si fermano fino al mese successivo. **Ciò che chiede lei stesso non viene mai fermato.**

## Modelli linguistici {#language-models}

I modelli che leggono una trascrizione e ne scrivono. Prema **Aggiungi** per aggiungerne uno. Ognuno è elencato con il suo nome e, sotto, l'identificativo del modello e l'indirizzo del suo servizio, per esempio `qwen3-32b · http://llm.local:8000/v1`. Quello indicato come **predefinito** è quello usato per impostazione predefinita. Un pulsante nel modulo di un modello verifica che il servizio risponda davvero prima che lei ci faccia affidamento.

- Un modello **sulla sua macchina** tiene ogni conversazione dentro l'edificio e non costa nulla.
- Un modello nel cloud — OpenAI, Claude, Mistral, DeepSeek, Groq e altri — si paga a consumo. Il programma mostra il prezzo di ogni chiamata in token e in denaro.

## Prompt {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Impostazioni → Elaborazione: i prompt" />

*Ciò che viene chiesto ai modelli.* Ogni prompt arriva con il programma e ognuno è suo da cambiare — e da rimettere a posto. Ognuno è elencato con il suo nome e, sotto, che cosa scrive e in quale forma. La forma — **Risposta**, **Punti**, **Etichette**, **JSON**, **Prosa**, **Segnali** o **Criteri** — decide come la risposta viene conservata e mostrata. I prompt sono descritti in [Personal Prompt Studio](prompt-studio.md). **Aggiungi** crea un prompt suo.

## Regole {#rules}

<Shot name="12c_settings_processing_rules" alt="Impostazioni → Elaborazione: le regole" />

*Ciò che gira da sé, in quest'ordine. Ognuna scatta al più una volta per conversazione.* Una regola è una riga con una casella che la attiva o la disattiva, il suo nome e, sotto, che cosa fa. **▲** e **▼** cambiano l'ordine. Il programma ne fornisce otto:

| Regola | Che cosa fa | Quando |
| --- | --- | --- |
| **Trascrivere ogni conversazione** | La trascrive. | sempre |
| **Riassumerla** | Chiede a un modello: **Riassunto**. | sempre |
| **Ridurla a una riga** | Chiede a un modello: **Riassunto in una riga**. | sempre |
| **Classificarla in una categoria** | Chiede a un modello: **Categoria**. | sempre |
| **Etichettarla** | Chiede a un modello: **Etichette**. | sempre |
| **Sollevare tutto ciò che merita uno sguardo** | Chiede a un modello: **Segnali**. | sempre |
| **Valutarla, se era una vendita** | Chiede a un modello: **Qualità commerciale**. | solo se la categoria è **Vendite** |
| **Valutarla, se era assistenza** | Chiede a un modello: **Qualità dell'assistenza**. | solo se la categoria è **Assistenza** |

L'ordine conta: le ultime due regole hanno bisogno della categoria impostata dalla regola precedente. **Aggiungi** crea una regola sua.

## Valori predefiniti {#defaults}

**Ripristina i valori predefiniti** rimette i prompt e le regole come erano forniti con il programma, nella lingua attuale dell'interfaccia. I suoi modelli linguistici non vengono toccati.

I prompt e le regole forniti con il programma restano nella lingua in cui erano quando cambia la lingua dell'interfaccia; **Ripristina i valori predefiniti** li porta nella nuova. Ogni prompt viene allora indicato come *modificato* a destra.
