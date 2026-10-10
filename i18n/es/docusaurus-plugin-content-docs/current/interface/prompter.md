---
title: Ventana del apuntador
sidebar_position: 3
description: "La ventana del apuntador en vivo: las palabras de una llamada a medida que se dicen y sugerencias de qué decir a continuación, sus botones y columnas, el ensayo con una grabación y lo que cuesta."
---

El **Apuntador** escucha una conversación mientras transcurre. En una ventana propia escribe lo que dice cada lado, a medida que se dice, y —cuando el ayudante elegido pregunta a un modelo— una sugerencia de qué decir a continuación. Merece la pena tenerlo abierto durante una llamada de ventas, una entrevista o una conversación difícil, y con otro ayudante la misma ventana muestra una traducción continua del otro lado o simples subtítulos.

<Shot name="46_prompter_running" alt="El apuntador ensayando una llamada de ventas: la transcripción a la izquierda, las sugerencias a la derecha y la más reciente repetida en grande encima" />

En la imagen, el ayudante **Objeciones en la llamada** escucha una llamada de ventas. La columna izquierda es lo que se ha dicho, cada línea con su hora y su lado; la derecha, lo que el modelo sugirió ante cada respuesta del cliente; la sugerencia más reciente se repite en letra grande encima de las dos.

**Apuntador** aparece en la lista de la parte inferior del teléfono, entre **Historial** y **Ajustes**, en cuanto se cumplen tres cosas: el apuntador está permitido, hay un reconocedor capaz de escuchar mientras transcurre una conversación y —para los ayudantes que sugieren algo— un modelo de lenguaje. Todo ello se configura en [Ajustes → Apuntador](/ai-processing/prompter), donde también están el tamaño del texto y los propios ayudantes.

## La ventana {#the-window}
<Shot name="44_prompter_window" alt="La ventana del apuntador con el ayudante Objeciones en la llamada elegido, antes de iniciarlo" />

Arriba está el desplegable **Ayudante** y, a su derecha, los botones:

| Botón | Qué hace |
| --- | --- |
| **Iniciar** / **Detener** (triángulo / cuadrado) | *Empezar a escuchar esta llamada*, o parar: *Lo dicho permanece en pantalla*. Un inicio pulsado antes de que se conteste la llamada la espera, y entonces el botón lo cancela. |
| **Sugerencia** (destellos) | *Terminar la respuesta aquí y sugerir qué decir*, sin esperar una pausa. Para un ayudante que no pregunta a ningún modelo, el botón es **Terminar la respuesta**: solo cierra la respuesta, para que la siguiente empiece limpia. Está atenuado mientras el apuntador no está en marcha. |
| **Vaciar** (papelera) | Olvida lo que hay en pantalla, tras preguntar. *Desaparecen las dos columnas, y con ellas la conversación con la que se habría construido la siguiente sugerencia.* Detener e iniciar de nuevo no vacía nada: una conversación detenida y reanudada suele ser la misma conversación. |
| **Exportar…** (disquete) | Escribe las dos columnas en un archivo, con sus horas: texto (`.txt`) u hoja de cálculo (`.csv`), con el nombre que dé al archivo. |
| **Ensayo…** (biblioteca) | [Prueba un ayudante con una grabación](#rehearsing-on-a-recording) en lugar de con una llamada. |

El desplegable muestra los [ayudantes](/ai-processing/prompter#assistants) en el orden fijado en **Ajustes → Apuntador**. No se puede cambiar mientras un apuntador está en marcha, pero sigue a la vista, para que vea qué ayudante está trabajando. Mientras escucha, la tarjeta de la llamada dice **Escuchando**.

Bajo los botones está la banda con la línea más reciente y, debajo, las dos columnas:

- **Transcripción**: cada línea con su hora y su lado;
- **Sugerencias**: cada sugerencia con la hora de la respuesta a la que contesta. Para un ayudante que no pregunta a ningún modelo, esta columna no existe y la transcripción ocupa todo el ancho.

Cuando la ventana es estrecha, las dos columnas se colocan una encima de otra. Una columna sigue lo que va llegando hasta que usted retrocede en ella, y vuelve a seguirlo cuando regresa al final. Pulse cualquier línea para fijarla en la banda; pulse la más reciente, o la chincheta de la banda, para volver a seguir. El botón derecho copia una línea, una sugerencia, toda la transcripción o todas las sugerencias. Arrastre el separador que hay bajo la banda para hacerla más alta; los tamaños del texto se ajustan en [Ajustes → Apuntador](/ai-processing/prompter#settings--prompter).

## Ensayo con una grabación {#rehearsing-on-a-recording}
Se puede probar un ayudante sin nadie al teléfono. **Ensayo…** muestra las conversaciones de la [biblioteca](/interface/recordings), las más recientes primero, y **Un archivo de este ordenador…** para un archivo `.mp3` o `.wav`.

<Shot name="45_prompter_rehearse" alt="Ensayo…: las conversaciones de la biblioteca y un archivo de este ordenador" />

La grabación elegida aparece en un reproductor bajo los botones: reproducir y pausar, los dos canales dibujados como una forma de onda en la que se puede hacer clic, y el tiempo. Pulse **Iniciar**: la grabación se reproduce en el apuntador por el mismo camino que una llamada, a su propia velocidad; la reproducción acelerada no se ofrece a propósito, porque un apuntador alimentado a una vez y media haría pausas, respondería y cobraría por una conversación que nadie tuvo. La cruz de la derecha es **Terminar el ensayo**, de vuelta a escuchar llamadas.

Una grabación de un solo canal, como un archivo importado, se oye como una sola sala: *el apuntador lo oye todo como al interlocutor*.

## Lo que cuesta y adónde van las palabras {#what-it-costs-and-where-the-words-go}
- El reconocedor se cobra por minuto de audio en vivo, y **Reconocer también mi lado** lo duplica. Un modelo se cobra por cada sugerencia. Ambos cuentan contra los [topes mensuales](/ai-processing/prompter#spending) del apuntador, no contra los límites de Procesamiento.
- La voz del otro lado sale del ordenador a medida que habla, hacia el reconocedor que usted haya elegido. Un reconocedor en su propia máquina —**Vosk**, **WhisperLive** o **NVIDIA Riva**— la mantiene dentro de casa.
- Lo que muestra el apuntador no es una grabación. Para conservarlo, pulse **Exportar…**; para tener la conversación en sí, [grabe la llamada](/recordings) además.

## Cuando no arranca {#when-it-does-not-start}
La ventana dice qué falta en una línea bajo los botones.

| La ventana dice | Qué hacer |
| --- | --- |
| *El apuntador está desactivado. Ajustes → Apuntador.* | Marque **Permitir el uso del apuntador**. |
| *Ningún reconocedor de aquí sabe escuchar mientras alguien habla. Ajustes → Transcripción.* | Añada un reconocedor con una **Dirección para el apuntador** y pulse **Probar**. |
| *No hay nada que ejecutar. Ajustes → Apuntador, y añada un ayudante.* | Todos los ayudantes se han eliminado o desactivado: añada uno o pulse **Restaurar los valores por defecto**. |
| *Hay que avisar primero a la otra parte. Grabe esta conversación o cambie lo que dice sobre el consentimiento Ajustes → Grabación.* | Inicie la grabación, que reproduce el aviso, o cambie el ajuste de consentimiento. |
| *El reconocedor no empezó a escuchar. Compruebe su dirección en vivo y su modelo en Ajustes → Transcripción.* | La dirección para el apuntador, el modelo o la clave es incorrecta. **Probar** en la tarjeta del reconocedor dice cuál. |
| *El importe mensual para reconocedores está agotado.* | Suba **Reconocedores, al mes** o espere a que cambie el mes. |
| *El importe mensual para modelos está agotado. Las palabras siguen; el apuntado se ha detenido.* | Suba **Modelos, al mes**. |
