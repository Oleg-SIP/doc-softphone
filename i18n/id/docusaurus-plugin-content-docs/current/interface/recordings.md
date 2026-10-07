---
title: Jendela rekaman
sidebar_position: 2
description: Pustaka percakapan — saring, putar, baca transkrip dan hasil olahannya.
---

**Rekaman** adalah tempat setiap percakapan berada, bagaimanapun cara masuknya: panggilan, rapat yang ditangkap dari aplikasi lain, atau berkas yang diimpor. Masing-masing dicantumkan dengan hasil olahan yang sudah jadi.

<Shot name="01_recordings" alt="Tab Rekaman: daftar percakapan" />

## Menemukan percakapan {#finding-a-conversation}

Bilah di bagian atas memiliki empat penyaring, kolom pencarian, dan sebuah menu:

| Kontrol | Mempersempit daftar berdasarkan |
| --- | --- |
| **Jenis** | cara percakapan masuk |
| **Periode** | tanggal |
| **Kategori** | kategori tempat percakapan dimasukkan — lihat [Kamus](../ai-processing/dictionaries.md) |
| **Tanda** | tanda yang disandangnya |
| **Cari** | apa yang diucapkan di dalamnya — pencarian menelusuri transkrip semua yang telah Anda rekam |

Tombol **⋮** di sebelah kanan bilah membuka tindakan lain untuk daftar: **Impor dari berkas**, **Ekspor ke CSV**, dan **Buka di peramban**.

## Daftar {#the-list}

Setiap baris menampilkan:

- ikon jenis percakapan: gagang telepon untuk panggilan, jendela untuk rapat di aplikasi lain;
- judul — nama pihak lain, atau nomornya, atau **Aplikasi lain** untuk rapat yang ditangkap — dan di bawahnya tanggal serta ringkasan satu baris;
- di sebelah kanan, kategori beserta skornya (sebuah angka, misalnya *Dukungan · 2*), lalu label, dan di ujung durasinya.

Label yang digambar merah adalah **tanda peringatan** (pada gambar *Pelanggan marah* dan *Risiko berhenti*); yang lain adalah label biasa (*Keluhan*, *Dijanjikan menelepon balik*). Percakapan tanpa ringkasan dan kategori belum diolah — baris pertama pada gambar.

## Pemutar {#the-player}

Pilih sebuah baris untuk membuka pemutar di bawah daftar.

<Shot name="02_recording_details" alt="Rekaman yang dipilih: pemutar dan transkrip di bawah daftar" />

- Dua bentuk gelombang adalah dua kanal rekaman, satu untuk setiap pihak dalam percakapan. Bilah di bawahnya menggulir rekaman yang panjang.
- **▶** memutar dan menjeda; waktu di sebelah kiri adalah posisi dan durasi total.
- **1×** mengubah kecepatan; **Keduanya** memilih kanal mana yang Anda dengar.
- Tombol disk menyimpan audio, **×** menutup pemutar.

## Transkrip dan hasil olahan {#the-transcript-and-the-write-up}

Di bawah pemutar terdapat transkrip, dengan satu baris untuk setiap giliran bicara, waktu diucapkannya, dan nama pembicara (**Anda**, nama pihak lain, atau untuk rapat yang ditangkap, **Aplikasi lain**). Klik sebuah baris untuk mendengar momen itu; baris di bawah penanda putar disorot dan kata yang sedang diucapkan ditandai di dalamnya.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/transcript.png" alt="Transkrip di samping audio" />

Daftar tarik-turun di atas transkrip memilih apa yang ditampilkan — transkrip yang dibuat oleh salah satu [pengenal suara](../ai-processing/transcription.md) Anda (bintang menandai transkrip utama rekaman), atau hasil olahan seperti **Tindakan**.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/digest.png" alt="Tindakan yang ditinggalkan percakapan" />

Empat ikon di sebelah kanan daftar tarik-turun:

| Ikon | Fungsi |
| --- | --- |
| Kilauan | Meminta model menulis butir yang dipilih sekarang juga. |
| Dua lembar | Menyalinnya. |
| Disk | Menyimpannya ke berkas. |
| Tempat sampah | Menghapusnya. |

Anda dapat mengekspor transkrip sebagai teks biasa atau sebagai subtitel.

Hasil olahan dibuat oleh [petunjuk](/ai-processing/prompt-studio) dan model yang Anda siapkan di [Pemrosesan](../ai-processing/processing.md), oleh [aturan](../ai-processing/processing.md#rules) yang berjalan sendiri atau saat Anda memintanya. Berapa lama rekaman disimpan diatur di [Merekam panggilan](../recordings/call-recording.md#retention).

## Rekaman yang sudah Anda miliki {#a-recording-you-already-have}

Rekaman yang dibuat di tempat lain — di ponsel, perekam suara, atau sistem lain — dapat ditambahkan dengan **⋮ → Impor dari berkas**. Rekaman itu diperlakukan persis seperti panggilan biasa: ditranskripsikan, diolah, dan ditemukan dengan pencarian yang sama.

## Menghapus rekaman {#deleting-a-recording}

Ketika sebuah rekaman dihapus, semua yang dibuat darinya ikut terhapus: transkrip dan hasil olahannya.
