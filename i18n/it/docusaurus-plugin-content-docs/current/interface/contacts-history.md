---
title: Contatti e cronologia
sidebar_position: 4
description: La rubrica e il registro chiamate, accanto al telefono.
---

**Contatti** e **Cronologia** si aprono come due schede a destra del telefono, così può cercare un numero mentre parla.

## Contatti {#contacts}

<Shot name="03_contacts" alt="La scheda Contatti" />

- **Cerca** filtra l'elenco mentre digita.
- **Aggiungi** crea un contatto.
- Ogni contatto è elencato con un nome e, sotto, il numero e l'account attraverso cui viene chiamato, per esempio *231 · 201 Ufficio*.

Una chiamata in arrivo da un numero noto mostra il nome del contatto, così come l'elenco delle chiamate recenti e il registro chiamate — è così che funziona l'identificazione del chiamante.

### Modificare un contatto {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Un contatto aperto per la modifica" />

Selezioni un contatto per far comparire una matita e una cornetta a destra della sua riga. La cornetta chiama il contatto; la matita apre il modulo sotto la riga:

| Campo | Cosa inserire |
| --- | --- |
| **Nome** | Come viene mostrato il contatto. |
| **Numero** | Il numero da comporre. |
| Menu a discesa sotto **Numero** | L'account attraverso cui viene chiamato il contatto. |

**Salva** conserva le modifiche, **Annulla** le scarta ed **Elimina** cancella il contatto.

## Cronologia {#history}

<Shot name="21_history" alt="La scheda Cronologia" />

Il registro chiamate, dalla più recente. In alto:

- il menu a discesa, **Tutte le chiamate** per impostazione predefinita, restringe l'elenco a un tipo di chiamata;
- **Cerca** filtra in base a ciò che digita.

Ogni voce ha un'icona per il tipo di chiamata — una cornetta in uscita, o una cornetta rossa con un orologio per una chiamata persa —, il nome dell'interlocutore (o il numero), e sotto la data, l'esito della chiamata, la sua durata, il numero e l'account. Le chiamate recenti sono mostrate come *Ieri, 22:33* o con il giorno della settimana, quelle più vecchie con la data.

| Esito della chiamata | Mostrato come |
| --- | --- |
| Avete parlato | **in uscita** o in arrivo, e la durata, per esempio *48 s* |
| Una chiamata in arrivo non ha avuto risposta | **Persa** |
| Una chiamata che ha fatto non si è collegata | **Non è andata a buon fine** |

Selezioni una voce per far comparire quattro pulsanti alla sua destra:

| Pulsante | Che cosa fa |
| --- | --- |
| Persona con un più | Aggiunge il numero ai [Contatti](#contacts). |
| ▶ | Riproduce la registrazione della chiamata, se è stata registrata. |
| Cestino | Elimina la voce. |
| Cornetta | Richiama il numero. |

### Per quanto tempo si conserva il registro {#how-long-the-log-is-kept}

Un registro chiamate è una prova, perciò non se ne toglie nulla se non lo dice lei: per impostazione predefinita si conserva ogni chiamata. Il periodo di conservazione e il pulsante **Svuota il registro chiamate** sono in [Impostazioni delle chiamate](../sip-accounts/calls.md#history).

Le chiamate perse e rifiutate si possono leggere anche attraverso l'[API REST locale](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
