---
title: Janela de gravações
sidebar_position: 2
description: "\"A biblioteca de todas as conversas — uma chamada, um ficheiro importado ou uma reunião capturada do Zoom, do Teams ou do Meet: filtros, o leitor, a transcrição que pode reproduzir a partir de qualquer linha e as redações.\""
---

**Gravações** é onde vive cada conversa, seja qual for a forma como chegou: uma chamada feita ou recebida no telefone, um ficheiro de áudio que importou ou uma reunião capturada do Zoom, do Teams, do Meet ou de qualquer outra aplicação. Todas ficam numa só lista e todas abrem da mesma maneira: o leitor, a transcrição e tudo o que o modelo de língua redigiu sobre ela. Carregue em **Gravações**, em baixo à esquerda na [janela principal](main-window.md), para a abrir.

<Shot name="01_recordings" alt="O separador Gravações: uma reunião do Zoom capturada, um ficheiro importado e chamadas numa só lista" />

## Três tipos de gravação {#three-kinds-of-recording}

O ícone à esquerda de uma linha diz como a conversa chegou.

| Ícone | Conversa | O seu nome na lista | Como chega aqui |
| --- | --- | --- | --- |
| Auscultador com uma seta | Uma chamada feita ou recebida neste telefone. A seta aponta para dentro numa chamada a entrar e para fora numa chamada a sair. | O nome do contacto, ou o número | Gravada como definido em [Gravações](../recordings.md) |
| Seta para dentro de uma barra | Um ficheiro importado de outro sítio: um telemóvel, um gravador ou outro sistema | O nome do ficheiro | **⋮ → Importar de ficheiros**; veja [abaixo](#a-recording-you-already-have) |
| Janela | Uma reunião realizada noutra aplicação | O nome que lhe deu, ou **Outra aplicação** | [Captura](../capture/capture.md) |

Na imagem, as três primeiras linhas são uma de cada tipo: uma reunião do Zoom, um ficheiro importado de uma chamada de apoio de um banco e uma chamada recebida na linha **305 Apoio**. Seja qual for a origem, todas são transcritas, redigidas e pesquisadas da mesma maneira.

## Encontrar uma conversa {#finding-a-conversation}

A barra do topo tem cinco filtros, um campo de pesquisa e um menu:

| Controlo | Restringe a lista por |
| --- | --- |
| **Tipo** | a forma como a conversa chegou: chamadas a entrar ou a sair, **Importadas**, **Capturadas** |
| **Período** | a data: **Hoje**, **Ontem**, **Últimos 7 dias** ou **Escolher datas…** |
| **Categoria** | a categoria em que foi arrumada — veja [Dicionários](../ai-processing/dictionaries.md) |
| **Marca** | as etiquetas e os sinais que tem |
| **Reconhecedor** | o [reconhecedor](../ai-processing/transcription.md) que fez a sua transcrição |
| **Procurar** | o que nela foi dito — a pesquisa percorre as transcrições de tudo o que gravou |

<Shot name="39_more_menu" alt="O menu ⋮ da lista: Importar de ficheiros, Exportar para CSV, Abrir num navegador" />

O botão **⋮** à direita da barra abre mais ações para a lista:

| Item | Faz |
| --- | --- |
| **Importar de ficheiros** | Traz gravações que já tem. Veja [Uma gravação que já tem](#a-recording-you-already-have). |
| **Exportar para CSV** | Guarda a lista como uma folha de cálculo: quando, o interlocutor e o número, o sentido, a duração, a categoria, as etiquetas, os sinais e o resumo de uma linha de cada conversa. |
| **Abrir num navegador** | Abre a lista no navegador, como a página que a [API REST local](../integration/rest-api.md) serve em `/ui`. |

## A lista {#the-list}

Cada linha mostra:

- o ícone do tipo de conversa;
- o nome — o outro interlocutor, o número, o ficheiro ou a reunião — e por baixo a data e o resumo de uma linha;
- à direita, a categoria com a sua pontuação (um número, por exemplo *Apoio · 4*), depois os sinais e as etiquetas e, no fim, a duração.

Os sinais são desenhados a vermelho (na imagem *Dados sensíveis*, *Compromisso assumido*, *Cliente irritado*); as etiquetas são normais (*Retorno prometido*). Uma conversa sem resumo e sem categoria ainda não foi redigida — a linha **Ana Rodrigues** na imagem.

<Shot name="40_row_actions" alt="Uma linha com o ponteiro por cima: os botões do alfinete, do lápis e do caixote do lixo" />

Aponte para uma linha para mostrar três botões à sua direita:

| Botão | Faz |
| --- | --- |
| Alfinete | **Guardar esta**: uma gravação guardada nunca é eliminada pelos limites de [Retenção](../recordings.md#retention). Carregue outra vez para deixar de a guardar. |
| Lápis | **Mudar o nome**: dá à conversa um nome seu. Uma chamada mantém ao lado o nome do interlocutor; uma reunião ou um ficheiro tem, de outro modo, o nome da aplicação ou do ficheiro de onde veio. |
| Caixote do lixo | **Eliminar esta gravação**, depois de perguntar. O áudio também vai, e não se pode desfazer. |

## O leitor {#the-player}

Selecione uma linha para abrir o leitor por baixo da lista.

- As duas formas de onda são os dois canais da gravação: a de cima é você, a de baixo é o outro lado. Um ficheiro importado costuma ter uma só pista misturada, por isso as duas linhas mostram o mesmo som.
- **▶** reproduz e pausa; os tempos à esquerda são a posição e a duração total. A barra por baixo das formas de onda percorre uma gravação longa.
- **1×** muda a velocidade; **Ambos** escolhe a voz que ouve: as duas, só a sua (**Eu**) ou só a do outro lado (**Eles**).
- O botão da disquete guarda uma cópia da gravação, **×** fecha a conversa.

A linha entre a lista e o leitor pode ser arrastada para cima, para dar mais espaço à transcrição, como nas imagens abaixo.

## A transcrição {#the-transcript}

Por baixo do leitor está a transcrição: uma linha por fala, com o momento em que foi dita e quem a disse.

<Shot name="26_recording_call" alt="Uma chamada na linha 305 Apoio: o leitor e a transcrição, com a linha dos 0:12 destacada" />

| Tipo de gravação | Os interlocutores aparecem como |
| --- | --- |
| Uma chamada | **Você** e o nome do outro interlocutor, ou o número |
| Uma reunião capturada | **Você** e o nome da gravação, para todos os outros |
| Um ficheiro importado | **Todos · speaker 1**, **Todos · speaker 2**… — o reconhecedor distingue as vozes |

**Clique numa linha para ir para esse momento**: o leitor desloca-se para lá, a linha fica destacada e a palavra que está a ser dita fica marcada dentro dela — na imagem a linha dos **0:12**, com a palavra *Sim*. Carregue em **▶** para ouvir a partir daí. Enquanto reproduz, o destaque acompanha a fala, e assim pode ler e ouvir ao mesmo tempo e voltar a qualquer frase.

O tempo à esquerda de cada linha é também aquilo para que uma redação aponta: um sinal, uma resposta ou uma citação traz o momento das palavras em que se apoia.

## Transcrição ou redação: a lista pendente {#transcript-or-write-up-the-drop-down}

A lista pendente por cima da transcrição escolhe o que mostrar nesse lugar: uma transcrição ou uma das redações feitas pelo modelo de língua.

<Shot name="27_writeup_menu" alt="A lista pendente aberta: a transcrição da OpenAI e as redações da chamada" />

- As linhas com um **microfone** são transcrições, uma por cada [reconhecedor](../ai-processing/transcription.md) que transcreveu a gravação. A estrela marca a principal. Aponte para uma para ver o reconhecedor, o seu modelo e a língua.
- As linhas com **faíscas** são redações, feitas pelas [instruções](/ai-processing/prompt-studio) de [Processamento](../ai-processing/processing.md).

Uma gravação pode ter transcrições de vários reconhecedores, para os comparar: a reunião do Zoom abaixo foi transcrita pelo X.ai e pelo Deepgram.

<Shot name="36_zoom_menu" alt="Uma reunião capturada com duas transcrições, Deepgram e X.ai, e as suas redações" />

As redações aparecem com nomes curtos:

| Na lista pendente | Feita pela instrução | O que mostra |
| --- | --- | --- |
| **Resumo** | Resumo | Os pontos principais, as decisões e os passos seguintes num parágrafo curto. |
| **Em poucas palavras** | Resumo de uma linha | Uma frase; a mesma linha aparece por baixo do nome na lista. |
| **Ações** | Tarefas | Quem se comprometeu a fazer o quê, e até quando. |
| **Temas** | Temas | Os assuntos que surgiram. |
| **Mencionados** | Nomes e números | Pessoas, empresas, datas, valores e referências. |
| a própria pergunta | Uma pergunta sobre esta chamada | A resposta a uma pergunta que fez, com as palavras em que se apoia. |
| **Qualidade** | Qualidade comercial, Qualidade do apoio | Uma pontuação global e um veredicto sobre cada critério. |
| **Sinais** | Sinais | O que pede atenção, com a prova e o momento. |
| **Etiquetas**, **Categoria** | Etiquetas, Categoria | As marcas com que a conversa foi arrumada. |

## As redações, uma a uma {#the-write-ups-one-by-one}

As imagens abaixo são todas da mesma chamada, na linha **305 Apoio**, em que uma cliente pergunta quando renovam as suas apólices.

**Resumo** — a conversa em poucas frases.

<Shot name="28_summary" alt="O Resumo da chamada" />

**Em poucas palavras** — uma linha, curta o bastante para reconhecer a conversa na lista.

<Shot name="29_nutshell" alt="Em poucas palavras: o resumo de uma linha da chamada" />

**Ações** — cada tarefa com quem a deve fazer e quando, à direita.

<Shot name="30_actions" alt="Ações: duas tarefas para Você, uma delas para amanhã de manhã" />

**Uma pergunta** — pergunte o que quiser à conversa: a pergunta passa a ser o nome do elemento e, por baixo da resposta, estão as palavras em que se apoia, com o seu momento na gravação.

<Shot name="31_question" alt="A resposta a uma pergunta sobre a chamada, com duas citações aos 0:16 e aos 0:28" />

**Qualidade** — a pontuação de 1 a 5 com o motivo, e cada critério marcado como **cumprido**, **fraco** ou **não cumprido** com uma nota.

<Shot name="32_quality" alt="Qualidade: pontuação 4, dois critérios cumpridos e dois fracos" />

**Sinais** — cada sinal com as palavras em que foi levantado, a sua gravidade e o momento.

<Shot name="33_red_flags" alt="Sinais: Compromisso assumido, baixa, aos 0:28" />

**Temas** — os assuntos de uma reunião, aqui da reunião do Zoom.

<Shot name="38_topics" alt="Os temas da reunião do Zoom" />

## Os botões ao lado da lista pendente {#the-buttons-beside-the-drop-down}

| Botão | Faz |
| --- | --- |
| Faíscas | **Transcrever ou perguntar a um modelo…**: abre um menu, veja abaixo. |
| Duas folhas | Copia o que está a ser mostrado. |
| Disquete | Guarda-o num ficheiro. Pode guardar uma transcrição como texto simples ou como legendas. |
| Caixote do lixo | Elimina o que está a ser mostrado. |

<Shot name="34_run_menu" alt="O menu das faíscas: Transcrição com quatro reconhecedores, Processamento com as instruções" />

O menu das faíscas faz o trabalho a pedido. Em **Transcrição**, escolha um reconhecedor para transcrever outra vez a gravação com ele; em **Processamento**, escolha uma instrução para a correr já — **Uma pergunta sobre esta chamada** pede primeiro a pergunta. O resultado aparece na lista pendente. É assim que se redige uma conversa quando **Processar as conversas automaticamente** está desligado em [Processamento](../ai-processing/processing.md), e assim que se junta mais uma redação a uma conversa que já tem algumas.

## Três exemplos {#three-examples}

### Uma chamada feita no telefone {#a-call-made-in-the-phone}

A chamada acima: os interlocutores são **Você** e **Catarina Martins**, o nome do contacto, em dois canais separados.

### Um ficheiro que importou {#a-file-you-imported}

<Shot name="35_recording_import" alt="Um ficheiro importado de uma chamada de apoio de um banco: uma pista misturada e os interlocutores 1 e 2" />

`riverside_bank_support_call` é um mp3 trazido com **⋮ → Importar de ficheiros**. O seu nome é o nome do ficheiro, o seu ícone é uma seta para dentro de uma barra, e os seus dois interlocutores foram distinguidos pelo reconhecedor. As redações encontraram um número de cartão dito em voz alta e levantaram **Dados sensíveis**.

### Uma reunião capturada de outra aplicação {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Uma reunião do Zoom capturada do computador: a transcrição do X.ai com Você e o nome da reunião como interlocutores" />

**Planeamento do lançamento do T4 (Zoom)** foi capturada enquanto a reunião decorria no Zoom e recebeu o nome com o lápis. Todos os que estão do outro lado da reunião aparecem sob o nome da gravação; você é **Você**. Veja [Captura](../capture/capture.md).

## Uma gravação que já tem {#a-recording-you-already-have}

Uma gravação feita noutro sítio — num telemóvel, num gravador ou noutro sistema — pode ser adicionada com **⋮ → Importar de ficheiros**. Escolha um ou mais ficheiros mp3 ou wav; o telefone diz quantos foram importados e indica os que não conseguiu ler como gravação. Cada um é arquivado exatamente como uma chamada marcada: transcrito, redigido pelas mesmas [regras](../ai-processing/processing.md#rules) e encontrado pela mesma pesquisa.

## Eliminar uma gravação {#deleting-a-recording}

Quando uma gravação é eliminada, vai com ela tudo o que dela foi feito: as transcrições e as redações. Durante quanto tempo se guardam as gravações por si só define-se em [Gravações](../recordings.md#retention).
