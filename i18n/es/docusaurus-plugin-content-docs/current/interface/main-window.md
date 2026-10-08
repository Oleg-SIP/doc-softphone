---
title: Ventana principal
sidebar_position: 1
description: El teléfono a la izquierda, la biblioteca y los ajustes a la derecha — la disposición de la ventana principal de AI Softphone.
---

La ventana principal es el propio teléfono. Con la disposición por defecto, **Una ventana**, el teléfono está a la izquierda y todo lo demás se abre a la derecha. La [disposición se puede cambiar](../program/appearance.md).

<Shot name="03_contacts" full alt="La ventana principal: el teléfono a la izquierda y la pestaña Contactos a la derecha" />

## El teléfono {#the-phone}

De arriba abajo, la parte izquierda contiene:

- el campo **Número**;
- el teclado y la tecla de llamada;
- las fichas de las cuentas;
- los botones que vigilan otras extensiones;
- los cuatro destinos: **Grabaciones**, **Contactos**, **Historial** y **Ajustes**.

### El marcador {#the-dialler}

- **Número** — escriba o pegue el número al que llamar. El icono del reloj al final del campo abre la lista de los números a los que ha llamado o desde los que le han llamado últimamente.
- Las teclas redondas **1–9**, **\***, **0** y **#** escriben el número, y durante una llamada envían tonos (DTMF).
- La tecla del auricular hace la llamada. Se queda gris mientras no haya número.

<Shot name="22_last_calls" full alt="La lista de llamadas recientes bajo el campo Número, junto a la pestaña Historial" />

Cuando la lista de números recientes está abierta, el campo muestra una flecha y la tecla de llamada pasa a su derecha. Cada entrada es un nombre, o un número si quien llama no está en [Contactos](contacts-history.md), con la fecha. Un auricular rojo marca una llamada perdida; un número de repeticiones entre paréntesis — por ejemplo *Servicio técnico (4)* — representa varias llamadas seguidas al mismo interlocutor.

### Las fichas de las cuentas {#the-account-chips}

Debajo del teclado hay una ficha por cada [cuenta](../sip-accounts/setup.md). Un punto verde significa que la cuenta está registrada en la centralita. La ficha resaltada (en la imagen, **305 Soporte**) es la cuenta desde la que se hará la próxima llamada; pulse otra ficha para cambiarla. El botón redondo rojo a la derecha de las fichas es el modo no molestar.

### Los botones {#the-buttons}

Debajo de las fichas están los [botones](../sip-accounts/buttons.md) que ha creado para compañeros y líneas, cada uno con una luz — **García** y **Almacén** en las imágenes. Pulse uno para marcar su número.

### Grabaciones, Contactos, Historial, Ajustes {#recordings-contacts-history-settings}

Estas cuatro entradas de abajo abren una pestaña a la derecha, una junto a otra: [Grabaciones](../interface/recordings.md), [Contactos e historial](contacts-history.md) y [Ajustes](settings-overview.md). Las pestañas que ha abierto se quedan en la fila de arriba de la parte derecha.

## Una llamada en curso {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Una llamada en curso" />

Mientras dura una llamada, el campo del número sube arriba con un icono de teclado dentro, y la llamada se muestra en una tarjeta:

- el estado y la duración de la llamada (**En llamada · 0:21**), el nombre del interlocutor, **Línea** y el nombre de la cuenta en la que está la llamada, y el número;
- dos barras de nivel verticales a los lados de la tarjeta, una por cada canal del sonido;
- una fila de botones: grabar (círculo), silenciar (micrófono), poner en espera (pausa) y el botón rojo **Colgar**;
- una segunda fila: transferir (auricular con una flecha) y el teclado.

Una llamada se puede transferir directamente, o después de haber hablado antes con la persona.

Si el número está en **Contactos**, se muestra su nombre en lugar del número. Las mismas acciones tienen [atajos](../program/shortcuts.md): contestar, colgar, poner en espera y silenciar.

## Varias llamadas a la vez {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Varias llamadas" />

Una llamada entrante se anuncia con un aviso dondequiera que esté trabajando, incluso cuando el teléfono está oculto. Una nueva llamada entrante aparece en su propia tarjeta encima de la lista, con un botón verde, uno amarillo y uno rojo, y una línea que dice con quién está hablando ahora (**En llamada con …**). La lista de debajo muestra cada llamada con su estado — **En espera**, **En llamada**, **Llamada entrante** — y la cuenta en la que está. Un icono de pausa marca una llamada en espera y un icono de altavoz aquella en la que está hablando.

Lo que ocurre cuando alguien llama mientras usted ya está en una llamada se ajusta en [Ajustes de llamadas](../sip-accounts/calls.md#call-waiting).

## Conferencia {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Una conferencia" />

Las llamadas unidas se muestran como una sola tarjeta **Conferencia** en la línea de la cuenta. Cada participante aparece con su tiempo en la llamada y su propio botón **Colgar**. Los botones de debajo graban, silencian y terminan la conferencia para todos; el botón ancho de abajo vuelve a dividir la conferencia en llamadas separadas.

## Captura {#capture}

Cuando la [captura de otras aplicaciones](../capture/capture.md) está permitida en **Ajustes → Captura**, aparece una franja entre las fichas de las cuentas y los botones.

<Shot name="10_settings_capture" full alt="La franja de captura al pie del teléfono: Captura · listo, Grabar y dos barras de nivel" />

- **Captura · listo** indica que el programa está atento a una conversación en otra aplicación.
- **Grabar** inicia una captura a mano.
- Las dos barras finas de debajo muestran el nivel del sonido: la de arriba es usted, la de abajo lo que reproduce el ordenador. Cómo se dibujan se ajusta en **Imagen en la barra del pie del teléfono**.

El programa también puede vivir en la bandeja (la barra de menús en macOS) y aparecer con un [atajo](../program/shortcuts.md).
