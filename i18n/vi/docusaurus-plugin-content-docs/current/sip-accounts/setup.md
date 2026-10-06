---
title: Thiết lập tài khoản SIP
sidebar_position: 1
description: Kết nối AI Softphone với tổng đài IP hoặc nhà cung cấp SIP của bạn trong Cài đặt → Tài khoản.
---

AI Softphone làm việc với mọi tổng đài IP hay nhà cung cấp SIP. Bạn có thể đăng nhập bao nhiêu tài khoản (đường dây) tuỳ theo số bạn có, và mỗi tài khoản có cài đặt riêng.

Mở **Cài đặt → Tài khoản**.

<Shot name="05_settings_accounts" alt="Cài đặt → Tài khoản: hai tài khoản, cả hai đều đã đăng ký" />

## Danh sách tài khoản {#the-list-of-accounts}

Mỗi tài khoản là một hàng gồm:

- một **ô đánh dấu** để bật hoặc tắt tài khoản;
- một **chấm** chuyển sang xanh khi tài khoản đã đăng ký trên tổng đài;
- tên, và bên dưới là `username@server`;
- nút **Ngắt kết nối** để đăng xuất tài khoản khỏi tổng đài;
- các nút **▲** và **▼** để di chuyển tài khoản lên hoặc xuống trong danh sách. Các ô tài khoản trong [cửa sổ chính](../interface/main-window.md) theo cùng thứ tự này.

Nút **Thêm** ở góc trên bên phải thêm một tài khoản. Nhấp vào một hàng để mở biểu mẫu của nó ngay bên dưới.

## Thêm tài khoản {#adding-an-account}

<Shot name="05d_account_add" alt="Biểu mẫu của một tài khoản mới, còn trống" />

Nhấn **Thêm**. Một biểu mẫu trống mở ra dưới danh sách, con trỏ nằm ở **Tên (không bắt buộc)**. Điền các trường dưới đây, mở **Cài đặt máy chủ** nếu tổng đài cần, rồi nhấn **Lưu**. Tài khoản mới bắt đầu với các giá trị thông thường: UDP trên cổng 5060, đăng ký được gia hạn mỗi 300 giây.

## Biểu mẫu tài khoản {#the-account-form}

<Shot name="05b_account_edit" alt="Biểu mẫu của một tài khoản" />

| Trường | Cần nhập gì |
| --- | --- |
| **Tên (không bắt buộc)** | Tên hiển thị trên ô của tài khoản trong cửa sổ chính và trên các cuộc gọi của nó. Nếu để trống, tài khoản được hiển thị dạng `username@server`. |
| **Tên đăng nhập** | Tên đăng nhập hoặc số máy lẻ do tổng đài hoặc nhà cung cấp cấp cho bạn. |
| **Mật khẩu** | Mật khẩu tương ứng. Trường này để trống khi bạn quay lại biểu mẫu. Mật khẩu được giữ trong kho khoá của máy tính, không bao giờ nằm trong tệp cài đặt. |
| **Địa chỉ máy chủ** | Địa chỉ của tổng đài hoặc máy chủ SIP của nhà cung cấp, ví dụ `pbx.example.com`. |
| **Cài đặt máy chủ** | Mở rộng các cài đặt kết nối ít dùng hơn; xem bên dưới. |
| **Trả lời tự động** | Nằm ở mục **Việc trả lời**: trả lời các cuộc gọi đến trên tài khoản này mà bạn không cần nhấn gì. Mặc định tắt. |

Nhấn **Lưu** để giữ các thay đổi. **Huỷ** bỏ chúng và **Xoá** xoá tài khoản.

Khi chấm cạnh tài khoản chuyển sang xanh, tài khoản đã đăng ký và ô của tài khoản trong cửa sổ chính cũng cho thấy điều đó. Nếu chấm vẫn xám hoặc đỏ, hãy mở [Chẩn đoán](../troubleshooting/diagnostics.md): thẻ **SIP** hiển thị yêu cầu `REGISTER` và câu trả lời của máy chủ.

## Cài đặt máy chủ {#server-settings}

Phần lớn tổng đài không cần gì ở đây. Nhấn **Cài đặt máy chủ** để hiện chúng; chính nút đó khi ấy đổi thành **Ẩn cài đặt máy chủ**.

<Shot name="05c_account_server_settings" alt="Cài đặt máy chủ của một tài khoản, đã mở rộng" />

| Trường | Mặc định | Ý nghĩa |
| --- | --- | --- |
| **Người dùng xác thực** | trống | Tên mà tổng đài dùng để kiểm tra mật khẩu, khi nó khác với **Tên đăng nhập**. Trong hình, số máy lẻ là `201` và tổng đài xác thực nó dưới tên `vanphong201`. |
| **Giao vận** | UDP | Giao thức kết nối đến máy chủ. Một danh sách thả xuống. |
| **Cổng** | 5060 | Cổng của máy chủ. |
| **Proxy đi ra** | trống | Proxy mà mọi yêu cầu phải đi qua, nếu nhà cung cấp của bạn có cung cấp. |
| **Máy chủ đăng ký** | trống | Địa chỉ để đăng ký, nếu nó không phải là **Địa chỉ máy chủ**. |
| **Đăng ký lại, giây** | 300 | Điện thoại gia hạn đăng ký bao lâu một lần. |
| **Âm bàn phím** | Luồng âm thanh | Cách gửi các âm bàn phím đến tổng đài. Một danh sách thả xuống. Chỉ đổi khi tổng đài không nghe thấy các âm này. |

Các codec mà điện thoại đề nghị không thiết lập riêng cho từng tài khoản; chúng nằm trong [Cài đặt cuộc gọi](calls.md#audio-formats).
