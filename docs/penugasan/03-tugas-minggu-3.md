---
sidebar_position: 3
---

# Tugas 3: Analisis Kompleksitas Algoritma

## Deskripsi Tugas

Pada praktikum ini, praktikan diminta untuk membandingkan efisiensi program dalam menyelesaikan kasus yang sama, yaitu simulasi antrian. Praktikan akan menjalankan dua program dengan hasil yang sama, tetapi menggunakan pendekatan yang berbeda, yaitu menggunakan Queue dan ArrayList. Tujuan tugas ini adalah agar praktikan memahami bahwa:

- Cara implementasi algoritma mempengaruhi performa program
- Pemilihan struktur data harus sesuai dengan kebutuhan
- Kompleksitas algoritma dapat dilihat dari pertumbuhan waktu eksekusi

## Pilihan Struktur Data

Praktikan akan menggunakan dua pendekatan berikut:

1. **Queue (LinkedList):** Digunakan untuk mensimulasikan antrian secara langsung
2. **ArrayList:** Digunakan sebagai alternatif untuk mensimulasikan antrian (menghapus dari depan)

## Nilai Tambahan

- Jika praktikan melakukan pengujian dengan lebih banyak variasi data (misalnya lebih dari 3 nilai n), memberikan analisis yang jelas dan tepat mengenai perbedaan kompleksitas, dan dapat menjelaskan hubungan antara struktur data dan efisiensi program secara logis, akan mendapat nilai tambahan.
- Semakin detail dan tepat dari analisis, maka nilainya akan semakin tinggi.

## Ketentuan Pengerjaan

1. Praktikan wajib menjalankan kedua program (Queue dan ArrayList) yang telah disediakan.
2. Praktikan diperbolehkan mengubah jumlah data (n) minimal 3 variasi (misalnya: 1000, 5000, 10000).
3. Praktikan wajib mencatat dan screenshot hasil waktu eksekusi dari masing-masing program.
4. Pengerjaan dilakukan di lembar kerja yang akan dibagikan oleh asisten di Google Classroom.

## Program

### Source Code 1:

```java
import java.util.ArrayList;

public class AntrianArrayList {
    public static void main(String[] args) {
        int n = 10000;

        ArrayList<Integer> antrian = new ArrayList<>();

        long start = System.nanoTime();

        // pelanggan datang
        for (int i = 0; i < n; i++) {
            antrian.add(i);
        }

        // pelanggan dilayani dari depan
        while (!antrian.isEmpty()) {
            antrian.remove(0);
        }

        long end = System.nanoTime();

        System.out.println("Waktu yang dibutuhkan oleh ArrayList: " + (end - start) + " ns");
    }
}
```

### Source Code 2:

```java
import java.util.LinkedList;
import java.util.Queue;

public class AntrianQueue {
    public static void main(String[] args) {
        int n = 10000;

        Queue<Integer> antrian = new LinkedList<>();

        long start = System.nanoTime();

        // pelanggan datang
        for (int i = 0; i < n; i++) {
            antrian.add(i);
        }

        // pelanggan dilayani dari depan
        while (!antrian.isEmpty()) {
            antrian.poll();
        }

        long end = System.nanoTime();

        System.out.println("Waktu yang dibutuhkan oleh Queue: " + (end - start) + " ns");
    }
}
```

## Ketentuan Pengumpulan

- File yang dikumpulkan adalah file `.pdf` lembar kerja Praktikum 3 yang dibagikan di Google Classroom
- Format nama file: `KELAS_SDA_NO-PRAKTIKUM_NIM_NAMA`

**Contoh:** `A_SDA_03_L0125000_KaorukoWahyudi`