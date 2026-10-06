---
title: Chẩn đoán
sidebar_position: 1
description: Cửa sổ hiển thị từng lời mà điện thoại và tổng đài nói với nhau, tệp nhật ký và nơi chương trình lưu các tệp của nó.
---

Cửa sổ **Chẩn đoán** hiển thị những gì điện thoại và tổng đài nói với nhau, ngay khi chúng nói. Đây là nơi đầu tiên cần xem khi một tài khoản không đăng ký được hoặc một cuộc gọi không kết nối được, và là cửa sổ mà bộ phận IT sẽ đề nghị bạn gửi.

Cửa sổ này mở từ **Cài đặt → Chẩn đoán**, bằng nút **Mở chẩn đoán**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Cửa sổ Chẩn đoán" />

Nó hiển thị mọi thông điệp SIP mà điện thoại gửi hoặc nhận, ngay khi chúng diễn ra, cùng thống kê âm thanh của các cuộc gọi đang diễn ra. Nó chỉ thu thập khi đang mở và không giữ lại gì sau khi đóng.

## SIP {#sip}

Thẻ **SIP** là nhật ký báo hiệu.

- Mỗi thông điệp là một dòng gồm thời gian (đến từng mili giây), loại thông điệp và nơi nó đi tới: mũi tên chỉ sang phải là do điện thoại gửi, mũi tên chỉ sang trái là nhận từ máy chủ. Bên dưới là `to` hoặc `from` cùng địa chỉ máy chủ và giao vận (ví dụ *qua UDP*).
- Có thể mở rộng một thông điệp để xem đầy đủ các tiêu đề của nó (thông điệp thứ ba trong hình).
- **Tìm** tìm văn bản trong nhật ký.
- **Dọn** làm trống nhật ký.

Ví dụ trong ảnh chụp màn hình là một lần đăng ký thành công: điện thoại gửi `REGISTER`, máy chủ trả lời `200 OK (REGISTER)`.

## Cuộc gọi {#calls}

Thẻ thứ hai, **Cuộc gọi**, hiển thị các chỉ số chất lượng của từng cuộc gọi đang diễn ra.

## Thẻ Chẩn đoán trong cài đặt {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Cài đặt → Chẩn đoán" />

### Mức chi tiết nhật ký {#log-detail}

Danh sách thả xuống chọn lượng thông tin chương trình ghi vào tệp nhật ký; trong hình là **Chi tiết**. Thay đổi có hiệu lực ngay, kể cả với cuộc gọi đang diễn ra — chính là cuộc gọi bạn muốn có bản ghi chép. Mức chi tiết nhất ghi lại mọi thông điệp SIP. Tệp sẽ lớn, nhưng mật khẩu được loại bỏ trước khi ghi bất cứ thứ gì, nên tệp an toàn để gửi kèm yêu cầu hỗ trợ.

**Gửi một bản sao vào nhật ký hệ thống** còn ghi nhật ký vào nhật ký riêng của hệ thống, cho những máy có nhật ký được thu thập tập trung. Tệp bên dưới vẫn được ghi trong cả hai trường hợp, và đó là tệp cần đính kèm vào yêu cầu hỗ trợ.

### Tệp {#files}

Thẻ liệt kê nơi chương trình lưu các tệp của nó và dung lượng của từng tệp. Trên macOS:

| Tệp | Ở đâu | Chứa gì |
| --- | --- | --- |
| Cài đặt | `~/Library/Preferences/ai-softphone/settings.json` | Các cài đặt. Không bao giờ có mật khẩu hay token. |
| Cơ sở dữ liệu | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Danh bạ, lịch sử, bản chép lời và kết quả xử lý. |
| Bản ghi | `~/Library/Application Support/ai-softphone/recordings` | Âm thanh của các bản ghi. |
| Nhật ký | `~/Library/Logs/ai-softphone/ai-softphone.log` | Nhật ký. |

Dưới danh sách, **Mở** hiển thị nhật ký và **Dọn** làm trống nó. Hãy dọn nhật ký ngay trước khi tái hiện sự cố; việc dọn không thể hoàn tác.

## Gửi gì cho bộ phận hỗ trợ {#what-to-send-to-support}

1. Đặt **Mức chi tiết nhật ký** ở mức chi tiết nhất.
2. Nhấn **Dọn**, rồi tái hiện sự cố.
3. Gửi tệp nhật ký, hoặc mở **Cài đặt → Giới thiệu**, viết cho chúng tôi tại đó và đánh dấu **Đính kèm nhật ký** — xem [Giới thiệu](../application/about.md#feedback).

Với sự cố về đăng ký hoặc cuộc gọi, hãy gửi thêm các dòng của lần thử thất bại từ thẻ **SIP**.

Phần chương trình đứng sau tất cả những điều này — dấu vết SIP, thống kê media và các bộ đếm — có thể tắt trong [Mô-đun](../application/modules.md) (**Chẩn đoán**).
