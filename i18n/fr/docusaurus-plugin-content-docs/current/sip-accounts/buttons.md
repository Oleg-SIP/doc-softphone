---
title: Boutons
sidebar_position: 4
description: "\"Boutons BLF : des boutons à une touche qui composent un poste de votre IPBX et montrent s'il est libre, s'il sonne ou s'il est occupé.\""
---

Les boutons sont les touches **BLF** (Busy Lamp Field) du softphone, la même fonction que sur un téléphone de bureau relié à un IPBX. Un bouton compose un poste d'une seule pression. Un bouton qui surveille sa ligne affiche aussi un voyant : le téléphone interroge l'IPBX sur ce poste et montre s'il est libre, s'il sonne ou s'il est occupé, comme le font un pupitre de standardiste ou les touches programmables d'un téléphone de bureau.

Le BLF doit être pris en charge du côté de l'IPBX : l'IPBX doit indiquer au téléphone l'état du poste. La plupart des IPBX le font. Si le vôtre ne le fait pas, le voyant reste gris et le bouton compose quand même.

Les boutons se trouvent sous les pastilles des comptes dans la [fenêtre principale](/interface/main-window), et c'est dans **Réglages → Boutons** que vous les créez.

<Shot name="08_settings_buttons" alt="Réglages → Boutons : deux boutons" />

Chaque ligne est un bouton : le voyant, son libellé, et à droite son numéro et le compte auquel il appartient — par exemple *212 · 201 Bureau*. **▲** et **▼** montent ou descendent le bouton ; les boutons de la fenêtre principale suivent cet ordre. **Ajouter** en crée un nouveau.

## Le voyant {#the-lamp}

Un bouton qui surveille sa ligne affiche un voyant :

| Voyant | La ligne est |
| --- | --- |
| Vert | libre |
| Orange | en train de sonner |
| Rouge | en communication |
| Gris | inconnue : le standard ne le dit pas |

## Ajouter un bouton {#adding-a-button}

<Shot name="08b_button_add" alt="Le formulaire d'un nouveau bouton" />

Appuyez sur **Ajouter** ; un formulaire s'ouvre sous la liste.

| Champ | Ce qu'il faut saisir |
| --- | --- |
| **Numéro** | Le numéro à composer. |
| **Ligne** | Le compte sur lequel l'appel est passé. Choisissez-le en premier : pour afficher le voyant, le téléphone interroge le standard de cette ligne sur ce numéro, il doit donc savoir lequel. |
| **Libellé** | Le texte sur le bouton, par exemple le nom de la personne. Le bouton n'a de place que pour un libellé court ; un libellé plus long est coupé. |
| **Montrer si cette ligne est occupée** | Un interrupteur. Activé, le bouton a un voyant. Désactivé, il ne fait que composer. |

**Enregistrer** reste gris tant que le formulaire n'est pas rempli. **Annuler** abandonne le formulaire.

La partie du programme qui affiche les boutons peut être désactivée dans [Modules](/application/modules).
