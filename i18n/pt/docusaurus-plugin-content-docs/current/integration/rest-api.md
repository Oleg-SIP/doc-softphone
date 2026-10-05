---
title: API REST local
sidebar_position: 2
description: Deixar outros programas deste computador conduzir o telefone — fazer e controlar chamadas, ler contactos, histórico e contas.
---

O AI Softphone tem uma API REST para integração CTI: um programa no mesmo computador pode fazer e controlar chamadas, ler os contactos, o registo de chamadas e as contas SIP, e acompanhar as chamadas em curso. Sem SDK, sem intermediário na nuvem e sem nenhum serviço à escuta exposto à rede. Os pedidos e as respostas são JSON, por isso basta o `curl` ou qualquer cliente HTTP.

A API está **desligada depois da instalação**; nada está à escuta até a ligar. Depois, só escuta na interface de loopback — *uma pequena interface web que só responde a este computador* — e não pode ser alcançada a partir da rede do escritório, de uma VPN ou de outra máquina.

Use a API quando o seu programa precisar de dados do telefone ou tiver de controlar uma chamada. Use os [webhooks](/integration/webhooks) quando tiver de reagir às chamadas à medida que acontecem, sem consultar repetidamente. A maioria das integrações usa os dois; são independentes um do outro.

## Ligá-la {#turning-it-on}

Abra **Definições → Integração** e vá a **Controlo local**.

<Shot name="17b_settings_integration_scrolled" alt="Definições → Integração: controlo local" />

1. Ligue **Deixar outros programas deste computador conduzir o telefone**. O servidor arranca de imediato.
2. Mantenha a **Porta** por omissão, `8377`, a não ser que outro programa já a use.
3. Opcionalmente, defina um **Código**. Depois de guardado, o campo mostra *Guardado — escreva para o substituir*.
4. Em **Acesso**, escolha os grupos a abrir: **Contactos**, **Registo de chamadas**, **As chamadas e o seu controlo**, **Contas**, **Definições**, **Contadores** (as métricas). Um grupo desligado não é filtrado: simplesmente não é servido.
5. Teste-a: `curl http://127.0.0.1:8377/accounts`. Se a resposta for JSON, a API funciona.

Não é instalado nenhum serviço à parte e não é preciso reiniciar. A parte do programa que faz isto pode ser desligada em [Módulos](/application/modules) (**Integração**).

## A própria página da API {#the-apis-own-page}

**Abrir a própria página da API** abre `http://127.0.0.1:8377` num navegador. O endereço responde com uma lista de tudo o que serve, em inglês; os endereços que leem algo são ligações que pode seguir.

<Shot name="23_api_page" alt="A própria página da API, http://127.0.0.1:8377/, aberta num navegador" />

## O acesso e o código {#access-and-the-token}

O que um programa pode fazer depende de mudar dados guardados ou não, e não de ler:

- **Sem código**, qualquer programa do computador pode ler tudo nos grupos ligados e controlar chamadas: fazer, atender, desligar, pôr em espera, retomar, transferir e enviar DTMF.
- **Com o código** no cabeçalho `Authorization`, pode também usar os pontos de acesso que mudam o que está guardado. Sem o código, esses pontos de acesso nem são servidos nem aparecem na própria página da API.

O código é guardado no porta-chaves do computador, não no ficheiro de definições, e nunca é devolvido por `/settings`.

:::caution
Sem código, qualquer programa a correr neste computador pode controlar o telefone, incluindo atender chamadas. Num posto pessoal isso costuma ser aceitável. Numa máquina partilhada ou gerida, defina um código e trate-o como qualquer outra palavra-passe.
:::

## Pontos de acesso {#endpoints}

O endereço base é `http://127.0.0.1:8377`. Os pontos de acesso abaixo não precisam de código.

| Método | Caminho | Faz |
| --- | --- | --- |
| GET | `/metrics` | Os contadores, em formato Prometheus. |
| GET | `/ui` | A lista de gravações, como página HTML. |
| GET | `/ui/recordings/{id}` | Uma gravação com a sua transcrição, como página HTML. |
| GET | `/ui/recordings/{id}/audio` | O áudio da página acima. |
| GET | `/contacts` | Os contactos. |
| GET | `/contacts/{id}` | Um único contacto. |
| GET | `/history` | O registo de chamadas, da mais recente para a mais antiga. Aceita `?limit=`, `?missed=true` e `?declined=true`. |
| GET | `/calls` | As chamadas em curso. |
| POST | `/calls` | Faz uma chamada: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Atende uma chamada. |
| POST | `/calls/{id}/hangup` | Desliga uma chamada. |
| POST | `/calls/{id}/hold` | Põe uma chamada em espera. |
| POST | `/calls/{id}/resume` | Tira-a da espera. |
| POST | `/calls/{id}/dtmf` | Envia tons: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Transfere a chamada: `{"target": "..."}`. |
| GET | `/accounts` | As contas SIP e o seu estado de registo. Nunca uma palavra-passe. |
| GET | `/settings` | Toda a configuração, sem os segredos. |
| GET | `/taxonomy` | Categorias, etiquetas e sinais, com os seus códigos. |

Cada identificador é um UUID emitido pelo telefone: o `id` de uma chamada vem de `/calls` ou da resposta a `POST /calls`, o `id` de uma conta de `/accounts`.

Os nomes dos campos estão em snake_case e o final indica o tipo: `_id` é uma referência a um UUID, `_ts` é um momento em milissegundos Unix (UTC), `_s` é uma duração em segundos. O mesmo vale para os webhooks; só `/settings` mantém nomes próprios. Na API REST estes valores são números JSON, e um momento desconhecido é `null`.

## Exemplo: fazer uma chamada {#example-placing-a-call}

`POST /calls` faz uma chamada a sair. O corpo é JSON com o `number` a marcar e, opcionalmente, o `account_id` da conta de onde ligar:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

A resposta é o identificador da nova chamada:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- O `number` é obrigatório. Sem ele, a resposta é `400 {"error":"a call needs a number"}` e nada é marcado.
- O número é completado na conta escolhida tal como o marcador o completa: `1020` é enviado como `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` completa o seu `target` da mesma maneira; um destino que já tenha um esquema ou um `@` é enviado tal como está.
- O `account_id` é opcional; obtenha-o em `GET /accounts`. Sem ele, a chamada sai pela conta selecionada na janela principal.
- Use o `id` em `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` e `transfer`. Os [webhooks](/integration/webhooks#an-outgoing-call-event-by-event) desta chamada levam o mesmo `id`.

### A partir de uma página web: clicar para ligar {#from-a-web-page-click-to-call}

Uma página que chama `127.0.0.1` chega ao computador em que o navegador corre — o mesmo em que corre o telefone —, por isso um botão de clicar para ligar num CRM não precisa de servidor próprio:

```javascript
async function dial(number) {
  const r = await fetch("http://127.0.0.1:8377/calls", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number }),
  });
  if (!r.ok) console.warn("softphone:", (await r.json()).error);
}
```

## O que as respostas contêm {#what-the-answers-contain}

### Chamadas em curso: `GET /calls` {#calls-in-progress-get-calls}

Cada chamada tem o seu `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` e `callstate_ts`.

- O `state` é `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (em espera por este telefone), `onhold` (em espera pelo interlocutor), `conference` ou `ended`. Quando se aplica mais do que um, `conference` sobrepõe-se a `hold`, e `hold` a `onhold`.
- O `muted` diz se o microfone está silenciado na chamada; silenciar não muda o `state`.
- O `seance_id` é a conversa: as chamadas ligadas por uma transferência, uma consulta ou uma conferência partilham-no.
- O `event_ts` é quando a resposta foi gerada. Compare-o com o `callstate_ts` para ver há quanto tempo a chamada está no seu estado, sem depender do seu próprio relógio.

### Contas: `GET /accounts` {#accounts-get-accounts}

Cada conta tem o seu `id` (o `account_id` em todo o lado), as suas definições — `transport` (`udp`, `tcp` ou `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` e outras —, se está `enabled`, e o seu `state` na central: `registered` enquanto a linha está ativa. As palavras-passe nunca são incluídas.

### Registo de chamadas: `GET /history` {#call-history-get-history}

Da mais recente para a mais antiga, 100 entradas a não ser que `?limit=` diga outra coisa. `?missed=true` devolve só as chamadas perdidas, `?declined=true` só as chamadas que este telefone recusou.

| Campo | Significado |
| --- | --- |
| `id` | O identificador próprio da entrada do histórico. Não é o `id` de chamada de `/calls` e dos webhooks; o `seance_id` liga os dois. |
| `outcome` | A classificação principal: `answered`, `missed`, `declined` ou `failed`. |
| `answered` | `true` ou `false`. |
| `duration_s` | `0` para uma chamada que nunca chegou a ser estabelecida. |
| `number`, `uri` | O interlocutor, como número e como endereço SIP. |
| `name` | Dos Contactos se o número for conhecido, senão vazio. Faça corresponder pelo `number`, não por este. |
| `dialed` | Os dígitos marcados, numa chamada a sair; vazio numa a entrar. |
| `account`, `account_id` | A linha em que a chamada esteve. |
| `reason` | Como terminou: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` se foi uma pessoa a atender; caso contrário, o que atendeu a chamada. |

### Contactos: `GET /contacts` {#contacts-get-contacts}

Cada contacto tem o seu `id`, `name`, `number` e a linha a que pertence, `account_id` e `account`; um `account` vazio significa que o contacto não está associado a nenhuma linha.

### Gravações {#recordings}

As gravações e as transcrições não são dadas em JSON. A API serve-as como páginas HTML, `/ui` e `/ui/recordings/{id}`: no seu CRM, ponha ligações para estas páginas em vez de andar a mover áudio. A ligação abre no computador que guarda a gravação, e o áudio nunca sai dele.

## Taxonomia e definições {#taxonomy-and-settings}

Cada entrada de `/taxonomy` tem um `code` constante, um `title` e uma `description` na língua da interface, um `kind` (`category`, `tag` ou `red_flag`) e, para os sinais, uma `severity`. **Faça corresponder pelo `code`, nunca pelo `title`**: os títulos vêm na língua definida no telefone. Uma entrada com `retired: true` é mantida para que as chamadas antigas continuem a resolver-se; já não é atribuída a chamadas novas. Carregue a taxonomia uma vez no arranque para fazer corresponder as palavras do telefone aos seus próprios campos.

`/settings` devolve a configuração exceto os segredos: dispositivos de áudio e volumes, prioridade dos codecs, aspeto e língua, arranque, atalhos, o nível de diagnóstico e o estado de ambas as integrações — útil para uma ferramenta de apoio que tenha de verificar um posto sem partilhar o ecrã. `api.disabled` lista os grupos de acesso desligados e `webhooks.silenced` os eventos desligados; listas vazias significam que está tudo ligado. Nunca inclui a palavra-passe SIP, o código da API nem o valor do cabeçalho do webhook.

## Erros {#errors}

Cada erro é JSON com uma única chave `error`, pensada para pessoas, não para ser analisada.

| Estado | Corpo | Significado |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | O caminho não existe, ou o seu grupo de acesso está desligado; ambos dão de propósito a mesma resposta. |
| 404 | `{"error":"no contact with that id"}` | O caminho está certo, o identificador não. |
| 400 | `{"error":"no call with that id"}` | A chamada terminou, ou nunca existiu. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` sem número. Nada foi marcado. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` sem dígitos. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` sem destino. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | A conta da chamada foi removida durante a chamada, por isso o destino não pode ser completado. Nada foi enviado à central. |

Os pedidos recusados são contados em `api_requests_refused_total`, por isso uma integração que falha em silêncio aparece nas métricas, e não só nos seus próprios registos.

## Métricas {#metrics}

`GET /metrics` devolve todos os contadores do telefone, cada um com um texto de ajuda. Recolha-os com o Prometheus ou leia-os à mão.

| Contador | Conta |
| --- | --- |
| `calls_incoming_total` | Chamadas a entrar recebidas. |
| `calls_outgoing_total` | Chamadas a sair feitas. |
| `calls_answered_total` | Chamadas que foram atendidas. |
| `calls_missed_total` | Chamadas a entrar que não foram atendidas. |
| `calls_declined_total` | Chamadas recusadas aqui ou pelo outro lado. |
| `calls_failed_total` | Chamadas que não foi possível estabelecer. |
| `registrations_succeeded_total` | Registos SIP bem-sucedidos. |
| `registrations_failed_total` | Registos SIP recusados ou expirados. |
| `webhooks_delivered_total` | Webhooks aceites pelo recetor. |
| `webhooks_failed_total` | Webhooks recusados ou não entregues. |
| `webhooks_dropped_total` | Webhooks descartados porque a fila estava cheia. |
| `api_requests_total` | Pedidos tratados pela API. |
| `api_requests_refused_total` | Pedidos recusados: código errado, grupo desligado ou caminho desconhecido. |

## Atualizar uma integração antiga {#updating-an-older-integration}

As versões anteriores usavam nomes em camelCase e identificadores curtos. `accountId` passou a `account_id`, `startedAt` a `callstart_ts`, `durationSeconds` a `duration_s`, `answeredBy` a `answered_by`, e o campo de webhook `at` a `event_ts`. As chamadas e as contas são identificadas só por UUID: `runtimeId` e identificadores como `call-3` ou `account-2` já não são devolvidos nem aceites.

## Quando não funciona {#when-it-does-not-work}

| Sintoma | O que verificar |
| --- | --- |
| Ligação recusada em `127.0.0.1:8377` | O controlo local está desligado, o telefone não está a funcionar, ou a porta foi mudada. |
| `404 {"error":"no such endpoint"}` para um caminho desta página | O seu grupo de acesso está desligado. |
| A leitura funciona, a escrita é recusada | Os pontos de acesso que mudam dados guardados precisam do código no cabeçalho `Authorization`. |
| Os títulos das categorias não estão em inglês | Os títulos seguem a língua da interface. Faça corresponder pelo `code` de `/taxonomy`. |
| Faltam `accountId`, `startedAt` ou `at` | A integração foi escrita para os nomes antigos; veja acima. |

Para um problema de registo ou da própria chamada, abra o [Diagnóstico](/troubleshooting/diagnostics).
