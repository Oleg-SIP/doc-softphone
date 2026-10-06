---
title: Tentang
sidebar_position: 2
description: Versi, pembaruan, negara Anda, lisensi, isi laporan penggunaan, formulir masukan, dan komponen yang membangun program.
---

**Pengaturan → Tentang** berisi segala hal tentang program itu sendiri.

<Shot name="20_settings_about" alt="Pengaturan → Tentang" />

## Versi dan negara {#version-and-country}

Di bagian atas terdapat nama, **Versi** (pada gambar 1.0.1), dan tautan ke situs web, [ai-softphone.com](https://ai-softphone.com/).

**Negara** memberi tahu program di mana Anda berada. Ini membantu memilih server pembaruan terbaik, dan membuka jalan ke layanan bahasa dan ucapan yang dihosting di negara Anda. **Deteksi otomatis** mengisinya.

## Pembaruan {#updates}

Tab ini menyatakan apakah Anda memiliki versi terbaru dan kapan terakhir kali diperiksa. **Periksa pembaruan** memeriksanya sekarang.

**Cari pembaruan otomatis**, menyala secara bawaan, memeriksa sekali sehari dan sesaat setelah telepon dijalankan. Program meminta satu berkas kecil dari server, dan tidak ada yang diunduh atau dipasang tanpa persetujuan Anda.

## Lisensi {#licence}

Program ini adalah perangkat lunak bebas di bawah GPL-2.0-or-later. Program ini disediakan tanpa jaminan apa pun, dan Anda boleh menyebarluaskannya kembali sesuai ketentuan lisensi tersebut; teks lengkapnya disertakan dalam berkas bernama `LICENSE`.

## Telemetri {#telemetry}

<Shot name="20b_settings_about_telemetry" alt="Pengaturan → Tentang: isi laporan penggunaan" />

Program mengirim satu laporan penggunaan kecil per hari. Sebelum laporan pertama dikirim, Anda diperlihatkan isinya, dan tab ini mencantumkannya:

| | Yang dikirim |
| --- | --- |
| **Selalu dikirim** | Bahwa aplikasi telah dijalankan, versinya, dan bahasa antarmuka; versi sistem operasi, lokal, negara, dan zona waktu. |
| **Dikirim juga, dalam mode Lengkap** | Pencacah panggilan dan percakapan yang ditangkap; vendor dan versi softswitch yang terhubung, tidak pernah alamatnya; berapa langkah [Ikhtisar](/interface/settings-overview) yang sudah selesai, dan tata letak yang dipilih. |
| **Tidak pernah dikirim, dalam mode mana pun** | Nomor yang Anda hubungi atau yang menghubungi Anda; akun, kata sandi, atau apa pun dari gantungan kunci; kontak, percakapan, transkrip, atau rekaman; apa pun yang Anda ketik, dan data pribadi apa pun di komputer. |

Setiap instalasi membuat satu pengenal acak untuk dirinya sendiri, agar laporan dari salinan program yang sama dapat dikenali sebagai satu. Pengenal ini tidak berasal dari apa pun tentang Anda atau komputer Anda, dan tidak menyebut nama siapa pun — tetapi karena bersifat tetap, laporan-laporan yang dibawanya dapat dikaitkan satu sama lain. Itu menjadikannya pseudonim, bukan anonim.

Laporan dasar berlandaskan kepentingan yang sah: mengetahui versi mana yang digunakan itulah yang memungkinkan perbaikan sampai kepada orang yang membutuhkannya. Segala yang ditambahkan laporan lengkap ada karena Anda memilihnya, dan Anda dapat mengubahnya di sini kapan saja.

### Pelaporan {#reporting}

| Pilihan | |
| --- | --- |
| **Lengkap** | Laporan dasar dan apa yang dicantumkan di *Dikirim juga*. Dipilih pada gambar. |
| **Dasar** | Hanya apa yang *Selalu dikirim*. |
| **Mati** | Tidak ada laporan sama sekali. Hanya tersedia di edisi Enterprise; selain itu, pilihan ini berwarna abu-abu. |

## Masukan {#feedback}

<Shot name="20c_settings_about_bottom" alt="Pengaturan → Tentang: formulir masukan dan komponen yang membangun program" />

Formulir untuk menulis kepada pengembang tanpa meninggalkan program.

| Kolom | |
| --- | --- |
| **Perihal** dan **Pesan** | Apa yang ingin Anda sampaikan. |
| **Nama Anda** dan **Alamat untuk jawaban** | Keduanya opsional. Tanpa alamat, kami tidak dapat menjawab. |
| **Lampirkan log** | Menambahkan bagian akhir log, sekitar 512 kB. Lihat [Diagnostik](/troubleshooting/diagnostics). |

**Kirim** tetap abu-abu sampai ada sesuatu yang bisa dikirim.

## Dibangun dengan {#built-with}

Komponen yang menjadi dasar program, masing-masing dengan lisensinya: Qt 6 (GPL-2.0 atau GPL-3.0), pjproject (PJSIP) (GPL-2.0-or-later), SQLite (domain publik), nlohmann/json (MIT), cpp-httplib (MIT), OpenSSL (Apache-2.0), Fluent UI System Icons (MIT), libsecret (LGPL-2.1-or-later), ALSA (LGPL-2.1-or-later), dan klien PulseAudio (LGPL-2.1-or-later). Masing-masing digunakan di bawah lisensi yang tertera di sampingnya; bila sebuah komponen menawarkan beberapa lisensi, yang disebutkan itulah yang dipakai.
