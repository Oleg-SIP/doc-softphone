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
| **Ventas** | `sales` | Vender, presupuestar, negociar o hacer seguimiento de una compra — incluido un cliente que pregunta cuánto cuesta algo. |
| **Soporte** | `support` | Ayudar a alguien con un producto o servicio que ya tiene: una avería, una duda sobre su uso, una queja sobre cómo funciona. |
| **Personal** | `personal` | Nada de trabajo — una conversación privada que resultó hacerse por esta línea. |
| **Otro** | `other` | De trabajo, pero ni venta ni soporte: un proveedor, un compañero, una entrega, un número equivocado. Elija esta antes que adivinar entre las demás. |

Pulse **Añadir** para añadir una categoría propia.

## Etiquetas {#tags}

Marcas que *pueden ser todas ciertas de la misma conversación*. Pulse **Añadir** para añadir una. La lista empieza con entradas como:

| Nombre | Código | Se usa para |
| --- | --- | --- |
| **Devolución prometida** | `callback` | Alguien en esta llamada prometió devolver la llamada, o pidió que se la devolvieran. |
| **Queja** | `complaint` | El interlocutor expresó insatisfacción, se resolviera o no. |
| **Escalada** | `escalation` | La llamada se pasó a otra persona, o el interlocutor pidió que se pasara. |
| **Cliente importante** | `vip` | Se trató al interlocutor como una cuenta importante, o dijo serlo. |

## Señales {#red-flags}

Cosas que requieren atención, encontradas en la conversación con la prueba y el momento — por ejemplo *Cliente enfadado* o *Riesgo de fuga*. Las señales se dibujan en rojo en la [ventana de grabaciones](../recordings/recordings-window.md), y cada una tiene una gravedad: baja, media o alta.

## Formas de respuesta e idioma {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Ajustes → Diccionarios: formas de respuesta e instrucciones de idioma" />

Más abajo en la pestaña están las instrucciones con las que se montan las instrucciones de los modelos. Se guardan aquí para que todas puedan usar la misma redacción, y puede cambiarlas como cualquier otra entrada.

| Nombre | Código | Qué le dice al modelo |
| --- | --- | --- |
| **Etiquetas** | `shape-labels` | Responder en JSON con una lista de códigos y su seguridad en cada uno, usando solo códigos de la lista que recibió. |
| **Puntuación** | `shape-score` | Responder con una puntuación, su motivo y las palabras en que se basa. |
| **Criterios** | `shape-rubric` | Responder con una puntuación global y una puntuación por cada criterio. |
| **Señales** | `shape-flags` | Responder con códigos de la lista, cada uno con una gravedad. |
| **Respuesta** | `shape-qa` | Responder con la contestación, o decir claramente que la conversación no lo dice, y las palabras en que se basa la contestación. |
| **JSON** | `shape-json` | Responder solo con JSON, en la forma pedida más arriba. |
| **Como se habló** | `language-as-spoken` | Escribir en el idioma en que fue la conversación. |
| **Como se habló, nombrado** | `language-as-spoken-named` | Lo mismo, nombrando el idioma. |
| **Un idioma nombrado** | `language-named` | Escribir en el idioma que usted indique. |

**Añadir**, al final de la lista, añade una entrada.

## Valores por defecto {#defaults}

**Restaurar los valores por defecto** devuelve cada diccionario a como venía con el programa, en el idioma actual de la interfaz. Aquello con lo que ya están clasificadas sus conversaciones no se toca.
