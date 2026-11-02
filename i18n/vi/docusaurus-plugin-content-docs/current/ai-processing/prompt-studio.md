---
title: Personal Prompt Studio
sidebar_position: 3
description: Các chỉ dẫn xử lý cuộc trò chuyện của bạn, các quy tắc chạy chúng, và cách biến chúng thành của riêng bạn.
---

**Personal Prompt Studio** là phần của AI Softphone xử lý các cuộc trò chuyện theo cách của bạn. Kết quả xử lý được tạo ra bởi các chỉ dẫn: chương trình đi kèm mười một chỉ dẫn, sẵn sàng dùng ngay khi đã kết nối bộ nhận dạng và mô hình ngôn ngữ, và bạn có thể sửa chúng bằng ngôn ngữ thông thường, nhân bản chúng và thêm chỉ dẫn của riêng mình. Chúng được liệt kê ở mục **Chỉ dẫn** trong [Cài đặt → Xử lý](processing.md#prompts).

LLM của bạn, khoá của bạn, quyền kiểm soát của bạn: hãy kết nối mô hình bạn thích bằng khoá của chính bạn, qua một dịch vụ được hỗ trợ hoặc một API tương thích — hoặc một mô hình triển khai bên trong tổ chức của bạn. Khi cả [việc chép lời](transcription.md#your-own-models) cũng chạy trên phần cứng của bạn, cả âm thanh lẫn bản chép lời đều ở lại trong môi trường của bạn.

<Shot name="12b_settings_processing_prompts" alt="Danh sách chỉ dẫn trong Cài đặt → Xử lý" />

## Các chỉ dẫn đi kèm chương trình {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 có mười một lời nhắc cho các cuộc trò chuyện đã kết thúc và bốn trợ lý trực tiếp. Dưới đây là nội dung có sẵn cho ngôn ngữ này; các phiên bản ngôn ngữ có thể khác nhau.

| Chỉ dẫn | `code` | Dạng | Nội dung viết ra |
| --- | --- | --- | --- |
| **Tóm tắt** | `summary` | Văn xuôi | Các ý chính, quyết định và bước tiếp theo trong một đoạn ngắn. |
| **Tóm tắt một dòng** | `super-summary` | Văn xuôi | Một tiêu đề ngắn để nhận ra cuộc trò chuyện trong danh sách. |
| **Việc cần làm** | `action-items` | Các mục | Ai đã đồng ý làm gì, khi nào, kèm lời họ đã nói. |
| **Chủ đề** | `topics` | Các mục | Những vấn đề đã được đề cập, trong vài từ. |
| **Tên và con số** | `entities` | JSON | Người, công ty, ngày tháng, số tiền và mã tham chiếu. |
| **Hạng mục** | `categorise` | Nhãn | Xếp cuộc trò chuyện vào một trong các [hạng mục](dictionaries.md) của bạn. |
| **Nhãn** | `tags` | Nhãn | Gắn các [nhãn](dictionaries.md) của bạn lên nó để sau này có thể tìm thấy. |
| **Dấu hiệu cảnh báo** | `red-flags` | Dấu hiệu | Các vấn đề, kèm bằng chứng và thời điểm trong cuộc trò chuyện. |
| **Một câu hỏi về cuộc gọi này** | `qa` | Câu trả lời | Trả lời câu hỏi bạn đặt về một cuộc trò chuyện, dựa trên bản chép lời của nó. |
| **Chất lượng bán hàng** | `sales-quality` | Tiêu chí | Đánh giá cuộc trò chuyện theo các tiêu chí bán hàng mà bạn có thể sửa. |
| **Chất lượng hỗ trợ** | `support-quality` | Tiêu chí | Đánh giá vấn đề đã được hiểu và xử lý tốt đến đâu. |

Các dạng là những khuôn câu trả lời cố định, nhờ đó chương trình lưu được và sau này tìm được: **Nhãn** là các mã lấy từ một trong các danh sách của bạn, **Dấu hiệu** là các mã kèm mức độ nghiêm trọng, **Tiêu chí** là một điểm số kèm lý do và điểm cho từng tiêu chí, **Câu trả lời** là lời đáp kèm những câu nói làm căn cứ. Các hướng dẫn cho mô hình biết khuôn câu trả lời được lưu trong [Từ điển](dictionaries.md#instructions).

Các trợ lý của [người nhắc](../interface/prompter.md) cũng là chỉ dẫn, chạy trên từng lượt nói trong khi cuộc gọi đang diễn ra thay vì trên một cuộc trò chuyện đã xong. Chúng được giữ trong một danh sách riêng, ở [Trợ lý](prompter.md#assistants) trong **Cài đặt → Người nhắc**.

Cuộc gọi thực hiện trong AI Softphone, cuộc họp [thu](/capture/) từ máy tính và bản ghi được nhập vào đều đi qua cùng các chỉ dẫn này khi đã có bản chép lời.

Việc cần làm ghi lại những gì đã thống nhất — chúng không gửi tin nhắn, đặt lịch hẹn hay tạo phiếu yêu cầu thay bạn.

## Biến nó thành của bạn {#making-it-yours}

- Sửa điều mà một chỉ dẫn yêu cầu, bằng ngôn ngữ thông thường: nó tìm gì, định dạng câu trả lời và ngôn ngữ trả lời.
- Nhân bản một chỉ dẫn để thử một biến thể.
- Chọn mô hình cho từng chỉ dẫn — trên máy của bạn hoặc trên đám mây.
- Đặt thứ tự chạy các chỉ dẫn, bật và tắt chúng, và đặt điều kiện cho chúng — việc này làm bằng các [quy tắc](processing.md#rules): ví dụ, đánh giá bán hàng chỉ chạy với các cuộc gọi được xếp vào **Bán hàng**.
- Giữ các hạng mục, nhãn và dấu hiệu cảnh báo của riêng bạn trong [Từ điển](dictionaries.md).
- Giới hạn chi phí bằng [hạn mức hằng tháng](processing.md#spending).

Các chỉ dẫn và quy tắc ban đầu có thể được khôi phục bằng **Khôi phục mặc định** ở mục **Mặc định** trong [Cài đặt → Xử lý](processing.md#defaults).

## Vai trò của mô hình {#role-and-task}

`system` xác định hành vi của mô hình; `body` mô tả nhiệm vụ. Cấu trúc và ngôn ngữ trả lời được cung cấp riêng qua các hướng dẫn trong danh mục.

Danh sách nhiệm vụ hoặc cảnh báo trống có thể là kết quả đúng. Không được tự đặt người phụ trách hoặc thời hạn còn thiếu. Câu trả lời phải chỉ dựa trên bản chép lời.

[Định dạng câu trả lời](dictionaries.md#response-formats)

## Biến thay thế {#placeholders}

Một thành phần trong lời nhắc được thay bằng dữ liệu cuộc trò chuyện.

| Biến thay thế | Ý nghĩa |
| --- | --- |
| `{{transcript}}` | Bản chép lời, mỗi lượt nói trên một dòng, thời gian tính bằng mili giây |
| `{{duration}}` | Thời lượng cuộc trò chuyện |
| `{{direction}}` | Cuộc gọi đến hoặc đi |
| `{{party}}` | Tên hoặc số liên hệ |
| `{{language}}` | Ngôn ngữ trả lời |
| `{{question}}` | Câu hỏi của người dùng |
| `{{categories}}` | Danh mục phân loại |
| `{{tags}}` | Danh mục nhãn |
| `{{red_flags}}` | Danh mục cảnh báo |
| `{{artifact:summary}}` | Bản tóm tắt đã tạo trước đó |
| `{{conversation}}` | Ngữ cảnh do trình nhắc trực tiếp tích lũy |
| `{{reply}}` | Lượt nói mới nhất của người đối thoại; chỉ dùng cho trình nhắc trực tiếp |

Chạy `summary` trước `super-summary`, vì lời nhắc sau sử dụng `{{artifact:summary}}`. Chạy `categorise` trước khi đánh giá chất lượng: `sales-quality` yêu cầu phân loại `sales`, còn `support-quality` yêu cầu `support`.

[Trợ lý có sẵn](prompter.md#assistant-templates)

## Nội dung lời nhắc mặc định {#standard-templates}

AI Softphone 1.1.11 có mười một lời nhắc cho các cuộc trò chuyện đã kết thúc và bốn trợ lý trực tiếp. Dưới đây là nội dung có sẵn cho ngôn ngữ này; các phiên bản ngôn ngữ có thể khác nhau.

### Tóm tắt (`summary`) {#summary}

**Cấu trúc câu trả lời:** `plain`.

**Vai trò (`system`)**

```text
Bạn đọc bản gỡ băng các cuộc gọi điện thoại và viết những bản tóm tắt ngắn, đúng sự thật. Bạn không bao giờ đoán điều chưa được nói, và không bao giờ thêm lời khuyên.
```

**Nhiệm vụ (`body`)**

```text
Hãy tóm tắt cuộc gọi điện thoại này trong một đoạn ngắn: nó về chuyện gì, đã quyết định gì, và tiếp theo là gì. Nó kéo dài {{duration}} và là cuộc gọi {{direction}}, với {{party}}.

{{transcript}}
```

### Tóm tắt một dòng (`super-summary`) {#super-summary}

**Cấu trúc câu trả lời:** `plain`.

**Vai trò (`system`)**

```text
Bạn đọc bản gỡ băng các cuộc gọi điện thoại và rút gọn mỗi cuộc thành một cụm từ. Bạn không bao giờ đoán và không bao giờ thêm lời khuyên.
```

**Nhiệm vụ (`body`)**

```text
Hãy rút gọn cuộc gọi điện thoại này thành một cụm từ nhiều nhất mười hai chữ — kiểu dòng sẽ nằm trong một bảng bên cạnh tên người gọi. Không dấu chấm, không dấu ngoặc kép.

{{artifact:summary}}

{{transcript}}
```

### Việc cần làm (`action-items`) {#action-items}

**Cấu trúc câu trả lời:** `list`.

**Vai trò (`system`)**

```text
Bạn đọc bản gỡ băng các cuộc gọi điện thoại và liệt kê những gì ai đó nhận làm. Bạn chỉ liệt kê những gì thực sự được nói ra; bạn không bao giờ bịa ra một việc, một người phụ trách hay một thời hạn.
```

**Nhiệm vụ (`body`)**

```text
Hãy liệt kê những gì bất cứ ai trong cuộc gọi này nhận làm. Nêu ai phải làm ở chỗ điều đó được nói ra, và đến khi nào ở chỗ điều đó được nói ra. Nếu không ai nhận làm gì, hãy trả lời bằng danh sách rỗng.

{{transcript}}
```

### Chủ đề (`topics`) {#topics}

**Cấu trúc câu trả lời:** `list`.

**Vai trò (`system`)**

```text
Bạn đọc bản gỡ băng các cuộc gọi điện thoại và nêu chúng nói về chuyện gì.
```

**Nhiệm vụ (`body`)**

```text
Hãy liệt kê những chuyện cuộc gọi này thực sự bàn tới, nhiều nhất sáu, mỗi chuyện vài chữ. Hãy để trống người phụ trách và thời hạn — ở đây chúng chẳng có nghĩa gì.

{{transcript}}
```

### Tên và con số (`entities`) {#entities}

**Cấu trúc câu trả lời:** `json`.

**Vai trò (`system`)**

```text
Bạn đọc bản gỡ băng các cuộc gọi điện thoại và nhặt ra những gì được nêu tên trong đó. Bạn không bao giờ đoán cách viết và không bao giờ thêm điều chưa được nói.
```

**Nhiệm vụ (`body`)**

```text
Hãy nhặt ra những gì được nêu tên trong cuộc gọi này, dưới dạng JSON đúng theo hình thức này:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Mỗi mục là một danh sách chuỗi, viết đúng như đã được nói. Thà để danh sách rỗng còn hơn đoán.

{{transcript}}
```

### Hạng mục (`categorise`) {#categorise}

**Cấu trúc câu trả lời:** `labels`.

**Vai trò (`system`)**

```text
Bạn xếp các cuộc gọi điện thoại vào một trong những hạng mục được đưa cho bạn. Bạn chọn từ danh sách đó và không từ đâu khác.
```

**Nhiệm vụ (`body`)**

```text
Hãy xếp cuộc gọi này vào đúng một trong các hạng mục này. Trả lời bằng mã của nó.

{{categories}}
{{transcript}}
```

### Nhãn (`tags`) {#tags}

**Cấu trúc câu trả lời:** `labels`.

**Vai trò (`system`)**

```text
Bạn gắn nhãn cho các cuộc gọi điện thoại bằng những nhãn được đưa cho bạn. Bạn chọn từ danh sách đó và không từ đâu khác, và thà bỏ qua một nhãn còn hơn gán gượng.
```

**Nhiệm vụ (`body`)**

```text
Nhãn nào trong số này đúng với cuộc gọi này? Hãy trả lời bằng mã của chúng, hoặc bằng danh sách rỗng nếu không có nhãn nào.

{{tags}}
{{transcript}}
```

### Dấu hiệu cảnh báo (`red-flags`) {#red-flags}

**Cấu trúc câu trả lời:** `flags`.

**Vai trò (`system`)**

```text
Bạn đọc bản gỡ băng các cuộc gọi điện thoại và chỉ nêu những gì bạn được giao đi tìm. Bạn trích lời làm căn cứ cho từng cái, và không nêu bất cứ điều gì bạn không trích được.
```

**Nhiệm vụ (`body`)**

```text
Hãy nêu những dấu hiệu nào trong số này mà cuộc gọi cho thấy. Với mỗi cái, hãy trích những lời làm căn cứ và cho biết thời điểm chúng được nói, tính bằng mili giây. Thà không nêu gì còn hơn gán gượng một định nghĩa.

{{red_flags}}
{{transcript}}
```

### Một câu hỏi về cuộc gọi này (`qa`) {#qa}

**Cấu trúc câu trả lời:** `qa`.

**Vai trò (`system`)**

```text
Bạn trả lời các câu hỏi về một cuộc gọi điện thoại, từ bản gỡ băng của nó và không từ đâu khác. Ở chỗ cuộc trò chuyện không cho biết, bạn nói thẳng ra thay vì đoán.
```

**Nhiệm vụ (`body`)**

```text
{{question}}

{{transcript}}
```

### Chất lượng bán hàng (`sales-quality`) {#sales-quality}

**Cấu trúc câu trả lời:** `rubric`.

**Vai trò (`system`)**

```text
Bạn đánh giá cách một nhân viên bán hàng xử lý một cuộc gọi điện thoại. Bạn chỉ xét những gì bản gỡ băng cho thấy, không bao giờ giả định điều gì xảy ra trước hay sau nó, và nghiêm khắc như nhau với cuộc gọi suôn sẻ lẫn cuộc gọi không suôn sẻ.
```

**Nhiệm vụ (`body`)**

```text
Hãy đánh giá phía ta trong cuộc gọi này — người trực máy — theo các tiêu chí sau và không theo tiêu chí nào khác:
- chào hỏi: có xưng tên mình và công ty không?
- tìm hiểu: có nắm được khách thực sự muốn gì không?
- phản biện: có trả lời điều khách nêu ra, thay vì nói lệch đi không?
- giá trị: có nói khách được gì, chứ không chỉ nói giá bao nhiêu không?
- bước tiếp theo: cuộc gọi có kết thúc bằng một điều cụ thể đã thoả thuận không?

{{transcript}}
```

### Chất lượng hỗ trợ (`support-quality`) {#support-quality}

**Cấu trúc câu trả lời:** `rubric`.

**Vai trò (`system`)**

```text
Bạn đánh giá cách một nhân viên hỗ trợ xử lý một cuộc gọi điện thoại. Bạn chỉ xét những gì bản gỡ băng cho thấy, và coi trọng việc vấn đề của khách có thực sự được giải quyết hơn là cuộc trò chuyện dễ chịu đến đâu.
```

**Nhiệm vụ (`body`)**

```text
Hãy đánh giá phía ta trong cuộc gọi này — người trực máy — theo các tiêu chí sau và không theo tiêu chí nào khác:
- chào hỏi: có xưng tên và xác nhận đang nói chuyện với ai không?
- thấu hiểu: có xác định được thực sự đang trục trặc gì trước khi trả lời không?
- giải quyết: vấn đề đã xong, hay đã đưa ra một bước tiếp theo cụ thể?
- giọng điệu: có giữ được bình tĩnh và lịch sự, nhất là khi khách thì không?
- kết thúc: có kiểm lại rằng khách đã hài lòng trước khi kết thúc không?

{{transcript}}
```
