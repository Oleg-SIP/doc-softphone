---
title: Transcripción
sidebar_position: 1
description: "Elegir el reconocedor que convierte el sonido en texto: su dirección, su modelo y una tabla de los modelos de cada tipo de servicio."
---

**Ajustes → Transcripción** lista los reconocedores: los servicios que convierten el sonido en texto, para las conversaciones terminadas y, para el [apuntador](../interface/prompter.md), mientras una conversación está en curso.

<Shot name="25_transcription" alt="Ajustes → Transcripción: cinco reconocedores" />

Una conversación se transcribe cuando lo pide en la [ventana de grabaciones](/interface/recordings), o sola si **Procesar las conversaciones automáticamente** está activado en [Procesamiento](/ai-processing/processing). Un reconocedor en su propia máquina no cuesta nada; uno en la nube cobra por minuto de sonido.

## Reconocedores {#recognisers}
Un reconocedor es un servicio de reconocimiento de voz al que el teléfono envía el sonido. **Añadir** añade uno; el botón **Probar** de su ficha comprueba que el servicio responde de verdad. Cada uno aparece en la lista con su nombre y, debajo, el modelo y la dirección de su servicio. En la imagen hay cinco:

| Nombre | Modelo | Dirección |
| --- | --- | --- |
| **X.ai** | *(vacío: el modelo predeterminado del servicio)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(ninguno)* | `ws://localhost:2700`, un servidor en este ordenador |

Las dos marcas a la derecha de una fila dicen para qué es el reconocedor predeterminado. El reloj se enciende en el predeterminado **para transcripciones** — **X.ai** en la imagen —, que se usa cuando no elige otro. El rayo se enciende en el predeterminado **para el apuntador** — **Vosk** en la imagen. Puede tener varios reconocedores; la lista desplegable encima de una transcripción en la [ventana de grabaciones](/interface/recordings#transcript-or-write-up-the-drop-down) muestra las transcripciones hechas por cada uno.

## La ficha del reconocedor {#the-recognisers-card}
Al pulsar un reconocedor se abre su ficha.

<Shot name="43_recogniser_card" alt="La ficha del reconocedor X.ai: tipo, las dos direcciones, clave, Probar y los predeterminados" />

| Campo | Qué es |
| --- | --- |
| **Nombre** | El nombre en las listas. |
| **Tipo** | El tipo de servicio, que decide cómo le habla el teléfono: **Compatible con OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics**, y tres que funcionan en su propia máquina — **Vosk**, **WhisperLive** y **NVIDIA Riva**. **Yandex SpeechKit** se ofrece cuando el país elegido en [Acerca de](../application/about.md) es Rusia o uno de sus vecinos. |
| **Dirección para transcripciones** | Adónde se envían las conversaciones terminadas. |
| **Dirección para el apuntador** | Adónde va el sonido en directo mientras transcurre una conversación. *Vacío se deduce de la dirección de al lado*, como `wss://api.x.ai` en la imagen. |
| **Clave** | La clave del servicio. *Se guarda en el llavero de este ordenador, nunca en un archivo de ajustes.* |
| **Probar** | Pregunta al servicio y dice qué respondió, por ejemplo *Ha respondido, y ofrece 3 modelos*. |
| **Modelo para transcripciones** y **Modelo para el apuntador** | El modelo, exactamente como lo llama el servicio. *Vacío no envía ningún nombre de modelo*, y el servicio usa su propio predeterminado; cuando el proveedor publica uno, la ficha lo nombra. El campo no se muestra para un tipo que no da a elegir. |
| **Predeterminado para transcripciones** | Lo convierte en el reconocedor que se usa cuando no elige otro. |
| **Predeterminado para el apuntador** | Lo convierte en el reconocedor con el que escucha un ayudante nuevo del apuntador. |
| **Activado** | Desactivado, el reconocedor sigue en la lista y no se usa. |

**Ajustes avanzados** abre el resto de la ficha. Los valores que más importan:

<Shot name="43b_recogniser_advanced" alt="Los ajustes avanzados de un reconocedor: límites, cómo se cortan las respuestas, el idioma" />

| Campo | Qué hace |
| --- | --- |
| **Región** | La región del servicio, para uno que tiene varias. |
| **Enviar los dos lados por separado** | Una llamada se graba con las dos personas en dos canales, y eso es lo que le dice al reconocedor quién dijo qué. Desactívelo para un servidor que dice saber hacerlo y no sabe. |
| **Preguntar quién habla** | Distingue a las personas dentro de un mismo canal, cuando varias hablan en él. |
| **Escribir los números con cifras** | Importes, fechas y números de teléfono vuelven tal como se escriben, en vez de en letras. |
| **Límite de subida**, **Límite de duración** | El archivo más grande, en bytes, y la grabación más larga, en segundos, que enviará este teléfono. |
| **Peticiones a la vez** | Cuántas peticiones pueden estar en curso al mismo tiempo. |
| **Terminar una respuesta tras**, **Unir respuestas cortas en**, **Silencio entre turnos** | Para el apuntador: cuánto tiempo sin palabras nuevas termina una respuesta, cuánto espera una respuesta corta a la siguiente para unirse a ella, y cuánto silencio termina un turno donde el reconocedor no marca ninguno. En milisegundos. |
| **Idioma** | Un código de idioma de dos letras según la ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Déjelo vacío y el reconocedor decide — es lo correcto, salvo que sus llamadas sean en un idioma que entienda mal una y otra vez. |
| **Extras** | Un `name = value` por línea, pasado al servicio tal cual. Déjelo vacío salvo que el servidor documente algo. |
| **Espera, minutos** | Cuánto esperar una transcripción. Vacío lo calcula a partir de la duración de la grabación. |
| **Precio por minuto** | Lo que cuesta un minuto de sonido en directo, según la lista de precios del servicio. El apuntador muestra lo que ha costado una sesión y se detiene en su [tope mensual](prompter.md#spending). |

## Reconocimiento en directo para el apuntador {#live-recognition-for-the-prompter}
El [apuntador](../interface/prompter.md) necesita un reconocedor que escuche mientras alguien habla, por un flujo y no con un archivo terminado. Estos tipos pueden: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Compatible con OpenAI** (con la transcripción en tiempo real de OpenAI), **AssemblyAI**, **Soniox** y **Speechmatics** en la nube, **Yandex SpeechKit** donde se ofrece, y **Vosk**, **WhisperLive** y **NVIDIA Riva** en su propia máquina. Un reconocedor en su propia máquina deja la voz del interlocutor dentro de casa y no cobra nada.

Para usar uno: abra su ficha, compruebe la **Dirección para el apuntador** (o deje que se deduzca), elija el **Modelo para el apuntador** si el servicio ofrece varios — los modelos en directo suelen ser distintos de los de archivos, como `scribe_v2_realtime` de ElevenLabs — y pulse **Probar**. Marque **Predeterminado para el apuntador** para que los ayudantes nuevos escuchen con él.

## Qué modelo elegir {#which-model-to-choose}
La tabla lista los modelos de reconocimiento de voz de cada tipo de la lista **Tipo**. Los modelos en **negrita** son los configurados en la imagen; para el reconocedor X.ai el modelo está vacío, así que se usa el predeterminado del servicio, **`grok-voice-transcribe-2.0`**. **Para** dice para qué está hecho un modelo: para grabaciones terminadas (*transcripciones*), para el habla en directo del [apuntador](#live-recognition-for-the-prompter) (*apuntador*), o para *ambos*.

| Tipo y dirección | Modelo | Para | Para qué sirve |
| --- | --- | --- | --- |
| **Compatible con OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transcripciones | El modelo que OpenAI recomienda para el habla grabada en su idioma original. |
| | **`gpt-4o-transcribe`** | ambos | Transcripción de uso general. Un reconocedor nuevo de este tipo lo recibe. |
| | `gpt-4o-mini-transcribe` | ambos | Una variante más ligera y barata del anterior. |
| | `gpt-4o-transcribe-diarize` | transcripciones | Marca quién habla y cuándo. Úselo solo si lo necesita. |
| | `whisper-1` | transcripciones | El modelo Whisper antiguo, conservado para usos especiales como marcas de tiempo por palabra y subtítulos. |
| | `gpt-live-transcribe` | apuntador | El modelo en directo de OpenAI: las palabras llegan según se pronuncian. El teléfono lo ofrece para el apuntador. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | ambos | El mejor modelo de uso general de Deepgram, para reuniones, sonido ruidoso y multilingüe. Un reconocedor nuevo de este tipo lo recibe. |
| | **`nova-2`** | ambos | La generación anterior; consérvela para idiomas que `nova-3` aún no admite. |
| | `nova-2-phonecall` | ambos | `nova-2` ajustado al sonido estrecho de una línea telefónica. Inglés. |
| | `flux-general-en` | apuntador | Hecho para la conversación: oye cuándo alguien ha terminado de hablar. Inglés. |
| | `flux-general-multi` | apuntador | Lo mismo en diez idiomas, y una conversación puede pasar de uno a otro. |
| | `enhanced`, `base` | transcripciones | Niveles más antiguos; `base` es para grandes volúmenes. |
| | `whisper` | transcripciones | Whisper, ejecutado por Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transcripciones | Transcripción de uso general en más de 90 idiomas, con separación de hablantes. |
| | `scribe_v2_realtime` | apuntador | La versión en directo de `scribe_v2`. El teléfono la ofrece para el apuntador. |
| | `scribe_v2_medical` | transcripciones | `scribe_v2` ajustado al sonido clínico. |
| | `scribe_v1` | transcripciones | La primera generación; obsoleta, use `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | ambos | El más preciso, para una conversación en un solo idioma. Un reconocedor nuevo de este tipo lo recibe. |
| | `standard` | ambos | Más rápido y barato, algo menos preciso. |
| | `melia-1` | transcripciones | Una conversación en varios idiomas, que cambia a mitad de frase, vuelve como una sola transcripción. Solo grabaciones, en las regiones UE y EE. UU.; todavía sin diccionario propio ni etiquetas de hablantes. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | ambos | El predeterminado; 25 idiomas. |
| | `grok-voice-transcribe-1.0` | transcripciones | Obsoleto: el servicio lo redirige a `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transcripciones | Más de 60 idiomas, con separación de hablantes. |
| | `stt-rt-v5` | apuntador | En directo, en los mismos más de 60 idiomas, y oye dónde termina un turno. El teléfono lo ofrece para el apuntador. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | ambos | El modelo más preciso para grabaciones; 18 idiomas, y una conversación puede pasar de uno a otro. |
| | `universal-2` | transcripciones | 99 idiomas, más barato; AssemblyAI recurre a él para un idioma que `universal-3-5-pro` no conoce. |
| | `universal-3-6-pro` | apuntador | El modelo en directo más reciente de AssemblyAI, 32 idiomas; el servicio lo usa cuando el modelo está vacío. |
| | `universal-streaming-multilingual` | apuntador | Reconocimiento en directo más barato en inglés, español, alemán, francés, portugués e italiano. |
| | `universal-streaming-english` | apuntador | Reconocimiento en directo más barato, solo en inglés. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | ambos | El modelo principal, fuerte en ruso, también por teléfono. Se ofrece cuando el país es Rusia o uno de sus vecinos. |
| | `general:rc` | ambos | La próxima versión del modelo antes de su lanzamiento. |
| | `deferred-general` | transcripciones | Reconocimiento diferido: la transcripción llega más tarde, por menos dinero. |
| **Vosk (en su propia máquina)**<br />`ws://localhost:2700` | *(se fija en el servidor)* | ambos | Gratuito y ligero; funciona sin tarjeta gráfica. El modelo es aquel con el que se arrancó el servidor, uno por idioma, por ejemplo `vosk-model-es-0.42` o el pequeño `vosk-model-small-es-0.42`. |
| **WhisperLive (en su propia máquina)**<br />`ws://localhost:9090` | `small` | ambos | Whisper sobre un flujo en directo. El tamaño se elige en la ficha: `tiny`, `base`, `small` (el que ofrece el teléfono), `medium`, `large-v3`; cuanto más grande, más preciso, y más pide una tarjeta gráfica. |
| **NVIDIA Riva (en su propia máquina)**<br />`localhost:50051` | *(se fija en el servidor)* | ambos | El servidor de voz de NVIDIA, para un ordenador con tarjeta gráfica NVIDIA. Sirve modelos como Parakeet y Canary. |

Lo que conviene saber antes de elegir:

- **Transcripciones o apuntador.** Un modelo hecho para el habla en directo no acepta un archivo terminado, y la mayoría de los modelos para archivos no saben escuchar en directo. Por eso una ficha tiene dos campos, **Modelo para transcripciones** y **Modelo para el apuntador**.
- **Tamaño del archivo.** OpenAI acepta archivos de hasta 25 MB; X.ai, de hasta 500 MB. Una conversación larga puede superar lo que acepta un servicio en la nube.
- **Precio.** Los servicios en la nube cobran por minuto de sonido, y las tarifas varían según el modelo y cambian; consúltelas en la página del propio servicio antes de cambiar. Un reconocedor en su propia máquina no cuesta nada.
- **Idiomas.** Cada servicio tiene su propia lista; compruebe la suya y ponga el código en **Idioma**, en los ajustes avanzados del reconocedor, si adivina mal.

La lista de modelos de un servicio cambia a menudo. Si falta aquí un modelo que quiere, la documentación del propio servicio tiene la lista actual — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — y el **Modelo** es el nombre exactamente como lo da el servicio.

## Sus propios modelos {#your-own-models}

Un reconocedor no tiene por qué ser un servicio en la nube. El teléfono puede usar **cualquier modelo servido a través de la API compatible con OpenAI** — la interfaz `POST /v1/audio/transcriptions` —, tanto si funciona localmente en su ordenador como en un servidor propio. El audio nunca sale de sus instalaciones, no se cobra nada por minuto y no hay límite de volumen.

Para añadir uno, pulse **Añadir** e indique:

- la **dirección** del servidor, hasta `/v1` incluido, por ejemplo `http://localhost:8000/v1` para el propio ordenador o `http://asr.local:8080/v1` para un servidor de su red;
- el nombre del **modelo** exactamente como lo lista el servidor, por ejemplo `openai/whisper-large-v3-turbo`.

### Qué se puede usar {#what-can-be-used}

La opción habitual es **Whisper**, el modelo abierto de reconocimiento de voz de OpenAI. Es de uso gratuito, entiende un centenar de idiomas y existe en varios tamaños: un modelo pequeño funciona en un ordenador corriente, los grandes son notablemente más precisos y conviene darles una tarjeta gráfica.

| Modelo | Notas |
| --- | --- |
| `whisper-large-v3` | El Whisper más preciso. Para un servidor con GPU. |
| `openai/whisper-large-v3-turbo` | Una versión más rápida de `large-v3`, con una pequeña pérdida de precisión. |
| `Systran/faster-whisper-large-v3` | `large-v3` convertido para el motor faster-whisper; más rápido y con menos memoria. |
| `medium`, `small`, `base` | Modelos Whisper más pequeños, para un ordenador sin tarjeta gráfica. |

Whisper es el modelo en torno al cual están hechos estos servidores. Algunos también pueden servir otros modelos de reconocimiento de voz, como NVIDIA Parakeet.

### Servidores que ofrecen la API compatible con OpenAI {#servers-that-offer-the-openai-compatible-api}

El modelo tiene que ejecutarlo un servidor que ofrezca el punto de acceso `/v1/audio/transcriptions` compatible con OpenAI. Estos lo hacen:

| Servidor | Qué es |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Un servidor de modelos de alto rendimiento. Una vez arrancado, sirve Whisper en `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Un servidor de modelos de voz, «el Ollama de la voz», basado en faster-whisper. Carga un modelo la primera vez que se le pide. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Ejecuta Whisper con eficiencia en una CPU, incluido Apple silicon. Su `whisper-server` se arranca con `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Un sustituto directo de OpenAI que ejecuta los modelos localmente. |

Cualquier otro servidor que ofrezca el mismo punto de acceso funciona igual. Si un servidor necesita una clave, introdúzcala como para un servicio en la nube.

Antes de confiar en un servidor, haga una grabación de prueba y mire la transcripción en la [ventana de grabaciones](/interface/recordings): una conversación en un idioma que el modelo conoce mal lo delata enseguida.
