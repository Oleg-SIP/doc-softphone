---
title: Masalah umum
sidebar_position: 2
description: "Apa yang perlu diperiksa ketika akun tidak mau terdaftar, tidak ada suara, panggilan atau rapat tidak terekam, tidak ada transkrip, pembisik tidak mau mulai, atau tautan, tombol pintas, maupun API tidak berfungsi, dan arti pesan-pesan dari telepon itu sendiri."
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

- **Pengaturan → Perekaman**, daftar tarik-turun pertama, menentukan panggilan mana yang direkam; bawaannya, **Manual**, hanya merekam ketika Anda menekan rekam di kartu panggilan. Lihat [Rekaman](/recordings).
- Perekaman dimulai saat panggilan dijawab, jadi panggilan yang tidak dijawab tidak memiliki berkas.
- Modul **Perekaman** harus menyala di [Modul](/application/modules).
- Rekaman dihapus oleh batas-batas di bawah **Penyimpanan**; rekaman yang disematkan tidak pernah dihapus.

## Rapat di aplikasi lain tidak tertangkap {#a-meeting-in-another-application-was-not-captured}

Lihat [Penangkapan](/capture/).

- **Izinkan penangkapan suara** di **Pengaturan → Penangkapan** harus menyala.
- Bila **Mulai otomatis** diatur ke **Tanya saya** (bawaan), jawab pertanyaannya saat muncul; bila **Tidak pernah**, tekan tombol rekam sendiri.
- Gunakan **Uji** di tab yang sama: bilah atas harus bergerak saat Anda bicara, bilah bawah saat ada yang diputar.
- Modul **Penangkapan** harus menyala di [Modul](/application/modules).

## Ada rekaman, tetapi tidak ada transkrip atau ringkasan {#there-is-a-recording-but-no-transcript-or-summary}

- Percakapan ditranskripsikan dan diolah dengan sendirinya hanya jika **Proses percakapan otomatis** menyala di [Pengaturan → Pemrosesan](/ai-processing/processing). Jika tidak, mintalah di [jendela Rekaman](/interface/recordings).
- Harus ada [pengenal suara](/ai-processing/transcription) dan [model bahasa](/ai-processing/processing#language-models), dan masing-masing harus menjawab di alamatnya.
- Ketika **Batas uang, per bulan** atau **Batas token, per bulan** tercapai, aturan otomatis berhenti sampai bulan berganti. Permintaan yang Anda ajukan sendiri tidak pernah dihentikan.
- Langkah-langkah di [Pengaturan → Ikhtisar](/interface/settings-overview) menunjukkan apa yang masih perlu disiapkan.

## Pembisik tidak muncul atau tidak mau mulai {#the-prompter-does-not-appear-or-does-not-start}

**Pembisik** muncul di daftar bagian bawah telepon hanya jika tiga hal terpenuhi: pengenal suara dengan **Alamat untuk pembisik** yang lolos **Uji** di [Pengaturan → Transkripsi](/ai-processing/transcription#live-recognition-for-the-prompter), sebuah model bahasa, dan centang **Izinkan pembisik digunakan** di [Pengaturan → Pembisik](/ai-processing/prompter). Modul **Pembisik** harus aktif di [Modul](/application/modules).

Jika jendelanya terbuka tetapi pembisik tidak mau mulai, baris di bawah tombol-tombolnya menyebutkan apa yang kurang. [Jika tidak mau mulai](/interface/prompter#when-it-does-not-start) memuat semua pesan dan apa yang harus dilakukan.

## Telepon menghilang saat saya menutup jendela {#the-phone-disappeared-when-i-closed-the-window}

Bila **Biarkan telepon tetap berjalan saat jendelanya ditutup** menyala, telepon masih berjalan, dan panggilan tetap masuk. Ikon di area pemberitahuan (bilah menu di macOS) memunculkan kembali jendelanya. Di desktop tanpa area pemberitahuan, telepon diminimalkan di bilah tugas. Lihat [Awalan](/program/startup).

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

## Pesan dari telepon {#messages-the-phone-shows}

Jika sesuatu tidak terjadi, telepon menyebutkan alasannya di baris tersendiri. Baris di bawah daftar hilang sendiri setelah beberapa detik.

### Saat panggilan tidak keluar {#when-a-call-is-not-placed}

| Pesan | Yang perlu dilakukan |
| --- | --- |
| *Belum ada akun yang disiapkan* | Tambahkan akun di [Pengaturan → Akun](/sip-accounts/setup). |
| *Tidak ada akun yang menyala, jadi tidak ada saluran untuk menelepon.* | Centang kotak sebuah akun di **Pengaturan → Akun**. |
| *Belum ada saluran yang terdaftar.* | Akun sudah menyala tetapi belum terdaftar di PBX. Tunggu sampai titiknya menjadi hijau; jika tidak, lihat [Akun tidak mau terdaftar](#the-account-will-not-register). |
| *Panggilan yang berlangsung sudah sebanyak yang sanggup ditangani telepon ini.* | Tutup salah satu panggilan, lalu telepon lagi. |
| *Akun yang akan dipakai untuk ini sudah tidak ada.* | Baris ini milik akun yang sudah dihapus. Tekan nomornya di papan tombol. |
| *Baris ini tidak punya nomor untuk ditelepon balik.* | Penelepon menyembunyikan nomornya, jadi tidak ada yang bisa ditelepon balik. |

### Saat akun tidak tersambung {#when-an-account-does-not-connect}

| Pesan | Yang perlu dilakukan |
| --- | --- |
| *Alamat server itu tidak ditemukan. Periksa kalau-kalau ada salah ketik.* | Periksa **Alamat server** di [formulir akun](/sip-accounts/setup). |
| *Server tidak dapat dihubungi. Periksa alamat, porta, dan jaringan Anda.* | Periksa **Alamat server**, serta **Angkutan** dan **Porta** di bawah **Pengaturan server**. Firewall juga bisa menghalangi SIP. |
| *Server menolak nama pengguna atau kata sandi ini.* | Periksa **Nama pengguna** dan **Kata sandi**. Jika PBX memeriksa kata sandi dengan nama lain, isi **Pengguna autentikasi**. |
| *Sertifikat server tidak dapat diverifikasi. Jika administrator server membuatnya sendiri, hapus centang “Verifikasi sertifikat” di “Pengaturan server”.* | Muncul pada sambungan TLS. Jika PBX memakai sertifikat buatannya sendiri, hapus centang **Verifikasi sertifikat** di bawah **Pengaturan server**. |
| *Kata sandi akun ini tidak terbaca dari gantungan kunci. Bukalah kuncinya lalu sambung lagi.* | Buka kunci gantungan kunci komputer (Keychain di macOS), lalu tekan **Sambungkan** pada akun. |

### Selama panggilan {#during-a-call}

| Pesan | Yang perlu dilakukan |
| --- | --- |
| *Tidak ada format audio yang sama* | PBX dan telepon tidak punya codec yang sama. Nyalakan salah satu yang dipakai PBX di [Format audio](/sip-accounts/calls#audio-formats). |
| *Tidak ada mikrofon atau pengeras suara* | Pilih perangkatnya di [Pengaturan → Perangkat](/sip-accounts/devices). |
| *Tidak merekam: ruang disk sudah mencapai batas. Kosongkan sebagian, atau ubah batasnya di Pengaturan.* | Ruang kosong di disk sudah mencapai **Ambang ruang disk** — lihat [Rekaman](/recordings). Kosongkan ruang, atau turunkan ambangnya. |

### Saat telepon dijalankan {#when-the-phone-starts}

*Basis data tidak terbaca* berarti basis data dibuat oleh versi program yang lain dan versi ini tidak dapat membacanya. Biasanya versi yang lebih lama dijalankan pada data versi yang lebih baru: jika versi yang lebih baru dipasang lagi, ia membuka basis data seperti semula. **Mulai dari awal** justru membuat basis data kosong — setiap kontak dan setiap panggilan di riwayat hilang, dan itu tidak dapat dibatalkan. Sebelum menekannya, Anda dapat menyimpan salinan berkas basis data; [Diagnostik](/troubleshooting/diagnostics#files) menyebutkan letaknya.
