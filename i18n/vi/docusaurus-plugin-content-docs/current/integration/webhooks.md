---
title: Webhook
sidebar_position: 1
description: Để điện thoại gửi một yêu cầu tới CRM hoặc hệ thống khác của bạn khi cuộc gọi bắt đầu, thay đổi hoặc kết thúc — kèm các yêu cầu chính xác của một cuộc gọi đến và một cuộc gọi đi.
---

Webhook là yêu cầu mà điện thoại gửi tới một địa chỉ bạn chọn mỗi khi có điều gì xảy ra với cuộc gọi. Nhờ đó CRM có thể mở hồ sơ khách hàng trước hồi chuông thứ hai, ghi nhận cuộc gọi khi nó kết thúc, hoặc bật một đèn trên bảng hiển thị treo tường. Webhook không cần quy tắc tường lửa cho lưu lượng đi vào: chính điện thoại kết nối ra tới bạn. Vì các yêu cầu được gửi từ máy trạm, địa chỉ chỉ cần truy cập được từ máy tính đó — một địa chỉ nội bộ `http://crm.local/calls` cũng hoạt động tốt như một địa chỉ HTTPS công khai.

Webhook ở trạng thái **tắt** sau khi cài đặt, cho tới khi bạn bật chúng. Chúng hoạt động cùng với [REST API cục bộ](/integration/rest-api): sự kiện cho biết có gì đó đã thay đổi, còn API cung cấp chi tiết hiện tại.

## Bật webhook {#turning-them-on}

Mở **Cài đặt → Tích hợp**. **Webhook** là phần đầu tiên của thẻ.

<Shot name="24_webhooks" alt="Cài đặt → Tích hợp → Webhook, với địa chỉ https://crm.local/calls" />

1. Đánh dấu **Báo cho hệ thống khác về các cuộc gọi**. *Một yêu cầu được gửi cho mỗi sự kiện bạn đánh dấu bên dưới.*
2. Nhập **Địa chỉ** sẽ nhận các sự kiện, ví dụ `https://crm.local/calls`.
3. Chọn **Phương thức**: **POST** (mặc định) hoặc **GET**.
4. Ở mục **Sự kiện**, đánh dấu những gì cần gửi: **Một cuộc gọi mới**, **Một cuộc gọi kết thúc**, **Một cuộc gọi đổi trạng thái**.
5. Nếu muốn, ở mục **Xác thực**, đặt một tiêu đề mà bên nhận của bạn có thể kiểm tra: **Tên tiêu đề** (gợi ý là `Authorization`) và **Giá trị tiêu đề**. Giá trị được giữ trong kho khoá của máy tính, không bao giờ nằm trong tệp cài đặt; sau khi lưu, ô này hiển thị *Đã lưu — gõ để thay thế*.
6. Nhấn **Gửi một sự kiện thử** để xem nó có đến không. Thao tác này gửi một sự kiện cho một cuộc gọi chưa từng xảy ra, với cùng các tiêu đề như sự kiện thật. Hãy ghi lại yêu cầu thô và xây dựng bên nhận dựa trên những gì phiên bản của bạn thực sự gửi.

Phần chương trình gửi các yêu cầu là mô-đun **Tích hợp**; nó có thể tắt trong [Mô-đun](/application/modules).

## Các sự kiện {#the-events}

| Đánh dấu là | Sự kiện | Được gửi khi |
| --- | --- | --- |
| **Một cuộc gọi mới** | `call-started` | Một cuộc gọi đến bắt đầu đổ chuông hoặc một cuộc gọi đi được thực hiện. |
| **Một cuộc gọi đổi trạng thái** | `call-state-changed` | `state` của cuộc gọi thay đổi: cuộc gọi được trả lời, được giữ máy hoặc tiếp tục từ một trong hai phía, hoặc tham gia hay rời một hội thoại nhóm. Việc tắt tiếng không gửi sự kiện này. |
| **Một cuộc gọi kết thúc** | `call-ended` | Cuộc gọi đã kết thúc. |

Mỗi sự kiện có thể được đánh dấu riêng. Màn hình bật hồ sơ khách hàng chỉ cần sự kiện đầu; nhật ký cuộc gọi chỉ cần sự kiện cuối. `call-started` được gửi đầu tiên và nên được xử lý nhanh.

## Yêu cầu trông như thế nào {#what-the-request-looks-like}

Với địa chỉ `https://crm.local/calls` và phương thức **POST**, điện thoại gửi nội dung sau. Phần thân là JSON, còn tiêu đề là tiêu đề bạn đặt ở mục **Xác thực**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` mang phiên bản của chương trình và cách nó được cài đặt.

## Cuộc gọi đến, từng sự kiện một {#an-incoming-call-event-by-event}

Một cuộc gọi từ số máy lẻ `1020` tới tài khoản `1002` đổ chuông, được trả lời, và người trả lời gác máy bốn giây sau đó. Khi cả ba sự kiện đều được đánh dấu, bên nhận nhận được ba yêu cầu, lần lượt từng cái. Tất cả đều mang cùng `id` và `seance_id`.

### 1. Đổ chuông: `call-started` {#1-it-rings-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021263333",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791021263333",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

Đây là lúc tra người gọi theo `number` và hiển thị hồ sơ khách hàng. `state` là `ringing-in` và `duration_s` là `0`.

### 2. Được trả lời: `call-state-changed` {#2-it-is-answered-call-state-changed}

Khoảng ba giây sau:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021266126",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791021266131",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` giờ là `active`, và `callstate_ts` đã chuyển sang thời điểm thay đổi trong khi `callstart_ts` vẫn giữ nguyên.

### 3. Kết thúc: `call-ended` {#3-it-ends-call-ended}

Sau bốn giây trò chuyện:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021270400",
  "dialed": "",
  "direction": "in",
  "duration_s": "4",
  "event": "call-ended",
  "event_ts": "1791021270406",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` là `ended`, `duration_s` là thời lượng cuộc trò chuyện, và `reason` cho biết ai đã kết thúc nó: ở đây là `local-hangup`, vì người ở điện thoại này đã gác máy.

## Cuộc gọi đi, từng sự kiện một {#an-outgoing-call-event-by-event}

Cũng số máy lẻ đó được gọi từ tài khoản `1002`: người dùng quay số `1020`, điện thoại đổ chuông, phía bên kia trả lời, nói chuyện bảy giây rồi gác máy. Bên nhận nhận được bốn yêu cầu, nhiều hơn cuộc gọi đến một yêu cầu, vì cuộc gọi đi có trạng thái riêng trong lúc đổ chuông ở đầu bên kia.

### 1. Được quay số: `call-started` {#1-it-is-dialled-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791023883072",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "dialing",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`direction` là `out`, `state` là `dialing`, và `dialed` chứa số đúng như đã được quay. Điện thoại chưa biết tên của bên kia, nên `name` để trống.

### 2. Đổ chuông ở đầu bên kia: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Nửa giây sau:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883591",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023883591",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ringing-out",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`state` là `ringing-out`.

### 3. Phía bên kia trả lời: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Bốn giây sau đó:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023887072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023887076",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` là `active`. `name` giờ đã được điền, và `uri` là địa chỉ của bên kia theo như câu trả lời báo về. `duration_s` vẫn là `0`: nó được đếm từ thời điểm này.

### 4. Kết thúc: `call-ended` {#4-it-ends-call-ended}

Bảy giây sau, phía bên kia gác máy:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023894781",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "7",
  "event": "call-ended",
  "event_ts": "1791023894789",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`duration_s` là `7`, và `reason` là `remote-hangup`, vì phía bên kia đã kết thúc cuộc gọi. Khi chính bạn gác máy, giá trị là `local-hangup`, như trong cuộc gọi đến ở trên.

### Các trạng thái, đặt cạnh nhau {#the-states-side-by-side}

| | Cuộc gọi đến | Cuộc gọi đi |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, rồi `active` |
| `call-ended` | `ended` | `ended` |

## Các trường {#the-fields}

**Mọi giá trị đều là chuỗi**, kể cả số và dấu thời gian: `"duration_s": "42"`. Thời điểm chưa biết là một chuỗi rỗng. Tên trường theo một quy ước: `_id` là mã định danh, `_ts` là thời gian Unix tính bằng mili giây (UTC), `_s` là độ dài tính bằng giây — giống như trong REST API, nơi các giá trị là số JSON.

| Trường | Ý nghĩa |
| --- | --- |
| `event` | `call-started`, `call-state-changed` hoặc `call-ended`. |
| `id` | Cuộc gọi: cùng UUID như trong `GET /calls` và `/calls/{id}/…`, và giống nhau trong mọi sự kiện của cuộc gọi. |
| `seance_id` | Cuộc trò chuyện mà cuộc gọi thuộc về; xem [bên dưới](#one-conversation-across-transfers). |
| `direction` | `in` hoặc `out`. |
| `state` | Cùng các giá trị như trong `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (do điện thoại này giữ máy), `onhold` (do bên kia giữ máy), `conference` hoặc `ended`. |
| `number` | Số máy của bên kia. Hãy đối chiếu bản ghi CRM của bạn theo trường này. |
| `name` | Tên của bên kia, lấy từ Danh bạ; có thể để trống, và có thể được điền sau trong cuộc gọi, như trong cuộc gọi đi ở trên. |
| `uri` | Địa chỉ SIP của bên kia. |
| `dialed` | Các chữ số đã quay, với cuộc gọi đi; để trống với cuộc gọi đến. |
| `account`, `account_id` | Đường dây của cuộc gọi: `username@server`, và mã định danh lấy từ `GET /accounts`. |
| `event_ts` | Thời điểm sự kiện xảy ra. |
| `callstart_ts` | Thời điểm điện thoại biết đến cuộc gọi lần đầu. |
| `callstate_ts` | Thời điểm cuộc gọi chuyển sang `state` hiện tại. |
| `duration_s` | Thời gian đàm thoại tính bằng giây, từ lúc trả lời đến lúc gác máy. Được đặt trong `call-ended` với cuộc gọi đã được trả lời; ngoài ra là `0`. |
| `reason` | Cuộc gọi kết thúc thế nào: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; trước đó là `none`. |
| `answered_by` | `no` nếu một người đã trả lời cuộc gọi; nếu không thì là thứ đã trả lời nó. |

## Một cuộc trò chuyện qua các lần chuyển {#one-conversation-across-transfers}

`seance_id` gom các cuộc gọi tạo nên một cuộc trò chuyện. Một cuộc gọi được thực hiện hoặc nhận từ đầu sẽ bắt đầu một cuộc trò chuyện mới. Cuộc gọi tạo ra do chuyển tiếp, cuộc gọi thay thế một cuộc gọi khác, cuộc gọi tham vấn về một cuộc gọi và mọi cuộc gọi được gộp vào hội thoại nhóm đều giữ `seance_id` của cuộc gọi gốc.

Giữa các điện thoại, nó được truyền trong tiêu đề SIP `X-Seance-Id`: khi một cuộc gọi được chuyển cho đồng nghiệp cũng dùng AI Softphone, và tổng đài chuyển tiếp tiêu đề này, cả hai máy trạm đều báo cùng một `seance_id`.

## GET thay cho POST {#get-instead-of-post}

**GET** dành cho các bên nhận không thể nhận phần thân yêu cầu, như một CRM cũ hoặc một cầu nối dạng script. Khi đó các trường giống hệt được gửi dưới dạng tham số truy vấn.

Với **GET**, địa chỉ có thể là một mẫu: mỗi `[field]` được thay bằng giá trị của trường đó, đã mã hoá phần trăm. Ví dụ:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Các chỗ giữ chỗ dùng tên trường ở trên. Các mẫu đã lưu với tên cũ (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) vẫn tiếp tục hoạt động.

## Các sự kiện được chuyển phát thế nào {#how-the-events-are-delivered}

| Hành vi | Ý nghĩa với bạn |
| --- | --- |
| Sự kiện được đưa vào hàng đợi, không gửi từ chính cuộc gọi | Bên nhận chậm không bao giờ làm chậm việc đổ chuông, cuộc gọi hay việc chuyển cuộc gọi. |
| Hàng đợi đầy sẽ bỏ sự kiện | Nếu bên nhận của bạn ngừng trả lời, sự kiện bị mất nhưng điện thoại vẫn tiếp tục hoạt động. Hãy theo dõi `webhooks_dropped_total`. |
| Lần chuyển phát bị từ chối hoặc không tới được đều được đếm | `webhooks_failed_total` tăng trong khi `webhooks_delivered_total` đứng yên cho thấy vấn đề nằm ở bên nhận. |
| Sự kiện đến theo thứ tự | Cuộc gọi bắt đầu, rồi các thay đổi trạng thái, rồi cuộc gọi kết thúc. Để sắp xếp các sự kiện đã lưu, hãy dùng `callstate_ts`, không dùng thời điểm chúng đến. |
| Ít nhất một lần | Cùng một sự kiện có thể đến hai lần. `id`, `event` và `callstate_ts` cùng nhau xác định một sự kiện: hãy để trình xử lý bỏ qua sự kiện nó đã thấy. |

## Nhận các sự kiện {#receiving-the-events}

Quy tắc duy nhất cho bên nhận: **trả lời `200` ngay lập tức, rồi mới làm việc sau.** Bên nhận chậm không làm chậm điện thoại, nhưng nó làm đầy hàng đợi, và hàng đợi đầy sẽ bỏ sự kiện.

Ví dụ, trong Node.js với Express:

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // the Header value from Settings

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST sends a JSON body, GET sends query parameters
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // answer first

  setImmediate(() => {                          // then do the work
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // your code
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // your code
    }
  });
});

app.listen(8080);
```

Để ghi lại kết cục của một cuộc gọi — đã trả lời, nhỡ, bị từ chối — hãy lấy mục có cùng `seance_id` và `number` từ `GET /history?limit=20` của [REST API](/integration/rest-api#call-history-get-history). Khi dịch vụ của bạn khởi động lại sau một thời gian gián đoạn, hãy đọc `GET /history?limit=200` và lưu những gì bạn đã bỏ lỡ: webhook cho thời gian thực, lịch sử để lấp chỗ trống.

Để xem các yêu cầu trước khi CRM sẵn sàng, hãy trỏ **Địa chỉ** tới một công cụ kiểm tra yêu cầu trực tuyến và nhấn **Gửi một sự kiện thử**.

## Khi không có gì đến {#when-nothing-arrives}

| Triệu chứng | Cần kiểm tra gì |
| --- | --- |
| Hoàn toàn không có webhook nào | Nhấn **Gửi một sự kiện thử**. Nếu nó đến, các sự kiện bạn cần chưa được đánh dấu; nếu không, địa chỉ sai hoặc không truy cập được từ máy trạm. |
| `webhooks_failed_total` liên tục tăng | Bên nhận từ chối các yêu cầu hoặc không thể kết nối tới. Hãy kiểm tra nhật ký của nó, và xem nó có trả lời một yêu cầu đơn giản từ máy trạm không. |
| `webhooks_dropped_total` lớn hơn không | Bên nhận quá chậm trong quá lâu và hàng đợi đã đầy. Hãy trả lời `200` trước, rồi mới xử lý. |
| Cùng một sự kiện đến hai lần | Đúng như dự kiến với cơ chế chuyển phát ít nhất một lần. Hãy coi các sự kiện có cùng `id`, `event` và `callstate_ts` là một. |
