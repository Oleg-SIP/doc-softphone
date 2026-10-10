---
title: Janela do ponto
sidebar_position: 3
description: "A janela do ponto em direto: as palavras de uma chamada à medida que são ditas e sugestões do que dizer a seguir, os seus botões e colunas, o ensaio com uma gravação e quanto custa."
---

O **Ponto** escuta uma conversa enquanto ela decorre. Numa janela própria escreve o que cada lado diz, à medida que é dito, e — quando o assistente escolhido pergunta a um modelo — uma sugestão do que dizer a seguir. Vale a pena tê-lo aberto durante uma chamada de vendas, uma entrevista ou uma conversa difícil, e com outro assistente a mesma janela mostra uma tradução contínua do outro lado, ou simples legendas.

<Shot name="46_prompter_running" alt="O ponto a ensaiar uma chamada de vendas: a transcrição à esquerda, as sugestões à direita, a mais recente repetida em grande por cima" />

Na imagem, o assistente **Objeções na chamada** escuta uma chamada de vendas. A coluna da esquerda é o que foi dito, cada linha com a sua hora e o seu lado; a da direita é o que o modelo sugeriu a cada resposta do cliente; a sugestão mais recente repete-se em letra grande por cima das duas.

**Ponto** aparece na lista no fundo do telefone, entre **Histórico** e **Definições**, assim que se reúnem três coisas: o ponto está permitido, há um reconhecedor capaz de ouvir enquanto decorre uma conversa e — para os assistentes que sugerem algo — um modelo de linguagem. Tudo isto se configura em [Definições → Ponto](/ai-processing/prompter), onde estão também o tamanho do texto e os próprios assistentes.

## A janela {#the-window}
<Shot name="44_prompter_window" alt="A janela do ponto com o assistente Objeções na chamada escolhido, antes de iniciar" />

No topo está a lista **Assistente** e, à sua direita, os botões:

| Botão | O que faz |
| --- | --- |
| **Iniciar** / **Parar** (triângulo / quadrado) | *Começar a escutar esta chamada* — ou parar: *O que foi dito fica no ecrã*. Um início premido antes de a chamada ser atendida espera por ela, e o botão passa então a cancelá-lo. |
| **Sugestão** (faíscas) | *Terminar aqui a resposta e sugerir o que dizer*, sem esperar por uma pausa. Para um assistente que não pergunta a nenhum modelo, o botão é **Terminar a resposta**: apenas fecha a resposta, para que a seguinte comece limpa. Fica esbatido enquanto o ponto não está a correr. |
| **Esvaziar** (caixote do lixo) | Esquece o que está no ecrã, depois de perguntar. *Desaparecem as duas colunas e, com elas, a conversa a partir da qual a próxima sugestão teria sido construída.* Parar e voltar a iniciar não esvazia nada: uma conversa parada e retomada costuma ser a mesma conversa. |
| **Exportar…** (disquete) | Escreve as duas colunas num ficheiro, com as suas horas: texto (`.txt`) ou folha de cálculo (`.csv`), com o nome que der ao ficheiro. |
| **Ensaio…** (biblioteca) | [Experimenta um assistente com uma gravação](#rehearsing-on-a-recording) em vez de uma chamada. |

A lista mostra os [assistentes](/ai-processing/prompter#assistants) pela ordem definida em **Definições → Ponto**. Não pode ser mudada enquanto um ponto está a correr, mas continua à vista, para que veja que assistente está a trabalhar. Enquanto escuta, o cartão da chamada diz **A ouvir**.

Por baixo dos botões fica a faixa com a linha mais recente e, por baixo dela, as duas colunas:

- **Transcrição** — cada linha com a sua hora e o seu lado;
- **Sugestões** — cada sugestão com a hora da resposta a que responde. Para um assistente que não pergunta a nenhum modelo esta coluna não existe, e a transcrição ocupa toda a largura.

Quando a janela é estreita, as duas colunas ficam uma por cima da outra. Uma coluna acompanha o que vai chegando até recuar nela, e volta a acompanhar quando regressa ao fim. Prima qualquer linha para a manter na faixa; prima a mais recente, ou o pino da faixa, para voltar a acompanhar. O botão direito copia uma linha, uma sugestão, a transcrição inteira ou todas as sugestões. Arraste o separador por baixo da faixa para a tornar mais alta; os tamanhos do texto definem-se em [Definições → Ponto](/ai-processing/prompter#settings--prompter).

## Ensaio com uma gravação {#rehearsing-on-a-recording}
Um assistente pode ser experimentado sem ninguém ao telefone. **Ensaio…** lista as conversas da [biblioteca](/interface/recordings), das mais recentes para as mais antigas, e **Um ficheiro neste computador…** para um ficheiro `.mp3` ou `.wav`.

<Shot name="45_prompter_rehearse" alt="Ensaio…: as conversas da biblioteca e um ficheiro neste computador" />

A gravação escolhida aparece num leitor por baixo dos botões: reproduzir e pausar, os dois canais desenhados como uma forma de onda onde se pode clicar, e o tempo. Prima **Iniciar**: a gravação é reproduzida no ponto pelo mesmo caminho de uma chamada, à sua própria velocidade — a reprodução acelerada não é oferecida de propósito, porque um ponto alimentado a uma vez e meia faria pausas, responderia e cobraria por uma conversa que ninguém teve. A cruz à direita é **Terminar o ensaio**, de volta a escutar chamadas.

Uma gravação num só canal, como um ficheiro importado, ouve-se como uma única sala: *o ponto ouve tudo como o interlocutor*.

## Quanto custa e para onde vão as palavras {#what-it-costs-and-where-the-words-go}
- O reconhecedor é cobrado ao minuto de áudio em direto, e **Reconhecer também o meu lado** duplica-o. Um modelo é cobrado por cada sugestão. Ambos contam para os [tetos mensais](/ai-processing/prompter#spending) do ponto, não para os limites do Processamento.
- A voz do outro lado sai do computador à medida que fala, para o reconhecedor que escolheu. Um reconhecedor na sua própria máquina — **Vosk**, **WhisperLive** ou **NVIDIA Riva** — mantém-na dentro de portas.
- O que o ponto mostra não é uma gravação. Para o guardar, prima **Exportar…**; para ter a própria conversa, [grave a chamada](/recordings) também.

## Quando não arranca {#when-it-does-not-start}
A janela diz o que falta numa linha por baixo dos botões.

| A janela diz | O que fazer |
| --- | --- |
| *O ponto está desligado. Definições → Ponto.* | Marque **Permitir o uso do ponto**. |
| *Nenhum reconhecedor aqui sabe ouvir enquanto alguém fala. Definições → Transcrição.* | Adicione um reconhecedor com um **Endereço para o ponto** e prima **Testar**. |
| *Não há nada para executar. Definições → Ponto, e acrescente um assistente.* | Todos os assistentes foram apagados ou desligados: adicione um, ou prima **Repor os valores por omissão**. |
| *A outra parte tem de ser avisada primeiro. Grave esta conversa, ou altere o que Definições → Gravação diz sobre o consentimento.* | Inicie a gravação, que reproduz o aviso, ou altere a definição de consentimento. |
| *O reconhecedor não começou a ouvir. Verifique o seu endereço em direto e o seu modelo em Definições → Transcrição.* | O endereço para o ponto, o modelo ou a chave está errado. **Testar** no cartão do reconhecedor diz qual. |
| *A verba mensal para reconhecedores está esgotada.* | Aumente **Reconhecedores, por mês**, ou espere que o mês mude. |
| *A verba mensal para modelos está esgotada. As palavras continuam; o apontar parou.* | Aumente **Modelos, por mês**. |
