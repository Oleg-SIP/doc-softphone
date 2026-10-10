---
title: Gỡ băng
sidebar_position: 1
description: "Chọn bộ nhận dạng biến âm thanh thành văn bản: địa chỉ, mô hình của nó và bảng các mô hình của mọi loại dịch vụ."
---

**Cài đặt → Gỡ băng** liệt kê các bộ nhận dạng: những dịch vụ biến âm thanh thành văn bản, cho các cuộc trò chuyện đã kết thúc và, cho [người nhắc](../interface/prompter.md), ngay trong lúc cuộc trò chuyện diễn ra.

<Shot name="25_transcription" alt="Cài đặt → Gỡ băng: năm bộ nhận dạng" />

Một cuộc trò chuyện được gỡ băng khi bạn yêu cầu trong [cửa sổ Bản ghi](/interface/recordings), hoặc tự động nếu **Xử lý các cuộc trò chuyện tự động** đang bật trong [Xử lý](/ai-processing/processing). Bộ nhận dạng trên máy của chính bạn không tốn gì để chạy; bộ nhận dạng trên đám mây tính phí theo phút âm thanh.

## Bộ nhận dạng {#recognisers}
Bộ nhận dạng là dịch vụ nhận dạng giọng nói mà điện thoại gửi âm thanh tới. **Thêm** thêm một bộ mới; nút **Thử** trên thẻ của nó kiểm tra xem dịch vụ có thật sự trả lời không. Mỗi bộ hiện trong danh sách với tên của nó, bên dưới là mô hình và địa chỉ dịch vụ. Trong hình có năm bộ:

| Tên | Mô hình | Địa chỉ |
| --- | --- | --- |
| **X.ai** | *(trống: mô hình mặc định của dịch vụ)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(không có)* | `ws://localhost:2700`, một máy chủ trên máy tính này |

Hai dấu ở bên phải một dòng cho biết bộ nhận dạng là mặc định cho việc gì. Đồng hồ sáng ở bộ mặc định **cho các bản gỡ băng** — **X.ai** trong hình —, được dùng khi bạn không chọn bộ khác. Tia chớp sáng ở bộ mặc định **cho người nhắc** — **Vosk** trong hình. Bạn có thể giữ nhiều bộ nhận dạng; danh sách thả xuống phía trên một bản gỡ băng trong [cửa sổ Bản ghi](/interface/recordings#transcript-or-write-up-the-drop-down) liệt kê các bản gỡ băng do từng bộ tạo ra.

## Thẻ của bộ nhận dạng {#the-recognisers-card}
Nhấn vào một bộ nhận dạng sẽ mở thẻ của nó.

<Shot name="43_recogniser_card" alt="Thẻ của bộ nhận dạng X.ai: loại, hai địa chỉ, khoá, Thử và các mặc định" />

| Trường | Là gì |
| --- | --- |
| **Tên** | Tên trong các danh sách. |
| **Loại** | Loại dịch vụ, quyết định cách điện thoại nói chuyện với nó: **Tương thích OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics**, và ba loại chạy trên máy của chính bạn — **Vosk**, **WhisperLive** và **NVIDIA Riva**. **Yandex SpeechKit** được đưa ra khi quốc gia trong [Giới thiệu](../application/about.md) là Nga hoặc một nước láng giềng của Nga. |
| **Địa chỉ cho bản gỡ băng** | Nơi các cuộc trò chuyện đã kết thúc được gửi tới. |
| **Địa chỉ cho người nhắc** | Nơi âm thanh trực tiếp được gửi tới trong lúc cuộc trò chuyện diễn ra. *Để trống thì suy ra từ địa chỉ bên cạnh*, như `wss://api.x.ai` trong hình. |
| **Khoá** | Khoá của dịch vụ. *Được giữ trong kho khoá của máy tính này, không bao giờ trong tệp cài đặt.* |
| **Thử** | Hỏi dịch vụ và cho biết nó đã trả lời gì, ví dụ *Đã trả lời, và cung cấp 3 mô hình*. |
| **Mô hình cho bản gỡ băng** và **Mô hình cho người nhắc** | Mô hình, đúng như dịch vụ gọi tên nó. *Để trống sẽ không gửi tên mô hình*, và dịch vụ dùng mô hình mặc định của mình; nơi nhà cung cấp công bố mô hình đó, thẻ sẽ nêu tên. Với loại không có lựa chọn, trường này không hiện. |
| **Mặc định cho các bản gỡ băng** | Biến bộ này thành bộ nhận dạng được dùng khi bạn không chọn bộ khác. |
| **Mặc định cho người nhắc** | Biến bộ này thành bộ nhận dạng mà một trợ lý mới của người nhắc dùng để nghe. |
| **Đang bật** | Khi tắt, bộ nhận dạng vẫn ở trong danh sách nhưng không được dùng. |

**Cài đặt nâng cao** mở phần còn lại của thẻ. Những giá trị quan trọng nhất:

<Shot name="43b_recogniser_advanced" alt="Cài đặt nâng cao của một bộ nhận dạng: giới hạn, cách cắt các lượt trả lời, ngôn ngữ" />

| Trường | Làm gì |
| --- | --- |
| **Vùng** | Vùng của dịch vụ, với dịch vụ có nhiều vùng. |
| **Gửi hai phía riêng biệt** | Cuộc gọi được ghi với hai người trên hai kênh, và chính điều đó cho bộ nhận dạng biết ai nói gì. Hãy tắt nó với máy chủ nói rằng làm được việc này nhưng thực ra không làm được. |
| **Xin biết ai đang nói** | Phân biệt những người trong cùng một kênh, khi có nhiều người nói trên đó. |
| **Viết số bằng chữ số** | Số tiền, ngày tháng và số điện thoại trở về như cách chúng được viết, thay vì viết bằng chữ. |
| **Giới hạn tải lên**, **Giới hạn độ dài** | Tệp lớn nhất, tính bằng byte, và bản ghi dài nhất, tính bằng giây, mà điện thoại này sẽ gửi. |
| **Yêu cầu cùng lúc** | Có bao nhiêu yêu cầu được chạy cùng một lúc. |
| **Kết thúc lượt trả lời sau**, **Gộp các lượt trả lời ngắn trong vòng**, **Khoảng nghỉ giữa lượt** | Cho người nhắc: bao lâu không có từ mới thì kết thúc một lượt trả lời, một lượt ngắn chờ lượt kế tiếp bao lâu để được gộp vào, và bao lâu im lặng thì kết thúc một lượt nói ở nơi bộ nhận dạng không đánh dấu. Tính bằng mili giây. |
| **Ngôn ngữ** | Mã ngôn ngữ hai chữ cái theo ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Để trống thì bộ nhận dạng tự quyết — như vậy là đúng, trừ khi các cuộc gọi của bạn bằng một ngôn ngữ mà nó cứ nghe nhầm. |
| **Bổ sung** | Mỗi dòng một `name = value`, được chuyển nguyên vẹn cho dịch vụ. Để trống trừ khi máy chủ có ghi tài liệu về điều gì đó. |
| **Chờ, phút** | Chờ một bản gỡ băng bao lâu. Để trống thì tính theo độ dài bản ghi. |
| **Giá mỗi phút** | Một phút âm thanh trực tiếp tốn bao nhiêu, theo bảng giá của dịch vụ. Người nhắc cho thấy một phiên đã tốn bao nhiêu và dừng ở [hạn mức hằng tháng](prompter.md#spending) của nó. |

## Nhận dạng trực tiếp cho người nhắc {#live-recognition-for-the-prompter}
[Người nhắc](../interface/prompter.md) cần một bộ nhận dạng nghe trong lúc ai đó đang nói, qua một luồng chứ không phải một tệp đã xong. Những loại sau làm được: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Tương thích OpenAI** (với tính năng gỡ băng thời gian thực của OpenAI), **AssemblyAI**, **Soniox** và **Speechmatics** trên đám mây, **Yandex SpeechKit** ở nơi được cung cấp, và **Vosk**, **WhisperLive**, **NVIDIA Riva** trên máy của chính bạn. Bộ nhận dạng trên máy của chính bạn giữ giọng của người bên kia trong nội bộ và không tốn phí.

Để dùng một bộ: mở thẻ của nó, kiểm tra **Địa chỉ cho người nhắc** (hoặc để nó tự suy ra), chọn **Mô hình cho người nhắc** nếu dịch vụ có nhiều mô hình — các mô hình trực tiếp thường khác với mô hình cho tệp, như `scribe_v2_realtime` của ElevenLabs — rồi nhấn **Thử**. Đánh dấu **Mặc định cho người nhắc** để các trợ lý mới nghe bằng bộ đó.

## Nên chọn mô hình nào {#which-model-to-choose}
Bảng liệt kê các mô hình nhận dạng giọng nói của mọi loại trong danh sách **Loại**. Các mô hình in **đậm** là những mô hình được thiết lập trong hình; với bộ nhận dạng X.ai, mô hình để trống nên mô hình mặc định của dịch vụ, **`grok-voice-transcribe-2.0`**, được dùng. Cột **Dùng cho** cho biết mô hình được làm cho việc gì: bản ghi đã xong (*gỡ băng*), lời nói trực tiếp cho [người nhắc](#live-recognition-for-the-prompter) (*người nhắc*), hay *cả hai*.

| Loại và địa chỉ | Mô hình | Dùng cho | Dùng để làm gì |
| --- | --- | --- | --- |
| **Tương thích OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | gỡ băng | Mô hình OpenAI khuyên dùng cho lời nói đã ghi âm bằng ngôn ngữ gốc. |
| | **`gpt-4o-transcribe`** | cả hai | Gỡ băng đa dụng. Bộ nhận dạng mới thuộc loại này được gán mô hình này. |
| | `gpt-4o-mini-transcribe` | cả hai | Phiên bản nhẹ hơn, rẻ hơn của mô hình trên. |
| | `gpt-4o-transcribe-diarize` | gỡ băng | Đánh dấu ai nói lúc nào. Chỉ dùng khi bạn cần. |
| | `whisper-1` | gỡ băng | Mô hình Whisper cũ, giữ lại cho các mục đích đặc biệt như mốc thời gian theo từ và phụ đề. |
| | `gpt-live-transcribe` | người nhắc | Mô hình trực tiếp của OpenAI: các từ đến ngay khi được nói ra. Điện thoại đề xuất nó cho người nhắc. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | cả hai | Mô hình đa dụng tốt nhất của Deepgram, cho các cuộc họp, âm thanh ồn và đa ngôn ngữ. Bộ nhận dạng mới thuộc loại này được gán mô hình này. |
| | **`nova-2`** | cả hai | Thế hệ trước; giữ lại cho những ngôn ngữ `nova-3` chưa hỗ trợ. |
| | `nova-2-phonecall` | cả hai | `nova-2` được tinh chỉnh cho âm thanh hẹp của đường dây điện thoại. Tiếng Anh. |
| | `flux-general-en` | người nhắc | Làm cho hội thoại: nghe được khi nào ai đó nói xong. Tiếng Anh. |
| | `flux-general-multi` | người nhắc | Như trên với mười ngôn ngữ, và cuộc trò chuyện có thể chuyển qua lại giữa chúng. |
| | `enhanced`, `base` | gỡ băng | Các cấp cũ hơn; `base` dành cho khối lượng lớn. |
| | `whisper` | gỡ băng | Whisper do Deepgram chạy. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | gỡ băng | Gỡ băng đa dụng hơn 90 ngôn ngữ, có tách người nói. |
| | `scribe_v2_realtime` | người nhắc | Phiên bản trực tiếp của `scribe_v2`. Điện thoại đề xuất nó cho người nhắc. |
| | `scribe_v2_medical` | gỡ băng | `scribe_v2` được tinh chỉnh cho âm thanh y khoa. |
| | `scribe_v1` | gỡ băng | Thế hệ đầu; đã lỗi thời, hãy dùng `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | cả hai | Chính xác nhất, cho cuộc trò chuyện bằng một ngôn ngữ. Bộ nhận dạng mới thuộc loại này được gán mô hình này. |
| | `standard` | cả hai | Nhanh hơn và rẻ hơn, kém chính xác hơn một chút. |
| | `melia-1` | gỡ băng | Cuộc trò chuyện nhiều ngôn ngữ, đổi ngôn ngữ giữa câu, trở về thành một bản gỡ băng duy nhất. Chỉ cho bản ghi, ở vùng EU và Mỹ; chưa có từ điển riêng và nhãn người nói. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | cả hai | Mặc định; 25 ngôn ngữ. |
| | `grok-voice-transcribe-1.0` | gỡ băng | Đã lỗi thời: dịch vụ chuyển nó sang `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | gỡ băng | Hơn 60 ngôn ngữ, có tách người nói. |
| | `stt-rt-v5` | người nhắc | Trực tiếp, với cùng hơn 60 ngôn ngữ, và nghe được chỗ một lượt nói kết thúc. Điện thoại đề xuất nó cho người nhắc. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | cả hai | Mô hình chính xác nhất cho bản ghi; 18 ngôn ngữ, và cuộc trò chuyện có thể chuyển qua lại giữa chúng. |
| | `universal-2` | gỡ băng | 99 ngôn ngữ, rẻ hơn; AssemblyAI chuyển sang nó với ngôn ngữ mà `universal-3-5-pro` không biết. |
| | `universal-3-6-pro` | người nhắc | Mô hình trực tiếp mới nhất của AssemblyAI, 32 ngôn ngữ; dịch vụ dùng nó khi mô hình để trống. |
| | `universal-streaming-multilingual` | người nhắc | Nhận dạng trực tiếp rẻ hơn cho tiếng Anh, Tây Ban Nha, Đức, Pháp, Bồ Đào Nha và Ý. |
| | `universal-streaming-english` | người nhắc | Nhận dạng trực tiếp rẻ hơn, chỉ tiếng Anh. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | cả hai | Mô hình chính, mạnh về tiếng Nga, cả qua điện thoại. Được đưa ra khi quốc gia là Nga hoặc một nước láng giềng của Nga. |
| | `general:rc` | cả hai | Phiên bản kế tiếp của mô hình trước khi phát hành. |
| | `deferred-general` | gỡ băng | Nhận dạng hoãn lại: bản gỡ băng đến muộn hơn, với giá thấp hơn. |
| **Vosk (trên máy của chính bạn)**<br />`ws://localhost:2700` | *(đặt trên máy chủ)* | cả hai | Miễn phí và nhẹ; chạy không cần card đồ hoạ. Mô hình là mô hình máy chủ đã được khởi động cùng, mỗi ngôn ngữ một mô hình, ví dụ `vosk-model-vn-0.4` hoặc `vosk-model-en-us-0.22`. |
| **WhisperLive (trên máy của chính bạn)**<br />`ws://localhost:9090` | `small` | cả hai | Whisper qua một luồng trực tiếp. Kích cỡ được chọn trên thẻ: `tiny`, `base`, `small` (cỡ mà điện thoại đề xuất), `medium`, `large-v3`; càng lớn càng chính xác và càng cần card đồ hoạ. |
| **NVIDIA Riva (trên máy của chính bạn)**<br />`localhost:50051` | *(đặt trên máy chủ)* | cả hai | Máy chủ giọng nói của NVIDIA, cho máy tính có card đồ hoạ NVIDIA. Nó cung cấp các mô hình như Parakeet và Canary. |

Những điều nên biết trước khi chọn:

- **Gỡ băng hay người nhắc.** Mô hình làm cho lời nói trực tiếp không nhận tệp đã xong, và phần lớn mô hình cho tệp không nghe trực tiếp được. Vì vậy thẻ có hai trường, **Mô hình cho bản gỡ băng** và **Mô hình cho người nhắc**.
- **Kích thước tệp.** OpenAI nhận tệp tới 25 MB; X.ai tới 500 MB. Một cuộc trò chuyện dài có thể lớn hơn mức một dịch vụ đám mây chấp nhận.
- **Giá.** Dịch vụ đám mây tính phí theo phút âm thanh, và mức phí khác nhau theo mô hình và thay đổi theo thời gian; hãy xem trên trang của chính dịch vụ trước khi chuyển. Bộ nhận dạng trên máy của chính bạn không tốn gì để chạy.
- **Ngôn ngữ.** Mỗi dịch vụ có danh sách riêng; hãy kiểm tra danh sách của bạn, và đặt mã trong **Ngôn ngữ** ở phần cài đặt nâng cao của bộ nhận dạng nếu nó đoán sai.

Danh sách mô hình của một dịch vụ thay đổi thường xuyên. Nếu ở đây thiếu mô hình bạn muốn, tài liệu của chính dịch vụ có danh sách hiện hành — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — và **Mô hình** là tên đúng như dịch vụ đưa ra.

## Mô hình của riêng bạn {#your-own-models}

Bộ nhận dạng không nhất thiết phải là dịch vụ đám mây. Điện thoại có thể dùng **bất kỳ mô hình nào được phục vụ qua API tương thích OpenAI** — giao diện `POST /v1/audio/transcriptions` — dù nó chạy cục bộ trên máy tính của bạn hay trên máy chủ của riêng bạn. Âm thanh không bao giờ rời khỏi cơ sở của bạn, không có gì bị tính phí theo phút, và không giới hạn khối lượng.

Để thêm một bộ, nhấn **Thêm** và cung cấp:

- **Địa chỉ** của máy chủ, tính cả `/v1`, ví dụ `http://localhost:8000/v1` cho chính máy tính này hoặc `http://asr.local:8080/v1` cho một máy chủ trong mạng của bạn;
- tên **Mô hình** đúng như máy chủ liệt kê, ví dụ `openai/whisper-large-v3-turbo`.

### Có thể dùng gì {#what-can-be-used}

Lựa chọn thường gặp là **Whisper**, mô hình nhận dạng giọng nói mã nguồn mở của OpenAI. Nó miễn phí, hiểu khoảng một trăm ngôn ngữ và có nhiều kích cỡ: mô hình nhỏ chạy trên máy tính thông thường, các mô hình lớn chính xác hơn rõ rệt và tốt nhất nên chạy với card đồ hoạ.

| Mô hình | Ghi chú |
| --- | --- |
| `whisper-large-v3` | Whisper chính xác nhất. Dành cho máy chủ có GPU. |
| `openai/whisper-large-v3-turbo` | Phiên bản nhanh hơn của `large-v3`, giảm độ chính xác một chút. |
| `Systran/faster-whisper-large-v3` | `large-v3` được chuyển đổi cho bộ máy faster-whisper; nhanh hơn và nhẹ bộ nhớ hơn. |
| `medium`, `small`, `base` | Các mô hình Whisper nhỏ hơn, cho máy tính không có card đồ hoạ. |

Whisper là mô hình mà các máy chủ này được xây dựng xoay quanh. Một số máy chủ còn có thể phục vụ các mô hình nhận dạng giọng nói khác, như NVIDIA Parakeet.

### Máy chủ cung cấp API tương thích OpenAI {#servers-that-offer-the-openai-compatible-api}

Mô hình phải được chạy bởi một máy chủ cung cấp endpoint `/v1/audio/transcriptions` tương thích OpenAI. Các máy chủ sau có điều đó:

| Máy chủ | Là gì |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Máy chủ mô hình hiệu năng cao. Phục vụ Whisper tại `http://localhost:8000/v1` ngay khi khởi động. |
| [Speaches](https://github.com/speaches-ai/speaches) | Máy chủ cho các mô hình giọng nói, "Ollama cho giọng nói", xây dựng trên faster-whisper. Tải mô hình khi nó được yêu cầu lần đầu. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Chạy Whisper hiệu quả trên CPU, kể cả Apple silicon. `whisper-server` của nó được khởi động với `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Sản phẩm thay thế trực tiếp cho OpenAI, chạy mô hình cục bộ. |

Bất kỳ máy chủ nào khác cung cấp cùng endpoint đều hoạt động theo cách tương tự. Nếu máy chủ cần khoá, hãy nhập nó như với dịch vụ đám mây.

Trước khi dựa vào một máy chủ, hãy ghi thử một bản và xem bản chép lời trong [cửa sổ Bản ghi](/interface/recordings): một cuộc trò chuyện bằng ngôn ngữ mà mô hình biết kém sẽ cho thấy ngay điều đó.
