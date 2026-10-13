---
title: À propos
sidebar_position: 2
description: "La version, les mises à jour, votre pays, la licence, le contenu du rapport d'utilisation, le formulaire de retour et ce avec quoi le programme est construit."
---

**Réglages → À propos** contient tout ce qui concerne le programme lui-même.

<Shot name="20_settings_about" alt="Réglages → À propos" />

## Version et pays {#version-and-country}

En haut figurent le nom, la **Version** (sur l'image 1.1.5), un lien vers le site web, [ai-softphone.com](https://ai-softphone.com/), et un autre vers cette documentation.

**Pays** indique au programme où vous êtes. Cela aide à choisir le meilleur serveur de mises à jour et ouvre l'accès aux services de langue et de parole hébergés dans votre pays. **Détecter automatiquement** le remplit.

## Mises à jour {#updates}

L'onglet indique si vous avez la version la plus récente et quand la dernière vérification a eu lieu. **Rechercher des mises à jour** vérifie maintenant.

**Rechercher les mises à jour automatiquement**, activé par défaut, vérifie une fois par jour et peu après le démarrage du téléphone. Il demande un petit fichier à un serveur, et rien n'est téléchargé ni installé sans votre accord.

Quand une nouvelle version existe, l'onglet indique *La version … est disponible. Rien n'est téléchargé tant que vous ne le demandez pas.* **Ce qui a changé** montre ce qu'elle apporte, et **Télécharger** la télécharge.

Une fois téléchargée, **Installer et redémarrer** ferme le téléphone et le relance dans la nouvelle version. Le téléphone ne le fait jamais de lui-même, pour ne rien couper de ce qui est en cours : appuyez sur le bouton quand vous n'êtes pas en communication. Une notification, *Une nouvelle version est disponible*, le signale aussi, avec un bouton **Mettre à jour maintenant**.

| Quand l'onglet indique | |
| --- | --- |
| *La version … est disponible. Cette copie a été installée par un paquet, la nouvelle s'installe donc de la même façon.* | Le programme vient d'un paquet, par exemple de votre distribution Linux. Appuyez sur **Récupérer le paquet**, puis installez la nouvelle version comme vous avez installé celle-ci. |
| *Cette version n'a pas d'adresse de mise à jour, elle ne demande donc jamais. Les versions publiées sur le site en ont une.* | Le programme a été compilé à partir de son code source au lieu d'être téléchargé depuis le site, et ne cherche pas de mises à jour. |
| *Aucun serveur de mise à jour n'a répondu.* | Les serveurs n'ont pas pu être joints. Si l'ordinateur est en ligne, choisir votre **Pays** plus haut peut aider : il existe peut-être un serveur plus proche de vous. |

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
| **Joindre le journal** | Ajoute la fin du journal, au plus environ 512 Ko ; la ligne sous la case dit combien cela fait en ce moment (111 Ko sur l'image). Voir [Diagnostic](/troubleshooting/diagnostics). |

**Envoyer** reste gris tant qu'il n'y a rien à envoyer.

## Construit avec {#built-with}

Les composants sur lesquels le programme est construit, chacun avec sa licence : Qt 6 (GPL-2.0 ou GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), Opus (BSD-3-Clause), SQLite (domaine public), nlohmann/json (MIT), cpp-httplib (MIT), IXWebSocket (BSD-3-Clause), nghttp2 (MIT), LAME (LGPL-2.0-or-later), minimp3 (CC0-1.0), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) et le client PulseAudio (LGPL-2.1-or-later). Chacun est utilisé sous la licence indiquée à côté ; quand un composant en propose plusieurs, c'est celle qui est nommée qui est retenue.
