---
title: Problemas frecuentes
sidebar_position: 2
description: "Qué comprobar cuando una cuenta no se registra, no hay sonido, una llamada o una reunión no se graba, no hay transcripción, el apuntador no arranca, o un enlace, un atajo o la API no hacen nada, y qué significan los mensajes del propio teléfono."
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

- **Ajustes → Grabación**, el primer desplegable, decide qué llamadas se graban; el valor por defecto, **A mano**, solo graba cuando pulsa grabar en la tarjeta de la llamada. Consulte [Grabaciones](/recordings).
- La grabación empieza cuando se contesta la llamada, así que una llamada no contestada no tiene archivo.
- El módulo **Grabación** debe estar encendido en [Módulos](/application/modules).
- Las grabaciones se borran según los límites de **Retención**; una grabación fijada nunca se borra.

## No se capturó una reunión en otra aplicación {#a-meeting-in-another-application-was-not-captured}

Consulte [Captura](/capture/).

- **Permitir la captura de sonido** en **Ajustes → Captura** debe estar encendido.
- Con **Inicio automático** en **Preguntarme** (el valor por defecto), responda a la pregunta cuando aparezca; con **Nunca**, pulse usted el botón de grabar.
- Use **Probar** en la misma pestaña: la barra de arriba debe moverse cuando habla, la de abajo cuando algo suena.
- El módulo **Captura** debe estar encendido en [Módulos](/application/modules).

## Hay una grabación, pero no hay transcripción ni resumen {#there-is-a-recording-but-no-transcript-or-summary}

- Una conversación se transcribe y se redacta sola solo si **Procesar las conversaciones automáticamente** está encendido en [Ajustes → Procesamiento](/ai-processing/processing). Si no, pídalo en la [ventana de grabaciones](/interface/recordings).
- Tiene que haber un [reconocedor](/ai-processing/transcription) y un [modelo de lenguaje](/ai-processing/processing#language-models), y cada uno tiene que responder en su dirección.
- Cuando se alcanza el **Límite de dinero** o el **Límite de tokens** mensual, las reglas automáticas se detienen hasta que cambia el mes. Lo que pide usted mismo nunca se detiene.
- Los pasos de [Ajustes → Resumen general](/interface/settings-overview) muestran lo que falta por configurar.

## El apuntador no aparece o no arranca {#the-prompter-does-not-appear-or-does-not-start}

**Apuntador** aparece en la lista de la parte inferior del teléfono solo cuando se cumplen tres cosas: un reconocedor con una **Dirección para el apuntador** que haya pasado su **Probar** en [Ajustes → Transcripción](/ai-processing/transcription#live-recognition-for-the-prompter), un modelo de lenguaje y la casilla **Permitir el uso del apuntador** en [Ajustes → Apuntador](/ai-processing/prompter). El módulo **Apuntador** tiene que estar activado en [Módulos](/application/modules).

Si la ventana se abre pero el apuntador no arranca, la línea bajo sus botones dice qué falta. [Cuando no arranca](/interface/prompter#when-it-does-not-start) recoge todos los mensajes y qué hacer con cada uno.

## El teléfono desapareció al cerrar la ventana {#the-phone-disappeared-when-i-closed-the-window}

Con **Dejar el teléfono en marcha al cerrar la ventana** encendido, el teléfono sigue en marcha y las llamadas siguen llegando. El icono del área de notificación (la barra de menús en macOS) devuelve la ventana. En un escritorio sin área de notificación, el teléfono queda minimizado en la barra de tareas. Consulte [Arranque](/program/startup).

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

## Mensajes del teléfono {#messages-the-phone-shows}

Cuando algo no ocurre, el teléfono dice por qué en una línea aparte. Una línea bajo una lista desaparece sola al cabo de unos segundos.

### Cuando una llamada no sale {#when-a-call-is-not-placed}

| Mensaje | Qué hacer |
| --- | --- |
| *No hay ninguna cuenta configurada* | Añada una cuenta en [Ajustes → Cuentas](/sip-accounts/setup). |
| *No hay ninguna cuenta activada, así que no hay línea desde la que llamar.* | Marque la casilla de una cuenta en **Ajustes → Cuentas**. |
| *Todavía no hay ninguna línea registrada.* | La cuenta está activada pero aún no se ha registrado en la centralita. Espere a que su punto se ponga verde; si no, consulte [La cuenta no se registra](#the-account-will-not-register). |
| *Ya hay tantas llamadas como este teléfono admite.* | Cuelgue una de las llamadas y vuelva a llamar. |
| *La cuenta desde la que se habría llamado ya no está.* | La fila pertenece a una cuenta que se ha eliminado desde entonces. Marque el número en el teclado. |
| *Esta fila no tiene número al que devolver la llamada.* | Quien llamó ocultó su número, así que no hay a quién devolver la llamada. |

### Cuando una cuenta no se conecta {#when-an-account-does-not-connect}

| Mensaje | Qué hacer |
| --- | --- |
| *No se ha encontrado esa dirección de servidor. Compruebe si tiene alguna errata.* | Compruebe **Dirección del servidor** en [el formulario de la cuenta](/sip-accounts/setup). |
| *No se ha podido llegar al servidor. Compruebe la dirección, el puerto y su red.* | Compruebe **Dirección del servidor**, y también **Transporte** y **Puerto** en **Ajustes del servidor**. Un cortafuegos también puede estar bloqueando SIP. |
| *El servidor ha rechazado este usuario o esta contraseña.* | Compruebe **Usuario** y **Contraseña**. Si la centralita comprueba la contraseña con otro nombre, rellene **Usuario de autenticación**. |
| *No se ha podido verificar el certificado del servidor. Si el administrador del servidor lo emitió por su cuenta, desmarque «Verificar el certificado» en «Ajustes del servidor».* | Aparece con una conexión TLS. Si la centralita usa un certificado hecho por ella misma, desmarque **Verificar el certificado** en **Ajustes del servidor**. |
| *La contraseña de esta cuenta no se ha podido leer del llavero. Desbloquéelo y conecte de nuevo.* | Desbloquee el llavero del ordenador (el Llavero en macOS) y luego pulse **Conectar** junto a la cuenta. |

### Durante una llamada {#during-a-call}

| Mensaje | Qué hacer |
| --- | --- |
| *Ningún formato de audio en común* | La centralita y el teléfono no tienen ningún códec en común. Active uno que use la centralita en [Formatos de audio](/sip-accounts/calls#audio-formats). |
| *Sin micrófono ni altavoces* | Elija los dispositivos en [Ajustes → Dispositivos](/sip-accounts/devices). |
| *Sin grabar: el disco ha bajado hasta el límite. Libere espacio o cambie el límite en los ajustes.* | El espacio libre en el disco ha llegado al **Umbral de espacio en disco** — consulte [Grabaciones](/recordings). Libere espacio o baje el umbral. |

### Al iniciar el teléfono {#when-the-phone-starts}

*No se puede leer la base de datos* significa que la base de datos la creó otra versión del programa y esta no puede leerla. Normalmente se abrió una versión más antigua con los datos de una más nueva: si vuelve a instalar la versión más nueva, esta abre la base tal como estaba. **Empezar de nuevo**, en cambio, crea una base vacía — se pierden todos los contactos y todas las llamadas del historial, y no se puede deshacer. Antes de pulsarlo, puede guardar una copia del archivo de la base; [Diagnóstico](/troubleshooting/diagnostics#files) dice dónde está.
