---
title: API REST locale
sidebar_position: 2
description: "Laisser d'autres programmes de cet ordinateur piloter le téléphone — passer et contrôler des appels, lire les contacts, le journal et les comptes."
---

AI Softphone dispose d'une API REST pour l'intégration CTI : un programme sur le même ordinateur peut passer et contrôler des appels, lire les contacts, le journal des appels et les comptes SIP, et surveiller les appels en cours. Pas de SDK, pas d'intermédiaire dans le cloud et aucun point d'écoute exposé au réseau. Les requêtes et les réponses sont en JSON ; `curl` ou n'importe quel client HTTP suffit donc.

L'API est **désactivée après l'installation** ; rien n'écoute tant que vous ne l'activez pas. Elle n'écoute alors que sur l'interface de bouclage — *une petite interface web qui ne répond qu'à cet ordinateur* — et ne peut pas être atteinte depuis le réseau du bureau, un VPN ou une autre machine.

Utilisez l'API quand votre programme a besoin de données du téléphone ou doit contrôler un appel. Utilisez les [webhooks](/integration/webhooks) quand il doit réagir aux appels au moment où ils se produisent, sans interroger. La plupart des intégrations utilisent les deux ; ils sont indépendants l'un de l'autre.

## L'activer {#turning-it-on}

Ouvrez **Réglages → Intégration** et allez à **Commande locale**.

<Shot name="17b_settings_integration_scrolled" alt="Réglages → Intégration : commande locale" />

1. Activez **Laisser d'autres programmes de cet ordinateur piloter le téléphone**. Le serveur démarre aussitôt.
2. Gardez le **Port** par défaut, `8377`, sauf si un autre programme l'utilise déjà.
3. Facultativement, définissez un **Jeton**. Une fois enregistré, le champ affiche *Enregistré — tapez pour le remplacer*.
4. Sous **Accès**, choisissez les groupes à ouvrir : **Contacts**, **Journal des appels**, **Les appels, et leur commande**, **Comptes**, **Réglages**, **Compteurs** (les métriques). Un groupe désactivé n'est pas filtré : il n'est pas servi du tout.
5. Testez : `curl http://127.0.0.1:8377/accounts`. Si la réponse est du JSON, l'API fonctionne.

Aucun service séparé n'est installé et aucun redémarrage n'est nécessaire. La partie du programme qui s'en charge peut être désactivée dans [Modules](/application/modules) (**Intégration**).

## La page de l'API {#the-apis-own-page}

**Ouvrir la page de l'API** ouvre `http://127.0.0.1:8377` dans un navigateur. L'adresse répond par la liste de tout ce qu'elle sert, en anglais ; les adresses qui lisent quelque chose sont des liens que vous pouvez suivre.

<Shot name="23_api_page" alt="La page de l'API, http://127.0.0.1:8377/, ouverte dans un navigateur" />

## L'accès et le jeton {#access-and-the-token}

Ce qu'un programme peut faire dépend de s'il modifie des données stockées, et non de s'il lit :

- **Sans jeton**, n'importe quel programme de l'ordinateur peut lire tout ce qui se trouve dans les groupes activés et contrôler les appels : passer, répondre, raccrocher, mettre en attente, reprendre, transférer et envoyer des DTMF.
- **Avec le jeton** dans l'en-tête `Authorization`, il peut aussi utiliser les points d'accès qui modifient ce qui est stocké. Sans le jeton, ces points d'accès ne sont ni servis ni listés sur la page de l'API.

Le jeton est conservé dans le trousseau de l'ordinateur, pas dans le fichier de réglages, et n'est jamais renvoyé par `/settings`.

:::caution
Sans jeton, n'importe quel programme qui tourne sur cet ordinateur peut contrôler le téléphone, y compris répondre aux appels. Sur un poste de travail personnel, c'est en général acceptable. Sur une machine partagée ou gérée, définissez un jeton et traitez-le comme n'importe quel autre mot de passe.
:::

## Points d'accès {#endpoints}

L'adresse de base est `http://127.0.0.1:8377`. Les points d'accès ci-dessous n'ont pas besoin de jeton.

| Méthode | Chemin | Action |
| --- | --- | --- |
| GET | `/metrics` | Les compteurs, au format Prometheus. |
| GET | `/ui` | La liste des enregistrements, sous forme de page HTML. |
| GET | `/ui/recordings/{id}` | Un enregistrement avec sa transcription, sous forme de page HTML. |
| GET | `/ui/recordings/{id}/audio` | L'audio de la page ci-dessus. |
| GET | `/contacts` | Les contacts. |
| GET | `/contacts/{id}` | Un seul contact. |
| GET | `/history` | Le journal des appels, le plus récent en premier. Accepte `?limit=`, `?missed=true` et `?declined=true`. |
| GET | `/calls` | Les appels en cours. |
| POST | `/calls` | Passe un appel : `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Répond à un appel. |
| POST | `/calls/{id}/hangup` | Raccroche un appel. |
| POST | `/calls/{id}/hold` | Met un appel en attente. |
| POST | `/calls/{id}/resume` | Le reprend. |
| POST | `/calls/{id}/dtmf` | Envoie des tonalités : `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Transfère l'appel : `{"target": "..."}`. |
| GET | `/accounts` | Les comptes SIP et leur état d'enregistrement. Jamais de mot de passe. |
| GET | `/settings` | Toute la configuration, sans les secrets. |
| GET | `/taxonomy` | Catégories, étiquettes et signaux, avec leurs codes. |

Chaque identifiant est un UUID émis par le téléphone : l'`id` d'un appel vient de `/calls` ou de la réponse à `POST /calls`, l'`id` d'un compte de `/accounts`.

Les noms de champs sont en snake_case et la terminaison indique le type : `_id` est une référence à un UUID, `_ts` est un moment en millisecondes Unix (UTC), `_s` est une durée en secondes. Il en va de même pour les webhooks ; seul `/settings` garde ses propres noms. Dans l'API REST, ces valeurs sont des nombres JSON, et un moment inconnu vaut `null`.

## Exemple : passer un appel {#example-placing-a-call}

`POST /calls` passe un appel sortant. Le corps est du JSON avec le `number` à composer et, facultativement, l'`account_id` du compte depuis lequel appeler :

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

La réponse est l'identifiant du nouvel appel :

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` est obligatoire. Sans lui, la réponse est `400 {"error":"a call needs a number"}` et rien n'est composé.
- Le numéro est complété sur le compte choisi de la même façon que le numéroteur le complète : `1020` est envoyé comme `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` complète sa `target` de la même façon ; une cible qui a déjà un schéma ou un `@` est envoyée telle quelle.
- `account_id` est facultatif ; prenez-le dans `GET /accounts`. Sans lui, l'appel part sur le compte sélectionné dans la fenêtre principale.
- Utilisez l'`id` dans `/calls/{id}/…` : `hangup`, `hold`, `resume`, `dtmf` et `transfer`. Les [webhooks](/integration/webhooks#an-outgoing-call-event-by-event) de cet appel portent le même `id`.

### Depuis une page web : cliquer pour appeler {#from-a-web-page-click-to-call}

Une page qui appelle `127.0.0.1` atteint l'ordinateur sur lequel tourne le navigateur — celui-là même sur lequel tourne le téléphone — ; un bouton « cliquer pour appeler » dans un CRM n'a donc besoin d'aucun serveur propre :

```javascript
async function dial(number) {
  const r = await fetch("http://127.0.0.1:8377/calls", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number }),
  });
  if (!r.ok) console.warn("softphone:", (await r.json()).error);
}
```

## Ce que contiennent les réponses {#what-the-answers-contain}

### Appels en cours : `GET /calls` {#calls-in-progress-get-calls}

Chaque appel a son `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` et `callstate_ts`.

- `state` vaut `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (mis en attente par ce téléphone), `onhold` (mis en attente par le correspondant), `conference` ou `ended`. Quand plusieurs s'appliquent, `conference` l'emporte sur `hold`, et `hold` sur `onhold`.
- `muted` indique si le microphone est coupé sur l'appel ; couper le micro ne change pas `state`.
- `seance_id` est la conversation : les appels liés par un transfert, une consultation ou une conférence la partagent.
- `event_ts` est le moment où la réponse a été produite. Comparez-le à `callstate_ts` pour savoir depuis combien de temps l'appel est dans son état, sans dépendre de votre propre horloge.

### Comptes : `GET /accounts` {#accounts-get-accounts}

Chaque compte a son `id` (l'`account_id` partout ailleurs), ses réglages — `transport` (`udp`, `tcp` ou `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` et d'autres —, s'il est `enabled`, et son `state` sur l'IPBX : `registered` tant que la ligne est active. Les mots de passe ne sont jamais inclus.

### Journal des appels : `GET /history` {#call-history-get-history}

Le plus récent en premier, 100 entrées sauf si `?limit=` en indique un autre nombre. `?missed=true` ne renvoie que les appels manqués, `?declined=true` que les appels que ce téléphone a refusés.

| Champ | Signification |
| --- | --- |
| `id` | L'identifiant propre de l'entrée du journal. Ce n'est pas l'`id` d'appel de `/calls` et des webhooks ; `seance_id` relie les deux. |
| `outcome` | La classification principale : `answered`, `missed`, `declined` ou `failed`. |
| `answered` | `true` ou `false`. |
| `duration_s` | `0` pour un appel qui n'a jamais été établi. |
| `number`, `uri` | Le correspondant, sous forme de numéro et d'adresse SIP. |
| `name` | D'après les Contacts si le numéro est connu, sinon vide. Faites la correspondance sur `number`, pas sur ce champ. |
| `dialed` | Les chiffres composés, pour un appel sortant ; vide pour un appel entrant. |
| `account`, `account_id` | La ligne sur laquelle est passé l'appel. |
| `reason` | Comment il s'est terminé : `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` si une personne y a répondu ; sinon ce qui a répondu à l'appel. |

### Contacts : `GET /contacts` {#contacts-get-contacts}

Chaque contact a son `id`, `name`, `number` et la ligne à laquelle il appartient, `account_id` et `account` ; un `account` vide signifie que le contact n'est lié à aucune ligne.

### Enregistrements {#recordings}

Les enregistrements et les transcriptions ne sont pas fournis en JSON. L'API les sert sous forme de pages HTML, `/ui` et `/ui/recordings/{id}` : faites des liens vers ces pages depuis votre CRM au lieu de déplacer de l'audio. Le lien s'ouvre sur l'ordinateur qui conserve l'enregistrement, et l'audio ne le quitte jamais.

## Taxonomie et réglages {#taxonomy-and-settings}

Chaque entrée de `/taxonomy` a un `code` constant, un `title` et une `description` dans la langue de l'interface, un `kind` (`category`, `tag` ou `red_flag`) et, pour les signaux, une `severity`. **Faites la correspondance sur `code`, jamais sur `title`** : les titres sont dans la langue réglée sur le téléphone. Une entrée avec `retired: true` est conservée pour que les anciens appels se résolvent encore ; elle n'est plus attribuée aux nouveaux appels. Chargez la taxonomie une fois au démarrage pour faire correspondre les mots du téléphone à vos propres champs.

`/settings` renvoie la configuration sauf les secrets : appareils audio et volumes, priorité des codecs, apparence et langue, démarrage, raccourcis, niveau de diagnostic et état des deux intégrations — utile pour un outil d'assistance qui doit vérifier un poste de travail sans partage d'écran. `api.disabled` liste les groupes d'accès désactivés et `webhooks.silenced` les événements désactivés ; des listes vides signifient que tout est activé. Il n'inclut jamais le mot de passe SIP, le jeton de l'API ni la valeur d'en-tête du webhook.

## Erreurs {#errors}

Chaque erreur est du JSON avec une seule clé `error`, destinée aux personnes, pas à l'analyse automatique.

| Statut | Corps | Signification |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Le chemin n'existe pas, ou son groupe d'accès est désactivé ; les deux donnent volontairement la même réponse. |
| 404 | `{"error":"no contact with that id"}` | Le chemin est bon, l'identifiant ne l'est pas. |
| 400 | `{"error":"no call with that id"}` | L'appel est terminé, ou n'a jamais existé. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` sans numéro. Rien n'a été composé. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` sans chiffres. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` sans cible. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Le compte de l'appel a été supprimé pendant l'appel ; la cible ne peut donc pas être complétée. Rien n'a été envoyé à l'IPBX. |

Les requêtes refusées sont comptées dans `api_requests_refused_total` ; une intégration qui échoue en silence apparaît donc dans les métriques, pas seulement dans vos propres journaux.

## Métriques {#metrics}

`GET /metrics` renvoie chaque compteur du téléphone, chacun avec un texte d'aide. Collectez-le avec Prometheus ou lisez-le à la main.

| Compteur | Compte |
| --- | --- |
| `calls_incoming_total` | Les appels entrants reçus. |
| `calls_outgoing_total` | Les appels sortants passés. |
| `calls_answered_total` | Les appels décrochés. |
| `calls_missed_total` | Les appels entrants qui n'ont pas été pris. |
| `calls_declined_total` | Les appels refusés ici ou par l'autre côté. |
| `calls_failed_total` | Les appels qui n'ont pas pu être établis. |
| `registrations_succeeded_total` | Les enregistrements SIP réussis. |
| `registrations_failed_total` | Les enregistrements SIP refusés ou expirés. |
| `webhooks_delivered_total` | Les webhooks acceptés par le récepteur. |
| `webhooks_failed_total` | Les webhooks refusés ou non livrés. |
| `webhooks_dropped_total` | Les webhooks abandonnés parce que la file était pleine. |
| `api_requests_total` | Les requêtes traitées par l'API. |
| `api_requests_refused_total` | Les requêtes refusées : mauvais jeton, groupe désactivé ou chemin inconnu. |

## Mettre à jour une ancienne intégration {#updating-an-older-integration}

Les versions précédentes utilisaient des noms en camelCase et des identifiants courts. `accountId` est devenu `account_id`, `startedAt` est devenu `callstart_ts`, `durationSeconds` est devenu `duration_s`, `answeredBy` est devenu `answered_by`, et le champ de webhook `at` est devenu `event_ts`. Les appels et les comptes ne sont identifiés que par UUID : `runtimeId` et les identifiants comme `call-3` ou `account-2` ne sont plus renvoyés ni acceptés.

## Quand ça ne marche pas {#when-it-does-not-work}

| Symptôme | Que vérifier |
| --- | --- |
| Connexion refusée sur `127.0.0.1:8377` | La commande locale est désactivée, le téléphone ne tourne pas, ou le port a été changé. |
| `404 {"error":"no such endpoint"}` pour un chemin de cette page | Son groupe d'accès est désactivé. |
| La lecture fonctionne, l'écriture est refusée | Les points d'accès qui modifient des données stockées ont besoin du jeton dans l'en-tête `Authorization`. |
| Les titres des catégories ne sont pas en anglais | Les titres suivent la langue de l'interface. Faites la correspondance sur `code` de `/taxonomy`. |
| `accountId`, `startedAt` ou `at` manquent | L'intégration a été écrite pour les anciens noms ; voir ci-dessus. |

Pour un problème d'enregistrement SIP ou d'appel lui-même, ouvrez le [Diagnostic](/troubleshooting/diagnostics).
