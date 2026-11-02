---
title: Procesamiento
sidebar_position: 2
description: El procesamiento automático de las conversaciones, los modelos de lenguaje, las instrucciones, las reglas que las ejecutan y los límites de gasto mensuales.
---

**Ajustes → Procesamiento** decide qué ocurre con una conversación una vez grabada, qué modelo hace el trabajo y cuánto puede costar.

<Shot name="12_settings_processing" alt="Ajustes → Procesamiento" />

## Procesar las conversaciones automáticamente {#process-conversations-automatically}

- **Apagado:** no ocurre nada hasta que lo pida en la [ventana de grabaciones](../interface/recordings.md).
- **Encendido:** las [reglas](#rules) de abajo se ejecutan solas. Esto es lo que convierte una conversación en un resumen, una categoría y todo lo demás sin que nadie pulse nada. Un modelo en la nube cobra por cada uno de esos pasos.

## Modelos de lenguaje {#language-models}

Los modelos que leen una transcripción y escriben sobre ella. Pulse **Añadir** para añadir uno. Cada uno aparece con su nombre y, debajo, el identificador del modelo y la dirección de su servicio, por ejemplo `qwen3-32b · http://localhost:8000/v1`. El marcado como **por defecto** — **QWEN**, un modelo en este ordenador, en la imagen — es el que se usa por defecto, en las instrucciones y en los ayudantes del [apuntador](prompter.md) que no nombran un modelo propio. **Probar**, en el formulario de un modelo, comprueba que el servicio responde de verdad antes de que confíe en él.

- Un modelo **en su propia máquina** mantiene cada conversación dentro del edificio y no cuesta nada.
- Un modelo en la nube — OpenAI, Claude, Mistral, DeepSeek, Groq y otros — se cobra por uso. El programa muestra el precio de cada llamada en tokens y en dinero.

## Instrucciones {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Ajustes → Procesamiento: las instrucciones" />

*Lo que se les pide a los modelos.* Todas las instrucciones vienen con el programa y todas son suyas para cambiarlas — y para devolverlas. Cada una aparece con su nombre y, debajo, qué escribe y en qué forma; **▲** y **▼** cambian el orden de la lista. La forma — **Respuesta**, **Puntos**, **Etiquetas**, **JSON**, **Prosa**, **Señales** o **Criterios** — decide cómo se guarda y se muestra la respuesta. Las instrucciones se describen en [Personal Prompt Studio](prompt-studio.md). **Añadir** crea una instrucción propia.

## Reglas {#rules}

<Shot name="12c_settings_processing_rules" alt="Ajustes → Procesamiento: las reglas" />

*Lo que se ejecuta solo, en este orden. Cada una se dispara como mucho una vez por conversación.* Una regla es una línea con una casilla que la enciende o la apaga, su nombre y, debajo, lo que hace. **▲** y **▼** cambian el orden. El programa trae ocho:

| Regla | `code` | Hace | `prompt` | Cuándo |
| --- | --- | --- | --- | --- |
| **Transcribir cada conversación** | `transcribe` | La transcribe. | — | siempre |
| **Resumirla** | `summary` | Pide a un modelo: **Resumen**. | `summary` | siempre |
| **Reducirla a una línea** | `super-summary` | Pide a un modelo: **Resumen de una línea**. | `super-summary` | siempre |
| **Clasificarla en una categoría** | `categorise` | Pide a un modelo: **Categoría**. | `categorise` | siempre |
| **Etiquetarla** | `tags` | Pide a un modelo: **Etiquetas**. | `tags` | siempre |
| **Señalar lo que merezca un vistazo** | `red-flags` | Pide a un modelo: **Señales**. | `red-flags` | siempre |
| **Evaluarla, si fue una venta** | `sales-quality` | Pide a un modelo: **Calidad comercial**. | `sales-quality` | solo si la categoría es **Ventas** |
| **Evaluarla, si fue soporte** | `support-quality` | Pide a un modelo: **Calidad del soporte**. | `support-quality` | solo si la categoría es **Soporte** |

El orden importa: las dos últimas reglas necesitan la categoría que ha puesto la regla anterior. **Añadir** crea una regla propia.

## Gasto {#spending}

<Shot name="12d_settings_processing_spending" alt="Ajustes → Procesamiento: el gasto del mes y los dos límites" />

En **Gasto** el programa muestra lo gastado este mes y en cuántas peticiones — *Este mes no se ha procesado nada* en la imagen, y por ejemplo *Este mes: 40.492 tokens, en 84 peticiones, sin coste* cuando ya se ha procesado algo.

| Campo | Significado |
| --- | --- |
| **Límite de dinero, mensual** | Lo máximo que pueden costar los modelos en un mes. |
| **Límite de tokens, mensual** | Los tokens máximos que pueden usar en un mes. |

Hay dos límites porque un mes puede medirse en dos cosas. Ambos están vacíos hasta que los rellene. Cuando se alcanza cualquiera de ellos, las reglas automáticas se detienen hasta que cambia el mes. **Lo que pide usted mismo nunca se detiene.** El [apuntador](prompter.md#spending) tiene sus propios topes, para que un mes de resúmenes no pueda dejarlo mudo en mitad de una conversación.

## Valores por defecto {#defaults}

**Restaurar los valores por defecto** devuelve las instrucciones y las reglas a como venían con el programa, en el idioma actual de la interfaz. Sus modelos de lenguaje no se tocan.

Las instrucciones y las reglas que venían con el programa se quedan en el idioma en que estaban cuando cambia el idioma de la interfaz; **Restaurar los valores por defecto** las pasa al nuevo. Cada instrucción queda entonces marcada como *cambiada* a la derecha.

## Ejecución predeterminada {#default-execution}

Ejecute `summary` antes de `super-summary`, que utiliza `{{artifact:summary}}`. Ejecute `categorise` antes de evaluar la calidad: `sales-quality` requiere `sales`, y `support-quality` requiere `support`.

No hay reglas automáticas predeterminadas para `action-items`, `topics`, `entities` ni `qa`. Ejecute el prompt manualmente o añada una regla adecuada; introduzca la pregunta al ejecutar `qa`.

El conjunto predeterminado se guarda al usar la aplicación por primera vez. Editar un archivo Markdown exportado no cambia la aplicación: edite la ficha del prompt o restaure los valores predeterminados.

[Textos de los prompts predeterminados](prompt-studio.md#standard-templates)
