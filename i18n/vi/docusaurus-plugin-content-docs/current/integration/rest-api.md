---
title: REST API cục bộ
sidebar_position: 2
description: Cho phép các chương trình khác trên máy này điều khiển điện thoại — thực hiện và điều khiển cuộc gọi, đọc danh bạ, lịch sử và tài khoản.
---

AI Softphone có một REST API để tích hợp CTI: một chương trình trên cùng máy tính có thể thực hiện và điều khiển cuộc gọi, đọc danh bạ, lịch sử cuộc gọi và tài khoản SIP, và theo dõi các cuộc gọi đang diễn ra. Không cần SDK, không có trung gian trên đám mây và không có cổng lắng nghe nào mở ra mạng. Yêu cầu và câu trả lời đều là JSON, nên `curl` hay bất kỳ HTTP client nào cũng đủ dùng.

API ở trạng thái **tắt sau khi cài đặt**; không có gì lắng nghe cho tới khi bạn bật nó. Khi đó nó chỉ lắng nghe trên giao diện loopback — *một giao diện web nhỏ chỉ trả lời chính máy tính này* — và không thể truy cập từ mạng văn phòng, VPN hay máy khác.

Hãy dùng API khi chương trình của bạn cần dữ liệu từ điện thoại hoặc phải điều khiển cuộc gọi. Hãy dùng [webhook](/integration/webhooks) khi nó phải phản ứng với cuộc gọi ngay khi chúng diễn ra, mà không cần thăm dò liên tục. Phần lớn các tích hợp dùng cả hai; chúng độc lập với nhau.

## Bật API {#turning-it-on}

Mở **Cài đặt → Tích hợp** và đến mục **Điều khiển cục bộ**.

<Shot name="17b_settings_integration_scrolled" alt="Cài đặt → Tích hợp: điều khiển cục bộ" />

1. Bật **Cho phép các chương trình khác trên máy này điều khiển điện thoại**. Máy chủ khởi động ngay lập tức.
2. Giữ **Cổng** mặc định, `8377`, trừ khi một chương trình khác đã dùng cổng này.
3. Nếu muốn, đặt một **Token**. Sau khi lưu, ô này hiển thị *Đã lưu — gõ để thay thế*.
4. Ở mục **Truy cập**, chọn các nhóm cần mở: **Danh bạ**, **Lịch sử cuộc gọi**, **Cuộc gọi và việc điều khiển chúng**, **Tài khoản**, **Cài đặt**, **Bộ đếm** (các chỉ số). Nhóm đã tắt không bị lọc mà hoàn toàn không được phục vụ.
5. Kiểm tra: `curl http://127.0.0.1:8377/accounts`. Nếu câu trả lời là JSON, API đang hoạt động.

Không có dịch vụ riêng nào được cài đặt và không cần khởi động lại. Phần chương trình làm việc này có thể tắt trong [Mô-đun](/application/modules) (**Tích hợp**).

## Trang của chính API {#the-apis-own-page}

**Mở trang của chính API** mở `http://127.0.0.1:8377` trong trình duyệt. Địa chỉ này trả lời bằng danh sách mọi thứ nó phục vụ, bằng tiếng Anh; các địa chỉ dùng để đọc dữ liệu là những liên kết bạn có thể nhấp vào.

<Shot name="23_api_page" alt="Trang của chính API, http://127.0.0.1:8377/, mở trong trình duyệt" />

## Quyền truy cập và token {#access-and-the-token}

Một chương trình được làm gì phụ thuộc vào việc nó có thay đổi dữ liệu đã lưu hay không, chứ không phụ thuộc vào việc nó có đọc hay không:

- **Không có token**, bất kỳ chương trình nào trên máy tính cũng có thể đọc mọi thứ trong các nhóm đã bật và điều khiển cuộc gọi: gọi, trả lời, cúp máy, giữ máy, tiếp tục, chuyển cuộc gọi và gửi DTMF.
- **Có token** trong tiêu đề `Authorization`, nó còn có thể dùng các endpoint thay đổi dữ liệu đã lưu. Không có token, các endpoint đó không được phục vụ và cũng không được liệt kê trên trang của chính API.

Token được giữ trong kho khoá của máy tính, không nằm trong tệp cài đặt, và không bao giờ được `/settings` trả về.

:::caution
Không có token, bất kỳ chương trình nào đang chạy trên máy tính này đều có thể điều khiển điện thoại, kể cả trả lời cuộc gọi. Trên máy trạm cá nhân, điều đó thường chấp nhận được. Trên máy dùng chung hoặc máy được quản lý tập trung, hãy đặt token và bảo vệ nó như mọi mật khẩu khác. Token chỉ bảo vệ các yêu cầu làm thay đổi dữ liệu đã lưu, không bảo vệ cuộc gọi: để chặn chương trình khác điều khiển cuộc gọi, hãy tắt **Cuộc gọi và việc điều khiển chúng** trong mục **Truy cập**.
:::

## Các endpoint {#endpoints}

Địa chỉ gốc là `http://127.0.0.1:8377`. Các endpoint dưới đây không cần token.

| Phương thức | Đường dẫn | Tác dụng |
| --- | --- | --- |
| GET | `/metrics` | Các bộ đếm, ở định dạng Prometheus. |
| GET | `/ui` | Danh sách bản ghi, dưới dạng trang HTML. |
| GET | `/ui/recordings/{id}` | Một bản ghi kèm bản chép lời, dưới dạng trang HTML. |
| GET | `/ui/recordings/{id}/audio` | Âm thanh cho trang ở trên. |
| GET | `/contacts` | Danh bạ. |
| GET | `/contacts/{id}` | Một liên hệ. |
| GET | `/history` | Nhật ký cuộc gọi, mới nhất ở trên. Nhận `?limit=`, `?missed=true` và `?declined=true`. |
| GET | `/calls` | Các cuộc gọi đang diễn ra. |
| POST | `/calls` | Thực hiện cuộc gọi: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Trả lời cuộc gọi. |
| POST | `/calls/{id}/hangup` | Cúp máy. |
| POST | `/calls/{id}/hold` | Giữ máy. |
| POST | `/calls/{id}/resume` | Tiếp tục cuộc gọi đang giữ. |
| POST | `/calls/{id}/dtmf` | Gửi âm: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Chuyển cuộc gọi: `{"target": "..."}`. |
| GET | `/accounts` | Các tài khoản SIP và trạng thái đăng ký của chúng. Không bao giờ có mật khẩu. |
| GET | `/settings` | Toàn bộ cấu hình, không kèm các thông tin bí mật. |
| GET | `/taxonomy` | Hạng mục, nhãn và dấu hiệu cảnh báo, kèm mã của chúng. |

Mọi mã định danh đều là UUID do điện thoại cấp: `id` của cuộc gọi lấy từ `/calls` hoặc từ câu trả lời của `POST /calls`, `id` của tài khoản lấy từ `/accounts`.

Tên trường viết theo snake_case và phần đuôi cho biết kiểu: `_id` là tham chiếu tới một UUID, `_ts` là thời điểm tính bằng mili giây Unix (UTC), `_s` là độ dài tính bằng giây. Điều này cũng đúng với webhook; chỉ `/settings` giữ tên riêng của nó. Trong REST API, các giá trị này là số JSON, và thời điểm chưa biết là `null`.

## Ví dụ: thực hiện cuộc gọi {#example-placing-a-call}

`POST /calls` thực hiện một cuộc gọi đi. Phần thân là JSON với `number` cần gọi và, tuỳ chọn, `account_id` của tài khoản dùng để gọi:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Câu trả lời là mã định danh của cuộc gọi mới:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` là bắt buộc. Thiếu nó, câu trả lời là `400 {"error":"a call needs a number"}` và không có gì được quay số.
- Số được hoàn thiện trên tài khoản đã chọn theo cách bàn quay số hoàn thiện nó: `1020` được gửi thành `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` hoàn thiện `target` của nó theo cùng cách; đích đã có scheme hoặc `@` được gửi nguyên trạng.
- `account_id` là tuỳ chọn; lấy nó từ `GET /accounts`. Thiếu nó, cuộc gọi đi ra trên tài khoản đang được chọn trong cửa sổ chính.
- Dùng `id` trong `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf` và `transfer`. Các [webhook](/integration/webhooks#an-outgoing-call-event-by-event) của cuộc gọi này mang cùng `id`.

### Từ một trang web: nhấp để gọi {#from-a-web-page-click-to-call}

Một trang gọi tới `127.0.0.1` sẽ đến được máy tính mà trình duyệt đang chạy — cũng chính là máy mà điện thoại đang chạy — nên nút nhấp để gọi trong CRM không cần máy chủ riêng:

```javascript
async function dial(number) {
  const r = await fetch("http://127.0.0.1:8377/calls", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number }),
  });
  if (!r.ok) console.warn("softphone:", (await r.json()).error);
}
```

## Câu trả lời chứa gì {#what-the-answers-contain}

### Các cuộc gọi đang diễn ra: `GET /calls` {#calls-in-progress-get-calls}

Mỗi cuộc gọi có `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts` và `callstate_ts`.

- `state` là `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (do điện thoại này giữ máy), `onhold` (do bên kia giữ máy), `conference` hoặc `ended`. Khi nhiều giá trị cùng áp dụng, `conference` được ưu tiên hơn `hold`, và `hold` hơn `onhold`.
- `muted` cho biết micrô có đang bị tắt tiếng trong cuộc gọi không; việc tắt tiếng không thay đổi `state`.
- `seance_id` là cuộc trò chuyện: các cuộc gọi được liên kết bởi chuyển tiếp, tham vấn hay hội thoại nhóm dùng chung giá trị này.
- `event_ts` là thời điểm câu trả lời được tạo. Hãy so sánh nó với `callstate_ts` để biết cuộc gọi đã ở trạng thái hiện tại bao lâu, mà không cần dựa vào đồng hồ của bạn.

### Tài khoản: `GET /accounts` {#accounts-get-accounts}

Mỗi tài khoản có `id` (chính là `account_id` ở mọi nơi khác), các cài đặt của nó — `transport` (`udp`, `tcp` hoặc `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s` và các trường khác — việc nó có `enabled` hay không, và `state` của nó trên tổng đài: `registered` khi đường dây đang hoạt động. Mật khẩu không bao giờ được đưa vào.

### Lịch sử cuộc gọi: `GET /history` {#call-history-get-history}

Mới nhất ở trên, 100 mục trừ khi `?limit=` quy định khác. `?missed=true` chỉ trả về các cuộc gọi nhỡ, `?declined=true` chỉ trả về các cuộc gọi mà điện thoại này đã từ chối.

| Trường | Ý nghĩa |
| --- | --- |
| `id` | Mã định danh riêng của mục lịch sử. Nó không phải `id` cuộc gọi của `/calls` và của webhook; `seance_id` liên kết hai thứ này. |
| `outcome` | Phân loại chính: `answered`, `missed`, `declined` hoặc `failed`. |
| `answered` | `true` hoặc `false`. |
| `duration_s` | `0` với cuộc gọi chưa bao giờ được kết nối. |
| `number`, `uri` | Bên kia, dưới dạng số máy và địa chỉ SIP. |
| `name` | Lấy từ Danh bạ nếu số đã biết, nếu không thì để trống. Hãy đối chiếu theo `number`, không theo trường này. |
| `dialed` | Các chữ số đã quay, với cuộc gọi đi; để trống với cuộc gọi đến. |
| `account`, `account_id` | Đường dây của cuộc gọi. |
| `reason` | Cuộc gọi kết thúc thế nào: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` nếu một người đã trả lời; nếu không thì là thứ đã trả lời cuộc gọi. |

### Danh bạ: `GET /contacts` {#contacts-get-contacts}

Mỗi liên hệ có `id`, `name`, `number` và đường dây mà nó thuộc về, `account_id` và `account`; `account` để trống nghĩa là liên hệ không gắn với đường dây nào.

### Bản ghi {#recordings}

Bản ghi và bản chép lời không được cung cấp dưới dạng JSON. API phục vụ chúng dưới dạng trang HTML, `/ui` và `/ui/recordings/{id}`: hãy liên kết tới các trang này từ CRM thay vì chuyển âm thanh đi khắp nơi. Liên kết mở trên máy tính đang giữ bản ghi, và âm thanh không bao giờ rời khỏi máy đó.

## Phân loại và cài đặt {#taxonomy-and-settings}

Mỗi mục của `/taxonomy` có một `code` không đổi, một `title` và một `description` bằng ngôn ngữ giao diện, một `kind` (`category`, `tag` hoặc `red_flag`) và, với dấu hiệu cảnh báo, một `severity`. **Hãy đối chiếu theo `code`, không bao giờ theo `title`**: tiêu đề đến bằng ngôn ngữ mà điện thoại đang đặt. Mục có `retired: true` được giữ lại để các cuộc gọi cũ vẫn tra được; nó không còn được gán cho cuộc gọi mới. Hãy tải bảng phân loại một lần khi khởi động để ánh xạ các từ của điện thoại sang các trường của riêng bạn.

`/settings` trả về cấu hình trừ các thông tin bí mật: thiết bị âm thanh và âm lượng, thứ tự ưu tiên codec, giao diện và ngôn ngữ, khởi động, phím tắt, mức chẩn đoán và trạng thái của cả hai tích hợp — hữu ích cho công cụ hỗ trợ cần kiểm tra một máy trạm mà không phải chia sẻ màn hình. `api.disabled` liệt kê các nhóm truy cập đang tắt và `webhooks.silenced` các sự kiện đang tắt; danh sách rỗng nghĩa là mọi thứ đều bật. Nó không bao giờ chứa mật khẩu SIP, token API hay giá trị tiêu đề webhook.

## Lỗi {#errors}

Mọi lỗi đều là JSON với một khoá `error` duy nhất, dành cho con người đọc chứ không phải để phân tích cú pháp.

| Mã trạng thái | Phần thân | Ý nghĩa |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Đường dẫn không tồn tại, hoặc nhóm truy cập của nó đang tắt; cả hai cố ý cho cùng một câu trả lời. |
| 404 | `{"error":"no contact with that id"}` | Đường dẫn đúng, mã định danh thì không. |
| 400 | `{"error":"no call with that id"}` | Cuộc gọi đã kết thúc, hoặc chưa từng tồn tại. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` không có số. Không có gì được quay số. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` không có chữ số. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` không có đích. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Tài khoản của cuộc gọi đã bị xoá trong lúc gọi, nên không thể hoàn thiện đích. Không có gì được gửi tới tổng đài. |

Các yêu cầu bị từ chối được đếm trong `api_requests_refused_total`, nên một tích hợp thất bại âm thầm sẽ lộ ra trong các chỉ số, chứ không chỉ trong nhật ký của riêng bạn.

## Chỉ số {#metrics}

`GET /metrics` trả về mọi bộ đếm của điện thoại, mỗi bộ đếm kèm một đoạn mô tả. Hãy thu thập bằng Prometheus hoặc đọc thủ công.

| Bộ đếm | Đếm |
| --- | --- |
| `calls_incoming_total` | Các cuộc gọi đến đã nhận. |
| `calls_outgoing_total` | Các cuộc gọi đi đã thực hiện. |
| `calls_answered_total` | Các cuộc gọi đã được trả lời. |
| `calls_missed_total` | Các cuộc gọi đến không được trả lời. |
| `calls_declined_total` | Các cuộc gọi bị từ chối ở đây hoặc bởi bên kia. |
| `calls_failed_total` | Các cuộc gọi không thể thiết lập. |
| `registrations_succeeded_total` | Các lần đăng ký SIP thành công. |
| `registrations_failed_total` | Các lần đăng ký SIP bị từ chối hoặc hết thời gian chờ. |
| `webhooks_delivered_total` | Các webhook bên nhận đã chấp nhận. |
| `webhooks_failed_total` | Các webhook bị từ chối hoặc không chuyển phát được. |
| `webhooks_dropped_total` | Các webhook bị bỏ vì hàng đợi đầy. |
| `api_requests_total` | Các yêu cầu API đã xử lý. |
| `api_requests_refused_total` | Các yêu cầu bị từ chối: sai token, nhóm đang tắt hoặc đường dẫn không xác định. |

## Cập nhật một tích hợp cũ {#updating-an-older-integration}

Các phiên bản trước dùng tên camelCase và mã định danh ngắn. `accountId` giờ là `account_id`, `startedAt` là `callstart_ts`, `durationSeconds` là `duration_s`, `answeredBy` là `answered_by`, và trường webhook `at` là `event_ts`. Cuộc gọi và tài khoản chỉ được định danh bằng UUID: `runtimeId` và các mã định danh như `call-3` hay `account-2` không còn được trả về hay chấp nhận.

## Khi nó không hoạt động {#when-it-does-not-work}

| Triệu chứng | Cần kiểm tra gì |
| --- | --- |
| Kết nối bị từ chối trên `127.0.0.1:8377` | Điều khiển cục bộ đang tắt, điện thoại không chạy, hoặc cổng đã bị đổi. |
| `404 {"error":"no such endpoint"}` với một đường dẫn có trên trang này | Nhóm truy cập của nó đang tắt. |
| Đọc được, nhưng ghi bị từ chối | Các endpoint thay đổi dữ liệu đã lưu cần token trong tiêu đề `Authorization`. |
| Tiêu đề hạng mục không phải tiếng Anh | Tiêu đề theo ngôn ngữ giao diện. Hãy đối chiếu theo `code` từ `/taxonomy`. |
| Thiếu `accountId`, `startedAt` hoặc `at` | Tích hợp được viết cho các tên cũ; xem ở trên. |

Với sự cố về đăng ký hoặc chính cuộc gọi, hãy mở [Chẩn đoán](/troubleshooting/diagnostics).
