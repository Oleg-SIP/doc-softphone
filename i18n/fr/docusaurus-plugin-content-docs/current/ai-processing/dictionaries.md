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
| **Ventes** | `sales` | Vendre, chiffrer, négocier ou relancer un achat — y compris un client qui demande combien coûte quelque chose. |
| **Assistance** | `support` | Aider quelqu'un avec un produit ou un service qu'il a déjà : une panne, une question d'utilisation, une plainte sur son fonctionnement. |
| **Personnel** | `personal` | Pas professionnel du tout — une conversation privée qui s'est trouvée passer par cette ligne. |
| **Autre** | `other` | Professionnel, mais ni vente ni assistance : un fournisseur, un collègue, une livraison, un faux numéro. Choisissez ceci plutôt que de deviner entre les autres. |

Appuyez sur **Ajouter** pour ajouter votre propre catégorie.

## Étiquettes {#tags}

Des marques qui *peuvent toutes être vraies de la même conversation*. Appuyez sur **Ajouter** pour en ajouter une. La liste commence avec des entrées comme :

| Nom | Code | Utilisée pour |
| --- | --- | --- |
| **Rappel promis** | `callback` | Quelqu'un dans cet appel a promis de rappeler, ou a demandé à être rappelé. |
| **Réclamation** | `complaint` | L'interlocuteur a exprimé son mécontentement, qu'il ait été résolu ou non. |
| **Escaladé** | `escalation` | L'appel a été confié à quelqu'un d'autre, ou l'interlocuteur a demandé qu'il le soit. |
| **Client important** | `vip` | L'interlocuteur a été traité comme un compte important, ou a dit qu'il en était un. |

## Signaux {#red-flags}

Des points qui demandent de l'attention, trouvés dans la conversation avec la preuve et le moment — par exemple *Client en colère* ou *Risque de départ*. Les signaux sont dessinés en rouge dans la [fenêtre des enregistrements](../interface/recordings.md), et chacun porte une gravité : faible, moyenne ou élevée.

| Nom | Code | `severity` | Utilisée pour |
| --- | --- | --- | --- |
| **Client en colère** | `angry-customer` | `high` | L'interlocuteur était audiblement en colère, insultant, ou a menacé de partir. |
| **Risque de départ** | `churn-risk` | `high` | Une résiliation, un non-renouvellement ou un passage à quelqu'un d'autre a été évoqué, aussi calmement que ce soit. |
| **Engagement pris** | `promise-made` | `medium` | Notre côté s'est engagé sur quelque chose de précis — une date, un prix, une correction, un remboursement. |
| **Données sensibles** | `sensitive-data` | `high` | Un numéro de carte, un mot de passe, un numéro de document ou toute autre chose qui n'a rien à faire dans un enregistrement a été lu à voix haute. |
| **Concurrent** | `competitor` | `low` | L'interlocuteur a nommé quelqu'un d'autre proposant la même chose, ou nous a comparés à lui. |

## Consignes {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Réglages → Dictionnaires : formes de réponse et instructions de langue" />

*Ce qui est ajouté à chaque invite sur la forme de la réponse et la langue dans laquelle l'écrire.* Elles sont conservées ici pour que chaque invite puisse utiliser la même formulation, et vous pouvez les modifier comme n'importe quelle autre entrée — ou écrire les vôtres, comme *réponds brièvement* ou *ne cite jamais de prix*, et les cocher sous **Envoyer aussi** dans n'importe quelle invite.

| Nom | Code | Ce qu'elle dit au modèle |
| --- | --- | --- |
| **Texte suivi** | `shape-plain` | Répondre en texte suivi, sans JSON, listes ni titres. |
| **Points** | `shape-list` | Répondre par une liste de choses à faire, chacune avec qui et quand. |
| **Étiquettes** | `shape-labels` | Répondre en JSON avec une liste de codes et son degré de certitude pour chacun, en n'utilisant que des codes de la liste fournie. |
| **Note** | `shape-score` | Répondre avec une note, sa justification et les mots sur lesquels elle repose. |
| **Critères** | `shape-rubric` | Répondre avec une note globale et une note pour chaque critère. |
| **Signaux** | `shape-flags` | Répondre avec des codes de la liste, chacun avec une gravité. |
| **Réponse** | `shape-qa` | Répondre avec la réponse, ou dire clairement que la conversation ne le dit pas, ainsi que les mots sur lesquels la réponse repose. |
| **JSON** | `shape-json` | Répondre uniquement en JSON, sous la forme demandée plus haut. |
| **Comme parlé** | `language-as-spoken` | Écrire dans la langue de la conversation. |
| **Comme parlé, nommé** | `language-as-spoken-named` | La même chose, en nommant la langue. |
| **Une langue nommée** | `language-named` | Écrire dans la langue que vous indiquez. |

**Ajouter** en haut de la liste ajoute une entrée.

## Valeurs par défaut {#defaults}

**Rétablir les valeurs par défaut** remet chaque dictionnaire tel qu'il était livré avec le programme, dans la langue actuelle de l'interface. Ce sous quoi vos conversations sont déjà classées n'est pas touché.

## Formats de réponse {#response-formats}

Ces blocs reproduisent les instructions fournies. Ils décrivent les formats de réponse ; les alternatives sont une notation, pas des exemples JSON exécutables.

### Texte suivi (`shape-plain`) {#shape-plain}

```text
Répondez en texte suivi. N'utilisez ni JSON, ni listes, ni titres.
```

### Points (`shape-list`) {#shape-list}

```text
Répondez uniquement en JSON, exactement de cette forme :
{"items": [{"text": "ce qui est à faire", "owner": "qui, ou vide", "due": "quand, ou vide"}]}
Renvoyez un tableau vide s'il n'y a rien à énumérer. N'écrivez rien en dehors du JSON.
```

### Étiquettes (`shape-labels`) {#shape-labels}

```text
Répondez uniquement en JSON, exactement de cette forme :
{"labels": [{"code": "un code de la liste qui vous a été donnée", "confidence": 0.0}]}
N'utilisez que les codes de la liste. Renvoyez un tableau vide si aucun ne convient.
N'inventez pas de code, et n'écrivez rien en dehors du JSON.
```

### Note (`shape-score`) {#shape-score}

```text
Répondez uniquement en JSON, exactement de cette forme :
{"score": 3, "rationale": "pourquoi ce chiffre et pas un de plus",
 "evidence": [{"at_ms": 0, "quote": "les mots sur lesquels vous vous appuyez"}]}
La note est un entier de 1 à 5. N'écrivez rien en dehors du JSON.
```

### Critères (`shape-rubric`) {#shape-rubric}

```text
Répondez uniquement en JSON, exactement de cette forme :
{"overall": 3, "rationale": "pourquoi ce chiffre et pas un de plus",
 "criteria": [{"name": "le critère tel qu'il vous a été donné",
               "verdict": "pass" ou "weak" ou "fail" ou "n/a",
               "note": "une phrase"}]}
Jugez chaque critère qui vous a été donné et aucun autre. La note globale est un entier
de 1 à 5. N'écrivez rien en dehors du JSON.
```

### Signaux (`shape-flags`) {#shape-flags}

```text
Répondez uniquement en JSON, exactement de cette forme :
{"flags": [{"code": "un code de la liste qui vous a été donnée",
            "severity": "low" ou "medium" ou "high",
            "evidence": "les mots sur lesquels vous vous appuyez",
            "at_ms": 0}]}
N'utilisez que les codes de la liste, et ne signalez chacun qu'une fois au plus. Renvoyez un
tableau vide si rien ne s'applique. N'écrivez rien en dehors du JSON.
```

### Réponse (`shape-qa`) {#shape-qa}

```text
Répondez uniquement en JSON, exactement de cette forme :
{"answer": "votre réponse, ou dites clairement que la conversation ne le dit pas",
 "citations": [{"at_ms": 0, "quote": "les mots sur lesquels repose votre réponse"}]}
Ne répondez à partir de rien d'autre que la conversation. N'écrivez rien en dehors
du JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Répondez uniquement en JSON, dans la forme demandée ci-dessus. N'écrivez rien en dehors du JSON.
```

### Comme parlé (`language-as-spoken`) {#language-as-spoken}

```text
Écrivez votre réponse dans la langue même de la conversation.
```

### Comme parlé, nommé (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Écrivez votre réponse dans la langue même de la conversation, qui est {language}.
```

### Une langue nommée (`language-named`) {#language-named}

```text
Écrivez votre réponse dans cette langue : {language}.
```
