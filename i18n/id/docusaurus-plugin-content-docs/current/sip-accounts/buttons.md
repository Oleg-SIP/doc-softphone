---
title: Tombol
sidebar_position: 4
description: "\"Tombol BLF: tombol sekali sentuh yang memanggil ekstensi di IP PBX Anda dan menunjukkan apakah ekstensi itu bebas, berdering, atau sibuk.\""
---

Tombol adalah tombol **BLF** (Busy Lamp Field) softphone, fungsi yang sama dengan yang dimiliki telepon meja pada IP PBX. Sebuah tombol memanggil ekstensi dengan sekali tekan. Tombol yang memantau salurannya juga menampilkan lampu: telepon menanyakan ekstensi itu kepada PBX dan menunjukkan apakah ekstensi itu bebas, berdering, atau sibuk, seperti konsol resepsionis atau tombol terprogram pada telepon meja.

BLF memerlukan dukungan di sisi PBX: PBX harus melaporkan status ekstensi kepada telepon. Sebagian besar IP PBX melakukannya. Jika PBX Anda tidak, lampu tetap abu-abu dan tombol tetap bisa memanggil.

Tombol-tombol berada di bawah cip akun di [jendela utama](/interface/main-window), dan **Pengaturan → Tombol** adalah tempat Anda membuatnya.

<Shot name="08_settings_buttons" alt="Pengaturan → Tombol: dua tombol" />

Setiap baris adalah sebuah tombol: lampu, labelnya, dan di sebelah kanan nomornya serta akun tempatnya berada — misalnya *212 · 201 Kantor*. **▲** dan **▼** memindahkan tombol ke atas atau ke bawah; tombol-tombol di jendela utama mengikuti urutan ini. **Tambah** membuat tombol baru.

## Lampu {#the-lamp}

Tombol yang memantau salurannya menampilkan lampu:

| Lampu | Salurannya |
| --- | --- |
| Hijau | bebas |
| Kuning | berdering |
| Merah | sedang dalam panggilan |
| Abu-abu | tidak diketahui: sentral tidak memberi tahu |

## Menambahkan tombol {#adding-a-button}

<Shot name="08b_button_add" alt="Formulir tombol baru" />

Tekan **Tambah**; formulir terbuka di bawah daftar.

| Kolom | Yang diisi |
| --- | --- |
| **Nomor** | Nomor yang dihubungi. |
| **Saluran** | Akun yang digunakan untuk melakukan panggilan. Pilih ini terlebih dahulu: untuk menampilkan lampu, telepon menanyakan nomor ini kepada sentral saluran tersebut, jadi telepon harus tahu sentral yang mana. |
| **Label** | Teks pada tombol, misalnya nama orangnya. Tombol hanya muat label pendek; label yang lebih panjang akan terpotong. |
| **Tampilkan apakah saluran ini sibuk** | Sakelar. Jika menyala, tombol memiliki lampu. Jika mati, tombol hanya memanggil. |

**Simpan** tetap abu-abu sampai formulir terisi. **Batal** membuang formulir.

Bagian program yang menampilkan tombol dapat dimatikan di [Modul](/application/modules).
