---
title: Jendela pembisik
sidebar_position: 3
description: "Jendela pembisik langsung: kata-kata dalam panggilan saat diucapkan dan saran tentang apa yang perlu dikatakan selanjutnya, tombol dan kolomnya, latihan dengan rekaman, dan biayanya."
---

**Pembisik** mendengarkan percakapan selagi berlangsung. Di jendelanya sendiri, ia menuliskan apa yang dikatakan setiap pihak saat diucapkan, dan — bila asisten yang Anda pilih bertanya kepada model — saran tentang apa yang perlu Anda katakan selanjutnya. Ada baiknya dibuka saat panggilan penjualan, wawancara kerja, atau percakapan yang sulit, dan dengan asisten lain jendela yang sama menampilkan terjemahan berjalan dari pihak lain, atau hanya subtitel.

<Shot name="46_prompter_running" alt="Pembisik sedang melatih panggilan penjualan: transkrip di kiri, saran di kanan, saran terbaru diulang besar di atasnya" />

Pada gambar, asisten **Penolakan dalam panggilan** sedang mendengarkan panggilan penjualan. Kolom kiri adalah apa yang dikatakan, setiap baris dengan waktu dan pihaknya; kolom kanan adalah apa yang disarankan model untuk setiap jawaban pelanggan; saran terbaru diulang dengan huruf besar di atas keduanya.

**Pembisik** muncul di daftar bagian bawah telepon, di antara **Riwayat** dan **Pengaturan**, begitu tiga hal terpenuhi: pembisik diizinkan, ada pengenal suara yang bisa menyimak selagi percakapan berlangsung, dan — untuk asisten yang memberi saran — sebuah model bahasa. Semua itu diatur di [Pengaturan → Pembisik](/ai-processing/prompter), tempat ukuran teks dan asisten itu sendiri juga berada.

## Jendela {#the-window}
<Shot name="44_prompter_window" alt="Jendela pembisik dengan asisten Penolakan dalam panggilan dipilih, sebelum dimulai" />

Di bagian atas ada daftar tarik-turun **Asisten** dan, di sebelah kanannya, tombol-tombol:

| Tombol | Fungsinya |
| --- | --- |
| **Mulai** / **Berhenti** (segitiga / persegi) | *Mulai mendengarkan panggilan ini* — atau berhenti: *Yang diucapkan tetap di layar*. Mulai yang ditekan sebelum panggilan diangkat akan menunggunya, dan tombol itu lalu membatalkannya. |
| **Saran** (kilauan) | *Akhiri jawaban di sini dan sarankan apa yang harus dikatakan*, tanpa menunggu jeda. Untuk asisten yang tidak bertanya kepada model apa pun, tombolnya adalah **Akhiri jawaban**: hanya menutup jawaban, supaya jawaban berikutnya dimulai bersih. Tombol ini redup selama pembisik tidak berjalan. |
| **Bersihkan** (tempat sampah) | Setelah bertanya, melupakan apa yang ada di layar. *Kedua kolom hilang, dan bersamanya percakapan yang menjadi dasar saran berikutnya.* Menghentikan lalu memulai lagi tidak membersihkan apa pun: percakapan yang dihentikan lalu dimulai lagi biasanya tetap percakapan yang sama. |
| **Ekspor…** (disket) | Menulis kedua kolom beserta waktunya ke sebuah berkas: teks (`.txt`) atau lembar kerja (`.csv`), dengan nama yang Anda berikan. |
| **Latihan…** (pustaka) | [Mencoba asisten pada rekaman](#rehearsing-on-a-recording), bukan pada panggilan. |

Daftar tarik-turun menampilkan [asisten](/ai-processing/prompter#assistants) sesuai urutan di **Pengaturan → Pembisik**. Daftar ini tidak bisa diganti selama pembisik berjalan, tetapi tetap terlihat, sehingga Anda tahu asisten mana yang sedang bekerja. Selama menyimak, kartu panggilan menampilkan **Kami menyimak**.

Di bawah tombol ada pita berisi baris terbaru, dan di bawahnya dua kolom:

- **Transkrip** — setiap baris dengan waktu dan pihaknya;
- **Saran** — setiap saran dengan waktu jawaban yang ditanggapinya. Untuk asisten yang tidak bertanya kepada model apa pun, kolom ini tidak ada, dan transkrip memakai seluruh lebar.

Jika jendelanya sempit, kedua kolom bertumpuk. Sebuah kolom mengikuti apa yang masuk sampai Anda menggulir mundur di dalamnya, dan mengikuti lagi saat Anda kembali ke bawah. Tekan baris mana pun untuk menahannya di pita; tekan baris terbaru, atau pin di pita, untuk mengikuti lagi. Tombol kanan menyalin satu baris, satu saran, seluruh transkrip, atau semua saran. Seret pemisah di bawah pita untuk membuatnya lebih tinggi; ukuran teks diatur di [Pengaturan → Pembisik](/ai-processing/prompter#settings--prompter).

## Latihan dengan rekaman {#rehearsing-on-a-recording}
Asisten bisa dicoba tanpa ada orang di telepon. **Latihan…** menampilkan percakapan di [pustaka](/interface/recordings), yang terbaru lebih dulu, serta **Berkas di komputer ini…** untuk berkas `.mp3` atau `.wav`.

<Shot name="45_prompter_rehearse" alt="Latihan…: percakapan di pustaka dan berkas di komputer ini" />

Rekaman yang Anda pilih muncul di pemutar di bawah tombol: putar dan jeda, kedua kanal digambar sebagai bentuk gelombang yang bisa diklik, dan waktunya. Tekan **Mulai**: rekaman diputar ke pembisik melalui jalur yang sama dengan panggilan, dengan kecepatannya sendiri — pemutaran lebih cepat sengaja tidak disediakan, karena pembisik yang diberi masukan satu setengah kali lebih cepat akan berjeda, menjawab, dan menagih untuk percakapan yang tidak pernah terjadi. Tanda silang di kanan adalah **Akhiri latihan**, kembali mendengarkan panggilan.

Rekaman satu kanal, seperti berkas yang diimpor, didengar sebagai satu ruangan: *pembisik mendengar semuanya sebagai lawan bicara*.

## Biayanya, dan ke mana kata-kata pergi {#what-it-costs-and-where-the-words-go}
- Pengenal suara ditagih per menit audio langsung, dan **Kenali juga sisi saya** menggandakannya. Model ditagih untuk setiap saran. Keduanya dihitung terhadap [batas bulanan](/ai-processing/prompter#spending) pembisik, bukan batas Pemrosesan.
- Suara pihak lain meninggalkan komputer selagi ia berbicara, menuju pengenal suara yang Anda pilih. Pengenal suara di mesin Anda sendiri — **Vosk**, **WhisperLive**, atau **NVIDIA Riva** — menyimpannya di dalam rumah.
- Apa yang ditampilkan pembisik bukan rekaman. Untuk menyimpannya, tekan **Ekspor…**; untuk memiliki percakapannya sendiri, [rekam panggilan](/recordings) juga.

## Jika tidak mau mulai {#when-it-does-not-start}
Jendela menyebutkan apa yang kurang pada satu baris di bawah tombol.

| Kata jendela | Yang harus dilakukan |
| --- | --- |
| *Pembisikan sedang mati. Pengaturan → Pembisik.* | Centang **Izinkan pembisik digunakan**. |
| *Tidak ada pengenal suara di sini yang bisa menyimak saat seseorang berbicara. Pengaturan → Transkripsi.* | Tambahkan pengenal suara dengan **Alamat untuk pembisik** lalu tekan **Uji**. |
| *Tidak ada yang bisa dijalankan. Pengaturan → Pembisik, lalu tambahkan asisten.* | Semua asisten telah dihapus atau dimatikan: tambahkan satu, atau tekan **Kembalikan bawaan**. |
| *Pihak lain harus diberi tahu lebih dulu. Mulailah merekam percakapan ini, atau ubah apa yang dikatakan Pengaturan → Perekaman tentang persetujuan.* | Mulai perekaman, yang memutar pemberitahuan, atau ubah pengaturan persetujuan. |
| *Pengenal suara tidak mulai menyimak. Periksa alamat langsung dan modelnya di Pengaturan → Transkripsi.* | Alamat untuk pembisik, model, atau kuncinya salah. **Uji** pada kartu pengenal suara menyebutkan yang mana. |
| *Dana bulan ini untuk pengenal suara sudah habis.* | Naikkan **Pengenal suara, sebulan**, atau tunggu bulan berganti. |
| *Dana bulan ini untuk model sudah habis. Kata-kata berlanjut; pembisikan sudah berhenti.* | Naikkan **Model, sebulan**. |
