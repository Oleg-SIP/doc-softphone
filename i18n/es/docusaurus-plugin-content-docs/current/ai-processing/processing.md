---
title: Procesamiento
sidebar_position: 2
description: El procesamiento automático de las conversaciones, los límites de gasto mensuales, los modelos de lenguaje, las instrucciones y las reglas que las ejecutan.
---

**Ajustes → Procesamiento** decide qué ocurre con una conversación una vez grabada, qué modelo hace el trabajo y cuánto puede costar.

<Shot name="12_settings_processing" alt="Ajustes → Procesamiento" />

## Procesar las conversaciones automáticamente {#process-conversations-automatically}

- **Apagado:** no ocurre nada hasta que lo pida en la [ventana de grabaciones](../interface/recordings.md).
- **Encendido:** las [reglas](#rules) de abajo se ejecutan solas. Esto es lo que convierte una conversación en un resumen, una categoría y todo lo demás sin que nadie pulse nada. Un modelo en la nube cobra por cada uno de esos pasos.

Bajo la casilla, el programa muestra lo gastado este mes y en cuántas peticiones, por ejemplo *Este mes: 40.492 tokens, en 84 peticiones, sin coste.*

## Límites {#limits}

| Campo | Significado |
| --- | --- |
| **Límite de dinero, mensual** | Lo máximo que pueden costar los modelos en un mes. |
| **Límite de tokens, mensual** | Los tokens máximos que pueden usar en un mes. |

Hay dos límites porque un mes puede medirse en dos cosas. Ambos están vacíos hasta que los rellene. Cuando se alcanza cualquiera de ellos, las reglas automáticas se detienen hasta que cambia el mes. **Lo que pide usted mismo nunca se detiene.**

## Modelos de lenguaje {#language-models}

Los modelos que leen una transcripción y escriben sobre ella. Pulse **Añadir** para añadir uno. Cada uno aparece con su nombre y, debajo, el identificador del modelo y la dirección de su servicio, por ejemplo `qwen3-32b · http://llm.local:8000/v1`. El marcado como **por defecto** es el que se usa por defecto. Un botón en el formulario de un modelo comprueba que el servicio responde de verdad antes de que confíe en él.

- Un modelo **en su propia máquina** mantiene cada conversación dentro del edificio y no cuesta nada.
- Un modelo en la nube — OpenAI, Claude, Mistral, DeepSeek, Groq y otros — se cobra por uso. El programa muestra el precio de cada llamada en tokens y en dinero.

## Instrucciones {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Ajustes → Procesamiento: las instrucciones" />

*Lo que se les pide a los modelos.* Todas las instrucciones vienen con el programa y todas son suyas para cambiarlas — y para devolverlas. Cada una aparece con su nombre y, debajo, qué escribe y en qué forma. La forma — **Respuesta**, **Puntos**, **Etiquetas**, **JSON**, **Prosa**, **Señales** o **Criterios** — decide cómo se guarda y se muestra la respuesta. Las instrucciones se describen en [Personal Prompt Studio](prompt-studio.md). **Añadir** crea una instrucción propia.

## Reglas {#rules}

<Shot name="12c_settings_processing_rules" alt="Ajustes → Procesamiento: las reglas" />

*Lo que se ejecuta solo, en este orden. Cada una se dispara como mucho una vez por conversación.* Una regla es una línea con una casilla que la enciende o la apaga, su nombre y, debajo, lo que hace. **▲** y **▼** cambian el orden. El programa trae ocho:

| Regla | Hace | Cuándo |
| --- | --- | --- |
| **Transcribir cada conversación** | La transcribe. | siempre |
| **Resumirla** | Pide a un modelo: **Resumen**. | siempre |
| **Reducirla a una línea** | Pide a un modelo: **Resumen de una línea**. | siempre |
| **Clasificarla en una categoría** | Pide a un modelo: **Categoría**. | siempre |
| **Etiquetarla** | Pide a un modelo: **Etiquetas**. | siempre |
| **Señalar lo que merezca un vistazo** | Pide a un modelo: **Señales**. | siempre |
| **Evaluarla, si fue una venta** | Pide a un modelo: **Calidad comercial**. | solo si la categoría es **Ventas** |
| **Evaluarla, si fue soporte** | Pide a un modelo: **Calidad del soporte**. | solo si la categoría es **Soporte** |

El orden importa: las dos últimas reglas necesitan la categoría que ha puesto la regla anterior. **Añadir** crea una regla propia.

## Valores por defecto {#defaults}

**Restaurar los valores por defecto** devuelve las instrucciones y las reglas a como venían con el programa, en el idioma actual de la interfaz. Sus modelos de lenguaje no se tocan.

Las instrucciones y las reglas que venían con el programa se quedan en el idioma en que estaban cuando cambia el idioma de la interfaz; **Restaurar los valores por defecto** las pasa al nuevo. Cada instrucción queda entonces marcada como *cambiada* a la derecha.
