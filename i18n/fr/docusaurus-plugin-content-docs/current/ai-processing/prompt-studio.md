---
title: Personal Prompt Studio
sidebar_position: 3
description: Les invites qui rédigent vos conversations, les règles qui les exécutent, et comment les faire vôtres.
---

**Personal Prompt Studio** est la partie d'AI Softphone qui rédige vos conversations à votre façon. Le compte rendu est produit par des invites : le programme en fournit onze, prêtes à l'emploi dès que la transcription et un modèle de langue sont reliés, et vous pouvez les modifier en langage courant, les dupliquer et ajouter les vôtres. Elles sont listées sous **Invites** dans [Réglages → Traitement](processing.md#prompts).

Votre LLM, votre clé, votre contrôle : reliez le modèle que vous préférez avec votre propre clé, via un service pris en charge ou une API compatible — ou un modèle déployé au sein de votre organisation. Avec une [transcription](transcription.md#your-own-models) sur votre propre matériel elle aussi, l'audio comme les transcriptions restent dans votre environnement.

<Shot name="12b_settings_processing_prompts" alt="La liste des invites dans Réglages → Traitement" />

## Les invites livrées avec le programme {#the-prompts-that-come-with-the-program}

La deuxième colonne est ce que la liste affiche sous le nom de l'invite : ce qu'elle écrit, et sous quelle forme.

| Invite | Forme | Ce qu'elle écrit |
| --- | --- | --- |
| **Résumé** | Texte suivi | Les points principaux, les décisions et les prochaines étapes en un court paragraphe. |
| **Résumé en une ligne** | Texte suivi | Un titre court pour reconnaître la conversation dans une liste. |
| **Actions à mener** | Points | Qui s'est engagé à faire quoi, et quand, avec les mots prononcés. |
| **Sujets** | Points | Les sujets abordés, en quelques mots. |
| **Noms et nombres** | JSON | Personnes, entreprises, dates, montants et références. |
| **Catégorie** | Étiquettes | Classe la conversation dans l'une de vos [catégories](dictionaries.md). |
| **Étiquettes** | Étiquettes | Y pose vos [étiquettes](dictionaries.md), pour qu'on puisse la retrouver plus tard. |
| **Signaux** | Signaux | Les problèmes, avec la preuve et le moment dans la conversation. |
| **Une question sur cet appel** | Réponse | Répond à une question que vous posez sur une conversation, d'après sa transcription. |
| **Qualité commerciale** | Critères | Évalue la conversation selon des critères de vente que vous pouvez modifier. |
| **Qualité de l'assistance** | Critères | Juge à quel point le problème a été compris et traité. |

Les formes sont des modèles fixes de réponse, ce qui permet au programme de la conserver et d'y chercher plus tard : les **Étiquettes** sont des codes tirés de l'une de vos listes, les **Signaux** sont des codes avec une gravité, les **Critères** sont une note avec une justification et une note pour chaque critère, la **Réponse** est une réponse accompagnée des mots sur lesquels elle repose. Les instructions qui indiquent la forme à un modèle sont conservées dans [Dictionnaires](dictionaries.md#answer-shapes-and-language).

Les appels passés dans AI Softphone, les réunions [capturées](/capture/) depuis l'ordinateur et les enregistrements importés passent tous par les mêmes invites une fois qu'ils ont une transcription.

Les actions à mener consignent ce qui a été convenu — elles n'envoient pas de messages, ne réservent pas de rendez-vous et ne créent pas de tickets à votre place.

## La faire vôtre {#making-it-yours}

- Modifiez ce que demande une invite, en langage courant : ce qu'elle cherche, le format de la réponse et la langue dans laquelle elle répond.
- Dupliquez une invite pour essayer une variante.
- Choisissez le modèle de chaque invite — sur votre propre machine ou dans le cloud.
- Définissez l'ordre d'exécution des invites, activez-les et désactivez-les, et rendez-les conditionnelles — cela se fait avec les [règles](processing.md#rules) : par exemple, une évaluation commerciale ne s'exécute que sur les appels classés **Ventes**.
- Gardez vos propres catégories, étiquettes et signaux dans [Dictionnaires](dictionaries.md).
- Plafonnez le coût avec les [limites mensuelles](processing.md#limits).

Les invites et les règles d'origine peuvent être rétablies avec **Rétablir les valeurs par défaut** sous **Valeurs par défaut** dans [Réglages → Traitement](processing.md#defaults).
