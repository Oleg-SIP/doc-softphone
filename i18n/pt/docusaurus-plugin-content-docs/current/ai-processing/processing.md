---
title: Processamento
sidebar_position: 2
description: O processamento automático das conversas, os limites de gastos mensais, os modelos de língua, as instruções e as regras que as executam.
---

**Definições → Processamento** decide o que acontece a uma conversa depois de gravada, que modelo faz o trabalho e quanto pode custar.

<Shot name="12_settings_processing" alt="Definições → Processamento" />

## Processar as conversas automaticamente {#process-conversations-automatically}

- **Desligado:** nada acontece até o pedir na [janela de gravações](../interface/recordings.md).
- **Ligado:** as [regras](#rules) abaixo correm sozinhas. É isto que transforma uma conversa num resumo, numa categoria e em tudo o resto sem que ninguém carregue em nada. Um modelo na nuvem cobra cada um desses passos.

Por baixo da caixa, o programa mostra o que foi gasto este mês e em quantos pedidos, por exemplo *Este mês: 40.492 tokens, em 84 pedidos, sem custo.*

## Limites {#limits}

| Campo | Significado |
| --- | --- |
| **Limite de dinheiro, mensal** | O máximo que os modelos podem custar num mês. |
| **Limite de tokens, mensal** | O máximo de tokens que podem usar num mês. |

Há dois limites porque um mês pode ser contado em duas coisas. Ambos estão vazios até os preencher. Quando um deles é atingido, as regras automáticas param até o mês mudar. **O que pede você mesmo nunca é parado.**

## Modelos de língua {#language-models}

Os modelos que leem uma transcrição e escrevem sobre ela. Carregue em **Adicionar** para adicionar um. Cada um aparece com o seu nome e, por baixo, o identificador do modelo e o endereço do seu serviço, por exemplo `qwen3-32b · http://llm.local:8000/v1`. O marcado como **por omissão** é o usado por omissão. Um botão no formulário de um modelo verifica que o serviço responde mesmo antes de confiar nele.

- Um modelo **na sua própria máquina** mantém cada conversa dentro do edifício e não custa nada.
- Um modelo na nuvem — OpenAI, Claude, Mistral, DeepSeek, Groq e outros — é cobrado por utilização. O programa mostra o preço de cada chamada em tokens e em dinheiro.

## Instruções {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Definições → Processamento: as instruções" />

*O que é perguntado aos modelos.* Todas as instruções vieram com o programa e todas são suas para mudar — e para repor. Cada uma aparece com o seu nome e, por baixo, o que escreve e em que forma. A forma — **Resposta**, **Pontos**, **Etiquetas**, **JSON**, **Prosa**, **Sinais** ou **Critérios** — decide como a resposta é guardada e mostrada. As instruções estão descritas em [Personal Prompt Studio](prompt-studio.md). **Adicionar** cria uma instrução sua.

## Regras {#rules}

<Shot name="12c_settings_processing_rules" alt="Definições → Processamento: as regras" />

*O que corre sozinho, por esta ordem. Cada uma dispara no máximo uma vez por conversa.* Uma regra é uma linha com uma caixa que a liga ou desliga, o seu nome e, por baixo, o que faz. **▲** e **▼** mudam a ordem. O programa traz oito:

| Regra | Faz | Quando |
| --- | --- | --- |
| **Transcrever todas as conversas** | Transcreve-a. | sempre |
| **Resumi-la** | Pede a um modelo: **Resumo**. | sempre |
| **Reduzi-la a uma linha** | Pede a um modelo: **Resumo de uma linha**. | sempre |
| **Arrumá-la numa categoria** | Pede a um modelo: **Categoria**. | sempre |
| **Etiquetá-la** | Pede a um modelo: **Etiquetas**. | sempre |
| **Levantar o que merecer um olhar** | Pede a um modelo: **Sinais**. | sempre |
| **Avaliá-la, se foi uma venda** | Pede a um modelo: **Qualidade comercial**. | só se a categoria for **Vendas** |
| **Avaliá-la, se foi apoio** | Pede a um modelo: **Qualidade do apoio**. | só se a categoria for **Apoio** |

A ordem importa: as duas últimas regras precisam da categoria que a regra anterior definiu. **Adicionar** cria uma regra sua.

## Valores por omissão {#defaults}

**Repor os valores por omissão** volta a pôr as instruções e as regras como vieram com o programa, na língua atual da interface. Os seus modelos de língua não são tocados.

As instruções e as regras que vieram com o programa ficam na língua em que estavam quando muda a língua da interface; **Repor os valores por omissão** passa-as para a nova. Cada instrução fica então marcada como *mudada* à direita.
