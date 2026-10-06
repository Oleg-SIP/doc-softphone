---
title: Webhook
sidebar_position: 1
description: "\"Biarkan telepon mengirim permintaan ke CRM Anda atau sistem lain ketika panggilan dimulai, berubah, atau berakhir — dengan permintaan persis dari panggilan masuk dan panggilan keluar.\""
---

Webhook adalah permintaan yang dikirim telepon ke alamat pilihan Anda setiap kali sesuatu terjadi pada panggilan. Dengan cara inilah CRM dapat membuka kartu pelanggan sebelum dering kedua, mencatat panggilan ketika berakhir, atau menyalakan lampu di papan dinding. Webhook tidak memerlukan aturan firewall untuk lalu lintas masuk: teleponlah yang menghubungi Anda. Karena permintaan dikirim dari komputer kerja, alamatnya cukup dapat dijangkau dari komputer itu saja — alamat internal `http://crm.local/calls` berfungsi sama baiknya dengan alamat HTTPS publik.

Setelah instalasi, webhook **mati** sampai Anda menyalakannya. Webhook bekerja berdampingan dengan [REST API lokal](/integration/rest-api): peristiwa menyatakan bahwa sesuatu telah berubah, API memberikan rincian terkini.

## Menyalakannya {#turning-them-on}

Buka **Pengaturan → Integrasi**. **Webhook** adalah bagian pertama di tab ini.

<Shot name="24_webhooks" alt="Pengaturan → Integrasi → Webhook, dengan https://crm.local/calls sebagai alamat" />

1. Centang **Beri tahu sistem lain tentang panggilan**. *Satu permintaan dikirim untuk tiap peristiwa yang Anda centang di bawah.*
2. Masukkan **Alamat** yang akan menerima peristiwa, misalnya `https://crm.local/calls`.
3. Pilih **Metode**: **POST** (bawaan) atau **GET**.
4. Di bawah **Peristiwa**, centang apa yang akan dikirim: **Panggilan baru**, **Panggilan berakhir**, **Panggilan berganti keadaan**.
5. Secara opsional, di bawah **Otorisasi**, atur tajuk yang dapat diperiksa oleh penerima Anda: **Nama tajuk** (disarankan `Authorization`) dan **Nilai tajuk**. Nilainya disimpan di gantungan kunci komputer, tidak pernah di berkas pengaturan; setelah disimpan, kolom menampilkan *Tersimpan — ketik untuk menggantinya*.
6. Tekan **Kirim peristiwa uji** untuk memastikan peristiwa sampai. Tombol ini mengirim satu peristiwa untuk panggilan yang tidak pernah terjadi, dengan tajuk yang sama seperti panggilan sungguhan. Catat permintaan mentahnya dan bangun penerima Anda berdasarkan apa yang benar-benar dikirim oleh versi Anda.

Bagian program yang mengirim permintaan adalah modul **Integrasi**; modul ini dapat dimatikan di [Modul](/application/modules).

## Peristiwa {#the-events}

| Dicentang sebagai | Peristiwa | Dikirim ketika |
| --- | --- | --- |
| **Panggilan baru** | `call-started` | Panggilan masuk mulai berdering atau panggilan keluar dilakukan. |
| **Panggilan berganti keadaan** | `call-state-changed` | `state` panggilan berubah: panggilan dijawab, ditahan, atau dilanjutkan oleh salah satu pihak, atau bergabung ke atau keluar dari konferensi. Membisukan tidak mengirim peristiwa ini. |
| **Panggilan berakhir** | `call-ended` | Panggilan telah berakhir. |

Setiap peristiwa dapat dicentang secara terpisah. Munculan kartu pelanggan hanya memerlukan yang pertama; log panggilan hanya yang terakhir. `call-started` dikirim pertama dan sebaiknya ditangani dengan cepat.

## Seperti apa permintaannya {#what-the-request-looks-like}

Dengan alamat `https://crm.local/calls` dan metode **POST**, telepon mengirim ini. Isinya JSON, dan tajuknya adalah yang Anda atur di bawah **Otorisasi**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` membawa versi program dan cara program itu dipasang.

## Panggilan masuk, peristiwa demi peristiwa {#an-incoming-call-event-by-event}

Panggilan dari ekstensi `1020` ke akun `1002` berdering, dijawab, dan ditutup oleh orang yang menjawabnya empat detik kemudian. Dengan ketiga peristiwa dicentang, penerima mendapat tiga permintaan, satu demi satu. Semuanya membawa `id` dan `seance_id` yang sama.

### 1. Berdering: `call-started` {#1-it-rings-call-started}

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

Inilah saatnya mencari penelepon berdasarkan `number` dan menampilkan kartu pelanggan. `state` adalah `ringing-in` dan `duration_s` adalah `0`.

### 2. Dijawab: `call-state-changed` {#2-it-is-answered-call-state-changed}

Sekitar tiga detik kemudian:

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

`state` kini `active`, dan `callstate_ts` telah bergeser ke saat perubahan, sementara `callstart_ts` tetap di tempatnya.

### 3. Berakhir: `call-ended` {#3-it-ends-call-ended}

Setelah empat detik percakapan:

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

`state` adalah `ended`, `duration_s` adalah durasi percakapan, dan `reason` menyatakan siapa yang mengakhirinya: di sini `local-hangup`, karena orang di telepon inilah yang menutup panggilan.

## Panggilan keluar, peristiwa demi peristiwa {#an-outgoing-call-event-by-event}

Ekstensi yang sama dihubungi dari akun `1002`: orang itu memutar `1020`, telepon berdering, pihak lain menjawab, berbicara selama tujuh detik, lalu menutup panggilan. Penerima mendapat empat permintaan, satu lebih banyak daripada untuk panggilan masuk, karena panggilan keluar memiliki status tersendiri selama berdering di ujung sana.

### 1. Diputar: `call-started` {#1-it-is-dialled-call-started}

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

`direction` adalah `out`, `state` adalah `dialing`, dan `dialed` memuat nomor sebagaimana diputar. Telepon belum mengetahui nama pihak lain, sehingga `name` kosong.

### 2. Berdering di ujung sana: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

Setengah detik kemudian:

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

`state` adalah `ringing-out`.

### 3. Pihak lain menjawab: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Empat detik setelah itu:

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

`state` adalah `active`. `name` kini terisi, dan `uri` adalah alamat pihak tersebut sebagaimana dilaporkan dalam jawaban. `duration_s` masih `0`: penghitungannya dimulai dari saat ini.

### 4. Berakhir: `call-ended` {#4-it-ends-call-ended}

Tujuh detik kemudian pihak lain menutup panggilan:

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

`duration_s` adalah `7`, dan `reason` adalah `remote-hangup`, karena pihak lain yang mengakhiri panggilan. Ketika Anda sendiri yang menutup panggilan, nilainya `local-hangup`, seperti pada panggilan masuk di atas.

### Status, berdampingan {#the-states-side-by-side}

| | Panggilan masuk | Panggilan keluar |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, lalu `active` |
| `call-ended` | `ended` | `ended` |

## Kolom {#the-fields}

**Setiap nilai adalah string**, termasuk angka dan cap waktu: `"duration_s": "42"`. Saat yang tidak diketahui berupa string kosong. Nama-namanya mengikuti satu konvensi: `_id` adalah pengenal, `_ts` adalah waktu Unix dalam milidetik (UTC), `_s` adalah durasi dalam detik — sama seperti di REST API, tempat nilai-nilainya berupa angka JSON.

| Kolom | Arti |
| --- | --- |
| `event` | `call-started`, `call-state-changed`, atau `call-ended`. |
| `id` | Panggilan: UUID yang sama seperti di `GET /calls` dan `/calls/{id}/…`, dan sama di setiap peristiwa panggilan itu. |
| `seance_id` | Percakapan tempat panggilan itu berada; lihat [di bawah](#one-conversation-across-transfers). |
| `direction` | `in` atau `out`. |
| `state` | Nilai yang sama seperti di `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (ditahan oleh telepon ini), `onhold` (ditahan oleh pihak lain), `conference`, atau `ended`. |
| `number` | Nomor pihak lain. Cocokkan catatan CRM Anda dengan kolom ini. |
| `name` | Nama pihak lain, dari Kontak; bisa kosong, dan bisa terisi kemudian selama panggilan, seperti pada panggilan keluar di atas. |
| `uri` | Alamat SIP pihak lain. |
| `dialed` | Angka yang diputar, untuk panggilan keluar; kosong untuk panggilan masuk. |
| `account`, `account_id` | Saluran yang digunakan panggilan: `username@server`, dan pengenal dari `GET /accounts`. |
| `event_ts` | Kapan peristiwa terjadi. |
| `callstart_ts` | Kapan telepon pertama kali mengetahui panggilan itu. |
| `callstate_ts` | Kapan panggilan memasuki `state`-nya saat ini. |
| `duration_s` | Waktu bicara dalam detik, dari dijawab hingga ditutup. Diisi pada `call-ended` untuk panggilan yang dijawab; selain itu `0`. |
| `reason` | Bagaimana panggilan berakhir: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; `none` sampai saat itu. |
| `answered_by` | `no` jika seseorang menjawab panggilan; selain itu, apa yang menjawabnya. |

## Satu percakapan melintasi pengalihan {#one-conversation-across-transfers}

`seance_id` mengelompokkan panggilan-panggilan yang membentuk satu percakapan. Panggilan yang dilakukan atau diterima dari awal memulai percakapan baru. Panggilan yang dibuat oleh pengalihan, panggilan yang menggantikan panggilan lain, konsultasi tentang sebuah panggilan, dan setiap panggilan yang digabungkan ke dalam konferensi mempertahankan `seance_id` dari panggilan asalnya.

Antartelepon, nilai ini dibawa dalam tajuk SIP `X-Seance-Id`: ketika panggilan dialihkan ke rekan kerja yang juga menggunakan AI Softphone, dan PBX meneruskan tajuk itu, kedua komputer kerja melaporkan `seance_id` yang sama.

## GET sebagai ganti POST {#get-instead-of-post}

**GET** ditujukan untuk penerima yang tidak dapat menerima isi permintaan, seperti CRM lama atau jembatan skrip. Kolom yang sama kemudian dikirim sebagai parameter kueri.

Dengan **GET**, alamatnya dapat berupa templat: setiap `[field]` diganti dengan nilai kolom tersebut, dalam pengodean persen. Misalnya:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Penampung menggunakan nama kolom di atas. Templat yang disimpan dengan nama-nama lama (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) tetap berfungsi.

## Bagaimana peristiwa dikirim {#how-the-events-are-delivered}

| Perilaku | Artinya bagi Anda |
| --- | --- |
| Peristiwa dimasukkan ke antrean, tidak dikirim dari panggilan itu sendiri | Penerima yang lambat tidak pernah menunda dering, panggilan, atau pengalihan. |
| Antrean yang penuh membuang peristiwa | Jika penerima Anda berhenti menjawab, peristiwa hilang tetapi telepon tetap berfungsi. Pantau `webhooks_dropped_total`. |
| Pengiriman yang ditolak dan tidak terjangkau dihitung | `webhooks_failed_total` yang terus naik sementara `webhooks_delivered_total` diam menunjukkan masalah di penerima. |
| Peristiwa tiba berurutan | Panggilan dimulai, lalu perubahan status, lalu panggilan berakhir. Untuk mengurutkan peristiwa yang telah Anda simpan, gunakan `callstate_ts`, bukan waktu kedatangannya. |
| Setidaknya sekali | Peristiwa yang sama bisa datang dua kali. `id`, `event`, dan `callstate_ts` bersama-sama mengidentifikasi sebuah peristiwa: buat penangan Anda melewatkan peristiwa yang sudah pernah dilihatnya. |

## Menerima peristiwa {#receiving-the-events}

Satu aturan untuk penerima: **jawab `200` segera, dan kerjakan tugasnya sesudahnya.** Penerima yang lambat tidak memperlambat telepon, tetapi memenuhi antrean, dan antrean yang penuh membuang peristiwa.

Misalnya, di Node.js dengan Express:

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

Untuk mencatat hasil panggilan — dijawab, tak terjawab, ditolak — ambil entri dengan `seance_id` dan `number` yang sama dari `GET /history?limit=20` di [REST API](/integration/rest-api#call-history-get-history). Ketika layanan Anda berjalan kembali setelah jeda, baca `GET /history?limit=200` dan simpan apa yang terlewat: webhook untuk waktu nyata, riwayat untuk mengisi celah.

Untuk melihat permintaan sebelum CRM siap, arahkan **Alamat** ke pemeriksa permintaan daring dan tekan **Kirim peristiwa uji**.

## Ketika tidak ada yang sampai {#when-nothing-arrives}

| Gejala | Yang perlu diperiksa |
| --- | --- |
| Tidak ada webhook sama sekali | Tekan **Kirim peristiwa uji**. Jika sampai, peristiwa yang Anda perlukan belum dicentang; jika tidak, alamatnya salah atau tidak dapat dijangkau dari komputer kerja. |
| `webhooks_failed_total` terus naik | Penerima menolak permintaan atau tidak dapat dijangkau. Periksa lognya, dan apakah penerima menjawab permintaan sederhana dari komputer kerja. |
| `webhooks_dropped_total` di atas nol | Penerima terlalu lambat terlalu lama dan antrean menjadi penuh. Jawab `200` terlebih dahulu, baru kemudian proses. |
| Peristiwa yang sama dua kali | Wajar pada pengiriman setidaknya-sekali. Perlakukan peristiwa dengan `id`, `event`, dan `callstate_ts` yang sama sebagai satu peristiwa. |
