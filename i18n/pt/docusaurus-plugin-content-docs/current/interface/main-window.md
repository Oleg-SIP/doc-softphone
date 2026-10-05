---
title: Janela principal
sidebar_position: 1
description: O telefone à esquerda, a biblioteca e as definições à direita — a disposição da janela principal do AI Softphone.
---

A janela principal é o próprio telefone. Com a disposição por omissão, **Uma janela**, o telefone fica à esquerda e tudo o resto abre à direita. A [disposição pode ser mudada](../program/appearance.md).

<Shot name="03_contacts" full alt="A janela principal: o telefone à esquerda e o separador Contactos à direita" />

## O telefone {#the-phone}

De cima para baixo, o lado esquerdo tem:

- o campo **Número**;
- o teclado e a tecla de chamada;
- as fichas das contas;
- os botões que acompanham outras extensões;
- os quatro destinos: **Gravações**, **Contactos**, **Histórico** e **Definições**.

### O marcador {#the-dialler}

- **Número** — escreva ou cole o número para onde ligar. O ícone do relógio no fim do campo abre a lista dos números para onde ligou ou de onde lhe ligaram ultimamente.
- As teclas redondas **1–9**, **\***, **0** e **#** preenchem o número, e durante uma chamada enviam tons (DTMF).
- A tecla do auscultador faz a chamada. Fica cinzenta enquanto não houver número.

<Shot name="22_last_calls" full alt="A lista de chamadas recentes por baixo do campo Número, ao lado do separador Histórico" />

Quando a lista de números recentes está aberta, o campo mostra uma seta e a tecla de chamada passa para a sua direita. Cada entrada é um nome, ou um número se quem ligou não estiver nos [Contactos](contacts-history.md), com a data. Um auscultador vermelho marca uma chamada perdida; uma contagem entre parênteses — por exemplo *Helpdesk (4)* — representa várias chamadas seguidas para o mesmo interlocutor.

### As fichas das contas {#the-account-chips}

Por baixo do teclado há uma ficha por cada [conta](../sip-accounts/setup.md). Um ponto verde significa que a conta está registada na central. A ficha destacada (na imagem, **305 Apoio**) é a conta de onde será feita a próxima chamada; carregue noutra ficha para a mudar. O botão redondo vermelho à direita das fichas é o não incomodar.

### Os botões {#the-buttons}

Por baixo das fichas estão os [botões](../sip-accounts/buttons.md) que criou para colegas e linhas, cada um com uma luz — **Ferreira** e **Armazém** nas imagens. Carregue num para ligar para o seu número.

### Gravações, Contactos, Histórico, Definições {#recordings-contacts-history-settings}

Estas quatro entradas em baixo abrem um separador à direita, lado a lado: [Gravações](../recordings/recordings-window.md), [Contactos e histórico](contacts-history.md) e [Definições](settings-overview.md). Os separadores que abriu ficam na fila do topo do lado direito.

## Uma chamada em curso {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Uma chamada em curso" />

Durante uma chamada, o campo do número passa para cima com um ícone de teclado lá dentro, e a chamada aparece num cartão:

- o estado e a duração da chamada (**Em chamada · 0:21**), o nome do interlocutor, **Linha** e o nome da conta em que está a chamada, e o número;
- duas barras de nível verticais dos lados do cartão, uma por cada canal do som;
- uma fila de botões: gravar (círculo), silenciar (microfone), pôr em espera (pausa) e o botão vermelho **Desligar**;
- uma segunda fila: transferir (auscultador com uma seta) e o teclado.

Uma chamada pode ser transferida diretamente, ou depois de falar primeiro com a pessoa.

Se o número for conhecido nos **Contactos**, aparece o nome em vez do número. As mesmas ações têm [atalhos](../program/shortcuts.md): atender, desligar, pôr em espera e silenciar.

## Várias chamadas ao mesmo tempo {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Várias chamadas" />

Uma chamada a entrar é anunciada por uma faixa onde quer que esteja a trabalhar, mesmo com o telefone escondido. Uma nova chamada a entrar aparece no seu próprio cartão por cima da lista, com um botão verde, um amarelo e um vermelho, e uma linha que diz com quem está a falar agora (**Em chamada com …**). A lista por baixo mostra cada chamada com o seu estado — **Em espera**, **Em chamada**, **Chamada a entrar** — e a conta em que está. Um ícone de pausa marca uma chamada em espera e um ícone de altifalante aquela em que está a falar.

O que acontece quando alguém liga enquanto já está numa chamada define-se nas [Definições de chamadas](../sip-accounts/calls.md#call-waiting).

## Conferência {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Uma conferência" />

As chamadas que foram juntas aparecem como um único cartão **Conferência** na linha da conta. Cada participante aparece com o tempo na chamada e o seu próprio botão **Desligar**. Os botões por baixo gravam, silenciam e terminam a conferência para todos; o botão largo em baixo volta a separar a conferência em chamadas distintas.

## Captura {#capture}

Quando a [captura de outras aplicações](../capture/capture.md) está permitida em **Definições → Captura**, aparece uma faixa entre as fichas das contas e os botões.

<Shot name="10_settings_capture" full alt="A faixa de captura ao pé do telefone: Captura · pronta, Gravar e duas barras de nível" />

- **Captura · pronta** diz que o programa está atento a uma conversa noutra aplicação.
- **Gravar** inicia uma captura à mão.
- As duas barras finas por baixo mostram o nível do som: a de cima é você, a de baixo é o que o computador toca. A forma como são desenhadas define-se em **Imagem na barra ao pé do telefone**.

O programa também pode viver na área de notificação (a barra de menus no macOS) e ser chamado com um [atalho](../program/shortcuts.md).
