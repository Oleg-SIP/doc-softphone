---
title: API REST local
sidebar_position: 2
description: Dejar que otros programas de este ordenador manejen el teléfono — hacer y controlar llamadas, leer contactos, historial y cuentas.
---

AI Softphone tiene una API REST para la integración CTI: un programa del mismo ordenador puede hacer y controlar llamadas, leer los contactos, el historial de llamadas y las cuentas SIP, y vigilar las llamadas en curso. Sin SDK, sin intermediario en la nube y sin ningún puerto de escucha expuesto a la red. Las peticiones y las respuestas son JSON, así que basta con `curl` o cualquier cliente HTTP.

La API está **apagada tras la instalación**; nada escucha hasta que la encienda. Entonces solo escucha en la interfaz de bucle local — *una pequeña interfaz web que solo responde a este ordenador* — y no se puede alcanzar desde la red de la oficina, una VPN u otra máquina.

Use la API cuando su programa necesite datos del teléfono o tenga que controlar una llamada. Use los [webhooks](/integration/webhooks) cuando tenga que reaccionar a las llamadas a medida que ocurren, sin sondear. La mayoría de las integraciones usan ambos; son independientes entre sí.

## Encenderla {#turning-it-on}

Abra **Ajustes → Integración** y vaya a **Control local**.

<Shot name="17b_settings_integration_scrolled" alt="Ajustes → Integración: control local" />

1. Encienda **Dejar que otros programas de este ordenador manejen el teléfono**. El servidor arranca al momento.
2. Mantenga el **Puerto** por defecto, `8377`, salvo que otro programa ya lo use.
3. Opcionalmente, ponga un **Token**. Una vez guardado, el campo muestra *Guardado — escriba para reemplazarlo*.
4. En **Acceso**, elija los grupos que abrir: **Contactos**, **Historial de llamadas**, **Las llamadas y su control**, **Cuentas**, **Ajustes**, **Contadores** (las métricas). Un grupo apagado no se filtra: directamente no se sirve.
5. Pruébela: `curl http://127.0.0.1:8377/accounts`. Si la respuesta es JSON, la API funciona.

No se instala ningún servicio aparte y no hace falta reiniciar. La parte del programa que hace esto se puede apagar en [Módulos](/application/modules) (**Integración**).

## La página de la propia API {#the-apis-own-page}

**Abrir la página de la propia API** abre `http://127.0.0.1:8377` en un navegador. La dirección responde con una lista de todo lo que sirve, en inglés; las direcciones que leen algo son enlaces que puede seguir.

<Shot name="23_api_page" alt="La página de la propia API, http://127.0.0.1:8377/, abierta en un navegador" />

## El acceso y el token {#access-and-the-token}

Lo que puede hacer un programa depende de si cambia datos guardados, no de si lee:

- **Sin token**, cualquier programa del ordenador puede leer todo lo de los grupos encendidos y controlar llamadas: hacer, contestar, colgar, poner en espera, reanudar, transferir y enviar DTMF.
- **Con el token** en la cabecera `Authorization`, también puede usar los puntos de acceso que cambian lo guardado. Sin el token, esos puntos de acceso ni se sirven ni aparecen en la página de la propia API.

El token se guarda en el llavero del ordenador, no en el archivo de ajustes, y `/settings` nunca lo devuelve.

:::caution
Sin token, cualquier programa que se ejecute en este ordenador puede controlar el teléfono, incluido contestar llamadas. En un puesto personal eso suele ser aceptable. En una máquina compartida o gestionada, ponga un token y trátelo como cualquier otra contraseña. El token solo protege las peticiones que cambian datos guardados, no las llamadas: para que otros programas no puedan tocarlas, apague **Las llamadas y su control** en **Acceso**.
:::

## Puntos de acceso {#endpoints}

La dirección base es `http://127.0.0.1:8377`. Los puntos de acceso de abajo no necesitan token.

| Método | Ruta | Hace |
| --- | --- | --- |
| GET | `/metrics` | Los contadores, en formato Prometheus. |
| GET | `/ui` | La lista de grabaciones, como página HTML. |
| GET | `/ui/recordings/{id}` | Una grabación con su transcripción, como página HTML. |
| GET | `/ui/recordings/{id}/audio` | El audio de la página anterior. |
| GET | `/contacts` | Los contactos. |
| GET | `/contacts/{id}` | Un solo contacto. |
| GET | `/history` | El historial de llamadas, con la más reciente primero. Admite `?limit=`, `?missed=true` y `?declined=true`. |
| GET | `/calls` | Las llamadas en curso. |
| POST | `/calls` | Hace una llamada: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Contesta una llamada. |
| POST | `/calls/{id}/hangup` | Cuelga una llamada. |
| POST | `/calls/{id}/hold` | Pone una llamada en espera. |
| POST | `/calls/{id}/resume` | La saca de la espera. |
| POST | `/calls/{id}/dtmf` | Envía tonos: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Transfiere la llamada: `{"target": "..."}`. |
| GET | `/accounts` | Las cuentas SIP y su estado de registro. Nunca una contraseña. |
| GET | `/settings` | Toda la configuración, sin los secretos. |
| GET | `/taxonomy` | Categorías, etiquetas y señales, con sus códigos. |

Cada identificador es un UUID emitido por el teléfono: el `id` de una llamada viene de `/calls` o de la respuesta a `POST /calls`, el `id` de una cuenta de `/accounts`.

Los nombres de campo están en snake_case y la terminación indica el tipo: `_id` es una referencia a un UUID, `_ts` es un momento en milisegundos Unix (UTC), `_s` es una duración en segundos. Lo mismo vale para los webhooks; solo `/settings` mantiene nombres propios. En la API REST estos valores son números JSON, y un momento desconocido es `null`.

## Ejemplo: hacer una llamada {#example-placing-a-call}

`POST /calls` hace una llamada saliente. El cuerpo es JSON con el `number` que marcar y, opcionalmente, el `account_id` de la cuenta desde la que llamar:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

La respuesta es el identificador de la nueva llamada:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` es obligatorio. Sin él, la respuesta es `400 {"error":"a call needs a number"}` y no se marca nada.
- El número se completa en la cuenta elegida igual que lo completa el marcador: `1020` se envía como `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` completa su `target` del mismo modo; un destino que ya tiene esquema o `@` se envía tal cual.
- `account_id` es opcional; tómelo de `GET /accounts`. Sin él, la llamada sale por la cuenta seleccionada en la ventana principal.
- Use el `id` en `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` y `transfer`. Los [webhooks](/integration/webhooks#an-outgoing-call-event-by-event) de esta llamada llevan el mismo `id`.

### Desde una página web: clic para llamar {#from-a-web-page-click-to-call}

Una página que llama a `127.0.0.1` llega al ordenador en el que se ejecuta el navegador — el mismo en el que se ejecuta el teléfono —, así que un botón de clic para llamar en un CRM no necesita servidor propio:

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

## Qué contienen las respuestas {#what-the-answers-contain}

### Llamadas en curso: `GET /calls` {#calls-in-progress-get-calls}

Cada llamada tiene su `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` y `callstate_ts`.

- `state` es `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (en espera puesta por este teléfono), `onhold` (en espera puesta por el interlocutor), `conference` o `ended`. Cuando se aplica más de uno, `conference` gana a `hold`, y `hold` a `onhold`.
- `muted` dice si el micrófono está silenciado en la llamada; silenciar no cambia `state`.
- `seance_id` es la conversación: las llamadas enlazadas por una transferencia, una consulta o una conferencia lo comparten.
- `event_ts` es cuándo se generó la respuesta. Compárelo con `callstate_ts` para saber cuánto lleva la llamada en su estado, sin depender de su propio reloj.

### Cuentas: `GET /accounts` {#accounts-get-accounts}

Cada cuenta tiene su `id` (el `account_id` en todas partes), sus ajustes — `transport` (`udp`, `tcp` o `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` y otros —, si está `enabled`, y su `state` en la centralita: `registered` mientras la línea está activa. Nunca se incluyen contraseñas.

### Historial de llamadas: `GET /history` {#call-history-get-history}

Con la más reciente primero, 100 entradas salvo que `?limit=` diga otra cosa. `?missed=true` devuelve solo las llamadas perdidas, `?declined=true` solo las llamadas que este teléfono rechazó.

| Campo | Significado |
| --- | --- |
| `id` | El identificador propio de la entrada del historial. No es el `id` de llamada de `/calls` ni de los webhooks; `seance_id` relaciona ambos. |
| `outcome` | La clasificación principal: `answered`, `missed`, `declined` o `failed`. |
| `answered` | `true` o `false`. |
| `duration_s` | `0` para una llamada que nunca llegó a conectarse. |
| `number`, `uri` | El interlocutor, como número y como dirección SIP. |
| `name` | De Contactos si el número es conocido; si no, vacío. Relacione por `number`, no por esto. |
| `dialed` | Los dígitos marcados, en una llamada saliente; vacío en una entrante. |
| `account`, `account_id` | La línea en la que estuvo la llamada. |
| `reason` | Cómo terminó: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` si contestó una persona; si no, qué contestó la llamada. |

### Contactos: `GET /contacts` {#contacts-get-contacts}

Cada contacto tiene su `id`, `name`, `number` y la línea a la que pertenece, `account_id` y `account`; un `account` vacío significa que el contacto no está ligado a ninguna línea.

### Grabaciones {#recordings}

Las grabaciones y las transcripciones no se entregan como JSON. La API las sirve como páginas HTML, `/ui` y `/ui/recordings/{id}`: enlace a estas páginas desde su CRM en lugar de mover audio de un lado a otro. El enlace se abre en el ordenador que guarda la grabación, y el audio nunca sale de él.

## Taxonomía y ajustes {#taxonomy-and-settings}

Cada entrada de `/taxonomy` tiene un `code` constante, un `title` y una `description` en el idioma de la interfaz, un `kind` (`category`, `tag` o `red_flag`) y, en las señales, una `severity`. **Relacione por `code`, nunca por `title`**: los títulos vienen en el idioma configurado en el teléfono. Una entrada con `retired: true` se conserva para que las llamadas antiguas sigan resolviéndose; ya no se asigna a llamadas nuevas. Cargue la taxonomía una vez al arrancar para relacionar las palabras del teléfono con sus propios campos.

`/settings` devuelve la configuración salvo los secretos: dispositivos de audio y volúmenes, prioridad de códecs, apariencia e idioma, arranque, atajos, el nivel de diagnóstico y el estado de ambas integraciones — útil para una herramienta de soporte que tenga que revisar un puesto sin compartir la pantalla. `api.disabled` lista los grupos de acceso apagados y `webhooks.silenced` los eventos apagados; listas vacías significan que todo está encendido. Nunca incluye la contraseña SIP, el token de la API ni el valor de la cabecera del webhook.

## Errores {#errors}

Cada error es JSON con una sola clave `error`, pensada para personas, no para analizarla.

| Estado | Cuerpo | Significado |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | La ruta no existe, o su grupo de acceso está apagado; ambos casos dan la misma respuesta a propósito. |
| 404 | `{"error":"no contact with that id"}` | La ruta es correcta, el identificador no. |
| 400 | `{"error":"no call with that id"}` | La llamada ha terminado, o nunca existió. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` sin número. No se marcó nada. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` sin dígitos. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` sin destino. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | La cuenta de la llamada se eliminó durante la llamada, así que el destino no se puede completar. No se envió nada a la centralita. |

Las peticiones rechazadas se cuentan en `api_requests_refused_total`, así que una integración que falla en silencio se ve en las métricas, no solo en sus propios registros.

## Métricas {#metrics}

`GET /metrics` devuelve cada contador del teléfono, cada uno con un texto de ayuda. Recójalo con Prometheus o léalo a mano.

| Contador | Cuenta |
| --- | --- |
| `calls_incoming_total` | Llamadas entrantes recibidas. |
| `calls_outgoing_total` | Llamadas salientes hechas. |
| `calls_answered_total` | Llamadas que se contestaron. |
| `calls_missed_total` | Llamadas entrantes que no se contestaron. |
| `calls_declined_total` | Llamadas rechazadas aquí o por el otro lado. |
| `calls_failed_total` | Llamadas que no se pudieron establecer. |
| `registrations_succeeded_total` | Registros SIP correctos. |
| `registrations_failed_total` | Registros SIP rechazados o caducados. |
| `webhooks_delivered_total` | Webhooks que aceptó el receptor. |
| `webhooks_failed_total` | Webhooks rechazados o no entregados. |
| `webhooks_dropped_total` | Webhooks descartados porque la cola estaba llena. |
| `api_requests_total` | Peticiones atendidas por la API. |
| `api_requests_refused_total` | Peticiones rechazadas: token incorrecto, grupo apagado o ruta desconocida. |

## Actualizar una integración antigua {#updating-an-older-integration}

Las versiones anteriores usaban nombres en camelCase e identificadores cortos. `accountId` es ahora `account_id`, `startedAt` es `callstart_ts`, `durationSeconds` es `duration_s`, `answeredBy` es `answered_by`, y el campo de webhook `at` es `event_ts`. Las llamadas y las cuentas se identifican solo por UUID: `runtimeId` e identificadores como `call-3` o `account-2` ya no se devuelven ni se aceptan.

## Cuando no funciona {#when-it-does-not-work}

| Síntoma | Qué comprobar |
| --- | --- |
| Conexión rechazada en `127.0.0.1:8377` | El control local está apagado, el teléfono no está en marcha o se cambió el puerto. |
| `404 {"error":"no such endpoint"}` para una ruta de esta página | Su grupo de acceso está apagado. |
| Leer funciona, escribir se rechaza | Los puntos de acceso que cambian datos guardados necesitan el token en la cabecera `Authorization`. |
| Los títulos de las categorías no están en inglés | Los títulos siguen el idioma de la interfaz. Relacione por `code` de `/taxonomy`. |
| Faltan `accountId`, `startedAt` o `at` | La integración se escribió para los nombres anteriores; vea más arriba. |

Para un problema con el registro o con la propia llamada, abra el [Diagnóstico](/troubleshooting/diagnostics).
