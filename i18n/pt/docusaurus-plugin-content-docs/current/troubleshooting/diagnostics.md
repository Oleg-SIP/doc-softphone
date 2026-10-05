---
title: Diagnóstico
sidebar_position: 1
description: A janela que mostra cada palavra que o telefone e a central dizem um ao outro, o ficheiro de registo e onde o programa guarda os seus ficheiros.
---

A janela **Diagnóstico** mostra o que o telefone e a central dizem um ao outro, no momento em que o dizem. É o primeiro sítio onde ver quando uma conta não se regista ou uma chamada não se estabelece, e a janela que um departamento de informática lhe pedirá para enviar.

Abre-se em **Definições → Diagnóstico**, com o botão **Abrir o diagnóstico**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="A janela Diagnóstico" />

Mostra cada mensagem SIP que o telefone envia ou recebe, enquanto acontece, juntamente com as estatísticas de áudio das chamadas em curso. Só recolhe enquanto está aberta e não guarda nada depois de fechar.

## SIP {#sip}

O separador **SIP** é o registo da sinalização.

- Cada mensagem é uma linha com a hora (ao milissegundo), o que é e para onde foi: uma seta para a direita é enviada pelo telefone, uma seta para a esquerda é recebida do servidor. Por baixo: `to` ou `from` o endereço do servidor e o transporte (por exemplo *por UDP*).
- Uma mensagem pode ser expandida para mostrar os seus cabeçalhos completos (a terceira mensagem na imagem).
- **Procurar** encontra texto no registo.
- **Esvaziar** esvazia-o.

O exemplo na captura de ecrã é um registo saudável: o telefone envia `REGISTER`, o servidor responde `200 OK (REGISTER)`.

## Chamadas {#calls}

O segundo separador, **Chamadas**, mostra métricas de qualidade de cada chamada em curso.

## O separador Diagnóstico das definições {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Definições → Diagnóstico" />

### Detalhe do registo {#log-detail}

A lista pendente escolhe quanto o programa escreve no seu ficheiro de registo; na imagem é **Detalhado**. Faz efeito de imediato, mesmo numa chamada já em curso — que é precisamente aquela de que quer o registo. A definição mais detalhada anota cada mensagem SIP. É volumosa, mas as palavras-passe são removidas antes de se escrever o que quer que seja, por isso o ficheiro pode ser enviado em segurança com um pedido de apoio.

**Enviar uma cópia para o registo do sistema** escreve também o registo no registo do próprio sistema, para uma máquina cujos registos são recolhidos centralmente. O ficheiro abaixo é escrito em qualquer caso, e é esse que deve anexar a um pedido de apoio.

### Ficheiros {#files}

O separador lista onde o programa guarda os seus ficheiros e o tamanho de cada um. No macOS:

| Ficheiro | Onde | Contém |
| --- | --- | --- |
| Definições | `~/Library/Preferences/ai-softphone/settings.json` | As definições. Nunca palavras-passe nem códigos. |
| Base de dados | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Contactos, histórico, transcrições e redações. |
| Gravações | `~/Library/Application Support/ai-softphone/recordings` | O áudio das gravações. |
| Registo | `~/Library/Logs/ai-softphone/ai-softphone.log` | O registo. |

Por baixo da lista, **Abrir** mostra o registo e **Esvaziar** esvazia-o. Esvazie o registo mesmo antes de reproduzir um problema; esvaziá-lo não pode ser desfeito.

## O que enviar ao apoio {#what-to-send-to-support}

1. Ponha **Detalhe do registo** no nível mais detalhado.
2. Carregue em **Esvaziar** e reproduza o problema.
3. Envie o ficheiro de registo, ou abra **Definições → Acerca**, escreva-nos daí e marque **Anexar o registo** — veja [Acerca](../application/about.md#feedback).

Para um problema de registo ou de chamada, envie também as linhas da tentativa falhada do separador **SIP**.

A parte do programa por trás de tudo isto — o traço SIP, as estatísticas de média e os contadores — pode ser desligada em [Módulos](../application/modules.md) (**Diagnóstico**).
