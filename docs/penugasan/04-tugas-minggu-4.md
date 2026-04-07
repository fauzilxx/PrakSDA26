---
sidebar_position: 4
---

# Tugas 4: Implementasi Set dan Map

Berikut adalah format penugasan terstruktur untuk mata kuliah Pemrograman Java / Struktur Data.
Tema yang diambil adalah **Sistem Manajemen Perpustakaan Digital**, karena tema ini sangat ideal
untuk menunjukkan perbedaan fungsi antara Set dan Map.

## Penugasan Pemrograman Java: Struktur Data Koleksi

**Mata Kuliah:** Struktur Data / Pemrograman Berorientasi Objek

**Topik:** Implementasi Set dan Map dalam suatu program

## 1. Tujuan Pembelajaran

- Mahasiswa mampu mengimplementasikan interface Map untuk memetakan hubungan antar data (Key-Value).
- Mahasiswa mampu menggunakan interface Set untuk mengelola data yang bersifat unik (tanpa duplikat).

## 2. Skenario Kasus

Anda diminta untuk membangun prototipe sistem **Manajemen Perpustakaan Digital**.
Sistem ini harus mampu mengelola data buku, kategori buku, dan sistem peminjaman sederhana.

## 3. Kebutuhan Fungsional (Fitur Program)

Program yang Anda buat harus memiliki kemampuan sebagai berikut:

1. **Manajemen Inventaris (Menggunakan Map):**
   - Simpan data buku menggunakan `Map<String, String>`.
   - Key: Kode Buku (ISBN/ID unik).
   - Value: Judul Buku.
   - Fitur: Tambah buku baru, cari buku berdasarkan kode, dan hapus buku.
2. **Daftar Kategori Unik (Menggunakan Set):**
   - Setiap buku yang dimasukkan memiliki kategori (misal: Fiksi, Sains, Sejarah).
   - Sistem harus menyimpan semua kategori yang ada ke dalam sebuah Set.
   - Fitur: Menampilkan semua kategori unik yang tersedia di perpustakaan tanpa ada duplikasi nama kategori.

## 4. Spesifikasi Teknis

- **Bahasa:** Java
- **Struktur Class:** Minimal terdiri dari satu class utama (`Main`) untuk menjalankan program.
  Disarankan membuat class `Buku` untuk menyimpan detail objek jika ingin lebih kompleks.
- **Input:** Data bisa dimasukkan secara statis (hardcoded) atau dinamis melalui Scanner.

## 5. Format Kode (Template Jawaban)

Mahasiswa diharapkan mengikuti struktur logika berikut:

```java
import java.util.*;

public class SistemPerpustakaan {
	// 1. Deklarasi Map untuk Inventaris Buku (ID -> Judul)
	// 2. Deklarasi Set untuk Daftar Kategori Unik

	public static void main(String[] args) {
		// Implementasi menu atau pemanggilan fungsi CRUD
	}

	public void tambahBuku(String id, String judul, String kategori) {
		// Masukkan ke Map dan Set di sini
	}
}
```

## 6. Bobot Penilaian

| No | Kriteria Penilaian | Bobot |
|---|---|---|
| 1 | Ketepatan penggunaan Map (key unik, value benar) | 30% |
| 2 | Ketepatan penggunaan Set (penanganan data duplikat) | 30% |
| 3 | Logika pemrograman (input/output berjalan lancar) | 20% |
| 4 | Kerapian kode dan komentar penjelasan | 20% |
