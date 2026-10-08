---
title: Ventana de grabaciones
sidebar_position: 2
description: "La biblioteca de todas las conversaciones — una llamada, un archivo importado o una reunión capturada de Zoom, Teams o Meet: filtros, el reproductor, la transcripción que se puede reproducir desde cualquier línea y las redacciones."
---

**Grabaciones** es donde vive cada conversación, haya llegado como haya llegado: una llamada hecha o recibida en el teléfono, un archivo de audio que ha importado o una reunión capturada de Zoom, Teams, Meet o cualquier otra aplicación. Todas están en una sola lista y cada una se abre igual: el reproductor, la transcripción y todo lo que el modelo de lenguaje redactó sobre ella. Pulse **Grabaciones** abajo a la izquierda en la [ventana principal](main-window.md) para abrirla.

<Shot name="01_recordings" alt="La pestaña Grabaciones: una reunión de Zoom capturada, un archivo importado y llamadas en una sola lista" />

## Tres tipos de grabación {#three-kinds-of-recording}

El icono a la izquierda de una fila indica cómo llegó la conversación.

| Icono | Conversación | Su nombre en la lista | Cómo llega aquí |
| --- | --- | --- | --- |
| Auricular con una flecha | Una llamada hecha o recibida en este teléfono. La flecha apunta hacia dentro en una llamada entrante y hacia fuera en una saliente. | El nombre del contacto, o el número | Se graba según lo ajustado en [Grabaciones](../recordings.md) |
| Flecha hacia una barra | Un archivo importado de otro sitio: un móvil, una grabadora u otro sistema | El nombre del archivo | **⋮ → Importar de archivo(s)**; consulte [más abajo](#a-recording-you-already-have) |
| Ventana | Una reunión celebrada en otra aplicación | El nombre que le dio, u **Otra aplicación** | [Captura](../capture/capture.md) |

En la imagen, las tres primeras filas son una de cada: una reunión de Zoom, un archivo importado con una llamada de soporte de un banco y una llamada recibida en la línea **305 Soporte**. Sea cual sea su origen, se transcriben, se redactan y se buscan igual.

## Encontrar una conversación {#finding-a-conversation}

La barra de arriba tiene cinco filtros, un campo de búsqueda y un menú:

| Control | Reduce la lista por |
| --- | --- |
| **Tipo** | la forma en que llegó la conversación: llamadas entrantes o salientes, **Importadas**, **Capturadas** |
| **Periodo** | la fecha: **Hoy**, **Ayer**, **Últimos 7 días** o **Elegir fechas…** |
| **Categoría** | la categoría en la que se clasificó — consulte [Diccionarios](../ai-processing/dictionaries.md) |
| **Marca** | las etiquetas y señales que lleva |
| **Reconocedor** | el [reconocedor](../ai-processing/transcription.md) que hizo su transcripción |
| **Buscar** | lo que se dijo en ella — la búsqueda recorre las transcripciones de todo lo que ha grabado |

<Shot name="39_more_menu" alt="El menú ⋮ de la lista: Importar de archivo(s), Exportar a CSV, Abrir en un navegador" />

El botón **⋮** a la derecha de la barra abre más acciones para la lista:

| Elemento | Hace |
| --- | --- |
| **Importar de archivo(s)** | Trae grabaciones que ya tiene. Consulte [Una grabación que ya tiene](#a-recording-you-already-have). |
| **Exportar a CSV** | Guarda la lista como una hoja de cálculo: cuándo, el interlocutor y el número, la dirección, la duración, la categoría, las etiquetas, las señales y el resumen de una línea de cada conversación. |
| **Abrir en un navegador** | Abre la lista en su navegador, como la página que sirve la [API REST local](../integration/rest-api.md) en `/ui`. |

## La lista {#the-list}

Cada fila muestra:

- el icono del tipo de conversación;
- el nombre — el otro interlocutor, el número, el archivo o la reunión — y debajo la fecha y el resumen de una línea;
- a la derecha, la categoría con su puntuación (un número, por ejemplo *Soporte · 4*), luego las señales y las etiquetas y, al final, la duración.

Las señales se dibujan en rojo (en la imagen *Datos sensibles*, *Compromiso adquirido*, *Cliente enfadado*); las etiquetas son normales (*Devolución prometida*). Una conversación sin resumen ni categoría todavía no se ha redactado — la fila de **Ana Martínez** en la imagen.

<Shot name="40_row_actions" alt="Una fila con el puntero encima: los botones de la chincheta, el lápiz y la papelera" />

Al señalar una fila aparecen tres botones a su derecha:

| Botón | Hace |
| --- | --- |
| Chincheta | **Conservar esta**: una grabación conservada nunca se elimina por los límites de [Conservación](../recordings.md#retention). Púlsela otra vez para dejar de conservarla. |
| Lápiz | **Cambiar el nombre**: le da a la conversación un nombre propio. Una llamada conserva junto a él el nombre del interlocutor; una reunión o un archivo, si no, se nombra según la aplicación o el archivo de origen. |
| Papelera | **Eliminar esta grabación**, tras preguntar. El audio también desaparece y no se puede deshacer. |

## El reproductor {#the-player}

Seleccione una fila para abrir el reproductor bajo la lista.

- Las dos formas de onda son los dos canales de la grabación: la de arriba es usted, la de abajo es el otro lado. Un archivo importado suele tener una sola pista mezclada, así que las dos líneas muestran el mismo sonido.
- **▶** reproduce y pausa; los tiempos de la izquierda son la posición y la duración total. La barra de debajo de las formas de onda desplaza una grabación larga.
- **1×** cambia la velocidad; **Ambos** elige qué voz oye: ambas, solo la suya (**Yo**) o solo la del otro lado (**Ellos**).
- El botón del disco guarda una copia de la grabación, **×** cierra la conversación.

La línea entre la lista y el reproductor se puede arrastrar hacia arriba para dar más espacio a la transcripción, como en las imágenes de abajo.

## La transcripción {#the-transcript}

Bajo el reproductor está la transcripción: una línea por turno de palabra, con el momento en que se dijo y quién lo dijo.

<Shot name="26_recording_call" alt="Una llamada en la línea 305 Soporte: el reproductor y la transcripción, con la línea de 0:10 resaltada" />

| Tipo de grabación | Los interlocutores se muestran como |
| --- | --- |
| Una llamada | **Usted** y el nombre del otro interlocutor, o el número |
| Una reunión capturada | **Usted** y el nombre de la grabación, para todos los demás |
| Un archivo importado | **Todos · speaker 1**, **Todos · speaker 2**… — el reconocedor distingue las voces |

**Haga clic en una línea para ir a ese momento**: el reproductor se coloca allí, la línea se resalta y la palabra que se está diciendo se marca dentro de ella — en la imagen la línea de **0:10**, con la palabra *Sí*. Pulse **▶** para escuchar desde ahí. Mientras suena, el resaltado sigue al habla, de modo que puede leer y escuchar a la vez y volver a cualquier frase.

El tiempo a la izquierda de cada línea es también al que apunta una redacción: una señal, una respuesta o una cita llevan el momento de las palabras en las que se apoyan.

## Transcripción o redacción: el desplegable {#transcript-or-write-up-the-drop-down}

El desplegable sobre la transcripción elige qué mostrar en ese lugar: una transcripción o una de las redacciones que hizo el modelo de lenguaje.

<Shot name="27_writeup_menu" alt="El desplegable abierto: la transcripción de OpenAI y las redacciones de la llamada" />

- Las líneas con un **micrófono** son transcripciones, una por cada [reconocedor](../ai-processing/transcription.md) que transcribió la grabación. La estrella marca la principal. Señale una para ver el reconocedor, su modelo y el idioma.
- Las líneas con **destellos** son redacciones, hechas por las [instrucciones](/ai-processing/prompt-studio) de [Procesamiento](../ai-processing/processing.md).

Una grabación puede tener transcripciones de varios reconocedores, para compararlas: la reunión de Zoom de abajo la transcribieron X.ai y Deepgram.

<Shot name="36_zoom_menu" alt="Una reunión capturada con dos transcripciones, Deepgram y X.ai, y sus redacciones" />

Las redacciones aparecen con nombres cortos:

| En el desplegable | Hecha por la instrucción | Qué muestra |
| --- | --- | --- |
| **Resumen** | Resumen | Los puntos principales, las decisiones y los siguientes pasos en un párrafo corto. |
| **En pocas palabras** | Resumen de una línea | Una frase; la misma línea se muestra bajo el nombre en la lista. |
| **Acciones** | Tareas | Quién acordó hacer qué, y para cuándo. |
| **Temas** | Temas | Los asuntos que surgieron. |
| **Mencionados** | Nombres y números | Personas, empresas, fechas, importes y referencias. |
| la propia pregunta | Una pregunta sobre esta llamada | La respuesta a una pregunta que hizo, con las palabras en las que se apoya. |
| **Calidad** | Calidad comercial, Calidad del soporte | Una puntuación global y un veredicto sobre cada criterio. |
| **Señales** | Señales | Lo que requiere atención, con la prueba y el momento. |
| **Etiquetas**, **Categoría** | Etiquetas, Categoría | Las marcas con las que se clasificó la conversación. |

## Las redacciones, una por una {#the-write-ups-one-by-one}

Las imágenes de abajo son todas de la misma llamada, en la línea **305 Soporte**, en la que una clienta pregunta cuándo se renuevan sus pólizas.

**Resumen** — la conversación en pocas frases.

<Shot name="28_summary" alt="El Resumen de la llamada" />

**En pocas palabras** — una línea, lo bastante corta para reconocer la conversación en la lista.

<Shot name="29_nutshell" alt="En pocas palabras: el resumen de una línea de la llamada" />

**Acciones** — cada tarea con quién la hará y para cuándo, a la derecha.

<Shot name="30_actions" alt="Acciones: dos tareas para Usted, una de ellas para mañana por la mañana" />

**Una pregunta** — pregunte lo que quiera a la conversación: la pregunta pasa a ser el nombre del elemento, y bajo la respuesta están las palabras en las que se apoya, con su momento en la grabación.

<Shot name="31_question" alt="La respuesta a una pregunta sobre la llamada, con dos citas en 0:13 y 0:23" />

**Calidad** — la puntuación de 1 a 5 con su motivo, y cada criterio marcado como **cumplido**, **flojo** o **no cumplido** con una nota.

<Shot name="32_quality" alt="Calidad: puntuación 4, dos criterios cumplidos y dos flojos" />

**Señales** — cada señal con las palabras en las que se basó, su gravedad y el momento.

<Shot name="33_red_flags" alt="Señales: Compromiso adquirido, baja, en 0:23" />

**Temas** — los asuntos de una reunión, aquí de la reunión de Zoom.

<Shot name="38_topics" alt="Temas de la reunión de Zoom" />

## Los botones junto al desplegable {#the-buttons-beside-the-drop-down}

| Botón | Hace |
| --- | --- |
| Destellos | **Transcribir o preguntar a un modelo…**: abre un menú, véase abajo. |
| Dos hojas | Copia lo que se muestra. |
| Disco | Lo guarda en un archivo. Puede guardar una transcripción como texto sin formato o como subtítulos. |
| Papelera | Elimina lo que se muestra. |

<Shot name="34_run_menu" alt="El menú de destellos: Transcripción con cuatro reconocedores, Procesamiento con las instrucciones" />

El menú de destellos hace el trabajo a petición. En **Transcripción** elija un reconocedor para transcribir de nuevo la grabación con él; en **Procesamiento** elija una instrucción para ejecutarla ahora — **Una pregunta sobre esta llamada…** pide antes la pregunta. El resultado aparece en el desplegable. Así se redacta una conversación cuando **Procesar las conversaciones automáticamente** está desactivado en [Procesamiento](../ai-processing/processing.md), y así se añade una redacción más a una conversación que ya tiene algunas.

## Tres ejemplos {#three-examples}

### Una llamada hecha en el teléfono {#a-call-made-in-the-phone}

La llamada de arriba: los interlocutores son **Usted** y **Carmen Ruiz**, el nombre del contacto, en dos canales separados.

### Un archivo que importó {#a-file-you-imported}

<Shot name="35_recording_import" alt="Un archivo importado con una llamada de soporte de un banco: una pista mezclada y los hablantes 1 y 2" />

`riverside_bank_support_call` es un mp3 traído con **⋮ → Importar de archivo(s)**. Su nombre es el del archivo, su icono una flecha hacia una barra, y el reconocedor distinguió a sus dos hablantes. Las redacciones encontraron un número de tarjeta dicho en voz alta y marcaron **Datos sensibles**.

### Una reunión capturada de otra aplicación {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Una reunión de Zoom capturada del ordenador: la transcripción de X.ai con Usted y el nombre de la reunión como interlocutores" />

**Planificación del lanzamiento del 4T (Zoom)** se capturó mientras la reunión se celebraba en Zoom y se nombró con el lápiz. Todos los del otro lado de la reunión aparecen con el nombre de la grabación; usted es **Usted**. Consulte [Captura](../capture/capture.md).

## Una grabación que ya tiene {#a-recording-you-already-have}

Una grabación hecha en otro sitio — en un móvil, una grabadora u otro sistema — se puede añadir con **⋮ → Importar de archivo(s)**. Elija uno o varios archivos mp3 o wav; el teléfono dice cuántos se importaron y nombra los que no pudo leer como grabación. Cada uno se archiva exactamente como una llamada marcada: transcrito, redactado según las mismas [reglas](../ai-processing/processing.md#rules) y encontrado por la misma búsqueda.

## Eliminar una grabación {#deleting-a-recording}

Cuando se elimina una grabación, todo lo que se hizo a partir de ella desaparece con ella: las transcripciones y las redacciones. Cuánto tiempo se conservan las grabaciones por sí solas se ajusta en [Grabaciones](../recordings.md#retention).
