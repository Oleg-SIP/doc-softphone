---
title: Pemrosesan
sidebar_position: 2
description: Pemrosesan otomatis percakapan, batas pengeluaran bulanan, model bahasa, petunjuk, dan aturan yang menjalankannya.
---

**Pengaturan → Pemrosesan** menentukan apa yang terjadi pada percakapan setelah direkam, model mana yang mengerjakannya, dan berapa biaya yang boleh dikeluarkan.

<Shot name="12_settings_processing" alt="Pengaturan → Pemrosesan" />

## Proses percakapan otomatis {#process-conversations-automatically}

- **Mati:** tidak terjadi apa-apa sampai Anda memintanya di [jendela Rekaman](../interface/recordings.md).
- **Menyala:** [aturan](#rules) di bawah berjalan dengan sendirinya. Inilah yang mengubah percakapan menjadi ringkasan, kategori, dan semua yang lain tanpa ada yang menekan apa pun. Model di cloud mengenakan biaya untuk setiap langkah tersebut.

Di bawah kotak centang, program menampilkan berapa yang telah dihabiskan bulan ini dan untuk berapa permintaan, misalnya *Bulan ini: 40.492 token, dari 84 permintaan, tanpa biaya.*

## Batas {#limits}

| Kolom | Arti |
| --- | --- |
| **Batas uang, per bulan** | Biaya maksimum model dalam sebulan. |
| **Batas token, per bulan** | Jumlah token maksimum yang boleh dipakai model dalam sebulan. |

Ada dua batas karena sebulan dapat dihitung dengan dua satuan. Keduanya kosong sampai Anda mengisinya. Ketika salah satunya tercapai, aturan otomatis berhenti sampai bulan berganti. **Permintaan yang Anda ajukan sendiri tidak pernah dihentikan.**

## Model bahasa {#language-models}

Model yang membaca transkrip dan menulis tentangnya. Tekan **Tambah** untuk menambahkannya. Masing-masing dicantumkan dengan namanya dan, di bawahnya, pengenal model serta alamat layanannya, misalnya `qwen3-32b · http://llm.local:8000/v1`. Yang ditandai **Bawaan** adalah yang digunakan secara bawaan. Sebuah tombol pada formulir model memeriksa bahwa layanan benar-benar menjawab sebelum Anda mengandalkannya.

- Model **di komputer Anda sendiri** menjaga setiap percakapan tetap di dalam gedung dan tidak memakan biaya untuk dijalankan.
- Model di cloud — OpenAI, Claude, Mistral, DeepSeek, Groq, dan lainnya — dikenai biaya per penggunaan. Program menampilkan harga setiap panggilan dalam token dan dalam uang.

## Petunjuk {#prompts}

<Shot name="12b_settings_processing_prompts" alt="Pengaturan → Pemrosesan: petunjuk" />

*Apa yang diminta dari model. Setiap petunjuk datang bersama program dan setiap petunjuk boleh Anda ubah — dan Anda kembalikan.* Masing-masing dicantumkan dengan namanya dan, di bawahnya, apa yang ditulisnya dan dalam bentuk apa. Bentuk — **Jawaban**, **Butir**, **Label**, **JSON**, **Prosa**, **Tanda**, atau **Kriteria** — menentukan bagaimana jawaban disimpan dan ditampilkan. Petunjuk dijelaskan di [Personal Prompt Studio](prompt-studio.md). **Tambah** membuat petunjuk Anda sendiri.

## Aturan {#rules}

<Shot name="12c_settings_processing_rules" alt="Pengaturan → Pemrosesan: aturan" />

*Yang berjalan sendiri, dalam urutan ini. Masing-masing menyala paling banyak sekali per percakapan.* Aturan adalah sebuah baris dengan kotak centang yang menyalakan atau mematikannya, namanya, dan di bawahnya apa yang dilakukannya. **▲** dan **▼** mengubah urutannya. Program dilengkapi delapan aturan:

| Aturan | Fungsi | Kapan |
| --- | --- | --- |
| **Transkripsikan tiap percakapan** | Mentranskripsikannya. | selalu |
| **Ringkas** | Meminta model: **Ringkasan**. | selalu |
| **Padatkan jadi satu baris** | Meminta model: **Ringkasan satu baris**. | selalu |
| **Tempatkan dalam kategori** | Meminta model: **Kategori**. | selalu |
| **Beri label** | Meminta model: **Label**. | selalu |
| **Angkat yang patut dilihat** | Meminta model: **Tanda peringatan**. | selalu |
| **Nilai, bila itu penjualan** | Meminta model: **Kualitas penjualan**. | hanya jika kategorinya **Penjualan** |
| **Nilai, bila itu dukungan** | Meminta model: **Kualitas dukungan**. | hanya jika kategorinya **Dukungan** |

Urutan itu penting: dua aturan terakhir memerlukan kategori yang telah ditetapkan oleh aturan sebelumnya. **Tambah** membuat aturan Anda sendiri.

## Bawaan {#defaults}

**Kembalikan bawaan** mengembalikan petunjuk dan aturan seperti saat datang bersama program, dalam bahasa antarmuka saat ini. Model bahasa Anda tidak disentuh.

Petunjuk dan aturan yang datang bersama program tetap dalam bahasa aslinya ketika Anda mengganti bahasa antarmuka; **Kembalikan bawaan** membawanya ke bahasa yang baru. Setiap petunjuk kemudian ditandai *diubah* di sebelah kanan.
