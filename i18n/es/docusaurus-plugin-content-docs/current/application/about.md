---
title: Acerca de
sidebar_position: 2
description: La versión, las actualizaciones, su país, la licencia, qué contiene el informe de uso, el formulario de comentarios y con qué está hecho el programa.
---

**Ajustes → Acerca de** reúne todo lo relativo al propio programa.

<Shot name="20_settings_about" alt="Ajustes → Acerca de" />

## Versión y país {#version-and-country}

Arriba están el nombre, la **Versión** (en la imagen, 1.0.1) y un enlace al sitio web, [ai-softphone.com](https://ai-softphone.com/).

**País** le dice al programa dónde está usted. Ayuda a elegir el mejor servidor de actualizaciones y abre la puerta a servicios de idioma y de voz alojados en su país. **Detectar automáticamente** lo rellena.

## Actualizaciones {#updates}

La pestaña dice si tiene la versión más reciente y cuándo se comprobó por última vez. **Buscar actualizaciones** comprueba ahora.

**Buscar actualizaciones automáticamente**, encendido por defecto, comprueba una vez al día y poco después de que arranque el teléfono. Pide a un servidor un archivo pequeño, y no se descarga ni se instala nada sin que usted lo diga.

## Licencia {#licence}

El programa es software libre bajo la GPL-2.0-or-later. Se ofrece sin ninguna garantía, y puede redistribuirlo según los términos de esa licencia; el texto completo va en el archivo llamado `LICENSE`.

## Telemetría {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Ajustes → Acerca de: qué contiene el informe de uso" />

El programa envía un pequeño informe de uso al día. Se le muestra lo que contiene antes de que salga el primero, y la pestaña lo detalla:

| | Qué se envía |
| --- | --- |
| **Siempre enviado** | Que la aplicación se ha iniciado, su versión y el idioma de la interfaz; la versión del sistema operativo, la configuración regional, el país y la zona horaria. |
| **Se envía además, en modo Ampliado** | Los contadores de llamadas y de conversaciones capturadas; el fabricante y la versión de la centralita conectada, nunca su dirección; cuántos pasos del [Resumen general](/interface/settings-overview) están hechos, y la disposición elegida. |
| **Nunca enviado, en ningún modo** | Los números que ha marcado o desde los que le han llamado; cuentas, contraseñas o cualquier cosa del llavero; contactos, conversaciones, transcripciones o grabaciones; cualquier cosa que haya escrito y cualquier dato privado del ordenador. |

Cada instalación crea para sí misma un identificador aleatorio, para que los informes de la misma copia del programa se reconozcan como uno. No se deriva de nada sobre usted ni sobre su ordenador, y no nombra a nadie — pero como perdura, los informes que lleva pueden relacionarse entre sí. Eso los hace seudónimos más que anónimos.

El informe básico tiene como base un interés legítimo: saber qué versiones se usan es lo que permite que una corrección llegue a quien la necesita. Todo lo que añade el informe ampliado está ahí porque usted lo eligió, y puede cambiarlo aquí en cualquier momento.

### Informes {#reporting}

| Opción | |
| --- | --- |
| **Ampliado** | El informe básico y lo que lista *Se envía además*. Seleccionado en la imagen. |
| **Básico** | Solo lo que es *Siempre enviado*. |
| **Desactivado** | Ningún informe. Disponible solo en la edición Enterprise; en las demás la opción está gris. |

## Comentarios {#feedback}

<Shot name="20c_settings_about_bottom" alt="Ajustes → Acerca de: el formulario de comentarios y los componentes con los que está hecho el programa" />

Un formulario que escribe a los desarrolladores sin salir del programa.

| Campo | |
| --- | --- |
| **Asunto** y **Mensaje** | Lo que quiere decir. |
| **Su nombre** y **Dirección para responderle** | Ambos son opcionales. Sin una dirección no hay forma de responderle. |
| **Adjuntar el registro** | Añade el final del registro, unos 512 kB. Consulte [Diagnóstico](/troubleshooting/diagnostics). |

**Enviar** se queda gris hasta que hay algo que enviar.

## Hecho con {#built-with}

Los componentes sobre los que está hecho el programa, cada uno con su licencia: Qt 6 (GPL-2.0 o GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (dominio público), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) y el cliente de PulseAudio (LGPL-2.1-or-later). Cada uno se usa bajo la licencia indicada a su lado; cuando un componente ofrece varias, se toma la que se nombra.
