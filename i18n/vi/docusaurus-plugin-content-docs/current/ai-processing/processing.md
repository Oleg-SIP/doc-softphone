---
title: Xử lý
sidebar_position: 2
description: Xử lý tự động các cuộc trò chuyện, hạn mức chi tiêu hằng tháng, mô hình ngôn ngữ, chỉ dẫn và các quy tắc chạy chúng.
---

**Cài đặt → Xử lý** quyết định điều gì xảy ra với một cuộc trò chuyện sau khi nó đã được ghi, mô hình nào làm việc, và được phép tốn bao nhiêu.

<Shot name="12_settings_processing" alt="Cài đặt → Xử lý" />

## Xử lý các cuộc trò chuyện tự động {#process-conversations-automatically}

- **Tắt:** không có gì xảy ra cho tới khi bạn yêu cầu trong [cửa sổ Bản ghi](../recordings/recordings-window.md).
- **Bật:** các [quy tắc](#rules) bên dưới tự chạy. Đó là điều biến một cuộc trò chuyện thành bản tóm tắt, hạng mục và mọi thứ khác mà không ai phải nhấn gì. Mô hình trên đám mây tính phí cho từng bước như vậy.

Dưới ô đánh dấu, chương trình hiển thị số đã chi trong tháng này và cho bao nhiêu yêu cầu, ví dụ *Tháng này: 40.492 token, qua 84 yêu cầu, không tính phí.*

## Hạn mức {#limits}

| Trường | Ý nghĩa |
| --- | --- |
| **Hạn mức tiền, mỗi tháng** | Số tiền tối đa các mô hình được tốn trong một tháng. |
| **Hạn mức token, mỗi tháng** | Số token tối đa chúng được dùng trong một tháng. |

Có hai hạn mức vì một tháng có thể được tính bằng hai thứ. Cả hai đều để trống cho tới khi bạn điền. Khi chạm tới một trong hai, các quy tắc tự động dừng lại cho tới khi sang tháng mới. **Những gì chính bạn yêu cầu thì không bao giờ bị dừng.**

## Mô hình ngôn ngữ {#language-models}

Các mô hình đọc bản chép lời và viết về nó. Nhấn **Thêm** để thêm một mô hình. Mỗi mô hình được liệt kê với tên và, bên dưới, mã định danh mô hình cùng địa chỉ dịch vụ của nó, ví dụ `qwen3-32b · http://llm.local:8000/v1`. Mô hình được đánh dấu **Mặc định** là mô hình dùng theo mặc định. Một nút trong biểu mẫu của mô hình kiểm tra xem dịch vụ có thực sự trả lời không trước khi bạn dựa vào nó.

- Mô hình **trên chính máy của bạn** giữ mọi cuộc trò chuyện trong nội bộ và không tốn phí chạy.
- Mô hình trên đám mây — OpenAI, Claude, Mistral, DeepSeek, Groq và các dịch vụ khác — tính phí theo lượt dùng. Chương trình hiển thị giá của mỗi lượt gọi bằng token và bằng tiền.

## Chỉ dẫn {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Cài đặt → Xử lý: các chỉ dẫn" />

*Những gì được hỏi các mô hình.* Mỗi chỉ dẫn đều đi kèm chương trình và mỗi chỉ dẫn đều để bạn sửa — và để bạn đưa về như cũ. Mỗi chỉ dẫn được liệt kê với tên và, bên dưới, nội dung nó viết và ở dạng nào. Dạng — **Câu trả lời**, **Các mục**, **Nhãn**, **JSON**, **Văn xuôi**, **Dấu hiệu** hoặc **Tiêu chí** — quyết định câu trả lời được lưu và hiển thị như thế nào. Các chỉ dẫn được mô tả trong [Personal Prompt Studio](prompt-studio.md). **Thêm** tạo một chỉ dẫn của riêng bạn.

## Quy tắc {#rules}

<Shot name="12c_settings_processing_rules" alt="Cài đặt → Xử lý: các quy tắc" />

*Những gì tự chạy, theo thứ tự này. Mỗi cái kích hoạt nhiều nhất một lần cho mỗi cuộc trò chuyện.* Một quy tắc là một dòng có ô đánh dấu để bật hoặc tắt, tên của nó, và bên dưới là việc nó làm. **▲** và **▼** thay đổi thứ tự. Chương trình đi kèm tám quy tắc:

| Quy tắc | Tác dụng | Khi nào |
| --- | --- | --- |
| **Gỡ băng mọi cuộc trò chuyện** | Chép lời cuộc trò chuyện. | luôn luôn |
| **Tóm tắt nó** | Hỏi một mô hình: **Tóm tắt**. | luôn luôn |
| **Rút nó thành một dòng** | Hỏi một mô hình: **Tóm tắt một dòng**. | luôn luôn |
| **Xếp nó vào một hạng mục** | Hỏi một mô hình: **Hạng mục**. | luôn luôn |
| **Gắn nhãn cho nó** | Hỏi một mô hình: **Nhãn**. | luôn luôn |
| **Nêu những gì đáng xem** | Hỏi một mô hình: **Dấu hiệu cảnh báo**. | luôn luôn |
| **Đánh giá nó, nếu là bán hàng** | Hỏi một mô hình: **Chất lượng bán hàng**. | chỉ khi hạng mục là **Bán hàng** |
| **Đánh giá nó, nếu là hỗ trợ** | Hỏi một mô hình: **Chất lượng hỗ trợ**. | chỉ khi hạng mục là **Hỗ trợ** |

Thứ tự là quan trọng: hai quy tắc cuối cần hạng mục do quy tắc trước đó đặt. **Thêm** tạo một quy tắc của riêng bạn.

## Mặc định {#defaults}

**Khôi phục mặc định** đưa các chỉ dẫn và quy tắc về như khi đi kèm chương trình, bằng ngôn ngữ giao diện hiện tại. Các mô hình ngôn ngữ của bạn được giữ nguyên.

Các chỉ dẫn và quy tắc đi kèm chương trình vẫn giữ ngôn ngữ ban đầu khi bạn đổi ngôn ngữ giao diện; **Khôi phục mặc định** đưa chúng sang ngôn ngữ mới. Khi đó mỗi chỉ dẫn được đánh dấu *đã sửa* ở bên phải.
