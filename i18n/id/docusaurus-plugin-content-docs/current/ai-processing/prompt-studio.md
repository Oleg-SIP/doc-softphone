---
title: Personal Prompt Studio
sidebar_position: 3
description: Petunjuk yang mengolah percakapan Anda, aturan yang menjalankannya, dan cara menyesuaikannya dengan kebutuhan Anda.
---

**Personal Prompt Studio** adalah bagian AI Softphone yang mengolah percakapan Anda dengan cara Anda. Hasil olahan dibuat oleh petunjuk: program dilengkapi sebelas petunjuk, siap digunakan begitu transkripsi dan model bahasa terhubung, dan Anda dapat mengubahnya dengan bahasa sehari-hari, menggandakannya, dan menambahkan petunjuk Anda sendiri. Petunjuk-petunjuk itu dicantumkan di bawah **Petunjuk** di [Pengaturan → Pemrosesan](processing.md#prompts).

LLM Anda, kunci Anda, kendali Anda: hubungkan model pilihan Anda dengan kunci Anda sendiri, melalui layanan yang didukung atau API yang kompatibel — atau model yang dijalankan di dalam organisasi Anda. Dengan [transkripsi](transcription.md#your-own-models) di perangkat keras Anda sendiri juga, baik audio maupun transkrip tetap berada di dalam lingkungan Anda.

<Shot name="12b_settings_processing_prompts" alt="Daftar petunjuk di Pengaturan → Pemrosesan" />

## Petunjuk yang datang bersama program {#the-prompts-that-come-with-the-program}

AI Softphone 1.1.11 menyertakan sebelas prompt untuk percakapan selesai dan empat asisten langsung. Berikut teks bawaan dalam bahasa ini; versi bahasa dapat berbeda.

| Petunjuk | `code` | Bentuk | Yang ditulisnya |
| --- | --- | --- | --- |
| **Ringkasan** | `summary` | Prosa | Pokok-pokok utama, keputusan, dan langkah selanjutnya dalam satu paragraf pendek. |
| **Ringkasan satu baris** | `super-summary` | Prosa | Judul singkat untuk mengenali percakapan dalam daftar. |
| **Daftar tindakan** | `action-items` | Butir | Siapa setuju melakukan apa, dan kapan, beserta kata-kata yang mereka ucapkan. |
| **Topik** | `topics` | Butir | Pokok bahasan yang dibicarakan, dalam beberapa kata. |
| **Nama dan angka** | `entities` | JSON | Orang, perusahaan, tanggal, jumlah, dan nomor referensi. |
| **Kategori** | `categorise` | Label | Memasukkan percakapan ke salah satu [kategori](dictionaries.md) Anda. |
| **Label** | `tags` | Label | Memasang [label](dictionaries.md) Anda padanya, agar dapat ditemukan nanti. |
| **Tanda peringatan** | `red-flags` | Tanda | Masalah, beserta bukti dan waktunya dalam percakapan. |
| **Pertanyaan tentang panggilan ini** | `qa` | Jawaban | Menjawab pertanyaan yang Anda ajukan tentang satu percakapan, berdasarkan transkripnya. |
| **Kualitas penjualan** | `sales-quality` | Kriteria | Meninjau percakapan berdasarkan kriteria penjualan yang dapat Anda sunting. |
| **Kualitas dukungan** | `support-quality` | Kriteria | Menilai seberapa baik masalah dipahami dan ditangani. |

Bentuk adalah format jawaban yang tetap, dan itulah yang memungkinkan program menyimpan dan mencarinya nanti: **Label** adalah kode dari salah satu daftar Anda, **Tanda** adalah kode dengan tingkat keparahan, **Kriteria** adalah skor beserta alasannya dan skor untuk setiap kriteria, **Jawaban** adalah balasan beserta kata-kata yang menjadi dasarnya. Instruksi yang memberi tahu model format tersebut disimpan di [Kamus](dictionaries.md#instructions).

Asisten [pembisik](../interface/prompter.md) juga petunjuk, yang dijalankan pada setiap balasan selama panggilan berlangsung, bukan pada percakapan yang sudah selesai. Mereka disimpan dalam daftar tersendiri, di [Asisten](prompter.md#assistants) pada **Pengaturan → Pembisik**.

Panggilan yang dilakukan di AI Softphone, rapat yang [ditangkap](/capture/) dari komputer, dan rekaman yang diimpor semuanya melewati petunjuk yang sama begitu memiliki transkrip.

Daftar tindakan mencatat apa yang telah disepakati — daftar ini tidak mengirim pesan, memesan kunjungan, atau membuat tiket untuk Anda.

## Menyesuaikannya {#making-it-yours}

- Ubah apa yang diminta sebuah petunjuk, dengan bahasa sehari-hari: apa yang dicarinya, format jawaban, dan bahasa jawabannya.
- Gandakan petunjuk untuk mencoba variannya.
- Pilih model untuk setiap petunjuk — di komputer Anda sendiri atau di cloud.
- Atur urutan petunjuk dijalankan, nyalakan dan matikan, dan buat bersyarat — hal itu dilakukan dengan [aturan](processing.md#rules): misalnya, tinjauan penjualan hanya dijalankan pada panggilan yang dimasukkan sebagai **Penjualan**.
- Kelola kategori, label, dan tanda peringatan Anda sendiri di [Kamus](dictionaries.md).
- Batasi biaya dengan [batas bulanan](processing.md#spending).

Petunjuk dan aturan asli dapat dipulihkan dengan **Kembalikan bawaan** di bawah **Bawaan** di [Pengaturan → Pemrosesan](processing.md#defaults).

## Peran model {#role-and-task}

`system` mengatur perilaku model; `body` menjelaskan tugas. Bentuk dan bahasa jawaban diberikan terpisah melalui instruksi daftar.

Daftar tugas atau peringatan yang kosong dapat merupakan hasil yang benar. Penanggung jawab dan tanggal yang tidak disebutkan tidak boleh dikarang. Jawaban pertanyaan harus berdasarkan transkrip saja.

[Format jawaban](dictionaries.md#response-formats)

## Placeholder {#placeholders}

Elemen dalam prompt yang diganti dengan data percakapan.

| Placeholder | Arti |
| --- | --- |
| `{{transcript}}` | Transkrip, satu ujaran per baris, dengan waktu dalam milidetik |
| `{{duration}}` | Durasi percakapan |
| `{{direction}}` | Panggilan masuk atau keluar |
| `{{party}}` | Nama kontak atau nomor |
| `{{language}}` | Bahasa jawaban |
| `{{question}}` | Pertanyaan pengguna |
| `{{categories}}` | Daftar kategori |
| `{{tags}}` | Daftar tag |
| `{{red_flags}}` | Daftar tanda peringatan |
| `{{artifact:summary}}` | Ringkasan yang sudah dihasilkan |
| `{{conversation}}` | Konteks yang dikumpulkan asisten langsung |
| `{{reply}}` | Ucapan terakhir lawan bicara; hanya untuk asisten langsung |

Jalankan `summary` sebelum `super-summary`, yang menggunakan `{{artifact:summary}}`. Jalankan `categorise` sebelum penilaian kualitas: `sales-quality` memerlukan kategori `sales`, sedangkan `support-quality` memerlukan `support`.

[Asisten bawaan](prompter.md#assistant-templates)

## Teks prompt bawaan {#standard-templates}

AI Softphone 1.1.11 menyertakan sebelas prompt untuk percakapan selesai dan empat asisten langsung. Berikut teks bawaan dalam bahasa ini; versi bahasa dapat berbeda.

### Ringkasan (`summary`) {#summary}

**Bentuk jawaban:** `plain`.

**Peran (`system`)**

```text
Anda membaca transkrip panggilan telepon dan menulis ringkasan yang pendek dan berdasar fakta. Anda tidak pernah menebak yang tidak diucapkan, dan tidak pernah menambahkan nasihat.
```

**Tugas (`body`)**

```text
Ringkas panggilan telepon ini dalam satu paragraf pendek: tentang apa, apa yang diputuskan, dan apa berikutnya. Berlangsung {{duration}} dan merupakan panggilan {{direction}}, dengan {{party}}.

{{transcript}}
```

### Ringkasan satu baris (`super-summary`) {#super-summary}

**Bentuk jawaban:** `plain`.

**Peran (`system`)**

```text
Anda membaca transkrip panggilan telepon dan memadatkan tiap panggilan jadi satu frasa. Anda tidak pernah menebak dan tidak pernah menambahkan nasihat.
```

**Tugas (`body`)**

```text
Padatkan panggilan telepon ini jadi satu frasa paling banyak dua belas kata — jenis baris yang akan masuk ke tabel di samping nama penelepon. Tanpa titik, tanpa tanda kutip.

{{artifact:summary}}

{{transcript}}
```

### Daftar tindakan (`action-items`) {#action-items}

**Bentuk jawaban:** `list`.

**Peran (`system`)**

```text
Anda membaca transkrip panggilan telepon dan mendaftar apa yang disanggupi seseorang. Anda hanya mendaftar yang benar-benar diucapkan; Anda tidak pernah mengarang tugas, penanggung jawab, atau tanggal.
```

**Tugas (`body`)**

```text
Daftarkan apa yang disanggupi siapa pun dalam panggilan ini. Sebutkan siapa yang harus mengerjakannya bila itu diucapkan, dan sampai kapan bila itu diucapkan. Bila tidak ada yang menyanggupi apa pun, jawablah dengan daftar kosong.

{{transcript}}
```

### Topik (`topics`) {#topics}

**Bentuk jawaban:** `list`.

**Peran (`system`)**

```text
Anda membaca transkrip panggilan telepon dan menyebutkan tentang apa panggilan itu.
```

**Tugas (`body`)**

```text
Daftarkan hal-hal yang benar-benar dibahas panggilan ini, paling banyak enam, masing-masing dalam beberapa kata. Biarkan penanggung jawab dan tanggal kosong — di sini keduanya tidak berarti apa-apa.

{{transcript}}
```

### Nama dan angka (`entities`) {#entities}

**Bentuk jawaban:** `json`.

**Peran (`system`)**

```text
Anda membaca transkrip panggilan telepon dan memungut apa yang disebut di dalamnya. Anda tidak pernah menebak ejaan dan tidak pernah menambahkan yang tidak diucapkan.
```

**Tugas (`body`)**

```text
Pungut apa yang disebut dalam panggilan ini, sebagai JSON persis berbentuk ini:
{"people": [], "companies": [], "places": [], "dates": [], "amounts": [], "references": []}
Masing-masing adalah daftar teks, ditulis sebagaimana diucapkan. Lebih baik biarkan daftarnya kosong daripada menebak.

{{transcript}}
```

### Kategori (`categorise`) {#categorise}

**Bentuk jawaban:** `labels`.

**Peran (`system`)**

```text
Anda menempatkan panggilan telepon ke salah satu kategori yang diberikan. Anda memilih dari daftar itu dan bukan dari yang lain.
```

**Tugas (`body`)**

```text
Tempatkan panggilan ini ke persis satu dari kategori-kategori ini. Jawablah dengan kodenya.

{{categories}}
{{transcript}}
```

### Label (`tags`) {#tags}

**Bentuk jawaban:** `labels`.

**Peran (`system`)**

```text
Anda melabeli panggilan telepon dengan label yang diberikan. Anda memilih dari daftar itu dan bukan dari yang lain, dan lebih baik melewatkan sebuah label daripada memaksakannya.
```

**Tugas (`body`)**

```text
Mana di antara ini yang benar tentang panggilan ini? Jawablah dengan kodenya, atau dengan daftar kosong bila tidak ada.

{{tags}}
{{transcript}}
```

### Tanda peringatan (`red-flags`) {#red-flags}

**Bentuk jawaban:** `flags`.

**Peran (`system`)**

```text
Anda membaca transkrip panggilan telepon dan hanya mengangkat apa yang diminta untuk dicari. Anda mengutip kata-kata yang jadi dasar masing-masing, dan tidak mengangkat apa pun yang tidak dapat Anda kutip.
```

**Tugas (`body`)**

```text
Angkat mana saja dari ini yang ditunjukkan panggilan ini. Untuk masing-masing, kutip kata-kata yang jadi dasarnya dan sebutkan saatnya dalam milidetik. Lebih baik tidak mengangkat apa pun daripada memaksakan sebuah definisi.

{{red_flags}}
{{transcript}}
```

### Pertanyaan tentang panggilan ini (`qa`) {#qa}

**Bentuk jawaban:** `qa`.

**Peran (`system`)**

```text
Anda menjawab pertanyaan tentang satu panggilan telepon, dari transkripnya dan bukan dari yang lain. Bila percakapannya tidak menyebutkan, Anda mengatakannya terus terang alih-alih menebak.
```

**Tugas (`body`)**

```text
{{question}}

{{transcript}}
```

### Kualitas penjualan (`sales-quality`) {#sales-quality}

**Bentuk jawaban:** `rubric`.

**Peran (`system`)**

```text
Anda menilai bagaimana seorang penjual menangani panggilan telepon. Anda menilai hanya dari yang ditunjukkan transkrip, tidak pernah mengandaikan apa yang terjadi sebelum atau sesudahnya, dan sama ketatnya pada panggilan yang berjalan baik maupun yang tidak.
```

**Tugas (`body`)**

```text
Nilailah pihak kami dalam panggilan ini — operatornya — menurut kriteria ini dan tidak ada yang lain:
- salam: apakah ia memperkenalkan diri dan perusahaannya?
- penggalian: apakah ia mengetahui apa yang sebenarnya diinginkan pelanggan?
- keberatan: apakah ia menjawab yang diangkat pelanggan, alih-alih bicara melenceng?
- nilai: apakah ia menyebutkan apa yang didapat pelanggan, bukan hanya harganya?
- langkah berikut: apakah panggilan berakhir dengan sesuatu yang tertentu dan disepakati?

{{transcript}}
```

### Kualitas dukungan (`support-quality`) {#support-quality}

**Bentuk jawaban:** `rubric`.

**Peran (`system`)**

```text
Anda menilai bagaimana seorang petugas dukungan menangani panggilan telepon. Anda menilai hanya dari yang ditunjukkan transkrip, dan lebih menimbang apakah masalah pelanggan benar-benar tertangani daripada seberapa menyenangkan percakapannya.
```

**Tugas (`body`)**

```text
Nilailah pihak kami dalam panggilan ini — operatornya — menurut kriteria ini dan tidak ada yang lain:
- salam: apakah ia memperkenalkan diri dan memastikan sedang bicara dengan siapa?
- pemahaman: apakah ia memastikan apa yang sebenarnya salah sebelum menjawab?
- penyelesaian: apakah masalahnya selesai, atau diberikan langkah berikut yang tertentu?
- nada: apakah ia tetap tenang dan sopan, terutama saat pelanggan tidak begitu?
- penutup: apakah ia memastikan pelanggan puas sebelum mengakhiri?

{{transcript}}
```
