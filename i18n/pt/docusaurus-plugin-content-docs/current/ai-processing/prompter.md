---
title: Definições do ponto
sidebar_label: Ponto
sidebar_position: 5
description: "Definições → Ponto: o que o ponto em direto precisa, o interruptor que o permite, o tamanho do texto, os assistentes e os seus cartões, e os tetos mensais do que pode gastar."
---

Em **Definições → Ponto** o ponto em direto é permitido, dimensionado e recebe os seus assistentes. O ponto em si — a janela que escreve uma chamada à medida que é dita e sugere o que responder, e o ensaio com uma gravação — está descrito em [Janela do ponto](/interface/prompter).

A [Visão geral](/interface/settings-overview) das definições apresenta o ponto em **Ponto**, em dois passos: **Permitir o ponto** e **Iniciar o ponto**.

## O que é preciso {#what-it-needs}
- **Um reconhecedor capaz de ouvir enquanto decorre uma conversa.** Adiciona-se em [Definições → Transcrição](/ai-processing/transcription#live-recognition-for-the-prompter), como qualquer outro reconhecedor, e precisa de um **Endereço para o ponto** e de um **Testar** bem-sucedido.
- **Um modelo de linguagem**, para os assistentes que sugerem algo. É o indicado no assistente, ou o modelo por omissão de [Definições → Processamento](/ai-processing/processing#language-models). As legendas não precisam de modelo nenhum.
- **A caixa Permitir o uso do ponto**, em **Definições → Ponto**.

Reunidas as três, **Ponto** aparece na lista no fundo do telefone, entre **Histórico** e **Definições**, e abre a [janela do ponto](/interface/prompter). A parte do programa que trata disto é o módulo **Ponto**, *Ouve uma conversa em curso e sugere*; pode ser desligado em [Módulos](/application/modules).

## Definições → Ponto {#settings--prompter}
<Shot name="41_settings_prompter" alt="Definições → Ponto: o interruptor que permite o ponto e o tamanho do texto" />

*Reconhecimento de fala durante uma conversa a decorrer, e sugestões escritas segundo as suas próprias instruções. Ambos são cobrados ao minuto.*

| Definição | Por omissão | O que faz |
| --- | --- | --- |
| **Permitir o uso do ponto** | desligado | O único interruptor que deixa iniciar um ponto. Nada mais na página tem efeito enquanto não estiver ligado. |
| **Transcrição e sugestões** | 13 píxeis | O tamanho com que são desenhadas as duas colunas da janela. |
| **Repetir a linha mais recente acima das colunas** | ligado | Mostra a sugestão mais recente — ou a linha mais recente, para um assistente que não sugere nada — numa faixa própria acima das colunas. |
| **A linha repetida** | 20 píxeis | O tamanho do texto da faixa. Aparece enquanto a faixa está ligada. |

:::caution
A voz da outra parte é enviada a um reconhecedor à medida que fala, o que não é menos do que gravá-la. Onde [Definições → Gravação](/recordings) pede que seja avisada primeiro, um ponto só arranca depois de o ter sido.
:::

O ponto lê-se enquanto se fala, muitas vezes de mais longe do que o resto do telefone, por isso os dois tamanhos são escolhidos por si: escolha uns que consiga apanhar sem se inclinar para o ecrã. Arraste o separador por baixo da faixa, na [janela do ponto](/interface/prompter#the-window), para a tornar mais alta.

### Assistentes {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Definições → Ponto: os assistentes e os tetos mensais" />

Um assistente é aquilo que se pede a um ponto que seja. *Cada um escuta uma conversa a decorrer e escreve algo na janela do ponto: as palavras tal como são ditas, uma tradução delas, ou uma sugestão do que dizer a seguir.* Qual correr escolhe-o na janela do ponto. O programa traz quatro:

| Assistente | O que escreve | Pergunta a um modelo |
| --- | --- | --- |
| **Legendas** | As palavras dos dois lados, à medida que são ditas. | não |
| **Tradução** | As palavras do outro lado, traduzidas para a língua do programa. | sim |
| **Objeções na chamada** | Para quem vende por telefone: quando o cliente levanta uma objeção, a objeção numa linha e uma linha que lhe responde. | sim |
| **Ajuda na entrevista** | Para quem está numa entrevista: a resposta à pergunta acabada de fazer, em poucas linhas curtas, ou o que abordar na resposta seguinte. | sim |

**▲** e **▼** mudam a ordem, que é a da lista da [janela do ponto](/interface/prompter#the-window). **Adicionar** cria um assistente seu. **Repor os valores por omissão** devolve as instruções e as regras ao estado em que vieram com o programa, aqui como em [Processamento](/ai-processing/processing#defaults); os seus modelos de linguagem ficam intocados.

### O cartão de um assistente {#an-assistants-card}
Premir um assistente abre o seu cartão. É o mesmo cartão de uma [instrução](/ai-processing/prompt-studio) em Processamento, com alguns controlos próprios.

<Shot name="42_prompter_assistant" alt="O cartão do assistente Objeções na chamada: o reconhecedor, quando uma resposta terminou, o papel e a instrução" />

| Campo | O que faz |
| --- | --- |
| **Nome** | O nome mostrado na lista e na janela do ponto. |
| **Forma da resposta** e **Enviar também** | Como em qualquer instrução: a forma da resposta e as indicações enviadas com ela. Os assistentes incluídos respondem em **Prosa**. |
| **Reconhecedor** | Que reconhecedor escuta. Só são oferecidos os que sabem ouvir enquanto alguém fala. |
| **Quando uma resposta terminou** | Quem decide que uma resposta acabou e pode ser respondida: **Decide o reconhecedor**, **Depois de uma pausa** ou **Só quando eu pedir** — nesse caso, uma resposta termina quando prime **Sugestão**. Seis dos reconhecedores dizem onde acaba uma resposta e quatro não; **Decide o reconhecedor** recorre a uma pausa onde não tem resposta, e é por isso que é a opção a deixar. |
| **Reconhecer também o meu lado** | Uma segunda sessão no mesmo reconhecedor, ao dobro do preço, para que as suas próprias palavras apareçam também na transcrição. Entram no que é dito ao modelo e nunca são aquilo sobre que ele é interrogado. |
| **Papel — o que o modelo é** | Enviado ao modelo antes da instrução, por exemplo *Ajuda alguém que vende por telefone…* |
| **A instrução** | O que se pergunta ao modelo a cada resposta. `{{reply}}` é a resposta que acabou de terminar e `{{conversation}}` tudo o que foi dito antes. *Deixe vazio e nada é perguntado a um modelo: as palavras são mostradas à medida que chegam, e o único que se paga é o reconhecedor* — é isso o **Legendas**. |
| **Responder em** | A língua da sugestão: **O que quer que tenha sido falado**, **A língua deste programa** ou **Uma só língua, sempre**, com o seu código. |
| **Modelo** | **Por omissão** ou um dos seus [modelos de linguagem](/ai-processing/processing#language-models). |

### Despesa {#spending}
*Separada do que as regras podem gastar em conversas terminadas. Um mês de resumos não pode calar um ponto a meio de uma conversa.*

| Campo | Quando é atingido |
| --- | --- |
| **Reconhecedores, por mês** | Um ponto a correr para no fim da resposta em que está — nunca a meio de uma palavra. |
| **Modelos, por mês** | As sugestões param e as legendas continuam. |

Vazio significa sem teto. O custo de um minuto de áudio em direto é o **Preço por minuto** do reconhecedor, indicado no seu cartão em [Transcrição](/ai-processing/transcription#the-recognisers-card); sem ele, o ponto avisa que o valor mostrado é uma estimativa.
