---
title: Từ điển
sidebar_position: 4
description: Hạng mục, nhãn và dấu hiệu cảnh báo của riêng bạn — những từ dùng để phân loại các cuộc trò chuyện.
---

**Cài đặt → Từ điển** chứa những từ mà một cuộc trò chuyện có thể được xếp vào, được gắn nhãn hoặc được cảnh báo. Các danh sách này là những gì mô hình được xem và buộc phải chọn trong đó, nên câu trả lời luôn là thứ bạn có thể tìm kiếm sau này.

<Shot name="13_settings_dictionaries" alt="Cài đặt → Từ điển" />

**Hiện mục đã xoá** hiển thị các mục bạn đã xoá.

Mỗi mục gồm một tên, một mã ngắn in chữ nhỏ và một mô tả cho mô hình biết khi nào nên chọn nó. Mã là thứ được lưu và được [REST API](../integration/rest-api.md#taxonomy-and-settings) trả về, nên nó giữ nguyên khi bạn đổi tên mục.

## Hạng mục {#categories}

Cuộc trò chuyện nói về điều gì; **mỗi cuộc trò chuyện chọn một hạng mục**. Chương trình bắt đầu với bốn hạng mục:

| Tên | Mã | Dùng cho |
| --- | --- | --- |
| **Bán hàng** | `sales` | Bán, báo giá, thương lượng hay theo sát một vụ mua — kể cả khách hỏi giá một thứ gì đó. |
| **Hỗ trợ** | `support` | Giúp ai đó về sản phẩm hay dịch vụ họ đã có: một hỏng hóc, một câu hỏi về cách dùng, một lời than phiền về cách nó hoạt động. |
| **Cá nhân** | `personal` | Hoàn toàn không phải việc công — một cuộc trò chuyện riêng tình cờ diễn ra trên đường dây này. |
| **Khác** | `other` | Việc công, nhưng không phải bán hàng cũng chẳng phải hỗ trợ: một nhà cung cấp, một đồng nghiệp, một chuyến giao hàng, một cuộc gọi nhầm. Hãy chọn cái này thay vì đoán giữa những cái kia. |

Nhấn **Thêm** để thêm một hạng mục của riêng bạn.

## Nhãn {#tags}

Các nhãn *có thể cùng đúng với một cuộc trò chuyện*. Nhấn **Thêm** để thêm một nhãn. Danh sách bắt đầu với các mục như:

| Tên | Mã | Dùng cho |
| --- | --- | --- |
| **Đã hứa gọi lại** | `callback` | Ai đó trong cuộc gọi này hứa sẽ gọi lại, hoặc xin được gọi lại. |
| **Than phiền** | `complaint` | Phía bên kia bày tỏ sự không hài lòng, dù đã được giải quyết hay chưa. |
| **Đã chuyển lên** | `escalation` | Cuộc gọi được giao cho người khác, hoặc phía bên kia đề nghị như vậy. |
| **Khách VIP** | `vip` | Phía bên kia được đối xử như một khách hàng quan trọng, hoặc tự nói mình là như vậy. |

## Dấu hiệu cảnh báo {#red-flags}

Những điều cần chú ý, được tìm thấy trong cuộc trò chuyện kèm bằng chứng và thời điểm — ví dụ *Khách giận dữ* hoặc *Nguy cơ rời bỏ*. Dấu hiệu cảnh báo được vẽ màu đỏ trong [cửa sổ Bản ghi](../interface/recordings.md), và mỗi dấu hiệu mang một mức độ nghiêm trọng: thấp, trung bình hoặc cao.

| Tên | Mã | `severity` | Dùng cho |
| --- | --- | --- | --- |
| **Khách giận dữ** | `angry-customer` | `high` | Nghe rõ phía bên kia đang giận, xúc phạm, hoặc doạ sẽ bỏ đi. |
| **Nguy cơ rời bỏ** | `churn-risk` | `high` | Việc huỷ, không gia hạn hay chuyển sang bên khác đã được nêu ra, dù bình thản đến đâu. |
| **Đã hứa** | `promise-made` | `medium` | Phía ta đã cam kết một điều cụ thể — một ngày, một mức giá, một lần sửa, một khoản hoàn tiền. |
| **Dữ liệu nhạy cảm** | `sensitive-data` | `high` | Một số thẻ, mật khẩu, số giấy tờ hay bất cứ thứ gì không nên có trong bản ghi đã được đọc lên thành tiếng. |
| **Đối thủ** | `competitor` | `low` | Phía bên kia nêu tên một bên khác cung cấp thứ tương tự, hoặc so sánh chúng ta với họ. |

## Chỉ dẫn {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Cài đặt → Từ điển: khuôn câu trả lời và hướng dẫn về ngôn ngữ" />

*Những gì được thêm vào mọi chỉ dẫn về hình thức câu trả lời và ngôn ngữ để viết.* Chúng được giữ ở đây để mọi chỉ dẫn có thể dùng cùng một cách diễn đạt, và bạn có thể sửa chúng như mọi mục khác — hoặc tự viết, chẳng hạn *trả lời ngắn gọn* hay *đừng bao giờ nêu giá*, rồi đánh dấu chúng ở **Gửi kèm** trong bất kỳ chỉ dẫn nào.

| Tên | Mã | Nó bảo mô hình điều gì |
| --- | --- | --- |
| **Văn xuôi** | `shape-plain` | Trả lời bằng văn xuôi thông thường, không JSON, danh sách hay tiêu đề. |
| **Các mục** | `shape-list` | Trả lời bằng danh sách việc cần làm, mỗi việc kèm ai làm và khi nào. |
| **Nhãn** | `shape-labels` | Trả lời bằng JSON với danh sách mã và mức độ chắc chắn cho từng mã, chỉ dùng các mã trong danh sách đã được đưa. |
| **Điểm số** | `shape-score` | Trả lời bằng một điểm số, lý do và những câu nói làm căn cứ. |
| **Tiêu chí** | `shape-rubric` | Trả lời bằng một điểm tổng và điểm cho từng tiêu chí. |
| **Dấu hiệu** | `shape-flags` | Trả lời bằng các mã trong danh sách, mỗi mã kèm một mức độ nghiêm trọng. |
| **Câu trả lời** | `shape-qa` | Trả lời bằng lời đáp, hoặc nói thẳng rằng cuộc trò chuyện không đề cập, kèm những câu nói làm căn cứ cho lời đáp. |
| **JSON** | `shape-json` | Chỉ trả lời bằng JSON, theo khuôn đã yêu cầu ở trên. |
| **Theo ngôn ngữ đã nói** | `language-as-spoken` | Viết bằng ngôn ngữ của cuộc trò chuyện. |
| **Theo ngôn ngữ đã nói, có nêu tên** | `language-as-spoken-named` | Như trên, có nêu tên ngôn ngữ. |
| **Một ngôn ngữ được nêu** | `language-named` | Viết bằng ngôn ngữ bạn nêu. |

**Thêm** ở đầu danh sách thêm một mục.

## Mặc định {#defaults}

**Khôi phục mặc định** đưa mọi từ điển về như khi đi kèm chương trình, bằng ngôn ngữ giao diện hiện tại. Những gì các cuộc trò chuyện của bạn đã được xếp vào thì được giữ nguyên.

## Định dạng câu trả lời {#response-formats}

Các khối này giữ nguyên hướng dẫn có sẵn. Chúng mô tả định dạng câu trả lời; các lựa chọn thay thế là cách ký hiệu, không phải ví dụ JSON có thể thực thi.

### Văn xuôi (`shape-plain`) {#shape-plain}

```text
Hãy trả lời bằng văn xuôi thường. Đừng dùng JSON, danh sách hay tiêu đề.
```

### Các mục (`shape-list`) {#shape-list}

```text
Chỉ trả lời bằng JSON, đúng theo hình thức này:
{"items": [{"text": "việc cần làm", "owner": "ai, hoặc để trống", "due": "khi nào, hoặc để trống"}]}
Khi không có gì để liệt kê, hãy dùng mảng rỗng. Đừng viết gì ngoài JSON.
```

### Nhãn (`shape-labels`) {#shape-labels}

```text
Chỉ trả lời bằng JSON, đúng theo hình thức này:
{"labels": [{"code": "một mã trong danh sách được đưa cho bạn", "confidence": 0.0}]}
Chỉ dùng các mã trong danh sách. Khi không mã nào hợp, hãy dùng mảng rỗng.
Đừng bịa ra mã, và đừng viết gì ngoài JSON.
```

### Điểm số (`shape-score`) {#shape-score}

```text
Chỉ trả lời bằng JSON, đúng theo hình thức này:
{"score": 3, "rationale": "vì sao là con số đó chứ không phải cao hơn một bậc",
 "evidence": [{"at_ms": 0, "quote": "những lời làm căn cứ"}]}
Điểm số là một số nguyên từ 1 đến 5. Đừng viết gì ngoài JSON.
```

### Tiêu chí (`shape-rubric`) {#shape-rubric}

```text
Chỉ trả lời bằng JSON, đúng theo hình thức này:
{"overall": 3, "rationale": "vì sao là con số đó chứ không phải cao hơn một bậc",
 "criteria": [{"name": "tiêu chí đúng như được đưa cho bạn",
               "verdict": "pass" hoặc "weak" hoặc "fail" hoặc "n/a",
               "note": "một câu"}]}
Hãy xét mọi tiêu chí được đưa cho bạn và không xét cái nào khác. Điểm chung là
một số nguyên từ 1 đến 5. Đừng viết gì ngoài JSON.
```

### Dấu hiệu (`shape-flags`) {#shape-flags}

```text
Chỉ trả lời bằng JSON, đúng theo hình thức này:
{"flags": [{"code": "một mã trong danh sách được đưa cho bạn",
            "severity": "low" hoặc "medium" hoặc "high",
            "evidence": "những lời làm căn cứ",
            "at_ms": 0}]}
Chỉ dùng các mã trong danh sách, và nêu mỗi mã nhiều nhất một lần. Khi không có
gì hợp, hãy dùng mảng rỗng. Đừng viết gì ngoài JSON.
```

### Câu trả lời (`shape-qa`) {#shape-qa}

```text
Chỉ trả lời bằng JSON, đúng theo hình thức này:
{"answer": "câu trả lời của bạn, hoặc nói thẳng là cuộc trò chuyện không cho biết",
 "citations": [{"at_ms": 0, "quote": "những lời mà câu trả lời dựa vào"}]}
Đừng trả lời từ bất cứ đâu ngoài cuộc trò chuyện. Đừng viết gì ngoài JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Chỉ trả lời bằng JSON, theo hình thức đã nêu ở trên. Đừng viết gì ngoài JSON.
```

### Theo ngôn ngữ đã nói (`language-as-spoken`) {#language-as-spoken}

```text
Hãy viết câu trả lời bằng đúng ngôn ngữ của cuộc trò chuyện.
```

### Theo ngôn ngữ đã nói, có nêu tên (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Hãy viết câu trả lời bằng đúng ngôn ngữ của cuộc trò chuyện, tức là {language}.
```

### Một ngôn ngữ được nêu (`language-named`) {#language-named}

```text
Hãy viết câu trả lời bằng ngôn ngữ này: {language}.
```
