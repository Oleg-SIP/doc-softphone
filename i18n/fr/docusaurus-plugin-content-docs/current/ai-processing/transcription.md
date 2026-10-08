---
title: Transcription
sidebar_position: 1
description: "\"Choisir la reconnaissance qui transforme l'audio en texte : son adresse, son modèle, et un tableau des modèles que propose chaque service.\""
---

**Réglages → Transcription** définit comment l'audio devient du texte : dans quelle langue, et par quelle reconnaissance.

<Shot name="25_transcription" alt="Réglages → Transcription : la langue et quatre reconnaissances" />

Une conversation est transcrite quand vous le demandez dans la [fenêtre des enregistrements](/interface/recordings), ou d'elle-même si **Traiter les conversations automatiquement** est activé dans [Traitement](/ai-processing/processing). Une reconnaissance sur votre propre machine ne coûte rien à faire tourner ; une reconnaissance dans le cloud facture à la minute d'audio.

## Langue {#language}

**Langue** est un code de langue à deux lettres selon la norme ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Laissez-le vide et la reconnaissance décide — c'est le bon choix, sauf si vos appels sont dans une langue qu'elle comprend souvent mal.

## Reconnaissances {#recognisers}

Une reconnaissance est un service de transcription de la parole auquel le téléphone envoie l'audio. Appuyez sur **Ajouter** pour en ajouter une ; le bouton **Tester** du formulaire vérifie que le service répond réellement. Chacune est listée avec son nom et, en dessous, le modèle et l'adresse de son service. Sur l'image, il y en a quatre :

| Nom | Modèle | Adresse |
| --- | --- | --- |
| **X.ai** | *(vide : le modèle par défaut du service)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Celle qui est marquée **par défaut** à droite de sa ligne (**X.ai** sur l'image) est celle qui est utilisée quand vous n'en choisissez pas une autre. Vous pouvez en garder plusieurs. La liste déroulante au-dessus d'une transcription dans la [fenêtre des enregistrements](/interface/recordings#transcript-or-write-up-the-drop-down) liste les transcriptions faites par chaque reconnaissance.

Le modèle peut rester vide. Le service utilise alors son propre modèle par défaut.

## Quel modèle choisir {#which-model-to-choose}

Le tableau liste les modèles de transcription des quatre services de l'image. Les modèles en **gras** sont ceux qui sont configurés sur l'image. Pour la reconnaissance X.ai, le modèle est vide ; c'est donc le modèle par défaut du service, **`grok-voice-transcribe-2.0`**, qui est utilisé.

| Service et adresse | Modèle | À quoi il sert |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Le modèle qu'OpenAI recommande pour la parole enregistrée dans sa langue d'origine. |
| | **`gpt-4o-transcribe`** | Transcription généraliste. |
| | `gpt-4o-mini-transcribe` | Une variante plus légère et moins chère du précédent. |
| | `gpt-4o-transcribe-diarize` | Indique qui parle quand. Ne l'utilisez que si vous en avez besoin. |
| | `whisper-1` | L'ancien modèle Whisper, conservé pour des usages particuliers comme l'horodatage des mots et les sous-titres. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transcription généraliste dans plus de 90 langues, avec séparation des interlocuteurs. |
| | `scribe_v2_medical` | Le même, adapté à l'audio clinique. |
| | `scribe_v1` | La première génération ; obsolète, utilisez `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Le meilleur modèle généraliste de Deepgram, pour les réunions, l'audio bruyant et multilingue. |
| | **`nova-2`** | La génération précédente ; gardez-la pour les langues que `nova-3` ne prend pas encore en charge. |
| | `enhanced` | Un ancien niveau avec un taux d'erreur plus faible que `base`. |
| | `base` | Le niveau le plus ancien, pour les gros volumes. |
| | `whisper` | Whisper, exécuté par Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Le modèle par défaut ; 25 langues. |
| | `grok-voice-transcribe-1.0` | Obsolète : le service le redirige vers `2.0`. |

Ce qu'il est bon de savoir avant de choisir :

- **Taille des fichiers.** OpenAI accepte des fichiers jusqu'à 25 Mo ; X.ai jusqu'à 500 Mo. Une longue conversation peut dépasser ce qu'accepte un service cloud.
- **Prix.** Les services cloud facturent à la minute d'audio, et les tarifs diffèrent selon le modèle et changent ; consultez-les sur la page du service avant de changer.
- **Langues.** Chaque service a sa propre liste ; vérifiez la vôtre, et indiquez le code de [Langue](#language) si la reconnaissance se trompe.
- **Les modèles temps réel** comme `scribe_v2_realtime` ou `flux` de Deepgram sont faits pour les flux en direct et ne figurent pas dans le tableau : le téléphone transcrit des enregistrements terminés.

La liste des modèles d'un service change souvent. Si un modèle que vous voulez manque ici, la documentation du service donne la liste actuelle — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — le **Modèle** est le nom exactement tel que le service le donne.

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
