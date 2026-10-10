---
title: Fenêtre du souffleur
sidebar_position: 3
description: "La fenêtre du souffleur en direct : les mots d'un appel à mesure qu'ils sont dits et des suggestions de ce qu'il faut dire ensuite, ses boutons et ses colonnes, la répétition sur un enregistrement et ce qu'il coûte."
---

Le **Souffleur** écoute une conversation pendant qu'elle a lieu. Dans une fenêtre à lui, il écrit ce que dit chaque côté, à mesure que c'est dit, et — lorsque l'assistant choisi interroge un modèle — une suggestion de ce qu'il faut dire ensuite. Il vaut la peine de l'avoir ouvert pendant un appel de vente, un entretien ou une conversation difficile, et avec un autre assistant la même fenêtre affiche une traduction continue de l'autre côté, ou de simples sous-titres.

<Shot name="46_prompter_running" alt="Le souffleur en répétition sur un appel de vente : la transcription à gauche, les suggestions à droite, la plus récente répétée en grand au-dessus" />

Sur l'image, l'assistant **Objections pendant l'appel** écoute un appel de vente. La colonne de gauche est ce qui a été dit, chaque ligne avec son heure et son côté ; celle de droite est ce que le modèle a suggéré à chaque réponse du client ; la suggestion la plus récente est répétée en gros caractères au-dessus des deux.

**Souffleur** apparaît dans la liste en bas du téléphone, entre **Journal** et **Réglages**, dès que trois conditions sont réunies : le souffleur est autorisé, il existe une reconnaissance capable d'écouter pendant une conversation et — pour les assistants qui suggèrent quelque chose — un modèle de langue. Tout cela se règle dans [Réglages → Souffleur](/ai-processing/prompter), où se trouvent aussi la taille du texte et les assistants eux-mêmes.

## La fenêtre {#the-window}
<Shot name="44_prompter_window" alt="La fenêtre du souffleur avec l'assistant Objections pendant l'appel choisi, avant le démarrage" />

En haut se trouve la liste déroulante **Assistant** et, à sa droite, les boutons :

| Bouton | Ce qu'il fait |
| --- | --- |
| **Démarrer** / **Arrêter** (triangle / carré) | *Écouter cet appel* — ou arrêter : *Ce qui a été dit reste à l'écran*. Un démarrage demandé avant que l'appel soit décroché l'attend, et le bouton l'annule alors. |
| **Suggestion** (étincelles) | *Terminer la réponse ici et suggérer quoi dire*, sans attendre de pause. Pour un assistant qui n'interroge aucun modèle, le bouton s'appelle **Terminer la réponse** : il clôt seulement la réponse, pour que la suivante commence proprement. Il est grisé tant que le souffleur ne tourne pas. |
| **Vider** (corbeille) | Oublie ce qui est à l'écran, après confirmation. *Les deux colonnes disparaissent, ainsi que la conversation à partir de laquelle la prochaine suggestion aurait été construite.* Arrêter puis redémarrer ne vide rien : une conversation arrêtée puis reprise est généralement la même conversation. |
| **Exporter…** (disquette) | Écrit les deux colonnes dans un fichier, avec leurs heures : en texte (`.txt`) ou en tableau (`.csv`), sous le nom que vous donnez au fichier. |
| **Répétition…** (bibliothèque) | [Essaie un assistant sur un enregistrement](#rehearsing-on-a-recording) au lieu d'un appel. |

La liste déroulante présente les [assistants](/ai-processing/prompter#assistants) dans l'ordre fixé sous **Réglages → Souffleur**. Elle ne peut pas être changée pendant qu'un souffleur tourne, mais elle reste visible, pour que vous voyiez quel assistant est au travail. Pendant l'écoute, la carte de l'appel indique **Nous écoutons**.

Sous les boutons se trouve le bandeau avec la ligne la plus récente, et dessous les deux colonnes :

- **Transcription** — chaque ligne avec son heure et son côté ;
- **Suggestions** — chaque suggestion avec l'heure de la réponse à laquelle elle répond. Pour un assistant qui n'interroge aucun modèle, cette colonne n'existe pas et la transcription occupe toute la largeur.

Lorsque la fenêtre est étroite, les deux colonnes se placent l'une au-dessus de l'autre. Une colonne suit ce qui arrive jusqu'à ce que vous y remontiez, et suit de nouveau quand vous revenez en bas. Cliquez sur n'importe quelle ligne pour la garder dans le bandeau ; cliquez sur la plus récente, ou sur l'épingle du bandeau, pour suivre de nouveau. Le clic droit copie une ligne, une suggestion, toute la transcription ou toutes les suggestions. Faites glisser le séparateur sous le bandeau pour l'agrandir ; les tailles du texte se règlent dans [Réglages → Souffleur](/ai-processing/prompter#settings--prompter).

## Répétition sur un enregistrement {#rehearsing-on-a-recording}
Un assistant peut être essayé sans personne au téléphone. **Répétition…** liste les conversations de la [bibliothèque](/interface/recordings), les plus récentes d'abord, et **Un fichier sur cet ordinateur…** pour un fichier `.mp3` ou `.wav`.

<Shot name="45_prompter_rehearse" alt="Répétition… : les conversations de la bibliothèque et un fichier sur cet ordinateur" />

L'enregistrement choisi apparaît dans un lecteur sous les boutons : lecture et pause, les deux canaux dessinés en forme d'onde où vous pouvez cliquer, et l'heure. Appuyez sur **Démarrer** : l'enregistrement est joué dans le souffleur par le même chemin qu'un appel, à sa propre vitesse — la lecture accélérée n'est volontairement pas proposée, car un souffleur alimenté à une fois et demie ferait des pauses, répondrait et facturerait sur une conversation que personne n'a eue. La croix à droite est **Terminer la répétition**, retour à l'écoute des appels.

Un enregistrement sur un seul canal, comme un fichier importé, est entendu comme une seule pièce : *le souffleur entend tout comme l'interlocuteur*.

## Ce qu'il coûte, et où vont les mots {#what-it-costs-and-where-the-words-go}
- La reconnaissance est facturée à la minute d'audio en direct, et **Reconnaître aussi mon côté** double ce montant. Un modèle est facturé à chaque suggestion. Les deux sont comptés sur les [plafonds mensuels](/ai-processing/prompter#spending) du souffleur, pas sur les limites du Traitement.
- La voix de l'autre côté quitte l'ordinateur à mesure qu'elle parle, vers la reconnaissance que vous avez choisie. Une reconnaissance sur votre propre machine — **Vosk**, **WhisperLive** ou **NVIDIA Riva** — la garde dans vos murs.
- Ce que montre le souffleur n'est pas un enregistrement. Pour le garder, appuyez sur **Exporter…** ; pour avoir la conversation elle-même, [enregistrez l'appel](/recordings) en plus.

## Quand il ne démarre pas {#when-it-does-not-start}
La fenêtre dit ce qui manque dans une ligne sous les boutons.

| La fenêtre dit | Que faire |
| --- | --- |
| *Le soufflage est désactivé. Réglages → Souffleur.* | Cochez **Autoriser l'usage du souffleur**. |
| *Aucune reconnaissance ici ne sait écouter pendant que quelqu'un parle. Réglages → Transcription.* | Ajoutez une reconnaissance avec une **Adresse pour le souffleur** et appuyez sur **Tester**. |
| *Il n'y a rien à lancer. Réglages → Souffleur, et ajoutez un assistant.* | Tous les assistants ont été supprimés ou désactivés : ajoutez-en un, ou appuyez sur **Rétablir les valeurs par défaut**. |
| *L'autre partie doit être prévenue d'abord. Enregistrez cette conversation, ou modifiez ce que Réglages → Enregistrement dit du consentement.* | Lancez l'enregistrement, qui joue l'annonce, ou modifiez le réglage du consentement. |
| *La reconnaissance n'a pas commencé à écouter. Vérifiez son adresse en direct et son modèle sous Réglages → Transcription.* | L'adresse pour le souffleur, le modèle ou la clé est faux. **Tester** sur la carte de la reconnaissance dit lequel. |
| *Le budget mensuel des reconnaissances est épuisé.* | Augmentez **Reconnaissances, par mois**, ou attendez le changement de mois. |
| *Le budget mensuel des modèles est épuisé. Les mots continuent ; le soufflage s'est arrêté.* | Augmentez **Modèles, par mois**. |
