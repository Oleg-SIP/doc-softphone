---
title: Transkrypcja
sidebar_position: 1
description: "Wybór rozpoznawacza, który zamienia dźwięk na tekst: jego adres, jego model i tabela modeli wszystkich rodzajów usług."
---

**Ustawienia → Transkrypcja** wymienia rozpoznawacze: usługi, które zamieniają dźwięk na tekst, dla zakończonych rozmów i — dla [suflera](../interface/prompter.md) — w trakcie rozmowy.

<Shot name="25_transcription" alt="Ustawienia → Transkrypcja: pięć rozpoznawaczy" />

Rozmowa jest transkrybowana, gdy poprosisz o to w [oknie nagrań](/interface/recordings), albo sama, jeśli w [Przetwarzaniu](/ai-processing/processing) włączone jest **Przetwarzaj rozmowy automatycznie**. Rozpoznawacz na Twojej własnej maszynie nic nie kosztuje; ten w chmurze pobiera opłatę za minutę dźwięku.

## Rozpoznawacze {#recognisers}
Rozpoznawacz to usługa rozpoznawania mowy, do której telefon wysyła dźwięk. **Dodaj** dodaje nowy; przycisk **Sprawdź** na jego karcie sprawdza, czy usługa naprawdę odpowiada. Każdy jest na liście ze swoją nazwą, a pod nią z modelem i adresem swojej usługi. Na obrazku jest ich pięć:

| Nazwa | Model | Adres |
| --- | --- | --- |
| **X.ai** | *(puste: domyślny model usługi)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(brak)* | `ws://localhost:2700`, serwer na tym komputerze |

Dwa znaki po prawej stronie wiersza mówią, do czego rozpoznawacz jest domyślny. Zegar świeci przy domyślnym **dla transkrypcji** — na obrazku **X.ai** — używanym, gdy nie wybierzesz innego. Błyskawica świeci przy domyślnym **dla suflera** — na obrazku **Vosk**. Możesz mieć kilka rozpoznawaczy; lista rozwijana nad transkrypcją w [oknie nagrań](/interface/recordings#transcript-or-write-up-the-drop-down) pokazuje transkrypcje zrobione przez każdy z nich.

## Karta rozpoznawacza {#the-recognisers-card}
Kliknięcie rozpoznawacza otwiera jego kartę.

<Shot name="43_recogniser_card" alt="Karta rozpoznawacza X.ai: rodzaj, oba adresy, klucz, Sprawdź i ustawienia domyślne" />

| Pole | Co to jest |
| --- | --- |
| **Nazwa** | Nazwa na listach. |
| **Rodzaj** | Rodzaj usługi, od którego zależy, jak telefon z nią rozmawia: **Zgodny z OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics** i trzy działające na Twojej własnej maszynie — **Vosk**, **WhisperLive** i **NVIDIA Riva**. **Yandex SpeechKit** jest oferowany, gdy krajem wybranym w [O programie](../application/about.md) jest Rosja lub jeden z jej sąsiadów. |
| **Adres dla transkrypcji** | Dokąd wysyłane są zakończone rozmowy. |
| **Adres dla suflera** | Dokąd płynie dźwięk na żywo w trakcie rozmowy. *Puste jest wyliczane z adresu obok*, jak `wss://api.x.ai` na obrazku. |
| **Klucz** | Klucz usługi. *Leży w pęku kluczy tego komputera, nigdy w pliku ustawień.* |
| **Sprawdź** | Pyta usługę i mówi, co odpowiedziała, na przykład *Odpowiedział i oferuje 3 modele*. |
| **Model dla transkrypcji** i **Model dla suflera** | Model dokładnie tak, jak nazywa go usługa. *Puste nie wysyła nazwy modelu*, a usługa używa własnego domyślnego; jeśli dostawca go publikuje, karta go podaje. Dla rodzaju bez wyboru pole nie jest pokazywane. |
| **Domyślny dla transkrypcji** | Czyni ten rozpoznawacz tym, którego używa się, gdy nie wybierzesz innego. |
| **Domyślny dla suflera** | Czyni ten rozpoznawacz tym, którym słucha nowy pomocnik suflera. |
| **Włączony** | Wyłączony rozpoznawacz zostaje na liście, ale nie jest używany. |

**Ustawienia zaawansowane** otwierają resztę karty. Wartości, które liczą się najbardziej:

<Shot name="43b_recogniser_advanced" alt="Ustawienia zaawansowane rozpoznawacza: granice, jak tnie się wypowiedzi, język" />

| Pole | Co robi |
| --- | --- |
| **Region** | Region usługi, jeśli ma ich kilka. |
| **Wysyłaj obie strony osobno** | Połączenie jest nagrywane z dwiema osobami na dwóch kanałach i właśnie po tym rozpoznawacz poznaje, kto co powiedział. Wyłącz dla serwera, który twierdzi, że to potrafi, a nie potrafi. |
| **Pytaj, kto mówi** | Rozróżnia osoby w jednym kanale, gdy mówi na nim kilka. |
| **Zapisuj liczby cyframi** | Kwoty, daty i numery telefonów wracają tak, jak się je pisze, a nie słownie. |
| **Granica wysyłki**, **Granica długości** | Największy plik w bajtach i najdłuższe nagranie w sekundach, które ten telefon wyśle. |
| **Żądań naraz** | Ile żądań może być w toku jednocześnie. |
| **Zakończ wypowiedź po**, **Łącz krótkie wypowiedzi w ciągu**, **Przerwa między wypowiedziami** | Dla suflera: ile czasu bez nowych słów kończy wypowiedź, ile krótka wypowiedź czeka na następną, by się z nią połączyć, i ile ciszy kończy kolejkę mówienia, gdy rozpoznawacz jej nie oznacza. W milisekundach. |
| **Język** | Dwuliterowy kod języka według ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Zostaw puste, a rozpoznawacz zdecyduje — to dobry wybór, chyba że Twoje rozmowy toczą się w języku, który on ciągle źle słyszy. |
| **Dodatki** | Jedno `name = value` w wierszu, przekazywane usłudze bez zmian. Zostaw puste, chyba że serwer coś dokumentuje. |
| **Oczekiwanie, minuty** | Jak długo czekać na transkrypcję. Puste wylicza to z długości nagrania. |
| **Cena za minutę** | Ile kosztuje minuta dźwięku na żywo według cennika usługi. Sufler pokazuje, ile kosztowała sesja, i zatrzymuje się na swoim [miesięcznym limicie](prompter.md#spending). |

## Rozpoznawanie na żywo dla suflera {#live-recognition-for-the-prompter}
[Sufler](../interface/prompter.md) potrzebuje rozpoznawacza, który słucha, gdy ktoś mówi — strumieniem, a nie gotowym plikiem. Potrafią to te rodzaje: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Zgodny z OpenAI** (z transkrypcją OpenAI w czasie rzeczywistym), **AssemblyAI**, **Soniox** i **Speechmatics** w chmurze, **Yandex SpeechKit** tam, gdzie jest oferowany, oraz **Vosk**, **WhisperLive** i **NVIDIA Riva** na Twojej własnej maszynie. Rozpoznawacz na Twojej własnej maszynie zatrzymuje głos rozmówcy w firmie i nic nie kosztuje.

Jak go użyć: otwórz jego kartę, sprawdź **Adres dla suflera** (lub pozwól go wyliczyć), wybierz **Model dla suflera**, jeśli usługa oferuje kilka — modele na żywo często różnią się od tych dla plików, jak `scribe_v2_realtime` w ElevenLabs — i naciśnij **Sprawdź**. Zaznacz **Domyślny dla suflera**, aby nowi pomocnicy słuchali właśnie nim.

## Który model wybrać {#which-model-to-choose}
Tabela wymienia modele rozpoznawania mowy każdego rodzaju z listy **Rodzaj**. **Pogrubione** modele są ustawione na obrazku; dla rozpoznawacza X.ai model jest pusty, więc używany jest domyślny model usługi, **`grok-voice-transcribe-2.0`**. **Do czego** mówi, do czego model jest zrobiony: do gotowych nagrań (*transkrypcje*), do mowy na żywo dla [suflera](#live-recognition-for-the-prompter) (*sufler*) czy do *obu*.

| Rodzaj i adres | Model | Do czego | Czemu służy |
| --- | --- | --- | --- |
| **Zgodny z OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transkrypcje | Model, który OpenAI poleca do nagranej mowy w jej oryginalnym języku. |
| | **`gpt-4o-transcribe`** | oba | Transkrypcja ogólnego przeznaczenia. Dostaje go nowy rozpoznawacz tego rodzaju. |
| | `gpt-4o-mini-transcribe` | oba | Lżejszy i tańszy wariant poprzedniego. |
| | `gpt-4o-transcribe-diarize` | transkrypcje | Oznacza, kto kiedy mówi. Używaj go tylko, jeśli tego potrzebujesz. |
| | `whisper-1` | transkrypcje | Starszy model Whisper, zachowany do szczególnych zastosowań, jak znaczniki czasu słów i napisy. |
| | `gpt-live-transcribe` | sufler | Model OpenAI na żywo: słowa przychodzą w miarę, jak są wypowiadane. Telefon proponuje go dla suflera. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | oba | Najlepszy model ogólnego przeznaczenia Deepgram, do spotkań, hałaśliwego i wielojęzycznego dźwięku. Dostaje go nowy rozpoznawacz tego rodzaju. |
| | **`nova-2`** | oba | Poprzednia generacja; zostaw ją dla języków, których `nova-3` jeszcze nie obsługuje. |
| | `nova-2-phonecall` | oba | `nova-2` dostrojony do wąskiego dźwięku linii telefonicznej. Angielski. |
| | `flux-general-en` | sufler | Zrobiony do rozmowy: słyszy, kiedy ktoś skończył mówić. Angielski. |
| | `flux-general-multi` | sufler | To samo w dziesięciu językach, a rozmowa może przechodzić z jednego na drugi. |
| | `enhanced`, `base` | transkrypcje | Starsze poziomy; `base` jest do dużych ilości. |
| | `whisper` | transkrypcje | Whisper uruchamiany przez Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transkrypcje | Transkrypcja ogólnego przeznaczenia w ponad 90 językach, z rozdzielaniem mówców. |
| | `scribe_v2_realtime` | sufler | Wersja `scribe_v2` na żywo. Telefon proponuje ją dla suflera. |
| | `scribe_v2_medical` | transkrypcje | `scribe_v2` dostrojony do dźwięku klinicznego. |
| | `scribe_v1` | transkrypcje | Pierwsza generacja; przestarzała, używaj `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | oba | Najdokładniejszy, do rozmowy w jednym języku. Dostaje go nowy rozpoznawacz tego rodzaju. |
| | `standard` | oba | Szybszy i tańszy, nieco mniej dokładny. |
| | `melia-1` | transkrypcje | Rozmowa w kilku językach, zmieniająca język w pół zdania, wraca jako jedna transkrypcja. Tylko nagrania, w regionach UE i USA; na razie bez własnego słownika i oznaczania mówców. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | oba | Domyślny; 25 języków. |
| | `grok-voice-transcribe-1.0` | transkrypcje | Przestarzały: usługa przekierowuje go na `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transkrypcje | Ponad 60 języków, z rozdzielaniem mówców. |
| | `stt-rt-v5` | sufler | Na żywo, w tych samych ponad 60 językach, i słyszy, gdzie kończy się kolejka mówienia. Telefon proponuje go dla suflera. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | oba | Najdokładniejszy model do nagrań; 18 języków, a rozmowa może przechodzić z jednego na drugi. |
| | `universal-2` | transkrypcje | 99 języków, tańszy; AssemblyAI sięga po niego dla języka, którego `universal-3-5-pro` nie zna. |
| | `universal-3-6-pro` | sufler | Najnowszy model AssemblyAI na żywo, 32 języki; usługa używa go, gdy model jest pusty. |
| | `universal-streaming-multilingual` | sufler | Tańsze rozpoznawanie na żywo po angielsku, hiszpańsku, niemiecku, francusku, portugalsku i włosku. |
| | `universal-streaming-english` | sufler | Tańsze rozpoznawanie na żywo, tylko po angielsku. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | oba | Główny model, mocny w języku rosyjskim, także przez telefon. Oferowany, gdy krajem jest Rosja lub jeden z jej sąsiadów. |
| | `general:rc` | oba | Następna wersja modelu przed wydaniem. |
| | `deferred-general` | transkrypcje | Rozpoznawanie odroczone: transkrypcja przychodzi później, za mniejsze pieniądze. |
| **Vosk (na twojej własnej maszynie)**<br />`ws://localhost:2700` | *(ustawiany na serwerze)* | oba | Darmowy i lekki; działa bez karty graficznej. Model to ten, z którym uruchomiono serwer, jeden na język, na przykład `vosk-model-small-pl-0.22` lub `vosk-model-en-us-0.22`. |
| **WhisperLive (na twojej własnej maszynie)**<br />`ws://localhost:9090` | `small` | oba | Whisper w strumieniu na żywo. Rozmiar wybiera się na karcie: `tiny`, `base`, `small` (proponowany przez telefon), `medium`, `large-v3`; im większy, tym dokładniejszy i tym bardziej potrzebuje karty graficznej. |
| **NVIDIA Riva (na twojej własnej maszynie)**<br />`localhost:50051` | *(ustawiany na serwerze)* | oba | Serwer mowy NVIDIA, dla komputera z kartą graficzną NVIDIA. Udostępnia modele takie jak Parakeet i Canary. |

Co warto wiedzieć przed wyborem:

- **Transkrypcje czy sufler.** Model do mowy na żywo nie przyjmuje gotowego pliku, a większość modeli do plików nie potrafi słuchać na żywo. Dlatego karta ma dwa pola: **Model dla transkrypcji** i **Model dla suflera**.
- **Rozmiar pliku.** OpenAI przyjmuje pliki do 25 MB, X.ai do 500 MB. Długa rozmowa może być większa, niż przyjmuje usługa w chmurze.
- **Cena.** Usługi w chmurze pobierają opłatę za minutę dźwięku, a stawki zależą od modelu i się zmieniają; sprawdź je na stronie usługi, zanim się przełączysz. Rozpoznawacz na Twojej własnej maszynie nic nie kosztuje.
- **Języki.** Każda usługa ma własną listę; sprawdź swoją i ustaw kod w polu **Język** w ustawieniach zaawansowanych rozpoznawacza, jeśli zgaduje źle.

Lista modeli usługi często się zmienia. Jeśli brakuje tu modelu, którego chcesz, aktualna lista jest w dokumentacji samej usługi — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — a **Model** to nazwa dokładnie taka, jaką podaje usługa.

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

Zanim zaczniesz polegać na serwerze, zrób nagranie testowe i obejrzyj transkrypcję w [oknie nagrań](/interface/recordings): rozmowa w języku, który model słabo zna, od razu to pokaże.
