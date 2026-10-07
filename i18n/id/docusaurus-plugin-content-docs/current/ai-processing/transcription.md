---
title: Transkripsi
sidebar_position: 1
description: "\"Pilih pengenal suara yang mengubah audio menjadi teks: alamatnya, modelnya, dan tabel model yang ditawarkan setiap layanan.\""
---

**Pengaturan → Transkripsi** mengatur cara audio menjadi teks: dalam bahasa apa, dan oleh pengenal suara yang mana.

<Shot name="25_transcription" alt="Pengaturan → Transkripsi: bahasa dan empat pengenal suara" />

Percakapan ditranskripsikan ketika Anda memintanya di [jendela Rekaman](/interface/recordings), atau dengan sendirinya jika **Proses percakapan otomatis** menyala di [Pemrosesan](/ai-processing/processing). Pengenal suara di komputer Anda sendiri tidak memakan biaya untuk dijalankan; pengenal suara di cloud mengenakan biaya per menit audio.

## Bahasa {#language}

**Bahasa** adalah kode bahasa dua huruf menurut ISO 639-1 (`en`, `de`, `es`, `fr`, `sr`…). Biarkan kosong, maka pengenal suara yang menentukan — itu sudah tepat, kecuali panggilan Anda berlangsung dalam bahasa yang terus-menerus salah didengar olehnya.

## Pengenal suara {#recognisers}

Pengenal suara adalah layanan ucapan-ke-teks yang menerima audio dari telepon. Tekan **Tambah** untuk menambahkannya; tombol **Uji** pada formulir memeriksa bahwa layanan itu benar-benar menjawab. Masing-masing dicantumkan dengan namanya dan, di bawahnya, model serta alamat layanannya. Pada gambar ada empat:

| Nama | Model | Alamat |
| --- | --- | --- |
| **X.ai** | *(kosong: bawaan layanan)* | `https://api.x.ai/v1` |
| **ElevenLabs** | `scribe_v2` | `https://api.elevenlabs.io/v1` |
| **Deepgram** | `nova-2` | `https://api.deepgram.com/v1` |
| **OpenAI** | `gpt-4o-transcribe` | `https://api.openai.com/v1/` |

Yang ditandai **Bawaan** di sebelah kanan barisnya (**X.ai** pada gambar) adalah yang digunakan ketika Anda tidak memilih yang lain. Anda dapat menyimpan beberapa. Daftar tarik-turun di atas transkrip di [jendela Rekaman](/interface/recordings#the-transcript-and-the-write-up) mencantumkan transkrip yang dibuat oleh setiap pengenal suara.

Model boleh dibiarkan kosong. Layanan kemudian menggunakan bawaannya sendiri.

## Model mana yang dipilih {#which-model-to-choose}

Tabel ini mencantumkan model ucapan-ke-teks dari keempat layanan pada gambar. Model yang **dicetak tebal** adalah yang disiapkan pada gambar. Untuk pengenal suara X.ai, modelnya kosong, sehingga bawaan layanan, **`grok-voice-transcribe-2.0`**, yang digunakan.

| Layanan dan alamat | Model | Kegunaannya |
| --- | --- | --- |
| **OpenAI**<br />`https://api.openai.com/v1` | `gpt-transcribe` | Model yang direkomendasikan OpenAI untuk ucapan yang direkam dalam bahasa aslinya. |
| | **`gpt-4o-transcribe`** | Transkripsi serbaguna. |
| | `gpt-4o-mini-transcribe` | Varian yang lebih ringan dan lebih murah dari model di atas. |
| | `gpt-4o-transcribe-diarize` | Menandai siapa berbicara kapan. Gunakan hanya jika Anda memerlukannya. |
| | `whisper-1` | Model Whisper yang lebih lama, dipertahankan untuk kegunaan khusus seperti cap waktu per kata dan subtitel. |
| **ElevenLabs**<br />`https://api.elevenlabs.io/v1` | **`scribe_v2`** | Transkripsi serbaguna dalam 90+ bahasa, dengan pemisahan pembicara. |
| | `scribe_v2_medical` | Sama, disesuaikan untuk audio klinis. |
| | `scribe_v1` | Generasi pertama; usang, gunakan `scribe_v2`. |
| **Deepgram**<br />`https://api.deepgram.com/v1` | `nova-3` | Model serbaguna terbaik Deepgram, untuk rapat, audio yang bising, dan multibahasa. |
| | **`nova-2`** | Generasi sebelumnya; pertahankan untuk bahasa yang belum didukung `nova-3`. |
| | `enhanced` | Tingkat lama dengan tingkat kesalahan lebih rendah daripada `base`. |
| | `base` | Tingkat tertua, untuk volume besar. |
| | `whisper` | Whisper, dijalankan oleh Deepgram. |
| **X.ai**<br />`https://api.x.ai/v1` | **`grok-voice-transcribe-2.0`** | Bawaan; 25 bahasa. |
| | `grok-voice-transcribe-1.0` | Usang: layanan mengalihkannya ke `2.0`. |

Hal-hal yang perlu diketahui sebelum memilih:

- **Ukuran berkas.** OpenAI menerima berkas hingga 25 MB; X.ai hingga 500 MB. Percakapan yang panjang bisa lebih besar daripada yang diterima layanan cloud.
- **Harga.** Layanan cloud mengenakan biaya per menit audio, dan tarifnya berbeda menurut model serta dapat berubah; bacalah di halaman layanan itu sendiri sebelum Anda beralih.
- **Bahasa.** Setiap layanan memiliki daftarnya sendiri; periksa daftar layanan Anda, dan atur kode [Bahasa](#language) jika pengenal suara salah menebak.
- **Model waktu nyata** seperti `scribe_v2_realtime` atau `flux` dari Deepgram dibuat untuk aliran langsung dan tidak ada dalam tabel: telepon mentranskripsikan rekaman yang sudah selesai.

Daftar model sebuah layanan sering berubah. Jika model yang Anda inginkan tidak ada di sini, dokumentasi layanan itu sendiri memuat daftar terkini — [OpenAI](https://developers.openai.com/api/docs/guides/speech-to-text), [ElevenLabs](https://elevenlabs.io/docs/capabilities/speech-to-text), [Deepgram](https://developers.deepgram.com/docs/models-languages-overview), [X.ai](https://docs.x.ai/developers/model-capabilities/audio/speech-to-text) — **Model** adalah nama persis seperti yang diberikan layanan.

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
