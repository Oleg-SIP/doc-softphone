---
slug: /
title: Documentação do AI Softphone
sidebar_position: 1
description: O que é o AI Softphone, em que funciona e onde está descrita cada parte do programa.
---

O [AI Softphone](https://ai-softphone.com/) é um softphone para centrais telefónicas IP que também transforma cada conversa em texto e num resumo escrito. Uma conversa pode chegar-lhe de três maneiras, e todas acabam na mesma biblioteca, com a mesma gravação, transcrição e redação:

- **uma chamada** feita ou recebida no programa, através de qualquer central IP ou fornecedor SIP;
- **uma reunião** no Zoom, Teams, Meet ou qualquer outra aplicação, gravada a partir do próprio computador;
- **uma gravação que já tem** — de um telemóvel, de um gravador ou de outro sistema — adicionada à biblioteca.

As gravações, as transcrições e o histórico ficam guardados num ficheiro que é seu. Não é preciso conta nem assinatura, e o programa é software livre sob a GPL v2.

## De uma conversa a uma redação {#from-a-conversation-to-a-write-up}

1. Chega uma conversa: uma chamada, uma reunião ou um ficheiro.
2. É gravada em dois canais, para que o que disse e o que o outro lado disse fiquem separados.
3. É transcrita, interlocutor a interlocutor, sincronizada com o áudio.
4. O modelo de língua que escolheu redige-a: resumo, tarefas, categoria, etiquetas e sinais — e pode fazer uma pergunta à conversa.

## Transferência e requisitos do sistema {#download-and-system-requirements}

O programa transfere-se gratuitamente em [ai-softphone.com](https://ai-softphone.com/#download): um instalador (`.exe`) para Windows, uma imagem de disco (`.dmg`) para macOS, e uma AppImage ou um `.deb` para Linux. Não é preciso instalar mais nada antes — o Qt, o OpenSSL e o runtime de C++ viajam dentro do pacote. Vai precisar de uma conta SIP, do seu fornecedor ou da central que gere. A gravação funciona assim que o programa está instalado; a transcrição e a redação precisam de um serviço à sua escolha ou de um modelo na sua própria máquina.

| Sistema | Requisitos |
| --- | --- |
| macOS | macOS 14.4 ou mais recente; apenas Apple silicon — um Mac com Intel não o consegue abrir, nem através do Rosetta; gráficos Metal; 160 MB de espaço em disco, mais as gravações. O sistema pede uma vez acesso ao microfone. |
| Windows | Windows 10 versão 1809 (compilação 17763) ou mais recente, e Windows 11; processador Intel ou AMD de 64 bits; Direct3D 11 ou OpenGL 2.1; 250 MB de espaço em disco, mais as gravações. |
| Linux | Ubuntu 22.04 LTS ou mais recente, Debian 12 ou mais recente, e qualquer sistema dessa época — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; biblioteca C da GNU 2.35 ou mais recente; processador Intel ou AMD de 64 bits; OpenGL 2.1 ou OpenGL ES 2.0, em X11 ou Wayland; PipeWire ou PulseAudio (ALSA onde não houver nenhum dos dois); 200 MB de espaço em disco, mais as gravações. O ícone na área de notificação precisa de um ambiente de trabalho com área de notificação de estado. |

No Linux, a AppImage funciona em qualquer distribuição dessa época: torne-a executável e arranque-a. O `.deb` precisa também do runtime de C++ do próprio sistema, vindo do GCC 13, que o Ubuntu 24.04 e o Debian 13 têm e o Ubuntu 22.04 não tem; em qualquer sistema mais antigo, use a AppImage.

A interface está disponível em trinta línguas, escolhidas em [Aspeto](/program/appearance) e mudadas sem reiniciar.

As capturas de ecrã desta documentação foram feitas em macOS e são mostradas em pequeno: clique numa para a ver em tamanho real. O programa tem o mesmo aspeto e funciona da mesma maneira nos outros sistemas.

## Primeiros passos {#first-steps}

1. [Adicione uma conta](sip-accounts/setup.md) para a sua central ou fornecedor SIP.
2. [Escolha o microfone e os altifalantes](sip-accounts/devices.md) e faça uma chamada de teste.
3. Decida [que chamadas são gravadas](recordings/call-recording.md).
4. Adicione um [reconhecedor](ai-processing/transcription.md) e um [modelo de língua](ai-processing/processing.md) se quiser transcrições e redações.

**Definições → Visão geral** mantém esta lista por si: um ponto verde marca um passo feito, um vermelho um passo que falta. Veja [Visão geral das definições](interface/settings-overview.md).

## O que ler a seguir {#where-to-read-next}

| Se quiser… | Leia |
| --- | --- |
| Orientar-se nas janelas | [Interface](interface/main-window.md) |
| Ligar o telefone à sua central | [Configurar uma conta SIP](sip-accounts/setup.md) |
| Escolher microfone, altifalantes e toque | [Dispositivos](sip-accounts/devices.md) |
| Definir os codecs, a chamada em espera e o registo de chamadas | [Definições de chamadas](sip-accounts/calls.md) |
| Pôr colegas em botões de um só toque | [Botões](sip-accounts/buttons.md) |
| Decidir que chamadas são gravadas, e durante quanto tempo | [Gravar chamadas](recordings/call-recording.md) |
| Ouvir, procurar e ler as suas conversas | [Janela de gravações](recordings/recordings-window.md) |
| Gravar uma reunião feita noutra aplicação | [Captura](capture/capture.md) |
| Escolher o reconhecedor que transforma a voz em texto | [Transcrição](ai-processing/transcription.md) |
| Decidir que IA redige as suas conversas e quanto pode custar | [Processamento](ai-processing/processing.md) |
| Mudar as categorias, as etiquetas e os sinais | [Dicionários](ai-processing/dictionaries.md) |
| Mudar a disposição, o tema, o arranque e os atalhos | [Aspeto](program/appearance.md), [Arranque](program/startup.md) e [Atalhos](program/shortcuts.md) |
| Ligar um CRM ou outro programa | [Webhooks](integration/webhooks.md) e [API REST local](integration/rest-api.md) |
| Ver o que o telefone e a central dizem um ao outro | [Diagnóstico](troubleshooting/diagnostics.md) |
| Encontrar a causa de um problema | [Problemas comuns](troubleshooting/common-problems.md) |
| Desligar partes do programa | [Módulos](application/modules.md) |
| Verificar a versão, as atualizações e o que contém o relatório de utilização | [Acerca](application/about.md) |

As páginas seguem a ordem dos separadores das **Definições**.

## Privacidade {#privacy}

- Por omissão, tudo fica no seu computador: as gravações, as transcrições e o histórico vivem num ficheiro que é seu. Nada de uma conversa — nem um número, nem um nome, nem uma palavra do que foi dito — vai para onde não o tenha enviado.
- As palavras-passe das contas, o valor do cabeçalho do webhook e o código da API ficam guardados no porta-chaves do sistema operativo, nunca num ficheiro de definições.
- Uma versão nova anuncia-se quando aparece — nunca durante uma chamada — e só é instalada quando o disser.
- O programa envia um pequeno relatório de utilização por dia. É-lhe mostrado o que contém antes de seguir o primeiro, e escolhe quanto leva: **Básico** ou **Alargado**. Nunca contém números, contactos, o endereço da sua central nem nada do que foi dito numa conversa. A lista completa está em [Acerca](/application/about#telemetry).
- O programa é software livre sob a GPL v2.
