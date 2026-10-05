---
title: Configurar uma conta SIP
sidebar_position: 1
description: Ligar o AI Softphone à sua central IP ou fornecedor SIP em Definições → Contas.
---

O AI Softphone funciona com qualquer central IP ou fornecedor SIP. Pode ter sessão iniciada em tantas contas (linhas) quantas tiver, e cada conta tem as suas próprias definições.

Abra **Definições → Contas**.

<Shot name="05_settings_accounts" alt="Definições → Contas: duas contas, ambas registadas" />

## A lista de contas {#the-list-of-accounts}

Cada conta é uma linha com:

- uma **caixa de verificação** que liga ou desliga a conta;
- um **ponto** que fica verde quando a conta está registada na central;
- o nome e, por baixo, `utilizador@servidor`;
- um botão **Desligar** que termina a sessão da conta na central;
- os botões **▲** e **▼**, que sobem ou descem a conta na lista. As fichas das contas na [janela principal](../interface/main-window.md) seguem a mesma ordem.

O botão **Adicionar**, no canto superior direito, adiciona uma conta. Clique numa linha para abrir o seu formulário por baixo.

## Adicionar uma conta {#adding-an-account}

<Shot name="05d_account_add" alt="O formulário de uma conta nova, vazio" />

Carregue em **Adicionar**. Abre-se um formulário vazio por baixo da lista, com o cursor em **Nome (facultativo)**. Preencha os campos abaixo, abra **Definições do servidor** se a central precisar delas e carregue em **Guardar**. Uma conta nova começa com os valores habituais: UDP na porta 5060, registo renovado a cada 300 segundos.

## O formulário da conta {#the-account-form}

<Shot name="05b_account_edit" alt="O formulário de uma conta" />

| Campo | O que escrever |
| --- | --- |
| **Nome (facultativo)** | O nome mostrado na ficha da conta na janela principal e nas suas chamadas. Se estiver vazio, a conta aparece como `utilizador@servidor`. |
| **Utilizador** | O utilizador ou o número de extensão dado pela sua central ou fornecedor. |
| **Palavra-passe** | A respetiva palavra-passe. O campo fica vazio quando volta ao formulário. É guardada no porta-chaves do computador, nunca num ficheiro de definições. |
| **Endereço do servidor** | O endereço da central ou do servidor SIP do fornecedor, por exemplo `pbx.example.com`. |
| **Definições do servidor** | Expande as definições menos comuns da ligação; veja abaixo. |
| **Atender automaticamente** | Em **Atendimento**: atende as chamadas a entrar nesta conta sem que carregue em nada. Desligado por omissão. |

Carregue em **Guardar** para manter as alterações. **Cancelar** descarta-as e **Eliminar** remove a conta.

Quando o ponto ao lado da conta está verde, a conta está registada e a sua ficha na janela principal também o mostra. Se ficar cinzento ou vermelho, abra o [Diagnóstico](../troubleshooting/diagnostics.md): o separador **SIP** mostra o pedido `REGISTER` e o que o servidor respondeu.

## Definições do servidor {#server-settings}

A maioria das centrais não precisa de nada aqui. Carregue em **Definições do servidor** para as mostrar; o mesmo botão passa a dizer **Esconder as definições do servidor**.

<Shot name="05c_account_server_settings" alt="As definições do servidor de uma conta, expandidas" />

| Campo | Por omissão | O que é |
| --- | --- | --- |
| **Utilizador de autenticação** | vazio | O nome com que a central verifica a palavra-passe, quando não é o mesmo que o **Utilizador**. Na imagem a extensão é `201` e a central autentica-a como `escritorio201`. |
| **Transporte** | UDP | O protocolo da ligação ao servidor. Uma lista pendente. |
| **Porta** | 5060 | A porta do servidor. |
| **Proxy de saída** | vazio | Um proxy por onde tem de passar cada pedido, se o seu fornecedor indicar um. |
| **Registrar** | vazio | O endereço onde fazer o registo, se não for o **Endereço do servidor**. |
| **Voltar a registar, segundos** | 300 | De quanto em quanto tempo o telefone renova o registo. |
| **Tons do teclado** | Fluxo de áudio | Como os tons do teclado são enviados à central. Uma lista pendente. Mude-a só se a central não ouvir os tons. |

Os codecs que o telefone oferece não se definem por conta; estão nas [Definições de chamadas](calls.md#audio-formats).
