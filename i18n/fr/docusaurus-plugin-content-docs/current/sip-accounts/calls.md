---
title: Réglages des appels
sidebar_position: 3
description: "Les codecs proposés à l'IPBX, ce qui se passe quand un second appel arrive, le rappel automatique et la durée de conservation du journal des appels."
---

**Réglages → Appels** contient les réglages qui valent pour chaque appel, quel que soit le compte sur lequel il passe.

## Formats audio {#audio-formats}

<Shot name="07_settings_calls" alt="Réglages → Appels : les formats audio" />

La liste des codecs que le téléphone propose à l'autre bout. Les codecs sont *proposés dans cet ordre*, et l'autre bout choisit parmi ce que vous proposez : plus un codec est haut, plus il a de chances d'être utilisé.

- La **case à cocher** active ou désactive un codec. Un codec désactivé n'est pas proposé.
- **▲** et **▼** le montent ou le descendent dans la liste.
- *large bande* à droite marque un codec qui transmet une gamme de sons plus large qu'une ligne téléphonique : la voix est plus claire.

| Codec | Fréquence d'échantillonnage | Activé par défaut |
| --- | --- | --- |
| **opus** | 48 kHz, stéréo, large bande | oui |
| **G722** | 16 kHz, large bande | oui |
| **PCMU** | 8 kHz | oui |
| **PCMA** | 8 kHz | oui |
| **speex** | 16 kHz, large bande | non |
| **speex** | 8 kHz | non |
| **speex** | 32 kHz, large bande | non |
| **iLBC** | 8 kHz | non |
| **GSM** | 8 kHz | non |
| **L16** | 44 kHz, stéréo, large bande | non |
| **L16** | 44 kHz, large bande | non |

Le tableau suit l'ordre dans lequel le programme est livré.

Les codecs sont négociés au début d'un appel ; une modification s'applique donc à partir de votre prochain appel. Si un appel sonne mal, ne laissez activés que les codecs qu'utilise votre IPBX.

## Appel en attente {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Réglages → Appels : appel en attente, rappel automatique et journal" />

*Ce qui se passe quand quelqu'un appelle alors que vous êtes déjà en communication.* La liste déroulante le choisit ; par défaut, **Faire sonner le second appel**. Un appel d'interphonie de votre propre standard passe toujours, quel que soit votre choix — c'est ainsi qu'un appel passé depuis un panneau CTI parvient à ce téléphone.

## Rappel automatique {#autodial}

Quand un appel ne peut pas aboutir, sa carte propose de continuer à composer jusqu'à ce qu'il aboutisse. Deux curseurs règlent comment :

- **Attente entre les essais** — 15 secondes par défaut ;
- **Renoncer après** — 30 minutes par défaut.

## Journal {#history}

Un journal des appels est une preuve : rien n'en est retiré sans que vous le demandiez ici.

- **Durée de conservation** choisit combien de temps [le journal des appels](/interface/contacts-history#history) garde un appel. Par défaut, **Toujours**.
- **Vider le journal des appels** supprime tous les appels d'un coup, quelle que soit la durée choisie. Cette action est irréversible.
