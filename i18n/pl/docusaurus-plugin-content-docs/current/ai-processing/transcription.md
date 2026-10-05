---
title: Transkrypcja
sidebar_position: 1
description: "\"Wybierz rozpoznawacz, który zamienia dźwięk w tekst: jego adres, model i tabelę modeli oferowanych przez każdą usługę.\""
---

**Ustawienia → Transkrypcja** określa, jak dźwięk staje się tekstem: w jakim języku i przy pomocy którego rozpoznawacza.

<Shot name="25_transcription" alt="Ustawienia → Transkrypcja: język i cztery rozpoznawacze" />

Rozmowa jest spisywana, gdy poprosisz o to w [oknie nagrań](/recordings/recordings-window), albo sama, jeśli w [Przetwarzaniu](/ai-processing/processing) włączone jest **Przetwarzaj rozmowy automatycznie**. Rozpoznawacz na twoim komputerze nic nie kosztuje; ten w chmurze nalicza opłaty za minuty dźwięku.

## Język {#language}

**Język** to dwuliterowy kod języka według ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Zostaw go pustym, a rozpoznawacz zdecyduje sam — to właściwe, chyba że twoje rozmowy toczą się w języku, który ciągle źle rozpoznaje.

## Rozpoznawacze {#recognisers}

Rozpoznawacz to usługa zamiany mowy na tekst, do której telefon wysyła dźwięk. Naciśnij **Dodaj**, aby go dodać; przycisk **Sprawdź** w formularzu sprawdza, czy usługa naprawdę odpowiada. Każdy jest na liście z nazwą, a pod nią z modelem i adresem usługi. Na obrazku są cztery:

| Nazwa | Model | Adres |
| --- | --- | --- |
| **X.ai** | *(puste: domyślny model usługi)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Ten oznaczony jako **domyślny** po prawej stronie swojego wiersza (na obrazku **X.ai**) jest używany, gdy nie wybierzesz innego. Możesz mieć kilka. Lista rozwijana nad transkrypcją w [oknie nagrań](/recordings/recordings-window#the-transcript-and-the-write-up) pokazuje transkrypcje wykonane przez każdy rozpoznawacz.

Model może pozostać pusty. Usługa używa wtedy własnego modelu domyślnego.

## Który model wybrać {#which-model-to-choose}

Tabela wymienia modele zamiany mowy na tekst czterech usług z obrazka. Modele **pogrubione** to te skonfigurowane na obrazku. Dla rozpoznawacza X.ai model jest pusty, więc używany jest domyślny model usługi, **`grok-voice-transcribe-2.0`**.

| Usługa i adres | Model | Do czego służy |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Model, który OpenAI poleca do nagranej mowy w jej oryginalnym języku. |
| | **`gpt-4o-transcribe`** | Transkrypcja ogólnego przeznaczenia. |
| | `gpt-4o-mini-transcribe` | Lżejszy i tańszy wariant powyższego. |
| | `gpt-4o-transcribe-diarize` | Oznacza, kto mówi kiedy. Używaj go tylko wtedy, gdy tego potrzebujesz. |
| | `whisper-1` | Starszy model Whisper, pozostawiony do specjalnych zastosowań, takich jak znaczniki czasu słów i napisy. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transkrypcja ogólnego przeznaczenia w ponad 90 językach, z rozdzielaniem mówców. |
| | `scribe_v2_medical` | To samo, dostrojone do dźwięku klinicznego. |
| | `scribe_v1` | Pierwsza generacja; przestarzały, używaj `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Najlepszy model ogólnego przeznaczenia Deepgram, do spotkań, zaszumionego i wielojęzycznego dźwięku. |
| | **`nova-2`** | Poprzednia generacja; zachowaj ją dla języków, których `nova-3` jeszcze nie obsługuje. |
| | `enhanced` | Starszy poziom z mniejszą liczbą błędów niż `base`. |
| | `base` | Najstarszy poziom, do dużych ilości. |
| | `whisper` | Whisper uruchamiany przez Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Domyślny; 25 języków. |
| | `grok-voice-transcribe-1.0` | Przestarzały: usługa przekierowuje go do `2.0`. |

Co warto wiedzieć przed wyborem:

- **Rozmiar pliku.** OpenAI przyjmuje pliki do 25 MB; X.ai do 500 MB. Długa rozmowa może być większa, niż przyjmuje usługa w chmurze.
- **Cena.** Usługi w chmurze naliczają opłaty za minuty dźwięku, a stawki różnią się w zależności od modelu i się zmieniają; sprawdź je na stronie usługi, zanim się przełączysz.
- **Języki.** Każda usługa ma własną listę; sprawdź swoją i ustaw kod [Język](#language), jeśli rozpoznawacz zgaduje źle.
- **Modele czasu rzeczywistego**, takie jak `scribe_v2_realtime` czy `flux` Deepgram, są przeznaczone do transmisji na żywo i nie ma ich w tabeli: telefon spisuje zakończone nagrania.

Lista modeli usługi często się zmienia. Jeśli brakuje tu modelu, którego chcesz, dokumentacja usługi ma aktualną listę — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) —; **Model** to nazwa dokładnie w takiej postaci, w jakiej podaje ją usługa.

## Twoje własne modele {#your-own-models}

Rozpoznawacz nie musi być usługą w chmurze. Telefon może używać **dowolnego modelu udostępnianego przez API zgodne z OpenAI** — interfejs `POST /v1/audio/transcriptions` —, czy działa lokalnie na twoim komputerze, czy na twoim serwerze. Dźwięk nigdy nie opuszcza twojej siedziby, nic nie jest naliczane za minuty i nie ma ograniczenia ilości.

Aby go dodać, naciśnij **Dodaj** i podaj:

- **adres** serwera do `/v1` włącznie, na przykład `http://localhost:8000/v1` dla samego komputera albo `http://asr.local:8080/v1` dla serwera w twojej sieci;
- nazwę **modelu** dokładnie w takiej postaci, w jakiej wymienia ją serwer, na przykład `openai/whisper-large-v3-turbo`.

### Czego można używać {#what-can-be-used}

Zwykłym wyborem jest **Whisper**, otwarty model rozpoznawania mowy od OpenAI. Jest darmowy, rozumie około stu języków i występuje w kilku rozmiarach: mały model działa na zwykłym komputerze, duże są wyraźnie dokładniejsze i najlepiej dać im kartę graficzną.

| Model | Uwagi |
| --- | --- |
| `whisper-large-v3` | Najdokładniejszy Whisper. Do serwera z GPU. |
| `openai/whisper-large-v3-turbo` | Szybsza wersja `large-v3` z niewielką utratą dokładności. |
| `Systran/faster-whisper-large-v3` | `large-v3` przekonwertowany dla silnika faster-whisper; szybszy i oszczędniejszy dla pamięci. |
| `medium`, `small`, `base` | Mniejsze modele Whisper, do komputera bez karty graficznej. |

Whisper to model, wokół którego zbudowano te serwery. Niektóre z nich mogą też udostępniać inne modele rozpoznawania mowy, na przykład NVIDIA Parakeet.

### Serwery udostępniające API zgodne z OpenAI {#servers-that-offer-the-openai-compatible-api}

Model musi uruchamiać serwer, który udostępnia zgodny z OpenAI punkt końcowy `/v1/audio/transcriptions`. Te to robią:

| Serwer | Co to jest |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Wydajny serwer modeli. Po uruchomieniu udostępnia Whisper pod `http://localhost:8000/v1`. |
| [Speaches](https://github.com/speaches-ai/speaches) | Serwer modeli mowy, „Ollama dla mowy”, zbudowany na faster-whisper. Wczytuje model przy pierwszym żądaniu. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Wydajnie uruchamia Whisper na procesorze, także na Apple silicon. Jego `whisper-server` uruchamia się z `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Bezpośredni zamiennik OpenAI, który uruchamia modele lokalnie. |

Każdy inny serwer udostępniający ten sam punkt końcowy działa tak samo. Jeśli serwer wymaga klucza, wpisz go tak jak dla usługi w chmurze.

Zanim zaczniesz polegać na serwerze, zrób nagranie testowe i obejrzyj transkrypcję w [oknie nagrań](/recordings/recordings-window): rozmowa w języku, który model słabo zna, od razu to pokaże.
