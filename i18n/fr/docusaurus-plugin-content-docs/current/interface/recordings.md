---
title: Fenêtre des enregistrements
sidebar_position: 2
description: "\"La bibliothèque de toutes les conversations — un appel, un fichier importé ou une réunion capturée dans Zoom, Teams ou Meet : filtres, lecteur, transcription que l'on peut écouter à partir de n'importe quelle ligne, et comptes rendus.\""
---

**Enregistrements** est l'endroit où vit chaque conversation, quelle que soit la façon dont elle est arrivée : un appel passé ou reçu dans le téléphone, un fichier audio que vous avez importé, ou une réunion capturée dans Zoom, Teams, Meet ou toute autre application. Toutes figurent dans une même liste, et chacune s'ouvre de la même façon : le lecteur, la transcription et tout ce que le modèle de langue a rédigé à son sujet. Appuyez sur **Enregistrements** en bas à gauche de la [fenêtre principale](main-window.md) pour l'ouvrir.

<Shot name="01_recordings" alt="L'onglet Enregistrements : une réunion Zoom capturée, un fichier importé et des appels dans une même liste" />

## Trois types d'enregistrement {#three-kinds-of-recording}

L'icône à gauche d'une ligne indique comment la conversation est arrivée.

| Icône | Conversation | Son nom dans la liste | Comment elle arrive ici |
| --- | --- | --- | --- |
| Combiné avec une flèche | Un appel passé ou reçu dans ce téléphone. La flèche pointe vers l'intérieur pour un appel entrant et vers l'extérieur pour un appel sortant. | Le nom du contact, ou le numéro | Enregistré selon le réglage de [Enregistrements](../recordings.md) |
| Flèche vers une barre | Un fichier importé d'ailleurs : un téléphone mobile, un dictaphone ou un autre système | Le nom du fichier | **⋮ → Importer depuis un ou plusieurs fichiers** ; voir [ci-dessous](#a-recording-you-already-have) |
| Fenêtre | Une réunion tenue dans une autre application | Le nom que vous lui avez donné, ou **Une autre application** | [Capture](../capture/capture.md) |

Sur l'image, les trois premières lignes sont une de chaque : une réunion Zoom, un fichier importé d'un appel au support d'une banque et un appel reçu sur la ligne **305 Assistance**. Quelle que soit leur origine, elles sont transcrites, rédigées et recherchées de la même façon.

## Trouver une conversation {#finding-a-conversation}

La barre du haut contient cinq filtres, un champ de recherche et un menu :

| Commande | Restreint la liste selon |
| --- | --- |
| **Type** | la façon dont la conversation est arrivée : appels entrants ou sortants, **Importées**, **Capturés** |
| **Période** | la date : **Aujourd'hui**, **Hier**, **7 derniers jours** ou **Choisir des dates…** |
| **Catégorie** | la catégorie dans laquelle elle a été classée — voir [Dictionnaires](../ai-processing/dictionaries.md) |
| **Marque** | les étiquettes et les signaux qu'elle porte |
| **Reconnaissance** | la [reconnaissance](../ai-processing/transcription.md) qui a produit sa transcription |
| **Rechercher** | ce qui y a été dit — la recherche parcourt les transcriptions de tout ce que vous avez enregistré |

<Shot name="39_more_menu" alt="Le menu ⋮ de la liste : Importer depuis un ou plusieurs fichiers, Exporter en CSV, Ouvrir dans un navigateur" />

Le bouton **⋮** à droite de la barre ouvre d'autres actions pour la liste :

| Élément | Fait |
| --- | --- |
| **Importer depuis un ou plusieurs fichiers** | Ajoute des enregistrements que vous avez déjà. Voir [Un enregistrement que vous avez déjà](#a-recording-you-already-have). |
| **Exporter en CSV** | Enregistre la liste sous forme de tableur : la date, l'interlocuteur et son numéro, le sens, la durée, la catégorie, les étiquettes, les signaux et le résumé en une ligne de chaque conversation. |
| **Ouvrir dans un navigateur** | Ouvre la liste dans votre navigateur, sous la forme de la page que l'[API REST locale](../integration/rest-api.md) sert à l'adresse `/ui`. |

## La liste {#the-list}

Chaque ligne affiche :

- l'icône du type de conversation ;
- le nom — l'autre partie, le numéro, le fichier ou la réunion — et en dessous la date et le résumé en une ligne ;
- à droite, la catégorie avec son score (un nombre, par exemple *Assistance · 4*), puis les signaux et les étiquettes, et à la fin la durée.

Les signaux sont dessinés en rouge (sur l'image *Données sensibles*, *Engagement pris*, *Client en colère*) ; les étiquettes sont ordinaires (*Rappel promis*). Une conversation sans résumé ni catégorie n'a pas encore été rédigée — la ligne **Anne Moreau** sur l'image.

<Shot name="40_row_actions" alt="Une ligne survolée par le pointeur : les boutons épingle, crayon et corbeille" />

Pointez une ligne pour afficher trois boutons à sa droite :

| Bouton | Fait |
| --- | --- |
| Épingle | **Conserver celle-ci** : un enregistrement conservé n'est jamais supprimé par les limites de la [conservation](../recordings.md#retention). Appuyez de nouveau pour ne plus le conserver. |
| Crayon | **Renommer** : donne à la conversation un nom de votre choix. Un appel garde à côté le nom de l'interlocuteur ; une réunion ou un fichier porte sinon le nom de l'application ou du fichier d'où il vient. |
| Corbeille | **Supprimer cet enregistrement**, après confirmation. L'audio disparaît aussi, et c'est irréversible. |

## Le lecteur {#the-player}

Sélectionnez une ligne pour ouvrir le lecteur sous la liste.

- Les deux formes d'onde sont les deux canaux de l'enregistrement : celle du haut, c'est vous, celle du bas, l'autre côté. Un fichier importé contient en général une seule piste mixée, si bien que les deux lignes montrent le même son.
- **▶** lit et met en pause ; les temps à gauche sont la position et la durée totale. La barre sous les formes d'onde fait défiler un long enregistrement.
- **1×** change la vitesse ; **Les deux** choisit quelle voix vous entendez : les deux, seulement vous (**Moi**) ou seulement l'autre côté (**Eux**).
- Le bouton disquette enregistre une copie de l'enregistrement, **×** ferme la conversation.

La ligne entre la liste et le lecteur peut être tirée vers le haut pour donner plus de place à la transcription, comme sur les images ci-dessous.

## La transcription {#the-transcript}

Sous le lecteur se trouve la transcription : une ligne par prise de parole, avec le moment où elle a été dite et qui l'a dite.

<Shot name="26_recording_call" alt="Un appel sur la ligne 305 Assistance : le lecteur et la transcription, avec la ligne de 0:13 en surbrillance" />

| Type d'enregistrement | Les interlocuteurs sont affichés comme |
| --- | --- |
| Un appel | **Vous** et le nom de l'autre partie, ou le numéro |
| Une réunion capturée | **Vous** et le nom de l'enregistrement, pour tous les autres |
| Un fichier importé | **Tout le monde · speaker 1**, **Tout le monde · speaker 2**… — la reconnaissance distingue les voix |

**Cliquez sur une ligne pour aller à ce moment** : le lecteur s'y place, la ligne est mise en surbrillance et le mot prononcé y est marqué — sur l'image la ligne de **0:13**, avec le mot *Oui*. Appuyez sur **▶** pour écouter à partir de là. Pendant la lecture, la surbrillance suit la parole, de sorte que vous pouvez lire et écouter en même temps et revenir à n'importe quelle phrase.

Le temps à gauche de chaque ligne est aussi ce vers quoi pointe un compte rendu : un signal, une réponse ou une citation porte le moment des paroles sur lesquelles elle s'appuie.

## Transcription ou compte rendu : la liste déroulante {#transcript-or-write-up-the-drop-down}

La liste déroulante au-dessus de la transcription choisit ce qui s'affiche à cet endroit : une transcription, ou l'un des comptes rendus rédigés par le modèle de langue.

<Shot name="27_writeup_menu" alt="La liste déroulante ouverte : la transcription OpenAI et les comptes rendus de l'appel" />

- Les lignes avec un **microphone** sont des transcriptions, une pour chaque [reconnaissance](../ai-processing/transcription.md) qui a transcrit l'enregistrement. L'étoile marque la principale. Pointez-en une pour voir la reconnaissance, son modèle et la langue.
- Les lignes avec des **étincelles** sont des comptes rendus, produits par les [invites](/ai-processing/prompt-studio) de [Traitement](../ai-processing/processing.md).

Un enregistrement peut avoir des transcriptions de plusieurs reconnaissances, pour les comparer : la réunion Zoom ci-dessous a été transcrite à la fois par X.ai et par Deepgram.

<Shot name="36_zoom_menu" alt="Une réunion capturée avec deux transcriptions, Deepgram et X.ai, et ses comptes rendus" />

Les comptes rendus sont listés sous des noms courts :

| Dans la liste déroulante | Produit par l'invite | Ce que cela montre |
| --- | --- | --- |
| **Résumé** | Résumé | Les points principaux, les décisions et les prochaines étapes en un court paragraphe. |
| **En un mot** | Résumé en une ligne | Une phrase ; la même ligne s'affiche sous le nom dans la liste. |
| **Actions** | Actions à mener | Qui a accepté de faire quoi, et pour quand. |
| **Sujets** | Sujets | Les thèmes abordés. |
| **Mentionnés** | Noms et nombres | Les personnes, entreprises, dates, montants et références. |
| la question elle-même | Une question sur cet appel | La réponse à une question que vous avez posée, avec les paroles sur lesquelles elle s'appuie. |
| **Qualité** | Qualité commerciale, Qualité de l'assistance | Un score global et un verdict sur chaque critère. |
| **Signaux** | Signaux | Ce qui demande de l'attention, avec la preuve et le moment. |
| **Étiquettes**, **Catégorie** | Étiquettes, Catégorie | Les libellés sous lesquels la conversation a été classée. |

## Les comptes rendus, un par un {#the-write-ups-one-by-one}

Les images ci-dessous montrent toutes le même appel, sur la ligne **305 Assistance**, dans lequel une cliente demande quand ses contrats se renouvellent.

**Résumé** — la conversation en quelques phrases.

<Shot name="28_summary" alt="Le résumé de l'appel" />

**En un mot** — une ligne, assez courte pour reconnaître la conversation dans la liste.

<Shot name="29_nutshell" alt="En un mot : le résumé en une ligne de l'appel" />

**Actions** — chaque tâche avec qui doit la faire et pour quand, à droite.

<Shot name="30_actions" alt="Actions : deux tâches pour Vous, dont une à faire demain matin" />

**Une question** — posez à la conversation ce que vous voulez : la question devient le nom de l'élément, et sous la réponse figurent les paroles sur lesquelles elle s'appuie, avec leur moment dans l'enregistrement.

<Shot name="31_question" alt="La réponse à une question sur l'appel, avec deux citations à 0:16 et 0:28" />

**Qualité** — le score de 1 à 5 avec sa justification, et chaque critère marqué **réussi**, **faible** ou **échoué** avec une remarque.

<Shot name="32_quality" alt="Qualité : score 4, deux critères réussis et deux faibles" />

**Signaux** — chaque signal avec les paroles qui l'ont déclenché, sa gravité et le moment.

<Shot name="33_red_flags" alt="Signaux : Engagement pris, faible, à 0:28" />

**Sujets** — les thèmes d'une réunion, ici de la réunion Zoom.

<Shot name="38_topics" alt="Les sujets de la réunion Zoom" />

## Les boutons à côté de la liste déroulante {#the-buttons-beside-the-drop-down}

| Bouton | Fait |
| --- | --- |
| Étincelles | **Transcrire ou demander à un modèle…** : ouvre un menu, voir ci-dessous. |
| Deux feuilles | Copie ce qui est affiché. |
| Disquette | L'enregistre dans un fichier. Vous pouvez enregistrer une transcription en texte brut ou en sous-titres. |
| Corbeille | Supprime ce qui est affiché. |

<Shot name="34_run_menu" alt="Le menu des étincelles : Transcription avec quatre reconnaissances, Traitement avec les invites" />

Le menu des étincelles fait le travail à la demande. Sous **Transcription**, choisissez une reconnaissance pour transcrire de nouveau l'enregistrement avec elle ; sous **Traitement**, choisissez une invite pour l'exécuter tout de suite — **Une question sur cet appel** demande d'abord la question. Le résultat apparaît dans la liste déroulante. C'est ainsi qu'une conversation est rédigée quand **Traiter les conversations automatiquement** est désactivé dans [Traitement](../ai-processing/processing.md), et ainsi que vous ajoutez un compte rendu de plus à une conversation qui en a déjà.

## Trois exemples {#three-examples}

### Un appel passé dans le téléphone {#a-call-made-in-the-phone}

L'appel ci-dessus : les interlocuteurs sont **Vous** et **Claire Fontaine**, le nom du contact, sur deux canaux séparés.

### Un fichier que vous avez importé {#a-file-you-imported}

<Shot name="35_recording_import" alt="Un fichier importé d'un appel au support d'une banque : une piste mixée et les interlocuteurs 1 et 2" />

`riverside_bank_support_call` est un mp3 importé avec **⋮ → Importer depuis un ou plusieurs fichiers**. Son nom est celui du fichier, son icône une flèche vers une barre, et ses deux interlocuteurs ont été distingués par la reconnaissance. Les comptes rendus ont trouvé un numéro de carte prononcé à voix haute et ont levé le signal **Données sensibles**.

### Une réunion capturée dans une autre application {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Une réunion Zoom capturée depuis l'ordinateur : la transcription X.ai avec Vous et le nom de la réunion comme interlocuteurs" />

**Préparation du lancement T4 (Zoom)** a été capturée pendant que la réunion se tenait dans Zoom, puis nommée avec le crayon. Tous ceux qui sont de l'autre côté de la réunion apparaissent sous le nom de l'enregistrement ; vous êtes **Vous**. Voir [Capture](../capture/capture.md).

## Un enregistrement que vous avez déjà {#a-recording-you-already-have}

Un enregistrement fait ailleurs — sur un téléphone mobile, un dictaphone ou un autre système — peut être ajouté avec **⋮ → Importer depuis un ou plusieurs fichiers**. Choisissez un ou plusieurs fichiers mp3 ou wav ; le téléphone indique combien ont été importés et nomme ceux qu'il n'a pas pu lire comme un enregistrement. Chacun est classé exactement comme un appel composé : transcrit, rédigé selon les mêmes [règles](../ai-processing/processing.md#rules) et retrouvé par la même recherche.

## Supprimer un enregistrement {#deleting-a-recording}

Quand un enregistrement est supprimé, tout ce qui en a été tiré disparaît avec lui : les transcriptions et les comptes rendus. La durée de conservation automatique des enregistrements se règle dans [Enregistrements](../recordings.md#retention).
