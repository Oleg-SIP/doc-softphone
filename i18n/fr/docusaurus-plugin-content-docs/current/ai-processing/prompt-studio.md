---
title: Personal Prompt Studio
sidebar_position: 3
description: Les invites qui rédigent vos conversations, les règles qui les exécutent, et comment les faire vôtres.
---

**Personal Prompt Studio** est la partie d'AI Softphone qui rédige vos conversations à votre façon. Le compte rendu est produit par des invites : le programme en fournit onze, prêtes à l'emploi dès que la transcription et un modèle de langue sont reliés, et vous pouvez les modifier en langage courant, les dupliquer et ajouter les vôtres. Elles sont listées sous **Invites** dans [Réglages → Traitement](processing.md#prompts).

Votre LLM, votre clé, votre contrôle : reliez le modèle que vous préférez avec votre propre clé, via un service pris en charge ou une API compatible — ou un modèle déployé au sein de votre organisation. Avec une [transcription](transcription.md#your-own-models) sur votre propre matériel elle aussi, l'audio comme les transcriptions restent dans votre environnement.

<Shot name="12b_settings_processing_prompts" alt="La liste des invites dans Réglages → Traitement" />

## Les invites livrées avec le programme {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 comprend onze prompts pour les conversations terminées et quatre assistants en direct. Voici les textes fournis dans cette langue ; les versions linguistiques peuvent différer.

| Invite | `code` | Forme | Ce qu'elle écrit |
| --- | --- | --- | --- |
| **Résumé** | `summary` | Texte suivi | Les points principaux, les décisions et les prochaines étapes en un court paragraphe. |
| **Résumé en une ligne** | `super-summary` | Texte suivi | Un titre court pour reconnaître la conversation dans une liste. |
| **Actions à mener** | `action-items` | Points | Qui s'est engagé à faire quoi, et quand, avec les mots prononcés. |
| **Sujets** | `topics` | Points | Les sujets abordés, en quelques mots. |
| **Noms et nombres** | `entities` | JSON | Personnes, entreprises, dates, montants et références. |
| **Catégorie** | `categorise` | Étiquettes | Classe la conversation dans l'une de vos [catégories](dictionaries.md). |
| **Étiquettes** | `tags` | Étiquettes | Y pose vos [étiquettes](dictionaries.md), pour qu'on puisse la retrouver plus tard. |
| **Signaux** | `red-flags` | Signaux | Les problèmes, avec la preuve et le moment dans la conversation. |
| **Une question sur cet appel** | `qa` | Réponse | Répond à une question que vous posez sur une conversation, d'après sa transcription. |
| **Qualité commerciale** | `sales-quality` | Critères | Évalue la conversation selon des critères de vente que vous pouvez modifier. |
| **Qualité de l'assistance** | `support-quality` | Critères | Juge à quel point le problème a été compris et traité. |

Les formes sont des modèles fixes de réponse, ce qui permet au programme de la conserver et d'y chercher plus tard : les **Étiquettes** sont des codes tirés de l'une de vos listes, les **Signaux** sont des codes avec une gravité, les **Critères** sont une note avec une justification et une note pour chaque critère, la **Réponse** est une réponse accompagnée des mots sur lesquels elle repose. Les instructions qui indiquent la forme à un modèle sont conservées dans [Dictionnaires](dictionaries.md#instructions).

Les assistants du [souffleur](../interface/prompter.md) sont aussi des invites, exécutées sur chaque réponse pendant un appel plutôt que sur une conversation terminée. Ils sont conservés dans une liste à part, sous [Assistants](prompter.md#assistants) dans **Réglages → Souffleur**.

Les appels passés dans AI Softphone, les réunions [capturées](/capture/) depuis l'ordinateur et les enregistrements importés passent tous par les mêmes invites une fois qu'ils ont une transcription.

Les actions à mener consignent ce qui a été convenu — elles n'envoient pas de messages, ne réservent pas de rendez-vous et ne créent pas de tickets à votre place.

## La faire vôtre {#making-it-yours}

- Modifiez ce que demande une invite, en langage courant : ce qu'elle cherche, le format de la réponse et la langue dans laquelle elle répond.
- Dupliquez une invite pour essayer une variante.
- Choisissez le modèle de chaque invite — sur votre propre machine ou dans le cloud.
- Définissez l'ordre d'exécution des invites, activez-les et désactivez-les, et rendez-les conditionnelles — cela se fait avec les [règles](processing.md#rules) : par exemple, une évaluation commerciale ne s'exécute que sur les appels classés **Ventes**.
- Gardez vos propres catégories, étiquettes et signaux dans [Dictionnaires](dictionaries.md).
- Plafonnez le coût avec les [limites mensuelles](processing.md#spending).

Les invites et les règles d'origine peuvent être rétablies avec **Rétablir les valeurs par défaut** sous **Valeurs par défaut** dans [Réglages → Traitement](processing.md#defaults).

## Rôle du modèle {#role-and-task}

`system` définit le comportement du modèle ; `body` décrit la tâche. La forme et la langue de réponse sont précisées séparément par les instructions des répertoires.

Une liste vide de tâches ou d’alertes peut être correcte. Il ne faut inventer ni responsable ni échéance. Les réponses aux questions doivent reposer uniquement sur la transcription.

[Formats de réponse](dictionaries.md#response-formats)

## Variables de substitution {#placeholders}

Un élément du prompt remplacé par les données de la conversation.

| Variable de substitution | Signification |
| --- | --- |
| `{{transcript}}` | Transcription, une réplique par ligne, avec les temps en millisecondes |
| `{{duration}}` | Durée de la conversation |
| `{{direction}}` | Appel entrant ou sortant |
| `{{party}}` | Nom du contact ou numéro |
| `{{language}}` | Langue de réponse |
| `{{question}}` | Question de l’utilisateur |
| `{{categories}}` | Répertoire des catégories |
| `{{tags}}` | Répertoire des étiquettes |
| `{{red_flags}}` | Répertoire des alertes |
| `{{artifact:summary}}` | Résumé déjà produit |
| `{{conversation}}` | Contexte accumulé par le prompteur |
| `{{reply}}` | Dernière réplique de l’interlocuteur ; prompteur uniquement |

Exécutez `summary` avant `super-summary`, qui utilise `{{artifact:summary}}`. Exécutez `categorise` avant l’évaluation : `sales-quality` exige la catégorie `sales`, et `support-quality` exige `support`.

[Assistants fournis](prompter.md#assistant-templates)

## Textes des prompts par défaut {#standard-templates}

AI Softphone 1.1.11 comprend onze prompts pour les conversations terminées et quatre assistants en direct. Voici les textes fournis dans cette langue ; les versions linguistiques peuvent différer.

### Résumé (`summary`) {#summary}

**Forme de réponse:** `plain`.

**Rôle (`system`)**

```text
Vous lisez des transcriptions d'appels téléphoniques et en écrivez des résumés courts et factuels. Vous ne devinez jamais ce qui n'a pas été dit, et vous n'ajoutez jamais de conseils.
```

**Consigne (`body`)**

```text
Résumez cet appel téléphonique en un court paragraphe : de quoi il s'agissait, ce qui a été décidé, et ce qui se passe ensuite. Il a duré {{duration}} et était {{direction}}, avec {{party}}.

{{transcript}}
```

### Résumé en une ligne (`super-summary`) {#super-summary}

**Forme de réponse:** `plain`.

**Rôle (`system`)**

```text
Vous lisez des transcriptions d'appels téléphoniques et réduisez chacune à une seule tournure. Vous ne devinez jamais et vous n'ajoutez jamais de conseils.
```

**Consigne (`body`)**

```text
Réduisez cet appel téléphonique à une tournure de douze mots au plus — le genre de ligne qui irait dans un tableau à côté du nom de l'appelant. Pas de point final, pas de guillemets.

{{artifact:summary}}

{{transcript}}
```

### Actions à mener (`action-items`) {#action-items}

**Forme de réponse:** `list`.

**Rôle (`system`)**

```text
Vous lisez des transcriptions d'appels téléphoniques et énumérez ce que quelqu'un s'est engagé à faire. Vous n'énumérez que ce qui a réellement été dit ; vous n'inventez jamais une tâche, un responsable ou une date.
```

**Consigne (`body`)**

```text
Énumérez ce que quiconque dans cet appel s'est engagé à faire. Nommez qui doit le faire là où cela a été dit, et pour quand là où cela a été dit. Si personne ne s'est engagé à rien, répondez par une liste vide.

{{transcript}}
```

### Sujets (`topics`) {#topics}

**Forme de réponse:** `list`.

**Rôle (`system`)**

```text
Vous lisez des transcriptions d'appels téléphoniques et nommez ce dont ils parlaient.
```

**Consigne (`body`)**

```text
Énumérez les sujets que cet appel a réellement couverts, six au plus, chacun en quelques mots. Laissez le responsable et la date vides — ils ne veulent rien dire ici.

{{transcript}}
```

### Noms et nombres (`entities`) {#entities}

**Forme de réponse:** `json`.

**Rôle (`system`)**

```text
Vous lisez des transcriptions d'appels téléphoniques et en extrayez ce qui a été nommé. Vous ne devinez jamais une orthographe et n'ajoutez jamais ce qui n'a pas été dit.
```

**Consigne (`body`)**

```text
Extrayez ce qui a été nommé dans cet appel, en JSON exactement de cette forme :
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Chacun est une liste de chaînes, écrites comme elles ont été dites. Laissez une liste vide plutôt que de deviner.

{{transcript}}
```

### Catégorie (`categorise`) {#categorise}

**Forme de réponse:** `labels`.

**Rôle (`system`)**

```text
Vous classez les appels téléphoniques dans l'une des catégories qui vous sont données. Vous choisissez dans la liste et rien d'autre.
```

**Consigne (`body`)**

```text
Classez cet appel dans exactement une de ces catégories. Répondez par son code.

{{categories}}
{{transcript}}
```

### Étiquettes (`tags`) {#tags}

**Forme de réponse:** `labels`.

**Rôle (`system`)**

```text
Vous étiquetez les appels téléphoniques avec les étiquettes qui vous sont données. Vous choisissez dans la liste et rien d'autre, et vous omettez une étiquette plutôt que de l'étirer.
```

**Consigne (`body`)**

```text
Lesquelles de celles-ci sont vraies de cet appel ? Répondez par leurs codes, ou par une liste vide si aucune ne l'est.

{{tags}}
{{transcript}}
```

### Signaux (`red-flags`) {#red-flags}

**Forme de réponse:** `flags`.

**Rôle (`system`)**

```text
Vous lisez des transcriptions d'appels téléphoniques et ne signalez que ce qu'on vous a donné à chercher. Vous citez les mots sur lesquels vous vous appuyez pour chacun, et vous ne signalez rien que vous ne puissiez citer.
```

**Consigne (`body`)**

```text
Signalez ceux d'entre eux que cet appel montre. Pour chacun, citez les mots sur lesquels il repose et donnez le moment en millisecondes où ils ont été dits. Ne signalez rien plutôt que d'étirer une définition.

{{red_flags}}
{{transcript}}
```

### Une question sur cet appel (`qa`) {#qa}

**Forme de réponse:** `qa`.

**Rôle (`system`)**

```text
Vous répondez à des questions sur un appel téléphonique, à partir de sa transcription et de rien d'autre. Là où l'appel ne le dit pas, vous le dites clairement plutôt que de deviner.
```

**Consigne (`body`)**

```text
{{question}}

{{transcript}}
```

### Qualité commerciale (`sales-quality`) {#sales-quality}

**Forme de réponse:** `rubric`.

**Rôle (`system`)**

```text
Vous évaluez la façon dont un commercial a mené un appel téléphonique. Vous ne jugez que ce que montre la transcription, vous ne supposez jamais ce qui s'est passé avant ou après, et vous êtes aussi sévère avec un appel qui s'est bien passé qu'avec un autre.
```

**Consigne (`body`)**

```text
Jugez notre côté de cet appel — la personne au téléphone — selon ces critères et aucun autre :
- accueil : s'est-elle présentée, elle et l'entreprise ?
- découverte : a-t-elle trouvé ce que le client voulait réellement ?
- objections : a-t-elle répondu à ce que le client soulevait, plutôt que de parler à côté ?
- valeur : a-t-elle dit ce que le client obtient, et pas seulement ce que cela coûte ?
- prochaine étape : l'appel s'est-il terminé sur quelque chose de précis ?

{{transcript}}
```

### Qualité de l'assistance (`support-quality`) {#support-quality}

**Forme de réponse:** `rubric`.

**Rôle (`system`)**

```text
Vous évaluez la façon dont un agent d'assistance a mené un appel téléphonique. Vous ne jugez que ce que montre la transcription, et vous pesez davantage si le problème du client a réellement été traité que si la conversation était agréable.
```

**Consigne (`body`)**

```text
Jugez notre côté de cet appel — la personne au téléphone — selon ces critères et aucun autre :
- accueil : s'est-elle présentée et a-t-elle confirmé à qui elle parlait ?
- compréhension : a-t-elle établi ce qui n'allait pas avant de répondre ?
- résolution : le problème a-t-il été résolu, ou une prochaine étape précise a-t-elle été donnée ?
- ton : est-elle restée calme et courtoise, surtout là où le client ne l'était pas ?
- clôture : a-t-elle vérifié que le client était satisfait avant de terminer ?

{{transcript}}
```
