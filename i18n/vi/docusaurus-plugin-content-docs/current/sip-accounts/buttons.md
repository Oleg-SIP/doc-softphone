---
title: Nút bấm
sidebar_position: 4
description: Nút BLF — các nút một chạm gọi một số máy lẻ trên tổng đài IP và cho biết số đó đang rảnh, đang đổ chuông hay đang bận.
---

Nút bấm là các phím **BLF** (Busy Lamp Field) của điện thoại phần mềm, cùng chức năng như trên điện thoại bàn nối với tổng đài IP. Một nút gọi một số máy lẻ chỉ bằng một lần nhấn. Nút theo dõi đường dây của nó còn hiển thị một đèn: điện thoại hỏi tổng đài về số máy lẻ đó và cho biết nó đang rảnh, đang đổ chuông hay đang bận, giống như bàn điều khiển của lễ tân hoặc các phím lập trình được trên điện thoại bàn.

BLF cần được tổng đài hỗ trợ: tổng đài phải báo trạng thái của số máy lẻ cho điện thoại. Phần lớn tổng đài IP đều làm được. Nếu tổng đài của bạn không hỗ trợ, đèn sẽ giữ màu xám và nút vẫn gọi được.

Các nút bấm nằm dưới các ô tài khoản trong [cửa sổ chính](/interface/main-window), và **Cài đặt → Nút bấm** là nơi bạn tạo chúng.

<Shot name="08_settings_buttons" alt="Cài đặt → Nút bấm: hai nút" />

Mỗi hàng là một nút: đèn, nhãn của nút, và ở bên phải là số máy cùng tài khoản của nó — ví dụ *212 · 201 Văn phòng*. **▲** và **▼** di chuyển nút lên hoặc xuống; các nút trong cửa sổ chính theo thứ tự này. **Thêm** tạo một nút mới.

## Đèn {#the-lamp}

Nút theo dõi đường dây của nó sẽ hiển thị một đèn:

| Đèn | Đường dây đang |
| --- | --- |
| Xanh lá | rảnh |
| Hổ phách | đổ chuông |
| Đỏ | trong cuộc gọi |
| Xám | không rõ: tổng đài không cho biết |

## Thêm nút {#adding-a-button}

<Shot name="08b_button_add" alt="Biểu mẫu của một nút mới" />

Nhấn **Thêm**; một biểu mẫu mở ra dưới danh sách.

| Trường | Cần nhập gì |
| --- | --- |
| **Số máy** | Số cần gọi. |
| **Đường dây** | Tài khoản dùng để thực hiện cuộc gọi. Hãy chọn trường này trước: để hiển thị đèn, điện thoại hỏi tổng đài của đường dây đó về số này, nên nó phải biết là đường dây nào. |
| **Nhãn** | Chữ trên nút, ví dụ tên của người đó. Nút chỉ đủ chỗ cho một nhãn ngắn; nhãn dài hơn sẽ bị cắt bớt. |
| **Hiện đường dây này có bận không** | Một công tắc. Bật thì nút có đèn. Tắt thì nút chỉ gọi. |

**Lưu** giữ màu xám cho tới khi biểu mẫu được điền đủ. **Huỷ** bỏ biểu mẫu.

Phần chương trình hiển thị các nút bấm có thể tắt trong [Mô-đun](/application/modules).
