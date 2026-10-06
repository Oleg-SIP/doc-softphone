---
title: Cài đặt cuộc gọi
sidebar_position: 3
description: Các codec đề nghị với tổng đài, điều xảy ra khi có cuộc gọi thứ hai, tự quay lại và thời gian lưu nhật ký cuộc gọi.
---

**Cài đặt → Cuộc gọi** chứa các cài đặt áp dụng cho mọi cuộc gọi, bất kể cuộc gọi trên tài khoản nào.

## Định dạng âm thanh {#audio-formats}

<Shot name="07_settings_calls" alt="Cài đặt → Cuộc gọi: định dạng âm thanh" />

Danh sách các codec mà điện thoại đề nghị với đầu bên kia. Các codec được *đề nghị theo thứ tự này*, và đầu bên kia chọn trong những gì bạn đề nghị: codec càng đứng cao thì càng có khả năng được dùng.

- **Ô đánh dấu** bật hoặc tắt một codec. Codec đã tắt sẽ không được đề nghị.
- **▲** và **▼** di chuyển codec lên hoặc xuống trong danh sách.
- *băng rộng* ở bên phải đánh dấu codec có dải âm rộng hơn đường dây điện thoại: giọng nói rõ hơn.

| Codec | Tần số lấy mẫu | Mặc định bật |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, băng rộng | có |
| **G722** | 16 kHz, băng rộng | có |
| **PCMU** | 8 kHz | có |
| **PCMA** | 8 kHz | có |
| **speex** | 16 kHz, băng rộng | không |
| **speex** | 8 kHz | không |
| **speex** | 32 kHz, băng rộng | không |
| **iLBC** | 8 kHz | không |
| **GSM** | 8 kHz | không |
| **L16** | 44 kHz, stereo, băng rộng | không |
| **L16** | 44 kHz, băng rộng | không |

Bảng được sắp theo thứ tự mặc định khi cài chương trình.

Codec được thoả thuận khi cuộc gọi bắt đầu, nên thay đổi có hiệu lực từ cuộc gọi tiếp theo của bạn. Nếu cuộc gọi nghe kém, hãy chỉ bật những codec mà tổng đài của bạn dùng.

## Chờ cuộc gọi {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Cài đặt → Cuộc gọi: chờ cuộc gọi, tự quay lại và lịch sử" />

*Điều xảy ra khi có người gọi đến trong lúc bạn đang trong một cuộc gọi.* Danh sách thả xuống chọn điều đó; mặc định là **Đổ chuông cuộc gọi thứ hai**. Lệnh gọi nội bộ (intercom) từ chính tổng đài của bạn luôn được chuyển tới, bất kể bạn chọn gì — đó là cách một cuộc gọi thực hiện từ bảng điều khiển CTI đến được điện thoại này.

## Tự quay lại {#autodial}

Khi cuộc gọi không kết nối được, khung của nó đề nghị tiếp tục quay số cho tới khi được. Hai thanh trượt quyết định cách làm:

- **Chờ giữa các lần thử** — mặc định 15 giây;
- **Bỏ cuộc sau** — mặc định 30 phút.

## Lịch sử {#history}

Nhật ký cuộc gọi là bằng chứng, nên không có gì bị xoá khỏi nó trừ khi bạn yêu cầu tại đây.

- **Thời hạn lưu giữ** chọn thời gian [nhật ký cuộc gọi](/interface/contacts-history#history) giữ một cuộc gọi. Mặc định là **Luôn luôn**.
- **Dọn lịch sử cuộc gọi** xoá mọi cuộc gọi cùng lúc, bất kể thời hạn đã đặt. Thao tác này không thể hoàn tác.
