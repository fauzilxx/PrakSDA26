---
sidebar_position: 1
---

# ARRAY

Array adalah kumpulan elemen dengan tipe data yang sama yang disimpan di lokasi memori
yang berurutan. Array memungkinkan penyimpanan beberapa nilai di bawah satu nama dan diakses menggunakan indeks.

 - Array Java dapat menyimpan baik tipe data primitif (seperti int, char, boolean, dll.) maupun objek (seperti String, Integer, dll.)
 - Saat kita menggunakan array tipe data primitif, elemen-elemennya disimpan di lokasi yang berurutan. Untuk tipe data non-primitif, referensi ke elemen-elemen tersebut disimpan di lokasi yang berurutan.
 - Elemen pertama dari array berada pada indeks 0.
 - Setelah membuat array, ukurannya tetap; kita tidak dapat mengubahnya.

![Gambaran Array](/img/Array.png)

## Deklarasi dan Inisialisasi Array

   **Contoh Kode :**
   ```
   int[] angka; atau int angka[]; // Deklarasi Array
   int[] numbers = new int[5]; // Array dengan 5 elemen
   int[] angka = {10, 20, 30, 40, 50}; // Array dengan elemen langsung
   ```

## Operasi Dasar pada Array
 1. Mengakses Elemen Array

    **Contoh Kode:**
    ```
    int[] angka = {10, 20, 30, 40, 50};
    System.out.println(angka[0]); // akses index ke 0 yaitu 10
    System.out.println(angka[1]); //akses index ke 1 yaitu 20
    System.out.println(angka[2]); // akses index ke 2 yaitu 30
    ```

 2. Mengubah Nilai Array

    **Contoh Kode:**
    ```
    angka[1] = 50;
    System.out.println(angka[1]); // mengubah index 0 dari 10 menjadi 50
    ```
 3. Menampilkan Semua Elemen Array

    **Contoh Kode:**
    ```
    //menggunakan for loop
    for (int i = 0; i < angka.length; i++){
    System.out.println("Index " + i + ": " + angka[i]);
    }
    
    //menggunakan for each
    for (int nilai : angka){
        System.out.println(nilai);
    }
    ```

## Kelebihan dan Kekurangan Array

| Aspek | Kelebihan | Kekurangan |
|-------|-----------|------------|
| Akses Elemen | Cepat ($O(1)$) karena menggunakan indeks | Tidak fleksibel dalam perubahan ukuran |
| Penambahan | Cepat jika di akhir (dengan indeks kosong) | Lambat ($O(n)$) jika di tengah atau awal karena pergeseran |
| Penghapusan | Bisa dilakukan dengan mudah jika di akhir ($O(1)$) | Lambat ($O(n)$) jika di tengah atau awal |
| Memori | Efisien jika ukuran tetap dan diketahui sebelumnya | Pemborosan memori jika ukuran terlalu besar |
| Kecepatan Umum | Sangat cepat untuk akses sekuensial atau acak | Tidak efisien untuk operasi insert/delete dinamis |

## Adakah yang Lebih Efektif Daripada Array?
Array adalah struktur data yang efisien untuk akses cepat dengan indeks tetap
, tetapi memiliki keterbatasan. Oleh karena itu, beberapa struktur data lain dikembangkan:

 1. List (ArrayList, LinkedList) → Untuk koleksi yang bisa bertambah dan berkurang ukurannya dengan mudah.
 2. Stack → Untuk operasi LIFO (Last In First Out), seperti undo-redo atau pemrosesan rekursi.
 3. Queue (dan Deque) → Untuk operasi FIFO (First In First Out), seperti antrian proses atau buffering.
 4. HashMap & HashSet → Untuk penyimpanan yang membutuhkan pencarian cepat berdasarkan kunci.

**Kesimpulan :** Array bagus untuk akses cepat, tetapi kurang fleksibel dalam ukuran dan operasi CRUD. Oleh karena itu, struktur data lain dikembangkan untuk mengatasi kekurangan ini.
