---
title: Diagnostik
sidebar_position: 1
description: Jendela yang menampilkan setiap kata yang dipertukarkan telepon dan PBX, berkas log, dan tempat program menyimpan berkas-berkasnya.
---

Jendela **Diagnostik** menampilkan apa yang dipertukarkan telepon dan sentral, saat itu juga. Inilah tempat pertama untuk diperiksa ketika akun tidak mau terdaftar atau panggilan tidak mau tersambung, dan jendela yang akan diminta oleh departemen TI untuk Anda kirimkan.

Jendela ini dibuka dari **Pengaturan → Diagnostik**, dengan tombol **Buka diagnostik**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/diagnostics.png" alt="Jendela Diagnostik" />

Jendela ini menampilkan setiap pesan SIP yang dikirim atau diterima telepon, saat itu terjadi, beserta statistik audio dari panggilan yang sedang berlangsung. Data hanya dikumpulkan selama jendela terbuka dan tidak ada yang disimpan setelah jendela ditutup.

## SIP {#sip}

Tab **SIP** adalah log pensinyalan.

- Setiap pesan adalah sebuah baris dengan waktu (hingga milidetik), jenis pesannya, dan ke mana pesan itu pergi: panah yang menunjuk ke kanan dikirim oleh telepon, panah yang menunjuk ke kiri diterima dari server. Di bawahnya: `to` atau `from` alamat server dan angkutannya (misalnya *over UDP*).
- Sebuah pesan dapat dibuka untuk menampilkan tajuknya secara lengkap (pesan ketiga pada gambar).
- **Cari** menemukan teks dalam log.
- **Bersihkan** mengosongkannya.

Contoh pada tangkapan layar adalah registrasi yang sehat: telepon mengirim `REGISTER`, server menjawab `200 OK (REGISTER)`.

## Panggilan {#calls}

Tab kedua, **Panggilan**, menampilkan metrik kualitas untuk setiap panggilan yang sedang berlangsung.

## Tab Diagnostik di pengaturan {#the-diagnostics-tab-of-the-settings}

<Shot name="18_settings_diagnostics" alt="Pengaturan → Diagnostik" />

### Kerincian log {#log-detail}

Daftar tarik-turun memilih seberapa banyak yang ditulis program ke berkas lognya; pada gambar, pilihannya **Rinci**. Pengaturan ini langsung berlaku, termasuk pada panggilan yang sudah berlangsung — yang justru ingin Anda catat. Pengaturan paling rinci menuliskan setiap pesan SIP. Lognya besar, tetapi kata sandi dihapus sebelum apa pun ditulis, sehingga berkasnya aman dikirim bersama permintaan dukungan.

**Kirim salinan ke log sistem** juga menulis log ke log milik sistem, untuk komputer yang lognya dikumpulkan secara terpusat. Berkas di bawah tetap ditulis, dan berkas itulah yang dilampirkan pada permintaan dukungan.

### Berkas {#files}

Tab ini mencantumkan tempat program menyimpan berkas-berkasnya dan seberapa besar masing-masing. Di macOS:

| Berkas | Lokasi | Isi |
| --- | --- | --- |
| Pengaturan | `~/Library/Preferences/ai-softphone/settings.json` | Pengaturan. Tidak pernah berisi kata sandi atau token. |
| Basis data | `~/Library/Application Support/ai-softphone/ai-softphone.db` | Kontak, riwayat, transkrip, dan hasil olahan. |
| Rekaman | `~/Library/Application Support/ai-softphone/recordings` | Audio rekaman. |
| Log | `~/Library/Logs/ai-softphone/ai-softphone.log` | Log. |

Di bawah daftar, **Buka** menampilkan log dan **Bersihkan** mengosongkannya. Bersihkan log tepat sebelum Anda mereproduksi masalah; pembersihan tidak dapat dibatalkan.

## Apa yang dikirim ke dukungan {#what-to-send-to-support}

1. Atur **Kerincian log** ke tingkat paling rinci.
2. Tekan **Bersihkan**, lalu reproduksi masalahnya.
3. Kirim berkas log, atau buka **Pengaturan → Tentang**, tulis kepada kami di sana dan centang **Lampirkan log** — lihat [Tentang](../application/about.md#feedback).

Untuk masalah registrasi atau panggilan, kirim juga baris-baris dari percobaan yang gagal dari tab **SIP**.

Bagian program di balik semua ini — jejak SIP, statistik media, dan pencacah — dapat dimatikan di [Modul](../application/modules.md) (**Diagnostik**).
