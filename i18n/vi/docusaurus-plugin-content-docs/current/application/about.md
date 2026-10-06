---
title: Giới thiệu
sidebar_position: 2
description: Phiên bản, cập nhật, quốc gia của bạn, giấy phép, nội dung báo cáo sử dụng, biểu mẫu góp ý và những gì chương trình được dựng bằng.
---

**Cài đặt → Giới thiệu** chứa mọi thông tin về bản thân chương trình.

<Shot name="20_settings_about" alt="Cài đặt → Giới thiệu" />

## Phiên bản và quốc gia {#version-and-country}

Ở trên cùng là tên, **Phiên bản** (trong hình là 1.0.1) và liên kết tới trang web, [ai-softphone.com](https://ai-softphone.com/).

**Quốc gia** cho chương trình biết bạn đang ở đâu. Nó giúp chọn máy chủ cập nhật tốt nhất, và mở đường tới các dịch vụ ngôn ngữ và giọng nói đặt tại quốc gia của bạn. **Tự động nhận biết** sẽ điền giá trị này.

## Cập nhật {#updates}

Thẻ cho biết bạn có đang dùng phiên bản mới nhất không và lần kiểm tra gần nhất là khi nào. **Kiểm tra cập nhật** kiểm tra ngay bây giờ.

**Tự động tìm cập nhật**, mặc định bật, kiểm tra mỗi ngày một lần và ngay sau khi điện thoại khởi động. Nó hỏi máy chủ một tệp nhỏ, và không có gì được tải về hay cài đặt nếu bạn không đồng ý.

## Giấy phép {#licence}

Chương trình là phần mềm tự do theo giấy phép GPL-2.0-or-later. Nó không đi kèm bất kỳ bảo đảm nào, và bạn có thể phân phối lại nó theo các điều khoản của giấy phép đó; toàn văn giấy phép có trong tệp tên `LICENSE`.

## Đo lường từ xa {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Cài đặt → Giới thiệu: nội dung của báo cáo sử dụng" />

Chương trình gửi một báo cáo sử dụng nhỏ mỗi ngày. Bạn được xem nội dung của nó trước khi báo cáo đầu tiên được gửi, và thẻ liệt kê nội dung đó:

| | Những gì được gửi |
| --- | --- |
| **Luôn được gửi** | Việc ứng dụng đã được khởi chạy, phiên bản của nó và ngôn ngữ giao diện; phiên bản hệ điều hành, thiết lập vùng, quốc gia và múi giờ. |
| **Cũng được gửi, ở chế độ Mở rộng** | Bộ đếm cuộc gọi và cuộc trò chuyện đã thu; nhà sản xuất và phiên bản của softswitch đang kết nối, không bao giờ có địa chỉ của nó; số bước đã xong trong [Tổng quan](/interface/settings-overview), và bố cục đã chọn. |
| **Không bao giờ được gửi, ở bất kỳ chế độ nào** | Các số bạn đã gọi hoặc đã gọi cho bạn; tài khoản, mật khẩu, hay bất cứ thứ gì từ kho khoá; danh bạ, cuộc trò chuyện, bản chép lời hay bản ghi; bất cứ thứ gì bạn đã gõ, và mọi dữ liệu riêng tư trên máy tính. |

Mỗi bản cài đặt tự tạo cho mình một mã định danh ngẫu nhiên, để các báo cáo từ cùng một bản sao chương trình có thể được nhận ra là của một bản. Nó không được suy ra từ bất cứ điều gì về bạn hay máy tính của bạn, và không chỉ danh ai — nhưng vì nó tồn tại lâu dài, các báo cáo mang nó có thể được liên kết với nhau. Điều đó khiến chúng là ẩn danh một phần (bút danh) chứ không phải ẩn danh hoàn toàn.

Báo cáo cơ bản dựa trên lợi ích chính đáng: biết phiên bản nào đang được dùng là điều giúp bản sửa lỗi đến được với những người cần nó. Mọi thứ mà báo cáo mở rộng bổ sung đều có mặt vì bạn đã chọn, và bạn có thể thay đổi điều đó tại đây bất cứ lúc nào.

### Báo cáo {#reporting}

| Lựa chọn | |
| --- | --- |
| **Mở rộng** | Báo cáo cơ bản và những gì mục *Cũng được gửi* liệt kê. Được chọn trong hình. |
| **Cơ bản** | Chỉ những gì *Luôn được gửi*. |
| **Tắt** | Không có báo cáo nào. Chỉ có ở phiên bản Enterprise; ở các phiên bản khác, tuỳ chọn này có màu xám. |

## Góp ý {#feedback}

<Shot name="20c_settings_about_bottom" alt="Cài đặt → Giới thiệu: biểu mẫu góp ý và các thành phần chương trình được dựng bằng" />

Một biểu mẫu để viết cho các nhà phát triển mà không cần rời khỏi chương trình.

| Trường | |
| --- | --- |
| **Chủ đề** và **Nội dung** | Điều bạn muốn nói. |
| **Tên của bạn** và **Địa chỉ để trả lời** | Cả hai đều không bắt buộc. Không có địa chỉ thì không có cách nào trả lời bạn. |
| **Đính kèm nhật ký** | Thêm phần cuối của nhật ký, khoảng 512 kB. Xem [Chẩn đoán](/troubleshooting/diagnostics). |

**Gửi** giữ màu xám cho tới khi có nội dung để gửi.

## Được dựng bằng {#built-with}

Các thành phần mà chương trình được dựng trên đó, mỗi thành phần kèm giấy phép của nó: Qt 6 (GPL-2.0 hoặc GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (phạm vi công cộng), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later) và PulseAudio client (LGPL-2.1-or-later). Mỗi thành phần được dùng theo giấy phép ghi bên cạnh; khi một thành phần có nhiều giấy phép, giấy phép được nêu tên là giấy phép được chọn.
