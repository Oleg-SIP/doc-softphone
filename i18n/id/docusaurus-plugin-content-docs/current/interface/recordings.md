---
title: Jendela rekaman
sidebar_position: 2
description: "\"Pustaka semua percakapan — panggilan, berkas yang diimpor, atau rapat yang ditangkap dari Zoom, Teams atau Meet: penyaring, pemutar, transkrip yang bisa diputar dari baris mana pun, dan hasil olahannya.\""
---

**Rekaman** adalah tempat setiap percakapan berada, bagaimanapun cara masuknya: panggilan yang dilakukan atau diterima di telepon, berkas audio yang Anda impor, atau rapat yang ditangkap dari Zoom, Teams, Meet, atau aplikasi lain apa pun. Semuanya berada dalam satu daftar, dan masing-masing dibuka dengan cara yang sama: pemutar, transkrip, dan semua yang ditulis model bahasa tentangnya. Tekan **Rekaman** di kiri bawah [jendela utama](main-window.md) untuk membukanya.

<Shot name="01_recordings" alt="Tab Rekaman: rapat Zoom yang ditangkap, berkas yang diimpor, dan panggilan dalam satu daftar" />

## Tiga jenis rekaman {#three-kinds-of-recording}

Ikon di kiri baris menunjukkan bagaimana percakapan itu masuk.

| Ikon | Percakapan | Namanya di daftar | Cara masuknya |
| --- | --- | --- | --- |
| Gagang telepon dengan panah | Panggilan yang dilakukan atau diterima di telepon ini. Panah mengarah ke dalam untuk panggilan masuk dan ke luar untuk panggilan keluar. | Nama kontak, atau nomornya | Direkam sesuai pengaturan di [Rekaman](../recordings.md) |
| Panah ke dalam sebuah batang | Berkas yang diimpor dari tempat lain: ponsel, perekam suara, atau sistem lain | Nama berkas | **⋮ → Impor dari berkas**; lihat [di bawah](#a-recording-you-already-have) |
| Jendela | Rapat yang berlangsung di aplikasi lain | Nama yang Anda berikan, atau **Aplikasi lain** | [Penangkapan](../capture/capture.md) |

Pada gambar, tiga baris teratas masing-masing satu dari setiap jenis: rapat Zoom, berkas impor berisi panggilan dukungan sebuah bank, dan panggilan yang diterima di saluran **305 Dukungan**. Apa pun sumbernya, semuanya ditranskripsikan, diolah, dan dicari dengan cara yang sama.

## Menemukan percakapan {#finding-a-conversation}

Bilah di bagian atas memiliki lima penyaring, kolom pencarian, dan sebuah menu:

| Kontrol | Mempersempit daftar berdasarkan |
| --- | --- |
| **Jenis** | cara percakapan masuk: panggilan masuk atau keluar, **Diimpor**, **Ditangkap** |
| **Periode** | tanggal: **Hari ini**, **Kemarin**, **7 hari terakhir**, atau **Pilih tanggal…** |
| **Kategori** | kategori tempat percakapan dimasukkan — lihat [Kamus](../ai-processing/dictionaries.md) |
| **Tanda** | label dan tanda peringatan yang disandangnya |
| **Pengenal suara** | [pengenal suara](../ai-processing/transcription.md) yang membuat transkripnya |
| **Cari** | apa yang diucapkan di dalamnya — pencarian menelusuri transkrip semua yang telah Anda rekam |

<Shot name="39_more_menu" alt="Menu ⋮ pada daftar: Impor dari berkas, Ekspor ke CSV, Buka di peramban" />

Tombol **⋮** di sebelah kanan bilah membuka tindakan lain untuk daftar:

| Butir | Fungsi |
| --- | --- |
| **Impor dari berkas** | Memasukkan rekaman yang sudah Anda miliki. Lihat [Rekaman yang sudah Anda miliki](#a-recording-you-already-have). |
| **Ekspor ke CSV** | Menyimpan daftar sebagai lembar kerja: waktu, pihak dan nomornya, arah, durasi, kategori, label, tanda peringatan, serta ringkasan satu baris dari setiap percakapan. |
| **Buka di peramban** | Membuka daftar di peramban Anda, sebagai halaman yang disajikan [REST API lokal](../integration/rest-api.md) di `/ui`. |

## Daftar {#the-list}

Setiap baris menampilkan:

- ikon jenis percakapan;
- nama — pihak lain, nomor, berkas, atau rapat — dan di bawahnya tanggal serta ringkasan satu baris;
- di sebelah kanan, kategori beserta skornya (sebuah angka, misalnya *Dukungan · 4*), lalu tanda peringatan dan label, dan di ujung durasinya.

Tanda peringatan digambar merah (pada gambar *Data sensitif*, *Janji diberikan*, *Pelanggan marah*); label ditampilkan biasa (*Dijanjikan menelepon balik*). Percakapan tanpa ringkasan dan kategori belum diolah — baris **Dewi Lestari** pada gambar.

<Shot name="40_row_actions" alt="Sebuah baris dengan penunjuk di atasnya: tombol pin, pensil, dan tempat sampah" />

Arahkan penunjuk ke sebuah baris untuk memunculkan tiga tombol di sebelah kanannya:

| Tombol | Fungsi |
| --- | --- |
| Pin | **Simpan yang ini**: rekaman yang disimpan tidak pernah dihapus oleh batas di [Penyimpanan](../recordings.md#retention). Tekan lagi untuk berhenti menyimpannya. |
| Pensil | **Ganti nama**: memberi percakapan nama sesuai keinginan Anda. Panggilan tetap menyimpan nama pihak lain di sampingnya; rapat atau berkas selain itu diberi nama sesuai aplikasi atau berkas asalnya. |
| Tempat sampah | **Hapus rekaman ini**, setelah bertanya. Audionya ikut terhapus, dan tidak dapat dibatalkan. |

## Pemutar {#the-player}

Pilih sebuah baris untuk membuka pemutar di bawah daftar.

- Dua bentuk gelombang adalah dua kanal rekaman: yang atas adalah Anda, yang bawah adalah pihak lain. Berkas impor biasanya berisi satu trek campuran, sehingga kedua garis menampilkan suara yang sama.
- **▶** memutar dan menjeda; waktu di sebelah kiri adalah posisi dan durasi total. Bilah di bawah bentuk gelombang menggulir rekaman yang panjang.
- **1×** mengubah kecepatan; **Keduanya** memilih suara mana yang Anda dengar: keduanya, hanya Anda (**Saya**), atau hanya pihak lain (**Mereka**).
- Tombol disk menyimpan salinan rekaman, **×** menutup percakapan.

Garis antara daftar dan pemutar dapat ditarik ke atas agar transkrip mendapat lebih banyak ruang, seperti pada gambar di bawah.

## Transkrip {#the-transcript}

Di bawah pemutar terdapat transkrip: satu baris untuk setiap giliran bicara, dengan waktu diucapkannya dan siapa yang mengucapkannya.

<Shot name="26_recording_call" alt="Panggilan di saluran 305 Dukungan: pemutar dan transkrip, dengan baris pada 0:13 disorot" />

| Jenis rekaman | Pembicara ditampilkan sebagai |
| --- | --- |
| Panggilan | **Anda** dan nama pihak lain, atau nomornya |
| Rapat yang ditangkap | **Anda** dan nama rekaman, untuk semua orang lainnya |
| Berkas yang diimpor | **Semua orang · speaker 1**, **Semua orang · speaker 2**… — pengenal suara membedakan suara-suaranya |

**Klik sebuah baris untuk menuju momen itu**: pemutar berpindah ke sana, baris disorot, dan kata yang sedang diucapkan ditandai di dalamnya — pada gambar baris pada **0:13**, dengan kata *Ya*. Tekan **▶** untuk mendengarkan dari titik itu. Selama diputar, sorotan mengikuti ucapan, sehingga Anda dapat membaca dan mendengarkan sekaligus, dan kembali ke kalimat mana pun.

Waktu di kiri setiap baris juga menjadi acuan hasil olahan: tanda peringatan, jawaban, atau kutipan memuat waktu dari kata-kata yang menjadi dasarnya.

## Transkrip atau hasil olahan: daftar tarik-turun {#transcript-or-write-up-the-drop-down}

Daftar tarik-turun di atas transkrip memilih apa yang ditampilkan di tempat itu: sebuah transkrip, atau salah satu hasil olahan yang dibuat model bahasa.

<Shot name="27_writeup_menu" alt="Daftar tarik-turun yang terbuka: transkrip OpenAI dan hasil olahan panggilan" />

- Baris dengan **mikrofon** adalah transkrip, satu untuk setiap [pengenal suara](../ai-processing/transcription.md) yang mentranskripsikan rekaman. Bintang menandai yang utama. Arahkan penunjuk ke salah satunya untuk melihat pengenal suara, model, dan bahasanya.
- Baris dengan **kilauan** adalah hasil olahan, dibuat oleh [petunjuk](/ai-processing/prompt-studio) di [Pemrosesan](../ai-processing/processing.md).

Sebuah rekaman dapat memiliki transkrip dari beberapa pengenal suara, untuk dibandingkan: rapat Zoom di bawah ditranskripsikan oleh X.ai dan Deepgram.

<Shot name="36_zoom_menu" alt="Rapat yang ditangkap dengan dua transkrip, Deepgram dan X.ai, serta hasil olahannya" />

Hasil olahan dicantumkan dengan nama singkat:

| Di daftar tarik-turun | Dibuat oleh petunjuk | Yang ditampilkan |
| --- | --- | --- |
| **Ringkasan** | Ringkasan | Poin utama, keputusan, dan langkah berikutnya dalam satu paragraf pendek. |
| **Singkatnya** | Ringkasan satu baris | Satu kalimat; baris yang sama ditampilkan di bawah nama pada daftar. |
| **Tindakan** | Daftar tindakan | Siapa yang setuju mengerjakan apa, dan kapan. |
| **Topik** | Topik | Pokok bahasan yang muncul. |
| **Disebut** | Nama dan angka | Orang, perusahaan, tanggal, jumlah uang, dan rujukan. |
| pertanyaannya sendiri | Pertanyaan tentang panggilan ini | Jawaban atas pertanyaan yang Anda ajukan, beserta kata-kata yang menjadi dasarnya. |
| **Kualitas** | Kualitas penjualan, Kualitas dukungan | Skor keseluruhan dan penilaian untuk setiap kriteria. |
| **Tanda peringatan** | Tanda peringatan | Apa yang perlu diperhatikan, beserta bukti dan waktunya. |
| **Label**, **Kategori** | Label, Kategori | Tanda tempat percakapan dimasukkan. |

## Hasil olahan satu per satu {#the-write-ups-one-by-one}

Gambar-gambar di bawah semuanya dari panggilan yang sama, di saluran **305 Dukungan**, ketika seorang pelanggan bertanya kapan polisnya diperpanjang.

**Ringkasan** — percakapan dalam beberapa kalimat.

<Shot name="28_summary" alt="Ringkasan panggilan" />

**Singkatnya** — satu baris, cukup pendek untuk mengenali percakapan di daftar.

<Shot name="29_nutshell" alt="Singkatnya: ringkasan satu baris dari panggilan" />

**Tindakan** — setiap tugas beserta siapa yang mengerjakannya dan kapan, di sebelah kanan.

<Shot name="30_actions" alt="Tindakan: dua tugas untuk Anda, salah satunya jatuh tempo besok pagi" />

**Pertanyaan** — tanyakan apa saja kepada percakapan: pertanyaan itu menjadi nama butirnya, dan di bawah jawabannya terdapat kata-kata yang menjadi dasarnya, beserta waktunya dalam rekaman.

<Shot name="31_question" alt="Jawaban atas pertanyaan tentang panggilan, dengan dua kutipan pada 0:17 dan 0:32" />

**Kualitas** — skor dari 1 sampai 5 beserta alasannya, dan setiap kriteria ditandai **terpenuhi**, **lemah**, atau **tidak terpenuhi** dengan catatan.

<Shot name="32_quality" alt="Kualitas: skor 4, dua kriteria terpenuhi dan dua lemah" />

**Tanda peringatan** — setiap tanda beserta kata-kata yang memicunya, tingkatnya, dan waktunya.

<Shot name="33_red_flags" alt="Tanda peringatan: Janji diberikan, rendah, pada 0:32" />

**Topik** — pokok bahasan sebuah rapat, di sini rapat Zoom.

<Shot name="38_topics" alt="Topik rapat Zoom" />

## Tombol di samping daftar tarik-turun {#the-buttons-beside-the-drop-down}

| Tombol | Fungsi |
| --- | --- |
| Kilauan | **Transkripsikan atau tanya model…**: membuka menu, lihat di bawah. |
| Dua lembar | Menyalin apa yang ditampilkan. |
| Disk | Menyimpannya ke berkas. Transkrip dapat disimpan sebagai teks biasa atau sebagai subtitel. |
| Tempat sampah | Menghapus apa yang ditampilkan. |

<Shot name="34_run_menu" alt="Menu kilauan: Transkripsi dengan empat pengenal suara, Pemrosesan dengan petunjuk-petunjuknya" />

Menu kilauan mengerjakan sesuatu sesuai permintaan. Di bawah **Transkripsi**, pilih pengenal suara untuk mentranskripsikan ulang rekaman dengannya; di bawah **Pemrosesan**, pilih petunjuk untuk menjalankannya sekarang — **Pertanyaan tentang panggilan ini** menanyakan pertanyaannya terlebih dahulu. Hasilnya muncul di daftar tarik-turun. Begitulah sebuah percakapan diolah ketika **Proses percakapan otomatis** mati di [Pemrosesan](../ai-processing/processing.md), dan begitu pula Anda menambahkan satu hasil olahan lagi pada percakapan yang sudah memilikinya.

## Tiga contoh {#three-examples}

### Panggilan yang dilakukan di telepon {#a-call-made-in-the-phone}

Panggilan di atas: pembicaranya adalah **Anda** dan **Rina Kusuma**, nama kontaknya, pada dua kanal terpisah.

### Berkas yang Anda impor {#a-file-you-imported}

<Shot name="35_recording_import" alt="Berkas impor berisi panggilan dukungan sebuah bank: satu trek campuran dan pembicara 1 dan 2" />

`riverside_bank_support_call` adalah mp3 yang dimasukkan dengan **⋮ → Impor dari berkas**. Namanya adalah nama berkas, ikonnya panah ke dalam sebuah batang, dan kedua pembicaranya dibedakan oleh pengenal suara. Hasil olahan menemukan nomor kartu yang diucapkan dan memunculkan **Data sensitif**.

### Rapat yang ditangkap dari aplikasi lain {#a-meeting-captured-from-another-application}

<Shot name="37_recording_zoom" alt="Rapat Zoom yang ditangkap dari komputer: transkrip X.ai dengan Anda dan nama rapat sebagai pembicara" />

**Perencanaan peluncuran Kuartal 4 (Zoom)** ditangkap saat rapat berlangsung di Zoom dan diberi nama dengan pensil. Semua orang di seberang rapat ditampilkan dengan nama rekaman; Anda adalah **Anda**. Lihat [Penangkapan](../capture/capture.md).

## Rekaman yang sudah Anda miliki {#a-recording-you-already-have}

Rekaman yang dibuat di tempat lain — di ponsel, perekam suara, atau sistem lain — dapat ditambahkan dengan **⋮ → Impor dari berkas**. Pilih satu atau beberapa berkas mp3 atau wav; telepon menyebutkan berapa yang berhasil diimpor, dan menyebutkan yang tidak dapat dibaca sebagai rekaman. Masing-masing dimasukkan persis seperti panggilan biasa: ditranskripsikan, diolah oleh [aturan](../ai-processing/processing.md#rules) yang sama, dan ditemukan dengan pencarian yang sama.

## Menghapus rekaman {#deleting-a-recording}

Ketika sebuah rekaman dihapus, semua yang dibuat darinya ikut terhapus: transkrip dan hasil olahannya. Berapa lama rekaman disimpan dengan sendirinya diatur di [Rekaman](../recordings.md#retention).
