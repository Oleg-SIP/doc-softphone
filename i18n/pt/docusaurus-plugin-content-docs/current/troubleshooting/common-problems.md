---
title: Problemas comuns
sidebar_position: 2
description: "\"O que verificar quando uma conta não se regista, não há som, uma chamada ou uma reunião não é gravada, não há transcrição, ou uma ligação, um atalho ou a API não fazem nada.\""
---

Cada entrada aponta para a definição que o decide. Se a resposta não estiver aqui, abra o [Diagnóstico](/troubleshooting/diagnostics): mostra o que o telefone e a central dizem um ao outro.

## A conta não se regista {#the-account-will-not-register}

O ponto ao lado da conta em **Definições → Contas** fica cinzento ou vermelho.

1. Verifique **Utilizador**, **Palavra-passe** e **Endereço do servidor** no [formulário da conta](/sip-accounts/setup).
2. Se a sua central verificar a palavra-passe com outro nome que não a extensão, preencha **Utilizador de autenticação** em **Definições do servidor**.
3. Verifique **Transporte** e **Porta** face ao que a central espera.
4. Abra o separador **SIP** da [janela de diagnóstico](/troubleshooting/diagnostics) e veja o pedido `REGISTER` e o que o servidor respondeu.

## Não ouço, ou não me ouvem {#i-cannot-hear-or-i-cannot-be-heard}

Abra [Definições → Dispositivos](/sip-accounts/devices).

- Diga alguma coisa: a barra por baixo de **Microfone** tem de se mexer. Se não se mexer, escolha outro microfone.
- Carregue em **Testar** por baixo de **Altifalantes** para ouvir um som no dispositivo escolhido.
- Verifique os cursores de **Volume**. **Silenciar o microfone** no cartão da chamada e o [atalho](/program/shortcuts) **Silenciar o microfone** desligam o microfone durante uma chamada.
- O toque pode estar definido para tocar num dispositivo diferente daquele em que fala — **Toque**, a segunda lista pendente.

## A chamada ouve-se mal, ou não se estabelece {#the-call-sounds-bad-or-does-not-start}

Os codecs são oferecidos pela ordem da lista em [Definições → Chamadas](/sip-accounts/calls#audio-formats). Deixe ligados os codecs que a sua central usa e ponha o melhor deles em primeiro. Uma alteração aplica-se a partir da próxima chamada.

## Uma segunda chamada não toca {#a-second-call-does-not-ring}

O que acontece quando alguém liga enquanto está numa chamada define-se em [Chamada em espera](/sip-accounts/calls#call-waiting).

## Uma chamada não foi gravada {#a-call-was-not-recorded}

- **Definições → Gravação**, a primeira lista pendente, decide que chamadas são gravadas; o valor por omissão, **À mão**, só grava quando carrega em gravar no cartão da chamada. Veja [Gravar chamadas](/recordings/call-recording).
- A gravação começa quando a chamada é atendida, por isso uma chamada não atendida não tem ficheiro.
- O módulo **Gravação** tem de estar ligado em [Módulos](/application/modules).
- As gravações são removidas pelos limites em **Retenção**; uma gravação fixada nunca é removida.

## Uma reunião noutra aplicação não foi capturada {#a-meeting-in-another-application-was-not-captured}

Veja [Captura](/capture/).

- **Permitir a captura do som** em **Definições → Captura** tem de estar ligado.
- Com **Início automático** em **Perguntar-me** (o valor por omissão), responda à pergunta quando aparecer; com **Nunca**, carregue você em **Gravar**.
- Use **Testar** no mesmo separador: a barra de cima tem de se mexer quando fala, a de baixo quando algo toca.
- O módulo **Captura** tem de estar ligado em [Módulos](/application/modules).

## Há uma gravação, mas não há transcrição nem resumo {#there-is-a-recording-but-no-transcript-or-summary}

- Uma conversa só é transcrita e redigida sozinha se **Processar as conversas automaticamente** estiver ligado em [Definições → Processamento](/ai-processing/processing). Caso contrário, peça-o na [janela de gravações](/interface/recordings).
- Tem de haver um [reconhecedor](/ai-processing/transcription) e um [modelo de língua](/ai-processing/processing#language-models), e cada um tem de responder no seu endereço.
- Quando o **Limite de dinheiro** ou o **Limite de tokens** mensal é atingido, as regras automáticas param até o mês mudar. O que pede você mesmo nunca é parado.
- Os passos de [Definições → Visão geral](/interface/settings-overview) mostram o que ainda falta configurar.

## O telefone desapareceu quando fechei a janela {#the-phone-disappeared-when-i-closed-the-window}

Com **Deixar o telefone a funcionar quando a janela é fechada** ligado, o telefone continua a funcionar e as chamadas continuam a chegar. O ícone na área de notificação (a barra de menus no macOS) traz a janela de volta. Veja [Arranque](/program/startup).

## Um número de telefone num navegador ou num CRM não liga {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Carregue em **Abrir ligações de chamada com este telefone** em [Definições → Arranque](/program/startup#call-links). Um número clicado chega ao marcador e fica lá à espera, a não ser que **Ligar de imediato, sem carregar em Chamar** esteja ligado.

## A luz de um botão fica cinzenta {#a-buttons-lamp-stays-grey}

A central não diz se a extensão está livre. O botão continua a ligar. Veja [Botões](/sip-accounts/buttons).

## A API REST não responde {#the-rest-api-does-not-answer}

- **Deixar outros programas deste computador conduzir o telefone** tem de estar ligado em [Definições → Integração](/integration/rest-api), e o módulo **Integração** em [Módulos](/application/modules).
- O endereço é `http://127.0.0.1:8377`, a não ser que tenha mudado a **Porta**.
- Um grupo que não abriu em **Acesso** responde a todos os pedidos com `404`.
- Se definiu um **Código**, os pedidos que mudam dados guardados têm de o levar no cabeçalho `Authorization`.
- Há mais sintomas em [Quando não funciona](/integration/rest-api#when-it-does-not-work).

## Os webhooks não chegam {#webhooks-do-not-arrive}

Carregue em **Enviar um evento de teste** em [Definições → Integração](/integration/webhooks). Os contadores `webhooks_failed_total` e `webhooks_dropped_total` da API REST mostram como corre a entrega; [Quando nada chega](/integration/webhooks#when-nothing-arrives) explica o que significa cada um.

## Um atalho não faz nada {#a-hotkey-does-nothing}

Abra [Atalhos](/program/shortcuts). Um atalho funciona enquanto o telefone é o programa que está a usar; para o usar a partir de qualquer programa, marque **Em todo o lado**. Clique no atalho e carregue de novo na combinação se outro programa a tiver tomado.
