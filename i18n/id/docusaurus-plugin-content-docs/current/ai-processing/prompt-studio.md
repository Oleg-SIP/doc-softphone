---
title: Personal Prompt Studio
sidebar_position: 3
description: Petunjuk yang mengolah percakapan Anda, aturan yang menjalankannya, dan cara menyesuaikannya dengan kebutuhan Anda.
---

**Personal Prompt Studio** adalah bagian AI Softphone yang mengolah percakapan Anda dengan cara Anda. Hasil olahan dibuat oleh petunjuk: program dilengkapi sebelas petunjuk, siap digunakan begitu transkripsi dan model bahasa terhubung, dan Anda dapat mengubahnya dengan bahasa sehari-hari, menggandakannya, dan menambahkan petunjuk Anda sendiri. Petunjuk-petunjuk itu dicantumkan di bawah **Petunjuk** di [Pengaturan → Pemrosesan](processing.md#prompts).

LLM Anda, kunci Anda, kendali Anda: hubungkan model pilihan Anda dengan kunci Anda sendiri, melalui layanan yang didukung atau API yang kompatibel — atau model yang dijalankan di dalam organisasi Anda. Dengan [transkripsi](transcription.md#your-own-models) di perangkat keras Anda sendiri juga, baik audio maupun transkrip tetap berada di dalam lingkungan Anda.

<Shot name="12b_settings_processing_prompts" alt="Daftar petunjuk di Pengaturan → Pemrosesan" />

## Petunjuk yang datang bersama program {#the-prompts-that-come-with-the-program}

Kolom kedua adalah apa yang ditampilkan daftar di bawah nama petunjuk: apa yang ditulisnya, dan dalam bentuk apa.

| Petunjuk | Bentuk | Yang ditulisnya |
| --- | --- | --- |
| **Ringkasan** | Prosa | Pokok-pokok utama, keputusan, dan langkah selanjutnya dalam satu paragraf pendek. |
| **Ringkasan satu baris** | Prosa | Judul singkat untuk mengenali percakapan dalam daftar. |
| **Daftar tindakan** | Butir | Siapa setuju melakukan apa, dan kapan, beserta kata-kata yang mereka ucapkan. |
| **Topik** | Butir | Pokok bahasan yang dibicarakan, dalam beberapa kata. |
| **Nama dan angka** | JSON | Orang, perusahaan, tanggal, jumlah, dan nomor referensi. |
| **Kategori** | Label | Memasukkan percakapan ke salah satu [kategori](dictionaries.md) Anda. |
| **Label** | Label | Memasang [label](dictionaries.md) Anda padanya, agar dapat ditemukan nanti. |
| **Tanda peringatan** | Tanda | Masalah, beserta bukti dan waktunya dalam percakapan. |
| **Pertanyaan tentang panggilan ini** | Jawaban | Menjawab pertanyaan yang Anda ajukan tentang satu percakapan, berdasarkan transkripnya. |
| **Kualitas penjualan** | Kriteria | Meninjau percakapan berdasarkan kriteria penjualan yang dapat Anda sunting. |
| **Kualitas dukungan** | Kriteria | Menilai seberapa baik masalah dipahami dan ditangani. |

Bentuk adalah format jawaban yang tetap, dan itulah yang memungkinkan program menyimpan dan mencarinya nanti: **Label** adalah kode dari salah satu daftar Anda, **Tanda** adalah kode dengan tingkat keparahan, **Kriteria** adalah skor beserta alasannya dan skor untuk setiap kriteria, **Jawaban** adalah balasan beserta kata-kata yang menjadi dasarnya. Instruksi yang memberi tahu model format tersebut disimpan di [Kamus](dictionaries.md#answer-shapes-and-language).

Panggilan yang dilakukan di AI Softphone, rapat yang [ditangkap](/capture/) dari komputer, dan rekaman yang diimpor semuanya melewati petunjuk yang sama begitu memiliki transkrip.

Daftar tindakan mencatat apa yang telah disepakati — daftar ini tidak mengirim pesan, memesan kunjungan, atau membuat tiket untuk Anda.

## Menyesuaikannya {#making-it-yours}

- Ubah apa yang diminta sebuah petunjuk, dengan bahasa sehari-hari: apa yang dicarinya, format jawaban, dan bahasa jawabannya.
- Gandakan petunjuk untuk mencoba variannya.
- Pilih model untuk setiap petunjuk — di komputer Anda sendiri atau di cloud.
- Atur urutan petunjuk dijalankan, nyalakan dan matikan, dan buat bersyarat — hal itu dilakukan dengan [aturan](processing.md#rules): misalnya, tinjauan penjualan hanya dijalankan pada panggilan yang dimasukkan sebagai **Penjualan**.
- Kelola kategori, label, dan tanda peringatan Anda sendiri di [Kamus](dictionaries.md).
- Batasi biaya dengan [batas bulanan](processing.md#limits).

Petunjuk dan aturan asli dapat dipulihkan dengan **Kembalikan bawaan** di bawah **Bawaan** di [Pengaturan → Pemrosesan](processing.md#defaults).
