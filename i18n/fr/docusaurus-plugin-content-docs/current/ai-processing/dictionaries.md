---
title: Dictionnaires
sidebar_position: 4
description: Vos propres catégories, étiquettes et signaux — les mots sous lesquels vos conversations sont classées.
---

**Réglages → Dictionnaires** contient les mots sous lesquels une conversation peut être classée, étiquetée ou signalée. Ces listes sont ce que l'on montre aux modèles et ce parmi quoi ils doivent choisir ; une réponse est donc toujours quelque chose que vous pouvez rechercher plus tard.

<Shot name="13_settings_dictionaries" alt="Réglages → Dictionnaires" />

**Afficher les supprimées** affiche les entrées que vous avez supprimées.

Chaque entrée est un nom, un code court en petits caractères et une description qui indique au modèle quand la choisir. Le code est ce qui est stocké et ce que renvoie l'[API REST](../integration/rest-api.md#taxonomy-and-settings) ; il reste donc le même quand vous renommez l'entrée.

## Catégories {#categories}

Le sujet de la conversation ; **une seule est choisie par conversation**. Le programme commence avec quatre :

| Nom | Code | Utilisée pour |
| --- | --- | --- |
| **Ventes** | `sales` | Vendre, établir un devis, négocier ou assurer le suivi d'un achat — y compris un client qui demande combien coûte quelque chose. |
| **Assistance** | `support` | Aider quelqu'un avec un produit ou un service qu'il a déjà : une panne, une question d'utilisation, une réclamation sur son fonctionnement. |
| **Personnel** | `personal` | Rien de professionnel — une conversation privée qui s'est trouvée passer sur cette ligne. |
| **Autre** | `other` | Professionnel, mais ni vente ni assistance : un fournisseur, un collègue, une livraison, une erreur de numéro. Choisissez-la plutôt que de deviner entre les autres. |

Appuyez sur **Ajouter** pour ajouter votre propre catégorie.

## Étiquettes {#tags}

Des marques qui *peuvent toutes être vraies de la même conversation*. Appuyez sur **Ajouter** pour en ajouter une. La liste commence avec des entrées comme :

| Nom | Code | Utilisée pour |
| --- | --- | --- |
| **Rappel promis** | `callback` | Quelqu'un dans cet appel a promis de rappeler, ou a demandé à être rappelé. |
| **Réclamation** | `complaint` | Le correspondant a exprimé son mécontentement, que le problème ait été résolu ou non. |
| **Escaladé** | `escalation` | L'appel a été transmis à quelqu'un d'autre, ou le correspondant l'a demandé. |
| **Client important** | `vip` | Le correspondant a été traité comme un compte important, ou a dit en être un. |

## Signaux {#red-flags}

Des points qui demandent de l'attention, trouvés dans la conversation avec la preuve et le moment — par exemple *Client en colère* ou *Risque de départ*. Les signaux sont dessinés en rouge dans la [fenêtre des enregistrements](../interface/recordings.md), et chacun porte une gravité : faible, moyenne ou élevée.

## Formes de réponse et langue {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Réglages → Dictionnaires : formes de réponse et instructions de langue" />

Plus bas dans l'onglet se trouvent les instructions à partir desquelles les invites sont assemblées. Elles sont conservées ici pour que chaque invite puisse utiliser la même formulation, et vous pouvez les modifier comme n'importe quelle autre entrée.

| Nom | Code | Ce qu'elle dit au modèle |
| --- | --- | --- |
| **Étiquettes** | `shape-labels` | Répondre en JSON avec une liste de codes et son degré de certitude pour chacun, en n'utilisant que des codes de la liste fournie. |
| **Note** | `shape-score` | Répondre avec une note, sa justification et les mots sur lesquels elle repose. |
| **Critères** | `shape-rubric` | Répondre avec une note globale et une note pour chaque critère. |
| **Signaux** | `shape-flags` | Répondre avec des codes de la liste, chacun avec une gravité. |
| **Réponse** | `shape-qa` | Répondre avec la réponse, ou dire clairement que la conversation ne le dit pas, ainsi que les mots sur lesquels la réponse repose. |
| **JSON** | `shape-json` | Répondre uniquement en JSON, sous la forme demandée plus haut. |
| **Comme parlé** | `language-as-spoken` | Écrire dans la langue de la conversation. |
| **Comme parlé, nommé** | `language-as-spoken-named` | La même chose, en nommant la langue. |
| **Une langue nommée** | `language-named` | Écrire dans la langue que vous indiquez. |

**Ajouter** en fin de liste ajoute une entrée.

## Valeurs par défaut {#defaults}

**Rétablir les valeurs par défaut** remet chaque dictionnaire tel qu'il était livré avec le programme, dans la langue actuelle de l'interface. Ce sous quoi vos conversations sont déjà classées n'est pas touché.
