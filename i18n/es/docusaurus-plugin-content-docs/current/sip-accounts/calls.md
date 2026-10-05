---
title: Ajustes de llamadas
sidebar_position: 3
description: Los códecs que se ofrecen a la centralita, qué ocurre cuando llega una segunda llamada, la rellamada automática y cuánto tiempo se conserva el historial de llamadas.
---

**Ajustes → Llamadas** contiene los ajustes que valen para todas las llamadas, sea cual sea la cuenta en la que estén.

## Formatos de audio {#audio-formats}

<Shot name="07_settings_calls" alt="Ajustes → Llamadas: los formatos de audio" />

La lista de códecs que el teléfono ofrece al otro extremo. Los códecs *se ofrecen en este orden*, y el otro extremo elige entre lo que usted ofrece: cuanto más arriba está un códec, más probable es que se use.

- La **casilla** enciende o apaga un códec. Un códec apagado no se ofrece.
- **▲** y **▼** lo suben o lo bajan en la lista.
- *banda ancha* a la derecha marca un códec con una gama de sonido más amplia que la de una línea telefónica: la voz se oye más clara.

| Códec | Frecuencia de muestreo | Encendido por defecto |
| --- | --- | --- |
| **opus** | 48 kHz, estéreo, banda ancha | sí |
| **G722** | 16 kHz, banda ancha | sí |
| **PCMU** | 8 kHz | sí |
| **PCMA** | 8 kHz | sí |
| **speex** | 16 kHz, banda ancha | no |
| **speex** | 8 kHz | no |
| **speex** | 32 kHz, banda ancha | no |
| **iLBC** | 8 kHz | no |
| **GSM** | 8 kHz | no |
| **L16** | 44 kHz, estéreo, banda ancha | no |
| **L16** | 44 kHz, banda ancha | no |

La tabla está en el orden con el que viene el programa.

Los códecs se acuerdan al empezar una llamada, así que un cambio se aplica desde su próxima llamada. Si una llamada se oye mal, deje encendidos solo los códecs que usa su centralita.

## Llamada en espera {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Ajustes → Llamadas: llamada en espera, rellamada automática e historial" />

*Qué ocurre cuando alguien llama mientras usted ya está en una llamada.* Lo elige el desplegable; por defecto es **Hacer sonar la segunda llamada**. Un aviso de intercomunicador de su propia centralita siempre entra, elija lo que elija — así llega a este teléfono una llamada hecha desde un panel CTI.

## Rellamada automática {#autodial}

Cuando una llamada no puede establecerse, su tarjeta ofrece seguir marcando hasta que lo consiga. Dos deslizadores ajustan cómo:

- **Espera entre intentos** — 15 segundos por defecto;
- **Rendirse tras** — 30 minutos por defecto.

## Historial {#history}

Un historial de llamadas es una prueba, así que no se borra nada de él a menos que usted lo diga aquí.

- **Periodo de conservación** elige cuánto tiempo guarda una llamada [el historial de llamadas](/interface/contacts-history#history). Por defecto es **Siempre**.
- **Vaciar el historial de llamadas** borra todas las llamadas de una vez, diga lo que diga el periodo. No se puede deshacer.
