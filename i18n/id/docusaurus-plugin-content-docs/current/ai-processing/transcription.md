---
title: Transkripsi
sidebar_position: 1
description: "Memilih pengenal suara yang mengubah suara menjadi teks: alamatnya, modelnya, dan tabel model dari setiap jenis layanan."
---

**Pengaturan → Transkripsi** mencantumkan pengenal suara: layanan yang mengubah suara menjadi teks, untuk percakapan yang sudah selesai dan, untuk [pembisik](../interface/prompter.md), selagi percakapan berlangsung.

<Shot name="25_transcription" alt="Pengaturan → Transkripsi: lima pengenal suara" />

Sebuah percakapan ditranskripsi saat Anda memintanya di [jendela Rekaman](/interface/recordings), atau dengan sendirinya jika **Proses percakapan otomatis** aktif di [Pemrosesan](/ai-processing/processing). Pengenal suara di mesin Anda sendiri tidak memakan biaya; yang di cloud menagih per menit suara.

## Pengenal suara {#recognisers}
Pengenal suara adalah layanan pengenalan ucapan yang menerima suara dari telepon. **Tambah** menambahkan yang baru; tombol **Uji** di kartunya memeriksa bahwa layanan benar-benar menjawab. Masing-masing tercantum dengan namanya dan, di bawahnya, model serta alamat layanannya. Di gambar ada lima:

| Nama | Model | Alamat |
| --- | --- | --- |
| **X.ai** | *(kosong: model bawaan layanan)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |
| **Vosk** | *(tidak ada)* | `ws://localhost:2700`, server di komputer ini |

Dua tanda di kanan baris menunjukkan pengenal suara itu menjadi bawaan untuk apa. Jam menyala pada bawaan **untuk transkripsi** — **X.ai** di gambar —, yang dipakai bila Anda tidak memilih yang lain. Petir menyala pada bawaan **untuk pembisik** — **Vosk** di gambar. Anda dapat menyimpan beberapa pengenal suara; daftar tarik-turun di atas transkrip di [jendela Rekaman](/interface/recordings#transcript-or-write-up-the-drop-down) menampilkan transkrip yang dibuat oleh masing-masing.

## Kartu pengenal suara {#the-recognisers-card}
Menekan sebuah pengenal suara membuka kartunya.

<Shot name="43_recogniser_card" alt="Kartu pengenal suara X.ai: jenis, dua alamat, kunci, Uji, dan bawaan" />

| Kolom | Apa itu |
| --- | --- |
| **Nama** | Nama di daftar. |
| **Jenis** | Jenis layanan, yang menentukan cara telepon berbicara dengannya: **Sesuai OpenAI (Whisper, OpenAI)**, **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **AssemblyAI**, **Soniox**, **Speechmatics**, dan tiga yang berjalan di mesin Anda sendiri — **Vosk**, **WhisperLive**, dan **NVIDIA Riva**. **Yandex SpeechKit** ditawarkan bila negara di [Tentang](../application/about.md) adalah Rusia atau salah satu tetangganya. |
| **Alamat untuk transkripsi** | Ke mana percakapan yang sudah selesai dikirim. |
| **Alamat untuk pembisik** | Ke mana suara langsung dikirim selagi percakapan berlangsung. *Kosong diturunkan dari alamat di sebelahnya*, seperti `wss://api.x.ai` di gambar. |
| **Kunci** | Kunci layanan. *Disimpan di gantungan kunci komputer ini, tidak pernah di berkas pengaturan.* |
| **Uji** | Bertanya kepada layanan dan menyampaikan jawabannya, misalnya *Menjawab, dan menawarkan 3 model*. |
| **Model untuk transkripsi** dan **Model untuk pembisik** | Model, persis seperti nama yang diberikan layanan. *Kosong tidak mengirim nama model*, dan layanan memakai bawaannya sendiri; bila vendor menerbitkannya, kartu menyebutkannya. Kolom tidak ditampilkan untuk jenis yang tidak punya pilihan. |
| **Bawaan untuk transkripsi** | Menjadikan ini pengenal suara yang dipakai bila Anda tidak memilih yang lain. |
| **Bawaan untuk pembisik** | Menjadikan ini pengenal suara yang dipakai asisten baru pembisik untuk mendengarkan. |
| **Aktif** | Bila dimatikan, pengenal suara tetap ada di daftar tetapi tidak dipakai. |

**Pengaturan lanjutan** membuka sisa kartu. Nilai-nilai yang paling penting:

<Shot name="43b_recogniser_advanced" alt="Pengaturan lanjutan pengenal suara: batas, cara jawaban dipotong, bahasa" />

| Kolom | Apa fungsinya |
| --- | --- |
| **Wilayah** | Wilayah layanan, untuk layanan yang punya beberapa. |
| **Kirim kedua sisi terpisah** | Panggilan direkam dengan kedua orang di dua kanal, dan itulah yang memberi tahu pengenal suara siapa mengatakan apa. Matikan untuk server yang mengaku bisa melakukannya padahal tidak. |
| **Minta siapa yang berbicara** | Membedakan orang dalam satu kanal, bila ada beberapa yang berbicara di kanal itu. |
| **Tulis angka sebagai digit** | Jumlah uang, tanggal, dan nomor telepon kembali seperti yang ditulis, bukan dieja dengan huruf. |
| **Batas unggah**, **Batas durasi** | Berkas terbesar, dalam byte, dan rekaman terpanjang, dalam detik, yang akan dikirim telepon ini. |
| **Permintaan sekaligus** | Berapa banyak permintaan yang boleh berjalan pada saat yang sama. |
| **Akhiri jawaban setelah**, **Gabungkan jawaban pendek dalam**, **Jeda antargiliran** | Untuk pembisik: berapa lama tanpa kata baru mengakhiri sebuah jawaban, berapa lama jawaban pendek menunggu jawaban berikutnya untuk digabungkan, dan berapa lama hening mengakhiri giliran bicara di tempat pengenal suara tidak menandainya. Dalam milidetik. |
| **Bahasa** | Kode bahasa dua huruf menurut ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Biarkan kosong dan pengenal suara yang memutuskan — itu tepat, kecuali panggilan Anda dalam bahasa yang terus-menerus salah didengarnya. |
| **Tambahan** | Satu `name = value` per baris, diteruskan ke layanan apa adanya. Biarkan kosong kecuali server mendokumentasikan sesuatu. |
| **Tunggu, menit** | Berapa lama menunggu transkrip. Kosong menghitungnya dari durasi rekaman. |
| **Harga per menit** | Biaya satu menit suara langsung, dari daftar harga layanan. Pembisik menunjukkan biaya sebuah sesi dan berhenti pada [batas bulanannya](prompter.md#spending). |

## Pengenalan langsung untuk pembisik {#live-recognition-for-the-prompter}
[Pembisik](../interface/prompter.md) membutuhkan pengenal suara yang mendengarkan selagi seseorang berbicara, lewat aliran, bukan dengan berkas yang sudah jadi. Jenis-jenis ini bisa: **Deepgram**, **ElevenLabs (Scribe)**, **xAI (Grok)**, **Sesuai OpenAI** (dengan transkripsi waktu nyata OpenAI), **AssemblyAI**, **Soniox**, dan **Speechmatics** di cloud, **Yandex SpeechKit** di tempat ia ditawarkan, serta **Vosk**, **WhisperLive**, dan **NVIDIA Riva** di mesin Anda sendiri. Pengenal suara di mesin Anda sendiri menjaga suara lawan bicara tetap di dalam gedung dan tidak memungut biaya.

Untuk memakainya: buka kartunya, periksa **Alamat untuk pembisik** (atau biarkan diturunkan), pilih **Model untuk pembisik** bila layanan menawarkan beberapa — model langsung sering berbeda dari model untuk berkas, seperti `scribe_v2_realtime` milik ElevenLabs — lalu tekan **Uji**. Centang **Bawaan untuk pembisik** agar asisten baru mendengarkan dengannya.

## Model mana yang dipilih {#which-model-to-choose}
Tabel ini mencantumkan model pengenalan ucapan dari setiap jenis di daftar **Jenis**. Model yang **tebal** adalah yang diatur di gambar; untuk pengenal suara X.ai modelnya kosong, jadi bawaan layanan, **`grok-voice-transcribe-2.0`**, yang dipakai. Kolom **Untuk** menyatakan untuk apa sebuah model dibuat: rekaman yang sudah jadi (*transkripsi*), ucapan langsung untuk [pembisik](#live-recognition-for-the-prompter) (*pembisik*), atau *keduanya*.

| Jenis dan alamat | Model | Untuk | Kegunaannya |
| --- | --- | --- | --- |
| **Sesuai OpenAI (Whisper, OpenAI)**<br />`https://api.openai.com/v1` | `gpt-transcribe` | transkripsi | Model yang direkomendasikan OpenAI untuk ucapan rekaman dalam bahasa aslinya. |
| | **`gpt-4o-transcribe`** | keduanya | Transkripsi serbaguna. Pengenal suara baru dari jenis ini mendapatkannya. |
| | `gpt-4o-mini-transcribe` | keduanya | Varian yang lebih ringan dan murah dari model di atas. |
| | `gpt-4o-transcribe-diarize` | transkripsi | Menandai siapa berbicara kapan. Pakai hanya jika Anda membutuhkannya. |
| | `whisper-1` | transkripsi | Model Whisper lama, dipertahankan untuk keperluan khusus seperti cap waktu per kata dan subtitel. |
| | `gpt-live-transcribe` | pembisik | Model langsung OpenAI: kata-kata datang saat diucapkan. Telepon menawarkannya untuk pembisik. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | keduanya | Model serbaguna terbaik Deepgram, untuk rapat, suara bising, dan multibahasa. Pengenal suara baru dari jenis ini mendapatkannya. |
| | **`nova-2`** | keduanya | Generasi sebelumnya; pertahankan untuk bahasa yang belum didukung `nova-3`. |
| | `nova-2-phonecall` | keduanya | `nova-2` yang disetel untuk suara sempit saluran telepon. Bahasa Inggris. |
| | `flux-general-en` | pembisik | Dibuat untuk percakapan: mendengar kapan seseorang selesai berbicara. Bahasa Inggris. |
| | `flux-general-multi` | pembisik | Sama, dalam sepuluh bahasa, dan percakapan boleh berpindah di antaranya. |
| | `enhanced`, `base` | transkripsi | Tingkat yang lebih lama; `base` untuk volume besar. |
| | `whisper` | transkripsi | Whisper yang dijalankan oleh Deepgram. |
| **ElevenLabs (Scribe)**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | transkripsi | Transkripsi serbaguna dalam lebih dari 90 bahasa, dengan pemisahan pembicara. |
| | `scribe_v2_realtime` | pembisik | Versi langsung `scribe_v2`. Telepon menawarkannya untuk pembisik. |
| | `scribe_v2_medical` | transkripsi | `scribe_v2` yang disetel untuk suara klinis. |
| | `scribe_v1` | transkripsi | Generasi pertama; usang, pakai `scribe_v2`. |
| **Speechmatics**<br />`https://asr.api.speechmatics.com/v2` | `enhanced` | keduanya | Paling akurat, untuk percakapan dalam satu bahasa. Pengenal suara baru dari jenis ini mendapatkannya. |
| | `standard` | keduanya | Lebih cepat dan murah, sedikit kurang akurat. |
| | `melia-1` | transkripsi | Percakapan dalam beberapa bahasa, yang berganti bahasa di tengah kalimat, kembali sebagai satu transkrip. Hanya rekaman, di wilayah UE dan AS; belum ada kamus sendiri dan label pembicara. |
| **xAI (Grok)**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | keduanya | Bawaan; 25 bahasa. |
| | `grok-voice-transcribe-1.0` | transkripsi | Usang: layanan mengalihkannya ke `2.0`. |
| **Soniox**<br />`https://api.soniox.com` | `stt-async-v5` | transkripsi | Lebih dari 60 bahasa, dengan pemisahan pembicara. |
| | `stt-rt-v5` | pembisik | Langsung, dalam 60+ bahasa yang sama, dan mendengar di mana giliran bicara berakhir. Telepon menawarkannya untuk pembisik. |
| **AssemblyAI**<br />`https://api.assemblyai.com` | `universal-3-5-pro` | keduanya | Model paling akurat untuk rekaman; 18 bahasa, dan percakapan boleh berpindah di antaranya. |
| | `universal-2` | transkripsi | 99 bahasa, lebih murah; AssemblyAI beralih ke model ini untuk bahasa yang tidak dikenal `universal-3-5-pro`. |
| | `universal-3-6-pro` | pembisik | Model langsung terbaru AssemblyAI, 32 bahasa; layanan memakainya bila model kosong. |
| | `universal-streaming-multilingual` | pembisik | Pengenalan langsung yang lebih murah dalam bahasa Inggris, Spanyol, Jerman, Prancis, Portugis, dan Italia. |
| | `universal-streaming-english` | pembisik | Pengenalan langsung yang lebih murah, hanya bahasa Inggris. |
| **Yandex SpeechKit**<br />`https://stt.api.cloud.yandex.net` | `general` | keduanya | Model utama, kuat untuk bahasa Rusia, juga lewat telepon. Ditawarkan bila negaranya Rusia atau salah satu tetangganya. |
| | `general:rc` | keduanya | Versi model berikutnya sebelum dirilis. |
| | `deferred-general` | transkripsi | Pengenalan tertunda: transkrip datang belakangan, dengan biaya lebih rendah. |
| **Vosk (di mesin Anda sendiri)**<br />`ws://localhost:2700` | *(diatur di server)* | keduanya | Gratis dan ringan; berjalan tanpa kartu grafis. Modelnya adalah model yang dipakai saat server dijalankan, satu per bahasa, misalnya `vosk-model-en-us-0.22` atau yang kecil `vosk-model-small-en-us-0.15`. |
| **WhisperLive (di mesin Anda sendiri)**<br />`ws://localhost:9090` | `small` | keduanya | Whisper lewat aliran langsung. Ukurannya dipilih di kartu: `tiny`, `base`, `small` (yang ditawarkan telepon), `medium`, `large-v3`; makin besar, makin akurat, dan makin butuh kartu grafis. |
| **NVIDIA Riva (di mesin Anda sendiri)**<br />`localhost:50051` | *(diatur di server)* | keduanya | Server ucapan NVIDIA, untuk komputer dengan kartu grafis NVIDIA. Menyediakan model seperti Parakeet dan Canary. |

Hal yang perlu diketahui sebelum memilih:

- **Transkripsi atau pembisik.** Model untuk ucapan langsung tidak menerima berkas yang sudah jadi, dan sebagian besar model untuk berkas tidak bisa mendengarkan secara langsung. Itulah sebabnya kartu punya dua kolom, **Model untuk transkripsi** dan **Model untuk pembisik**.
- **Ukuran berkas.** OpenAI menerima berkas hingga 25 MB; X.ai hingga 500 MB. Percakapan panjang bisa lebih besar daripada yang diterima layanan cloud.
- **Harga.** Layanan cloud menagih per menit suara, dan tarifnya berbeda per model dan berubah; bacalah di halaman layanan itu sendiri sebelum beralih. Pengenal suara di mesin Anda sendiri tidak memakan biaya.
- **Bahasa.** Setiap layanan punya daftarnya sendiri; periksa daftar Anda, dan isi kode di **Bahasa** pada pengaturan lanjutan pengenal suara jika tebakannya salah.

Daftar model sebuah layanan sering berubah. Jika model yang Anda inginkan tidak ada di sini, dokumentasi layanan itu sendiri memuat daftar terbaru — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Speechmatics](https://docs.speechmatics.com/speech-to-text/models), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text), [Soniox](https://soniox.com/docs/stt/models), [AssemblyAI](https://www.assemblyai.com/docs/getting-started/models), [Yandex SpeechKit](https://yandex.cloud/en/docs/speechkit/stt/models), [Vosk](https://alphacephei.com/vosk/models), [WhisperLive](https://github.com/collabora/WhisperLive), [NVIDIA Riva](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/asr/asr-overview.html) — dan **Model** adalah nama persis seperti yang diberikan layanan.

## Model Anda sendiri {#your-own-models}

Pengenal suara tidak harus berupa layanan cloud. Telepon dapat menggunakan **model apa pun yang disajikan melalui API yang kompatibel dengan OpenAI** — antarmuka `POST /v1/audio/transcriptions` — baik yang berjalan secara lokal di komputer Anda maupun di server milik Anda sendiri. Audio tidak pernah meninggalkan lingkungan Anda, tidak ada biaya per menit, dan tidak ada batas volume.

Untuk menambahkannya, tekan **Tambah** dan isikan:

- **Alamat** server, sampai dengan `/v1`, misalnya `http://localhost:8000/v1` untuk komputer itu sendiri atau `http://asr.local:8080/v1` untuk server di jaringan Anda;
- nama **Model** persis seperti yang dicantumkan server, misalnya `openai/whisper-large-v3-turbo`.

### Apa yang dapat digunakan {#what-can-be-used}

Pilihan yang lazim adalah **Whisper**, model pengenalan ucapan terbuka dari OpenAI. Model ini gratis digunakan, memahami sekitar seratus bahasa, dan tersedia dalam beberapa ukuran: model kecil berjalan di komputer biasa, sedangkan model besar jauh lebih akurat dan sebaiknya dijalankan dengan kartu grafis.

| Model | Catatan |
| --- | --- |
| `whisper-large-v3` | Whisper yang paling akurat. Untuk server dengan GPU. |
| `openai/whisper-large-v3-turbo` | Versi `large-v3` yang lebih cepat dengan sedikit penurunan akurasi. |
| `Systran/faster-whisper-large-v3` | `large-v3` yang dikonversi untuk mesin faster-whisper; lebih cepat, dan lebih hemat memori. |
| `medium`, `small`, `base` | Model Whisper yang lebih kecil, untuk komputer tanpa kartu grafis. |

Whisper adalah model yang menjadi dasar server-server ini. Beberapa di antaranya juga dapat menyajikan model pengenalan ucapan lain, seperti NVIDIA Parakeet.

### Server yang menawarkan API yang kompatibel dengan OpenAI {#servers-that-offer-the-openai-compatible-api}

Model harus dijalankan oleh server yang menawarkan endpoint `/v1/audio/transcriptions` yang kompatibel dengan OpenAI. Server-server berikut menawarkannya:

| Server | Apa itu |
| --- | --- |
| [vLLM](https://docs.vllm.ai/en/latest/serving/online_serving/speech_to_text/) | Server model berkinerja tinggi. Menyajikan Whisper di `http://localhost:8000/v1` setelah dijalankan. |
| [Speaches](https://github.com/speaches-ai/speaches) | Server untuk model ucapan, "Ollama untuk ucapan", dibangun di atas faster-whisper. Memuat model saat model itu pertama kali diminta. |
| [whisper.cpp](https://github.com/ggml-org/whisper.cpp) | Menjalankan Whisper secara efisien di CPU, termasuk Apple silicon. `whisper-server`-nya dijalankan dengan `--inference-path /v1/audio/transcriptions`. |
| [LocalAI](https://localai.io/) | Pengganti langsung OpenAI yang menjalankan model secara lokal. |

Server lain apa pun yang menawarkan endpoint yang sama bekerja dengan cara yang sama. Jika server memerlukan kunci, masukkan kunci itu seperti untuk layanan cloud.

Sebelum mengandalkan sebuah server, buat rekaman uji dan lihat transkripnya di [jendela Rekaman](/interface/recordings): percakapan dalam bahasa yang kurang dikuasai model akan langsung menunjukkannya.
