---
title: Réglages du souffleur
sidebar_label: Souffleur
sidebar_position: 5
description: "Réglages → Souffleur : ce dont le souffleur en direct a besoin, l'interrupteur qui l'autorise, la taille du texte, les assistants et leurs cartes, et les plafonds mensuels de ce qu'il peut dépenser."
---

C'est dans **Réglages → Souffleur** que le souffleur en direct est autorisé, dimensionné et doté de ses assistants. Le souffleur lui-même — la fenêtre qui écrit un appel à mesure qu'il est dit et suggère quoi répondre, ainsi que la répétition sur un enregistrement — est décrit dans [Fenêtre du souffleur](/interface/prompter).

La [Vue d'ensemble](/interface/settings-overview) des réglages présente le souffleur sous **Souffleur** en deux étapes : **Autoriser le souffleur** et **Démarrer le souffleur**.

## Ce qu'il lui faut {#what-it-needs}
- **Une reconnaissance capable d'écouter pendant une conversation.** Elle s'ajoute dans [Réglages → Transcription](/ai-processing/transcription#live-recognition-for-the-prompter), comme toute autre reconnaissance, et il lui faut une **Adresse pour le souffleur** et un **Tester** réussi.
- **Un modèle de langue**, pour les assistants qui suggèrent quelque chose. C'est celui réglé sur l'assistant, ou le modèle par défaut de [Réglages → Traitement](/ai-processing/processing#language-models). Les sous-titres n'ont besoin d'aucun modèle.
- **La case Autoriser l'usage du souffleur**, dans **Réglages → Souffleur**.

Une fois les trois réunis, **Souffleur** apparaît dans la liste en bas du téléphone, entre **Journal** et **Réglages**, et ouvre la [fenêtre du souffleur](/interface/prompter). La partie du programme qui s'en charge est le module **Souffleur**, *Écoute une conversation en cours et propose* ; il peut être désactivé dans [Modules](/application/modules).

## Réglages → Souffleur {#settings--prompter}
<Shot name="41_settings_prompter" alt="Réglages → Souffleur : l'interrupteur qui autorise le souffleur et la taille du texte" />

*Reconnaissance de la parole pendant une conversation en cours, et suggestions rédigées selon vos propres instructions. Les deux sont facturées à la minute.*

| Réglage | Par défaut | Ce qu'il fait |
| --- | --- | --- |
| **Autoriser l'usage du souffleur** | désactivé | Le seul interrupteur qui permet de démarrer un souffleur. Rien d'autre sur la page n'a d'effet tant qu'il n'est pas activé. |
| **Transcription et suggestions** | 13 pixels | La taille à laquelle sont dessinées les deux colonnes de la fenêtre. |
| **Répéter la ligne la plus récente au-dessus des colonnes** | activé | Affiche la suggestion la plus récente — ou la ligne la plus récente, pour un assistant qui ne suggère rien — dans un bandeau à part au-dessus des colonnes. |
| **La ligne répétée** | 20 pixels | La taille du texte du bandeau. Affiché tant que le bandeau est activé. |

:::caution
La voix de l'autre partie est envoyée à une reconnaissance à mesure qu'elle parle, ce qui ne vaut pas moins qu'un enregistrement. Là où [Réglages → Enregistrement](/recordings) demande de la prévenir d'abord, un souffleur ne démarre qu'après qu'elle l'a été.
:::

On lit le souffleur en parlant, souvent de plus loin que le reste du téléphone ; les deux tailles sont donc à vous : choisissez-en que vous saisissez sans vous pencher vers l'écran. Faites glisser le séparateur sous le bandeau, dans la [fenêtre du souffleur](/interface/prompter#the-window), pour l'agrandir.

### Assistants {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Réglages → Souffleur : les assistants et les plafonds mensuels" />

Un assistant est ce qu'on demande à un souffleur d'être. *Chacun écoute une conversation en cours et écrit quelque chose dans la fenêtre du souffleur : les mots tels qu'ils sont dits, leur traduction, ou une suggestion de ce qu'il faut dire ensuite.* C'est dans la fenêtre du souffleur que vous choisissez lequel lancer. Le programme en fournit quatre :

| Assistant | `code` | Ce qu'il écrit | Interroge un modèle |
| --- | --- | --- | --- |
| **Sous-titres** | `rt-subtitles` | Les mots des deux côtés, à mesure qu'ils sont dits. | non |
| **Traduction** | `rt-translate` | Les mots de l'autre côté, traduits dans la langue du programme. | oui |
| **Ventes** | `rt-objections` | Pour qui vend par téléphone : quand le client soulève une objection, l'objection en une ligne et une ligne qui y répond. | oui |
| **Aide en entretien** | `rt-interview` | Pour qui passe un entretien : la réponse à la question qui vient d'être posée, en quelques lignes courtes, ou ce qu'il faut aborder dans la réponse suivante. | oui |

Voici les noms des assistants fournis ; les captures peuvent montrer des noms antérieurs. « — » de `rt-objections` signifie qu’aucune suggestion utile n’est disponible. Les consignes couvrent aussi les questions ouvertes et les signes d’intention d’achat.

**▲** et **▼** changent l'ordre, qui est celui de la liste déroulante de la [fenêtre du souffleur](/interface/prompter#the-window). **Ajouter** crée un assistant à vous. **Rétablir les valeurs par défaut** remet les invites et les règles telles qu'elles sont livrées avec le programme, ici comme sous [Traitement](/ai-processing/processing#defaults) ; vos modèles de langue sont laissés tranquilles.

### La carte d'un assistant {#an-assistants-card}
Un clic sur un assistant ouvre sa carte. C'est la même carte que celle d'une [invite](/ai-processing/prompt-studio) sous Traitement, avec quelques commandes en plus.

<Shot name="42_prompter_assistant" alt="La carte de l'assistant Objections pendant l'appel : la reconnaissance, quand une réponse est terminée, le rôle et l'invite" />

| Champ | Ce qu'il fait |
| --- | --- |
| **Nom** | Le nom affiché dans la liste et dans la fenêtre du souffleur. |
| **Forme de réponse** et **Envoyer aussi** | Comme pour toute invite : la forme de la réponse et les consignes envoyées avec. Les assistants livrés répondent en **Texte suivi**. |
| **Reconnaissance** | Quelle reconnaissance écoute. Seules celles qui savent écouter pendant que quelqu'un parle sont proposées. |
| **Quand une réponse est terminée** | Qui décide qu'une réponse est finie et qu'on peut y répondre : **La reconnaissance décide**, **Après une pause** ou **Seulement quand je le demande** — une réponse se termine alors quand vous appuyez sur **Suggestion**. Six des reconnaissances disent où une réponse se termine et quatre ne le disent pas ; **La reconnaissance décide** se rabat sur une pause là où elle n'a pas de réponse, et c'est pourquoi c'est le réglage à laisser. |
| **Reconnaître aussi mon côté** | Une seconde session sur la même reconnaissance, au double du prix, pour que vos propres mots apparaissent aussi dans la transcription. Ils entrent dans ce qui est dit au modèle, et ne sont jamais ce sur quoi il est interrogé. |
| **Rôle — ce qu'est le modèle** | Envoyé au modèle avant l'invite, par exemple *Vous aidez une personne qui vend par téléphone…* |
| **L'invite** | Ce qui est demandé au modèle à chaque réponse. `{{reply}}` est la réponse qui vient de se terminer et `{{conversation}}` tout ce qui a été dit avant. *Laissez vide et rien n'est demandé à un modèle : les mots sont montrés à mesure qu'ils arrivent, et la seule chose payée est la reconnaissance* — c'est cela, **Sous-titres**. |
| **Répondre en** | La langue de la suggestion : **Ce qui a été parlé**, **La langue de ce programme** ou **Une seule langue, toujours**, avec son code. |
| **Modèle** | **Par défaut** ou l'un de vos [modèles de langue](/ai-processing/processing#language-models). |

### Dépenses {#spending}
*Séparé de ce que les règles peuvent dépenser sur les conversations terminées. Un mois de résumés ne doit pas pouvoir faire taire un souffleur au milieu d'une conversation.*

| Champ | Quand il est atteint |
| --- | --- |
| **Reconnaissances, par mois** | Un souffleur en cours s'arrête à la fin de la réponse où il en est — jamais au milieu d'un mot. |
| **Modèles, par mois** | Le soufflage s'arrête et les sous-titres continuent. |

Vide signifie aucun plafond. Le coût d'une minute d'audio en direct est le **Prix à la minute** de la reconnaissance, saisi sur sa carte dans [Transcription](/ai-processing/transcription#the-recognisers-card) ; sans lui, le souffleur indique que le montant affiché est une estimation.

## Assistants fournis {#assistant-templates}

`system` définit le comportement du modèle ; `body` décrit la tâche. La forme et la langue de réponse sont précisées séparément par les instructions des répertoires.

[Variables de substitution](prompt-studio.md#placeholders)

### Sous-titres (`rt-subtitles`) {#rt-subtitles}

**Forme de réponse:** `plain`.

Rôle et consigne vides : aucun appel au modèle de langage.

### Traduction (`rt-translate`) {#rt-translate}

**Forme de réponse:** `plain`.

**Rôle (`system`)**

```text
Tu traduis la parole au fil de la conversation. Tu réponds uniquement par la traduction — pas de préambule, pas de guillemets, pas d'explication — et tu laisses les noms, les nombres et les prix exactement tels qu'ils ont été dits.
```

**Consigne (`body`)**

```text
Traduis en {{language}} :

{{reply}}
```

### Ventes (`rt-objections`) {#rt-objections}

**Forme de réponse:** `plain`.

**Rôle (`system`)**

```text
Vous aidez une personne qui vend par téléphone. Vous répondez en quelques lignes courtes qu'elle peut lire en écoutant, jamais en paragraphes, et vous ne promettez jamais rien en son nom.
```

**Consigne (`body`)**

```text
L'autre personne vient de dire :

{{reply}}

Plus tôt dans cette conversation :

{{conversation}}

Dites en une ligne ce qui se passe — une objection, une question restée sans réponse, un signe qu'ils sont prêts — et en une ligne quoi dire ensuite. S'il n'y a rien à dire, n'écrivez que « — ».
```

### Aide en entretien (`rt-interview`) {#rt-interview}

**Forme de réponse:** `plain`.

**Rôle (`system`)**

```text
Vous aidez une personne qui passe un entretien. Vous répondez en quelques lignes courtes qu'elle peut lire en écoutant, jamais en paragraphes, et vous n'inventez jamais de faits à son sujet.
```

**Consigne (`body`)**

```text
L'autre personne vient de dire :

{{reply}}

Plus tôt dans cette conversation :

{{conversation}}

En trois lignes courtes, dites ce qu'elle demande réellement et ce qu'une bonne réponse devrait couvrir.
```
