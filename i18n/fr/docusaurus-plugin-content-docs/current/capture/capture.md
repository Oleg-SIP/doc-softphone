---
title: Capture
sidebar_label: Capture des autres applications
sidebar_position: 1
description: "\"La capture enregistre une conversation tenue dans une autre application — Zoom, Teams, Meet ou toute autre — directement depuis l'ordinateur.\""
---

La **Capture** est la façon dont AI Softphone enregistre une conversation qui se déroule dans un autre programme, comme une réunion dans Zoom, Teams ou Meet. Elle enregistre depuis l'ordinateur lui-même, en gardant l'autre côté et vous sur des canaux séparés, et la même transcription et le même compte rendu vous attendent à la fin, comme pour un appel.

Le programme cherche une conversation, pas le nom d'une application ; il fonctionne donc avec tout ce qui en produit une.

La [Vue d’ensemble](../interface/settings-overview.md) des réglages la range sous **Capture des autres applications** et la découpe en trois étapes :

1. **Activer la capture** — [autoriser la capture du son](#turning-capture-on).
2. **Capturer une conversation** — [démarrer et arrêter](#capturing-a-conversation) un enregistrement.
3. **Donner un nom à une capture** — [renommer](#giving-it-a-name) l'enregistrement.

## Activer la capture {#turning-capture-on}

La capture est désactivée tant que vous ne l'autorisez pas. Ouvrez **Réglages → Capture**.

<Shot name="10_settings_capture" alt="Réglages → Capture" />

| Réglage | Par défaut | Ce qu'il fait |
| --- | --- | --- |
| **Autoriser la capture du son** | désactivé | Permet au programme d'enregistrer le son des autres applications. Rien n'est capturé tant qu'il est désactivé. |
| **Me rappeler d'informer les autres de l'enregistrement** | activé | Affiche un rappel pendant une capture. La case reste grise tant que la capture n'est pas autorisée. |

:::caution
Tout ce que joue l'ordinateur est enregistré, pas seulement la conversation. Ce téléphone ne peut pas annoncer un enregistrement dans la réunion de quelqu'un d'autre ; c'est donc à vous de le dire.
:::

La partie du programme qui s'en charge est le module **Capture**, *Enregistrer une conversation qui se tient dans une autre application*. Il peut être désactivé dans [Modules](../application/modules.md).

## Démarrer une capture {#starting-a-capture}

Une fois la capture autorisée, le bas de la [fenêtre principale](../interface/main-window.md#capture) affiche son état — **Capture · prêt** — avec un bouton **Enregistrer** à droite. Appuyez sur **Enregistrer** pour démarrer à la main.

### Démarrage automatique {#automatic-start}

**Démarrage automatique** décide de ce qui se passe quand le programme entend une conversation dans une autre application :

| Choix | Ce qui se passe |
| --- | --- |
| **Jamais** | Une capture ne démarre que lorsque vous appuyez sur **Enregistrer**. |
| **Me demander** | Le programme demande s'il faut l'enregistrer. Par défaut. |
| **Toujours** | Le programme commence à enregistrer de lui-même. |

Sous **Applications ayant leur propre réponse**, une application peut recevoir sa propre réponse — par exemple *Toujours enregistrer cette application* depuis la question que pose le programme.

*Demander ne coûte rien : les secondes précédant votre réponse sont déjà conservées.*

### Avant le début {#before-the-start}

Le curseur **Avant le début** indique combien de secondes de son sont conservées d'avant le démarrage d'un enregistrement, **15 secondes** par défaut. Il est là pour que rien ne se perde pendant que la conversation est remarquée : un enregistrement qui démarre quand vous appuyez sur **Enregistrer**, ou quand vous répondez à la question, commence quand même par les mots qui précédaient.

## Capturer une conversation {#capturing-a-conversation}

Pendant l'enregistrement, la fenêtre principale affiche un point rouge, le nom de l'enregistrement (par exemple **Réunion dans Zoom**), le temps écoulé et les deux canaux sous forme d'ondes.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="L'enregistrement d'une réunion" />

- **Arrêter l'enregistrement** y met fin.
- La fenêtre reste visible pendant l'enregistrement et vous rappelle de dire aux participants que la réunion est enregistrée.

### Ce que montre l'image {#what-the-picture-shows}

Deux autres réglages choisissent comment le niveau du son est dessiné :

| Réglage | Par défaut | Où |
| --- | --- | --- |
| **Image dans la fenêtre principale** | Onde | Les deux canaux pendant une capture. |
| **Image dans la barre au pied du téléphone** | Deux niveaux | Les deux fines barres sous **Capture · prêt**. |

### Tester {#testing-it}

Sous **Tester**, l'onglet a deux barres : **Vous** et **L'autre côté**. *La barre du haut bouge quand vous parlez, celle du bas quand quelque chose joue.* Avant une réunion importante, dites un mot et jouez un son quelconque pour voir que le programme entend les deux côtés.

## Donner un nom {#giving-it-a-name}

Le crayon à côté du nom de l'enregistrement permet de le renommer pendant qu'il est en cours. Un enregistrement que vous n'avez pas nommé est listé comme **Une autre application**.

## Où va l'enregistrement {#where-the-recording-goes}

Une conversation capturée apparaît dans la [fenêtre des enregistrements](../recordings/recordings-window.md) comme n'importe quelle autre, avec sa propre icône, une fenêtre au lieu d'un combiné, et avec le titre que vous lui avez donné ou **Une autre application**.

<Shot name="01_recordings" alt="Des réunions capturées dans l'onglet Enregistrements, marquées d'une icône de fenêtre" />

Elle est transcrite, résumée, classée dans une catégorie et étiquetée par les mêmes [règles](../ai-processing/processing.md#rules) qu'un appel. Dans la transcription d'une réunion capturée, l'interlocuteur apparaît comme **Une autre application** là où un appel afficherait le nom du correspondant ; la **Recherche** de la bibliothèque y retrouve aussi ce qui a été dit.
