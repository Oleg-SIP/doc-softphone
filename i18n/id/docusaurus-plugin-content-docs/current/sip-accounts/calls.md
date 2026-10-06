---
title: Pengaturan panggilan
sidebar_position: 3
description: Codec yang ditawarkan ke PBX, apa yang terjadi ketika panggilan kedua masuk, panggil ulang otomatis, dan berapa lama log panggilan disimpan.
---

**Pengaturan → Panggilan** berisi pengaturan yang berlaku untuk setiap panggilan, apa pun akunnya.

## Format audio {#audio-formats}

<Shot name="07_settings_calls" alt="Pengaturan → Panggilan: format audio" />

Daftar codec yang ditawarkan telepon kepada ujung sana. Codec *ditawarkan dalam urutan ini*, dan ujung sana memilih dari yang Anda tawarkan: semakin tinggi posisi sebuah codec, semakin besar kemungkinan codec itu digunakan.

- **Kotak centang** menyalakan atau mematikan codec. Codec yang mati tidak ditawarkan.
- **▲** dan **▼** memindahkannya ke atas atau ke bawah dalam daftar.
- *pita lebar* di sebelah kanan menandai codec dengan rentang suara yang lebih lebar daripada saluran telepon biasa: suara lebih jelas.

| Codec | Laju sampel | Menyala secara bawaan |
| --- | --- | --- |
| **opus** | 48 kHz, stereo, pita lebar | ya |
| **G722** | 16 kHz, pita lebar | ya |
| **PCMU** | 8 kHz | ya |
| **PCMA** | 8 kHz | ya |
| **speex** | 16 kHz, pita lebar | tidak |
| **speex** | 8 kHz | tidak |
| **speex** | 32 kHz, pita lebar | tidak |
| **iLBC** | 8 kHz | tidak |
| **GSM** | 8 kHz | tidak |
| **L16** | 44 kHz, stereo, pita lebar | tidak |
| **L16** | 44 kHz, pita lebar | tidak |

Tabel ini disusun dalam urutan bawaan program.

Codec disepakati saat panggilan dimulai, jadi perubahan berlaku mulai panggilan Anda berikutnya. Jika kualitas suara panggilan buruk, biarkan menyala hanya codec yang digunakan PBX Anda.

## Panggilan menunggu {#call-waiting}

<Shot name="07b_settings_calls_scrolled" alt="Pengaturan → Panggilan: panggilan menunggu, panggil ulang otomatis, dan riwayat" />

*Apa yang terjadi ketika seseorang menelepon saat Anda sedang dalam panggilan.* Daftar tarik-turun memilihnya; bawaannya **Bunyikan panggilan kedua**. Panggilan interkom dari sentral Anda sendiri selalu masuk, apa pun pilihan Anda — begitulah panggilan yang dilakukan dari panel CTI sampai ke telepon ini.

## Panggil ulang otomatis {#autodial}

Ketika sebuah panggilan tidak dapat tersambung, kartunya menawarkan untuk terus memanggil sampai tersambung. Dua penggeser mengatur caranya:

- **Tunggu antarpercobaan** — secara bawaan 15 detik;
- **Menyerah setelah** — secara bawaan 30 menit.

## Riwayat {#history}

Log panggilan adalah bukti, jadi tidak ada yang dihapus darinya kecuali Anda memintanya di sini.

- **Masa simpan** menentukan berapa lama [log panggilan](/interface/contacts-history#history) menyimpan sebuah panggilan. Bawaannya **Selalu**.
- **Bersihkan riwayat panggilan** menghapus semua panggilan sekaligus, apa pun masa simpannya. Tindakan ini tidak dapat dibatalkan.
