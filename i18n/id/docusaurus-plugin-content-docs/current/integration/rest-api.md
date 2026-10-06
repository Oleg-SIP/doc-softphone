---
title: REST API lokal
sidebar_position: 2
description: Izinkan program lain di komputer ini mengendalikan telepon — melakukan dan mengendalikan panggilan, membaca kontak, riwayat, dan akun.
---

AI Softphone memiliki REST API untuk integrasi CTI: program di komputer yang sama dapat melakukan dan mengendalikan panggilan, membaca kontak, riwayat panggilan, dan akun SIP, serta memantau panggilan yang sedang berlangsung. Tanpa SDK, tanpa perantara cloud, dan tanpa pendengar yang terbuka ke jaringan. Permintaan dan jawaban berupa JSON, jadi `curl` atau klien HTTP apa pun sudah cukup.

API **mati setelah instalasi**; tidak ada yang mendengarkan sampai Anda menyalakannya. Setelah itu API hanya mendengarkan di antarmuka loopback — *antarmuka web kecil yang hanya menjawab komputer ini* — dan tidak dapat dijangkau dari jaringan kantor, VPN, atau komputer lain.

Gunakan API ketika program Anda memerlukan data dari telepon atau harus mengendalikan panggilan. Gunakan [webhook](/integration/webhooks) ketika program harus bereaksi terhadap panggilan saat terjadi, tanpa polling. Sebagian besar integrasi menggunakan keduanya; keduanya tidak saling bergantung.

## Menyalakannya {#turning-it-on}

Buka **Pengaturan → Integrasi** dan pergi ke **Kendali lokal**.

<Shot name="17b_settings_integration_scrolled" alt="Pengaturan → Integrasi: kendali lokal" />

1. Nyalakan **Izinkan program lain di komputer ini mengendalikan telepon**. Server langsung berjalan.
2. Pertahankan **Porta** bawaan, `8377`, kecuali program lain sudah menggunakannya.
3. Secara opsional, atur **Token**. Setelah disimpan, kolom menampilkan *Tersimpan — ketik untuk menggantinya*.
4. Di bawah **Akses**, pilih kelompok yang akan dibuka: **Kontak**, **Riwayat panggilan**, **Panggilan, dan kendalinya**, **Akun**, **Pengaturan**, **Pencacah** (metrik). Kelompok yang mati bukan disaring, melainkan sama sekali tidak dilayani.
5. Ujilah: `curl http://127.0.0.1:8377/accounts`. Jika jawabannya JSON, API berfungsi.

Tidak ada layanan terpisah yang dipasang dan tidak perlu memulai ulang. Bagian program yang melakukan ini dapat dimatikan di [Modul](/application/modules) (**Integrasi**).

## Halaman API sendiri {#the-apis-own-page}

**Buka halaman API sendiri** membuka `http://127.0.0.1:8377` di peramban. Alamat itu menjawab dengan daftar semua yang dilayaninya, dalam bahasa Inggris; alamat yang membaca sesuatu berupa tautan yang dapat Anda ikuti.

<Shot name="23_api_page" alt="Halaman API sendiri, http://127.0.0.1:8377/, terbuka di peramban" />

## Akses dan token {#access-and-the-token}

Apa yang boleh dilakukan sebuah program bergantung pada apakah ia mengubah data yang tersimpan, bukan pada apakah ia membaca:

- **Tanpa token**, program apa pun di komputer boleh membaca semua yang ada di kelompok yang diaktifkan dan mengendalikan panggilan: melakukan, menjawab, menutup, menahan, melanjutkan, mengalihkan, dan mengirim DTMF.
- **Dengan token** di tajuk `Authorization`, program juga boleh menggunakan endpoint yang mengubah apa yang tersimpan. Tanpa token, endpoint tersebut tidak dilayani dan tidak dicantumkan di halaman API sendiri.

Token disimpan di gantungan kunci komputer, bukan di berkas pengaturan, dan tidak pernah dikembalikan oleh `/settings`.

:::caution
Tanpa token, program apa pun yang berjalan di komputer ini dapat mengendalikan telepon, termasuk menjawab panggilan. Di komputer kerja pribadi, hal itu biasanya dapat diterima. Di komputer bersama atau yang dikelola, atur token dan perlakukan seperti kata sandi lainnya.
:::

## Endpoint {#endpoints}

Alamat dasarnya `http://127.0.0.1:8377`. Endpoint di bawah ini tidak memerlukan token.

| Metode | Jalur | Fungsi |
| --- | --- | --- |
| GET | `/metrics` | Pencacah, dalam format Prometheus. |
| GET | `/ui` | Daftar rekaman, sebagai halaman HTML. |
| GET | `/ui/recordings/{id}` | Sebuah rekaman beserta transkripnya, sebagai halaman HTML. |
| GET | `/ui/recordings/{id}/audio` | Audio untuk halaman di atas. |
| GET | `/contacts` | Kontak. |
| GET | `/contacts/{id}` | Satu kontak. |
| GET | `/history` | Log panggilan, yang terbaru di atas. Menerima `?limit=`, `?missed=true`, dan `?declined=true`. |
| GET | `/calls` | Panggilan yang sedang berlangsung. |
| POST | `/calls` | Melakukan panggilan: `{"number": "...", "account_id": "..."}`. |
| POST | `/calls/{id}/answer` | Menjawab panggilan. |
| POST | `/calls/{id}/hangup` | Menutup panggilan. |
| POST | `/calls/{id}/hold` | Menahan panggilan. |
| POST | `/calls/{id}/resume` | Melanjutkan panggilan yang ditahan. |
| POST | `/calls/{id}/dtmf` | Mengirim nada: `{"digits": "..."}`. |
| POST | `/calls/{id}/transfer` | Mengalihkan panggilan: `{"target": "..."}`. |
| GET | `/accounts` | Akun SIP dan status registrasinya. Tidak pernah berisi kata sandi. |
| GET | `/settings` | Seluruh konfigurasi, tanpa rahasia. |
| GET | `/taxonomy` | Kategori, label, dan tanda peringatan, beserta kodenya. |

Setiap pengenal adalah UUID yang dikeluarkan oleh telepon: `id` panggilan berasal dari `/calls` atau dari jawaban atas `POST /calls`, `id` akun dari `/accounts`.

Nama kolom ditulis dalam snake_case dan akhirannya menunjukkan jenisnya: `_id` adalah rujukan ke UUID, `_ts` adalah saat dalam milidetik Unix (UTC), `_s` adalah durasi dalam detik. Hal yang sama berlaku untuk webhook; hanya `/settings` yang mempertahankan nama-namanya sendiri. Di REST API nilai-nilai ini berupa angka JSON, dan saat yang tidak diketahui bernilai `null`.

## Contoh: melakukan panggilan {#example-placing-a-call}

`POST /calls` melakukan panggilan keluar. Isinya JSON dengan `number` yang akan diputar dan, secara opsional, `account_id` akun yang digunakan untuk menelepon:

```bash
curl --location 'http://127.0.0.1:8377/calls' \
--header 'Content-Type: application/json' \
--data '{
    "number": "1020",
    "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90"
}'
```

Jawabannya adalah pengenal panggilan baru:

```json
{ "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24" }
```

- `number` wajib diisi. Tanpanya, jawabannya `400 {"error":"a call needs a number"}` dan tidak ada yang diputar.
- Nomor dilengkapi pada akun yang dipilih dengan cara yang sama seperti papan panggil melengkapinya: `1020` dikirim sebagai `sip:1020@pbx.example.com`. `POST /calls/{id}/transfer` melengkapi `target`-nya dengan cara yang sama; target yang sudah memiliki skema atau `@` dikirim apa adanya.
- `account_id` bersifat opsional; ambil dari `GET /accounts`. Tanpanya, panggilan keluar melalui akun yang dipilih di jendela utama.
- Gunakan `id` di `/calls/{id}/…`: `hangup`, `hold`, `resume`, `dtmf`, dan `transfer`. [Webhook](/integration/webhooks#an-outgoing-call-event-by-event) dari panggilan ini membawa `id` yang sama.

### Dari halaman web: klik untuk menelepon {#from-a-web-page-click-to-call}

Halaman yang memanggil `127.0.0.1` menjangkau komputer tempat peramban berjalan — komputer yang sama tempat telepon berjalan — sehingga tombol klik-untuk-menelepon di CRM tidak memerlukan server sendiri:

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

## Isi jawaban {#what-the-answers-contain}

### Panggilan yang sedang berlangsung: `GET /calls` {#calls-in-progress-get-calls}

Setiap panggilan memiliki `id`, `seance_id`, `account_id`, `direction`, `state`, `number`, `name`, `uri`, `dialed`, `muted`, `event_ts`, `callstart_ts`, dan `callstate_ts`.

- `state` adalah `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (ditahan oleh telepon ini), `onhold` (ditahan oleh pihak lain), `conference`, atau `ended`. Bila lebih dari satu berlaku, `conference` mengalahkan `hold`, dan `hold` mengalahkan `onhold`.
- `muted` menyatakan apakah mikrofon dibisukan dalam panggilan; membisukan tidak mengubah `state`.
- `seance_id` adalah percakapan: panggilan yang terhubung oleh pengalihan, konsultasi, atau konferensi berbagi nilai ini.
- `event_ts` adalah saat jawaban dibuat. Bandingkan dengan `callstate_ts` untuk melihat berapa lama panggilan berada dalam statusnya, tanpa bergantung pada jam Anda sendiri.

### Akun: `GET /accounts` {#accounts-get-accounts}

Setiap akun memiliki `id` (yang di tempat lain disebut `account_id`), pengaturannya — `transport` (`udp`, `tcp`, atau `tls`), `port`, `registrar`, `outbound_proxy`, `expiry_s`, dan lainnya — apakah akun itu `enabled`, dan `state`-nya di PBX: `registered` selama saluran aktif. Kata sandi tidak pernah disertakan.

### Riwayat panggilan: `GET /history` {#call-history-get-history}

Yang terbaru di atas, 100 entri kecuali `?limit=` menyatakan lain. `?missed=true` hanya mengembalikan panggilan tak terjawab, `?declined=true` hanya panggilan yang ditolak oleh telepon ini.

| Kolom | Arti |
| --- | --- |
| `id` | Pengenal entri riwayat itu sendiri. Ini bukan `id` panggilan dari `/calls` dan webhook; `seance_id` menghubungkan keduanya. |
| `outcome` | Klasifikasi utama: `answered`, `missed`, `declined`, atau `failed`. |
| `answered` | `true` atau `false`. |
| `duration_s` | `0` untuk panggilan yang tidak pernah tersambung. |
| `number`, `uri` | Pihak lain, sebagai nomor dan sebagai alamat SIP. |
| `name` | Dari Kontak jika nomornya dikenal, jika tidak kosong. Cocokkan berdasarkan `number`, bukan kolom ini. |
| `dialed` | Angka yang diputar, untuk panggilan keluar; kosong untuk panggilan masuk. |
| `account`, `account_id` | Saluran yang digunakan panggilan. |
| `reason` | Bagaimana panggilan berakhir: `local-hangup`, `remote-hangup`, `cancelled`… |
| `answered_by` | `no` jika seseorang menjawabnya; selain itu, apa yang menjawab panggilan. |

### Kontak: `GET /contacts` {#contacts-get-contacts}

Setiap kontak memiliki `id`, `name`, `number`, dan saluran tempatnya berada, `account_id` dan `account`; `account` yang kosong berarti kontak tidak terikat pada saluran.

### Rekaman {#recordings}

Rekaman dan transkrip tidak diberikan sebagai JSON. API menyajikannya sebagai halaman HTML, `/ui` dan `/ui/recordings/{id}`: tautkan halaman-halaman ini dari CRM Anda alih-alih memindahkan audio ke sana kemari. Tautan terbuka di komputer yang menyimpan rekaman, dan audionya tidak pernah meninggalkan komputer itu.

## Taksonomi dan pengaturan {#taxonomy-and-settings}

Setiap entri `/taxonomy` memiliki `code` yang tetap, `title` dan `description` dalam bahasa antarmuka, `kind` (`category`, `tag`, atau `red_flag`) dan, untuk tanda peringatan, `severity`. **Cocokkan berdasarkan `code`, jangan pernah berdasarkan `title`**: judul datang dalam bahasa yang diatur pada telepon. Entri dengan `retired: true` dipertahankan agar panggilan lama tetap dapat dirujuk; entri itu tidak lagi diberikan pada panggilan baru. Muat taksonomi sekali saat mulai untuk memetakan kata-kata telepon ke kolom Anda sendiri.

`/settings` mengembalikan konfigurasi kecuali rahasia: perangkat audio dan volume, prioritas codec, tampilan dan bahasa, awalan, tombol pintas, tingkat diagnostik, dan status kedua integrasi — berguna bagi alat dukungan yang harus memeriksa komputer kerja tanpa berbagi layar. `api.disabled` mencantumkan kelompok akses yang mati dan `webhooks.silenced` peristiwa yang mati; daftar kosong berarti semuanya menyala. Konfigurasi ini tidak pernah memuat kata sandi SIP, token API, atau nilai tajuk webhook.

## Kesalahan {#errors}

Setiap kesalahan berupa JSON dengan satu kunci `error`, ditujukan untuk manusia, bukan untuk diurai.

| Status | Isi | Arti |
| --- | --- | --- |
| 404 | `{"error":"no such endpoint"}` | Jalurnya tidak ada, atau kelompok aksesnya mati; keduanya sengaja memberikan jawaban yang sama. |
| 404 | `{"error":"no contact with that id"}` | Jalurnya benar, pengenalnya tidak. |
| 400 | `{"error":"no call with that id"}` | Panggilan telah berakhir, atau tidak pernah ada. |
| 400 | `{"error":"a call needs a number"}` | `POST /calls` tanpa nomor. Tidak ada yang diputar. |
| 400 | `{"error":"no digits to send"}` | `POST /calls/{id}/dtmf` tanpa angka. |
| 400 | `{"error":"a transfer needs a target"}` | `POST /calls/{id}/transfer` tanpa target. |
| 400 | `{"error":"the account this call is on is no longer set up"}` | Akun panggilan dihapus selama panggilan, sehingga target tidak dapat dilengkapi. Tidak ada yang dikirim ke PBX. |

Permintaan yang ditolak dihitung di `api_requests_refused_total`, sehingga integrasi yang gagal diam-diam terlihat di metrik, tidak hanya di log Anda sendiri.

## Metrik {#metrics}

`GET /metrics` mengembalikan setiap pencacah telepon, masing-masing dengan teks bantuan. Ambil dengan Prometheus atau baca secara manual.

| Pencacah | Yang dihitung |
| --- | --- |
| `calls_incoming_total` | Panggilan masuk yang diterima. |
| `calls_outgoing_total` | Panggilan keluar yang dilakukan. |
| `calls_answered_total` | Panggilan yang dijawab. |
| `calls_missed_total` | Panggilan masuk yang tidak dijawab. |
| `calls_declined_total` | Panggilan yang ditolak di sini atau oleh pihak lain. |
| `calls_failed_total` | Panggilan yang tidak dapat dibangun. |
| `registrations_succeeded_total` | Registrasi SIP yang berhasil. |
| `registrations_failed_total` | Registrasi SIP yang ditolak atau habis waktu. |
| `webhooks_delivered_total` | Webhook yang diterima oleh penerima. |
| `webhooks_failed_total` | Webhook yang ditolak atau tidak terkirim. |
| `webhooks_dropped_total` | Webhook yang dibuang karena antrean penuh. |
| `api_requests_total` | Permintaan yang ditangani oleh API. |
| `api_requests_refused_total` | Permintaan yang ditolak: token salah, kelompok mati, atau jalur tidak dikenal. |

## Memperbarui integrasi lama {#updating-an-older-integration}

Versi sebelumnya menggunakan nama camelCase dan pengenal pendek. `accountId` kini `account_id`, `startedAt` menjadi `callstart_ts`, `durationSeconds` menjadi `duration_s`, `answeredBy` menjadi `answered_by`, dan kolom webhook `at` menjadi `event_ts`. Panggilan dan akun hanya diidentifikasi dengan UUID: `runtimeId` dan pengenal seperti `call-3` atau `account-2` tidak lagi dikembalikan maupun diterima.

## Ketika tidak berfungsi {#when-it-does-not-work}

| Gejala | Yang perlu diperiksa |
| --- | --- |
| Koneksi ditolak di `127.0.0.1:8377` | Kendali lokal mati, telepon tidak berjalan, atau porta telah diubah. |
| `404 {"error":"no such endpoint"}` untuk jalur di halaman ini | Kelompok aksesnya mati. |
| Membaca berhasil, menulis ditolak | Endpoint yang mengubah data tersimpan memerlukan token di tajuk `Authorization`. |
| Judul kategori tidak dalam bahasa Inggris | Judul mengikuti bahasa antarmuka. Cocokkan berdasarkan `code` dari `/taxonomy`. |
| `accountId`, `startedAt`, atau `at` tidak ada | Integrasi ditulis untuk nama-nama lama; lihat di atas. |

Untuk masalah registrasi atau panggilan itu sendiri, buka [Diagnostik](/troubleshooting/diagnostics).
