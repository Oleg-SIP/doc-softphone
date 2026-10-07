---
title: Janela de gravações
sidebar_position: 2
description: A biblioteca de conversas — filtrar, reproduzir, ler a transcrição e a redação.
---

**Gravações** é onde vive cada conversa, seja qual for a forma como chegou: uma chamada, uma reunião capturada de outra aplicação ou um ficheiro importado. Cada uma aparece com a sua redação já feita.

<Shot name="01_recordings" alt="O separador Gravações: a lista de conversas" />

## Encontrar uma conversa {#finding-a-conversation}

A barra do topo tem quatro filtros, um campo de pesquisa e um menu:

| Controlo | Restringe a lista por |
| --- | --- |
| **Tipo** | a forma como a conversa chegou |
| **Período** | a data |
| **Categoria** | a categoria em que foi arrumada — veja [Dicionários](../ai-processing/dictionaries.md) |
| **Marca** | as marcas que tem |
| **Procurar** | o que nela foi dito — a pesquisa percorre as transcrições de tudo o que gravou |

O botão **⋮** à direita da barra abre mais ações para a lista: **Importar de ficheiros**, **Exportar para CSV** e **Abrir num navegador**.

## A lista {#the-list}

Cada linha mostra:

- um ícone para o tipo de conversa: um auscultador para uma chamada, uma janela para uma reunião noutra aplicação;
- um título — o nome do interlocutor, ou o número, ou **Outra aplicação** para uma reunião capturada — e por baixo a data e o resumo de uma linha;
- à direita, a categoria com a sua pontuação (um número, por exemplo *Apoio · 2*), depois as etiquetas e, no fim, a duração.

As etiquetas desenhadas a vermelho são **sinais** (na imagem *Cliente irritado* e *Risco de perda*); as outras são etiquetas normais (*Reclamação*, *Retorno prometido*). Uma conversa sem resumo e sem categoria ainda não foi redigida — a primeira linha da imagem.

## O leitor {#the-player}

Selecione uma linha para abrir o leitor por baixo da lista.

<Shot name="02_recording_details" alt="Uma gravação selecionada: o leitor e a transcrição por baixo da lista" />

- As duas formas de onda são os dois canais da gravação, um por cada lado da conversa. A barra por baixo percorre uma gravação longa.
- **▶** reproduz e pausa; os tempos à esquerda são a posição e a duração total.
- **1×** muda a velocidade; **Ambos** escolhe que canal ouve.
- O botão da disquete guarda o áudio, **×** fecha o leitor.

## A transcrição e a redação {#the-transcript-and-the-write-up}

Por baixo do leitor está a transcrição, com uma linha por fala, o momento em que foi dita e o nome de quem fala (**Você**, o nome do interlocutor ou, numa reunião capturada, **Outra aplicação**). Clique numa linha para ouvir esse momento; a linha por baixo da cabeça de leitura fica destacada e a palavra que está a ser dita fica marcada dentro dela.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="A transcrição ao lado do áudio" />

A lista pendente por cima da transcrição escolhe o que mostrar — a transcrição feita por um dos seus [reconhecedores](../ai-processing/transcription.md) (uma estrela marca a transcrição principal da gravação), ou uma redação como **Ações**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="As ações que a conversa deixou" />

Os quatro ícones à direita da lista pendente:

| Ícone | Faz |
| --- | --- |
| Faíscas | Faz o modelo redigir já o elemento selecionado. |
| Duas folhas | Copia-o. |
| Disquete | Guarda-o num ficheiro. |
| Caixote do lixo | Elimina-o. |

Pode exportar uma transcrição como texto simples ou como legendas.

A redação é feita pelas [instruções](/ai-processing/prompt-studio) e pelos modelos que configurou em [Processamento](../ai-processing/processing.md), através de [regras](../ai-processing/processing.md#rules) que correm sozinhas ou quando pede. Durante quanto tempo se guardam as gravações define-se em [Gravações](../recordings.md#retention).

## Uma gravação que já tem {#a-recording-you-already-have}

Uma gravação feita noutro sítio — num telemóvel, num gravador ou noutro sistema — pode ser adicionada com **⋮ → Importar de ficheiros**. É arquivada exatamente como uma chamada marcada: transcrita, redigida e encontrada pela mesma pesquisa.

## Eliminar uma gravação {#deleting-a-recording}

Quando uma gravação é eliminada, vai com ela tudo o que dela foi feito: a transcrição e a redação.
