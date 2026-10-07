---
slug: /
title: "Documentation d'AI Softphone"
sidebar_position: 1
description: "Ce qu'est AI Softphone, sur quoi il fonctionne et où chaque partie du programme est décrite."
---

[AI Softphone](https://ai-softphone.com/) est un softphone pour IPBX qui transforme aussi chaque conversation en texte et en compte rendu écrit. Une conversation peut lui parvenir de trois façons, et toutes trois aboutissent dans la même bibliothèque, avec le même enregistrement, la même transcription et le même compte rendu :

- **un appel** passé ou reçu dans le programme, via n'importe quel IPBX ou opérateur SIP ;
- **une réunion** dans Zoom, Teams, Meet ou toute autre application, enregistrée depuis l'ordinateur lui-même ;
- **un enregistrement que vous avez déjà** — d'un téléphone mobile, d'un dictaphone ou d'un autre système — ajouté à la bibliothèque.

Les enregistrements, les transcriptions et le journal sont conservés dans un fichier qui vous appartient. Aucun compte ni abonnement n'est nécessaire, et le programme est un logiciel libre sous licence GPL v2.

## D'une conversation à un compte rendu {#from-a-conversation-to-a-write-up}

1. Une conversation arrive : un appel, une réunion ou un fichier.
2. Elle est enregistrée sur deux canaux, de sorte que ce que vous avez dit et ce que l'autre côté a dit restent séparés.
3. Elle est transcrite, interlocuteur par interlocuteur, en phase avec l'audio.
4. Le modèle de langue que vous avez choisi en fait le compte rendu : résumé, tâches, catégorie, étiquettes et signaux — et vous pouvez poser une question à la conversation.

## Téléchargement et configuration requise {#download-and-system-requirements}

Le programme se télécharge gratuitement sur [ai-softphone.com](https://ai-softphone.com/#download) : un programme d'installation (`.exe`) pour Windows, une image disque (`.dmg`) pour macOS, et une AppImage ou un `.deb` pour Linux. Le programme d'installation, l'image disque et l'AppImage n'exigent rien d'autre au préalable — Qt, OpenSSL et l'environnement d'exécution C++ voyagent avec eux. Le `.deb` fait exception : il utilise l'environnement d'exécution C++ du système, voir plus bas. Il vous faut un compte SIP, chez votre opérateur ou sur l'IPBX que vous gérez vous-même. L'enregistrement fonctionne dès que le programme est installé ; la transcription et le compte rendu demandent un service de votre choix ou un modèle sur votre propre machine.

| Système | Configuration requise |
| --- | --- |
| macOS | macOS 14.4 ou plus récent ; Apple silicon uniquement — un Mac Intel ne peut pas l'ouvrir, même via Rosetta ; graphismes Metal ; 160 Mo d'espace disque, plus les enregistrements. Le système demande une fois l'accès au microphone. |
| Windows | Windows 10 version 1809 (build 17763) ou plus récent, et Windows 11 ; processeur Intel ou AMD 64 bits ; Direct3D 11 ou OpenGL 2.1 ; 250 Mo d'espace disque, plus les enregistrements. |
| Linux | Ubuntu 22.04 LTS ou plus récent, Debian 12 ou plus récent, et tout système de cet âge — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch ; bibliothèque C GNU 2.35 ou plus récente ; processeur Intel ou AMD 64 bits ; OpenGL 2.1 ou OpenGL ES 2.0, sous X11 ou Wayland ; PipeWire ou PulseAudio (ALSA à défaut des deux) ; 200 Mo d'espace disque, plus les enregistrements. L'icône de la zone de notification demande un bureau doté d'une zone de notification d'état. |

Sous Linux, l'AppImage fonctionne sur toute distribution de cet âge : rendez-la exécutable et lancez-la. Le `.deb` demande en plus l'environnement d'exécution C++ du système issu de GCC 13, que possèdent Ubuntu 24.04 et Debian 13, mais pas Ubuntu 22.04 ; sur tout système plus ancien, prenez l'AppImage.

L'interface est disponible en trente langues, à choisir dans [Apparence](/program/appearance) et modifiable sans redémarrage.

Les captures d'écran de cette documentation sont prises sous macOS et affichées en petit : cliquez sur l'une d'elles pour la voir en taille réelle. Le programme a le même aspect et fonctionne de la même façon sur les autres systèmes.

## Premiers pas {#first-steps}

1. [Ajoutez un compte](sip-accounts/setup.md) pour votre IPBX ou votre opérateur SIP.
2. [Choisissez le microphone et les haut-parleurs](sip-accounts/devices.md) et passez un appel de test.
3. Décidez [quels appels sont enregistrés](recordings/call-recording.md).
4. Ajoutez une [reconnaissance](ai-processing/transcription.md) et un [modèle de langue](ai-processing/processing.md) si vous voulez des transcriptions et des comptes rendus.

**Réglages → Vue d’ensemble** tient cette liste à jour pour vous : un point vert marque une étape faite, un point rouge une étape restante. Voir [Vue d'ensemble des réglages](interface/settings-overview.md).

## Que lire ensuite {#where-to-read-next}

| Si vous voulez… | Lisez |
| --- | --- |
| Vous repérer dans les fenêtres | [Interface](interface/main-window.md) |
| Relier le téléphone à votre IPBX | [Configurer un compte SIP](sip-accounts/setup.md) |
| Choisir un microphone, des haut-parleurs et une sonnerie | [Appareils](sip-accounts/devices.md) |
| Régler les codecs, l'appel en attente et le journal des appels | [Réglages des appels](sip-accounts/calls.md) |
| Mettre vos collègues sur des boutons à une touche | [Boutons](sip-accounts/buttons.md) |
| Décider quels appels sont enregistrés, et pour combien de temps | [Enregistrer les appels](recordings/call-recording.md) |
| Écouter, rechercher et lire vos conversations | [Fenêtre des enregistrements](interface/recordings.md) |
| Enregistrer une réunion tenue dans une autre application | [Capture](capture/capture.md) |
| Choisir la reconnaissance qui transforme la parole en texte | [Transcription](ai-processing/transcription.md) |
| Décider quelle IA rédige vos conversations et ce qu'elle peut coûter | [Traitement](ai-processing/processing.md) |
| Modifier les catégories, les étiquettes et les signaux | [Dictionnaires](ai-processing/dictionaries.md) |
| Changer la disposition, le thème, le démarrage et les raccourcis | [Apparence](program/appearance.md), [Démarrage](program/startup.md) et [Raccourcis](program/shortcuts.md) |
| Relier un CRM ou un autre programme | [Webhooks](integration/webhooks.md) et [API REST locale](integration/rest-api.md) |
| Voir ce que le téléphone et l'IPBX se disent | [Diagnostic](troubleshooting/diagnostics.md) |
| Trouver la cause d'un problème | [Problèmes courants](troubleshooting/common-problems.md) |
| Désactiver des parties du programme | [Modules](application/modules.md) |
| Vérifier la version, les mises à jour et le contenu du rapport d'utilisation | [À propos](application/about.md) |

Les pages suivent l'ordre des onglets des **Réglages**.

## Confidentialité {#privacy}

- Par défaut, tout reste sur votre ordinateur : les enregistrements, les transcriptions et le journal vivent dans un fichier qui vous appartient. Rien d'une conversation — ni un numéro, ni un nom, ni un mot de ce qui a été dit — ne part là où vous ne l'avez pas envoyé vous-même.
- Les mots de passe des comptes, la valeur d'en-tête du webhook et le jeton de l'API sont conservés dans le trousseau du système d'exploitation, jamais dans un fichier de réglages.
- Une nouvelle version s'annonce quand elle paraît — jamais pendant un appel — et ne s'installe que lorsque vous le décidez.
- Le programme envoie un petit rapport d'utilisation par jour. Vous voyez ce qu'il contient avant que le premier ne parte, et vous choisissez ce qu'il transporte : **Simple** ou **Étendu**. Il ne contient jamais de numéros, de contacts, l'adresse de votre IPBX ni quoi que ce soit de dit dans une conversation. La liste complète se trouve dans [À propos](/application/about#telemetry).
- Le programme est un logiciel libre sous licence GPL v2.
