---
title: Cửa sổ Bản ghi
sidebar_position: 2
description: "\"Thư viện mọi cuộc trò chuyện — cuộc gọi, tệp đã nhập hay cuộc họp thu từ Zoom, Teams, Meet: bộ lọc, trình phát, bản chép lời có thể phát từ bất kỳ dòng nào, và các kết quả xử lý.\""
---

**Bản ghi** là nơi lưu mọi cuộc trò chuyện, dù nó đến bằng cách nào: một cuộc gọi thực hiện hoặc nhận trong điện thoại, một tệp âm thanh bạn đã nhập, hay một cuộc họp thu từ Zoom, Teams, Meet hoặc bất kỳ ứng dụng nào khác. Tất cả nằm chung trong một danh sách, và mỗi cuộc trò chuyện đều mở ra theo cùng một cách: trình phát, bản chép lời và mọi thứ mà mô hình ngôn ngữ đã viết về nó. Nhấn **Bản ghi** ở phía dưới bên trái của [cửa sổ chính](main-window.md) để mở.

<Shot name="01_recordings" alt="Thẻ Bản ghi: một cuộc họp Zoom đã thu, một tệp đã nhập và các cuộc gọi trong cùng một danh sách" />

## Ba loại bản ghi {#three-kinds-of-recording}

Biểu tượng ở bên trái mỗi hàng cho biết cuộc trò chuyện đã đến bằng cách nào.

| Biểu tượng | Cuộc trò chuyện | Tên trong danh sách | Cách nó đến đây |
| --- | --- | --- | --- |
| Ống nghe có mũi tên | Một cuộc gọi thực hiện hoặc nhận trong điện thoại này. Mũi tên hướng vào với cuộc gọi đến và hướng ra với cuộc gọi đi. | Tên của liên hệ, hoặc số máy | Được ghi theo thiết lập trong [Bản ghi](../recordings.md) |
| Mũi tên vào một thanh | Một tệp nhập từ nơi khác: điện thoại di động, máy ghi âm hoặc hệ thống khác | Tên của tệp | **⋮ → Nhập từ tệp**; xem [bên dưới](#a-recording-you-already-have) |
| Cửa sổ | Một cuộc họp diễn ra trong ứng dụng khác | Tên bạn đã đặt, hoặc **Ứng dụng khác** | [Thu từ ứng dụng khác](../capture/capture.md) |

Trong hình, ba hàng trên cùng mỗi loại một hàng: một cuộc họp Zoom, một tệp đã nhập là cuộc gọi hỗ trợ của một ngân hàng và một cuộc gọi nhận trên đường dây **305 Hỗ trợ**. Dù từ nguồn nào, chúng đều được chép lời, xử lý và tìm kiếm như nhau.

## Tìm một cuộc trò chuyện {#finding-a-conversation}

Thanh ở phía trên có năm bộ lọc, một ô tìm kiếm và một menu:

| Điều khiển | Thu hẹp danh sách theo |
| --- | --- |
| **Loại** | cách cuộc trò chuyện đến: cuộc gọi đến hoặc đi, **Đã nhập**, **Đã thu ngoài** |
| **Khoảng thời gian** | ngày: **Hôm nay**, **Hôm qua**, **7 ngày qua**, hoặc **Chọn ngày…** |
| **Hạng mục** | hạng mục mà cuộc trò chuyện được xếp vào — xem [Từ điển](../ai-processing/dictionaries.md) |
| **Dấu** | các nhãn và dấu hiệu cảnh báo mà cuộc trò chuyện mang |
| **Bộ nhận dạng** | [bộ nhận dạng](../ai-processing/transcription.md) đã tạo bản chép lời của nó |
| **Tìm** | những gì đã được nói trong đó — việc tìm kiếm đi qua bản chép lời của mọi thứ bạn đã ghi |

<Shot name="39_more_menu" alt="Menu ⋮ của danh sách: Nhập từ tệp, Xuất ra CSV, Mở trong trình duyệt" />

Nút **⋮** ở bên phải thanh mở thêm các thao tác cho danh sách:

| Mục | Tác dụng |
| --- | --- |
| **Nhập từ tệp** | Đưa vào những bản ghi bạn đã có. Xem [Bản ghi bạn đã có sẵn](#a-recording-you-already-have). |
| **Xuất ra CSV** | Lưu danh sách thành bảng tính: thời điểm, bên kia và số máy, hướng gọi, thời lượng, hạng mục, nhãn, dấu hiệu cảnh báo và bản tóm tắt một dòng của mỗi cuộc trò chuyện. |
| **Mở trong trình duyệt** | Mở danh sách trong trình duyệt của bạn, dưới dạng trang mà [REST API cục bộ](../integration/rest-api.md) phục vụ tại `/ui`. |

## Danh sách {#the-list}

Mỗi hàng hiển thị:

- biểu tượng cho loại cuộc trò chuyện;
- tên — bên kia, số máy, tệp hoặc cuộc họp — và bên dưới là ngày cùng bản tóm tắt một dòng;
- ở bên phải là hạng mục kèm điểm số (một con số, ví dụ *Hỗ trợ · 4*), rồi đến các dấu hiệu cảnh báo và nhãn, và cuối cùng là thời lượng.

Các dấu hiệu cảnh báo vẽ màu đỏ (trong hình là *Dữ liệu nhạy cảm*, *Đã hứa*, *Khách giận dữ*); các nhãn thì thông thường (*Đã hứa gọi lại*). Cuộc trò chuyện chưa có tóm tắt và hạng mục là cuộc chưa được xử lý — hàng **Nguyễn Thị Lan** trong hình.

<Shot name="40_row_actions" alt="Một hàng khi trỏ chuột vào: các nút ghim, bút chì và thùng rác" />

Trỏ chuột vào một hàng để hiện ba nút ở bên phải:

| Nút | Tác dụng |
| --- | --- |
| Ghim | **Giữ lại cái này**: bản ghi được giữ lại sẽ không bao giờ bị xoá theo các giới hạn của [Thời gian lưu giữ](../recordings.md#retention). Nhấn lần nữa để thôi giữ. |
| Bút chì | **Đổi tên**: đặt cho cuộc trò chuyện một tên của riêng bạn. Một cuộc gọi vẫn giữ tên của bên kia ở bên cạnh; cuộc họp hoặc tệp thì mặc định được đặt theo ứng dụng hoặc tệp mà nó đến từ đó. |
| Thùng rác | **Xoá bản ghi này**, sau khi hỏi lại. Âm thanh cũng bị xoá theo và không thể hoàn tác. |

## Trình phát {#the-player}

Chọn một hàng để mở trình phát dưới danh sách.

- Hai dạng sóng là hai kênh của bản ghi: kênh trên là bạn, kênh dưới là bên kia. Một tệp đã nhập thường chỉ có một rãnh đã trộn, nên cả hai đường đều hiện cùng một âm thanh.
- **▶** phát và tạm dừng; các mốc thời gian bên trái là vị trí hiện tại và tổng thời lượng. Thanh bên dưới các dạng sóng dùng để cuộn một bản ghi dài.
- **1×** thay đổi tốc độ; **Cả hai** chọn giọng bạn nghe: cả hai, chỉ bạn (**Tôi**) hoặc chỉ bên kia (**Họ**).
- Nút hình đĩa lưu một bản sao của bản ghi, **×** đóng cuộc trò chuyện.

Đường ngăn giữa danh sách và trình phát có thể kéo lên để bản chép lời có thêm chỗ, như trong các hình bên dưới.

## Bản chép lời {#the-transcript}

Dưới trình phát là bản chép lời: mỗi lượt lời một dòng, kèm thời điểm được nói và người nói.

<Shot name="26_recording_call" alt="Một cuộc gọi trên đường dây 305 Hỗ trợ: trình phát và bản chép lời, dòng ở mốc 0:12 được làm nổi bật" />

| Loại bản ghi | Người nói được hiển thị là |
| --- | --- |
| Một cuộc gọi | **Bạn** và tên của bên kia, hoặc số máy |
| Một cuộc họp đã thu | **Bạn** và tên của bản ghi, cho tất cả những người còn lại |
| Một tệp đã nhập | **Mọi người · speaker 1**, **Mọi người · speaker 2**… — bộ nhận dạng tự phân biệt các giọng |

**Nhấp vào một dòng để chuyển đến đúng khoảnh khắc đó**: trình phát chuyển tới đó, dòng được làm nổi bật, và từ đang được nói được đánh dấu bên trong — trong hình là dòng ở mốc **0:12**, với từ *Vâng*. Nhấn **▶** để nghe từ chỗ đó. Khi đang phát, phần làm nổi bật chạy theo lời nói, nên bạn vừa đọc vừa nghe được, và có thể quay lại bất kỳ câu nào.

Thời gian ở bên trái mỗi dòng cũng chính là điều mà kết quả xử lý trỏ tới: một dấu hiệu cảnh báo, một câu trả lời hay một đoạn trích dẫn đều mang theo thời điểm của những lời mà nó dựa vào.

## Bản chép lời hay kết quả xử lý: danh sách thả xuống {#transcript-or-write-up-the-drop-down}

Danh sách thả xuống phía trên bản chép lời chọn nội dung hiển thị ở chỗ đó: một bản chép lời, hoặc một trong các kết quả xử lý do mô hình ngôn ngữ viết.

<Shot name="27_writeup_menu" alt="Danh sách thả xuống đang mở: bản chép lời của OpenAI và các kết quả xử lý của cuộc gọi" />

- Các dòng có **micrô** là bản chép lời, mỗi [bộ nhận dạng](../ai-processing/transcription.md) đã chép lời bản ghi cho một bản. Ngôi sao đánh dấu bản chính. Trỏ chuột vào một dòng để xem bộ nhận dạng, mô hình và ngôn ngữ của nó.
- Các dòng có **hình lấp lánh** là kết quả xử lý, được tạo bởi các [chỉ dẫn](/ai-processing/prompt-studio) của [Xử lý](../ai-processing/processing.md).

Một bản ghi có thể có bản chép lời từ nhiều bộ nhận dạng để so sánh: cuộc họp Zoom bên dưới được chép lời bởi cả X.ai và Deepgram.

<Shot name="36_zoom_menu" alt="Một cuộc họp đã thu với hai bản chép lời, Deepgram và X.ai, cùng các kết quả xử lý của nó" />

Các kết quả xử lý được liệt kê dưới những tên ngắn:

| Trong danh sách thả xuống | Do chỉ dẫn | Hiển thị gì |
| --- | --- | --- |
| **Tóm tắt** | Tóm tắt | Các ý chính, quyết định và bước tiếp theo trong một đoạn ngắn. |
| **Ngắn gọn** | Tóm tắt một dòng | Một câu; cùng dòng ấy được hiển thị dưới tên trong danh sách. |
| **Hành động** | Việc cần làm | Ai đã nhận làm gì, và hạn đến khi nào. |
| **Chủ đề** | Chủ đề | Các vấn đề đã được nhắc đến. |
| **Được nhắc tới** | Tên và con số | Người, công ty, ngày tháng, số tiền và tham chiếu. |
| chính câu hỏi | Một câu hỏi về cuộc gọi này | Câu trả lời cho câu hỏi bạn đã đặt, kèm những lời mà nó dựa vào. |
| **Chất lượng** | Chất lượng bán hàng, Chất lượng hỗ trợ | Điểm tổng thể và nhận xét về từng tiêu chí. |
| **Dấu hiệu cảnh báo** | Dấu hiệu cảnh báo | Điều cần chú ý, kèm bằng chứng và thời điểm. |
| **Nhãn**, **Hạng mục** | Nhãn, Hạng mục | Các nhãn mà cuộc trò chuyện được xếp vào. |

## Từng kết quả xử lý {#the-write-ups-one-by-one}

Các hình bên dưới đều là của cùng một cuộc gọi, trên đường dây **305 Hỗ trợ**, trong đó một khách hàng hỏi khi nào các hợp đồng bảo hiểm của chị ấy hết hạn.

**Tóm tắt** — cuộc trò chuyện trong vài câu.

<Shot name="28_summary" alt="Tóm tắt của cuộc gọi" />

**Ngắn gọn** — một dòng, đủ ngắn để nhận ra cuộc trò chuyện trong danh sách.

<Shot name="29_nutshell" alt="Ngắn gọn: bản tóm tắt một dòng của cuộc gọi" />

**Hành động** — mỗi việc kèm người phải làm và hạn, ở bên phải.

<Shot name="30_actions" alt="Hành động: hai việc cho Bạn, một việc hạn sáng mai" />

**Một câu hỏi** — hỏi cuộc trò chuyện bất cứ điều gì: câu hỏi trở thành tên của mục, và dưới câu trả lời là những lời mà nó dựa vào, kèm thời điểm của chúng trong bản ghi.

<Shot name="31_question" alt="Câu trả lời cho một câu hỏi về cuộc gọi, kèm hai đoạn trích dẫn ở mốc 0:16 và 0:29" />

**Chất lượng** — điểm từ 1 đến 5 kèm lý do, và mỗi tiêu chí được đánh dấu **đạt**, **yếu** hoặc **không đạt** cùng một ghi chú.

<Shot name="32_quality" alt="Chất lượng: điểm 4, hai tiêu chí đạt và hai tiêu chí yếu" />

**Dấu hiệu cảnh báo** — mỗi dấu hiệu kèm những lời mà nó dựa vào, mức độ nghiêm trọng và thời điểm.

<Shot name="33_red_flags" alt="Dấu hiệu cảnh báo: Đã hứa, mức thấp, ở mốc 0:29" />

**Chủ đề** — các vấn đề của một cuộc họp, ở đây là cuộc họp Zoom.

<Shot name="38_topics" alt="Chủ đề của cuộc họp Zoom" />

## Các nút bên cạnh danh sách thả xuống {#the-buttons-beside-the-drop-down}

| Nút | Tác dụng |
| --- | --- |
| Lấp lánh | **Gỡ băng hoặc hỏi mô hình…**: mở một menu, xem bên dưới. |
| Hai tờ giấy | Sao chép nội dung đang hiển thị. |
| Đĩa | Lưu nó vào tệp. Bạn có thể lưu bản chép lời dưới dạng văn bản thuần hoặc phụ đề. |
| Thùng rác | Xoá nội dung đang hiển thị. |

<Shot name="34_run_menu" alt="Menu lấp lánh: Gỡ băng với bốn bộ nhận dạng, Xử lý với các chỉ dẫn" />

Menu lấp lánh làm việc theo yêu cầu. Ở mục **Gỡ băng**, chọn một bộ nhận dạng để chép lời lại bản ghi bằng nó; ở mục **Xử lý**, chọn một chỉ dẫn để chạy nó ngay — **Một câu hỏi về cuộc gọi này…** hỏi bạn câu hỏi trước. Kết quả xuất hiện trong danh sách thả xuống. Đây là cách một cuộc trò chuyện được xử lý khi **Xử lý các cuộc trò chuyện tự động** đang tắt trong [Xử lý](../ai-processing/processing.md), và là cách bạn thêm một kết quả xử lý nữa cho cuộc trò chuyện đã có sẵn một số kết quả.

## Ba ví dụ {#three-examples}

### Một cuộc gọi thực hiện trong điện thoại {#a-call-made-in-the-phone}

Cuộc gọi ở trên: người nói là **Bạn** và **Đặng Thu Trang**, tên của liên hệ, trên hai kênh riêng biệt.

### Một tệp bạn đã nhập {#a-file-you-imported}

<Shot name="35_recording_import" alt="Tệp đã nhập là cuộc gọi hỗ trợ của một ngân hàng: một rãnh đã trộn và hai người nói 1 và 2" />

`riverside_bank_support_call` là một tệp mp3 được đưa vào bằng **⋮ → Nhập từ tệp**. Tên của nó là tên của tệp, biểu tượng của nó là mũi tên vào một thanh, và hai người nói được bộ nhận dạng tự phân biệt. Các kết quả xử lý đã phát hiện một số thẻ được đọc to lên và nêu dấu hiệu **Dữ liệu nhạy cảm**.

### Một cuộc họp thu từ ứng dụng khác {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Một cuộc họp Zoom thu từ máy tính: bản chép lời của X.ai với Bạn và tên cuộc họp là người nói" />

**Lên kế hoạch ra mắt quý IV (Zoom)** được thu khi cuộc họp đang diễn ra trong Zoom và được đặt tên bằng bút chì. Tất cả những người ở phía bên kia của cuộc họp được hiển thị dưới tên của bản ghi; bạn là **Bạn**. Xem [Thu từ ứng dụng khác](../capture/capture.md).

## Bản ghi bạn đã có sẵn {#a-recording-you-already-have}

Một bản ghi được tạo ở nơi khác — trên điện thoại di động, máy ghi âm hay một hệ thống khác — có thể được thêm bằng **⋮ → Nhập từ tệp**. Chọn một hoặc nhiều tệp mp3 hay wav; điện thoại cho biết đã nhập bao nhiêu tệp, và nêu tên những tệp không đọc được như một bản ghi. Mỗi tệp được lưu y như một cuộc gọi đã quay số: được chép lời, được xử lý theo cùng các [quy tắc](../ai-processing/processing.md#rules) và tìm thấy bằng cùng một ô tìm kiếm.

## Xoá một bản ghi {#deleting-a-recording}

Khi một bản ghi bị xoá, mọi thứ được tạo ra từ nó cũng bị xoá theo: các bản chép lời và kết quả xử lý. Thời gian tự động giữ bản ghi được thiết lập trong [Bản ghi](../recordings.md#retention).
