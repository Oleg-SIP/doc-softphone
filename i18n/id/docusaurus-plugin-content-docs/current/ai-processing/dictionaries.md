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
| **Penjualan** | `sales` | Menjual, memberi penawaran, menawar atau menindaklanjuti pembelian — termasuk pelanggan yang menanyakan harga sesuatu. |
| **Dukungan** | `support` | Membantu seseorang dengan produk atau layanan yang sudah dimilikinya: kerusakan, pertanyaan tentang pemakaian, keluhan tentang cara kerjanya. |
| **Pribadi** | `personal` | Sama sekali bukan urusan kerja — percakapan pribadi yang kebetulan terjadi di saluran ini. |
| **Lainnya** | `other` | Urusan kerja, tetapi bukan penjualan maupun dukungan: pemasok, rekan kerja, pengiriman, salah sambung. Pilih ini alih-alih menebak di antara yang lain. |

Tekan **Tambah** untuk menambahkan kategori Anda sendiri.

## Label {#tags}

Penanda yang *semuanya dapat berlaku untuk percakapan yang sama*. Tekan **Tambah** untuk menambahkannya. Daftar dimulai dengan entri seperti:

| Nama | Kode | Digunakan untuk |
| --- | --- | --- |
| **Dijanjikan menelepon balik** | `callback` | Seseorang dalam panggilan ini berjanji menelepon balik, atau minta ditelepon balik. |
| **Keluhan** | `complaint` | Pihak lain menyatakan ketidakpuasan, entah terselesaikan atau tidak. |
| **Dinaikkan** | `escalation` | Panggilan diserahkan kepada orang lain, atau pihak lain memintanya. |
| **Pelanggan VIP** | `vip` | Pihak lain diperlakukan sebagai pelanggan penting, atau mengatakan sendiri bahwa ia begitu. |

## Tanda peringatan {#red-flags}

Hal-hal yang perlu diperhatikan, ditemukan dalam percakapan beserta bukti dan waktunya — misalnya *Pelanggan marah* atau *Risiko berhenti*. Tanda peringatan digambar merah di [jendela Rekaman](../interface/recordings.md), dan masing-masing memiliki tingkat keparahan: rendah, sedang, atau tinggi.

| Nama | Kode | `severity` | Digunakan untuk |
| --- | --- | --- | --- |
| **Pelanggan marah** | `angry-customer` | `high` | Terdengar bahwa pihak lain marah, menghina, atau mengancam pergi. |
| **Risiko berhenti** | `churn-risk` | `high` | Pembatalan, tidak memperpanjang, atau pindah ke pihak lain sempat disinggung, betapapun tenangnya. |
| **Janji diberikan** | `promise-made` | `medium` | Pihak kami mengikatkan diri pada sesuatu yang tertentu — tanggal, harga, perbaikan, pengembalian dana. |
| **Data sensitif** | `sensitive-data` | `high` | Nomor kartu, kata sandi, nomor dokumen atau apa pun yang tidak seharusnya ada dalam rekaman dibacakan dengan suara. |
| **Pesaing** | `competitor` | `low` | Pihak lain menyebut pihak lain yang menawarkan hal sama, atau membandingkan kami dengannya. |

## Petunjuk {#instructions}

<Shot name="13b_settings_dictionaries_scrolled" alt="Pengaturan → Kamus: format jawaban dan instruksi bahasa" />

*Yang ditambahkan ke tiap petunjuk tentang bentuk jawaban dan bahasa untuk menulisnya.* Instruksi ini disimpan di sini agar setiap petunjuk dapat menggunakan kata-kata yang sama, dan Anda dapat mengubahnya seperti entri lainnya — atau menulis milik Anda sendiri, misalnya *jawab singkat* atau *jangan pernah sebut harga*, lalu mencentangnya di **Kirim juga** pada petunjuk mana pun.

| Nama | Kode | Yang diberitahukan kepada model |
| --- | --- | --- |
| **Prosa** | `shape-plain` | Jawab dengan prosa biasa, tanpa JSON, daftar, atau judul. |
| **Butir** | `shape-list` | Jawab dengan daftar hal yang harus dikerjakan, masing-masing dengan siapa dan kapan. |
| **Label** | `shape-labels` | Jawab dalam JSON dengan daftar kode dan seberapa yakin terhadap masing-masing, hanya menggunakan kode dari daftar yang diberikan. |
| **Skor** | `shape-score` | Jawab dengan skor, alasannya, dan kata-kata yang menjadi dasarnya. |
| **Kriteria** | `shape-rubric` | Jawab dengan skor keseluruhan dan skor untuk setiap kriteria. |
| **Tanda** | `shape-flags` | Jawab dengan kode dari daftar, masing-masing dengan tingkat keparahan. |
| **Jawaban** | `shape-qa` | Jawab dengan balasannya, atau katakan terus terang bahwa percakapan tidak menyebutkannya, beserta kata-kata yang menjadi dasar balasan. |
| **JSON** | `shape-json` | Jawab hanya dengan JSON, dalam format yang diminta di atas. |
| **Sebagaimana diucapkan** | `language-as-spoken` | Tulis dalam bahasa yang digunakan dalam percakapan. |
| **Sebagaimana diucapkan, disebut** | `language-as-spoken-named` | Sama, dengan menyebutkan nama bahasanya. |
| **Bahasa yang ditentukan** | `language-named` | Tulis dalam bahasa yang Anda sebutkan. |

**Tambah** di awal daftar menambahkan entri.

## Bawaan {#defaults}

**Kembalikan bawaan** mengembalikan setiap kamus seperti saat datang bersama program, dalam bahasa antarmuka saat ini. Penggolongan percakapan Anda yang sudah ada tidak disentuh.

## Format jawaban {#response-formats}

Blok berikut menyalin instruksi bawaan. Isinya menjelaskan format jawaban; pilihan alternatif merupakan notasi, bukan contoh JSON yang dapat dijalankan.

### Prosa (`shape-plain`) {#shape-plain}

```text
Jawablah dalam prosa biasa. Jangan pakai JSON, daftar atau judul.
```

### Butir (`shape-list`) {#shape-list}

```text
Jawab hanya dengan JSON, persis berbentuk ini:
{"items": [{"text": "apa yang harus dikerjakan", "owner": "siapa, atau kosong", "due": "kapan, atau kosong"}]}
Bila tidak ada yang perlu didaftar, pakai larik kosong. Jangan menulis apa pun di luar JSON.
```

### Label (`shape-labels`) {#shape-labels}

```text
Jawab hanya dengan JSON, persis berbentuk ini:
{"labels": [{"code": "kode dari daftar yang diberikan", "confidence": 0.0}]}
Pakai hanya kode dari daftar itu. Bila tidak ada yang cocok, pakai larik kosong.
Jangan mengarang kode, dan jangan menulis apa pun di luar JSON.
```

### Skor (`shape-score`) {#shape-score}

```text
Jawab hanya dengan JSON, persis berbentuk ini:
{"score": 3, "rationale": "mengapa angka itu dan bukan satu tingkat lebih tinggi",
 "evidence": [{"at_ms": 0, "quote": "kata-kata yang jadi dasarnya"}]}
Skor adalah bilangan bulat dari 1 sampai 5. Jangan menulis apa pun di luar JSON.
```

### Kriteria (`shape-rubric`) {#shape-rubric}

```text
Jawab hanya dengan JSON, persis berbentuk ini:
{"overall": 3, "rationale": "mengapa angka itu dan bukan satu tingkat lebih tinggi",
 "criteria": [{"name": "kriteria seperti yang diberikan kepada Anda",
               "verdict": "pass" atau "weak" atau "fail" atau "n/a",
               "note": "satu kalimat"}]}
Nilailah setiap kriteria yang diberikan dan tidak ada yang lain. Skor keseluruhan
adalah bilangan bulat dari 1 sampai 5. Jangan menulis apa pun di luar JSON.
```

### Tanda (`shape-flags`) {#shape-flags}

```text
Jawab hanya dengan JSON, persis berbentuk ini:
{"flags": [{"code": "kode dari daftar yang diberikan",
            "severity": "low" atau "medium" atau "high",
            "evidence": "kata-kata yang jadi dasarnya",
            "at_ms": 0}]}
Pakai hanya kode dari daftar itu, dan angkat masing-masing paling banyak sekali.
Bila tidak ada yang cocok, pakai larik kosong. Jangan menulis apa pun di luar JSON.
```

### Jawaban (`shape-qa`) {#shape-qa}

```text
Jawab hanya dengan JSON, persis berbentuk ini:
{"answer": "jawaban Anda, atau terus terang bahwa percakapannya tidak menyebutkan",
 "citations": [{"at_ms": 0, "quote": "kata-kata yang menjadi dasar jawaban Anda"}]}
Jangan menjawab dari apa pun selain percakapan itu. Jangan menulis apa pun di luar JSON.
```

### JSON (`shape-json`) {#shape-json}

```text
Jawab hanya dengan JSON, dalam bentuk yang diminta di atas. Jangan menulis apa pun di luar JSON.
```

### Sebagaimana diucapkan (`language-as-spoken`) {#language-as-spoken}

```text
Tulis jawaban Anda dalam bahasa yang sama dengan percakapannya.
```

### Sebagaimana diucapkan, disebut (`language-as-spoken-named`) {#language-as-spoken-named}

```text
Tulis jawaban Anda dalam bahasa yang sama dengan percakapannya, yaitu {language}.
```

### Bahasa yang ditentukan (`language-named`) {#language-named}

```text
Tulis jawaban Anda dalam bahasa ini: {language}.
```
