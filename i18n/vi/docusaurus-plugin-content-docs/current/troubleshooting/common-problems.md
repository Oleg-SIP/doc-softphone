---
title: Sự cố thường gặp
sidebar_position: 2
description: Cần kiểm tra gì khi tài khoản không đăng ký được, không có âm thanh, cuộc gọi hay cuộc họp không được ghi, không có bản chép lời, hoặc liên kết, phím tắt hay API không có tác dụng.
---

Mỗi mục chỉ tới cài đặt quyết định vấn đề đó. Nếu câu trả lời không có ở đây, hãy mở [Chẩn đoán](/troubleshooting/diagnostics): nó cho thấy điện thoại và tổng đài nói gì với nhau.

## Tài khoản không đăng ký được {#the-account-will-not-register}

Chấm cạnh tài khoản trong **Cài đặt → Tài khoản** vẫn xám hoặc đỏ.

1. Kiểm tra **Tên đăng nhập**, **Mật khẩu** và **Địa chỉ máy chủ** trong [biểu mẫu tài khoản](/sip-accounts/setup).
2. Nếu tổng đài của bạn kiểm tra mật khẩu dưới một tên khác với số máy lẻ, hãy điền **Người dùng xác thực** trong **Cài đặt máy chủ**.
3. Đối chiếu **Giao vận** và **Cổng** với những gì tổng đài yêu cầu.
4. Mở thẻ **SIP** của [cửa sổ chẩn đoán](/troubleshooting/diagnostics) và xem yêu cầu `REGISTER` cùng câu trả lời của máy chủ.

## Tôi không nghe được, hoặc người khác không nghe được tôi {#i-cannot-hear-or-i-cannot-be-heard}

Mở [Cài đặt → Thiết bị](/sip-accounts/devices).

- Hãy nói gì đó: thanh dưới **Micrô** phải chuyển động. Nếu không, hãy chọn micrô khác.
- Nhấn **Thử** dưới **Loa** để nghe một âm thanh trên thiết bị bạn đã chọn.
- Kiểm tra các thanh trượt **Âm lượng**. **Tắt tiếng micrô** trên khung cuộc gọi và [phím tắt](/program/shortcuts) **Tắt tiếng micrô** sẽ tắt micrô trong lúc gọi.
- Nhạc chuông có thể được đặt đổ trên một thiết bị khác với thiết bị bạn dùng để nói chuyện — **Nhạc chuông**, danh sách thả xuống thứ hai.

## Cuộc gọi nghe kém, hoặc không bắt đầu được {#the-call-sounds-bad-or-does-not-start}

Các codec được đề nghị theo thứ tự của danh sách trong [Cài đặt → Cuộc gọi](/sip-accounts/calls#audio-formats). Hãy bật các codec mà tổng đài của bạn dùng, và đặt codec tốt nhất lên đầu. Thay đổi có hiệu lực từ cuộc gọi tiếp theo của bạn.

## Cuộc gọi thứ hai không đổ chuông {#a-second-call-does-not-ring}

Điều xảy ra khi có người gọi đến trong lúc bạn đang trong một cuộc gọi được thiết lập ở [Chờ cuộc gọi](/sip-accounts/calls#call-waiting).

## Cuộc gọi không được ghi âm {#a-call-was-not-recorded}

- **Cài đặt → Ghi âm**, danh sách thả xuống đầu tiên, quyết định những cuộc gọi nào được ghi âm; mặc định là **Thủ công**, chỉ ghi âm khi bạn nhấn nút ghi âm trên khung cuộc gọi. Xem [Ghi âm cuộc gọi](/recordings/call-recording).
- Việc ghi âm bắt đầu khi cuộc gọi được trả lời, nên cuộc gọi không được trả lời thì không có tệp.
- Mô-đun **Ghi âm** phải được bật trong [Mô-đun](/application/modules).
- Bản ghi bị xoá bởi các giới hạn ở mục **Lưu giữ**; bản ghi đã ghim không bao giờ bị xoá.

## Cuộc họp trong ứng dụng khác không được thu {#a-meeting-in-another-application-was-not-captured}

Xem [Thu âm ngoài](/capture/).

- **Cho phép thu âm thanh** trong **Cài đặt → Thu âm ngoài** phải được bật.
- Khi **Bắt đầu tự động** đặt là **Hỏi tôi** (mặc định), hãy trả lời câu hỏi khi nó hiện ra; với **Không bao giờ**, hãy tự nhấn **Ghi**.
- Dùng **Thử** trên cùng thẻ: thanh trên phải chuyển động khi bạn nói, thanh dưới khi có gì đó đang phát.
- Mô-đun **Thu âm ngoài** phải được bật trong [Mô-đun](/application/modules).

## Có bản ghi nhưng không có bản chép lời hay bản tóm tắt {#there-is-a-recording-but-no-transcript-or-summary}

- Cuộc trò chuyện chỉ tự được chép lời và xử lý nếu **Xử lý các cuộc trò chuyện tự động** được bật trong [Cài đặt → Xử lý](/ai-processing/processing). Nếu không, hãy yêu cầu trong [cửa sổ Bản ghi](/interface/recordings).
- Phải có một [bộ nhận dạng](/ai-processing/transcription) và một [mô hình ngôn ngữ](/ai-processing/processing#language-models), và mỗi thứ phải trả lời tại địa chỉ của nó.
- Khi chạm tới **Hạn mức tiền** hoặc **Hạn mức token** hằng tháng, các quy tắc tự động dừng lại cho tới khi sang tháng mới. Những gì chính bạn yêu cầu thì không bao giờ bị dừng.
- Các bước trong [Cài đặt → Tổng quan](/interface/settings-overview) cho thấy những gì còn phải thiết lập.

## Điện thoại biến mất khi tôi đóng cửa sổ {#the-phone-disappeared-when-i-closed-the-window}

Khi **Giữ điện thoại chạy khi đóng cửa sổ** được bật, điện thoại vẫn đang chạy và cuộc gọi vẫn đến. Biểu tượng trong vùng thông báo (thanh menu trên macOS) mở lại cửa sổ. Xem [Khởi động](/program/startup).

## Số điện thoại trong trình duyệt hay CRM không gọi được {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Nhấn **Mở liên kết gọi bằng điện thoại này** trong [Cài đặt → Khởi động](/program/startup#call-links). Số được nhấp sẽ hiện trong bàn quay số và chờ ở đó, trừ khi **Gọi ngay, không cần nhấn Gọi** được bật.

## Đèn của nút bấm vẫn xám {#a-buttons-lamp-stays-grey}

Tổng đài không cho biết số máy lẻ có rảnh hay không. Nút vẫn gọi được. Xem [Nút bấm](/sip-accounts/buttons).

## REST API không trả lời {#the-rest-api-does-not-answer}

- **Cho phép các chương trình khác trên máy này điều khiển điện thoại** phải được bật trong [Cài đặt → Tích hợp](/integration/rest-api), và mô-đun **Tích hợp** trong [Mô-đun](/application/modules).
- Địa chỉ là `http://127.0.0.1:8377` trừ khi bạn đã đổi **Cổng**.
- Một nhóm bạn chưa mở ở mục **Truy cập** trả lời mọi yêu cầu bằng `404`.
- Nếu bạn đặt **Token**, các yêu cầu thay đổi dữ liệu đã lưu phải mang token đó trong tiêu đề `Authorization`.
- Thêm các triệu chứng khác có trong [Khi nó không hoạt động](/integration/rest-api#when-it-does-not-work).

## Webhook không đến {#webhooks-do-not-arrive}

Nhấn **Gửi một sự kiện thử** trong [Cài đặt → Tích hợp](/integration/webhooks). Các bộ đếm `webhooks_failed_total` và `webhooks_dropped_total` của REST API cho thấy việc chuyển phát đang diễn ra thế nào; [Khi không có gì đến](/integration/webhooks#when-nothing-arrives) liệt kê ý nghĩa của từng bộ đếm.

## Phím tắt không có tác dụng {#a-hotkey-does-nothing}

Mở [Phím tắt](/program/shortcuts). Phím tắt hoạt động trong lúc điện thoại là chương trình bạn đang dùng; để dùng nó từ mọi chương trình, hãy đánh dấu **Ở mọi nơi**. Nhấp vào phím tắt và nhấn lại tổ hợp phím nếu một chương trình khác đã chiếm nó.
