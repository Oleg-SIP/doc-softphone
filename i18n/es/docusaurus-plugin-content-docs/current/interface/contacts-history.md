---
title: Contactos e historial
sidebar_position: 2
description: La agenda y el historial de llamadas, junto al teléfono.
---

**Contactos** e **Historial** se abren como dos pestañas a la derecha del teléfono, para que pueda buscar un número mientras habla.

## Contactos {#contacts}

<Shot name="03_contacts" alt="La pestaña Contactos" />

- **Buscar** filtra la lista mientras escribe.
- **Añadir** crea un contacto.
- Cada contacto aparece con un nombre y, debajo, el número y la cuenta por la que se le llama, por ejemplo *231 · 201 Oficina*.

Una llamada entrante de un número conocido muestra el nombre del contacto, igual que las listas de llamadas recientes y del historial — así funciona la identificación de llamadas.

### Editar un contacto {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Un contacto abierto para editarlo" />

Seleccione un contacto para que aparezcan un lápiz y un auricular a la derecha de su fila. El auricular llama al contacto; el lápiz abre el formulario bajo la fila:

| Campo | Qué escribir |
| --- | --- |
| **Nombre** | Cómo se muestra el contacto. |
| **Número** | El número que hay que marcar. |
| Desplegable bajo **Número** | La cuenta por la que se llama al contacto. |

**Guardar** conserva los cambios, **Cancelar** los descarta y **Eliminar** borra el contacto.

## Historial {#history}

<Shot name="21_history" alt="La pestaña Historial" />

El historial de llamadas, con la más reciente primero. Arriba:

- el desplegable, **Todas las llamadas** por defecto, reduce la lista a un tipo de llamada;
- **Buscar** filtra por lo que escriba.

Cada entrada tiene un icono para el tipo de llamada — un auricular saliente, o un auricular rojo con un reloj para una llamada perdida —, el nombre del interlocutor (o el número), y debajo la fecha, qué fue de la llamada, su duración, el número y la cuenta. Las llamadas recientes se muestran como *Ayer, 22:33* o con un día de la semana, las más antiguas con la fecha.

| Qué fue de la llamada | Se muestra como |
| --- | --- |
| Hablaron | **saliente** o entrante, y la duración, por ejemplo *48 s* |
| Una llamada entrante no se contestó | **Perdida** |
| Una llamada que usted hizo no se conectó | **No ha salido** |

Seleccione una entrada para que aparezcan cuatro botones a su derecha:

| Botón | Hace |
| --- | --- |
| Persona con un más | Añade el número a [Contactos](#contacts). |
| ▶ | Reproduce la grabación de la llamada, si se grabó. |
| Papelera | Elimina la entrada. |
| Auricular | Devuelve la llamada al número. |

### Cuánto tiempo se conserva el historial {#how-long-the-log-is-kept}

Un historial de llamadas es una prueba, así que no se borra nada de él a menos que usted lo diga: por defecto se conserva cada llamada. El periodo de conservación y el botón **Vaciar el historial de llamadas** están en [Ajustes de llamadas](../sip-accounts/calls.md#history).

Las llamadas perdidas y rechazadas también se pueden leer a través de la [API REST local](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
