---
title: Configurer un compte SIP
sidebar_position: 1
description: Relier AI Softphone à votre IPBX ou à votre opérateur SIP dans Réglages → Comptes.
---

AI Softphone fonctionne avec n'importe quel IPBX ou opérateur SIP. Vous pouvez être connecté à autant de comptes (lignes) que vous en avez, et chaque compte a ses propres réglages.

Ouvrez **Réglages → Comptes**.

<Shot name="05_settings_accounts" alt="Réglages → Comptes : deux comptes, tous deux enregistrés" />

## La liste des comptes {#the-list-of-accounts}

Chaque compte est une ligne avec :

- une **case à cocher** qui active ou désactive le compte ;
- un **point** qui est vert quand le compte est enregistré sur l'IPBX ;
- le nom, et en dessous `identifiant@serveur` ;
- un bouton **Déconnecter** qui déconnecte le compte de l'IPBX ;
- les boutons **▲** et **▼** qui montent ou descendent le compte dans la liste. Les pastilles des comptes dans la [fenêtre principale](../interface/main-window.md) suivent le même ordre.

Le bouton **Ajouter** en haut à droite ajoute un compte. Cliquez sur une ligne pour ouvrir son formulaire en dessous.

## Ajouter un compte {#adding-an-account}

<Shot name="05d_account_add" alt="Le formulaire d'un nouveau compte, vide" />

Appuyez sur **Ajouter**. Un formulaire vide s'ouvre sous la liste, avec le curseur dans **Nom (facultatif)**. Remplissez les champs ci-dessous, ouvrez **Réglages du serveur** si l'IPBX en a besoin, et appuyez sur **Enregistrer**. Un nouveau compte commence avec les valeurs habituelles : UDP sur le port 5060, enregistrement renouvelé toutes les 300 secondes.

## Le formulaire du compte {#the-account-form}

<Shot name="05b_account_edit" alt="Le formulaire d'un compte" />

| Champ | Ce qu'il faut saisir |
| --- | --- |
| **Nom (facultatif)** | Le nom affiché sur la pastille du compte dans la fenêtre principale et sur ses appels. S'il est vide, le compte est affiché comme `identifiant@serveur`. |
| **Identifiant** | L'identifiant ou le numéro de poste fourni par votre IPBX ou votre opérateur. |
| **Mot de passe** | Le mot de passe correspondant. Le champ reste vide quand vous revenez au formulaire. Il est conservé dans le trousseau de l'ordinateur, jamais dans un fichier de réglages. |
| **Adresse du serveur** | L'adresse de l'IPBX ou du serveur SIP de l'opérateur, par exemple `pbx.example.com`. |
| **Réglages du serveur** | Déplie les réglages moins courants de la connexion ; voir ci-dessous. |
| **Répondre automatiquement** | Sous **Réponse** : répond aux appels entrants sur ce compte sans que vous appuyiez sur quoi que ce soit. Désactivé par défaut. |

Appuyez sur **Enregistrer** pour conserver les modifications. **Annuler** les abandonne et **Supprimer** retire le compte.

Quand le point à côté du compte est vert, le compte est enregistré, et la pastille du compte dans la fenêtre principale l'indique aussi. S'il reste gris ou rouge, ouvrez le [Diagnostic](../troubleshooting/diagnostics.md) : l'onglet **SIP** montre la requête `REGISTER` et ce que le serveur a répondu.

## Réglages du serveur {#server-settings}

La plupart des IPBX n'ont besoin de rien ici. Appuyez sur **Réglages du serveur** pour les afficher ; le même bouton devient alors **Masquer les réglages du serveur**.

<Shot name="05c_account_server_settings" alt="Les réglages du serveur d'un compte, dépliés" />

| Champ | Par défaut | Ce que c'est |
| --- | --- | --- |
| **Utilisateur d'authentification** | vide | Le nom sous lequel l'IPBX vérifie le mot de passe, s'il diffère de l'**Identifiant**. Sur l'image, le poste est `201` et l'IPBX l'authentifie comme `bureau201`. |
| **Transport** | UDP | Le protocole de la connexion au serveur. Une liste déroulante. |
| **Port** | 5060 | Le port du serveur. |
| **Proxy sortant** | vide | Un proxy par lequel chaque requête doit passer, si votre opérateur en fournit un. |
| **Registrar** | vide | L'adresse où s'enregistrer, si ce n'est pas l'**Adresse du serveur**. |
| **Réenregistrement, secondes** | 300 | La fréquence à laquelle le téléphone renouvelle son enregistrement. |
| **Tonalités du clavier** | Flux audio | La façon dont les tonalités du clavier sont envoyées à l'IPBX. Une liste déroulante. Ne la changez que si l'IPBX n'entend pas les tonalités. |

Les codecs que propose le téléphone ne se règlent pas par compte ; ils se trouvent dans [Réglages des appels](calls.md#audio-formats).
