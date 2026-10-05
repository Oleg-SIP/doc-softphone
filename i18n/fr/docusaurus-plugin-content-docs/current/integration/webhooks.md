---
title: Webhooks
sidebar_position: 1
description: "\"Faire envoyer par le téléphone une requête à votre CRM ou à un autre système quand un appel commence, change ou se termine — avec les requêtes exactes d'un appel entrant et d'un appel sortant.\""
---

Un webhook est une requête que le téléphone envoie à l'adresse de votre choix chaque fois qu'il arrive quelque chose à un appel. C'est ainsi qu'un CRM peut ouvrir la fiche du client avant la deuxième sonnerie, consigner un appel quand il se termine, ou allumer un voyant sur un tableau mural. Un webhook ne demande aucune règle de pare-feu entrante : c'est le téléphone qui vous appelle. Comme les requêtes partent du poste de travail, l'adresse doit seulement être joignable depuis cet ordinateur — une adresse interne `http://crm.local/calls` fonctionne aussi bien qu'une adresse HTTPS publique.

Les webhooks sont **désactivés** après l'installation, jusqu'à ce que vous les activiez. Ils fonctionnent aux côtés de l'[API REST locale](/integration/rest-api) : un événement dit que quelque chose a changé, l'API donne les détails actuels.

## Les activer {#turning-them-on}

Ouvrez **Réglages → Intégration**. **Webhooks** est la première section de l'onglet.

<Shot name="24_webhooks" alt="Réglages → Intégration → Webhooks, avec https://crm.local/calls comme adresse" />

1. Cochez **Informer un autre système des appels**. *Une requête est envoyée pour chaque événement coché ci-dessous.*
2. Saisissez l'**Adresse** qui doit recevoir les événements, par exemple `https://crm.local/calls`.
3. Choisissez la **Méthode** : **POST** (par défaut) ou **GET**.
4. Sous **Événements**, cochez ce qu'il faut envoyer : **Un nouvel appel**, **Un appel qui se termine**, **Un appel qui change d'état**.
5. Facultativement, sous **Autorisation**, définissez un en-tête que votre récepteur pourra vérifier : un **Nom d'en-tête** (`Authorization` est proposé) et une **Valeur d'en-tête**. La valeur est conservée dans le trousseau de l'ordinateur, jamais dans un fichier de réglages ; une fois enregistrée, le champ affiche *Enregistré — tapez pour le remplacer*.
6. Appuyez sur **Envoyer un événement de test** pour vérifier qu'il arrive. Cela envoie un événement pour un appel qui n'a jamais eu lieu, avec les mêmes en-têtes qu'un vrai. Consignez la requête brute et construisez votre récepteur d'après ce que votre version envoie réellement.

La partie du programme qui envoie les requêtes est le module **Intégration** ; il peut être désactivé dans [Modules](/application/modules).

## Les événements {#the-events}

| Coché comme | Événement | Envoyé quand |
| --- | --- | --- |
| **Un nouvel appel** | `call-started` | Un appel entrant commence à sonner ou un appel sortant est passé. |
| **Un appel qui change d'état** | `call-state-changed` | Le `state` de l'appel change : il est décroché, mis en attente ou repris par l'un ou l'autre côté, ou il rejoint ou quitte une conférence. Couper le micro ne l'envoie pas. |
| **Un appel qui se termine** | `call-ended` | L'appel s'est terminé. |

Chaque événement peut être coché seul. Une fiche qui s'ouvre à l'appel n'a besoin que du premier ; un journal des appels, du dernier seulement. `call-started` est envoyé en premier et doit être traité rapidement.

## À quoi ressemble la requête {#what-the-request-looks-like}

Avec l'adresse `https://crm.local/calls` et la méthode **POST**, le téléphone envoie ceci. Le corps est en JSON, et l'en-tête est celui que vous avez défini sous **Autorisation** :

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

Le `User-Agent` porte la version du programme et la façon dont il a été installé.

## Un appel entrant, événement par événement {#an-incoming-call-event-by-event}

Un appel du poste `1020` vers le compte `1002` sonne, est décroché, et la personne qui a répondu raccroche quatre secondes plus tard. Avec les trois événements cochés, le récepteur reçoit trois requêtes, l'une après l'autre. Elles portent toutes le même `id` et le même `seance_id`.

### 1. Ça sonne : `call-started` {#1-it-rings-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021263333",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791021263333",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

C'est le moment de chercher l'appelant par `number` et d'afficher la fiche du client. `state` vaut `ringing-in` et `duration_s` vaut `0`.

### 2. L'appel est décroché : `call-state-changed` {#2-it-is-answered-call-state-changed}

Environ trois secondes plus tard :

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021266126",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791021266131",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` vaut maintenant `active`, et `callstate_ts` est passé au moment du changement, tandis que `callstart_ts` reste où il était.

### 3. L'appel se termine : `call-ended` {#3-it-ends-call-ended}

Quatre secondes de conversation plus tard :

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021270400",
  "dialed": "",
  "direction": "in",
  "duration_s": "4",
  "event": "call-ended",
  "event_ts": "1791021270406",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` vaut `ended`, `duration_s` est la durée de la conversation, et `reason` dit qui y a mis fin : ici `local-hangup`, parce que la personne à ce téléphone a raccroché.

## Un appel sortant, événement par événement {#an-outgoing-call-event-by-event}

Le même poste est appelé depuis le compte `1002` : la personne compose `1020`, le téléphone sonne, l'autre côté décroche, parle sept secondes et raccroche. Le récepteur reçoit quatre requêtes, une de plus que pour un appel entrant, parce qu'un appel sortant a un état propre pendant qu'il sonne à l'autre bout.

### 1. Le numéro est composé : `call-started` {#1-it-is-dialled-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791023883072",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "dialing",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`direction` vaut `out`, `state` vaut `dialing`, et `dialed` contient le numéro tel qu'il a été composé. Le téléphone ne connaît pas encore le nom du correspondant ; `name` est donc vide.

### 2. Ça sonne à l'autre bout : `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Une demi-seconde plus tard :

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883591",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023883591",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ringing-out",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`state` vaut `ringing-out`.

### 3. L'autre côté décroche : `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Quatre secondes après :

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023887072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023887076",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` vaut `active`. Le `name` est maintenant rempli, et l'`uri` est l'adresse du correspondant telle que la réponse l'a indiquée. `duration_s` vaut toujours `0` : la durée se compte à partir de ce moment.

### 4. L'appel se termine : `call-ended` {#4-it-ends-call-ended}

Sept secondes plus tard, l'autre côté raccroche :

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023894781",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "7",
  "event": "call-ended",
  "event_ts": "1791023894789",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`duration_s` vaut `7`, et `reason` vaut `remote-hangup`, parce que c'est l'autre côté qui a mis fin à l'appel. Quand vous raccrochez vous-même, c'est `local-hangup`, comme dans l'appel entrant ci-dessus.

### Les états, côte à côte {#the-states-side-by-side}

| | Appel entrant | Appel sortant |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, puis `active` |
| `call-ended` | `ended` | `ended` |

## Les champs {#the-fields}

**Chaque valeur est une chaîne**, nombres et horodatages compris : `"duration_s": "42"`. Un moment inconnu est une chaîne vide. Les noms suivent une convention : `_id` est un identifiant, `_ts` est un temps Unix en millisecondes (UTC), `_s` est une durée en secondes — comme dans l'API REST, où les valeurs sont des nombres JSON.

| Champ | Signification |
| --- | --- |
| `event` | `call-started`, `call-state-changed` ou `call-ended`. |
| `id` | L'appel : le même UUID que dans `GET /calls` et `/calls/{id}/…`, et le même dans chaque événement de l'appel. |
| `seance_id` | La conversation à laquelle appartient l'appel ; voir [ci-dessous](#one-conversation-across-transfers). |
| `direction` | `in` ou `out`. |
| `state` | Les mêmes valeurs que dans `GET /calls` : `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (mis en attente par ce téléphone), `onhold` (mis en attente par le correspondant), `conference` ou `ended`. |
| `number` | Le numéro du correspondant. Faites correspondre vos fiches CRM sur ce champ. |
| `name` | Le nom du correspondant, d'après les Contacts ; il peut être vide, et être rempli plus tard dans l'appel, comme dans l'appel sortant ci-dessus. |
| `uri` | L'adresse SIP du correspondant. |
| `dialed` | Les chiffres composés, pour un appel sortant ; vide pour un appel entrant. |
| `account`, `account_id` | La ligne sur laquelle passe l'appel : `username@server`, et l'identifiant de `GET /accounts`. |
| `event_ts` | Quand l'événement s'est produit. |
| `callstart_ts` | Quand le téléphone a eu connaissance de l'appel pour la première fois. |
| `callstate_ts` | Quand l'appel est entré dans son `state` actuel. |
| `duration_s` | Temps de conversation en secondes, du décroché au raccroché. Défini sur `call-ended` pour un appel décroché ; `0` sinon. |
| `reason` | Comment l'appel s'est terminé : `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`… ; `none` jusque-là. |
| `answered_by` | `no` si une personne a répondu à l'appel ; sinon ce qui y a répondu. |

## Une conversation à travers les transferts {#one-conversation-across-transfers}

`seance_id` regroupe les appels qui forment une même conversation. Un appel passé ou reçu de zéro en commence une nouvelle. Un appel créé par un transfert, un appel qui en remplace un autre, une consultation à propos d'un appel et chaque appel réuni dans une conférence gardent le `seance_id` de l'appel dont ils sont issus.

Entre téléphones, il voyage dans l'en-tête SIP `X-Seance-Id` : quand un appel est transféré à un collègue qui utilise aussi AI Softphone, et que l'IPBX transmet l'en-tête, les deux postes de travail rapportent le même `seance_id`.

## GET au lieu de POST {#get-instead-of-post}

**GET** est destiné aux récepteurs qui ne peuvent pas prendre de corps de requête, comme un CRM ancien ou un script passerelle. Les mêmes champs sont alors envoyés comme paramètres de requête.

Avec **GET**, l'adresse peut être un modèle : chaque `[champ]` est remplacé par la valeur de ce champ, encodée en pourcentage. Par exemple :

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Les espaces réservés utilisent les noms de champs ci-dessus. Les modèles enregistrés avec les anciens noms (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) continuent de fonctionner.

## Comment les événements sont livrés {#how-the-events-are-delivered}

| Comportement | Ce que cela signifie pour vous |
| --- | --- |
| Les événements sont mis en file, pas envoyés depuis l'appel lui-même | Un récepteur lent ne retarde jamais la sonnerie, les appels ni les transferts. |
| Une file pleine abandonne des événements | Si votre récepteur cesse de répondre, des événements sont perdus mais le téléphone continue de fonctionner. Surveillez `webhooks_dropped_total`. |
| Les livraisons refusées et impossibles sont comptées | `webhooks_failed_total` qui augmente alors que `webhooks_delivered_total` reste immobile désigne le récepteur. |
| Les événements arrivent dans l'ordre | Appel commencé, puis changements d'état, puis appel terminé. Pour ordonner des événements stockés, utilisez `callstate_ts`, pas l'heure à laquelle ils sont arrivés. |
| Au moins une fois | Le même événement peut arriver deux fois. `id`, `event` et `callstate_ts` ensemble identifient un événement : faites en sorte que votre gestionnaire ignore celui qu'il a déjà vu. |

## Recevoir les événements {#receiving-the-events}

La seule règle pour un récepteur : **répondre `200` tout de suite, et faire le travail ensuite.** Un récepteur lent ne ralentit pas le téléphone, mais il remplit la file, et une file pleine abandonne des événements.

Par exemple, en Node.js avec Express :

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // the Header value from Settings

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST sends a JSON body, GET sends query parameters
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // answer first

  setImmediate(() => {                          // then do the work
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // your code
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // your code
    }
  });
});

app.listen(8080);
```

Pour consigner l'issue d'un appel — décroché, manqué, refusé — prenez l'entrée qui a le même `seance_id` et le même `number` dans `GET /history?limit=20` de l'[API REST](/integration/rest-api#call-history-get-history). Quand votre service redémarre après une pause, lisez `GET /history?limit=200` et stockez ce que vous avez manqué : les webhooks pour le temps réel, le journal pour combler les trous.

Pour voir les requêtes avant que le CRM soit prêt, faites pointer l'**Adresse** vers un inspecteur de requêtes en ligne et appuyez sur **Envoyer un événement de test**.

## Quand rien n'arrive {#when-nothing-arrives}

| Symptôme | Que vérifier |
| --- | --- |
| Aucun webhook du tout | Appuyez sur **Envoyer un événement de test**. S'il arrive, les événements dont vous avez besoin ne sont pas cochés ; sinon, l'adresse est fausse ou injoignable depuis le poste de travail. |
| `webhooks_failed_total` ne cesse d'augmenter | Le récepteur refuse les requêtes ou ne peut pas être joint. Vérifiez son journal, et s'il répond à une requête simple depuis le poste de travail. |
| `webhooks_dropped_total` est supérieur à zéro | Le récepteur a été trop lent trop longtemps et la file s'est remplie. Répondez d'abord `200`, puis traitez. |
| Le même événement deux fois | Attendu avec une livraison au moins une fois. Traitez les événements ayant les mêmes `id`, `event` et `callstate_ts` comme un seul. |
