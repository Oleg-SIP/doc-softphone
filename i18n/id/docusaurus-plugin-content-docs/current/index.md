---
slug: /
title: Dokumentasi AI Softphone
sidebar_position: 1
description: Apa itu AI Softphone, di sistem apa ia berjalan, dan di mana setiap bagian program dijelaskan.
---

[AI Softphone](https://ai-softphone.com/) adalah softphone untuk IP PBX yang juga mengubah setiap percakapan menjadi teks dan ringkasan tertulis. Percakapan bisa sampai kepadanya melalui tiga cara, dan ketiganya berakhir di pustaka yang sama, dengan rekaman, transkrip, dan hasil olahan yang sama:

- **panggilan** yang dilakukan atau diterima di program, melalui IP PBX atau penyedia SIP mana pun;
- **rapat** di Zoom, Teams, Meet, atau aplikasi lain apa pun, yang direkam langsung dari komputer;
- **rekaman yang sudah Anda miliki** — dari ponsel, perekam suara, atau sistem lain — yang ditambahkan ke pustaka.

Rekaman, transkrip, dan riwayat disimpan dalam berkas milik Anda sendiri. Tidak perlu akun maupun langganan, dan program ini adalah perangkat lunak bebas berlisensi GPL v2.

## Dari percakapan menjadi hasil olahan {#from-a-conversation-to-a-write-up}

1. Sebuah percakapan masuk: panggilan, rapat, atau berkas.
2. Percakapan direkam pada dua kanal, sehingga apa yang Anda ucapkan dan apa yang diucapkan pihak lain tetap terpisah.
3. Percakapan ditranskripsikan, pembicara demi pembicara, selaras dengan audionya.
4. Model bahasa pilihan Anda mengolahnya: ringkasan, tugas, kategori, label, dan tanda peringatan — dan Anda dapat mengajukan pertanyaan tentang percakapan itu.

## Unduhan dan persyaratan sistem {#download-and-system-requirements}

Program ini dapat diunduh gratis dari [ai-softphone.com](https://ai-softphone.com/#download): penginstal (`.exe`) untuk Windows, image disk (`.dmg`) untuk macOS, serta AppImage atau `.deb` untuk Linux. Penginstal, image disk, dan AppImage tidak memerlukan apa pun yang dipasang terlebih dahulu — Qt, OpenSSL, dan pustaka runtime C++ sudah disertakan di dalamnya. Pengecualiannya adalah `.deb`: paket ini memakai pustaka runtime C++ milik sistem, lihat di bawah. Anda memerlukan akun SIP, dari penyedia Anda atau dari PBX yang Anda kelola sendiri. Perekaman langsung berfungsi begitu program terpasang; transkrip dan hasil olahan memerlukan layanan pilihan Anda atau model di komputer Anda sendiri.

| Sistem | Persyaratan |
| --- | --- |
| macOS | macOS 14.4 atau yang lebih baru; khusus Apple silicon — Mac dengan prosesor Intel tidak dapat membukanya, bahkan melalui Rosetta; grafis Metal; ruang disk 160 MB, ditambah rekaman. Sistem akan meminta izin mikrofon satu kali. |
| Windows | Windows 10 versi 1809 (build 17763) atau yang lebih baru, serta Windows 11; prosesor Intel atau AMD 64-bit; Direct3D 11 atau OpenGL 2.1; ruang disk 250 MB, ditambah rekaman. |
| Linux | Ubuntu 22.04 LTS atau yang lebih baru, Debian 12 atau yang lebih baru, dan apa pun yang seusia — Fedora 36+, openSUSE Leap 15.5+, Mint 21+, Arch; pustaka GNU C 2.35 atau yang lebih baru; prosesor Intel atau AMD 64-bit; OpenGL 2.1 atau OpenGL ES 2.0, di X11 atau Wayland; PipeWire atau PulseAudio (ALSA bila keduanya tidak ada); ruang disk 200 MB, ditambah rekaman. Ikon baki memerlukan desktop dengan area pemberitahuan status. |

Di Linux, AppImage berjalan di distribusi mana pun yang seusia itu: jadikan berkasnya dapat dieksekusi lalu jalankan. Paket `.deb` juga memerlukan pustaka runtime C++ milik sistem dari GCC 13, yang ada di Ubuntu 24.04 dan Debian 13 tetapi tidak ada di Ubuntu 22.04; untuk sistem yang lebih lama, gunakan AppImage.

Antarmuka tersedia dalam tiga puluh bahasa, dipilih di [Tampilan](/program/appearance) dan dapat diganti tanpa memulai ulang.

Tangkapan layar dalam dokumentasi ini dibuat di macOS dan ditampilkan dalam ukuran kecil: klik salah satunya untuk melihat ukuran penuhnya. Di sistem lain, tampilan dan cara kerja program sama.

## Langkah pertama {#first-steps}

1. [Tambahkan akun](sip-accounts/setup.md) untuk PBX atau penyedia SIP Anda.
2. [Pilih mikrofon dan pengeras suara](sip-accounts/devices.md), lalu lakukan panggilan uji.
3. Tentukan [panggilan mana yang direkam](recordings/call-recording.md).
4. Tambahkan [pengenal suara](ai-processing/transcription.md) dan [model bahasa](ai-processing/processing.md) jika Anda menginginkan transkrip dan hasil olahan.

**Pengaturan → Ikhtisar** menyimpan daftar ini untuk Anda: titik hijau menandai langkah yang sudah selesai, titik merah langkah yang masih harus dikerjakan. Lihat [Ikhtisar pengaturan](interface/settings-overview.md).

## Bacaan selanjutnya {#where-to-read-next}

| Jika Anda ingin… | Baca |
| --- | --- |
| Mengenal jendela-jendela program | [Antarmuka](interface/main-window.md) |
| Menghubungkan telepon ke PBX Anda | [Menyiapkan akun SIP](sip-accounts/setup.md) |
| Memilih mikrofon, pengeras suara, dan nada dering | [Perangkat](sip-accounts/devices.md) |
| Mengatur codec, panggilan menunggu, dan log panggilan | [Pengaturan panggilan](sip-accounts/calls.md) |
| Menempatkan rekan kerja pada tombol sekali sentuh | [Tombol](sip-accounts/buttons.md) |
| Menentukan panggilan mana yang direkam, dan berapa lama disimpan | [Merekam panggilan](recordings/call-recording.md) |
| Mendengarkan, mencari, dan membaca percakapan Anda | [Jendela rekaman](recordings/recordings-window.md) |
| Merekam rapat yang berlangsung di aplikasi lain | [Penangkapan](capture/capture.md) |
| Memilih pengenal suara yang mengubah ucapan menjadi teks | [Transkripsi](ai-processing/transcription.md) |
| Menentukan AI mana yang mengolah percakapan Anda dan berapa biaya yang boleh dikeluarkan | [Pemrosesan](ai-processing/processing.md) |
| Mengubah kategori, label, dan tanda peringatan | [Kamus](ai-processing/dictionaries.md) |
| Mengubah tata letak, tema, cara mulai, dan tombol pintas | [Tampilan](program/appearance.md), [Awalan](program/startup.md), dan [Pintasan](program/shortcuts.md) |
| Menghubungkan CRM atau program lain | [Webhook](integration/webhooks.md) dan [REST API lokal](integration/rest-api.md) |
| Melihat apa yang dipertukarkan telepon dan PBX | [Diagnostik](troubleshooting/diagnostics.md) |
| Menemukan penyebab masalah | [Masalah umum](troubleshooting/common-problems.md) |
| Mematikan bagian-bagian program | [Modul](application/modules.md) |
| Memeriksa versi, pembaruan, dan isi laporan penggunaan | [Tentang](application/about.md) |

Halaman-halaman ini mengikuti urutan tab di **Pengaturan**.

## Privasi {#privacy}

- Secara bawaan, semuanya tetap berada di komputer Anda: rekaman, transkrip, dan riwayat tersimpan dalam berkas milik Anda. Tidak ada apa pun tentang percakapan — bukan nomor, bukan nama, bukan sepatah kata pun dari yang diucapkan — yang dikirim ke mana pun kecuali Anda sendiri yang mengirimnya.
- Kata sandi akun, nilai tajuk webhook, dan token API disimpan di gantungan kunci (keyring) sistem operasi, tidak pernah di berkas pengaturan.
- Versi baru memberi tahu kehadirannya saat dirilis — tidak pernah selama panggilan — dan baru dipasang ketika Anda menyetujuinya.
- Program mengirim satu laporan penggunaan kecil per hari. Sebelum laporan pertama dikirim, Anda diperlihatkan isinya, dan Anda memilih seberapa banyak yang dibawanya: **Dasar** atau **Lengkap**. Laporan ini tidak pernah berisi nomor, kontak, alamat PBX Anda, atau apa pun yang diucapkan dalam percakapan. Daftar lengkapnya ada di [Tentang](/application/about#telemetry).
- Program ini adalah perangkat lunak bebas berlisensi GPL v2.
