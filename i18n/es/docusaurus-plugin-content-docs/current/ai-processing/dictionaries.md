---
title: Diccionarios
sidebar_position: 4
description: Sus propias categorías, etiquetas y señales — las palabras con las que se clasifican sus conversaciones.
---

**Ajustes → Diccionarios** contiene las palabras con las que una conversación puede clasificarse, etiquetarse o señalarse. Estas listas son lo que se muestra a los modelos y entre lo que deben elegir, así que una respuesta siempre es algo que podrá buscar después.

<Shot name="13_settings_dictionaries" alt="Ajustes → Diccionarios" />

**Mostrar eliminadas** muestra las entradas que ha eliminado.

Cada entrada es un nombre, un código corto en letra pequeña y una descripción que indica al modelo cuándo elegirla. El código es lo que se guarda y lo que devuelve la [API REST](../integration/rest-api.md#taxonomy-and-settings), así que no cambia cuando cambia el nombre de la entrada.

## Categorías {#categories}

De qué trataba la conversación; **se elige una por conversación**. El programa empieza con cuatro:

| Nombre | Código | Se usa para |
| --- | --- | --- |
| **Ventas** | `sales` | Vender, presupuestar, negociar o dar seguimiento a una compra — incluida la pregunta de un cliente sobre cuánto cuesta algo. |
| **Soporte** | `support` | Ayudar a alguien con un producto o un servicio que ya tiene: una avería, una duda de uso, una queja sobre cómo funciona. |
| **Personal** | `personal` | Nada profesional — una conversación privada que resultó pasar por esta línea. |
| **Otro** | `other` | Profesional, pero ni venta ni soporte: un proveedor, un compañero, una entrega, un número equivocado. Elija esto antes que adivinar entre los demás. |

Pulse **Añadir** para añadir una categoría propia.

## Etiquetas {#tags}

Marcas que *pueden ser todas ciertas de la misma conversación*. Pulse **Añadir** para añadir una. La lista empieza con entradas como:

| Nombre | Código | Se usa para |
| --- | --- | --- |
| **Devolución prometida** | `callback` | Alguien en esta llamada prometió devolverla, o pidió que se la devolvieran. |
| **Queja** | `complaint` | La otra parte expresó insatisfacción, se resolviera o no. |
| **Escalada** | `escalation` | La llamada se pasó a otra persona, o la otra parte pidió que se hiciera. |
| **Cliente importante** | `vip` | Se trató a la otra parte como una cuenta importante, o dijo serlo. |

## Señales {#red-flags}

Cosas que requieren atención, encontradas en la conversación con la prueba y el momento — por ejemplo *Cliente enfadado* o *Riesgo de fuga*. Las señales se dibujan en rojo en la [ventana de grabaciones](../interface/recordings.md), y cada una tiene una gravedad: baja, media o alta.

| Nombre | Código | `severity` | Se usa para |
| --- | --- | --- | --- |
| **Cliente enfadado** | `angry-customer` | `high` | La otra parte estaba audiblemente enfadada, insultó o amenazó con marcharse. |
| **Riesgo de fuga** | `churn-risk` | `high` | Se planteó cancelar, no renovar o pasarse a otro, por tranquilamente que fuera. |
| **Compromiso adquirido** | `promise-made` | `medium` | Nuestra parte se comprometió a algo concreto — una fecha, un precio, una solución, un reembolso. |
| **Datos sensibles** | `sensitive-data` | `high` | Se leyó en voz alta un número de tarjeta, una contraseña, un número de documento o cualquier otra cosa que no debería estar en una grabación. |
| **Competidor** | `competitor` | `low` | La otra parte nombró a alguien más que ofrece lo mismo, o nos comparó con él. |

## Consignas {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Ajustes → Diccionarios: formas de respuesta e instrucciones de idioma" />

*Lo que se añade a cada instrucción sobre la forma de la respuesta y el idioma en que escribirla.* Se guardan aquí para que todas las instrucciones puedan usar la misma redacción, y puede cambiarlas como cualquier otra entrada — o escribir las suyas, como *responde brevemente* o *nunca cites un precio*, y marcarlas en **Enviar también** en cualquier instrucción.

| Nombre | Código | Qué le dice al modelo |
| --- | --- | --- |
| **Prosa** | `shape-plain` | Responder en prosa sencilla, sin JSON, listas ni títulos. |
| **Puntos** | `shape-list` | Responder con una lista de cosas que hacer, cada una con quién y cuándo. |
| **Etiquetas** | `shape-labels` | Responder en JSON con una lista de códigos y su seguridad en cada uno, usando solo códigos de la lista que recibió. |
| **Puntuación** | `shape-score` | Responder con una puntuación, su motivo y las palabras en que se basa. |
| **Criterios** | `shape-rubric` | Responder con una puntuación global y una puntuación por cada criterio. |
| **Señales** | `shape-flags` | Responder con códigos de la lista, cada uno con una gravedad. |
| **Respuesta** | `shape-qa` | Responder con la contestación, o decir claramente que la conversación no lo dice, y las palabras en que se basa la contestación. |
| **JSON** | `shape-json` | Responder solo con JSON, en la forma pedida más arriba. |
| **Como se habló** | `language-as-spoken` | Escribir en el idioma en que fue la conversación. |
| **Como se habló, nombrado** | `language-as-spoken-named` | Lo mismo, nombrando el idioma. |
| **Un idioma nombrado** | `language-named` | Escribir en el idioma que usted indique. |

**Añadir**, al principio de la lista, añade una entrada.

## Valores por defecto {#defaults}

**Restaurar los valores por defecto** devuelve cada diccionario a como venía con el programa, en el idioma actual de la interfaz. Aquello con lo que ya están clasificadas sus conversaciones no se toca.

## Formatos de respuesta {#response-formats}

Estos bloques reproducen las instrucciones incluidas. Describen formatos de respuesta; las alternativas son una notación, no ejemplos JSON ejecutables.

### Prosa (`shape-plain`) {#shape-plain}

```text
Responda en prosa. No use JSON, listas ni encabezados.
```

### Puntos (`shape-list`) {#shape-list}

```text
Responda solo con JSON, exactamente de esta forma:
{"items": [{"text": "lo que hay que hacer", "owner": "quién, o vacío", "due": "cuándo, o vacío"}]}
Devuelva un array vacío cuando no haya nada que enumerar. No escriba nada fuera del JSON.
```

### Etiquetas (`shape-labels`) {#shape-labels}

```text
Responda solo con JSON, exactamente de esta forma:
{"labels": [{"code": "un código de la lista que le han dado", "confidence": 0.0}]}
Use solo códigos de la lista. Devuelva un array vacío cuando ninguno encaje.
No invente un código y no escriba nada fuera del JSON.
```

### Puntuación (`shape-score`) {#shape-score}

```text
Responda solo con JSON, exactamente de esta forma:
{"score": 3, "rationale": "por qué ese número y no uno más alto",
 "evidence": [{"at_ms": 0, "quote": "las palabras en que se basa"}]}
La puntuación es un número entero del 1 al 5. No escriba nada fuera del JSON.
```

### Criterios (`shape-rubric`) {#shape-rubric}

```text
Responda solo con JSON, exactamente de esta forma:
{"overall": 3, "rationale": "por qué ese número y no uno más alto",
 "criteria": [{"name": "el criterio tal como se le dio",
               "verdict": "pass" o "weak" o "fail" o "n/a",
               "note": "una frase"}]}
Juzgue cada criterio que se le ha dado y ningún otro. La nota global es un número
entero del 1 al 5. No escriba nada fuera del JSON.
```

### Señales (`shape-flags`) {#shape-flags}

```text
Responda solo con JSON, exactamente de esta forma:
{"flags": [{"code": "un código de la lista que le han dado",
            "severity": "low" o "medium" o "high",
            "evidence": "las palabras en que se basa",
            "at_ms": 0}]}
Use solo códigos de la lista, y señale cada uno como mucho una vez. Devuelva un array
vacío cuando no aplique nada. No escriba nada fuera del JSON.
```

### Respuesta (`shape-qa`) {#shape-qa}

```text
Responda solo con JSON, exactamente de esta forma:
{"answer": "su respuesta, o diga claramente que la conversación no lo dice",
 "citations": [{"at_ms": 0, "quote": "las palabras en que se apoya su respuesta"}]}
No responda a partir de nada que no sea la conversación. No escriba nada fuera
del JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Responda solo con JSON, en la forma pedida arriba. No escriba nada fuera del JSON.
```

### Como se habló (`language-as-spoken`) {#language-as-spoken}

```text
Escriba su respuesta en el mismo idioma en que se habló la conversación.
```

### Como se habló, nombrado (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Escriba su respuesta en el mismo idioma en que se habló la conversación, que es {language}.
```

### Un idioma nombrado (`language-named`) {#language-named}

```text
Escriba su respuesta en este idioma: {language}.
```
