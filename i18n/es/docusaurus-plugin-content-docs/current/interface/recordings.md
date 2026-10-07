---
title: Ventana de grabaciones
sidebar_position: 2
description: La biblioteca de conversaciones — filtrar, reproducir, leer la transcripción y la redacción.
---

**Grabaciones** es donde vive cada conversación, haya llegado como haya llegado: una llamada, una reunión capturada de otra aplicación o un archivo importado. Cada una aparece con su redacción ya hecha.

<Shot name="01_recordings" alt="La pestaña Grabaciones: la lista de conversaciones" />

## Encontrar una conversación {#finding-a-conversation}

La barra de arriba tiene cuatro filtros, un campo de búsqueda y un menú:

| Control | Reduce la lista por |
| --- | --- |
| **Tipo** | la forma en que llegó la conversación |
| **Periodo** | la fecha |
| **Categoría** | la categoría en la que se clasificó — consulte [Diccionarios](../ai-processing/dictionaries.md) |
| **Marca** | las marcas que lleva |
| **Buscar** | lo que se dijo en ella — la búsqueda recorre las transcripciones de todo lo que ha grabado |

El botón **⋮** a la derecha de la barra abre más acciones para la lista: **Importar de archivo(s)**, **Exportar a CSV** y **Abrir en un navegador**.

## La lista {#the-list}

Cada fila muestra:

- un icono para el tipo de conversación: un auricular para una llamada, una ventana para una reunión en otra aplicación;
- un título — el nombre del interlocutor, o el número, u **Otra aplicación** para una reunión capturada — y debajo la fecha y el resumen de una línea;
- a la derecha, la categoría con su puntuación (un número, por ejemplo *Soporte · 2*), luego las etiquetas y, al final, la duración.

Las etiquetas dibujadas en rojo son **señales** (en la imagen, *Cliente enfadado* y *Riesgo de fuga*); las demás son etiquetas normales (*Queja*, *Devolución prometida*). Una conversación sin resumen ni categoría todavía no se ha redactado — la primera fila de la imagen.

## El reproductor {#the-player}

Seleccione una fila para abrir el reproductor bajo la lista.

<Shot name="02_recording_details" alt="Una grabación seleccionada: el reproductor y la transcripción bajo la lista" />

- Las dos formas de onda son los dos canales de la grabación, uno por cada lado de la conversación. La barra de debajo desplaza una grabación larga.
- **▶** reproduce y pausa; los tiempos de la izquierda son la posición y la duración total.
- **1×** cambia la velocidad; **Ambos** elige qué canal oye.
- El botón del disco guarda el audio, **×** cierra el reproductor.

## La transcripción y la redacción {#the-transcript-and-the-write-up}

Bajo el reproductor está la transcripción, con una línea por turno de palabra, el momento en que se dijo y el nombre de quien habla (**Usted**, el nombre del interlocutor o, en una reunión capturada, **Otra aplicación**). Haga clic en una línea para oír ese momento; la línea bajo el cabezal de reproducción se resalta y la palabra que se está diciendo se marca dentro de ella.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="La transcripción junto al audio" />

El desplegable sobre la transcripción elige qué mostrar — la transcripción hecha por uno de sus [reconocedores](../ai-processing/transcription.md) (una estrella marca la transcripción principal de la grabación), o una redacción como **Acciones**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Las acciones que dejó la conversación" />

Los cuatro iconos a la derecha del desplegable:

| Icono | Hace |
| --- | --- |
| Destellos | Hace que el modelo redacte ahora el elemento seleccionado. |
| Dos hojas | Lo copia. |
| Disco | Lo guarda en un archivo. |
| Papelera | Lo elimina. |

Puede exportar una transcripción como texto sin formato o como subtítulos.

La redacción la hacen las [instrucciones](/ai-processing/prompt-studio) y los modelos que haya configurado en [Procesamiento](../ai-processing/processing.md), mediante [reglas](../ai-processing/processing.md#rules) que se ejecutan solas o cuando usted lo pide. Cuánto tiempo se conservan las grabaciones se ajusta en [Grabaciones](../recordings.md#retention).

## Una grabación que ya tiene {#a-recording-you-already-have}

Una grabación hecha en otro sitio — en un móvil, una grabadora u otro sistema — se puede añadir con **⋮ → Importar de archivo(s)**. Se archiva exactamente como una llamada marcada: transcrita, redactada y encontrada por la misma búsqueda.

## Eliminar una grabación {#deleting-a-recording}

Cuando se elimina una grabación, todo lo que se hizo a partir de ella desaparece con ella: la transcripción y la redacción.
