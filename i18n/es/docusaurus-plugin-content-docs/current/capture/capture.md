---
title: Captura
sidebar_label: Captura de otras aplicaciones
sidebar_position: 1
description: "\"La captura graba una conversación celebrada en otra aplicación — Zoom, Teams, Meet o cualquier otra — directamente desde el ordenador.\""
---

La **Captura** es la forma en que AI Softphone graba una conversación que tiene lugar en otro programa, como una reunión en Zoom, Teams o Meet. Graba desde el propio ordenador, manteniendo al otro lado y a usted en canales separados, y al final le esperan la misma transcripción y la misma redacción que en una llamada.

El programa busca una conversación, no el nombre de una aplicación, así que funciona con cualquier cosa que la produzca.

El [Resumen general](../interface/settings-overview.md) de los ajustes la incluye en **Captura de otras aplicaciones** y la divide en tres pasos:

1. **Activar la captura** — [permitir la captura de sonido](#turning-capture-on).
2. **Capturar una conversación** — [iniciar y detener](#capturing-a-conversation) una grabación.
3. **Poner nombre a una captura** — [cambiar el nombre](#giving-it-a-name) de la grabación.

## Activar la captura {#turning-capture-on}

La captura está apagada hasta que usted la permita. Abra **Ajustes → Captura**.

<Shot name="10_settings_capture" alt="Ajustes → Captura" />

| Ajuste | Por defecto | Qué hace |
| --- | --- | --- |
| **Permitir la captura de sonido** | apagado | Deja que el programa grabe el sonido de otras aplicaciones. Mientras está apagado no se captura nada. |
| **Recordarme que informe a los demás de la grabación** | encendido | Muestra un recordatorio mientras hay una captura en curso. La casilla está gris hasta que se permite la captura. |

:::caution
Se graba todo lo que reproduce el ordenador, no solo la conversación. Este teléfono no puede anunciar una grabación en la reunión de otra persona, así que avisar le toca a usted.
:::

La parte del programa que hace esto es el módulo **Captura**, *Grabar una conversación que ocurre en otra aplicación*. Se puede apagar en [Módulos](../application/modules.md).

## Iniciar una captura {#starting-a-capture}

Una vez permitida la captura, la parte inferior de la [ventana principal](../interface/main-window.md#capture) muestra su estado — **Captura · listo** — con un botón **Grabar** a la derecha. Pulse **Grabar** para empezar a mano.

### Inicio automático {#automatic-start}

**Inicio automático** decide qué ocurre cuando el programa oye una conversación en otra aplicación:

| Opción | Qué ocurre |
| --- | --- |
| **Nunca** | Una captura solo empieza cuando pulsa **Grabar**. |
| **Preguntarme** | El programa pregunta si debe grabarla. Por defecto. |
| **Siempre** | El programa empieza a grabar por su cuenta. |

En **Aplicaciones con respuesta propia** se puede dar a una aplicación una respuesta propia — por ejemplo *Grabar siempre esta aplicación* desde la pregunta que hace el programa.

*Preguntar no cuesta nada: los segundos anteriores a su respuesta ya están guardados.*

### Antes del inicio {#before-the-start}

El deslizador **Antes del inicio** indica cuántos segundos de sonido se guardan de antes de que empiece una grabación, **15 segundos** por defecto. Está ahí para que no se pierda nada mientras se detecta la conversación: una grabación que empieza cuando pulsa **Grabar**, o cuando responde a la pregunta, sigue empezando con las palabras que vinieron antes.

## Capturar una conversación {#capturing-a-conversation}

Mientras graba, la ventana principal muestra un punto rojo, el nombre de la grabación (por ejemplo **Reunión en Zoom**), el tiempo transcurrido y los dos canales como formas de onda.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Grabando una reunión" />

- **Detener la grabación** la termina.
- La ventana sigue visible mientras graba y le recuerda que diga a los participantes que la reunión se está grabando.

### Qué muestra la imagen {#what-the-picture-shows}

Otros dos ajustes eligen cómo se dibuja el nivel del sonido:

| Ajuste | Por defecto | Dónde |
| --- | --- | --- |
| **Imagen en la ventana principal** | Onda | Los dos canales mientras hay una captura en curso. |
| **Imagen en la barra del pie del teléfono** | Dos niveles | Las dos barras finas bajo **Captura · listo**. |

### Probarlo {#testing-it}

En **Probar**, la pestaña tiene dos barras: **Usted** y **El otro lado**. *La barra de arriba se mueve cuando usted habla, la de abajo cuando algo suena.* Antes de una reunión importante, diga una palabra y reproduzca cualquier sonido para ver que el programa oye ambos lados.

## Ponerle nombre {#giving-it-a-name}

El lápiz junto al nombre de la grabación le permite cambiárselo mientras está en curso. Una grabación a la que no puso nombre aparece como **Otra aplicación**.

## Adónde va la grabación {#where-the-recording-goes}

Una conversación capturada aparece en la [ventana de grabaciones](../interface/recordings.md) como cualquier otra, con su propio icono, una ventana en lugar de un auricular, y con el título que le dio u **Otra aplicación**.

<Shot name="01_recordings" alt="Reuniones capturadas en la pestaña Grabaciones, marcadas con un icono de ventana" />

Se transcribe, se resume, se clasifica en una categoría y se etiqueta con las mismas [reglas](../ai-processing/processing.md#rules) que una llamada. En la transcripción de una reunión capturada, quien habla aparece como **Otra aplicación** donde una llamada mostraría el nombre del interlocutor; la **Búsqueda** de la biblioteca también encuentra lo que se dijo en ella.
