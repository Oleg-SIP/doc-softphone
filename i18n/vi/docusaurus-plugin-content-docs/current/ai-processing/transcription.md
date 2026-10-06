---
title: Gỡ băng
sidebar_position: 1
description: Chọn bộ nhận dạng chuyển âm thanh thành văn bản — địa chỉ, mô hình của nó, và bảng các mô hình mà mỗi dịch vụ cung cấp.
---

**Cài đặt → Gỡ băng** thiết lập cách âm thanh trở thành văn bản: bằng ngôn ngữ nào, và bởi bộ nhận dạng nào.

<Shot name="25_transcription" alt="Cài đặt → Gỡ băng: ngôn ngữ và bốn bộ nhận dạng" />

Một cuộc trò chuyện được chép lời khi bạn yêu cầu trong [cửa sổ Bản ghi](/recordings/recordings-window), hoặc tự động nếu **Xử lý các cuộc trò chuyện tự động** được bật trong [Xử lý](/ai-processing/processing). Bộ nhận dạng chạy trên máy của bạn không tốn phí; bộ nhận dạng trên đám mây tính phí theo phút âm thanh.

## Ngôn ngữ {#language}

**Ngôn ngữ** là mã ngôn ngữ hai chữ cái theo ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Để trống thì bộ nhận dạng tự quyết định — như vậy là đúng, trừ khi các cuộc gọi của bạn dùng một ngôn ngữ mà nó cứ nghe nhầm.

## Bộ nhận dạng {#recognisers}

Bộ nhận dạng là dịch vụ chuyển giọng nói thành văn bản mà điện thoại gửi âm thanh tới. Nhấn **Thêm** để thêm một bộ; nút **Thử** của biểu mẫu kiểm tra xem dịch vụ có thực sự trả lời không. Mỗi bộ được liệt kê với tên và, bên dưới, mô hình cùng địa chỉ dịch vụ của nó. Trong hình có bốn bộ:

| Tên | Mô hình | Địa chỉ |
| --- | --- | --- |
| **X.ai** | *(trống: mặc định của dịch vụ)* | `https://api.x.ai/v1` |
| **ElevenLabs (Scribe)** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Bộ được đánh dấu **Mặc định** ở bên phải hàng của nó (**X.ai** trong hình) là bộ được dùng khi bạn không chọn bộ khác. Bạn có thể giữ nhiều bộ. Danh sách thả xuống phía trên bản chép lời trong [cửa sổ Bản ghi](/recordings/recordings-window#the-transcript-and-the-write-up) liệt kê các bản chép lời do từng bộ nhận dạng tạo ra.

Có thể để trống mô hình. Khi đó dịch vụ dùng mô hình mặc định của chính nó.

## Nên chọn mô hình nào {#which-model-to-choose}

Bảng liệt kê các mô hình chuyển giọng nói thành văn bản của bốn dịch vụ trong hình. Các mô hình in **đậm** là những mô hình được thiết lập trong hình. Với bộ nhận dạng X.ai, mô hình để trống, nên mô hình mặc định của dịch vụ, **`grok-voice-transcribe-2.0`**, là mô hình được dùng.

| Dịch vụ và địa chỉ | Mô hình | Dùng cho việc gì |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Mô hình OpenAI khuyên dùng cho lời nói đã ghi bằng ngôn ngữ gốc. |
| | **`gpt-4o-transcribe`** | Chép lời đa dụng. |
| | `gpt-4o-mini-transcribe` | Phiên bản nhẹ hơn, rẻ hơn của mô hình trên. |
| | `gpt-4o-transcribe-diarize` | Đánh dấu ai nói khi nào. Chỉ dùng khi bạn cần điều đó. |
| | `whisper-1` | Mô hình Whisper cũ hơn, được giữ cho các mục đích đặc biệt như mốc thời gian theo từ và phụ đề. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Chép lời đa dụng cho hơn 90 ngôn ngữ, có tách người nói. |
| | `scribe_v2_medical` | Tương tự, được tinh chỉnh cho âm thanh lâm sàng. |
| | `scribe_v1` | Thế hệ đầu tiên; đã ngừng phát triển, hãy dùng `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Mô hình đa dụng tốt nhất của Deepgram, cho cuộc họp, âm thanh ồn và đa ngôn ngữ. |
| | **`nova-2`** | Thế hệ trước; giữ lại cho các ngôn ngữ mà `nova-3` chưa hỗ trợ. |
| | `enhanced` | Một cấp cũ hơn, tỷ lệ lỗi thấp hơn `base`. |
| | `base` | Cấp cũ nhất, cho khối lượng lớn. |
| | `whisper` | Whisper, do Deepgram vận hành. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Mặc định; 25 ngôn ngữ. |
| | `grok-voice-transcribe-1.0` | Đã ngừng phát triển: dịch vụ chuyển nó sang `2.0`. |

Những điều nên biết trước khi chọn:

- **Kích thước tệp.** OpenAI nhận tệp tới 25 MB; X.ai tới 500 MB. Một cuộc trò chuyện dài có thể lớn hơn mức dịch vụ đám mây chấp nhận.
- **Giá.** Dịch vụ đám mây tính phí theo phút âm thanh, mức giá khác nhau theo mô hình và hay thay đổi; hãy đọc trên trang của chính dịch vụ trước khi chuyển đổi.
- **Ngôn ngữ.** Mỗi dịch vụ có danh sách riêng; hãy kiểm tra danh sách của bạn, và đặt mã [Ngôn ngữ](#language) nếu bộ nhận dạng đoán sai.
- **Mô hình thời gian thực** như `scribe_v2_realtime` hay `flux` của Deepgram được làm cho luồng trực tiếp và không có trong bảng: điện thoại chép lời các bản ghi đã hoàn tất.

Danh sách mô hình của một dịch vụ thay đổi thường xuyên. Nếu mô hình bạn muốn không có ở đây, tài liệu của chính dịch vụ có danh sách hiện hành — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — và **Mô hình** là tên đúng y như dịch vụ đưa ra.

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

Trước khi dựa vào một máy chủ, hãy ghi thử một bản và xem bản chép lời trong [cửa sổ Bản ghi](/recordings/recordings-window): một cuộc trò chuyện bằng ngôn ngữ mà mô hình biết kém sẽ cho thấy ngay điều đó.
