---
title: Traitement
sidebar_position: 2
description: Le traitement automatique des conversations, les limites de dépenses mensuelles, les modèles de langue, les invites et les règles qui les exécutent.
---

**Réglages → Traitement** décide de ce qui arrive à une conversation une fois enregistrée, quel modèle fait le travail, et combien cela peut coûter.

<Shot name="12_settings_processing" alt="Réglages → Traitement" />

## Traiter les conversations automatiquement {#process-conversations-automatically}

- **Désactivé :** rien ne se passe tant que vous ne le demandez pas dans la [fenêtre des enregistrements](../recordings/recordings-window.md).
- **Activé :** les [règles](#rules) ci-dessous s'exécutent d'elles-mêmes. C'est ce qui transforme une conversation en résumé, en catégorie et tout le reste sans que personne n'appuie sur rien. Un modèle dans le cloud facture chacune de ces étapes.

Sous la case, le programme affiche ce qui a été dépensé ce mois-ci et sur combien de requêtes, par exemple *Ce mois-ci : 40.492 jetons, sur 84 requêtes, sans frais.*

## Limites {#limits}

| Champ | Signification |
| --- | --- |
| **Limite d'argent, mensuelle** | Le maximum que les modèles peuvent coûter en un mois. |
| **Limite de jetons, mensuelle** | Le maximum de jetons qu'ils peuvent utiliser en un mois. |

Il y a deux limites parce qu'un mois peut se compter en deux choses. Les deux sont vides tant que vous ne les remplissez pas. Quand l'une est atteinte, les règles automatiques s'arrêtent jusqu'au mois suivant. **Ce que vous demandez vous-même n'est jamais bloqué.**

## Modèles de langue {#language-models}

Les modèles qui lisent une transcription et écrivent à son sujet. Appuyez sur **Ajouter** pour en ajouter un. Chacun est listé avec son nom et, en dessous, l'identifiant du modèle et l'adresse de son service, par exemple `qwen3-32b · http://llm.local:8000/v1`. Celui qui est marqué **par défaut** est celui qui est utilisé par défaut. Un bouton dans le formulaire d'un modèle vérifie que le service répond réellement avant que vous comptiez dessus.

- Un modèle **sur votre propre machine** garde chaque conversation entre vos murs et ne coûte rien à faire tourner.
- Un modèle dans le cloud — OpenAI, Claude, Mistral, DeepSeek, Groq et d'autres — est facturé à l'usage. Le programme affiche le prix de chaque appel en jetons et en argent.

## Invites {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Réglages → Traitement : les invites" />

*Ce qui est demandé aux modèles.* Chaque invite est livrée avec le programme et chacune est à vous de modifier — et de remettre en place. Chacune est listée avec son nom et, en dessous, ce qu'elle écrit et sous quelle forme. La forme — **Réponse**, **Points**, **Étiquettes**, **JSON**, **Texte suivi**, **Signaux** ou **Critères** — décide de la façon dont la réponse est conservée et affichée. Les invites sont décrites dans [Personal Prompt Studio](prompt-studio.md). **Ajouter** crée une invite à vous.

## Règles {#rules}

<Shot name="12c_settings_processing_rules" alt="Réglages → Traitement : les règles" />

*Ce qui s'exécute tout seul, dans cet ordre. Chacune se déclenche au plus une fois par conversation.* Une règle est une ligne avec une case qui l'active ou la désactive, son nom, et en dessous ce qu'elle fait. **▲** et **▼** changent l'ordre. Le programme en fournit huit :

| Règle | Action | Quand |
| --- | --- | --- |
| **Transcrire chaque conversation** | La transcrit. | toujours |
| **La résumer** | Demande à un modèle : **Résumé**. | toujours |
| **La réduire à une ligne** | Demande à un modèle : **Résumé en une ligne**. | toujours |
| **La classer dans une catégorie** | Demande à un modèle : **Catégorie**. | toujours |
| **L'étiqueter** | Demande à un modèle : **Étiquettes**. | toujours |
| **Signaler ce qui mérite un coup d'œil** | Demande à un modèle : **Signaux**. | toujours |
| **L'évaluer, si c'était une vente** | Demande à un modèle : **Qualité commerciale**. | seulement si la catégorie est **Ventes** |
| **L'évaluer, si c'était de l'assistance** | Demande à un modèle : **Qualité de l'assistance**. | seulement si la catégorie est **Assistance** |

L'ordre compte : les deux dernières règles ont besoin de la catégorie que la règle précédente a définie. **Ajouter** crée une règle à vous.

## Valeurs par défaut {#defaults}

**Rétablir les valeurs par défaut** remet les invites et les règles telles qu'elles étaient livrées avec le programme, dans la langue actuelle de l'interface. Vos modèles de langue ne sont pas touchés.

Les invites et les règles livrées avec le programme restent dans leur langue quand vous changez la langue de l'interface ; **Rétablir les valeurs par défaut** les fait passer dans la nouvelle. Chaque invite est alors marquée *modifiée* à droite.
