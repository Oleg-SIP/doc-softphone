---
title: Ajustes del apuntador
sidebar_label: Apuntador
sidebar_position: 5
description: "Ajustes → Apuntador: lo que necesita el apuntador en vivo, el interruptor que lo permite, el tamaño del texto, los ayudantes y sus tarjetas, y los topes mensuales de lo que puede gastar."
---

En **Ajustes → Apuntador** se permite el apuntador en vivo, se ajusta su tamaño y se le dan sus ayudantes. El apuntador en sí —la ventana que escribe una llamada a medida que se dice y sugiere qué responder, y el ensayo con una grabación— se describe en [Ventana del apuntador](/interface/prompter).

El [Resumen general](/interface/settings-overview) de los ajustes recoge el apuntador en **Apuntador** en dos pasos: **Permitir el apuntador** e **Iniciar el apuntador**.

## Lo que necesita {#what-it-needs}
- **Un reconocedor que sepa escuchar mientras transcurre una conversación.** Se añade en [Ajustes → Transcripción](/ai-processing/transcription#live-recognition-for-the-prompter), como cualquier otro reconocedor, y necesita una **Dirección para el apuntador** y un **Probar** con éxito.
- **Un modelo de lenguaje**, para los ayudantes que sugieren algo. Es el indicado en el ayudante o el modelo por defecto de [Ajustes → Procesamiento](/ai-processing/processing#language-models). Los subtítulos no necesitan ningún modelo.
- **La casilla Permitir el uso del apuntador**, en **Ajustes → Apuntador**.

Una vez cumplidas las tres, **Apuntador** aparece en la lista de la parte inferior del teléfono, entre **Historial** y **Ajustes**, y abre la [ventana del apuntador](/interface/prompter). La parte del programa que se encarga de ello es el módulo **Apuntador**, *Escucha una conversación en curso y sugiere*; se puede desactivar en [Módulos](/application/modules).

## Ajustes → Apuntador {#settings--prompter}
<Shot name="41_settings_prompter" alt="Ajustes → Apuntador: el interruptor que permite el apuntador y el tamaño del texto" />

*Reconocimiento del habla mientras transcurre una conversación, y sugerencias escritas según sus propias instrucciones. Ambos se cobran por minuto.*

| Ajuste | Por defecto | Qué hace |
| --- | --- | --- |
| **Permitir el uso del apuntador** | desactivado | El único interruptor que permite iniciar un apuntador. Nada más en la página tiene efecto mientras no esté activado. |
| **Transcripción y sugerencias** | 13 píxeles | El tamaño con que se dibujan las dos columnas de la ventana. |
| **Repetir la línea más reciente sobre las columnas** | activado | Muestra la sugerencia más reciente —o la línea más reciente, para un ayudante que no sugiere nada— en una banda propia sobre las columnas. |
| **La línea repetida** | 20 píxeles | El tamaño del texto de la banda. Se muestra mientras la banda está activada. |

:::caution
La voz de la otra parte se envía a un reconocedor a medida que habla, lo que no es menos que grabarla. Donde [Ajustes → Grabación](/recordings) pide avisarla primero, un apuntador solo arranca después de que se le haya avisado.
:::

El apuntador se lee mientras se habla, a menudo desde más lejos que el resto del teléfono, así que los dos tamaños los elige usted: escoja unos que pueda captar sin inclinarse hacia la pantalla. Arrastre el separador que hay bajo la banda, en la [ventana del apuntador](/interface/prompter#the-window), para hacerla más alta.

### Ayudantes {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Ajustes → Apuntador: los ayudantes y los topes mensuales" />

Un ayudante es lo que se le pide a un apuntador que sea. *Cada uno escucha una conversación en curso y escribe algo en la ventana del apuntador: las palabras tal como se dicen, su traducción, o una sugerencia de qué decir a continuación.* Cuál ejecutar lo elige en la ventana del apuntador. El programa trae cuatro:

| Ayudante | Qué escribe | Pregunta a un modelo |
| --- | --- | --- |
| **Subtítulos** | Las palabras de ambos lados, a medida que se dicen. | no |
| **Traducción** | Las palabras del otro lado, traducidas al idioma del programa. | sí |
| **Objeciones en la llamada** | Para quien vende por teléfono: cuando el cliente plantea una objeción, la objeción en una línea y una línea que la responde. | sí |
| **Ayuda en la entrevista** | Para quien está en una entrevista: la respuesta a la pregunta recién hecha, en unas pocas líneas cortas, o qué tratar en la siguiente respuesta. | sí |

**▲** y **▼** cambian el orden, que es el del desplegable de la [ventana del apuntador](/interface/prompter#the-window). **Añadir** crea un ayudante propio. **Restaurar los valores por defecto** devuelve las instrucciones y las reglas a como venían con el programa, aquí y en [Procesamiento](/ai-processing/processing#defaults) por igual; sus modelos de lenguaje no se tocan.

### La tarjeta de un ayudante {#an-assistants-card}
Al pulsar un ayudante se abre su tarjeta. Es la misma tarjeta que la de una [instrucción](/ai-processing/prompt-studio) en Procesamiento, con algunos controles propios.

<Shot name="42_prompter_assistant" alt="La tarjeta del ayudante Objeciones en la llamada: el reconocedor, cuándo ha terminado una respuesta, el papel y la instrucción" />

| Campo | Qué hace |
| --- | --- |
| **Nombre** | El nombre que se muestra en la lista y en la ventana del apuntador. |
| **Forma de la respuesta** y **Enviar también** | Como en cualquier instrucción: la forma de la respuesta y las indicaciones que se envían con ella. Los ayudantes incluidos responden en **Prosa**. |
| **Reconocedor** | Qué reconocedor escucha. Solo se ofrecen los que saben escuchar mientras alguien habla. |
| **Cuándo ha terminado una respuesta** | Quién decide que una respuesta ha acabado y se puede contestar: **Lo decide el reconocedor**, **Tras una pausa** o **Solo cuando yo lo pida**; en este caso, una respuesta termina cuando usted pulsa **Sugerencia**. Seis de los reconocedores indican dónde termina una respuesta y cuatro no; **Lo decide el reconocedor** recurre a una pausa donde no tiene respuesta, y por eso es el ajuste que conviene dejar. |
| **Reconocer también mi lado** | Una segunda sesión en el mismo reconocedor, al doble de precio, para que sus propias palabras aparezcan también en la transcripción. Entran en lo que se le cuenta al modelo y nunca son aquello sobre lo que se le pregunta. |
| **Papel — qué es el modelo** | Se envía al modelo antes de la instrucción, por ejemplo *Ayuda a alguien que vende por teléfono…* |
| **La instrucción** | Lo que se pregunta al modelo ante cada respuesta. `{{reply}}` es la respuesta que acaba de terminar y `{{conversation}}`, todo lo dicho antes. *Déjelo vacío y no se le pregunta nada a un modelo: las palabras se muestran a medida que llegan, y lo único que se paga es el reconocedor.* Eso es **Subtítulos**. |
| **Responder en** | El idioma de la sugerencia: **Lo que se haya hablado**, **El idioma de este programa** o **Un solo idioma, siempre**, con su código. |
| **Modelo** | **Por defecto** o uno de sus [modelos de lenguaje](/ai-processing/processing#language-models). |

### Gasto {#spending}
*Separado de lo que las reglas pueden gastar en conversaciones terminadas. Un mes de resúmenes no debe poder silenciar a un apuntador en medio de una conversación.*

| Campo | Cuando se alcanza |
| --- | --- |
| **Reconocedores, al mes** | Un apuntador en marcha se detiene al final de la respuesta en la que está, nunca a mitad de palabra. |
| **Modelos, al mes** | Las sugerencias se detienen y los subtítulos siguen. |

Vacío significa sin tope. Lo que cuesta un minuto de audio en vivo es el **Precio por minuto** del reconocedor, indicado en su tarjeta en [Transcripción](/ai-processing/transcription#the-recognisers-card); sin él, el apuntador avisa de que la cifra que muestra es una estimación.
