---
title: Cửa sổ người nhắc
sidebar_position: 3
description: "Cửa sổ của người nhắc trực tiếp: lời của cuộc gọi ngay khi được nói ra và gợi ý nên nói gì tiếp theo, các nút và cột của nó, diễn tập trên một bản ghi âm và chi phí."
---

**Người nhắc** lắng nghe một cuộc trò chuyện trong khi nó đang diễn ra. Trong cửa sổ riêng, nó ghi lại lời của từng bên ngay khi được nói ra và — khi trợ lý bạn chọn có hỏi một mô hình — một gợi ý về điều bạn nên nói tiếp. Rất nên mở nó trong một cuộc gọi bán hàng, một buổi phỏng vấn hay một cuộc trò chuyện khó, và với một trợ lý khác, cùng cửa sổ ấy hiển thị bản dịch liên tục lời của phía bên kia, hoặc chỉ phụ đề.

<Shot name="46_prompter_running" alt="Người nhắc đang diễn tập một cuộc gọi bán hàng: bản ghi bên trái, gợi ý bên phải, gợi ý mới nhất lặp lại bằng chữ lớn ở trên" />

Trong ảnh, trợ lý **Phản đối trong cuộc gọi** đang nghe một cuộc gọi bán hàng. Cột bên trái là những gì đã được nói, mỗi dòng kèm thời điểm và phía nói; cột bên phải là những gì mô hình gợi ý cho từng câu trả lời của khách hàng; gợi ý mới nhất được lặp lại bằng chữ lớn phía trên cả hai cột.

**Người nhắc** xuất hiện trong danh sách ở cuối điện thoại, giữa **Lịch sử** và **Cài đặt**, ngay khi có đủ ba điều: người nhắc được cho phép, có một bộ nhận dạng biết lắng nghe trong khi cuộc trò chuyện diễn ra, và — với các trợ lý có gợi ý — một mô hình ngôn ngữ. Tất cả được thiết lập trong [Cài đặt → Người nhắc](/ai-processing/prompter), nơi cũng có cỡ chữ và chính các trợ lý.

## Cửa sổ {#the-window}
<Shot name="44_prompter_window" alt="Cửa sổ người nhắc với trợ lý Phản đối trong cuộc gọi được chọn, trước khi bắt đầu" />

Ở trên cùng là danh sách thả xuống **Trợ lý** và bên phải là các nút:

| Nút | Chức năng |
| --- | --- |
| **Bắt đầu** / **Dừng** (tam giác / hình vuông) | *Bắt đầu nghe cuộc gọi này* — hoặc dừng: *Những gì đã nói vẫn ở trên màn hình*. Nếu nhấn bắt đầu trước khi cuộc gọi được nhấc máy, nó sẽ chờ, và nút khi đó dùng để huỷ. |
| **Gợi ý** (tia lấp lánh) | *Kết thúc lượt trả lời tại đây và gợi ý nên nói gì*, không chờ khoảng lặng. Với trợ lý không hỏi mô hình nào, nút này là **Kết thúc lượt trả lời**: chỉ đóng lượt trả lời để lượt sau bắt đầu sạch. Nút bị mờ khi người nhắc không chạy. |
| **Dọn** (thùng rác) | Sau khi hỏi lại, quên những gì đang có trên màn hình. *Cả hai cột đều biến mất, cùng với cuộc trò chuyện mà gợi ý kế tiếp sẽ được dựng lên từ đó.* Dừng rồi chạy lại không xoá gì: một cuộc trò chuyện dừng rồi chạy lại thường vẫn là cùng một cuộc trò chuyện. |
| **Xuất…** (đĩa mềm) | Ghi cả hai cột kèm thời điểm vào một tệp: dạng văn bản (`.txt`) hoặc bảng tính (`.csv`), với tên bạn đặt cho tệp. |
| **Diễn tập…** (thư viện) | [Thử một trợ lý trên một bản ghi âm](#rehearsing-on-a-recording) thay vì một cuộc gọi. |

Danh sách thả xuống hiển thị các [trợ lý](/ai-processing/prompter#assistants) theo thứ tự đặt trong **Cài đặt → Người nhắc**. Không thể đổi nó khi người nhắc đang chạy, nhưng nó vẫn hiển thị để bạn thấy trợ lý nào đang làm việc. Trong khi nghe, thẻ cuộc gọi ghi **Chúng tôi đang nghe**.

Bên dưới các nút là dải hiển thị dòng mới nhất, và dưới đó là hai cột:

- **Bản ghi** — mỗi dòng kèm thời điểm và phía nói;
- **Gợi ý** — mỗi gợi ý kèm thời điểm của lượt trả lời mà nó đáp lại. Với trợ lý không hỏi mô hình nào, cột này không có và bản ghi chiếm toàn bộ chiều rộng.

Khi cửa sổ hẹp, hai cột xếp chồng lên nhau. Một cột theo dõi những gì đang đến cho đến khi bạn cuộn ngược lại trong đó, và theo dõi tiếp khi bạn quay về cuối. Nhấn vào bất kỳ dòng nào để giữ nó trên dải; nhấn vào dòng mới nhất hoặc chiếc ghim trên dải để theo dõi lại. Nút chuột phải sao chép một dòng, một gợi ý, toàn bộ bản ghi hoặc tất cả gợi ý. Kéo thanh phân cách bên dưới dải để làm nó cao hơn; cỡ chữ được đặt trong [Cài đặt → Người nhắc](/ai-processing/prompter#settings--prompter).

## Diễn tập trên một bản ghi âm {#rehearsing-on-a-recording}
Có thể thử một trợ lý mà không cần ai ở đầu dây. **Diễn tập…** liệt kê các cuộc trò chuyện trong [thư viện](/interface/recordings), mới nhất trước, và **Một tệp trên máy tính này…** cho tệp `.mp3` hoặc `.wav`.

<Shot name="45_prompter_rehearse" alt="Diễn tập…: các cuộc trò chuyện trong thư viện và một tệp trên máy tính này" />

Bản ghi âm bạn chọn xuất hiện trong trình phát bên dưới các nút: phát và tạm dừng, cả hai kênh được vẽ thành dạng sóng có thể nhấp vào, và thời gian. Nhấn **Bắt đầu**: bản ghi được phát vào người nhắc qua đúng con đường của một cuộc gọi, theo tốc độ của chính nó — phát nhanh hơn được cố ý không cung cấp, vì một người nhắc được nạp nhanh gấp rưỡi sẽ ngắt nghỉ, trả lời và tính phí cho một cuộc trò chuyện chưa ai từng nói. Dấu nhân bên phải là **Kết thúc diễn tập**, quay lại nghe cuộc gọi.

Một bản ghi chỉ có một kênh, chẳng hạn tệp được nhập, được nghe như một căn phòng: *người nhắc nghe toàn bộ như là người đối thoại*.

## Chi phí và lời nói đi đâu {#what-it-costs-and-where-the-words-go}
- Bộ nhận dạng được tính phí theo phút âm thanh trực tiếp, và **Nhận dạng cả phía tôi** nhân đôi khoản đó. Mô hình được tính phí cho mỗi gợi ý. Cả hai đều tính vào [hạn mức hằng tháng](/ai-processing/prompter#spending) của người nhắc, không tính vào giới hạn của Xử lý.
- Giọng nói của phía bên kia rời máy tính ngay khi họ nói, đến bộ nhận dạng bạn đã chọn. Một bộ nhận dạng trên chính máy của bạn — **Vosk**, **WhisperLive** hoặc **NVIDIA Riva** — giữ nó ở trong nhà.
- Những gì người nhắc hiển thị không phải là bản ghi âm. Để giữ lại, nhấn **Xuất…**; để có chính cuộc trò chuyện, hãy [ghi âm cuộc gọi](/recordings) thêm.

## Khi nó không chạy {#when-it-does-not-start}
Cửa sổ cho biết thiếu gì trong một dòng bên dưới các nút.

| Cửa sổ báo | Cần làm gì |
| --- | --- |
| *Nhắc lời đang tắt. Cài đặt → Người nhắc.* | Đánh dấu **Cho phép dùng người nhắc**. |
| *Không bộ nhận dạng nào ở đây biết lắng nghe khi có người đang nói. Cài đặt → Gỡ băng.* | Thêm một bộ nhận dạng có **Địa chỉ cho người nhắc** và nhấn **Thử**. |
| *Không có gì để chạy. Cài đặt → Người nhắc, và thêm một trợ lý.* | Mọi trợ lý đã bị xoá hoặc tắt: thêm một trợ lý, hoặc nhấn **Khôi phục mặc định**. |
| *Phía bên kia phải được cho biết trước. Hãy bắt đầu ghi âm cuộc trò chuyện này, hoặc thay đổi những gì Cài đặt → Ghi âm nói về sự đồng ý.* | Bắt đầu ghi âm, việc này phát lời thông báo, hoặc thay đổi thiết lập về sự đồng ý. |
| *Bộ nhận dạng chưa bắt đầu lắng nghe. Hãy kiểm tra địa chỉ trực tiếp và mô hình của nó trong Cài đặt → Gỡ băng.* | Địa chỉ cho người nhắc, mô hình hoặc khoá bị sai. **Thử** trên thẻ của bộ nhận dạng cho biết cái nào. |
| *Khoản của tháng này cho các bộ nhận dạng đã dùng hết.* | Tăng **Bộ nhận dạng, mỗi tháng**, hoặc chờ sang tháng mới. |
| *Khoản của tháng này cho các mô hình đã dùng hết. Lời nói vẫn tiếp tục; việc nhắc lời đã dừng.* | Tăng **Mô hình, mỗi tháng**. |
