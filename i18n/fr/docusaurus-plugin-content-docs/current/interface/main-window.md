---
title: Fenêtre principale
sidebar_position: 1
description: "Le téléphone à gauche, la bibliothèque et les réglages à droite — la disposition de la fenêtre principale d'AI Softphone."
---

La fenêtre principale est le téléphone lui-même. Avec la disposition par défaut, **Une fenêtre**, le téléphone se tient à gauche et tout le reste s'ouvre à droite. La [disposition peut être modifiée](../program/appearance.md).

<Shot name="03_contacts" full alt="La fenêtre principale : le téléphone à gauche et l'onglet Contacts à droite" />

## Le téléphone {#the-phone}

De haut en bas, la partie gauche contient :

- le champ **Numéro** ;
- le clavier et la touche d'appel ;
- les pastilles des comptes ;
- les boutons qui surveillent d'autres postes ;
- les quatre destinations : **Enregistrements**, **Contacts**, **Journal** et **Réglages**.

### Le numéroteur {#the-dialler}

- **Numéro** — tapez ou collez le numéro à appeler. L'icône d'horloge au bout du champ ouvre la liste des numéros que vous avez appelés ou qui vous ont appelé récemment.
- Les touches rondes **1–9**, **\***, **0** et **#** remplissent le numéro, et pendant un appel elles envoient des tonalités (DTMF).
- La touche du combiné passe l'appel. Elle reste grise tant qu'il n'y a pas de numéro.

<Shot name="22_last_calls" full alt="La liste des appels récents sous le champ Numéro, à côté de l'onglet Journal" />

Quand la liste des numéros récents est ouverte, le champ affiche un chevron et la touche d'appel passe à sa droite. Chaque entrée est un nom, ou un numéro si l'appelant n'est pas dans les [Contacts](contacts-history.md), avec la date. Un combiné rouge marque un appel manqué ; un nombre de répétitions entre parenthèses — par exemple *Support (4)* — représente plusieurs appels de suite au même correspondant.

### Les pastilles des comptes {#the-account-chips}

Sous le clavier se trouve une pastille pour chaque [compte](../sip-accounts/setup.md). Un point vert signifie que le compte est enregistré sur l'IPBX. La pastille en surbrillance (sur l'image, **305 Assistance**) est le compte depuis lequel le prochain appel sera passé ; appuyez sur une autre pastille pour en changer. Le bouton rond rouge à droite des pastilles est le mode ne pas déranger.

### Les boutons {#the-buttons}

Sous les pastilles se trouvent les [boutons](../sip-accounts/buttons.md) que vous avez créés pour des collègues et des lignes, chacun avec un voyant — **Dubois** et **Entrepôt** sur les images. Appuyez sur l'un d'eux pour composer son numéro.

### Enregistrements, Contacts, Journal, Réglages {#recordings-contacts-history-settings}

Ces quatre entrées en bas ouvrent chacune un onglet à droite, côte à côte : [Enregistrements](../interface/recordings.md), [Contacts et journal](contacts-history.md) et [Réglages](settings-overview.md). Les onglets ouverts restent dans la rangée en haut de la partie droite.

## Un appel en cours {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Un appel en cours" />

Pendant un appel, le champ du numéro passe en haut avec une icône de clavier à l'intérieur, et l'appel est affiché sur une carte :

- l'état et la durée de l'appel (**En communication · 0:21**), le nom du correspondant, **Ligne** et le nom du compte sur lequel passe l'appel, et le numéro ;
- deux barres de niveau verticales sur les côtés de la carte, une pour chaque canal du son ;
- une rangée de boutons : enregistrer (cercle), couper le micro (microphone), mettre en attente (pause) et le bouton rouge **Raccrocher** ;
- une deuxième rangée : transférer (combiné avec une flèche) et le clavier.

Un appel peut être transféré directement, ou après avoir d'abord parlé à la personne.

Si le numéro est connu dans les **Contacts**, son nom s'affiche à la place du numéro. Les mêmes actions ont des [raccourcis](../program/shortcuts.md) : répondre, raccrocher, mettre en attente et couper le micro.

## Plusieurs appels à la fois {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Plusieurs appels" />

Un appel entrant est annoncé par une bannière où que vous travailliez, même quand le téléphone est masqué. Un nouvel appel entrant apparaît sur sa propre carte au-dessus de la liste, avec un bouton vert, un jaune et un rouge, et une ligne qui indique avec qui vous parlez en ce moment (**En communication avec …**). La liste en dessous montre chaque appel avec son état — **En attente**, **En communication**, **Appel entrant** — et le compte sur lequel il passe. Une icône de pause marque un appel en attente et une icône de haut-parleur celui sur lequel vous parlez.

Ce qui se passe quand quelqu'un appelle alors que vous êtes déjà en communication se règle dans [Réglages des appels](../sip-accounts/calls.md#call-waiting).

## Conférence {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Une conférence" />

Les appels réunis s'affichent comme une seule carte **Conférence** sur la ligne du compte. Chaque participant est listé avec son temps d'appel et son propre bouton **Raccrocher**. Les boutons en dessous enregistrent, coupent le micro et terminent la conférence pour tout le monde ; le large bouton du bas sépare à nouveau la conférence en appels distincts.

## Capture {#capture}

Quand la [capture des autres applications](../capture/capture.md) est autorisée dans **Réglages → Capture**, une bande apparaît entre les pastilles des comptes et les boutons.

<Shot name="10_settings_capture" full alt="La bande Capture au pied du téléphone : Capture · prêt, Enregistrer et deux barres de niveau" />

- **Capture · prêt** indique que le programme guette une conversation dans une autre application.
- **Enregistrer** lance une capture à la main.
- Les deux fines barres en dessous montrent le niveau du son : celle du haut, c'est vous ; celle du bas, ce que joue l'ordinateur. Leur dessin se règle sous **Image dans la barre au pied du téléphone**.

Le programme peut aussi vivre dans la zone de notification (la barre des menus sous macOS) et être appelé par un [raccourci](../program/shortcuts.md).
