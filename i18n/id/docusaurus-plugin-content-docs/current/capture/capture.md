---
title: Penangkapan
sidebar_label: Perekaman dari aplikasi lain
sidebar_position: 1
description: "\"Penangkapan merekam percakapan yang berlangsung di aplikasi lain — Zoom, Teams, Meet, atau apa pun — langsung dari komputer.\""
---

**Penangkapan** adalah cara AI Softphone merekam percakapan yang berlangsung di program lain, seperti rapat di Zoom, Teams, atau Meet. Perekaman dilakukan dari komputer itu sendiri, dengan pihak seberang dan Anda di kanal yang terpisah, dan di akhir rekaman menunggu transkrip dan hasil olahan yang sama seperti untuk panggilan.

Program mencari percakapan, bukan nama aplikasi, sehingga berfungsi dengan apa pun yang menghasilkan percakapan.

[Ikhtisar](../interface/settings-overview.md) pengaturan mencantumkan hal ini di bawah **Perekaman dari aplikasi lain** dan membaginya menjadi tiga langkah:

1. **Aktifkan perekaman dari aplikasi** — [izinkan penangkapan suara](#turning-capture-on).
2. **Rekam sebuah percakapan** — [mulai dan hentikan](#capturing-a-conversation) perekaman.
3. **Beri nama** — [ganti nama](#giving-it-a-name) rekaman.

## Mengaktifkan penangkapan {#turning-capture-on}

Penangkapan mati sampai Anda mengizinkannya. Buka **Pengaturan → Penangkapan**.

<Shot name="10_settings_capture" alt="Pengaturan → Penangkapan" />

| Pengaturan | Bawaan | Fungsinya |
| --- | --- | --- |
| **Izinkan penangkapan suara** | mati | Mengizinkan program merekam suara dari aplikasi lain. Tidak ada yang ditangkap selama pengaturan ini mati. |
| **Ingatkan saya memberi tahu yang lain tentang perekaman** | menyala | Menampilkan pengingat selama penangkapan berlangsung. Kotak centangnya abu-abu sampai penangkapan diizinkan. |

:::caution
Semua yang diputar komputer ikut direkam, bukan hanya percakapannya. Telepon ini tidak dapat mengumumkan perekaman ke dalam rapat orang lain, jadi memberitahukannya adalah tugas Anda.
:::

Bagian program yang melakukan ini adalah modul **Penangkapan**, *Merekam percakapan yang berlangsung di aplikasi lain*. Modul ini dapat dimatikan di [Modul](../application/modules.md).

## Memulai penangkapan {#starting-a-capture}

Setelah penangkapan diizinkan, bagian bawah [jendela utama](../interface/main-window.md#capture) menampilkan statusnya — **Penangkapan · siap** — dengan tombol **Rekam** di sebelah kanan. Tekan **Rekam** untuk memulai secara manual.

### Mulai otomatis {#automatic-start}

**Mulai otomatis** menentukan apa yang terjadi ketika program mendengar percakapan di aplikasi lain:

| Pilihan | Yang terjadi |
| --- | --- |
| **Tidak pernah** | Penangkapan hanya dimulai ketika Anda menekan **Rekam**. |
| **Tanya saya** | Program bertanya apakah percakapan itu akan direkam. Bawaan. |
| **Selalu** | Program mulai merekam dengan sendirinya. |

Di bawah **Aplikasi dengan jawaban sendiri**, sebuah aplikasi dapat diberi jawabannya sendiri — misalnya *Selalu rekam aplikasi ini* dari pertanyaan yang diajukan program.

*Bertanya tidak memakan biaya: detik-detik sebelum Anda menjawab sudah disimpan.*

### Sebelum mulai {#before-the-start}

Penggeser **Sebelum mulai** menentukan berapa detik suara yang disimpan dari sebelum perekaman dimulai, secara bawaan **15 detik**. Gunanya agar tidak ada yang hilang selama percakapan sedang dikenali: rekaman yang dimulai saat Anda menekan **Rekam**, atau saat Anda menjawab pertanyaan, tetap diawali dengan kata-kata yang diucapkan sebelumnya.

## Merekam percakapan {#capturing-a-conversation}

Selama merekam, jendela utama menampilkan titik merah, nama rekaman (misalnya **Rapat di Zoom**), waktu yang telah berlalu, dan kedua kanal sebagai bentuk gelombang.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Merekam rapat" />

- **Hentikan perekaman** mengakhirinya.
- Jendela tetap terlihat selama merekam, dan mengingatkan Anda untuk memberi tahu para peserta bahwa rapat sedang direkam.

### Apa yang ditampilkan gambar {#what-the-picture-shows}

Dua pengaturan lagi menentukan cara level suara digambar:

| Pengaturan | Bawaan | Di mana |
| --- | --- | --- |
| **Gambar di jendela utama** | Gelombang | Kedua kanal selama penangkapan berlangsung. |
| **Gambar di baris di kaki telepon** | Dua tingkat | Dua bilah tipis di bawah **Penangkapan · siap**. |

### Mengujinya {#testing-it}

Di bawah **Uji**, tab ini memiliki dua bilah: **Anda** dan **Pihak lain**. *Bilah atas bergerak saat Anda bicara, bilah bawah saat ada yang dimainkan.* Sebelum rapat penting, ucapkan sepatah kata dan putar suara apa saja untuk memastikan program mendengar kedua pihak.

## Memberi nama {#giving-it-a-name}

Pensil di samping nama rekaman memungkinkan Anda mengganti namanya selagi rekaman berlangsung. Rekaman yang tidak Anda beri nama dicantumkan sebagai **Aplikasi lain**.

## Ke mana rekaman disimpan {#where-the-recording-goes}

Percakapan yang ditangkap muncul di [jendela Rekaman](../interface/recordings.md) seperti percakapan lainnya, dengan ikonnya sendiri, jendela sebagai ganti gagang telepon, dan dengan judul yang Anda berikan atau **Aplikasi lain**.

<Shot name="01_recordings" alt="Rapat yang ditangkap di tab Rekaman, ditandai dengan ikon jendela" />

Percakapan itu ditranskripsikan, diringkas, dimasukkan ke dalam kategori, dan diberi label oleh [aturan](../ai-processing/processing.md#rules) yang sama seperti panggilan. Dalam transkrip rapat yang ditangkap, pembicara ditampilkan sebagai **Aplikasi lain** di tempat panggilan akan menampilkan nama pihak lain; **Cari** di pustaka juga menemukan apa yang diucapkan di dalamnya.
