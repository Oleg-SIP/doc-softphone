---
title: Captura
sidebar_label: Captura de outras aplicações
sidebar_position: 1
description: "\"A captura grava uma conversa feita noutra aplicação — Zoom, Teams, Meet ou qualquer outra — diretamente a partir do computador.\""
---

A **Captura** é a forma como o AI Softphone grava uma conversa que decorre noutro programa, como uma reunião no Zoom, no Teams ou no Meet. Grava a partir do próprio computador, mantendo o outro lado e você em canais separados, e no fim esperam-no a mesma transcrição e a mesma redação de uma chamada.

O programa procura uma conversa, não o nome de uma aplicação, por isso funciona com qualquer coisa que produza uma.

A [Visão geral](../interface/settings-overview.md) das definições inclui-a em **Captura de outras aplicações** e divide-a em três passos:

1. **Ligar a captura** — [permitir a captura do som](#turning-capture-on).
2. **Capturar uma conversa** — [iniciar e parar](#capturing-a-conversation) uma gravação.
3. **Dar um nome a uma captura** — [mudar o nome](#giving-it-a-name) da gravação.

## Ligar a captura {#turning-capture-on}

A captura está desligada até a permitir. Abra **Definições → Captura**.

<Shot name="10_settings_capture" alt="Definições → Captura" />

| Definição | Por omissão | O que faz |
| --- | --- | --- |
| **Permitir a captura do som** | desligado | Deixa o programa gravar o som de outras aplicações. Enquanto estiver desligado, nada é capturado. |
| **Lembrar-me de informar os outros da gravação** | ligado | Mostra um lembrete enquanto decorre uma captura. A caixa fica cinzenta até a captura ser permitida. |

:::caution
Tudo o que o computador toca é gravado, não só a conversa. Este telefone não consegue anunciar uma gravação na reunião de outra pessoa, por isso avisar cabe-lhe a si.
:::

A parte do programa que faz isto é o módulo **Captura**, *Gravar uma conversa que decorre noutra aplicação*. Pode ser desligado em [Módulos](../application/modules.md).

## Iniciar uma captura {#starting-a-capture}

Depois de a captura ser permitida, o fundo da [janela principal](../interface/main-window.md#capture) mostra o seu estado — **Captura · pronta** — com um botão **Gravar** à direita. Carregue em **Gravar** para começar à mão.

### Início automático {#automatic-start}

**Início automático** decide o que acontece quando o programa ouve uma conversa noutra aplicação:

| Opção | O que acontece |
| --- | --- |
| **Nunca** | Uma captura só começa quando carrega em **Gravar**. |
| **Perguntar-me** | O programa pergunta se a deve gravar. Por omissão. |
| **Sempre** | O programa começa a gravar sozinho. |

Em **Aplicações com resposta própria** pode dar-se a uma aplicação uma resposta própria — por exemplo *Gravar sempre esta aplicação*, a partir da pergunta que o programa faz.

*Perguntar não custa nada: os segundos anteriores à sua resposta já estão guardados.*

### Antes do início {#before-the-start}

O cursor **Antes do início** indica quantos segundos de som são guardados de antes de uma gravação começar, **15 segundos** por omissão. Existe para que nada se perca enquanto a conversa é detetada: uma gravação que começa quando carrega em **Gravar**, ou quando responde à pergunta, começa na mesma com as palavras que vieram antes.

## Capturar uma conversa {#capturing-a-conversation}

Enquanto grava, a janela principal mostra um ponto vermelho, o nome da gravação (por exemplo **Reunião em Zoom**), o tempo decorrido e os dois canais como formas de onda.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="A gravar uma reunião" />

- **Parar a gravação** termina-a.
- A janela fica visível enquanto grava, e lembra-o de dizer aos participantes que a reunião está a ser gravada.

### O que a imagem mostra {#what-the-picture-shows}

Mais duas definições escolhem como é desenhado o nível do som:

| Definição | Por omissão | Onde |
| --- | --- | --- |
| **Imagem na janela principal** | Onda | Os dois canais enquanto decorre uma captura. |
| **Imagem na barra ao pé do telefone** | Dois níveis | As duas barras finas por baixo de **Captura · pronta**. |

### Testar {#testing-it}

Em **Testar**, o separador tem duas barras: **Você** e **O outro lado**. *A barra de cima mexe-se quando fala, a de baixo quando algo toca.* Antes de uma reunião importante, diga uma palavra e toque um som qualquer para ver que o programa ouve os dois lados.

## Dar-lhe um nome {#giving-it-a-name}

O lápis ao lado do nome da gravação permite mudar-lhe o nome enquanto decorre. Uma gravação a que não deu nome aparece como **Outra aplicação**.

## Para onde vai a gravação {#where-the-recording-goes}

Uma conversa capturada aparece na [janela de gravações](../interface/recordings.md) como qualquer outra, com o seu próprio ícone, uma janela em vez de um auscultador, e com o título que lhe deu ou **Outra aplicação**.

<Shot name="01_recordings" alt="Reuniões capturadas no separador Gravações, marcadas com um ícone de janela" />

É transcrita, resumida, arrumada numa categoria e etiquetada pelas mesmas [regras](../ai-processing/processing.md#rules) que uma chamada. Na transcrição de uma reunião capturada, quem fala aparece como **Outra aplicação**, onde uma chamada mostraria o nome do interlocutor; a **Pesquisa** da biblioteca também encontra o que nela foi dito.
