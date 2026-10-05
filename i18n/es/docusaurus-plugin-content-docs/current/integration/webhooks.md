---
title: Webhooks
sidebar_position: 1
description: "\"Hacer que el teléfono envíe una petición a su CRM u otro sistema cuando una llamada empieza, cambia o termina — con las peticiones exactas de una llamada entrante y de una saliente.\""
---

Un webhook es una petición que el teléfono envía a la dirección que usted elija cada vez que le ocurre algo a una llamada. Así un CRM puede abrir la ficha del cliente antes del segundo timbre, registrar una llamada cuando termina o encender una luz en un panel de pared. Un webhook no necesita reglas de cortafuegos de entrada: es el teléfono el que le llama a usted. Como las peticiones salen del puesto de trabajo, la dirección solo tiene que ser accesible desde ese ordenador — una dirección interna `http://crm.local/calls` funciona igual que una dirección HTTPS pública.

Los webhooks están **apagados** tras la instalación, hasta que los encienda. Funcionan junto a la [API REST local](/integration/rest-api): un evento dice que algo ha cambiado, la API da los detalles actuales.

## Encenderlos {#turning-them-on}

Abra **Ajustes → Integración**. **Webhooks** es la primera sección de la pestaña.

<Shot name="24_webhooks" alt="Ajustes → Integración → Webhooks, con https://crm.local/calls como dirección" />

1. Marque **Contar a otro sistema lo de las llamadas**. *Se envía una petición por cada evento que marque abajo.*
2. Escriba la **Dirección** que debe recibir los eventos, por ejemplo `https://crm.local/calls`.
3. Elija el **Método**: **POST** (por defecto) o **GET**.
4. En **Eventos**, marque qué enviar: **Una llamada nueva**, **Una llamada que termina**, **Una llamada que cambia de estado**.
5. Opcionalmente, en **Autorización**, defina una cabecera que su receptor pueda comprobar: un **Nombre de la cabecera** (se sugiere `Authorization`) y un **Valor de la cabecera**. El valor se guarda en el llavero del ordenador, nunca en un archivo de ajustes; una vez guardado, el campo muestra *Guardado — escriba para reemplazarlo*.
6. Pulse **Enviar un evento de prueba** para ver que llega. Envía un evento de una llamada que nunca ocurrió, con las mismas cabeceras que uno real. Registre la petición tal cual y construya su receptor según lo que su versión envía de verdad.

La parte del programa que envía las peticiones es el módulo **Integración**; se puede apagar en [Módulos](/application/modules).

## Los eventos {#the-events}

| Se marca como | Evento | Se envía cuando |
| --- | --- | --- |
| **Una llamada nueva** | `call-started` | Una llamada entrante empieza a sonar o se hace una llamada saliente. |
| **Una llamada que cambia de estado** | `call-state-changed` | Cambia el `state` de la llamada: se contesta, cualquiera de los lados la pone en espera o la reanuda, o entra en una conferencia o sale de ella. Silenciar no lo envía. |
| **Una llamada que termina** | `call-ended` | La llamada ha terminado. |

Cada evento se puede marcar por separado. Una ficha emergente solo necesita el primero; un registro de llamadas, solo el último. `call-started` se envía primero y conviene atenderlo rápido.

## Cómo es la petición {#what-the-request-looks-like}

Con la dirección `https://crm.local/calls` y el método **POST**, el teléfono envía esto. El cuerpo es JSON, y la cabecera es la que haya definido en **Autorización**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

El `User-Agent` lleva la versión del programa y la forma en que se instaló.

## Una llamada entrante, evento a evento {#an-incoming-call-event-by-event}

Una llamada de la extensión `1020` a la cuenta `1002` suena, se contesta y la persona que contestó cuelga cuatro segundos después. Con los tres eventos marcados, el receptor recibe tres peticiones, una tras otra. Todas llevan el mismo `id` y el mismo `seance_id`.

### 1. Suena: `call-started` {#1-it-rings-call-started}

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

Es el momento de buscar a quien llama por `number` y mostrar la ficha del cliente. `state` es `ringing-in` y `duration_s` es `0`.

### 2. Se contesta: `call-state-changed` {#2-it-is-answered-call-state-changed}

Unos tres segundos después:

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

`state` es ahora `active`, y `callstate_ts` ha avanzado al momento del cambio, mientras que `callstart_ts` sigue donde estaba.

### 3. Termina: `call-ended` {#3-it-ends-call-ended}

Cuatro segundos de conversación después:

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

`state` es `ended`, `duration_s` es la duración de la conversación y `reason` dice quién la terminó: aquí `local-hangup`, porque colgó la persona de este teléfono.

## Una llamada saliente, evento a evento {#an-outgoing-call-event-by-event}

Se llama a la misma extensión desde la cuenta `1002`: la persona marca `1020`, el teléfono suena, el otro lado contesta, habla siete segundos y cuelga. El receptor recibe cuatro peticiones, una más que en una llamada entrante, porque una llamada saliente tiene un estado propio mientras suena en el otro extremo.

### 1. Se marca: `call-started` {#1-it-is-dialled-call-started}

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

`direction` es `out`, `state` es `dialing` y `dialed` contiene el número tal como se marcó. El teléfono aún no conoce el nombre del interlocutor, así que `name` está vacío.

### 2. Suena en el otro extremo: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Medio segundo después:

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

`state` es `ringing-out`.

### 3. El otro lado contesta: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Cuatro segundos después de eso:

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

`state` es `active`. El `name` ya está relleno, y la `uri` es la dirección del interlocutor tal como la indicó la respuesta. `duration_s` sigue siendo `0`: cuenta a partir de este momento.

### 4. Termina: `call-ended` {#4-it-ends-call-ended}

Siete segundos después cuelga el otro lado:

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

`duration_s` es `7`, y `reason` es `remote-hangup`, porque el otro lado terminó la llamada. Cuando cuelga usted, es `local-hangup`, como en la llamada entrante de arriba.

### Los estados, lado a lado {#the-states-side-by-side}

| | Llamada entrante | Llamada saliente |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, luego `active` |
| `call-ended` | `ended` | `ended` |

## Los campos {#the-fields}

**Todos los valores son cadenas**, incluidos números y marcas de tiempo: `"duration_s": "42"`. Un momento desconocido es una cadena vacía. Los nombres siguen una convención: `_id` es un identificador, `_ts` es tiempo Unix en milisegundos (UTC), `_s` es una duración en segundos — igual que en la API REST, donde los valores son números JSON.

| Campo | Significado |
| --- | --- |
| `event` | `call-started`, `call-state-changed` o `call-ended`. |
| `id` | La llamada: el mismo UUID que en `GET /calls` y `/calls/{id}/…`, y el mismo en todos los eventos de la llamada. |
| `seance_id` | La conversación a la que pertenece la llamada; vea [más abajo](#one-conversation-across-transfers). |
| `direction` | `in` u `out`. |
| `state` | Los mismos valores que en `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (en espera puesta por este teléfono), `onhold` (en espera puesta por el interlocutor), `conference` o `ended`. |
| `number` | El número del interlocutor. Relacione los registros de su CRM por este campo. |
| `name` | El nombre del interlocutor, de Contactos; puede estar vacío, y rellenarse más tarde durante la llamada, como en la llamada saliente de arriba. |
| `uri` | La dirección SIP del interlocutor. |
| `dialed` | Los dígitos marcados, en una llamada saliente; vacío en una entrante. |
| `account`, `account_id` | La línea en la que está la llamada: `username@server`, y el identificador de `GET /accounts`. |
| `event_ts` | Cuándo ocurrió el evento. |
| `callstart_ts` | Cuándo supo el teléfono de la llamada por primera vez. |
| `callstate_ts` | Cuándo entró la llamada en su `state` actual. |
| `duration_s` | Tiempo de conversación en segundos, de la respuesta al cuelgue. Se rellena en `call-ended` para una llamada contestada; `0` en otro caso. |
| `reason` | Cómo terminó la llamada: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; `none` hasta entonces. |
| `answered_by` | `no` si contestó una persona; si no, qué la contestó. |

## Una conversación a través de las transferencias {#one-conversation-across-transfers}

`seance_id` agrupa las llamadas que forman una conversación. Una llamada hecha o recibida desde cero inicia una nueva. Una llamada creada por una transferencia, una llamada que sustituye a otra, una consulta sobre una llamada y cada llamada unida a una conferencia conservan el `seance_id` de la llamada de la que proceden.

Entre teléfonos viaja en la cabecera SIP `X-Seance-Id`: cuando una llamada se transfiere a un compañero que también usa AI Softphone, y la centralita pasa la cabecera, ambos puestos informan del mismo `seance_id`.

## GET en lugar de POST {#get-instead-of-post}

**GET** es para receptores que no pueden recibir un cuerpo de petición, como un CRM antiguo o un script puente. Los mismos campos se envían entonces como parámetros de la consulta.

Con **GET** la dirección puede ser una plantilla: cada `[campo]` se sustituye por el valor de ese campo, codificado en porcentaje. Por ejemplo:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Los marcadores usan los nombres de campo de arriba. Las plantillas guardadas con los nombres anteriores (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) siguen funcionando.

## Cómo se entregan los eventos {#how-the-events-are-delivered}

| Comportamiento | Qué significa para usted |
| --- | --- |
| Los eventos se ponen en cola, no se envían desde la propia llamada | Un receptor lento nunca retrasa los timbres, las llamadas ni las transferencias. |
| Una cola llena descarta eventos | Si su receptor deja de responder, se pierden eventos, pero el teléfono sigue funcionando. Vigile `webhooks_dropped_total`. |
| Las entregas rechazadas e inalcanzables se cuentan | Si `webhooks_failed_total` sube mientras `webhooks_delivered_total` no se mueve, el problema está en el receptor. |
| Los eventos llegan en orden | Llamada iniciada, luego los cambios de estado, luego llamada terminada. Para ordenar eventos guardados, use `callstate_ts`, no la hora a la que llegaron. |
| Al menos una vez | El mismo evento puede llegar dos veces. `id`, `event` y `callstate_ts` juntos identifican un evento: haga que su gestor se salte uno que ya ha visto. |

## Recibir los eventos {#receiving-the-events}

La única regla para un receptor: **responder `200` enseguida y hacer el trabajo después.** Un receptor lento no ralentiza el teléfono, pero llena la cola, y una cola llena descarta eventos.

Por ejemplo, en Node.js con Express:

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

Para registrar el resultado de una llamada — contestada, perdida, rechazada — tome la entrada con el mismo `seance_id` y `number` de `GET /history?limit=20` de la [API REST](/integration/rest-api#call-history-get-history). Cuando su servicio vuelva a arrancar tras una pausa, lea `GET /history?limit=200` y guarde lo que se perdió: los webhooks para el tiempo real, el historial para rellenar los huecos.

Para ver las peticiones antes de que el CRM esté listo, apunte la **Dirección** a un inspector de peticiones en línea y pulse **Enviar un evento de prueba**.

## Cuando no llega nada {#when-nothing-arrives}

| Síntoma | Qué comprobar |
| --- | --- |
| No llega ningún webhook | Pulse **Enviar un evento de prueba**. Si llega, los eventos que necesita no están marcados; si no, la dirección es incorrecta o no es accesible desde el puesto. |
| `webhooks_failed_total` no deja de subir | El receptor rechaza las peticiones o no es accesible. Revise su registro, y si responde a una petición sencilla desde el puesto. |
| `webhooks_dropped_total` es mayor que cero | El receptor fue demasiado lento durante demasiado tiempo y la cola se llenó. Responda `200` primero y procese después. |
| El mismo evento dos veces | Es lo esperado con la entrega de al menos una vez. Trate como uno los eventos con el mismo `id`, `event` y `callstate_ts`. |
