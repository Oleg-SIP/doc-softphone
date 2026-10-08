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
| **Bán hàng** | `sales` | Bán hàng, báo giá, thương lượng hoặc theo dõi một giao dịch mua — kể cả khi khách hỏi một thứ giá bao nhiêu. |
| **Hỗ trợ** | `support` | Giúp ai đó với sản phẩm hoặc dịch vụ họ đã có: một lỗi, một câu hỏi về cách dùng, một lời phàn nàn về cách nó hoạt động. |
| **Cá nhân** | `personal` | Hoàn toàn không phải công việc — một cuộc trò chuyện riêng tình cờ diễn ra trên đường dây này. |
| **Khác** | `other` | Công việc, nhưng không phải bán hàng cũng không phải hỗ trợ: nhà cung cấp, đồng nghiệp, giao hàng, nhầm số. Hãy chọn mục này thay vì đoán giữa các mục kia. |

Nhấn **Thêm** để thêm một hạng mục của riêng bạn.

## Nhãn {#tags}

Các nhãn *có thể cùng đúng với một cuộc trò chuyện*. Nhấn **Thêm** để thêm một nhãn. Danh sách bắt đầu với các mục như:

| Tên | Mã | Dùng cho |
| --- | --- | --- |
| **Đã hứa gọi lại** | `callback` | Ai đó trong cuộc gọi đã hứa gọi lại, hoặc đề nghị được gọi lại. |
| **Than phiền** | `complaint` | Bên kia bày tỏ sự không hài lòng, dù có được giải quyết hay không. |
| **Đã chuyển lên** | `escalation` | Cuộc gọi đã được chuyển cho người khác, hoặc bên kia yêu cầu chuyển. |
| **Khách VIP** | `vip` | Bên kia được đối xử như, hoặc tự nhận là, một khách hàng quan trọng. |

## Dấu hiệu cảnh báo {#red-flags}

Những điều cần chú ý, được tìm thấy trong cuộc trò chuyện kèm bằng chứng và thời điểm — ví dụ *Khách giận dữ* hoặc *Nguy cơ rời bỏ*. Dấu hiệu cảnh báo được vẽ màu đỏ trong [cửa sổ Bản ghi](../interface/recordings.md), và mỗi dấu hiệu mang một mức độ nghiêm trọng: thấp, trung bình hoặc cao.

## Khuôn câu trả lời và ngôn ngữ {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Cài đặt → Từ điển: khuôn câu trả lời và hướng dẫn về ngôn ngữ" />

Xa hơn bên dưới thẻ là các hướng dẫn mà chỉ dẫn được ghép từ đó. Chúng được giữ ở đây để mọi chỉ dẫn có thể dùng cùng một cách diễn đạt, và bạn có thể sửa chúng như mọi mục khác.

| Tên | Mã | Nó bảo mô hình điều gì |
| --- | --- | --- |
| **Nhãn** | `shape-labels` | Trả lời bằng JSON với danh sách mã và mức độ chắc chắn cho từng mã, chỉ dùng các mã trong danh sách đã được đưa. |
| **Điểm số** | `shape-score` | Trả lời bằng một điểm số, lý do và những câu nói làm căn cứ. |
| **Tiêu chí** | `shape-rubric` | Trả lời bằng một điểm tổng và điểm cho từng tiêu chí. |
| **Dấu hiệu** | `shape-flags` | Trả lời bằng các mã trong danh sách, mỗi mã kèm một mức độ nghiêm trọng. |
| **Câu trả lời** | `shape-qa` | Trả lời bằng lời đáp, hoặc nói thẳng rằng cuộc trò chuyện không đề cập, kèm những câu nói làm căn cứ cho lời đáp. |
| **JSON** | `shape-json` | Chỉ trả lời bằng JSON, theo khuôn đã yêu cầu ở trên. |
| **Theo ngôn ngữ đã nói** | `language-as-spoken` | Viết bằng ngôn ngữ của cuộc trò chuyện. |
| **Theo ngôn ngữ đã nói, có nêu tên** | `language-as-spoken-named` | Như trên, có nêu tên ngôn ngữ. |
| **Một ngôn ngữ được nêu** | `language-named` | Viết bằng ngôn ngữ bạn nêu. |

**Thêm** ở cuối danh sách thêm một mục.

## Mặc định {#defaults}

**Khôi phục mặc định** đưa mọi từ điển về như khi đi kèm chương trình, bằng ngôn ngữ giao diện hiện tại. Những gì các cuộc trò chuyện của bạn đã được xếp vào thì được giữ nguyên.
