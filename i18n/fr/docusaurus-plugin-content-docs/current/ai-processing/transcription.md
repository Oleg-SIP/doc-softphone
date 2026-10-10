---
title: Transcription
sidebar_position: 1
description: "Choisir la reconnaissance qui transforme le son en texte : son adresse, son modèle et un tableau des modèles de tous les types de services."
---

**Réglages → Transcription** liste les reconnaissances : les services qui transforment le son en texte, pour les conversations terminées et, pour le [souffleur](../interface/prompter.md), pendant qu'une conversation a lieu.

<Shot name="25_transcription" alt="Réglages → Transcription : cinq reconnaissances" />

Une conversation est transcrite quand vous le demandez dans la [fenêtre des enregistrements](/interface/recordings), ou d'elle-même si **Traiter les conversations automatiquement** est activé dans [Traitement](/ai-processing/processing). Une reconnaissance sur votre propre machine ne coûte rien à faire tourner ; une reconnaissance dans le cloud facture à la minute de son.

## Reconnaissances {#recognisers}
Une reconnaissance est un service de reconnaissance vocale auquel le téléphone envoie le son. **Ajouter** en ajoute une ; le bouton **Tester** de sa fiche vérifie que le service répond vraiment. Chacune figure dans la liste avec son nom et, en dessous, le modèle et l'adresse de son service. Sur l'image, il y en a cinq :

| Nom | Modèle | Adresse |
| --- | --- | --- |
| **X.ai** | *(vide : le modèle par défaut du service)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(aucun)* | `ws://localhost:2700`, un serveur sur cet ordinateur |

Les deux marques à droite d'une ligne disent pour quoi la reconnaissance est celle par défaut. L'horloge est allumée sur celle par défaut **pour les transcriptions** — **X.ai** sur l'image —, utilisée quand vous n'en choisissez pas une autre. L'éclair est allumé sur celle par défaut **pour le souffleur** — **Vosk** sur l'image. Vous pouvez garder plusieurs reconnaissances ; la liste déroulante au-dessus d'une transcription dans la [fenêtre des enregistrements](/interface/recordings#transcript-or-write-up-the-drop-down) liste les transcriptions faites par chacune.

## La fiche d'une reconnaissance {#the-recognisers-card}
Un clic sur une reconnaissance ouvre sa fiche.

<Shot name="43_recogniser_card" alt="La fiche de la reconnaissance X.ai : type, les deux adresses, clé, Tester et les choix par défaut" />

| Champ | Ce que c'est |
| --- | --- |
| **Nom** | Le nom dans les listes. |
| **Type** | Le type de service, qui décide comment le téléphone lui parle : **Compatible OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics**, et trois qui tournent sur votre propre machine — **Vosk**, **WhisperLive** et **NVIDIA Riva**. **Yandex SpeechKit** est proposé lorsque le pays choisi dans [À propos](../application/about.md) est la Russie ou l'un de ses voisins. |
| **Adresse pour les transcriptions** | Où sont envoyées les conversations terminées. |
| **Adresse pour le souffleur** | Où part le son en direct pendant qu'une conversation a lieu. *Vide : déduit de l'adresse voisine*, comme `wss://api.x.ai` sur l'image. |
| **Clé** | La clé du service. *Cela est gardé dans le trousseau de cet ordinateur, jamais dans un fichier de réglages.* |
| **Tester** | Interroge le service et dit ce qu'il a répondu, par exemple *A répondu, et propose 3 modèles*. |
| **Modèle pour les transcriptions** et **Modèle pour le souffleur** | Le modèle, exactement comme le service le nomme. *Vide : aucun nom de modèle n'est envoyé*, et le service prend son propre modèle par défaut ; quand le fournisseur en publie un, la fiche le nomme. Le champ n'est pas affiché pour un type qui n'offre pas de choix. |
| **Par défaut pour les transcriptions** | En fait la reconnaissance utilisée quand vous n'en choisissez pas une autre. |
| **Par défaut pour le souffleur** | En fait la reconnaissance avec laquelle écoute un nouvel assistant du souffleur. |
| **Activé** | Désactivée, la reconnaissance reste dans la liste et n'est pas utilisée. |

**Réglages avancés** ouvre le reste de la fiche. Les valeurs qui comptent le plus :

<Shot name="43b_recogniser_advanced" alt="Les réglages avancés d'une reconnaissance : limites, découpage des réponses, langue" />

| Champ | Ce qu'il fait |
| --- | --- |
| **Région** | La région du service, pour un service qui en a plusieurs. |
| **Envoyer les deux côtés séparément** | Un appel est enregistré avec les deux personnes sur deux canaux, et c'est ce qui dit à la reconnaissance qui a dit quoi. Désactivez-le pour un serveur qui prétend en être capable et ne l'est pas. |
| **Demander qui parle** | Distingue les personnes à l'intérieur d'un canal, quand plusieurs y parlent. |
| **Écrire les nombres en chiffres** | Les sommes, les dates et les numéros de téléphone reviennent tels qu'on les écrit plutôt qu'en toutes lettres. |
| **Limite d'envoi**, **Limite de durée** | Le plus gros fichier, en octets, et le plus long enregistrement, en secondes, que ce téléphone enverra. |
| **Requêtes simultanées** | Combien de requêtes peuvent être en cours en même temps. |
| **Terminer une réponse après**, **Regrouper les réponses courtes sous**, **Silence entre tours** | Pour le souffleur : combien de temps sans nouveaux mots termine une réponse, combien de temps une réponse courte attend la suivante pour lui être jointe, et combien de temps de silence termine un tour de parole là où la reconnaissance n'en marque pas. En millisecondes. |
| **Langue** | Un code de langue à deux lettres selon la norme ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Laissez-le vide et la reconnaissance décide — c'est le bon choix, sauf si vos appels sont dans une langue qu'elle comprend souvent mal. |
| **Suppléments** | Un `name = value` par ligne, transmis tel quel au service. Laissez vide, sauf si le serveur documente quelque chose. |
| **Attente, minutes** | Combien de temps attendre une transcription. Vide la calcule d'après la durée de l'enregistrement. |
| **Prix à la minute** | Ce que coûte une minute de son en direct, d'après la grille tarifaire du service. Le souffleur montre ce qu'une séance a coûté et s'arrête à son [plafond mensuel](prompter.md#spending). |

## Reconnaissance en direct pour le souffleur {#live-recognition-for-the-prompter}
Le [souffleur](../interface/prompter.md) a besoin d'une reconnaissance qui écoute pendant que quelqu'un parle, par un flux plutôt qu'avec un fichier terminé. Ces types en sont capables : **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Compatible OpenAI** (avec la transcription en temps réel d'OpenAI), **AssemblyAI**, **Soniox** et **Speechmatics** dans le cloud, **Yandex SpeechKit** là où il est proposé, et **Vosk**, **WhisperLive** et **NVIDIA Riva** sur votre propre machine. Une reconnaissance sur votre propre machine garde la voix de l'interlocuteur dans vos murs et ne facture rien.

Pour en utiliser une : ouvrez sa fiche, vérifiez l'**Adresse pour le souffleur** (ou laissez-la se déduire), choisissez le **Modèle pour le souffleur** si le service en propose plusieurs — les modèles en direct sont souvent différents de ceux pour les fichiers, comme `scribe_v2_realtime` chez ElevenLabs — et appuyez sur **Tester**. Cochez **Par défaut pour le souffleur** pour que les nouveaux assistants écoutent avec elle.

## Quel modèle choisir {#which-model-to-choose}
Le tableau liste les modèles de reconnaissance vocale de chaque type de la liste **Type**. Les modèles en **gras** sont ceux configurés sur l'image ; pour la reconnaissance X.ai le modèle est vide, c'est donc le modèle par défaut du service, **`grok-voice-transcribe-2.0`**, qui est utilisé. **Pour** dit à quoi sert un modèle : aux enregistrements terminés (*transcriptions*), à la parole en direct pour le [souffleur](#live-recognition-for-the-prompter) (*souffleur*), ou aux *deux*.

| Type et adresse | Modèle | Pour | À quoi il sert |
| --- | --- | --- | --- |
| **Compatible OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transcriptions | Le modèle qu'OpenAI recommande pour la parole enregistrée dans sa langue d'origine. |
| | **`gpt-4o-transcribe`** | les deux | Transcription généraliste. Une nouvelle reconnaissance de ce type le reçoit. |
| | `gpt-4o-mini-transcribe` | les deux | Une variante plus légère et moins chère du précédent. |
| | `gpt-4o-transcribe-diarize` | transcriptions | Indique qui parle quand. Ne le prenez que si vous en avez besoin. |
| | `whisper-1` | transcriptions | L'ancien modèle Whisper, gardé pour des usages particuliers comme les horodatages par mot et les sous-titres. |
| | `gpt-live-transcribe` | souffleur | Le modèle en direct d'OpenAI : les mots arrivent à mesure qu'ils sont prononcés. Le téléphone le propose pour le souffleur. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | les deux | Le meilleur modèle généraliste de Deepgram, pour les réunions, le son bruyant et multilingue. Une nouvelle reconnaissance de ce type le reçoit. |
| | **`nova-2`** | les deux | La génération précédente ; gardez-la pour les langues que `nova-3` ne prend pas encore en charge. |
| | `nova-2-phonecall` | les deux | `nova-2` réglé pour le son étroit d'une ligne téléphonique. Anglais. |
| | `flux-general-en` | souffleur | Fait pour la conversation : il entend quand quelqu'un a fini de parler. Anglais. |
| | `flux-general-multi` | souffleur | La même chose en dix langues, et une conversation peut passer de l'une à l'autre. |
| | `enhanced`, `base` | transcriptions | Des niveaux plus anciens ; `base` est fait pour les gros volumes. |
| | `whisper` | transcriptions | Whisper, exécuté par Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transcriptions | Transcription généraliste dans plus de 90 langues, avec séparation des locuteurs. |
| | `scribe_v2_realtime` | souffleur | La version en direct de `scribe_v2`. Le téléphone la propose pour le souffleur. |
| | `scribe_v2_medical` | transcriptions | `scribe_v2` réglé pour le son clinique. |
| | `scribe_v1` | transcriptions | La première génération ; obsolète, utilisez `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | les deux | Le plus précis, pour une conversation dans une seule langue. Une nouvelle reconnaissance de ce type le reçoit. |
| | `standard` | les deux | Plus rapide et moins cher, un peu moins précis. |
| | `melia-1` | transcriptions | Une conversation en plusieurs langues, qui en change au milieu d'une phrase, revient en une seule transcription. Enregistrements seulement, dans les régions UE et États-Unis ; pas encore de dictionnaire personnalisé ni d'étiquettes de locuteurs. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | les deux | Le modèle par défaut ; 25 langues. |
| | `grok-voice-transcribe-1.0` | transcriptions | Obsolète : le service le renvoie vers `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transcriptions | Plus de 60 langues, avec séparation des locuteurs. |
| | `stt-rt-v5` | souffleur | En direct, dans les mêmes 60 langues et plus, et il entend où finit un tour de parole. Le téléphone le propose pour le souffleur. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | les deux | Le modèle le plus précis pour les enregistrements ; 18 langues, et une conversation peut passer de l'une à l'autre. |
| | `universal-2` | transcriptions | 99 langues, moins cher ; AssemblyAI se rabat sur lui pour une langue que `universal-3-5-pro` ne connaît pas. |
| | `universal-3-6-pro` | souffleur | Le plus récent modèle en direct d'AssemblyAI, 32 langues ; le service le prend quand le modèle est vide. |
| | `universal-streaming-multilingual` | souffleur | Reconnaissance en direct moins chère en anglais, espagnol, allemand, français, portugais et italien. |
| | `universal-streaming-english` | souffleur | Reconnaissance en direct moins chère, en anglais seulement. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | les deux | Le modèle principal, fort en russe, au téléphone aussi. Proposé lorsque le pays est la Russie ou l'un de ses voisins. |
| | `general:rc` | les deux | La prochaine version du modèle avant sa sortie. |
| | `deferred-general` | transcriptions | Reconnaissance différée : la transcription arrive plus tard, pour moins cher. |
| **Vosk (sur votre propre machine)**<br />`ws://localhost:2700` | *(réglé sur le serveur)* | les deux | Gratuit et léger ; tourne sans carte graphique. Le modèle est celui avec lequel le serveur a été lancé, un par langue, par exemple `vosk-model-fr-0.22` ou le petit `vosk-model-small-fr-0.22`. |
| **WhisperLive (sur votre propre machine)**<br />`ws://localhost:9090` | `small` | les deux | Whisper sur un flux en direct. La taille se choisit sur la fiche : `tiny`, `base`, `small` (ce que propose le téléphone), `medium`, `large-v3` ; plus il est grand, plus il est précis, et plus il réclame une carte graphique. |
| **NVIDIA Riva (sur votre propre machine)**<br />`localhost:50051` | *(réglé sur le serveur)* | les deux | Le serveur vocal de NVIDIA, pour un ordinateur doté d'une carte graphique NVIDIA. Il sert des modèles comme Parakeet et Canary. |

Ce qu'il vaut mieux savoir avant de choisir :

- **Transcriptions ou souffleur.** Un modèle fait pour la parole en direct ne prend pas de fichier terminé, et la plupart des modèles pour fichiers ne savent pas écouter en direct. C'est pourquoi une fiche a deux champs, **Modèle pour les transcriptions** et **Modèle pour le souffleur**.
- **Taille des fichiers.** OpenAI accepte des fichiers jusqu'à 25 Mo ; X.ai jusqu'à 500 Mo. Une longue conversation peut dépasser ce qu'un service cloud accepte.
- **Prix.** Les services cloud facturent à la minute de son, et les tarifs varient selon le modèle et changent ; consultez-les sur la page du service avant de changer. Une reconnaissance sur votre propre machine ne coûte rien à faire tourner.
- **Langues.** Chaque service a sa propre liste ; vérifiez la vôtre, et indiquez le code **Langue** dans les réglages avancés de la reconnaissance si elle se trompe.

La liste des modèles d'un service change souvent. S'il vous manque un modèle ici, la documentation du service donne la liste à jour — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — le **Modèle** est le nom exactement tel que le service le donne.

## Vos propres modèles {#your-own-models}

Une reconnaissance n'a pas besoin d'être un service cloud. Le téléphone peut utiliser **n'importe quel modèle servi via l'API compatible OpenAI** — l'interface `POST /v1/audio/transcriptions` —, qu'il tourne localement sur votre ordinateur ou sur un serveur à vous. L'audio ne quitte jamais vos locaux, rien n'est facturé à la minute, et le volume n'a pas de limite.

Pour en ajouter une, appuyez sur **Ajouter** et indiquez :

- l'**adresse** du serveur, jusqu'à `/v1` inclus, par exemple `http://localhost:8000/v1` pour l'ordinateur lui-même ou `http://asr.local:8080/v1` pour un serveur de votre réseau ;
- le nom du **modèle** exactement tel que le serveur le liste, par exemple `openai/whisper-large-v3-turbo`.

### Ce qui peut être utilisé {#what-can-be-used}

Le choix habituel est **Whisper**, le modèle ouvert de reconnaissance vocale d'OpenAI. Il est gratuit, comprend une centaine de langues et existe en plusieurs tailles : un petit modèle tourne sur un ordinateur ordinaire, les grands sont nettement plus précis et gagnent à disposer d'une carte graphique.

| Modèle | Remarques |
| --- | --- |
| `whisper-large-v3` | Le Whisper le plus précis. Pour un serveur avec GPU. |
| `openai/whisper-large-v3-turbo` | Une version plus rapide de `large-v3`, avec une légère perte de précision. |
| `Systran/faster-whisper-large-v3` | `large-v3` converti pour le moteur faster-whisper ; plus rapide et plus économe en mémoire. |
| `medium`, `small`, `base` | Des modèles Whisper plus petits, pour un ordinateur sans carte graphique. |

Whisper est le modèle autour duquel ces serveurs sont construits. Certains peuvent aussi servir d'autres modèles de reconnaissance vocale, comme NVIDIA Parakeet.

### Serveurs qui proposent l'API compatible OpenAI {#servers-that-offer-the-openai-compatible-api}

Le modèle doit être exécuté par un serveur qui propose le point d'accès `/v1/audio/transcriptions` compatible OpenAI. Ceux-ci le font :

| Serveur | Ce que c'est |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Un serveur de modèles haute performance. Sert Whisper à `http://localhost:8000/v1` une fois démarré. |
| [Speaches](https://github.com/speaches-ai/speaches) | Un serveur de modèles vocaux, « l'Ollama de la parole », construit sur faster-whisper. Charge un modèle à la première demande. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Exécute Whisper efficacement sur un processeur, y compris Apple silicon. Son `whisper-server` se lance avec `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Un remplaçant direct d'OpenAI qui exécute les modèles localement. |

Tout autre serveur qui propose le même point d'accès fonctionne de la même façon. Si un serveur demande une clé, saisissez-la comme pour un service cloud.

Avant de compter sur un serveur, faites un enregistrement de test et regardez la transcription dans la [fenêtre des enregistrements](/interface/recordings) : une conversation dans une langue que le modèle connaît mal le montre aussitôt.
