---
title: Personal Prompt Studio
sidebar_position: 3
description: Las instrucciones que redactan sus conversaciones, las reglas que las ejecutan y cómo hacerlas suyas.
---

**Personal Prompt Studio** es la parte de AI Softphone que redacta sus conversaciones a su manera. La redacción la hacen instrucciones: el programa trae once, listas para usar en cuanto se conectan la transcripción y un modelo de lenguaje, y puede cambiarlas en lenguaje corriente, duplicarlas y añadir las suyas. Aparecen en **Instrucciones**, en [Ajustes → Procesamiento](processing.md#prompts).

Su LLM, su clave, su control: conecte el modelo que prefiera con su propia clave, a través de un servicio compatible o de una API compatible — o un modelo desplegado dentro de su organización. Con la [transcripción](transcription.md#your-own-models) también en su propio hardware, tanto el audio como las transcripciones se quedan dentro de su entorno.

<Shot name="12b_settings_processing_prompts" alt="La lista de instrucciones en Ajustes → Procesamiento" />

## Las instrucciones que trae el programa {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 incluye once prompts para conversaciones terminadas y cuatro asistentes en directo. Estos son los textos incluidos para este idioma; las versiones lingüísticas pueden diferir.

| Instrucción | `code` | Forma | Qué escribe |
| --- | --- | --- | --- |
| **Resumen** | `summary` | Prosa | Los puntos principales, las decisiones y los siguientes pasos en un párrafo corto. |
| **Resumen de una línea** | `super-summary` | Prosa | Un título corto para reconocer la conversación en una lista. |
| **Tareas** | `action-items` | Puntos | Quién se comprometió a hacer qué, y cuándo, con las palabras que dijo. |
| **Temas** | `topics` | Puntos | Los asuntos que se trataron, en pocas palabras. |
| **Nombres y números** | `entities` | JSON | Personas, empresas, fechas, importes y referencias. |
| **Categoría** | `categorise` | Etiquetas | Clasifica la conversación en una de sus [categorías](dictionaries.md). |
| **Etiquetas** | `tags` | Etiquetas | Le pone sus [etiquetas](dictionaries.md), para poder encontrarla después. |
| **Señales** | `red-flags` | Señales | Problemas, con la prueba y el momento de la conversación. |
| **Una pregunta sobre esta llamada** | `qa` | Respuesta | Responde a una pregunta que usted hace sobre una conversación, a partir de su transcripción. |
| **Calidad comercial** | `sales-quality` | Criterios | Revisa la conversación según criterios de venta que puede editar. |
| **Calidad del soporte** | `support-quality` | Criterios | Juzga lo bien que se entendió y se resolvió el problema. |

Las formas son estructuras fijas de respuesta, lo que permite al programa guardarla y buscar en ella más tarde: las **Etiquetas** son códigos de una de sus listas, las **Señales** son códigos con una gravedad, los **Criterios** son una puntuación con un motivo y una puntuación por cada criterio, la **Respuesta** es una contestación con las palabras en que se basa. Las instrucciones que indican la forma a un modelo se guardan en [Diccionarios](dictionaries.md#instructions).

Los ayudantes del [apuntador](../interface/prompter.md) también son instrucciones, que se ejecutan sobre cada respuesta mientras transcurre una llamada en lugar de sobre una conversación terminada. Se guardan en una lista propia, en [Ayudantes](prompter.md#assistants) de **Ajustes → Apuntador**.

Las llamadas hechas en AI Softphone, las reuniones [capturadas](/capture/) desde el ordenador y las grabaciones importadas pasan todas por las mismas instrucciones en cuanto tienen transcripción.

Las tareas recogen lo acordado — no envían mensajes, ni reservan visitas, ni crean incidencias por usted.

## Hacerlo suyo {#making-it-yours}

- Cambie lo que pide una instrucción, en lenguaje corriente: qué busca, el formato de la respuesta y el idioma en que responde.
- Duplique una instrucción para probar una variante.
- Elija el modelo de cada instrucción — en su propia máquina o en la nube.
- Fije el orden en que se ejecutan las instrucciones, enciéndalas y apáguelas, y hágalas condicionales — eso se hace con las [reglas](processing.md#rules): por ejemplo, una revisión de ventas solo se ejecuta en las llamadas clasificadas como **Ventas**.
- Mantenga sus propias categorías, etiquetas y señales en [Diccionarios](dictionaries.md).
- Ponga tope al coste con los [límites mensuales](processing.md#spending).

Las instrucciones y las reglas originales se pueden restaurar con **Restaurar los valores por defecto**, en **Valores por defecto** de [Ajustes → Procesamiento](processing.md#defaults).

## Rol del modelo {#role-and-task}

`system` define el comportamiento del modelo; `body` describe la tarea. La forma y el idioma de respuesta se proporcionan aparte mediante instrucciones del diccionario.

Una lista vacía de tareas o alertas puede ser correcta. No deben inventarse responsables ni fechas. Las respuestas a preguntas deben basarse únicamente en la transcripción.

[Formatos de respuesta](dictionaries.md#response-formats)

## Variables de sustitución {#placeholders}

Un elemento del prompt que se sustituye por datos de la conversación.

| Variable de sustitución | Significado |
| --- | --- |
| `{{transcript}}` | Transcripción, una intervención por línea, con tiempos en milisegundos |
| `{{duration}}` | Duración de la conversación |
| `{{direction}}` | Llamada entrante o saliente |
| `{{party}}` | Nombre del contacto o número |
| `{{language}}` | Idioma de respuesta |
| `{{question}}` | Pregunta del usuario |
| `{{categories}}` | Diccionario de categorías |
| `{{tags}}` | Diccionario de etiquetas |
| `{{red_flags}}` | Diccionario de alertas |
| `{{artifact:summary}}` | Resumen ya generado |
| `{{conversation}}` | Contexto acumulado por el apuntador |
| `{{reply}}` | Última intervención del interlocutor; solo en el apuntador |

Ejecute `summary` antes de `super-summary`, que utiliza `{{artifact:summary}}`. Ejecute `categorise` antes de evaluar la calidad: `sales-quality` requiere `sales`, y `support-quality` requiere `support`.

[Asistentes incluidos](prompter.md#assistant-templates)

## Textos de los prompts predeterminados {#standard-templates}

AI Softphone 1.1.11 incluye once prompts para conversaciones terminadas y cuatro asistentes en directo. Estos son los textos incluidos para este idioma; las versiones lingüísticas pueden diferir.

### Resumen (`summary`) {#summary}

**Forma de respuesta:** `plain`.

**Rol (`system`)**

```text
Usted lee transcripciones de llamadas telefónicas y escribe resúmenes cortos y objetivos de ellas. Nunca adivina nada que no se haya dicho, y nunca añade consejos.
```

**Tarea (`body`)**

```text
Resuma esta llamada telefónica en un párrafo corto: de qué iba, qué se decidió y qué pasa después. Duró {{duration}} y fue {{direction}}, con {{party}}.

{{transcript}}
```

### Resumen de una línea (`super-summary`) {#super-summary}

**Forma de respuesta:** `plain`.

**Rol (`system`)**

```text
Usted lee transcripciones de llamadas telefónicas y reduce cada una a una sola frase. Nunca adivina y nunca añade consejos.
```

**Tarea (`body`)**

```text
Reduzca esta llamada telefónica a una frase de doce palabras como mucho — de las que irían en una tabla junto al nombre de quien llamó. Sin punto final, sin comillas.

{{artifact:summary}}

{{transcript}}
```

### Tareas (`action-items`) {#action-items}

**Forma de respuesta:** `list`.

**Rol (`system`)**

```text
Usted lee transcripciones de llamadas telefónicas y enumera lo que alguien se comprometió a hacer. Solo enumera lo que se dijo de verdad; nunca inventa una tarea, un responsable ni una fecha.
```

**Tarea (`body`)**

```text
Enumere lo que cualquiera en esta llamada se comprometió a hacer. Diga quién debe hacerlo donde se dijo, y para cuándo donde se dijo. Si nadie se comprometió a nada, responda con una lista vacía.

{{transcript}}
```

### Temas (`topics`) {#topics}

**Forma de respuesta:** `list`.

**Rol (`system`)**

```text
Usted lee transcripciones de llamadas telefónicas y nombra de qué trataban.
```

**Tarea (`body`)**

```text
Enumere los asuntos que esta llamada trató de verdad, seis como mucho, cada uno en pocas palabras. Deje el responsable y la fecha vacíos — aquí no significan nada.

{{transcript}}
```

### Nombres y números (`entities`) {#entities}

**Forma de respuesta:** `json`.

**Rol (`system`)**

```text
Usted lee transcripciones de llamadas telefónicas y extrae lo que se nombró en ellas. Nunca adivina una grafía y nunca añade nada que no se haya dicho.
```

**Tarea (`body`)**

```text
Extraiga lo que se nombró en esta llamada, como JSON exactamente de esta forma:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Cada uno es una lista de cadenas, escritas tal como se dijeron. Deje una lista vacía antes que adivinar.

{{transcript}}
```

### Categoría (`categorise`) {#categorise}

**Forma de respuesta:** `labels`.

**Rol (`system`)**

```text
Usted clasifica llamadas telefónicas en una de las categorías que se le dan. Elige de la lista y de nada más.
```

**Tarea (`body`)**

```text
Clasifique esta llamada en exactamente una de estas categorías. Responda con su código.

{{categories}}
{{transcript}}
```

### Etiquetas (`tags`) {#tags}

**Forma de respuesta:** `labels`.

**Rol (`system`)**

```text
Usted etiqueta llamadas telefónicas con las etiquetas que se le dan. Elige de la lista y de nada más, y omite una etiqueta antes que forzarla.
```

**Tarea (`body`)**

```text
¿Cuáles de estas son ciertas de esta llamada? Responda con sus códigos, o con una lista vacía si ninguna lo es.

{{tags}}
{{transcript}}
```

### Señales (`red-flags`) {#red-flags}

**Forma de respuesta:** `flags`.

**Rol (`system`)**

```text
Usted lee transcripciones de llamadas telefónicas y solo señala lo que se le ha dado a buscar. Cita las palabras en que se basa cada una, y no señala nada que no pueda citar.
```

**Tarea (`body`)**

```text
Señale cuáles de estas muestra esta llamada. Para cada una, cite las palabras en que se apoya y dé el momento en milisegundos en que se dijeron. No señale nada antes que forzar una definición.

{{red_flags}}
{{transcript}}
```

### Una pregunta sobre esta llamada (`qa`) {#qa}

**Forma de respuesta:** `qa`.

**Rol (`system`)**

```text
Usted responde preguntas sobre una llamada telefónica, a partir de su transcripción y de nada más. Donde la llamada no lo diga, lo dice claramente en vez de adivinar.
```

**Tarea (`body`)**

```text
{{question}}

{{transcript}}
```

### Calidad comercial (`sales-quality`) {#sales-quality}

**Forma de respuesta:** `rubric`.

**Rol (`system`)**

```text
Usted evalúa cómo llevó un comercial una llamada telefónica. Juzga solo lo que muestra la transcripción, nunca supone qué pasó antes o después, y es igual de exigente con una llamada que fue bien que con una que no.
```

**Tarea (`body`)**

```text
Juzgue nuestro lado de esta llamada — la persona al teléfono — según estos criterios y ningún otro:
- saludo: ¿se identificó y nombró la empresa?
- indagación: ¿averiguó qué quería realmente el cliente?
- objeciones: ¿respondió a lo que el cliente planteaba, en vez de hablar de otra cosa?
- valor: ¿dijo qué obtiene el cliente, y no solo cuánto cuesta?
- siguiente paso: ¿terminó la llamada con algo concreto acordado?

{{transcript}}
```

### Calidad del soporte (`support-quality`) {#support-quality}

**Forma de respuesta:** `rubric`.

**Rol (`system`)**

```text
Usted evalúa cómo llevó un agente de soporte una llamada telefónica. Juzga solo lo que muestra la transcripción, y pesa más si el problema del cliente se resolvió de verdad que lo agradable que fue la conversación.
```

**Tarea (`body`)**

```text
Juzgue nuestro lado de esta llamada — la persona al teléfono — según estos criterios y ningún otro:
- saludo: ¿se identificó y confirmó con quién hablaba?
- comprensión: ¿estableció qué iba mal de verdad antes de responder?
- resolución: ¿se resolvió el problema, o se dio un siguiente paso concreto?
- tono: ¿se mantuvo tranquila y correcta, sobre todo donde el cliente no lo estaba?
- cierre: ¿comprobó que el cliente quedaba satisfecho antes de terminar?

{{transcript}}
```
