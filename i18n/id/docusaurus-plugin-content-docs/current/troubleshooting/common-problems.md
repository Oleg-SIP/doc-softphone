---
title: Masalah umum
sidebar_position: 2
description: "\"Apa yang perlu diperiksa ketika akun tidak mau terdaftar, tidak ada suara, panggilan atau rapat tidak terekam, tidak ada transkrip, atau tautan, tombol pintas, maupun API tidak berfungsi.\""
---

Setiap entri merujuk ke pengaturan yang menentukannya. Jika jawabannya tidak ada di sini, buka [Diagnostik](/troubleshooting/diagnostics): jendela itu menampilkan apa yang dipertukarkan telepon dan PBX.

## Akun tidak mau terdaftar {#the-account-will-not-register}

Titik di samping akun di **Pengaturan → Akun** tetap abu-abu atau merah.

1. Periksa **Nama pengguna**, **Kata sandi**, dan **Alamat server** di [formulir akun](/sip-accounts/setup).
2. Jika PBX Anda memeriksa kata sandi dengan nama lain selain ekstensi, isi **Pengguna autentikasi** di bawah **Pengaturan server**.
3. Periksa **Angkutan** dan **Porta** terhadap apa yang diharapkan PBX.
4. Buka tab **SIP** di [jendela diagnostik](/troubleshooting/diagnostics) dan lihat permintaan `REGISTER` serta jawaban server.

## Saya tidak bisa mendengar, atau suara saya tidak terdengar {#i-cannot-hear-or-i-cannot-be-heard}

Buka [Pengaturan → Perangkat](/sip-accounts/devices).

- Ucapkan sesuatu: bilah di bawah **Mikrofon** harus bergerak. Jika tidak, pilih mikrofon lain.
- Tekan **Uji** di bawah **Pengeras suara** untuk mendengar suara di perangkat yang Anda pilih.
- Periksa penggeser **Volume**. **Bisukan mikrofon** di kartu panggilan dan [tombol pintas](/program/shortcuts) **Bisukan mikrofon** mematikan mikrofon selama panggilan.
- Nada dering dapat diatur agar berbunyi di perangkat lain daripada perangkat tempat Anda berbicara — **Nada dering**, daftar tarik-turun kedua.

## Suara panggilan buruk, atau panggilan tidak dimulai {#the-call-sounds-bad-or-does-not-start}

Codec ditawarkan sesuai urutan daftar di [Pengaturan → Panggilan](/sip-accounts/calls#audio-formats). Biarkan menyala codec yang digunakan PBX Anda, dan letakkan yang terbaik di urutan pertama. Perubahan berlaku mulai panggilan Anda berikutnya.

## Panggilan kedua tidak berdering {#a-second-call-does-not-ring}

Apa yang terjadi ketika seseorang menelepon saat Anda sedang dalam panggilan diatur di [Panggilan menunggu](/sip-accounts/calls#call-waiting).

## Panggilan tidak terekam {#a-call-was-not-recorded}

- **Pengaturan → Perekaman**, daftar tarik-turun pertama, menentukan panggilan mana yang direkam; bawaannya, **Manual**, hanya merekam ketika Anda menekan rekam di kartu panggilan. Lihat [Merekam panggilan](/recordings/call-recording).
- Perekaman dimulai saat panggilan dijawab, jadi panggilan yang tidak dijawab tidak memiliki berkas.
- Modul **Perekaman** harus menyala di [Modul](/application/modules).
- Rekaman dihapus oleh batas-batas di bawah **Penyimpanan**; rekaman yang disematkan tidak pernah dihapus.

## Rapat di aplikasi lain tidak tertangkap {#a-meeting-in-another-application-was-not-captured}

Lihat [Penangkapan](/capture/).

- **Izinkan penangkapan suara** di **Pengaturan → Penangkapan** harus menyala.
- Bila **Mulai otomatis** diatur ke **Tanya saya** (bawaan), jawab pertanyaannya saat muncul; bila **Tidak pernah**, tekan **Rekam** sendiri.
- Gunakan **Uji** di tab yang sama: bilah atas harus bergerak saat Anda bicara, bilah bawah saat ada yang diputar.
- Modul **Penangkapan** harus menyala di [Modul](/application/modules).

## Ada rekaman, tetapi tidak ada transkrip atau ringkasan {#there-is-a-recording-but-no-transcript-or-summary}

- Percakapan ditranskripsikan dan diolah dengan sendirinya hanya jika **Proses percakapan otomatis** menyala di [Pengaturan → Pemrosesan](/ai-processing/processing). Jika tidak, mintalah di [jendela Rekaman](/recordings/recordings-window).
- Harus ada [pengenal suara](/ai-processing/transcription) dan [model bahasa](/ai-processing/processing#language-models), dan masing-masing harus menjawab di alamatnya.
- Ketika **Batas uang, per bulan** atau **Batas token, per bulan** tercapai, aturan otomatis berhenti sampai bulan berganti. Permintaan yang Anda ajukan sendiri tidak pernah dihentikan.
- Langkah-langkah di [Pengaturan → Ikhtisar](/interface/settings-overview) menunjukkan apa yang masih perlu disiapkan.

## Telepon menghilang saat saya menutup jendela {#the-phone-disappeared-when-i-closed-the-window}

Bila **Biarkan telepon tetap berjalan saat jendelanya ditutup** menyala, telepon masih berjalan, dan panggilan tetap masuk. Ikon di area pemberitahuan (bilah menu di macOS) memunculkan kembali jendelanya. Lihat [Awalan](/program/startup).

## Nomor telepon di peramban atau CRM tidak menelepon {#a-phone-number-in-a-browser-or-a-crm-does-not-call}

Tekan **Buka tautan panggilan dengan telepon ini** di [Pengaturan → Awalan](/program/startup#call-links). Nomor yang diklik masuk ke papan panggil dan menunggu di sana kecuali **Langsung menelepon, tanpa menekan Telepon** menyala.

## Lampu tombol tetap abu-abu {#a-buttons-lamp-stays-grey}

PBX tidak memberi tahu apakah ekstensi itu bebas. Tombol tetap bisa memanggil. Lihat [Tombol](/sip-accounts/buttons).

## REST API tidak menjawab {#the-rest-api-does-not-answer}

- **Izinkan program lain di komputer ini mengendalikan telepon** harus menyala di [Pengaturan → Integrasi](/integration/rest-api), begitu pula modul **Integrasi** di [Modul](/application/modules).
- Alamatnya `http://127.0.0.1:8377`, kecuali Anda mengubah **Porta**.
- Kelompok yang tidak Anda buka di bawah **Akses** menjawab setiap permintaan dengan `404`.
- Jika Anda mengatur **Token**, permintaan yang mengubah data tersimpan harus membawanya di tajuk `Authorization`.
- Gejala lainnya ada di [Ketika tidak berfungsi](/integration/rest-api#when-it-does-not-work).

## Webhook tidak sampai {#webhooks-do-not-arrive}

Tekan **Kirim peristiwa uji** di [Pengaturan → Integrasi](/integration/webhooks). Pencacah `webhooks_failed_total` dan `webhooks_dropped_total` di REST API menunjukkan bagaimana pengiriman berjalan; [Ketika tidak ada yang sampai](/integration/webhooks#when-nothing-arrives) menjelaskan arti masing-masing.

## Tombol pintas tidak berfungsi {#a-hotkey-does-nothing}

Buka [Pintasan](/program/shortcuts). Pintasan berfungsi selama telepon adalah program yang sedang Anda gunakan; untuk menggunakannya dari program mana pun, centang **Di mana saja**. Klik pintasan dan tekan kombinasinya lagi jika program lain telah mengambilnya.
