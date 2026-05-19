---
sidebar_position: 1
---

# Sorting
Sorting (pengurutan) adalah proses mengatur sekumpulan data atau elemen ke dalam urutan tertentu dan terstruktur, biasanya berdasarkan nilai numerik atau leksikografis (abjad) dari elemen tersebut. 

## Arah Pengurutan
Terdapat dua arah utama dalam melakukan pengurutan data:
- **Ascending (Menaik)**: Mengurutkan data dari nilai terkecil hingga terbesar (contoh: 1, 2, 3, 4 atau A, B, C, D).
- **Descending (Menurun)**: Mengurutkan data dari nilai terbesar hingga terkecil (contoh: 9, 8, 7, 6 atau Z, Y, X, W).

## Tujuan dan Manfaat Sorting
- **Optimasi Pencarian (Searching)**: Algoritma pencarian yang sangat cepat seperti Binary Search dengan kompleksitas O(log n) hanya bisa bekerja jika data sudah dalam keadaan terurut. Jika data acak, kita terpaksa menggunakan Linear Search O(n) yang lebih lambat.
- **Pemrosesan Data yang Lebih Mudah**: Menemukan nilai ekstrem (minimum atau maksimum), mengidentifikasi data duplikat, dan menemukan irisan/gabungan dari dua himpunan akan jauh lebih cepat jika kumpulan data tersebut sudah terurut.
- **Analisis Data**: Dalam pemrosesan data nyata, data yang terurut memudahkan manusia atau sistem untuk membaca pola dan distribusi data.

## Sorting Berdasarkan Kompleksitas Waktu
- **Quadratic Sorting Algorithms (O(n²))**: Mudah diimplementasikan tetapi lambat untuk jumlah data yang besar. Contoh: Bubble Sort, Selection Sort, Insertion Sort.
- **Log-Linear Sorting Algorithms (O(n log n))**: Jauh lebih efisien dan sering digunakan dalam standar industri atau library bahasa pemrograman untuk data berjumlah besar. Contoh: Merge Sort, Quick Sort, Heap Sort.

