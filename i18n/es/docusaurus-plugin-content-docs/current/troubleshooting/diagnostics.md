---
title: Diagnóstico
sidebar_position: 1
description: La ventana que muestra cada palabra que se dicen el teléfono y la centralita, el archivo de registro y dónde guarda el programa sus archivos.
---

La ventana **Diagnóstico** muestra lo que se dicen el teléfono y la centralita, en el momento en que se lo dicen. Es el primer sitio donde mirar cuando una cuenta no se registra o una llamada no conecta, y la ventana que un departamento de informática le pedirá que envíe.

Se abre desde **Ajustes → Diagnóstico**, con el botón **Abrir el diagnóstico**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="La ventana Diagnóstico" />

Muestra cada mensaje SIP que el teléfono envía o recibe, mientras ocurre, junto con las estadísticas de audio de las llamadas en curso. Solo recoge mientras está abierta y no guarda nada después de cerrarse.

## SIP {#sip}

La pestaña **SIP** es el registro de la señalización.

- Cada mensaje es una línea con la hora (al milisegundo), qué es y adónde fue: una flecha hacia la derecha la envía el teléfono, una flecha hacia la izquierda se recibe del servidor. Debajo: `to` o `from` la dirección del servidor y el transporte (por ejemplo *por UDP*).
- Un mensaje se puede desplegar para ver sus cabeceras completas (el tercer mensaje de la imagen).
- **Buscar** encuentra texto en el registro.
- **Vaciar** lo vacía.

El ejemplo de la captura es un registro sano: el teléfono envía `REGISTER`, el servidor responde `200 OK (REGISTER)`.

## Llamadas {#calls}

La segunda pestaña, **Llamadas**, muestra métricas de calidad de cada llamada en curso.

## La pestaña Diagnóstico de los ajustes {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Ajustes → Diagnóstico" />

### Detalle del registro {#log-detail}

El desplegable elige cuánto escribe el programa en su archivo de registro; en la imagen es **Detallado**. Surte efecto al momento, también en una llamada ya en curso — que es justo de la que quiere el registro. El ajuste más detallado anota cada mensaje SIP. Es grande, pero las contraseñas se eliminan antes de escribir nada, así que el archivo es seguro para enviarlo con una solicitud de soporte.

**Enviar una copia al registro del sistema** escribe además el registro en el propio registro del sistema, para una máquina cuyos registros se recogen de forma centralizada. El archivo de abajo se escribe en cualquier caso, y es el que hay que adjuntar a una solicitud de soporte.

### Archivos {#files}

La pestaña lista dónde guarda el programa sus archivos y cuánto ocupa cada uno. En macOS:

| Archivo | Dónde | Contiene |
| --- | --- | --- |
| Ajustes | `~/Library/Preferences/ai-softphone/settings.json` | Los ajustes. Nunca contraseñas ni tokens. |
| Base de datos | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Contactos, historial, transcripciones y redacciones. |
| Grabaciones | `~/Library/Application Support/ai-softphone/recordings` | El audio de las grabaciones. |
| Registro | `~/Library/Logs/ai-softphone/ai-softphone.log` | El registro. |

Bajo la lista, **Abrir** muestra el registro y **Vaciar** lo vacía. Vacíe el registro justo antes de reproducir un problema; vaciarlo no se puede deshacer.

## Qué enviar al soporte {#what-to-send-to-support}

1. Ponga **Detalle del registro** en el nivel más detallado.
2. Pulse **Vaciar** y reproduzca el problema.
3. Envíe el archivo de registro, o abra **Ajustes → Acerca de**, escríbanos desde allí y marque **Adjuntar el registro** — consulte [Acerca de](../application/about.md#feedback).

Para un problema con el registro o con una llamada, envíe también las líneas del intento fallido de la pestaña **SIP**.

La parte del programa que hay detrás de todo esto — la traza SIP, las estadísticas de medios y los contadores — se puede apagar en [Módulos](../application/modules.md) (**Diagnóstico**).
