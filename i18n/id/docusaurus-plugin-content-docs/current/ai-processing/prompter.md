---
title: Pengaturan pembisik
sidebar_label: Pembisik
sidebar_position: 5
description: "Pengaturan → Pembisik: apa yang dibutuhkan pembisik langsung, sakelar yang mengizinkannya, ukuran teks, asisten dan kartunya, serta batas bulanan untuk apa yang boleh dibelanjakannya."
---

Di **Pengaturan → Pembisik**, pembisik langsung diizinkan, diatur ukurannya, dan diberi asisten. Pembisik itu sendiri — jendela yang menuliskan panggilan saat diucapkan dan menyarankan apa yang perlu dijawab, serta latihan dengan rekaman — dijelaskan di [Jendela pembisik](/interface/prompter).

[Ikhtisar](/interface/settings-overview) pengaturan mencantumkan pembisik di bawah **Pembisik** dalam dua langkah: **Izinkan pembisik** dan **Jalankan pembisik**.

## Yang dibutuhkan {#what-it-needs}
- **Pengenal suara yang bisa menyimak selagi percakapan berlangsung.** Ditambahkan di [Pengaturan → Transkripsi](/ai-processing/transcription#live-recognition-for-the-prompter), seperti pengenal suara lainnya, dan memerlukan **Alamat untuk pembisik** serta **Uji** yang berhasil.
- **Model bahasa**, untuk asisten yang memberi saran. Yaitu model yang diatur pada asisten, atau model bawaan di [Pengaturan → Pemrosesan](/ai-processing/processing#language-models). Subtitel sama sekali tidak memerlukan model.
- **Centang Izinkan pembisik digunakan**, di **Pengaturan → Pembisik**.

Begitu ketiganya terpenuhi, **Pembisik** muncul di daftar bagian bawah telepon, di antara **Riwayat** dan **Pengaturan**, dan membuka [jendela pembisik](/interface/prompter). Bagian program yang menanganinya adalah modul **Pembisik**, *Mendengarkan percakapan saat berlangsung dan memberi saran*; modul ini bisa dimatikan di [Modul](/application/modules).

## Pengaturan → Pembisik {#settings--prompter}
<Shot name="41_settings_prompter" alt="Pengaturan → Pembisik: sakelar yang mengizinkan pembisik dan ukuran teks" />

*Pengenalan ucapan selama percakapan berlangsung, dan saran yang ditulis menurut instruksi Anda sendiri. Keduanya ditagih per menit.*

| Pengaturan | Bawaan | Fungsinya |
| --- | --- | --- |
| **Izinkan pembisik digunakan** | mati | Satu-satunya sakelar yang memungkinkan pembisik dimulai. Tidak ada hal lain di halaman ini yang berpengaruh selama sakelar ini mati. |
| **Transkrip dan saran** | 13 piksel | Seberapa besar kedua kolom jendela digambar. |
| **Ulangi baris terbaru di atas kolom** | hidup | Menampilkan saran terbaru — atau baris terbaru, untuk asisten yang tidak menyarankan apa pun — di pita tersendiri di atas kolom. |
| **Baris yang diulang** | 20 piksel | Seberapa besar teks di pita. Ditampilkan selama pita hidup. |

:::caution
Suara pihak lain dikirim ke pengenal suara selagi ia berbicara, dan itu tidak kurang dari merekamnya. Jika [Pengaturan → Perekaman](/recordings) meminta mereka diberi tahu lebih dulu, pembisik baru mulai setelah itu dilakukan.
:::

Pembisik dibaca sambil berbicara, sering dari jarak lebih jauh daripada bagian telepon lainnya, jadi kedua ukuran itu Anda pilih sendiri: pilih ukuran yang bisa Anda tangkap tanpa mencondongkan badan ke layar. Seret pemisah di bawah pita, di [jendela pembisik](/interface/prompter#the-window), untuk membuatnya lebih tinggi.

### Asisten {#assistants}
<Shot name="41b_settings_prompter_scrolled" alt="Pengaturan → Pembisik: asisten dan batas bulanan" />

Asisten adalah peran yang diminta dari pembisik. *Masing-masing mendengarkan percakapan yang sedang berlangsung dan menulis sesuatu di jendela pembisik: kata-kata sebagaimana diucapkan, terjemahannya, atau saran tentang apa yang harus dikatakan selanjutnya.* Yang mana dijalankan, Anda pilih di jendela pembisik. Program ini menyertakan empat:

| Asisten | Yang ditulisnya | Bertanya kepada model |
| --- | --- | --- |
| **Subtitel** | Kata-kata kedua pihak, saat diucapkan. | tidak |
| **Terjemahan** | Kata-kata pihak lain, diterjemahkan ke bahasa program. | ya |
| **Penolakan dalam panggilan** | Bagi yang berjualan lewat telepon: saat pelanggan mengajukan keberatan, keberatan itu dalam satu baris dan satu baris yang menjawabnya. | ya |
| **Bantuan wawancara** | Bagi yang sedang diwawancarai: jawaban atas pertanyaan yang baru diajukan dalam beberapa baris pendek, atau apa yang perlu dibahas di jawaban berikutnya. | ya |

**▲** dan **▼** mengubah urutan, yang juga menjadi urutan daftar tarik-turun di [jendela pembisik](/interface/prompter#the-window). **Tambah** membuat asisten Anda sendiri. **Kembalikan bawaan** mengembalikan petunjuk dan aturan seperti saat datang bersama program, di sini maupun di [Pemrosesan](/ai-processing/processing#defaults); model bahasa Anda tidak diubah.

### Kartu asisten {#an-assistants-card}
Menekan sebuah asisten membuka kartunya. Kartu ini sama dengan kartu sebuah [petunjuk](/ai-processing/prompt-studio) di Pemrosesan, dengan beberapa kontrol tambahan.

<Shot name="42_prompter_assistant" alt="Kartu asisten Penolakan dalam panggilan: pengenal suara, kapan sebuah jawaban berakhir, peran, dan petunjuknya" />

| Kolom | Fungsinya |
| --- | --- |
| **Nama** | Nama yang tampil di daftar dan di jendela pembisik. |
| **Bentuk jawaban** dan **Kirim juga** | Seperti pada petunjuk apa pun: bentuk jawaban dan instruksi yang ikut dikirim. Asisten bawaan menjawab dalam bentuk **Prosa**. |
| **Pengenal suara** | Pengenal suara mana yang menyimak. Hanya yang bisa menyimak saat seseorang berbicara yang ditawarkan. |
| **Kapan sebuah jawaban berakhir** | Siapa yang memutuskan bahwa sebuah jawaban sudah selesai dan bisa ditanggapi: **Pengenal suara yang memutuskan**, **Setelah jeda**, atau **Hanya kalau saya minta** — maka jawaban berakhir saat Anda menekan **Saran**. Enam pengenal suara menyebutkan sendiri di mana jawaban berakhir dan empat tidak; **Pengenal suara yang memutuskan** beralih ke jeda bila tidak punya jawaban, karena itulah pengaturan ini yang sebaiknya dibiarkan. |
| **Kenali juga sisi saya** | Sesi kedua pada pengenal suara yang sama, dengan harga dua kali lipat, agar kata-kata Anda sendiri juga muncul di transkrip. Kata-kata itu masuk ke apa yang diceritakan kepada model, tetapi tidak pernah menjadi hal yang ditanyakan kepadanya. |
| **Peran — model itu apa** | Dikirim ke model sebelum petunjuk, misalnya *Anda membantu seseorang yang menjual melalui telepon…* |
| **Petunjuknya** | Apa yang ditanyakan kepada model untuk setiap jawaban. `{{reply}}` adalah jawaban yang baru saja berakhir dan `{{conversation}}` adalah semua yang dikatakan sebelumnya. *Biarkan kosong dan model tidak ditanyai apa pun: kata-kata ditampilkan begitu datang, dan yang dibayar hanya pengenal suaranya.* Itulah **Subtitel**. |
| **Jawab dalam** | Bahasa saran: **Apa pun yang dipakai berbicara**, **Bahasa program ini**, atau **Satu bahasa, selalu**, beserta kodenya. |
| **Model** | **Bawaan** atau salah satu [model bahasa](/ai-processing/processing#language-models) Anda. |

### Pengeluaran {#spending}
*Terpisah dari apa yang boleh dibelanjakan aturan untuk percakapan yang sudah selesai. Sebulan ringkasan tidak boleh sampai membungkam pembisik di tengah percakapan.*

| Kolom | Saat tercapai |
| --- | --- |
| **Pengenal suara, sebulan** | Pembisik yang berjalan berhenti di akhir jawaban yang sedang berlangsung — tidak pernah di tengah kata. |
| **Model, sebulan** | Saran berhenti dan subtitel tetap berjalan. |

Kosong berarti tanpa batas. Biaya satu menit audio langsung adalah **Harga per menit** pengenal suara, yang diisi pada kartunya di [Transkripsi](/ai-processing/transcription#the-recognisers-card); tanpa itu, pembisik menyebutkan bahwa angka yang ditampilkan hanyalah perkiraan.
