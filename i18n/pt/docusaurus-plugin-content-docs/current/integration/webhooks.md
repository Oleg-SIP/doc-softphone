---
title: Webhooks
sidebar_position: 1
description: "\"Fazer o telefone enviar um pedido ao seu CRM ou a outro sistema quando uma chamada começa, muda ou termina — com os pedidos exatos de uma chamada a entrar e de uma a sair.\""
---

Um webhook é um pedido que o telefone envia para um endereço à sua escolha sempre que acontece algo a uma chamada. É assim que um CRM pode abrir a ficha do cliente antes do segundo toque, registar uma chamada quando termina ou acender uma luz num painel de parede. Um webhook não precisa de regras de firewall de entrada: é o telefone que lhe liga a si. Como os pedidos saem do posto de trabalho, o endereço só tem de ser acessível a partir desse computador — um endereço interno `http://crm.local/calls` funciona tão bem como um endereço HTTPS público.

Os webhooks estão **desligados** depois da instalação, até os ligar. Funcionam a par da [API REST local](/integration/rest-api): um evento diz que algo mudou, a API dá os detalhes atuais.

## Ligá-los {#turning-them-on}

Abra **Definições → Integração**. **Webhooks** é a primeira secção do separador.

<Shot name="24_webhooks" alt="Definições → Integração → Webhooks, com https://crm.local/calls como endereço" />

1. Marque **Contar a outro sistema sobre as chamadas**. *É enviado um pedido por cada evento que marcar abaixo.*
2. Escreva o **Endereço** que deve receber os eventos, por exemplo `https://crm.local/calls`.
3. Escolha o **Método**: **POST** (por omissão) ou **GET**.
4. Em **Eventos**, marque o que enviar: **Uma chamada nova**, **Uma chamada a terminar**, **Uma chamada a mudar de estado**.
5. Opcionalmente, em **Autorização**, defina um cabeçalho que o seu recetor possa verificar: um **Nome do cabeçalho** (é sugerido `Authorization`) e um **Valor do cabeçalho**. O valor é guardado no porta-chaves do computador, nunca num ficheiro de definições; depois de guardado, o campo mostra *Guardado — escreva para o substituir*.
6. Carregue em **Enviar um evento de teste** para ver se chega. Envia um evento de uma chamada que nunca aconteceu, com os mesmos cabeçalhos de um verdadeiro. Registe o pedido em bruto e construa o seu recetor com base no que a sua versão realmente envia.

A parte do programa que envia os pedidos é o módulo **Integração**; pode ser desligado em [Módulos](/application/modules).

## Os eventos {#the-events}

| Marcado como | Evento | Enviado quando |
| --- | --- | --- |
| **Uma chamada nova** | `call-started` | Uma chamada a entrar começa a tocar ou é feita uma chamada a sair. |
| **Uma chamada a mudar de estado** | `call-state-changed` | O `state` da chamada muda: é atendida, posta em espera ou retomada por qualquer dos lados, ou entra numa conferência ou sai dela. Silenciar não o envia. |
| **Uma chamada a terminar** | `call-ended` | A chamada terminou. |

Cada evento pode ser marcado sozinho. Uma ficha que se abre na chamada só precisa do primeiro; um registo de chamadas só do último. O `call-started` é enviado primeiro e deve ser tratado depressa.

## Como é o pedido {#what-the-request-looks-like}

Com o endereço `https://crm.local/calls` e o método **POST**, o telefone envia isto. O corpo é JSON, e o cabeçalho é o que definiu em **Autorização**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

O `User-Agent` leva a versão do programa e a forma como foi instalado.

## Uma chamada a entrar, evento a evento {#an-incoming-call-event-by-event}

Uma chamada da extensão `1020` para a conta `1002` toca, é atendida, e quem atendeu desliga quatro segundos depois. Com os três eventos marcados, o recetor recebe três pedidos, um a seguir ao outro. Todos levam o mesmo `id` e o mesmo `seance_id`.

### 1. Toca: `call-started` {#1-it-rings-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021263333",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791021263333",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

É o momento de procurar quem liga pelo `number` e mostrar a ficha do cliente. O `state` é `ringing-in` e o `duration_s` é `0`.

### 2. É atendida: `call-state-changed` {#2-it-is-answered-call-state-changed}

Cerca de três segundos depois:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021266126",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791021266131",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

O `state` é agora `active`, e o `callstate_ts` avançou para o momento da mudança, enquanto o `callstart_ts` fica onde estava.

### 3. Termina: `call-ended` {#3-it-ends-call-ended}

Quatro segundos de conversa depois:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021270400",
  "dialed": "",
  "direction": "in",
  "duration_s": "4",
  "event": "call-ended",
  "event_ts": "1791021270406",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

O `state` é `ended`, o `duration_s` é a duração da conversa e o `reason` diz quem a terminou: aqui `local-hangup`, porque foi a pessoa deste telefone que desligou.

## Uma chamada a sair, evento a evento {#an-outgoing-call-event-by-event}

A mesma extensão é chamada a partir da conta `1002`: a pessoa marca `1020`, o telefone toca, o outro lado atende, fala sete segundos e desliga. O recetor recebe quatro pedidos, mais um do que numa chamada a entrar, porque uma chamada a sair tem um estado próprio enquanto toca do outro lado.

### 1. É marcada: `call-started` {#1-it-is-dialled-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791023883072",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "dialing",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

O `direction` é `out`, o `state` é `dialing` e o `dialed` tem o número tal como foi marcado. O telefone ainda não sabe o nome do interlocutor, por isso o `name` está vazio.

### 2. Toca do outro lado: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Meio segundo depois:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883591",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023883591",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ringing-out",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

O `state` é `ringing-out`.

### 3. O outro lado atende: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Quatro segundos depois disso:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023887072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023887076",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

O `state` é `active`. O `name` está agora preenchido, e o `uri` é o endereço do interlocutor tal como a resposta o indicou. O `duration_s` continua a `0`: conta a partir deste momento.

### 4. Termina: `call-ended` {#4-it-ends-call-ended}

Sete segundos depois, o outro lado desliga:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023894781",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "7",
  "event": "call-ended",
  "event_ts": "1791023894789",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

O `duration_s` é `7`, e o `reason` é `remote-hangup`, porque foi o outro lado que terminou a chamada. Quando é você a desligar, é `local-hangup`, como na chamada a entrar acima.

### Os estados, lado a lado {#the-states-side-by-side}

| | Chamada a entrar | Chamada a sair |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, depois `active` |
| `call-ended` | `ended` | `ended` |

## Os campos {#the-fields}

**Todos os valores são cadeias de texto**, incluindo números e marcas temporais: `"duration_s": "42"`. Um momento desconhecido é uma cadeia vazia. Os nomes seguem uma convenção: `_id` é um identificador, `_ts` é tempo Unix em milissegundos (UTC), `_s` é uma duração em segundos — como na API REST, onde os valores são números JSON.

| Campo | Significado |
| --- | --- |
| `event` | `call-started`, `call-state-changed` ou `call-ended`. |
| `id` | A chamada: o mesmo UUID que em `GET /calls` e `/calls/{id}/…`, e o mesmo em todos os eventos da chamada. |
| `seance_id` | A conversa a que a chamada pertence; veja [abaixo](#one-conversation-across-transfers). |
| `direction` | `in` ou `out`. |
| `state` | Os mesmos valores que em `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (em espera por este telefone), `onhold` (em espera pelo interlocutor), `conference` ou `ended`. |
| `number` | O número do interlocutor. Faça corresponder os registos do seu CRM por este campo. |
| `name` | O nome do interlocutor, dos Contactos; pode estar vazio, e ser preenchido mais tarde na chamada, como na chamada a sair acima. |
| `uri` | O endereço SIP do interlocutor. |
| `dialed` | Os dígitos marcados, numa chamada a sair; vazio numa chamada a entrar. |
| `account`, `account_id` | A linha em que está a chamada: `username@server`, e o identificador de `GET /accounts`. |
| `event_ts` | Quando o evento aconteceu. |
| `callstart_ts` | Quando o telefone soube da chamada pela primeira vez. |
| `callstate_ts` | Quando a chamada entrou no seu `state` atual. |
| `duration_s` | Tempo de conversa em segundos, do atendimento ao desligar. Definido em `call-ended` para uma chamada atendida; `0` nos outros casos. |
| `reason` | Como a chamada terminou: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; `none` até lá. |
| `answered_by` | `no` se foi uma pessoa a atender; caso contrário, o que atendeu. |

## Uma conversa através das transferências {#one-conversation-across-transfers}

O `seance_id` agrupa as chamadas que formam uma conversa. Uma chamada feita ou recebida do zero começa uma nova. Uma chamada criada por uma transferência, uma chamada que substitui outra, uma consulta sobre uma chamada e cada chamada juntada a uma conferência mantêm o `seance_id` da chamada de onde vieram.

Entre telefones viaja no cabeçalho SIP `X-Seance-Id`: quando uma chamada é transferida para um colega que também usa o AI Softphone, e a central passa o cabeçalho, ambos os postos comunicam o mesmo `seance_id`.

## GET em vez de POST {#get-instead-of-post}

O **GET** é para recetores que não conseguem receber um corpo de pedido, como um CRM mais antigo ou um script de ponte. Os mesmos campos são então enviados como parâmetros da consulta.

Com **GET**, o endereço pode ser um modelo: cada `[campo]` é substituído pelo valor desse campo, codificado em percentagem. Por exemplo:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Os marcadores usam os nomes de campo acima. Os modelos guardados com os nomes antigos (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) continuam a funcionar.

## Como os eventos são entregues {#how-the-events-are-delivered}

| Comportamento | O que significa para si |
| --- | --- |
| Os eventos são postos em fila, não enviados a partir da própria chamada | Um recetor lento nunca atrasa toques, chamadas ou transferências. |
| Uma fila cheia descarta eventos | Se o seu recetor deixar de responder, perdem-se eventos, mas o telefone continua a funcionar. Vigie `webhooks_dropped_total`. |
| As entregas recusadas e inalcançáveis são contadas | `webhooks_failed_total` a subir enquanto `webhooks_delivered_total` fica parado aponta para o recetor. |
| Os eventos chegam por ordem | Chamada iniciada, depois as mudanças de estado, depois chamada terminada. Para ordenar eventos guardados, use `callstate_ts`, não a hora a que chegaram. |
| Pelo menos uma vez | O mesmo evento pode chegar duas vezes. `id`, `event` e `callstate_ts` juntos identificam um evento: faça o seu processador ignorar um que já viu. |

## Receber os eventos {#receiving-the-events}

A única regra para um recetor: **responder `200` de imediato, e fazer o trabalho depois.** Um recetor lento não abranda o telefone, mas enche a fila, e uma fila cheia descarta eventos.

Por exemplo, em Node.js com Express:

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // the Header value from Settings

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST sends a JSON body, GET sends query parameters
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // answer first

  setImmediate(() => {                          // then do the work
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // your code
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // your code
    }
  });
});

app.listen(8080);
```

Para registar o resultado de uma chamada — atendida, perdida, recusada — tome a entrada com o mesmo `seance_id` e `number` de `GET /history?limit=20` da [API REST](/integration/rest-api#call-history-get-history). Quando o seu serviço voltar a arrancar depois de uma pausa, leia `GET /history?limit=200` e guarde o que perdeu: os webhooks para o tempo real, o histórico para preencher as falhas.

Para ver os pedidos antes de o CRM estar pronto, aponte o **Endereço** para um inspetor de pedidos online e carregue em **Enviar um evento de teste**.

## Quando nada chega {#when-nothing-arrives}

| Sintoma | O que verificar |
| --- | --- |
| Nenhum webhook | Carregue em **Enviar um evento de teste**. Se chegar, os eventos de que precisa não estão marcados; se não, o endereço está errado ou não é acessível a partir do posto. |
| `webhooks_failed_total` não para de subir | O recetor recusa os pedidos ou não é alcançável. Veja o registo dele, e se responde a um pedido simples a partir do posto. |
| `webhooks_dropped_total` está acima de zero | O recetor foi demasiado lento durante demasiado tempo e a fila encheu. Responda `200` primeiro e processe depois. |
| O mesmo evento duas vezes | É de esperar com a entrega pelo menos uma vez. Trate como um só os eventos com os mesmos `id`, `event` e `callstate_ts`. |
