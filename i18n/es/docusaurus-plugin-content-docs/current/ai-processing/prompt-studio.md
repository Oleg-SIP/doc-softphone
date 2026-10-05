---
title: Personal Prompt Studio
sidebar_position: 3
description: Las instrucciones que redactan sus conversaciones, las reglas que las ejecutan y cómo hacerlas suyas.
---

**Personal Prompt Studio** es la parte de AI Softphone que redacta sus conversaciones a su manera. La redacción la hacen instrucciones: el programa trae once, listas para usar en cuanto se conectan la transcripción y un modelo de lenguaje, y puede cambiarlas en lenguaje corriente, duplicarlas y añadir las suyas. Aparecen en **Instrucciones**, en [Ajustes → Procesamiento](processing.md#prompts).

Su LLM, su clave, su control: conecte el modelo que prefiera con su propia clave, a través de un servicio compatible o de una API compatible — o un modelo desplegado dentro de su organización. Con la [transcripción](transcription.md#your-own-models) también en su propio hardware, tanto el audio como las transcripciones se quedan dentro de su entorno.

<Shot name="12b_settings_processing_prompts" alt="La lista de instrucciones en Ajustes → Procesamiento" />

## Las instrucciones que trae el programa {#the-prompts-that-come-with-the-program}

La segunda columna es lo que muestra la lista bajo el nombre de la instrucción: qué escribe y en qué forma.

| Instrucción | Forma | Qué escribe |
| --- | --- | --- |
| **Resumen** | Prosa | Los puntos principales, las decisiones y los siguientes pasos en un párrafo corto. |
| **Resumen de una línea** | Prosa | Un título corto para reconocer la conversación en una lista. |
| **Tareas** | Puntos | Quién se comprometió a hacer qué, y cuándo, con las palabras que dijo. |
| **Temas** | Puntos | Los asuntos que se trataron, en pocas palabras. |
| **Nombres y números** | JSON | Personas, empresas, fechas, importes y referencias. |
| **Categoría** | Etiquetas | Clasifica la conversación en una de sus [categorías](dictionaries.md). |
| **Etiquetas** | Etiquetas | Le pone sus [etiquetas](dictionaries.md), para poder encontrarla después. |
| **Señales** | Señales | Problemas, con la prueba y el momento de la conversación. |
| **Una pregunta sobre esta llamada** | Respuesta | Responde a una pregunta que usted hace sobre una conversación, a partir de su transcripción. |
| **Calidad comercial** | Criterios | Revisa la conversación según criterios de venta que puede editar. |
| **Calidad del soporte** | Criterios | Juzga lo bien que se entendió y se resolvió el problema. |

Las formas son estructuras fijas de respuesta, lo que permite al programa guardarla y buscar en ella más tarde: las **Etiquetas** son códigos de una de sus listas, las **Señales** son códigos con una gravedad, los **Criterios** son una puntuación con un motivo y una puntuación por cada criterio, la **Respuesta** es una contestación con las palabras en que se basa. Las instrucciones que indican la forma a un modelo se guardan en [Diccionarios](dictionaries.md#answer-shapes-and-language).

Las llamadas hechas en AI Softphone, las reuniones [capturadas](/capture/) desde el ordenador y las grabaciones importadas pasan todas por las mismas instrucciones en cuanto tienen transcripción.

Las tareas recogen lo acordado — no envían mensajes, ni reservan visitas, ni crean incidencias por usted.

## Hacerlo suyo {#making-it-yours}

- Cambie lo que pide una instrucción, en lenguaje corriente: qué busca, el formato de la respuesta y el idioma en que responde.
- Duplique una instrucción para probar una variante.
- Elija el modelo de cada instrucción — en su propia máquina o en la nube.
- Fije el orden en que se ejecutan las instrucciones, enciéndalas y apáguelas, y hágalas condicionales — eso se hace con las [reglas](processing.md#rules): por ejemplo, una revisión de ventas solo se ejecuta en las llamadas clasificadas como **Ventas**.
- Mantenga sus propias categorías, etiquetas y señales en [Diccionarios](dictionaries.md).
- Ponga tope al coste con los [límites mensuales](processing.md#limits).

Las instrucciones y las reglas originales se pueden restaurar con **Restaurar los valores por defecto**, en **Valores por defecto** de [Ajustes → Procesamiento](processing.md#defaults).
