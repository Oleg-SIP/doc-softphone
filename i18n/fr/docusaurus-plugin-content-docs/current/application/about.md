---
title: À propos
sidebar_position: 2
description: "La version, les mises à jour, votre pays, la licence, le contenu du rapport d'utilisation, le formulaire de retour et ce avec quoi le programme est construit."
---

**Réglages → À propos** contient tout ce qui concerne le programme lui-même.

<Shot name="20_settings_about" alt="Réglages → À propos" />

## Version et pays {#version-and-country}

En haut figurent le nom, la **Version** (sur l'image 1.0.0) et un lien vers le site web, [ai-softphone.com](https://ai-softphone.com/).

**Pays** indique au programme où vous êtes. Cela aide à choisir le meilleur serveur de mises à jour et ouvre l'accès aux services de langue et de parole hébergés dans votre pays. **Détecter automatiquement** le remplit.

## Mises à jour {#updates}

L'onglet indique si vous avez la version la plus récente et quand la dernière vérification a eu lieu. **Rechercher des mises à jour** vérifie maintenant.

**Rechercher les mises à jour automatiquement**, activé par défaut, vérifie une fois par jour et peu après le démarrage du téléphone. Il demande un petit fichier à un serveur, et rien n'est téléchargé ni installé sans votre accord.

## Licence {#licence}

Le programme est un logiciel libre sous licence GPL-2.0-or-later. Il est fourni sans garantie, et vous pouvez le redistribuer selon les termes de cette licence ; le texte complet est livré dans le fichier nommé `LICENSE`.

## Télémétrie {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Réglages → À propos : le contenu du rapport d'utilisation" />

Le programme envoie un petit rapport d'utilisation par jour. Vous voyez ce qu'il contient avant que le premier ne parte, et l'onglet le liste :

| | Ce qui est envoyé |
| --- | --- |
| **Toujours envoyé** | Le fait que l'application a été lancée, sa version et la langue de l'interface ; la version du système d'exploitation, les paramètres régionaux, le pays et le fuseau horaire. |
| **Envoyé en plus, en mode Étendu** | Les compteurs d'appels et de conversations capturées ; l'éditeur et la version du softswitch relié, jamais son adresse ; combien d'étapes de la [Vue d’ensemble](/interface/settings-overview) sont faites, et la disposition choisie. |
| **Jamais envoyé, dans aucun mode** | Les numéros que vous avez composés ou qui vous ont appelé ; les comptes, les mots de passe ou quoi que ce soit du trousseau ; les contacts, conversations, transcriptions ou enregistrements ; tout ce que vous avez tapé, et toute donnée privée de l'ordinateur. |

Chaque installation crée pour elle-même un identifiant aléatoire, pour que les rapports d'une même copie du programme puissent être reconnus comme tels. Il n'est dérivé de rien qui vous concerne, vous ou votre ordinateur, et il ne nomme personne — mais comme il dure, les rapports qu'il porte peuvent être reliés entre eux. Cela les rend pseudonymes plutôt qu'anonymes.

Le rapport simple repose sur un intérêt légitime : savoir quelles versions sont utilisées est ce qui permet à un correctif d'atteindre les personnes qui en ont besoin. Tout ce qu'ajoute le rapport étendu est là parce que vous l'avez choisi, et vous pouvez changer cela ici à tout moment.

### Rapports {#reporting}

| Choix | |
| --- | --- |
| **Étendu** | Le rapport simple et ce que liste *Envoyé en plus*. Sélectionné sur l'image. |
| **Simple** | Seulement ce qui est *Toujours envoyé*. |
| **Désactivé** | Aucun rapport. Disponible uniquement dans l'édition Enterprise ; sinon l'option est grise. |

## Retour {#feedback}

<Shot name="20c_settings_about_bottom" alt="Réglages → À propos : le formulaire de retour et les composants avec lesquels le programme est construit" />

Un formulaire qui écrit aux développeurs sans quitter le programme.

| Champ | |
| --- | --- |
| **Objet** et **Message** | Ce que vous voulez dire. |
| **Votre nom** et **Adresse pour une réponse** | Tous deux sont facultatifs. Sans adresse, il n'y a aucun moyen de vous répondre. |
| **Joindre le journal** | Ajoute la fin du journal, environ 512 Ko. Voir [Diagnostic](/troubleshooting/diagnostics). |

**Envoyer** reste gris tant qu'il n'y a rien à envoyer.

## Construit avec {#built-with}

Les composants sur lesquels le programme est construit, chacun avec sa licence : Qt 6 (GPL-2.0 ou GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (domaine public), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) et le client PulseAudio (LGPL-2.1-or-later). Chacun est utilisé sous la licence indiquée à côté ; quand un composant en propose plusieurs, c'est celle qui est nommée qui est retenue.
