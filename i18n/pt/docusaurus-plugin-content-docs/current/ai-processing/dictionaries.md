---
title: Dicionários
sidebar_position: 4
description: As suas próprias categorias, etiquetas e sinais — as palavras com que as suas conversas são arrumadas.
---

**Definições → Dicionários** reúne as palavras com que uma conversa pode ser arrumada, etiquetada ou sinalizada. Estas listas são o que é mostrado aos modelos e aquilo entre o qual têm de escolher, por isso uma resposta é sempre algo que pode procurar mais tarde.

<Shot name="13_settings_dictionaries" alt="Definições → Dicionários" />

**Mostrar eliminadas** mostra as entradas que eliminou.

Cada entrada é um nome, um código curto em letra pequena e uma descrição que diz ao modelo quando a escolher. O código é o que é guardado e o que a [API REST](../integration/rest-api.md#taxonomy-and-settings) devolve, por isso mantém-se quando muda o nome da entrada.

## Categorias {#categories}

Do que tratava a conversa; **é escolhida uma por conversa**. O programa começa com quatro:

| Nome | Código | Usada para |
| --- | --- | --- |
| **Vendas** | `sales` | Vender, orçamentar, negociar ou acompanhar uma compra — incluindo um cliente a perguntar quanto custa algo. |
| **Apoio** | `support` | Ajudar alguém com um produto ou serviço que já tem: uma avaria, uma dúvida de utilização, uma reclamação sobre o funcionamento. |
| **Pessoal** | `personal` | Nada de trabalho — uma conversa privada que calhou ser feita nesta linha. |
| **Outro** | `other` | De trabalho, mas nem venda nem apoio: um fornecedor, um colega, uma entrega, um número errado. Escolha esta em vez de adivinhar entre as outras. |

Carregue em **Adicionar** para acrescentar uma categoria sua.

## Etiquetas {#tags}

Marcas que *podem ser todas verdadeiras para a mesma conversa*. Carregue em **Adicionar** para acrescentar uma. A lista começa com entradas como:

| Nome | Código | Usada para |
| --- | --- | --- |
| **Retorno prometido** | `callback` | Alguém nesta chamada prometeu ligar de volta, ou pediu que lhe ligassem de volta. |
| **Reclamação** | `complaint` | O interlocutor mostrou insatisfação, quer tenha sido resolvida quer não. |
| **Encaminhada** | `escalation` | A chamada foi passada a outra pessoa, ou o interlocutor pediu que fosse. |
| **Cliente importante** | `vip` | O interlocutor foi tratado como um cliente importante, ou disse que era. |

## Sinais {#red-flags}

Coisas que merecem atenção, encontradas na conversa com a prova e o momento — por exemplo *Cliente irritado* ou *Risco de perda*. Os sinais são desenhados a vermelho na [janela de gravações](../recordings/recordings-window.md), e cada um tem uma gravidade: baixa, média ou alta.

## Formas de resposta e língua {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Definições → Dicionários: formas de resposta e instruções de língua" />

Mais abaixo no separador estão as instruções a partir das quais as instruções dos modelos são montadas. Estão guardadas aqui para que todas possam usar a mesma redação, e pode mudá-las como qualquer outra entrada.

| Nome | Código | O que diz ao modelo |
| --- | --- | --- |
| **Etiquetas** | `shape-labels` | Responder em JSON com uma lista de códigos e o grau de certeza de cada um, usando só códigos da lista recebida. |
| **Pontuação** | `shape-score` | Responder com uma pontuação, a sua justificação e as palavras em que assenta. |
| **Critérios** | `shape-rubric` | Responder com uma pontuação global e uma pontuação por cada critério. |
| **Sinais** | `shape-flags` | Responder com códigos da lista, cada um com uma gravidade. |
| **Resposta** | `shape-qa` | Responder com a resposta, ou dizer claramente que a conversa não o diz, e as palavras em que a resposta assenta. |
| **JSON** | `shape-json` | Responder só com JSON, na forma pedida acima. |
| **Como foi falado** | `language-as-spoken` | Escrever na língua em que decorreu a conversa. |
| **Como foi falado, nomeado** | `language-as-spoken-named` | O mesmo, nomeando a língua. |
| **Uma língua nomeada** | `language-named` | Escrever na língua que indicar. |

**Adicionar**, no fim da lista, acrescenta uma entrada.

## Valores por omissão {#defaults}

**Repor os valores por omissão** volta a pôr cada dicionário como veio com o programa, na língua atual da interface. Aquilo em que as suas conversas já estão arrumadas não é tocado.
