---
title: Botones
sidebar_position: 4
description: "\"Botones BLF: botones de una sola pulsación que marcan una extensión de su centralita IP y muestran si está libre, sonando u ocupada.\""
---

Los botones son las teclas **BLF** (Busy Lamp Field) del softphone, la misma función que tiene un teléfono de sobremesa en una centralita IP. Un botón marca una extensión con una sola pulsación. Un botón que vigila su línea muestra además una luz: el teléfono pregunta a la centralita por esa extensión y muestra si está libre, sonando u ocupada, como hacen la consola de una recepcionista o las teclas programables de un teléfono de sobremesa.

El BLF necesita soporte en la centralita: la centralita tiene que comunicar al teléfono el estado de la extensión. La mayoría de las centralitas IP lo hacen. Si la suya no, la luz se queda gris y el botón sigue marcando.

Los botones están bajo las fichas de las cuentas en la [ventana principal](/interface/main-window), y **Ajustes → Botones** es donde se crean.

<Shot name="08_settings_buttons" alt="Ajustes → Botones: dos botones" />

Cada fila es un botón: la luz, su rótulo y, a la derecha, su número y la cuenta a la que pertenece — por ejemplo *212 · 201 Oficina*. **▲** y **▼** suben o bajan el botón; los botones de la ventana principal siguen este orden. **Añadir** crea uno nuevo.

## La luz {#the-lamp}

Un botón que vigila su línea muestra una luz:

| Luz | La línea está |
| --- | --- |
| Verde | libre |
| Ámbar | sonando |
| Roja | en una llamada |
| Gris | desconocida: la centralita no lo dice |

## Añadir un botón {#adding-a-button}

<Shot name="08b_button_add" alt="El formulario de un botón nuevo" />

Pulse **Añadir**; se abre un formulario bajo la lista.

| Campo | Qué escribir |
| --- | --- |
| **Número** | El número que hay que marcar. |
| **Línea** | La cuenta en la que se hace la llamada. Elíjala primero: para mostrar la luz, el teléfono pregunta por este número a la centralita de esa línea, así que tiene que saber cuál es. |
| **Rótulo** | El texto del botón, por ejemplo el nombre de la persona. El botón solo tiene sitio para un rótulo corto; uno más largo se corta. |
| **Mostrar si esta línea está ocupada** | Un interruptor. Encendido, el botón tiene luz. Apagado, solo marca. |

**Guardar** se queda gris hasta que el formulario está completo. **Cancelar** descarta el formulario.

La parte del programa que muestra los botones se puede apagar en [Módulos](/application/modules).
