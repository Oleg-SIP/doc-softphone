---
title: Cửa sổ Bản ghi
sidebar_position: 2
description: Thư viện các cuộc trò chuyện — lọc, phát, đọc bản chép lời và kết quả xử lý.
---

**Bản ghi** là nơi lưu mọi cuộc trò chuyện, dù nó đến bằng cách nào: một cuộc gọi, một cuộc họp thu từ ứng dụng khác, hay một tệp được nhập vào. Mỗi cuộc trò chuyện được liệt kê kèm kết quả xử lý đã làm sẵn.

<Shot name="01_recordings" alt="Thẻ Bản ghi: danh sách các cuộc trò chuyện" />

## Tìm một cuộc trò chuyện {#finding-a-conversation}

Thanh ở phía trên có bốn bộ lọc, một ô tìm kiếm và một menu:

| Điều khiển | Thu hẹp danh sách theo |
| --- | --- |
| **Loại** | cách cuộc trò chuyện đến |
| **Khoảng thời gian** | ngày |
| **Hạng mục** | hạng mục mà cuộc trò chuyện được xếp vào — xem [Từ điển](../ai-processing/dictionaries.md) |
| **Dấu** | các dấu mà cuộc trò chuyện mang |
| **Tìm** | những gì đã được nói trong đó — việc tìm kiếm đi qua bản chép lời của mọi thứ bạn đã ghi |

Nút **⋮** ở bên phải thanh mở thêm các thao tác cho danh sách: **Nhập từ tệp**, **Xuất ra CSV** và **Mở trong trình duyệt**.

## Danh sách {#the-list}

Mỗi hàng hiển thị:

- một biểu tượng cho loại cuộc trò chuyện: ống nghe cho cuộc gọi, cửa sổ cho cuộc họp trong ứng dụng khác;
- tiêu đề — tên của bên kia, hoặc số máy, hoặc **Ứng dụng khác** cho cuộc họp đã thu — và bên dưới là ngày cùng bản tóm tắt một dòng;
- ở bên phải là hạng mục kèm điểm số (một con số, ví dụ *Hỗ trợ · 2*), rồi đến các nhãn, và cuối cùng là thời lượng.

Các nhãn vẽ màu đỏ là **Dấu hiệu cảnh báo** (trong hình là *Khách giận dữ* và *Nguy cơ rời bỏ*); các nhãn còn lại là nhãn thông thường (*Than phiền*, *Đã hứa gọi lại*). Cuộc trò chuyện chưa có tóm tắt và hạng mục là cuộc chưa được xử lý — hàng đầu tiên trong hình.

## Trình phát {#the-player}

Chọn một hàng để mở trình phát dưới danh sách.

<Shot name="02_recording_details" alt="Một bản ghi được chọn: trình phát và bản chép lời dưới danh sách" />

- Hai dạng sóng là hai kênh của bản ghi, mỗi kênh cho một bên của cuộc trò chuyện. Thanh bên dưới dùng để cuộn một bản ghi dài.
- **▶** phát và tạm dừng; các mốc thời gian bên trái là vị trí hiện tại và tổng thời lượng.
- **1×** thay đổi tốc độ; **Cả hai** chọn kênh bạn nghe.
- Nút hình đĩa lưu âm thanh, **×** đóng trình phát.

## Bản chép lời và kết quả xử lý {#the-transcript-and-the-write-up}

Dưới trình phát là bản chép lời, mỗi lượt lời một dòng, kèm thời điểm được nói và tên người nói (**Bạn**, tên của bên kia hoặc, với cuộc họp đã thu, **Ứng dụng khác**). Nhấp vào một dòng để nghe đúng khoảnh khắc đó; dòng ở dưới đầu phát được làm nổi bật và từ đang được nói được đánh dấu bên trong.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Bản chép lời bên cạnh âm thanh" />

Danh sách thả xuống phía trên bản chép lời chọn nội dung hiển thị — bản chép lời do một trong các [bộ nhận dạng](../ai-processing/transcription.md) của bạn tạo ra (ngôi sao đánh dấu bản chép lời chính của bản ghi), hoặc một kết quả xử lý như **Hành động**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Các việc cần làm mà cuộc trò chuyện để lại" />

Bốn biểu tượng ở bên phải danh sách thả xuống:

| Biểu tượng | Tác dụng |
| --- | --- |
| Lấp lánh | Cho mô hình viết mục đã chọn ngay bây giờ. |
| Hai tờ giấy | Sao chép nó. |
| Đĩa | Lưu nó vào tệp. |
| Thùng rác | Xoá nó. |

Bạn có thể xuất bản chép lời dưới dạng văn bản thuần hoặc phụ đề.

Kết quả xử lý được tạo bởi các [chỉ dẫn](/ai-processing/prompt-studio) và mô hình bạn thiết lập trong [Xử lý](../ai-processing/processing.md), bởi các [quy tắc](../ai-processing/processing.md#rules) tự chạy hoặc chạy khi bạn yêu cầu. Thời gian giữ bản ghi được thiết lập trong [Ghi âm cuộc gọi](../recordings/call-recording.md#retention).

## Bản ghi bạn đã có sẵn {#a-recording-you-already-have}

Một bản ghi được tạo ở nơi khác — trên điện thoại di động, máy ghi âm hay một hệ thống khác — có thể được thêm bằng **⋮ → Nhập từ tệp**. Nó được lưu y như một cuộc gọi đã quay số: được chép lời, được xử lý và tìm thấy bằng cùng một ô tìm kiếm.

## Xoá một bản ghi {#deleting-a-recording}

Khi một bản ghi bị xoá, mọi thứ được tạo ra từ nó cũng bị xoá theo: bản chép lời và kết quả xử lý.
