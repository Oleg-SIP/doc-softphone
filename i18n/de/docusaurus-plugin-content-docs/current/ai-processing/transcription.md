---
title: Transkription
sidebar_position: 1
description: "Den Spracherkenner wählen, der Ton in Text verwandelt: seine Adresse, sein Modell und eine Tabelle der Modelle aller Arten von Diensten."
---

**Einstellungen → Transkription** listet die Spracherkenner: die Dienste, die Ton in Text verwandeln — für abgeschlossene Gespräche und, für den [Souffleur](../interface/prompter.md), während ein Gespräch läuft.

<Shot name="25_transcription" alt="Einstellungen → Transkription: fünf Spracherkenner" />

Ein Gespräch wird transkribiert, wenn Sie es im [Aufnahmefenster](/interface/recordings) verlangen, oder von selbst, wenn **Gespräche automatisch verarbeiten** unter [Verarbeitung](/ai-processing/processing) eingeschaltet ist. Ein Spracherkenner auf Ihrer eigenen Maschine kostet im Betrieb nichts; einer in der Cloud berechnet je Minute Ton.

## Spracherkenner {#recognisers}
Ein Spracherkenner ist ein Dienst für Spracherkennung, an den das Telefon den Ton schickt. Mit **Hinzufügen** fügen Sie einen hinzu; die Schaltfläche **Prüfen** auf seiner Karte prüft, ob der Dienst wirklich antwortet. Jeder steht mit seinem Namen in der Liste und darunter mit dem Modell und der Adresse seines Dienstes. Im Bild sind es fünf:

| Name | Modell | Adresse |
| --- | --- | --- |
| **X.ai** | *(leer: die Vorgabe des Dienstes)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(keines)* | `ws://localhost:2700`, ein Server auf diesem Rechner |

Die zwei Zeichen rechts in einer Zeile sagen, wofür der Spracherkenner die Vorgabe ist. Die Uhr leuchtet bei der Vorgabe **für Transkripte** — im Bild **X.ai** —, die verwendet wird, wenn Sie keinen anderen wählen. Der Blitz leuchtet bei der Vorgabe **für den Souffleur** — im Bild **Vosk**. Sie können mehrere Spracherkenner behalten; die Auswahlliste über einem Transkript im [Aufnahmefenster](/interface/recordings#transcript-or-write-up-the-drop-down) zeigt die Transkripte, die jeder von ihnen gemacht hat.

## Die Karte des Spracherkenners {#the-recognisers-card}
Ein Klick auf einen Spracherkenner öffnet seine Karte.

<Shot name="43_recogniser_card" alt="Die Karte des Spracherkenners X.ai: Art, die beiden Adressen, Schlüssel, Prüfen und die Vorgaben" />

| Feld | Was es ist |
| --- | --- |
| **Name** | Der Name in den Listen. |
| **Art** | Die Art des Dienstes, die bestimmt, wie das Telefon mit ihm spricht: **OpenAI-kompatibel (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** und drei, die auf Ihrer eigenen Maschine laufen — **Vosk**, **WhisperLive** und **NVIDIA Riva**. **Yandex SpeechKit** wird angeboten, wo unter [Über](../application/about.md) als Land Russland oder eines seiner Nachbarländer eingestellt ist. |
| **Adresse für Transkripte** | Wohin abgeschlossene Gespräche geschickt werden. |
| **Adresse für den Souffleur** | Wohin der Live-Ton geht, während ein Gespräch läuft. *Leer wird aus der Adresse daneben ermittelt*, wie `wss://api.x.ai` im Bild. |
| **Schlüssel** | Der Schlüssel des Dienstes. *Es liegt im Schlüsselbund dieses Rechners, nie in einer Einstellungsdatei.* |
| **Prüfen** | Fragt den Dienst und sagt, was er geantwortet hat, zum Beispiel *Hat geantwortet und bietet 3 Modelle an*. |
| **Modell für Transkripte** und **Modell für den Souffleur** | Das Modell, genau so, wie der Dienst es nennt. *Leer sendet keinen Modellnamen*, und der Dienst nimmt seine eigene Vorgabe; wo der Anbieter eine veröffentlicht, nennt die Karte sie. Für eine Art ohne Auswahl wird das Feld nicht gezeigt. |
| **Vorgabe für Transkripte** | Macht diesen zum Spracherkenner, der verwendet wird, wenn Sie keinen anderen wählen. |
| **Vorgabe für den Souffleur** | Macht diesen zum Spracherkenner, mit dem ein neuer Helfer des Souffleurs zuhört. |
| **Eingeschaltet** | Ausgeschaltet bleibt der Spracherkenner in der Liste und wird nicht verwendet. |

**Erweiterte Einstellungen** öffnet den Rest der Karte. Die wichtigsten Werte:

<Shot name="43b_recogniser_advanced" alt="Die erweiterten Einstellungen eines Spracherkenners: Grenzen, wie Antworten geschnitten werden, die Sprache" />

| Feld | Was es bewirkt |
| --- | --- |
| **Region** | Die Region des Dienstes, bei einem, der mehrere hat. |
| **Die beiden Seiten getrennt senden** | Ein Anruf wird mit den beiden Personen auf zwei Kanälen aufgenommen — daran erkennt der Spracherkenner, wer was gesagt hat. Schalten Sie es bei einem Server aus, der behauptet, das zu können, und es nicht kann. |
| **Fragen, wer spricht** | Unterscheidet die Personen innerhalb eines Kanals, wenn mehrere darauf sprechen. |
| **Zahlen als Ziffern schreiben** | Beträge, Daten und Telefonnummern kommen so zurück, wie man sie schreibt, statt ausgeschrieben. |
| **Upload-Grenze**, **Längengrenze** | Die größte Datei in Bytes und die längste Aufnahme in Sekunden, die dieses Telefon schickt. |
| **Anfragen gleichzeitig** | Wie viele Anfragen zur selben Zeit laufen dürfen. |
| **Antwort beenden nach**, **Kurze Antworten zusammenfassen binnen**, **Sprecherpause** | Für den Souffleur: wie lange ohne neue Worte eine Antwort beendet, wie lange eine kurze Antwort auf die nächste wartet, um mit ihr verbunden zu werden, und wie lange eine Stille einen Sprecherwechsel beendet, wo der Spracherkenner keinen markiert. In Millisekunden. |
| **Sprache** | Ein zweibuchstabiger Sprachcode nach ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Lassen Sie ihn leer, und der Spracherkenner entscheidet — das ist richtig, sofern Ihre Gespräche nicht in einer Sprache geführt werden, die er immer wieder falsch versteht. |
| **Zusätze** | Ein `name = value` je Zeile, unverändert an den Dienst übergeben. Lassen Sie es leer, sofern der Server nichts dokumentiert. |
| **Warten, Minuten** | Wie lange auf ein Transkript gewartet wird. Leer berechnet es aus der Länge der Aufnahme. |
| **Preis je Minute** | Was eine Minute Live-Ton kostet, aus der Preisliste des Dienstes. Der Souffleur zeigt, was eine Sitzung gekostet hat, und hält an seiner [Monatsgrenze](prompter.md#spending) an. |

## Live-Erkennung für den Souffleur {#live-recognition-for-the-prompter}
Der [Souffleur](../interface/prompter.md) braucht einen Spracherkenner, der zuhört, während jemand spricht — über einen Datenstrom statt mit einer fertigen Datei. Diese Arten können das: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **OpenAI-kompatibel** (mit der Echtzeit-Transkription von OpenAI), **AssemblyAI**, **Soniox** und **Speechmatics** in der Cloud, **Yandex SpeechKit**, wo es angeboten wird, und **Vosk**, **WhisperLive** und **NVIDIA Riva** auf Ihrer eigenen Maschine. Ein Spracherkenner auf Ihrer eigenen Maschine behält die Stimme der Gegenseite im Haus und kostet nichts.

So nutzen Sie einen: Öffnen Sie seine Karte, prüfen Sie die **Adresse für den Souffleur** (oder lassen Sie sie ermitteln), wählen Sie das **Modell für den Souffleur**, wo der Dienst mehrere anbietet — die Live-Modelle sind oft andere als die für Dateien, etwa `scribe_v2_realtime` bei ElevenLabs —, und drücken Sie **Prüfen**. Haken Sie **Vorgabe für den Souffleur** an, damit neue Helfer mit ihm zuhören.

## Welches Modell wählen {#which-model-to-choose}
Die Tabelle listet die Spracherkennungsmodelle jeder Art aus der Liste **Art**. Die **fett** gedruckten Modelle sind die im Bild eingerichteten; beim Spracherkenner X.ai ist das Modell leer, also wird die Vorgabe des Dienstes, **`grok-voice-transcribe-2.0`**, verwendet. **Wofür** sagt, wofür ein Modell gemacht ist: für fertige Aufnahmen (*Transkripte*), für Live-Sprache für den [Souffleur](#live-recognition-for-the-prompter) (*Souffleur*) oder für *beides*.

| Art und Adresse | Modell | Wofür | Wozu es dient |
| --- | --- | --- | --- |
| **OpenAI-kompatibel (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Transkripte | Das Modell, das OpenAI für aufgenommene Sprache in ihrer Originalsprache empfiehlt. |
| | **`gpt-4o-transcribe`** | beides | Transkription für allgemeine Zwecke. Ein neuer Spracherkenner dieser Art bekommt es. |
| | `gpt-4o-mini-transcribe` | beides | Eine leichtere, günstigere Variante davon. |
| | `gpt-4o-transcribe-diarize` | Transkripte | Markiert, wer wann spricht. Nehmen Sie es nur, wenn Sie das brauchen. |
| | `whisper-1` | Transkripte | Das ältere Whisper-Modell, für Sonderzwecke wie Zeitstempel je Wort und Untertitel. |
| | `gpt-live-transcribe` | Souffleur | Das Live-Modell von OpenAI: Die Worte kommen, während sie gesagt werden. Das Telefon bietet es für den Souffleur an. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | beides | Das beste allgemeine Modell von Deepgram, für Besprechungen, lauten und mehrsprachigen Ton. Ein neuer Spracherkenner dieser Art bekommt es. |
| | **`nova-2`** | beides | Die vorige Generation; behalten Sie sie für Sprachen, die `nova-3` noch nicht unterstützt. |
| | `nova-2-phonecall` | beides | `nova-2`, abgestimmt auf den schmalen Klang einer Telefonleitung. Englisch. |
| | `flux-general-en` | Souffleur | Für Gespräche gemacht: Es hört, wann jemand ausgeredet hat. Englisch. |
| | `flux-general-multi` | Souffleur | Dasselbe in zehn Sprachen, und ein Gespräch darf zwischen ihnen wechseln. |
| | `enhanced`, `base` | Transkripte | Ältere Stufen; `base` ist für große Mengen. |
| | `whisper` | Transkripte | Whisper, betrieben von Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transkripte | Allgemeine Transkription in über 90 Sprachen, mit Sprechertrennung. |
| | `scribe_v2_realtime` | Souffleur | Die Live-Fassung von `scribe_v2`. Das Telefon bietet sie für den Souffleur an. |
| | `scribe_v2_medical` | Transkripte | `scribe_v2`, abgestimmt auf klinischen Ton. |
| | `scribe_v1` | Transkripte | Die erste Generation; veraltet, nehmen Sie `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | beides | Das genaueste, für ein Gespräch in einer Sprache. Ein neuer Spracherkenner dieser Art bekommt es. |
| | `standard` | beides | Schneller und günstiger, etwas weniger genau. |
| | `melia-1` | Transkripte | Ein Gespräch in mehreren Sprachen, mit Wechseln mitten im Satz, kommt als ein Transkript zurück. Nur für Aufnahmen, in den Regionen EU und USA; noch ohne eigenes Wörterbuch und Sprecherkennzeichnung. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | beides | Die Vorgabe; 25 Sprachen. |
| | `grok-voice-transcribe-1.0` | Transkripte | Veraltet: Der Dienst leitet es auf `2.0` um. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | Transkripte | Über 60 Sprachen, mit Sprechertrennung. |
| | `stt-rt-v5` | Souffleur | Live, in denselben über 60 Sprachen, und hört, wo ein Sprecherwechsel endet. Das Telefon bietet es für den Souffleur an. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | beides | Das genaueste Modell für Aufnahmen; 18 Sprachen, und ein Gespräch darf zwischen ihnen wechseln. |
| | `universal-2` | Transkripte | 99 Sprachen, günstiger; AssemblyAI weicht darauf aus, wenn `universal-3-5-pro` eine Sprache nicht kennt. |
| | `universal-3-6-pro` | Souffleur | Das neueste Live-Modell von AssemblyAI, 32 Sprachen; der Dienst nimmt es, wenn das Modell leer ist. |
| | `universal-streaming-multilingual` | Souffleur | Günstigere Live-Erkennung auf Englisch, Spanisch, Deutsch, Französisch, Portugiesisch und Italienisch. |
| | `universal-streaming-english` | Souffleur | Günstigere Live-Erkennung, nur Englisch. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | beides | Das Hauptmodell, stark bei russischer Sprache, auch am Telefon. Wird angeboten, wo als Land Russland oder eines seiner Nachbarländer eingestellt ist. |
| | `general:rc` | beides | Die nächste Version des Modells vor ihrer Freigabe. |
| | `deferred-general` | Transkripte | Verzögerte Erkennung: Das Transkript kommt später, dafür günstiger. |
| **Vosk (auf Ihrer eigenen Maschine)**<br />`ws://localhost:2700` | *(auf dem Server eingestellt)* | beides | Kostenlos und leicht; läuft ohne Grafikkarte. Das Modell ist das, mit dem der Server gestartet wurde, eines je Sprache, zum Beispiel `vosk-model-de-0.21` oder das kleine `vosk-model-small-de-0.15`. |
| **WhisperLive (auf Ihrer eigenen Maschine)**<br />`ws://localhost:9090` | `small` | beides | Whisper über einen Live-Datenstrom. Die Größe wird auf der Karte gewählt: `tiny`, `base`, `small` (was das Telefon anbietet), `medium`, `large-v3`; je größer, desto genauer, und desto mehr will es eine Grafikkarte. |
| **NVIDIA Riva (auf Ihrer eigenen Maschine)**<br />`localhost:50051` | *(auf dem Server eingestellt)* | beides | Der Sprachserver von NVIDIA, für einen Rechner mit NVIDIA-Grafikkarte. Er stellt Modelle wie Parakeet und Canary bereit. |

Was Sie vor der Wahl wissen sollten:

- **Transkripte oder Souffleur.** Ein Modell für Live-Sprache nimmt keine fertige Datei, und die meisten Modelle für Dateien können nicht live zuhören. Deshalb hat eine Karte zwei Felder, **Modell für Transkripte** und **Modell für den Souffleur**.
- **Dateigröße.** OpenAI nimmt Dateien bis 25 MB an, X.ai bis 500 MB. Ein langes Gespräch kann größer sein, als ein Cloud-Dienst annimmt.
- **Preis.** Cloud-Dienste berechnen je Minute Ton, und die Tarife unterscheiden sich je Modell und ändern sich; lesen Sie sie auf der Seite des Dienstes nach, bevor Sie wechseln. Ein Spracherkenner auf Ihrer eigenen Maschine kostet im Betrieb nichts.
- **Sprachen.** Jeder Dienst hat seine eigene Liste; prüfen Sie Ihre und setzen Sie den Code unter **Sprache** in den erweiterten Einstellungen des Spracherkenners, wenn er falsch rät.

Die Modellliste eines Dienstes ändert sich oft. Fehlt hier ein Modell, das Sie möchten, steht die aktuelle Liste in der Dokumentation des Dienstes — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — das **Modell** ist der Name genau so, wie der Dienst ihn angibt.

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
