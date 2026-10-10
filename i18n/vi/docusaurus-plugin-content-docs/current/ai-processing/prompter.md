---
title: Cài đặt người nhắc
sidebar_label: Người nhắc
sidebar_position: 5
description: "Cài đặt → Người nhắc: người nhắc trực tiếp cần gì, công tắc cho phép nó, cỡ chữ, các trợ lý và thẻ của chúng, và hạn mức hằng tháng cho những gì nó được chi."
---

Trong **Cài đặt → Người nhắc**, người nhắc trực tiếp được cho phép, được chỉnh cỡ và được giao các trợ lý. Bản thân người nhắc — cửa sổ ghi lại cuộc gọi ngay khi được nói ra và gợi ý nên trả lời gì, cùng việc diễn tập trên một bản ghi âm — được mô tả trong [Cửa sổ người nhắc](/interface/prompter).

[Tổng quan](/interface/settings-overview) của cài đặt liệt kê người nhắc trong mục **Người nhắc** với hai bước: **Cho phép người nhắc** và **Chạy người nhắc**.

## Nó cần gì {#what-it-needs}
- **Một bộ nhận dạng biết lắng nghe trong khi cuộc trò chuyện diễn ra.** Nó được thêm trong [Cài đặt → Gỡ băng](/ai-processing/transcription#live-recognition-for-the-prompter) như mọi bộ nhận dạng khác, và cần một **Địa chỉ cho người nhắc** cùng một lần **Thử** thành công.
- **Một mô hình ngôn ngữ**, cho các trợ lý có gợi ý. Đó là mô hình được đặt cho trợ lý, hoặc mô hình mặc định trong [Cài đặt → Xử lý](/ai-processing/processing#language-models). Phụ đề hoàn toàn không cần mô hình.
- **Dấu chọn Cho phép dùng người nhắc**, trong **Cài đặt → Người nhắc**.

Khi có đủ cả ba, **Người nhắc** xuất hiện trong danh sách ở cuối điện thoại, giữa **Lịch sử** và **Cài đặt**, và mở [cửa sổ người nhắc](/interface/prompter). Phần của chương trình đảm nhận việc này là mô-đun **Người nhắc**, *Nghe cuộc gọi trong khi đang diễn ra và gợi ý*; có thể tắt nó trong [Mô-đun](/application/modules).

## Cài đặt → Người nhắc {#settings--prompter}
<Shot name="41_settings_prompter" alt="Cài đặt → Người nhắc: công tắc cho phép người nhắc và cỡ chữ" />

*Nhận dạng giọng nói trong khi cuộc trò chuyện đang diễn ra, và các gợi ý được viết theo hướng dẫn của riêng bạn. Cả hai đều tính phí theo phút.*

| Thiết lập | Mặc định | Chức năng |
| --- | --- | --- |
| **Cho phép dùng người nhắc** | tắt | Công tắc duy nhất cho phép khởi động người nhắc. Không gì khác trên trang có tác dụng khi nó còn tắt. |
| **Bản ghi và gợi ý** | 13 điểm ảnh | Hai cột của cửa sổ được vẽ lớn đến đâu. |
| **Lặp lại dòng mới nhất bên trên các cột** | bật | Hiển thị gợi ý mới nhất — hoặc dòng mới nhất, với trợ lý không gợi ý gì — trong một dải riêng phía trên các cột. |
| **Dòng được lặp lại** | 20 điểm ảnh | Chữ trong dải lớn đến đâu. Hiện ra khi dải đang bật. |

:::caution
Giọng nói của phía bên kia được gửi tới một bộ nhận dạng ngay khi họ nói, điều đó không kém gì việc ghi âm họ. Ở nơi [Cài đặt → Ghi âm](/recordings) yêu cầu phải báo trước cho họ, người nhắc chỉ khởi động sau khi đã báo.
:::

Người nhắc được đọc trong khi bạn nói, thường từ xa hơn phần còn lại của điện thoại, nên hai cỡ chữ là do bạn chọn: hãy chọn cỡ bạn đọc được mà không phải cúi về phía màn hình. Kéo thanh phân cách bên dưới dải, trong [cửa sổ người nhắc](/interface/prompter#the-window), để làm nó cao hơn.

### Trợ lý {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Cài đặt → Người nhắc: các trợ lý và hạn mức hằng tháng" />

Trợ lý là vai trò mà người nhắc được yêu cầu đảm nhận. *Mỗi trợ lý lắng nghe một cuộc trò chuyện đang diễn ra và viết điều gì đó vào cửa sổ người nhắc: các từ đúng như được nói ra, bản dịch của chúng, hoặc gợi ý về điều nên nói tiếp.* Chạy trợ lý nào là do bạn chọn trong cửa sổ người nhắc. Chương trình có sẵn bốn trợ lý:

| Trợ lý | Viết gì | Hỏi mô hình |
| --- | --- | --- |
| **Phụ đề** | Lời của cả hai bên, ngay khi được nói ra. | không |
| **Bản dịch** | Lời của phía bên kia, dịch sang ngôn ngữ của chương trình. | có |
| **Phản đối trong cuộc gọi** | Cho người bán hàng qua điện thoại: khi khách hàng nêu một phản đối, phản đối đó trong một dòng và một dòng để đáp lại. | có |
| **Trợ giúp phỏng vấn** | Cho người đang được phỏng vấn: câu trả lời cho câu hỏi vừa được hỏi trong vài dòng ngắn, hoặc những gì nên đề cập trong câu trả lời tiếp theo. | có |

**▲** và **▼** thay đổi thứ tự, cũng là thứ tự của danh sách thả xuống trong [cửa sổ người nhắc](/interface/prompter#the-window). **Thêm** tạo một trợ lý của riêng bạn. **Khôi phục mặc định** đưa các chỉ dẫn và quy tắc về như khi đi kèm chương trình, ở đây cũng như trong [Xử lý](/ai-processing/processing#defaults); các mô hình ngôn ngữ của bạn được giữ nguyên.

### Thẻ của một trợ lý {#an-assistants-card}
Nhấn vào một trợ lý sẽ mở thẻ của nó. Đó là cùng loại thẻ với một [chỉ dẫn](/ai-processing/prompt-studio) trong Xử lý, cộng thêm vài điều khiển riêng.

<Shot name="42_prompter_assistant" alt="Thẻ của trợ lý Phản đối trong cuộc gọi: bộ nhận dạng, khi nào một lượt trả lời đã kết thúc, vai trò và chỉ dẫn" />

| Trường | Chức năng |
| --- | --- |
| **Tên** | Tên hiển thị trong danh sách và trong cửa sổ người nhắc. |
| **Hình thức trả lời** và **Gửi kèm** | Như ở mọi chỉ dẫn: hình thức của câu trả lời và các hướng dẫn được gửi kèm. Các trợ lý có sẵn trả lời dưới dạng **Văn xuôi**. |
| **Bộ nhận dạng** | Bộ nhận dạng nào lắng nghe. Chỉ những bộ biết lắng nghe khi có người đang nói mới được đưa ra. |
| **Khi nào một lượt trả lời đã kết thúc** | Ai quyết định một lượt trả lời đã xong và có thể đáp lại: **Bộ nhận dạng quyết định**, **Sau một khoảng lặng** hoặc **Chỉ khi tôi yêu cầu** — khi đó một lượt trả lời kết thúc lúc bạn nhấn **Gợi ý**. Sáu trong số các bộ nhận dạng tự cho biết lượt trả lời kết thúc ở đâu, bốn bộ thì không; **Bộ nhận dạng quyết định** dựa vào khoảng lặng ở nơi nó không có câu trả lời, vì vậy đó là thiết lập nên để nguyên. |
| **Nhận dạng cả phía tôi** | Một phiên thứ hai trên cùng bộ nhận dạng, với giá gấp đôi, để lời của chính bạn cũng xuất hiện trong bản ghi. Chúng được đưa vào những gì kể cho mô hình, nhưng không bao giờ là điều mô hình được hỏi tới. |
| **Vai trò — mô hình là ai** | Được gửi cho mô hình trước chỉ dẫn, chẳng hạn *Bạn giúp một người bán hàng qua điện thoại…* |
| **Chỉ dẫn** | Điều mô hình được hỏi sau mỗi lượt trả lời. `{{reply}}` là lượt trả lời vừa kết thúc và `{{conversation}}` là mọi thứ đã nói trước đó. *Để trống thì không hỏi mô hình điều gì: lời được hiện ra ngay khi đến, và thứ duy nhất phải trả là bộ nhận dạng.* Đó chính là **Phụ đề**. |
| **Trả lời bằng** | Ngôn ngữ của gợi ý: **Bất cứ ngôn ngữ nào đã nói**, **Ngôn ngữ của chương trình này** hoặc **Một ngôn ngữ, luôn luôn**, kèm mã của nó. |
| **Mô hình** | **Mặc định** hoặc một trong các [mô hình ngôn ngữ](/ai-processing/processing#language-models) của bạn. |

### Chi tiêu {#spending}
*Tách khỏi những gì các quy tắc được chi cho các cuộc trò chuyện đã xong. Một tháng bản tóm tắt không được phép làm im một người nhắc giữa một cuộc trò chuyện.*

| Trường | Khi chạm mức |
| --- | --- |
| **Bộ nhận dạng, mỗi tháng** | Người nhắc đang chạy dừng ở cuối lượt trả lời hiện tại — không bao giờ giữa chừng một từ. |
| **Mô hình, mỗi tháng** | Việc gợi ý dừng lại, còn phụ đề vẫn tiếp tục. |

Để trống nghĩa là không giới hạn. Chi phí một phút âm thanh trực tiếp là **Giá mỗi phút** của bộ nhận dạng, nhập trên thẻ của nó trong [Gỡ băng](/ai-processing/transcription#the-recognisers-card); nếu không có, người nhắc sẽ cho biết con số hiển thị chỉ là ước tính.
