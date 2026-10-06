---
title: Cửa sổ chính
sidebar_position: 1
description: Điện thoại ở bên trái, thư viện và cài đặt ở bên phải — bố cục cửa sổ chính của AI Softphone.
---

Cửa sổ chính chính là chiếc điện thoại. Với bố cục mặc định, **Một cửa sổ**, điện thoại nằm bên trái và mọi thứ khác mở ra bên phải. [Bố cục có thể thay đổi](../program/appearance.md).

<Shot name="03_contacts" full alt="Cửa sổ chính: điện thoại ở bên trái và thẻ Danh bạ ở bên phải" />

## Điện thoại {#the-phone}

Từ trên xuống dưới, phía bên trái gồm:

- ô **Số máy**;
- bàn phím và phím gọi;
- các ô tài khoản;
- các nút bấm theo dõi những số máy lẻ khác;
- bốn mục để chuyển đến: **Bản ghi**, **Danh bạ**, **Lịch sử** và **Cài đặt**.

### Bàn quay số {#the-dialler}

- **Số máy** — gõ hoặc dán số cần gọi. Biểu tượng đồng hồ ở đầu bên phải của ô mở danh sách các số bạn đã gọi hoặc đã gọi cho bạn gần đây.
- Các phím tròn **1–9**, **\***, **0** và **#** nhập số, và trong lúc gọi chúng gửi âm (DTMF).
- Phím hình ống nghe thực hiện cuộc gọi. Phím này có màu xám cho tới khi có số.

<Shot name="22_last_calls" full alt="Danh sách cuộc gọi gần đây dưới ô Số máy, cạnh thẻ Lịch sử" />

Khi danh sách các số gần đây đang mở, ô hiển thị một mũi tên và phím gọi chuyển sang bên phải mũi tên. Mỗi mục là một cái tên, hoặc một số nếu người gọi không có trong [Danh bạ](contacts-history.md), kèm ngày. Ống nghe màu đỏ đánh dấu cuộc gọi nhỡ; số lần lặp trong ngoặc — ví dụ *Bộ phận hỗ trợ (4)* — nghĩa là có nhiều cuộc gọi liên tiếp với cùng một bên.

### Các ô tài khoản {#the-account-chips}

Dưới bàn phím có một ô cho mỗi [tài khoản](../sip-accounts/setup.md). Chấm xanh nghĩa là tài khoản đã đăng ký trên tổng đài. Ô được làm nổi bật (trong hình là **305 Hỗ trợ**) là tài khoản sẽ dùng cho cuộc gọi tiếp theo; nhấn vào một ô khác để đổi. Nút tròn màu đỏ bên phải các ô là chế độ không làm phiền.

### Các nút bấm {#the-buttons}

Dưới các ô tài khoản là các [nút bấm](../sip-accounts/buttons.md) bạn đã tạo cho đồng nghiệp và các đường dây, mỗi nút có một đèn — trong hình là **Nguyễn** và **Kho hàng**. Nhấn một nút để gọi số của nó.

### Bản ghi, Danh bạ, Lịch sử, Cài đặt {#recordings-contacts-history-settings}

Bốn mục ở dưới cùng này mở một thẻ ở bên phải, cạnh nhau: [Bản ghi](../recordings/recordings-window.md), [Danh bạ và Lịch sử](contacts-history.md) và [Cài đặt](settings-overview.md). Các thẻ bạn đã mở ở lại trên hàng phía trên cùng của nửa bên phải.

## Cuộc gọi đang diễn ra {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Một cuộc gọi đang diễn ra" />

Trong khi cuộc gọi diễn ra, ô số máy chuyển lên trên cùng với biểu tượng bàn phím bên trong, và cuộc gọi được hiển thị trên một khung:

- trạng thái và thời lượng cuộc gọi (**Đang trong cuộc gọi · 0:21**), tên của bên kia, **Đường dây** và tên tài khoản đang dùng cho cuộc gọi, cùng số máy;
- hai thanh mức âm thẳng đứng ở hai bên khung, mỗi thanh cho một kênh âm thanh;
- một hàng nút: ghi âm (hình tròn), tắt tiếng (micrô), giữ máy (tạm dừng) và nút **Cúp máy** màu đỏ;
- hàng thứ hai: chuyển cuộc gọi (ống nghe có mũi tên) và bàn phím.

Cuộc gọi có thể được chuyển thẳng, hoặc sau khi bạn đã nói chuyện trước với người nhận.

Nếu số máy có trong **Danh bạ**, tên sẽ được hiển thị thay cho số. Các thao tác này cũng có [phím tắt](../program/shortcuts.md): trả lời, cúp máy, giữ máy và tắt tiếng.

## Nhiều cuộc gọi cùng lúc {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Nhiều cuộc gọi" />

Cuộc gọi đến được báo bằng một biểu ngữ dù bạn đang làm việc ở đâu, kể cả khi điện thoại đang ẩn. Một cuộc gọi đến mới xuất hiện trên khung riêng phía trên danh sách, với một nút xanh, một nút vàng và một nút đỏ, cùng một dòng cho biết bạn đang nói chuyện với ai (**Đang trong cuộc gọi với …**). Danh sách bên dưới hiển thị mọi cuộc gọi kèm trạng thái — **Đang giữ máy**, **Đang trong cuộc gọi**, **Cuộc gọi đến** — và tài khoản của nó. Biểu tượng tạm dừng đánh dấu cuộc gọi đang giữ, còn biểu tượng loa đánh dấu cuộc gọi bạn đang nói.

Điều xảy ra khi có người gọi đến trong lúc bạn đang trong một cuộc gọi được thiết lập trong [Cài đặt cuộc gọi](../sip-accounts/calls.md#call-waiting).

## Hội thoại nhóm {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Một hội thoại nhóm" />

Các cuộc gọi đã được gộp hiển thị thành một khung **Hội thoại nhóm** trên đường dây của tài khoản. Mỗi người tham gia được liệt kê kèm thời gian trong cuộc gọi và nút **Cúp máy** riêng. Các nút bên dưới ghi âm, tắt tiếng và kết thúc hội thoại nhóm cho tất cả mọi người; nút rộng ở dưới cùng tách hội thoại nhóm trở lại thành các cuộc gọi riêng.

## Thu âm ngoài {#capture}

Khi [thu từ ứng dụng khác](../capture/capture.md) được cho phép trong **Cài đặt → Thu âm ngoài**, một dải xuất hiện giữa các ô tài khoản và các nút bấm.

<Shot name="10_settings_capture" full alt="Dải Thu âm ngoài ở chân điện thoại: Thu âm ngoài · sẵn sàng, Ghi và hai thanh mức âm" />

- **Thu âm ngoài · sẵn sàng** cho biết chương trình đang chờ nghe một cuộc trò chuyện trong ứng dụng khác.
- **Ghi** bắt đầu thu bằng tay.
- Hai thanh mảnh bên dưới cho biết mức âm thanh: thanh trên là bạn, thanh dưới là những gì máy tính phát ra. Cách vẽ chúng được thiết lập ở **Hình trên dải ở chân điện thoại**.

Chương trình cũng có thể nằm trong khay hệ thống (thanh menu trên macOS) và được gọi lên bằng [phím tắt](../program/shortcuts.md).
