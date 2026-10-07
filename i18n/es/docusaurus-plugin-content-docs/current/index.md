---
slug: /
title: Documentación de AI Softphone
sidebar_position: 1
description: Qué es AI Softphone, en qué funciona y dónde se describe cada parte del programa.
---

[AI Softphone](https://ai-softphone.com/) es un softphone para centralitas IP que además convierte cada conversación en texto y en un resumen escrito. Una conversación puede llegarle de tres maneras, y las tres acaban en la misma biblioteca con la misma grabación, transcripción y redacción:

- **una llamada** hecha o recibida en el programa, a través de cualquier centralita IP o proveedor SIP;
- **una reunión** en Zoom, Teams, Meet o cualquier otra aplicación, grabada desde el propio ordenador;
- **una grabación que ya tiene** — de un móvil, una grabadora u otro sistema — añadida a la biblioteca.

Las grabaciones, las transcripciones y el historial se guardan en un archivo que es suyo. No hace falta cuenta ni suscripción, y el programa es software libre bajo la GPL v2.

## De una conversación a una redacción {#from-a-conversation-to-a-write-up}

1. Llega una conversación: una llamada, una reunión o un archivo.
2. Se graba en dos canales, de modo que lo que dijo usted y lo que dijo el otro lado quedan separados.
3. Se transcribe, interlocutor por interlocutor, sincronizada con el audio.
4. El modelo de lenguaje que haya elegido la redacta: resumen, tareas, categoría, etiquetas y señales — y puede hacerle una pregunta a la conversación.

## Descarga y requisitos del sistema {#download-and-system-requirements}

El programa se descarga gratis desde [ai-softphone.com](https://ai-softphone.com/#download): un instalador (`.exe`) para Windows, una imagen de disco (`.dmg`) para macOS, y una AppImage o un `.deb` para Linux. El instalador, la imagen de disco y la AppImage no necesitan nada instalado antes — Qt, OpenSSL y el entorno de ejecución de C++ viajan dentro de ellos. La excepción es el `.deb`: usa el entorno de ejecución de C++ del propio sistema; véase más abajo. Necesitará una cuenta SIP, de su proveedor o de la centralita que gestione usted mismo. La grabación funciona en cuanto el programa está instalado; la transcripción y la redacción necesitan un servicio que usted elija o un modelo en su propia máquina.

| Sistema | Requisitos |
| --- | --- |
| macOS | macOS 14.4 o posterior; solo Apple silicon — un Mac con Intel no puede abrirlo, ni siquiera mediante Rosetta; gráficos Metal; 160 MB de espacio en disco, más las grabaciones. El sistema pide una vez acceso al micrófono. |
| Windows | Windows 10 versión 1809 (compilación 17763) o posterior, y Windows 11; procesador Intel o AMD de 64 bits; Direct3D 11 u OpenGL 2.1; 250 MB de espacio en disco, más las grabaciones. |
| Linux | Ubuntu 22.04 LTS o posterior, Debian 12 o posterior, y cualquier sistema de esa época — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; biblioteca C de GNU 2.35 o posterior; procesador Intel o AMD de 64 bits; OpenGL 2.1 u OpenGL ES 2.0, en X11 o Wayland; PipeWire o PulseAudio (ALSA donde no haya ninguno de los dos); 200 MB de espacio en disco, más las grabaciones. El icono de la bandeja necesita un escritorio con área de notificación de estado. |

En Linux, la AppImage funciona en cualquier distribución de esa época: hágala ejecutable y arránquela. El `.deb` necesita además el entorno de ejecución de C++ del propio sistema procedente de GCC 13, que tienen Ubuntu 24.04 y Debian 13 y no tiene Ubuntu 22.04; en cualquier sistema más antiguo, use la AppImage.

La interfaz está disponible en treinta idiomas, que se eligen en [Apariencia](/program/appearance) y se cambian sin reiniciar.

Las capturas de pantalla de esta documentación están hechas en macOS y se muestran en pequeño: haga clic en una para verla a tamaño completo. El programa tiene el mismo aspecto y funciona igual en los demás sistemas.

## Primeros pasos {#first-steps}

1. [Añada una cuenta](sip-accounts/setup.md) para su centralita o proveedor SIP.
2. [Elija el micrófono y los altavoces](sip-accounts/devices.md) y haga una llamada de prueba.
3. Decida [qué llamadas se graban](recordings/call-recording.md).
4. Añada un [reconocedor](ai-processing/transcription.md) y un [modelo de lenguaje](ai-processing/processing.md) si quiere transcripciones y redacciones.

**Ajustes → Resumen general** le lleva esta lista: un punto verde marca un paso hecho, uno rojo un paso pendiente. Consulte [Resumen de los ajustes](interface/settings-overview.md).

## Qué leer a continuación {#where-to-read-next}

| Si quiere… | Lea |
| --- | --- |
| Orientarse por las ventanas | [Interfaz](interface/main-window.md) |
| Conectar el teléfono a su centralita | [Configurar una cuenta SIP](sip-accounts/setup.md) |
| Elegir micrófono, altavoces y tono de llamada | [Dispositivos](sip-accounts/devices.md) |
| Ajustar los códecs, la llamada en espera y el historial de llamadas | [Ajustes de llamadas](sip-accounts/calls.md) |
| Poner a sus compañeros en botones de una sola pulsación | [Botones](sip-accounts/buttons.md) |
| Decidir qué llamadas se graban y durante cuánto tiempo | [Grabar llamadas](recordings/call-recording.md) |
| Escuchar, buscar y leer sus conversaciones | [Ventana de grabaciones](interface/recordings.md) |
| Grabar una reunión celebrada en otra aplicación | [Captura](capture/capture.md) |
| Elegir el reconocedor que convierte la voz en texto | [Transcripción](ai-processing/transcription.md) |
| Decidir qué IA redacta sus conversaciones y cuánto puede costar | [Procesamiento](ai-processing/processing.md) |
| Cambiar las categorías, las etiquetas y las señales | [Diccionarios](ai-processing/dictionaries.md) |
| Cambiar la disposición, el tema, el arranque y los atajos | [Apariencia](program/appearance.md), [Arranque](program/startup.md) y [Atajos](program/shortcuts.md) |
| Conectar un CRM u otro programa | [Webhooks](integration/webhooks.md) y [API REST local](integration/rest-api.md) |
| Ver qué se dicen el teléfono y la centralita | [Diagnóstico](troubleshooting/diagnostics.md) |
| Encontrar la causa de un problema | [Problemas frecuentes](troubleshooting/common-problems.md) |
| Apagar partes del programa | [Módulos](application/modules.md) |
| Comprobar la versión, las actualizaciones y qué contiene el informe de uso | [Acerca de](application/about.md) |

Las páginas siguen el orden de las pestañas de **Ajustes**.

## Privacidad {#privacy}

- Por defecto, todo se queda en su ordenador: las grabaciones, las transcripciones y el historial viven en un archivo que es suyo. Nada de una conversación — ni un número, ni un nombre, ni una palabra de lo dicho — va a ningún sitio al que usted no lo haya enviado.
- Las contraseñas de las cuentas, el valor de la cabecera del webhook y el token de la API se guardan en el llavero del sistema operativo, nunca en un archivo de ajustes.
- Una versión nueva se anuncia cuando aparece — nunca durante una llamada — y solo se instala cuando usted lo dice.
- El programa envía un pequeño informe de uso al día. Se le muestra lo que contiene antes de que salga el primero, y usted elige cuánto lleva: **Básico** o **Ampliado**. Nunca contiene números, contactos, la dirección de su centralita ni nada de lo dicho en una conversación. La lista completa está en [Acerca de](/application/about#telemetry).
- El programa es software libre bajo la GPL v2.
