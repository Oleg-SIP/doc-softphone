---
title: Pulsanti
sidebar_position: 4
description: "\"Pulsanti BLF: pulsanti a un tocco che chiamano un interno del suo centralino IP e mostrano se è libero, se squilla o se è occupato.\""
---

I pulsanti sono i tasti **BLF** (Busy Lamp Field) del softphone, la stessa funzione che ha un telefono da scrivania su un centralino IP. Un pulsante chiama un interno con un solo tocco. Un pulsante che segue la sua linea mostra anche una spia: il telefono chiede al centralino di quell'interno e mostra se è libero, se squilla o se è occupato, come fanno una console da centralinista o i tasti programmabili di un telefono da scrivania.

Il BLF richiede il supporto del centralino: il centralino deve comunicare al telefono lo stato dell'interno. La maggior parte dei centralini IP lo fa. Se il suo no, la spia resta grigia e il pulsante chiama comunque.

I pulsanti stanno sotto i bollini degli account nella [finestra principale](/interface/main-window), e si creano in **Impostazioni → Pulsanti**.

<Shot name="08_settings_buttons" alt="Impostazioni → Pulsanti: due pulsanti" />

Ogni riga è un pulsante: la spia, la sua etichetta e, a destra, il suo numero e l'account a cui appartiene — per esempio *212 · 201 Ufficio*. **▲** e **▼** spostano il pulsante in su o in giù; i pulsanti nella finestra principale seguono quest'ordine. **Aggiungi** ne crea uno nuovo.

## La spia {#the-lamp}

Un pulsante che segue la sua linea mostra una spia:

| Spia | La linea è |
| --- | --- |
| Verde | libera |
| Ambra | sta squillando |
| Rossa | in conversazione |
| Grigia | sconosciuta: il centralino non lo dice |

## Aggiungere un pulsante {#adding-a-button}

<Shot name="08b_button_add" alt="Il modulo di un nuovo pulsante" />

Prema **Aggiungi**; sotto l'elenco si apre un modulo.

| Campo | Cosa inserire |
| --- | --- |
| **Numero** | Il numero da comporre. |
| **Linea** | L'account su cui parte la chiamata. La scelga per prima: per mostrare la spia, il telefono chiede di questo numero al centralino di quella linea, quindi deve sapere quale. |
| **Etichetta** | Il testo sul pulsante, per esempio il nome della persona. Il pulsante ha spazio solo per un'etichetta breve; una più lunga viene tagliata. |
| **Mostra se questa linea è occupata** | Un interruttore. Acceso, il pulsante ha una spia. Spento, chiama soltanto. |

**Salva** resta grigio finché il modulo non è compilato. **Annulla** scarta il modulo.

La parte del programma che mostra i pulsanti si può disattivare in [Moduli](/application/modules).
