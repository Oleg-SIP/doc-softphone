---
title: Problèmes courants
sidebar_position: 2
description: "\"Que vérifier quand un compte ne s'enregistre pas, qu'il n'y a pas de son, qu'un appel ou une réunion n'est pas enregistré, qu'il n'y a pas de transcription, ou qu'un lien, un raccourci ou l'API ne fait rien.\""
---

Chaque entrée renvoie au réglage qui en décide. Si la réponse n'est pas ici, ouvrez le [Diagnostic](/troubleshooting/diagnostics) : il montre ce que le téléphone et l'IPBX se disent.

## Le compte ne s'enregistre pas {#the-account-will-not-register}

Le point à côté du compte dans **Réglages → Comptes** reste gris ou rouge.

1. Vérifiez l'**Identifiant**, le **Mot de passe** et l'**Adresse du serveur** dans [le formulaire du compte](/sip-accounts/setup).
2. Si votre IPBX vérifie le mot de passe sous un autre nom que le poste, remplissez **Utilisateur d'authentification** sous **Réglages du serveur**.
3. Vérifiez **Transport** et **Port** par rapport à ce qu'attend l'IPBX.
4. Ouvrez l'onglet **SIP** de la [fenêtre de diagnostic](/troubleshooting/diagnostics) et regardez la requête `REGISTER` et ce que le serveur a répondu.

## Je n'entends rien, ou on ne m'entend pas {#i-cannot-hear-or-i-cannot-be-heard}

Ouvrez [Réglages → Appareils](/sip-accounts/devices).

- Dites quelque chose : la barre sous **Microphone** doit bouger. Si elle ne bouge pas, choisissez un autre microphone.
- Appuyez sur **Tester** sous **Haut-parleurs** pour entendre un son sur l'appareil choisi.
- Vérifiez les curseurs **Volume**. **Couper le micro** sur la carte de l'appel et le [raccourci](/program/shortcuts) **Couper le micro** coupent le microphone pendant un appel.
- La sonnerie peut être réglée pour retentir sur un autre appareil que celui sur lequel vous parlez — **Sonnerie**, la seconde liste déroulante.

## L'appel sonne mal, ou ne s'établit pas {#the-call-sounds-bad-or-does-not-start}

Les codecs sont proposés dans l'ordre de la liste sous [Réglages → Appels](/sip-accounts/calls#audio-formats). Laissez activés les codecs qu'utilise votre IPBX, et mettez le meilleur d'entre eux en premier. Une modification s'applique à partir de votre prochain appel.

## Un second appel ne sonne pas {#a-second-call-does-not-ring}

Ce qui se passe quand quelqu'un appelle alors que vous êtes en communication se règle sous [Appel en attente](/sip-accounts/calls#call-waiting).

## Un appel n'a pas été enregistré {#a-call-was-not-recorded}

- **Réglages → Enregistrement**, la première liste déroulante, décide quels appels sont enregistrés ; la valeur par défaut, **À la main**, n'enregistre que lorsque vous appuyez sur enregistrer sur la carte de l'appel. Voir [Enregistrements](/recordings).
- L'enregistrement commence quand l'appel est décroché ; un appel qui n'a pas été pris n'a donc pas de fichier.
- Le module **Enregistrement** doit être activé dans [Modules](/application/modules).
- Les enregistrements sont supprimés par les limites sous **Conservation** ; un enregistrement épinglé n'est jamais supprimé.

## Une réunion dans une autre application n'a pas été capturée {#a-meeting-in-another-application-was-not-captured}

Voir [Capture](/capture/).

- **Autoriser la capture du son** dans **Réglages → Capture** doit être activé.
- Avec **Démarrage automatique** réglé sur **Me demander** (la valeur par défaut), répondez à la question quand elle apparaît ; avec **Jamais**, appuyez vous-même sur **Enregistrer**.
- Utilisez **Tester** dans le même onglet : la barre du haut doit bouger quand vous parlez, celle du bas quand quelque chose joue.
- Le module **Capture** doit être activé dans [Modules](/application/modules).

## Il y a un enregistrement, mais pas de transcription ni de résumé {#there-is-a-recording-but-no-transcript-or-summary}

- Une conversation n'est transcrite et rédigée d'elle-même que si **Traiter les conversations automatiquement** est activé dans [Réglages → Traitement](/ai-processing/processing). Sinon, demandez-le dans la [fenêtre des enregistrements](/interface/recordings).
- Il faut une [reconnaissance](/ai-processing/transcription) et un [modèle de langue](/ai-processing/processing#language-models), et chacun doit répondre à son adresse.
- Quand la **Limite d'argent** ou la **Limite de jetons** mensuelle est atteinte, les règles automatiques s'arrêtent jusqu'au mois suivant. Ce que vous demandez vous-même n'est jamais bloqué.
- Les étapes de [Réglages → Vue d’ensemble](/interface/settings-overview) montrent ce qui reste à configurer.

## Le téléphone a disparu quand j'ai fermé la fenêtre {#the-phone-disappeared-when-i-closed-the-window}

Avec **Laisser le téléphone tourner quand la fenêtre est fermée** activé, le téléphone tourne toujours, et les appels arrivent toujours. L'icône de la zone de notification (la barre des menus sous macOS) fait revenir la fenêtre. Voir [Démarrage](/program/startup).

## Un numéro de téléphone dans un navigateur ou un CRM n'appelle pas {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Appuyez sur **Ouvrir les liens d’appel avec ce téléphone** dans [Réglages → Démarrage](/program/startup#call-links). Un numéro cliqué arrive dans le numéroteur et y attend, sauf si **Appeler tout de suite, sans appuyer sur Appeler** est activé.

## Le voyant d'un bouton reste gris {#a-buttons-lamp-stays-grey}

L'IPBX ne dit pas si le poste est libre. Le bouton compose quand même. Voir [Boutons](/sip-accounts/buttons).

## L'API REST ne répond pas {#the-rest-api-does-not-answer}

- **Laisser d'autres programmes de cet ordinateur piloter le téléphone** doit être activé dans [Réglages → Intégration](/integration/rest-api), ainsi que le module **Intégration** dans [Modules](/application/modules).
- L'adresse est `http://127.0.0.1:8377`, sauf si vous avez changé le **Port**.
- Un groupe que vous n'avez pas ouvert sous **Accès** répond `404` à chaque requête.
- Si vous avez défini un **Jeton**, les requêtes qui modifient des données stockées doivent le porter dans l'en-tête `Authorization`.
- D'autres symptômes figurent dans [Quand ça ne marche pas](/integration/rest-api#when-it-does-not-work).

## Les webhooks n'arrivent pas {#webhooks-do-not-arrive}

Appuyez sur **Envoyer un événement de test** dans [Réglages → Intégration](/integration/webhooks). Les compteurs `webhooks_failed_total` et `webhooks_dropped_total` de l'API REST montrent comment se passe la livraison ; [Quand rien n'arrive](/integration/webhooks#when-nothing-arrives) indique ce que signifie chacun d'eux.

## Un raccourci ne fait rien {#a-hotkey-does-nothing}

Ouvrez [Raccourcis](/program/shortcuts). Un raccourci fonctionne quand le téléphone est le programme que vous utilisez ; pour l'utiliser depuis n'importe quel programme, cochez **Partout**. Cliquez sur le raccourci et appuyez à nouveau sur la combinaison si un autre programme l'a prise.
