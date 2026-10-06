---
title: Kamus
sidebar_position: 4
description: Kategori, label, dan tanda peringatan Anda sendiri — kata-kata yang digunakan untuk menggolongkan percakapan Anda.
---

**Pengaturan → Kamus** berisi kata-kata yang dapat digunakan untuk menggolongkan, memberi label, atau menandai sebuah percakapan. Daftar-daftar inilah yang diperlihatkan kepada model dan yang harus dipilih olehnya, sehingga jawaban selalu berupa sesuatu yang dapat Anda cari nanti.

<Shot name="13_settings_dictionaries" alt="Pengaturan → Kamus" />

**Tampilkan yang terhapus** menampilkan entri yang telah Anda hapus.

Setiap entri terdiri atas nama, kode pendek dalam huruf kecil, dan deskripsi yang memberi tahu model kapan memilihnya. Kode itulah yang disimpan dan yang dikembalikan oleh [REST API](../integration/rest-api.md#taxonomy-and-settings), sehingga tetap sama ketika Anda mengganti nama entri.

## Kategori {#categories}

Pokok bahasan percakapan; **satu dipilih untuk setiap percakapan**. Program dimulai dengan empat:

| Nama | Kode | Digunakan untuk |
| --- | --- | --- |
| **Penjualan** | `sales` | Menjual, memberi penawaran harga, bernegosiasi, atau menindaklanjuti pembelian — termasuk pelanggan yang menanyakan harga sesuatu. |
| **Dukungan** | `support` | Membantu seseorang dengan produk atau layanan yang sudah dimilikinya: kerusakan, pertanyaan tentang penggunaannya, keluhan tentang cara kerjanya. |
| **Pribadi** | `personal` | Sama sekali bukan urusan bisnis — percakapan pribadi yang kebetulan dilakukan di saluran ini. |
| **Lainnya** | `other` | Urusan bisnis, tetapi bukan penjualan maupun dukungan: pemasok, rekan kerja, pengiriman, salah sambung. Pilih ini daripada menebak-nebak di antara kategori lainnya. |

Tekan **Tambah** untuk menambahkan kategori Anda sendiri.

## Label {#tags}

Penanda yang *semuanya dapat berlaku untuk percakapan yang sama*. Tekan **Tambah** untuk menambahkannya. Daftar dimulai dengan entri seperti:

| Nama | Kode | Digunakan untuk |
| --- | --- | --- |
| **Dijanjikan menelepon balik** | `callback` | Seseorang dalam panggilan ini berjanji akan menelepon balik, atau meminta untuk ditelepon balik. |
| **Keluhan** | `complaint` | Pihak lain menyatakan ketidakpuasan, baik terselesaikan maupun tidak. |
| **Dinaikkan** | `escalation` | Panggilan diserahkan kepada orang lain, atau pihak lain memintanya. |
| **Pelanggan VIP** | `vip` | Pihak lain diperlakukan sebagai, atau mengaku sebagai, pelanggan penting. |

## Tanda peringatan {#red-flags}

Hal-hal yang perlu diperhatikan, ditemukan dalam percakapan beserta bukti dan waktunya — misalnya *Pelanggan marah* atau *Risiko berhenti*. Tanda peringatan digambar merah di [jendela Rekaman](../recordings/recordings-window.md), dan masing-masing memiliki tingkat keparahan: rendah, sedang, atau tinggi.

## Format jawaban dan bahasa {#answer-shapes-and-language}

<Shot name="13b_settings_dictionaries_scrolled" alt="Pengaturan → Kamus: format jawaban dan instruksi bahasa" />

Lebih ke bawah pada tab terdapat instruksi yang menjadi bahan penyusun petunjuk. Instruksi ini disimpan di sini agar setiap petunjuk dapat menggunakan kata-kata yang sama, dan Anda dapat mengubahnya seperti entri lainnya.

| Nama | Kode | Yang diberitahukan kepada model |
| --- | --- | --- |
| **Label** | `shape-labels` | Jawab dalam JSON dengan daftar kode dan seberapa yakin terhadap masing-masing, hanya menggunakan kode dari daftar yang diberikan. |
| **Skor** | `shape-score` | Jawab dengan skor, alasannya, dan kata-kata yang menjadi dasarnya. |
| **Kriteria** | `shape-rubric` | Jawab dengan skor keseluruhan dan skor untuk setiap kriteria. |
| **Tanda** | `shape-flags` | Jawab dengan kode dari daftar, masing-masing dengan tingkat keparahan. |
| **Jawaban** | `shape-qa` | Jawab dengan balasannya, atau katakan terus terang bahwa percakapan tidak menyebutkannya, beserta kata-kata yang menjadi dasar balasan. |
| **JSON** | `shape-json` | Jawab hanya dengan JSON, dalam format yang diminta di atas. |
| **Sebagaimana diucapkan** | `language-as-spoken` | Tulis dalam bahasa yang digunakan dalam percakapan. |
| **Sebagaimana diucapkan, disebut** | `language-as-spoken-named` | Sama, dengan menyebutkan nama bahasanya. |
| **Bahasa yang ditentukan** | `language-named` | Tulis dalam bahasa yang Anda sebutkan. |

**Tambah** di akhir daftar menambahkan entri.

## Bawaan {#defaults}

**Kembalikan bawaan** mengembalikan setiap kamus seperti saat datang bersama program, dalam bahasa antarmuka saat ini. Penggolongan percakapan Anda yang sudah ada tidak disentuh.
