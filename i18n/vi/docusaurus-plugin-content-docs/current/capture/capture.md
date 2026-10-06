---
title: Thu âm ngoài
sidebar_label: Thu từ ứng dụng khác
sidebar_position: 1
description: Thu âm ngoài ghi lại cuộc trò chuyện diễn ra trong ứng dụng khác — Zoom, Teams, Meet hay bất kỳ ứng dụng nào — trực tiếp từ máy tính.
---

**Thu âm ngoài** là cách AI Softphone ghi lại cuộc trò chuyện diễn ra trong một chương trình khác, chẳng hạn cuộc họp trong Zoom, Teams hay Meet. Chương trình ghi trực tiếp từ máy tính, giữ phía bên kia và bạn trên hai kênh riêng, và cuối cùng bạn cũng nhận được bản chép lời và kết quả xử lý như với một cuộc gọi.

Chương trình tìm một cuộc trò chuyện chứ không tìm tên của một ứng dụng, nên nó hoạt động với bất cứ thứ gì tạo ra cuộc trò chuyện.

Trang [Tổng quan](../interface/settings-overview.md) của phần cài đặt liệt kê mục này dưới **Thu từ ứng dụng khác** và chia nó thành ba bước:

1. **Bật thu từ ứng dụng** — [cho phép thu âm thanh](#turning-capture-on).
2. **Thu một cuộc trò chuyện** — [bắt đầu và dừng](#capturing-a-conversation) một bản ghi.
3. **Đặt tên cho nó** — [đổi tên](#giving-it-a-name) bản ghi.

## Bật thu âm ngoài {#turning-capture-on}

Thu âm ngoài ở trạng thái tắt cho tới khi bạn cho phép. Mở **Cài đặt → Thu âm ngoài**.

<Shot name="10_settings_capture" alt="Cài đặt → Thu âm ngoài" />

| Cài đặt | Mặc định | Tác dụng |
| --- | --- | --- |
| **Cho phép thu âm thanh** | tắt | Cho phép chương trình ghi âm thanh của các ứng dụng khác. Khi tắt, không có gì được thu. |
| **Nhắc tôi báo cho người khác về việc ghi âm** | bật | Hiển thị lời nhắc trong khi đang thu. Ô đánh dấu này có màu xám cho tới khi thu âm được cho phép. |

:::caution
Mọi thứ máy tính phát ra đều được ghi lại, không chỉ cuộc trò chuyện. Điện thoại này không thể thông báo việc ghi âm vào cuộc họp của người khác, nên việc báo cho mọi người là phần của bạn.
:::

Phần chương trình làm việc này là mô-đun **Thu âm ngoài**, *Ghi lại cuộc trò chuyện đang diễn ra trong ứng dụng khác*. Nó có thể tắt trong [Mô-đun](../application/modules.md).

## Bắt đầu thu {#starting-a-capture}

Khi thu âm đã được cho phép, phần dưới của [cửa sổ chính](../interface/main-window.md#capture) hiển thị trạng thái của nó — **Thu âm ngoài · sẵn sàng** — với nút **Ghi** ở bên phải. Nhấn **Ghi** để bắt đầu bằng tay.

### Bắt đầu tự động {#automatic-start}

**Bắt đầu tự động** quyết định điều gì xảy ra khi chương trình nghe thấy một cuộc trò chuyện trong ứng dụng khác:

| Lựa chọn | Điều gì xảy ra |
| --- | --- |
| **Không bao giờ** | Chỉ bắt đầu thu khi bạn nhấn **Ghi**. |
| **Hỏi tôi** | Chương trình hỏi có ghi lại hay không. Mặc định. |
| **Luôn luôn** | Chương trình tự bắt đầu ghi. |

Ở mục **Ứng dụng có câu trả lời riêng**, một ứng dụng có thể được gán câu trả lời riêng — ví dụ *Luôn ghi âm ứng dụng này* từ câu hỏi mà chương trình đặt ra.

*Việc hỏi không làm mất gì: những giây trước khi bạn trả lời đã được giữ lại.*

### Trước lúc bắt đầu {#before-the-start}

Thanh trượt **Trước lúc bắt đầu** là số giây âm thanh được giữ lại từ trước khi bản ghi bắt đầu, mặc định **15 giây**. Nó có mặt để không mất gì trong lúc cuộc trò chuyện đang được nhận ra: bản ghi bắt đầu khi bạn nhấn **Ghi**, hoặc khi bạn trả lời câu hỏi, vẫn mở đầu bằng những lời nói trước đó.

## Thu một cuộc trò chuyện {#capturing-a-conversation}

Trong khi ghi, cửa sổ chính hiển thị một chấm đỏ, tên bản ghi (ví dụ **Cuộc họp trong Zoom**), thời gian đã trôi qua và hai kênh dưới dạng sóng âm.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Đang ghi một cuộc họp" />

- **Ngừng ghi** kết thúc việc ghi.
- Cửa sổ luôn hiển thị trong khi ghi, và nhắc bạn báo cho những người tham gia biết cuộc họp đang được ghi lại.

### Hình hiển thị những gì {#what-the-picture-shows}

Hai cài đặt nữa chọn cách vẽ mức âm thanh:

| Cài đặt | Mặc định | Ở đâu |
| --- | --- | --- |
| **Hình trong cửa sổ chính** | Sóng | Hai kênh trong khi đang thu. |
| **Hình trên dải ở chân điện thoại** | Hai mức | Hai thanh mảnh dưới **Thu âm ngoài · sẵn sàng**. |

### Kiểm tra {#testing-it}

Ở mục **Thử**, thẻ có hai thanh: **Bạn** và **Phía bên kia**. *Thanh trên động khi bạn nói, thanh dưới động khi có gì đó đang phát.* Trước một cuộc họp quan trọng, hãy nói một tiếng và phát một âm thanh bất kỳ để chắc rằng chương trình nghe được cả hai phía.

## Đặt tên {#giving-it-a-name}

Bút chì cạnh tên bản ghi cho phép bạn đổi tên nó ngay trong lúc đang ghi. Bản ghi bạn không đặt tên được liệt kê là **Ứng dụng khác**.

## Bản ghi đi đâu {#where-the-recording-goes}

Cuộc trò chuyện đã thu xuất hiện trong [cửa sổ Bản ghi](../recordings/recordings-window.md) như mọi cuộc khác, với biểu tượng riêng — một cửa sổ thay cho ống nghe — và với tiêu đề bạn đã đặt hoặc **Ứng dụng khác**.

<Shot name="01_recordings" alt="Các cuộc họp đã thu trong thẻ Bản ghi, được đánh dấu bằng biểu tượng cửa sổ" />

Nó được chép lời, tóm tắt, xếp vào hạng mục và gắn nhãn bởi cùng các [quy tắc](../ai-processing/processing.md#rules) như một cuộc gọi. Trong bản chép lời của cuộc họp đã thu, người nói được hiển thị là **Ứng dụng khác** ở chỗ một cuộc gọi sẽ hiển thị tên của bên kia; ô **Tìm** của thư viện cũng tìm được những gì đã nói trong đó.
