---
title: Kontak dan riwayat
sidebar_position: 2
description: Buku alamat dan log panggilan, di samping telepon.
---

**Kontak** dan **Riwayat** terbuka sebagai dua tab di sebelah kanan telepon, sehingga Anda dapat mencari nomor sambil berbicara.

## Kontak {#contacts}

<Shot name="03_contacts" alt="Tab Kontak" />

- **Cari** menyaring daftar selagi Anda mengetik.
- **Tambah** membuat kontak baru.
- Setiap kontak dicantumkan dengan nama dan, di bawahnya, nomor serta akun yang digunakan untuk menghubungi kontak tersebut, misalnya *231 · 201 Kantor*.

Panggilan masuk dari nomor yang dikenal menampilkan nama kontak, begitu pula daftar panggilan terakhir dan log panggilan — begitulah cara pencocokan identitas penelepon bekerja.

### Mengedit kontak {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Kontak yang terbuka untuk diedit" />

Pilih kontak untuk menampilkan pensil dan gagang telepon di sebelah kanan barisnya. Gagang telepon menghubungi kontak; pensil membuka formulir di bawah baris:

| Kolom | Yang diisi |
| --- | --- |
| **Nama** | Bagaimana kontak ditampilkan. |
| **Nomor** | Nomor yang dihubungi. |
| Daftar tarik-turun di bawah **Nomor** | Akun yang digunakan untuk menghubungi kontak. |

**Simpan** menyimpan perubahan, **Batal** membuangnya, dan **Hapus** menghapus kontak.

## Riwayat {#history}

<Shot name="21_history" alt="Tab Riwayat" />

Log panggilan, yang terbaru di atas. Di bagian atas:

- daftar tarik-turun, secara bawaan **Semua panggilan**, mempersempit daftar ke satu jenis panggilan;
- **Cari** menyaring berdasarkan apa yang Anda ketik.

Setiap entri memiliki ikon jenis panggilan — gagang telepon keluar, atau gagang telepon merah dengan jam untuk panggilan yang tidak Anda jawab — nama pihak lain (atau nomornya), dan di bawahnya tanggal, hasil panggilan, durasinya, nomor, dan akun. Panggilan terbaru ditampilkan sebagai *Kemarin, 22:33* atau nama hari, yang lebih lama dengan tanggal.

| Hasil panggilan | Ditampilkan sebagai |
| --- | --- |
| Anda sempat berbicara | **keluar** atau masuk, beserta durasinya, misalnya *48 s* |
| Panggilan masuk tidak dijawab | **Tak terjawab** |
| Panggilan yang Anda lakukan tidak tersambung | **Tidak tersambung** |

Pilih entri untuk menampilkan empat tombol di sebelah kanannya:

| Tombol | Fungsi |
| --- | --- |
| Orang dengan tanda plus | Menambahkan nomor ke [Kontak](#contacts). |
| ▶ | Memutar rekaman panggilan, jika panggilan itu direkam. |
| Tempat sampah | Menghapus entri. |
| Gagang telepon | Menelepon balik nomor tersebut. |

### Berapa lama log disimpan {#how-long-the-log-is-kept}

Log panggilan adalah bukti, jadi tidak ada yang dihapus darinya kecuali Anda memintanya: secara bawaan, setiap panggilan disimpan. Masa simpan dan tombol **Bersihkan riwayat panggilan** ada di [Pengaturan panggilan](../sip-accounts/calls.md#history).

Panggilan tak terjawab dan yang ditolak juga dapat dibaca melalui [REST API lokal](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
