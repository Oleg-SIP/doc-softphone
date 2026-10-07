---
title: Problemas frecuentes
sidebar_position: 2
description: "\"Qué comprobar cuando una cuenta no se registra, no hay sonido, una llamada o una reunión no se graba, no hay transcripción, o un enlace, un atajo o la API no hacen nada.\""
---

Cada entrada remite al ajuste que lo decide. Si la respuesta no está aquí, abra el [Diagnóstico](/troubleshooting/diagnostics): muestra lo que se dicen el teléfono y la centralita.

## La cuenta no se registra {#the-account-will-not-register}

El punto junto a la cuenta en **Ajustes → Cuentas** se queda gris o rojo.

1. Compruebe **Usuario**, **Contraseña** y **Dirección del servidor** en [el formulario de la cuenta](/sip-accounts/setup).
2. Si su centralita comprueba la contraseña con otro nombre distinto de la extensión, rellene **Usuario de autenticación** en **Ajustes del servidor**.
3. Compruebe **Transporte** y **Puerto** frente a lo que espera la centralita.
4. Abra la pestaña **SIP** de la [ventana de diagnóstico](/troubleshooting/diagnostics) y mire la petición `REGISTER` y lo que respondió el servidor.

## No oigo, o no me oyen {#i-cannot-hear-or-i-cannot-be-heard}

Abra [Ajustes → Dispositivos](/sip-accounts/devices).

- Diga algo: la barra bajo **Micrófono** debe moverse. Si no se mueve, elija otro micrófono.
- Pulse **Probar** bajo **Altavoces** para oír un sonido en el dispositivo elegido.
- Compruebe los deslizadores de **Volumen**. **Silenciar el micrófono** en la tarjeta de la llamada y el [atajo](/program/shortcuts) **Silenciar el micrófono** apagan el micrófono durante una llamada.
- El tono de llamada puede sonar en un dispositivo distinto del que usa para hablar — **Tono de llamada**, el segundo desplegable.

## La llamada se oye mal, o no se establece {#the-call-sounds-bad-or-does-not-start}

Los códecs se ofrecen en el orden de la lista de [Ajustes → Llamadas](/sip-accounts/calls#audio-formats). Deje encendidos los códecs que usa su centralita y ponga el mejor de ellos primero. Un cambio se aplica desde su próxima llamada.

## Una segunda llamada no suena {#a-second-call-does-not-ring}

Lo que ocurre cuando alguien llama mientras usted está en una llamada se ajusta en [Llamada en espera](/sip-accounts/calls#call-waiting).

## Una llamada no se grabó {#a-call-was-not-recorded}

- **Ajustes → Grabación**, el primer desplegable, decide qué llamadas se graban; el valor por defecto, **A mano**, solo graba cuando pulsa grabar en la tarjeta de la llamada. Consulte [Grabar llamadas](/recordings/call-recording).
- La grabación empieza cuando se contesta la llamada, así que una llamada no contestada no tiene archivo.
- El módulo **Grabación** debe estar encendido en [Módulos](/application/modules).
- Las grabaciones se borran según los límites de **Retención**; una grabación fijada nunca se borra.

## No se capturó una reunión en otra aplicación {#a-meeting-in-another-application-was-not-captured}

Consulte [Captura](/capture/).

- **Permitir la captura de sonido** en **Ajustes → Captura** debe estar encendido.
- Con **Inicio automático** en **Preguntarme** (el valor por defecto), responda a la pregunta cuando aparezca; con **Nunca**, pulse usted **Grabar**.
- Use **Probar** en la misma pestaña: la barra de arriba debe moverse cuando habla, la de abajo cuando algo suena.
- El módulo **Captura** debe estar encendido en [Módulos](/application/modules).

## Hay una grabación, pero no hay transcripción ni resumen {#there-is-a-recording-but-no-transcript-or-summary}

- Una conversación se transcribe y se redacta sola solo si **Procesar las conversaciones automáticamente** está encendido en [Ajustes → Procesamiento](/ai-processing/processing). Si no, pídalo en la [ventana de grabaciones](/interface/recordings).
- Tiene que haber un [reconocedor](/ai-processing/transcription) y un [modelo de lenguaje](/ai-processing/processing#language-models), y cada uno tiene que responder en su dirección.
- Cuando se alcanza el **Límite de dinero** o el **Límite de tokens** mensual, las reglas automáticas se detienen hasta que cambia el mes. Lo que pide usted mismo nunca se detiene.
- Los pasos de [Ajustes → Resumen general](/interface/settings-overview) muestran lo que falta por configurar.

## El teléfono desapareció al cerrar la ventana {#the-phone-disappeared-when-i-closed-the-window}

Con **Dejar el teléfono en marcha al cerrar la ventana** encendido, el teléfono sigue en marcha y las llamadas siguen llegando. El icono del área de notificación (la barra de menús en macOS) devuelve la ventana. Consulte [Arranque](/program/startup).

## Un número de teléfono en un navegador o en un CRM no llama {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Pulse **Abrir los enlaces de llamada con este teléfono** en [Ajustes → Arranque](/program/startup#call-links). Un número en el que se hace clic llega al marcador y espera allí, salvo que **Llamar enseguida, sin pulsar Llamar** esté encendido.

## La luz de un botón se queda gris {#a-buttons-lamp-stays-grey}

La centralita no dice si la extensión está libre. El botón sigue marcando. Consulte [Botones](/sip-accounts/buttons).

## La API REST no responde {#the-rest-api-does-not-answer}

- **Dejar que otros programas de este ordenador manejen el teléfono** debe estar encendido en [Ajustes → Integración](/integration/rest-api), y el módulo **Integración** en [Módulos](/application/modules).
- La dirección es `http://127.0.0.1:8377`, salvo que haya cambiado el **Puerto**.
- Un grupo que no abrió en **Acceso** responde a cada petición con `404`.
- Si puso un **Token**, las peticiones que cambian datos guardados deben llevarlo en la cabecera `Authorization`.
- Hay más síntomas en [Cuando no funciona](/integration/rest-api#when-it-does-not-work).

## Los webhooks no llegan {#webhooks-do-not-arrive}

Pulse **Enviar un evento de prueba** en [Ajustes → Integración](/integration/webhooks). Los contadores `webhooks_failed_total` y `webhooks_dropped_total` de la API REST muestran cómo va la entrega; [Cuando no llega nada](/integration/webhooks#when-nothing-arrives) explica qué significa cada uno.

## Un atajo no hace nada {#a-hotkey-does-nothing}

Abra [Atajos](/program/shortcuts). Un atajo funciona mientras el teléfono es el programa que está usando; para usarlo desde cualquier programa, marque **En todas partes**. Haga clic en el atajo y vuelva a pulsar la combinación si otro programa se la ha quedado.
