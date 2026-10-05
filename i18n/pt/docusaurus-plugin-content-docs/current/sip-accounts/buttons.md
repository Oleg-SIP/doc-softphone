---
title: Botões
sidebar_position: 4
description: "\"Botões BLF: botões de um só toque que ligam para uma extensão da sua central IP e mostram se está livre, a tocar ou ocupada.\""
---

Os botões são as teclas **BLF** (Busy Lamp Field) do softphone, a mesma função que tem um telefone de secretária numa central IP. Um botão liga para uma extensão com um só toque. Um botão que acompanha a sua linha mostra também uma luz: o telefone pergunta à central por essa extensão e mostra se está livre, a tocar ou ocupada, como fazem a consola de uma receção ou as teclas programáveis de um telefone de secretária.

O BLF precisa de suporte do lado da central: a central tem de comunicar ao telefone o estado da extensão. A maioria das centrais IP fá-lo. Se a sua não o fizer, a luz fica cinzenta e o botão continua a ligar.

Os botões ficam por baixo das fichas das contas na [janela principal](/interface/main-window), e é em **Definições → Botões** que se criam.

<Shot name="08_settings_buttons" alt="Definições → Botões: dois botões" />

Cada linha é um botão: a luz, o seu rótulo e, à direita, o seu número e a conta a que pertence — por exemplo *212 · 201 Escritório*. **▲** e **▼** sobem ou descem o botão; os botões na janela principal seguem esta ordem. **Adicionar** cria um novo.

## A luz {#the-lamp}

Um botão que acompanha a sua linha mostra uma luz:

| Luz | A linha está |
| --- | --- |
| Verde | livre |
| Âmbar | a tocar |
| Vermelha | em chamada |
| Cinzenta | desconhecida: a central não diz |

## Adicionar um botão {#adding-a-button}

<Shot name="08b_button_add" alt="O formulário de um botão novo" />

Carregue em **Adicionar**; abre-se um formulário por baixo da lista.

| Campo | O que escrever |
| --- | --- |
| **Número** | O número a marcar. |
| **Linha** | A conta em que a chamada é feita. Escolha-a primeiro: para mostrar a luz, o telefone pergunta por este número à central dessa linha, por isso tem de saber qual é. |
| **Rótulo** | O texto no botão, por exemplo o nome da pessoa. O botão só tem espaço para um rótulo curto; um mais longo fica cortado. |
| **Mostrar se esta linha está ocupada** | Um interruptor. Ligado, o botão tem luz. Desligado, só liga. |

**Guardar** fica cinzento até o formulário estar preenchido. **Cancelar** descarta o formulário.

A parte do programa que mostra os botões pode ser desligada em [Módulos](/application/modules).
