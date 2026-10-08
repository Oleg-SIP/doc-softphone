---
title: Transkription
sidebar_position: 1
description: "Den Spracherkenner wählen, der Ton in Text verwandelt: seine Adresse, sein Modell und eine Tabelle der Modelle, die jeder Dienst anbietet."
---

**Einstellungen → Transkription** legt fest, wie aus Ton Text wird: in welcher Sprache und mit welchem Spracherkenner.

<Shot name="25_transcription" alt="Einstellungen → Transkription: die Sprache und vier Spracherkenner" />

Ein Gespräch wird transkribiert, wenn Sie es im [Aufnahmefenster](/interface/recordings) verlangen, oder von selbst, wenn unter [Verarbeitung](/ai-processing/processing) **Gespräche automatisch verarbeiten** eingeschaltet ist. Ein Spracherkenner auf Ihrem eigenen Rechner kostet im Betrieb nichts; einer in der Cloud berechnet jede Minute Ton.

## Sprache {#language}

**Sprache** ist ein zweibuchstabiger Sprachcode nach ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lassen Sie ihn leer, und der Spracherkenner entscheidet — das ist richtig, sofern Ihre Gespräche nicht in einer Sprache geführt werden, die er immer wieder falsch versteht.

## Spracherkenner {#recognisers}

Ein Spracherkenner ist ein Sprache-zu-Text-Dienst, an den das Telefon Ton sendet. Mit **Hinzufügen** fügen Sie einen hinzu; die Taste **Prüfen** im Formular stellt fest, ob der Dienst wirklich antwortet. Jeder steht mit seinem Namen und darunter dem Modell und der Adresse seines Dienstes in der Liste. Im Bild sind es vier:

| Name | Modell | Adresse |
| --- | --- | --- |
| **X.ai** | *(leer: das Standardmodell des Dienstes)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Der mit **Vorgabe** rechts in seiner Zeile markierte (im Bild **X.ai**) wird verwendet, wenn Sie keinen anderen wählen. Sie können mehrere behalten. Die Auswahlliste über einem Transkript im [Aufnahmefenster](/interface/recordings#transcript-or-write-up-the-drop-down) führt die Transkripte der einzelnen Spracherkenner auf.

Das Modell darf leer bleiben. Der Dienst verwendet dann sein eigenes Standardmodell.

## Welches Modell wählen {#which-model-to-choose}

Die Tabelle führt die Sprache-zu-Text-Modelle der vier Dienste aus dem Bild auf. Die **fett** gedruckten Modelle sind die im Bild eingerichteten. Beim Spracherkenner X.ai ist das Modell leer, deshalb wird das Standardmodell des Dienstes verwendet, **`grok-voice-transcribe-2.0`**.

| Dienst und Adresse | Modell | Wofür |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Das von OpenAI empfohlene Modell für aufgenommene Sprache in der Originalsprache. |
| | **`gpt-4o-transcribe`** | Allgemeine Transkription. |
| | `gpt-4o-mini-transcribe` | Eine leichtere, günstigere Variante des vorigen. |
| | `gpt-4o-transcribe-diarize` | Kennzeichnet, wer wann spricht. Nur verwenden, wenn Sie das brauchen. |
| | `whisper-1` | Das ältere Whisper-Modell, für besondere Zwecke wie Wortzeitstempel und Untertitel beibehalten. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Allgemeine Transkription in über 90 Sprachen, mit Sprechertrennung. |
| | `scribe_v2_medical` | Dasselbe, abgestimmt auf klinische Aufnahmen. |
| | `scribe_v1` | Die erste Generation; veraltet, verwenden Sie `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Das beste allgemeine Modell von Deepgram, für Besprechungen, laute und mehrsprachige Aufnahmen. |
| | **`nova-2`** | Die vorige Generation; behalten Sie sie für Sprachen, die `nova-3` noch nicht unterstützt. |
| | `enhanced` | Eine ältere Stufe mit niedrigerer Fehlerquote als `base`. |
| | `base` | Die älteste Stufe, für große Mengen. |
| | `whisper` | Whisper, betrieben von Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Der Standard; 25 Sprachen. |
| | `grok-voice-transcribe-1.0` | Veraltet: Der Dienst leitet ihn auf `2.0` um. |

Gut zu wissen, bevor Sie wählen:

- **Dateigröße.** OpenAI nimmt Dateien bis 25 MB an, X.ai bis 500 MB. Ein langes Gespräch kann größer sein, als ein Cloud-Dienst annimmt.
- **Preis.** Cloud-Dienste berechnen nach Minuten Ton, und die Tarife unterscheiden sich je Modell und ändern sich; lesen Sie sie auf der Seite des Dienstes, bevor Sie wechseln.
- **Sprachen.** Jeder Dienst hat seine eigene Liste; prüfen Sie Ihre und setzen Sie den Code unter [Sprache](#language), wenn der Spracherkenner falsch rät.
- **Echtzeitmodelle** wie `scribe_v2_realtime` oder `flux` von Deepgram sind für Live-Streams gemacht und stehen nicht in der Tabelle: Das Telefon transkribiert fertige Aufnahmen.

Die Modellliste eines Dienstes ändert sich oft. Fehlt hier ein Modell, das Sie möchten, steht die aktuelle Liste in der Dokumentation des Dienstes — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —, das **Modell** ist der Name genau so, wie der Dienst ihn angibt.

## Eigene Modelle {#your-own-models}

Ein Spracherkenner muss kein Cloud-Dienst sein. Das Telefon kann **jedes Modell verwenden, das über die OpenAI-kompatible API bereitgestellt wird** — die Schnittstelle `POST /v1/audio/transcriptions` —, ob es lokal auf Ihrem Rechner oder auf einem eigenen Server läuft. Der Ton verlässt nie Ihre Räume, nichts wird pro Minute berechnet, und die Menge ist unbegrenzt.

Um eines hinzuzufügen, drücken Sie **Hinzufügen** und geben an:

- die **Adresse** des Servers bis einschließlich `/v1`, zum Beispiel `http://localhost:8000/v1` für den Rechner selbst oder `http://asr.local:8080/v1` für einen Server in Ihrem Netz;
- den Namen des **Modells** genau so, wie der Server ihn auflistet, zum Beispiel `openai/whisper-large-v3-turbo`.

### Was sich verwenden lässt {#what-can-be-used}

Die übliche Wahl ist **Whisper**, das offene Spracherkennungsmodell von OpenAI. Es ist kostenlos nutzbar, versteht rund hundert Sprachen und gibt es in mehreren Größen: Ein kleines Modell läuft auf einem gewöhnlichen Rechner, die großen sind spürbar genauer und bekommen am besten eine Grafikkarte.

| Modell | Hinweise |
| --- | --- |
| `whisper-large-v3` | Das genaueste Whisper. Für einen Server mit GPU. |
| `openai/whisper-large-v3-turbo` | Eine schnellere Fassung von `large-v3` mit geringem Genauigkeitsverlust. |
| `Systran/faster-whisper-large-v3` | `large-v3`, umgewandelt für die Engine faster-whisper; schneller und sparsamer im Speicher. |
| `medium`, `small`, `base` | Kleinere Whisper-Modelle, für einen Rechner ohne Grafikkarte. |

Whisper ist das Modell, um das diese Server gebaut sind. Einige von ihnen können auch andere Spracherkennungsmodelle bereitstellen, etwa NVIDIA Parakeet.

### Server mit OpenAI-kompatibler API {#servers-that-offer-the-openai-compatible-api}

Das Modell muss von einem Server betrieben werden, der den OpenAI-kompatiblen Endpunkt `/v1/audio/transcriptions` anbietet. Diese tun es:

| Server | Was er ist |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Ein leistungsfähiger Modellserver. Stellt Whisper nach dem Start unter `http://localhost:8000/v1` bereit. |
| [Speaches](https://github.com/speaches-ai/speaches) | Ein Server für Sprachmodelle, „Ollama für Sprache“, auf Basis von faster-whisper. Lädt ein Modell, wenn es zum ersten Mal verlangt wird. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Betreibt Whisper effizient auf der CPU, auch auf Apple Silicon. Sein `whisper-server` wird mit `--inference-path /v1/audio/transcriptions` gestartet. |
| [LocalAI](https://localai.io/) | Ein direkter OpenAI-Ersatz, der Modelle lokal betreibt. |

Jeder andere Server mit demselben Endpunkt funktioniert genauso. Braucht ein Server einen Schlüssel, geben Sie ihn wie bei einem Cloud-Dienst ein.

Bevor Sie sich auf einen Server verlassen, machen Sie eine Testaufnahme und sehen Sie sich das Transkript im [Aufnahmefenster](/interface/recordings) an: Ein Gespräch in einer Sprache, die das Modell schlecht kennt, zeigt es sofort.
