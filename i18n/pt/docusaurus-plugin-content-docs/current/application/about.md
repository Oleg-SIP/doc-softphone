---
title: Acerca
sidebar_position: 2
description: A versão, as atualizações, o seu país, a licença, o que contém o relatório de utilização, o formulário de comentários e com que é feito o programa.
---

**Definições → Acerca** reúne tudo sobre o próprio programa.

<Shot name="20_settings_about" alt="Definições → Acerca" />

## Versão e país {#version-and-country}

No topo estão o nome, a **Versão** (na imagem 1.0.0) e uma ligação para o site, [ai-softphone.com](https://ai-softphone.com/).

**País** diz ao programa onde está. Ajuda a escolher o melhor servidor de atualizações e abre caminho a serviços de língua e de voz alojados no seu país. **Detetar automaticamente** preenche-o.

## Atualizações {#updates}

O separador diz se tem a versão mais recente e quando foi verificada pela última vez. **Procurar atualizações** verifica agora.

**Procurar atualizações automaticamente**, ligado por omissão, verifica uma vez por dia e pouco depois de o telefone arrancar. Pede um pequeno ficheiro a um servidor, e nada é transferido ou instalado sem que o diga.

## Licença {#licence}

O programa é software livre sob a GPL-2.0-or-later. Vem sem qualquer garantia, e pode redistribuí-lo nos termos dessa licença; o texto completo vem no ficheiro chamado `LICENSE`.

## Telemetria {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Definições → Acerca: o que contém o relatório de utilização" />

O programa envia um pequeno relatório de utilização por dia. É-lhe mostrado o que contém antes de seguir o primeiro, e o separador lista-o:

| | O que é enviado |
| --- | --- |
| **Sempre enviado** | Que a aplicação foi iniciada, a sua versão e a língua da interface; a versão do sistema operativo, as definições regionais, o país e o fuso horário. |
| **Enviado também, no modo Alargado** | Os contadores de chamadas e de conversas capturadas; o fabricante e a versão da central ligada, nunca o seu endereço; quantos passos da [Visão geral](/interface/settings-overview) estão feitos, e a disposição escolhida. |
| **Nunca enviado, em nenhum modo** | Os números que marcou ou de onde lhe ligaram; contas, palavras-passe ou qualquer coisa do porta-chaves; contactos, conversas, transcrições ou gravações; qualquer coisa que tenha escrito, e quaisquer dados privados do computador. |

Cada instalação cria para si um identificador aleatório, para que os relatórios da mesma cópia do programa possam ser reconhecidos como tal. Não deriva de nada sobre si ou o seu computador, e não identifica ninguém — mas, como perdura, os relatórios que o levam podem ser relacionados entre si. Isso torna-os pseudónimos e não anónimos.

O relatório básico tem por base um interesse legítimo: saber que versões estão em uso é o que permite que uma correção chegue a quem precisa dela. Tudo o que o relatório alargado acrescenta está lá porque o escolheu, e pode mudar isso aqui a qualquer momento.

### Relatórios {#reporting}

| Opção | |
| --- | --- |
| **Alargado** | O relatório básico e o que *Enviado também* lista. Selecionado na imagem. |
| **Básico** | Apenas o que é *Sempre enviado*. |
| **Desligado** | Nenhum relatório. Disponível apenas na edição Enterprise; caso contrário a opção fica cinzenta. |

## Comentários {#feedback}

<Shot name="20c_settings_about_bottom" alt="Definições → Acerca: o formulário de comentários e os componentes com que o programa é feito" />

Um formulário que escreve aos programadores sem sair do programa.

| Campo | |
| --- | --- |
| **Assunto** e **Mensagem** | O que quer dizer. |
| **O seu nome** e **Endereço para resposta** | Ambos facultativos. Sem endereço, não há forma de lhe responder. |
| **Anexar o registo** | Acrescenta o fim do registo, cerca de 512 kB. Veja [Diagnóstico](/troubleshooting/diagnostics). |

**Enviar** fica cinzento até haver algo para enviar.

## Feito com {#built-with}

Os componentes sobre os quais o programa é feito, cada um com a sua licença: Qt 6 (GPL-2.0 ou GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (domínio público), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) e o cliente PulseAudio (LGPL-2.1-or-later). Cada um é usado sob a licença indicada ao lado; quando um componente oferece várias, é adotada a que está indicada.
