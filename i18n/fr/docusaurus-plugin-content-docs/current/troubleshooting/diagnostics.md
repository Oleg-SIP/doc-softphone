---
title: Diagnostic
sidebar_position: 1
description: "La fenêtre qui montre chaque mot que se disent le téléphone et l'IPBX, le fichier journal et l'endroit où le programme garde ses fichiers."
---

La fenêtre **Diagnostic** montre ce que le téléphone et le standard se disent, au moment où ils le disent. C'est le premier endroit où regarder quand un compte ne s'enregistre pas ou qu'un appel n'aboutit pas, et la fenêtre qu'un service informatique vous demandera d'envoyer.

Elle s'ouvre depuis **Réglages → Diagnostic**, avec le bouton **Ouvrir le diagnostic**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="La fenêtre Diagnostic" />

Elle montre chaque message SIP que le téléphone envoie ou reçoit, pendant qu'il se produit, ainsi que les statistiques audio des appels en cours. Elle ne collecte que tant qu'elle est ouverte et ne garde rien après sa fermeture.

## SIP {#sip}

L'onglet **SIP** est le journal de la signalisation.

- Chaque message est une ligne avec l'heure (à la milliseconde), ce qu'il est, et où il est allé : une flèche vers la droite est envoyée par le téléphone, une flèche vers la gauche est reçue du serveur. En dessous : `to` ou `from` l'adresse du serveur et le transport (par exemple *via UDP*).
- Un message peut être déplié pour montrer ses en-têtes en entier (le troisième message sur l'image).
- **Rechercher** trouve du texte dans le journal.
- **Vider** le vide.

L'exemple de la capture d'écran est un enregistrement sain : le téléphone envoie `REGISTER`, le serveur répond `200 OK (REGISTER)`.

## Appels {#calls}

Le deuxième onglet, **Appels**, montre les indicateurs de qualité de chaque appel en cours.

## L'onglet Diagnostic des réglages {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Réglages → Diagnostic" />

### Détail du journal {#log-detail}

La liste déroulante choisit la quantité de choses que le programme écrit dans son fichier journal ; sur l'image, c'est **Détaillé**. Cela prend effet immédiatement, y compris sur un appel déjà en cours — celui dont vous voulez justement la trace. Le réglage le plus détaillé consigne chaque message SIP. C'est volumineux, mais les mots de passe en sont retirés avant toute écriture ; le fichier peut donc être envoyé sans risque avec une demande d'assistance.

**Envoyer une copie au journal système** écrit aussi le journal dans le journal propre au système, pour une machine dont les journaux sont collectés de façon centralisée. Le fichier ci-dessous est écrit dans tous les cas, et c'est lui qu'il faut joindre à une demande d'assistance.

### Fichiers {#files}

L'onglet liste où le programme garde ses fichiers et la taille de chacun. Sous macOS :

| Fichier | Emplacement | Contenu |
| --- | --- | --- |
| Réglages | `~/Library/Preferences/ai-softphone/settings.json` | Les réglages. Jamais de mots de passe ni de jetons. |
| Base de données | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Contacts, journal, transcriptions et comptes rendus. |
| Enregistrements | `~/Library/Application Support/ai-softphone/recordings` | L'audio des enregistrements. |
| Journal | `~/Library/Logs/ai-softphone/ai-softphone.log` | Le journal. |

Sous la liste, **Ouvrir** affiche le journal et **Vider** le vide. Videz le journal juste avant de reproduire un problème ; le vider ne peut pas être annulé.

## Ce qu'il faut envoyer à l'assistance {#what-to-send-to-support}

1. Réglez **Détail du journal** sur le niveau le plus détaillé.
2. Appuyez sur **Vider**, puis reproduisez le problème.
3. Envoyez le fichier journal, ou ouvrez **Réglages → À propos**, écrivez-nous de là et cochez **Joindre le journal** — voir [À propos](../application/about.md#feedback).

Pour un problème d'enregistrement SIP ou d'appel, envoyez aussi les lignes de la tentative échouée depuis l'onglet **SIP**.

La partie du programme qui se trouve derrière tout cela — la trace SIP, les statistiques média et les compteurs — peut être désactivée dans [Modules](../application/modules.md) (**Diagnostic**).
