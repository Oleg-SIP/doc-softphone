---
title: Personal Prompt Studio
sidebar_position: 3
description: Các chỉ dẫn xử lý cuộc trò chuyện của bạn, các quy tắc chạy chúng, và cách biến chúng thành của riêng bạn.
---

**Personal Prompt Studio** là phần của AI Softphone xử lý các cuộc trò chuyện theo cách của bạn. Kết quả xử lý được tạo ra bởi các chỉ dẫn: chương trình đi kèm mười một chỉ dẫn, sẵn sàng dùng ngay khi đã kết nối bộ nhận dạng và mô hình ngôn ngữ, và bạn có thể sửa chúng bằng ngôn ngữ thông thường, nhân bản chúng và thêm chỉ dẫn của riêng mình. Chúng được liệt kê ở mục **Chỉ dẫn** trong [Cài đặt → Xử lý](processing.md#prompts).

LLM của bạn, khoá của bạn, quyền kiểm soát của bạn: hãy kết nối mô hình bạn thích bằng khoá của chính bạn, qua một dịch vụ được hỗ trợ hoặc một API tương thích — hoặc một mô hình triển khai bên trong tổ chức của bạn. Khi cả [việc chép lời](transcription.md#your-own-models) cũng chạy trên phần cứng của bạn, cả âm thanh lẫn bản chép lời đều ở lại trong môi trường của bạn.

<Shot name="12b_settings_processing_prompts" alt="Danh sách chỉ dẫn trong Cài đặt → Xử lý" />

## Các chỉ dẫn đi kèm chương trình {#the-prompts-that-come-with-the-program}

Cột thứ hai là những gì danh sách hiển thị dưới tên của chỉ dẫn: nó viết gì, và ở dạng nào.

| Chỉ dẫn | Dạng | Nội dung viết ra |
| --- | --- | --- |
| **Tóm tắt** | Văn xuôi | Các ý chính, quyết định và bước tiếp theo trong một đoạn ngắn. |
| **Tóm tắt một dòng** | Văn xuôi | Một tiêu đề ngắn để nhận ra cuộc trò chuyện trong danh sách. |
| **Việc cần làm** | Các mục | Ai đã đồng ý làm gì, khi nào, kèm lời họ đã nói. |
| **Chủ đề** | Các mục | Những vấn đề đã được đề cập, trong vài từ. |
| **Tên và con số** | JSON | Người, công ty, ngày tháng, số tiền và mã tham chiếu. |
| **Hạng mục** | Nhãn | Xếp cuộc trò chuyện vào một trong các [hạng mục](dictionaries.md) của bạn. |
| **Nhãn** | Nhãn | Gắn các [nhãn](dictionaries.md) của bạn lên nó để sau này có thể tìm thấy. |
| **Dấu hiệu cảnh báo** | Dấu hiệu | Các vấn đề, kèm bằng chứng và thời điểm trong cuộc trò chuyện. |
| **Một câu hỏi về cuộc gọi này** | Câu trả lời | Trả lời câu hỏi bạn đặt về một cuộc trò chuyện, dựa trên bản chép lời của nó. |
| **Chất lượng bán hàng** | Tiêu chí | Đánh giá cuộc trò chuyện theo các tiêu chí bán hàng mà bạn có thể sửa. |
| **Chất lượng hỗ trợ** | Tiêu chí | Đánh giá vấn đề đã được hiểu và xử lý tốt đến đâu. |

Các dạng là những khuôn câu trả lời cố định, nhờ đó chương trình lưu được và sau này tìm được: **Nhãn** là các mã lấy từ một trong các danh sách của bạn, **Dấu hiệu** là các mã kèm mức độ nghiêm trọng, **Tiêu chí** là một điểm số kèm lý do và điểm cho từng tiêu chí, **Câu trả lời** là lời đáp kèm những câu nói làm căn cứ. Các hướng dẫn cho mô hình biết khuôn câu trả lời được lưu trong [Từ điển](dictionaries.md#answer-shapes-and-language).

Cuộc gọi thực hiện trong AI Softphone, cuộc họp [thu](/capture/) từ máy tính và bản ghi được nhập vào đều đi qua cùng các chỉ dẫn này khi đã có bản chép lời.

Việc cần làm ghi lại những gì đã thống nhất — chúng không gửi tin nhắn, đặt lịch hẹn hay tạo phiếu yêu cầu thay bạn.

## Biến nó thành của bạn {#making-it-yours}

- Sửa điều mà một chỉ dẫn yêu cầu, bằng ngôn ngữ thông thường: nó tìm gì, định dạng câu trả lời và ngôn ngữ trả lời.
- Nhân bản một chỉ dẫn để thử một biến thể.
- Chọn mô hình cho từng chỉ dẫn — trên máy của bạn hoặc trên đám mây.
- Đặt thứ tự chạy các chỉ dẫn, bật và tắt chúng, và đặt điều kiện cho chúng — việc này làm bằng các [quy tắc](processing.md#rules): ví dụ, đánh giá bán hàng chỉ chạy với các cuộc gọi được xếp vào **Bán hàng**.
- Giữ các hạng mục, nhãn và dấu hiệu cảnh báo của riêng bạn trong [Từ điển](dictionaries.md).
- Giới hạn chi phí bằng [hạn mức hằng tháng](processing.md#limits).

Các chỉ dẫn và quy tắc ban đầu có thể được khôi phục bằng **Khôi phục mặc định** ở mục **Mặc định** trong [Cài đặt → Xử lý](processing.md#defaults).
