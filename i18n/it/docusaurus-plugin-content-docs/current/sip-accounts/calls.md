---
title: Impostazioni delle chiamate
sidebar_position: 3
description: I codec offerti al centralino, che cosa succede quando arriva una seconda chiamata, la richiamata automatica e per quanto tempo si conserva il registro chiamate.
---

**Impostazioni → Chiamate** contiene le impostazioni che valgono per ogni chiamata, su qualunque account passi.

## Formati audio {#audio-formats}

<Shot name="07_settings_calls" alt="Impostazioni → Chiamate: i formati audio" />

L'elenco dei codec che il telefono offre all'altro capo. I codec sono *offerti in quest'ordine*, e l'altro capo sceglie tra ciò che lei offre: più un codec sta in alto, più è probabile che venga usato.

- La **casella** attiva o disattiva un codec. Un codec disattivato non viene offerto.
- **▲** e **▼** lo spostano in su o in giù nell'elenco.
- *banda larga* a destra indica un codec con una gamma di suono più ampia di quella di una linea telefonica: la voce è più chiara.

| Codec | Frequenza di campionamento | Attivo per impostazione predefinita |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, banda larga | sì |
| **G722** | 16 kHz, banda larga | sì |
| **PCMU** | 8 kHz | sì |
| **PCMA** | 8 kHz | sì |
| **speex** | 16 kHz, banda larga | no |
| **speex** | 8 kHz | no |
| **speex** | 32 kHz, banda larga | no |
| **iLBC** | 8 kHz | no |
| **GSM** | 8 kHz | no |
| **L16** | 44 kHz, stereo, banda larga | no |
| **L16** | 44 kHz, banda larga | no |

La tabella segue l'ordine con cui viene fornito il programma.

I codec si concordano all'inizio di una chiamata, perciò una modifica vale dalla chiamata successiva. Se una chiamata si sente male, lasci attivi solo i codec che usa il suo centralino.

## Avviso di chiamata {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Impostazioni → Chiamate: avviso di chiamata, richiamata automatica e cronologia" />

*Che cosa succede quando qualcuno chiama mentre lei è già in conversazione.* Lo sceglie il menu a discesa; il valore predefinito è **Far squillare la seconda chiamata**. Una chiamata citofonica dal suo stesso centralino passa sempre, qualunque cosa scelga — è così che una chiamata fatta da un pannello CTI raggiunge questo telefono.

## Richiamata automatica {#autodial}

Quando una chiamata non riesce a passare, la sua scheda propone di continuare a comporre finché non passa. Due cursori stabiliscono come:

- **Attesa tra i tentativi** — 15 secondi per impostazione predefinita;
- **Rinuncia dopo** — 30 minuti per impostazione predefinita.

## Cronologia {#history}

Un registro chiamate è una prova, perciò non se ne toglie nulla se non lo dice lei qui.

- **Periodo di conservazione** sceglie per quanto tempo [il registro chiamate](/interface/contacts-history#history) conserva una chiamata. Il valore predefinito è **Sempre**.
- **Svuota il registro chiamate** elimina tutte le chiamate in una volta, qualunque sia il periodo. Non si può annullare.
