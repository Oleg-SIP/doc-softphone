---
title: Enregistrer les appels
sidebar_position: 1
description: Quels appels sont enregistrés, ce qui est dit au correspondant, comment les conférences sont sauvegardées et combien de temps les fichiers sont conservés.
---

**Réglages → Enregistrement** décide quels appels deviennent des enregistrements, et combien de temps les fichiers restent. Un appel enregistré apparaît dans la [fenêtre des enregistrements](/recordings/recordings-window).

<Shot name="09_settings_recording" alt="Réglages → Enregistrement" />

## Enregistrement {#recording}

La liste déroulante choisit quels appels sont enregistrés :

| Choix | Enregistre |
| --- | --- |
| **À la main** | Seulement quand vous appuyez sur enregistrer sur la carte de l'appel. Par défaut. |
| **Demander à chaque appel** | Le téléphone demande à chaque appel s'il faut l'enregistrer. |
| **Chaque appel** | Chaque appel décroché, de lui-même. Choisi sur l'image. |
| **Lignes choisies** | Les appels sur les comptes que vous cochez dans la liste qui apparaît. |

L'enregistrement commence quand l'appel est décroché et jamais avant ; la sonnerie et les numéros que vous composez ne sont donc pas dans le fichier. Un appel est un seul fichier stéréo : vous sur un canal, et tous les autres sur l'autre.

## Consentement {#consent}

La liste déroulante choisit comment le correspondant est informé de l'enregistrement :

| Choix | Ce qu'entend le correspondant |
| --- | --- |
| **Une annonce** | Un court message quand l'enregistrement commence. Par défaut. **Choisir…** sélectionne votre propre fichier son ; *si rien n'est choisi, le téléphone joue un court carillon*. |
| **Un bip toutes les quelques secondes** | Un bip à un intervalle que vous réglez avec le curseur. |
| **Rien du tout** | Rien. Choisi sur l'image. |

**Garder l'avis dans l'enregistrement** — l'annonce et le bip sont joués aux personnes en ligne ; activez cette option et ils figurent aussi dans le fichier.

:::caution
Dans de nombreux endroits — la majeure partie de l'Europe et plusieurs États américains — enregistrer une conversation sans en informer le correspondant est illégal. La décision vous appartient, et le programme le rappelle sous la liste déroulante.
:::

## Conférences {#conferences}

**Un fichier par personne**, activé par défaut. Dans une conférence, le second canal est un mélange de tout le monde ; un fichier supplémentaire par personne est donc ce qui permet à une transcription de dire qui a dit quoi.

## Conservation {#retention}

<Shot name="09b_settings_recording_scrolled" alt="Réglages → Enregistrement : conservation" />

| Réglage | Par défaut | Ce qu'il limite |
| --- | --- | --- |
| **Durée de conservation** | Toujours | Combien de temps un enregistrement est conservé. |
| **Limite de stockage** | Sans limite | La place que tous les enregistrements peuvent occuper ensemble. |
| **Fichiers par personne** | Toujours | Combien de temps les fichiers supplémentaires d'une conférence sont conservés. |
| **Seuil d'espace disque** | 500 Mo | Un plancher pour l'espace libre sur le disque. Les enregistrements que vous n'avez pas épinglés peuvent être supprimés pour rester au-dessus. |

Un enregistrement épinglé n'est jamais supprimé par aucun de ces réglages, et il compte quand même dans la limite. Une heure de conversation occupe environ 30 Mo.

La partie du programme qui enregistre les appels, et en informe le correspondant, peut être désactivée dans [Modules](/application/modules).

Pour enregistrer une réunion tenue dans une autre application, voir [Capture](/capture/).
