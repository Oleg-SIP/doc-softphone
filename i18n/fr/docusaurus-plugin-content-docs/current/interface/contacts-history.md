---
title: Contacts et journal
sidebar_position: 4
description: "Le carnet d'adresses et le journal des appels, à côté du téléphone."
---

**Contacts** et **Journal** s'ouvrent comme deux onglets à droite du téléphone, pour que vous puissiez chercher un numéro tout en parlant.

## Contacts {#contacts}

<Shot name="03_contacts" alt="L'onglet Contacts" />

- **Rechercher** filtre la liste au fil de la frappe.
- **Ajouter** crée un contact.
- Chaque contact est listé avec un nom et, en dessous, le numéro et le compte par lequel on l'appelle, par exemple *231 · 201 Bureau*.

Un appel entrant d'un numéro connu affiche le nom du contact, tout comme les listes des appels récents et du journal des appels — c'est ainsi que fonctionne l'identification de l'appelant.

### Modifier un contact {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Un contact ouvert pour modification" />

Sélectionnez un contact pour afficher un crayon et un combiné à droite de sa ligne. Le combiné appelle le contact ; le crayon ouvre le formulaire sous la ligne :

| Champ | Ce qu'il faut saisir |
| --- | --- |
| **Nom** | La façon dont le contact est affiché. |
| **Numéro** | Le numéro à composer. |
| Liste déroulante sous **Numéro** | Le compte par lequel on appelle le contact. |

**Enregistrer** conserve les modifications, **Annuler** les abandonne et **Supprimer** retire le contact.

## Journal {#history}

<Shot name="21_history" alt="L'onglet Journal" />

Le journal des appels, le plus récent en premier. En haut :

- la liste déroulante, **Tous les appels** par défaut, restreint la liste à un type d'appel ;
- **Rechercher** filtre selon ce que vous tapez.

Chaque entrée a une icône pour le type d'appel — un combiné sortant, ou un combiné rouge avec une horloge pour un appel manqué —, le nom du correspondant (ou le numéro), et en dessous la date, l'issue de l'appel, sa durée, le numéro et le compte. Les appels récents sont affichés comme *Hier, 22:33* ou par un jour de la semaine, les plus anciens avec la date.

| Issue de l'appel | Affiché comme |
| --- | --- |
| Vous avez parlé | **sortant** ou entrant, et la durée, par exemple *48 s* |
| Un appel entrant n'a pas été pris | **Manqué** |
| Un appel que vous avez passé n'a pas été établi | **N'a pas abouti** |

Sélectionnez une entrée pour afficher quatre boutons à sa droite :

| Bouton | Action |
| --- | --- |
| Personne avec un plus | Ajoute le numéro aux [Contacts](#contacts). |
| ▶ | Lit l'enregistrement de l'appel, s'il a été enregistré. |
| Corbeille | Supprime l'entrée. |
| Combiné | Rappelle le numéro. |

### Combien de temps le journal est conservé {#how-long-the-log-is-kept}

Un journal des appels est une preuve : rien n'en est retiré sans que vous le demandiez, et par défaut chaque appel est conservé. La durée de conservation et le bouton **Vider le journal des appels** se trouvent dans [Réglages des appels](../sip-accounts/calls.md#history).

Les appels manqués et refusés peuvent aussi être lus via l'[API REST locale](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
