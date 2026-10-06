---
title: Menyiapkan akun SIP
sidebar_position: 1
description: Hubungkan AI Softphone ke IP PBX atau penyedia SIP Anda di Pengaturan → Akun.
---

AI Softphone bekerja dengan IP PBX atau penyedia SIP mana pun. Anda dapat masuk di sebanyak mungkin akun (saluran) yang Anda miliki, dan setiap akun memiliki pengaturannya sendiri.

Buka **Pengaturan → Akun**.

<Shot name="05_settings_accounts" alt="Pengaturan → Akun: dua akun, keduanya terdaftar" />

## Daftar akun {#the-list-of-accounts}

Setiap akun adalah sebuah baris dengan:

- **kotak centang** yang menyalakan atau mematikan akun;
- **titik** yang berwarna hijau ketika akun terdaftar di PBX;
- nama, dan di bawahnya `username@server`;
- tombol **Putuskan** yang mengeluarkan akun dari PBX;
- tombol **▲** dan **▼** yang memindahkan akun ke atas atau ke bawah dalam daftar. Cip akun di [jendela utama](../interface/main-window.md) mengikuti urutan yang sama.

Tombol **Tambah** di kanan atas menambahkan akun. Klik sebuah baris untuk membuka formulirnya di bawahnya.

## Menambahkan akun {#adding-an-account}

<Shot name="05d_account_add" alt="Formulir akun baru, masih kosong" />

Tekan **Tambah**. Formulir kosong terbuka di bawah daftar, dengan kursor di **Nama (opsional)**. Isi kolom-kolom di bawah, buka **Pengaturan server** jika PBX memerlukannya, lalu tekan **Simpan**. Akun baru dimulai dengan nilai yang lazim: UDP di porta 5060, registrasi diperbarui setiap 300 detik.

## Formulir akun {#the-account-form}

<Shot name="05b_account_edit" alt="Formulir sebuah akun" />

| Kolom | Yang diisi |
| --- | --- |
| **Nama (opsional)** | Nama yang ditampilkan pada cip akun di jendela utama dan pada panggilannya. Jika kosong, akun ditampilkan sebagai `username@server`. |
| **Nama pengguna** | Nama pengguna atau nomor ekstensi yang diberikan oleh PBX atau penyedia Anda. |
| **Kata sandi** | Kata sandinya. Kolom ini tetap kosong ketika Anda kembali ke formulir. Kata sandi disimpan di gantungan kunci komputer, tidak pernah di berkas pengaturan. |
| **Alamat server** | Alamat PBX atau server SIP penyedia, misalnya `pbx.example.com`. |
| **Pengaturan server** | Membuka pengaturan koneksi yang jarang dipakai; lihat di bawah. |
| **Jawab otomatis** | Di bawah **Menjawab**: menjawab panggilan masuk pada akun ini tanpa Anda menekan apa pun. Mati secara bawaan. |

Tekan **Simpan** untuk menyimpan perubahan. **Batal** membuangnya dan **Hapus** menghapus akun.

Ketika titik di samping akun berwarna hijau, akun sudah terdaftar dan cip akun di jendela utama juga menunjukkannya. Jika titik tetap abu-abu atau merah, buka [Diagnostik](../troubleshooting/diagnostics.md): tab **SIP** menampilkan permintaan `REGISTER` dan jawaban server.

## Pengaturan server {#server-settings}

Sebagian besar PBX tidak memerlukan apa pun di sini. Tekan **Pengaturan server** untuk menampilkannya; tombol yang sama kini bertuliskan **Sembunyikan pengaturan server**.

<Shot name="05c_account_server_settings" alt="Pengaturan server sebuah akun, dalam keadaan terbuka" />

| Kolom | Bawaan | Artinya |
| --- | --- | --- |
| **Pengguna autentikasi** | kosong | Nama yang dicocokkan PBX dengan kata sandi, bila tidak sama dengan **Nama pengguna**. Pada gambar, ekstensinya `201` dan PBX mengautentikasinya sebagai `kantor201`. |
| **Angkutan** | UDP | Protokol koneksi ke server. Daftar tarik-turun. |
| **Porta** | 5060 | Porta server. |
| **Proksi keluar** | kosong | Proksi yang harus dilalui setiap permintaan, jika penyedia Anda memberikannya. |
| **Pendaftar** | kosong | Alamat tempat mendaftar, jika bukan **Alamat server**. |
| **Daftar ulang, detik** | 300 | Seberapa sering telepon memperbarui registrasinya. |
| **Nada papan tombol** | Aliran audio | Cara nada papan tombol dikirim ke PBX. Daftar tarik-turun. Ubah hanya jika PBX tidak mendengar nadanya. |

Codec yang ditawarkan telepon tidak diatur per akun; codec ada di [Pengaturan panggilan](calls.md#audio-formats).
