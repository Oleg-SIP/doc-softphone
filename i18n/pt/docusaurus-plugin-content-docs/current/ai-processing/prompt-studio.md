---
title: Personal Prompt Studio
sidebar_position: 3
description: As instruções que redigem as suas conversas, as regras que as executam e como torná-las suas.
---

O **Personal Prompt Studio** é a parte do AI Softphone que redige as suas conversas à sua maneira. A redação é feita por instruções: o programa traz onze, prontas a usar assim que a transcrição e um modelo de língua estão ligados, e pode mudá-las em linguagem corrente, duplicá-las e acrescentar as suas. Aparecem em **Instruções**, em [Definições → Processamento](processing.md#prompts).

O seu LLM, a sua chave, o seu controlo: ligue o modelo que preferir com a sua própria chave, através de um serviço suportado ou de uma API compatível — ou um modelo instalado dentro da sua organização. Com a [transcrição](transcription.md#your-own-models) também no seu próprio equipamento, tanto o áudio como as transcrições ficam dentro do seu ambiente.

<Shot name="12b_settings_processing_prompts" alt="A lista de instruções em Definições → Processamento" />

## As instruções que vêm com o programa {#the-prompts-that-come-with-the-program}

O AI Softphone 1.1.11 inclui onze prompts para conversas concluídas e quatro assistentes em direto. Estes são os textos fornecidos neste idioma; as versões linguísticas podem diferir.

| Instrução | `code` | Forma | O que escreve |
| --- | --- | --- | --- |
| **Resumo** | `summary` | Prosa | Os pontos principais, as decisões e os próximos passos num parágrafo curto. |
| **Resumo de uma linha** | `super-summary` | Prosa | Um título curto para reconhecer a conversa numa lista. |
| **Tarefas** | `action-items` | Pontos | Quem se comprometeu a fazer o quê, e quando, com as palavras que disse. |
| **Temas** | `topics` | Pontos | Os assuntos tratados, em poucas palavras. |
| **Nomes e números** | `entities` | JSON | Pessoas, empresas, datas, montantes e referências. |
| **Categoria** | `categorise` | Etiquetas | Arruma a conversa numa das suas [categorias](dictionaries.md). |
| **Etiquetas** | `tags` | Etiquetas | Põe-lhe as suas [etiquetas](dictionaries.md), para a encontrar mais tarde. |
| **Sinais** | `red-flags` | Sinais | Problemas, com a prova e o momento da conversa. |
| **Uma pergunta sobre esta chamada** | `qa` | Resposta | Responde a uma pergunta que faz sobre uma conversa, a partir da sua transcrição. |
| **Qualidade comercial** | `sales-quality` | Critérios | Analisa a conversa segundo critérios de venda que pode editar. |
| **Qualidade do apoio** | `support-quality` | Critérios | Avalia até que ponto o problema foi compreendido e tratado. |

As formas são estruturas fixas de resposta, o que permite ao programa guardá-la e pesquisá-la mais tarde: as **Etiquetas** são códigos de uma das suas listas, os **Sinais** são códigos com uma gravidade, os **Critérios** são uma pontuação com uma justificação e uma pontuação por critério, a **Resposta** é uma resposta com as palavras em que assenta. As instruções que indicam a forma a um modelo estão guardadas em [Dicionários](dictionaries.md#instructions).

Os assistentes do [ponto](../interface/prompter.md) também são instruções, executadas sobre cada resposta enquanto decorre uma chamada, e não sobre uma conversa terminada. Estão guardados numa lista própria, em [Assistentes](prompter.md#assistants) de **Definições → Ponto**.

As chamadas feitas no AI Softphone, as reuniões [capturadas](/capture/) a partir do computador e as gravações importadas passam todas pelas mesmas instruções assim que têm uma transcrição.

As tarefas registam o que foi combinado — não enviam mensagens, não marcam visitas nem criam pedidos de suporte por si.

## Torná-lo seu {#making-it-yours}

- Mude o que uma instrução pede, em linguagem corrente: o que procura, o formato da resposta e a língua em que responde.
- Duplique uma instrução para experimentar uma variante.
- Escolha o modelo de cada instrução — na sua própria máquina ou na nuvem.
- Defina a ordem por que as instruções correm, ligue-as e desligue-as e torne-as condicionais — isso faz-se com as [regras](processing.md#rules): por exemplo, uma análise comercial só corre nas chamadas arrumadas como **Vendas**.
- Mantenha as suas próprias categorias, etiquetas e sinais em [Dicionários](dictionaries.md).
- Ponha um teto ao custo com os [limites mensais](processing.md#spending).

As instruções e as regras originais podem ser repostas com **Repor os valores por omissão**, em **Valores por omissão** de [Definições → Processamento](processing.md#defaults).

## Papel do modelo {#role-and-task}

`system` define o comportamento do modelo; `body` descreve a tarefa. A forma e o idioma da resposta são fornecidos separadamente pelas instruções do dicionário.

Uma lista vazia de tarefas ou alertas pode ser correta. Não se devem inventar responsáveis nem datas. As respostas às perguntas devem basear-se apenas na transcrição.

[Formatos de resposta](dictionaries.md#response-formats)

## Marcadores de substituição {#placeholders}

Um elemento do prompt substituído por dados da conversa.

| Marcador de substituição | Significado |
| --- | --- |
| `{{transcript}}` | Transcrição, uma fala por linha, com tempos em milissegundos |
| `{{duration}}` | Duração da conversa |
| `{{direction}}` | Chamada recebida ou efetuada |
| `{{party}}` | Nome do contacto ou número |
| `{{language}}` | Idioma da resposta |
| `{{question}}` | Pergunta do utilizador |
| `{{categories}}` | Dicionário de categorias |
| `{{tags}}` | Dicionário de etiquetas |
| `{{red_flags}}` | Dicionário de alertas |
| `{{artifact:summary}}` | Resumo já produzido |
| `{{conversation}}` | Contexto acumulado pelo assistente em direto |
| `{{reply}}` | Última fala do interlocutor; apenas no assistente em direto |

Execute `summary` antes de `super-summary`, que usa `{{artifact:summary}}`. Execute `categorise` antes da avaliação: `sales-quality` exige `sales`, e `support-quality` exige `support`.

[Assistentes incluídos](prompter.md#assistant-templates)

## Textos dos prompts predefinidos {#standard-templates}

O AI Softphone 1.1.11 inclui onze prompts para conversas concluídas e quatro assistentes em direto. Estes são os textos fornecidos neste idioma; as versões linguísticas podem diferir.

### Resumo (`summary`) {#summary}

**Forma da resposta:** `plain`.

**Papel (`system`)**

```text
Você lê transcrições de chamadas telefónicas e escreve resumos curtos e factuais delas. Nunca adivinha nada que não tenha sido dito, e nunca acrescenta conselhos.
```

**Tarefa (`body`)**

```text
Resuma esta chamada telefónica num parágrafo curto: do que se tratava, o que foi decidido e o que acontece a seguir. Durou {{duration}} e foi {{direction}}, com {{party}}.

{{transcript}}
```

### Resumo de uma linha (`super-summary`) {#super-summary}

**Forma da resposta:** `plain`.

**Papel (`system`)**

```text
Você lê transcrições de chamadas telefónicas e reduz cada uma a uma só expressão. Nunca adivinha e nunca acrescenta conselhos.
```

**Tarefa (`body`)**

```text
Reduza esta chamada telefónica a uma expressão de doze palavras no máximo — do género que iria numa tabela ao lado do nome de quem ligou. Sem ponto final, sem aspas.

{{artifact:summary}}

{{transcript}}
```

### Tarefas (`action-items`) {#action-items}

**Forma da resposta:** `list`.

**Papel (`system`)**

```text
Você lê transcrições de chamadas telefónicas e enumera o que alguém se comprometeu a fazer. Só enumera o que foi realmente dito; nunca inventa uma tarefa, um responsável ou uma data.
```

**Tarefa (`body`)**

```text
Enumere o que qualquer pessoa nesta chamada se comprometeu a fazer. Diga quem o deve fazer onde isso foi dito, e para quando onde isso foi dito. Se ninguém se comprometeu a nada, responda com uma lista vazia.

{{transcript}}
```

### Temas (`topics`) {#topics}

**Forma da resposta:** `list`.

**Papel (`system`)**

```text
Você lê transcrições de chamadas telefónicas e nomeia do que tratavam.
```

**Tarefa (`body`)**

```text
Enumere os assuntos que esta chamada realmente cobriu, seis no máximo, cada um em poucas palavras. Deixe o responsável e a data vazios — aqui não significam nada.

{{transcript}}
```

### Nomes e números (`entities`) {#entities}

**Forma da resposta:** `json`.

**Papel (`system`)**

```text
Você lê transcrições de chamadas telefónicas e extrai o que nelas foi nomeado. Nunca adivinha uma grafia e nunca acrescenta o que não foi dito.
```

**Tarefa (`body`)**

```text
Extraia o que foi nomeado nesta chamada, como JSON exatamente desta forma:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Cada um é uma lista de cadeias, escritas tal como foram ditas. Deixe uma lista vazia em vez de adivinhar.

{{transcript}}
```

### Categoria (`categorise`) {#categorise}

**Forma da resposta:** `labels`.

**Papel (`system`)**

```text
Você arruma chamadas telefónicas numa das categorias que lhe são dadas. Escolhe da lista e de mais nada.
```

**Tarefa (`body`)**

```text
Arrume esta chamada em exatamente uma destas categorias. Responda com o seu código.

{{categories}}
{{transcript}}
```

### Etiquetas (`tags`) {#tags}

**Forma da resposta:** `labels`.

**Papel (`system`)**

```text
Você etiqueta chamadas telefónicas com as etiquetas que lhe são dadas. Escolhe da lista e de mais nada, e deixa uma etiqueta de fora em vez de a esticar.
```

**Tarefa (`body`)**

```text
Quais destas são verdadeiras nesta chamada? Responda com os seus códigos, ou com uma lista vazia se nenhuma for.

{{tags}}
{{transcript}}
```

### Sinais (`red-flags`) {#red-flags}

**Forma da resposta:** `flags`.

**Papel (`system`)**

```text
Você lê transcrições de chamadas telefónicas e só levanta o que lhe foi dado a procurar. Cita as palavras em que se baseia cada um, e não levanta nada que não possa citar.
```

**Tarefa (`body`)**

```text
Levante os que esta chamada mostrar. Para cada um, cite as palavras em que assenta e dê o momento em milissegundos em que foram ditas. Não levante nada em vez de esticar uma definição.

{{red_flags}}
{{transcript}}
```

### Uma pergunta sobre esta chamada (`qa`) {#qa}

**Forma da resposta:** `qa`.

**Papel (`system`)**

```text
Você responde a perguntas sobre uma chamada telefónica, a partir da sua transcrição e de mais nada. Onde a chamada não o diga, di-lo claramente em vez de adivinhar.
```

**Tarefa (`body`)**

```text
{{question}}

{{transcript}}
```

### Qualidade comercial (`sales-quality`) {#sales-quality}

**Forma da resposta:** `rubric`.

**Papel (`system`)**

```text
Você avalia como um comercial conduziu uma chamada telefónica. Só julga o que a transcrição mostra, nunca presume o que aconteceu antes ou depois, e é tão exigente com uma chamada que correu bem como com outra que não.
```

**Tarefa (`body`)**

```text
Julgue o nosso lado desta chamada — a pessoa ao telefone — segundo estes critérios e nenhuns outros:
- saudação: identificou-se a si e à empresa?
- descoberta: percebeu o que o cliente queria realmente?
- objeções: respondeu ao que o cliente levantava, em vez de falar ao lado?
- valor: disse o que o cliente ganha, e não apenas quanto custa?
- passo seguinte: a chamada terminou com algo concreto combinado?

{{transcript}}
```

### Qualidade do apoio (`support-quality`) {#support-quality}

**Forma da resposta:** `rubric`.

**Papel (`system`)**

```text
Você avalia como um agente de apoio conduziu uma chamada telefónica. Só julga o que a transcrição mostra, e pesa mais se o problema do cliente foi realmente tratado do que quão agradável foi a conversa.
```

**Tarefa (`body`)**

```text
Julgue o nosso lado desta chamada — a pessoa ao telefone — segundo estes critérios e nenhuns outros:
- saudação: identificou-se e confirmou com quem falava?
- compreensão: estabeleceu o que estava realmente mal antes de responder?
- resolução: o problema foi resolvido, ou foi dado um passo seguinte concreto?
- tom: manteve-se calma e correta, sobretudo onde o cliente não estava?
- fecho: verificou que o cliente ficava satisfeito antes de terminar?

{{transcript}}
```
