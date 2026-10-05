---
title: Transcripción
sidebar_position: 1
description: "\"Elegir el reconocedor que convierte el audio en texto: su dirección, su modelo y una tabla de los modelos que ofrece cada servicio.\""
---

**Ajustes → Transcripción** define cómo el audio se convierte en texto: en qué idioma y con qué reconocedor.

<Shot name="25_transcription" alt="Ajustes → Transcripción: el idioma y cuatro reconocedores" />

Una conversación se transcribe cuando usted lo pide en la [ventana de grabaciones](/recordings/recordings-window), o sola si **Procesar las conversaciones automáticamente** está encendido en [Procesamiento](/ai-processing/processing). Un reconocedor en su propia máquina no cuesta nada; uno en la nube cobra por minuto de audio.

## Idioma {#language}

**Idioma** es un código de idioma de dos letras según la ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Déjelo vacío y el reconocedor decide — es lo correcto, salvo que sus llamadas sean en un idioma que entienda mal una y otra vez.

## Reconocedores {#recognisers}

Un reconocedor es un servicio de voz a texto al que el teléfono envía el audio. Pulse **Añadir** para añadir uno; el botón **Probar** del formulario comprueba que el servicio responde de verdad. Cada uno aparece con su nombre y, debajo, el modelo y la dirección de su servicio. En la imagen hay cuatro:

| Nombre | Modelo | Dirección |
| --- | --- | --- |
| **X.ai** | *(vacío: el modelo por defecto del servicio)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

El marcado como **por defecto** a la derecha de su fila (**X.ai** en la imagen) es el que se usa cuando no elige otro. Puede tener varios. El desplegable sobre una transcripción en la [ventana de grabaciones](/recordings/recordings-window#the-transcript-and-the-write-up) lista las transcripciones hechas por cada reconocedor.

El modelo puede dejarse vacío. Entonces el servicio usa su propio modelo por defecto.

## Qué modelo elegir {#which-model-to-choose}

La tabla lista los modelos de voz a texto de los cuatro servicios de la imagen. Los modelos en **negrita** son los configurados en la imagen. Para el reconocedor X.ai el modelo está vacío, así que se usa el modelo por defecto del servicio, **`grok-voice-transcribe-2.0`**.

| Servicio y dirección | Modelo | Para qué sirve |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | El modelo que OpenAI recomienda para voz grabada en su idioma original. |
| | **`gpt-4o-transcribe`** | Transcripción de uso general. |
| | `gpt-4o-mini-transcribe` | Una variante más ligera y barata del anterior. |
| | `gpt-4o-transcribe-diarize` | Indica quién habla y cuándo. Úselo solo si lo necesita. |
| | `whisper-1` | El modelo Whisper anterior, que se mantiene para usos especiales como las marcas de tiempo por palabra y los subtítulos. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transcripción de uso general en más de 90 idiomas, con separación de interlocutores. |
| | `scribe_v2_medical` | Lo mismo, ajustado para audio clínico. |
| | `scribe_v1` | La primera generación; obsoleta, use `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | El mejor modelo de uso general de Deepgram, para reuniones, audio ruidoso y multilingüe. |
| | **`nova-2`** | La generación anterior; consérvela para los idiomas que `nova-3` aún no admite. |
| | `enhanced` | Un nivel antiguo con menos errores que `base`. |
| | `base` | El nivel más antiguo, para grandes volúmenes. |
| | `whisper` | Whisper, ejecutado por Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | El modelo por defecto; 25 idiomas. |
| | `grok-voice-transcribe-1.0` | Obsoleto: el servicio lo redirige a `2.0`. |

Conviene saber antes de elegir:

- **Tamaño de archivo.** OpenAI acepta archivos de hasta 25 MB; X.ai de hasta 500 MB. Una conversación larga puede superar lo que acepta un servicio en la nube.
- **Precio.** Los servicios en la nube cobran por minuto de audio, y las tarifas varían según el modelo y cambian; consúltelas en la página del propio servicio antes de cambiar.
- **Idiomas.** Cada servicio tiene su propia lista; compruebe la suya y ponga el código de [Idioma](#language) si el reconocedor se equivoca.
- **Los modelos en tiempo real**, como `scribe_v2_realtime` o `flux` de Deepgram, están hechos para emisiones en directo y no están en la tabla: el teléfono transcribe grabaciones terminadas.

La lista de modelos de un servicio cambia a menudo. Si falta aquí un modelo que quiere, la documentación del propio servicio tiene la lista actual — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; el **Modelo** es el nombre exactamente como lo da el servicio.

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

Antes de confiar en un servidor, haga una grabación de prueba y mire la transcripción en la [ventana de grabaciones](/recordings/recordings-window): una conversación en un idioma que el modelo conoce mal lo delata enseguida.
