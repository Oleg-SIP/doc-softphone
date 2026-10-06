---
title: Danh bạ và lịch sử
sidebar_position: 2
description: Sổ địa chỉ và nhật ký cuộc gọi, ngay cạnh điện thoại.
---

**Danh bạ** và **Lịch sử** mở thành hai thẻ ở bên phải điện thoại, nên bạn có thể tra một số trong lúc đang nói chuyện.

## Danh bạ {#contacts}

<Shot name="03_contacts" alt="Thẻ Danh bạ" />

- **Tìm** lọc danh sách ngay khi bạn gõ.
- **Thêm** tạo một liên hệ.
- Mỗi liên hệ được liệt kê với tên và, bên dưới, số máy cùng tài khoản dùng để gọi liên hệ đó, ví dụ *231 · 201 Văn phòng*.

Cuộc gọi đến từ một số đã biết sẽ hiển thị tên liên hệ, danh sách cuộc gọi gần đây và nhật ký cuộc gọi cũng vậy — đó là cách nhận diện người gọi hoạt động.

### Sửa một liên hệ {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Một liên hệ đang mở để sửa" />

Chọn một liên hệ để hiện bút chì và ống nghe ở bên phải hàng của nó. Ống nghe gọi liên hệ; bút chì mở biểu mẫu bên dưới hàng:

| Trường | Cần nhập gì |
| --- | --- |
| **Tên** | Liên hệ được hiển thị như thế nào. |
| **Số máy** | Số cần gọi. |
| Danh sách thả xuống dưới **Số máy** | Tài khoản dùng để gọi liên hệ. |

**Lưu** giữ các thay đổi, **Huỷ** bỏ chúng và **Xoá** xoá liên hệ.

## Lịch sử {#history}

<Shot name="21_history" alt="Thẻ Lịch sử" />

Nhật ký cuộc gọi, mới nhất ở trên. Ở phía trên cùng:

- danh sách thả xuống, mặc định là **Mọi cuộc gọi**, thu hẹp danh sách về một loại cuộc gọi;
- **Tìm** lọc theo những gì bạn gõ.

Mỗi mục có một biểu tượng cho loại cuộc gọi — ống nghe gọi đi, hoặc ống nghe đỏ có đồng hồ cho cuộc gọi nhỡ — tên của bên kia (hoặc số máy), và bên dưới là ngày, kết cục của cuộc gọi, thời lượng, số máy và tài khoản. Các cuộc gọi gần đây hiển thị dạng *Hôm qua, 22:33* hoặc theo thứ trong tuần, các cuộc cũ hơn hiển thị ngày.

| Kết cục của cuộc gọi | Hiển thị là |
| --- | --- |
| Bạn đã nói chuyện | **đi** hoặc đến, cùng thời lượng, ví dụ *48 s* |
| Cuộc gọi đến không được trả lời | **Nhỡ** |
| Cuộc gọi bạn thực hiện không kết nối được | **Không thành** |

Chọn một mục để hiện bốn nút ở bên phải của nó:

| Nút | Tác dụng |
| --- | --- |
| Hình người có dấu cộng | Thêm số vào [Danh bạ](#contacts). |
| ▶ | Phát bản ghi của cuộc gọi, nếu cuộc gọi đã được ghi âm. |
| Thùng rác | Xoá mục. |
| Ống nghe | Gọi lại số đó. |

### Nhật ký được giữ trong bao lâu {#how-long-the-log-is-kept}

Nhật ký cuộc gọi là bằng chứng, nên không có gì bị xoá khỏi nó trừ khi bạn yêu cầu: mặc định là giữ mọi cuộc gọi. Thời hạn lưu giữ và nút **Dọn lịch sử cuộc gọi** nằm trong [Cài đặt cuộc gọi](../sip-accounts/calls.md#history).

Cuộc gọi nhỡ và cuộc gọi bị từ chối cũng có thể đọc qua [REST API cục bộ](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
