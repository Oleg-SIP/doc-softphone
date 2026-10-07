---
slug: /
title: Tài liệu AI Softphone
sidebar_position: 1
description: AI Softphone là gì, chạy trên hệ thống nào và từng phần của chương trình được mô tả ở đâu.
---

[AI Softphone](https://ai-softphone.com/) là điện thoại phần mềm dành cho tổng đài IP, đồng thời biến mọi cuộc trò chuyện thành văn bản và một bản tóm tắt viết sẵn. Một cuộc trò chuyện có thể đến với chương trình theo ba cách, và cả ba đều về cùng một thư viện, với cùng bản ghi, bản chép lời và kết quả xử lý:

- **cuộc gọi** được thực hiện hoặc nhận trong chương trình, qua bất kỳ tổng đài IP hay nhà cung cấp SIP nào;
- **cuộc họp** trong Zoom, Teams, Meet hay bất kỳ ứng dụng nào khác, được ghi trực tiếp từ máy tính;
- **bản ghi bạn đã có sẵn** — từ điện thoại di động, máy ghi âm hay một hệ thống khác — được thêm vào thư viện.

Bản ghi, bản chép lời và lịch sử được lưu trong một tệp thuộc về bạn. Không cần tài khoản hay gói đăng ký, và chương trình là phần mềm tự do theo giấy phép GPL v2.

## Từ cuộc trò chuyện đến kết quả xử lý {#from-a-conversation-to-a-write-up}

1. Một cuộc trò chuyện đến: cuộc gọi, cuộc họp hoặc một tệp.
2. Nó được ghi trên hai kênh, nên những gì bạn nói và những gì phía bên kia nói được giữ tách riêng.
3. Nó được chép lời, theo từng người nói, khớp với âm thanh.
4. Mô hình ngôn ngữ bạn chọn sẽ xử lý nó: tóm tắt, việc cần làm, hạng mục, nhãn và dấu hiệu cảnh báo — và bạn có thể đặt câu hỏi cho cuộc trò chuyện.

## Tải về và yêu cầu hệ thống {#download-and-system-requirements}

Chương trình được tải về miễn phí từ [ai-softphone.com](https://ai-softphone.com/#download): bộ cài đặt (`.exe`) cho Windows, ảnh đĩa (`.dmg`) cho macOS, và AppImage hoặc `.deb` cho Linux. Bộ cài đặt, ảnh đĩa và AppImage không cần cài thêm gì trước — Qt, OpenSSL và thư viện chạy C++ đã nằm sẵn bên trong. Ngoại lệ là gói `.deb`: gói này dùng thư viện chạy C++ của chính hệ thống, xem bên dưới. Bạn sẽ cần một tài khoản SIP, từ nhà cung cấp của bạn hoặc từ tổng đài do chính bạn vận hành. Việc ghi âm hoạt động ngay khi chương trình được cài đặt; bản chép lời và kết quả xử lý cần một dịch vụ bạn chọn hoặc một mô hình trên chính máy của bạn.

| Hệ thống | Yêu cầu |
| --- | --- |
| macOS | macOS 14.4 trở lên; chỉ Apple silicon — máy Mac dùng chip Intel không mở được, kể cả qua Rosetta; đồ hoạ Metal; 160 MB dung lượng đĩa, cộng thêm các bản ghi. Hệ thống sẽ hỏi quyền dùng micrô một lần. |
| Windows | Windows 10 phiên bản 1809 (bản dựng 17763) trở lên, và Windows 11; bộ xử lý Intel hoặc AMD 64-bit; Direct3D 11 hoặc OpenGL 2.1; 250 MB dung lượng đĩa, cộng thêm các bản ghi. |
| Linux | Ubuntu 22.04 LTS trở lên, Debian 12 trở lên, và mọi bản phân phối cùng thời — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; thư viện GNU C 2.35 trở lên; bộ xử lý Intel hoặc AMD 64-bit; OpenGL 2.1 hoặc OpenGL ES 2.0, trên X11 hoặc Wayland; PipeWire hoặc PulseAudio (ALSA nếu không có cả hai); 200 MB dung lượng đĩa, cộng thêm các bản ghi. Biểu tượng khay hệ thống cần một môi trường desktop có vùng thông báo trạng thái. |

Trên Linux, AppImage chạy được trên mọi bản phân phối cùng thời: hãy cấp quyền thực thi cho nó rồi khởi chạy. Gói `.deb` còn cần thư viện chạy C++ của chính hệ thống từ GCC 13, mà Ubuntu 24.04 và Debian 13 có còn Ubuntu 22.04 thì không; trên bất kỳ hệ thống nào cũ hơn, hãy dùng AppImage.

Giao diện có sẵn bằng ba mươi ngôn ngữ, được chọn trong [Giao diện](/program/appearance) và thay đổi mà không cần khởi động lại.

Ảnh chụp màn hình trong tài liệu này được chụp trên macOS và hiển thị thu nhỏ: hãy nhấp vào một ảnh để xem kích thước đầy đủ. Trên các hệ thống khác, chương trình trông và hoạt động giống hệt.

## Những bước đầu tiên {#first-steps}

1. [Thêm tài khoản](sip-accounts/setup.md) cho tổng đài hoặc nhà cung cấp SIP của bạn.
2. [Chọn micrô và loa](sip-accounts/devices.md) rồi gọi thử một cuộc.
3. Quyết định [những cuộc gọi nào được ghi âm](recordings/call-recording.md).
4. Thêm một [bộ nhận dạng](ai-processing/transcription.md) và một [mô hình ngôn ngữ](ai-processing/processing.md) nếu bạn muốn có bản chép lời và kết quả xử lý.

**Cài đặt → Tổng quan** theo dõi danh sách này giúp bạn: chấm xanh đánh dấu bước đã xong, chấm đỏ là bước còn phải làm. Xem [Tổng quan cài đặt](interface/settings-overview.md).

## Đọc gì tiếp theo {#where-to-read-next}

| Nếu bạn muốn… | Hãy đọc |
| --- | --- |
| Làm quen với các cửa sổ | [Giao diện](interface/main-window.md) |
| Kết nối điện thoại với tổng đài | [Thiết lập tài khoản SIP](sip-accounts/setup.md) |
| Chọn micrô, loa và nhạc chuông | [Thiết bị](sip-accounts/devices.md) |
| Thiết lập codec, chờ cuộc gọi và nhật ký cuộc gọi | [Cài đặt cuộc gọi](sip-accounts/calls.md) |
| Đặt đồng nghiệp lên các nút gọi một chạm | [Nút bấm](sip-accounts/buttons.md) |
| Quyết định cuộc gọi nào được ghi âm, và lưu trong bao lâu | [Ghi âm cuộc gọi](recordings/call-recording.md) |
| Nghe, tìm kiếm và đọc các cuộc trò chuyện của bạn | [Cửa sổ Bản ghi](interface/recordings.md) |
| Ghi một cuộc họp diễn ra trong ứng dụng khác | [Thu âm ngoài](capture/capture.md) |
| Chọn bộ nhận dạng chuyển lời nói thành văn bản | [Gỡ băng](ai-processing/transcription.md) |
| Quyết định AI nào xử lý các cuộc trò chuyện của bạn và được phép tốn bao nhiêu | [Xử lý](ai-processing/processing.md) |
| Thay đổi hạng mục, nhãn và dấu hiệu cảnh báo | [Từ điển](ai-processing/dictionaries.md) |
| Thay đổi bố cục, chủ đề màu, cách khởi động và phím tắt | [Giao diện](program/appearance.md), [Khởi động](program/startup.md) và [Phím tắt](program/shortcuts.md) |
| Kết nối CRM hoặc một chương trình khác | [Webhook](integration/webhooks.md) và [REST API cục bộ](integration/rest-api.md) |
| Xem điện thoại và tổng đài nói gì với nhau | [Chẩn đoán](troubleshooting/diagnostics.md) |
| Tìm nguyên nhân của một sự cố | [Sự cố thường gặp](troubleshooting/common-problems.md) |
| Tắt bớt các phần của chương trình | [Mô-đun](application/modules.md) |
| Kiểm tra phiên bản, bản cập nhật và nội dung báo cáo sử dụng | [Giới thiệu](application/about.md) |

Các trang đi theo thứ tự của các thẻ trong **Cài đặt**.

## Quyền riêng tư {#privacy}

- Theo mặc định, mọi thứ đều ở lại trên máy tính của bạn: bản ghi, bản chép lời và lịch sử nằm trong một tệp thuộc về bạn. Không có gì về cuộc trò chuyện — không một số máy, không một cái tên, không một lời nào đã nói — được gửi đi đâu nếu chính bạn không gửi.
- Mật khẩu tài khoản, giá trị tiêu đề của webhook và token API được giữ trong kho khoá (keyring) của hệ điều hành, không bao giờ nằm trong tệp cài đặt.
- Phiên bản mới tự báo khi xuất hiện — không bao giờ trong lúc đang gọi — và chỉ được cài khi bạn đồng ý.
- Chương trình gửi một báo cáo sử dụng nhỏ mỗi ngày. Bạn được xem nội dung của nó trước khi báo cáo đầu tiên được gửi, và bạn chọn mức độ nó mang theo: **Cơ bản** hoặc **Mở rộng**. Báo cáo không bao giờ chứa số máy, danh bạ, địa chỉ tổng đài của bạn hay bất cứ điều gì được nói trong cuộc trò chuyện. Danh sách đầy đủ có trong [Giới thiệu](/application/about#telemetry).
- Chương trình là phần mềm tự do theo giấy phép GPL v2.
