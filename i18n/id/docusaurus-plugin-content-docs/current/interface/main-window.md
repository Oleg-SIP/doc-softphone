---
title: Jendela utama
sidebar_position: 1
description: Telepon di kiri, pustaka dan pengaturan di kanan — tata letak jendela utama AI Softphone.
---

Jendela utama adalah telepon itu sendiri. Dengan tata letak bawaan, **Satu jendela**, telepon berada di kiri dan semua yang lain terbuka di kanan. [Tata letaknya dapat diubah](../program/appearance.md).

<Shot name="03_contacts" full alt="Jendela utama: telepon di kiri dan tab Kontak di kanan" />

## Telepon {#the-phone}

Dari atas ke bawah, sisi kiri berisi:

- kolom **Nomor**;
- papan tombol dan tombol panggil;
- cip akun;
- tombol-tombol yang memantau ekstensi lain;
- empat tempat tujuan: **Rekaman**, **Kontak**, **Riwayat**, dan **Pengaturan**.

### Papan panggil {#the-dialler}

- **Nomor** — ketik atau tempel nomor yang ingin dihubungi. Ikon jam di ujung kanan kolom membuka daftar nomor yang baru-baru ini Anda hubungi atau yang menghubungi Anda.
- Tombol bulat **1–9**, **\***, **0**, dan **#** mengisi nomor, dan selama panggilan mengirim nada (DTMF).
- Tombol gagang telepon melakukan panggilan. Tombol ini tetap abu-abu selama belum ada nomor.

<Shot name="22_last_calls" full alt="Daftar panggilan terakhir di bawah kolom Nomor, di samping tab Riwayat" />

Ketika daftar nomor terakhir terbuka, kolom menampilkan tanda panah dan tombol panggil berpindah ke kanannya. Setiap entri berupa nama, atau nomor jika penelepon tidak ada di [Kontak](contacts-history.md), beserta tanggalnya. Gagang telepon merah menandai panggilan yang tidak Anda jawab; angka pengulangan dalam tanda kurung — misalnya *Layanan Bantuan (4)* — berarti beberapa panggilan berturut-turut dengan pihak yang sama.

### Cip akun {#the-account-chips}

Di bawah papan tombol ada satu cip untuk setiap [akun](../sip-accounts/setup.md). Titik hijau berarti akun terdaftar di PBX. Cip yang disorot (pada gambar, **305 Dukungan**) adalah akun yang akan digunakan untuk panggilan berikutnya; tekan cip lain untuk menggantinya. Tombol merah bulat di sebelah kanan cip adalah mode jangan ganggu.

### Tombol {#the-buttons}

Di bawah cip terdapat [tombol](../sip-accounts/buttons.md) yang Anda buat untuk rekan kerja dan saluran, masing-masing dengan lampu — **Santoso** dan **Gudang** pada gambar. Tekan salah satunya untuk memanggil nomornya.

### Rekaman, Kontak, Riwayat, Pengaturan {#recordings-contacts-history-settings}

Keempat entri di bagian bawah ini membuka tab di kanan, bersebelahan: [Rekaman](../interface/recordings.md), [Kontak dan Riwayat](contacts-history.md), serta [Pengaturan](settings-overview.md). Tab yang sudah Anda buka tetap berada di baris paling atas sisi kanan.

## Panggilan yang sedang berlangsung {#a-call-in-progress}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/call.png" alt="Panggilan yang sedang berlangsung" />

Selama panggilan berlangsung, kolom nomor berpindah ke atas dengan ikon papan tombol di dalamnya, dan panggilan ditampilkan pada sebuah kartu:

- status dan durasi panggilan (**Sedang menelepon · 0:21**), nama pihak lain, **Saluran** dan nama akun yang digunakan panggilan, serta nomornya;
- dua bilah level vertikal di sisi kartu, satu untuk setiap kanal suara;
- sebaris tombol: rekam (lingkaran), bisukan (mikrofon), tahan (jeda), dan tombol merah **Tutup panggilan**;
- baris kedua: alihkan (gagang telepon dengan panah) dan papan tombol.

Panggilan dapat dialihkan langsung, atau setelah Anda berbicara terlebih dahulu dengan orang yang dituju.

Jika nomor dikenal di **Kontak**, namanya ditampilkan sebagai pengganti nomor. Tindakan yang sama memiliki [tombol pintas](../program/shortcuts.md): menjawab, menutup panggilan, menahan, dan membisukan.

## Beberapa panggilan sekaligus {#several-calls-at-once}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/calls.png" alt="Beberapa panggilan" />

Panggilan masuk diumumkan dengan spanduk pemberitahuan di mana pun Anda sedang bekerja, bahkan saat telepon disembunyikan. Panggilan masuk yang baru muncul pada kartunya sendiri di atas daftar, dengan tombol hijau, kuning, dan merah serta baris yang menyebutkan dengan siapa Anda sedang berbicara (**Menelepon dengan Maria Ellis**). Daftar di bawahnya menampilkan setiap panggilan beserta statusnya — **Ditahan**, **Sedang menelepon**, **Panggilan masuk** — dan akun yang digunakannya. Ikon jeda menandai panggilan yang ditahan dan ikon pengeras suara menandai panggilan tempat Anda sedang berbicara.

Apa yang terjadi ketika seseorang menelepon saat Anda sedang dalam panggilan diatur di [Pengaturan panggilan](../sip-accounts/calls.md#call-waiting).

## Konferensi {#conference}

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/conference.png" alt="Konferensi" />

Panggilan yang telah digabung ditampilkan sebagai satu kartu **Konferensi** pada saluran akun. Setiap peserta dicantumkan dengan lama waktunya dalam panggilan dan tombol **Tutup panggilan** miliknya sendiri. Tombol-tombol di bawahnya merekam, membisukan, dan mengakhiri konferensi untuk semua orang; tombol lebar di bagian bawah memisahkan kembali konferensi menjadi panggilan-panggilan tersendiri.

## Penangkapan {#capture}

Ketika [penangkapan dari aplikasi lain](../capture/capture.md) diizinkan di **Pengaturan → Penangkapan**, sebuah strip muncul di antara cip akun dan tombol.

<Shot name="10_settings_capture" full alt="Strip Penangkapan di kaki telepon: Penangkapan · siap, Rekam, dan dua bilah level" />

- **Penangkapan · siap** menyatakan bahwa program sedang mendengarkan percakapan di aplikasi lain.
- **Rekam** memulai penangkapan secara manual.
- Dua bilah tipis di bawahnya menunjukkan level suara: yang atas adalah Anda, yang bawah adalah apa yang diputar komputer. Cara keduanya digambar diatur di bawah **Gambar di baris di kaki telepon**.

Program juga dapat tinggal di baki (bilah menu di macOS) dan dipanggil dengan [tombol pintas](../program/shortcuts.md).
