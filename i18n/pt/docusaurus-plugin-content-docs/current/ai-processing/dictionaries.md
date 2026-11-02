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
| **Vendas** | `sales` | Vender, orçamentar, negociar ou dar seguimento a uma compra — incluindo um cliente a perguntar quanto custa alguma coisa. |
| **Apoio** | `support` | Ajudar alguém com um produto ou serviço que já tem: uma avaria, uma dúvida de utilização, uma queixa sobre como funciona. |
| **Pessoal** | `personal` | Nada de trabalho — uma conversa privada que calhou passar por esta linha. |
| **Outro** | `other` | De trabalho, mas nem venda nem apoio: um fornecedor, um colega, uma entrega, um número errado. Escolha isto em vez de adivinhar entre os outros. |

Carregue em **Adicionar** para acrescentar uma categoria sua.

## Etiquetas {#tags}

Marcas que *podem ser todas verdadeiras para a mesma conversa*. Carregue em **Adicionar** para acrescentar uma. A lista começa com entradas como:

| Nome | Código | Usada para |
| --- | --- | --- |
| **Retorno prometido** | `callback` | Alguém nesta chamada prometeu ligar de volta, ou pediu que lhe ligassem. |
| **Reclamação** | `complaint` | A outra parte manifestou insatisfação, tenha ela sido resolvida ou não. |
| **Encaminhada** | `escalation` | A chamada foi passada a outra pessoa, ou a outra parte pediu que fosse. |
| **Cliente importante** | `vip` | A outra parte foi tratada como uma conta importante, ou disse sê-lo. |

## Sinais {#red-flags}

Coisas que merecem atenção, encontradas na conversa com a prova e o momento — por exemplo *Cliente irritado* ou *Risco de perda*. Os sinais são desenhados a vermelho na [janela de gravações](../interface/recordings.md), e cada um tem uma gravidade: baixa, média ou alta.

| Nome | Código | `severity` | Usada para |
| --- | --- | --- | --- |
| **Cliente irritado** | `angry-customer` | `high` | A outra parte estava audivelmente irritada, ofensiva, ou ameaçou sair. |
| **Risco de perda** | `churn-risk` | `high` | Falou-se em cancelar, não renovar ou mudar para outro, por mais calmamente que fosse. |
| **Compromisso assumido** | `promise-made` | `medium` | O nosso lado comprometeu-se com algo concreto — uma data, um preço, uma correção, um reembolso. |
| **Dados sensíveis** | `sensitive-data` | `high` | Foi lido em voz alta um número de cartão, uma palavra-passe, um número de documento ou qualquer outra coisa que não deveria estar numa gravação. |
| **Concorrente** | `competitor` | `low` | A outra parte nomeou outra pessoa que oferece o mesmo, ou comparou-nos com ela. |

## Instruções {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Definições → Dicionários: formas de resposta e instruções de língua" />

*O que é acrescentado a cada instrução sobre a forma da resposta e a língua em que a escrever.* Estão guardadas aqui para que todas as instruções possam usar a mesma redação, e pode mudá-las como qualquer outra entrada — ou escrever as suas, como *responde de forma breve* ou *nunca cites um preço*, e marcá-las em **Enviar também** em qualquer instrução.

| Nome | Código | O que diz ao modelo |
| --- | --- | --- |
| **Prosa** | `shape-plain` | Responder em prosa simples, sem JSON, listas nem títulos. |
| **Pontos** | `shape-list` | Responder com uma lista de coisas a fazer, cada uma com quem e quando. |
| **Etiquetas** | `shape-labels` | Responder em JSON com uma lista de códigos e o grau de certeza de cada um, usando só códigos da lista recebida. |
| **Pontuação** | `shape-score` | Responder com uma pontuação, a sua justificação e as palavras em que assenta. |
| **Critérios** | `shape-rubric` | Responder com uma pontuação global e uma pontuação por cada critério. |
| **Sinais** | `shape-flags` | Responder com códigos da lista, cada um com uma gravidade. |
| **Resposta** | `shape-qa` | Responder com a resposta, ou dizer claramente que a conversa não o diz, e as palavras em que a resposta assenta. |
| **JSON** | `shape-json` | Responder só com JSON, na forma pedida acima. |
| **Como foi falado** | `language-as-spoken` | Escrever na língua em que decorreu a conversa. |
| **Como foi falado, nomeado** | `language-as-spoken-named` | O mesmo, nomeando a língua. |
| **Uma língua nomeada** | `language-named` | Escrever na língua que indicar. |

**Adicionar**, no topo da lista, acrescenta uma entrada.

## Valores por omissão {#defaults}

**Repor os valores por omissão** volta a pôr cada dicionário como veio com o programa, na língua atual da interface. Aquilo em que as suas conversas já estão arrumadas não é tocado.

## Formatos de resposta {#response-formats}

Estes blocos reproduzem as instruções incluídas. Descrevem formatos de resposta; as alternativas são uma notação, não exemplos JSON executáveis.

### Prosa (`shape-plain`) {#shape-plain}

```text
Responda em prosa. Não use JSON, listas nem títulos.
```

### Pontos (`shape-list`) {#shape-list}

```text
Responda apenas com JSON, exatamente desta forma:
{"items": [{"text": "o que há a fazer", "owner": "quem, ou vazio", "due": "quando, ou vazio"}]}
Devolva um array vazio quando não houver nada a enumerar. Não escreva nada fora do JSON.
```

### Etiquetas (`shape-labels`) {#shape-labels}

```text
Responda apenas com JSON, exatamente desta forma:
{"labels": [{"code": "um código da lista que lhe foi dada", "confidence": 0.0}]}
Use apenas códigos da lista. Devolva um array vazio quando nenhum servir.
Não invente um código e não escreva nada fora do JSON.
```

### Pontuação (`shape-score`) {#shape-score}

```text
Responda apenas com JSON, exatamente desta forma:
{"score": 3, "rationale": "porquê este número e não um mais alto",
 "evidence": [{"at_ms": 0, "quote": "as palavras em que se baseia"}]}
A pontuação é um número inteiro de 1 a 5. Não escreva nada fora do JSON.
```

### Critérios (`shape-rubric`) {#shape-rubric}

```text
Responda apenas com JSON, exatamente desta forma:
{"overall": 3, "rationale": "porquê este número e não um mais alto",
 "criteria": [{"name": "o critério tal como lhe foi dado",
               "verdict": "pass" ou "weak" ou "fail" ou "n/a",
               "note": "uma frase"}]}
Julgue cada critério que lhe foi dado e nenhum outro. A nota global é um número
inteiro de 1 a 5. Não escreva nada fora do JSON.
```

### Sinais (`shape-flags`) {#shape-flags}

```text
Responda apenas com JSON, exatamente desta forma:
{"flags": [{"code": "um código da lista que lhe foi dada",
            "severity": "low" ou "medium" ou "high",
            "evidence": "as palavras em que se baseia",
            "at_ms": 0}]}
Use apenas códigos da lista, e levante cada um no máximo uma vez. Devolva um array
vazio quando nada se aplicar. Não escreva nada fora do JSON.
```

### Resposta (`shape-qa`) {#shape-qa}

```text
Responda apenas com JSON, exatamente desta forma:
{"answer": "a sua resposta, ou diga claramente que a conversa não o diz",
 "citations": [{"at_ms": 0, "quote": "as palavras em que a sua resposta assenta"}]}
Não responda a partir de nada que não seja a conversa. Não escreva nada fora
do JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Responda apenas com JSON, na forma pedida acima. Não escreva nada fora do JSON.
```

### Como foi falado (`language-as-spoken`) {#language-as-spoken}

```text
Escreva a sua resposta na mesma língua em que decorreu a conversa.
```

### Como foi falado, nomeado (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Escreva a sua resposta na mesma língua em que decorreu a conversa, que é {language}.
```

### Uma língua nomeada (`language-named`) {#language-named}

```text
Escreva a sua resposta nesta língua: {language}.
```
