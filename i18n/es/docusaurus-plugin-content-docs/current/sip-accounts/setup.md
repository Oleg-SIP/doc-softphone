---
title: Configurar una cuenta SIP
sidebar_position: 1
description: Conectar AI Softphone a su centralita IP o proveedor SIP en Ajustes → Cuentas.
---

AI Softphone funciona con cualquier centralita IP o proveedor SIP. Puede tener sesión iniciada en tantas cuentas (líneas) como tenga, y cada cuenta tiene sus propios ajustes.

Abra **Ajustes → Cuentas**.

<Shot name="05_settings_accounts" alt="Ajustes → Cuentas: dos cuentas, ambas registradas" />

## La lista de cuentas {#the-list-of-accounts}

Cada cuenta es una fila con:

- una **casilla** que enciende o apaga la cuenta;
- un **punto** que está verde cuando la cuenta está registrada en la centralita;
- el nombre, y debajo `usuario@servidor`;
- un botón **Desconectar** que cierra la sesión de la cuenta en la centralita;
- los botones **▲** y **▼**, que suben o bajan la cuenta en la lista. Las fichas de las cuentas en la [ventana principal](../interface/main-window.md) siguen el mismo orden.

El botón **Añadir**, arriba a la derecha, añade una cuenta. Haga clic en una fila para abrir su formulario debajo.

## Añadir una cuenta {#adding-an-account}

<Shot name="05d_account_add" alt="El formulario de una cuenta nueva, vacío" />

Pulse **Añadir**. Se abre un formulario vacío bajo la lista, con el cursor en **Nombre (opcional)**. Rellene los campos de abajo, abra **Ajustes del servidor** si la centralita los necesita y pulse **Guardar**. Una cuenta nueva empieza con los valores habituales: UDP en el puerto 5060, registro renovado cada 300 segundos.

## El formulario de la cuenta {#the-account-form}

<Shot name="05b_account_edit" alt="El formulario de una cuenta" />

| Campo | Qué escribir |
| --- | --- |
| **Nombre (opcional)** | El nombre que se muestra en la ficha de la cuenta en la ventana principal y en sus llamadas. Si está vacío, la cuenta se muestra como `usuario@servidor`. |
| **Usuario** | El usuario o número de extensión que le dio su centralita o proveedor. |
| **Contraseña** | Su contraseña. El campo aparece vacío cuando vuelve al formulario. Se guarda en el llavero del ordenador, nunca en un archivo de ajustes. |
| **Dirección del servidor** | La dirección de la centralita o del servidor SIP del proveedor, por ejemplo `pbx.example.com`. |
| **Ajustes del servidor** | Despliega los ajustes menos habituales de la conexión; vea más abajo. |
| **Contestar automáticamente** | En **Respuesta**: contesta las llamadas entrantes de esta cuenta sin que usted pulse nada. Apagado por defecto. |

Pulse **Guardar** para conservar los cambios. **Cancelar** los descarta y **Eliminar** borra la cuenta.

Cuando el punto junto a la cuenta está verde, la cuenta está registrada y su ficha en la ventana principal también lo muestra. Si se queda gris o rojo, abra el [Diagnóstico](../troubleshooting/diagnostics.md): la pestaña **SIP** muestra la petición `REGISTER` y lo que respondió el servidor.

## Ajustes del servidor {#server-settings}

La mayoría de las centralitas no necesitan nada aquí. Pulse **Ajustes del servidor** para mostrarlos; el mismo botón pasa a decir **Ocultar los ajustes del servidor**.

<Shot name="05c_account_server_settings" alt="Los ajustes del servidor de una cuenta, desplegados" />

| Campo | Por defecto | Qué es |
| --- | --- | --- |
| **Usuario de autenticación** | vacío | El nombre con el que la centralita comprueba la contraseña, cuando no es el mismo que el **Usuario**. En la imagen, la extensión es `201` y la centralita la autentica como `oficina201`. |
| **Transporte** | UDP | El protocolo de la conexión con el servidor. Un desplegable. |
| **Puerto** | 5060 | El puerto del servidor. |
| **Proxy de salida** | vacío | Un proxy por el que debe pasar cada petición, si su proveedor le da uno. |
| **Registrador** | vacío | La dirección en la que registrarse, si no es la **Dirección del servidor**. |
| **Volver a registrar, segundos** | 300 | Cada cuánto renueva el teléfono su registro. |
| **Tonos del teclado** | Flujo de audio | Cómo se envían a la centralita los tonos del teclado. Un desplegable. Cámbielo solo si la centralita no oye los tonos. |

Los códecs que ofrece el teléfono no se ajustan por cuenta; están en [Ajustes de llamadas](calls.md#audio-formats).
