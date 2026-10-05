---
title: Fenêtre des enregistrements
sidebar_position: 2
description: La bibliothèque des conversations — filtrer, écouter, lire la transcription et le compte rendu.
---

**Enregistrements** est l'endroit où vit chaque conversation, quelle que soit la façon dont elle est arrivée : un appel, une réunion capturée dans une autre application ou un fichier importé. Chacune est listée avec son compte rendu déjà rédigé.

<Shot name="01_recordings" alt="L'onglet Enregistrements : la liste des conversations" />

## Trouver une conversation {#finding-a-conversation}

La barre du haut contient quatre filtres, un champ de recherche et un menu :

| Commande | Restreint la liste selon |
| --- | --- |
| **Type** | la façon dont la conversation est arrivée |
| **Période** | la date |
| **Catégorie** | la catégorie dans laquelle elle a été classée — voir [Dictionnaires](../ai-processing/dictionaries.md) |
| **Marque** | les marques qu'elle porte |
| **Rechercher** | ce qui y a été dit — la recherche parcourt les transcriptions de tout ce que vous avez enregistré |

Le bouton **⋮** à droite de la barre ouvre d'autres actions pour la liste : **Importer depuis un ou plusieurs fichiers**, **Exporter en CSV** et **Ouvrir dans un navigateur**.

## La liste {#the-list}

Chaque ligne affiche :

- une icône pour le type de conversation : un combiné pour un appel, une fenêtre pour une réunion dans une autre application ;
- un titre — le nom du correspondant, ou le numéro, ou **Une autre application** pour une réunion capturée — et en dessous la date et le résumé en une ligne ;
- à droite, la catégorie avec son score (un nombre, par exemple *Assistance · 2*), puis les étiquettes, et à la fin la durée.

Les étiquettes dessinées en rouge sont des **signaux** (sur l'image, *Client en colère* et *Risque de départ*) ; les autres sont des étiquettes ordinaires (*Réclamation*, *Rappel promis*). Une conversation sans résumé ni catégorie n'a pas encore été rédigée — la première ligne sur l'image.

## Le lecteur {#the-player}

Sélectionnez une ligne pour ouvrir le lecteur sous la liste.

<Shot name="02_recording_details" alt="Un enregistrement sélectionné : le lecteur et la transcription sous la liste" />

- Les deux formes d'onde sont les deux canaux de l'enregistrement, un par côté de la conversation. La barre en dessous fait défiler un long enregistrement.
- **▶** lit et met en pause ; les temps à gauche sont la position et la durée totale.
- **1×** change la vitesse ; **Les deux** choisit quel canal vous entendez.
- Le bouton disquette enregistre l'audio, **×** ferme le lecteur.

## La transcription et le compte rendu {#the-transcript-and-the-write-up}

Sous le lecteur se trouve la transcription, avec une ligne par prise de parole, le moment où elle a été dite et le nom de l'interlocuteur (**Vous**, le nom du correspondant ou, pour une réunion capturée, **Une autre application**). Cliquez sur une ligne pour entendre ce moment ; la ligne sous la tête de lecture est mise en surbrillance et le mot prononcé y est marqué.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="La transcription à côté de l'audio" />

La liste déroulante au-dessus de la transcription choisit ce qui est affiché — la transcription faite par l'une de vos [reconnaissances](../ai-processing/transcription.md) (une étoile marque la transcription principale de l'enregistrement), ou un compte rendu comme **Actions**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Les actions laissées par la conversation" />

Les quatre icônes à droite de la liste déroulante :

| Icône | Action |
| --- | --- |
| Étincelles | Fait rédiger l'élément sélectionné par le modèle, maintenant. |
| Deux feuilles | Le copie. |
| Disquette | L'enregistre dans un fichier. |
| Corbeille | Le supprime. |

Vous pouvez exporter une transcription en texte brut ou en sous-titres.

Le compte rendu est produit par les [invites](/ai-processing/prompt-studio) et les modèles que vous avez configurés dans [Traitement](../ai-processing/processing.md), par des [règles](../ai-processing/processing.md#rules) qui s'exécutent d'elles-mêmes ou à votre demande. La durée de conservation des enregistrements se règle dans [Enregistrer les appels](call-recording.md#retention).

## Un enregistrement que vous avez déjà {#a-recording-you-already-have}

Un enregistrement fait ailleurs — sur un téléphone mobile, un dictaphone ou un autre système — peut être ajouté avec **⋮ → Importer depuis un ou plusieurs fichiers**. Il est classé exactement comme un appel composé : transcrit, rédigé et retrouvé par la même recherche.

## Supprimer un enregistrement {#deleting-a-recording}

Quand un enregistrement est supprimé, tout ce qui en a été tiré disparaît avec lui : la transcription et le compte rendu.
