---
title: Personal Prompt Studio
sidebar_position: 3
description: As instruções que redigem as suas conversas, as regras que as executam e como torná-las suas.
---

O **Personal Prompt Studio** é a parte do AI Softphone que redige as suas conversas à sua maneira. A redação é feita por instruções: o programa traz onze, prontas a usar assim que a transcrição e um modelo de língua estão ligados, e pode mudá-las em linguagem corrente, duplicá-las e acrescentar as suas. Aparecem em **Instruções**, em [Definições → Processamento](processing.md#prompts).

O seu LLM, a sua chave, o seu controlo: ligue o modelo que preferir com a sua própria chave, através de um serviço suportado ou de uma API compatível — ou um modelo instalado dentro da sua organização. Com a [transcrição](transcription.md#your-own-models) também no seu próprio equipamento, tanto o áudio como as transcrições ficam dentro do seu ambiente.

<Shot name="12b_settings_processing_prompts" alt="A lista de instruções em Definições → Processamento" />

## As instruções que vêm com o programa {#the-prompts-that-come-with-the-program}

A segunda coluna é o que a lista mostra por baixo do nome da instrução: o que escreve e em que forma.

| Instrução | Forma | O que escreve |
| --- | --- | --- |
| **Resumo** | Prosa | Os pontos principais, as decisões e os próximos passos num parágrafo curto. |
| **Resumo de uma linha** | Prosa | Um título curto para reconhecer a conversa numa lista. |
| **Tarefas** | Pontos | Quem se comprometeu a fazer o quê, e quando, com as palavras que disse. |
| **Temas** | Pontos | Os assuntos tratados, em poucas palavras. |
| **Nomes e números** | JSON | Pessoas, empresas, datas, montantes e referências. |
| **Categoria** | Etiquetas | Arruma a conversa numa das suas [categorias](dictionaries.md). |
| **Etiquetas** | Etiquetas | Põe-lhe as suas [etiquetas](dictionaries.md), para a encontrar mais tarde. |
| **Sinais** | Sinais | Problemas, com a prova e o momento da conversa. |
| **Uma pergunta sobre esta chamada** | Resposta | Responde a uma pergunta que faz sobre uma conversa, a partir da sua transcrição. |
| **Qualidade comercial** | Critérios | Analisa a conversa segundo critérios de venda que pode editar. |
| **Qualidade do apoio** | Critérios | Avalia até que ponto o problema foi compreendido e tratado. |

As formas são estruturas fixas de resposta, o que permite ao programa guardá-la e pesquisá-la mais tarde: as **Etiquetas** são códigos de uma das suas listas, os **Sinais** são códigos com uma gravidade, os **Critérios** são uma pontuação com uma justificação e uma pontuação por critério, a **Resposta** é uma resposta com as palavras em que assenta. As instruções que indicam a forma a um modelo estão guardadas em [Dicionários](dictionaries.md#answer-shapes-and-language).

As chamadas feitas no AI Softphone, as reuniões [capturadas](/capture/) a partir do computador e as gravações importadas passam todas pelas mesmas instruções assim que têm uma transcrição.

As tarefas registam o que foi combinado — não enviam mensagens, não marcam visitas nem criam pedidos de suporte por si.

## Torná-lo seu {#making-it-yours}

- Mude o que uma instrução pede, em linguagem corrente: o que procura, o formato da resposta e a língua em que responde.
- Duplique uma instrução para experimentar uma variante.
- Escolha o modelo de cada instrução — na sua própria máquina ou na nuvem.
- Defina a ordem por que as instruções correm, ligue-as e desligue-as e torne-as condicionais — isso faz-se com as [regras](processing.md#rules): por exemplo, uma análise comercial só corre nas chamadas arrumadas como **Vendas**.
- Mantenha as suas próprias categorias, etiquetas e sinais em [Dicionários](dictionaries.md).
- Ponha um teto ao custo com os [limites mensais](processing.md#limits).

As instruções e as regras originais podem ser repostas com **Repor os valores por omissão**, em **Valores por omissão** de [Definições → Processamento](processing.md#defaults).
