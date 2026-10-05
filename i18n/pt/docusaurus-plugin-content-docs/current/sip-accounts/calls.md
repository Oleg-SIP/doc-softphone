---
title: Definições de chamadas
sidebar_position: 3
description: Os codecs oferecidos à central, o que acontece quando chega uma segunda chamada, a remarcação automática e durante quanto tempo se guarda o registo de chamadas.
---

**Definições → Chamadas** reúne as definições que valem para todas as chamadas, seja qual for a conta em que estão.

## Formatos de áudio {#audio-formats}

<Shot name="07_settings_calls" alt="Definições → Chamadas: os formatos de áudio" />

A lista de codecs que o telefone oferece à outra ponta. Os codecs são *oferecidos por esta ordem*, e a outra ponta escolhe de entre o que oferecer: quanto mais acima estiver um codec, mais provável é que seja usado.

- A **caixa de verificação** liga ou desliga um codec. Um codec desligado não é oferecido.
- **▲** e **▼** sobem-no ou descem-no na lista.
- *banda larga* à direita marca um codec com uma gama de som mais ampla do que a de uma linha telefónica: a voz ouve-se mais clara.

| Codec | Frequência de amostragem | Ligado por omissão |
| --- | --- | --- |
| **opus** | 48 kHz, estéreo, banda larga | sim |
| **G722** | 16 kHz, banda larga | sim |
| **PCMU** | 8 kHz | sim |
| **PCMA** | 8 kHz | sim |
| **speex** | 16 kHz, banda larga | não |
| **speex** | 8 kHz | não |
| **speex** | 32 kHz, banda larga | não |
| **iLBC** | 8 kHz | não |
| **GSM** | 8 kHz | não |
| **L16** | 44 kHz, estéreo, banda larga | não |
| **L16** | 44 kHz, banda larga | não |

A tabela está pela ordem com que o programa vem.

Os codecs são acordados quando a chamada começa, por isso uma alteração aplica-se a partir da próxima chamada. Se uma chamada se ouvir mal, deixe ligados só os codecs que a sua central usa.

## Chamada em espera {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Definições → Chamadas: chamada em espera, remarcação automática e histórico" />

*O que acontece quando alguém liga enquanto já está numa chamada.* A lista pendente escolhe-o; por omissão é **Tocar a segunda chamada**. Uma chamada de intercomunicador da sua própria central passa sempre, seja qual for a escolha — é assim que uma chamada feita a partir de um painel CTI chega a este telefone.

## Remarcação automática {#autodial}

Quando uma chamada não consegue passar, o seu cartão propõe continuar a marcar até conseguir. Dois cursores definem como:

- **Espera entre tentativas** — 15 segundos por omissão;
- **Desistir ao fim de** — 30 minutos por omissão.

## Histórico {#history}

Um registo de chamadas é uma prova, por isso nada é removido dele a não ser que o diga aqui.

- **Período de retenção** escolhe durante quanto tempo [o registo de chamadas](/interface/contacts-history#history) guarda uma chamada. Por omissão é **Sempre**.
- **Esvaziar o registo de chamadas** apaga todas as chamadas de uma vez, diga o período o que disser. Não pode ser desfeito.
